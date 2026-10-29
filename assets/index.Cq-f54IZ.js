(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function og(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Dd={exports:{}},jo={},Ud={exports:{}},Gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function n_(){if(Wm)return Gt;Wm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(F,re,we){this.props=F,this.context=re,this.refs=b,this.updater=we||M}x.prototype.isReactComponent={},x.prototype.setState=function(F,re){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,re,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=x.prototype;function R(F,re,we){this.props=F,this.context=re,this.refs=b,this.updater=we||M}var U=R.prototype=new v;U.constructor=R,E(U,x.prototype),U.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(F,re,we){var Ye,Xe={},Ze=null,ce=null;if(re!=null)for(Ye in re.ref!==void 0&&(ce=re.ref),re.key!==void 0&&(Ze=""+re.key),re)I.call(re,Ye)&&!O.hasOwnProperty(Ye)&&(Xe[Ye]=re[Ye]);var me=arguments.length-2;if(me===1)Xe.children=we;else if(1<me){for(var Re=Array(me),tt=0;tt<me;tt++)Re[tt]=arguments[tt+2];Xe.children=Re}if(F&&F.defaultProps)for(Ye in me=F.defaultProps,me)Xe[Ye]===void 0&&(Xe[Ye]=me[Ye]);return{$$typeof:r,type:F,key:Ze,ref:ce,props:Xe,_owner:N.current}}function L(F,re){return{$$typeof:r,type:F.type,key:re,ref:F.ref,props:F.props,_owner:F._owner}}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function W(F){var re={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(we){return re[we]})}var G=/\/+/g;function ne(F,re){return typeof F=="object"&&F!==null&&F.key!=null?W(""+F.key):re.toString(36)}function j(F,re,we,Ye,Xe){var Ze=typeof F;(Ze==="undefined"||Ze==="boolean")&&(F=null);var ce=!1;if(F===null)ce=!0;else switch(Ze){case"string":case"number":ce=!0;break;case"object":switch(F.$$typeof){case r:case e:ce=!0}}if(ce)return ce=F,Xe=Xe(ce),F=Ye===""?"."+ne(ce,0):Ye,A(Xe)?(we="",F!=null&&(we=F.replace(G,"$&/")+"/"),j(Xe,re,we,"",function(tt){return tt})):Xe!=null&&(V(Xe)&&(Xe=L(Xe,we+(!Xe.key||ce&&ce.key===Xe.key?"":(""+Xe.key).replace(G,"$&/")+"/")+F)),re.push(Xe)),1;if(ce=0,Ye=Ye===""?".":Ye+":",A(F))for(var me=0;me<F.length;me++){Ze=F[me];var Re=Ye+ne(Ze,me);ce+=j(Ze,re,we,Re,Xe)}else if(Re=_(F),typeof Re=="function")for(F=Re.call(F),me=0;!(Ze=F.next()).done;)Ze=Ze.value,Re=Ye+ne(Ze,me++),ce+=j(Ze,re,we,Re,Xe);else if(Ze==="object")throw re=String(F),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ce}function ie(F,re,we){if(F==null)return F;var Ye=[],Xe=0;return j(F,Ye,"","",function(Ze){return re.call(we,Ze,Xe++)}),Ye}function he(F){if(F._status===-1){var re=F._result;re=re(),re.then(function(we){(F._status===0||F._status===-1)&&(F._status=1,F._result=we)},function(we){(F._status===0||F._status===-1)&&(F._status=2,F._result=we)}),F._status===-1&&(F._status=0,F._result=re)}if(F._status===1)return F._result.default;throw F._result}var oe={current:null},J={transition:null},Z={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:J,ReactCurrentOwner:N};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Gt.Children={map:ie,forEach:function(F,re,we){ie(F,function(){re.apply(this,arguments)},we)},count:function(F){var re=0;return ie(F,function(){re++}),re},toArray:function(F){return ie(F,function(re){return re})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Gt.Component=x,Gt.Fragment=t,Gt.Profiler=o,Gt.PureComponent=R,Gt.StrictMode=s,Gt.Suspense=m,Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Gt.act=ee,Gt.cloneElement=function(F,re,we){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ye=E({},F.props),Xe=F.key,Ze=F.ref,ce=F._owner;if(re!=null){if(re.ref!==void 0&&(Ze=re.ref,ce=N.current),re.key!==void 0&&(Xe=""+re.key),F.type&&F.type.defaultProps)var me=F.type.defaultProps;for(Re in re)I.call(re,Re)&&!O.hasOwnProperty(Re)&&(Ye[Re]=re[Re]===void 0&&me!==void 0?me[Re]:re[Re])}var Re=arguments.length-2;if(Re===1)Ye.children=we;else if(1<Re){me=Array(Re);for(var tt=0;tt<Re;tt++)me[tt]=arguments[tt+2];Ye.children=me}return{$$typeof:r,type:F.type,key:Xe,ref:Ze,props:Ye,_owner:ce}},Gt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Gt.createElement=w,Gt.createFactory=function(F){var re=w.bind(null,F);return re.type=F,re},Gt.createRef=function(){return{current:null}},Gt.forwardRef=function(F){return{$$typeof:f,render:F}},Gt.isValidElement=V,Gt.lazy=function(F){return{$$typeof:S,_payload:{_status:-1,_result:F},_init:he}},Gt.memo=function(F,re){return{$$typeof:p,type:F,compare:re===void 0?null:re}},Gt.startTransition=function(F){var re=J.transition;J.transition={};try{F()}finally{J.transition=re}},Gt.unstable_act=ee,Gt.useCallback=function(F,re){return oe.current.useCallback(F,re)},Gt.useContext=function(F){return oe.current.useContext(F)},Gt.useDebugValue=function(){},Gt.useDeferredValue=function(F){return oe.current.useDeferredValue(F)},Gt.useEffect=function(F,re){return oe.current.useEffect(F,re)},Gt.useId=function(){return oe.current.useId()},Gt.useImperativeHandle=function(F,re,we){return oe.current.useImperativeHandle(F,re,we)},Gt.useInsertionEffect=function(F,re){return oe.current.useInsertionEffect(F,re)},Gt.useLayoutEffect=function(F,re){return oe.current.useLayoutEffect(F,re)},Gt.useMemo=function(F,re){return oe.current.useMemo(F,re)},Gt.useReducer=function(F,re,we){return oe.current.useReducer(F,re,we)},Gt.useRef=function(F){return oe.current.useRef(F)},Gt.useState=function(F){return oe.current.useState(F)},Gt.useSyncExternalStore=function(F,re,we){return oe.current.useSyncExternalStore(F,re,we)},Gt.useTransition=function(){return oe.current.useTransition()},Gt.version="18.3.1",Gt}var Xm;function fh(){return Xm||(Xm=1,Ud.exports=n_()),Ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function i_(){if(qm)return jo;qm=1;var r=fh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var S,y={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(S in m)s.call(m,S)&&!l.hasOwnProperty(S)&&(y[S]=m[S]);if(f&&f.defaultProps)for(S in m=f.defaultProps,m)y[S]===void 0&&(y[S]=m[S]);return{$$typeof:e,type:f,key:_,ref:M,props:y,_owner:o.current}}return jo.Fragment=t,jo.jsx=u,jo.jsxs=u,jo}var jm;function r_(){return jm||(jm=1,Dd.exports=i_()),Dd.exports}var D=r_(),st=fh();const s_=og(st);var fc={},Od={exports:{}},Ni={},Fd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function a_(){return $m||($m=1,(function(r){function e(J,Z){var ee=J.length;J.push(Z);e:for(;0<ee;){var F=ee-1>>>1,re=J[F];if(0<o(re,Z))J[F]=Z,J[ee]=re,ee=F;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var Z=J[0],ee=J.pop();if(ee!==Z){J[0]=ee;e:for(var F=0,re=J.length,we=re>>>1;F<we;){var Ye=2*(F+1)-1,Xe=J[Ye],Ze=Ye+1,ce=J[Ze];if(0>o(Xe,ee))Ze<re&&0>o(ce,Xe)?(J[F]=ce,J[Ze]=ee,F=Ze):(J[F]=Xe,J[Ye]=ee,F=Ye);else if(Ze<re&&0>o(ce,ee))J[F]=ce,J[Ze]=ee,F=Ze;else break e}}return Z}function o(J,Z){var ee=J.sortIndex-Z.sortIndex;return ee!==0?ee:J.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var m=[],p=[],S=1,y=null,_=3,M=!1,E=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(J){for(var Z=t(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=J)s(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=t(p)}}function A(J){if(b=!1,U(J),!E)if(t(m)!==null)E=!0,he(I);else{var Z=t(p);Z!==null&&oe(A,Z.startTime-J)}}function I(J,Z){E=!1,b&&(b=!1,v(w),w=-1),M=!0;var ee=_;try{for(U(Z),y=t(m);y!==null&&(!(y.expirationTime>Z)||J&&!W());){var F=y.callback;if(typeof F=="function"){y.callback=null,_=y.priorityLevel;var re=F(y.expirationTime<=Z);Z=r.unstable_now(),typeof re=="function"?y.callback=re:y===t(m)&&s(m),U(Z)}else s(m);y=t(m)}if(y!==null)var we=!0;else{var Ye=t(p);Ye!==null&&oe(A,Ye.startTime-Z),we=!1}return we}finally{y=null,_=ee,M=!1}}var N=!1,O=null,w=-1,L=5,V=-1;function W(){return!(r.unstable_now()-V<L)}function G(){if(O!==null){var J=r.unstable_now();V=J;var Z=!0;try{Z=O(!0,J)}finally{Z?ne():(N=!1,O=null)}}else N=!1}var ne;if(typeof R=="function")ne=function(){R(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ie=j.port2;j.port1.onmessage=G,ne=function(){ie.postMessage(null)}}else ne=function(){x(G,0)};function he(J){O=J,N||(N=!0,ne())}function oe(J,Z){w=x(function(){J(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,he(I))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(J){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var ee=_;_=Z;try{return J()}finally{_=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,Z){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=_;_=J;try{return Z()}finally{_=ee}},r.unstable_scheduleCallback=function(J,Z,ee){var F=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?F+ee:F):ee=F,J){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ee+re,J={id:S++,callback:Z,priorityLevel:J,startTime:ee,expirationTime:re,sortIndex:-1},ee>F?(J.sortIndex=ee,e(p,J),t(m)===null&&J===t(p)&&(b?(v(w),w=-1):b=!0,oe(A,ee-F))):(J.sortIndex=re,e(m,J),E||M||(E=!0,he(I))),J},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(J){var Z=_;return function(){var ee=_;_=Z;try{return J.apply(this,arguments)}finally{_=ee}}}})(kd)),kd}var Ym;function o_(){return Ym||(Ym=1,Fd.exports=a_()),Fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function l_(){if(Km)return Ni;Km=1;var r=fh(),e=o_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},y={};function _(n){return m.call(y,n)?!0:m.call(S,n)?!1:p.test(n)?y[n]=!0:(S[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,d,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,R);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,R);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,R);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),W=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),J=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,F;function re(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var we=!1;function Ye(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),g=c.stack.split(`
`),C=d.length-1,H=g.length-1;1<=C&&0<=H&&d[C]!==g[H];)H--;for(;1<=C&&0<=H;C--,H--)if(d[C]!==g[H]){if(C!==1||H!==1)do if(C--,H--,0>H||d[C]!==g[H]){var q=`
`+d[C].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=C&&0<=H);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function Xe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Ye(n.type,!1),n;case 11:return n=Ye(n.type.render,!1),n;case 1:return n=Ye(n.type,!0),n;default:return""}}function Ze(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case N:return"Portal";case L:return"Profiler";case w:return"StrictMode";case ne:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case G:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:Ze(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return Ze(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ze(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(n){var i=Re(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(C){c=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function He(n){n._valueTracker||(n._valueTracker=tt(n))}function gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function kt(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function ut(n,i){kt(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?zt(n,i.type,a):i.hasOwnProperty("defaultValue")&&zt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Bt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function zt(n,i,a){(i!=="number"||Ft(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Xt=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ct(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Xt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function Vt(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?k(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ae[i]=Ae[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+i).trim():i+"px"}function Se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var De=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(De[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var je=null,ct=null,B=null;function Pe(n){if(n=No(n)){if(typeof je!="function")throw Error(t(280));var i=n.stateNode;i&&(i=bl(i),je(n.stateNode,n.type,i))}}function de(n){ct?B?B.push(n):B=[n]:ct=n}function Ie(){if(ct){var n=ct,i=B;if(B=ct=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function ze(n,i){return n(i)}function Me(){}var We=!1;function Te(n,i,a){if(We)return n(i,a);We=!0;try{return ze(n,i,a)}finally{We=!1,(ct!==null||B!==null)&&(Me(),Ie())}}function ke(n,i){var a=n.stateNode;if(a===null)return null;var c=bl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var pt=!1;if(f)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){pt=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch{pt=!1}function Qt(n,i,a,c,d,g,C,H,q){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(Ce){this.onError(Ce)}}var Mn=!1,ti=null,dt=!1,ni=null,Er={onError:function(n){Mn=!0,ti=n}};function Mi(n,i,a,c,d,g,C,H,q){Mn=!1,ti=null,Qt.apply(Er,arguments)}function $i(n,i,a,c,d,g,C,H,q){if(Mi.apply(this,arguments),Mn){if(Mn){var ve=ti;Mn=!1,ti=null}else throw Error(t(198));dt||(dt=!0,ni=ve)}}function It(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Dn(n){if(It(n)!==n)throw Error(t(188))}function jt(n){var i=n.alternate;if(!i){if(i=It(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Dn(d),n;if(g===c)return Dn(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var C=!1,H=d.child;H;){if(H===a){C=!0,a=d,c=g;break}if(H===c){C=!0,c=d,a=g;break}H=H.sibling}if(!C){for(H=g.child;H;){if(H===a){C=!0,a=g,c=d;break}if(H===c){C=!0,c=g,a=d;break}H=H.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function pn(n){return n=jt(n),n!==null?ii(n):null}function ii(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ii(n);if(i!==null)return i;n=n.sibling}return null}var mi=e.unstable_scheduleCallback,sr=e.unstable_cancelCallback,Fi=e.unstable_shouldYield,Yi=e.unstable_requestPaint,$t=e.unstable_now,Vr=e.unstable_getCurrentPriorityLevel,wr=e.unstable_ImmediatePriority,Tr=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,$=e.unstable_LowPriority,pe=e.unstable_IdlePriority,ae=null,se=null;function Be(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:it,Ge=Math.log,et=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Ge(n)/et|0)|0}var St=64,Et=4194304;function $e(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ut(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var H=C&~d;H!==0?c=$e(H):(g&=C,g!==0&&(c=$e(g)))}else C=a&~d,C!==0?c=$e(C):g!==0&&(c=$e(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),d=1<<a,c|=n[a],i&=~d;return c}function un(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-Ve(g),H=1<<C,q=d[C];q===-1?((H&a)===0||(H&c)!==0)&&(d[C]=un(H,i)):q<=i&&(n.expiredLanes|=H),g&=~H}}function h(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function z(){var n=St;return St<<=1,(St&4194240)===0&&(St=64),n}function X(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ye(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function Le(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ve(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Dt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ft=0;function an(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var En,At,Yt,Pn,mt,Kt=!1,dn=[],Vn=null,$n=null,Hn=null,Hr=new Map,ar=new Map,ki=[],xa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ei(n,i){switch(n){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Hr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(i.pointerId)}}function gi(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=No(i),i!==null&&At(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Sa(n,i,a,c,d){switch(i){case"focusin":return Vn=gi(Vn,n,i,a,c,d),!0;case"dragenter":return $n=gi($n,n,i,a,c,d),!0;case"mouseover":return Hn=gi(Hn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Hr.set(g,gi(Hr.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ar.set(g,gi(ar.get(g)||null,n,i,a,c,d)),!0}return!1}function Fs(n){var i=Xs(n.target);if(i!==null){var a=It(i);if(a!==null){if(i=a.tag,i===13){if(i=zn(a),i!==null){n.blockedOn=i,mt(n.priority,function(){Yt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function us(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=mn(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ee=c,a.target.dispatchEvent(c),Ee=null}else return i=No(a),i!==null&&At(i),n.blockedOn=a,!1;i.shift()}return!0}function ks(n,i,a){us(n)&&a.delete(i)}function Bs(){Kt=!1,Vn!==null&&us(Vn)&&(Vn=null),$n!==null&&us($n)&&($n=null),Hn!==null&&us(Hn)&&(Hn=null),Hr.forEach(ks),ar.forEach(ks)}function Ar(n,i){n.blockedOn===i&&(n.blockedOn=null,Kt||(Kt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bs)))}function or(n){function i(d){return Ar(d,n)}if(0<dn.length){Ar(dn[0],n);for(var a=1;a<dn.length;a++){var c=dn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vn!==null&&Ar(Vn,n),$n!==null&&Ar($n,n),Hn!==null&&Ar(Hn,n),Hr.forEach(i),ar.forEach(i),a=0;a<ki.length;a++)c=ki[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ki.length&&(a=ki[0],a.blockedOn===null);)Fs(a),a.blockedOn===null&&ki.shift()}var vi=A.ReactCurrentBatchConfig,Gr=!0;function ya(n,i,a,c){var d=ft,g=vi.transition;vi.transition=null;try{ft=1,br(n,i,a,c)}finally{ft=d,vi.transition=g}}function Ma(n,i,a,c){var d=ft,g=vi.transition;vi.transition=null;try{ft=4,br(n,i,a,c)}finally{ft=d,vi.transition=g}}function br(n,i,a,c){if(Gr){var d=mn(n,i,a,c);if(d===null)wu(n,i,c,Pt,a),Ei(n,c);else if(Sa(d,n,i,a,c))c.stopPropagation();else if(Ei(n,c),i&4&&-1<xa.indexOf(n)){for(;d!==null;){var g=No(d);if(g!==null&&En(g),g=mn(n,i,a,c),g===null&&wu(n,i,c,Pt,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else wu(n,i,c,null,a)}}var Pt=null;function mn(n,i,a,c){if(Pt=null,n=Qe(c),n=Xs(n),n!==null)if(i=It(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Pt=n,null}function wi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vr()){case wr:return 1;case Tr:return 4;case P:case $:return 16;case pe:return 536870912;default:return 16}default:return 16}}var Bi=null,Yn=null,Wr=null;function gl(){if(Wr)return Wr;var n,i=Yn,a=i.length,c,d="value"in Bi?Bi.value:Bi.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===d[g-c];c++);return Wr=d.slice(n,1<c?1-c:void 0)}function ds(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function zs(){return!0}function _o(){return!1}function ri(n){function i(a,c,d,g,C){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(g):g[H]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zs:_o,this.isPropagationStopped=_o,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zs)},persist:function(){},isPersistent:zs}),i}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=ri(Xr),Vs=ee({},Xr,{view:0,detail:0}),du=ri(Vs),xo,So,Hs,Gs=ee({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ai,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hs&&(Hs&&n.type==="mousemove"?(xo=n.screenX-Hs.screenX,So=n.screenY-Hs.screenY):So=xo=0,Hs=n),xo)},movementY:function(n){return"movementY"in n?n.movementY:So}}),nt=ri(Gs),nn=ee({},Gs,{dataTransfer:0}),gn=ri(nn),vn=ee({},Vs,{relatedTarget:0}),si=ri(vn),bn=ee({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),ai=ri(bn),Ti=ee({},Xr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ln=ri(Ti),lr=ee({},Xr,{data:0}),zi=ri(lr),Ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fs(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yo[n])?!!i[n]:!1}function Ai(){return fs}var vl=ee({},Vs,{key:function(n){if(n.key){var i=Ws[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ds(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cr[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ai,charCode:function(n){return n.type==="keypress"?ds(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ds(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_l=ri(vl),fu=ee({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=ri(fu),hu=ee({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ai}),wa=ri(hu),xl=ee({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ta=ri(xl),Yg=ee({},Gs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=ri(Yg),Zg=[9,13,27,32],pu=f&&"CompositionEvent"in window,Eo=null;f&&"documentMode"in document&&(Eo=document.documentMode);var Jg=f&&"TextEvent"in window&&!Eo,Oh=f&&(!pu||Eo&&8<Eo&&11>=Eo),Fh=" ",kh=!1;function Bh(n,i){switch(n){case"keyup":return Zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Aa=!1;function Qg(n,i){switch(n){case"compositionend":return zh(i);case"keypress":return i.which!==32?null:(kh=!0,Fh);case"textInput":return n=i.data,n===Fh&&kh?null:n;default:return null}}function ev(n,i){if(Aa)return n==="compositionend"||!pu&&Bh(n,i)?(n=gl(),Wr=Yn=Bi=null,Aa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Oh&&i.locale!=="ko"?null:i.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!tv[n.type]:i==="textarea"}function Hh(n,i,a,c){de(c),i=wl(i,"onChange"),0<i.length&&(a=new Ea("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var wo=null,To=null;function nv(n){ap(n,0)}function Sl(n){var i=La(n);if(gt(i))return n}function iv(n,i){if(n==="change")return i}var Gh=!1;if(f){var mu;if(f){var gu="oninput"in document;if(!gu){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),gu=typeof Wh.oninput=="function"}mu=gu}else mu=!1;Gh=mu&&(!document.documentMode||9<document.documentMode)}function Xh(){wo&&(wo.detachEvent("onpropertychange",qh),To=wo=null)}function qh(n){if(n.propertyName==="value"&&Sl(To)){var i=[];Hh(i,To,n,Qe(n)),Te(nv,i)}}function rv(n,i,a){n==="focusin"?(Xh(),wo=i,To=a,wo.attachEvent("onpropertychange",qh)):n==="focusout"&&Xh()}function sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sl(To)}function av(n,i){if(n==="click")return Sl(i)}function ov(n,i){if(n==="input"||n==="change")return Sl(i)}function lv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ur=typeof Object.is=="function"?Object.is:lv;function Ao(n,i){if(ur(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!ur(n[d],i[d]))return!1}return!0}function jh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $h(n,i){var a=jh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jh(a)}}function Yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Kh(){for(var n=window,i=Ft();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ft(n.document)}return i}function vu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function cv(n){var i=Kh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Yh(a.ownerDocument.documentElement,a)){if(c!==null&&vu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=$h(a,g);var C=$h(a,c);d&&C&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=f&&"documentMode"in document&&11>=document.documentMode,ba=null,_u=null,bo=null,xu=!1;function Zh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||ba==null||ba!==Ft(c)||(c=ba,"selectionStart"in c&&vu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),bo&&Ao(bo,c)||(bo=c,c=wl(_u,"onSelect"),0<c.length&&(i=new Ea("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ba)))}function yl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ra={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Su={},Jh={};f&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Ml(n){if(Su[n])return Su[n];if(!Ra[n])return n;var i=Ra[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jh)return Su[n]=i[a];return n}var Qh=Ml("animationend"),ep=Ml("animationiteration"),tp=Ml("animationstart"),np=Ml("transitionend"),ip=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hs(n,i){ip.set(n,i),l(i,[n])}for(var yu=0;yu<rp.length;yu++){var Mu=rp[yu],dv=Mu.toLowerCase(),fv=Mu[0].toUpperCase()+Mu.slice(1);hs(dv,"on"+fv)}hs(Qh,"onAnimationEnd"),hs(ep,"onAnimationIteration"),hs(tp,"onAnimationStart"),hs("dblclick","onDoubleClick"),hs("focusin","onFocus"),hs("focusout","onBlur"),hs(np,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function sp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,$i(c,i,void 0,n),n.currentTarget=null}function ap(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var C=c.length-1;0<=C;C--){var H=c[C],q=H.instance,ve=H.currentTarget;if(H=H.listener,q!==g&&d.isPropagationStopped())break e;sp(d,H,ve),g=q}else for(C=0;C<c.length;C++){if(H=c[C],q=H.instance,ve=H.currentTarget,H=H.listener,q!==g&&d.isPropagationStopped())break e;sp(d,H,ve),g=q}}}if(dt)throw n=ni,dt=!1,ni=null,n}function _n(n,i){var a=i[Pu];a===void 0&&(a=i[Pu]=new Set);var c=n+"__bubble";a.has(c)||(op(i,n,2,!1),a.add(c))}function Eu(n,i,a){var c=0;i&&(c|=4),op(a,n,c,i)}var El="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[El]){n[El]=!0,s.forEach(function(a){a!=="selectionchange"&&(hv.has(a)||Eu(a,!1,n),Eu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[El]||(i[El]=!0,Eu("selectionchange",!1,i))}}function op(n,i,a,c){switch(wi(i)){case 1:var d=ya;break;case 4:d=Ma;break;default:d=br}a=d.bind(null,i,a,n),d=void 0,!pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function wu(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var H=c.stateNode.containerInfo;if(H===d||H.nodeType===8&&H.parentNode===d)break;if(C===4)for(C=c.return;C!==null;){var q=C.tag;if((q===3||q===4)&&(q=C.stateNode.containerInfo,q===d||q.nodeType===8&&q.parentNode===d))return;C=C.return}for(;H!==null;){if(C=Xs(H),C===null)return;if(q=C.tag,q===5||q===6){c=g=C;continue e}H=H.parentNode}}c=c.return}Te(function(){var ve=g,Ce=Qe(a),Ne=[];e:{var be=ip.get(n);if(be!==void 0){var Je=Ea,at=n;switch(n){case"keypress":if(ds(a)===0)break e;case"keydown":case"keyup":Je=_l;break;case"focusin":at="focus",Je=si;break;case"focusout":at="blur",Je=si;break;case"beforeblur":case"afterblur":Je=si;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=nt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=wa;break;case Qh:case ep:case tp:Je=ai;break;case np:Je=Ta;break;case"scroll":Je=du;break;case"wheel":Je=Kg;break;case"copy":case"cut":case"paste":Je=Ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Mo}var ot=(i&4)!==0,Cn=!ot&&n==="scroll",ue=ot?be!==null?be+"Capture":null:be;ot=[];for(var K=ve,fe;K!==null;){fe=K;var Ue=fe.stateNode;if(fe.tag===5&&Ue!==null&&(fe=Ue,ue!==null&&(Ue=ke(K,ue),Ue!=null&&ot.push(Po(K,Ue,fe)))),Cn)break;K=K.return}0<ot.length&&(be=new Je(be,at,null,a,Ce),Ne.push({event:be,listeners:ot}))}}if((i&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",be&&a!==Ee&&(at=a.relatedTarget||a.fromElement)&&(Xs(at)||at[qr]))break e;if((Je||be)&&(be=Ce.window===Ce?Ce:(be=Ce.ownerDocument)?be.defaultView||be.parentWindow:window,Je?(at=a.relatedTarget||a.toElement,Je=ve,at=at?Xs(at):null,at!==null&&(Cn=It(at),at!==Cn||at.tag!==5&&at.tag!==6)&&(at=null)):(Je=null,at=ve),Je!==at)){if(ot=nt,Ue="onMouseLeave",ue="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Mo,Ue="onPointerLeave",ue="onPointerEnter",K="pointer"),Cn=Je==null?be:La(Je),fe=at==null?be:La(at),be=new ot(Ue,K+"leave",Je,a,Ce),be.target=Cn,be.relatedTarget=fe,Ue=null,Xs(Ce)===ve&&(ot=new ot(ue,K+"enter",at,a,Ce),ot.target=fe,ot.relatedTarget=Cn,Ue=ot),Cn=Ue,Je&&at)t:{for(ot=Je,ue=at,K=0,fe=ot;fe;fe=Ca(fe))K++;for(fe=0,Ue=ue;Ue;Ue=Ca(Ue))fe++;for(;0<K-fe;)ot=Ca(ot),K--;for(;0<fe-K;)ue=Ca(ue),fe--;for(;K--;){if(ot===ue||ue!==null&&ot===ue.alternate)break t;ot=Ca(ot),ue=Ca(ue)}ot=null}else ot=null;Je!==null&&lp(Ne,be,Je,ot,!1),at!==null&&Cn!==null&&lp(Ne,Cn,at,ot,!0)}}e:{if(be=ve?La(ve):window,Je=be.nodeName&&be.nodeName.toLowerCase(),Je==="select"||Je==="input"&&be.type==="file")var lt=iv;else if(Vh(be))if(Gh)lt=ov;else{lt=sv;var vt=rv}else(Je=be.nodeName)&&Je.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(lt=av);if(lt&&(lt=lt(n,ve))){Hh(Ne,lt,a,Ce);break e}vt&&vt(n,be,ve),n==="focusout"&&(vt=be._wrapperState)&&vt.controlled&&be.type==="number"&&zt(be,"number",be.value)}switch(vt=ve?La(ve):window,n){case"focusin":(Vh(vt)||vt.contentEditable==="true")&&(ba=vt,_u=ve,bo=null);break;case"focusout":bo=_u=ba=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Zh(Ne,a,Ce);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Zh(Ne,a,Ce)}var _t;if(pu)e:{switch(n){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Aa?Bh(n,a)&&(bt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Oh&&a.locale!=="ko"&&(Aa||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Aa&&(_t=gl()):(Bi=Ce,Yn="value"in Bi?Bi.value:Bi.textContent,Aa=!0)),vt=wl(ve,bt),0<vt.length&&(bt=new zi(bt,n,null,a,Ce),Ne.push({event:bt,listeners:vt}),_t?bt.data=_t:(_t=zh(a),_t!==null&&(bt.data=_t)))),(_t=Jg?Qg(n,a):ev(n,a))&&(ve=wl(ve,"onBeforeInput"),0<ve.length&&(Ce=new zi("onBeforeInput","beforeinput",null,a,Ce),Ne.push({event:Ce,listeners:ve}),Ce.data=_t))}ap(Ne,i)})}function Po(n,i,a){return{instance:n,listener:i,currentTarget:a}}function wl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=ke(n,a),g!=null&&c.unshift(Po(n,g,d)),g=ke(n,i),g!=null&&c.push(Po(n,g,d))),n=n.return}return c}function Ca(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,i,a,c,d){for(var g=i._reactName,C=[];a!==null&&a!==c;){var H=a,q=H.alternate,ve=H.stateNode;if(q!==null&&q===c)break;H.tag===5&&ve!==null&&(H=ve,d?(q=ke(a,g),q!=null&&C.unshift(Po(a,q,H))):d||(q=ke(a,g),q!=null&&C.push(Po(a,q,H)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function cp(n){return(typeof n=="string"?n:""+n).replace(pv,`
`).replace(mv,"")}function Tl(n,i,a){if(i=cp(i),cp(n)!==i&&a)throw Error(t(425))}function Al(){}var Tu=null,Au=null;function bu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(n){return up.resolve(null).then(n).catch(_v)}:Ru;function _v(n){setTimeout(function(){throw n})}function Cu(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),or(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);or(i)}function ps(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function dp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Pa=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Pa,Lo="__reactProps$"+Pa,qr="__reactContainer$"+Pa,Pu="__reactEvents$"+Pa,xv="__reactListeners$"+Pa,Sv="__reactHandles$"+Pa;function Xs(n){var i=n[Rr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[qr]||a[Rr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=dp(n);n!==null;){if(a=n[Rr])return a;n=dp(n)}return i}n=a,a=n.parentNode}return null}function No(n){return n=n[Rr]||n[qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function La(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function bl(n){return n[Lo]||null}var Lu=[],Na=-1;function ms(n){return{current:n}}function xn(n){0>Na||(n.current=Lu[Na],Lu[Na]=null,Na--)}function hn(n,i){Na++,Lu[Na]=n.current,n.current=i}var gs={},oi=ms(gs),bi=ms(!1),qs=gs;function Ia(n,i){var a=n.type.contextTypes;if(!a)return gs;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ri(n){return n=n.childContextTypes,n!=null}function Rl(){xn(bi),xn(oi)}function fp(n,i,a){if(oi.current!==gs)throw Error(t(168));hn(oi,i),hn(bi,a)}function hp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ce(n)||"Unknown",d));return ee({},a,c)}function Cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gs,qs=oi.current,hn(oi,n),hn(bi,bi.current),!0}function pp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=hp(n,i,qs),c.__reactInternalMemoizedMergedChildContext=n,xn(bi),xn(oi),hn(oi,n)):xn(bi),hn(bi,a)}var jr=null,Pl=!1,Nu=!1;function mp(n){jr===null?jr=[n]:jr.push(n)}function yv(n){Pl=!0,mp(n)}function vs(){if(!Nu&&jr!==null){Nu=!0;var n=0,i=ft;try{var a=jr;for(ft=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}jr=null,Pl=!1}catch(d){throw jr!==null&&(jr=jr.slice(n+1)),mi(wr,vs),d}finally{ft=i,Nu=!1}}return null}var Da=[],Ua=0,Ll=null,Nl=0,Ki=[],Zi=0,js=null,$r=1,Yr="";function $s(n,i){Da[Ua++]=Nl,Da[Ua++]=Ll,Ll=n,Nl=i}function gp(n,i,a){Ki[Zi++]=$r,Ki[Zi++]=Yr,Ki[Zi++]=js,js=n;var c=$r;n=Yr;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var g=32-Ve(i)+d;if(30<g){var C=d-d%5;g=(c&(1<<C)-1).toString(32),c>>=C,d-=C,$r=1<<32-Ve(i)+d|a<<d|c,Yr=g+n}else $r=1<<g|a<<d|c,Yr=n}function Iu(n){n.return!==null&&($s(n,1),gp(n,1,0))}function Du(n){for(;n===Ll;)Ll=Da[--Ua],Da[Ua]=null,Nl=Da[--Ua],Da[Ua]=null;for(;n===js;)js=Ki[--Zi],Ki[Zi]=null,Yr=Ki[--Zi],Ki[Zi]=null,$r=Ki[--Zi],Ki[Zi]=null}var Vi=null,Hi=null,Sn=!1,dr=null;function vp(n,i){var a=tr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function _p(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vi=n,Hi=ps(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vi=n,Hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=js!==null?{id:$r,overflow:Yr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=tr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vi=n,Hi=null,!0):!1;default:return!1}}function Uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ou(n){if(Sn){var i=Hi;if(i){var a=i;if(!_p(n,i)){if(Uu(n))throw Error(t(418));i=ps(a.nextSibling);var c=Vi;i&&_p(n,i)?vp(c,a):(n.flags=n.flags&-4097|2,Sn=!1,Vi=n)}}else{if(Uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Sn=!1,Vi=n}}}function xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vi=n}function Il(n){if(n!==Vi)return!1;if(!Sn)return xp(n),Sn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!bu(n.type,n.memoizedProps)),i&&(i=Hi)){if(Uu(n))throw Sp(),Error(t(418));for(;i;)vp(n,i),i=ps(i.nextSibling)}if(xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Hi=ps(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Hi=null}}else Hi=Vi?ps(n.stateNode.nextSibling):null;return!0}function Sp(){for(var n=Hi;n;)n=ps(n.nextSibling)}function Oa(){Hi=Vi=null,Sn=!1}function Fu(n){dr===null?dr=[n]:dr.push(n)}var Mv=A.ReactCurrentBatchConfig;function Io(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var H=d.refs;C===null?delete H[g]:H[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Dl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function yp(n){var i=n._init;return i(n._payload)}function Mp(n){function i(ue,K){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[K],ue.flags|=16):fe.push(K)}}function a(ue,K){if(!n)return null;for(;K!==null;)i(ue,K),K=K.sibling;return null}function c(ue,K){for(ue=new Map;K!==null;)K.key!==null?ue.set(K.key,K):ue.set(K.index,K),K=K.sibling;return ue}function d(ue,K){return ue=Ts(ue,K),ue.index=0,ue.sibling=null,ue}function g(ue,K,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<K?(ue.flags|=2,K):fe):(ue.flags|=2,K)):(ue.flags|=1048576,K)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function H(ue,K,fe,Ue){return K===null||K.tag!==6?(K=Rd(fe,ue.mode,Ue),K.return=ue,K):(K=d(K,fe),K.return=ue,K)}function q(ue,K,fe,Ue){var lt=fe.type;return lt===O?Ce(ue,K,fe.props.children,Ue,fe.key):K!==null&&(K.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===he&&yp(lt)===K.type)?(Ue=d(K,fe.props),Ue.ref=Io(ue,K,fe),Ue.return=ue,Ue):(Ue=rc(fe.type,fe.key,fe.props,null,ue.mode,Ue),Ue.ref=Io(ue,K,fe),Ue.return=ue,Ue)}function ve(ue,K,fe,Ue){return K===null||K.tag!==4||K.stateNode.containerInfo!==fe.containerInfo||K.stateNode.implementation!==fe.implementation?(K=Cd(fe,ue.mode,Ue),K.return=ue,K):(K=d(K,fe.children||[]),K.return=ue,K)}function Ce(ue,K,fe,Ue,lt){return K===null||K.tag!==7?(K=na(fe,ue.mode,Ue,lt),K.return=ue,K):(K=d(K,fe),K.return=ue,K)}function Ne(ue,K,fe){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Rd(""+K,ue.mode,fe),K.return=ue,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case I:return fe=rc(K.type,K.key,K.props,null,ue.mode,fe),fe.ref=Io(ue,null,K),fe.return=ue,fe;case N:return K=Cd(K,ue.mode,fe),K.return=ue,K;case he:var Ue=K._init;return Ne(ue,Ue(K._payload),fe)}if(Xt(K)||Z(K))return K=na(K,ue.mode,fe,null),K.return=ue,K;Dl(ue,K)}return null}function be(ue,K,fe,Ue){var lt=K!==null?K.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return lt!==null?null:H(ue,K,""+fe,Ue);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case I:return fe.key===lt?q(ue,K,fe,Ue):null;case N:return fe.key===lt?ve(ue,K,fe,Ue):null;case he:return lt=fe._init,be(ue,K,lt(fe._payload),Ue)}if(Xt(fe)||Z(fe))return lt!==null?null:Ce(ue,K,fe,Ue,null);Dl(ue,fe)}return null}function Je(ue,K,fe,Ue,lt){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return ue=ue.get(fe)||null,H(K,ue,""+Ue,lt);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case I:return ue=ue.get(Ue.key===null?fe:Ue.key)||null,q(K,ue,Ue,lt);case N:return ue=ue.get(Ue.key===null?fe:Ue.key)||null,ve(K,ue,Ue,lt);case he:var vt=Ue._init;return Je(ue,K,fe,vt(Ue._payload),lt)}if(Xt(Ue)||Z(Ue))return ue=ue.get(fe)||null,Ce(K,ue,Ue,lt,null);Dl(K,Ue)}return null}function at(ue,K,fe,Ue){for(var lt=null,vt=null,_t=K,bt=K=0,Xn=null;_t!==null&&bt<fe.length;bt++){_t.index>bt?(Xn=_t,_t=null):Xn=_t.sibling;var rn=be(ue,_t,fe[bt],Ue);if(rn===null){_t===null&&(_t=Xn);break}n&&_t&&rn.alternate===null&&i(ue,_t),K=g(rn,K,bt),vt===null?lt=rn:vt.sibling=rn,vt=rn,_t=Xn}if(bt===fe.length)return a(ue,_t),Sn&&$s(ue,bt),lt;if(_t===null){for(;bt<fe.length;bt++)_t=Ne(ue,fe[bt],Ue),_t!==null&&(K=g(_t,K,bt),vt===null?lt=_t:vt.sibling=_t,vt=_t);return Sn&&$s(ue,bt),lt}for(_t=c(ue,_t);bt<fe.length;bt++)Xn=Je(_t,ue,bt,fe[bt],Ue),Xn!==null&&(n&&Xn.alternate!==null&&_t.delete(Xn.key===null?bt:Xn.key),K=g(Xn,K,bt),vt===null?lt=Xn:vt.sibling=Xn,vt=Xn);return n&&_t.forEach(function(As){return i(ue,As)}),Sn&&$s(ue,bt),lt}function ot(ue,K,fe,Ue){var lt=Z(fe);if(typeof lt!="function")throw Error(t(150));if(fe=lt.call(fe),fe==null)throw Error(t(151));for(var vt=lt=null,_t=K,bt=K=0,Xn=null,rn=fe.next();_t!==null&&!rn.done;bt++,rn=fe.next()){_t.index>bt?(Xn=_t,_t=null):Xn=_t.sibling;var As=be(ue,_t,rn.value,Ue);if(As===null){_t===null&&(_t=Xn);break}n&&_t&&As.alternate===null&&i(ue,_t),K=g(As,K,bt),vt===null?lt=As:vt.sibling=As,vt=As,_t=Xn}if(rn.done)return a(ue,_t),Sn&&$s(ue,bt),lt;if(_t===null){for(;!rn.done;bt++,rn=fe.next())rn=Ne(ue,rn.value,Ue),rn!==null&&(K=g(rn,K,bt),vt===null?lt=rn:vt.sibling=rn,vt=rn);return Sn&&$s(ue,bt),lt}for(_t=c(ue,_t);!rn.done;bt++,rn=fe.next())rn=Je(_t,ue,bt,rn.value,Ue),rn!==null&&(n&&rn.alternate!==null&&_t.delete(rn.key===null?bt:rn.key),K=g(rn,K,bt),vt===null?lt=rn:vt.sibling=rn,vt=rn);return n&&_t.forEach(function(t_){return i(ue,t_)}),Sn&&$s(ue,bt),lt}function Cn(ue,K,fe,Ue){if(typeof fe=="object"&&fe!==null&&fe.type===O&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case I:e:{for(var lt=fe.key,vt=K;vt!==null;){if(vt.key===lt){if(lt=fe.type,lt===O){if(vt.tag===7){a(ue,vt.sibling),K=d(vt,fe.props.children),K.return=ue,ue=K;break e}}else if(vt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===he&&yp(lt)===vt.type){a(ue,vt.sibling),K=d(vt,fe.props),K.ref=Io(ue,vt,fe),K.return=ue,ue=K;break e}a(ue,vt);break}else i(ue,vt);vt=vt.sibling}fe.type===O?(K=na(fe.props.children,ue.mode,Ue,fe.key),K.return=ue,ue=K):(Ue=rc(fe.type,fe.key,fe.props,null,ue.mode,Ue),Ue.ref=Io(ue,K,fe),Ue.return=ue,ue=Ue)}return C(ue);case N:e:{for(vt=fe.key;K!==null;){if(K.key===vt)if(K.tag===4&&K.stateNode.containerInfo===fe.containerInfo&&K.stateNode.implementation===fe.implementation){a(ue,K.sibling),K=d(K,fe.children||[]),K.return=ue,ue=K;break e}else{a(ue,K);break}else i(ue,K);K=K.sibling}K=Cd(fe,ue.mode,Ue),K.return=ue,ue=K}return C(ue);case he:return vt=fe._init,Cn(ue,K,vt(fe._payload),Ue)}if(Xt(fe))return at(ue,K,fe,Ue);if(Z(fe))return ot(ue,K,fe,Ue);Dl(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,K!==null&&K.tag===6?(a(ue,K.sibling),K=d(K,fe),K.return=ue,ue=K):(a(ue,K),K=Rd(fe,ue.mode,Ue),K.return=ue,ue=K),C(ue)):a(ue,K)}return Cn}var Fa=Mp(!0),Ep=Mp(!1),Ul=ms(null),Ol=null,ka=null,ku=null;function Bu(){ku=ka=Ol=null}function zu(n){var i=Ul.current;xn(Ul),n._currentValue=i}function Vu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ba(n,i){Ol=n,ku=ka=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ci=!0),n.firstContext=null)}function Ji(n){var i=n._currentValue;if(ku!==n)if(n={context:n,memoizedValue:i,next:null},ka===null){if(Ol===null)throw Error(t(308));ka=n,Ol.dependencies={lanes:0,firstContext:n}}else ka=ka.next=n;return i}var Ys=null;function Hu(n){Ys===null?Ys=[n]:Ys.push(n)}function wp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Hu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Kr(n,c)}function Kr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _s=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xs(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(tn&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Kr(n,a)}return d=c.interleaved,d===null?(i.next=i,Hu(c)):(i.next=d.next,d.next=i),c.interleaved=i,Kr(n,a)}function Fl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dt(n,a)}}function Ap(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function kl(n,i,a,c){var d=n.updateQueue;_s=!1;var g=d.firstBaseUpdate,C=d.lastBaseUpdate,H=d.shared.pending;if(H!==null){d.shared.pending=null;var q=H,ve=q.next;q.next=null,C===null?g=ve:C.next=ve,C=q;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,H=Ce.lastBaseUpdate,H!==C&&(H===null?Ce.firstBaseUpdate=ve:H.next=ve,Ce.lastBaseUpdate=q))}if(g!==null){var Ne=d.baseState;C=0,Ce=ve=q=null,H=g;do{var be=H.lane,Je=H.eventTime;if((c&be)===be){Ce!==null&&(Ce=Ce.next={eventTime:Je,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var at=n,ot=H;switch(be=i,Je=a,ot.tag){case 1:if(at=ot.payload,typeof at=="function"){Ne=at.call(Je,Ne,be);break e}Ne=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ot.payload,be=typeof at=="function"?at.call(Je,Ne,be):at,be==null)break e;Ne=ee({},Ne,be);break e;case 2:_s=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,be=d.effects,be===null?d.effects=[H]:be.push(H))}else Je={eventTime:Je,lane:be,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ce===null?(ve=Ce=Je,q=Ne):Ce=Ce.next=Je,C|=be;if(H=H.next,H===null){if(H=d.shared.pending,H===null)break;be=H,H=be.next,be.next=null,d.lastBaseUpdate=be,d.shared.pending=null}}while(!0);if(Ce===null&&(q=Ne),d.baseState=q,d.firstBaseUpdate=ve,d.lastBaseUpdate=Ce,i=d.shared.interleaved,i!==null){d=i;do C|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Js|=C,n.lanes=C,n.memoizedState=Ne}}function bp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Do={},Cr=ms(Do),Uo=ms(Do),Oo=ms(Do);function Ks(n){if(n===Do)throw Error(t(174));return n}function Wu(n,i){switch(hn(Oo,i),hn(Uo,n),hn(Cr,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:T(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=T(i,n)}xn(Cr),hn(Cr,i)}function za(){xn(Cr),xn(Uo),xn(Oo)}function Rp(n){Ks(Oo.current);var i=Ks(Cr.current),a=T(i,n.type);i!==a&&(hn(Uo,n),hn(Cr,a))}function Xu(n){Uo.current===n&&(xn(Cr),xn(Uo))}var wn=ms(0);function Bl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qu=[];function ju(){for(var n=0;n<qu.length;n++)qu[n]._workInProgressVersionPrimary=null;qu.length=0}var zl=A.ReactCurrentDispatcher,$u=A.ReactCurrentBatchConfig,Zs=0,Tn=null,Un=null,Gn=null,Vl=!1,Fo=!1,ko=0,Ev=0;function li(){throw Error(t(321))}function Yu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ur(n[a],i[a]))return!1;return!0}function Ku(n,i,a,c,d,g){if(Zs=g,Tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zl.current=n===null||n.memoizedState===null?bv:Rv,n=a(c,d),Fo){g=0;do{if(Fo=!1,ko=0,25<=g)throw Error(t(301));g+=1,Gn=Un=null,i.updateQueue=null,zl.current=Cv,n=a(c,d)}while(Fo)}if(zl.current=Wl,i=Un!==null&&Un.next!==null,Zs=0,Gn=Un=Tn=null,Vl=!1,i)throw Error(t(300));return n}function Zu(){var n=ko!==0;return ko=0,n}function Pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gn===null?Tn.memoizedState=Gn=n:Gn=Gn.next=n,Gn}function Qi(){if(Un===null){var n=Tn.alternate;n=n!==null?n.memoizedState:null}else n=Un.next;var i=Gn===null?Tn.memoizedState:Gn.next;if(i!==null)Gn=i,Un=n;else{if(n===null)throw Error(t(310));Un=n,n={memoizedState:Un.memoizedState,baseState:Un.baseState,baseQueue:Un.baseQueue,queue:Un.queue,next:null},Gn===null?Tn.memoizedState=Gn=n:Gn=Gn.next=n}return Gn}function Bo(n,i){return typeof i=="function"?i(n):i}function Ju(n){var i=Qi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Un,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var C=d.next;d.next=g.next,g.next=C}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var H=C=null,q=null,ve=g;do{var Ce=ve.lane;if((Zs&Ce)===Ce)q!==null&&(q=q.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var Ne={lane:Ce,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};q===null?(H=q=Ne,C=c):q=q.next=Ne,Tn.lanes|=Ce,Js|=Ce}ve=ve.next}while(ve!==null&&ve!==g);q===null?C=c:q.next=H,ur(c,i.memoizedState)||(Ci=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Tn.lanes|=g,Js|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Qu(n){var i=Qi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var C=d=d.next;do g=n(g,C.action),C=C.next;while(C!==d);ur(g,i.memoizedState)||(Ci=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Cp(){}function Pp(n,i){var a=Tn,c=Qi(),d=i(),g=!ur(c.memoizedState,d);if(g&&(c.memoizedState=d,Ci=!0),c=c.queue,ed(Ip.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Gn!==null&&Gn.memoizedState.tag&1){if(a.flags|=2048,zo(9,Np.bind(null,a,c,d,i),void 0,null),Wn===null)throw Error(t(349));(Zs&30)!==0||Lp(a,i,d)}return d}function Lp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Tn.updateQueue,i===null?(i={lastEffect:null,stores:null},Tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Np(n,i,a,c){i.value=a,i.getSnapshot=c,Dp(i)&&Up(n)}function Ip(n,i,a){return a(function(){Dp(i)&&Up(n)})}function Dp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ur(n,a)}catch{return!0}}function Up(n){var i=Kr(n,1);i!==null&&mr(i,n,1,-1)}function Op(n){var i=Pr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},i.queue=n,n=n.dispatch=Av.bind(null,Tn,n),[i.memoizedState,n]}function zo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Tn.updateQueue,i===null?(i={lastEffect:null,stores:null},Tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Fp(){return Qi().memoizedState}function Hl(n,i,a,c){var d=Pr();Tn.flags|=n,d.memoizedState=zo(1|i,a,void 0,c===void 0?null:c)}function Gl(n,i,a,c){var d=Qi();c=c===void 0?null:c;var g=void 0;if(Un!==null){var C=Un.memoizedState;if(g=C.destroy,c!==null&&Yu(c,C.deps)){d.memoizedState=zo(i,a,g,c);return}}Tn.flags|=n,d.memoizedState=zo(1|i,a,g,c)}function kp(n,i){return Hl(8390656,8,n,i)}function ed(n,i){return Gl(2048,8,n,i)}function Bp(n,i){return Gl(4,2,n,i)}function zp(n,i){return Gl(4,4,n,i)}function Vp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Hp(n,i,a){return a=a!=null?a.concat([n]):null,Gl(4,4,Vp.bind(null,i,n),a)}function td(){}function Gp(n,i){var a=Qi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Yu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Wp(n,i){var a=Qi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Yu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Xp(n,i,a){return(Zs&21)===0?(n.baseState&&(n.baseState=!1,Ci=!0),n.memoizedState=a):(ur(a,i)||(a=z(),Tn.lanes|=a,Js|=a,n.baseState=!0),i)}function wv(n,i){var a=ft;ft=a!==0&&4>a?a:4,n(!0);var c=$u.transition;$u.transition={};try{n(!1),i()}finally{ft=a,$u.transition=c}}function qp(){return Qi().memoizedState}function Tv(n,i,a){var c=Es(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jp(n))$p(i,a);else if(a=wp(n,i,a,c),a!==null){var d=xi();mr(a,n,c,d),Yp(a,i,c)}}function Av(n,i,a){var c=Es(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(n))$p(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,H=g(C,a);if(d.hasEagerState=!0,d.eagerState=H,ur(H,C)){var q=i.interleaved;q===null?(d.next=d,Hu(i)):(d.next=q.next,q.next=d),i.interleaved=d;return}}catch{}finally{}a=wp(n,i,d,c),a!==null&&(d=xi(),mr(a,n,c,d),Yp(a,i,c))}}function jp(n){var i=n.alternate;return n===Tn||i!==null&&i===Tn}function $p(n,i){Fo=Vl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Yp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dt(n,a)}}var Wl={readContext:Ji,useCallback:li,useContext:li,useEffect:li,useImperativeHandle:li,useInsertionEffect:li,useLayoutEffect:li,useMemo:li,useReducer:li,useRef:li,useState:li,useDebugValue:li,useDeferredValue:li,useTransition:li,useMutableSource:li,useSyncExternalStore:li,useId:li,unstable_isNewReconciler:!1},bv={readContext:Ji,useCallback:function(n,i){return Pr().memoizedState=[n,i===void 0?null:i],n},useContext:Ji,useEffect:kp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Hl(4194308,4,Vp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Hl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Hl(4,2,n,i)},useMemo:function(n,i){var a=Pr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Pr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Tv.bind(null,Tn,n),[c.memoizedState,n]},useRef:function(n){var i=Pr();return n={current:n},i.memoizedState=n},useState:Op,useDebugValue:td,useDeferredValue:function(n){return Pr().memoizedState=n},useTransition:function(){var n=Op(!1),i=n[0];return n=wv.bind(null,n[1]),Pr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Tn,d=Pr();if(Sn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Wn===null)throw Error(t(349));(Zs&30)!==0||Lp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,kp(Ip.bind(null,c,g,n),[n]),c.flags|=2048,zo(9,Np.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Pr(),i=Wn.identifierPrefix;if(Sn){var a=Yr,c=$r;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ko++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ev++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:Ji,useCallback:Gp,useContext:Ji,useEffect:ed,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Ju,useRef:Fp,useState:function(){return Ju(Bo)},useDebugValue:td,useDeferredValue:function(n){var i=Qi();return Xp(i,Un.memoizedState,n)},useTransition:function(){var n=Ju(Bo)[0],i=Qi().memoizedState;return[n,i]},useMutableSource:Cp,useSyncExternalStore:Pp,useId:qp,unstable_isNewReconciler:!1},Cv={readContext:Ji,useCallback:Gp,useContext:Ji,useEffect:ed,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Qu,useRef:Fp,useState:function(){return Qu(Bo)},useDebugValue:td,useDeferredValue:function(n){var i=Qi();return Un===null?i.memoizedState=n:Xp(i,Un.memoizedState,n)},useTransition:function(){var n=Qu(Bo)[0],i=Qi().memoizedState;return[n,i]},useMutableSource:Cp,useSyncExternalStore:Pp,useId:qp,unstable_isNewReconciler:!1};function fr(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function nd(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?It(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=xi(),d=Es(n),g=Zr(c,d);g.payload=i,a!=null&&(g.callback=a),i=xs(n,g,d),i!==null&&(mr(i,n,d,c),Fl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=xi(),d=Es(n),g=Zr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=xs(n,g,d),i!==null&&(mr(i,n,d,c),Fl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=xi(),c=Es(n),d=Zr(a,c);d.tag=2,i!=null&&(d.callback=i),i=xs(n,d,c),i!==null&&(mr(i,n,c,a),Fl(i,n,c))}};function Kp(n,i,a,c,d,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,C):i.prototype&&i.prototype.isPureReactComponent?!Ao(a,c)||!Ao(d,g):!0}function Zp(n,i,a){var c=!1,d=gs,g=i.contextType;return typeof g=="object"&&g!==null?g=Ji(g):(d=Ri(i)?qs:oi.current,c=i.contextTypes,g=(c=c!=null)?Ia(n,d):gs),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Jp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Xl.enqueueReplaceState(i,i.state,null)}function id(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Gu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Ji(g):(g=Ri(i)?qs:oi.current,d.context=Ia(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(nd(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xl.enqueueReplaceState(d,d.state,null),kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Va(n,i){try{var a="",c=i;do a+=Xe(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function rd(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function sd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Pv=typeof WeakMap=="function"?WeakMap:Map;function Qp(n,i,a){a=Zr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jl||(Jl=!0,Sd=c),sd(n,i)},a}function em(n,i,a){a=Zr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){sd(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){sd(n,i),typeof c!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function tm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Pv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Wv.bind(null,n,i,a),i.then(n,n))}function nm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function im(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zr(-1,1),i.tag=2,xs(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Lv=A.ReactCurrentOwner,Ci=!1;function _i(n,i,a,c){i.child=n===null?Ep(i,null,a,c):Fa(i,n.child,a,c)}function rm(n,i,a,c,d){a=a.render;var g=i.ref;return Ba(i,d),c=Ku(n,i,a,c,g,d),a=Zu(),n!==null&&!Ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Jr(n,i,d)):(Sn&&a&&Iu(i),i.flags|=1,_i(n,i,c,d),i.child)}function sm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!bd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,am(n,i,g,c,d)):(n=rc(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(C,c)&&n.ref===i.ref)return Jr(n,i,d)}return i.flags|=1,n=Ts(g,c),n.ref=i.ref,n.return=i,i.child=n}function am(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Ao(g,c)&&n.ref===i.ref)if(Ci=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ci=!0);else return i.lanes=n.lanes,Jr(n,i,d)}return ad(n,i,a,c,d)}function om(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},hn(Ga,Gi),Gi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,hn(Ga,Gi),Gi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,hn(Ga,Gi),Gi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,hn(Ga,Gi),Gi|=c;return _i(n,i,d,a),i.child}function lm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ad(n,i,a,c,d){var g=Ri(a)?qs:oi.current;return g=Ia(i,g),Ba(i,d),a=Ku(n,i,a,c,g,d),c=Zu(),n!==null&&!Ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Jr(n,i,d)):(Sn&&c&&Iu(i),i.flags|=1,_i(n,i,a,d),i.child)}function cm(n,i,a,c,d){if(Ri(a)){var g=!0;Cl(i)}else g=!1;if(Ba(i,d),i.stateNode===null)jl(n,i),Zp(i,a,c),id(i,a,c,d),c=!0;else if(n===null){var C=i.stateNode,H=i.memoizedProps;C.props=H;var q=C.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=Ji(ve):(ve=Ri(a)?qs:oi.current,ve=Ia(i,ve));var Ce=a.getDerivedStateFromProps,Ne=typeof Ce=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ne||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==c||q!==ve)&&Jp(i,C,c,ve),_s=!1;var be=i.memoizedState;C.state=be,kl(i,c,C,d),q=i.memoizedState,H!==c||be!==q||bi.current||_s?(typeof Ce=="function"&&(nd(i,a,Ce,c),q=i.memoizedState),(H=_s||Kp(i,a,H,c,be,q,ve))?(Ne||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=q),C.props=c,C.state=q,C.context=ve,c=H):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Tp(n,i),H=i.memoizedProps,ve=i.type===i.elementType?H:fr(i.type,H),C.props=ve,Ne=i.pendingProps,be=C.context,q=a.contextType,typeof q=="object"&&q!==null?q=Ji(q):(q=Ri(a)?qs:oi.current,q=Ia(i,q));var Je=a.getDerivedStateFromProps;(Ce=typeof Je=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==Ne||be!==q)&&Jp(i,C,c,q),_s=!1,be=i.memoizedState,C.state=be,kl(i,c,C,d);var at=i.memoizedState;H!==Ne||be!==at||bi.current||_s?(typeof Je=="function"&&(nd(i,a,Je,c),at=i.memoizedState),(ve=_s||Kp(i,a,ve,c,be,at,q)||!1)?(Ce||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,at,q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,at,q)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=at),C.props=c,C.state=at,C.context=q,c=ve):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),c=!1)}return od(n,i,a,c,g,d)}function od(n,i,a,c,d,g){lm(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return d&&pp(i,a,!1),Jr(n,i,g);c=i.stateNode,Lv.current=i;var H=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Fa(i,n.child,null,g),i.child=Fa(i,null,H,g)):_i(n,i,H,g),i.memoizedState=c.state,d&&pp(i,a,!0),i.child}function um(n){var i=n.stateNode;i.pendingContext?fp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&fp(n,i.context,!1),Wu(n,i.containerInfo)}function dm(n,i,a,c,d){return Oa(),Fu(d),i.flags|=256,_i(n,i,a,c),i.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function cd(n){return{baseLanes:n,cachePool:null,transitions:null}}function fm(n,i,a){var c=i.pendingProps,d=wn.current,g=!1,C=(i.flags&128)!==0,H;if((H=C)||(H=n!==null&&n.memoizedState===null?!1:(d&2)!==0),H?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),hn(wn,d&1),n===null)return Ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,g?(c=i.mode,g=i.child,C={mode:"hidden",children:C},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=sc(C,c,0,null),n=na(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=cd(a),i.memoizedState=ld,n):ud(i,C));if(d=n.memoizedState,d!==null&&(H=d.dehydrated,H!==null))return Nv(n,i,C,c,H,d,a);if(g){g=c.fallback,C=i.mode,d=n.child,H=d.sibling;var q={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=q,i.deletions=null):(c=Ts(d,q),c.subtreeFlags=d.subtreeFlags&14680064),H!==null?g=Ts(H,g):(g=na(g,C,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,C=n.child.memoizedState,C=C===null?cd(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=ld,c}return g=n.child,n=g.sibling,c=Ts(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ud(n,i){return i=sc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ql(n,i,a,c){return c!==null&&Fu(c),Fa(i,n.child,null,a),n=ud(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nv(n,i,a,c,d,g,C){if(a)return i.flags&256?(i.flags&=-257,c=rd(Error(t(422))),ql(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=sc({mode:"visible",children:c.children},d,0,null),g=na(g,d,C,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Fa(i,n.child,null,C),i.child.memoizedState=cd(C),i.memoizedState=ld,g);if((i.mode&1)===0)return ql(n,i,C,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var H=c.dgst;return c=H,g=Error(t(419)),c=rd(g,c,void 0),ql(n,i,C,c)}if(H=(C&n.childLanes)!==0,Ci||H){if(c=Wn,c!==null){switch(C&-C){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|C))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Kr(n,d),mr(c,n,d,-1))}return Ad(),c=rd(Error(t(421))),ql(n,i,C,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Xv.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Hi=ps(d.nextSibling),Vi=i,Sn=!0,dr=null,n!==null&&(Ki[Zi++]=$r,Ki[Zi++]=Yr,Ki[Zi++]=js,$r=n.id,Yr=n.overflow,js=i),i=ud(i,c.children),i.flags|=4096,i)}function hm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Vu(n.return,i,a)}function dd(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function pm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(_i(n,i,c.children,a),c=wn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,a,i);else if(n.tag===19)hm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(hn(wn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),dd(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}dd(i,!0,a,null,g);break;case"together":dd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Jr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Js|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ts(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ts(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Iv(n,i,a){switch(i.tag){case 3:um(i),Oa();break;case 5:Rp(i);break;case 1:Ri(i.type)&&Cl(i);break;case 4:Wu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;hn(Ul,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(hn(wn,wn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?fm(n,i,a):(hn(wn,wn.current&1),n=Jr(n,i,a),n!==null?n.sibling:null);hn(wn,wn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return pm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),hn(wn,wn.current),c)break;return null;case 22:case 23:return i.lanes=0,om(n,i,a)}return Jr(n,i,a)}var mm,fd,gm,vm;mm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},fd=function(){},gm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ks(Cr.current);var g=null;switch(a){case"input":d=ht(n,d),c=ht(n,c),g=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),g=[];break;case"textarea":d=Ct(n,d),c=Ct(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Al)}Ke(a,c);var C;a=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var H=d[ve];for(C in H)H.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?g||(g=[]):(g=g||[]).push(ve,null));for(ve in c){var q=c[ve];if(H=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&q!==H&&(q!=null||H!=null))if(ve==="style")if(H){for(C in H)!H.hasOwnProperty(C)||q&&q.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in q)q.hasOwnProperty(C)&&H[C]!==q[C]&&(a||(a={}),a[C]=q[C])}else a||(g||(g=[]),g.push(ve,a)),a=q;else ve==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,H=H?H.__html:void 0,q!=null&&H!==q&&(g=g||[]).push(ve,q)):ve==="children"?typeof q!="string"&&typeof q!="number"||(g=g||[]).push(ve,""+q):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(q!=null&&ve==="onScroll"&&_n("scroll",n),g||H===q||(g=[])):(g=g||[]).push(ve,q))}a&&(g=g||[]).push("style",a);var ve=g;(i.updateQueue=ve)&&(i.flags|=4)}},vm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Vo(n,i){if(!Sn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function ci(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Dv(n,i,a){var c=i.pendingProps;switch(Du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ci(i),null;case 1:return Ri(i.type)&&Rl(),ci(i),null;case 3:return c=i.stateNode,za(),xn(bi),xn(oi),ju(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Il(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,dr!==null&&(Ed(dr),dr=null))),fd(n,i),ci(i),null;case 5:Xu(i);var d=Ks(Oo.current);if(a=i.type,n!==null&&i.stateNode!=null)gm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return ci(i),null}if(n=Ks(Cr.current),Il(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Rr]=i,c[Lo]=g,n=(i.mode&1)!==0,a){case"dialog":_n("cancel",c),_n("close",c);break;case"iframe":case"object":case"embed":_n("load",c);break;case"video":case"audio":for(d=0;d<Ro.length;d++)_n(Ro[d],c);break;case"source":_n("error",c);break;case"img":case"image":case"link":_n("error",c),_n("load",c);break;case"details":_n("toggle",c);break;case"input":Tt(c,g),_n("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},_n("invalid",c);break;case"textarea":Y(c,g),_n("invalid",c)}Ke(a,g),d=null;for(var C in g)if(g.hasOwnProperty(C)){var H=g[C];C==="children"?typeof H=="string"?c.textContent!==H&&(g.suppressHydrationWarning!==!0&&Tl(c.textContent,H,n),d=["children",H]):typeof H=="number"&&c.textContent!==""+H&&(g.suppressHydrationWarning!==!0&&Tl(c.textContent,H,n),d=["children",""+H]):o.hasOwnProperty(C)&&H!=null&&C==="onScroll"&&_n("scroll",c)}switch(a){case"input":He(c),Bt(c,g,!0);break;case"textarea":He(c),Mt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Al)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Rr]=i,n[Lo]=c,mm(n,i,!1,!1),i.stateNode=n;e:{switch(C=Fe(a,c),a){case"dialog":_n("cancel",n),_n("close",n),d=c;break;case"iframe":case"object":case"embed":_n("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ro.length;d++)_n(Ro[d],n);d=c;break;case"source":_n("error",n),d=c;break;case"img":case"image":case"link":_n("error",n),_n("load",n),d=c;break;case"details":_n("toggle",n),d=c;break;case"input":Tt(n,c),d=ht(n,c),_n("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),_n("invalid",n);break;case"textarea":Y(n,c),d=Ct(n,c),_n("invalid",n);break;default:d=c}Ke(a,d),H=d;for(g in H)if(H.hasOwnProperty(g)){var q=H[g];g==="style"?Se(n,q):g==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&le(n,q)):g==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&ge(n,q):typeof q=="number"&&ge(n,""+q):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?q!=null&&g==="onScroll"&&_n("scroll",n):q!=null&&U(n,g,q,C))}switch(a){case"input":He(n),Bt(n,c,!1);break;case"textarea":He(n),Mt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?xt(n,!!c.multiple,g,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Al)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ci(i),null;case 6:if(n&&i.stateNode!=null)vm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ks(Oo.current),Ks(Cr.current),Il(i)){if(c=i.stateNode,a=i.memoizedProps,c[Rr]=i,(g=c.nodeValue!==a)&&(n=Vi,n!==null))switch(n.tag){case 3:Tl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Rr]=i,i.stateNode=c}return ci(i),null;case 13:if(xn(wn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Sn&&Hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Sp(),Oa(),i.flags|=98560,g=!1;else if(g=Il(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Rr]=i}else Oa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ci(i),g=!1}else dr!==null&&(Ed(dr),dr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(wn.current&1)!==0?On===0&&(On=3):Ad())),i.updateQueue!==null&&(i.flags|=4),ci(i),null);case 4:return za(),fd(n,i),n===null&&Co(i.stateNode.containerInfo),ci(i),null;case 10:return zu(i.type._context),ci(i),null;case 17:return Ri(i.type)&&Rl(),ci(i),null;case 19:if(xn(wn),g=i.memoizedState,g===null)return ci(i),null;if(c=(i.flags&128)!==0,C=g.rendering,C===null)if(c)Vo(g,!1);else{if(On!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Bl(n),C!==null){for(i.flags|=128,Vo(g,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return hn(wn,wn.current&1|2),i.child}n=n.sibling}g.tail!==null&&$t()>Wa&&(i.flags|=128,c=!0,Vo(g,!1),i.lanes=4194304)}else{if(!c)if(n=Bl(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Vo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!Sn)return ci(i),null}else 2*$t()-g.renderingStartTime>Wa&&a!==1073741824&&(i.flags|=128,c=!0,Vo(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=$t(),i.sibling=null,a=wn.current,hn(wn,c?a&1|2:a&1),i):(ci(i),null);case 22:case 23:return Td(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gi&1073741824)!==0&&(ci(i),i.subtreeFlags&6&&(i.flags|=8192)):ci(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Uv(n,i){switch(Du(i),i.tag){case 1:return Ri(i.type)&&Rl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return za(),xn(bi),xn(oi),ju(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xu(i),null;case 13:if(xn(wn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Oa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return xn(wn),null;case 4:return za(),null;case 10:return zu(i.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var $l=!1,ui=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Ha(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Rn(n,i,c)}else a.current=null}function hd(n,i,a){try{a()}catch(c){Rn(n,i,c)}}var _m=!1;function Fv(n,i){if(Tu=Gr,n=Kh(),vu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,H=-1,q=-1,ve=0,Ce=0,Ne=n,be=null;t:for(;;){for(var Je;Ne!==a||d!==0&&Ne.nodeType!==3||(H=C+d),Ne!==g||c!==0&&Ne.nodeType!==3||(q=C+c),Ne.nodeType===3&&(C+=Ne.nodeValue.length),(Je=Ne.firstChild)!==null;)be=Ne,Ne=Je;for(;;){if(Ne===n)break t;if(be===a&&++ve===d&&(H=C),be===g&&++Ce===c&&(q=C),(Je=Ne.nextSibling)!==null)break;Ne=be,be=Ne.parentNode}Ne=Je}a=H===-1||q===-1?null:{start:H,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Au={focusedElem:n,selectionRange:a},Gr=!1,rt=i;rt!==null;)if(i=rt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,rt=n;else for(;rt!==null;){i=rt;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ot=at.memoizedProps,Cn=at.memoizedState,ue=i.stateNode,K=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ot:fr(i.type,ot),Cn);ue.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){Rn(i,i.return,Ue)}if(n=i.sibling,n!==null){n.return=i.return,rt=n;break}rt=i.return}return at=_m,_m=!1,at}function Ho(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&hd(i,a,g)}d=d.next}while(d!==c)}}function Yl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function pd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function xm(n){var i=n.alternate;i!==null&&(n.alternate=null,xm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Rr],delete i[Lo],delete i[Pu],delete i[xv],delete i[Sv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sm(n){return n.tag===5||n.tag===3||n.tag===4}function ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function md(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Al));else if(c!==4&&(n=n.child,n!==null))for(md(n,i,a),n=n.sibling;n!==null;)md(n,i,a),n=n.sibling}function gd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gd(n,i,a),n=n.sibling;n!==null;)gd(n,i,a),n=n.sibling}var Kn=null,hr=!1;function Ss(n,i,a){for(a=a.child;a!==null;)Mm(n,i,a),a=a.sibling}function Mm(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:ui||Ha(a,i);case 6:var c=Kn,d=hr;Kn=null,Ss(n,i,a),Kn=c,hr=d,Kn!==null&&(hr?(n=Kn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Kn.removeChild(a.stateNode));break;case 18:Kn!==null&&(hr?(n=Kn,a=a.stateNode,n.nodeType===8?Cu(n.parentNode,a):n.nodeType===1&&Cu(n,a),or(n)):Cu(Kn,a.stateNode));break;case 4:c=Kn,d=hr,Kn=a.stateNode.containerInfo,hr=!0,Ss(n,i,a),Kn=c,hr=d;break;case 0:case 11:case 14:case 15:if(!ui&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&hd(a,i,C),d=d.next}while(d!==c)}Ss(n,i,a);break;case 1:if(!ui&&(Ha(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(H){Rn(a,i,H)}Ss(n,i,a);break;case 21:Ss(n,i,a);break;case 22:a.mode&1?(ui=(c=ui)||a.memoizedState!==null,Ss(n,i,a),ui=c):Ss(n,i,a);break;default:Ss(n,i,a)}}function Em(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ov),i.forEach(function(c){var d=qv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function pr(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,C=i,H=C;e:for(;H!==null;){switch(H.tag){case 5:Kn=H.stateNode,hr=!1;break e;case 3:Kn=H.stateNode.containerInfo,hr=!0;break e;case 4:Kn=H.stateNode.containerInfo,hr=!0;break e}H=H.return}if(Kn===null)throw Error(t(160));Mm(g,C,d),Kn=null,hr=!1;var q=d.alternate;q!==null&&(q.return=null),d.return=null}catch(ve){Rn(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wm(i,n),i=i.sibling}function wm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pr(i,n),Lr(n),c&4){try{Ho(3,n,n.return),Yl(3,n)}catch(ot){Rn(n,n.return,ot)}try{Ho(5,n,n.return)}catch(ot){Rn(n,n.return,ot)}}break;case 1:pr(i,n),Lr(n),c&512&&a!==null&&Ha(a,a.return);break;case 5:if(pr(i,n),Lr(n),c&512&&a!==null&&Ha(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch(ot){Rn(n,n.return,ot)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,H=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{H==="input"&&g.type==="radio"&&g.name!=null&&kt(d,g),Fe(H,C);var ve=Fe(H,g);for(C=0;C<q.length;C+=2){var Ce=q[C],Ne=q[C+1];Ce==="style"?Se(d,Ne):Ce==="dangerouslySetInnerHTML"?le(d,Ne):Ce==="children"?ge(d,Ne):U(d,Ce,Ne,ve)}switch(H){case"input":ut(d,g);break;case"textarea":Vt(d,g);break;case"select":var be=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Je=g.value;Je!=null?xt(d,!!g.multiple,Je,!1):be!==!!g.multiple&&(g.defaultValue!=null?xt(d,!!g.multiple,g.defaultValue,!0):xt(d,!!g.multiple,g.multiple?[]:"",!1))}d[Lo]=g}catch(ot){Rn(n,n.return,ot)}}break;case 6:if(pr(i,n),Lr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ot){Rn(n,n.return,ot)}}break;case 3:if(pr(i,n),Lr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{or(i.containerInfo)}catch(ot){Rn(n,n.return,ot)}break;case 4:pr(i,n),Lr(n);break;case 13:pr(i,n),Lr(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(xd=$t())),c&4&&Em(n);break;case 22:if(Ce=a!==null&&a.memoizedState!==null,n.mode&1?(ui=(ve=ui)||Ce,pr(i,n),ui=ve):pr(i,n),Lr(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Ce&&(n.mode&1)!==0)for(rt=n,Ce=n.child;Ce!==null;){for(Ne=rt=Ce;rt!==null;){switch(be=rt,Je=be.child,be.tag){case 0:case 11:case 14:case 15:Ho(4,be,be.return);break;case 1:Ha(be,be.return);var at=be.stateNode;if(typeof at.componentWillUnmount=="function"){c=be,a=be.return;try{i=c,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(ot){Rn(c,a,ot)}}break;case 5:Ha(be,be.return);break;case 22:if(be.memoizedState!==null){bm(Ne);continue}}Je!==null?(Je.return=be,rt=Je):bm(Ne)}Ce=Ce.sibling}e:for(Ce=null,Ne=n;;){if(Ne.tag===5){if(Ce===null){Ce=Ne;try{d=Ne.stateNode,ve?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(H=Ne.stateNode,q=Ne.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null,H.style.display=_e("display",C))}catch(ot){Rn(n,n.return,ot)}}}else if(Ne.tag===6){if(Ce===null)try{Ne.stateNode.nodeValue=ve?"":Ne.memoizedProps}catch(ot){Rn(n,n.return,ot)}}else if((Ne.tag!==22&&Ne.tag!==23||Ne.memoizedState===null||Ne===n)&&Ne.child!==null){Ne.child.return=Ne,Ne=Ne.child;continue}if(Ne===n)break e;for(;Ne.sibling===null;){if(Ne.return===null||Ne.return===n)break e;Ce===Ne&&(Ce=null),Ne=Ne.return}Ce===Ne&&(Ce=null),Ne.sibling.return=Ne.return,Ne=Ne.sibling}}break;case 19:pr(i,n),Lr(n),c&4&&Em(n);break;case 21:break;default:pr(i,n),Lr(n)}}function Lr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ge(d,""),c.flags&=-33);var g=ym(n);gd(n,g,d);break;case 3:case 4:var C=c.stateNode.containerInfo,H=ym(n);md(n,H,C);break;default:throw Error(t(161))}}catch(q){Rn(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function kv(n,i,a){rt=n,Tm(n)}function Tm(n,i,a){for(var c=(n.mode&1)!==0;rt!==null;){var d=rt,g=d.child;if(d.tag===22&&c){var C=d.memoizedState!==null||$l;if(!C){var H=d.alternate,q=H!==null&&H.memoizedState!==null||ui;H=$l;var ve=ui;if($l=C,(ui=q)&&!ve)for(rt=d;rt!==null;)C=rt,q=C.child,C.tag===22&&C.memoizedState!==null?Rm(d):q!==null?(q.return=C,rt=q):Rm(d);for(;g!==null;)rt=g,Tm(g),g=g.sibling;rt=d,$l=H,ui=ve}Am(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,rt=g):Am(n)}}function Am(n){for(;rt!==null;){var i=rt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ui||Yl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!ui)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:fr(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&bp(i,g,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bp(i,C,a)}break;case 5:var H=i.stateNode;if(a===null&&i.flags&4){a=H;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Ce=ve.memoizedState;if(Ce!==null){var Ne=Ce.dehydrated;Ne!==null&&or(Ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ui||i.flags&512&&pd(i)}catch(be){Rn(i,i.return,be)}}if(i===n){rt=null;break}if(a=i.sibling,a!==null){a.return=i.return,rt=a;break}rt=i.return}}function bm(n){for(;rt!==null;){var i=rt;if(i===n){rt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Rm(n){for(;rt!==null;){var i=rt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Yl(4,i)}catch(q){Rn(i,a,q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(q){Rn(i,d,q)}}var g=i.return;try{pd(i)}catch(q){Rn(i,g,q)}break;case 5:var C=i.return;try{pd(i)}catch(q){Rn(i,C,q)}}}catch(q){Rn(i,i.return,q)}if(i===n){rt=null;break}var H=i.sibling;if(H!==null){H.return=i.return,rt=H;break}rt=i.return}}var Bv=Math.ceil,Kl=A.ReactCurrentDispatcher,vd=A.ReactCurrentOwner,er=A.ReactCurrentBatchConfig,tn=0,Wn=null,Nn=null,Zn=0,Gi=0,Ga=ms(0),On=0,Go=null,Js=0,Zl=0,_d=0,Wo=null,Pi=null,xd=0,Wa=1/0,Qr=null,Jl=!1,Sd=null,ys=null,Ql=!1,Ms=null,ec=0,Xo=0,yd=null,tc=-1,nc=0;function xi(){return(tn&6)!==0?$t():tc!==-1?tc:tc=$t()}function Es(n){return(n.mode&1)===0?1:(tn&2)!==0&&Zn!==0?Zn&-Zn:Mv.transition!==null?(nc===0&&(nc=z()),nc):(n=ft,n!==0||(n=window.event,n=n===void 0?16:wi(n.type)),n)}function mr(n,i,a,c){if(50<Xo)throw Xo=0,yd=null,Error(t(185));ye(n,a,c),((tn&2)===0||n!==Wn)&&(n===Wn&&((tn&2)===0&&(Zl|=a),On===4&&ws(n,Zn)),Li(n,c),a===1&&tn===0&&(i.mode&1)===0&&(Wa=$t()+500,Pl&&vs()))}function Li(n,i){var a=n.callbackNode;en(n,i);var c=Ut(n,n===Wn?Zn:0);if(c===0)a!==null&&sr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&sr(a),i===1)n.tag===0?yv(Pm.bind(null,n)):mp(Pm.bind(null,n)),vv(function(){(tn&6)===0&&vs()}),a=null;else{switch(an(c)){case 1:a=wr;break;case 4:a=Tr;break;case 16:a=P;break;case 536870912:a=pe;break;default:a=P}a=km(a,Cm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Cm(n,i){if(tc=-1,nc=0,(tn&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xa()&&n.callbackNode!==a)return null;var c=Ut(n,n===Wn?Zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ic(n,c);else{i=c;var d=tn;tn|=2;var g=Nm();(Wn!==n||Zn!==i)&&(Qr=null,Wa=$t()+500,ea(n,i));do try{Hv();break}catch(H){Lm(n,H)}while(!0);Bu(),Kl.current=g,tn=d,Nn!==null?i=0:(Wn=null,Zn=0,i=On)}if(i!==0){if(i===2&&(d=h(n),d!==0&&(c=d,i=Md(n,d))),i===1)throw a=Go,ea(n,0),ws(n,c),Li(n,$t()),a;if(i===6)ws(n,c);else{if(d=n.current.alternate,(c&30)===0&&!zv(d)&&(i=ic(n,c),i===2&&(g=h(n),g!==0&&(c=g,i=Md(n,g))),i===1))throw a=Go,ea(n,0),ws(n,c),Li(n,$t()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ta(n,Pi,Qr);break;case 3:if(ws(n,c),(c&130023424)===c&&(i=xd+500-$t(),10<i)){if(Ut(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){xi(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ru(ta.bind(null,n,Pi,Qr),i);break}ta(n,Pi,Qr);break;case 4:if(ws(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var C=31-Ve(c);g=1<<C,C=i[C],C>d&&(d=C),c&=~g}if(c=d,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Bv(c/1960))-c,10<c){n.timeoutHandle=Ru(ta.bind(null,n,Pi,Qr),c);break}ta(n,Pi,Qr);break;case 5:ta(n,Pi,Qr);break;default:throw Error(t(329))}}}return Li(n,$t()),n.callbackNode===a?Cm.bind(null,n):null}function Md(n,i){var a=Wo;return n.current.memoizedState.isDehydrated&&(ea(n,i).flags|=256),n=ic(n,i),n!==2&&(i=Pi,Pi=a,i!==null&&Ed(i)),n}function Ed(n){Pi===null?Pi=n:Pi.push.apply(Pi,n)}function zv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!ur(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ws(n,i){for(i&=~_d,i&=~Zl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function Pm(n){if((tn&6)!==0)throw Error(t(327));Xa();var i=Ut(n,0);if((i&1)===0)return Li(n,$t()),null;var a=ic(n,i);if(n.tag!==0&&a===2){var c=h(n);c!==0&&(i=c,a=Md(n,c))}if(a===1)throw a=Go,ea(n,0),ws(n,i),Li(n,$t()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ta(n,Pi,Qr),Li(n,$t()),null}function wd(n,i){var a=tn;tn|=1;try{return n(i)}finally{tn=a,tn===0&&(Wa=$t()+500,Pl&&vs())}}function Qs(n){Ms!==null&&Ms.tag===0&&(tn&6)===0&&Xa();var i=tn;tn|=1;var a=er.transition,c=ft;try{if(er.transition=null,ft=1,n)return n()}finally{ft=c,er.transition=a,tn=i,(tn&6)===0&&vs()}}function Td(){Gi=Ga.current,xn(Ga)}function ea(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,gv(a)),Nn!==null)for(a=Nn.return;a!==null;){var c=a;switch(Du(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Rl();break;case 3:za(),xn(bi),xn(oi),ju();break;case 5:Xu(c);break;case 4:za();break;case 13:xn(wn);break;case 19:xn(wn);break;case 10:zu(c.type._context);break;case 22:case 23:Td()}a=a.return}if(Wn=n,Nn=n=Ts(n.current,null),Zn=Gi=i,On=0,Go=null,_d=Zl=Js=0,Pi=Wo=null,Ys!==null){for(i=0;i<Ys.length;i++)if(a=Ys[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var C=g.next;g.next=d,c.next=C}a.pending=c}Ys=null}return n}function Lm(n,i){do{var a=Nn;try{if(Bu(),zl.current=Wl,Vl){for(var c=Tn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(Zs=0,Gn=Un=Tn=null,Fo=!1,ko=0,vd.current=null,a===null||a.return===null){On=1,Go=i,Nn=null;break}e:{var g=n,C=a.return,H=a,q=i;if(i=Zn,H.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ve=q,Ce=H,Ne=Ce.tag;if((Ce.mode&1)===0&&(Ne===0||Ne===11||Ne===15)){var be=Ce.alternate;be?(Ce.updateQueue=be.updateQueue,Ce.memoizedState=be.memoizedState,Ce.lanes=be.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var Je=nm(C);if(Je!==null){Je.flags&=-257,im(Je,C,H,g,i),Je.mode&1&&tm(g,ve,i),i=Je,q=ve;var at=i.updateQueue;if(at===null){var ot=new Set;ot.add(q),i.updateQueue=ot}else at.add(q);break e}else{if((i&1)===0){tm(g,ve,i),Ad();break e}q=Error(t(426))}}else if(Sn&&H.mode&1){var Cn=nm(C);if(Cn!==null){(Cn.flags&65536)===0&&(Cn.flags|=256),im(Cn,C,H,g,i),Fu(Va(q,H));break e}}g=q=Va(q,H),On!==4&&(On=2),Wo===null?Wo=[g]:Wo.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=Qp(g,q,i);Ap(g,ue);break e;case 1:H=q;var K=g.type,fe=g.stateNode;if((g.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(ys===null||!ys.has(fe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ue=em(g,H,i);Ap(g,Ue);break e}}g=g.return}while(g!==null)}Dm(a)}catch(lt){i=lt,Nn===a&&a!==null&&(Nn=a=a.return);continue}break}while(!0)}function Nm(){var n=Kl.current;return Kl.current=Wl,n===null?Wl:n}function Ad(){(On===0||On===3||On===2)&&(On=4),Wn===null||(Js&268435455)===0&&(Zl&268435455)===0||ws(Wn,Zn)}function ic(n,i){var a=tn;tn|=2;var c=Nm();(Wn!==n||Zn!==i)&&(Qr=null,ea(n,i));do try{Vv();break}catch(d){Lm(n,d)}while(!0);if(Bu(),tn=a,Kl.current=c,Nn!==null)throw Error(t(261));return Wn=null,Zn=0,On}function Vv(){for(;Nn!==null;)Im(Nn)}function Hv(){for(;Nn!==null&&!Fi();)Im(Nn)}function Im(n){var i=Fm(n.alternate,n,Gi);n.memoizedProps=n.pendingProps,i===null?Dm(n):Nn=i,vd.current=null}function Dm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Dv(a,i,Gi),a!==null){Nn=a;return}}else{if(a=Uv(a,i),a!==null){a.flags&=32767,Nn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{On=6,Nn=null;return}}if(i=i.sibling,i!==null){Nn=i;return}Nn=i=n}while(i!==null);On===0&&(On=5)}function ta(n,i,a){var c=ft,d=er.transition;try{er.transition=null,ft=1,Gv(n,i,a,c)}finally{er.transition=d,ft=c}return null}function Gv(n,i,a,c){do Xa();while(Ms!==null);if((tn&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Le(n,g),n===Wn&&(Nn=Wn=null,Zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ql||(Ql=!0,km(P,function(){return Xa(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=er.transition,er.transition=null;var C=ft;ft=1;var H=tn;tn|=4,vd.current=null,Fv(n,a),wm(a,n),cv(Au),Gr=!!Tu,Au=Tu=null,n.current=a,kv(a),Yi(),tn=H,ft=C,er.transition=g}else n.current=a;if(Ql&&(Ql=!1,Ms=n,ec=d),g=n.pendingLanes,g===0&&(ys=null),Be(a.stateNode),Li(n,$t()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jl)throw Jl=!1,n=Sd,Sd=null,n;return(ec&1)!==0&&n.tag!==0&&Xa(),g=n.pendingLanes,(g&1)!==0?n===yd?Xo++:(Xo=0,yd=n):Xo=0,vs(),null}function Xa(){if(Ms!==null){var n=an(ec),i=er.transition,a=ft;try{if(er.transition=null,ft=16>n?16:n,Ms===null)var c=!1;else{if(n=Ms,Ms=null,ec=0,(tn&6)!==0)throw Error(t(331));var d=tn;for(tn|=4,rt=n.current;rt!==null;){var g=rt,C=g.child;if((rt.flags&16)!==0){var H=g.deletions;if(H!==null){for(var q=0;q<H.length;q++){var ve=H[q];for(rt=ve;rt!==null;){var Ce=rt;switch(Ce.tag){case 0:case 11:case 15:Ho(8,Ce,g)}var Ne=Ce.child;if(Ne!==null)Ne.return=Ce,rt=Ne;else for(;rt!==null;){Ce=rt;var be=Ce.sibling,Je=Ce.return;if(xm(Ce),Ce===ve){rt=null;break}if(be!==null){be.return=Je,rt=be;break}rt=Je}}}var at=g.alternate;if(at!==null){var ot=at.child;if(ot!==null){at.child=null;do{var Cn=ot.sibling;ot.sibling=null,ot=Cn}while(ot!==null)}}rt=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,rt=C;else e:for(;rt!==null;){if(g=rt,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ho(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,rt=ue;break e}rt=g.return}}var K=n.current;for(rt=K;rt!==null;){C=rt;var fe=C.child;if((C.subtreeFlags&2064)!==0&&fe!==null)fe.return=C,rt=fe;else e:for(C=K;rt!==null;){if(H=rt,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Yl(9,H)}}catch(lt){Rn(H,H.return,lt)}if(H===C){rt=null;break e}var Ue=H.sibling;if(Ue!==null){Ue.return=H.return,rt=Ue;break e}rt=H.return}}if(tn=d,vs(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{ft=a,er.transition=i}}return!1}function Um(n,i,a){i=Va(a,i),i=Qp(n,i,1),n=xs(n,i,1),i=xi(),n!==null&&(ye(n,1,i),Li(n,i))}function Rn(n,i,a){if(n.tag===3)Um(n,n,a);else for(;i!==null;){if(i.tag===3){Um(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ys===null||!ys.has(c))){n=Va(a,n),n=em(i,n,1),i=xs(i,n,1),n=xi(),i!==null&&(ye(i,1,n),Li(i,n));break}}i=i.return}}function Wv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=xi(),n.pingedLanes|=n.suspendedLanes&a,Wn===n&&(Zn&a)===a&&(On===4||On===3&&(Zn&130023424)===Zn&&500>$t()-xd?ea(n,0):_d|=a),Li(n,i)}function Om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var a=xi();n=Kr(n,i),n!==null&&(ye(n,i,a),Li(n,a))}function Xv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Om(n,a)}function qv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Om(n,a)}var Fm;Fm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bi.current)Ci=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Ci=!1,Iv(n,i,a);Ci=(n.flags&131072)!==0}else Ci=!1,Sn&&(i.flags&1048576)!==0&&gp(i,Nl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;jl(n,i),n=i.pendingProps;var d=Ia(i,oi.current);Ba(i,a),d=Ku(null,i,c,n,d,a);var g=Zu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ri(c)?(g=!0,Cl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gu(i),d.updater=Xl,i.stateNode=d,d._reactInternals=i,id(i,c,n,a),i=od(null,i,c,!0,g,a)):(i.tag=0,Sn&&g&&Iu(i),_i(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(jl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=$v(c),n=fr(c,n),d){case 0:i=ad(null,i,c,n,a);break e;case 1:i=cm(null,i,c,n,a);break e;case 11:i=rm(null,i,c,n,a);break e;case 14:i=sm(null,i,c,fr(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:fr(c,d),ad(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:fr(c,d),cm(n,i,c,d,a);case 3:e:{if(um(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Tp(n,i),kl(i,c,null,a);var C=i.memoizedState;if(c=C.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Va(Error(t(423)),i),i=dm(n,i,c,a,d);break e}else if(c!==d){d=Va(Error(t(424)),i),i=dm(n,i,c,a,d);break e}else for(Hi=ps(i.stateNode.containerInfo.firstChild),Vi=i,Sn=!0,dr=null,a=Ep(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Oa(),c===d){i=Jr(n,i,a);break e}_i(n,i,c,a)}i=i.child}return i;case 5:return Rp(i),n===null&&Ou(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,C=d.children,bu(c,d)?C=null:g!==null&&bu(c,g)&&(i.flags|=32),lm(n,i),_i(n,i,C,a),i.child;case 6:return n===null&&Ou(i),null;case 13:return fm(n,i,a);case 4:return Wu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Fa(i,null,c,a):_i(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:fr(c,d),rm(n,i,c,d,a);case 7:return _i(n,i,i.pendingProps,a),i.child;case 8:return _i(n,i,i.pendingProps.children,a),i.child;case 12:return _i(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,C=d.value,hn(Ul,c._currentValue),c._currentValue=C,g!==null)if(ur(g.value,C)){if(g.children===d.children&&!bi.current){i=Jr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var H=g.dependencies;if(H!==null){C=g.child;for(var q=H.firstContext;q!==null;){if(q.context===c){if(g.tag===1){q=Zr(-1,a&-a),q.tag=2;var ve=g.updateQueue;if(ve!==null){ve=ve.shared;var Ce=ve.pending;Ce===null?q.next=q:(q.next=Ce.next,Ce.next=q),ve.pending=q}}g.lanes|=a,q=g.alternate,q!==null&&(q.lanes|=a),Vu(g.return,a,i),H.lanes|=a;break}q=q.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,H=C.alternate,H!==null&&(H.lanes|=a),Vu(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}_i(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ba(i,a),d=Ji(d),c=c(d),i.flags|=1,_i(n,i,c,a),i.child;case 14:return c=i.type,d=fr(c,i.pendingProps),d=fr(c.type,d),sm(n,i,c,d,a);case 15:return am(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:fr(c,d),jl(n,i),i.tag=1,Ri(c)?(n=!0,Cl(i)):n=!1,Ba(i,a),Zp(i,c,d),id(i,c,d,a),od(null,i,c,!0,n,a);case 19:return pm(n,i,a);case 22:return om(n,i,a)}throw Error(t(156,i.tag))};function km(n,i){return mi(n,i)}function jv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(n,i,a,c){return new jv(n,i,a,c)}function bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $v(n){if(typeof n=="function")return bd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===ie)return 14}return 2}function Ts(n,i){var a=n.alternate;return a===null?(a=tr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function rc(n,i,a,c,d,g){var C=2;if(c=n,typeof n=="function")bd(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case O:return na(a.children,d,g,i);case w:C=8,d|=8;break;case L:return n=tr(12,a,i,d|2),n.elementType=L,n.lanes=g,n;case ne:return n=tr(13,a,i,d),n.elementType=ne,n.lanes=g,n;case j:return n=tr(19,a,i,d),n.elementType=j,n.lanes=g,n;case oe:return sc(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:C=10;break e;case W:C=9;break e;case G:C=11;break e;case ie:C=14;break e;case he:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=tr(C,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function na(n,i,a,c){return n=tr(7,n,c,i),n.lanes=a,n}function sc(n,i,a,c){return n=tr(22,n,c,i),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function Rd(n,i,a){return n=tr(6,n,null,i),n.lanes=a,n}function Cd(n,i,a){return i=tr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=X(0),this.expirationTimes=X(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=X(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Pd(n,i,a,c,d,g,C,H,q){return n=new Yv(n,i,a,H,q),i===1?(i=1,g===!0&&(i|=8)):i=0,g=tr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(g),n}function Kv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Bm(n){if(!n)return gs;n=n._reactInternals;e:{if(It(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ri(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ri(a))return hp(n,a,i)}return i}function zm(n,i,a,c,d,g,C,H,q){return n=Pd(a,c,!0,n,d,g,C,H,q),n.context=Bm(null),a=n.current,c=xi(),d=Es(a),g=Zr(c,d),g.callback=i??null,xs(a,g,d),n.current.lanes=d,ye(n,d,c),Li(n,c),n}function ac(n,i,a,c){var d=i.current,g=xi(),C=Es(d);return a=Bm(a),i.context===null?i.context=a:i.pendingContext=a,i=Zr(g,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=xs(d,i,C),n!==null&&(mr(n,d,C,g),Fl(n,d,C)),C}function oc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ld(n,i){Vm(n,i),(n=n.alternate)&&Vm(n,i)}function Zv(){return null}var Hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nd(n){this._internalRoot=n}lc.prototype.render=Nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ac(n,i,null,null)},lc.prototype.unmount=Nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Qs(function(){ac(null,n,null,null)}),i[qr]=null}};function lc(n){this._internalRoot=n}lc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pn();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ki.length&&i!==0&&i<ki[a].priority;a++);ki.splice(a,0,n),a===0&&Fs(n)}};function Id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function Jv(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ve=oc(C);g.call(ve)}}var C=zm(i,c,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=C,n[qr]=C.current,Co(n.nodeType===8?n.parentNode:n),Qs(),C}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var H=c;c=function(){var ve=oc(q);H.call(ve)}}var q=Pd(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=q,n[qr]=q.current,Co(n.nodeType===8?n.parentNode:n),Qs(function(){ac(i,q,a,c)}),q}function uc(n,i,a,c,d){var g=a._reactRootContainer;if(g){var C=g;if(typeof d=="function"){var H=d;d=function(){var q=oc(C);H.call(q)}}ac(i,C,n,d)}else C=Jv(a,i,n,d,c);return oc(C)}En=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=$e(i.pendingLanes);a!==0&&(Dt(i,a|1),Li(i,$t()),(tn&6)===0&&(Wa=$t()+500,vs()))}break;case 13:Qs(function(){var c=Kr(n,1);if(c!==null){var d=xi();mr(c,n,1,d)}}),Ld(n,1)}},At=function(n){if(n.tag===13){var i=Kr(n,134217728);if(i!==null){var a=xi();mr(i,n,134217728,a)}Ld(n,134217728)}},Yt=function(n){if(n.tag===13){var i=Es(n),a=Kr(n,i);if(a!==null){var c=xi();mr(a,n,i,c)}Ld(n,i)}},Pn=function(){return ft},mt=function(n,i){var a=ft;try{return ft=n,i()}finally{ft=a}},je=function(n,i,a){switch(i){case"input":if(ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=bl(c);if(!d)throw Error(t(90));gt(c),ut(c,d)}}}break;case"textarea":Vt(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},ze=wd,Me=Qs;var Qv={usingClientEntryPoint:!1,Events:[No,La,bl,de,Ie,wd]},qo={findFiberByHostInstance:Xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e_={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pn(n),n===null?null:n.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||Zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ae=dc.inject(e_),se=dc}catch{}}return Ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,Ni.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(i))throw Error(t(200));return Kv(n,i,null,a)},Ni.createRoot=function(n,i){if(!Id(n))throw Error(t(299));var a=!1,c="",d=Hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Pd(n,1,!1,null,null,a,!1,c,d),n[qr]=i.current,Co(n.nodeType===8?n.parentNode:n),new Nd(i)},Ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pn(i),n=n===null?null:n.stateNode,n},Ni.flushSync=function(n){return Qs(n)},Ni.hydrate=function(n,i,a){if(!cc(i))throw Error(t(200));return uc(null,n,i,!0,a)},Ni.hydrateRoot=function(n,i,a){if(!Id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",C=Hm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=zm(i,null,n,1,a??null,d,!1,g,C),n[qr]=i.current,Co(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new lc(i)},Ni.render=function(n,i,a){if(!cc(i))throw Error(t(200));return uc(null,n,i,!1,a)},Ni.unmountComponentAtNode=function(n){if(!cc(n))throw Error(t(40));return n._reactRootContainer?(Qs(function(){uc(null,null,n,!1,function(){n._reactRootContainer=null,n[qr]=null})}),!0):!1},Ni.unstable_batchedUpdates=wd,Ni.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!cc(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uc(n,i,a,!1,c)},Ni.version="18.3.1-next-f1338f8080-20240426",Ni}var Zm;function c_(){if(Zm)return Od.exports;Zm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Od.exports=l_(),Od.exports}var Jm;function u_(){if(Jm)return fc;Jm=1;var r=c_();return fc.createRoot=r.createRoot,fc.hydrateRoot=r.hydrateRoot,fc}var d_=u_();const f_=og(d_),lg="no_mires_abajo_playstore_v3",Xc=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function h_(r){return r&&Xc.find(t=>t.code===r||t.flag===r)||Xc[0]}const ss=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puente de la Mujer",en:"Obelisk & Puente de la Mujer"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"Río de Janeiro",en:"Rio de Janeiro"},monumentName:{es:"Cristo Redentor Iluminado",en:"Illuminated Christ the Redeemer"},weatherLabel:{es:"Brasa Nocturna Carioca",en:"Carioca Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#4ade80",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"cristo"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Estatua de la Libertad y Empire State",en:"Statue of Liberty & Empire State"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#38bdf8",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"liberty_empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"willis"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben y London Eye Giratorio",en:"Big Ben & Rotating London Eye"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel y Faro Giratorio",en:"Eiffel Tower & Rotating Beacon"},weatherLabel:{es:"Haces de Luz Ámbar/Dorado",en:"Amber/Gold Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"golden_embers",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"cuatrotorres"},{index:9,flag:"🇷🇺",name:{es:"Moscú",en:"Moscow"},monumentName:{es:"Cúpulas de San Basilio con Estrellas",en:"Saint Basil's Onion Domes"},weatherLabel:{es:"Ventisca Invernal Rusa",en:"Russian Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#f43f5e",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"stbasil"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Las Tres Grandes Pirámides de Giza",en:"Three Great Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#fde047",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"mahanakhon"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Velas de la Ópera de Sídney",en:"Sydney Opera House Sails"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Torre de Tokio y Arco Torii Luminoso",en:"Tokyo Tower & Luminous Torii Gate"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#ef4444",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],Bd=[{id:"vip_dubai",index:20,flag:"🇦🇪",name:{es:"Dubái Sky-Bridge VIP",en:"Dubai Sky-Bridge VIP"},desc:{es:"Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.",en:"Crossing between the tallest towers in the world with golden storm & x3 payout."},weatherLabel:{es:"Tormenta de Oro 24K VIP",en:"24K Gold Storm VIP"},weatherArchetype:"golden_embers",accentColor:"#fde047",winColor:"#fef08a",windStrength:1.25,monument:"burjkhalifa",rewardMult:3,gemBonus:25,gemUnlockCost:350,usdPrice:"$1.99 USD"},{id:"vip_vegas",index:21,flag:"🇺🇸",name:{es:"Las Vegas Neon Strip VIP",en:"Las Vegas Neon Strip VIP"},desc:{es:"Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.",en:"Hyper-bright casino lights and triple x3 LP & Gems rewards."},weatherLabel:{es:"Lluvia de Neón y Fichas VIP",en:"Casino Neon Rain VIP"},weatherArchetype:"cyber_rain",accentColor:"#f43f5e",winColor:"#fde047",windStrength:1.32,monument:"vegas_strip",rewardMult:3,gemBonus:35,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_monaco",index:22,flag:"🇲🇨",name:{es:"Mónaco Casino Royal VIP",en:"Monaco Casino Royal VIP"},desc:{es:"Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.",en:"Gala night over Monte Carlo bay with triple coin payouts."},weatherLabel:{es:"Destellos Dorados de Gala",en:"Royal Golden Sparkles"},weatherArchetype:"golden_embers",accentColor:"#fbbf24",winColor:"#fef9c3",windStrength:1.18,monument:"monaco_casino",rewardMult:3,gemBonus:30,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_alps",index:23,flag:"🇨🇭",name:{es:"Alpes Suizos Nocturnos VIP",en:"Swiss Alps Nocturnal VIP"},desc:{es:"Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.",en:"Extreme crossing between high-mountain cable cars under the Aurora Borealis."},weatherLabel:{es:"Aurora Boreal y Ventisca Alpina",en:"Aurora Borealis & Alpine Gale"},weatherArchetype:"blizzard",accentColor:"#4ade80",winColor:"#a5f3fc",windStrength:1.45,monument:"swiss_alps",rewardMult:3.5,gemBonus:45,gemUnlockCost:450,usdPrice:"$2.99 USD"}],hc=[{id:"pole_basic",icon:"🦯",name:{es:"Barra de Acero Urbano",en:"Urban Steel Pole"},badge:{es:"GRATIS • BASE 1.0x",en:"FREE • BASE 1.0x"},desc:{es:"Estabilidad base 1.0x con núcleo láser cian estándar.",en:"Base 1.0x stability with standard cyan laser core."},currency:"free",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:0,stepDamp:0,catchRadiusBonus:0,scoreMult:1,coinMult:1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1,coreHex:14742270,glowHex:62206,tipHex:62206,hasGyroRings:!1},{id:"pole_carbon",icon:"⚡",name:{es:"Barra de Fibra de Carbono",en:"Carbon Fiber Pole"},badge:{es:"-18% GRAVEDAD • +LARGO 3D",en:"-18% GRAVITY • +3D LENGTH"},desc:{es:"Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.",en:"Reduces tipping gravity by 18% and extends the 3D pole length."},currency:"coins",cost:14500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.18,stepDamp:.1,catchRadiusBonus:.05,scoreMult:1.1,coinMult:1.1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.22,coreHex:14482663,glowHex:2282478,tipHex:4906624,hasGyroRings:!1},{id:"pole_gyro",icon:"🌀",name:{es:"Barra Giroscópica Neón",en:"Neon Gyroscopic Pole"},badge:{es:"-32% INCLINACIÓN • -30% PISADA",en:"-32% TILT • -30% STEP SWAY"},desc:{es:"Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.",en:"Reduces tilt by 32% and dampens fast-step lateral impact by 30%."},currency:"coins",cost:48e3,gemCost:290,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.32,stepDamp:.3,catchRadiusBonus:.1,scoreMult:1.25,coinMult:1.25,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.34,coreHex:15984895,glowHex:11032055,tipHex:62206,hasGyroRings:!0},{id:"pole_quantum",icon:"👑",name:{es:"👑 Barra Láser Cuántica",en:"👑 Quantum Laser Pole"},badge:{es:"EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS",en:"PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS"},desc:{es:"Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.",en:"Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier."},currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,gravityReduction:.5,stepDamp:.4,catchRadiusBonus:.25,scoreMult:1.5,coinMult:1.5,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.45,coreHex:16770278,glowHex:16007006,tipHex:62206,hasGyroRings:!0},{id:"pole_imperial",icon:"👑",name:{es:"👑 Barra Gravitatoria Imperial",en:"👑 Imperial Graviton Pole"},badge:{es:"PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0",en:"VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0"},desc:{es:"Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.",en:"Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier."},currency:"vip_or_usd",cost:900,gemCost:900,usdPrice:"$3.99 USD",isPro:!0,isVipOnly:!0,gravityReduction:.65,stepDamp:.55,catchRadiusBonus:.3,scoreMult:2,coinMult:2,noCatchRecoil:!0,autoSaveFall:!0,poleScaleX:1.56,coreHex:16710083,glowHex:16638023,tipHex:16096779,hasGyroRings:!0}],Dr={urbano:{key:"urbano",styleType:"urbano",multLabel:"x1",jacketHex:1976635,jacketEmissiveHex:726310,pantsHex:988970,bootHex:4674921,soleHex:9741240,gloveHex:3359061,wristHex:3718648,headHex:1976635,headbandHex:3718648,ribbonHex:3718648,dorsalHex:3718648,rimHex:3718648,rimStrength:1.05,paletteSwatches:["#1e293b","#0f172a","#38bdf8","#475569"],paletteLabel:{es:"Grafito + Cian Urbano",en:"Graphite + Urban Cyan"},goldTrail:!1},night_runner:{key:"night_runner",styleType:"night_runner",multLabel:"x1.2",jacketHex:593174,jacketEmissiveHex:329745,pantsHex:593174,bootHex:10741301,soleHex:16777215,gloveHex:1120295,wristHex:16777215,headHex:593174,headbandHex:16777215,ribbonHex:16777215,dorsalHex:16777215,rimHex:10741301,rimStrength:1.35,paletteSwatches:["#090d16","#ffffff","#a3e635"],paletteLabel:{es:"Reflectivo Blanco + Lima Flúor",en:"Reflective White + Fluor Lime"},goldTrail:!1},infiltrado:{key:"infiltrado",styleType:"infiltrado",multLabel:"x1.5",jacketHex:329483,jacketEmissiveHex:6958,pantsHex:329483,bootHex:527380,soleHex:62206,gloveHex:594726,wristHex:62206,headHex:329483,headbandHex:62206,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.48,paletteSwatches:["#05070b","#00f2fe","#0284c7"],paletteLabel:{es:"Arnés Táctico X + Neón Cian",en:"Tactical X-Harness + Cyan Neon"},goldTrail:!1},ilusionista:{key:"ilusionista",styleType:"ilusionista",multLabel:"x2",jacketHex:1970229,jacketEmissiveHex:2493773,pantsHex:1181988,bootHex:1970229,soleHex:11032055,gloveHex:16777215,wristHex:15857145,headHex:1970229,headbandHex:15857145,ribbonHex:12616956,dorsalHex:12616956,rimHex:12616956,rimStrength:1.55,paletteSwatches:["#1e1035","#c084fc","#f1f5f9","#a855f7"],paletteLabel:{es:"Púrpura Neón + Plata Brillante",en:"Neon Purple + Bright Silver"},goldTrail:!1},shinobi:{key:"shinobi",styleType:"shinobi",multLabel:"x3",jacketHex:984842,jacketEmissiveHex:2819090,pantsHex:590854,bootHex:1575182,soleHex:15680580,gloveHex:1705998,wristHex:16711765,headHex:984842,headbandHex:16711765,ribbonHex:16711765,dorsalHex:16711765,rimHex:16711765,rimStrength:1.68,paletteSwatches:["#0f070a","#ff0055","#ef4444","#fbbf24"],paletteLabel:{es:"Carmesí Cyber + Katana Dorsal",en:"Cyber Crimson + Back Katana"},goldTrail:!1},leyenda_dorada:{key:"leyenda_dorada",styleType:"leyenda_dorada",multLabel:"x3.5",jacketHex:16498468,jacketEmissiveHex:9584654,pantsHex:7877903,bootHex:16498468,soleHex:16707722,gloveHex:16707722,wristHex:16777215,headHex:16498468,headbandHex:16707722,ribbonHex:16638023,dorsalHex:16707722,rimHex:16638023,rimStrength:1.85,paletteSwatches:["#fbbf24","#fde047","#fef08a","#78350f"],paletteLabel:{es:"Armadura Solar 24K + Aura VIP",en:"24K Solar Armor + VIP Aura"},goldTrail:!0}},p_={default:"urbano",urbano:"urbano",skin_1:"urbano",night_runner:"night_runner",skin_2:"night_runner",infiltrado:"infiltrado",skin_3:"infiltrado",ilusionista:"ilusionista",skin_4:"ilusionista",shinobi:"shinobi",skin_5:"shinobi",samurai:"leyenda_dorada",leyenda_dorada:"leyenda_dorada",skin_6:"leyenda_dorada"};function la(r){return r&&p_[r]||"urbano"}function cg(r){const e=la(r);return Dr[e]||Dr.urbano}const ol=[{id:"urbano",legacyId:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,currency:"coins",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1,catchWindowBonus:0,coinBonus:0,windReduction:0,stepDampBonus:0,freeShields:0,badge:{es:"MULTIPLICADOR x1 • GRATIS",en:"x1 MULTIPLIER • FREE"},name:{es:"Urbano Callejero (x1)",en:"Street Urban (x1)"},desc:{es:"Buzo gris grafito oscuro (#1e293b) con capucha en la nuca, pantalón cargo negro (#0f172a), líneas dorsales cian suave (#38bdf8) y botas urbanas grises.",en:"Dark graphite hoodie (#1e293b) with hood at the nape, black cargo pants (#0f172a), soft cyan dorsal lines (#38bdf8) and gray urban boots."},hoodieColor:"#1e293b",pantsColor:"#0f172a",trimColor:"#38bdf8",shoeColor:"#475569",rimHex:3718648,glowColor:"#38bdf8",goldTrail:!1,visual:Dr.urbano},{id:"night_runner",legacyId:"skin_2",icon:"🏃",unlockLevel:3,unlockCity:1,currency:"coins",cost:12500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1.2,catchWindowBonus:.12,coinBonus:.2,windReduction:.1,stepDampBonus:.1,freeShields:0,badge:{es:"MULTIPLICADOR x1.2 • TIRAS REFLECTIVAS + LIMA FLÚOR",en:"x1.2 MULTIPLIER • REFLECTIVE STRIPS + FLUOR LIME"},name:{es:"Night Runner (x1.2)",en:"Night Runner (x1.2)"},desc:{es:"Rompevientos negro profundo con tiras reflectivas blancas puras (#ffffff) en espalda, mangas y piernas, zapatillas verde lima flúor (#a3e635) con suela blanca y guantes reflectivos.",en:"Deep black windbreaker with bright white reflective strips (#ffffff) on back, sleeves and legs, fluor lime sneakers (#a3e635) with white soles and reflective gloves."},hoodieColor:"#090d16",pantsColor:"#090d16",trimColor:"#ffffff",shoeColor:"#a3e635",rimHex:10741301,glowColor:"#a3e635",goldTrail:!1,visual:Dr.night_runner},{id:"infiltrado",legacyId:"skin_3",icon:"⚡",unlockLevel:8,unlockCity:2,currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1.5,catchWindowBonus:.15,coinBonus:.5,windReduction:.3,stepDampBonus:.2,freeShields:0,badge:{es:"MULTIPLICADOR x1.5 • ARNÉS X NEÓN CIAN + VISOR",en:"x1.5 MULTIPLIER • CYAN X-HARNESS + VISOR"},name:{es:"Infiltrado Táctico (x1.5)",en:"Tactical Infiltrator (x1.5)"},desc:{es:"Campera técnica entallada negro mate con hombreras tácticas, arnés cruzado en X de neón cian intenso (#00f2fe) en la espalda, rodilleras/talones cian y visor táctico.",en:"Matte black fitted technical jacket with tactical shoulder pads, intense cyan neon X-harness (#00f2fe) on the back, cyan kneepads/heels and tactical visor."},hoodieColor:"#05070b",pantsColor:"#05070b",trimColor:"#00f2fe",shoeColor:"#00f2fe",rimHex:62206,glowColor:"#00f2fe",goldTrail:!1,visual:Dr.infiltrado},{id:"ilusionista",legacyId:"skin_4",icon:"🎩",unlockLevel:15,unlockCity:4,currency:"coins",cost:75e3,gemCost:420,usdPrice:"$1.99 USD",isPro:!1,isVipOnly:!1,bonusMult:2,catchWindowBonus:.22,coinBonus:1,windReduction:.38,stepDampBonus:.3,freeShields:0,badge:{es:"MULTIPLICADOR x2.0 • GUANTES DE PLATA + PÚRPURA NEÓN",en:"x2.0 MULTIPLIER • SILVER GLOVES + NEON PURPLE"},name:{es:"Ilusionista de Altura (x2)",en:"High-Wire Illusionist (x2)"},desc:{es:"Chaleco sastrero negro/púrpura (#1e1035) con geometría en púrpura neón (#c084fc) y bordes plata (#f1f5f9), guantes plateados luminosos (#ffffff), cinta púrpura y suelas violeta.",en:"Tailored black/purple vest (#1e1035) with neon purple geometry (#c084fc) & silver trim (#f1f5f9), luminous silver gloves (#ffffff), purple ribbon & violet soles."},hoodieColor:"#1e1035",pantsColor:"#120924",trimColor:"#c084fc",shoeColor:"#a855f7",rimHex:12616956,glowColor:"#c084fc",goldTrail:!1,visual:Dr.ilusionista},{id:"shinobi",legacyId:"skin_5",icon:"🥷",unlockLevel:25,unlockCity:6,currency:"gems_or_usd",cost:550,gemCost:550,usdPrice:"$2.49 USD",isPro:!0,isVipOnly:!1,bonusMult:3,catchWindowBonus:.25,coinBonus:2,windReduction:.5,stepDampBonus:.4,freeShields:0,badge:{es:"👑 MULTIPLICADOR x3.0 • KATANA DORSAL + CIRCUITO CARMESÍ",en:"👑 x3.0 MULTIPLIER • BACK KATANA + CRIMSON CIRCUIT"},name:{es:"Cyber-Shinobi Tokio (x3)",en:"Cyber-Shinobi Tokyo (x3)"},desc:{es:"Armadura ninja cibernética (#0f070a) con circuito carmesí luminoso (#ff0055) en la espalda + katana cruzada en diagonal con empuñadura roja/dorada, bufanda roja y botas con propulsores (#ef4444).",en:"Cybernetic ninja armor (#0f070a) with glowing crimson back circuit (#ff0055) + diagonal katana with red/gold hilt, red energy scarf and red thruster boots (#ef4444)."},hoodieColor:"#0f070a",pantsColor:"#090406",trimColor:"#ff0055",shoeColor:"#ef4444",rimHex:16711765,glowColor:"#ff0055",goldTrail:!1,visual:Dr.shinobi},{id:"leyenda_dorada",legacyId:"skin_6",icon:"👑",unlockLevel:35,unlockCity:10,currency:"vip_or_usd",cost:1100,gemCost:1100,usdPrice:"$4.99 USD",isPro:!0,isVipOnly:!0,bonusMult:3.5,catchWindowBonus:.28,coinBonus:2.5,windReduction:.58,stepDampBonus:.48,freeShields:1,badge:{es:"👑 PASE VIP • MULTI x3.5 • ARMADURA DORADA + AURA SOLAR",en:"👑 VIP PASS • x3.5 MULTI • GOLDEN ARMOR + SOLAR AURA"},name:{es:"👑 Leyenda Dorada Inmortal (x3.5)",en:"👑 Immortal Golden Legend (x3.5)"},desc:{es:"Armadura dorada íntegra (#fbbf24) con aura solar 3D, 1 Escudo Anti-Caída gratuito por nivel y Multiplicador x3.5 permanente en Puntos, LP y Monedas.",en:"Full golden armor (#fbbf24) with 3D solar aura, 1 free Anti-Fall Shield per level and permanent x3.5 Multiplier on Score, LP & Coins."},hoodieColor:"#fbbf24",pantsColor:"#78350f",trimColor:"#fde047",shoeColor:"#fef08a",rimHex:16638023,glowColor:"#fde047",goldTrail:!0,visual:Dr.leyenda_dorada}];function qa(r){const e=la(r);return ol.find(t=>t.id===e||t.legacyId===r)||ol[0]}const pc=[{id:"mult_x2_coins",icon:"🪙",name:{es:"Multiplicador x2 de Monedas",en:"x2 Permanent Coin Multiplier"},badge:{es:"MONEDAS DEL JUEGO • x2 🪙",en:"IN-GAME COINS • x2 🪙"},desc:{es:"Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.",en:"Permanently doubles all coins earned from juggling and clearing rooftops."},currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,coinMult:2,lpMult:1},{id:"mult_x3_pro",icon:"👑",name:{es:"👑 Multiplicador x3 Pro de LP y Monedas",en:"👑 x3 Pro LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙",en:"PRO / VIP PASS • x3 LP & 🪙"},desc:{es:"Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.",en:"Permanently triples your League Points (LP) for the Online Leaderboard and your Coins."},currency:"vip_or_usd",cost:600,gemCost:600,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!0,coinMult:3,lpMult:3},{id:"mult_x5_ultra",icon:"🚀",name:{es:"👑 Multiplicador x5 Ultra de LP y Monedas",en:"👑 x5 Ultra LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PACK PRO • x5 LP Y 🪙",en:"PRO PACK EXCLUSIVE • x5 LP & 🪙"},desc:{es:"Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.",en:"Maximum x5 boost to Online League Points and Coins across all cities and levels."},currency:"gems_or_usd",cost:1200,gemCost:1200,usdPrice:"$5.99 USD",isPro:!0,isVipOnly:!1,coinMult:5,lpMult:5}],sl=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,currency:"coins",cost:0,gemCost:0,name:{es:"Esferas Incandescentes",en:"Incandescent Orbs"},color:"#fde047"},{id:"torches",icon:"🔥",mult:2,unlockLevel:6,currency:"coins",cost:18500,gemCost:160,name:{es:"Antorchas de Plasma (x2)",en:"Plasma Torches (x2)"},color:"#f97316"},{id:"knives",icon:"🔪",mult:3,unlockLevel:16,currency:"coins",cost:42e3,gemCost:280,name:{es:"Dagas Láser Cian (x3)",en:"Cyan Laser Daggers (x3)"},color:"#00f2fe"},{id:"chainsaws",icon:"🪚",mult:5,unlockLevel:31,currency:"gems",cost:480,gemCost:480,name:{es:"👑 Sierras Neón Pro (x5)",en:"👑 Pro Neon Saws (x5)"},color:"#ef4444"},{id:"goldbars",icon:"🪙",mult:8,unlockLevel:60,currency:"gems",cost:950,gemCost:950,name:{es:"👑 Orbes Cuánticos 24K (x8)",en:"👑 24K Quantum Orbs (x8)"},color:"#fde047"}],m_=[{id:"pole",icon:"⚖️",maxLevel:10,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Núcleo de Inercia",en:"Inertia Core"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"boots",icon:"🥾",maxLevel:10,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"gloves",icon:"🧤",maxLevel:10,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}}];function Qm(r){const e=Math.max(0,Math.min(10,r||0));if(e>=10)return{isMax:!0,isProTier:!0,coinCost:0,gemCost:0};if(e<5)return{isMax:!1,isProTier:!1,coinCost:Math.round(850*Math.pow(2.45,e)),gemCost:0};const t=e-5;return{isMax:!1,isProTier:!0,coinCost:0,gemCost:Math.round(140*Math.pow(1.45,t))}}const g_=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],v_=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],__=[{id:"bundle_vip_pass",icon:"👑",isVipPassBundle:!0,gems:1500,coins:5e4,leaguePts:1500,popular:!0,tag:"👑 ACTIVAR VIP ($4.99)",name:{es:"👑 PASE VIP PRO TEMPORADA",en:"👑 SEASON VIP PRO PASS"},perks:{es:["🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería","👑 Desbloquea las 4 Ciudades Exclusivas VIP","🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)","🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)","+1.500 💎 Gemas y +50.000 🪙 Monedas al instante"],en:["🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10","👑 Unlocks all 4 Exclusive VIP Cities","🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)","🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)","+1,500 💎 Gems & +50,000 🪙 Coins instantly"]}},{id:"bundle_starter",icon:"⚡",gems:450,coins:18e3,leaguePts:300,popular:!1,tag:"💎 PACK PRO ($1.99)",name:{es:"Cofre Cuántico de Gemas",en:"Quantum Gem Chest"},perks:{es:["+450 💎 Gemas Premium + 18.000 🪙 Monedas","Ideal para Barra Láser Cuántica o Mejoras Nv. 6+"],en:["+450 💎 Premium Gems + 18,000 🪙 Coins","Ideal for Quantum Laser Pole or Lvl 6+ Upgrades"]}},{id:"bundle_legend",icon:"🚀",gems:1400,coins:85e3,leaguePts:2500,popular:!0,tag:"👑 PACK ULTRA ($5.99)",name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+1.400 💎 Gemas + 85.000 🪙 Monedas","Alcanza para Multiplicador x5 Ultra + Samurái Neón"],en:["+1,400 💎 Gems + 85,000 🪙 Coins","Enough for x5 Ultra Multiplier + Neon Samurai"]}}],e0={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",leagueBanner:"LIGA DE TEMPORADA",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Tienda VIP",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",skinsBtn:"Aspectos",level:"Nivel",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",shieldSavedPopup:"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",levelCleared:"¡AZOTEA ALCANZADA!",nextLevel:"SIGUIENTE NIVEL",armoryTitle:"ARMERÍA PRO, BARRAS Y MULTIPLICADORES",armorySub:"Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",proUpgradeBtn:"👑 MEJORA PRO — GEMAS / PASE VIP",polesSectionTitle:"⚖️ VARAS DE EQUILIBRIO (BARRAS)",multipliersSectionTitle:"🚀 MULTIPLICADORES PERMANENTES",vipCitiesTitle:"👑 CIUDADES EXCLUSIVAS VIP",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.",shopTitle:"👑 TIENDA PRO & PASE VIP DE TEMPORADA",shopSub:"Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",leagueBanner:"SEASON LEAGUE",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"VIP Shop",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",skinsBtn:"Skins",level:"Level",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",shieldSavedPopup:"🛡️ ANTI-FALL SHIELD ACTIVATED!",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",levelCleared:"ROOFTOP REACHED!",nextLevel:"NEXT LEVEL",armoryTitle:"PRO ARMORY, POLES & MULTIPLIERS",armorySub:"Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",proUpgradeBtn:"👑 PRO UPGRADE — GEMS / VIP PASS",polesSectionTitle:"⚖️ BALANCE POLES (BARS)",multipliersSectionTitle:"🚀 PERMANENT MULTIPLIERS",vipCitiesTitle:"👑 EXCLUSIVE VIP CITIES",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.",shopTitle:"👑 PRO SHOP & SEASON VIP PASS",shopSub:"Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",backToLobbyBtn:"BACK TO MAIN MENU",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",youLabel:"YOU (Tightrope Walker)"}};for(let r=0;r<ss.length;r++){const e=ss[r];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}for(let r=0;r<ol.length;r++){const e=ol[r];e.coatColor=e.coatColor||e.hoodieColor}for(let r=0;r<sl.length;r++){const e=sl[r];e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function ug(r){const e=Math.max(1,Math.min(100,r||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function x_(r){const e=Math.max(1,Math.min(100,r||1)),t=ug(e),s=100+(e-1)*5;return Math.round(s*t)}function zd(r,e=null){const t=Math.max(1,Math.min(100,r||1)),s=Math.min(19,Math.max(0,Math.floor((t-1)/5))),o=e||ss[s],l=(t-1)%5+1,u=ug(t),f=5,m=Number((f*u).toFixed(3)),p=x_(t),S=t<4?0:Number((u*(1+(t-4)*.018)).toFixed(3)),y=Number((u*1.15).toFixed(3)),_=Number((.62*y).toFixed(3)),M=Number(Math.max(.14,.28-(t-1)/99*.14).toFixed(4)),E=t<4?6:Number(Math.max(4.5,6-(t-4)/96*1.5).toFixed(2)),b=.32+o.windStrength*.45+l*.045,x=1.08+t/100*.92,v=t<=15?2:t<=55?3:4,R=t<=3?0:t<=10?1:t<=25?2:t<=50?3:4,U=Number((.028+Math.max(0,u-1)*.068).toFixed(4)),A=Number((.036+Math.max(0,u-1)*.064).toFixed(4));return{level:t,cityIndex:e?e.index:s,city:o,isVipCity:!!e,stageInCity:l,speedPhase:R,walkSpeedMultiplier:u,baseWalkSpeed:f,walkSpeed:u,walkSpeedMeters:m,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:S,juggleSpeedMultiplier:y,juggleBaseSpeed:_,juggleSpeed:_,catchWindow:M,gravityFactor:x,gravity:x*2.1,windMax:b,windBase:b,windChangeFreq:E,gustInterval:Math.max(.75,2.2-R*.32),windBaseForce:b,gravityInstability:x,defaultObjects:v,ballCount:v,stepSwayImpulse:U,catchRecoilImpulse:A}}const t0=[523.25,587.33,659.25,783.99,880,1046.5];class S_{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),s=this.ctx.createBuffer(1,t,e),o=s.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=s}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const s=this.ctx.currentTime,o=Math.max(0,(e-1)%t0.length),l=e>=12?1.25:1,u=t0[o]*l,f=this.ctx.createOscillator(),m=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",m.type="sine",f.frequency.setValueAtTime(u,s),m.frequency.setValueAtTime(u,s),p.gain.setValueAtTime(.001,s),p.gain.linearRampToValueAtTime(.18,s+.015),p.gain.exponentialRampToValueAtTime(.06,s+.07),p.gain.exponentialRampToValueAtTime(.001,s+.18),f.connect(p),m.connect(p),p.connect(this.ctx.destination),f.start(s),m.start(s),f.stop(s+.19),m.stop(s+.19),t){const S=this.ctx.createOscillator(),y=this.ctx.createGain();S.type="sine",S.frequency.setValueAtTime(u*2,s),S.frequency.exponentialRampToValueAtTime(u*2.04,s+.18),y.gain.setValueAtTime(.001,s),y.gain.linearRampToValueAtTime(.14,s+.012),y.gain.exponentialRampToValueAtTime(.001,s+.18),S.connect(y),y.connect(this.ctx.destination),S.start(s),S.stop(s+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.Q.setValueAtTime(6.5,e),s.frequency.setValueAtTime(310,e),s.frequency.exponentialRampToValueAtTime(920,e+.42),s.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(s),s.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(65,t),s.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.045),l.gain.setValueAtTime(.14,e+s*.045),l.gain.exponentialRampToValueAtTime(.001,e+s*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.045),o.stop(e+s*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.085),l.gain.setValueAtTime(.17,e+s*.085),l.gain.exponentialRampToValueAtTime(.001,e+s*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.085),o.stop(e+s*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],s=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(s[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playHookRescue(){this.playGrapple()}playNearMiss(){this.playNearMissSave()}playFallScream(){this.playFall()}playFrenzyStart(){this.playVictory()}playMissAlert(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,45]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(195,e),t.frequency.exponentialRampToValueAtTime(98,e+.22),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.25)}playFootstep(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine";const l=92+Math.min(45,(e-1)*30);s.frequency.setValueAtTime(l,t),s.frequency.exponentialRampToValueAtTime(42,t+.065),o.gain.setValueAtTime(.09,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.075)}updateWind(e=0){Math.abs(e)>.85&&Math.random()<.015&&this.playWindGust()}}const Nt=new S_,y_=Xc;function co(r){return h_(r).flag}const M_="nma_live_leaderboard_cache_v2";async function $o(r,e,t,s=1){const o=(r||"Equilibrista").trim().slice(0,15),l=(e||"AR").trim(),u=co(l),f={id:"player_self",name:o,country:l,flag:u,score:Math.max(0,Math.floor(t||0)),lp:Math.max(0,Math.floor(t||0)),level:Math.max(1,s||1),updatedAt:Date.now(),isPlayer:!0};try{localStorage.setItem(M_,JSON.stringify(f))}catch{}return f}async function n0(r){const e=((r==null?void 0:r.name)||"Equilibrista").trim().slice(0,15),t=((r==null?void 0:r.country)||"AR").trim(),s=co(t),o=Math.max(0,Math.floor((r==null?void 0:r.score)??320)),l=Math.max(1,(r==null?void 0:r.level)||1),u=Math.floor(Date.now()/45e3),f=g_.map((S,y)=>{const _=(u+y*7)%11*15,M=S.baseLp+_;return{id:S.id,name:S.name,country:S.country,flag:S.flag,score:M,lp:M,level:Math.max(5,Math.min(100,Math.floor(M/180))),badge:S.badge,isPlayer:!1}}),m={id:"player_self",name:e,country:t,flag:s,score:o,lp:o,level:l,badge:"⚡",isPlayer:!0};return[...f,m].sort((S,y)=>y.lp-S.lp)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="186",E_=0,i0=1,w_=2,qc=1,T_=2,il=3,fa=0,Oi=1,Ui=2,os=0,al=1,Di=2,r0=3,s0=4,A_=5,lo=100,b_=101,R_=102,C_=103,P_=104,L_=200,N_=201,I_=202,D_=203,dg=204,fg=205,U_=206,O_=207,F_=208,k_=209,B_=210,z_=211,V_=212,H_=213,G_=214,Ef=0,wf=1,Tf=2,ll=3,Af=4,bf=5,Rf=6,Cf=7,hg=0,W_=1,X_=2,kr=0,pg=1,mg=2,gg=3,ph=4,vg=5,_g=6,xg=7,Sg=300,ha=301,po=302,Vd=303,Hd=304,ou=306,pa=1e3,as=1001,Pf=1002,ei=1003,q_=1004,mc=1005,hi=1006,Gd=1007,ua=1008,ji=1009,yg=1010,Mg=1011,cl=1012,mh=1013,Br=1014,Or=1015,zr=1016,gh=1017,vh=1018,ul=1020,Eg=35902,wg=35899,Tg=1021,Ag=1022,xr=1023,cs=1026,da=1027,bg=1028,_h=1029,ma=1030,xh=1031,Sh=1033,jc=33776,$c=33777,Yc=33778,Kc=33779,Lf=35840,Nf=35841,If=35842,Df=35843,Uf=36196,Of=37492,Ff=37496,kf=37488,Bf=37489,Qc=37490,zf=37491,Vf=37808,Hf=37809,Gf=37810,Wf=37811,Xf=37812,qf=37813,jf=37814,$f=37815,Yf=37816,Kf=37817,Zf=37818,Jf=37819,Qf=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,eu=36285,ah=36286,j_=3200,oh=0,$_=1,Ds="",ir="srgb",tu="srgb-linear",nu="linear",cn="srgb",Wd=7680,Y_=519,K_=512,Z_=513,J_=514,yh=515,Q_=516,ex=517,Mh=518,tx=519,nx=35044,a0="300 es",Fr=2e3,dl=2001;function ix(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rx(){const r=iu("canvas");return r.style.display="block",r}const o0={};function l0(...r){const e="THREE."+r.shift();console.log(e,...r)}function Rg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function wt(...r){r=Rg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function sn(...r){r=Rg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fo(...r){const e=r.join(" ");e in o0||(o0[e]=!0,wt(...r))}function sx(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const ax={[Ef]:wf,[Tf]:Rf,[Af]:Cf,[ll]:bf,[wf]:Ef,[Rf]:Tf,[Cf]:Af,[bf]:ll};class va{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,lh=180/Math.PI;function hl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(di[r&255]+di[r>>8&255]+di[r>>16&255]+di[r>>24&255]+"-"+di[e&255]+di[e>>8&255]+"-"+di[e>>16&15|64]+di[e>>24&255]+"-"+di[t&63|128]+di[t>>8&255]+"-"+di[t>>16&255]+di[t>>24&255]+di[s&255]+di[s>>8&255]+di[s>>16&255]+di[s>>24&255]).toLowerCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function ox(r,e){return(r%e+e)%e}function Xd(r,e,t){return(1-t)*r+t*e}function Yo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lh=class Lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Jt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;let Wt=Lh;class go{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let m=s[o+0],p=s[o+1],S=s[o+2],y=s[o+3],_=l[u+0],M=l[u+1],E=l[u+2],b=l[u+3];if(y!==b||m!==_||p!==M||S!==E){let x=m*_+p*M+S*E+y*b;x<0&&(_=-_,M=-M,E=-E,b=-b,x=-x);let v=1-f;if(x<.9995){const R=Math.acos(x),U=Math.sin(R);v=Math.sin(v*R)/U,f=Math.sin(f*R)/U,m=m*v+_*f,p=p*v+M*f,S=S*v+E*f,y=y*v+b*f}else{m=m*v+_*f,p=p*v+M*f,S=S*v+E*f,y=y*v+b*f;const R=1/Math.sqrt(m*m+p*p+S*S+y*y);m*=R,p*=R,S*=R,y*=R}}e[t]=m,e[t+1]=p,e[t+2]=S,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],m=s[o+1],p=s[o+2],S=s[o+3],y=l[u],_=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+S*y+m*M-p*_,e[t+1]=m*E+S*_+p*y-f*M,e[t+2]=p*E+S*M+f*_-m*y,e[t+3]=S*E-f*y-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(s/2),S=f(o/2),y=f(l/2),_=m(s/2),M=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=_*S*y+p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y-_*M*E;break;case"YXZ":this._x=_*S*y+p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y+_*M*E;break;case"ZXY":this._x=_*S*y-p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y-_*M*E;break;case"ZYX":this._x=_*S*y-p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y+_*M*E;break;case"YZX":this._x=_*S*y+p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y-_*M*E;break;case"XZY":this._x=_*S*y-p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y+_*M*E;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],S=t[6],y=t[10],_=s+f+y;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(S-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>f&&s>y){const M=2*Math.sqrt(1+s-f-y);this._w=(S-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>y){const M=2*Math.sqrt(1+f-s-y);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+y-s-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,S=t._w;return this._x=s*S+u*f+o*p-l*m,this._y=o*S+u*m+l*f-s*p,this._z=l*S+u*p+s*m-o*f,this._w=u*S-s*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),S=Math.sin(p);m=Math.sin(m*p)/S,t=Math.sin(t*p)/S,this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nh=class Nh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(c0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(c0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*s),S=2*(f*t-l*o),y=2*(l*s-u*t);return this.x=t+m*p+u*y-f*S,this.y=s+m*S+f*p-l*y,this.z=o+m*y+l*S-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-s*m,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return qd.copy(this).projectOnVector(e),this.sub(qd)}reflect(e){return this.sub(qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Jt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nh.prototype.isVector3=!0;let te=Nh;const qd=new te,c0=new go,Ih=class Ih{constructor(e,t,s,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p)}set(e,t,s,o,l,u,f,m,p){const S=this.elements;return S[0]=e,S[1]=o,S[2]=f,S[3]=t,S[4]=l,S[5]=m,S[6]=s,S[7]=u,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],m=s[6],p=s[1],S=s[4],y=s[7],_=s[2],M=s[5],E=s[8],b=o[0],x=o[3],v=o[6],R=o[1],U=o[4],A=o[7],I=o[2],N=o[5],O=o[8];return l[0]=u*b+f*R+m*I,l[3]=u*x+f*U+m*N,l[6]=u*v+f*A+m*O,l[1]=p*b+S*R+y*I,l[4]=p*x+S*U+y*N,l[7]=p*v+S*A+y*O,l[2]=_*b+M*R+E*I,l[5]=_*x+M*U+E*N,l[8]=_*v+M*A+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8];return t*u*S-t*f*p-s*l*S+s*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8],y=S*u-f*p,_=f*m-S*l,M=p*l-u*m,E=t*y+s*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(o*p-S*s)*b,e[2]=(f*s-o*u)*b,e[3]=_*b,e[4]=(S*t-o*m)*b,e[5]=(o*l-f*t)*b,e[6]=M*b,e[7]=(s*m-p*t)*b,e[8]=(u*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jd.makeScale(e,t)),this}rotate(e){return fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jd.makeRotation(-e)),this}translate(e,t){return fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ih.prototype.isMatrix3=!0;let Rt=Ih;const jd=new Rt,u0=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d0=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const r={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===cn&&(o.r=ls(o.r),o.g=ls(o.g),o.b=ls(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===cn&&(o.r=ho(o.r),o.g=ho(o.g),o.b=ho(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ds?nu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[tu]:{primaries:e,whitePoint:s,transfer:nu,toXYZ:u0,fromXYZ:d0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ir},outputColorSpaceConfig:{drawingBufferColorSpace:ir}},[ir]:{primaries:e,whitePoint:s,transfer:cn,toXYZ:u0,fromXYZ:d0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ir}}}),r}const Zt=lx();function ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ja;class cx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ja===void 0&&(ja=iu("canvas")),ja.width=e.width,ja.height=e.height;const o=ja.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ja}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=iu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ls(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ls(t[s]/255)*255):t[s]=ls(t[s]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Eh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push($d(o[u].image)):l.push($d(o[u]))}else l=$d(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function $d(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let dx=0;const Yd=new te;class pi extends va{constructor(e=pi.DEFAULT_IMAGE,t=pi.DEFAULT_MAPPING,s=as,o=as,l=hi,u=ua,f=xr,m=ji,p=pi.DEFAULT_ANISOTROPY,S=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=hl(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=Sg;pi.DEFAULT_ANISOTROPY=1;const Dh=class Dh{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const m=e.elements,p=m[0],S=m[4],y=m[8],_=m[1],M=m[5],E=m[9],b=m[2],x=m[6],v=m[10];if(Math.abs(S-_)<.01&&Math.abs(y-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(S+_)<.1&&Math.abs(y+b)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,A=(M+1)/2,I=(v+1)/2,N=(S+_)/4,O=(y+b)/4,w=(E+x)/4;return U>A&&U>I?U<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(U),o=N/s,l=O/s):A>I?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=N/o,l=w/o):I<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),s=O/l,o=w/l),this.set(s,o,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(y-b)*(y-b)+(_-S)*(_-S));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(y-b)/R,this.z=(_-S)/R,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this.w=Jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this.w=Jt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;let An=Dh;class fx extends va{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new An(0,0,e,t),this.scissorTest=!1,this.viewport=new An(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new pi(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Eh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends fx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Cg extends pi{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ei,this.minFilter=ei,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends pi{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ei,this.minFilter=ei,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const au=class au{constructor(e,t,s,o,l,u,f,m,p,S,y,_,M,E,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p,S,y,_,M,E,b,x)}set(e,t,s,o,l,u,f,m,p,S,y,_,M,E,b,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=S,v[10]=y,v[14]=_,v[3]=M,v[7]=E,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new au().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/$a.setFromMatrixColumn(e,0).length(),l=1/$a.setFromMatrixColumn(e,1).length(),u=1/$a.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),m=Math.cos(o),p=Math.sin(o),S=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const _=u*S,M=u*y,E=f*S,b=f*y;t[0]=m*S,t[4]=-m*y,t[8]=p,t[1]=M+E*p,t[5]=_-b*p,t[9]=-f*m,t[2]=b-_*p,t[6]=E+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*S,M=m*y,E=p*S,b=p*y;t[0]=_+b*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*y,t[5]=u*S,t[9]=-f,t[2]=M*f-E,t[6]=b+_*f,t[10]=u*m}else if(e.order==="ZXY"){const _=m*S,M=m*y,E=p*S,b=p*y;t[0]=_-b*f,t[4]=-u*y,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*S,t[9]=b-_*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const _=u*S,M=u*y,E=f*S,b=f*y;t[0]=m*S,t[4]=E*p-M,t[8]=_*p+b,t[1]=m*y,t[5]=b*p+_,t[9]=M*p-E,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,E=f*m,b=f*p;t[0]=m*S,t[4]=b-_*y,t[8]=E*y+M,t[1]=y,t[5]=u*S,t[9]=-f*S,t[2]=-p*S,t[6]=M*y+E,t[10]=_-b*y}else if(e.order==="XZY"){const _=u*m,M=u*p,E=f*m,b=f*p;t[0]=m*S,t[4]=-y,t[8]=p*S,t[1]=_*y+b,t[5]=u*S,t[9]=M*y-E,t[2]=E*y-M,t[6]=f*S,t[10]=b*y+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,s){const o=this.elements;return Wi.subVectors(e,t),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),bs.crossVectors(s,Wi),bs.lengthSq()===0&&(Math.abs(s.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),bs.crossVectors(s,Wi)),bs.normalize(),gc.crossVectors(Wi,bs),o[0]=bs.x,o[4]=gc.x,o[8]=Wi.x,o[1]=bs.y,o[5]=gc.y,o[9]=Wi.y,o[2]=bs.z,o[6]=gc.z,o[10]=Wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],m=s[8],p=s[12],S=s[1],y=s[5],_=s[9],M=s[13],E=s[2],b=s[6],x=s[10],v=s[14],R=s[3],U=s[7],A=s[11],I=s[15],N=o[0],O=o[4],w=o[8],L=o[12],V=o[1],W=o[5],G=o[9],ne=o[13],j=o[2],ie=o[6],he=o[10],oe=o[14],J=o[3],Z=o[7],ee=o[11],F=o[15];return l[0]=u*N+f*V+m*j+p*J,l[4]=u*O+f*W+m*ie+p*Z,l[8]=u*w+f*G+m*he+p*ee,l[12]=u*L+f*ne+m*oe+p*F,l[1]=S*N+y*V+_*j+M*J,l[5]=S*O+y*W+_*ie+M*Z,l[9]=S*w+y*G+_*he+M*ee,l[13]=S*L+y*ne+_*oe+M*F,l[2]=E*N+b*V+x*j+v*J,l[6]=E*O+b*W+x*ie+v*Z,l[10]=E*w+b*G+x*he+v*ee,l[14]=E*L+b*ne+x*oe+v*F,l[3]=R*N+U*V+A*j+I*J,l[7]=R*O+U*W+A*ie+I*Z,l[11]=R*w+U*G+A*he+I*ee,l[15]=R*L+U*ne+A*oe+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],S=e[2],y=e[6],_=e[10],M=e[14],E=e[3],b=e[7],x=e[11],v=e[15],R=m*M-p*_,U=f*M-p*y,A=f*_-m*y,I=u*M-p*S,N=u*_-m*S,O=u*y-f*S;return t*(b*R-x*U+v*A)-s*(E*R-x*I+v*N)+o*(E*U-b*I+v*O)-l*(E*A-b*N+x*O)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],S=e[10];return t*(u*S-f*p)-s*(l*S-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8],y=e[9],_=e[10],M=e[11],E=e[12],b=e[13],x=e[14],v=e[15],R=t*f-s*u,U=t*m-o*u,A=t*p-l*u,I=s*m-o*f,N=s*p-l*f,O=o*p-l*m,w=S*b-y*E,L=S*x-_*E,V=S*v-M*E,W=y*x-_*b,G=y*v-M*b,ne=_*v-M*x,j=R*ne-U*G+A*W+I*V-N*L+O*w;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/j;return e[0]=(f*ne-m*G+p*W)*ie,e[1]=(o*G-s*ne-l*W)*ie,e[2]=(b*O-x*N+v*I)*ie,e[3]=(_*N-y*O-M*I)*ie,e[4]=(m*V-u*ne-p*L)*ie,e[5]=(t*ne-o*V+l*L)*ie,e[6]=(x*A-E*O-v*U)*ie,e[7]=(S*O-_*A+M*U)*ie,e[8]=(u*G-f*V+p*w)*ie,e[9]=(s*V-t*G-l*w)*ie,e[10]=(E*N-b*A+v*R)*ie,e[11]=(y*A-S*N-M*R)*ie,e[12]=(f*L-u*W-m*w)*ie,e[13]=(t*W-s*L+o*w)*ie,e[14]=(b*U-E*I-x*R)*ie,e[15]=(S*I-y*U+_*R)*ie,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,m=e.z,p=l*u,S=l*f;return this.set(p*u+s,p*f-o*m,p*m+o*f,0,p*f+o*m,S*f+s,S*m-o*u,0,p*m-o*f,S*m+o*u,l*m*m+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,S=u+u,y=f+f,_=l*p,M=l*S,E=l*y,b=u*S,x=u*y,v=f*y,R=m*p,U=m*S,A=m*y,I=s.x,N=s.y,O=s.z;return o[0]=(1-(b+v))*I,o[1]=(M+A)*I,o[2]=(E-U)*I,o[3]=0,o[4]=(M-A)*N,o[5]=(1-(_+v))*N,o[6]=(x+R)*N,o[7]=0,o[8]=(E+U)*O,o[9]=(x-R)*O,o[10]=(1-(_+b))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=$a.set(o[0],o[1],o[2]).length();const f=$a.set(o[4],o[5],o[6]).length(),m=$a.set(o[8],o[9],o[10]).length();l<0&&(u=-u),gr.copy(this);const p=1/u,S=1/f,y=1/m;return gr.elements[0]*=p,gr.elements[1]*=p,gr.elements[2]*=p,gr.elements[4]*=S,gr.elements[5]*=S,gr.elements[6]*=S,gr.elements[8]*=y,gr.elements[9]*=y,gr.elements[10]*=y,t.setFromRotationMatrix(gr),s.x=u,s.y=f,s.z=m,this}makePerspective(e,t,s,o,l,u,f=Fr,m=!1){const p=this.elements,S=2*l/(t-e),y=2*l/(s-o),_=(t+e)/(t-e),M=(s+o)/(s-o);let E,b;if(m)E=l/(u-l),b=u*l/(u-l);else if(f===Fr)E=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===dl)E=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=S,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Fr,m=!1){const p=this.elements,S=2/(t-e),y=2/(s-o),_=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,b;if(m)E=1/(u-l),b=u/(u-l);else if(f===Fr)E=-2/(u-l),b=-(u+l)/(u-l);else if(f===dl)E=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=S,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};au.prototype.isMatrix4=!0;let yn=au;const $a=new te,gr=new yn,px=new te(0,0,0),mx=new te(1,1,1),bs=new te,gc=new te,Wi=new te,f0=new yn,h0=new go;class Os{constructor(e=0,t=0,s=0,o=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],S=o[9],y=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Jt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Jt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-S,M),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return f0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return h0.setFromEuler(this),this.setFromQuaternion(h0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class Pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const p0=new te,Ya=new go,es=new yn,vc=new te,Ko=new te,vx=new te,_x=new go,m0=new te(1,0,0),g0=new te(0,1,0),v0=new te(0,0,1),_0={type:"added"},xx={type:"removed"},Ka={type:"childadded",child:null},Kd={type:"childremoved",child:null};class jn extends va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new te,t=new Os,s=new go,o=new te(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yn},normalMatrix:{value:new Rt}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ya.setFromAxisAngle(e,t),this.quaternion.multiply(Ya),this}rotateOnWorldAxis(e,t){return Ya.setFromAxisAngle(e,t),this.quaternion.premultiply(Ya),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(v0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(v0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?vc.copy(e):vc.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Ko,vc,this.up):es.lookAt(vc,Ko,this.up),this.quaternion.setFromRotationMatrix(es),o&&(es.extractRotation(o.matrixWorld),Ya.setFromRotationMatrix(es),this.quaternion.premultiply(Ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const y=m[p];l(e.shapes,y)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),S=u(e.images),y=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),y.length>0&&(s.shapes=y),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const m=[];for(const p in f){const S=f[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jn.DEFAULT_UP=new te(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class on extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,s),v=this._getHandJoint(p,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const S=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],_=S.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new on;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Jd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ht{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Zt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Zt.workingColorSpace){if(e=ox(e,1),t=Jt(t,0,1),s=Jt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Jd(u,l,e+1/3),this.g=Jd(u,l,e),this.b=Jd(u,l,e-1/3)}return Zt.colorSpaceToWorking(this,o),this}setStyle(e,t=ir){function s(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ir){const s=Lg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return Zt.workingToColorSpace(fi.copy(this),e),Math.round(Jt(fi.r*255,0,255))*65536+Math.round(Jt(fi.g*255,0,255))*256+Math.round(Jt(fi.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(fi.copy(this),t);const s=fi.r,o=fi.g,l=fi.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let m,p;const S=(f+u)/2;if(f===u)m=0,p=0;else{const y=u-f;switch(p=S<=.5?y/(u+f):y/(2-u-f),u){case s:m=(o-l)/y+(o<l?6:0);break;case o:m=(l-s)/y+2;break;case l:m=(s-o)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(fi.copy(this),t),e.r=fi.r,e.g=fi.g,e.b=fi.b,e}getStyle(e=ir){Zt.workingToColorSpace(fi.copy(this),e);const t=fi.r,s=fi.g,o=fi.b;return e!==ir?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(_c);const s=Xd(Rs.h,_c.h,t),o=Xd(Rs.s,_c.s,t),l=Xd(Rs.l,_c.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fi=new Ht;Ht.NAMES=Lg;class wh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(e),this.density=t}clone(){return new wh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yx extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vr=new te,ts=new te,Qd=new te,ns=new te,Za=new te,Ja=new te,x0=new te,ef=new te,tf=new te,nf=new te,rf=new An,sf=new An,af=new An;class rr{constructor(e=new te,t=new te,s=new te){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),vr.subVectors(e,t),o.cross(vr);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){vr.subVectors(o,t),ts.subVectors(s,t),Qd.subVectors(e,t);const u=vr.dot(vr),f=vr.dot(ts),m=vr.dot(Qd),p=ts.dot(ts),S=ts.dot(Qd),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const _=1/y,M=(p*m-f*S)*_,E=(u*S-f*m)*_;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,s,o,l,u,f,m){return this.getBarycoord(e,t,s,o,ns)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,ns.x),m.addScaledVector(u,ns.y),m.addScaledVector(f,ns.z),m)}static getInterpolatedAttribute(e,t,s,o,l,u){return rf.setScalar(0),sf.setScalar(0),af.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,s),af.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rf,l.x),u.addScaledVector(sf,l.y),u.addScaledVector(af,l.z),u}static isFrontFacing(e,t,s,o){return vr.subVectors(s,t),ts.subVectors(e,t),vr.cross(ts).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vr.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),vr.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return rr.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;Za.subVectors(o,s),Ja.subVectors(l,s),ef.subVectors(e,s);const m=Za.dot(ef),p=Ja.dot(ef);if(m<=0&&p<=0)return t.copy(s);tf.subVectors(e,o);const S=Za.dot(tf),y=Ja.dot(tf);if(S>=0&&y<=S)return t.copy(o);const _=m*y-S*p;if(_<=0&&m>=0&&S<=0)return u=m/(m-S),t.copy(s).addScaledVector(Za,u);nf.subVectors(e,l);const M=Za.dot(nf),E=Ja.dot(nf);if(E>=0&&M<=E)return t.copy(l);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Ja,f);const x=S*E-M*y;if(x<=0&&y-S>=0&&M-E>=0)return x0.subVectors(l,o),f=(y-S)/(y-S+(M-E)),t.copy(o).addScaledVector(x0,f);const v=1/(x+b+_);return u=b*v,f=_*v,t.copy(s).addScaledVector(Za,u).addScaledVector(Ja,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pl{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(_r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(_r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,_r):_r.fromBufferAttribute(l,u),_r.applyMatrix4(e.matrixWorld),this.expandByPoint(_r);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xc.copy(s.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Sc.subVectors(this.max,Zo),Qa.subVectors(e.a,Zo),eo.subVectors(e.b,Zo),to.subVectors(e.c,Zo),Cs.subVectors(eo,Qa),Ps.subVectors(to,eo),ia.subVectors(Qa,to);let t=[0,-Cs.z,Cs.y,0,-Ps.z,Ps.y,0,-ia.z,ia.y,Cs.z,0,-Cs.x,Ps.z,0,-Ps.x,ia.z,0,-ia.x,-Cs.y,Cs.x,0,-Ps.y,Ps.x,0,-ia.y,ia.x,0];return!of(t,Qa,eo,to,Sc)||(t=[1,0,0,0,1,0,0,0,1],!of(t,Qa,eo,to,Sc))?!1:(yc.crossVectors(Cs,Ps),t=[yc.x,yc.y,yc.z],of(t,Qa,eo,to,Sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const is=[new te,new te,new te,new te,new te,new te,new te,new te],_r=new te,xc=new pl,Qa=new te,eo=new te,to=new te,Cs=new te,Ps=new te,ia=new te,Zo=new te,Sc=new te,yc=new te,ra=new te;function of(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){ra.fromArray(r,l);const f=o.x*Math.abs(ra.x)+o.y*Math.abs(ra.y)+o.z*Math.abs(ra.z),m=e.dot(ra),p=t.dot(ra),S=s.dot(ra);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>f)return!1}return!0}const In=new te,Mc=new Wt;let Mx=0;class yr extends va{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=nx,this.updateRanges=[],this.gpuType=Or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Yo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ii(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ii(t,this.array),s=Ii(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Ii(t,this.array),s=Ii(s,this.array),o=Ii(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Ii(t,this.array),s=Ii(s,this.array),o=Ii(o,this.array),l=Ii(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ng extends yr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Ig extends yr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class fn extends yr{constructor(e,t,s){super(new Float32Array(e),t,s)}}const Ex=new pl,Jo=new te,lf=new te;class ml{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Ex.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Jo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(lf)),this.expandByPoint(Jo.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wx=0;const nr=new yn,cf=new jn,no=new te,Xi=new pl,Qo=new pl,qn=new te;class Fn extends va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?Ig:Ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Rt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nr.makeRotationFromQuaternion(e),this.applyMatrix4(nr),this}rotateX(e){return nr.makeRotationX(e),this.applyMatrix4(nr),this}rotateY(e){return nr.makeRotationY(e),this.applyMatrix4(nr),this}rotateZ(e){return nr.makeRotationZ(e),this.applyMatrix4(nr),this}translate(e,t,s){return nr.makeTranslation(e,t,s),this.applyMatrix4(nr),this}scale(e,t,s){return nr.makeScale(e,t,s),this.applyMatrix4(nr),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new fn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Xi.setFromBufferAttribute(l),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Xi.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Xi.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Xi.min),this.boundingBox.expandByPoint(Xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(Xi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Qo.setFromBufferAttribute(f),this.morphTargetsRelative?(qn.addVectors(Xi.min,Qo.min),Xi.expandByPoint(qn),qn.addVectors(Xi.max,Qo.max),Xi.expandByPoint(qn)):(Xi.expandByPoint(Qo.min),Xi.expandByPoint(Qo.max))}Xi.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)qn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(qn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,S=f.count;p<S;p++)qn.fromBufferAttribute(f,p),m&&(no.fromBufferAttribute(e,p),qn.add(no)),o=Math.max(o,s.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new yr(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let w=0;w<s.count;w++)f[w]=new te,m[w]=new te;const p=new te,S=new te,y=new te,_=new Wt,M=new Wt,E=new Wt,b=new te,x=new te;function v(w,L,V){p.fromBufferAttribute(s,w),S.fromBufferAttribute(s,L),y.fromBufferAttribute(s,V),_.fromBufferAttribute(l,w),M.fromBufferAttribute(l,L),E.fromBufferAttribute(l,V),S.sub(p),y.sub(p),M.sub(_),E.sub(_);const W=1/(M.x*E.y-E.x*M.y);isFinite(W)&&(b.copy(S).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(W),x.copy(y).multiplyScalar(M.x).addScaledVector(S,-E.x).multiplyScalar(W),f[w].add(b),f[L].add(b),f[V].add(b),m[w].add(x),m[L].add(x),m[V].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,L=R.length;w<L;++w){const V=R[w],W=V.start,G=V.count;for(let ne=W,j=W+G;ne<j;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const U=new te,A=new te,I=new te,N=new te;function O(w){I.fromBufferAttribute(o,w),N.copy(I);const L=f[w];U.copy(L),U.sub(I.multiplyScalar(I.dot(L))).normalize(),A.crossVectors(N,L);const W=A.dot(m[w])<0?-1:1;u.setXYZW(w,U.x,U.y,U.z,W)}for(let w=0,L=R.length;w<L;++w){const V=R[w],W=V.start,G=V.count;for(let ne=W,j=W+G;ne<j;ne+=3)O(e.getX(ne+0)),O(e.getX(ne+1)),O(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new yr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const o=new te,l=new te,u=new te,f=new te,m=new te,p=new te,S=new te,y=new te;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),b=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,x),S.subVectors(u,l),y.subVectors(o,l),S.cross(y),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,x),f.add(S),m.add(S),p.add(S),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),S.subVectors(u,l),y.subVectors(o,l),S.cross(y),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)qn.fromBufferAttribute(e,t),qn.normalize(),e.setXYZ(t,qn.x,qn.y,qn.z)}toNonIndexed(){function e(f,m){const p=f.array,S=f.itemSize,y=f.normalized,_=new p.constructor(m.length*S);let M=0,E=0;for(let b=0,x=m.length;b<x;b++){f.isInterleavedBufferAttribute?M=m[b]*f.data.stride+f.offset:M=m[b]*S;for(let v=0;v<S;v++)_[E++]=p[M++]}return new yr(_,S,y)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,s=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let S=0,y=p.length;S<y;S++){const _=p[S],M=e(_,s);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let y=0,_=p.length;y<_;y++){const M=p[y];S.push(M.toJSON(e.data))}S.length>0&&(o[m]=S,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const S=o[p];this.setAttribute(p,S.clone(t))}const l=e.morphAttributes;for(const p in l){const S=[],y=l[p];for(let _=0,M=y.length;_<M;_++)S.push(y[_].clone(t));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,S=u.length;p<S;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uf=new te,Tx=new te,Ax=new Rt;class Ns{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=uf.subVectors(s,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(uf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ax.getNormalMatrix(e),o=this.coplanarPoint(uf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bx=0;class _a extends va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=al,this.side=fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dg,this.blendDst=fg,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wd,this.stencilZFail=Wd,this.stencilZPass=Wd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Ns().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Wt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rs=new te,df=new te,Ec=new te,wc=new te;class Th{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){df.copy(e).add(t).multiplyScalar(.5),Ec.copy(t).sub(e).normalize(),wc.copy(this.origin).sub(df);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ec),f=wc.dot(this.direction),m=-wc.dot(Ec),p=wc.lengthSq(),S=Math.abs(1-u*u);let y,_,M,E;if(S>0)if(y=u*m-f,_=u*f-m,E=l*S,y>=0)if(_>=-E)if(_<=E){const b=1/S;y*=b,_*=b,M=y*(y+u*_+2*f)+_*(u*y+_+2*m)+p}else _=l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;else _=-l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;else _<=-E?(y=Math.max(0,-(-u*l+f)),_=y>0?-l:Math.min(Math.max(-l,-m),l),M=-y*y+_*(_+2*m)+p):_<=E?(y=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(y=Math.max(0,-(u*l+f)),_=y>0?l:Math.min(Math.max(-l,-m),l),M=-y*y+_*(_+2*m)+p);else _=u>0?-l:l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(df).addScaledVector(Ec,_),M}intersectSphere(e,t){if(e.radius<0)return null;rs.subVectors(e.center,this.origin);const s=rs.dot(this.direction),o=rs.dot(rs)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,m=s+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,m;const p=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),S>=0?(l=(e.min.y-_.y)*S,u=(e.max.y-_.y)*S):(l=(e.max.y-_.y)*S,u=(e.min.y-_.y)*S),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-_.z)*y,m=(e.max.z-_.z)*y):(f=(e.max.z-_.z)*y,m=(e.min.z-_.z)*y),s>m||f>o)||((f>s||s!==s)&&(s=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,s,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,S=f.z,y=e.x-u.x,_=e.y-u.y,M=e.z-u.z,E=t.x-u.x,b=t.y-u.y,x=t.z-u.z,v=s.x-u.x,R=s.y-u.y,U=s.z-u.z,A=Math.abs(m),I=Math.abs(p),N=Math.abs(S);let O,w,L,V,W,G,ne,j,ie,he,oe,J;if(A>=I&&A>=N?(L=m,G=y,ie=E,J=v,m>=0?(O=p,w=S,V=_,W=M,ne=b,j=x,he=R,oe=U):(O=S,w=p,V=M,W=_,ne=x,j=b,he=U,oe=R)):I>=N?(L=p,G=_,ie=b,J=R,p>=0?(O=S,w=m,V=M,W=y,ne=x,j=E,he=U,oe=v):(O=m,w=S,V=y,W=M,ne=E,j=x,he=v,oe=U)):(L=S,G=M,ie=x,J=U,S>=0?(O=m,w=p,V=y,W=_,ne=E,j=b,he=v,oe=R):(O=p,w=m,V=_,W=y,ne=b,j=E,he=R,oe=v)),L===0)return null;const Z=O/L,ee=w/L,F=1/L,re=V-Z*G,we=W-ee*G,Ye=ne-Z*ie,Xe=j-ee*ie,Ze=he-Z*J,ce=oe-ee*J,me=Ze*Xe-ce*Ye,Re=re*ce-we*Ze,tt=Ye*we-Xe*re;if(o){if(me<0||Re<0||tt<0)return null}else if((me<0||Re<0||tt<0)&&(me>0||Re>0||tt>0))return null;const He=me+Re+tt;if(He===0)return null;const gt=F*(me*G+Re*ie+tt*J);return(He>0?gt<0:gt>0)?null:this.at(gt/He,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const S0=new yn,sa=new Th,Tc=new ml,y0=new te,Ac=new te,bc=new te,Rc=new te,ff=new te,Cc=new te,M0=new te,Pc=new te;class xe extends jn{constructor(e=new Fn,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Cc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const S=f[m],y=l[m];S!==0&&(ff.fromBufferAttribute(y,e),u?Cc.addScaledVector(ff,S):Cc.addScaledVector(ff.sub(t),S))}t.add(Cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),sa.copy(e.ray).recast(e.near),!(Tc.containsPoint(sa.origin)===!1&&(sa.intersectSphere(Tc,y0)===null||sa.origin.distanceToSquared(y0)>(e.far-e.near)**2))&&(S0.copy(l).invert(),sa.copy(e.ray).applyMatrix4(S0),!(s.boundingBox!==null&&sa.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,sa)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,S=l.attributes.uv1,y=l.attributes.normal,_=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const x=_[E],v=u[x.materialIndex],R=Math.max(x.start,M.start),U=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let A=R,I=U;A<I;A+=3){const N=f.getX(A),O=f.getX(A+1),w=f.getX(A+2);o=Lc(this,v,e,s,p,S,y,N,O,w),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let x=E,v=b;x<v;x+=3){const R=f.getX(x),U=f.getX(x+1),A=f.getX(x+2);o=Lc(this,u,e,s,p,S,y,R,U,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const x=_[E],v=u[x.materialIndex],R=Math.max(x.start,M.start),U=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let A=R,I=U;A<I;A+=3){const N=A,O=A+1,w=A+2;o=Lc(this,v,e,s,p,S,y,N,O,w),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let x=E,v=b;x<v;x+=3){const R=x,U=x+1,A=x+2;o=Lc(this,u,e,s,p,S,y,R,U,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Rx(r,e,t,s,o,l,u,f){let m;if(e.side===Oi?m=s.intersectTriangle(u,l,o,!0,f):m=s.intersectTriangle(o,l,u,e.side===fa,f),m===null)return null;Pc.copy(f),Pc.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Pc);return p<t.near||p>t.far?null:{distance:p,point:Pc.clone(),object:r}}function Lc(r,e,t,s,o,l,u,f,m,p){r.getVertexPosition(f,Ac),r.getVertexPosition(m,bc),r.getVertexPosition(p,Rc);const S=Rx(r,e,t,s,Ac,bc,Rc,M0);if(S){const y=new te;rr.getBarycoord(M0,Ac,bc,Rc,y),o&&(S.uv=rr.getInterpolatedAttribute(o,f,m,p,y,new Wt)),l&&(S.uv1=rr.getInterpolatedAttribute(l,f,m,p,y,new Wt)),u&&(S.normal=rr.getInterpolatedAttribute(u,f,m,p,y,new te),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new te,materialIndex:0};rr.getNormal(Ac,bc,Rc,_.normal),S.face=_,S.barycoord=y}return S}class Cx extends pi{constructor(e=null,t=1,s=1,o,l,u,f,m,p=ei,S=ei,y,_){super(null,u,f,m,p,S,o,l,y,_),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const aa=new ml,Px=new Wt(.5,.5),Nc=new te;class Ah{constructor(e=new Ns,t=new Ns,s=new Ns,o=new Ns,l=new Ns,u=new Ns){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Fr,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],S=l[4],y=l[5],_=l[6],M=l[7],E=l[8],b=l[9],x=l[10],v=l[11],R=l[12],U=l[13],A=l[14],I=l[15];if(o[0].setComponents(p-u,M-S,v-E,I-R).normalize(),o[1].setComponents(p+u,M+S,v+E,I+R).normalize(),o[2].setComponents(p+f,M+y,v+b,I+U).normalize(),o[3].setComponents(p-f,M-y,v-b,I-U).normalize(),s)o[4].setComponents(m,_,x,A).normalize(),o[5].setComponents(p-m,M-_,v-x,I-A).normalize();else if(o[4].setComponents(p-m,M-_,v-x,I-A).normalize(),t===Fr)o[5].setComponents(p+m,M+_,v+x,I+A).normalize();else if(t===dl)o[5].setComponents(m,_,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),aa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),aa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(aa)}intersectsSprite(e){aa.center.set(0,0,0);const t=Px.distanceTo(e.center);return aa.radius=.7071067811865476+t,aa.applyMatrix4(e.matrixWorld),this.intersectsSphere(aa)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Nc.x=o.normal.x>0?e.max.x:e.min.x,Nc.y=o.normal.y>0?e.max.y:e.min.y,Nc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Is extends _a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new te,su=new te,E0=new yn,el=new Th,Ic=new ml,hf=new te,w0=new te;class Dg extends jn{constructor(e=new Fn,t=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)ru.fromBufferAttribute(t,o-1),su.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=ru.distanceTo(su);e.setAttribute("lineDistance",new fn(s,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(o),Ic.radius+=l,e.ray.intersectsSphere(Ic)===!1)return;E0.copy(o).invert(),el.copy(e.ray).applyMatrix4(E0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,S=s.index,_=s.attributes.position;if(S!==null){const M=Math.max(0,u.start),E=Math.min(S.count,u.start+u.count);for(let b=M,x=E-1;b<x;b+=p){const v=S.getX(b),R=S.getX(b+1),U=Dc(this,e,el,m,v,R,b);U&&t.push(U)}if(this.isLineLoop){const b=S.getX(E-1),x=S.getX(M),v=Dc(this,e,el,m,b,x,E-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let b=M,x=E-1;b<x;b+=p){const v=Dc(this,e,el,m,b,b+1,b);v&&t.push(v)}if(this.isLineLoop){const b=Dc(this,e,el,m,E-1,M,E-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Dc(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(ru.fromBufferAttribute(f,o),su.fromBufferAttribute(f,l),t.distanceSqToSegment(ru,su,hf,w0)>s)return;hf.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(hf);if(!(p<e.near||p>e.far))return{distance:p,point:w0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const T0=new te,A0=new te;class io extends Dg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)T0.fromBufferAttribute(t,o),A0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+T0.distanceTo(A0);e.setAttribute("lineDistance",new fn(s,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ug extends _a{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const b0=new yn,ch=new Th,Uc=new ml,Oc=new te;class Lx extends jn{constructor(e=new Fn,t=new Ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(o),Uc.radius+=l,e.ray.intersectsSphere(Uc)===!1)return;b0.copy(o).invert(),ch.copy(e.ray).applyMatrix4(b0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=s.index,y=s.attributes.position;if(p!==null){const _=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=_,b=M;E<b;E++){const x=p.getX(E);Oc.fromBufferAttribute(y,x),R0(Oc,x,m,o,e,t,this)}}else{const _=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let E=_,b=M;E<b;E++)Oc.fromBufferAttribute(y,E),R0(Oc,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function R0(r,e,t,s,o,l,u){const f=ch.distanceSqToPoint(r);if(f<t){const m=new te;ch.closestPointToPoint(r,m),m.applyMatrix4(s);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Og extends pi{constructor(e=[],t=ha,s,o,l,u,f,m,p,S){super(e,t,s,o,l,u,f,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends pi{constructor(e,t,s,o,l,u,f,m,p){super(e,t,s,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends pi{constructor(e,t,s=Br,o,l,u,f=ei,m=ei,p,S=cs,y=1){if(S!==cs&&S!==da)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:y};super(_,o,l,u,f,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Nx extends fl{constructor(e,t=Br,s=ha,o,l,u=ei,f=ei,m,p=cs){const S={width:e,height:e,depth:1},y=[S,S,S,S,S,S];super(e,e,t,s,o,l,u,f,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fg extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lt extends Fn{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],S=[],y=[];let _=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(S,3)),this.setAttribute("uv",new fn(y,2));function E(b,x,v,R,U,A,I,N,O,w,L){const V=A/O,W=I/w,G=A/2,ne=I/2,j=N/2,ie=O+1,he=w+1;let oe=0,J=0;const Z=new te;for(let ee=0;ee<he;ee++){const F=ee*W-ne;for(let re=0;re<ie;re++){const we=re*V-G;Z[b]=we*R,Z[x]=F*U,Z[v]=j,p.push(Z.x,Z.y,Z.z),Z[b]=0,Z[x]=0,Z[v]=N>0?1:-1,S.push(Z.x,Z.y,Z.z),y.push(re/O),y.push(1-ee/w),oe+=1}}for(let ee=0;ee<w;ee++)for(let F=0;F<O;F++){const re=_+F+ie*ee,we=_+F+ie*(ee+1),Ye=_+(F+1)+ie*(ee+1),Xe=_+(F+1)+ie*ee;m.push(re,we,Xe),m.push(we,Ye,Xe),J+=6}f.addGroup(M,J,L),M+=J,_+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ca extends Fn{constructor(e=1,t=1,s=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:s,radialSegments:o,heightSegments:l},t=Math.max(0,t),s=Math.max(1,Math.floor(s)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],S=t/2,y=Math.PI/2*e,_=t,M=2*y+_,E=s*2+l,b=o+1,x=new te,v=new te;for(let R=0;R<=E;R++){let U=0,A=0,I=0,N=0;if(R<=s){const L=R/s,V=L*Math.PI/2;A=-S-e*Math.cos(V),I=e*Math.sin(V),N=-e*Math.cos(V),U=L*y}else if(R<=s+l){const L=(R-s)/l;A=-S+L*t,I=e,N=0,U=y+L*_}else{const L=(R-s-l)/s,V=L*Math.PI/2;A=S+e*Math.sin(V),I=e*Math.cos(V),N=e*Math.sin(V),U=y+_+L*y}const O=Math.max(0,Math.min(1,U/M));let w=0;R===0?w=.5/o:R===E&&(w=-.5/o);for(let L=0;L<=o;L++){const V=L/o,W=V*Math.PI*2,G=Math.sin(W),ne=Math.cos(W);v.x=-I*ne,v.y=A,v.z=I*G,f.push(v.x,v.y,v.z),x.set(-I*ne,N,I*G),x.normalize(),m.push(x.x,x.y,x.z),p.push(V+w,O)}if(R>0){const L=(R-1)*b;for(let V=0;V<o;V++){const W=L+V,G=L+V+1,ne=R*b+V,j=R*b+V+1;u.push(W,G,ne),u.push(G,j,ne)}}}this.setIndex(u),this.setAttribute("position",new fn(f,3)),this.setAttribute("normal",new fn(m,3)),this.setAttribute("uv",new fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ln extends Fn{constructor(e=1,t=1,s=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const S=[],y=[],_=[],M=[];let E=0;const b=[],x=s/2;let v=0;R(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(S),this.setAttribute("position",new fn(y,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(M,2));function R(){const A=new te,I=new te;let N=0;const O=(t-e)/s;for(let w=0;w<=l;w++){const L=[],V=w/l,W=V*(t-e)+e;for(let G=0;G<=o;G++){const ne=G/o,j=ne*m+f,ie=Math.sin(j),he=Math.cos(j);I.x=W*ie,I.y=-V*s+x,I.z=W*he,y.push(I.x,I.y,I.z),A.set(ie,O,he).normalize(),_.push(A.x,A.y,A.z),M.push(ne,1-V),L.push(E++)}b.push(L)}for(let w=0;w<o;w++)for(let L=0;L<l;L++){const V=b[L][w],W=b[L+1][w],G=b[L+1][w+1],ne=b[L][w+1];(e>0||L!==0)&&(S.push(V,W,ne),N+=3),(t>0||L!==l-1)&&(S.push(W,G,ne),N+=3)}p.addGroup(v,N,0),v+=N}function U(A){const I=E,N=new Wt,O=new te;let w=0;const L=A===!0?e:t,V=A===!0?1:-1;for(let G=1;G<=o;G++)y.push(0,x*V,0),_.push(0,V,0),M.push(.5,.5),E++;const W=E;for(let G=0;G<=o;G++){const j=G/o*m+f,ie=Math.cos(j),he=Math.sin(j);O.x=L*he,O.y=x*V,O.z=L*ie,y.push(O.x,O.y,O.z),_.push(0,V,0),N.x=ie*.5+.5,N.y=he*.5*V+.5,M.push(N.x,N.y),E++}for(let G=0;G<o;G++){const ne=I+G,j=W+G;A===!0?S.push(j,j+1,ne):S.push(j+1,j,ne),w+=3}p.addGroup(v,w,A===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yi extends ln{constructor(e=1,t=1,s=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,s,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new yi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bh extends Fn{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),S(),this.setAttribute("position",new fn(l,3)),this.setAttribute("normal",new fn(l.slice(),3)),this.setAttribute("uv",new fn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const U=new te,A=new te,I=new te;for(let N=0;N<t.length;N+=3)M(t[N+0],U),M(t[N+1],A),M(t[N+2],I),m(U,A,I,R)}function m(R,U,A,I){const N=I+1,O=[];for(let w=0;w<=N;w++){O[w]=[];const L=R.clone().lerp(A,w/N),V=U.clone().lerp(A,w/N),W=N-w;for(let G=0;G<=W;G++)G===0&&w===N?O[w][G]=L:O[w][G]=L.clone().lerp(V,G/W)}for(let w=0;w<N;w++)for(let L=0;L<2*(N-w)-1;L++){const V=Math.floor(L/2);L%2===0?(_(O[w][V+1]),_(O[w+1][V]),_(O[w][V])):(_(O[w][V+1]),_(O[w+1][V+1]),_(O[w+1][V]))}}function p(R){const U=new te;for(let A=0;A<l.length;A+=3)U.x=l[A+0],U.y=l[A+1],U.z=l[A+2],U.normalize().multiplyScalar(R),l[A+0]=U.x,l[A+1]=U.y,l[A+2]=U.z}function S(){const R=new te;for(let U=0;U<l.length;U+=3){R.x=l[U+0],R.y=l[U+1],R.z=l[U+2];const A=x(R)/2/Math.PI+.5,I=v(R)/Math.PI+.5;u.push(A,1-I)}E(),y()}function y(){for(let R=0;R<u.length;R+=6){const U=u[R+0],A=u[R+2],I=u[R+4],N=Math.max(U,A,I),O=Math.min(U,A,I);N>.9&&O<.1&&(U<.2&&(u[R+0]+=1),A<.2&&(u[R+2]+=1),I<.2&&(u[R+4]+=1))}}function _(R){l.push(R.x,R.y,R.z)}function M(R,U){const A=R*3;U.x=e[A+0],U.y=e[A+1],U.z=e[A+2]}function E(){const R=new te,U=new te,A=new te,I=new te,N=new Wt,O=new Wt,w=new Wt;for(let L=0,V=0;L<l.length;L+=9,V+=6){R.set(l[L+0],l[L+1],l[L+2]),U.set(l[L+3],l[L+4],l[L+5]),A.set(l[L+6],l[L+7],l[L+8]),N.set(u[V+0],u[V+1]),O.set(u[V+2],u[V+3]),w.set(u[V+4],u[V+5]),I.copy(R).add(U).add(A).divideScalar(3);const W=x(I);b(N,V+0,R,W),b(O,V+2,U,W),b(w,V+4,A,W)}}function b(R,U,A,I){I<0&&R.x===1&&(u[U]=R.x-1),A.x===0&&A.z===0&&(u[U]=I/2/Math.PI+.5)}function x(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.vertices,e.indices,e.radius,e.detail)}}const Fc=new te,kc=new te,pf=new te,Bc=new rr;class ro extends Fn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Zc*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,p=[0,0,0],S=["a","b","c"],y=new Array(3),_={},M=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:x,c:v}=Bc;if(b.fromBufferAttribute(f,p[0]),x.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),Bc.getNormal(pf),y[0]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,y[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,y[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let R=0;R<3;R++){const U=(R+1)%3,A=y[R],I=y[U],N=Bc[S[R]],O=Bc[S[U]],w=`${A}_${I}`,L=`${I}_${A}`;L in _&&_[L]?(pf.dot(_[L].normal)<=l&&(M.push(N.x,N.y,N.z),M.push(O.x,O.y,O.z)),_[L]=null):w in _||(_[w]={index0:p[R],index1:p[U],normal:pf.clone()})}}for(const E in _)if(_[E]){const{index0:b,index1:x}=_[E];Fc.fromBufferAttribute(f,b),kc.fromBufferAttribute(f,x),M.push(Fc.x,Fc.y,Fc.z),M.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new fn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rh extends bh{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rh(e.radius,e.detail)}}class ga extends Fn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),m=Math.floor(o),p=f+1,S=m+1,y=e/f,_=t/m,M=[],E=[],b=[],x=[];for(let v=0;v<S;v++){const R=v*_-u;for(let U=0;U<p;U++){const A=U*y-l;E.push(A,-R,0),b.push(0,0,1),x.push(U/f),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let R=0;R<f;R++){const U=R+p*v,A=R+p*(v+1),I=R+1+p*(v+1),N=R+1+p*v;M.push(U,A,N),M.push(A,I,N)}this.setIndex(M),this.setAttribute("position",new fn(E,3)),this.setAttribute("normal",new fn(b,3)),this.setAttribute("uv",new fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qn extends Fn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const m=Math.min(u+f,Math.PI);let p=0;const S=[],y=new te,_=new te,M=[],E=[],b=[],x=[];for(let v=0;v<=s;v++){const R=[],U=v/s,A=u+U*f,I=e*Math.cos(A),N=Math.sqrt(e*e-I*I);let O=0;v===0&&u===0?O=.5/t:v===s&&m===Math.PI&&(O=-.5/t);for(let w=0;w<=t;w++){const L=w/t,V=o+L*l;y.x=-N*Math.cos(V),y.y=I,y.z=N*Math.sin(V),E.push(y.x,y.y,y.z),_.copy(y).normalize(),b.push(_.x,_.y,_.z),x.push(L+O,1-U),R.push(p++)}S.push(R)}for(let v=0;v<s;v++)for(let R=0;R<t;R++){const U=S[v][R+1],A=S[v][R],I=S[v+1][R],N=S[v+1][R+1];(v!==0||u>0)&&M.push(U,A,N),(v!==s-1||m<Math.PI)&&M.push(A,I,N)}this.setIndex(M),this.setAttribute("position",new fn(E,3)),this.setAttribute("normal",new fn(b,3)),this.setAttribute("uv",new fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jn extends Fn{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const m=[],p=[],S=[],y=[],_=new te,M=new te,E=new te;for(let b=0;b<=s;b++){const x=u+b/s*f;for(let v=0;v<=o;v++){const R=v/o*l;M.x=(e+t*Math.cos(x))*Math.cos(R),M.y=(e+t*Math.cos(x))*Math.sin(R),M.z=t*Math.sin(x),p.push(M.x,M.y,M.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),E.subVectors(M,_).normalize(),S.push(E.x,E.y,E.z),y.push(v/o),y.push(b/s)}}for(let b=1;b<=s;b++)for(let x=1;x<=o;x++){const v=(o+1)*b+x-1,R=(o+1)*(b-1)+x-1,U=(o+1)*(b-1)+x,A=(o+1)*b+x;m.push(v,R,A),m.push(R,U,A)}this.setIndex(m),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(S,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function mo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(C0(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(C0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Si(r){const e={};for(let t=0;t<r.length;t++){const s=mo(r[t]);for(const o in s)e[o]=s[o]}return e}function C0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ix(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}const Dx={clone:mo,merge:Si};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new Ht().setHex(o.value);break;case"v2":this.uniforms[s].value=new Wt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new te().fromArray(o.value);break;case"v4":this.uniforms[s].value=new An().fromArray(o.value);break;case"m3":this.uniforms[s].value=new Rt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new yn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fx extends Mr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mf extends _a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kx extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ch extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const gf=new yn,P0=new te,L0=new te;class Bg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=ji,this.map=null,this.mapPass=null,this.matrix=new yn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;P0.setFromMatrixPosition(e.matrixWorld),t.position.copy(P0),L0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(L0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){gf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(gf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===dl||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zc=new te,Vc=new go,Nr=new te;class zg extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=Fr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Vc,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Vc,Nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(zc,Vc,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Vc,Nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new te,N0=new Wt,I0=new Wt;class qi extends zg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z)}getViewSize(e,t){return this.getViewBounds(e,N0,I0),t.subVectors(I0,N0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zc*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*s/p,o*=u.width/m,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zx extends Bg{constructor(){super(new qi(90,1,.5,500)),this.isPointLightShadow=!0}}class D0 extends Ch{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ph extends zg{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=S*this.view.offsetY,m=f-S*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vx extends Bg{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hx extends Ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.shadow=new Vx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gx extends Ch{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const so=-90,ao=1;class Wx extends jn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qi(so,ao,e,t);o.layers=this.layers,this.add(o);const l=new qi(so,ao,e,t);l.layers=this.layers,this.add(l);const u=new qi(so,ao,e,t);u.layers=this.layers,this.add(u);const f=new qi(so,ao,e,t);f.layers=this.layers,this.add(f);const m=new qi(so,ao,e,t);m.layers=this.layers,this.add(m);const p=new qi(so,ao,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===Fr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===dl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,S]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,S),e.setRenderTarget(y,_,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Xx extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uh=class Uh{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Uh.prototype.isMatrix2=!0;let U0=Uh;function O0(r,e,t,s){const o=qx(s);switch(t){case Tg:return r*e;case bg:return r*e/o.components*o.byteLength;case _h:return r*e/o.components*o.byteLength;case ma:return r*e*2/o.components*o.byteLength;case xh:return r*e*2/o.components*o.byteLength;case Ag:return r*e*3/o.components*o.byteLength;case xr:return r*e*4/o.components*o.byteLength;case Sh:return r*e*4/o.components*o.byteLength;case jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nf:case Df:return Math.max(r,16)*Math.max(e,8)/4;case Lf:case If:return Math.max(r,8)*Math.max(e,8)/2;case Uf:case Of:case kf:case Bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ff:case Qc:case zf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case eu:case ah:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(r){switch(r){case ji:case yg:return{byteLength:1,components:1};case cl:case Mg:case zr:return{byteLength:2,components:1};case gh:case vh:return{byteLength:2,components:4};case Br:case mh:case Or:return{byteLength:4,components:1};case Eg:case wg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vg(){let r=null,e=!1,t=null,s=null;function o(l,u){s=r.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function jx(r){const e=new WeakMap;function t(f,m){const p=f.array,S=f.usage,y=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,S),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,m,p){const S=m.array,y=m.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,S);else{y.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<y.length;M++){const E=y[_],b=y[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,y[_]=b)}y.length=_+1;for(let M=0,E=y.length;M<E;M++){const b=y[M];r.bufferSubData(p,b.start*S.BYTES_PER_ELEMENT,S,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(r.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const S=e.get(f);(!S||S.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var $x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eS=`#ifdef USE_AOMAP
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
#endif`,tS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nS=`#ifdef USE_BATCHING
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
#endif`,iS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oS=`#ifdef USE_IRIDESCENCE
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
#endif`,lS=`#ifdef USE_BUMPMAP
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
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vS=`#define PI 3.141592653589793
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
} // validated`,_S=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xS=`vec3 transformedNormal = objectNormal;
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
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wS="gl_FragColor = linearToOutputTexel( gl_FragColor );",TS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,US=`#ifdef USE_GRADIENTMAP
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
}`,OS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zS=`#ifdef USE_ENVMAP
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
#endif`,VS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XS=`PhysicalMaterial material;
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
#endif`,qS=`uniform sampler2D dfgLUT;
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
}`,jS=`
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
#endif`,$S=`#if defined( RE_IndirectDiffuse )
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
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
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
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,My=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,dM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,hM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,vM=`#define PHONG
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
}`,_M=`#define STANDARD
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
}`,xM=`#define STANDARD
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
}`,SM=`#define TOON
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
}`,yM=`#define TOON
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
}`,MM=`uniform float size;
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
}`,EM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:$x,alphahash_pars_fragment:Yx,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:eS,aomap_pars_fragment:tS,batching_pars_vertex:nS,batching_vertex:iS,begin_vertex:rS,beginnormal_vertex:sS,bsdfs:aS,iridescence_fragment:oS,bumpmap_pars_fragment:lS,clipping_planes_fragment:cS,clipping_planes_pars_fragment:uS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:fS,color_fragment:hS,color_pars_fragment:pS,color_pars_vertex:mS,color_vertex:gS,common:vS,cube_uv_reflection_fragment:_S,defaultnormal_vertex:xS,displacementmap_pars_vertex:SS,displacementmap_vertex:yS,emissivemap_fragment:MS,emissivemap_pars_fragment:ES,colorspace_fragment:wS,colorspace_pars_fragment:TS,envmap_fragment:AS,envmap_common_pars_fragment:bS,envmap_pars_fragment:RS,envmap_pars_vertex:CS,envmap_physical_pars_fragment:zS,envmap_vertex:PS,fog_vertex:LS,fog_pars_vertex:NS,fog_fragment:IS,fog_pars_fragment:DS,gradientmap_pars_fragment:US,lightmap_pars_fragment:OS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:kS,lights_pars_begin:BS,lights_toon_fragment:VS,lights_toon_pars_fragment:HS,lights_phong_fragment:GS,lights_phong_pars_fragment:WS,lights_physical_fragment:XS,lights_physical_pars_fragment:qS,lights_fragment_begin:jS,lights_fragment_maps:$S,lights_fragment_end:YS,lightprobes_pars_fragment:KS,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:JS,logdepthbuf_pars_vertex:QS,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:ry,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ay,morphinstance_vertex:oy,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:uy,morphtarget_vertex:dy,normal_fragment_begin:fy,normal_fragment_maps:hy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:xy,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:yy,opaque_fragment:My,packing:Ey,premultiplied_alpha_fragment:wy,project_vertex:Ty,dithering_fragment:Ay,dithering_pars_fragment:by,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Py,shadowmap_pars_vertex:Ly,shadowmap_vertex:Ny,shadowmask_pars_fragment:Iy,skinbase_vertex:Dy,skinning_pars_vertex:Uy,skinning_vertex:Oy,skinnormal_vertex:Fy,specularmap_fragment:ky,specularmap_pars_fragment:By,tonemapping_fragment:zy,tonemapping_pars_fragment:Vy,transmission_fragment:Hy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:jy,background_vert:$y,background_frag:Yy,backgroundCube_vert:Ky,backgroundCube_frag:Zy,cube_vert:Jy,cube_frag:Qy,depth_vert:eM,depth_frag:tM,distance_vert:nM,distance_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:aM,linedashed_frag:oM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:dM,meshmatcap_vert:fM,meshmatcap_frag:hM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:vM,meshphysical_vert:_M,meshphysical_frag:xM,meshtoon_vert:SM,meshtoon_frag:yM,points_vert:MM,points_frag:EM,shadow_vert:wM,shadow_frag:TM,sprite_vert:AM,sprite_frag:bM},qe={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Ur={basic:{uniforms:Si([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Si([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Si([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Si([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Si([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Si([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Si([qe.points,qe.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Si([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Si([qe.common,qe.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Si([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Si([qe.sprite,qe.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Si([qe.common,qe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Si([qe.lights,qe.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ur.physical={uniforms:Si([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Hc={r:0,b:0,g:0},RM=new yn,Hg=new Rt;Hg.set(-1,0,0,0,1,0,0,0,1);function CM(r,e,t,s,o,l){const u=new Ht(0);let f=o===!0?0:1,m,p,S=null,y=0,_=null;function M(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const A=R.backgroundBlurriness>0;U=e.get(U,A)}return U}function E(R){let U=!1;const A=M(R);A===null?x(u,f):A&&A.isColor&&(x(A,1),U=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(R,U){const A=M(U);A&&(A.isCubeTexture||A.mapping===ou)?(p===void 0&&(p=new xe(new Lt(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:mo(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(U.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Hg),p.material.toneMapped=Zt.getTransfer(A.colorSpace)!==cn,(S!==A||y!==A.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,S=A,y=A.version,_=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new xe(new ga(2,2),new Mr({name:"BackgroundMaterial",uniforms:mo(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Zt.getTransfer(A.colorSpace)!==cn,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(S!==A||y!==A.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,S=A,y=A.version,_=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function x(R,U){R.getRGB(Hc,kg(r)),t.buffers.color.setClear(Hc.r,Hc.g,Hc.b,U,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,U=1){u.set(R),f=U,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(u,f)},render:E,addToRenderList:b,dispose:v}}function PM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,u=!1;function f(W,G,ne,j,ie){let he=!1;const oe=y(W,j,ne,G);l!==oe&&(l=oe,p(l.object)),he=M(W,j,ne,ie),he&&E(W,j,ne,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,A(W,G,ne,j),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function m(){return r.createVertexArray()}function p(W){return r.bindVertexArray(W)}function S(W){return r.deleteVertexArray(W)}function y(W,G,ne,j){const ie=j.wireframe===!0;let he=s[G.id];he===void 0&&(he={},s[G.id]=he);const oe=W.isInstancedMesh===!0?W.id:0;let J=he[oe];J===void 0&&(J={},he[oe]=J);let Z=J[ne.id];Z===void 0&&(Z={},J[ne.id]=Z);let ee=Z[ie];return ee===void 0&&(ee=_(m()),Z[ie]=ee),ee}function _(W){const G=[],ne=[],j=[];for(let ie=0;ie<t;ie++)G[ie]=0,ne[ie]=0,j[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:j,object:W,attributes:{},index:null}}function M(W,G,ne,j){const ie=l.attributes,he=G.attributes;let oe=0;const J=ne.getAttributes();for(const Z in J)if(J[Z].location>=0){const F=ie[Z];let re=he[Z];if(re===void 0&&(Z==="instanceMatrix"&&W.instanceMatrix&&(re=W.instanceMatrix),Z==="instanceColor"&&W.instanceColor&&(re=W.instanceColor)),F===void 0||F.attribute!==re||re&&F.data!==re.data)return!0;oe++}return l.attributesNum!==oe||l.index!==j}function E(W,G,ne,j){const ie={},he=G.attributes;let oe=0;const J=ne.getAttributes();for(const Z in J)if(J[Z].location>=0){let F=he[Z];F===void 0&&(Z==="instanceMatrix"&&W.instanceMatrix&&(F=W.instanceMatrix),Z==="instanceColor"&&W.instanceColor&&(F=W.instanceColor));const re={};re.attribute=F,F&&F.data&&(re.data=F.data),ie[Z]=re,oe++}l.attributes=ie,l.attributesNum=oe,l.index=j}function b(){const W=l.newAttributes;for(let G=0,ne=W.length;G<ne;G++)W[G]=0}function x(W){v(W,0)}function v(W,G){const ne=l.newAttributes,j=l.enabledAttributes,ie=l.attributeDivisors;ne[W]=1,j[W]===0&&(r.enableVertexAttribArray(W),j[W]=1),ie[W]!==G&&(r.vertexAttribDivisor(W,G),ie[W]=G)}function R(){const W=l.newAttributes,G=l.enabledAttributes;for(let ne=0,j=G.length;ne<j;ne++)G[ne]!==W[ne]&&(r.disableVertexAttribArray(ne),G[ne]=0)}function U(W,G,ne,j,ie,he,oe){oe===!0?r.vertexAttribIPointer(W,G,ne,ie,he):r.vertexAttribPointer(W,G,ne,j,ie,he)}function A(W,G,ne,j){b();const ie=j.attributes,he=ne.getAttributes(),oe=G.defaultAttributeValues;for(const J in he){const Z=he[J];if(Z.location>=0){let ee=ie[J];if(ee===void 0&&(J==="instanceMatrix"&&W.instanceMatrix&&(ee=W.instanceMatrix),J==="instanceColor"&&W.instanceColor&&(ee=W.instanceColor)),ee!==void 0){const F=ee.normalized,re=ee.itemSize,we=e.get(ee);if(we===void 0)continue;const Ye=we.buffer,Xe=we.type,Ze=we.bytesPerElement,ce=Xe===r.INT||Xe===r.UNSIGNED_INT||ee.gpuType===mh;if(ee.isInterleavedBufferAttribute){const me=ee.data,Re=me.stride,tt=ee.offset;if(me.isInstancedInterleavedBuffer){for(let He=0;He<Z.locationSize;He++)v(Z.location+He,me.meshPerAttribute);W.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<Z.locationSize;He++)x(Z.location+He);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let He=0;He<Z.locationSize;He++)U(Z.location+He,re/Z.locationSize,Xe,F,Re*Ze,(tt+re/Z.locationSize*He)*Ze,ce)}else{if(ee.isInstancedBufferAttribute){for(let me=0;me<Z.locationSize;me++)v(Z.location+me,ee.meshPerAttribute);W.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<Z.locationSize;me++)x(Z.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let me=0;me<Z.locationSize;me++)U(Z.location+me,re/Z.locationSize,Xe,F,re*Ze,re/Z.locationSize*me*Ze,ce)}}else if(oe!==void 0){const F=oe[J];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(Z.location,F);break;case 3:r.vertexAttrib3fv(Z.location,F);break;case 4:r.vertexAttrib4fv(Z.location,F);break;default:r.vertexAttrib1fv(Z.location,F)}}}}R()}function I(){L();for(const W in s){const G=s[W];for(const ne in G){const j=G[ne];for(const ie in j){const he=j[ie];for(const oe in he)S(he[oe].object),delete he[oe];delete j[ie]}}delete s[W]}}function N(W){if(s[W.id]===void 0)return;const G=s[W.id];for(const ne in G){const j=G[ne];for(const ie in j){const he=j[ie];for(const oe in he)S(he[oe].object),delete he[oe];delete j[ie]}}delete s[W.id]}function O(W){for(const G in s){const ne=s[G];for(const j in ne){const ie=ne[j];if(ie[W.id]===void 0)continue;const he=ie[W.id];for(const oe in he)S(he[oe].object),delete he[oe];delete ie[W.id]}}}function w(W){for(const G in s){const ne=s[G],j=W.isInstancedMesh===!0?W.id:0,ie=ne[j];if(ie!==void 0){for(const he in ie){const oe=ie[he];for(const J in oe)S(oe[J].object),delete oe[J];delete ie[he]}delete ne[j],Object.keys(ne).length===0&&delete s[G]}}}function L(){V(),u=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:x,disableUnusedAttributes:R}}function LM(r,e,t){let s;function o(m){s=m}function l(m,p){r.drawArrays(s,m,p),t.update(p,s,1)}function u(m,p,S){S!==0&&(r.drawArraysInstanced(s,m,p,S),t.update(p,s,S))}function f(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let _=0;for(let M=0;M<S;M++)_+=p[M];t.update(_,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function NM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==xr&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ji&&O!==Or&&!w&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const S=m(p);S!==p&&(wt("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const y=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:A,maxSamples:I,samples:N}}function IM(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new Ns,f=new Rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const M=y.length!==0||_||s!==0||o;return o=_,s=y.length,M},this.beginShadows=function(){l=!0,S(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,_){t=S(y,_,0)},this.setState=function(y,_,M){const E=y.clippingPlanes,b=y.clipIntersection,x=y.clipShadows,v=r.get(y);if(!o||E===null||E.length===0||l&&!x)l?S(null):p();else{const R=l?0:s,U=R*4;let A=v.clippingState||null;m.value=A,A=S(E,_,U,M);for(let I=0;I!==U;++I)A[I]=t[I];v.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(y,_,M,E){const b=y!==null?y.length:0;let x=null;if(b!==0){if(x=m.value,E!==!0||x===null){const v=M+b*4,R=_.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<v)&&(x=new Float32Array(v));for(let U=0,A=M;U!==b;++U,A+=4)u.copy(y[U]).applyMatrix4(R,f),u.normal.toArray(x,A),x[A+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const uo=4,DM=6,UM=20,OM=256,tl=new Ph,F0=new Ht;let vf=null,_f=0,xf=0,Sf=!1;const FM=new te,oa=new te;class k0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=FM}=l;vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,_f,xf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:zr,format:xr,colorSpace:tu,depthBuffer:!1},o=B0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kM(l)),this._blurMaterial=zM(l,e,t),this._ggxMaterial=BM(l,e,t)}return o}_compileMaterial(e){const t=new xe(new Fn,e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,s,o,l){const m=new qi(90,1,t,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],y=this._renderer,_=y.autoClear,M=y.toneMapping;y.getClearColor(F0),y.toneMapping=kr,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Lt,new yt({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let v=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,v=!0):(x.color.copy(F0),v=!0);for(let U=0;U<6;U++){const A=U%3;A===0?(m.up.set(0,p[U],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+S[U],l.y,l.z)):A===1?(m.up.set(0,0,p[U]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+S[U],l.z)):(m.up.set(0,p[U],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+S[U]));const I=this._cubeSize;oo(o,A*I,U>2?I:0,I,I),y.setRenderTarget(o),v&&y.render(b,m),y.render(e,m)}y.toneMapping=M,y.autoClear=_,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ha||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;oo(t,0,0,3*m,2*m),s.setRenderTarget(t),s.render(u,tl)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),S=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-S*S),_=p*1.25,M=y*_,{_lodMax:E}=this,b=this._sizeLods[s],x=3*b*(s>E-uo?s-E+uo:0),v=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-t,oo(l,x,v,3*b,2*b),o.setRenderTarget(l),o.render(f,tl),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-s,oo(e,x,v,3*b,2*b),o.setRenderTarget(e),o.render(f,tl)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,u),this._blurPass(l,e,s,s,u)}_blurPass(e,t,s,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const S=this._sizeLods[o],y=3*S*(o>this._lodMax-uo?o-this._lodMax+uo:0),_=4*(this._cubeSize-S);oo(t,y,_,3*S,2*S),u.setRenderTarget(t),u.render(m,tl)}}function kM(r){const e=[],t=[];let s=r;const o=r-uo+1+DM;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);const f=1/(u-2),m=-f,p=1+f,S=[m,m,p,m,p,p,m,m,p,p,m,p],y=6,_=6,M=3,E=new Float32Array(M*_*y),b=new Float32Array(M*_*y);for(let v=0;v<y;v++){const R=v%3*2/3-1,U=v>2?0:-1,A=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(A,M*_*v);for(let I=0;I<_;I++){const N=S[I*2]*2-1,O=S[I*2+1]*2-1;v===0?oa.set(1,O,N):v===1?oa.set(-N,1,-O):v===2?oa.set(-N,O,1):v===3?oa.set(-1,O,-N):v===4?oa.set(-N,-1,O):oa.set(N,O,-1),oa.toArray(b,(v*_+I)*M)}}const x=new Fn;x.setAttribute("position",new yr(E,M)),x.setAttribute("outputDirection",new yr(b,M)),t.push(new xe(x,null)),s>uo&&s--}return{lodMeshes:t,sizeLods:e}}function B0(r,e,t){const s=new Sr(r,e,t);return s.texture.mapping=ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function oo(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function BM(r,e,t){return new Mr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function zM(r,e,t){return new Mr({name:"SphericalGaussianBlur",defines:{SAMPLES:UM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function z0(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function V0(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gg extends Sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Og(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Lt(5,5,5),l=new Mr({name:"CubemapFromEquirect",uniforms:mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Oi,blending:os});l.uniforms.tEquirect.value=t;const u=new xe(o,l),f=t.minFilter;return t.minFilter===ua&&(t.minFilter=hi),new Wx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function VM(r){let e=new WeakMap,t=new WeakMap,s=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Vd||M===Hd)if(e.has(_)){const E=e.get(_).texture;return f(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const b=new Gg(E.height);return b.fromEquirectangularTexture(r,_),e.set(_,b),_.addEventListener("dispose",p),f(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,E=M===Vd||M===Hd,b=M===ha||M===po;if(E||b){let x=t.get(_);const v=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new k0(r)),x=E?s.fromEquirectangular(_,x):s.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const R=_.image;return E&&R&&R.height>0||b&&R&&m(R)?(s===null&&(s=new k0(r)),x=E?s.fromEquirectangular(_):s.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",S),x.texture):null}}}return _}function f(_,M){return M===Vd?_.mapping=ha:M===Hd&&(_.mapping=po),_}function m(_){let M=0;const E=6;for(let b=0;b<E;b++)_[b]!==void 0&&M++;return M===E}function p(_){const M=_.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function S(_){const M=_.target;M.removeEventListener("dispose",S);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function HM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&fo("WebGLRenderer: "+s+" extension not supported."),o}}}function GM(r,e,t,s){const o={},l=new WeakMap;function u(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(y,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function m(y){const _=y.attributes;for(const M in _)e.update(_[M],r.ARRAY_BUFFER)}function p(y){const _=[],M=y.index,E=y.attributes.position;let b=0;if(E===void 0)return;if(M!==null){const R=M.array;b=M.version;for(let U=0,A=R.length;U<A;U+=3){const I=R[U+0],N=R[U+1],O=R[U+2];_.push(I,N,N,O,O,I)}}else{const R=E.array;b=E.version;for(let U=0,A=R.length/3-1;U<A;U+=3){const I=U+0,N=U+1,O=U+2;_.push(I,N,N,O,O,I)}}const x=new(E.count>=65535?Ig:Ng)(_,1);x.version=b;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function S(y){const _=l.get(y);if(_){const M=y.index;M!==null&&_.version<M.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:m,getWireframeAttribute:S}}function WM(r,e,t){let s;function o(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function m(y,_){r.drawElements(s,_,l,y*u),t.update(_,s,1)}function p(y,_,M){M!==0&&(r.drawElementsInstanced(s,_,l,y*u,M),t.update(_,s,M))}function S(y,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,l,y,0,M);let b=0;for(let x=0;x<M;x++)b+=_[x];t.update(b,s,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function XM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:sn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function qM(r,e,t){const s=new WeakMap,o=new An;function l(u,f,m){const p=u.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=S!==void 0?S.length:0;let _=s.get(f);if(_===void 0||_.count!==y){let V=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",V)};var M=V;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),b===!0&&(A=2),x===!0&&(A=3);let I=f.attributes.position.count*A,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*N*4*y),w=new Cg(O,I,N,y);w.type=Or,w.needsUpdate=!0;const L=A*4;for(let W=0;W<y;W++){const G=v[W],ne=R[W],j=U[W],ie=I*N*4*W;for(let he=0;he<G.count;he++){const oe=he*L;E===!0&&(o.fromBufferAttribute(G,he),O[ie+oe+0]=o.x,O[ie+oe+1]=o.y,O[ie+oe+2]=o.z,O[ie+oe+3]=0),b===!0&&(o.fromBufferAttribute(ne,he),O[ie+oe+4]=o.x,O[ie+oe+5]=o.y,O[ie+oe+6]=o.z,O[ie+oe+7]=0),x===!0&&(o.fromBufferAttribute(j,he),O[ie+oe+8]=o.x,O[ie+oe+9]=o.y,O[ie+oe+10]=o.z,O[ie+oe+11]=j.itemSize===4?o.w:1)}}_={count:y,texture:w,size:new Wt(I,N)},s.set(f,_),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const b=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function jM(r,e,t,s,o){let l=new WeakMap;function u(p){const S=o.render.frame,y=p.geometry,_=e.get(p,y);if(l.get(_)!==S&&(e.update(_),l.set(_,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==S&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,S))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==S&&(M.update(),l.set(M,S))}return _}function f(){l=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),t.remove(S.instanceMatrix),S.instanceColor!==null&&t.remove(S.instanceColor)}return{update:u,dispose:f}}const $M={[pg]:"LINEAR_TONE_MAPPING",[mg]:"REINHARD_TONE_MAPPING",[gg]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[_g]:"AGX_TONE_MAPPING",[xg]:"NEUTRAL_TONE_MAPPING",[vg]:"CUSTOM_TONE_MAPPING"};function YM(r,e,t,s,o,l){const u=new Sr(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new Fn;p.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new fn([0,2,0,0,2,0],2));const S=new Fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new xe(p,S),_=new Ph(-1,1,1,-1,0,1);let M=null,E=null,b=!1,x,v=null,R=[],U=!1;this.setSize=function(A,I){u.setSize(A,I),f!==null&&f.setSize(A,I),m!==null&&m.setSize(A,I);for(let N=0;N<R.length;N++){const O=R[N];O.setSize&&O.setSize(A,I)}},this.setEffects=function(A){R=A,U=R.length>0&&R[0].isRenderPass===!0;const I=u.width,N=u.height;R.length>0&&f===null&&(f=new Sr(I,N,{type:zr,depthBuffer:!1,stencilBuffer:!1}),m=new Sr(I,N,{type:zr,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<R.length;O++){const w=R[O];w.setSize&&w.setSize(I,N)}},this.begin=function(A,I){if(b||A.toneMapping===kr&&R.length===0)return!1;if(v=I,I!==null){const N=I.width,O=I.height;(u.width!==N||u.height!==O)&&this.setSize(N,O)}return U===!1&&A.setRenderTarget(u),x=A.toneMapping,A.toneMapping=kr,!0},this.hasRenderPass=function(){return U},this.end=function(A,I){A.toneMapping=x,b=!0;let N=u,O=f;for(let w=0;w<R.length;w++){const L=R[w];L.enabled!==!1&&(L.render(A,O,N,I),L.needsSwap!==!1&&(N=O,O=O===f?m:f))}if(M!==A.outputColorSpace||E!==A.toneMapping){M=A.outputColorSpace,E=A.toneMapping,S.defines={},Zt.getTransfer(M)===cn&&(S.defines.SRGB_TRANSFER="");const w=$M[E];w&&(S.defines[w]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(v),A.render(y,_),v=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),S.dispose()}}const Wg=new pi,uh=new fl(1,1),Xg=new Cg,qg=new hx,jg=new Og,H0=[],G0=[],W0=new Float32Array(16),X0=new Float32Array(9),q0=new Float32Array(4);function vo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=H0[o];if(l===void 0&&(l=new Float32Array(o),H0[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function kn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Bn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function uu(r,e){let t=G0[e];t===void 0&&(t=new Int32Array(e),G0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function KM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;r.uniform2fv(this.addr,e),Bn(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;r.uniform3fv(this.addr,e),Bn(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;r.uniform4fv(this.addr,e),Bn(t,e)}}function e1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(kn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bn(t,e)}else{if(kn(t,s))return;q0.set(s),r.uniformMatrix2fv(this.addr,!1,q0),Bn(t,s)}}function t1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(kn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bn(t,e)}else{if(kn(t,s))return;X0.set(s),r.uniformMatrix3fv(this.addr,!1,X0),Bn(t,s)}}function n1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(kn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bn(t,e)}else{if(kn(t,s))return;W0.set(s),r.uniformMatrix4fv(this.addr,!1,W0),Bn(t,s)}}function i1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;r.uniform2iv(this.addr,e),Bn(t,e)}}function s1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;r.uniform3iv(this.addr,e),Bn(t,e)}}function a1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;r.uniform4iv(this.addr,e),Bn(t,e)}}function o1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;r.uniform2uiv(this.addr,e),Bn(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;r.uniform3uiv(this.addr,e),Bn(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;r.uniform4uiv(this.addr,e),Bn(t,e)}}function d1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(uh.compareFunction=t.isReversedDepthBuffer()?Mh:yh,l=uh):l=Wg,t.setTexture2D(e||l,o)}function f1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||qg,o)}function h1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||jg,o)}function p1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Xg,o)}function m1(r){switch(r){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return a1;case 5125:return o1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(r,e){r.uniform1fv(this.addr,e)}function v1(r,e){const t=vo(e,this.size,2);r.uniform2fv(this.addr,t)}function _1(r,e){const t=vo(e,this.size,3);r.uniform3fv(this.addr,t)}function x1(r,e){const t=vo(e,this.size,4);r.uniform4fv(this.addr,t)}function S1(r,e){const t=vo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function y1(r,e){const t=vo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function M1(r,e){const t=vo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function E1(r,e){r.uniform1iv(this.addr,e)}function w1(r,e){r.uniform2iv(this.addr,e)}function T1(r,e){r.uniform3iv(this.addr,e)}function A1(r,e){r.uniform4iv(this.addr,e)}function b1(r,e){r.uniform1uiv(this.addr,e)}function R1(r,e){r.uniform2uiv(this.addr,e)}function C1(r,e){r.uniform3uiv(this.addr,e)}function P1(r,e){r.uniform4uiv(this.addr,e)}function L1(r,e,t){const s=this.cache,o=e.length,l=uu(t,o);kn(s,l)||(r.uniform1iv(this.addr,l),Bn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=uh:u=Wg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function N1(r,e,t){const s=this.cache,o=e.length,l=uu(t,o);kn(s,l)||(r.uniform1iv(this.addr,l),Bn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||qg,l[u])}function I1(r,e,t){const s=this.cache,o=e.length,l=uu(t,o);kn(s,l)||(r.uniform1iv(this.addr,l),Bn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||jg,l[u])}function D1(r,e,t){const s=this.cache,o=e.length,l=uu(t,o);kn(s,l)||(r.uniform1iv(this.addr,l),Bn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Xg,l[u])}function U1(r){switch(r){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return b1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return D1}}class O1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=m1(t.type)}}class F1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function j0(r,e){r.seq.push(e),r.map[e.id]=e}function B1(r,e,t){const s=r.name,o=s.length;for(yf.lastIndex=0;;){const l=yf.exec(s),u=yf.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){j0(t,p===void 0?new O1(f,r,e):new F1(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new k1(f),j0(t,y)),t=y}}}class Jc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);B1(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=s[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function $0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const z1=37297;let V1=0;function H1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Y0=new Rt;function G1(r){Zt._getMatrix(Y0,Zt.workingColorSpace,r);const e=`mat3( ${Y0.elements.map(t=>t.toFixed(4))} )`;switch(Zt.getTransfer(r)){case nu:return[e,"LinearTransferOETF"];case cn:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function K0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+H1(r.getShaderSource(e),f)}else return l}function W1(r,e){const t=G1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const X1={[pg]:"Linear",[mg]:"Reinhard",[gg]:"Cineon",[ph]:"ACESFilmic",[_g]:"AgX",[xg]:"Neutral",[vg]:"Custom"};function q1(r,e){const t=X1[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gc=new te;function j1(){Zt.getLuminanceCoefficients(Gc);const r=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function Y1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function K1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function rl(r){return r!==""}function Z0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(r){return r.replace(Z1,Q1)}const J1=new Map;function Q1(r,e){let t=Ot[e];if(t===void 0){const s=J1.get(e);if(s!==void 0)t=Ot[s],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(t)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(r){return r.replace(eE,tE)}function tE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function eg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nE={[qc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function iE(r){return nE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rE={[ha]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function sE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const aE={[po]:"ENVMAP_MODE_REFRACTION"};function oE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lE={[hg]:"ENVMAP_BLENDING_MULTIPLY",[W_]:"ENVMAP_BLENDING_MIX",[X_]:"ENVMAP_BLENDING_ADD"};function cE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lE[r.combine]||"ENVMAP_BLENDING_NONE"}function uE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function dE(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=iE(t),p=sE(t),S=oE(t),y=cE(t),_=uE(t),M=$1(t),E=Y1(l),b=o.createProgram();let x,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(rl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(rl).join(`
`),v.length>0&&(v+=`
`)):(x=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),v=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+S:"",t.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?Ot.tonemapping_pars_fragment:"",t.toneMapping!==kr?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),j1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),u=dh(u),u=Z0(u,t),u=J0(u,t),f=dh(f),f=Z0(f,t),f=J0(f,t),u=Q0(u),f=Q0(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=R+x+u,A=R+v+f,I=$0(o,o.VERTEX_SHADER,U),N=$0(o,o.FRAGMENT_SHADER,A);o.attachShader(b,I),o.attachShader(b,N),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(W){if(r.debug.checkShaderErrors){const G=o.getProgramInfoLog(b)||"",ne=o.getShaderInfoLog(I)||"",j=o.getShaderInfoLog(N)||"",ie=G.trim(),he=ne.trim(),oe=j.trim();let J=!0,Z=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,I,N);else{const ee=K0(o,I,"vertex"),F=K0(o,N,"fragment");sn("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ie+`
`+ee+`
`+F)}else ie!==""?wt("WebGLProgram: Program Info Log:",ie):(he===""||oe==="")&&(Z=!1);Z&&(W.diagnostics={runnable:J,programLog:ie,vertexShader:{log:he,prefix:x},fragmentShader:{log:oe,prefix:v}})}o.deleteShader(I),o.deleteShader(N),w=new Jc(o,b),L=K1(o,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(b,z1)),V},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=N,this}let fE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new pE(e),t.set(e,s)),s}}class pE{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}}function mE(r){return r===ma||r===Qc||r===eu}function gE(r,e,t,s,o,l){const u=new Pg,f=new hE,m=new Set,p=[],S=new Map,y=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return m.add(w),w===0?"uv":`uv${w}`}function b(w,L,V,W,G,ne){const j=W.fog,ie=G.geometry,he=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=e.get(w.envMap||he,oe),Z=J&&J.mapping===ou?J.image.height:null,ee=M[w.type];w.precision!==null&&(_=s.getMaxPrecision(w.precision),_!==w.precision&&wt("WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const F=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,re=F!==void 0?F.length:0;let we=0;ie.morphAttributes.position!==void 0&&(we=1),ie.morphAttributes.normal!==void 0&&(we=2),ie.morphAttributes.color!==void 0&&(we=3);let Ye,Xe,Ze,ce;if(ee){const ke=Ur[ee];Ye=ke.vertexShader,Xe=ke.fragmentShader}else{Ye=w.vertexShader,Xe=w.fragmentShader;const ke=f.getVertexShaderStage(w),pt=f.getFragmentShaderStage(w);f.update(w,ke,pt),Ze=ke.id,ce=pt.id}const me=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),tt=G.isInstancedMesh===!0,He=G.isBatchedMesh===!0,gt=!!w.map,Ft=!!w.matcap,ht=!!J,Tt=!!w.aoMap,kt=!!w.lightMap,ut=!!w.bumpMap&&w.wireframe===!1,Bt=!!w.normalMap,zt=!!w.displacementMap,Xt=!!w.emissiveMap,xt=!!w.metalnessMap,Ct=!!w.roughnessMap,Y=w.anisotropy>0,Vt=w.clearcoat>0,Mt=w.dispersion>0,k=w.retroreflectivity>0,T=w.iridescence>0,Q=w.sheen>0,le=w.transmission>0,ge=Y&&!!w.anisotropyMap,Ae=Vt&&!!w.clearcoatMap,Oe=Vt&&!!w.clearcoatNormalMap,_e=Vt&&!!w.clearcoatRoughnessMap,Se=T&&!!w.iridescenceMap,De=T&&!!w.iridescenceThicknessMap,Ke=Q&&!!w.sheenColorMap,Fe=Q&&!!w.sheenRoughnessMap,Ee=!!w.specularMap,Qe=!!w.specularColorMap,je=!!w.specularIntensityMap,ct=le&&!!w.transmissionMap,B=le&&!!w.thicknessMap,Pe=!!w.gradientMap,de=!!w.alphaMap,Ie=w.alphaTest>0,ze=!!w.alphaHash,Me=!!w.extensions;let We=kr;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(We=r.toneMapping);const Te={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:Xe,defines:w.defines,customVertexShaderID:Ze,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:He,batchingColor:He&&G._colorsTexture!==null,instancing:tt,instancingColor:tt&&G.instanceColor!==null,instancingMorph:tt&&G.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:gt,matcap:Ft,envMap:ht,envMapMode:ht&&J.mapping,envMapCubeUVHeight:Z,aoMap:Tt,lightMap:kt,bumpMap:ut,normalMap:Bt,displacementMap:zt,emissiveMap:Xt,normalMapObjectSpace:Bt&&w.normalMapType===$_,normalMapTangentSpace:Bt&&w.normalMapType===oh,packedNormalMap:Bt&&w.normalMapType===oh&&mE(w.normalMap.format),metalnessMap:xt,roughnessMap:Ct,anisotropy:Y,anisotropyMap:ge,clearcoat:Vt,clearcoatMap:Ae,clearcoatNormalMap:Oe,clearcoatRoughnessMap:_e,dispersion:Mt,retroreflection:k,iridescence:T,iridescenceMap:Se,iridescenceThicknessMap:De,sheen:Q,sheenColorMap:Ke,sheenRoughnessMap:Fe,specularMap:Ee,specularColorMap:Qe,specularIntensityMap:je,transmission:le,transmissionMap:ct,thicknessMap:B,gradientMap:Pe,opaque:w.transparent===!1&&w.blending===al&&w.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:ze,combine:w.combine,mapUv:gt&&E(w.map.channel),aoMapUv:Tt&&E(w.aoMap.channel),lightMapUv:kt&&E(w.lightMap.channel),bumpMapUv:ut&&E(w.bumpMap.channel),normalMapUv:Bt&&E(w.normalMap.channel),displacementMapUv:zt&&E(w.displacementMap.channel),emissiveMapUv:Xt&&E(w.emissiveMap.channel),metalnessMapUv:xt&&E(w.metalnessMap.channel),roughnessMapUv:Ct&&E(w.roughnessMap.channel),anisotropyMapUv:ge&&E(w.anisotropyMap.channel),clearcoatMapUv:Ae&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:De&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(w.sheenRoughnessMap.channel),specularMapUv:Ee&&E(w.specularMap.channel),specularColorMapUv:Qe&&E(w.specularColorMap.channel),specularIntensityMapUv:je&&E(w.specularIntensityMap.channel),transmissionMapUv:ct&&E(w.transmissionMap.channel),thicknessMapUv:B&&E(w.thicknessMap.channel),alphaMapUv:de&&E(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Bt||Y),vertexNormals:!!ie.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ie.attributes.uv&&(gt||de),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ie.attributes.normal===void 0&&Bt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Re,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:we,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:gt&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===cn,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===cn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ui,flipSided:w.side===Oi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Me&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&w.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Te.vertexUv1s=m.has(1),Te.vertexUv2s=m.has(2),Te.vertexUv3s=m.has(3),m.clear(),Te}function x(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)L.push(V),L.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(v(L,w),R(L,w),L.push(r.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function v(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function R(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function U(w){const L=M[w.type];let V;if(L){const W=Ur[L];V=Dx.clone(W.uniforms)}else V=w.uniforms;return V}function A(w,L){let V=S.get(L);return V!==void 0?++V.usedTimes:(V=new dE(r,L,w,o),p.push(V),S.set(L,V)),V}function I(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),S.delete(w.cacheKey),w.destroy()}}function N(w){f.remove(w)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:U,acquireProgram:A,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:O}}function vE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,m){r.get(u)[f]=m}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function _E(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function tg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ng(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function f(_,M,E,b,x,v){let R=r[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:E,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:x,group:v},r[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=E,R.materialVariant=u(_),R.groupOrder=b,R.renderOrder=_.renderOrder,R.z=x,R.group=v),e++,R}function m(_,M,E,b,x,v,R){R.reversedDepth===!0&&(x=-x);const U=f(_,M,E,b,x,v);E.transmission>0?s.push(U):E.transparent===!0?o.push(U):t.push(U)}function p(_,M,E,b,x,v){const R=f(_,M,E,b,x,v);E.transmission>0?s.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function S(_,M){t.length>1&&t.sort(_||_E),s.length>1&&s.sort(M||tg),o.length>1&&o.sort(M||tg)}function y(){for(let _=e,M=r.length;_<M;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:m,unshift:p,finish:y,sort:S}}function xE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new ng,r.set(s,[u])):o>=l.length?(u=new ng,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function SE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new Ht};break;case"SpotLight":t={position:new te,direction:new te,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":t={color:new Ht,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function yE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ME=0;function EE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wE(r){const e=new SE,t=yE(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new te);const o=new te,l=new yn,u=new yn;function f(p){let S=0,y=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let M=0,E=0,b=0,x=0,v=0,R=0,U=0,A=0,I=0,N=0,O=0,w=0,L=0,V=0;p.sort(EE);for(let G=0,ne=p.length;G<ne;G++){const j=p[G],ie=j.color,he=j.intensity,oe=j.distance;let J=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===ma?J=j.shadow.map.texture:J=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)S+=ie.r*he,y+=ie.g*he,_+=ie.b*he;else if(j.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(j.sh.coefficients[Z],he);V++}else if(j.isSunLight){const Z=e.get(j);if(Z.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const ee=j.shadow,F=t.get(j);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),s.sunShadow[E]=F,s.sunShadowMap[E]=J;const re=ee.getViewportCount();for(let we=0;we<re;we++)s.sunShadowMatrix[b+we]=ee.getMatrix(we),s.sunShadowCascade[b+we]=ee._cascadeData[we];b+=re,E++}s.sun[M]=Z,M++}else if(j.isDirectionalLight){const Z=e.get(j);if(Z.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const ee=j.shadow,F=t.get(j);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,s.directionalShadow[x]=F,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=j.shadow.matrix,I++}s.directional[x]=Z,x++}else if(j.isSpotLight){const Z=e.get(j);Z.position.setFromMatrixPosition(j.matrixWorld),Z.color.copy(ie).multiplyScalar(he),Z.distance=oe,Z.coneCos=Math.cos(j.angle),Z.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Z.decay=j.decay,s.spot[R]=Z;const ee=j.shadow;if(j.map&&(s.spotLightMap[w]=j.map,w++,ee.updateMatrices(j),j.castShadow&&L++),s.spotLightMatrix[R]=ee.matrix,j.castShadow){const F=t.get(j);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,s.spotShadow[R]=F,s.spotShadowMap[R]=J,O++}R++}else if(j.isRectAreaLight){const Z=e.get(j);Z.color.copy(ie).multiplyScalar(he),Z.halfWidth.set(j.width*.5,0,0),Z.halfHeight.set(0,j.height*.5,0),s.rectArea[U]=Z,U++}else if(j.isPointLight){const Z=e.get(j);if(Z.color.copy(j.color).multiplyScalar(j.intensity),Z.distance=j.distance,Z.decay=j.decay,j.castShadow){const ee=j.shadow,F=t.get(j);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,F.shadowCameraNear=ee.camera.near,F.shadowCameraFar=ee.camera.far,s.pointShadow[v]=F,s.pointShadowMap[v]=J,s.pointShadowMatrix[v]=j.shadow.matrix,N++}s.point[v]=Z,v++}else if(j.isHemisphereLight){const Z=e.get(j);Z.skyColor.copy(j.color).multiplyScalar(he),Z.groundColor.copy(j.groundColor).multiplyScalar(he),s.hemi[A]=Z,A++}}U>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_FLOAT_1,s.rectAreaLTC2=qe.LTC_FLOAT_2):(s.rectAreaLTC1=qe.LTC_HALF_1,s.rectAreaLTC2=qe.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=y,s.ambient[2]=_;const W=s.hash;(W.sunLength!==M||W.directionalLength!==x||W.pointLength!==v||W.spotLength!==R||W.rectAreaLength!==U||W.hemiLength!==A||W.numSunShadows!==E||W.numDirectionalShadows!==I||W.numPointShadows!==N||W.numSpotShadows!==O||W.numSpotMaps!==w||W.numLightProbes!==V)&&(s.sun.length=M,s.directional.length=x,s.spot.length=R,s.rectArea.length=U,s.point.length=v,s.hemi.length=A,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=b,s.sunShadowCascade.length=b,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.spotLightMatrix.length=O+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=V,W.sunLength=M,W.directionalLength=x,W.pointLength=v,W.spotLength=R,W.rectAreaLength=U,W.hemiLength=A,W.numSunShadows=E,W.numDirectionalShadows=I,W.numPointShadows=N,W.numSpotShadows=O,W.numSpotMaps=w,W.numLightProbes=V,s.version=ME++)}function m(p,S){let y=0,_=0,M=0,E=0,b=0,x=0;const v=S.matrixWorldInverse;for(let R=0,U=p.length;R<U;R++){const A=p[R];if(A.isSunLight){const I=s.sun[y];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(v),y++}else if(A.isDirectionalLight){const I=s.directional[_];I.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),_++}else if(A.isSpotLight){const I=s.spot[E];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),E++}else if(A.isRectAreaLight){const I=s.rectArea[b];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(v),u.identity(),l.copy(A.matrixWorld),l.premultiply(v),u.extractRotation(l),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),b++}else if(A.isPointLight){const I=s.point[M];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(v),M++}else if(A.isHemisphereLight){const I=s.hemi[x];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(v),x++}}}return{setup:f,setupView:m,state:s}}function ig(r){const e=new wE(r),t=[],s=[],o=[];function l(_){y.camera=_,t.length=0,s.length=0,o.length=0}function u(_){t.push(_)}function f(_){s.push(_)}function m(_){o.push(_)}function p(){e.setup(t)}function S(_){e.setupView(t,_)}const y={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:S,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function TE(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new ig(r),e.set(o,[f])):l>=u.length?(f=new ig(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bE=`uniform sampler2D shadow_pass;
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
}`,RE=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],CE=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],rg=new yn,nl=new te,Mf=new te;function PE(r,e,t){let s=new Ah;const o=new Wt,l=new Wt,u=new An,f=new kx,m=new Bx,p={},S=t.maxTextureSize,y={[fa]:Oi,[Oi]:fa,[Ui]:Ui},_=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:AE,fragmentShader:bE}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Fn;E.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new xe(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let v=this.type;this.render=function(N,O,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===T_&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qc);const L=r.getRenderTarget(),V=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),G=r.state;G.setBlending(os),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ne=v!==this.type;ne&&O.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(ie=>ie.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,ie=N.length;j<ie;j++){const he=N[j],oe=he.shadow;if(oe===void 0){wt("WebGLShadowMap:",he,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;o.copy(oe.mapSize);const J=oe.getFrameExtents();o.multiply(J),l.copy(oe.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(l.x=Math.floor(S/J.x),o.x=l.x*J.x,oe.mapSize.x=l.x),o.y>S&&(l.y=Math.floor(S/J.y),o.y=l.y*J.y,oe.mapSize.y=l.y));const Z=r.state.buffers.depth.getReversed();if(oe.camera._reversedDepth=Z,oe.map===null||ne===!0){if(oe.map!==null&&(oe.map.depthTexture!==null&&(oe.map.depthTexture.dispose(),oe.map.depthTexture=null),oe.map.dispose()),this.type===il){if(he.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}oe.map=new Sr(o.x,o.y,{format:ma,type:zr,minFilter:hi,magFilter:hi,generateMipmaps:!1}),oe.map.texture.name=he.name+".shadowMap",oe.map.depthTexture=new fl(o.x,o.y,Or),oe.map.depthTexture.name=he.name+".shadowMapDepth",oe.map.depthTexture.format=cs,oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=ei,oe.map.depthTexture.magFilter=ei}else he.isPointLight?(oe.map=new Gg(o.x),oe.map.depthTexture=new Nx(o.x,Br)):(oe.map=new Sr(o.x,o.y),oe.map.depthTexture=new fl(o.x,o.y,Br)),oe.map.depthTexture.name=he.name+".shadowMap",oe.map.depthTexture.format=cs,this.type===qc?(oe.map.depthTexture.compareFunction=Z?Mh:yh,oe.map.depthTexture.minFilter=hi,oe.map.depthTexture.magFilter=hi):(oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=ei,oe.map.depthTexture.magFilter=ei);oe.camera.updateProjectionMatrix()}oe.map.isWebGLCubeRenderTarget!==!0&&(oe.map.width!==o.x||oe.map.height!==o.y)&&oe.map.setSize(o.x,o.y);const ee=oe.map.isWebGLCubeRenderTarget?6:oe.getViewportCount();he.isPointLight!==!0&&oe.updateMatrices(he,w);for(let F=0;F<ee;F++){const re=oe.getCamera(F);if(he.isPointLight){const we=oe.camera,Ye=oe.matrix,Xe=he.distance||we.far;Xe!==we.far&&(we.far=Xe,we.updateProjectionMatrix()),nl.setFromMatrixPosition(he.matrixWorld),we.position.copy(nl),Mf.copy(we.position),Mf.add(RE[F]),we.up.copy(CE[F]),we.lookAt(Mf),we.updateMatrixWorld(),Ye.makeTranslation(-nl.x,-nl.y,-nl.z),rg.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),oe._frustum.setFromProjectionMatrix(rg,we.coordinateSystem,we.reversedDepth)}if(oe.map.isWebGLCubeRenderTarget)r.setRenderTarget(oe.map,F),r.clear();else{F===0&&(r.setRenderTarget(oe.map),r.clear());const we=oe.getViewport(F);u.set(l.x*we.x,l.y*we.y,l.x*we.z,l.y*we.w),G.viewport(u)}s=oe.getFrustum(F),A(O,w,re,he,this.type)}oe.isPointLightShadow!==!0&&this.type===il&&R(oe,w),oe.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(L,V,W)};function R(N,O){const w=e.update(b);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null?N.mapPass=new Sr(o.x,o.y,{format:ma,type:zr}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(O,null,w,_,b,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value.set(N.map.width,N.map.height),M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(O,null,w,M,b,null)}function U(N,O,w,L){let V=null;const W=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(W!==void 0)V=W;else if(V=w.isPointLight===!0?m:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const G=V.uuid,ne=O.uuid;let j=p[G];j===void 0&&(j={},p[G]=j);let ie=j[ne];ie===void 0&&(ie=V.clone(),j[ne]=ie,O.addEventListener("dispose",I)),V=ie}if(V.visible=O.visible,V.wireframe=O.wireframe,L===il?V.side=O.shadowSide!==null?O.shadowSide:O.side:V.side=O.shadowSide!==null?O.shadowSide:y[O.side],V.alphaMap=O.alphaMap,V.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,V.map=O.map,V.clipShadows=O.clipShadows,V.clippingPlanes=O.clippingPlanes,V.clipIntersection=O.clipIntersection,V.displacementMap=O.displacementMap,V.displacementScale=O.displacementScale,V.displacementBias=O.displacementBias,V.wireframeLinewidth=O.wireframeLinewidth,V.linewidth=O.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const G=r.properties.get(V);G.light=w}return V}function A(N,O,w,L,V){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===il)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const ne=e.update(N),j=N.material;if(Array.isArray(j)){const ie=ne.groups;for(let he=0,oe=ie.length;he<oe;he++){const J=ie[he],Z=j[J.materialIndex];if(Z&&Z.visible){const ee=U(N,Z,L,V);N.onBeforeShadow(r,N,O,w,ne,ee,J),r.renderBufferDirect(w,null,ne,ee,N,J),N.onAfterShadow(r,N,O,w,ne,ee,J)}}}else if(j.visible){const ie=U(N,j,L,V);N.onBeforeShadow(r,N,O,w,ne,ie,null),r.renderBufferDirect(w,null,ne,ie,N,null),N.onAfterShadow(r,N,O,w,ne,ie,null)}}const G=N.children;for(let ne=0,j=G.length;ne<j;ne++)A(G[ne],O,w,L,V)}function I(N){N.target.removeEventListener("dispose",I);for(const w in p){const L=p[w],V=N.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function LE(r,e){function t(){let B=!1;const Pe=new An;let de=null;const Ie=new An(0,0,0,0);return{setMask:function(ze){de!==ze&&!B&&(r.colorMask(ze,ze,ze,ze),de=ze)},setLocked:function(ze){B=ze},setClear:function(ze,Me,We,Te,ke){ke===!0&&(ze*=Te,Me*=Te,We*=Te),Pe.set(ze,Me,We,Te),Ie.equals(Pe)===!1&&(r.clearColor(ze,Me,We,Te),Ie.copy(Pe))},reset:function(){B=!1,de=null,Ie.set(-1,0,0,0)}}}function s(){let B=!1,Pe=!1,de=null,Ie=null,ze=null;return{setReversed:function(Me){if(Pe!==Me){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Pe=Me;const Te=ze;ze=null,this.setClear(Te)}},getReversed:function(){return Pe},setTest:function(Me){Me?me(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Me){de!==Me&&!B&&(r.depthMask(Me),de=Me)},setFunc:function(Me){if(Pe&&(Me=ax[Me]),Ie!==Me){switch(Me){case Ef:r.depthFunc(r.NEVER);break;case wf:r.depthFunc(r.ALWAYS);break;case Tf:r.depthFunc(r.LESS);break;case ll:r.depthFunc(r.LEQUAL);break;case Af:r.depthFunc(r.EQUAL);break;case bf:r.depthFunc(r.GEQUAL);break;case Rf:r.depthFunc(r.GREATER);break;case Cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=Me}},setLocked:function(Me){B=Me},setClear:function(Me){ze!==Me&&(ze=Me,Pe&&(Me=1-Me),r.clearDepth(Me))},reset:function(){B=!1,de=null,Ie=null,ze=null,Pe=!1}}}function o(){let B=!1,Pe=null,de=null,Ie=null,ze=null,Me=null,We=null,Te=null,ke=null;return{setTest:function(pt){B||(pt?me(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(pt){Pe!==pt&&!B&&(r.stencilMask(pt),Pe=pt)},setFunc:function(pt,qt,Qt){(de!==pt||Ie!==qt||ze!==Qt)&&(r.stencilFunc(pt,qt,Qt),de=pt,Ie=qt,ze=Qt)},setOp:function(pt,qt,Qt){(Me!==pt||We!==qt||Te!==Qt)&&(r.stencilOp(pt,qt,Qt),Me=pt,We=qt,Te=Qt)},setLocked:function(pt){B=pt},setClear:function(pt){ke!==pt&&(r.clearStencil(pt),ke=pt)},reset:function(){B=!1,Pe=null,de=null,Ie=null,ze=null,Me=null,We=null,Te=null,ke=null}}}const l=new t,u=new s,f=new o,m=new WeakMap,p=new WeakMap;let S={},y={},_={},M=new WeakMap,E=[],b=null,x=!1,v=null,R=null,U=null,A=null,I=null,N=null,O=null,w=new Ht(0,0,0),L=0,V=!1,W=null,G=null,ne=null,j=null,ie=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,J=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),oe=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),oe=J>=2);let ee=null,F={};const re=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),Ye=new An().fromArray(re),Xe=new An().fromArray(we);function Ze(B,Pe,de,Ie){const ze=new Uint8Array(4),Me=r.createTexture();r.bindTexture(B,Me),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<de;We++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(Pe+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return Me}const ce={};ce[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(r.DEPTH_TEST),u.setFunc(ll),ut(!1),Bt(i0),me(r.CULL_FACE),Tt(os);function me(B){S[B]!==!0&&(r.enable(B),S[B]=!0)}function Re(B){S[B]!==!1&&(r.disable(B),S[B]=!1)}function tt(B,Pe){return _[B]!==Pe?(r.bindFramebuffer(B,Pe),_[B]=Pe,B===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pe),B===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(B,Pe){let de=E,Ie=!1;if(B){de=M.get(Pe),de===void 0&&(de=[],M.set(Pe,de));const ze=B.textures;if(de.length!==ze.length||de[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,We=ze.length;Me<We;Me++)de[Me]=r.COLOR_ATTACHMENT0+Me;de.length=ze.length,Ie=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(de)}function gt(B){return b!==B?(r.useProgram(B),b=B,!0):!1}const Ft={[lo]:r.FUNC_ADD,[b_]:r.FUNC_SUBTRACT,[R_]:r.FUNC_REVERSE_SUBTRACT};Ft[C_]=r.MIN,Ft[P_]=r.MAX;const ht={[L_]:r.ZERO,[N_]:r.ONE,[I_]:r.SRC_COLOR,[dg]:r.SRC_ALPHA,[B_]:r.SRC_ALPHA_SATURATE,[F_]:r.DST_COLOR,[U_]:r.DST_ALPHA,[D_]:r.ONE_MINUS_SRC_COLOR,[fg]:r.ONE_MINUS_SRC_ALPHA,[k_]:r.ONE_MINUS_DST_COLOR,[O_]:r.ONE_MINUS_DST_ALPHA,[z_]:r.CONSTANT_COLOR,[V_]:r.ONE_MINUS_CONSTANT_COLOR,[H_]:r.CONSTANT_ALPHA,[G_]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(B,Pe,de,Ie,ze,Me,We,Te,ke,pt){if(B===os){x===!0&&(Re(r.BLEND),x=!1);return}if(x===!1&&(me(r.BLEND),x=!0),B!==A_){if(B!==v||pt!==V){if((R!==lo||I!==lo)&&(r.blendEquation(r.FUNC_ADD),R=lo,I=lo),pt)switch(B){case al:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Di:r.blendFunc(r.ONE,r.ONE);break;case r0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case s0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:sn("WebGLState: Invalid blending: ",B);break}else switch(B){case al:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Di:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case r0:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s0:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",B);break}U=null,A=null,N=null,O=null,w.set(0,0,0),L=0,v=B,V=pt}return}ze=ze||Pe,Me=Me||de,We=We||Ie,(Pe!==R||ze!==I)&&(r.blendEquationSeparate(Ft[Pe],Ft[ze]),R=Pe,I=ze),(de!==U||Ie!==A||Me!==N||We!==O)&&(r.blendFuncSeparate(ht[de],ht[Ie],ht[Me],ht[We]),U=de,A=Ie,N=Me,O=We),(Te.equals(w)===!1||ke!==L)&&(r.blendColor(Te.r,Te.g,Te.b,ke),w.copy(Te),L=ke),v=B,V=!1}function kt(B,Pe){B.side===Ui?Re(r.CULL_FACE):me(r.CULL_FACE);let de=B.side===Oi;Pe&&(de=!de),ut(de),B.blending===al&&B.transparent===!1?Tt(os):Tt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Ie=B.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Xt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(B){W!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),W=B)}function Bt(B){B!==E_?(me(r.CULL_FACE),B!==G&&(B===i0?r.cullFace(r.BACK):B===w_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),G=B}function zt(B){B!==ne&&(oe&&r.lineWidth(B),ne=B)}function Xt(B,Pe,de){B?(me(r.POLYGON_OFFSET_FILL),(j!==Pe||ie!==de)&&(j=Pe,ie=de,u.getReversed()&&(Pe=-Pe),r.polygonOffset(Pe,de))):Re(r.POLYGON_OFFSET_FILL)}function xt(B){B?me(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Ct(B){B===void 0&&(B=r.TEXTURE0+he-1),ee!==B&&(r.activeTexture(B),ee=B)}function Y(B,Pe,de){de===void 0&&(ee===null?de=r.TEXTURE0+he-1:de=ee);let Ie=F[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},F[de]=Ie),(Ie.type!==B||Ie.texture!==Pe)&&(ee!==de&&(r.activeTexture(de),ee=de),r.bindTexture(B,Pe||ce[B]),Ie.type=B,Ie.texture=Pe)}function Vt(){const B=F[ee];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Mt(){try{r.compressedTexImage2D(...arguments)}catch(B){sn("WebGLState:",B)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(B){sn("WebGLState:",B)}}function T(){try{r.texSubImage2D(...arguments)}catch(B){sn("WebGLState:",B)}}function Q(){try{r.texSubImage3D(...arguments)}catch(B){sn("WebGLState:",B)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(B){sn("WebGLState:",B)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(B){sn("WebGLState:",B)}}function Ae(){try{r.texStorage2D(...arguments)}catch(B){sn("WebGLState:",B)}}function Oe(){try{r.texStorage3D(...arguments)}catch(B){sn("WebGLState:",B)}}function _e(){try{r.texImage2D(...arguments)}catch(B){sn("WebGLState:",B)}}function Se(){try{r.texImage3D(...arguments)}catch(B){sn("WebGLState:",B)}}function De(B){return y[B]!==void 0?y[B]:r.getParameter(B)}function Ke(B,Pe){y[B]!==Pe&&(r.pixelStorei(B,Pe),y[B]=Pe)}function Fe(B){Ye.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function Ee(B){Xe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function Qe(B,Pe){let de=p.get(Pe);de===void 0&&(de=new WeakMap,p.set(Pe,de));let Ie=de.get(B);Ie===void 0&&(Ie=r.getUniformBlockIndex(Pe,B.name),de.set(B,Ie))}function je(B,Pe){const Ie=p.get(Pe).get(B);m.get(Pe)!==Ie&&(r.uniformBlockBinding(Pe,Ie,B.__bindingPointIndex),m.set(Pe,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},y={},ee=null,F={},_={},M=new WeakMap,E=[],b=null,x=!1,v=null,R=null,U=null,A=null,I=null,N=null,O=null,w=new Ht(0,0,0),L=0,V=!1,W=null,G=null,ne=null,j=null,ie=null,Ye.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Re,bindFramebuffer:tt,drawBuffers:He,useProgram:gt,setBlending:Tt,setMaterial:kt,setFlipSided:ut,setCullFace:Bt,setLineWidth:zt,setPolygonOffset:Xt,setScissorTest:xt,activeTexture:Ct,bindTexture:Y,unbindTexture:Vt,compressedTexImage2D:Mt,compressedTexImage3D:k,texImage2D:_e,texImage3D:Se,pixelStorei:Ke,getParameter:De,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Ae,texStorage3D:Oe,texSubImage2D:T,texSubImage3D:Q,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Fe,viewport:Ee,reset:ct}}function NE(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,S=new WeakMap,y=new Set;let _;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,T){return E?new OffscreenCanvas(k,T):iu("canvas")}function x(k,T,Q){let le=1;const ge=Mt(k);if((ge.width>Q||ge.height>Q)&&(le=Q/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ae=Math.floor(le*ge.width),Oe=Math.floor(le*ge.height);_===void 0&&(_=b(Ae,Oe));const _e=T?b(Ae,Oe):_;return _e.width=Ae,_e.height=Oe,_e.getContext("2d").drawImage(k,0,0,Ae,Oe),wt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ae+"x"+Oe+")."),_e}else return"data"in k&&wt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),k;return k}function v(k){return k.generateMipmaps}function R(k){r.generateMipmap(k)}function U(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(k,T,Q,le,ge,Ae=!1){if(k!==null){if(r[k]!==void 0)return r[k];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Oe;le&&(Oe=e.get("EXT_texture_norm16"),Oe||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=T;if(T===r.RED&&(Q===r.FLOAT&&(_e=r.R32F),Q===r.HALF_FLOAT&&(_e=r.R16F),Q===r.UNSIGNED_BYTE&&(_e=r.R8),Q===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.R16_EXT),Q===r.SHORT&&Oe&&(_e=Oe.R16_SNORM_EXT)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(_e=r.R8UI),Q===r.UNSIGNED_SHORT&&(_e=r.R16UI),Q===r.UNSIGNED_INT&&(_e=r.R32UI),Q===r.BYTE&&(_e=r.R8I),Q===r.SHORT&&(_e=r.R16I),Q===r.INT&&(_e=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(_e=r.RG32F),Q===r.HALF_FLOAT&&(_e=r.RG16F),Q===r.UNSIGNED_BYTE&&(_e=r.RG8),Q===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RG16_EXT),Q===r.SHORT&&Oe&&(_e=Oe.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(_e=r.RG8UI),Q===r.UNSIGNED_SHORT&&(_e=r.RG16UI),Q===r.UNSIGNED_INT&&(_e=r.RG32UI),Q===r.BYTE&&(_e=r.RG8I),Q===r.SHORT&&(_e=r.RG16I),Q===r.INT&&(_e=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),Q===r.UNSIGNED_INT&&(_e=r.RGB32UI),Q===r.BYTE&&(_e=r.RGB8I),Q===r.SHORT&&(_e=r.RGB16I),Q===r.INT&&(_e=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),Q===r.UNSIGNED_INT&&(_e=r.RGBA32UI),Q===r.BYTE&&(_e=r.RGBA8I),Q===r.SHORT&&(_e=r.RGBA16I),Q===r.INT&&(_e=r.RGBA32I)),T===r.RGB&&(Q===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGB16_EXT),Q===r.SHORT&&Oe&&(_e=Oe.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(_e=r.R11F_G11F_B10F)),T===r.RGBA){const Se=Ae?nu:Zt.getTransfer(ge);Q===r.FLOAT&&(_e=r.RGBA32F),Q===r.HALF_FLOAT&&(_e=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(_e=Se===cn?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGBA16_EXT),Q===r.SHORT&&Oe&&(_e=Oe.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function I(k,T){let Q;return k?T===null||T===Br||T===ul?Q=r.DEPTH24_STENCIL8:T===Or?Q=r.DEPTH32F_STENCIL8:T===cl&&(Q=r.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Br||T===ul?Q=r.DEPTH_COMPONENT24:T===Or?Q=r.DEPTH_COMPONENT32F:T===cl&&(Q=r.DEPTH_COMPONENT16),Q}function N(k,T){return v(k)===!0||k.isFramebufferTexture&&k.minFilter!==ei&&k.minFilter!==hi?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function O(k){const T=k.target;T.removeEventListener("dispose",O),L(T),T.isVideoTexture&&S.delete(T),T.isHTMLTexture&&y.delete(T)}function w(k){const T=k.target;T.removeEventListener("dispose",w),W(T)}function L(k){const T=s.get(k);if(T.__webglInit===void 0)return;const Q=k.source,le=M.get(Q);if(le){const ge=le[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&V(k),Object.keys(le).length===0&&M.delete(Q)}s.remove(k)}function V(k){const T=s.get(k);r.deleteTexture(T.__webglTexture);const Q=k.source,le=M.get(Q);delete le[T.__cacheKey],u.memory.textures--}function W(k){const T=s.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),s.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let ge=0;ge<T.__webglFramebuffer[le].length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[le][ge]);else r.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)r.deleteFramebuffer(T.__webglFramebuffer[le]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=k.textures;for(let le=0,ge=Q.length;le<ge;le++){const Ae=s.get(Q[le]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),u.memory.textures--),s.remove(Q[le])}s.remove(k)}let G=0;function ne(){G=0}function j(){return G}function ie(k){G=k}function he(){const k=G;return k>=o.maxTextures&&wt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),G+=1,k}function oe(k){const T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function J(k,T){const Q=s.get(k);if(k.isVideoTexture&&Y(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Q.__version!==k.version){const le=k.image;if(le===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Q,k,T);return}}else k.isExternalTexture&&(Q.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function Z(k,T){const Q=s.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Q.__version!==k.version){Re(Q,k,T);return}else k.isExternalTexture&&(Q.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function ee(k,T){const Q=s.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Q.__version!==k.version){Re(Q,k,T);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function F(k,T){const Q=s.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&Q.__version!==k.version){tt(Q,k,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const re={[pa]:r.REPEAT,[as]:r.CLAMP_TO_EDGE,[Pf]:r.MIRRORED_REPEAT},we={[ei]:r.NEAREST,[q_]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[hi]:r.LINEAR,[Gd]:r.LINEAR_MIPMAP_NEAREST,[ua]:r.LINEAR_MIPMAP_LINEAR},Ye={[K_]:r.NEVER,[tx]:r.ALWAYS,[Z_]:r.LESS,[yh]:r.LEQUAL,[J_]:r.EQUAL,[Mh]:r.GEQUAL,[Q_]:r.GREATER,[ex]:r.NOTEQUAL};function Xe(k,T){if(T.type===Or&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===hi||T.magFilter===Gd||T.magFilter===mc||T.magFilter===ua||T.minFilter===hi||T.minFilter===Gd||T.minFilter===mc||T.minFilter===ua)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,re[T.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,re[T.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,re[T.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,we[T.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,we[T.minFilter]),T.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,Ye[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ei||T.minFilter!==mc&&T.minFilter!==ua||T.type===Or&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ze(k,T){let Q=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",O));const le=T.source;let ge=M.get(le);ge===void 0&&(ge={},M.set(le,ge));const Ae=oe(T);if(Ae!==k.__cacheKey){ge[Ae]===void 0&&(ge[Ae]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ge[Ae].usedTimes++;const Oe=ge[k.__cacheKey];Oe!==void 0&&(ge[k.__cacheKey].usedTimes--,Oe.usedTimes===0&&V(T)),k.__cacheKey=Ae,k.__webglTexture=ge[Ae].texture}return Q}function ce(k,T,Q){return Math.floor(Math.floor(k/Q)/T)}function me(k,T,Q,le){const Ae=k.updateRanges;if(Ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Q,le,T.data);else{Ae.sort((Ke,Fe)=>Ke.start-Fe.start);let Oe=0;for(let Ke=1;Ke<Ae.length;Ke++){const Fe=Ae[Oe],Ee=Ae[Ke],Qe=Fe.start+Fe.count,je=ce(Ee.start,T.width,4),ct=ce(Fe.start,T.width,4);Ee.start<=Qe+1&&je===ct&&ce(Ee.start+Ee.count-1,T.width,4)===je?Fe.count=Math.max(Fe.count,Ee.start+Ee.count-Fe.start):(++Oe,Ae[Oe]=Ee)}Ae.length=Oe+1;const _e=t.getParameter(r.UNPACK_ROW_LENGTH),Se=t.getParameter(r.UNPACK_SKIP_PIXELS),De=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ke=0,Fe=Ae.length;Ke<Fe;Ke++){const Ee=Ae[Ke],Qe=Math.floor(Ee.start/4),je=Math.ceil(Ee.count/4),ct=Qe%T.width,B=Math.floor(Qe/T.width),Pe=je,de=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,ct,B,Pe,de,Q,le,T.data)}k.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,_e),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Re(k,T,Q){let le=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=r.TEXTURE_3D);const ge=Ze(k,T),Ae=T.source;t.bindTexture(le,k.__webglTexture,r.TEXTURE0+Q);const Oe=s.get(Ae);if(Ae.version!==Oe.__version||ge===!0){if(t.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const de=Zt.getPrimaries(Zt.workingColorSpace),Ie=T.colorSpace===Ds?null:Zt.getPrimaries(T.colorSpace),ze=T.colorSpace===Ds||de===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let Se=x(T.image,!1,o.maxTextureSize);Se=Vt(T,Se);const De=l.convert(T.format,T.colorSpace),Ke=l.convert(T.type);let Fe=A(T.internalFormat,De,Ke,T.normalized,T.colorSpace,T.isVideoTexture);Xe(le,T);let Ee;const Qe=T.mipmaps,je=T.isVideoTexture!==!0,ct=Oe.__version===void 0||ge===!0,B=Ae.dataReady,Pe=N(T,Se);if(T.isDepthTexture)Fe=I(T.format===da,T.type),ct&&(je?t.texStorage2D(r.TEXTURE_2D,1,Fe,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,Fe,Se.width,Se.height,0,De,Ke,null));else if(T.isDataTexture)if(Qe.length>0){je&&ct&&t.texStorage2D(r.TEXTURE_2D,Pe,Fe,Qe[0].width,Qe[0].height);for(let de=0,Ie=Qe.length;de<Ie;de++)Ee=Qe[de],je?B&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ee.width,Ee.height,De,Ke,Ee.data):t.texImage2D(r.TEXTURE_2D,de,Fe,Ee.width,Ee.height,0,De,Ke,Ee.data);T.generateMipmaps=!1}else je?(ct&&t.texStorage2D(r.TEXTURE_2D,Pe,Fe,Se.width,Se.height),B&&me(T,Se,De,Ke)):t.texImage2D(r.TEXTURE_2D,0,Fe,Se.width,Se.height,0,De,Ke,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Fe,Qe[0].width,Qe[0].height,Se.depth);for(let de=0,Ie=Qe.length;de<Ie;de++)if(Ee=Qe[de],T.format!==xr)if(De!==null)if(je){if(B)if(T.layerUpdates.size>0){const ze=O0(Ee.width,Ee.height,T.format,T.type);for(const Me of T.layerUpdates){const We=Ee.data.subarray(Me*ze/Ee.data.BYTES_PER_ELEMENT,(Me+1)*ze/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Me,Ee.width,Ee.height,1,De,We)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,Se.depth,De,Ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Fe,Ee.width,Ee.height,Se.depth,0,Ee.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,Se.depth,De,Ke,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Fe,Ee.width,Ee.height,Se.depth,0,De,Ke,Ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{je&&ct&&t.texStorage2D(r.TEXTURE_2D,Pe,Fe,Qe[0].width,Qe[0].height);for(let de=0,Ie=Qe.length;de<Ie;de++)Ee=Qe[de],T.format!==xr?De!==null?je?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Ee.width,Ee.height,De,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Fe,Ee.width,Ee.height,0,Ee.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?B&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ee.width,Ee.height,De,Ke,Ee.data):t.texImage2D(r.TEXTURE_2D,de,Fe,Ee.width,Ee.height,0,De,Ke,Ee.data)}else if(T.isDataArrayTexture)if(je){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Fe,Se.width,Se.height,Se.depth),B)if(T.layerUpdates.size>0){const de=O0(Se.width,Se.height,T.format,T.type);for(const Ie of T.layerUpdates){const ze=Se.data.subarray(Ie*de/Se.data.BYTES_PER_ELEMENT,(Ie+1)*de/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,Se.width,Se.height,1,De,Ke,ze)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,De,Ke,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,Se.width,Se.height,Se.depth,0,De,Ke,Se.data);else if(T.isData3DTexture)je?(ct&&t.texStorage3D(r.TEXTURE_3D,Pe,Fe,Se.width,Se.height,Se.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,De,Ke,Se.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,Se.width,Se.height,Se.depth,0,De,Ke,Se.data);else if(T.isFramebufferTexture){if(ct)if(je)t.texStorage2D(r.TEXTURE_2D,Pe,Fe,Se.width,Se.height);else{let de=Se.width,Ie=Se.height;for(let ze=0;ze<Pe;ze++)t.texImage2D(r.TEXTURE_2D,ze,Fe,de,Ie,0,De,Ke,null),de>>=1,Ie>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const de=r.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),Se.parentNode!==de){de.appendChild(Se),y.add(T),de.onpaint=Ie=>{const ze=Ie.changedElements;for(const Me of y)ze.includes(Me.image)&&(Me.needsUpdate=!0)},de.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Se);else{const ze=r.RGBA,Me=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,Me,We,Se)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&ct){const de=Mt(Qe[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Fe,de.width,de.height)}for(let de=0,Ie=Qe.length;de<Ie;de++)Ee=Qe[de],je?B&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,De,Ke,Ee):t.texImage2D(r.TEXTURE_2D,de,Fe,De,Ke,Ee);T.generateMipmaps=!1}else if(je){if(ct){const de=Mt(Se);t.texStorage2D(r.TEXTURE_2D,Pe,Fe,de.width,de.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Ke,Se)}else t.texImage2D(r.TEXTURE_2D,0,Fe,De,Ke,Se);v(T)&&R(le),Oe.__version=Ae.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function tt(k,T,Q){if(T.image.length!==6)return;const le=Ze(k,T),ge=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+Q);const Ae=s.get(ge);if(ge.version!==Ae.__version||le===!0){t.activeTexture(r.TEXTURE0+Q);const Oe=Zt.getPrimaries(Zt.workingColorSpace),_e=T.colorSpace===Ds?null:Zt.getPrimaries(T.colorSpace),Se=T.colorSpace===Ds||Oe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,Ke=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let Me=0;Me<6;Me++)!De&&!Ke?Fe[Me]=x(T.image[Me],!0,o.maxCubemapSize):Fe[Me]=Ke?T.image[Me].image:T.image[Me],Fe[Me]=Vt(T,Fe[Me]);const Ee=Fe[0],Qe=l.convert(T.format,T.colorSpace),je=l.convert(T.type),ct=A(T.internalFormat,Qe,je,T.normalized,T.colorSpace),B=T.isVideoTexture!==!0,Pe=Ae.__version===void 0||le===!0,de=ge.dataReady;let Ie=N(T,Ee);Xe(r.TEXTURE_CUBE_MAP,T);let ze;if(De){B&&Pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Ee.width,Ee.height);for(let Me=0;Me<6;Me++){ze=Fe[Me].mipmaps;for(let We=0;We<ze.length;We++){const Te=ze[We];T.format!==xr?Qe!==null?B?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,Te.width,Te.height,Qe,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,ct,Te.width,Te.height,0,Te.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,Te.width,Te.height,Qe,je,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,ct,Te.width,Te.height,0,Qe,je,Te.data)}}}else{if(ze=T.mipmaps,B&&Pe){ze.length>0&&Ie++;const Me=Mt(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ke){B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Fe[Me].width,Fe[Me].height,Qe,je,Fe[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,Fe[Me].width,Fe[Me].height,0,Qe,je,Fe[Me].data);for(let We=0;We<ze.length;We++){const ke=ze[We].image[Me].image;B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,ke.width,ke.height,Qe,je,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,ct,ke.width,ke.height,0,Qe,je,ke.data)}}else{B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Qe,je,Fe[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,Qe,je,Fe[Me]);for(let We=0;We<ze.length;We++){const Te=ze[We];B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,Qe,je,Te.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,ct,Qe,je,Te.image[Me])}}}v(T)&&R(r.TEXTURE_CUBE_MAP),Ae.__version=ge.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function He(k,T,Q,le,ge,Ae){const Oe=l.convert(Q.format,Q.colorSpace),_e=l.convert(Q.type),Se=A(Q.internalFormat,Oe,_e,Q.normalized,Q.colorSpace),De=s.get(T),Ke=s.get(Q);if(Ke.__renderTarget=T,!De.__hasExternalTextures){const Fe=Math.max(1,T.width>>Ae),Ee=Math.max(1,T.height>>Ae);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ae,Se,Fe,Ee,T.depth,0,Oe,_e,null):t.texImage2D(ge,Ae,Se,Fe,Ee,0,Oe,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),Ct(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ge,Ke.__webglTexture,0,xt(T)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,ge,Ke.__webglTexture,Ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(k,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,k),T.depthBuffer){const le=T.depthTexture,ge=le&&le.isDepthTexture?le.type:null,Ae=I(T.stencilBuffer,ge),Oe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ct(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt(T),Ae,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt(T),Ae,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,k)}else{const le=T.textures;for(let ge=0;ge<le.length;ge++){const Ae=le[ge],Oe=l.convert(Ae.format,Ae.colorSpace),_e=l.convert(Ae.type),Se=A(Ae.internalFormat,Oe,_e,Ae.normalized,Ae.colorSpace);Ct(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt(T),Se,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt(T),Se,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Se,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(k,T,Q){const le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,T.depthTexture);const De=l.convert(T.depthTexture.format),Ke=l.convert(T.depthTexture.type);let Fe;T.depthTexture.format===cs?Fe=r.DEPTH_COMPONENT24:T.depthTexture.format===da&&(Fe=r.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Fe,T.width,T.height,0,De,Ke,null)}}else J(T.depthTexture,0);const Ae=ge.__webglTexture,Oe=xt(T),_e=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,Se=T.depthTexture.format===da?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===cs)Ct(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,_e,Ae,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,Se,_e,Ae,0);else if(T.depthTexture.format===da)Ct(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,_e,Ae,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,Se,_e,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(k){const T=s.get(k),Q=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){const le=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=le}if(k.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let le=0;le<6;le++)Ft(T.__webglFramebuffer[le],k,le);else{const le=k.texture.mipmaps;le&&le.length>0?Ft(T.__webglFramebuffer[0],k,0):Ft(T.__webglFramebuffer,k,0)}else if(Q){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=r.createRenderbuffer(),gt(T.__webglDepthbuffer[le],k,!1);else{const ge=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=T.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ae)}}else{const le=k.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),gt(T.__webglDepthbuffer,k,!1);else{const ge=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ae)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(k,T,Q){const le=s.get(k);T!==void 0&&He(le.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ht(k)}function kt(k){const T=k.texture,Q=s.get(k),le=s.get(T);k.addEventListener("dispose",w);const ge=k.textures,Ae=k.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=T.version,u.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[_e]=[];for(let Se=0;Se<T.mipmaps.length;Se++)Q.__webglFramebuffer[_e][Se]=r.createFramebuffer()}else Q.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)Q.__webglFramebuffer[_e]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let _e=0,Se=ge.length;_e<Se;_e++){const De=s.get(ge[_e]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),u.memory.textures++)}if(k.samples>0&&Ct(k)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const Se=ge[_e];Q.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[_e]);const De=l.convert(Se.format,Se.colorSpace),Ke=l.convert(Se.type),Fe=A(Se.internalFormat,De,Ke,Se.normalized,Se.colorSpace,k.isXRRenderTarget===!0),Ee=xt(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,Fe,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Q.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),gt(Q.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)He(Q.__webglFramebuffer[_e][Se],k,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Se);else He(Q.__webglFramebuffer[_e],k,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(T)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let _e=0,Se=ge.length;_e<Se;_e++){const De=ge[_e],Ke=s.get(De);let Fe=r.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Fe=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ke.__webglTexture),Xe(Fe,De),He(Q.__webglFramebuffer,k,De,r.COLOR_ATTACHMENT0+_e,Fe,0),v(De)&&R(Fe)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(_e=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,le.__webglTexture),Xe(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)He(Q.__webglFramebuffer[Se],k,T,r.COLOR_ATTACHMENT0,_e,Se);else He(Q.__webglFramebuffer,k,T,r.COLOR_ATTACHMENT0,_e,0);v(T)&&R(_e),t.unbindTexture()}k.depthBuffer&&ht(k)}function ut(k){const T=k.textures;for(let Q=0,le=T.length;Q<le;Q++){const ge=T[Q];if(v(ge)){const Ae=U(k),Oe=s.get(ge).__webglTexture;t.bindTexture(Ae,Oe),R(Ae),t.unbindTexture()}}}const Bt=[],zt=[];function Xt(k){if(k.samples>0){if(Ct(k)===!1){const T=k.textures,Q=k.width,le=k.height;let ge=r.COLOR_BUFFER_BIT;const Ae=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(k),_e=T.length>1;if(_e)for(let De=0;De<T.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Se=k.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let De=0;De<T.length;De++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Ke=s.get(T[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,Q,le,0,0,Q,le,ge,r.NEAREST),m===!0&&(Bt.length=0,zt.length=0,Bt.push(r.COLOR_ATTACHMENT0+De),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Bt.push(Ae),zt.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<T.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Ke=s.get(T[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&m){const T=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function xt(k){return Math.min(o.maxSamples,k.samples)}function Ct(k){const T=s.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(k){const T=u.render.frame;S.get(k)!==T&&(S.set(k,T),k.update())}function Vt(k,T){const Q=k.colorSpace,le=k.format,ge=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Q!==tu&&Q!==Ds&&(Zt.getTransfer(Q)===cn?(le!==xr||ge!==ji)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",Q)),T}function Mt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(p.width=k.naturalWidth||k.width,p.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(p.width=k.displayWidth,p.height=k.displayHeight):(p.width=k.width,p.height=k.height),p}this.allocateTextureUnit=he,this.resetTextureUnits=ne,this.getTextureUnits=j,this.setTextureUnits=ie,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=F,this.rebindTextures=Tt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IE(r,e){function t(s,o=Ds){let l;const u=Zt.getTransfer(o);if(s===ji)return r.UNSIGNED_BYTE;if(s===gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Eg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===wg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===yg)return r.BYTE;if(s===Mg)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===mh)return r.INT;if(s===Br)return r.UNSIGNED_INT;if(s===Or)return r.FLOAT;if(s===zr)return r.HALF_FLOAT;if(s===Tg)return r.ALPHA;if(s===Ag)return r.RGB;if(s===xr)return r.RGBA;if(s===cs)return r.DEPTH_COMPONENT;if(s===da)return r.DEPTH_STENCIL;if(s===bg)return r.RED;if(s===_h)return r.RED_INTEGER;if(s===ma)return r.RG;if(s===xh)return r.RG_INTEGER;if(s===Sh)return r.RGBA_INTEGER;if(s===jc||s===$c||s===Yc||s===Kc)if(u===cn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===jc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===jc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lf||s===Nf||s===If||s===Df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===If)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uf||s===Of||s===Ff||s===kf||s===Bf||s===Qc||s===zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Uf||s===Of)return u===cn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Ff)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===kf)return l.COMPRESSED_R11_EAC;if(s===Bf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Qc)return l.COMPRESSED_RG11_EAC;if(s===zf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Vf||s===Hf||s===Gf||s===Wf||s===Xf||s===qf||s===jf||s===$f||s===Yf||s===Kf||s===Zf||s===Jf||s===Qf||s===eh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Vf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$f)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qf)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===eh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===th||s===nh||s===ih)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===th)return u===cn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ih)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rh||s===sh||s===eu||s===ah)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===rh)return l.COMPRESSED_RED_RGTC1_EXT;if(s===sh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===eu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ah)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Fg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Mr({vertexShader:DE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new ga(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends va{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,S=null,y=null,_=null,M=null,E=null;const b=typeof XRWebGLBinding<"u",x=new OE,v={},R=t.getContextAttributes();let U=null,A=null;const I=[],N=[],O=new Wt;let w=null,L=null;const V=new qi;V.viewport=new An;const W=new qi;W.viewport=new An;const G=[V,W],ne=new Xx;let j=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let me=I[ce];return me===void 0&&(me=new Zd,I[ce]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ce){let me=I[ce];return me===void 0&&(me=new Zd,I[ce]=me),me.getGripSpace()},this.getHand=function(ce){let me=I[ce];return me===void 0&&(me=new Zd,I[ce]=me),me.getHandSpace()};function he(ce){const me=N.indexOf(ce.inputSource);if(me===-1)return;const Re=I[me];Re!==void 0&&(Re.update(ce.inputSource,ce.frame,p||u),Re.dispatchEvent({type:ce.type,data:ce.inputSource}))}function oe(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",J);for(let ce=0;ce<I.length;ce++){const me=N[ce];me!==null&&(N[ce]=null,I[ce].disconnect(me))}j=null,ie=null,x.reset();for(const ce in v)delete v[ce];if(e.setRenderTarget(U),M=null,_=null,y=null,o=null,A=null,Ze.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),L!==null){const ce=L.camera;ce.fov=L.fov,ce.zoom=L.zoom,ce.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,s.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){f=ce,s.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return y===null&&b&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",J),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,tt=null,He=null;R.depth&&(He=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=R.stencil?da:cs,tt=R.stencil?ul:Br);const gt={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};y=this.getBinding(),_=y.createProjectionLayer(gt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new Sr(_.textureWidth,_.textureHeight,{format:xr,type:ji,depthTexture:new fl(_.textureWidth,_.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Re={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new Sr(M.framebufferWidth,M.framebufferHeight,{format:xr,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(ce){for(let me=0;me<ce.removed.length;me++){const Re=ce.removed[me],tt=N.indexOf(Re);tt>=0&&(N[tt]=null,I[tt].disconnect(Re))}for(let me=0;me<ce.added.length;me++){const Re=ce.added[me];let tt=N.indexOf(Re);if(tt===-1){for(let gt=0;gt<I.length;gt++)if(gt>=N.length){N.push(Re),tt=gt;break}else if(N[gt]===null){N[gt]=Re,tt=gt;break}if(tt===-1)break}const He=I[tt];He&&He.connect(Re)}}const Z=new te,ee=new te;function F(ce,me,Re){Z.setFromMatrixPosition(me.matrixWorld),ee.setFromMatrixPosition(Re.matrixWorld);const tt=Z.distanceTo(ee),He=me.projectionMatrix.elements,gt=Re.projectionMatrix.elements,Ft=He[14]/(He[10]-1),ht=He[14]/(He[10]+1),Tt=(He[9]+1)/He[5],kt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],Bt=(gt[8]+1)/gt[0],zt=Ft*ut,Xt=Ft*Bt,xt=tt/(-ut+Bt),Ct=xt*-ut;if(me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ct),ce.translateZ(xt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),He[10]===-1)ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Y=Ft+xt,Vt=ht+xt,Mt=zt-Ct,k=Xt+(tt-Ct),T=Tt*ht/Vt*Y,Q=kt*ht/Vt*Y;ce.projectionMatrix.makePerspective(Mt,k,T,Q,Y,Vt),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function re(ce,me){me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let me=ce.near,Re=ce.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),ne.near=W.near=V.near=me,ne.far=W.far=V.far=Re,(j!==ne.near||ie!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),j=ne.near,ie=ne.far),ne.layers.mask=ce.layers.mask|6,V.layers.mask=ne.layers.mask&-5,W.layers.mask=ne.layers.mask&-3;const tt=ce.parent,He=ne.cameras;re(ne,tt);for(let gt=0;gt<He.length;gt++)re(He[gt],tt);He.length===2?F(ne,V,W):ne.projectionMatrix.copy(V.projectionMatrix),L===null&&ce.isPerspectiveCamera&&(L={camera:ce,fov:ce.fov,zoom:ce.zoom}),we(ce,ne,tt)};function we(ce,me,Re){Re===null?ce.matrix.copy(me.matrixWorld):(ce.matrix.copy(Re.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=lh*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ce){m=ce,_!==null&&(_.fixedFoveation=ce),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ne)},this.getCameraTexture=function(ce){return v[ce]};let Ye=null;function Xe(ce,me){if(S=me.getViewerPose(p||u),E=me,S!==null){const Re=S.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let tt=!1;Re.length!==ne.cameras.length&&(ne.cameras.length=0,tt=!0);for(let ht=0;ht<Re.length;ht++){const Tt=Re[ht];let kt=null;if(M!==null)kt=M.getViewport(Tt);else{const Bt=y.getViewSubImage(_,Tt);kt=Bt.viewport,ht===0&&(e.setRenderTargetTextures(A,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(A))}let ut=G[ht];ut===void 0&&(ut=new qi,ut.layers.enable(ht),ut.viewport=new An,G[ht]=ut),ut.matrix.fromArray(Tt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Tt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(kt.x,kt.y,kt.width,kt.height),ht===0&&(ne.matrix.copy(ut.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),tt===!0&&ne.cameras.push(ut)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){y=s.getBinding();const ht=y.getDepthInformation(Re[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,o.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),y=s.getBinding();for(let ht=0;ht<Re.length;ht++){const Tt=Re[ht].camera;if(Tt){let kt=v[Tt];kt||(kt=new Fg,v[Tt]=kt);const ut=y.getCameraImage(Tt);kt.sourceTexture=ut}}}}for(let Re=0;Re<I.length;Re++){const tt=N[Re],He=I[Re];tt!==null&&He!==void 0&&He.update(tt,me,p||u)}Ye&&Ye(ce,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ze=new Vg;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(ce){Ye=ce},this.dispose=function(){}}}const kE=new yn,$g=new Rt;$g.set(-1,0,0,0,1,0,0,0,1);function BE(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,kg(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,R,U,A){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),S(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&M(x,v,A)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),b(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?m(x,v,R,U):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Oi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Oi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const R=e.get(v),U=R.envMap,A=R.envMapRotation;U&&(x.envMap.value=U,x.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(A)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply($g),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,R,U){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*R,x.scale.value=U*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function S(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,R){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Oi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const R=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function zE(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,I){const N=I.program;s.uniformBlockBinding(A,N)}function p(A,I){let N=o[A.id];N===void 0&&(x(A),N=S(A),o[A.id]=N,A.addEventListener("dispose",R));const O=I.program;s.updateUBOMapping(A,O);const w=e.render.frame;l[A.id]!==w&&(_(A),l[A.id]=w)}function S(A){const I=y();A.__bindingPointIndex=I;const N=r.createBuffer(),O=A.__size,w=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,O,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function y(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const I=o[A.id],N=A.uniforms,O=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let w=0,L=N.length;w<L;w++){const V=N[w];if(Array.isArray(V))for(let W=0,G=V.length;W<G;W++)M(V[W],w,W,O);else M(V,w,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(A,I,N,O){if(b(A,I,N,O)===!0){const w=A.__offset,L=A.value;if(Array.isArray(L)){let V=0;for(let W=0;W<L.length;W++){const G=L[W],ne=v(G);E(G,A.__data,V),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(V+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,A.__data)}}function E(A,I,N){typeof A=="number"||typeof A=="boolean"?I[0]=A:A.isMatrix3?(I[0]=A.elements[0],I[1]=A.elements[1],I[2]=A.elements[2],I[3]=0,I[4]=A.elements[3],I[5]=A.elements[4],I[6]=A.elements[5],I[7]=0,I[8]=A.elements[6],I[9]=A.elements[7],I[10]=A.elements[8],I[11]=0):ArrayBuffer.isView(A)?I.set(new A.constructor(A.buffer,A.byteOffset,I.length)):A.toArray(I,N)}function b(A,I,N,O){const w=A.value,L=I+"_"+N;if(O[L]===void 0)return typeof w=="number"||typeof w=="boolean"?O[L]=w:ArrayBuffer.isView(w)?O[L]=w.slice():O[L]=w.clone(),!0;{const V=O[L];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return O[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function x(A){const I=A.uniforms;let N=0;const O=16;for(let L=0,V=I.length;L<V;L++){const W=Array.isArray(I[L])?I[L]:[I[L]];for(let G=0,ne=W.length;G<ne;G++){const j=W[G],ie=Array.isArray(j.value)?j.value:[j.value];for(let he=0,oe=ie.length;he<oe;he++){const J=ie[he],Z=v(J),ee=N%O,F=ee%Z.boundary,re=ee+F;N+=F,re!==0&&O-re<Z.storage&&(N+=O-re),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=Z.storage}}}const w=N%O;return w>0&&(N+=O-w),A.__size=N,A.__cache={},this}function v(A){const I={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(I.boundary=4,I.storage=4):A.isVector2?(I.boundary=8,I.storage=8):A.isVector3||A.isColor?(I.boundary=16,I.storage=12):A.isVector4?(I.boundary=16,I.storage=16):A.isMatrix3?(I.boundary=48,I.storage=48):A.isMatrix4?(I.boundary=64,I.storage=64):A.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(I.boundary=16,I.storage=A.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",A),I}function R(A){const I=A.target;I.removeEventListener("dispose",R);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function U(){for(const A in o)r.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:m,update:p,dispose:U}}const VE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ir=null;function HE(){return Ir===null&&(Ir=new Cx(VE,16,16,ma,zr),Ir.name="DFG_LUT",Ir.minFilter=hi,Ir.magFilter=hi,Ir.wrapS=as,Ir.wrapT=as,Ir.generateMipmaps=!1,Ir.needsUpdate=!0),Ir}class GE{constructor(e={}){const{canvas:t=rx(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ji}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const b=M,x=new Set([Sh,xh,_h]),v=new Set([ji,Br,cl,ul,gh,vh]),R=new Uint32Array(4),U=new Int32Array(4),A=new te;let I=null,N=null;const O=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let W=!1,G=null,ne=null,j=null,ie=null;this._outputColorSpace=ir;let he=0,oe=0,J=null,Z=-1,ee=null;const F=new An,re=new An;let we=null;const Ye=new Ht(0);let Xe=0,Ze=t.width,ce=t.height,me=1,Re=null,tt=null;const He=new An(0,0,Ze,ce),gt=new An(0,0,Ze,ce);let Ft=!1;const ht=new Ah;let Tt=!1,kt=!1;const ut=new yn,Bt=new te,zt=new An,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ct(){return J===null?me:1}let Y=s;function Vt(P,$){return t.getContext(P,$)}let Mt,k,T,Q,le,ge,Ae,Oe,_e,Se,De,Ke,Fe,Ee,Qe,je,ct,B,Pe,de,Ie,ze,Me;try{const P={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",qt,!1),Y===null){const $="webgl2";if(Y=Vt($,P),Y===null)throw Vt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(P){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),sn("WebGLRenderer: "+P.message),P}function We(){Mt=new HM(Y),Mt.init(),Ie=new IE(Y,Mt),k=new NM(Y,Mt,e,Ie),T=new LE(Y,Mt),k.reversedDepthBuffer&&_&&T.buffers.depth.setReversed(!0),ne=Y.createFramebuffer(),j=Y.createFramebuffer(),ie=Y.createFramebuffer(),Q=new XM(Y),le=new vE,ge=new NE(Y,Mt,T,le,k,Ie,Q),Ae=new VM(V),Oe=new jx(Y),ze=new PM(Y,Oe),_e=new GM(Y,Oe,Q,ze),Se=new jM(Y,_e,Oe,ze,Q),B=new qM(Y,k,ge),Qe=new IM(le),De=new gE(V,Ae,Mt,k,ze,Qe),Ke=new BE(V,le),Fe=new xE,Ee=new TE(Mt),ct=new CM(V,Ae,T,Se,E,m),je=new PE(V,Se,k),Me=new zE(Y,Q,k,T),Pe=new LM(Y,Mt,Q),de=new WM(Y,Mt,Q),Q.programs=De.programs,V.capabilities=k,V.extensions=Mt,V.properties=le,V.renderLists=Fe,V.shadowMap=je,V.state=T,V.info=Q}b!==ji&&(L=new YM(b,t.width,t.height,f,o,l));const Te=new FE(V,Y);this.xr=Te,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=Mt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Mt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(P){P!==void 0&&(me=P,this.setSize(Ze,ce,!1))},this.getSize=function(P){return P.set(Ze,ce)},this.setSize=function(P,$,pe=!0){if(Te.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=P,ce=$,t.width=Math.floor(P*me),t.height=Math.floor($*me),pe===!0&&(t.style.width=P+"px",t.style.height=$+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(Ze*me,ce*me).floor()},this.setDrawingBufferSize=function(P,$,pe){Ze=P,ce=$,me=pe,t.width=Math.floor(P*pe),t.height=Math.floor($*pe),this.setViewport(0,0,P,$)},this.setEffects=function(P){if(b===ji){sn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let $=0;$<P.length;$++)if(P[$].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(He)},this.setViewport=function(P,$,pe,ae){P.isVector4?He.set(P.x,P.y,P.z,P.w):He.set(P,$,pe,ae),T.viewport(F.copy(He).multiplyScalar(me).round())},this.getScissor=function(P){return P.copy(gt)},this.setScissor=function(P,$,pe,ae){P.isVector4?gt.set(P.x,P.y,P.z,P.w):gt.set(P,$,pe,ae),T.scissor(re.copy(gt).multiplyScalar(me).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(P){T.setScissorTest(Ft=P)},this.setOpaqueSort=function(P){Re=P},this.setTransparentSort=function(P){tt=P},this.getClearColor=function(P){return P.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,pe=!0){let ae=0;if(P){let se=!1;if(J!==null){const Be=J.texture.format;se=x.has(Be)}if(se){const Be=J.texture.type,Ve=v.has(Be),Ge=ct.getClearColor(),et=ct.getClearAlpha(),it=Ge.r,St=Ge.g,Et=Ge.b;Ve?(R[0]=it,R[1]=St,R[2]=Et,R[3]=et,Y.clearBufferuiv(Y.COLOR,0,R)):(U[0]=it,U[1]=St,U[2]=Et,U[3]=et,Y.clearBufferiv(Y.COLOR,0,U))}else ae|=Y.COLOR_BUFFER_BIT}$&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),G=P},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),ct.dispose(),Fe.dispose(),Ee.dispose(),le.dispose(),Ae.dispose(),Se.dispose(),ze.dispose(),Me.dispose(),De.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Mi),Te.removeEventListener("sessionend",$i),It.stop()};function ke(P){P.preventDefault(),l0("WebGLRenderer: Context Lost."),W=!0}function pt(){l0("WebGLRenderer: Context Restored."),W=!1;const P=Q.autoReset,$=je.enabled,pe=je.autoUpdate,ae=je.needsUpdate,se=je.type;We(),Q.autoReset=P,je.enabled=$,je.autoUpdate=pe,je.needsUpdate=ae,je.type=se}function qt(P){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qt(P){const $=P.target;$.removeEventListener("dispose",Qt),Mn($)}function Mn(P){ti(P),le.remove(P)}function ti(P){const $=le.get(P).programs;$!==void 0&&($.forEach(function(pe){De.releaseProgram(pe)}),P.isShaderMaterial&&De.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,pe,ae,se,Be){$===null&&($=Xt);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ge=$t(P,$,pe,ae,se);T.setMaterial(ae,Ve);let et=pe.index,it=1;if(ae.wireframe===!0){if(et=_e.getWireframeAttribute(pe),et===void 0)return;it=2}const St=pe.drawRange,Et=pe.attributes.position;let $e=St.start*it,Ut=(St.start+St.count)*it;Be!==null&&($e=Math.max($e,Be.start*it),Ut=Math.min(Ut,(Be.start+Be.count)*it)),et!==null?($e=Math.max($e,0),Ut=Math.min(Ut,et.count)):Et!=null&&($e=Math.max($e,0),Ut=Math.min(Ut,Et.count));const un=Ut-$e;if(un<0||un===1/0)return;ze.setup(se,ae,Ge,pe,et);let en,h=Pe;if(et!==null&&(en=Oe.get(et),h=de,h.setIndex(en)),se.isMesh)ae.wireframe===!0?(T.setLineWidth(ae.wireframeLinewidth*Ct()),h.setMode(Y.LINES)):h.setMode(Y.TRIANGLES);else if(se.isLine){let z=ae.linewidth;z===void 0&&(z=1),T.setLineWidth(z*Ct()),se.isLineSegments?h.setMode(Y.LINES):se.isLineLoop?h.setMode(Y.LINE_LOOP):h.setMode(Y.LINE_STRIP)}else se.isPoints?h.setMode(Y.POINTS):se.isSprite&&h.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))h.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const z=se._multiDrawStarts,X=se._multiDrawCounts,ye=se._multiDrawCount,Le=et?Oe.get(et).bytesPerElement:1,Dt=le.get(ae).currentProgram.getUniforms();for(let ft=0;ft<ye;ft++)Dt.setValue(Y,"_gl_DrawID",ft),h.render(z[ft]/Le,X[ft])}else if(se.isInstancedMesh)h.renderInstances($e,un,se.count);else if(pe.isInstancedBufferGeometry){const z=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,X=Math.min(pe.instanceCount,z);h.renderInstances($e,un,X)}else h.render($e,un)};function dt(P,$,pe,ae){G!==null&&P.isNodeMaterial&&G.setObject(ae,P),Tt===!0&&Qe.setState(P,pe,!1),P.transparent===!0&&P.side===Ui&&P.forceSinglePass===!1?(P.side=Oi,P.needsUpdate=!0,mi(P,$,ae),P.side=fa,P.needsUpdate=!0,mi(P,$,ae),P.side=Ui):mi(P,$,ae)}this.compile=function(P,$,pe=null){pe===null&&(pe=P),G!==null&&G.renderStart(P,$,pe),N=Ee.get(pe),N.init($),w.push(N),pe.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),P!==pe&&P.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights(),G!==null&&G.updateLights(N.state.lightsArray),kt=this.localClippingEnabled,Tt=Qe.init(this.clippingPlanes,kt),Tt===!0&&Qe.setGlobalState(this.clippingPlanes,$),G!==null&&je.render(N.state.shadowsArray,pe,$);const ae=new Set;return P.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Be=se.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const Ge=Be[Ve];dt(Ge,pe,$,se),ae.add(Ge)}else dt(Be,pe,$,se),ae.add(Be)}),N=w.pop(),G!==null&&G.renderEnd(),ae},this.compileAsync=function(P,$,pe=null){const ae=this.compile(P,$,pe);return new Promise(se=>{function Be(){if(ae.forEach(function(Ve){const et=le.get(Ve).currentProgram;(et===void 0||et.isReady())&&ae.delete(Ve)}),ae.size===0){se(P);return}setTimeout(Be,10)}Mt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ni=null;function Er(P){ni&&ni(P)}function Mi(){It.stop()}function $i(){It.start()}const It=new Vg;It.setAnimationLoop(Er),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(P){ni=P,Te.setAnimationLoop(P),P===null?It.stop():It.start()},Te.addEventListener("sessionstart",Mi),Te.addEventListener("sessionend",$i),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;G!==null&&G.renderStart(P,$);const pe=Te.enabled===!0&&Te.isPresenting===!0,ae=L!==null&&(J===null||pe)&&L.begin(V,J);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera($),$=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(V,P,$,J),N=Ee.get(P,w.length),N.init($),N.state.textureUnits=ge.getTextureUnits(),w.push(N),ut.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ht.setFromProjectionMatrix(ut,Fr,$.reversedDepth),kt=this.localClippingEnabled,Tt=Qe.init(this.clippingPlanes,kt),I=Fe.get(P,O.length),I.init(),O.push(I),Te.enabled===!0&&Te.isPresenting===!0){const Ve=V.xr.getDepthSensingMesh();Ve!==null&&zn(Ve,$,-1/0,V.sortObjects)}zn(P,$,0,V.sortObjects),I.finish(),G!==null&&G.updateLights(N.state.lightsArray),V.sortObjects===!0&&I.sort(Re,tt),xt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,xt&&ct.addToRenderList(I,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Tt===!0&&Qe.beginShadows();const se=N.state.shadowsArray;if(je.render(se,P,$),Tt===!0&&Qe.endShadows(),(ae&&L.hasRenderPass())===!1){const Ve=I.opaque,Ge=I.transmissive;if(N.setupLights(),$.isArrayCamera){const et=$.cameras;if(Ge.length>0)for(let it=0,St=et.length;it<St;it++){const Et=et[it];jt(Ve,Ge,P,Et)}xt&&ct.render(P);for(let it=0,St=et.length;it<St;it++){const Et=et[it];Dn(I,P,Et,Et.viewport)}}else Ge.length>0&&jt(Ve,Ge,P,$),xt&&ct.render(P),Dn(I,P,$)}J!==null&&oe===0&&(ge.updateMultisampleRenderTarget(J),ge.updateRenderTargetMipmap(J)),ae&&L.end(V),P.isScene===!0&&P.onAfterRender(V,P,$),ze.resetDefaultState(),Z=-1,ee=null,w.pop(),w.length>0?(N=w[w.length-1],ge.setTextureUnits(N.state.textureUnits),Tt===!0&&Qe.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,G!==null&&G.renderEnd()};function zn(P,$,pe,ae){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)pe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLightProbeGrid)N.pushLightProbeGrid(P);else if(P.isLight)N.pushLight(P),P.castShadow&&N.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ht)){ae&&zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ut);const Ve=Se.update(P),Ge=P.material;Ge.visible&&I.push(P,Ve,Ge,pe,zt.z,null,$)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ht))){const Ve=Se.update(P),Ge=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),zt.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),zt.copy(Ve.boundingSphere.center)),zt.applyMatrix4(P.matrixWorld).applyMatrix4(ut)),Array.isArray(Ge)){const et=Ve.groups;for(let it=0,St=et.length;it<St;it++){const Et=et[it],$e=Ge[Et.materialIndex];$e&&$e.visible&&I.push(P,Ve,$e,pe,zt.z,Et,$)}}else Ge.visible&&I.push(P,Ve,Ge,pe,zt.z,null,$)}}const Be=P.children;for(let Ve=0,Ge=Be.length;Ve<Ge;Ve++)zn(Be[Ve],$,pe,ae)}function Dn(P,$,pe,ae){const{opaque:se,transmissive:Be,transparent:Ve}=P;N.setupLightsView(pe),Tt===!0&&Qe.setGlobalState(V.clippingPlanes,pe),ae&&T.viewport(F.copy(ae)),se.length>0&&pn(se,$,pe),Be.length>0&&pn(Be,$,pe),Ve.length>0&&pn(Ve,$,pe),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function jt(P,$,pe,ae){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const $e=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new Sr(1,1,{generateMipmaps:!0,type:$e?zr:ji,minFilter:ua,samples:Math.max(4,k.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const Be=N.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||F;Be.setSize(Ve.z*V.transmissionResolutionScale,Ve.w*V.transmissionResolutionScale);const Ge=V.getRenderTarget(),et=V.getActiveCubeFace(),it=V.getActiveMipmapLevel();V.setRenderTarget(Be),V.getClearColor(Ye),Xe=V.getClearAlpha(),Xe<1&&V.setClearColor(16777215,.5),V.clear(),xt&&ct.render(pe);const St=V.toneMapping;V.toneMapping=kr;const Et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),Tt===!0&&Qe.setGlobalState(V.clippingPlanes,ae),pn(P,pe,ae),ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ut=0,un=$.length;Ut<un;Ut++){const en=$[Ut],{object:h,geometry:z,material:X,group:ye}=en;if(X.side===Ui&&h.layers.test(ae.layers)){const Le=X.side;X.side=Oi,X.needsUpdate=!0,ii(h,pe,ae,z,X,ye),X.side=Le,X.needsUpdate=!0,$e=!0}}$e===!0&&(ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be))}V.setRenderTarget(Ge,et,it),V.setClearColor(Ye,Xe),Et!==void 0&&(ae.viewport=Et),V.toneMapping=St}function pn(P,$,pe){const ae=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Be=P.length;se<Be;se++){const Ve=P[se],{object:Ge,geometry:et,group:it}=Ve;let St=Ve.material;St.allowOverride===!0&&ae!==null&&(St=ae),Ge.layers.test(pe.layers)&&ii(Ge,$,pe,et,St,it)}}function ii(P,$,pe,ae,se,Be){G!==null&&se.isNodeMaterial&&G.setObject(P,se),P.onBeforeRender(V,$,pe,ae,se,Be),P.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(V,$,pe,ae,P,Be),se.transparent===!0&&se.side===Ui&&se.forceSinglePass===!1?(se.side=Oi,se.needsUpdate=!0,V.renderBufferDirect(pe,$,ae,se,P,Be),se.side=fa,se.needsUpdate=!0,V.renderBufferDirect(pe,$,ae,se,P,Be),se.side=Ui):V.renderBufferDirect(pe,$,ae,se,P,Be),P.onAfterRender(V,$,pe,ae,se,Be)}function mi(P,$,pe){$.isScene!==!0&&($=Xt);const ae=le.get(P),se=N.state.lights,Be=N.state.shadowsArray,Ve=se.state.version,Ge=De.getParameters(P,se.state,Be,$,pe,N.state.lightProbeGridArray),et=De.getProgramCacheKey(Ge);let it=ae.programs;ae.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?$.environment:null,ae.fog=$.fog;const St=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ae.envMap=Ae.get(P.envMap||ae.environment,St),ae.envMapRotation=ae.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",Qt),it=new Map,ae.programs=it);let Et=it.get(et);if(Et!==void 0){if(ae.currentProgram===Et&&ae.lightsStateVersion===Ve)return Fi(P,Ge),Et}else Ge.uniforms=De.getUniforms(P),G!==null&&P.isNodeMaterial&&G.build(P,pe,Ge),P.onBeforeCompile(Ge,V),Et=De.acquireProgram(Ge,et),it.set(et,Et),ae.uniforms=Ge.uniforms;const $e=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=Qe.uniform),Fi(P,Ge),ae.needsLights=wr(P),ae.lightsStateVersion=Ve,ae.needsLights&&($e.ambientLightColor.value=se.state.ambient,$e.lightProbe.value=se.state.probe,$e.sunLights.value=se.state.sun,$e.sunLightShadows.value=se.state.sunShadow,$e.directionalLights.value=se.state.directional,$e.directionalLightShadows.value=se.state.directionalShadow,$e.spotLights.value=se.state.spot,$e.spotLightShadows.value=se.state.spotShadow,$e.rectAreaLights.value=se.state.rectArea,$e.ltc_1.value=se.state.rectAreaLTC1,$e.ltc_2.value=se.state.rectAreaLTC2,$e.pointLights.value=se.state.point,$e.pointLightShadows.value=se.state.pointShadow,$e.hemisphereLights.value=se.state.hemi,$e.sunShadowMatrix.value=se.state.sunShadowMatrix,$e.sunShadowCascade.value=se.state.sunShadowCascade,$e.directionalShadowMatrix.value=se.state.directionalShadowMatrix,$e.spotLightMatrix.value=se.state.spotLightMatrix,$e.spotLightMap.value=se.state.spotLightMap,$e.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=Et,ae.uniformsList=null,Et}function sr(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Jc.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Fi(P,$){const pe=le.get(P);pe.outputColorSpace=$.outputColorSpace,pe.batching=$.batching,pe.batchingColor=$.batchingColor,pe.instancing=$.instancing,pe.instancingColor=$.instancingColor,pe.instancingMorph=$.instancingMorph,pe.skinning=$.skinning,pe.morphTargets=$.morphTargets,pe.morphNormals=$.morphNormals,pe.morphColors=$.morphColors,pe.morphTargetsCount=$.morphTargetsCount,pe.numClippingPlanes=$.numClippingPlanes,pe.numIntersection=$.numClipIntersection,pe.vertexAlphas=$.vertexAlphas,pe.vertexTangents=$.vertexTangents,pe.toneMapping=$.toneMapping}function Yi(P,$){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;A.setFromMatrixPosition($.matrixWorld);for(let pe=0,ae=P.length;pe<ae;pe++){const se=P[pe];if(se.texture!==null&&se.boundingBox.containsPoint(A))return se}return null}function $t(P,$,pe,ae,se){$.isScene!==!0&&($=Xt),ge.resetTextureUnits();const Be=$.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?$.environment:null,Ge=J===null?V.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zt.workingColorSpace,et=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,it=Ae.get(ae.envMap||Ve,et),St=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Et=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),$e=!!pe.morphAttributes.position,Ut=!!pe.morphAttributes.normal,un=!!pe.morphAttributes.color;let en=kr;ae.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(en=V.toneMapping);const h=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,z=h!==void 0?h.length:0,X=le.get(ae),ye=N.state.lights;if(Tt===!0&&(kt===!0||P!==ee)){const mt=P===ee&&ae.id===Z;Qe.setState(ae,P,mt)}let Le=!1;ae.version===X.__version?(X.needsLights&&X.lightsStateVersion!==ye.state.version||X.outputColorSpace!==Ge||se.isBatchedMesh&&X.batching===!1||!se.isBatchedMesh&&X.batching===!0||se.isBatchedMesh&&X.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&X.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&X.instancing===!1||!se.isInstancedMesh&&X.instancing===!0||se.isSkinnedMesh&&X.skinning===!1||!se.isSkinnedMesh&&X.skinning===!0||se.isInstancedMesh&&X.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&X.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&X.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&X.instancingMorph===!1&&se.morphTexture!==null||X.envMap!==it||ae.fog===!0&&X.fog!==Be||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==Qe.numPlanes||X.numIntersection!==Qe.numIntersection)||X.vertexAlphas!==St||X.vertexTangents!==Et||X.morphTargets!==$e||X.morphNormals!==Ut||X.morphColors!==un||X.toneMapping!==en||X.morphTargetsCount!==z||!!X.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,X.__version=ae.version);let Dt=X.currentProgram;Le===!0&&(Dt=mi(ae,$,se),G&&ae.isNodeMaterial&&G.onUpdateProgram(ae,Dt,X));let ft=!1,an=!1,En=!1;const At=Dt.getUniforms(),Yt=X.uniforms;if(T.useProgram(Dt.program)&&(ft=!0,an=!0,En=!0),ae.id!==Z&&(Z=ae.id,an=!0),X.needsLights){const mt=Yi(N.state.lightProbeGridArray,se);X.lightProbeGrid!==mt&&(X.lightProbeGrid=mt,an=!0)}if(ft||ee!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),At.setValue(Y,"projectionMatrix",P.projectionMatrix),At.setValue(Y,"viewMatrix",P.matrixWorldInverse);const Kt=At.map.cameraPosition;Kt!==void 0&&Kt.setValue(Y,Bt.setFromMatrixPosition(P.matrixWorld)),k.logarithmicDepthBuffer&&At.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&At.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),ee!==P&&(ee=P,an=!0,En=!0)}if(X.needsLights&&(ye.state.sunShadowMap.length>0&&At.setValue(Y,"sunShadowMap",ye.state.sunShadowMap,ge),ye.state.directionalShadowMap.length>0&&At.setValue(Y,"directionalShadowMap",ye.state.directionalShadowMap,ge),ye.state.spotShadowMap.length>0&&At.setValue(Y,"spotShadowMap",ye.state.spotShadowMap,ge),ye.state.pointShadowMap.length>0&&At.setValue(Y,"pointShadowMap",ye.state.pointShadowMap,ge)),se.isSkinnedMesh){At.setOptional(Y,se,"bindMatrix"),At.setOptional(Y,se,"bindMatrixInverse");const mt=se.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),At.setValue(Y,"boneTexture",mt.boneTexture,ge))}se.isBatchedMesh&&(At.setOptional(Y,se,"batchingTexture"),At.setValue(Y,"batchingTexture",se._matricesTexture,ge),At.setOptional(Y,se,"batchingIdTexture"),At.setValue(Y,"batchingIdTexture",se._indirectTexture,ge),At.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&At.setValue(Y,"batchingColorTexture",se._colorsTexture,ge));const Pn=pe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&B.update(se,pe,Dt),(an||X.receiveShadow!==se.receiveShadow)&&(X.receiveShadow=se.receiveShadow,At.setValue(Y,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&$.environment!==null&&(Yt.envMapIntensity.value=$.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=HE()),an){if(At.setValue(Y,"toneMappingExposure",V.toneMappingExposure),X.needsLights&&Vr(Yt,En),Be&&ae.fog===!0&&Ke.refreshFogUniforms(Yt,Be),Ke.refreshMaterialUniforms(Yt,ae,me,ce,N.state.transmissionRenderTarget[P.id]),X.needsLights&&X.lightProbeGrid){const mt=X.lightProbeGrid;Yt.probesSH.value=mt.texture,Yt.probesMin.value.copy(mt.boundingBox.min),Yt.probesMax.value.copy(mt.boundingBox.max),Yt.probesResolution.value.copy(mt.resolution)}Jc.upload(Y,sr(X),Yt,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Jc.upload(Y,sr(X),Yt,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&At.setValue(Y,"center",se.center),At.setValue(Y,"modelViewMatrix",se.modelViewMatrix),At.setValue(Y,"normalMatrix",se.normalMatrix),At.setValue(Y,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const mt=ae.uniformsGroups;for(let Kt=0,dn=mt.length;Kt<dn;Kt++){const Vn=mt[Kt];Me.update(Vn,Dt),Me.bind(Vn,Dt)}}return Dt}function Vr(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.sunLights.needsUpdate=$,P.sunLightShadows.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function wr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(P,$,pe){const ae=le.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(P.texture).__webglTexture=$,le.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:pe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){const pe=le.get(P);pe.__webglFramebuffer=$,pe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,pe=0){J=P,he=$,oe=pe;let ae=null,se=!1,Be=!1;if(P){const Ge=le.get(P);if(Ge.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(Y.FRAMEBUFFER,Ge.__webglFramebuffer),F.copy(P.viewport),re.copy(P.scissor),we=P.scissorTest,T.viewport(F),T.scissor(re),T.setScissorTest(we),Z=-1;return}else if(Ge.__webglFramebuffer===void 0)ge.setupRenderTarget(P);else if(Ge.__hasExternalTextures)ge.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const St=P.depthTexture;if(Ge.__boundDepthTexture!==St){if(St!==null&&le.has(St)&&(P.width!==St.image.width||P.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(P)}}const et=P.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Be=!0);const it=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[$])?ae=it[$][pe]:ae=it[$],se=!0):P.samples>0&&ge.useMultisampledRTT(P)===!1?ae=le.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ae=it[pe]:ae=it,F.copy(P.viewport),re.copy(P.scissor),we=P.scissorTest}else F.copy(He).multiplyScalar(me).floor(),re.copy(gt).multiplyScalar(me).floor(),we=Ft;if(pe!==0&&(ae=ne),T.bindFramebuffer(Y.FRAMEBUFFER,ae)&&T.drawBuffers(P,ae),T.viewport(F),T.scissor(re),T.setScissorTest(we),se){const Ge=le.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ge.__webglTexture,pe)}else if(Be){const Ge=$;for(let et=0;et<P.textures.length;et++){const it=le.get(P.textures[et]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+et,it.__webglTexture,pe,Ge)}}else if(P!==null&&pe!==0){const Ge=le.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ge.__webglTexture,pe)}Z=-1};function Tr(P){const $=le.get(P);return($.__readFormat!==P.format||$.__readType!==P.type)&&($.__readFormat=P.format,$.__readType=P.type,$.__formatReadable=k.textureFormatReadable(P.format),$.__typeReadable=k.textureTypeReadable(P.type)),$}this.readRenderTargetPixels=function(P,$,pe,ae,se,Be,Ve,Ge=0){if(!(P&&P.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(et=et[Ve]),et){T.bindFramebuffer(Y.FRAMEBUFFER,et);try{const it=P.textures[Ge],St=it.format,Et=it.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge);const $e=Tr(it);if($e.__formatReadable===!1){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ae&&pe>=0&&pe<=P.height-se&&Y.readPixels($,pe,ae,se,Ie.convert(St),Ie.convert(Et),Be)}finally{const it=J!==null?le.get(J).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(P,$,pe,ae,se,Be,Ve,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(et=et[Ve]),et)if($>=0&&$<=P.width-ae&&pe>=0&&pe<=P.height-se){T.bindFramebuffer(Y.FRAMEBUFFER,et);const it=P.textures[Ge],St=it.format,Et=it.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge);const $e=Tr(it);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ut),Y.bufferData(Y.PIXEL_PACK_BUFFER,Be.byteLength,Y.STREAM_READ),Y.readPixels($,pe,ae,se,Ie.convert(St),Ie.convert(Et),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const un=J!==null?le.get(J).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,un);const en=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await sx(Y,en,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ut),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Be),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ut),Y.deleteSync(en),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,pe=0){const ae=Math.pow(2,-pe),se=Math.floor(P.image.width*ae),Be=Math.floor(P.image.height*ae),Ve=$!==null?$.x:0,Ge=$!==null?$.y:0;ge.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,pe,0,0,Ve,Ge,se,Be),T.unbindTexture()},this.copyTextureToTexture=function(P,$,pe=null,ae=null,se=0,Be=0){let Ve,Ge,et,it,St,Et,$e,Ut,un;const en=P.isCompressedTexture?P.mipmaps[Be]:P.image;if(pe!==null)Ve=pe.max.x-pe.min.x,Ge=pe.max.y-pe.min.y,et=pe.isBox3?pe.max.z-pe.min.z:1,it=pe.min.x,St=pe.min.y,Et=pe.isBox3?pe.min.z:0;else{const Yt=Math.pow(2,-se);Ve=Math.floor(en.width*Yt),Ge=Math.floor(en.height*Yt),P.isDataArrayTexture?et=en.depth:P.isData3DTexture?et=Math.floor(en.depth*Yt):et=1,it=0,St=0,Et=0}ae!==null?($e=ae.x,Ut=ae.y,un=ae.z):($e=0,Ut=0,un=0);const h=Ie.convert($.format),z=Ie.convert($.type);let X;$.isData3DTexture?(ge.setTexture3D($,0),X=Y.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ge.setTexture2DArray($,0),X=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D($,0),X=Y.TEXTURE_2D),T.activeTexture(Y.TEXTURE0),T.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),T.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),T.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const ye=T.getParameter(Y.UNPACK_ROW_LENGTH),Le=T.getParameter(Y.UNPACK_IMAGE_HEIGHT),Dt=T.getParameter(Y.UNPACK_SKIP_PIXELS),ft=T.getParameter(Y.UNPACK_SKIP_ROWS),an=T.getParameter(Y.UNPACK_SKIP_IMAGES);T.pixelStorei(Y.UNPACK_ROW_LENGTH,en.width),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,en.height),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,it),T.pixelStorei(Y.UNPACK_SKIP_ROWS,St),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,Et);const En=P.isDataArrayTexture||P.isData3DTexture,At=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){const Yt=le.get(P),Pn=le.get($),mt=le.get(Yt.__renderTarget),Kt=le.get(Pn.__renderTarget);T.bindFramebuffer(Y.READ_FRAMEBUFFER,mt.__webglFramebuffer),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let dn=0;dn<et;dn++)En&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(P).__webglTexture,se,Et+dn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get($).__webglTexture,Be,un+dn)),Y.blitFramebuffer(it,St,Ve,Ge,$e,Ut,Ve,Ge,Y.DEPTH_BUFFER_BIT,Y.NEAREST);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||P.isRenderTargetTexture||le.has(P)){const Yt=le.get(P),Pn=le.get($);T.bindFramebuffer(Y.READ_FRAMEBUFFER,j),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ie);for(let mt=0;mt<et;mt++)En?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Yt.__webglTexture,se,Et+mt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Yt.__webglTexture,se),At?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pn.__webglTexture,Be,un+mt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pn.__webglTexture,Be),se!==0?Y.blitFramebuffer(it,St,Ve,Ge,$e,Ut,Ve,Ge,Y.COLOR_BUFFER_BIT,Y.NEAREST):At?Y.copyTexSubImage3D(X,Be,$e,Ut,un+mt,it,St,Ve,Ge):Y.copyTexSubImage2D(X,Be,$e,Ut,it,St,Ve,Ge);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else At?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(X,Be,$e,Ut,un,Ve,Ge,et,h,z,en.data):$.isCompressedArrayTexture?Y.compressedTexSubImage3D(X,Be,$e,Ut,un,Ve,Ge,et,h,en.data):Y.texSubImage3D(X,Be,$e,Ut,un,Ve,Ge,et,h,z,en):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Be,$e,Ut,Ve,Ge,h,z,en.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Be,$e,Ut,en.width,en.height,h,en.data):Y.texSubImage2D(Y.TEXTURE_2D,Be,$e,Ut,Ve,Ge,h,z,en);T.pixelStorei(Y.UNPACK_ROW_LENGTH,ye),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Le),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(Y.UNPACK_SKIP_ROWS,ft),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,an),Be===0&&$.generateMipmaps&&Y.generateMipmap(X),T.unbindTexture()},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&ge.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ge.setTextureCube(P,0):P.isData3DTexture?ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ge.setTexture2DArray(P,0):ge.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){he=0,oe=0,J=null,T.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}}function WE(r,e,t,s=62206,o=16638023){for(;r.children.length>0;)r.remove(r.children[0]);for(;e.children.length>0;)e.remove(e.children[0]);const l={londonEyeWheel:null,eiffelBeacon:null,libertyTorchHalo:null,auroraMesh:null},u=new yt({color:330518,fog:!1}),f=new yt({color:s,fog:!1}),m=new yt({color:o,fog:!1}),p=new yt({color:16777215,fog:!1}),S=new yt({color:62206,fog:!1}),y=new yt({color:16638023,fog:!1}),_=new yt({color:15680580,fog:!1}),M=(b,x,v,R,U,A,I,N=f)=>{const O=new Lt(x,v,R),w=new xe(O,u);w.position.set(U,A,I);const L=new ro(O),V=new io(L,new Is({color:N.color,fog:!1}));return w.add(V),b.add(w),w},E=-28;if(t==="obelisco"){const b=new yt({color:3718648,fog:!1}),x=M(r,5.2,68,5.2,-10,E+34,0,b),v=new Lt(1.1,66,5.4),R=new xe(v,p);x.add(R);const U=new yi(3.7,10,4);U.rotateY(Math.PI/4);const A=new xe(U,p);A.position.set(-10,E+73,0),r.add(A);const I=new Lt(36,1.4,3.2),N=new xe(I,b);N.position.set(14,E+12,2),r.add(N);const O=new ln(.45,.9,42,10),w=new xe(O,p);w.position.set(12,E+28,2),w.rotation.z=-.46,r.add(w);for(let L=0;L<6;L++){const V=new ln(.08,.08,24+L*2,6),W=new xe(V,b);W.position.set(16+L*2.2,E+21,2),W.rotation.z=.55+L*.06,r.add(W)}}else if(t==="cristo"){const b=new yi(28,44,7),x=new xe(b,u);x.position.set(0,E+14,0);const v=new io(new ro(b),new Is({color:2278750,fog:!1}));x.add(v),r.add(x),M(r,7,10,7,0,E+39,0,y);const R=M(r,6.2,26,4.2,0,E+57,0,p),U=new xe(new Lt(3.8,25,4.4),new yt({color:14742270,fog:!1}));R.add(U);const A=new Lt(32,3.2,3),I=new xe(A,p);I.position.set(0,E+64,0),r.add(I);const N=new Qn(2.6,14,14),O=new xe(N,p);O.position.set(0,E+72.5,.5),r.add(O);const w=new yi(12,55,16,1,!0),L=new yt({color:4906624,transparent:!0,opacity:.18,blending:Di,side:Ui,depthWrite:!1,fog:!1}),V=new xe(w,L);V.position.set(-14,E+46,2),V.rotation.z=-.35,r.add(V);const W=new xe(w,L);W.position.set(14,E+46,2),W.rotation.z=.35,r.add(W)}else if(t==="liberty_empire"){M(r,11,20,11,-16,E+10,0,S),M(r,6.5,28,5.5,-16,E+34,0,S);const b=new xe(new Qn(2.8,12,12),S);b.position.set(-16,E+50,0),r.add(b);for(let A=-3;A<=3;A++){const I=new xe(new yi(.35,3.6,6),S);I.position.set(-16+A*.9,E+53,0),I.rotation.z=-A*.22,r.add(I)}const x=new xe(new ln(.7,.9,14,8),S);x.position.set(-12.5,E+54,0),x.rotation.z=-.25,r.add(x);const v=new xe(new Qn(2.2,16,16),y);v.position.set(-10.8,E+62,0),r.add(v);const R=new xe(new Qn(5.2,16,16),new yt({color:16638023,transparent:!0,opacity:.42,blending:Di,fog:!1}));R.position.copy(v.position),r.add(R),l.libertyTorchHalo=R,M(r,14,52,12,15,E+26,-2,S),M(r,9.5,18,9,15,E+61,-2,S),M(r,5.5,12,5.5,15,E+76,-2,y);const U=new xe(new ln(.25,.9,24,10),p);U.position.set(15,E+94,-2),r.add(U)}else if(t==="eiffel"){const b=new yt({color:16498468,fog:!1}),x=[[-11,-6],[11,-6],[-11,6],[11,6]];for(let O=0;O<x.length;O++){const[w,L]=x[O],V=new ln(1.1,2.4,30,8),W=new xe(V,b);W.position.set(w*.72,E+14,L*.72),W.rotation.z=w<0?-.24:.24,r.add(W)}M(r,20,3.2,14,0,E+28,0,y),M(r,12,24,9,0,E+42,0,b),M(r,14,2.6,10,0,E+54,0,y);const v=new xe(new ln(1.2,4.8,34,4,4,!0),new yt({color:16638023,wireframe:!0,fog:!1}));v.position.set(0,E+72,0),v.rotation.y=Math.PI/4,r.add(v);const R=new on;R.position.set(0,E+90,0);const U=new yi(9,75,16,1,!0);U.translate(0,-37.5,0),U.rotateZ(Math.PI/2);const A=new yt({color:16707722,transparent:!0,opacity:.32,blending:Di,side:Ui,depthWrite:!1,fog:!1}),I=new xe(U,A),N=new xe(U,A);N.rotation.y=Math.PI,R.add(I),R.add(N),r.add(R),l.eiffelBeacon=R}else if(t==="tokyotower"){const b=[{y:14,rBot:11,rTop:7,h:28,mat:_},{y:38,rBot:7,rTop:4.5,h:20,mat:p},{y:56,rBot:4.5,rTop:2.4,h:16,mat:_},{y:71,rBot:2.4,rTop:.8,h:14,mat:p},{y:84,rBot:.8,rTop:.2,h:14,mat:_}];for(let N=0;N<b.length;N++){const O=b[N],w=new ln(O.rTop,O.rBot,O.h,4,2,!0),L=new xe(w,new yt({color:O.mat.color,wireframe:!0,fog:!1}));L.position.set(0,E+O.y,0),L.rotation.y=Math.PI/4,r.add(L)}const x=new ln(.24,.28,6.2,12),v=new xe(x,_);v.position.set(-2.5,3.1,2.2),e.add(v);const R=new xe(x,_);R.position.set(2.5,3.1,2.2),e.add(R);const U=new xe(new Lt(7.2,.42,.55),_);U.position.set(0,6.2,2.2),e.add(U);const A=new xe(new Lt(7.5,.16,.6),y);A.position.set(0,6.48,2.2),e.add(A);const I=new xe(new Lt(5.8,.28,.38),_);I.position.set(0,4.9,2.2),e.add(I)}else if(t==="pyramids"){const b=[{x:0,z:-4,r:26,h:48},{x:-24,z:4,r:19,h:36},{x:24,z:6,r:16,h:30}];for(let x=0;x<b.length;x++){const v=b[x],R=new yi(v.r,v.h,4);R.rotateY(Math.PI/4);const U=new xe(R,u);U.position.set(v.x,E+v.h*.5,v.z);const A=new ro(R),I=new io(A,new Is({color:16638023,fog:!1}));U.add(I);const N=new yi(v.r*.22,v.h*.22,4);N.rotateY(Math.PI/4);const O=new xe(N,y);O.position.set(0,v.h*.39,0),U.add(O),r.add(U)}}else if(t==="londoneye"){M(r,7.5,54,7.5,-18,E+27,0,y),M(r,8.6,8.6,8.6,-18,E+58,0,y);const b=new xe(new ln(3.2,3.2,.5,20),y);b.rotation.x=Math.PI/2,b.position.set(-18,E+58,4.4),r.add(b);const x=new xe(new yi(5.2,16,4),y);x.rotation.y=Math.PI/4,x.position.set(-18,E+70,0),r.add(x);const v=new on;v.position.set(14,E+42,0);const R=new xe(new Jn(21,.65,12,48),S);v.add(R);for(let U=0;U<12;U++){const A=U/12*Math.PI*2,I=new xe(new ln(.12,.12,42,6),S);I.rotation.z=A,v.add(I);const N=new xe(new Qn(1.15,10,10),p);N.position.set(Math.cos(A)*21,Math.sin(A)*21,0),v.add(N)}r.add(v),l.londonEyeWheel=v}else if(t==="burjkhalifa"){const b=[{w:15,h:24,y:12},{w:12,h:24,y:36},{w:9,h:22,y:59},{w:6.2,h:22,y:81},{w:3.6,h:20,y:102},{w:1.5,h:24,y:124}];for(let x=0;x<b.length;x++){const v=b[x];M(r,v.w,v.h,v.w,0,E+v.y,0,S);const R=new xe(new Jn(v.w*.68,.32,10,28),x%2===0?S:y);R.rotation.x=Math.PI/2,R.position.set(0,E+v.y+v.h*.5,0),r.add(R)}}else if(t==="opera"){M(r,44,6,14,0,E+12,0,y);const b=[-14,-6,3,12];for(let R=0;R<b.length;R++){const U=b[R],A=22+R%2*8,I=new yi(6.5,A,4),N=new xe(I,p);N.position.set(U,E+15+A*.45,2),N.rotation.z=-.28;const O=new io(new ro(I),new Is({color:62206,fog:!1}));N.add(O),r.add(N)}const x=new Jn(30,.85,10,36,Math.PI),v=new xe(x,S);v.position.set(0,E+14,-8),r.add(v)}else if(t==="stbasil"){const b=[{x:0,h:48,r:5.2,mat:_},{x:-12,h:36,r:4.2,mat:S},{x:12,h:36,r:4.2,mat:y},{x:-22,h:28,r:3.5,mat:y},{x:22,h:28,r:3.5,mat:S}];for(let x=0;x<b.length;x++){const v=b[x];M(r,v.r*1.4,v.h,v.r*1.4,v.x,E+v.h*.5,0,v.mat);const R=new xe(new Qn(v.r,16,16),v.mat);R.scale.set(1,1.25,1),R.position.set(v.x,E+v.h+v.r*.8,0),r.add(R);const U=new xe(new yi(v.r*.45,7,8),y);U.position.set(v.x,E+v.h+v.r*2.1,0),r.add(U);const A=new xe(new Rh(1.6,0),y);A.position.set(v.x,E+v.h+v.r*2.1+4.5,0),r.add(A)}}else if(t==="marinabay"){const b=[-16,0,16];for(let v=0;v<b.length;v++)M(r,7.5,58,7,b[v],E+29,0,S);const x=new xe(new Lt(46,3.8,10),y);x.position.set(2,E+60,0),r.add(x)}else if(t==="swiss_alps"){const b=new xe(new yi(24,65,5),u);b.position.set(-20,E+32,-4),b.add(new io(new ro(b.geometry),new Is({color:3718648,fog:!1}))),r.add(b);const x=new xe(new yi(26,72,5),u);x.position.set(20,E+36,-4),x.add(new io(new ro(x.geometry),new Is({color:4906624,fog:!1}))),r.add(x);const v=new ga(76,32,16,4),R=new yt({color:4906624,transparent:!0,opacity:.28,blending:Di,side:Ui,depthWrite:!1,fog:!1}),U=new xe(v,R);U.position.set(0,E+78,-8),r.add(U),l.auroraMesh=U}else{M(r,10,62,10,-16,E+31,0,f),M(r,10,62,10,16,E+31,0,f);const b=new xe(new Qn(6.2,16,16),m);b.position.set(0,E+62,0),r.add(b);const x=M(r,5.5,78,5.5,0,E+39,0,m),v=new xe(new ln(.25,.8,22,8),p);v.position.set(0,48,0),x.add(v);const R=new xe(new Lt(48,1.8,4),f);R.position.set(0,E+24,2),r.add(R)}return l}const Us=.82;function Wc(r=1976635,e=3718648,t=1.05){return new Mr({uniforms:{uBaseColor:{value:new Ht(r)},uRimColor:{value:new Ht(e)},uRimPower:{value:2.05},uRimStrength:{value:t}},vertexShader:`
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
        float rim = smoothstep(0.18, 0.88, fresnel) * uRimStrength;
        vec3 litBase = uBaseColor * (0.72 + 0.38 * ndotv);
        vec3 finalCol = mix(litBase, uRimColor, clamp(rim, 0.0, 1.0));
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `})}function XE(){const r=document.createElement("canvas");r.width=256,r.height=512;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#020612"),t.addColorStop(.32,"#071630"),t.addColorStop(.62,"#0f2c56"),t.addColorStop(.84,"#154e7a"),t.addColorStop(1,"#040b18"),e.fillStyle=t,e.fillRect(0,0,256,512);const s=e.createRadialGradient(128,310,12,128,310,165);return s.addColorStop(0,"rgba(0, 242, 254, 0.42)"),s.addColorStop(.55,"rgba(14, 165, 233, 0.14)"),s.addColorStop(1,"rgba(2, 6, 18, 0.0)"),e.fillStyle=s,e.fillRect(0,0,256,512),new lu(r)}function qE(){const r=document.createElement("canvas");r.width=128,r.height=128;const e=r.getContext("2d");e.fillStyle="#64748b",e.fillRect(0,0,128,128),e.strokeStyle="#cbd5e1",e.lineWidth=6;for(let s=-128;s<256;s+=20)e.beginPath(),e.moveTo(s,0),e.lineTo(s+80,128),e.stroke();const t=new lu(r);return t.wrapS=pa,t.wrapT=pa,t.repeat.set(2,320),t}function jE(){const r=document.createElement("canvas");r.width=256,r.height=256;const e=r.getContext("2d");return e.fillStyle="#09111f",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=8,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.fillStyle="#fde047",e.font="bold 116px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,134),new lu(r)}function sg(r=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=r?"#061121":"#040914",t.fillRect(0,0,128,256);const s=8,o=24;for(let u=1;u<o;u++)for(let f=1;f<s;f++){const m=(u*17+f*31)%100;m<(r?28:42)&&(m<7?t.fillStyle="#00f2fe":m<18?t.fillStyle="#fef08a":t.fillStyle=r?"#1e3a5f":"#38bdf8",t.fillRect(f*14,u*10,7,5))}const l=new lu(e);return l.wrapS=pa,l.wrapT=pa,l.repeat.set(1,2),l}function $E(r){const e=r.clientWidth||420,t=r.clientHeight||780,s=new yx;s.background=new Ht(398118),s.fog=new wh(664121,.011);const o=new qi(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new GE({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=ph,l.toneMappingExposure=1.25,r.innerHTML="",r.appendChild(l.domElement);const u=new Gx(3718648,.9);s.add(u);const f=new Hx(62206,1.75);f.position.set(0,28,-65),s.add(f);const m=new D0(62206,3.8,22);m.position.set(0,1.35,0),s.add(m);const p=new D0(16638023,4.2,24);p.position.set(0,2.5,-.3),s.add(p);const S=XE(),y=new ga(340,220),_=new yt({map:S,fog:!1,depthWrite:!1}),M=new xe(y,_);M.position.set(0,12,-210),s.add(M);const E=1800,b=qE(),x=new ln(.042,.042,E,16);x.rotateX(Math.PI/2);const v=new mf({color:13358561,map:b,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),R=new xe(x,v);R.position.set(0,0,-E*.5+12),s.add(R);const U=new ln(.015,.015,E,8);U.rotateX(Math.PI/2);const A=new yt({color:62206,transparent:!0,opacity:.72}),I=new xe(U,A);I.position.set(0,.022,-E*.5+12),s.add(I);const N=new mf({color:330002,roughness:.8,metalness:.2}),O=new Lt(7.2,60,7),w=new xe(O,N);w.position.set(0,-30.045,3.5),s.add(w);const L=new on,V=new Lt(9.2,70,9.2),W=new xe(V,N);W.position.set(0,-35.045,0),L.add(W);const G=jE(),ne=new ga(7,7);ne.rotateX(-Math.PI/2);const j=new yt({map:G}),ie=new xe(ne,j);ie.position.set(0,.01,0),L.add(ie);const he=new Jn(3.4,.075,12,36);he.rotateX(Math.PI/2);const oe=new yt({color:62206}),J=new xe(he,oe);J.position.set(0,.12,0),L.add(J);const Z=new on;L.add(Z),L.position.set(0,0,-100),s.add(L);const ee=new on;ee.position.set(0,0,-135),s.add(ee);const F=sg(!1),re=sg(!0),we=new mf({color:464166,map:F,emissive:959977,emissiveMap:F,emissiveIntensity:.58,roughness:.5,metalness:.4}),Ye=new yt({color:729657,map:re}),Xe=new yt({color:1128020}),Ze=new yt({color:62206,transparent:!0,opacity:.35}),ce=[];for(let nt=0;nt<44;nt++){const nn=nt%2===0,gn=nt%3,vn=Math.floor(nt/2),si=6.5+nt%4*2.1+gn*2.2,bn=6.5+nt*3%4*1.8,ai=72+nt*13%42+gn*16,Ti=new Lt(si,ai,bn),Ln=gn===0?we:gn===1?Ye:Xe,lr=new xe(Ti,Ln),zi=gn===0?12.2+nt%3*2.8:gn===1?21.5+nt%3*4.2:32+nt%4*5,Ws=(nn?-1:1)*zi,cr=10-vn*13,yo=-60+ai*.5;if(lr.position.set(Ws,yo,cr),gn===0){const fs=new Lt(.12,ai,.12),Ai=new xe(fs,Ze);Ai.position.set(nn?si*.5+.04:-si*.5-.04,0,bn*.5),lr.add(Ai)}s.add(lr),ce.push(lr)}const me=[],Re=new yi(5.5,115,20,1,!0);for(let nt=0;nt<10;nt++){const nn=nt%2===0,gn=new yt({color:nt%3===0?62206:959977,transparent:!0,opacity:nt%3===0?.11:.075,side:Ui,depthWrite:!1,blending:Di}),vn=new xe(Re,gn),si=(nn?-1:1)*(8.5+nt%3*4.5),bn=-18-nt*24;vn.position.set(si,8,bn),vn.rotation.z=(nn?-1:1)*.24,s.add(vn),me.push({mesh:vn,mat:gn,baseAngle:(nn?-1:1)*.24,speed:.45+nt%4*.18,phaseOffset:nt*1.1})}const tt=[],He=new Lt(.4,.18,2.2),gt=new yt({color:62206}),Ft=new yt({color:15680580});for(let nt=0;nt<20;nt++){const nn=nt%2===0,gn=new xe(He,nn?Ft:gt),vn=(nt%4-1.5)*2.1;gn.position.set(vn,-36,-nt*12),s.add(gn),tt.push({mesh:gn,speed:(nn?-1:1)*(15+nt%4*3.5)})}const ht=220,Tt=new Float32Array(ht*3);for(let nt=0;nt<ht;nt++)Tt[nt*3+0]=(Math.random()-.5)*28,Tt[nt*3+1]=-6+Math.random()*20,Tt[nt*3+2]=6-Math.random()*55;const kt=new Fn;kt.setAttribute("position",new yr(Tt,3));const ut=new Ug({color:62206,size:.14,transparent:!0,opacity:.65,blending:Di,depthWrite:!1}),Bt=new Lx(kt,ut);s.add(Bt);const zt=new on;zt.position.set(0,0,0),s.add(zt);const Xt=Wc(1976635,3718648,1.05),xt=Wc(988970,3718648,.95),Ct=Wc(4674921,3718648,1.15),Y=Wc(1976635,3718648,1.1),Vt=new yt({color:9741240}),Mt=new yt({color:3359061}),k=new yt({color:3718648}),T=new yt({color:3718648}),Q=new yt({color:3718648,side:Ui}),le=new yt({color:3718648,transparent:!0,opacity:.85}),ge=new yt({color:16777215}),Ae=new yt({color:62206}),Oe=new yt({color:12616956}),_e=new yt({color:15857145}),Se=new yt({color:16711765}),De=new yt({color:15680580}),Ke=new yt({color:16498468}),Fe=new yt({color:527122}),Ee=nt=>{const nn=new on;nn.position.set(nt?-.08:.08,.88,0);const gn=new ca(.064,.34,10,18),vn=new xe(gn,xt);vn.position.set(nt?.018:-.018,-.19,0),vn.rotation.z=nt?.05:-.05,nn.add(vn);const si=new Lt(.03,.12,.075),bn=new xe(si,Xt);bn.position.set(nt?-.055:.055,-.18,0),nn.add(bn);const ai=new Lt(.018,.28,.032),Ti=new xe(ai,ge);Ti.position.set(nt?-.062:.062,-.19,.01),Ti.visible=!1,nn.add(Ti);const Ln=new on;Ln.position.set(nt?.035:-.035,-.41,0),nn.add(Ln);const lr=new Jn(.062,.014,10,20);lr.rotateX(Math.PI/2);const zi=new xe(lr,Ae);zi.position.set(nt?.01:-.01,-.02,0),zi.visible=!1,Ln.add(zi);const Ws=new ca(.05,.34,10,18),cr=new xe(Ws,xt);cr.position.set(nt?.02:-.02,-.2,0),cr.rotation.z=nt?.04:-.04,Ln.add(cr);const yo=new Lt(.018,.25,.028),fs=new xe(yo,ge);fs.position.set(nt?-.042:.042,-.2,.015),fs.visible=!1,Ln.add(fs);const Ai=new on;Ai.position.set(nt?.035:-.035,-.43,0),Ln.add(Ai);const vl=new ca(.045,.14,8,14);vl.rotateX(Math.PI/2);const _l=new xe(vl,Ct);_l.position.set(0,-.005,-.025),Ai.add(_l);const fu=new Lt(.095,.026,.22),Mo=new xe(fu,Vt);Mo.position.set(0,-.038,-.025),Ai.add(Mo);const hu=new Lt(.098,.032,.045),wa=new xe(hu,Ae);wa.position.set(0,-.01,.068),wa.visible=!1,Ai.add(wa);const xl=new ln(.024,.036,.06,12);xl.rotateX(Math.PI/2);const Ta=new xe(xl,De);return Ta.position.set(0,.01,.085),Ta.visible=!1,Ai.add(Ta),{hipGroup:nn,kneeGroup:Ln,bootGroup:Ai,cargoPocketMesh:bn,thighReflectiveMesh:Ti,calfReflectiveMesh:fs,tacticalKneeNeon:zi,tacticalHeelNeon:wa,shinobiBootThruster:Ta}},Qe=Ee(!0),je=Ee(!1);zt.add(Qe.hipGroup),zt.add(je.hipGroup);const ct=new on;zt.add(ct);const B=new ln(.135,.12,.15,18);B.scale(1.15,1,.72);const Pe=new xe(B,xt);Pe.position.set(0,.89,0),ct.add(Pe);const de=new on;de.position.set(0,.95,0),ct.add(de);const Ie=new ln(.165,.125,.24,18);Ie.scale(1.18,1,.68);const ze=new xe(Ie,Xt);ze.position.set(0,.12,0),de.add(ze);const Me=new ln(.215,.162,.28,20);Me.scale(1.24,1,.68);const We=new xe(Me,Xt);We.position.set(0,.35,0),de.add(We);const Te=new Lt(.042,.38,.026),ke=new xe(Te,le);ke.position.set(0,.26,.135),de.add(ke);const pt=new on,qt=new Qn(.135,16,14);qt.scale(1.15,.68,.95);const Qt=new xe(qt,Xt);Qt.position.set(0,.5,.095),pt.add(Qt);const Mn=new Jn(.13,.014,10,24);Mn.rotateX(Math.PI*.42);const ti=new xe(Mn,le);ti.position.set(0,.52,.09),pt.add(ti),de.add(pt);const dt=new on;dt.visible=!1;const ni=new xe(new Lt(.42,.032,.026),ge);ni.position.set(0,.4,.145),dt.add(ni);const Er=new xe(new Lt(.32,.028,.026),ge);Er.position.set(0,.16,.135),dt.add(Er);const Mi=new xe(new Lt(.032,.36,.026),ge);Mi.position.set(-.11,.28,.142),dt.add(Mi);const $i=new xe(new Lt(.032,.36,.026),ge);$i.position.set(.11,.28,.142),dt.add($i),de.add(dt);const It=new on;It.visible=!1;const zn=new Lt(.042,.48,.028),Dn=new xe(zn,Ae);Dn.position.set(0,.28,.148),Dn.rotation.z=.64,It.add(Dn);const jt=new xe(zn,Ae);jt.position.set(0,.28,.148),jt.rotation.z=-.64,It.add(jt);const pn=new xe(new ln(.055,.055,.032,6),Ae);pn.rotation.x=Math.PI/2,pn.position.set(0,.28,.155),It.add(pn);const ii=new Lt(.14,.065,.18),mi=new xe(ii,Fe);mi.position.set(-.27,.48,0),mi.rotation.z=.22;const sr=new xe(new Lt(.15,.018,.19),Ae);sr.position.set(0,.028,0),mi.add(sr),It.add(mi);const Fi=new xe(ii,Fe);Fi.position.set(.27,.48,0),Fi.rotation.z=-.22;const Yi=new xe(new Lt(.15,.018,.19),Ae);Yi.position.set(0,.028,0),Fi.add(Yi),It.add(Fi),de.add(It);const $t=new on;$t.visible=!1;const Vr=new Jn(.13,.018,8,4),wr=new xe(Vr,Oe);wr.position.set(0,.3,.148),$t.add(wr);const Tr=new xe(new Jn(.065,.014,8,4),_e);Tr.position.set(0,.3,.152),$t.add(Tr);const P=new xe(new Lt(.025,.42,.03),_e);P.position.set(-.16,.27,.138),P.rotation.z=-.12,$t.add(P);const $=new xe(new Lt(.025,.42,.03),_e);$.position.set(.16,.27,.138),$.rotation.z=.12,$t.add($);const pe=new xe(new Jn(.135,.016,10,24),_e);pe.rotateX(Math.PI/2),pe.position.set(0,.49,.01),$t.add(pe),de.add($t);const ae=new on;ae.visible=!1;const se=new xe(new Lt(.036,.4,.028),Se);se.position.set(0,.27,.146),ae.add(se);for(let nt=0;nt<4;nt++){const nn=nt%2===0?-1:1,gn=nt<2?.36:.21,vn=new xe(new Lt(.14,.022,.026),Se);vn.position.set(nn*.08,gn,.146),vn.rotation.z=nn*.38,ae.add(vn)}const Be=new on;Be.position.set(.02,.31,.172),Be.rotation.z=-.68;const Ve=new xe(new ln(.018,.015,.66,12),Fe);Ve.position.set(0,-.06,0),Be.add(Ve);const Ge=new xe(new Lt(.012,.64,.038),Se);Ge.position.set(0,-.06,0),Be.add(Ge);const et=new xe(new ln(.052,.052,.016,16),Ke);et.position.set(0,.27,0),Be.add(et);const it=new xe(new ln(.02,.02,.22,12),De);it.position.set(0,.39,0),Be.add(it);const St=new xe(new ln(.025,.025,.028,12),Ke);St.position.set(0,.51,0),Be.add(St),ae.add(Be),de.add(ae);const Et=new on;Et.visible=!1;const $e=new xe(new Jn(.32,.018,12,32),Ke);$e.position.set(0,.32,.16),Et.add($e),de.add(Et);const Ut=new Qn(.078,16,16),un=new xe(Ut,Xt);un.position.set(-.255,.45,0),de.add(un);const en=new xe(Ut,Xt);en.position.set(.255,.45,0),de.add(en);const h=new ln(.05,.06,.1,14),z=new xe(h,Xt);z.position.set(0,.54,0),de.add(z);const X=new on;X.position.set(0,.67,0),de.add(X);const ye=new Qn(.118,24,24);ye.scale(.95,1.06,1.02);const Le=new xe(ye,Y);X.add(Le);const Dt=new Jn(.116,.018,12,28);Dt.rotateX(Math.PI/2);const ft=new xe(Dt,T);ft.position.set(0,.025,0),X.add(ft);const an=new ln(.124,.124,.045,20,1,!0,Math.PI*.55,Math.PI*.9),En=new xe(an,Ae);En.position.set(0,.02,0),En.visible=!1,X.add(En);const At=new xe(new Jn(.14,.015,10,28),Ke);At.rotateX(Math.PI/2),At.position.set(0,.16,0),At.visible=!1,X.add(At);const Yt=new on;Yt.position.set(0,.022,.118),X.add(Yt);const Pn=new Lt(.18,.032,.01);Pn.translate(.09,0,0);const mt=new xe(Pn,Q);Yt.add(mt);const Kt=new on;Kt.position.set(.175,0,0),mt.add(Kt);const dn=new Lt(.18,.028,.009);dn.translate(.09,0,0);const Vn=new xe(dn,Q);Kt.add(Vn);const $n=new on;$n.position.set(.175,0,0),Vn.add($n);const Hn=new Lt(.17,.022,.008);Hn.translate(.085,0,0);const Hr=new xe(Hn,Q);$n.add(Hr);const ar=nt=>{const nn=new on;nn.position.set(nt?-.255:.255,.44,0);const gn=new ca(.048,.22,10,16),vn=new xe(gn,Xt);vn.position.set(nt?-.08:.08,-.11,-.02),vn.rotation.z=nt?-.56:.56,nn.add(vn);const si=new Lt(.02,.19,.028),bn=new xe(si,ge);bn.position.set(nt?-.095:.095,-.11,.025),bn.rotation.z=nt?-.56:.56,bn.visible=!1,nn.add(bn);const ai=new on;ai.position.set(nt?-.16:.16,-.21,-.04),nn.add(ai);const Ti=new ca(.042,.21,10,16),Ln=new xe(Ti,Xt);Ln.position.set(nt?-.07:.07,-.04,-.09),Ln.rotation.x=.72,Ln.rotation.z=nt?-.45:.45,ai.add(Ln);const lr=new Jn(.046,.013,10,20),zi=new xe(lr,k);zi.position.set(nt?-.12:.12,-.07,-.155),ai.add(zi);const Ws=new Qn(.052,14,14),cr=new xe(Ws,Mt);return cr.position.set(nt?-.14:.14,-.08,-.18),ai.add(cr),{shoulderGroup:nn,elbowGroup:ai,handMesh:cr,wristMesh:zi,sleeveReflectiveMesh:bn}},ki=ar(!0),xa=ar(!1);de.add(ki.shoulderGroup),de.add(xa.shoulderGroup);const Ei=new on;Ei.position.set(0,.17,-.2),de.add(Ei);const gi=4,Sa=new ln(.018,.018,gi,16);Sa.rotateZ(Math.PI/2);const Fs=new yt({color:14742270}),us=new xe(Sa,Fs);Ei.add(us);const ks=new ln(.052,.052,gi,14);ks.rotateZ(Math.PI/2);const Bs=new yt({color:62206,transparent:!0,opacity:.42,blending:Di,depthWrite:!1}),Ar=new xe(ks,Bs);Ei.add(Ar);const or=new Qn(.058,14,14),vi=new yt({color:62206}),Gr=new xe(or,vi);Gr.position.set(-gi*.5,0,0),Ei.add(Gr);const ya=new xe(or,vi);ya.position.set(gi*.5,0,0),Ei.add(ya);const Ma=new Jn(.14,.015,10,24),br=new xe(Ma,vi);br.position.set(-gi*.5,0,0),br.visible=!1,Ei.add(br);const Pt=new xe(Ma,vi);Pt.position.set(gi*.5,0,0),Pt.visible=!1,Ei.add(Pt);const mn=new Float32Array(6),wi=new Fn;wi.setAttribute("position",new yr(mn,3));const Bi=new Is({color:62206,linewidth:3}),Yn=new Dg(wi,Bi);Yn.visible=!1,s.add(Yn);const Wr=new ln(.04,.04,1,10),gl=new yt({color:62206,transparent:!0,opacity:.85,blending:Di,depthWrite:!1}),ds=new xe(Wr,gl);ds.visible=!1,s.add(ds);const zs=new Jn(.14,.012,10,28),_o=new yt({color:62206,transparent:!0,opacity:.55,blending:Di}),ri=new yt({color:62206,transparent:!0,opacity:.55,blending:Di}),Xr=new xe(zs,_o),Ea=new xe(zs,ri);s.add(Xr),s.add(Ea);const Vs=new Qn(.12,24,24),du=new Qn(.24,16,16),xo=new Qn(.072,12,12),So=new yt({color:16710083}),Hs=new yt({color:16638023,transparent:!0,opacity:.52,blending:Di,depthWrite:!1}),Gs=[];for(let nt=0;nt<4;nt++){const nn=new on,gn=new xe(Vs,So),vn=new xe(du,Hs);nn.add(gn),nn.add(vn),s.add(nn);const si=[];for(let bn=0;bn<7;bn++){const ai=new yt({color:bn<3?16638023:16096779,transparent:!0,opacity:.68-bn*.085,blending:Di,depthWrite:!1}),Ti=new xe(xo,ai),Ln=1-bn*.12;Ti.scale.set(Ln,Ln,Ln),s.add(Ti),si.push(Ti)}Gs.push({group:nn,core:gn,halo:vn,trails:si})}return{scene:s,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:m,goldOrbLight:p,backlitBackdrop:M,cableTex:b,arrivalGroup:L,arrivalToriiGroup:Z,beaconRingMesh:J,landmarkGroup:ee,landmarkAnimRefs:{},activeLandmarkKey:"",skyscrapers:ce,spotlightBeams:me,carMeshes:tt,weatherPoints:Bt,weatherGeo:kt,weatherMat:ut,weatherCount:ht,acrobatGroup:zt,jacketMat:Xt,pantsMat:xt,bootMat:Ct,headMat:Y,soleMat:Vt,gloveMat:Mt,wristBandMat:k,headbandMat:T,ribbonMat:Q,dorsalStripMat:le,urbanoAccGroup:pt,nightRunnerAccGroup:dt,infiltradoAccGroup:It,ilusionistaAccGroup:$t,shinobiAccGroup:ae,goldenLegendAccGroup:Et,solarAuraRing:$e,tacticalVisorMesh:En,goldenCrownHalo:At,poleCoreMat:Fs,poleLaserGlowMat:Bs,poleTipMat:vi,poleGlowMesh:Ar,leftGyroRing:br,rightGyroRing:Pt,upperBodyGroup:ct,torsoSpineGroup:de,headGroup:X,leftLeg:Qe,rightLeg:je,leftArm:ki,rightArm:xa,poleGroup:Ei,ribbonPivot:Yt,ribbonJoint2:Kt,ribbonJoint3:$n,grappleLaserLine:Yn,grappleLineGeo:wi,grappleBeamMesh:ds,leftReceiverRing:Xr,rightReceiverRing:Ea,leftReceiverMat:_o,rightReceiverMat:ri,orbMeshes:Gs,worldLeftHand:new te,worldRightHand:new te,grappleAnchor:new te,lastTimeSec:0,smoothKneeFlex:0,smoothHipX:0,edgeSaveBlend:0,smoothTorsoComp:0,smoothNeckComp:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38}}function YE(r,e,t,s="menu",o="urbano",l="home"){var ze,Me,We;if(!r||!e)return;const u=Math.min(.05,Math.max(.001,t-(r.lastTimeSec||t-.016)));r.lastTimeSec=t;const f=-(e.distance||0),m=e.angle||0,p=Math.abs(m),S=Math.min(1,p/Us),y=((ze=e.cfg)==null?void 0:ze.walkSpeed)||1,_=!!e.frenzyActive,M=cg(o||((Me=e.skinObj)==null?void 0:Me.id)),E=M.styleType,b=_?16638023:M.rimHex,x=_?1.75:M.rimStrength;r.jacketMat.uniforms.uBaseColor.value.setHex(M.jacketHex),r.jacketMat.uniforms.uRimColor.value.setHex(b),r.jacketMat.uniforms.uRimStrength.value=x,r.pantsMat.uniforms.uBaseColor.value.setHex(M.pantsHex),r.pantsMat.uniforms.uRimColor.value.setHex(b),r.pantsMat.uniforms.uRimStrength.value=x*.9,r.bootMat.uniforms.uBaseColor.value.setHex(M.bootHex),r.bootMat.uniforms.uRimColor.value.setHex(b),r.bootMat.uniforms.uRimStrength.value=x*1.1,r.headMat.uniforms.uBaseColor.value.setHex(M.headHex),r.headMat.uniforms.uRimColor.value.setHex(b),r.headMat.uniforms.uRimStrength.value=x,r.soleMat.color.setHex(M.soleHex),r.gloveMat.color.setHex(M.gloveHex),r.wristBandMat.color.setHex(M.wristHex),r.headbandMat.color.setHex(M.headbandHex),r.ribbonMat.color.setHex(_?16638023:M.ribbonHex),r.dorsalStripMat.color.setHex(_?16638023:M.dorsalHex);const v=E==="shinobi"?1.45:E==="ilusionista"?1.32:1;r.ribbonPivot.scale.set(v,1,1);const R=E==="urbano",U=E==="night_runner",A=E==="infiltrado",I=E==="ilusionista",N=E==="shinobi",O=E==="leyenda_dorada";r.urbanoAccGroup.visible=R,r.leftLeg.cargoPocketMesh.visible=R,r.rightLeg.cargoPocketMesh.visible=R,r.nightRunnerAccGroup.visible=U,r.leftArm.sleeveReflectiveMesh.visible=U,r.rightArm.sleeveReflectiveMesh.visible=U,r.leftLeg.thighReflectiveMesh.visible=U,r.rightLeg.thighReflectiveMesh.visible=U,r.leftLeg.calfReflectiveMesh.visible=U,r.rightLeg.calfReflectiveMesh.visible=U,r.infiltradoAccGroup.visible=A,r.tacticalVisorMesh.visible=A,r.leftLeg.tacticalKneeNeon.visible=A,r.rightLeg.tacticalKneeNeon.visible=A,r.leftLeg.tacticalHeelNeon.visible=A,r.rightLeg.tacticalHeelNeon.visible=A,r.ilusionistaAccGroup.visible=I,r.shinobiAccGroup.visible=N,r.leftLeg.shinobiBootThruster.visible=N,r.rightLeg.shinobiBootThruster.visible=N,r.goldenLegendAccGroup.visible=O,r.goldenCrownHalo.visible=O,O&&r.solarAuraRing&&(r.solarAuraRing.rotation.z=t*1.8);const w=((We=e.cfg)==null?void 0:We.city)||ss[0],L=e.targetDistance||68,V=`${w.id||w.index}_${w.monument}_${L}`;if(r.activeLandmarkKey!==V){r.activeLandmarkKey=V;const Te=w.weatherArchetype||"urban";Te==="cyber_rain"?(r.scene.background.setHex(395550),r.scene.fog.color.setHex(923714),r.weatherMat.color.setHex(62206),r.weatherMat.size=.16):Te==="golden_embers"?(r.scene.background.setHex(1181976),r.scene.fog.color.setHex(2627372),r.weatherMat.color.setHex(16638023),r.weatherMat.size=.18):Te==="blizzard"?(r.scene.background.setHex(398118),r.scene.fog.color.setHex(1059918),r.weatherMat.color.setHex(14742270),r.weatherMat.size=.2):(r.scene.background.setHex(332068),r.scene.fog.color.setHex(664121),r.weatherMat.color.setHex(3718648),r.weatherMat.size=.14);const ke=w.accentColor?parseInt(w.accentColor.replace("#",""),16):62206,pt=w.winColor?parseInt(w.winColor.replace("#",""),16):16638023;r.landmarkAnimRefs=WE(r.landmarkGroup,r.arrivalToriiGroup,w.monument||"obelisco",ke,pt)}if(r.landmarkGroup.position.set(0,0,-L-35),r.landmarkAnimRefs){if(r.landmarkAnimRefs.londonEyeWheel&&(r.landmarkAnimRefs.londonEyeWheel.rotation.z+=u*.22),r.landmarkAnimRefs.eiffelBeacon&&(r.landmarkAnimRefs.eiffelBeacon.rotation.y+=u*1.4),r.landmarkAnimRefs.libertyTorchHalo){const Te=1+Math.sin(t*6)*.18;r.landmarkAnimRefs.libertyTorchHalo.scale.set(Te,Te,Te)}r.landmarkAnimRefs.auroraMesh&&(r.landmarkAnimRefs.auroraMesh.position.x=Math.sin(t*.9)*4.5)}const W=r.weatherGeo.attributes.position,G=W.array,ne=w.weatherArchetype||"urban",j=(e.windForce||0)*(ne==="blizzard"?14:9.5),ie=ne==="cyber_rain"?-24:ne==="blizzard"?-6.5:ne==="golden_embers"?2.2:-1.8;for(let Te=0;Te<r.weatherCount;Te++){const ke=Te*3;G[ke+0]+=j*u,G[ke+1]+=ie*u,G[ke+0]>15?G[ke+0]-=30:G[ke+0]<-15&&(G[ke+0]+=30),ie<0&&G[ke+1]<-8?G[ke+1]=14:ie>0&&G[ke+1]>14&&(G[ke+1]=-8),G[ke+2]>f+8?G[ke+2]-=56:G[ke+2]<f-50&&(G[ke+2]+=56)}W.needsUpdate=!0;const he=e.poleObj||{},oe=he.poleScaleX||1;r.poleGroup.scale.set(oe,1,1),r.poleCoreMat.color.setHex(he.coreHex||14742270),r.poleLaserGlowMat.color.setHex(_?16638023:he.glowHex||62206),r.poleTipMat.color.setHex(he.tipHex||62206),r.poleLaserGlowMat.opacity=_?.85:.48;const J=_?1.45:1;r.poleGlowMesh.scale.set(1,J,J);const Z=!!he.hasGyroRings;r.leftGyroRing.visible=Z,r.rightGyroRing.visible=Z,Z&&(r.leftGyroRing.rotation.x=t*7.5,r.leftGyroRing.rotation.y=t*5.2,r.rightGyroRing.rotation.x=-t*7.5,r.rightGyroRing.rotation.y=-t*5.2);const ee=Math.min(1,u*11),F=Math.min(1,u*7.5),re=e.fallSequence||{active:!1},we=S*.56+(re.active?.22:0);r.smoothKneeFlex+=(we-r.smoothKneeFlex)*ee;const Ye=-Math.sin(m)*.25;r.smoothHipX+=(Ye-r.smoothHipX)*ee;const Ze=p>Us*.75||re.active?1:0;r.edgeSaveBlend+=(Ze-r.edgeSaveBlend)*ee;const ce=-m*.38-Math.sin(m)*.16*(1+r.edgeSaveBlend*.45),me=-m*.32;r.smoothTorsoComp+=(ce-r.smoothTorsoComp)*F,r.smoothNeckComp+=(me-r.smoothNeckComp)*F;const Re=s==="menu"&&l==="skins";re.active?(r.acrobatGroup.position.set(Math.sin(m)*.85,re.fallY||0,f),r.acrobatGroup.rotation.z=-(re.fallRotZ||m),r.acrobatGroup.rotation.x=re.fallRotX||0,r.acrobatGroup.rotation.y=0):(r.acrobatGroup.position.set(0,0,f),r.acrobatGroup.rotation.z=-m*.72,r.acrobatGroup.rotation.x=0,r.acrobatGroup.rotation.y=Re?Math.sin(t*1.15)*.65:0);const tt=s==="playing"&&!re.active,He=e.walkCycle||0,gt=Math.sin(He),Ft=Math.cos(He),ht=tt?Math.min(.56,.34*Math.pow(y,.45)):.12,Tt=tt?Math.abs(gt)*.036*Math.min(1.5,y):Math.sin(t*2.6)*.014,kt=r.smoothKneeFlex*.22;r.upperBodyGroup.position.x=r.smoothHipX,r.upperBodyGroup.position.y=Tt-kt;const ut=Math.sin(t*22)*r.edgeSaveBlend,Bt=r.smoothKneeFlex*.95;r.leftLeg.hipGroup.position.x=-.08+r.smoothHipX*.65,r.rightLeg.hipGroup.position.x=.08+r.smoothHipX*.65,r.leftLeg.hipGroup.position.y=.88-kt,r.rightLeg.hipGroup.position.y=.88-kt;const zt=-r.smoothHipX*.75,Xt=m>0?r.edgeSaveBlend*(.28+Math.abs(ut)*.22):0,xt=m<0?-r.edgeSaveBlend*(.28+Math.abs(ut)*.22):0;r.leftLeg.hipGroup.rotation.z=zt-Xt,r.rightLeg.hipGroup.rotation.z=zt-xt,r.leftLeg.hipGroup.rotation.x=gt*ht+Bt*.55+ut*.25,r.leftLeg.kneeGroup.rotation.x=-Math.max(0,Ft)*(ht*1.22)-Bt*1.1,r.leftLeg.bootGroup.rotation.x=Bt*.52,r.rightLeg.hipGroup.rotation.x=-gt*ht+Bt*.55-ut*.25,r.rightLeg.kneeGroup.rotation.x=-Math.max(0,-Ft)*(ht*1.22)-Bt*1.1,r.rightLeg.bootGroup.rotation.x=Bt*.52;const Ct=tt?Math.min(.24,(y-1)*.14):.04;r.torsoSpineGroup.rotation.z=r.smoothTorsoComp+ut*.08,r.torsoSpineGroup.rotation.x=.06+Ct+r.smoothKneeFlex*.18+r.edgeSaveBlend*.28,r.headGroup.rotation.z=r.smoothNeckComp,r.headGroup.rotation.x=-Ct*.7-r.smoothKneeFlex*.14-r.edgeSaveBlend*.2;const Y=re.active&&re.mode==="hook_rescue"||e.hookActive,Vt=gt*.12*y;r.leftArm.shoulderGroup.rotation.x=-Vt+ut*.55,r.rightArm.shoulderGroup.rotation.x=Y?-1.35:Vt-ut*.55,r.leftArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4-r.edgeSaveBlend*.22,r.rightArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4+r.edgeSaveBlend*.22,r.leftArm.elbowGroup.rotation.x=r.edgeSaveBlend*.25,r.rightArm.elbowGroup.rotation.x=(Y?1.35:0)+r.edgeSaveBlend*.25,r.poleGroup.rotation.z=-m*.42+ut*.14;const Mt=e.windForce||0,k=10.5*Math.min(1.6,y);r.ribbonPivot.rotation.y=-Math.PI*.5+Mt*.78+Math.sin(t*k)*.22,r.ribbonPivot.rotation.z=Math.cos(t*(k*1.15))*.16,r.ribbonJoint2.rotation.y=Math.sin(t*(k*1.35)-.8)*.28+Mt*.22,r.ribbonJoint3.rotation.y=Math.sin(t*(k*1.6)-1.6)*.34+Mt*.25,r.backlitBackdrop.position.z=f-210,r.arrivalGroup.position.set(0,0,-L-3.5);const T=1+Math.sin(t*5)*.08;r.beaconRingMesh.scale.set(T,T,1);for(let Te=0;Te<r.spotlightBeams.length;Te++){const ke=r.spotlightBeams[Te];ke.mesh.rotation.z=ke.baseAngle+Math.sin(t*ke.speed+ke.phaseOffset)*.14,ke.mesh.position.z>f+15?ke.mesh.position.z-=240:ke.mesh.position.z<f-235&&(ke.mesh.position.z+=240)}for(let Te=0;Te<r.skyscrapers.length;Te++){const ke=r.skyscrapers[Te];ke.position.z>f+18?ke.position.z-=286:ke.position.z<f-268&&(ke.position.z+=286)}for(let Te=0;Te<r.carMeshes.length;Te++){const ke=r.carMeshes[Te];ke.mesh.position.z+=ke.speed*u,ke.mesh.position.z>f+25?ke.mesh.position.z=f-230:ke.mesh.position.z<f-235&&(ke.mesh.position.z=f+20)}r.acrobatGroup.updateMatrixWorld(!0),r.leftArm.handMesh.getWorldPosition(r.worldLeftHand),r.rightArm.handMesh.getWorldPosition(r.worldRightHand);const Q=r.worldLeftHand,le=r.worldRightHand;if(Y){r.grappleLaserLine.visible=!0,r.grappleBeamMesh.visible=!0,r.grappleAnchor.set(0,re.ropeTopY||12,f-.5);const Te=r.grappleLineGeo.attributes.position.array;Te[0]=le.x,Te[1]=le.y,Te[2]=le.z,Te[3]=r.grappleAnchor.x,Te[4]=r.grappleAnchor.y,Te[5]=r.grappleAnchor.z,r.grappleLineGeo.attributes.position.needsUpdate=!0;const ke=le.distanceTo(r.grappleAnchor);r.grappleBeamMesh.position.lerpVectors(le,r.grappleAnchor,.5),r.grappleBeamMesh.scale.set(1,Math.max(.1,ke),1),r.grappleBeamMesh.lookAt(r.grappleAnchor),r.grappleBeamMesh.rotateX(Math.PI/2)}else r.grappleLaserLine.visible=!1,r.grappleBeamMesh.visible=!1;const ge=e.balls||[];let Ae=!1,Oe=!1;for(let Te=0;Te<ge.length;Te++){const ke=ge[Te];ke.waitingCatch&&(ke.targetHand==="left"&&(Ae=!0),ke.targetHand==="right"&&(Oe=!0))}const _e=1+(he.catchRadiusBonus||0);r.leftReceiverRing.position.copy(Q),r.rightReceiverRing.position.copy(le),r.leftReceiverMat.color.setHex(Ae?16638023:M.rimHex),r.rightReceiverMat.color.setHex(Oe?16638023:M.rimHex);const Se=(Ae?1.35:.78)*_e,De=(Oe?1.35:.78)*_e;r.leftReceiverRing.scale.set(Se,Se,Se),r.rightReceiverRing.scale.set(De,De,De);for(let Te=0;Te<4;Te++){const ke=ge[Te],pt=r.orbMeshes[Te];if(!ke||re.active){pt.group.visible=!1;for(let It=0;It<pt.trails.length;It++)pt.trails[It].visible=!1;continue}pt.group.visible=!0;const qt=ke.targetHand==="right"?Q:le,Qt=ke.targetHand==="right"?le:Q,Mn=Math.max(0,Math.min(1.05,ke.progress||0)),ti=1.48+Te%2*.22,dt=qt.x+(Qt.x-qt.x)*Mn,ni=qt.y+(Qt.y-qt.y)*Mn+4*ti*Mn*(1-Mn),Er=qt.z+(Qt.z-qt.z)*Mn-.12*Math.sin(Mn*Math.PI);pt.group.position.set(dt,ni,Er);const Mi=ke.waitingCatch?1.28:_?1.15:1;pt.group.scale.set(Mi,Mi,Mi);const $i=_||M.goldTrail?.028:.036;for(let It=0;It<pt.trails.length;It++){const zn=pt.trails[It],Dn=Mn-(It+1)*$i;if(Dn<=.01){zn.visible=!1;continue}zn.visible=!0;const jt=qt.x+(Qt.x-qt.x)*Dn,pn=qt.y+(Qt.y-qt.y)*Dn+4*ti*Dn*(1-Dn),ii=qt.z+(Qt.z-qt.z)*Dn-.12*Math.sin(Dn*Math.PI);zn.position.set(jt,pn,ii)}}r.cyanPoleLight.position.set(0,1.35,f),r.cyanPoleLight.color.setHex(b),r.cyanPoleLight.intensity=_?6.8:4.2,r.goldOrbLight.position.set(0,2.45,f-.25);const Ke=Math.min(1,(e.combo||0)/14),Fe=Math.min(1,Math.max(0,(p-Us*.28)/(Us*.62))),Ee=re.active?1:Fe,je=(Re?46:58+Ke*6)*(1-Ee)+48*Ee,B=(Re?3.25:6.2+Ke*.55)*(1-Ee)+4.95*Ee,de=(Re?2.15:3.38+Ke*.16)*(1-Ee)+2.95*Ee,Ie=Math.min(1,u*5.5);r.dynamicFov+=(je-r.dynamicFov)*Ie,r.dynamicCamDist+=(B-r.dynamicCamDist)*Ie,r.dynamicCamY+=(de-r.dynamicCamY)*Ie,Math.abs(r.camera.fov-r.dynamicFov)>.02&&(r.camera.fov=r.dynamicFov,r.camera.updateProjectionMatrix()),r.camera.position.set(Math.sin(m)*.32,r.dynamicCamY,f+r.dynamicCamDist),re.active?r.camera.lookAt(r.acrobatGroup.position):Re?r.camera.lookAt(0,1.05,f):r.camera.lookAt(r.smoothHipX*.35,1.65-r.smoothKneeFlex*.2,f-15),r.renderer.render(r.scene,r.camera)}function KE(){try{const r=localStorage.getItem(lg);return r?JSON.parse(r):null}catch{return null}}function ag(){try{const r=localStorage.getItem("nma_profile_completed")==="true",e=(localStorage.getItem("nma_player_name")||"").trim(),t=(localStorage.getItem("nma_player_country")||"").trim();return!r||!e||e==="TÚ (Equilibrista)"||e.length<3||!t}catch{return!0}}function ZE(){var en;const r=st.useRef(KE()).current,e=st.useRef((()=>{try{return localStorage.getItem("nma_economy_v2_migrated")==="true"}catch{return!1}})()).current,[t,s]=st.useState((r==null?void 0:r.lang)||"es"),[o,l]=st.useState((r==null?void 0:r.level)||1),[u,f]=st.useState((r==null?void 0:r.maxUnlockedCity)??Math.min(19,Math.floor((((r==null?void 0:r.level)||1)-1)/5))),[m,p]=st.useState((r==null?void 0:r.coins)??1200),[S,y]=st.useState((r==null?void 0:r.gems)??60),[_,M]=st.useState((r==null?void 0:r.bestScore)||0),[E,b]=st.useState((r==null?void 0:r.leaguePoints)??320),[x,v]=st.useState(()=>{try{const z=(localStorage.getItem("nma_player_name")||"").trim();if(z&&z!=="TÚ (Equilibrista)")return z}catch{}const h=((r==null?void 0:r.playerName)||"").trim();return h&&h!=="TÚ (Equilibrista)"?h:""}),[R,U]=st.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return(r==null?void 0:r.playerCountry)||"AR"}),[A,I]=st.useState(()=>ag()),[N,O]=st.useState(()=>{try{const h=(localStorage.getItem("nma_player_name")||"").trim();if(h&&h!=="TÚ (Equilibrista)")return h}catch{}return""}),[w,L]=st.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return"AR"}),[V,W]=st.useState(!1),[G,ne]=st.useState((r==null?void 0:r.vipPassActive)||!1),[j,ie]=st.useState(()=>{const z=((r==null?void 0:r.unlockedSkins)||["urbano"]).map(X=>la(X));return z.includes("urbano")||z.unshift("urbano"),Array.from(new Set(z))}),[he,oe]=st.useState(()=>la((r==null?void 0:r.equippedSkin)||"urbano")),J=st.useRef(he);st.useEffect(()=>{J.current=he},[he]);const[Z,ee]=st.useState((r==null?void 0:r.unlockedPoles)||["pole_basic"]),[F,re]=st.useState((r==null?void 0:r.equippedPole)||"pole_basic"),[we,Ye]=st.useState((r==null?void 0:r.ownedMultipliers)||[]),[Xe,Ze]=st.useState((r==null?void 0:r.unlockedVipCities)||[]),[ce,me]=st.useState((r==null?void 0:r.activeVipCityId)||null),[Re,tt]=st.useState((r==null?void 0:r.unlockedProps)||["balls"]),[He,gt]=st.useState((r==null?void 0:r.equippedProp)||"balls"),[Ft,ht]=st.useState(()=>e?(r==null?void 0:r.gearLevels)||{pole:0,boots:0,gloves:0}:{pole:0,boots:0,gloves:0}),[Tt,kt]=st.useState((r==null?void 0:r.claimedTiers)||[]),[ut,Bt]=st.useState((r==null?void 0:r.soundEnabled)??!0),[zt,Xt]=st.useState("upgrades"),[xt,Ct]=st.useState("home"),Y=st.useRef(xt);st.useEffect(()=>{Y.current=xt},[xt]);const[Vt,Mt]=st.useState("menu"),[k,T]=st.useState(null),[Q,le]=st.useState(2),[ge,Ae]=st.useState(null),[Oe,_e]=st.useState(!1),[Se,De]=st.useState([]),[Ke,Fe]=st.useState("live"),[Ee,Qe]=st.useState({progress:0,metersRemaining:68,totalMeters:68,score:0,combo:0,frenzyActive:!1,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:!0,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]}),[je,ct]=st.useState({coinsEarned:0,scoreEarned:0,lpEarned:0,gemsEarned:0,doubled:!1,revivedOnce:!1}),B=e0[t]||e0.es,Pe=Bd.find(h=>h.id===ce)||null,de=zd(o,Pe),Ie=qa(he),ze=cg(he),Me=hc.find(h=>h.id===F)||hc[0],We=sl.find(h=>h.id===He)||sl[0],Te=we.reduce((h,z)=>{const X=pc.find(ye=>ye.id===z);return X?Math.max(h,X.coinMult):h},1),ke=we.reduce((h,z)=>{const X=pc.find(ye=>ye.id===z);return X?Math.max(h,X.lpMult):h},1),pt=Pe?Pe.rewardMult:1,qt=Ie.bonusMult||1,Qt=Number((We.mult*qt*Me.scoreMult*ke*pt).toFixed(2)),Mn=Number((We.mult*qt*Me.coinMult*Te*pt).toFixed(2)),ti=Number((qt*Me.scoreMult*ke*pt).toFixed(2));st.useEffect(()=>{Nt.enabled=ut},[ut]),st.useEffect(()=>{const h=Math.min(19,Math.floor((o-1)/5));h>u&&f(h)},[o,u]),st.useEffect(()=>{try{localStorage.setItem("nma_economy_v2_migrated","true"),localStorage.setItem(lg,JSON.stringify({lang:t,level:o,maxUnlockedCity:Math.max(u,Math.min(19,Math.floor((o-1)/5))),coins:m,gems:S,bestScore:_,leaguePoints:E,playerName:x||"Equilibrista",playerCountry:R,vipPassActive:G,unlockedSkins:j,equippedSkin:he,unlockedPoles:Z,equippedPole:F,ownedMultipliers:we,unlockedVipCities:Xe,activeVipCityId:ce,unlockedProps:Re,equippedProp:He,gearLevels:Ft,claimedTiers:Tt,soundEnabled:ut}))}catch{}},[t,o,u,m,S,_,E,x,R,G,j,he,Z,F,we,Xe,ce,Re,He,Ft,Tt,ut]);const dt=st.useCallback(h=>{Ae(h),setTimeout(()=>{Ae(z=>z===h?null:z)},2600)},[]),ni=st.useCallback(async()=>{const h=(x||"Equilibrista").trim(),z=await n0({name:h,country:R,score:E,level:o});De(z)},[x,R,E,o]);st.useEffect(()=>{ni();const h=setInterval(ni,12e3);return()=>clearInterval(h)},[ni]);const Er=st.useCallback(async h=>{h&&h.preventDefault();const z=(N||"").trim().slice(0,15);if(z.length<3||z==="TÚ (Equilibrista)"){W(!0),Nt.playMissAlert();return}const X=w||"AR";W(!1),v(z),U(X);try{localStorage.setItem("nma_player_name",z),localStorage.setItem("nma_player_country",X),localStorage.setItem("nma_profile_completed","true")}catch{}I(!1),Nt.init(),Nt.playVictory(),dt(t==="es"?`✅ Perfil activo: ${co(X)} ${z}`:`✅ Profile active: ${co(X)} ${z}`),Fe("syncing"),await $o(z,X,E,o);const ye=await n0({name:z,country:X,score:E,level:o});De(ye),Fe("live")},[N,w,E,o,t,dt]),Mi=st.useCallback(()=>{O(x||""),L(R||"AR"),W(!1),I(!0)},[x,R]),$i=st.useRef(null),It=st.useRef(null),zn=st.useRef(null),Dn=st.useRef(1),jt=st.useRef({running:!1,angle:0,angularVel:0,distance:0,targetDistance:68,score:0,combo:0,maxCombo:0,frenzyActive:!1,windForce:0,windTarget:0,windTimer:0,walkCycle:0,lastStepPhase:0,controlInput:0,balls:[],sparks:[],floatingPopups:[],hookAvailable:!0,hookActive:!1,hookTimer:0,freeFallShieldsRemaining:0,revivedOnce:!1,lastTimestamp:0,hudSyncTimer:0,nearMissCooldown:0,lightningFlashAlpha:0,fallSequence:{active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},cfg:null,skinObj:null,poleObj:null,propObj:null,gear:{pole:0,boots:0,gloves:0}}),pn=st.useCallback((h,z,X="#00f2fe",ye="")=>{const Le=Dn.current++;h.floatingPopups.push({id:Le,text:z,subtext:ye,color:X,ttl:1.05}),h.floatingPopups.length>4&&h.floatingPopups.shift()},[]),ii=st.useCallback((h,z)=>{const X=h.ballCount,ye=[z,"#00f2fe","#fde047","#f43f5e","#c084fc"],Le=[];for(let Dt=0;Dt<X;Dt++){const ft=Dt%2===0;Le.push({id:Dt,fromLeft:ft,targetHand:ft?"right":"left",progress:Dt/X*.72,speed:h.juggleSpeed*(.95+Dt%3*.05),color:ye[Dt%ye.length],waitingCatch:!1})}return Le},[]),mi=st.useCallback((h=!1)=>{Nt.init();const z=zd(o,Pe),X=qa(J.current),ye=jt.current;if(ye.cfg=z,ye.skinObj=X,ye.poleObj=Me,ye.propObj=We,ye.gear={...Ft},ye.targetDistance=z.totalDistance,!h){ye.distance=0,ye.score=0,ye.combo=0,ye.maxCombo=0,ye.frenzyActive=!1,ye.hookAvailable=!0,ye.revivedOnce=!1,ye.floatingPopups=[];const Le=Me.autoSaveFall?1:0,Dt=X.freeShields||0;ye.freeFallShieldsRemaining=Le+Dt}ye.angle=h?0:(Math.random()-.5)*.08,ye.angularVel=0,ye.windForce=0,ye.windTarget=(Math.random()-.5)*z.windBase*.5,ye.windTimer=1.6,ye.controlInput=0,ye.hookActive=!1,ye.hookTimer=0,ye.nearMissCooldown=0,ye.lightningFlashAlpha=0,ye.fallSequence={active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},ye.balls=ii(z,We.color),ye.sparks=[],ye.lastTimestamp=performance.now(),ye.running=!0,Qe({progress:Math.min(100,Math.floor(ye.distance/ye.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(ye.targetDistance-ye.distance)),totalMeters:ye.targetDistance,score:Math.floor(ye.score),combo:ye.combo,frenzyActive:ye.frenzyActive,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:ye.hookAvailable,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]})},[o,Pe,Me,We,Ft,ii]),sr=()=>{if(ag()){I(!0);return}mi(!1),Mt("playing")},Fi=()=>{Vt==="playing"?(jt.current.running=!1,Nt.updateWind(0),Mt("paused")):Vt==="paused"&&(jt.current.lastTimestamp=performance.now(),jt.current.running=!0,Mt("playing"))},Yi=st.useCallback(h=>{var At,Yt,Pn,mt,Kt;const z=jt.current;if(!z.running||z.fallSequence.active)return;const X=qa(J.current),ye=(((At=z.gear)==null?void 0:At.gloves)||0)*.015,Le=((Yt=z.poleObj)==null?void 0:Yt.catchRadiusBonus)||0,Dt=(X==null?void 0:X.catchWindowBonus)||0,ft=Math.max(.5,.74-(((Pn=z.cfg)==null?void 0:Pn.catchWindow)||.24)-ye-(Le+Dt)*.35);let an=null,En=-1;for(const dn of z.balls)dn.targetHand===h&&dn.progress>=ft&&dn.progress>En&&(En=dn.progress,an=dn);if(an){const dn=an.progress>=.85&&an.progress<=.96;an.fromLeft=h==="left",an.targetHand=h==="left"?"right":"left",an.progress=.02,an.waitingCatch=!1,z.combo+=1,z.combo>z.maxCombo&&(z.maxCombo=z.combo);const Vn=z.frenzyActive;z.frenzyActive=z.combo>=10,!Vn&&z.frenzyActive?(Nt.playFrenzyStart(),pn(z,t==="es"?"🔥 ¡MODO FRENESÍ x2!":"🔥 FRENZY MODE x2!","#fde047",t==="es"?"COMBO x10 ALCANZADO":"COMBO x10 REACHED")):(Nt.playCatch(z.combo,z.frenzyActive),dn&&pn(z,t==="es"?`⚡ ¡PERFECTO! x${z.combo}`:`⚡ PERFECT! x${z.combo}`,z.frenzyActive?"#fde047":"#00f2fe"));const $n=z.frenzyActive?2:1;if(z.score+=Math.round((28+z.combo*9)*Qt*$n),!((mt=z.poleObj)!=null&&mt.noCatchRecoil)){const Hn=((Kt=z.cfg)==null?void 0:Kt.catchRecoilImpulse)??.05;z.angularVel+=(h==="left"?-1:1)*Hn}for(let Hn=0;Hn<10;Hn++)z.sparks.push({hand:h,x:(Math.random()-.5)*.25,y:(Math.random()-.5)*.25,vx:(Math.random()-.5)*3.8,vy:.9+Math.random()*2.8,vz:(Math.random()-.5)*2.8,ttl:.42,color:z.frenzyActive?"#fde047":an.color})}else z.angularVel+=h==="left"?-.16:.16,z.combo=0,z.frenzyActive=!1,Nt.playMissAlert()},[Qt,t,pn]),$t=st.useCallback(()=>{const h=jt.current;!h.running||!h.hookAvailable||h.fallSequence.active||(h.hookAvailable=!1,h.hookActive=!0,h.hookTimer=2.6,h.angle*=.15,h.angularVel=0,Nt.playHookRescue(),pn(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80",t==="es"?"ESTABILIDAD RESTAURADA":"STABILITY RESTORED"),dt(t==="es"?"🪝 ¡Gancho Salvavidas Activado!":"🪝 Lifeline Hook Activated!"))},[t,dt,pn]);st.useEffect(()=>{const h=X=>{const ye=jt.current;Vt!=="playing"||!ye.running||(X.key==="ArrowLeft"||X.key==="a"||X.key==="A"?ye.controlInput=-1:X.key==="ArrowRight"||X.key==="d"||X.key==="D"?ye.controlInput=1:X.key==="q"||X.key==="Q"?Yi("left"):X.key==="e"||X.key==="E"?Yi("right"):X.key===" "?(X.preventDefault(),$t()):X.key==="Escape"&&Fi())},z=X=>{const ye=jt.current;(X.key==="ArrowLeft"||X.key==="a"||X.key==="A")&&ye.controlInput<0&&(ye.controlInput=0),(X.key==="ArrowRight"||X.key==="d"||X.key==="D")&&ye.controlInput>0&&(ye.controlInput=0)};return window.addEventListener("keydown",h),window.addEventListener("keyup",z),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",z)}},[Vt,Yi,$t]),st.useEffect(()=>{const h=$i.current;if(!h)return;const z=$E(h);It.current=z;const X=()=>{if(!h||!It.current)return;const ye=h.clientWidth||390,Le=h.clientHeight||844;It.current.camera.aspect=ye/Le,It.current.camera.updateProjectionMatrix(),It.current.renderer.setSize(ye,Le)};return window.addEventListener("resize",X),()=>{window.removeEventListener("resize",X),Nt.updateWind(0),z&&z.renderer&&z.renderer.domElement&&(h.contains(z.renderer.domElement)&&h.removeChild(z.renderer.domElement),z.renderer.dispose())}},[]),st.useEffect(()=>{const h=jt.current,z=qa(J.current);h.cfg?(h.skinObj=z,h.poleObj=Me,h.propObj=We,h.gear={...Ft},!h.running&&Vt==="menu"&&(h.cfg=de,h.targetDistance=de.totalDistance)):(h.cfg=de,h.skinObj=z,h.poleObj=Me,h.propObj=We,h.gear={...Ft},h.targetDistance=de.totalDistance,h.balls=ii(de,We.color));const X=ye=>{var an,En,At,Yt,Pn;const Le=Math.min(.05,Math.max(.001,(ye-(h.lastTimestamp||ye))/1e3));h.lastTimestamp=ye;const Dt=J.current,ft=qa(Dt);if(h.skinObj=ft,h.floatingPopups.length>0)for(let mt=h.floatingPopups.length-1;mt>=0;mt--)h.floatingPopups[mt].ttl-=Le,h.floatingPopups[mt].ttl<=0&&h.floatingPopups.splice(mt,1);if(h.lightningFlashAlpha>0&&(h.lightningFlashAlpha=Math.max(0,h.lightningFlashAlpha-Le*2.4)),h.running&&Vt==="playing"){const mt=h.cfg;if(h.fallSequence.active)if(h.fallSequence.timer+=Le,Nt.updateWind(0),h.fallSequence.mode==="hook_rescue")if(h.fallSequence.timer<.58)h.fallSequence.fallVy-=24*Le,h.fallSequence.fallY+=h.fallSequence.fallVy*Le,h.fallSequence.fallRotX+=2.2*Le,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*2.5*Le,h.fallSequence.ropeTopY=Math.max(h.fallSequence.fallY+1.8,16-h.fallSequence.timer*28);else if(h.fallSequence.timer<1.38){const Kt=(h.fallSequence.timer-.58)/.8;h.fallSequence.fallY=Vr(h.fallSequence.fallY,0,Kt*.25),h.fallSequence.fallRotX=Vr(h.fallSequence.fallRotX,0,Kt*.3),h.fallSequence.fallRotZ=Vr(h.fallSequence.fallRotZ,0,Kt*.3),h.fallSequence.ropeTopY=h.fallSequence.fallY+2.2+Kt*10}else h.fallSequence.active=!1,h.fallSequence.mode=null,h.fallSequence.fallY=0,h.fallSequence.fallRotX=0,h.fallSequence.fallRotZ=0,h.angle=0,h.angularVel=0,h.hookActive=!0,h.hookTimer=2,pn(h,t==="es"?"🪝 ¡RESCATE EN EL AIRE!":"🪝 MID-AIR HOOK RESCUE!","#4ade80",t==="es"?"DEVUELTO AL CABLE":"PULLED BACK TO CABLE");else h.fallSequence.mode==="gameover_fall"&&(h.fallSequence.fallVy-=28*Le,h.fallSequence.fallY+=h.fallSequence.fallVy*Le,h.fallSequence.fallRotX+=3.4*Le,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*4.2*Le,h.fallSequence.timer>=1.5&&(h.running=!1,ct({coinsEarned:h.fallSequence.finalCoins,scoreEarned:h.fallSequence.finalScore,lpEarned:h.fallSequence.finalLp,gemsEarned:0,doubled:!1,revivedOnce:h.revivedOnce}),p(Kt=>Kt+h.fallSequence.finalCoins),b(Kt=>{const dn=Kt+h.fallSequence.finalLp;return $o(x||"Equilibrista",R,dn,o),dn}),M(Kt=>Math.max(Kt,h.fallSequence.finalScore)),Mt("gameover")));else{const Kt=Math.min(.45,(h.gear.pole||0)*.048),dn=((an=h.poleObj)==null?void 0:an.gravityReduction)||0,Vn=Math.max(.22,(1-Kt)*(1-dn)),$n=Math.min(.48,(h.gear.boots||0)*.052),Hn=ft.windReduction||0,Hr=Math.max(.2,(1-$n)*(1-Hn)),ar=Math.max(.25,1-Math.min(.75,(((En=h.poleObj)==null?void 0:En.stepDamp)||0)+(ft.stepDampBonus||0)));if(h.windTimer-=Le,h.windTimer<=0){const Pt=mt.gustInterval??1.8;h.windTimer=Pt*(.75+Math.random()*.45);const mn=Math.abs(h.windTarget)>.05&&Math.random()<.72?-Math.sign(h.windTarget):Math.random()<.5?-1:1,wi=(.45+Math.random()*.65)*mt.windBase*mn;h.windTarget=wi*Hr,((At=mt.city)==null?void 0:At.weatherArchetype)==="cyber_rain"&&Math.abs(wi)>.7&&Math.random()<.45&&(h.lightningFlashAlpha=.85)}h.windForce+=(h.windTarget-h.windForce)*Le*2.8,Nt.updateWind(h.windForce),h.hookActive&&(h.hookTimer-=Le,h.hookTimer<=0&&(h.hookActive=!1));const ki=h.walkCycle,xa=3.2*mt.walkSpeed;h.walkCycle+=Le*xa;const Ei=Math.floor(ki/Math.PI),gi=Math.floor(h.walkCycle/Math.PI);if(gi!==Ei){const Pt=gi%2===0?1:-1,mn=(mt.stepSwayImpulse??.04)*ar;h.angularVel+=Pt*mn*(h.hookActive?.25:1),Nt.playFootstep(mt.walkSpeed)}const Sa=Math.sin(h.angle)*mt.gravity*Vn*(h.hookActive?.25:1),Fs=h.windForce*.78*(h.hookActive?.2:1),us=h.controlInput*3.15,ks=Math.sin(ye*.0047)*.12*mt.walkSpeed*ar*(h.hookActive?.2:1);h.angularVel+=(Sa+Fs+us+ks)*Le,h.angularVel*=Math.pow(.88,Le*60),h.angle+=h.angularVel*Le,h.hookActive&&(h.angle*=Math.pow(.86,Le*60)),h.nearMissCooldown>0&&(h.nearMissCooldown-=Le);const Bs=Math.abs(h.angle)/Us;if(Bs>=.78&&Bs<.98&&h.nearMissCooldown<=0&&h.angle*h.controlInput<0&&Math.abs(h.controlInput)>.1){h.nearMissCooldown=2.4;const Pt=Math.round(150*Qt*(h.frenzyActive?2:1));h.score+=Pt,Nt.playNearMiss(),pn(h,t==="es"?`⚡ ¡SALVADA AL LÍMITE! +${Pt}`:`⚡ NEAR-MISS SAVE! +${Pt}`,"#38bdf8",t==="es"?"RECUPERACIÓN EXTREMA":"EXTREME RECOVERY")}const Ar=Math.max(.35,1-Math.abs(h.angle)/(Us*1.15)),or=4.6*mt.walkSpeed*(.72+Ar*.38);h.distance+=or*Le,h.score+=or*Le*12*Qt*(h.frenzyActive?2:1);const vi={left:!1,right:!1},Gr=(((Yt=h.gear)==null?void 0:Yt.gloves)||0)*.015,ya=((Pn=h.poleObj)==null?void 0:Pn.catchRadiusBonus)||0,Ma=ft.catchWindowBonus||0,br=Math.max(.5,.74-mt.catchWindow-Gr-(ya+Ma)*.35);for(const Pt of h.balls)if(Pt.progress+=Pt.speed*Le,Pt.progress>=br&&Pt.progress<=1.02?(vi[Pt.targetHand]=!0,Pt.waitingCatch=!0):Pt.waitingCatch=!1,Pt.progress>1.03){Pt.fromLeft=Pt.targetHand==="left",Pt.targetHand=Pt.fromLeft?"right":"left",Pt.progress=0,Pt.waitingCatch=!1,h.combo=0,h.frenzyActive=!1;const mn=.24+(mt.speedPhase||0)*.04;h.angularVel+=Pt.targetHand==="left"?-mn:mn,Nt.playMissAlert(),pn(h,t==="es"?"⚠️ ¡ESFERA PERDIDA!":"⚠️ DROPPED ORB!","#ef4444")}for(let Pt=h.sparks.length-1;Pt>=0;Pt--){const mn=h.sparks[Pt];mn.ttl-=Le,mn.ttl<=0?h.sparks.splice(Pt,1):(mn.x+=mn.vx*Le,mn.y+=mn.vy*Le,mn.vy-=5.5*Le)}if(Math.abs(h.angle)>=Us)if(h.freeFallShieldsRemaining>0)h.freeFallShieldsRemaining-=1,h.angle*=.12,h.angularVel=0,h.hookActive=!0,h.hookTimer=2.2,Nt.playHookRescue(),pn(h,t==="es"?"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!":"🛡️ ANTI-FALL SHIELD ACTIVATED!","#fde047",t==="es"?"PROTECCIÓN PRO / VIP":"PRO / VIP PROTECTION");else if(h.hookAvailable)h.hookAvailable=!1,h.fallSequence.active=!0,h.fallSequence.mode="hook_rescue",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-3.8,h.fallSequence.fallRotX=.18,h.fallSequence.fallRotZ=h.angle*.8,h.fallSequence.ropeTopY=16,Nt.playFallScream(),setTimeout(()=>Nt.playHookRescue(),460),pn(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80");else{const Pt=Math.floor(h.score),mn=Math.max(15,Math.floor((h.distance*1.4+h.maxCombo*6)*Mn)),wi=Math.max(10,Math.floor((h.distance*.8+h.maxCombo*4)*ti));h.fallSequence.active=!0,h.fallSequence.mode="gameover_fall",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-4.5,h.fallSequence.fallRotX=.25,h.fallSequence.fallRotZ=h.angle,h.fallSequence.finalCoins=mn,h.fallSequence.finalScore=Pt,h.fallSequence.finalLp=wi,Nt.updateWind(0),Nt.playFallScream()}else if(h.distance>=h.targetDistance){h.running=!1,Nt.updateWind(0),Nt.playVictory();const Pt=Math.floor(h.score+500*Qt),mn=Math.floor((125+o*26+h.maxCombo*12)*Mn),wi=Math.floor((95+o*16+h.maxCombo*9)*ti),Bi=(Pe?Pe.gemBonus:0)+(o%5===0?12:4);ct({coinsEarned:mn,scoreEarned:Pt,lpEarned:wi,gemsEarned:Bi,doubled:!1,revivedOnce:h.revivedOnce}),p(Yn=>Yn+mn),y(Yn=>Yn+Bi),b(Yn=>{const Wr=Yn+wi;return $o(x||"Equilibrista",R,Wr,o+1),Wr}),M(Yn=>Math.max(Yn,Pt)),f(Yn=>Math.max(Yn,Math.min(19,Math.floor(o/5)))),Mt("victory");return}h.hudSyncTimer+=Le,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Qe({progress:Math.min(100,Math.floor(h.distance/h.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(h.targetDistance-h.distance)),totalMeters:h.targetDistance,score:Math.floor(h.score),combo:h.combo,frenzyActive:h.frenzyActive,tiltRatio:Math.max(-1,Math.min(1,h.angle/Us)),windForce:h.windForce,juggleAlertHands:vi,hookAvailable:h.hookAvailable,hookActive:h.hookActive,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))}h.fallSequence.active&&(h.hudSyncTimer+=Le,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Qe(Kt=>({...Kt,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))))}else h.walkCycle+=Le*1.4;It.current&&YE(It.current,h,ye*.001,Vt,J.current,Y.current),zn.current=requestAnimationFrame(X)};return zn.current=requestAnimationFrame(X),()=>{zn.current&&cancelAnimationFrame(zn.current)}},[Vt,de,Me,We,Ft,Qt,Mn,ti,Pe,o,t,x,R,ii,pn]);function Vr(h,z,X){return h+(z-h)*Math.max(0,Math.min(1,X))}st.useEffect(()=>{if(!k)return;le(2);const h=setInterval(()=>{le(z=>z<=1?(clearInterval(h),0):z-1)},1e3);return()=>clearInterval(h)},[k]);const wr=()=>{const h=k;if(T(null),h==="revive"){const z=jt.current;z.revivedOnce=!0,z.hookAvailable=!0,mi(!0),Mt("playing"),dt(t==="es"?"⚡ ¡Segunda oportunidad activada!":"⚡ Second chance activated!")}else h==="double"?je.doubled||(p(z=>z+je.coinsEarned),b(z=>{const X=z+je.lpEarned;return $o(x||"Equilibrista",R,X,o),X}),ct(z=>({...z,coinsEarned:z.coinsEarned*2,lpEarned:z.lpEarned*2,doubled:!0})),dt(t==="es"?"🎬 ¡Recompensas Duplicadas x2!":"🎬 Rewards Doubled x2!")):h==="gems"?(y(z=>z+35),dt(t==="es"?"💎 +35 Gemas Gratis acreditadas":"💎 +35 Free Gems credited")):h==="coins"&&(p(z=>z+1500),dt(t==="es"?"🪙 +1.500 Monedas Gratis acreditadas":"🪙 +1,500 Free Coins credited"))},Tr=()=>{const h=o+1;l(h),f(z=>Math.max(z,Math.min(19,Math.floor((h-1)/5)))),setTimeout(()=>{const z=jt.current,X=zd(h,Pe),ye=qa(J.current);z.cfg=X,z.skinObj=ye,z.targetDistance=X.totalDistance,z.distance=0,z.score=0,z.combo=0,z.maxCombo=0,z.frenzyActive=!1,z.angle=0,z.angularVel=0,z.hookAvailable=!0,z.hookActive=!1,z.revivedOnce=!1;const Le=Me.autoSaveFall?1:0,Dt=ye.freeShields||0;z.freeFallShieldsRemaining=Le+Dt,z.fallSequence.active=!1,z.fallSequence.mode=null,z.balls=ii(X,We.color),z.lastTimestamp=performance.now(),z.running=!0,Mt("playing")},30)},P=h=>{const z=Ft[h.id]||0,X=Qm(z);if(!X.isMax)if(X.isProTier){if(G){ht(ye=>({...ye,[h.id]:z+1})),Nt.playVictory(),dt(`👑 ${h.name[t]} Élite Nv.${z+1}/10 (Pase VIP)!`);return}S>=X.gemCost?(y(ye=>ye-X.gemCost),ht(ye=>({...ye,[h.id]:z+1})),Nt.playVictory(),dt(`👑 ${h.name[t]} Élite Nv.${z+1}/10!`)):(Ct("store"),dt(t==="es"?`👑 Nivel Élite (6-10): Requiere ${X.gemCost} Gemas o Pase VIP Pro`:`👑 Elite Tier (6-10): Requires ${X.gemCost} Gems or VIP Pro Pass`))}else{if(m<X.coinCost){dt(t==="es"?`🪙 Necesitás ${X.coinCost.toLocaleString()} Monedas`:`🪙 Need ${X.coinCost.toLocaleString()} Coins`);return}p(ye=>ye-X.coinCost),ht(ye=>({...ye,[h.id]:z+1})),Nt.playCatch(z+2,!1),dt(`${h.icon} ${h.name[t]} Nv.${z+1}/10!`)}},$=h=>{if(Z.includes(h.id)||h.isVipOnly&&G){Z.includes(h.id)||ee(z=>[...z,h.id]),re(h.id),Nt.playCatch(4,!1),dt(`${h.icon} ${h.name[t]} ${B.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(z=>z-h.cost),ee(z=>[...z,h.id]),re(h.id),Nt.playVictory(),dt(`${h.icon} ${h.name[t]}!`)):dt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(z=>z-h.gemCost),ee(z=>[...z,h.id]),re(h.id),Nt.playVictory(),dt(`👑 ${h.name[t]} Desbloqueada!`)):(Ct("store"),dt(t==="es"?`👑 Vara Exclusiva (${h.usdPrice||`${h.gemCost} 💎`}): Visitá la Tienda VIP`:`👑 Exclusive Pole (${h.usdPrice||`${h.gemCost} 💎`}): Visit VIP Store`))},pe=h=>{const z=la(h.id);if(j.includes(z)||j.includes(h.legacyId)||h.isVipOnly&&G){j.includes(z)||ie(ye=>Array.from(new Set([...ye,z]))),J.current=z,jt.current.skinObj=h,oe(z),Nt.playCatch(5,!0),dt(`${h.icon} ${h.name[t]} — ${B.equipped}!`);return}h.currency==="coins"?m>=h.cost?(p(ye=>ye-h.cost),ie(ye=>Array.from(new Set([...ye,z]))),J.current=z,jt.current.skinObj=h,oe(z),Nt.playVictory(),dt(`${h.icon} ${h.name[t]} ${B.equipped}!`)):dt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(ye=>ye-h.gemCost),ie(ye=>Array.from(new Set([...ye,z]))),J.current=z,jt.current.skinObj=h,oe(z),Nt.playVictory(),dt(`👑 ${h.name[t]} Desbloqueado y Equipado!`)):(Ct("store"),dt(t==="es"?`👑 Aspecto Pro (${h.usdPrice||`${h.gemCost} 💎`}): Disponible en Tienda VIP`:`👑 Pro Skin (${h.usdPrice||`${h.gemCost} 💎`}): Available in VIP Store`))},ae=h=>{if(we.includes(h.id)){dt(t==="es"?"✅ Multiplicador ya activo":"✅ Multiplier already active");return}if(h.isVipOnly&&G){Ye(z=>[...z,h.id]),Nt.playVictory(),dt(`👑 ${h.name[t]} Activado!`);return}h.currency==="coins"?m>=h.cost?(p(z=>z-h.cost),Ye(z=>[...z,h.id]),Nt.playVictory(),dt(`🚀 ${h.name[t]} Activado!`)):dt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(z=>z-h.gemCost),Ye(z=>[...z,h.id]),Nt.playVictory(),dt(`👑 ${h.name[t]} Activado!`)):(Ct("store"),dt(t==="es"?`👑 Multiplicador Pro (${h.usdPrice}): Requiere ${h.gemCost} 💎 o Pase VIP`:`👑 Pro Multiplier (${h.usdPrice}): Requires ${h.gemCost} 💎 or VIP Pass`))},se=h=>{if(Re.includes(h.id)){gt(h.id),dt(`${h.icon} ${h.name[t]} ${B.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(z=>z-h.cost),tt(z=>[...z,h.id]),gt(h.id),Nt.playVictory(),dt(`${h.icon} ${h.name[t]}!`)):dt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.cost?(y(z=>z-h.cost),tt(z=>[...z,h.id]),gt(h.id),Nt.playVictory(),dt(`${h.icon} ${h.name[t]}!`)):(Ct("store"),dt(t==="es"?"💎 Gemas insuficientes":"💎 Not enough gems"))},Be=h=>{const z=Math.max(u,Math.min(19,Math.floor((o-1)/5)));if(h>z)return;const X=h*5+1;me(null),l(X),_e(!1),dt(t==="es"?`✈️ Viajaste a ${ss[h].flag} ${ss[h].name.es} (Nivel ${X})`:`✈️ Traveled to ${ss[h].flag} ${ss[h].name.en} (Level ${X})`)},Ve=h=>{if(G||Xe.includes(h.id)){me(h.id),_e(!1),Nt.playVictory(),dt(t==="es"?`👑 Ciudad VIP Activa: ${h.flag} ${h.name.es} (x${h.rewardMult} Recompensas)`:`👑 VIP City Active: ${h.flag} ${h.name.en} (x${h.rewardMult} Rewards)`);return}S>=h.gemUnlockCost?(y(X=>X-h.gemUnlockCost),Ze(X=>[...X,h.id]),me(h.id),_e(!1),Nt.playVictory(),dt(`👑 ${h.flag} ${h.name[t]} Desbloqueada!`)):(_e(!1),Ct("store"),dt(t==="es"?`🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${h.gemUnlockCost} 💎`:`🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${h.gemUnlockCost} 💎`))},Ge=h=>{y(z=>z+h.gems),p(z=>z+h.coins),h.isVipPassBundle&&(ne(!0),ee(z=>Array.from(new Set([...z,"pole_imperial","pole_quantum"]))),re("pole_imperial"),ie(z=>Array.from(new Set([...z,"shinobi","leyenda_dorada"]))),J.current="leyenda_dorada",oe("leyenda_dorada"),Ye(z=>Array.from(new Set([...z,"mult_x3_pro"]))),Ze(Bd.map(z=>z.id))),b(z=>{const X=z+(h.leaguePts||200);return $o(x||"Equilibrista",R,X,o),X}),Nt.playVictory(),dt(h.isVipPassBundle?t==="es"?"👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas":"👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked":`👑 ${h.name[t]} (+${h.gems} 💎 / +${h.coins.toLocaleString()} 🪙)`)},et=h=>{Tt.includes(h.id)||E<h.requiredLp||(kt(z=>[...z,h.id]),y(z=>z+h.gemsReward),p(z=>z+h.coinsReward),Nt.playVictory(),dt(`🏆 +${h.gemsReward} 💎 & +${h.coinsReward} 🪙!`))},it=Se.length>0?Se:[{id:"player_self",name:x||"Equilibrista",country:R,flag:co(R),score:E,lp:E,level:o,isPlayer:!0}],St=it.findIndex(h=>h.isPlayer),Et=St>=0?St+1:1,$e=Math.abs(Ee.windForce)<.08?"•":Ee.windForce>0?">>>":"<<<",Ut=Math.max(u,Math.min(19,Math.floor((o-1)/5))),un=co(R);return D.jsx("div",{className:"app-root",children:D.jsxs("div",{className:"phone-frame",children:[D.jsx("div",{ref:$i,className:"game-canvas",style:{width:"100%",height:"100%",position:"absolute",inset:0}}),ge&&D.jsx("div",{className:"toast-banner",children:ge}),A&&D.jsx("div",{className:"modal-backdrop onboarding-backdrop",style:{zIndex:250},children:D.jsxs("form",{className:"modal-card onboarding-modal-card",onSubmit:Er,children:[D.jsx("div",{className:"onboarding-crown-badge",children:t==="es"?"🏆 LIGA MUNDIAL EN VIVO":"🏆 LIVE WORLD LEAGUE"}),D.jsx("h2",{className:"modal-title onboarding-title",children:t==="es"?"⚡ CREÁ TU PERFIL DE EQUILIBRISTA":"⚡ CREATE YOUR TIGHTROPE PROFILE"}),D.jsx("p",{className:"modal-subtitle onboarding-subtitle",children:t==="es"?"Elegí tu nombre y país para competir en el Ranking Mundial en vivo.":"Choose your name and country to compete on the Live World Leaderboard."}),D.jsxs("div",{className:"onboarding-field-group",children:[D.jsx("label",{className:"onboarding-label",htmlFor:"onboarding-name-input",children:t==="es"?"1. TU NOMBRE O APODO (3 A 15 CARACTERES)":"1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)"}),D.jsx("input",{id:"onboarding-name-input",type:"text",maxLength:15,autoFocus:!0,className:`onboarding-input ${V?"input-error-shake":""}`,placeholder:t==="es"?"Tu Nombre o Apodo (Ej: Maury_AR)":"Your Nickname (e.g. Maury_AR)",value:N,onChange:h=>{O(h.target.value),V&&W(!1)}}),V&&D.jsx("div",{className:"onboarding-error-msg",children:t==="es"?"⚠️ Ingresá un nombre válido de al menos 3 caracteres.":"⚠️ Please enter a valid name of at least 3 characters."})]}),D.jsxs("div",{className:"onboarding-field-group",children:[D.jsx("label",{className:"onboarding-label",children:t==="es"?"2. SELECCIONÁ TU PAÍS / BANDERA":"2. SELECT YOUR COUNTRY / FLAG"}),D.jsx("div",{className:"onboarding-country-grid",children:y_.map(h=>{const z=w===h.code;return D.jsxs("button",{type:"button",className:`onboarding-country-chip ${z?"selected":""}`,onClick:()=>L(h.code),children:[D.jsx("span",{className:"country-chip-flag",children:h.flag}),D.jsx("span",{className:"country-chip-code",children:h.code}),D.jsx("span",{className:"country-chip-name",children:h.name})]},h.code)})})]}),D.jsx("button",{type:"submit",className:"onboarding-submit-btn",children:t==="es"?"🚀 GUARDAR Y ENTRAR A COMPETIR":"🚀 SAVE & START COMPETING"})]})}),Oe&&D.jsx("div",{className:"modal-backdrop",style:{zIndex:120},children:D.jsxs("div",{className:"modal-card",style:{maxHeight:"86%",display:"flex",flexDirection:"column",padding:"16px 14px"},children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[D.jsx("h2",{className:"modal-title",style:{fontSize:16,margin:0},children:t==="es"?"🌍 CIUDADES Y MONUMENTOS 3D":"🌍 CITIES & 3D LANDMARKS"}),D.jsx("button",{className:"hud-pause-btn",onClick:()=>_e(!1),style:{width:30,height:30,fontSize:13},children:"✕"})]}),D.jsxs("div",{className:"items-scroll-list",style:{flex:1,overflowY:"auto",paddingRight:4},children:[D.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#fde047",letterSpacing:.8,marginBottom:6,marginTop:2},children:B.vipCitiesTitle}),Bd.map(h=>{const z=G||Xe.includes(h.id),X=ce===h.id;return D.jsxs("div",{className:"item-card vip-city-card",style:{cursor:"pointer",borderColor:X?"rgba(253, 224, 71, 0.95)":"rgba(250, 204, 21, 0.45)"},onClick:()=>Ve(h),children:[D.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:z?h.flag:"🔒"}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",style:{color:"#fde047"},children:["👑 ",h.name[t]]}),D.jsxs("div",{className:"benefit-pill-tag pro",children:["x",h.rewardMult," 🪙/LP • +",h.gemBonus," 💎 POR CRUCE"]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${X?"equipped":"buy-gems"}`,children:X?t==="es"?"ACTIVA":"ACTIVE":z?t==="es"?"VIAJAR":"TRAVEL":`👑 ${h.gemUnlockCost} 💎`})]},h.id)}),D.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#38bdf8",letterSpacing:.8,margin:"12px 0 6px"},children:t==="es"?"🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)":"🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)"}),ss.map((h,z)=>{var ft,an,En,At;const X=z<=Ut,ye=!ce&&de.cityIndex===z,Le=z*5+1,Dt=z*5+5;return D.jsxs("div",{className:`item-card ${ye?"selected":""}`,style:{opacity:X?1:.52,cursor:X?"pointer":"not-allowed"},onClick:()=>X&&Be(z),children:[D.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:X?h.flag:"🔒"}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",children:[z+1,". ",h.name[t]]}),D.jsxs("div",{className:"benefit-pill-tag",children:["🗿 ",((ft=h.monumentName)==null?void 0:ft[t])||((an=h.weatherLabel)==null?void 0:an[t])]}),D.jsx("div",{className:"item-desc",children:t==="es"?`Niveles ${Le} al ${Dt} • ${(En=h.weatherLabel)==null?void 0:En.es}`:`Levels ${Le} to ${Dt} • ${(At=h.weatherLabel)==null?void 0:At.en}`})]}),D.jsx("button",{className:`item-action-btn ${ye?"equipped":X?"buy-coins":"locked"}`,disabled:!X,children:ye?t==="es"?"ACTUAL":"ACTIVE":X?t==="es"?`NV. ${Le}`:`LVL ${Le}`:`🔒 NV.${Le}`})]},h.index)})]})]})}),Vt==="playing"&&D.jsxs("div",{className:"gameplay-hud-layer",children:[Ee.lightningFlashAlpha>.05&&D.jsx("div",{className:"weather-lightning-flash",style:{opacity:Ee.lightningFlashAlpha}}),D.jsxs("div",{className:"vector-hud-top",children:[D.jsxs("div",{className:"vector-top-row",children:[D.jsxs("div",{className:"vector-city-tag",children:[D.jsxs("span",{children:[de.city.flag," ",de.city.name[t].toUpperCase()," •"," ",Pe?"👑 VIP":`${B.level} ${o}`," • x",Qt]}),D.jsxs("span",{className:"vector-meters-left",children:[Ee.metersRemaining,"m / ",Ee.totalMeters,"m"]})]}),D.jsx("button",{className:"hud-pause-btn",onClick:Fi,"aria-label":"Pause",children:"⏸"})]}),D.jsx("div",{className:"vector-progress-rail",children:D.jsx("div",{className:"vector-progress-fill",style:{width:`${Ee.progress}%`}})}),D.jsxs("div",{className:"vector-Horizon-pill-row",children:[D.jsxs("div",{className:`vector-horizon-pill ${Math.abs(Ee.tiltRatio)>.65?"danger":""}`,children:[D.jsx("div",{className:"vector-horizon-center-tick"}),D.jsx("div",{className:"vector-horizon-dot",style:{left:`${50+Math.max(-46,Math.min(46,Ee.tiltRatio*46))}%`}})]}),D.jsxs("div",{className:"vector-wind-badge",children:["🌬️ ",$e," ",Math.abs(Ee.windForce*18).toFixed(0)," km/h"]}),D.jsxs("div",{className:`vector-score-badge ${Ee.frenzyActive?"frenzy-glow":""}`,children:[Ee.score.toLocaleString()," pts",Ee.combo>1?` • x${Ee.combo}`:"",Ee.frenzyActive?" 🔥":""]})]})]}),Ee.floatingPopups&&Ee.floatingPopups.length>0&&D.jsx("div",{className:"floating-popups-layer",children:Ee.floatingPopups.map(h=>D.jsxs("div",{className:"floating-feedback-popup",style:{color:h.color,borderColor:h.color},children:[D.jsx("div",{className:"floating-popup-main",children:h.text}),h.subtext&&D.jsx("div",{className:"floating-popup-sub",children:h.subtext})]},h.id))}),D.jsxs("div",{className:"vector-controls-layer",children:[D.jsxs("div",{className:"vector-touch-zones",children:[D.jsx("button",{className:"vector-touch-half left",onPointerDown:()=>{jt.current.controlInput=-1},onPointerUp:()=>{jt.current.controlInput<0&&(jt.current.controlInput=0)},onPointerLeave:()=>{jt.current.controlInput<0&&(jt.current.controlInput=0)},children:D.jsxs("span",{className:"vector-corner-hint",children:["◀ ",B.leanLeft]})}),D.jsx("button",{className:"vector-touch-half right",onPointerDown:()=>{jt.current.controlInput=1},onPointerUp:()=>{jt.current.controlInput>0&&(jt.current.controlInput=0)},onPointerLeave:()=>{jt.current.controlInput>0&&(jt.current.controlInput=0)},children:D.jsxs("span",{className:"vector-corner-hint",children:[B.leanRight," ▶"]})})]}),D.jsxs("div",{className:"vector-juggle-overlay-row",children:[D.jsxs("button",{className:`vector-catch-pill ${Ee.juggleAlertHands.left?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),Yi("left")},children:["✋ ",B.leftHand]}),Ee.hookAvailable&&D.jsx("button",{className:"vector-hook-pill",onPointerDown:h=>{h.stopPropagation(),$t()},children:"🪝"}),D.jsxs("button",{className:`vector-catch-pill ${Ee.juggleAlertHands.right?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),Yi("right")},children:[B.rightHand," ✋"]})]})]})]}),Vt==="menu"&&D.jsxs("div",{className:"menu-overlay-layer",children:[D.jsxs("div",{className:"currency-top-bar",children:[D.jsxs("div",{className:"currency-group",children:[D.jsxs("div",{className:"currency-pill coins",onClick:()=>T("coins"),title:B.freeCoinsAd,children:["🪙 ",m.toLocaleString()," ",D.jsx("span",{className:"plus-badge",children:"+"})]}),D.jsxs("div",{className:"currency-pill gems",onClick:()=>T("gems"),title:B.freeGemsAd,children:["💎 ",S.toLocaleString()," ",D.jsx("span",{className:"plus-badge",children:"+"})]}),D.jsxs("div",{className:"currency-pill lp",onClick:()=>Ct("league"),children:["🏆 #",Et]})]}),D.jsxs("div",{className:"utility-group",children:[D.jsxs("button",{className:"profile-header-badge",onClick:Mi,title:t==="es"?"Editar Perfil":"Edit Profile",children:[D.jsx("span",{children:un}),D.jsx("span",{className:"profile-header-name",children:x||"Equilibrista"}),D.jsx("span",{className:"profile-header-edit",children:"✏️"})]}),D.jsx("button",{className:"icon-btn",onClick:()=>Bt(h=>!h),title:"Sound",children:ut?"🔊":"🔇"})]})]}),D.jsxs("div",{className:"tab-content-area",children:[xt==="home"&&D.jsxs("div",{className:"home-card",children:[D.jsx("div",{className:"brand-header",children:D.jsxs("div",{className:"cover-hero-banner",children:[D.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO Portada Oficial",className:"cover-hero-img"}),D.jsxs("div",{className:"cover-hero-overlay",children:[D.jsx("span",{className:"official-badge",children:G?"👑 PASE VIP PRO ACTIVO":B.officialEdition}),D.jsx("h1",{className:"game-logo-title",children:B.title}),D.jsxs("p",{className:"game-logo-sub",children:["🗿 ",((en=de.city.monumentName)==null?void 0:en[t])||B.subtitle]})]})]})}),D.jsxs("div",{className:"city-campaign-card",onClick:()=>_e(!0),style:{cursor:"pointer"},children:[D.jsx("div",{className:"city-flag-circle",children:de.city.flag}),D.jsxs("div",{className:"city-details",children:[D.jsxs("div",{className:"city-stage-tag",children:[Pe?`👑 CIUDAD VIP (x${Pe.rewardMult} PAGO)`:`${B.worldTour} • ${B.city} ${de.cityIndex+1}/20`," ",D.jsx("span",{style:{color:"#fde047",marginLeft:6,textDecoration:"underline",fontSize:"10px"},children:t==="es"?"(Cambiar 🌍)":"(Change 🌍)"})]}),D.jsx("div",{className:"city-title-text",children:de.city.name[t]}),D.jsxs("div",{className:"city-level-sub",children:[B.level," ",o," • ",Ie.icon," ",Ie.name[t]]})]}),D.jsxs("div",{className:"multiplier-chip",children:["x",Qt]})]}),D.jsxs("div",{className:"quick-stats-grid",children:[D.jsxs("div",{className:"stat-box",children:[D.jsx("span",{className:"stat-lbl",children:B.bestScore}),D.jsx("span",{className:"stat-val",children:_.toLocaleString()})]}),D.jsxs("div",{className:"stat-box",children:[D.jsx("span",{className:"stat-lbl",children:t==="es"?"MULTI TOTAL ACTIVO":"ACTIVE TOTAL MULTI"}),D.jsxs("span",{className:"stat-val gold",children:["x",Qt," PTS / x",Mn," 🪙"]})]})]}),D.jsxs("button",{className:"play-cta-button",onClick:sr,children:[D.jsx("span",{className:"play-icon",children:"▶"})," ",B.playNow," (",B.level," ",o,")"]}),D.jsxs("div",{className:"reward-ads-row",children:[D.jsxs("button",{className:"ad-reward-btn coins",onClick:()=>T("coins"),children:["🎬 ",B.freeCoinsAd]}),D.jsxs("button",{className:"ad-reward-btn gems",onClick:()=>T("gems"),children:["🎬 ",B.freeGemsAd]})]})]}),xt==="armory"&&D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{className:"panel-heading",children:["⚙️ ",B.armoryTitle]}),D.jsxs("div",{className:"section-sub-tabs",children:[D.jsx("button",{className:`sub-tab-btn ${zt==="upgrades"?"active":""}`,onClick:()=>Xt("upgrades"),children:t==="es"?"⚙️ MEJORAS (1-10)":"⚙️ UPGRADES (1-10)"}),D.jsx("button",{className:`sub-tab-btn ${zt==="poles"?"active":""}`,onClick:()=>Xt("poles"),children:t==="es"?"⚖️ VARAS 3D (5)":"⚖️ 3D POLES (5)"}),D.jsx("button",{className:`sub-tab-btn ${zt==="multipliers"?"active":""}`,onClick:()=>Xt("multipliers"),children:t==="es"?"🚀 MULTIPLICADORES":"🚀 MULTIPLIERS"})]}),D.jsxs("div",{className:"items-scroll-list",children:[zt==="upgrades"&&D.jsxs(D.Fragment,{children:[m_.map(h=>{const z=Ft[h.id]||0,X=Qm(z);return D.jsxs("div",{className:"item-card",children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",children:[h.name[t]," ",D.jsxs("span",{className:"lvl-pill",children:["Nv. ",z,"/10"]})]}),D.jsx("div",{className:`benefit-pill-tag ${X.isProTier?"pro":""}`,children:X.isProTier?t==="es"?"👑 TRAMO ÉLITE PRO (NV. 6 A 10)":"👑 PRO ELITE TIER (LVL 6 TO 10)":h.statLabel[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]}),D.jsx("div",{className:"armory-level-bar",children:Array.from({length:10}).map((ye,Le)=>D.jsx("span",{className:`armory-pip ${Le>=5?"pro-pip":""} ${Le<z?"filled":""}`},Le))})]}),D.jsx("button",{className:`item-action-btn ${X.isMax?"equipped":X.isProTier?"buy-gems":"buy-coins"}`,disabled:X.isMax,onClick:()=>P(h),children:X.isMax?B.maxLevel:X.isProTier?G?"👑 VIP GRATIS":`👑 PRO ${X.gemCost} 💎`:`🪙 ${X.coinCost.toLocaleString()}`})]},h.id)}),D.jsxs("h3",{className:"sub-section-title",children:["🎪 ",B.propsTitle]}),sl.map(h=>{const z=Re.includes(h.id),X=He===h.id;return D.jsxs("div",{className:`item-card ${X?"selected":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsxs("div",{className:"item-desc",children:["Multiplicador Base x",h.mult]})]}),D.jsx("button",{className:`item-action-btn ${X?"equipped":z?"equip":h.currency==="gems"?"buy-gems":"buy-coins"}`,onClick:()=>se(h),children:X?B.equipped:z?B.equip:h.currency==="gems"?`💎 ${h.cost}`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]}),zt==="poles"&&hc.map(h=>{const z=Z.includes(h.id)||h.isVipOnly&&G,X=F===h.id;return D.jsxs("div",{className:`item-card ${X?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${X?"equipped":z?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>$(h),children:X?B.equipped:z?B.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),zt==="multipliers"&&pc.map(h=>{const z=we.includes(h.id)||h.isVipOnly&&G;return D.jsxs("div",{className:`item-card ${z?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${z?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>ae(h),children:z?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),xt==="skins"&&D.jsxs("div",{className:"panel-card skins-panel-card",children:[D.jsxs("h2",{className:"panel-heading",children:["🎭 ",B.skinsTitle]}),D.jsxs("div",{className:"skin-3d-live-window",children:[D.jsxs("div",{className:"skin-live-top-tag",children:[D.jsxs("span",{children:["🎥 ",t==="es"?"VISTA 3D EN TIEMPO REAL":"LIVE 3D PREVIEW"]}),D.jsxs("span",{className:"skin-live-mult-chip",children:[Ie.icon," ",ze.multLabel," (TOTAL x",Qt,")"]})]}),D.jsxs("div",{className:"skin-live-bottom-bar",children:[D.jsx("span",{children:Ie.name[t]}),D.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:(ze.paletteSwatches||[]).map((h,z)=>D.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:h}},z))})]})]}),D.jsxs("div",{className:"items-scroll-list",children:[ol.map(h=>{var Dt;const z=la(h.id),X=j.includes(z)||j.includes(h.legacyId)||h.isVipOnly&&G,ye=la(he)===z,Le=h.visual||Dr[z]||Dr.urbano;return D.jsxs("div",{className:`item-card ${ye?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`},children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsxs("div",{className:"skin-palette-preview-badge",children:[(Le.paletteSwatches||[]).map((ft,an)=>D.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:ft}},an)),D.jsxs("span",{className:"palette-label-text",children:[((Dt=Le.paletteLabel)==null?void 0:Dt[t])||Le.multLabel," • ",Le.multLabel]})]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${ye?"equipped":X?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>pe(h),children:ye?B.equipped:X?B.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),D.jsx("h3",{className:"sub-section-title",children:B.polesTitle}),hc.map(h=>{const z=Z.includes(h.id)||h.isVipOnly&&G,X=F===h.id;return D.jsxs("div",{className:`item-card ${X?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${X?"equipped":z?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>$(h),children:X?B.equipped:z?B.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),xt==="league"&&D.jsxs("div",{className:"panel-card",children:[D.jsxs("div",{className:"league-banner-top",children:[D.jsxs("div",{children:[D.jsxs("div",{className:"season-chip",children:[B.seasonTitle," ",D.jsxs("span",{style:{color:"#4ade80",marginLeft:6},children:["● ",Ke==="syncing"?"SYNC...":"ONLINE LIVE"]})]}),D.jsx("h2",{className:"panel-heading",children:B.leagueTitle})]}),D.jsxs("div",{className:"rank-badge-large",children:["#",Et]})]}),D.jsxs("div",{className:"player-name-bar",children:[D.jsxs("div",{className:"profile-active-summary",children:[D.jsx("span",{className:"profile-flag-big",children:un}),D.jsxs("div",{className:"profile-text-col",children:[D.jsx("span",{className:"profile-label-mini",children:t==="es"?"COMPETIDOR OFICIAL":"OFFICIAL COMPETITOR"}),D.jsx("span",{className:"profile-name-strong",children:x||"Equilibrista"})]})]}),D.jsxs("button",{type:"button",className:"edit-profile-pill-btn",onClick:Mi,children:["✏️ ",t==="es"?"Editar Perfil":"Edit Profile"]})]}),D.jsxs("div",{className:"items-scroll-list",children:[D.jsx("div",{className:"leaderboard-box",children:it.map((h,z)=>D.jsxs("div",{className:`leader-row ${h.isPlayer?"is-player":""}`,children:[D.jsx("span",{className:"leader-pos",children:z===0?"🥇":z===1?"🥈":z===2?"🥉":`#${z+1}`}),D.jsx("span",{className:"leader-flag",children:h.flag}),D.jsxs("span",{className:"leader-name",children:[h.name,h.isPlayer?t==="es"?" (TÚ)":" (YOU)":""]}),D.jsxs("span",{className:"leader-lp",children:[(h.lp??h.score??0).toLocaleString()," LP"]})]},h.id))}),D.jsxs("h3",{className:"sub-section-title",children:["🎁 ",B.seasonPrizes]}),v_.map(h=>{const z=Tt.includes(h.id),X=!z&&E>=h.requiredLp;return D.jsxs("div",{className:"item-card",children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",children:[h.rankLabel," • ",h.title[t]]}),D.jsxs("div",{className:"item-desc",children:[h.requiredLp.toLocaleString()," LP → +",h.gemsReward," ","💎 & +",h.coinsReward.toLocaleString()," 🪙"]})]}),D.jsx("button",{className:`item-action-btn ${z?"equipped":X?"buy-coins":"locked"}`,disabled:!X,onClick:()=>et(h),children:z?B.claimed:X?B.claim:`${h.requiredLp} LP`})]},h.id)})]})]}),xt==="store"&&D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{className:"panel-heading",children:["💎 ",B.storeTitle]}),D.jsx("p",{className:"panel-sub",children:B.storeSubtitle}),D.jsxs("div",{className:"items-scroll-list",children:[__.map(h=>D.jsxs("div",{className:"vip-bundle-card",children:[D.jsxs("div",{className:"vip-bundle-header",children:[D.jsx("span",{className:"vip-icon",children:h.icon}),D.jsxs("div",{children:[D.jsx("div",{className:"vip-title",children:h.name[t]}),D.jsxs("div",{className:"vip-rewards-inline",children:["+",h.gems," 💎 • +",h.coins.toLocaleString()," 🪙"]})]}),D.jsx("button",{className:"vip-buy-btn",onClick:()=>Ge(h),children:h.isVipPassBundle&&G?"👑 VIP ACTIVO (+BONO)":h.tag})]}),D.jsx("ul",{className:"vip-perk-list",children:h.perks[t].map((z,X)=>D.jsxs("li",{children:["✓ ",z]},X))})]},h.id)),D.jsx("h3",{className:"sub-section-title",children:B.multipliersTitle}),pc.map(h=>{const z=we.includes(h.id)||h.isVipOnly&&G;return D.jsxs("div",{className:`item-card ${z?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${z?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>ae(h),children:z?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]})]}),D.jsxs("nav",{className:"bottom-tab-nav",children:[D.jsxs("button",{className:`nav-tab-btn ${xt==="home"?"active":""}`,onClick:()=>Ct("home"),children:[D.jsx("span",{className:"nav-ic",children:"🏙️"}),D.jsx("span",{children:B.tabs.home})]}),D.jsxs("button",{className:`nav-tab-btn ${xt==="armory"?"active":""}`,onClick:()=>Ct("armory"),children:[D.jsx("span",{className:"nav-ic",children:"⚖️"}),D.jsx("span",{children:B.tabs.armory})]}),D.jsxs("button",{className:`nav-tab-btn ${xt==="skins"?"active":""}`,onClick:()=>Ct("skins"),children:[D.jsx("span",{className:"nav-ic",children:"🎭"}),D.jsx("span",{children:B.tabs.skins})]}),D.jsxs("button",{className:`nav-tab-btn ${xt==="league"?"active":""}`,onClick:()=>Ct("league"),children:[D.jsx("span",{className:"nav-ic",children:"🏆"}),D.jsx("span",{children:B.tabs.league})]}),D.jsxs("button",{className:`nav-tab-btn ${xt==="store"?"active":""}`,onClick:()=>Ct("store"),children:[D.jsx("span",{className:"nav-ic",children:"💎"}),D.jsx("span",{children:B.tabs.store})]})]})]}),Vt==="paused"&&D.jsx("div",{className:"modal-backdrop",children:D.jsxs("div",{className:"modal-card",children:[D.jsxs("h2",{className:"modal-title",children:["⏸ ",B.pause]}),D.jsxs("p",{className:"modal-subtitle",children:[de.city.flag," ",de.city.name[t]," — ",B.level," ",o]}),D.jsxs("button",{className:"pause-action-btn primary",onClick:Fi,children:["▶ ",B.resume]}),D.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>{jt.current.running=!1,Nt.updateWind(0),Mt("menu")},children:["🏠 ",B.backToMenu]})]})}),Vt==="victory"&&D.jsx("div",{className:"modal-backdrop",children:D.jsxs("div",{className:"modal-card victory",children:[D.jsx("div",{className:"modal-Cover-icon-wrap",children:D.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),D.jsx("h2",{className:"modal-title",children:B.victoryTitle}),D.jsxs("p",{className:"modal-subtitle",children:[de.city.flag," ",de.city.name[t]," • ",B.level," ",o]}),D.jsxs("div",{className:"rewards-summary-box",children:[D.jsxs("div",{className:"reward-line",children:[D.jsx("span",{children:B.score}),D.jsx("strong",{children:je.scoreEarned.toLocaleString()})]}),D.jsxs("div",{className:"reward-line gold",children:[D.jsx("span",{children:B.coinsEarned}),D.jsxs("strong",{children:["+",je.coinsEarned.toLocaleString()," 🪙"]})]}),je.gemsEarned>0&&D.jsxs("div",{className:"reward-line cyan",children:[D.jsx("span",{children:t==="es"?"Gemas Ganadas":"Gems Earned"}),D.jsxs("strong",{children:["+",je.gemsEarned," 💎"]})]}),D.jsxs("div",{className:"reward-line cyan",children:[D.jsx("span",{children:B.leaguePointsEarned}),D.jsxs("strong",{children:["+",je.lpEarned," 🏆"]})]})]}),!je.doubled&&D.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>T("double"),children:B.doubleRewardsAd}),D.jsxs("button",{className:"pause-action-btn primary",onClick:Tr,children:[B.nextLevel," (",B.level," ",o+1,") ➔"]}),D.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>Mt("menu"),children:["🏠 ",B.backToMenu]})]})}),Vt==="gameover"&&D.jsx("div",{className:"modal-backdrop",children:D.jsxs("div",{className:"modal-card gameover",children:[D.jsx("div",{className:"modal-Cover-icon-wrap",children:D.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),D.jsx("h2",{className:"modal-title",children:B.fallTitle}),D.jsx("p",{className:"modal-subtitle",children:B.fallSub}),D.jsxs("div",{className:"rewards-summary-box",children:[D.jsxs("div",{className:"reward-line",children:[D.jsx("span",{children:B.score}),D.jsx("strong",{children:je.scoreEarned.toLocaleString()})]}),D.jsxs("div",{className:"reward-line gold",children:[D.jsx("span",{children:B.coinsEarned}),D.jsxs("strong",{children:["+",je.coinsEarned.toLocaleString()," 🪙"]})]}),D.jsxs("div",{className:"reward-line cyan",children:[D.jsx("span",{children:B.leaguePointsEarned}),D.jsxs("strong",{children:["+",je.lpEarned," 🏆"]})]})]}),!je.revivedOnce&&D.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>T("revive"),children:B.reviveAd}),D.jsxs("button",{className:"pause-action-btn primary",onClick:sr,children:["🔄 ",B.retry]}),D.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>Mt("menu"),children:["🏠 ",B.backToMenu]})]})}),k&&D.jsx("div",{className:"modal-backdrop ad-layer",children:D.jsxs("div",{className:"modal-card",children:[D.jsx("div",{className:"modal-big-icon",children:"🎬"}),D.jsx("h2",{className:"modal-title",children:B.adWatching}),D.jsx("p",{className:"modal-subtitle",children:Q>0?`${B.adSeconds} ${Q}s...`:"✅ ¡Listo!"}),D.jsx("button",{className:"pause-action-btn primary",disabled:Q>0,onClick:wr,children:Q>0?`${Q}s`:B.adCollect})]})})]})})}f_.createRoot(document.getElementById("root")).render(D.jsx(s_.StrictMode,{children:D.jsx(ZE,{})}));
