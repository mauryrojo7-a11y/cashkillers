(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cu={exports:{}},ja={},Ru={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function dv(){if(Gp)return yt;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(I,oe,Se){this.props=I,this.context=oe,this.refs=b,this.updater=Se||M}x.prototype.isReactComponent={},x.prototype.setState=function(I,oe){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,oe,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=x.prototype;function D(I,oe,Se){this.props=I,this.context=oe,this.refs=b,this.updater=Se||M}var z=D.prototype=new v;z.constructor=D,A(z,x.prototype),z.isPureReactComponent=!0;var C=Array.isArray,P=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(I,oe,Se){var Ve,Fe={},Oe=null,le=null;if(oe!=null)for(Ve in oe.ref!==void 0&&(le=oe.ref),oe.key!==void 0&&(Oe=""+oe.key),oe)P.call(oe,Ve)&&!F.hasOwnProperty(Ve)&&(Fe[Ve]=oe[Ve]);var $=arguments.length-2;if($===1)Fe.children=Se;else if(1<$){for(var Re=Array($),He=0;He<$;He++)Re[He]=arguments[He+2];Fe.children=Re}if(I&&I.defaultProps)for(Ve in $=I.defaultProps,$)Fe[Ve]===void 0&&(Fe[Ve]=$[Ve]);return{$$typeof:s,type:I,key:Oe,ref:le,props:Fe,_owner:L.current}}function N(I,oe){return{$$typeof:s,type:I.type,key:oe,ref:I.ref,props:I.props,_owner:I._owner}}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function j(I){var oe={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Se){return oe[Se]})}var Z=/\/+/g;function re(I,oe){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):oe.toString(36)}function X(I,oe,Se,Ve,Fe){var Oe=typeof I;(Oe==="undefined"||Oe==="boolean")&&(I=null);var le=!1;if(I===null)le=!0;else switch(Oe){case"string":case"number":le=!0;break;case"object":switch(I.$$typeof){case s:case e:le=!0}}if(le)return le=I,Fe=Fe(le),I=Ve===""?"."+re(le,0):Ve,C(Fe)?(Se="",I!=null&&(Se=I.replace(Z,"$&/")+"/"),X(Fe,oe,Se,"",function(He){return He})):Fe!=null&&(k(Fe)&&(Fe=N(Fe,Se+(!Fe.key||le&&le.key===Fe.key?"":(""+Fe.key).replace(Z,"$&/")+"/")+I)),oe.push(Fe)),1;if(le=0,Ve=Ve===""?".":Ve+":",C(I))for(var $=0;$<I.length;$++){Oe=I[$];var Re=Ve+re(Oe,$);le+=X(Oe,oe,Se,Re,Fe)}else if(Re=g(I),typeof Re=="function")for(I=Re.call(I),$=0;!(Oe=I.next()).done;)Oe=Oe.value,Re=Ve+re(Oe,$++),le+=X(Oe,oe,Se,Re,Fe);else if(Oe==="object")throw oe=String(I),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return le}function Q(I,oe,Se){if(I==null)return I;var Ve=[],Fe=0;return X(I,Ve,"","",function(Oe){return oe.call(Se,Oe,Fe++)}),Ve}function pe(I){if(I._status===-1){var oe=I._result;oe=oe(),oe.then(function(Se){(I._status===0||I._status===-1)&&(I._status=1,I._result=Se)},function(Se){(I._status===0||I._status===-1)&&(I._status=2,I._result=Se)}),I._status===-1&&(I._status=0,I._result=oe)}if(I._status===1)return I._result.default;throw I._result}var ie={current:null},q={transition:null},ee={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function ne(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:Q,forEach:function(I,oe,Se){Q(I,function(){oe.apply(this,arguments)},Se)},count:function(I){var oe=0;return Q(I,function(){oe++}),oe},toArray:function(I){return Q(I,function(oe){return oe})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},yt.Component=x,yt.Fragment=n,yt.Profiler=o,yt.PureComponent=D,yt.StrictMode=r,yt.Suspense=m,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,yt.act=ne,yt.cloneElement=function(I,oe,Se){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ve=A({},I.props),Fe=I.key,Oe=I.ref,le=I._owner;if(oe!=null){if(oe.ref!==void 0&&(Oe=oe.ref,le=L.current),oe.key!==void 0&&(Fe=""+oe.key),I.type&&I.type.defaultProps)var $=I.type.defaultProps;for(Re in oe)P.call(oe,Re)&&!F.hasOwnProperty(Re)&&(Ve[Re]=oe[Re]===void 0&&$!==void 0?$[Re]:oe[Re])}var Re=arguments.length-2;if(Re===1)Ve.children=Se;else if(1<Re){$=Array(Re);for(var He=0;He<Re;He++)$[He]=arguments[He+2];Ve.children=$}return{$$typeof:s,type:I.type,key:Fe,ref:Oe,props:Ve,_owner:le}},yt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},yt.createElement=E,yt.createFactory=function(I){var oe=E.bind(null,I);return oe.type=I,oe},yt.createRef=function(){return{current:null}},yt.forwardRef=function(I){return{$$typeof:f,render:I}},yt.isValidElement=k,yt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:pe}},yt.memo=function(I,oe){return{$$typeof:p,type:I,compare:oe===void 0?null:oe}},yt.startTransition=function(I){var oe=q.transition;q.transition={};try{I()}finally{q.transition=oe}},yt.unstable_act=ne,yt.useCallback=function(I,oe){return ie.current.useCallback(I,oe)},yt.useContext=function(I){return ie.current.useContext(I)},yt.useDebugValue=function(){},yt.useDeferredValue=function(I){return ie.current.useDeferredValue(I)},yt.useEffect=function(I,oe){return ie.current.useEffect(I,oe)},yt.useId=function(){return ie.current.useId()},yt.useImperativeHandle=function(I,oe,Se){return ie.current.useImperativeHandle(I,oe,Se)},yt.useInsertionEffect=function(I,oe){return ie.current.useInsertionEffect(I,oe)},yt.useLayoutEffect=function(I,oe){return ie.current.useLayoutEffect(I,oe)},yt.useMemo=function(I,oe){return ie.current.useMemo(I,oe)},yt.useReducer=function(I,oe,Se){return ie.current.useReducer(I,oe,Se)},yt.useRef=function(I){return ie.current.useRef(I)},yt.useState=function(I){return ie.current.useState(I)},yt.useSyncExternalStore=function(I,oe,Se){return ie.current.useSyncExternalStore(I,oe,Se)},yt.useTransition=function(){return ie.current.useTransition()},yt.version="18.3.1",yt}var Vp;function ef(){return Vp||(Vp=1,Ru.exports=dv()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function fv(){if(Hp)return ja;Hp=1;var s=ef(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var _,S={},g=null,M=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(M=m.ref);for(_ in m)r.call(m,_)&&!l.hasOwnProperty(_)&&(S[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)S[_]===void 0&&(S[_]=m[_]);return{$$typeof:e,type:f,key:g,ref:M,props:S,_owner:o.current}}return ja.Fragment=n,ja.jsx=u,ja.jsxs=u,ja}var Wp;function hv(){return Wp||(Wp=1,Cu.exports=fv()),Cu.exports}var G=hv(),vt=ef();const pv=Km(vt);var pl={},bu={exports:{}},ei={},Pu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function mv(){return Xp||(Xp=1,(function(s){function e(q,ee){var ne=q.length;q.push(ee);e:for(;0<ne;){var I=ne-1>>>1,oe=q[I];if(0<o(oe,ee))q[I]=ee,q[ne]=oe,ne=I;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],ne=q.pop();if(ne!==ee){q[0]=ne;e:for(var I=0,oe=q.length,Se=oe>>>1;I<Se;){var Ve=2*(I+1)-1,Fe=q[Ve],Oe=Ve+1,le=q[Oe];if(0>o(Fe,ne))Oe<oe&&0>o(le,Fe)?(q[I]=le,q[Oe]=ne,I=Oe):(q[I]=Fe,q[Ve]=ne,I=Ve);else if(Oe<oe&&0>o(le,ne))q[I]=le,q[Oe]=ne,I=Oe;else break e}}return ee}function o(q,ee){var ne=q.sortIndex-ee.sortIndex;return ne!==0?ne:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],p=[],_=1,S=null,g=3,M=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(q){for(var ee=n(p);ee!==null;){if(ee.callback===null)r(p);else if(ee.startTime<=q)r(p),ee.sortIndex=ee.expirationTime,e(m,ee);else break;ee=n(p)}}function C(q){if(b=!1,z(q),!A)if(n(m)!==null)A=!0,pe(P);else{var ee=n(p);ee!==null&&ie(C,ee.startTime-q)}}function P(q,ee){A=!1,b&&(b=!1,v(E),E=-1),M=!0;var ne=g;try{for(z(ee),S=n(m);S!==null&&(!(S.expirationTime>ee)||q&&!j());){var I=S.callback;if(typeof I=="function"){S.callback=null,g=S.priorityLevel;var oe=I(S.expirationTime<=ee);ee=s.unstable_now(),typeof oe=="function"?S.callback=oe:S===n(m)&&r(m),z(ee)}else r(m);S=n(m)}if(S!==null)var Se=!0;else{var Ve=n(p);Ve!==null&&ie(C,Ve.startTime-ee),Se=!1}return Se}finally{S=null,g=ne,M=!1}}var L=!1,F=null,E=-1,N=5,k=-1;function j(){return!(s.unstable_now()-k<N)}function Z(){if(F!==null){var q=s.unstable_now();k=q;var ee=!0;try{ee=F(!0,q)}finally{ee?re():(L=!1,F=null)}}else L=!1}var re;if(typeof D=="function")re=function(){D(Z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=Z,re=function(){Q.postMessage(null)}}else re=function(){x(Z,0)};function pe(q){F=q,L||(L=!0,re())}function ie(q,ee){E=x(function(){q(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,pe(P))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(q){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var ne=g;g=ee;try{return q()}finally{g=ne}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=g;g=q;try{return ee()}finally{g=ne}},s.unstable_scheduleCallback=function(q,ee,ne){var I=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?I+ne:I):ne=I,q){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,q={id:_++,callback:ee,priorityLevel:q,startTime:ne,expirationTime:oe,sortIndex:-1},ne>I?(q.sortIndex=ne,e(p,q),n(m)===null&&q===n(p)&&(b?(v(E),E=-1):b=!0,ie(C,ne-I))):(q.sortIndex=oe,e(m,q),A||M||(A=!0,pe(P))),q},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(q){var ee=g;return function(){var ne=g;g=ee;try{return q.apply(this,arguments)}finally{g=ne}}}})(Lu)),Lu}var Yp;function gv(){return Yp||(Yp=1,Pu.exports=mv()),Pu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function vv(){if(qp)return ei;qp=1;var s=ef(),e=gv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function g(t){return m.call(S,t)?!0:m.call(_,t)?!1:p.test(t)?S[t]=!0:(_[t]=!0,!1)}function M(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,c){if(i===null||typeof i>"u"||M(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,a,c,d,h,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);x[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);x[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);x[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),q=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,I;function oe(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Se=!1;function Ve(t,i){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(t,[],i)}else{try{i.call()}catch(me){c=me}t.call(i.prototype)}else{try{throw Error()}catch(me){c=me}t()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var d=me.stack.split(`
`),h=c.stack.split(`
`),T=d.length-1,O=h.length-1;1<=T&&0<=O&&d[T]!==h[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==h[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==h[O]){var W=`
`+d[T].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=T&&0<=O);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?oe(t):""}function Fe(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=Ve(t.type,!1),t;case 11:return t=Ve(t.type.render,!1),t;case 1:return t=Ve(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case L:return"Portal";case N:return"Profiler";case E:return"StrictMode";case re:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j:return(t.displayName||"Context")+".Consumer";case k:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:Oe(t.type)||"Memo";case pe:i=t._payload,t=t._init;try{return Oe(t(i))}catch{}}return null}function le(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function $(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(t){var i=Re(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,h.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function De(t){t._valueTracker||(t._valueTracker=He(t))}function tt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Re(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function We(t,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function at(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=$(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mt(t,i){i=i.checked,i!=null&&z(t,"checked",i,!1)}function ot(t,i){Mt(t,i);var a=$(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(t,i.type,$(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function xt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Vt(t,i,a){(i!=="number"||Ot(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var kt=Array.isArray;function ut(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+$(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Bt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(kt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:$(a)}}function $t(t,i){var a=$(i.value),c=$(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Et(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function U(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?U(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var te,de=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(te=te||document.createElement("div"),te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=te.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ve(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){Le.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function R(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function B(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=R(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var _e=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(t,i){if(i){if(_e[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ye(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function Be(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,$e=null,H=null;function Ae(t){if(t=Ia(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=bo(i),Ne(t.stateNode,t.type,i))}}function ge(t){$e?H?H.push(t):H=[t]:$e=t}function be(){if($e){var t=$e,i=H;if(H=$e=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function Ie(t,i){return t(i)}function Me(){}var Ze=!1;function qe(t,i,a){if(Ze)return t(i,a);Ze=!0;try{return Ie(t,i,a)}finally{Ze=!1,($e!==null||H!==null)&&(Me(),be())}}function wt(t,i){var a=t.stateNode;if(a===null)return null;var c=bo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var St=!1;if(f)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){St=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{St=!1}function An(t,i,a,c,d,h,T,O,W){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Te){this.onError(Te)}}var mn=!1,Wt=null,Xn=!1,Cn=null,ga={onError:function(t){mn=!0,Wt=t}};function Es(t,i,a,c,d,h,T,O,W){mn=!1,Wt=null,An.apply(ga,arguments)}function Ts(t,i,a,c,d,h,T,O,W){if(Es.apply(this,arguments),mn){if(mn){var me=Wt;mn=!1,Wt=null}else throw Error(n(198));Xn||(Xn=!0,Cn=me)}}function Rn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function rr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function pt(t){if(Rn(t)!==t)throw Error(n(188))}function Yt(t){var i=t.alternate;if(!i){if(i=Rn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return pt(d),t;if(h===c)return pt(d),i;h=h.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=h;else{for(var T=!1,O=d.child;O;){if(O===a){T=!0,a=d,c=h;break}if(O===c){T=!0,c=d,a=h;break}O=O.sibling}if(!T){for(O=h.child;O;){if(O===a){T=!0,a=h,c=d;break}if(O===c){T=!0,c=h,a=d;break}O=O.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function dn(t){return t=Yt(t),t!==null?rn(t):null}function rn(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=rn(t);if(i!==null)return i;t=t.sibling}return null}var qt=e.unstable_scheduleCallback,yn=e.unstable_cancelCallback,Nn=e.unstable_shouldYield,In=e.unstable_requestPaint,Tt=e.unstable_now,Ei=e.unstable_getCurrentPriorityLevel,sr=e.unstable_ImmediatePriority,Vi=e.unstable_UserBlockingPriority,w=e.unstable_NormalPriority,Y=e.unstable_LowPriority,he=e.unstable_IdlePriority,ae=null,se=null;function ze(t){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ae,t,void 0,(t.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:nt,ke=Math.log,Je=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(ke(t)/Je|0)|0}var ft=64,mt=4194304;function je(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,T=a&268435455;if(T!==0){var O=T&~d;O!==0?c=je(O):(h&=T,h!==0&&(c=je(h)))}else T=a&~d,T!==0?c=je(T):h!==0&&(c=je(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Ue(i),d=1<<a,c|=t[a],i&=~d;return c}function sn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var T=31-Ue(h),O=1<<T,W=d[T];W===-1?((O&a)===0||(O&c)!==0)&&(d[T]=sn(O,i)):W<=i&&(t.expiredLanes|=O),h&=~O}}function Ft(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),t}function Xe(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ln(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ue(i),t[i]=a}function Ct(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Ue(a),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~h}}function Dn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ue(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var gt=0;function Ti(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ar,It,Zt,wi,zt,pi=!1,Ai=[],Ci=null,wr=null,Ar=null,va=new Map,_a=new Map,Cr=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(t,i){switch(t){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":va.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(i.pointerId)}}function xa(t,i,a,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Ia(i),i!==null&&It(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Dg(t,i,a,c,d){switch(i){case"focusin":return Ci=xa(Ci,t,i,a,c,d),!0;case"dragenter":return wr=xa(wr,t,i,a,c,d),!0;case"mouseover":return Ar=xa(Ar,t,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return va.set(h,xa(va.get(h)||null,t,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,_a.set(h,xa(_a.get(h)||null,t,i,a,c,d)),!0}return!1}function wf(t){var i=Jr(t.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=rr(a),i!==null){t.blockedOn=i,zt(t.priority,function(){Zt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ec(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);V=c,a.target.dispatchEvent(c),V=null}else return i=Ia(a),i!==null&&It(i),t.blockedOn=a,!1;i.shift()}return!0}function Af(t,i,a){mo(t)&&a.delete(i)}function Ug(){pi=!1,Ci!==null&&mo(Ci)&&(Ci=null),wr!==null&&mo(wr)&&(wr=null),Ar!==null&&mo(Ar)&&(Ar=null),va.forEach(Af),_a.forEach(Af)}function Sa(t,i){t.blockedOn===i&&(t.blockedOn=null,pi||(pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ug)))}function ya(t){function i(d){return Sa(d,t)}if(0<Ai.length){Sa(Ai[0],t);for(var a=1;a<Ai.length;a++){var c=Ai[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Ci!==null&&Sa(Ci,t),wr!==null&&Sa(wr,t),Ar!==null&&Sa(Ar,t),va.forEach(i),_a.forEach(i),a=0;a<Cr.length;a++)c=Cr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Cr.length&&(a=Cr[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&Cr.shift()}var ws=C.ReactCurrentBatchConfig,go=!0;function Fg(t,i,a,c){var d=gt,h=ws.transition;ws.transition=null;try{gt=1,Ql(t,i,a,c)}finally{gt=d,ws.transition=h}}function Og(t,i,a,c){var d=gt,h=ws.transition;ws.transition=null;try{gt=4,Ql(t,i,a,c)}finally{gt=d,ws.transition=h}}function Ql(t,i,a,c){if(go){var d=ec(t,i,a,c);if(d===null)vc(t,i,c,vo,a),Tf(t,c);else if(Dg(d,t,i,a,c))c.stopPropagation();else if(Tf(t,c),i&4&&-1<Ig.indexOf(t)){for(;d!==null;){var h=Ia(d);if(h!==null&&ar(h),h=ec(t,i,a,c),h===null&&vc(t,i,c,vo,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else vc(t,i,c,null,a)}}var vo=null;function ec(t,i,a,c){if(vo=null,t=Be(c),t=Jr(t),t!==null)if(i=Rn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=rr(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return vo=t,null}function Cf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ei()){case sr:return 1;case Vi:return 4;case w:case Y:return 16;case he:return 536870912;default:return 16}default:return 16}}var Rr=null,tc=null,_o=null;function Rf(){if(_o)return _o;var t,i=tc,a=i.length,c,d="value"in Rr?Rr.value:Rr.textContent,h=d.length;for(t=0;t<a&&i[t]===d[t];t++);var T=a-t;for(c=1;c<=T&&i[a-c]===d[h-c];c++);return _o=d.slice(t,1<c?1-c:void 0)}function xo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function bf(){return!1}function ri(t){function i(a,c,d,h,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(h):h[O]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?So:bf,this.isPropagationStopped=bf,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),i}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=ri(As),Ma=ne({},As,{view:0,detail:0}),kg=ri(Ma),ic,rc,Ea,yo=ne({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(ic=t.screenX-Ea.screenX,rc=t.screenY-Ea.screenY):rc=ic=0,Ea=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),Pf=ri(yo),Bg=ne({},yo,{dataTransfer:0}),zg=ri(Bg),Gg=ne({},Ma,{relatedTarget:0}),sc=ri(Gg),Vg=ne({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Hg=ri(Vg),Wg=ne({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xg=ri(Wg),Yg=ne({},As,{data:0}),Lf=ri(Yg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Kg[t])?!!i[t]:!1}function ac(){return $g}var Zg=ne({},Ma,{key:function(t){if(t.key){var i=qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jg=ri(Zg),Qg=ne({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=ri(Qg),e0=ne({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),t0=ri(e0),n0=ne({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=ri(n0),r0=ne({},yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=ri(r0),a0=[9,13,27,32],oc=f&&"CompositionEvent"in window,Ta=null;f&&"documentMode"in document&&(Ta=document.documentMode);var o0=f&&"TextEvent"in window&&!Ta,If=f&&(!oc||Ta&&8<Ta&&11>=Ta),Df=" ",Uf=!1;function Ff(t,i){switch(t){case"keyup":return a0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function l0(t,i){switch(t){case"compositionend":return Of(i);case"keypress":return i.which!==32?null:(Uf=!0,Df);case"textInput":return t=i.data,t===Df&&Uf?null:t;default:return null}}function c0(t,i){if(Cs)return t==="compositionend"||!oc&&Ff(t,i)?(t=Rf(),_o=tc=Rr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return If&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Bf(t,i,a,c){ge(c),i=Ao(i,"onChange"),0<i.length&&(a=new nc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var wa=null,Aa=null;function d0(t){ih(t,0)}function Mo(t){var i=Ns(t);if(tt(i))return t}function f0(t,i){if(t==="change")return i}var zf=!1;if(f){var lc;if(f){var cc="oninput"in document;if(!cc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),cc=typeof Gf.oninput=="function"}lc=cc}else lc=!1;zf=lc&&(!document.documentMode||9<document.documentMode)}function Vf(){wa&&(wa.detachEvent("onpropertychange",Hf),Aa=wa=null)}function Hf(t){if(t.propertyName==="value"&&Mo(Aa)){var i=[];Bf(i,Aa,t,Be(t)),qe(d0,i)}}function h0(t,i,a){t==="focusin"?(Vf(),wa=i,Aa=a,wa.attachEvent("onpropertychange",Hf)):t==="focusout"&&Vf()}function p0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mo(Aa)}function m0(t,i){if(t==="click")return Mo(i)}function g0(t,i){if(t==="input"||t==="change")return Mo(i)}function v0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ri=typeof Object.is=="function"?Object.is:v0;function Ca(t,i){if(Ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!Ri(t[d],i[d]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,i){var a=Wf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wf(a)}}function Yf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qf(){for(var t=window,i=Ot();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Ot(t.document)}return i}function uc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function _0(t){var i=qf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Yf(a.ownerDocument.documentElement,a)){if(c!==null&&uc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=Xf(a,h);var T=Xf(a,c);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=f&&"documentMode"in document&&11>=document.documentMode,Rs=null,dc=null,Ra=null,fc=!1;function jf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Rs==null||Rs!==Ot(c)||(c=Rs,"selectionStart"in c&&uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ra&&Ca(Ra,c)||(Ra=c,c=Ao(dc,"onSelect"),0<c.length&&(i=new nc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=Rs)))}function Eo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var bs={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},hc={},Kf={};f&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function To(t){if(hc[t])return hc[t];if(!bs[t])return t;var i=bs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Kf)return hc[t]=i[a];return t}var $f=To("animationend"),Zf=To("animationiteration"),Jf=To("animationstart"),Qf=To("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,i){eh.set(t,i),l(i,[t])}for(var pc=0;pc<th.length;pc++){var mc=th[pc],S0=mc.toLowerCase(),y0=mc[0].toUpperCase()+mc.slice(1);br(S0,"on"+y0)}br($f,"onAnimationEnd"),br(Zf,"onAnimationIteration"),br(Jf,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(Qf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function nh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,Ts(c,i,void 0,t),t.currentTarget=null}function ih(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],W=O.instance,me=O.currentTarget;if(O=O.listener,W!==h&&d.isPropagationStopped())break e;nh(d,O,me),h=W}else for(T=0;T<c.length;T++){if(O=c[T],W=O.instance,me=O.currentTarget,O=O.listener,W!==h&&d.isPropagationStopped())break e;nh(d,O,me),h=W}}}if(Xn)throw t=Cn,Xn=!1,Cn=null,t}function jt(t,i){var a=i[Ec];a===void 0&&(a=i[Ec]=new Set);var c=t+"__bubble";a.has(c)||(rh(i,t,2,!1),a.add(c))}function gc(t,i,a){var c=0;i&&(c|=4),rh(a,t,c,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[wo]){t[wo]=!0,r.forEach(function(a){a!=="selectionchange"&&(M0.has(a)||gc(a,!1,t),gc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wo]||(i[wo]=!0,gc("selectionchange",!1,i))}}function rh(t,i,a,c){switch(Cf(i)){case 1:var d=Fg;break;case 4:d=Og;break;default:d=Ql}a=d.bind(null,i,a,t),d=void 0,!St||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function vc(t,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;O!==null;){if(T=Jr(O),T===null)return;if(W=T.tag,W===5||W===6){c=h=T;continue e}O=O.parentNode}}c=c.return}qe(function(){var me=h,Te=Be(a),Ce=[];e:{var Ee=eh.get(t);if(Ee!==void 0){var Ye=nc,Qe=t;switch(t){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":Ye=Jg;break;case"focusin":Qe="focus",Ye=sc;break;case"focusout":Qe="blur",Ye=sc;break;case"beforeblur":case"afterblur":Ye=sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=t0;break;case $f:case Zf:case Jf:Ye=Hg;break;case Qf:Ye=i0;break;case"scroll":Ye=kg;break;case"wheel":Ye=s0;break;case"copy":case"cut":case"paste":Ye=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=Nf}var et=(i&4)!==0,cn=!et&&t==="scroll",ce=et?Ee!==null?Ee+"Capture":null:Ee;et=[];for(var J=me,fe;J!==null;){fe=J;var Pe=fe.stateNode;if(fe.tag===5&&Pe!==null&&(fe=Pe,ce!==null&&(Pe=wt(J,ce),Pe!=null&&et.push(La(J,Pe,fe)))),cn)break;J=J.return}0<et.length&&(Ee=new Ye(Ee,Qe,null,a,Te),Ce.push({event:Ee,listeners:et}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Ye=t==="mouseout"||t==="pointerout",Ee&&a!==V&&(Qe=a.relatedTarget||a.fromElement)&&(Jr(Qe)||Qe[or]))break e;if((Ye||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ye?(Qe=a.relatedTarget||a.toElement,Ye=me,Qe=Qe?Jr(Qe):null,Qe!==null&&(cn=Rn(Qe),Qe!==cn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Ye=null,Qe=me),Ye!==Qe)){if(et=Pf,Pe="onMouseLeave",ce="onMouseEnter",J="mouse",(t==="pointerout"||t==="pointerover")&&(et=Nf,Pe="onPointerLeave",ce="onPointerEnter",J="pointer"),cn=Ye==null?Ee:Ns(Ye),fe=Qe==null?Ee:Ns(Qe),Ee=new et(Pe,J+"leave",Ye,a,Te),Ee.target=cn,Ee.relatedTarget=fe,Pe=null,Jr(Te)===me&&(et=new et(ce,J+"enter",Qe,a,Te),et.target=fe,et.relatedTarget=cn,Pe=et),cn=Pe,Ye&&Qe)t:{for(et=Ye,ce=Qe,J=0,fe=et;fe;fe=Ps(fe))J++;for(fe=0,Pe=ce;Pe;Pe=Ps(Pe))fe++;for(;0<J-fe;)et=Ps(et),J--;for(;0<fe-J;)ce=Ps(ce),fe--;for(;J--;){if(et===ce||ce!==null&&et===ce.alternate)break t;et=Ps(et),ce=Ps(ce)}et=null}else et=null;Ye!==null&&sh(Ce,Ee,Ye,et,!1),Qe!==null&&cn!==null&&sh(Ce,cn,Qe,et,!0)}}e:{if(Ee=me?Ns(me):window,Ye=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Ee.type==="file")var it=f0;else if(kf(Ee))if(zf)it=g0;else{it=p0;var rt=h0}else(Ye=Ee.nodeName)&&Ye.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(it=m0);if(it&&(it=it(t,me))){Bf(Ce,it,a,Te);break e}rt&&rt(t,Ee,me),t==="focusout"&&(rt=Ee._wrapperState)&&rt.controlled&&Ee.type==="number"&&Vt(Ee,"number",Ee.value)}switch(rt=me?Ns(me):window,t){case"focusin":(kf(rt)||rt.contentEditable==="true")&&(Rs=rt,dc=me,Ra=null);break;case"focusout":Ra=dc=Rs=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,jf(Ce,a,Te);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":jf(Ce,a,Te)}var st;if(oc)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Cs?Ff(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(If&&a.locale!=="ko"&&(Cs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Cs&&(st=Rf()):(Rr=Te,tc="value"in Rr?Rr.value:Rr.textContent,Cs=!0)),rt=Ao(me,lt),0<rt.length&&(lt=new Lf(lt,t,null,a,Te),Ce.push({event:lt,listeners:rt}),st?lt.data=st:(st=Of(a),st!==null&&(lt.data=st)))),(st=o0?l0(t,a):c0(t,a))&&(me=Ao(me,"onBeforeInput"),0<me.length&&(Te=new Lf("onBeforeInput","beforeinput",null,a,Te),Ce.push({event:Te,listeners:me}),Te.data=st))}ih(Ce,i)})}function La(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Ao(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=wt(t,a),h!=null&&c.unshift(La(t,h,d)),h=wt(t,i),h!=null&&c.push(La(t,h,d))),t=t.return}return c}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sh(t,i,a,c,d){for(var h=i._reactName,T=[];a!==null&&a!==c;){var O=a,W=O.alternate,me=O.stateNode;if(W!==null&&W===c)break;O.tag===5&&me!==null&&(O=me,d?(W=wt(a,h),W!=null&&T.unshift(La(a,W,O))):d||(W=wt(a,h),W!=null&&T.push(La(a,W,O)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var E0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function ah(t){return(typeof t=="string"?t:""+t).replace(E0,`
`).replace(T0,"")}function Co(t,i,a){if(i=ah(i),ah(t)!==i&&a)throw Error(n(425))}function Ro(){}var _c=null,xc=null;function Sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(C0)}:yc;function C0(t){setTimeout(function(){throw t})}function Mc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),ya(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ya(i)}function Pr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function lh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Hi="__reactFiber$"+Ls,Na="__reactProps$"+Ls,or="__reactContainer$"+Ls,Ec="__reactEvents$"+Ls,R0="__reactListeners$"+Ls,b0="__reactHandles$"+Ls;function Jr(t){var i=t[Hi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[or]||a[Hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=lh(t);t!==null;){if(a=t[Hi])return a;t=lh(t)}return i}t=a,a=t.parentNode}return null}function Ia(t){return t=t[Hi]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function bo(t){return t[Na]||null}var Tc=[],Is=-1;function Lr(t){return{current:t}}function Kt(t){0>Is||(t.current=Tc[Is],Tc[Is]=null,Is--)}function Xt(t,i){Is++,Tc[Is]=t.current,t.current=i}var Nr={},Un=Lr(Nr),Kn=Lr(!1),Qr=Nr;function Ds(t,i){var a=t.type.contextTypes;if(!a)return Nr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function $n(t){return t=t.childContextTypes,t!=null}function Po(){Kt(Kn),Kt(Un)}function ch(t,i,a){if(Un.current!==Nr)throw Error(n(168));Xt(Un,i),Xt(Kn,a)}function uh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,le(t)||"Unknown",d));return ne({},a,c)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,Qr=Un.current,Xt(Un,t),Xt(Kn,Kn.current),!0}function dh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=uh(t,i,Qr),c.__reactInternalMemoizedMergedChildContext=t,Kt(Kn),Kt(Un),Xt(Un,t)):Kt(Kn),Xt(Kn,a)}var lr=null,No=!1,wc=!1;function fh(t){lr===null?lr=[t]:lr.push(t)}function P0(t){No=!0,fh(t)}function Ir(){if(!wc&&lr!==null){wc=!0;var t=0,i=gt;try{var a=lr;for(gt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}lr=null,No=!1}catch(d){throw lr!==null&&(lr=lr.slice(t+1)),qt(sr,Ir),d}finally{gt=i,wc=!1}}return null}var Us=[],Fs=0,Io=null,Do=0,mi=[],gi=0,es=null,cr=1,ur="";function ts(t,i){Us[Fs++]=Do,Us[Fs++]=Io,Io=t,Do=i}function hh(t,i,a){mi[gi++]=cr,mi[gi++]=ur,mi[gi++]=es,es=t;var c=cr;t=ur;var d=32-Ue(c)-1;c&=~(1<<d),a+=1;var h=32-Ue(i)+d;if(30<h){var T=d-d%5;h=(c&(1<<T)-1).toString(32),c>>=T,d-=T,cr=1<<32-Ue(i)+d|a<<d|c,ur=h+t}else cr=1<<h|a<<d|c,ur=t}function Ac(t){t.return!==null&&(ts(t,1),hh(t,1,0))}function Cc(t){for(;t===Io;)Io=Us[--Fs],Us[Fs]=null,Do=Us[--Fs],Us[Fs]=null;for(;t===es;)es=mi[--gi],mi[gi]=null,ur=mi[--gi],mi[gi]=null,cr=mi[--gi],mi[gi]=null}var si=null,ai=null,Jt=!1,bi=null;function ph(t,i){var a=Si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function mh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,si=t,ai=Pr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,si=t,ai=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=es!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Si(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,si=t,ai=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(Jt){var i=ai;if(i){var a=i;if(!mh(t,i)){if(Rc(t))throw Error(n(418));i=Pr(a.nextSibling);var c=si;i&&mh(t,i)?ph(c,a):(t.flags=t.flags&-4097|2,Jt=!1,si=t)}}else{if(Rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Jt=!1,si=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;si=t}function Uo(t){if(t!==si)return!1;if(!Jt)return gh(t),Jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Sc(t.type,t.memoizedProps)),i&&(i=ai)){if(Rc(t))throw vh(),Error(n(418));for(;i;)ph(t,i),i=Pr(i.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){ai=Pr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}ai=null}}else ai=si?Pr(t.stateNode.nextSibling):null;return!0}function vh(){for(var t=ai;t;)t=Pr(t.nextSibling)}function Os(){ai=si=null,Jt=!1}function Pc(t){bi===null?bi=[t]:bi.push(t)}var L0=C.ReactCurrentBatchConfig;function Da(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(T){var O=d.refs;T===null?delete O[h]:O[h]=T},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Fo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function _h(t){var i=t._init;return i(t._payload)}function xh(t){function i(ce,J){if(t){var fe=ce.deletions;fe===null?(ce.deletions=[J],ce.flags|=16):fe.push(J)}}function a(ce,J){if(!t)return null;for(;J!==null;)i(ce,J),J=J.sibling;return null}function c(ce,J){for(ce=new Map;J!==null;)J.key!==null?ce.set(J.key,J):ce.set(J.index,J),J=J.sibling;return ce}function d(ce,J){return ce=Gr(ce,J),ce.index=0,ce.sibling=null,ce}function h(ce,J,fe){return ce.index=fe,t?(fe=ce.alternate,fe!==null?(fe=fe.index,fe<J?(ce.flags|=2,J):fe):(ce.flags|=2,J)):(ce.flags|=1048576,J)}function T(ce){return t&&ce.alternate===null&&(ce.flags|=2),ce}function O(ce,J,fe,Pe){return J===null||J.tag!==6?(J=yu(fe,ce.mode,Pe),J.return=ce,J):(J=d(J,fe),J.return=ce,J)}function W(ce,J,fe,Pe){var it=fe.type;return it===F?Te(ce,J,fe.props.children,Pe,fe.key):J!==null&&(J.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&_h(it)===J.type)?(Pe=d(J,fe.props),Pe.ref=Da(ce,J,fe),Pe.return=ce,Pe):(Pe=al(fe.type,fe.key,fe.props,null,ce.mode,Pe),Pe.ref=Da(ce,J,fe),Pe.return=ce,Pe)}function me(ce,J,fe,Pe){return J===null||J.tag!==4||J.stateNode.containerInfo!==fe.containerInfo||J.stateNode.implementation!==fe.implementation?(J=Mu(fe,ce.mode,Pe),J.return=ce,J):(J=d(J,fe.children||[]),J.return=ce,J)}function Te(ce,J,fe,Pe,it){return J===null||J.tag!==7?(J=cs(fe,ce.mode,Pe,it),J.return=ce,J):(J=d(J,fe),J.return=ce,J)}function Ce(ce,J,fe){if(typeof J=="string"&&J!==""||typeof J=="number")return J=yu(""+J,ce.mode,fe),J.return=ce,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case P:return fe=al(J.type,J.key,J.props,null,ce.mode,fe),fe.ref=Da(ce,null,J),fe.return=ce,fe;case L:return J=Mu(J,ce.mode,fe),J.return=ce,J;case pe:var Pe=J._init;return Ce(ce,Pe(J._payload),fe)}if(kt(J)||ee(J))return J=cs(J,ce.mode,fe,null),J.return=ce,J;Fo(ce,J)}return null}function Ee(ce,J,fe,Pe){var it=J!==null?J.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return it!==null?null:O(ce,J,""+fe,Pe);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:return fe.key===it?W(ce,J,fe,Pe):null;case L:return fe.key===it?me(ce,J,fe,Pe):null;case pe:return it=fe._init,Ee(ce,J,it(fe._payload),Pe)}if(kt(fe)||ee(fe))return it!==null?null:Te(ce,J,fe,Pe,null);Fo(ce,fe)}return null}function Ye(ce,J,fe,Pe,it){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ce=ce.get(fe)||null,O(J,ce,""+Pe,it);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case P:return ce=ce.get(Pe.key===null?fe:Pe.key)||null,W(J,ce,Pe,it);case L:return ce=ce.get(Pe.key===null?fe:Pe.key)||null,me(J,ce,Pe,it);case pe:var rt=Pe._init;return Ye(ce,J,fe,rt(Pe._payload),it)}if(kt(Pe)||ee(Pe))return ce=ce.get(fe)||null,Te(J,ce,Pe,it,null);Fo(J,Pe)}return null}function Qe(ce,J,fe,Pe){for(var it=null,rt=null,st=J,lt=J=0,Tn=null;st!==null&&lt<fe.length;lt++){st.index>lt?(Tn=st,st=null):Tn=st.sibling;var Dt=Ee(ce,st,fe[lt],Pe);if(Dt===null){st===null&&(st=Tn);break}t&&st&&Dt.alternate===null&&i(ce,st),J=h(Dt,J,lt),rt===null?it=Dt:rt.sibling=Dt,rt=Dt,st=Tn}if(lt===fe.length)return a(ce,st),Jt&&ts(ce,lt),it;if(st===null){for(;lt<fe.length;lt++)st=Ce(ce,fe[lt],Pe),st!==null&&(J=h(st,J,lt),rt===null?it=st:rt.sibling=st,rt=st);return Jt&&ts(ce,lt),it}for(st=c(ce,st);lt<fe.length;lt++)Tn=Ye(st,ce,lt,fe[lt],Pe),Tn!==null&&(t&&Tn.alternate!==null&&st.delete(Tn.key===null?lt:Tn.key),J=h(Tn,J,lt),rt===null?it=Tn:rt.sibling=Tn,rt=Tn);return t&&st.forEach(function(Vr){return i(ce,Vr)}),Jt&&ts(ce,lt),it}function et(ce,J,fe,Pe){var it=ee(fe);if(typeof it!="function")throw Error(n(150));if(fe=it.call(fe),fe==null)throw Error(n(151));for(var rt=it=null,st=J,lt=J=0,Tn=null,Dt=fe.next();st!==null&&!Dt.done;lt++,Dt=fe.next()){st.index>lt?(Tn=st,st=null):Tn=st.sibling;var Vr=Ee(ce,st,Dt.value,Pe);if(Vr===null){st===null&&(st=Tn);break}t&&st&&Vr.alternate===null&&i(ce,st),J=h(Vr,J,lt),rt===null?it=Vr:rt.sibling=Vr,rt=Vr,st=Tn}if(Dt.done)return a(ce,st),Jt&&ts(ce,lt),it;if(st===null){for(;!Dt.done;lt++,Dt=fe.next())Dt=Ce(ce,Dt.value,Pe),Dt!==null&&(J=h(Dt,J,lt),rt===null?it=Dt:rt.sibling=Dt,rt=Dt);return Jt&&ts(ce,lt),it}for(st=c(ce,st);!Dt.done;lt++,Dt=fe.next())Dt=Ye(st,ce,lt,Dt.value,Pe),Dt!==null&&(t&&Dt.alternate!==null&&st.delete(Dt.key===null?lt:Dt.key),J=h(Dt,J,lt),rt===null?it=Dt:rt.sibling=Dt,rt=Dt);return t&&st.forEach(function(uv){return i(ce,uv)}),Jt&&ts(ce,lt),it}function cn(ce,J,fe,Pe){if(typeof fe=="object"&&fe!==null&&fe.type===F&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:e:{for(var it=fe.key,rt=J;rt!==null;){if(rt.key===it){if(it=fe.type,it===F){if(rt.tag===7){a(ce,rt.sibling),J=d(rt,fe.props.children),J.return=ce,ce=J;break e}}else if(rt.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&_h(it)===rt.type){a(ce,rt.sibling),J=d(rt,fe.props),J.ref=Da(ce,rt,fe),J.return=ce,ce=J;break e}a(ce,rt);break}else i(ce,rt);rt=rt.sibling}fe.type===F?(J=cs(fe.props.children,ce.mode,Pe,fe.key),J.return=ce,ce=J):(Pe=al(fe.type,fe.key,fe.props,null,ce.mode,Pe),Pe.ref=Da(ce,J,fe),Pe.return=ce,ce=Pe)}return T(ce);case L:e:{for(rt=fe.key;J!==null;){if(J.key===rt)if(J.tag===4&&J.stateNode.containerInfo===fe.containerInfo&&J.stateNode.implementation===fe.implementation){a(ce,J.sibling),J=d(J,fe.children||[]),J.return=ce,ce=J;break e}else{a(ce,J);break}else i(ce,J);J=J.sibling}J=Mu(fe,ce.mode,Pe),J.return=ce,ce=J}return T(ce);case pe:return rt=fe._init,cn(ce,J,rt(fe._payload),Pe)}if(kt(fe))return Qe(ce,J,fe,Pe);if(ee(fe))return et(ce,J,fe,Pe);Fo(ce,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,J!==null&&J.tag===6?(a(ce,J.sibling),J=d(J,fe),J.return=ce,ce=J):(a(ce,J),J=yu(fe,ce.mode,Pe),J.return=ce,ce=J),T(ce)):a(ce,J)}return cn}var ks=xh(!0),Sh=xh(!1),Oo=Lr(null),ko=null,Bs=null,Lc=null;function Nc(){Lc=Bs=ko=null}function Ic(t){var i=Oo.current;Kt(Oo),t._currentValue=i}function Dc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function zs(t,i){ko=t,Lc=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Zn=!0),t.firstContext=null)}function vi(t){var i=t._currentValue;if(Lc!==t)if(t={context:t,memoizedValue:i,next:null},Bs===null){if(ko===null)throw Error(n(308));Bs=t,ko.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return i}var ns=null;function Uc(t){ns===null?ns=[t]:ns.push(t)}function yh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Uc(i)):(a.next=d.next,d.next=a),i.interleaved=a,dr(t,c)}function dr(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Dr=!1;function Fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ur(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Nt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,dr(t,a)}return d=c.interleaved,d===null?(i.next=i,Uc(c)):(i.next=d.next,d.next=i),c.interleaved=i,dr(t,a)}function Bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Dn(t,a)}}function Eh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function zo(t,i,a,c){var d=t.updateQueue;Dr=!1;var h=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var W=O,me=W.next;W.next=null,T===null?h=me:T.next=me,T=W;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==T&&(O===null?Te.firstBaseUpdate=me:O.next=me,Te.lastBaseUpdate=W))}if(h!==null){var Ce=d.baseState;T=0,Te=me=W=null,O=h;do{var Ee=O.lane,Ye=O.eventTime;if((c&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:Ye,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Qe=t,et=O;switch(Ee=i,Ye=a,et.tag){case 1:if(Qe=et.payload,typeof Qe=="function"){Ce=Qe.call(Ye,Ce,Ee);break e}Ce=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=et.payload,Ee=typeof Qe=="function"?Qe.call(Ye,Ce,Ee):Qe,Ee==null)break e;Ce=ne({},Ce,Ee);break e;case 2:Dr=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Ee=d.effects,Ee===null?d.effects=[O]:Ee.push(O))}else Ye={eventTime:Ye,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(me=Te=Ye,W=Ce):Te=Te.next=Ye,T|=Ee;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,d.lastBaseUpdate=Ee,d.shared.pending=null}}while(!0);if(Te===null&&(W=Ce),d.baseState=W,d.firstBaseUpdate=me,d.lastBaseUpdate=Te,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);ss|=T,t.lanes=T,t.memoizedState=Ce}}function Th(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ua={},Wi=Lr(Ua),Fa=Lr(Ua),Oa=Lr(Ua);function is(t){if(t===Ua)throw Error(n(174));return t}function Oc(t,i){switch(Xt(Oa,i),Xt(Fa,t),Xt(Wi,Ua),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}Kt(Wi),Xt(Wi,i)}function Gs(){Kt(Wi),Kt(Fa),Kt(Oa)}function wh(t){is(Oa.current);var i=is(Wi.current),a=y(i,t.type);i!==a&&(Xt(Fa,t),Xt(Wi,a))}function kc(t){Fa.current===t&&(Kt(Wi),Kt(Fa))}var Qt=Lr(0);function Go(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function zc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var Vo=C.ReactCurrentDispatcher,Gc=C.ReactCurrentBatchConfig,rs=0,en=null,vn=null,Mn=null,Ho=!1,ka=!1,Ba=0,N0=0;function Fn(){throw Error(n(321))}function Vc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Ri(t[a],i[a]))return!1;return!0}function Hc(t,i,a,c,d,h){if(rs=h,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=t===null||t.memoizedState===null?F0:O0,t=a(c,d),ka){h=0;do{if(ka=!1,Ba=0,25<=h)throw Error(n(301));h+=1,Mn=vn=null,i.updateQueue=null,Vo.current=k0,t=a(c,d)}while(ka)}if(Vo.current=Yo,i=vn!==null&&vn.next!==null,rs=0,Mn=vn=en=null,Ho=!1,i)throw Error(n(300));return t}function Wc(){var t=Ba!==0;return Ba=0,t}function Xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?en.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function _i(){if(vn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var i=Mn===null?en.memoizedState:Mn.next;if(i!==null)Mn=i,vn=t;else{if(t===null)throw Error(n(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Mn===null?en.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function za(t,i){return typeof i=="function"?i(t):i}function Xc(t){var i=_i(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=vn,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var T=d.next;d.next=h.next,h.next=T}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var O=T=null,W=null,me=h;do{var Te=me.lane;if((rs&Te)===Te)W!==null&&(W=W.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:t(c,me.action);else{var Ce={lane:Te,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};W===null?(O=W=Ce,T=c):W=W.next=Ce,en.lanes|=Te,ss|=Te}me=me.next}while(me!==null&&me!==h);W===null?T=c:W.next=O,Ri(c,i.memoizedState)||(Zn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do h=d.lane,en.lanes|=h,ss|=h,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Yc(t){var i=_i(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do h=t(h,T.action),T=T.next;while(T!==d);Ri(h,i.memoizedState)||(Zn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function Ah(){}function Ch(t,i){var a=en,c=_i(),d=i(),h=!Ri(c.memoizedState,d);if(h&&(c.memoizedState=d,Zn=!0),c=c.queue,qc(Ph.bind(null,a,c,t),[t]),c.getSnapshot!==i||h||Mn!==null&&Mn.memoizedState.tag&1){if(a.flags|=2048,Ga(9,bh.bind(null,a,c,d,i),void 0,null),En===null)throw Error(n(349));(rs&30)!==0||Rh(a,i,d)}return d}function Rh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function bh(t,i,a,c){i.value=a,i.getSnapshot=c,Lh(i)&&Nh(t)}function Ph(t,i,a){return a(function(){Lh(i)&&Nh(t)})}function Lh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Ri(t,a)}catch{return!0}}function Nh(t){var i=dr(t,1);i!==null&&Ii(i,t,1,-1)}function Ih(t){var i=Xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},i.queue=t,t=t.dispatch=U0.bind(null,en,t),[i.memoizedState,t]}function Ga(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Dh(){return _i().memoizedState}function Wo(t,i,a,c){var d=Xi();en.flags|=t,d.memoizedState=Ga(1|i,a,void 0,c===void 0?null:c)}function Xo(t,i,a,c){var d=_i();c=c===void 0?null:c;var h=void 0;if(vn!==null){var T=vn.memoizedState;if(h=T.destroy,c!==null&&Vc(c,T.deps)){d.memoizedState=Ga(i,a,h,c);return}}en.flags|=t,d.memoizedState=Ga(1|i,a,h,c)}function Uh(t,i){return Wo(8390656,8,t,i)}function qc(t,i){return Xo(2048,8,t,i)}function Fh(t,i){return Xo(4,2,t,i)}function Oh(t,i){return Xo(4,4,t,i)}function kh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Bh(t,i,a){return a=a!=null?a.concat([t]):null,Xo(4,4,kh.bind(null,i,t),a)}function jc(){}function zh(t,i){var a=_i();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Vc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Gh(t,i){var a=_i();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Vc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Vh(t,i,a){return(rs&21)===0?(t.baseState&&(t.baseState=!1,Zn=!0),t.memoizedState=a):(Ri(a,i)||(a=gn(),en.lanes|=a,ss|=a,t.baseState=!0),i)}function I0(t,i){var a=gt;gt=a!==0&&4>a?a:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{gt=a,Gc.transition=c}}function Hh(){return _i().memoizedState}function D0(t,i,a){var c=Br(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Wh(t))Xh(i,a);else if(a=yh(t,i,a,c),a!==null){var d=qn();Ii(a,t,c,d),Yh(a,i,c)}}function U0(t,i,a){var c=Br(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wh(t))Xh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var T=i.lastRenderedState,O=h(T,a);if(d.hasEagerState=!0,d.eagerState=O,Ri(O,T)){var W=i.interleaved;W===null?(d.next=d,Uc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=yh(t,i,d,c),a!==null&&(d=qn(),Ii(a,t,c,d),Yh(a,i,c))}}function Wh(t){var i=t.alternate;return t===en||i!==null&&i===en}function Xh(t,i){ka=Ho=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Yh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Dn(t,a)}}var Yo={readContext:vi,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},F0={readContext:vi,useCallback:function(t,i){return Xi().memoizedState=[t,i===void 0?null:i],t},useContext:vi,useEffect:Uh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Wo(4194308,4,kh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Wo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Wo(4,2,t,i)},useMemo:function(t,i){var a=Xi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Xi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=D0.bind(null,en,t),[c.memoizedState,t]},useRef:function(t){var i=Xi();return t={current:t},i.memoizedState=t},useState:Ih,useDebugValue:jc,useDeferredValue:function(t){return Xi().memoizedState=t},useTransition:function(){var t=Ih(!1),i=t[0];return t=I0.bind(null,t[1]),Xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=en,d=Xi();if(Jt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),En===null)throw Error(n(349));(rs&30)!==0||Rh(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,Uh(Ph.bind(null,c,h,t),[t]),c.flags|=2048,Ga(9,bh.bind(null,c,h,a,i),void 0,null),a},useId:function(){var t=Xi(),i=En.identifierPrefix;if(Jt){var a=ur,c=cr;a=(c&~(1<<32-Ue(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=N0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},O0={readContext:vi,useCallback:zh,useContext:vi,useEffect:qc,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Gh,useReducer:Xc,useRef:Dh,useState:function(){return Xc(za)},useDebugValue:jc,useDeferredValue:function(t){var i=_i();return Vh(i,vn.memoizedState,t)},useTransition:function(){var t=Xc(za)[0],i=_i().memoizedState;return[t,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:Hh,unstable_isNewReconciler:!1},k0={readContext:vi,useCallback:zh,useContext:vi,useEffect:qc,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Gh,useReducer:Yc,useRef:Dh,useState:function(){return Yc(za)},useDebugValue:jc,useDeferredValue:function(t){var i=_i();return vn===null?i.memoizedState=t:Vh(i,vn.memoizedState,t)},useTransition:function(){var t=Yc(za)[0],i=_i().memoizedState;return[t,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:Hh,unstable_isNewReconciler:!1};function Pi(t,i){if(t&&t.defaultProps){i=ne({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Kc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qo={isMounted:function(t){return(t=t._reactInternals)?Rn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=qn(),d=Br(t),h=fr(c,d);h.payload=i,a!=null&&(h.callback=a),i=Ur(t,h,d),i!==null&&(Ii(i,t,d,c),Bo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=qn(),d=Br(t),h=fr(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ur(t,h,d),i!==null&&(Ii(i,t,d,c),Bo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=qn(),c=Br(t),d=fr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Ur(t,d,c),i!==null&&(Ii(i,t,c,a),Bo(i,t,c))}};function qh(t,i,a,c,d,h,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,T):i.prototype&&i.prototype.isPureReactComponent?!Ca(a,c)||!Ca(d,h):!0}function jh(t,i,a){var c=!1,d=Nr,h=i.contextType;return typeof h=="object"&&h!==null?h=vi(h):(d=$n(i)?Qr:Un.current,c=i.contextTypes,h=(c=c!=null)?Ds(t,d):Nr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Kh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&qo.enqueueReplaceState(i,i.state,null)}function $c(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Fc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=vi(h):(h=$n(i)?Qr:Un.current,d.context=Ds(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Kc(t,i,h,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),zo(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Zc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Jc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function $h(t,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,hu=c),Jc(t,i)},a}function Zh(t,i,a){a=fr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Jc(t,i),typeof c!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Jh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new B0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=Q0.bind(null,t,i,a),i.then(t,t))}function Qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ep(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,Ur(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var z0=C.ReactCurrentOwner,Zn=!1;function Yn(t,i,a,c){i.child=t===null?Sh(i,null,a,c):ks(i,t.child,a,c)}function tp(t,i,a,c,d){a=a.render;var h=i.ref;return zs(i,d),c=Hc(t,i,a,c,h,d),a=Wc(),t!==null&&!Zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hr(t,i,d)):(Jt&&a&&Ac(i),i.flags|=1,Yn(t,i,c,d),i.child)}function np(t,i,a,c,d){if(t===null){var h=a.type;return typeof h=="function"&&!Su(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,ip(t,i,h,c,d)):(t=al(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(T,c)&&t.ref===i.ref)return hr(t,i,d)}return i.flags|=1,t=Gr(h,c),t.ref=i.ref,t.return=i,i.child=t}function ip(t,i,a,c,d){if(t!==null){var h=t.memoizedProps;if(Ca(h,c)&&t.ref===i.ref)if(Zn=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Zn=!0);else return i.lanes=t.lanes,hr(t,i,d)}return Qc(t,i,a,c,d)}function rp(t,i,a){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Ws,oi),oi|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Xt(Ws,oi),oi|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,Xt(Ws,oi),oi|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,Xt(Ws,oi),oi|=c;return Yn(t,i,d,a),i.child}function sp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qc(t,i,a,c,d){var h=$n(a)?Qr:Un.current;return h=Ds(i,h),zs(i,d),a=Hc(t,i,a,c,h,d),c=Wc(),t!==null&&!Zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hr(t,i,d)):(Jt&&c&&Ac(i),i.flags|=1,Yn(t,i,a,d),i.child)}function ap(t,i,a,c,d){if($n(a)){var h=!0;Lo(i)}else h=!1;if(zs(i,d),i.stateNode===null)Ko(t,i),jh(i,a,c),$c(i,a,c,d),c=!0;else if(t===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var W=T.context,me=a.contextType;typeof me=="object"&&me!==null?me=vi(me):(me=$n(a)?Qr:Un.current,me=Ds(i,me));var Te=a.getDerivedStateFromProps,Ce=typeof Te=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ce||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||W!==me)&&Kh(i,T,c,me),Dr=!1;var Ee=i.memoizedState;T.state=Ee,zo(i,c,T,d),W=i.memoizedState,O!==c||Ee!==W||Kn.current||Dr?(typeof Te=="function"&&(Kc(i,a,Te,c),W=i.memoizedState),(O=Dr||qh(i,a,O,c,Ee,W,me))?(Ce||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=me,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Mh(t,i),O=i.memoizedProps,me=i.type===i.elementType?O:Pi(i.type,O),T.props=me,Ce=i.pendingProps,Ee=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=vi(W):(W=$n(a)?Qr:Un.current,W=Ds(i,W));var Ye=a.getDerivedStateFromProps;(Te=typeof Ye=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Ce||Ee!==W)&&Kh(i,T,c,W),Dr=!1,Ee=i.memoizedState,T.state=Ee,zo(i,c,T,d);var Qe=i.memoizedState;O!==Ce||Ee!==Qe||Kn.current||Dr?(typeof Ye=="function"&&(Kc(i,a,Ye,c),Qe=i.memoizedState),(me=Dr||qh(i,a,me,c,Ee,Qe,W)||!1)?(Te||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Qe,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Qe,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Qe),T.props=c,T.state=Qe,T.context=W,c=me):(typeof T.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),c=!1)}return eu(t,i,a,c,h,d)}function eu(t,i,a,c,d,h){sp(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&dh(i,a,!1),hr(t,i,h);c=i.stateNode,z0.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=ks(i,t.child,null,h),i.child=ks(i,null,O,h)):Yn(t,i,O,h),i.memoizedState=c.state,d&&dh(i,a,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?ch(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(t,i.context,!1),Oc(t,i.containerInfo)}function lp(t,i,a,c,d){return Os(),Pc(d),i.flags|=256,Yn(t,i,a,c),i.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,a){var c=i.pendingProps,d=Qt.current,h=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=t!==null&&t.memoizedState===null?!1:(d&2)!==0),O?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Xt(Qt,d&1),t===null)return bc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,h?(c=i.mode,h=i.child,T={mode:"hidden",children:T},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=T):h=ol(T,c,0,null),t=cs(t,c,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=nu(a),i.memoizedState=tu,t):iu(i,T));if(d=t.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return G0(t,i,T,c,O,d,a);if(h){h=c.fallback,T=i.mode,d=t.child,O=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Gr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?h=Gr(O,h):(h=cs(h,T,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,T=t.child.memoizedState,T=T===null?nu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},h.memoizedState=T,h.childLanes=t.childLanes&~a,i.memoizedState=tu,c}return h=t.child,t=h.sibling,c=Gr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function iu(t,i){return i=ol({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function jo(t,i,a,c){return c!==null&&Pc(c),ks(i,t.child,null,a),t=iu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function G0(t,i,a,c,d,h,T){if(a)return i.flags&256?(i.flags&=-257,c=Zc(Error(n(422))),jo(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=ol({mode:"visible",children:c.children},d,0,null),h=cs(h,d,T,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&ks(i,t.child,null,T),i.child.memoizedState=nu(T),i.memoizedState=tu,h);if((i.mode&1)===0)return jo(t,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,h=Error(n(419)),c=Zc(h,c,void 0),jo(t,i,T,c)}if(O=(T&t.childLanes)!==0,Zn||O){if(c=En,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,dr(t,d),Ii(c,t,d,-1))}return xu(),c=Zc(Error(n(421))),jo(t,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=ev.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,ai=Pr(d.nextSibling),si=i,Jt=!0,bi=null,t!==null&&(mi[gi++]=cr,mi[gi++]=ur,mi[gi++]=es,cr=t.id,ur=t.overflow,es=i),i=iu(i,c.children),i.flags|=4096,i)}function up(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Dc(t.return,i,a)}function ru(t,i,a,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function dp(t,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Yn(t,i,c.children,a),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,a,i);else if(t.tag===19)up(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Xt(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Go(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ru(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Go(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}ru(i,!0,a,null,h);break;case"together":ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hr(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),ss|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Gr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Gr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function V0(t,i,a){switch(i.tag){case 3:op(i),Os();break;case 5:wh(i);break;case 1:$n(i.type)&&Lo(i);break;case 4:Oc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Xt(Oo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(Qt,Qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cp(t,i,a):(Xt(Qt,Qt.current&1),t=hr(t,i,a),t!==null?t.sibling:null);Xt(Qt,Qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return dp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xt(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,rp(t,i,a)}return hr(t,i,a)}var fp,su,hp,pp;fp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},su=function(){},hp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,is(Wi.current);var h=null;switch(a){case"input":d=We(t,d),c=We(t,c),h=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),h=[];break;case"textarea":d=Bt(t,d),c=Bt(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ro)}xe(a,c);var T;a=null;for(me in d)if(!c.hasOwnProperty(me)&&d.hasOwnProperty(me)&&d[me]!=null)if(me==="style"){var O=d[me];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?h||(h=[]):(h=h||[]).push(me,null));for(me in c){var W=c[me];if(O=d!=null?d[me]:void 0,c.hasOwnProperty(me)&&W!==O&&(W!=null||O!=null))if(me==="style")if(O){for(T in O)!O.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&O[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(h||(h=[]),h.push(me,a)),a=W;else me==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,O=O?O.__html:void 0,W!=null&&O!==W&&(h=h||[]).push(me,W)):me==="children"?typeof W!="string"&&typeof W!="number"||(h=h||[]).push(me,""+W):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(W!=null&&me==="onScroll"&&jt("scroll",t),h||O===W||(h=[])):(h=h||[]).push(me,W))}a&&(h=h||[]).push("style",a);var me=h;(i.updateQueue=me)&&(i.flags|=4)}},pp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Va(t,i){if(!Jt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function On(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function H0(t,i,a){var c=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(i),null;case 1:return $n(i.type)&&Po(),On(i),null;case 3:return c=i.stateNode,Gs(),Kt(Kn),Kt(Un),zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Uo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bi!==null&&(gu(bi),bi=null))),su(t,i),On(i),null;case 5:kc(i);var d=is(Oa.current);if(a=i.type,t!==null&&i.stateNode!=null)hp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return On(i),null}if(t=is(Wi.current),Uo(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[Hi]=i,c[Na]=h,t=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(d=0;d<ba.length;d++)jt(ba[d],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":at(c,h),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},jt("invalid",c);break;case"textarea":K(c,h),jt("invalid",c)}xe(a,h),d=null;for(var T in h)if(h.hasOwnProperty(T)){var O=h[T];T==="children"?typeof O=="string"?c.textContent!==O&&(h.suppressHydrationWarning!==!0&&Co(c.textContent,O,t),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(h.suppressHydrationWarning!==!0&&Co(c.textContent,O,t),d=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&jt("scroll",c)}switch(a){case"input":De(c),xt(c,h,!0);break;case"textarea":De(c),Et(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ro)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(a,{is:c.is}):(t=T.createElement(a),a==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,a),t[Hi]=i,t[Na]=c,fp(t,i,!1,!1),i.stateNode=t;e:{switch(T=ye(a,c),a){case"dialog":jt("cancel",t),jt("close",t),d=c;break;case"iframe":case"object":case"embed":jt("load",t),d=c;break;case"video":case"audio":for(d=0;d<ba.length;d++)jt(ba[d],t);d=c;break;case"source":jt("error",t),d=c;break;case"img":case"image":case"link":jt("error",t),jt("load",t),d=c;break;case"details":jt("toggle",t),d=c;break;case"input":at(t,c),d=We(t,c),jt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),jt("invalid",t);break;case"textarea":K(t,c),d=Bt(t,c),jt("invalid",t);break;default:d=c}xe(a,d),O=d;for(h in O)if(O.hasOwnProperty(h)){var W=O[h];h==="style"?B(t,W):h==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&de(t,W)):h==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&ve(t,W):typeof W=="number"&&ve(t,""+W):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?W!=null&&h==="onScroll"&&jt("scroll",t):W!=null&&z(t,h,W,T))}switch(a){case"input":De(t),xt(t,c,!1);break;case"textarea":De(t),Et(t);break;case"option":c.value!=null&&t.setAttribute("value",""+$(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?ut(t,!!c.multiple,h,!1):c.defaultValue!=null&&ut(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return On(i),null;case 6:if(t&&i.stateNode!=null)pp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=is(Oa.current),is(Wi.current),Uo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Hi]=i,(h=c.nodeValue!==a)&&(t=si,t!==null))switch(t.tag){case 3:Co(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(c.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Hi]=i,i.stateNode=c}return On(i),null;case 13:if(Kt(Qt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&ai!==null&&(i.mode&1)!==0&&(i.flags&128)===0)vh(),Os(),i.flags|=98560,h=!1;else if(h=Uo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Hi]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;On(i),h=!1}else bi!==null&&(gu(bi),bi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Qt.current&1)!==0?_n===0&&(_n=3):xu())),i.updateQueue!==null&&(i.flags|=4),On(i),null);case 4:return Gs(),su(t,i),t===null&&Pa(i.stateNode.containerInfo),On(i),null;case 10:return Ic(i.type._context),On(i),null;case 17:return $n(i.type)&&Po(),On(i),null;case 19:if(Kt(Qt),h=i.memoizedState,h===null)return On(i),null;if(c=(i.flags&128)!==0,T=h.rendering,T===null)if(c)Va(h,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Go(t),T!==null){for(i.flags|=128,Va(h,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,t=c,h.flags&=14680066,T=h.alternate,T===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=T.childLanes,h.lanes=T.lanes,h.child=T.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=T.memoizedProps,h.memoizedState=T.memoizedState,h.updateQueue=T.updateQueue,h.type=T.type,t=T.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Xt(Qt,Qt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Tt()>Xs&&(i.flags|=128,c=!0,Va(h,!1),i.lanes=4194304)}else{if(!c)if(t=Go(T),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Va(h,!0),h.tail===null&&h.tailMode==="hidden"&&!T.alternate&&!Jt)return On(i),null}else 2*Tt()-h.renderingStartTime>Xs&&a!==1073741824&&(i.flags|=128,c=!0,Va(h,!1),i.lanes=4194304);h.isBackwards?(T.sibling=i.child,i.child=T):(a=h.last,a!==null?a.sibling=T:i.child=T,h.last=T)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tt(),i.sibling=null,a=Qt.current,Xt(Qt,c?a&1|2:a&1),i):(On(i),null);case 22:case 23:return _u(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(oi&1073741824)!==0&&(On(i),i.subtreeFlags&6&&(i.flags|=8192)):On(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function W0(t,i){switch(Cc(i),i.tag){case 1:return $n(i.type)&&Po(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Gs(),Kt(Kn),Kt(Un),zc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return kc(i),null;case 13:if(Kt(Qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Os()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Kt(Qt),null;case 4:return Gs(),null;case 10:return Ic(i.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var $o=!1,kn=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Hs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){an(t,i,c)}else a.current=null}function au(t,i,a){try{a()}catch(c){an(t,i,c)}}var mp=!1;function Y0(t,i){if(_c=go,t=qf(),uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var T=0,O=-1,W=-1,me=0,Te=0,Ce=t,Ee=null;t:for(;;){for(var Ye;Ce!==a||d!==0&&Ce.nodeType!==3||(O=T+d),Ce!==h||c!==0&&Ce.nodeType!==3||(W=T+c),Ce.nodeType===3&&(T+=Ce.nodeValue.length),(Ye=Ce.firstChild)!==null;)Ee=Ce,Ce=Ye;for(;;){if(Ce===t)break t;if(Ee===a&&++me===d&&(O=T),Ee===h&&++Te===c&&(W=T),(Ye=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=Ye}a=O===-1||W===-1?null:{start:O,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:t,selectionRange:a},go=!1,Ke=i;Ke!==null;)if(i=Ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ke=t;else for(;Ke!==null;){i=Ke;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var et=Qe.memoizedProps,cn=Qe.memoizedState,ce=i.stateNode,J=ce.getSnapshotBeforeUpdate(i.elementType===i.type?et:Pi(i.type,et),cn);ce.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Pe){an(i,i.return,Pe)}if(t=i.sibling,t!==null){t.return=i.return,Ke=t;break}Ke=i.return}return Qe=mp,mp=!1,Qe}function Ha(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&au(i,a,h)}d=d.next}while(d!==c)}}function Zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ou(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function gp(t){var i=t.alternate;i!==null&&(t.alternate=null,gp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Hi],delete i[Na],delete i[Ec],delete i[R0],delete i[b0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(t=t.child,t!==null))for(lu(t,i,a),t=t.sibling;t!==null;)lu(t,i,a),t=t.sibling}function cu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(cu(t,i,a),t=t.sibling;t!==null;)cu(t,i,a),t=t.sibling}var bn=null,Li=!1;function Fr(t,i,a){for(a=a.child;a!==null;)xp(t,i,a),a=a.sibling}function xp(t,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:kn||Hs(a,i);case 6:var c=bn,d=Li;bn=null,Fr(t,i,a),bn=c,Li=d,bn!==null&&(Li?(t=bn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):bn.removeChild(a.stateNode));break;case 18:bn!==null&&(Li?(t=bn,a=a.stateNode,t.nodeType===8?Mc(t.parentNode,a):t.nodeType===1&&Mc(t,a),ya(t)):Mc(bn,a.stateNode));break;case 4:c=bn,d=Li,bn=a.stateNode.containerInfo,Li=!0,Fr(t,i,a),bn=c,Li=d;break;case 0:case 11:case 14:case 15:if(!kn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,T=h.destroy;h=h.tag,T!==void 0&&((h&2)!==0||(h&4)!==0)&&au(a,i,T),d=d.next}while(d!==c)}Fr(t,i,a);break;case 1:if(!kn&&(Hs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){an(a,i,O)}Fr(t,i,a);break;case 21:Fr(t,i,a);break;case 22:a.mode&1?(kn=(c=kn)||a.memoizedState!==null,Fr(t,i,a),kn=c):Fr(t,i,a);break;default:Fr(t,i,a)}}function Sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new X0),i.forEach(function(c){var d=tv.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ni(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=t,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:bn=O.stateNode,Li=!1;break e;case 3:bn=O.stateNode.containerInfo,Li=!0;break e;case 4:bn=O.stateNode.containerInfo,Li=!0;break e}O=O.return}if(bn===null)throw Error(n(160));xp(h,T,d),bn=null,Li=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(me){an(d,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,t),i=i.sibling}function yp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ni(i,t),Yi(t),c&4){try{Ha(3,t,t.return),Zo(3,t)}catch(et){an(t,t.return,et)}try{Ha(5,t,t.return)}catch(et){an(t,t.return,et)}}break;case 1:Ni(i,t),Yi(t),c&512&&a!==null&&Hs(a,a.return);break;case 5:if(Ni(i,t),Yi(t),c&512&&a!==null&&Hs(a,a.return),t.flags&32){var d=t.stateNode;try{ve(d,"")}catch(et){an(t,t.return,et)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,T=a!==null?a.memoizedProps:h,O=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{O==="input"&&h.type==="radio"&&h.name!=null&&Mt(d,h),ye(O,T);var me=ye(O,h);for(T=0;T<W.length;T+=2){var Te=W[T],Ce=W[T+1];Te==="style"?B(d,Ce):Te==="dangerouslySetInnerHTML"?de(d,Ce):Te==="children"?ve(d,Ce):z(d,Te,Ce,me)}switch(O){case"input":ot(d,h);break;case"textarea":$t(d,h);break;case"select":var Ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ye=h.value;Ye!=null?ut(d,!!h.multiple,Ye,!1):Ee!==!!h.multiple&&(h.defaultValue!=null?ut(d,!!h.multiple,h.defaultValue,!0):ut(d,!!h.multiple,h.multiple?[]:"",!1))}d[Na]=h}catch(et){an(t,t.return,et)}}break;case 6:if(Ni(i,t),Yi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(et){an(t,t.return,et)}}break;case 3:if(Ni(i,t),Yi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ya(i.containerInfo)}catch(et){an(t,t.return,et)}break;case 4:Ni(i,t),Yi(t);break;case 13:Ni(i,t),Yi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(fu=Tt())),c&4&&Sp(t);break;case 22:if(Te=a!==null&&a.memoizedState!==null,t.mode&1?(kn=(me=kn)||Te,Ni(i,t),kn=me):Ni(i,t),Yi(t),c&8192){if(me=t.memoizedState!==null,(t.stateNode.isHidden=me)&&!Te&&(t.mode&1)!==0)for(Ke=t,Te=t.child;Te!==null;){for(Ce=Ke=Te;Ke!==null;){switch(Ee=Ke,Ye=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Ha(4,Ee,Ee.return);break;case 1:Hs(Ee,Ee.return);var Qe=Ee.stateNode;if(typeof Qe.componentWillUnmount=="function"){c=Ee,a=Ee.return;try{i=c,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(et){an(c,a,et)}}break;case 5:Hs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Tp(Ce);continue}}Ye!==null?(Ye.return=Ee,Ke=Ye):Tp(Ce)}Te=Te.sibling}e:for(Te=null,Ce=t;;){if(Ce.tag===5){if(Te===null){Te=Ce;try{d=Ce.stateNode,me?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(O=Ce.stateNode,W=Ce.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,O.style.display=R("display",T))}catch(et){an(t,t.return,et)}}}else if(Ce.tag===6){if(Te===null)try{Ce.stateNode.nodeValue=me?"":Ce.memoizedProps}catch(et){an(t,t.return,et)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===t)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===t)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===t)break e;Te===Ce&&(Te=null),Ce=Ce.return}Te===Ce&&(Te=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Ni(i,t),Yi(t),c&4&&Sp(t);break;case 21:break;default:Ni(i,t),Yi(t)}}function Yi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(vp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ve(d,""),c.flags&=-33);var h=_p(t);cu(t,h,d);break;case 3:case 4:var T=c.stateNode.containerInfo,O=_p(t);lu(t,O,T);break;default:throw Error(n(161))}}catch(W){an(t,t.return,W)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function q0(t,i,a){Ke=t,Mp(t)}function Mp(t,i,a){for(var c=(t.mode&1)!==0;Ke!==null;){var d=Ke,h=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||$o;if(!T){var O=d.alternate,W=O!==null&&O.memoizedState!==null||kn;O=$o;var me=kn;if($o=T,(kn=W)&&!me)for(Ke=d;Ke!==null;)T=Ke,W=T.child,T.tag===22&&T.memoizedState!==null?wp(d):W!==null?(W.return=T,Ke=W):wp(d);for(;h!==null;)Ke=h,Mp(h),h=h.sibling;Ke=d,$o=O,kn=me}Ep(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Ke=h):Ep(t)}}function Ep(t){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:kn||Zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!kn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Th(i,h,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Th(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Te=me.memoizedState;if(Te!==null){var Ce=Te.dehydrated;Ce!==null&&ya(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}kn||i.flags&512&&ou(i)}catch(Ee){an(i,i.return,Ee)}}if(i===t){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function Tp(t){for(;Ke!==null;){var i=Ke;if(i===t){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function wp(t){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zo(4,i)}catch(W){an(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){an(i,d,W)}}var h=i.return;try{ou(i)}catch(W){an(i,h,W)}break;case 5:var T=i.return;try{ou(i)}catch(W){an(i,T,W)}}}catch(W){an(i,i.return,W)}if(i===t){Ke=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ke=O;break}Ke=i.return}}var j0=Math.ceil,Jo=C.ReactCurrentDispatcher,uu=C.ReactCurrentOwner,xi=C.ReactCurrentBatchConfig,Nt=0,En=null,fn=null,Pn=0,oi=0,Ws=Lr(0),_n=0,Wa=null,ss=0,Qo=0,du=0,Xa=null,Jn=null,fu=0,Xs=1/0,pr=null,el=!1,hu=null,Or=null,tl=!1,kr=null,nl=0,Ya=0,pu=null,il=-1,rl=0;function qn(){return(Nt&6)!==0?Tt():il!==-1?il:il=Tt()}function Br(t){return(t.mode&1)===0?1:(Nt&2)!==0&&Pn!==0?Pn&-Pn:L0.transition!==null?(rl===0&&(rl=gn()),rl):(t=gt,t!==0||(t=window.event,t=t===void 0?16:Cf(t.type)),t)}function Ii(t,i,a,c){if(50<Ya)throw Ya=0,pu=null,Error(n(185));ln(t,a,c),((Nt&2)===0||t!==En)&&(t===En&&((Nt&2)===0&&(Qo|=a),_n===4&&zr(t,Pn)),Qn(t,c),a===1&&Nt===0&&(i.mode&1)===0&&(Xs=Tt()+500,No&&Ir()))}function Qn(t,i){var a=t.callbackNode;Ht(t,i);var c=At(t,t===En?Pn:0);if(c===0)a!==null&&yn(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&yn(a),i===1)t.tag===0?P0(Cp.bind(null,t)):fh(Cp.bind(null,t)),A0(function(){(Nt&6)===0&&Ir()}),a=null;else{switch(Ti(c)){case 1:a=sr;break;case 4:a=Vi;break;case 16:a=w;break;case 536870912:a=he;break;default:a=w}a=Up(a,Ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Ap(t,i){if(il=-1,rl=0,(Nt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ys()&&t.callbackNode!==a)return null;var c=At(t,t===En?Pn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=sl(t,c);else{i=c;var d=Nt;Nt|=2;var h=bp();(En!==t||Pn!==i)&&(pr=null,Xs=Tt()+500,os(t,i));do try{Z0();break}catch(O){Rp(t,O)}while(!0);Nc(),Jo.current=h,Nt=d,fn!==null?i=0:(En=null,Pn=0,i=_n)}if(i!==0){if(i===2&&(d=Ft(t),d!==0&&(c=d,i=mu(t,d))),i===1)throw a=Wa,os(t,0),zr(t,c),Qn(t,Tt()),a;if(i===6)zr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!K0(d)&&(i=sl(t,c),i===2&&(h=Ft(t),h!==0&&(c=h,i=mu(t,h))),i===1))throw a=Wa,os(t,0),zr(t,c),Qn(t,Tt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:ls(t,Jn,pr);break;case 3:if(zr(t,c),(c&130023424)===c&&(i=fu+500-Tt(),10<i)){if(At(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){qn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=yc(ls.bind(null,t,Jn,pr),i);break}ls(t,Jn,pr);break;case 4:if(zr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var T=31-Ue(c);h=1<<T,T=i[T],T>d&&(d=T),c&=~h}if(c=d,c=Tt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*j0(c/1960))-c,10<c){t.timeoutHandle=yc(ls.bind(null,t,Jn,pr),c);break}ls(t,Jn,pr);break;case 5:ls(t,Jn,pr);break;default:throw Error(n(329))}}}return Qn(t,Tt()),t.callbackNode===a?Ap.bind(null,t):null}function mu(t,i){var a=Xa;return t.current.memoizedState.isDehydrated&&(os(t,i).flags|=256),t=sl(t,i),t!==2&&(i=Jn,Jn=a,i!==null&&gu(i)),t}function gu(t){Jn===null?Jn=t:Jn.push.apply(Jn,t)}function K0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!Ri(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(t,i){for(i&=~du,i&=~Qo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ue(i),c=1<<a;t[a]=-1,i&=~c}}function Cp(t){if((Nt&6)!==0)throw Error(n(327));Ys();var i=At(t,0);if((i&1)===0)return Qn(t,Tt()),null;var a=sl(t,i);if(t.tag!==0&&a===2){var c=Ft(t);c!==0&&(i=c,a=mu(t,c))}if(a===1)throw a=Wa,os(t,0),zr(t,i),Qn(t,Tt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,ls(t,Jn,pr),Qn(t,Tt()),null}function vu(t,i){var a=Nt;Nt|=1;try{return t(i)}finally{Nt=a,Nt===0&&(Xs=Tt()+500,No&&Ir())}}function as(t){kr!==null&&kr.tag===0&&(Nt&6)===0&&Ys();var i=Nt;Nt|=1;var a=xi.transition,c=gt;try{if(xi.transition=null,gt=1,t)return t()}finally{gt=c,xi.transition=a,Nt=i,(Nt&6)===0&&Ir()}}function _u(){oi=Ws.current,Kt(Ws)}function os(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,w0(a)),fn!==null)for(a=fn.return;a!==null;){var c=a;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Po();break;case 3:Gs(),Kt(Kn),Kt(Un),zc();break;case 5:kc(c);break;case 4:Gs();break;case 13:Kt(Qt);break;case 19:Kt(Qt);break;case 10:Ic(c.type._context);break;case 22:case 23:_u()}a=a.return}if(En=t,fn=t=Gr(t.current,null),Pn=oi=i,_n=0,Wa=null,du=Qo=ss=0,Jn=Xa=null,ns!==null){for(i=0;i<ns.length;i++)if(a=ns[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var T=h.next;h.next=d,c.next=T}a.pending=c}ns=null}return t}function Rp(t,i){do{var a=fn;try{if(Nc(),Vo.current=Yo,Ho){for(var c=en.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ho=!1}if(rs=0,Mn=vn=en=null,ka=!1,Ba=0,uu.current=null,a===null||a.return===null){_n=1,Wa=i,fn=null;break}e:{var h=t,T=a.return,O=a,W=i;if(i=Pn,O.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var me=W,Te=O,Ce=Te.tag;if((Te.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var Ye=Qh(T);if(Ye!==null){Ye.flags&=-257,ep(Ye,T,O,h,i),Ye.mode&1&&Jh(h,me,i),i=Ye,W=me;var Qe=i.updateQueue;if(Qe===null){var et=new Set;et.add(W),i.updateQueue=et}else Qe.add(W);break e}else{if((i&1)===0){Jh(h,me,i),xu();break e}W=Error(n(426))}}else if(Jt&&O.mode&1){var cn=Qh(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),ep(cn,T,O,h,i),Pc(Vs(W,O));break e}}h=W=Vs(W,O),_n!==4&&(_n=2),Xa===null?Xa=[h]:Xa.push(h),h=T;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ce=$h(h,W,i);Eh(h,ce);break e;case 1:O=W;var J=h.type,fe=h.stateNode;if((h.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Or===null||!Or.has(fe)))){h.flags|=65536,i&=-i,h.lanes|=i;var Pe=Zh(h,O,i);Eh(h,Pe);break e}}h=h.return}while(h!==null)}Lp(a)}catch(it){i=it,fn===a&&a!==null&&(fn=a=a.return);continue}break}while(!0)}function bp(){var t=Jo.current;return Jo.current=Yo,t===null?Yo:t}function xu(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(ss&268435455)===0&&(Qo&268435455)===0||zr(En,Pn)}function sl(t,i){var a=Nt;Nt|=2;var c=bp();(En!==t||Pn!==i)&&(pr=null,os(t,i));do try{$0();break}catch(d){Rp(t,d)}while(!0);if(Nc(),Nt=a,Jo.current=c,fn!==null)throw Error(n(261));return En=null,Pn=0,_n}function $0(){for(;fn!==null;)Pp(fn)}function Z0(){for(;fn!==null&&!Nn();)Pp(fn)}function Pp(t){var i=Dp(t.alternate,t,oi);t.memoizedProps=t.pendingProps,i===null?Lp(t):fn=i,uu.current=null}function Lp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=H0(a,i,oi),a!==null){fn=a;return}}else{if(a=W0(a,i),a!==null){a.flags&=32767,fn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_n=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=t}while(i!==null);_n===0&&(_n=5)}function ls(t,i,a){var c=gt,d=xi.transition;try{xi.transition=null,gt=1,J0(t,i,a,c)}finally{xi.transition=d,gt=c}return null}function J0(t,i,a,c){do Ys();while(kr!==null);if((Nt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Ct(t,h),t===En&&(fn=En=null,Pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,Up(w,function(){return Ys(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=xi.transition,xi.transition=null;var T=gt;gt=1;var O=Nt;Nt|=4,uu.current=null,Y0(t,a),yp(a,t),_0(xc),go=!!_c,xc=_c=null,t.current=a,q0(a),In(),Nt=O,gt=T,xi.transition=h}else t.current=a;if(tl&&(tl=!1,kr=t,nl=d),h=t.pendingLanes,h===0&&(Or=null),ze(a.stateNode),Qn(t,Tt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,t=hu,hu=null,t;return(nl&1)!==0&&t.tag!==0&&Ys(),h=t.pendingLanes,(h&1)!==0?t===pu?Ya++:(Ya=0,pu=t):Ya=0,Ir(),null}function Ys(){if(kr!==null){var t=Ti(nl),i=xi.transition,a=gt;try{if(xi.transition=null,gt=16>t?16:t,kr===null)var c=!1;else{if(t=kr,kr=null,nl=0,(Nt&6)!==0)throw Error(n(331));var d=Nt;for(Nt|=4,Ke=t.current;Ke!==null;){var h=Ke,T=h.child;if((Ke.flags&16)!==0){var O=h.deletions;if(O!==null){for(var W=0;W<O.length;W++){var me=O[W];for(Ke=me;Ke!==null;){var Te=Ke;switch(Te.tag){case 0:case 11:case 15:Ha(8,Te,h)}var Ce=Te.child;if(Ce!==null)Ce.return=Te,Ke=Ce;else for(;Ke!==null;){Te=Ke;var Ee=Te.sibling,Ye=Te.return;if(gp(Te),Te===me){Ke=null;break}if(Ee!==null){Ee.return=Ye,Ke=Ee;break}Ke=Ye}}}var Qe=h.alternate;if(Qe!==null){var et=Qe.child;if(et!==null){Qe.child=null;do{var cn=et.sibling;et.sibling=null,et=cn}while(et!==null)}}Ke=h}}if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,Ke=T;else e:for(;Ke!==null;){if(h=Ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ha(9,h,h.return)}var ce=h.sibling;if(ce!==null){ce.return=h.return,Ke=ce;break e}Ke=h.return}}var J=t.current;for(Ke=J;Ke!==null;){T=Ke;var fe=T.child;if((T.subtreeFlags&2064)!==0&&fe!==null)fe.return=T,Ke=fe;else e:for(T=J;Ke!==null;){if(O=Ke,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Zo(9,O)}}catch(it){an(O,O.return,it)}if(O===T){Ke=null;break e}var Pe=O.sibling;if(Pe!==null){Pe.return=O.return,Ke=Pe;break e}Ke=O.return}}if(Nt=d,Ir(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ae,t)}catch{}c=!0}return c}finally{gt=a,xi.transition=i}}return!1}function Np(t,i,a){i=Vs(a,i),i=$h(t,i,1),t=Ur(t,i,1),i=qn(),t!==null&&(ln(t,1,i),Qn(t,i))}function an(t,i,a){if(t.tag===3)Np(t,t,a);else for(;i!==null;){if(i.tag===3){Np(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Or===null||!Or.has(c))){t=Vs(a,t),t=Zh(i,t,1),i=Ur(i,t,1),t=qn(),i!==null&&(ln(i,1,t),Qn(i,t));break}}i=i.return}}function Q0(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=qn(),t.pingedLanes|=t.suspendedLanes&a,En===t&&(Pn&a)===a&&(_n===4||_n===3&&(Pn&130023424)===Pn&&500>Tt()-fu?os(t,0):du|=a),Qn(t,i)}function Ip(t,i){i===0&&((t.mode&1)===0?i=1:(i=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var a=qn();t=dr(t,i),t!==null&&(ln(t,i,a),Qn(t,a))}function ev(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Ip(t,a)}function tv(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Ip(t,a)}var Dp;Dp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Kn.current)Zn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Zn=!1,V0(t,i,a);Zn=(t.flags&131072)!==0}else Zn=!1,Jt&&(i.flags&1048576)!==0&&hh(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ko(t,i),t=i.pendingProps;var d=Ds(i,Un.current);zs(i,a),d=Hc(null,i,c,t,d,a);var h=Wc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$n(c)?(h=!0,Lo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fc(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,$c(i,c,t,a),i=eu(null,i,c,!0,h,a)):(i.tag=0,Jt&&h&&Ac(i),Yn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ko(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=iv(c),t=Pi(c,t),d){case 0:i=Qc(null,i,c,t,a);break e;case 1:i=ap(null,i,c,t,a);break e;case 11:i=tp(null,i,c,t,a);break e;case 14:i=np(null,i,c,Pi(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),Qc(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),ap(t,i,c,d,a);case 3:e:{if(op(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Mh(t,i),zo(i,c,null,a);var T=i.memoizedState;if(c=T.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Vs(Error(n(423)),i),i=lp(t,i,c,a,d);break e}else if(c!==d){d=Vs(Error(n(424)),i),i=lp(t,i,c,a,d);break e}else for(ai=Pr(i.stateNode.containerInfo.firstChild),si=i,Jt=!0,bi=null,a=Sh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Os(),c===d){i=hr(t,i,a);break e}Yn(t,i,c,a)}i=i.child}return i;case 5:return wh(i),t===null&&bc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,T=d.children,Sc(c,d)?T=null:h!==null&&Sc(c,h)&&(i.flags|=32),sp(t,i),Yn(t,i,T,a),i.child;case 6:return t===null&&bc(i),null;case 13:return cp(t,i,a);case 4:return Oc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ks(i,null,c,a):Yn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),tp(t,i,c,d,a);case 7:return Yn(t,i,i.pendingProps,a),i.child;case 8:return Yn(t,i,i.pendingProps.children,a),i.child;case 12:return Yn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,T=d.value,Xt(Oo,c._currentValue),c._currentValue=T,h!==null)if(Ri(h.value,T)){if(h.children===d.children&&!Kn.current){i=hr(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var O=h.dependencies;if(O!==null){T=h.child;for(var W=O.firstContext;W!==null;){if(W.context===c){if(h.tag===1){W=fr(-1,a&-a),W.tag=2;var me=h.updateQueue;if(me!==null){me=me.shared;var Te=me.pending;Te===null?W.next=W:(W.next=Te.next,Te.next=W),me.pending=W}}h.lanes|=a,W=h.alternate,W!==null&&(W.lanes|=a),Dc(h.return,a,i),O.lanes|=a;break}W=W.next}}else if(h.tag===10)T=h.type===i.type?null:h.child;else if(h.tag===18){if(T=h.return,T===null)throw Error(n(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),Dc(T,a,i),T=h.sibling}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===i){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}Yn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,zs(i,a),d=vi(d),c=c(d),i.flags|=1,Yn(t,i,c,a),i.child;case 14:return c=i.type,d=Pi(c,i.pendingProps),d=Pi(c.type,d),np(t,i,c,d,a);case 15:return ip(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),Ko(t,i),i.tag=1,$n(c)?(t=!0,Lo(i)):t=!1,zs(i,a),jh(i,c,d),$c(i,c,d,a),eu(null,i,c,!0,t,a);case 19:return dp(t,i,a);case 22:return rp(t,i,a)}throw Error(n(156,i.tag))};function Up(t,i){return qt(t,i)}function nv(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,i,a,c){return new nv(t,i,a,c)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iv(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===Q)return 14}return 2}function Gr(t,i){var a=t.alternate;return a===null?(a=Si(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function al(t,i,a,c,d,h){var T=2;if(c=t,typeof t=="function")Su(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case F:return cs(a.children,d,h,i);case E:T=8,d|=8;break;case N:return t=Si(12,a,i,d|2),t.elementType=N,t.lanes=h,t;case re:return t=Si(13,a,i,d),t.elementType=re,t.lanes=h,t;case X:return t=Si(19,a,i,d),t.elementType=X,t.lanes=h,t;case ie:return ol(a,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:T=10;break e;case j:T=9;break e;case Z:T=11;break e;case Q:T=14;break e;case pe:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Si(T,a,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function cs(t,i,a,c){return t=Si(7,t,c,i),t.lanes=a,t}function ol(t,i,a,c){return t=Si(22,t,c,i),t.elementType=ie,t.lanes=a,t.stateNode={isHidden:!1},t}function yu(t,i,a){return t=Si(6,t,null,i),t.lanes=a,t}function Mu(t,i,a){return i=Si(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function rv(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xe(0),this.expirationTimes=Xe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Eu(t,i,a,c,d,h,T,O,W){return t=new rv(t,i,a,O,W),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Si(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(h),t}function sv(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Fp(t){if(!t)return Nr;t=t._reactInternals;e:{if(Rn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if($n(a))return uh(t,a,i)}return i}function Op(t,i,a,c,d,h,T,O,W){return t=Eu(a,c,!0,t,d,h,T,O,W),t.context=Fp(null),a=t.current,c=qn(),d=Br(a),h=fr(c,d),h.callback=i??null,Ur(a,h,d),t.current.lanes=d,ln(t,d,c),Qn(t,c),t}function ll(t,i,a,c){var d=i.current,h=qn(),T=Br(d);return a=Fp(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(h,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Ur(d,i,T),t!==null&&(Ii(t,d,T,h),Bo(t,d,T)),T}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Tu(t,i){kp(t,i),(t=t.alternate)&&kp(t,i)}function av(){return null}var Bp=typeof reportError=="function"?reportError:function(t){console.error(t)};function wu(t){this._internalRoot=t}ul.prototype.render=wu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ll(t,i,null,null)},ul.prototype.unmount=wu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;as(function(){ll(null,t,null,null)}),i[or]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var i=wi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Cr.length&&i!==0&&i<Cr[a].priority;a++);Cr.splice(a,0,t),a===0&&wf(t)}};function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function ov(t,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var me=cl(T);h.call(me)}}var T=Op(i,c,t,0,null,!1,!1,"",zp);return t._reactRootContainer=T,t[or]=T.current,Pa(t.nodeType===8?t.parentNode:t),as(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var me=cl(W);O.call(me)}}var W=Eu(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=W,t[or]=W.current,Pa(t.nodeType===8?t.parentNode:t),as(function(){ll(i,W,a,c)}),W}function fl(t,i,a,c,d){var h=a._reactRootContainer;if(h){var T=h;if(typeof d=="function"){var O=d;d=function(){var W=cl(T);O.call(W)}}ll(i,T,t,d)}else T=ov(a,i,t,d,c);return cl(T)}ar=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=je(i.pendingLanes);a!==0&&(Dn(i,a|1),Qn(i,Tt()),(Nt&6)===0&&(Xs=Tt()+500,Ir()))}break;case 13:as(function(){var c=dr(t,1);if(c!==null){var d=qn();Ii(c,t,1,d)}}),Tu(t,1)}},It=function(t){if(t.tag===13){var i=dr(t,134217728);if(i!==null){var a=qn();Ii(i,t,134217728,a)}Tu(t,134217728)}},Zt=function(t){if(t.tag===13){var i=Br(t),a=dr(t,i);if(a!==null){var c=qn();Ii(a,t,i,c)}Tu(t,i)}},wi=function(){return gt},zt=function(t,i){var a=gt;try{return gt=t,i()}finally{gt=a}},Ne=function(t,i,a){switch(i){case"input":if(ot(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=bo(c);if(!d)throw Error(n(90));tt(c),ot(c,d)}}}break;case"textarea":$t(t,a);break;case"select":i=a.value,i!=null&&ut(t,!!a.multiple,i,!1)}},Ie=vu,Me=as;var lv={usingClientEntryPoint:!1,Events:[Ia,Ns,bo,ge,be,vu]},qa={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cv={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dn(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{ae=hl.inject(cv),se=hl}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv,ei.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(i))throw Error(n(200));return sv(t,i,null,a)},ei.createRoot=function(t,i){if(!Au(t))throw Error(n(299));var a=!1,c="",d=Bp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Eu(t,1,!1,null,null,a,!1,c,d),t[or]=i.current,Pa(t.nodeType===8?t.parentNode:t),new wu(i)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=dn(i),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return as(t)},ei.hydrate=function(t,i,a){if(!dl(i))throw Error(n(200));return fl(null,t,i,!0,a)},ei.hydrateRoot=function(t,i,a){if(!Au(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",T=Bp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Op(i,null,t,1,a??null,d,!1,h,T),t[or]=i.current,Pa(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ul(i)},ei.render=function(t,i,a){if(!dl(i))throw Error(n(200));return fl(null,t,i,!1,a)},ei.unmountComponentAtNode=function(t){if(!dl(t))throw Error(n(40));return t._reactRootContainer?(as(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1},ei.unstable_batchedUpdates=vu,ei.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!dl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return fl(t,i,a,!1,c)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var jp;function _v(){if(jp)return bu.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bu.exports=vv(),bu.exports}var Kp;function xv(){if(Kp)return pl;Kp=1;var s=_v();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var Sv=xv();const yv=Km(Sv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="186",Mv=0,$p=1,Ev=2,Ol=1,Tv=2,no=3,_s=0,ii=1,Zi=2,yr=0,ro=1,Zp=2,Jp=3,Qp=4,wv=5,aa=100,Av=101,Cv=102,Rv=103,bv=104,Pv=200,Lv=201,Nv=202,Iv=203,$m=204,Zm=205,Dv=206,Uv=207,Fv=208,Ov=209,kv=210,Bv=211,zv=212,Gv=213,Vv=214,fd=0,hd=1,pd=2,ao=3,md=4,gd=5,vd=6,_d=7,Jm=0,Hv=1,Wv=2,er=0,Qm=1,eg=2,tg=3,nf=4,ng=5,ig=6,rg=7,sg=300,xs=301,da=302,Nu=303,Iu=304,$l=306,Ss=1e3,Sr=1001,xd=1002,Ln=1003,Xv=1004,ml=1005,Vn=1006,Du=1007,gs=1008,fi=1009,ag=1010,og=1011,oo=1012,rf=1013,tr=1014,Ji=1015,nr=1016,sf=1017,af=1018,lo=1020,lg=35902,cg=35899,ug=1021,dg=1022,zi=1023,Tr=1026,vs=1027,fg=1028,of=1029,ys=1030,lf=1031,cf=1033,kl=33776,Bl=33777,zl=33778,Gl=33779,Sd=35840,yd=35841,Md=35842,Ed=35843,Td=36196,wd=37492,Ad=37496,Cd=37488,Rd=37489,Hl=37490,bd=37491,Pd=37808,Ld=37809,Nd=37810,Id=37811,Dd=37812,Ud=37813,Fd=37814,Od=37815,kd=37816,Bd=37817,zd=37818,Gd=37819,Vd=37820,Hd=37821,Wd=36492,Xd=36494,Yd=36495,qd=36283,jd=36284,Wl=36285,Kd=36286,Yv=3200,$d=0,qv=1,$r="",Mi="srgb",Xl="srgb-linear",Yl="linear",Gt="srgb",Uu=7680,jv=519,Kv=512,$v=513,Zv=514,uf=515,Jv=516,Qv=517,df=518,e_=519,t_=35044,em="300 es",Qi=2e3,co=2001;function n_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function i_(){const s=ql("canvas");return s.style.display="block",s}const tm={};function nm(...s){const e="THREE."+s.shift();console.log(e,...s)}function hg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=hg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Ut(...s){s=hg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function ca(...s){const e=s.join(" ");e in tm||(tm[e]=!0,dt(...s))}function r_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const s_={[fd]:hd,[pd]:vd,[md]:_d,[ao]:gd,[hd]:fd,[vd]:pd,[_d]:md,[gd]:ao};class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,Zd=180/Math.PI;function fo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function bt(s,e,n){return Math.max(e,Math.min(n,s))}function a_(s,e){return(s%e+e)%e}function Ou(s,e,n){return(1-n)*s+n*e}function Ka(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xf=class xf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xf.prototype.isVector2=!0;let Lt=xf;class pa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let m=r[o+0],p=r[o+1],_=r[o+2],S=r[o+3],g=l[u+0],M=l[u+1],A=l[u+2],b=l[u+3];if(S!==b||m!==g||p!==M||_!==A){let x=m*g+p*M+_*A+S*b;x<0&&(g=-g,M=-M,A=-A,b=-b,x=-x);let v=1-f;if(x<.9995){const D=Math.acos(x),z=Math.sin(D);v=Math.sin(v*D)/z,f=Math.sin(f*D)/z,m=m*v+g*f,p=p*v+M*f,_=_*v+A*f,S=S*v+b*f}else{m=m*v+g*f,p=p*v+M*f,_=_*v+A*f,S=S*v+b*f;const D=1/Math.sqrt(m*m+p*p+_*_+S*S);m*=D,p*=D,_*=D,S*=D}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],m=r[o+1],p=r[o+2],_=r[o+3],S=l[u],g=l[u+1],M=l[u+2],A=l[u+3];return e[n]=f*A+_*S+m*M-p*g,e[n+1]=m*A+_*g+p*S-f*M,e[n+2]=p*A+_*M+f*g-m*S,e[n+3]=_*A-f*S-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(r/2),_=f(o/2),S=f(l/2),g=m(r/2),M=m(o/2),A=m(l/2);switch(u){case"XYZ":this._x=g*_*S+p*M*A,this._y=p*M*S-g*_*A,this._z=p*_*A+g*M*S,this._w=p*_*S-g*M*A;break;case"YXZ":this._x=g*_*S+p*M*A,this._y=p*M*S-g*_*A,this._z=p*_*A-g*M*S,this._w=p*_*S+g*M*A;break;case"ZXY":this._x=g*_*S-p*M*A,this._y=p*M*S+g*_*A,this._z=p*_*A+g*M*S,this._w=p*_*S-g*M*A;break;case"ZYX":this._x=g*_*S-p*M*A,this._y=p*M*S+g*_*A,this._z=p*_*A-g*M*S,this._w=p*_*S+g*M*A;break;case"YZX":this._x=g*_*S+p*M*A,this._y=p*M*S+g*_*A,this._z=p*_*A-g*M*S,this._w=p*_*S-g*M*A;break;case"XZY":this._x=g*_*S-p*M*A,this._y=p*M*S-g*_*A,this._z=p*_*A+g*M*S,this._w=p*_*S+g*M*A;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],m=n[9],p=n[2],_=n[6],S=n[10],g=r+f+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(_-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+u*f+o*p-l*m,this._y=o*_+u*m+l*f-r*p,this._z=l*_+u*p+r*m-o*f,this._w=u*_-r*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let m=1-n;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sf=class Sf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*r),_=2*(f*n-l*o),S=2*(l*r-u*n);return this.x=n+m*p+u*S-f*_,this.y=r+m*_+f*p-l*S,this.z=o+m*S+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,m=n.z;return this.x=o*m-l*f,this.y=l*u-r*m,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sf.prototype.isVector3=!0;let ue=Sf;const ku=new ue,im=new pa,yf=class yf{constructor(e,n,r,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,m,p)}set(e,n,r,o,l,u,f,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=l,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],m=r[6],p=r[1],_=r[4],S=r[7],g=r[2],M=r[5],A=r[8],b=o[0],x=o[3],v=o[6],D=o[1],z=o[4],C=o[7],P=o[2],L=o[5],F=o[8];return l[0]=u*b+f*D+m*P,l[3]=u*x+f*z+m*L,l[6]=u*v+f*C+m*F,l[1]=p*b+_*D+S*P,l[4]=p*x+_*z+S*L,l[7]=p*v+_*C+S*F,l[2]=g*b+M*D+A*P,l[5]=g*x+M*z+A*L,l[8]=g*v+M*C+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*f*p-r*l*_+r*f*m+o*l*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],_=e[8],S=_*u-f*p,g=f*m-_*l,M=p*l-u*m,A=n*S+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(o*p-_*r)*b,e[2]=(f*r-o*u)*b,e[3]=g*b,e[4]=(_*n-o*m)*b,e[5]=(o*l-f*n)*b,e[6]=M*b,e[7]=(r*m-p*n)*b,e[8]=(u*n-r*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+n,0,0,1),this}scale(e,n){return ca("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return ca("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return ca("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;let ht=yf;const Bu=new ht,rm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){const s={enabled:!0,workingColorSpace:Xl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Gt&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(o.r=ua(o.r),o.g=ua(o.g),o.b=ua(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$r?Yl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xl]:{primaries:e,whitePoint:r,transfer:Yl,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),s}const Rt=o_();function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ua(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qs;class l_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qs===void 0&&(qs=ql("canvas")),qs.width=e.width,qs.height=e.height;const o=qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Mr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Mr(n[r]/255)*255):n[r]=Mr(n[r]);return{data:n,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class ff{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(zu(o[u].image)):l.push(zu(o[u]))}else l=zu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let u_=0;const Gu=new ue;class Hn extends Ms{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,r=Sr,o=Sr,l=Vn,u=gs,f=zi,m=fi,p=Hn.DEFAULT_ANISOTROPY,_=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=fo(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=sg;Hn.DEFAULT_ANISOTROPY=1;const Mf=class Mf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const m=e.elements,p=m[0],_=m[4],S=m[8],g=m[1],M=m[5],A=m[9],b=m[2],x=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-b)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+b)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(p+1)/2,C=(M+1)/2,P=(v+1)/2,L=(_+g)/4,F=(S+b)/4,E=(A+x)/4;return z>C&&z>P?z<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(z),o=L/r,l=F/r):C>P?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=E/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=F/l,o=E/l),this.set(r,o,l,n),this}let D=Math.sqrt((x-A)*(x-A)+(S-b)*(S-b)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(x-A)/D,this.y=(S-b)/D,this.z=(g-_)/D,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mf.prototype.isVector4=!0;let tn=Mf;class d_ extends Ms{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new tn(0,0,e,n),this.scissorTest=!1,this.viewport=new tn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Hn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new ff(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends d_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class pg extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f_ extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kl=class Kl{constructor(e,n,r,o,l,u,f,m,p,_,S,g,M,A,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,m,p,_,S,g,M,A,b,x)}set(e,n,r,o,l,u,f,m,p,_,S,g,M,A,b,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=_,v[10]=S,v[14]=g,v[3]=M,v[7]=A,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*_,M=u*S,A=f*_,b=f*S;n[0]=m*_,n[4]=-m*S,n[8]=p,n[1]=M+A*p,n[5]=g-b*p,n[9]=-f*m,n[2]=b-g*p,n[6]=A+M*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,M=m*S,A=p*_,b=p*S;n[0]=g+b*f,n[4]=A*f-M,n[8]=u*p,n[1]=u*S,n[5]=u*_,n[9]=-f,n[2]=M*f-A,n[6]=b+g*f,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,M=m*S,A=p*_,b=p*S;n[0]=g-b*f,n[4]=-u*S,n[8]=A+M*f,n[1]=M+A*f,n[5]=u*_,n[9]=b-g*f,n[2]=-u*p,n[6]=f,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,M=u*S,A=f*_,b=f*S;n[0]=m*_,n[4]=A*p-M,n[8]=g*p+b,n[1]=m*S,n[5]=b*p+g,n[9]=M*p-A,n[2]=-p,n[6]=f*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,M=u*p,A=f*m,b=f*p;n[0]=m*_,n[4]=b-g*S,n[8]=A*S+M,n[1]=S,n[5]=u*_,n[9]=-f*_,n[2]=-p*_,n[6]=M*S+A,n[10]=g-b*S}else if(e.order==="XZY"){const g=u*m,M=u*p,A=f*m,b=f*p;n[0]=m*_,n[4]=-S,n[8]=p*_,n[1]=g*S+b,n[5]=u*_,n[9]=M*S-A,n[2]=A*S-M,n[6]=f*_,n[10]=b*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,p_)}lookAt(e,n,r){const o=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),Hr.crossVectors(r,li),Hr.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Hr.crossVectors(r,li)),Hr.normalize(),gl.crossVectors(li,Hr),o[0]=Hr.x,o[4]=gl.x,o[8]=li.x,o[1]=Hr.y,o[5]=gl.y,o[9]=li.y,o[2]=Hr.z,o[6]=gl.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],m=r[8],p=r[12],_=r[1],S=r[5],g=r[9],M=r[13],A=r[2],b=r[6],x=r[10],v=r[14],D=r[3],z=r[7],C=r[11],P=r[15],L=o[0],F=o[4],E=o[8],N=o[12],k=o[1],j=o[5],Z=o[9],re=o[13],X=o[2],Q=o[6],pe=o[10],ie=o[14],q=o[3],ee=o[7],ne=o[11],I=o[15];return l[0]=u*L+f*k+m*X+p*q,l[4]=u*F+f*j+m*Q+p*ee,l[8]=u*E+f*Z+m*pe+p*ne,l[12]=u*N+f*re+m*ie+p*I,l[1]=_*L+S*k+g*X+M*q,l[5]=_*F+S*j+g*Q+M*ee,l[9]=_*E+S*Z+g*pe+M*ne,l[13]=_*N+S*re+g*ie+M*I,l[2]=A*L+b*k+x*X+v*q,l[6]=A*F+b*j+x*Q+v*ee,l[10]=A*E+b*Z+x*pe+v*ne,l[14]=A*N+b*re+x*ie+v*I,l[3]=D*L+z*k+C*X+P*q,l[7]=D*F+z*j+C*Q+P*ee,l[11]=D*E+z*Z+C*pe+P*ne,l[15]=D*N+z*re+C*ie+P*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],_=e[2],S=e[6],g=e[10],M=e[14],A=e[3],b=e[7],x=e[11],v=e[15],D=m*M-p*g,z=f*M-p*S,C=f*g-m*S,P=u*M-p*_,L=u*g-m*_,F=u*S-f*_;return n*(b*D-x*z+v*C)-r*(A*D-x*P+v*L)+o*(A*z-b*P+v*F)-l*(A*C-b*L+x*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],_=e[10];return n*(u*_-f*p)-r*(l*_-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],_=e[8],S=e[9],g=e[10],M=e[11],A=e[12],b=e[13],x=e[14],v=e[15],D=n*f-r*u,z=n*m-o*u,C=n*p-l*u,P=r*m-o*f,L=r*p-l*f,F=o*p-l*m,E=_*b-S*A,N=_*x-g*A,k=_*v-M*A,j=S*x-g*b,Z=S*v-M*b,re=g*v-M*x,X=D*re-z*Z+C*j+P*k-L*N+F*E;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/X;return e[0]=(f*re-m*Z+p*j)*Q,e[1]=(o*Z-r*re-l*j)*Q,e[2]=(b*F-x*L+v*P)*Q,e[3]=(g*L-S*F-M*P)*Q,e[4]=(m*k-u*re-p*N)*Q,e[5]=(n*re-o*k+l*N)*Q,e[6]=(x*C-A*F-v*z)*Q,e[7]=(_*F-g*C+M*z)*Q,e[8]=(u*Z-f*k+p*E)*Q,e[9]=(r*k-n*Z-l*E)*Q,e[10]=(A*L-b*C+v*D)*Q,e[11]=(S*C-_*L-M*D)*Q,e[12]=(f*N-u*j-m*E)*Q,e[13]=(n*j-r*N+o*E)*Q,e[14]=(b*z-A*P-x*D)*Q,e[15]=(_*P-S*z+g*D)*Q,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,m=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-o*m,p*m+o*f,0,p*f+o*m,_*f+r,_*m-o*u,0,p*m-o*f,_*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,m=n._w,p=l+l,_=u+u,S=f+f,g=l*p,M=l*_,A=l*S,b=u*_,x=u*S,v=f*S,D=m*p,z=m*_,C=m*S,P=r.x,L=r.y,F=r.z;return o[0]=(1-(b+v))*P,o[1]=(M+C)*P,o[2]=(A-z)*P,o[3]=0,o[4]=(M-C)*L,o[5]=(1-(g+v))*L,o[6]=(x+D)*L,o[7]=0,o[8]=(A+z)*F,o[9]=(x-D)*F,o[10]=(1-(g+b))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=js.set(o[0],o[1],o[2]).length();const f=js.set(o[4],o[5],o[6]).length(),m=js.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Di.copy(this);const p=1/u,_=1/f,S=1/m;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=S,Di.elements[9]*=S,Di.elements[10]*=S,n.setFromRotationMatrix(Di),r.x=u,r.y=f,r.z=m,this}makePerspective(e,n,r,o,l,u,f=Qi,m=!1){const p=this.elements,_=2*l/(n-e),S=2*l/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let A,b;if(m)A=l/(u-l),b=u*l/(u-l);else if(f===Qi)A=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===co)A=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Qi,m=!1){const p=this.elements,_=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let A,b;if(m)A=1/(u-l),b=u/(u-l);else if(f===Qi)A=-2/(u-l),b=-(u+l)/(u-l);else if(f===co)A=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Kl.prototype.isMatrix4=!0;let on=Kl;const js=new ue,Di=new on,h_=new ue(0,0,0),p_=new ue(1,1,1),Hr=new ue,gl=new ue,li=new ue,am=new on,om=new pa;class Zr{constructor(e=0,n=0,r=0,o=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],_=o[9],S=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-bt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const lm=new ue,Ks=new pa,mr=new on,vl=new ue,$a=new ue,g_=new ue,v_=new pa,cm=new ue(1,0,0),um=new ue(0,1,0),dm=new ue(0,0,1),fm={type:"added"},__={type:"removed"},$s={type:"childadded",child:null},Vu={type:"childremoved",child:null};class Wn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ue,n=new Zr,r=new pa,o=new ue(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new ht}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?vl.copy(e):vl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt($a,vl,this.up):mr.lookAt(vl,$a,this.up),this.quaternion.setFromRotationMatrix(mr),o&&(mr.extractRotation(o.matrixWorld),Ks.setFromRotationMatrix(mr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),$s.child=e,this.dispatchEvent($s),$s.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(__),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const S=m[p];l(e.shapes,S)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(n){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),S=u(e.shapes),g=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const m=[];for(const p in f){const _=f[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Wn.DEFAULT_UP=new ue(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gn extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,r),v=this._getHandJoint(p,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&g>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Gn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Wu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=a_(e,1),n=bt(n,0,1),r=bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Wu(u,l,e+1/3),this.g=Wu(u,l,e),this.b=Wu(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=Mi){function r(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mi){const r=gg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Rt.workingToColorSpace(zn.copy(this),e),Math.round(bt(zn.r*255,0,255))*65536+Math.round(bt(zn.g*255,0,255))*256+Math.round(bt(zn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(zn.copy(this),n);const r=zn.r,o=zn.g,l=zn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let m,p;const _=(f+u)/2;if(f===u)m=0,p=0;else{const S=u-f;switch(p=_<=.5?S/(u+f):S/(2-u-f),u){case r:m=(o-l)/S+(o<l?6:0);break;case o:m=(l-r)/S+2;break;case l:m=(r-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(zn.copy(this),n),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Mi){Rt.workingToColorSpace(zn.copy(this),e);const n=zn.r,r=zn.g,o=zn.b;return e!==Mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+n,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Wr),e.getHSL(_l);const r=Ou(Wr.h,_l.h,n),o=Ou(Wr.s,_l.s,n),l=Ou(Wr.l,_l.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Pt;Pt.NAMES=gg;class hf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(e),this.density=n}clone(){return new hf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class S_ extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ui=new ue,gr=new ue,Xu=new ue,vr=new ue,Zs=new ue,Js=new ue,hm=new ue,Yu=new ue,qu=new ue,ju=new ue,Ku=new tn,$u=new tn,Zu=new tn;class Bi{constructor(e=new ue,n=new ue,r=new ue){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ui.subVectors(e,n),o.cross(Ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Ui.subVectors(o,n),gr.subVectors(r,n),Xu.subVectors(e,n);const u=Ui.dot(Ui),f=Ui.dot(gr),m=Ui.dot(Xu),p=gr.dot(gr),_=gr.dot(Xu),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,M=(p*m-f*_)*g,A=(u*_-f*m)*g;return l.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,n,r,o,l,u,f,m){return this.getBarycoord(e,n,r,o,vr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,vr.x),m.addScaledVector(u,vr.y),m.addScaledVector(f,vr.z),m)}static getInterpolatedAttribute(e,n,r,o,l,u){return Ku.setScalar(0),$u.setScalar(0),Zu.setScalar(0),Ku.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector($u,l.y),u.addScaledVector(Zu,l.z),u}static isFrontFacing(e,n,r,o){return Ui.subVectors(r,n),gr.subVectors(e,n),Ui.cross(gr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ui.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Bi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Zs.subVectors(o,r),Js.subVectors(l,r),Yu.subVectors(e,r);const m=Zs.dot(Yu),p=Js.dot(Yu);if(m<=0&&p<=0)return n.copy(r);qu.subVectors(e,o);const _=Zs.dot(qu),S=Js.dot(qu);if(_>=0&&S<=_)return n.copy(o);const g=m*S-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(r).addScaledVector(Zs,u);ju.subVectors(e,l);const M=Zs.dot(ju),A=Js.dot(ju);if(A>=0&&M<=A)return n.copy(l);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return f=p/(p-A),n.copy(r).addScaledVector(Js,f);const x=_*A-M*S;if(x<=0&&S-_>=0&&M-A>=0)return hm.subVectors(l,o),f=(S-_)/(S-_+(M-A)),n.copy(o).addScaledVector(hm,f);const v=1/(x+b+g);return u=b*v,f=g*v,n.copy(r).addScaledVector(Zs,u).addScaledVector(Js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ho{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(l,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xl.copy(r.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Sl.subVectors(this.max,Za),Qs.subVectors(e.a,Za),ea.subVectors(e.b,Za),ta.subVectors(e.c,Za),Xr.subVectors(ea,Qs),Yr.subVectors(ta,ea),us.subVectors(Qs,ta);let n=[0,-Xr.z,Xr.y,0,-Yr.z,Yr.y,0,-us.z,us.y,Xr.z,0,-Xr.x,Yr.z,0,-Yr.x,us.z,0,-us.x,-Xr.y,Xr.x,0,-Yr.y,Yr.x,0,-us.y,us.x,0];return!Ju(n,Qs,ea,ta,Sl)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,Qs,ea,ta,Sl))?!1:(yl.crossVectors(Xr,Yr),n=[yl.x,yl.y,yl.z],Ju(n,Qs,ea,ta,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Fi=new ue,xl=new ho,Qs=new ue,ea=new ue,ta=new ue,Xr=new ue,Yr=new ue,us=new ue,Za=new ue,Sl=new ue,yl=new ue,ds=new ue;function Ju(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ds.fromArray(s,l);const f=o.x*Math.abs(ds.x)+o.y*Math.abs(ds.y)+o.z*Math.abs(ds.z),m=e.dot(ds),p=n.dot(ds),_=r.dot(ds);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>f)return!1}return!0}const hn=new ue,Ml=new Lt;let y_=0;class Er extends Ms{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=t_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ka(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ti(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ka(n,this.array)),n}setX(e,n){return this.normalized&&(n=ti(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ka(n,this.array)),n}setY(e,n){return this.normalized&&(n=ti(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ka(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ti(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ka(n,this.array)),n}setW(e,n){return this.normalized&&(n=ti(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),o=ti(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),o=ti(o,this.array),l=ti(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vg extends Er{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class _g extends Er{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class un extends Er{constructor(e,n,r){super(new Float32Array(e),n,r)}}const M_=new ho,Ja=new ue,Qu=new ue;class pf{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):M_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const n=Ja.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ja,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Qu)),this.expandByPoint(Ja.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let E_=0;const yi=new on,ed=new Wn,na=new ue,ci=new ho,Qa=new ho,wn=new ue;class hi extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?_g:vg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,n,r){return yi.makeTranslation(e,n,r),this.applyMatrix4(yi),this}scale(e,n,r){return yi.makeScale(e,n,r),this.applyMatrix4(yi),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Qa.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(ci.min,Qa.min),ci.expandByPoint(wn),wn.addVectors(ci.max,Qa.max),ci.expandByPoint(wn)):(ci.expandByPoint(Qa.min),ci.expandByPoint(Qa.max))}ci.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)wn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(wn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],m=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)wn.fromBufferAttribute(f,p),m&&(na.fromBufferAttribute(e,p),wn.add(na)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Er(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let E=0;E<r.count;E++)f[E]=new ue,m[E]=new ue;const p=new ue,_=new ue,S=new ue,g=new Lt,M=new Lt,A=new Lt,b=new ue,x=new ue;function v(E,N,k){p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,N),S.fromBufferAttribute(r,k),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,N),A.fromBufferAttribute(l,k),_.sub(p),S.sub(p),M.sub(g),A.sub(g);const j=1/(M.x*A.y-A.x*M.y);isFinite(j)&&(b.copy(_).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(j),x.copy(S).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(j),f[E].add(b),f[N].add(b),f[k].add(b),m[E].add(x),m[N].add(x),m[k].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let E=0,N=D.length;E<N;++E){const k=D[E],j=k.start,Z=k.count;for(let re=j,X=j+Z;re<X;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const z=new ue,C=new ue,P=new ue,L=new ue;function F(E){P.fromBufferAttribute(o,E),L.copy(P);const N=f[E];z.copy(N),z.sub(P.multiplyScalar(P.dot(N))).normalize(),C.crossVectors(L,N);const j=C.dot(m[E])<0?-1:1;u.setXYZW(E,z.x,z.y,z.z,j)}for(let E=0,N=D.length;E<N;++E){const k=D[E],j=k.start,Z=k.count;for(let re=j,X=j+Z;re<X;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Er(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ue,l=new ue,u=new ue,f=new ue,m=new ue,p=new ue,_=new ue,S=new ue;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),b=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),f.add(_),m.add(_),p.add(_),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(f,m){const p=f.array,_=f.itemSize,S=f.normalized,g=new p.constructor(m.length*_);let M=0,A=0;for(let b=0,x=m.length;b<x;b++){f.isInterleavedBufferAttribute?M=m[b]*f.data.stride+f.offset:M=m[b]*_;for(let v=0;v<_;v++)g[A++]=p[M++]}return new Er(g,_,S)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let _=0,S=p.length;_<S;_++){const g=p[_],M=e(g,r);m.push(M)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let S=0,g=p.length;S<g;S++){const M=p[S];_.push(M.toJSON(e.data))}_.length>0&&(o[m]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const l=e.morphAttributes;for(const p in l){const _=[],S=l[p];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new ue,T_=new ue,w_=new ht;class jr{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=td.subVectors(r,n).cross(T_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(td),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||w_.getNormalMatrix(e),o=this.coplanarPoint(td).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let A_=0;class po extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=ro,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$m,this.blendDst=Zm,this.blendEquation=aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uu,this.stencilZFail=Uu,this.stencilZPass=Uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){dt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new jr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new ue,nd=new ue,El=new ue,Tl=new ue;class C_{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,n),xr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){nd.copy(e).add(n).multiplyScalar(.5),El.copy(n).sub(e).normalize(),Tl.copy(this.origin).sub(nd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(El),f=Tl.dot(this.direction),m=-Tl.dot(El),p=Tl.lengthSq(),_=Math.abs(1-u*u);let S,g,M,A;if(_>0)if(S=u*m-f,g=u*f-m,A=l*_,S>=0)if(g>=-A)if(g<=A){const b=1/_;S*=b,g*=b,M=S*(S+u*g+2*f)+g*(u*S+g+2*m)+p}else g=l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*m)+p;else g=-l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*m)+p;else g<=-A?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-m),l),M=-S*S+g*(g+2*m)+p):g<=A?(S=0,g=Math.min(Math.max(-l,-m),l),M=g*(g+2*m)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-m),l),M=-S*S+g*(g+2*m)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(nd).addScaledVector(El,g),M}intersectSphere(e,n){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),o=xr.dot(xr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,m;const p=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,_=f.z,S=e.x-u.x,g=e.y-u.y,M=e.z-u.z,A=n.x-u.x,b=n.y-u.y,x=n.z-u.z,v=r.x-u.x,D=r.y-u.y,z=r.z-u.z,C=Math.abs(m),P=Math.abs(p),L=Math.abs(_);let F,E,N,k,j,Z,re,X,Q,pe,ie,q;if(C>=P&&C>=L?(N=m,Z=S,Q=A,q=v,m>=0?(F=p,E=_,k=g,j=M,re=b,X=x,pe=D,ie=z):(F=_,E=p,k=M,j=g,re=x,X=b,pe=z,ie=D)):P>=L?(N=p,Z=g,Q=b,q=D,p>=0?(F=_,E=m,k=M,j=S,re=x,X=A,pe=z,ie=v):(F=m,E=_,k=S,j=M,re=A,X=x,pe=v,ie=z)):(N=_,Z=M,Q=x,q=z,_>=0?(F=m,E=p,k=S,j=g,re=A,X=b,pe=v,ie=D):(F=p,E=m,k=g,j=S,re=b,X=A,pe=D,ie=v)),N===0)return null;const ee=F/N,ne=E/N,I=1/N,oe=k-ee*Z,Se=j-ne*Z,Ve=re-ee*Q,Fe=X-ne*Q,Oe=pe-ee*q,le=ie-ne*q,$=Oe*Fe-le*Ve,Re=oe*le-Se*Oe,He=Ve*Se-Fe*oe;if(o){if($<0||Re<0||He<0)return null}else if(($<0||Re<0||He<0)&&($>0||Re>0||He>0))return null;const De=$+Re+He;if(De===0)return null;const tt=I*($*Z+Re*Q+He*q);return(De>0?tt<0:tt>0)?null:this.at(tt/De,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pm=new on,fs=new C_,wl=new pf,mm=new ue,Al=new ue,Cl=new ue,Rl=new ue,id=new ue,bl=new ue,gm=new ue,Pl=new ue;class ct extends Wn{constructor(e=new hi,n=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){bl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const _=f[m],S=l[m];_!==0&&(id.fromBufferAttribute(S,e),u?bl.addScaledVector(id,_):bl.addScaledVector(id.sub(n),_))}n.add(bl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(wl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(wl,mm)===null||fs.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(l).invert(),fs.copy(e.ray).applyMatrix4(pm),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,fs)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,b=g.length;A<b;A++){const x=g[A],v=u[x.materialIndex],D=Math.max(x.start,M.start),z=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let C=D,P=z;C<P;C+=3){const L=f.getX(C),F=f.getX(C+1),E=f.getX(C+2);o=Ll(this,v,e,r,p,_,S,L,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let x=A,v=b;x<v;x+=3){const D=f.getX(x),z=f.getX(x+1),C=f.getX(x+2);o=Ll(this,u,e,r,p,_,S,D,z,C),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let A=0,b=g.length;A<b;A++){const x=g[A],v=u[x.materialIndex],D=Math.max(x.start,M.start),z=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let C=D,P=z;C<P;C+=3){const L=C,F=C+1,E=C+2;o=Ll(this,v,e,r,p,_,S,L,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let x=A,v=b;x<v;x+=3){const D=x,z=x+1,C=x+2;o=Ll(this,u,e,r,p,_,S,D,z,C),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function R_(s,e,n,r,o,l,u,f){let m;if(e.side===ii?m=r.intersectTriangle(u,l,o,!0,f):m=r.intersectTriangle(o,l,u,e.side===_s,f),m===null)return null;Pl.copy(f),Pl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Pl);return p<n.near||p>n.far?null:{distance:p,point:Pl.clone(),object:s}}function Ll(s,e,n,r,o,l,u,f,m,p){s.getVertexPosition(f,Al),s.getVertexPosition(m,Cl),s.getVertexPosition(p,Rl);const _=R_(s,e,n,r,Al,Cl,Rl,gm);if(_){const S=new ue;Bi.getBarycoord(gm,Al,Cl,Rl,S),o&&(_.uv=Bi.getInterpolatedAttribute(o,f,m,p,S,new Lt)),l&&(_.uv1=Bi.getInterpolatedAttribute(l,f,m,p,S,new Lt)),u&&(_.normal=Bi.getInterpolatedAttribute(u,f,m,p,S,new ue),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:m,c:p,normal:new ue,materialIndex:0};Bi.getNormal(Al,Cl,Rl,g.normal),_.face=g,_.barycoord=S}return _}class b_ extends Hn{constructor(e=null,n=1,r=1,o,l,u,f,m,p=Ln,_=Ln,S,g){super(null,u,f,m,p,_,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hs=new pf,P_=new Lt(.5,.5),Nl=new ue;class mf{constructor(e=new jr,n=new jr,r=new jr,o=new jr,l=new jr,u=new jr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Qi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],_=l[4],S=l[5],g=l[6],M=l[7],A=l[8],b=l[9],x=l[10],v=l[11],D=l[12],z=l[13],C=l[14],P=l[15];if(o[0].setComponents(p-u,M-_,v-A,P-D).normalize(),o[1].setComponents(p+u,M+_,v+A,P+D).normalize(),o[2].setComponents(p+f,M+S,v+b,P+z).normalize(),o[3].setComponents(p-f,M-S,v-b,P-z).normalize(),r)o[4].setComponents(m,g,x,C).normalize(),o[5].setComponents(p-m,M-g,v-x,P-C).normalize();else if(o[4].setComponents(p-m,M-g,v-x,P-C).normalize(),n===Qi)o[5].setComponents(p+m,M+g,v+x,P+C).normalize();else if(n===co)o[5].setComponents(m,g,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const n=P_.distanceTo(e.center);return hs.radius=.7071067811865476+n,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Nl.x=o.normal.x>0?e.max.x:e.min.x,Nl.y=o.normal.y>0?e.max.y:e.min.y,Nl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xg extends Hn{constructor(e=[],n=xs,r,o,l,u,f,m,p,_){super(e,n,r,o,l,u,f,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gf extends Hn{constructor(e,n,r,o,l,u,f,m,p){super(e,n,r,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uo extends Hn{constructor(e,n,r=tr,o,l,u,f=Ln,m=Ln,p,_=Tr,S=1){if(_!==Tr&&_!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,l,u,f,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class L_ extends uo{constructor(e,n=tr,r=xs,o,l,u=Ln,f=Ln,m,p=Tr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,n,r,o,l,u,f,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sg extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ni extends hi{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],_=[],S=[];let g=0,M=0;A("z","y","x",-1,-1,r,n,e,u,l,0),A("z","y","x",1,-1,r,n,-e,u,l,1),A("x","z","y",1,1,e,r,n,o,u,2),A("x","z","y",1,-1,e,r,-n,o,u,3),A("x","y","z",1,-1,e,n,r,o,l,4),A("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(S,2));function A(b,x,v,D,z,C,P,L,F,E,N){const k=C/F,j=P/E,Z=C/2,re=P/2,X=L/2,Q=F+1,pe=E+1;let ie=0,q=0;const ee=new ue;for(let ne=0;ne<pe;ne++){const I=ne*j-re;for(let oe=0;oe<Q;oe++){const Se=oe*k-Z;ee[b]=Se*D,ee[x]=I*z,ee[v]=X,p.push(ee.x,ee.y,ee.z),ee[b]=0,ee[x]=0,ee[v]=L>0?1:-1,_.push(ee.x,ee.y,ee.z),S.push(oe/F),S.push(1-ne/E),ie+=1}}for(let ne=0;ne<E;ne++)for(let I=0;I<F;I++){const oe=g+I+Q*ne,Se=g+I+Q*(ne+1),Ve=g+(I+1)+Q*(ne+1),Fe=g+(I+1)+Q*ne;m.push(oe,Se,Fe),m.push(Se,Ve,Fe),q+=6}f.addGroup(M,q,N),M+=q,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oa extends hi{constructor(e=1,n=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:r,radialSegments:o,heightSegments:l},n=Math.max(0,n),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],_=n/2,S=Math.PI/2*e,g=n,M=2*S+g,A=r*2+l,b=o+1,x=new ue,v=new ue;for(let D=0;D<=A;D++){let z=0,C=0,P=0,L=0;if(D<=r){const N=D/r,k=N*Math.PI/2;C=-_-e*Math.cos(k),P=e*Math.sin(k),L=-e*Math.cos(k),z=N*S}else if(D<=r+l){const N=(D-r)/l;C=-_+N*n,P=e,L=0,z=S+N*g}else{const N=(D-r-l)/r,k=N*Math.PI/2;C=_+e*Math.sin(k),P=e*Math.cos(k),L=e*Math.sin(k),z=S+g+N*S}const F=Math.max(0,Math.min(1,z/M));let E=0;D===0?E=.5/o:D===A&&(E=-.5/o);for(let N=0;N<=o;N++){const k=N/o,j=k*Math.PI*2,Z=Math.sin(j),re=Math.cos(j);v.x=-P*re,v.y=C,v.z=P*Z,f.push(v.x,v.y,v.z),x.set(-P*re,L,P*Z),x.normalize(),m.push(x.x,x.y,x.z),p.push(k+E,F)}if(D>0){const N=(D-1)*b;for(let k=0;k<o;k++){const j=N+k,Z=N+k+1,re=D*b+k,X=D*b+k+1;u.push(j,Z,re),u.push(Z,X,re)}}}this.setIndex(u),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ki extends hi{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],S=[],g=[],M=[];let A=0;const b=[],x=r/2;let v=0;D(),u===!1&&(e>0&&z(!0),n>0&&z(!1)),this.setIndex(_),this.setAttribute("position",new un(S,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(M,2));function D(){const C=new ue,P=new ue;let L=0;const F=(n-e)/r;for(let E=0;E<=l;E++){const N=[],k=E/l,j=k*(n-e)+e;for(let Z=0;Z<=o;Z++){const re=Z/o,X=re*m+f,Q=Math.sin(X),pe=Math.cos(X);P.x=j*Q,P.y=-k*r+x,P.z=j*pe,S.push(P.x,P.y,P.z),C.set(Q,F,pe).normalize(),g.push(C.x,C.y,C.z),M.push(re,1-k),N.push(A++)}b.push(N)}for(let E=0;E<o;E++)for(let N=0;N<l;N++){const k=b[N][E],j=b[N+1][E],Z=b[N+1][E+1],re=b[N][E+1];(e>0||N!==0)&&(_.push(k,j,re),L+=3),(n>0||N!==l-1)&&(_.push(j,Z,re),L+=3)}p.addGroup(v,L,0),v+=L}function z(C){const P=A,L=new Lt,F=new ue;let E=0;const N=C===!0?e:n,k=C===!0?1:-1;for(let Z=1;Z<=o;Z++)S.push(0,x*k,0),g.push(0,k,0),M.push(.5,.5),A++;const j=A;for(let Z=0;Z<=o;Z++){const X=Z/o*m+f,Q=Math.cos(X),pe=Math.sin(X);F.x=N*pe,F.y=x*k,F.z=N*Q,S.push(F.x,F.y,F.z),g.push(0,k,0),L.x=Q*.5+.5,L.y=pe*.5*k+.5,M.push(L.x,L.y),A++}for(let Z=0;Z<o;Z++){const re=P+Z,X=j+Z;C===!0?_.push(X,X+1,re):_.push(X+1,X,re),E+=3}p.addGroup(v,E,C===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fa extends hi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),m=Math.floor(o),p=f+1,_=m+1,S=e/f,g=n/m,M=[],A=[],b=[],x=[];for(let v=0;v<_;v++){const D=v*g-u;for(let z=0;z<p;z++){const C=z*S-l;A.push(C,-D,0),b.push(0,0,1),x.push(z/f),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<f;D++){const z=D+p*v,C=D+p*(v+1),P=D+1+p*(v+1),L=D+1+p*v;M.push(z,C,L),M.push(C,P,L)}this.setIndex(M),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ki extends hi{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let p=0;const _=[],S=new ue,g=new ue,M=[],A=[],b=[],x=[];for(let v=0;v<=r;v++){const D=[],z=v/r,C=u+z*f,P=e*Math.cos(C),L=Math.sqrt(e*e-P*P);let F=0;v===0&&u===0?F=.5/n:v===r&&m===Math.PI&&(F=-.5/n);for(let E=0;E<=n;E++){const N=E/n,k=o+N*l;S.x=-L*Math.cos(k),S.y=P,S.z=L*Math.sin(k),A.push(S.x,S.y,S.z),g.copy(S).normalize(),b.push(g.x,g.y,g.z),x.push(N+F,1-z),D.push(p++)}_.push(D)}for(let v=0;v<r;v++)for(let D=0;D<n;D++){const z=_[v][D+1],C=_[v][D],P=_[v+1][D],L=_[v+1][D+1];(v!==0||u>0)&&M.push(z,C,L),(v!==r-1||m<Math.PI)&&M.push(C,P,L)}this.setIndex(M),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class so extends hi{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const m=[],p=[],_=[],S=[],g=new ue,M=new ue,A=new ue;for(let b=0;b<=r;b++){const x=u+b/r*f;for(let v=0;v<=o;v++){const D=v/o*l;M.x=(e+n*Math.cos(x))*Math.cos(D),M.y=(e+n*Math.cos(x))*Math.sin(D),M.z=n*Math.sin(x),p.push(M.x,M.y,M.z),g.x=e*Math.cos(D),g.y=e*Math.sin(D),A.subVectors(M,g).normalize(),_.push(A.x,A.y,A.z),S.push(v/o),S.push(b/r)}}for(let b=1;b<=r;b++)for(let x=1;x<=o;x++){const v=(o+1)*b+x-1,D=(o+1)*(b-1)+x-1,z=(o+1)*(b-1)+x,C=(o+1)*b+x;m.push(v,D,C),m.push(D,z,C)}this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ha(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(vm(o))o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(vm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function jn(s){const e={};for(let n=0;n<s.length;n++){const r=ha(s[n]);for(const o in r)e[o]=r[o]}return e}function vm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function N_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const I_={clone:ha,merge:jn};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Pt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Lt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ue().fromArray(o.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[r].value=new on().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class F_ extends ir{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oi extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O_ extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k_ extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vf extends Wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const rd=new on,_m=new ue,xm=new ue;class Mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(rd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===co||e.reversedDepth?n.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),n.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new ue,Dl=new pa,qi=new ue;class Eg extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Dl,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Dl,qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Il,Dl,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Dl,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new ue,Sm=new Lt,ym=new Lt;class di extends Eg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,ym),n.subVectors(ym,Sm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class B_ extends Mg{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class Mm extends vf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new B_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class _f extends Eg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,m=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class z_ extends Mg{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G_ extends vf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new z_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class V_ extends vf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ia=-90,ra=1;class H_ extends Wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(ia,ra,e,n);o.layers=this.layers,this.add(o);const l=new di(ia,ra,e,n);l.layers=this.layers,this.add(l);const u=new di(ia,ra,e,n);u.layers=this.layers,this.add(u);const f=new di(ia,ra,e,n);f.layers=this.layers,this.add(f);const m=new di(ia,ra,e,n);m.layers=this.layers,this.add(m);const p=new di(ia,ra,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,m]=n;for(const p of n)this.remove(p);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===co)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,_]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(S,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class W_ extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ef=class Ef{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Ef.prototype.isMatrix2=!0;let Em=Ef;function Tm(s,e,n,r){const o=X_(r);switch(n){case ug:return s*e;case fg:return s*e/o.components*o.byteLength;case of:return s*e/o.components*o.byteLength;case ys:return s*e*2/o.components*o.byteLength;case lf:return s*e*2/o.components*o.byteLength;case dg:return s*e*3/o.components*o.byteLength;case zi:return s*e*4/o.components*o.byteLength;case cf:return s*e*4/o.components*o.byteLength;case kl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Ed:return Math.max(s,16)*Math.max(e,8)/4;case Sd:case Md:return Math.max(s,8)*Math.max(e,8)/2;case Td:case wd:case Cd:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Hl:case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wd:case Xd:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qd:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wl:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function X_(s){switch(s){case fi:case ag:return{byteLength:1,components:1};case oo:case og:case nr:return{byteLength:2,components:1};case sf:case af:return{byteLength:2,components:4};case tr:case rf:case Ji:return{byteLength:4,components:1};case lg:case cg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tg(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Y_(s){const e=new WeakMap;function n(f,m){const p=f.array,_=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,_),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,m,p){const _=m.array,S=m.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,_);else{S.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<S.length;M++){const A=S[g],b=S[M];b.start<=A.start+A.count+1?A.count=Math.max(A.count,b.start+b.count-A.start):(++g,S[g]=b)}S.length=g+1;for(let M=0,A=S.length;M<A;M++){const b=S[M];s.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gx=`#define PI 3.141592653589793
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
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_x=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,Xx=`uniform sampler2D dfgLUT;
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
}`,Yx=`
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iS=`#if defined( USE_POINTS_UV )
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
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
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
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NS=`float getShadowMask() {
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
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`#include <common>
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
}`,ey=`#if DEPTH_PACKING == 3200
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
}`,ty=`#define DISTANCE
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
}`,ny=`#define DISTANCE
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`uniform float scale;
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
}`,ay=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#define LAMBERT
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
}`,uy=`#define LAMBERT
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
}`,dy=`#define MATCAP
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
}`,fy=`#define MATCAP
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
}`,hy=`#define NORMAL
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
}`,py=`#define NORMAL
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
}`,my=`#define PHONG
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
}`,gy=`#define PHONG
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
}`,vy=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,xy=`#define TOON
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
}`,Sy=`#define TOON
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
}`,yy=`uniform float size;
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
}`,My=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ty=`uniform vec3 color;
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
}`,wy=`uniform float rotation;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:q_,alphahash_pars_fragment:j_,alphamap_fragment:K_,alphamap_pars_fragment:$_,alphatest_fragment:Z_,alphatest_pars_fragment:J_,aomap_fragment:Q_,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ax,bumpmap_pars_fragment:ox,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:dx,color_fragment:fx,color_pars_fragment:hx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:vx,defaultnormal_vertex:_x,displacementmap_pars_vertex:xx,displacementmap_vertex:Sx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:wx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Cx,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:Bx,envmap_vertex:bx,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Nx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ux,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ox,lights_pars_begin:kx,lights_toon_fragment:zx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:Yx,lights_fragment_maps:qx,lights_fragment_end:jx,lightprobes_pars_fragment:Kx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Zx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:Qx,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:aS,morphcolor_vertex:oS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:xS,iridescence_pars_fragment:SS,opaque_fragment:yS,packing:MS,premultiplied_alpha_fragment:ES,project_vertex:TS,dithering_fragment:wS,dithering_pars_fragment:AS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:RS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:PS,shadowmap_vertex:LS,shadowmask_pars_fragment:NS,skinbase_vertex:IS,skinning_pars_vertex:DS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:kS,tonemapping_fragment:BS,tonemapping_pars_fragment:zS,transmission_fragment:GS,transmission_pars_fragment:VS,uv_pars_fragment:HS,uv_pars_vertex:WS,uv_vertex:XS,worldpos_vertex:YS,background_vert:qS,background_frag:jS,backgroundCube_vert:KS,backgroundCube_frag:$S,cube_vert:ZS,cube_frag:JS,depth_vert:QS,depth_frag:ey,distance_vert:ty,distance_frag:ny,equirect_vert:iy,equirect_frag:ry,linedashed_vert:sy,linedashed_frag:ay,meshbasic_vert:oy,meshbasic_frag:ly,meshlambert_vert:cy,meshlambert_frag:uy,meshmatcap_vert:dy,meshmatcap_frag:fy,meshnormal_vert:hy,meshnormal_frag:py,meshphong_vert:my,meshphong_frag:gy,meshphysical_vert:vy,meshphysical_frag:_y,meshtoon_vert:xy,meshtoon_frag:Sy,points_vert:yy,points_frag:My,shadow_vert:Ey,shadow_frag:Ty,sprite_vert:wy,sprite_frag:Ay},Ge={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ue},probesMax:{value:new ue},probesResolution:{value:new ue}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},$i={basic:{uniforms:jn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:jn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:jn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:jn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:jn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:jn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:jn([Ge.points,Ge.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:jn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:jn([Ge.common,Ge.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:jn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:jn([Ge.sprite,Ge.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:jn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:jn([Ge.lights,Ge.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};$i.physical={uniforms:jn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Ul={r:0,b:0,g:0},Cy=new on,wg=new ht;wg.set(-1,0,0,0,1,0,0,0,1);function Ry(s,e,n,r,o,l){const u=new Pt(0);let f=o===!0?0:1,m,p,_=null,S=0,g=null;function M(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const C=D.backgroundBlurriness>0;z=e.get(z,C)}return z}function A(D){let z=!1;const C=M(D);C===null?x(u,f):C&&C.isColor&&(x(C,1),z=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(D,z){const C=M(z);C&&(C.isCubeTexture||C.mapping===$l)?(p===void 0&&(p=new ct(new ni(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:ha($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(wg),p.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Gt,(_!==C||S!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,S=C.version,g=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ct(new fa(2,2),new ir({name:"BackgroundMaterial",uniforms:ha($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||S!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=C,S=C.version,g=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function x(D,z){D.getRGB(Ul,yg(s)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,z,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,z=1){u.set(D),f=z,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,x(u,f)},render:A,addToRenderList:b,dispose:v}}function by(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(j,Z,re,X,Q){let pe=!1;const ie=S(j,X,re,Z);l!==ie&&(l=ie,p(l.object)),pe=M(j,X,re,Q),pe&&A(j,X,re,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(j,Z,re,X),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function p(j){return s.bindVertexArray(j)}function _(j){return s.deleteVertexArray(j)}function S(j,Z,re,X){const Q=X.wireframe===!0;let pe=r[Z.id];pe===void 0&&(pe={},r[Z.id]=pe);const ie=j.isInstancedMesh===!0?j.id:0;let q=pe[ie];q===void 0&&(q={},pe[ie]=q);let ee=q[re.id];ee===void 0&&(ee={},q[re.id]=ee);let ne=ee[Q];return ne===void 0&&(ne=g(m()),ee[Q]=ne),ne}function g(j){const Z=[],re=[],X=[];for(let Q=0;Q<n;Q++)Z[Q]=0,re[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:re,attributeDivisors:X,object:j,attributes:{},index:null}}function M(j,Z,re,X){const Q=l.attributes,pe=Z.attributes;let ie=0;const q=re.getAttributes();for(const ee in q)if(q[ee].location>=0){const I=Q[ee];let oe=pe[ee];if(oe===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(oe=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(oe=j.instanceColor)),I===void 0||I.attribute!==oe||oe&&I.data!==oe.data)return!0;ie++}return l.attributesNum!==ie||l.index!==X}function A(j,Z,re,X){const Q={},pe=Z.attributes;let ie=0;const q=re.getAttributes();for(const ee in q)if(q[ee].location>=0){let I=pe[ee];I===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(I=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(I=j.instanceColor));const oe={};oe.attribute=I,I&&I.data&&(oe.data=I.data),Q[ee]=oe,ie++}l.attributes=Q,l.attributesNum=ie,l.index=X}function b(){const j=l.newAttributes;for(let Z=0,re=j.length;Z<re;Z++)j[Z]=0}function x(j){v(j,0)}function v(j,Z){const re=l.newAttributes,X=l.enabledAttributes,Q=l.attributeDivisors;re[j]=1,X[j]===0&&(s.enableVertexAttribArray(j),X[j]=1),Q[j]!==Z&&(s.vertexAttribDivisor(j,Z),Q[j]=Z)}function D(){const j=l.newAttributes,Z=l.enabledAttributes;for(let re=0,X=Z.length;re<X;re++)Z[re]!==j[re]&&(s.disableVertexAttribArray(re),Z[re]=0)}function z(j,Z,re,X,Q,pe,ie){ie===!0?s.vertexAttribIPointer(j,Z,re,Q,pe):s.vertexAttribPointer(j,Z,re,X,Q,pe)}function C(j,Z,re,X){b();const Q=X.attributes,pe=re.getAttributes(),ie=Z.defaultAttributeValues;for(const q in pe){const ee=pe[q];if(ee.location>=0){let ne=Q[q];if(ne===void 0&&(q==="instanceMatrix"&&j.instanceMatrix&&(ne=j.instanceMatrix),q==="instanceColor"&&j.instanceColor&&(ne=j.instanceColor)),ne!==void 0){const I=ne.normalized,oe=ne.itemSize,Se=e.get(ne);if(Se===void 0)continue;const Ve=Se.buffer,Fe=Se.type,Oe=Se.bytesPerElement,le=Fe===s.INT||Fe===s.UNSIGNED_INT||ne.gpuType===rf;if(ne.isInterleavedBufferAttribute){const $=ne.data,Re=$.stride,He=ne.offset;if($.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)v(ee.location+De,$.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let De=0;De<ee.locationSize;De++)x(ee.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let De=0;De<ee.locationSize;De++)z(ee.location+De,oe/ee.locationSize,Fe,I,Re*Oe,(He+oe/ee.locationSize*De)*Oe,le)}else{if(ne.isInstancedBufferAttribute){for(let $=0;$<ee.locationSize;$++)v(ee.location+$,ne.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let $=0;$<ee.locationSize;$++)x(ee.location+$);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let $=0;$<ee.locationSize;$++)z(ee.location+$,oe/ee.locationSize,Fe,I,oe*Oe,oe/ee.locationSize*$*Oe,le)}}else if(ie!==void 0){const I=ie[q];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(ee.location,I);break;case 3:s.vertexAttrib3fv(ee.location,I);break;case 4:s.vertexAttrib4fv(ee.location,I);break;default:s.vertexAttrib1fv(ee.location,I)}}}}D()}function P(){N();for(const j in r){const Z=r[j];for(const re in Z){const X=Z[re];for(const Q in X){const pe=X[Q];for(const ie in pe)_(pe[ie].object),delete pe[ie];delete X[Q]}}delete r[j]}}function L(j){if(r[j.id]===void 0)return;const Z=r[j.id];for(const re in Z){const X=Z[re];for(const Q in X){const pe=X[Q];for(const ie in pe)_(pe[ie].object),delete pe[ie];delete X[Q]}}delete r[j.id]}function F(j){for(const Z in r){const re=r[Z];for(const X in re){const Q=re[X];if(Q[j.id]===void 0)continue;const pe=Q[j.id];for(const ie in pe)_(pe[ie].object),delete pe[ie];delete Q[j.id]}}}function E(j){for(const Z in r){const re=r[Z],X=j.isInstancedMesh===!0?j.id:0,Q=re[X];if(Q!==void 0){for(const pe in Q){const ie=Q[pe];for(const q in ie)_(ie[q].object),delete ie[q];delete Q[pe]}delete re[X],Object.keys(re).length===0&&delete r[Z]}}}function N(){k(),u=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:x,disableUnusedAttributes:D}}function Py(s,e,n){let r;function o(m){r=m}function l(m,p){s.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,_){_!==0&&(s.drawArraysInstanced(r,m,p,_),n.update(p,r,_))}function f(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Ly(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==zi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const E=F===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==fi&&F!==Ji&&!E&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(dt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:C,maxSamples:P,samples:L}}function Ny(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new jr,f=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=_(S,g,0)},this.setState=function(S,g,M){const A=S.clippingPlanes,b=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||A===null||A.length===0||l&&!x)l?_(null):p();else{const D=l?0:r,z=D*4;let C=v.clippingState||null;m.value=C,C=_(A,g,z,M);for(let P=0;P!==z;++P)C[P]=n[P];v.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,g,M,A){const b=S!==null?S.length:0;let x=null;if(b!==0){if(x=m.value,A!==!0||x===null){const v=M+b*4,D=g.matrixWorldInverse;f.getNormalMatrix(D),(x===null||x.length<v)&&(x=new Float32Array(v));for(let z=0,C=M;z!==b;++z,C+=4)u.copy(S[z]).applyMatrix4(D,f),u.normal.toArray(x,C),x[C+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const la=4,Iy=6,Dy=20,Uy=256,eo=new _f,wm=new Pt;let sd=null,ad=0,od=0,ld=!1;const Fy=new ue,ps=new ue;class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=Fy}=l;sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:nr,format:zi,colorSpace:Xl,depthBuffer:!1},o=Cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Oy(l)),this._blurMaterial=By(l,e,n),this._ggxMaterial=ky(l,e,n)}return o}_compileMaterial(e){const n=new ct(new hi,e);this._renderer.compile(n,eo)}_sceneToCubeUV(e,n,r,o,l){const m=new di(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(wm),S.toneMapping=er,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new ni,new ui({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let v=!1;const D=e.background;D?D.isColor&&(x.color.copy(D),e.background=null,v=!0):(x.color.copy(wm),v=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+_[z],l.y,l.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+_[z],l.z)):(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+_[z]));const P=this._cubeSize;sa(o,C*P,z>2?P:0,P,P),S.setRenderTarget(o),v&&S.render(b,m),S.render(e,m)}S.toneMapping=M,S.autoClear=g,e.background=D}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===xs||e.mapping===da;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;sa(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,eo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),S=Math.sqrt(p*p-_*_),g=p*1.25,M=S*g,{_lodMax:A}=this,b=this._sizeLods[r],x=3*b*(r>A-la?r-A+la:0),v=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-n,sa(l,x,v,3*b,2*b),o.setRenderTarget(l),o.render(f,eo),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=A-r,sa(e,x,v,3*b,2*b),o.setRenderTarget(e),o.render(f,eo)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],S=3*_*(o>this._lodMax-la?o-this._lodMax+la:0),g=4*(this._cubeSize-_);sa(n,S,g,3*_,2*_),u.setRenderTarget(n),u.render(m,eo)}}function Oy(s){const e=[],n=[];let r=s;const o=s-la+1+Iy;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),m=-f,p=1+f,_=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,g=6,M=3,A=new Float32Array(M*g*S),b=new Float32Array(M*g*S);for(let v=0;v<S;v++){const D=v%3*2/3-1,z=v>2?0:-1,C=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];A.set(C,M*g*v);for(let P=0;P<g;P++){const L=_[P*2]*2-1,F=_[P*2+1]*2-1;v===0?ps.set(1,F,L):v===1?ps.set(-L,1,-F):v===2?ps.set(-L,F,1):v===3?ps.set(-1,F,-L):v===4?ps.set(-L,-1,F):ps.set(L,F,-1),ps.toArray(b,(v*g+P)*M)}}const x=new hi;x.setAttribute("position",new Er(A,M)),x.setAttribute("outputDirection",new Er(b,M)),n.push(new ct(x,null)),r>la&&r--}return{lodMeshes:n,sizeLods:e}}function Cm(s,e,n){const r=new Gi(s,e,n);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sa(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function ky(s,e,n){return new ir({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function By(s,e,n){return new ir({name:"SphericalGaussianBlur",defines:{SAMPLES:Dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Rm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ag extends Gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ni(5,5,5),l=new ir({name:"CubemapFromEquirect",uniforms:ha(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:yr});l.uniforms.tEquirect.value=n;const u=new ct(o,l),f=n.minFilter;return n.minFilter===gs&&(n.minFilter=Vn),new H_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function zy(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Nu||M===Iu)if(e.has(g)){const A=e.get(g).texture;return f(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const b=new Ag(A.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",p),f(b.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,A=M===Nu||M===Iu,b=M===xs||M===da;if(A||b){let x=n.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Am(s)),x=A?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),x.texture;if(x!==void 0)return x.texture;{const D=g.image;return A&&D&&D.height>0||b&&D&&m(D)?(r===null&&(r=new Am(s)),x=A?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,M){return M===Nu?g.mapping=xs:M===Iu&&(g.mapping=da),g}function m(g){let M=0;const A=6;for(let b=0;b<A;b++)g[b]!==void 0&&M++;return M===A}function p(g){const M=g.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function Gy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ca("WebGLRenderer: "+r+" extension not supported."),o}}}function Vy(s,e,n,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(S){const g=[],M=S.index,A=S.attributes.position;let b=0;if(A===void 0)return;if(M!==null){const D=M.array;b=M.version;for(let z=0,C=D.length;z<C;z+=3){const P=D[z+0],L=D[z+1],F=D[z+2];g.push(P,L,L,F,F,P)}}else{const D=A.array;b=A.version;for(let z=0,C=D.length/3-1;z<C;z+=3){const P=z+0,L=z+1,F=z+2;g.push(P,L,L,F,F,P)}}const x=new(A.count>=65535?_g:vg)(g,1);x.version=b;const v=l.get(S);v&&e.remove(v),l.set(S,x)}function _(S){const g=l.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:m,getWireframeAttribute:_}}function Hy(s,e,n){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function m(S,g){s.drawElements(r,g,l,S*u),n.update(g,r,1)}function p(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,S*u,M),n.update(g,r,M))}function _(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,M);let b=0;for(let x=0;x<M;x++)b+=g[x];n.update(b,r,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function Wy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Xy(s,e,n){const r=new WeakMap,o=new tn;function l(u,f,m){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let k=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var M=k;g!==void 0&&g.texture.dispose();const A=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let C=0;A===!0&&(C=1),b===!0&&(C=2),x===!0&&(C=3);let P=f.attributes.position.count*C,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*L*4*S),E=new pg(F,P,L,S);E.type=Ji,E.needsUpdate=!0;const N=C*4;for(let j=0;j<S;j++){const Z=v[j],re=D[j],X=z[j],Q=P*L*4*j;for(let pe=0;pe<Z.count;pe++){const ie=pe*N;A===!0&&(o.fromBufferAttribute(Z,pe),F[Q+ie+0]=o.x,F[Q+ie+1]=o.y,F[Q+ie+2]=o.z,F[Q+ie+3]=0),b===!0&&(o.fromBufferAttribute(re,pe),F[Q+ie+4]=o.x,F[Q+ie+5]=o.y,F[Q+ie+6]=o.z,F[Q+ie+7]=0),x===!0&&(o.fromBufferAttribute(X,pe),F[Q+ie+8]=o.x,F[Q+ie+9]=o.y,F[Q+ie+10]=o.z,F[Q+ie+11]=X.itemSize===4?o.w:1)}}g={count:S,texture:E,size:new Lt(P,L)},r.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let A=0;for(let x=0;x<p.length;x++)A+=p[x];const b=f.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function Yy(s,e,n,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==_&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return g}function f(){l=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:f}}const qy={[Qm]:"LINEAR_TONE_MAPPING",[eg]:"REINHARD_TONE_MAPPING",[tg]:"CINEON_TONE_MAPPING",[nf]:"ACES_FILMIC_TONE_MAPPING",[ig]:"AGX_TONE_MAPPING",[rg]:"NEUTRAL_TONE_MAPPING",[ng]:"CUSTOM_TONE_MAPPING"};function jy(s,e,n,r,o,l){const u=new Gi(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new hi;p.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new un([0,2,0,0,2,0],2));const _=new F_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new ct(p,_),g=new _f(-1,1,1,-1,0,1);let M=null,A=null,b=!1,x,v=null,D=[],z=!1;this.setSize=function(C,P){u.setSize(C,P),f!==null&&f.setSize(C,P),m!==null&&m.setSize(C,P);for(let L=0;L<D.length;L++){const F=D[L];F.setSize&&F.setSize(C,P)}},this.setEffects=function(C){D=C,z=D.length>0&&D[0].isRenderPass===!0;const P=u.width,L=u.height;D.length>0&&f===null&&(f=new Gi(P,L,{type:nr,depthBuffer:!1,stencilBuffer:!1}),m=new Gi(P,L,{type:nr,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<D.length;F++){const E=D[F];E.setSize&&E.setSize(P,L)}},this.begin=function(C,P){if(b||C.toneMapping===er&&D.length===0)return!1;if(v=P,P!==null){const L=P.width,F=P.height;(u.width!==L||u.height!==F)&&this.setSize(L,F)}return z===!1&&C.setRenderTarget(u),x=C.toneMapping,C.toneMapping=er,!0},this.hasRenderPass=function(){return z},this.end=function(C,P){C.toneMapping=x,b=!0;let L=u,F=f;for(let E=0;E<D.length;E++){const N=D[E];N.enabled!==!1&&(N.render(C,F,L,P),N.needsSwap!==!1&&(L=F,F=F===f?m:f))}if(M!==C.outputColorSpace||A!==C.toneMapping){M=C.outputColorSpace,A=C.toneMapping,_.defines={},Rt.getTransfer(M)===Gt&&(_.defines.SRGB_TRANSFER="");const E=qy[A];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(v),C.render(S,g),v=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),_.dispose()}}const Cg=new Hn,Jd=new uo(1,1),Rg=new pg,bg=new f_,Pg=new xg,Pm=[],Lm=[],Nm=new Float32Array(16),Im=new Float32Array(9),Dm=new Float32Array(4);function ma(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Pm[o];if(l===void 0&&(l=new Float32Array(o),Pm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Jl(s,e){let n=Lm[e];n===void 0&&(n=new Int32Array(e),Lm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Ky(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2fv(this.addr,e),Sn(n,e)}}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;s.uniform3fv(this.addr,e),Sn(n,e)}}function Jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4fv(this.addr,e),Sn(n,e)}}function Qy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),Sn(n,r)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,r))return;Im.set(r),s.uniformMatrix3fv(this.addr,!1,Im),Sn(n,r)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,r))return;Nm.set(r),s.uniformMatrix4fv(this.addr,!1,Nm),Sn(n,r)}}function nM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2iv(this.addr,e),Sn(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3iv(this.addr,e),Sn(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4iv(this.addr,e),Sn(n,e)}}function aM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2uiv(this.addr,e),Sn(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3uiv(this.addr,e),Sn(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4uiv(this.addr,e),Sn(n,e)}}function uM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Jd.compareFunction=n.isReversedDepthBuffer()?df:uf,l=Jd):l=Cg,n.setTexture2D(e||l,o)}function dM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||bg,o)}function fM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Pg,o)}function hM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Rg,o)}function pM(s){switch(s){case 5126:return Ky;case 35664:return $y;case 35665:return Zy;case 35666:return Jy;case 35674:return Qy;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(s,e){s.uniform1fv(this.addr,e)}function gM(s,e){const n=ma(e,this.size,2);s.uniform2fv(this.addr,n)}function vM(s,e){const n=ma(e,this.size,3);s.uniform3fv(this.addr,n)}function _M(s,e){const n=ma(e,this.size,4);s.uniform4fv(this.addr,n)}function xM(s,e){const n=ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function SM(s,e){const n=ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function yM(s,e){const n=ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function MM(s,e){s.uniform1iv(this.addr,e)}function EM(s,e){s.uniform2iv(this.addr,e)}function TM(s,e){s.uniform3iv(this.addr,e)}function wM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function RM(s,e){s.uniform3uiv(this.addr,e)}function bM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Jd:u=Cg;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function LM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||bg,l[u])}function NM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Pg,l[u])}function IM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Rg,l[u])}function DM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return _M;case 35674:return xM;case 35675:return SM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return wM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return IM}}class UM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=pM(n.type)}}class FM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DM(n.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function kM(s,e,n){const r=s.name,o=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),u=cd.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){Um(n,p===void 0?new UM(f,s,e):new FM(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new OM(f),Um(n,S)),n=S}}}class Vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),m=e.getUniformLocation(n,f.name);kM(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const BM=37297;let zM=0;function GM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Om=new ht;function VM(s){Rt._getMatrix(Om,Rt.workingColorSpace,s);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Yl:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+GM(s.getShaderSource(e),f)}else return l}function HM(s,e){const n=VM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const WM={[Qm]:"Linear",[eg]:"Reinhard",[tg]:"Cineon",[nf]:"ACESFilmic",[ig]:"AgX",[rg]:"Neutral",[ng]:"Custom"};function XM(s,e){const n=WM[e];return n===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new ue;function YM(){Rt.getLuminanceCoefficients(Fl);const s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function jM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function KM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function io(s){return s!==""}function Bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(s){return s.replace($M,JM)}const ZM=new Map;function JM(s,e){let n=_t[e];if(n===void 0){const r=ZM.get(e);if(r!==void 0)n=_t[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qd(n)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(QM,eE)}function eE(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Vm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const tE={[Ol]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function nE(s){return tE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iE={[xs]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[$l]:"ENVMAP_TYPE_CUBE_UV"};function rE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const sE={[da]:"ENVMAP_MODE_REFRACTION"};function aE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oE={[Jm]:"ENVMAP_BLENDING_MULTIPLY",[Hv]:"ENVMAP_BLENDING_MIX",[Wv]:"ENVMAP_BLENDING_ADD"};function lE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":oE[s.combine]||"ENVMAP_BLENDING_NONE"}function cE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function uE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const m=nE(n),p=rE(n),_=aE(n),S=lE(n),g=cE(n),M=qM(n),A=jM(l),b=o.createProgram();let x,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(io).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(io).join(`
`),v.length>0&&(v+=`
`)):(x=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),v=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?_t.tonemapping_pars_fragment:"",n.toneMapping!==er?XM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,HM("linearToOutputTexel",n.outputColorSpace),YM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(io).join(`
`)),u=Qd(u),u=Bm(u,n),u=zm(u,n),f=Qd(f),f=Bm(f,n),f=zm(f,n),u=Gm(u),f=Gm(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const z=D+x+u,C=D+v+f,P=Fm(o,o.VERTEX_SHADER,z),L=Fm(o,o.FRAGMENT_SHADER,C);o.attachShader(b,P),o.attachShader(b,L),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function F(j){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(b)||"",re=o.getShaderInfoLog(P)||"",X=o.getShaderInfoLog(L)||"",Q=Z.trim(),pe=re.trim(),ie=X.trim();let q=!0,ee=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,P,L);else{const ne=km(o,P,"vertex"),I=km(o,L,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+Q+`
`+ne+`
`+I)}else Q!==""?dt("WebGLProgram: Program Info Log:",Q):(pe===""||ie==="")&&(ee=!1);ee&&(j.diagnostics={runnable:q,programLog:Q,vertexShader:{log:pe,prefix:x},fragmentShader:{log:ie,prefix:v}})}o.deleteShader(P),o.deleteShader(L),E=new Vl(o,b),N=KM(o,b)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(b,BM)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=L,this}let dE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new hE(e),n.set(e,r)),r}}class hE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function pE(s){return s===ys||s===Hl||s===Wl}function mE(s,e,n,r,o,l){const u=new mg,f=new fE,m=new Set,p=[],_=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function b(E,N,k,j,Z,re){const X=j.fog,Q=Z.geometry,pe=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?j.environment:null,ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||pe,ie),ee=q&&q.mapping===$l?q.image.height:null,ne=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,oe=I!==void 0?I.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ve,Fe,Oe,le;if(ne){const wt=$i[ne];Ve=wt.vertexShader,Fe=wt.fragmentShader}else{Ve=E.vertexShader,Fe=E.fragmentShader;const wt=f.getVertexShaderStage(E),St=f.getFragmentShaderStage(E);f.update(E,wt,St),Oe=wt.id,le=St.id}const $=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),He=Z.isInstancedMesh===!0,De=Z.isBatchedMesh===!0,tt=!!E.map,Ot=!!E.matcap,We=!!q,at=!!E.aoMap,Mt=!!E.lightMap,ot=!!E.bumpMap&&E.wireframe===!1,xt=!!E.normalMap,Vt=!!E.displacementMap,kt=!!E.emissiveMap,ut=!!E.metalnessMap,Bt=!!E.roughnessMap,K=E.anisotropy>0,$t=E.clearcoat>0,Et=E.dispersion>0,U=E.retroreflectivity>0,y=E.iridescence>0,te=E.sheen>0,de=E.transmission>0,ve=K&&!!E.anisotropyMap,we=$t&&!!E.clearcoatMap,Le=$t&&!!E.clearcoatNormalMap,R=$t&&!!E.clearcoatRoughnessMap,B=y&&!!E.iridescenceMap,_e=y&&!!E.iridescenceThicknessMap,xe=te&&!!E.sheenColorMap,ye=te&&!!E.sheenRoughnessMap,V=!!E.specularMap,Be=!!E.specularColorMap,Ne=!!E.specularIntensityMap,$e=de&&!!E.transmissionMap,H=de&&!!E.thicknessMap,Ae=!!E.gradientMap,ge=!!E.alphaMap,be=E.alphaTest>0,Ie=!!E.alphaHash,Me=!!E.extensions;let Ze=er;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ze=s.toneMapping);const qe={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:Fe,defines:E.defines,customVertexShaderID:Oe,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:De,batchingColor:De&&Z._colorsTexture!==null,instancing:He,instancingColor:He&&Z.instanceColor!==null,instancingMorph:He&&Z.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:Ot,envMap:We,envMapMode:We&&q.mapping,envMapCubeUVHeight:ee,aoMap:at,lightMap:Mt,bumpMap:ot,normalMap:xt,displacementMap:Vt,emissiveMap:kt,normalMapObjectSpace:xt&&E.normalMapType===qv,normalMapTangentSpace:xt&&E.normalMapType===$d,packedNormalMap:xt&&E.normalMapType===$d&&pE(E.normalMap.format),metalnessMap:ut,roughnessMap:Bt,anisotropy:K,anisotropyMap:ve,clearcoat:$t,clearcoatMap:we,clearcoatNormalMap:Le,clearcoatRoughnessMap:R,dispersion:Et,retroreflection:U,iridescence:y,iridescenceMap:B,iridescenceThicknessMap:_e,sheen:te,sheenColorMap:xe,sheenRoughnessMap:ye,specularMap:V,specularColorMap:Be,specularIntensityMap:Ne,transmission:de,transmissionMap:$e,thicknessMap:H,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===ro&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:be,alphaHash:Ie,combine:E.combine,mapUv:tt&&A(E.map.channel),aoMapUv:at&&A(E.aoMap.channel),lightMapUv:Mt&&A(E.lightMap.channel),bumpMapUv:ot&&A(E.bumpMap.channel),normalMapUv:xt&&A(E.normalMap.channel),displacementMapUv:Vt&&A(E.displacementMap.channel),emissiveMapUv:kt&&A(E.emissiveMap.channel),metalnessMapUv:ut&&A(E.metalnessMap.channel),roughnessMapUv:Bt&&A(E.roughnessMap.channel),anisotropyMapUv:ve&&A(E.anisotropyMap.channel),clearcoatMapUv:we&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&A(E.sheenRoughnessMap.channel),specularMapUv:V&&A(E.specularMap.channel),specularColorMapUv:Be&&A(E.specularColorMap.channel),specularIntensityMapUv:Ne&&A(E.specularIntensityMap.channel),transmissionMapUv:$e&&A(E.transmissionMap.channel),thicknessMapUv:H&&A(E.thicknessMap.channel),alphaMapUv:ge&&A(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(xt||K),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Q.attributes.uv&&(tt||ge),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&xt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&Rt.getTransfer(E.map.colorSpace)===Gt,decodeVideoTextureEmissive:kt&&E.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(E.emissiveMap.colorSpace)===Gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Zi,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Me&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&E.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function x(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)N.push(k),N.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(v(N,E),D(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function v(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function D(E,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function z(E){const N=M[E.type];let k;if(N){const j=$i[N];k=I_.clone(j.uniforms)}else k=E.uniforms;return k}function C(E,N){let k=_.get(N);return k!==void 0?++k.usedTimes:(k=new uE(s,N,E,o),p.push(k),_.set(N,k)),k}function P(E){if(--E.usedTimes===0){const N=p.indexOf(E);p[N]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function L(E){f.remove(E)}function F(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:z,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:p,dispose:F}}function gE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function vE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,A,b,x,v){let D=s[e];return D===void 0?(D={id:g.id,object:g,geometry:M,material:A,materialVariant:u(g),groupOrder:b,renderOrder:g.renderOrder,z:x,group:v},s[e]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=A,D.materialVariant=u(g),D.groupOrder=b,D.renderOrder=g.renderOrder,D.z=x,D.group=v),e++,D}function m(g,M,A,b,x,v,D){D.reversedDepth===!0&&(x=-x);const z=f(g,M,A,b,x,v);A.transmission>0?r.push(z):A.transparent===!0?o.push(z):n.push(z)}function p(g,M,A,b,x,v){const D=f(g,M,A,b,x,v);A.transmission>0?r.unshift(D):A.transparent===!0?o.unshift(D):n.unshift(D)}function _(g,M){n.length>1&&n.sort(g||vE),r.length>1&&r.sort(M||Hm),o.length>1&&o.sort(M||Hm)}function S(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:S,sort:_}}function _E(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Wm,s.set(r,[u])):o>=l.length?(u=new Wm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function xE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ue,color:new Pt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return s[e.id]=n,n}}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let yE=0;function ME(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EE(s){const e=new xE,n=SE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const o=new ue,l=new on,u=new on;function f(p){let _=0,S=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let M=0,A=0,b=0,x=0,v=0,D=0,z=0,C=0,P=0,L=0,F=0,E=0,N=0,k=0;p.sort(ME);for(let Z=0,re=p.length;Z<re;Z++){const X=p[Z],Q=X.color,pe=X.intensity,ie=X.distance;let q=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ys?q=X.shadow.map.texture:q=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=Q.r*pe,S+=Q.g*pe,g+=Q.b*pe;else if(X.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(X.sh.coefficients[ee],pe);k++}else if(X.isSunLight){const ee=e.get(X);if(ee.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ne=X.shadow,I=n.get(X);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),r.sunShadow[A]=I,r.sunShadowMap[A]=q;const oe=ne.getViewportCount();for(let Se=0;Se<oe;Se++)r.sunShadowMatrix[b+Se]=ne.getMatrix(Se),r.sunShadowCascade[b+Se]=ne._cascadeData[Se];b+=oe,A++}r.sun[M]=ee,M++}else if(X.isDirectionalLight){const ee=e.get(X);if(ee.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ne=X.shadow,I=n.get(X);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,r.directionalShadow[x]=I,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=X.shadow.matrix,P++}r.directional[x]=ee,x++}else if(X.isSpotLight){const ee=e.get(X);ee.position.setFromMatrixPosition(X.matrixWorld),ee.color.copy(Q).multiplyScalar(pe),ee.distance=ie,ee.coneCos=Math.cos(X.angle),ee.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ee.decay=X.decay,r.spot[D]=ee;const ne=X.shadow;if(X.map&&(r.spotLightMap[E]=X.map,E++,ne.updateMatrices(X),X.castShadow&&N++),r.spotLightMatrix[D]=ne.matrix,X.castShadow){const I=n.get(X);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,r.spotShadow[D]=I,r.spotShadowMap[D]=q,F++}D++}else if(X.isRectAreaLight){const ee=e.get(X);ee.color.copy(Q).multiplyScalar(pe),ee.halfWidth.set(X.width*.5,0,0),ee.halfHeight.set(0,X.height*.5,0),r.rectArea[z]=ee,z++}else if(X.isPointLight){const ee=e.get(X);if(ee.color.copy(X.color).multiplyScalar(X.intensity),ee.distance=X.distance,ee.decay=X.decay,X.castShadow){const ne=X.shadow,I=n.get(X);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,r.pointShadow[v]=I,r.pointShadowMap[v]=q,r.pointShadowMatrix[v]=X.shadow.matrix,L++}r.point[v]=ee,v++}else if(X.isHemisphereLight){const ee=e.get(X);ee.skyColor.copy(X.color).multiplyScalar(pe),ee.groundColor.copy(X.groundColor).multiplyScalar(pe),r.hemi[C]=ee,C++}}z>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=g;const j=r.hash;(j.sunLength!==M||j.directionalLength!==x||j.pointLength!==v||j.spotLength!==D||j.rectAreaLength!==z||j.hemiLength!==C||j.numSunShadows!==A||j.numDirectionalShadows!==P||j.numPointShadows!==L||j.numSpotShadows!==F||j.numSpotMaps!==E||j.numLightProbes!==k)&&(r.sun.length=M,r.directional.length=x,r.spot.length=D,r.rectArea.length=z,r.point.length=v,r.hemi.length=C,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-N,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=k,j.sunLength=M,j.directionalLength=x,j.pointLength=v,j.spotLength=D,j.rectAreaLength=z,j.hemiLength=C,j.numSunShadows=A,j.numDirectionalShadows=P,j.numPointShadows=L,j.numSpotShadows=F,j.numSpotMaps=E,j.numLightProbes=k,r.version=yE++)}function m(p,_){let S=0,g=0,M=0,A=0,b=0,x=0;const v=_.matrixWorldInverse;for(let D=0,z=p.length;D<z;D++){const C=p[D];if(C.isSunLight){const P=r.sun[S];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(v),S++}else if(C.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(v),g++}else if(C.isSpotLight){const P=r.spot[A];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(v),P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(v),A++}else if(C.isRectAreaLight){const P=r.rectArea[b];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(v),u.identity(),l.copy(C.matrixWorld),l.premultiply(v),u.extractRotation(l),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),b++}else if(C.isPointLight){const P=r.point[M];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(v),M++}else if(C.isHemisphereLight){const P=r.hemi[x];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(v),x++}}}return{setup:f,setupView:m,state:r}}function Xm(s){const e=new EE(s),n=[],r=[],o=[];function l(g){S.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function TE(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Xm(s),e.set(o,[f])):l>=u.length?(f=new Xm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`,CE=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],RE=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],Ym=new on,to=new ue,ud=new ue;function bE(s,e,n){let r=new mf;const o=new Lt,l=new Lt,u=new tn,f=new O_,m=new k_,p={},_=n.maxTextureSize,S={[_s]:ii,[ii]:_s,[Zi]:Zi},g=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:wE,fragmentShader:AE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new hi;A.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ct(A,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let v=this.type;this.render=function(L,F,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===Tv&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ol);const N=s.getRenderTarget(),k=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(yr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const re=v!==this.type;re&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Q=>Q.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Q=L.length;X<Q;X++){const pe=L[X],ie=pe.shadow;if(ie===void 0){dt("WebGLShadowMap:",pe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const q=ie.getFrameExtents();o.multiply(q),l.copy(ie.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/q.x),o.x=l.x*q.x,ie.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/q.y),o.y=l.y*q.y,ie.mapSize.y=l.y));const ee=s.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=ee,ie.map===null||re===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===no){if(pe.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new Gi(o.x,o.y,{format:ys,type:nr,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),ie.map.texture.name=pe.name+".shadowMap",ie.map.depthTexture=new uo(o.x,o.y,Ji),ie.map.depthTexture.name=pe.name+".shadowMapDepth",ie.map.depthTexture.format=Tr,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Ln,ie.map.depthTexture.magFilter=Ln}else pe.isPointLight?(ie.map=new Ag(o.x),ie.map.depthTexture=new L_(o.x,tr)):(ie.map=new Gi(o.x,o.y),ie.map.depthTexture=new uo(o.x,o.y,tr)),ie.map.depthTexture.name=pe.name+".shadowMap",ie.map.depthTexture.format=Tr,this.type===Ol?(ie.map.depthTexture.compareFunction=ee?df:uf,ie.map.depthTexture.minFilter=Vn,ie.map.depthTexture.magFilter=Vn):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Ln,ie.map.depthTexture.magFilter=Ln);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==o.x||ie.map.height!==o.y)&&ie.map.setSize(o.x,o.y);const ne=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();pe.isPointLight!==!0&&ie.updateMatrices(pe,E);for(let I=0;I<ne;I++){const oe=ie.getCamera(I);if(pe.isPointLight){const Se=ie.camera,Ve=ie.matrix,Fe=pe.distance||Se.far;Fe!==Se.far&&(Se.far=Fe,Se.updateProjectionMatrix()),to.setFromMatrixPosition(pe.matrixWorld),Se.position.copy(to),ud.copy(Se.position),ud.add(CE[I]),Se.up.copy(RE[I]),Se.lookAt(ud),Se.updateMatrixWorld(),Ve.makeTranslation(-to.x,-to.y,-to.z),Ym.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(Ym,Se.coordinateSystem,Se.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)s.setRenderTarget(ie.map,I),s.clear();else{I===0&&(s.setRenderTarget(ie.map),s.clear());const Se=ie.getViewport(I);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),Z.viewport(u)}r=ie.getFrustum(I),C(F,E,oe,pe,this.type)}ie.isPointLightShadow!==!0&&this.type===no&&D(ie,E),ie.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(N,k,j)};function D(L,F){const E=e.update(b);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null?L.mapPass=new Gi(o.x,o.y,{format:ys,type:nr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(F,null,E,g,b,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(F,null,E,M,b,null)}function z(L,F,E,N){let k=null;const j=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)k=j;else if(k=E.isPointLight===!0?m:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=k.uuid,re=F.uuid;let X=p[Z];X===void 0&&(X={},p[Z]=X);let Q=X[re];Q===void 0&&(Q=k.clone(),X[re]=Q,F.addEventListener("dispose",P)),k=Q}if(k.visible=F.visible,k.wireframe=F.wireframe,N===no?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:S[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Z=s.properties.get(k);Z.light=E}return k}function C(L,F,E,N,k){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===no)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const re=e.update(L),X=L.material;if(Array.isArray(X)){const Q=re.groups;for(let pe=0,ie=Q.length;pe<ie;pe++){const q=Q[pe],ee=X[q.materialIndex];if(ee&&ee.visible){const ne=z(L,ee,N,k);L.onBeforeShadow(s,L,F,E,re,ne,q),s.renderBufferDirect(E,null,re,ne,L,q),L.onAfterShadow(s,L,F,E,re,ne,q)}}}else if(X.visible){const Q=z(L,X,N,k);L.onBeforeShadow(s,L,F,E,re,Q,null),s.renderBufferDirect(E,null,re,Q,L,null),L.onAfterShadow(s,L,F,E,re,Q,null)}}const Z=L.children;for(let re=0,X=Z.length;re<X;re++)C(Z[re],F,E,N,k)}function P(L){L.target.removeEventListener("dispose",P);for(const E in p){const N=p[E],k=L.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function PE(s,e){function n(){let H=!1;const Ae=new tn;let ge=null;const be=new tn(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!H&&(s.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,Me,Ze,qe,wt){wt===!0&&(Ie*=qe,Me*=qe,Ze*=qe),Ae.set(Ie,Me,Ze,qe),be.equals(Ae)===!1&&(s.clearColor(Ie,Me,Ze,qe),be.copy(Ae))},reset:function(){H=!1,ge=null,be.set(-1,0,0,0)}}}function r(){let H=!1,Ae=!1,ge=null,be=null,Ie=null;return{setReversed:function(Me){if(Ae!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const qe=Ie;Ie=null,this.setClear(qe)}},getReversed:function(){return Ae},setTest:function(Me){Me?$(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!H&&(s.depthMask(Me),ge=Me)},setFunc:function(Me){if(Ae&&(Me=s_[Me]),be!==Me){switch(Me){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case pd:s.depthFunc(s.LESS);break;case ao:s.depthFunc(s.LEQUAL);break;case md:s.depthFunc(s.EQUAL);break;case gd:s.depthFunc(s.GEQUAL);break;case vd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=Me}},setLocked:function(Me){H=Me},setClear:function(Me){Ie!==Me&&(Ie=Me,Ae&&(Me=1-Me),s.clearDepth(Me))},reset:function(){H=!1,ge=null,be=null,Ie=null,Ae=!1}}}function o(){let H=!1,Ae=null,ge=null,be=null,Ie=null,Me=null,Ze=null,qe=null,wt=null;return{setTest:function(St){H||(St?$(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(St){Ae!==St&&!H&&(s.stencilMask(St),Ae=St)},setFunc:function(St,nn,An){(ge!==St||be!==nn||Ie!==An)&&(s.stencilFunc(St,nn,An),ge=St,be=nn,Ie=An)},setOp:function(St,nn,An){(Me!==St||Ze!==nn||qe!==An)&&(s.stencilOp(St,nn,An),Me=St,Ze=nn,qe=An)},setLocked:function(St){H=St},setClear:function(St){wt!==St&&(s.clearStencil(St),wt=St)},reset:function(){H=!1,Ae=null,ge=null,be=null,Ie=null,Me=null,Ze=null,qe=null,wt=null}}}const l=new n,u=new r,f=new o,m=new WeakMap,p=new WeakMap;let _={},S={},g={},M=new WeakMap,A=[],b=null,x=!1,v=null,D=null,z=null,C=null,P=null,L=null,F=null,E=new Pt(0,0,0),N=0,k=!1,j=null,Z=null,re=null,X=null,Q=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,q=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ie=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ie=q>=2);let ne=null,I={};const oe=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ve=new tn().fromArray(oe),Fe=new tn().fromArray(Se);function Oe(H,Ae,ge,be){const Ie=new Uint8Array(4),Me=s.createTexture();s.bindTexture(H,Me),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<ge;Ze++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ae+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Me}const le={};le[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),$(s.DEPTH_TEST),u.setFunc(ao),ot(!1),xt($p),$(s.CULL_FACE),at(yr);function $(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Re(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function He(H,Ae){return g[H]!==Ae?(s.bindFramebuffer(H,Ae),g[H]=Ae,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function De(H,Ae){let ge=A,be=!1;if(H){ge=M.get(Ae),ge===void 0&&(ge=[],M.set(Ae,ge));const Ie=H.textures;if(ge.length!==Ie.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ze=Ie.length;Me<Ze;Me++)ge[Me]=s.COLOR_ATTACHMENT0+Me;ge.length=Ie.length,be=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,be=!0);be&&s.drawBuffers(ge)}function tt(H){return b!==H?(s.useProgram(H),b=H,!0):!1}const Ot={[aa]:s.FUNC_ADD,[Av]:s.FUNC_SUBTRACT,[Cv]:s.FUNC_REVERSE_SUBTRACT};Ot[Rv]=s.MIN,Ot[bv]=s.MAX;const We={[Pv]:s.ZERO,[Lv]:s.ONE,[Nv]:s.SRC_COLOR,[$m]:s.SRC_ALPHA,[kv]:s.SRC_ALPHA_SATURATE,[Fv]:s.DST_COLOR,[Dv]:s.DST_ALPHA,[Iv]:s.ONE_MINUS_SRC_COLOR,[Zm]:s.ONE_MINUS_SRC_ALPHA,[Ov]:s.ONE_MINUS_DST_COLOR,[Uv]:s.ONE_MINUS_DST_ALPHA,[Bv]:s.CONSTANT_COLOR,[zv]:s.ONE_MINUS_CONSTANT_COLOR,[Gv]:s.CONSTANT_ALPHA,[Vv]:s.ONE_MINUS_CONSTANT_ALPHA};function at(H,Ae,ge,be,Ie,Me,Ze,qe,wt,St){if(H===yr){x===!0&&(Re(s.BLEND),x=!1);return}if(x===!1&&($(s.BLEND),x=!0),H!==wv){if(H!==v||St!==k){if((D!==aa||P!==aa)&&(s.blendEquation(s.FUNC_ADD),D=aa,P=aa),St)switch(H){case ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",H);break}else switch(H){case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jp:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qp:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",H);break}z=null,C=null,L=null,F=null,E.set(0,0,0),N=0,v=H,k=St}return}Ie=Ie||Ae,Me=Me||ge,Ze=Ze||be,(Ae!==D||Ie!==P)&&(s.blendEquationSeparate(Ot[Ae],Ot[Ie]),D=Ae,P=Ie),(ge!==z||be!==C||Me!==L||Ze!==F)&&(s.blendFuncSeparate(We[ge],We[be],We[Me],We[Ze]),z=ge,C=be,L=Me,F=Ze),(qe.equals(E)===!1||wt!==N)&&(s.blendColor(qe.r,qe.g,qe.b,wt),E.copy(qe),N=wt),v=H,k=!1}function Mt(H,Ae){H.side===Zi?Re(s.CULL_FACE):$(s.CULL_FACE);let ge=H.side===ii;Ae&&(ge=!ge),ot(ge),H.blending===ro&&H.transparent===!1?at(yr):at(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const be=H.stencilWrite;f.setTest(be),be&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),kt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(H){j!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),j=H)}function xt(H){H!==Mv?($(s.CULL_FACE),H!==Z&&(H===$p?s.cullFace(s.BACK):H===Ev?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),Z=H}function Vt(H){H!==re&&(ie&&s.lineWidth(H),re=H)}function kt(H,Ae,ge){H?($(s.POLYGON_OFFSET_FILL),(X!==Ae||Q!==ge)&&(X=Ae,Q=ge,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,ge))):Re(s.POLYGON_OFFSET_FILL)}function ut(H){H?$(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function Bt(H){H===void 0&&(H=s.TEXTURE0+pe-1),ne!==H&&(s.activeTexture(H),ne=H)}function K(H,Ae,ge){ge===void 0&&(ne===null?ge=s.TEXTURE0+pe-1:ge=ne);let be=I[ge];be===void 0&&(be={type:void 0,texture:void 0},I[ge]=be),(be.type!==H||be.texture!==Ae)&&(ne!==ge&&(s.activeTexture(ge),ne=ge),s.bindTexture(H,Ae||le[H]),be.type=H,be.texture=Ae)}function $t(){const H=I[ne];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Et(){try{s.compressedTexImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function y(){try{s.texSubImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function te(){try{s.texSubImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function Le(){try{s.texStorage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function R(){try{s.texImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function B(){try{s.texImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function _e(H){return S[H]!==void 0?S[H]:s.getParameter(H)}function xe(H,Ae){S[H]!==Ae&&(s.pixelStorei(H,Ae),S[H]=Ae)}function ye(H){Ve.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function V(H){Fe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Fe.copy(H))}function Be(H,Ae){let ge=p.get(Ae);ge===void 0&&(ge=new WeakMap,p.set(Ae,ge));let be=ge.get(H);be===void 0&&(be=s.getUniformBlockIndex(Ae,H.name),ge.set(H,be))}function Ne(H,Ae){const be=p.get(Ae).get(H);m.get(Ae)!==be&&(s.uniformBlockBinding(Ae,be,H.__bindingPointIndex),m.set(Ae,be))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},ne=null,I={},g={},M=new WeakMap,A=[],b=null,x=!1,v=null,D=null,z=null,C=null,P=null,L=null,F=null,E=new Pt(0,0,0),N=0,k=!1,j=null,Z=null,re=null,X=null,Q=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:$,disable:Re,bindFramebuffer:He,drawBuffers:De,useProgram:tt,setBlending:at,setMaterial:Mt,setFlipSided:ot,setCullFace:xt,setLineWidth:Vt,setPolygonOffset:kt,setScissorTest:ut,activeTexture:Bt,bindTexture:K,unbindTexture:$t,compressedTexImage2D:Et,compressedTexImage3D:U,texImage2D:R,texImage3D:B,pixelStorei:xe,getParameter:_e,updateUBOMapping:Be,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Le,texSubImage2D:y,texSubImage3D:te,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:ye,viewport:V,reset:$e}}function LE(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,_=new WeakMap,S=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,y){return A?new OffscreenCanvas(U,y):ql("canvas")}function x(U,y,te){let de=1;const ve=Et(U);if((ve.width>te||ve.height>te)&&(de=te/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const we=Math.floor(de*ve.width),Le=Math.floor(de*ve.height);g===void 0&&(g=b(we,Le));const R=y?b(we,Le):g;return R.width=we,R.height=Le,R.getContext("2d").drawImage(U,0,0,we,Le),dt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+we+"x"+Le+")."),R}else return"data"in U&&dt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function v(U){return U.generateMipmaps}function D(U){s.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(U,y,te,de,ve,we=!1){if(U!==null){if(s[U]!==void 0)return s[U];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Le;de&&(Le=e.get("EXT_texture_norm16"),Le||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let R=y;if(y===s.RED&&(te===s.FLOAT&&(R=s.R32F),te===s.HALF_FLOAT&&(R=s.R16F),te===s.UNSIGNED_BYTE&&(R=s.R8),te===s.UNSIGNED_SHORT&&Le&&(R=Le.R16_EXT),te===s.SHORT&&Le&&(R=Le.R16_SNORM_EXT)),y===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(R=s.R8UI),te===s.UNSIGNED_SHORT&&(R=s.R16UI),te===s.UNSIGNED_INT&&(R=s.R32UI),te===s.BYTE&&(R=s.R8I),te===s.SHORT&&(R=s.R16I),te===s.INT&&(R=s.R32I)),y===s.RG&&(te===s.FLOAT&&(R=s.RG32F),te===s.HALF_FLOAT&&(R=s.RG16F),te===s.UNSIGNED_BYTE&&(R=s.RG8),te===s.UNSIGNED_SHORT&&Le&&(R=Le.RG16_EXT),te===s.SHORT&&Le&&(R=Le.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(R=s.RG8UI),te===s.UNSIGNED_SHORT&&(R=s.RG16UI),te===s.UNSIGNED_INT&&(R=s.RG32UI),te===s.BYTE&&(R=s.RG8I),te===s.SHORT&&(R=s.RG16I),te===s.INT&&(R=s.RG32I)),y===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(R=s.RGB8UI),te===s.UNSIGNED_SHORT&&(R=s.RGB16UI),te===s.UNSIGNED_INT&&(R=s.RGB32UI),te===s.BYTE&&(R=s.RGB8I),te===s.SHORT&&(R=s.RGB16I),te===s.INT&&(R=s.RGB32I)),y===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(R=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(R=s.RGBA16UI),te===s.UNSIGNED_INT&&(R=s.RGBA32UI),te===s.BYTE&&(R=s.RGBA8I),te===s.SHORT&&(R=s.RGBA16I),te===s.INT&&(R=s.RGBA32I)),y===s.RGB&&(te===s.UNSIGNED_SHORT&&Le&&(R=Le.RGB16_EXT),te===s.SHORT&&Le&&(R=Le.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(R=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(R=s.R11F_G11F_B10F)),y===s.RGBA){const B=we?Yl:Rt.getTransfer(ve);te===s.FLOAT&&(R=s.RGBA32F),te===s.HALF_FLOAT&&(R=s.RGBA16F),te===s.UNSIGNED_BYTE&&(R=B===Gt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Le&&(R=Le.RGBA16_EXT),te===s.SHORT&&Le&&(R=Le.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(R=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(R=s.RGB5_A1)}return(R===s.R16F||R===s.R32F||R===s.RG16F||R===s.RG32F||R===s.RGBA16F||R===s.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function P(U,y){let te;return U?y===null||y===tr||y===lo?te=s.DEPTH24_STENCIL8:y===Ji?te=s.DEPTH32F_STENCIL8:y===oo&&(te=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===tr||y===lo?te=s.DEPTH_COMPONENT24:y===Ji?te=s.DEPTH_COMPONENT32F:y===oo&&(te=s.DEPTH_COMPONENT16),te}function L(U,y){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function F(U){const y=U.target;y.removeEventListener("dispose",F),N(y),y.isVideoTexture&&_.delete(y),y.isHTMLTexture&&S.delete(y)}function E(U){const y=U.target;y.removeEventListener("dispose",E),j(y)}function N(U){const y=r.get(U);if(y.__webglInit===void 0)return;const te=U.source,de=M.get(te);if(de){const ve=de[y.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&k(U),Object.keys(de).length===0&&M.delete(te)}r.remove(U)}function k(U){const y=r.get(U);s.deleteTexture(y.__webglTexture);const te=U.source,de=M.get(te);delete de[y.__cacheKey],u.memory.textures--}function j(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(y.__webglFramebuffer[de]))for(let ve=0;ve<y.__webglFramebuffer[de].length;ve++)s.deleteFramebuffer(y.__webglFramebuffer[de][ve]);else s.deleteFramebuffer(y.__webglFramebuffer[de]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[de])}else{if(Array.isArray(y.__webglFramebuffer))for(let de=0;de<y.__webglFramebuffer.length;de++)s.deleteFramebuffer(y.__webglFramebuffer[de]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let de=0;de<y.__webglColorRenderbuffer.length;de++)y.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[de]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const te=U.textures;for(let de=0,ve=te.length;de<ve;de++){const we=r.get(te[de]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(te[de])}r.remove(U)}let Z=0;function re(){Z=0}function X(){return Z}function Q(U){Z=U}function pe(){const U=Z;return U>=o.maxTextures&&dt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,U}function ie(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function q(U,y){const te=r.get(U);if(U.isVideoTexture&&K(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&te.__version!==U.version){const de=U.image;if(de===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(te,U,y);return}}else U.isExternalTexture&&(te.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+y)}function ee(U,y){const te=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){Re(te,U,y);return}else U.isExternalTexture&&(te.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+y)}function ne(U,y){const te=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){Re(te,U,y);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+y)}function I(U,y){const te=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&te.__version!==U.version){He(te,U,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+y)}const oe={[Ss]:s.REPEAT,[Sr]:s.CLAMP_TO_EDGE,[xd]:s.MIRRORED_REPEAT},Se={[Ln]:s.NEAREST,[Xv]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},Ve={[Kv]:s.NEVER,[e_]:s.ALWAYS,[$v]:s.LESS,[uf]:s.LEQUAL,[Zv]:s.EQUAL,[df]:s.GEQUAL,[Jv]:s.GREATER,[Qv]:s.NOTEQUAL};function Fe(U,y){if(y.type===Ji&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Du||y.magFilter===ml||y.magFilter===gs||y.minFilter===Vn||y.minFilter===Du||y.minFilter===ml||y.minFilter===gs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,oe[y.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Se[y.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ln||y.minFilter!==ml&&y.minFilter!==gs||y.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(U,y){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",F));const de=y.source;let ve=M.get(de);ve===void 0&&(ve={},M.set(de,ve));const we=ie(y);if(we!==U.__cacheKey){ve[we]===void 0&&(ve[we]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),ve[we].usedTimes++;const Le=ve[U.__cacheKey];Le!==void 0&&(ve[U.__cacheKey].usedTimes--,Le.usedTimes===0&&k(y)),U.__cacheKey=we,U.__webglTexture=ve[we].texture}return te}function le(U,y,te){return Math.floor(Math.floor(U/te)/y)}function $(U,y,te,de){const we=U.updateRanges;if(we.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,te,de,y.data);else{we.sort((xe,ye)=>xe.start-ye.start);let Le=0;for(let xe=1;xe<we.length;xe++){const ye=we[Le],V=we[xe],Be=ye.start+ye.count,Ne=le(V.start,y.width,4),$e=le(ye.start,y.width,4);V.start<=Be+1&&Ne===$e&&le(V.start+V.count-1,y.width,4)===Ne?ye.count=Math.max(ye.count,V.start+V.count-ye.start):(++Le,we[Le]=V)}we.length=Le+1;const R=n.getParameter(s.UNPACK_ROW_LENGTH),B=n.getParameter(s.UNPACK_SKIP_PIXELS),_e=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let xe=0,ye=we.length;xe<ye;xe++){const V=we[xe],Be=Math.floor(V.start/4),Ne=Math.ceil(V.count/4),$e=Be%y.width,H=Math.floor(Be/y.width),Ae=Ne,ge=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,$e,H,Ae,ge,te,de,y.data)}U.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,R),n.pixelStorei(s.UNPACK_SKIP_PIXELS,B),n.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function Re(U,y,te){let de=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(de=s.TEXTURE_3D);const ve=Oe(U,y),we=y.source;n.bindTexture(de,U.__webglTexture,s.TEXTURE0+te);const Le=r.get(we);if(we.version!==Le.__version||ve===!0){if(n.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=Rt.getPrimaries(Rt.workingColorSpace),be=y.colorSpace===$r?null:Rt.getPrimaries(y.colorSpace),Ie=y.colorSpace===$r||ge===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let B=x(y.image,!1,o.maxTextureSize);B=$t(y,B);const _e=l.convert(y.format,y.colorSpace),xe=l.convert(y.type);let ye=C(y.internalFormat,_e,xe,y.normalized,y.colorSpace,y.isVideoTexture);Fe(de,y);let V;const Be=y.mipmaps,Ne=y.isVideoTexture!==!0,$e=Le.__version===void 0||ve===!0,H=we.dataReady,Ae=L(y,B);if(y.isDepthTexture)ye=P(y.format===vs,y.type),$e&&(Ne?n.texStorage2D(s.TEXTURE_2D,1,ye,B.width,B.height):n.texImage2D(s.TEXTURE_2D,0,ye,B.width,B.height,0,_e,xe,null));else if(y.isDataTexture)if(Be.length>0){Ne&&$e&&n.texStorage2D(s.TEXTURE_2D,Ae,ye,Be[0].width,Be[0].height);for(let ge=0,be=Be.length;ge<be;ge++)V=Be[ge],Ne?H&&n.texSubImage2D(s.TEXTURE_2D,ge,0,0,V.width,V.height,_e,xe,V.data):n.texImage2D(s.TEXTURE_2D,ge,ye,V.width,V.height,0,_e,xe,V.data);y.generateMipmaps=!1}else Ne?($e&&n.texStorage2D(s.TEXTURE_2D,Ae,ye,B.width,B.height),H&&$(y,B,_e,xe)):n.texImage2D(s.TEXTURE_2D,0,ye,B.width,B.height,0,_e,xe,B.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&$e&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,ye,Be[0].width,Be[0].height,B.depth);for(let ge=0,be=Be.length;ge<be;ge++)if(V=Be[ge],y.format!==zi)if(_e!==null)if(Ne){if(H)if(y.layerUpdates.size>0){const Ie=Tm(V.width,V.height,y.format,y.type);for(const Me of y.layerUpdates){const Ze=V.data.subarray(Me*Ie/V.data.BYTES_PER_ELEMENT,(Me+1)*Ie/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Me,V.width,V.height,1,_e,Ze)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,V.width,V.height,B.depth,_e,V.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,ye,V.width,V.height,B.depth,0,V.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,V.width,V.height,B.depth,_e,xe,V.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ge,ye,V.width,V.height,B.depth,0,_e,xe,V.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ne&&$e&&n.texStorage2D(s.TEXTURE_2D,Ae,ye,Be[0].width,Be[0].height);for(let ge=0,be=Be.length;ge<be;ge++)V=Be[ge],y.format!==zi?_e!==null?Ne?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,V.width,V.height,_e,V.data):n.compressedTexImage2D(s.TEXTURE_2D,ge,ye,V.width,V.height,0,V.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?H&&n.texSubImage2D(s.TEXTURE_2D,ge,0,0,V.width,V.height,_e,xe,V.data):n.texImage2D(s.TEXTURE_2D,ge,ye,V.width,V.height,0,_e,xe,V.data)}else if(y.isDataArrayTexture)if(Ne){if($e&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,ye,B.width,B.height,B.depth),H)if(y.layerUpdates.size>0){const ge=Tm(B.width,B.height,y.format,y.type);for(const be of y.layerUpdates){const Ie=B.data.subarray(be*ge/B.data.BYTES_PER_ELEMENT,(be+1)*ge/B.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,B.width,B.height,1,_e,xe,Ie)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,_e,xe,B.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,B.width,B.height,B.depth,0,_e,xe,B.data);else if(y.isData3DTexture)Ne?($e&&n.texStorage3D(s.TEXTURE_3D,Ae,ye,B.width,B.height,B.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,_e,xe,B.data)):n.texImage3D(s.TEXTURE_3D,0,ye,B.width,B.height,B.depth,0,_e,xe,B.data);else if(y.isFramebufferTexture){if($e)if(Ne)n.texStorage2D(s.TEXTURE_2D,Ae,ye,B.width,B.height);else{let ge=B.width,be=B.height;for(let Ie=0;Ie<Ae;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,ye,ge,be,0,_e,xe,null),ge>>=1,be>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),B.parentNode!==ge){ge.appendChild(B),S.add(y),ge.onpaint=be=>{const Ie=be.changedElements;for(const Me of S)Ie.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,B);else{const Ie=s.RGBA,Me=s.RGBA,Ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,Me,Ze,B)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ne&&$e){const ge=Et(Be[0]);n.texStorage2D(s.TEXTURE_2D,Ae,ye,ge.width,ge.height)}for(let ge=0,be=Be.length;ge<be;ge++)V=Be[ge],Ne?H&&n.texSubImage2D(s.TEXTURE_2D,ge,0,0,_e,xe,V):n.texImage2D(s.TEXTURE_2D,ge,ye,_e,xe,V);y.generateMipmaps=!1}else if(Ne){if($e){const ge=Et(B);n.texStorage2D(s.TEXTURE_2D,Ae,ye,ge.width,ge.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,xe,B)}else n.texImage2D(s.TEXTURE_2D,0,ye,_e,xe,B);v(y)&&D(de),Le.__version=we.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function He(U,y,te){if(y.image.length!==6)return;const de=Oe(U,y),ve=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+te);const we=r.get(ve);if(ve.version!==we.__version||de===!0){n.activeTexture(s.TEXTURE0+te);const Le=Rt.getPrimaries(Rt.workingColorSpace),R=y.colorSpace===$r?null:Rt.getPrimaries(y.colorSpace),B=y.colorSpace===$r||Le===R?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let Me=0;Me<6;Me++)!_e&&!xe?ye[Me]=x(y.image[Me],!0,o.maxCubemapSize):ye[Me]=xe?y.image[Me].image:y.image[Me],ye[Me]=$t(y,ye[Me]);const V=ye[0],Be=l.convert(y.format,y.colorSpace),Ne=l.convert(y.type),$e=C(y.internalFormat,Be,Ne,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,Ae=we.__version===void 0||de===!0,ge=ve.dataReady;let be=L(y,V);Fe(s.TEXTURE_CUBE_MAP,y);let Ie;if(_e){H&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,$e,V.width,V.height);for(let Me=0;Me<6;Me++){Ie=ye[Me].mipmaps;for(let Ze=0;Ze<Ie.length;Ze++){const qe=Ie[Ze];y.format!==zi?Be!==null?H?ge&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,qe.width,qe.height,Be,qe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,$e,qe.width,qe.height,0,qe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,qe.width,qe.height,Be,Ne,qe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,$e,qe.width,qe.height,0,Be,Ne,qe.data)}}}else{if(Ie=y.mipmaps,H&&Ae){Ie.length>0&&be++;const Me=Et(ye[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,$e,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(xe){H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ye[Me].width,ye[Me].height,Be,Ne,ye[Me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,$e,ye[Me].width,ye[Me].height,0,Be,Ne,ye[Me].data);for(let Ze=0;Ze<Ie.length;Ze++){const wt=Ie[Ze].image[Me].image;H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,wt.width,wt.height,Be,Ne,wt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,$e,wt.width,wt.height,0,Be,Ne,wt.data)}}else{H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Be,Ne,ye[Me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,$e,Be,Ne,ye[Me]);for(let Ze=0;Ze<Ie.length;Ze++){const qe=Ie[Ze];H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Be,Ne,qe.image[Me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,$e,Be,Ne,qe.image[Me])}}}v(y)&&D(s.TEXTURE_CUBE_MAP),we.__version=ve.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function De(U,y,te,de,ve,we){const Le=l.convert(te.format,te.colorSpace),R=l.convert(te.type),B=C(te.internalFormat,Le,R,te.normalized,te.colorSpace),_e=r.get(y),xe=r.get(te);if(xe.__renderTarget=y,!_e.__hasExternalTextures){const ye=Math.max(1,y.width>>we),V=Math.max(1,y.height>>we);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,we,B,ye,V,y.depth,0,Le,R,null):n.texImage2D(ve,we,B,ye,V,0,Le,R,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Bt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ve,xe.__webglTexture,0,ut(y)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ve,xe.__webglTexture,we),n.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(U,y,te){if(s.bindRenderbuffer(s.RENDERBUFFER,U),y.depthBuffer){const de=y.depthTexture,ve=de&&de.isDepthTexture?de.type:null,we=P(y.stencilBuffer,ve),Le=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(y),we,y.width,y.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(y),we,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,we,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,U)}else{const de=y.textures;for(let ve=0;ve<de.length;ve++){const we=de[ve],Le=l.convert(we.format,we.colorSpace),R=l.convert(we.type),B=C(we.internalFormat,Le,R,we.normalized,we.colorSpace);Bt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(y),B,y.width,y.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(y),B,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,B,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(U,y,te){const de=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=r.get(y.depthTexture);if(ve.__renderTarget=y,(!ve.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),de){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y.depthTexture);const _e=l.convert(y.depthTexture.format),xe=l.convert(y.depthTexture.type);let ye;y.depthTexture.format===Tr?ye=s.DEPTH_COMPONENT24:y.depthTexture.format===vs&&(ye=s.DEPTH24_STENCIL8);for(let V=0;V<6;V++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ye,y.width,y.height,0,_e,xe,null)}}else q(y.depthTexture,0);const we=ve.__webglTexture,Le=ut(y),R=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,B=y.depthTexture.format===vs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Tr)Bt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,R,we,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,B,R,we,0);else if(y.depthTexture.format===vs)Bt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,R,we,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,B,R,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(U){const y=r.get(U),te=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),de){const ve=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),y.__depthDisposeCallback=ve}y.__boundDepthTexture=de}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(te)for(let de=0;de<6;de++)Ot(y.__webglFramebuffer[de],U,de);else{const de=U.texture.mipmaps;de&&de.length>0?Ot(y.__webglFramebuffer[0],U,0):Ot(y.__webglFramebuffer,U,0)}else if(te){y.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[de]),y.__webglDepthbuffer[de]===void 0)y.__webglDepthbuffer[de]=s.createRenderbuffer(),tt(y.__webglDepthbuffer[de],U,!1);else{const ve=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,we)}}else{const de=U.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),tt(y.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,we)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function at(U,y,te){const de=r.get(U);y!==void 0&&De(de.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&We(U)}function Mt(U){const y=U.texture,te=r.get(U),de=r.get(y);U.addEventListener("dispose",E);const ve=U.textures,we=U.isWebGLCubeRenderTarget===!0,Le=ve.length>1;if(Le||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=y.version,u.memory.textures++),we){te.__webglFramebuffer=[];for(let R=0;R<6;R++)if(y.mipmaps&&y.mipmaps.length>0){te.__webglFramebuffer[R]=[];for(let B=0;B<y.mipmaps.length;B++)te.__webglFramebuffer[R][B]=s.createFramebuffer()}else te.__webglFramebuffer[R]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){te.__webglFramebuffer=[];for(let R=0;R<y.mipmaps.length;R++)te.__webglFramebuffer[R]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Le)for(let R=0,B=ve.length;R<B;R++){const _e=r.get(ve[R]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Bt(U)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let R=0;R<ve.length;R++){const B=ve[R];te.__webglColorRenderbuffer[R]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[R]);const _e=l.convert(B.format,B.colorSpace),xe=l.convert(B.type),ye=C(B.internalFormat,_e,xe,B.normalized,B.colorSpace,U.isXRRenderTarget===!0),V=ut(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,V,ye,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+R,s.RENDERBUFFER,te.__webglColorRenderbuffer[R])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(te.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let R=0;R<6;R++)if(y.mipmaps&&y.mipmaps.length>0)for(let B=0;B<y.mipmaps.length;B++)De(te.__webglFramebuffer[R][B],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+R,B);else De(te.__webglFramebuffer[R],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0);v(y)&&D(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let R=0,B=ve.length;R<B;R++){const _e=ve[R],xe=r.get(_e);let ye=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ye=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ye,xe.__webglTexture),Fe(ye,_e),De(te.__webglFramebuffer,U,_e,s.COLOR_ATTACHMENT0+R,ye,0),v(_e)&&D(ye)}n.unbindTexture()}else{let R=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(R=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(R,de.__webglTexture),Fe(R,y),y.mipmaps&&y.mipmaps.length>0)for(let B=0;B<y.mipmaps.length;B++)De(te.__webglFramebuffer[B],U,y,s.COLOR_ATTACHMENT0,R,B);else De(te.__webglFramebuffer,U,y,s.COLOR_ATTACHMENT0,R,0);v(y)&&D(R),n.unbindTexture()}U.depthBuffer&&We(U)}function ot(U){const y=U.textures;for(let te=0,de=y.length;te<de;te++){const ve=y[te];if(v(ve)){const we=z(U),Le=r.get(ve).__webglTexture;n.bindTexture(we,Le),D(we),n.unbindTexture()}}}const xt=[],Vt=[];function kt(U){if(U.samples>0){if(Bt(U)===!1){const y=U.textures,te=U.width,de=U.height;let ve=s.COLOR_BUFFER_BIT;const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(U),R=y.length>1;if(R)for(let _e=0;_e<y.length;_e++)n.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const B=U.texture.mipmaps;B&&B.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),R){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[_e]);const xe=r.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,te,de,0,0,te,de,ve,s.NEAREST),m===!0&&(xt.length=0,Vt.length=0,xt.push(s.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(xt.push(we),Vt.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),R)for(let _e=0;_e<y.length;_e++){n.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Le.__webglColorRenderbuffer[_e]);const xe=r.get(y[_e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,xe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&m){const y=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ut(U){return Math.min(o.maxSamples,U.samples)}function Bt(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(U){const y=u.render.frame;_.get(U)!==y&&(_.set(U,y),U.update())}function $t(U,y){const te=U.colorSpace,de=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==Xl&&te!==$r&&(Rt.getTransfer(te)===Gt?(de!==zi||ve!==fi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",te)),y}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=re,this.getTextureUnits=X,this.setTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=I,this.rebindTextures=at,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function NE(s,e){function n(r,o=$r){let l;const u=Rt.getTransfer(o);if(r===fi)return s.UNSIGNED_BYTE;if(r===sf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===af)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===cg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ag)return s.BYTE;if(r===og)return s.SHORT;if(r===oo)return s.UNSIGNED_SHORT;if(r===rf)return s.INT;if(r===tr)return s.UNSIGNED_INT;if(r===Ji)return s.FLOAT;if(r===nr)return s.HALF_FLOAT;if(r===ug)return s.ALPHA;if(r===dg)return s.RGB;if(r===zi)return s.RGBA;if(r===Tr)return s.DEPTH_COMPONENT;if(r===vs)return s.DEPTH_STENCIL;if(r===fg)return s.RED;if(r===of)return s.RED_INTEGER;if(r===ys)return s.RG;if(r===lf)return s.RG_INTEGER;if(r===cf)return s.RGBA_INTEGER;if(r===kl||r===Bl||r===zl||r===Gl)if(u===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===yd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td||r===wd||r===Ad||r===Cd||r===Rd||r===Hl||r===bd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Td||r===wd)return u===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ad)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cd)return l.COMPRESSED_R11_EAC;if(r===Rd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Hl)return l.COMPRESSED_RG11_EAC;if(r===bd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Pd||r===Ld||r===Nd||r===Id||r===Dd||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Gd||r===Vd||r===Hd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Pd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Id)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ud)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wd||r===Xd||r===Yd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Wd)return u===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qd||r===jd||r===Wl||r===Kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===qd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===jd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Sg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ir({vertexShader:IE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new fa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends Ms{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,_=null,S=null,g=null,M=null,A=null;const b=typeof XRWebGLBinding<"u",x=new UE,v={},D=n.getContextAttributes();let z=null,C=null;const P=[],L=[],F=new Lt;let E=null,N=null;const k=new di;k.viewport=new tn;const j=new di;j.viewport=new tn;const Z=[k,j],re=new W_;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let $=P[le];return $===void 0&&($=new Hu,P[le]=$),$.getTargetRaySpace()},this.getControllerGrip=function(le){let $=P[le];return $===void 0&&($=new Hu,P[le]=$),$.getGripSpace()},this.getHand=function(le){let $=P[le];return $===void 0&&($=new Hu,P[le]=$),$.getHandSpace()};function pe(le){const $=L.indexOf(le.inputSource);if($===-1)return;const Re=P[$];Re!==void 0&&(Re.update(le.inputSource,le.frame,p||u),Re.dispatchEvent({type:le.type,data:le.inputSource}))}function ie(){o.removeEventListener("select",pe),o.removeEventListener("selectstart",pe),o.removeEventListener("selectend",pe),o.removeEventListener("squeeze",pe),o.removeEventListener("squeezestart",pe),o.removeEventListener("squeezeend",pe),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",q);for(let le=0;le<P.length;le++){const $=L[le];$!==null&&(L[le]=null,P[le].disconnect($))}X=null,Q=null,x.reset();for(const le in v)delete v[le];if(e.setRenderTarget(z),M=null,g=null,S=null,o=null,C=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),N!==null){const le=N.camera;le.fov=N.fov,le.zoom=N.zoom,le.updateProjectionMatrix(),N=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&b&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",pe),o.addEventListener("selectstart",pe),o.addEventListener("selectend",pe),o.addEventListener("squeeze",pe),o.addEventListener("squeezestart",pe),o.addEventListener("squeezeend",pe),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,He=null,De=null;D.depth&&(De=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=D.stencil?vs:Tr,He=D.stencil?lo:tr);const tt={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(tt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Gi(g.textureWidth,g.textureHeight,{format:zi,type:fi,depthTexture:new uo(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Gi(M.framebufferWidth,M.framebufferHeight,{format:zi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(le){for(let $=0;$<le.removed.length;$++){const Re=le.removed[$],He=L.indexOf(Re);He>=0&&(L[He]=null,P[He].disconnect(Re))}for(let $=0;$<le.added.length;$++){const Re=le.added[$];let He=L.indexOf(Re);if(He===-1){for(let tt=0;tt<P.length;tt++)if(tt>=L.length){L.push(Re),He=tt;break}else if(L[tt]===null){L[tt]=Re,He=tt;break}if(He===-1)break}const De=P[He];De&&De.connect(Re)}}const ee=new ue,ne=new ue;function I(le,$,Re){ee.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(Re.matrixWorld);const He=ee.distanceTo(ne),De=$.projectionMatrix.elements,tt=Re.projectionMatrix.elements,Ot=De[14]/(De[10]-1),We=De[14]/(De[10]+1),at=(De[9]+1)/De[5],Mt=(De[9]-1)/De[5],ot=(De[8]-1)/De[0],xt=(tt[8]+1)/tt[0],Vt=Ot*ot,kt=Ot*xt,ut=He/(-ot+xt),Bt=ut*-ot;if($.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Bt),le.translateZ(ut),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),De[10]===-1)le.projectionMatrix.copy($.projectionMatrix),le.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const K=Ot+ut,$t=We+ut,Et=Vt-Bt,U=kt+(He-Bt),y=at*We/$t*K,te=Mt*We/$t*K;le.projectionMatrix.makePerspective(Et,U,y,te,K,$t),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function oe(le,$){$===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices($.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let $=le.near,Re=le.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),re.near=j.near=k.near=$,re.far=j.far=k.far=Re,(X!==re.near||Q!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),X=re.near,Q=re.far),re.layers.mask=le.layers.mask|6,k.layers.mask=re.layers.mask&-5,j.layers.mask=re.layers.mask&-3;const He=le.parent,De=re.cameras;oe(re,He);for(let tt=0;tt<De.length;tt++)oe(De[tt],He);De.length===2?I(re,k,j):re.projectionMatrix.copy(k.projectionMatrix),N===null&&le.isPerspectiveCamera&&(N={camera:le,fov:le.fov,zoom:le.zoom}),Se(le,re,He)};function Se(le,$,Re){Re===null?le.matrix.copy($.matrixWorld):(le.matrix.copy(Re.matrixWorld),le.matrix.invert(),le.matrix.multiply($.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy($.projectionMatrix),le.projectionMatrixInverse.copy($.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Zd*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(le){m=le,g!==null&&(g.fixedFoveation=le),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(re)},this.getCameraTexture=function(le){return v[le]};let Ve=null;function Fe(le,$){if(_=$.getViewerPose(p||u),A=$,_!==null){const Re=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let He=!1;Re.length!==re.cameras.length&&(re.cameras.length=0,He=!0);for(let We=0;We<Re.length;We++){const at=Re[We];let Mt=null;if(M!==null)Mt=M.getViewport(at);else{const xt=S.getViewSubImage(g,at);Mt=xt.viewport,We===0&&(e.setRenderTargetTextures(C,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(C))}let ot=Z[We];ot===void 0&&(ot=new di,ot.layers.enable(We),ot.viewport=new tn,Z[We]=ot),ot.matrix.fromArray(at.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(at.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),We===0&&(re.matrix.copy(ot.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),He===!0&&re.cameras.push(ot)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){S=r.getBinding();const We=S.getDepthInformation(Re[0]);We&&We.isValid&&We.texture&&x.init(We,o.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),S=r.getBinding();for(let We=0;We<Re.length;We++){const at=Re[We].camera;if(at){let Mt=v[at];Mt||(Mt=new Sg,v[at]=Mt);const ot=S.getCameraImage(at);Mt.sourceTexture=ot}}}}for(let Re=0;Re<P.length;Re++){const He=L[Re],De=P[Re];He!==null&&De!==void 0&&De.update(He,$,p||u)}Ve&&Ve(le,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),A=null}const Oe=new Tg;Oe.setAnimationLoop(Fe),this.setAnimationLoop=function(le){Ve=le},this.dispose=function(){}}}const OE=new on,Lg=new ht;Lg.set(-1,0,0,0,1,0,0,0,1);function kE(s,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,yg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,D,z,C){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),S(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&M(x,v,C)):v.isMeshMatcapMaterial?(l(x,v),A(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),b(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?m(x,v,D,z):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ii&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ii&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const D=e.get(v),z=D.envMap,C=D.envMapRotation;z&&(x.envMap.value=z,x.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Lg),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,D,z){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*D,x.scale.value=z*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,D){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ii&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const D=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function BE(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const L=P.program;r.uniformBlockBinding(C,L)}function p(C,P){let L=o[C.id];L===void 0&&(x(C),L=_(C),o[C.id]=L,C.addEventListener("dispose",D));const F=P.program;r.updateUBOMapping(C,F);const E=e.render.frame;l[C.id]!==E&&(g(C),l[C.id]=E)}function _(C){const P=S();C.__bindingPointIndex=P;const L=s.createBuffer(),F=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,F,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],L=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,N=L.length;E<N;E++){const k=L[E];if(Array.isArray(k))for(let j=0,Z=k.length;j<Z;j++)M(k[j],E,j,F);else M(k,E,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,P,L,F){if(b(C,P,L,F)===!0){const E=C.__offset,N=C.value;if(Array.isArray(N)){let k=0;for(let j=0;j<N.length;j++){const Z=N[j],re=v(Z);A(Z,C.__data,k),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(k+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(N,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function A(C,P,L){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,L)}function b(C,P,L,F){const E=C.value,N=P+"_"+L;if(F[N]===void 0)return typeof E=="number"||typeof E=="boolean"?F[N]=E:ArrayBuffer.isView(E)?F[N]=E.slice():F[N]=E.clone(),!0;{const k=F[N];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return F[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function x(C){const P=C.uniforms;let L=0;const F=16;for(let N=0,k=P.length;N<k;N++){const j=Array.isArray(P[N])?P[N]:[P[N]];for(let Z=0,re=j.length;Z<re;Z++){const X=j[Z],Q=Array.isArray(X.value)?X.value:[X.value];for(let pe=0,ie=Q.length;pe<ie;pe++){const q=Q[pe],ee=v(q),ne=L%F,I=ne%ee.boundary,oe=ne+I;L+=I,oe!==0&&F-oe<ee.storage&&(L+=F-oe),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=ee.storage}}}const E=L%F;return E>0&&(L+=F-E),C.__size=L,C.__cache={},this}function v(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",C),P}function D(C){const P=C.target;P.removeEventListener("dispose",D);const L=u.indexOf(P.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function z(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:m,update:p,dispose:z}}const zE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function GE(){return ji===null&&(ji=new b_(zE,16,16,ys,nr),ji.name="DFG_LUT",ji.minFilter=Vn,ji.magFilter=Vn,ji.wrapS=Sr,ji.wrapT=Sr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class VE{constructor(e={}){const{canvas:n=i_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=fi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const b=M,x=new Set([cf,lf,of]),v=new Set([fi,tr,oo,lo,sf,af]),D=new Uint32Array(4),z=new Int32Array(4),C=new ue;let P=null,L=null;const F=[],E=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let j=!1,Z=null,re=null,X=null,Q=null;this._outputColorSpace=Mi;let pe=0,ie=0,q=null,ee=-1,ne=null;const I=new tn,oe=new tn;let Se=null;const Ve=new Pt(0);let Fe=0,Oe=n.width,le=n.height,$=1,Re=null,He=null;const De=new tn(0,0,Oe,le),tt=new tn(0,0,Oe,le);let Ot=!1;const We=new mf;let at=!1,Mt=!1;const ot=new on,xt=new ue,Vt=new tn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Bt(){return q===null?$:1}let K=r;function $t(w,Y){return n.getContext(w,Y)}let Et,U,y,te,de,ve,we,Le,R,B,_e,xe,ye,V,Be,Ne,$e,H,Ae,ge,be,Ie,Me;try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",St,!1),n.addEventListener("webglcontextcreationerror",nn,!1),K===null){const Y="webgl2";if(K=$t(Y,w),K===null)throw $t(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(w){throw n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",St,!1),n.removeEventListener("webglcontextcreationerror",nn,!1),Ut("WebGLRenderer: "+w.message),w}function Ze(){Et=new Gy(K),Et.init(),be=new NE(K,Et),U=new Ly(K,Et,e,be),y=new PE(K,Et),U.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),re=K.createFramebuffer(),X=K.createFramebuffer(),Q=K.createFramebuffer(),te=new Wy(K),de=new gE,ve=new LE(K,Et,y,de,U,be,te),we=new zy(k),Le=new Y_(K),Ie=new by(K,Le),R=new Vy(K,Le,te,Ie),B=new Yy(K,R,Le,Ie,te),H=new Xy(K,U,ve),Be=new Ny(de),_e=new mE(k,we,Et,U,Ie,Be),xe=new kE(k,de),ye=new _E,V=new TE(Et),$e=new Ry(k,we,y,B,A,m),Ne=new bE(k,B,U),Me=new BE(K,te,U,y),Ae=new Py(K,Et,te),ge=new Hy(K,Et,te),te.programs=_e.programs,k.capabilities=U,k.extensions=Et,k.properties=de,k.renderLists=ye,k.shadowMap=Ne,k.state=y,k.info=te}b!==fi&&(N=new jy(b,n.width,n.height,f,o,l));const qe=new FE(k,K);this.xr=qe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(Oe,le,!1))},this.getSize=function(w){return w.set(Oe,le)},this.setSize=function(w,Y,he=!0){if(qe.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=w,le=Y,n.width=Math.floor(w*$),n.height=Math.floor(Y*$),he===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(Oe*$,le*$).floor()},this.setDrawingBufferSize=function(w,Y,he){Oe=w,le=Y,$=he,n.width=Math.floor(w*he),n.height=Math.floor(Y*he),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(b===fi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(De)},this.setViewport=function(w,Y,he,ae){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,Y,he,ae),y.viewport(I.copy(De).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,Y,he,ae){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,Y,he,ae),y.scissor(oe.copy(tt).multiplyScalar($).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){y.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,he=!0){let ae=0;if(w){let se=!1;if(q!==null){const ze=q.texture.format;se=x.has(ze)}if(se){const ze=q.texture.type,Ue=v.has(ze),ke=$e.getClearColor(),Je=$e.getClearAlpha(),nt=ke.r,ft=ke.g,mt=ke.b;Ue?(D[0]=nt,D[1]=ft,D[2]=mt,D[3]=Je,K.clearBufferuiv(K.COLOR,0,D)):(z[0]=nt,z[1]=ft,z[2]=mt,z[3]=Je,K.clearBufferiv(K.COLOR,0,z))}else ae|=K.COLOR_BUFFER_BIT}Y&&(ae|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ae|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&K.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",St,!1),n.removeEventListener("webglcontextcreationerror",nn,!1),$e.dispose(),ye.dispose(),V.dispose(),de.dispose(),we.dispose(),B.dispose(),Ie.dispose(),Me.dispose(),_e.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Es),qe.removeEventListener("sessionend",Ts),Rn.stop()};function wt(w){w.preventDefault(),nm("WebGLRenderer: Context Lost."),j=!0}function St(){nm("WebGLRenderer: Context Restored."),j=!1;const w=te.autoReset,Y=Ne.enabled,he=Ne.autoUpdate,ae=Ne.needsUpdate,se=Ne.type;Ze(),te.autoReset=w,Ne.enabled=Y,Ne.autoUpdate=he,Ne.needsUpdate=ae,Ne.type=se}function nn(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function An(w){const Y=w.target;Y.removeEventListener("dispose",An),mn(Y)}function mn(w){Wt(w),de.remove(w)}function Wt(w){const Y=de.get(w).programs;Y!==void 0&&(Y.forEach(function(he){_e.releaseProgram(he)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,he,ae,se,ze){Y===null&&(Y=kt);const Ue=se.isMesh&&se.matrixWorld.determinantAffine()<0,ke=Tt(w,Y,he,ae,se);y.setMaterial(ae,Ue);let Je=he.index,nt=1;if(ae.wireframe===!0){if(Je=R.getWireframeAttribute(he),Je===void 0)return;nt=2}const ft=he.drawRange,mt=he.attributes.position;let je=ft.start*nt,At=(ft.start+ft.count)*nt;ze!==null&&(je=Math.max(je,ze.start*nt),At=Math.min(At,(ze.start+ze.count)*nt)),Je!==null?(je=Math.max(je,0),At=Math.min(At,Je.count)):mt!=null&&(je=Math.max(je,0),At=Math.min(At,mt.count));const sn=At-je;if(sn<0||sn===1/0)return;Ie.setup(se,ae,ke,he,Je);let Ht,Ft=Ae;if(Je!==null&&(Ht=Le.get(Je),Ft=ge,Ft.setIndex(Ht)),se.isMesh)ae.wireframe===!0?(y.setLineWidth(ae.wireframeLinewidth*Bt()),Ft.setMode(K.LINES)):Ft.setMode(K.TRIANGLES);else if(se.isLine){let gn=ae.linewidth;gn===void 0&&(gn=1),y.setLineWidth(gn*Bt()),se.isLineSegments?Ft.setMode(K.LINES):se.isLineLoop?Ft.setMode(K.LINE_LOOP):Ft.setMode(K.LINE_STRIP)}else se.isPoints?Ft.setMode(K.POINTS):se.isSprite&&Ft.setMode(K.TRIANGLES);if(se.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const gn=se._multiDrawStarts,Xe=se._multiDrawCounts,ln=se._multiDrawCount,Ct=Je?Le.get(Je).bytesPerElement:1,Dn=de.get(ae).currentProgram.getUniforms();for(let gt=0;gt<ln;gt++)Dn.setValue(K,"_gl_DrawID",gt),Ft.render(gn[gt]/Ct,Xe[gt])}else if(se.isInstancedMesh)Ft.renderInstances(je,sn,se.count);else if(he.isInstancedBufferGeometry){const gn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Xe=Math.min(he.instanceCount,gn);Ft.renderInstances(je,sn,Xe)}else Ft.render(je,sn)};function Xn(w,Y,he,ae){Z!==null&&w.isNodeMaterial&&Z.setObject(ae,w),at===!0&&Be.setState(w,he,!1),w.transparent===!0&&w.side===Zi&&w.forceSinglePass===!1?(w.side=ii,w.needsUpdate=!0,qt(w,Y,ae),w.side=_s,w.needsUpdate=!0,qt(w,Y,ae),w.side=Zi):qt(w,Y,ae)}this.compile=function(w,Y,he=null){he===null&&(he=w),Z!==null&&Z.renderStart(w,Y,he),L=V.get(he),L.init(Y),E.push(L),he.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),w!==he&&w.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),L.setupLights(),Z!==null&&Z.updateLights(L.state.lightsArray),Mt=this.localClippingEnabled,at=Be.init(this.clippingPlanes,Mt),at===!0&&Be.setGlobalState(this.clippingPlanes,Y),Z!==null&&Ne.render(L.state.shadowsArray,he,Y);const ae=new Set;return w.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const ze=se.material;if(ze)if(Array.isArray(ze))for(let Ue=0;Ue<ze.length;Ue++){const ke=ze[Ue];Xn(ke,he,Y,se),ae.add(ke)}else Xn(ze,he,Y,se),ae.add(ze)}),L=E.pop(),Z!==null&&Z.renderEnd(),ae},this.compileAsync=function(w,Y,he=null){const ae=this.compile(w,Y,he);return new Promise(se=>{function ze(){if(ae.forEach(function(Ue){const Je=de.get(Ue).currentProgram;(Je===void 0||Je.isReady())&&ae.delete(Ue)}),ae.size===0){se(w);return}setTimeout(ze,10)}Et.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Cn=null;function ga(w){Cn&&Cn(w)}function Es(){Rn.stop()}function Ts(){Rn.start()}const Rn=new Tg;Rn.setAnimationLoop(ga),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){Cn=w,qe.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},qe.addEventListener("sessionstart",Es),qe.addEventListener("sessionend",Ts),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;Z!==null&&Z.renderStart(w,Y);const he=qe.enabled===!0&&qe.isPresenting===!0,ae=N!==null&&(q===null||he)&&N.begin(k,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Y),Y=qe.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,Y,q),L=V.get(w,E.length),L.init(Y),L.state.textureUnits=ve.getTextureUnits(),E.push(L),ot.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),We.setFromProjectionMatrix(ot,Qi,Y.reversedDepth),Mt=this.localClippingEnabled,at=Be.init(this.clippingPlanes,Mt),P=ye.get(w,F.length),P.init(),F.push(P),qe.enabled===!0&&qe.isPresenting===!0){const Ue=k.xr.getDepthSensingMesh();Ue!==null&&rr(Ue,Y,-1/0,k.sortObjects)}rr(w,Y,0,k.sortObjects),P.finish(),Z!==null&&Z.updateLights(L.state.lightsArray),k.sortObjects===!0&&P.sort(Re,He),ut=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,ut&&$e.addToRenderList(P,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Be.beginShadows();const se=L.state.shadowsArray;if(Ne.render(se,w,Y),at===!0&&Be.endShadows(),(ae&&N.hasRenderPass())===!1){const Ue=P.opaque,ke=P.transmissive;if(L.setupLights(),Y.isArrayCamera){const Je=Y.cameras;if(ke.length>0)for(let nt=0,ft=Je.length;nt<ft;nt++){const mt=Je[nt];Yt(Ue,ke,w,mt)}ut&&$e.render(w);for(let nt=0,ft=Je.length;nt<ft;nt++){const mt=Je[nt];pt(P,w,mt,mt.viewport)}}else ke.length>0&&Yt(Ue,ke,w,Y),ut&&$e.render(w),pt(P,w,Y)}q!==null&&ie===0&&(ve.updateMultisampleRenderTarget(q),ve.updateRenderTargetMipmap(q)),ae&&N.end(k),w.isScene===!0&&w.onAfterRender(k,w,Y),Ie.resetDefaultState(),ee=-1,ne=null,E.pop(),E.length>0?(L=E[E.length-1],ve.setTextureUnits(L.state.textureUnits),at===!0&&Be.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,Z!==null&&Z.renderEnd()};function rr(w,Y,he,ae){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(We)){ae&&Vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const Ue=B.update(w),ke=w.material;ke.visible&&P.push(w,Ue,ke,he,Vt.z,null,Y)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(We))){const Ue=B.update(w),ke=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Vt.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Vt.copy(Ue.boundingSphere.center)),Vt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(ke)){const Je=Ue.groups;for(let nt=0,ft=Je.length;nt<ft;nt++){const mt=Je[nt],je=ke[mt.materialIndex];je&&je.visible&&P.push(w,Ue,je,he,Vt.z,mt,Y)}}else ke.visible&&P.push(w,Ue,ke,he,Vt.z,null,Y)}}const ze=w.children;for(let Ue=0,ke=ze.length;Ue<ke;Ue++)rr(ze[Ue],Y,he,ae)}function pt(w,Y,he,ae){const{opaque:se,transmissive:ze,transparent:Ue}=w;L.setupLightsView(he),at===!0&&Be.setGlobalState(k.clippingPlanes,he),ae&&y.viewport(I.copy(ae)),se.length>0&&dn(se,Y,he),ze.length>0&&dn(ze,Y,he),Ue.length>0&&dn(Ue,Y,he),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Yt(w,Y,he,ae){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const je=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Gi(1,1,{generateMipmaps:!0,type:je?nr:fi,minFilter:gs,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const ze=L.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||I;ze.setSize(Ue.z*k.transmissionResolutionScale,Ue.w*k.transmissionResolutionScale);const ke=k.getRenderTarget(),Je=k.getActiveCubeFace(),nt=k.getActiveMipmapLevel();k.setRenderTarget(ze),k.getClearColor(Ve),Fe=k.getClearAlpha(),Fe<1&&k.setClearColor(16777215,.5),k.clear(),ut&&$e.render(he);const ft=k.toneMapping;k.toneMapping=er;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),at===!0&&Be.setGlobalState(k.clippingPlanes,ae),dn(w,he,ae),ve.updateMultisampleRenderTarget(ze),ve.updateRenderTargetMipmap(ze),Et.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let At=0,sn=Y.length;At<sn;At++){const Ht=Y[At],{object:Ft,geometry:gn,material:Xe,group:ln}=Ht;if(Xe.side===Zi&&Ft.layers.test(ae.layers)){const Ct=Xe.side;Xe.side=ii,Xe.needsUpdate=!0,rn(Ft,he,ae,gn,Xe,ln),Xe.side=Ct,Xe.needsUpdate=!0,je=!0}}je===!0&&(ve.updateMultisampleRenderTarget(ze),ve.updateRenderTargetMipmap(ze))}k.setRenderTarget(ke,Je,nt),k.setClearColor(Ve,Fe),mt!==void 0&&(ae.viewport=mt),k.toneMapping=ft}function dn(w,Y,he){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,ze=w.length;se<ze;se++){const Ue=w[se],{object:ke,geometry:Je,group:nt}=Ue;let ft=Ue.material;ft.allowOverride===!0&&ae!==null&&(ft=ae),ke.layers.test(he.layers)&&rn(ke,Y,he,Je,ft,nt)}}function rn(w,Y,he,ae,se,ze){Z!==null&&se.isNodeMaterial&&Z.setObject(w,se),w.onBeforeRender(k,Y,he,ae,se,ze),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),se.onBeforeRender(k,Y,he,ae,w,ze),se.transparent===!0&&se.side===Zi&&se.forceSinglePass===!1?(se.side=ii,se.needsUpdate=!0,k.renderBufferDirect(he,Y,ae,se,w,ze),se.side=_s,se.needsUpdate=!0,k.renderBufferDirect(he,Y,ae,se,w,ze),se.side=Zi):k.renderBufferDirect(he,Y,ae,se,w,ze),w.onAfterRender(k,Y,he,ae,se,ze)}function qt(w,Y,he){Y.isScene!==!0&&(Y=kt);const ae=de.get(w),se=L.state.lights,ze=L.state.shadowsArray,Ue=se.state.version,ke=_e.getParameters(w,se.state,ze,Y,he,L.state.lightProbeGridArray),Je=_e.getProgramCacheKey(ke);let nt=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const ft=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=we.get(w.envMap||ae.environment,ft),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",An),nt=new Map,ae.programs=nt);let mt=nt.get(Je);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===Ue)return Nn(w,ke),mt}else ke.uniforms=_e.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,he,ke),w.onBeforeCompile(ke,k),mt=_e.acquireProgram(ke,Je),nt.set(Je,mt),ae.uniforms=ke.uniforms;const je=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Be.uniform),Nn(w,ke),ae.needsLights=sr(w),ae.lightsStateVersion=Ue,ae.needsLights&&(je.ambientLightColor.value=se.state.ambient,je.lightProbe.value=se.state.probe,je.sunLights.value=se.state.sun,je.sunLightShadows.value=se.state.sunShadow,je.directionalLights.value=se.state.directional,je.directionalLightShadows.value=se.state.directionalShadow,je.spotLights.value=se.state.spot,je.spotLightShadows.value=se.state.spotShadow,je.rectAreaLights.value=se.state.rectArea,je.ltc_1.value=se.state.rectAreaLTC1,je.ltc_2.value=se.state.rectAreaLTC2,je.pointLights.value=se.state.point,je.pointLightShadows.value=se.state.pointShadow,je.hemisphereLights.value=se.state.hemi,je.sunShadowMatrix.value=se.state.sunShadowMatrix,je.sunShadowCascade.value=se.state.sunShadowCascade,je.directionalShadowMatrix.value=se.state.directionalShadowMatrix,je.spotLightMatrix.value=se.state.spotLightMatrix,je.spotLightMap.value=se.state.spotLightMap,je.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=mt,ae.uniformsList=null,mt}function yn(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Vl.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Nn(w,Y){const he=de.get(w);he.outputColorSpace=Y.outputColorSpace,he.batching=Y.batching,he.batchingColor=Y.batchingColor,he.instancing=Y.instancing,he.instancingColor=Y.instancingColor,he.instancingMorph=Y.instancingMorph,he.skinning=Y.skinning,he.morphTargets=Y.morphTargets,he.morphNormals=Y.morphNormals,he.morphColors=Y.morphColors,he.morphTargetsCount=Y.morphTargetsCount,he.numClippingPlanes=Y.numClippingPlanes,he.numIntersection=Y.numClipIntersection,he.vertexAlphas=Y.vertexAlphas,he.vertexTangents=Y.vertexTangents,he.toneMapping=Y.toneMapping}function In(w,Y){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let he=0,ae=w.length;he<ae;he++){const se=w[he];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function Tt(w,Y,he,ae,se){Y.isScene!==!0&&(Y=kt),ve.resetTextureUnits();const ze=Y.fog,Ue=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,ke=q===null?k.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Rt.workingColorSpace,Je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,nt=we.get(ae.envMap||Ue,Je),ft=ae.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,mt=!!he.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!he.morphAttributes.position,At=!!he.morphAttributes.normal,sn=!!he.morphAttributes.color;let Ht=er;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ht=k.toneMapping);const Ft=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,gn=Ft!==void 0?Ft.length:0,Xe=de.get(ae),ln=L.state.lights;if(at===!0&&(Mt===!0||w!==ne)){const zt=w===ne&&ae.id===ee;Be.setState(ae,w,zt)}let Ct=!1;ae.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ln.state.version||Xe.outputColorSpace!==ke||se.isBatchedMesh&&Xe.batching===!1||!se.isBatchedMesh&&Xe.batching===!0||se.isBatchedMesh&&Xe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Xe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||se.isInstancedMesh&&Xe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Xe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Xe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Xe.instancingMorph===!1&&se.morphTexture!==null||Xe.envMap!==nt||ae.fog===!0&&Xe.fog!==ze||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==ft||Xe.vertexTangents!==mt||Xe.morphTargets!==je||Xe.morphNormals!==At||Xe.morphColors!==sn||Xe.toneMapping!==Ht||Xe.morphTargetsCount!==gn||!!Xe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Xe.__version=ae.version);let Dn=Xe.currentProgram;Ct===!0&&(Dn=qt(ae,Y,se),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Dn,Xe));let gt=!1,Ti=!1,ar=!1;const It=Dn.getUniforms(),Zt=Xe.uniforms;if(y.useProgram(Dn.program)&&(gt=!0,Ti=!0,ar=!0),ae.id!==ee&&(ee=ae.id,Ti=!0),Xe.needsLights){const zt=In(L.state.lightProbeGridArray,se);Xe.lightProbeGrid!==zt&&(Xe.lightProbeGrid=zt,Ti=!0)}if(gt||ne!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(K,"projectionMatrix",w.projectionMatrix),It.setValue(K,"viewMatrix",w.matrixWorldInverse);const pi=It.map.cameraPosition;pi!==void 0&&pi.setValue(K,xt.setFromMatrixPosition(w.matrixWorld)),U.logarithmicDepthBuffer&&It.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),ne!==w&&(ne=w,Ti=!0,ar=!0)}if(Xe.needsLights&&(ln.state.sunShadowMap.length>0&&It.setValue(K,"sunShadowMap",ln.state.sunShadowMap,ve),ln.state.directionalShadowMap.length>0&&It.setValue(K,"directionalShadowMap",ln.state.directionalShadowMap,ve),ln.state.spotShadowMap.length>0&&It.setValue(K,"spotShadowMap",ln.state.spotShadowMap,ve),ln.state.pointShadowMap.length>0&&It.setValue(K,"pointShadowMap",ln.state.pointShadowMap,ve)),se.isSkinnedMesh){It.setOptional(K,se,"bindMatrix"),It.setOptional(K,se,"bindMatrixInverse");const zt=se.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),It.setValue(K,"boneTexture",zt.boneTexture,ve))}se.isBatchedMesh&&(It.setOptional(K,se,"batchingTexture"),It.setValue(K,"batchingTexture",se._matricesTexture,ve),It.setOptional(K,se,"batchingIdTexture"),It.setValue(K,"batchingIdTexture",se._indirectTexture,ve),It.setOptional(K,se,"batchingColorTexture"),se._colorsTexture!==null&&It.setValue(K,"batchingColorTexture",se._colorsTexture,ve));const wi=he.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&H.update(se,he,Dn),(Ti||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,It.setValue(K,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(Zt.envMapIntensity.value=Y.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=GE()),Ti){if(It.setValue(K,"toneMappingExposure",k.toneMappingExposure),Xe.needsLights&&Ei(Zt,ar),ze&&ae.fog===!0&&xe.refreshFogUniforms(Zt,ze),xe.refreshMaterialUniforms(Zt,ae,$,le,L.state.transmissionRenderTarget[w.id]),Xe.needsLights&&Xe.lightProbeGrid){const zt=Xe.lightProbeGrid;Zt.probesSH.value=zt.texture,Zt.probesMin.value.copy(zt.boundingBox.min),Zt.probesMax.value.copy(zt.boundingBox.max),Zt.probesResolution.value.copy(zt.resolution)}Vl.upload(K,yn(Xe),Zt,ve)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Vl.upload(K,yn(Xe),Zt,ve),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(K,"center",se.center),It.setValue(K,"modelViewMatrix",se.modelViewMatrix),It.setValue(K,"normalMatrix",se.normalMatrix),It.setValue(K,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const zt=ae.uniformsGroups;for(let pi=0,Ai=zt.length;pi<Ai;pi++){const Ci=zt[pi];Me.update(Ci,Dn),Me.bind(Ci,Dn)}}return Dn}function Ei(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.sunLights.needsUpdate=Y,w.sunLightShadows.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function sr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,Y,he){const ae=de.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),de.get(w.texture).__webglTexture=Y,de.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:he,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const he=de.get(w);he.__webglFramebuffer=Y,he.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,he=0){q=w,pe=Y,ie=he;let ae=null,se=!1,ze=!1;if(w){const ke=de.get(w);if(ke.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(K.FRAMEBUFFER,ke.__webglFramebuffer),I.copy(w.viewport),oe.copy(w.scissor),Se=w.scissorTest,y.viewport(I),y.scissor(oe),y.setScissorTest(Se),ee=-1;return}else if(ke.__webglFramebuffer===void 0)ve.setupRenderTarget(w);else if(ke.__hasExternalTextures)ve.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ft=w.depthTexture;if(ke.__boundDepthTexture!==ft){if(ft!==null&&de.has(ft)&&(w.width!==ft.image.width||w.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);const nt=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?ae=nt[Y][he]:ae=nt[Y],se=!0):w.samples>0&&ve.useMultisampledRTT(w)===!1?ae=de.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?ae=nt[he]:ae=nt,I.copy(w.viewport),oe.copy(w.scissor),Se=w.scissorTest}else I.copy(De).multiplyScalar($).floor(),oe.copy(tt).multiplyScalar($).floor(),Se=Ot;if(he!==0&&(ae=re),y.bindFramebuffer(K.FRAMEBUFFER,ae)&&y.drawBuffers(w,ae),y.viewport(I),y.scissor(oe),y.setScissorTest(Se),se){const ke=de.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,he)}else if(ze){const ke=Y;for(let Je=0;Je<w.textures.length;Je++){const nt=de.get(w.textures[Je]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Je,nt.__webglTexture,he,ke)}}else if(w!==null&&he!==0){const ke=de.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ke.__webglTexture,he)}ee=-1};function Vi(w){const Y=de.get(w);return(Y.__readFormat!==w.format||Y.__readType!==w.type)&&(Y.__readFormat=w.format,Y.__readType=w.type,Y.__formatReadable=U.textureFormatReadable(w.format),Y.__typeReadable=U.textureTypeReadable(w.type)),Y}this.readRenderTargetPixels=function(w,Y,he,ae,se,ze,Ue,ke=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Je=Je[Ue]),Je){y.bindFramebuffer(K.FRAMEBUFFER,Je);try{const nt=w.textures[ke],ft=nt.format,mt=nt.type;w.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ke);const je=Vi(nt);if(je.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ae&&he>=0&&he<=w.height-se&&K.readPixels(Y,he,ae,se,be.convert(ft),be.convert(mt),ze)}finally{const nt=q!==null?de.get(q).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,he,ae,se,ze,Ue,ke=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Je=Je[Ue]),Je)if(Y>=0&&Y<=w.width-ae&&he>=0&&he<=w.height-se){y.bindFramebuffer(K.FRAMEBUFFER,Je);const nt=w.textures[ke],ft=nt.format,mt=nt.type;w.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ke);const je=Vi(nt);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.bufferData(K.PIXEL_PACK_BUFFER,ze.byteLength,K.STREAM_READ),K.readPixels(Y,he,ae,se,be.convert(ft),be.convert(mt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const sn=q!==null?de.get(q).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,sn);const Ht=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await r_(K,Ht,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,ze),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(At),K.deleteSync(Ht),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,he=0){const ae=Math.pow(2,-he),se=Math.floor(w.image.width*ae),ze=Math.floor(w.image.height*ae),Ue=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;ve.setTexture2D(w,0),K.copyTexSubImage2D(K.TEXTURE_2D,he,0,0,Ue,ke,se,ze),y.unbindTexture()},this.copyTextureToTexture=function(w,Y,he=null,ae=null,se=0,ze=0){let Ue,ke,Je,nt,ft,mt,je,At,sn;const Ht=w.isCompressedTexture?w.mipmaps[ze]:w.image;if(he!==null)Ue=he.max.x-he.min.x,ke=he.max.y-he.min.y,Je=he.isBox3?he.max.z-he.min.z:1,nt=he.min.x,ft=he.min.y,mt=he.isBox3?he.min.z:0;else{const Zt=Math.pow(2,-se);Ue=Math.floor(Ht.width*Zt),ke=Math.floor(Ht.height*Zt),w.isDataArrayTexture?Je=Ht.depth:w.isData3DTexture?Je=Math.floor(Ht.depth*Zt):Je=1,nt=0,ft=0,mt=0}ae!==null?(je=ae.x,At=ae.y,sn=ae.z):(je=0,At=0,sn=0);const Ft=be.convert(Y.format),gn=be.convert(Y.type);let Xe;Y.isData3DTexture?(ve.setTexture3D(Y,0),Xe=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ve.setTexture2DArray(Y,0),Xe=K.TEXTURE_2D_ARRAY):(ve.setTexture2D(Y,0),Xe=K.TEXTURE_2D),y.activeTexture(K.TEXTURE0),y.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const ln=y.getParameter(K.UNPACK_ROW_LENGTH),Ct=y.getParameter(K.UNPACK_IMAGE_HEIGHT),Dn=y.getParameter(K.UNPACK_SKIP_PIXELS),gt=y.getParameter(K.UNPACK_SKIP_ROWS),Ti=y.getParameter(K.UNPACK_SKIP_IMAGES);y.pixelStorei(K.UNPACK_ROW_LENGTH,Ht.width),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ht.height),y.pixelStorei(K.UNPACK_SKIP_PIXELS,nt),y.pixelStorei(K.UNPACK_SKIP_ROWS,ft),y.pixelStorei(K.UNPACK_SKIP_IMAGES,mt);const ar=w.isDataArrayTexture||w.isData3DTexture,It=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Zt=de.get(w),wi=de.get(Y),zt=de.get(Zt.__renderTarget),pi=de.get(wi.__renderTarget);y.bindFramebuffer(K.READ_FRAMEBUFFER,zt.__webglFramebuffer),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ai=0;Ai<Je;Ai++)ar&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,de.get(w).__webglTexture,se,mt+Ai),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,de.get(Y).__webglTexture,ze,sn+Ai)),K.blitFramebuffer(nt,ft,Ue,ke,je,At,Ue,ke,K.DEPTH_BUFFER_BIT,K.NEAREST);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(se!==0||w.isRenderTargetTexture||de.has(w)){const Zt=de.get(w),wi=de.get(Y);y.bindFramebuffer(K.READ_FRAMEBUFFER,X),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let zt=0;zt<Je;zt++)ar?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Zt.__webglTexture,se,mt+zt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Zt.__webglTexture,se),It?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,wi.__webglTexture,ze,sn+zt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,wi.__webglTexture,ze),se!==0?K.blitFramebuffer(nt,ft,Ue,ke,je,At,Ue,ke,K.COLOR_BUFFER_BIT,K.NEAREST):It?K.copyTexSubImage3D(Xe,ze,je,At,sn+zt,nt,ft,Ue,ke):K.copyTexSubImage2D(Xe,ze,je,At,nt,ft,Ue,ke);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else It?w.isDataTexture||w.isData3DTexture?K.texSubImage3D(Xe,ze,je,At,sn,Ue,ke,Je,Ft,gn,Ht.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,ze,je,At,sn,Ue,ke,Je,Ft,Ht.data):K.texSubImage3D(Xe,ze,je,At,sn,Ue,ke,Je,Ft,gn,Ht):w.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ze,je,At,Ue,ke,Ft,gn,Ht.data):w.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ze,je,At,Ht.width,Ht.height,Ft,Ht.data):K.texSubImage2D(K.TEXTURE_2D,ze,je,At,Ue,ke,Ft,gn,Ht);y.pixelStorei(K.UNPACK_ROW_LENGTH,ln),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ct),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Dn),y.pixelStorei(K.UNPACK_SKIP_ROWS,gt),y.pixelStorei(K.UNPACK_SKIP_IMAGES,Ti),ze===0&&Y.generateMipmaps&&K.generateMipmap(Xe),y.unbindTexture()},this.initRenderTarget=function(w){de.get(w).__webglFramebuffer===void 0&&ve.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){pe=0,ie=0,q=null,y.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const jl=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puerto Madero",en:"Obelisk & Puerto Madero"},weatherLabel:{es:"Brisa del Plata",en:"River Plate Breeze"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"São Paulo",en:"São Paulo"},monumentName:{es:"Ponte Octávio Frias de Oliveira",en:"Octávio Frias Cable Bridge"},weatherLabel:{es:"Viento Paulista",en:"Paulista Crosswind"},skyTop:"#041221",skyMid:"#0c2b45",skyBot:"#154c68",winColor:"#fde047",accentColor:"#34d399",weather:"breeze",windStrength:.49,monument:"sealink"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Bruma Dorada de Altura",en:"High-Altitude Golden Haze"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Aguja del Empire State",en:"Empire State Spire"},weatherLabel:{es:"Corriente de Manhattan",en:"Manhattan Canyon Draft"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#60a5fa",weather:"steam",windStrength:.63,monument:"empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",windStrength:.71,monument:"empire"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Nieve Ligera Nocturna",en:"Light Night Snow"},skyTop:"#0b061f",skyMid:"#1d1242",skyBot:"#312168",winColor:"#ddd6fe",accentColor:"#a78bfa",weather:"snow",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben, London Eye y The Shard",en:"Big Ben, London Eye & The Shard"},weatherLabel:{es:"Niebla del Támesis",en:"Thames Dense Fog"},skyTop:"#070b12",skyMid:"#151e2e",skyBot:"#263449",winColor:"#fecaca",accentColor:"#ef4444",weather:"fog",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel Iluminada",en:"Illuminated Eiffel Tower"},weatherLabel:{es:"Ráfagas de Altura",en:"High-Altitude Gusts"},skyTop:"#08091c",skyMid:"#1e1938",skyBot:"#3b2b54",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Viento de la Sierra",en:"Sierra Night Wind"},skyTop:"#160b06",skyMid:"#33180c",skyBot:"#522612",winColor:"#fdba74",accentColor:"#fb923c",weather:"breeze",windStrength:.99,monument:"obelisco"},{index:9,flag:"🇩🇪",name:{es:"Berlín",en:"Berlin"},monumentName:{es:"Torre de TV en Alexanderplatz",en:"Fernsehturm Alexanderplatz"},weatherLabel:{es:"Frente Frío Europeo",en:"Cold European Front"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#22d3ee",weather:"gusts",windStrength:1.06,monument:"cntower"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Corriente del Estrecho",en:"Strait Crosswind"},skyTop:"#060c1f",skyMid:"#182247",skyBot:"#2e386b",winColor:"#fde047",accentColor:"#f43f5e",weather:"gusts",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Pirámides de Giza",en:"Pyramids of Giza"},weatherLabel:{es:"Viento de Arena Nocturno",en:"Desert Sand Wind"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#f97316",weather:"sand",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Corriente Térmica del Golfo",en:"Gulf Thermal Updraft"},skyTop:"#040406",skyMid:"#1c1405",skyBot:"#3b2908",winColor:"#fde047",accentColor:"#f59e0b",weather:"lasers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Rain"},skyTop:"#120621",skyMid:"#2a1045",skyBot:"#461b6e",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Tormenta Tropical",en:"Tropical Storm Gusts"},skyTop:"#110620",skyMid:"#271148",skyBot:"#3f1c6e",winColor:"#fde047",accentColor:"#fb7185",weather:"lightning",windStrength:1.42,monument:"empire"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Reflectores de la Bahía",en:"Bay Laser Searchlights"},skyTop:"#031021",skyMid:"#0a2b4c",skyBot:"#114a75",winColor:"#a5f3fc",accentColor:"#22d3ee",weather:"lasers",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Ráfagas de Tifón",en:"Typhoon Gusts"},skyTop:"#031119",skyMid:"#0a2c3d",skyBot:"#124963",winColor:"#6ee7b7",accentColor:"#10b981",weather:"typhoon",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Viento Eléctrico Neón",en:"Cyberpunk Electric Wind"},skyTop:"#040724",skyMid:"#0f1c59",skyBot:"#1d3587",winColor:"#7dd3fc",accentColor:"#00f5d4",weather:"cyber",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Ópera de Sídney y Harbour Bridge",en:"Sydney Opera House & Harbour Bridge"},weatherLabel:{es:"Vendaval Oceánico",en:"Oceanic Harbor Gale"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Shinjuku Neón y Torre de Tokio",en:"Shinjuku Neon & Tokyo Tower"},weatherLabel:{es:"Tormenta Final en las Alturas",en:"Ultimate High-Altitude Storm"},skyTop:"#10041f",skyMid:"#260b45",skyBot:"#42146e",winColor:"#fda4af",accentColor:"#fb7185",weather:"lightning",windStrength:1.85,monument:"tokyotower"}],ms=[{id:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,gemCost:0,name:{es:"Urbano Callejero",en:"Street Urban"},desc:{es:"Buzo con capucha gris grafito oscuro que flamea con el viento, pantalón cargo negro y botas urbanas.",en:"Dark graphite hoodie fluttering in the wind, black cargo pants and urban boots."},hoodieColor:"#334155",pantsColor:"#0f172a",trimColor:"#94a3b8",shoeColor:"#e2e8f0",glowColor:null,goldTrail:!1},{id:"skin_2",icon:"🏃",unlockLevel:11,unlockCity:3,gemCost:150,name:{es:"Night Runner",en:"Night Runner"},desc:{es:"Rompevientos negro con tiras reflectivas blancas y calzado aerodinámico de alta visibilidad.",en:"Black windbreaker with white reflective strips and high-visibility aerodynamic footwear."},hoodieColor:"#111827",pantsColor:"#090d16",trimColor:"#f8fafc",shoeColor:"#38bdf8",glowColor:"#e2e8f0",goldTrail:!1},{id:"skin_3",icon:"⚡",unlockLevel:21,unlockCity:5,gemCost:300,name:{es:"Infiltrado Táctico",en:"Tactical Infiltrator"},desc:{es:"Campera técnica entallada negro mate con arnés y líneas de neón cian en talones y muñecas.",en:"Matte black fitted tactical jacket with harness and cyan neon lines on heels and wrists."},hoodieColor:"#0f172a",pantsColor:"#060a12",trimColor:"#22d3ee",shoeColor:"#06b6d4",glowColor:"#22d3ee",goldTrail:!1},{id:"skin_4",icon:"🎩",unlockLevel:36,unlockCity:8,gemCost:500,name:{es:"Ilusionista de Altura",en:"High-Wire Illusionist"},desc:{es:"Chaleco sastrero oscuro con detalles púrpura/plata, cinta reactiva al viento y guantes de precisión.",en:"Dark tailored vest with purple/silver accents, wind-reactive headband and precision gloves."},hoodieColor:"#1e1b2e",pantsColor:"#0d0b14",trimColor:"#c084fc",shoeColor:"#e2e8f0",glowColor:"#a855f7",goldTrail:!1},{id:"skin_5",icon:"🥷",unlockLevel:61,unlockCity:13,gemCost:800,name:{es:"Cyber-Shinobi Tokio",en:"Tokyo Cyber-Shinobi"},desc:{es:"Traje técnico oscuro con circuito carmesí luminoso en espalda y botas magnéticas.",en:"Dark technical shinobi suit with glowing crimson spine circuit and magnetic boots."},hoodieColor:"#14111a",pantsColor:"#09070d",trimColor:"#f43f5e",shoeColor:"#fb7185",glowColor:"#f43f5e",goldTrail:!1},{id:"skin_6",icon:"👑",unlockLevel:81,unlockCity:17,gemCost:1200,name:{es:"Leyenda Black & Gold",en:"Black & Gold Legend"},desc:{es:"Traje aerodinámico de fibra de carbono negro profundo con bordes dorados y estela luminosa.",en:"Deep black carbon-fiber aerodynamic suit with bright golden edges and luminous arm trail."},hoodieColor:"#09090b",pantsColor:"#050507",trimColor:"#fde047",shoeColor:"#f59e0b",glowColor:"#fde047",goldTrail:!0}],Kr=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,gemCost:0,name:{es:"Esferas Cromadas",en:"Chrome Spheres"},color:"#a3e635"},{id:"torches",icon:"🔥",mult:3,unlockLevel:6,gemCost:120,name:{es:"Antorchas de Fuego",en:"Fire Torches"},color:"#f97316"},{id:"knives",icon:"🔪",mult:6,unlockLevel:16,gemCost:260,name:{es:"Cuchillos Tácticos",en:"Tactical Knives"},color:"#cbd5e1"},{id:"chainsaws",icon:"🪚",mult:12,unlockLevel:31,gemCost:480,name:{es:"Motosierras",en:"Chainsaws"},color:"#ef4444"},{id:"dynamite",icon:"🧨",mult:25,unlockLevel:56,gemCost:750,name:{es:"Dinamita Activa",en:"Active Dynamite"},color:"#dc2626"},{id:"goldbars",icon:"🪙",mult:50,unlockLevel:81,gemCost:1100,name:{es:"Lingotes 24K",en:"24K Gold Bars"},color:"#fde047"}],HE=[{id:"pole",icon:"⚖️",maxLevel:10,baseCost:140,costScale:1.42,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Vara de Inercia",en:"Inertia Balance Pole"},desc:{es:"Aumenta el momento de inercia rotacional, desacelerando la caída gravitatoria lateral.",en:"Increases rotational moment of inertia, slowing down lateral gravitational tipping."}},{id:"boots",icon:"🥾",maxLevel:10,baseCost:160,costScale:1.45,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Incrementa la adherencia al cable de acero, reduce el empuje del viento y acelera el paso.",en:"Increases grip on the steel cable, dampens wind gusts and speeds up walking pace."}},{id:"gloves",icon:"🧤",maxLevel:10,baseCost:150,costScale:1.42,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Amplía la ventana dorada de captura (catchThreshold) y amortigua el sacudón por fallo.",en:"Widens the golden capture window (catchThreshold) and dampens balance jolts on a miss."}}],WE=HE,XE=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],YE=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],qE=[{id:"bundle_starter",icon:"⚡",coinCost:1500,gems:80,coins:1200,leaguePts:150,popular:!1,tag:"🎁 RECLAMAR",name:{es:"Cofre de Equilibrista",en:"Tightrope Chest"},perks:{es:["+80 💎 Gemas al instante","+150 🏆 Puntos de Liga","Recarga para Gancho Salvavidas"],en:["+80 💎 Instant Gems","+150 🏆 League Points","Grapple Hook Save refill"]}},{id:"bundle_pro",icon:"🔥",coinCost:4500,gems:260,coins:4e3,leaguePts:500,popular:!0,tag:"⭐ POPULAR",unlockProp:"torches",unlockSkin:"skin_2",badge:{es:"RECOMENDADO",en:"RECOMMENDED"},name:{es:"Cofre Maestro del Abismo",en:"Abyss Master Chest"},perks:{es:["+260 💎 Gemas","🔥 Desbloquea Antorchas de Fuego (x3)",'🏃 Desbloquea Aspecto "Night Runner"',"+500 🏆 Puntos de Liga"],en:["+260 💎 Gems","🔥 Unlocks Fire Torches (x3)",'🏃 Unlocks "Night Runner" Skin',"+500 🏆 League Points"]}},{id:"bundle_legend",icon:"👑",coinCost:12e3,gems:800,coins:12e3,leaguePts:1500,popular:!0,tag:"👑 ÉLITE",bootsBonus:5,unlockProp:"chainsaws",unlockSkin:"skin_6",badge:{es:"ÉLITE DE TEMPORADA",en:"SEASON ELITE"},name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+800 💎 Gemas","🥾 Calzado Magnético +5 Niveles","🪚 Desbloquea Motosierras (x12)",'👑 Desbloquea Aspecto "Leyenda Black & Gold"',"+1,500 🏆 Puntos de Liga"],en:["+800 💎 Gems","🥾 Magnetic Footwear +5 Levels","🪚 Unlocks Chainsaws (x12)",'👑 Unlocks "Black & Gold Legend" Skin',"+1,500 🏆 League Points"]}}],qm={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",iosInstallHint:'Para instalar en tu dispositivo: tocá el menú del navegador y seleccioná "Agregar a pantalla de inicio".',leagueBanner:"LIGA DE TEMPORADA",leagueBannerLabel:"🏆 LIGA DE TEMPORADA:",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",leftBtn:"IZQ",rightBtn:"DER",holdBalanceTapJuggle:"EQUILIBRIO / CAPTURA",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",grappleHookTitle:"GANCHO SALVAVIDAS",grappleHookCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Cofres",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",mapBtn:"🗺️ Mapa",skinsBtn:"Aspectos",gearBtn:"🎒 Armería",storeBtn:"🛒 Cofres",leagueBtn:"🏆 Liga",level:"Nivel",levelWord:"Nivel",cityWord:"Ciudad",windLabel:"VIENTO",lossModalHeader:"🚨 ¡PERDISTE EL EJE DE GRAVEDAD EN EL METRO {meter}m DE {city} (NIVEL {level})!",lossModalSub:"Cámara lenta activada ({seconds}s antes de caer al abismo)...",grappleCta:"🪝 DISPARAR GANCHO SALVAVIDAS Y VOLVER AL CABLE (20 💎)",rooftopCleared:"🏁 ¡AZOTEA ALCANZADA!",levelCleared:"¡AZOTEA ALCANZADA!",bossChestTitle:"🎁 ¡COFRE DE JEFE DE CIUDAD DESBLOQUEADO!",nextLevel:"SIGUIENTE NIVEL",nextLevelBtn:"▶️ SIGUIENTE NIVEL",worldMapTitle:"🗺️ CAMPAÑA MUNDIAL — 20 CIUDADES (100 NIVELES)",skinsModalTitle:"🧥 TIENDA DE ASPECTOS URBANOS",skinsModalNote:"Equipá cualquier aspecto desbloqueado conservando el 100% de tus mejoras de Armería RPG.",equipBtn:"EQUIPAR",equippedBadge:"✓ EQUIPADO",unlockWithGems:"Desbloquear ({cost} 💎)",lockedAtLevel:"Nivel {level} o {cost} 💎",armoryTitle:"ARMERÍA RPG DE PRECISIÓN",armorySub:"Mejorá tu equipamiento técnico para dominar las ráfagas y la gravedad",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",gearModalTitle:"🎒 ARMERÍA RPG DE PRECISIÓN (NVL 1–10)",upgradeCoins:"Mejorar ({cost} 🪙)",upgradeGems:"Instantáneo (15 💎)",maxLevelReached:"NIVEL MÁXIMO (10/10)",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos de Gemas y Monedas.",leagueModalDesc:"Sumá Puntos de Liga (LP) superando niveles, encadenando capturas rítmicas perfectas y abriendo Cofres de Jefe de Ciudad.",yourLeaguePoints:"🏆 Tus Puntos de Liga:",claimRewardBtn:"🎁 Reclamar Cofre",claimedBadge:"✓ Reclamado",shopTitle:"TIENDA DE COFRES DE TEMPORADA",shopSub:"Obtené Cofres de Gemas y Monedas para desbloquear Aspectos, Objetos y Ganchos Salvavidas.",storeModalTitle:"🛒 TIENDA DE COFRES Y EQUIPAMIENTO",storeModalSubtitle:"Canjeá tus Monedas ganadas en el cable por Cofres de Temporada, Gemas y Objetos Especiales.",exchangeCoinsBtn:"Canjear por {cost} 🪙",freeDailyGemsBtn:"🎁 Reclamar +25 💎 de Bonificación Diaria",dailyClaimedMsg:"✅ ¡Bonificación acreditada!",lobbySubtitle:"📍 Nivel {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Ciudades (1-100)",lobbyGearSkinsBtn:"🎒 Armería y Skins",lobbyLeagueBtn:"🏆 Liga de Temporada",lobbyPlayCta:"▶️ JUGAR / SALTAR AL CABLE",pauseBtnLabel:"⏸️ PAUSA",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",pauseModalTitle:"⏸️ PARTIDA EN PAUSA",pauseProgressInfo:"📍 {flag} {city} • Nivel {level} ({meter}m / {target}m)",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",resumeGameBtn:"▶️ REANUDAR PARTIDA",restartLevelBtn:"🔄 REINICIAR NIVEL",openGearSkinsFromPauseBtn:"🎒 ABRIR ARMERÍA / CAMBIAR ASPECTO",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",mainMenuShortBtn:"🏠 Menú Principal",retryFromZeroBtn:"🔄 Reintentar desde 0m",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",tabEquipment:"🎒 Armería RPG (1-10)",tabSkins:"🧥 Aspectos (6 Skins)",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",iosInstallHint:'To install on your device: tap the browser menu and select "Add to Home Screen".',leagueBanner:"SEASON LEAGUE",leagueBannerLabel:"🏆 SEASON LEAGUE:",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",leftBtn:"LEFT",rightBtn:"RIGHT",holdBalanceTapJuggle:"BALANCE / CATCH",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",grappleHookTitle:"GRAPPLE HOOK",grappleHookCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"Chests",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",mapBtn:"🗺️ Map",skinsBtn:"Skins",gearBtn:"🎒 Armory",storeBtn:"🛒 Chests",leagueBtn:"🏆 League",level:"Level",levelWord:"Level",cityWord:"City",windLabel:"WIND",lossModalHeader:"🚨 YOU LOST YOUR CENTER OF GRAVITY AT METER {meter}m OF {city} (LEVEL {level})!",lossModalSub:"Slow-motion activated ({seconds}s before falling into the abyss)...",grappleCta:"🪝 FIRE GRAPPLE HOOK SAVE & RETURN TO WIRE (20 💎)",rooftopCleared:"🏁 ROOFTOP REACHED!",levelCleared:"ROOFTOP REACHED!",bossChestTitle:"🎁 CITY BOSS CHEST UNLOCKED!",nextLevel:"NEXT LEVEL",nextLevelBtn:"▶️ NEXT LEVEL",worldMapTitle:"🗺️ WORLD CAMPAIGN — 20 CITIES (100 LEVELS)",skinsModalTitle:"🧥 URBAN SKIN SHOP",skinsModalNote:"Equip any unlocked skin while keeping 100% of your RPG Armory upgrades.",equipBtn:"EQUIP",equippedBadge:"✓ EQUIPPED",unlockWithGems:"Unlock ({cost} 💎)",lockedAtLevel:"Level {level} or {cost} 💎",armoryTitle:"PRECISION RPG ARMORY",armorySub:"Upgrade your technical gear to master wind gusts and gravity",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",gearModalTitle:"🎒 PRECISION RPG ARMORY (LVL 1–10)",upgradeCoins:"Upgrade ({cost} 🪙)",upgradeGems:"Instant (15 💎)",maxLevelReached:"MAX LEVEL (10/10)",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Gem & Coin Chests.",leagueModalDesc:"Earn League Points (LP) by clearing levels, chaining rhythmic catches and unlocking City Boss Chests.",yourLeaguePoints:"🏆 Your League Points:",claimRewardBtn:"🎁 Claim Chest",claimedBadge:"✓ Claimed",shopTitle:"SEASON CHEST SHOP",shopSub:"Claim Gem & Coin Chests to unlock Skins, Juggling Props and Grapple Hook Saves.",storeModalTitle:"🛒 CHEST & GEAR SHOP",storeModalSubtitle:"Exchange Coins earned on the wire for Season Chests, Gems and Special Props.",exchangeCoinsBtn:"Exchange for {cost} 🪙",freeDailyGemsBtn:"🎁 Claim +25 💎 Daily Bonus",dailyClaimedMsg:"✅ Bonus credited!",lobbySubtitle:"📍 Level {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Cities (1-100)",lobbyGearSkinsBtn:"🎒 Armory & Skins",lobbyLeagueBtn:"🏆 Season League",lobbyPlayCta:"▶️ PLAY / STEP ON THE WIRE",pauseBtnLabel:"⏸️ PAUSE",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",pauseModalTitle:"⏸️ GAME PAUSED",pauseProgressInfo:"📍 {flag} {city} • Level {level} ({meter}m / {target}m)",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",resumeGameBtn:"▶️ RESUME GAME",restartLevelBtn:"🔄 RESTART LEVEL",openGearSkinsFromPauseBtn:"🎒 OPEN ARMORY / CHANGE SKIN",backToLobbyBtn:"BACK TO MAIN MENU",mainMenuShortBtn:"🏠 Main Menu",retryFromZeroBtn:"🔄 Retry from 0m",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",tabEquipment:"🎒 RPG Armory (1-10)",tabSkins:"🧥 Skins (6 Outfits)",youLabel:"YOU (Tightrope Walker)"}};for(let s=0;s<jl.length;s++){const e=jl[s];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}const jE=[1,1.2,1.5,2,3,5];for(let s=0;s<ms.length;s++){const e=ms[s];e.bonusMult=e.bonusMult||jE[s]||1,e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.coatColor=e.coatColor||e.hoodieColor}for(let s=0;s<Kr.length;s++){const e=Kr[s];e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function jm(){const s=new Date,e=new Date(s.getFullYear(),s.getMonth()+1,0,23,59,59),n=Math.max(0,e.getTime()-s.getTime()),r=Math.floor(n/(1e3*60*60*24)),o=Math.floor(n/(1e3*60*60)%24),l=Math.floor(n/1e3/60%60),u=Math.floor(n/1e3%60);return{days:r,hours:o,mins:l,secs:u}}function KE(s){return 100+(Math.max(1,Math.min(100,s||1))-1)*6}function dd(s){const e=Math.max(1,Math.min(100,s||1)),n=Math.min(19,Math.max(0,Math.floor((e-1)/5))),r=jl[n],o=(e-1)%5+1,l=KE(e),u=.28+r.windStrength*.42+o*.04,f=1.05+e/100*.85,m=e<=15?2:e<=55?3:4;return{level:e,cityIndex:n,city:r,stageInCity:o,targetMeters:l,targetDistance:l,walkSpeed:4.8+Math.min(2.2,e*.02),gravityFactor:f,windMax:u,windChangeFreq:Math.max(1.8,3.8-e*.018),juggleBaseSpeed:.68+Math.min(.38,e*.0035),windBaseForce:u,gravityInstability:f,defaultObjects:m}}class $E{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0}get enabled(){return!this.muted}set enabled(e){this.muted=!e}playCatch(e=1){this.playPerfect(e)}playLevelWin(){this.playVictory()}playWindGust(){this.playThunder()}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}playPerfect(e=1){if(this.muted||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=520+Math.min(e*35,480);r.type="triangle",r.frequency.setValueAtTime(l,n),r.frequency.exponentialRampToValueAtTime(l*1.5,n+.16),o.gain.setValueAtTime(.15,n),o.gain.exponentialRampToValueAtTime(.001,n+.21),r.connect(o),o.connect(this.ctx.destination),r.start(n),r.stop(n+.22)}playMiss(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(165,e),n.frequency.linearRampToValueAtTime(82,e+.22),r.gain.setValueAtTime(.16,e),r.gain.exponentialRampToValueAtTime(.001,e+.25),n.connect(r),r.connect(this.ctx.destination),n.start(e),n.stop(e+.26),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(60)}playRingPass(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=[660,880,1175];for(let r=0;r<n.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n[r],e+r*.05),l.gain.setValueAtTime(.12,e+r*.05),l.gain.exponentialRampToValueAtTime(.001,e+r*.05+.18),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.05),o.stop(e+r*.05+.19)}}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<480||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,50,25]),this.muted)||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(68,n),r.frequency.exponentialRampToValueAtTime(38,n+.14),o.gain.setValueAtTime(.22,n),o.gain.exponentialRampToValueAtTime(.001,n+.16),r.connect(o),o.connect(this.ctx.destination),r.start(n),r.stop(n+.17)}playThunder(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(92,e),n.frequency.exponentialRampToValueAtTime(28,e+.55),r.gain.setValueAtTime(.13,e),r.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(r),r.connect(this.ctx.destination),n.start(e),n.stop(e+.62)}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([100,50,150]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(420,e),n.frequency.exponentialRampToValueAtTime(75,e+.85),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.9),n.connect(r),r.connect(this.ctx.destination),n.start(e),n.stop(e+.92)}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,70]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(880,e+.28),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.32),n.connect(r),r.connect(this.ctx.destination),n.start(e),n.stop(e+.34)}playStartWire(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(30),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=[330,440,660];for(let r=0;r<n.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n[r],e+r*.055),l.gain.setValueAtTime(.14,e+r*.055),l.gain.exponentialRampToValueAtTime(.001,e+r*.055+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.055),o.stop(e+r*.055+.24)}}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=[523.25,659.25,783.99,1046.5];for(let r=0;r<n.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n[r],e+r*.08),l.gain.setValueAtTime(.15,e+r*.08),l.gain.exponentialRampToValueAtTime(.001,e+r*.08+.34),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.08),o.stop(e+r*.08+.36)}}}const pn=new $E,Ng="NO_MIRES_ABAJO_PLAYSTORE_V3",ZE=.82;function JE(){const s=document.createElement("canvas");s.width=64,s.height=128;const e=s.getContext("2d"),n=e.createLinearGradient(0,0,64,0);n.addColorStop(0,"#334155"),n.addColorStop(.3,"#94a3b8"),n.addColorStop(.5,"#f8fafc"),n.addColorStop(.7,"#64748b"),n.addColorStop(1,"#1e293b"),e.fillStyle=n,e.fillRect(0,0,64,128),e.strokeStyle="#0f172a",e.lineWidth=5;for(let o=-32;o<160;o+=16)e.beginPath(),e.moveTo(0,o),e.lineTo(64,o+24),e.stroke(),e.strokeStyle="rgba(103, 232, 249, 0.7)",e.lineWidth=2,e.beginPath(),e.moveTo(0,o+5),e.lineTo(64,o+29),e.stroke(),e.strokeStyle="#0f172a",e.lineWidth=5;const r=new gf(s);return r.wrapS=Ss,r.wrapT=Ss,r.repeat.set(1,180),r}function QE(){const s=document.createElement("canvas");s.width=128,s.height=256;const e=s.getContext("2d");e.fillStyle="#050b18",e.fillRect(0,0,128,256);const n=8,r=24,o=128/n,l=256/r;for(let f=0;f<r;f++)for(let m=0;m<n;m++){const p=(f*37+m*19)%23;p<8||(p%5===0?e.fillStyle="#00f2fe":p%4===0?e.fillStyle="#fde047":p%3===0?e.fillStyle="#c084fc":e.fillStyle="#e0f2fe",e.fillRect(m*o+3,f*l+2,o-6,l-4))}const u=new gf(s);return u.wrapS=Ss,u.wrapT=Ss,u}function e1(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");return e.fillStyle="#091326",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=10,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.strokeStyle="#4ade80",e.lineWidth=5,e.beginPath(),e.arc(128,128,86,0,Math.PI*2),e.stroke(),e.fillStyle="#fde047",e.font="900 110px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,132),new gf(s)}function t1(s){const e=s.clientWidth||420,n=s.clientHeight||780,r=new S_;r.background=new Pt(330004),r.fog=new hf(463142,.014);const o=new di(58,e/n,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.8,-15);const l=new VE({antialias:!0,powerPreference:"high-performance"});l.setSize(e,n),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=nf,l.toneMappingExposure=1.15,s.innerHTML="",s.appendChild(l.domElement);const u=new V_(9746687,.95);r.add(u);const f=new G_(14870768,1.55);f.position.set(12,48,22),r.add(f);const m=new Mm(62206,3.4,20);m.position.set(0,1.35,0),r.add(m);const p=new Mm(16638023,3.8,24);p.position.set(0,2.5,-.3),r.add(p);const _=400,S=JE(),g=new ki(.045,.045,_,16);g.rotateX(Math.PI/2);const M=new Oi({color:14870768,map:S,metalness:.85,roughness:.2,emissive:62206,emissiveIntensity:.22}),A=new ct(g,M);A.position.set(0,0,-_*.5+12),r.add(A);const b=new ki(.012,.012,_,8);b.rotateX(Math.PI/2);const x=new ui({color:62206,transparent:!0,opacity:.45}),v=new ct(b,x);v.position.set(0,-.048,-_*.5+12),r.add(v);const D=new ni(7.5,60,7),z=new Oi({color:725796,roughness:.7,metalness:.3}),C=new ct(D,z);C.position.set(0,-30.045,3.5),r.add(C);const P=new Gn,L=new ni(9.5,70,9.5),F=new ct(L,z);F.position.set(0,-35.045,0),P.add(F);const E=e1(),N=new fa(7.2,7.2);N.rotateX(-Math.PI/2);const k=new ui({map:E}),j=new ct(N,k);j.position.set(0,.01,0),P.add(j);const Z=new so(3.4,.08,12,36);Z.rotateX(Math.PI/2);const re=new ui({color:4906624}),X=new ct(Z,re);X.position.set(0,.12,0),P.add(X),P.position.set(0,0,-100),r.add(P);const Q=QE(),pe=new Oi({color:16777215,map:Q,emissive:3718648,emissiveMap:Q,emissiveIntensity:.72,roughness:.4,metalness:.5}),ie=[];for(let pt=0;pt<36;pt++){const Yt=pt%2===0,dn=Math.floor(pt/2),rn=6.5+pt%4*1.8,qt=6.5+pt*3%4*1.6,yn=68+pt*11%34,Nn=new ni(rn,yn,qt),In=new ct(Nn,pe),Tt=(Yt?-1:1)*(12.5+pt%3*4.2),Ei=8-dn*15,sr=-60+yn*.5;if(In.position.set(Tt,sr,Ei),pt%3===0){const Vi=pt%2===0?62206:14239471,w=new fa(.15,7.5,1),Y=new ui({color:Vi,side:Zi}),he=new ct(w,Y);he.position.set(Yt?rn*.5+.08:-rn*.5-.08,yn*.26,0),he.rotation.y=Math.PI/2,In.add(he)}r.add(In),ie.push(In)}const q=[],ee=new ni(.45,.2,1.8),ne=new ui({color:15680580}),I=new ui({color:16498468});for(let pt=0;pt<24;pt++){const Yt=pt%2===0,dn=new ct(ee,Yt?ne:I),rn=(pt%4-1.5)*2.2;dn.position.set(rn,-36,-pt*11),r.add(dn),q.push({mesh:dn,speed:(Yt?-1:1)*(14+pt%4*3.5)})}const oe=new Gn;oe.position.set(0,0,0),r.add(oe);const Se=new Oi({color:1120295,roughness:.42,metalness:.35}),Ve=new Oi({color:1976635,roughness:.36,metalness:.45}),Fe=new Oi({color:13010532,roughness:.55,metalness:.08}),Oe=new Oi({color:986389,roughness:.7,metalness:.1}),le=new Oi({color:62206,emissive:62206,emissiveIntensity:1.5,roughness:.2}),$=new Oi({color:16007006,emissive:62206,emissiveIntensity:1.4,roughness:.2}),Re=pt=>{const Yt=new Gn;Yt.position.set(pt?-.085:.085,.86,0);const dn=new oa(.068,.32,8,16),rn=new ct(dn,Se);rn.position.set(pt?.02:-.02,-.19,0),rn.rotation.z=pt?.06:-.06,Yt.add(rn);const qt=new Gn;qt.position.set(pt?.04:-.04,-.4,0),Yt.add(qt);const yn=new ni(.11,.09,.12),Nn=new ct(yn,Ve);Nn.position.set(0,0,-.01),qt.add(Nn);const In=new oa(.055,.32,8,16),Tt=new ct(In,Se);Tt.position.set(pt?.025:-.025,-.2,0),Tt.rotation.z=pt?.05:-.05,qt.add(Tt);const Ei=new Gn;Ei.position.set(pt?.04:-.04,-.42,0),qt.add(Ei);const sr=new ni(.105,.075,.22),Vi=new ct(sr,Ve);Vi.position.set(0,.02,-.02),Ei.add(Vi);const w=new ni(.115,.026,.24),Y=new ct(w,$);return Y.position.set(0,-.025,-.02),Ei.add(Y),{hipGroup:Yt,kneeGroup:qt,bootGroup:Ei}},He=Re(!0),De=Re(!1);oe.add(He.hipGroup),oe.add(De.hipGroup);const tt=new Gn;oe.add(tt);const Ot=new ki(.145,.135,.16,16);Ot.scale(1.18,1,.74);const We=new ct(Ot,Se);We.position.set(0,.88,0),tt.add(We);const at=new ki(.15,.15,.04,16);at.scale(1.2,1,.76);const Mt=new ct(at,le);Mt.position.set(0,.95,0),tt.add(Mt);const ot=new ki(.22,.142,.48,18);ot.scale(1.22,1,.68);const xt=new ct(ot,Ve);xt.position.set(0,1.2,0),tt.add(xt);const Vt=new ni(.045,.42,.03),kt=new ct(Vt,le);kt.position.set(0,1.21,.148),tt.add(kt);const ut=new ki(.085,.085,.025,6);ut.rotateX(Math.PI/2);const Bt=new ct(ut,Se);Bt.position.set(0,1.26,.152),tt.add(Bt);const K=new Ki(.082,16,16),$t=new ct(K,Ve);$t.position.set(-.26,1.39,0),tt.add($t);const Et=new ct(K,Ve);Et.position.set(.26,1.39,0),tt.add(Et);const U=new ki(.055,.065,.1,14),y=new ct(U,Fe);y.position.set(0,1.48,0),tt.add(y);const te=new Gn;te.position.set(0,1.62,0),tt.add(te);const de=new Ki(.122,24,24),ve=new ct(de,Fe);te.add(ve);const we=new Ki(.128,24,24,0,Math.PI*2,0,Math.PI*.68),Le=new ct(we,Oe);Le.position.set(0,.01,.01),Le.rotation.x=.22,te.add(Le);const R=new so(.124,.016,10,28);R.rotateX(Math.PI/2);const B=new ct(R,le);B.position.set(0,.025,0),te.add(B);const _e=new Gn;_e.position.set(0,.02,.125),te.add(_e);const xe=new ni(.28,.028,.01);xe.translate(.14,0,0);const ye=new ct(xe,le);_e.add(ye);const V=pt=>{const Yt=new Gn;Yt.position.set(pt?-.26:.26,1.38,0);const dn=new oa(.052,.22,8,14),rn=new ct(dn,Ve);rn.position.set(pt?-.08:.08,-.11,-.02),rn.rotation.z=pt?-.58:.58,Yt.add(rn);const qt=new Gn;qt.position.set(pt?-.16:.16,-.21,-.04),Yt.add(qt);const yn=new oa(.044,.21,8,14),Nn=new ct(yn,Se);Nn.position.set(pt?-.07:.07,-.04,-.09),Nn.rotation.x=.72,Nn.rotation.z=pt?-.45:.45,qt.add(Nn);const In=new Ki(.052,14,14),Tt=new ct(In,le);return Tt.position.set(pt?-.14:.14,-.08,-.18),qt.add(Tt),{shoulderGroup:Yt,elbowGroup:qt,handMesh:Tt}},Be=V(!0),Ne=V(!1);tt.add(Be.shoulderGroup),tt.add(Ne.shoulderGroup);const $e=new Gn;$e.position.set(0,1.12,-.2),tt.add($e);const H=3.8,Ae=new ki(.022,.022,H,16);Ae.rotateZ(Math.PI/2);const ge=new Oi({color:16777215,emissive:62206,emissiveIntensity:2.2,roughness:.1}),be=new ct(Ae,ge);$e.add(be);const Ie=new ki(.055,.055,H,12);Ie.rotateZ(Math.PI/2);const Me=new ui({color:62206,transparent:!0,opacity:.28}),Ze=new ct(Ie,Me);$e.add(Ze);const qe=new Ki(.058,14,14),wt=new ct(qe,ge);wt.position.set(-H*.5,0,0),$e.add(wt);const St=new ct(qe,ge);St.position.set(H*.5,0,0),$e.add(St);const nn=new so(.15,.016,12,28),An=new ui({color:62206,transparent:!0,opacity:.65}),mn=new ui({color:62206,transparent:!0,opacity:.65}),Wt=new ct(nn,An),Xn=new ct(nn,mn);r.add(Wt),r.add(Xn);const Cn=new Ki(.125,24,24),ga=new Ki(.22,16,16),Es=new Ki(.065,12,12),Ts=new Oi({color:16707722,emissive:16096779,emissiveIntensity:2,roughness:.12,metalness:.6}),Rn=new ui({color:16638023,transparent:!0,opacity:.35}),rr=[];for(let pt=0;pt<4;pt++){const Yt=new Gn,dn=new ct(Cn,Ts),rn=new ct(ga,Rn);Yt.add(dn),Yt.add(rn),r.add(Yt);const qt=[];for(let yn=0;yn<5;yn++){const Nn=new ui({color:16638023,transparent:!0,opacity:.55-yn*.1}),In=new ct(Es,Nn),Tt=1-yn*.15;In.scale.set(Tt,Tt,Tt),r.add(In),qt.push(In)}rr.push({group:Yt,core:dn,halo:rn,trails:qt})}return{scene:r,camera:o,renderer:l,cyanPoleLight:m,goldOrbLight:p,cableTex:S,arrivalGroup:P,beaconRingMesh:X,skyscrapers:ie,carMeshes:q,acrobatGroup:oe,upperBodyGroup:tt,leftLeg:He,rightLeg:De,leftArm:Be,rightArm:Ne,poleGroup:$e,ribbonPivot:_e,spineStripMesh:kt,beltMesh:Mt,headbandMesh:B,leftReceiverRing:Wt,rightReceiverRing:Xn,leftReceiverMat:An,rightReceiverMat:mn,orbMeshes:rr,worldLeftHand:new ue,worldRightHand:new ue}}function n1(s,e,n){if(!s)return;const r=-e.distance;s.acrobatGroup.position.set(0,0,r),s.acrobatGroup.rotation.z=-e.angle;const o=e.gameStatus==="PLAYING",l=o?Math.sin(e.stepPhase):0,u=o?Math.cos(e.stepPhase):0,f=o?Math.abs(l)*.035:Math.sin(e.time*2.8)*.012;s.upperBodyGroup.position.y=f,s.leftLeg.hipGroup.rotation.x=l*.34,s.leftLeg.kneeGroup.rotation.x=-Math.max(0,u)*.42,s.rightLeg.hipGroup.rotation.x=-l*.34,s.rightLeg.kneeGroup.rotation.x=-Math.max(0,-u)*.42;const m=e.leftPressed?.22:0,p=e.rightPressed?.22:0;s.leftArm.elbowGroup.rotation.x=m,s.rightArm.elbowGroup.rotation.x=p,s.poleGroup.rotation.z=(p-m)*.35-e.angle*.25,s.ribbonPivot.rotation.y=-Math.PI*.5+(e.windCurrent||0)*.85+Math.sin(e.time*9)*.18,s.ribbonPivot.rotation.z=Math.cos(e.time*11)*.14,s.arrivalGroup.position.set(0,0,-e.targetDistance-3.5);const _=1+Math.sin(e.time*5)*.08;s.beaconRingMesh.scale.set(_,_,1);for(let z=0;z<s.skyscrapers.length;z++){const C=s.skyscrapers[z];C.position.z>r+18?C.position.z-=270:C.position.z<r-252&&(C.position.z+=270)}for(let z=0;z<s.carMeshes.length;z++){const C=s.carMeshes[z];C.mesh.position.z+=C.speed*n,C.mesh.position.z>r+25?C.mesh.position.z=r-230:C.mesh.position.z<r-235&&(C.mesh.position.z=r+20)}s.acrobatGroup.updateMatrixWorld(!0),s.leftArm.handMesh.getWorldPosition(s.worldLeftHand),s.rightArm.handMesh.getWorldPosition(s.worldRightHand);const S=s.worldLeftHand,g=s.worldRightHand;let M=!1,A=!1;for(let z=0;z<e.jugglePool.length;z++){const C=e.jugglePool[z];C.active&&C.phase>=e.catchThreshold&&(C.targetHand==="L"&&(M=!0),C.targetHand==="R"&&(A=!0))}s.leftReceiverRing.position.copy(S),s.rightReceiverRing.position.copy(g),s.leftReceiverMat.color.setHex(M?16638023:62206),s.rightReceiverMat.color.setHex(A?16638023:62206);const b=M?1.35:.85,x=A?1.35:.85;s.leftReceiverRing.scale.set(b,b,b),s.rightReceiverRing.scale.set(x,x,x);for(let z=0;z<4;z++){const C=e.jugglePool[z],P=s.orbMeshes[z];if(!C.active){P.group.visible=!1;for(let Q=0;Q<P.trails.length;Q++)P.trails[Q].visible=!1;continue}P.group.visible=!0;const L=C.targetHand==="R"?S:g,F=C.targetHand==="R"?g:S,E=C.phase,N=1.45+z%2*.22,k=L.x+(F.x-L.x)*E,j=L.y+(F.y-L.y)*E+4*N*E*(1-E),Z=L.z+(F.z-L.z)*E-.12*Math.sin(E*Math.PI);P.group.position.set(k,j,Z);const X=E>=e.catchThreshold?1.25:1;P.group.scale.set(X,X,X);for(let Q=0;Q<P.trails.length;Q++){const pe=P.trails[Q],ie=E-(Q+1)*.045;if(ie<=.02){pe.visible=!1;continue}pe.visible=!0;const q=L.x+(F.x-L.x)*ie,ee=L.y+(F.y-L.y)*ie+4*N*ie*(1-ie),ne=L.z+(F.z-L.z)*ie-.12*Math.sin(ie*Math.PI);pe.position.set(q,ee,ne)}}s.cyanPoleLight.position.set(0,1.35,r),s.goldOrbLight.position.set(0,2.45,r-.25);const v=e.shake>.05?Math.sin(e.time*42)*e.shake*.04:0,D=e.shake>.05?Math.cos(e.time*36)*e.shake*.04:0;s.camera.position.set(v+Math.sin(e.angle)*.35,3.4+D,r+6.2),s.camera.lookAt(0,1.8,r-15),s.camera.rotation.z=-e.cameraRoll*.45,s.renderer.render(s.scene,s.camera)}function i1(){try{const s=localStorage.getItem(Ng);return s?JSON.parse(s):null}catch{return null}}function r1(){const s=[];for(let e=0;e<4;e++)s.push({id:e,active:e===0,phase:e*.25,speed:.72,targetHand:e%2===0?"R":"L",arcHeight:132,spinAngle:0});return{jugglePool:s}}function s1(){var ve,we,Le;const s=i1(),[e,n]=vt.useState((s==null?void 0:s.lang)||"es"),[r,o]=vt.useState((s==null?void 0:s.soundOn)??!0),[l,u]=vt.useState((s==null?void 0:s.currentLevel)||1),[f,m]=vt.useState((s==null?void 0:s.maxUnlockedLevel)||1),[p,_]=vt.useState((s==null?void 0:s.coins)??450),[S,g]=vt.useState((s==null?void 0:s.gems)??80),[M,A]=vt.useState((s==null?void 0:s.leaguePoints)??1250),[b,x]=vt.useState((s==null?void 0:s.gearLevels)||{pole:1,boots:1,gloves:1}),[v,D]=vt.useState((s==null?void 0:s.unlockedSkins)||["skin_1"]),[z,C]=vt.useState((s==null?void 0:s.equippedSkin)||"skin_1"),[P,L]=vt.useState((s==null?void 0:s.unlockedProps)||["balls"]),[F,E]=vt.useState((s==null?void 0:s.equippedProp)||"balls"),[N,k]=vt.useState("home"),[j,Z]=vt.useState(!0),[re,X]=vt.useState("./icon.jpg"),[Q,pe]=vt.useState("LOBBY"),[ie,q]=vt.useState(null),[ee,ne]=vt.useState(""),[I,oe]=vt.useState(()=>jm()),[Se,Ve]=vt.useState({angleDeg:0,distance:0,targetDistance:100,juggleCount:1,multiplier:1,combo:0,windCurrent:0,fallSlowMo:!1,slowMoTimer:3.2,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1}),Fe=vt.useRef(null),Oe=vt.useRef(null),le=vt.useRef(null),$=qm[e]||qm.es,Re=dd(l),He=Re.city,De=ms.find(R=>R.id===z)||ms[0],tt=Kr.find(R=>R.id===F)||Kr[0];vt.useEffect(()=>{const R=setTimeout(()=>{Z(!1)},550);return()=>clearTimeout(R)},[]);const Ot=vt.useCallback(()=>{X(R=>R==="./icon.jpg"?"/icon.jpg":R==="/icon.jpg"?"./icon.png":R==="./icon.png"?"/icon.png":R)},[]),We=vt.useRef(null);if(!We.current){const R=r1(),B=dd((s==null?void 0:s.currentLevel)||1),_e=ms.find(ye=>ye.id===((s==null?void 0:s.equippedSkin)||"skin_1"))||ms[0],xe=Kr.find(ye=>ye.id===((s==null?void 0:s.equippedProp)||"balls"))||Kr[0];We.current={lastTimestamp:0,time:0,hudSyncTimer:0,gameStatus:"LOBBY",paused:!1,cfg:B,level:B.level,cityIndex:B.cityIndex,targetDistance:B.targetDistance,distance:0,walkSpeed:B.walkSpeed,gravityFactor:B.gravityFactor,windMax:B.windMax,windChangeFreq:B.windChangeFreq,windCurrent:.15,windTarget:.25,windTimer:0,angle:.03,angleRad:.03,angleDeg:.03*180/Math.PI,cameraRoll:0,angularVelocity:0,stepPhase:0,juggleCount:1,combo:0,maxCombo:0,catchesRun:0,coinsEarnedRun:0,lpEarnedRun:0,leftPressed:!1,rightPressed:!1,fallSlowMo:!1,slowMoTimer:3.2,shake:0,grappleFlash:0,poleLevel:((ve=s==null?void 0:s.gearLevels)==null?void 0:ve.pole)||1,bootsLevel:((we=s==null?void 0:s.gearLevels)==null?void 0:we.boots)||1,glovesLevel:((Le=s==null?void 0:s.gearLevels)==null?void 0:Le.gloves)||1,catchThreshold:.76,skinObj:_e,propObj:xe,...R}}vt.useEffect(()=>{try{localStorage.setItem(Ng,JSON.stringify({lang:e,soundOn:r,currentLevel:l,maxUnlockedLevel:f,coins:p,gems:S,leaguePoints:M,gearLevels:b,unlockedSkins:v,equippedSkin:z,unlockedProps:P,equippedProp:F}))}catch{}},[e,r,l,f,p,S,M,b,v,z,P,F]),vt.useEffect(()=>{pn.enabled=r},[r]),vt.useEffect(()=>{const R=We.current;R.poleLevel=b.pole||1,R.bootsLevel=b.boots||1,R.glovesLevel=b.gloves||1,R.catchThreshold=Math.max(.64,.78-(R.glovesLevel-1)*.015),R.skinObj=De,R.propObj=tt},[b,He,De,tt]),vt.useEffect(()=>{const R=setInterval(()=>{oe(jm())},1e3);return()=>clearInterval(R)},[]);const at=vt.useCallback((R,B="LOBBY")=>{const _e=dd(R),xe=We.current;xe.cfg=_e,xe.level=_e.level,xe.cityIndex=_e.cityIndex,xe.targetDistance=_e.targetDistance,xe.distance=0,xe.walkSpeed=_e.walkSpeed,xe.gravityFactor=_e.gravityFactor,xe.windMax=_e.windMax,xe.windChangeFreq=_e.windChangeFreq,xe.windCurrent=.15,xe.windTarget=.35,xe.windTimer=0,xe.angle=.03,xe.angleRad=.03,xe.angleDeg=.03*180/Math.PI,xe.cameraRoll=0,xe.angularVelocity=0,xe.stepPhase=0,xe.juggleCount=1,xe.combo=0,xe.maxCombo=0,xe.catchesRun=0,xe.coinsEarnedRun=0,xe.lpEarnedRun=0,xe.leftPressed=!1,xe.rightPressed=!1,xe.fallSlowMo=!1,xe.slowMoTimer=3.2,xe.shake=0,xe.grappleFlash=0,xe.gameStatus=B,xe.paused=!1;for(let ye=0;ye<xe.jugglePool.length;ye++){const V=xe.jugglePool[ye];V.active=ye===0,V.phase=ye*.26,V.speed=_e.juggleBaseSpeed,V.targetHand=ye%2===0?"R":"L"}pe(B),q(null),Ve({angleDeg:xe.angleDeg,distance:0,targetDistance:_e.targetDistance,juggleCount:1,multiplier:tt.mult*De.bonusMult,combo:0,windCurrent:xe.windCurrent,fallSlowMo:!1,slowMoTimer:3.2,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1})},[tt.mult,De.bonusMult]),Mt=vt.useCallback(()=>{pn.init(),pn.playCatch(2),at(l,"PLAYING")},[l,at]),ot=vt.useCallback(()=>{const R=We.current;if(R.gameStatus!=="PLAYING"||R.juggleCount>=4)return;const B=R.juggleCount,_e=R.jugglePool[B];_e.active=!0,_e.phase=.08,_e.targetHand=B%2===0?"R":"L",R.juggleCount+=1,pn.playCatch(R.juggleCount+2)},[]),xt=vt.useCallback(R=>{var ye,V;const B=We.current;if(B.gameStatus!=="PLAYING"||B.paused||B.fallSlowMo)return!1;let _e=!1;const xe=B.catchThreshold;for(let Be=0;Be<B.jugglePool.length;Be++){const Ne=B.jugglePool[Be];if(Ne.active&&Ne.targetHand===R&&Ne.phase>=xe){const $e=Ne.phase>=.88;Ne.phase=0,Ne.targetHand=R==="L"?"R":"L",B.combo+=1,B.combo>B.maxCombo&&(B.maxCombo=B.combo),B.catchesRun+=1,B.angularVelocity*=.72,B.angle*=.88,B.angleRad=B.angle,B.angleDeg=B.angle*180/Math.PI;const H=B.juggleCount*(((ye=B.propObj)==null?void 0:ye.mult)||1)*(((V=B.skinObj)==null?void 0:V.bonusMult)||1),Ae=Math.max(1,Math.round(($e?6:3)*H)),ge=Math.max(1,Math.round(($e?4:2)*B.juggleCount));B.coinsEarnedRun+=Ae,B.lpEarnedRun+=ge,_(be=>be+Ae),A(be=>be+ge),B.catchesRun%8===0&&g(be=>be+1),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate($e?18:10),pn.playCatch(B.combo),_e=!0;break}}return _e},[]),Vt=vt.useCallback(()=>{const R=We.current;if(R.gameStatus==="PLAYING"){if(S<20){q("SHOP"),R.paused=!0;return}g(B=>B-20),R.angle=0,R.angleRad=0,R.angleDeg=0,R.angularVelocity=0,R.fallSlowMo=!1,R.slowMoTimer=3.2,R.grappleFlash=1,R.shake=0,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([25,40,25]),pn.playGrapple()}},[S]),kt=vt.useCallback((R,B)=>{B&&B.cancelable&&B.preventDefault(),pn.init();const _e=We.current;R==="L"?(_e.leftPressed=!0,xt("L")):(_e.rightPressed=!0,xt("R"))},[xt]),ut=vt.useCallback((R,B)=>{B&&B.cancelable&&B.preventDefault();const _e=We.current;R==="L"?_e.leftPressed=!1:_e.rightPressed=!1},[]);vt.useEffect(()=>{const R=_e=>{if(_e.repeat)return;const xe=_e.key.toLowerCase(),ye=We.current;xe==="arrowleft"||xe==="a"?(ye.leftPressed=!0,xt("L")):xe==="arrowright"||xe==="d"?(ye.rightPressed=!0,xt("R")):xe==="w"||xe==="arrowup"?ot():xe===" "?(_e.preventDefault(),ye.gameStatus==="LOBBY"?Mt():ye.gameStatus==="PLAYING"&&Vt()):(xe==="escape"||xe==="p")&&ye.gameStatus==="PLAYING"&&(ye.paused=!ye.paused,q(ye.paused?"PAUSE":null))},B=_e=>{const xe=_e.key.toLowerCase(),ye=We.current;xe==="arrowleft"||xe==="a"?ye.leftPressed=!1:(xe==="arrowright"||xe==="d")&&(ye.rightPressed=!1)};return window.addEventListener("keydown",R),window.addEventListener("keyup",B),()=>{window.removeEventListener("keydown",R),window.removeEventListener("keyup",B)}},[xt,ot,Vt,Mt]),vt.useEffect(()=>{if(!Fe.current)return;const R=t1(Fe.current);Oe.current=R;let B=null;const _e=()=>{if(!Fe.current||!Oe.current)return;const ye=Fe.current.clientWidth||420,V=Fe.current.clientHeight||780;Oe.current.camera.aspect=ye/V,Oe.current.camera.updateProjectionMatrix(),Oe.current.renderer.setSize(ye,V)};window.addEventListener("resize",_e);const xe=ye=>{var $e,H;const V=We.current,Be=(ye-V.lastTimestamp)/1e3,Ne=Be>0&&Be<.2?Math.min(Be,.05):.0166;if(V.lastTimestamp=ye,!V.paused){if(V.time+=Ne,V.cameraRoll+=(V.angle*.22-V.cameraRoll)*Math.min(1,Ne*8),V.grappleFlash>0&&(V.grappleFlash=Math.max(0,V.grappleFlash-Ne*2.4)),V.shake>0&&(V.shake=Math.max(0,V.shake-Ne*4.5)),V.gameStatus==="PLAYING")if(V.fallSlowMo)V.slowMoTimer-=Ne,V.angle+=(V.angle>=0?1:-1)*.08*Ne,V.angleRad=V.angle,V.angleDeg=V.angle*180/Math.PI,V.slowMoTimer<=0&&(V.fallSlowMo=!1,V.gameStatus="GAMEOVER",pn.playFall(),pe("GAMEOVER"));else{if(V.windTimer+=Ne,V.windTimer>=V.windChangeFreq){V.windTimer=0;const mn=Math.sin(V.time*3.7)>=0?1:-1;V.windTarget=mn*(.18+Math.abs(Math.cos(V.time*2.3))*V.windMax*.45),Math.abs(V.windTarget)>.75&&(V.shake=2,pn.playWindGust())}V.windCurrent+=(V.windTarget-V.windCurrent)*Math.min(1,Ne*1.8);const Ae=V.cfg,ge=1-(V.poleLevel-1)*.048,be=1-(V.bootsLevel-1)*.052,Ie=4.35+(V.poleLevel-1)*.14,Me=1+(V.bootsLevel-1)*.025,Ze=V.walkSpeed*Me*Ne;V.distance=Math.min(V.targetDistance,V.distance+Ze),V.stepPhase+=Ne*7.2*Me;const qe=Math.cos(V.stepPhase)*.24*be,St=((V.rightPressed?1:0)-(V.leftPressed?1:0))*Ie,nn=Math.sin(V.angle)*Ae.gravityInstability*2.55*ge,An=V.windCurrent*be*1.65;V.angularVelocity+=(nn+An+qe+St)*Ne,V.angularVelocity*=Math.pow(.92,Ne*60),V.angle+=V.angularVelocity*Ne,V.angleRad=V.angle,V.angleDeg=V.angle*180/Math.PI;for(let mn=0;mn<V.jugglePool.length;mn++){const Wt=V.jugglePool[mn];if(Wt.active){if(Wt.phase+=Wt.speed*Ne,Wt.spinAngle=Wt.phase*Math.PI*4,Wt.phase>=V.catchThreshold&&(Wt.targetHand==="L"&&V.leftPressed||Wt.targetHand==="R"&&V.rightPressed)){xt(Wt.targetHand);continue}if(Wt.phase>=1){Wt.phase=0;const Xn=Wt.targetHand==="L"?-1:1;Wt.targetHand=Wt.targetHand==="L"?"R":"L",V.combo=0,V.angularVelocity+=Xn*.68*ge,V.shake=2.8}}}if(Math.abs(V.angle)>=ZE&&(V.fallSlowMo=!0,V.slowMoTimer=3.2,V.shake=4,pn.playFall()),V.distance>=V.targetDistance){V.gameStatus="VICTORY";const mn=120+V.level*25,Wt=V.level%5===0?18:6,Xn=45+V.level*8;V.coinsEarnedRun+=mn,V.lpEarnedRun+=Xn,_(Cn=>Cn+mn),g(Cn=>Cn+Wt),A(Cn=>Cn+Xn),m(Cn=>Math.max(Cn,Math.min(100,V.level+1))),pn.playLevelWin(),pe("VICTORY")}}else if(V.gameStatus==="LOBBY"){V.angle=Math.sin(V.time*1.5)*.035,V.angleRad=V.angle,V.angleDeg=V.angle*180/Math.PI,V.windCurrent=Math.sin(V.time*.8)*.35;for(let Ae=0;Ae<V.jugglePool.length;Ae++){const ge=V.jugglePool[Ae];ge.active&&(ge.phase=(ge.phase+Ne*.65)%1)}}}if(le.current){const ge=Math.max(-47,Math.min(47,V.angleDeg||0))/47*90;le.current.style.transform=`translateX(${ge.toFixed(1)}px)`}if(n1(Oe.current,V,Ne),V.hudSyncTimer+=Ne,V.hudSyncTimer>=.08){V.hudSyncTimer=0;let Ae=!1,ge=!1;for(let Ie=0;Ie<V.jugglePool.length;Ie++){const Me=V.jugglePool[Ie];Me.active&&Me.phase>=V.catchThreshold&&(Me.targetHand==="L"&&(Ae=!0),Me.targetHand==="R"&&(ge=!0))}const be=V.juggleCount*((($e=V.propObj)==null?void 0:$e.mult)||1)*(((H=V.skinObj)==null?void 0:H.bonusMult)||1);Ve({angleDeg:V.angleDeg||0,distance:Math.floor(V.distance),targetDistance:V.targetDistance,juggleCount:V.juggleCount,multiplier:be,combo:V.combo,windCurrent:V.windCurrent,fallSlowMo:V.fallSlowMo,slowMoTimer:V.slowMoTimer,leftPressed:V.leftPressed,rightPressed:V.rightPressed,leftTimingReady:Ae,rightTimingReady:ge})}B=requestAnimationFrame(xe)};return B=requestAnimationFrame(xe),()=>{window.removeEventListener("resize",_e),B&&cancelAnimationFrame(B),Oe.current&&Oe.current.renderer&&Oe.current.renderer.dispose()}},[xt]);const Bt=R=>{const B=b[R.id]||1;if(B>=R.maxLevel)return;const _e=Math.round(R.baseCost*Math.pow(R.costScale,B-1));p<_e||(_(xe=>xe-_e),x(xe=>({...xe,[R.id]:B+1})),pn.playCatch(B+3))},K=R=>{if(v.includes(R.id)){C(R.id),pn.playCatch(2);return}R.currency==="coins"&&p>=R.cost?(_(B=>B-R.cost),D(B=>[...B,R.id]),C(R.id),pn.playLevelWin()):R.currency==="gems"&&S>=R.cost&&(g(B=>B-R.cost),D(B=>[...B,R.id]),C(R.id),pn.playLevelWin())},$t=R=>{if(P.includes(R.id)){E(R.id),pn.playCatch(3);return}R.currency==="coins"&&p>=R.cost?(_(B=>B-R.cost),L(B=>[...B,R.id]),E(R.id),pn.playLevelWin()):R.currency==="gems"&&S>=R.cost&&(g(B=>B-R.cost),L(B=>[...B,R.id]),E(R.id),pn.playLevelWin())},Et=R=>{g(B=>B+R.gems),_(B=>B+R.coins),pn.playLevelWin(),ne(`+${R.gems} 💎  +${R.coins} 🪙`),setTimeout(()=>ne(""),2500)},U=[...XE,{id:"player",name:e==="es"?"TÚ (Equilibrista)":"YOU (Tightrope Pro)",country:He.flag,lp:M,badge:"⭐",isPlayer:!0}].sort((R,B)=>B.lp-R.lp),y=U.findIndex(R=>R.isPlayer)+1,te=Math.abs(Se.windCurrent).toFixed(1),de=Se.windCurrent<-.8?"◄◄":Se.windCurrent<-.15?"◄":Se.windCurrent>.8?"►►":Se.windCurrent>.15?"►":"•";return G.jsxs("div",{className:"game-shell",children:[G.jsx("div",{ref:Fe,className:"webgl-mount"}),j&&G.jsxs("div",{className:"modal-backdrop",style:{zIndex:90,flexDirection:"column",gap:"14px",background:"radial-gradient(circle at 50% 35%, #09152b 0%, #02040a 85%)"},children:[G.jsxs("div",{style:{position:"relative",width:"82%",maxWidth:"320px",borderRadius:"18px",overflow:"hidden",border:"2px solid rgba(0, 242, 254, 0.75)",boxShadow:"0 0 32px rgba(0, 242, 254, 0.45), 0 18px 40px rgba(0, 0, 0, 0.9)"},children:[G.jsx("img",{src:re,onError:Ot,alt:"NO MIRES ABAJO",style:{width:"100%",height:"auto",display:"block"}}),G.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5,8,17,0) 55%, rgba(5,8,17,0.95) 100%)"}})]}),G.jsx("div",{style:{fontFamily:"Bebas Neue, Orbitron, sans-serif",fontSize:"2rem",letterSpacing:"0.08em",color:"#fde047",textShadow:"0 0 16px rgba(0, 242, 254, 0.6)"},children:$.title})]}),Q!=="PLAYING"&&G.jsxs("header",{className:"top-utility-bar",children:[G.jsxs("div",{className:"league-strip",onClick:()=>{We.current.paused=!0,q("LEAGUE")},children:[G.jsxs("div",{className:"league-strip-left",children:[G.jsxs("span",{children:["🏆 ",$.leagueBanner,":"]}),G.jsxs("span",{className:"league-points-badge",children:["#",y," (",M," ",$.leaguePointsShort,")"]})]}),G.jsxs("span",{className:"league-timer",children:["⏳ ",I.days,"d ",I.hours,"h"]})]}),G.jsxs("div",{className:"nav-pills-row",children:[G.jsxs("div",{className:"nav-pills-group",children:[G.jsxs("button",{type:"button",className:"mini-pill gold",onClick:()=>{We.current.paused=!0,q("CITIES")},children:[He.flag," ",$.level," ",l,"/100"]}),G.jsxs("button",{type:"button",className:"mini-pill cyan",onClick:()=>{We.current.paused=!0,q("ARMORY")},children:["⚙️ ",$.armoryBtn]}),G.jsxs("button",{type:"button",className:"mini-pill",onClick:()=>{We.current.paused=!0,q("SKINS")},children:["🧥 ",$.skinsBtn]})]}),G.jsxs("div",{className:"nav-pills-group",children:[G.jsx("button",{type:"button",className:"mini-pill",onClick:()=>o(R=>!R),children:r?"🔊":"🔇"}),G.jsx("button",{type:"button",className:"mini-pill",onClick:()=>n(R=>R==="es"?"en":"es"),children:e.toUpperCase()})]})]})]}),Q==="PLAYING"&&G.jsxs("section",{className:"compact-play-hud",children:[G.jsxs("div",{className:"compact-hud-top-row",children:[G.jsxs("div",{className:"compact-hud-city",children:[G.jsx("span",{children:He.flag}),G.jsxs("span",{className:"compact-hud-lvl-badge",children:["Nv.",l]}),G.jsx("span",{children:He.name[e]})]}),G.jsxs("div",{className:"compact-hud-metrics",children:[G.jsxs("div",{className:"compact-metric-pill distance",children:[G.jsxs("span",{className:"compact-dist-cur",children:[Se.distance,"m"]}),G.jsxs("span",{className:"compact-dist-target",children:["/ ",Se.targetDistance,"m"]})]}),G.jsx("div",{className:"compact-metric-pill wind",children:G.jsxs("span",{children:["💨 ",de," ",te]})}),G.jsx("div",{className:"compact-metric-pill mult",children:G.jsxs("span",{children:["x",Se.multiplier]})}),G.jsx("button",{type:"button",className:"compact-pause-btn",title:$.pauseBtn,onClick:()=>{We.current.paused=!0,q("PAUSE")},children:"⏸"})]})]}),G.jsxs("div",{className:"balance-axis-row",children:[G.jsx("span",{className:"balance-axis-label",children:e==="es"?"EJE":"AXIS"}),G.jsxs("div",{className:"balance-axis-track",children:[G.jsx("div",{className:"balance-axis-center-notch"}),G.jsx("div",{ref:le,className:"balance-axis-needle"})]}),G.jsxs("span",{className:"balance-axis-label",style:{color:"#fde047"},children:["🔥",Se.combo]})]})]}),Q==="LOBBY"&&N==="home"&&G.jsxs("div",{className:"lobby-overlay",children:[G.jsxs("div",{className:"lobby-top-section",children:[G.jsxs("div",{className:"rounded-2xl",style:{position:"relative",width:"100%",height:"132px",borderRadius:"16px",overflow:"hidden",border:"1.5px solid rgba(0, 242, 254, 0.72)",boxShadow:"0 0 24px rgba(0, 242, 254, 0.38), 0 10px 26px rgba(0, 0, 0, 0.85)"},children:[G.jsx("img",{src:re,onError:Ot,alt:"NO MIRES ABAJO",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 28%",display:"block"}}),G.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5, 8, 17, 0.1) 0%, rgba(5, 8, 17, 0.45) 52%, rgba(9, 15, 32, 0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",padding:"8px 12px"},children:[G.jsx("h1",{className:"lobby-main-title",style:{fontSize:"2.1rem",marginBottom:"2px"},children:$.title}),G.jsx("div",{className:"lobby-level-subtitle",onClick:()=>q("CITIES"),style:{cursor:"pointer",marginTop:0},children:G.jsxs("span",{children:["📍 ",$.level," ",l,"/100 — ",He.flag," ",He.name[e]," (",Re.targetDistance,"m)"]})})]})]}),G.jsxs("div",{className:"lobby-league-banner",onClick:()=>q("LEAGUE"),children:[G.jsxs("div",{className:"lobby-league-row",children:[G.jsxs("span",{style:{fontWeight:900,fontSize:"0.84rem",color:"#fde047"},children:["🏆 ",$.leagueBanner," — #",y," (",M," LP)"]}),G.jsx("span",{style:{fontSize:"0.74rem",color:"#67e8f9",fontWeight:800},children:"🎁 Cofres Épicos →"})]}),G.jsxs("div",{style:{fontSize:"0.74rem",color:"#cbd5e1",display:"flex",justifyContent:"space-between"},children:[G.jsx("span",{children:He.landmark[e]}),G.jsxs("span",{children:["🪙 ",p," | 💎 ",S]})]})]})]}),G.jsxs("div",{className:"lobby-bottom-section",children:[G.jsxs("div",{className:"lobby-prep-grid",children:[G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{k("home"),q("CITIES")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"🌍"}),G.jsx("span",{children:$.citiesBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>{k("home"),q("ARMORY")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"⚙️"}),G.jsx("span",{children:$.armoryBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>{k("home"),q("SKINS")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"🧥"}),G.jsx("span",{children:$.skinsBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{k("home"),q("SHOP")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"💎"}),G.jsx("span",{children:$.shopBtn})]})]}),G.jsx("button",{type:"button",className:"lobby-play-btn",onClick:Mt,children:$.playNowBtn})]})]}),Q==="PLAYING"&&G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:"multitouch-split-overlay",children:[G.jsx("div",{className:"multitouch-half-panel",onPointerDown:R=>kt("L",R),onPointerUp:R=>ut("L",R),onPointerCancel:R=>ut("L",R),onPointerLeave:R=>ut("L",R)}),G.jsx("div",{className:"multitouch-half-panel",onPointerDown:R=>kt("R",R),onPointerUp:R=>ut("R",R),onPointerCancel:R=>ut("R",R),onPointerLeave:R=>ut("R",R)})]}),G.jsxs("div",{className:"compact-bottom-hud",children:[G.jsxs("div",{className:"juggle-dock-compact",children:[G.jsxs("button",{type:"button",className:"juggle-add-btn",onClick:ot,children:[G.jsx("span",{children:$.addJuggle}),G.jsxs("span",{children:["(",Se.juggleCount,"/4)"]})]}),G.jsx("div",{className:"prop-selector-pill",children:Kr.map(R=>{const B=P.includes(R.id),_e=F===R.id;return G.jsxs("button",{type:"button",className:`prop-item-btn ${_e?"active":""} ${B?"":"locked"}`,onClick:()=>{B?E(R.id):(We.current.paused=!0,q("SKINS"))},children:[G.jsx("span",{children:R.icon}),G.jsxs("span",{children:["x",R.mult]})]},R.id)})})]}),G.jsxs("div",{className:"bottom-controls-bar",children:[G.jsx("button",{type:"button",className:`thumb-btn-outer ${Se.leftPressed?"pressed":""} ${Se.leftTimingReady?"timing-ready":""}`,onPointerDown:R=>kt("L",R),onPointerUp:R=>ut("L",R),onPointerCancel:R=>ut("L",R),onPointerLeave:R=>ut("L",R),children:G.jsxs("div",{className:"thumb-btn-inner",children:[G.jsx("span",{className:"thumb-btn-label",children:$.left}),G.jsx("span",{className:"thumb-btn-sub",children:"HOLD / TAP"})]})}),G.jsxs("button",{type:"button",className:`grapple-save-btn ${Se.fallSlowMo||Math.abs(Se.angleDeg)>25?"danger-glow":""}`,onClick:Vt,children:[G.jsx("span",{className:"grapple-hook-icon",children:"🪝"}),G.jsxs("div",{className:"grapple-btn-text",children:[G.jsx("span",{className:"grapple-title",children:$.grappleTitle}),G.jsx("span",{className:"grapple-cost",children:Se.fallSlowMo?`⚠️ ${Se.slowMoTimer.toFixed(1)}s — ${$.grappleCost}`:$.grappleCost})]})]}),G.jsx("button",{type:"button",className:`thumb-btn-outer ${Se.rightPressed?"pressed":""} ${Se.rightTimingReady?"timing-ready":""}`,onPointerDown:R=>kt("R",R),onPointerUp:R=>ut("R",R),onPointerCancel:R=>ut("R",R),onPointerLeave:R=>ut("R",R),children:G.jsxs("div",{className:"thumb-btn-inner",children:[G.jsx("span",{className:"thumb-btn-label",children:$.right}),G.jsx("span",{className:"thumb-btn-sub",children:"HOLD / TAP"})]})})]})]})]}),ie==="LEAGUE"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["🏆 ",$.leagueModalTitle]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{We.current.paused=!1,q(null)},children:"✕"})]}),G.jsx("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"12px"},children:$.leagueModalSub}),G.jsxs("div",{className:"item-card highlight",style:{marginBottom:"12px",textAlign:"center"},children:[G.jsxs("div",{style:{fontSize:"0.78rem",color:"#fde047",fontWeight:800},children:["⏳ ",$.seasonEndsIn,": ",I.days,"d ",I.hours,"h"," ",I.mins,"m ",I.secs,"s"]}),G.jsxs("div",{style:{fontSize:"1.45rem",fontWeight:900,color:"#ffffff",marginTop:"2px"},children:["#",y," — ",M," ",$.leaguePointsShort]})]}),G.jsx("div",{className:"grid-list",style:{marginBottom:"14px"},children:YE.map(R=>G.jsxs("div",{className:"item-card",style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[G.jsx("div",{children:G.jsxs("div",{style:{fontWeight:900,color:"#fde047"},children:[R.icon," ",R.rankLabel," — ",R.title[e]]})}),G.jsxs("div",{style:{fontWeight:800,fontSize:"0.82rem",color:"#67e8f9"},children:["+",R.gemsReward," 💎 | +",R.coinsReward," 🪙"]})]},R.rankLabel))}),G.jsx("div",{className:"grid-list",children:U.map((R,B)=>G.jsxs("div",{className:`league-rank-row ${R.isPlayer?"is-player":""}`,children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[G.jsxs("span",{style:{fontWeight:900,color:"#fde047",width:"24px"},children:["#",B+1]}),G.jsx("span",{children:R.country}),G.jsx("span",{style:{fontWeight:800},children:R.name})]}),G.jsxs("div",{style:{fontWeight:900,color:"#38bdf8"},children:[R.lp," LP ",R.badge]})]},R.id))})]})}),ie==="ARMORY"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["⚙️ ",$.armoryTitle]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{We.current.paused=!1,q(null)},children:"✕"})]}),G.jsxs("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"10px"},children:[$.armorySub," (🪙 ",p,")"]}),G.jsx("div",{className:"grid-list",children:WE.map(R=>{const B=b[R.id]||1,_e=B>=R.maxLevel,xe=Math.round(R.baseCost*Math.pow(R.costScale,B-1));return G.jsxs("div",{className:"item-card highlight",children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{style:{fontWeight:900,fontSize:"1.02rem"},children:[R.icon," ",R.name[e]," (Nv. ",B,"/",R.maxLevel,")"]}),G.jsx("span",{style:{fontSize:"0.76rem",color:"#4ade80",fontWeight:800},children:R.statLabel[e]})]}),G.jsx("p",{style:{fontSize:"0.78rem",color:"#cbd5e1"},children:R.desc[e]}),G.jsx("div",{className:"armory-progress-bar",children:Array.from({length:10}).map((ye,V)=>G.jsx("div",{className:`armory-pip ${V<B?"filled":""}`},V))}),G.jsx("button",{type:"button",className:"pause-action-btn gold",style:{marginTop:"6px",padding:"8px 12px"},disabled:_e||p<xe,onClick:()=>Bt(R),children:_e?`✅ ${$.maxLevelLabel}`:`⬆️ ${$.upgradeBtn} — ${xe} 🪙`})]},R.id)})})]})}),ie==="CITIES"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["🌍 ",$.citiesBtn," (100 Niveles)"]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{We.current.paused=!1,q(null)},children:"✕"})]}),G.jsx("div",{className:"grid-list",children:jl.map((R,B)=>{const _e=B*5+1;return G.jsxs("div",{className:"item-card",children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("span",{style:{fontWeight:900,color:"#fde047"},children:[R.flag," ",B+1,". ",R.name[e]]}),G.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:R.landmark[e]})]}),G.jsx("div",{className:"city-levels-row",children:[0,1,2,3,4].map(xe=>{const ye=_e+xe,V=ye<=f,Be=ye===l;return G.jsxs("button",{type:"button",className:`lvl-chip ${Be?"current":""} ${V&&!Be?"completed":""} ${V?"":"locked"}`,disabled:!V,onClick:()=>{u(ye),at(ye,"LOBBY")},children:["Nv.",ye]},ye)})})]},R.id)})})]})}),ie==="SKINS"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["🧥 ",$.skinsBtn]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{We.current.paused=!1,q(null)},children:"✕"})]}),G.jsxs("h3",{style:{fontSize:"0.95rem",color:"#67e8f9",marginBottom:"8px"},children:["🧥 Aspectos Urbanos (🪙 ",p," | 💎 ",S,")"]}),G.jsx("div",{className:"grid-list",style:{marginBottom:"16px"},children:ms.map(R=>{const B=v.includes(R.id),_e=z===R.id;return G.jsxs("div",{className:`item-card ${_e?"highlight":""}`,children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("span",{style:{fontWeight:900},children:[R.name[e]," (x",R.bonusMult,")"]}),G.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>K(R),children:_e?"✅ EQUIPADO":B?"EQUIPAR":`${R.cost} ${R.currency==="gems"?"💎":"🪙"}`})]}),G.jsx("span",{style:{fontSize:"0.76rem",color:"#94a3b8"},children:R.desc[e]})]},R.id)})}),G.jsx("h3",{style:{fontSize:"0.95rem",color:"#fde047",marginBottom:"8px"},children:"🎪 Objetos de Malabar 3D Especulares"}),G.jsx("div",{className:"grid-list",children:Kr.map(R=>{const B=P.includes(R.id),_e=F===R.id;return G.jsx("div",{className:`item-card ${_e?"highlight":""}`,children:G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("span",{style:{fontWeight:900},children:[R.icon," ",R.name[e]," (x",R.mult,")"]}),G.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>$t(R),children:_e?"✅ EQUIPADO":B?"EQUIPAR":`${R.cost} ${R.currency==="gems"?"💎":"🪙"}`})]})},R.id)})})]})}),ie==="SHOP"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["💎 ",$.shopTitle]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{We.current.paused=!1,q(null)},children:"✕"})]}),G.jsx("p",{style:{fontSize:"0.82rem",color:"#cbd5e1",marginBottom:"12px"},children:$.shopSub}),ee&&G.jsxs("div",{className:"item-card highlight",style:{marginBottom:"10px",textAlign:"center",color:"#4ade80",fontWeight:900},children:["🎁 ",ee]}),G.jsx("div",{className:"grid-list",children:qE.map(R=>G.jsx("div",{className:`item-card ${R.popular?"highlight":""}`,children:G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{children:[G.jsxs("div",{style:{fontWeight:900,fontSize:"1rem"},children:[R.icon," ",R.name[e]]}),G.jsxs("div",{style:{fontSize:"0.8rem",color:"#67e8f9"},children:["+",R.gems," 💎 Gemas | +",R.coins," 🪙 Monedas"]})]}),G.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>Et(R),children:R.tag})]})},R.id))})]})}),ie==="PAUSE"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsx("div",{className:"modal-header",children:G.jsxs("h2",{className:"modal-title",children:["⏸ ",$.pauseTitle]})}),G.jsx("p",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"12px"},children:$.pauseSub}),G.jsxs("div",{className:"lobby-prep-grid",style:{marginBottom:"12px"},children:[G.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>q("ARMORY"),children:[G.jsx("span",{children:"⚙️"}),G.jsx("span",{children:$.armoryBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>q("SKINS"),children:[G.jsx("span",{children:"🧥"}),G.jsx("span",{children:$.skinsBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>q("LEAGUE"),children:[G.jsx("span",{children:"🏆"}),G.jsx("span",{children:"Liga"})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>q("CITIES"),children:[G.jsx("span",{children:"🌍"}),G.jsx("span",{children:$.citiesBtn})]})]}),G.jsxs("div",{className:"pause-menu-stack",children:[G.jsxs("button",{type:"button",className:"pause-action-btn resume",onClick:()=>{We.current.paused=!1,q(null)},children:["▶ ",$.resumeBtn]}),G.jsxs("button",{type:"button",className:"pause-action-btn gold",onClick:()=>at(l,"PLAYING"),children:["🔄 ",$.restartBtn]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>at(l,"LOBBY"),children:["🏠 ",$.backToLobbyBtn]})]})]})}),Q==="VICTORY"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsx("div",{className:"modal-header",children:G.jsxs("h2",{className:"modal-title",children:["🏆 ",$.levelCleared]})}),G.jsxs("div",{className:"item-card highlight",style:{textAlign:"center",marginBottom:"14px"},children:[G.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:900},children:[He.flag," ",He.name[e]," — ",$.level," ",l]}),G.jsxs("div",{style:{fontSize:"0.95rem",color:"#4ade80",fontWeight:800,marginTop:"6px"},children:["+",We.current.coinsEarnedRun," 🪙 | +",We.current.lpEarnedRun," 🏆 LP"]})]}),G.jsxs("div",{className:"pause-menu-stack",children:[G.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:()=>{const R=Math.min(100,l+1);u(R),at(R,"PLAYING")},children:["▶ ",$.nextLevel," (",Math.min(100,l+1),"/100)"]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>{const R=Math.min(100,l+1);u(R),at(R,"LOBBY")},children:["🏠 ",$.backToLobbyBtn]})]})]})}),Q==="GAMEOVER"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card loss-aversion",children:[G.jsx("div",{className:"modal-header",children:G.jsxs("h2",{className:"modal-title",style:{color:"#fca5a5"},children:["⚠️ ",$.fellTitle]})}),G.jsxs("p",{style:{fontSize:"0.92rem",color:"#fef2f2",marginBottom:"14px"},children:[$.fellSub," ",G.jsxs("strong",{children:["(",Se.distance,"m / ",Se.targetDistance,"m)"]})]}),G.jsxs("div",{className:"pause-menu-stack",children:[G.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:()=>{if(S>=20){g(B=>B-20);const R=We.current;R.angle=0,R.angleRad=0,R.angleDeg=0,R.angularVelocity=0,R.fallSlowMo=!1,R.gameStatus="PLAYING",pn.playGrapple(),pe("PLAYING")}else q("SHOP")},children:["🪝 ",$.continueHook]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>at(l,"PLAYING"),children:["🔄 ",$.retryFree]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>at(l,"LOBBY"),children:["🏠 ",$.backToLobbyBtn]})]})]})})]})}yv.createRoot(document.getElementById("root")).render(G.jsx(pv.StrictMode,{children:G.jsx(s1,{})}));
