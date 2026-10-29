var hx=Object.defineProperty;var px=(r,e,t)=>e in r?hx(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c0=(r,e,t)=>px(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lf={exports:{}},ml={},cf={exports:{}},Bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function gx(){if(u0)return Bt;u0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,P={};function _(T,le,Se){this.props=T,this.context=le,this.refs=P,this.updater=Se||M}_.prototype.isReactComponent={},_.prototype.setState=function(T,le){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,le,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function v(){}v.prototype=_.prototype;function R(T,le,Se){this.props=T,this.context=le,this.refs=P,this.updater=Se||M}var F=R.prototype=new v;F.constructor=R,E(F,_.prototype),F.isPureReactComponent=!0;var C=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(T,le,Se){var Ie,je={},Ue=null,re=null;if(le!=null)for(Ie in le.ref!==void 0&&(re=le.ref),le.key!==void 0&&(Ue=""+le.key),le)U.call(le,Ie)&&!k.hasOwnProperty(Ie)&&(je[Ie]=le[Ie]);var he=arguments.length-2;if(he===1)je.children=Se;else if(1<he){for(var Re=Array(he),Ye=0;Ye<he;Ye++)Re[Ye]=arguments[Ye+2];je.children=Re}if(T&&T.defaultProps)for(Ie in he=T.defaultProps,he)je[Ie]===void 0&&(je[Ie]=he[Ie]);return{$$typeof:r,type:T,key:Ue,ref:re,props:je,_owner:I.current}}function D(T,le){return{$$typeof:r,type:T.type,key:le,ref:T.ref,props:T.props,_owner:T._owner}}function z(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function G(T){var le={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Se){return le[Se]})}var Y=/\/+/g;function ee(T,le){return typeof T=="object"&&T!==null&&T.key!=null?G(""+T.key):le.toString(36)}function W(T,le,Se,Ie,je){var Ue=typeof T;(Ue==="undefined"||Ue==="boolean")&&(T=null);var re=!1;if(T===null)re=!0;else switch(Ue){case"string":case"number":re=!0;break;case"object":switch(T.$$typeof){case r:case e:re=!0}}if(re)return re=T,je=je(re),T=Ie===""?"."+ee(re,0):Ie,C(je)?(Se="",T!=null&&(Se=T.replace(Y,"$&/")+"/"),W(je,le,Se,"",function(Ye){return Ye})):je!=null&&(z(je)&&(je=D(je,Se+(!je.key||re&&re.key===je.key?"":(""+je.key).replace(Y,"$&/")+"/")+T)),le.push(je)),1;if(re=0,Ie=Ie===""?".":Ie+":",C(T))for(var he=0;he<T.length;he++){Ue=T[he];var Re=Ie+ee(Ue,he);re+=W(Ue,le,Se,Re,je)}else if(Re=x(T),typeof Re=="function")for(T=Re.call(T),he=0;!(Ue=T.next()).done;)Ue=Ue.value,Re=Ie+ee(Ue,he++),re+=W(Ue,le,Se,Re,je);else if(Ue==="object")throw le=String(T),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return re}function Z(T,le,Se){if(T==null)return T;var Ie=[],je=0;return W(T,Ie,"","",function(Ue){return le.call(Se,Ue,je++)}),Ie}function fe(T){if(T._status===-1){var le=T._result;le=le(),le.then(function(Se){(T._status===0||T._status===-1)&&(T._status=1,T._result=Se)},function(Se){(T._status===0||T._status===-1)&&(T._status=2,T._result=Se)}),T._status===-1&&(T._status=0,T._result=le)}if(T._status===1)return T._result.default;throw T._result}var te={current:null},ne={transition:null},Q={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:ne,ReactCurrentOwner:I};function $(){throw Error("act(...) is not supported in production builds of React.")}return Bt.Children={map:Z,forEach:function(T,le,Se){Z(T,function(){le.apply(this,arguments)},Se)},count:function(T){var le=0;return Z(T,function(){le++}),le},toArray:function(T){return Z(T,function(le){return le})||[]},only:function(T){if(!z(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Bt.Component=_,Bt.Fragment=t,Bt.Profiler=o,Bt.PureComponent=R,Bt.StrictMode=s,Bt.Suspense=m,Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Bt.act=$,Bt.cloneElement=function(T,le,Se){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var Ie=E({},T.props),je=T.key,Ue=T.ref,re=T._owner;if(le!=null){if(le.ref!==void 0&&(Ue=le.ref,re=I.current),le.key!==void 0&&(je=""+le.key),T.type&&T.type.defaultProps)var he=T.type.defaultProps;for(Re in le)U.call(le,Re)&&!k.hasOwnProperty(Re)&&(Ie[Re]=le[Re]===void 0&&he!==void 0?he[Re]:le[Re])}var Re=arguments.length-2;if(Re===1)Ie.children=Se;else if(1<Re){he=Array(Re);for(var Ye=0;Ye<Re;Ye++)he[Ye]=arguments[Ye+2];Ie.children=he}return{$$typeof:r,type:T.type,key:je,ref:Ue,props:Ie,_owner:re}},Bt.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},Bt.createElement=w,Bt.createFactory=function(T){var le=w.bind(null,T);return le.type=T,le},Bt.createRef=function(){return{current:null}},Bt.forwardRef=function(T){return{$$typeof:f,render:T}},Bt.isValidElement=z,Bt.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:fe}},Bt.memo=function(T,le){return{$$typeof:p,type:T,compare:le===void 0?null:le}},Bt.startTransition=function(T){var le=ne.transition;ne.transition={};try{T()}finally{ne.transition=le}},Bt.unstable_act=$,Bt.useCallback=function(T,le){return te.current.useCallback(T,le)},Bt.useContext=function(T){return te.current.useContext(T)},Bt.useDebugValue=function(){},Bt.useDeferredValue=function(T){return te.current.useDeferredValue(T)},Bt.useEffect=function(T,le){return te.current.useEffect(T,le)},Bt.useId=function(){return te.current.useId()},Bt.useImperativeHandle=function(T,le,Se){return te.current.useImperativeHandle(T,le,Se)},Bt.useInsertionEffect=function(T,le){return te.current.useInsertionEffect(T,le)},Bt.useLayoutEffect=function(T,le){return te.current.useLayoutEffect(T,le)},Bt.useMemo=function(T,le){return te.current.useMemo(T,le)},Bt.useReducer=function(T,le,Se){return te.current.useReducer(T,le,Se)},Bt.useRef=function(T){return te.current.useRef(T)},Bt.useState=function(T){return te.current.useState(T)},Bt.useSyncExternalStore=function(T,le,Se){return te.current.useSyncExternalStore(T,le,Se)},Bt.useTransition=function(){return te.current.useTransition()},Bt.version="18.3.1",Bt}var d0;function zh(){return d0||(d0=1,cf.exports=gx()),cf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function vx(){if(f0)return ml;f0=1;var r=zh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var y,S={},x=null,M=null;p!==void 0&&(x=""+p),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(M=m.ref);for(y in m)s.call(m,y)&&!l.hasOwnProperty(y)&&(S[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)S[y]===void 0&&(S[y]=m[y]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return ml.Fragment=t,ml.jsx=u,ml.jsxs=u,ml}var h0;function xx(){return h0||(h0=1,lf.exports=vx()),lf.exports}var N=xx(),Je=zh();const _x=mx(Je);var Oc={},uf={exports:{}},Xi={},df={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function yx(){return p0||(p0=1,(function(r){function e(ne,Q){var $=ne.length;ne.push(Q);e:for(;0<$;){var T=$-1>>>1,le=ne[T];if(0<o(le,Q))ne[T]=Q,ne[$]=le,$=T;else break e}}function t(ne){return ne.length===0?null:ne[0]}function s(ne){if(ne.length===0)return null;var Q=ne[0],$=ne.pop();if($!==Q){ne[0]=$;e:for(var T=0,le=ne.length,Se=le>>>1;T<Se;){var Ie=2*(T+1)-1,je=ne[Ie],Ue=Ie+1,re=ne[Ue];if(0>o(je,$))Ue<le&&0>o(re,je)?(ne[T]=re,ne[Ue]=$,T=Ue):(ne[T]=je,ne[Ie]=$,T=Ie);else if(Ue<le&&0>o(re,$))ne[T]=re,ne[Ue]=$,T=Ue;else break e}}return Q}function o(ne,Q){var $=ne.sortIndex-Q.sortIndex;return $!==0?$:ne.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var m=[],p=[],y=1,S=null,x=3,M=!1,E=!1,P=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(ne){for(var Q=t(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=ne)s(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=t(p)}}function C(ne){if(P=!1,F(ne),!E)if(t(m)!==null)E=!0,fe(U);else{var Q=t(p);Q!==null&&te(C,Q.startTime-ne)}}function U(ne,Q){E=!1,P&&(P=!1,v(w),w=-1),M=!0;var $=x;try{for(F(Q),S=t(m);S!==null&&(!(S.expirationTime>Q)||ne&&!G());){var T=S.callback;if(typeof T=="function"){S.callback=null,x=S.priorityLevel;var le=T(S.expirationTime<=Q);Q=r.unstable_now(),typeof le=="function"?S.callback=le:S===t(m)&&s(m),F(Q)}else s(m);S=t(m)}if(S!==null)var Se=!0;else{var Ie=t(p);Ie!==null&&te(C,Ie.startTime-Q),Se=!1}return Se}finally{S=null,x=$,M=!1}}var I=!1,k=null,w=-1,D=5,z=-1;function G(){return!(r.unstable_now()-z<D)}function Y(){if(k!==null){var ne=r.unstable_now();z=ne;var Q=!0;try{Q=k(!0,ne)}finally{Q?ee():(I=!1,k=null)}}else I=!1}var ee;if(typeof R=="function")ee=function(){R(Y)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=Y,ee=function(){Z.postMessage(null)}}else ee=function(){_(Y,0)};function fe(ne){k=ne,I||(I=!0,ee())}function te(ne,Q){w=_(function(){ne(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ne){ne.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,fe(U))},r.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<ne?Math.floor(1e3/ne):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(ne){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var $=x;x=Q;try{return ne()}finally{x=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ne,Q){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var $=x;x=ne;try{return Q()}finally{x=$}},r.unstable_scheduleCallback=function(ne,Q,$){var T=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?T+$:T):$=T,ne){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=$+le,ne={id:y++,callback:Q,priorityLevel:ne,startTime:$,expirationTime:le,sortIndex:-1},$>T?(ne.sortIndex=$,e(p,ne),t(m)===null&&ne===t(p)&&(P?(v(w),w=-1):P=!0,te(C,$-T))):(ne.sortIndex=le,e(m,ne),E||M||(E=!0,fe(U))),ne},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(ne){var Q=x;return function(){var $=x;x=Q;try{return ne.apply(this,arguments)}finally{x=$}}}})(ff)),ff}var m0;function Sx(){return m0||(m0=1,df.exports=yx()),df.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Mx(){if(g0)return Xi;g0=1;var r=zh(),e=Sx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function x(n){return m.call(S,n)?!0:m.call(y,n)?!1:p.test(n)?S[n]=!0:(y[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(n,i,a,c,d,g,L){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=L}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new P(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,R);_[i]=new P(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,R);_[i]=new P(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,R);_[i]=new P(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),G=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),ne=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,T;function le(n){if(T===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+n}var Se=!1;function Ie(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(_e){var c=_e}Reflect.construct(n,[],i)}else{try{i.call()}catch(_e){c=_e}n.call(i.prototype)}else{try{throw Error()}catch(_e){c=_e}n()}}catch(_e){if(_e&&c&&typeof _e.stack=="string"){for(var d=_e.stack.split(`
`),g=c.stack.split(`
`),L=d.length-1,V=g.length-1;1<=L&&0<=V&&d[L]!==g[V];)V--;for(;1<=L&&0<=V;L--,V--)if(d[L]!==g[V]){if(L!==1||V!==1)do if(L--,V--,0>V||d[L]!==g[V]){var j=`
`+d[L].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=L&&0<=V);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function je(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case I:return"Portal";case D:return"Profiler";case w:return"StrictMode";case ee:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:Ue(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return Ue(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Re(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(L){c=""+L,g.call(this,L)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(L){c=""+L},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=Ye(n))}function ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function kt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pt(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ht(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function At(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function gt(n,i){At(n,i);var a=he(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ut(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ut(n,i,a){(i!=="number"||kt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var en=Array.isArray;function yt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function qt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(en(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:he(a)}}function fn(n,i){var a=he(i.value),c=he(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Tt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function B(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?B(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(n){Ae.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ne[i]=Ne[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ne.hasOwnProperty(n)&&Ne[n]?(""+i).trim():i+"px"}function Me(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ve=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ot=null,lt=null,q=null;function De(n){if(n=el(n)){if(typeof ot!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Zl(i),ot(n.stateNode,n.type,i))}}function ye(n){lt?q?q.push(n):q=[n]:lt=n}function Ee(){if(lt){var n=lt,i=q;if(q=lt=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function ge(n,i){return n(i)}function we(){}var ze=!1;function Ke(n,i,a){if(ze)return n(i,a);ze=!0;try{return ge(n,i,a)}finally{ze=!1,(lt!==null||q!==null)&&(we(),Ee())}}function Te(n,i){var a=n.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var tt=!1;if(f)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){tt=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{tt=!1}function gn(n,i,a,c,d,g,L,V,j){var _e=Array.prototype.slice.call(arguments,3);try{i.apply(a,_e)}catch(Le){this.onError(Le)}}var Ri=!1,gi=null,hn=!1,Qt=null,ki={onError:function(n){Ri=!0,gi=n}};function Zn(n,i,a,c,d,g,L,V,j){Ri=!1,gi=null,gn.apply(ki,arguments)}function Ki(n,i,a,c,d,g,L,V,j){if(Zn.apply(this,arguments),Ri){if(Ri){var _e=gi;Ri=!1,gi=null}else throw Error(t(198));hn||(hn=!0,Qt=_e)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Fn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ai(n){if(An(n)!==n)throw Error(t(188))}function Tr(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return ai(d),n;if(g===c)return ai(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var L=!1,V=d.child;V;){if(V===a){L=!0,a=d,c=g;break}if(V===c){L=!0,c=d,a=g;break}V=V.sibling}if(!L){for(V=g.child;V;){if(V===a){L=!0,a=g,c=d;break}if(V===c){L=!0,c=g,a=d;break}V=V.sibling}if(!L)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _t(n){return n=Tr(n),n!==null?cr(n):null}function cr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=cr(n);if(i!==null)return i;n=n.sibling}return null}var Zi=e.unstable_scheduleCallback,oi=e.unstable_cancelCallback,ls=e.unstable_shouldYield,cs=e.unstable_requestPaint,ln=e.unstable_now,Ci=e.unstable_getCurrentPriorityLevel,Ji=e.unstable_ImmediatePriority,ur=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,H=e.unstable_LowPriority,pe=e.unstable_IdlePriority,ae=null,oe=null;function Xe(n){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:st,We=Math.log,it=Math.LN2;function st(n){return n>>>=0,n===0?32:31-(We(n)/it|0)|0}var mt=64,St=4194304;function $e(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,L=a&268435455;if(L!==0){var V=L&~d;V!==0?c=$e(V):(g&=L,g!==0&&(c=$e(g)))}else L=a&~d,L!==0?c=$e(L):g!==0&&(c=$e(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-He(i),d=1<<a,c|=n[a],i&=~d;return c}function pn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var L=31-He(g),V=1<<L,j=d[L];j===-1?((V&a)===0||(V&c)!==0)&&(d[L]=pn(V,i)):j<=i&&(n.expiredLanes|=V),g&=~V}}function jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rn(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function Ze(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-He(i),n[i]=a}function Pt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-He(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Un(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-He(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Mt=0;function li(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vi,Vt,nn,ci,It,ui=!1,Jn=[],di=null,h=null,O=null,ce=new Map,be=new Map,Pe=[],Gt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ln(n,i){switch(n){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":h=null;break;case"mouseover":case"mouseout":O=null;break;case"pointerover":case"pointerout":ce.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":be.delete(i.pointerId)}}function _n(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=el(i),i!==null&&Vt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Vr(n,i,a,c,d){switch(i){case"focusin":return di=_n(di,n,i,a,c,d),!0;case"dragenter":return h=_n(h,n,i,a,c,d),!0;case"mouseover":return O=_n(O,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return ce.set(g,_n(ce.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,be.set(g,_n(be.get(g)||null,n,i,a,c,d)),!0}return!1}function Gr(n){var i=va(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=Fn(a),i!==null){n.blockedOn=i,It(n.priority,function(){nn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qi(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ns(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fe=c,a.target.dispatchEvent(c),Fe=null}else return i=el(a),i!==null&&Vt(i),n.blockedOn=a,!1;i.shift()}return!0}function fi(n,i,a){Qi(n)&&a.delete(i)}function yn(){ui=!1,di!==null&&Qi(di)&&(di=null),h!==null&&Qi(h)&&(h=null),O!==null&&Qi(O)&&(O=null),ce.forEach(fi),be.forEach(fi)}function Sn(n,i){n.blockedOn===i&&(n.blockedOn=null,ui||(ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yn)))}function kn(n){function i(d){return Sn(d,n)}if(0<Jn.length){Sn(Jn[0],n);for(var a=1;a<Jn.length;a++){var c=Jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(di!==null&&Sn(di,n),h!==null&&Sn(h,n),O!==null&&Sn(O,n),ce.forEach(i),be.forEach(i),a=0;a<Pe.length;a++)c=Pe[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Pe.length&&(a=Pe[0],a.blockedOn===null);)Gr(a),a.blockedOn===null&&Pe.shift()}var er=C.ReactCurrentBatchConfig,Hr=!0;function tr(n,i,a,c){var d=Mt,g=er.transition;er.transition=null;try{Mt=1,ua(n,i,a,c)}finally{Mt=d,er.transition=g}}function Wr(n,i,a,c){var d=Mt,g=er.transition;er.transition=null;try{Mt=4,ua(n,i,a,c)}finally{Mt=d,er.transition=g}}function ua(n,i,a,c){if(Hr){var d=Ns(n,i,a,c);if(d===null)Zu(n,i,c,dr,a),Ln(n,c);else if(Vr(d,n,i,a,c))c.stopPropagation();else if(Ln(n,c),i&4&&-1<Gt.indexOf(n)){for(;d!==null;){var g=el(d);if(g!==null&&vi(g),g=Ns(n,i,a,c),g===null&&Zu(n,i,c,dr,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Zu(n,i,c,null,a)}}var dr=null;function Ns(n,i,a,c){if(dr=null,n=nt(c),n=va(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Fn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return dr=n,null}function da(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ci()){case Ji:return 1;case ur:return 4;case A:case H:return 16;case pe:return 536870912;default:return 16}default:return 16}}var Pi=null,Is=null,Xr=null;function us(){if(Xr)return Xr;var n,i=Is,a=i.length,c,d="value"in Pi?Pi.value:Pi.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var L=a-n;for(c=1;c<=L&&i[a-c]===d[g-c];c++);return Xr=d.slice(n,1<c?1-c:void 0)}function ds(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ds(){return!0}function fa(){return!1}function Xn(n){function i(a,c,d,g,L){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=L,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ds:fa,this.isPropagationStopped=fa,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),i}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=Xn(Ar),Li=$({},Ar,{view:0,detail:0}),Wa=Xn(Li),Us,ha,qr,Dt=$({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qr&&(qr&&n.type==="mousemove"?(Us=n.screenX-qr.screenX,ha=n.screenY-qr.screenY):ha=Us=0,qr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:ha}}),Mn=Xn(Dt),fr=$({},Dt,{dataTransfer:0}),jr=Xn(fr),Bi=$({},Li,{relatedTarget:0}),fs=Xn(Bi),kl=$({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Xa=Xn(kl),qa=$({},Ar,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uu=Xn(qa),zo=$({},Ar,{data:0}),Bl=Xn(zo),Vo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Go(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Fu[n])?!!i[n]:!1}function ja(){return Go}var zl=$({},Li,{key:function(n){if(n.key){var i=Vo[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ds(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ou[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(n){return n.type==="keypress"?ds(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ds(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vl=Xn(zl),Gl=$({},Dt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ho=Xn(Gl),ku=$({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),Bu=Xn(ku),zu=$({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vu=Xn(zu),Gu=$({},Dt,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hl=Xn(Gu),Wo=[9,13,27,32],qe=f&&"CompositionEvent"in window,Rt=null;f&&"documentMode"in document&&(Rt=document.documentMode);var $t=f&&"TextEvent"in window&&!Rt,un=f&&(!qe||Rt&&8<Rt&&11>=Rt),Qn=" ",vn=!1;function zn(n,i){switch(n){case"keyup":return Wo.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ni(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var En=!1;function Rr(n,i){switch(n){case"compositionend":return Ni(i);case"keypress":return i.which!==32?null:(vn=!0,Qn);case"textInput":return n=i.data,n===Qn&&vn?null:n;default:return null}}function hr(n,i){if(En)return n==="compositionend"||!qe&&zn(n,i)?(n=us(),Xr=Is=Pi=null,En=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return un&&i.locale!=="ko"?null:i.data;default:return null}}var pa={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!pa[n.type]:i==="textarea"}function $a(n,i,a,c){ye(c),i=$l(i,"onChange"),0<i.length&&(a=new xi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var mr=null,_i=null;function Wl(n){bp(n,0)}function ma(n){var i=Qa(n);if(ft(i))return n}function Hu(n,i){if(n==="change")return i}var Xo=!1;if(f){var qo;if(f){var Os="oninput"in document;if(!Os){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),Os=typeof jo.oninput=="function"}qo=Os}else qo=!1;Xo=qo&&(!document.documentMode||9<document.documentMode)}function ga(){mr&&(mr.detachEvent("onpropertychange",dp),_i=mr=null)}function dp(n){if(n.propertyName==="value"&&ma(_i)){var i=[];$a(i,_i,n,nt(n)),Ke(Wl,i)}}function mv(n,i,a){n==="focusin"?(ga(),mr=i,_i=a,mr.attachEvent("onpropertychange",dp)):n==="focusout"&&ga()}function gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ma(_i)}function vv(n,i){if(n==="click")return ma(i)}function xv(n,i){if(n==="input"||n==="change")return ma(i)}function _v(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Cr=typeof Object.is=="function"?Object.is:_v;function $o(n,i){if(Cr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!Cr(n[d],i[d]))return!1}return!0}function fp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hp(n,i){var a=fp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fp(a)}}function pp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?pp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mp(){for(var n=window,i=kt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=kt(n.document)}return i}function Wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function yv(n){var i=mp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&pp(a.ownerDocument.documentElement,a)){if(c!==null&&Wu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=hp(a,g);var L=hp(a,c);d&&L&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==L.node||n.focusOffset!==L.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(L.node,L.offset)):(i.setEnd(L.node,L.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sv=f&&"documentMode"in document&&11>=document.documentMode,Ya=null,Xu=null,Yo=null,qu=!1;function gp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||Ya==null||Ya!==kt(c)||(c=Ya,"selectionStart"in c&&Wu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&$o(Yo,c)||(Yo=c,c=$l(Xu,"onSelect"),0<c.length&&(i=new xi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ya)))}function Xl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ka={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},ju={},vp={};f&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function ql(n){if(ju[n])return ju[n];if(!Ka[n])return n;var i=Ka[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in vp)return ju[n]=i[a];return n}var xp=ql("animationend"),_p=ql("animationiteration"),yp=ql("animationstart"),Sp=ql("transitionend"),Mp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(n,i){Mp.set(n,i),l(i,[n])}for(var $u=0;$u<Ep.length;$u++){var Yu=Ep[$u],Mv=Yu.toLowerCase(),Ev=Yu[0].toUpperCase()+Yu.slice(1);Fs(Mv,"on"+Ev)}Fs(xp,"onAnimationEnd"),Fs(_p,"onAnimationIteration"),Fs(yp,"onAnimationStart"),Fs("dblclick","onDoubleClick"),Fs("focusin","onFocus"),Fs("focusout","onBlur"),Fs(Sp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function wp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ki(c,i,void 0,n),n.currentTarget=null}function bp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var L=c.length-1;0<=L;L--){var V=c[L],j=V.instance,_e=V.currentTarget;if(V=V.listener,j!==g&&d.isPropagationStopped())break e;wp(d,V,_e),g=j}else for(L=0;L<c.length;L++){if(V=c[L],j=V.instance,_e=V.currentTarget,V=V.listener,j!==g&&d.isPropagationStopped())break e;wp(d,V,_e),g=j}}}if(hn)throw n=Qt,hn=!1,Qt=null,n}function wn(n,i){var a=i[id];a===void 0&&(a=i[id]=new Set);var c=n+"__bubble";a.has(c)||(Tp(i,n,2,!1),a.add(c))}function Ku(n,i,a){var c=0;i&&(c|=4),Tp(a,n,c,i)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[jl]){n[jl]=!0,s.forEach(function(a){a!=="selectionchange"&&(wv.has(a)||Ku(a,!1,n),Ku(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jl]||(i[jl]=!0,Ku("selectionchange",!1,i))}}function Tp(n,i,a,c){switch(da(i)){case 1:var d=tr;break;case 4:d=Wr;break;default:d=ua}a=d.bind(null,i,a,n),d=void 0,!tt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Zu(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var L=c.tag;if(L===3||L===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(L===4)for(L=c.return;L!==null;){var j=L.tag;if((j===3||j===4)&&(j=L.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;L=L.return}for(;V!==null;){if(L=va(V),L===null)return;if(j=L.tag,j===5||j===6){c=g=L;continue e}V=V.parentNode}}c=c.return}Ke(function(){var _e=g,Le=nt(a),ke=[];e:{var Ce=Mp.get(n);if(Ce!==void 0){var rt=xi,ct=n;switch(n){case"keypress":if(ds(a)===0)break e;case"keydown":case"keyup":rt=Vl;break;case"focusin":ct="focus",rt=fs;break;case"focusout":ct="blur",rt=fs;break;case"beforeblur":case"afterblur":rt=fs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=jr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Bu;break;case xp:case _p:case yp:rt=Xa;break;case Sp:rt=Vu;break;case"scroll":rt=Wa;break;case"wheel":rt=Hl;break;case"copy":case"cut":case"paste":rt=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Ho}var ut=(i&4)!==0,Bn=!ut&&n==="scroll",ue=ut?Ce!==null?Ce+"Capture":null:Ce;ut=[];for(var J=_e,me;J!==null;){me=J;var Ge=me.stateNode;if(me.tag===5&&Ge!==null&&(me=Ge,ue!==null&&(Ge=Te(J,ue),Ge!=null&&ut.push(Jo(J,Ge,me)))),Bn)break;J=J.return}0<ut.length&&(Ce=new rt(Ce,ct,null,a,Le),ke.push({event:Ce,listeners:ut}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",rt=n==="mouseout"||n==="pointerout",Ce&&a!==Fe&&(ct=a.relatedTarget||a.fromElement)&&(va(ct)||ct[hs]))break e;if((rt||Ce)&&(Ce=Le.window===Le?Le:(Ce=Le.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,rt?(ct=a.relatedTarget||a.toElement,rt=_e,ct=ct?va(ct):null,ct!==null&&(Bn=An(ct),ct!==Bn||ct.tag!==5&&ct.tag!==6)&&(ct=null)):(rt=null,ct=_e),rt!==ct)){if(ut=Mn,Ge="onMouseLeave",ue="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(ut=Ho,Ge="onPointerLeave",ue="onPointerEnter",J="pointer"),Bn=rt==null?Ce:Qa(rt),me=ct==null?Ce:Qa(ct),Ce=new ut(Ge,J+"leave",rt,a,Le),Ce.target=Bn,Ce.relatedTarget=me,Ge=null,va(Le)===_e&&(ut=new ut(ue,J+"enter",ct,a,Le),ut.target=me,ut.relatedTarget=Bn,Ge=ut),Bn=Ge,rt&&ct)t:{for(ut=rt,ue=ct,J=0,me=ut;me;me=Za(me))J++;for(me=0,Ge=ue;Ge;Ge=Za(Ge))me++;for(;0<J-me;)ut=Za(ut),J--;for(;0<me-J;)ue=Za(ue),me--;for(;J--;){if(ut===ue||ue!==null&&ut===ue.alternate)break t;ut=Za(ut),ue=Za(ue)}ut=null}else ut=null;rt!==null&&Ap(ke,Ce,rt,ut,!1),ct!==null&&Bn!==null&&Ap(ke,Bn,ct,ut,!0)}}e:{if(Ce=_e?Qa(_e):window,rt=Ce.nodeName&&Ce.nodeName.toLowerCase(),rt==="select"||rt==="input"&&Ce.type==="file")var dt=Hu;else if(pr(Ce))if(Xo)dt=xv;else{dt=gv;var vt=mv}else(rt=Ce.nodeName)&&rt.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(dt=vv);if(dt&&(dt=dt(n,_e))){$a(ke,dt,a,Le);break e}vt&&vt(n,Ce,_e),n==="focusout"&&(vt=Ce._wrapperState)&&vt.controlled&&Ce.type==="number"&&Ut(Ce,"number",Ce.value)}switch(vt=_e?Qa(_e):window,n){case"focusin":(pr(vt)||vt.contentEditable==="true")&&(Ya=vt,Xu=_e,Yo=null);break;case"focusout":Yo=Xu=Ya=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,gp(ke,a,Le);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":gp(ke,a,Le)}var xt;if(qe)e:{switch(n){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else En?zn(n,a)&&(bt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(un&&a.locale!=="ko"&&(En||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&En&&(xt=us()):(Pi=Le,Is="value"in Pi?Pi.value:Pi.textContent,En=!0)),vt=$l(_e,bt),0<vt.length&&(bt=new Bl(bt,n,null,a,Le),ke.push({event:bt,listeners:vt}),xt?bt.data=xt:(xt=Ni(a),xt!==null&&(bt.data=xt)))),(xt=$t?Rr(n,a):hr(n,a))&&(_e=$l(_e,"onBeforeInput"),0<_e.length&&(Le=new Bl("onBeforeInput","beforeinput",null,a,Le),ke.push({event:Le,listeners:_e}),Le.data=xt))}bp(ke,i)})}function Jo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function $l(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Te(n,a),g!=null&&c.unshift(Jo(n,g,d)),g=Te(n,i),g!=null&&c.push(Jo(n,g,d))),n=n.return}return c}function Za(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ap(n,i,a,c,d){for(var g=i._reactName,L=[];a!==null&&a!==c;){var V=a,j=V.alternate,_e=V.stateNode;if(j!==null&&j===c)break;V.tag===5&&_e!==null&&(V=_e,d?(j=Te(a,g),j!=null&&L.unshift(Jo(a,j,V))):d||(j=Te(a,g),j!=null&&L.push(Jo(a,j,V)))),a=a.return}L.length!==0&&n.push({event:i,listeners:L})}var bv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Rp(n){return(typeof n=="string"?n:""+n).replace(bv,`
`).replace(Tv,"")}function Yl(n,i,a){if(i=Rp(i),Rp(n)!==i&&a)throw Error(t(425))}function Kl(){}var Ju=null,Qu=null;function ed(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(n){return Cp.resolve(null).then(n).catch(Cv)}:td;function Cv(n){setTimeout(function(){throw n})}function nd(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(i)}function ks(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Pp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ja=Math.random().toString(36).slice(2),$r="__reactFiber$"+Ja,Qo="__reactProps$"+Ja,hs="__reactContainer$"+Ja,id="__reactEvents$"+Ja,Pv="__reactListeners$"+Ja,Lv="__reactHandles$"+Ja;function va(n){var i=n[$r];if(i)return i;for(var a=n.parentNode;a;){if(i=a[hs]||a[$r]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Pp(n);n!==null;){if(a=n[$r])return a;n=Pp(n)}return i}n=a,a=n.parentNode}return null}function el(n){return n=n[$r]||n[hs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Zl(n){return n[Qo]||null}var rd=[],eo=-1;function Bs(n){return{current:n}}function bn(n){0>eo||(n.current=rd[eo],rd[eo]=null,eo--)}function xn(n,i){eo++,rd[eo]=n.current,n.current=i}var zs={},yi=Bs(zs),zi=Bs(!1),xa=zs;function to(n,i){var a=n.type.contextTypes;if(!a)return zs;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Vi(n){return n=n.childContextTypes,n!=null}function Jl(){bn(zi),bn(yi)}function Lp(n,i,a){if(yi.current!==zs)throw Error(t(168));xn(yi,i),xn(zi,a)}function Np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,re(n)||"Unknown",d));return $({},a,c)}function Ql(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zs,xa=yi.current,xn(yi,n),xn(zi,zi.current),!0}function Ip(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Np(n,i,xa),c.__reactInternalMemoizedMergedChildContext=n,bn(zi),bn(yi),xn(yi,n)):bn(zi),xn(zi,a)}var ps=null,ec=!1,sd=!1;function Dp(n){ps===null?ps=[n]:ps.push(n)}function Nv(n){ec=!0,Dp(n)}function Vs(){if(!sd&&ps!==null){sd=!0;var n=0,i=Mt;try{var a=ps;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ps=null,ec=!1}catch(d){throw ps!==null&&(ps=ps.slice(n+1)),Zi(Ji,Vs),d}finally{Mt=i,sd=!1}}return null}var no=[],io=0,tc=null,nc=0,gr=[],vr=0,_a=null,ms=1,gs="";function ya(n,i){no[io++]=nc,no[io++]=tc,tc=n,nc=i}function Up(n,i,a){gr[vr++]=ms,gr[vr++]=gs,gr[vr++]=_a,_a=n;var c=ms;n=gs;var d=32-He(c)-1;c&=~(1<<d),a+=1;var g=32-He(i)+d;if(30<g){var L=d-d%5;g=(c&(1<<L)-1).toString(32),c>>=L,d-=L,ms=1<<32-He(i)+d|a<<d|c,gs=g+n}else ms=1<<g|a<<d|c,gs=n}function ad(n){n.return!==null&&(ya(n,1),Up(n,1,0))}function od(n){for(;n===tc;)tc=no[--io],no[io]=null,nc=no[--io],no[io]=null;for(;n===_a;)_a=gr[--vr],gr[vr]=null,gs=gr[--vr],gr[vr]=null,ms=gr[--vr],gr[vr]=null}var nr=null,ir=null,Cn=!1,Pr=null;function Op(n,i){var a=Sr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Fp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,nr=n,ir=ks(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,nr=n,ir=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=_a!==null?{id:ms,overflow:gs}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Sr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,nr=n,ir=null,!0):!1;default:return!1}}function ld(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cd(n){if(Cn){var i=ir;if(i){var a=i;if(!Fp(n,i)){if(ld(n))throw Error(t(418));i=ks(a.nextSibling);var c=nr;i&&Fp(n,i)?Op(c,a):(n.flags=n.flags&-4097|2,Cn=!1,nr=n)}}else{if(ld(n))throw Error(t(418));n.flags=n.flags&-4097|2,Cn=!1,nr=n}}}function kp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nr=n}function ic(n){if(n!==nr)return!1;if(!Cn)return kp(n),Cn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ed(n.type,n.memoizedProps)),i&&(i=ir)){if(ld(n))throw Bp(),Error(t(418));for(;i;)Op(n,i),i=ks(i.nextSibling)}if(kp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ir=ks(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ir=null}}else ir=nr?ks(n.stateNode.nextSibling):null;return!0}function Bp(){for(var n=ir;n;)n=ks(n.nextSibling)}function ro(){ir=nr=null,Cn=!1}function ud(n){Pr===null?Pr=[n]:Pr.push(n)}var Iv=C.ReactCurrentBatchConfig;function tl(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(L){var V=d.refs;L===null?delete V[g]:V[g]=L},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function rc(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zp(n){var i=n._init;return i(n._payload)}function Vp(n){function i(ue,J){if(n){var me=ue.deletions;me===null?(ue.deletions=[J],ue.flags|=16):me.push(J)}}function a(ue,J){if(!n)return null;for(;J!==null;)i(ue,J),J=J.sibling;return null}function c(ue,J){for(ue=new Map;J!==null;)J.key!==null?ue.set(J.key,J):ue.set(J.index,J),J=J.sibling;return ue}function d(ue,J){return ue=Ys(ue,J),ue.index=0,ue.sibling=null,ue}function g(ue,J,me){return ue.index=me,n?(me=ue.alternate,me!==null?(me=me.index,me<J?(ue.flags|=2,J):me):(ue.flags|=2,J)):(ue.flags|=1048576,J)}function L(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,J,me,Ge){return J===null||J.tag!==6?(J=tf(me,ue.mode,Ge),J.return=ue,J):(J=d(J,me),J.return=ue,J)}function j(ue,J,me,Ge){var dt=me.type;return dt===k?Le(ue,J,me.props.children,Ge,me.key):J!==null&&(J.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===fe&&zp(dt)===J.type)?(Ge=d(J,me.props),Ge.ref=tl(ue,J,me),Ge.return=ue,Ge):(Ge=Rc(me.type,me.key,me.props,null,ue.mode,Ge),Ge.ref=tl(ue,J,me),Ge.return=ue,Ge)}function _e(ue,J,me,Ge){return J===null||J.tag!==4||J.stateNode.containerInfo!==me.containerInfo||J.stateNode.implementation!==me.implementation?(J=nf(me,ue.mode,Ge),J.return=ue,J):(J=d(J,me.children||[]),J.return=ue,J)}function Le(ue,J,me,Ge,dt){return J===null||J.tag!==7?(J=Ra(me,ue.mode,Ge,dt),J.return=ue,J):(J=d(J,me),J.return=ue,J)}function ke(ue,J,me){if(typeof J=="string"&&J!==""||typeof J=="number")return J=tf(""+J,ue.mode,me),J.return=ue,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case U:return me=Rc(J.type,J.key,J.props,null,ue.mode,me),me.ref=tl(ue,null,J),me.return=ue,me;case I:return J=nf(J,ue.mode,me),J.return=ue,J;case fe:var Ge=J._init;return ke(ue,Ge(J._payload),me)}if(en(J)||Q(J))return J=Ra(J,ue.mode,me,null),J.return=ue,J;rc(ue,J)}return null}function Ce(ue,J,me,Ge){var dt=J!==null?J.key:null;if(typeof me=="string"&&me!==""||typeof me=="number")return dt!==null?null:V(ue,J,""+me,Ge);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case U:return me.key===dt?j(ue,J,me,Ge):null;case I:return me.key===dt?_e(ue,J,me,Ge):null;case fe:return dt=me._init,Ce(ue,J,dt(me._payload),Ge)}if(en(me)||Q(me))return dt!==null?null:Le(ue,J,me,Ge,null);rc(ue,me)}return null}function rt(ue,J,me,Ge,dt){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return ue=ue.get(me)||null,V(J,ue,""+Ge,dt);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case U:return ue=ue.get(Ge.key===null?me:Ge.key)||null,j(J,ue,Ge,dt);case I:return ue=ue.get(Ge.key===null?me:Ge.key)||null,_e(J,ue,Ge,dt);case fe:var vt=Ge._init;return rt(ue,J,me,vt(Ge._payload),dt)}if(en(Ge)||Q(Ge))return ue=ue.get(me)||null,Le(J,ue,Ge,dt,null);rc(J,Ge)}return null}function ct(ue,J,me,Ge){for(var dt=null,vt=null,xt=J,bt=J=0,ni=null;xt!==null&&bt<me.length;bt++){xt.index>bt?(ni=xt,xt=null):ni=xt.sibling;var an=Ce(ue,xt,me[bt],Ge);if(an===null){xt===null&&(xt=ni);break}n&&xt&&an.alternate===null&&i(ue,xt),J=g(an,J,bt),vt===null?dt=an:vt.sibling=an,vt=an,xt=ni}if(bt===me.length)return a(ue,xt),Cn&&ya(ue,bt),dt;if(xt===null){for(;bt<me.length;bt++)xt=ke(ue,me[bt],Ge),xt!==null&&(J=g(xt,J,bt),vt===null?dt=xt:vt.sibling=xt,vt=xt);return Cn&&ya(ue,bt),dt}for(xt=c(ue,xt);bt<me.length;bt++)ni=rt(xt,ue,bt,me[bt],Ge),ni!==null&&(n&&ni.alternate!==null&&xt.delete(ni.key===null?bt:ni.key),J=g(ni,J,bt),vt===null?dt=ni:vt.sibling=ni,vt=ni);return n&&xt.forEach(function(Ks){return i(ue,Ks)}),Cn&&ya(ue,bt),dt}function ut(ue,J,me,Ge){var dt=Q(me);if(typeof dt!="function")throw Error(t(150));if(me=dt.call(me),me==null)throw Error(t(151));for(var vt=dt=null,xt=J,bt=J=0,ni=null,an=me.next();xt!==null&&!an.done;bt++,an=me.next()){xt.index>bt?(ni=xt,xt=null):ni=xt.sibling;var Ks=Ce(ue,xt,an.value,Ge);if(Ks===null){xt===null&&(xt=ni);break}n&&xt&&Ks.alternate===null&&i(ue,xt),J=g(Ks,J,bt),vt===null?dt=Ks:vt.sibling=Ks,vt=Ks,xt=ni}if(an.done)return a(ue,xt),Cn&&ya(ue,bt),dt;if(xt===null){for(;!an.done;bt++,an=me.next())an=ke(ue,an.value,Ge),an!==null&&(J=g(an,J,bt),vt===null?dt=an:vt.sibling=an,vt=an);return Cn&&ya(ue,bt),dt}for(xt=c(ue,xt);!an.done;bt++,an=me.next())an=rt(xt,ue,bt,an.value,Ge),an!==null&&(n&&an.alternate!==null&&xt.delete(an.key===null?bt:an.key),J=g(an,J,bt),vt===null?dt=an:vt.sibling=an,vt=an);return n&&xt.forEach(function(fx){return i(ue,fx)}),Cn&&ya(ue,bt),dt}function Bn(ue,J,me,Ge){if(typeof me=="object"&&me!==null&&me.type===k&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case U:e:{for(var dt=me.key,vt=J;vt!==null;){if(vt.key===dt){if(dt=me.type,dt===k){if(vt.tag===7){a(ue,vt.sibling),J=d(vt,me.props.children),J.return=ue,ue=J;break e}}else if(vt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===fe&&zp(dt)===vt.type){a(ue,vt.sibling),J=d(vt,me.props),J.ref=tl(ue,vt,me),J.return=ue,ue=J;break e}a(ue,vt);break}else i(ue,vt);vt=vt.sibling}me.type===k?(J=Ra(me.props.children,ue.mode,Ge,me.key),J.return=ue,ue=J):(Ge=Rc(me.type,me.key,me.props,null,ue.mode,Ge),Ge.ref=tl(ue,J,me),Ge.return=ue,ue=Ge)}return L(ue);case I:e:{for(vt=me.key;J!==null;){if(J.key===vt)if(J.tag===4&&J.stateNode.containerInfo===me.containerInfo&&J.stateNode.implementation===me.implementation){a(ue,J.sibling),J=d(J,me.children||[]),J.return=ue,ue=J;break e}else{a(ue,J);break}else i(ue,J);J=J.sibling}J=nf(me,ue.mode,Ge),J.return=ue,ue=J}return L(ue);case fe:return vt=me._init,Bn(ue,J,vt(me._payload),Ge)}if(en(me))return ct(ue,J,me,Ge);if(Q(me))return ut(ue,J,me,Ge);rc(ue,me)}return typeof me=="string"&&me!==""||typeof me=="number"?(me=""+me,J!==null&&J.tag===6?(a(ue,J.sibling),J=d(J,me),J.return=ue,ue=J):(a(ue,J),J=tf(me,ue.mode,Ge),J.return=ue,ue=J),L(ue)):a(ue,J)}return Bn}var so=Vp(!0),Gp=Vp(!1),sc=Bs(null),ac=null,ao=null,dd=null;function fd(){dd=ao=ac=null}function hd(n){var i=sc.current;bn(sc),n._currentValue=i}function pd(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function oo(n,i){ac=n,dd=ao=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gi=!0),n.firstContext=null)}function xr(n){var i=n._currentValue;if(dd!==n)if(n={context:n,memoizedValue:i,next:null},ao===null){if(ac===null)throw Error(t(308));ao=n,ac.dependencies={lanes:0,firstContext:n}}else ao=ao.next=n;return i}var Sa=null;function md(n){Sa===null?Sa=[n]:Sa.push(n)}function Hp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,md(i)):(a.next=d.next,d.next=a),i.interleaved=a,vs(n,c)}function vs(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gs=!1;function gd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xs(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hs(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(rn&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,vs(n,a)}return d=c.interleaved,d===null?(i.next=i,md(c)):(i.next=d.next,d.next=i),c.interleaved=i,vs(n,a)}function oc(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Un(n,a)}}function Xp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var L={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=L:g=g.next=L,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function lc(n,i,a,c){var d=n.updateQueue;Gs=!1;var g=d.firstBaseUpdate,L=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var j=V,_e=j.next;j.next=null,L===null?g=_e:L.next=_e,L=j;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,V=Le.lastBaseUpdate,V!==L&&(V===null?Le.firstBaseUpdate=_e:V.next=_e,Le.lastBaseUpdate=j))}if(g!==null){var ke=d.baseState;L=0,Le=_e=j=null,V=g;do{var Ce=V.lane,rt=V.eventTime;if((c&Ce)===Ce){Le!==null&&(Le=Le.next={eventTime:rt,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var ct=n,ut=V;switch(Ce=i,rt=a,ut.tag){case 1:if(ct=ut.payload,typeof ct=="function"){ke=ct.call(rt,ke,Ce);break e}ke=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=ut.payload,Ce=typeof ct=="function"?ct.call(rt,ke,Ce):ct,Ce==null)break e;ke=$({},ke,Ce);break e;case 2:Gs=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Ce=d.effects,Ce===null?d.effects=[V]:Ce.push(V))}else rt={eventTime:rt,lane:Ce,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Le===null?(_e=Le=rt,j=ke):Le=Le.next=rt,L|=Ce;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;Ce=V,V=Ce.next,Ce.next=null,d.lastBaseUpdate=Ce,d.shared.pending=null}}while(!0);if(Le===null&&(j=ke),d.baseState=j,d.firstBaseUpdate=_e,d.lastBaseUpdate=Le,i=d.shared.interleaved,i!==null){d=i;do L|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);wa|=L,n.lanes=L,n.memoizedState=ke}}function qp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var nl={},Yr=Bs(nl),il=Bs(nl),rl=Bs(nl);function Ma(n){if(n===nl)throw Error(t(174));return n}function vd(n,i){switch(xn(rl,i),xn(il,n),xn(Yr,nl),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:b(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=b(i,n)}bn(Yr),xn(Yr,i)}function lo(){bn(Yr),bn(il),bn(rl)}function jp(n){Ma(rl.current);var i=Ma(Yr.current),a=b(i,n.type);i!==a&&(xn(il,n),xn(Yr,a))}function xd(n){il.current===n&&(bn(Yr),bn(il))}var Nn=Bs(0);function cc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _d=[];function yd(){for(var n=0;n<_d.length;n++)_d[n]._workInProgressVersionPrimary=null;_d.length=0}var uc=C.ReactCurrentDispatcher,Sd=C.ReactCurrentBatchConfig,Ea=0,In=null,qn=null,ei=null,dc=!1,sl=!1,al=0,Dv=0;function Si(){throw Error(t(321))}function Md(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Cr(n[a],i[a]))return!1;return!0}function Ed(n,i,a,c,d,g){if(Ea=g,In=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,uc.current=n===null||n.memoizedState===null?kv:Bv,n=a(c,d),sl){g=0;do{if(sl=!1,al=0,25<=g)throw Error(t(301));g+=1,ei=qn=null,i.updateQueue=null,uc.current=zv,n=a(c,d)}while(sl)}if(uc.current=pc,i=qn!==null&&qn.next!==null,Ea=0,ei=qn=In=null,dc=!1,i)throw Error(t(300));return n}function wd(){var n=al!==0;return al=0,n}function Kr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ei===null?In.memoizedState=ei=n:ei=ei.next=n,ei}function _r(){if(qn===null){var n=In.alternate;n=n!==null?n.memoizedState:null}else n=qn.next;var i=ei===null?In.memoizedState:ei.next;if(i!==null)ei=i,qn=n;else{if(n===null)throw Error(t(310));qn=n,n={memoizedState:qn.memoizedState,baseState:qn.baseState,baseQueue:qn.baseQueue,queue:qn.queue,next:null},ei===null?In.memoizedState=ei=n:ei=ei.next=n}return ei}function ol(n,i){return typeof i=="function"?i(n):i}function bd(n){var i=_r(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=qn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var L=d.next;d.next=g.next,g.next=L}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=L=null,j=null,_e=g;do{var Le=_e.lane;if((Ea&Le)===Le)j!==null&&(j=j.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),c=_e.hasEagerState?_e.eagerState:n(c,_e.action);else{var ke={lane:Le,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};j===null?(V=j=ke,L=c):j=j.next=ke,In.lanes|=Le,wa|=Le}_e=_e.next}while(_e!==null&&_e!==g);j===null?L=c:j.next=V,Cr(c,i.memoizedState)||(Gi=!0),i.memoizedState=c,i.baseState=L,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,In.lanes|=g,wa|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Td(n){var i=_r(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var L=d=d.next;do g=n(g,L.action),L=L.next;while(L!==d);Cr(g,i.memoizedState)||(Gi=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function $p(){}function Yp(n,i){var a=In,c=_r(),d=i(),g=!Cr(c.memoizedState,d);if(g&&(c.memoizedState=d,Gi=!0),c=c.queue,Ad(Jp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||ei!==null&&ei.memoizedState.tag&1){if(a.flags|=2048,ll(9,Zp.bind(null,a,c,d,i),void 0,null),ti===null)throw Error(t(349));(Ea&30)!==0||Kp(a,i,d)}return d}function Kp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=In.updateQueue,i===null?(i={lastEffect:null,stores:null},In.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zp(n,i,a,c){i.value=a,i.getSnapshot=c,Qp(i)&&em(n)}function Jp(n,i,a){return a(function(){Qp(i)&&em(n)})}function Qp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Cr(n,a)}catch{return!0}}function em(n){var i=vs(n,1);i!==null&&Dr(i,n,1,-1)}function tm(n){var i=Kr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:n},i.queue=n,n=n.dispatch=Fv.bind(null,In,n),[i.memoizedState,n]}function ll(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=In.updateQueue,i===null?(i={lastEffect:null,stores:null},In.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function nm(){return _r().memoizedState}function fc(n,i,a,c){var d=Kr();In.flags|=n,d.memoizedState=ll(1|i,a,void 0,c===void 0?null:c)}function hc(n,i,a,c){var d=_r();c=c===void 0?null:c;var g=void 0;if(qn!==null){var L=qn.memoizedState;if(g=L.destroy,c!==null&&Md(c,L.deps)){d.memoizedState=ll(i,a,g,c);return}}In.flags|=n,d.memoizedState=ll(1|i,a,g,c)}function im(n,i){return fc(8390656,8,n,i)}function Ad(n,i){return hc(2048,8,n,i)}function rm(n,i){return hc(4,2,n,i)}function sm(n,i){return hc(4,4,n,i)}function am(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function om(n,i,a){return a=a!=null?a.concat([n]):null,hc(4,4,am.bind(null,i,n),a)}function Rd(){}function lm(n,i){var a=_r();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Md(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cm(n,i){var a=_r();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Md(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function um(n,i,a){return(Ea&21)===0?(n.baseState&&(n.baseState=!1,Gi=!0),n.memoizedState=a):(Cr(a,i)||(a=Rn(),In.lanes|=a,wa|=a,n.baseState=!0),i)}function Uv(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=Sd.transition;Sd.transition={};try{n(!1),i()}finally{Mt=a,Sd.transition=c}}function dm(){return _r().memoizedState}function Ov(n,i,a){var c=js(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fm(n))hm(i,a);else if(a=Hp(n,i,a,c),a!==null){var d=Di();Dr(a,n,c,d),pm(a,i,c)}}function Fv(n,i,a){var c=js(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fm(n))hm(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var L=i.lastRenderedState,V=g(L,a);if(d.hasEagerState=!0,d.eagerState=V,Cr(V,L)){var j=i.interleaved;j===null?(d.next=d,md(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}a=Hp(n,i,d,c),a!==null&&(d=Di(),Dr(a,n,c,d),pm(a,i,c))}}function fm(n){var i=n.alternate;return n===In||i!==null&&i===In}function hm(n,i){sl=dc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Un(n,a)}}var pc={readContext:xr,useCallback:Si,useContext:Si,useEffect:Si,useImperativeHandle:Si,useInsertionEffect:Si,useLayoutEffect:Si,useMemo:Si,useReducer:Si,useRef:Si,useState:Si,useDebugValue:Si,useDeferredValue:Si,useTransition:Si,useMutableSource:Si,useSyncExternalStore:Si,useId:Si,unstable_isNewReconciler:!1},kv={readContext:xr,useCallback:function(n,i){return Kr().memoizedState=[n,i===void 0?null:i],n},useContext:xr,useEffect:im,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,fc(4194308,4,am.bind(null,i,n),a)},useLayoutEffect:function(n,i){return fc(4194308,4,n,i)},useInsertionEffect:function(n,i){return fc(4,2,n,i)},useMemo:function(n,i){var a=Kr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Kr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Ov.bind(null,In,n),[c.memoizedState,n]},useRef:function(n){var i=Kr();return n={current:n},i.memoizedState=n},useState:tm,useDebugValue:Rd,useDeferredValue:function(n){return Kr().memoizedState=n},useTransition:function(){var n=tm(!1),i=n[0];return n=Uv.bind(null,n[1]),Kr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=In,d=Kr();if(Cn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ti===null)throw Error(t(349));(Ea&30)!==0||Kp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,im(Jp.bind(null,c,g,n),[n]),c.flags|=2048,ll(9,Zp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Kr(),i=ti.identifierPrefix;if(Cn){var a=gs,c=ms;a=(c&~(1<<32-He(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=al++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Dv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Bv={readContext:xr,useCallback:lm,useContext:xr,useEffect:Ad,useImperativeHandle:om,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:bd,useRef:nm,useState:function(){return bd(ol)},useDebugValue:Rd,useDeferredValue:function(n){var i=_r();return um(i,qn.memoizedState,n)},useTransition:function(){var n=bd(ol)[0],i=_r().memoizedState;return[n,i]},useMutableSource:$p,useSyncExternalStore:Yp,useId:dm,unstable_isNewReconciler:!1},zv={readContext:xr,useCallback:lm,useContext:xr,useEffect:Ad,useImperativeHandle:om,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:Td,useRef:nm,useState:function(){return Td(ol)},useDebugValue:Rd,useDeferredValue:function(n){var i=_r();return qn===null?i.memoizedState=n:um(i,qn.memoizedState,n)},useTransition:function(){var n=Td(ol)[0],i=_r().memoizedState;return[n,i]},useMutableSource:$p,useSyncExternalStore:Yp,useId:dm,unstable_isNewReconciler:!1};function Lr(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Cd(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var mc={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Di(),d=js(n),g=xs(c,d);g.payload=i,a!=null&&(g.callback=a),i=Hs(n,g,d),i!==null&&(Dr(i,n,d,c),oc(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Di(),d=js(n),g=xs(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Hs(n,g,d),i!==null&&(Dr(i,n,d,c),oc(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Di(),c=js(n),d=xs(a,c);d.tag=2,i!=null&&(d.callback=i),i=Hs(n,d,c),i!==null&&(Dr(i,n,c,a),oc(i,n,c))}};function mm(n,i,a,c,d,g,L){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,L):i.prototype&&i.prototype.isPureReactComponent?!$o(a,c)||!$o(d,g):!0}function gm(n,i,a){var c=!1,d=zs,g=i.contextType;return typeof g=="object"&&g!==null?g=xr(g):(d=Vi(i)?xa:yi.current,c=i.contextTypes,g=(c=c!=null)?to(n,d):zs),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=mc,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function vm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&mc.enqueueReplaceState(i,i.state,null)}function Pd(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},gd(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=xr(g):(g=Vi(i)?xa:yi.current,d.context=to(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Cd(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&mc.enqueueReplaceState(d,d.state,null),lc(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function co(n,i){try{var a="",c=i;do a+=je(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Ld(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Nd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function xm(n,i,a){a=xs(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Mc||(Mc=!0,jd=c),Nd(n,i)},a}function _m(n,i,a){a=xs(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Nd(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Nd(n,i),typeof c!="function"&&(Xs===null?Xs=new Set([this]):Xs.add(this));var L=i.stack;this.componentDidCatch(i.value,{componentStack:L!==null?L:""})}),a}function ym(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Vv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=tx.bind(null,n,i,a),i.then(n,n))}function Sm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xs(-1,1),i.tag=2,Hs(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Gv=C.ReactCurrentOwner,Gi=!1;function Ii(n,i,a,c){i.child=n===null?Gp(i,null,a,c):so(i,n.child,a,c)}function Em(n,i,a,c,d){a=a.render;var g=i.ref;return oo(i,d),c=Ed(n,i,a,c,g,d),a=wd(),n!==null&&!Gi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_s(n,i,d)):(Cn&&a&&ad(i),i.flags|=1,Ii(n,i,c,d),i.child)}function wm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!ef(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,bm(n,i,g,c,d)):(n=Rc(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var L=g.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(L,c)&&n.ref===i.ref)return _s(n,i,d)}return i.flags|=1,n=Ys(g,c),n.ref=i.ref,n.return=i,i.child=n}function bm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if($o(g,c)&&n.ref===i.ref)if(Gi=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gi=!0);else return i.lanes=n.lanes,_s(n,i,d)}return Id(n,i,a,c,d)}function Tm(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},xn(fo,rr),rr|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,xn(fo,rr),rr|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,xn(fo,rr),rr|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,xn(fo,rr),rr|=c;return Ii(n,i,d,a),i.child}function Am(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Id(n,i,a,c,d){var g=Vi(a)?xa:yi.current;return g=to(i,g),oo(i,d),a=Ed(n,i,a,c,g,d),c=wd(),n!==null&&!Gi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_s(n,i,d)):(Cn&&c&&ad(i),i.flags|=1,Ii(n,i,a,d),i.child)}function Rm(n,i,a,c,d){if(Vi(a)){var g=!0;Ql(i)}else g=!1;if(oo(i,d),i.stateNode===null)vc(n,i),gm(i,a,c),Pd(i,a,c,d),c=!0;else if(n===null){var L=i.stateNode,V=i.memoizedProps;L.props=V;var j=L.context,_e=a.contextType;typeof _e=="object"&&_e!==null?_e=xr(_e):(_e=Vi(a)?xa:yi.current,_e=to(i,_e));var Le=a.getDerivedStateFromProps,ke=typeof Le=="function"||typeof L.getSnapshotBeforeUpdate=="function";ke||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(V!==c||j!==_e)&&vm(i,L,c,_e),Gs=!1;var Ce=i.memoizedState;L.state=Ce,lc(i,c,L,d),j=i.memoizedState,V!==c||Ce!==j||zi.current||Gs?(typeof Le=="function"&&(Cd(i,a,Le,c),j=i.memoizedState),(V=Gs||mm(i,a,V,c,Ce,j,_e))?(ke||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(i.flags|=4194308)):(typeof L.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),L.props=c,L.state=j,L.context=_e,c=V):(typeof L.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{L=i.stateNode,Wp(n,i),V=i.memoizedProps,_e=i.type===i.elementType?V:Lr(i.type,V),L.props=_e,ke=i.pendingProps,Ce=L.context,j=a.contextType,typeof j=="object"&&j!==null?j=xr(j):(j=Vi(a)?xa:yi.current,j=to(i,j));var rt=a.getDerivedStateFromProps;(Le=typeof rt=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(V!==ke||Ce!==j)&&vm(i,L,c,j),Gs=!1,Ce=i.memoizedState,L.state=Ce,lc(i,c,L,d);var ct=i.memoizedState;V!==ke||Ce!==ct||zi.current||Gs?(typeof rt=="function"&&(Cd(i,a,rt,c),ct=i.memoizedState),(_e=Gs||mm(i,a,_e,c,Ce,ct,j)||!1)?(Le||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(c,ct,j),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(c,ct,j)),typeof L.componentDidUpdate=="function"&&(i.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof L.componentDidUpdate!="function"||V===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ct),L.props=c,L.state=ct,L.context=j,c=_e):(typeof L.componentDidUpdate!="function"||V===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),c=!1)}return Dd(n,i,a,c,g,d)}function Dd(n,i,a,c,d,g){Am(n,i);var L=(i.flags&128)!==0;if(!c&&!L)return d&&Ip(i,a,!1),_s(n,i,g);c=i.stateNode,Gv.current=i;var V=L&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&L?(i.child=so(i,n.child,null,g),i.child=so(i,null,V,g)):Ii(n,i,V,g),i.memoizedState=c.state,d&&Ip(i,a,!0),i.child}function Cm(n){var i=n.stateNode;i.pendingContext?Lp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Lp(n,i.context,!1),vd(n,i.containerInfo)}function Pm(n,i,a,c,d){return ro(),ud(d),i.flags|=256,Ii(n,i,a,c),i.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Od(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lm(n,i,a){var c=i.pendingProps,d=Nn.current,g=!1,L=(i.flags&128)!==0,V;if((V=L)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),xn(Nn,d&1),n===null)return cd(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(L=c.children,n=c.fallback,g?(c=i.mode,g=i.child,L={mode:"hidden",children:L},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=L):g=Cc(L,c,0,null),n=Ra(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Od(a),i.memoizedState=Ud,n):Fd(i,L));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return Hv(n,i,L,c,V,d,a);if(g){g=c.fallback,L=i.mode,d=n.child,V=d.sibling;var j={mode:"hidden",children:c.children};return(L&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Ys(d,j),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=Ys(V,g):(g=Ra(g,L,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,L=n.child.memoizedState,L=L===null?Od(a):{baseLanes:L.baseLanes|a,cachePool:null,transitions:L.transitions},g.memoizedState=L,g.childLanes=n.childLanes&~a,i.memoizedState=Ud,c}return g=n.child,n=g.sibling,c=Ys(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Fd(n,i){return i=Cc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function gc(n,i,a,c){return c!==null&&ud(c),so(i,n.child,null,a),n=Fd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Hv(n,i,a,c,d,g,L){if(a)return i.flags&256?(i.flags&=-257,c=Ld(Error(t(422))),gc(n,i,L,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Cc({mode:"visible",children:c.children},d,0,null),g=Ra(g,d,L,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&so(i,n.child,null,L),i.child.memoizedState=Od(L),i.memoizedState=Ud,g);if((i.mode&1)===0)return gc(n,i,L,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=Ld(g,c,void 0),gc(n,i,L,c)}if(V=(L&n.childLanes)!==0,Gi||V){if(c=ti,c!==null){switch(L&-L){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|L))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,vs(n,d),Dr(c,n,d,-1))}return Qd(),c=Ld(Error(t(421))),gc(n,i,L,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=nx.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,ir=ks(d.nextSibling),nr=i,Cn=!0,Pr=null,n!==null&&(gr[vr++]=ms,gr[vr++]=gs,gr[vr++]=_a,ms=n.id,gs=n.overflow,_a=i),i=Fd(i,c.children),i.flags|=4096,i)}function Nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),pd(n.return,i,a)}function kd(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Im(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Ii(n,i,c.children,a),c=Nn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,a,i);else if(n.tag===19)Nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(xn(Nn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&cc(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),kd(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&cc(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}kd(i,!0,a,null,g);break;case"together":kd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function vc(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function _s(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),wa|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ys(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ys(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Wv(n,i,a){switch(i.tag){case 3:Cm(i),ro();break;case 5:jp(i);break;case 1:Vi(i.type)&&Ql(i);break;case 4:vd(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;xn(sc,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(xn(Nn,Nn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Lm(n,i,a):(xn(Nn,Nn.current&1),n=_s(n,i,a),n!==null?n.sibling:null);xn(Nn,Nn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Im(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),xn(Nn,Nn.current),c)break;return null;case 22:case 23:return i.lanes=0,Tm(n,i,a)}return _s(n,i,a)}var Dm,Bd,Um,Om;Dm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bd=function(){},Um=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ma(Yr.current);var g=null;switch(a){case"input":d=pt(n,d),c=pt(n,c),g=[];break;case"select":d=$({},d,{value:void 0}),c=$({},c,{value:void 0}),g=[];break;case"textarea":d=qt(n,d),c=qt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Kl)}et(a,c);var L;a=null;for(_e in d)if(!c.hasOwnProperty(_e)&&d.hasOwnProperty(_e)&&d[_e]!=null)if(_e==="style"){var V=d[_e];for(L in V)V.hasOwnProperty(L)&&(a||(a={}),a[L]="")}else _e!=="dangerouslySetInnerHTML"&&_e!=="children"&&_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&_e!=="autoFocus"&&(o.hasOwnProperty(_e)?g||(g=[]):(g=g||[]).push(_e,null));for(_e in c){var j=c[_e];if(V=d!=null?d[_e]:void 0,c.hasOwnProperty(_e)&&j!==V&&(j!=null||V!=null))if(_e==="style")if(V){for(L in V)!V.hasOwnProperty(L)||j&&j.hasOwnProperty(L)||(a||(a={}),a[L]="");for(L in j)j.hasOwnProperty(L)&&V[L]!==j[L]&&(a||(a={}),a[L]=j[L])}else a||(g||(g=[]),g.push(_e,a)),a=j;else _e==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,V=V?V.__html:void 0,j!=null&&V!==j&&(g=g||[]).push(_e,j)):_e==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(_e,""+j):_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&(o.hasOwnProperty(_e)?(j!=null&&_e==="onScroll"&&wn("scroll",n),g||V===j||(g=[])):(g=g||[]).push(_e,j))}a&&(g=g||[]).push("style",a);var _e=g;(i.updateQueue=_e)&&(i.flags|=4)}},Om=function(n,i,a,c){a!==c&&(i.flags|=4)};function cl(n,i){if(!Cn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mi(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Xv(n,i,a){var c=i.pendingProps;switch(od(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mi(i),null;case 1:return Vi(i.type)&&Jl(),Mi(i),null;case 3:return c=i.stateNode,lo(),bn(zi),bn(yi),yd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ic(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pr!==null&&(Kd(Pr),Pr=null))),Bd(n,i),Mi(i),null;case 5:xd(i);var d=Ma(rl.current);if(a=i.type,n!==null&&i.stateNode!=null)Um(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mi(i),null}if(n=Ma(Yr.current),ic(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[$r]=i,c[Qo]=g,n=(i.mode&1)!==0,a){case"dialog":wn("cancel",c),wn("close",c);break;case"iframe":case"object":case"embed":wn("load",c);break;case"video":case"audio":for(d=0;d<Ko.length;d++)wn(Ko[d],c);break;case"source":wn("error",c);break;case"img":case"image":case"link":wn("error",c),wn("load",c);break;case"details":wn("toggle",c);break;case"input":ht(c,g),wn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},wn("invalid",c);break;case"textarea":X(c,g),wn("invalid",c)}et(a,g),d=null;for(var L in g)if(g.hasOwnProperty(L)){var V=g[L];L==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&Yl(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&Yl(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(L)&&V!=null&&L==="onScroll"&&wn("scroll",c)}switch(a){case"input":Oe(c),Xt(c,g,!0);break;case"textarea":Oe(c),Tt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Kl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{L=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=B(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=L.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=L.createElement(a,{is:c.is}):(n=L.createElement(a),a==="select"&&(L=n,c.multiple?L.multiple=!0:c.size&&(L.size=c.size))):n=L.createElementNS(n,a),n[$r]=i,n[Qo]=c,Dm(n,i,!1,!1),i.stateNode=n;e:{switch(L=Be(a,c),a){case"dialog":wn("cancel",n),wn("close",n),d=c;break;case"iframe":case"object":case"embed":wn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ko.length;d++)wn(Ko[d],n);d=c;break;case"source":wn("error",n),d=c;break;case"img":case"image":case"link":wn("error",n),wn("load",n),d=c;break;case"details":wn("toggle",n),d=c;break;case"input":ht(n,c),d=pt(n,c),wn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=$({},c,{value:void 0}),wn("invalid",n);break;case"textarea":X(n,c),d=qt(n,c),wn("invalid",n);break;default:d=c}et(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var j=V[g];g==="style"?Me(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&se(n,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&de(n,j):typeof j=="number"&&de(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&wn("scroll",n):j!=null&&F(n,g,j,L))}switch(a){case"input":Oe(n),Xt(n,c,!1);break;case"textarea":Oe(n),Tt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+he(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?yt(n,!!c.multiple,g,!1):c.defaultValue!=null&&yt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mi(i),null;case 6:if(n&&i.stateNode!=null)Om(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ma(rl.current),Ma(Yr.current),ic(i)){if(c=i.stateNode,a=i.memoizedProps,c[$r]=i,(g=c.nodeValue!==a)&&(n=nr,n!==null))switch(n.tag){case 3:Yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$r]=i,i.stateNode=c}return Mi(i),null;case 13:if(bn(Nn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Cn&&ir!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bp(),ro(),i.flags|=98560,g=!1;else if(g=ic(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[$r]=i}else ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mi(i),g=!1}else Pr!==null&&(Kd(Pr),Pr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Nn.current&1)!==0?jn===0&&(jn=3):Qd())),i.updateQueue!==null&&(i.flags|=4),Mi(i),null);case 4:return lo(),Bd(n,i),n===null&&Zo(i.stateNode.containerInfo),Mi(i),null;case 10:return hd(i.type._context),Mi(i),null;case 17:return Vi(i.type)&&Jl(),Mi(i),null;case 19:if(bn(Nn),g=i.memoizedState,g===null)return Mi(i),null;if(c=(i.flags&128)!==0,L=g.rendering,L===null)if(c)cl(g,!1);else{if(jn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(L=cc(n),L!==null){for(i.flags|=128,cl(g,!1),c=L.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,L=g.alternate,L===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=L.childLanes,g.lanes=L.lanes,g.child=L.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=L.memoizedProps,g.memoizedState=L.memoizedState,g.updateQueue=L.updateQueue,g.type=L.type,n=L.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return xn(Nn,Nn.current&1|2),i.child}n=n.sibling}g.tail!==null&&ln()>ho&&(i.flags|=128,c=!0,cl(g,!1),i.lanes=4194304)}else{if(!c)if(n=cc(L),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),cl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!L.alternate&&!Cn)return Mi(i),null}else 2*ln()-g.renderingStartTime>ho&&a!==1073741824&&(i.flags|=128,c=!0,cl(g,!1),i.lanes=4194304);g.isBackwards?(L.sibling=i.child,i.child=L):(a=g.last,a!==null?a.sibling=L:i.child=L,g.last=L)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=ln(),i.sibling=null,a=Nn.current,xn(Nn,c?a&1|2:a&1),i):(Mi(i),null);case 22:case 23:return Jd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(rr&1073741824)!==0&&(Mi(i),i.subtreeFlags&6&&(i.flags|=8192)):Mi(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function qv(n,i){switch(od(i),i.tag){case 1:return Vi(i.type)&&Jl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return lo(),bn(zi),bn(yi),yd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return xd(i),null;case 13:if(bn(Nn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ro()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return bn(Nn),null;case 4:return lo(),null;case 10:return hd(i.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var xc=!1,Ei=!1,jv=typeof WeakSet=="function"?WeakSet:Set,at=null;function uo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){On(n,i,c)}else a.current=null}function zd(n,i,a){try{a()}catch(c){On(n,i,c)}}var Fm=!1;function $v(n,i){if(Ju=Hr,n=mp(),Wu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var L=0,V=-1,j=-1,_e=0,Le=0,ke=n,Ce=null;t:for(;;){for(var rt;ke!==a||d!==0&&ke.nodeType!==3||(V=L+d),ke!==g||c!==0&&ke.nodeType!==3||(j=L+c),ke.nodeType===3&&(L+=ke.nodeValue.length),(rt=ke.firstChild)!==null;)Ce=ke,ke=rt;for(;;){if(ke===n)break t;if(Ce===a&&++_e===d&&(V=L),Ce===g&&++Le===c&&(j=L),(rt=ke.nextSibling)!==null)break;ke=Ce,Ce=ke.parentNode}ke=rt}a=V===-1||j===-1?null:{start:V,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qu={focusedElem:n,selectionRange:a},Hr=!1,at=i;at!==null;)if(i=at,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,at=n;else for(;at!==null;){i=at;try{var ct=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ct!==null){var ut=ct.memoizedProps,Bn=ct.memoizedState,ue=i.stateNode,J=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ut:Lr(i.type,ut),Bn);ue.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var me=i.stateNode.containerInfo;me.nodeType===1?me.textContent="":me.nodeType===9&&me.documentElement&&me.removeChild(me.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ge){On(i,i.return,Ge)}if(n=i.sibling,n!==null){n.return=i.return,at=n;break}at=i.return}return ct=Fm,Fm=!1,ct}function ul(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&zd(i,a,g)}d=d.next}while(d!==c)}}function _c(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function km(n){var i=n.alternate;i!==null&&(n.alternate=null,km(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$r],delete i[Qo],delete i[id],delete i[Pv],delete i[Lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bm(n){return n.tag===5||n.tag===3||n.tag===4}function zm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Kl));else if(c!==4&&(n=n.child,n!==null))for(Gd(n,i,a),n=n.sibling;n!==null;)Gd(n,i,a),n=n.sibling}function Hd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hd(n,i,a),n=n.sibling;n!==null;)Hd(n,i,a),n=n.sibling}var hi=null,Nr=!1;function Ws(n,i,a){for(a=a.child;a!==null;)Vm(n,i,a),a=a.sibling}function Vm(n,i,a){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Ei||uo(a,i);case 6:var c=hi,d=Nr;hi=null,Ws(n,i,a),hi=c,Nr=d,hi!==null&&(Nr?(n=hi,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hi.removeChild(a.stateNode));break;case 18:hi!==null&&(Nr?(n=hi,a=a.stateNode,n.nodeType===8?nd(n.parentNode,a):n.nodeType===1&&nd(n,a),kn(n)):nd(hi,a.stateNode));break;case 4:c=hi,d=Nr,hi=a.stateNode.containerInfo,Nr=!0,Ws(n,i,a),hi=c,Nr=d;break;case 0:case 11:case 14:case 15:if(!Ei&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,L=g.destroy;g=g.tag,L!==void 0&&((g&2)!==0||(g&4)!==0)&&zd(a,i,L),d=d.next}while(d!==c)}Ws(n,i,a);break;case 1:if(!Ei&&(uo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){On(a,i,V)}Ws(n,i,a);break;case 21:Ws(n,i,a);break;case 22:a.mode&1?(Ei=(c=Ei)||a.memoizedState!==null,Ws(n,i,a),Ei=c):Ws(n,i,a);break;default:Ws(n,i,a)}}function Gm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jv),i.forEach(function(c){var d=ix.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ir(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,L=i,V=L;e:for(;V!==null;){switch(V.tag){case 5:hi=V.stateNode,Nr=!1;break e;case 3:hi=V.stateNode.containerInfo,Nr=!0;break e;case 4:hi=V.stateNode.containerInfo,Nr=!0;break e}V=V.return}if(hi===null)throw Error(t(160));Vm(g,L,d),hi=null,Nr=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(_e){On(d,i,_e)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hm(i,n),i=i.sibling}function Hm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ir(i,n),Zr(n),c&4){try{ul(3,n,n.return),_c(3,n)}catch(ut){On(n,n.return,ut)}try{ul(5,n,n.return)}catch(ut){On(n,n.return,ut)}}break;case 1:Ir(i,n),Zr(n),c&512&&a!==null&&uo(a,a.return);break;case 5:if(Ir(i,n),Zr(n),c&512&&a!==null&&uo(a,a.return),n.flags&32){var d=n.stateNode;try{de(d,"")}catch(ut){On(n,n.return,ut)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,L=a!==null?a.memoizedProps:g,V=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&At(d,g),Be(V,L);var _e=Be(V,g);for(L=0;L<j.length;L+=2){var Le=j[L],ke=j[L+1];Le==="style"?Me(d,ke):Le==="dangerouslySetInnerHTML"?se(d,ke):Le==="children"?de(d,ke):F(d,Le,ke,_e)}switch(V){case"input":gt(d,g);break;case"textarea":fn(d,g);break;case"select":var Ce=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var rt=g.value;rt!=null?yt(d,!!g.multiple,rt,!1):Ce!==!!g.multiple&&(g.defaultValue!=null?yt(d,!!g.multiple,g.defaultValue,!0):yt(d,!!g.multiple,g.multiple?[]:"",!1))}d[Qo]=g}catch(ut){On(n,n.return,ut)}}break;case 6:if(Ir(i,n),Zr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ut){On(n,n.return,ut)}}break;case 3:if(Ir(i,n),Zr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(ut){On(n,n.return,ut)}break;case 4:Ir(i,n),Zr(n);break;case 13:Ir(i,n),Zr(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(qd=ln())),c&4&&Gm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Ei=(_e=Ei)||Le,Ir(i,n),Ei=_e):Ir(i,n),Zr(n),c&8192){if(_e=n.memoizedState!==null,(n.stateNode.isHidden=_e)&&!Le&&(n.mode&1)!==0)for(at=n,Le=n.child;Le!==null;){for(ke=at=Le;at!==null;){switch(Ce=at,rt=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:ul(4,Ce,Ce.return);break;case 1:uo(Ce,Ce.return);var ct=Ce.stateNode;if(typeof ct.componentWillUnmount=="function"){c=Ce,a=Ce.return;try{i=c,ct.props=i.memoizedProps,ct.state=i.memoizedState,ct.componentWillUnmount()}catch(ut){On(c,a,ut)}}break;case 5:uo(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){qm(ke);continue}}rt!==null?(rt.return=Ce,at=rt):qm(ke)}Le=Le.sibling}e:for(Le=null,ke=n;;){if(ke.tag===5){if(Le===null){Le=ke;try{d=ke.stateNode,_e?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=ke.stateNode,j=ke.memoizedProps.style,L=j!=null&&j.hasOwnProperty("display")?j.display:null,V.style.display=xe("display",L))}catch(ut){On(n,n.return,ut)}}}else if(ke.tag===6){if(Le===null)try{ke.stateNode.nodeValue=_e?"":ke.memoizedProps}catch(ut){On(n,n.return,ut)}}else if((ke.tag!==22&&ke.tag!==23||ke.memoizedState===null||ke===n)&&ke.child!==null){ke.child.return=ke,ke=ke.child;continue}if(ke===n)break e;for(;ke.sibling===null;){if(ke.return===null||ke.return===n)break e;Le===ke&&(Le=null),ke=ke.return}Le===ke&&(Le=null),ke.sibling.return=ke.return,ke=ke.sibling}}break;case 19:Ir(i,n),Zr(n),c&4&&Gm(n);break;case 21:break;default:Ir(i,n),Zr(n)}}function Zr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(de(d,""),c.flags&=-33);var g=zm(n);Hd(n,g,d);break;case 3:case 4:var L=c.stateNode.containerInfo,V=zm(n);Gd(n,V,L);break;default:throw Error(t(161))}}catch(j){On(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Yv(n,i,a){at=n,Wm(n)}function Wm(n,i,a){for(var c=(n.mode&1)!==0;at!==null;){var d=at,g=d.child;if(d.tag===22&&c){var L=d.memoizedState!==null||xc;if(!L){var V=d.alternate,j=V!==null&&V.memoizedState!==null||Ei;V=xc;var _e=Ei;if(xc=L,(Ei=j)&&!_e)for(at=d;at!==null;)L=at,j=L.child,L.tag===22&&L.memoizedState!==null?jm(d):j!==null?(j.return=L,at=j):jm(d);for(;g!==null;)at=g,Wm(g),g=g.sibling;at=d,xc=V,Ei=_e}Xm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,at=g):Xm(n)}}function Xm(n){for(;at!==null;){var i=at;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ei||_c(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ei)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Lr(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&qp(i,g,c);break;case 3:var L=i.updateQueue;if(L!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qp(i,L,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var _e=i.alternate;if(_e!==null){var Le=_e.memoizedState;if(Le!==null){var ke=Le.dehydrated;ke!==null&&kn(ke)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ei||i.flags&512&&Vd(i)}catch(Ce){On(i,i.return,Ce)}}if(i===n){at=null;break}if(a=i.sibling,a!==null){a.return=i.return,at=a;break}at=i.return}}function qm(n){for(;at!==null;){var i=at;if(i===n){at=null;break}var a=i.sibling;if(a!==null){a.return=i.return,at=a;break}at=i.return}}function jm(n){for(;at!==null;){var i=at;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{_c(4,i)}catch(j){On(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(j){On(i,d,j)}}var g=i.return;try{Vd(i)}catch(j){On(i,g,j)}break;case 5:var L=i.return;try{Vd(i)}catch(j){On(i,L,j)}}}catch(j){On(i,i.return,j)}if(i===n){at=null;break}var V=i.sibling;if(V!==null){V.return=i.return,at=V;break}at=i.return}}var Kv=Math.ceil,yc=C.ReactCurrentDispatcher,Wd=C.ReactCurrentOwner,yr=C.ReactCurrentBatchConfig,rn=0,ti=null,Vn=null,pi=0,rr=0,fo=Bs(0),jn=0,dl=null,wa=0,Sc=0,Xd=0,fl=null,Hi=null,qd=0,ho=1/0,ys=null,Mc=!1,jd=null,Xs=null,Ec=!1,qs=null,wc=0,hl=0,$d=null,bc=-1,Tc=0;function Di(){return(rn&6)!==0?ln():bc!==-1?bc:bc=ln()}function js(n){return(n.mode&1)===0?1:(rn&2)!==0&&pi!==0?pi&-pi:Iv.transition!==null?(Tc===0&&(Tc=Rn()),Tc):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:da(n.type)),n)}function Dr(n,i,a,c){if(50<hl)throw hl=0,$d=null,Error(t(185));cn(n,a,c),((rn&2)===0||n!==ti)&&(n===ti&&((rn&2)===0&&(Sc|=a),jn===4&&$s(n,pi)),Wi(n,c),a===1&&rn===0&&(i.mode&1)===0&&(ho=ln()+500,ec&&Vs()))}function Wi(n,i){var a=n.callbackNode;tn(n,i);var c=Nt(n,n===ti?pi:0);if(c===0)a!==null&&oi(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&oi(a),i===1)n.tag===0?Nv(Ym.bind(null,n)):Dp(Ym.bind(null,n)),Rv(function(){(rn&6)===0&&Vs()}),a=null;else{switch(li(c)){case 1:a=Ji;break;case 4:a=ur;break;case 16:a=A;break;case 536870912:a=pe;break;default:a=A}a=i0(a,$m.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $m(n,i){if(bc=-1,Tc=0,(rn&6)!==0)throw Error(t(327));var a=n.callbackNode;if(po()&&n.callbackNode!==a)return null;var c=Nt(n,n===ti?pi:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ac(n,c);else{i=c;var d=rn;rn|=2;var g=Zm();(ti!==n||pi!==i)&&(ys=null,ho=ln()+500,Ta(n,i));do try{Qv();break}catch(V){Km(n,V)}while(!0);fd(),yc.current=g,rn=d,Vn!==null?i=0:(ti=null,pi=0,i=jn)}if(i!==0){if(i===2&&(d=jt(n),d!==0&&(c=d,i=Yd(n,d))),i===1)throw a=dl,Ta(n,0),$s(n,c),Wi(n,ln()),a;if(i===6)$s(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Zv(d)&&(i=Ac(n,c),i===2&&(g=jt(n),g!==0&&(c=g,i=Yd(n,g))),i===1))throw a=dl,Ta(n,0),$s(n,c),Wi(n,ln()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Aa(n,Hi,ys);break;case 3:if($s(n,c),(c&130023424)===c&&(i=qd+500-ln(),10<i)){if(Nt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Di(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=td(Aa.bind(null,n,Hi,ys),i);break}Aa(n,Hi,ys);break;case 4:if($s(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var L=31-He(c);g=1<<L,L=i[L],L>d&&(d=L),c&=~g}if(c=d,c=ln()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kv(c/1960))-c,10<c){n.timeoutHandle=td(Aa.bind(null,n,Hi,ys),c);break}Aa(n,Hi,ys);break;case 5:Aa(n,Hi,ys);break;default:throw Error(t(329))}}}return Wi(n,ln()),n.callbackNode===a?$m.bind(null,n):null}function Yd(n,i){var a=fl;return n.current.memoizedState.isDehydrated&&(Ta(n,i).flags|=256),n=Ac(n,i),n!==2&&(i=Hi,Hi=a,i!==null&&Kd(i)),n}function Kd(n){Hi===null?Hi=n:Hi.push.apply(Hi,n)}function Zv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Cr(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $s(n,i){for(i&=~Xd,i&=~Sc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-He(i),c=1<<a;n[a]=-1,i&=~c}}function Ym(n){if((rn&6)!==0)throw Error(t(327));po();var i=Nt(n,0);if((i&1)===0)return Wi(n,ln()),null;var a=Ac(n,i);if(n.tag!==0&&a===2){var c=jt(n);c!==0&&(i=c,a=Yd(n,c))}if(a===1)throw a=dl,Ta(n,0),$s(n,i),Wi(n,ln()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Aa(n,Hi,ys),Wi(n,ln()),null}function Zd(n,i){var a=rn;rn|=1;try{return n(i)}finally{rn=a,rn===0&&(ho=ln()+500,ec&&Vs())}}function ba(n){qs!==null&&qs.tag===0&&(rn&6)===0&&po();var i=rn;rn|=1;var a=yr.transition,c=Mt;try{if(yr.transition=null,Mt=1,n)return n()}finally{Mt=c,yr.transition=a,rn=i,(rn&6)===0&&Vs()}}function Jd(){rr=fo.current,bn(fo)}function Ta(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Av(a)),Vn!==null)for(a=Vn.return;a!==null;){var c=a;switch(od(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Jl();break;case 3:lo(),bn(zi),bn(yi),yd();break;case 5:xd(c);break;case 4:lo();break;case 13:bn(Nn);break;case 19:bn(Nn);break;case 10:hd(c.type._context);break;case 22:case 23:Jd()}a=a.return}if(ti=n,Vn=n=Ys(n.current,null),pi=rr=i,jn=0,dl=null,Xd=Sc=wa=0,Hi=fl=null,Sa!==null){for(i=0;i<Sa.length;i++)if(a=Sa[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var L=g.next;g.next=d,c.next=L}a.pending=c}Sa=null}return n}function Km(n,i){do{var a=Vn;try{if(fd(),uc.current=pc,dc){for(var c=In.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}dc=!1}if(Ea=0,ei=qn=In=null,sl=!1,al=0,Wd.current=null,a===null||a.return===null){jn=1,dl=i,Vn=null;break}e:{var g=n,L=a.return,V=a,j=i;if(i=pi,V.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var _e=j,Le=V,ke=Le.tag;if((Le.mode&1)===0&&(ke===0||ke===11||ke===15)){var Ce=Le.alternate;Ce?(Le.updateQueue=Ce.updateQueue,Le.memoizedState=Ce.memoizedState,Le.lanes=Ce.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var rt=Sm(L);if(rt!==null){rt.flags&=-257,Mm(rt,L,V,g,i),rt.mode&1&&ym(g,_e,i),i=rt,j=_e;var ct=i.updateQueue;if(ct===null){var ut=new Set;ut.add(j),i.updateQueue=ut}else ct.add(j);break e}else{if((i&1)===0){ym(g,_e,i),Qd();break e}j=Error(t(426))}}else if(Cn&&V.mode&1){var Bn=Sm(L);if(Bn!==null){(Bn.flags&65536)===0&&(Bn.flags|=256),Mm(Bn,L,V,g,i),ud(co(j,V));break e}}g=j=co(j,V),jn!==4&&(jn=2),fl===null?fl=[g]:fl.push(g),g=L;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=xm(g,j,i);Xp(g,ue);break e;case 1:V=j;var J=g.type,me=g.stateNode;if((g.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||me!==null&&typeof me.componentDidCatch=="function"&&(Xs===null||!Xs.has(me)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ge=_m(g,V,i);Xp(g,Ge);break e}}g=g.return}while(g!==null)}Qm(a)}catch(dt){i=dt,Vn===a&&a!==null&&(Vn=a=a.return);continue}break}while(!0)}function Zm(){var n=yc.current;return yc.current=pc,n===null?pc:n}function Qd(){(jn===0||jn===3||jn===2)&&(jn=4),ti===null||(wa&268435455)===0&&(Sc&268435455)===0||$s(ti,pi)}function Ac(n,i){var a=rn;rn|=2;var c=Zm();(ti!==n||pi!==i)&&(ys=null,Ta(n,i));do try{Jv();break}catch(d){Km(n,d)}while(!0);if(fd(),rn=a,yc.current=c,Vn!==null)throw Error(t(261));return ti=null,pi=0,jn}function Jv(){for(;Vn!==null;)Jm(Vn)}function Qv(){for(;Vn!==null&&!ls();)Jm(Vn)}function Jm(n){var i=n0(n.alternate,n,rr);n.memoizedProps=n.pendingProps,i===null?Qm(n):Vn=i,Wd.current=null}function Qm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Xv(a,i,rr),a!==null){Vn=a;return}}else{if(a=qv(a,i),a!==null){a.flags&=32767,Vn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jn=6,Vn=null;return}}if(i=i.sibling,i!==null){Vn=i;return}Vn=i=n}while(i!==null);jn===0&&(jn=5)}function Aa(n,i,a){var c=Mt,d=yr.transition;try{yr.transition=null,Mt=1,ex(n,i,a,c)}finally{yr.transition=d,Mt=c}return null}function ex(n,i,a,c){do po();while(qs!==null);if((rn&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Pt(n,g),n===ti&&(Vn=ti=null,pi=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ec||(Ec=!0,i0(A,function(){return po(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=yr.transition,yr.transition=null;var L=Mt;Mt=1;var V=rn;rn|=4,Wd.current=null,$v(n,a),Hm(a,n),yv(Qu),Hr=!!Ju,Qu=Ju=null,n.current=a,Yv(a),cs(),rn=V,Mt=L,yr.transition=g}else n.current=a;if(Ec&&(Ec=!1,qs=n,wc=d),g=n.pendingLanes,g===0&&(Xs=null),Xe(a.stateNode),Wi(n,ln()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Mc)throw Mc=!1,n=jd,jd=null,n;return(wc&1)!==0&&n.tag!==0&&po(),g=n.pendingLanes,(g&1)!==0?n===$d?hl++:(hl=0,$d=n):hl=0,Vs(),null}function po(){if(qs!==null){var n=li(wc),i=yr.transition,a=Mt;try{if(yr.transition=null,Mt=16>n?16:n,qs===null)var c=!1;else{if(n=qs,qs=null,wc=0,(rn&6)!==0)throw Error(t(331));var d=rn;for(rn|=4,at=n.current;at!==null;){var g=at,L=g.child;if((at.flags&16)!==0){var V=g.deletions;if(V!==null){for(var j=0;j<V.length;j++){var _e=V[j];for(at=_e;at!==null;){var Le=at;switch(Le.tag){case 0:case 11:case 15:ul(8,Le,g)}var ke=Le.child;if(ke!==null)ke.return=Le,at=ke;else for(;at!==null;){Le=at;var Ce=Le.sibling,rt=Le.return;if(km(Le),Le===_e){at=null;break}if(Ce!==null){Ce.return=rt,at=Ce;break}at=rt}}}var ct=g.alternate;if(ct!==null){var ut=ct.child;if(ut!==null){ct.child=null;do{var Bn=ut.sibling;ut.sibling=null,ut=Bn}while(ut!==null)}}at=g}}if((g.subtreeFlags&2064)!==0&&L!==null)L.return=g,at=L;else e:for(;at!==null;){if(g=at,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ul(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,at=ue;break e}at=g.return}}var J=n.current;for(at=J;at!==null;){L=at;var me=L.child;if((L.subtreeFlags&2064)!==0&&me!==null)me.return=L,at=me;else e:for(L=J;at!==null;){if(V=at,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:_c(9,V)}}catch(dt){On(V,V.return,dt)}if(V===L){at=null;break e}var Ge=V.sibling;if(Ge!==null){Ge.return=V.return,at=Ge;break e}at=V.return}}if(rn=d,Vs(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{Mt=a,yr.transition=i}}return!1}function e0(n,i,a){i=co(a,i),i=xm(n,i,1),n=Hs(n,i,1),i=Di(),n!==null&&(cn(n,1,i),Wi(n,i))}function On(n,i,a){if(n.tag===3)e0(n,n,a);else for(;i!==null;){if(i.tag===3){e0(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Xs===null||!Xs.has(c))){n=co(a,n),n=_m(i,n,1),i=Hs(i,n,1),n=Di(),i!==null&&(cn(i,1,n),Wi(i,n));break}}i=i.return}}function tx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Di(),n.pingedLanes|=n.suspendedLanes&a,ti===n&&(pi&a)===a&&(jn===4||jn===3&&(pi&130023424)===pi&&500>ln()-qd?Ta(n,0):Xd|=a),Wi(n,i)}function t0(n,i){i===0&&((n.mode&1)===0?i=1:(i=St,St<<=1,(St&130023424)===0&&(St=4194304)));var a=Di();n=vs(n,i),n!==null&&(cn(n,i,a),Wi(n,a))}function nx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),t0(n,a)}function ix(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),t0(n,a)}var n0;n0=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||zi.current)Gi=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gi=!1,Wv(n,i,a);Gi=(n.flags&131072)!==0}else Gi=!1,Cn&&(i.flags&1048576)!==0&&Up(i,nc,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;vc(n,i),n=i.pendingProps;var d=to(i,yi.current);oo(i,a),d=Ed(null,i,c,n,d,a);var g=wd();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Vi(c)?(g=!0,Ql(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gd(i),d.updater=mc,i.stateNode=d,d._reactInternals=i,Pd(i,c,n,a),i=Dd(null,i,c,!0,g,a)):(i.tag=0,Cn&&g&&ad(i),Ii(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(vc(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=sx(c),n=Lr(c,n),d){case 0:i=Id(null,i,c,n,a);break e;case 1:i=Rm(null,i,c,n,a);break e;case 11:i=Em(null,i,c,n,a);break e;case 14:i=wm(null,i,c,Lr(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Lr(c,d),Id(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Lr(c,d),Rm(n,i,c,d,a);case 3:e:{if(Cm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Wp(n,i),lc(i,c,null,a);var L=i.memoizedState;if(c=L.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:L.cache,pendingSuspenseBoundaries:L.pendingSuspenseBoundaries,transitions:L.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=co(Error(t(423)),i),i=Pm(n,i,c,a,d);break e}else if(c!==d){d=co(Error(t(424)),i),i=Pm(n,i,c,a,d);break e}else for(ir=ks(i.stateNode.containerInfo.firstChild),nr=i,Cn=!0,Pr=null,a=Gp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ro(),c===d){i=_s(n,i,a);break e}Ii(n,i,c,a)}i=i.child}return i;case 5:return jp(i),n===null&&cd(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,L=d.children,ed(c,d)?L=null:g!==null&&ed(c,g)&&(i.flags|=32),Am(n,i),Ii(n,i,L,a),i.child;case 6:return n===null&&cd(i),null;case 13:return Lm(n,i,a);case 4:return vd(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=so(i,null,c,a):Ii(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Lr(c,d),Em(n,i,c,d,a);case 7:return Ii(n,i,i.pendingProps,a),i.child;case 8:return Ii(n,i,i.pendingProps.children,a),i.child;case 12:return Ii(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,L=d.value,xn(sc,c._currentValue),c._currentValue=L,g!==null)if(Cr(g.value,L)){if(g.children===d.children&&!zi.current){i=_s(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){L=g.child;for(var j=V.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=xs(-1,a&-a),j.tag=2;var _e=g.updateQueue;if(_e!==null){_e=_e.shared;var Le=_e.pending;Le===null?j.next=j:(j.next=Le.next,Le.next=j),_e.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),pd(g.return,a,i),V.lanes|=a;break}j=j.next}}else if(g.tag===10)L=g.type===i.type?null:g.child;else if(g.tag===18){if(L=g.return,L===null)throw Error(t(341));L.lanes|=a,V=L.alternate,V!==null&&(V.lanes|=a),pd(L,a,i),L=g.sibling}else L=g.child;if(L!==null)L.return=g;else for(L=g;L!==null;){if(L===i){L=null;break}if(g=L.sibling,g!==null){g.return=L.return,L=g;break}L=L.return}g=L}Ii(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,oo(i,a),d=xr(d),c=c(d),i.flags|=1,Ii(n,i,c,a),i.child;case 14:return c=i.type,d=Lr(c,i.pendingProps),d=Lr(c.type,d),wm(n,i,c,d,a);case 15:return bm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Lr(c,d),vc(n,i),i.tag=1,Vi(c)?(n=!0,Ql(i)):n=!1,oo(i,a),gm(i,c,d),Pd(i,c,d,a),Dd(null,i,c,!0,n,a);case 19:return Im(n,i,a);case 22:return Tm(n,i,a)}throw Error(t(156,i.tag))};function i0(n,i){return Zi(n,i)}function rx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(n,i,a,c){return new rx(n,i,a,c)}function ef(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sx(n){if(typeof n=="function")return ef(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===Z)return 14}return 2}function Ys(n,i){var a=n.alternate;return a===null?(a=Sr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Rc(n,i,a,c,d,g){var L=2;if(c=n,typeof n=="function")ef(n)&&(L=1);else if(typeof n=="string")L=5;else e:switch(n){case k:return Ra(a.children,d,g,i);case w:L=8,d|=8;break;case D:return n=Sr(12,a,i,d|2),n.elementType=D,n.lanes=g,n;case ee:return n=Sr(13,a,i,d),n.elementType=ee,n.lanes=g,n;case W:return n=Sr(19,a,i,d),n.elementType=W,n.lanes=g,n;case te:return Cc(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:L=10;break e;case G:L=9;break e;case Y:L=11;break e;case Z:L=14;break e;case fe:L=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Sr(L,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function Ra(n,i,a,c){return n=Sr(7,n,c,i),n.lanes=a,n}function Cc(n,i,a,c){return n=Sr(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function tf(n,i,a){return n=Sr(6,n,null,i),n.lanes=a,n}function nf(n,i,a){return i=Sr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ax(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ze(0),this.expirationTimes=Ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function rf(n,i,a,c,d,g,L,V,j){return n=new ax(n,i,a,V,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Sr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(g),n}function ox(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function r0(n){if(!n)return zs;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Vi(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Vi(a))return Np(n,a,i)}return i}function s0(n,i,a,c,d,g,L,V,j){return n=rf(a,c,!0,n,d,g,L,V,j),n.context=r0(null),a=n.current,c=Di(),d=js(a),g=xs(c,d),g.callback=i??null,Hs(a,g,d),n.current.lanes=d,cn(n,d,c),Wi(n,c),n}function Pc(n,i,a,c){var d=i.current,g=Di(),L=js(d);return a=r0(a),i.context===null?i.context=a:i.pendingContext=a,i=xs(g,L),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Hs(d,i,L),n!==null&&(Dr(n,d,L,g),oc(n,d,L)),L}function Lc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function a0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function sf(n,i){a0(n,i),(n=n.alternate)&&a0(n,i)}function lx(){return null}var o0=typeof reportError=="function"?reportError:function(n){console.error(n)};function af(n){this._internalRoot=n}Nc.prototype.render=af.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Pc(n,i,null,null)},Nc.prototype.unmount=af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ba(function(){Pc(null,n,null,null)}),i[hs]=null}};function Nc(n){this._internalRoot=n}Nc.prototype.unstable_scheduleHydration=function(n){if(n){var i=ci();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Pe.length&&i!==0&&i<Pe[a].priority;a++);Pe.splice(a,0,n),a===0&&Gr(n)}};function of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ic(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function l0(){}function cx(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var _e=Lc(L);g.call(_e)}}var L=s0(i,c,n,0,null,!1,!1,"",l0);return n._reactRootContainer=L,n[hs]=L.current,Zo(n.nodeType===8?n.parentNode:n),ba(),L}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var _e=Lc(j);V.call(_e)}}var j=rf(n,0,!1,null,null,!1,!1,"",l0);return n._reactRootContainer=j,n[hs]=j.current,Zo(n.nodeType===8?n.parentNode:n),ba(function(){Pc(i,j,a,c)}),j}function Dc(n,i,a,c,d){var g=a._reactRootContainer;if(g){var L=g;if(typeof d=="function"){var V=d;d=function(){var j=Lc(L);V.call(j)}}Pc(i,L,n,d)}else L=cx(a,i,n,d,c);return Lc(L)}vi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=$e(i.pendingLanes);a!==0&&(Un(i,a|1),Wi(i,ln()),(rn&6)===0&&(ho=ln()+500,Vs()))}break;case 13:ba(function(){var c=vs(n,1);if(c!==null){var d=Di();Dr(c,n,1,d)}}),sf(n,1)}},Vt=function(n){if(n.tag===13){var i=vs(n,134217728);if(i!==null){var a=Di();Dr(i,n,134217728,a)}sf(n,134217728)}},nn=function(n){if(n.tag===13){var i=js(n),a=vs(n,i);if(a!==null){var c=Di();Dr(a,n,i,c)}sf(n,i)}},ci=function(){return Mt},It=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},ot=function(n,i,a){switch(i){case"input":if(gt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Zl(c);if(!d)throw Error(t(90));ft(c),gt(c,d)}}}break;case"textarea":fn(n,a);break;case"select":i=a.value,i!=null&&yt(n,!!a.multiple,i,!1)}},ge=Zd,we=ba;var ux={usingClientEntryPoint:!1,Events:[el,Qa,Zl,ye,Ee,Zd]},pl={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:pl.bundleType,version:pl.version,rendererPackageName:pl.rendererPackageName,rendererConfig:pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_t(n),n===null?null:n.stateNode},findFiberByHostInstance:pl.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{ae=Uc.inject(dx),oe=Uc}catch{}}return Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux,Xi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(i))throw Error(t(200));return ox(n,i,null,a)},Xi.createRoot=function(n,i){if(!of(n))throw Error(t(299));var a=!1,c="",d=o0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=rf(n,1,!1,null,null,a,!1,c,d),n[hs]=i.current,Zo(n.nodeType===8?n.parentNode:n),new af(i)},Xi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_t(i),n=n===null?null:n.stateNode,n},Xi.flushSync=function(n){return ba(n)},Xi.hydrate=function(n,i,a){if(!Ic(i))throw Error(t(200));return Dc(null,n,i,!0,a)},Xi.hydrateRoot=function(n,i,a){if(!of(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",L=o0;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(L=a.onRecoverableError)),i=s0(i,null,n,1,a??null,d,!1,g,L),n[hs]=i.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Nc(i)},Xi.render=function(n,i,a){if(!Ic(i))throw Error(t(200));return Dc(null,n,i,!1,a)},Xi.unmountComponentAtNode=function(n){if(!Ic(n))throw Error(t(40));return n._reactRootContainer?(ba(function(){Dc(null,null,n,!1,function(){n._reactRootContainer=null,n[hs]=null})}),!0):!1},Xi.unstable_batchedUpdates=Zd,Xi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ic(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Dc(n,i,a,!1,c)},Xi.version="18.3.1-next-f1338f8080-20240426",Xi}var v0;function Ex(){if(v0)return uf.exports;v0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uf.exports=Mx(),uf.exports}var x0;function wx(){if(x0)return Oc;x0=1;var r=Ex();return Oc.createRoot=r.createRoot,Oc.hydrateRoot=r.hydrateRoot,Oc}var bx=wx();const No="no_mires_abajo_playstore_v3",hf=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function Tx(r){return r&&hf.find(t=>t.code===r||t.flag===r)||hf[0]}const Ts=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puente de la Mujer",en:"Obelisk & Puente de la Mujer"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"Río de Janeiro",en:"Rio de Janeiro"},monumentName:{es:"Cristo Redentor Iluminado",en:"Illuminated Christ the Redeemer"},weatherLabel:{es:"Brasa Nocturna Carioca",en:"Carioca Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#4ade80",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"cristo"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Estatua de la Libertad y Empire State",en:"Statue of Liberty & Empire State"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#38bdf8",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"liberty_empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"willis"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben y London Eye Giratorio",en:"Big Ben & Rotating London Eye"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel y Faro Giratorio",en:"Eiffel Tower & Rotating Beacon"},weatherLabel:{es:"Haces de Luz Ámbar/Dorado",en:"Amber/Gold Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"golden_embers",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"cuatrotorres"},{index:9,flag:"🇷🇺",name:{es:"Moscú",en:"Moscow"},monumentName:{es:"Cúpulas de San Basilio con Estrellas",en:"Saint Basil's Onion Domes"},weatherLabel:{es:"Ventisca Invernal Rusa",en:"Russian Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#f43f5e",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"stbasil"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Las Tres Grandes Pirámides de Giza",en:"Three Great Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#fde047",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"mahanakhon"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Velas de la Ópera de Sídney",en:"Sydney Opera House Sails"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Torre de Tokio y Arco Torii Luminoso",en:"Tokyo Tower & Luminous Torii Gate"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#ef4444",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],pf=[{id:"vip_dubai",index:20,flag:"🇦🇪",name:{es:"Dubái Sky-Bridge VIP",en:"Dubai Sky-Bridge VIP"},desc:{es:"Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.",en:"Crossing between the tallest towers in the world with golden storm & x3 payout."},weatherLabel:{es:"Tormenta de Oro 24K VIP",en:"24K Gold Storm VIP"},weatherArchetype:"golden_embers",accentColor:"#fde047",winColor:"#fef08a",windStrength:1.25,monument:"burjkhalifa",rewardMult:3,gemBonus:25,gemUnlockCost:350,usdPrice:"$1.99 USD"},{id:"vip_vegas",index:21,flag:"🇺🇸",name:{es:"Las Vegas Neon Strip VIP",en:"Las Vegas Neon Strip VIP"},desc:{es:"Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.",en:"Hyper-bright casino lights and triple x3 LP & Gems rewards."},weatherLabel:{es:"Lluvia de Neón y Fichas VIP",en:"Casino Neon Rain VIP"},weatherArchetype:"cyber_rain",accentColor:"#f43f5e",winColor:"#fde047",windStrength:1.32,monument:"vegas_strip",rewardMult:3,gemBonus:35,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_monaco",index:22,flag:"🇲🇨",name:{es:"Mónaco Casino Royal VIP",en:"Monaco Casino Royal VIP"},desc:{es:"Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.",en:"Gala night over Monte Carlo bay with triple coin payouts."},weatherLabel:{es:"Destellos Dorados de Gala",en:"Royal Golden Sparkles"},weatherArchetype:"golden_embers",accentColor:"#fbbf24",winColor:"#fef9c3",windStrength:1.18,monument:"monaco_casino",rewardMult:3,gemBonus:30,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_alps",index:23,flag:"🇨🇭",name:{es:"Alpes Suizos Nocturnos VIP",en:"Swiss Alps Nocturnal VIP"},desc:{es:"Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.",en:"Extreme crossing between high-mountain cable cars under the Aurora Borealis."},weatherLabel:{es:"Aurora Boreal y Ventisca Alpina",en:"Aurora Borealis & Alpine Gale"},weatherArchetype:"blizzard",accentColor:"#4ade80",winColor:"#a5f3fc",windStrength:1.45,monument:"swiss_alps",rewardMult:3.5,gemBonus:45,gemUnlockCost:450,usdPrice:"$2.99 USD"}],Fc=[{id:"pole_basic",icon:"🦯",name:{es:"Barra de Acero Urbano",en:"Urban Steel Pole"},badge:{es:"GRATIS • BASE 1.0x",en:"FREE • BASE 1.0x"},desc:{es:"Estabilidad base 1.0x con núcleo láser cian estándar.",en:"Base 1.0x stability with standard cyan laser core."},currency:"free",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:0,stepDamp:0,catchRadiusBonus:0,scoreMult:1,coinMult:1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1,coreHex:14742270,glowHex:62206,tipHex:62206,hasGyroRings:!1},{id:"pole_carbon",icon:"⚡",name:{es:"Barra de Fibra de Carbono",en:"Carbon Fiber Pole"},badge:{es:"-18% GRAVEDAD • +LARGO 3D",en:"-18% GRAVITY • +3D LENGTH"},desc:{es:"Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.",en:"Reduces tipping gravity by 18% and extends the 3D pole length."},currency:"coins",cost:14500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.18,stepDamp:.1,catchRadiusBonus:.05,scoreMult:1.1,coinMult:1.1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.22,coreHex:14482663,glowHex:2282478,tipHex:4906624,hasGyroRings:!1},{id:"pole_gyro",icon:"🌀",name:{es:"Barra Giroscópica Neón",en:"Neon Gyroscopic Pole"},badge:{es:"-32% INCLINACIÓN • -30% PISADA",en:"-32% TILT • -30% STEP SWAY"},desc:{es:"Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.",en:"Reduces tilt by 32% and dampens fast-step lateral impact by 30%."},currency:"coins",cost:48e3,gemCost:290,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.32,stepDamp:.3,catchRadiusBonus:.1,scoreMult:1.25,coinMult:1.25,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.34,coreHex:15984895,glowHex:11032055,tipHex:62206,hasGyroRings:!0},{id:"pole_quantum",icon:"👑",name:{es:"👑 Barra Láser Cuántica",en:"👑 Quantum Laser Pole"},badge:{es:"EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS",en:"PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS"},desc:{es:"Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.",en:"Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier."},currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,gravityReduction:.5,stepDamp:.4,catchRadiusBonus:.25,scoreMult:1.5,coinMult:1.5,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.45,coreHex:16770278,glowHex:16007006,tipHex:62206,hasGyroRings:!0},{id:"pole_imperial",icon:"👑",name:{es:"👑 Barra Gravitatoria Imperial",en:"👑 Imperial Graviton Pole"},badge:{es:"PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0",en:"VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0"},desc:{es:"Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.",en:"Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier."},currency:"vip_or_usd",cost:900,gemCost:900,usdPrice:"$3.99 USD",isPro:!0,isVipOnly:!0,gravityReduction:.65,stepDamp:.55,catchRadiusBonus:.3,scoreMult:2,coinMult:2,noCatchRecoil:!0,autoSaveFall:!0,poleScaleX:1.56,coreHex:16710083,glowHex:16638023,tipHex:16096779,hasGyroRings:!0}],As={urbano:{id:"urbano",key:"urbano",legacyId:"skin_1",styleType:"urbano",icon:"🧥",currency:"coins",price:0,cost:0,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1,bonusMult:1,multLabel:"x1",windResist:0,windReduction:0,gravityMod:1,gravityReduction:0,catchBonus:1,catchWindowBonus:0,recoveryBonus:0,stepDampBonus:0,freeShields:0,accessory:"capucha_urbana",torsoColor:"#1e293b",torsoEmissive:"#0b1829",torsoEmissiveIntensity:.35,limbsColor:"#0f172a",limbsEmissive:"#070d19",limbsEmissiveIntensity:.25,neonStripColor:"#38bdf8",emissiveIntensity:1.35,shoesColor:"#334155",soleColor:"#38bdf8",glovesColor:"#334155",wristColor:"#38bdf8",headColor:"#1e293b",headbandColor:"#38bdf8",ribbonColor:"#38bdf8",metalness:.35,roughness:.55,jacketHex:1976635,jacketEmissiveHex:727081,pantsHex:988970,bootHex:3359061,soleHex:3718648,gloveHex:3359061,wristHex:3718648,headHex:1976635,headbandHex:3718648,ribbonHex:3718648,dorsalHex:3718648,rimHex:3718648,rimStrength:1.15,hoodieColor:"#1e293b",pantsColor:"#0f172a",trimColor:"#38bdf8",shoeColor:"#334155",glowColor:"#38bdf8",paletteSwatches:["#1e293b","#0f172a","#38bdf8","#334155"],paletteLabel:{es:"Grafito + Cian Urbano",en:"Graphite + Urban Cyan"},goldTrail:!1,badge:{es:"GRATIS POR DEFECTO • MULTI x1",en:"FREE DEFAULT • x1 MULTI"},name:{es:"Urbano Callejero (x1)",en:"Street Urban (x1)"},desc:{es:"Traje gris grafito (#1e293b), pantalón cargo negro (#0f172a), líneas dorsales cian suave (#38bdf8), botas oscuras y capucha urbana.",en:"Graphite grey suit (#1e293b), black cargo pants (#0f172a), soft cyan dorsal lines (#38bdf8), dark boots and urban hood."}},night_runner:{id:"night_runner",key:"night_runner",legacyId:"skin_2",styleType:"night_runner",icon:"🏃",currency:"coins",price:8500,cost:8500,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1.2,bonusMult:1.2,multLabel:"x1.2",windResist:.1,windReduction:.1,gravityMod:.92,gravityReduction:.08,catchBonus:1.05,catchWindowBonus:.05,recoveryBonus:.1,stepDampBonus:.08,freeShields:0,accessory:"tiras_reflectivas_blancas",torsoColor:"#090d16",torsoEmissive:"#1e293b",torsoEmissiveIntensity:.45,limbsColor:"#090d16",limbsEmissive:"#111827",limbsEmissiveIntensity:.35,neonStripColor:"#ffffff",emissiveIntensity:2.2,shoesColor:"#a3e635",soleColor:"#ffffff",glovesColor:"#111827",wristColor:"#ffffff",headColor:"#090d16",headbandColor:"#ffffff",ribbonColor:"#ffffff",metalness:.45,roughness:.35,jacketHex:593174,jacketEmissiveHex:1976635,pantsHex:593174,bootHex:10741301,soleHex:16777215,gloveHex:1120295,wristHex:16777215,headHex:593174,headbandHex:16777215,ribbonHex:16777215,dorsalHex:16777215,rimHex:10741301,rimStrength:1.45,hoodieColor:"#090d16",pantsColor:"#090d16",trimColor:"#ffffff",shoeColor:"#a3e635",glowColor:"#a3e635",paletteSwatches:["#090d16","#ffffff","#a3e635"],paletteLabel:{es:"Reflectivo Blanco + Lima Flúor",en:"Reflective White + Fluor Lime"},goldTrail:!1,badge:{es:"MULTI x1.2 • -10% VIENTO • -8% GRAVEDAD • +5% CAPTURA",en:"x1.2 MULTI • -10% WIND • -8% GRAVITY • +5% CATCH"},name:{es:"Night Runner (x1.2)",en:"Night Runner (x1.2)"},desc:{es:"Rompevientos negro azabache (#090d16), tiras reflectivas blancas puras ultra-brillantes (#ffffff) en espalda, brazos y piernas, zapatillas verde lima flúor (#a3e635) y vincha blanca.",en:"Jet-black windbreaker (#090d16), ultra-bright white reflective strips (#ffffff) on back, arms & legs, fluor lime sneakers (#a3e635) and white headband."}},infiltrado:{id:"infiltrado",key:"infiltrado",legacyId:"skin_3",styleType:"infiltrado",icon:"⚡",currency:"coins",price:25e3,cost:25e3,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1.5,bonusMult:1.5,multLabel:"x1.5",windResist:.2,windReduction:.2,gravityMod:.88,gravityReduction:.12,catchBonus:1.1,catchWindowBonus:.1,recoveryBonus:.12,stepDampBonus:.15,freeShields:0,accessory:"arnes_x_tactico_cian",torsoColor:"#05070b",torsoEmissive:"#003554",torsoEmissiveIntensity:.65,limbsColor:"#05070b",limbsEmissive:"#00243d",limbsEmissiveIntensity:.5,neonStripColor:"#00f2fe",emissiveIntensity:2.5,shoesColor:"#081426",soleColor:"#00f2fe",glovesColor:"#081426",wristColor:"#00f2fe",headColor:"#05070b",headbandColor:"#00f2fe",ribbonColor:"#00f2fe",metalness:.6,roughness:.3,jacketHex:329483,jacketEmissiveHex:13652,pantsHex:329483,bootHex:529446,soleHex:62206,gloveHex:529446,wristHex:62206,headHex:329483,headbandHex:62206,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.6,hoodieColor:"#05070b",pantsColor:"#05070b",trimColor:"#00f2fe",shoeColor:"#00f2fe",glowColor:"#00f2fe",paletteSwatches:["#05070b","#00f2fe","#0284c7"],paletteLabel:{es:"Arnés Táctico X + Neón Cian",en:"Tactical X-Harness + Cyan Neon"},goldTrail:!1,badge:{es:"MULTI x1.5 • -20% VIENTO • -12% GRAVEDAD • +10% CAPTURA",en:"x1.5 MULTI • -20% WIND • -12% GRAVITY • +10% CATCH"},name:{es:"Infiltrado Táctico (x1.5)",en:"Tactical Infiltrator (x1.5)"},desc:{es:"Traje táctico negro mate (#05070b), arnés cruzado en X en la espalda de neón cian intenso (#00f2fe), hombreras tácticas, visor nocturno cian y talones/muñecas cian luminosos.",en:"Matte black tactical suit (#05070b), intense cyan neon X-harness (#00f2fe) on the back, tactical shoulder pads, cyan night visor and glowing cyan heels/wrists."}},ilusionista:{id:"ilusionista",key:"ilusionista",legacyId:"skin_4",styleType:"ilusionista",icon:"🎩",currency:"coins",price:6e4,cost:6e4,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:2,bonusMult:2,multLabel:"x2",windResist:.25,windReduction:.25,gravityMod:.85,gravityReduction:.15,catchBonus:1.25,catchWindowBonus:.25,recoveryBonus:.15,stepDampBonus:.2,freeShields:0,accessory:"chaleco_purpura_guantes_plata",torsoColor:"#2e1065",torsoEmissive:"#581c87",torsoEmissiveIntensity:.85,limbsColor:"#1e0a45",limbsEmissive:"#3b0764",limbsEmissiveIntensity:.65,neonStripColor:"#c084fc",emissiveIntensity:2.4,shoesColor:"#2e1065",soleColor:"#c084fc",glovesColor:"#f8fafc",wristColor:"#f8fafc",headColor:"#2e1065",headbandColor:"#f8fafc",ribbonColor:"#c084fc",metalness:.55,roughness:.28,jacketHex:3018853,jacketEmissiveHex:5774471,pantsHex:1968709,bootHex:3018853,soleHex:12616956,gloveHex:16317180,wristHex:16317180,headHex:3018853,headbandHex:16317180,ribbonHex:12616956,dorsalHex:12616956,rimHex:12616956,rimStrength:1.65,hoodieColor:"#2e1065",pantsColor:"#1e0a45",trimColor:"#c084fc",shoeColor:"#c084fc",glowColor:"#c084fc",paletteSwatches:["#2e1065","#c084fc","#f8fafc","#a855f7"],paletteLabel:{es:"Púrpura Imperial + Guantes Plata",en:"Imperial Purple + Silver Gloves"},goldTrail:!1,badge:{es:"MULTI x2.0 • -25% VIENTO • -15% GRAVEDAD • +25% CAPTURA",en:"x2.0 MULTI • -25% WIND • -15% GRAVITY • +25% CATCH"},name:{es:"Ilusionista de Altura (x2)",en:"High-Wire Illusionist (x2)"},desc:{es:"Chaleco sastrero púrpura imperial oscuro (#2e1065), líneas y circuito dorsal en violeta neón (#c084fc) y plata (#f8fafc), cinta larga violeta al viento y guantes blancos/plateados brillantes en las manos.",en:"Dark imperial purple tailored vest (#2e1065), neon violet (#c084fc) & silver (#f8fafc) dorsal circuit, long violet wind ribbon and bright silver/white gloves."}},shinobi:{id:"shinobi",key:"shinobi",legacyId:"skin_5",styleType:"shinobi",icon:"🥷",currency:"coins",price:135e3,cost:135e3,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:3,bonusMult:3,multLabel:"x3",windResist:.35,windReduction:.35,gravityMod:.65,gravityReduction:.35,catchBonus:1.3,catchWindowBonus:.3,recoveryBonus:.2,stepDampBonus:.35,freeShields:0,accessory:"single_katana_3d",torsoColor:"#18060c",torsoEmissive:"#4c0519",torsoEmissiveIntensity:.85,limbsColor:"#120409",limbsEmissive:"#3b0413",limbsEmissiveIntensity:.65,neonStripColor:"#ff0055",emissiveIntensity:2.8,shoesColor:"#ef4444",soleColor:"#ff0055",glovesColor:"#1f0810",wristColor:"#ff0055",headColor:"#18060c",headbandColor:"#ff0055",ribbonColor:"#ff0055",metalness:.65,roughness:.25,jacketHex:1574412,jacketEmissiveHex:4982041,pantsHex:1180681,bootHex:15680580,soleHex:16711765,gloveHex:2033680,wristHex:16711765,headHex:1574412,headbandHex:16711765,ribbonHex:16711765,dorsalHex:16711765,rimHex:16711765,rimStrength:1.75,hoodieColor:"#18060c",pantsColor:"#120409",trimColor:"#ff0055",shoeColor:"#ef4444",glowColor:"#ff0055",paletteSwatches:["#18060c","#ff0055","#ef4444","#fbbf24"],paletteLabel:{es:"Carmesí Cyber + 1 Katana 3D",en:"Cyber Crimson + 1 Back Katana 3D"},goldTrail:!1,badge:{es:"MULTI x3.0 • -35% VIENTO • -35% GRAVEDAD • +30% CAPTURA",en:"x3.0 MULTI • -35% WIND • -35% GRAVITY • +30% CATCH"},name:{es:"Cyber-Shinobi Tokio (x3)",en:"Cyber-Shinobi Tokyo (x3)"},desc:{es:"Armadura ninja negra/carmesí (#18060c), circuito dorsal rojo láser incandescente (#ff0055), 1 Katana 3D cruzada en la espalda con vaina negra y empuñadura roja, bufanda roja larga al viento y botas magnéticas rojas (#ef4444).",en:"Black/crimson ninja armor (#18060c), glowing laser-red dorsal circuit (#ff0055), 1 3D Katana crossed on the back with black scabbard & red hilt, long red scarf and red magnetic boots (#ef4444)."}},ronin_gold:{id:"ronin_gold",key:"ronin_gold",legacyId:"skin_6",styleType:"ronin_gold",icon:"⚔️",currency:"usd",price:450,cost:450,gemCost:450,priceUSD:"$1.99 USD",usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,proTag:{es:"👑 EXCLUSIVO PRO",en:"👑 PRO EXCLUSIVE"},mult:4,bonusMult:4,multLabel:"x4",windResist:.5,windReduction:.5,gravityMod:.6,gravityReduction:.4,catchBonus:1.35,catchWindowBonus:.35,recoveryBonus:.25,stepDampBonus:.4,freeShields:0,accessory:"dual_gold_katanas_samurai_shoulders",torsoColor:"#0c0a09",torsoEmissive:"#78350f",torsoEmissiveIntensity:.9,limbsColor:"#0c0a09",limbsEmissive:"#451a03",limbsEmissiveIntensity:.7,neonStripColor:"#f59e0b",emissiveIntensity:2.6,shoesColor:"#f59e0b",soleColor:"#fef08a",glovesColor:"#1c1917",wristColor:"#f59e0b",headColor:"#0c0a09",headbandColor:"#f59e0b",ribbonColor:"#fbbf24",metalness:.82,roughness:.2,jacketHex:789001,jacketEmissiveHex:7877903,pantsHex:789001,bootHex:16096779,soleHex:16707722,gloveHex:1841431,wristHex:16096779,headHex:789001,headbandHex:16096779,ribbonHex:16498468,dorsalHex:16096779,rimHex:16096779,rimStrength:1.85,hoodieColor:"#0c0a09",pantsColor:"#0c0a09",trimColor:"#f59e0b",shoeColor:"#f59e0b",glowColor:"#f59e0b",paletteSwatches:["#0c0a09","#f59e0b","#fbbf24","#fef08a"],paletteLabel:{es:"Laca Negra + 2 Katanas Oro",en:"Black Lacquer + Dual Gold Katanas"},goldTrail:!1,badge:{es:"👑 EXCLUSIVO PRO • MULTI x4 • -50% VIENTO • -40% GRAVEDAD • +35% CAPTURA",en:"👑 PRO EXCLUSIVE • x4 MULTI • -50% WIND • -40% GRAVITY • +35% CATCH"},name:{es:"👑 Ronin Imperial Dorado (x4)",en:"👑 Golden Imperial Ronin (x4)"},desc:{es:"Armadura samurái negra laqueada (#0c0a09) con placas y bordes de oro radiante (#f59e0b), hombreras samurái 3D doradas, 2 Katanas Doradas cruzadas en X en la espalda y botas doradas.",en:"Black lacquered samurai armor (#0c0a09) with radiant gold plates (#f59e0b), 3D golden samurai shoulder armor, 2 Golden Katanas crossed in X on the back and golden boots."}},quantum_specter:{id:"quantum_specter",key:"quantum_specter",legacyId:"skin_7",styleType:"quantum_specter",icon:"🌌",currency:"usd",price:680,cost:680,gemCost:680,priceUSD:"$2.99 USD",usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!1,proTag:{es:"👑 EXCLUSIVO PRO",en:"👑 PRO EXCLUSIVE"},mult:5,bonusMult:5,multLabel:"x5",windResist:.6,windReduction:.6,gravityMod:.55,gravityReduction:.45,catchBonus:1.5,catchWindowBonus:.5,recoveryBonus:.3,stepDampBonus:.45,freeShields:0,accessory:"quantum_halo_3d",torsoColor:"#0284c7",torsoEmissive:"#00f2fe",torsoEmissiveIntensity:1.35,limbsColor:"#0369a1",limbsEmissive:"#00f2fe",limbsEmissiveIntensity:1.15,neonStripColor:"#00f2fe",emissiveIntensity:3.2,shoesColor:"#00f2fe",soleColor:"#ffffff",glovesColor:"#00f2fe",wristColor:"#ffffff",headColor:"#0284c7",headbandColor:"#ffffff",ribbonColor:"#00f2fe",metalness:.78,roughness:.16,jacketHex:165063,jacketEmissiveHex:62206,pantsHex:223649,bootHex:62206,soleHex:16777215,gloveHex:62206,wristHex:16777215,headHex:165063,headbandHex:16777215,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.95,hoodieColor:"#0284c7",pantsColor:"#0369a1",trimColor:"#00f2fe",shoeColor:"#00f2fe",glowColor:"#00f2fe",paletteSwatches:["#0284c7","#00f2fe","#38bdf8","#ffffff"],paletteLabel:{es:"Plasma Cian + Halo Holográfico 3D",en:"Cyan Plasma + 3D Holographic Halo"},goldTrail:!1,badge:{es:"👑 EXCLUSIVO PRO • MULTI x5 • -60% VIENTO • IMÁN MALABARES (+50% ARO)",en:"👑 PRO EXCLUSIVE • x5 MULTI • -60% WIND • JUGGLE MAGNET (+50% RING)"},name:{es:"👑 Espectro Cuántico (x5)",en:"👑 Quantum Specter (x5)"},desc:{es:"Cuerpo cibernético translúcido de energía azul eléctrica (#0284c7) y plasma cian incandescente (#00f2fe), anillo/halo holográfico 3D flotando detrás de la espalda, manos y pies de plasma puro.",en:"Translucent cybernetic body of electric blue energy (#0284c7) & incandescent cyan plasma (#00f2fe), 3D holographic halo floating behind the back, pure plasma hands and feet."}},immortal_legend:{id:"immortal_legend",key:"immortal_legend",legacyId:"skin_8",styleType:"immortal_legend",icon:"👑",currency:"usd",price:1100,cost:1100,gemCost:1100,priceUSD:"$4.99 USD",usdPrice:"$4.99 USD",isPro:!0,isVipOnly:!0,proTag:{es:"👑 EXCLUSIVO PRO / VIP",en:"👑 PRO / VIP EXCLUSIVE"},mult:8,bonusMult:8,multLabel:"x8",windResist:.7,windReduction:.7,gravityMod:.45,gravityReduction:.55,catchBonus:1.6,catchWindowBonus:.6,recoveryBonus:.4,stepDampBonus:.55,freeShields:1,accessory:"immortal_crown_3d_gold_trail",torsoColor:"#fbbf24",torsoEmissive:"#f59e0b",torsoEmissiveIntensity:1.45,limbsColor:"#fbbf24",limbsEmissive:"#d97706",limbsEmissiveIntensity:1.25,neonStripColor:"#fef08a",emissiveIntensity:3.4,shoesColor:"#fef08a",soleColor:"#ffffff",glovesColor:"#fef08a",wristColor:"#ffffff",headColor:"#fbbf24",headbandColor:"#fef08a",ribbonColor:"#fef08a",metalness:.95,roughness:.15,jacketHex:16498468,jacketEmissiveHex:16096779,pantsHex:16498468,bootHex:16707722,soleHex:16777215,gloveHex:16707722,wristHex:16777215,headHex:16498468,headbandHex:16707722,ribbonHex:16707722,dorsalHex:16707722,rimHex:16707722,rimStrength:2.1,hoodieColor:"#fbbf24",pantsColor:"#f59e0b",trimColor:"#fef08a",shoeColor:"#fef08a",glowColor:"#fde047",paletteSwatches:["#fbbf24","#fef08a","#f59e0b","#ffffff"],paletteLabel:{es:"Oro Líquido 24K + Corona Solar 3D",en:"24K Liquid Gold + 3D Solar Crown"},goldTrail:!0,badge:{es:"👑 EXCLUSIVO PRO / VIP • MULTI x8 • -70% VIENTO • -55% GRAVEDAD • +1 ESCUDO GRATIS",en:"👑 PRO / VIP EXCLUSIVE • x8 MULTI • -70% WIND • -55% GRAVITY • +1 FREE SHIELD"},name:{es:"👑 Leyenda Dorada Inmortal (x8)",en:"👑 Immortal Golden Legend (x8)"},desc:{es:"Cuerpo entero bañado en oro líquido metálico brillante (#fbbf24 / #fef08a), corona/halo solar 3D sobre la cabeza, hombreras imperiales, cinta de fuego dorado, estela continua de partículas de oro y 1 Escudo Anti-Caída gratis por nivel.",en:"Full body bathed in radiant metallic liquid gold (#fbbf24 / #fef08a), 3D solar crown/halo above the head, imperial shoulders, golden fire ribbon, continuous gold particle trail & 1 free Anti-Fall Shield per level."}}},Rg={default:"urbano",urbano:"urbano",skin_1:"urbano",night_runner:"night_runner",skin_2:"night_runner",infiltrado:"infiltrado",skin_3:"infiltrado",ilusionista:"ilusionista",skin_4:"ilusionista",shinobi:"shinobi",skin_5:"shinobi",ronin_gold:"ronin_gold",skin_6:"ronin_gold",quantum_specter:"quantum_specter",skin_7:"quantum_specter",samurai:"ronin_gold",leyenda_dorada:"immortal_legend",immortal_legend:"immortal_legend",skin_8:"immortal_legend"};function ia(r){if(!r||typeof r!="string")return"urbano";const e=Rg[r]||r;return As[e]?e:"urbano"}const Oi=r=>{const e=typeof r=="string"?Rg[r]||r:"urbano",t=As[e]||As[r]||Object.values(As).find(s=>s.id===r||s.legacyId===r)||As.urbano||Object.values(As)[0];return t?{...t,visual:t}:{id:"urbano",key:"urbano",mult:1,bonusMult:1}};function Ax(r){return Oi(r)}const _0=Object.values(As).map(r=>({...r,visual:r}));function gl(r){return Oi(r)}const kc=[{id:"mult_x2_coins",icon:"🪙",name:{es:"Multiplicador x2 de Monedas",en:"x2 Permanent Coin Multiplier"},badge:{es:"MONEDAS DEL JUEGO • x2 🪙",en:"IN-GAME COINS • x2 🪙"},desc:{es:"Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.",en:"Permanently doubles all coins earned from juggling and clearing rooftops."},currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,coinMult:2,lpMult:1},{id:"mult_x3_pro",icon:"👑",name:{es:"👑 Multiplicador x3 Pro de LP y Monedas",en:"👑 x3 Pro LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙",en:"PRO / VIP PASS • x3 LP & 🪙"},desc:{es:"Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.",en:"Permanently triples your League Points (LP) for the Online Leaderboard and your Coins."},currency:"vip_or_usd",cost:600,gemCost:600,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!0,coinMult:3,lpMult:3},{id:"mult_x5_ultra",icon:"🚀",name:{es:"👑 Multiplicador x5 Ultra de LP y Monedas",en:"👑 x5 Ultra LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PACK PRO • x5 LP Y 🪙",en:"PRO PACK EXCLUSIVE • x5 LP & 🪙"},desc:{es:"Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.",en:"Maximum x5 boost to Online League Points and Coins across all cities and levels."},currency:"gems_or_usd",cost:1200,gemCost:1200,usdPrice:"$5.99 USD",isPro:!0,isVipOnly:!1,coinMult:5,lpMult:5}],Rl=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,currency:"coins",cost:0,gemCost:0,name:{es:"Esferas Incandescentes",en:"Incandescent Orbs"},color:"#fde047"},{id:"torches",icon:"🔥",mult:2,unlockLevel:6,currency:"coins",cost:18500,gemCost:160,name:{es:"Antorchas de Plasma (x2)",en:"Plasma Torches (x2)"},color:"#f97316"},{id:"knives",icon:"🔪",mult:3,unlockLevel:16,currency:"coins",cost:42e3,gemCost:280,name:{es:"Dagas Láser Cian (x3)",en:"Cyan Laser Daggers (x3)"},color:"#00f2fe"},{id:"chainsaws",icon:"🪚",mult:5,unlockLevel:31,currency:"gems",cost:480,gemCost:480,name:{es:"👑 Sierras Neón Pro (x5)",en:"👑 Pro Neon Saws (x5)"},color:"#ef4444"},{id:"goldbars",icon:"🪙",mult:8,unlockLevel:60,currency:"gems",cost:950,gemCost:950,name:{es:"👑 Orbes Cuánticos 24K (x8)",en:"👑 24K Quantum Orbs (x8)"},color:"#fde047"}],Rx=[{id:"pole",icon:"⚖️",maxLevel:10,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Núcleo de Inercia",en:"Inertia Core"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"boots",icon:"🥾",maxLevel:10,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"gloves",icon:"🧤",maxLevel:10,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}}];function y0(r){const e=Math.max(0,Math.min(10,r||0));if(e>=10)return{isMax:!0,isProTier:!0,coinCost:0,gemCost:0};if(e<5)return{isMax:!1,isProTier:!1,coinCost:Math.round(850*Math.pow(2.45,e)),gemCost:0};const t=e-5;return{isMax:!1,isProTier:!0,coinCost:0,gemCost:Math.round(140*Math.pow(1.45,t))}}const Cx=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],Px=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],Lx=[{id:"bundle_vip_pass",icon:"👑",isVipPassBundle:!0,gems:1500,coins:5e4,leaguePts:1500,popular:!0,tag:"👑 ACTIVAR VIP ($4.99)",name:{es:"👑 PASE VIP PRO TEMPORADA",en:"👑 SEASON VIP PRO PASS"},perks:{es:["🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería","👑 Desbloquea las 4 Ciudades Exclusivas VIP","🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)","🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)","+1.500 💎 Gemas y +50.000 🪙 Monedas al instante"],en:["🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10","👑 Unlocks all 4 Exclusive VIP Cities","🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)","🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)","+1,500 💎 Gems & +50,000 🪙 Coins instantly"]}},{id:"bundle_starter",icon:"⚡",gems:450,coins:18e3,leaguePts:300,popular:!1,tag:"💎 PACK PRO ($1.99)",name:{es:"Cofre Cuántico de Gemas",en:"Quantum Gem Chest"},perks:{es:["+450 💎 Gemas Premium + 18.000 🪙 Monedas","Ideal para Barra Láser Cuántica o Mejoras Nv. 6+"],en:["+450 💎 Premium Gems + 18,000 🪙 Coins","Ideal for Quantum Laser Pole or Lvl 6+ Upgrades"]}},{id:"bundle_legend",icon:"🚀",gems:1400,coins:85e3,leaguePts:2500,popular:!0,tag:"👑 PACK ULTRA ($5.99)",name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+1.400 💎 Gemas + 85.000 🪙 Monedas","Alcanza para Multiplicador x5 Ultra + Samurái Neón"],en:["+1,400 💎 Gems + 85,000 🪙 Coins","Enough for x5 Ultra Multiplier + Neon Samurai"]}}],S0={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",subtitle:"Campeonato Mundial de Equilibrio 3D",officialEdition:"🏆 EDICIÓN CAMPEONATO MUNDIAL 3D",worldTour:"TOUR MUNDIAL",city:"CIUDAD",bestScore:"MEJOR PUNTAJE",playNow:"SALTAR AL CABLE",freeCoinsAd:"+1.500 🪙 GRATIS",freeGemsAd:"+35 💎 GRATIS",equipped:"EQUIPADO",equip:"EQUIPAR",maxLevel:"MÁX (10/10)",propsTitle:"OBJETOS DE MALABARES",skinsTitle:"VESTUARIO Y ASPECTOS 3D",polesTitle:"⚖️ VARAS DE EQUILIBRIO 3D",seasonTitle:"TEMPORADA OFICIAL",leagueTitle:"RANKING MUNDIAL EN VIVO",seasonPrizes:"PREMIOS DE TEMPORADA",claimed:"RECLAMADO",claim:"RECLAMAR",storeTitle:"TIENDA VIP & COFRES PRO",storeSubtitle:"Desbloqueá el Pase VIP Pro, Multiplicadores Permanentes y Gemas al instante.",multipliersTitle:"🚀 MULTIPLICADORES PERMANENTES",pause:"PARTIDA EN PAUSA",resume:"REANUDAR PARTIDA",backToMenu:"VOLVER AL MENÚ",victoryTitle:"🏆 ¡AZOTEA ALCANZADA!",score:"Puntaje Final",coinsEarned:"Monedas Ganadas",leaguePointsEarned:"Puntos de Liga (LP)",doubleRewardsAd:"🎬 DUPLICAR RECOMPENSAS x2",fallTitle:"💥 ¡PERDISTE EL EQUILIBRIO!",fallSub:"El viento de altura te venció a pocos metros de la meta.",reviveAd:"⚡ SEGUNDA OPORTUNIDAD (CONTINUAR AQUÍ)",retry:"REINTENTAR NIVEL",adWatching:"CARGANDO BONIFICACIÓN VIP...",adSeconds:"Acreditando recompensa en",adCollect:"✅ ACREDITAR BONIFICACIÓN",leanLeft:"INCLINAR IZQ",leanRight:"INCLINAR DER",leftHand:"MANO IZQ",rightHand:"MANO DER",tabs:{home:"Inicio",armory:"Armería",skins:"Aspectos",league:"Liga",store:"Tienda"},installApp:"📲 Instalar",leagueBanner:"LIGA DE TEMPORADA",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Tienda VIP",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",skinsBtn:"Aspectos",level:"Nivel",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",shieldSavedPopup:"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",levelCleared:"¡AZOTEA ALCANZADA!",nextLevel:"SIGUIENTE NIVEL",armoryTitle:"ARMERÍA PRO, BARRAS Y MULTIPLICADORES",armorySub:"Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",proUpgradeBtn:"👑 MEJORA PRO — GEMAS / PASE VIP",polesSectionTitle:"⚖️ VARAS DE EQUILIBRIO (BARRAS)",multipliersSectionTitle:"🚀 MULTIPLICADORES PERMANENTES",vipCitiesTitle:"👑 CIUDADES EXCLUSIVAS VIP",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.",shopTitle:"👑 TIENDA PRO & PASE VIP DE TEMPORADA",shopSub:"Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",subtitle:"3D World Tightrope Championship",officialEdition:"🏆 3D WORLD CHAMPIONSHIP EDITION",worldTour:"WORLD TOUR",city:"CITY",bestScore:"BEST SCORE",playNow:"STEP ON THE WIRE",freeCoinsAd:"+1,500 🪙 FREE",freeGemsAd:"+35 💎 FREE",equipped:"EQUIPPED",equip:"EQUIP",maxLevel:"MAX (10/10)",propsTitle:"JUGGLING PROPS",skinsTitle:"3D OUTFITS & SKINS",polesTitle:"⚖️ 3D BALANCE POLES",seasonTitle:"OFFICIAL SEASON",leagueTitle:"LIVE WORLD LEADERBOARD",seasonPrizes:"SEASON REWARDS",claimed:"CLAIMED",claim:"CLAIM",storeTitle:"VIP STORE & PRO CHESTS",storeSubtitle:"Unlock the VIP Pro Pass, Permanent Multipliers & Gems instantly.",multipliersTitle:"🚀 PERMANENT MULTIPLIERS",pause:"GAME PAUSED",resume:"RESUME GAME",backToMenu:"BACK TO MENU",victoryTitle:"🏆 ROOFTOP REACHED!",score:"Final Score",coinsEarned:"Coins Earned",leaguePointsEarned:"League Points (LP)",doubleRewardsAd:"🎬 DOUBLE REWARDS x2",fallTitle:"💥 LOST YOUR BALANCE!",fallSub:"High-altitude gusts knocked you off just meters from the goal.",reviveAd:"⚡ SECOND CHANCE (CONTINUE HERE)",retry:"RETRY LEVEL",adWatching:"LOADING VIP BONUS...",adSeconds:"Crediting reward in",adCollect:"✅ COLLECT REWARD",leanLeft:"LEAN LEFT",leanRight:"LEAN RIGHT",leftHand:"LEFT HAND",rightHand:"RIGHT HAND",tabs:{home:"Home",armory:"Armory",skins:"Skins",league:"League",store:"Shop"},installApp:"📲 Install",leagueBanner:"SEASON LEAGUE",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"VIP Shop",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",skinsBtn:"Skins",level:"Level",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",shieldSavedPopup:"🛡️ ANTI-FALL SHIELD ACTIVATED!",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",levelCleared:"ROOFTOP REACHED!",nextLevel:"NEXT LEVEL",armoryTitle:"PRO ARMORY, POLES & MULTIPLIERS",armorySub:"Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",proUpgradeBtn:"👑 PRO UPGRADE — GEMS / VIP PASS",polesSectionTitle:"⚖️ BALANCE POLES (BARS)",multipliersSectionTitle:"🚀 PERMANENT MULTIPLIERS",vipCitiesTitle:"👑 EXCLUSIVE VIP CITIES",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.",shopTitle:"👑 PRO SHOP & SEASON VIP PASS",shopSub:"Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",backToLobbyBtn:"BACK TO MAIN MENU",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",youLabel:"YOU (Tightrope Walker)"}};for(let r=0;r<Ts.length;r++){const e=Ts[r];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}for(let r=0;r<_0.length;r++){const e=_0[r];e.coatColor=e.coatColor||e.hoodieColor}for(let r=0;r<Rl.length;r++){const e=Rl[r];e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function Cg(r){const e=Math.max(1,Math.min(100,r||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function Nx(r){const e=Math.max(1,Math.min(100,r||1)),t=Cg(e),s=100+(e-1)*5;return Math.round(s*t)}function mf(r,e=null){const t=Math.max(1,Math.min(100,r||1)),s=Math.min(19,Math.max(0,Math.floor((t-1)/5))),o=e||Ts[s],l=(t-1)%5+1,u=Cg(t),f=5,m=Number((f*u).toFixed(3)),p=Nx(t),y=t<4?0:Number((u*(1+(t-4)*.018)).toFixed(3)),S=Number((u*1.15).toFixed(3)),x=Number((.62*S).toFixed(3)),M=Number(Math.max(.14,.28-(t-1)/99*.14).toFixed(4)),E=t<4?6:Number(Math.max(4.5,6-(t-4)/96*1.5).toFixed(2)),P=.32+o.windStrength*.45+l*.045,_=1.08+t/100*.92,v=t<=15?2:t<=55?3:4,R=t<=3?0:t<=10?1:t<=25?2:t<=50?3:4,F=Number((.028+Math.max(0,u-1)*.068).toFixed(4)),C=Number((.036+Math.max(0,u-1)*.064).toFixed(4));return{level:t,cityIndex:e?e.index:s,city:o,isVipCity:!!e,stageInCity:l,speedPhase:R,walkSpeedMultiplier:u,baseWalkSpeed:f,walkSpeed:u,walkSpeedMeters:m,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:y,juggleSpeedMultiplier:S,juggleBaseSpeed:x,juggleSpeed:x,catchWindow:M,gravityFactor:_,gravity:_*2.1,windMax:P,windBase:P,windChangeFreq:E,gustInterval:Math.max(.75,2.2-R*.32),windBaseForce:P,gravityInstability:_,defaultObjects:v,ballCount:v,stepSwayImpulse:F,catchRecoilImpulse:C}}const M0=[523.25,587.33,659.25,783.99,880,1046.5];class Ix{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),s=this.ctx.createBuffer(1,t,e),o=s.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=s}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const s=this.ctx.currentTime,o=Math.max(0,(e-1)%M0.length),l=e>=12?1.25:1,u=M0[o]*l,f=this.ctx.createOscillator(),m=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",m.type="sine",f.frequency.setValueAtTime(u,s),m.frequency.setValueAtTime(u,s),p.gain.setValueAtTime(.001,s),p.gain.linearRampToValueAtTime(.18,s+.015),p.gain.exponentialRampToValueAtTime(.06,s+.07),p.gain.exponentialRampToValueAtTime(.001,s+.18),f.connect(p),m.connect(p),p.connect(this.ctx.destination),f.start(s),m.start(s),f.stop(s+.19),m.stop(s+.19),t){const y=this.ctx.createOscillator(),S=this.ctx.createGain();y.type="sine",y.frequency.setValueAtTime(u*2,s),y.frequency.exponentialRampToValueAtTime(u*2.04,s+.18),S.gain.setValueAtTime(.001,s),S.gain.linearRampToValueAtTime(.14,s+.012),S.gain.exponentialRampToValueAtTime(.001,s+.18),y.connect(S),S.connect(this.ctx.destination),y.start(s),y.stop(s+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.Q.setValueAtTime(6.5,e),s.frequency.setValueAtTime(310,e),s.frequency.exponentialRampToValueAtTime(920,e+.42),s.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(s),s.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(65,t),s.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.045),l.gain.setValueAtTime(.14,e+s*.045),l.gain.exponentialRampToValueAtTime(.001,e+s*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.045),o.stop(e+s*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.085),l.gain.setValueAtTime(.17,e+s*.085),l.gain.exponentialRampToValueAtTime(.001,e+s*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.085),o.stop(e+s*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],s=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(s[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playHookRescue(){this.playGrapple()}playNearMiss(){this.playNearMissSave()}playFallScream(){this.playFall()}playFrenzyStart(){this.playVictory()}playMissAlert(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,45]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(195,e),t.frequency.exponentialRampToValueAtTime(98,e+.22),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.25)}playFootstep(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine";const l=92+Math.min(45,(e-1)*30);s.frequency.setValueAtTime(l,t),s.frequency.exponentialRampToValueAtTime(42,t+.065),o.gain.setValueAtTime(.09,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.075)}updateWind(e=0){Math.abs(e)>.85&&Math.random()<.015&&this.playWindGust()}}const Lt=new Ix;function Vh(r){return Tx(r).flag}const Dx="nma_live_leaderboard_cache_v2";async function vl(r,e,t,s=1){const o=(r||"Equilibrista").trim().slice(0,15),l=(e||"AR").trim(),u=Vh(l),f={id:"player_self",name:o,country:l,flag:u,score:Math.max(0,Math.floor(t||0)),lp:Math.max(0,Math.floor(t||0)),level:Math.max(1,s||1),updatedAt:Date.now(),isPlayer:!0};try{localStorage.setItem(Dx,JSON.stringify(f))}catch{}return f}async function E0(r){const e=((r==null?void 0:r.name)||"Equilibrista").trim().slice(0,15),t=((r==null?void 0:r.country)||"AR").trim(),s=Vh(t),o=Math.max(0,Math.floor((r==null?void 0:r.score)??320)),l=Math.max(1,(r==null?void 0:r.level)||1),u=Math.floor(Date.now()/45e3),f=Cx.map((y,S)=>{const x=(u+S*7)%11*15,M=y.baseLp+x;return{id:y.id,name:y.name,country:y.country,flag:y.flag,score:M,lp:M,level:Math.max(5,Math.min(100,Math.floor(M/180))),badge:y.badge,isPlayer:!1}}),m={id:"player_self",name:e,country:t,flag:s,score:o,lp:o,level:l,badge:"⚡",isPlayer:!0};return[...f,m].sort((y,S)=>S.lp-y.lp)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="186",Ux=0,w0=1,Ox=2,mu=1,Fx=2,Tl=3,Fa=0,Yi=1,$i=2,Cs=0,Cl=1,ji=2,b0=3,T0=4,kx=5,Lo=100,Bx=101,zx=102,Vx=103,Gx=104,Hx=200,Wx=201,Xx=202,qx=203,Pg=204,Lg=205,jx=206,$x=207,Yx=208,Kx=209,Zx=210,Jx=211,Qx=212,e_=213,t_=214,Zf=0,Jf=1,Qf=2,Pl=3,eh=4,th=5,nh=6,ih=7,Ng=0,n_=1,i_=2,rs=0,Ig=1,Dg=2,Ug=3,Hh=4,Og=5,Fg=6,kg=7,Bg=300,ka=301,Oo=302,gf=303,vf=304,Pu=306,Ba=1e3,Rs=1001,rh=1002,mi=1003,r_=1004,Bc=1005,Ti=1006,xf=1007,Ua=1008,lr=1009,zg=1010,Vg=1011,Ll=1012,Wh=1013,ss=1014,ns=1015,as=1016,Xh=1017,qh=1018,Nl=1020,Gg=35902,Hg=35899,Wg=1021,Xg=1022,kr=1023,Ls=1026,Oa=1027,qg=1028,jh=1029,za=1030,$h=1031,Yh=1033,gu=33776,vu=33777,xu=33778,_u=33779,sh=35840,ah=35841,oh=35842,lh=35843,ch=36196,uh=37492,dh=37496,fh=37488,hh=37489,Mu=37490,ph=37491,mh=37808,gh=37809,vh=37810,xh=37811,_h=37812,yh=37813,Sh=37814,Mh=37815,Eh=37816,wh=37817,bh=37818,Th=37819,Ah=37820,Rh=37821,Ch=36492,Ph=36494,Lh=36495,Nh=36283,Ih=36284,Eu=36285,Dh=36286,s_=3200,Uh=0,a_=1,oa="",wr="srgb",wu="srgb-linear",bu="linear",dn="srgb",_f=7680,o_=519,l_=512,c_=513,u_=514,Kh=515,d_=516,f_=517,Zh=518,h_=519,p_=35044,A0="300 es",is=2e3,Il=2001;function m_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function g_(){const r=Tu("canvas");return r.style.display="block",r}const R0={};function C0(...r){const e="THREE."+r.shift();console.log(e,...r)}function jg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function wt(...r){r=jg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function on(...r){r=jg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Do(...r){const e=r.join(" ");e in R0||(R0[e]=!0,wt(...r))}function v_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const x_={[Zf]:Jf,[Qf]:nh,[eh]:ih,[Pl]:th,[Jf]:Zf,[nh]:Qf,[ih]:eh,[th]:Pl};class Ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Oh=180/Math.PI;function Ul(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wi[r&255]+wi[r>>8&255]+wi[r>>16&255]+wi[r>>24&255]+"-"+wi[e&255]+wi[e>>8&255]+"-"+wi[e>>16&15|64]+wi[e>>24&255]+"-"+wi[t&63|128]+wi[t>>8&255]+"-"+wi[t>>16&255]+wi[t>>24&255]+wi[s&255]+wi[s>>8&255]+wi[s>>16&255]+wi[s>>24&255]).toLowerCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function __(r,e){return(r%e+e)%e}function yf(r,e,t){return(1-t)*r+t*e}function xl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ap=class ap{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Jt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ap.prototype.isVector2=!0;let zt=ap;class ko{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let m=s[o+0],p=s[o+1],y=s[o+2],S=s[o+3],x=l[u+0],M=l[u+1],E=l[u+2],P=l[u+3];if(S!==P||m!==x||p!==M||y!==E){let _=m*x+p*M+y*E+S*P;_<0&&(x=-x,M=-M,E=-E,P=-P,_=-_);let v=1-f;if(_<.9995){const R=Math.acos(_),F=Math.sin(R);v=Math.sin(v*R)/F,f=Math.sin(f*R)/F,m=m*v+x*f,p=p*v+M*f,y=y*v+E*f,S=S*v+P*f}else{m=m*v+x*f,p=p*v+M*f,y=y*v+E*f,S=S*v+P*f;const R=1/Math.sqrt(m*m+p*p+y*y+S*S);m*=R,p*=R,y*=R,S*=R}}e[t]=m,e[t+1]=p,e[t+2]=y,e[t+3]=S}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],m=s[o+1],p=s[o+2],y=s[o+3],S=l[u],x=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+y*S+m*M-p*x,e[t+1]=m*E+y*x+p*S-f*M,e[t+2]=p*E+y*M+f*x-m*S,e[t+3]=y*E-f*S-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(s/2),y=f(o/2),S=f(l/2),x=m(s/2),M=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=x*y*S+p*M*E,this._y=p*M*S-x*y*E,this._z=p*y*E+x*M*S,this._w=p*y*S-x*M*E;break;case"YXZ":this._x=x*y*S+p*M*E,this._y=p*M*S-x*y*E,this._z=p*y*E-x*M*S,this._w=p*y*S+x*M*E;break;case"ZXY":this._x=x*y*S-p*M*E,this._y=p*M*S+x*y*E,this._z=p*y*E+x*M*S,this._w=p*y*S-x*M*E;break;case"ZYX":this._x=x*y*S-p*M*E,this._y=p*M*S+x*y*E,this._z=p*y*E-x*M*S,this._w=p*y*S+x*M*E;break;case"YZX":this._x=x*y*S+p*M*E,this._y=p*M*S+x*y*E,this._z=p*y*E-x*M*S,this._w=p*y*S-x*M*E;break;case"XZY":this._x=x*y*S-p*M*E,this._y=p*M*S-x*y*E,this._z=p*y*E+x*M*S,this._w=p*y*S+x*M*E;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],y=t[6],S=t[10],x=s+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>f&&s>S){const M=2*Math.sqrt(1+s-f-S);this._w=(y-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-s-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+S-s-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,y=t._w;return this._x=s*y+u*f+o*p-l*m,this._y=o*y+u*m+l*f-s*p,this._z=l*y+u*p+s*m-o*f,this._w=u*y-s*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);m=Math.sin(m*p)/y,t=Math.sin(t*p)/y,this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const op=class op{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(P0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*s),y=2*(f*t-l*o),S=2*(l*s-u*t);return this.x=t+m*p+u*S-f*y,this.y=s+m*y+f*p-l*S,this.z=o+m*S+l*y-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-s*m,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sf.copy(this).projectOnVector(e),this.sub(Sf)}reflect(e){return this.sub(Sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Jt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};op.prototype.isVector3=!0;let ie=op;const Sf=new ie,P0=new ko,lp=class lp{constructor(e,t,s,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p)}set(e,t,s,o,l,u,f,m,p){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=t,y[4]=l,y[5]=m,y[6]=s,y[7]=u,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],m=s[6],p=s[1],y=s[4],S=s[7],x=s[2],M=s[5],E=s[8],P=o[0],_=o[3],v=o[6],R=o[1],F=o[4],C=o[7],U=o[2],I=o[5],k=o[8];return l[0]=u*P+f*R+m*U,l[3]=u*_+f*F+m*I,l[6]=u*v+f*C+m*k,l[1]=p*P+y*R+S*U,l[4]=p*_+y*F+S*I,l[7]=p*v+y*C+S*k,l[2]=x*P+M*R+E*U,l[5]=x*_+M*F+E*I,l[8]=x*v+M*C+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8];return t*u*y-t*f*p-s*l*y+s*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8],S=y*u-f*p,x=f*m-y*l,M=p*l-u*m,E=t*S+s*x+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=S*P,e[1]=(o*p-y*s)*P,e[2]=(f*s-o*u)*P,e[3]=x*P,e[4]=(y*t-o*m)*P,e[5]=(o*l-f*t)*P,e[6]=M*P,e[7]=(s*m-p*t)*P,e[8]=(u*t-s*l)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return Do("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mf.makeScale(e,t)),this}rotate(e){return Do("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mf.makeRotation(-e)),this}translate(e,t){return Do("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lp.prototype.isMatrix3=!0;let Ct=lp;const Mf=new Ct,L0=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const r={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===dn&&(o.r=Ps(o.r),o.g=Ps(o.g),o.b=Ps(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===dn&&(o.r=Uo(o.r),o.g=Uo(o.g),o.b=Uo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===oa?bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Do("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Do("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[wu]:{primaries:e,whitePoint:s,transfer:bu,toXYZ:L0,fromXYZ:N0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wr},outputColorSpaceConfig:{drawingBufferColorSpace:wr}},[wr]:{primaries:e,whitePoint:s,transfer:dn,toXYZ:L0,fromXYZ:N0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wr}}}),r}const Zt=y_();function Ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mo;class S_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{mo===void 0&&(mo=Tu("canvas")),mo.width=e.width,mo.height=e.height;const o=mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=mo}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ps(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ps(t[s]/255)*255):t[s]=Ps(t[s]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class Jh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ef(o[u].image)):l.push(Ef(o[u]))}else l=Ef(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ef(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?S_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let E_=0;const wf=new ie;class Ai extends Ga{constructor(e=Ai.DEFAULT_IMAGE,t=Ai.DEFAULT_MAPPING,s=Rs,o=Rs,l=Ti,u=Ua,f=kr,m=lr,p=Ai.DEFAULT_ANISOTROPY,y=oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Ul(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wf).x}get height(){return this.source.getSize(wf).y}get depth(){return this.source.getSize(wf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ai.DEFAULT_IMAGE=null;Ai.DEFAULT_MAPPING=Bg;Ai.DEFAULT_ANISOTROPY=1;const cp=class cp{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const m=e.elements,p=m[0],y=m[4],S=m[8],x=m[1],M=m[5],E=m[9],P=m[2],_=m[6],v=m[10];if(Math.abs(y-x)<.01&&Math.abs(S-P)<.01&&Math.abs(E-_)<.01){if(Math.abs(y+x)<.1&&Math.abs(S+P)<.1&&Math.abs(E+_)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,C=(M+1)/2,U=(v+1)/2,I=(y+x)/4,k=(S+P)/4,w=(E+_)/4;return F>C&&F>U?F<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(F),o=I/s,l=k/s):C>U?C<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),s=I/o,l=w/o):U<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),s=k/l,o=w/l),this.set(s,o,l,t),this}let R=Math.sqrt((_-E)*(_-E)+(S-P)*(S-P)+(x-y)*(x-y));return Math.abs(R)<.001&&(R=1),this.x=(_-E)/R,this.y=(S-P)/R,this.z=(x-y)/R,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this.w=Jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this.w=Jt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cp.prototype.isVector4=!0;let Dn=cp;class w_ extends Ga{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Dn(0,0,e,t),this.scissorTest=!1,this.viewport=new Dn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Ai(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends w_{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class $g extends Ai{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b_ extends Ai{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Cu=class Cu{constructor(e,t,s,o,l,u,f,m,p,y,S,x,M,E,P,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p,y,S,x,M,E,P,_)}set(e,t,s,o,l,u,f,m,p,y,S,x,M,E,P,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=y,v[10]=S,v[14]=x,v[3]=M,v[7]=E,v[11]=P,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cu().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/go.setFromMatrixColumn(e,0).length(),l=1/go.setFromMatrixColumn(e,1).length(),u=1/go.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),m=Math.cos(o),p=Math.sin(o),y=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*y,M=u*S,E=f*y,P=f*S;t[0]=m*y,t[4]=-m*S,t[8]=p,t[1]=M+E*p,t[5]=x-P*p,t[9]=-f*m,t[2]=P-x*p,t[6]=E+M*p,t[10]=u*m}else if(e.order==="YXZ"){const x=m*y,M=m*S,E=p*y,P=p*S;t[0]=x+P*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*y,t[9]=-f,t[2]=M*f-E,t[6]=P+x*f,t[10]=u*m}else if(e.order==="ZXY"){const x=m*y,M=m*S,E=p*y,P=p*S;t[0]=x-P*f,t[4]=-u*S,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*y,t[9]=P-x*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const x=u*y,M=u*S,E=f*y,P=f*S;t[0]=m*y,t[4]=E*p-M,t[8]=x*p+P,t[1]=m*S,t[5]=P*p+x,t[9]=M*p-E,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const x=u*m,M=u*p,E=f*m,P=f*p;t[0]=m*y,t[4]=P-x*S,t[8]=E*S+M,t[1]=S,t[5]=u*y,t[9]=-f*y,t[2]=-p*y,t[6]=M*S+E,t[10]=x-P*S}else if(e.order==="XZY"){const x=u*m,M=u*p,E=f*m,P=f*p;t[0]=m*y,t[4]=-S,t[8]=p*y,t[1]=x*S+P,t[5]=u*y,t[9]=M*S-E,t[2]=E*S-M,t[6]=f*y,t[10]=P*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T_,e,A_)}lookAt(e,t,s){const o=this.elements;return sr.subVectors(e,t),sr.lengthSq()===0&&(sr.z=1),sr.normalize(),Zs.crossVectors(s,sr),Zs.lengthSq()===0&&(Math.abs(s.z)===1?sr.x+=1e-4:sr.z+=1e-4,sr.normalize(),Zs.crossVectors(s,sr)),Zs.normalize(),zc.crossVectors(sr,Zs),o[0]=Zs.x,o[4]=zc.x,o[8]=sr.x,o[1]=Zs.y,o[5]=zc.y,o[9]=sr.y,o[2]=Zs.z,o[6]=zc.z,o[10]=sr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],m=s[8],p=s[12],y=s[1],S=s[5],x=s[9],M=s[13],E=s[2],P=s[6],_=s[10],v=s[14],R=s[3],F=s[7],C=s[11],U=s[15],I=o[0],k=o[4],w=o[8],D=o[12],z=o[1],G=o[5],Y=o[9],ee=o[13],W=o[2],Z=o[6],fe=o[10],te=o[14],ne=o[3],Q=o[7],$=o[11],T=o[15];return l[0]=u*I+f*z+m*W+p*ne,l[4]=u*k+f*G+m*Z+p*Q,l[8]=u*w+f*Y+m*fe+p*$,l[12]=u*D+f*ee+m*te+p*T,l[1]=y*I+S*z+x*W+M*ne,l[5]=y*k+S*G+x*Z+M*Q,l[9]=y*w+S*Y+x*fe+M*$,l[13]=y*D+S*ee+x*te+M*T,l[2]=E*I+P*z+_*W+v*ne,l[6]=E*k+P*G+_*Z+v*Q,l[10]=E*w+P*Y+_*fe+v*$,l[14]=E*D+P*ee+_*te+v*T,l[3]=R*I+F*z+C*W+U*ne,l[7]=R*k+F*G+C*Z+U*Q,l[11]=R*w+F*Y+C*fe+U*$,l[15]=R*D+F*ee+C*te+U*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],y=e[2],S=e[6],x=e[10],M=e[14],E=e[3],P=e[7],_=e[11],v=e[15],R=m*M-p*x,F=f*M-p*S,C=f*x-m*S,U=u*M-p*y,I=u*x-m*y,k=u*S-f*y;return t*(P*R-_*F+v*C)-s*(E*R-_*U+v*I)+o*(E*F-P*U+v*k)-l*(E*C-P*I+_*k)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],y=e[10];return t*(u*y-f*p)-s*(l*y-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8],S=e[9],x=e[10],M=e[11],E=e[12],P=e[13],_=e[14],v=e[15],R=t*f-s*u,F=t*m-o*u,C=t*p-l*u,U=s*m-o*f,I=s*p-l*f,k=o*p-l*m,w=y*P-S*E,D=y*_-x*E,z=y*v-M*E,G=S*_-x*P,Y=S*v-M*P,ee=x*v-M*_,W=R*ee-F*Y+C*G+U*z-I*D+k*w;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/W;return e[0]=(f*ee-m*Y+p*G)*Z,e[1]=(o*Y-s*ee-l*G)*Z,e[2]=(P*k-_*I+v*U)*Z,e[3]=(x*I-S*k-M*U)*Z,e[4]=(m*z-u*ee-p*D)*Z,e[5]=(t*ee-o*z+l*D)*Z,e[6]=(_*C-E*k-v*F)*Z,e[7]=(y*k-x*C+M*F)*Z,e[8]=(u*Y-f*z+p*w)*Z,e[9]=(s*z-t*Y-l*w)*Z,e[10]=(E*I-P*C+v*R)*Z,e[11]=(S*C-y*I-M*R)*Z,e[12]=(f*D-u*G-m*w)*Z,e[13]=(t*G-s*D+o*w)*Z,e[14]=(P*F-E*U-_*R)*Z,e[15]=(y*U-S*F+x*R)*Z,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,m=e.z,p=l*u,y=l*f;return this.set(p*u+s,p*f-o*m,p*m+o*f,0,p*f+o*m,y*f+s,y*m-o*u,0,p*m-o*f,y*m+o*u,l*m*m+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,y=u+u,S=f+f,x=l*p,M=l*y,E=l*S,P=u*y,_=u*S,v=f*S,R=m*p,F=m*y,C=m*S,U=s.x,I=s.y,k=s.z;return o[0]=(1-(P+v))*U,o[1]=(M+C)*U,o[2]=(E-F)*U,o[3]=0,o[4]=(M-C)*I,o[5]=(1-(x+v))*I,o[6]=(_+R)*I,o[7]=0,o[8]=(E+F)*k,o[9]=(_-R)*k,o[10]=(1-(x+P))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=go.set(o[0],o[1],o[2]).length();const f=go.set(o[4],o[5],o[6]).length(),m=go.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ur.copy(this);const p=1/u,y=1/f,S=1/m;return Ur.elements[0]*=p,Ur.elements[1]*=p,Ur.elements[2]*=p,Ur.elements[4]*=y,Ur.elements[5]*=y,Ur.elements[6]*=y,Ur.elements[8]*=S,Ur.elements[9]*=S,Ur.elements[10]*=S,t.setFromRotationMatrix(Ur),s.x=u,s.y=f,s.z=m,this}makePerspective(e,t,s,o,l,u,f=is,m=!1){const p=this.elements,y=2*l/(t-e),S=2*l/(s-o),x=(t+e)/(t-e),M=(s+o)/(s-o);let E,P;if(m)E=l/(u-l),P=u*l/(u-l);else if(f===is)E=-(u+l)/(u-l),P=-2*u*l/(u-l);else if(f===Il)E=-u/(u-l),P=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=P,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=is,m=!1){const p=this.elements,y=2/(t-e),S=2/(s-o),x=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,P;if(m)E=1/(u-l),P=u/(u-l);else if(f===is)E=-2/(u-l),P=-(u+l)/(u-l);else if(f===Il)E=-1/(u-l),P=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=P,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Cu.prototype.isMatrix4=!0;let Pn=Cu;const go=new ie,Ur=new Pn,T_=new ie(0,0,0),A_=new ie(1,1,1),Zs=new ie,zc=new ie,sr=new ie,I0=new Pn,D0=new ko;class ca{constructor(e=0,t=0,s=0,o=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],y=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Jt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Jt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,M),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return I0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R_=0;const U0=new ie,vo=new ko,Ss=new Pn,Vc=new ie,_l=new ie,C_=new ie,P_=new ko,O0=new ie(1,0,0),F0=new ie(0,1,0),k0=new ie(0,0,1),B0={type:"added"},L_={type:"removed"},xo={type:"childadded",child:null},bf={type:"childremoved",child:null};class si extends Ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new ie,t=new ca,s=new ko,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pn},normalMatrix:{value:new Ct}}),this.matrix=new Pn,this.matrixWorld=new Pn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(O0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,t){return U0.copy(e).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(O0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Vc.copy(e):Vc.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(_l,Vc,this.up):Ss.lookAt(Vc,_l,this.up),this.quaternion.setFromRotationMatrix(Ss),o&&(Ss.extractRotation(o.matrixWorld),vo.setFromRotationMatrix(Ss),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B0),xo.child=e,this.dispatchEvent(xo),xo.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L_),bf.child=e,this.dispatchEvent(bf),bf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B0),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const S=m[p];l(e.shapes,S)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),y=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),S.length>0&&(s.shapes=S),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const m=[];for(const p in f){const y=f[p];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}si.DEFAULT_UP=new ie(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class Tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const P of e.hand.values()){const _=t.getJointPose(P,s),v=this._getHandJoint(p,P);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const y=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=y.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Kt;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function Af(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Wt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Zt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Zt.workingColorSpace){if(e=__(e,1),t=Jt(t,0,1),s=Jt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Af(u,l,e+1/3),this.g=Af(u,l,e),this.b=Af(u,l,e-1/3)}return Zt.colorSpaceToWorking(this,o),this}setStyle(e,t=wr){function s(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wr){const s=Kg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wr){return Zt.workingToColorSpace(bi.copy(this),e),Math.round(Jt(bi.r*255,0,255))*65536+Math.round(Jt(bi.g*255,0,255))*256+Math.round(Jt(bi.b*255,0,255))}getHexString(e=wr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(bi.copy(this),t);const s=bi.r,o=bi.g,l=bi.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let m,p;const y=(f+u)/2;if(f===u)m=0,p=0;else{const S=u-f;switch(p=y<=.5?S/(u+f):S/(2-u-f),u){case s:m=(o-l)/S+(o<l?6:0);break;case o:m=(l-s)/S+2;break;case l:m=(s-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=y,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(bi.copy(this),t),e.r=bi.r,e.g=bi.g,e.b=bi.b,e}getStyle(e=wr){Zt.workingToColorSpace(bi.copy(this),e);const t=bi.r,s=bi.g,o=bi.b;return e!==wr?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(Gc);const s=yf(Js.h,Gc.h,t),o=yf(Js.s,Gc.s,t),l=yf(Js.l,Gc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bi=new Wt;Wt.NAMES=Kg;class Qh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(e),this.density=t}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Or=new ie,Ms=new ie,Rf=new ie,Es=new ie,_o=new ie,yo=new ie,z0=new ie,Cf=new ie,Pf=new ie,Lf=new ie,Nf=new Dn,If=new Dn,Df=new Dn;class br{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Or.subVectors(e,t),o.cross(Or);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Or.subVectors(o,t),Ms.subVectors(s,t),Rf.subVectors(e,t);const u=Or.dot(Or),f=Or.dot(Ms),m=Or.dot(Rf),p=Ms.dot(Ms),y=Ms.dot(Rf),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*m-f*y)*x,E=(u*y-f*m)*x;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(e,t,s,o,l,u,f,m){return this.getBarycoord(e,t,s,o,Es)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Es.x),m.addScaledVector(u,Es.y),m.addScaledVector(f,Es.z),m)}static getInterpolatedAttribute(e,t,s,o,l,u){return Nf.setScalar(0),If.setScalar(0),Df.setScalar(0),Nf.fromBufferAttribute(e,t),If.fromBufferAttribute(e,s),Df.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Nf,l.x),u.addScaledVector(If,l.y),u.addScaledVector(Df,l.z),u}static isFrontFacing(e,t,s,o){return Or.subVectors(s,t),Ms.subVectors(e,t),Or.cross(Ms).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Or.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Or.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return br.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return br.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;_o.subVectors(o,s),yo.subVectors(l,s),Cf.subVectors(e,s);const m=_o.dot(Cf),p=yo.dot(Cf);if(m<=0&&p<=0)return t.copy(s);Pf.subVectors(e,o);const y=_o.dot(Pf),S=yo.dot(Pf);if(y>=0&&S<=y)return t.copy(o);const x=m*S-y*p;if(x<=0&&m>=0&&y<=0)return u=m/(m-y),t.copy(s).addScaledVector(_o,u);Lf.subVectors(e,l);const M=_o.dot(Lf),E=yo.dot(Lf);if(E>=0&&M<=E)return t.copy(l);const P=M*p-m*E;if(P<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(yo,f);const _=y*E-M*S;if(_<=0&&S-y>=0&&M-E>=0)return z0.subVectors(l,o),f=(S-y)/(S-y+(M-E)),t.copy(o).addScaledVector(z0,f);const v=1/(_+P+x);return u=P*v,f=x*v,t.copy(s).addScaledVector(_o,u).addScaledVector(yo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ol{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Fr):Fr.fromBufferAttribute(l,u),Fr.applyMatrix4(e.matrixWorld),this.expandByPoint(Fr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hc.copy(s.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),Wc.subVectors(this.max,yl),So.subVectors(e.a,yl),Mo.subVectors(e.b,yl),Eo.subVectors(e.c,yl),Qs.subVectors(Mo,So),ea.subVectors(Eo,Mo),Ca.subVectors(So,Eo);let t=[0,-Qs.z,Qs.y,0,-ea.z,ea.y,0,-Ca.z,Ca.y,Qs.z,0,-Qs.x,ea.z,0,-ea.x,Ca.z,0,-Ca.x,-Qs.y,Qs.x,0,-ea.y,ea.x,0,-Ca.y,Ca.x,0];return!Uf(t,So,Mo,Eo,Wc)||(t=[1,0,0,0,1,0,0,0,1],!Uf(t,So,Mo,Eo,Wc))?!1:(Xc.crossVectors(Qs,ea),t=[Xc.x,Xc.y,Xc.z],Uf(t,So,Mo,Eo,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ws),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ws=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Fr=new ie,Hc=new Ol,So=new ie,Mo=new ie,Eo=new ie,Qs=new ie,ea=new ie,Ca=new ie,yl=new ie,Wc=new ie,Xc=new ie,Pa=new ie;function Uf(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Pa.fromArray(r,l);const f=o.x*Math.abs(Pa.x)+o.y*Math.abs(Pa.y)+o.z*Math.abs(Pa.z),m=e.dot(Pa),p=t.dot(Pa),y=s.dot(Pa);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>f)return!1}return!0}const Gn=new ie,qc=new zt;let D_=0;class zr extends Ga{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=p_,this.updateRanges=[],this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)qc.fromBufferAttribute(this,t),qc.applyMatrix3(e),this.setXY(t,qc.x,qc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=xl(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=qi(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xl(t,this.array)),t}setX(e,t){return this.normalized&&(t=qi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xl(t,this.array)),t}setY(e,t){return this.normalized&&(t=qi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xl(t,this.array)),t}setW(e,t){return this.normalized&&(t=qi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=qi(t,this.array),s=qi(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=qi(t,this.array),s=qi(s,this.array),o=qi(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=qi(t,this.array),s=qi(s,this.array),o=qi(o,this.array),l=qi(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends zr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Jg extends zr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class mn extends zr{constructor(e,t,s){super(new Float32Array(e),t,s)}}const U_=new Ol,Sl=new ie,Of=new ie;class Fl{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):U_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const t=Sl.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Sl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(Of)),this.expandByPoint(Sl.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let O_=0;const Mr=new Pn,Ff=new si,wo=new ie,ar=new Ol,Ml=new Ol,ii=new ie;class $n extends Ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?Jg:Zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,s){return Mr.makeTranslation(e,t,s),this.applyMatrix4(Mr),this}scale(e,t,s){return Mr.makeScale(e,t,s),this.applyMatrix4(Mr),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ar.setFromBufferAttribute(l),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,ar.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,ar.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(ar.min),this.boundingBox.expandByPoint(ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(ar.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ml.setFromBufferAttribute(f),this.morphTargetsRelative?(ii.addVectors(ar.min,Ml.min),ar.expandByPoint(ii),ii.addVectors(ar.max,Ml.max),ar.expandByPoint(ii)):(ar.expandByPoint(Ml.min),ar.expandByPoint(Ml.max))}ar.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)ii.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ii));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,y=f.count;p<y;p++)ii.fromBufferAttribute(f,p),m&&(wo.fromBufferAttribute(e,p),ii.add(wo)),o=Math.max(o,s.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new zr(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let w=0;w<s.count;w++)f[w]=new ie,m[w]=new ie;const p=new ie,y=new ie,S=new ie,x=new zt,M=new zt,E=new zt,P=new ie,_=new ie;function v(w,D,z){p.fromBufferAttribute(s,w),y.fromBufferAttribute(s,D),S.fromBufferAttribute(s,z),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,D),E.fromBufferAttribute(l,z),y.sub(p),S.sub(p),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(P.copy(y).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(G),_.copy(S).multiplyScalar(M.x).addScaledVector(y,-E.x).multiplyScalar(G),f[w].add(P),f[D].add(P),f[z].add(P),m[w].add(_),m[D].add(_),m[z].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,D=R.length;w<D;++w){const z=R[w],G=z.start,Y=z.count;for(let ee=G,W=G+Y;ee<W;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const F=new ie,C=new ie,U=new ie,I=new ie;function k(w){U.fromBufferAttribute(o,w),I.copy(U);const D=f[w];F.copy(D),F.sub(U.multiplyScalar(U.dot(D))).normalize(),C.crossVectors(I,D);const G=C.dot(m[w])<0?-1:1;u.setXYZW(w,F.x,F.y,F.z,G)}for(let w=0,D=R.length;w<D;++w){const z=R[w],G=z.start,Y=z.count;for(let ee=G,W=G+Y;ee<W;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new zr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,m=new ie,p=new ie,y=new ie,S=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),P=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,P),u.fromBufferAttribute(t,_),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,P),p.fromBufferAttribute(s,_),f.add(y),m.add(y),p.add(y),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(P,m.x,m.y,m.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ii.fromBufferAttribute(e,t),ii.normalize(),e.setXYZ(t,ii.x,ii.y,ii.z)}toNonIndexed(){function e(f,m){const p=f.array,y=f.itemSize,S=f.normalized,x=new p.constructor(m.length*y);let M=0,E=0;for(let P=0,_=m.length;P<_;P++){f.isInterleavedBufferAttribute?M=m[P]*f.data.stride+f.offset:M=m[P]*y;for(let v=0;v<y;v++)x[E++]=p[M++]}return new zr(x,y,S)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,s=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let y=0,S=p.length;y<S;y++){const x=p[y],M=e(x,s);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];y.push(M.toJSON(e.data))}y.length>0&&(o[m]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const y=o[p];this.setAttribute(p,y.clone(t))}const l=e.morphAttributes;for(const p in l){const y=[],S=l[p];for(let x=0,M=S.length;x<M;x++)y.push(S[x].clone(t));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,y=u.length;p<y;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new ie,F_=new ie,k_=new Ct;class ra{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=kf.subVectors(s,t).cross(F_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(kf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||k_.getNormalMatrix(e),o=this.coplanarPoint(kf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let B_=0;class Ha extends Ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=Cl,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pg,this.blendDst=Lg,this.blendEquation=Lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_f,this.stencilZFail=_f,this.stencilZPass=_f,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new ra().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new zt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bs=new ie,Bf=new ie,jc=new ie,$c=new ie;class ep{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bs.copy(this.origin).addScaledVector(this.direction,t),bs.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Bf.copy(e).add(t).multiplyScalar(.5),jc.copy(t).sub(e).normalize(),$c.copy(this.origin).sub(Bf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(jc),f=$c.dot(this.direction),m=-$c.dot(jc),p=$c.lengthSq(),y=Math.abs(1-u*u);let S,x,M,E;if(y>0)if(S=u*m-f,x=u*f-m,E=l*y,S>=0)if(x>=-E)if(x<=E){const P=1/y;S*=P,x*=P,M=S*(S+u*x+2*f)+x*(u*S+x+2*m)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*m)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*m)+p;else x<=-E?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-m),l),M=-S*S+x*(x+2*m)+p):x<=E?(S=0,x=Math.min(Math.max(-l,-m),l),M=x*(x+2*m)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-m),l),M=-S*S+x*(x+2*m)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Bf).addScaledVector(jc,x),M}intersectSphere(e,t){if(e.radius<0)return null;bs.subVectors(e.center,this.origin);const s=bs.dot(this.direction),o=bs.dot(bs)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,m=s+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,m;const p=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),y>=0?(l=(e.min.y-x.y)*y,u=(e.max.y-x.y)*y):(l=(e.max.y-x.y)*y,u=(e.min.y-x.y)*y),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),s>m||f>o)||((f>s||s!==s)&&(s=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,bs)!==null}intersectTriangle(e,t,s,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,y=f.z,S=e.x-u.x,x=e.y-u.y,M=e.z-u.z,E=t.x-u.x,P=t.y-u.y,_=t.z-u.z,v=s.x-u.x,R=s.y-u.y,F=s.z-u.z,C=Math.abs(m),U=Math.abs(p),I=Math.abs(y);let k,w,D,z,G,Y,ee,W,Z,fe,te,ne;if(C>=U&&C>=I?(D=m,Y=S,Z=E,ne=v,m>=0?(k=p,w=y,z=x,G=M,ee=P,W=_,fe=R,te=F):(k=y,w=p,z=M,G=x,ee=_,W=P,fe=F,te=R)):U>=I?(D=p,Y=x,Z=P,ne=R,p>=0?(k=y,w=m,z=M,G=S,ee=_,W=E,fe=F,te=v):(k=m,w=y,z=S,G=M,ee=E,W=_,fe=v,te=F)):(D=y,Y=M,Z=_,ne=F,y>=0?(k=m,w=p,z=S,G=x,ee=E,W=P,fe=v,te=R):(k=p,w=m,z=x,G=S,ee=P,W=E,fe=R,te=v)),D===0)return null;const Q=k/D,$=w/D,T=1/D,le=z-Q*Y,Se=G-$*Y,Ie=ee-Q*Z,je=W-$*Z,Ue=fe-Q*ne,re=te-$*ne,he=Ue*je-re*Ie,Re=le*re-Se*Ue,Ye=Ie*Se-je*le;if(o){if(he<0||Re<0||Ye<0)return null}else if((he<0||Re<0||Ye<0)&&(he>0||Re>0||Ye>0))return null;const Oe=he+Re+Ye;if(Oe===0)return null;const ft=T*(he*Y+Re*Z+Ye*ne);return(Oe>0?ft<0:ft>0)?null:this.at(ft/Oe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const V0=new Pn,La=new ep,Yc=new Fl,G0=new ie,Kc=new ie,Zc=new ie,Jc=new ie,zf=new ie,Qc=new ie,H0=new ie,eu=new ie;class ve extends si{constructor(e=new $n,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Qc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const y=f[m],S=l[m];y!==0&&(zf.fromBufferAttribute(S,e),u?Qc.addScaledVector(zf,y):Qc.addScaledVector(zf.sub(t),y))}t.add(Qc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),La.copy(e.ray).recast(e.near),!(Yc.containsPoint(La.origin)===!1&&(La.intersectSphere(Yc,G0)===null||La.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(V0.copy(l).invert(),La.copy(e.ray).applyMatrix4(V0),!(s.boundingBox!==null&&La.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,La)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,y=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,P=x.length;E<P;E++){const _=x[E],v=u[_.materialIndex],R=Math.max(_.start,M.start),F=Math.min(f.count,Math.min(_.start+_.count,M.start+M.count));for(let C=R,U=F;C<U;C+=3){const I=f.getX(C),k=f.getX(C+1),w=f.getX(C+2);o=tu(this,v,e,s,p,y,S,I,k,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),P=Math.min(f.count,M.start+M.count);for(let _=E,v=P;_<v;_+=3){const R=f.getX(_),F=f.getX(_+1),C=f.getX(_+2);o=tu(this,u,e,s,p,y,S,R,F,C),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,P=x.length;E<P;E++){const _=x[E],v=u[_.materialIndex],R=Math.max(_.start,M.start),F=Math.min(m.count,Math.min(_.start+_.count,M.start+M.count));for(let C=R,U=F;C<U;C+=3){const I=C,k=C+1,w=C+2;o=tu(this,v,e,s,p,y,S,I,k,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),P=Math.min(m.count,M.start+M.count);for(let _=E,v=P;_<v;_+=3){const R=_,F=_+1,C=_+2;o=tu(this,u,e,s,p,y,S,R,F,C),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function z_(r,e,t,s,o,l,u,f){let m;if(e.side===Yi?m=s.intersectTriangle(u,l,o,!0,f):m=s.intersectTriangle(o,l,u,e.side===Fa,f),m===null)return null;eu.copy(f),eu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(eu);return p<t.near||p>t.far?null:{distance:p,point:eu.clone(),object:r}}function tu(r,e,t,s,o,l,u,f,m,p){r.getVertexPosition(f,Kc),r.getVertexPosition(m,Zc),r.getVertexPosition(p,Jc);const y=z_(r,e,t,s,Kc,Zc,Jc,H0);if(y){const S=new ie;br.getBarycoord(H0,Kc,Zc,Jc,S),o&&(y.uv=br.getInterpolatedAttribute(o,f,m,p,S,new zt)),l&&(y.uv1=br.getInterpolatedAttribute(l,f,m,p,S,new zt)),u&&(y.normal=br.getInterpolatedAttribute(u,f,m,p,S,new ie),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:f,b:m,c:p,normal:new ie,materialIndex:0};br.getNormal(Kc,Zc,Jc,x.normal),y.face=x,y.barycoord=S}return y}class V_ extends Ai{constructor(e=null,t=1,s=1,o,l,u,f,m,p=mi,y=mi,S,x){super(null,u,f,m,p,y,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Na=new Fl,G_=new zt(.5,.5),nu=new ie;class tp{constructor(e=new ra,t=new ra,s=new ra,o=new ra,l=new ra,u=new ra){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=is,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],y=l[4],S=l[5],x=l[6],M=l[7],E=l[8],P=l[9],_=l[10],v=l[11],R=l[12],F=l[13],C=l[14],U=l[15];if(o[0].setComponents(p-u,M-y,v-E,U-R).normalize(),o[1].setComponents(p+u,M+y,v+E,U+R).normalize(),o[2].setComponents(p+f,M+S,v+P,U+F).normalize(),o[3].setComponents(p-f,M-S,v-P,U-F).normalize(),s)o[4].setComponents(m,x,_,C).normalize(),o[5].setComponents(p-m,M-x,v-_,U-C).normalize();else if(o[4].setComponents(p-m,M-x,v-_,U-C).normalize(),t===is)o[5].setComponents(p+m,M+x,v+_,U+C).normalize();else if(t===Il)o[5].setComponents(m,x,_,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Na)}intersectsSprite(e){Na.center.set(0,0,0);const t=G_.distanceTo(e.center);return Na.radius=.7071067811865476+t,Na.applyMatrix4(e.matrixWorld),this.intersectsSphere(Na)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(nu.x=o.normal.x>0?e.max.x:e.min.x,nu.y=o.normal.y>0?e.max.y:e.min.y,nu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sa extends Ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new ie,Ru=new ie,W0=new Pn,El=new ep,iu=new Fl,Vf=new ie,X0=new ie;class Qg extends si{constructor(e=new $n,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Au.fromBufferAttribute(t,o-1),Ru.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Au.distanceTo(Ru);e.setAttribute("lineDistance",new mn(s,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(o),iu.radius+=l,e.ray.intersectsSphere(iu)===!1)return;W0.copy(o).invert(),El.copy(e.ray).applyMatrix4(W0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,y=s.index,x=s.attributes.position;if(y!==null){const M=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let P=M,_=E-1;P<_;P+=p){const v=y.getX(P),R=y.getX(P+1),F=ru(this,e,El,m,v,R,P);F&&t.push(F)}if(this.isLineLoop){const P=y.getX(E-1),_=y.getX(M),v=ru(this,e,El,m,P,_,E-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let P=M,_=E-1;P<_;P+=p){const v=ru(this,e,El,m,P,P+1,P);v&&t.push(v)}if(this.isLineLoop){const P=ru(this,e,El,m,E-1,M,E-1);P&&t.push(P)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ru(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(Au.fromBufferAttribute(f,o),Ru.fromBufferAttribute(f,l),t.distanceSqToSegment(Au,Ru,Vf,X0)>s)return;Vf.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Vf);if(!(p<e.near||p>e.far))return{distance:p,point:X0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const q0=new ie,j0=new ie;class bo extends Qg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)q0.fromBufferAttribute(t,o),j0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+q0.distanceTo(j0);e.setAttribute("lineDistance",new mn(s,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ev extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $0=new Pn,Fh=new ep,su=new Fl,au=new ie;class H_ extends si{constructor(e=new $n,t=new ev){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),su.copy(s.boundingSphere),su.applyMatrix4(o),su.radius+=l,e.ray.intersectsSphere(su)===!1)return;$0.copy(o).invert(),Fh.copy(e.ray).applyMatrix4($0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=s.index,S=s.attributes.position;if(p!==null){const x=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=x,P=M;E<P;E++){const _=p.getX(E);au.fromBufferAttribute(S,_),Y0(au,_,m,o,e,t,this)}}else{const x=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let E=x,P=M;E<P;E++)au.fromBufferAttribute(S,E),Y0(au,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Y0(r,e,t,s,o,l,u){const f=Fh.distanceSqToPoint(r);if(f<t){const m=new ie;Fh.closestPointToPoint(r,m),m.applyMatrix4(s);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class tv extends Ai{constructor(e=[],t=ka,s,o,l,u,f,m,p,y){super(e,t,s,o,l,u,f,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends Ai{constructor(e,t,s,o,l,u,f,m,p){super(e,t,s,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dl extends Ai{constructor(e,t,s=ss,o,l,u,f=mi,m=mi,p,y=Ls,S=1){if(y!==Ls&&y!==Oa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,m,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class W_ extends Dl{constructor(e,t=ss,s=ka,o,l,u=mi,f=mi,m,p=Ls){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,t,s,o,l,u,f,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nv extends Ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Et extends $n{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],y=[],S=[];let x=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(S,2));function E(P,_,v,R,F,C,U,I,k,w,D){const z=C/k,G=U/w,Y=C/2,ee=U/2,W=I/2,Z=k+1,fe=w+1;let te=0,ne=0;const Q=new ie;for(let $=0;$<fe;$++){const T=$*G-ee;for(let le=0;le<Z;le++){const Se=le*z-Y;Q[P]=Se*R,Q[_]=T*F,Q[v]=W,p.push(Q.x,Q.y,Q.z),Q[P]=0,Q[_]=0,Q[v]=I>0?1:-1,y.push(Q.x,Q.y,Q.z),S.push(le/k),S.push(1-$/w),te+=1}}for(let $=0;$<w;$++)for(let T=0;T<k;T++){const le=x+T+Z*$,Se=x+T+Z*($+1),Ie=x+(T+1)+Z*($+1),je=x+(T+1)+Z*$;m.push(le,Se,je),m.push(Se,Ie,je),ne+=6}f.addGroup(M,ne,D),M+=ne,x+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Da extends $n{constructor(e=1,t=1,s=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:s,radialSegments:o,heightSegments:l},t=Math.max(0,t),s=Math.max(1,Math.floor(s)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],y=t/2,S=Math.PI/2*e,x=t,M=2*S+x,E=s*2+l,P=o+1,_=new ie,v=new ie;for(let R=0;R<=E;R++){let F=0,C=0,U=0,I=0;if(R<=s){const D=R/s,z=D*Math.PI/2;C=-y-e*Math.cos(z),U=e*Math.sin(z),I=-e*Math.cos(z),F=D*S}else if(R<=s+l){const D=(R-s)/l;C=-y+D*t,U=e,I=0,F=S+D*x}else{const D=(R-s-l)/s,z=D*Math.PI/2;C=y+e*Math.sin(z),U=e*Math.cos(z),I=e*Math.sin(z),F=S+x+D*S}const k=Math.max(0,Math.min(1,F/M));let w=0;R===0?w=.5/o:R===E&&(w=-.5/o);for(let D=0;D<=o;D++){const z=D/o,G=z*Math.PI*2,Y=Math.sin(G),ee=Math.cos(G);v.x=-U*ee,v.y=C,v.z=U*Y,f.push(v.x,v.y,v.z),_.set(-U*ee,I,U*Y),_.normalize(),m.push(_.x,_.y,_.z),p.push(z+w,k)}if(R>0){const D=(R-1)*P;for(let z=0;z<o;z++){const G=D+z,Y=D+z+1,ee=R*P+z,W=R*P+z+1;u.push(G,Y,ee),u.push(Y,W,ee)}}}this.setIndex(u),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class sn extends $n{constructor(e=1,t=1,s=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const y=[],S=[],x=[],M=[];let E=0;const P=[],_=s/2;let v=0;R(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(y),this.setAttribute("position",new mn(S,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(M,2));function R(){const C=new ie,U=new ie;let I=0;const k=(t-e)/s;for(let w=0;w<=l;w++){const D=[],z=w/l,G=z*(t-e)+e;for(let Y=0;Y<=o;Y++){const ee=Y/o,W=ee*m+f,Z=Math.sin(W),fe=Math.cos(W);U.x=G*Z,U.y=-z*s+_,U.z=G*fe,S.push(U.x,U.y,U.z),C.set(Z,k,fe).normalize(),x.push(C.x,C.y,C.z),M.push(ee,1-z),D.push(E++)}P.push(D)}for(let w=0;w<o;w++)for(let D=0;D<l;D++){const z=P[D][w],G=P[D+1][w],Y=P[D+1][w+1],ee=P[D][w+1];(e>0||D!==0)&&(y.push(z,G,ee),I+=3),(t>0||D!==l-1)&&(y.push(G,Y,ee),I+=3)}p.addGroup(v,I,0),v+=I}function F(C){const U=E,I=new zt,k=new ie;let w=0;const D=C===!0?e:t,z=C===!0?1:-1;for(let Y=1;Y<=o;Y++)S.push(0,_*z,0),x.push(0,z,0),M.push(.5,.5),E++;const G=E;for(let Y=0;Y<=o;Y++){const W=Y/o*m+f,Z=Math.cos(W),fe=Math.sin(W);k.x=D*fe,k.y=_*z,k.z=D*Z,S.push(k.x,k.y,k.z),x.push(0,z,0),I.x=Z*.5+.5,I.y=fe*.5*z+.5,M.push(I.x,I.y),E++}for(let Y=0;Y<o;Y++){const ee=U+Y,W=G+Y;C===!0?y.push(W,W+1,ee):y.push(W+1,W,ee),w+=3}p.addGroup(v,w,C===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi extends sn{constructor(e=1,t=1,s=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,s,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Fi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class np extends $n{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),y(),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(l.slice(),3)),this.setAttribute("uv",new mn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const F=new ie,C=new ie,U=new ie;for(let I=0;I<t.length;I+=3)M(t[I+0],F),M(t[I+1],C),M(t[I+2],U),m(F,C,U,R)}function m(R,F,C,U){const I=U+1,k=[];for(let w=0;w<=I;w++){k[w]=[];const D=R.clone().lerp(C,w/I),z=F.clone().lerp(C,w/I),G=I-w;for(let Y=0;Y<=G;Y++)Y===0&&w===I?k[w][Y]=D:k[w][Y]=D.clone().lerp(z,Y/G)}for(let w=0;w<I;w++)for(let D=0;D<2*(I-w)-1;D++){const z=Math.floor(D/2);D%2===0?(x(k[w][z+1]),x(k[w+1][z]),x(k[w][z])):(x(k[w][z+1]),x(k[w+1][z+1]),x(k[w+1][z]))}}function p(R){const F=new ie;for(let C=0;C<l.length;C+=3)F.x=l[C+0],F.y=l[C+1],F.z=l[C+2],F.normalize().multiplyScalar(R),l[C+0]=F.x,l[C+1]=F.y,l[C+2]=F.z}function y(){const R=new ie;for(let F=0;F<l.length;F+=3){R.x=l[F+0],R.y=l[F+1],R.z=l[F+2];const C=_(R)/2/Math.PI+.5,U=v(R)/Math.PI+.5;u.push(C,1-U)}E(),S()}function S(){for(let R=0;R<u.length;R+=6){const F=u[R+0],C=u[R+2],U=u[R+4],I=Math.max(F,C,U),k=Math.min(F,C,U);I>.9&&k<.1&&(F<.2&&(u[R+0]+=1),C<.2&&(u[R+2]+=1),U<.2&&(u[R+4]+=1))}}function x(R){l.push(R.x,R.y,R.z)}function M(R,F){const C=R*3;F.x=e[C+0],F.y=e[C+1],F.z=e[C+2]}function E(){const R=new ie,F=new ie,C=new ie,U=new ie,I=new zt,k=new zt,w=new zt;for(let D=0,z=0;D<l.length;D+=9,z+=6){R.set(l[D+0],l[D+1],l[D+2]),F.set(l[D+3],l[D+4],l[D+5]),C.set(l[D+6],l[D+7],l[D+8]),I.set(u[z+0],u[z+1]),k.set(u[z+2],u[z+3]),w.set(u[z+4],u[z+5]),U.copy(R).add(F).add(C).divideScalar(3);const G=_(U);P(I,z+0,R,G),P(k,z+2,F,G),P(w,z+4,C,G)}}function P(R,F,C,U){U<0&&R.x===1&&(u[F]=R.x-1),C.x===0&&C.z===0&&(u[F]=U/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.vertices,e.indices,e.radius,e.detail)}}const ou=new ie,lu=new ie,Gf=new ie,cu=new br;class To extends $n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(yu*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,p=[0,0,0],y=["a","b","c"],S=new Array(3),x={},M=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:P,b:_,c:v}=cu;if(P.fromBufferAttribute(f,p[0]),_.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),cu.getNormal(Gf),S[0]=`${Math.round(P.x*o)},${Math.round(P.y*o)},${Math.round(P.z*o)}`,S[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,S[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let R=0;R<3;R++){const F=(R+1)%3,C=S[R],U=S[F],I=cu[y[R]],k=cu[y[F]],w=`${C}_${U}`,D=`${U}_${C}`;D in x&&x[D]?(Gf.dot(x[D].normal)<=l&&(M.push(I.x,I.y,I.z),M.push(k.x,k.y,k.z)),x[D]=null):w in x||(x[w]={index0:p[R],index1:p[F],normal:Gf.clone()})}}for(const E in x)if(x[E]){const{index0:P,index1:_}=x[E];ou.fromBufferAttribute(f,P),lu.fromBufferAttribute(f,_),M.push(ou.x,ou.y,ou.z),M.push(lu.x,lu.y,lu.z)}this.setAttribute("position",new mn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nu extends np{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nu(e.radius,e.detail)}}class Va extends $n{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),m=Math.floor(o),p=f+1,y=m+1,S=e/f,x=t/m,M=[],E=[],P=[],_=[];for(let v=0;v<y;v++){const R=v*x-u;for(let F=0;F<p;F++){const C=F*S-l;E.push(C,-R,0),P.push(0,0,1),_.push(F/f),_.push(1-v/m)}}for(let v=0;v<m;v++)for(let R=0;R<f;R++){const F=R+p*v,C=R+p*(v+1),U=R+1+p*(v+1),I=R+1+p*v;M.push(F,C,I),M.push(C,U,I)}this.setIndex(M),this.setAttribute("position",new mn(E,3)),this.setAttribute("normal",new mn(P,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}class ri extends $n{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const m=Math.min(u+f,Math.PI);let p=0;const y=[],S=new ie,x=new ie,M=[],E=[],P=[],_=[];for(let v=0;v<=s;v++){const R=[],F=v/s,C=u+F*f,U=e*Math.cos(C),I=Math.sqrt(e*e-U*U);let k=0;v===0&&u===0?k=.5/t:v===s&&m===Math.PI&&(k=-.5/t);for(let w=0;w<=t;w++){const D=w/t,z=o+D*l;S.x=-I*Math.cos(z),S.y=U,S.z=I*Math.sin(z),E.push(S.x,S.y,S.z),x.copy(S).normalize(),P.push(x.x,x.y,x.z),_.push(D+k,1-F),R.push(p++)}y.push(R)}for(let v=0;v<s;v++)for(let R=0;R<t;R++){const F=y[v][R+1],C=y[v][R],U=y[v+1][R],I=y[v+1][R+1];(v!==0||u>0)&&M.push(F,C,I),(v!==s-1||m<Math.PI)&&M.push(C,U,I)}this.setIndex(M),this.setAttribute("position",new mn(E,3)),this.setAttribute("normal",new mn(P,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wn extends $n{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const m=[],p=[],y=[],S=[],x=new ie,M=new ie,E=new ie;for(let P=0;P<=s;P++){const _=u+P/s*f;for(let v=0;v<=o;v++){const R=v/o*l;M.x=(e+t*Math.cos(_))*Math.cos(R),M.y=(e+t*Math.cos(_))*Math.sin(R),M.z=t*Math.sin(_),p.push(M.x,M.y,M.z),x.x=e*Math.cos(R),x.y=e*Math.sin(R),E.subVectors(M,x).normalize(),y.push(E.x,E.y,E.z),S.push(v/o),S.push(P/s)}}for(let P=1;P<=s;P++)for(let _=1;_<=o;_++){const v=(o+1)*P+_-1,R=(o+1)*(P-1)+_-1,F=(o+1)*(P-1)+_,C=(o+1)*P+_;m.push(v,R,C),m.push(R,F,C)}this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Fo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(K0(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(K0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Ui(r){const e={};for(let t=0;t<r.length;t++){const s=Fo(r[t]);for(const o in s)e[o]=s[o]}return e}function K0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function X_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function iv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}const q_={clone:Fo,merge:Ui};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new Wt().setHex(o.value);break;case"v2":this.uniforms[s].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Dn().fromArray(o.value);break;case"m3":this.uniforms[s].value=new Ct().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Pn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Y_ extends os{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hn extends Ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ip extends si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Hf=new Pn,Z0=new ie,J0=new ie;class rv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=lr,this.map=null,this.mapPass=null,this.matrix=new Pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(Z0),J0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(J0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){Hf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Hf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===Il||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uu=new ie,du=new ko,Jr=new ie;class sv extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pn,this.projectionMatrix=new Pn,this.projectionMatrixInverse=new Pn,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uu,du,Jr),Jr.x===1&&Jr.y===1&&Jr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,du,Jr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(uu,du,Jr),Jr.x===1&&Jr.y===1&&Jr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,du,Jr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ta=new ie,Q0=new zt,eg=new zt;class or extends sv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){ta.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ta.x,ta.y).multiplyScalar(-e/ta.z),ta.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ta.x,ta.y).multiplyScalar(-e/ta.z)}getViewSize(e,t){return this.getViewBounds(e,Q0,eg),t.subVectors(eg,Q0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yu*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*s/p,o*=u.width/m,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class J_ extends rv{constructor(){super(new or(90,1,.5,500)),this.isPointLightShadow=!0}}class fu extends ip{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new J_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rp extends sv{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=y*this.view.offsetY,m=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q_ extends rv{constructor(){super(new rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ey extends ip{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DEFAULT_UP),this.updateMatrix(),this.target=new si,this.shadow=new Q_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ty extends ip{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ao=-90,Ro=1;class ny extends si{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new or(Ao,Ro,e,t);o.layers=this.layers,this.add(o);const l=new or(Ao,Ro,e,t);l.layers=this.layers,this.add(l);const u=new or(Ao,Ro,e,t);u.layers=this.layers,this.add(u);const f=new or(Ao,Ro,e,t);f.layers=this.layers,this.add(f);const m=new or(Ao,Ro,e,t);m.layers=this.layers,this.add(m);const p=new or(Ao,Ro,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===is)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Il)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,y]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const P=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(s,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=P,e.setRenderTarget(s,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(S,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class iy extends or{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const up=class up{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};up.prototype.isMatrix2=!0;let tg=up;function ng(r,e,t,s){const o=ry(s);switch(t){case Wg:return r*e;case qg:return r*e/o.components*o.byteLength;case jh:return r*e/o.components*o.byteLength;case za:return r*e*2/o.components*o.byteLength;case $h:return r*e*2/o.components*o.byteLength;case Xg:return r*e*3/o.components*o.byteLength;case kr:return r*e*4/o.components*o.byteLength;case Yh:return r*e*4/o.components*o.byteLength;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ah:case lh:return Math.max(r,16)*Math.max(e,8)/4;case sh:case oh:return Math.max(r,8)*Math.max(e,8)/2;case ch:case uh:case fh:case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dh:case Mu:case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Ph:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nh:case Ih:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eu:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ry(r){switch(r){case lr:case zg:return{byteLength:1,components:1};case Ll:case Vg:case as:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case ss:case Wh:case ns:return{byteLength:4,components:1};case Gg:case Hg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let r=null,e=!1,t=null,s=null;function o(l,u){s=r.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function sy(r){const e=new WeakMap;function t(f,m){const p=f.array,y=f.usage,S=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,y),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function s(f,m,p){const y=m.array,S=m.updateRanges;if(r.bindBuffer(p,f),S.length===0)r.bufferSubData(p,0,y);else{S.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<S.length;M++){const E=S[x],P=S[M];P.start<=E.start+E.count+1?E.count=Math.max(E.count,P.start+P.count-E.start):(++x,S[x]=P)}S.length=x+1;for(let M=0,E=S.length;M<E;M++){const P=S[M];r.bufferSubData(p,P.start*y.BYTES_PER_ELEMENT,y,P.start,P.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(r.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
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
#endif`,hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_y=`#ifdef USE_IRIDESCENCE
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
#endif`,yy=`#ifdef USE_BUMPMAP
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iS=`PhysicalMaterial material;
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
#endif`,rS=`uniform sampler2D dfgLUT;
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
}`,sS=`
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
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
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gS=`#if defined( USE_POINTS_UV )
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
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
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
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
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
#endif`,PS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,US=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XS=`float getShadowMask() {
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
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,$S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YS=`#ifdef USE_SKINNING
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
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,hM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,MM=`#define LAMBERT
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
}`,EM=`#define LAMBERT
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
}`,wM=`#define MATCAP
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
}`,bM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,PM=`#define STANDARD
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
}`,LM=`#define STANDARD
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
}`,NM=`#define TOON
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
}`,IM=`#define TOON
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
}`,DM=`uniform float size;
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
}`,UM=`uniform vec3 diffuse;
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
}`,OM=`#include <common>
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
}`,FM=`uniform vec3 color;
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
}`,kM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:ay,alphahash_pars_fragment:oy,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:dy,aomap_fragment:fy,aomap_pars_fragment:hy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:vy,bsdfs:xy,iridescence_fragment:_y,bumpmap_pars_fragment:yy,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:wy,color_fragment:by,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Ny,displacementmap_vertex:Iy,emissivemap_fragment:Dy,emissivemap_pars_fragment:Uy,colorspace_fragment:Oy,colorspace_pars_fragment:Fy,envmap_fragment:ky,envmap_common_pars_fragment:By,envmap_pars_fragment:zy,envmap_pars_vertex:Vy,envmap_physical_pars_fragment:Jy,envmap_vertex:Gy,fog_vertex:Hy,fog_pars_vertex:Wy,fog_fragment:Xy,fog_pars_fragment:qy,gradientmap_pars_fragment:jy,lightmap_pars_fragment:$y,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Zy,lights_toon_fragment:Qy,lights_toon_pars_fragment:eS,lights_phong_fragment:tS,lights_phong_pars_fragment:nS,lights_physical_fragment:iS,lights_physical_pars_fragment:rS,lights_fragment_begin:sS,lights_fragment_maps:aS,lights_fragment_end:oS,lightprobes_pars_fragment:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:fS,map_fragment:hS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:xS,morphinstance_vertex:_S,morphcolor_vertex:yS,morphnormal_vertex:SS,morphtarget_pars_vertex:MS,morphtarget_vertex:ES,normal_fragment_begin:wS,normal_fragment_maps:bS,normal_pars_fragment:TS,normal_pars_vertex:AS,normal_vertex:RS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:PS,clearcoat_normal_fragment_maps:LS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:IS,opaque_fragment:DS,packing:US,premultiplied_alpha_fragment:OS,project_vertex:FS,dithering_fragment:kS,dithering_pars_fragment:BS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:HS,shadowmap_vertex:WS,shadowmask_pars_fragment:XS,skinbase_vertex:qS,skinning_pars_vertex:jS,skinning_vertex:$S,skinnormal_vertex:YS,specularmap_fragment:KS,specularmap_pars_fragment:ZS,tonemapping_fragment:JS,tonemapping_pars_fragment:QS,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:aM,background_frag:oM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:dM,depth_vert:fM,depth_frag:hM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:vM,linedashed_vert:xM,linedashed_frag:_M,meshbasic_vert:yM,meshbasic_frag:SM,meshlambert_vert:MM,meshlambert_frag:EM,meshmatcap_vert:wM,meshmatcap_frag:bM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:NM,meshtoon_frag:IM,points_vert:DM,points_frag:UM,shadow_vert:OM,shadow_frag:FM,sprite_vert:kM,sprite_frag:BM},Qe={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},ts={basic:{uniforms:Ui([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ui([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ui([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ui([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ui([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ui([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ui([Qe.points,Qe.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ui([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ui([Qe.common,Qe.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ui([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ui([Qe.sprite,Qe.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Ui([Qe.common,Qe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Ui([Qe.lights,Qe.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ts.physical={uniforms:Ui([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const hu={r:0,b:0,g:0},zM=new Pn,ov=new Ct;ov.set(-1,0,0,0,1,0,0,0,1);function VM(r,e,t,s,o,l){const u=new Wt(0);let f=o===!0?0:1,m,p,y=null,S=0,x=null;function M(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const C=R.backgroundBlurriness>0;F=e.get(F,C)}return F}function E(R){let F=!1;const C=M(R);C===null?_(u,f):C&&C.isColor&&(_(C,1),F=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function P(R,F){const C=M(F);C&&(C.isCubeTexture||C.mapping===Pu)?(p===void 0&&(p=new ve(new Et(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:Fo(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(F.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ov),p.material.toneMapped=Zt.getTransfer(C.colorSpace)!==dn,(y!==C||S!==C.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,y=C,S=C.version,x=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ve(new Va(2,2),new os({name:"BackgroundMaterial",uniforms:Fo(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Zt.getTransfer(C.colorSpace)!==dn,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||S!==C.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,y=C,S=C.version,x=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function _(R,F){R.getRGB(hu,iv(r)),t.buffers.color.setClear(hu.r,hu.g,hu.b,F,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,F=1){u.set(R),f=F,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,_(u,f)},render:E,addToRenderList:P,dispose:v}}function GM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,u=!1;function f(G,Y,ee,W,Z){let fe=!1;const te=S(G,W,ee,Y);l!==te&&(l=te,p(l.object)),fe=M(G,W,ee,Z),fe&&E(G,W,ee,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,C(G,Y,ee,W),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function y(G){return r.deleteVertexArray(G)}function S(G,Y,ee,W){const Z=W.wireframe===!0;let fe=s[Y.id];fe===void 0&&(fe={},s[Y.id]=fe);const te=G.isInstancedMesh===!0?G.id:0;let ne=fe[te];ne===void 0&&(ne={},fe[te]=ne);let Q=ne[ee.id];Q===void 0&&(Q={},ne[ee.id]=Q);let $=Q[Z];return $===void 0&&($=x(m()),Q[Z]=$),$}function x(G){const Y=[],ee=[],W=[];for(let Z=0;Z<t;Z++)Y[Z]=0,ee[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ee,attributeDivisors:W,object:G,attributes:{},index:null}}function M(G,Y,ee,W){const Z=l.attributes,fe=Y.attributes;let te=0;const ne=ee.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const T=Z[Q];let le=fe[Q];if(le===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(le=G.instanceColor)),T===void 0||T.attribute!==le||le&&T.data!==le.data)return!0;te++}return l.attributesNum!==te||l.index!==W}function E(G,Y,ee,W){const Z={},fe=Y.attributes;let te=0;const ne=ee.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let T=fe[Q];T===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(T=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(T=G.instanceColor));const le={};le.attribute=T,T&&T.data&&(le.data=T.data),Z[Q]=le,te++}l.attributes=Z,l.attributesNum=te,l.index=W}function P(){const G=l.newAttributes;for(let Y=0,ee=G.length;Y<ee;Y++)G[Y]=0}function _(G){v(G,0)}function v(G,Y){const ee=l.newAttributes,W=l.enabledAttributes,Z=l.attributeDivisors;ee[G]=1,W[G]===0&&(r.enableVertexAttribArray(G),W[G]=1),Z[G]!==Y&&(r.vertexAttribDivisor(G,Y),Z[G]=Y)}function R(){const G=l.newAttributes,Y=l.enabledAttributes;for(let ee=0,W=Y.length;ee<W;ee++)Y[ee]!==G[ee]&&(r.disableVertexAttribArray(ee),Y[ee]=0)}function F(G,Y,ee,W,Z,fe,te){te===!0?r.vertexAttribIPointer(G,Y,ee,Z,fe):r.vertexAttribPointer(G,Y,ee,W,Z,fe)}function C(G,Y,ee,W){P();const Z=W.attributes,fe=ee.getAttributes(),te=Y.defaultAttributeValues;for(const ne in fe){const Q=fe[ne];if(Q.location>=0){let $=Z[ne];if($===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&($=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&($=G.instanceColor)),$!==void 0){const T=$.normalized,le=$.itemSize,Se=e.get($);if(Se===void 0)continue;const Ie=Se.buffer,je=Se.type,Ue=Se.bytesPerElement,re=je===r.INT||je===r.UNSIGNED_INT||$.gpuType===Wh;if($.isInterleavedBufferAttribute){const he=$.data,Re=he.stride,Ye=$.offset;if(he.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Q.locationSize;Oe++)v(Q.location+Oe,he.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<Q.locationSize;Oe++)_(Q.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Oe=0;Oe<Q.locationSize;Oe++)F(Q.location+Oe,le/Q.locationSize,je,T,Re*Ue,(Ye+le/Q.locationSize*Oe)*Ue,re)}else{if($.isInstancedBufferAttribute){for(let he=0;he<Q.locationSize;he++)v(Q.location+he,$.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let he=0;he<Q.locationSize;he++)_(Q.location+he);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let he=0;he<Q.locationSize;he++)F(Q.location+he,le/Q.locationSize,je,T,le*Ue,le/Q.locationSize*he*Ue,re)}}else if(te!==void 0){const T=te[ne];if(T!==void 0)switch(T.length){case 2:r.vertexAttrib2fv(Q.location,T);break;case 3:r.vertexAttrib3fv(Q.location,T);break;case 4:r.vertexAttrib4fv(Q.location,T);break;default:r.vertexAttrib1fv(Q.location,T)}}}}R()}function U(){D();for(const G in s){const Y=s[G];for(const ee in Y){const W=Y[ee];for(const Z in W){const fe=W[Z];for(const te in fe)y(fe[te].object),delete fe[te];delete W[Z]}}delete s[G]}}function I(G){if(s[G.id]===void 0)return;const Y=s[G.id];for(const ee in Y){const W=Y[ee];for(const Z in W){const fe=W[Z];for(const te in fe)y(fe[te].object),delete fe[te];delete W[Z]}}delete s[G.id]}function k(G){for(const Y in s){const ee=s[Y];for(const W in ee){const Z=ee[W];if(Z[G.id]===void 0)continue;const fe=Z[G.id];for(const te in fe)y(fe[te].object),delete fe[te];delete Z[G.id]}}}function w(G){for(const Y in s){const ee=s[Y],W=G.isInstancedMesh===!0?G.id:0,Z=ee[W];if(Z!==void 0){for(const fe in Z){const te=Z[fe];for(const ne in te)y(te[ne].object),delete te[ne];delete Z[fe]}delete ee[W],Object.keys(ee).length===0&&delete s[Y]}}}function D(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:P,enableAttribute:_,disableUnusedAttributes:R}}function HM(r,e,t){let s;function o(m){s=m}function l(m,p){r.drawArrays(s,m,p),t.update(p,s,1)}function u(m,p,y){y!==0&&(r.drawArraysInstanced(s,m,p,y),t.update(p,s,y))}function f(m,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,y);let x=0;for(let M=0;M<y;M++)x+=p[M];t.update(x,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function WM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==kr&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==lr&&k!==ns&&!w&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const y=m(p);y!==p&&(wt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:P,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:C,maxSamples:U,samples:I}}function XM(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ra,f=new Ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||s!==0||o;return o=x,s=S.length,M},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=y(S,x,0)},this.setState=function(S,x,M){const E=S.clippingPlanes,P=S.clipIntersection,_=S.clipShadows,v=r.get(S);if(!o||E===null||E.length===0||l&&!_)l?y(null):p();else{const R=l?0:s,F=R*4;let C=v.clippingState||null;m.value=C,C=y(E,x,F,M);for(let U=0;U!==F;++U)C[U]=t[U];v.clippingState=C,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(S,x,M,E){const P=S!==null?S.length:0;let _=null;if(P!==0){if(_=m.value,E!==!0||_===null){const v=M+P*4,R=x.matrixWorldInverse;f.getNormalMatrix(R),(_===null||_.length<v)&&(_=new Float32Array(v));for(let F=0,C=M;F!==P;++F,C+=4)u.copy(S[F]).applyMatrix4(R,f),u.normal.toArray(_,C),_[C+3]=u.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,_}}const Io=4,qM=6,jM=20,$M=256,wl=new rp,ig=new Wt;let Wf=null,Xf=0,qf=0,jf=!1;const YM=new ie,Ia=new ie;class rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=YM}=l;Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wf,Xf,qf),this._renderer.xr.enabled=jf,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ka||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:as,format:kr,colorSpace:wu,depthBuffer:!1},o=sg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=KM(l)),this._blurMaterial=JM(l,e,t),this._ggxMaterial=ZM(l,e,t)}return o}_compileMaterial(e){const t=new ve(new $n,e);this._renderer.compile(t,wl)}_sceneToCubeUV(e,t,s,o,l){const m=new or(90,1,t,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(ig),S.toneMapping=rs,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Et,new Ht({name:"PMREM.Background",side:Yi,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,_=P.material;let v=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,v=!0):(_.color.copy(ig),v=!0);for(let F=0;F<6;F++){const C=F%3;C===0?(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+y[F],l.y,l.z)):C===1?(m.up.set(0,0,p[F]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+y[F],l.z)):(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+y[F]));const U=this._cubeSize;Co(o,C*U,F>2?U:0,U,U),S.setRenderTarget(o),v&&S.render(P,m),S.render(e,m)}S.toneMapping=M,S.autoClear=x,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ka||e.mapping===Oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ag());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;Co(t,0,0,3*m,2*m),s.setRenderTarget(t),s.render(u,wl)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-y*y),x=p*1.25,M=S*x,{_lodMax:E}=this,P=this._sizeLods[s],_=3*P*(s>E-Io?s-E+Io:0),v=4*(this._cubeSize-P);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-t,Co(l,_,v,3*P,2*P),o.setRenderTarget(l),o.render(f,wl),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-s,Co(e,_,v,3*P,2*P),o.setRenderTarget(e),o.render(f,wl)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,u),this._blurPass(l,e,s,s,u)}_blurPass(e,t,s,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const y=this._sizeLods[o],S=3*y*(o>this._lodMax-Io?o-this._lodMax+Io:0),x=4*(this._cubeSize-y);Co(t,S,x,3*y,2*y),u.setRenderTarget(t),u.render(m,wl)}}function KM(r){const e=[],t=[];let s=r;const o=r-Io+1+qM;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);const f=1/(u-2),m=-f,p=1+f,y=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,x=6,M=3,E=new Float32Array(M*x*S),P=new Float32Array(M*x*S);for(let v=0;v<S;v++){const R=v%3*2/3-1,F=v>2?0:-1,C=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];E.set(C,M*x*v);for(let U=0;U<x;U++){const I=y[U*2]*2-1,k=y[U*2+1]*2-1;v===0?Ia.set(1,k,I):v===1?Ia.set(-I,1,-k):v===2?Ia.set(-I,k,1):v===3?Ia.set(-1,k,-I):v===4?Ia.set(-I,-1,k):Ia.set(I,k,-1),Ia.toArray(P,(v*x+U)*M)}}const _=new $n;_.setAttribute("position",new zr(E,M)),_.setAttribute("outputDirection",new zr(P,M)),t.push(new ve(_,null)),s>Io&&s--}return{lodMeshes:t,sizeLods:e}}function sg(r,e,t){const s=new Br(r,e,t);return s.texture.mapping=Pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Co(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function ZM(r,e,t){return new os({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$M,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function JM(r,e,t){return new os({name:"SphericalGaussianBlur",defines:{SAMPLES:jM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ag(){return new os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function og(){return new os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lv extends Br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new tv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Et(5,5,5),l=new os({name:"CubemapFromEquirect",uniforms:Fo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yi,blending:Cs});l.uniforms.tEquirect.value=t;const u=new ve(o,l),f=t.minFilter;return t.minFilter===Ua&&(t.minFilter=Ti),new ny(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function QM(r){let e=new WeakMap,t=new WeakMap,s=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===gf||M===vf)if(e.has(x)){const E=e.get(x).texture;return f(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const P=new lv(E.height);return P.fromEquirectangularTexture(r,x),e.set(x,P),x.addEventListener("dispose",p),f(P.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,E=M===gf||M===vf,P=M===ka||M===Oo;if(E||P){let _=t.get(x);const v=_!==void 0?_.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==v)return s===null&&(s=new rg(r)),_=E?s.fromEquirectangular(x,_):s.fromCubemap(x,_),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),_.texture;if(_!==void 0)return _.texture;{const R=x.image;return E&&R&&R.height>0||P&&R&&m(R)?(s===null&&(s=new rg(r)),_=E?s.fromEquirectangular(x):s.fromCubemap(x),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),x.addEventListener("dispose",y),_.texture):null}}}return x}function f(x,M){return M===gf?x.mapping=ka:M===vf&&(x.mapping=Oo),x}function m(x){let M=0;const E=6;for(let P=0;P<E;P++)x[P]!==void 0&&M++;return M===E}function p(x){const M=x.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function S(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:S}}function e1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Do("WebGLRenderer: "+s+" extension not supported."),o}}}function t1(r,e,t,s){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function m(S){const x=S.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,E=S.attributes.position;let P=0;if(E===void 0)return;if(M!==null){const R=M.array;P=M.version;for(let F=0,C=R.length;F<C;F+=3){const U=R[F+0],I=R[F+1],k=R[F+2];x.push(U,I,I,k,k,U)}}else{const R=E.array;P=E.version;for(let F=0,C=R.length/3-1;F<C;F+=3){const U=F+0,I=F+1,k=F+2;x.push(U,I,I,k,k,U)}}const _=new(E.count>=65535?Jg:Zg)(x,1);_.version=P;const v=l.get(S);v&&e.remove(v),l.set(S,_)}function y(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:m,getWireframeAttribute:y}}function n1(r,e,t){let s;function o(S){s=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function m(S,x){r.drawElements(s,x,l,S*u),t.update(x,s,1)}function p(S,x,M){M!==0&&(r.drawElementsInstanced(s,x,l,S*u,M),t.update(x,s,M))}function y(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,l,S,0,M);let P=0;for(let _=0;_<M;_++)P+=x[_];t.update(P,s,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=y}function i1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:on("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function r1(r,e,t){const s=new WeakMap,o=new Dn;function l(u,f,m){const p=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=y!==void 0?y.length:0;let x=s.get(f);if(x===void 0||x.count!==S){let z=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var M=z;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),P===!0&&(C=2),_===!0&&(C=3);let U=f.attributes.position.count*C,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const k=new Float32Array(U*I*4*S),w=new $g(k,U,I,S);w.type=ns,w.needsUpdate=!0;const D=C*4;for(let G=0;G<S;G++){const Y=v[G],ee=R[G],W=F[G],Z=U*I*4*G;for(let fe=0;fe<Y.count;fe++){const te=fe*D;E===!0&&(o.fromBufferAttribute(Y,fe),k[Z+te+0]=o.x,k[Z+te+1]=o.y,k[Z+te+2]=o.z,k[Z+te+3]=0),P===!0&&(o.fromBufferAttribute(ee,fe),k[Z+te+4]=o.x,k[Z+te+5]=o.y,k[Z+te+6]=o.z,k[Z+te+7]=0),_===!0&&(o.fromBufferAttribute(W,fe),k[Z+te+8]=o.x,k[Z+te+9]=o.y,k[Z+te+10]=o.z,k[Z+te+11]=W.itemSize===4?o.w:1)}}x={count:S,texture:w,size:new zt(U,I)},s.set(f,x),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<p.length;_++)E+=p[_];const P=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",P),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function s1(r,e,t,s,o){let l=new WeakMap;function u(p){const y=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==y&&(e.update(x),l.set(x,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==y&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,y))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==y&&(M.update(),l.set(M,y))}return x}function f(){l=new WeakMap}function m(p){const y=p.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:f}}const a1={[Ig]:"LINEAR_TONE_MAPPING",[Dg]:"REINHARD_TONE_MAPPING",[Ug]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Fg]:"AGX_TONE_MAPPING",[kg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function o1(r,e,t,s,o,l){const u=new Br(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new $n;p.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new mn([0,2,0,0,2,0],2));const y=new Y_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new ve(p,y),x=new rp(-1,1,1,-1,0,1);let M=null,E=null,P=!1,_,v=null,R=[],F=!1;this.setSize=function(C,U){u.setSize(C,U),f!==null&&f.setSize(C,U),m!==null&&m.setSize(C,U);for(let I=0;I<R.length;I++){const k=R[I];k.setSize&&k.setSize(C,U)}},this.setEffects=function(C){R=C,F=R.length>0&&R[0].isRenderPass===!0;const U=u.width,I=u.height;R.length>0&&f===null&&(f=new Br(U,I,{type:as,depthBuffer:!1,stencilBuffer:!1}),m=new Br(U,I,{type:as,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<R.length;k++){const w=R[k];w.setSize&&w.setSize(U,I)}},this.begin=function(C,U){if(P||C.toneMapping===rs&&R.length===0)return!1;if(v=U,U!==null){const I=U.width,k=U.height;(u.width!==I||u.height!==k)&&this.setSize(I,k)}return F===!1&&C.setRenderTarget(u),_=C.toneMapping,C.toneMapping=rs,!0},this.hasRenderPass=function(){return F},this.end=function(C,U){C.toneMapping=_,P=!0;let I=u,k=f;for(let w=0;w<R.length;w++){const D=R[w];D.enabled!==!1&&(D.render(C,k,I,U),D.needsSwap!==!1&&(I=k,k=k===f?m:f))}if(M!==C.outputColorSpace||E!==C.toneMapping){M=C.outputColorSpace,E=C.toneMapping,y.defines={},Zt.getTransfer(M)===dn&&(y.defines.SRGB_TRANSFER="");const w=a1[E];w&&(y.defines[w]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(v),C.render(S,x),v=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),y.dispose()}}const cv=new Ai,kh=new Dl(1,1),uv=new $g,dv=new b_,fv=new tv,lg=[],cg=[],ug=new Float32Array(16),dg=new Float32Array(9),fg=new Float32Array(4);function Bo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=lg[o];if(l===void 0&&(l=new Float32Array(o),lg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function Yn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Kn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Du(r,e){let t=cg[e];t===void 0&&(t=new Int32Array(e),cg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function l1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2fv(this.addr,e),Kn(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;r.uniform3fv(this.addr,e),Kn(t,e)}}function d1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4fv(this.addr,e),Kn(t,e)}}function f1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;fg.set(s),r.uniformMatrix2fv(this.addr,!1,fg),Kn(t,s)}}function h1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;dg.set(s),r.uniformMatrix3fv(this.addr,!1,dg),Kn(t,s)}}function p1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;ug.set(s),r.uniformMatrix4fv(this.addr,!1,ug),Kn(t,s)}}function m1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function g1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2iv(this.addr,e),Kn(t,e)}}function v1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;r.uniform3iv(this.addr,e),Kn(t,e)}}function x1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4iv(this.addr,e),Kn(t,e)}}function _1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2uiv(this.addr,e),Kn(t,e)}}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;r.uniform3uiv(this.addr,e),Kn(t,e)}}function M1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4uiv(this.addr,e),Kn(t,e)}}function E1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(kh.compareFunction=t.isReversedDepthBuffer()?Zh:Kh,l=kh):l=cv,t.setTexture2D(e||l,o)}function w1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||dv,o)}function b1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||fv,o)}function T1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||uv,o)}function A1(r){switch(r){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return d1;case 35674:return f1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return _1;case 36294:return y1;case 36295:return S1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return T1}}function R1(r,e){r.uniform1fv(this.addr,e)}function C1(r,e){const t=Bo(e,this.size,2);r.uniform2fv(this.addr,t)}function P1(r,e){const t=Bo(e,this.size,3);r.uniform3fv(this.addr,t)}function L1(r,e){const t=Bo(e,this.size,4);r.uniform4fv(this.addr,t)}function N1(r,e){const t=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function I1(r,e){const t=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function D1(r,e){const t=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function U1(r,e){r.uniform1iv(this.addr,e)}function O1(r,e){r.uniform2iv(this.addr,e)}function F1(r,e){r.uniform3iv(this.addr,e)}function k1(r,e){r.uniform4iv(this.addr,e)}function B1(r,e){r.uniform1uiv(this.addr,e)}function z1(r,e){r.uniform2uiv(this.addr,e)}function V1(r,e){r.uniform3uiv(this.addr,e)}function G1(r,e){r.uniform4uiv(this.addr,e)}function H1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=kh:u=cv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function W1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||dv,l[u])}function X1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||fv,l[u])}function q1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||uv,l[u])}function j1(r){switch(r){case 5126:return R1;case 35664:return C1;case 35665:return P1;case 35666:return L1;case 35674:return N1;case 35675:return I1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return O1;case 35668:case 35672:return F1;case 35669:case 35673:return k1;case 5125:return B1;case 36294:return z1;case 36295:return V1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}class $1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=A1(t.type)}}class Y1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j1(t.type)}}class K1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const $f=/(\w+)(\])?(\[|\.)?/g;function hg(r,e){r.seq.push(e),r.map[e.id]=e}function Z1(r,e,t){const s=r.name,o=s.length;for($f.lastIndex=0;;){const l=$f.exec(s),u=$f.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){hg(t,p===void 0?new $1(f,r,e):new Y1(f,r,e));break}else{let S=t.map[f];S===void 0&&(S=new K1(f),hg(t,S)),t=S}}}class Su{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);Z1(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=s[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function pg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const J1=37297;let Q1=0;function eE(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const mg=new Ct;function tE(r){Zt._getMatrix(mg,Zt.workingColorSpace,r);const e=`mat3( ${mg.elements.map(t=>t.toFixed(4))} )`;switch(Zt.getTransfer(r)){case bu:return[e,"LinearTransferOETF"];case dn:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+eE(r.getShaderSource(e),f)}else return l}function nE(r,e){const t=tE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iE={[Ig]:"Linear",[Dg]:"Reinhard",[Ug]:"Cineon",[Hh]:"ACESFilmic",[Fg]:"AgX",[kg]:"Neutral",[Og]:"Custom"};function rE(r,e){const t=iE[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pu=new ie;function sE(){Zt.getLuminanceCoefficients(pu);const r=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function oE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function lE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Al(r){return r!==""}function vg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(r){return r.replace(cE,dE)}const uE=new Map;function dE(r,e){let t=Ft[e];if(t===void 0){const s=uE.get(e);if(s!==void 0)t=Ft[s],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bh(t)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(r){return r.replace(fE,hE)}function hE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function yg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const pE={[mu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function mE(r){return pE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gE={[ka]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function vE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":gE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xE={[Oo]:"ENVMAP_MODE_REFRACTION"};function _E(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yE={[Ng]:"ENVMAP_BLENDING_MULTIPLY",[n_]:"ENVMAP_BLENDING_MIX",[i_]:"ENVMAP_BLENDING_ADD"};function SE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yE[r.combine]||"ENVMAP_BLENDING_NONE"}function ME(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function EE(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=mE(t),p=vE(t),y=_E(t),S=SE(t),x=ME(t),M=aE(t),E=oE(l),P=o.createProgram();let _,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Al).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Al).join(`
`),v.length>0&&(v+=`
`)):(_=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),v=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+y:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?Ft.tonemapping_pars_fragment:"",t.toneMapping!==rs?rE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,nE("linearToOutputTexel",t.outputColorSpace),sE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Al).join(`
`)),u=Bh(u),u=vg(u,t),u=xg(u,t),f=Bh(f),f=vg(f,t),f=xg(f,t),u=_g(u),f=_g(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===A0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===A0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=R+_+u,C=R+v+f,U=pg(o,o.VERTEX_SHADER,F),I=pg(o,o.FRAGMENT_SHADER,C);o.attachShader(P,U),o.attachShader(P,I),t.index0AttributeName!==void 0?o.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function k(G){if(r.debug.checkShaderErrors){const Y=o.getProgramInfoLog(P)||"",ee=o.getShaderInfoLog(U)||"",W=o.getShaderInfoLog(I)||"",Z=Y.trim(),fe=ee.trim(),te=W.trim();let ne=!0,Q=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,P,U,I);else{const $=gg(o,U,"vertex"),T=gg(o,I,"fragment");on("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+$+`
`+T)}else Z!==""?wt("WebGLProgram: Program Info Log:",Z):(fe===""||te==="")&&(Q=!1);Q&&(G.diagnostics={runnable:ne,programLog:Z,vertexShader:{log:fe,prefix:_},fragmentShader:{log:te,prefix:v}})}o.deleteShader(U),o.deleteShader(I),w=new Su(o,P),D=lE(o,P)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let D;this.getAttributes=function(){return D===void 0&&k(this),D};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(P,J1)),z},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=U,this.fragmentShader=I,this}let wE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new TE(e),t.set(e,s)),s}}class TE{constructor(e){this.id=wE++,this.code=e,this.usedTimes=0}}function AE(r){return r===za||r===Mu||r===Eu}function RE(r,e,t,s,o,l){const u=new Yg,f=new bE,m=new Set,p=[],y=new Map,S=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return m.add(w),w===0?"uv":`uv${w}`}function P(w,D,z,G,Y,ee){const W=G.fog,Z=Y.geometry,fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ne=e.get(w.envMap||fe,te),Q=ne&&ne.mapping===Pu?ne.image.height:null,$=M[w.type];w.precision!==null&&(x=s.getMaxPrecision(w.precision),x!==w.precision&&wt("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const T=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=T!==void 0?T.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ie,je,Ue,re;if($){const Te=ts[$];Ie=Te.vertexShader,je=Te.fragmentShader}else{Ie=w.vertexShader,je=w.fragmentShader;const Te=f.getVertexShaderStage(w),tt=f.getFragmentShaderStage(w);f.update(w,Te,tt),Ue=Te.id,re=tt.id}const he=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ye=Y.isInstancedMesh===!0,Oe=Y.isBatchedMesh===!0,ft=!!w.map,kt=!!w.matcap,pt=!!ne,ht=!!w.aoMap,At=!!w.lightMap,gt=!!w.bumpMap&&w.wireframe===!1,Xt=!!w.normalMap,Ut=!!w.displacementMap,en=!!w.emissiveMap,yt=!!w.metalnessMap,qt=!!w.roughnessMap,X=w.anisotropy>0,fn=w.clearcoat>0,Tt=w.dispersion>0,B=w.retroreflectivity>0,b=w.iridescence>0,K=w.sheen>0,se=w.transmission>0,de=X&&!!w.anisotropyMap,Ne=fn&&!!w.clearcoatMap,Ae=fn&&!!w.clearcoatNormalMap,xe=fn&&!!w.clearcoatRoughnessMap,Me=b&&!!w.iridescenceMap,Ve=b&&!!w.iridescenceThicknessMap,et=K&&!!w.sheenColorMap,Be=K&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,nt=!!w.specularColorMap,ot=!!w.specularIntensityMap,lt=se&&!!w.transmissionMap,q=se&&!!w.thicknessMap,De=!!w.gradientMap,ye=!!w.alphaMap,Ee=w.alphaTest>0,ge=!!w.alphaHash,we=!!w.extensions;let ze=rs;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ze=r.toneMapping);const Ke={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:Ie,fragmentShader:je,defines:w.defines,customVertexShaderID:Ue,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Oe,batchingColor:Oe&&Y._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Y.instanceColor!==null,instancingMorph:Ye&&Y.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:kt,envMap:pt,envMapMode:pt&&ne.mapping,envMapCubeUVHeight:Q,aoMap:ht,lightMap:At,bumpMap:gt,normalMap:Xt,displacementMap:Ut,emissiveMap:en,normalMapObjectSpace:Xt&&w.normalMapType===a_,normalMapTangentSpace:Xt&&w.normalMapType===Uh,packedNormalMap:Xt&&w.normalMapType===Uh&&AE(w.normalMap.format),metalnessMap:yt,roughnessMap:qt,anisotropy:X,anisotropyMap:de,clearcoat:fn,clearcoatMap:Ne,clearcoatNormalMap:Ae,clearcoatRoughnessMap:xe,dispersion:Tt,retroreflection:B,iridescence:b,iridescenceMap:Me,iridescenceThicknessMap:Ve,sheen:K,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:Fe,specularColorMap:nt,specularIntensityMap:ot,transmission:se,transmissionMap:lt,thicknessMap:q,gradientMap:De,opaque:w.transparent===!1&&w.blending===Cl&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ee,alphaHash:ge,combine:w.combine,mapUv:ft&&E(w.map.channel),aoMapUv:ht&&E(w.aoMap.channel),lightMapUv:At&&E(w.lightMap.channel),bumpMapUv:gt&&E(w.bumpMap.channel),normalMapUv:Xt&&E(w.normalMap.channel),displacementMapUv:Ut&&E(w.displacementMap.channel),emissiveMapUv:en&&E(w.emissiveMap.channel),metalnessMapUv:yt&&E(w.metalnessMap.channel),roughnessMapUv:qt&&E(w.roughnessMap.channel),anisotropyMapUv:de&&E(w.anisotropyMap.channel),clearcoatMapUv:Ne&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(w.sheenRoughnessMap.channel),specularMapUv:Fe&&E(w.specularMap.channel),specularColorMapUv:nt&&E(w.specularColorMap.channel),specularIntensityMapUv:ot&&E(w.specularIntensityMap.channel),transmissionMapUv:lt&&E(w.transmissionMap.channel),thicknessMapUv:q&&E(w.thicknessMap.channel),alphaMapUv:ye&&E(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xt||X),vertexNormals:!!Z.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Z.attributes.uv&&(ft||ye),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Z.attributes.normal===void 0&&Xt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Re,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Se,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===dn,decodeVideoTextureEmissive:en&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===dn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$i,flipSided:w.side===Yi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:we&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&w.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function _(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)D.push(z),D.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(v(D,w),R(D,w),D.push(r.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function v(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numSunLights),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numSunLightShadows),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function R(w,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function F(w){const D=M[w.type];let z;if(D){const G=ts[D];z=q_.clone(G.uniforms)}else z=w.uniforms;return z}function C(w,D){let z=y.get(D);return z!==void 0?++z.usedTimes:(z=new EE(r,D,w,o),p.push(z),y.set(D,z)),z}function U(w){if(--w.usedTimes===0){const D=p.indexOf(w);p[D]=p[p.length-1],p.pop(),y.delete(w.cacheKey),w.destroy()}}function I(w){f.remove(w)}function k(){f.dispose()}return{getParameters:P,getProgramCacheKey:_,getUniforms:F,acquireProgram:C,releaseProgram:U,releaseShaderCache:I,programs:p,dispose:k}}function CE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,m){r.get(u)[f]=m}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function PE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Sg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,E,P,_,v){let R=r[e];return R===void 0?(R={id:x.id,object:x,geometry:M,material:E,materialVariant:u(x),groupOrder:P,renderOrder:x.renderOrder,z:_,group:v},r[e]=R):(R.id=x.id,R.object=x,R.geometry=M,R.material=E,R.materialVariant=u(x),R.groupOrder=P,R.renderOrder=x.renderOrder,R.z=_,R.group=v),e++,R}function m(x,M,E,P,_,v,R){R.reversedDepth===!0&&(_=-_);const F=f(x,M,E,P,_,v);E.transmission>0?s.push(F):E.transparent===!0?o.push(F):t.push(F)}function p(x,M,E,P,_,v){const R=f(x,M,E,P,_,v);E.transmission>0?s.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function y(x,M){t.length>1&&t.sort(x||PE),s.length>1&&s.sort(M||Sg),o.length>1&&o.sort(M||Sg)}function S(){for(let x=e,M=r.length;x<M;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:m,unshift:p,finish:S,sort:y}}function LE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Mg,r.set(s,[u])):o>=l.length?(u=new Mg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function NE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new Wt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":t={color:new Wt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function IE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let DE=0;function UE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OE(r){const e=new NE,t=IE(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new Pn,u=new Pn;function f(p){let y=0,S=0,x=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let M=0,E=0,P=0,_=0,v=0,R=0,F=0,C=0,U=0,I=0,k=0,w=0,D=0,z=0;p.sort(UE);for(let Y=0,ee=p.length;Y<ee;Y++){const W=p[Y],Z=W.color,fe=W.intensity,te=W.distance;let ne=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===za?ne=W.shadow.map.texture:ne=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)y+=Z.r*fe,S+=Z.g*fe,x+=Z.b*fe;else if(W.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(W.sh.coefficients[Q],fe);z++}else if(W.isSunLight){const Q=e.get(W);if(Q.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const $=W.shadow,T=t.get(W);T.shadowIntensity=$.intensity,T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),s.sunShadow[E]=T,s.sunShadowMap[E]=ne;const le=$.getViewportCount();for(let Se=0;Se<le;Se++)s.sunShadowMatrix[P+Se]=$.getMatrix(Se),s.sunShadowCascade[P+Se]=$._cascadeData[Se];P+=le,E++}s.sun[M]=Q,M++}else if(W.isDirectionalLight){const Q=e.get(W);if(Q.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const $=W.shadow,T=t.get(W);T.shadowIntensity=$.intensity,T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,s.directionalShadow[_]=T,s.directionalShadowMap[_]=ne,s.directionalShadowMatrix[_]=W.shadow.matrix,U++}s.directional[_]=Q,_++}else if(W.isSpotLight){const Q=e.get(W);Q.position.setFromMatrixPosition(W.matrixWorld),Q.color.copy(Z).multiplyScalar(fe),Q.distance=te,Q.coneCos=Math.cos(W.angle),Q.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Q.decay=W.decay,s.spot[R]=Q;const $=W.shadow;if(W.map&&(s.spotLightMap[w]=W.map,w++,$.updateMatrices(W),W.castShadow&&D++),s.spotLightMatrix[R]=$.matrix,W.castShadow){const T=t.get(W);T.shadowIntensity=$.intensity,T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,s.spotShadow[R]=T,s.spotShadowMap[R]=ne,k++}R++}else if(W.isRectAreaLight){const Q=e.get(W);Q.color.copy(Z).multiplyScalar(fe),Q.halfWidth.set(W.width*.5,0,0),Q.halfHeight.set(0,W.height*.5,0),s.rectArea[F]=Q,F++}else if(W.isPointLight){const Q=e.get(W);if(Q.color.copy(W.color).multiplyScalar(W.intensity),Q.distance=W.distance,Q.decay=W.decay,W.castShadow){const $=W.shadow,T=t.get(W);T.shadowIntensity=$.intensity,T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,T.shadowCameraNear=$.camera.near,T.shadowCameraFar=$.camera.far,s.pointShadow[v]=T,s.pointShadowMap[v]=ne,s.pointShadowMatrix[v]=W.shadow.matrix,I++}s.point[v]=Q,v++}else if(W.isHemisphereLight){const Q=e.get(W);Q.skyColor.copy(W.color).multiplyScalar(fe),Q.groundColor.copy(W.groundColor).multiplyScalar(fe),s.hemi[C]=Q,C++}}F>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Qe.LTC_FLOAT_1,s.rectAreaLTC2=Qe.LTC_FLOAT_2):(s.rectAreaLTC1=Qe.LTC_HALF_1,s.rectAreaLTC2=Qe.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=S,s.ambient[2]=x;const G=s.hash;(G.sunLength!==M||G.directionalLength!==_||G.pointLength!==v||G.spotLength!==R||G.rectAreaLength!==F||G.hemiLength!==C||G.numSunShadows!==E||G.numDirectionalShadows!==U||G.numPointShadows!==I||G.numSpotShadows!==k||G.numSpotMaps!==w||G.numLightProbes!==z)&&(s.sun.length=M,s.directional.length=_,s.spot.length=R,s.rectArea.length=F,s.point.length=v,s.hemi.length=C,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=P,s.sunShadowCascade.length=P,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=I,s.pointShadowMap.length=I,s.pointShadowMatrix.length=I,s.spotShadow.length=k,s.spotShadowMap.length=k,s.spotLightMatrix.length=k+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=z,G.sunLength=M,G.directionalLength=_,G.pointLength=v,G.spotLength=R,G.rectAreaLength=F,G.hemiLength=C,G.numSunShadows=E,G.numDirectionalShadows=U,G.numPointShadows=I,G.numSpotShadows=k,G.numSpotMaps=w,G.numLightProbes=z,s.version=DE++)}function m(p,y){let S=0,x=0,M=0,E=0,P=0,_=0;const v=y.matrixWorldInverse;for(let R=0,F=p.length;R<F;R++){const C=p[R];if(C.isSunLight){const U=s.sun[S];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(v),S++}else if(C.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),x++}else if(C.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),E++}else if(C.isRectAreaLight){const U=s.rectArea[P];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(v),u.identity(),l.copy(C.matrixWorld),l.premultiply(v),u.extractRotation(l),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),P++}else if(C.isPointLight){const U=s.point[M];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(v),M++}else if(C.isHemisphereLight){const U=s.hemi[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(v),_++}}}return{setup:f,setupView:m,state:s}}function Eg(r){const e=new OE(r),t=[],s=[],o=[];function l(x){S.camera=x,t.length=0,s.length=0,o.length=0}function u(x){t.push(x)}function f(x){s.push(x)}function m(x){o.push(x)}function p(){e.setup(t)}function y(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:y,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function FE(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Eg(r),e.set(o,[f])):l>=u.length?(f=new Eg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const kE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
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
}`,zE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],VE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],wg=new Pn,bl=new ie,Yf=new ie;function GE(r,e,t){let s=new tp;const o=new zt,l=new zt,u=new Dn,f=new K_,m=new Z_,p={},y=t.maxTextureSize,S={[Fa]:Yi,[Yi]:Fa,[$i]:$i},x=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:kE,fragmentShader:BE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new ve(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let v=this.type;this.render=function(I,k,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;this.type===Fx&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mu);const D=r.getRenderTarget(),z=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Cs),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ee=v!==this.type;ee&&k.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Z=>Z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Z=I.length;W<Z;W++){const fe=I[W],te=fe.shadow;if(te===void 0){wt("WebGLShadowMap:",fe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const ne=te.getFrameExtents();o.multiply(ne),l.copy(te.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/ne.x),o.x=l.x*ne.x,te.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/ne.y),o.y=l.y*ne.y,te.mapSize.y=l.y));const Q=r.state.buffers.depth.getReversed();if(te.camera._reversedDepth=Q,te.map===null||ee===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Tl){if(fe.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Br(o.x,o.y,{format:za,type:as,minFilter:Ti,magFilter:Ti,generateMipmaps:!1}),te.map.texture.name=fe.name+".shadowMap",te.map.depthTexture=new Dl(o.x,o.y,ns),te.map.depthTexture.name=fe.name+".shadowMapDepth",te.map.depthTexture.format=Ls,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=mi,te.map.depthTexture.magFilter=mi}else fe.isPointLight?(te.map=new lv(o.x),te.map.depthTexture=new W_(o.x,ss)):(te.map=new Br(o.x,o.y),te.map.depthTexture=new Dl(o.x,o.y,ss)),te.map.depthTexture.name=fe.name+".shadowMap",te.map.depthTexture.format=Ls,this.type===mu?(te.map.depthTexture.compareFunction=Q?Zh:Kh,te.map.depthTexture.minFilter=Ti,te.map.depthTexture.magFilter=Ti):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=mi,te.map.depthTexture.magFilter=mi);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==o.x||te.map.height!==o.y)&&te.map.setSize(o.x,o.y);const $=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();fe.isPointLight!==!0&&te.updateMatrices(fe,w);for(let T=0;T<$;T++){const le=te.getCamera(T);if(fe.isPointLight){const Se=te.camera,Ie=te.matrix,je=fe.distance||Se.far;je!==Se.far&&(Se.far=je,Se.updateProjectionMatrix()),bl.setFromMatrixPosition(fe.matrixWorld),Se.position.copy(bl),Yf.copy(Se.position),Yf.add(zE[T]),Se.up.copy(VE[T]),Se.lookAt(Yf),Se.updateMatrixWorld(),Ie.makeTranslation(-bl.x,-bl.y,-bl.z),wg.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),te._frustum.setFromProjectionMatrix(wg,Se.coordinateSystem,Se.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)r.setRenderTarget(te.map,T),r.clear();else{T===0&&(r.setRenderTarget(te.map),r.clear());const Se=te.getViewport(T);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),Y.viewport(u)}s=te.getFrustum(T),C(k,w,le,fe,this.type)}te.isPointLightShadow!==!0&&this.type===Tl&&R(te,w),te.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(D,z,G)};function R(I,k){const w=e.update(P);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null?I.mapPass=new Br(o.x,o.y,{format:za,type:as}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(k,null,w,x,P,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value.set(I.map.width,I.map.height),M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(k,null,w,M,P,null)}function F(I,k,w,D){let z=null;const G=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)z=G;else if(z=w.isPointLight===!0?m:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Y=z.uuid,ee=k.uuid;let W=p[Y];W===void 0&&(W={},p[Y]=W);let Z=W[ee];Z===void 0&&(Z=z.clone(),W[ee]=Z,k.addEventListener("dispose",U)),z=Z}if(z.visible=k.visible,z.wireframe=k.wireframe,D===Tl?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:S[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Y=r.properties.get(z);Y.light=w}return z}function C(I,k,w,D,z){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&z===Tl)&&(!I.frustumCulled||I.intersectsFrustum(s))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),W=I.material;if(Array.isArray(W)){const Z=ee.groups;for(let fe=0,te=Z.length;fe<te;fe++){const ne=Z[fe],Q=W[ne.materialIndex];if(Q&&Q.visible){const $=F(I,Q,D,z);I.onBeforeShadow(r,I,k,w,ee,$,ne),r.renderBufferDirect(w,null,ee,$,I,ne),I.onAfterShadow(r,I,k,w,ee,$,ne)}}}else if(W.visible){const Z=F(I,W,D,z);I.onBeforeShadow(r,I,k,w,ee,Z,null),r.renderBufferDirect(w,null,ee,Z,I,null),I.onAfterShadow(r,I,k,w,ee,Z,null)}}const Y=I.children;for(let ee=0,W=Y.length;ee<W;ee++)C(Y[ee],k,w,D,z)}function U(I){I.target.removeEventListener("dispose",U);for(const w in p){const D=p[w],z=I.target.uuid;z in D&&(D[z].dispose(),delete D[z])}}}function HE(r,e){function t(){let q=!1;const De=new Dn;let ye=null;const Ee=new Dn(0,0,0,0);return{setMask:function(ge){ye!==ge&&!q&&(r.colorMask(ge,ge,ge,ge),ye=ge)},setLocked:function(ge){q=ge},setClear:function(ge,we,ze,Ke,Te){Te===!0&&(ge*=Ke,we*=Ke,ze*=Ke),De.set(ge,we,ze,Ke),Ee.equals(De)===!1&&(r.clearColor(ge,we,ze,Ke),Ee.copy(De))},reset:function(){q=!1,ye=null,Ee.set(-1,0,0,0)}}}function s(){let q=!1,De=!1,ye=null,Ee=null,ge=null;return{setReversed:function(we){if(De!==we){const ze=e.get("EXT_clip_control");we?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),De=we;const Ke=ge;ge=null,this.setClear(Ke)}},getReversed:function(){return De},setTest:function(we){we?he(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(we){ye!==we&&!q&&(r.depthMask(we),ye=we)},setFunc:function(we){if(De&&(we=x_[we]),Ee!==we){switch(we){case Zf:r.depthFunc(r.NEVER);break;case Jf:r.depthFunc(r.ALWAYS);break;case Qf:r.depthFunc(r.LESS);break;case Pl:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case th:r.depthFunc(r.GEQUAL);break;case nh:r.depthFunc(r.GREATER);break;case ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=we}},setLocked:function(we){q=we},setClear:function(we){ge!==we&&(ge=we,De&&(we=1-we),r.clearDepth(we))},reset:function(){q=!1,ye=null,Ee=null,ge=null,De=!1}}}function o(){let q=!1,De=null,ye=null,Ee=null,ge=null,we=null,ze=null,Ke=null,Te=null;return{setTest:function(tt){q||(tt?he(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(tt){De!==tt&&!q&&(r.stencilMask(tt),De=tt)},setFunc:function(tt,Ot,gn){(ye!==tt||Ee!==Ot||ge!==gn)&&(r.stencilFunc(tt,Ot,gn),ye=tt,Ee=Ot,ge=gn)},setOp:function(tt,Ot,gn){(we!==tt||ze!==Ot||Ke!==gn)&&(r.stencilOp(tt,Ot,gn),we=tt,ze=Ot,Ke=gn)},setLocked:function(tt){q=tt},setClear:function(tt){Te!==tt&&(r.clearStencil(tt),Te=tt)},reset:function(){q=!1,De=null,ye=null,Ee=null,ge=null,we=null,ze=null,Ke=null,Te=null}}}const l=new t,u=new s,f=new o,m=new WeakMap,p=new WeakMap;let y={},S={},x={},M=new WeakMap,E=[],P=null,_=!1,v=null,R=null,F=null,C=null,U=null,I=null,k=null,w=new Wt(0,0,0),D=0,z=!1,G=null,Y=null,ee=null,W=null,Z=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Q)[1]),te=ne>=1):Q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),te=ne>=2);let $=null,T={};const le=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Ie=new Dn().fromArray(le),je=new Dn().fromArray(Se);function Ue(q,De,ye,Ee){const ge=new Uint8Array(4),we=r.createTexture();r.bindTexture(q,we),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<ye;ze++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(De+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return we}const re={};re[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(r.DEPTH_TEST),u.setFunc(Pl),gt(!1),Xt(w0),he(r.CULL_FACE),ht(Cs);function he(q){y[q]!==!0&&(r.enable(q),y[q]=!0)}function Re(q){y[q]!==!1&&(r.disable(q),y[q]=!1)}function Ye(q,De){return x[q]!==De?(r.bindFramebuffer(q,De),x[q]=De,q===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=De),q===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Oe(q,De){let ye=E,Ee=!1;if(q){ye=M.get(De),ye===void 0&&(ye=[],M.set(De,ye));const ge=q.textures;if(ye.length!==ge.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let we=0,ze=ge.length;we<ze;we++)ye[we]=r.COLOR_ATTACHMENT0+we;ye.length=ge.length,Ee=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(ye)}function ft(q){return P!==q?(r.useProgram(q),P=q,!0):!1}const kt={[Lo]:r.FUNC_ADD,[Bx]:r.FUNC_SUBTRACT,[zx]:r.FUNC_REVERSE_SUBTRACT};kt[Vx]=r.MIN,kt[Gx]=r.MAX;const pt={[Hx]:r.ZERO,[Wx]:r.ONE,[Xx]:r.SRC_COLOR,[Pg]:r.SRC_ALPHA,[Zx]:r.SRC_ALPHA_SATURATE,[Yx]:r.DST_COLOR,[jx]:r.DST_ALPHA,[qx]:r.ONE_MINUS_SRC_COLOR,[Lg]:r.ONE_MINUS_SRC_ALPHA,[Kx]:r.ONE_MINUS_DST_COLOR,[$x]:r.ONE_MINUS_DST_ALPHA,[Jx]:r.CONSTANT_COLOR,[Qx]:r.ONE_MINUS_CONSTANT_COLOR,[e_]:r.CONSTANT_ALPHA,[t_]:r.ONE_MINUS_CONSTANT_ALPHA};function ht(q,De,ye,Ee,ge,we,ze,Ke,Te,tt){if(q===Cs){_===!0&&(Re(r.BLEND),_=!1);return}if(_===!1&&(he(r.BLEND),_=!0),q!==kx){if(q!==v||tt!==z){if((R!==Lo||U!==Lo)&&(r.blendEquation(r.FUNC_ADD),R=Lo,U=Lo),tt)switch(q){case Cl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ji:r.blendFunc(r.ONE,r.ONE);break;case b0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case T0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:on("WebGLState: Invalid blending: ",q);break}else switch(q){case Cl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case b0:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",q);break}F=null,C=null,I=null,k=null,w.set(0,0,0),D=0,v=q,z=tt}return}ge=ge||De,we=we||ye,ze=ze||Ee,(De!==R||ge!==U)&&(r.blendEquationSeparate(kt[De],kt[ge]),R=De,U=ge),(ye!==F||Ee!==C||we!==I||ze!==k)&&(r.blendFuncSeparate(pt[ye],pt[Ee],pt[we],pt[ze]),F=ye,C=Ee,I=we,k=ze),(Ke.equals(w)===!1||Te!==D)&&(r.blendColor(Ke.r,Ke.g,Ke.b,Te),w.copy(Ke),D=Te),v=q,z=!1}function At(q,De){q.side===$i?Re(r.CULL_FACE):he(r.CULL_FACE);let ye=q.side===Yi;De&&(ye=!ye),gt(ye),q.blending===Cl&&q.transparent===!1?ht(Cs):ht(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const Ee=q.stencilWrite;f.setTest(Ee),Ee&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),en(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(q){G!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),G=q)}function Xt(q){q!==Ux?(he(r.CULL_FACE),q!==Y&&(q===w0?r.cullFace(r.BACK):q===Ox?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),Y=q}function Ut(q){q!==ee&&(te&&r.lineWidth(q),ee=q)}function en(q,De,ye){q?(he(r.POLYGON_OFFSET_FILL),(W!==De||Z!==ye)&&(W=De,Z=ye,u.getReversed()&&(De=-De),r.polygonOffset(De,ye))):Re(r.POLYGON_OFFSET_FILL)}function yt(q){q?he(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function qt(q){q===void 0&&(q=r.TEXTURE0+fe-1),$!==q&&(r.activeTexture(q),$=q)}function X(q,De,ye){ye===void 0&&($===null?ye=r.TEXTURE0+fe-1:ye=$);let Ee=T[ye];Ee===void 0&&(Ee={type:void 0,texture:void 0},T[ye]=Ee),(Ee.type!==q||Ee.texture!==De)&&($!==ye&&(r.activeTexture(ye),$=ye),r.bindTexture(q,De||re[q]),Ee.type=q,Ee.texture=De)}function fn(){const q=T[$];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Tt(){try{r.compressedTexImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function b(){try{r.texSubImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function K(){try{r.texSubImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function Ne(){try{r.texStorage2D(...arguments)}catch(q){on("WebGLState:",q)}}function Ae(){try{r.texStorage3D(...arguments)}catch(q){on("WebGLState:",q)}}function xe(){try{r.texImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function Me(){try{r.texImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function Ve(q){return S[q]!==void 0?S[q]:r.getParameter(q)}function et(q,De){S[q]!==De&&(r.pixelStorei(q,De),S[q]=De)}function Be(q){Ie.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Ie.copy(q))}function Fe(q){je.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),je.copy(q))}function nt(q,De){let ye=p.get(De);ye===void 0&&(ye=new WeakMap,p.set(De,ye));let Ee=ye.get(q);Ee===void 0&&(Ee=r.getUniformBlockIndex(De,q.name),ye.set(q,Ee))}function ot(q,De){const Ee=p.get(De).get(q);m.get(De)!==Ee&&(r.uniformBlockBinding(De,Ee,q.__bindingPointIndex),m.set(De,Ee))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},S={},$=null,T={},x={},M=new WeakMap,E=[],P=null,_=!1,v=null,R=null,F=null,C=null,U=null,I=null,k=null,w=new Wt(0,0,0),D=0,z=!1,G=null,Y=null,ee=null,W=null,Z=null,Ie.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Re,bindFramebuffer:Ye,drawBuffers:Oe,useProgram:ft,setBlending:ht,setMaterial:At,setFlipSided:gt,setCullFace:Xt,setLineWidth:Ut,setPolygonOffset:en,setScissorTest:yt,activeTexture:qt,bindTexture:X,unbindTexture:fn,compressedTexImage2D:Tt,compressedTexImage3D:B,texImage2D:xe,texImage3D:Me,pixelStorei:et,getParameter:Ve,updateUBOMapping:nt,uniformBlockBinding:ot,texStorage2D:Ne,texStorage3D:Ae,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Be,viewport:Fe,reset:lt}}function WE(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,y=new WeakMap,S=new Set;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(B,b){return E?new OffscreenCanvas(B,b):Tu("canvas")}function _(B,b,K){let se=1;const de=Tt(B);if((de.width>K||de.height>K)&&(se=K/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ne=Math.floor(se*de.width),Ae=Math.floor(se*de.height);x===void 0&&(x=P(Ne,Ae));const xe=b?P(Ne,Ae):x;return xe.width=Ne,xe.height=Ae,xe.getContext("2d").drawImage(B,0,0,Ne,Ae),wt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ne+"x"+Ae+")."),xe}else return"data"in B&&wt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),B;return B}function v(B){return B.generateMipmaps}function R(B){r.generateMipmap(B)}function F(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(B,b,K,se,de,Ne=!1){if(B!==null){if(r[B]!==void 0)return r[B];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ae;se&&(Ae=e.get("EXT_texture_norm16"),Ae||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=b;if(b===r.RED&&(K===r.FLOAT&&(xe=r.R32F),K===r.HALF_FLOAT&&(xe=r.R16F),K===r.UNSIGNED_BYTE&&(xe=r.R8),K===r.UNSIGNED_SHORT&&Ae&&(xe=Ae.R16_EXT),K===r.SHORT&&Ae&&(xe=Ae.R16_SNORM_EXT)),b===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(xe=r.R8UI),K===r.UNSIGNED_SHORT&&(xe=r.R16UI),K===r.UNSIGNED_INT&&(xe=r.R32UI),K===r.BYTE&&(xe=r.R8I),K===r.SHORT&&(xe=r.R16I),K===r.INT&&(xe=r.R32I)),b===r.RG&&(K===r.FLOAT&&(xe=r.RG32F),K===r.HALF_FLOAT&&(xe=r.RG16F),K===r.UNSIGNED_BYTE&&(xe=r.RG8),K===r.UNSIGNED_SHORT&&Ae&&(xe=Ae.RG16_EXT),K===r.SHORT&&Ae&&(xe=Ae.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(xe=r.RG8UI),K===r.UNSIGNED_SHORT&&(xe=r.RG16UI),K===r.UNSIGNED_INT&&(xe=r.RG32UI),K===r.BYTE&&(xe=r.RG8I),K===r.SHORT&&(xe=r.RG16I),K===r.INT&&(xe=r.RG32I)),b===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(xe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(xe=r.RGB16UI),K===r.UNSIGNED_INT&&(xe=r.RGB32UI),K===r.BYTE&&(xe=r.RGB8I),K===r.SHORT&&(xe=r.RGB16I),K===r.INT&&(xe=r.RGB32I)),b===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(xe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(xe=r.RGBA16UI),K===r.UNSIGNED_INT&&(xe=r.RGBA32UI),K===r.BYTE&&(xe=r.RGBA8I),K===r.SHORT&&(xe=r.RGBA16I),K===r.INT&&(xe=r.RGBA32I)),b===r.RGB&&(K===r.UNSIGNED_SHORT&&Ae&&(xe=Ae.RGB16_EXT),K===r.SHORT&&Ae&&(xe=Ae.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(xe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(xe=r.R11F_G11F_B10F)),b===r.RGBA){const Me=Ne?bu:Zt.getTransfer(de);K===r.FLOAT&&(xe=r.RGBA32F),K===r.HALF_FLOAT&&(xe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(xe=Me===dn?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Ae&&(xe=Ae.RGBA16_EXT),K===r.SHORT&&Ae&&(xe=Ae.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(xe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(xe=r.RGB5_A1)}return(xe===r.R16F||xe===r.R32F||xe===r.RG16F||xe===r.RG32F||xe===r.RGBA16F||xe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function U(B,b){let K;return B?b===null||b===ss||b===Nl?K=r.DEPTH24_STENCIL8:b===ns?K=r.DEPTH32F_STENCIL8:b===Ll&&(K=r.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===Nl?K=r.DEPTH_COMPONENT24:b===ns?K=r.DEPTH_COMPONENT32F:b===Ll&&(K=r.DEPTH_COMPONENT16),K}function I(B,b){return v(B)===!0||B.isFramebufferTexture&&B.minFilter!==mi&&B.minFilter!==Ti?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function k(B){const b=B.target;b.removeEventListener("dispose",k),D(b),b.isVideoTexture&&y.delete(b),b.isHTMLTexture&&S.delete(b)}function w(B){const b=B.target;b.removeEventListener("dispose",w),G(b)}function D(B){const b=s.get(B);if(b.__webglInit===void 0)return;const K=B.source,se=M.get(K);if(se){const de=se[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(B),Object.keys(se).length===0&&M.delete(K)}s.remove(B)}function z(B){const b=s.get(B);r.deleteTexture(b.__webglTexture);const K=B.source,se=M.get(K);delete se[b.__cacheKey],u.memory.textures--}function G(B){const b=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let de=0;de<b.__webglFramebuffer[se].length;de++)r.deleteFramebuffer(b.__webglFramebuffer[se][de]);else r.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)r.deleteFramebuffer(b.__webglFramebuffer[se]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=B.textures;for(let se=0,de=K.length;se<de;se++){const Ne=s.get(K[se]);Ne.__webglTexture&&(r.deleteTexture(Ne.__webglTexture),u.memory.textures--),s.remove(K[se])}s.remove(B)}let Y=0;function ee(){Y=0}function W(){return Y}function Z(B){Y=B}function fe(){const B=Y;return B>=o.maxTextures&&wt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),Y+=1,B}function te(B){const b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function ne(B,b){const K=s.get(B);if(B.isVideoTexture&&X(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){const se=B.image;if(se===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(K,B,b);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+b)}function Q(B,b){const K=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){Re(K,B,b);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+b)}function $(B,b){const K=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){Re(K,B,b);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+b)}function T(B,b){const K=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){Ye(K,B,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+b)}const le={[Ba]:r.REPEAT,[Rs]:r.CLAMP_TO_EDGE,[rh]:r.MIRRORED_REPEAT},Se={[mi]:r.NEAREST,[r_]:r.NEAREST_MIPMAP_NEAREST,[Bc]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[xf]:r.LINEAR_MIPMAP_NEAREST,[Ua]:r.LINEAR_MIPMAP_LINEAR},Ie={[l_]:r.NEVER,[h_]:r.ALWAYS,[c_]:r.LESS,[Kh]:r.LEQUAL,[u_]:r.EQUAL,[Zh]:r.GEQUAL,[d_]:r.GREATER,[f_]:r.NOTEQUAL};function je(B,b){if(b.type===ns&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ti||b.magFilter===xf||b.magFilter===Bc||b.magFilter===Ua||b.minFilter===Ti||b.minFilter===xf||b.minFilter===Bc||b.minFilter===Ua)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,le[b.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,le[b.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,le[b.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,Se[b.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,Ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mi||b.minFilter!==Bc&&b.minFilter!==Ua||b.type===ns&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Ue(B,b){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",k));const se=b.source;let de=M.get(se);de===void 0&&(de={},M.set(se,de));const Ne=te(b);if(Ne!==B.__cacheKey){de[Ne]===void 0&&(de[Ne]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),de[Ne].usedTimes++;const Ae=de[B.__cacheKey];Ae!==void 0&&(de[B.__cacheKey].usedTimes--,Ae.usedTimes===0&&z(b)),B.__cacheKey=Ne,B.__webglTexture=de[Ne].texture}return K}function re(B,b,K){return Math.floor(Math.floor(B/K)/b)}function he(B,b,K,se){const Ne=B.updateRanges;if(Ne.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,K,se,b.data);else{Ne.sort((et,Be)=>et.start-Be.start);let Ae=0;for(let et=1;et<Ne.length;et++){const Be=Ne[Ae],Fe=Ne[et],nt=Be.start+Be.count,ot=re(Fe.start,b.width,4),lt=re(Be.start,b.width,4);Fe.start<=nt+1&&ot===lt&&re(Fe.start+Fe.count-1,b.width,4)===ot?Be.count=Math.max(Be.count,Fe.start+Fe.count-Be.start):(++Ae,Ne[Ae]=Fe)}Ne.length=Ae+1;const xe=t.getParameter(r.UNPACK_ROW_LENGTH),Me=t.getParameter(r.UNPACK_SKIP_PIXELS),Ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let et=0,Be=Ne.length;et<Be;et++){const Fe=Ne[et],nt=Math.floor(Fe.start/4),ot=Math.ceil(Fe.count/4),lt=nt%b.width,q=Math.floor(nt/b.width),De=ot,ye=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,lt,q,De,ye,K,se,b.data)}B.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,xe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ve)}}function Re(B,b,K){let se=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=r.TEXTURE_3D);const de=Ue(B,b),Ne=b.source;t.bindTexture(se,B.__webglTexture,r.TEXTURE0+K);const Ae=s.get(Ne);if(Ne.version!==Ae.__version||de===!0){if(t.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ye=Zt.getPrimaries(Zt.workingColorSpace),Ee=b.colorSpace===oa?null:Zt.getPrimaries(b.colorSpace),ge=b.colorSpace===oa||ye===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let Me=_(b.image,!1,o.maxTextureSize);Me=fn(b,Me);const Ve=l.convert(b.format,b.colorSpace),et=l.convert(b.type);let Be=C(b.internalFormat,Ve,et,b.normalized,b.colorSpace,b.isVideoTexture);je(se,b);let Fe;const nt=b.mipmaps,ot=b.isVideoTexture!==!0,lt=Ae.__version===void 0||de===!0,q=Ne.dataReady,De=I(b,Me);if(b.isDepthTexture)Be=U(b.format===Oa,b.type),lt&&(ot?t.texStorage2D(r.TEXTURE_2D,1,Be,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Be,Me.width,Me.height,0,Ve,et,null));else if(b.isDataTexture)if(nt.length>0){ot&&lt&&t.texStorage2D(r.TEXTURE_2D,De,Be,nt[0].width,nt[0].height);for(let ye=0,Ee=nt.length;ye<Ee;ye++)Fe=nt[ye],ot?q&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Fe.width,Fe.height,Ve,et,Fe.data):t.texImage2D(r.TEXTURE_2D,ye,Be,Fe.width,Fe.height,0,Ve,et,Fe.data);b.generateMipmaps=!1}else ot?(lt&&t.texStorage2D(r.TEXTURE_2D,De,Be,Me.width,Me.height),q&&he(b,Me,Ve,et)):t.texImage2D(r.TEXTURE_2D,0,Be,Me.width,Me.height,0,Ve,et,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Be,nt[0].width,nt[0].height,Me.depth);for(let ye=0,Ee=nt.length;ye<Ee;ye++)if(Fe=nt[ye],b.format!==kr)if(Ve!==null)if(ot){if(q)if(b.layerUpdates.size>0){const ge=ng(Fe.width,Fe.height,b.format,b.type);for(const we of b.layerUpdates){const ze=Fe.data.subarray(we*ge/Fe.data.BYTES_PER_ELEMENT,(we+1)*ge/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,we,Fe.width,Fe.height,1,Ve,ze)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Fe.width,Fe.height,Me.depth,Ve,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Be,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Fe.width,Fe.height,Me.depth,Ve,et,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,Be,Fe.width,Fe.height,Me.depth,0,Ve,et,Fe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ot&&lt&&t.texStorage2D(r.TEXTURE_2D,De,Be,nt[0].width,nt[0].height);for(let ye=0,Ee=nt.length;ye<Ee;ye++)Fe=nt[ye],b.format!==kr?Ve!==null?ot?q&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Fe.width,Fe.height,Ve,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,Be,Fe.width,Fe.height,0,Fe.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?q&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Fe.width,Fe.height,Ve,et,Fe.data):t.texImage2D(r.TEXTURE_2D,ye,Be,Fe.width,Fe.height,0,Ve,et,Fe.data)}else if(b.isDataArrayTexture)if(ot){if(lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Be,Me.width,Me.height,Me.depth),q)if(b.layerUpdates.size>0){const ye=ng(Me.width,Me.height,b.format,b.type);for(const Ee of b.layerUpdates){const ge=Me.data.subarray(Ee*ye/Me.data.BYTES_PER_ELEMENT,(Ee+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ee,Me.width,Me.height,1,Ve,et,ge)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,et,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,Me.width,Me.height,Me.depth,0,Ve,et,Me.data);else if(b.isData3DTexture)ot?(lt&&t.texStorage3D(r.TEXTURE_3D,De,Be,Me.width,Me.height,Me.depth),q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,et,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Be,Me.width,Me.height,Me.depth,0,Ve,et,Me.data);else if(b.isFramebufferTexture){if(lt)if(ot)t.texStorage2D(r.TEXTURE_2D,De,Be,Me.width,Me.height);else{let ye=Me.width,Ee=Me.height;for(let ge=0;ge<De;ge++)t.texImage2D(r.TEXTURE_2D,ge,Be,ye,Ee,0,Ve,et,null),ye>>=1,Ee>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),Me.parentNode!==ye){ye.appendChild(Me),S.add(b),ye.onpaint=Ee=>{const ge=Ee.changedElements;for(const we of S)ge.includes(we.image)&&(we.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Me);else{const ge=r.RGBA,we=r.RGBA,ze=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,we,ze,Me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(ot&&lt){const ye=Tt(nt[0]);t.texStorage2D(r.TEXTURE_2D,De,Be,ye.width,ye.height)}for(let ye=0,Ee=nt.length;ye<Ee;ye++)Fe=nt[ye],ot?q&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ve,et,Fe):t.texImage2D(r.TEXTURE_2D,ye,Be,Ve,et,Fe);b.generateMipmaps=!1}else if(ot){if(lt){const ye=Tt(Me);t.texStorage2D(r.TEXTURE_2D,De,Be,ye.width,ye.height)}q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,et,Me)}else t.texImage2D(r.TEXTURE_2D,0,Be,Ve,et,Me);v(b)&&R(se),Ae.__version=Ne.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Ye(B,b,K){if(b.image.length!==6)return;const se=Ue(B,b),de=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+K);const Ne=s.get(de);if(de.version!==Ne.__version||se===!0){t.activeTexture(r.TEXTURE0+K);const Ae=Zt.getPrimaries(Zt.workingColorSpace),xe=b.colorSpace===oa?null:Zt.getPrimaries(b.colorSpace),Me=b.colorSpace===oa||Ae===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ve=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let we=0;we<6;we++)!Ve&&!et?Be[we]=_(b.image[we],!0,o.maxCubemapSize):Be[we]=et?b.image[we].image:b.image[we],Be[we]=fn(b,Be[we]);const Fe=Be[0],nt=l.convert(b.format,b.colorSpace),ot=l.convert(b.type),lt=C(b.internalFormat,nt,ot,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,De=Ne.__version===void 0||se===!0,ye=de.dataReady;let Ee=I(b,Fe);je(r.TEXTURE_CUBE_MAP,b);let ge;if(Ve){q&&De&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,lt,Fe.width,Fe.height);for(let we=0;we<6;we++){ge=Be[we].mipmaps;for(let ze=0;ze<ge.length;ze++){const Ke=ge[ze];b.format!==kr?nt!==null?q?ye&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze,0,0,Ke.width,Ke.height,nt,Ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze,lt,Ke.width,Ke.height,0,Ke.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze,0,0,Ke.width,Ke.height,nt,ot,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze,lt,Ke.width,Ke.height,0,nt,ot,Ke.data)}}}else{if(ge=b.mipmaps,q&&De){ge.length>0&&Ee++;const we=Tt(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,lt,we.width,we.height)}for(let we=0;we<6;we++)if(et){q?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Be[we].width,Be[we].height,nt,ot,Be[we].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,lt,Be[we].width,Be[we].height,0,nt,ot,Be[we].data);for(let ze=0;ze<ge.length;ze++){const Te=ge[ze].image[we].image;q?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze+1,0,0,Te.width,Te.height,nt,ot,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze+1,lt,Te.width,Te.height,0,nt,ot,Te.data)}}else{q?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,nt,ot,Be[we]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,lt,nt,ot,Be[we]);for(let ze=0;ze<ge.length;ze++){const Ke=ge[ze];q?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze+1,0,0,nt,ot,Ke.image[we]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze+1,lt,nt,ot,Ke.image[we])}}}v(b)&&R(r.TEXTURE_CUBE_MAP),Ne.__version=de.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Oe(B,b,K,se,de,Ne){const Ae=l.convert(K.format,K.colorSpace),xe=l.convert(K.type),Me=C(K.internalFormat,Ae,xe,K.normalized,K.colorSpace),Ve=s.get(b),et=s.get(K);if(et.__renderTarget=b,!Ve.__hasExternalTextures){const Be=Math.max(1,b.width>>Ne),Fe=Math.max(1,b.height>>Ne);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,Ne,Me,Be,Fe,b.depth,0,Ae,xe,null):t.texImage2D(de,Ne,Me,Be,Fe,0,Ae,xe,null)}t.bindFramebuffer(r.FRAMEBUFFER,B),qt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,de,et.__webglTexture,0,yt(b)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,de,et.__webglTexture,Ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(B,b,K){if(r.bindRenderbuffer(r.RENDERBUFFER,B),b.depthBuffer){const se=b.depthTexture,de=se&&se.isDepthTexture?se.type:null,Ne=U(b.stencilBuffer,de),Ae=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt(b),Ne,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt(b),Ne,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,B)}else{const se=b.textures;for(let de=0;de<se.length;de++){const Ne=se[de],Ae=l.convert(Ne.format,Ne.colorSpace),xe=l.convert(Ne.type),Me=C(Ne.internalFormat,Ae,xe,Ne.normalized,Ne.colorSpace);qt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt(b),Me,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt(b),Me,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Me,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(B,b,K){const se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(b.depthTexture);if(de.__renderTarget=b,(!de.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),se){if(de.__webglInit===void 0&&(de.__webglInit=!0,b.depthTexture.addEventListener("dispose",k)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),je(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ve=l.convert(b.depthTexture.format),et=l.convert(b.depthTexture.type);let Be;b.depthTexture.format===Ls?Be=r.DEPTH_COMPONENT24:b.depthTexture.format===Oa&&(Be=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Be,b.width,b.height,0,Ve,et,null)}}else ne(b.depthTexture,0);const Ne=de.__webglTexture,Ae=yt(b),xe=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,Me=b.depthTexture.format===Oa?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ls)qt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,xe,Ne,0,Ae):r.framebufferTexture2D(r.FRAMEBUFFER,Me,xe,Ne,0);else if(b.depthTexture.format===Oa)qt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,xe,Ne,0,Ae):r.framebufferTexture2D(r.FRAMEBUFFER,Me,xe,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(B){const b=s.get(B),K=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){const se=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=se}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let se=0;se<6;se++)kt(b.__webglFramebuffer[se],B,se);else{const se=B.texture.mipmaps;se&&se.length>0?kt(b.__webglFramebuffer[0],B,0):kt(b.__webglFramebuffer,B,0)}else if(K){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=r.createRenderbuffer(),ft(b.__webglDepthbuffer[se],B,!1);else{const de=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ne)}}else{const se=B.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ft(b.__webglDepthbuffer,B,!1);else{const de=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ne)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(B,b,K){const se=s.get(B);b!==void 0&&Oe(se.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&pt(B)}function At(B){const b=B.texture,K=s.get(B),se=s.get(b);B.addEventListener("dispose",w);const de=B.textures,Ne=B.isWebGLCubeRenderTarget===!0,Ae=de.length>1;if(Ae||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=b.version,u.memory.textures++),Ne){K.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[xe]=[];for(let Me=0;Me<b.mipmaps.length;Me++)K.__webglFramebuffer[xe][Me]=r.createFramebuffer()}else K.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)K.__webglFramebuffer[xe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let xe=0,Me=de.length;xe<Me;xe++){const Ve=s.get(de[xe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),u.memory.textures++)}if(B.samples>0&&qt(B)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const Me=de[xe];K.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[xe]);const Ve=l.convert(Me.format,Me.colorSpace),et=l.convert(Me.type),Be=C(Me.internalFormat,Ve,et,Me.normalized,Me.colorSpace,B.isXRRenderTarget===!0),Fe=yt(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Be,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,K.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(K.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),je(r.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Oe(K.__webglFramebuffer[xe][Me],B,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Me);else Oe(K.__webglFramebuffer[xe],B,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(b)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let xe=0,Me=de.length;xe<Me;xe++){const Ve=de[xe],et=s.get(Ve);let Be=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Be=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Be,et.__webglTexture),je(Be,Ve),Oe(K.__webglFramebuffer,B,Ve,r.COLOR_ATTACHMENT0+xe,Be,0),v(Ve)&&R(Be)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(xe=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,se.__webglTexture),je(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Oe(K.__webglFramebuffer[Me],B,b,r.COLOR_ATTACHMENT0,xe,Me);else Oe(K.__webglFramebuffer,B,b,r.COLOR_ATTACHMENT0,xe,0);v(b)&&R(xe),t.unbindTexture()}B.depthBuffer&&pt(B)}function gt(B){const b=B.textures;for(let K=0,se=b.length;K<se;K++){const de=b[K];if(v(de)){const Ne=F(B),Ae=s.get(de).__webglTexture;t.bindTexture(Ne,Ae),R(Ne),t.unbindTexture()}}}const Xt=[],Ut=[];function en(B){if(B.samples>0){if(qt(B)===!1){const b=B.textures,K=B.width,se=B.height;let de=r.COLOR_BUFFER_BIT;const Ne=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=s.get(B),xe=b.length>1;if(xe)for(let Ve=0;Ve<b.length;Ve++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Me=B.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ve=0;Ve<b.length;Ve++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),xe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ve]);const et=s.get(b[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,K,se,0,0,K,se,de,r.NEAREST),m===!0&&(Xt.length=0,Ut.length=0,Xt.push(r.COLOR_ATTACHMENT0+Ve),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Xt.push(Ne),Ut.push(Ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Ve=0;Ve<b.length;Ve++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ve]);const et=s.get(b[Ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&m){const b=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function yt(B){return Math.min(o.maxSamples,B.samples)}function qt(B){const b=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(B){const b=u.render.frame;y.get(B)!==b&&(y.set(B,b),B.update())}function fn(B,b){const K=B.colorSpace,se=B.format,de=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==wu&&K!==oa&&(Zt.getTransfer(K)===dn?(se!==kr||de!==lr)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",K)),b}function Tt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=ee,this.getTextureUnits=W,this.setTextureUnits=Z,this.setTexture2D=ne,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=T,this.rebindTextures=ht,this.setupRenderTarget=At,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XE(r,e){function t(s,o=oa){let l;const u=Zt.getTransfer(o);if(s===lr)return r.UNSIGNED_BYTE;if(s===Xh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===qh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Gg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Hg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===zg)return r.BYTE;if(s===Vg)return r.SHORT;if(s===Ll)return r.UNSIGNED_SHORT;if(s===Wh)return r.INT;if(s===ss)return r.UNSIGNED_INT;if(s===ns)return r.FLOAT;if(s===as)return r.HALF_FLOAT;if(s===Wg)return r.ALPHA;if(s===Xg)return r.RGB;if(s===kr)return r.RGBA;if(s===Ls)return r.DEPTH_COMPONENT;if(s===Oa)return r.DEPTH_STENCIL;if(s===qg)return r.RED;if(s===jh)return r.RED_INTEGER;if(s===za)return r.RG;if(s===$h)return r.RG_INTEGER;if(s===Yh)return r.RGBA_INTEGER;if(s===gu||s===vu||s===xu||s===_u)if(u===dn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===gu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===gu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sh||s===ah||s===oh||s===lh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===sh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ah)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ch||s===uh||s===dh||s===fh||s===hh||s===Mu||s===ph)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ch||s===uh)return u===dn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===dh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===fh)return l.COMPRESSED_R11_EAC;if(s===hh)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Mu)return l.COMPRESSED_RG11_EAC;if(s===ph)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===mh||s===gh||s===vh||s===xh||s===_h||s===yh||s===Sh||s===Mh||s===Eh||s===wh||s===bh||s===Th||s===Ah||s===Rh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===mh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_h)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Th)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ah)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ch||s===Ph||s===Lh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Ch)return u===dn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ph)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nh||s===Ih||s===Eu||s===Dh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Nh)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jE=`
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

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new nv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new os({vertexShader:qE,fragmentShader:jE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Va(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends Ga{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,y=null,S=null,x=null,M=null,E=null;const P=typeof XRWebGLBinding<"u",_=new $E,v={},R=t.getContextAttributes();let F=null,C=null;const U=[],I=[],k=new zt;let w=null,D=null;const z=new or;z.viewport=new Dn;const G=new or;G.viewport=new Dn;const Y=[z,G],ee=new iy;let W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=U[re];return he===void 0&&(he=new Tf,U[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=U[re];return he===void 0&&(he=new Tf,U[re]=he),he.getGripSpace()},this.getHand=function(re){let he=U[re];return he===void 0&&(he=new Tf,U[re]=he),he.getHandSpace()};function fe(re){const he=I.indexOf(re.inputSource);if(he===-1)return;const Re=U[he];Re!==void 0&&(Re.update(re.inputSource,re.frame,p||u),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function te(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",ne);for(let re=0;re<U.length;re++){const he=I[re];he!==null&&(I[re]=null,U[re].disconnect(he))}W=null,Z=null,_.reset();for(const re in v)delete v[re];if(e.setRenderTarget(F),M=null,x=null,S=null,o=null,C=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),D!==null){const re=D.camera;re.fov=D.fov,re.zoom=D.zoom,re.updateProjectionMatrix(),D=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,s.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&P&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",te),o.addEventListener("inputsourceschange",ne),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ye=null,Oe=null;R.depth&&(Oe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=R.stencil?Oa:Ls,Ye=R.stencil?Nl:ss);const ft={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(ft),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new Br(x.textureWidth,x.textureHeight,{format:kr,type:lr,depthTexture:new Dl(x.textureWidth,x.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Br(M.framebufferWidth,M.framebufferHeight,{format:kr,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(re){for(let he=0;he<re.removed.length;he++){const Re=re.removed[he],Ye=I.indexOf(Re);Ye>=0&&(I[Ye]=null,U[Ye].disconnect(Re))}for(let he=0;he<re.added.length;he++){const Re=re.added[he];let Ye=I.indexOf(Re);if(Ye===-1){for(let ft=0;ft<U.length;ft++)if(ft>=I.length){I.push(Re),Ye=ft;break}else if(I[ft]===null){I[ft]=Re,Ye=ft;break}if(Ye===-1)break}const Oe=U[Ye];Oe&&Oe.connect(Re)}}const Q=new ie,$=new ie;function T(re,he,Re){Q.setFromMatrixPosition(he.matrixWorld),$.setFromMatrixPosition(Re.matrixWorld);const Ye=Q.distanceTo($),Oe=he.projectionMatrix.elements,ft=Re.projectionMatrix.elements,kt=Oe[14]/(Oe[10]-1),pt=Oe[14]/(Oe[10]+1),ht=(Oe[9]+1)/Oe[5],At=(Oe[9]-1)/Oe[5],gt=(Oe[8]-1)/Oe[0],Xt=(ft[8]+1)/ft[0],Ut=kt*gt,en=kt*Xt,yt=Ye/(-gt+Xt),qt=yt*-gt;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(qt),re.translateZ(yt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Oe[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const X=kt+yt,fn=pt+yt,Tt=Ut-qt,B=en+(Ye-qt),b=ht*pt/fn*X,K=At*pt/fn*X;re.projectionMatrix.makePerspective(Tt,B,b,K,X,fn),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let he=re.near,Re=re.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(Re=_.depthFar)),ee.near=G.near=z.near=he,ee.far=G.far=z.far=Re,(W!==ee.near||Z!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),W=ee.near,Z=ee.far),ee.layers.mask=re.layers.mask|6,z.layers.mask=ee.layers.mask&-5,G.layers.mask=ee.layers.mask&-3;const Ye=re.parent,Oe=ee.cameras;le(ee,Ye);for(let ft=0;ft<Oe.length;ft++)le(Oe[ft],Ye);Oe.length===2?T(ee,z,G):ee.projectionMatrix.copy(z.projectionMatrix),D===null&&re.isPerspectiveCamera&&(D={camera:re,fov:re.fov,zoom:re.zoom}),Se(re,ee,Ye)};function Se(re,he,Re){Re===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Oh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(re){m=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ee)},this.getCameraTexture=function(re){return v[re]};let Ie=null;function je(re,he){if(y=he.getViewerPose(p||u),E=he,y!==null){const Re=y.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Ye=!1;Re.length!==ee.cameras.length&&(ee.cameras.length=0,Ye=!0);for(let pt=0;pt<Re.length;pt++){const ht=Re[pt];let At=null;if(M!==null)At=M.getViewport(ht);else{const Xt=S.getViewSubImage(x,ht);At=Xt.viewport,pt===0&&(e.setRenderTargetTextures(C,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(C))}let gt=Y[pt];gt===void 0&&(gt=new or,gt.layers.enable(pt),gt.viewport=new Dn,Y[pt]=gt),gt.matrix.fromArray(ht.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ht.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(At.x,At.y,At.width,At.height),pt===0&&(ee.matrix.copy(gt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Ye===!0&&ee.cameras.push(gt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){S=s.getBinding();const pt=S.getDepthInformation(Re[0]);pt&&pt.isValid&&pt.texture&&_.init(pt,o.renderState)}if(Oe&&Oe.includes("camera-access")&&P){e.state.unbindTexture(),S=s.getBinding();for(let pt=0;pt<Re.length;pt++){const ht=Re[pt].camera;if(ht){let At=v[ht];At||(At=new nv,v[ht]=At);const gt=S.getCameraImage(ht);At.sourceTexture=gt}}}}for(let Re=0;Re<U.length;Re++){const Ye=I[Re],Oe=U[Re];Ye!==null&&Oe!==void 0&&Oe.update(Ye,he,p||u)}Ie&&Ie(re,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ue=new av;Ue.setAnimationLoop(je),this.setAnimationLoop=function(re){Ie=re},this.dispose=function(){}}}const KE=new Pn,hv=new Ct;hv.set(-1,0,0,0,1,0,0,0,1);function ZE(r,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,iv(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,R,F,C){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),S(_,v)):v.isMeshPhongMaterial?(l(_,v),y(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),x(_,v),v.isMeshPhysicalMaterial&&M(_,v,C)):v.isMeshMatcapMaterial?(l(_,v),E(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),P(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?m(_,v,R,F):v.isSpriteMaterial?p(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Yi&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Yi&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const R=e.get(v),F=R.envMap,C=R.envMapRotation;F&&(_.envMap.value=F,_.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(C)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(hv),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function m(_,v,R,F){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*R,_.scale.value=F*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function y(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function x(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,R){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yi&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.retroreflectivity>0&&(_.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function P(_,v){const R=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function JE(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const I=U.program;s.uniformBlockBinding(C,I)}function p(C,U){let I=o[C.id];I===void 0&&(_(C),I=y(C),o[C.id]=I,C.addEventListener("dispose",R));const k=U.program;s.updateUBOMapping(C,k);const w=e.render.frame;l[C.id]!==w&&(x(C),l[C.id]=w)}function y(C){const U=S();C.__bindingPointIndex=U;const I=r.createBuffer(),k=C.__size,w=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,k,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,I),I}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const U=o[C.id],I=C.uniforms,k=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let w=0,D=I.length;w<D;w++){const z=I[w];if(Array.isArray(z))for(let G=0,Y=z.length;G<Y;G++)M(z[G],w,G,k);else M(z,w,0,k)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,U,I,k){if(P(C,U,I,k)===!0){const w=C.__offset,D=C.value;if(Array.isArray(D)){let z=0;for(let G=0;G<D.length;G++){const Y=D[G],ee=v(Y);E(Y,C.__data,z),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(D,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,C.__data)}}function E(C,U,I){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,I)}function P(C,U,I,k){const w=C.value,D=U+"_"+I;if(k[D]===void 0)return typeof w=="number"||typeof w=="boolean"?k[D]=w:ArrayBuffer.isView(w)?k[D]=w.slice():k[D]=w.clone(),!0;{const z=k[D];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return k[D]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(z.equals(w)===!1)return z.copy(w),!0}}return!1}function _(C){const U=C.uniforms;let I=0;const k=16;for(let D=0,z=U.length;D<z;D++){const G=Array.isArray(U[D])?U[D]:[U[D]];for(let Y=0,ee=G.length;Y<ee;Y++){const W=G[Y],Z=Array.isArray(W.value)?W.value:[W.value];for(let fe=0,te=Z.length;fe<te;fe++){const ne=Z[fe],Q=v(ne),$=I%k,T=$%Q.boundary,le=$+T;I+=T,le!==0&&k-le<Q.storage&&(I+=k-le),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=I,I+=Q.storage}}}const w=I%k;return w>0&&(I+=k-w),C.__size=I,C.__cache={},this}function v(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",C),U}function R(C){const U=C.target;U.removeEventListener("dispose",R);const I=u.indexOf(U.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function F(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:m,update:p,dispose:F}}const QE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qr=null;function ew(){return Qr===null&&(Qr=new V_(QE,16,16,za,as),Qr.name="DFG_LUT",Qr.minFilter=Ti,Qr.magFilter=Ti,Qr.wrapS=Rs,Qr.wrapT=Rs,Qr.generateMipmaps=!1,Qr.needsUpdate=!0),Qr}class tw{constructor(e={}){const{canvas:t=g_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=lr}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const P=M,_=new Set([Yh,$h,jh]),v=new Set([lr,ss,Ll,Nl,Xh,qh]),R=new Uint32Array(4),F=new Int32Array(4),C=new ie;let U=null,I=null;const k=[],w=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,Y=null,ee=null,W=null,Z=null;this._outputColorSpace=wr;let fe=0,te=0,ne=null,Q=-1,$=null;const T=new Dn,le=new Dn;let Se=null;const Ie=new Wt(0);let je=0,Ue=t.width,re=t.height,he=1,Re=null,Ye=null;const Oe=new Dn(0,0,Ue,re),ft=new Dn(0,0,Ue,re);let kt=!1;const pt=new tp;let ht=!1,At=!1;const gt=new Pn,Xt=new ie,Ut=new Dn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function qt(){return ne===null?he:1}let X=s;function fn(A,H){return t.getContext(A,H)}let Tt,B,b,K,se,de,Ne,Ae,xe,Me,Ve,et,Be,Fe,nt,ot,lt,q,De,ye,Ee,ge,we;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gh}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),X===null){const H="webgl2";if(X=fn(H,A),X===null)throw fn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(A){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),on("WebGLRenderer: "+A.message),A}function ze(){Tt=new e1(X),Tt.init(),Ee=new XE(X,Tt),B=new WM(X,Tt,e,Ee),b=new HE(X,Tt),B.reversedDepthBuffer&&x&&b.buffers.depth.setReversed(!0),ee=X.createFramebuffer(),W=X.createFramebuffer(),Z=X.createFramebuffer(),K=new i1(X),se=new CE,de=new WE(X,Tt,b,se,B,Ee,K),Ne=new QM(z),Ae=new sy(X),ge=new GM(X,Ae),xe=new t1(X,Ae,K,ge),Me=new s1(X,xe,Ae,ge,K),q=new r1(X,B,de),nt=new XM(se),Ve=new RE(z,Ne,Tt,B,ge,nt),et=new ZE(z,se),Be=new LE,Fe=new FE(Tt),lt=new VM(z,Ne,b,Me,E,m),ot=new GE(z,Me,B),we=new JE(X,K,B,b),De=new HM(X,Tt,K),ye=new n1(X,Tt,K),K.programs=Ve.programs,z.capabilities=B,z.extensions=Tt,z.properties=se,z.renderLists=Be,z.shadowMap=ot,z.state=b,z.info=K}P!==lr&&(D=new o1(P,t.width,t.height,f,o,l));const Ke=new YE(z,X);this.xr=Ke,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(Ue,re,!1))},this.getSize=function(A){return A.set(Ue,re)},this.setSize=function(A,H,pe=!0){if(Ke.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=A,re=H,t.width=Math.floor(A*he),t.height=Math.floor(H*he),pe===!0&&(t.style.width=A+"px",t.style.height=H+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Ue*he,re*he).floor()},this.setDrawingBufferSize=function(A,H,pe){Ue=A,re=H,he=pe,t.width=Math.floor(A*pe),t.height=Math.floor(H*pe),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(P===lr){on("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,H,pe,ae){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,H,pe,ae),b.viewport(T.copy(Oe).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,H,pe,ae){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,H,pe,ae),b.scissor(le.copy(ft).multiplyScalar(he).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(A){b.setScissorTest(kt=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,pe=!0){let ae=0;if(A){let oe=!1;if(ne!==null){const Xe=ne.texture.format;oe=_.has(Xe)}if(oe){const Xe=ne.texture.type,He=v.has(Xe),We=lt.getClearColor(),it=lt.getClearAlpha(),st=We.r,mt=We.g,St=We.b;He?(R[0]=st,R[1]=mt,R[2]=St,R[3]=it,X.clearBufferuiv(X.COLOR,0,R)):(F[0]=st,F[1]=mt,F[2]=St,F[3]=it,X.clearBufferiv(X.COLOR,0,F))}else ae|=X.COLOR_BUFFER_BIT}H&&(ae|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),lt.dispose(),Be.dispose(),Fe.dispose(),se.dispose(),Ne.dispose(),Me.dispose(),ge.dispose(),we.dispose(),Ve.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Zn),Ke.removeEventListener("sessionend",Ki),An.stop()};function Te(A){A.preventDefault(),C0("WebGLRenderer: Context Lost."),G=!0}function tt(){C0("WebGLRenderer: Context Restored."),G=!1;const A=K.autoReset,H=ot.enabled,pe=ot.autoUpdate,ae=ot.needsUpdate,oe=ot.type;ze(),K.autoReset=A,ot.enabled=H,ot.autoUpdate=pe,ot.needsUpdate=ae,ot.type=oe}function Ot(A){on("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gn(A){const H=A.target;H.removeEventListener("dispose",gn),Ri(H)}function Ri(A){gi(A),se.remove(A)}function gi(A){const H=se.get(A).programs;H!==void 0&&(H.forEach(function(pe){Ve.releaseProgram(pe)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,pe,ae,oe,Xe){H===null&&(H=en);const He=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,We=ln(A,H,pe,ae,oe);b.setMaterial(ae,He);let it=pe.index,st=1;if(ae.wireframe===!0){if(it=xe.getWireframeAttribute(pe),it===void 0)return;st=2}const mt=pe.drawRange,St=pe.attributes.position;let $e=mt.start*st,Nt=(mt.start+mt.count)*st;Xe!==null&&($e=Math.max($e,Xe.start*st),Nt=Math.min(Nt,(Xe.start+Xe.count)*st)),it!==null?($e=Math.max($e,0),Nt=Math.min(Nt,it.count)):St!=null&&($e=Math.max($e,0),Nt=Math.min(Nt,St.count));const pn=Nt-$e;if(pn<0||pn===1/0)return;ge.setup(oe,ae,We,pe,it);let tn,jt=De;if(it!==null&&(tn=Ae.get(it),jt=ye,jt.setIndex(tn)),oe.isMesh)ae.wireframe===!0?(b.setLineWidth(ae.wireframeLinewidth*qt()),jt.setMode(X.LINES)):jt.setMode(X.TRIANGLES);else if(oe.isLine){let Rn=ae.linewidth;Rn===void 0&&(Rn=1),b.setLineWidth(Rn*qt()),oe.isLineSegments?jt.setMode(X.LINES):oe.isLineLoop?jt.setMode(X.LINE_LOOP):jt.setMode(X.LINE_STRIP)}else oe.isPoints?jt.setMode(X.POINTS):oe.isSprite&&jt.setMode(X.TRIANGLES);if(oe.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))jt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Rn=oe._multiDrawStarts,Ze=oe._multiDrawCounts,cn=oe._multiDrawCount,Pt=it?Ae.get(it).bytesPerElement:1,Un=se.get(ae).currentProgram.getUniforms();for(let Mt=0;Mt<cn;Mt++)Un.setValue(X,"_gl_DrawID",Mt),jt.render(Rn[Mt]/Pt,Ze[Mt])}else if(oe.isInstancedMesh)jt.renderInstances($e,pn,oe.count);else if(pe.isInstancedBufferGeometry){const Rn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ze=Math.min(pe.instanceCount,Rn);jt.renderInstances($e,pn,Ze)}else jt.render($e,pn)};function hn(A,H,pe,ae){Y!==null&&A.isNodeMaterial&&Y.setObject(ae,A),ht===!0&&nt.setState(A,pe,!1),A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Yi,A.needsUpdate=!0,Zi(A,H,ae),A.side=Fa,A.needsUpdate=!0,Zi(A,H,ae),A.side=$i):Zi(A,H,ae)}this.compile=function(A,H,pe=null){pe===null&&(pe=A),Y!==null&&Y.renderStart(A,H,pe),I=Fe.get(pe),I.init(H),w.push(I),pe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(H.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),A!==pe&&A.traverseVisible(function(oe){oe.isLight&&oe.layers.test(H.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),I.setupLights(),Y!==null&&Y.updateLights(I.state.lightsArray),At=this.localClippingEnabled,ht=nt.init(this.clippingPlanes,At),ht===!0&&nt.setGlobalState(this.clippingPlanes,H),Y!==null&&ot.render(I.state.shadowsArray,pe,H);const ae=new Set;return A.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Xe=oe.material;if(Xe)if(Array.isArray(Xe))for(let He=0;He<Xe.length;He++){const We=Xe[He];hn(We,pe,H,oe),ae.add(We)}else hn(Xe,pe,H,oe),ae.add(Xe)}),I=w.pop(),Y!==null&&Y.renderEnd(),ae},this.compileAsync=function(A,H,pe=null){const ae=this.compile(A,H,pe);return new Promise(oe=>{function Xe(){if(ae.forEach(function(He){const it=se.get(He).currentProgram;(it===void 0||it.isReady())&&ae.delete(He)}),ae.size===0){oe(A);return}setTimeout(Xe,10)}Tt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Qt=null;function ki(A){Qt&&Qt(A)}function Zn(){An.stop()}function Ki(){An.start()}const An=new av;An.setAnimationLoop(ki),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(A){Qt=A,Ke.setAnimationLoop(A),A===null?An.stop():An.start()},Ke.addEventListener("sessionstart",Zn),Ke.addEventListener("sessionend",Ki),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(A,H);const pe=Ke.enabled===!0&&Ke.isPresenting===!0,ae=D!==null&&(ne===null||pe)&&D.begin(z,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(H),H=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,H,ne),I=Fe.get(A,w.length),I.init(H),I.state.textureUnits=de.getTextureUnits(),w.push(I),gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),pt.setFromProjectionMatrix(gt,is,H.reversedDepth),At=this.localClippingEnabled,ht=nt.init(this.clippingPlanes,At),U=Be.get(A,k.length),U.init(),k.push(U),Ke.enabled===!0&&Ke.isPresenting===!0){const He=z.xr.getDepthSensingMesh();He!==null&&Fn(He,H,-1/0,z.sortObjects)}Fn(A,H,0,z.sortObjects),U.finish(),Y!==null&&Y.updateLights(I.state.lightsArray),z.sortObjects===!0&&U.sort(Re,Ye),yt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,yt&&lt.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&nt.beginShadows();const oe=I.state.shadowsArray;if(ot.render(oe,A,H),ht===!0&&nt.endShadows(),(ae&&D.hasRenderPass())===!1){const He=U.opaque,We=U.transmissive;if(I.setupLights(),H.isArrayCamera){const it=H.cameras;if(We.length>0)for(let st=0,mt=it.length;st<mt;st++){const St=it[st];Tr(He,We,A,St)}yt&&lt.render(A);for(let st=0,mt=it.length;st<mt;st++){const St=it[st];ai(U,A,St,St.viewport)}}else We.length>0&&Tr(He,We,A,H),yt&&lt.render(A),ai(U,A,H)}ne!==null&&te===0&&(de.updateMultisampleRenderTarget(ne),de.updateRenderTargetMipmap(ne)),ae&&D.end(z),A.isScene===!0&&A.onAfterRender(z,A,H),ge.resetDefaultState(),Q=-1,$=null,w.pop(),w.length>0?(I=w[w.length-1],de.setTextureUnits(I.state.textureUnits),ht===!0&&nt.setGlobalState(z.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?U=k[k.length-1]:U=null,Y!==null&&Y.renderEnd()};function Fn(A,H,pe,ae){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)pe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(pt)){ae&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const He=Me.update(A),We=A.material;We.visible&&U.push(A,He,We,pe,Ut.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(pt))){const He=Me.update(A),We=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ut.copy(He.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(We)){const it=He.groups;for(let st=0,mt=it.length;st<mt;st++){const St=it[st],$e=We[St.materialIndex];$e&&$e.visible&&U.push(A,He,$e,pe,Ut.z,St,H)}}else We.visible&&U.push(A,He,We,pe,Ut.z,null,H)}}const Xe=A.children;for(let He=0,We=Xe.length;He<We;He++)Fn(Xe[He],H,pe,ae)}function ai(A,H,pe,ae){const{opaque:oe,transmissive:Xe,transparent:He}=A;I.setupLightsView(pe),ht===!0&&nt.setGlobalState(z.clippingPlanes,pe),ae&&b.viewport(T.copy(ae)),oe.length>0&&_t(oe,H,pe),Xe.length>0&&_t(Xe,H,pe),He.length>0&&_t(He,H,pe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Tr(A,H,pe,ae){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ae.id]===void 0){const $e=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ae.id]=new Br(1,1,{generateMipmaps:!0,type:$e?as:lr,minFilter:Ua,samples:Math.max(4,B.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const Xe=I.state.transmissionRenderTarget[ae.id],He=ae.viewport||T;Xe.setSize(He.z*z.transmissionResolutionScale,He.w*z.transmissionResolutionScale);const We=z.getRenderTarget(),it=z.getActiveCubeFace(),st=z.getActiveMipmapLevel();z.setRenderTarget(Xe),z.getClearColor(Ie),je=z.getClearAlpha(),je<1&&z.setClearColor(16777215,.5),z.clear(),yt&&lt.render(pe);const mt=z.toneMapping;z.toneMapping=rs;const St=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),I.setupLightsView(ae),ht===!0&&nt.setGlobalState(z.clippingPlanes,ae),_t(A,pe,ae),de.updateMultisampleRenderTarget(Xe),de.updateRenderTargetMipmap(Xe),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Nt=0,pn=H.length;Nt<pn;Nt++){const tn=H[Nt],{object:jt,geometry:Rn,material:Ze,group:cn}=tn;if(Ze.side===$i&&jt.layers.test(ae.layers)){const Pt=Ze.side;Ze.side=Yi,Ze.needsUpdate=!0,cr(jt,pe,ae,Rn,Ze,cn),Ze.side=Pt,Ze.needsUpdate=!0,$e=!0}}$e===!0&&(de.updateMultisampleRenderTarget(Xe),de.updateRenderTargetMipmap(Xe))}z.setRenderTarget(We,it,st),z.setClearColor(Ie,je),St!==void 0&&(ae.viewport=St),z.toneMapping=mt}function _t(A,H,pe){const ae=H.isScene===!0?H.overrideMaterial:null;for(let oe=0,Xe=A.length;oe<Xe;oe++){const He=A[oe],{object:We,geometry:it,group:st}=He;let mt=He.material;mt.allowOverride===!0&&ae!==null&&(mt=ae),We.layers.test(pe.layers)&&cr(We,H,pe,it,mt,st)}}function cr(A,H,pe,ae,oe,Xe){Y!==null&&oe.isNodeMaterial&&Y.setObject(A,oe),A.onBeforeRender(z,H,pe,ae,oe,Xe),A.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(z,H,pe,ae,A,Xe),oe.transparent===!0&&oe.side===$i&&oe.forceSinglePass===!1?(oe.side=Yi,oe.needsUpdate=!0,z.renderBufferDirect(pe,H,ae,oe,A,Xe),oe.side=Fa,oe.needsUpdate=!0,z.renderBufferDirect(pe,H,ae,oe,A,Xe),oe.side=$i):z.renderBufferDirect(pe,H,ae,oe,A,Xe),A.onAfterRender(z,H,pe,ae,oe,Xe)}function Zi(A,H,pe){H.isScene!==!0&&(H=en);const ae=se.get(A),oe=I.state.lights,Xe=I.state.shadowsArray,He=oe.state.version,We=Ve.getParameters(A,oe.state,Xe,H,pe,I.state.lightProbeGridArray),it=Ve.getProgramCacheKey(We);let st=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,ae.fog=H.fog;const mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Ne.get(A.envMap||ae.environment,mt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",gn),st=new Map,ae.programs=st);let St=st.get(it);if(St!==void 0){if(ae.currentProgram===St&&ae.lightsStateVersion===He)return ls(A,We),St}else We.uniforms=Ve.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,pe,We),A.onBeforeCompile(We,z),St=Ve.acquireProgram(We,it),st.set(it,St),ae.uniforms=We.uniforms;const $e=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=nt.uniform),ls(A,We),ae.needsLights=Ji(A),ae.lightsStateVersion=He,ae.needsLights&&($e.ambientLightColor.value=oe.state.ambient,$e.lightProbe.value=oe.state.probe,$e.sunLights.value=oe.state.sun,$e.sunLightShadows.value=oe.state.sunShadow,$e.directionalLights.value=oe.state.directional,$e.directionalLightShadows.value=oe.state.directionalShadow,$e.spotLights.value=oe.state.spot,$e.spotLightShadows.value=oe.state.spotShadow,$e.rectAreaLights.value=oe.state.rectArea,$e.ltc_1.value=oe.state.rectAreaLTC1,$e.ltc_2.value=oe.state.rectAreaLTC2,$e.pointLights.value=oe.state.point,$e.pointLightShadows.value=oe.state.pointShadow,$e.hemisphereLights.value=oe.state.hemi,$e.sunShadowMatrix.value=oe.state.sunShadowMatrix,$e.sunShadowCascade.value=oe.state.sunShadowCascade,$e.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,$e.spotLightMatrix.value=oe.state.spotLightMatrix,$e.spotLightMap.value=oe.state.spotLightMap,$e.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=I.state.lightProbeGridArray.length>0,ae.currentProgram=St,ae.uniformsList=null,St}function oi(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Su.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function ls(A,H){const pe=se.get(A);pe.outputColorSpace=H.outputColorSpace,pe.batching=H.batching,pe.batchingColor=H.batchingColor,pe.instancing=H.instancing,pe.instancingColor=H.instancingColor,pe.instancingMorph=H.instancingMorph,pe.skinning=H.skinning,pe.morphTargets=H.morphTargets,pe.morphNormals=H.morphNormals,pe.morphColors=H.morphColors,pe.morphTargetsCount=H.morphTargetsCount,pe.numClippingPlanes=H.numClippingPlanes,pe.numIntersection=H.numClipIntersection,pe.vertexAlphas=H.vertexAlphas,pe.vertexTangents=H.vertexTangents,pe.toneMapping=H.toneMapping}function cs(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let pe=0,ae=A.length;pe<ae;pe++){const oe=A[pe];if(oe.texture!==null&&oe.boundingBox.containsPoint(C))return oe}return null}function ln(A,H,pe,ae,oe){H.isScene!==!0&&(H=en),de.resetTextureUnits();const Xe=H.fog,He=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?H.environment:null,We=ne===null?z.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Zt.workingColorSpace,it=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,st=Ne.get(ae.envMap||He,it),mt=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,St=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),$e=!!pe.morphAttributes.position,Nt=!!pe.morphAttributes.normal,pn=!!pe.morphAttributes.color;let tn=rs;ae.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(tn=z.toneMapping);const jt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Rn=jt!==void 0?jt.length:0,Ze=se.get(ae),cn=I.state.lights;if(ht===!0&&(At===!0||A!==$)){const It=A===$&&ae.id===Q;nt.setState(ae,A,It)}let Pt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==cn.state.version||Ze.outputColorSpace!==We||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isBatchedMesh&&Ze.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ze.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ze.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ze.instancingMorph===!1&&oe.morphTexture!==null||Ze.envMap!==st||ae.fog===!0&&Ze.fog!==Xe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==nt.numPlanes||Ze.numIntersection!==nt.numIntersection)||Ze.vertexAlphas!==mt||Ze.vertexTangents!==St||Ze.morphTargets!==$e||Ze.morphNormals!==Nt||Ze.morphColors!==pn||Ze.toneMapping!==tn||Ze.morphTargetsCount!==Rn||!!Ze.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Ze.__version=ae.version);let Un=Ze.currentProgram;Pt===!0&&(Un=Zi(ae,H,oe),Y&&ae.isNodeMaterial&&Y.onUpdateProgram(ae,Un,Ze));let Mt=!1,li=!1,vi=!1;const Vt=Un.getUniforms(),nn=Ze.uniforms;if(b.useProgram(Un.program)&&(Mt=!0,li=!0,vi=!0),ae.id!==Q&&(Q=ae.id,li=!0),Ze.needsLights){const It=cs(I.state.lightProbeGridArray,oe);Ze.lightProbeGrid!==It&&(Ze.lightProbeGrid=It,li=!0)}if(Mt||$!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Vt.setValue(X,"projectionMatrix",A.projectionMatrix),Vt.setValue(X,"viewMatrix",A.matrixWorldInverse);const ui=Vt.map.cameraPosition;ui!==void 0&&ui.setValue(X,Xt.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,li=!0,vi=!0)}if(Ze.needsLights&&(cn.state.sunShadowMap.length>0&&Vt.setValue(X,"sunShadowMap",cn.state.sunShadowMap,de),cn.state.directionalShadowMap.length>0&&Vt.setValue(X,"directionalShadowMap",cn.state.directionalShadowMap,de),cn.state.spotShadowMap.length>0&&Vt.setValue(X,"spotShadowMap",cn.state.spotShadowMap,de),cn.state.pointShadowMap.length>0&&Vt.setValue(X,"pointShadowMap",cn.state.pointShadowMap,de)),oe.isSkinnedMesh){Vt.setOptional(X,oe,"bindMatrix"),Vt.setOptional(X,oe,"bindMatrixInverse");const It=oe.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Vt.setValue(X,"boneTexture",It.boneTexture,de))}oe.isBatchedMesh&&(Vt.setOptional(X,oe,"batchingTexture"),Vt.setValue(X,"batchingTexture",oe._matricesTexture,de),Vt.setOptional(X,oe,"batchingIdTexture"),Vt.setValue(X,"batchingIdTexture",oe._indirectTexture,de),Vt.setOptional(X,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Vt.setValue(X,"batchingColorTexture",oe._colorsTexture,de));const ci=pe.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&q.update(oe,pe,Un),(li||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,Vt.setValue(X,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=ew()),li){if(Vt.setValue(X,"toneMappingExposure",z.toneMappingExposure),Ze.needsLights&&Ci(nn,vi),Xe&&ae.fog===!0&&et.refreshFogUniforms(nn,Xe),et.refreshMaterialUniforms(nn,ae,he,re,I.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.lightProbeGrid){const It=Ze.lightProbeGrid;nn.probesSH.value=It.texture,nn.probesMin.value.copy(It.boundingBox.min),nn.probesMax.value.copy(It.boundingBox.max),nn.probesResolution.value.copy(It.resolution)}Su.upload(X,oi(Ze),nn,de)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Su.upload(X,oi(Ze),nn,de),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(X,"center",oe.center),Vt.setValue(X,"modelViewMatrix",oe.modelViewMatrix),Vt.setValue(X,"normalMatrix",oe.normalMatrix),Vt.setValue(X,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let ui=0,Jn=It.length;ui<Jn;ui++){const di=It[ui];we.update(di,Un),we.bind(di,Un)}}return Un}function Ci(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ji(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,H,pe){const ae=se.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=H,se.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:pe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const pe=se.get(A);pe.__webglFramebuffer=H,pe.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,pe=0){ne=A,fe=H,te=pe;let ae=null,oe=!1,Xe=!1;if(A){const We=se.get(A);if(We.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,We.__webglFramebuffer),T.copy(A.viewport),le.copy(A.scissor),Se=A.scissorTest,b.viewport(T),b.scissor(le),b.setScissorTest(Se),Q=-1;return}else if(We.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(We.__hasExternalTextures)de.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const mt=A.depthTexture;if(We.__boundDepthTexture!==mt){if(mt!==null&&se.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Xe=!0);const st=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[H])?ae=st[H][pe]:ae=st[H],oe=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ae=se.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?ae=st[pe]:ae=st,T.copy(A.viewport),le.copy(A.scissor),Se=A.scissorTest}else T.copy(Oe).multiplyScalar(he).floor(),le.copy(ft).multiplyScalar(he).floor(),Se=kt;if(pe!==0&&(ae=ee),b.bindFramebuffer(X.FRAMEBUFFER,ae)&&b.drawBuffers(A,ae),b.viewport(T),b.scissor(le),b.setScissorTest(Se),oe){const We=se.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,We.__webglTexture,pe)}else if(Xe){const We=H;for(let it=0;it<A.textures.length;it++){const st=se.get(A.textures[it]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+it,st.__webglTexture,pe,We)}}else if(A!==null&&pe!==0){const We=se.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,We.__webglTexture,pe)}Q=-1};function ur(A){const H=se.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=B.textureFormatReadable(A.format),H.__typeReadable=B.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,pe,ae,oe,Xe,He,We=0){if(!(A&&A.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(it=it[He]),it){b.bindFramebuffer(X.FRAMEBUFFER,it);try{const st=A.textures[We],mt=st.format,St=st.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We);const $e=ur(st);if($e.__formatReadable===!1){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-ae&&pe>=0&&pe<=A.height-oe&&X.readPixels(H,pe,ae,oe,Ee.convert(mt),Ee.convert(St),Xe)}finally{const st=ne!==null?se.get(ne).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(A,H,pe,ae,oe,Xe,He,We=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(it=it[He]),it)if(H>=0&&H<=A.width-ae&&pe>=0&&pe<=A.height-oe){b.bindFramebuffer(X.FRAMEBUFFER,it);const st=A.textures[We],mt=st.format,St=st.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We);const $e=ur(st);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Nt),X.bufferData(X.PIXEL_PACK_BUFFER,Xe.byteLength,X.STREAM_READ),X.readPixels(H,pe,ae,oe,Ee.convert(mt),Ee.convert(St),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const pn=ne!==null?se.get(ne).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,pn);const tn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await v_(X,tn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Nt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Xe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Nt),X.deleteSync(tn),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,pe=0){const ae=Math.pow(2,-pe),oe=Math.floor(A.image.width*ae),Xe=Math.floor(A.image.height*ae),He=H!==null?H.x:0,We=H!==null?H.y:0;de.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,pe,0,0,He,We,oe,Xe),b.unbindTexture()},this.copyTextureToTexture=function(A,H,pe=null,ae=null,oe=0,Xe=0){let He,We,it,st,mt,St,$e,Nt,pn;const tn=A.isCompressedTexture?A.mipmaps[Xe]:A.image;if(pe!==null)He=pe.max.x-pe.min.x,We=pe.max.y-pe.min.y,it=pe.isBox3?pe.max.z-pe.min.z:1,st=pe.min.x,mt=pe.min.y,St=pe.isBox3?pe.min.z:0;else{const nn=Math.pow(2,-oe);He=Math.floor(tn.width*nn),We=Math.floor(tn.height*nn),A.isDataArrayTexture?it=tn.depth:A.isData3DTexture?it=Math.floor(tn.depth*nn):it=1,st=0,mt=0,St=0}ae!==null?($e=ae.x,Nt=ae.y,pn=ae.z):($e=0,Nt=0,pn=0);const jt=Ee.convert(H.format),Rn=Ee.convert(H.type);let Ze;H.isData3DTexture?(de.setTexture3D(H,0),Ze=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(de.setTexture2DArray(H,0),Ze=X.TEXTURE_2D_ARRAY):(de.setTexture2D(H,0),Ze=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);const cn=b.getParameter(X.UNPACK_ROW_LENGTH),Pt=b.getParameter(X.UNPACK_IMAGE_HEIGHT),Un=b.getParameter(X.UNPACK_SKIP_PIXELS),Mt=b.getParameter(X.UNPACK_SKIP_ROWS),li=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,tn.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,tn.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,st),b.pixelStorei(X.UNPACK_SKIP_ROWS,mt),b.pixelStorei(X.UNPACK_SKIP_IMAGES,St);const vi=A.isDataArrayTexture||A.isData3DTexture,Vt=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const nn=se.get(A),ci=se.get(H),It=se.get(nn.__renderTarget),ui=se.get(ci.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,It.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Jn=0;Jn<it;Jn++)vi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,se.get(A).__webglTexture,oe,St+Jn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,se.get(H).__webglTexture,Xe,pn+Jn)),X.blitFramebuffer(st,mt,He,We,$e,Nt,He,We,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(oe!==0||A.isRenderTargetTexture||se.has(A)){const nn=se.get(A),ci=se.get(H);b.bindFramebuffer(X.READ_FRAMEBUFFER,W),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Z);for(let It=0;It<it;It++)vi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nn.__webglTexture,oe,St+It):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,nn.__webglTexture,oe),Vt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ci.__webglTexture,Xe,pn+It):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ci.__webglTexture,Xe),oe!==0?X.blitFramebuffer(st,mt,He,We,$e,Nt,He,We,X.COLOR_BUFFER_BIT,X.NEAREST):Vt?X.copyTexSubImage3D(Ze,Xe,$e,Nt,pn+It,st,mt,He,We):X.copyTexSubImage2D(Ze,Xe,$e,Nt,st,mt,He,We);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Vt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ze,Xe,$e,Nt,pn,He,We,it,jt,Rn,tn.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Ze,Xe,$e,Nt,pn,He,We,it,jt,tn.data):X.texSubImage3D(Ze,Xe,$e,Nt,pn,He,We,it,jt,Rn,tn):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Xe,$e,Nt,He,We,jt,Rn,tn.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Xe,$e,Nt,tn.width,tn.height,jt,tn.data):X.texSubImage2D(X.TEXTURE_2D,Xe,$e,Nt,He,We,jt,Rn,tn);b.pixelStorei(X.UNPACK_ROW_LENGTH,cn),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pt),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Un),b.pixelStorei(X.UNPACK_SKIP_ROWS,Mt),b.pixelStorei(X.UNPACK_SKIP_IMAGES,li),Xe===0&&H.generateMipmaps&&X.generateMipmap(Ze),b.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){fe=0,te=0,ne=null,b.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}}function nw(r,e,t,s=62206,o=16638023){for(;r.children.length>0;)r.remove(r.children[0]);for(;e.children.length>0;)e.remove(e.children[0]);const l={londonEyeWheel:null,eiffelBeacon:null,libertyTorchHalo:null,auroraMesh:null},u=new Ht({color:330518,fog:!1}),f=new Ht({color:s,fog:!1}),m=new Ht({color:o,fog:!1}),p=new Ht({color:16777215,fog:!1}),y=new Ht({color:62206,fog:!1}),S=new Ht({color:16638023,fog:!1}),x=new Ht({color:15680580,fog:!1}),M=(P,_,v,R,F,C,U,I=f)=>{const k=new Et(_,v,R),w=new ve(k,u);w.position.set(F,C,U);const D=new To(k),z=new bo(D,new sa({color:I.color,fog:!1}));return w.add(z),P.add(w),w},E=-28;if(t==="obelisco"){const P=new Ht({color:3718648,fog:!1}),_=M(r,5.2,68,5.2,-10,E+34,0,P),v=new Et(1.1,66,5.4),R=new ve(v,p);_.add(R);const F=new Fi(3.7,10,4);F.rotateY(Math.PI/4);const C=new ve(F,p);C.position.set(-10,E+73,0),r.add(C);const U=new Et(36,1.4,3.2),I=new ve(U,P);I.position.set(14,E+12,2),r.add(I);const k=new sn(.45,.9,42,10),w=new ve(k,p);w.position.set(12,E+28,2),w.rotation.z=-.46,r.add(w);for(let D=0;D<6;D++){const z=new sn(.08,.08,24+D*2,6),G=new ve(z,P);G.position.set(16+D*2.2,E+21,2),G.rotation.z=.55+D*.06,r.add(G)}}else if(t==="cristo"){const P=new Fi(28,44,7),_=new ve(P,u);_.position.set(0,E+14,0);const v=new bo(new To(P),new sa({color:2278750,fog:!1}));_.add(v),r.add(_),M(r,7,10,7,0,E+39,0,S);const R=M(r,6.2,26,4.2,0,E+57,0,p),F=new ve(new Et(3.8,25,4.4),new Ht({color:14742270,fog:!1}));R.add(F);const C=new Et(32,3.2,3),U=new ve(C,p);U.position.set(0,E+64,0),r.add(U);const I=new ri(2.6,14,14),k=new ve(I,p);k.position.set(0,E+72.5,.5),r.add(k);const w=new Fi(12,55,16,1,!0),D=new Ht({color:4906624,transparent:!0,opacity:.18,blending:ji,side:$i,depthWrite:!1,fog:!1}),z=new ve(w,D);z.position.set(-14,E+46,2),z.rotation.z=-.35,r.add(z);const G=new ve(w,D);G.position.set(14,E+46,2),G.rotation.z=.35,r.add(G)}else if(t==="liberty_empire"){M(r,11,20,11,-16,E+10,0,y),M(r,6.5,28,5.5,-16,E+34,0,y);const P=new ve(new ri(2.8,12,12),y);P.position.set(-16,E+50,0),r.add(P);for(let C=-3;C<=3;C++){const U=new ve(new Fi(.35,3.6,6),y);U.position.set(-16+C*.9,E+53,0),U.rotation.z=-C*.22,r.add(U)}const _=new ve(new sn(.7,.9,14,8),y);_.position.set(-12.5,E+54,0),_.rotation.z=-.25,r.add(_);const v=new ve(new ri(2.2,16,16),S);v.position.set(-10.8,E+62,0),r.add(v);const R=new ve(new ri(5.2,16,16),new Ht({color:16638023,transparent:!0,opacity:.42,blending:ji,fog:!1}));R.position.copy(v.position),r.add(R),l.libertyTorchHalo=R,M(r,14,52,12,15,E+26,-2,y),M(r,9.5,18,9,15,E+61,-2,y),M(r,5.5,12,5.5,15,E+76,-2,S);const F=new ve(new sn(.25,.9,24,10),p);F.position.set(15,E+94,-2),r.add(F)}else if(t==="eiffel"){const P=new Ht({color:16498468,fog:!1}),_=[[-11,-6],[11,-6],[-11,6],[11,6]];for(let k=0;k<_.length;k++){const[w,D]=_[k],z=new sn(1.1,2.4,30,8),G=new ve(z,P);G.position.set(w*.72,E+14,D*.72),G.rotation.z=w<0?-.24:.24,r.add(G)}M(r,20,3.2,14,0,E+28,0,S),M(r,12,24,9,0,E+42,0,P),M(r,14,2.6,10,0,E+54,0,S);const v=new ve(new sn(1.2,4.8,34,4,4,!0),new Ht({color:16638023,wireframe:!0,fog:!1}));v.position.set(0,E+72,0),v.rotation.y=Math.PI/4,r.add(v);const R=new Kt;R.position.set(0,E+90,0);const F=new Fi(9,75,16,1,!0);F.translate(0,-37.5,0),F.rotateZ(Math.PI/2);const C=new Ht({color:16707722,transparent:!0,opacity:.32,blending:ji,side:$i,depthWrite:!1,fog:!1}),U=new ve(F,C),I=new ve(F,C);I.rotation.y=Math.PI,R.add(U),R.add(I),r.add(R),l.eiffelBeacon=R}else if(t==="tokyotower"){const P=[{y:14,rBot:11,rTop:7,h:28,mat:x},{y:38,rBot:7,rTop:4.5,h:20,mat:p},{y:56,rBot:4.5,rTop:2.4,h:16,mat:x},{y:71,rBot:2.4,rTop:.8,h:14,mat:p},{y:84,rBot:.8,rTop:.2,h:14,mat:x}];for(let I=0;I<P.length;I++){const k=P[I],w=new sn(k.rTop,k.rBot,k.h,4,2,!0),D=new ve(w,new Ht({color:k.mat.color,wireframe:!0,fog:!1}));D.position.set(0,E+k.y,0),D.rotation.y=Math.PI/4,r.add(D)}const _=new sn(.24,.28,6.2,12),v=new ve(_,x);v.position.set(-2.5,3.1,2.2),e.add(v);const R=new ve(_,x);R.position.set(2.5,3.1,2.2),e.add(R);const F=new ve(new Et(7.2,.42,.55),x);F.position.set(0,6.2,2.2),e.add(F);const C=new ve(new Et(7.5,.16,.6),S);C.position.set(0,6.48,2.2),e.add(C);const U=new ve(new Et(5.8,.28,.38),x);U.position.set(0,4.9,2.2),e.add(U)}else if(t==="pyramids"){const P=[{x:0,z:-4,r:26,h:48},{x:-24,z:4,r:19,h:36},{x:24,z:6,r:16,h:30}];for(let _=0;_<P.length;_++){const v=P[_],R=new Fi(v.r,v.h,4);R.rotateY(Math.PI/4);const F=new ve(R,u);F.position.set(v.x,E+v.h*.5,v.z);const C=new To(R),U=new bo(C,new sa({color:16638023,fog:!1}));F.add(U);const I=new Fi(v.r*.22,v.h*.22,4);I.rotateY(Math.PI/4);const k=new ve(I,S);k.position.set(0,v.h*.39,0),F.add(k),r.add(F)}}else if(t==="londoneye"){M(r,7.5,54,7.5,-18,E+27,0,S),M(r,8.6,8.6,8.6,-18,E+58,0,S);const P=new ve(new sn(3.2,3.2,.5,20),S);P.rotation.x=Math.PI/2,P.position.set(-18,E+58,4.4),r.add(P);const _=new ve(new Fi(5.2,16,4),S);_.rotation.y=Math.PI/4,_.position.set(-18,E+70,0),r.add(_);const v=new Kt;v.position.set(14,E+42,0);const R=new ve(new Wn(21,.65,12,48),y);v.add(R);for(let F=0;F<12;F++){const C=F/12*Math.PI*2,U=new ve(new sn(.12,.12,42,6),y);U.rotation.z=C,v.add(U);const I=new ve(new ri(1.15,10,10),p);I.position.set(Math.cos(C)*21,Math.sin(C)*21,0),v.add(I)}r.add(v),l.londonEyeWheel=v}else if(t==="burjkhalifa"){const P=[{w:15,h:24,y:12},{w:12,h:24,y:36},{w:9,h:22,y:59},{w:6.2,h:22,y:81},{w:3.6,h:20,y:102},{w:1.5,h:24,y:124}];for(let _=0;_<P.length;_++){const v=P[_];M(r,v.w,v.h,v.w,0,E+v.y,0,y);const R=new ve(new Wn(v.w*.68,.32,10,28),_%2===0?y:S);R.rotation.x=Math.PI/2,R.position.set(0,E+v.y+v.h*.5,0),r.add(R)}}else if(t==="opera"){M(r,44,6,14,0,E+12,0,S);const P=[-14,-6,3,12];for(let R=0;R<P.length;R++){const F=P[R],C=22+R%2*8,U=new Fi(6.5,C,4),I=new ve(U,p);I.position.set(F,E+15+C*.45,2),I.rotation.z=-.28;const k=new bo(new To(U),new sa({color:62206,fog:!1}));I.add(k),r.add(I)}const _=new Wn(30,.85,10,36,Math.PI),v=new ve(_,y);v.position.set(0,E+14,-8),r.add(v)}else if(t==="stbasil"){const P=[{x:0,h:48,r:5.2,mat:x},{x:-12,h:36,r:4.2,mat:y},{x:12,h:36,r:4.2,mat:S},{x:-22,h:28,r:3.5,mat:S},{x:22,h:28,r:3.5,mat:y}];for(let _=0;_<P.length;_++){const v=P[_];M(r,v.r*1.4,v.h,v.r*1.4,v.x,E+v.h*.5,0,v.mat);const R=new ve(new ri(v.r,16,16),v.mat);R.scale.set(1,1.25,1),R.position.set(v.x,E+v.h+v.r*.8,0),r.add(R);const F=new ve(new Fi(v.r*.45,7,8),S);F.position.set(v.x,E+v.h+v.r*2.1,0),r.add(F);const C=new ve(new Nu(1.6,0),S);C.position.set(v.x,E+v.h+v.r*2.1+4.5,0),r.add(C)}}else if(t==="marinabay"){const P=[-16,0,16];for(let v=0;v<P.length;v++)M(r,7.5,58,7,P[v],E+29,0,y);const _=new ve(new Et(46,3.8,10),S);_.position.set(2,E+60,0),r.add(_)}else if(t==="swiss_alps"){const P=new ve(new Fi(24,65,5),u);P.position.set(-20,E+32,-4),P.add(new bo(new To(P.geometry),new sa({color:3718648,fog:!1}))),r.add(P);const _=new ve(new Fi(26,72,5),u);_.position.set(20,E+36,-4),_.add(new bo(new To(_.geometry),new sa({color:4906624,fog:!1}))),r.add(_);const v=new Va(76,32,16,4),R=new Ht({color:4906624,transparent:!0,opacity:.28,blending:ji,side:$i,depthWrite:!1,fog:!1}),F=new ve(v,R);F.position.set(0,E+78,-8),r.add(F),l.auroraMesh=F}else{M(r,10,62,10,-16,E+31,0,f),M(r,10,62,10,16,E+31,0,f);const P=new ve(new ri(6.2,16,16),m);P.position.set(0,E+62,0),r.add(P);const _=M(r,5.5,78,5.5,0,E+39,0,m),v=new ve(new sn(.25,.8,22,8),p);v.position.set(0,48,0),_.add(v);const R=new ve(new Et(48,1.8,4),f);R.position.set(0,E+24,2),r.add(R)}return l}const la=.82;let pv=null;function iw(){const r=document.createElement("canvas");r.width=256,r.height=512;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#020612"),t.addColorStop(.32,"#071630"),t.addColorStop(.62,"#0f2c56"),t.addColorStop(.84,"#154e7a"),t.addColorStop(1,"#040b18"),e.fillStyle=t,e.fillRect(0,0,256,512);const s=e.createRadialGradient(128,310,12,128,310,165);return s.addColorStop(0,"rgba(0, 242, 254, 0.42)"),s.addColorStop(.55,"rgba(14, 165, 233, 0.14)"),s.addColorStop(1,"rgba(2, 6, 18, 0.0)"),e.fillStyle=s,e.fillRect(0,0,256,512),new Lu(r)}function rw(){const r=document.createElement("canvas");r.width=128,r.height=128;const e=r.getContext("2d");e.fillStyle="#64748b",e.fillRect(0,0,128,128),e.strokeStyle="#cbd5e1",e.lineWidth=6;for(let s=-128;s<256;s+=20)e.beginPath(),e.moveTo(s,0),e.lineTo(s+80,128),e.stroke();const t=new Lu(r);return t.wrapS=Ba,t.wrapT=Ba,t.repeat.set(2,320),t}function sw(){const r=document.createElement("canvas");r.width=256,r.height=256;const e=r.getContext("2d");return e.fillStyle="#09111f",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=8,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.fillStyle="#fde047",e.font="bold 116px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,134),new Lu(r)}function bg(r=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=r?"#061121":"#040914",t.fillRect(0,0,128,256);const s=8,o=24;for(let u=1;u<o;u++)for(let f=1;f<s;f++){const m=(u*17+f*31)%100;m<(r?28:42)&&(m<7?t.fillStyle="#00f2fe":m<18?t.fillStyle="#fef08a":t.fillStyle=r?"#1e3a5f":"#38bdf8",t.fillRect(f*14,u*10,7,5))}const l=new Lu(e);return l.wrapS=Ba,l.wrapT=Ba,l.repeat.set(1,2),l}function aw(r){if(!r)return null;const e=r.clientWidth||420,t=r.clientHeight||780,s=new I_;s.background=new Wt(398118),s.fog=new Qh(664121,.011);const o=new or(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);let l=null;try{l=new tw({antialias:!0,powerPreference:"high-performance"}),l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=Hh,l.toneMappingExposure=1.25,r.innerHTML="",r.appendChild(l.domElement)}catch(qe){return console.warn("WebGLRenderer initialization warning:",qe),null}const u=new ty(3718648,.9);s.add(u);const f=new ey(62206,1.75);f.position.set(0,28,-65),s.add(f);const m=new fu(62206,3.8,22);m.position.set(0,1.35,0),s.add(m);const p=new fu(16638023,4.2,24);p.position.set(0,2.5,-.3),s.add(p);const y=iw(),S=new Va(340,220),x=new Ht({map:y,fog:!1,depthWrite:!1}),M=new ve(S,x);M.position.set(0,12,-210),s.add(M);const E=1800,P=rw(),_=new sn(.042,.042,E,16);_.rotateX(Math.PI/2);const v=new Hn({color:13358561,map:P,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),R=new ve(_,v);R.position.set(0,0,-E*.5+12),s.add(R);const F=new sn(.015,.015,E,8);F.rotateX(Math.PI/2);const C=new Ht({color:62206,transparent:!0,opacity:.72}),U=new ve(F,C);U.position.set(0,.022,-E*.5+12),s.add(U);const I=new Hn({color:330002,roughness:.8,metalness:.2}),k=new Et(7.2,60,7),w=new ve(k,I);w.position.set(0,-30.045,3.5),s.add(w);const D=new Kt,z=new Et(9.2,70,9.2),G=new ve(z,I);G.position.set(0,-35.045,0),D.add(G);const Y=sw(),ee=new Va(7,7);ee.rotateX(-Math.PI/2);const W=new Ht({map:Y}),Z=new ve(ee,W);Z.position.set(0,.01,0),D.add(Z);const fe=new Wn(3.4,.075,12,36);fe.rotateX(Math.PI/2);const te=new Ht({color:62206}),ne=new ve(fe,te);ne.position.set(0,.12,0),D.add(ne);const Q=new Kt;D.add(Q),D.position.set(0,0,-100),s.add(D);const $=new Kt;$.position.set(0,0,-135),s.add($);const T=bg(!1),le=bg(!0),Se=new Hn({color:464166,map:T,emissive:959977,emissiveMap:T,emissiveIntensity:.58,roughness:.5,metalness:.4}),Ie=new Ht({color:729657,map:le}),je=new Ht({color:1128020}),Ue=new Ht({color:62206,transparent:!0,opacity:.35}),re=[];for(let qe=0;qe<44;qe++){const Rt=qe%2===0,$t=qe%3,un=Math.floor(qe/2),Qn=6.5+qe%4*2.1+$t*2.2,vn=6.5+qe*3%4*1.8,zn=72+qe*13%42+$t*16,Ni=new Et(Qn,zn,vn),En=$t===0?Se:$t===1?Ie:je,Rr=new ve(Ni,En),hr=$t===0?12.2+qe%3*2.8:$t===1?21.5+qe%3*4.2:32+qe%4*5,pa=(Rt?-1:1)*hr,pr=10-un*13,$a=-60+zn*.5;if(Rr.position.set(pa,$a,pr),$t===0){const mr=new Et(.12,zn,.12),_i=new ve(mr,Ue);_i.position.set(Rt?Qn*.5+.04:-Qn*.5-.04,0,vn*.5),Rr.add(_i)}s.add(Rr),re.push(Rr)}const he=[],Re=new Fi(5.5,115,20,1,!0);for(let qe=0;qe<10;qe++){const Rt=qe%2===0,$t=new Ht({color:qe%3===0?62206:959977,transparent:!0,opacity:qe%3===0?.11:.075,side:$i,depthWrite:!1,blending:ji}),un=new ve(Re,$t),Qn=(Rt?-1:1)*(8.5+qe%3*4.5),vn=-18-qe*24;un.position.set(Qn,8,vn),un.rotation.z=(Rt?-1:1)*.24,s.add(un),he.push({mesh:un,mat:$t,baseAngle:(Rt?-1:1)*.24,speed:.45+qe%4*.18,phaseOffset:qe*1.1})}const Ye=[],Oe=new Et(.4,.18,2.2),ft=new Ht({color:62206}),kt=new Ht({color:15680580});for(let qe=0;qe<20;qe++){const Rt=qe%2===0,$t=new ve(Oe,Rt?kt:ft),un=(qe%4-1.5)*2.1;$t.position.set(un,-36,-qe*12),s.add($t),Ye.push({mesh:$t,speed:(Rt?-1:1)*(15+qe%4*3.5)})}const pt=220,ht=new Float32Array(pt*3);for(let qe=0;qe<pt;qe++)ht[qe*3+0]=(Math.random()-.5)*28,ht[qe*3+1]=-6+Math.random()*20,ht[qe*3+2]=6-Math.random()*55;const At=new $n;At.setAttribute("position",new zr(ht,3));const gt=new ev({color:62206,size:.14,transparent:!0,opacity:.65,blending:ji,depthWrite:!1}),Xt=new H_(At,gt);s.add(Xt);const Ut=new Kt;Ut.position.set(0,0,0),s.add(Ut);const en=new fu(16777215,3.6,12);en.position.set(0,1.45,2.4),Ut.add(en);const yt=new fu(3718648,3.4,12);yt.position.set(0,1.55,-1.8),Ut.add(yt);const qt=new Hn({color:1976635,emissive:727081,emissiveIntensity:.35,metalness:.35,roughness:.55}),X=new Hn({color:988970,emissive:462105,emissiveIntensity:.25,metalness:.35,roughness:.55}),fn=new Hn({color:3718648,emissive:3718648,emissiveIntensity:1.35,metalness:.2,roughness:.2}),Tt=new Hn({color:3359061,emissive:3718648,emissiveIntensity:.45,metalness:.5,roughness:.35}),B=new Hn({color:3359061,emissive:3718648,emissiveIntensity:.45,metalness:.45,roughness:.35}),b=new Hn({color:3718648,emissive:3718648,emissiveIntensity:1.5,metalness:.3,roughness:.25}),K=qt,se=X,de=Tt,Ne=qt,Ae=B,xe=fn,Me=new Hn({color:3718648,emissive:3718648,emissiveIntensity:1.4,metalness:.3,roughness:.25}),Ve=new Hn({color:3718648,emissive:3718648,emissiveIntensity:1.6,metalness:.3,roughness:.25}),et=new Hn({color:3718648,emissive:3718648,emissiveIntensity:1.6,side:$i,metalness:.2,roughness:.3}),Be=new Hn({color:16777215,emissive:16777215,emissiveIntensity:2.2,metalness:.2,roughness:.2}),Fe=new Hn({color:62206,emissive:62206,emissiveIntensity:2.6,metalness:.3,roughness:.2}),nt=new Hn({color:12616956,emissive:12616956,emissiveIntensity:2.4,metalness:.4,roughness:.25}),ot=new Hn({color:16317180,emissive:14870768,emissiveIntensity:1.5,metalness:.85,roughness:.18}),lt=new Hn({color:16711765,emissive:16711765,emissiveIntensity:2.8,metalness:.4,roughness:.2}),q=new Hn({color:15680580,emissive:16711765,emissiveIntensity:2.2,metalness:.5,roughness:.25}),De=new Hn({color:16498468,emissive:16096779,emissiveIntensity:2.6,metalness:.95,roughness:.15}),ye=new Hn({color:789001,emissive:1841431,emissiveIntensity:.35,metalness:.75,roughness:.25}),Ee=qe=>{const Rt=new Kt;Rt.position.set(qe?-.08:.08,.88,0);const $t=new Da(.064,.34,10,18),un=new ve($t,se);un.position.set(qe?.018:-.018,-.19,0),un.rotation.z=qe?.05:-.05,Rt.add(un);const Qn=new Et(.03,.12,.075),vn=new ve(Qn,K);vn.position.set(qe?-.055:.055,-.18,0),Rt.add(vn);const zn=new Et(.018,.28,.032),Ni=new ve(zn,Be);Ni.position.set(qe?-.062:.062,-.19,.01),Ni.visible=!1,Rt.add(Ni);const En=new Kt;En.position.set(qe?.035:-.035,-.41,0),Rt.add(En);const Rr=new Wn(.062,.014,10,20);Rr.rotateX(Math.PI/2);const hr=new ve(Rr,Fe);hr.position.set(qe?.01:-.01,-.02,0),hr.visible=!1,En.add(hr);const pa=new Da(.05,.34,10,18),pr=new ve(pa,se);pr.position.set(qe?.02:-.02,-.2,0),pr.rotation.z=qe?.04:-.04,En.add(pr);const $a=new Et(.018,.25,.028),mr=new ve($a,Be);mr.position.set(qe?-.042:.042,-.2,.015),mr.visible=!1,En.add(mr);const _i=new Kt;_i.position.set(qe?.035:-.035,-.43,0),En.add(_i);const Wl=new Da(.045,.14,8,14);Wl.rotateX(Math.PI/2);const ma=new ve(Wl,de);ma.position.set(0,-.005,-.025),_i.add(ma);const Hu=new Et(.095,.026,.22),Xo=new ve(Hu,Me);Xo.position.set(0,-.038,-.025),_i.add(Xo);const qo=new Et(.098,.032,.045),Os=new ve(qo,Fe);Os.position.set(0,-.01,.068),Os.visible=!1,_i.add(Os);const jo=new sn(.024,.036,.06,12);jo.rotateX(Math.PI/2);const ga=new ve(jo,q);return ga.position.set(0,.01,.085),ga.visible=!1,_i.add(ga),{hipGroup:Rt,kneeGroup:En,bootGroup:_i,cargoPocketMesh:vn,thighReflectiveMesh:Ni,calfReflectiveMesh:mr,tacticalKneeNeon:hr,tacticalHeelNeon:Os,shinobiBootThruster:ga}},ge=Ee(!0),we=Ee(!1);Ut.add(ge.hipGroup),Ut.add(we.hipGroup);const ze=new Kt;Ut.add(ze);const Ke=new sn(.135,.12,.15,18);Ke.scale(1.15,1,.72);const Te=new ve(Ke,se);Te.position.set(0,.89,0),ze.add(Te);const tt=new Kt;tt.position.set(0,.95,0),ze.add(tt);const Ot=new sn(.165,.125,.24,18);Ot.scale(1.18,1,.68);const gn=new ve(Ot,K);gn.position.set(0,.12,0),tt.add(gn);const Ri=new sn(.215,.162,.28,20);Ri.scale(1.24,1,.68);const gi=new ve(Ri,K);gi.position.set(0,.35,0),tt.add(gi);const hn=new Et(.042,.38,.026),Qt=new ve(hn,xe);Qt.position.set(0,.26,.135),tt.add(Qt);const ki=new Kt,Zn=new ri(.135,16,14);Zn.scale(1.15,.68,.95);const Ki=new ve(Zn,K);Ki.position.set(0,.5,.095),ki.add(Ki);const An=new Wn(.13,.014,10,24);An.rotateX(Math.PI*.42);const Fn=new ve(An,xe);Fn.position.set(0,.52,.09),ki.add(Fn),tt.add(ki);const ai=new Kt;ai.visible=!1;const Tr=new ve(new Et(.42,.032,.026),Be);Tr.position.set(0,.4,.145),ai.add(Tr);const _t=new ve(new Et(.32,.028,.026),Be);_t.position.set(0,.16,.135),ai.add(_t);const cr=new ve(new Et(.032,.36,.026),Be);cr.position.set(-.11,.28,.142),ai.add(cr);const Zi=new ve(new Et(.032,.36,.026),Be);Zi.position.set(.11,.28,.142),ai.add(Zi),tt.add(ai);const oi=new Kt;oi.visible=!1;const ls=new Et(.042,.48,.028),cs=new ve(ls,Fe);cs.position.set(0,.28,.148),cs.rotation.z=.64,oi.add(cs);const ln=new ve(ls,Fe);ln.position.set(0,.28,.148),ln.rotation.z=-.64,oi.add(ln);const Ci=new ve(new sn(.055,.055,.032,6),Fe);Ci.rotation.x=Math.PI/2,Ci.position.set(0,.28,.155),oi.add(Ci);const Ji=new Et(.14,.065,.18),ur=new ve(Ji,ye);ur.position.set(-.27,.48,0),ur.rotation.z=.22;const A=new ve(new Et(.15,.018,.19),Fe);A.position.set(0,.028,0),ur.add(A),oi.add(ur);const H=new ve(Ji,ye);H.position.set(.27,.48,0),H.rotation.z=-.22;const pe=new ve(new Et(.15,.018,.19),Fe);pe.position.set(0,.028,0),H.add(pe),oi.add(H),tt.add(oi);const ae=new Kt;ae.visible=!1;const oe=new Wn(.13,.018,8,4),Xe=new ve(oe,nt);Xe.position.set(0,.3,.148),ae.add(Xe);const He=new ve(new Wn(.065,.014,8,4),ot);He.position.set(0,.3,.152),ae.add(He);const We=new ve(new Et(.025,.42,.03),ot);We.position.set(-.16,.27,.138),We.rotation.z=-.12,ae.add(We);const it=new ve(new Et(.025,.42,.03),ot);it.position.set(.16,.27,.138),it.rotation.z=.12,ae.add(it);const st=new ve(new Wn(.135,.016,10,24),ot);st.rotateX(Math.PI/2),st.position.set(0,.49,.01),ae.add(st),tt.add(ae);const mt=new Kt;mt.visible=!1;const St=new ve(new Et(.036,.4,.028),lt);St.position.set(0,.27,.146),mt.add(St);for(let qe=0;qe<4;qe++){const Rt=qe%2===0?-1:1,$t=qe<2?.36:.21,un=new ve(new Et(.14,.022,.026),lt);un.position.set(Rt*.08,$t,.146),un.rotation.z=Rt*.38,mt.add(un)}const $e=new Kt;$e.position.set(.02,.31,.172),$e.rotation.z=-.68;const Nt=new ve(new sn(.018,.015,.66,12),ye);Nt.position.set(0,-.06,0),$e.add(Nt);const pn=new ve(new Et(.012,.64,.038),lt);pn.position.set(0,-.06,0),$e.add(pn);const tn=new ve(new sn(.052,.052,.016,16),De);tn.position.set(0,.27,0),$e.add(tn);const jt=new ve(new sn(.02,.02,.22,12),q);jt.position.set(0,.39,0),$e.add(jt);const Rn=new ve(new sn(.025,.025,.028,12),De);Rn.position.set(0,.51,0),$e.add(Rn);const Ze=$e;mt.add(Ze),tt.add(mt);const cn=new Kt;cn.visible=!1;for(let qe=0;qe<3;qe++){const Rt=new ve(new Et(.24-qe*.03,.055,.03),De);Rt.position.set(0,.39-qe*.1,.145),cn.add(Rt)}const Pt=new Kt;Pt.visible=!1;const Un=new Et(.16,.14,.2),Mt=new ve(Un,ye);Mt.position.set(-.285,.45,0),Mt.rotation.z=.28;const li=new ve(new Et(.17,.024,.21),De);li.position.set(0,.06,0),Mt.add(li),Pt.add(Mt);const vi=new ve(Un,ye);vi.position.set(.285,.45,0),vi.rotation.z=-.28;const Vt=new ve(new Et(.17,.024,.21),De);Vt.position.set(0,.06,0),vi.add(Vt),Pt.add(vi),tt.add(Pt);const nn=new Kt;nn.visible=!1;const ci=(qe,Rt)=>{const $t=new Kt;$t.position.set(0,.3,Rt),$t.rotation.z=qe;const un=new ve(new sn(.018,.015,.68,12),ye);un.position.set(0,-.06,0),$t.add(un);const Qn=new ve(new Et(.012,.65,.038),De);Qn.position.set(0,-.06,0),$t.add(Qn);const vn=new ve(new sn(.054,.054,.018,16),De);vn.position.set(0,.28,0),$t.add(vn);const zn=new ve(new sn(.021,.021,.23,12),De);return zn.position.set(0,.4,0),$t.add(zn),$t};nn.add(ci(-.62,.172)),nn.add(ci(.62,.192)),cn.add(nn),tt.add(cn);const It=new Kt;It.visible=!1;const ui=It,Jn=new ve(new Nu(.085,1),Fe);Jn.position.set(0,.3,.165),It.add(Jn);const di=new ve(new Wn(.13,.014,10,28),Be);di.position.set(0,.3,.165),It.add(di);const h=new ve(new Wn(.38,.014,10,36),Fe);h.position.set(0,.28,0),h.rotation.x=Math.PI*.35,It.add(h);const O=new ve(new Wn(.42,.012,10,36),Be);O.position.set(0,.28,0),O.rotation.y=Math.PI*.25,It.add(O),tt.add(It);const ce=new Kt;ce.visible=!1;const be=new ve(new Wn(.34,.02,12,36),De);be.position.set(0,.32,.16),ce.add(be);const Pe=new Kt;Pe.position.set(0,.3,0);const Gt=new ri(.026,8,8);for(let qe=0;qe<8;qe++){const Rt=qe/8*Math.PI*2,$t=new ve(Gt,De);$t.position.set(Math.cos(Rt)*.42,Math.sin(Rt*2)*.18,Math.sin(Rt)*.32),Pe.add($t)}ce.add(Pe),tt.add(ce);const Ln=new ri(.078,16,16),_n=new ve(Ln,K);_n.position.set(-.255,.45,0),tt.add(_n);const Vr=new ve(Ln,K);Vr.position.set(.255,.45,0),tt.add(Vr);const Gr=new sn(.05,.06,.1,14),Qi=new ve(Gr,K);Qi.position.set(0,.54,0),tt.add(Qi);const fi=new Kt;fi.position.set(0,.67,0),tt.add(fi);const yn=new ri(.118,24,24);yn.scale(.95,1.06,1.02);const Sn=new ve(yn,Ne);fi.add(Sn);const kn=new Wn(.116,.018,12,28);kn.rotateX(Math.PI/2);const er=new ve(kn,b);er.position.set(0,.025,0),fi.add(er);const Hr=new sn(.124,.124,.045,20,1,!0,Math.PI*.55,Math.PI*.9),tr=new ve(Hr,Fe);tr.position.set(0,.02,0),tr.visible=!1,fi.add(tr);const Wr=new ve(new Wn(.14,.015,10,28),De);Wr.rotateX(Math.PI/2),Wr.position.set(0,.16,0),Wr.visible=!1,fi.add(Wr);const ua=Wr,dr=new Kt;dr.position.set(0,.022,.118),fi.add(dr);const Ns=new Et(.18,.032,.01);Ns.translate(.09,0,0);const da=new ve(Ns,et);dr.add(da);const Pi=new Kt;Pi.position.set(.175,0,0),da.add(Pi);const Is=new Et(.18,.028,.009);Is.translate(.09,0,0);const Xr=new ve(Is,et);Pi.add(Xr);const us=new Kt;us.position.set(.175,0,0),Xr.add(us);const ds=new Et(.17,.022,.008);ds.translate(.085,0,0);const Ds=new ve(ds,et);us.add(Ds);const fa=qe=>{const Rt=new Kt;Rt.position.set(qe?-.255:.255,.44,0);const $t=new Da(.048,.22,10,16),un=new ve($t,K);un.position.set(qe?-.08:.08,-.11,-.02),un.rotation.z=qe?-.56:.56,Rt.add(un);const Qn=new Et(.02,.19,.028),vn=new ve(Qn,Be);vn.position.set(qe?-.095:.095,-.11,.025),vn.rotation.z=qe?-.56:.56,vn.visible=!1,Rt.add(vn);const zn=new Kt;zn.position.set(qe?-.16:.16,-.21,-.04),Rt.add(zn);const Ni=new Da(.042,.21,10,16),En=new ve(Ni,K);En.position.set(qe?-.07:.07,-.04,-.09),En.rotation.x=.72,En.rotation.z=qe?-.45:.45,zn.add(En);const Rr=new Wn(.046,.013,10,20),hr=new ve(Rr,Ve);hr.position.set(qe?-.12:.12,-.07,-.155),zn.add(hr);const pa=new ri(.052,14,14),pr=new ve(pa,Ae);return pr.position.set(qe?-.14:.14,-.08,-.18),zn.add(pr),{shoulderGroup:Rt,elbowGroup:zn,handMesh:pr,wristMesh:hr,sleeveReflectiveMesh:vn}},Xn=fa(!0),Ar=fa(!1);tt.add(Xn.shoulderGroup),tt.add(Ar.shoulderGroup);const xi=new Kt;xi.position.set(0,.17,-.2),tt.add(xi);const Li=4,Wa=new sn(.018,.018,Li,16);Wa.rotateZ(Math.PI/2);const Us=new Ht({color:14742270}),ha=new ve(Wa,Us);xi.add(ha);const qr=new sn(.052,.052,Li,14);qr.rotateZ(Math.PI/2);const Dt=new Ht({color:62206,transparent:!0,opacity:.42,blending:ji,depthWrite:!1}),Mn=new ve(qr,Dt);xi.add(Mn);const fr=new ri(.058,14,14),jr=new Ht({color:62206}),Bi=new ve(fr,jr);Bi.position.set(-Li*.5,0,0),xi.add(Bi);const fs=new ve(fr,jr);fs.position.set(Li*.5,0,0),xi.add(fs);const kl=new Wn(.14,.015,10,24),Xa=new ve(kl,jr);Xa.position.set(-Li*.5,0,0),Xa.visible=!1,xi.add(Xa);const qa=new ve(kl,jr);qa.position.set(Li*.5,0,0),qa.visible=!1,xi.add(qa);const Uu=new Float32Array(6),zo=new $n;zo.setAttribute("position",new zr(Uu,3));const Bl=new sa({color:62206,linewidth:3}),Vo=new Qg(zo,Bl);Vo.visible=!1,s.add(Vo);const Ou=new sn(.04,.04,1,10),Fu=new Ht({color:62206,transparent:!0,opacity:.85,blending:ji,depthWrite:!1}),Go=new ve(Ou,Fu);Go.visible=!1,s.add(Go);const ja=new Wn(.14,.012,10,28),zl=new Ht({color:62206,transparent:!0,opacity:.55,blending:ji}),Vl=new Ht({color:62206,transparent:!0,opacity:.55,blending:ji}),Gl=new ve(ja,zl),Ho=new ve(ja,Vl);s.add(Gl),s.add(Ho);const ku=new ri(.12,24,24),Bu=new ri(.24,16,16),zu=new ri(.072,12,12),Vu=new Ht({color:16710083}),Gu=new Ht({color:16638023,transparent:!0,opacity:.52,blending:ji,depthWrite:!1}),Hl=[];for(let qe=0;qe<4;qe++){const Rt=new Kt,$t=new ve(ku,Vu),un=new ve(Bu,Gu);Rt.add($t),Rt.add(un),s.add(Rt);const Qn=[];for(let vn=0;vn<7;vn++){const zn=new Ht({color:vn<3?16638023:16096779,transparent:!0,opacity:.68-vn*.085,blending:ji,depthWrite:!1}),Ni=new ve(zu,zn),En=1-vn*.12;Ni.scale.set(En,En,En),s.add(Ni),Qn.push(Ni)}Hl.push({group:Rt,core:$t,halo:un,trails:Qn})}const Wo={scene:s,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:m,goldOrbLight:p,acrobatKeyLight:en,acrobatBackLight:yt,backlitBackdrop:M,cableTex:P,arrivalGroup:D,arrivalToriiGroup:Q,beaconRingMesh:ne,landmarkGroup:$,landmarkAnimRefs:{},activeLandmarkKey:"",skyscrapers:re,spotlightBeams:he,carMeshes:Ye,weatherPoints:Xt,weatherGeo:At,weatherMat:gt,weatherCount:pt,acrobatGroup:Ut,torsoMat:qt,limbsMat:X,neonStripMat:fn,shoesMat:Tt,glovesMat:B,headbandMat:b,jacketMat:K,pantsMat:se,bootMat:de,headMat:Ne,soleMat:Me,gloveMat:Ae,wristBandMat:Ve,ribbonMat:et,dorsalStripMat:xe,singleKatanaMesh:Ze,dualGoldKatanasGroup:nn,samuraiShouldersGroup:Pt,quantumHaloMesh:ui,immortalCrownMesh:ua,urbanoAccGroup:ki,nightRunnerAccGroup:ai,infiltradoAccGroup:oi,ilusionistaAccGroup:ae,shinobiAccGroup:mt,roninGoldAccGroup:cn,quantumSpecterAccGroup:It,quantumCoreMesh:Jn,quantumHoloRingA:h,quantumHoloRingB:O,goldenLegendAccGroup:ce,solarAuraRing:be,solarParticlesGroup:Pe,tacticalVisorMesh:tr,goldenCrownHalo:Wr,poleCoreMat:Us,poleLaserGlowMat:Dt,poleTipMat:jr,poleGlowMesh:Mn,leftGyroRing:Xa,rightGyroRing:qa,upperBodyGroup:ze,torsoSpineGroup:tt,headGroup:fi,leftLeg:ge,rightLeg:we,leftArm:Xn,rightArm:Ar,poleGroup:xi,ribbonPivot:dr,ribbonJoint2:Pi,ribbonJoint3:us,grappleLaserLine:Vo,grappleLineGeo:zo,grappleBeamMesh:Go,leftReceiverRing:Gl,rightReceiverRing:Ho,leftReceiverMat:zl,rightReceiverMat:Vl,orbMeshes:Hl,worldLeftHand:new ie,worldRightHand:new ie,grappleAnchor:new ie,lastTimeSec:0,smoothKneeFlex:0,smoothHipX:0,edgeSaveBlend:0,smoothTorsoComp:0,smoothNeckComp:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38};return pv=Wo,Er("urbano",Wo,!1),Wo}function Er(r,e=null,t=!1){var o,l,u,f,m,p,y,S,x,M,E,P,_,v,R,F,C,U,I,k,w,D,z,G,Y,ee,W,Z,fe,te,ne,Q,$;const s=Oi(r);try{const T=e||pv;if(!T||!T.acrobatGroup)return s;const le=ia(r),Se=s.styleType||le,Ie=s.metalness??.45,je=s.roughness??.35,Ue=t?3.2:s.emissiveIntensity??2.2,re=16638023;T.torsoMat&&((o=T.torsoMat.color)==null||o.set(s.torsoColor||s.jacketHex||1976635),(l=T.torsoMat.emissive)==null||l.set(t?re:s.torsoEmissive||s.jacketEmissiveHex||727081),T.torsoMat.emissiveIntensity=t?1.15:s.torsoEmissiveIntensity??.6,T.torsoMat.metalness=Ie,T.torsoMat.roughness=je,T.torsoMat.needsUpdate=!0),T.limbsMat&&((u=T.limbsMat.color)==null||u.set(s.limbsColor||s.pantsHex||988970),(f=T.limbsMat.emissive)==null||f.set(t?re:s.limbsEmissive||s.pantsHex||462105),T.limbsMat.emissiveIntensity=t?.95:s.limbsEmissiveIntensity??.45,T.limbsMat.metalness=Ie,T.limbsMat.roughness=je,T.limbsMat.needsUpdate=!0),T.neonStripMat&&((m=T.neonStripMat.color)==null||m.set(t?re:s.neonStripColor||s.dorsalHex||3718648),(p=T.neonStripMat.emissive)==null||p.set(t?re:s.neonStripColor||s.dorsalHex||3718648),T.neonStripMat.emissiveIntensity=Ue,T.neonStripMat.needsUpdate=!0),T.shoesMat&&((y=T.shoesMat.color)==null||y.set(s.shoesColor||s.bootHex||3359061),(S=T.shoesMat.emissive)==null||S.set(t?re:s.shoesColor||s.soleHex||3718648),T.shoesMat.emissiveIntensity=t?1.4:Se==="urbano"?.35:1.15,T.shoesMat.metalness=Ie,T.shoesMat.roughness=je,T.shoesMat.needsUpdate=!0),T.glovesMat&&((x=T.glovesMat.color)==null||x.set(s.glovesColor||s.gloveHex||3359061),(M=T.glovesMat.emissive)==null||M.set(t?re:s.glovesColor||s.wristHex||3718648),T.glovesMat.emissiveIntensity=Se==="ilusionista"||Se==="quantum_specter"||Se==="immortal_legend"?1.75:.65,T.glovesMat.metalness=Ie,T.glovesMat.roughness=je,T.glovesMat.needsUpdate=!0),T.headbandMat&&((E=T.headbandMat.color)==null||E.set(t?re:s.headbandColor||s.headbandHex||3718648),(P=T.headbandMat.emissive)==null||P.set(t?re:s.headbandColor||s.headbandHex||3718648),T.headbandMat.emissiveIntensity=Ue*.9,T.headbandMat.needsUpdate=!0),T.soleMat&&((_=T.soleMat.color)==null||_.set(s.soleColor||s.soleHex||3718648),(v=T.soleMat.emissive)==null||v.set(t?re:s.soleColor||s.soleHex||3718648),T.soleMat.emissiveIntensity=Ue*.85,T.soleMat.needsUpdate=!0),T.wristBandMat&&((R=T.wristBandMat.color)==null||R.set(s.wristColor||s.wristHex||3718648),(F=T.wristBandMat.emissive)==null||F.set(t?re:s.wristColor||s.wristHex||3718648),T.wristBandMat.emissiveIntensity=Ue*.9,T.wristBandMat.needsUpdate=!0),T.ribbonMat&&((C=T.ribbonMat.color)==null||C.set(t?re:s.ribbonColor||s.ribbonHex||3718648),(U=T.ribbonMat.emissive)==null||U.set(t?re:s.ribbonColor||s.ribbonHex||3718648),T.ribbonMat.emissiveIntensity=Ue*.9,T.ribbonMat.needsUpdate=!0),T.acrobatBackLight&&((I=T.acrobatBackLight.color)==null||I.set(t?re:s.neonStripColor||s.rimHex||3718648));const he=Se==="shinobi"||Se==="immortal_legend"?1.48:Se==="ilusionista"||Se==="ronin_gold"?1.32:1;T.ribbonPivot&&T.ribbonPivot.scale.set(he,1,1);const Re=Se==="urbano",Ye=Se==="night_runner",Oe=Se==="infiltrado",ft=Se==="ilusionista",kt=Se==="shinobi",pt=Se==="ronin_gold",ht=Se==="quantum_specter",At=Se==="immortal_legend"||Se==="leyenda_dorada";T.urbanoAccGroup&&(T.urbanoAccGroup.visible=Re),(k=T.leftLeg)!=null&&k.cargoPocketMesh&&(T.leftLeg.cargoPocketMesh.visible=Re),(w=T.rightLeg)!=null&&w.cargoPocketMesh&&(T.rightLeg.cargoPocketMesh.visible=Re),T.nightRunnerAccGroup&&(T.nightRunnerAccGroup.visible=Ye),(D=T.leftArm)!=null&&D.sleeveReflectiveMesh&&(T.leftArm.sleeveReflectiveMesh.visible=Ye),(z=T.rightArm)!=null&&z.sleeveReflectiveMesh&&(T.rightArm.sleeveReflectiveMesh.visible=Ye),(G=T.leftLeg)!=null&&G.thighReflectiveMesh&&(T.leftLeg.thighReflectiveMesh.visible=Ye),(Y=T.rightLeg)!=null&&Y.thighReflectiveMesh&&(T.rightLeg.thighReflectiveMesh.visible=Ye),(ee=T.leftLeg)!=null&&ee.calfReflectiveMesh&&(T.leftLeg.calfReflectiveMesh.visible=Ye),(W=T.rightLeg)!=null&&W.calfReflectiveMesh&&(T.rightLeg.calfReflectiveMesh.visible=Ye),T.infiltradoAccGroup&&(T.infiltradoAccGroup.visible=Oe),T.tacticalVisorMesh&&(T.tacticalVisorMesh.visible=Oe||ht),(Z=T.leftLeg)!=null&&Z.tacticalKneeNeon&&(T.leftLeg.tacticalKneeNeon.visible=Oe||ht),(fe=T.rightLeg)!=null&&fe.tacticalKneeNeon&&(T.rightLeg.tacticalKneeNeon.visible=Oe||ht),(te=T.leftLeg)!=null&&te.tacticalHeelNeon&&(T.leftLeg.tacticalHeelNeon.visible=Oe||ht),(ne=T.rightLeg)!=null&&ne.tacticalHeelNeon&&(T.rightLeg.tacticalHeelNeon.visible=Oe||ht),T.ilusionistaAccGroup&&(T.ilusionistaAccGroup.visible=ft),T.shinobiAccGroup&&(T.shinobiAccGroup.visible=kt),T.singleKatanaMesh&&(T.singleKatanaMesh.visible=kt),(Q=T.leftLeg)!=null&&Q.shinobiBootThruster&&(T.leftLeg.shinobiBootThruster.visible=kt),($=T.rightLeg)!=null&&$.shinobiBootThruster&&(T.rightLeg.shinobiBootThruster.visible=kt),T.roninGoldAccGroup&&(T.roninGoldAccGroup.visible=pt),T.dualGoldKatanasGroup&&(T.dualGoldKatanasGroup.visible=pt),T.samuraiShouldersGroup&&(T.samuraiShouldersGroup.visible=pt||At),T.quantumSpecterAccGroup&&(T.quantumSpecterAccGroup.visible=ht),T.quantumHaloMesh&&(T.quantumHaloMesh.visible=ht),T.goldenLegendAccGroup&&(T.goldenLegendAccGroup.visible=At),T.immortalCrownMesh&&(T.immortalCrownMesh.visible=At),T.goldenCrownHalo&&(T.goldenCrownHalo.visible=At)}catch(T){console.warn("applySkinToAcrobat safe catch:",T)}return s}function ow(r,e,t,s="menu",o="urbano",l="home"){var ot,lt,q,De,ye;if(!r||!e)return;const u=Math.min(.05,Math.max(.001,t-(r.lastTimeSec||t-.016)));r.lastTimeSec=t;const f=-(e.distance||0),m=e.angle||0,p=Math.abs(m),y=Math.min(1,p/la),S=((ot=e.cfg)==null?void 0:ot.walkSpeed)||1,x=!!e.frenzyActive,M=Er(o||((lt=e.skinObj)==null?void 0:lt.id),r,x)||Ax(o||((q=e.skinObj)==null?void 0:q.id)),E=M.styleType,P=x?16638023:M.rimHex,_=E==="quantum_specter",v=E==="immortal_legend"||E==="leyenda_dorada";_&&(r.quantumCoreMesh&&(r.quantumCoreMesh.rotation.y=t*2.8,r.quantumCoreMesh.rotation.z=t*1.9),r.quantumHoloRingA&&(r.quantumHoloRingA.rotation.z=t*1.6,r.quantumHoloRingA.rotation.x=Math.PI*.35+Math.sin(t*2.1)*.22),r.quantumHoloRingB&&(r.quantumHoloRingB.rotation.x=-t*1.4,r.quantumHoloRingB.rotation.y=Math.PI*.25+Math.cos(t*1.8)*.25)),v&&(r.solarAuraRing&&(r.solarAuraRing.rotation.z=t*2.1),r.solarParticlesGroup&&(r.solarParticlesGroup.rotation.y=t*2.4,r.solarParticlesGroup.rotation.z=Math.sin(t*1.5)*.25));const R=((De=e.cfg)==null?void 0:De.city)||Ts[0],F=e.targetDistance||68,C=`${R.id||R.index}_${R.monument}_${F}`;if(r.activeLandmarkKey!==C){r.activeLandmarkKey=C;const Ee=R.weatherArchetype||"urban";Ee==="cyber_rain"?(r.scene.background.setHex(395550),r.scene.fog.color.setHex(923714),r.weatherMat.color.setHex(62206),r.weatherMat.size=.16):Ee==="golden_embers"?(r.scene.background.setHex(1181976),r.scene.fog.color.setHex(2627372),r.weatherMat.color.setHex(16638023),r.weatherMat.size=.18):Ee==="blizzard"?(r.scene.background.setHex(398118),r.scene.fog.color.setHex(1059918),r.weatherMat.color.setHex(14742270),r.weatherMat.size=.2):(r.scene.background.setHex(332068),r.scene.fog.color.setHex(664121),r.weatherMat.color.setHex(3718648),r.weatherMat.size=.14);const ge=R.accentColor?parseInt(R.accentColor.replace("#",""),16):62206,we=R.winColor?parseInt(R.winColor.replace("#",""),16):16638023;r.landmarkAnimRefs=nw(r.landmarkGroup,r.arrivalToriiGroup,R.monument||"obelisco",ge,we)}if(r.landmarkGroup.position.set(0,0,-F-35),r.landmarkAnimRefs){if(r.landmarkAnimRefs.londonEyeWheel&&(r.landmarkAnimRefs.londonEyeWheel.rotation.z+=u*.22),r.landmarkAnimRefs.eiffelBeacon&&(r.landmarkAnimRefs.eiffelBeacon.rotation.y+=u*1.4),r.landmarkAnimRefs.libertyTorchHalo){const Ee=1+Math.sin(t*6)*.18;r.landmarkAnimRefs.libertyTorchHalo.scale.set(Ee,Ee,Ee)}r.landmarkAnimRefs.auroraMesh&&(r.landmarkAnimRefs.auroraMesh.position.x=Math.sin(t*.9)*4.5)}const U=r.weatherGeo.attributes.position,I=U.array,k=R.weatherArchetype||"urban",w=(e.windForce||0)*(k==="blizzard"?14:9.5),D=k==="cyber_rain"?-24:k==="blizzard"?-6.5:k==="golden_embers"?2.2:-1.8;for(let Ee=0;Ee<r.weatherCount;Ee++){const ge=Ee*3;I[ge+0]+=w*u,I[ge+1]+=D*u,I[ge+0]>15?I[ge+0]-=30:I[ge+0]<-15&&(I[ge+0]+=30),D<0&&I[ge+1]<-8?I[ge+1]=14:D>0&&I[ge+1]>14&&(I[ge+1]=-8),I[ge+2]>f+8?I[ge+2]-=56:I[ge+2]<f-50&&(I[ge+2]+=56)}U.needsUpdate=!0;const z=e.poleObj||{},G=z.poleScaleX||1;r.poleGroup.scale.set(G,1,1),r.poleCoreMat.color.setHex(z.coreHex||14742270),r.poleLaserGlowMat.color.setHex(x?16638023:z.glowHex||62206),r.poleTipMat.color.setHex(z.tipHex||62206),r.poleLaserGlowMat.opacity=x?.85:.48;const Y=x?1.45:1;r.poleGlowMesh.scale.set(1,Y,Y);const ee=!!z.hasGyroRings;r.leftGyroRing.visible=ee,r.rightGyroRing.visible=ee,ee&&(r.leftGyroRing.rotation.x=t*7.5,r.leftGyroRing.rotation.y=t*5.2,r.rightGyroRing.rotation.x=-t*7.5,r.rightGyroRing.rotation.y=-t*5.2);const W=Math.min(1,u*11),Z=Math.min(1,u*7.5),fe=e.fallSequence||{active:!1},te=y*.56+(fe.active?.22:0);r.smoothKneeFlex+=(te-r.smoothKneeFlex)*W;const ne=-Math.sin(m)*.25;r.smoothHipX+=(ne-r.smoothHipX)*W;const $=p>la*.75||fe.active?1:0;r.edgeSaveBlend+=($-r.edgeSaveBlend)*W;const T=-m*.38-Math.sin(m)*.16*(1+r.edgeSaveBlend*.45),le=-m*.32;r.smoothTorsoComp+=(T-r.smoothTorsoComp)*Z,r.smoothNeckComp+=(le-r.smoothNeckComp)*Z;const Se=s==="menu"&&l==="skins";fe.active?(r.acrobatGroup.position.set(Math.sin(m)*.85,fe.fallY||0,f),r.acrobatGroup.rotation.z=-(fe.fallRotZ||m),r.acrobatGroup.rotation.x=fe.fallRotX||0,r.acrobatGroup.rotation.y=0):(r.acrobatGroup.position.set(0,0,f),r.acrobatGroup.rotation.z=-m*.72,r.acrobatGroup.rotation.x=0,r.acrobatGroup.rotation.y=Se?Math.sin(t*1.15)*.65:0);const Ie=s==="playing"&&!fe.active,je=e.walkCycle||0,Ue=Math.sin(je),re=Math.cos(je),he=Ie?Math.min(.56,.34*Math.pow(S,.45)):.12,Re=Ie?Math.abs(Ue)*.036*Math.min(1.5,S):Math.sin(t*2.6)*.014,Ye=r.smoothKneeFlex*.22;r.upperBodyGroup.position.x=r.smoothHipX,r.upperBodyGroup.position.y=Re-Ye;const Oe=Math.sin(t*22)*r.edgeSaveBlend,ft=r.smoothKneeFlex*.95;r.leftLeg.hipGroup.position.x=-.08+r.smoothHipX*.65,r.rightLeg.hipGroup.position.x=.08+r.smoothHipX*.65,r.leftLeg.hipGroup.position.y=.88-Ye,r.rightLeg.hipGroup.position.y=.88-Ye;const kt=-r.smoothHipX*.75,pt=m>0?r.edgeSaveBlend*(.28+Math.abs(Oe)*.22):0,ht=m<0?-r.edgeSaveBlend*(.28+Math.abs(Oe)*.22):0;r.leftLeg.hipGroup.rotation.z=kt-pt,r.rightLeg.hipGroup.rotation.z=kt-ht,r.leftLeg.hipGroup.rotation.x=Ue*he+ft*.55+Oe*.25,r.leftLeg.kneeGroup.rotation.x=-Math.max(0,re)*(he*1.22)-ft*1.1,r.leftLeg.bootGroup.rotation.x=ft*.52,r.rightLeg.hipGroup.rotation.x=-Ue*he+ft*.55-Oe*.25,r.rightLeg.kneeGroup.rotation.x=-Math.max(0,-re)*(he*1.22)-ft*1.1,r.rightLeg.bootGroup.rotation.x=ft*.52;const At=Ie?Math.min(.24,(S-1)*.14):.04;r.torsoSpineGroup.rotation.z=r.smoothTorsoComp+Oe*.08,r.torsoSpineGroup.rotation.x=.06+At+r.smoothKneeFlex*.18+r.edgeSaveBlend*.28,r.headGroup.rotation.z=r.smoothNeckComp,r.headGroup.rotation.x=-At*.7-r.smoothKneeFlex*.14-r.edgeSaveBlend*.2;const gt=fe.active&&fe.mode==="hook_rescue"||e.hookActive,Xt=Ue*.12*S;r.leftArm.shoulderGroup.rotation.x=-Xt+Oe*.55,r.rightArm.shoulderGroup.rotation.x=gt?-1.35:Xt-Oe*.55,r.leftArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4-r.edgeSaveBlend*.22,r.rightArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4+r.edgeSaveBlend*.22,r.leftArm.elbowGroup.rotation.x=r.edgeSaveBlend*.25,r.rightArm.elbowGroup.rotation.x=(gt?1.35:0)+r.edgeSaveBlend*.25,r.poleGroup.rotation.z=-m*.42+Oe*.14;const Ut=e.windForce||0,en=10.5*Math.min(1.6,S);r.ribbonPivot.rotation.y=-Math.PI*.5+Ut*.78+Math.sin(t*en)*.22,r.ribbonPivot.rotation.z=Math.cos(t*(en*1.15))*.16,r.ribbonJoint2.rotation.y=Math.sin(t*(en*1.35)-.8)*.28+Ut*.22,r.ribbonJoint3.rotation.y=Math.sin(t*(en*1.6)-1.6)*.34+Ut*.25,r.backlitBackdrop.position.z=f-210,r.arrivalGroup.position.set(0,0,-F-3.5);const yt=1+Math.sin(t*5)*.08;r.beaconRingMesh.scale.set(yt,yt,1);for(let Ee=0;Ee<r.spotlightBeams.length;Ee++){const ge=r.spotlightBeams[Ee];ge.mesh.rotation.z=ge.baseAngle+Math.sin(t*ge.speed+ge.phaseOffset)*.14,ge.mesh.position.z>f+15?ge.mesh.position.z-=240:ge.mesh.position.z<f-235&&(ge.mesh.position.z+=240)}for(let Ee=0;Ee<r.skyscrapers.length;Ee++){const ge=r.skyscrapers[Ee];ge.position.z>f+18?ge.position.z-=286:ge.position.z<f-268&&(ge.position.z+=286)}for(let Ee=0;Ee<r.carMeshes.length;Ee++){const ge=r.carMeshes[Ee];ge.mesh.position.z+=ge.speed*u,ge.mesh.position.z>f+25?ge.mesh.position.z=f-230:ge.mesh.position.z<f-235&&(ge.mesh.position.z=f+20)}r.acrobatGroup.updateMatrixWorld(!0),r.leftArm.handMesh.getWorldPosition(r.worldLeftHand),r.rightArm.handMesh.getWorldPosition(r.worldRightHand);const qt=r.worldLeftHand,X=r.worldRightHand;if(gt){r.grappleLaserLine.visible=!0,r.grappleBeamMesh.visible=!0,r.grappleAnchor.set(0,fe.ropeTopY||12,f-.5);const Ee=r.grappleLineGeo.attributes.position.array;Ee[0]=X.x,Ee[1]=X.y,Ee[2]=X.z,Ee[3]=r.grappleAnchor.x,Ee[4]=r.grappleAnchor.y,Ee[5]=r.grappleAnchor.z,r.grappleLineGeo.attributes.position.needsUpdate=!0;const ge=X.distanceTo(r.grappleAnchor);r.grappleBeamMesh.position.lerpVectors(X,r.grappleAnchor,.5),r.grappleBeamMesh.scale.set(1,Math.max(.1,ge),1),r.grappleBeamMesh.lookAt(r.grappleAnchor),r.grappleBeamMesh.rotateX(Math.PI/2)}else r.grappleLaserLine.visible=!1,r.grappleBeamMesh.visible=!1;const fn=e.balls||[];let Tt=!1,B=!1;for(let Ee=0;Ee<fn.length;Ee++){const ge=fn[Ee];ge.waitingCatch&&(ge.targetHand==="left"&&(Tt=!0),ge.targetHand==="right"&&(B=!0))}const b=1+(z.catchRadiusBonus||0)+(((ye=e.skinObj)==null?void 0:ye.catchWindowBonus)||0);r.leftReceiverRing.position.copy(qt),r.rightReceiverRing.position.copy(X),r.leftReceiverMat.color.setHex(Tt?16638023:M.rimHex),r.rightReceiverMat.color.setHex(B?16638023:M.rimHex);const K=(Tt?1.35:.78)*b,se=(B?1.35:.78)*b;r.leftReceiverRing.scale.set(K,K,K),r.rightReceiverRing.scale.set(se,se,se);for(let Ee=0;Ee<4;Ee++){const ge=fn[Ee],we=r.orbMeshes[Ee];if(!ge||fe.active){we.group.visible=!1;for(let Qt=0;Qt<we.trails.length;Qt++)we.trails[Qt].visible=!1;continue}we.group.visible=!0;const ze=ge.targetHand==="right"?qt:X,Ke=ge.targetHand==="right"?X:qt,Te=Math.max(0,Math.min(1.05,ge.progress||0)),tt=1.48+Ee%2*.22,Ot=ze.x+(Ke.x-ze.x)*Te,gn=ze.y+(Ke.y-ze.y)*Te+4*tt*Te*(1-Te),Ri=ze.z+(Ke.z-ze.z)*Te-.12*Math.sin(Te*Math.PI);we.group.position.set(Ot,gn,Ri);const gi=ge.waitingCatch?1.28:x?1.15:1;we.group.scale.set(gi,gi,gi);const hn=x||M.goldTrail?.028:.036;for(let Qt=0;Qt<we.trails.length;Qt++){const ki=we.trails[Qt],Zn=Te-(Qt+1)*hn;if(Zn<=.01){ki.visible=!1;continue}ki.visible=!0;const Ki=ze.x+(Ke.x-ze.x)*Zn,An=ze.y+(Ke.y-ze.y)*Zn+4*tt*Zn*(1-Zn),Fn=ze.z+(Ke.z-ze.z)*Zn-.12*Math.sin(Zn*Math.PI);ki.position.set(Ki,An,Fn)}}r.cyanPoleLight.position.set(0,1.35,f),r.cyanPoleLight.color.setHex(P),r.cyanPoleLight.intensity=x?6.8:4.2,r.goldOrbLight.position.set(0,2.45,f-.25);const de=Math.min(1,(e.combo||0)/14),Ne=Math.min(1,Math.max(0,(p-la*.28)/(la*.62))),Ae=fe.active?1:Ne,Me=(Se?46:58+de*6)*(1-Ae)+48*Ae,et=(Se?3.25:6.2+de*.55)*(1-Ae)+4.95*Ae,Fe=(Se?2.15:3.38+de*.16)*(1-Ae)+2.95*Ae,nt=Math.min(1,u*5.5);r.dynamicFov+=(Me-r.dynamicFov)*nt,r.dynamicCamDist+=(et-r.dynamicCamDist)*nt,r.dynamicCamY+=(Fe-r.dynamicCamY)*nt,Math.abs(r.camera.fov-r.dynamicFov)>.02&&(r.camera.fov=r.dynamicFov,r.camera.updateProjectionMatrix()),r.camera.position.set(Math.sin(m)*.32,r.dynamicCamY,f+r.dynamicCamDist),fe.active?r.camera.lookAt(r.acrobatGroup.position):Se?r.camera.lookAt(0,1.05,f):r.camera.lookAt(r.smoothHipX*.35,1.65-r.smoothKneeFlex*.2,f-15),r.renderer.render(r.scene,r.camera)}const Tn=r=>Array.isArray(r)?r:Object.values(r||{}),sp=[{code:"AR",flag:"🇦🇷",name:"Argentina"},{code:"UY",flag:"🇺🇾",name:"Uruguay"},{code:"CL",flag:"🇨🇱",name:"Chile"},{code:"BR",flag:"🇧🇷",name:"Brasil"},{code:"PY",flag:"🇵🇾",name:"Paraguay"},{code:"BO",flag:"🇧🇴",name:"Bolivia"},{code:"PE",flag:"🇵🇪",name:"Perú"},{code:"CO",flag:"🇨🇴",name:"Colombia"},{code:"MX",flag:"🇲🇽",name:"México"},{code:"ES",flag:"🇪🇸",name:"España"},{code:"US",flag:"🇺🇸",name:"EE.UU."},{code:"IT",flag:"🇮🇹",name:"Italia"}];function aa(r){if(r&&typeof r=="object")return aa(r.code);if(typeof r!="string")return"AR";const e=r.trim(),t=sp.find(o=>o.flag===e);if(t)return t.code;const s=e.toUpperCase();return/^[A-Z]{2}$/.test(s)?s:"AR"}function Po(r){var o;const e=aa(r),t=(o=sp.find(l=>l.code===e))==null?void 0:o.flag;if(t)return t;const s=Vh(e);return typeof s=="string"&&s?s:"🇦🇷"}const Yt=(r,e="es",t="")=>{if(r==null)return t;if(typeof r=="string"||typeof r=="number")return String(r);if(typeof r=="object"){const s=r[e]??r.es??r.en??r.label??r.name??t;return typeof s=="object"?t:String(s)}return String(r)};function Kf(r,e,t){return r+(e-r)*Math.max(0,Math.min(1,t))}function na(r,e=[]){return Array.isArray(r)?r.filter(t=>typeof t=="string"):e}function es(r,e=0,t=0,s=999999999){const o=Number(r);return Number.isFinite(o)?Math.max(t,Math.min(s,Math.floor(o))):e}function lw(r){return!r||typeof r!="object"||Array.isArray(r)?{pole:0,boots:0,gloves:0}:{pole:es(r.pole,0,0,10),boots:es(r.boots,0,0,10),gloves:es(r.gloves,0,0,10)}}function cw(){try{const r=localStorage.getItem(No);if(!r)return null;const e=JSON.parse(r);return!e||typeof e!="object"||Array.isArray(e)?null:e}catch(r){return console.warn("Corrupted STORAGE_KEY reset:",r),null}}function Tg(){try{const r=localStorage.getItem("nma_profile_completed")==="true",e=String(localStorage.getItem("nma_player_name")||"").trim(),t=String(localStorage.getItem("nma_player_country")||"").trim();return!r||!e||e==="TÚ (Equilibrista)"||e.length<3||!t}catch{return!0}}function uw(){var ci,It,ui,Jn,di;const r=Je.useRef(cw()).current,e=Je.useRef((()=>{try{return localStorage.getItem("nma_economy_v2_migrated")==="true"}catch{return!1}})()).current,[t,s]=Je.useState((r==null?void 0:r.lang)==="en"?"en":"es"),[o,l]=Je.useState(()=>es(r==null?void 0:r.level,1,1,9999)),[u,f]=Je.useState(()=>{const h=es(r==null?void 0:r.level,1,1,9999),O=Math.min(19,Math.floor((h-1)/5));return es(r==null?void 0:r.maxUnlockedCity,O,0,19)}),[m,p]=Je.useState(()=>es(r==null?void 0:r.coins,1200,0)),[y,S]=Je.useState(()=>es(r==null?void 0:r.gems,60,0)),[x,M]=Je.useState(()=>es(r==null?void 0:r.bestScore,0,0)),[E,P]=Je.useState(()=>es(r==null?void 0:r.leaguePoints,320,0)),[_,v]=Je.useState(()=>{try{const O=String(localStorage.getItem("nma_player_name")||"").trim();if(O&&O!=="TÚ (Equilibrista)")return O}catch{}const h=typeof(r==null?void 0:r.playerName)=="string"?r.playerName.trim():"";return h&&h!=="TÚ (Equilibrista)"?h:""}),[R,F]=Je.useState(()=>{try{const h=String(localStorage.getItem("nma_player_country")||"").trim();if(h)return aa(h)}catch{}return aa(r==null?void 0:r.playerCountry)}),[C,U]=Je.useState(()=>Tg()),[I,k]=Je.useState(()=>{try{const h=String(localStorage.getItem("nma_player_name")||"").trim();if(h&&h!=="TÚ (Equilibrista)")return h}catch{}return""}),[w,D]=Je.useState(()=>{try{const h=String(localStorage.getItem("nma_player_country")||"").trim();if(h)return aa(h)}catch{}return"AR"}),z=Je.useCallback(h=>{D(aa(h))},[]),G=Je.useRef({x:0,y:0}),Y=Je.useRef(0),[ee,W]=Je.useState(!1),[Z,fe]=Je.useState(!!(r!=null&&r.vipPassActive)),[te,ne]=Je.useState(()=>{let h=[];try{const be=localStorage.getItem("nma_owned_skins");if(be){const Pe=JSON.parse(be);Array.isArray(Pe)&&(h=Pe)}}catch{h=[]}const ce=[...na(r==null?void 0:r.ownedSkins),...na(r==null?void 0:r.unlockedSkins),...na(h),"urbano"].map(be=>{var Pe;return((Pe=Oi(be))==null?void 0:Pe.id)||"urbano"});return ce.includes("urbano")||ce.unshift("urbano"),Array.from(new Set(ce))}),Q=ne,[$,T]=Je.useState(()=>{var h,O;try{const ce=localStorage.getItem("nma_equipped_skin");if(ce)return((h=Oi(ce))==null?void 0:h.id)||"urbano"}catch{}return((O=Oi((r==null?void 0:r.equippedSkin)||"urbano"))==null?void 0:O.id)||"urbano"}),[le,Se]=Je.useState(null),[Ie,je]=Je.useState(null),Ue=Je.useRef($);Je.useEffect(()=>{var O;const h=((O=Oi($))==null?void 0:O.id)||"urbano";Ue.current=h,Er(h);try{localStorage.setItem("nma_equipped_skin",h)}catch{}},[$]),Je.useEffect(()=>{var O;const h=((O=Oi(le||$))==null?void 0:O.id)||"urbano";Ue.current=h,Er(h)},[le,$]);const[re,he]=Je.useState(()=>{const h=na(r==null?void 0:r.unlockedPoles,["pole_basic"]);return h.length>0?h:["pole_basic"]}),[Re,Ye]=Je.useState(()=>typeof(r==null?void 0:r.equippedPole)=="string"?r.equippedPole:"pole_basic"),[Oe,ft]=Je.useState(()=>na(r==null?void 0:r.ownedMultipliers,[])),[kt,pt]=Je.useState(()=>na(r==null?void 0:r.unlockedVipCities,[])),[ht,At]=Je.useState(()=>typeof(r==null?void 0:r.activeVipCityId)=="string"?r.activeVipCityId:null),[gt,Xt]=Je.useState(()=>{const h=na(r==null?void 0:r.unlockedProps,["balls"]);return h.length>0?h:["balls"]}),[Ut,en]=Je.useState(()=>typeof(r==null?void 0:r.equippedProp)=="string"?r.equippedProp:"balls"),[yt,qt]=Je.useState(()=>e?lw((r==null?void 0:r.gearLevels)||(r==null?void 0:r.upgrades)):{pole:0,boots:0,gloves:0}),[X,fn]=Je.useState(()=>na(r==null?void 0:r.claimedTiers,[])),[Tt,B]=Je.useState((r==null?void 0:r.soundEnabled)??!0),[b,K]=Je.useState("upgrades"),[se,de]=Je.useState("home"),Ne=Je.useRef(se);Je.useEffect(()=>{Ne.current=se,se!=="skins"&&le&&(Se(null),Ue.current=$)},[se,le,$]);const[Ae,xe]=Je.useState("menu"),[Me,Ve]=Je.useState(null),[et,Be]=Je.useState(2),[Fe,nt]=Je.useState(null),[ot,lt]=Je.useState(!1),[q,De]=Je.useState([]),[ye,Ee]=Je.useState("live"),[ge,we]=Je.useState({progress:0,metersRemaining:68,totalMeters:68,score:0,combo:0,frenzyActive:!1,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:!0,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]}),[ze,Ke]=Je.useState({coinsEarned:0,scoreEarned:0,lpEarned:0,gemsEarned:0,doubled:!1,revivedOnce:!1}),Te=S0[t]||S0.es,tt=Tn(pf).find(h=>h.id===ht)||null,Ot=mf(o,tt),gn=Oi($);Oi($);const Ri=Oi(le||$),gi=Oi(le||$),hn=Tn(Fc).find(h=>h.id===Re)||Tn(Fc)[0],Qt=Tn(Rl).find(h=>h.id===Ut)||Tn(Rl)[0],ki=Tn(Oe).reduce((h,O)=>{const ce=Tn(kc).find(be=>be.id===O);return ce?Math.max(h,ce.coinMult??1):h},1),Zn=Tn(Oe).reduce((h,O)=>{const ce=Tn(kc).find(be=>be.id===O);return ce?Math.max(h,ce.lpMult??1):h},1),Ki=(tt==null?void 0:tt.rewardMult)??1,An=(gn==null?void 0:gn.mult)??(gn==null?void 0:gn.bonusMult)??1,Fn=Number((((Qt==null?void 0:Qt.mult)??1)*An*((hn==null?void 0:hn.scoreMult)??1)*Zn*Ki).toFixed(2)),ai=Number((((Qt==null?void 0:Qt.mult)??1)*An*((hn==null?void 0:hn.coinMult)??1)*ki*Ki).toFixed(2)),Tr=Number((An*((hn==null?void 0:hn.scoreMult)??1)*Zn*Ki).toFixed(2));Je.useEffect(()=>{Lt.enabled=Tt},[Tt]),Je.useEffect(()=>{const h=Math.min(19,Math.floor((o-1)/5));h>u&&f(h)},[o,u]),Je.useEffect(()=>{try{localStorage.setItem("nma_economy_v2_migrated","true"),localStorage.setItem("nma_owned_skins",JSON.stringify(te)),localStorage.setItem("nma_equipped_skin",$),localStorage.setItem(No,JSON.stringify({lang:t,level:o,maxUnlockedCity:Math.max(u,Math.min(19,Math.floor((o-1)/5))),coins:m,gems:y,bestScore:x,leaguePoints:E,playerName:_||"Equilibrista",playerCountry:R,vipPassActive:Z,ownedSkins:te,unlockedSkins:te,equippedSkin:$,unlockedPoles:re,equippedPole:Re,ownedMultipliers:Oe,unlockedVipCities:kt,activeVipCityId:ht,unlockedProps:gt,equippedProp:Ut,gearLevels:yt,claimedTiers:X,soundEnabled:Tt}))}catch{}},[t,o,u,m,y,x,E,_,R,Z,te,$,re,Re,Oe,kt,ht,gt,Ut,yt,X,Tt]);const _t=Je.useCallback(h=>{nt(h),setTimeout(()=>{nt(O=>O===h?null:O)},2600)},[]),cr=Je.useCallback(async()=>{const h=(_||"Equilibrista").trim(),O=await E0({name:h,country:R,score:E,level:o});De(Array.isArray(O)?O:[])},[_,R,E,o]);Je.useEffect(()=>{cr();const h=setInterval(cr,12e3);return()=>clearInterval(h)},[cr]);const Zi=Je.useCallback(async h=>{var be;h&&(h.preventDefault(),h.stopPropagation());const O=String(I||"").trim().slice(0,15);if(O.length<3||O==="TÚ (Equilibrista)"){W(!0),Lt.playMissAlert();return}const ce=aa(w);W(!1),v(O),F(ce);try{localStorage.setItem("nma_player_name",O),localStorage.setItem("nma_player_country",ce),localStorage.setItem("nma_profile_completed","true")}catch{}Y.current=Date.now()+600,typeof document<"u"&&((be=document.activeElement)!=null&&be.blur)&&document.activeElement.blur(),U(!1),xe("menu"),de("home"),Lt.init(),Lt.playVictory(),_t(t==="es"?`✅ Perfil activo: ${Po(ce)} ${O}`:`✅ Profile active: ${Po(ce)} ${O}`);try{Ee("syncing"),await vl(O,ce,E,o);const Pe=await E0({name:O,country:ce,score:E,level:o});De(Array.isArray(Pe)?Pe:[])}catch(Pe){console.warn("Leaderboard sync warning:",Pe)}finally{Ee("live")}},[I,w,E,o,t,_t]),oi=Je.useCallback(()=>{k(String(_||"")),z(R),W(!1),U(!0)},[_,R,z]),ls=Je.useCallback(h=>{var ce;const O=(ce=h.touches)==null?void 0:ce[0];G.current={x:(O==null?void 0:O.clientX)??0,y:(O==null?void 0:O.clientY)??0}},[]),cs=Je.useCallback((h,O)=>{var Gt;const ce=(Gt=h.changedTouches)==null?void 0:Gt[0],be=Math.abs(((ce==null?void 0:ce.clientX)??0)-G.current.x),Pe=Math.abs(((ce==null?void 0:ce.clientY)??0)-G.current.y);be>10||Pe>10||(h.preventDefault(),h.stopPropagation(),z(O))},[z]),ln=Je.useRef(null),Ci=Je.useRef(null),Ji=Je.useRef(null),ur=Je.useRef(1),A=Je.useRef({running:!1,angle:0,angularVel:0,distance:0,targetDistance:68,score:0,combo:0,maxCombo:0,frenzyActive:!1,windForce:0,windTarget:0,windTimer:0,walkCycle:0,lastStepPhase:0,controlInput:0,balls:[],sparks:[],floatingPopups:[],hookAvailable:!0,hookActive:!1,hookTimer:0,freeFallShieldsRemaining:0,revivedOnce:!1,lastTimestamp:0,hudSyncTimer:0,nearMissCooldown:0,lightningFlashAlpha:0,fallSequence:{active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},cfg:null,skinObj:null,poleObj:null,propObj:null,gear:{pole:0,boots:0,gloves:0}}),H=Je.useCallback((h,O,ce="#00f2fe",be="")=>{const Pe=ur.current++;h.floatingPopups.push({id:Pe,text:O,subtext:be,color:ce,ttl:1.05}),h.floatingPopups.length>4&&h.floatingPopups.shift()},[]),pe=Je.useCallback((h,O)=>{const ce=h.ballCount,be=[O,"#00f2fe","#fde047","#f43f5e","#c084fc"],Pe=[];for(let Gt=0;Gt<ce;Gt++){const Ln=Gt%2===0;Pe.push({id:Gt,fromLeft:Ln,targetHand:Ln?"right":"left",progress:Gt/ce*.72,speed:h.juggleSpeed*(.95+Gt%3*.05),color:be[Gt%be.length],waitingCatch:!1})}return Pe},[]),ae=Je.useCallback((h=!1)=>{Lt.init();const O=mf(o,tt),ce=gl(Ue.current),be=A.current;if(be.cfg=O,be.skinObj=ce,be.poleObj=hn,be.propObj=Qt,be.gear={...yt},be.targetDistance=O.totalDistance,!h){be.distance=0,be.score=0,be.combo=0,be.maxCombo=0,be.frenzyActive=!1,be.hookAvailable=!0,be.revivedOnce=!1,be.floatingPopups=[];const Pe=hn.autoSaveFall?1:0,Gt=ce.freeShields||0;be.freeFallShieldsRemaining=Pe+Gt}be.angle=h?0:(Math.random()-.5)*.08,be.angularVel=0,be.windForce=0,be.windTarget=(Math.random()-.5)*O.windBase*.5,be.windTimer=1.6,be.controlInput=0,be.hookActive=!1,be.hookTimer=0,be.nearMissCooldown=0,be.lightningFlashAlpha=0,be.fallSequence={active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},be.balls=pe(O,Qt.color),be.sparks=[],be.lastTimestamp=performance.now(),be.running=!0,we({progress:Math.min(100,Math.floor(be.distance/be.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(be.targetDistance-be.distance)),totalMeters:be.targetDistance,score:Math.floor(be.score),combo:be.combo,frenzyActive:be.frenzyActive,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:be.hookAvailable,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]})},[o,tt,hn,Qt,yt,pe]),oe=()=>{if(!(Date.now()<Y.current)){if(Tg()){U(!0);return}Se(null),Ue.current=$,ae(!1),xe("playing")}},Xe=()=>{Ae==="playing"?(A.current.running=!1,Lt.updateWind(0),xe("paused")):Ae==="paused"&&(A.current.lastTimestamp=performance.now(),A.current.running=!0,xe("playing"))},He=Je.useCallback(h=>{var Gr,Qi,fi,yn,Sn;const O=A.current;if(!O.running||O.fallSequence.active)return;const ce=gl(Ue.current),be=(((Gr=O.gear)==null?void 0:Gr.gloves)||0)*.015,Pe=((Qi=O.poleObj)==null?void 0:Qi.catchRadiusBonus)||0,Gt=(ce==null?void 0:ce.catchWindowBonus)||0,Ln=Math.max(.5,.74-(((fi=O.cfg)==null?void 0:fi.catchWindow)||.24)-be-(Pe+Gt)*.35);let _n=null,Vr=-1;for(const kn of O.balls)kn.targetHand===h&&kn.progress>=Ln&&kn.progress>Vr&&(Vr=kn.progress,_n=kn);if(_n){const kn=_n.progress>=.85&&_n.progress<=.96;_n.fromLeft=h==="left",_n.targetHand=h==="left"?"right":"left",_n.progress=.02,_n.waitingCatch=!1,O.combo+=1,O.combo>O.maxCombo&&(O.maxCombo=O.combo);const er=O.frenzyActive;O.frenzyActive=O.combo>=10,!er&&O.frenzyActive?(Lt.playFrenzyStart(),H(O,t==="es"?"🔥 ¡MODO FRENESÍ x2!":"🔥 FRENZY MODE x2!","#fde047",t==="es"?"COMBO x10 ALCANZADO":"COMBO x10 REACHED")):(Lt.playCatch(O.combo,O.frenzyActive),kn&&H(O,t==="es"?`⚡ ¡PERFECTO! x${O.combo}`:`⚡ PERFECT! x${O.combo}`,O.frenzyActive?"#fde047":"#00f2fe"));const Hr=O.frenzyActive?2:1;if(O.score+=Math.round((28+O.combo*9)*Fn*Hr),!((yn=O.poleObj)!=null&&yn.noCatchRecoil)){const tr=((Sn=O.cfg)==null?void 0:Sn.catchRecoilImpulse)??.05;O.angularVel+=(h==="left"?-1:1)*tr}for(let tr=0;tr<10;tr++)O.sparks.push({hand:h,x:(Math.random()-.5)*.25,y:(Math.random()-.5)*.25,vx:(Math.random()-.5)*3.8,vy:.9+Math.random()*2.8,vz:(Math.random()-.5)*2.8,ttl:.42,color:O.frenzyActive?"#fde047":_n.color})}else O.angularVel+=h==="left"?-.16:.16,O.combo=0,O.frenzyActive=!1,Lt.playMissAlert()},[Fn,t,H]),We=Je.useCallback(()=>{const h=A.current;!h.running||!h.hookAvailable||h.fallSequence.active||(h.hookAvailable=!1,h.hookActive=!0,h.hookTimer=2.6,h.angle*=.15,h.angularVel=0,Lt.playHookRescue(),H(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80",t==="es"?"ESTABILIDAD RESTAURADA":"STABILITY RESTORED"),_t(t==="es"?"🪝 ¡Gancho Salvavidas Activado!":"🪝 Lifeline Hook Activated!"))},[t,_t,H]);Je.useEffect(()=>{const h=ce=>{const be=A.current;Ae!=="playing"||!be.running||(ce.key==="ArrowLeft"||ce.key==="a"||ce.key==="A"?be.controlInput=-1:ce.key==="ArrowRight"||ce.key==="d"||ce.key==="D"?be.controlInput=1:ce.key==="q"||ce.key==="Q"?He("left"):ce.key==="e"||ce.key==="E"?He("right"):ce.key===" "?(ce.preventDefault(),We()):ce.key==="Escape"&&Xe())},O=ce=>{const be=A.current;(ce.key==="ArrowLeft"||ce.key==="a"||ce.key==="A")&&be.controlInput<0&&(be.controlInput=0),(ce.key==="ArrowRight"||ce.key==="d"||ce.key==="D")&&be.controlInput>0&&(be.controlInput=0)};return window.addEventListener("keydown",h),window.addEventListener("keyup",O),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",O)}},[Ae,He,We]),Je.useEffect(()=>{const h=ln.current;if(!h)return;const O=aw(h);Ci.current=O,Er(Ue.current,O,!1);const ce=()=>{if(!h||!Ci.current)return;const be=h.clientWidth||390,Pe=h.clientHeight||844;Ci.current.camera.aspect=be/Pe,Ci.current.camera.updateProjectionMatrix(),Ci.current.renderer.setSize(be,Pe)};return window.addEventListener("resize",ce),()=>{window.removeEventListener("resize",ce),Lt.updateWind(0),O&&O.renderer&&O.renderer.domElement&&(h.contains(O.renderer.domElement)&&h.removeChild(O.renderer.domElement),O.renderer.dispose())}},[]),Je.useEffect(()=>{const h=A.current,O=gl(Ue.current);h.cfg?(h.skinObj=O,h.poleObj=hn,h.propObj=Qt,h.gear={...yt},!h.running&&Ae==="menu"&&(h.cfg=Ot,h.targetDistance=Ot.totalDistance)):(h.cfg=Ot,h.skinObj=O,h.poleObj=hn,h.propObj=Qt,h.gear={...yt},h.targetDistance=Ot.totalDistance,h.balls=pe(Ot,Qt.color));const ce=be=>{var _n,Vr,Gr,Qi,fi;const Pe=Math.min(.05,Math.max(.001,(be-(h.lastTimestamp||be))/1e3));h.lastTimestamp=be;const Gt=Ue.current,Ln=Oi(Gt);if(h.skinObj=Ln,h.floatingPopups.length>0)for(let yn=h.floatingPopups.length-1;yn>=0;yn--)h.floatingPopups[yn].ttl-=Pe,h.floatingPopups[yn].ttl<=0&&h.floatingPopups.splice(yn,1);if(h.lightningFlashAlpha>0&&(h.lightningFlashAlpha=Math.max(0,h.lightningFlashAlpha-Pe*2.4)),h.running&&Ae==="playing"){const yn=h.cfg;if(h.fallSequence.active)if(h.fallSequence.timer+=Pe,Lt.updateWind(0),h.fallSequence.mode==="hook_rescue")if(h.fallSequence.timer<.58)h.fallSequence.fallVy-=24*Pe,h.fallSequence.fallY+=h.fallSequence.fallVy*Pe,h.fallSequence.fallRotX+=2.2*Pe,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*2.5*Pe,h.fallSequence.ropeTopY=Math.max(h.fallSequence.fallY+1.8,16-h.fallSequence.timer*28);else if(h.fallSequence.timer<1.38){const Sn=(h.fallSequence.timer-.58)/.8;h.fallSequence.fallY=Kf(h.fallSequence.fallY,0,Sn*.25),h.fallSequence.fallRotX=Kf(h.fallSequence.fallRotX,0,Sn*.3),h.fallSequence.fallRotZ=Kf(h.fallSequence.fallRotZ,0,Sn*.3),h.fallSequence.ropeTopY=h.fallSequence.fallY+2.2+Sn*10}else h.fallSequence.active=!1,h.fallSequence.mode=null,h.fallSequence.fallY=0,h.fallSequence.fallRotX=0,h.fallSequence.fallRotZ=0,h.angle=0,h.angularVel=0,h.hookActive=!0,h.hookTimer=2,H(h,t==="es"?"🪝 ¡RESCATE EN EL AIRE!":"🪝 MID-AIR HOOK RESCUE!","#4ade80",t==="es"?"DEVUELTO AL CABLE":"PULLED BACK TO CABLE");else h.fallSequence.mode==="gameover_fall"&&(h.fallSequence.fallVy-=28*Pe,h.fallSequence.fallY+=h.fallSequence.fallVy*Pe,h.fallSequence.fallRotX+=3.4*Pe,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*4.2*Pe,h.fallSequence.timer>=1.5&&(h.running=!1,Ke({coinsEarned:h.fallSequence.finalCoins,scoreEarned:h.fallSequence.finalScore,lpEarned:h.fallSequence.finalLp,gemsEarned:0,doubled:!1,revivedOnce:h.revivedOnce}),p(Sn=>Sn+h.fallSequence.finalCoins),P(Sn=>{const kn=Sn+h.fallSequence.finalLp;return vl(_||"Equilibrista",R,kn,o),kn}),M(Sn=>Math.max(Sn,h.fallSequence.finalScore)),xe("gameover")));else{const Sn=Math.min(.45,(h.gear.pole||0)*.048),kn=((_n=h.poleObj)==null?void 0:_n.gravityReduction)||0,er=Ln.gravityMod??1-(Ln.gravityReduction||0),Hr=Math.max(.18,(1-Sn)*(1-kn)*er),tr=Math.min(.48,(h.gear.boots||0)*.052),Wr=Ln.windResist??Ln.windReduction??0,ua=Math.max(.2,(1-tr)*(1-Wr)),dr=Math.max(.25,1-Math.min(.75,(((Vr=h.poleObj)==null?void 0:Vr.stepDamp)||0)+(Ln.stepDampBonus||0))),Ns=Ln.recoveryBonus||0;if(h.windTimer-=Pe,h.windTimer<=0){const Dt=yn.gustInterval??1.8;h.windTimer=Dt*(.75+Math.random()*.45);const Mn=Math.abs(h.windTarget)>.05&&Math.random()<.72?-Math.sign(h.windTarget):Math.random()<.5?-1:1,fr=(.45+Math.random()*.65)*yn.windBase*Mn;h.windTarget=fr*ua,((Gr=yn.city)==null?void 0:Gr.weatherArchetype)==="cyber_rain"&&Math.abs(fr)>.7&&Math.random()<.45&&(h.lightningFlashAlpha=.85)}h.windForce+=(h.windTarget-h.windForce)*Pe*2.8,Lt.updateWind(h.windForce),h.hookActive&&(h.hookTimer-=Pe,h.hookTimer<=0&&(h.hookActive=!1));const da=h.walkCycle,Pi=3.2*yn.walkSpeed;h.walkCycle+=Pe*Pi;const Is=Math.floor(da/Math.PI),Xr=Math.floor(h.walkCycle/Math.PI);if(Xr!==Is){const Dt=Xr%2===0?1:-1,Mn=(yn.stepSwayImpulse??.04)*dr;h.angularVel+=Dt*Mn*(h.hookActive?.25:1),Lt.playFootstep(yn.walkSpeed)}const us=Math.sin(h.angle)*yn.gravity*Hr*(h.hookActive?.25:1),ds=h.windForce*.78*(h.hookActive?.2:1),Ds=h.controlInput*3.15*(1+Ns),fa=Math.sin(be*.0047)*.12*yn.walkSpeed*dr*(h.hookActive?.2:1);h.angularVel+=(us+ds+Ds+fa)*Pe,h.angularVel*=Math.pow(.88,Pe*60),h.angle+=h.angularVel*Pe,h.hookActive&&(h.angle*=Math.pow(.86,Pe*60)),h.nearMissCooldown>0&&(h.nearMissCooldown-=Pe);const Xn=Math.abs(h.angle)/la;if(Xn>=.78&&Xn<.98&&h.nearMissCooldown<=0&&h.angle*h.controlInput<0&&Math.abs(h.controlInput)>.1){h.nearMissCooldown=2.4;const Dt=Math.round(150*Fn*(h.frenzyActive?2:1));h.score+=Dt,Lt.playNearMiss(),H(h,t==="es"?`⚡ ¡SALVADA AL LÍMITE! +${Dt}`:`⚡ NEAR-MISS SAVE! +${Dt}`,"#38bdf8",t==="es"?"RECUPERACIÓN EXTREMA":"EXTREME RECOVERY")}const Ar=Math.max(.35,1-Math.abs(h.angle)/(la*1.15)),xi=4.6*yn.walkSpeed*(.72+Ar*.38);h.distance+=xi*Pe,h.score+=xi*Pe*12*Fn*(h.frenzyActive?2:1);const Li={left:!1,right:!1},Wa=(((Qi=h.gear)==null?void 0:Qi.gloves)||0)*.015,Us=((fi=h.poleObj)==null?void 0:fi.catchRadiusBonus)||0,ha=Ln.catchWindowBonus||0,qr=Math.max(.5,.74-yn.catchWindow-Wa-(Us+ha)*.35);for(const Dt of h.balls)if(Dt.progress+=Dt.speed*Pe,Dt.progress>=qr&&Dt.progress<=1.02?(Li[Dt.targetHand]=!0,Dt.waitingCatch=!0):Dt.waitingCatch=!1,Dt.progress>1.03){Dt.fromLeft=Dt.targetHand==="left",Dt.targetHand=Dt.fromLeft?"right":"left",Dt.progress=0,Dt.waitingCatch=!1,h.combo=0,h.frenzyActive=!1;const Mn=.24+(yn.speedPhase||0)*.04;h.angularVel+=Dt.targetHand==="left"?-Mn:Mn,Lt.playMissAlert(),H(h,t==="es"?"⚠️ ¡ESFERA PERDIDA!":"⚠️ DROPPED ORB!","#ef4444")}for(let Dt=h.sparks.length-1;Dt>=0;Dt--){const Mn=h.sparks[Dt];Mn.ttl-=Pe,Mn.ttl<=0?h.sparks.splice(Dt,1):(Mn.x+=Mn.vx*Pe,Mn.y+=Mn.vy*Pe,Mn.vy-=5.5*Pe)}if(Math.abs(h.angle)>=la)if(h.freeFallShieldsRemaining>0)h.freeFallShieldsRemaining-=1,h.angle*=.12,h.angularVel=0,h.hookActive=!0,h.hookTimer=2.2,Lt.playHookRescue(),H(h,t==="es"?"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!":"🛡️ ANTI-FALL SHIELD ACTIVATED!","#fde047",t==="es"?"PROTECCIÓN PRO / VIP":"PRO / VIP PROTECTION");else if(h.hookAvailable)h.hookAvailable=!1,h.fallSequence.active=!0,h.fallSequence.mode="hook_rescue",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-3.8,h.fallSequence.fallRotX=.18,h.fallSequence.fallRotZ=h.angle*.8,h.fallSequence.ropeTopY=16,Lt.playFallScream(),setTimeout(()=>Lt.playHookRescue(),460),H(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80");else{const Dt=Math.floor(h.score),Mn=Math.max(15,Math.floor((h.distance*1.4+h.maxCombo*6)*ai)),fr=Math.max(10,Math.floor((h.distance*.8+h.maxCombo*4)*Tr));h.fallSequence.active=!0,h.fallSequence.mode="gameover_fall",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-4.5,h.fallSequence.fallRotX=.25,h.fallSequence.fallRotZ=h.angle,h.fallSequence.finalCoins=Mn,h.fallSequence.finalScore=Dt,h.fallSequence.finalLp=fr,Lt.updateWind(0),Lt.playFallScream()}else if(h.distance>=h.targetDistance){h.running=!1,Lt.updateWind(0),Lt.playVictory();const Dt=Math.floor(h.score+500*Fn),Mn=Math.floor((125+o*26+h.maxCombo*12)*ai),fr=Math.floor((95+o*16+h.maxCombo*9)*Tr),jr=(tt?tt.gemBonus:0)+(o%5===0?12:4);Ke({coinsEarned:Mn,scoreEarned:Dt,lpEarned:fr,gemsEarned:jr,doubled:!1,revivedOnce:h.revivedOnce}),p(Bi=>Bi+Mn),S(Bi=>Bi+jr),P(Bi=>{const fs=Bi+fr;return vl(_||"Equilibrista",R,fs,o+1),fs}),M(Bi=>Math.max(Bi,Dt)),f(Bi=>Math.max(Bi,Math.min(19,Math.floor(o/5)))),xe("victory");return}h.hudSyncTimer+=Pe,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,we({progress:Math.min(100,Math.floor(h.distance/h.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(h.targetDistance-h.distance)),totalMeters:h.targetDistance,score:Math.floor(h.score),combo:h.combo,frenzyActive:h.frenzyActive,tiltRatio:Math.max(-1,Math.min(1,h.angle/la)),windForce:h.windForce,juggleAlertHands:Li,hookAvailable:h.hookAvailable,hookActive:h.hookActive,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))}h.fallSequence.active&&(h.hudSyncTimer+=Pe,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,we(Sn=>({...Sn,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))))}else h.walkCycle+=Pe*1.4;Ci.current&&ow(Ci.current,h,be*.001,Ae,Ue.current,Ne.current),Ji.current=requestAnimationFrame(ce)};return Ji.current=requestAnimationFrame(ce),()=>{Ji.current&&cancelAnimationFrame(Ji.current)}},[Ae,Ot,hn,Qt,yt,Fn,ai,Tr,tt,o,t,_,R,pe,H]),Je.useEffect(()=>{if(!Me)return;Be(2);const h=setInterval(()=>{Be(O=>O<=1?(clearInterval(h),0):O-1)},1e3);return()=>clearInterval(h)},[Me]);const it=()=>{const h=Me;if(Ve(null),h==="revive"){const O=A.current;O.revivedOnce=!0,O.hookAvailable=!0,ae(!0),xe("playing"),_t(t==="es"?"⚡ ¡Segunda oportunidad activada!":"⚡ Second chance activated!")}else h==="double"?ze.doubled||(p(O=>O+ze.coinsEarned),P(O=>{const ce=O+ze.lpEarned;return vl(_||"Equilibrista",R,ce,o),ce}),Ke(O=>({...O,coinsEarned:O.coinsEarned*2,lpEarned:O.lpEarned*2,doubled:!0})),_t(t==="es"?"🎬 ¡Recompensas Duplicadas x2!":"🎬 Rewards Doubled x2!")):h==="gems"?(S(O=>O+35),_t(t==="es"?"💎 +35 Gemas Gratis acreditadas":"💎 +35 Free Gems credited")):h==="coins"&&(p(O=>O+1500),_t(t==="es"?"🪙 +1.500 Monedas Gratis acreditadas":"🪙 +1,500 Free Coins credited"))},st=()=>{const h=o+1;l(h),f(O=>Math.max(O,Math.min(19,Math.floor((h-1)/5)))),setTimeout(()=>{const O=A.current,ce=mf(h,tt),be=gl(Ue.current);O.cfg=ce,O.skinObj=be,O.targetDistance=ce.totalDistance,O.distance=0,O.score=0,O.combo=0,O.maxCombo=0,O.frenzyActive=!1,O.angle=0,O.angularVel=0,O.hookAvailable=!0,O.hookActive=!1,O.revivedOnce=!1;const Pe=hn.autoSaveFall?1:0,Gt=be.freeShields||0;O.freeFallShieldsRemaining=Pe+Gt,O.fallSequence.active=!1,O.fallSequence.mode=null,O.balls=pe(ce,Qt.color),O.lastTimestamp=performance.now(),O.running=!0,xe("playing")},30)},mt=h=>{const O=yt[h.id]||0,ce=y0(O);if(!ce.isMax)if(ce.isProTier){if(Z){qt(be=>({...be,[h.id]:O+1})),Lt.playVictory(),_t(`👑 ${h.name[t]} Élite Nv.${O+1}/10 (Pase VIP)!`);return}y>=ce.gemCost?(S(be=>be-ce.gemCost),qt(be=>({...be,[h.id]:O+1})),Lt.playVictory(),_t(`👑 ${h.name[t]} Élite Nv.${O+1}/10!`)):(de("store"),_t(t==="es"?`👑 Nivel Élite (6-10): Requiere ${ce.gemCost} Gemas o Pase VIP Pro`:`👑 Elite Tier (6-10): Requires ${ce.gemCost} Gems or VIP Pro Pass`))}else{if(m<ce.coinCost){_t(t==="es"?`🪙 Necesitás ${ce.coinCost.toLocaleString()} Monedas`:`🪙 Need ${ce.coinCost.toLocaleString()} Coins`);return}p(be=>be-ce.coinCost),qt(be=>({...be,[h.id]:O+1})),Lt.playCatch(O+2,!1),_t(`${h.icon} ${h.name[t]} Nv.${O+1}/10!`)}},St=h=>{if(re.includes(h.id)||h.isVipOnly&&Z){re.includes(h.id)||he(O=>[...O,h.id]),Ye(h.id),Lt.playCatch(4,!1),_t(`${h.icon} ${h.name[t]} ${Te.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),he(O=>[...O,h.id]),Ye(h.id),Lt.playVictory(),_t(`${h.icon} ${h.name[t]}!`)):_t(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.gemCost?(S(O=>O-h.gemCost),he(O=>[...O,h.id]),Ye(h.id),Lt.playVictory(),_t(`👑 ${h.name[t]} Desbloqueada!`)):(de("store"),_t(t==="es"?`👑 Vara Exclusiva (${h.usdPrice||`${h.gemCost} 💎`}): Visitá la Tienda VIP`:`👑 Exclusive Pole (${h.usdPrice||`${h.gemCost} 💎`}): Visit VIP Store`))},$e=h=>{const O=ia(h.id);if(le===O){Se(null),Ue.current=$,A.current.skinObj=gl($),Er($);return}Ue.current=O,A.current.skinObj=h,Se(O),Er(O),Lt.playCatch(3,!1),_t(t==="es"?`👁️ Probando en 3D: ${h.icon} ${h.name.es}`:`👁️ Trying in 3D: ${h.icon} ${h.name.en}`)},Nt=(h,O=!1)=>{if(!h)return;const ce=ia(h.id);O&&h.gemCost&&y>=h.gemCost&&S(Pe=>Pe-h.gemCost);const be=Array.from(new Set([...te,ce]));Q(be);try{localStorage.setItem("nma_owned_skins",JSON.stringify(be)),localStorage.setItem("nma_equipped_skin",ce)}catch{}Se(null),je(null),Ue.current=ce,A.current.skinObj=h,T(ce),Er(ce),Lt.playVictory(),_t(t==="es"?`👑 ¡${h.name.es} DESBLOQUEADO Y EQUIPADO EN 3D!`:`👑 ${h.name.en} UNLOCKED & EQUIPPED IN 3D!`)},pn=h=>{const O=ia(h.id);if(te.includes(O)||te.includes(h.legacyId)||h.isVipOnly&&Z){if(!te.includes(O)){const Pe=Array.from(new Set([...te,O]));Q(Pe);try{localStorage.setItem("nma_owned_skins",JSON.stringify(Pe))}catch{}}Se(null),Ue.current=O,A.current.skinObj=h,T(O),Er(O),Lt.playCatch(5,!0),_t(`${h.icon} ${h.name[t]} — ${Te.equipped}!`);return}const be=h.price??h.cost??0;if(h.currency==="coins")if(m>=be){p(Gt=>Gt-be);const Pe=Array.from(new Set([...te,O]));Q(Pe);try{localStorage.setItem("nma_owned_skins",JSON.stringify(Pe)),localStorage.setItem("nma_equipped_skin",O)}catch{}Se(null),Ue.current=O,A.current.skinObj=h,T(O),Er(O),Lt.playVictory(),_t(`${h.icon} ${h.name[t]} ${Te.equipped}!`)}else Ue.current=O,A.current.skinObj=h,Se(O),Er(O),_t(t==="es"?`🪙 Necesitás ${be.toLocaleString()} Monedas (Probando en 3D)`:`🪙 Need ${be.toLocaleString()} Coins (Trying in 3D)`);else Ue.current=O,A.current.skinObj=h,Se(O),Er(O),je(h)},tn=h=>{if(Oe.includes(h.id)){_t(t==="es"?"✅ Multiplicador ya activo":"✅ Multiplier already active");return}if(h.isVipOnly&&Z){ft(O=>[...O,h.id]),Lt.playVictory(),_t(`👑 ${h.name[t]} Activado!`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),ft(O=>[...O,h.id]),Lt.playVictory(),_t(`🚀 ${h.name[t]} Activado!`)):_t(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.gemCost?(S(O=>O-h.gemCost),ft(O=>[...O,h.id]),Lt.playVictory(),_t(`👑 ${h.name[t]} Activado!`)):(de("store"),_t(t==="es"?`👑 Multiplicador Pro (${h.usdPrice}): Requiere ${h.gemCost} 💎 o Pase VIP`:`👑 Pro Multiplier (${h.usdPrice}): Requires ${h.gemCost} 💎 or VIP Pass`))},jt=h=>{if(gt.includes(h.id)){en(h.id),_t(`${h.icon} ${h.name[t]} ${Te.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),Xt(O=>[...O,h.id]),en(h.id),Lt.playVictory(),_t(`${h.icon} ${h.name[t]}!`)):_t(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.cost?(S(O=>O-h.cost),Xt(O=>[...O,h.id]),en(h.id),Lt.playVictory(),_t(`${h.icon} ${h.name[t]}!`)):(de("store"),_t(t==="es"?"💎 Gemas insuficientes":"💎 Not enough gems"))},Rn=h=>{const O=Math.max(u,Math.min(19,Math.floor((o-1)/5)));if(h>O)return;const ce=h*5+1;At(null),l(ce),lt(!1),_t(t==="es"?`✈️ Viajaste a ${Ts[h].flag} ${Ts[h].name.es} (Nivel ${ce})`:`✈️ Traveled to ${Ts[h].flag} ${Ts[h].name.en} (Level ${ce})`)},Ze=h=>{if(Z||kt.includes(h.id)){At(h.id),lt(!1),Lt.playVictory(),_t(t==="es"?`👑 Ciudad VIP Activa: ${h.flag} ${h.name.es} (x${h.rewardMult} Recompensas)`:`👑 VIP City Active: ${h.flag} ${h.name.en} (x${h.rewardMult} Rewards)`);return}y>=h.gemUnlockCost?(S(ce=>ce-h.gemUnlockCost),pt(ce=>[...ce,h.id]),At(h.id),lt(!1),Lt.playVictory(),_t(`👑 ${h.flag} ${h.name[t]} Desbloqueada!`)):(lt(!1),de("store"),_t(t==="es"?`🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${h.gemUnlockCost} 💎`:`🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${h.gemUnlockCost} 💎`))},cn=h=>{S(O=>O+h.gems),p(O=>O+h.coins),h.isVipPassBundle&&(fe(!0),he(O=>Array.from(new Set([...O,"pole_imperial","pole_quantum"]))),Ye("pole_imperial"),ne(O=>Array.from(new Set([...O,"shinobi","ronin_gold","quantum_specter","immortal_legend","leyenda_dorada"]))),Se(null),Ue.current="immortal_legend",T("immortal_legend"),ft(O=>Array.from(new Set([...O,"mult_x3_pro"]))),pt(pf.map(O=>O.id))),P(O=>{const ce=O+(h.leaguePts||200);return vl(_||"Equilibrista",R,ce,o),ce}),Lt.playVictory(),_t(h.isVipPassBundle?t==="es"?"👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas":"👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked":`👑 ${h.name[t]} (+${h.gems} 💎 / +${h.coins.toLocaleString()} 🪙)`)},Pt=h=>{X.includes(h.id)||E<h.requiredLp||(fn(O=>[...O,h.id]),S(O=>O+h.gemsReward),p(O=>O+h.coinsReward),Lt.playVictory(),_t(`🏆 +${h.gemsReward} 💎 & +${h.coinsReward} 🪙!`))},Un=Array.isArray(q)&&q.length>0?q:[{id:"player_self",name:String(_||"Equilibrista"),country:aa(R),flag:Po(R),score:E,lp:E,level:o,isPlayer:!0}],Mt=Un.findIndex(h=>h==null?void 0:h.isPlayer),li=Mt>=0?Mt+1:1,vi=Math.abs(ge.windForce)<.08?"•":ge.windForce>0?">>>":"<<<",Vt=Math.max(u,Math.min(19,Math.floor((o-1)/5))),nn=Po(R);return N.jsx("div",{className:"app-root",children:N.jsxs("div",{className:"phone-frame",children:[N.jsx("div",{ref:ln,className:"game-canvas",style:{width:"100%",height:"100%",position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}}),Fe&&N.jsx("div",{className:"toast-banner",children:Fe}),C&&N.jsx("div",{className:"modal-backdrop onboarding-backdrop",style:{zIndex:250},children:N.jsxs("form",{className:"modal-card onboarding-modal-card",onSubmit:Zi,children:[N.jsx("div",{className:"onboarding-crown-badge",children:t==="es"?"🏆 LIGA MUNDIAL EN VIVO":"🏆 LIVE WORLD LEAGUE"}),N.jsx("h2",{className:"modal-title onboarding-title",children:t==="es"?"⚡ CREÁ TU PERFIL DE EQUILIBRISTA":"⚡ CREATE YOUR TIGHTROPE PROFILE"}),N.jsx("p",{className:"modal-subtitle onboarding-subtitle",children:t==="es"?"Elegí tu nombre y país para competir en el Ranking Mundial en vivo.":"Choose your name and country to compete on the Live World Leaderboard."}),N.jsxs("div",{className:"onboarding-field-group",children:[N.jsx("label",{className:"onboarding-label",htmlFor:"onboarding-name-input",children:t==="es"?"1. TU NOMBRE O APODO (3 A 15 CARACTERES)":"1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)"}),N.jsx("input",{id:"onboarding-name-input",type:"text",maxLength:15,autoComplete:"nickname",enterKeyHint:"done",className:`onboarding-input ${ee?"input-error-shake":""}`,placeholder:t==="es"?"Tu Nombre o Apodo (Ej: Maury_AR)":"Your Nickname (e.g. Maury_AR)",value:I,onChange:h=>{k(h.target.value),ee&&W(!1)},onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),h.currentTarget.blur())}}),ee&&N.jsx("div",{className:"onboarding-error-msg",children:t==="es"?"⚠️ Ingresá un nombre válido de al menos 3 caracteres.":"⚠️ Please enter a valid name of at least 3 characters."})]}),N.jsxs("div",{className:"onboarding-field-group",children:[N.jsx("label",{className:"onboarding-label",children:t==="es"?`2. SELECCIONÁ TU PAÍS / BANDERA — ${Po(w)} ${w}`:`2. SELECT YOUR COUNTRY / FLAG — ${Po(w)} ${w}`}),N.jsx("div",{className:"onboarding-country-grid",role:"radiogroup",children:sp.map(h=>{const O=w===h.code;return N.jsxs("button",{type:"button",role:"radio","aria-checked":O,className:`onboarding-country-chip ${O?"selected":""}`,onClick:ce=>{ce.stopPropagation(),z(h.code)},onTouchStart:ls,onTouchEnd:ce=>cs(ce,h.code),children:[N.jsx("span",{className:"country-chip-flag",children:h.flag}),N.jsx("span",{className:"country-chip-code",children:h.code}),N.jsx("span",{className:"country-chip-name",children:h.name})]},h.code)})})]}),N.jsx("button",{type:"button",className:"onboarding-submit-btn",onClick:Zi,children:t==="es"?"🚀 GUARDAR Y ENTRAR AL JUEGO":"🚀 SAVE & ENTER THE GAME"})]})}),ot&&N.jsx("div",{className:"modal-backdrop",style:{zIndex:120},children:N.jsxs("div",{className:"modal-card",style:{maxHeight:"86%",display:"flex",flexDirection:"column",padding:"16px 14px"},children:[N.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[N.jsx("h2",{className:"modal-title",style:{fontSize:16,margin:0},children:t==="es"?"🌍 CIUDADES Y MONUMENTOS 3D":"🌍 CITIES & 3D LANDMARKS"}),N.jsx("button",{className:"hud-pause-btn",onClick:()=>lt(!1),style:{width:30,height:30,fontSize:13},children:"✕"})]}),N.jsxs("div",{className:"items-scroll-list",style:{flex:1,overflowY:"auto",paddingRight:4},children:[N.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#fde047",letterSpacing:.8,marginBottom:6,marginTop:2},children:Te.vipCitiesTitle}),Tn(pf).map(h=>{const O=Z||kt.includes(h.id),ce=ht===h.id;return N.jsxs("div",{className:"item-card vip-city-card",style:{cursor:"pointer",borderColor:ce?"rgba(253, 224, 71, 0.95)":"rgba(250, 204, 21, 0.45)"},onClick:()=>Ze(h),children:[N.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:O?h.flag:"🔒"}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",style:{color:"#fde047"},children:["👑 ",Yt(h.name,t)]}),N.jsxs("div",{className:"benefit-pill-tag pro",children:["x",h.rewardMult," 🪙/LP • +",h.gemBonus," 💎 POR CRUCE"]}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${ce?"equipped":"buy-gems"}`,children:ce?t==="es"?"ACTIVA":"ACTIVE":O?t==="es"?"VIAJAR":"TRAVEL":`👑 ${h.gemUnlockCost} 💎`})]},h.id)}),N.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#38bdf8",letterSpacing:.8,margin:"12px 0 6px"},children:t==="es"?"🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)":"🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)"}),Tn(Ts).map((h,O)=>{const ce=O<=Vt,be=!ht&&Ot.cityIndex===O,Pe=O*5+1,Gt=O*5+5;return N.jsxs("div",{className:`item-card ${be?"selected":""}`,style:{opacity:ce?1:.52,cursor:ce?"pointer":"not-allowed"},onClick:()=>ce&&Rn(O),children:[N.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:ce?h.flag:"🔒"}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[O+1,". ",Yt(h.name,t)]}),N.jsxs("div",{className:"benefit-pill-tag",children:["🗿 ",Yt(h.monumentName||h.weatherLabel,t)]}),N.jsx("div",{className:"item-desc",children:t==="es"?`Niveles ${Pe} al ${Gt} • ${Yt(h.weatherLabel,"es")}`:`Levels ${Pe} to ${Gt} • ${Yt(h.weatherLabel,"en")}`})]}),N.jsx("button",{className:`item-action-btn ${be?"equipped":ce?"buy-coins":"locked"}`,disabled:!ce,children:be?t==="es"?"ACTUAL":"ACTIVE":ce?t==="es"?`NV. ${Pe}`:`LVL ${Pe}`:`🔒 NV.${Pe}`})]},h.index)})]})]})}),Ae==="playing"&&N.jsxs("div",{className:"gameplay-hud-layer",children:[ge.lightningFlashAlpha>.05&&N.jsx("div",{className:"weather-lightning-flash",style:{opacity:ge.lightningFlashAlpha}}),N.jsxs("div",{className:"vector-hud-top",children:[N.jsxs("div",{className:"vector-top-row",children:[N.jsxs("div",{className:"vector-city-tag",children:[N.jsxs("span",{children:[Ot.city.flag," ",Ot.city.name[t].toUpperCase()," •"," ",tt?"👑 VIP":`${Te.level} ${o}`," • x",Fn]}),N.jsxs("span",{className:"vector-meters-left",children:[ge.metersRemaining,"m / ",ge.totalMeters,"m"]})]}),N.jsxs("div",{className:"vector-hud-buttons",children:[N.jsx("button",{className:"hud-pause-btn",onClick:()=>B(h=>!h),"aria-label":"Audio",children:Tt?"🔊":"🔇"}),N.jsx("button",{className:"hud-pause-btn",onClick:Xe,"aria-label":"Pause",children:"⏸"})]})]}),N.jsx("div",{className:"vector-progress-rail",children:N.jsx("div",{className:"vector-progress-fill",style:{width:`${ge.progress}%`}})}),N.jsxs("div",{className:"vector-Horizon-pill-row",children:[N.jsxs("div",{className:`vector-horizon-pill ${Math.abs(ge.tiltRatio)>.65?"danger":""}`,children:[N.jsx("div",{className:"vector-horizon-center-tick"}),N.jsx("div",{className:"vector-horizon-dot",style:{left:`${50+Math.max(-46,Math.min(46,ge.tiltRatio*46))}%`}})]}),N.jsxs("div",{className:"vector-wind-badge",children:["🌬️ ",vi," ",Math.abs(ge.windForce*18).toFixed(0)," km/h"]}),N.jsxs("div",{className:`vector-score-badge ${ge.frenzyActive?"frenzy-glow":""}`,children:[ge.score.toLocaleString()," pts",ge.combo>1?` • x${ge.combo}`:"",ge.frenzyActive?" 🔥":""]})]})]}),ge.floatingPopups&&ge.floatingPopups.length>0&&N.jsx("div",{className:"floating-popups-layer",children:ge.floatingPopups.map(h=>N.jsxs("div",{className:"floating-feedback-popup",style:{color:h.color,borderColor:h.color},children:[N.jsx("div",{className:"floating-popup-main",children:h.text}),h.subtext&&N.jsx("div",{className:"floating-popup-sub",children:h.subtext})]},h.id))}),N.jsxs("div",{className:"vector-controls-layer",children:[N.jsxs("div",{className:"vector-touch-zones",children:[N.jsx("button",{className:"vector-touch-half left",onPointerDown:()=>{A.current.controlInput=-1},onPointerUp:()=>{A.current.controlInput<0&&(A.current.controlInput=0)},onPointerLeave:()=>{A.current.controlInput<0&&(A.current.controlInput=0)},children:N.jsxs("span",{className:"vector-corner-hint",children:["◀ ",Te.leanLeft]})}),N.jsx("button",{className:"vector-touch-half right",onPointerDown:()=>{A.current.controlInput=1},onPointerUp:()=>{A.current.controlInput>0&&(A.current.controlInput=0)},onPointerLeave:()=>{A.current.controlInput>0&&(A.current.controlInput=0)},children:N.jsxs("span",{className:"vector-corner-hint",children:[Te.leanRight," ▶"]})})]}),N.jsxs("div",{className:"vector-juggle-overlay-row",children:[N.jsxs("button",{className:`vector-catch-pill ${ge.juggleAlertHands.left?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),He("left")},children:["✋ ",Te.leftHand]}),ge.hookAvailable&&N.jsx("button",{className:"vector-hook-pill",onPointerDown:h=>{h.stopPropagation(),We()},children:"🪝"}),N.jsxs("button",{className:`vector-catch-pill ${ge.juggleAlertHands.right?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),He("right")},children:[Te.rightHand," ✋"]})]})]})]}),Ae==="menu"&&N.jsxs("div",{className:"menu-overlay-layer",children:[N.jsxs("div",{className:"currency-top-bar",children:[N.jsxs("div",{className:"currency-group",children:[N.jsxs("div",{className:"currency-pill league",onClick:()=>de("league"),title:Te.leagueBanner,children:["🏆 ",t==="es"?"LIGA":"LEAGUE"," #",li]}),N.jsxs("div",{className:"currency-pill level",children:["⭐ ",Te.level," ",o]}),N.jsxs("div",{className:"currency-pill coins",onClick:()=>Ve("coins"),title:Te.freeCoinsAd,children:["🪙 ",m.toLocaleString()," ",N.jsx("span",{className:"plus-badge",children:"+"})]}),N.jsxs("div",{className:"currency-pill gems",onClick:()=>Ve("gems"),title:Te.freeGemsAd,children:["💎 ",y.toLocaleString()," ",N.jsx("span",{className:"plus-badge",children:"+"})]})]}),N.jsxs("div",{className:"utility-group",children:[N.jsxs("button",{className:"profile-header-badge",onClick:oi,title:t==="es"?"Editar Perfil":"Edit Profile",children:[N.jsx("span",{children:String(nn||"🇦🇷")}),N.jsx("span",{className:"profile-header-name",children:String(_||"Equilibrista")}),N.jsx("span",{className:"profile-header-edit",children:"✏️"})]}),N.jsx("button",{className:"icon-btn",onClick:()=>B(h=>!h),title:"Sound",children:Tt?"🔊":"🔇"})]})]}),N.jsxs("div",{className:`tab-content-area ${se==="home"?"home-mode":""}`,children:[se==="home"&&N.jsxs("div",{className:"home-card",children:[N.jsxs("div",{className:"brand-header",children:[N.jsx("span",{className:"official-badge",children:Z?"👑 PASE VIP PRO ACTIVO":Te.officialEdition}),N.jsx("h1",{className:"game-logo-title",children:Te.title}),N.jsxs("p",{className:"game-logo-sub",children:["🗿 ",Yt(Ot.city.monumentName,t,Te.subtitle)]})]}),N.jsxs("div",{className:"home-bottom-panel",children:[N.jsxs("div",{className:"city-campaign-card",onClick:()=>lt(!0),style:{cursor:"pointer"},children:[N.jsx("div",{className:"city-flag-circle",children:Ot.city.flag}),N.jsxs("div",{className:"city-details",children:[N.jsx("div",{className:"city-stage-tag",children:tt?`👑 CIUDAD VIP (x${tt.rewardMult} PAGO)`:`${Te.worldTour} • ${Te.city} ${Ot.cityIndex+1}/20`}),N.jsx("div",{className:"city-title-text",children:Yt(Ot.city.name,t)}),N.jsxs("div",{className:"city-level-sub",children:[Te.level," ",o," • ",gn.icon," ",Yt(gn.name,t)]})]}),N.jsxs("div",{className:"multiplier-chip",children:["x",Fn]})]}),N.jsxs("div",{className:"home-quick-nav-grid",children:[N.jsxs("button",{type:"button",className:"home-quick-nav-btn",onClick:()=>lt(!0),children:[N.jsx("span",{className:"quick-nav-ic",children:"🌍"}),N.jsx("span",{children:t==="es"?"20 Ciudades":"20 Cities"})]}),N.jsxs("button",{type:"button",className:"home-quick-nav-btn",onClick:()=>de("armory"),children:[N.jsx("span",{className:"quick-nav-ic",children:"⚙️"}),N.jsx("span",{children:t==="es"?"Armería":"Armory"})]}),N.jsxs("button",{type:"button",className:"home-quick-nav-btn",onClick:()=>de("skins"),children:[N.jsx("span",{className:"quick-nav-ic",children:"🧥"}),N.jsx("span",{children:t==="es"?"Aspectos":"Skins"})]}),N.jsxs("button",{type:"button",className:"home-quick-nav-btn gold",onClick:()=>de("store"),children:[N.jsx("span",{className:"quick-nav-ic",children:"💎"}),N.jsx("span",{children:t==="es"?"Cofres":"Chests"})]})]}),N.jsxs("button",{className:"play-cta-button",onClick:oe,children:[N.jsx("span",{className:"play-icon",children:"▶"})," ",t==="es"?"JUGAR / SALTAR AL CABLE":"PLAY / STEP ON THE WIRE"]}),N.jsxs("div",{className:"reward-ads-row",children:[N.jsxs("button",{className:"ad-reward-btn coins",onClick:()=>Ve("coins"),children:["🎬 ",Te.freeCoinsAd]}),N.jsxs("button",{className:"ad-reward-btn gems",onClick:()=>Ve("gems"),children:["🎬 ",Te.freeGemsAd]})]})]})]}),se==="armory"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["⚙️ ",Te.armoryTitle]}),N.jsxs("div",{className:"section-sub-tabs",children:[N.jsx("button",{className:`sub-tab-btn ${b==="upgrades"?"active":""}`,onClick:()=>K("upgrades"),children:t==="es"?"⚙️ MEJORAS (1-10)":"⚙️ UPGRADES (1-10)"}),N.jsx("button",{className:`sub-tab-btn ${b==="poles"?"active":""}`,onClick:()=>K("poles"),children:t==="es"?"⚖️ VARAS 3D (5)":"⚖️ 3D POLES (5)"}),N.jsx("button",{className:`sub-tab-btn ${b==="multipliers"?"active":""}`,onClick:()=>K("multipliers"),children:t==="es"?"🚀 MULTIPLICADORES":"🚀 MULTIPLIERS"})]}),N.jsxs("div",{className:"items-scroll-list",children:[b==="upgrades"&&N.jsxs(N.Fragment,{children:[Tn(Rx).map(h=>{const O=(yt==null?void 0:yt[h.id])||0,ce=y0(O);return N.jsxs("div",{className:"item-card",children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[Yt(h.name,t)," ",N.jsxs("span",{className:"lvl-pill",children:["Nv. ",O,"/10"]})]}),N.jsx("div",{className:`benefit-pill-tag ${ce.isProTier?"pro":""}`,children:ce.isProTier?t==="es"?"👑 TRAMO ÉLITE PRO (NV. 6 A 10)":"👑 PRO ELITE TIER (LVL 6 TO 10)":Yt(h.statLabel,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)}),N.jsx("div",{className:"armory-level-bar",children:Array.from({length:10}).map((be,Pe)=>N.jsx("span",{className:`armory-pip ${Pe>=5?"pro-pip":""} ${Pe<O?"filled":""}`},Pe))})]}),N.jsx("button",{className:`item-action-btn ${ce.isMax?"equipped":ce.isProTier?"buy-gems":"buy-coins"}`,disabled:ce.isMax,onClick:()=>mt(h),children:ce.isMax?Te.maxLevel:ce.isProTier?Z?"👑 VIP GRATIS":`👑 PRO ${ce.gemCost} 💎`:`🪙 ${ce.coinCost.toLocaleString()}`})]},h.id)}),N.jsxs("h3",{className:"sub-section-title",children:["🎪 ",Te.propsTitle]}),Tn(Rl).map(h=>{const O=gt.includes(h.id),ce=Ut===h.id;return N.jsxs("div",{className:`item-card ${ce?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:Yt(h.name,t)}),N.jsxs("div",{className:"item-desc",children:["Multiplicador Base x",h.mult]})]}),N.jsx("button",{className:`item-action-btn ${ce?"equipped":O?"equip":h.currency==="gems"?"buy-gems":"buy-coins"}`,onClick:()=>jt(h),children:ce?Te.equipped:O?Te.equip:h.currency==="gems"?`💎 ${h.cost}`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]}),b==="poles"&&Tn(Fc).map(h=>{const O=re.includes(h.id)||h.isVipOnly&&Z,ce=Re===h.id;return N.jsxs("div",{className:`item-card ${ce?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:Yt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:Yt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${ce?"equipped":O?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>St(h),children:ce?Te.equipped:O?Te.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),b==="multipliers"&&Tn(kc).map(h=>{const O=Oe.includes(h.id)||h.isVipOnly&&Z;return N.jsxs("div",{className:`item-card ${O?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:Yt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:Yt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>tn(h),children:O?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),se==="skins"&&N.jsxs("div",{className:"panel-card skins-panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["🎭 ",Te.skinsTitle]}),N.jsxs("div",{className:"skin-3d-live-window",children:[N.jsxs("div",{className:"skin-live-top-tag",children:[N.jsxs("span",{children:["🎥"," ",le?t==="es"?"VISTA PREVIA 3D ACTIVA":"3D PREVIEW ACTIVE":t==="es"?"VISTA 3D EN TIEMPO REAL":"LIVE 3D PREVIEW"]}),N.jsxs("span",{className:"skin-live-mult-chip",children:[Ri.icon," ",gi.multLabel," (TOTAL x",Fn,")"]})]}),N.jsxs("div",{className:"skin-live-bottom-bar",children:[N.jsxs("span",{children:[Ri.name[t],le?t==="es"?" (PROBANDO)":" (PREVIEW)":""]}),N.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:(gi.paletteSwatches||[]).map((h,O)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:h}},O))})]})]}),N.jsxs("div",{className:"items-scroll-list",children:[Tn(As).filter(h=>!h.isPro).map(h=>{const O=ia(h.id),ce=te.includes(O)||te.includes(h.legacyId),be=ia($)===O&&!le,Pe=le===O,Gt=Oi(O);return N.jsxs("div",{className:`item-card ${be||Pe?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`},children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:Yt(h.name,t)}),N.jsxs("div",{className:"skin-palette-preview-badge",children:[Tn(Gt.paletteSwatches).map((Ln,_n)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:Ln}},_n)),N.jsxs("span",{className:"palette-label-text",children:[Yt(Gt.paletteLabel,t,Gt.multLabel)," • ",Gt.multLabel]})]}),N.jsx("div",{className:"benefit-pill-tag",children:Yt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!be&&N.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:Pe?"linear-gradient(135deg, #00f2fe, #0284c7)":"rgba(15, 23, 42, 0.85)",color:Pe?"#04121d":"#bae6fd",border:"1px solid rgba(56, 189, 248, 0.55)"},onClick:()=>$e(h),children:Pe?t==="es"?"👁️ PROBANDO":"👁️ TRYING":t==="es"?"👁️ PROBAR":"👁️ TRY"}),N.jsx("button",{className:`item-action-btn ${be?"equipped":ce?"equip":"buy-coins"}`,onClick:()=>pn(h),children:be?Te.equipped:ce?Te.equip:`🪙 ${(h.price??h.cost??0).toLocaleString()}`})]})]},h.id)}),N.jsxs("h3",{className:"sub-section-title",style:{color:"#fbbf24",borderColor:"rgba(251, 191, 36, 0.45)",marginTop:14},children:["👑"," ",t==="es"?"ASPECTOS ÉLITE (EXCLUSIVOS PRO)":"ELITE SKINS (PRO EXCLUSIVE)"]}),Tn(As).filter(h=>h.isPro).map(h=>{const O=ia(h.id),ce=te.includes(O)||te.includes(h.legacyId)||h.isVipOnly&&Z,be=ia($)===O&&!le,Pe=le===O,Gt=Oi(O);return N.jsxs("div",{className:`item-card vip-city-card ${be||Pe?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`,boxShadow:`0 0 12px ${h.trimColor}55`},children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[N.jsx("span",{className:"item-title",children:Yt(h.name,t)}),N.jsx("span",{style:{fontSize:"0.58rem",fontWeight:900,padding:"2px 6px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.04em"},children:h.proTag?Yt(h.proTag,t):"👑 EXCLUSIVO PRO"})]}),N.jsxs("div",{className:"skin-palette-preview-badge",children:[Tn(Gt.paletteSwatches).map((Ln,_n)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:Ln}},_n)),N.jsxs("span",{className:"palette-label-text",children:[Yt(Gt.paletteLabel,t,Gt.multLabel)," • ",Gt.multLabel]})]}),N.jsx("div",{className:"benefit-pill-tag pro",children:Yt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!be&&N.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:Pe?"linear-gradient(135deg, #fbbf24, #f59e0b)":"rgba(15, 23, 42, 0.88)",color:Pe?"#1e1b4b":"#fde68a",border:"1px solid rgba(251, 191, 36, 0.6)"},onClick:()=>$e(h),children:Pe?t==="es"?"👁️ PROBANDO":"👁️ TRYING":t==="es"?"👁️ PROBAR":"👁️ TRY"}),N.jsx("button",{className:`item-action-btn ${be?"equipped":ce?"equip":"buy-gems"}`,onClick:()=>pn(h),children:be?Te.equipped:ce?Te.equip:`👑 ${h.priceUSD||h.usdPrice||`${h.gemCost} 💎`}`})]})]},h.id)}),N.jsx("h3",{className:"sub-section-title",children:Te.polesTitle}),Tn(Fc).map(h=>{const O=re.includes(h.id)||h.isVipOnly&&Z,ce=Re===h.id;return N.jsxs("div",{className:`item-card ${ce?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:Yt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:Yt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${ce?"equipped":O?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>St(h),children:ce?Te.equipped:O?Te.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),se==="league"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("div",{className:"league-banner-top",children:[N.jsxs("div",{children:[N.jsxs("div",{className:"season-chip",children:[Te.seasonTitle," ",N.jsxs("span",{style:{color:"#4ade80",marginLeft:6},children:["● ",ye==="syncing"?"SYNC...":"ONLINE LIVE"]})]}),N.jsx("h2",{className:"panel-heading",children:Te.leagueTitle})]}),N.jsxs("div",{className:"rank-badge-large",children:["#",li]})]}),N.jsxs("div",{className:"player-name-bar",children:[N.jsxs("div",{className:"profile-active-summary",children:[N.jsx("span",{className:"profile-flag-big",children:nn}),N.jsxs("div",{className:"profile-text-col",children:[N.jsx("span",{className:"profile-label-mini",children:t==="es"?"COMPETIDOR OFICIAL":"OFFICIAL COMPETITOR"}),N.jsx("span",{className:"profile-name-strong",children:_||"Equilibrista"})]})]}),N.jsxs("button",{type:"button",className:"edit-profile-pill-btn",onClick:oi,children:["✏️ ",t==="es"?"Editar Perfil":"Edit Profile"]})]}),N.jsxs("div",{className:"items-scroll-list",children:[N.jsx("div",{className:"leaderboard-box",children:Tn(Un).map((h,O)=>N.jsxs("div",{className:`leader-row ${h.isPlayer?"is-player":""}`,children:[N.jsx("span",{className:"leader-pos",children:O===0?"🥇":O===1?"🥈":O===2?"🥉":`#${O+1}`}),N.jsx("span",{className:"leader-flag",children:String(h.flag||"🏳️")}),N.jsxs("span",{className:"leader-name",children:[String(h.name||"Equilibrista"),h.isPlayer?t==="es"?" (TÚ)":" (YOU)":""]}),N.jsxs("span",{className:"leader-lp",children:[Number(h.lp??h.score??0).toLocaleString()," LP"]})]},h.id||O))}),N.jsxs("h3",{className:"sub-section-title",children:["🎁 ",Te.seasonPrizes]}),Tn(Px).map(h=>{const O=X.includes(h.id),ce=!O&&E>=h.requiredLp;return N.jsxs("div",{className:"item-card",children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[h.rankLabel," • ",Yt(h.title,t)]}),N.jsxs("div",{className:"item-desc",children:[h.requiredLp.toLocaleString()," LP → +",h.gemsReward," ","💎 & +",h.coinsReward.toLocaleString()," 🪙"]})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":ce?"buy-coins":"locked"}`,disabled:!ce,onClick:()=>Pt(h),children:O?Te.claimed:ce?Te.claim:`${h.requiredLp} LP`})]},h.id)})]})]}),se==="store"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["💎 ",Te.storeTitle]}),N.jsx("p",{className:"panel-sub",children:Te.storeSubtitle}),N.jsxs("div",{className:"items-scroll-list",children:[Tn(Lx).map(h=>{var O,ce;return N.jsxs("div",{className:"vip-bundle-card",children:[N.jsxs("div",{className:"vip-bundle-header",children:[N.jsx("span",{className:"vip-icon",children:h.icon}),N.jsxs("div",{children:[N.jsx("div",{className:"vip-title",children:Yt(h.name,t)}),N.jsxs("div",{className:"vip-rewards-inline",children:["+",h.gems," 💎 • +",h.coins.toLocaleString()," 🪙"]})]}),N.jsx("button",{className:"vip-buy-btn",onClick:()=>cn(h),children:h.isVipPassBundle&&Z?"👑 VIP ACTIVO (+BONO)":h.tag})]}),N.jsx("ul",{className:"vip-perk-list",children:Tn(((O=h.perks)==null?void 0:O[t])||((ce=h.perks)==null?void 0:ce.es)).map((be,Pe)=>N.jsxs("li",{children:["✓ ",String(be)]},Pe))})]},h.id)}),N.jsx("h3",{className:"sub-section-title",children:Te.multipliersTitle}),Tn(kc).map(h=>{const O=Oe.includes(h.id)||h.isVipOnly&&Z;return N.jsxs("div",{className:`item-card ${O?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:Yt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:Yt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:Yt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>tn(h),children:O?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]})]}),N.jsxs("nav",{className:"bottom-tab-nav",children:[N.jsxs("button",{className:`nav-tab-btn ${se==="home"?"active":""}`,onClick:()=>de("home"),children:[N.jsx("span",{className:"nav-ic",children:"🏙️"}),N.jsx("span",{children:((ci=Te.tabs)==null?void 0:ci.home)||(t==="es"?"Inicio":"Home")})]}),N.jsxs("button",{className:`nav-tab-btn ${se==="armory"?"active":""}`,onClick:()=>de("armory"),children:[N.jsx("span",{className:"nav-ic",children:"⚖️"}),N.jsx("span",{children:((It=Te.tabs)==null?void 0:It.armory)||(t==="es"?"Armería":"Armory")})]}),N.jsxs("button",{className:`nav-tab-btn ${se==="skins"?"active":""}`,onClick:()=>de("skins"),children:[N.jsx("span",{className:"nav-ic",children:"🎭"}),N.jsx("span",{children:((ui=Te.tabs)==null?void 0:ui.skins)||(t==="es"?"Aspectos":"Skins")})]}),N.jsxs("button",{className:`nav-tab-btn ${se==="league"?"active":""}`,onClick:()=>de("league"),children:[N.jsx("span",{className:"nav-ic",children:"🏆"}),N.jsx("span",{children:((Jn=Te.tabs)==null?void 0:Jn.league)||(t==="es"?"Liga":"League")})]}),N.jsxs("button",{className:`nav-tab-btn ${se==="store"?"active":""}`,onClick:()=>de("store"),children:[N.jsx("span",{className:"nav-ic",children:"💎"}),N.jsx("span",{children:((di=Te.tabs)==null?void 0:di.store)||(t==="es"?"Tienda":"Shop")})]})]})]}),Ae==="paused"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card",children:[N.jsxs("h2",{className:"modal-title",children:["⏸ ",Te.pause]}),N.jsxs("p",{className:"modal-subtitle",children:[Ot.city.flag," ",Ot.city.name[t]," — ",Te.level," ",o]}),N.jsxs("button",{className:"pause-action-btn primary",onClick:Xe,children:["▶ ",Te.resume]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>{A.current.running=!1,Lt.updateWind(0),xe("menu")},children:["🏠 ",Te.backToMenu]})]})}),Ae==="victory"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card victory",children:[N.jsx("div",{className:"modal-Cover-icon-wrap",children:N.jsx("img",{src:"./icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),N.jsx("h2",{className:"modal-title",children:Te.victoryTitle}),N.jsxs("p",{className:"modal-subtitle",children:[Ot.city.flag," ",Ot.city.name[t]," • ",Te.level," ",o]}),N.jsxs("div",{className:"rewards-summary-box",children:[N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:Te.score}),N.jsx("strong",{children:ze.scoreEarned.toLocaleString()})]}),N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:Te.coinsEarned}),N.jsxs("strong",{children:["+",ze.coinsEarned.toLocaleString()," 🪙"]})]}),ze.gemsEarned>0&&N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Gemas Ganadas":"Gems Earned"}),N.jsxs("strong",{children:["+",ze.gemsEarned," 💎"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:Te.leaguePointsEarned}),N.jsxs("strong",{children:["+",ze.lpEarned," 🏆"]})]})]}),!ze.doubled&&N.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>Ve("double"),children:Te.doubleRewardsAd}),N.jsxs("button",{className:"pause-action-btn primary",onClick:st,children:[Te.nextLevel," (",Te.level," ",o+1,") ➔"]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>xe("menu"),children:["🏠 ",Te.backToMenu]})]})}),Ae==="gameover"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card gameover",children:[N.jsx("div",{className:"modal-Cover-icon-wrap",children:N.jsx("img",{src:"./icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),N.jsx("h2",{className:"modal-title",children:Te.fallTitle}),N.jsx("p",{className:"modal-subtitle",children:Te.fallSub}),N.jsxs("div",{className:"rewards-summary-box",children:[N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:Te.score}),N.jsx("strong",{children:ze.scoreEarned.toLocaleString()})]}),N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:Te.coinsEarned}),N.jsxs("strong",{children:["+",ze.coinsEarned.toLocaleString()," 🪙"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:Te.leaguePointsEarned}),N.jsxs("strong",{children:["+",ze.lpEarned," 🏆"]})]})]}),!ze.revivedOnce&&N.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>Ve("revive"),children:Te.reviveAd}),N.jsxs("button",{className:"pause-action-btn primary",onClick:oe,children:["🔄 ",Te.retry]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>xe("menu"),children:["🏠 ",Te.backToMenu]})]})}),Ie&&N.jsx("div",{className:"modal-backdrop ad-layer",children:N.jsxs("div",{className:"modal-card",style:{border:"1.5px solid rgba(251, 191, 36, 0.75)",boxShadow:"0 0 36px rgba(245, 158, 11, 0.35)",maxWidth:365},children:[N.jsx("div",{style:{fontSize:"2.35rem",marginBottom:4,filter:"drop-shadow(0 0 12px rgba(251, 191, 36, 0.7))"},children:Ie.icon}),N.jsx("span",{style:{display:"inline-block",fontSize:"0.64rem",fontWeight:900,padding:"3px 10px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.06em",marginBottom:8},children:t==="es"?"👑 PASARELA VIP • ASPECTO ÉLITE PRO":"👑 VIP CHECKOUT • ELITE PRO SKIN"}),N.jsx("h2",{className:"modal-title",style:{fontSize:"1.15rem",marginBottom:4},children:Ie.name[t]}),N.jsx("p",{className:"modal-subtitle",style:{fontSize:"0.78rem",marginBottom:10},children:Ie.desc[t]}),N.jsxs("div",{className:"rewards-summary-box",style:{marginBottom:12},children:[N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:t==="es"?"Multiplicador Activo":"Active Multiplier"}),N.jsxs("strong",{children:["x",Ie.mult||Ie.bonusMult," LP & 🪙"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Resistencia al Viento":"Wind Resistance"}),N.jsxs("strong",{children:["-",Math.round((Ie.windResist||Ie.windReduction||0)*100),"%"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Estabilidad sobre el Cable":"Cable Stability"}),N.jsxs("strong",{children:["+",Math.round((1-(Ie.gravityMod??1))*100),"%"]})]}),N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:t==="es"?"Ventana Imán Malabares":"Juggle Magnet Window"}),N.jsxs("strong",{children:["+",Math.round(((Ie.catchBonus||1)-1)*100),"%"]})]}),(Ie.freeShields||0)>0&&N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:t==="es"?"Escudo Anti-Caída Gratis":"Free Anti-Fall Shield"}),N.jsxs("strong",{children:["+",Ie.freeShields," / ",t==="es"?"Nivel":"Level"," 🛡️"]})]})]}),N.jsx("button",{className:"pause-action-btn ad-gold",style:{marginBottom:8,fontWeight:900},onClick:()=>Nt(Ie,!1),children:t==="es"?`✅ CONFIRMAR Y EQUIPAR (${Ie.priceUSD||Ie.usdPrice})`:`✅ CONFIRM & EQUIP (${Ie.priceUSD||Ie.usdPrice})`}),Ie.gemCost&&y>=Ie.gemCost&&N.jsx("button",{className:"pause-action-btn primary",style:{marginBottom:8},onClick:()=>Nt(Ie,!0),children:t==="es"?`💎 CANJEAR CON ${Ie.gemCost} GEMAS Y EQUIPAR`:`💎 REDEEM WITH ${Ie.gemCost} GEMS & EQUIP`}),N.jsx("button",{className:"pause-action-btn secondary",onClick:()=>je(null),children:t==="es"?"Seguir Probando en 3D":"Keep Trying in 3D"})]})}),Me&&N.jsx("div",{className:"modal-backdrop ad-layer",children:N.jsxs("div",{className:"modal-card",children:[N.jsx("div",{className:"modal-big-icon",children:"🎬"}),N.jsx("h2",{className:"modal-title",children:Te.adWatching}),N.jsx("p",{className:"modal-subtitle",children:et>0?`${Te.adSeconds} ${et}s...`:"✅ ¡Listo!"}),N.jsx("button",{className:"pause-action-btn primary",disabled:et>0,onClick:it,children:et>0?`${et}s`:Te.adCollect})]})})]})})}function Ag(){try{localStorage.setItem("nma_equipped_skin","urbano");const r=localStorage.getItem("nma_owned_skins");let e=["urbano"];if(r)try{const s=JSON.parse(r);Array.isArray(s)&&(e=Array.from(new Set(["urbano",...s.filter(o=>typeof o=="string")])))}catch{e=["urbano"]}localStorage.setItem("nma_owned_skins",JSON.stringify(e));const t=localStorage.getItem(No);if(t)try{const s=JSON.parse(t);if(s&&typeof s=="object"&&!Array.isArray(s)){const o={lang:s.lang==="en"?"en":"es",level:Number.isFinite(Number(s.level))?Math.max(1,Math.floor(Number(s.level))):1,coins:Number.isFinite(Number(s.coins))?Math.max(0,Math.floor(Number(s.coins))):1200,gems:Number.isFinite(Number(s.gems))?Math.max(0,Math.floor(Number(s.gems))):60,bestScore:Number.isFinite(Number(s.bestScore))?Math.max(0,Math.floor(Number(s.bestScore))):0,leaguePoints:Number.isFinite(Number(s.leaguePoints))?Math.max(0,Math.floor(Number(s.leaguePoints))):320,playerName:typeof s.playerName=="string"?s.playerName:"Equilibrista",playerCountry:typeof s.playerCountry=="string"?s.playerCountry:"AR",vipPassActive:!!s.vipPassActive,ownedSkins:e,unlockedSkins:e,equippedSkin:"urbano",unlockedPoles:Array.isArray(s.unlockedPoles)?s.unlockedPoles:["pole_basic"],equippedPole:"pole_basic",ownedMultipliers:Array.isArray(s.ownedMultipliers)?s.ownedMultipliers:[],unlockedVipCities:Array.isArray(s.unlockedVipCities)?s.unlockedVipCities:[],activeVipCityId:null,unlockedProps:Array.isArray(s.unlockedProps)?s.unlockedProps:["balls"],equippedProp:"balls",gearLevels:{pole:0,boots:0,gloves:0},claimedTiers:Array.isArray(s.claimedTiers)?s.claimedTiers:[],soundEnabled:s.soundEnabled??!0};localStorage.setItem(No,JSON.stringify(o))}else localStorage.removeItem(No)}catch{localStorage.removeItem(No)}}catch(r){console.warn("Storage auto-recovery warning:",r)}}class dw extends _x.Component{constructor(t){super(t);c0(this,"handleRestartInterface",()=>{Ag(),this.setState({hasError:!1,error:null}),window.location.href=window.location.pathname+"?reset="+Date.now()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t||new Error("Unknown render error")}}componentDidCatch(t,s){console.error("ErrorBoundary caught error:",t,s),Ag()}render(){var t,s;if(this.state.hasError){const o=((t=this.state.error)==null?void 0:t.toString())||"Unknown Error",l=(s=this.state.error)!=null&&s.stack?this.state.error.stack.split(`
`).slice(0,4).join(`
`):"";return N.jsx("div",{style:{minHeight:"100dvh",width:"100vw",background:"radial-gradient(circle at 50% 30%, #0f172a 0%, #020617 100%)",color:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",fontFamily:"system-ui, -apple-system, sans-serif",textAlign:"center"},children:N.jsxs("div",{style:{maxWidth:"400px",width:"100%",background:"rgba(15, 23, 42, 0.94)",border:"1px solid rgba(56, 189, 248, 0.45)",borderRadius:"20px",padding:"24px 20px",boxShadow:"0 20px 50px rgba(0, 0, 0, 0.7)"},children:[N.jsx("div",{style:{fontSize:"2.4rem",marginBottom:"10px"},children:"⚡"}),N.jsx("h2",{style:{margin:"0 0 8px",fontSize:"1.15rem",fontWeight:900,color:"#38bdf8",letterSpacing:"0.04em"},children:"AUTO-RECUPERACIÓN DE INTERFAZ"}),N.jsx("p",{style:{margin:"0 0 12px",fontSize:"0.84rem",lineHeight:1.45,color:"#cbd5e1"},children:"Se reparó automáticamente una configuración visual antigua en caché. Tu progreso, nivel, monedas y perfil están intactos."}),N.jsxs("pre",{style:{margin:"0 0 16px",padding:"10px",borderRadius:"8px",background:"rgba(2, 6, 23, 0.85)",border:"1px solid rgba(248, 113, 113, 0.35)",color:"#fca5a5",fontSize:"0.68rem",textAlign:"left",overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[o,l?`
${l}`:""]}),N.jsx("button",{type:"button",onClick:this.handleRestartInterface,style:{width:"100%",padding:"13px 16px",borderRadius:"12px",border:"1px solid #38bdf8",background:"linear-gradient(135deg, #0284c7 0%, #00f2fe 100%)",color:"#020617",fontWeight:900,fontSize:"0.92rem",cursor:"pointer",boxShadow:"0 0 20px rgba(0, 242, 254, 0.4)"},children:"🔄 REINICIAR INTERFAZ"})]})})}return this.props.children}}bx.createRoot(document.getElementById("root")).render(N.jsx(Je.StrictMode,{children:N.jsx(dw,{children:N.jsx(uw,{})})}));
