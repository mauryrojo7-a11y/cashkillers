var ux=Object.defineProperty;var dx=(r,e,t)=>e in r?ux(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a0=(r,e,t)=>dx(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function fx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lf={exports:{}},fl={},cf={exports:{}},Gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function hx(){if(o0)return Gt;o0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function _(T,ce,_e){this.props=T,this.context=ce,this.refs=C,this.updater=_e||M}_.prototype.isReactComponent={},_.prototype.setState=function(T,ce){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,ce,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function v(){}v.prototype=_.prototype;function A(T,ce,_e){this.props=T,this.context=ce,this.refs=C,this.updater=_e||M}var F=A.prototype=new v;F.constructor=A,E(F,_.prototype),F.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function b(T,ce,_e){var We,Xe={},Ge=null,se=null;if(ce!=null)for(We in ce.ref!==void 0&&(se=ce.ref),ce.key!==void 0&&(Ge=""+ce.key),ce)U.call(ce,We)&&!k.hasOwnProperty(We)&&(Xe[We]=ce[We]);var de=arguments.length-2;if(de===1)Xe.children=_e;else if(1<de){for(var Re=Array(de),Ye=0;Ye<de;Ye++)Re[Ye]=arguments[Ye+2];Xe.children=Re}if(T&&T.defaultProps)for(We in de=T.defaultProps,de)Xe[We]===void 0&&(Xe[We]=de[We]);return{$$typeof:r,type:T,key:Ge,ref:se,props:Xe,_owner:I.current}}function D(T,ce){return{$$typeof:r,type:T.type,key:ce,ref:T.ref,props:T.props,_owner:T._owner}}function z(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function G(T){var ce={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(_e){return ce[_e]})}var W=/\/+/g;function ne(T,ce){return typeof T=="object"&&T!==null&&T.key!=null?G(""+T.key):ce.toString(36)}function H(T,ce,_e,We,Xe){var Ge=typeof T;(Ge==="undefined"||Ge==="boolean")&&(T=null);var se=!1;if(T===null)se=!0;else switch(Ge){case"string":case"number":se=!0;break;case"object":switch(T.$$typeof){case r:case e:se=!0}}if(se)return se=T,Xe=Xe(se),T=We===""?"."+ne(se,0):We,R(Xe)?(_e="",T!=null&&(_e=T.replace(W,"$&/")+"/"),H(Xe,ce,_e,"",function(Ye){return Ye})):Xe!=null&&(z(Xe)&&(Xe=D(Xe,_e+(!Xe.key||se&&se.key===Xe.key?"":(""+Xe.key).replace(W,"$&/")+"/")+T)),ce.push(Xe)),1;if(se=0,We=We===""?".":We+":",R(T))for(var de=0;de<T.length;de++){Ge=T[de];var Re=We+ne(Ge,de);se+=H(Ge,ce,_e,Re,Xe)}else if(Re=x(T),typeof Re=="function")for(T=Re.call(T),de=0;!(Ge=T.next()).done;)Ge=Ge.value,Re=We+ne(Ge,de++),se+=H(Ge,ce,_e,Re,Xe);else if(Ge==="object")throw ce=String(T),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return se}function re(T,ce,_e){if(T==null)return T;var We=[],Xe=0;return H(T,We,"","",function(Ge){return ce.call(_e,Ge,Xe++)}),We}function fe(T){if(T._status===-1){var ce=T._result;ce=ce(),ce.then(function(_e){(T._status===0||T._status===-1)&&(T._status=1,T._result=_e)},function(_e){(T._status===0||T._status===-1)&&(T._status=2,T._result=_e)}),T._status===-1&&(T._status=0,T._result=ce)}if(T._status===1)return T._result.default;throw T._result}var ee={current:null},te={transition:null},Y={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:te,ReactCurrentOwner:I};function K(){throw Error("act(...) is not supported in production builds of React.")}return Gt.Children={map:re,forEach:function(T,ce,_e){re(T,function(){ce.apply(this,arguments)},_e)},count:function(T){var ce=0;return re(T,function(){ce++}),ce},toArray:function(T){return re(T,function(ce){return ce})||[]},only:function(T){if(!z(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Gt.Component=_,Gt.Fragment=t,Gt.Profiler=o,Gt.PureComponent=A,Gt.StrictMode=s,Gt.Suspense=m,Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Gt.act=K,Gt.cloneElement=function(T,ce,_e){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var We=E({},T.props),Xe=T.key,Ge=T.ref,se=T._owner;if(ce!=null){if(ce.ref!==void 0&&(Ge=ce.ref,se=I.current),ce.key!==void 0&&(Xe=""+ce.key),T.type&&T.type.defaultProps)var de=T.type.defaultProps;for(Re in ce)U.call(ce,Re)&&!k.hasOwnProperty(Re)&&(We[Re]=ce[Re]===void 0&&de!==void 0?de[Re]:ce[Re])}var Re=arguments.length-2;if(Re===1)We.children=_e;else if(1<Re){de=Array(Re);for(var Ye=0;Ye<Re;Ye++)de[Ye]=arguments[Ye+2];We.children=de}return{$$typeof:r,type:T.type,key:Xe,ref:Ge,props:We,_owner:se}},Gt.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},Gt.createElement=b,Gt.createFactory=function(T){var ce=b.bind(null,T);return ce.type=T,ce},Gt.createRef=function(){return{current:null}},Gt.forwardRef=function(T){return{$$typeof:f,render:T}},Gt.isValidElement=z,Gt.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:fe}},Gt.memo=function(T,ce){return{$$typeof:p,type:T,compare:ce===void 0?null:ce}},Gt.startTransition=function(T){var ce=te.transition;te.transition={};try{T()}finally{te.transition=ce}},Gt.unstable_act=K,Gt.useCallback=function(T,ce){return ee.current.useCallback(T,ce)},Gt.useContext=function(T){return ee.current.useContext(T)},Gt.useDebugValue=function(){},Gt.useDeferredValue=function(T){return ee.current.useDeferredValue(T)},Gt.useEffect=function(T,ce){return ee.current.useEffect(T,ce)},Gt.useId=function(){return ee.current.useId()},Gt.useImperativeHandle=function(T,ce,_e){return ee.current.useImperativeHandle(T,ce,_e)},Gt.useInsertionEffect=function(T,ce){return ee.current.useInsertionEffect(T,ce)},Gt.useLayoutEffect=function(T,ce){return ee.current.useLayoutEffect(T,ce)},Gt.useMemo=function(T,ce){return ee.current.useMemo(T,ce)},Gt.useReducer=function(T,ce,_e){return ee.current.useReducer(T,ce,_e)},Gt.useRef=function(T){return ee.current.useRef(T)},Gt.useState=function(T){return ee.current.useState(T)},Gt.useSyncExternalStore=function(T,ce,_e){return ee.current.useSyncExternalStore(T,ce,_e)},Gt.useTransition=function(){return ee.current.useTransition()},Gt.version="18.3.1",Gt}var l0;function Bh(){return l0||(l0=1,cf.exports=hx()),cf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function px(){if(c0)return fl;c0=1;var r=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var y,S={},x=null,M=null;p!==void 0&&(x=""+p),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(M=m.ref);for(y in m)s.call(m,y)&&!l.hasOwnProperty(y)&&(S[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)S[y]===void 0&&(S[y]=m[y]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return fl.Fragment=t,fl.jsx=u,fl.jsxs=u,fl}var u0;function mx(){return u0||(u0=1,lf.exports=px()),lf.exports}var N=mx(),nt=Bh();const gx=fx(nt);var Uc={},uf={exports:{}},Gi={},df={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function vx(){return d0||(d0=1,(function(r){function e(te,Y){var K=te.length;te.push(Y);e:for(;0<K;){var T=K-1>>>1,ce=te[T];if(0<o(ce,Y))te[T]=Y,te[K]=ce,K=T;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var Y=te[0],K=te.pop();if(K!==Y){te[0]=K;e:for(var T=0,ce=te.length,_e=ce>>>1;T<_e;){var We=2*(T+1)-1,Xe=te[We],Ge=We+1,se=te[Ge];if(0>o(Xe,K))Ge<ce&&0>o(se,Xe)?(te[T]=se,te[Ge]=K,T=Ge):(te[T]=Xe,te[We]=K,T=We);else if(Ge<ce&&0>o(se,K))te[T]=se,te[Ge]=K,T=Ge;else break e}}return Y}function o(te,Y){var K=te.sortIndex-Y.sortIndex;return K!==0?K:te.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var m=[],p=[],y=1,S=null,x=3,M=!1,E=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(te){for(var Y=t(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=te)s(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=t(p)}}function R(te){if(C=!1,F(te),!E)if(t(m)!==null)E=!0,fe(U);else{var Y=t(p);Y!==null&&ee(R,Y.startTime-te)}}function U(te,Y){E=!1,C&&(C=!1,v(b),b=-1),M=!0;var K=x;try{for(F(Y),S=t(m);S!==null&&(!(S.expirationTime>Y)||te&&!G());){var T=S.callback;if(typeof T=="function"){S.callback=null,x=S.priorityLevel;var ce=T(S.expirationTime<=Y);Y=r.unstable_now(),typeof ce=="function"?S.callback=ce:S===t(m)&&s(m),F(Y)}else s(m);S=t(m)}if(S!==null)var _e=!0;else{var We=t(p);We!==null&&ee(R,We.startTime-Y),_e=!1}return _e}finally{S=null,x=K,M=!1}}var I=!1,k=null,b=-1,D=5,z=-1;function G(){return!(r.unstable_now()-z<D)}function W(){if(k!==null){var te=r.unstable_now();z=te;var Y=!0;try{Y=k(!0,te)}finally{Y?ne():(I=!1,k=null)}}else I=!1}var ne;if(typeof A=="function")ne=function(){A(W)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,re=H.port2;H.port1.onmessage=W,ne=function(){re.postMessage(null)}}else ne=function(){_(W,0)};function fe(te){k=te,I||(I=!0,ne())}function ee(te,Y){b=_(function(){te(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,fe(U))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(te){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var K=x;x=Y;try{return te()}finally{x=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,Y){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var K=x;x=te;try{return Y()}finally{x=K}},r.unstable_scheduleCallback=function(te,Y,K){var T=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?T+K:T):K=T,te){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=K+ce,te={id:y++,callback:Y,priorityLevel:te,startTime:K,expirationTime:ce,sortIndex:-1},K>T?(te.sortIndex=K,e(p,te),t(m)===null&&te===t(p)&&(C?(v(b),b=-1):C=!0,ee(R,K-T))):(te.sortIndex=ce,e(m,te),E||M||(E=!0,fe(U))),te},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(te){var Y=x;return function(){var K=x;x=Y;try{return te.apply(this,arguments)}finally{x=K}}}})(ff)),ff}var f0;function xx(){return f0||(f0=1,df.exports=vx()),df.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function _x(){if(h0)return Gi;h0=1;var r=Bh(),e=xx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function x(n){return m.call(S,n)?!0:m.call(y,n)?!1:p.test(n)?S[n]=!0:(y[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,d,g,P){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=P}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,A);_[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,A);_[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,A);_[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),te=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,T;function ce(n){if(T===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+n}var _e=!1;function We(n,i){if(!n||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(xe){var c=xe}Reflect.construct(n,[],i)}else{try{i.call()}catch(xe){c=xe}n.call(i.prototype)}else{try{throw Error()}catch(xe){c=xe}n()}}catch(xe){if(xe&&c&&typeof xe.stack=="string"){for(var d=xe.stack.split(`
`),g=c.stack.split(`
`),P=d.length-1,V=g.length-1;1<=P&&0<=V&&d[P]!==g[V];)V--;for(;1<=P&&0<=V;P--,V--)if(d[P]!==g[V]){if(P!==1||V!==1)do if(P--,V--,0>V||d[P]!==g[V]){var j=`
`+d[P].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=P&&0<=V);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ce(n):""}function Xe(n){switch(n.tag){case 5:return ce(n.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function Ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case I:return"Portal";case D:return"Profiler";case b:return"StrictMode";case ne:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:Ge(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return Ge(n(i))}catch{}}return null}function se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ge(i);case 8:return i===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Re(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(P){c=""+P,g.call(this,P)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(P){c=""+P},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ue(n){n._valueTracker||(n._valueTracker=Ye(n))}function ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var a=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function _t(n,i){bt(n,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ot(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function At(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ot(n,i,a){(i!=="number"||zt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Qt=Array.isArray;function Ft(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function kt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Qt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:de(a)}}function tn(n,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Lt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function B(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?B(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,ae=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Pe[i]=Pe[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Pe.hasOwnProperty(n)&&Pe[n]?(""+i).trim():i+"px"}function be(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ze=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Oe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,dt=null,q=null;function Te(n){if(n=Zo(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Kl(i),rt(n.stateNode,n.type,i))}}function Me(n){dt?q?q.push(n):q=[n]:dt=n}function Se(){if(dt){var n=dt,i=q;if(q=dt=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Ee(n,i){return n(i)}function Z(){}var Fe=!1;function ke(n,i,a){if(Fe)return n(i,a);Fe=!0;try{return Ee(n,i,a)}finally{Fe=!1,(dt!==null||q!==null)&&(Z(),Se())}}function mt(n,i){var a=n.stateNode;if(a===null)return null;var c=Kl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ot=!1;if(f)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ot=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ot=!1}function en(n,i,a,c,d,g,P,V,j){var xe=Array.prototype.slice.call(arguments,3);try{i.apply(a,xe)}catch(Le){this.onError(Le)}}var mn=!1,wi=null,Ui=!1,Ln=null,pi={onError:function(n){mn=!0,wi=n}};function Mn(n,i,a,c,d,g,P,V,j){mn=!1,wi=null,en.apply(pi,arguments)}function ji(n,i,a,c,d,g,P,V,j){if(Mn.apply(this,arguments),mn){if(mn){var xe=wi;mn=!1,wi=null}else throw Error(t(198));Ui||(Ui=!0,Ln=xe)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function gt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oi(n){if(An(n)!==n)throw Error(t(188))}function is(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return oi(d),n;if(g===c)return oi(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var P=!1,V=d.child;V;){if(V===a){P=!0,a=d,c=g;break}if(V===c){P=!0,c=d,a=g;break}V=V.sibling}if(!P){for(V=g.child;V;){if(V===a){P=!0,a=g,c=d;break}if(V===c){P=!0,c=g,a=d;break}V=V.sibling}if(!P)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function $i(n){return n=is(n),n!==null?_r(n):null}function _r(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_r(n);if(i!==null)return i;n=n.sibling}return null}var Zn=e.unstable_scheduleCallback,Wn=e.unstable_cancelCallback,rs=e.unstable_shouldYield,Wt=e.unstable_requestPaint,Bt=e.unstable_now,Yi=e.unstable_getCurrentPriorityLevel,yr=e.unstable_ImmediatePriority,Ki=e.unstable_UserBlockingPriority,L=e.unstable_NormalPriority,X=e.unstable_LowPriority,me=e.unstable_IdlePriority,oe=null,le=null;function je(n){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:it,He=Math.log,Qe=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(He(n)/Qe|0)|0}var ht=64,Et=4194304;function $e(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,P=a&268435455;if(P!==0){var V=P&~d;V!==0?c=$e(V):(g&=P,g!==0&&(c=$e(g)))}else P=a&~d,P!==0?c=$e(P):g!==0&&(c=$e(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),d=1<<a,c|=n[a],i&=~d;return c}function gn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var P=31-Ve(g),V=1<<P,j=d[P];j===-1?((V&a)===0||(V&c)!==0)&&(d[P]=gn(V,i)):j<=i&&(n.expiredLanes|=V),g&=~V}}function Xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function En(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function Ke(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function un(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function Nt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ve(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Un(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var yt=0;function li(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ci,Vt,nn,h,O,he=!1,we=[],De=null,Ct=null,cn=null,pn=new Map,bi=new Map,Xn=[],ss="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sr(n,i){switch(n){case"focusin":case"focusout":De=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":pn.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(i.pointerId)}}function dn(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Zo(i),i!==null&&Vt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function On(n,i,a,c,d){switch(i){case"focusin":return De=dn(De,n,i,a,c,d),!0;case"dragenter":return Ct=dn(Ct,n,i,a,c,d),!0;case"mouseover":return cn=dn(cn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return pn.set(g,dn(pn.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,bi.set(g,dn(bi.get(g)||null,n,i,a,c,d)),!0}return!1}function ui(n){var i=ha(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=gt(a),i!==null){n.blockedOn=i,O(n.priority,function(){nn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ps(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ce=c,a.target.dispatchEvent(c),Ce=null}else return i=Zo(a),i!==null&&Vt(i),n.blockedOn=a,!1;i.shift()}return!0}function Ti(n,i,a){Mr(n)&&a.delete(i)}function Er(){he=!1,De!==null&&Mr(De)&&(De=null),Ct!==null&&Mr(Ct)&&(Ct=null),cn!==null&&Mr(cn)&&(cn=null),pn.forEach(Ti),bi.forEach(Ti)}function as(n,i){n.blockedOn===i&&(n.blockedOn=null,he||(he=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Er)))}function kr(n){function i(d){return as(d,n)}if(0<we.length){as(we[0],n);for(var a=1;a<we.length;a++){var c=we[a];c.blockedOn===n&&(c.blockedOn=null)}}for(De!==null&&as(De,n),Ct!==null&&as(Ct,n),cn!==null&&as(cn,n),pn.forEach(i),bi.forEach(i),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)ui(a),a.blockedOn===null&&Xn.shift()}var rr=R.ReactCurrentBatchConfig,Rs=!0;function Cs(n,i,a,c){var d=yt,g=rr.transition;rr.transition=null;try{yt=1,aa(n,i,a,c)}finally{yt=d,rr.transition=g}}function Br(n,i,a,c){var d=yt,g=rr.transition;rr.transition=null;try{yt=4,aa(n,i,a,c)}finally{yt=d,rr.transition=g}}function aa(n,i,a,c){if(Rs){var d=Ps(n,i,a,c);if(d===null)Zu(n,i,c,sr,a),Sr(n,c);else if(On(d,n,i,a,c))c.stopPropagation();else if(Sr(n,c),i&4&&-1<ss.indexOf(n)){for(;d!==null;){var g=Zo(d);if(g!==null&&ci(g),g=Ps(n,i,a,c),g===null&&Zu(n,i,c,sr,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Zu(n,i,c,null,a)}}var sr=null;function Ps(n,i,a,c){if(sr=null,n=et(c),n=ha(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=gt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return sr=n,null}function oa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yi()){case yr:return 1;case Ki:return 4;case L:case X:return 16;case me:return 536870912;default:return 16}default:return 16}}var Ai=null,Ls=null,zr=null;function os(){if(zr)return zr;var n,i=Ls,a=i.length,c,d="value"in Ai?Ai.value:Ai.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var P=a-n;for(c=1;c<=P&&i[a-c]===d[g-c];c++);return zr=d.slice(n,1<c?1-c:void 0)}function Vr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ls(){return!0}function la(){return!1}function Jn(n){function i(a,c,d,g,P){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=P,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ls:la,this.isPropagationStopped=la,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),i}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=Jn(wr),Tt=K({},wr,{view:0,detail:0}),Rn=Jn(Tt),Oi,Ns,Qn,Gr=K({},Tt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qn&&(Qn&&n.type==="mousemove"?(Oi=n.screenX-Qn.screenX,Ns=n.screenY-Qn.screenY):Ns=Oi=0,Qn=n),Oi)},movementY:function(n){return"movementY"in n?n.movementY:Ns}}),Oo=Jn(Gr),Ul=K({},Gr,{dataTransfer:0}),ca=Jn(Ul),Ol=K({},Tt,{relatedTarget:0}),za=Jn(Ol),Fl=K({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Va=Jn(Fl),Ga=K({},wr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uu=Jn(Ga),Fo=K({},wr,{data:0}),kl=Jn(Fo),ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bo(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Fu[n])?!!i[n]:!1}function Ha(){return Bo}var Bl=K({},Tt,{key:function(n){if(n.key){var i=ko[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Vr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ou[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(n){return n.type==="keypress"?Vr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zl=Jn(Bl),Vl=K({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zo=Jn(Vl),ku=K({},Tt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),Bu=Jn(ku),zu=K({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vu=Jn(zu),Gu=K({},Gr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gl=Jn(Gu),Vo=[9,13,27,32],qe=f&&"CompositionEvent"in window,Rt=null;f&&"documentMode"in document&&(Rt=document.documentMode);var Yt=f&&"TextEvent"in window&&!Rt,fn=f&&(!qe||Rt&&8<Rt&&11>=Rt),ei=" ",xn=!1;function Bn(n,i){switch(n){case"keyup":return Vo.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ci(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wn=!1;function br(n,i){switch(n){case"compositionend":return Ci(i);case"keypress":return i.which!==32?null:(xn=!0,ei);case"textInput":return n=i.data,n===ei&&xn?null:n;default:return null}}function ar(n,i){if(wn)return n==="compositionend"||!qe&&Bn(n,i)?(n=os(),zr=Ls=Ai=null,wn=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fn&&i.locale!=="ko"?null:i.data;default:return null}}var ua={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ua[n.type]:i==="textarea"}function Wa(n,i,a,c){Me(c),i=jl(i,"onChange"),0<i.length&&(a=new Ri("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var lr=null,mi=null;function Hl(n){Mp(n,0)}function da(n){var i=Ya(n);if(ut(i))return n}function Hu(n,i){if(n==="change")return i}var Go=!1;if(f){var Ho;if(f){var Is="oninput"in document;if(!Is){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),Is=typeof Wo.oninput=="function"}Ho=Is}else Ho=!1;Go=Ho&&(!document.documentMode||9<document.documentMode)}function fa(){lr&&(lr.detachEvent("onpropertychange",lp),mi=lr=null)}function lp(n){if(n.propertyName==="value"&&da(mi)){var i=[];Wa(i,mi,n,et(n)),ke(Hl,i)}}function fv(n,i,a){n==="focusin"?(fa(),lr=i,mi=a,lr.attachEvent("onpropertychange",lp)):n==="focusout"&&fa()}function hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return da(mi)}function pv(n,i){if(n==="click")return da(i)}function mv(n,i){if(n==="input"||n==="change")return da(i)}function gv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Tr=typeof Object.is=="function"?Object.is:gv;function Xo(n,i){if(Tr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!Tr(n[d],i[d]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function up(n,i){var a=cp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function dp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fp(){for(var n=window,i=zt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zt(n.document)}return i}function Wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function vv(n){var i=fp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dp(a.ownerDocument.documentElement,a)){if(c!==null&&Wu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=up(a,g);var P=up(a,c);d&&P&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(P.node,P.offset)):(i.setEnd(P.node,P.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var xv=f&&"documentMode"in document&&11>=document.documentMode,Xa=null,Xu=null,qo=null,qu=!1;function hp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||Xa==null||Xa!==zt(c)||(c=Xa,"selectionStart"in c&&Wu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&Xo(qo,c)||(qo=c,c=jl(Xu,"onSelect"),0<c.length&&(i=new Ri("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Xa)))}function Wl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qa={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},ju={},pp={};f&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function Xl(n){if(ju[n])return ju[n];if(!qa[n])return n;var i=qa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in pp)return ju[n]=i[a];return n}var mp=Xl("animationend"),gp=Xl("animationiteration"),vp=Xl("animationstart"),xp=Xl("transitionend"),_p=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ds(n,i){_p.set(n,i),l(i,[n])}for(var $u=0;$u<yp.length;$u++){var Yu=yp[$u],_v=Yu.toLowerCase(),yv=Yu[0].toUpperCase()+Yu.slice(1);Ds(_v,"on"+yv)}Ds(mp,"onAnimationEnd"),Ds(gp,"onAnimationIteration"),Ds(vp,"onAnimationStart"),Ds("dblclick","onDoubleClick"),Ds("focusin","onFocus"),Ds("focusout","onBlur"),Ds(xp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function Sp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ji(c,i,void 0,n),n.currentTarget=null}function Mp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var P=c.length-1;0<=P;P--){var V=c[P],j=V.instance,xe=V.currentTarget;if(V=V.listener,j!==g&&d.isPropagationStopped())break e;Sp(d,V,xe),g=j}else for(P=0;P<c.length;P++){if(V=c[P],j=V.instance,xe=V.currentTarget,V=V.listener,j!==g&&d.isPropagationStopped())break e;Sp(d,V,xe),g=j}}}if(Ui)throw n=Ln,Ui=!1,Ln=null,n}function bn(n,i){var a=i[id];a===void 0&&(a=i[id]=new Set);var c=n+"__bubble";a.has(c)||(Ep(i,n,2,!1),a.add(c))}function Ku(n,i,a){var c=0;i&&(c|=4),Ep(a,n,c,i)}var ql="_reactListening"+Math.random().toString(36).slice(2);function $o(n){if(!n[ql]){n[ql]=!0,s.forEach(function(a){a!=="selectionchange"&&(Sv.has(a)||Ku(a,!1,n),Ku(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ql]||(i[ql]=!0,Ku("selectionchange",!1,i))}}function Ep(n,i,a,c){switch(oa(i)){case 1:var d=Cs;break;case 4:d=Br;break;default:d=aa}a=d.bind(null,i,a,n),d=void 0,!ot||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Zu(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var P=c.tag;if(P===3||P===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(P===4)for(P=c.return;P!==null;){var j=P.tag;if((j===3||j===4)&&(j=P.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;P=P.return}for(;V!==null;){if(P=ha(V),P===null)return;if(j=P.tag,j===5||j===6){c=g=P;continue e}V=V.parentNode}}c=c.return}ke(function(){var xe=g,Le=et(a),Ie=[];e:{var Ae=_p.get(n);if(Ae!==void 0){var tt=Ri,at=n;switch(n){case"keypress":if(Vr(a)===0)break e;case"keydown":case"keyup":tt=zl;break;case"focusin":at="focus",tt=za;break;case"focusout":at="blur",tt=za;break;case"beforeblur":case"afterblur":tt=za;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=ca;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Bu;break;case mp:case gp:case vp:tt=Va;break;case xp:tt=Vu;break;case"scroll":tt=Rn;break;case"wheel":tt=Gl;break;case"copy":case"cut":case"paste":tt=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=zo}var lt=(i&4)!==0,kn=!lt&&n==="scroll",ue=lt?Ae!==null?Ae+"Capture":null:Ae;lt=[];for(var Q=xe,pe;Q!==null;){pe=Q;var Be=pe.stateNode;if(pe.tag===5&&Be!==null&&(pe=Be,ue!==null&&(Be=mt(Q,ue),Be!=null&&lt.push(Yo(Q,Be,pe)))),kn)break;Q=Q.return}0<lt.length&&(Ae=new tt(Ae,at,null,a,Le),Ie.push({event:Ae,listeners:lt}))}}if((i&7)===0){e:{if(Ae=n==="mouseover"||n==="pointerover",tt=n==="mouseout"||n==="pointerout",Ae&&a!==Ce&&(at=a.relatedTarget||a.fromElement)&&(ha(at)||at[cs]))break e;if((tt||Ae)&&(Ae=Le.window===Le?Le:(Ae=Le.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,tt?(at=a.relatedTarget||a.toElement,tt=xe,at=at?ha(at):null,at!==null&&(kn=An(at),at!==kn||at.tag!==5&&at.tag!==6)&&(at=null)):(tt=null,at=xe),tt!==at)){if(lt=Oo,Be="onMouseLeave",ue="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(lt=zo,Be="onPointerLeave",ue="onPointerEnter",Q="pointer"),kn=tt==null?Ae:Ya(tt),pe=at==null?Ae:Ya(at),Ae=new lt(Be,Q+"leave",tt,a,Le),Ae.target=kn,Ae.relatedTarget=pe,Be=null,ha(Le)===xe&&(lt=new lt(ue,Q+"enter",at,a,Le),lt.target=pe,lt.relatedTarget=kn,Be=lt),kn=Be,tt&&at)t:{for(lt=tt,ue=at,Q=0,pe=lt;pe;pe=ja(pe))Q++;for(pe=0,Be=ue;Be;Be=ja(Be))pe++;for(;0<Q-pe;)lt=ja(lt),Q--;for(;0<pe-Q;)ue=ja(ue),pe--;for(;Q--;){if(lt===ue||ue!==null&&lt===ue.alternate)break t;lt=ja(lt),ue=ja(ue)}lt=null}else lt=null;tt!==null&&wp(Ie,Ae,tt,lt,!1),at!==null&&kn!==null&&wp(Ie,kn,at,lt,!0)}}e:{if(Ae=xe?Ya(xe):window,tt=Ae.nodeName&&Ae.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Ae.type==="file")var ct=Hu;else if(or(Ae))if(Go)ct=mv;else{ct=hv;var vt=fv}else(tt=Ae.nodeName)&&tt.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(ct=pv);if(ct&&(ct=ct(n,xe))){Wa(Ie,ct,a,Le);break e}vt&&vt(n,Ae,xe),n==="focusout"&&(vt=Ae._wrapperState)&&vt.controlled&&Ae.type==="number"&&Ot(Ae,"number",Ae.value)}switch(vt=xe?Ya(xe):window,n){case"focusin":(or(vt)||vt.contentEditable==="true")&&(Xa=vt,Xu=xe,qo=null);break;case"focusout":qo=Xu=Xa=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,hp(Ie,a,Le);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":hp(Ie,a,Le)}var xt;if(qe)e:{switch(n){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else wn?Bn(n,a)&&(wt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(fn&&a.locale!=="ko"&&(wn||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&wn&&(xt=os()):(Ai=Le,Ls="value"in Ai?Ai.value:Ai.textContent,wn=!0)),vt=jl(xe,wt),0<vt.length&&(wt=new kl(wt,n,null,a,Le),Ie.push({event:wt,listeners:vt}),xt?wt.data=xt:(xt=Ci(a),xt!==null&&(wt.data=xt)))),(xt=Yt?br(n,a):ar(n,a))&&(xe=jl(xe,"onBeforeInput"),0<xe.length&&(Le=new kl("onBeforeInput","beforeinput",null,a,Le),Ie.push({event:Le,listeners:xe}),Le.data=xt))}Mp(Ie,i)})}function Yo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function jl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=mt(n,a),g!=null&&c.unshift(Yo(n,g,d)),g=mt(n,i),g!=null&&c.push(Yo(n,g,d))),n=n.return}return c}function ja(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,i,a,c,d){for(var g=i._reactName,P=[];a!==null&&a!==c;){var V=a,j=V.alternate,xe=V.stateNode;if(j!==null&&j===c)break;V.tag===5&&xe!==null&&(V=xe,d?(j=mt(a,g),j!=null&&P.unshift(Yo(a,j,V))):d||(j=mt(a,g),j!=null&&P.push(Yo(a,j,V)))),a=a.return}P.length!==0&&n.push({event:i,listeners:P})}var Mv=/\r\n?/g,Ev=/\u0000|\uFFFD/g;function bp(n){return(typeof n=="string"?n:""+n).replace(Mv,`
`).replace(Ev,"")}function $l(n,i,a){if(i=bp(i),bp(n)!==i&&a)throw Error(t(425))}function Yl(){}var Ju=null,Qu=null;function ed(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,wv=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(n){return Tp.resolve(null).then(n).catch(Tv)}:td;function Tv(n){setTimeout(function(){throw n})}function nd(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kr(i)}function Us(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ap(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var $a=Math.random().toString(36).slice(2),Hr="__reactFiber$"+$a,Ko="__reactProps$"+$a,cs="__reactContainer$"+$a,id="__reactEvents$"+$a,Av="__reactListeners$"+$a,Rv="__reactHandles$"+$a;function ha(n){var i=n[Hr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cs]||a[Hr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ap(n);n!==null;){if(a=n[Hr])return a;n=Ap(n)}return i}n=a,a=n.parentNode}return null}function Zo(n){return n=n[Hr]||n[cs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ya(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Kl(n){return n[Ko]||null}var rd=[],Ka=-1;function Os(n){return{current:n}}function Tn(n){0>Ka||(n.current=rd[Ka],rd[Ka]=null,Ka--)}function _n(n,i){Ka++,rd[Ka]=n.current,n.current=i}var Fs={},gi=Os(Fs),Fi=Os(!1),pa=Fs;function Za(n,i){var a=n.type.contextTypes;if(!a)return Fs;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ki(n){return n=n.childContextTypes,n!=null}function Zl(){Tn(Fi),Tn(gi)}function Rp(n,i,a){if(gi.current!==Fs)throw Error(t(168));_n(gi,i),_n(Fi,a)}function Cp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,se(n)||"Unknown",d));return K({},a,c)}function Jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fs,pa=gi.current,_n(gi,n),_n(Fi,Fi.current),!0}function Pp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Cp(n,i,pa),c.__reactInternalMemoizedMergedChildContext=n,Tn(Fi),Tn(gi),_n(gi,n)):Tn(Fi),_n(Fi,a)}var us=null,Ql=!1,sd=!1;function Lp(n){us===null?us=[n]:us.push(n)}function Cv(n){Ql=!0,Lp(n)}function ks(){if(!sd&&us!==null){sd=!0;var n=0,i=yt;try{var a=us;for(yt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}us=null,Ql=!1}catch(d){throw us!==null&&(us=us.slice(n+1)),Zn(yr,ks),d}finally{yt=i,sd=!1}}return null}var Ja=[],Qa=0,ec=null,tc=0,cr=[],ur=0,ma=null,ds=1,fs="";function ga(n,i){Ja[Qa++]=tc,Ja[Qa++]=ec,ec=n,tc=i}function Np(n,i,a){cr[ur++]=ds,cr[ur++]=fs,cr[ur++]=ma,ma=n;var c=ds;n=fs;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var g=32-Ve(i)+d;if(30<g){var P=d-d%5;g=(c&(1<<P)-1).toString(32),c>>=P,d-=P,ds=1<<32-Ve(i)+d|a<<d|c,fs=g+n}else ds=1<<g|a<<d|c,fs=n}function ad(n){n.return!==null&&(ga(n,1),Np(n,1,0))}function od(n){for(;n===ec;)ec=Ja[--Qa],Ja[Qa]=null,tc=Ja[--Qa],Ja[Qa]=null;for(;n===ma;)ma=cr[--ur],cr[ur]=null,fs=cr[--ur],cr[ur]=null,ds=cr[--ur],cr[ur]=null}var Zi=null,Ji=null,Cn=!1,Ar=null;function Ip(n,i){var a=pr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Dp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Zi=n,Ji=Us(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Zi=n,Ji=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ma!==null?{id:ds,overflow:fs}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=pr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Zi=n,Ji=null,!0):!1;default:return!1}}function ld(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cd(n){if(Cn){var i=Ji;if(i){var a=i;if(!Dp(n,i)){if(ld(n))throw Error(t(418));i=Us(a.nextSibling);var c=Zi;i&&Dp(n,i)?Ip(c,a):(n.flags=n.flags&-4097|2,Cn=!1,Zi=n)}}else{if(ld(n))throw Error(t(418));n.flags=n.flags&-4097|2,Cn=!1,Zi=n}}}function Up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zi=n}function nc(n){if(n!==Zi)return!1;if(!Cn)return Up(n),Cn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ed(n.type,n.memoizedProps)),i&&(i=Ji)){if(ld(n))throw Op(),Error(t(418));for(;i;)Ip(n,i),i=Us(i.nextSibling)}if(Up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Ji=Us(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Ji=null}}else Ji=Zi?Us(n.stateNode.nextSibling):null;return!0}function Op(){for(var n=Ji;n;)n=Us(n.nextSibling)}function eo(){Ji=Zi=null,Cn=!1}function ud(n){Ar===null?Ar=[n]:Ar.push(n)}var Pv=R.ReactCurrentBatchConfig;function Jo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(P){var V=d.refs;P===null?delete V[g]:V[g]=P},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ic(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fp(n){var i=n._init;return i(n._payload)}function kp(n){function i(ue,Q){if(n){var pe=ue.deletions;pe===null?(ue.deletions=[Q],ue.flags|=16):pe.push(Q)}}function a(ue,Q){if(!n)return null;for(;Q!==null;)i(ue,Q),Q=Q.sibling;return null}function c(ue,Q){for(ue=new Map;Q!==null;)Q.key!==null?ue.set(Q.key,Q):ue.set(Q.index,Q),Q=Q.sibling;return ue}function d(ue,Q){return ue=qs(ue,Q),ue.index=0,ue.sibling=null,ue}function g(ue,Q,pe){return ue.index=pe,n?(pe=ue.alternate,pe!==null?(pe=pe.index,pe<Q?(ue.flags|=2,Q):pe):(ue.flags|=2,Q)):(ue.flags|=1048576,Q)}function P(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,Q,pe,Be){return Q===null||Q.tag!==6?(Q=tf(pe,ue.mode,Be),Q.return=ue,Q):(Q=d(Q,pe),Q.return=ue,Q)}function j(ue,Q,pe,Be){var ct=pe.type;return ct===k?Le(ue,Q,pe.props.children,Be,pe.key):Q!==null&&(Q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===fe&&Fp(ct)===Q.type)?(Be=d(Q,pe.props),Be.ref=Jo(ue,Q,pe),Be.return=ue,Be):(Be=Ac(pe.type,pe.key,pe.props,null,ue.mode,Be),Be.ref=Jo(ue,Q,pe),Be.return=ue,Be)}function xe(ue,Q,pe,Be){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==pe.containerInfo||Q.stateNode.implementation!==pe.implementation?(Q=nf(pe,ue.mode,Be),Q.return=ue,Q):(Q=d(Q,pe.children||[]),Q.return=ue,Q)}function Le(ue,Q,pe,Be,ct){return Q===null||Q.tag!==7?(Q=wa(pe,ue.mode,Be,ct),Q.return=ue,Q):(Q=d(Q,pe),Q.return=ue,Q)}function Ie(ue,Q,pe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=tf(""+Q,ue.mode,pe),Q.return=ue,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case U:return pe=Ac(Q.type,Q.key,Q.props,null,ue.mode,pe),pe.ref=Jo(ue,null,Q),pe.return=ue,pe;case I:return Q=nf(Q,ue.mode,pe),Q.return=ue,Q;case fe:var Be=Q._init;return Ie(ue,Be(Q._payload),pe)}if(Qt(Q)||Y(Q))return Q=wa(Q,ue.mode,pe,null),Q.return=ue,Q;ic(ue,Q)}return null}function Ae(ue,Q,pe,Be){var ct=Q!==null?Q.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return ct!==null?null:V(ue,Q,""+pe,Be);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case U:return pe.key===ct?j(ue,Q,pe,Be):null;case I:return pe.key===ct?xe(ue,Q,pe,Be):null;case fe:return ct=pe._init,Ae(ue,Q,ct(pe._payload),Be)}if(Qt(pe)||Y(pe))return ct!==null?null:Le(ue,Q,pe,Be,null);ic(ue,pe)}return null}function tt(ue,Q,pe,Be,ct){if(typeof Be=="string"&&Be!==""||typeof Be=="number")return ue=ue.get(pe)||null,V(Q,ue,""+Be,ct);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case U:return ue=ue.get(Be.key===null?pe:Be.key)||null,j(Q,ue,Be,ct);case I:return ue=ue.get(Be.key===null?pe:Be.key)||null,xe(Q,ue,Be,ct);case fe:var vt=Be._init;return tt(ue,Q,pe,vt(Be._payload),ct)}if(Qt(Be)||Y(Be))return ue=ue.get(pe)||null,Le(Q,ue,Be,ct,null);ic(Q,Be)}return null}function at(ue,Q,pe,Be){for(var ct=null,vt=null,xt=Q,wt=Q=0,ii=null;xt!==null&&wt<pe.length;wt++){xt.index>wt?(ii=xt,xt=null):ii=xt.sibling;var on=Ae(ue,xt,pe[wt],Be);if(on===null){xt===null&&(xt=ii);break}n&&xt&&on.alternate===null&&i(ue,xt),Q=g(on,Q,wt),vt===null?ct=on:vt.sibling=on,vt=on,xt=ii}if(wt===pe.length)return a(ue,xt),Cn&&ga(ue,wt),ct;if(xt===null){for(;wt<pe.length;wt++)xt=Ie(ue,pe[wt],Be),xt!==null&&(Q=g(xt,Q,wt),vt===null?ct=xt:vt.sibling=xt,vt=xt);return Cn&&ga(ue,wt),ct}for(xt=c(ue,xt);wt<pe.length;wt++)ii=tt(xt,ue,wt,pe[wt],Be),ii!==null&&(n&&ii.alternate!==null&&xt.delete(ii.key===null?wt:ii.key),Q=g(ii,Q,wt),vt===null?ct=ii:vt.sibling=ii,vt=ii);return n&&xt.forEach(function(js){return i(ue,js)}),Cn&&ga(ue,wt),ct}function lt(ue,Q,pe,Be){var ct=Y(pe);if(typeof ct!="function")throw Error(t(150));if(pe=ct.call(pe),pe==null)throw Error(t(151));for(var vt=ct=null,xt=Q,wt=Q=0,ii=null,on=pe.next();xt!==null&&!on.done;wt++,on=pe.next()){xt.index>wt?(ii=xt,xt=null):ii=xt.sibling;var js=Ae(ue,xt,on.value,Be);if(js===null){xt===null&&(xt=ii);break}n&&xt&&js.alternate===null&&i(ue,xt),Q=g(js,Q,wt),vt===null?ct=js:vt.sibling=js,vt=js,xt=ii}if(on.done)return a(ue,xt),Cn&&ga(ue,wt),ct;if(xt===null){for(;!on.done;wt++,on=pe.next())on=Ie(ue,on.value,Be),on!==null&&(Q=g(on,Q,wt),vt===null?ct=on:vt.sibling=on,vt=on);return Cn&&ga(ue,wt),ct}for(xt=c(ue,xt);!on.done;wt++,on=pe.next())on=tt(xt,ue,wt,on.value,Be),on!==null&&(n&&on.alternate!==null&&xt.delete(on.key===null?wt:on.key),Q=g(on,Q,wt),vt===null?ct=on:vt.sibling=on,vt=on);return n&&xt.forEach(function(cx){return i(ue,cx)}),Cn&&ga(ue,wt),ct}function kn(ue,Q,pe,Be){if(typeof pe=="object"&&pe!==null&&pe.type===k&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case U:e:{for(var ct=pe.key,vt=Q;vt!==null;){if(vt.key===ct){if(ct=pe.type,ct===k){if(vt.tag===7){a(ue,vt.sibling),Q=d(vt,pe.props.children),Q.return=ue,ue=Q;break e}}else if(vt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===fe&&Fp(ct)===vt.type){a(ue,vt.sibling),Q=d(vt,pe.props),Q.ref=Jo(ue,vt,pe),Q.return=ue,ue=Q;break e}a(ue,vt);break}else i(ue,vt);vt=vt.sibling}pe.type===k?(Q=wa(pe.props.children,ue.mode,Be,pe.key),Q.return=ue,ue=Q):(Be=Ac(pe.type,pe.key,pe.props,null,ue.mode,Be),Be.ref=Jo(ue,Q,pe),Be.return=ue,ue=Be)}return P(ue);case I:e:{for(vt=pe.key;Q!==null;){if(Q.key===vt)if(Q.tag===4&&Q.stateNode.containerInfo===pe.containerInfo&&Q.stateNode.implementation===pe.implementation){a(ue,Q.sibling),Q=d(Q,pe.children||[]),Q.return=ue,ue=Q;break e}else{a(ue,Q);break}else i(ue,Q);Q=Q.sibling}Q=nf(pe,ue.mode,Be),Q.return=ue,ue=Q}return P(ue);case fe:return vt=pe._init,kn(ue,Q,vt(pe._payload),Be)}if(Qt(pe))return at(ue,Q,pe,Be);if(Y(pe))return lt(ue,Q,pe,Be);ic(ue,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,Q!==null&&Q.tag===6?(a(ue,Q.sibling),Q=d(Q,pe),Q.return=ue,ue=Q):(a(ue,Q),Q=tf(pe,ue.mode,Be),Q.return=ue,ue=Q),P(ue)):a(ue,Q)}return kn}var to=kp(!0),Bp=kp(!1),rc=Os(null),sc=null,no=null,dd=null;function fd(){dd=no=sc=null}function hd(n){var i=rc.current;Tn(rc),n._currentValue=i}function pd(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function io(n,i){sc=n,dd=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bi=!0),n.firstContext=null)}function dr(n){var i=n._currentValue;if(dd!==n)if(n={context:n,memoizedValue:i,next:null},no===null){if(sc===null)throw Error(t(308));no=n,sc.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return i}var va=null;function md(n){va===null?va=[n]:va.push(n)}function zp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,md(i)):(a.next=d.next,d.next=a),i.interleaved=a,hs(n,c)}function hs(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Bs=!1;function gd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ps(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function zs(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(rn&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,hs(n,a)}return d=c.interleaved,d===null?(i.next=i,md(c)):(i.next=d.next,d.next=i),c.interleaved=i,hs(n,a)}function ac(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Un(n,a)}}function Gp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var P={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=P:g=g.next=P,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function oc(n,i,a,c){var d=n.updateQueue;Bs=!1;var g=d.firstBaseUpdate,P=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var j=V,xe=j.next;j.next=null,P===null?g=xe:P.next=xe,P=j;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,V=Le.lastBaseUpdate,V!==P&&(V===null?Le.firstBaseUpdate=xe:V.next=xe,Le.lastBaseUpdate=j))}if(g!==null){var Ie=d.baseState;P=0,Le=xe=j=null,V=g;do{var Ae=V.lane,tt=V.eventTime;if((c&Ae)===Ae){Le!==null&&(Le=Le.next={eventTime:tt,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var at=n,lt=V;switch(Ae=i,tt=a,lt.tag){case 1:if(at=lt.payload,typeof at=="function"){Ie=at.call(tt,Ie,Ae);break e}Ie=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=lt.payload,Ae=typeof at=="function"?at.call(tt,Ie,Ae):at,Ae==null)break e;Ie=K({},Ie,Ae);break e;case 2:Bs=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Ae=d.effects,Ae===null?d.effects=[V]:Ae.push(V))}else tt={eventTime:tt,lane:Ae,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Le===null?(xe=Le=tt,j=Ie):Le=Le.next=tt,P|=Ae;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;Ae=V,V=Ae.next,Ae.next=null,d.lastBaseUpdate=Ae,d.shared.pending=null}}while(!0);if(Le===null&&(j=Ie),d.baseState=j,d.firstBaseUpdate=xe,d.lastBaseUpdate=Le,i=d.shared.interleaved,i!==null){d=i;do P|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);ya|=P,n.lanes=P,n.memoizedState=Ie}}function Hp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Qo={},Wr=Os(Qo),el=Os(Qo),tl=Os(Qo);function xa(n){if(n===Qo)throw Error(t(174));return n}function vd(n,i){switch(_n(tl,i),_n(el,n),_n(Wr,Qo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Tn(Wr),_n(Wr,i)}function ro(){Tn(Wr),Tn(el),Tn(tl)}function Wp(n){xa(tl.current);var i=xa(Wr.current),a=w(i,n.type);i!==a&&(_n(el,n),_n(Wr,a))}function xd(n){el.current===n&&(Tn(Wr),Tn(el))}var Nn=Os(0);function lc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _d=[];function yd(){for(var n=0;n<_d.length;n++)_d[n]._workInProgressVersionPrimary=null;_d.length=0}var cc=R.ReactCurrentDispatcher,Sd=R.ReactCurrentBatchConfig,_a=0,In=null,qn=null,ti=null,uc=!1,nl=!1,il=0,Lv=0;function vi(){throw Error(t(321))}function Md(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Tr(n[a],i[a]))return!1;return!0}function Ed(n,i,a,c,d,g){if(_a=g,In=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,cc.current=n===null||n.memoizedState===null?Uv:Ov,n=a(c,d),nl){g=0;do{if(nl=!1,il=0,25<=g)throw Error(t(301));g+=1,ti=qn=null,i.updateQueue=null,cc.current=Fv,n=a(c,d)}while(nl)}if(cc.current=hc,i=qn!==null&&qn.next!==null,_a=0,ti=qn=In=null,uc=!1,i)throw Error(t(300));return n}function wd(){var n=il!==0;return il=0,n}function Xr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ti===null?In.memoizedState=ti=n:ti=ti.next=n,ti}function fr(){if(qn===null){var n=In.alternate;n=n!==null?n.memoizedState:null}else n=qn.next;var i=ti===null?In.memoizedState:ti.next;if(i!==null)ti=i,qn=n;else{if(n===null)throw Error(t(310));qn=n,n={memoizedState:qn.memoizedState,baseState:qn.baseState,baseQueue:qn.baseQueue,queue:qn.queue,next:null},ti===null?In.memoizedState=ti=n:ti=ti.next=n}return ti}function rl(n,i){return typeof i=="function"?i(n):i}function bd(n){var i=fr(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=qn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var P=d.next;d.next=g.next,g.next=P}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=P=null,j=null,xe=g;do{var Le=xe.lane;if((_a&Le)===Le)j!==null&&(j=j.next={lane:0,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),c=xe.hasEagerState?xe.eagerState:n(c,xe.action);else{var Ie={lane:Le,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null};j===null?(V=j=Ie,P=c):j=j.next=Ie,In.lanes|=Le,ya|=Le}xe=xe.next}while(xe!==null&&xe!==g);j===null?P=c:j.next=V,Tr(c,i.memoizedState)||(Bi=!0),i.memoizedState=c,i.baseState=P,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,In.lanes|=g,ya|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Td(n){var i=fr(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var P=d=d.next;do g=n(g,P.action),P=P.next;while(P!==d);Tr(g,i.memoizedState)||(Bi=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Xp(){}function qp(n,i){var a=In,c=fr(),d=i(),g=!Tr(c.memoizedState,d);if(g&&(c.memoizedState=d,Bi=!0),c=c.queue,Ad(Yp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||ti!==null&&ti.memoizedState.tag&1){if(a.flags|=2048,sl(9,$p.bind(null,a,c,d,i),void 0,null),ni===null)throw Error(t(349));(_a&30)!==0||jp(a,i,d)}return d}function jp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=In.updateQueue,i===null?(i={lastEffect:null,stores:null},In.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function $p(n,i,a,c){i.value=a,i.getSnapshot=c,Kp(i)&&Zp(n)}function Yp(n,i,a){return a(function(){Kp(i)&&Zp(n)})}function Kp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Tr(n,a)}catch{return!0}}function Zp(n){var i=hs(n,1);i!==null&&Lr(i,n,1,-1)}function Jp(n){var i=Xr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:n},i.queue=n,n=n.dispatch=Dv.bind(null,In,n),[i.memoizedState,n]}function sl(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=In.updateQueue,i===null?(i={lastEffect:null,stores:null},In.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Qp(){return fr().memoizedState}function dc(n,i,a,c){var d=Xr();In.flags|=n,d.memoizedState=sl(1|i,a,void 0,c===void 0?null:c)}function fc(n,i,a,c){var d=fr();c=c===void 0?null:c;var g=void 0;if(qn!==null){var P=qn.memoizedState;if(g=P.destroy,c!==null&&Md(c,P.deps)){d.memoizedState=sl(i,a,g,c);return}}In.flags|=n,d.memoizedState=sl(1|i,a,g,c)}function em(n,i){return dc(8390656,8,n,i)}function Ad(n,i){return fc(2048,8,n,i)}function tm(n,i){return fc(4,2,n,i)}function nm(n,i){return fc(4,4,n,i)}function im(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function rm(n,i,a){return a=a!=null?a.concat([n]):null,fc(4,4,im.bind(null,i,n),a)}function Rd(){}function sm(n,i){var a=fr();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Md(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function am(n,i){var a=fr();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Md(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function om(n,i,a){return(_a&21)===0?(n.baseState&&(n.baseState=!1,Bi=!0),n.memoizedState=a):(Tr(a,i)||(a=En(),In.lanes|=a,ya|=a,n.baseState=!0),i)}function Nv(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var c=Sd.transition;Sd.transition={};try{n(!1),i()}finally{yt=a,Sd.transition=c}}function lm(){return fr().memoizedState}function Iv(n,i,a){var c=Ws(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},cm(n))um(i,a);else if(a=zp(n,i,a,c),a!==null){var d=Li();Lr(a,n,c,d),dm(a,i,c)}}function Dv(n,i,a){var c=Ws(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(cm(n))um(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var P=i.lastRenderedState,V=g(P,a);if(d.hasEagerState=!0,d.eagerState=V,Tr(V,P)){var j=i.interleaved;j===null?(d.next=d,md(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}a=zp(n,i,d,c),a!==null&&(d=Li(),Lr(a,n,c,d),dm(a,i,c))}}function cm(n){var i=n.alternate;return n===In||i!==null&&i===In}function um(n,i){nl=uc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Un(n,a)}}var hc={readContext:dr,useCallback:vi,useContext:vi,useEffect:vi,useImperativeHandle:vi,useInsertionEffect:vi,useLayoutEffect:vi,useMemo:vi,useReducer:vi,useRef:vi,useState:vi,useDebugValue:vi,useDeferredValue:vi,useTransition:vi,useMutableSource:vi,useSyncExternalStore:vi,useId:vi,unstable_isNewReconciler:!1},Uv={readContext:dr,useCallback:function(n,i){return Xr().memoizedState=[n,i===void 0?null:i],n},useContext:dr,useEffect:em,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,dc(4194308,4,im.bind(null,i,n),a)},useLayoutEffect:function(n,i){return dc(4194308,4,n,i)},useInsertionEffect:function(n,i){return dc(4,2,n,i)},useMemo:function(n,i){var a=Xr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Iv.bind(null,In,n),[c.memoizedState,n]},useRef:function(n){var i=Xr();return n={current:n},i.memoizedState=n},useState:Jp,useDebugValue:Rd,useDeferredValue:function(n){return Xr().memoizedState=n},useTransition:function(){var n=Jp(!1),i=n[0];return n=Nv.bind(null,n[1]),Xr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=In,d=Xr();if(Cn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ni===null)throw Error(t(349));(_a&30)!==0||jp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,em(Yp.bind(null,c,g,n),[n]),c.flags|=2048,sl(9,$p.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Xr(),i=ni.identifierPrefix;if(Cn){var a=fs,c=ds;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=il++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Lv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ov={readContext:dr,useCallback:sm,useContext:dr,useEffect:Ad,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:am,useReducer:bd,useRef:Qp,useState:function(){return bd(rl)},useDebugValue:Rd,useDeferredValue:function(n){var i=fr();return om(i,qn.memoizedState,n)},useTransition:function(){var n=bd(rl)[0],i=fr().memoizedState;return[n,i]},useMutableSource:Xp,useSyncExternalStore:qp,useId:lm,unstable_isNewReconciler:!1},Fv={readContext:dr,useCallback:sm,useContext:dr,useEffect:Ad,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:am,useReducer:Td,useRef:Qp,useState:function(){return Td(rl)},useDebugValue:Rd,useDeferredValue:function(n){var i=fr();return qn===null?i.memoizedState=n:om(i,qn.memoizedState,n)},useTransition:function(){var n=Td(rl)[0],i=fr().memoizedState;return[n,i]},useMutableSource:Xp,useSyncExternalStore:qp,useId:lm,unstable_isNewReconciler:!1};function Rr(n,i){if(n&&n.defaultProps){i=K({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Cd(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:K({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pc={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Li(),d=Ws(n),g=ps(c,d);g.payload=i,a!=null&&(g.callback=a),i=zs(n,g,d),i!==null&&(Lr(i,n,d,c),ac(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Li(),d=Ws(n),g=ps(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=zs(n,g,d),i!==null&&(Lr(i,n,d,c),ac(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Li(),c=Ws(n),d=ps(a,c);d.tag=2,i!=null&&(d.callback=i),i=zs(n,d,c),i!==null&&(Lr(i,n,c,a),ac(i,n,c))}};function fm(n,i,a,c,d,g,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,P):i.prototype&&i.prototype.isPureReactComponent?!Xo(a,c)||!Xo(d,g):!0}function hm(n,i,a){var c=!1,d=Fs,g=i.contextType;return typeof g=="object"&&g!==null?g=dr(g):(d=ki(i)?pa:gi.current,c=i.contextTypes,g=(c=c!=null)?Za(n,d):Fs),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pc,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function pm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&pc.enqueueReplaceState(i,i.state,null)}function Pd(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},gd(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=dr(g):(g=ki(i)?pa:gi.current,d.context=Za(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Cd(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&pc.enqueueReplaceState(d,d.state,null),oc(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,i){try{var a="",c=i;do a+=Xe(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Ld(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Nd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kv=typeof WeakMap=="function"?WeakMap:Map;function mm(n,i,a){a=ps(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Sc||(Sc=!0,jd=c),Nd(n,i)},a}function gm(n,i,a){a=ps(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Nd(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Nd(n,i),typeof c!="function"&&(Gs===null?Gs=new Set([this]):Gs.add(this));var P=i.stack;this.componentDidCatch(i.value,{componentStack:P!==null?P:""})}),a}function vm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new kv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Jv.bind(null,n,i,a),i.then(n,n))}function xm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function _m(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ps(-1,1),i.tag=2,zs(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Bv=R.ReactCurrentOwner,Bi=!1;function Pi(n,i,a,c){i.child=n===null?Bp(i,null,a,c):to(i,n.child,a,c)}function ym(n,i,a,c,d){a=a.render;var g=i.ref;return io(i,d),c=Ed(n,i,a,c,g,d),a=wd(),n!==null&&!Bi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ms(n,i,d)):(Cn&&a&&ad(i),i.flags|=1,Pi(n,i,c,d),i.child)}function Sm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!ef(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Mm(n,i,g,c,d)):(n=Ac(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var P=g.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(P,c)&&n.ref===i.ref)return ms(n,i,d)}return i.flags|=1,n=qs(g,c),n.ref=i.ref,n.return=i,i.child=n}function Mm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Xo(g,c)&&n.ref===i.ref)if(Bi=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bi=!0);else return i.lanes=n.lanes,ms(n,i,d)}return Id(n,i,a,c,d)}function Em(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},_n(oo,Qi),Qi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,_n(oo,Qi),Qi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,_n(oo,Qi),Qi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,_n(oo,Qi),Qi|=c;return Pi(n,i,d,a),i.child}function wm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Id(n,i,a,c,d){var g=ki(a)?pa:gi.current;return g=Za(i,g),io(i,d),a=Ed(n,i,a,c,g,d),c=wd(),n!==null&&!Bi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ms(n,i,d)):(Cn&&c&&ad(i),i.flags|=1,Pi(n,i,a,d),i.child)}function bm(n,i,a,c,d){if(ki(a)){var g=!0;Jl(i)}else g=!1;if(io(i,d),i.stateNode===null)gc(n,i),hm(i,a,c),Pd(i,a,c,d),c=!0;else if(n===null){var P=i.stateNode,V=i.memoizedProps;P.props=V;var j=P.context,xe=a.contextType;typeof xe=="object"&&xe!==null?xe=dr(xe):(xe=ki(a)?pa:gi.current,xe=Za(i,xe));var Le=a.getDerivedStateFromProps,Ie=typeof Le=="function"||typeof P.getSnapshotBeforeUpdate=="function";Ie||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(V!==c||j!==xe)&&pm(i,P,c,xe),Bs=!1;var Ae=i.memoizedState;P.state=Ae,oc(i,c,P,d),j=i.memoizedState,V!==c||Ae!==j||Fi.current||Bs?(typeof Le=="function"&&(Cd(i,a,Le,c),j=i.memoizedState),(V=Bs||fm(i,a,V,c,Ae,j,xe))?(Ie||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(i.flags|=4194308)):(typeof P.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),P.props=c,P.state=j,P.context=xe,c=V):(typeof P.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{P=i.stateNode,Vp(n,i),V=i.memoizedProps,xe=i.type===i.elementType?V:Rr(i.type,V),P.props=xe,Ie=i.pendingProps,Ae=P.context,j=a.contextType,typeof j=="object"&&j!==null?j=dr(j):(j=ki(a)?pa:gi.current,j=Za(i,j));var tt=a.getDerivedStateFromProps;(Le=typeof tt=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(V!==Ie||Ae!==j)&&pm(i,P,c,j),Bs=!1,Ae=i.memoizedState,P.state=Ae,oc(i,c,P,d);var at=i.memoizedState;V!==Ie||Ae!==at||Fi.current||Bs?(typeof tt=="function"&&(Cd(i,a,tt,c),at=i.memoizedState),(xe=Bs||fm(i,a,xe,c,Ae,at,j)||!1)?(Le||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(c,at,j),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(c,at,j)),typeof P.componentDidUpdate=="function"&&(i.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof P.componentDidUpdate!="function"||V===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=at),P.props=c,P.state=at,P.context=j,c=xe):(typeof P.componentDidUpdate!="function"||V===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=1024),c=!1)}return Dd(n,i,a,c,g,d)}function Dd(n,i,a,c,d,g){wm(n,i);var P=(i.flags&128)!==0;if(!c&&!P)return d&&Pp(i,a,!1),ms(n,i,g);c=i.stateNode,Bv.current=i;var V=P&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&P?(i.child=to(i,n.child,null,g),i.child=to(i,null,V,g)):Pi(n,i,V,g),i.memoizedState=c.state,d&&Pp(i,a,!0),i.child}function Tm(n){var i=n.stateNode;i.pendingContext?Rp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Rp(n,i.context,!1),vd(n,i.containerInfo)}function Am(n,i,a,c,d){return eo(),ud(d),i.flags|=256,Pi(n,i,a,c),i.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Od(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rm(n,i,a){var c=i.pendingProps,d=Nn.current,g=!1,P=(i.flags&128)!==0,V;if((V=P)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),_n(Nn,d&1),n===null)return cd(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(P=c.children,n=c.fallback,g?(c=i.mode,g=i.child,P={mode:"hidden",children:P},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=P):g=Rc(P,c,0,null),n=wa(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Od(a),i.memoizedState=Ud,n):Fd(i,P));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return zv(n,i,P,c,V,d,a);if(g){g=c.fallback,P=i.mode,d=n.child,V=d.sibling;var j={mode:"hidden",children:c.children};return(P&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=qs(d,j),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=qs(V,g):(g=wa(g,P,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,P=n.child.memoizedState,P=P===null?Od(a):{baseLanes:P.baseLanes|a,cachePool:null,transitions:P.transitions},g.memoizedState=P,g.childLanes=n.childLanes&~a,i.memoizedState=Ud,c}return g=n.child,n=g.sibling,c=qs(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Fd(n,i){return i=Rc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function mc(n,i,a,c){return c!==null&&ud(c),to(i,n.child,null,a),n=Fd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zv(n,i,a,c,d,g,P){if(a)return i.flags&256?(i.flags&=-257,c=Ld(Error(t(422))),mc(n,i,P,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Rc({mode:"visible",children:c.children},d,0,null),g=wa(g,d,P,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&to(i,n.child,null,P),i.child.memoizedState=Od(P),i.memoizedState=Ud,g);if((i.mode&1)===0)return mc(n,i,P,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=Ld(g,c,void 0),mc(n,i,P,c)}if(V=(P&n.childLanes)!==0,Bi||V){if(c=ni,c!==null){switch(P&-P){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|P))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,hs(n,d),Lr(c,n,d,-1))}return Qd(),c=Ld(Error(t(421))),mc(n,i,P,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Qv.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Ji=Us(d.nextSibling),Zi=i,Cn=!0,Ar=null,n!==null&&(cr[ur++]=ds,cr[ur++]=fs,cr[ur++]=ma,ds=n.id,fs=n.overflow,ma=i),i=Fd(i,c.children),i.flags|=4096,i)}function Cm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),pd(n.return,i,a)}function kd(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Pm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Pi(n,i,c.children,a),c=Nn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cm(n,a,i);else if(n.tag===19)Cm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(_n(Nn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&lc(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),kd(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&lc(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}kd(i,!0,a,null,g);break;case"together":kd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function gc(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ms(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ya|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=qs(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=qs(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Vv(n,i,a){switch(i.tag){case 3:Tm(i),eo();break;case 5:Wp(i);break;case 1:ki(i.type)&&Jl(i);break;case 4:vd(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;_n(rc,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(_n(Nn,Nn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Rm(n,i,a):(_n(Nn,Nn.current&1),n=ms(n,i,a),n!==null?n.sibling:null);_n(Nn,Nn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Pm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_n(Nn,Nn.current),c)break;return null;case 22:case 23:return i.lanes=0,Em(n,i,a)}return ms(n,i,a)}var Lm,Bd,Nm,Im;Lm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bd=function(){},Nm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,xa(Wr.current);var g=null;switch(a){case"input":d=ft(n,d),c=ft(n,c),g=[];break;case"select":d=K({},d,{value:void 0}),c=K({},c,{value:void 0}),g=[];break;case"textarea":d=kt(n,d),c=kt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Yl)}Je(a,c);var P;a=null;for(xe in d)if(!c.hasOwnProperty(xe)&&d.hasOwnProperty(xe)&&d[xe]!=null)if(xe==="style"){var V=d[xe];for(P in V)V.hasOwnProperty(P)&&(a||(a={}),a[P]="")}else xe!=="dangerouslySetInnerHTML"&&xe!=="children"&&xe!=="suppressContentEditableWarning"&&xe!=="suppressHydrationWarning"&&xe!=="autoFocus"&&(o.hasOwnProperty(xe)?g||(g=[]):(g=g||[]).push(xe,null));for(xe in c){var j=c[xe];if(V=d!=null?d[xe]:void 0,c.hasOwnProperty(xe)&&j!==V&&(j!=null||V!=null))if(xe==="style")if(V){for(P in V)!V.hasOwnProperty(P)||j&&j.hasOwnProperty(P)||(a||(a={}),a[P]="");for(P in j)j.hasOwnProperty(P)&&V[P]!==j[P]&&(a||(a={}),a[P]=j[P])}else a||(g||(g=[]),g.push(xe,a)),a=j;else xe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,V=V?V.__html:void 0,j!=null&&V!==j&&(g=g||[]).push(xe,j)):xe==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(xe,""+j):xe!=="suppressContentEditableWarning"&&xe!=="suppressHydrationWarning"&&(o.hasOwnProperty(xe)?(j!=null&&xe==="onScroll"&&bn("scroll",n),g||V===j||(g=[])):(g=g||[]).push(xe,j))}a&&(g=g||[]).push("style",a);var xe=g;(i.updateQueue=xe)&&(i.flags|=4)}},Im=function(n,i,a,c){a!==c&&(i.flags|=4)};function al(n,i){if(!Cn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xi(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Gv(n,i,a){var c=i.pendingProps;switch(od(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xi(i),null;case 1:return ki(i.type)&&Zl(),xi(i),null;case 3:return c=i.stateNode,ro(),Tn(Fi),Tn(gi),yd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(nc(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ar!==null&&(Kd(Ar),Ar=null))),Bd(n,i),xi(i),null;case 5:xd(i);var d=xa(tl.current);if(a=i.type,n!==null&&i.stateNode!=null)Nm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return xi(i),null}if(n=xa(Wr.current),nc(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Hr]=i,c[Ko]=g,n=(i.mode&1)!==0,a){case"dialog":bn("cancel",c),bn("close",c);break;case"iframe":case"object":case"embed":bn("load",c);break;case"video":case"audio":for(d=0;d<jo.length;d++)bn(jo[d],c);break;case"source":bn("error",c);break;case"img":case"image":case"link":bn("error",c),bn("load",c);break;case"details":bn("toggle",c);break;case"input":pt(c,g),bn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},bn("invalid",c);break;case"textarea":$(c,g),bn("invalid",c)}Je(a,g),d=null;for(var P in g)if(g.hasOwnProperty(P)){var V=g[P];P==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&$l(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&$l(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(P)&&V!=null&&P==="onScroll"&&bn("scroll",c)}switch(a){case"input":Ue(c),At(c,g,!0);break;case"textarea":Ue(c),Lt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Yl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{P=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=B(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=P.createElement(a,{is:c.is}):(n=P.createElement(a),a==="select"&&(P=n,c.multiple?P.multiple=!0:c.size&&(P.size=c.size))):n=P.createElementNS(n,a),n[Hr]=i,n[Ko]=c,Lm(n,i,!1,!1),i.stateNode=n;e:{switch(P=Oe(a,c),a){case"dialog":bn("cancel",n),bn("close",n),d=c;break;case"iframe":case"object":case"embed":bn("load",n),d=c;break;case"video":case"audio":for(d=0;d<jo.length;d++)bn(jo[d],n);d=c;break;case"source":bn("error",n),d=c;break;case"img":case"image":case"link":bn("error",n),bn("load",n),d=c;break;case"details":bn("toggle",n),d=c;break;case"input":pt(n,c),d=ft(n,c),bn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=K({},c,{value:void 0}),bn("invalid",n);break;case"textarea":$(n,c),d=kt(n,c),bn("invalid",n);break;default:d=c}Je(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var j=V[g];g==="style"?be(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ae(n,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&ge(n,j):typeof j=="number"&&ge(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&bn("scroll",n):j!=null&&F(n,g,j,P))}switch(a){case"input":Ue(n),At(n,c,!1);break;case"textarea":Ue(n),Lt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ft(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ft(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xi(i),null;case 6:if(n&&i.stateNode!=null)Im(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=xa(tl.current),xa(Wr.current),nc(i)){if(c=i.stateNode,a=i.memoizedProps,c[Hr]=i,(g=c.nodeValue!==a)&&(n=Zi,n!==null))switch(n.tag){case 3:$l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Hr]=i,i.stateNode=c}return xi(i),null;case 13:if(Tn(Nn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Cn&&Ji!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Op(),eo(),i.flags|=98560,g=!1;else if(g=nc(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Hr]=i}else eo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xi(i),g=!1}else Ar!==null&&(Kd(Ar),Ar=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Nn.current&1)!==0?jn===0&&(jn=3):Qd())),i.updateQueue!==null&&(i.flags|=4),xi(i),null);case 4:return ro(),Bd(n,i),n===null&&$o(i.stateNode.containerInfo),xi(i),null;case 10:return hd(i.type._context),xi(i),null;case 17:return ki(i.type)&&Zl(),xi(i),null;case 19:if(Tn(Nn),g=i.memoizedState,g===null)return xi(i),null;if(c=(i.flags&128)!==0,P=g.rendering,P===null)if(c)al(g,!1);else{if(jn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(P=lc(n),P!==null){for(i.flags|=128,al(g,!1),c=P.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,P=g.alternate,P===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=P.childLanes,g.lanes=P.lanes,g.child=P.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=P.memoizedProps,g.memoizedState=P.memoizedState,g.updateQueue=P.updateQueue,g.type=P.type,n=P.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return _n(Nn,Nn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Bt()>lo&&(i.flags|=128,c=!0,al(g,!1),i.lanes=4194304)}else{if(!c)if(n=lc(P),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),al(g,!0),g.tail===null&&g.tailMode==="hidden"&&!P.alternate&&!Cn)return xi(i),null}else 2*Bt()-g.renderingStartTime>lo&&a!==1073741824&&(i.flags|=128,c=!0,al(g,!1),i.lanes=4194304);g.isBackwards?(P.sibling=i.child,i.child=P):(a=g.last,a!==null?a.sibling=P:i.child=P,g.last=P)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Bt(),i.sibling=null,a=Nn.current,_n(Nn,c?a&1|2:a&1),i):(xi(i),null);case 22:case 23:return Jd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qi&1073741824)!==0&&(xi(i),i.subtreeFlags&6&&(i.flags|=8192)):xi(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Hv(n,i){switch(od(i),i.tag){case 1:return ki(i.type)&&Zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ro(),Tn(Fi),Tn(gi),yd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return xd(i),null;case 13:if(Tn(Nn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));eo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Tn(Nn),null;case 4:return ro(),null;case 10:return hd(i.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var vc=!1,_i=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,st=null;function ao(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Fn(n,i,c)}else a.current=null}function zd(n,i,a){try{a()}catch(c){Fn(n,i,c)}}var Dm=!1;function Xv(n,i){if(Ju=Rs,n=fp(),Wu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var P=0,V=-1,j=-1,xe=0,Le=0,Ie=n,Ae=null;t:for(;;){for(var tt;Ie!==a||d!==0&&Ie.nodeType!==3||(V=P+d),Ie!==g||c!==0&&Ie.nodeType!==3||(j=P+c),Ie.nodeType===3&&(P+=Ie.nodeValue.length),(tt=Ie.firstChild)!==null;)Ae=Ie,Ie=tt;for(;;){if(Ie===n)break t;if(Ae===a&&++xe===d&&(V=P),Ae===g&&++Le===c&&(j=P),(tt=Ie.nextSibling)!==null)break;Ie=Ae,Ae=Ie.parentNode}Ie=tt}a=V===-1||j===-1?null:{start:V,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qu={focusedElem:n,selectionRange:a},Rs=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var lt=at.memoizedProps,kn=at.memoizedState,ue=i.stateNode,Q=ue.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Rr(i.type,lt),kn);ue.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Be){Fn(i,i.return,Be)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return at=Dm,Dm=!1,at}function ol(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&zd(i,a,g)}d=d.next}while(d!==c)}}function xc(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Um(n){var i=n.alternate;i!==null&&(n.alternate=null,Um(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Hr],delete i[Ko],delete i[id],delete i[Av],delete i[Rv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Om(n){return n.tag===5||n.tag===3||n.tag===4}function Fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Om(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Yl));else if(c!==4&&(n=n.child,n!==null))for(Gd(n,i,a),n=n.sibling;n!==null;)Gd(n,i,a),n=n.sibling}function Hd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hd(n,i,a),n=n.sibling;n!==null;)Hd(n,i,a),n=n.sibling}var di=null,Cr=!1;function Vs(n,i,a){for(a=a.child;a!==null;)km(n,i,a),a=a.sibling}function km(n,i,a){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 5:_i||ao(a,i);case 6:var c=di,d=Cr;di=null,Vs(n,i,a),di=c,Cr=d,di!==null&&(Cr?(n=di,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):di.removeChild(a.stateNode));break;case 18:di!==null&&(Cr?(n=di,a=a.stateNode,n.nodeType===8?nd(n.parentNode,a):n.nodeType===1&&nd(n,a),kr(n)):nd(di,a.stateNode));break;case 4:c=di,d=Cr,di=a.stateNode.containerInfo,Cr=!0,Vs(n,i,a),di=c,Cr=d;break;case 0:case 11:case 14:case 15:if(!_i&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,P=g.destroy;g=g.tag,P!==void 0&&((g&2)!==0||(g&4)!==0)&&zd(a,i,P),d=d.next}while(d!==c)}Vs(n,i,a);break;case 1:if(!_i&&(ao(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){Fn(a,i,V)}Vs(n,i,a);break;case 21:Vs(n,i,a);break;case 22:a.mode&1?(_i=(c=_i)||a.memoizedState!==null,Vs(n,i,a),_i=c):Vs(n,i,a);break;default:Vs(n,i,a)}}function Bm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Wv),i.forEach(function(c){var d=ex.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Pr(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,P=i,V=P;e:for(;V!==null;){switch(V.tag){case 5:di=V.stateNode,Cr=!1;break e;case 3:di=V.stateNode.containerInfo,Cr=!0;break e;case 4:di=V.stateNode.containerInfo,Cr=!0;break e}V=V.return}if(di===null)throw Error(t(160));km(g,P,d),di=null,Cr=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(xe){Fn(d,i,xe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zm(i,n),i=i.sibling}function zm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pr(i,n),qr(n),c&4){try{ol(3,n,n.return),xc(3,n)}catch(lt){Fn(n,n.return,lt)}try{ol(5,n,n.return)}catch(lt){Fn(n,n.return,lt)}}break;case 1:Pr(i,n),qr(n),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Pr(i,n),qr(n),c&512&&a!==null&&ao(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch(lt){Fn(n,n.return,lt)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,P=a!==null?a.memoizedProps:g,V=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&bt(d,g),Oe(V,P);var xe=Oe(V,g);for(P=0;P<j.length;P+=2){var Le=j[P],Ie=j[P+1];Le==="style"?be(d,Ie):Le==="dangerouslySetInnerHTML"?ae(d,Ie):Le==="children"?ge(d,Ie):F(d,Le,Ie,xe)}switch(V){case"input":_t(d,g);break;case"textarea":tn(d,g);break;case"select":var Ae=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var tt=g.value;tt!=null?Ft(d,!!g.multiple,tt,!1):Ae!==!!g.multiple&&(g.defaultValue!=null?Ft(d,!!g.multiple,g.defaultValue,!0):Ft(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ko]=g}catch(lt){Fn(n,n.return,lt)}}break;case 6:if(Pr(i,n),qr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(lt){Fn(n,n.return,lt)}}break;case 3:if(Pr(i,n),qr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kr(i.containerInfo)}catch(lt){Fn(n,n.return,lt)}break;case 4:Pr(i,n),qr(n);break;case 13:Pr(i,n),qr(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(qd=Bt())),c&4&&Bm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(_i=(xe=_i)||Le,Pr(i,n),_i=xe):Pr(i,n),qr(n),c&8192){if(xe=n.memoizedState!==null,(n.stateNode.isHidden=xe)&&!Le&&(n.mode&1)!==0)for(st=n,Le=n.child;Le!==null;){for(Ie=st=Le;st!==null;){switch(Ae=st,tt=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:ol(4,Ae,Ae.return);break;case 1:ao(Ae,Ae.return);var at=Ae.stateNode;if(typeof at.componentWillUnmount=="function"){c=Ae,a=Ae.return;try{i=c,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(lt){Fn(c,a,lt)}}break;case 5:ao(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){Hm(Ie);continue}}tt!==null?(tt.return=Ae,st=tt):Hm(Ie)}Le=Le.sibling}e:for(Le=null,Ie=n;;){if(Ie.tag===5){if(Le===null){Le=Ie;try{d=Ie.stateNode,xe?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=Ie.stateNode,j=Ie.memoizedProps.style,P=j!=null&&j.hasOwnProperty("display")?j.display:null,V.style.display=ye("display",P))}catch(lt){Fn(n,n.return,lt)}}}else if(Ie.tag===6){if(Le===null)try{Ie.stateNode.nodeValue=xe?"":Ie.memoizedProps}catch(lt){Fn(n,n.return,lt)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;Le===Ie&&(Le=null),Ie=Ie.return}Le===Ie&&(Le=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:Pr(i,n),qr(n),c&4&&Bm(n);break;case 21:break;default:Pr(i,n),qr(n)}}function qr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Om(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ge(d,""),c.flags&=-33);var g=Fm(n);Hd(n,g,d);break;case 3:case 4:var P=c.stateNode.containerInfo,V=Fm(n);Gd(n,V,P);break;default:throw Error(t(161))}}catch(j){Fn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function qv(n,i,a){st=n,Vm(n)}function Vm(n,i,a){for(var c=(n.mode&1)!==0;st!==null;){var d=st,g=d.child;if(d.tag===22&&c){var P=d.memoizedState!==null||vc;if(!P){var V=d.alternate,j=V!==null&&V.memoizedState!==null||_i;V=vc;var xe=_i;if(vc=P,(_i=j)&&!xe)for(st=d;st!==null;)P=st,j=P.child,P.tag===22&&P.memoizedState!==null?Wm(d):j!==null?(j.return=P,st=j):Wm(d);for(;g!==null;)st=g,Vm(g),g=g.sibling;st=d,vc=V,_i=xe}Gm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,st=g):Gm(n)}}function Gm(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_i||xc(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_i)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Rr(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Hp(i,g,c);break;case 3:var P=i.updateQueue;if(P!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Hp(i,P,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var xe=i.alternate;if(xe!==null){var Le=xe.memoizedState;if(Le!==null){var Ie=Le.dehydrated;Ie!==null&&kr(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_i||i.flags&512&&Vd(i)}catch(Ae){Fn(i,i.return,Ae)}}if(i===n){st=null;break}if(a=i.sibling,a!==null){a.return=i.return,st=a;break}st=i.return}}function Hm(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var a=i.sibling;if(a!==null){a.return=i.return,st=a;break}st=i.return}}function Wm(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{xc(4,i)}catch(j){Fn(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(j){Fn(i,d,j)}}var g=i.return;try{Vd(i)}catch(j){Fn(i,g,j)}break;case 5:var P=i.return;try{Vd(i)}catch(j){Fn(i,P,j)}}}catch(j){Fn(i,i.return,j)}if(i===n){st=null;break}var V=i.sibling;if(V!==null){V.return=i.return,st=V;break}st=i.return}}var jv=Math.ceil,_c=R.ReactCurrentDispatcher,Wd=R.ReactCurrentOwner,hr=R.ReactCurrentBatchConfig,rn=0,ni=null,zn=null,fi=0,Qi=0,oo=Os(0),jn=0,ll=null,ya=0,yc=0,Xd=0,cl=null,zi=null,qd=0,lo=1/0,gs=null,Sc=!1,jd=null,Gs=null,Mc=!1,Hs=null,Ec=0,ul=0,$d=null,wc=-1,bc=0;function Li(){return(rn&6)!==0?Bt():wc!==-1?wc:wc=Bt()}function Ws(n){return(n.mode&1)===0?1:(rn&2)!==0&&fi!==0?fi&-fi:Pv.transition!==null?(bc===0&&(bc=En()),bc):(n=yt,n!==0||(n=window.event,n=n===void 0?16:oa(n.type)),n)}function Lr(n,i,a,c){if(50<ul)throw ul=0,$d=null,Error(t(185));un(n,a,c),((rn&2)===0||n!==ni)&&(n===ni&&((rn&2)===0&&(yc|=a),jn===4&&Xs(n,fi)),Vi(n,c),a===1&&rn===0&&(i.mode&1)===0&&(lo=Bt()+500,Ql&&ks()))}function Vi(n,i){var a=n.callbackNode;an(n,i);var c=Dt(n,n===ni?fi:0);if(c===0)a!==null&&Wn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Wn(a),i===1)n.tag===0?Cv(qm.bind(null,n)):Lp(qm.bind(null,n)),bv(function(){(rn&6)===0&&ks()}),a=null;else{switch(li(c)){case 1:a=yr;break;case 4:a=Ki;break;case 16:a=L;break;case 536870912:a=me;break;default:a=L}a=e0(a,Xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Xm(n,i){if(wc=-1,bc=0,(rn&6)!==0)throw Error(t(327));var a=n.callbackNode;if(co()&&n.callbackNode!==a)return null;var c=Dt(n,n===ni?fi:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Tc(n,c);else{i=c;var d=rn;rn|=2;var g=$m();(ni!==n||fi!==i)&&(gs=null,lo=Bt()+500,Ma(n,i));do try{Kv();break}catch(V){jm(n,V)}while(!0);fd(),_c.current=g,rn=d,zn!==null?i=0:(ni=null,fi=0,i=jn)}if(i!==0){if(i===2&&(d=Xt(n),d!==0&&(c=d,i=Yd(n,d))),i===1)throw a=ll,Ma(n,0),Xs(n,c),Vi(n,Bt()),a;if(i===6)Xs(n,c);else{if(d=n.current.alternate,(c&30)===0&&!$v(d)&&(i=Tc(n,c),i===2&&(g=Xt(n),g!==0&&(c=g,i=Yd(n,g))),i===1))throw a=ll,Ma(n,0),Xs(n,c),Vi(n,Bt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Ea(n,zi,gs);break;case 3:if(Xs(n,c),(c&130023424)===c&&(i=qd+500-Bt(),10<i)){if(Dt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Li(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=td(Ea.bind(null,n,zi,gs),i);break}Ea(n,zi,gs);break;case 4:if(Xs(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var P=31-Ve(c);g=1<<P,P=i[P],P>d&&(d=P),c&=~g}if(c=d,c=Bt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jv(c/1960))-c,10<c){n.timeoutHandle=td(Ea.bind(null,n,zi,gs),c);break}Ea(n,zi,gs);break;case 5:Ea(n,zi,gs);break;default:throw Error(t(329))}}}return Vi(n,Bt()),n.callbackNode===a?Xm.bind(null,n):null}function Yd(n,i){var a=cl;return n.current.memoizedState.isDehydrated&&(Ma(n,i).flags|=256),n=Tc(n,i),n!==2&&(i=zi,zi=a,i!==null&&Kd(i)),n}function Kd(n){zi===null?zi=n:zi.push.apply(zi,n)}function $v(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Tr(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xs(n,i){for(i&=~Xd,i&=~yc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function qm(n){if((rn&6)!==0)throw Error(t(327));co();var i=Dt(n,0);if((i&1)===0)return Vi(n,Bt()),null;var a=Tc(n,i);if(n.tag!==0&&a===2){var c=Xt(n);c!==0&&(i=c,a=Yd(n,c))}if(a===1)throw a=ll,Ma(n,0),Xs(n,i),Vi(n,Bt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ea(n,zi,gs),Vi(n,Bt()),null}function Zd(n,i){var a=rn;rn|=1;try{return n(i)}finally{rn=a,rn===0&&(lo=Bt()+500,Ql&&ks())}}function Sa(n){Hs!==null&&Hs.tag===0&&(rn&6)===0&&co();var i=rn;rn|=1;var a=hr.transition,c=yt;try{if(hr.transition=null,yt=1,n)return n()}finally{yt=c,hr.transition=a,rn=i,(rn&6)===0&&ks()}}function Jd(){Qi=oo.current,Tn(oo)}function Ma(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,wv(a)),zn!==null)for(a=zn.return;a!==null;){var c=a;switch(od(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Zl();break;case 3:ro(),Tn(Fi),Tn(gi),yd();break;case 5:xd(c);break;case 4:ro();break;case 13:Tn(Nn);break;case 19:Tn(Nn);break;case 10:hd(c.type._context);break;case 22:case 23:Jd()}a=a.return}if(ni=n,zn=n=qs(n.current,null),fi=Qi=i,jn=0,ll=null,Xd=yc=ya=0,zi=cl=null,va!==null){for(i=0;i<va.length;i++)if(a=va[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var P=g.next;g.next=d,c.next=P}a.pending=c}va=null}return n}function jm(n,i){do{var a=zn;try{if(fd(),cc.current=hc,uc){for(var c=In.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}uc=!1}if(_a=0,ti=qn=In=null,nl=!1,il=0,Wd.current=null,a===null||a.return===null){jn=1,ll=i,zn=null;break}e:{var g=n,P=a.return,V=a,j=i;if(i=fi,V.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var xe=j,Le=V,Ie=Le.tag;if((Le.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Ae=Le.alternate;Ae?(Le.updateQueue=Ae.updateQueue,Le.memoizedState=Ae.memoizedState,Le.lanes=Ae.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var tt=xm(P);if(tt!==null){tt.flags&=-257,_m(tt,P,V,g,i),tt.mode&1&&vm(g,xe,i),i=tt,j=xe;var at=i.updateQueue;if(at===null){var lt=new Set;lt.add(j),i.updateQueue=lt}else at.add(j);break e}else{if((i&1)===0){vm(g,xe,i),Qd();break e}j=Error(t(426))}}else if(Cn&&V.mode&1){var kn=xm(P);if(kn!==null){(kn.flags&65536)===0&&(kn.flags|=256),_m(kn,P,V,g,i),ud(so(j,V));break e}}g=j=so(j,V),jn!==4&&(jn=2),cl===null?cl=[g]:cl.push(g),g=P;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=mm(g,j,i);Gp(g,ue);break e;case 1:V=j;var Q=g.type,pe=g.stateNode;if((g.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Gs===null||!Gs.has(pe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Be=gm(g,V,i);Gp(g,Be);break e}}g=g.return}while(g!==null)}Km(a)}catch(ct){i=ct,zn===a&&a!==null&&(zn=a=a.return);continue}break}while(!0)}function $m(){var n=_c.current;return _c.current=hc,n===null?hc:n}function Qd(){(jn===0||jn===3||jn===2)&&(jn=4),ni===null||(ya&268435455)===0&&(yc&268435455)===0||Xs(ni,fi)}function Tc(n,i){var a=rn;rn|=2;var c=$m();(ni!==n||fi!==i)&&(gs=null,Ma(n,i));do try{Yv();break}catch(d){jm(n,d)}while(!0);if(fd(),rn=a,_c.current=c,zn!==null)throw Error(t(261));return ni=null,fi=0,jn}function Yv(){for(;zn!==null;)Ym(zn)}function Kv(){for(;zn!==null&&!rs();)Ym(zn)}function Ym(n){var i=Qm(n.alternate,n,Qi);n.memoizedProps=n.pendingProps,i===null?Km(n):zn=i,Wd.current=null}function Km(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Gv(a,i,Qi),a!==null){zn=a;return}}else{if(a=Hv(a,i),a!==null){a.flags&=32767,zn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jn=6,zn=null;return}}if(i=i.sibling,i!==null){zn=i;return}zn=i=n}while(i!==null);jn===0&&(jn=5)}function Ea(n,i,a){var c=yt,d=hr.transition;try{hr.transition=null,yt=1,Zv(n,i,a,c)}finally{hr.transition=d,yt=c}return null}function Zv(n,i,a,c){do co();while(Hs!==null);if((rn&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Nt(n,g),n===ni&&(zn=ni=null,fi=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Mc||(Mc=!0,e0(L,function(){return co(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=hr.transition,hr.transition=null;var P=yt;yt=1;var V=rn;rn|=4,Wd.current=null,Xv(n,a),zm(a,n),vv(Qu),Rs=!!Ju,Qu=Ju=null,n.current=a,qv(a),Wt(),rn=V,yt=P,hr.transition=g}else n.current=a;if(Mc&&(Mc=!1,Hs=n,Ec=d),g=n.pendingLanes,g===0&&(Gs=null),je(a.stateNode),Vi(n,Bt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Sc)throw Sc=!1,n=jd,jd=null,n;return(Ec&1)!==0&&n.tag!==0&&co(),g=n.pendingLanes,(g&1)!==0?n===$d?ul++:(ul=0,$d=n):ul=0,ks(),null}function co(){if(Hs!==null){var n=li(Ec),i=hr.transition,a=yt;try{if(hr.transition=null,yt=16>n?16:n,Hs===null)var c=!1;else{if(n=Hs,Hs=null,Ec=0,(rn&6)!==0)throw Error(t(331));var d=rn;for(rn|=4,st=n.current;st!==null;){var g=st,P=g.child;if((st.flags&16)!==0){var V=g.deletions;if(V!==null){for(var j=0;j<V.length;j++){var xe=V[j];for(st=xe;st!==null;){var Le=st;switch(Le.tag){case 0:case 11:case 15:ol(8,Le,g)}var Ie=Le.child;if(Ie!==null)Ie.return=Le,st=Ie;else for(;st!==null;){Le=st;var Ae=Le.sibling,tt=Le.return;if(Um(Le),Le===xe){st=null;break}if(Ae!==null){Ae.return=tt,st=Ae;break}st=tt}}}var at=g.alternate;if(at!==null){var lt=at.child;if(lt!==null){at.child=null;do{var kn=lt.sibling;lt.sibling=null,lt=kn}while(lt!==null)}}st=g}}if((g.subtreeFlags&2064)!==0&&P!==null)P.return=g,st=P;else e:for(;st!==null;){if(g=st,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ol(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,st=ue;break e}st=g.return}}var Q=n.current;for(st=Q;st!==null;){P=st;var pe=P.child;if((P.subtreeFlags&2064)!==0&&pe!==null)pe.return=P,st=pe;else e:for(P=Q;st!==null;){if(V=st,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:xc(9,V)}}catch(ct){Fn(V,V.return,ct)}if(V===P){st=null;break e}var Be=V.sibling;if(Be!==null){Be.return=V.return,st=Be;break e}st=V.return}}if(rn=d,ks(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(oe,n)}catch{}c=!0}return c}finally{yt=a,hr.transition=i}}return!1}function Zm(n,i,a){i=so(a,i),i=mm(n,i,1),n=zs(n,i,1),i=Li(),n!==null&&(un(n,1,i),Vi(n,i))}function Fn(n,i,a){if(n.tag===3)Zm(n,n,a);else for(;i!==null;){if(i.tag===3){Zm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gs===null||!Gs.has(c))){n=so(a,n),n=gm(i,n,1),i=zs(i,n,1),n=Li(),i!==null&&(un(i,1,n),Vi(i,n));break}}i=i.return}}function Jv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Li(),n.pingedLanes|=n.suspendedLanes&a,ni===n&&(fi&a)===a&&(jn===4||jn===3&&(fi&130023424)===fi&&500>Bt()-qd?Ma(n,0):Xd|=a),Vi(n,i)}function Jm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var a=Li();n=hs(n,i),n!==null&&(un(n,i,a),Vi(n,a))}function Qv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jm(n,a)}function ex(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Jm(n,a)}var Qm;Qm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fi.current)Bi=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bi=!1,Vv(n,i,a);Bi=(n.flags&131072)!==0}else Bi=!1,Cn&&(i.flags&1048576)!==0&&Np(i,tc,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;gc(n,i),n=i.pendingProps;var d=Za(i,gi.current);io(i,a),d=Ed(null,i,c,n,d,a);var g=wd();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ki(c)?(g=!0,Jl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gd(i),d.updater=pc,i.stateNode=d,d._reactInternals=i,Pd(i,c,n,a),i=Dd(null,i,c,!0,g,a)):(i.tag=0,Cn&&g&&ad(i),Pi(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(gc(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nx(c),n=Rr(c,n),d){case 0:i=Id(null,i,c,n,a);break e;case 1:i=bm(null,i,c,n,a);break e;case 11:i=ym(null,i,c,n,a);break e;case 14:i=Sm(null,i,c,Rr(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Rr(c,d),Id(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Rr(c,d),bm(n,i,c,d,a);case 3:e:{if(Tm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Vp(n,i),oc(i,c,null,a);var P=i.memoizedState;if(c=P.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=so(Error(t(423)),i),i=Am(n,i,c,a,d);break e}else if(c!==d){d=so(Error(t(424)),i),i=Am(n,i,c,a,d);break e}else for(Ji=Us(i.stateNode.containerInfo.firstChild),Zi=i,Cn=!0,Ar=null,a=Bp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){i=ms(n,i,a);break e}Pi(n,i,c,a)}i=i.child}return i;case 5:return Wp(i),n===null&&cd(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,P=d.children,ed(c,d)?P=null:g!==null&&ed(c,g)&&(i.flags|=32),wm(n,i),Pi(n,i,P,a),i.child;case 6:return n===null&&cd(i),null;case 13:return Rm(n,i,a);case 4:return vd(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=to(i,null,c,a):Pi(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Rr(c,d),ym(n,i,c,d,a);case 7:return Pi(n,i,i.pendingProps,a),i.child;case 8:return Pi(n,i,i.pendingProps.children,a),i.child;case 12:return Pi(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,P=d.value,_n(rc,c._currentValue),c._currentValue=P,g!==null)if(Tr(g.value,P)){if(g.children===d.children&&!Fi.current){i=ms(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){P=g.child;for(var j=V.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=ps(-1,a&-a),j.tag=2;var xe=g.updateQueue;if(xe!==null){xe=xe.shared;var Le=xe.pending;Le===null?j.next=j:(j.next=Le.next,Le.next=j),xe.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),pd(g.return,a,i),V.lanes|=a;break}j=j.next}}else if(g.tag===10)P=g.type===i.type?null:g.child;else if(g.tag===18){if(P=g.return,P===null)throw Error(t(341));P.lanes|=a,V=P.alternate,V!==null&&(V.lanes|=a),pd(P,a,i),P=g.sibling}else P=g.child;if(P!==null)P.return=g;else for(P=g;P!==null;){if(P===i){P=null;break}if(g=P.sibling,g!==null){g.return=P.return,P=g;break}P=P.return}g=P}Pi(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,io(i,a),d=dr(d),c=c(d),i.flags|=1,Pi(n,i,c,a),i.child;case 14:return c=i.type,d=Rr(c,i.pendingProps),d=Rr(c.type,d),Sm(n,i,c,d,a);case 15:return Mm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Rr(c,d),gc(n,i),i.tag=1,ki(c)?(n=!0,Jl(i)):n=!1,io(i,a),hm(i,c,d),Pd(i,c,d,a),Dd(null,i,c,!0,n,a);case 19:return Pm(n,i,a);case 22:return Em(n,i,a)}throw Error(t(156,i.tag))};function e0(n,i){return Zn(n,i)}function tx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pr(n,i,a,c){return new tx(n,i,a,c)}function ef(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nx(n){if(typeof n=="function")return ef(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===re)return 14}return 2}function qs(n,i){var a=n.alternate;return a===null?(a=pr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ac(n,i,a,c,d,g){var P=2;if(c=n,typeof n=="function")ef(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case k:return wa(a.children,d,g,i);case b:P=8,d|=8;break;case D:return n=pr(12,a,i,d|2),n.elementType=D,n.lanes=g,n;case ne:return n=pr(13,a,i,d),n.elementType=ne,n.lanes=g,n;case H:return n=pr(19,a,i,d),n.elementType=H,n.lanes=g,n;case ee:return Rc(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:P=10;break e;case G:P=9;break e;case W:P=11;break e;case re:P=14;break e;case fe:P=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pr(P,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function wa(n,i,a,c){return n=pr(7,n,c,i),n.lanes=a,n}function Rc(n,i,a,c){return n=pr(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function tf(n,i,a){return n=pr(6,n,null,i),n.lanes=a,n}function nf(n,i,a){return i=pr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ix(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ke(0),this.expirationTimes=Ke(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function rf(n,i,a,c,d,g,P,V,j){return n=new ix(n,i,a,V,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=pr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(g),n}function rx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function t0(n){if(!n)return Fs;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ki(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ki(a))return Cp(n,a,i)}return i}function n0(n,i,a,c,d,g,P,V,j){return n=rf(a,c,!0,n,d,g,P,V,j),n.context=t0(null),a=n.current,c=Li(),d=Ws(a),g=ps(c,d),g.callback=i??null,zs(a,g,d),n.current.lanes=d,un(n,d,c),Vi(n,c),n}function Cc(n,i,a,c){var d=i.current,g=Li(),P=Ws(d);return a=t0(a),i.context===null?i.context=a:i.pendingContext=a,i=ps(g,P),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=zs(d,i,P),n!==null&&(Lr(n,d,P,g),ac(n,d,P)),P}function Pc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function i0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function sf(n,i){i0(n,i),(n=n.alternate)&&i0(n,i)}function sx(){return null}var r0=typeof reportError=="function"?reportError:function(n){console.error(n)};function af(n){this._internalRoot=n}Lc.prototype.render=af.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Cc(n,i,null,null)},Lc.prototype.unmount=af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Sa(function(){Cc(null,n,null,null)}),i[cs]=null}};function Lc(n){this._internalRoot=n}Lc.prototype.unstable_scheduleHydration=function(n){if(n){var i=h();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Xn.length&&i!==0&&i<Xn[a].priority;a++);Xn.splice(a,0,n),a===0&&ui(n)}};function of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function s0(){}function ax(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var xe=Pc(P);g.call(xe)}}var P=n0(i,c,n,0,null,!1,!1,"",s0);return n._reactRootContainer=P,n[cs]=P.current,$o(n.nodeType===8?n.parentNode:n),Sa(),P}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var xe=Pc(j);V.call(xe)}}var j=rf(n,0,!1,null,null,!1,!1,"",s0);return n._reactRootContainer=j,n[cs]=j.current,$o(n.nodeType===8?n.parentNode:n),Sa(function(){Cc(i,j,a,c)}),j}function Ic(n,i,a,c,d){var g=a._reactRootContainer;if(g){var P=g;if(typeof d=="function"){var V=d;d=function(){var j=Pc(P);V.call(j)}}Cc(i,P,n,d)}else P=ax(a,i,n,d,c);return Pc(P)}ci=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=$e(i.pendingLanes);a!==0&&(Un(i,a|1),Vi(i,Bt()),(rn&6)===0&&(lo=Bt()+500,ks()))}break;case 13:Sa(function(){var c=hs(n,1);if(c!==null){var d=Li();Lr(c,n,1,d)}}),sf(n,1)}},Vt=function(n){if(n.tag===13){var i=hs(n,134217728);if(i!==null){var a=Li();Lr(i,n,134217728,a)}sf(n,134217728)}},nn=function(n){if(n.tag===13){var i=Ws(n),a=hs(n,i);if(a!==null){var c=Li();Lr(a,n,i,c)}sf(n,i)}},h=function(){return yt},O=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},rt=function(n,i,a){switch(i){case"input":if(_t(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Kl(c);if(!d)throw Error(t(90));ut(c),_t(c,d)}}}break;case"textarea":tn(n,a);break;case"select":i=a.value,i!=null&&Ft(n,!!a.multiple,i,!1)}},Ee=Zd,Z=Sa;var ox={usingClientEntryPoint:!1,Events:[Zo,Ya,Kl,Me,Se,Zd]},dl={findFiberByHostInstance:ha,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:dl.bundleType,version:dl.version,rendererPackageName:dl.rendererPackageName,rendererConfig:dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$i(n),n===null?null:n.stateNode},findFiberByHostInstance:dl.findFiberByHostInstance||sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{oe=Dc.inject(lx),le=Dc}catch{}}return Gi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox,Gi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(i))throw Error(t(200));return rx(n,i,null,a)},Gi.createRoot=function(n,i){if(!of(n))throw Error(t(299));var a=!1,c="",d=r0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=rf(n,1,!1,null,null,a,!1,c,d),n[cs]=i.current,$o(n.nodeType===8?n.parentNode:n),new af(i)},Gi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=$i(i),n=n===null?null:n.stateNode,n},Gi.flushSync=function(n){return Sa(n)},Gi.hydrate=function(n,i,a){if(!Nc(i))throw Error(t(200));return Ic(null,n,i,!0,a)},Gi.hydrateRoot=function(n,i,a){if(!of(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",P=r0;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(P=a.onRecoverableError)),i=n0(i,null,n,1,a??null,d,!1,g,P),n[cs]=i.current,$o(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Lc(i)},Gi.render=function(n,i,a){if(!Nc(i))throw Error(t(200));return Ic(null,n,i,!1,a)},Gi.unmountComponentAtNode=function(n){if(!Nc(n))throw Error(t(40));return n._reactRootContainer?(Sa(function(){Ic(null,null,n,!1,function(){n._reactRootContainer=null,n[cs]=null})}),!0):!1},Gi.unstable_batchedUpdates=Zd,Gi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Nc(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ic(n,i,a,!1,c)},Gi.version="18.3.1-next-f1338f8080-20240426",Gi}var p0;function yx(){if(p0)return uf.exports;p0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uf.exports=_x(),uf.exports}var m0;function Sx(){if(m0)return Uc;m0=1;var r=yx();return Uc.createRoot=r.createRoot,Uc.hydrateRoot=r.hydrateRoot,Uc}var Mx=Sx();const Ao="no_mires_abajo_playstore_v3",pu=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function Ex(r){return r&&pu.find(t=>t.code===r||t.flag===r)||pu[0]}const Ms=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puente de la Mujer",en:"Obelisk & Puente de la Mujer"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"Río de Janeiro",en:"Rio de Janeiro"},monumentName:{es:"Cristo Redentor Iluminado",en:"Illuminated Christ the Redeemer"},weatherLabel:{es:"Brasa Nocturna Carioca",en:"Carioca Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#4ade80",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"cristo"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Estatua de la Libertad y Empire State",en:"Statue of Liberty & Empire State"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#38bdf8",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"liberty_empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"willis"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben y London Eye Giratorio",en:"Big Ben & Rotating London Eye"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel y Faro Giratorio",en:"Eiffel Tower & Rotating Beacon"},weatherLabel:{es:"Haces de Luz Ámbar/Dorado",en:"Amber/Gold Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"golden_embers",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"cuatrotorres"},{index:9,flag:"🇷🇺",name:{es:"Moscú",en:"Moscow"},monumentName:{es:"Cúpulas de San Basilio con Estrellas",en:"Saint Basil's Onion Domes"},weatherLabel:{es:"Ventisca Invernal Rusa",en:"Russian Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#f43f5e",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"stbasil"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Las Tres Grandes Pirámides de Giza",en:"Three Great Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#fde047",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"mahanakhon"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Velas de la Ópera de Sídney",en:"Sydney Opera House Sails"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Torre de Tokio y Arco Torii Luminoso",en:"Tokyo Tower & Luminous Torii Gate"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#ef4444",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],hf=[{id:"vip_dubai",index:20,flag:"🇦🇪",name:{es:"Dubái Sky-Bridge VIP",en:"Dubai Sky-Bridge VIP"},desc:{es:"Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.",en:"Crossing between the tallest towers in the world with golden storm & x3 payout."},weatherLabel:{es:"Tormenta de Oro 24K VIP",en:"24K Gold Storm VIP"},weatherArchetype:"golden_embers",accentColor:"#fde047",winColor:"#fef08a",windStrength:1.25,monument:"burjkhalifa",rewardMult:3,gemBonus:25,gemUnlockCost:350,usdPrice:"$1.99 USD"},{id:"vip_vegas",index:21,flag:"🇺🇸",name:{es:"Las Vegas Neon Strip VIP",en:"Las Vegas Neon Strip VIP"},desc:{es:"Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.",en:"Hyper-bright casino lights and triple x3 LP & Gems rewards."},weatherLabel:{es:"Lluvia de Neón y Fichas VIP",en:"Casino Neon Rain VIP"},weatherArchetype:"cyber_rain",accentColor:"#f43f5e",winColor:"#fde047",windStrength:1.32,monument:"vegas_strip",rewardMult:3,gemBonus:35,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_monaco",index:22,flag:"🇲🇨",name:{es:"Mónaco Casino Royal VIP",en:"Monaco Casino Royal VIP"},desc:{es:"Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.",en:"Gala night over Monte Carlo bay with triple coin payouts."},weatherLabel:{es:"Destellos Dorados de Gala",en:"Royal Golden Sparkles"},weatherArchetype:"golden_embers",accentColor:"#fbbf24",winColor:"#fef9c3",windStrength:1.18,monument:"monaco_casino",rewardMult:3,gemBonus:30,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_alps",index:23,flag:"🇨🇭",name:{es:"Alpes Suizos Nocturnos VIP",en:"Swiss Alps Nocturnal VIP"},desc:{es:"Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.",en:"Extreme crossing between high-mountain cable cars under the Aurora Borealis."},weatherLabel:{es:"Aurora Boreal y Ventisca Alpina",en:"Aurora Borealis & Alpine Gale"},weatherArchetype:"blizzard",accentColor:"#4ade80",winColor:"#a5f3fc",windStrength:1.45,monument:"swiss_alps",rewardMult:3.5,gemBonus:45,gemUnlockCost:450,usdPrice:"$2.99 USD"}],Oc=[{id:"pole_basic",icon:"🦯",name:{es:"Barra de Acero Urbano",en:"Urban Steel Pole"},badge:{es:"GRATIS • BASE 1.0x",en:"FREE • BASE 1.0x"},desc:{es:"Estabilidad base 1.0x con núcleo láser cian estándar.",en:"Base 1.0x stability with standard cyan laser core."},currency:"free",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:0,stepDamp:0,catchRadiusBonus:0,scoreMult:1,coinMult:1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1,coreHex:14742270,glowHex:62206,tipHex:62206,hasGyroRings:!1},{id:"pole_carbon",icon:"⚡",name:{es:"Barra de Fibra de Carbono",en:"Carbon Fiber Pole"},badge:{es:"-18% GRAVEDAD • +LARGO 3D",en:"-18% GRAVITY • +3D LENGTH"},desc:{es:"Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.",en:"Reduces tipping gravity by 18% and extends the 3D pole length."},currency:"coins",cost:14500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.18,stepDamp:.1,catchRadiusBonus:.05,scoreMult:1.1,coinMult:1.1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.22,coreHex:14482663,glowHex:2282478,tipHex:4906624,hasGyroRings:!1},{id:"pole_gyro",icon:"🌀",name:{es:"Barra Giroscópica Neón",en:"Neon Gyroscopic Pole"},badge:{es:"-32% INCLINACIÓN • -30% PISADA",en:"-32% TILT • -30% STEP SWAY"},desc:{es:"Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.",en:"Reduces tilt by 32% and dampens fast-step lateral impact by 30%."},currency:"coins",cost:48e3,gemCost:290,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.32,stepDamp:.3,catchRadiusBonus:.1,scoreMult:1.25,coinMult:1.25,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.34,coreHex:15984895,glowHex:11032055,tipHex:62206,hasGyroRings:!0},{id:"pole_quantum",icon:"👑",name:{es:"👑 Barra Láser Cuántica",en:"👑 Quantum Laser Pole"},badge:{es:"EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS",en:"PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS"},desc:{es:"Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.",en:"Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier."},currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,gravityReduction:.5,stepDamp:.4,catchRadiusBonus:.25,scoreMult:1.5,coinMult:1.5,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.45,coreHex:16770278,glowHex:16007006,tipHex:62206,hasGyroRings:!0},{id:"pole_imperial",icon:"👑",name:{es:"👑 Barra Gravitatoria Imperial",en:"👑 Imperial Graviton Pole"},badge:{es:"PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0",en:"VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0"},desc:{es:"Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.",en:"Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier."},currency:"vip_or_usd",cost:900,gemCost:900,usdPrice:"$3.99 USD",isPro:!0,isVipOnly:!0,gravityReduction:.65,stepDamp:.55,catchRadiusBonus:.3,scoreMult:2,coinMult:2,noCatchRecoil:!0,autoSaveFall:!0,poleScaleX:1.56,coreHex:16710083,glowHex:16638023,tipHex:16096779,hasGyroRings:!0}],Es={urbano:{id:"urbano",key:"urbano",legacyId:"skin_1",styleType:"urbano",icon:"🧥",currency:"coins",price:0,cost:0,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1,bonusMult:1,multLabel:"x1",windResist:0,windReduction:0,gravityMod:1,gravityReduction:0,catchBonus:1,catchWindowBonus:0,recoveryBonus:0,stepDampBonus:0,freeShields:0,accessory:"capucha_urbana",torsoColor:"#1e293b",torsoEmissive:"#0b1829",torsoEmissiveIntensity:.35,limbsColor:"#0f172a",limbsEmissive:"#070d19",limbsEmissiveIntensity:.25,neonStripColor:"#38bdf8",emissiveIntensity:1.35,shoesColor:"#334155",soleColor:"#38bdf8",glovesColor:"#334155",wristColor:"#38bdf8",headColor:"#1e293b",headbandColor:"#38bdf8",ribbonColor:"#38bdf8",metalness:.35,roughness:.55,jacketHex:1976635,jacketEmissiveHex:727081,pantsHex:988970,bootHex:3359061,soleHex:3718648,gloveHex:3359061,wristHex:3718648,headHex:1976635,headbandHex:3718648,ribbonHex:3718648,dorsalHex:3718648,rimHex:3718648,rimStrength:1.15,hoodieColor:"#1e293b",pantsColor:"#0f172a",trimColor:"#38bdf8",shoeColor:"#334155",glowColor:"#38bdf8",paletteSwatches:["#1e293b","#0f172a","#38bdf8","#334155"],paletteLabel:{es:"Grafito + Cian Urbano",en:"Graphite + Urban Cyan"},goldTrail:!1,badge:{es:"GRATIS POR DEFECTO • MULTI x1",en:"FREE DEFAULT • x1 MULTI"},name:{es:"Urbano Callejero (x1)",en:"Street Urban (x1)"},desc:{es:"Traje gris grafito (#1e293b), pantalón cargo negro (#0f172a), líneas dorsales cian suave (#38bdf8), botas oscuras y capucha urbana.",en:"Graphite grey suit (#1e293b), black cargo pants (#0f172a), soft cyan dorsal lines (#38bdf8), dark boots and urban hood."}},night_runner:{id:"night_runner",key:"night_runner",legacyId:"skin_2",styleType:"night_runner",icon:"🏃",currency:"coins",price:8500,cost:8500,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1.2,bonusMult:1.2,multLabel:"x1.2",windResist:.1,windReduction:.1,gravityMod:.92,gravityReduction:.08,catchBonus:1.05,catchWindowBonus:.05,recoveryBonus:.1,stepDampBonus:.08,freeShields:0,accessory:"tiras_reflectivas_blancas",torsoColor:"#090d16",torsoEmissive:"#1e293b",torsoEmissiveIntensity:.45,limbsColor:"#090d16",limbsEmissive:"#111827",limbsEmissiveIntensity:.35,neonStripColor:"#ffffff",emissiveIntensity:2.2,shoesColor:"#a3e635",soleColor:"#ffffff",glovesColor:"#111827",wristColor:"#ffffff",headColor:"#090d16",headbandColor:"#ffffff",ribbonColor:"#ffffff",metalness:.45,roughness:.35,jacketHex:593174,jacketEmissiveHex:1976635,pantsHex:593174,bootHex:10741301,soleHex:16777215,gloveHex:1120295,wristHex:16777215,headHex:593174,headbandHex:16777215,ribbonHex:16777215,dorsalHex:16777215,rimHex:10741301,rimStrength:1.45,hoodieColor:"#090d16",pantsColor:"#090d16",trimColor:"#ffffff",shoeColor:"#a3e635",glowColor:"#a3e635",paletteSwatches:["#090d16","#ffffff","#a3e635"],paletteLabel:{es:"Reflectivo Blanco + Lima Flúor",en:"Reflective White + Fluor Lime"},goldTrail:!1,badge:{es:"MULTI x1.2 • -10% VIENTO • -8% GRAVEDAD • +5% CAPTURA",en:"x1.2 MULTI • -10% WIND • -8% GRAVITY • +5% CATCH"},name:{es:"Night Runner (x1.2)",en:"Night Runner (x1.2)"},desc:{es:"Rompevientos negro azabache (#090d16), tiras reflectivas blancas puras ultra-brillantes (#ffffff) en espalda, brazos y piernas, zapatillas verde lima flúor (#a3e635) y vincha blanca.",en:"Jet-black windbreaker (#090d16), ultra-bright white reflective strips (#ffffff) on back, arms & legs, fluor lime sneakers (#a3e635) and white headband."}},infiltrado:{id:"infiltrado",key:"infiltrado",legacyId:"skin_3",styleType:"infiltrado",icon:"⚡",currency:"coins",price:25e3,cost:25e3,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1.5,bonusMult:1.5,multLabel:"x1.5",windResist:.2,windReduction:.2,gravityMod:.88,gravityReduction:.12,catchBonus:1.1,catchWindowBonus:.1,recoveryBonus:.12,stepDampBonus:.15,freeShields:0,accessory:"arnes_x_tactico_cian",torsoColor:"#05070b",torsoEmissive:"#003554",torsoEmissiveIntensity:.65,limbsColor:"#05070b",limbsEmissive:"#00243d",limbsEmissiveIntensity:.5,neonStripColor:"#00f2fe",emissiveIntensity:2.5,shoesColor:"#081426",soleColor:"#00f2fe",glovesColor:"#081426",wristColor:"#00f2fe",headColor:"#05070b",headbandColor:"#00f2fe",ribbonColor:"#00f2fe",metalness:.6,roughness:.3,jacketHex:329483,jacketEmissiveHex:13652,pantsHex:329483,bootHex:529446,soleHex:62206,gloveHex:529446,wristHex:62206,headHex:329483,headbandHex:62206,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.6,hoodieColor:"#05070b",pantsColor:"#05070b",trimColor:"#00f2fe",shoeColor:"#00f2fe",glowColor:"#00f2fe",paletteSwatches:["#05070b","#00f2fe","#0284c7"],paletteLabel:{es:"Arnés Táctico X + Neón Cian",en:"Tactical X-Harness + Cyan Neon"},goldTrail:!1,badge:{es:"MULTI x1.5 • -20% VIENTO • -12% GRAVEDAD • +10% CAPTURA",en:"x1.5 MULTI • -20% WIND • -12% GRAVITY • +10% CATCH"},name:{es:"Infiltrado Táctico (x1.5)",en:"Tactical Infiltrator (x1.5)"},desc:{es:"Traje táctico negro mate (#05070b), arnés cruzado en X en la espalda de neón cian intenso (#00f2fe), hombreras tácticas, visor nocturno cian y talones/muñecas cian luminosos.",en:"Matte black tactical suit (#05070b), intense cyan neon X-harness (#00f2fe) on the back, tactical shoulder pads, cyan night visor and glowing cyan heels/wrists."}},ilusionista:{id:"ilusionista",key:"ilusionista",legacyId:"skin_4",styleType:"ilusionista",icon:"🎩",currency:"coins",price:6e4,cost:6e4,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:2,bonusMult:2,multLabel:"x2",windResist:.25,windReduction:.25,gravityMod:.85,gravityReduction:.15,catchBonus:1.25,catchWindowBonus:.25,recoveryBonus:.15,stepDampBonus:.2,freeShields:0,accessory:"chaleco_purpura_guantes_plata",torsoColor:"#2e1065",torsoEmissive:"#581c87",torsoEmissiveIntensity:.85,limbsColor:"#1e0a45",limbsEmissive:"#3b0764",limbsEmissiveIntensity:.65,neonStripColor:"#c084fc",emissiveIntensity:2.4,shoesColor:"#2e1065",soleColor:"#c084fc",glovesColor:"#f8fafc",wristColor:"#f8fafc",headColor:"#2e1065",headbandColor:"#f8fafc",ribbonColor:"#c084fc",metalness:.55,roughness:.28,jacketHex:3018853,jacketEmissiveHex:5774471,pantsHex:1968709,bootHex:3018853,soleHex:12616956,gloveHex:16317180,wristHex:16317180,headHex:3018853,headbandHex:16317180,ribbonHex:12616956,dorsalHex:12616956,rimHex:12616956,rimStrength:1.65,hoodieColor:"#2e1065",pantsColor:"#1e0a45",trimColor:"#c084fc",shoeColor:"#c084fc",glowColor:"#c084fc",paletteSwatches:["#2e1065","#c084fc","#f8fafc","#a855f7"],paletteLabel:{es:"Púrpura Imperial + Guantes Plata",en:"Imperial Purple + Silver Gloves"},goldTrail:!1,badge:{es:"MULTI x2.0 • -25% VIENTO • -15% GRAVEDAD • +25% CAPTURA",en:"x2.0 MULTI • -25% WIND • -15% GRAVITY • +25% CATCH"},name:{es:"Ilusionista de Altura (x2)",en:"High-Wire Illusionist (x2)"},desc:{es:"Chaleco sastrero púrpura imperial oscuro (#2e1065), líneas y circuito dorsal en violeta neón (#c084fc) y plata (#f8fafc), cinta larga violeta al viento y guantes blancos/plateados brillantes en las manos.",en:"Dark imperial purple tailored vest (#2e1065), neon violet (#c084fc) & silver (#f8fafc) dorsal circuit, long violet wind ribbon and bright silver/white gloves."}},shinobi:{id:"shinobi",key:"shinobi",legacyId:"skin_5",styleType:"shinobi",icon:"🥷",currency:"coins",price:135e3,cost:135e3,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:3,bonusMult:3,multLabel:"x3",windResist:.35,windReduction:.35,gravityMod:.65,gravityReduction:.35,catchBonus:1.3,catchWindowBonus:.3,recoveryBonus:.2,stepDampBonus:.35,freeShields:0,accessory:"single_katana_3d",torsoColor:"#18060c",torsoEmissive:"#4c0519",torsoEmissiveIntensity:.85,limbsColor:"#120409",limbsEmissive:"#3b0413",limbsEmissiveIntensity:.65,neonStripColor:"#ff0055",emissiveIntensity:2.8,shoesColor:"#ef4444",soleColor:"#ff0055",glovesColor:"#1f0810",wristColor:"#ff0055",headColor:"#18060c",headbandColor:"#ff0055",ribbonColor:"#ff0055",metalness:.65,roughness:.25,jacketHex:1574412,jacketEmissiveHex:4982041,pantsHex:1180681,bootHex:15680580,soleHex:16711765,gloveHex:2033680,wristHex:16711765,headHex:1574412,headbandHex:16711765,ribbonHex:16711765,dorsalHex:16711765,rimHex:16711765,rimStrength:1.75,hoodieColor:"#18060c",pantsColor:"#120409",trimColor:"#ff0055",shoeColor:"#ef4444",glowColor:"#ff0055",paletteSwatches:["#18060c","#ff0055","#ef4444","#fbbf24"],paletteLabel:{es:"Carmesí Cyber + 1 Katana 3D",en:"Cyber Crimson + 1 Back Katana 3D"},goldTrail:!1,badge:{es:"MULTI x3.0 • -35% VIENTO • -35% GRAVEDAD • +30% CAPTURA",en:"x3.0 MULTI • -35% WIND • -35% GRAVITY • +30% CATCH"},name:{es:"Cyber-Shinobi Tokio (x3)",en:"Cyber-Shinobi Tokyo (x3)"},desc:{es:"Armadura ninja negra/carmesí (#18060c), circuito dorsal rojo láser incandescente (#ff0055), 1 Katana 3D cruzada en la espalda con vaina negra y empuñadura roja, bufanda roja larga al viento y botas magnéticas rojas (#ef4444).",en:"Black/crimson ninja armor (#18060c), glowing laser-red dorsal circuit (#ff0055), 1 3D Katana crossed on the back with black scabbard & red hilt, long red scarf and red magnetic boots (#ef4444)."}},ronin_gold:{id:"ronin_gold",key:"ronin_gold",legacyId:"skin_6",styleType:"ronin_gold",icon:"⚔️",currency:"usd",price:450,cost:450,gemCost:450,priceUSD:"$1.99 USD",usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,proTag:{es:"👑 EXCLUSIVO PRO",en:"👑 PRO EXCLUSIVE"},mult:4,bonusMult:4,multLabel:"x4",windResist:.5,windReduction:.5,gravityMod:.6,gravityReduction:.4,catchBonus:1.35,catchWindowBonus:.35,recoveryBonus:.25,stepDampBonus:.4,freeShields:0,accessory:"dual_gold_katanas_samurai_shoulders",torsoColor:"#0c0a09",torsoEmissive:"#78350f",torsoEmissiveIntensity:.9,limbsColor:"#0c0a09",limbsEmissive:"#451a03",limbsEmissiveIntensity:.7,neonStripColor:"#f59e0b",emissiveIntensity:2.6,shoesColor:"#f59e0b",soleColor:"#fef08a",glovesColor:"#1c1917",wristColor:"#f59e0b",headColor:"#0c0a09",headbandColor:"#f59e0b",ribbonColor:"#fbbf24",metalness:.82,roughness:.2,jacketHex:789001,jacketEmissiveHex:7877903,pantsHex:789001,bootHex:16096779,soleHex:16707722,gloveHex:1841431,wristHex:16096779,headHex:789001,headbandHex:16096779,ribbonHex:16498468,dorsalHex:16096779,rimHex:16096779,rimStrength:1.85,hoodieColor:"#0c0a09",pantsColor:"#0c0a09",trimColor:"#f59e0b",shoeColor:"#f59e0b",glowColor:"#f59e0b",paletteSwatches:["#0c0a09","#f59e0b","#fbbf24","#fef08a"],paletteLabel:{es:"Laca Negra + 2 Katanas Oro",en:"Black Lacquer + Dual Gold Katanas"},goldTrail:!1,badge:{es:"👑 EXCLUSIVO PRO • MULTI x4 • -50% VIENTO • -40% GRAVEDAD • +35% CAPTURA",en:"👑 PRO EXCLUSIVE • x4 MULTI • -50% WIND • -40% GRAVITY • +35% CATCH"},name:{es:"👑 Ronin Imperial Dorado (x4)",en:"👑 Golden Imperial Ronin (x4)"},desc:{es:"Armadura samurái negra laqueada (#0c0a09) con placas y bordes de oro radiante (#f59e0b), hombreras samurái 3D doradas, 2 Katanas Doradas cruzadas en X en la espalda y botas doradas.",en:"Black lacquered samurai armor (#0c0a09) with radiant gold plates (#f59e0b), 3D golden samurai shoulder armor, 2 Golden Katanas crossed in X on the back and golden boots."}},quantum_specter:{id:"quantum_specter",key:"quantum_specter",legacyId:"skin_7",styleType:"quantum_specter",icon:"🌌",currency:"usd",price:680,cost:680,gemCost:680,priceUSD:"$2.99 USD",usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!1,proTag:{es:"👑 EXCLUSIVO PRO",en:"👑 PRO EXCLUSIVE"},mult:5,bonusMult:5,multLabel:"x5",windResist:.6,windReduction:.6,gravityMod:.55,gravityReduction:.45,catchBonus:1.5,catchWindowBonus:.5,recoveryBonus:.3,stepDampBonus:.45,freeShields:0,accessory:"quantum_halo_3d",torsoColor:"#0284c7",torsoEmissive:"#00f2fe",torsoEmissiveIntensity:1.35,limbsColor:"#0369a1",limbsEmissive:"#00f2fe",limbsEmissiveIntensity:1.15,neonStripColor:"#00f2fe",emissiveIntensity:3.2,shoesColor:"#00f2fe",soleColor:"#ffffff",glovesColor:"#00f2fe",wristColor:"#ffffff",headColor:"#0284c7",headbandColor:"#ffffff",ribbonColor:"#00f2fe",metalness:.78,roughness:.16,jacketHex:165063,jacketEmissiveHex:62206,pantsHex:223649,bootHex:62206,soleHex:16777215,gloveHex:62206,wristHex:16777215,headHex:165063,headbandHex:16777215,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.95,hoodieColor:"#0284c7",pantsColor:"#0369a1",trimColor:"#00f2fe",shoeColor:"#00f2fe",glowColor:"#00f2fe",paletteSwatches:["#0284c7","#00f2fe","#38bdf8","#ffffff"],paletteLabel:{es:"Plasma Cian + Halo Holográfico 3D",en:"Cyan Plasma + 3D Holographic Halo"},goldTrail:!1,badge:{es:"👑 EXCLUSIVO PRO • MULTI x5 • -60% VIENTO • IMÁN MALABARES (+50% ARO)",en:"👑 PRO EXCLUSIVE • x5 MULTI • -60% WIND • JUGGLE MAGNET (+50% RING)"},name:{es:"👑 Espectro Cuántico (x5)",en:"👑 Quantum Specter (x5)"},desc:{es:"Cuerpo cibernético translúcido de energía azul eléctrica (#0284c7) y plasma cian incandescente (#00f2fe), anillo/halo holográfico 3D flotando detrás de la espalda, manos y pies de plasma puro.",en:"Translucent cybernetic body of electric blue energy (#0284c7) & incandescent cyan plasma (#00f2fe), 3D holographic halo floating behind the back, pure plasma hands and feet."}},immortal_legend:{id:"immortal_legend",key:"immortal_legend",legacyId:"skin_8",styleType:"immortal_legend",icon:"👑",currency:"usd",price:1100,cost:1100,gemCost:1100,priceUSD:"$4.99 USD",usdPrice:"$4.99 USD",isPro:!0,isVipOnly:!0,proTag:{es:"👑 EXCLUSIVO PRO / VIP",en:"👑 PRO / VIP EXCLUSIVE"},mult:8,bonusMult:8,multLabel:"x8",windResist:.7,windReduction:.7,gravityMod:.45,gravityReduction:.55,catchBonus:1.6,catchWindowBonus:.6,recoveryBonus:.4,stepDampBonus:.55,freeShields:1,accessory:"immortal_crown_3d_gold_trail",torsoColor:"#fbbf24",torsoEmissive:"#f59e0b",torsoEmissiveIntensity:1.45,limbsColor:"#fbbf24",limbsEmissive:"#d97706",limbsEmissiveIntensity:1.25,neonStripColor:"#fef08a",emissiveIntensity:3.4,shoesColor:"#fef08a",soleColor:"#ffffff",glovesColor:"#fef08a",wristColor:"#ffffff",headColor:"#fbbf24",headbandColor:"#fef08a",ribbonColor:"#fef08a",metalness:.95,roughness:.15,jacketHex:16498468,jacketEmissiveHex:16096779,pantsHex:16498468,bootHex:16707722,soleHex:16777215,gloveHex:16707722,wristHex:16777215,headHex:16498468,headbandHex:16707722,ribbonHex:16707722,dorsalHex:16707722,rimHex:16707722,rimStrength:2.1,hoodieColor:"#fbbf24",pantsColor:"#f59e0b",trimColor:"#fef08a",shoeColor:"#fef08a",glowColor:"#fde047",paletteSwatches:["#fbbf24","#fef08a","#f59e0b","#ffffff"],paletteLabel:{es:"Oro Líquido 24K + Corona Solar 3D",en:"24K Liquid Gold + 3D Solar Crown"},goldTrail:!0,badge:{es:"👑 EXCLUSIVO PRO / VIP • MULTI x8 • -70% VIENTO • -55% GRAVEDAD • +1 ESCUDO GRATIS",en:"👑 PRO / VIP EXCLUSIVE • x8 MULTI • -70% WIND • -55% GRAVITY • +1 FREE SHIELD"},name:{es:"👑 Leyenda Dorada Inmortal (x8)",en:"👑 Immortal Golden Legend (x8)"},desc:{es:"Cuerpo entero bañado en oro líquido metálico brillante (#fbbf24 / #fef08a), corona/halo solar 3D sobre la cabeza, hombreras imperiales, cinta de fuego dorado, estela continua de partículas de oro y 1 Escudo Anti-Caída gratis por nivel.",en:"Full body bathed in radiant metallic liquid gold (#fbbf24 / #fef08a), 3D solar crown/halo above the head, imperial shoulders, golden fire ribbon, continuous gold particle trail & 1 free Anti-Fall Shield per level."}}},bg={default:"urbano",urbano:"urbano",skin_1:"urbano",night_runner:"night_runner",skin_2:"night_runner",infiltrado:"infiltrado",skin_3:"infiltrado",ilusionista:"ilusionista",skin_4:"ilusionista",shinobi:"shinobi",skin_5:"shinobi",ronin_gold:"ronin_gold",skin_6:"ronin_gold",quantum_specter:"quantum_specter",skin_7:"quantum_specter",samurai:"ronin_gold",leyenda_dorada:"immortal_legend",immortal_legend:"immortal_legend",skin_8:"immortal_legend"};function ea(r){if(!r||typeof r!="string")return"urbano";const e=bg[r]||r;return Es[e]?e:"urbano"}const Ii=r=>{const e=typeof r=="string"?bg[r]||r:"urbano",t=Es[e]||Es[r]||Object.values(Es).find(s=>s.id===r||s.legacyId===r)||Es.urbano||Object.values(Es)[0];return t?{...t,visual:t}:{id:"urbano",key:"urbano",mult:1,bonusMult:1}};function wx(r){return Ii(r)}const g0=Object.values(Es).map(r=>({...r,visual:r}));function hl(r){return Ii(r)}const Fc=[{id:"mult_x2_coins",icon:"🪙",name:{es:"Multiplicador x2 de Monedas",en:"x2 Permanent Coin Multiplier"},badge:{es:"MONEDAS DEL JUEGO • x2 🪙",en:"IN-GAME COINS • x2 🪙"},desc:{es:"Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.",en:"Permanently doubles all coins earned from juggling and clearing rooftops."},currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,coinMult:2,lpMult:1},{id:"mult_x3_pro",icon:"👑",name:{es:"👑 Multiplicador x3 Pro de LP y Monedas",en:"👑 x3 Pro LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙",en:"PRO / VIP PASS • x3 LP & 🪙"},desc:{es:"Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.",en:"Permanently triples your League Points (LP) for the Online Leaderboard and your Coins."},currency:"vip_or_usd",cost:600,gemCost:600,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!0,coinMult:3,lpMult:3},{id:"mult_x5_ultra",icon:"🚀",name:{es:"👑 Multiplicador x5 Ultra de LP y Monedas",en:"👑 x5 Ultra LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PACK PRO • x5 LP Y 🪙",en:"PRO PACK EXCLUSIVE • x5 LP & 🪙"},desc:{es:"Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.",en:"Maximum x5 boost to Online League Points and Coins across all cities and levels."},currency:"gems_or_usd",cost:1200,gemCost:1200,usdPrice:"$5.99 USD",isPro:!0,isVipOnly:!1,coinMult:5,lpMult:5}],bl=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,currency:"coins",cost:0,gemCost:0,name:{es:"Esferas Incandescentes",en:"Incandescent Orbs"},color:"#fde047"},{id:"torches",icon:"🔥",mult:2,unlockLevel:6,currency:"coins",cost:18500,gemCost:160,name:{es:"Antorchas de Plasma (x2)",en:"Plasma Torches (x2)"},color:"#f97316"},{id:"knives",icon:"🔪",mult:3,unlockLevel:16,currency:"coins",cost:42e3,gemCost:280,name:{es:"Dagas Láser Cian (x3)",en:"Cyan Laser Daggers (x3)"},color:"#00f2fe"},{id:"chainsaws",icon:"🪚",mult:5,unlockLevel:31,currency:"gems",cost:480,gemCost:480,name:{es:"👑 Sierras Neón Pro (x5)",en:"👑 Pro Neon Saws (x5)"},color:"#ef4444"},{id:"goldbars",icon:"🪙",mult:8,unlockLevel:60,currency:"gems",cost:950,gemCost:950,name:{es:"👑 Orbes Cuánticos 24K (x8)",en:"👑 24K Quantum Orbs (x8)"},color:"#fde047"}],bx=[{id:"pole",icon:"⚖️",maxLevel:10,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Núcleo de Inercia",en:"Inertia Core"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"boots",icon:"🥾",maxLevel:10,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"gloves",icon:"🧤",maxLevel:10,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}}];function v0(r){const e=Math.max(0,Math.min(10,r||0));if(e>=10)return{isMax:!0,isProTier:!0,coinCost:0,gemCost:0};if(e<5)return{isMax:!1,isProTier:!1,coinCost:Math.round(850*Math.pow(2.45,e)),gemCost:0};const t=e-5;return{isMax:!1,isProTier:!0,coinCost:0,gemCost:Math.round(140*Math.pow(1.45,t))}}const Tx=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],Ax=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],Rx=[{id:"bundle_vip_pass",icon:"👑",isVipPassBundle:!0,gems:1500,coins:5e4,leaguePts:1500,popular:!0,tag:"👑 ACTIVAR VIP ($4.99)",name:{es:"👑 PASE VIP PRO TEMPORADA",en:"👑 SEASON VIP PRO PASS"},perks:{es:["🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería","👑 Desbloquea las 4 Ciudades Exclusivas VIP","🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)","🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)","+1.500 💎 Gemas y +50.000 🪙 Monedas al instante"],en:["🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10","👑 Unlocks all 4 Exclusive VIP Cities","🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)","🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)","+1,500 💎 Gems & +50,000 🪙 Coins instantly"]}},{id:"bundle_starter",icon:"⚡",gems:450,coins:18e3,leaguePts:300,popular:!1,tag:"💎 PACK PRO ($1.99)",name:{es:"Cofre Cuántico de Gemas",en:"Quantum Gem Chest"},perks:{es:["+450 💎 Gemas Premium + 18.000 🪙 Monedas","Ideal para Barra Láser Cuántica o Mejoras Nv. 6+"],en:["+450 💎 Premium Gems + 18,000 🪙 Coins","Ideal for Quantum Laser Pole or Lvl 6+ Upgrades"]}},{id:"bundle_legend",icon:"🚀",gems:1400,coins:85e3,leaguePts:2500,popular:!0,tag:"👑 PACK ULTRA ($5.99)",name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+1.400 💎 Gemas + 85.000 🪙 Monedas","Alcanza para Multiplicador x5 Ultra + Samurái Neón"],en:["+1,400 💎 Gems + 85,000 🪙 Coins","Enough for x5 Ultra Multiplier + Neon Samurai"]}}],x0={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",subtitle:"Campeonato Mundial de Equilibrio 3D",officialEdition:"🏆 EDICIÓN CAMPEONATO MUNDIAL 3D",worldTour:"TOUR MUNDIAL",city:"CIUDAD",bestScore:"MEJOR PUNTAJE",playNow:"SALTAR AL CABLE",freeCoinsAd:"+1.500 🪙 GRATIS",freeGemsAd:"+35 💎 GRATIS",equipped:"EQUIPADO",equip:"EQUIPAR",maxLevel:"MÁX (10/10)",propsTitle:"OBJETOS DE MALABARES",skinsTitle:"VESTUARIO Y ASPECTOS 3D",polesTitle:"⚖️ VARAS DE EQUILIBRIO 3D",seasonTitle:"TEMPORADA OFICIAL",leagueTitle:"RANKING MUNDIAL EN VIVO",seasonPrizes:"PREMIOS DE TEMPORADA",claimed:"RECLAMADO",claim:"RECLAMAR",storeTitle:"TIENDA VIP & COFRES PRO",storeSubtitle:"Desbloqueá el Pase VIP Pro, Multiplicadores Permanentes y Gemas al instante.",multipliersTitle:"🚀 MULTIPLICADORES PERMANENTES",pause:"PARTIDA EN PAUSA",resume:"REANUDAR PARTIDA",backToMenu:"VOLVER AL MENÚ",victoryTitle:"🏆 ¡AZOTEA ALCANZADA!",score:"Puntaje Final",coinsEarned:"Monedas Ganadas",leaguePointsEarned:"Puntos de Liga (LP)",doubleRewardsAd:"🎬 DUPLICAR RECOMPENSAS x2",fallTitle:"💥 ¡PERDISTE EL EQUILIBRIO!",fallSub:"El viento de altura te venció a pocos metros de la meta.",reviveAd:"⚡ SEGUNDA OPORTUNIDAD (CONTINUAR AQUÍ)",retry:"REINTENTAR NIVEL",adWatching:"CARGANDO BONIFICACIÓN VIP...",adSeconds:"Acreditando recompensa en",adCollect:"✅ ACREDITAR BONIFICACIÓN",leanLeft:"INCLINAR IZQ",leanRight:"INCLINAR DER",leftHand:"MANO IZQ",rightHand:"MANO DER",tabs:{home:"Inicio",armory:"Armería",skins:"Aspectos",league:"Liga",store:"Tienda"},installApp:"📲 Instalar",leagueBanner:"LIGA DE TEMPORADA",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Tienda VIP",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",skinsBtn:"Aspectos",level:"Nivel",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",shieldSavedPopup:"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",levelCleared:"¡AZOTEA ALCANZADA!",nextLevel:"SIGUIENTE NIVEL",armoryTitle:"ARMERÍA PRO, BARRAS Y MULTIPLICADORES",armorySub:"Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",proUpgradeBtn:"👑 MEJORA PRO — GEMAS / PASE VIP",polesSectionTitle:"⚖️ VARAS DE EQUILIBRIO (BARRAS)",multipliersSectionTitle:"🚀 MULTIPLICADORES PERMANENTES",vipCitiesTitle:"👑 CIUDADES EXCLUSIVAS VIP",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.",shopTitle:"👑 TIENDA PRO & PASE VIP DE TEMPORADA",shopSub:"Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",subtitle:"3D World Tightrope Championship",officialEdition:"🏆 3D WORLD CHAMPIONSHIP EDITION",worldTour:"WORLD TOUR",city:"CITY",bestScore:"BEST SCORE",playNow:"STEP ON THE WIRE",freeCoinsAd:"+1,500 🪙 FREE",freeGemsAd:"+35 💎 FREE",equipped:"EQUIPPED",equip:"EQUIP",maxLevel:"MAX (10/10)",propsTitle:"JUGGLING PROPS",skinsTitle:"3D OUTFITS & SKINS",polesTitle:"⚖️ 3D BALANCE POLES",seasonTitle:"OFFICIAL SEASON",leagueTitle:"LIVE WORLD LEADERBOARD",seasonPrizes:"SEASON REWARDS",claimed:"CLAIMED",claim:"CLAIM",storeTitle:"VIP STORE & PRO CHESTS",storeSubtitle:"Unlock the VIP Pro Pass, Permanent Multipliers & Gems instantly.",multipliersTitle:"🚀 PERMANENT MULTIPLIERS",pause:"GAME PAUSED",resume:"RESUME GAME",backToMenu:"BACK TO MENU",victoryTitle:"🏆 ROOFTOP REACHED!",score:"Final Score",coinsEarned:"Coins Earned",leaguePointsEarned:"League Points (LP)",doubleRewardsAd:"🎬 DOUBLE REWARDS x2",fallTitle:"💥 LOST YOUR BALANCE!",fallSub:"High-altitude gusts knocked you off just meters from the goal.",reviveAd:"⚡ SECOND CHANCE (CONTINUE HERE)",retry:"RETRY LEVEL",adWatching:"LOADING VIP BONUS...",adSeconds:"Crediting reward in",adCollect:"✅ COLLECT REWARD",leanLeft:"LEAN LEFT",leanRight:"LEAN RIGHT",leftHand:"LEFT HAND",rightHand:"RIGHT HAND",tabs:{home:"Home",armory:"Armory",skins:"Skins",league:"League",store:"Shop"},installApp:"📲 Install",leagueBanner:"SEASON LEAGUE",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"VIP Shop",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",skinsBtn:"Skins",level:"Level",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",shieldSavedPopup:"🛡️ ANTI-FALL SHIELD ACTIVATED!",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",levelCleared:"ROOFTOP REACHED!",nextLevel:"NEXT LEVEL",armoryTitle:"PRO ARMORY, POLES & MULTIPLIERS",armorySub:"Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",proUpgradeBtn:"👑 PRO UPGRADE — GEMS / VIP PASS",polesSectionTitle:"⚖️ BALANCE POLES (BARS)",multipliersSectionTitle:"🚀 PERMANENT MULTIPLIERS",vipCitiesTitle:"👑 EXCLUSIVE VIP CITIES",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.",shopTitle:"👑 PRO SHOP & SEASON VIP PASS",shopSub:"Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",backToLobbyBtn:"BACK TO MAIN MENU",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",youLabel:"YOU (Tightrope Walker)"}};for(let r=0;r<Ms.length;r++){const e=Ms[r];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}for(let r=0;r<g0.length;r++){const e=g0[r];e.coatColor=e.coatColor||e.hoodieColor}for(let r=0;r<bl.length;r++){const e=bl[r];e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function Tg(r){const e=Math.max(1,Math.min(100,r||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function Cx(r){const e=Math.max(1,Math.min(100,r||1)),t=Tg(e),s=100+(e-1)*5;return Math.round(s*t)}function pf(r,e=null){const t=Math.max(1,Math.min(100,r||1)),s=Math.min(19,Math.max(0,Math.floor((t-1)/5))),o=e||Ms[s],l=(t-1)%5+1,u=Tg(t),f=5,m=Number((f*u).toFixed(3)),p=Cx(t),y=t<4?0:Number((u*(1+(t-4)*.018)).toFixed(3)),S=Number((u*1.15).toFixed(3)),x=Number((.62*S).toFixed(3)),M=Number(Math.max(.14,.28-(t-1)/99*.14).toFixed(4)),E=t<4?6:Number(Math.max(4.5,6-(t-4)/96*1.5).toFixed(2)),C=.32+o.windStrength*.45+l*.045,_=1.08+t/100*.92,v=t<=15?2:t<=55?3:4,A=t<=3?0:t<=10?1:t<=25?2:t<=50?3:4,F=Number((.028+Math.max(0,u-1)*.068).toFixed(4)),R=Number((.036+Math.max(0,u-1)*.064).toFixed(4));return{level:t,cityIndex:e?e.index:s,city:o,isVipCity:!!e,stageInCity:l,speedPhase:A,walkSpeedMultiplier:u,baseWalkSpeed:f,walkSpeed:u,walkSpeedMeters:m,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:y,juggleSpeedMultiplier:S,juggleBaseSpeed:x,juggleSpeed:x,catchWindow:M,gravityFactor:_,gravity:_*2.1,windMax:C,windBase:C,windChangeFreq:E,gustInterval:Math.max(.75,2.2-A*.32),windBaseForce:C,gravityInstability:_,defaultObjects:v,ballCount:v,stepSwayImpulse:F,catchRecoilImpulse:R}}const _0=[523.25,587.33,659.25,783.99,880,1046.5];class Px{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),s=this.ctx.createBuffer(1,t,e),o=s.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=s}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const s=this.ctx.currentTime,o=Math.max(0,(e-1)%_0.length),l=e>=12?1.25:1,u=_0[o]*l,f=this.ctx.createOscillator(),m=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",m.type="sine",f.frequency.setValueAtTime(u,s),m.frequency.setValueAtTime(u,s),p.gain.setValueAtTime(.001,s),p.gain.linearRampToValueAtTime(.18,s+.015),p.gain.exponentialRampToValueAtTime(.06,s+.07),p.gain.exponentialRampToValueAtTime(.001,s+.18),f.connect(p),m.connect(p),p.connect(this.ctx.destination),f.start(s),m.start(s),f.stop(s+.19),m.stop(s+.19),t){const y=this.ctx.createOscillator(),S=this.ctx.createGain();y.type="sine",y.frequency.setValueAtTime(u*2,s),y.frequency.exponentialRampToValueAtTime(u*2.04,s+.18),S.gain.setValueAtTime(.001,s),S.gain.linearRampToValueAtTime(.14,s+.012),S.gain.exponentialRampToValueAtTime(.001,s+.18),y.connect(S),S.connect(this.ctx.destination),y.start(s),y.stop(s+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.Q.setValueAtTime(6.5,e),s.frequency.setValueAtTime(310,e),s.frequency.exponentialRampToValueAtTime(920,e+.42),s.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(s),s.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(65,t),s.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.045),l.gain.setValueAtTime(.14,e+s*.045),l.gain.exponentialRampToValueAtTime(.001,e+s*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.045),o.stop(e+s*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.085),l.gain.setValueAtTime(.17,e+s*.085),l.gain.exponentialRampToValueAtTime(.001,e+s*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.085),o.stop(e+s*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],s=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(s[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playHookRescue(){this.playGrapple()}playNearMiss(){this.playNearMissSave()}playFallScream(){this.playFall()}playFrenzyStart(){this.playVictory()}playMissAlert(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,45]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(195,e),t.frequency.exponentialRampToValueAtTime(98,e+.22),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.25)}playFootstep(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine";const l=92+Math.min(45,(e-1)*30);s.frequency.setValueAtTime(l,t),s.frequency.exponentialRampToValueAtTime(42,t+.065),o.gain.setValueAtTime(.09,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.075)}updateWind(e=0){Math.abs(e)>.85&&Math.random()<.015&&this.playWindGust()}}const It=new Px,Lx=pu;function Ro(r){return Ex(r).flag}const Nx="nma_live_leaderboard_cache_v2";async function pl(r,e,t,s=1){const o=(r||"Equilibrista").trim().slice(0,15),l=(e||"AR").trim(),u=Ro(l),f={id:"player_self",name:o,country:l,flag:u,score:Math.max(0,Math.floor(t||0)),lp:Math.max(0,Math.floor(t||0)),level:Math.max(1,s||1),updatedAt:Date.now(),isPlayer:!0};try{localStorage.setItem(Nx,JSON.stringify(f))}catch{}return f}async function y0(r){const e=((r==null?void 0:r.name)||"Equilibrista").trim().slice(0,15),t=((r==null?void 0:r.country)||"AR").trim(),s=Ro(t),o=Math.max(0,Math.floor((r==null?void 0:r.score)??320)),l=Math.max(1,(r==null?void 0:r.level)||1),u=Math.floor(Date.now()/45e3),f=Tx.map((y,S)=>{const x=(u+S*7)%11*15,M=y.baseLp+x;return{id:y.id,name:y.name,country:y.country,flag:y.flag,score:M,lp:M,level:Math.max(5,Math.min(100,Math.floor(M/180))),badge:y.badge,isPlayer:!1}}),m={id:"player_self",name:e,country:t,flag:s,score:o,lp:o,level:l,badge:"⚡",isPlayer:!0};return[...f,m].sort((y,S)=>S.lp-y.lp)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="186",Ix=0,S0=1,Dx=2,mu=1,Ux=2,El=3,Ia=0,qi=1,Xi=2,bs=0,Tl=1,Wi=2,M0=3,E0=4,Ox=5,To=100,Fx=101,kx=102,Bx=103,zx=104,Vx=200,Gx=201,Hx=202,Wx=203,Ag=204,Rg=205,Xx=206,qx=207,jx=208,$x=209,Yx=210,Kx=211,Zx=212,Jx=213,Qx=214,Kf=0,Zf=1,Jf=2,Al=3,Qf=4,eh=5,th=6,nh=7,Cg=0,e_=1,t_=2,Qr=0,Pg=1,Lg=2,Ng=3,Vh=4,Ig=5,Dg=6,Ug=7,Og=300,Da=301,No=302,mf=303,gf=304,Pu=306,Ua=1e3,ws=1001,ih=1002,hi=1003,n_=1004,kc=1005,Mi=1006,vf=1007,La=1008,ir=1009,Fg=1010,kg=1011,Rl=1012,Gh=1013,es=1014,Zr=1015,ts=1016,Hh=1017,Wh=1018,Cl=1020,Bg=35902,zg=35899,Vg=1021,Gg=1022,Ur=1023,As=1026,Na=1027,Hg=1028,Xh=1029,Oa=1030,qh=1031,jh=1033,gu=33776,vu=33777,xu=33778,_u=33779,rh=35840,sh=35841,ah=35842,oh=35843,lh=36196,ch=37492,uh=37496,dh=37488,fh=37489,Mu=37490,hh=37491,ph=37808,mh=37809,gh=37810,vh=37811,xh=37812,_h=37813,yh=37814,Sh=37815,Mh=37816,Eh=37817,wh=37818,bh=37819,Th=37820,Ah=37821,Rh=36492,Ch=36494,Ph=36495,Lh=36283,Nh=36284,Eu=36285,Ih=36286,i_=3200,Dh=0,r_=1,ia="",vr="srgb",wu="srgb-linear",bu="linear",hn="srgb",xf=7680,s_=519,a_=512,o_=513,l_=514,$h=515,c_=516,u_=517,Yh=518,d_=519,f_=35044,w0="300 es",Jr=2e3,Pl=2001;function h_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function p_(){const r=Tu("canvas");return r.style.display="block",r}const b0={};function T0(...r){const e="THREE."+r.shift();console.log(e,...r)}function Wg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Mt(...r){r=Wg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ln(...r){r=Wg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Po(...r){const e=r.join(" ");e in b0||(b0[e]=!0,Mt(...r))}function m_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const g_={[Kf]:Zf,[Jf]:th,[Qf]:nh,[Al]:eh,[Zf]:Kf,[th]:Jf,[nh]:Qf,[eh]:Al};class ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Uh=180/Math.PI;function Nl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(yi[r&255]+yi[r>>8&255]+yi[r>>16&255]+yi[r>>24&255]+"-"+yi[e&255]+yi[e>>8&255]+"-"+yi[e>>16&15|64]+yi[e>>24&255]+"-"+yi[t&63|128]+yi[t>>8&255]+"-"+yi[t>>16&255]+yi[t>>24&255]+yi[s&255]+yi[s>>8&255]+yi[s>>16&255]+yi[s>>24&255]).toLowerCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function v_(r,e){return(r%e+e)%e}function _f(r,e,t){return(1-t)*r+t*e}function ml(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ip=class ip{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Jt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ip.prototype.isVector2=!0;let Ht=ip;class Do{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let m=s[o+0],p=s[o+1],y=s[o+2],S=s[o+3],x=l[u+0],M=l[u+1],E=l[u+2],C=l[u+3];if(S!==C||m!==x||p!==M||y!==E){let _=m*x+p*M+y*E+S*C;_<0&&(x=-x,M=-M,E=-E,C=-C,_=-_);let v=1-f;if(_<.9995){const A=Math.acos(_),F=Math.sin(A);v=Math.sin(v*A)/F,f=Math.sin(f*A)/F,m=m*v+x*f,p=p*v+M*f,y=y*v+E*f,S=S*v+C*f}else{m=m*v+x*f,p=p*v+M*f,y=y*v+E*f,S=S*v+C*f;const A=1/Math.sqrt(m*m+p*p+y*y+S*S);m*=A,p*=A,y*=A,S*=A}}e[t]=m,e[t+1]=p,e[t+2]=y,e[t+3]=S}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],m=s[o+1],p=s[o+2],y=s[o+3],S=l[u],x=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+y*S+m*M-p*x,e[t+1]=m*E+y*x+p*S-f*M,e[t+2]=p*E+y*M+f*x-m*S,e[t+3]=y*E-f*S-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(s/2),y=f(o/2),S=f(l/2),x=m(s/2),M=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=x*y*S+p*M*E,this._y=p*M*S-x*y*E,this._z=p*y*E+x*M*S,this._w=p*y*S-x*M*E;break;case"YXZ":this._x=x*y*S+p*M*E,this._y=p*M*S-x*y*E,this._z=p*y*E-x*M*S,this._w=p*y*S+x*M*E;break;case"ZXY":this._x=x*y*S-p*M*E,this._y=p*M*S+x*y*E,this._z=p*y*E+x*M*S,this._w=p*y*S-x*M*E;break;case"ZYX":this._x=x*y*S-p*M*E,this._y=p*M*S+x*y*E,this._z=p*y*E-x*M*S,this._w=p*y*S+x*M*E;break;case"YZX":this._x=x*y*S+p*M*E,this._y=p*M*S+x*y*E,this._z=p*y*E-x*M*S,this._w=p*y*S-x*M*E;break;case"XZY":this._x=x*y*S-p*M*E,this._y=p*M*S-x*y*E,this._z=p*y*E+x*M*S,this._w=p*y*S+x*M*E;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],y=t[6],S=t[10],x=s+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>f&&s>S){const M=2*Math.sqrt(1+s-f-S);this._w=(y-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-s-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+S-s-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,y=t._w;return this._x=s*y+u*f+o*p-l*m,this._y=o*y+u*m+l*f-s*p,this._z=l*y+u*p+s*m-o*f,this._w=u*y-s*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);m=Math.sin(m*p)/y,t=Math.sin(t*p)/y,this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rp=class rp{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(A0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(A0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*s),y=2*(f*t-l*o),S=2*(l*s-u*t);return this.x=t+m*p+u*S-f*y,this.y=s+m*y+f*p-l*S,this.z=o+m*S+l*y-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-s*m,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Jt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rp.prototype.isVector3=!0;let ie=rp;const yf=new ie,A0=new Do,sp=class sp{constructor(e,t,s,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p)}set(e,t,s,o,l,u,f,m,p){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=t,y[4]=l,y[5]=m,y[6]=s,y[7]=u,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],m=s[6],p=s[1],y=s[4],S=s[7],x=s[2],M=s[5],E=s[8],C=o[0],_=o[3],v=o[6],A=o[1],F=o[4],R=o[7],U=o[2],I=o[5],k=o[8];return l[0]=u*C+f*A+m*U,l[3]=u*_+f*F+m*I,l[6]=u*v+f*R+m*k,l[1]=p*C+y*A+S*U,l[4]=p*_+y*F+S*I,l[7]=p*v+y*R+S*k,l[2]=x*C+M*A+E*U,l[5]=x*_+M*F+E*I,l[8]=x*v+M*R+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8];return t*u*y-t*f*p-s*l*y+s*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8],S=y*u-f*p,x=f*m-y*l,M=p*l-u*m,E=t*S+s*x+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=S*C,e[1]=(o*p-y*s)*C,e[2]=(f*s-o*u)*C,e[3]=x*C,e[4]=(y*t-o*m)*C,e[5]=(o*l-f*t)*C,e[6]=M*C,e[7]=(s*m-p*t)*C,e[8]=(u*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sf.makeScale(e,t)),this}rotate(e){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sf.makeRotation(-e)),this}translate(e,t){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sp.prototype.isMatrix3=!0;let Pt=sp;const Sf=new Pt,R0=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x_(){const r={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===hn&&(o.r=Ts(o.r),o.g=Ts(o.g),o.b=Ts(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===hn&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ia?bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[wu]:{primaries:e,whitePoint:s,transfer:bu,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vr},outputColorSpaceConfig:{drawingBufferColorSpace:vr}},[vr]:{primaries:e,whitePoint:s,transfer:hn,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vr}}}),r}const Zt=x_();function Ts(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let uo;class __{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{uo===void 0&&(uo=Tu("canvas")),uo.width=e.width,uo.height=e.height;const o=uo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=uo}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ts(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ts(t[s]/255)*255):t[s]=Ts(t[s]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y_=0;class Kh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Mf(o[u].image)):l.push(Mf(o[u]))}else l=Mf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Mf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?__.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let S_=0;const Ef=new ie;class Ei extends ka{constructor(e=Ei.DEFAULT_IMAGE,t=Ei.DEFAULT_MAPPING,s=ws,o=ws,l=Mi,u=La,f=Ur,m=ir,p=Ei.DEFAULT_ANISOTROPY,y=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Nl(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ef).x}get height(){return this.source.getSize(Ef).y}get depth(){return this.source.getSize(Ef).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case ws:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case ws:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ei.DEFAULT_IMAGE=null;Ei.DEFAULT_MAPPING=Og;Ei.DEFAULT_ANISOTROPY=1;const ap=class ap{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const m=e.elements,p=m[0],y=m[4],S=m[8],x=m[1],M=m[5],E=m[9],C=m[2],_=m[6],v=m[10];if(Math.abs(y-x)<.01&&Math.abs(S-C)<.01&&Math.abs(E-_)<.01){if(Math.abs(y+x)<.1&&Math.abs(S+C)<.1&&Math.abs(E+_)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,R=(M+1)/2,U=(v+1)/2,I=(y+x)/4,k=(S+C)/4,b=(E+_)/4;return F>R&&F>U?F<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(F),o=I/s,l=k/s):R>U?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=I/o,l=b/o):U<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),s=k/l,o=b/l),this.set(s,o,l,t),this}let A=Math.sqrt((_-E)*(_-E)+(S-C)*(S-C)+(x-y)*(x-y));return Math.abs(A)<.001&&(A=1),this.x=(_-E)/A,this.y=(S-C)/A,this.z=(x-y)/A,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this.w=Jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this.w=Jt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Jt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ap.prototype.isVector4=!0;let Dn=ap;class M_ extends ka{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Dn(0,0,e,t),this.scissorTest=!1,this.viewport=new Dn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Ei(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Kh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends M_{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Xg extends Ei{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E_ extends Ei{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Cu=class Cu{constructor(e,t,s,o,l,u,f,m,p,y,S,x,M,E,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p,y,S,x,M,E,C,_)}set(e,t,s,o,l,u,f,m,p,y,S,x,M,E,C,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=y,v[10]=S,v[14]=x,v[3]=M,v[7]=E,v[11]=C,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cu().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/fo.setFromMatrixColumn(e,0).length(),l=1/fo.setFromMatrixColumn(e,1).length(),u=1/fo.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),m=Math.cos(o),p=Math.sin(o),y=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*y,M=u*S,E=f*y,C=f*S;t[0]=m*y,t[4]=-m*S,t[8]=p,t[1]=M+E*p,t[5]=x-C*p,t[9]=-f*m,t[2]=C-x*p,t[6]=E+M*p,t[10]=u*m}else if(e.order==="YXZ"){const x=m*y,M=m*S,E=p*y,C=p*S;t[0]=x+C*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*y,t[9]=-f,t[2]=M*f-E,t[6]=C+x*f,t[10]=u*m}else if(e.order==="ZXY"){const x=m*y,M=m*S,E=p*y,C=p*S;t[0]=x-C*f,t[4]=-u*S,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*y,t[9]=C-x*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const x=u*y,M=u*S,E=f*y,C=f*S;t[0]=m*y,t[4]=E*p-M,t[8]=x*p+C,t[1]=m*S,t[5]=C*p+x,t[9]=M*p-E,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const x=u*m,M=u*p,E=f*m,C=f*p;t[0]=m*y,t[4]=C-x*S,t[8]=E*S+M,t[1]=S,t[5]=u*y,t[9]=-f*y,t[2]=-p*y,t[6]=M*S+E,t[10]=x-C*S}else if(e.order==="XZY"){const x=u*m,M=u*p,E=f*m,C=f*p;t[0]=m*y,t[4]=-S,t[8]=p*y,t[1]=x*S+C,t[5]=u*y,t[9]=M*S-E,t[2]=E*S-M,t[6]=f*y,t[10]=C*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w_,e,b_)}lookAt(e,t,s){const o=this.elements;return er.subVectors(e,t),er.lengthSq()===0&&(er.z=1),er.normalize(),$s.crossVectors(s,er),$s.lengthSq()===0&&(Math.abs(s.z)===1?er.x+=1e-4:er.z+=1e-4,er.normalize(),$s.crossVectors(s,er)),$s.normalize(),Bc.crossVectors(er,$s),o[0]=$s.x,o[4]=Bc.x,o[8]=er.x,o[1]=$s.y,o[5]=Bc.y,o[9]=er.y,o[2]=$s.z,o[6]=Bc.z,o[10]=er.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],m=s[8],p=s[12],y=s[1],S=s[5],x=s[9],M=s[13],E=s[2],C=s[6],_=s[10],v=s[14],A=s[3],F=s[7],R=s[11],U=s[15],I=o[0],k=o[4],b=o[8],D=o[12],z=o[1],G=o[5],W=o[9],ne=o[13],H=o[2],re=o[6],fe=o[10],ee=o[14],te=o[3],Y=o[7],K=o[11],T=o[15];return l[0]=u*I+f*z+m*H+p*te,l[4]=u*k+f*G+m*re+p*Y,l[8]=u*b+f*W+m*fe+p*K,l[12]=u*D+f*ne+m*ee+p*T,l[1]=y*I+S*z+x*H+M*te,l[5]=y*k+S*G+x*re+M*Y,l[9]=y*b+S*W+x*fe+M*K,l[13]=y*D+S*ne+x*ee+M*T,l[2]=E*I+C*z+_*H+v*te,l[6]=E*k+C*G+_*re+v*Y,l[10]=E*b+C*W+_*fe+v*K,l[14]=E*D+C*ne+_*ee+v*T,l[3]=A*I+F*z+R*H+U*te,l[7]=A*k+F*G+R*re+U*Y,l[11]=A*b+F*W+R*fe+U*K,l[15]=A*D+F*ne+R*ee+U*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],y=e[2],S=e[6],x=e[10],M=e[14],E=e[3],C=e[7],_=e[11],v=e[15],A=m*M-p*x,F=f*M-p*S,R=f*x-m*S,U=u*M-p*y,I=u*x-m*y,k=u*S-f*y;return t*(C*A-_*F+v*R)-s*(E*A-_*U+v*I)+o*(E*F-C*U+v*k)-l*(E*R-C*I+_*k)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],y=e[10];return t*(u*y-f*p)-s*(l*y-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8],S=e[9],x=e[10],M=e[11],E=e[12],C=e[13],_=e[14],v=e[15],A=t*f-s*u,F=t*m-o*u,R=t*p-l*u,U=s*m-o*f,I=s*p-l*f,k=o*p-l*m,b=y*C-S*E,D=y*_-x*E,z=y*v-M*E,G=S*_-x*C,W=S*v-M*C,ne=x*v-M*_,H=A*ne-F*W+R*G+U*z-I*D+k*b;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/H;return e[0]=(f*ne-m*W+p*G)*re,e[1]=(o*W-s*ne-l*G)*re,e[2]=(C*k-_*I+v*U)*re,e[3]=(x*I-S*k-M*U)*re,e[4]=(m*z-u*ne-p*D)*re,e[5]=(t*ne-o*z+l*D)*re,e[6]=(_*R-E*k-v*F)*re,e[7]=(y*k-x*R+M*F)*re,e[8]=(u*W-f*z+p*b)*re,e[9]=(s*z-t*W-l*b)*re,e[10]=(E*I-C*R+v*A)*re,e[11]=(S*R-y*I-M*A)*re,e[12]=(f*D-u*G-m*b)*re,e[13]=(t*G-s*D+o*b)*re,e[14]=(C*F-E*U-_*A)*re,e[15]=(y*U-S*F+x*A)*re,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,m=e.z,p=l*u,y=l*f;return this.set(p*u+s,p*f-o*m,p*m+o*f,0,p*f+o*m,y*f+s,y*m-o*u,0,p*m-o*f,y*m+o*u,l*m*m+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,y=u+u,S=f+f,x=l*p,M=l*y,E=l*S,C=u*y,_=u*S,v=f*S,A=m*p,F=m*y,R=m*S,U=s.x,I=s.y,k=s.z;return o[0]=(1-(C+v))*U,o[1]=(M+R)*U,o[2]=(E-F)*U,o[3]=0,o[4]=(M-R)*I,o[5]=(1-(x+v))*I,o[6]=(_+A)*I,o[7]=0,o[8]=(E+F)*k,o[9]=(_-A)*k,o[10]=(1-(x+C))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=fo.set(o[0],o[1],o[2]).length();const f=fo.set(o[4],o[5],o[6]).length(),m=fo.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Nr.copy(this);const p=1/u,y=1/f,S=1/m;return Nr.elements[0]*=p,Nr.elements[1]*=p,Nr.elements[2]*=p,Nr.elements[4]*=y,Nr.elements[5]*=y,Nr.elements[6]*=y,Nr.elements[8]*=S,Nr.elements[9]*=S,Nr.elements[10]*=S,t.setFromRotationMatrix(Nr),s.x=u,s.y=f,s.z=m,this}makePerspective(e,t,s,o,l,u,f=Jr,m=!1){const p=this.elements,y=2*l/(t-e),S=2*l/(s-o),x=(t+e)/(t-e),M=(s+o)/(s-o);let E,C;if(m)E=l/(u-l),C=u*l/(u-l);else if(f===Jr)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===Pl)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Jr,m=!1){const p=this.elements,y=2/(t-e),S=2/(s-o),x=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,C;if(m)E=1/(u-l),C=u/(u-l);else if(f===Jr)E=-2/(u-l),C=-(u+l)/(u-l);else if(f===Pl)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Cu.prototype.isMatrix4=!0;let Pn=Cu;const fo=new ie,Nr=new Pn,w_=new ie(0,0,0),b_=new ie(1,1,1),$s=new ie,Bc=new ie,er=new ie,P0=new Pn,L0=new Do;class sa{constructor(e=0,t=0,s=0,o=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],y=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Jt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Jt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,M),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return P0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return L0.setFromEuler(this),this.setFromQuaternion(L0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const N0=new ie,ho=new Do,vs=new Pn,zc=new ie,gl=new ie,A_=new ie,R_=new Do,I0=new ie(1,0,0),D0=new ie(0,1,0),U0=new ie(0,0,1),O0={type:"added"},C_={type:"removed"},po={type:"childadded",child:null},wf={type:"childremoved",child:null};class ai extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new ie,t=new sa,s=new Do,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pn},normalMatrix:{value:new Pt}}),this.matrix=new Pn,this.matrixWorld=new Pn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(I0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(U0,e)}translateOnAxis(e,t){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(U0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?zc.copy(e):zc.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(gl,zc,this.up):vs.lookAt(zc,gl,this.up),this.quaternion.setFromRotationMatrix(vs),o&&(vs.extractRotation(o.matrixWorld),ho.setFromRotationMatrix(vs),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ln("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O0),po.child=e,this.dispatchEvent(po),po.child=null):ln("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(C_),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O0),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,A_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,R_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const S=m[p];l(e.shapes,S)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),y=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),S.length>0&&(s.shapes=S),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const m=[];for(const p in f){const y=f[p];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ai.DEFAULT_UP=new ie(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const _=t.getJointPose(C,s),v=this._getHandJoint(p,C);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const y=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=y.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Kt;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function Tf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $t{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Zt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Zt.workingColorSpace){if(e=v_(e,1),t=Jt(t,0,1),s=Jt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Tf(u,l,e+1/3),this.g=Tf(u,l,e),this.b=Tf(u,l,e-1/3)}return Zt.colorSpaceToWorking(this,o),this}setStyle(e,t=vr){function s(l){l!==void 0&&parseFloat(l)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vr){const s=jg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vr){return Zt.workingToColorSpace(Si.copy(this),e),Math.round(Jt(Si.r*255,0,255))*65536+Math.round(Jt(Si.g*255,0,255))*256+Math.round(Jt(Si.b*255,0,255))}getHexString(e=vr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(Si.copy(this),t);const s=Si.r,o=Si.g,l=Si.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let m,p;const y=(f+u)/2;if(f===u)m=0,p=0;else{const S=u-f;switch(p=y<=.5?S/(u+f):S/(2-u-f),u){case s:m=(o-l)/S+(o<l?6:0);break;case o:m=(l-s)/S+2;break;case l:m=(s-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=y,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(Si.copy(this),t),e.r=Si.r,e.g=Si.g,e.b=Si.b,e}getStyle(e=vr){Zt.workingToColorSpace(Si.copy(this),e);const t=Si.r,s=Si.g,o=Si.b;return e!==vr?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(Vc);const s=_f(Ys.h,Vc.h,t),o=_f(Ys.s,Vc.s,t),l=_f(Ys.l,Vc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Si=new $t;$t.NAMES=jg;class Zh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(e),this.density=t}clone(){return new Zh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class L_ extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ir=new ie,xs=new ie,Af=new ie,_s=new ie,mo=new ie,go=new ie,F0=new ie,Rf=new ie,Cf=new ie,Pf=new ie,Lf=new Dn,Nf=new Dn,If=new Dn;class xr{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Ir.subVectors(e,t),o.cross(Ir);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Ir.subVectors(o,t),xs.subVectors(s,t),Af.subVectors(e,t);const u=Ir.dot(Ir),f=Ir.dot(xs),m=Ir.dot(Af),p=xs.dot(xs),y=xs.dot(Af),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*m-f*y)*x,E=(u*y-f*m)*x;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,s,o,l,u,f,m){return this.getBarycoord(e,t,s,o,_s)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,_s.x),m.addScaledVector(u,_s.y),m.addScaledVector(f,_s.z),m)}static getInterpolatedAttribute(e,t,s,o,l,u){return Lf.setScalar(0),Nf.setScalar(0),If.setScalar(0),Lf.fromBufferAttribute(e,t),Nf.fromBufferAttribute(e,s),If.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Lf,l.x),u.addScaledVector(Nf,l.y),u.addScaledVector(If,l.z),u}static isFrontFacing(e,t,s,o){return Ir.subVectors(s,t),xs.subVectors(e,t),Ir.cross(xs).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ir.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Ir.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return xr.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return xr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;mo.subVectors(o,s),go.subVectors(l,s),Rf.subVectors(e,s);const m=mo.dot(Rf),p=go.dot(Rf);if(m<=0&&p<=0)return t.copy(s);Cf.subVectors(e,o);const y=mo.dot(Cf),S=go.dot(Cf);if(y>=0&&S<=y)return t.copy(o);const x=m*S-y*p;if(x<=0&&m>=0&&y<=0)return u=m/(m-y),t.copy(s).addScaledVector(mo,u);Pf.subVectors(e,l);const M=mo.dot(Pf),E=go.dot(Pf);if(E>=0&&M<=E)return t.copy(l);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(go,f);const _=y*E-M*S;if(_<=0&&S-y>=0&&M-E>=0)return F0.subVectors(l,o),f=(S-y)/(S-y+(M-E)),t.copy(o).addScaledVector(F0,f);const v=1/(_+C+x);return u=C*v,f=x*v,t.copy(s).addScaledVector(mo,u).addScaledVector(go,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Il{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Dr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Dr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Dr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Dr):Dr.fromBufferAttribute(l,u),Dr.applyMatrix4(e.matrixWorld),this.expandByPoint(Dr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gc.copy(s.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dr),Dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),Hc.subVectors(this.max,vl),vo.subVectors(e.a,vl),xo.subVectors(e.b,vl),_o.subVectors(e.c,vl),Ks.subVectors(xo,vo),Zs.subVectors(_o,xo),ba.subVectors(vo,_o);let t=[0,-Ks.z,Ks.y,0,-Zs.z,Zs.y,0,-ba.z,ba.y,Ks.z,0,-Ks.x,Zs.z,0,-Zs.x,ba.z,0,-ba.x,-Ks.y,Ks.x,0,-Zs.y,Zs.x,0,-ba.y,ba.x,0];return!Df(t,vo,xo,_o,Hc)||(t=[1,0,0,0,1,0,0,0,1],!Df(t,vo,xo,_o,Hc))?!1:(Wc.crossVectors(Ks,Zs),t=[Wc.x,Wc.y,Wc.z],Df(t,vo,xo,_o,Hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ys=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Dr=new ie,Gc=new Il,vo=new ie,xo=new ie,_o=new ie,Ks=new ie,Zs=new ie,ba=new ie,vl=new ie,Hc=new ie,Wc=new ie,Ta=new ie;function Df(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Ta.fromArray(r,l);const f=o.x*Math.abs(Ta.x)+o.y*Math.abs(Ta.y)+o.z*Math.abs(Ta.z),m=e.dot(Ta),p=t.dot(Ta),y=s.dot(Ta);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>f)return!1}return!0}const Vn=new ie,Xc=new Ht;let N_=0;class Fr extends ka{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=f_,this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Xc.fromBufferAttribute(this,t),Xc.applyMatrix3(e),this.setXY(t,Xc.x,Xc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix3(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ml(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Hi(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ml(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ml(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ml(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ml(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),s=Hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),s=Hi(s,this.array),o=Hi(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),s=Hi(s,this.array),o=Hi(o,this.array),l=Hi(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $g extends Fr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Yg extends Fr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class vn extends Fr{constructor(e,t,s){super(new Float32Array(e),t,s)}}const I_=new Il,xl=new ie,Uf=new ie;class Dl{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):I_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const t=xl.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(xl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(Uf)),this.expandByPoint(xl.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let D_=0;const mr=new Pn,Of=new ai,yo=new ie,tr=new Il,_l=new Il,ri=new ie;class $n extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?Yg:$g)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mr.makeRotationFromQuaternion(e),this.applyMatrix4(mr),this}rotateX(e){return mr.makeRotationX(e),this.applyMatrix4(mr),this}rotateY(e){return mr.makeRotationY(e),this.applyMatrix4(mr),this}rotateZ(e){return mr.makeRotationZ(e),this.applyMatrix4(mr),this}translate(e,t,s){return mr.makeTranslation(e,t,s),this.applyMatrix4(mr),this}scale(e,t,s){return mr.makeScale(e,t,s),this.applyMatrix4(mr),this}lookAt(e){return Of.lookAt(e),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new vn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ln("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];tr.setFromBufferAttribute(l),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,tr.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,tr.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(tr.min),this.boundingBox.expandByPoint(tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ln('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ln("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(tr.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];_l.setFromBufferAttribute(f),this.morphTargetsRelative?(ri.addVectors(tr.min,_l.min),tr.expandByPoint(ri),ri.addVectors(tr.max,_l.max),tr.expandByPoint(ri)):(tr.expandByPoint(_l.min),tr.expandByPoint(_l.max))}tr.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)ri.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ri));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,y=f.count;p<y;p++)ri.fromBufferAttribute(f,p),m&&(yo.fromBufferAttribute(e,p),ri.add(yo)),o=Math.max(o,s.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ln('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ln("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new Fr(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let b=0;b<s.count;b++)f[b]=new ie,m[b]=new ie;const p=new ie,y=new ie,S=new ie,x=new Ht,M=new Ht,E=new Ht,C=new ie,_=new ie;function v(b,D,z){p.fromBufferAttribute(s,b),y.fromBufferAttribute(s,D),S.fromBufferAttribute(s,z),x.fromBufferAttribute(l,b),M.fromBufferAttribute(l,D),E.fromBufferAttribute(l,z),y.sub(p),S.sub(p),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(y).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(G),_.copy(S).multiplyScalar(M.x).addScaledVector(y,-E.x).multiplyScalar(G),f[b].add(C),f[D].add(C),f[z].add(C),m[b].add(_),m[D].add(_),m[z].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let b=0,D=A.length;b<D;++b){const z=A[b],G=z.start,W=z.count;for(let ne=G,H=G+W;ne<H;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const F=new ie,R=new ie,U=new ie,I=new ie;function k(b){U.fromBufferAttribute(o,b),I.copy(U);const D=f[b];F.copy(D),F.sub(U.multiplyScalar(U.dot(D))).normalize(),R.crossVectors(I,D);const G=R.dot(m[b])<0?-1:1;u.setXYZW(b,F.x,F.y,F.z,G)}for(let b=0,D=A.length;b<D;++b){const z=A[b],G=z.start,W=z.count;for(let ne=G,H=G+W;ne<H;ne+=3)k(e.getX(ne+0)),k(e.getX(ne+1)),k(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new Fr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,m=new ie,p=new ie,y=new ie,S=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),C=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,_),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,_),f.add(y),m.add(y),p.add(y),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ri.fromBufferAttribute(e,t),ri.normalize(),e.setXYZ(t,ri.x,ri.y,ri.z)}toNonIndexed(){function e(f,m){const p=f.array,y=f.itemSize,S=f.normalized,x=new p.constructor(m.length*y);let M=0,E=0;for(let C=0,_=m.length;C<_;C++){f.isInterleavedBufferAttribute?M=m[C]*f.data.stride+f.offset:M=m[C]*y;for(let v=0;v<y;v++)x[E++]=p[M++]}return new Fr(x,y,S)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,s=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let y=0,S=p.length;y<S;y++){const x=p[y],M=e(x,s);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];y.push(M.toJSON(e.data))}y.length>0&&(o[m]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const y=o[p];this.setAttribute(p,y.clone(t))}const l=e.morphAttributes;for(const p in l){const y=[],S=l[p];for(let x=0,M=S.length;x<M;x++)y.push(S[x].clone(t));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,y=u.length;p<y;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ff=new ie,U_=new ie,O_=new Pt;class ta{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Ff.subVectors(s,t).cross(U_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Ff),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||O_.getNormalMatrix(e),o=this.coplanarPoint(Ff).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let F_=0;class Ba extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=Tl,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ag,this.blendDst=Rg,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xf,this.stencilZFail=xf,this.stencilZPass=xf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new ta().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ht().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ss=new ie,kf=new ie,qc=new ie,jc=new ie;class Jh{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){kf.copy(e).add(t).multiplyScalar(.5),qc.copy(t).sub(e).normalize(),jc.copy(this.origin).sub(kf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(qc),f=jc.dot(this.direction),m=-jc.dot(qc),p=jc.lengthSq(),y=Math.abs(1-u*u);let S,x,M,E;if(y>0)if(S=u*m-f,x=u*f-m,E=l*y,S>=0)if(x>=-E)if(x<=E){const C=1/y;S*=C,x*=C,M=S*(S+u*x+2*f)+x*(u*S+x+2*m)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*m)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*m)+p;else x<=-E?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-m),l),M=-S*S+x*(x+2*m)+p):x<=E?(S=0,x=Math.min(Math.max(-l,-m),l),M=x*(x+2*m)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-m),l),M=-S*S+x*(x+2*m)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(kf).addScaledVector(qc,x),M}intersectSphere(e,t){if(e.radius<0)return null;Ss.subVectors(e.center,this.origin);const s=Ss.dot(this.direction),o=Ss.dot(Ss)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,m=s+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,m;const p=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),y>=0?(l=(e.min.y-x.y)*y,u=(e.max.y-x.y)*y):(l=(e.max.y-x.y)*y,u=(e.min.y-x.y)*y),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),s>m||f>o)||((f>s||s!==s)&&(s=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,s,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,y=f.z,S=e.x-u.x,x=e.y-u.y,M=e.z-u.z,E=t.x-u.x,C=t.y-u.y,_=t.z-u.z,v=s.x-u.x,A=s.y-u.y,F=s.z-u.z,R=Math.abs(m),U=Math.abs(p),I=Math.abs(y);let k,b,D,z,G,W,ne,H,re,fe,ee,te;if(R>=U&&R>=I?(D=m,W=S,re=E,te=v,m>=0?(k=p,b=y,z=x,G=M,ne=C,H=_,fe=A,ee=F):(k=y,b=p,z=M,G=x,ne=_,H=C,fe=F,ee=A)):U>=I?(D=p,W=x,re=C,te=A,p>=0?(k=y,b=m,z=M,G=S,ne=_,H=E,fe=F,ee=v):(k=m,b=y,z=S,G=M,ne=E,H=_,fe=v,ee=F)):(D=y,W=M,re=_,te=F,y>=0?(k=m,b=p,z=S,G=x,ne=E,H=C,fe=v,ee=A):(k=p,b=m,z=x,G=S,ne=C,H=E,fe=A,ee=v)),D===0)return null;const Y=k/D,K=b/D,T=1/D,ce=z-Y*W,_e=G-K*W,We=ne-Y*re,Xe=H-K*re,Ge=fe-Y*te,se=ee-K*te,de=Ge*Xe-se*We,Re=ce*se-_e*Ge,Ye=We*_e-Xe*ce;if(o){if(de<0||Re<0||Ye<0)return null}else if((de<0||Re<0||Ye<0)&&(de>0||Re>0||Ye>0))return null;const Ue=de+Re+Ye;if(Ue===0)return null;const ut=T*(de*W+Re*re+Ye*te);return(Ue>0?ut<0:ut>0)?null:this.at(ut/Ue,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const k0=new Pn,Aa=new Jh,$c=new Dl,B0=new ie,Yc=new ie,Kc=new ie,Zc=new ie,Bf=new ie,Jc=new ie,z0=new ie,Qc=new ie;class ve extends ai{constructor(e=new $n,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Jc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const y=f[m],S=l[m];y!==0&&(Bf.fromBufferAttribute(S,e),u?Jc.addScaledVector(Bf,y):Jc.addScaledVector(Bf.sub(t),y))}t.add(Jc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),Aa.copy(e.ray).recast(e.near),!($c.containsPoint(Aa.origin)===!1&&(Aa.intersectSphere($c,B0)===null||Aa.origin.distanceToSquared(B0)>(e.far-e.near)**2))&&(k0.copy(l).invert(),Aa.copy(e.ray).applyMatrix4(k0),!(s.boundingBox!==null&&Aa.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Aa)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,y=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const _=x[E],v=u[_.materialIndex],A=Math.max(_.start,M.start),F=Math.min(f.count,Math.min(_.start+_.count,M.start+M.count));for(let R=A,U=F;R<U;R+=3){const I=f.getX(R),k=f.getX(R+1),b=f.getX(R+2);o=eu(this,v,e,s,p,y,S,I,k,b),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let _=E,v=C;_<v;_+=3){const A=f.getX(_),F=f.getX(_+1),R=f.getX(_+2);o=eu(this,u,e,s,p,y,S,A,F,R),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const _=x[E],v=u[_.materialIndex],A=Math.max(_.start,M.start),F=Math.min(m.count,Math.min(_.start+_.count,M.start+M.count));for(let R=A,U=F;R<U;R+=3){const I=R,k=R+1,b=R+2;o=eu(this,v,e,s,p,y,S,I,k,b),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let _=E,v=C;_<v;_+=3){const A=_,F=_+1,R=_+2;o=eu(this,u,e,s,p,y,S,A,F,R),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function k_(r,e,t,s,o,l,u,f){let m;if(e.side===qi?m=s.intersectTriangle(u,l,o,!0,f):m=s.intersectTriangle(o,l,u,e.side===Ia,f),m===null)return null;Qc.copy(f),Qc.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Qc);return p<t.near||p>t.far?null:{distance:p,point:Qc.clone(),object:r}}function eu(r,e,t,s,o,l,u,f,m,p){r.getVertexPosition(f,Yc),r.getVertexPosition(m,Kc),r.getVertexPosition(p,Zc);const y=k_(r,e,t,s,Yc,Kc,Zc,z0);if(y){const S=new ie;xr.getBarycoord(z0,Yc,Kc,Zc,S),o&&(y.uv=xr.getInterpolatedAttribute(o,f,m,p,S,new Ht)),l&&(y.uv1=xr.getInterpolatedAttribute(l,f,m,p,S,new Ht)),u&&(y.normal=xr.getInterpolatedAttribute(u,f,m,p,S,new ie),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:f,b:m,c:p,normal:new ie,materialIndex:0};xr.getNormal(Yc,Kc,Zc,x.normal),y.face=x,y.barycoord=S}return y}class B_ extends Ei{constructor(e=null,t=1,s=1,o,l,u,f,m,p=hi,y=hi,S,x){super(null,u,f,m,p,y,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ra=new Dl,z_=new Ht(.5,.5),tu=new ie;class Qh{constructor(e=new ta,t=new ta,s=new ta,o=new ta,l=new ta,u=new ta){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Jr,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],y=l[4],S=l[5],x=l[6],M=l[7],E=l[8],C=l[9],_=l[10],v=l[11],A=l[12],F=l[13],R=l[14],U=l[15];if(o[0].setComponents(p-u,M-y,v-E,U-A).normalize(),o[1].setComponents(p+u,M+y,v+E,U+A).normalize(),o[2].setComponents(p+f,M+S,v+C,U+F).normalize(),o[3].setComponents(p-f,M-S,v-C,U-F).normalize(),s)o[4].setComponents(m,x,_,R).normalize(),o[5].setComponents(p-m,M-x,v-_,U-R).normalize();else if(o[4].setComponents(p-m,M-x,v-_,U-R).normalize(),t===Jr)o[5].setComponents(p+m,M+x,v+_,U+R).normalize();else if(t===Pl)o[5].setComponents(m,x,_,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ra.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ra)}intersectsSprite(e){Ra.center.set(0,0,0);const t=z_.distanceTo(e.center);return Ra.radius=.7071067811865476+t,Ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ra)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(tu.x=o.normal.x>0?e.max.x:e.min.x,tu.y=o.normal.y>0?e.max.y:e.min.y,tu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class na extends Ba{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new ie,Ru=new ie,V0=new Pn,yl=new Jh,nu=new Dl,zf=new ie,G0=new ie;class Kg extends ai{constructor(e=new $n,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Au.fromBufferAttribute(t,o-1),Ru.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Au.distanceTo(Ru);e.setAttribute("lineDistance",new vn(s,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),nu.copy(s.boundingSphere),nu.applyMatrix4(o),nu.radius+=l,e.ray.intersectsSphere(nu)===!1)return;V0.copy(o).invert(),yl.copy(e.ray).applyMatrix4(V0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,y=s.index,x=s.attributes.position;if(y!==null){const M=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let C=M,_=E-1;C<_;C+=p){const v=y.getX(C),A=y.getX(C+1),F=iu(this,e,yl,m,v,A,C);F&&t.push(F)}if(this.isLineLoop){const C=y.getX(E-1),_=y.getX(M),v=iu(this,e,yl,m,C,_,E-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let C=M,_=E-1;C<_;C+=p){const v=iu(this,e,yl,m,C,C+1,C);v&&t.push(v)}if(this.isLineLoop){const C=iu(this,e,yl,m,E-1,M,E-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function iu(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(Au.fromBufferAttribute(f,o),Ru.fromBufferAttribute(f,l),t.distanceSqToSegment(Au,Ru,zf,G0)>s)return;zf.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(zf);if(!(p<e.near||p>e.far))return{distance:p,point:G0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const H0=new ie,W0=new ie;class So extends Kg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)H0.fromBufferAttribute(t,o),W0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+H0.distanceTo(W0);e.setAttribute("lineDistance",new vn(s,1))}else Mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zg extends Ba{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const X0=new Pn,Oh=new Jh,ru=new Dl,su=new ie;class V_ extends ai{constructor(e=new $n,t=new Zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(o),ru.radius+=l,e.ray.intersectsSphere(ru)===!1)return;X0.copy(o).invert(),Oh.copy(e.ray).applyMatrix4(X0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=s.index,S=s.attributes.position;if(p!==null){const x=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=x,C=M;E<C;E++){const _=p.getX(E);su.fromBufferAttribute(S,_),q0(su,_,m,o,e,t,this)}}else{const x=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let E=x,C=M;E<C;E++)su.fromBufferAttribute(S,E),q0(su,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function q0(r,e,t,s,o,l,u){const f=Oh.distanceSqToPoint(r);if(f<t){const m=new ie;Oh.closestPointToPoint(r,m),m.applyMatrix4(s);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Jg extends Ei{constructor(e=[],t=Da,s,o,l,u,f,m,p,y){super(e,t,s,o,l,u,f,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends Ei{constructor(e,t,s,o,l,u,f,m,p){super(e,t,s,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ll extends Ei{constructor(e,t,s=es,o,l,u,f=hi,m=hi,p,y=As,S=1){if(y!==As&&y!==Na)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,m,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class G_ extends Ll{constructor(e,t=es,s=Da,o,l,u=hi,f=hi,m,p=As){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,t,s,o,l,u,f,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qg extends Ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class St extends $n{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],y=[],S=[];let x=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(y,3)),this.setAttribute("uv",new vn(S,2));function E(C,_,v,A,F,R,U,I,k,b,D){const z=R/k,G=U/b,W=R/2,ne=U/2,H=I/2,re=k+1,fe=b+1;let ee=0,te=0;const Y=new ie;for(let K=0;K<fe;K++){const T=K*G-ne;for(let ce=0;ce<re;ce++){const _e=ce*z-W;Y[C]=_e*A,Y[_]=T*F,Y[v]=H,p.push(Y.x,Y.y,Y.z),Y[C]=0,Y[_]=0,Y[v]=I>0?1:-1,y.push(Y.x,Y.y,Y.z),S.push(ce/k),S.push(1-K/b),ee+=1}}for(let K=0;K<b;K++)for(let T=0;T<k;T++){const ce=x+T+re*K,_e=x+T+re*(K+1),We=x+(T+1)+re*(K+1),Xe=x+(T+1)+re*K;m.push(ce,_e,Xe),m.push(_e,We,Xe),te+=6}f.addGroup(M,te,D),M+=te,x+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pa extends $n{constructor(e=1,t=1,s=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:s,radialSegments:o,heightSegments:l},t=Math.max(0,t),s=Math.max(1,Math.floor(s)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],y=t/2,S=Math.PI/2*e,x=t,M=2*S+x,E=s*2+l,C=o+1,_=new ie,v=new ie;for(let A=0;A<=E;A++){let F=0,R=0,U=0,I=0;if(A<=s){const D=A/s,z=D*Math.PI/2;R=-y-e*Math.cos(z),U=e*Math.sin(z),I=-e*Math.cos(z),F=D*S}else if(A<=s+l){const D=(A-s)/l;R=-y+D*t,U=e,I=0,F=S+D*x}else{const D=(A-s-l)/s,z=D*Math.PI/2;R=y+e*Math.sin(z),U=e*Math.cos(z),I=e*Math.sin(z),F=S+x+D*S}const k=Math.max(0,Math.min(1,F/M));let b=0;A===0?b=.5/o:A===E&&(b=-.5/o);for(let D=0;D<=o;D++){const z=D/o,G=z*Math.PI*2,W=Math.sin(G),ne=Math.cos(G);v.x=-U*ne,v.y=R,v.z=U*W,f.push(v.x,v.y,v.z),_.set(-U*ne,I,U*W),_.normalize(),m.push(_.x,_.y,_.z),p.push(z+b,k)}if(A>0){const D=(A-1)*C;for(let z=0;z<o;z++){const G=D+z,W=D+z+1,ne=A*C+z,H=A*C+z+1;u.push(G,W,ne),u.push(W,H,ne)}}}this.setIndex(u),this.setAttribute("position",new vn(f,3)),this.setAttribute("normal",new vn(m,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class sn extends $n{constructor(e=1,t=1,s=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const y=[],S=[],x=[],M=[];let E=0;const C=[],_=s/2;let v=0;A(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(y),this.setAttribute("position",new vn(S,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(M,2));function A(){const R=new ie,U=new ie;let I=0;const k=(t-e)/s;for(let b=0;b<=l;b++){const D=[],z=b/l,G=z*(t-e)+e;for(let W=0;W<=o;W++){const ne=W/o,H=ne*m+f,re=Math.sin(H),fe=Math.cos(H);U.x=G*re,U.y=-z*s+_,U.z=G*fe,S.push(U.x,U.y,U.z),R.set(re,k,fe).normalize(),x.push(R.x,R.y,R.z),M.push(ne,1-z),D.push(E++)}C.push(D)}for(let b=0;b<o;b++)for(let D=0;D<l;D++){const z=C[D][b],G=C[D+1][b],W=C[D+1][b+1],ne=C[D][b+1];(e>0||D!==0)&&(y.push(z,G,ne),I+=3),(t>0||D!==l-1)&&(y.push(G,W,ne),I+=3)}p.addGroup(v,I,0),v+=I}function F(R){const U=E,I=new Ht,k=new ie;let b=0;const D=R===!0?e:t,z=R===!0?1:-1;for(let W=1;W<=o;W++)S.push(0,_*z,0),x.push(0,z,0),M.push(.5,.5),E++;const G=E;for(let W=0;W<=o;W++){const H=W/o*m+f,re=Math.cos(H),fe=Math.sin(H);k.x=D*fe,k.y=_*z,k.z=D*re,S.push(k.x,k.y,k.z),x.push(0,z,0),I.x=re*.5+.5,I.y=fe*.5*z+.5,M.push(I.x,I.y),E++}for(let W=0;W<o;W++){const ne=U+W,H=G+W;R===!0?y.push(H,H+1,ne):y.push(H+1,H,ne),b+=3}p.addGroup(v,b,R===!0?1:2),v+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Di extends sn{constructor(e=1,t=1,s=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,s,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Di(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ep extends $n{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),y(),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(l.slice(),3)),this.setAttribute("uv",new vn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const F=new ie,R=new ie,U=new ie;for(let I=0;I<t.length;I+=3)M(t[I+0],F),M(t[I+1],R),M(t[I+2],U),m(F,R,U,A)}function m(A,F,R,U){const I=U+1,k=[];for(let b=0;b<=I;b++){k[b]=[];const D=A.clone().lerp(R,b/I),z=F.clone().lerp(R,b/I),G=I-b;for(let W=0;W<=G;W++)W===0&&b===I?k[b][W]=D:k[b][W]=D.clone().lerp(z,W/G)}for(let b=0;b<I;b++)for(let D=0;D<2*(I-b)-1;D++){const z=Math.floor(D/2);D%2===0?(x(k[b][z+1]),x(k[b+1][z]),x(k[b][z])):(x(k[b][z+1]),x(k[b+1][z+1]),x(k[b+1][z]))}}function p(A){const F=new ie;for(let R=0;R<l.length;R+=3)F.x=l[R+0],F.y=l[R+1],F.z=l[R+2],F.normalize().multiplyScalar(A),l[R+0]=F.x,l[R+1]=F.y,l[R+2]=F.z}function y(){const A=new ie;for(let F=0;F<l.length;F+=3){A.x=l[F+0],A.y=l[F+1],A.z=l[F+2];const R=_(A)/2/Math.PI+.5,U=v(A)/Math.PI+.5;u.push(R,1-U)}E(),S()}function S(){for(let A=0;A<u.length;A+=6){const F=u[A+0],R=u[A+2],U=u[A+4],I=Math.max(F,R,U),k=Math.min(F,R,U);I>.9&&k<.1&&(F<.2&&(u[A+0]+=1),R<.2&&(u[A+2]+=1),U<.2&&(u[A+4]+=1))}}function x(A){l.push(A.x,A.y,A.z)}function M(A,F){const R=A*3;F.x=e[R+0],F.y=e[R+1],F.z=e[R+2]}function E(){const A=new ie,F=new ie,R=new ie,U=new ie,I=new Ht,k=new Ht,b=new Ht;for(let D=0,z=0;D<l.length;D+=9,z+=6){A.set(l[D+0],l[D+1],l[D+2]),F.set(l[D+3],l[D+4],l[D+5]),R.set(l[D+6],l[D+7],l[D+8]),I.set(u[z+0],u[z+1]),k.set(u[z+2],u[z+3]),b.set(u[z+4],u[z+5]),U.copy(A).add(F).add(R).divideScalar(3);const G=_(U);C(I,z+0,A,G),C(k,z+2,F,G),C(b,z+4,R,G)}}function C(A,F,R,U){U<0&&A.x===1&&(u[F]=A.x-1),R.x===0&&R.z===0&&(u[F]=U/2/Math.PI+.5)}function _(A){return Math.atan2(A.z,-A.x)}function v(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.vertices,e.indices,e.radius,e.detail)}}const au=new ie,ou=new ie,Vf=new ie,lu=new xr;class Mo extends $n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(yu*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,p=[0,0,0],y=["a","b","c"],S=new Array(3),x={},M=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:C,b:_,c:v}=lu;if(C.fromBufferAttribute(f,p[0]),_.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),lu.getNormal(Vf),S[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,S[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,S[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let A=0;A<3;A++){const F=(A+1)%3,R=S[A],U=S[F],I=lu[y[A]],k=lu[y[F]],b=`${R}_${U}`,D=`${U}_${R}`;D in x&&x[D]?(Vf.dot(x[D].normal)<=l&&(M.push(I.x,I.y,I.z),M.push(k.x,k.y,k.z)),x[D]=null):b in x||(x[b]={index0:p[A],index1:p[F],normal:Vf.clone()})}}for(const E in x)if(x[E]){const{index0:C,index1:_}=x[E];au.fromBufferAttribute(f,C),ou.fromBufferAttribute(f,_),M.push(au.x,au.y,au.z),M.push(ou.x,ou.y,ou.z)}this.setAttribute("position",new vn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nu extends ep{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nu(e.radius,e.detail)}}class Fa extends $n{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),m=Math.floor(o),p=f+1,y=m+1,S=e/f,x=t/m,M=[],E=[],C=[],_=[];for(let v=0;v<y;v++){const A=v*x-u;for(let F=0;F<p;F++){const R=F*S-l;E.push(R,-A,0),C.push(0,0,1),_.push(F/f),_.push(1-v/m)}}for(let v=0;v<m;v++)for(let A=0;A<f;A++){const F=A+p*v,R=A+p*(v+1),U=A+1+p*(v+1),I=A+1+p*v;M.push(F,R,I),M.push(R,U,I)}this.setIndex(M),this.setAttribute("position",new vn(E,3)),this.setAttribute("normal",new vn(C,3)),this.setAttribute("uv",new vn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class si extends $n{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const m=Math.min(u+f,Math.PI);let p=0;const y=[],S=new ie,x=new ie,M=[],E=[],C=[],_=[];for(let v=0;v<=s;v++){const A=[],F=v/s,R=u+F*f,U=e*Math.cos(R),I=Math.sqrt(e*e-U*U);let k=0;v===0&&u===0?k=.5/t:v===s&&m===Math.PI&&(k=-.5/t);for(let b=0;b<=t;b++){const D=b/t,z=o+D*l;S.x=-I*Math.cos(z),S.y=U,S.z=I*Math.sin(z),E.push(S.x,S.y,S.z),x.copy(S).normalize(),C.push(x.x,x.y,x.z),_.push(D+k,1-F),A.push(p++)}y.push(A)}for(let v=0;v<s;v++)for(let A=0;A<t;A++){const F=y[v][A+1],R=y[v][A],U=y[v+1][A],I=y[v+1][A+1];(v!==0||u>0)&&M.push(F,R,I),(v!==s-1||m<Math.PI)&&M.push(R,U,I)}this.setIndex(M),this.setAttribute("position",new vn(E,3)),this.setAttribute("normal",new vn(C,3)),this.setAttribute("uv",new vn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hn extends $n{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const m=[],p=[],y=[],S=[],x=new ie,M=new ie,E=new ie;for(let C=0;C<=s;C++){const _=u+C/s*f;for(let v=0;v<=o;v++){const A=v/o*l;M.x=(e+t*Math.cos(_))*Math.cos(A),M.y=(e+t*Math.cos(_))*Math.sin(A),M.z=t*Math.sin(_),p.push(M.x,M.y,M.z),x.x=e*Math.cos(A),x.y=e*Math.sin(A),E.subVectors(M,x).normalize(),y.push(E.x,E.y,E.z),S.push(v/o),S.push(C/s)}}for(let C=1;C<=s;C++)for(let _=1;_<=o;_++){const v=(o+1)*C+_-1,A=(o+1)*(C-1)+_-1,F=(o+1)*(C-1)+_,R=(o+1)*C+_;m.push(v,A,R),m.push(A,F,R)}this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(y,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Io(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(j0(o))o.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(j0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Ni(r){const e={};for(let t=0;t<r.length;t++){const s=Io(r[t]);for(const o in s)e[o]=s[o]}return e}function j0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function H_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ev(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}const W_={clone:Io,merge:Ni};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=H_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new $t().setHex(o.value);break;case"v2":this.uniforms[s].value=new Ht().fromArray(o.value);break;case"v3":this.uniforms[s].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Dn().fromArray(o.value);break;case"m3":this.uniforms[s].value=new Pt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Pn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class j_ extends ns{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gn extends Ba{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $_ extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tp extends ai{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Gf=new Pn,$0=new ie,Y0=new ie;class tv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=ir,this.map=null,this.mapPass=null,this.matrix=new Pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;$0.setFromMatrixPosition(e.matrixWorld),t.position.copy($0),Y0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Y0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){Gf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Gf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===Pl||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cu=new ie,uu=new Do,jr=new ie;class nv extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pn,this.projectionMatrix=new Pn,this.projectionMatrixInverse=new Pn,this.coordinateSystem=Jr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cu,uu,jr),jr.x===1&&jr.y===1&&jr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,jr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(cu,uu,jr),jr.x===1&&jr.y===1&&jr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,jr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Js=new ie,K0=new Ht,Z0=new Ht;class nr extends nv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,K0,Z0),t.subVectors(Z0,K0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yu*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*s/p,o*=u.width/m,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class K_ extends tv{constructor(){super(new nr(90,1,.5,500)),this.isPointLightShadow=!0}}class du extends tp{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new K_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class np extends nv{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=y*this.view.offsetY,m=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z_ extends tv{constructor(){super(new np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J_ extends tp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.target=new ai,this.shadow=new Z_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Q_ extends tp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Eo=-90,wo=1;class ey extends ai{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new nr(Eo,wo,e,t);o.layers=this.layers,this.add(o);const l=new nr(Eo,wo,e,t);l.layers=this.layers,this.add(l);const u=new nr(Eo,wo,e,t);u.layers=this.layers,this.add(u);const f=new nr(Eo,wo,e,t);f.layers=this.layers,this.add(f);const m=new nr(Eo,wo,e,t);m.layers=this.layers,this.add(m);const p=new nr(Eo,wo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===Jr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,y]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(s,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(S,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ty extends nr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const op=class op{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};op.prototype.isMatrix2=!0;let J0=op;function Q0(r,e,t,s){const o=ny(s);switch(t){case Vg:return r*e;case Hg:return r*e/o.components*o.byteLength;case Xh:return r*e/o.components*o.byteLength;case Oa:return r*e*2/o.components*o.byteLength;case qh:return r*e*2/o.components*o.byteLength;case Gg:return r*e*3/o.components*o.byteLength;case Ur:return r*e*4/o.components*o.byteLength;case jh:return r*e*4/o.components*o.byteLength;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(r,16)*Math.max(e,8)/4;case rh:case ah:return Math.max(r,8)*Math.max(e,8)/2;case lh:case ch:case dh:case fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uh:case Mu:case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Rh:case Ch:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Lh:case Nh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eu:case Ih:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(r){switch(r){case ir:case Fg:return{byteLength:1,components:1};case Rl:case kg:case ts:return{byteLength:2,components:1};case Hh:case Wh:return{byteLength:2,components:4};case es:case Gh:case Zr:return{byteLength:4,components:1};case Bg:case zg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iv(){let r=null,e=!1,t=null,s=null;function o(l,u){s=r.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function iy(r){const e=new WeakMap;function t(f,m){const p=f.array,y=f.usage,S=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,y),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function s(f,m,p){const y=m.array,S=m.updateRanges;if(r.bindBuffer(p,f),S.length===0)r.bufferSubData(p,0,y);else{S.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<S.length;M++){const E=S[x],C=S[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,S[x]=C)}S.length=x+1;for(let M=0,E=S.length;M<E;M++){const C=S[M];r.bufferSubData(p,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(r.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sy=`#ifdef USE_ALPHAHASH
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
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
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
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,xy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ay=`#define PI 3.141592653589793
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
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
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
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tS=`PhysicalMaterial material;
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
#endif`,nS=`uniform sampler2D dfgLUT;
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
}`,iS=`
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
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
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,oS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pS=`#if defined( USE_POINTS_UV )
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
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_S=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
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
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ES=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
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
#endif`,RS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,US=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HS=`float getShadowMask() {
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
}`,WS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XS=`#ifdef USE_SKINNING
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
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,fM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,vM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,MM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,bM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,PM=`#define TOON
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
}`,LM=`#define TOON
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
}`,NM=`uniform float size;
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
}`,IM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,OM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:ry,alphahash_pars_fragment:sy,alphamap_fragment:ay,alphamap_pars_fragment:oy,alphatest_fragment:ly,alphatest_pars_fragment:cy,aomap_fragment:uy,aomap_pars_fragment:dy,batching_pars_vertex:fy,batching_vertex:hy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:yy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:Ey,color_pars_fragment:wy,color_pars_vertex:by,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Py,displacementmap_vertex:Ly,emissivemap_fragment:Ny,emissivemap_pars_fragment:Iy,colorspace_fragment:Dy,colorspace_pars_fragment:Uy,envmap_fragment:Oy,envmap_common_pars_fragment:Fy,envmap_pars_fragment:ky,envmap_pars_vertex:By,envmap_physical_pars_fragment:Ky,envmap_vertex:zy,fog_vertex:Vy,fog_pars_vertex:Gy,fog_fragment:Hy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:$y,lights_pars_begin:Yy,lights_toon_fragment:Zy,lights_toon_pars_fragment:Jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:eS,lights_physical_fragment:tS,lights_physical_pars_fragment:nS,lights_fragment_begin:iS,lights_fragment_maps:rS,lights_fragment_end:sS,lightprobes_pars_fragment:aS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:lS,logdepthbuf_pars_vertex:cS,logdepthbuf_vertex:uS,map_fragment:dS,map_pars_fragment:fS,map_particle_fragment:hS,map_particle_pars_fragment:pS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:gS,morphinstance_vertex:vS,morphcolor_vertex:xS,morphnormal_vertex:_S,morphtarget_pars_vertex:yS,morphtarget_vertex:SS,normal_fragment_begin:MS,normal_fragment_maps:ES,normal_pars_fragment:wS,normal_pars_vertex:bS,normal_vertex:TS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:RS,clearcoat_normal_fragment_maps:CS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:LS,opaque_fragment:NS,packing:IS,premultiplied_alpha_fragment:DS,project_vertex:US,dithering_fragment:OS,dithering_pars_fragment:FS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:zS,shadowmap_pars_vertex:VS,shadowmap_vertex:GS,shadowmask_pars_fragment:HS,skinbase_vertex:WS,skinning_pars_vertex:XS,skinning_vertex:qS,skinnormal_vertex:jS,specularmap_fragment:$S,specularmap_pars_fragment:YS,tonemapping_fragment:KS,tonemapping_pars_fragment:ZS,transmission_fragment:JS,transmission_pars_fragment:QS,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:rM,background_frag:sM,backgroundCube_vert:aM,backgroundCube_frag:oM,cube_vert:lM,cube_frag:cM,depth_vert:uM,depth_frag:dM,distance_vert:fM,distance_frag:hM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:vM,meshbasic_vert:xM,meshbasic_frag:_M,meshlambert_vert:yM,meshlambert_frag:SM,meshmatcap_vert:MM,meshmatcap_frag:EM,meshnormal_vert:wM,meshnormal_frag:bM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:PM,meshtoon_frag:LM,points_vert:NM,points_frag:IM,shadow_vert:DM,shadow_frag:UM,sprite_vert:OM,sprite_frag:FM},Ze={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Kr={basic:{uniforms:Ni([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ni([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ni([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ni([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ni([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ni([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ni([Ze.points,Ze.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ni([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ni([Ze.common,Ze.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ni([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ni([Ze.sprite,Ze.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:Ni([Ze.common,Ze.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:Ni([Ze.lights,Ze.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Kr.physical={uniforms:Ni([Kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const fu={r:0,b:0,g:0},kM=new Pn,rv=new Pt;rv.set(-1,0,0,0,1,0,0,0,1);function BM(r,e,t,s,o,l){const u=new $t(0);let f=o===!0?0:1,m,p,y=null,S=0,x=null;function M(A){let F=A.isScene===!0?A.background:null;if(F&&F.isTexture){const R=A.backgroundBlurriness>0;F=e.get(F,R)}return F}function E(A){let F=!1;const R=M(A);R===null?_(u,f):R&&R.isColor&&(_(R,1),F=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(A,F){const R=M(F);R&&(R.isCubeTexture||R.mapping===Pu)?(p===void 0&&(p=new ve(new St(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Io(Kr.backgroundCube.uniforms),vertexShader:Kr.backgroundCube.vertexShader,fragmentShader:Kr.backgroundCube.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(rv),p.material.toneMapped=Zt.getTransfer(R.colorSpace)!==hn,(y!==R||S!==R.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,y=R,S=R.version,x=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ve(new Fa(2,2),new ns({name:"BackgroundMaterial",uniforms:Io(Kr.background.uniforms),vertexShader:Kr.background.vertexShader,fragmentShader:Kr.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Zt.getTransfer(R.colorSpace)!==hn,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||S!==R.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,y=R,S=R.version,x=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function _(A,F){A.getRGB(fu,ev(r)),t.buffers.color.setClear(fu.r,fu.g,fu.b,F,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,F=1){u.set(A),f=F,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,_(u,f)},render:E,addToRenderList:C,dispose:v}}function zM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,u=!1;function f(G,W,ne,H,re){let fe=!1;const ee=S(G,H,ne,W);l!==ee&&(l=ee,p(l.object)),fe=M(G,H,ne,re),fe&&E(G,H,ne,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,R(G,W,ne,H),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function y(G){return r.deleteVertexArray(G)}function S(G,W,ne,H){const re=H.wireframe===!0;let fe=s[W.id];fe===void 0&&(fe={},s[W.id]=fe);const ee=G.isInstancedMesh===!0?G.id:0;let te=fe[ee];te===void 0&&(te={},fe[ee]=te);let Y=te[ne.id];Y===void 0&&(Y={},te[ne.id]=Y);let K=Y[re];return K===void 0&&(K=x(m()),Y[re]=K),K}function x(G){const W=[],ne=[],H=[];for(let re=0;re<t;re++)W[re]=0,ne[re]=0,H[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ne,attributeDivisors:H,object:G,attributes:{},index:null}}function M(G,W,ne,H){const re=l.attributes,fe=W.attributes;let ee=0;const te=ne.getAttributes();for(const Y in te)if(te[Y].location>=0){const T=re[Y];let ce=fe[Y];if(ce===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor)),T===void 0||T.attribute!==ce||ce&&T.data!==ce.data)return!0;ee++}return l.attributesNum!==ee||l.index!==H}function E(G,W,ne,H){const re={},fe=W.attributes;let ee=0;const te=ne.getAttributes();for(const Y in te)if(te[Y].location>=0){let T=fe[Y];T===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(T=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(T=G.instanceColor));const ce={};ce.attribute=T,T&&T.data&&(ce.data=T.data),re[Y]=ce,ee++}l.attributes=re,l.attributesNum=ee,l.index=H}function C(){const G=l.newAttributes;for(let W=0,ne=G.length;W<ne;W++)G[W]=0}function _(G){v(G,0)}function v(G,W){const ne=l.newAttributes,H=l.enabledAttributes,re=l.attributeDivisors;ne[G]=1,H[G]===0&&(r.enableVertexAttribArray(G),H[G]=1),re[G]!==W&&(r.vertexAttribDivisor(G,W),re[G]=W)}function A(){const G=l.newAttributes,W=l.enabledAttributes;for(let ne=0,H=W.length;ne<H;ne++)W[ne]!==G[ne]&&(r.disableVertexAttribArray(ne),W[ne]=0)}function F(G,W,ne,H,re,fe,ee){ee===!0?r.vertexAttribIPointer(G,W,ne,re,fe):r.vertexAttribPointer(G,W,ne,H,re,fe)}function R(G,W,ne,H){C();const re=H.attributes,fe=ne.getAttributes(),ee=W.defaultAttributeValues;for(const te in fe){const Y=fe[te];if(Y.location>=0){let K=re[te];if(K===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),K!==void 0){const T=K.normalized,ce=K.itemSize,_e=e.get(K);if(_e===void 0)continue;const We=_e.buffer,Xe=_e.type,Ge=_e.bytesPerElement,se=Xe===r.INT||Xe===r.UNSIGNED_INT||K.gpuType===Gh;if(K.isInterleavedBufferAttribute){const de=K.data,Re=de.stride,Ye=K.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Y.locationSize;Ue++)v(Y.location+Ue,de.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<Y.locationSize;Ue++)_(Y.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ue=0;Ue<Y.locationSize;Ue++)F(Y.location+Ue,ce/Y.locationSize,Xe,T,Re*Ge,(Ye+ce/Y.locationSize*Ue)*Ge,se)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)v(Y.location+de,K.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<Y.locationSize;de++)_(Y.location+de);r.bindBuffer(r.ARRAY_BUFFER,We);for(let de=0;de<Y.locationSize;de++)F(Y.location+de,ce/Y.locationSize,Xe,T,ce*Ge,ce/Y.locationSize*de*Ge,se)}}else if(ee!==void 0){const T=ee[te];if(T!==void 0)switch(T.length){case 2:r.vertexAttrib2fv(Y.location,T);break;case 3:r.vertexAttrib3fv(Y.location,T);break;case 4:r.vertexAttrib4fv(Y.location,T);break;default:r.vertexAttrib1fv(Y.location,T)}}}}A()}function U(){D();for(const G in s){const W=s[G];for(const ne in W){const H=W[ne];for(const re in H){const fe=H[re];for(const ee in fe)y(fe[ee].object),delete fe[ee];delete H[re]}}delete s[G]}}function I(G){if(s[G.id]===void 0)return;const W=s[G.id];for(const ne in W){const H=W[ne];for(const re in H){const fe=H[re];for(const ee in fe)y(fe[ee].object),delete fe[ee];delete H[re]}}delete s[G.id]}function k(G){for(const W in s){const ne=s[W];for(const H in ne){const re=ne[H];if(re[G.id]===void 0)continue;const fe=re[G.id];for(const ee in fe)y(fe[ee].object),delete fe[ee];delete re[G.id]}}}function b(G){for(const W in s){const ne=s[W],H=G.isInstancedMesh===!0?G.id:0,re=ne[H];if(re!==void 0){for(const fe in re){const ee=re[fe];for(const te in ee)y(ee[te].object),delete ee[te];delete re[fe]}delete ne[H],Object.keys(ne).length===0&&delete s[W]}}}function D(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:_,disableUnusedAttributes:A}}function VM(r,e,t){let s;function o(m){s=m}function l(m,p){r.drawArrays(s,m,p),t.update(p,s,1)}function u(m,p,y){y!==0&&(r.drawArraysInstanced(s,m,p,y),t.update(p,s,y))}function f(m,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,y);let x=0;for(let M=0;M<y;M++)x+=p[M];t.update(x,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function GM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Ur&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const b=k===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ir&&k!==Zr&&!b&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const y=m(p);y!==p&&(Mt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:A,maxVaryings:F,maxFragmentUniforms:R,maxSamples:U,samples:I}}function HM(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ta,f=new Pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||s!==0||o;return o=x,s=S.length,M},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=y(S,x,0)},this.setState=function(S,x,M){const E=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,v=r.get(S);if(!o||E===null||E.length===0||l&&!_)l?y(null):p();else{const A=l?0:s,F=A*4;let R=v.clippingState||null;m.value=R,R=y(E,x,F,M);for(let U=0;U!==F;++U)R[U]=t[U];v.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(S,x,M,E){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=m.value,E!==!0||_===null){const v=M+C*4,A=x.matrixWorldInverse;f.getNormalMatrix(A),(_===null||_.length<v)&&(_=new Float32Array(v));for(let F=0,R=M;F!==C;++F,R+=4)u.copy(S[F]).applyMatrix4(A,f),u.normal.toArray(_,R),_[R+3]=u.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Co=4,WM=6,XM=20,qM=256,Sl=new np,eg=new $t;let Hf=null,Wf=0,Xf=0,qf=!1;const jM=new ie,Ca=new ie;class tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=jM}=l;Hf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hf,Wf,Xf),this._renderer.xr.enabled=qf,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Da||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:ts,format:Ur,colorSpace:wu,depthBuffer:!1},o=ng(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$M(l)),this._blurMaterial=KM(l,e,t),this._ggxMaterial=YM(l,e,t)}return o}_compileMaterial(e){const t=new ve(new $n,e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,s,o,l){const m=new nr(90,1,t,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(eg),S.toneMapping=Qr,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new St,new jt({name:"PMREM.Background",side:qi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let v=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,v=!0):(_.color.copy(eg),v=!0);for(let F=0;F<6;F++){const R=F%3;R===0?(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+y[F],l.y,l.z)):R===1?(m.up.set(0,0,p[F]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+y[F],l.z)):(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+y[F]));const U=this._cubeSize;bo(o,R*U,F>2?U:0,U,U),S.setRenderTarget(o),v&&S.render(C,m),S.render(e,m)}S.toneMapping=M,S.autoClear=x,e.background=A}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Da||e.mapping===No;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;bo(t,0,0,3*m,2*m),s.setRenderTarget(t),s.render(u,Sl)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-y*y),x=p*1.25,M=S*x,{_lodMax:E}=this,C=this._sizeLods[s],_=3*C*(s>E-Co?s-E+Co:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-t,bo(l,_,v,3*C,2*C),o.setRenderTarget(l),o.render(f,Sl),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-s,bo(e,_,v,3*C,2*C),o.setRenderTarget(e),o.render(f,Sl)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,u),this._blurPass(l,e,s,s,u)}_blurPass(e,t,s,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const y=this._sizeLods[o],S=3*y*(o>this._lodMax-Co?o-this._lodMax+Co:0),x=4*(this._cubeSize-y);bo(t,S,x,3*y,2*y),u.setRenderTarget(t),u.render(m,Sl)}}function $M(r){const e=[],t=[];let s=r;const o=r-Co+1+WM;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);const f=1/(u-2),m=-f,p=1+f,y=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,x=6,M=3,E=new Float32Array(M*x*S),C=new Float32Array(M*x*S);for(let v=0;v<S;v++){const A=v%3*2/3-1,F=v>2?0:-1,R=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];E.set(R,M*x*v);for(let U=0;U<x;U++){const I=y[U*2]*2-1,k=y[U*2+1]*2-1;v===0?Ca.set(1,k,I):v===1?Ca.set(-I,1,-k):v===2?Ca.set(-I,k,1):v===3?Ca.set(-1,k,-I):v===4?Ca.set(-I,-1,k):Ca.set(I,k,-1),Ca.toArray(C,(v*x+U)*M)}}const _=new $n;_.setAttribute("position",new Fr(E,M)),_.setAttribute("outputDirection",new Fr(C,M)),t.push(new ve(_,null)),s>Co&&s--}return{lodMeshes:t,sizeLods:e}}function ng(r,e,t){const s=new Or(r,e,t);return s.texture.mapping=Pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function bo(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function YM(r,e,t){return new ns({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function KM(r,e,t){return new ns({name:"SphericalGaussianBlur",defines:{SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function ig(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function rg(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class sv extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Jg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new St(5,5,5),l=new ns({name:"CubemapFromEquirect",uniforms:Io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qi,blending:bs});l.uniforms.tEquirect.value=t;const u=new ve(o,l),f=t.minFilter;return t.minFilter===La&&(t.minFilter=Mi),new ey(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function ZM(r){let e=new WeakMap,t=new WeakMap,s=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===mf||M===gf)if(e.has(x)){const E=e.get(x).texture;return f(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const C=new sv(E.height);return C.fromEquirectangularTexture(r,x),e.set(x,C),x.addEventListener("dispose",p),f(C.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,E=M===mf||M===gf,C=M===Da||M===No;if(E||C){let _=t.get(x);const v=_!==void 0?_.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==v)return s===null&&(s=new tg(r)),_=E?s.fromEquirectangular(x,_):s.fromCubemap(x,_),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),_.texture;if(_!==void 0)return _.texture;{const A=x.image;return E&&A&&A.height>0||C&&A&&m(A)?(s===null&&(s=new tg(r)),_=E?s.fromEquirectangular(x):s.fromCubemap(x),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),x.addEventListener("dispose",y),_.texture):null}}}return x}function f(x,M){return M===mf?x.mapping=Da:M===gf&&(x.mapping=No),x}function m(x){let M=0;const E=6;for(let C=0;C<E;C++)x[C]!==void 0&&M++;return M===E}function p(x){const M=x.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function S(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:S}}function JM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Po("WebGLRenderer: "+s+" extension not supported."),o}}}function QM(r,e,t,s){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function m(S){const x=S.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,E=S.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const A=M.array;C=M.version;for(let F=0,R=A.length;F<R;F+=3){const U=A[F+0],I=A[F+1],k=A[F+2];x.push(U,I,I,k,k,U)}}else{const A=E.array;C=E.version;for(let F=0,R=A.length/3-1;F<R;F+=3){const U=F+0,I=F+1,k=F+2;x.push(U,I,I,k,k,U)}}const _=new(E.count>=65535?Yg:$g)(x,1);_.version=C;const v=l.get(S);v&&e.remove(v),l.set(S,_)}function y(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:m,getWireframeAttribute:y}}function e1(r,e,t){let s;function o(S){s=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function m(S,x){r.drawElements(s,x,l,S*u),t.update(x,s,1)}function p(S,x,M){M!==0&&(r.drawElementsInstanced(s,x,l,S*u,M),t.update(x,s,M))}function y(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,l,S,0,M);let C=0;for(let _=0;_<M;_++)C+=x[_];t.update(C,s,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=y}function t1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:ln("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function n1(r,e,t){const s=new WeakMap,o=new Dn;function l(u,f,m){const p=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=y!==void 0?y.length:0;let x=s.get(f);if(x===void 0||x.count!==S){let z=function(){b.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var M=z;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),C===!0&&(R=2),_===!0&&(R=3);let U=f.attributes.position.count*R,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const k=new Float32Array(U*I*4*S),b=new Xg(k,U,I,S);b.type=Zr,b.needsUpdate=!0;const D=R*4;for(let G=0;G<S;G++){const W=v[G],ne=A[G],H=F[G],re=U*I*4*G;for(let fe=0;fe<W.count;fe++){const ee=fe*D;E===!0&&(o.fromBufferAttribute(W,fe),k[re+ee+0]=o.x,k[re+ee+1]=o.y,k[re+ee+2]=o.z,k[re+ee+3]=0),C===!0&&(o.fromBufferAttribute(ne,fe),k[re+ee+4]=o.x,k[re+ee+5]=o.y,k[re+ee+6]=o.z,k[re+ee+7]=0),_===!0&&(o.fromBufferAttribute(H,fe),k[re+ee+8]=o.x,k[re+ee+9]=o.y,k[re+ee+10]=o.z,k[re+ee+11]=H.itemSize===4?o.w:1)}}x={count:S,texture:b,size:new Ht(U,I)},s.set(f,x),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<p.length;_++)E+=p[_];const C=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function i1(r,e,t,s,o){let l=new WeakMap;function u(p){const y=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==y&&(e.update(x),l.set(x,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==y&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,y))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==y&&(M.update(),l.set(M,y))}return x}function f(){l=new WeakMap}function m(p){const y=p.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:f}}const r1={[Pg]:"LINEAR_TONE_MAPPING",[Lg]:"REINHARD_TONE_MAPPING",[Ng]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Dg]:"AGX_TONE_MAPPING",[Ug]:"NEUTRAL_TONE_MAPPING",[Ig]:"CUSTOM_TONE_MAPPING"};function s1(r,e,t,s,o,l){const u=new Or(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new $n;p.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new vn([0,2,0,0,2,0],2));const y=new j_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new ve(p,y),x=new np(-1,1,1,-1,0,1);let M=null,E=null,C=!1,_,v=null,A=[],F=!1;this.setSize=function(R,U){u.setSize(R,U),f!==null&&f.setSize(R,U),m!==null&&m.setSize(R,U);for(let I=0;I<A.length;I++){const k=A[I];k.setSize&&k.setSize(R,U)}},this.setEffects=function(R){A=R,F=A.length>0&&A[0].isRenderPass===!0;const U=u.width,I=u.height;A.length>0&&f===null&&(f=new Or(U,I,{type:ts,depthBuffer:!1,stencilBuffer:!1}),m=new Or(U,I,{type:ts,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<A.length;k++){const b=A[k];b.setSize&&b.setSize(U,I)}},this.begin=function(R,U){if(C||R.toneMapping===Qr&&A.length===0)return!1;if(v=U,U!==null){const I=U.width,k=U.height;(u.width!==I||u.height!==k)&&this.setSize(I,k)}return F===!1&&R.setRenderTarget(u),_=R.toneMapping,R.toneMapping=Qr,!0},this.hasRenderPass=function(){return F},this.end=function(R,U){R.toneMapping=_,C=!0;let I=u,k=f;for(let b=0;b<A.length;b++){const D=A[b];D.enabled!==!1&&(D.render(R,k,I,U),D.needsSwap!==!1&&(I=k,k=k===f?m:f))}if(M!==R.outputColorSpace||E!==R.toneMapping){M=R.outputColorSpace,E=R.toneMapping,y.defines={},Zt.getTransfer(M)===hn&&(y.defines.SRGB_TRANSFER="");const b=r1[E];b&&(y.defines[b]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=I.texture,R.setRenderTarget(v),R.render(S,x),v=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),y.dispose()}}const av=new Ei,Fh=new Ll(1,1),ov=new Xg,lv=new E_,cv=new Jg,sg=[],ag=[],og=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function Uo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=sg[o];if(l===void 0&&(l=new Float32Array(o),sg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function Yn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Kn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Du(r,e){let t=ag[e];t===void 0&&(t=new Int32Array(e),ag[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function a1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function o1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2fv(this.addr,e),Kn(t,e)}}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;r.uniform3fv(this.addr,e),Kn(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4fv(this.addr,e),Kn(t,e)}}function u1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;cg.set(s),r.uniformMatrix2fv(this.addr,!1,cg),Kn(t,s)}}function d1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;lg.set(s),r.uniformMatrix3fv(this.addr,!1,lg),Kn(t,s)}}function f1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;og.set(s),r.uniformMatrix4fv(this.addr,!1,og),Kn(t,s)}}function h1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2iv(this.addr,e),Kn(t,e)}}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;r.uniform3iv(this.addr,e),Kn(t,e)}}function g1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4iv(this.addr,e),Kn(t,e)}}function v1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function x1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2uiv(this.addr,e),Kn(t,e)}}function _1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;r.uniform3uiv(this.addr,e),Kn(t,e)}}function y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4uiv(this.addr,e),Kn(t,e)}}function S1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Fh.compareFunction=t.isReversedDepthBuffer()?Yh:$h,l=Fh):l=av,t.setTexture2D(e||l,o)}function M1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||lv,o)}function E1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||cv,o)}function w1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||ov,o)}function b1(r){switch(r){case 5126:return a1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return x1;case 36295:return _1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}function T1(r,e){r.uniform1fv(this.addr,e)}function A1(r,e){const t=Uo(e,this.size,2);r.uniform2fv(this.addr,t)}function R1(r,e){const t=Uo(e,this.size,3);r.uniform3fv(this.addr,t)}function C1(r,e){const t=Uo(e,this.size,4);r.uniform4fv(this.addr,t)}function P1(r,e){const t=Uo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function L1(r,e){const t=Uo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function N1(r,e){const t=Uo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function I1(r,e){r.uniform1iv(this.addr,e)}function D1(r,e){r.uniform2iv(this.addr,e)}function U1(r,e){r.uniform3iv(this.addr,e)}function O1(r,e){r.uniform4iv(this.addr,e)}function F1(r,e){r.uniform1uiv(this.addr,e)}function k1(r,e){r.uniform2uiv(this.addr,e)}function B1(r,e){r.uniform3uiv(this.addr,e)}function z1(r,e){r.uniform4uiv(this.addr,e)}function V1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Fh:u=av;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function G1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||lv,l[u])}function H1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||cv,l[u])}function W1(r,e,t){const s=this.cache,o=e.length,l=Du(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||ov,l[u])}function X1(r){switch(r){case 5126:return T1;case 35664:return A1;case 35665:return R1;case 35666:return C1;case 35674:return P1;case 35675:return L1;case 35676:return N1;case 5124:case 35670:return I1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return O1;case 5125:return F1;case 36294:return k1;case 36295:return B1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return W1}}class q1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=b1(t.type)}}class j1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X1(t.type)}}class $1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const jf=/(\w+)(\])?(\[|\.)?/g;function ug(r,e){r.seq.push(e),r.map[e.id]=e}function Y1(r,e,t){const s=r.name,o=s.length;for(jf.lastIndex=0;;){const l=jf.exec(s),u=jf.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){ug(t,p===void 0?new q1(f,r,e):new j1(f,r,e));break}else{let S=t.map[f];S===void 0&&(S=new $1(f),ug(t,S)),t=S}}}class Su{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);Y1(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=s[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function dg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const K1=37297;let Z1=0;function J1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const fg=new Pt;function Q1(r){Zt._getMatrix(fg,Zt.workingColorSpace,r);const e=`mat3( ${fg.elements.map(t=>t.toFixed(4))} )`;switch(Zt.getTransfer(r)){case bu:return[e,"LinearTransferOETF"];case hn:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+J1(r.getShaderSource(e),f)}else return l}function eE(r,e){const t=Q1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tE={[Pg]:"Linear",[Lg]:"Reinhard",[Ng]:"Cineon",[Vh]:"ACESFilmic",[Dg]:"AgX",[Ug]:"Neutral",[Ig]:"Custom"};function nE(r,e){const t=tE[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hu=new ie;function iE(){Zt.getLuminanceCoefficients(hu);const r=hu.x.toFixed(4),e=hu.y.toFixed(4),t=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function sE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function aE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function wl(r){return r!==""}function pg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(oE,cE)}const lE=new Map;function cE(r,e){let t=Ut[e];if(t===void 0){const s=lE.get(e);if(s!==void 0)t=Ut[s],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kh(t)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(r){return r.replace(uE,dE)}function dE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function vg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const fE={[mu]:"SHADOWMAP_TYPE_PCF",[El]:"SHADOWMAP_TYPE_VSM"};function hE(r){return fE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pE={[Da]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function mE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gE={[No]:"ENVMAP_MODE_REFRACTION"};function vE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xE={[Cg]:"ENVMAP_BLENDING_MULTIPLY",[e_]:"ENVMAP_BLENDING_MIX",[t_]:"ENVMAP_BLENDING_ADD"};function _E(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xE[r.combine]||"ENVMAP_BLENDING_NONE"}function yE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function SE(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=hE(t),p=mE(t),y=vE(t),S=_E(t),x=yE(t),M=rE(t),E=sE(l),C=o.createProgram();let _,v,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wl).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wl).join(`
`),v.length>0&&(v+=`
`)):(_=[vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),v=[vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+y:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qr?"#define TONE_MAPPING":"",t.toneMapping!==Qr?Ut.tonemapping_pars_fragment:"",t.toneMapping!==Qr?nE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),iE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wl).join(`
`)),u=kh(u),u=pg(u,t),u=mg(u,t),f=kh(f),f=pg(f,t),f=mg(f,t),u=gg(u),f=gg(f),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===w0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===w0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=A+_+u,R=A+v+f,U=dg(o,o.VERTEX_SHADER,F),I=dg(o,o.FRAGMENT_SHADER,R);o.attachShader(C,U),o.attachShader(C,I),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function k(G){if(r.debug.checkShaderErrors){const W=o.getProgramInfoLog(C)||"",ne=o.getShaderInfoLog(U)||"",H=o.getShaderInfoLog(I)||"",re=W.trim(),fe=ne.trim(),ee=H.trim();let te=!0,Y=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,U,I);else{const K=hg(o,U,"vertex"),T=hg(o,I,"fragment");ln("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+K+`
`+T)}else re!==""?Mt("WebGLProgram: Program Info Log:",re):(fe===""||ee==="")&&(Y=!1);Y&&(G.diagnostics={runnable:te,programLog:re,vertexShader:{log:fe,prefix:_},fragmentShader:{log:ee,prefix:v}})}o.deleteShader(U),o.deleteShader(I),b=new Su(o,C),D=aE(o,C)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let D;this.getAttributes=function(){return D===void 0&&k(this),D};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(C,K1)),z},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=I,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new wE(e),t.set(e,s)),s}}class wE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function bE(r){return r===Oa||r===Mu||r===Eu}function TE(r,e,t,s,o,l){const u=new qg,f=new EE,m=new Set,p=[],y=new Map,S=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,D,z,G,W,ne){const H=G.fog,re=W.geometry,fe=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,te=e.get(b.envMap||fe,ee),Y=te&&te.mapping===Pu?te.image.height:null,K=M[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&Mt("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const T=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ce=T!==void 0?T.length:0;let _e=0;re.morphAttributes.position!==void 0&&(_e=1),re.morphAttributes.normal!==void 0&&(_e=2),re.morphAttributes.color!==void 0&&(_e=3);let We,Xe,Ge,se;if(K){const mt=Kr[K];We=mt.vertexShader,Xe=mt.fragmentShader}else{We=b.vertexShader,Xe=b.fragmentShader;const mt=f.getVertexShaderStage(b),ot=f.getFragmentShaderStage(b);f.update(b,mt,ot),Ge=mt.id,se=ot.id}const de=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ye=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,ut=!!b.map,zt=!!b.matcap,ft=!!te,pt=!!b.aoMap,bt=!!b.lightMap,_t=!!b.bumpMap&&b.wireframe===!1,At=!!b.normalMap,Ot=!!b.displacementMap,Qt=!!b.emissiveMap,Ft=!!b.metalnessMap,kt=!!b.roughnessMap,$=b.anisotropy>0,tn=b.clearcoat>0,Lt=b.dispersion>0,B=b.retroreflectivity>0,w=b.iridescence>0,J=b.sheen>0,ae=b.transmission>0,ge=$&&!!b.anisotropyMap,Pe=tn&&!!b.clearcoatMap,Ne=tn&&!!b.clearcoatNormalMap,ye=tn&&!!b.clearcoatRoughnessMap,be=w&&!!b.iridescenceMap,ze=w&&!!b.iridescenceThicknessMap,Je=J&&!!b.sheenColorMap,Oe=J&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,et=!!b.specularColorMap,rt=!!b.specularIntensityMap,dt=ae&&!!b.transmissionMap,q=ae&&!!b.thicknessMap,Te=!!b.gradientMap,Me=!!b.alphaMap,Se=b.alphaTest>0,Ee=!!b.alphaHash,Z=!!b.extensions;let Fe=Qr;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const ke={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:We,fragmentShader:Xe,defines:b.defines,customVertexShaderID:Ge,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&W.instanceColor!==null,instancingMorph:Ye&&W.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:zt,envMap:ft,envMapMode:ft&&te.mapping,envMapCubeUVHeight:Y,aoMap:pt,lightMap:bt,bumpMap:_t,normalMap:At,displacementMap:Ot,emissiveMap:Qt,normalMapObjectSpace:At&&b.normalMapType===r_,normalMapTangentSpace:At&&b.normalMapType===Dh,packedNormalMap:At&&b.normalMapType===Dh&&bE(b.normalMap.format),metalnessMap:Ft,roughnessMap:kt,anisotropy:$,anisotropyMap:ge,clearcoat:tn,clearcoatMap:Pe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ye,dispersion:Lt,retroreflection:B,iridescence:w,iridescenceMap:be,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:et,specularIntensityMap:rt,transmission:ae,transmissionMap:dt,thicknessMap:q,gradientMap:Te,opaque:b.transparent===!1&&b.blending===Tl&&b.alphaToCoverage===!1,alphaMap:Me,alphaTest:Se,alphaHash:Ee,combine:b.combine,mapUv:ut&&E(b.map.channel),aoMapUv:pt&&E(b.aoMap.channel),lightMapUv:bt&&E(b.lightMap.channel),bumpMapUv:_t&&E(b.bumpMap.channel),normalMapUv:At&&E(b.normalMap.channel),displacementMapUv:Ot&&E(b.displacementMap.channel),emissiveMapUv:Qt&&E(b.emissiveMap.channel),metalnessMapUv:Ft&&E(b.metalnessMap.channel),roughnessMapUv:kt&&E(b.roughnessMap.channel),anisotropyMapUv:ge&&E(b.anisotropyMap.channel),clearcoatMapUv:Pe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&E(b.sheenRoughnessMap.channel),specularMapUv:Ce&&E(b.specularMap.channel),specularColorMapUv:et&&E(b.specularColorMap.channel),specularIntensityMapUv:rt&&E(b.specularIntensityMap.channel),transmissionMapUv:dt&&E(b.transmissionMap.channel),thicknessMapUv:q&&E(b.thicknessMap.channel),alphaMapUv:Me&&E(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(At||$),vertexNormals:!!re.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!re.attributes.uv&&(ut||Me),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||re.attributes.normal===void 0&&At===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:re.attributes.position!==void 0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:_e,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===hn,decodeVideoTextureEmissive:Qt&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===hn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xi,flipSided:b.side===qi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Z&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&b.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ke.vertexUv1s=m.has(1),ke.vertexUv2s=m.has(2),ke.vertexUv3s=m.has(3),m.clear(),ke}function _(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)D.push(z),D.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(v(D,b),A(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function v(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numSunLights),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numSunLightShadows),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function A(b,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function F(b){const D=M[b.type];let z;if(D){const G=Kr[D];z=W_.clone(G.uniforms)}else z=b.uniforms;return z}function R(b,D){let z=y.get(D);return z!==void 0?++z.usedTimes:(z=new SE(r,D,b,o),p.push(z),y.set(D,z)),z}function U(b){if(--b.usedTimes===0){const D=p.indexOf(b);p[D]=p[p.length-1],p.pop(),y.delete(b.cacheKey),b.destroy()}}function I(b){f.remove(b)}function k(){f.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:F,acquireProgram:R,releaseProgram:U,releaseShaderCache:I,programs:p,dispose:k}}function AE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,m){r.get(u)[f]=m}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function RE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function xg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _g(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,E,C,_,v){let A=r[e];return A===void 0?(A={id:x.id,object:x,geometry:M,material:E,materialVariant:u(x),groupOrder:C,renderOrder:x.renderOrder,z:_,group:v},r[e]=A):(A.id=x.id,A.object=x,A.geometry=M,A.material=E,A.materialVariant=u(x),A.groupOrder=C,A.renderOrder=x.renderOrder,A.z=_,A.group=v),e++,A}function m(x,M,E,C,_,v,A){A.reversedDepth===!0&&(_=-_);const F=f(x,M,E,C,_,v);E.transmission>0?s.push(F):E.transparent===!0?o.push(F):t.push(F)}function p(x,M,E,C,_,v){const A=f(x,M,E,C,_,v);E.transmission>0?s.unshift(A):E.transparent===!0?o.unshift(A):t.unshift(A)}function y(x,M){t.length>1&&t.sort(x||RE),s.length>1&&s.sort(M||xg),o.length>1&&o.sort(M||xg)}function S(){for(let x=e,M=r.length;x<M;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:m,unshift:p,finish:S,sort:y}}function CE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new _g,r.set(s,[u])):o>=l.length?(u=new _g,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function PE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new $t};break;case"SpotLight":t={position:new ie,direction:new ie,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new $t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":t={color:new $t,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function LE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let NE=0;function IE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function DE(r){const e=new PE,t=LE(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new Pn,u=new Pn;function f(p){let y=0,S=0,x=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let M=0,E=0,C=0,_=0,v=0,A=0,F=0,R=0,U=0,I=0,k=0,b=0,D=0,z=0;p.sort(IE);for(let W=0,ne=p.length;W<ne;W++){const H=p[W],re=H.color,fe=H.intensity,ee=H.distance;let te=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Oa?te=H.shadow.map.texture:te=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)y+=re.r*fe,S+=re.g*fe,x+=re.b*fe;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(H.sh.coefficients[Y],fe);z++}else if(H.isSunLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,T=t.get(H);T.shadowIntensity=K.intensity,T.shadowBias=K.bias,T.shadowNormalBias=K.normalBias,T.shadowRadius=K.radius,T.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),s.sunShadow[E]=T,s.sunShadowMap[E]=te;const ce=K.getViewportCount();for(let _e=0;_e<ce;_e++)s.sunShadowMatrix[C+_e]=K.getMatrix(_e),s.sunShadowCascade[C+_e]=K._cascadeData[_e];C+=ce,E++}s.sun[M]=Y,M++}else if(H.isDirectionalLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,T=t.get(H);T.shadowIntensity=K.intensity,T.shadowBias=K.bias,T.shadowNormalBias=K.normalBias,T.shadowRadius=K.radius,T.shadowMapSize=K.mapSize,s.directionalShadow[_]=T,s.directionalShadowMap[_]=te,s.directionalShadowMatrix[_]=H.shadow.matrix,U++}s.directional[_]=Y,_++}else if(H.isSpotLight){const Y=e.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(re).multiplyScalar(fe),Y.distance=ee,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,s.spot[A]=Y;const K=H.shadow;if(H.map&&(s.spotLightMap[b]=H.map,b++,K.updateMatrices(H),H.castShadow&&D++),s.spotLightMatrix[A]=K.matrix,H.castShadow){const T=t.get(H);T.shadowIntensity=K.intensity,T.shadowBias=K.bias,T.shadowNormalBias=K.normalBias,T.shadowRadius=K.radius,T.shadowMapSize=K.mapSize,s.spotShadow[A]=T,s.spotShadowMap[A]=te,k++}A++}else if(H.isRectAreaLight){const Y=e.get(H);Y.color.copy(re).multiplyScalar(fe),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),s.rectArea[F]=Y,F++}else if(H.isPointLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const K=H.shadow,T=t.get(H);T.shadowIntensity=K.intensity,T.shadowBias=K.bias,T.shadowNormalBias=K.normalBias,T.shadowRadius=K.radius,T.shadowMapSize=K.mapSize,T.shadowCameraNear=K.camera.near,T.shadowCameraFar=K.camera.far,s.pointShadow[v]=T,s.pointShadowMap[v]=te,s.pointShadowMatrix[v]=H.shadow.matrix,I++}s.point[v]=Y,v++}else if(H.isHemisphereLight){const Y=e.get(H);Y.skyColor.copy(H.color).multiplyScalar(fe),Y.groundColor.copy(H.groundColor).multiplyScalar(fe),s.hemi[R]=Y,R++}}F>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ze.LTC_FLOAT_1,s.rectAreaLTC2=Ze.LTC_FLOAT_2):(s.rectAreaLTC1=Ze.LTC_HALF_1,s.rectAreaLTC2=Ze.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=S,s.ambient[2]=x;const G=s.hash;(G.sunLength!==M||G.directionalLength!==_||G.pointLength!==v||G.spotLength!==A||G.rectAreaLength!==F||G.hemiLength!==R||G.numSunShadows!==E||G.numDirectionalShadows!==U||G.numPointShadows!==I||G.numSpotShadows!==k||G.numSpotMaps!==b||G.numLightProbes!==z)&&(s.sun.length=M,s.directional.length=_,s.spot.length=A,s.rectArea.length=F,s.point.length=v,s.hemi.length=R,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=I,s.pointShadowMap.length=I,s.pointShadowMatrix.length=I,s.spotShadow.length=k,s.spotShadowMap.length=k,s.spotLightMatrix.length=k+b-D,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=z,G.sunLength=M,G.directionalLength=_,G.pointLength=v,G.spotLength=A,G.rectAreaLength=F,G.hemiLength=R,G.numSunShadows=E,G.numDirectionalShadows=U,G.numPointShadows=I,G.numSpotShadows=k,G.numSpotMaps=b,G.numLightProbes=z,s.version=NE++)}function m(p,y){let S=0,x=0,M=0,E=0,C=0,_=0;const v=y.matrixWorldInverse;for(let A=0,F=p.length;A<F;A++){const R=p[A];if(R.isSunLight){const U=s.sun[S];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(v),S++}else if(R.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),x++}else if(R.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),E++}else if(R.isRectAreaLight){const U=s.rectArea[C];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(v),u.identity(),l.copy(R.matrixWorld),l.premultiply(v),u.extractRotation(l),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const U=s.point[M];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(v),M++}else if(R.isHemisphereLight){const U=s.hemi[_];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(v),_++}}}return{setup:f,setupView:m,state:s}}function yg(r){const e=new DE(r),t=[],s=[],o=[];function l(x){S.camera=x,t.length=0,s.length=0,o.length=0}function u(x){t.push(x)}function f(x){s.push(x)}function m(x){o.push(x)}function p(){e.setup(t)}function y(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:y,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function UE(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new yg(r),e.set(o,[f])):l>=u.length?(f=new yg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
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
}`,kE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],BE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Sg=new Pn,Ml=new ie,$f=new ie;function zE(r,e,t){let s=new Qh;const o=new Ht,l=new Ht,u=new Dn,f=new $_,m=new Y_,p={},y=t.maxTextureSize,S={[Ia]:qi,[qi]:Ia,[Xi]:Xi},x=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:OE,fragmentShader:FE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new Fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ve(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let v=this.type;this.render=function(I,k,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;this.type===Ux&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mu);const D=r.getRenderTarget(),z=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),W=r.state;W.setBlending(bs),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ne=v!==this.type;ne&&k.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(re=>re.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,re=I.length;H<re;H++){const fe=I[H],ee=fe.shadow;if(ee===void 0){Mt("WebGLShadowMap:",fe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const te=ee.getFrameExtents();o.multiply(te),l.copy(ee.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/te.x),o.x=l.x*te.x,ee.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/te.y),o.y=l.y*te.y,ee.mapSize.y=l.y));const Y=r.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=Y,ee.map===null||ne===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===El){if(fe.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Or(o.x,o.y,{format:Oa,type:ts,minFilter:Mi,magFilter:Mi,generateMipmaps:!1}),ee.map.texture.name=fe.name+".shadowMap",ee.map.depthTexture=new Ll(o.x,o.y,Zr),ee.map.depthTexture.name=fe.name+".shadowMapDepth",ee.map.depthTexture.format=As,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=hi,ee.map.depthTexture.magFilter=hi}else fe.isPointLight?(ee.map=new sv(o.x),ee.map.depthTexture=new G_(o.x,es)):(ee.map=new Or(o.x,o.y),ee.map.depthTexture=new Ll(o.x,o.y,es)),ee.map.depthTexture.name=fe.name+".shadowMap",ee.map.depthTexture.format=As,this.type===mu?(ee.map.depthTexture.compareFunction=Y?Yh:$h,ee.map.depthTexture.minFilter=Mi,ee.map.depthTexture.magFilter=Mi):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=hi,ee.map.depthTexture.magFilter=hi);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const K=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();fe.isPointLight!==!0&&ee.updateMatrices(fe,b);for(let T=0;T<K;T++){const ce=ee.getCamera(T);if(fe.isPointLight){const _e=ee.camera,We=ee.matrix,Xe=fe.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),Ml.setFromMatrixPosition(fe.matrixWorld),_e.position.copy(Ml),$f.copy(_e.position),$f.add(kE[T]),_e.up.copy(BE[T]),_e.lookAt($f),_e.updateMatrixWorld(),We.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Sg.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Sg,_e.coordinateSystem,_e.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)r.setRenderTarget(ee.map,T),r.clear();else{T===0&&(r.setRenderTarget(ee.map),r.clear());const _e=ee.getViewport(T);u.set(l.x*_e.x,l.y*_e.y,l.x*_e.z,l.y*_e.w),W.viewport(u)}s=ee.getFrustum(T),R(k,b,ce,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===El&&A(ee,b),ee.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(D,z,G)};function A(I,k){const b=e.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null?I.mapPass=new Or(o.x,o.y,{format:Oa,type:ts}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(k,null,b,x,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value.set(I.map.width,I.map.height),M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(k,null,b,M,C,null)}function F(I,k,b,D){let z=null;const G=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)z=G;else if(z=b.isPointLight===!0?m:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const W=z.uuid,ne=k.uuid;let H=p[W];H===void 0&&(H={},p[W]=H);let re=H[ne];re===void 0&&(re=z.clone(),H[ne]=re,k.addEventListener("dispose",U)),z=re}if(z.visible=k.visible,z.wireframe=k.wireframe,D===El?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:S[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,b.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const W=r.properties.get(z);W.light=b}return z}function R(I,k,b,D,z){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&z===El)&&(!I.frustumCulled||I.intersectsFrustum(s))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const ne=e.update(I),H=I.material;if(Array.isArray(H)){const re=ne.groups;for(let fe=0,ee=re.length;fe<ee;fe++){const te=re[fe],Y=H[te.materialIndex];if(Y&&Y.visible){const K=F(I,Y,D,z);I.onBeforeShadow(r,I,k,b,ne,K,te),r.renderBufferDirect(b,null,ne,K,I,te),I.onAfterShadow(r,I,k,b,ne,K,te)}}}else if(H.visible){const re=F(I,H,D,z);I.onBeforeShadow(r,I,k,b,ne,re,null),r.renderBufferDirect(b,null,ne,re,I,null),I.onAfterShadow(r,I,k,b,ne,re,null)}}const W=I.children;for(let ne=0,H=W.length;ne<H;ne++)R(W[ne],k,b,D,z)}function U(I){I.target.removeEventListener("dispose",U);for(const b in p){const D=p[b],z=I.target.uuid;z in D&&(D[z].dispose(),delete D[z])}}}function VE(r,e){function t(){let q=!1;const Te=new Dn;let Me=null;const Se=new Dn(0,0,0,0);return{setMask:function(Ee){Me!==Ee&&!q&&(r.colorMask(Ee,Ee,Ee,Ee),Me=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,Z,Fe,ke,mt){mt===!0&&(Ee*=ke,Z*=ke,Fe*=ke),Te.set(Ee,Z,Fe,ke),Se.equals(Te)===!1&&(r.clearColor(Ee,Z,Fe,ke),Se.copy(Te))},reset:function(){q=!1,Me=null,Se.set(-1,0,0,0)}}}function s(){let q=!1,Te=!1,Me=null,Se=null,Ee=null;return{setReversed:function(Z){if(Te!==Z){const Fe=e.get("EXT_clip_control");Z?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Te=Z;const ke=Ee;Ee=null,this.setClear(ke)}},getReversed:function(){return Te},setTest:function(Z){Z?de(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Z){Me!==Z&&!q&&(r.depthMask(Z),Me=Z)},setFunc:function(Z){if(Te&&(Z=g_[Z]),Se!==Z){switch(Z){case Kf:r.depthFunc(r.NEVER);break;case Zf:r.depthFunc(r.ALWAYS);break;case Jf:r.depthFunc(r.LESS);break;case Al:r.depthFunc(r.LEQUAL);break;case Qf:r.depthFunc(r.EQUAL);break;case eh:r.depthFunc(r.GEQUAL);break;case th:r.depthFunc(r.GREATER);break;case nh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=Z}},setLocked:function(Z){q=Z},setClear:function(Z){Ee!==Z&&(Ee=Z,Te&&(Z=1-Z),r.clearDepth(Z))},reset:function(){q=!1,Me=null,Se=null,Ee=null,Te=!1}}}function o(){let q=!1,Te=null,Me=null,Se=null,Ee=null,Z=null,Fe=null,ke=null,mt=null;return{setTest:function(ot){q||(ot?de(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(ot){Te!==ot&&!q&&(r.stencilMask(ot),Te=ot)},setFunc:function(ot,Sn,en){(Me!==ot||Se!==Sn||Ee!==en)&&(r.stencilFunc(ot,Sn,en),Me=ot,Se=Sn,Ee=en)},setOp:function(ot,Sn,en){(Z!==ot||Fe!==Sn||ke!==en)&&(r.stencilOp(ot,Sn,en),Z=ot,Fe=Sn,ke=en)},setLocked:function(ot){q=ot},setClear:function(ot){mt!==ot&&(r.clearStencil(ot),mt=ot)},reset:function(){q=!1,Te=null,Me=null,Se=null,Ee=null,Z=null,Fe=null,ke=null,mt=null}}}const l=new t,u=new s,f=new o,m=new WeakMap,p=new WeakMap;let y={},S={},x={},M=new WeakMap,E=[],C=null,_=!1,v=null,A=null,F=null,R=null,U=null,I=null,k=null,b=new $t(0,0,0),D=0,z=!1,G=null,W=null,ne=null,H=null,re=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,te=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=te>=2);let K=null,T={};const ce=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),We=new Dn().fromArray(ce),Xe=new Dn().fromArray(_e);function Ge(q,Te,Me,Se){const Ee=new Uint8Array(4),Z=r.createTexture();r.bindTexture(q,Z),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<Me;Fe++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Te+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Z}const se={};se[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(r.DEPTH_TEST),u.setFunc(Al),_t(!1),At(S0),de(r.CULL_FACE),pt(bs);function de(q){y[q]!==!0&&(r.enable(q),y[q]=!0)}function Re(q){y[q]!==!1&&(r.disable(q),y[q]=!1)}function Ye(q,Te){return x[q]!==Te?(r.bindFramebuffer(q,Te),x[q]=Te,q===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Te),q===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ue(q,Te){let Me=E,Se=!1;if(q){Me=M.get(Te),Me===void 0&&(Me=[],M.set(Te,Me));const Ee=q.textures;if(Me.length!==Ee.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Fe=Ee.length;Z<Fe;Z++)Me[Z]=r.COLOR_ATTACHMENT0+Z;Me.length=Ee.length,Se=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Se=!0);Se&&r.drawBuffers(Me)}function ut(q){return C!==q?(r.useProgram(q),C=q,!0):!1}const zt={[To]:r.FUNC_ADD,[Fx]:r.FUNC_SUBTRACT,[kx]:r.FUNC_REVERSE_SUBTRACT};zt[Bx]=r.MIN,zt[zx]=r.MAX;const ft={[Vx]:r.ZERO,[Gx]:r.ONE,[Hx]:r.SRC_COLOR,[Ag]:r.SRC_ALPHA,[Yx]:r.SRC_ALPHA_SATURATE,[jx]:r.DST_COLOR,[Xx]:r.DST_ALPHA,[Wx]:r.ONE_MINUS_SRC_COLOR,[Rg]:r.ONE_MINUS_SRC_ALPHA,[$x]:r.ONE_MINUS_DST_COLOR,[qx]:r.ONE_MINUS_DST_ALPHA,[Kx]:r.CONSTANT_COLOR,[Zx]:r.ONE_MINUS_CONSTANT_COLOR,[Jx]:r.CONSTANT_ALPHA,[Qx]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(q,Te,Me,Se,Ee,Z,Fe,ke,mt,ot){if(q===bs){_===!0&&(Re(r.BLEND),_=!1);return}if(_===!1&&(de(r.BLEND),_=!0),q!==Ox){if(q!==v||ot!==z){if((A!==To||U!==To)&&(r.blendEquation(r.FUNC_ADD),A=To,U=To),ot)switch(q){case Tl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wi:r.blendFunc(r.ONE,r.ONE);break;case M0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case E0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ln("WebGLState: Invalid blending: ",q);break}else switch(q){case Tl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case M0:ln("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E0:ln("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ln("WebGLState: Invalid blending: ",q);break}F=null,R=null,I=null,k=null,b.set(0,0,0),D=0,v=q,z=ot}return}Ee=Ee||Te,Z=Z||Me,Fe=Fe||Se,(Te!==A||Ee!==U)&&(r.blendEquationSeparate(zt[Te],zt[Ee]),A=Te,U=Ee),(Me!==F||Se!==R||Z!==I||Fe!==k)&&(r.blendFuncSeparate(ft[Me],ft[Se],ft[Z],ft[Fe]),F=Me,R=Se,I=Z,k=Fe),(ke.equals(b)===!1||mt!==D)&&(r.blendColor(ke.r,ke.g,ke.b,mt),b.copy(ke),D=mt),v=q,z=!1}function bt(q,Te){q.side===Xi?Re(r.CULL_FACE):de(r.CULL_FACE);let Me=q.side===qi;Te&&(Me=!Me),_t(Me),q.blending===Tl&&q.transparent===!1?pt(bs):pt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const Se=q.stencilWrite;f.setTest(Se),Se&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Qt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(q){G!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),G=q)}function At(q){q!==Ix?(de(r.CULL_FACE),q!==W&&(q===S0?r.cullFace(r.BACK):q===Dx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),W=q}function Ot(q){q!==ne&&(ee&&r.lineWidth(q),ne=q)}function Qt(q,Te,Me){q?(de(r.POLYGON_OFFSET_FILL),(H!==Te||re!==Me)&&(H=Te,re=Me,u.getReversed()&&(Te=-Te),r.polygonOffset(Te,Me))):Re(r.POLYGON_OFFSET_FILL)}function Ft(q){q?de(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function kt(q){q===void 0&&(q=r.TEXTURE0+fe-1),K!==q&&(r.activeTexture(q),K=q)}function $(q,Te,Me){Me===void 0&&(K===null?Me=r.TEXTURE0+fe-1:Me=K);let Se=T[Me];Se===void 0&&(Se={type:void 0,texture:void 0},T[Me]=Se),(Se.type!==q||Se.texture!==Te)&&(K!==Me&&(r.activeTexture(Me),K=Me),r.bindTexture(q,Te||se[q]),Se.type=q,Se.texture=Te)}function tn(){const q=T[K];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Lt(){try{r.compressedTexImage2D(...arguments)}catch(q){ln("WebGLState:",q)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(q){ln("WebGLState:",q)}}function w(){try{r.texSubImage2D(...arguments)}catch(q){ln("WebGLState:",q)}}function J(){try{r.texSubImage3D(...arguments)}catch(q){ln("WebGLState:",q)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(q){ln("WebGLState:",q)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(q){ln("WebGLState:",q)}}function Pe(){try{r.texStorage2D(...arguments)}catch(q){ln("WebGLState:",q)}}function Ne(){try{r.texStorage3D(...arguments)}catch(q){ln("WebGLState:",q)}}function ye(){try{r.texImage2D(...arguments)}catch(q){ln("WebGLState:",q)}}function be(){try{r.texImage3D(...arguments)}catch(q){ln("WebGLState:",q)}}function ze(q){return S[q]!==void 0?S[q]:r.getParameter(q)}function Je(q,Te){S[q]!==Te&&(r.pixelStorei(q,Te),S[q]=Te)}function Oe(q){We.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),We.copy(q))}function Ce(q){Xe.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Xe.copy(q))}function et(q,Te){let Me=p.get(Te);Me===void 0&&(Me=new WeakMap,p.set(Te,Me));let Se=Me.get(q);Se===void 0&&(Se=r.getUniformBlockIndex(Te,q.name),Me.set(q,Se))}function rt(q,Te){const Se=p.get(Te).get(q);m.get(Te)!==Se&&(r.uniformBlockBinding(Te,Se,q.__bindingPointIndex),m.set(Te,Se))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},S={},K=null,T={},x={},M=new WeakMap,E=[],C=null,_=!1,v=null,A=null,F=null,R=null,U=null,I=null,k=null,b=new $t(0,0,0),D=0,z=!1,G=null,W=null,ne=null,H=null,re=null,We.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Re,bindFramebuffer:Ye,drawBuffers:Ue,useProgram:ut,setBlending:pt,setMaterial:bt,setFlipSided:_t,setCullFace:At,setLineWidth:Ot,setPolygonOffset:Qt,setScissorTest:Ft,activeTexture:kt,bindTexture:$,unbindTexture:tn,compressedTexImage2D:Lt,compressedTexImage3D:B,texImage2D:ye,texImage3D:be,pixelStorei:Je,getParameter:ze,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:Pe,texStorage3D:Ne,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Oe,viewport:Ce,reset:dt}}function GE(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,y=new WeakMap,S=new Set;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(B,w){return E?new OffscreenCanvas(B,w):Tu("canvas")}function _(B,w,J){let ae=1;const ge=Lt(B);if((ge.width>J||ge.height>J)&&(ae=J/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Pe=Math.floor(ae*ge.width),Ne=Math.floor(ae*ge.height);x===void 0&&(x=C(Pe,Ne));const ye=w?C(Pe,Ne):x;return ye.width=Pe,ye.height=Ne,ye.getContext("2d").drawImage(B,0,0,Pe,Ne),Mt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Pe+"x"+Ne+")."),ye}else return"data"in B&&Mt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),B;return B}function v(B){return B.generateMipmaps}function A(B){r.generateMipmap(B)}function F(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(B,w,J,ae,ge,Pe=!1){if(B!==null){if(r[B]!==void 0)return r[B];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ne;ae&&(Ne=e.get("EXT_texture_norm16"),Ne||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=w;if(w===r.RED&&(J===r.FLOAT&&(ye=r.R32F),J===r.HALF_FLOAT&&(ye=r.R16F),J===r.UNSIGNED_BYTE&&(ye=r.R8),J===r.UNSIGNED_SHORT&&Ne&&(ye=Ne.R16_EXT),J===r.SHORT&&Ne&&(ye=Ne.R16_SNORM_EXT)),w===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ye=r.R8UI),J===r.UNSIGNED_SHORT&&(ye=r.R16UI),J===r.UNSIGNED_INT&&(ye=r.R32UI),J===r.BYTE&&(ye=r.R8I),J===r.SHORT&&(ye=r.R16I),J===r.INT&&(ye=r.R32I)),w===r.RG&&(J===r.FLOAT&&(ye=r.RG32F),J===r.HALF_FLOAT&&(ye=r.RG16F),J===r.UNSIGNED_BYTE&&(ye=r.RG8),J===r.UNSIGNED_SHORT&&Ne&&(ye=Ne.RG16_EXT),J===r.SHORT&&Ne&&(ye=Ne.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ye=r.RG8UI),J===r.UNSIGNED_SHORT&&(ye=r.RG16UI),J===r.UNSIGNED_INT&&(ye=r.RG32UI),J===r.BYTE&&(ye=r.RG8I),J===r.SHORT&&(ye=r.RG16I),J===r.INT&&(ye=r.RG32I)),w===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ye=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ye=r.RGB16UI),J===r.UNSIGNED_INT&&(ye=r.RGB32UI),J===r.BYTE&&(ye=r.RGB8I),J===r.SHORT&&(ye=r.RGB16I),J===r.INT&&(ye=r.RGB32I)),w===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ye=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ye=r.RGBA16UI),J===r.UNSIGNED_INT&&(ye=r.RGBA32UI),J===r.BYTE&&(ye=r.RGBA8I),J===r.SHORT&&(ye=r.RGBA16I),J===r.INT&&(ye=r.RGBA32I)),w===r.RGB&&(J===r.UNSIGNED_SHORT&&Ne&&(ye=Ne.RGB16_EXT),J===r.SHORT&&Ne&&(ye=Ne.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ye=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ye=r.R11F_G11F_B10F)),w===r.RGBA){const be=Pe?bu:Zt.getTransfer(ge);J===r.FLOAT&&(ye=r.RGBA32F),J===r.HALF_FLOAT&&(ye=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ye=be===hn?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Ne&&(ye=Ne.RGBA16_EXT),J===r.SHORT&&Ne&&(ye=Ne.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function U(B,w){let J;return B?w===null||w===es||w===Cl?J=r.DEPTH24_STENCIL8:w===Zr?J=r.DEPTH32F_STENCIL8:w===Rl&&(J=r.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===Cl?J=r.DEPTH_COMPONENT24:w===Zr?J=r.DEPTH_COMPONENT32F:w===Rl&&(J=r.DEPTH_COMPONENT16),J}function I(B,w){return v(B)===!0||B.isFramebufferTexture&&B.minFilter!==hi&&B.minFilter!==Mi?Math.log2(Math.max(w.width,w.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?w.mipmaps.length:1}function k(B){const w=B.target;w.removeEventListener("dispose",k),D(w),w.isVideoTexture&&y.delete(w),w.isHTMLTexture&&S.delete(w)}function b(B){const w=B.target;w.removeEventListener("dispose",b),G(w)}function D(B){const w=s.get(B);if(w.__webglInit===void 0)return;const J=B.source,ae=M.get(J);if(ae){const ge=ae[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&z(B),Object.keys(ae).length===0&&M.delete(J)}s.remove(B)}function z(B){const w=s.get(B);r.deleteTexture(w.__webglTexture);const J=B.source,ae=M.get(J);delete ae[w.__cacheKey],u.memory.textures--}function G(B){const w=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let ge=0;ge<w.__webglFramebuffer[ae].length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[ae][ge]);else r.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)r.deleteFramebuffer(w.__webglFramebuffer[ae]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=B.textures;for(let ae=0,ge=J.length;ae<ge;ae++){const Pe=s.get(J[ae]);Pe.__webglTexture&&(r.deleteTexture(Pe.__webglTexture),u.memory.textures--),s.remove(J[ae])}s.remove(B)}let W=0;function ne(){W=0}function H(){return W}function re(B){W=B}function fe(){const B=W;return B>=o.maxTextures&&Mt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),W+=1,B}function ee(B){const w=[];return w.push(B.wrapS),w.push(B.wrapT),w.push(B.wrapR||0),w.push(B.magFilter),w.push(B.minFilter),w.push(B.anisotropy),w.push(B.internalFormat),w.push(B.format),w.push(B.type),w.push(B.generateMipmaps),w.push(B.premultiplyAlpha),w.push(B.flipY),w.push(B.unpackAlignment),w.push(B.colorSpace),w.join()}function te(B,w){const J=s.get(B);if(B.isVideoTexture&&$(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){const ae=B.image;if(ae===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,B,w);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+w)}function Y(B,w){const J=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Re(J,B,w);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+w)}function K(B,w){const J=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Re(J,B,w);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+w)}function T(B,w){const J=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){Ye(J,B,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+w)}const ce={[Ua]:r.REPEAT,[ws]:r.CLAMP_TO_EDGE,[ih]:r.MIRRORED_REPEAT},_e={[hi]:r.NEAREST,[n_]:r.NEAREST_MIPMAP_NEAREST,[kc]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[vf]:r.LINEAR_MIPMAP_NEAREST,[La]:r.LINEAR_MIPMAP_LINEAR},We={[a_]:r.NEVER,[d_]:r.ALWAYS,[o_]:r.LESS,[$h]:r.LEQUAL,[l_]:r.EQUAL,[Yh]:r.GEQUAL,[c_]:r.GREATER,[u_]:r.NOTEQUAL};function Xe(B,w){if(w.type===Zr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Mi||w.magFilter===vf||w.magFilter===kc||w.magFilter===La||w.minFilter===Mi||w.minFilter===vf||w.minFilter===kc||w.minFilter===La)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,ce[w.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,ce[w.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,ce[w.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,_e[w.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,_e[w.minFilter]),w.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,We[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hi||w.minFilter!==kc&&w.minFilter!==La||w.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ge(B,w){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,w.addEventListener("dispose",k));const ae=w.source;let ge=M.get(ae);ge===void 0&&(ge={},M.set(ae,ge));const Pe=ee(w);if(Pe!==B.__cacheKey){ge[Pe]===void 0&&(ge[Pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ge[Pe].usedTimes++;const Ne=ge[B.__cacheKey];Ne!==void 0&&(ge[B.__cacheKey].usedTimes--,Ne.usedTimes===0&&z(w)),B.__cacheKey=Pe,B.__webglTexture=ge[Pe].texture}return J}function se(B,w,J){return Math.floor(Math.floor(B/J)/w)}function de(B,w,J,ae){const Pe=B.updateRanges;if(Pe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,J,ae,w.data);else{Pe.sort((Je,Oe)=>Je.start-Oe.start);let Ne=0;for(let Je=1;Je<Pe.length;Je++){const Oe=Pe[Ne],Ce=Pe[Je],et=Oe.start+Oe.count,rt=se(Ce.start,w.width,4),dt=se(Oe.start,w.width,4);Ce.start<=et+1&&rt===dt&&se(Ce.start+Ce.count-1,w.width,4)===rt?Oe.count=Math.max(Oe.count,Ce.start+Ce.count-Oe.start):(++Ne,Pe[Ne]=Ce)}Pe.length=Ne+1;const ye=t.getParameter(r.UNPACK_ROW_LENGTH),be=t.getParameter(r.UNPACK_SKIP_PIXELS),ze=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Je=0,Oe=Pe.length;Je<Oe;Je++){const Ce=Pe[Je],et=Math.floor(Ce.start/4),rt=Math.ceil(Ce.count/4),dt=et%w.width,q=Math.floor(et/w.width),Te=rt,Me=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,dt,q,Te,Me,J,ae,w.data)}B.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ye),t.pixelStorei(r.UNPACK_SKIP_PIXELS,be),t.pixelStorei(r.UNPACK_SKIP_ROWS,ze)}}function Re(B,w,J){let ae=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=r.TEXTURE_3D);const ge=Ge(B,w),Pe=w.source;t.bindTexture(ae,B.__webglTexture,r.TEXTURE0+J);const Ne=s.get(Pe);if(Pe.version!==Ne.__version||ge===!0){if(t.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Me=Zt.getPrimaries(Zt.workingColorSpace),Se=w.colorSpace===ia?null:Zt.getPrimaries(w.colorSpace),Ee=w.colorSpace===ia||Me===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let be=_(w.image,!1,o.maxTextureSize);be=tn(w,be);const ze=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let Oe=R(w.internalFormat,ze,Je,w.normalized,w.colorSpace,w.isVideoTexture);Xe(ae,w);let Ce;const et=w.mipmaps,rt=w.isVideoTexture!==!0,dt=Ne.__version===void 0||ge===!0,q=Pe.dataReady,Te=I(w,be);if(w.isDepthTexture)Oe=U(w.format===Na,w.type),dt&&(rt?t.texStorage2D(r.TEXTURE_2D,1,Oe,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,Oe,be.width,be.height,0,ze,Je,null));else if(w.isDataTexture)if(et.length>0){rt&&dt&&t.texStorage2D(r.TEXTURE_2D,Te,Oe,et[0].width,et[0].height);for(let Me=0,Se=et.length;Me<Se;Me++)Ce=et[Me],rt?q&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,ze,Je,Ce.data):t.texImage2D(r.TEXTURE_2D,Me,Oe,Ce.width,Ce.height,0,ze,Je,Ce.data);w.generateMipmaps=!1}else rt?(dt&&t.texStorage2D(r.TEXTURE_2D,Te,Oe,be.width,be.height),q&&de(w,be,ze,Je)):t.texImage2D(r.TEXTURE_2D,0,Oe,be.width,be.height,0,ze,Je,be.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Oe,et[0].width,et[0].height,be.depth);for(let Me=0,Se=et.length;Me<Se;Me++)if(Ce=et[Me],w.format!==Ur)if(ze!==null)if(rt){if(q)if(w.layerUpdates.size>0){const Ee=Q0(Ce.width,Ce.height,w.format,w.type);for(const Z of w.layerUpdates){const Fe=Ce.data.subarray(Z*Ee/Ce.data.BYTES_PER_ELEMENT,(Z+1)*Ee/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Z,Ce.width,Ce.height,1,ze,Fe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,be.depth,ze,Ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Oe,Ce.width,Ce.height,be.depth,0,Ce.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,be.depth,ze,Je,Ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,Oe,Ce.width,Ce.height,be.depth,0,ze,Je,Ce.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{rt&&dt&&t.texStorage2D(r.TEXTURE_2D,Te,Oe,et[0].width,et[0].height);for(let Me=0,Se=et.length;Me<Se;Me++)Ce=et[Me],w.format!==Ur?ze!==null?rt?q&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,ze,Ce.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,Oe,Ce.width,Ce.height,0,Ce.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,ze,Je,Ce.data):t.texImage2D(r.TEXTURE_2D,Me,Oe,Ce.width,Ce.height,0,ze,Je,Ce.data)}else if(w.isDataArrayTexture)if(rt){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Oe,be.width,be.height,be.depth),q)if(w.layerUpdates.size>0){const Me=Q0(be.width,be.height,w.format,w.type);for(const Se of w.layerUpdates){const Ee=be.data.subarray(Se*Me/be.data.BYTES_PER_ELEMENT,(Se+1)*Me/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,be.width,be.height,1,ze,Je,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,ze,Je,be.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,be.width,be.height,be.depth,0,ze,Je,be.data);else if(w.isData3DTexture)rt?(dt&&t.texStorage3D(r.TEXTURE_3D,Te,Oe,be.width,be.height,be.depth),q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,ze,Je,be.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,be.width,be.height,be.depth,0,ze,Je,be.data);else if(w.isFramebufferTexture){if(dt)if(rt)t.texStorage2D(r.TEXTURE_2D,Te,Oe,be.width,be.height);else{let Me=be.width,Se=be.height;for(let Ee=0;Ee<Te;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,Oe,Me,Se,0,ze,Je,null),Me>>=1,Se>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),be.parentNode!==Me){Me.appendChild(be),S.add(w),Me.onpaint=Se=>{const Ee=Se.changedElements;for(const Z of S)Ee.includes(Z.image)&&(Z.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,be);else{const Ee=r.RGBA,Z=r.RGBA,Fe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ee,Z,Fe,be)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(et.length>0){if(rt&&dt){const Me=Lt(et[0]);t.texStorage2D(r.TEXTURE_2D,Te,Oe,Me.width,Me.height)}for(let Me=0,Se=et.length;Me<Se;Me++)Ce=et[Me],rt?q&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,ze,Je,Ce):t.texImage2D(r.TEXTURE_2D,Me,Oe,ze,Je,Ce);w.generateMipmaps=!1}else if(rt){if(dt){const Me=Lt(be);t.texStorage2D(r.TEXTURE_2D,Te,Oe,Me.width,Me.height)}q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Je,be)}else t.texImage2D(r.TEXTURE_2D,0,Oe,ze,Je,be);v(w)&&A(ae),Ne.__version=Pe.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function Ye(B,w,J){if(w.image.length!==6)return;const ae=Ge(B,w),ge=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+J);const Pe=s.get(ge);if(ge.version!==Pe.__version||ae===!0){t.activeTexture(r.TEXTURE0+J);const Ne=Zt.getPrimaries(Zt.workingColorSpace),ye=w.colorSpace===ia?null:Zt.getPrimaries(w.colorSpace),be=w.colorSpace===ia||Ne===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,Je=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let Z=0;Z<6;Z++)!ze&&!Je?Oe[Z]=_(w.image[Z],!0,o.maxCubemapSize):Oe[Z]=Je?w.image[Z].image:w.image[Z],Oe[Z]=tn(w,Oe[Z]);const Ce=Oe[0],et=l.convert(w.format,w.colorSpace),rt=l.convert(w.type),dt=R(w.internalFormat,et,rt,w.normalized,w.colorSpace),q=w.isVideoTexture!==!0,Te=Pe.__version===void 0||ae===!0,Me=ge.dataReady;let Se=I(w,Ce);Xe(r.TEXTURE_CUBE_MAP,w);let Ee;if(ze){q&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,dt,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){Ee=Oe[Z].mipmaps;for(let Fe=0;Fe<Ee.length;Fe++){const ke=Ee[Fe];w.format!==Ur?et!==null?q?Me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe,0,0,ke.width,ke.height,et,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe,dt,ke.width,ke.height,0,ke.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe,0,0,ke.width,ke.height,et,rt,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe,dt,ke.width,ke.height,0,et,rt,ke.data)}}}else{if(Ee=w.mipmaps,q&&Te){Ee.length>0&&Se++;const Z=Lt(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,dt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Je){q?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe[Z].width,Oe[Z].height,et,rt,Oe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,dt,Oe[Z].width,Oe[Z].height,0,et,rt,Oe[Z].data);for(let Fe=0;Fe<Ee.length;Fe++){const mt=Ee[Fe].image[Z].image;q?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe+1,0,0,mt.width,mt.height,et,rt,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe+1,dt,mt.width,mt.height,0,et,rt,mt.data)}}else{q?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,et,rt,Oe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,dt,et,rt,Oe[Z]);for(let Fe=0;Fe<Ee.length;Fe++){const ke=Ee[Fe];q?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe+1,0,0,et,rt,ke.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe+1,dt,et,rt,ke.image[Z])}}}v(w)&&A(r.TEXTURE_CUBE_MAP),Pe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function Ue(B,w,J,ae,ge,Pe){const Ne=l.convert(J.format,J.colorSpace),ye=l.convert(J.type),be=R(J.internalFormat,Ne,ye,J.normalized,J.colorSpace),ze=s.get(w),Je=s.get(J);if(Je.__renderTarget=w,!ze.__hasExternalTextures){const Oe=Math.max(1,w.width>>Pe),Ce=Math.max(1,w.height>>Pe);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,Pe,be,Oe,Ce,w.depth,0,Ne,ye,null):t.texImage2D(ge,Pe,be,Oe,Ce,0,Ne,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,B),kt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ge,Je.__webglTexture,0,Ft(w)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,ge,Je.__webglTexture,Pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(B,w,J){if(r.bindRenderbuffer(r.RENDERBUFFER,B),w.depthBuffer){const ae=w.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,Pe=U(w.stencilBuffer,ge),Ne=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;kt(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(w),Pe,w.width,w.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(w),Pe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,B)}else{const ae=w.textures;for(let ge=0;ge<ae.length;ge++){const Pe=ae[ge],Ne=l.convert(Pe.format,Pe.colorSpace),ye=l.convert(Pe.type),be=R(Pe.internalFormat,Ne,ye,Pe.normalized,Pe.colorSpace);kt(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(w),be,w.width,w.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(w),be,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,be,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(B,w,J){const ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,B),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,w.depthTexture);const ze=l.convert(w.depthTexture.format),Je=l.convert(w.depthTexture.type);let Oe;w.depthTexture.format===As?Oe=r.DEPTH_COMPONENT24:w.depthTexture.format===Na&&(Oe=r.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Oe,w.width,w.height,0,ze,Je,null)}}else te(w.depthTexture,0);const Pe=ge.__webglTexture,Ne=Ft(w),ye=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,be=w.depthTexture.format===Na?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===As)kt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ye,Pe,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,be,ye,Pe,0);else if(w.depthTexture.format===Na)kt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ye,Pe,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,be,ye,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(B){const w=s.get(B),J=B.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==B.depthTexture){const ae=B.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=ae}if(B.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let ae=0;ae<6;ae++)zt(w.__webglFramebuffer[ae],B,ae);else{const ae=B.texture.mipmaps;ae&&ae.length>0?zt(w.__webglFramebuffer[0],B,0):zt(w.__webglFramebuffer,B,0)}else if(J){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=r.createRenderbuffer(),ut(w.__webglDepthbuffer[ae],B,!1);else{const ge=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=w.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,Pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Pe)}}else{const ae=B.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ut(w.__webglDepthbuffer,B,!1);else{const ge=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Pe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(B,w,J){const ae=s.get(B);w!==void 0&&Ue(ae.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ft(B)}function bt(B){const w=B.texture,J=s.get(B),ae=s.get(w);B.addEventListener("dispose",b);const ge=B.textures,Pe=B.isWebGLCubeRenderTarget===!0,Ne=ge.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=w.version,u.memory.textures++),Pe){J.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[ye]=[];for(let be=0;be<w.mipmaps.length;be++)J.__webglFramebuffer[ye][be]=r.createFramebuffer()}else J.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)J.__webglFramebuffer[ye]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let ye=0,be=ge.length;ye<be;ye++){const ze=s.get(ge[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),u.memory.textures++)}if(B.samples>0&&kt(B)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const be=ge[ye];J.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ye]);const ze=l.convert(be.format,be.colorSpace),Je=l.convert(be.type),Oe=R(be.internalFormat,ze,Je,be.normalized,be.colorSpace,B.isXRRenderTarget===!0),Ce=Ft(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,Oe,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,J.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(J.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,w);for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Ue(J.__webglFramebuffer[ye][be],B,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Ue(J.__webglFramebuffer[ye],B,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);v(w)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ye=0,be=ge.length;ye<be;ye++){const ze=ge[ye],Je=s.get(ze);let Oe=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Oe=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Je.__webglTexture),Xe(Oe,ze),Ue(J.__webglFramebuffer,B,ze,r.COLOR_ATTACHMENT0+ye,Oe,0),v(ze)&&A(Oe)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ye=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,ae.__webglTexture),Xe(ye,w),w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Ue(J.__webglFramebuffer[be],B,w,r.COLOR_ATTACHMENT0,ye,be);else Ue(J.__webglFramebuffer,B,w,r.COLOR_ATTACHMENT0,ye,0);v(w)&&A(ye),t.unbindTexture()}B.depthBuffer&&ft(B)}function _t(B){const w=B.textures;for(let J=0,ae=w.length;J<ae;J++){const ge=w[J];if(v(ge)){const Pe=F(B),Ne=s.get(ge).__webglTexture;t.bindTexture(Pe,Ne),A(Pe),t.unbindTexture()}}}const At=[],Ot=[];function Qt(B){if(B.samples>0){if(kt(B)===!1){const w=B.textures,J=B.width,ae=B.height;let ge=r.COLOR_BUFFER_BIT;const Pe=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(B),ye=w.length>1;if(ye)for(let ze=0;ze<w.length;ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const be=B.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ze=0;ze<w.length;ze++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[ze]);const Je=s.get(w[ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Je,0)}r.blitFramebuffer(0,0,J,ae,0,0,J,ae,ge,r.NEAREST),m===!0&&(At.length=0,Ot.length=0,At.push(r.COLOR_ATTACHMENT0+ze),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(At.push(Pe),Ot.push(Pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let ze=0;ze<w.length;ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[ze]);const Je=s.get(w[ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&m){const w=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ft(B){return Math.min(o.maxSamples,B.samples)}function kt(B){const w=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(B){const w=u.render.frame;y.get(B)!==w&&(y.set(B,w),B.update())}function tn(B,w){const J=B.colorSpace,ae=B.format,ge=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==wu&&J!==ia&&(Zt.getTransfer(J)===hn?(ae!==Ur||ge!==ir)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ln("WebGLTextures: Unsupported texture color space:",J)),w}function Lt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=ne,this.getTextureUnits=H,this.setTextureUnits=re,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=T,this.rebindTextures=pt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HE(r,e){function t(s,o=ia){let l;const u=Zt.getTransfer(o);if(s===ir)return r.UNSIGNED_BYTE;if(s===Hh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Wh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Bg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===zg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fg)return r.BYTE;if(s===kg)return r.SHORT;if(s===Rl)return r.UNSIGNED_SHORT;if(s===Gh)return r.INT;if(s===es)return r.UNSIGNED_INT;if(s===Zr)return r.FLOAT;if(s===ts)return r.HALF_FLOAT;if(s===Vg)return r.ALPHA;if(s===Gg)return r.RGB;if(s===Ur)return r.RGBA;if(s===As)return r.DEPTH_COMPONENT;if(s===Na)return r.DEPTH_STENCIL;if(s===Hg)return r.RED;if(s===Xh)return r.RED_INTEGER;if(s===Oa)return r.RG;if(s===qh)return r.RG_INTEGER;if(s===jh)return r.RGBA_INTEGER;if(s===gu||s===vu||s===xu||s===_u)if(u===hn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===gu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===gu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rh||s===sh||s===ah||s===oh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lh||s===ch||s===uh||s===dh||s===fh||s===Mu||s===hh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===lh||s===ch)return u===hn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===uh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===dh)return l.COMPRESSED_R11_EAC;if(s===fh)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Mu)return l.COMPRESSED_RG11_EAC;if(s===hh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ph||s===mh||s===gh||s===vh||s===xh||s===_h||s===yh||s===Sh||s===Mh||s===Eh||s===wh||s===bh||s===Th||s===Ah)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ph)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_h)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return u===hn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rh||s===Ch||s===Ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Rh)return u===hn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ch)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lh||s===Nh||s===Eu||s===Ih)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Lh)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ih)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const WE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
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

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Qg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new ns({vertexShader:WE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Fa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends ka{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,y=null,S=null,x=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",_=new qE,v={},A=t.getContextAttributes();let F=null,R=null;const U=[],I=[],k=new Ht;let b=null,D=null;const z=new nr;z.viewport=new Dn;const G=new nr;G.viewport=new Dn;const W=[z,G],ne=new ty;let H=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=U[se];return de===void 0&&(de=new bf,U[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=U[se];return de===void 0&&(de=new bf,U[se]=de),de.getGripSpace()},this.getHand=function(se){let de=U[se];return de===void 0&&(de=new bf,U[se]=de),de.getHandSpace()};function fe(se){const de=I.indexOf(se.inputSource);if(de===-1)return;const Re=U[de];Re!==void 0&&(Re.update(se.inputSource,se.frame,p||u),Re.dispatchEvent({type:se.type,data:se.inputSource}))}function ee(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",te);for(let se=0;se<U.length;se++){const de=I[se];de!==null&&(I[se]=null,U[se].disconnect(de))}H=null,re=null,_.reset();for(const se in v)delete v[se];if(e.setRenderTarget(F),M=null,x=null,S=null,o=null,R=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(k.width,k.height,!1),D!==null){const se=D.camera;se.fov=D.fov,se.zoom=D.zoom,se.updateProjectionMatrix(),D=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,s.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,s.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",te),A.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ye=null,Ue=null;A.depth&&(Ue=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=A.stencil?Na:As,Ye=A.stencil?Cl:es);const ut={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(ut),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),R=new Or(x.textureWidth,x.textureHeight,{format:Ur,type:ir,depthTexture:new Ll(x.textureWidth,x.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Or(M.framebufferWidth,M.framebufferHeight,{format:Ur,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Ge.setContext(o),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(se){for(let de=0;de<se.removed.length;de++){const Re=se.removed[de],Ye=I.indexOf(Re);Ye>=0&&(I[Ye]=null,U[Ye].disconnect(Re))}for(let de=0;de<se.added.length;de++){const Re=se.added[de];let Ye=I.indexOf(Re);if(Ye===-1){for(let ut=0;ut<U.length;ut++)if(ut>=I.length){I.push(Re),Ye=ut;break}else if(I[ut]===null){I[ut]=Re,Ye=ut;break}if(Ye===-1)break}const Ue=U[Ye];Ue&&Ue.connect(Re)}}const Y=new ie,K=new ie;function T(se,de,Re){Y.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(Re.matrixWorld);const Ye=Y.distanceTo(K),Ue=de.projectionMatrix.elements,ut=Re.projectionMatrix.elements,zt=Ue[14]/(Ue[10]-1),ft=Ue[14]/(Ue[10]+1),pt=(Ue[9]+1)/Ue[5],bt=(Ue[9]-1)/Ue[5],_t=(Ue[8]-1)/Ue[0],At=(ut[8]+1)/ut[0],Ot=zt*_t,Qt=zt*At,Ft=Ye/(-_t+At),kt=Ft*-_t;if(de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(kt),se.translateZ(Ft),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ue[10]===-1)se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $=zt+Ft,tn=ft+Ft,Lt=Ot-kt,B=Qt+(Ye-kt),w=pt*ft/tn*$,J=bt*ft/tn*$;se.projectionMatrix.makePerspective(Lt,B,w,J,$,tn),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ce(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let de=se.near,Re=se.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Re=_.depthFar)),ne.near=G.near=z.near=de,ne.far=G.far=z.far=Re,(H!==ne.near||re!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),H=ne.near,re=ne.far),ne.layers.mask=se.layers.mask|6,z.layers.mask=ne.layers.mask&-5,G.layers.mask=ne.layers.mask&-3;const Ye=se.parent,Ue=ne.cameras;ce(ne,Ye);for(let ut=0;ut<Ue.length;ut++)ce(Ue[ut],Ye);Ue.length===2?T(ne,z,G):ne.projectionMatrix.copy(z.projectionMatrix),D===null&&se.isPerspectiveCamera&&(D={camera:se,fov:se.fov,zoom:se.zoom}),_e(se,ne,Ye)};function _e(se,de,Re){Re===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Re.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Uh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(se){m=se,x!==null&&(x.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ne)},this.getCameraTexture=function(se){return v[se]};let We=null;function Xe(se,de){if(y=de.getViewerPose(p||u),E=de,y!==null){const Re=y.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Ye=!1;Re.length!==ne.cameras.length&&(ne.cameras.length=0,Ye=!0);for(let ft=0;ft<Re.length;ft++){const pt=Re[ft];let bt=null;if(M!==null)bt=M.getViewport(pt);else{const At=S.getViewSubImage(x,pt);bt=At.viewport,ft===0&&(e.setRenderTargetTextures(R,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(R))}let _t=W[ft];_t===void 0&&(_t=new nr,_t.layers.enable(ft),_t.viewport=new Dn,W[ft]=_t),_t.matrix.fromArray(pt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(pt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(bt.x,bt.y,bt.width,bt.height),ft===0&&(ne.matrix.copy(_t.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ye===!0&&ne.cameras.push(_t)}const Ue=o.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const ft=S.getDepthInformation(Re[0]);ft&&ft.isValid&&ft.texture&&_.init(ft,o.renderState)}if(Ue&&Ue.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let ft=0;ft<Re.length;ft++){const pt=Re[ft].camera;if(pt){let bt=v[pt];bt||(bt=new Qg,v[pt]=bt);const _t=S.getCameraImage(pt);bt.sourceTexture=_t}}}}for(let Re=0;Re<U.length;Re++){const Ye=I[Re],Ue=U[Re];Ye!==null&&Ue!==void 0&&Ue.update(Ye,de,p||u)}We&&We(se,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ge=new iv;Ge.setAnimationLoop(Xe),this.setAnimationLoop=function(se){We=se},this.dispose=function(){}}}const $E=new Pn,uv=new Pt;uv.set(-1,0,0,0,1,0,0,0,1);function YE(r,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,ev(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,A,F,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),S(_,v)):v.isMeshPhongMaterial?(l(_,v),y(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),x(_,v),v.isMeshPhysicalMaterial&&M(_,v,R)):v.isMeshMatcapMaterial?(l(_,v),E(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),C(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?m(_,v,A,F):v.isSpriteMaterial?p(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===qi&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===qi&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const A=e.get(v),F=A.envMap,R=A.envMapRotation;F&&(_.envMap.value=F,_.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(uv),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function m(_,v,A,F){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*A,_.scale.value=F*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function y(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function x(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,A){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qi&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.retroreflectivity>0&&(_.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function C(_,v){const A=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function KE(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,U){const I=U.program;s.uniformBlockBinding(R,I)}function p(R,U){let I=o[R.id];I===void 0&&(_(R),I=y(R),o[R.id]=I,R.addEventListener("dispose",A));const k=U.program;s.updateUBOMapping(R,k);const b=e.render.frame;l[R.id]!==b&&(x(R),l[R.id]=b)}function y(R){const U=S();R.__bindingPointIndex=U;const I=r.createBuffer(),k=R.__size,b=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,k,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,I),I}function S(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return ln("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(R){const U=o[R.id],I=R.uniforms,k=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let b=0,D=I.length;b<D;b++){const z=I[b];if(Array.isArray(z))for(let G=0,W=z.length;G<W;G++)M(z[G],b,G,k);else M(z,b,0,k)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(R,U,I,k){if(C(R,U,I,k)===!0){const b=R.__offset,D=R.value;if(Array.isArray(D)){let z=0;for(let G=0;G<D.length;G++){const W=D[G],ne=v(W);E(W,R.__data,z),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(z+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(D,R.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,R.__data)}}function E(R,U,I){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,I)}function C(R,U,I,k){const b=R.value,D=U+"_"+I;if(k[D]===void 0)return typeof b=="number"||typeof b=="boolean"?k[D]=b:ArrayBuffer.isView(b)?k[D]=b.slice():k[D]=b.clone(),!0;{const z=k[D];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return k[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(z.equals(b)===!1)return z.copy(b),!0}}return!1}function _(R){const U=R.uniforms;let I=0;const k=16;for(let D=0,z=U.length;D<z;D++){const G=Array.isArray(U[D])?U[D]:[U[D]];for(let W=0,ne=G.length;W<ne;W++){const H=G[W],re=Array.isArray(H.value)?H.value:[H.value];for(let fe=0,ee=re.length;fe<ee;fe++){const te=re[fe],Y=v(te),K=I%k,T=K%Y.boundary,ce=K+T;I+=T,ce!==0&&k-ce<Y.storage&&(I+=k-ce),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=I,I+=Y.storage}}}const b=I%k;return b>0&&(I+=k-b),R.__size=I,R.__cache={},this}function v(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",R),U}function A(R){const U=R.target;U.removeEventListener("dispose",A);const I=u.indexOf(U.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function F(){for(const R in o)r.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:m,update:p,dispose:F}}const ZE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $r=null;function JE(){return $r===null&&($r=new B_(ZE,16,16,Oa,ts),$r.name="DFG_LUT",$r.minFilter=Mi,$r.magFilter=Mi,$r.wrapS=ws,$r.wrapT=ws,$r.generateMipmaps=!1,$r.needsUpdate=!0),$r}class QE{constructor(e={}){const{canvas:t=p_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ir}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const C=M,_=new Set([jh,qh,Xh]),v=new Set([ir,es,Rl,Cl,Hh,Wh]),A=new Uint32Array(4),F=new Int32Array(4),R=new ie;let U=null,I=null;const k=[],b=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,W=null,ne=null,H=null,re=null;this._outputColorSpace=vr;let fe=0,ee=0,te=null,Y=-1,K=null;const T=new Dn,ce=new Dn;let _e=null;const We=new $t(0);let Xe=0,Ge=t.width,se=t.height,de=1,Re=null,Ye=null;const Ue=new Dn(0,0,Ge,se),ut=new Dn(0,0,Ge,se);let zt=!1;const ft=new Qh;let pt=!1,bt=!1;const _t=new Pn,At=new ie,Ot=new Dn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function kt(){return te===null?de:1}let $=s;function tn(L,X){return t.getContext(L,X)}let Lt,B,w,J,ae,ge,Pe,Ne,ye,be,ze,Je,Oe,Ce,et,rt,dt,q,Te,Me,Se,Ee,Z;try{const L={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),$===null){const X="webgl2";if($=tn(X,L),$===null)throw tn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(L){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ln("WebGLRenderer: "+L.message),L}function Fe(){Lt=new JM($),Lt.init(),Se=new HE($,Lt),B=new GM($,Lt,e,Se),w=new VE($,Lt),B.reversedDepthBuffer&&x&&w.buffers.depth.setReversed(!0),ne=$.createFramebuffer(),H=$.createFramebuffer(),re=$.createFramebuffer(),J=new t1($),ae=new AE,ge=new GE($,Lt,w,ae,B,Se,J),Pe=new ZM(z),Ne=new iy($),Ee=new zM($,Ne),ye=new QM($,Ne,J,Ee),be=new i1($,ye,Ne,Ee,J),q=new n1($,B,ge),et=new HM(ae),ze=new TE(z,Pe,Lt,B,Ee,et),Je=new YE(z,ae),Oe=new CE,Ce=new UE(Lt),dt=new BM(z,Pe,w,be,E,m),rt=new zE(z,be,B),Z=new KE($,J,B,w),Te=new VM($,Lt,J),Me=new e1($,Lt,J),J.programs=ze.programs,z.capabilities=B,z.extensions=Lt,z.properties=ae,z.renderLists=Oe,z.shadowMap=rt,z.state=w,z.info=J}C!==ir&&(D=new s1(C,t.width,t.height,f,o,l));const ke=new jE(z,$);this.xr=ke,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=Lt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Lt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(L){L!==void 0&&(de=L,this.setSize(Ge,se,!1))},this.getSize=function(L){return L.set(Ge,se)},this.setSize=function(L,X,me=!0){if(ke.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=L,se=X,t.width=Math.floor(L*de),t.height=Math.floor(X*de),me===!0&&(t.style.width=L+"px",t.style.height=X+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(Ge*de,se*de).floor()},this.setDrawingBufferSize=function(L,X,me){Ge=L,se=X,de=me,t.width=Math.floor(L*me),t.height=Math.floor(X*me),this.setViewport(0,0,L,X)},this.setEffects=function(L){if(C===ir){ln("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let X=0;X<L.length;X++)if(L[X].isOutputPass===!0){Mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(Ue)},this.setViewport=function(L,X,me,oe){L.isVector4?Ue.set(L.x,L.y,L.z,L.w):Ue.set(L,X,me,oe),w.viewport(T.copy(Ue).multiplyScalar(de).round())},this.getScissor=function(L){return L.copy(ut)},this.setScissor=function(L,X,me,oe){L.isVector4?ut.set(L.x,L.y,L.z,L.w):ut.set(L,X,me,oe),w.scissor(ce.copy(ut).multiplyScalar(de).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(L){w.setScissorTest(zt=L)},this.setOpaqueSort=function(L){Re=L},this.setTransparentSort=function(L){Ye=L},this.getClearColor=function(L){return L.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,me=!0){let oe=0;if(L){let le=!1;if(te!==null){const je=te.texture.format;le=_.has(je)}if(le){const je=te.texture.type,Ve=v.has(je),He=dt.getClearColor(),Qe=dt.getClearAlpha(),it=He.r,ht=He.g,Et=He.b;Ve?(A[0]=it,A[1]=ht,A[2]=Et,A[3]=Qe,$.clearBufferuiv($.COLOR,0,A)):(F[0]=it,F[1]=ht,F[2]=Et,F[3]=Qe,$.clearBufferiv($.COLOR,0,F))}else oe|=$.COLOR_BUFFER_BIT}X&&(oe|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(oe|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&$.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),W=L},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),dt.dispose(),Oe.dispose(),Ce.dispose(),ae.dispose(),Pe.dispose(),be.dispose(),Ee.dispose(),Z.dispose(),ze.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Mn),ke.removeEventListener("sessionend",ji),An.stop()};function mt(L){L.preventDefault(),T0("WebGLRenderer: Context Lost."),G=!0}function ot(){T0("WebGLRenderer: Context Restored."),G=!1;const L=J.autoReset,X=rt.enabled,me=rt.autoUpdate,oe=rt.needsUpdate,le=rt.type;Fe(),J.autoReset=L,rt.enabled=X,rt.autoUpdate=me,rt.needsUpdate=oe,rt.type=le}function Sn(L){ln("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function en(L){const X=L.target;X.removeEventListener("dispose",en),mn(X)}function mn(L){wi(L),ae.remove(L)}function wi(L){const X=ae.get(L).programs;X!==void 0&&(X.forEach(function(me){ze.releaseProgram(me)}),L.isShaderMaterial&&ze.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,me,oe,le,je){X===null&&(X=Qt);const Ve=le.isMesh&&le.matrixWorld.determinantAffine()<0,He=Bt(L,X,me,oe,le);w.setMaterial(oe,Ve);let Qe=me.index,it=1;if(oe.wireframe===!0){if(Qe=ye.getWireframeAttribute(me),Qe===void 0)return;it=2}const ht=me.drawRange,Et=me.attributes.position;let $e=ht.start*it,Dt=(ht.start+ht.count)*it;je!==null&&($e=Math.max($e,je.start*it),Dt=Math.min(Dt,(je.start+je.count)*it)),Qe!==null?($e=Math.max($e,0),Dt=Math.min(Dt,Qe.count)):Et!=null&&($e=Math.max($e,0),Dt=Math.min(Dt,Et.count));const gn=Dt-$e;if(gn<0||gn===1/0)return;Ee.setup(le,oe,He,me,Qe);let an,Xt=Te;if(Qe!==null&&(an=Ne.get(Qe),Xt=Me,Xt.setIndex(an)),le.isMesh)oe.wireframe===!0?(w.setLineWidth(oe.wireframeLinewidth*kt()),Xt.setMode($.LINES)):Xt.setMode($.TRIANGLES);else if(le.isLine){let En=oe.linewidth;En===void 0&&(En=1),w.setLineWidth(En*kt()),le.isLineSegments?Xt.setMode($.LINES):le.isLineLoop?Xt.setMode($.LINE_LOOP):Xt.setMode($.LINE_STRIP)}else le.isPoints?Xt.setMode($.POINTS):le.isSprite&&Xt.setMode($.TRIANGLES);if(le.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const En=le._multiDrawStarts,Ke=le._multiDrawCounts,un=le._multiDrawCount,Nt=Qe?Ne.get(Qe).bytesPerElement:1,Un=ae.get(oe).currentProgram.getUniforms();for(let yt=0;yt<un;yt++)Un.setValue($,"_gl_DrawID",yt),Xt.render(En[yt]/Nt,Ke[yt])}else if(le.isInstancedMesh)Xt.renderInstances($e,gn,le.count);else if(me.isInstancedBufferGeometry){const En=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ke=Math.min(me.instanceCount,En);Xt.renderInstances($e,gn,Ke)}else Xt.render($e,gn)};function Ui(L,X,me,oe){W!==null&&L.isNodeMaterial&&W.setObject(oe,L),pt===!0&&et.setState(L,me,!1),L.transparent===!0&&L.side===Xi&&L.forceSinglePass===!1?(L.side=qi,L.needsUpdate=!0,Zn(L,X,oe),L.side=Ia,L.needsUpdate=!0,Zn(L,X,oe),L.side=Xi):Zn(L,X,oe)}this.compile=function(L,X,me=null){me===null&&(me=L),W!==null&&W.renderStart(L,X,me),I=Ce.get(me),I.init(X),b.push(I),me.traverseVisible(function(le){le.isLight&&le.layers.test(X.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),L!==me&&L.traverseVisible(function(le){le.isLight&&le.layers.test(X.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),I.setupLights(),W!==null&&W.updateLights(I.state.lightsArray),bt=this.localClippingEnabled,pt=et.init(this.clippingPlanes,bt),pt===!0&&et.setGlobalState(this.clippingPlanes,X),W!==null&&rt.render(I.state.shadowsArray,me,X);const oe=new Set;return L.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const je=le.material;if(je)if(Array.isArray(je))for(let Ve=0;Ve<je.length;Ve++){const He=je[Ve];Ui(He,me,X,le),oe.add(He)}else Ui(je,me,X,le),oe.add(je)}),I=b.pop(),W!==null&&W.renderEnd(),oe},this.compileAsync=function(L,X,me=null){const oe=this.compile(L,X,me);return new Promise(le=>{function je(){if(oe.forEach(function(Ve){const Qe=ae.get(Ve).currentProgram;(Qe===void 0||Qe.isReady())&&oe.delete(Ve)}),oe.size===0){le(L);return}setTimeout(je,10)}Lt.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let Ln=null;function pi(L){Ln&&Ln(L)}function Mn(){An.stop()}function ji(){An.start()}const An=new iv;An.setAnimationLoop(pi),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(L){Ln=L,ke.setAnimationLoop(L),L===null?An.stop():An.start()},ke.addEventListener("sessionstart",Mn),ke.addEventListener("sessionend",ji),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){ln("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(L,X);const me=ke.enabled===!0&&ke.isPresenting===!0,oe=D!==null&&(te===null||me)&&D.begin(z,te);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(X),X=ke.getCamera()),L.isScene===!0&&L.onBeforeRender(z,L,X,te),I=Ce.get(L,b.length),I.init(X),I.state.textureUnits=ge.getTextureUnits(),b.push(I),_t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ft.setFromProjectionMatrix(_t,Jr,X.reversedDepth),bt=this.localClippingEnabled,pt=et.init(this.clippingPlanes,bt),U=Oe.get(L,k.length),U.init(),k.push(U),ke.enabled===!0&&ke.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&gt(Ve,X,-1/0,z.sortObjects)}gt(L,X,0,z.sortObjects),U.finish(),W!==null&&W.updateLights(I.state.lightsArray),z.sortObjects===!0&&U.sort(Re,Ye),Ft=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ft&&dt.addToRenderList(U,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&et.beginShadows();const le=I.state.shadowsArray;if(rt.render(le,L,X),pt===!0&&et.endShadows(),(oe&&D.hasRenderPass())===!1){const Ve=U.opaque,He=U.transmissive;if(I.setupLights(),X.isArrayCamera){const Qe=X.cameras;if(He.length>0)for(let it=0,ht=Qe.length;it<ht;it++){const Et=Qe[it];is(Ve,He,L,Et)}Ft&&dt.render(L);for(let it=0,ht=Qe.length;it<ht;it++){const Et=Qe[it];oi(U,L,Et,Et.viewport)}}else He.length>0&&is(Ve,He,L,X),Ft&&dt.render(L),oi(U,L,X)}te!==null&&ee===0&&(ge.updateMultisampleRenderTarget(te),ge.updateRenderTargetMipmap(te)),oe&&D.end(z),L.isScene===!0&&L.onAfterRender(z,L,X),Ee.resetDefaultState(),Y=-1,K=null,b.pop(),b.length>0?(I=b[b.length-1],ge.setTextureUnits(I.state.textureUnits),pt===!0&&et.setGlobalState(z.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?U=k[k.length-1]:U=null,W!==null&&W.renderEnd()};function gt(L,X,me,oe){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)me=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLightProbeGrid)I.pushLightProbeGrid(L);else if(L.isLight)I.pushLight(L),L.castShadow&&I.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(ft)){oe&&Ot.setFromMatrixPosition(L.matrixWorld).applyMatrix4(_t);const Ve=be.update(L),He=L.material;He.visible&&U.push(L,Ve,He,me,Ot.z,null,X)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(ft))){const Ve=be.update(L),He=L.material;if(oe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ot.copy(L.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ot.copy(Ve.boundingSphere.center)),Ot.applyMatrix4(L.matrixWorld).applyMatrix4(_t)),Array.isArray(He)){const Qe=Ve.groups;for(let it=0,ht=Qe.length;it<ht;it++){const Et=Qe[it],$e=He[Et.materialIndex];$e&&$e.visible&&U.push(L,Ve,$e,me,Ot.z,Et,X)}}else He.visible&&U.push(L,Ve,He,me,Ot.z,null,X)}}const je=L.children;for(let Ve=0,He=je.length;Ve<He;Ve++)gt(je[Ve],X,me,oe)}function oi(L,X,me,oe){const{opaque:le,transmissive:je,transparent:Ve}=L;I.setupLightsView(me),pt===!0&&et.setGlobalState(z.clippingPlanes,me),oe&&w.viewport(T.copy(oe)),le.length>0&&$i(le,X,me),je.length>0&&$i(je,X,me),Ve.length>0&&$i(Ve,X,me),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function is(L,X,me,oe){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[oe.id]===void 0){const $e=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[oe.id]=new Or(1,1,{generateMipmaps:!0,type:$e?ts:ir,minFilter:La,samples:Math.max(4,B.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const je=I.state.transmissionRenderTarget[oe.id],Ve=oe.viewport||T;je.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const He=z.getRenderTarget(),Qe=z.getActiveCubeFace(),it=z.getActiveMipmapLevel();z.setRenderTarget(je),z.getClearColor(We),Xe=z.getClearAlpha(),Xe<1&&z.setClearColor(16777215,.5),z.clear(),Ft&&dt.render(me);const ht=z.toneMapping;z.toneMapping=Qr;const Et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),I.setupLightsView(oe),pt===!0&&et.setGlobalState(z.clippingPlanes,oe),$i(L,me,oe),ge.updateMultisampleRenderTarget(je),ge.updateRenderTargetMipmap(je),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Dt=0,gn=X.length;Dt<gn;Dt++){const an=X[Dt],{object:Xt,geometry:En,material:Ke,group:un}=an;if(Ke.side===Xi&&Xt.layers.test(oe.layers)){const Nt=Ke.side;Ke.side=qi,Ke.needsUpdate=!0,_r(Xt,me,oe,En,Ke,un),Ke.side=Nt,Ke.needsUpdate=!0,$e=!0}}$e===!0&&(ge.updateMultisampleRenderTarget(je),ge.updateRenderTargetMipmap(je))}z.setRenderTarget(He,Qe,it),z.setClearColor(We,Xe),Et!==void 0&&(oe.viewport=Et),z.toneMapping=ht}function $i(L,X,me){const oe=X.isScene===!0?X.overrideMaterial:null;for(let le=0,je=L.length;le<je;le++){const Ve=L[le],{object:He,geometry:Qe,group:it}=Ve;let ht=Ve.material;ht.allowOverride===!0&&oe!==null&&(ht=oe),He.layers.test(me.layers)&&_r(He,X,me,Qe,ht,it)}}function _r(L,X,me,oe,le,je){W!==null&&le.isNodeMaterial&&W.setObject(L,le),L.onBeforeRender(z,X,me,oe,le,je),L.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(z,X,me,oe,L,je),le.transparent===!0&&le.side===Xi&&le.forceSinglePass===!1?(le.side=qi,le.needsUpdate=!0,z.renderBufferDirect(me,X,oe,le,L,je),le.side=Ia,le.needsUpdate=!0,z.renderBufferDirect(me,X,oe,le,L,je),le.side=Xi):z.renderBufferDirect(me,X,oe,le,L,je),L.onAfterRender(z,X,me,oe,le,je)}function Zn(L,X,me){X.isScene!==!0&&(X=Qt);const oe=ae.get(L),le=I.state.lights,je=I.state.shadowsArray,Ve=le.state.version,He=ze.getParameters(L,le.state,je,X,me,I.state.lightProbeGridArray),Qe=ze.getProgramCacheKey(He);let it=oe.programs;oe.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?X.environment:null,oe.fog=X.fog;const ht=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;oe.envMap=Pe.get(L.envMap||oe.environment,ht),oe.envMapRotation=oe.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,it===void 0&&(L.addEventListener("dispose",en),it=new Map,oe.programs=it);let Et=it.get(Qe);if(Et!==void 0){if(oe.currentProgram===Et&&oe.lightsStateVersion===Ve)return rs(L,He),Et}else He.uniforms=ze.getUniforms(L),W!==null&&L.isNodeMaterial&&W.build(L,me,He),L.onBeforeCompile(He,z),Et=ze.acquireProgram(He,Qe),it.set(Qe,Et),oe.uniforms=He.uniforms;const $e=oe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&($e.clippingPlanes=et.uniform),rs(L,He),oe.needsLights=yr(L),oe.lightsStateVersion=Ve,oe.needsLights&&($e.ambientLightColor.value=le.state.ambient,$e.lightProbe.value=le.state.probe,$e.sunLights.value=le.state.sun,$e.sunLightShadows.value=le.state.sunShadow,$e.directionalLights.value=le.state.directional,$e.directionalLightShadows.value=le.state.directionalShadow,$e.spotLights.value=le.state.spot,$e.spotLightShadows.value=le.state.spotShadow,$e.rectAreaLights.value=le.state.rectArea,$e.ltc_1.value=le.state.rectAreaLTC1,$e.ltc_2.value=le.state.rectAreaLTC2,$e.pointLights.value=le.state.point,$e.pointLightShadows.value=le.state.pointShadow,$e.hemisphereLights.value=le.state.hemi,$e.sunShadowMatrix.value=le.state.sunShadowMatrix,$e.sunShadowCascade.value=le.state.sunShadowCascade,$e.directionalShadowMatrix.value=le.state.directionalShadowMatrix,$e.spotLightMatrix.value=le.state.spotLightMatrix,$e.spotLightMap.value=le.state.spotLightMap,$e.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=I.state.lightProbeGridArray.length>0,oe.currentProgram=Et,oe.uniformsList=null,Et}function Wn(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=Su.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function rs(L,X){const me=ae.get(L);me.outputColorSpace=X.outputColorSpace,me.batching=X.batching,me.batchingColor=X.batchingColor,me.instancing=X.instancing,me.instancingColor=X.instancingColor,me.instancingMorph=X.instancingMorph,me.skinning=X.skinning,me.morphTargets=X.morphTargets,me.morphNormals=X.morphNormals,me.morphColors=X.morphColors,me.morphTargetsCount=X.morphTargetsCount,me.numClippingPlanes=X.numClippingPlanes,me.numIntersection=X.numClipIntersection,me.vertexAlphas=X.vertexAlphas,me.vertexTangents=X.vertexTangents,me.toneMapping=X.toneMapping}function Wt(L,X){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;R.setFromMatrixPosition(X.matrixWorld);for(let me=0,oe=L.length;me<oe;me++){const le=L[me];if(le.texture!==null&&le.boundingBox.containsPoint(R))return le}return null}function Bt(L,X,me,oe,le){X.isScene!==!0&&(X=Qt),ge.resetTextureUnits();const je=X.fog,Ve=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?X.environment:null,He=te===null?z.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Zt.workingColorSpace,Qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,it=Pe.get(oe.envMap||Ve,Qe),ht=oe.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,Et=!!me.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),$e=!!me.morphAttributes.position,Dt=!!me.morphAttributes.normal,gn=!!me.morphAttributes.color;let an=Qr;oe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(an=z.toneMapping);const Xt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,En=Xt!==void 0?Xt.length:0,Ke=ae.get(oe),un=I.state.lights;if(pt===!0&&(bt===!0||L!==K)){const O=L===K&&oe.id===Y;et.setState(oe,L,O)}let Nt=!1;oe.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==un.state.version||Ke.outputColorSpace!==He||le.isBatchedMesh&&Ke.batching===!1||!le.isBatchedMesh&&Ke.batching===!0||le.isBatchedMesh&&Ke.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&Ke.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&Ke.instancing===!1||!le.isInstancedMesh&&Ke.instancing===!0||le.isSkinnedMesh&&Ke.skinning===!1||!le.isSkinnedMesh&&Ke.skinning===!0||le.isInstancedMesh&&Ke.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ke.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ke.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ke.instancingMorph===!1&&le.morphTexture!==null||Ke.envMap!==it||oe.fog===!0&&Ke.fog!==je||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==et.numPlanes||Ke.numIntersection!==et.numIntersection)||Ke.vertexAlphas!==ht||Ke.vertexTangents!==Et||Ke.morphTargets!==$e||Ke.morphNormals!==Dt||Ke.morphColors!==gn||Ke.toneMapping!==an||Ke.morphTargetsCount!==En||!!Ke.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,Ke.__version=oe.version);let Un=Ke.currentProgram;Nt===!0&&(Un=Zn(oe,X,le),W&&oe.isNodeMaterial&&W.onUpdateProgram(oe,Un,Ke));let yt=!1,li=!1,ci=!1;const Vt=Un.getUniforms(),nn=Ke.uniforms;if(w.useProgram(Un.program)&&(yt=!0,li=!0,ci=!0),oe.id!==Y&&(Y=oe.id,li=!0),Ke.needsLights){const O=Wt(I.state.lightProbeGridArray,le);Ke.lightProbeGrid!==O&&(Ke.lightProbeGrid=O,li=!0)}if(yt||K!==L){w.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Vt.setValue($,"projectionMatrix",L.projectionMatrix),Vt.setValue($,"viewMatrix",L.matrixWorldInverse);const he=Vt.map.cameraPosition;he!==void 0&&he.setValue($,At.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&Vt.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Vt.setValue($,"isOrthographic",L.isOrthographicCamera===!0),K!==L&&(K=L,li=!0,ci=!0)}if(Ke.needsLights&&(un.state.sunShadowMap.length>0&&Vt.setValue($,"sunShadowMap",un.state.sunShadowMap,ge),un.state.directionalShadowMap.length>0&&Vt.setValue($,"directionalShadowMap",un.state.directionalShadowMap,ge),un.state.spotShadowMap.length>0&&Vt.setValue($,"spotShadowMap",un.state.spotShadowMap,ge),un.state.pointShadowMap.length>0&&Vt.setValue($,"pointShadowMap",un.state.pointShadowMap,ge)),le.isSkinnedMesh){Vt.setOptional($,le,"bindMatrix"),Vt.setOptional($,le,"bindMatrixInverse");const O=le.skeleton;O&&(O.boneTexture===null&&O.computeBoneTexture(),Vt.setValue($,"boneTexture",O.boneTexture,ge))}le.isBatchedMesh&&(Vt.setOptional($,le,"batchingTexture"),Vt.setValue($,"batchingTexture",le._matricesTexture,ge),Vt.setOptional($,le,"batchingIdTexture"),Vt.setValue($,"batchingIdTexture",le._indirectTexture,ge),Vt.setOptional($,le,"batchingColorTexture"),le._colorsTexture!==null&&Vt.setValue($,"batchingColorTexture",le._colorsTexture,ge));const h=me.morphAttributes;if((h.position!==void 0||h.normal!==void 0||h.color!==void 0)&&q.update(le,me,Un),(li||Ke.receiveShadow!==le.receiveShadow)&&(Ke.receiveShadow=le.receiveShadow,Vt.setValue($,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&X.environment!==null&&(nn.envMapIntensity.value=X.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=JE()),li){if(Vt.setValue($,"toneMappingExposure",z.toneMappingExposure),Ke.needsLights&&Yi(nn,ci),je&&oe.fog===!0&&Je.refreshFogUniforms(nn,je),Je.refreshMaterialUniforms(nn,oe,de,se,I.state.transmissionRenderTarget[L.id]),Ke.needsLights&&Ke.lightProbeGrid){const O=Ke.lightProbeGrid;nn.probesSH.value=O.texture,nn.probesMin.value.copy(O.boundingBox.min),nn.probesMax.value.copy(O.boundingBox.max),nn.probesResolution.value.copy(O.resolution)}Su.upload($,Wn(Ke),nn,ge)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Su.upload($,Wn(Ke),nn,ge),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Vt.setValue($,"center",le.center),Vt.setValue($,"modelViewMatrix",le.modelViewMatrix),Vt.setValue($,"normalMatrix",le.normalMatrix),Vt.setValue($,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const O=oe.uniformsGroups;for(let he=0,we=O.length;he<we;he++){const De=O[he];Z.update(De,Un),Z.bind(De,Un)}}return Un}function Yi(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.sunLights.needsUpdate=X,L.sunLightShadows.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function yr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(L,X,me){const oe=ae.get(L);oe.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ae.get(L.texture).__webglTexture=X,ae.get(L.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:me,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){const me=ae.get(L);me.__webglFramebuffer=X,me.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,me=0){te=L,fe=X,ee=me;let oe=null,le=!1,je=!1;if(L){const He=ae.get(L);if(He.__useDefaultFramebuffer!==void 0){w.bindFramebuffer($.FRAMEBUFFER,He.__webglFramebuffer),T.copy(L.viewport),ce.copy(L.scissor),_e=L.scissorTest,w.viewport(T),w.scissor(ce),w.setScissorTest(_e),Y=-1;return}else if(He.__webglFramebuffer===void 0)ge.setupRenderTarget(L);else if(He.__hasExternalTextures)ge.rebindTextures(L,ae.get(L.texture).__webglTexture,ae.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ht=L.depthTexture;if(He.__boundDepthTexture!==ht){if(ht!==null&&ae.has(ht)&&(L.width!==ht.image.width||L.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(L)}}const Qe=L.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(je=!0);const it=ae.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(it[X])?oe=it[X][me]:oe=it[X],le=!0):L.samples>0&&ge.useMultisampledRTT(L)===!1?oe=ae.get(L).__webglMultisampledFramebuffer:Array.isArray(it)?oe=it[me]:oe=it,T.copy(L.viewport),ce.copy(L.scissor),_e=L.scissorTest}else T.copy(Ue).multiplyScalar(de).floor(),ce.copy(ut).multiplyScalar(de).floor(),_e=zt;if(me!==0&&(oe=ne),w.bindFramebuffer($.FRAMEBUFFER,oe)&&w.drawBuffers(L,oe),w.viewport(T),w.scissor(ce),w.setScissorTest(_e),le){const He=ae.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,me)}else if(je){const He=X;for(let Qe=0;Qe<L.textures.length;Qe++){const it=ae.get(L.textures[Qe]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Qe,it.__webglTexture,me,He)}}else if(L!==null&&me!==0){const He=ae.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,He.__webglTexture,me)}Y=-1};function Ki(L){const X=ae.get(L);return(X.__readFormat!==L.format||X.__readType!==L.type)&&(X.__readFormat=L.format,X.__readType=L.type,X.__formatReadable=B.textureFormatReadable(L.format),X.__typeReadable=B.textureTypeReadable(L.type)),X}this.readRenderTargetPixels=function(L,X,me,oe,le,je,Ve,He=0){if(!(L&&L.isWebGLRenderTarget)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ve!==void 0&&(Qe=Qe[Ve]),Qe){w.bindFramebuffer($.FRAMEBUFFER,Qe);try{const it=L.textures[He],ht=it.format,Et=it.type;L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+He);const $e=Ki(it);if($e.__formatReadable===!1){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-oe&&me>=0&&me<=L.height-le&&$.readPixels(X,me,oe,le,Se.convert(ht),Se.convert(Et),je)}finally{const it=te!==null?ae.get(te).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(L,X,me,oe,le,je,Ve,He=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ve!==void 0&&(Qe=Qe[Ve]),Qe)if(X>=0&&X<=L.width-oe&&me>=0&&me<=L.height-le){w.bindFramebuffer($.FRAMEBUFFER,Qe);const it=L.textures[He],ht=it.format,Et=it.type;L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+He);const $e=Ki(it);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Dt),$.bufferData($.PIXEL_PACK_BUFFER,je.byteLength,$.STREAM_READ),$.readPixels(X,me,oe,le,Se.convert(ht),Se.convert(Et),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const gn=te!==null?ae.get(te).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,gn);const an=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await m_($,an,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Dt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,je),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Dt),$.deleteSync(an),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,me=0){const oe=Math.pow(2,-me),le=Math.floor(L.image.width*oe),je=Math.floor(L.image.height*oe),Ve=X!==null?X.x:0,He=X!==null?X.y:0;ge.setTexture2D(L,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,Ve,He,le,je),w.unbindTexture()},this.copyTextureToTexture=function(L,X,me=null,oe=null,le=0,je=0){let Ve,He,Qe,it,ht,Et,$e,Dt,gn;const an=L.isCompressedTexture?L.mipmaps[je]:L.image;if(me!==null)Ve=me.max.x-me.min.x,He=me.max.y-me.min.y,Qe=me.isBox3?me.max.z-me.min.z:1,it=me.min.x,ht=me.min.y,Et=me.isBox3?me.min.z:0;else{const nn=Math.pow(2,-le);Ve=Math.floor(an.width*nn),He=Math.floor(an.height*nn),L.isDataArrayTexture?Qe=an.depth:L.isData3DTexture?Qe=Math.floor(an.depth*nn):Qe=1,it=0,ht=0,Et=0}oe!==null?($e=oe.x,Dt=oe.y,gn=oe.z):($e=0,Dt=0,gn=0);const Xt=Se.convert(X.format),En=Se.convert(X.type);let Ke;X.isData3DTexture?(ge.setTexture3D(X,0),Ke=$.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ge.setTexture2DArray(X,0),Ke=$.TEXTURE_2D_ARRAY):(ge.setTexture2D(X,0),Ke=$.TEXTURE_2D),w.activeTexture($.TEXTURE0),w.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment);const un=w.getParameter($.UNPACK_ROW_LENGTH),Nt=w.getParameter($.UNPACK_IMAGE_HEIGHT),Un=w.getParameter($.UNPACK_SKIP_PIXELS),yt=w.getParameter($.UNPACK_SKIP_ROWS),li=w.getParameter($.UNPACK_SKIP_IMAGES);w.pixelStorei($.UNPACK_ROW_LENGTH,an.width),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,an.height),w.pixelStorei($.UNPACK_SKIP_PIXELS,it),w.pixelStorei($.UNPACK_SKIP_ROWS,ht),w.pixelStorei($.UNPACK_SKIP_IMAGES,Et);const ci=L.isDataArrayTexture||L.isData3DTexture,Vt=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){const nn=ae.get(L),h=ae.get(X),O=ae.get(nn.__renderTarget),he=ae.get(h.__renderTarget);w.bindFramebuffer($.READ_FRAMEBUFFER,O.__webglFramebuffer),w.bindFramebuffer($.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let we=0;we<Qe;we++)ci&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ae.get(L).__webglTexture,le,Et+we),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ae.get(X).__webglTexture,je,gn+we)),$.blitFramebuffer(it,ht,Ve,He,$e,Dt,Ve,He,$.DEPTH_BUFFER_BIT,$.NEAREST);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(le!==0||L.isRenderTargetTexture||ae.has(L)){const nn=ae.get(L),h=ae.get(X);w.bindFramebuffer($.READ_FRAMEBUFFER,H),w.bindFramebuffer($.DRAW_FRAMEBUFFER,re);for(let O=0;O<Qe;O++)ci?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nn.__webglTexture,le,Et+O):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,nn.__webglTexture,le),Vt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,h.__webglTexture,je,gn+O):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,h.__webglTexture,je),le!==0?$.blitFramebuffer(it,ht,Ve,He,$e,Dt,Ve,He,$.COLOR_BUFFER_BIT,$.NEAREST):Vt?$.copyTexSubImage3D(Ke,je,$e,Dt,gn+O,it,ht,Ve,He):$.copyTexSubImage2D(Ke,je,$e,Dt,it,ht,Ve,He);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Vt?L.isDataTexture||L.isData3DTexture?$.texSubImage3D(Ke,je,$e,Dt,gn,Ve,He,Qe,Xt,En,an.data):X.isCompressedArrayTexture?$.compressedTexSubImage3D(Ke,je,$e,Dt,gn,Ve,He,Qe,Xt,an.data):$.texSubImage3D(Ke,je,$e,Dt,gn,Ve,He,Qe,Xt,En,an):L.isDataTexture?$.texSubImage2D($.TEXTURE_2D,je,$e,Dt,Ve,He,Xt,En,an.data):L.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,je,$e,Dt,an.width,an.height,Xt,an.data):$.texSubImage2D($.TEXTURE_2D,je,$e,Dt,Ve,He,Xt,En,an);w.pixelStorei($.UNPACK_ROW_LENGTH,un),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,Nt),w.pixelStorei($.UNPACK_SKIP_PIXELS,Un),w.pixelStorei($.UNPACK_SKIP_ROWS,yt),w.pixelStorei($.UNPACK_SKIP_IMAGES,li),je===0&&X.generateMipmaps&&$.generateMipmap(Ke),w.unbindTexture()},this.initRenderTarget=function(L){ae.get(L).__webglFramebuffer===void 0&&ge.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ge.setTextureCube(L,0):L.isData3DTexture?ge.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ge.setTexture2DArray(L,0):ge.setTexture2D(L,0),w.unbindTexture()},this.resetState=function(){fe=0,ee=0,te=null,w.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}}function ew(r,e,t,s=62206,o=16638023){for(;r.children.length>0;)r.remove(r.children[0]);for(;e.children.length>0;)e.remove(e.children[0]);const l={londonEyeWheel:null,eiffelBeacon:null,libertyTorchHalo:null,auroraMesh:null},u=new jt({color:330518,fog:!1}),f=new jt({color:s,fog:!1}),m=new jt({color:o,fog:!1}),p=new jt({color:16777215,fog:!1}),y=new jt({color:62206,fog:!1}),S=new jt({color:16638023,fog:!1}),x=new jt({color:15680580,fog:!1}),M=(C,_,v,A,F,R,U,I=f)=>{const k=new St(_,v,A),b=new ve(k,u);b.position.set(F,R,U);const D=new Mo(k),z=new So(D,new na({color:I.color,fog:!1}));return b.add(z),C.add(b),b},E=-28;if(t==="obelisco"){const C=new jt({color:3718648,fog:!1}),_=M(r,5.2,68,5.2,-10,E+34,0,C),v=new St(1.1,66,5.4),A=new ve(v,p);_.add(A);const F=new Di(3.7,10,4);F.rotateY(Math.PI/4);const R=new ve(F,p);R.position.set(-10,E+73,0),r.add(R);const U=new St(36,1.4,3.2),I=new ve(U,C);I.position.set(14,E+12,2),r.add(I);const k=new sn(.45,.9,42,10),b=new ve(k,p);b.position.set(12,E+28,2),b.rotation.z=-.46,r.add(b);for(let D=0;D<6;D++){const z=new sn(.08,.08,24+D*2,6),G=new ve(z,C);G.position.set(16+D*2.2,E+21,2),G.rotation.z=.55+D*.06,r.add(G)}}else if(t==="cristo"){const C=new Di(28,44,7),_=new ve(C,u);_.position.set(0,E+14,0);const v=new So(new Mo(C),new na({color:2278750,fog:!1}));_.add(v),r.add(_),M(r,7,10,7,0,E+39,0,S);const A=M(r,6.2,26,4.2,0,E+57,0,p),F=new ve(new St(3.8,25,4.4),new jt({color:14742270,fog:!1}));A.add(F);const R=new St(32,3.2,3),U=new ve(R,p);U.position.set(0,E+64,0),r.add(U);const I=new si(2.6,14,14),k=new ve(I,p);k.position.set(0,E+72.5,.5),r.add(k);const b=new Di(12,55,16,1,!0),D=new jt({color:4906624,transparent:!0,opacity:.18,blending:Wi,side:Xi,depthWrite:!1,fog:!1}),z=new ve(b,D);z.position.set(-14,E+46,2),z.rotation.z=-.35,r.add(z);const G=new ve(b,D);G.position.set(14,E+46,2),G.rotation.z=.35,r.add(G)}else if(t==="liberty_empire"){M(r,11,20,11,-16,E+10,0,y),M(r,6.5,28,5.5,-16,E+34,0,y);const C=new ve(new si(2.8,12,12),y);C.position.set(-16,E+50,0),r.add(C);for(let R=-3;R<=3;R++){const U=new ve(new Di(.35,3.6,6),y);U.position.set(-16+R*.9,E+53,0),U.rotation.z=-R*.22,r.add(U)}const _=new ve(new sn(.7,.9,14,8),y);_.position.set(-12.5,E+54,0),_.rotation.z=-.25,r.add(_);const v=new ve(new si(2.2,16,16),S);v.position.set(-10.8,E+62,0),r.add(v);const A=new ve(new si(5.2,16,16),new jt({color:16638023,transparent:!0,opacity:.42,blending:Wi,fog:!1}));A.position.copy(v.position),r.add(A),l.libertyTorchHalo=A,M(r,14,52,12,15,E+26,-2,y),M(r,9.5,18,9,15,E+61,-2,y),M(r,5.5,12,5.5,15,E+76,-2,S);const F=new ve(new sn(.25,.9,24,10),p);F.position.set(15,E+94,-2),r.add(F)}else if(t==="eiffel"){const C=new jt({color:16498468,fog:!1}),_=[[-11,-6],[11,-6],[-11,6],[11,6]];for(let k=0;k<_.length;k++){const[b,D]=_[k],z=new sn(1.1,2.4,30,8),G=new ve(z,C);G.position.set(b*.72,E+14,D*.72),G.rotation.z=b<0?-.24:.24,r.add(G)}M(r,20,3.2,14,0,E+28,0,S),M(r,12,24,9,0,E+42,0,C),M(r,14,2.6,10,0,E+54,0,S);const v=new ve(new sn(1.2,4.8,34,4,4,!0),new jt({color:16638023,wireframe:!0,fog:!1}));v.position.set(0,E+72,0),v.rotation.y=Math.PI/4,r.add(v);const A=new Kt;A.position.set(0,E+90,0);const F=new Di(9,75,16,1,!0);F.translate(0,-37.5,0),F.rotateZ(Math.PI/2);const R=new jt({color:16707722,transparent:!0,opacity:.32,blending:Wi,side:Xi,depthWrite:!1,fog:!1}),U=new ve(F,R),I=new ve(F,R);I.rotation.y=Math.PI,A.add(U),A.add(I),r.add(A),l.eiffelBeacon=A}else if(t==="tokyotower"){const C=[{y:14,rBot:11,rTop:7,h:28,mat:x},{y:38,rBot:7,rTop:4.5,h:20,mat:p},{y:56,rBot:4.5,rTop:2.4,h:16,mat:x},{y:71,rBot:2.4,rTop:.8,h:14,mat:p},{y:84,rBot:.8,rTop:.2,h:14,mat:x}];for(let I=0;I<C.length;I++){const k=C[I],b=new sn(k.rTop,k.rBot,k.h,4,2,!0),D=new ve(b,new jt({color:k.mat.color,wireframe:!0,fog:!1}));D.position.set(0,E+k.y,0),D.rotation.y=Math.PI/4,r.add(D)}const _=new sn(.24,.28,6.2,12),v=new ve(_,x);v.position.set(-2.5,3.1,2.2),e.add(v);const A=new ve(_,x);A.position.set(2.5,3.1,2.2),e.add(A);const F=new ve(new St(7.2,.42,.55),x);F.position.set(0,6.2,2.2),e.add(F);const R=new ve(new St(7.5,.16,.6),S);R.position.set(0,6.48,2.2),e.add(R);const U=new ve(new St(5.8,.28,.38),x);U.position.set(0,4.9,2.2),e.add(U)}else if(t==="pyramids"){const C=[{x:0,z:-4,r:26,h:48},{x:-24,z:4,r:19,h:36},{x:24,z:6,r:16,h:30}];for(let _=0;_<C.length;_++){const v=C[_],A=new Di(v.r,v.h,4);A.rotateY(Math.PI/4);const F=new ve(A,u);F.position.set(v.x,E+v.h*.5,v.z);const R=new Mo(A),U=new So(R,new na({color:16638023,fog:!1}));F.add(U);const I=new Di(v.r*.22,v.h*.22,4);I.rotateY(Math.PI/4);const k=new ve(I,S);k.position.set(0,v.h*.39,0),F.add(k),r.add(F)}}else if(t==="londoneye"){M(r,7.5,54,7.5,-18,E+27,0,S),M(r,8.6,8.6,8.6,-18,E+58,0,S);const C=new ve(new sn(3.2,3.2,.5,20),S);C.rotation.x=Math.PI/2,C.position.set(-18,E+58,4.4),r.add(C);const _=new ve(new Di(5.2,16,4),S);_.rotation.y=Math.PI/4,_.position.set(-18,E+70,0),r.add(_);const v=new Kt;v.position.set(14,E+42,0);const A=new ve(new Hn(21,.65,12,48),y);v.add(A);for(let F=0;F<12;F++){const R=F/12*Math.PI*2,U=new ve(new sn(.12,.12,42,6),y);U.rotation.z=R,v.add(U);const I=new ve(new si(1.15,10,10),p);I.position.set(Math.cos(R)*21,Math.sin(R)*21,0),v.add(I)}r.add(v),l.londonEyeWheel=v}else if(t==="burjkhalifa"){const C=[{w:15,h:24,y:12},{w:12,h:24,y:36},{w:9,h:22,y:59},{w:6.2,h:22,y:81},{w:3.6,h:20,y:102},{w:1.5,h:24,y:124}];for(let _=0;_<C.length;_++){const v=C[_];M(r,v.w,v.h,v.w,0,E+v.y,0,y);const A=new ve(new Hn(v.w*.68,.32,10,28),_%2===0?y:S);A.rotation.x=Math.PI/2,A.position.set(0,E+v.y+v.h*.5,0),r.add(A)}}else if(t==="opera"){M(r,44,6,14,0,E+12,0,S);const C=[-14,-6,3,12];for(let A=0;A<C.length;A++){const F=C[A],R=22+A%2*8,U=new Di(6.5,R,4),I=new ve(U,p);I.position.set(F,E+15+R*.45,2),I.rotation.z=-.28;const k=new So(new Mo(U),new na({color:62206,fog:!1}));I.add(k),r.add(I)}const _=new Hn(30,.85,10,36,Math.PI),v=new ve(_,y);v.position.set(0,E+14,-8),r.add(v)}else if(t==="stbasil"){const C=[{x:0,h:48,r:5.2,mat:x},{x:-12,h:36,r:4.2,mat:y},{x:12,h:36,r:4.2,mat:S},{x:-22,h:28,r:3.5,mat:S},{x:22,h:28,r:3.5,mat:y}];for(let _=0;_<C.length;_++){const v=C[_];M(r,v.r*1.4,v.h,v.r*1.4,v.x,E+v.h*.5,0,v.mat);const A=new ve(new si(v.r,16,16),v.mat);A.scale.set(1,1.25,1),A.position.set(v.x,E+v.h+v.r*.8,0),r.add(A);const F=new ve(new Di(v.r*.45,7,8),S);F.position.set(v.x,E+v.h+v.r*2.1,0),r.add(F);const R=new ve(new Nu(1.6,0),S);R.position.set(v.x,E+v.h+v.r*2.1+4.5,0),r.add(R)}}else if(t==="marinabay"){const C=[-16,0,16];for(let v=0;v<C.length;v++)M(r,7.5,58,7,C[v],E+29,0,y);const _=new ve(new St(46,3.8,10),S);_.position.set(2,E+60,0),r.add(_)}else if(t==="swiss_alps"){const C=new ve(new Di(24,65,5),u);C.position.set(-20,E+32,-4),C.add(new So(new Mo(C.geometry),new na({color:3718648,fog:!1}))),r.add(C);const _=new ve(new Di(26,72,5),u);_.position.set(20,E+36,-4),_.add(new So(new Mo(_.geometry),new na({color:4906624,fog:!1}))),r.add(_);const v=new Fa(76,32,16,4),A=new jt({color:4906624,transparent:!0,opacity:.28,blending:Wi,side:Xi,depthWrite:!1,fog:!1}),F=new ve(v,A);F.position.set(0,E+78,-8),r.add(F),l.auroraMesh=F}else{M(r,10,62,10,-16,E+31,0,f),M(r,10,62,10,16,E+31,0,f);const C=new ve(new si(6.2,16,16),m);C.position.set(0,E+62,0),r.add(C);const _=M(r,5.5,78,5.5,0,E+39,0,m),v=new ve(new sn(.25,.8,22,8),p);v.position.set(0,48,0),_.add(v);const A=new ve(new St(48,1.8,4),f);A.position.set(0,E+24,2),r.add(A)}return l}const ra=.82;let dv=null;function tw(){const r=document.createElement("canvas");r.width=256,r.height=512;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#020612"),t.addColorStop(.32,"#071630"),t.addColorStop(.62,"#0f2c56"),t.addColorStop(.84,"#154e7a"),t.addColorStop(1,"#040b18"),e.fillStyle=t,e.fillRect(0,0,256,512);const s=e.createRadialGradient(128,310,12,128,310,165);return s.addColorStop(0,"rgba(0, 242, 254, 0.42)"),s.addColorStop(.55,"rgba(14, 165, 233, 0.14)"),s.addColorStop(1,"rgba(2, 6, 18, 0.0)"),e.fillStyle=s,e.fillRect(0,0,256,512),new Lu(r)}function nw(){const r=document.createElement("canvas");r.width=128,r.height=128;const e=r.getContext("2d");e.fillStyle="#64748b",e.fillRect(0,0,128,128),e.strokeStyle="#cbd5e1",e.lineWidth=6;for(let s=-128;s<256;s+=20)e.beginPath(),e.moveTo(s,0),e.lineTo(s+80,128),e.stroke();const t=new Lu(r);return t.wrapS=Ua,t.wrapT=Ua,t.repeat.set(2,320),t}function iw(){const r=document.createElement("canvas");r.width=256,r.height=256;const e=r.getContext("2d");return e.fillStyle="#09111f",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=8,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.fillStyle="#fde047",e.font="bold 116px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,134),new Lu(r)}function Mg(r=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=r?"#061121":"#040914",t.fillRect(0,0,128,256);const s=8,o=24;for(let u=1;u<o;u++)for(let f=1;f<s;f++){const m=(u*17+f*31)%100;m<(r?28:42)&&(m<7?t.fillStyle="#00f2fe":m<18?t.fillStyle="#fef08a":t.fillStyle=r?"#1e3a5f":"#38bdf8",t.fillRect(f*14,u*10,7,5))}const l=new Lu(e);return l.wrapS=Ua,l.wrapT=Ua,l.repeat.set(1,2),l}function rw(r){if(!r)return null;const e=r.clientWidth||420,t=r.clientHeight||780,s=new L_;s.background=new $t(398118),s.fog=new Zh(664121,.011);const o=new nr(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);let l=null;try{l=new QE({antialias:!0,powerPreference:"high-performance"}),l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=Vh,l.toneMappingExposure=1.25,r.innerHTML="",r.appendChild(l.domElement)}catch(qe){return console.warn("WebGLRenderer initialization warning:",qe),null}const u=new Q_(3718648,.9);s.add(u);const f=new J_(62206,1.75);f.position.set(0,28,-65),s.add(f);const m=new du(62206,3.8,22);m.position.set(0,1.35,0),s.add(m);const p=new du(16638023,4.2,24);p.position.set(0,2.5,-.3),s.add(p);const y=tw(),S=new Fa(340,220),x=new jt({map:y,fog:!1,depthWrite:!1}),M=new ve(S,x);M.position.set(0,12,-210),s.add(M);const E=1800,C=nw(),_=new sn(.042,.042,E,16);_.rotateX(Math.PI/2);const v=new Gn({color:13358561,map:C,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),A=new ve(_,v);A.position.set(0,0,-E*.5+12),s.add(A);const F=new sn(.015,.015,E,8);F.rotateX(Math.PI/2);const R=new jt({color:62206,transparent:!0,opacity:.72}),U=new ve(F,R);U.position.set(0,.022,-E*.5+12),s.add(U);const I=new Gn({color:330002,roughness:.8,metalness:.2}),k=new St(7.2,60,7),b=new ve(k,I);b.position.set(0,-30.045,3.5),s.add(b);const D=new Kt,z=new St(9.2,70,9.2),G=new ve(z,I);G.position.set(0,-35.045,0),D.add(G);const W=iw(),ne=new Fa(7,7);ne.rotateX(-Math.PI/2);const H=new jt({map:W}),re=new ve(ne,H);re.position.set(0,.01,0),D.add(re);const fe=new Hn(3.4,.075,12,36);fe.rotateX(Math.PI/2);const ee=new jt({color:62206}),te=new ve(fe,ee);te.position.set(0,.12,0),D.add(te);const Y=new Kt;D.add(Y),D.position.set(0,0,-100),s.add(D);const K=new Kt;K.position.set(0,0,-135),s.add(K);const T=Mg(!1),ce=Mg(!0),_e=new Gn({color:464166,map:T,emissive:959977,emissiveMap:T,emissiveIntensity:.58,roughness:.5,metalness:.4}),We=new jt({color:729657,map:ce}),Xe=new jt({color:1128020}),Ge=new jt({color:62206,transparent:!0,opacity:.35}),se=[];for(let qe=0;qe<44;qe++){const Rt=qe%2===0,Yt=qe%3,fn=Math.floor(qe/2),ei=6.5+qe%4*2.1+Yt*2.2,xn=6.5+qe*3%4*1.8,Bn=72+qe*13%42+Yt*16,Ci=new St(ei,Bn,xn),wn=Yt===0?_e:Yt===1?We:Xe,br=new ve(Ci,wn),ar=Yt===0?12.2+qe%3*2.8:Yt===1?21.5+qe%3*4.2:32+qe%4*5,ua=(Rt?-1:1)*ar,or=10-fn*13,Wa=-60+Bn*.5;if(br.position.set(ua,Wa,or),Yt===0){const lr=new St(.12,Bn,.12),mi=new ve(lr,Ge);mi.position.set(Rt?ei*.5+.04:-ei*.5-.04,0,xn*.5),br.add(mi)}s.add(br),se.push(br)}const de=[],Re=new Di(5.5,115,20,1,!0);for(let qe=0;qe<10;qe++){const Rt=qe%2===0,Yt=new jt({color:qe%3===0?62206:959977,transparent:!0,opacity:qe%3===0?.11:.075,side:Xi,depthWrite:!1,blending:Wi}),fn=new ve(Re,Yt),ei=(Rt?-1:1)*(8.5+qe%3*4.5),xn=-18-qe*24;fn.position.set(ei,8,xn),fn.rotation.z=(Rt?-1:1)*.24,s.add(fn),de.push({mesh:fn,mat:Yt,baseAngle:(Rt?-1:1)*.24,speed:.45+qe%4*.18,phaseOffset:qe*1.1})}const Ye=[],Ue=new St(.4,.18,2.2),ut=new jt({color:62206}),zt=new jt({color:15680580});for(let qe=0;qe<20;qe++){const Rt=qe%2===0,Yt=new ve(Ue,Rt?zt:ut),fn=(qe%4-1.5)*2.1;Yt.position.set(fn,-36,-qe*12),s.add(Yt),Ye.push({mesh:Yt,speed:(Rt?-1:1)*(15+qe%4*3.5)})}const ft=220,pt=new Float32Array(ft*3);for(let qe=0;qe<ft;qe++)pt[qe*3+0]=(Math.random()-.5)*28,pt[qe*3+1]=-6+Math.random()*20,pt[qe*3+2]=6-Math.random()*55;const bt=new $n;bt.setAttribute("position",new Fr(pt,3));const _t=new Zg({color:62206,size:.14,transparent:!0,opacity:.65,blending:Wi,depthWrite:!1}),At=new V_(bt,_t);s.add(At);const Ot=new Kt;Ot.position.set(0,0,0),s.add(Ot);const Qt=new du(16777215,3.6,12);Qt.position.set(0,1.45,2.4),Ot.add(Qt);const Ft=new du(3718648,3.4,12);Ft.position.set(0,1.55,-1.8),Ot.add(Ft);const kt=new Gn({color:1976635,emissive:727081,emissiveIntensity:.35,metalness:.35,roughness:.55}),$=new Gn({color:988970,emissive:462105,emissiveIntensity:.25,metalness:.35,roughness:.55}),tn=new Gn({color:3718648,emissive:3718648,emissiveIntensity:1.35,metalness:.2,roughness:.2}),Lt=new Gn({color:3359061,emissive:3718648,emissiveIntensity:.45,metalness:.5,roughness:.35}),B=new Gn({color:3359061,emissive:3718648,emissiveIntensity:.45,metalness:.45,roughness:.35}),w=new Gn({color:3718648,emissive:3718648,emissiveIntensity:1.5,metalness:.3,roughness:.25}),J=kt,ae=$,ge=Lt,Pe=kt,Ne=B,ye=tn,be=new Gn({color:3718648,emissive:3718648,emissiveIntensity:1.4,metalness:.3,roughness:.25}),ze=new Gn({color:3718648,emissive:3718648,emissiveIntensity:1.6,metalness:.3,roughness:.25}),Je=new Gn({color:3718648,emissive:3718648,emissiveIntensity:1.6,side:Xi,metalness:.2,roughness:.3}),Oe=new Gn({color:16777215,emissive:16777215,emissiveIntensity:2.2,metalness:.2,roughness:.2}),Ce=new Gn({color:62206,emissive:62206,emissiveIntensity:2.6,metalness:.3,roughness:.2}),et=new Gn({color:12616956,emissive:12616956,emissiveIntensity:2.4,metalness:.4,roughness:.25}),rt=new Gn({color:16317180,emissive:14870768,emissiveIntensity:1.5,metalness:.85,roughness:.18}),dt=new Gn({color:16711765,emissive:16711765,emissiveIntensity:2.8,metalness:.4,roughness:.2}),q=new Gn({color:15680580,emissive:16711765,emissiveIntensity:2.2,metalness:.5,roughness:.25}),Te=new Gn({color:16498468,emissive:16096779,emissiveIntensity:2.6,metalness:.95,roughness:.15}),Me=new Gn({color:789001,emissive:1841431,emissiveIntensity:.35,metalness:.75,roughness:.25}),Se=qe=>{const Rt=new Kt;Rt.position.set(qe?-.08:.08,.88,0);const Yt=new Pa(.064,.34,10,18),fn=new ve(Yt,ae);fn.position.set(qe?.018:-.018,-.19,0),fn.rotation.z=qe?.05:-.05,Rt.add(fn);const ei=new St(.03,.12,.075),xn=new ve(ei,J);xn.position.set(qe?-.055:.055,-.18,0),Rt.add(xn);const Bn=new St(.018,.28,.032),Ci=new ve(Bn,Oe);Ci.position.set(qe?-.062:.062,-.19,.01),Ci.visible=!1,Rt.add(Ci);const wn=new Kt;wn.position.set(qe?.035:-.035,-.41,0),Rt.add(wn);const br=new Hn(.062,.014,10,20);br.rotateX(Math.PI/2);const ar=new ve(br,Ce);ar.position.set(qe?.01:-.01,-.02,0),ar.visible=!1,wn.add(ar);const ua=new Pa(.05,.34,10,18),or=new ve(ua,ae);or.position.set(qe?.02:-.02,-.2,0),or.rotation.z=qe?.04:-.04,wn.add(or);const Wa=new St(.018,.25,.028),lr=new ve(Wa,Oe);lr.position.set(qe?-.042:.042,-.2,.015),lr.visible=!1,wn.add(lr);const mi=new Kt;mi.position.set(qe?.035:-.035,-.43,0),wn.add(mi);const Hl=new Pa(.045,.14,8,14);Hl.rotateX(Math.PI/2);const da=new ve(Hl,ge);da.position.set(0,-.005,-.025),mi.add(da);const Hu=new St(.095,.026,.22),Go=new ve(Hu,be);Go.position.set(0,-.038,-.025),mi.add(Go);const Ho=new St(.098,.032,.045),Is=new ve(Ho,Ce);Is.position.set(0,-.01,.068),Is.visible=!1,mi.add(Is);const Wo=new sn(.024,.036,.06,12);Wo.rotateX(Math.PI/2);const fa=new ve(Wo,q);return fa.position.set(0,.01,.085),fa.visible=!1,mi.add(fa),{hipGroup:Rt,kneeGroup:wn,bootGroup:mi,cargoPocketMesh:xn,thighReflectiveMesh:Ci,calfReflectiveMesh:lr,tacticalKneeNeon:ar,tacticalHeelNeon:Is,shinobiBootThruster:fa}},Ee=Se(!0),Z=Se(!1);Ot.add(Ee.hipGroup),Ot.add(Z.hipGroup);const Fe=new Kt;Ot.add(Fe);const ke=new sn(.135,.12,.15,18);ke.scale(1.15,1,.72);const mt=new ve(ke,ae);mt.position.set(0,.89,0),Fe.add(mt);const ot=new Kt;ot.position.set(0,.95,0),Fe.add(ot);const Sn=new sn(.165,.125,.24,18);Sn.scale(1.18,1,.68);const en=new ve(Sn,J);en.position.set(0,.12,0),ot.add(en);const mn=new sn(.215,.162,.28,20);mn.scale(1.24,1,.68);const wi=new ve(mn,J);wi.position.set(0,.35,0),ot.add(wi);const Ui=new St(.042,.38,.026),Ln=new ve(Ui,ye);Ln.position.set(0,.26,.135),ot.add(Ln);const pi=new Kt,Mn=new si(.135,16,14);Mn.scale(1.15,.68,.95);const ji=new ve(Mn,J);ji.position.set(0,.5,.095),pi.add(ji);const An=new Hn(.13,.014,10,24);An.rotateX(Math.PI*.42);const gt=new ve(An,ye);gt.position.set(0,.52,.09),pi.add(gt),ot.add(pi);const oi=new Kt;oi.visible=!1;const is=new ve(new St(.42,.032,.026),Oe);is.position.set(0,.4,.145),oi.add(is);const $i=new ve(new St(.32,.028,.026),Oe);$i.position.set(0,.16,.135),oi.add($i);const _r=new ve(new St(.032,.36,.026),Oe);_r.position.set(-.11,.28,.142),oi.add(_r);const Zn=new ve(new St(.032,.36,.026),Oe);Zn.position.set(.11,.28,.142),oi.add(Zn),ot.add(oi);const Wn=new Kt;Wn.visible=!1;const rs=new St(.042,.48,.028),Wt=new ve(rs,Ce);Wt.position.set(0,.28,.148),Wt.rotation.z=.64,Wn.add(Wt);const Bt=new ve(rs,Ce);Bt.position.set(0,.28,.148),Bt.rotation.z=-.64,Wn.add(Bt);const Yi=new ve(new sn(.055,.055,.032,6),Ce);Yi.rotation.x=Math.PI/2,Yi.position.set(0,.28,.155),Wn.add(Yi);const yr=new St(.14,.065,.18),Ki=new ve(yr,Me);Ki.position.set(-.27,.48,0),Ki.rotation.z=.22;const L=new ve(new St(.15,.018,.19),Ce);L.position.set(0,.028,0),Ki.add(L),Wn.add(Ki);const X=new ve(yr,Me);X.position.set(.27,.48,0),X.rotation.z=-.22;const me=new ve(new St(.15,.018,.19),Ce);me.position.set(0,.028,0),X.add(me),Wn.add(X),ot.add(Wn);const oe=new Kt;oe.visible=!1;const le=new Hn(.13,.018,8,4),je=new ve(le,et);je.position.set(0,.3,.148),oe.add(je);const Ve=new ve(new Hn(.065,.014,8,4),rt);Ve.position.set(0,.3,.152),oe.add(Ve);const He=new ve(new St(.025,.42,.03),rt);He.position.set(-.16,.27,.138),He.rotation.z=-.12,oe.add(He);const Qe=new ve(new St(.025,.42,.03),rt);Qe.position.set(.16,.27,.138),Qe.rotation.z=.12,oe.add(Qe);const it=new ve(new Hn(.135,.016,10,24),rt);it.rotateX(Math.PI/2),it.position.set(0,.49,.01),oe.add(it),ot.add(oe);const ht=new Kt;ht.visible=!1;const Et=new ve(new St(.036,.4,.028),dt);Et.position.set(0,.27,.146),ht.add(Et);for(let qe=0;qe<4;qe++){const Rt=qe%2===0?-1:1,Yt=qe<2?.36:.21,fn=new ve(new St(.14,.022,.026),dt);fn.position.set(Rt*.08,Yt,.146),fn.rotation.z=Rt*.38,ht.add(fn)}const $e=new Kt;$e.position.set(.02,.31,.172),$e.rotation.z=-.68;const Dt=new ve(new sn(.018,.015,.66,12),Me);Dt.position.set(0,-.06,0),$e.add(Dt);const gn=new ve(new St(.012,.64,.038),dt);gn.position.set(0,-.06,0),$e.add(gn);const an=new ve(new sn(.052,.052,.016,16),Te);an.position.set(0,.27,0),$e.add(an);const Xt=new ve(new sn(.02,.02,.22,12),q);Xt.position.set(0,.39,0),$e.add(Xt);const En=new ve(new sn(.025,.025,.028,12),Te);En.position.set(0,.51,0),$e.add(En);const Ke=$e;ht.add(Ke),ot.add(ht);const un=new Kt;un.visible=!1;for(let qe=0;qe<3;qe++){const Rt=new ve(new St(.24-qe*.03,.055,.03),Te);Rt.position.set(0,.39-qe*.1,.145),un.add(Rt)}const Nt=new Kt;Nt.visible=!1;const Un=new St(.16,.14,.2),yt=new ve(Un,Me);yt.position.set(-.285,.45,0),yt.rotation.z=.28;const li=new ve(new St(.17,.024,.21),Te);li.position.set(0,.06,0),yt.add(li),Nt.add(yt);const ci=new ve(Un,Me);ci.position.set(.285,.45,0),ci.rotation.z=-.28;const Vt=new ve(new St(.17,.024,.21),Te);Vt.position.set(0,.06,0),ci.add(Vt),Nt.add(ci),ot.add(Nt);const nn=new Kt;nn.visible=!1;const h=(qe,Rt)=>{const Yt=new Kt;Yt.position.set(0,.3,Rt),Yt.rotation.z=qe;const fn=new ve(new sn(.018,.015,.68,12),Me);fn.position.set(0,-.06,0),Yt.add(fn);const ei=new ve(new St(.012,.65,.038),Te);ei.position.set(0,-.06,0),Yt.add(ei);const xn=new ve(new sn(.054,.054,.018,16),Te);xn.position.set(0,.28,0),Yt.add(xn);const Bn=new ve(new sn(.021,.021,.23,12),Te);return Bn.position.set(0,.4,0),Yt.add(Bn),Yt};nn.add(h(-.62,.172)),nn.add(h(.62,.192)),un.add(nn),ot.add(un);const O=new Kt;O.visible=!1;const he=O,we=new ve(new Nu(.085,1),Ce);we.position.set(0,.3,.165),O.add(we);const De=new ve(new Hn(.13,.014,10,28),Oe);De.position.set(0,.3,.165),O.add(De);const Ct=new ve(new Hn(.38,.014,10,36),Ce);Ct.position.set(0,.28,0),Ct.rotation.x=Math.PI*.35,O.add(Ct);const cn=new ve(new Hn(.42,.012,10,36),Oe);cn.position.set(0,.28,0),cn.rotation.y=Math.PI*.25,O.add(cn),ot.add(O);const pn=new Kt;pn.visible=!1;const bi=new ve(new Hn(.34,.02,12,36),Te);bi.position.set(0,.32,.16),pn.add(bi);const Xn=new Kt;Xn.position.set(0,.3,0);const ss=new si(.026,8,8);for(let qe=0;qe<8;qe++){const Rt=qe/8*Math.PI*2,Yt=new ve(ss,Te);Yt.position.set(Math.cos(Rt)*.42,Math.sin(Rt*2)*.18,Math.sin(Rt)*.32),Xn.add(Yt)}pn.add(Xn),ot.add(pn);const Sr=new si(.078,16,16),dn=new ve(Sr,J);dn.position.set(-.255,.45,0),ot.add(dn);const On=new ve(Sr,J);On.position.set(.255,.45,0),ot.add(On);const ui=new sn(.05,.06,.1,14),Mr=new ve(ui,J);Mr.position.set(0,.54,0),ot.add(Mr);const Ti=new Kt;Ti.position.set(0,.67,0),ot.add(Ti);const Er=new si(.118,24,24);Er.scale(.95,1.06,1.02);const as=new ve(Er,Pe);Ti.add(as);const kr=new Hn(.116,.018,12,28);kr.rotateX(Math.PI/2);const rr=new ve(kr,w);rr.position.set(0,.025,0),Ti.add(rr);const Rs=new sn(.124,.124,.045,20,1,!0,Math.PI*.55,Math.PI*.9),Cs=new ve(Rs,Ce);Cs.position.set(0,.02,0),Cs.visible=!1,Ti.add(Cs);const Br=new ve(new Hn(.14,.015,10,28),Te);Br.rotateX(Math.PI/2),Br.position.set(0,.16,0),Br.visible=!1,Ti.add(Br);const aa=Br,sr=new Kt;sr.position.set(0,.022,.118),Ti.add(sr);const Ps=new St(.18,.032,.01);Ps.translate(.09,0,0);const oa=new ve(Ps,Je);sr.add(oa);const Ai=new Kt;Ai.position.set(.175,0,0),oa.add(Ai);const Ls=new St(.18,.028,.009);Ls.translate(.09,0,0);const zr=new ve(Ls,Je);Ai.add(zr);const os=new Kt;os.position.set(.175,0,0),zr.add(os);const Vr=new St(.17,.022,.008);Vr.translate(.085,0,0);const ls=new ve(Vr,Je);os.add(ls);const la=qe=>{const Rt=new Kt;Rt.position.set(qe?-.255:.255,.44,0);const Yt=new Pa(.048,.22,10,16),fn=new ve(Yt,J);fn.position.set(qe?-.08:.08,-.11,-.02),fn.rotation.z=qe?-.56:.56,Rt.add(fn);const ei=new St(.02,.19,.028),xn=new ve(ei,Oe);xn.position.set(qe?-.095:.095,-.11,.025),xn.rotation.z=qe?-.56:.56,xn.visible=!1,Rt.add(xn);const Bn=new Kt;Bn.position.set(qe?-.16:.16,-.21,-.04),Rt.add(Bn);const Ci=new Pa(.042,.21,10,16),wn=new ve(Ci,J);wn.position.set(qe?-.07:.07,-.04,-.09),wn.rotation.x=.72,wn.rotation.z=qe?-.45:.45,Bn.add(wn);const br=new Hn(.046,.013,10,20),ar=new ve(br,ze);ar.position.set(qe?-.12:.12,-.07,-.155),Bn.add(ar);const ua=new si(.052,14,14),or=new ve(ua,Ne);return or.position.set(qe?-.14:.14,-.08,-.18),Bn.add(or),{shoulderGroup:Rt,elbowGroup:Bn,handMesh:or,wristMesh:ar,sleeveReflectiveMesh:xn}},Jn=la(!0),wr=la(!1);ot.add(Jn.shoulderGroup),ot.add(wr.shoulderGroup);const Ri=new Kt;Ri.position.set(0,.17,-.2),ot.add(Ri);const Tt=4,Rn=new sn(.018,.018,Tt,16);Rn.rotateZ(Math.PI/2);const Oi=new jt({color:14742270}),Ns=new ve(Rn,Oi);Ri.add(Ns);const Qn=new sn(.052,.052,Tt,14);Qn.rotateZ(Math.PI/2);const Gr=new jt({color:62206,transparent:!0,opacity:.42,blending:Wi,depthWrite:!1}),Oo=new ve(Qn,Gr);Ri.add(Oo);const Ul=new si(.058,14,14),ca=new jt({color:62206}),Ol=new ve(Ul,ca);Ol.position.set(-Tt*.5,0,0),Ri.add(Ol);const za=new ve(Ul,ca);za.position.set(Tt*.5,0,0),Ri.add(za);const Fl=new Hn(.14,.015,10,24),Va=new ve(Fl,ca);Va.position.set(-Tt*.5,0,0),Va.visible=!1,Ri.add(Va);const Ga=new ve(Fl,ca);Ga.position.set(Tt*.5,0,0),Ga.visible=!1,Ri.add(Ga);const Uu=new Float32Array(6),Fo=new $n;Fo.setAttribute("position",new Fr(Uu,3));const kl=new na({color:62206,linewidth:3}),ko=new Kg(Fo,kl);ko.visible=!1,s.add(ko);const Ou=new sn(.04,.04,1,10),Fu=new jt({color:62206,transparent:!0,opacity:.85,blending:Wi,depthWrite:!1}),Bo=new ve(Ou,Fu);Bo.visible=!1,s.add(Bo);const Ha=new Hn(.14,.012,10,28),Bl=new jt({color:62206,transparent:!0,opacity:.55,blending:Wi}),zl=new jt({color:62206,transparent:!0,opacity:.55,blending:Wi}),Vl=new ve(Ha,Bl),zo=new ve(Ha,zl);s.add(Vl),s.add(zo);const ku=new si(.12,24,24),Bu=new si(.24,16,16),zu=new si(.072,12,12),Vu=new jt({color:16710083}),Gu=new jt({color:16638023,transparent:!0,opacity:.52,blending:Wi,depthWrite:!1}),Gl=[];for(let qe=0;qe<4;qe++){const Rt=new Kt,Yt=new ve(ku,Vu),fn=new ve(Bu,Gu);Rt.add(Yt),Rt.add(fn),s.add(Rt);const ei=[];for(let xn=0;xn<7;xn++){const Bn=new jt({color:xn<3?16638023:16096779,transparent:!0,opacity:.68-xn*.085,blending:Wi,depthWrite:!1}),Ci=new ve(zu,Bn),wn=1-xn*.12;Ci.scale.set(wn,wn,wn),s.add(Ci),ei.push(Ci)}Gl.push({group:Rt,core:Yt,halo:fn,trails:ei})}const Vo={scene:s,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:m,goldOrbLight:p,acrobatKeyLight:Qt,acrobatBackLight:Ft,backlitBackdrop:M,cableTex:C,arrivalGroup:D,arrivalToriiGroup:Y,beaconRingMesh:te,landmarkGroup:K,landmarkAnimRefs:{},activeLandmarkKey:"",skyscrapers:se,spotlightBeams:de,carMeshes:Ye,weatherPoints:At,weatherGeo:bt,weatherMat:_t,weatherCount:ft,acrobatGroup:Ot,torsoMat:kt,limbsMat:$,neonStripMat:tn,shoesMat:Lt,glovesMat:B,headbandMat:w,jacketMat:J,pantsMat:ae,bootMat:ge,headMat:Pe,soleMat:be,gloveMat:Ne,wristBandMat:ze,ribbonMat:Je,dorsalStripMat:ye,singleKatanaMesh:Ke,dualGoldKatanasGroup:nn,samuraiShouldersGroup:Nt,quantumHaloMesh:he,immortalCrownMesh:aa,urbanoAccGroup:pi,nightRunnerAccGroup:oi,infiltradoAccGroup:Wn,ilusionistaAccGroup:oe,shinobiAccGroup:ht,roninGoldAccGroup:un,quantumSpecterAccGroup:O,quantumCoreMesh:we,quantumHoloRingA:Ct,quantumHoloRingB:cn,goldenLegendAccGroup:pn,solarAuraRing:bi,solarParticlesGroup:Xn,tacticalVisorMesh:Cs,goldenCrownHalo:Br,poleCoreMat:Oi,poleLaserGlowMat:Gr,poleTipMat:ca,poleGlowMesh:Oo,leftGyroRing:Va,rightGyroRing:Ga,upperBodyGroup:Fe,torsoSpineGroup:ot,headGroup:Ti,leftLeg:Ee,rightLeg:Z,leftArm:Jn,rightArm:wr,poleGroup:Ri,ribbonPivot:sr,ribbonJoint2:Ai,ribbonJoint3:os,grappleLaserLine:ko,grappleLineGeo:Fo,grappleBeamMesh:Bo,leftReceiverRing:Vl,rightReceiverRing:zo,leftReceiverMat:Bl,rightReceiverMat:zl,orbMeshes:Gl,worldLeftHand:new ie,worldRightHand:new ie,grappleAnchor:new ie,lastTimeSec:0,smoothKneeFlex:0,smoothHipX:0,edgeSaveBlend:0,smoothTorsoComp:0,smoothNeckComp:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38};return dv=Vo,gr("urbano",Vo,!1),Vo}function gr(r,e=null,t=!1){var o,l,u,f,m,p,y,S,x,M,E,C,_,v,A,F,R,U,I,k,b,D,z,G,W,ne,H,re,fe,ee,te,Y,K;const s=Ii(r);try{const T=e||dv;if(!T||!T.acrobatGroup)return s;const ce=ea(r),_e=s.styleType||ce,We=s.metalness??.45,Xe=s.roughness??.35,Ge=t?3.2:s.emissiveIntensity??2.2,se=16638023;T.torsoMat&&((o=T.torsoMat.color)==null||o.set(s.torsoColor||s.jacketHex||1976635),(l=T.torsoMat.emissive)==null||l.set(t?se:s.torsoEmissive||s.jacketEmissiveHex||727081),T.torsoMat.emissiveIntensity=t?1.15:s.torsoEmissiveIntensity??.6,T.torsoMat.metalness=We,T.torsoMat.roughness=Xe,T.torsoMat.needsUpdate=!0),T.limbsMat&&((u=T.limbsMat.color)==null||u.set(s.limbsColor||s.pantsHex||988970),(f=T.limbsMat.emissive)==null||f.set(t?se:s.limbsEmissive||s.pantsHex||462105),T.limbsMat.emissiveIntensity=t?.95:s.limbsEmissiveIntensity??.45,T.limbsMat.metalness=We,T.limbsMat.roughness=Xe,T.limbsMat.needsUpdate=!0),T.neonStripMat&&((m=T.neonStripMat.color)==null||m.set(t?se:s.neonStripColor||s.dorsalHex||3718648),(p=T.neonStripMat.emissive)==null||p.set(t?se:s.neonStripColor||s.dorsalHex||3718648),T.neonStripMat.emissiveIntensity=Ge,T.neonStripMat.needsUpdate=!0),T.shoesMat&&((y=T.shoesMat.color)==null||y.set(s.shoesColor||s.bootHex||3359061),(S=T.shoesMat.emissive)==null||S.set(t?se:s.shoesColor||s.soleHex||3718648),T.shoesMat.emissiveIntensity=t?1.4:_e==="urbano"?.35:1.15,T.shoesMat.metalness=We,T.shoesMat.roughness=Xe,T.shoesMat.needsUpdate=!0),T.glovesMat&&((x=T.glovesMat.color)==null||x.set(s.glovesColor||s.gloveHex||3359061),(M=T.glovesMat.emissive)==null||M.set(t?se:s.glovesColor||s.wristHex||3718648),T.glovesMat.emissiveIntensity=_e==="ilusionista"||_e==="quantum_specter"||_e==="immortal_legend"?1.75:.65,T.glovesMat.metalness=We,T.glovesMat.roughness=Xe,T.glovesMat.needsUpdate=!0),T.headbandMat&&((E=T.headbandMat.color)==null||E.set(t?se:s.headbandColor||s.headbandHex||3718648),(C=T.headbandMat.emissive)==null||C.set(t?se:s.headbandColor||s.headbandHex||3718648),T.headbandMat.emissiveIntensity=Ge*.9,T.headbandMat.needsUpdate=!0),T.soleMat&&((_=T.soleMat.color)==null||_.set(s.soleColor||s.soleHex||3718648),(v=T.soleMat.emissive)==null||v.set(t?se:s.soleColor||s.soleHex||3718648),T.soleMat.emissiveIntensity=Ge*.85,T.soleMat.needsUpdate=!0),T.wristBandMat&&((A=T.wristBandMat.color)==null||A.set(s.wristColor||s.wristHex||3718648),(F=T.wristBandMat.emissive)==null||F.set(t?se:s.wristColor||s.wristHex||3718648),T.wristBandMat.emissiveIntensity=Ge*.9,T.wristBandMat.needsUpdate=!0),T.ribbonMat&&((R=T.ribbonMat.color)==null||R.set(t?se:s.ribbonColor||s.ribbonHex||3718648),(U=T.ribbonMat.emissive)==null||U.set(t?se:s.ribbonColor||s.ribbonHex||3718648),T.ribbonMat.emissiveIntensity=Ge*.9,T.ribbonMat.needsUpdate=!0),T.acrobatBackLight&&((I=T.acrobatBackLight.color)==null||I.set(t?se:s.neonStripColor||s.rimHex||3718648));const de=_e==="shinobi"||_e==="immortal_legend"?1.48:_e==="ilusionista"||_e==="ronin_gold"?1.32:1;T.ribbonPivot&&T.ribbonPivot.scale.set(de,1,1);const Re=_e==="urbano",Ye=_e==="night_runner",Ue=_e==="infiltrado",ut=_e==="ilusionista",zt=_e==="shinobi",ft=_e==="ronin_gold",pt=_e==="quantum_specter",bt=_e==="immortal_legend"||_e==="leyenda_dorada";T.urbanoAccGroup&&(T.urbanoAccGroup.visible=Re),(k=T.leftLeg)!=null&&k.cargoPocketMesh&&(T.leftLeg.cargoPocketMesh.visible=Re),(b=T.rightLeg)!=null&&b.cargoPocketMesh&&(T.rightLeg.cargoPocketMesh.visible=Re),T.nightRunnerAccGroup&&(T.nightRunnerAccGroup.visible=Ye),(D=T.leftArm)!=null&&D.sleeveReflectiveMesh&&(T.leftArm.sleeveReflectiveMesh.visible=Ye),(z=T.rightArm)!=null&&z.sleeveReflectiveMesh&&(T.rightArm.sleeveReflectiveMesh.visible=Ye),(G=T.leftLeg)!=null&&G.thighReflectiveMesh&&(T.leftLeg.thighReflectiveMesh.visible=Ye),(W=T.rightLeg)!=null&&W.thighReflectiveMesh&&(T.rightLeg.thighReflectiveMesh.visible=Ye),(ne=T.leftLeg)!=null&&ne.calfReflectiveMesh&&(T.leftLeg.calfReflectiveMesh.visible=Ye),(H=T.rightLeg)!=null&&H.calfReflectiveMesh&&(T.rightLeg.calfReflectiveMesh.visible=Ye),T.infiltradoAccGroup&&(T.infiltradoAccGroup.visible=Ue),T.tacticalVisorMesh&&(T.tacticalVisorMesh.visible=Ue||pt),(re=T.leftLeg)!=null&&re.tacticalKneeNeon&&(T.leftLeg.tacticalKneeNeon.visible=Ue||pt),(fe=T.rightLeg)!=null&&fe.tacticalKneeNeon&&(T.rightLeg.tacticalKneeNeon.visible=Ue||pt),(ee=T.leftLeg)!=null&&ee.tacticalHeelNeon&&(T.leftLeg.tacticalHeelNeon.visible=Ue||pt),(te=T.rightLeg)!=null&&te.tacticalHeelNeon&&(T.rightLeg.tacticalHeelNeon.visible=Ue||pt),T.ilusionistaAccGroup&&(T.ilusionistaAccGroup.visible=ut),T.shinobiAccGroup&&(T.shinobiAccGroup.visible=zt),T.singleKatanaMesh&&(T.singleKatanaMesh.visible=zt),(Y=T.leftLeg)!=null&&Y.shinobiBootThruster&&(T.leftLeg.shinobiBootThruster.visible=zt),(K=T.rightLeg)!=null&&K.shinobiBootThruster&&(T.rightLeg.shinobiBootThruster.visible=zt),T.roninGoldAccGroup&&(T.roninGoldAccGroup.visible=ft),T.dualGoldKatanasGroup&&(T.dualGoldKatanasGroup.visible=ft),T.samuraiShouldersGroup&&(T.samuraiShouldersGroup.visible=ft||bt),T.quantumSpecterAccGroup&&(T.quantumSpecterAccGroup.visible=pt),T.quantumHaloMesh&&(T.quantumHaloMesh.visible=pt),T.goldenLegendAccGroup&&(T.goldenLegendAccGroup.visible=bt),T.immortalCrownMesh&&(T.immortalCrownMesh.visible=bt),T.goldenCrownHalo&&(T.goldenCrownHalo.visible=bt)}catch(T){console.warn("applySkinToAcrobat safe catch:",T)}return s}function sw(r,e,t,s="menu",o="urbano",l="home"){var rt,dt,q,Te,Me;if(!r||!e)return;const u=Math.min(.05,Math.max(.001,t-(r.lastTimeSec||t-.016)));r.lastTimeSec=t;const f=-(e.distance||0),m=e.angle||0,p=Math.abs(m),y=Math.min(1,p/ra),S=((rt=e.cfg)==null?void 0:rt.walkSpeed)||1,x=!!e.frenzyActive,M=gr(o||((dt=e.skinObj)==null?void 0:dt.id),r,x)||wx(o||((q=e.skinObj)==null?void 0:q.id)),E=M.styleType,C=x?16638023:M.rimHex,_=E==="quantum_specter",v=E==="immortal_legend"||E==="leyenda_dorada";_&&(r.quantumCoreMesh&&(r.quantumCoreMesh.rotation.y=t*2.8,r.quantumCoreMesh.rotation.z=t*1.9),r.quantumHoloRingA&&(r.quantumHoloRingA.rotation.z=t*1.6,r.quantumHoloRingA.rotation.x=Math.PI*.35+Math.sin(t*2.1)*.22),r.quantumHoloRingB&&(r.quantumHoloRingB.rotation.x=-t*1.4,r.quantumHoloRingB.rotation.y=Math.PI*.25+Math.cos(t*1.8)*.25)),v&&(r.solarAuraRing&&(r.solarAuraRing.rotation.z=t*2.1),r.solarParticlesGroup&&(r.solarParticlesGroup.rotation.y=t*2.4,r.solarParticlesGroup.rotation.z=Math.sin(t*1.5)*.25));const A=((Te=e.cfg)==null?void 0:Te.city)||Ms[0],F=e.targetDistance||68,R=`${A.id||A.index}_${A.monument}_${F}`;if(r.activeLandmarkKey!==R){r.activeLandmarkKey=R;const Se=A.weatherArchetype||"urban";Se==="cyber_rain"?(r.scene.background.setHex(395550),r.scene.fog.color.setHex(923714),r.weatherMat.color.setHex(62206),r.weatherMat.size=.16):Se==="golden_embers"?(r.scene.background.setHex(1181976),r.scene.fog.color.setHex(2627372),r.weatherMat.color.setHex(16638023),r.weatherMat.size=.18):Se==="blizzard"?(r.scene.background.setHex(398118),r.scene.fog.color.setHex(1059918),r.weatherMat.color.setHex(14742270),r.weatherMat.size=.2):(r.scene.background.setHex(332068),r.scene.fog.color.setHex(664121),r.weatherMat.color.setHex(3718648),r.weatherMat.size=.14);const Ee=A.accentColor?parseInt(A.accentColor.replace("#",""),16):62206,Z=A.winColor?parseInt(A.winColor.replace("#",""),16):16638023;r.landmarkAnimRefs=ew(r.landmarkGroup,r.arrivalToriiGroup,A.monument||"obelisco",Ee,Z)}if(r.landmarkGroup.position.set(0,0,-F-35),r.landmarkAnimRefs){if(r.landmarkAnimRefs.londonEyeWheel&&(r.landmarkAnimRefs.londonEyeWheel.rotation.z+=u*.22),r.landmarkAnimRefs.eiffelBeacon&&(r.landmarkAnimRefs.eiffelBeacon.rotation.y+=u*1.4),r.landmarkAnimRefs.libertyTorchHalo){const Se=1+Math.sin(t*6)*.18;r.landmarkAnimRefs.libertyTorchHalo.scale.set(Se,Se,Se)}r.landmarkAnimRefs.auroraMesh&&(r.landmarkAnimRefs.auroraMesh.position.x=Math.sin(t*.9)*4.5)}const U=r.weatherGeo.attributes.position,I=U.array,k=A.weatherArchetype||"urban",b=(e.windForce||0)*(k==="blizzard"?14:9.5),D=k==="cyber_rain"?-24:k==="blizzard"?-6.5:k==="golden_embers"?2.2:-1.8;for(let Se=0;Se<r.weatherCount;Se++){const Ee=Se*3;I[Ee+0]+=b*u,I[Ee+1]+=D*u,I[Ee+0]>15?I[Ee+0]-=30:I[Ee+0]<-15&&(I[Ee+0]+=30),D<0&&I[Ee+1]<-8?I[Ee+1]=14:D>0&&I[Ee+1]>14&&(I[Ee+1]=-8),I[Ee+2]>f+8?I[Ee+2]-=56:I[Ee+2]<f-50&&(I[Ee+2]+=56)}U.needsUpdate=!0;const z=e.poleObj||{},G=z.poleScaleX||1;r.poleGroup.scale.set(G,1,1),r.poleCoreMat.color.setHex(z.coreHex||14742270),r.poleLaserGlowMat.color.setHex(x?16638023:z.glowHex||62206),r.poleTipMat.color.setHex(z.tipHex||62206),r.poleLaserGlowMat.opacity=x?.85:.48;const W=x?1.45:1;r.poleGlowMesh.scale.set(1,W,W);const ne=!!z.hasGyroRings;r.leftGyroRing.visible=ne,r.rightGyroRing.visible=ne,ne&&(r.leftGyroRing.rotation.x=t*7.5,r.leftGyroRing.rotation.y=t*5.2,r.rightGyroRing.rotation.x=-t*7.5,r.rightGyroRing.rotation.y=-t*5.2);const H=Math.min(1,u*11),re=Math.min(1,u*7.5),fe=e.fallSequence||{active:!1},ee=y*.56+(fe.active?.22:0);r.smoothKneeFlex+=(ee-r.smoothKneeFlex)*H;const te=-Math.sin(m)*.25;r.smoothHipX+=(te-r.smoothHipX)*H;const K=p>ra*.75||fe.active?1:0;r.edgeSaveBlend+=(K-r.edgeSaveBlend)*H;const T=-m*.38-Math.sin(m)*.16*(1+r.edgeSaveBlend*.45),ce=-m*.32;r.smoothTorsoComp+=(T-r.smoothTorsoComp)*re,r.smoothNeckComp+=(ce-r.smoothNeckComp)*re;const _e=s==="menu"&&l==="skins";fe.active?(r.acrobatGroup.position.set(Math.sin(m)*.85,fe.fallY||0,f),r.acrobatGroup.rotation.z=-(fe.fallRotZ||m),r.acrobatGroup.rotation.x=fe.fallRotX||0,r.acrobatGroup.rotation.y=0):(r.acrobatGroup.position.set(0,0,f),r.acrobatGroup.rotation.z=-m*.72,r.acrobatGroup.rotation.x=0,r.acrobatGroup.rotation.y=_e?Math.sin(t*1.15)*.65:0);const We=s==="playing"&&!fe.active,Xe=e.walkCycle||0,Ge=Math.sin(Xe),se=Math.cos(Xe),de=We?Math.min(.56,.34*Math.pow(S,.45)):.12,Re=We?Math.abs(Ge)*.036*Math.min(1.5,S):Math.sin(t*2.6)*.014,Ye=r.smoothKneeFlex*.22;r.upperBodyGroup.position.x=r.smoothHipX,r.upperBodyGroup.position.y=Re-Ye;const Ue=Math.sin(t*22)*r.edgeSaveBlend,ut=r.smoothKneeFlex*.95;r.leftLeg.hipGroup.position.x=-.08+r.smoothHipX*.65,r.rightLeg.hipGroup.position.x=.08+r.smoothHipX*.65,r.leftLeg.hipGroup.position.y=.88-Ye,r.rightLeg.hipGroup.position.y=.88-Ye;const zt=-r.smoothHipX*.75,ft=m>0?r.edgeSaveBlend*(.28+Math.abs(Ue)*.22):0,pt=m<0?-r.edgeSaveBlend*(.28+Math.abs(Ue)*.22):0;r.leftLeg.hipGroup.rotation.z=zt-ft,r.rightLeg.hipGroup.rotation.z=zt-pt,r.leftLeg.hipGroup.rotation.x=Ge*de+ut*.55+Ue*.25,r.leftLeg.kneeGroup.rotation.x=-Math.max(0,se)*(de*1.22)-ut*1.1,r.leftLeg.bootGroup.rotation.x=ut*.52,r.rightLeg.hipGroup.rotation.x=-Ge*de+ut*.55-Ue*.25,r.rightLeg.kneeGroup.rotation.x=-Math.max(0,-se)*(de*1.22)-ut*1.1,r.rightLeg.bootGroup.rotation.x=ut*.52;const bt=We?Math.min(.24,(S-1)*.14):.04;r.torsoSpineGroup.rotation.z=r.smoothTorsoComp+Ue*.08,r.torsoSpineGroup.rotation.x=.06+bt+r.smoothKneeFlex*.18+r.edgeSaveBlend*.28,r.headGroup.rotation.z=r.smoothNeckComp,r.headGroup.rotation.x=-bt*.7-r.smoothKneeFlex*.14-r.edgeSaveBlend*.2;const _t=fe.active&&fe.mode==="hook_rescue"||e.hookActive,At=Ge*.12*S;r.leftArm.shoulderGroup.rotation.x=-At+Ue*.55,r.rightArm.shoulderGroup.rotation.x=_t?-1.35:At-Ue*.55,r.leftArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4-r.edgeSaveBlend*.22,r.rightArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4+r.edgeSaveBlend*.22,r.leftArm.elbowGroup.rotation.x=r.edgeSaveBlend*.25,r.rightArm.elbowGroup.rotation.x=(_t?1.35:0)+r.edgeSaveBlend*.25,r.poleGroup.rotation.z=-m*.42+Ue*.14;const Ot=e.windForce||0,Qt=10.5*Math.min(1.6,S);r.ribbonPivot.rotation.y=-Math.PI*.5+Ot*.78+Math.sin(t*Qt)*.22,r.ribbonPivot.rotation.z=Math.cos(t*(Qt*1.15))*.16,r.ribbonJoint2.rotation.y=Math.sin(t*(Qt*1.35)-.8)*.28+Ot*.22,r.ribbonJoint3.rotation.y=Math.sin(t*(Qt*1.6)-1.6)*.34+Ot*.25,r.backlitBackdrop.position.z=f-210,r.arrivalGroup.position.set(0,0,-F-3.5);const Ft=1+Math.sin(t*5)*.08;r.beaconRingMesh.scale.set(Ft,Ft,1);for(let Se=0;Se<r.spotlightBeams.length;Se++){const Ee=r.spotlightBeams[Se];Ee.mesh.rotation.z=Ee.baseAngle+Math.sin(t*Ee.speed+Ee.phaseOffset)*.14,Ee.mesh.position.z>f+15?Ee.mesh.position.z-=240:Ee.mesh.position.z<f-235&&(Ee.mesh.position.z+=240)}for(let Se=0;Se<r.skyscrapers.length;Se++){const Ee=r.skyscrapers[Se];Ee.position.z>f+18?Ee.position.z-=286:Ee.position.z<f-268&&(Ee.position.z+=286)}for(let Se=0;Se<r.carMeshes.length;Se++){const Ee=r.carMeshes[Se];Ee.mesh.position.z+=Ee.speed*u,Ee.mesh.position.z>f+25?Ee.mesh.position.z=f-230:Ee.mesh.position.z<f-235&&(Ee.mesh.position.z=f+20)}r.acrobatGroup.updateMatrixWorld(!0),r.leftArm.handMesh.getWorldPosition(r.worldLeftHand),r.rightArm.handMesh.getWorldPosition(r.worldRightHand);const kt=r.worldLeftHand,$=r.worldRightHand;if(_t){r.grappleLaserLine.visible=!0,r.grappleBeamMesh.visible=!0,r.grappleAnchor.set(0,fe.ropeTopY||12,f-.5);const Se=r.grappleLineGeo.attributes.position.array;Se[0]=$.x,Se[1]=$.y,Se[2]=$.z,Se[3]=r.grappleAnchor.x,Se[4]=r.grappleAnchor.y,Se[5]=r.grappleAnchor.z,r.grappleLineGeo.attributes.position.needsUpdate=!0;const Ee=$.distanceTo(r.grappleAnchor);r.grappleBeamMesh.position.lerpVectors($,r.grappleAnchor,.5),r.grappleBeamMesh.scale.set(1,Math.max(.1,Ee),1),r.grappleBeamMesh.lookAt(r.grappleAnchor),r.grappleBeamMesh.rotateX(Math.PI/2)}else r.grappleLaserLine.visible=!1,r.grappleBeamMesh.visible=!1;const tn=e.balls||[];let Lt=!1,B=!1;for(let Se=0;Se<tn.length;Se++){const Ee=tn[Se];Ee.waitingCatch&&(Ee.targetHand==="left"&&(Lt=!0),Ee.targetHand==="right"&&(B=!0))}const w=1+(z.catchRadiusBonus||0)+(((Me=e.skinObj)==null?void 0:Me.catchWindowBonus)||0);r.leftReceiverRing.position.copy(kt),r.rightReceiverRing.position.copy($),r.leftReceiverMat.color.setHex(Lt?16638023:M.rimHex),r.rightReceiverMat.color.setHex(B?16638023:M.rimHex);const J=(Lt?1.35:.78)*w,ae=(B?1.35:.78)*w;r.leftReceiverRing.scale.set(J,J,J),r.rightReceiverRing.scale.set(ae,ae,ae);for(let Se=0;Se<4;Se++){const Ee=tn[Se],Z=r.orbMeshes[Se];if(!Ee||fe.active){Z.group.visible=!1;for(let Ln=0;Ln<Z.trails.length;Ln++)Z.trails[Ln].visible=!1;continue}Z.group.visible=!0;const Fe=Ee.targetHand==="right"?kt:$,ke=Ee.targetHand==="right"?$:kt,mt=Math.max(0,Math.min(1.05,Ee.progress||0)),ot=1.48+Se%2*.22,Sn=Fe.x+(ke.x-Fe.x)*mt,en=Fe.y+(ke.y-Fe.y)*mt+4*ot*mt*(1-mt),mn=Fe.z+(ke.z-Fe.z)*mt-.12*Math.sin(mt*Math.PI);Z.group.position.set(Sn,en,mn);const wi=Ee.waitingCatch?1.28:x?1.15:1;Z.group.scale.set(wi,wi,wi);const Ui=x||M.goldTrail?.028:.036;for(let Ln=0;Ln<Z.trails.length;Ln++){const pi=Z.trails[Ln],Mn=mt-(Ln+1)*Ui;if(Mn<=.01){pi.visible=!1;continue}pi.visible=!0;const ji=Fe.x+(ke.x-Fe.x)*Mn,An=Fe.y+(ke.y-Fe.y)*Mn+4*ot*Mn*(1-Mn),gt=Fe.z+(ke.z-Fe.z)*Mn-.12*Math.sin(Mn*Math.PI);pi.position.set(ji,An,gt)}}r.cyanPoleLight.position.set(0,1.35,f),r.cyanPoleLight.color.setHex(C),r.cyanPoleLight.intensity=x?6.8:4.2,r.goldOrbLight.position.set(0,2.45,f-.25);const ge=Math.min(1,(e.combo||0)/14),Pe=Math.min(1,Math.max(0,(p-ra*.28)/(ra*.62))),Ne=fe.active?1:Pe,be=(_e?46:58+ge*6)*(1-Ne)+48*Ne,Je=(_e?3.25:6.2+ge*.55)*(1-Ne)+4.95*Ne,Ce=(_e?2.15:3.38+ge*.16)*(1-Ne)+2.95*Ne,et=Math.min(1,u*5.5);r.dynamicFov+=(be-r.dynamicFov)*et,r.dynamicCamDist+=(Je-r.dynamicCamDist)*et,r.dynamicCamY+=(Ce-r.dynamicCamY)*et,Math.abs(r.camera.fov-r.dynamicFov)>.02&&(r.camera.fov=r.dynamicFov,r.camera.updateProjectionMatrix()),r.camera.position.set(Math.sin(m)*.32,r.dynamicCamY,f+r.dynamicCamDist),fe.active?r.camera.lookAt(r.acrobatGroup.position):_e?r.camera.lookAt(0,1.05,f):r.camera.lookAt(r.smoothHipX*.35,1.65-r.smoothKneeFlex*.2,f-15),r.renderer.render(r.scene,r.camera)}const yn=r=>Array.isArray(r)?r:Object.values(r||{}),qt=(r,e="es",t="")=>{if(r==null)return t;if(typeof r=="string"||typeof r=="number")return String(r);if(typeof r=="object"){const s=r[e]??r.es??r.en??r.label??r.name??t;return typeof s=="object"?t:String(s)}return String(r)};function Yf(r,e,t){return r+(e-r)*Math.max(0,Math.min(1,t))}function Qs(r,e=[]){return Array.isArray(r)?r.filter(t=>typeof t=="string"):e}function Yr(r,e=0,t=0,s=999999999){const o=Number(r);return Number.isFinite(o)?Math.max(t,Math.min(s,Math.floor(o))):e}function aw(r){return!r||typeof r!="object"||Array.isArray(r)?{pole:0,boots:0,gloves:0}:{pole:Yr(r.pole,0,0,10),boots:Yr(r.boots,0,0,10),gloves:Yr(r.gloves,0,0,10)}}function ow(){try{const r=localStorage.getItem(Ao);if(!r)return null;const e=JSON.parse(r);return!e||typeof e!="object"||Array.isArray(e)?null:e}catch(r){return console.warn("Corrupted STORAGE_KEY reset:",r),null}}function Eg(){try{const r=localStorage.getItem("nma_profile_completed")==="true",e=String(localStorage.getItem("nma_player_name")||"").trim(),t=String(localStorage.getItem("nma_player_country")||"").trim();return!r||!e||e==="TÚ (Equilibrista)"||e.length<3||!t}catch{return!0}}function lw(){var yt,li,ci,Vt,nn;const r=nt.useRef(ow()).current,e=nt.useRef((()=>{try{return localStorage.getItem("nma_economy_v2_migrated")==="true"}catch{return!1}})()).current,[t,s]=nt.useState((r==null?void 0:r.lang)==="en"?"en":"es"),[o,l]=nt.useState(()=>Yr(r==null?void 0:r.level,1,1,9999)),[u,f]=nt.useState(()=>{const h=Yr(r==null?void 0:r.level,1,1,9999),O=Math.min(19,Math.floor((h-1)/5));return Yr(r==null?void 0:r.maxUnlockedCity,O,0,19)}),[m,p]=nt.useState(()=>Yr(r==null?void 0:r.coins,1200,0)),[y,S]=nt.useState(()=>Yr(r==null?void 0:r.gems,60,0)),[x,M]=nt.useState(()=>Yr(r==null?void 0:r.bestScore,0,0)),[E,C]=nt.useState(()=>Yr(r==null?void 0:r.leaguePoints,320,0)),[_,v]=nt.useState(()=>{try{const O=String(localStorage.getItem("nma_player_name")||"").trim();if(O&&O!=="TÚ (Equilibrista)")return O}catch{}const h=typeof(r==null?void 0:r.playerName)=="string"?r.playerName.trim():"";return h&&h!=="TÚ (Equilibrista)"?h:""}),[A,F]=nt.useState(()=>{try{const h=String(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return typeof(r==null?void 0:r.playerCountry)=="string"&&r.playerCountry?r.playerCountry:"AR"}),[R,U]=nt.useState(()=>Eg()),[I,k]=nt.useState(()=>{try{const h=String(localStorage.getItem("nma_player_name")||"").trim();if(h&&h!=="TÚ (Equilibrista)")return h}catch{}return""}),[b,D]=nt.useState(()=>{try{const h=String(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return"AR"}),[z,G]=nt.useState(!1),[W,ne]=nt.useState(!!(r!=null&&r.vipPassActive)),[H,re]=nt.useState(()=>{let h=[];try{const we=localStorage.getItem("nma_owned_skins");if(we){const De=JSON.parse(we);Array.isArray(De)&&(h=De)}}catch{h=[]}const he=[...Qs(r==null?void 0:r.ownedSkins),...Qs(r==null?void 0:r.unlockedSkins),...Qs(h),"urbano"].map(we=>{var De;return((De=Ii(we))==null?void 0:De.id)||"urbano"});return he.includes("urbano")||he.unshift("urbano"),Array.from(new Set(he))}),fe=re,[ee,te]=nt.useState(()=>{var h,O;try{const he=localStorage.getItem("nma_equipped_skin");if(he)return((h=Ii(he))==null?void 0:h.id)||"urbano"}catch{}return((O=Ii((r==null?void 0:r.equippedSkin)||"urbano"))==null?void 0:O.id)||"urbano"}),[Y,K]=nt.useState(null),[T,ce]=nt.useState(null),_e=nt.useRef(ee);nt.useEffect(()=>{var O;const h=((O=Ii(ee))==null?void 0:O.id)||"urbano";_e.current=h,gr(h);try{localStorage.setItem("nma_equipped_skin",h)}catch{}},[ee]),nt.useEffect(()=>{var O;const h=((O=Ii(Y||ee))==null?void 0:O.id)||"urbano";_e.current=h,gr(h)},[Y,ee]);const[We,Xe]=nt.useState(()=>{const h=Qs(r==null?void 0:r.unlockedPoles,["pole_basic"]);return h.length>0?h:["pole_basic"]}),[Ge,se]=nt.useState(()=>typeof(r==null?void 0:r.equippedPole)=="string"?r.equippedPole:"pole_basic"),[de,Re]=nt.useState(()=>Qs(r==null?void 0:r.ownedMultipliers,[])),[Ye,Ue]=nt.useState(()=>Qs(r==null?void 0:r.unlockedVipCities,[])),[ut,zt]=nt.useState(()=>typeof(r==null?void 0:r.activeVipCityId)=="string"?r.activeVipCityId:null),[ft,pt]=nt.useState(()=>{const h=Qs(r==null?void 0:r.unlockedProps,["balls"]);return h.length>0?h:["balls"]}),[bt,_t]=nt.useState(()=>typeof(r==null?void 0:r.equippedProp)=="string"?r.equippedProp:"balls"),[At,Ot]=nt.useState(()=>e?aw((r==null?void 0:r.gearLevels)||(r==null?void 0:r.upgrades)):{pole:0,boots:0,gloves:0}),[Qt,Ft]=nt.useState(()=>Qs(r==null?void 0:r.claimedTiers,[])),[kt,$]=nt.useState((r==null?void 0:r.soundEnabled)??!0),[tn,Lt]=nt.useState("upgrades"),[B,w]=nt.useState("home"),J=nt.useRef(B);nt.useEffect(()=>{J.current=B,B!=="skins"&&Y&&(K(null),_e.current=ee)},[B,Y,ee]);const[ae,ge]=nt.useState("menu"),[Pe,Ne]=nt.useState(null),[ye,be]=nt.useState(2),[ze,Je]=nt.useState(null),[Oe,Ce]=nt.useState(!1),[et,rt]=nt.useState([]),[dt,q]=nt.useState("live"),[Te,Me]=nt.useState({progress:0,metersRemaining:68,totalMeters:68,score:0,combo:0,frenzyActive:!1,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:!0,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]}),[Se,Ee]=nt.useState({coinsEarned:0,scoreEarned:0,lpEarned:0,gemsEarned:0,doubled:!1,revivedOnce:!1}),Z=x0[t]||x0.es,Fe=yn(hf).find(h=>h.id===ut)||null,ke=pf(o,Fe),mt=Ii(ee);Ii(ee);const ot=Ii(Y||ee),Sn=Ii(Y||ee),en=yn(Oc).find(h=>h.id===Ge)||yn(Oc)[0],mn=yn(bl).find(h=>h.id===bt)||yn(bl)[0],wi=yn(de).reduce((h,O)=>{const he=yn(Fc).find(we=>we.id===O);return he?Math.max(h,he.coinMult??1):h},1),Ui=yn(de).reduce((h,O)=>{const he=yn(Fc).find(we=>we.id===O);return he?Math.max(h,he.lpMult??1):h},1),Ln=(Fe==null?void 0:Fe.rewardMult)??1,pi=(mt==null?void 0:mt.mult)??(mt==null?void 0:mt.bonusMult)??1,Mn=Number((((mn==null?void 0:mn.mult)??1)*pi*((en==null?void 0:en.scoreMult)??1)*Ui*Ln).toFixed(2)),ji=Number((((mn==null?void 0:mn.mult)??1)*pi*((en==null?void 0:en.coinMult)??1)*wi*Ln).toFixed(2)),An=Number((pi*((en==null?void 0:en.scoreMult)??1)*Ui*Ln).toFixed(2));nt.useEffect(()=>{It.enabled=kt},[kt]),nt.useEffect(()=>{const h=Math.min(19,Math.floor((o-1)/5));h>u&&f(h)},[o,u]),nt.useEffect(()=>{try{localStorage.setItem("nma_economy_v2_migrated","true"),localStorage.setItem("nma_owned_skins",JSON.stringify(H)),localStorage.setItem("nma_equipped_skin",ee),localStorage.setItem(Ao,JSON.stringify({lang:t,level:o,maxUnlockedCity:Math.max(u,Math.min(19,Math.floor((o-1)/5))),coins:m,gems:y,bestScore:x,leaguePoints:E,playerName:_||"Equilibrista",playerCountry:A,vipPassActive:W,ownedSkins:H,unlockedSkins:H,equippedSkin:ee,unlockedPoles:We,equippedPole:Ge,ownedMultipliers:de,unlockedVipCities:Ye,activeVipCityId:ut,unlockedProps:ft,equippedProp:bt,gearLevels:At,claimedTiers:Qt,soundEnabled:kt}))}catch{}},[t,o,u,m,y,x,E,_,A,W,H,ee,We,Ge,de,Ye,ut,ft,bt,At,Qt,kt]);const gt=nt.useCallback(h=>{Je(h),setTimeout(()=>{Je(O=>O===h?null:O)},2600)},[]),oi=nt.useCallback(async()=>{const h=(_||"Equilibrista").trim(),O=await y0({name:h,country:A,score:E,level:o});rt(O)},[_,A,E,o]);nt.useEffect(()=>{oi();const h=setInterval(oi,12e3);return()=>clearInterval(h)},[oi]);const is=nt.useCallback(async h=>{h&&h.preventDefault();const O=(I||"").trim().slice(0,15);if(O.length<3||O==="TÚ (Equilibrista)"){G(!0),It.playMissAlert();return}const he=String(b||"AR").toUpperCase().slice(0,2)||"AR";G(!1),v(O),F(he);try{localStorage.setItem("nma_player_name",O),localStorage.setItem("nma_player_country",he),localStorage.setItem("nma_profile_completed","true")}catch{}U(!1),It.init(),It.playVictory(),gt(t==="es"?`✅ Perfil activo: ${Ro(he)} ${O}`:`✅ Profile active: ${Ro(he)} ${O}`),q("syncing"),await pl(O,he,E,o);const we=await y0({name:O,country:he,score:E,level:o});rt(we),q("live")},[I,b,E,o,t,gt]),$i=nt.useCallback(()=>{k(_||""),D(A||"AR"),G(!1),U(!0)},[_,A]),_r=nt.useRef(null),Zn=nt.useRef(null),Wn=nt.useRef(null),rs=nt.useRef(1),Wt=nt.useRef({running:!1,angle:0,angularVel:0,distance:0,targetDistance:68,score:0,combo:0,maxCombo:0,frenzyActive:!1,windForce:0,windTarget:0,windTimer:0,walkCycle:0,lastStepPhase:0,controlInput:0,balls:[],sparks:[],floatingPopups:[],hookAvailable:!0,hookActive:!1,hookTimer:0,freeFallShieldsRemaining:0,revivedOnce:!1,lastTimestamp:0,hudSyncTimer:0,nearMissCooldown:0,lightningFlashAlpha:0,fallSequence:{active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},cfg:null,skinObj:null,poleObj:null,propObj:null,gear:{pole:0,boots:0,gloves:0}}),Bt=nt.useCallback((h,O,he="#00f2fe",we="")=>{const De=rs.current++;h.floatingPopups.push({id:De,text:O,subtext:we,color:he,ttl:1.05}),h.floatingPopups.length>4&&h.floatingPopups.shift()},[]),Yi=nt.useCallback((h,O)=>{const he=h.ballCount,we=[O,"#00f2fe","#fde047","#f43f5e","#c084fc"],De=[];for(let Ct=0;Ct<he;Ct++){const cn=Ct%2===0;De.push({id:Ct,fromLeft:cn,targetHand:cn?"right":"left",progress:Ct/he*.72,speed:h.juggleSpeed*(.95+Ct%3*.05),color:we[Ct%we.length],waitingCatch:!1})}return De},[]),yr=nt.useCallback((h=!1)=>{It.init();const O=pf(o,Fe),he=hl(_e.current),we=Wt.current;if(we.cfg=O,we.skinObj=he,we.poleObj=en,we.propObj=mn,we.gear={...At},we.targetDistance=O.totalDistance,!h){we.distance=0,we.score=0,we.combo=0,we.maxCombo=0,we.frenzyActive=!1,we.hookAvailable=!0,we.revivedOnce=!1,we.floatingPopups=[];const De=en.autoSaveFall?1:0,Ct=he.freeShields||0;we.freeFallShieldsRemaining=De+Ct}we.angle=h?0:(Math.random()-.5)*.08,we.angularVel=0,we.windForce=0,we.windTarget=(Math.random()-.5)*O.windBase*.5,we.windTimer=1.6,we.controlInput=0,we.hookActive=!1,we.hookTimer=0,we.nearMissCooldown=0,we.lightningFlashAlpha=0,we.fallSequence={active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},we.balls=Yi(O,mn.color),we.sparks=[],we.lastTimestamp=performance.now(),we.running=!0,Me({progress:Math.min(100,Math.floor(we.distance/we.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(we.targetDistance-we.distance)),totalMeters:we.targetDistance,score:Math.floor(we.score),combo:we.combo,frenzyActive:we.frenzyActive,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:we.hookAvailable,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]})},[o,Fe,en,mn,At,Yi]),Ki=()=>{if(Eg()){U(!0);return}K(null),_e.current=ee,yr(!1),ge("playing")},L=()=>{ae==="playing"?(Wt.current.running=!1,It.updateWind(0),ge("paused")):ae==="paused"&&(Wt.current.lastTimestamp=performance.now(),Wt.current.running=!0,ge("playing"))},X=nt.useCallback(h=>{var Xn,ss,Sr,dn,On;const O=Wt.current;if(!O.running||O.fallSequence.active)return;const he=hl(_e.current),we=(((Xn=O.gear)==null?void 0:Xn.gloves)||0)*.015,De=((ss=O.poleObj)==null?void 0:ss.catchRadiusBonus)||0,Ct=(he==null?void 0:he.catchWindowBonus)||0,cn=Math.max(.5,.74-(((Sr=O.cfg)==null?void 0:Sr.catchWindow)||.24)-we-(De+Ct)*.35);let pn=null,bi=-1;for(const ui of O.balls)ui.targetHand===h&&ui.progress>=cn&&ui.progress>bi&&(bi=ui.progress,pn=ui);if(pn){const ui=pn.progress>=.85&&pn.progress<=.96;pn.fromLeft=h==="left",pn.targetHand=h==="left"?"right":"left",pn.progress=.02,pn.waitingCatch=!1,O.combo+=1,O.combo>O.maxCombo&&(O.maxCombo=O.combo);const Mr=O.frenzyActive;O.frenzyActive=O.combo>=10,!Mr&&O.frenzyActive?(It.playFrenzyStart(),Bt(O,t==="es"?"🔥 ¡MODO FRENESÍ x2!":"🔥 FRENZY MODE x2!","#fde047",t==="es"?"COMBO x10 ALCANZADO":"COMBO x10 REACHED")):(It.playCatch(O.combo,O.frenzyActive),ui&&Bt(O,t==="es"?`⚡ ¡PERFECTO! x${O.combo}`:`⚡ PERFECT! x${O.combo}`,O.frenzyActive?"#fde047":"#00f2fe"));const Ti=O.frenzyActive?2:1;if(O.score+=Math.round((28+O.combo*9)*Mn*Ti),!((dn=O.poleObj)!=null&&dn.noCatchRecoil)){const Er=((On=O.cfg)==null?void 0:On.catchRecoilImpulse)??.05;O.angularVel+=(h==="left"?-1:1)*Er}for(let Er=0;Er<10;Er++)O.sparks.push({hand:h,x:(Math.random()-.5)*.25,y:(Math.random()-.5)*.25,vx:(Math.random()-.5)*3.8,vy:.9+Math.random()*2.8,vz:(Math.random()-.5)*2.8,ttl:.42,color:O.frenzyActive?"#fde047":pn.color})}else O.angularVel+=h==="left"?-.16:.16,O.combo=0,O.frenzyActive=!1,It.playMissAlert()},[Mn,t,Bt]),me=nt.useCallback(()=>{const h=Wt.current;!h.running||!h.hookAvailable||h.fallSequence.active||(h.hookAvailable=!1,h.hookActive=!0,h.hookTimer=2.6,h.angle*=.15,h.angularVel=0,It.playHookRescue(),Bt(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80",t==="es"?"ESTABILIDAD RESTAURADA":"STABILITY RESTORED"),gt(t==="es"?"🪝 ¡Gancho Salvavidas Activado!":"🪝 Lifeline Hook Activated!"))},[t,gt,Bt]);nt.useEffect(()=>{const h=he=>{const we=Wt.current;ae!=="playing"||!we.running||(he.key==="ArrowLeft"||he.key==="a"||he.key==="A"?we.controlInput=-1:he.key==="ArrowRight"||he.key==="d"||he.key==="D"?we.controlInput=1:he.key==="q"||he.key==="Q"?X("left"):he.key==="e"||he.key==="E"?X("right"):he.key===" "?(he.preventDefault(),me()):he.key==="Escape"&&L())},O=he=>{const we=Wt.current;(he.key==="ArrowLeft"||he.key==="a"||he.key==="A")&&we.controlInput<0&&(we.controlInput=0),(he.key==="ArrowRight"||he.key==="d"||he.key==="D")&&we.controlInput>0&&(we.controlInput=0)};return window.addEventListener("keydown",h),window.addEventListener("keyup",O),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",O)}},[ae,X,me]),nt.useEffect(()=>{const h=_r.current;if(!h)return;const O=rw(h);Zn.current=O,gr(_e.current,O,!1);const he=()=>{if(!h||!Zn.current)return;const we=h.clientWidth||390,De=h.clientHeight||844;Zn.current.camera.aspect=we/De,Zn.current.camera.updateProjectionMatrix(),Zn.current.renderer.setSize(we,De)};return window.addEventListener("resize",he),()=>{window.removeEventListener("resize",he),It.updateWind(0),O&&O.renderer&&O.renderer.domElement&&(h.contains(O.renderer.domElement)&&h.removeChild(O.renderer.domElement),O.renderer.dispose())}},[]),nt.useEffect(()=>{const h=Wt.current,O=hl(_e.current);h.cfg?(h.skinObj=O,h.poleObj=en,h.propObj=mn,h.gear={...At},!h.running&&ae==="menu"&&(h.cfg=ke,h.targetDistance=ke.totalDistance)):(h.cfg=ke,h.skinObj=O,h.poleObj=en,h.propObj=mn,h.gear={...At},h.targetDistance=ke.totalDistance,h.balls=Yi(ke,mn.color));const he=we=>{var pn,bi,Xn,ss,Sr;const De=Math.min(.05,Math.max(.001,(we-(h.lastTimestamp||we))/1e3));h.lastTimestamp=we;const Ct=_e.current,cn=Ii(Ct);if(h.skinObj=cn,h.floatingPopups.length>0)for(let dn=h.floatingPopups.length-1;dn>=0;dn--)h.floatingPopups[dn].ttl-=De,h.floatingPopups[dn].ttl<=0&&h.floatingPopups.splice(dn,1);if(h.lightningFlashAlpha>0&&(h.lightningFlashAlpha=Math.max(0,h.lightningFlashAlpha-De*2.4)),h.running&&ae==="playing"){const dn=h.cfg;if(h.fallSequence.active)if(h.fallSequence.timer+=De,It.updateWind(0),h.fallSequence.mode==="hook_rescue")if(h.fallSequence.timer<.58)h.fallSequence.fallVy-=24*De,h.fallSequence.fallY+=h.fallSequence.fallVy*De,h.fallSequence.fallRotX+=2.2*De,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*2.5*De,h.fallSequence.ropeTopY=Math.max(h.fallSequence.fallY+1.8,16-h.fallSequence.timer*28);else if(h.fallSequence.timer<1.38){const On=(h.fallSequence.timer-.58)/.8;h.fallSequence.fallY=Yf(h.fallSequence.fallY,0,On*.25),h.fallSequence.fallRotX=Yf(h.fallSequence.fallRotX,0,On*.3),h.fallSequence.fallRotZ=Yf(h.fallSequence.fallRotZ,0,On*.3),h.fallSequence.ropeTopY=h.fallSequence.fallY+2.2+On*10}else h.fallSequence.active=!1,h.fallSequence.mode=null,h.fallSequence.fallY=0,h.fallSequence.fallRotX=0,h.fallSequence.fallRotZ=0,h.angle=0,h.angularVel=0,h.hookActive=!0,h.hookTimer=2,Bt(h,t==="es"?"🪝 ¡RESCATE EN EL AIRE!":"🪝 MID-AIR HOOK RESCUE!","#4ade80",t==="es"?"DEVUELTO AL CABLE":"PULLED BACK TO CABLE");else h.fallSequence.mode==="gameover_fall"&&(h.fallSequence.fallVy-=28*De,h.fallSequence.fallY+=h.fallSequence.fallVy*De,h.fallSequence.fallRotX+=3.4*De,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*4.2*De,h.fallSequence.timer>=1.5&&(h.running=!1,Ee({coinsEarned:h.fallSequence.finalCoins,scoreEarned:h.fallSequence.finalScore,lpEarned:h.fallSequence.finalLp,gemsEarned:0,doubled:!1,revivedOnce:h.revivedOnce}),p(On=>On+h.fallSequence.finalCoins),C(On=>{const ui=On+h.fallSequence.finalLp;return pl(_||"Equilibrista",A,ui,o),ui}),M(On=>Math.max(On,h.fallSequence.finalScore)),ge("gameover")));else{const On=Math.min(.45,(h.gear.pole||0)*.048),ui=((pn=h.poleObj)==null?void 0:pn.gravityReduction)||0,Mr=cn.gravityMod??1-(cn.gravityReduction||0),Ti=Math.max(.18,(1-On)*(1-ui)*Mr),Er=Math.min(.48,(h.gear.boots||0)*.052),as=cn.windResist??cn.windReduction??0,kr=Math.max(.2,(1-Er)*(1-as)),rr=Math.max(.25,1-Math.min(.75,(((bi=h.poleObj)==null?void 0:bi.stepDamp)||0)+(cn.stepDampBonus||0))),Rs=cn.recoveryBonus||0;if(h.windTimer-=De,h.windTimer<=0){const Tt=dn.gustInterval??1.8;h.windTimer=Tt*(.75+Math.random()*.45);const Rn=Math.abs(h.windTarget)>.05&&Math.random()<.72?-Math.sign(h.windTarget):Math.random()<.5?-1:1,Oi=(.45+Math.random()*.65)*dn.windBase*Rn;h.windTarget=Oi*kr,((Xn=dn.city)==null?void 0:Xn.weatherArchetype)==="cyber_rain"&&Math.abs(Oi)>.7&&Math.random()<.45&&(h.lightningFlashAlpha=.85)}h.windForce+=(h.windTarget-h.windForce)*De*2.8,It.updateWind(h.windForce),h.hookActive&&(h.hookTimer-=De,h.hookTimer<=0&&(h.hookActive=!1));const Cs=h.walkCycle,Br=3.2*dn.walkSpeed;h.walkCycle+=De*Br;const aa=Math.floor(Cs/Math.PI),sr=Math.floor(h.walkCycle/Math.PI);if(sr!==aa){const Tt=sr%2===0?1:-1,Rn=(dn.stepSwayImpulse??.04)*rr;h.angularVel+=Tt*Rn*(h.hookActive?.25:1),It.playFootstep(dn.walkSpeed)}const Ps=Math.sin(h.angle)*dn.gravity*Ti*(h.hookActive?.25:1),oa=h.windForce*.78*(h.hookActive?.2:1),Ai=h.controlInput*3.15*(1+Rs),Ls=Math.sin(we*.0047)*.12*dn.walkSpeed*rr*(h.hookActive?.2:1);h.angularVel+=(Ps+oa+Ai+Ls)*De,h.angularVel*=Math.pow(.88,De*60),h.angle+=h.angularVel*De,h.hookActive&&(h.angle*=Math.pow(.86,De*60)),h.nearMissCooldown>0&&(h.nearMissCooldown-=De);const zr=Math.abs(h.angle)/ra;if(zr>=.78&&zr<.98&&h.nearMissCooldown<=0&&h.angle*h.controlInput<0&&Math.abs(h.controlInput)>.1){h.nearMissCooldown=2.4;const Tt=Math.round(150*Mn*(h.frenzyActive?2:1));h.score+=Tt,It.playNearMiss(),Bt(h,t==="es"?`⚡ ¡SALVADA AL LÍMITE! +${Tt}`:`⚡ NEAR-MISS SAVE! +${Tt}`,"#38bdf8",t==="es"?"RECUPERACIÓN EXTREMA":"EXTREME RECOVERY")}const os=Math.max(.35,1-Math.abs(h.angle)/(ra*1.15)),Vr=4.6*dn.walkSpeed*(.72+os*.38);h.distance+=Vr*De,h.score+=Vr*De*12*Mn*(h.frenzyActive?2:1);const ls={left:!1,right:!1},la=(((ss=h.gear)==null?void 0:ss.gloves)||0)*.015,Jn=((Sr=h.poleObj)==null?void 0:Sr.catchRadiusBonus)||0,wr=cn.catchWindowBonus||0,Ri=Math.max(.5,.74-dn.catchWindow-la-(Jn+wr)*.35);for(const Tt of h.balls)if(Tt.progress+=Tt.speed*De,Tt.progress>=Ri&&Tt.progress<=1.02?(ls[Tt.targetHand]=!0,Tt.waitingCatch=!0):Tt.waitingCatch=!1,Tt.progress>1.03){Tt.fromLeft=Tt.targetHand==="left",Tt.targetHand=Tt.fromLeft?"right":"left",Tt.progress=0,Tt.waitingCatch=!1,h.combo=0,h.frenzyActive=!1;const Rn=.24+(dn.speedPhase||0)*.04;h.angularVel+=Tt.targetHand==="left"?-Rn:Rn,It.playMissAlert(),Bt(h,t==="es"?"⚠️ ¡ESFERA PERDIDA!":"⚠️ DROPPED ORB!","#ef4444")}for(let Tt=h.sparks.length-1;Tt>=0;Tt--){const Rn=h.sparks[Tt];Rn.ttl-=De,Rn.ttl<=0?h.sparks.splice(Tt,1):(Rn.x+=Rn.vx*De,Rn.y+=Rn.vy*De,Rn.vy-=5.5*De)}if(Math.abs(h.angle)>=ra)if(h.freeFallShieldsRemaining>0)h.freeFallShieldsRemaining-=1,h.angle*=.12,h.angularVel=0,h.hookActive=!0,h.hookTimer=2.2,It.playHookRescue(),Bt(h,t==="es"?"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!":"🛡️ ANTI-FALL SHIELD ACTIVATED!","#fde047",t==="es"?"PROTECCIÓN PRO / VIP":"PRO / VIP PROTECTION");else if(h.hookAvailable)h.hookAvailable=!1,h.fallSequence.active=!0,h.fallSequence.mode="hook_rescue",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-3.8,h.fallSequence.fallRotX=.18,h.fallSequence.fallRotZ=h.angle*.8,h.fallSequence.ropeTopY=16,It.playFallScream(),setTimeout(()=>It.playHookRescue(),460),Bt(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80");else{const Tt=Math.floor(h.score),Rn=Math.max(15,Math.floor((h.distance*1.4+h.maxCombo*6)*ji)),Oi=Math.max(10,Math.floor((h.distance*.8+h.maxCombo*4)*An));h.fallSequence.active=!0,h.fallSequence.mode="gameover_fall",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-4.5,h.fallSequence.fallRotX=.25,h.fallSequence.fallRotZ=h.angle,h.fallSequence.finalCoins=Rn,h.fallSequence.finalScore=Tt,h.fallSequence.finalLp=Oi,It.updateWind(0),It.playFallScream()}else if(h.distance>=h.targetDistance){h.running=!1,It.updateWind(0),It.playVictory();const Tt=Math.floor(h.score+500*Mn),Rn=Math.floor((125+o*26+h.maxCombo*12)*ji),Oi=Math.floor((95+o*16+h.maxCombo*9)*An),Ns=(Fe?Fe.gemBonus:0)+(o%5===0?12:4);Ee({coinsEarned:Rn,scoreEarned:Tt,lpEarned:Oi,gemsEarned:Ns,doubled:!1,revivedOnce:h.revivedOnce}),p(Qn=>Qn+Rn),S(Qn=>Qn+Ns),C(Qn=>{const Gr=Qn+Oi;return pl(_||"Equilibrista",A,Gr,o+1),Gr}),M(Qn=>Math.max(Qn,Tt)),f(Qn=>Math.max(Qn,Math.min(19,Math.floor(o/5)))),ge("victory");return}h.hudSyncTimer+=De,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Me({progress:Math.min(100,Math.floor(h.distance/h.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(h.targetDistance-h.distance)),totalMeters:h.targetDistance,score:Math.floor(h.score),combo:h.combo,frenzyActive:h.frenzyActive,tiltRatio:Math.max(-1,Math.min(1,h.angle/ra)),windForce:h.windForce,juggleAlertHands:ls,hookAvailable:h.hookAvailable,hookActive:h.hookActive,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))}h.fallSequence.active&&(h.hudSyncTimer+=De,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Me(On=>({...On,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))))}else h.walkCycle+=De*1.4;Zn.current&&sw(Zn.current,h,we*.001,ae,_e.current,J.current),Wn.current=requestAnimationFrame(he)};return Wn.current=requestAnimationFrame(he),()=>{Wn.current&&cancelAnimationFrame(Wn.current)}},[ae,ke,en,mn,At,Mn,ji,An,Fe,o,t,_,A,Yi,Bt]),nt.useEffect(()=>{if(!Pe)return;be(2);const h=setInterval(()=>{be(O=>O<=1?(clearInterval(h),0):O-1)},1e3);return()=>clearInterval(h)},[Pe]);const oe=()=>{const h=Pe;if(Ne(null),h==="revive"){const O=Wt.current;O.revivedOnce=!0,O.hookAvailable=!0,yr(!0),ge("playing"),gt(t==="es"?"⚡ ¡Segunda oportunidad activada!":"⚡ Second chance activated!")}else h==="double"?Se.doubled||(p(O=>O+Se.coinsEarned),C(O=>{const he=O+Se.lpEarned;return pl(_||"Equilibrista",A,he,o),he}),Ee(O=>({...O,coinsEarned:O.coinsEarned*2,lpEarned:O.lpEarned*2,doubled:!0})),gt(t==="es"?"🎬 ¡Recompensas Duplicadas x2!":"🎬 Rewards Doubled x2!")):h==="gems"?(S(O=>O+35),gt(t==="es"?"💎 +35 Gemas Gratis acreditadas":"💎 +35 Free Gems credited")):h==="coins"&&(p(O=>O+1500),gt(t==="es"?"🪙 +1.500 Monedas Gratis acreditadas":"🪙 +1,500 Free Coins credited"))},le=()=>{const h=o+1;l(h),f(O=>Math.max(O,Math.min(19,Math.floor((h-1)/5)))),setTimeout(()=>{const O=Wt.current,he=pf(h,Fe),we=hl(_e.current);O.cfg=he,O.skinObj=we,O.targetDistance=he.totalDistance,O.distance=0,O.score=0,O.combo=0,O.maxCombo=0,O.frenzyActive=!1,O.angle=0,O.angularVel=0,O.hookAvailable=!0,O.hookActive=!1,O.revivedOnce=!1;const De=en.autoSaveFall?1:0,Ct=we.freeShields||0;O.freeFallShieldsRemaining=De+Ct,O.fallSequence.active=!1,O.fallSequence.mode=null,O.balls=Yi(he,mn.color),O.lastTimestamp=performance.now(),O.running=!0,ge("playing")},30)},je=h=>{const O=At[h.id]||0,he=v0(O);if(!he.isMax)if(he.isProTier){if(W){Ot(we=>({...we,[h.id]:O+1})),It.playVictory(),gt(`👑 ${h.name[t]} Élite Nv.${O+1}/10 (Pase VIP)!`);return}y>=he.gemCost?(S(we=>we-he.gemCost),Ot(we=>({...we,[h.id]:O+1})),It.playVictory(),gt(`👑 ${h.name[t]} Élite Nv.${O+1}/10!`)):(w("store"),gt(t==="es"?`👑 Nivel Élite (6-10): Requiere ${he.gemCost} Gemas o Pase VIP Pro`:`👑 Elite Tier (6-10): Requires ${he.gemCost} Gems or VIP Pro Pass`))}else{if(m<he.coinCost){gt(t==="es"?`🪙 Necesitás ${he.coinCost.toLocaleString()} Monedas`:`🪙 Need ${he.coinCost.toLocaleString()} Coins`);return}p(we=>we-he.coinCost),Ot(we=>({...we,[h.id]:O+1})),It.playCatch(O+2,!1),gt(`${h.icon} ${h.name[t]} Nv.${O+1}/10!`)}},Ve=h=>{if(We.includes(h.id)||h.isVipOnly&&W){We.includes(h.id)||Xe(O=>[...O,h.id]),se(h.id),It.playCatch(4,!1),gt(`${h.icon} ${h.name[t]} ${Z.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),Xe(O=>[...O,h.id]),se(h.id),It.playVictory(),gt(`${h.icon} ${h.name[t]}!`)):gt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.gemCost?(S(O=>O-h.gemCost),Xe(O=>[...O,h.id]),se(h.id),It.playVictory(),gt(`👑 ${h.name[t]} Desbloqueada!`)):(w("store"),gt(t==="es"?`👑 Vara Exclusiva (${h.usdPrice||`${h.gemCost} 💎`}): Visitá la Tienda VIP`:`👑 Exclusive Pole (${h.usdPrice||`${h.gemCost} 💎`}): Visit VIP Store`))},He=h=>{const O=ea(h.id);if(Y===O){K(null),_e.current=ee,Wt.current.skinObj=hl(ee),gr(ee);return}_e.current=O,Wt.current.skinObj=h,K(O),gr(O),It.playCatch(3,!1),gt(t==="es"?`👁️ Probando en 3D: ${h.icon} ${h.name.es}`:`👁️ Trying in 3D: ${h.icon} ${h.name.en}`)},Qe=(h,O=!1)=>{if(!h)return;const he=ea(h.id);O&&h.gemCost&&y>=h.gemCost&&S(De=>De-h.gemCost);const we=Array.from(new Set([...H,he]));fe(we);try{localStorage.setItem("nma_owned_skins",JSON.stringify(we)),localStorage.setItem("nma_equipped_skin",he)}catch{}K(null),ce(null),_e.current=he,Wt.current.skinObj=h,te(he),gr(he),It.playVictory(),gt(t==="es"?`👑 ¡${h.name.es} DESBLOQUEADO Y EQUIPADO EN 3D!`:`👑 ${h.name.en} UNLOCKED & EQUIPPED IN 3D!`)},it=h=>{const O=ea(h.id);if(H.includes(O)||H.includes(h.legacyId)||h.isVipOnly&&W){if(!H.includes(O)){const De=Array.from(new Set([...H,O]));fe(De);try{localStorage.setItem("nma_owned_skins",JSON.stringify(De))}catch{}}K(null),_e.current=O,Wt.current.skinObj=h,te(O),gr(O),It.playCatch(5,!0),gt(`${h.icon} ${h.name[t]} — ${Z.equipped}!`);return}const we=h.price??h.cost??0;if(h.currency==="coins")if(m>=we){p(Ct=>Ct-we);const De=Array.from(new Set([...H,O]));fe(De);try{localStorage.setItem("nma_owned_skins",JSON.stringify(De)),localStorage.setItem("nma_equipped_skin",O)}catch{}K(null),_e.current=O,Wt.current.skinObj=h,te(O),gr(O),It.playVictory(),gt(`${h.icon} ${h.name[t]} ${Z.equipped}!`)}else _e.current=O,Wt.current.skinObj=h,K(O),gr(O),gt(t==="es"?`🪙 Necesitás ${we.toLocaleString()} Monedas (Probando en 3D)`:`🪙 Need ${we.toLocaleString()} Coins (Trying in 3D)`);else _e.current=O,Wt.current.skinObj=h,K(O),gr(O),ce(h)},ht=h=>{if(de.includes(h.id)){gt(t==="es"?"✅ Multiplicador ya activo":"✅ Multiplier already active");return}if(h.isVipOnly&&W){Re(O=>[...O,h.id]),It.playVictory(),gt(`👑 ${h.name[t]} Activado!`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),Re(O=>[...O,h.id]),It.playVictory(),gt(`🚀 ${h.name[t]} Activado!`)):gt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.gemCost?(S(O=>O-h.gemCost),Re(O=>[...O,h.id]),It.playVictory(),gt(`👑 ${h.name[t]} Activado!`)):(w("store"),gt(t==="es"?`👑 Multiplicador Pro (${h.usdPrice}): Requiere ${h.gemCost} 💎 o Pase VIP`:`👑 Pro Multiplier (${h.usdPrice}): Requires ${h.gemCost} 💎 or VIP Pass`))},Et=h=>{if(ft.includes(h.id)){_t(h.id),gt(`${h.icon} ${h.name[t]} ${Z.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),pt(O=>[...O,h.id]),_t(h.id),It.playVictory(),gt(`${h.icon} ${h.name[t]}!`)):gt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.cost?(S(O=>O-h.cost),pt(O=>[...O,h.id]),_t(h.id),It.playVictory(),gt(`${h.icon} ${h.name[t]}!`)):(w("store"),gt(t==="es"?"💎 Gemas insuficientes":"💎 Not enough gems"))},$e=h=>{const O=Math.max(u,Math.min(19,Math.floor((o-1)/5)));if(h>O)return;const he=h*5+1;zt(null),l(he),Ce(!1),gt(t==="es"?`✈️ Viajaste a ${Ms[h].flag} ${Ms[h].name.es} (Nivel ${he})`:`✈️ Traveled to ${Ms[h].flag} ${Ms[h].name.en} (Level ${he})`)},Dt=h=>{if(W||Ye.includes(h.id)){zt(h.id),Ce(!1),It.playVictory(),gt(t==="es"?`👑 Ciudad VIP Activa: ${h.flag} ${h.name.es} (x${h.rewardMult} Recompensas)`:`👑 VIP City Active: ${h.flag} ${h.name.en} (x${h.rewardMult} Rewards)`);return}y>=h.gemUnlockCost?(S(he=>he-h.gemUnlockCost),Ue(he=>[...he,h.id]),zt(h.id),Ce(!1),It.playVictory(),gt(`👑 ${h.flag} ${h.name[t]} Desbloqueada!`)):(Ce(!1),w("store"),gt(t==="es"?`🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${h.gemUnlockCost} 💎`:`🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${h.gemUnlockCost} 💎`))},gn=h=>{S(O=>O+h.gems),p(O=>O+h.coins),h.isVipPassBundle&&(ne(!0),Xe(O=>Array.from(new Set([...O,"pole_imperial","pole_quantum"]))),se("pole_imperial"),re(O=>Array.from(new Set([...O,"shinobi","ronin_gold","quantum_specter","immortal_legend","leyenda_dorada"]))),K(null),_e.current="immortal_legend",te("immortal_legend"),Re(O=>Array.from(new Set([...O,"mult_x3_pro"]))),Ue(hf.map(O=>O.id))),C(O=>{const he=O+(h.leaguePts||200);return pl(_||"Equilibrista",A,he,o),he}),It.playVictory(),gt(h.isVipPassBundle?t==="es"?"👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas":"👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked":`👑 ${h.name[t]} (+${h.gems} 💎 / +${h.coins.toLocaleString()} 🪙)`)},an=h=>{Qt.includes(h.id)||E<h.requiredLp||(Ft(O=>[...O,h.id]),S(O=>O+h.gemsReward),p(O=>O+h.coinsReward),It.playVictory(),gt(`🏆 +${h.gemsReward} 💎 & +${h.coinsReward} 🪙!`))},Xt=et.length>0?et:[{id:"player_self",name:_||"Equilibrista",country:A,flag:Ro(A),score:E,lp:E,level:o,isPlayer:!0}],En=Xt.findIndex(h=>h.isPlayer),Ke=En>=0?En+1:1,un=Math.abs(Te.windForce)<.08?"•":Te.windForce>0?">>>":"<<<",Nt=Math.max(u,Math.min(19,Math.floor((o-1)/5))),Un=Ro(A);return N.jsx("div",{className:"app-root",children:N.jsxs("div",{className:"phone-frame",children:[N.jsx("div",{ref:_r,className:"game-canvas",style:{width:"100%",height:"100%",position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}}),ze&&N.jsx("div",{className:"toast-banner",children:ze}),R&&N.jsx("div",{className:"modal-backdrop onboarding-backdrop",style:{zIndex:250},children:N.jsxs("form",{className:"modal-card onboarding-modal-card",onSubmit:is,children:[N.jsx("div",{className:"onboarding-crown-badge",children:t==="es"?"🏆 LIGA MUNDIAL EN VIVO":"🏆 LIVE WORLD LEAGUE"}),N.jsx("h2",{className:"modal-title onboarding-title",children:t==="es"?"⚡ CREÁ TU PERFIL DE EQUILIBRISTA":"⚡ CREATE YOUR TIGHTROPE PROFILE"}),N.jsx("p",{className:"modal-subtitle onboarding-subtitle",children:t==="es"?"Elegí tu nombre y país para competir en el Ranking Mundial en vivo.":"Choose your name and country to compete on the Live World Leaderboard."}),N.jsxs("div",{className:"onboarding-field-group",children:[N.jsx("label",{className:"onboarding-label",htmlFor:"onboarding-name-input",children:t==="es"?"1. TU NOMBRE O APODO (3 A 15 CARACTERES)":"1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)"}),N.jsx("input",{id:"onboarding-name-input",type:"text",maxLength:15,autoFocus:!0,className:`onboarding-input ${z?"input-error-shake":""}`,placeholder:t==="es"?"Tu Nombre o Apodo (Ej: Maury_AR)":"Your Nickname (e.g. Maury_AR)",value:I,onChange:h=>{k(h.target.value),z&&G(!1)}}),z&&N.jsx("div",{className:"onboarding-error-msg",children:t==="es"?"⚠️ Ingresá un nombre válido de al menos 3 caracteres.":"⚠️ Please enter a valid name of at least 3 characters."})]}),N.jsxs("div",{className:"onboarding-field-group",children:[N.jsx("label",{className:"onboarding-label",children:t==="es"?"2. SELECCIONÁ TU PAÍS / BANDERA":"2. SELECT YOUR COUNTRY / FLAG"}),N.jsx("div",{className:"onboarding-country-grid",children:yn(Lx).map(h=>{const O=b===h.code;return N.jsxs("button",{type:"button",className:`onboarding-country-chip ${O?"selected":""}`,onClick:()=>D(String(h.code||"AR").toUpperCase().slice(0,2)),children:[N.jsx("span",{className:"country-chip-flag",children:String(h.flag||"🏳️")}),N.jsx("span",{className:"country-chip-code",children:String(h.code||"AR")}),N.jsx("span",{className:"country-chip-name",children:qt(h.name,t,"País")})]},h.code)})})]}),N.jsx("button",{type:"submit",className:"onboarding-submit-btn",children:t==="es"?"🚀 GUARDAR Y ENTRAR A COMPETIR":"🚀 SAVE & START COMPETING"})]})}),Oe&&N.jsx("div",{className:"modal-backdrop",style:{zIndex:120},children:N.jsxs("div",{className:"modal-card",style:{maxHeight:"86%",display:"flex",flexDirection:"column",padding:"16px 14px"},children:[N.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[N.jsx("h2",{className:"modal-title",style:{fontSize:16,margin:0},children:t==="es"?"🌍 CIUDADES Y MONUMENTOS 3D":"🌍 CITIES & 3D LANDMARKS"}),N.jsx("button",{className:"hud-pause-btn",onClick:()=>Ce(!1),style:{width:30,height:30,fontSize:13},children:"✕"})]}),N.jsxs("div",{className:"items-scroll-list",style:{flex:1,overflowY:"auto",paddingRight:4},children:[N.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#fde047",letterSpacing:.8,marginBottom:6,marginTop:2},children:Z.vipCitiesTitle}),yn(hf).map(h=>{const O=W||Ye.includes(h.id),he=ut===h.id;return N.jsxs("div",{className:"item-card vip-city-card",style:{cursor:"pointer",borderColor:he?"rgba(253, 224, 71, 0.95)":"rgba(250, 204, 21, 0.45)"},onClick:()=>Dt(h),children:[N.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:O?h.flag:"🔒"}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",style:{color:"#fde047"},children:["👑 ",qt(h.name,t)]}),N.jsxs("div",{className:"benefit-pill-tag pro",children:["x",h.rewardMult," 🪙/LP • +",h.gemBonus," 💎 POR CRUCE"]}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${he?"equipped":"buy-gems"}`,children:he?t==="es"?"ACTIVA":"ACTIVE":O?t==="es"?"VIAJAR":"TRAVEL":`👑 ${h.gemUnlockCost} 💎`})]},h.id)}),N.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#38bdf8",letterSpacing:.8,margin:"12px 0 6px"},children:t==="es"?"🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)":"🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)"}),yn(Ms).map((h,O)=>{const he=O<=Nt,we=!ut&&ke.cityIndex===O,De=O*5+1,Ct=O*5+5;return N.jsxs("div",{className:`item-card ${we?"selected":""}`,style:{opacity:he?1:.52,cursor:he?"pointer":"not-allowed"},onClick:()=>he&&$e(O),children:[N.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:he?h.flag:"🔒"}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[O+1,". ",qt(h.name,t)]}),N.jsxs("div",{className:"benefit-pill-tag",children:["🗿 ",qt(h.monumentName||h.weatherLabel,t)]}),N.jsx("div",{className:"item-desc",children:t==="es"?`Niveles ${De} al ${Ct} • ${qt(h.weatherLabel,"es")}`:`Levels ${De} to ${Ct} • ${qt(h.weatherLabel,"en")}`})]}),N.jsx("button",{className:`item-action-btn ${we?"equipped":he?"buy-coins":"locked"}`,disabled:!he,children:we?t==="es"?"ACTUAL":"ACTIVE":he?t==="es"?`NV. ${De}`:`LVL ${De}`:`🔒 NV.${De}`})]},h.index)})]})]})}),ae==="playing"&&N.jsxs("div",{className:"gameplay-hud-layer",children:[Te.lightningFlashAlpha>.05&&N.jsx("div",{className:"weather-lightning-flash",style:{opacity:Te.lightningFlashAlpha}}),N.jsxs("div",{className:"vector-hud-top",children:[N.jsxs("div",{className:"vector-top-row",children:[N.jsxs("div",{className:"vector-city-tag",children:[N.jsxs("span",{children:[ke.city.flag," ",ke.city.name[t].toUpperCase()," •"," ",Fe?"👑 VIP":`${Z.level} ${o}`," • x",Mn]}),N.jsxs("span",{className:"vector-meters-left",children:[Te.metersRemaining,"m / ",Te.totalMeters,"m"]})]}),N.jsxs("div",{className:"vector-hud-buttons",children:[N.jsx("button",{className:"hud-pause-btn",onClick:()=>$(h=>!h),"aria-label":"Audio",children:kt?"🔊":"🔇"}),N.jsx("button",{className:"hud-pause-btn",onClick:L,"aria-label":"Pause",children:"⏸"})]})]}),N.jsx("div",{className:"vector-progress-rail",children:N.jsx("div",{className:"vector-progress-fill",style:{width:`${Te.progress}%`}})}),N.jsxs("div",{className:"vector-Horizon-pill-row",children:[N.jsxs("div",{className:`vector-horizon-pill ${Math.abs(Te.tiltRatio)>.65?"danger":""}`,children:[N.jsx("div",{className:"vector-horizon-center-tick"}),N.jsx("div",{className:"vector-horizon-dot",style:{left:`${50+Math.max(-46,Math.min(46,Te.tiltRatio*46))}%`}})]}),N.jsxs("div",{className:"vector-wind-badge",children:["🌬️ ",un," ",Math.abs(Te.windForce*18).toFixed(0)," km/h"]}),N.jsxs("div",{className:`vector-score-badge ${Te.frenzyActive?"frenzy-glow":""}`,children:[Te.score.toLocaleString()," pts",Te.combo>1?` • x${Te.combo}`:"",Te.frenzyActive?" 🔥":""]})]})]}),Te.floatingPopups&&Te.floatingPopups.length>0&&N.jsx("div",{className:"floating-popups-layer",children:Te.floatingPopups.map(h=>N.jsxs("div",{className:"floating-feedback-popup",style:{color:h.color,borderColor:h.color},children:[N.jsx("div",{className:"floating-popup-main",children:h.text}),h.subtext&&N.jsx("div",{className:"floating-popup-sub",children:h.subtext})]},h.id))}),N.jsxs("div",{className:"vector-controls-layer",children:[N.jsxs("div",{className:"vector-touch-zones",children:[N.jsx("button",{className:"vector-touch-half left",onPointerDown:()=>{Wt.current.controlInput=-1},onPointerUp:()=>{Wt.current.controlInput<0&&(Wt.current.controlInput=0)},onPointerLeave:()=>{Wt.current.controlInput<0&&(Wt.current.controlInput=0)},children:N.jsxs("span",{className:"vector-corner-hint",children:["◀ ",Z.leanLeft]})}),N.jsx("button",{className:"vector-touch-half right",onPointerDown:()=>{Wt.current.controlInput=1},onPointerUp:()=>{Wt.current.controlInput>0&&(Wt.current.controlInput=0)},onPointerLeave:()=>{Wt.current.controlInput>0&&(Wt.current.controlInput=0)},children:N.jsxs("span",{className:"vector-corner-hint",children:[Z.leanRight," ▶"]})})]}),N.jsxs("div",{className:"vector-juggle-overlay-row",children:[N.jsxs("button",{className:`vector-catch-pill ${Te.juggleAlertHands.left?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),X("left")},children:["✋ ",Z.leftHand]}),Te.hookAvailable&&N.jsx("button",{className:"vector-hook-pill",onPointerDown:h=>{h.stopPropagation(),me()},children:"🪝"}),N.jsxs("button",{className:`vector-catch-pill ${Te.juggleAlertHands.right?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),X("right")},children:[Z.rightHand," ✋"]})]})]})]}),ae==="menu"&&N.jsxs("div",{className:"menu-overlay-layer",children:[N.jsxs("div",{className:"currency-top-bar",children:[N.jsxs("div",{className:"currency-group",children:[N.jsxs("div",{className:"currency-pill league",onClick:()=>w("league"),title:Z.leagueBanner,children:["🏆 ",t==="es"?"LIGA":"LEAGUE"," #",Ke]}),N.jsxs("div",{className:"currency-pill level",children:["⭐ ",Z.level," ",o]}),N.jsxs("div",{className:"currency-pill coins",onClick:()=>Ne("coins"),title:Z.freeCoinsAd,children:["🪙 ",m.toLocaleString()," ",N.jsx("span",{className:"plus-badge",children:"+"})]}),N.jsxs("div",{className:"currency-pill gems",onClick:()=>Ne("gems"),title:Z.freeGemsAd,children:["💎 ",y.toLocaleString()," ",N.jsx("span",{className:"plus-badge",children:"+"})]})]}),N.jsxs("div",{className:"utility-group",children:[N.jsxs("button",{className:"profile-header-badge",onClick:$i,title:t==="es"?"Editar Perfil":"Edit Profile",children:[N.jsx("span",{children:String(Un||"🇦🇷")}),N.jsx("span",{className:"profile-header-name",children:String(_||"Equilibrista")}),N.jsx("span",{className:"profile-header-edit",children:"✏️"})]}),N.jsx("button",{className:"icon-btn",onClick:()=>$(h=>!h),title:"Sound",children:kt?"🔊":"🔇"})]})]}),N.jsxs("div",{className:`tab-content-area ${B==="home"?"home-mode":""}`,children:[B==="home"&&N.jsxs("div",{className:"home-card",children:[N.jsxs("div",{className:"brand-header",children:[N.jsx("span",{className:"official-badge",children:W?"👑 PASE VIP PRO ACTIVO":Z.officialEdition}),N.jsx("h1",{className:"game-logo-title",children:Z.title}),N.jsxs("p",{className:"game-logo-sub",children:["🗿 ",qt(ke.city.monumentName,t,Z.subtitle)]})]}),N.jsxs("div",{className:"home-bottom-panel",children:[N.jsxs("div",{className:"city-campaign-card",onClick:()=>Ce(!0),style:{cursor:"pointer"},children:[N.jsx("div",{className:"city-flag-circle",children:ke.city.flag}),N.jsxs("div",{className:"city-details",children:[N.jsx("div",{className:"city-stage-tag",children:Fe?`👑 CIUDAD VIP (x${Fe.rewardMult} PAGO)`:`${Z.worldTour} • ${Z.city} ${ke.cityIndex+1}/20`}),N.jsx("div",{className:"city-title-text",children:qt(ke.city.name,t)}),N.jsxs("div",{className:"city-level-sub",children:[Z.level," ",o," • ",mt.icon," ",qt(mt.name,t)]})]}),N.jsxs("div",{className:"multiplier-chip",children:["x",Mn]})]}),N.jsxs("div",{className:"home-quick-nav-grid",children:[N.jsxs("button",{type:"button",className:"home-quick-nav-btn",onClick:()=>Ce(!0),children:[N.jsx("span",{className:"quick-nav-ic",children:"🌍"}),N.jsx("span",{children:t==="es"?"20 Ciudades":"20 Cities"})]}),N.jsxs("button",{type:"button",className:"home-quick-nav-btn",onClick:()=>w("armory"),children:[N.jsx("span",{className:"quick-nav-ic",children:"⚙️"}),N.jsx("span",{children:t==="es"?"Armería":"Armory"})]}),N.jsxs("button",{type:"button",className:"home-quick-nav-btn",onClick:()=>w("skins"),children:[N.jsx("span",{className:"quick-nav-ic",children:"🧥"}),N.jsx("span",{children:t==="es"?"Aspectos":"Skins"})]}),N.jsxs("button",{type:"button",className:"home-quick-nav-btn gold",onClick:()=>w("store"),children:[N.jsx("span",{className:"quick-nav-ic",children:"💎"}),N.jsx("span",{children:t==="es"?"Cofres":"Chests"})]})]}),N.jsxs("button",{className:"play-cta-button",onClick:Ki,children:[N.jsx("span",{className:"play-icon",children:"▶"})," ",t==="es"?"JUGAR / SALTAR AL CABLE":"PLAY / STEP ON THE WIRE"]}),N.jsxs("div",{className:"reward-ads-row",children:[N.jsxs("button",{className:"ad-reward-btn coins",onClick:()=>Ne("coins"),children:["🎬 ",Z.freeCoinsAd]}),N.jsxs("button",{className:"ad-reward-btn gems",onClick:()=>Ne("gems"),children:["🎬 ",Z.freeGemsAd]})]})]})]}),B==="armory"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["⚙️ ",Z.armoryTitle]}),N.jsxs("div",{className:"section-sub-tabs",children:[N.jsx("button",{className:`sub-tab-btn ${tn==="upgrades"?"active":""}`,onClick:()=>Lt("upgrades"),children:t==="es"?"⚙️ MEJORAS (1-10)":"⚙️ UPGRADES (1-10)"}),N.jsx("button",{className:`sub-tab-btn ${tn==="poles"?"active":""}`,onClick:()=>Lt("poles"),children:t==="es"?"⚖️ VARAS 3D (5)":"⚖️ 3D POLES (5)"}),N.jsx("button",{className:`sub-tab-btn ${tn==="multipliers"?"active":""}`,onClick:()=>Lt("multipliers"),children:t==="es"?"🚀 MULTIPLICADORES":"🚀 MULTIPLIERS"})]}),N.jsxs("div",{className:"items-scroll-list",children:[tn==="upgrades"&&N.jsxs(N.Fragment,{children:[yn(bx).map(h=>{const O=(At==null?void 0:At[h.id])||0,he=v0(O);return N.jsxs("div",{className:"item-card",children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[qt(h.name,t)," ",N.jsxs("span",{className:"lvl-pill",children:["Nv. ",O,"/10"]})]}),N.jsx("div",{className:`benefit-pill-tag ${he.isProTier?"pro":""}`,children:he.isProTier?t==="es"?"👑 TRAMO ÉLITE PRO (NV. 6 A 10)":"👑 PRO ELITE TIER (LVL 6 TO 10)":qt(h.statLabel,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)}),N.jsx("div",{className:"armory-level-bar",children:Array.from({length:10}).map((we,De)=>N.jsx("span",{className:`armory-pip ${De>=5?"pro-pip":""} ${De<O?"filled":""}`},De))})]}),N.jsx("button",{className:`item-action-btn ${he.isMax?"equipped":he.isProTier?"buy-gems":"buy-coins"}`,disabled:he.isMax,onClick:()=>je(h),children:he.isMax?Z.maxLevel:he.isProTier?W?"👑 VIP GRATIS":`👑 PRO ${he.gemCost} 💎`:`🪙 ${he.coinCost.toLocaleString()}`})]},h.id)}),N.jsxs("h3",{className:"sub-section-title",children:["🎪 ",Z.propsTitle]}),yn(bl).map(h=>{const O=ft.includes(h.id),he=bt===h.id;return N.jsxs("div",{className:`item-card ${he?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:qt(h.name,t)}),N.jsxs("div",{className:"item-desc",children:["Multiplicador Base x",h.mult]})]}),N.jsx("button",{className:`item-action-btn ${he?"equipped":O?"equip":h.currency==="gems"?"buy-gems":"buy-coins"}`,onClick:()=>Et(h),children:he?Z.equipped:O?Z.equip:h.currency==="gems"?`💎 ${h.cost}`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]}),tn==="poles"&&yn(Oc).map(h=>{const O=We.includes(h.id)||h.isVipOnly&&W,he=Ge===h.id;return N.jsxs("div",{className:`item-card ${he?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:qt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:qt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${he?"equipped":O?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Ve(h),children:he?Z.equipped:O?Z.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),tn==="multipliers"&&yn(Fc).map(h=>{const O=de.includes(h.id)||h.isVipOnly&&W;return N.jsxs("div",{className:`item-card ${O?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:qt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:qt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>ht(h),children:O?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),B==="skins"&&N.jsxs("div",{className:"panel-card skins-panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["🎭 ",Z.skinsTitle]}),N.jsxs("div",{className:"skin-3d-live-window",children:[N.jsxs("div",{className:"skin-live-top-tag",children:[N.jsxs("span",{children:["🎥"," ",Y?t==="es"?"VISTA PREVIA 3D ACTIVA":"3D PREVIEW ACTIVE":t==="es"?"VISTA 3D EN TIEMPO REAL":"LIVE 3D PREVIEW"]}),N.jsxs("span",{className:"skin-live-mult-chip",children:[ot.icon," ",Sn.multLabel," (TOTAL x",Mn,")"]})]}),N.jsxs("div",{className:"skin-live-bottom-bar",children:[N.jsxs("span",{children:[ot.name[t],Y?t==="es"?" (PROBANDO)":" (PREVIEW)":""]}),N.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:(Sn.paletteSwatches||[]).map((h,O)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:h}},O))})]})]}),N.jsxs("div",{className:"items-scroll-list",children:[yn(Es).filter(h=>!h.isPro).map(h=>{const O=ea(h.id),he=H.includes(O)||H.includes(h.legacyId),we=ea(ee)===O&&!Y,De=Y===O,Ct=Ii(O);return N.jsxs("div",{className:`item-card ${we||De?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`},children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:qt(h.name,t)}),N.jsxs("div",{className:"skin-palette-preview-badge",children:[yn(Ct.paletteSwatches).map((cn,pn)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:cn}},pn)),N.jsxs("span",{className:"palette-label-text",children:[qt(Ct.paletteLabel,t,Ct.multLabel)," • ",Ct.multLabel]})]}),N.jsx("div",{className:"benefit-pill-tag",children:qt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!we&&N.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:De?"linear-gradient(135deg, #00f2fe, #0284c7)":"rgba(15, 23, 42, 0.85)",color:De?"#04121d":"#bae6fd",border:"1px solid rgba(56, 189, 248, 0.55)"},onClick:()=>He(h),children:De?t==="es"?"👁️ PROBANDO":"👁️ TRYING":t==="es"?"👁️ PROBAR":"👁️ TRY"}),N.jsx("button",{className:`item-action-btn ${we?"equipped":he?"equip":"buy-coins"}`,onClick:()=>it(h),children:we?Z.equipped:he?Z.equip:`🪙 ${(h.price??h.cost??0).toLocaleString()}`})]})]},h.id)}),N.jsxs("h3",{className:"sub-section-title",style:{color:"#fbbf24",borderColor:"rgba(251, 191, 36, 0.45)",marginTop:14},children:["👑"," ",t==="es"?"ASPECTOS ÉLITE (EXCLUSIVOS PRO)":"ELITE SKINS (PRO EXCLUSIVE)"]}),yn(Es).filter(h=>h.isPro).map(h=>{const O=ea(h.id),he=H.includes(O)||H.includes(h.legacyId)||h.isVipOnly&&W,we=ea(ee)===O&&!Y,De=Y===O,Ct=Ii(O);return N.jsxs("div",{className:`item-card vip-city-card ${we||De?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`,boxShadow:`0 0 12px ${h.trimColor}55`},children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[N.jsx("span",{className:"item-title",children:qt(h.name,t)}),N.jsx("span",{style:{fontSize:"0.58rem",fontWeight:900,padding:"2px 6px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.04em"},children:h.proTag?qt(h.proTag,t):"👑 EXCLUSIVO PRO"})]}),N.jsxs("div",{className:"skin-palette-preview-badge",children:[yn(Ct.paletteSwatches).map((cn,pn)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:cn}},pn)),N.jsxs("span",{className:"palette-label-text",children:[qt(Ct.paletteLabel,t,Ct.multLabel)," • ",Ct.multLabel]})]}),N.jsx("div",{className:"benefit-pill-tag pro",children:qt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!we&&N.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:De?"linear-gradient(135deg, #fbbf24, #f59e0b)":"rgba(15, 23, 42, 0.88)",color:De?"#1e1b4b":"#fde68a",border:"1px solid rgba(251, 191, 36, 0.6)"},onClick:()=>He(h),children:De?t==="es"?"👁️ PROBANDO":"👁️ TRYING":t==="es"?"👁️ PROBAR":"👁️ TRY"}),N.jsx("button",{className:`item-action-btn ${we?"equipped":he?"equip":"buy-gems"}`,onClick:()=>it(h),children:we?Z.equipped:he?Z.equip:`👑 ${h.priceUSD||h.usdPrice||`${h.gemCost} 💎`}`})]})]},h.id)}),N.jsx("h3",{className:"sub-section-title",children:Z.polesTitle}),yn(Oc).map(h=>{const O=We.includes(h.id)||h.isVipOnly&&W,he=Ge===h.id;return N.jsxs("div",{className:`item-card ${he?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:qt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:qt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${he?"equipped":O?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Ve(h),children:he?Z.equipped:O?Z.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),B==="league"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("div",{className:"league-banner-top",children:[N.jsxs("div",{children:[N.jsxs("div",{className:"season-chip",children:[Z.seasonTitle," ",N.jsxs("span",{style:{color:"#4ade80",marginLeft:6},children:["● ",dt==="syncing"?"SYNC...":"ONLINE LIVE"]})]}),N.jsx("h2",{className:"panel-heading",children:Z.leagueTitle})]}),N.jsxs("div",{className:"rank-badge-large",children:["#",Ke]})]}),N.jsxs("div",{className:"player-name-bar",children:[N.jsxs("div",{className:"profile-active-summary",children:[N.jsx("span",{className:"profile-flag-big",children:Un}),N.jsxs("div",{className:"profile-text-col",children:[N.jsx("span",{className:"profile-label-mini",children:t==="es"?"COMPETIDOR OFICIAL":"OFFICIAL COMPETITOR"}),N.jsx("span",{className:"profile-name-strong",children:_||"Equilibrista"})]})]}),N.jsxs("button",{type:"button",className:"edit-profile-pill-btn",onClick:$i,children:["✏️ ",t==="es"?"Editar Perfil":"Edit Profile"]})]}),N.jsxs("div",{className:"items-scroll-list",children:[N.jsx("div",{className:"leaderboard-box",children:yn(Xt).map((h,O)=>N.jsxs("div",{className:`leader-row ${h.isPlayer?"is-player":""}`,children:[N.jsx("span",{className:"leader-pos",children:O===0?"🥇":O===1?"🥈":O===2?"🥉":`#${O+1}`}),N.jsx("span",{className:"leader-flag",children:String(h.flag||"🏳️")}),N.jsxs("span",{className:"leader-name",children:[String(h.name||"Equilibrista"),h.isPlayer?t==="es"?" (TÚ)":" (YOU)":""]}),N.jsxs("span",{className:"leader-lp",children:[Number(h.lp??h.score??0).toLocaleString()," LP"]})]},h.id||O))}),N.jsxs("h3",{className:"sub-section-title",children:["🎁 ",Z.seasonPrizes]}),yn(Ax).map(h=>{const O=Qt.includes(h.id),he=!O&&E>=h.requiredLp;return N.jsxs("div",{className:"item-card",children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[h.rankLabel," • ",qt(h.title,t)]}),N.jsxs("div",{className:"item-desc",children:[h.requiredLp.toLocaleString()," LP → +",h.gemsReward," ","💎 & +",h.coinsReward.toLocaleString()," 🪙"]})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":he?"buy-coins":"locked"}`,disabled:!he,onClick:()=>an(h),children:O?Z.claimed:he?Z.claim:`${h.requiredLp} LP`})]},h.id)})]})]}),B==="store"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["💎 ",Z.storeTitle]}),N.jsx("p",{className:"panel-sub",children:Z.storeSubtitle}),N.jsxs("div",{className:"items-scroll-list",children:[yn(Rx).map(h=>{var O,he;return N.jsxs("div",{className:"vip-bundle-card",children:[N.jsxs("div",{className:"vip-bundle-header",children:[N.jsx("span",{className:"vip-icon",children:h.icon}),N.jsxs("div",{children:[N.jsx("div",{className:"vip-title",children:qt(h.name,t)}),N.jsxs("div",{className:"vip-rewards-inline",children:["+",h.gems," 💎 • +",h.coins.toLocaleString()," 🪙"]})]}),N.jsx("button",{className:"vip-buy-btn",onClick:()=>gn(h),children:h.isVipPassBundle&&W?"👑 VIP ACTIVO (+BONO)":h.tag})]}),N.jsx("ul",{className:"vip-perk-list",children:yn(((O=h.perks)==null?void 0:O[t])||((he=h.perks)==null?void 0:he.es)).map((we,De)=>N.jsxs("li",{children:["✓ ",String(we)]},De))})]},h.id)}),N.jsx("h3",{className:"sub-section-title",children:Z.multipliersTitle}),yn(Fc).map(h=>{const O=de.includes(h.id)||h.isVipOnly&&W;return N.jsxs("div",{className:`item-card ${O?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:qt(h.name,t)}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:qt(h.badge,t)}),N.jsx("div",{className:"item-desc",children:qt(h.desc,t)})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>ht(h),children:O?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]})]}),N.jsxs("nav",{className:"bottom-tab-nav",children:[N.jsxs("button",{className:`nav-tab-btn ${B==="home"?"active":""}`,onClick:()=>w("home"),children:[N.jsx("span",{className:"nav-ic",children:"🏙️"}),N.jsx("span",{children:((yt=Z.tabs)==null?void 0:yt.home)||(t==="es"?"Inicio":"Home")})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="armory"?"active":""}`,onClick:()=>w("armory"),children:[N.jsx("span",{className:"nav-ic",children:"⚖️"}),N.jsx("span",{children:((li=Z.tabs)==null?void 0:li.armory)||(t==="es"?"Armería":"Armory")})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="skins"?"active":""}`,onClick:()=>w("skins"),children:[N.jsx("span",{className:"nav-ic",children:"🎭"}),N.jsx("span",{children:((ci=Z.tabs)==null?void 0:ci.skins)||(t==="es"?"Aspectos":"Skins")})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="league"?"active":""}`,onClick:()=>w("league"),children:[N.jsx("span",{className:"nav-ic",children:"🏆"}),N.jsx("span",{children:((Vt=Z.tabs)==null?void 0:Vt.league)||(t==="es"?"Liga":"League")})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="store"?"active":""}`,onClick:()=>w("store"),children:[N.jsx("span",{className:"nav-ic",children:"💎"}),N.jsx("span",{children:((nn=Z.tabs)==null?void 0:nn.store)||(t==="es"?"Tienda":"Shop")})]})]})]}),ae==="paused"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card",children:[N.jsxs("h2",{className:"modal-title",children:["⏸ ",Z.pause]}),N.jsxs("p",{className:"modal-subtitle",children:[ke.city.flag," ",ke.city.name[t]," — ",Z.level," ",o]}),N.jsxs("button",{className:"pause-action-btn primary",onClick:L,children:["▶ ",Z.resume]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>{Wt.current.running=!1,It.updateWind(0),ge("menu")},children:["🏠 ",Z.backToMenu]})]})}),ae==="victory"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card victory",children:[N.jsx("div",{className:"modal-Cover-icon-wrap",children:N.jsx("img",{src:"./icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),N.jsx("h2",{className:"modal-title",children:Z.victoryTitle}),N.jsxs("p",{className:"modal-subtitle",children:[ke.city.flag," ",ke.city.name[t]," • ",Z.level," ",o]}),N.jsxs("div",{className:"rewards-summary-box",children:[N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:Z.score}),N.jsx("strong",{children:Se.scoreEarned.toLocaleString()})]}),N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:Z.coinsEarned}),N.jsxs("strong",{children:["+",Se.coinsEarned.toLocaleString()," 🪙"]})]}),Se.gemsEarned>0&&N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Gemas Ganadas":"Gems Earned"}),N.jsxs("strong",{children:["+",Se.gemsEarned," 💎"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:Z.leaguePointsEarned}),N.jsxs("strong",{children:["+",Se.lpEarned," 🏆"]})]})]}),!Se.doubled&&N.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>Ne("double"),children:Z.doubleRewardsAd}),N.jsxs("button",{className:"pause-action-btn primary",onClick:le,children:[Z.nextLevel," (",Z.level," ",o+1,") ➔"]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>ge("menu"),children:["🏠 ",Z.backToMenu]})]})}),ae==="gameover"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card gameover",children:[N.jsx("div",{className:"modal-Cover-icon-wrap",children:N.jsx("img",{src:"./icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),N.jsx("h2",{className:"modal-title",children:Z.fallTitle}),N.jsx("p",{className:"modal-subtitle",children:Z.fallSub}),N.jsxs("div",{className:"rewards-summary-box",children:[N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:Z.score}),N.jsx("strong",{children:Se.scoreEarned.toLocaleString()})]}),N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:Z.coinsEarned}),N.jsxs("strong",{children:["+",Se.coinsEarned.toLocaleString()," 🪙"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:Z.leaguePointsEarned}),N.jsxs("strong",{children:["+",Se.lpEarned," 🏆"]})]})]}),!Se.revivedOnce&&N.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>Ne("revive"),children:Z.reviveAd}),N.jsxs("button",{className:"pause-action-btn primary",onClick:Ki,children:["🔄 ",Z.retry]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>ge("menu"),children:["🏠 ",Z.backToMenu]})]})}),T&&N.jsx("div",{className:"modal-backdrop ad-layer",children:N.jsxs("div",{className:"modal-card",style:{border:"1.5px solid rgba(251, 191, 36, 0.75)",boxShadow:"0 0 36px rgba(245, 158, 11, 0.35)",maxWidth:365},children:[N.jsx("div",{style:{fontSize:"2.35rem",marginBottom:4,filter:"drop-shadow(0 0 12px rgba(251, 191, 36, 0.7))"},children:T.icon}),N.jsx("span",{style:{display:"inline-block",fontSize:"0.64rem",fontWeight:900,padding:"3px 10px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.06em",marginBottom:8},children:t==="es"?"👑 PASARELA VIP • ASPECTO ÉLITE PRO":"👑 VIP CHECKOUT • ELITE PRO SKIN"}),N.jsx("h2",{className:"modal-title",style:{fontSize:"1.15rem",marginBottom:4},children:T.name[t]}),N.jsx("p",{className:"modal-subtitle",style:{fontSize:"0.78rem",marginBottom:10},children:T.desc[t]}),N.jsxs("div",{className:"rewards-summary-box",style:{marginBottom:12},children:[N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:t==="es"?"Multiplicador Activo":"Active Multiplier"}),N.jsxs("strong",{children:["x",T.mult||T.bonusMult," LP & 🪙"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Resistencia al Viento":"Wind Resistance"}),N.jsxs("strong",{children:["-",Math.round((T.windResist||T.windReduction||0)*100),"%"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Estabilidad sobre el Cable":"Cable Stability"}),N.jsxs("strong",{children:["+",Math.round((1-(T.gravityMod??1))*100),"%"]})]}),N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:t==="es"?"Ventana Imán Malabares":"Juggle Magnet Window"}),N.jsxs("strong",{children:["+",Math.round(((T.catchBonus||1)-1)*100),"%"]})]}),(T.freeShields||0)>0&&N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:t==="es"?"Escudo Anti-Caída Gratis":"Free Anti-Fall Shield"}),N.jsxs("strong",{children:["+",T.freeShields," / ",t==="es"?"Nivel":"Level"," 🛡️"]})]})]}),N.jsx("button",{className:"pause-action-btn ad-gold",style:{marginBottom:8,fontWeight:900},onClick:()=>Qe(T,!1),children:t==="es"?`✅ CONFIRMAR Y EQUIPAR (${T.priceUSD||T.usdPrice})`:`✅ CONFIRM & EQUIP (${T.priceUSD||T.usdPrice})`}),T.gemCost&&y>=T.gemCost&&N.jsx("button",{className:"pause-action-btn primary",style:{marginBottom:8},onClick:()=>Qe(T,!0),children:t==="es"?`💎 CANJEAR CON ${T.gemCost} GEMAS Y EQUIPAR`:`💎 REDEEM WITH ${T.gemCost} GEMS & EQUIP`}),N.jsx("button",{className:"pause-action-btn secondary",onClick:()=>ce(null),children:t==="es"?"Seguir Probando en 3D":"Keep Trying in 3D"})]})}),Pe&&N.jsx("div",{className:"modal-backdrop ad-layer",children:N.jsxs("div",{className:"modal-card",children:[N.jsx("div",{className:"modal-big-icon",children:"🎬"}),N.jsx("h2",{className:"modal-title",children:Z.adWatching}),N.jsx("p",{className:"modal-subtitle",children:ye>0?`${Z.adSeconds} ${ye}s...`:"✅ ¡Listo!"}),N.jsx("button",{className:"pause-action-btn primary",disabled:ye>0,onClick:oe,children:ye>0?`${ye}s`:Z.adCollect})]})})]})})}function wg(){try{localStorage.setItem("nma_equipped_skin","urbano");const r=localStorage.getItem("nma_owned_skins");let e=["urbano"];if(r)try{const s=JSON.parse(r);Array.isArray(s)&&(e=Array.from(new Set(["urbano",...s.filter(o=>typeof o=="string")])))}catch{e=["urbano"]}localStorage.setItem("nma_owned_skins",JSON.stringify(e));const t=localStorage.getItem(Ao);if(t)try{const s=JSON.parse(t);if(s&&typeof s=="object"&&!Array.isArray(s)){const o={lang:s.lang==="en"?"en":"es",level:Number.isFinite(Number(s.level))?Math.max(1,Math.floor(Number(s.level))):1,coins:Number.isFinite(Number(s.coins))?Math.max(0,Math.floor(Number(s.coins))):1200,gems:Number.isFinite(Number(s.gems))?Math.max(0,Math.floor(Number(s.gems))):60,bestScore:Number.isFinite(Number(s.bestScore))?Math.max(0,Math.floor(Number(s.bestScore))):0,leaguePoints:Number.isFinite(Number(s.leaguePoints))?Math.max(0,Math.floor(Number(s.leaguePoints))):320,playerName:typeof s.playerName=="string"?s.playerName:"Equilibrista",playerCountry:typeof s.playerCountry=="string"?s.playerCountry:"AR",vipPassActive:!!s.vipPassActive,ownedSkins:e,unlockedSkins:e,equippedSkin:"urbano",unlockedPoles:Array.isArray(s.unlockedPoles)?s.unlockedPoles:["pole_basic"],equippedPole:"pole_basic",ownedMultipliers:Array.isArray(s.ownedMultipliers)?s.ownedMultipliers:[],unlockedVipCities:Array.isArray(s.unlockedVipCities)?s.unlockedVipCities:[],activeVipCityId:null,unlockedProps:Array.isArray(s.unlockedProps)?s.unlockedProps:["balls"],equippedProp:"balls",gearLevels:{pole:0,boots:0,gloves:0},claimedTiers:Array.isArray(s.claimedTiers)?s.claimedTiers:[],soundEnabled:s.soundEnabled??!0};localStorage.setItem(Ao,JSON.stringify(o))}else localStorage.removeItem(Ao)}catch{localStorage.removeItem(Ao)}}catch(r){console.warn("Storage auto-recovery warning:",r)}}class cw extends gx.Component{constructor(t){super(t);a0(this,"handleRestartInterface",()=>{wg(),this.setState({hasError:!1,error:null}),window.location.href=window.location.pathname+"?reset="+Date.now()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t||new Error("Unknown render error")}}componentDidCatch(t,s){console.error("ErrorBoundary caught error:",t,s),wg()}render(){var t,s;if(this.state.hasError){const o=((t=this.state.error)==null?void 0:t.toString())||"Unknown Error",l=(s=this.state.error)!=null&&s.stack?this.state.error.stack.split(`
`).slice(0,4).join(`
`):"";return N.jsx("div",{style:{minHeight:"100dvh",width:"100vw",background:"radial-gradient(circle at 50% 30%, #0f172a 0%, #020617 100%)",color:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",fontFamily:"system-ui, -apple-system, sans-serif",textAlign:"center"},children:N.jsxs("div",{style:{maxWidth:"400px",width:"100%",background:"rgba(15, 23, 42, 0.94)",border:"1px solid rgba(56, 189, 248, 0.45)",borderRadius:"20px",padding:"24px 20px",boxShadow:"0 20px 50px rgba(0, 0, 0, 0.7)"},children:[N.jsx("div",{style:{fontSize:"2.4rem",marginBottom:"10px"},children:"⚡"}),N.jsx("h2",{style:{margin:"0 0 8px",fontSize:"1.15rem",fontWeight:900,color:"#38bdf8",letterSpacing:"0.04em"},children:"AUTO-RECUPERACIÓN DE INTERFAZ"}),N.jsx("p",{style:{margin:"0 0 12px",fontSize:"0.84rem",lineHeight:1.45,color:"#cbd5e1"},children:"Se reparó automáticamente una configuración visual antigua en caché. Tu progreso, nivel, monedas y perfil están intactos."}),N.jsxs("pre",{style:{margin:"0 0 16px",padding:"10px",borderRadius:"8px",background:"rgba(2, 6, 23, 0.85)",border:"1px solid rgba(248, 113, 113, 0.35)",color:"#fca5a5",fontSize:"0.68rem",textAlign:"left",overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[o,l?`
${l}`:""]}),N.jsx("button",{type:"button",onClick:this.handleRestartInterface,style:{width:"100%",padding:"13px 16px",borderRadius:"12px",border:"1px solid #38bdf8",background:"linear-gradient(135deg, #0284c7 0%, #00f2fe 100%)",color:"#020617",fontWeight:900,fontSize:"0.92rem",cursor:"pointer",boxShadow:"0 0 20px rgba(0, 242, 254, 0.4)"},children:"🔄 REINICIAR INTERFAZ"})]})})}return this.props.children}}Mx.createRoot(document.getElementById("root")).render(N.jsx(nt.StrictMode,{children:N.jsx(cw,{children:N.jsx(lw,{})})}));
