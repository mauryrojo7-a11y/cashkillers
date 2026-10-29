(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function hg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qd={exports:{}},Jo={},jd={exports:{}},Xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function n_(){if(Km)return Xt;Km=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function x(O,ce,we){this.props=O,this.context=ce,this.refs=A,this.updater=we||M}x.prototype.isReactComponent={},x.prototype.setState=function(O,ce){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ce,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=x.prototype;function R(O,ce,we){this.props=O,this.context=ce,this.refs=A,this.updater=we||M}var U=R.prototype=new v;U.constructor=R,E(U,x.prototype),U.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(O,ce,we){var Be,Xe={},Ye=null,de=null;if(ce!=null)for(Be in ce.ref!==void 0&&(de=ce.ref),ce.key!==void 0&&(Ye=""+ce.key),ce)I.call(ce,Be)&&!k.hasOwnProperty(Be)&&(Xe[Be]=ce[Be]);var ge=arguments.length-2;if(ge===1)Xe.children=we;else if(1<ge){for(var Ae=Array(ge),it=0;it<ge;it++)Ae[it]=arguments[it+2];Xe.children=Ae}if(O&&O.defaultProps)for(Be in ge=O.defaultProps,ge)Xe[Be]===void 0&&(Xe[Be]=ge[Be]);return{$$typeof:r,type:O,key:Ye,ref:de,props:Xe,_owner:N.current}}function L(O,ce){return{$$typeof:r,type:O.type,key:ce,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function H(O){var ce={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(we){return ce[we]})}var q=/\/+/g;function re(O,ce){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):ce.toString(36)}function G(O,ce,we,Be,Xe){var Ye=typeof O;(Ye==="undefined"||Ye==="boolean")&&(O=null);var de=!1;if(O===null)de=!0;else switch(Ye){case"string":case"number":de=!0;break;case"object":switch(O.$$typeof){case r:case e:de=!0}}if(de)return de=O,Xe=Xe(de),O=Be===""?"."+re(de,0):Be,b(Xe)?(we="",O!=null&&(we=O.replace(q,"$&/")+"/"),G(Xe,ce,we,"",function(it){return it})):Xe!=null&&(z(Xe)&&(Xe=L(Xe,we+(!Xe.key||de&&de.key===Xe.key?"":(""+Xe.key).replace(q,"$&/")+"/")+O)),ce.push(Xe)),1;if(de=0,Be=Be===""?".":Be+":",b(O))for(var ge=0;ge<O.length;ge++){Ye=O[ge];var Ae=Be+re(Ye,ge);de+=G(Ye,ce,we,Ae,Xe)}else if(Ae=_(O),typeof Ae=="function")for(O=Ae.call(O),ge=0;!(Ye=O.next()).done;)Ye=Ye.value,Ae=Be+re(Ye,ge++),de+=G(Ye,ce,we,Ae,Xe);else if(Ye==="object")throw ce=String(O),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return de}function ne(O,ce,we){if(O==null)return O;var Be=[],Xe=0;return G(O,Be,"","",function(Ye){return ce.call(we,Ye,Xe++)}),Be}function fe(O){if(O._status===-1){var ce=O._result;ce=ce(),ce.then(function(we){(O._status===0||O._status===-1)&&(O._status=1,O._result=we)},function(we){(O._status===0||O._status===-1)&&(O._status=2,O._result=we)}),O._status===-1&&(O._status=0,O._result=ce)}if(O._status===1)return O._result.default;throw O._result}var oe={current:null},Z={transition:null},J={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:N};function K(){throw Error("act(...) is not supported in production builds of React.")}return Xt.Children={map:ne,forEach:function(O,ce,we){ne(O,function(){ce.apply(this,arguments)},we)},count:function(O){var ce=0;return ne(O,function(){ce++}),ce},toArray:function(O){return ne(O,function(ce){return ce})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Xt.Component=x,Xt.Fragment=t,Xt.Profiler=o,Xt.PureComponent=R,Xt.StrictMode=s,Xt.Suspense=m,Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Xt.act=K,Xt.cloneElement=function(O,ce,we){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Be=E({},O.props),Xe=O.key,Ye=O.ref,de=O._owner;if(ce!=null){if(ce.ref!==void 0&&(Ye=ce.ref,de=N.current),ce.key!==void 0&&(Xe=""+ce.key),O.type&&O.type.defaultProps)var ge=O.type.defaultProps;for(Ae in ce)I.call(ce,Ae)&&!k.hasOwnProperty(Ae)&&(Be[Ae]=ce[Ae]===void 0&&ge!==void 0?ge[Ae]:ce[Ae])}var Ae=arguments.length-2;if(Ae===1)Be.children=we;else if(1<Ae){ge=Array(Ae);for(var it=0;it<Ae;it++)ge[it]=arguments[it+2];Be.children=ge}return{$$typeof:r,type:O.type,key:Xe,ref:Ye,props:Be,_owner:de}},Xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Xt.createElement=T,Xt.createFactory=function(O){var ce=T.bind(null,O);return ce.type=O,ce},Xt.createRef=function(){return{current:null}},Xt.forwardRef=function(O){return{$$typeof:f,render:O}},Xt.isValidElement=z,Xt.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:fe}},Xt.memo=function(O,ce){return{$$typeof:p,type:O,compare:ce===void 0?null:ce}},Xt.startTransition=function(O){var ce=Z.transition;Z.transition={};try{O()}finally{Z.transition=ce}},Xt.unstable_act=K,Xt.useCallback=function(O,ce){return oe.current.useCallback(O,ce)},Xt.useContext=function(O){return oe.current.useContext(O)},Xt.useDebugValue=function(){},Xt.useDeferredValue=function(O){return oe.current.useDeferredValue(O)},Xt.useEffect=function(O,ce){return oe.current.useEffect(O,ce)},Xt.useId=function(){return oe.current.useId()},Xt.useImperativeHandle=function(O,ce,we){return oe.current.useImperativeHandle(O,ce,we)},Xt.useInsertionEffect=function(O,ce){return oe.current.useInsertionEffect(O,ce)},Xt.useLayoutEffect=function(O,ce){return oe.current.useLayoutEffect(O,ce)},Xt.useMemo=function(O,ce){return oe.current.useMemo(O,ce)},Xt.useReducer=function(O,ce,we){return oe.current.useReducer(O,ce,we)},Xt.useRef=function(O){return oe.current.useRef(O)},Xt.useState=function(O){return oe.current.useState(O)},Xt.useSyncExternalStore=function(O,ce,we){return oe.current.useSyncExternalStore(O,ce,we)},Xt.useTransition=function(){return oe.current.useTransition()},Xt.version="18.3.1",Xt}var Zm;function wh(){return Zm||(Zm=1,jd.exports=n_()),jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function i_(){if(Jm)return Jo;Jm=1;var r=wh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var S,y={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(S in m)s.call(m,S)&&!l.hasOwnProperty(S)&&(y[S]=m[S]);if(f&&f.defaultProps)for(S in m=f.defaultProps,m)y[S]===void 0&&(y[S]=m[S]);return{$$typeof:e,type:f,key:_,ref:M,props:y,_owner:o.current}}return Jo.Fragment=t,Jo.jsx=u,Jo.jsxs=u,Jo}var Qm;function r_(){return Qm||(Qm=1,qd.exports=i_()),qd.exports}var D=r_(),rt=wh();const s_=hg(rt);var Mc={},$d={exports:{}},Ii={},Yd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function a_(){return e0||(e0=1,(function(r){function e(Z,J){var K=Z.length;Z.push(J);e:for(;0<K;){var O=K-1>>>1,ce=Z[O];if(0<o(ce,J))Z[O]=J,Z[K]=ce,K=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var J=Z[0],K=Z.pop();if(K!==J){Z[0]=K;e:for(var O=0,ce=Z.length,we=ce>>>1;O<we;){var Be=2*(O+1)-1,Xe=Z[Be],Ye=Be+1,de=Z[Ye];if(0>o(Xe,K))Ye<ce&&0>o(de,Xe)?(Z[O]=de,Z[Ye]=K,O=Ye):(Z[O]=Xe,Z[Be]=K,O=Be);else if(Ye<ce&&0>o(de,K))Z[O]=de,Z[Ye]=K,O=Ye;else break e}}return J}function o(Z,J){var K=Z.sortIndex-J.sortIndex;return K!==0?K:Z.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var m=[],p=[],S=1,y=null,_=3,M=!1,E=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(Z){for(var J=t(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=Z)s(p),J.sortIndex=J.expirationTime,e(m,J);else break;J=t(p)}}function b(Z){if(A=!1,U(Z),!E)if(t(m)!==null)E=!0,fe(I);else{var J=t(p);J!==null&&oe(b,J.startTime-Z)}}function I(Z,J){E=!1,A&&(A=!1,v(T),T=-1),M=!0;var K=_;try{for(U(J),y=t(m);y!==null&&(!(y.expirationTime>J)||Z&&!H());){var O=y.callback;if(typeof O=="function"){y.callback=null,_=y.priorityLevel;var ce=O(y.expirationTime<=J);J=r.unstable_now(),typeof ce=="function"?y.callback=ce:y===t(m)&&s(m),U(J)}else s(m);y=t(m)}if(y!==null)var we=!0;else{var Be=t(p);Be!==null&&oe(b,Be.startTime-J),we=!1}return we}finally{y=null,_=K,M=!1}}var N=!1,k=null,T=-1,L=5,z=-1;function H(){return!(r.unstable_now()-z<L)}function q(){if(k!==null){var Z=r.unstable_now();z=Z;var J=!0;try{J=k(!0,Z)}finally{J?re():(N=!1,k=null)}}else N=!1}var re;if(typeof R=="function")re=function(){R(q)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ne=G.port2;G.port1.onmessage=q,re=function(){ne.postMessage(null)}}else re=function(){x(q,0)};function fe(Z){k=Z,N||(N=!0,re())}function oe(Z,J){T=x(function(){Z(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,fe(I))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(Z){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var K=_;_=J;try{return Z()}finally{_=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,J){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var K=_;_=Z;try{return J()}finally{_=K}},r.unstable_scheduleCallback=function(Z,J,K){var O=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?O+K:O):K=O,Z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=K+ce,Z={id:S++,callback:J,priorityLevel:Z,startTime:K,expirationTime:ce,sortIndex:-1},K>O?(Z.sortIndex=K,e(p,Z),t(m)===null&&Z===t(p)&&(A?(v(T),T=-1):A=!0,oe(b,K-O))):(Z.sortIndex=ce,e(m,Z),E||M||(E=!0,fe(I))),Z},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(Z){var J=_;return function(){var K=_;_=J;try{return Z.apply(this,arguments)}finally{_=K}}}})(Kd)),Kd}var t0;function o_(){return t0||(t0=1,Yd.exports=a_()),Yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function l_(){if(n0)return Ii;n0=1;var r=wh(),e=o_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},y={};function _(n){return m.call(y,n)?!0:m.call(S,n)?!1:p.test(n)?y[n]=!0:(S[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,R);x[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,R);x[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,R);x[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,O;function ce(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var we=!1;function Be(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(_e){var c=_e}Reflect.construct(n,[],i)}else{try{i.call()}catch(_e){c=_e}n.call(i.prototype)}else{try{throw Error()}catch(_e){c=_e}n()}}catch(_e){if(_e&&c&&typeof _e.stack=="string"){for(var d=_e.stack.split(`
`),g=c.stack.split(`
`),C=d.length-1,V=g.length-1;1<=C&&0<=V&&d[C]!==g[V];)V--;for(;1<=C&&0<=V;C--,V--)if(d[C]!==g[V]){if(C!==1||V!==1)do if(C--,V--,0>V||d[C]!==g[V]){var $=`
`+d[C].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=C&&0<=V);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ce(n):""}function Xe(n){switch(n.tag){case 5:return ce(n.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function Ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case N:return"Portal";case L:return"Profiler";case T:return"StrictMode";case re:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:Ye(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return Ye(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ye(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(C){c=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=it(n))}function yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ae(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function en(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ft(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function Mt(n,i){Ft(n,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Lt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Lt(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function jt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Lt(n,i,a){(i!=="number"||en(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Bt=Array.isArray;function Ct(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function rn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function Gt(n,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function kt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?F(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){De.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function Se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ne=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,ft=null,X=null;function Oe(n){if(n=Fo(n)){if(typeof Fe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fl(i),Fe(n.stateNode,n.type,i))}}function W(n){ft?X?X.push(n):X=[n]:ft=n}function Re(){if(ft){var n=ft,i=X;if(X=ft=null,Oe(n),i)for(n=0;n<i.length;n++)Oe(i[n])}}function Ce(n,i){return n(i)}function Me(){}var et=!1;function Ze(n,i,a){if(et)return n(i,a);et=!0;try{return Ce(n,i,a)}finally{et=!1,(ft!==null||X!==null)&&(Me(),Re())}}function wt(n,i){var a=n.stateNode;if(a===null)return null;var c=Fl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var mt=!1;if(f)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){mt=!0}}),window.addEventListener("test",ct,ct),window.removeEventListener("test",ct,ct)}catch{mt=!1}function nt(n,i,a,c,d,g,C,V,$){var _e=Array.prototype.slice.call(arguments,3);try{i.apply(a,_e)}catch(be){this.onError(be)}}var Mn=!1,_n=null,sn=!1,Pn=null,Bi={onError:function(n){Mn=!0,_n=n}};function xt(n,i,a,c,d,g,C,V,$){Mn=!1,_n=null,nt.apply(Bi,arguments)}function zi(n,i,a,c,d,g,C,V,$){if(xt.apply(this,arguments),Mn){if(Mn){var _e=_n;Mn=!1,_n=null}else throw Error(t(198));sn||(sn=!0,Pn=_e)}}function fn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ui(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ti(n){if(fn(n)!==n)throw Error(t(188))}function En(n){var i=n.alternate;if(!i){if(i=fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Ti(d),n;if(g===c)return Ti(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var C=!1,V=d.child;V;){if(V===a){C=!0,a=d,c=g;break}if(V===c){C=!0,c=d,a=g;break}V=V.sibling}if(!C){for(V=g.child;V;){if(V===a){C=!0,a=g,c=d;break}if(V===c){C=!0,c=g,a=d;break}V=V.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Fn(n){return n=En(n),n!==null?Zn(n):null}function Zn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Zn(n);if(i!==null)return i;n=n.sibling}return null}var Nt=e.unstable_scheduleCallback,Dn=e.unstable_cancelCallback,ri=e.unstable_shouldYield,jr=e.unstable_requestPaint,Kt=e.unstable_now,$r=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,Zi=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,Y=e.unstable_LowPriority,me=e.unstable_IdlePriority,ae=null,se=null;function ke(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:st,He=Math.log,tt=Math.LN2;function st(n){return n>>>=0,n===0?32:31-(He(n)/tt|0)|0}var Et=64,gt=4194304;function Ke(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var V=C&~d;V!==0?c=Ke(V):(g&=C,g!==0&&(c=Ke(g)))}else C=a&~d,C!==0?c=Ke(C):g!==0&&(c=Ke(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),d=1<<a,c|=n[a],i&=~d;return c}function hn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-Ve(g),V=1<<C,$=d[C];$===-1?((V&a)===0||(V&c)!==0)&&(d[C]=hn(V,i)):$<=i&&(n.expiredLanes|=V),g&=~V}}function $t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Et;return Et<<=1,(Et&4194240)===0&&(Et=64),n}function Ge(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function pn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function h(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ve(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function B(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ie=0;function ye(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qe,at,At,tn,Pt,An=!1,Wn=[],kn=null,Wt=null,un=null,Bn=new Map,Ji=new Map,xi=[],Nr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yr(n,i){switch(n){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Bn.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(i.pointerId)}}function Vi(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Fo(i),i!==null&&at(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Kr(n,i,a,c,d){switch(i){case"focusin":return kn=Vi(kn,n,i,a,c,d),!0;case"dragenter":return Wt=Vi(Wt,n,i,a,c,d),!0;case"mouseover":return un=Vi(un,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Bn.set(g,Vi(Bn.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Ji.set(g,Vi(Ji.get(g)||null,n,i,a,c,d)),!0}return!1}function qs(n){var i=ea(n.target);if(i!==null){var a=fn(i);if(a!==null){if(i=a.tag,i===13){if(i=ui(a),i!==null){n.blockedOn=i,Pt(n.priority,function(){At(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Hi(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ie=c,a.target.dispatchEvent(c),Ie=null}else return i=Fo(a),i!==null&&at(i),n.blockedOn=a,!1;i.shift()}return!0}function Jr(n,i,a){Zr(n)&&a.delete(i)}function Aa(){An=!1,kn!==null&&Zr(kn)&&(kn=null),Wt!==null&&Zr(Wt)&&(Wt=null),un!==null&&Zr(un)&&(un=null),Bn.forEach(Jr),Ji.forEach(Jr)}function hr(n,i){n.blockedOn===i&&(n.blockedOn=null,An||(An=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Aa)))}function Qi(n){function i(d){return hr(d,n)}if(0<Wn.length){hr(Wn[0],n);for(var a=1;a<Wn.length;a++){var c=Wn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kn!==null&&hr(kn,n),Wt!==null&&hr(Wt,n),un!==null&&hr(un,n),Bn.forEach(i),Ji.forEach(i),a=0;a<xi.length;a++)c=xi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<xi.length&&(a=xi[0],a.blockedOn===null);)qs(a),a.blockedOn===null&&xi.shift()}var pr=b.ReactCurrentBatchConfig,_s=!0;function Ra(n,i,a,c){var d=ie,g=pr.transition;pr.transition=null;try{ie=1,xs(n,i,a,c)}finally{ie=d,pr.transition=g}}function js(n,i,a,c){var d=ie,g=pr.transition;pr.transition=null;try{ie=4,xs(n,i,a,c)}finally{ie=d,pr.transition=g}}function xs(n,i,a,c){if(_s){var d=Hi(n,i,a,c);if(d===null)Ou(n,i,c,si,a),Yr(n,c);else if(Kr(d,n,i,a,c))c.stopPropagation();else if(Yr(n,c),i&4&&-1<Nr.indexOf(n)){for(;d!==null;){var g=Fo(d);if(g!==null&&qe(g),g=Hi(n,i,a,c),g===null&&Ou(n,i,c,si,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Ou(n,i,c,null,a)}}var si=null;function Hi(n,i,a,c){if(si=null,n=Qe(c),n=ea(n),n!==null)if(i=fn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ui(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return si=n,null}function $s(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($r()){case bi:return 1;case Zi:return 4;case P:case Y:return 16;case me:return 536870912;default:return 16}default:return 16}}var Gi=null,Ys=null,Qr=null;function Vt(){if(Qr)return Qr;var n,i=Ys,a=i.length,c,d="value"in Gi?Gi.value:Gi.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===d[g-c];c++);return Qr=d.slice(n,1<c?1-c:void 0)}function gn(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Si(){return!0}function mr(){return!1}function xn(n){function i(a,c,d,g,C){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Si:mr,this.isPropagationStopped=mr,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=xn(er),Ir=K({},er,{view:0,detail:0}),Pa=xn(Ir),wo,Ks,Zs,Ss=K({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ut,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zs&&(Zs&&n.type==="mousemove"?(wo=n.screenX-Zs.screenX,Ks=n.screenY-Zs.screenY):Ks=wo=0,Zs=n),wo)},movementY:function(n){return"movementY"in n?n.movementY:Ks}}),Sl=xn(Ss),Mu=K({},Ss,{dataTransfer:0}),To=xn(Mu),yl=K({},Ir,{relatedTarget:0}),La=xn(yl),Ml=K({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),El=xn(Ml),wl=K({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Eu=xn(wl),wu=K({},er,{data:0}),Tl=xn(wu),Tu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function je(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bl[n])?!!i[n]:!1}function Ut(){return je}var Yt=K({},Ir,{key:function(n){if(n.key){var i=Tu[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=gn(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ut,charCode:function(n){return n.type==="keypress"?gn(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gn(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mn=xn(Yt),ai=K({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sn=xn(ai),Xn=K({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ut}),Ai=xn(Xn),zn=K({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),gr=xn(zn),tr=K({},Ss,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Js=xn(tr),vr=[9,13,27,32],Qs=f&&"CompositionEvent"in window,nr=null;f&&"documentMode"in document&&(nr=document.documentMode);var ir=f&&"TextEvent"in window&&!nr,bo=f&&(!Qs||nr&&8<nr&&11>=nr),Ao=" ",Al=!1;function Ro(n,i){switch(n){case"keyup":return vr.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rl(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _r=!1;function Cl(n,i){switch(n){case"compositionend":return Rl(i);case"keypress":return i.which!==32?null:(Al=!0,Ao);case"textInput":return n=i.data,n===Ao&&Al?null:n;default:return null}}function Na(n,i){if(_r)return n==="compositionend"||!Qs&&Ro(n,i)?(n=Vt(),Qr=Ys=Gi=null,_r=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bo&&i.locale!=="ko"?null:i.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!tv[n.type]:i==="textarea"}function $h(n,i,a,c){W(c),i=Dl(i,"onChange"),0<i.length&&(a=new Ca("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Co=null,Po=null;function nv(n){fp(n,0)}function Pl(n){var i=Fa(n);if(yt(i))return n}function iv(n,i){if(n==="change")return i}var Yh=!1;if(f){var Au;if(f){var Ru="oninput"in document;if(!Ru){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Ru=typeof Kh.oninput=="function"}Au=Ru}else Au=!1;Yh=Au&&(!document.documentMode||9<document.documentMode)}function Zh(){Co&&(Co.detachEvent("onpropertychange",Jh),Po=Co=null)}function Jh(n){if(n.propertyName==="value"&&Pl(Po)){var i=[];$h(i,Po,n,Qe(n)),Ze(nv,i)}}function rv(n,i,a){n==="focusin"?(Zh(),Co=i,Po=a,Co.attachEvent("onpropertychange",Jh)):n==="focusout"&&Zh()}function sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(Po)}function av(n,i){if(n==="click")return Pl(i)}function ov(n,i){if(n==="input"||n==="change")return Pl(i)}function lv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xr=typeof Object.is=="function"?Object.is:lv;function Lo(n,i){if(xr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!xr(n[d],i[d]))return!1}return!0}function Qh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,i){var a=Qh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qh(a)}}function tp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?tp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function np(){for(var n=window,i=en();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=en(n.document)}return i}function Cu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function cv(n){var i=np(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&Cu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=ep(a,g);var C=ep(a,c);d&&C&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=f&&"documentMode"in document&&11>=document.documentMode,Ia=null,Pu=null,No=null,Lu=!1;function ip(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Ia==null||Ia!==en(c)||(c=Ia,"selectionStart"in c&&Cu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),No&&Lo(No,c)||(No=c,c=Dl(Pu,"onSelect"),0<c.length&&(i=new Ca("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ia)))}function Ll(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Da={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Nu={},rp={};f&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function Nl(n){if(Nu[n])return Nu[n];if(!Da[n])return n;var i=Da[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in rp)return Nu[n]=i[a];return n}var sp=Nl("animationend"),ap=Nl("animationiteration"),op=Nl("animationstart"),lp=Nl("transitionend"),cp=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ys(n,i){cp.set(n,i),l(i,[n])}for(var Iu=0;Iu<up.length;Iu++){var Du=up[Iu],dv=Du.toLowerCase(),fv=Du[0].toUpperCase()+Du.slice(1);ys(dv,"on"+fv)}ys(sp,"onAnimationEnd"),ys(ap,"onAnimationIteration"),ys(op,"onAnimationStart"),ys("dblclick","onDoubleClick"),ys("focusin","onFocus"),ys("focusout","onBlur"),ys(lp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function dp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,zi(c,i,void 0,n),n.currentTarget=null}function fp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var C=c.length-1;0<=C;C--){var V=c[C],$=V.instance,_e=V.currentTarget;if(V=V.listener,$!==g&&d.isPropagationStopped())break e;dp(d,V,_e),g=$}else for(C=0;C<c.length;C++){if(V=c[C],$=V.instance,_e=V.currentTarget,V=V.listener,$!==g&&d.isPropagationStopped())break e;dp(d,V,_e),g=$}}}if(sn)throw n=Pn,sn=!1,Pn=null,n}function wn(n,i){var a=i[Hu];a===void 0&&(a=i[Hu]=new Set);var c=n+"__bubble";a.has(c)||(hp(i,n,2,!1),a.add(c))}function Uu(n,i,a){var c=0;i&&(c|=4),hp(a,n,c,i)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Do(n){if(!n[Il]){n[Il]=!0,s.forEach(function(a){a!=="selectionchange"&&(hv.has(a)||Uu(a,!1,n),Uu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Il]||(i[Il]=!0,Uu("selectionchange",!1,i))}}function hp(n,i,a,c){switch($s(i)){case 1:var d=Ra;break;case 4:d=js;break;default:d=xs}a=d.bind(null,i,a,n),d=void 0,!mt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ou(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(C===4)for(C=c.return;C!==null;){var $=C.tag;if(($===3||$===4)&&($=C.stateNode.containerInfo,$===d||$.nodeType===8&&$.parentNode===d))return;C=C.return}for(;V!==null;){if(C=ea(V),C===null)return;if($=C.tag,$===5||$===6){c=g=C;continue e}V=V.parentNode}}c=c.return}Ze(function(){var _e=g,be=Qe(a),Pe=[];e:{var Te=cp.get(n);if(Te!==void 0){var Je=Ca,lt=n;switch(n){case"keypress":if(gn(a)===0)break e;case"keydown":case"keyup":Je=mn;break;case"focusin":lt="focus",Je=La;break;case"focusout":lt="blur",Je=La;break;case"beforeblur":case"afterblur":Je=La;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=Sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=To;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=Ai;break;case sp:case ap:case op:Je=El;break;case lp:Je=gr;break;case"scroll":Je=Pa;break;case"wheel":Je=Js;break;case"copy":case"cut":case"paste":Je=Eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Sn}var ut=(i&4)!==0,On=!ut&&n==="scroll",ue=ut?Te!==null?Te+"Capture":null:Te;ut=[];for(var Q=_e,pe;Q!==null;){pe=Q;var Ue=pe.stateNode;if(pe.tag===5&&Ue!==null&&(pe=Ue,ue!==null&&(Ue=wt(Q,ue),Ue!=null&&ut.push(Uo(Q,Ue,pe)))),On)break;Q=Q.return}0<ut.length&&(Te=new Je(Te,lt,null,a,be),Pe.push({event:Te,listeners:ut}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Te&&a!==Ie&&(lt=a.relatedTarget||a.fromElement)&&(ea(lt)||lt[es]))break e;if((Je||Te)&&(Te=be.window===be?be:(Te=be.ownerDocument)?Te.defaultView||Te.parentWindow:window,Je?(lt=a.relatedTarget||a.toElement,Je=_e,lt=lt?ea(lt):null,lt!==null&&(On=fn(lt),lt!==On||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(Je=null,lt=_e),Je!==lt)){if(ut=Sl,Ue="onMouseLeave",ue="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(ut=Sn,Ue="onPointerLeave",ue="onPointerEnter",Q="pointer"),On=Je==null?Te:Fa(Je),pe=lt==null?Te:Fa(lt),Te=new ut(Ue,Q+"leave",Je,a,be),Te.target=On,Te.relatedTarget=pe,Ue=null,ea(be)===_e&&(ut=new ut(ue,Q+"enter",lt,a,be),ut.target=pe,ut.relatedTarget=On,Ue=ut),On=Ue,Je&&lt)t:{for(ut=Je,ue=lt,Q=0,pe=ut;pe;pe=Ua(pe))Q++;for(pe=0,Ue=ue;Ue;Ue=Ua(Ue))pe++;for(;0<Q-pe;)ut=Ua(ut),Q--;for(;0<pe-Q;)ue=Ua(ue),pe--;for(;Q--;){if(ut===ue||ue!==null&&ut===ue.alternate)break t;ut=Ua(ut),ue=Ua(ue)}ut=null}else ut=null;Je!==null&&pp(Pe,Te,Je,ut,!1),lt!==null&&On!==null&&pp(Pe,On,lt,ut,!0)}}e:{if(Te=_e?Fa(_e):window,Je=Te.nodeName&&Te.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Te.type==="file")var dt=iv;else if(jh(Te))if(Yh)dt=ov;else{dt=sv;var vt=rv}else(Je=Te.nodeName)&&Je.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(dt=av);if(dt&&(dt=dt(n,_e))){$h(Pe,dt,a,be);break e}vt&&vt(n,Te,_e),n==="focusout"&&(vt=Te._wrapperState)&&vt.controlled&&Te.type==="number"&&Lt(Te,"number",Te.value)}switch(vt=_e?Fa(_e):window,n){case"focusin":(jh(vt)||vt.contentEditable==="true")&&(Ia=vt,Pu=_e,No=null);break;case"focusout":No=Pu=Ia=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,ip(Pe,a,be);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":ip(Pe,a,be)}var _t;if(Qs)e:{switch(n){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else _r?Ro(n,a)&&(Rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(bo&&a.locale!=="ko"&&(_r||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&_r&&(_t=Vt()):(Gi=be,Ys="value"in Gi?Gi.value:Gi.textContent,_r=!0)),vt=Dl(_e,Rt),0<vt.length&&(Rt=new Tl(Rt,n,null,a,be),Pe.push({event:Rt,listeners:vt}),_t?Rt.data=_t:(_t=Rl(a),_t!==null&&(Rt.data=_t)))),(_t=ir?Cl(n,a):Na(n,a))&&(_e=Dl(_e,"onBeforeInput"),0<_e.length&&(be=new Tl("onBeforeInput","beforeinput",null,a,be),Pe.push({event:be,listeners:_e}),be.data=_t))}fp(Pe,i)})}function Uo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Dl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=wt(n,a),g!=null&&c.unshift(Uo(n,g,d)),g=wt(n,i),g!=null&&c.push(Uo(n,g,d))),n=n.return}return c}function Ua(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,i,a,c,d){for(var g=i._reactName,C=[];a!==null&&a!==c;){var V=a,$=V.alternate,_e=V.stateNode;if($!==null&&$===c)break;V.tag===5&&_e!==null&&(V=_e,d?($=wt(a,g),$!=null&&C.unshift(Uo(a,$,V))):d||($=wt(a,g),$!=null&&C.push(Uo(a,$,V)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(pv,`
`).replace(mv,"")}function Ul(n,i,a){if(i=mp(i),mp(n)!==i&&a)throw Error(t(425))}function Ol(){}var Fu=null,ku=null;function Bu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(_v)}:zu;function _v(n){setTimeout(function(){throw n})}function Vu(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Qi(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Qi(i)}function Ms(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Oa=Math.random().toString(36).slice(2),Dr="__reactFiber$"+Oa,Oo="__reactProps$"+Oa,es="__reactContainer$"+Oa,Hu="__reactEvents$"+Oa,xv="__reactListeners$"+Oa,Sv="__reactHandles$"+Oa;function ea(n){var i=n[Dr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[es]||a[Dr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=vp(n);n!==null;){if(a=n[Dr])return a;n=vp(n)}return i}n=a,a=n.parentNode}return null}function Fo(n){return n=n[Dr]||n[es],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fl(n){return n[Oo]||null}var Gu=[],ka=-1;function Es(n){return{current:n}}function Tn(n){0>ka||(n.current=Gu[ka],Gu[ka]=null,ka--)}function yn(n,i){ka++,Gu[ka]=n.current,n.current=i}var ws={},di=Es(ws),Ri=Es(!1),ta=ws;function Ba(n,i){var a=n.type.contextTypes;if(!a)return ws;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ci(n){return n=n.childContextTypes,n!=null}function kl(){Tn(Ri),Tn(di)}function _p(n,i,a){if(di.current!==ws)throw Error(t(168));yn(di,i),yn(Ri,a)}function xp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,de(n)||"Unknown",d));return K({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ws,ta=di.current,yn(di,n),yn(Ri,Ri.current),!0}function Sp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=xp(n,i,ta),c.__reactInternalMemoizedMergedChildContext=n,Tn(Ri),Tn(di),yn(di,n)):Tn(Ri),yn(Ri,a)}var ts=null,zl=!1,Wu=!1;function yp(n){ts===null?ts=[n]:ts.push(n)}function yv(n){zl=!0,yp(n)}function Ts(){if(!Wu&&ts!==null){Wu=!0;var n=0,i=ie;try{var a=ts;for(ie=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ts=null,zl=!1}catch(d){throw ts!==null&&(ts=ts.slice(n+1)),Nt(bi,Ts),d}finally{ie=i,Wu=!1}}return null}var za=[],Va=0,Vl=null,Hl=0,rr=[],sr=0,na=null,ns=1,is="";function ia(n,i){za[Va++]=Hl,za[Va++]=Vl,Vl=n,Hl=i}function Mp(n,i,a){rr[sr++]=ns,rr[sr++]=is,rr[sr++]=na,na=n;var c=ns;n=is;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var g=32-Ve(i)+d;if(30<g){var C=d-d%5;g=(c&(1<<C)-1).toString(32),c>>=C,d-=C,ns=1<<32-Ve(i)+d|a<<d|c,is=g+n}else ns=1<<g|a<<d|c,is=n}function Xu(n){n.return!==null&&(ia(n,1),Mp(n,1,0))}function qu(n){for(;n===Vl;)Vl=za[--Va],za[Va]=null,Hl=za[--Va],za[Va]=null;for(;n===na;)na=rr[--sr],rr[sr]=null,is=rr[--sr],rr[sr]=null,ns=rr[--sr],rr[sr]=null}var Wi=null,Xi=null,Rn=!1,Sr=null;function Ep(n,i){var a=cr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function wp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Wi=n,Xi=Ms(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Wi=n,Xi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=na!==null?{id:ns,overflow:is}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=cr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Wi=n,Xi=null,!0):!1;default:return!1}}function ju(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $u(n){if(Rn){var i=Xi;if(i){var a=i;if(!wp(n,i)){if(ju(n))throw Error(t(418));i=Ms(a.nextSibling);var c=Wi;i&&wp(n,i)?Ep(c,a):(n.flags=n.flags&-4097|2,Rn=!1,Wi=n)}}else{if(ju(n))throw Error(t(418));n.flags=n.flags&-4097|2,Rn=!1,Wi=n}}}function Tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wi=n}function Gl(n){if(n!==Wi)return!1;if(!Rn)return Tp(n),Rn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bu(n.type,n.memoizedProps)),i&&(i=Xi)){if(ju(n))throw bp(),Error(t(418));for(;i;)Ep(n,i),i=Ms(i.nextSibling)}if(Tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Xi=Ms(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Xi=null}}else Xi=Wi?Ms(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=Xi;n;)n=Ms(n.nextSibling)}function Ha(){Xi=Wi=null,Rn=!1}function Yu(n){Sr===null?Sr=[n]:Sr.push(n)}var Mv=b.ReactCurrentBatchConfig;function ko(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var V=d.refs;C===null?delete V[g]:V[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ap(n){var i=n._init;return i(n._payload)}function Rp(n){function i(ue,Q){if(n){var pe=ue.deletions;pe===null?(ue.deletions=[Q],ue.flags|=16):pe.push(Q)}}function a(ue,Q){if(!n)return null;for(;Q!==null;)i(ue,Q),Q=Q.sibling;return null}function c(ue,Q){for(ue=new Map;Q!==null;)Q.key!==null?ue.set(Q.key,Q):ue.set(Q.index,Q),Q=Q.sibling;return ue}function d(ue,Q){return ue=Is(ue,Q),ue.index=0,ue.sibling=null,ue}function g(ue,Q,pe){return ue.index=pe,n?(pe=ue.alternate,pe!==null?(pe=pe.index,pe<Q?(ue.flags|=2,Q):pe):(ue.flags|=2,Q)):(ue.flags|=1048576,Q)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,Q,pe,Ue){return Q===null||Q.tag!==6?(Q=zd(pe,ue.mode,Ue),Q.return=ue,Q):(Q=d(Q,pe),Q.return=ue,Q)}function $(ue,Q,pe,Ue){var dt=pe.type;return dt===k?be(ue,Q,pe.props.children,Ue,pe.key):Q!==null&&(Q.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===fe&&Ap(dt)===Q.type)?(Ue=d(Q,pe.props),Ue.ref=ko(ue,Q,pe),Ue.return=ue,Ue):(Ue=pc(pe.type,pe.key,pe.props,null,ue.mode,Ue),Ue.ref=ko(ue,Q,pe),Ue.return=ue,Ue)}function _e(ue,Q,pe,Ue){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==pe.containerInfo||Q.stateNode.implementation!==pe.implementation?(Q=Vd(pe,ue.mode,Ue),Q.return=ue,Q):(Q=d(Q,pe.children||[]),Q.return=ue,Q)}function be(ue,Q,pe,Ue,dt){return Q===null||Q.tag!==7?(Q=da(pe,ue.mode,Ue,dt),Q.return=ue,Q):(Q=d(Q,pe),Q.return=ue,Q)}function Pe(ue,Q,pe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=zd(""+Q,ue.mode,pe),Q.return=ue,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case I:return pe=pc(Q.type,Q.key,Q.props,null,ue.mode,pe),pe.ref=ko(ue,null,Q),pe.return=ue,pe;case N:return Q=Vd(Q,ue.mode,pe),Q.return=ue,Q;case fe:var Ue=Q._init;return Pe(ue,Ue(Q._payload),pe)}if(Bt(Q)||J(Q))return Q=da(Q,ue.mode,pe,null),Q.return=ue,Q;Wl(ue,Q)}return null}function Te(ue,Q,pe,Ue){var dt=Q!==null?Q.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return dt!==null?null:V(ue,Q,""+pe,Ue);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case I:return pe.key===dt?$(ue,Q,pe,Ue):null;case N:return pe.key===dt?_e(ue,Q,pe,Ue):null;case fe:return dt=pe._init,Te(ue,Q,dt(pe._payload),Ue)}if(Bt(pe)||J(pe))return dt!==null?null:be(ue,Q,pe,Ue,null);Wl(ue,pe)}return null}function Je(ue,Q,pe,Ue,dt){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return ue=ue.get(pe)||null,V(Q,ue,""+Ue,dt);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case I:return ue=ue.get(Ue.key===null?pe:Ue.key)||null,$(Q,ue,Ue,dt);case N:return ue=ue.get(Ue.key===null?pe:Ue.key)||null,_e(Q,ue,Ue,dt);case fe:var vt=Ue._init;return Je(ue,Q,pe,vt(Ue._payload),dt)}if(Bt(Ue)||J(Ue))return ue=ue.get(pe)||null,be(Q,ue,Ue,dt,null);Wl(Q,Ue)}return null}function lt(ue,Q,pe,Ue){for(var dt=null,vt=null,_t=Q,Rt=Q=0,ei=null;_t!==null&&Rt<pe.length;Rt++){_t.index>Rt?(ei=_t,_t=null):ei=_t.sibling;var ln=Te(ue,_t,pe[Rt],Ue);if(ln===null){_t===null&&(_t=ei);break}n&&_t&&ln.alternate===null&&i(ue,_t),Q=g(ln,Q,Rt),vt===null?dt=ln:vt.sibling=ln,vt=ln,_t=ei}if(Rt===pe.length)return a(ue,_t),Rn&&ia(ue,Rt),dt;if(_t===null){for(;Rt<pe.length;Rt++)_t=Pe(ue,pe[Rt],Ue),_t!==null&&(Q=g(_t,Q,Rt),vt===null?dt=_t:vt.sibling=_t,vt=_t);return Rn&&ia(ue,Rt),dt}for(_t=c(ue,_t);Rt<pe.length;Rt++)ei=Je(_t,ue,Rt,pe[Rt],Ue),ei!==null&&(n&&ei.alternate!==null&&_t.delete(ei.key===null?Rt:ei.key),Q=g(ei,Q,Rt),vt===null?dt=ei:vt.sibling=ei,vt=ei);return n&&_t.forEach(function(Ds){return i(ue,Ds)}),Rn&&ia(ue,Rt),dt}function ut(ue,Q,pe,Ue){var dt=J(pe);if(typeof dt!="function")throw Error(t(150));if(pe=dt.call(pe),pe==null)throw Error(t(151));for(var vt=dt=null,_t=Q,Rt=Q=0,ei=null,ln=pe.next();_t!==null&&!ln.done;Rt++,ln=pe.next()){_t.index>Rt?(ei=_t,_t=null):ei=_t.sibling;var Ds=Te(ue,_t,ln.value,Ue);if(Ds===null){_t===null&&(_t=ei);break}n&&_t&&Ds.alternate===null&&i(ue,_t),Q=g(Ds,Q,Rt),vt===null?dt=Ds:vt.sibling=Ds,vt=Ds,_t=ei}if(ln.done)return a(ue,_t),Rn&&ia(ue,Rt),dt;if(_t===null){for(;!ln.done;Rt++,ln=pe.next())ln=Pe(ue,ln.value,Ue),ln!==null&&(Q=g(ln,Q,Rt),vt===null?dt=ln:vt.sibling=ln,vt=ln);return Rn&&ia(ue,Rt),dt}for(_t=c(ue,_t);!ln.done;Rt++,ln=pe.next())ln=Je(_t,ue,Rt,ln.value,Ue),ln!==null&&(n&&ln.alternate!==null&&_t.delete(ln.key===null?Rt:ln.key),Q=g(ln,Q,Rt),vt===null?dt=ln:vt.sibling=ln,vt=ln);return n&&_t.forEach(function(t_){return i(ue,t_)}),Rn&&ia(ue,Rt),dt}function On(ue,Q,pe,Ue){if(typeof pe=="object"&&pe!==null&&pe.type===k&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case I:e:{for(var dt=pe.key,vt=Q;vt!==null;){if(vt.key===dt){if(dt=pe.type,dt===k){if(vt.tag===7){a(ue,vt.sibling),Q=d(vt,pe.props.children),Q.return=ue,ue=Q;break e}}else if(vt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===fe&&Ap(dt)===vt.type){a(ue,vt.sibling),Q=d(vt,pe.props),Q.ref=ko(ue,vt,pe),Q.return=ue,ue=Q;break e}a(ue,vt);break}else i(ue,vt);vt=vt.sibling}pe.type===k?(Q=da(pe.props.children,ue.mode,Ue,pe.key),Q.return=ue,ue=Q):(Ue=pc(pe.type,pe.key,pe.props,null,ue.mode,Ue),Ue.ref=ko(ue,Q,pe),Ue.return=ue,ue=Ue)}return C(ue);case N:e:{for(vt=pe.key;Q!==null;){if(Q.key===vt)if(Q.tag===4&&Q.stateNode.containerInfo===pe.containerInfo&&Q.stateNode.implementation===pe.implementation){a(ue,Q.sibling),Q=d(Q,pe.children||[]),Q.return=ue,ue=Q;break e}else{a(ue,Q);break}else i(ue,Q);Q=Q.sibling}Q=Vd(pe,ue.mode,Ue),Q.return=ue,ue=Q}return C(ue);case fe:return vt=pe._init,On(ue,Q,vt(pe._payload),Ue)}if(Bt(pe))return lt(ue,Q,pe,Ue);if(J(pe))return ut(ue,Q,pe,Ue);Wl(ue,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,Q!==null&&Q.tag===6?(a(ue,Q.sibling),Q=d(Q,pe),Q.return=ue,ue=Q):(a(ue,Q),Q=zd(pe,ue.mode,Ue),Q.return=ue,ue=Q),C(ue)):a(ue,Q)}return On}var Ga=Rp(!0),Cp=Rp(!1),Xl=Es(null),ql=null,Wa=null,Ku=null;function Zu(){Ku=Wa=ql=null}function Ju(n){var i=Xl.current;Tn(Xl),n._currentValue=i}function Qu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xa(n,i){ql=n,Ku=Wa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pi=!0),n.firstContext=null)}function ar(n){var i=n._currentValue;if(Ku!==n)if(n={context:n,memoizedValue:i,next:null},Wa===null){if(ql===null)throw Error(t(308));Wa=n,ql.dependencies={lanes:0,firstContext:n}}else Wa=Wa.next=n;return i}var ra=null;function ed(n){ra===null?ra=[n]:ra.push(n)}function Pp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ed(i)):(a.next=d.next,d.next=a),i.interleaved=a,rs(n,c)}function rs(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var bs=!1;function td(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ss(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function As(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(an&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,rs(n,a)}return d=c.interleaved,d===null?(i.next=i,ed(c)):(i.next=d.next,d.next=i),c.interleaved=i,rs(n,a)}function jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,B(n,a)}}function Np(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $l(n,i,a,c){var d=n.updateQueue;bs=!1;var g=d.firstBaseUpdate,C=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var $=V,_e=$.next;$.next=null,C===null?g=_e:C.next=_e,C=$;var be=n.alternate;be!==null&&(be=be.updateQueue,V=be.lastBaseUpdate,V!==C&&(V===null?be.firstBaseUpdate=_e:V.next=_e,be.lastBaseUpdate=$))}if(g!==null){var Pe=d.baseState;C=0,be=_e=$=null,V=g;do{var Te=V.lane,Je=V.eventTime;if((c&Te)===Te){be!==null&&(be=be.next={eventTime:Je,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var lt=n,ut=V;switch(Te=i,Je=a,ut.tag){case 1:if(lt=ut.payload,typeof lt=="function"){Pe=lt.call(Je,Pe,Te);break e}Pe=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ut.payload,Te=typeof lt=="function"?lt.call(Je,Pe,Te):lt,Te==null)break e;Pe=K({},Pe,Te);break e;case 2:bs=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Te=d.effects,Te===null?d.effects=[V]:Te.push(V))}else Je={eventTime:Je,lane:Te,tag:V.tag,payload:V.payload,callback:V.callback,next:null},be===null?(_e=be=Je,$=Pe):be=be.next=Je,C|=Te;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;Te=V,V=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(be===null&&($=Pe),d.baseState=$,d.firstBaseUpdate=_e,d.lastBaseUpdate=be,i=d.shared.interleaved,i!==null){d=i;do C|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);oa|=C,n.lanes=C,n.memoizedState=Pe}}function Ip(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Bo={},Ur=Es(Bo),zo=Es(Bo),Vo=Es(Bo);function sa(n){if(n===Bo)throw Error(t(174));return n}function nd(n,i){switch(yn(Vo,i),yn(zo,n),yn(Ur,Bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Tn(Ur),yn(Ur,i)}function qa(){Tn(Ur),Tn(zo),Tn(Vo)}function Dp(n){sa(Vo.current);var i=sa(Ur.current),a=w(i,n.type);i!==a&&(yn(zo,n),yn(Ur,a))}function id(n){zo.current===n&&(Tn(Ur),Tn(zo))}var Ln=Es(0);function Yl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rd=[];function sd(){for(var n=0;n<rd.length;n++)rd[n]._workInProgressVersionPrimary=null;rd.length=0}var Kl=b.ReactCurrentDispatcher,ad=b.ReactCurrentBatchConfig,aa=0,Nn=null,qn=null,Jn=null,Zl=!1,Ho=!1,Go=0,Ev=0;function fi(){throw Error(t(321))}function od(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xr(n[a],i[a]))return!1;return!0}function ld(n,i,a,c,d,g){if(aa=g,Nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Kl.current=n===null||n.memoizedState===null?Av:Rv,n=a(c,d),Ho){g=0;do{if(Ho=!1,Go=0,25<=g)throw Error(t(301));g+=1,Jn=qn=null,i.updateQueue=null,Kl.current=Cv,n=a(c,d)}while(Ho)}if(Kl.current=ec,i=qn!==null&&qn.next!==null,aa=0,Jn=qn=Nn=null,Zl=!1,i)throw Error(t(300));return n}function cd(){var n=Go!==0;return Go=0,n}function Or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?Nn.memoizedState=Jn=n:Jn=Jn.next=n,Jn}function or(){if(qn===null){var n=Nn.alternate;n=n!==null?n.memoizedState:null}else n=qn.next;var i=Jn===null?Nn.memoizedState:Jn.next;if(i!==null)Jn=i,qn=n;else{if(n===null)throw Error(t(310));qn=n,n={memoizedState:qn.memoizedState,baseState:qn.baseState,baseQueue:qn.baseQueue,queue:qn.queue,next:null},Jn===null?Nn.memoizedState=Jn=n:Jn=Jn.next=n}return Jn}function Wo(n,i){return typeof i=="function"?i(n):i}function ud(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=qn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var C=d.next;d.next=g.next,g.next=C}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=C=null,$=null,_e=g;do{var be=_e.lane;if((aa&be)===be)$!==null&&($=$.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),c=_e.hasEagerState?_e.eagerState:n(c,_e.action);else{var Pe={lane:be,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};$===null?(V=$=Pe,C=c):$=$.next=Pe,Nn.lanes|=be,oa|=be}_e=_e.next}while(_e!==null&&_e!==g);$===null?C=c:$.next=V,xr(c,i.memoizedState)||(Pi=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=$,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Nn.lanes|=g,oa|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function dd(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var C=d=d.next;do g=n(g,C.action),C=C.next;while(C!==d);xr(g,i.memoizedState)||(Pi=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Up(){}function Op(n,i){var a=Nn,c=or(),d=i(),g=!xr(c.memoizedState,d);if(g&&(c.memoizedState=d,Pi=!0),c=c.queue,fd(Bp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Jn!==null&&Jn.memoizedState.tag&1){if(a.flags|=2048,Xo(9,kp.bind(null,a,c,d,i),void 0,null),Qn===null)throw Error(t(349));(aa&30)!==0||Fp(a,i,d)}return d}function Fp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Nn.updateQueue,i===null?(i={lastEffect:null,stores:null},Nn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function kp(n,i,a,c){i.value=a,i.getSnapshot=c,zp(i)&&Vp(n)}function Bp(n,i,a){return a(function(){zp(i)&&Vp(n)})}function zp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xr(n,a)}catch{return!0}}function Vp(n){var i=rs(n,1);i!==null&&wr(i,n,1,-1)}function Hp(n){var i=Or();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},i.queue=n,n=n.dispatch=bv.bind(null,Nn,n),[i.memoizedState,n]}function Xo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Nn.updateQueue,i===null?(i={lastEffect:null,stores:null},Nn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Gp(){return or().memoizedState}function Jl(n,i,a,c){var d=Or();Nn.flags|=n,d.memoizedState=Xo(1|i,a,void 0,c===void 0?null:c)}function Ql(n,i,a,c){var d=or();c=c===void 0?null:c;var g=void 0;if(qn!==null){var C=qn.memoizedState;if(g=C.destroy,c!==null&&od(c,C.deps)){d.memoizedState=Xo(i,a,g,c);return}}Nn.flags|=n,d.memoizedState=Xo(1|i,a,g,c)}function Wp(n,i){return Jl(8390656,8,n,i)}function fd(n,i){return Ql(2048,8,n,i)}function Xp(n,i){return Ql(4,2,n,i)}function qp(n,i){return Ql(4,4,n,i)}function jp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $p(n,i,a){return a=a!=null?a.concat([n]):null,Ql(4,4,jp.bind(null,i,n),a)}function hd(){}function Yp(n,i){var a=or();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&od(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Kp(n,i){var a=or();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&od(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Zp(n,i,a){return(aa&21)===0?(n.baseState&&(n.baseState=!1,Pi=!0),n.memoizedState=a):(xr(a,i)||(a=bn(),Nn.lanes|=a,oa|=a,n.baseState=!0),i)}function wv(n,i){var a=ie;ie=a!==0&&4>a?a:4,n(!0);var c=ad.transition;ad.transition={};try{n(!1),i()}finally{ie=a,ad.transition=c}}function Jp(){return or().memoizedState}function Tv(n,i,a){var c=Ls(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Qp(n))em(i,a);else if(a=Pp(n,i,a,c),a!==null){var d=Mi();wr(a,n,c,d),tm(a,i,c)}}function bv(n,i,a){var c=Ls(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qp(n))em(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,V=g(C,a);if(d.hasEagerState=!0,d.eagerState=V,xr(V,C)){var $=i.interleaved;$===null?(d.next=d,ed(i)):(d.next=$.next,$.next=d),i.interleaved=d;return}}catch{}finally{}a=Pp(n,i,d,c),a!==null&&(d=Mi(),wr(a,n,c,d),tm(a,i,c))}}function Qp(n){var i=n.alternate;return n===Nn||i!==null&&i===Nn}function em(n,i){Ho=Zl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function tm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,B(n,a)}}var ec={readContext:ar,useCallback:fi,useContext:fi,useEffect:fi,useImperativeHandle:fi,useInsertionEffect:fi,useLayoutEffect:fi,useMemo:fi,useReducer:fi,useRef:fi,useState:fi,useDebugValue:fi,useDeferredValue:fi,useTransition:fi,useMutableSource:fi,useSyncExternalStore:fi,useId:fi,unstable_isNewReconciler:!1},Av={readContext:ar,useCallback:function(n,i){return Or().memoizedState=[n,i===void 0?null:i],n},useContext:ar,useEffect:Wp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Jl(4194308,4,jp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Jl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Jl(4,2,n,i)},useMemo:function(n,i){var a=Or();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Or();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Tv.bind(null,Nn,n),[c.memoizedState,n]},useRef:function(n){var i=Or();return n={current:n},i.memoizedState=n},useState:Hp,useDebugValue:hd,useDeferredValue:function(n){return Or().memoizedState=n},useTransition:function(){var n=Hp(!1),i=n[0];return n=wv.bind(null,n[1]),Or().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Nn,d=Or();if(Rn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Qn===null)throw Error(t(349));(aa&30)!==0||Fp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,Wp(Bp.bind(null,c,g,n),[n]),c.flags|=2048,Xo(9,kp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Or(),i=Qn.identifierPrefix;if(Rn){var a=is,c=ns;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Go++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ev++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:ar,useCallback:Yp,useContext:ar,useEffect:fd,useImperativeHandle:$p,useInsertionEffect:Xp,useLayoutEffect:qp,useMemo:Kp,useReducer:ud,useRef:Gp,useState:function(){return ud(Wo)},useDebugValue:hd,useDeferredValue:function(n){var i=or();return Zp(i,qn.memoizedState,n)},useTransition:function(){var n=ud(Wo)[0],i=or().memoizedState;return[n,i]},useMutableSource:Up,useSyncExternalStore:Op,useId:Jp,unstable_isNewReconciler:!1},Cv={readContext:ar,useCallback:Yp,useContext:ar,useEffect:fd,useImperativeHandle:$p,useInsertionEffect:Xp,useLayoutEffect:qp,useMemo:Kp,useReducer:dd,useRef:Gp,useState:function(){return dd(Wo)},useDebugValue:hd,useDeferredValue:function(n){var i=or();return qn===null?i.memoizedState=n:Zp(i,qn.memoizedState,n)},useTransition:function(){var n=dd(Wo)[0],i=or().memoizedState;return[n,i]},useMutableSource:Up,useSyncExternalStore:Op,useId:Jp,unstable_isNewReconciler:!1};function yr(n,i){if(n&&n.defaultProps){i=K({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pd(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:K({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tc={isMounted:function(n){return(n=n._reactInternals)?fn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Mi(),d=Ls(n),g=ss(c,d);g.payload=i,a!=null&&(g.callback=a),i=As(n,g,d),i!==null&&(wr(i,n,d,c),jl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Mi(),d=Ls(n),g=ss(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=As(n,g,d),i!==null&&(wr(i,n,d,c),jl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mi(),c=Ls(n),d=ss(a,c);d.tag=2,i!=null&&(d.callback=i),i=As(n,d,c),i!==null&&(wr(i,n,c,a),jl(i,n,c))}};function nm(n,i,a,c,d,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,C):i.prototype&&i.prototype.isPureReactComponent?!Lo(a,c)||!Lo(d,g):!0}function im(n,i,a){var c=!1,d=ws,g=i.contextType;return typeof g=="object"&&g!==null?g=ar(g):(d=Ci(i)?ta:di.current,c=i.contextTypes,g=(c=c!=null)?Ba(n,d):ws),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tc,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function rm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tc.enqueueReplaceState(i,i.state,null)}function md(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},td(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=ar(g):(g=Ci(i)?ta:di.current,d.context=Ba(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(pd(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&tc.enqueueReplaceState(d,d.state,null),$l(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ja(n,i){try{var a="",c=i;do a+=Xe(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function gd(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Pv=typeof WeakMap=="function"?WeakMap:Map;function sm(n,i,a){a=ss(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){lc||(lc=!0,Nd=c),vd(n,i)},a}function am(n,i,a){a=ss(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){vd(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){vd(n,i),typeof c!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function om(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Pv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Wv.bind(null,n,i,a),i.then(n,n))}function lm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ss(-1,1),i.tag=2,As(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Lv=b.ReactCurrentOwner,Pi=!1;function yi(n,i,a,c){i.child=n===null?Cp(i,null,a,c):Ga(i,n.child,a,c)}function um(n,i,a,c,d){a=a.render;var g=i.ref;return Xa(i,d),c=ld(n,i,a,c,g,d),a=cd(),n!==null&&!Pi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,as(n,i,d)):(Rn&&a&&Xu(i),i.flags|=1,yi(n,i,c,d),i.child)}function dm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Bd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,fm(n,i,g,c,d)):(n=pc(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(C,c)&&n.ref===i.ref)return as(n,i,d)}return i.flags|=1,n=Is(g,c),n.ref=i.ref,n.return=i,i.child=n}function fm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Lo(g,c)&&n.ref===i.ref)if(Pi=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Pi=!0);else return i.lanes=n.lanes,as(n,i,d)}return _d(n,i,a,c,d)}function hm(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},yn(Ya,qi),qi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,yn(Ya,qi),qi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,yn(Ya,qi),qi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,yn(Ya,qi),qi|=c;return yi(n,i,d,a),i.child}function pm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _d(n,i,a,c,d){var g=Ci(a)?ta:di.current;return g=Ba(i,g),Xa(i,d),a=ld(n,i,a,c,g,d),c=cd(),n!==null&&!Pi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,as(n,i,d)):(Rn&&c&&Xu(i),i.flags|=1,yi(n,i,a,d),i.child)}function mm(n,i,a,c,d){if(Ci(a)){var g=!0;Bl(i)}else g=!1;if(Xa(i,d),i.stateNode===null)ic(n,i),im(i,a,c),md(i,a,c,d),c=!0;else if(n===null){var C=i.stateNode,V=i.memoizedProps;C.props=V;var $=C.context,_e=a.contextType;typeof _e=="object"&&_e!==null?_e=ar(_e):(_e=Ci(a)?ta:di.current,_e=Ba(i,_e));var be=a.getDerivedStateFromProps,Pe=typeof be=="function"||typeof C.getSnapshotBeforeUpdate=="function";Pe||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==c||$!==_e)&&rm(i,C,c,_e),bs=!1;var Te=i.memoizedState;C.state=Te,$l(i,c,C,d),$=i.memoizedState,V!==c||Te!==$||Ri.current||bs?(typeof be=="function"&&(pd(i,a,be,c),$=i.memoizedState),(V=bs||nm(i,a,V,c,Te,$,_e))?(Pe||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=$),C.props=c,C.state=$,C.context=_e,c=V):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Lp(n,i),V=i.memoizedProps,_e=i.type===i.elementType?V:yr(i.type,V),C.props=_e,Pe=i.pendingProps,Te=C.context,$=a.contextType,typeof $=="object"&&$!==null?$=ar($):($=Ci(a)?ta:di.current,$=Ba(i,$));var Je=a.getDerivedStateFromProps;(be=typeof Je=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==Pe||Te!==$)&&rm(i,C,c,$),bs=!1,Te=i.memoizedState,C.state=Te,$l(i,c,C,d);var lt=i.memoizedState;V!==Pe||Te!==lt||Ri.current||bs?(typeof Je=="function"&&(pd(i,a,Je,c),lt=i.memoizedState),(_e=bs||nm(i,a,_e,c,Te,lt,$)||!1)?(be||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,lt,$),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,lt,$)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),C.props=c,C.state=lt,C.context=$,c=_e):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),c=!1)}return xd(n,i,a,c,g,d)}function xd(n,i,a,c,d,g){pm(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return d&&Sp(i,a,!1),as(n,i,g);c=i.stateNode,Lv.current=i;var V=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Ga(i,n.child,null,g),i.child=Ga(i,null,V,g)):yi(n,i,V,g),i.memoizedState=c.state,d&&Sp(i,a,!0),i.child}function gm(n){var i=n.stateNode;i.pendingContext?_p(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_p(n,i.context,!1),nd(n,i.containerInfo)}function vm(n,i,a,c,d){return Ha(),Yu(d),i.flags|=256,yi(n,i,a,c),i.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,i,a){var c=i.pendingProps,d=Ln.current,g=!1,C=(i.flags&128)!==0,V;if((V=C)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),yn(Ln,d&1),n===null)return $u(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,g?(c=i.mode,g=i.child,C={mode:"hidden",children:C},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=mc(C,c,0,null),n=da(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=yd(a),i.memoizedState=Sd,n):Md(i,C));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return Nv(n,i,C,c,V,d,a);if(g){g=c.fallback,C=i.mode,d=n.child,V=d.sibling;var $={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=$,i.deletions=null):(c=Is(d,$),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=Is(V,g):(g=da(g,C,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,C=n.child.memoizedState,C=C===null?yd(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=Sd,c}return g=n.child,n=g.sibling,c=Is(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Md(n,i){return i=mc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nc(n,i,a,c){return c!==null&&Yu(c),Ga(i,n.child,null,a),n=Md(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nv(n,i,a,c,d,g,C){if(a)return i.flags&256?(i.flags&=-257,c=gd(Error(t(422))),nc(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=mc({mode:"visible",children:c.children},d,0,null),g=da(g,d,C,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ga(i,n.child,null,C),i.child.memoizedState=yd(C),i.memoizedState=Sd,g);if((i.mode&1)===0)return nc(n,i,C,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=gd(g,c,void 0),nc(n,i,C,c)}if(V=(C&n.childLanes)!==0,Pi||V){if(c=Qn,c!==null){switch(C&-C){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|C))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,rs(n,d),wr(c,n,d,-1))}return kd(),c=gd(Error(t(421))),nc(n,i,C,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Xv.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Xi=Ms(d.nextSibling),Wi=i,Rn=!0,Sr=null,n!==null&&(rr[sr++]=ns,rr[sr++]=is,rr[sr++]=na,ns=n.id,is=n.overflow,na=i),i=Md(i,c.children),i.flags|=4096,i)}function xm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Qu(n.return,i,a)}function Ed(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Sm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(yi(n,i,c.children,a),c=Ln.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xm(n,a,i);else if(n.tag===19)xm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(yn(Ln,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Yl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ed(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Yl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ed(i,!0,a,null,g);break;case"together":Ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ic(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function as(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),oa|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Is(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Is(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Iv(n,i,a){switch(i.tag){case 3:gm(i),Ha();break;case 5:Dp(i);break;case 1:Ci(i.type)&&Bl(i);break;case 4:nd(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;yn(Xl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(yn(Ln,Ln.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?_m(n,i,a):(yn(Ln,Ln.current&1),n=as(n,i,a),n!==null?n.sibling:null);yn(Ln,Ln.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),yn(Ln,Ln.current),c)break;return null;case 22:case 23:return i.lanes=0,hm(n,i,a)}return as(n,i,a)}var ym,wd,Mm,Em;ym=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wd=function(){},Mm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,sa(Ur.current);var g=null;switch(a){case"input":d=ht(n,d),c=ht(n,c),g=[];break;case"select":d=K({},d,{value:void 0}),c=K({},c,{value:void 0}),g=[];break;case"textarea":d=rn(n,d),c=rn(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ol)}We(a,c);var C;a=null;for(_e in d)if(!c.hasOwnProperty(_e)&&d.hasOwnProperty(_e)&&d[_e]!=null)if(_e==="style"){var V=d[_e];for(C in V)V.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else _e!=="dangerouslySetInnerHTML"&&_e!=="children"&&_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&_e!=="autoFocus"&&(o.hasOwnProperty(_e)?g||(g=[]):(g=g||[]).push(_e,null));for(_e in c){var $=c[_e];if(V=d!=null?d[_e]:void 0,c.hasOwnProperty(_e)&&$!==V&&($!=null||V!=null))if(_e==="style")if(V){for(C in V)!V.hasOwnProperty(C)||$&&$.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in $)$.hasOwnProperty(C)&&V[C]!==$[C]&&(a||(a={}),a[C]=$[C])}else a||(g||(g=[]),g.push(_e,a)),a=$;else _e==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,V=V?V.__html:void 0,$!=null&&V!==$&&(g=g||[]).push(_e,$)):_e==="children"?typeof $!="string"&&typeof $!="number"||(g=g||[]).push(_e,""+$):_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&(o.hasOwnProperty(_e)?($!=null&&_e==="onScroll"&&wn("scroll",n),g||V===$||(g=[])):(g=g||[]).push(_e,$))}a&&(g=g||[]).push("style",a);var _e=g;(i.updateQueue=_e)&&(i.flags|=4)}},Em=function(n,i,a,c){a!==c&&(i.flags|=4)};function qo(n,i){if(!Rn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function hi(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Dv(n,i,a){var c=i.pendingProps;switch(qu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hi(i),null;case 1:return Ci(i.type)&&kl(),hi(i),null;case 3:return c=i.stateNode,qa(),Tn(Ri),Tn(di),sd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sr!==null&&(Ud(Sr),Sr=null))),wd(n,i),hi(i),null;case 5:id(i);var d=sa(Vo.current);if(a=i.type,n!==null&&i.stateNode!=null)Mm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return hi(i),null}if(n=sa(Ur.current),Gl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Dr]=i,c[Oo]=g,n=(i.mode&1)!==0,a){case"dialog":wn("cancel",c),wn("close",c);break;case"iframe":case"object":case"embed":wn("load",c);break;case"video":case"audio":for(d=0;d<Io.length;d++)wn(Io[d],c);break;case"source":wn("error",c);break;case"img":case"image":case"link":wn("error",c),wn("load",c);break;case"details":wn("toggle",c);break;case"input":pt(c,g),wn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},wn("invalid",c);break;case"textarea":j(c,g),wn("invalid",c)}We(a,g),d=null;for(var C in g)if(g.hasOwnProperty(C)){var V=g[C];C==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&Ul(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&Ul(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(C)&&V!=null&&C==="onScroll"&&wn("scroll",c)}switch(a){case"input":ze(c),jt(c,g,!0);break;case"textarea":ze(c),kt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ol)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Dr]=i,n[Oo]=c,ym(n,i,!1,!1),i.stateNode=n;e:{switch(C=Le(a,c),a){case"dialog":wn("cancel",n),wn("close",n),d=c;break;case"iframe":case"object":case"embed":wn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Io.length;d++)wn(Io[d],n);d=c;break;case"source":wn("error",n),d=c;break;case"img":case"image":case"link":wn("error",n),wn("load",n),d=c;break;case"details":wn("toggle",n),d=c;break;case"input":pt(n,c),d=ht(n,c),wn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=K({},c,{value:void 0}),wn("invalid",n);break;case"textarea":j(n,c),d=rn(n,c),wn("invalid",n);break;default:d=c}We(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var $=V[g];g==="style"?Se(n,$):g==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&le(n,$)):g==="children"?typeof $=="string"?(a!=="textarea"||$!=="")&&he(n,$):typeof $=="number"&&he(n,""+$):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?$!=null&&g==="onScroll"&&wn("scroll",n):$!=null&&U(n,g,$,C))}switch(a){case"input":ze(n),jt(n,c,!1);break;case"textarea":ze(n),kt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ct(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ct(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ol)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hi(i),null;case 6:if(n&&i.stateNode!=null)Em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=sa(Vo.current),sa(Ur.current),Gl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Dr]=i,(g=c.nodeValue!==a)&&(n=Wi,n!==null))switch(n.tag){case 3:Ul(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ul(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Dr]=i,i.stateNode=c}return hi(i),null;case 13:if(Tn(Ln),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Rn&&Xi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bp(),Ha(),i.flags|=98560,g=!1;else if(g=Gl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Dr]=i}else Ha(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hi(i),g=!1}else Sr!==null&&(Ud(Sr),Sr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ln.current&1)!==0?jn===0&&(jn=3):kd())),i.updateQueue!==null&&(i.flags|=4),hi(i),null);case 4:return qa(),wd(n,i),n===null&&Do(i.stateNode.containerInfo),hi(i),null;case 10:return Ju(i.type._context),hi(i),null;case 17:return Ci(i.type)&&kl(),hi(i),null;case 19:if(Tn(Ln),g=i.memoizedState,g===null)return hi(i),null;if(c=(i.flags&128)!==0,C=g.rendering,C===null)if(c)qo(g,!1);else{if(jn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Yl(n),C!==null){for(i.flags|=128,qo(g,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return yn(Ln,Ln.current&1|2),i.child}n=n.sibling}g.tail!==null&&Kt()>Ka&&(i.flags|=128,c=!0,qo(g,!1),i.lanes=4194304)}else{if(!c)if(n=Yl(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!Rn)return hi(i),null}else 2*Kt()-g.renderingStartTime>Ka&&a!==1073741824&&(i.flags|=128,c=!0,qo(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Kt(),i.sibling=null,a=Ln.current,yn(Ln,c?a&1|2:a&1),i):(hi(i),null);case 22:case 23:return Fd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(qi&1073741824)!==0&&(hi(i),i.subtreeFlags&6&&(i.flags|=8192)):hi(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Uv(n,i){switch(qu(i),i.tag){case 1:return Ci(i.type)&&kl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return qa(),Tn(Ri),Tn(di),sd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return id(i),null;case 13:if(Tn(Ln),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ha()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Tn(Ln),null;case 4:return qa(),null;case 10:return Ju(i.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var rc=!1,pi=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,ot=null;function $a(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Un(n,i,c)}else a.current=null}function Td(n,i,a){try{a()}catch(c){Un(n,i,c)}}var wm=!1;function Fv(n,i){if(Fu=_s,n=np(),Cu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,V=-1,$=-1,_e=0,be=0,Pe=n,Te=null;t:for(;;){for(var Je;Pe!==a||d!==0&&Pe.nodeType!==3||(V=C+d),Pe!==g||c!==0&&Pe.nodeType!==3||($=C+c),Pe.nodeType===3&&(C+=Pe.nodeValue.length),(Je=Pe.firstChild)!==null;)Te=Pe,Pe=Je;for(;;){if(Pe===n)break t;if(Te===a&&++_e===d&&(V=C),Te===g&&++be===c&&($=C),(Je=Pe.nextSibling)!==null)break;Pe=Te,Te=Pe.parentNode}Pe=Je}a=V===-1||$===-1?null:{start:V,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(ku={focusedElem:n,selectionRange:a},_s=!1,ot=i;ot!==null;)if(i=ot,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ot=n;else for(;ot!==null;){i=ot;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var ut=lt.memoizedProps,On=lt.memoizedState,ue=i.stateNode,Q=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ut:yr(i.type,ut),On);ue.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){Un(i,i.return,Ue)}if(n=i.sibling,n!==null){n.return=i.return,ot=n;break}ot=i.return}return lt=wm,wm=!1,lt}function jo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Td(i,a,g)}d=d.next}while(d!==c)}}function sc(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Tm(n){var i=n.alternate;i!==null&&(n.alternate=null,Tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Dr],delete i[Oo],delete i[Hu],delete i[xv],delete i[Sv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ad(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ol));else if(c!==4&&(n=n.child,n!==null))for(Ad(n,i,a),n=n.sibling;n!==null;)Ad(n,i,a),n=n.sibling}function Rd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rd(n,i,a),n=n.sibling;n!==null;)Rd(n,i,a),n=n.sibling}var oi=null,Mr=!1;function Rs(n,i,a){for(a=a.child;a!==null;)Rm(n,i,a),a=a.sibling}function Rm(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:pi||$a(a,i);case 6:var c=oi,d=Mr;oi=null,Rs(n,i,a),oi=c,Mr=d,oi!==null&&(Mr?(n=oi,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):oi.removeChild(a.stateNode));break;case 18:oi!==null&&(Mr?(n=oi,a=a.stateNode,n.nodeType===8?Vu(n.parentNode,a):n.nodeType===1&&Vu(n,a),Qi(n)):Vu(oi,a.stateNode));break;case 4:c=oi,d=Mr,oi=a.stateNode.containerInfo,Mr=!0,Rs(n,i,a),oi=c,Mr=d;break;case 0:case 11:case 14:case 15:if(!pi&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Td(a,i,C),d=d.next}while(d!==c)}Rs(n,i,a);break;case 1:if(!pi&&($a(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){Un(a,i,V)}Rs(n,i,a);break;case 21:Rs(n,i,a);break;case 22:a.mode&1?(pi=(c=pi)||a.memoizedState!==null,Rs(n,i,a),pi=c):Rs(n,i,a);break;default:Rs(n,i,a)}}function Cm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ov),i.forEach(function(c){var d=qv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Er(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,C=i,V=C;e:for(;V!==null;){switch(V.tag){case 5:oi=V.stateNode,Mr=!1;break e;case 3:oi=V.stateNode.containerInfo,Mr=!0;break e;case 4:oi=V.stateNode.containerInfo,Mr=!0;break e}V=V.return}if(oi===null)throw Error(t(160));Rm(g,C,d),oi=null,Mr=!1;var $=d.alternate;$!==null&&($.return=null),d.return=null}catch(_e){Un(d,i,_e)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pm(i,n),i=i.sibling}function Pm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Er(i,n),Fr(n),c&4){try{jo(3,n,n.return),sc(3,n)}catch(ut){Un(n,n.return,ut)}try{jo(5,n,n.return)}catch(ut){Un(n,n.return,ut)}}break;case 1:Er(i,n),Fr(n),c&512&&a!==null&&$a(a,a.return);break;case 5:if(Er(i,n),Fr(n),c&512&&a!==null&&$a(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch(ut){Un(n,n.return,ut)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,V=n.type,$=n.updateQueue;if(n.updateQueue=null,$!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&Ft(d,g),Le(V,C);var _e=Le(V,g);for(C=0;C<$.length;C+=2){var be=$[C],Pe=$[C+1];be==="style"?Se(d,Pe):be==="dangerouslySetInnerHTML"?le(d,Pe):be==="children"?he(d,Pe):U(d,be,Pe,_e)}switch(V){case"input":Mt(d,g);break;case"textarea":Gt(d,g);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Je=g.value;Je!=null?Ct(d,!!g.multiple,Je,!1):Te!==!!g.multiple&&(g.defaultValue!=null?Ct(d,!!g.multiple,g.defaultValue,!0):Ct(d,!!g.multiple,g.multiple?[]:"",!1))}d[Oo]=g}catch(ut){Un(n,n.return,ut)}}break;case 6:if(Er(i,n),Fr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ut){Un(n,n.return,ut)}}break;case 3:if(Er(i,n),Fr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qi(i.containerInfo)}catch(ut){Un(n,n.return,ut)}break;case 4:Er(i,n),Fr(n);break;case 13:Er(i,n),Fr(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Ld=Kt())),c&4&&Cm(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(pi=(_e=pi)||be,Er(i,n),pi=_e):Er(i,n),Fr(n),c&8192){if(_e=n.memoizedState!==null,(n.stateNode.isHidden=_e)&&!be&&(n.mode&1)!==0)for(ot=n,be=n.child;be!==null;){for(Pe=ot=be;ot!==null;){switch(Te=ot,Je=Te.child,Te.tag){case 0:case 11:case 14:case 15:jo(4,Te,Te.return);break;case 1:$a(Te,Te.return);var lt=Te.stateNode;if(typeof lt.componentWillUnmount=="function"){c=Te,a=Te.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(ut){Un(c,a,ut)}}break;case 5:$a(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Im(Pe);continue}}Je!==null?(Je.return=Te,ot=Je):Im(Pe)}be=be.sibling}e:for(be=null,Pe=n;;){if(Pe.tag===5){if(be===null){be=Pe;try{d=Pe.stateNode,_e?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=Pe.stateNode,$=Pe.memoizedProps.style,C=$!=null&&$.hasOwnProperty("display")?$.display:null,V.style.display=xe("display",C))}catch(ut){Un(n,n.return,ut)}}}else if(Pe.tag===6){if(be===null)try{Pe.stateNode.nodeValue=_e?"":Pe.memoizedProps}catch(ut){Un(n,n.return,ut)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;be===Pe&&(be=null),Pe=Pe.return}be===Pe&&(be=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Er(i,n),Fr(n),c&4&&Cm(n);break;case 21:break;default:Er(i,n),Fr(n)}}function Fr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var g=Am(n);Rd(n,g,d);break;case 3:case 4:var C=c.stateNode.containerInfo,V=Am(n);Ad(n,V,C);break;default:throw Error(t(161))}}catch($){Un(n,n.return,$)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function kv(n,i,a){ot=n,Lm(n)}function Lm(n,i,a){for(var c=(n.mode&1)!==0;ot!==null;){var d=ot,g=d.child;if(d.tag===22&&c){var C=d.memoizedState!==null||rc;if(!C){var V=d.alternate,$=V!==null&&V.memoizedState!==null||pi;V=rc;var _e=pi;if(rc=C,(pi=$)&&!_e)for(ot=d;ot!==null;)C=ot,$=C.child,C.tag===22&&C.memoizedState!==null?Dm(d):$!==null?($.return=C,ot=$):Dm(d);for(;g!==null;)ot=g,Lm(g),g=g.sibling;ot=d,rc=V,pi=_e}Nm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ot=g):Nm(n)}}function Nm(n){for(;ot!==null;){var i=ot;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pi||sc(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!pi)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:yr(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Ip(i,g,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ip(i,C,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var $=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&a.focus();break;case"img":$.src&&(a.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var _e=i.alternate;if(_e!==null){var be=_e.memoizedState;if(be!==null){var Pe=be.dehydrated;Pe!==null&&Qi(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pi||i.flags&512&&bd(i)}catch(Te){Un(i,i.return,Te)}}if(i===n){ot=null;break}if(a=i.sibling,a!==null){a.return=i.return,ot=a;break}ot=i.return}}function Im(n){for(;ot!==null;){var i=ot;if(i===n){ot=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ot=a;break}ot=i.return}}function Dm(n){for(;ot!==null;){var i=ot;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sc(4,i)}catch($){Un(i,a,$)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch($){Un(i,d,$)}}var g=i.return;try{bd(i)}catch($){Un(i,g,$)}break;case 5:var C=i.return;try{bd(i)}catch($){Un(i,C,$)}}}catch($){Un(i,i.return,$)}if(i===n){ot=null;break}var V=i.sibling;if(V!==null){V.return=i.return,ot=V;break}ot=i.return}}var Bv=Math.ceil,ac=b.ReactCurrentDispatcher,Cd=b.ReactCurrentOwner,lr=b.ReactCurrentBatchConfig,an=0,Qn=null,Vn=null,li=0,qi=0,Ya=Es(0),jn=0,$o=null,oa=0,oc=0,Pd=0,Yo=null,Li=null,Ld=0,Ka=1/0,os=null,lc=!1,Nd=null,Cs=null,cc=!1,Ps=null,uc=0,Ko=0,Id=null,dc=-1,fc=0;function Mi(){return(an&6)!==0?Kt():dc!==-1?dc:dc=Kt()}function Ls(n){return(n.mode&1)===0?1:(an&2)!==0&&li!==0?li&-li:Mv.transition!==null?(fc===0&&(fc=bn()),fc):(n=ie,n!==0||(n=window.event,n=n===void 0?16:$s(n.type)),n)}function wr(n,i,a,c){if(50<Ko)throw Ko=0,Id=null,Error(t(185));pn(n,a,c),((an&2)===0||n!==Qn)&&(n===Qn&&((an&2)===0&&(oc|=a),jn===4&&Ns(n,li)),Ni(n,c),a===1&&an===0&&(i.mode&1)===0&&(Ka=Kt()+500,zl&&Ts()))}function Ni(n,i){var a=n.callbackNode;Zt(n,i);var c=Dt(n,n===Qn?li:0);if(c===0)a!==null&&Dn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Dn(a),i===1)n.tag===0?yv(Om.bind(null,n)):yp(Om.bind(null,n)),vv(function(){(an&6)===0&&Ts()}),a=null;else{switch(ye(c)){case 1:a=bi;break;case 4:a=Zi;break;case 16:a=P;break;case 536870912:a=me;break;default:a=P}a=Wm(a,Um.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Um(n,i){if(dc=-1,fc=0,(an&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Za()&&n.callbackNode!==a)return null;var c=Dt(n,n===Qn?li:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hc(n,c);else{i=c;var d=an;an|=2;var g=km();(Qn!==n||li!==i)&&(os=null,Ka=Kt()+500,ca(n,i));do try{Hv();break}catch(V){Fm(n,V)}while(!0);Zu(),ac.current=g,an=d,Vn!==null?i=0:(Qn=null,li=0,i=jn)}if(i!==0){if(i===2&&(d=$t(n),d!==0&&(c=d,i=Dd(n,d))),i===1)throw a=$o,ca(n,0),Ns(n,c),Ni(n,Kt()),a;if(i===6)Ns(n,c);else{if(d=n.current.alternate,(c&30)===0&&!zv(d)&&(i=hc(n,c),i===2&&(g=$t(n),g!==0&&(c=g,i=Dd(n,g))),i===1))throw a=$o,ca(n,0),Ns(n,c),Ni(n,Kt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ua(n,Li,os);break;case 3:if(Ns(n,c),(c&130023424)===c&&(i=Ld+500-Kt(),10<i)){if(Dt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Mi(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zu(ua.bind(null,n,Li,os),i);break}ua(n,Li,os);break;case 4:if(Ns(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var C=31-Ve(c);g=1<<C,C=i[C],C>d&&(d=C),c&=~g}if(c=d,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Bv(c/1960))-c,10<c){n.timeoutHandle=zu(ua.bind(null,n,Li,os),c);break}ua(n,Li,os);break;case 5:ua(n,Li,os);break;default:throw Error(t(329))}}}return Ni(n,Kt()),n.callbackNode===a?Um.bind(null,n):null}function Dd(n,i){var a=Yo;return n.current.memoizedState.isDehydrated&&(ca(n,i).flags|=256),n=hc(n,i),n!==2&&(i=Li,Li=a,i!==null&&Ud(i)),n}function Ud(n){Li===null?Li=n:Li.push.apply(Li,n)}function zv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!xr(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ns(n,i){for(i&=~Pd,i&=~oc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function Om(n){if((an&6)!==0)throw Error(t(327));Za();var i=Dt(n,0);if((i&1)===0)return Ni(n,Kt()),null;var a=hc(n,i);if(n.tag!==0&&a===2){var c=$t(n);c!==0&&(i=c,a=Dd(n,c))}if(a===1)throw a=$o,ca(n,0),Ns(n,i),Ni(n,Kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ua(n,Li,os),Ni(n,Kt()),null}function Od(n,i){var a=an;an|=1;try{return n(i)}finally{an=a,an===0&&(Ka=Kt()+500,zl&&Ts())}}function la(n){Ps!==null&&Ps.tag===0&&(an&6)===0&&Za();var i=an;an|=1;var a=lr.transition,c=ie;try{if(lr.transition=null,ie=1,n)return n()}finally{ie=c,lr.transition=a,an=i,(an&6)===0&&Ts()}}function Fd(){qi=Ya.current,Tn(Ya)}function ca(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,gv(a)),Vn!==null)for(a=Vn.return;a!==null;){var c=a;switch(qu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&kl();break;case 3:qa(),Tn(Ri),Tn(di),sd();break;case 5:id(c);break;case 4:qa();break;case 13:Tn(Ln);break;case 19:Tn(Ln);break;case 10:Ju(c.type._context);break;case 22:case 23:Fd()}a=a.return}if(Qn=n,Vn=n=Is(n.current,null),li=qi=i,jn=0,$o=null,Pd=oc=oa=0,Li=Yo=null,ra!==null){for(i=0;i<ra.length;i++)if(a=ra[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var C=g.next;g.next=d,c.next=C}a.pending=c}ra=null}return n}function Fm(n,i){do{var a=Vn;try{if(Zu(),Kl.current=ec,Zl){for(var c=Nn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Zl=!1}if(aa=0,Jn=qn=Nn=null,Ho=!1,Go=0,Cd.current=null,a===null||a.return===null){jn=1,$o=i,Vn=null;break}e:{var g=n,C=a.return,V=a,$=i;if(i=li,V.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var _e=$,be=V,Pe=be.tag;if((be.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Te=be.alternate;Te?(be.updateQueue=Te.updateQueue,be.memoizedState=Te.memoizedState,be.lanes=Te.lanes):(be.updateQueue=null,be.memoizedState=null)}var Je=lm(C);if(Je!==null){Je.flags&=-257,cm(Je,C,V,g,i),Je.mode&1&&om(g,_e,i),i=Je,$=_e;var lt=i.updateQueue;if(lt===null){var ut=new Set;ut.add($),i.updateQueue=ut}else lt.add($);break e}else{if((i&1)===0){om(g,_e,i),kd();break e}$=Error(t(426))}}else if(Rn&&V.mode&1){var On=lm(C);if(On!==null){(On.flags&65536)===0&&(On.flags|=256),cm(On,C,V,g,i),Yu(ja($,V));break e}}g=$=ja($,V),jn!==4&&(jn=2),Yo===null?Yo=[g]:Yo.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=sm(g,$,i);Np(g,ue);break e;case 1:V=$;var Q=g.type,pe=g.stateNode;if((g.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Cs===null||!Cs.has(pe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ue=am(g,V,i);Np(g,Ue);break e}}g=g.return}while(g!==null)}zm(a)}catch(dt){i=dt,Vn===a&&a!==null&&(Vn=a=a.return);continue}break}while(!0)}function km(){var n=ac.current;return ac.current=ec,n===null?ec:n}function kd(){(jn===0||jn===3||jn===2)&&(jn=4),Qn===null||(oa&268435455)===0&&(oc&268435455)===0||Ns(Qn,li)}function hc(n,i){var a=an;an|=2;var c=km();(Qn!==n||li!==i)&&(os=null,ca(n,i));do try{Vv();break}catch(d){Fm(n,d)}while(!0);if(Zu(),an=a,ac.current=c,Vn!==null)throw Error(t(261));return Qn=null,li=0,jn}function Vv(){for(;Vn!==null;)Bm(Vn)}function Hv(){for(;Vn!==null&&!ri();)Bm(Vn)}function Bm(n){var i=Gm(n.alternate,n,qi);n.memoizedProps=n.pendingProps,i===null?zm(n):Vn=i,Cd.current=null}function zm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Dv(a,i,qi),a!==null){Vn=a;return}}else{if(a=Uv(a,i),a!==null){a.flags&=32767,Vn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jn=6,Vn=null;return}}if(i=i.sibling,i!==null){Vn=i;return}Vn=i=n}while(i!==null);jn===0&&(jn=5)}function ua(n,i,a){var c=ie,d=lr.transition;try{lr.transition=null,ie=1,Gv(n,i,a,c)}finally{lr.transition=d,ie=c}return null}function Gv(n,i,a,c){do Za();while(Ps!==null);if((an&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(h(n,g),n===Qn&&(Vn=Qn=null,li=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cc||(cc=!0,Wm(P,function(){return Za(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=lr.transition,lr.transition=null;var C=ie;ie=1;var V=an;an|=4,Cd.current=null,Fv(n,a),Pm(a,n),cv(ku),_s=!!Fu,ku=Fu=null,n.current=a,kv(a),jr(),an=V,ie=C,lr.transition=g}else n.current=a;if(cc&&(cc=!1,Ps=n,uc=d),g=n.pendingLanes,g===0&&(Cs=null),ke(a.stateNode),Ni(n,Kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(lc)throw lc=!1,n=Nd,Nd=null,n;return(uc&1)!==0&&n.tag!==0&&Za(),g=n.pendingLanes,(g&1)!==0?n===Id?Ko++:(Ko=0,Id=n):Ko=0,Ts(),null}function Za(){if(Ps!==null){var n=ye(uc),i=lr.transition,a=ie;try{if(lr.transition=null,ie=16>n?16:n,Ps===null)var c=!1;else{if(n=Ps,Ps=null,uc=0,(an&6)!==0)throw Error(t(331));var d=an;for(an|=4,ot=n.current;ot!==null;){var g=ot,C=g.child;if((ot.flags&16)!==0){var V=g.deletions;if(V!==null){for(var $=0;$<V.length;$++){var _e=V[$];for(ot=_e;ot!==null;){var be=ot;switch(be.tag){case 0:case 11:case 15:jo(8,be,g)}var Pe=be.child;if(Pe!==null)Pe.return=be,ot=Pe;else for(;ot!==null;){be=ot;var Te=be.sibling,Je=be.return;if(Tm(be),be===_e){ot=null;break}if(Te!==null){Te.return=Je,ot=Te;break}ot=Je}}}var lt=g.alternate;if(lt!==null){var ut=lt.child;if(ut!==null){lt.child=null;do{var On=ut.sibling;ut.sibling=null,ut=On}while(ut!==null)}}ot=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,ot=C;else e:for(;ot!==null;){if(g=ot,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:jo(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,ot=ue;break e}ot=g.return}}var Q=n.current;for(ot=Q;ot!==null;){C=ot;var pe=C.child;if((C.subtreeFlags&2064)!==0&&pe!==null)pe.return=C,ot=pe;else e:for(C=Q;ot!==null;){if(V=ot,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:sc(9,V)}}catch(dt){Un(V,V.return,dt)}if(V===C){ot=null;break e}var Ue=V.sibling;if(Ue!==null){Ue.return=V.return,ot=Ue;break e}ot=V.return}}if(an=d,Ts(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{ie=a,lr.transition=i}}return!1}function Vm(n,i,a){i=ja(a,i),i=sm(n,i,1),n=As(n,i,1),i=Mi(),n!==null&&(pn(n,1,i),Ni(n,i))}function Un(n,i,a){if(n.tag===3)Vm(n,n,a);else for(;i!==null;){if(i.tag===3){Vm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cs===null||!Cs.has(c))){n=ja(a,n),n=am(i,n,1),i=As(i,n,1),n=Mi(),i!==null&&(pn(i,1,n),Ni(i,n));break}}i=i.return}}function Wv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Mi(),n.pingedLanes|=n.suspendedLanes&a,Qn===n&&(li&a)===a&&(jn===4||jn===3&&(li&130023424)===li&&500>Kt()-Ld?ca(n,0):Pd|=a),Ni(n,i)}function Hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var a=Mi();n=rs(n,i),n!==null&&(pn(n,i,a),Ni(n,a))}function Xv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Hm(n,a)}function qv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hm(n,a)}var Gm;Gm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ri.current)Pi=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pi=!1,Iv(n,i,a);Pi=(n.flags&131072)!==0}else Pi=!1,Rn&&(i.flags&1048576)!==0&&Mp(i,Hl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ic(n,i),n=i.pendingProps;var d=Ba(i,di.current);Xa(i,a),d=ld(null,i,c,n,d,a);var g=cd();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ci(c)?(g=!0,Bl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,td(i),d.updater=tc,i.stateNode=d,d._reactInternals=i,md(i,c,n,a),i=xd(null,i,c,!0,g,a)):(i.tag=0,Rn&&g&&Xu(i),yi(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ic(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=$v(c),n=yr(c,n),d){case 0:i=_d(null,i,c,n,a);break e;case 1:i=mm(null,i,c,n,a);break e;case 11:i=um(null,i,c,n,a);break e;case 14:i=dm(null,i,c,yr(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yr(c,d),_d(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yr(c,d),mm(n,i,c,d,a);case 3:e:{if(gm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Lp(n,i),$l(i,c,null,a);var C=i.memoizedState;if(c=C.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=ja(Error(t(423)),i),i=vm(n,i,c,a,d);break e}else if(c!==d){d=ja(Error(t(424)),i),i=vm(n,i,c,a,d);break e}else for(Xi=Ms(i.stateNode.containerInfo.firstChild),Wi=i,Rn=!0,Sr=null,a=Cp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ha(),c===d){i=as(n,i,a);break e}yi(n,i,c,a)}i=i.child}return i;case 5:return Dp(i),n===null&&$u(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,C=d.children,Bu(c,d)?C=null:g!==null&&Bu(c,g)&&(i.flags|=32),pm(n,i),yi(n,i,C,a),i.child;case 6:return n===null&&$u(i),null;case 13:return _m(n,i,a);case 4:return nd(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ga(i,null,c,a):yi(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yr(c,d),um(n,i,c,d,a);case 7:return yi(n,i,i.pendingProps,a),i.child;case 8:return yi(n,i,i.pendingProps.children,a),i.child;case 12:return yi(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,C=d.value,yn(Xl,c._currentValue),c._currentValue=C,g!==null)if(xr(g.value,C)){if(g.children===d.children&&!Ri.current){i=as(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){C=g.child;for(var $=V.firstContext;$!==null;){if($.context===c){if(g.tag===1){$=ss(-1,a&-a),$.tag=2;var _e=g.updateQueue;if(_e!==null){_e=_e.shared;var be=_e.pending;be===null?$.next=$:($.next=be.next,be.next=$),_e.pending=$}}g.lanes|=a,$=g.alternate,$!==null&&($.lanes|=a),Qu(g.return,a,i),V.lanes|=a;break}$=$.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,V=C.alternate,V!==null&&(V.lanes|=a),Qu(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}yi(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Xa(i,a),d=ar(d),c=c(d),i.flags|=1,yi(n,i,c,a),i.child;case 14:return c=i.type,d=yr(c,i.pendingProps),d=yr(c.type,d),dm(n,i,c,d,a);case 15:return fm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yr(c,d),ic(n,i),i.tag=1,Ci(c)?(n=!0,Bl(i)):n=!1,Xa(i,a),im(i,c,d),md(i,c,d,a),xd(null,i,c,!0,n,a);case 19:return Sm(n,i,a);case 22:return hm(n,i,a)}throw Error(t(156,i.tag))};function Wm(n,i){return Nt(n,i)}function jv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(n,i,a,c){return new jv(n,i,a,c)}function Bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $v(n){if(typeof n=="function")return Bd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===ne)return 14}return 2}function Is(n,i){var a=n.alternate;return a===null?(a=cr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pc(n,i,a,c,d,g){var C=2;if(c=n,typeof n=="function")Bd(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case k:return da(a.children,d,g,i);case T:C=8,d|=8;break;case L:return n=cr(12,a,i,d|2),n.elementType=L,n.lanes=g,n;case re:return n=cr(13,a,i,d),n.elementType=re,n.lanes=g,n;case G:return n=cr(19,a,i,d),n.elementType=G,n.lanes=g,n;case oe:return mc(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:C=10;break e;case H:C=9;break e;case q:C=11;break e;case ne:C=14;break e;case fe:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=cr(C,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function da(n,i,a,c){return n=cr(7,n,c,i),n.lanes=a,n}function mc(n,i,a,c){return n=cr(22,n,c,i),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function zd(n,i,a){return n=cr(6,n,null,i),n.lanes=a,n}function Vd(n,i,a){return i=cr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ge(0),this.expirationTimes=Ge(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hd(n,i,a,c,d,g,C,V,$){return n=new Yv(n,i,a,V,$),i===1?(i=1,g===!0&&(i|=8)):i=0,g=cr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(g),n}function Kv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xm(n){if(!n)return ws;n=n._reactInternals;e:{if(fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ci(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ci(a))return xp(n,a,i)}return i}function qm(n,i,a,c,d,g,C,V,$){return n=Hd(a,c,!0,n,d,g,C,V,$),n.context=Xm(null),a=n.current,c=Mi(),d=Ls(a),g=ss(c,d),g.callback=i??null,As(a,g,d),n.current.lanes=d,pn(n,d,c),Ni(n,c),n}function gc(n,i,a,c){var d=i.current,g=Mi(),C=Ls(d);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=ss(g,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=As(d,i,C),n!==null&&(wr(n,d,C,g),jl(n,d,C)),C}function vc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gd(n,i){jm(n,i),(n=n.alternate)&&jm(n,i)}function Zv(){return null}var $m=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wd(n){this._internalRoot=n}_c.prototype.render=Wd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gc(n,i,null,null)},_c.prototype.unmount=Wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;la(function(){gc(null,n,null,null)}),i[es]=null}};function _c(n){this._internalRoot=n}_c.prototype.unstable_scheduleHydration=function(n){if(n){var i=tn();n={blockedOn:null,target:n,priority:i};for(var a=0;a<xi.length&&i!==0&&i<xi[a].priority;a++);xi.splice(a,0,n),a===0&&qs(n)}};function Xd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function Jv(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var _e=vc(C);g.call(_e)}}var C=qm(i,c,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=C,n[es]=C.current,Do(n.nodeType===8?n.parentNode:n),la(),C}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var _e=vc($);V.call(_e)}}var $=Hd(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=$,n[es]=$.current,Do(n.nodeType===8?n.parentNode:n),la(function(){gc(i,$,a,c)}),$}function Sc(n,i,a,c,d){var g=a._reactRootContainer;if(g){var C=g;if(typeof d=="function"){var V=d;d=function(){var $=vc(C);V.call($)}}gc(i,C,n,d)}else C=Jv(a,i,n,d,c);return vc(C)}qe=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ke(i.pendingLanes);a!==0&&(B(i,a|1),Ni(i,Kt()),(an&6)===0&&(Ka=Kt()+500,Ts()))}break;case 13:la(function(){var c=rs(n,1);if(c!==null){var d=Mi();wr(c,n,1,d)}}),Gd(n,1)}},at=function(n){if(n.tag===13){var i=rs(n,134217728);if(i!==null){var a=Mi();wr(i,n,134217728,a)}Gd(n,134217728)}},At=function(n){if(n.tag===13){var i=Ls(n),a=rs(n,i);if(a!==null){var c=Mi();wr(a,n,i,c)}Gd(n,i)}},tn=function(){return ie},Pt=function(n,i){var a=ie;try{return ie=n,i()}finally{ie=a}},Fe=function(n,i,a){switch(i){case"input":if(Mt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Fl(c);if(!d)throw Error(t(90));yt(c),Mt(c,d)}}}break;case"textarea":Gt(n,a);break;case"select":i=a.value,i!=null&&Ct(n,!!a.multiple,i,!1)}},Ce=Od,Me=la;var Qv={usingClientEntryPoint:!1,Events:[Fo,Fa,Fl,W,Re,Od]},Zo={findFiberByHostInstance:ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e_={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fn(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||Zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{ae=yc.inject(e_),se=yc}catch{}}return Ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,Ii.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(i))throw Error(t(200));return Kv(n,i,null,a)},Ii.createRoot=function(n,i){if(!Xd(n))throw Error(t(299));var a=!1,c="",d=$m;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hd(n,1,!1,null,null,a,!1,c,d),n[es]=i.current,Do(n.nodeType===8?n.parentNode:n),new Wd(i)},Ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fn(i),n=n===null?null:n.stateNode,n},Ii.flushSync=function(n){return la(n)},Ii.hydrate=function(n,i,a){if(!xc(i))throw Error(t(200));return Sc(null,n,i,!0,a)},Ii.hydrateRoot=function(n,i,a){if(!Xd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",C=$m;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=qm(i,null,n,1,a??null,d,!1,g,C),n[es]=i.current,Do(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new _c(i)},Ii.render=function(n,i,a){if(!xc(i))throw Error(t(200));return Sc(null,n,i,!1,a)},Ii.unmountComponentAtNode=function(n){if(!xc(n))throw Error(t(40));return n._reactRootContainer?(la(function(){Sc(null,null,n,!1,function(){n._reactRootContainer=null,n[es]=null})}),!0):!1},Ii.unstable_batchedUpdates=Od,Ii.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xc(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sc(n,i,a,!1,c)},Ii.version="18.3.1-next-f1338f8080-20240426",Ii}var i0;function c_(){if(i0)return $d.exports;i0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$d.exports=l_(),$d.exports}var r0;function u_(){if(r0)return Mc;r0=1;var r=c_();return Mc.createRoot=r.createRoot,Mc.hydrateRoot=r.hydrateRoot,Mc}var d_=u_();const f_=hg(d_),pg="no_mires_abajo_playstore_v3",tu=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function h_(r){return r&&tu.find(t=>t.code===r||t.flag===r)||tu[0]}const hs=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puente de la Mujer",en:"Obelisk & Puente de la Mujer"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"Río de Janeiro",en:"Rio de Janeiro"},monumentName:{es:"Cristo Redentor Iluminado",en:"Illuminated Christ the Redeemer"},weatherLabel:{es:"Brasa Nocturna Carioca",en:"Carioca Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#4ade80",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"cristo"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Estatua de la Libertad y Empire State",en:"Statue of Liberty & Empire State"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#38bdf8",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"liberty_empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"willis"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben y London Eye Giratorio",en:"Big Ben & Rotating London Eye"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel y Faro Giratorio",en:"Eiffel Tower & Rotating Beacon"},weatherLabel:{es:"Haces de Luz Ámbar/Dorado",en:"Amber/Gold Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"golden_embers",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"cuatrotorres"},{index:9,flag:"🇷🇺",name:{es:"Moscú",en:"Moscow"},monumentName:{es:"Cúpulas de San Basilio con Estrellas",en:"Saint Basil's Onion Domes"},weatherLabel:{es:"Ventisca Invernal Rusa",en:"Russian Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#f43f5e",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"stbasil"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Las Tres Grandes Pirámides de Giza",en:"Three Great Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#fde047",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"mahanakhon"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Velas de la Ópera de Sídney",en:"Sydney Opera House Sails"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Torre de Tokio y Arco Torii Luminoso",en:"Tokyo Tower & Luminous Torii Gate"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#ef4444",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],Zd=[{id:"vip_dubai",index:20,flag:"🇦🇪",name:{es:"Dubái Sky-Bridge VIP",en:"Dubai Sky-Bridge VIP"},desc:{es:"Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.",en:"Crossing between the tallest towers in the world with golden storm & x3 payout."},weatherLabel:{es:"Tormenta de Oro 24K VIP",en:"24K Gold Storm VIP"},weatherArchetype:"golden_embers",accentColor:"#fde047",winColor:"#fef08a",windStrength:1.25,monument:"burjkhalifa",rewardMult:3,gemBonus:25,gemUnlockCost:350,usdPrice:"$1.99 USD"},{id:"vip_vegas",index:21,flag:"🇺🇸",name:{es:"Las Vegas Neon Strip VIP",en:"Las Vegas Neon Strip VIP"},desc:{es:"Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.",en:"Hyper-bright casino lights and triple x3 LP & Gems rewards."},weatherLabel:{es:"Lluvia de Neón y Fichas VIP",en:"Casino Neon Rain VIP"},weatherArchetype:"cyber_rain",accentColor:"#f43f5e",winColor:"#fde047",windStrength:1.32,monument:"vegas_strip",rewardMult:3,gemBonus:35,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_monaco",index:22,flag:"🇲🇨",name:{es:"Mónaco Casino Royal VIP",en:"Monaco Casino Royal VIP"},desc:{es:"Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.",en:"Gala night over Monte Carlo bay with triple coin payouts."},weatherLabel:{es:"Destellos Dorados de Gala",en:"Royal Golden Sparkles"},weatherArchetype:"golden_embers",accentColor:"#fbbf24",winColor:"#fef9c3",windStrength:1.18,monument:"monaco_casino",rewardMult:3,gemBonus:30,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_alps",index:23,flag:"🇨🇭",name:{es:"Alpes Suizos Nocturnos VIP",en:"Swiss Alps Nocturnal VIP"},desc:{es:"Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.",en:"Extreme crossing between high-mountain cable cars under the Aurora Borealis."},weatherLabel:{es:"Aurora Boreal y Ventisca Alpina",en:"Aurora Borealis & Alpine Gale"},weatherArchetype:"blizzard",accentColor:"#4ade80",winColor:"#a5f3fc",windStrength:1.45,monument:"swiss_alps",rewardMult:3.5,gemBonus:45,gemUnlockCost:450,usdPrice:"$2.99 USD"}],Ec=[{id:"pole_basic",icon:"🦯",name:{es:"Barra de Acero Urbano",en:"Urban Steel Pole"},badge:{es:"GRATIS • BASE 1.0x",en:"FREE • BASE 1.0x"},desc:{es:"Estabilidad base 1.0x con núcleo láser cian estándar.",en:"Base 1.0x stability with standard cyan laser core."},currency:"free",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:0,stepDamp:0,catchRadiusBonus:0,scoreMult:1,coinMult:1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1,coreHex:14742270,glowHex:62206,tipHex:62206,hasGyroRings:!1},{id:"pole_carbon",icon:"⚡",name:{es:"Barra de Fibra de Carbono",en:"Carbon Fiber Pole"},badge:{es:"-18% GRAVEDAD • +LARGO 3D",en:"-18% GRAVITY • +3D LENGTH"},desc:{es:"Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.",en:"Reduces tipping gravity by 18% and extends the 3D pole length."},currency:"coins",cost:14500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.18,stepDamp:.1,catchRadiusBonus:.05,scoreMult:1.1,coinMult:1.1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.22,coreHex:14482663,glowHex:2282478,tipHex:4906624,hasGyroRings:!1},{id:"pole_gyro",icon:"🌀",name:{es:"Barra Giroscópica Neón",en:"Neon Gyroscopic Pole"},badge:{es:"-32% INCLINACIÓN • -30% PISADA",en:"-32% TILT • -30% STEP SWAY"},desc:{es:"Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.",en:"Reduces tilt by 32% and dampens fast-step lateral impact by 30%."},currency:"coins",cost:48e3,gemCost:290,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.32,stepDamp:.3,catchRadiusBonus:.1,scoreMult:1.25,coinMult:1.25,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.34,coreHex:15984895,glowHex:11032055,tipHex:62206,hasGyroRings:!0},{id:"pole_quantum",icon:"👑",name:{es:"👑 Barra Láser Cuántica",en:"👑 Quantum Laser Pole"},badge:{es:"EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS",en:"PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS"},desc:{es:"Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.",en:"Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier."},currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,gravityReduction:.5,stepDamp:.4,catchRadiusBonus:.25,scoreMult:1.5,coinMult:1.5,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.45,coreHex:16770278,glowHex:16007006,tipHex:62206,hasGyroRings:!0},{id:"pole_imperial",icon:"👑",name:{es:"👑 Barra Gravitatoria Imperial",en:"👑 Imperial Graviton Pole"},badge:{es:"PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0",en:"VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0"},desc:{es:"Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.",en:"Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier."},currency:"vip_or_usd",cost:900,gemCost:900,usdPrice:"$3.99 USD",isPro:!0,isVipOnly:!0,gravityReduction:.65,stepDamp:.55,catchRadiusBonus:.3,scoreMult:2,coinMult:2,noCatchRecoil:!0,autoSaveFall:!0,poleScaleX:1.56,coreHex:16710083,glowHex:16638023,tipHex:16096779,hasGyroRings:!0}],Ui={urbano:{key:"urbano",styleType:"urbano",multLabel:"x1",jacketHex:1976635,jacketEmissiveHex:726310,pantsHex:988970,bootHex:4674921,soleHex:9741240,gloveHex:3359061,wristHex:3718648,headHex:1976635,headbandHex:3718648,ribbonHex:3718648,dorsalHex:3718648,rimHex:3718648,rimStrength:1.05,paletteSwatches:["#1e293b","#0f172a","#38bdf8","#475569"],paletteLabel:{es:"Grafito + Cian Urbano",en:"Graphite + Urban Cyan"},goldTrail:!1},night_runner:{key:"night_runner",styleType:"night_runner",multLabel:"x1.2",jacketHex:593174,jacketEmissiveHex:329745,pantsHex:593174,bootHex:10741301,soleHex:16777215,gloveHex:1120295,wristHex:16777215,headHex:593174,headbandHex:16777215,ribbonHex:16777215,dorsalHex:16777215,rimHex:10741301,rimStrength:1.35,paletteSwatches:["#090d16","#ffffff","#a3e635"],paletteLabel:{es:"Reflectivo Blanco + Lima Flúor",en:"Reflective White + Fluor Lime"},goldTrail:!1},infiltrado:{key:"infiltrado",styleType:"infiltrado",multLabel:"x1.5",jacketHex:329483,jacketEmissiveHex:6958,pantsHex:329483,bootHex:527380,soleHex:62206,gloveHex:594726,wristHex:62206,headHex:329483,headbandHex:62206,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.48,paletteSwatches:["#05070b","#00f2fe","#0284c7"],paletteLabel:{es:"Arnés Táctico X + Neón Cian",en:"Tactical X-Harness + Cyan Neon"},goldTrail:!1},ilusionista:{key:"ilusionista",styleType:"ilusionista",multLabel:"x2",jacketHex:1970229,jacketEmissiveHex:2493773,pantsHex:1181988,bootHex:1970229,soleHex:11032055,gloveHex:16777215,wristHex:15857145,headHex:1970229,headbandHex:15857145,ribbonHex:12616956,dorsalHex:12616956,rimHex:12616956,rimStrength:1.55,paletteSwatches:["#1e1035","#c084fc","#f1f5f9","#a855f7"],paletteLabel:{es:"Púrpura Neón + Plata Brillante",en:"Neon Purple + Bright Silver"},goldTrail:!1},shinobi:{key:"shinobi",styleType:"shinobi",multLabel:"x3",jacketHex:984842,jacketEmissiveHex:2819090,pantsHex:590854,bootHex:1575182,soleHex:15680580,gloveHex:1705998,wristHex:16711765,headHex:984842,headbandHex:16711765,ribbonHex:16711765,dorsalHex:16711765,rimHex:16711765,rimStrength:1.68,paletteSwatches:["#0f070a","#ff0055","#ef4444","#fbbf24"],paletteLabel:{es:"Carmesí Cyber + Katana Dorsal",en:"Cyber Crimson + Back Katana"},goldTrail:!1},ronin_gold:{key:"ronin_gold",styleType:"ronin_gold",multLabel:"x4",jacketHex:657414,jacketEmissiveHex:4528643,pantsHex:460292,bootHex:1840136,soleHex:16096779,gloveHex:1840136,wristHex:16096779,headHex:657414,headbandHex:16096779,ribbonHex:16498468,dorsalHex:16096779,rimHex:16096779,rimStrength:1.75,paletteSwatches:["#0a0806","#f59e0b","#fbbf24","#fef08a"],paletteLabel:{es:"Laca Negra + 2 Katanas Oro",en:"Black Lacquer + Dual Gold Katanas"},goldTrail:!1},quantum_specter:{key:"quantum_specter",styleType:"quantum_specter",multLabel:"x5",jacketHex:401474,jacketEmissiveHex:165063,pantsHex:267824,bootHex:959977,soleHex:62206,gloveHex:62206,wristHex:16777215,headHex:401474,headbandHex:62206,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.9,paletteSwatches:["#062042","#00f2fe","#38bdf8","#ffffff"],paletteLabel:{es:"Plasma Cian + Halo Holográfico",en:"Cyan Plasma + Holographic Halo"},goldTrail:!1},immortal_legend:{key:"immortal_legend",styleType:"immortal_legend",multLabel:"x8",jacketHex:16498468,jacketEmissiveHex:11817737,pantsHex:14251782,bootHex:16707722,soleHex:16777215,gloveHex:16707722,wristHex:16777215,headHex:16498468,headbandHex:16707722,ribbonHex:16707722,dorsalHex:16707722,rimHex:16707722,rimStrength:2,paletteSwatches:["#fbbf24","#fef08a","#f59e0b","#ffffff"],paletteLabel:{es:"Oro Líquido 24K + Corona Solar",en:"24K Liquid Gold + Solar Crown"},goldTrail:!0}},p_={default:"urbano",urbano:"urbano",skin_1:"urbano",night_runner:"night_runner",skin_2:"night_runner",infiltrado:"infiltrado",skin_3:"infiltrado",ilusionista:"ilusionista",skin_4:"ilusionista",shinobi:"shinobi",skin_5:"shinobi",ronin_gold:"ronin_gold",skin_6:"ronin_gold",quantum_specter:"quantum_specter",skin_7:"quantum_specter",samurai:"ronin_gold",leyenda_dorada:"immortal_legend",immortal_legend:"immortal_legend",skin_8:"immortal_legend"};function zr(r){return r&&p_[r]||"urbano"}function mg(r){const e=zr(r);return Ui[e]||Ui.urbano}const xo=[{id:"urbano",legacyId:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,currency:"coins",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1,recoveryBonus:0,catchWindowBonus:0,coinBonus:0,windReduction:0,gravityReduction:0,stepDampBonus:0,freeShields:0,badge:{es:"GRATIS POR DEFECTO • MULTI x1",en:"FREE DEFAULT • x1 MULTI"},name:{es:"Urbano Callejero (x1)",en:"Street Urban (x1)"},desc:{es:"Buzo gris grafito oscuro (#1e293b) con capucha, pantalón cargo negro y botas urbanas.",en:"Dark graphite hoodie (#1e293b) with hood, black cargo pants and urban boots."},hoodieColor:"#1e293b",pantsColor:"#0f172a",trimColor:"#38bdf8",shoeColor:"#475569",rimHex:3718648,glowColor:"#38bdf8",goldTrail:!1,visual:Ui.urbano},{id:"night_runner",legacyId:"skin_2",icon:"🏃",unlockLevel:2,unlockCity:1,currency:"coins",cost:8500,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1.2,recoveryBonus:.1,catchWindowBonus:0,coinBonus:.2,windReduction:0,gravityReduction:0,stepDampBonus:.08,freeShields:0,badge:{es:"MULTI x1.2 • +10% RECUPERACIÓN EQUILIBRIO",en:"x1.2 MULTI • +10% BALANCE RECOVERY SPEED"},name:{es:"Night Runner (x1.2)",en:"Night Runner (x1.2)"},desc:{es:"Rompevientos negro profundo con tiras reflectivas blancas brillantes (#ffffff) en espalda y brazos, más zapatillas aerodinámicas verde flúor (#a3e635). Bonus: +10% velocidad de recuperación de equilibrio.",en:"Deep black windbreaker with bright white reflective strips (#ffffff) on back & arms, plus fluor green sneakers (#a3e635). Bonus: +10% balance recovery speed."},hoodieColor:"#090d16",pantsColor:"#090d16",trimColor:"#ffffff",shoeColor:"#a3e635",rimHex:10741301,glowColor:"#a3e635",goldTrail:!1,visual:Ui.night_runner},{id:"infiltrado",legacyId:"skin_3",icon:"⚡",unlockLevel:5,unlockCity:2,currency:"coins",cost:25e3,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1.5,recoveryBonus:0,catchWindowBonus:0,coinBonus:.5,windReduction:.2,gravityReduction:0,stepDampBonus:.15,freeShields:0,badge:{es:"MULTI x1.5 • -20% EMPUJE DEL VIENTO",en:"x1.5 MULTI • -20% WIND PUSH"},name:{es:"Infiltrado Táctico (x1.5)",en:"Tactical Infiltrator (x1.5)"},desc:{es:"Campera técnica negro mate con arnés cruzado en X de neón cian intenso (#00f2fe), visor táctico y líneas cian en talones y muñecas. Bonus: -20% empuje del viento.",en:"Matte black technical jacket with intense cyan neon X-harness (#00f2fe), tactical visor and cyan lines on heels & wrists. Bonus: -20% wind push."},hoodieColor:"#05070b",pantsColor:"#05070b",trimColor:"#00f2fe",shoeColor:"#00f2fe",rimHex:62206,glowColor:"#00f2fe",goldTrail:!1,visual:Ui.infiltrado},{id:"ilusionista",legacyId:"skin_4",icon:"🎩",unlockLevel:10,unlockCity:3,currency:"coins",cost:6e4,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:2,recoveryBonus:0,catchWindowBonus:.2,coinBonus:1,windReduction:0,gravityReduction:0,stepDampBonus:.2,freeShields:0,badge:{es:"MULTI x2.0 • +20% RADIO CAPTURA MALABARES",en:"x2.0 MULTI • +20% JUGGLE CATCH RADIUS"},name:{es:"Ilusionista de Altura (x2)",en:"High-Wire Illusionist (x2)"},desc:{es:"Chaleco sastrero oscuro con detalles púrpura neón (#c084fc) y bordes plateados, cinta púrpura al viento y guantes blancos/plateados luminosos. Bonus: +20% radio de captura de malabares.",en:"Dark tailored vest with neon purple details (#c084fc) & silver trim, purple wind ribbon and luminous silver/white gloves. Bonus: +20% juggle catch radius."},hoodieColor:"#1e1035",pantsColor:"#120924",trimColor:"#c084fc",shoeColor:"#a855f7",rimHex:12616956,glowColor:"#c084fc",goldTrail:!1,visual:Ui.ilusionista},{id:"shinobi",legacyId:"skin_5",icon:"🥷",unlockLevel:18,unlockCity:4,currency:"coins",cost:135e3,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:3,recoveryBonus:.15,catchWindowBonus:.1,coinBonus:2,windReduction:.25,gravityReduction:.35,stepDampBonus:.35,freeShields:0,badge:{es:"MULTI x3.0 • -35% GRAVEDAD DE INCLINACIÓN",en:"x3.0 MULTI • -35% TIPPING GRAVITY"},name:{es:"Cyber-Shinobi Tokio (x3)",en:"Cyber-Shinobi Tokyo (x3)"},desc:{es:"Traje ninja cibernético con circuito carmesí luminoso (#ff0055) en la espalda, katana cruzada en diagonal, cinta roja larga al viento y botas magnéticas rojas. Bonus: -35% gravedad de inclinación.",en:"Cybernetic ninja suit with glowing crimson back circuit (#ff0055), diagonal katana, long red wind ribbon and red magnetic boots. Bonus: -35% tipping gravity."},hoodieColor:"#0f070a",pantsColor:"#090406",trimColor:"#ff0055",shoeColor:"#ef4444",rimHex:16711765,glowColor:"#ff0055",goldTrail:!1,visual:Ui.shinobi},{id:"ronin_gold",legacyId:"skin_6",icon:"⚔️",unlockLevel:1,unlockCity:1,currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,bonusMult:4,recoveryBonus:.2,catchWindowBonus:.15,coinBonus:3,windReduction:.5,gravityReduction:.25,stepDampBonus:.4,freeShields:0,badge:{es:"👑 EXCLUSIVO PRO • MULTI x4 • -50% EMPUJE VIENTO",en:"👑 PRO EXCLUSIVE • x4 MULTI • -50% WIND PUSH"},name:{es:"👑 Ronin Imperial Dorado (x4 — $1.99 USD)",en:"👑 Golden Imperial Ronin (x4 — $1.99 USD)"},desc:{es:"Armadura samurái negra laqueada con placas y líneas dorsales en oro brillante (#f59e0b), hombreras samurái y dos katanas con empuñadura dorada cruzadas en la espalda. Beneficio activo: Multiplicador x4 y -50% empuje del viento.",en:"Black lacquered samurai armor with bright gold dorsal plates (#f59e0b), samurai shoulder armor and two golden-hilted katanas crossed on the back. Active perk: x4 Multiplier & -50% wind push."},hoodieColor:"#0a0806",pantsColor:"#070604",trimColor:"#f59e0b",shoeColor:"#fbbf24",rimHex:16096779,glowColor:"#f59e0b",goldTrail:!1,visual:Ui.ronin_gold},{id:"quantum_specter",legacyId:"skin_7",icon:"🌌",unlockLevel:1,unlockCity:1,currency:"gems_or_usd",cost:680,gemCost:680,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!1,bonusMult:5,recoveryBonus:.25,catchWindowBonus:.4,coinBonus:4,windReduction:.4,gravityReduction:.35,stepDampBonus:.45,freeShields:0,badge:{es:"👑 EXCLUSIVO PRO • MULTI x5 • IMÁN MALABARES (+40% ARO)",en:"👑 PRO EXCLUSIVE • x5 MULTI • JUGGLE MAGNET (+40% RING)"},name:{es:"👑 Espectro Cuántico (x5 — $2.99 USD)",en:"👑 Quantum Specter (x5 — $2.99 USD)"},desc:{es:"Traje de energía azul eléctrica y plasma cian brillante (#00f2fe / #38bdf8) con núcleo energético en la espalda, visor láser y halo holográfico alrededor del cuerpo. Beneficio activo: Multiplicador x5 e Imán de Malabares (+40% ventana de captura).",en:"Electric blue & bright cyan plasma suit (#00f2fe / #38bdf8) with back energy core, laser visor and holographic body halo. Active perk: x5 Multiplier & Juggle Magnet (+40% catch window)."},hoodieColor:"#062042",pantsColor:"#041630",trimColor:"#00f2fe",shoeColor:"#38bdf8",rimHex:62206,glowColor:"#00f2fe",goldTrail:!1,visual:Ui.quantum_specter},{id:"immortal_legend",legacyId:"skin_8",icon:"👑",unlockLevel:1,unlockCity:1,currency:"vip_or_usd",cost:1100,gemCost:1100,usdPrice:"$4.99 USD",isPro:!0,isVipOnly:!0,bonusMult:8,recoveryBonus:.35,catchWindowBonus:.35,coinBonus:7,windReduction:.6,gravityReduction:.6,stepDampBonus:.55,freeShields:1,badge:{es:"👑 EXCLUSIVO PRO / VIP • MULTI x8 • +60% ESTABILIDAD + 1 ESCUDO",en:"👑 PRO / VIP EXCLUSIVE • x8 MULTI • +60% STABILITY + 1 SHIELD"},name:{es:"👑 Leyenda Dorada Inmortal (x8 — $4.99 USD / Pase VIP)",en:"👑 Immortal Golden Legend (x8 — $4.99 USD / VIP Pass)"},desc:{es:"Acróbata bañado íntegramente en oro líquido radiante (#fbbf24 y #fef08a) con corona/halo luminoso, cinta de energía solar y estela de partículas doradas en tiempo real. Beneficio activo: Multiplicador x8 en LP y Monedas, +60% estabilidad y 1 Escudo Anti-Caída gratuito por nivel.",en:"Acrobat bathed in radiant liquid gold (#fbbf24 & #fef08a) with luminous crown/halo, solar ribbon and real-time golden particle trail. Active perk: x8 LP & Coin Multiplier, +60% stability and 1 free Anti-Fall Shield per level."},hoodieColor:"#fbbf24",pantsColor:"#d97706",trimColor:"#fef08a",shoeColor:"#ffffff",rimHex:16707722,glowColor:"#fde047",goldTrail:!0,visual:Ui.immortal_legend}];function Us(r){const e=zr(r);return xo.find(t=>t.id===e||t.legacyId===r)||xo[0]}const wc=[{id:"mult_x2_coins",icon:"🪙",name:{es:"Multiplicador x2 de Monedas",en:"x2 Permanent Coin Multiplier"},badge:{es:"MONEDAS DEL JUEGO • x2 🪙",en:"IN-GAME COINS • x2 🪙"},desc:{es:"Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.",en:"Permanently doubles all coins earned from juggling and clearing rooftops."},currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,coinMult:2,lpMult:1},{id:"mult_x3_pro",icon:"👑",name:{es:"👑 Multiplicador x3 Pro de LP y Monedas",en:"👑 x3 Pro LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙",en:"PRO / VIP PASS • x3 LP & 🪙"},desc:{es:"Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.",en:"Permanently triples your League Points (LP) for the Online Leaderboard and your Coins."},currency:"vip_or_usd",cost:600,gemCost:600,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!0,coinMult:3,lpMult:3},{id:"mult_x5_ultra",icon:"🚀",name:{es:"👑 Multiplicador x5 Ultra de LP y Monedas",en:"👑 x5 Ultra LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PACK PRO • x5 LP Y 🪙",en:"PRO PACK EXCLUSIVE • x5 LP & 🪙"},desc:{es:"Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.",en:"Maximum x5 boost to Online League Points and Coins across all cities and levels."},currency:"gems_or_usd",cost:1200,gemCost:1200,usdPrice:"$5.99 USD",isPro:!0,isVipOnly:!1,coinMult:5,lpMult:5}],ul=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,currency:"coins",cost:0,gemCost:0,name:{es:"Esferas Incandescentes",en:"Incandescent Orbs"},color:"#fde047"},{id:"torches",icon:"🔥",mult:2,unlockLevel:6,currency:"coins",cost:18500,gemCost:160,name:{es:"Antorchas de Plasma (x2)",en:"Plasma Torches (x2)"},color:"#f97316"},{id:"knives",icon:"🔪",mult:3,unlockLevel:16,currency:"coins",cost:42e3,gemCost:280,name:{es:"Dagas Láser Cian (x3)",en:"Cyan Laser Daggers (x3)"},color:"#00f2fe"},{id:"chainsaws",icon:"🪚",mult:5,unlockLevel:31,currency:"gems",cost:480,gemCost:480,name:{es:"👑 Sierras Neón Pro (x5)",en:"👑 Pro Neon Saws (x5)"},color:"#ef4444"},{id:"goldbars",icon:"🪙",mult:8,unlockLevel:60,currency:"gems",cost:950,gemCost:950,name:{es:"👑 Orbes Cuánticos 24K (x8)",en:"👑 24K Quantum Orbs (x8)"},color:"#fde047"}],m_=[{id:"pole",icon:"⚖️",maxLevel:10,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Núcleo de Inercia",en:"Inertia Core"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"boots",icon:"🥾",maxLevel:10,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"gloves",icon:"🧤",maxLevel:10,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}}];function s0(r){const e=Math.max(0,Math.min(10,r||0));if(e>=10)return{isMax:!0,isProTier:!0,coinCost:0,gemCost:0};if(e<5)return{isMax:!1,isProTier:!1,coinCost:Math.round(850*Math.pow(2.45,e)),gemCost:0};const t=e-5;return{isMax:!1,isProTier:!0,coinCost:0,gemCost:Math.round(140*Math.pow(1.45,t))}}const g_=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],v_=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],__=[{id:"bundle_vip_pass",icon:"👑",isVipPassBundle:!0,gems:1500,coins:5e4,leaguePts:1500,popular:!0,tag:"👑 ACTIVAR VIP ($4.99)",name:{es:"👑 PASE VIP PRO TEMPORADA",en:"👑 SEASON VIP PRO PASS"},perks:{es:["🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería","👑 Desbloquea las 4 Ciudades Exclusivas VIP","🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)","🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)","+1.500 💎 Gemas y +50.000 🪙 Monedas al instante"],en:["🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10","👑 Unlocks all 4 Exclusive VIP Cities","🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)","🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)","+1,500 💎 Gems & +50,000 🪙 Coins instantly"]}},{id:"bundle_starter",icon:"⚡",gems:450,coins:18e3,leaguePts:300,popular:!1,tag:"💎 PACK PRO ($1.99)",name:{es:"Cofre Cuántico de Gemas",en:"Quantum Gem Chest"},perks:{es:["+450 💎 Gemas Premium + 18.000 🪙 Monedas","Ideal para Barra Láser Cuántica o Mejoras Nv. 6+"],en:["+450 💎 Premium Gems + 18,000 🪙 Coins","Ideal for Quantum Laser Pole or Lvl 6+ Upgrades"]}},{id:"bundle_legend",icon:"🚀",gems:1400,coins:85e3,leaguePts:2500,popular:!0,tag:"👑 PACK ULTRA ($5.99)",name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+1.400 💎 Gemas + 85.000 🪙 Monedas","Alcanza para Multiplicador x5 Ultra + Samurái Neón"],en:["+1,400 💎 Gems + 85,000 🪙 Coins","Enough for x5 Ultra Multiplier + Neon Samurai"]}}],a0={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",leagueBanner:"LIGA DE TEMPORADA",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Tienda VIP",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",skinsBtn:"Aspectos",level:"Nivel",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",shieldSavedPopup:"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",levelCleared:"¡AZOTEA ALCANZADA!",nextLevel:"SIGUIENTE NIVEL",armoryTitle:"ARMERÍA PRO, BARRAS Y MULTIPLICADORES",armorySub:"Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",proUpgradeBtn:"👑 MEJORA PRO — GEMAS / PASE VIP",polesSectionTitle:"⚖️ VARAS DE EQUILIBRIO (BARRAS)",multipliersSectionTitle:"🚀 MULTIPLICADORES PERMANENTES",vipCitiesTitle:"👑 CIUDADES EXCLUSIVAS VIP",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.",shopTitle:"👑 TIENDA PRO & PASE VIP DE TEMPORADA",shopSub:"Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",leagueBanner:"SEASON LEAGUE",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"VIP Shop",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",skinsBtn:"Skins",level:"Level",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",shieldSavedPopup:"🛡️ ANTI-FALL SHIELD ACTIVATED!",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",levelCleared:"ROOFTOP REACHED!",nextLevel:"NEXT LEVEL",armoryTitle:"PRO ARMORY, POLES & MULTIPLIERS",armorySub:"Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",proUpgradeBtn:"👑 PRO UPGRADE — GEMS / VIP PASS",polesSectionTitle:"⚖️ BALANCE POLES (BARS)",multipliersSectionTitle:"🚀 PERMANENT MULTIPLIERS",vipCitiesTitle:"👑 EXCLUSIVE VIP CITIES",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.",shopTitle:"👑 PRO SHOP & SEASON VIP PASS",shopSub:"Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",backToLobbyBtn:"BACK TO MAIN MENU",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",youLabel:"YOU (Tightrope Walker)"}};for(let r=0;r<hs.length;r++){const e=hs[r];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}for(let r=0;r<xo.length;r++){const e=xo[r];e.coatColor=e.coatColor||e.hoodieColor}for(let r=0;r<ul.length;r++){const e=ul[r];e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function gg(r){const e=Math.max(1,Math.min(100,r||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function x_(r){const e=Math.max(1,Math.min(100,r||1)),t=gg(e),s=100+(e-1)*5;return Math.round(s*t)}function Jd(r,e=null){const t=Math.max(1,Math.min(100,r||1)),s=Math.min(19,Math.max(0,Math.floor((t-1)/5))),o=e||hs[s],l=(t-1)%5+1,u=gg(t),f=5,m=Number((f*u).toFixed(3)),p=x_(t),S=t<4?0:Number((u*(1+(t-4)*.018)).toFixed(3)),y=Number((u*1.15).toFixed(3)),_=Number((.62*y).toFixed(3)),M=Number(Math.max(.14,.28-(t-1)/99*.14).toFixed(4)),E=t<4?6:Number(Math.max(4.5,6-(t-4)/96*1.5).toFixed(2)),A=.32+o.windStrength*.45+l*.045,x=1.08+t/100*.92,v=t<=15?2:t<=55?3:4,R=t<=3?0:t<=10?1:t<=25?2:t<=50?3:4,U=Number((.028+Math.max(0,u-1)*.068).toFixed(4)),b=Number((.036+Math.max(0,u-1)*.064).toFixed(4));return{level:t,cityIndex:e?e.index:s,city:o,isVipCity:!!e,stageInCity:l,speedPhase:R,walkSpeedMultiplier:u,baseWalkSpeed:f,walkSpeed:u,walkSpeedMeters:m,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:S,juggleSpeedMultiplier:y,juggleBaseSpeed:_,juggleSpeed:_,catchWindow:M,gravityFactor:x,gravity:x*2.1,windMax:A,windBase:A,windChangeFreq:E,gustInterval:Math.max(.75,2.2-R*.32),windBaseForce:A,gravityInstability:x,defaultObjects:v,ballCount:v,stepSwayImpulse:U,catchRecoilImpulse:b}}const o0=[523.25,587.33,659.25,783.99,880,1046.5];class S_{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),s=this.ctx.createBuffer(1,t,e),o=s.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=s}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const s=this.ctx.currentTime,o=Math.max(0,(e-1)%o0.length),l=e>=12?1.25:1,u=o0[o]*l,f=this.ctx.createOscillator(),m=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",m.type="sine",f.frequency.setValueAtTime(u,s),m.frequency.setValueAtTime(u,s),p.gain.setValueAtTime(.001,s),p.gain.linearRampToValueAtTime(.18,s+.015),p.gain.exponentialRampToValueAtTime(.06,s+.07),p.gain.exponentialRampToValueAtTime(.001,s+.18),f.connect(p),m.connect(p),p.connect(this.ctx.destination),f.start(s),m.start(s),f.stop(s+.19),m.stop(s+.19),t){const S=this.ctx.createOscillator(),y=this.ctx.createGain();S.type="sine",S.frequency.setValueAtTime(u*2,s),S.frequency.exponentialRampToValueAtTime(u*2.04,s+.18),y.gain.setValueAtTime(.001,s),y.gain.linearRampToValueAtTime(.14,s+.012),y.gain.exponentialRampToValueAtTime(.001,s+.18),S.connect(y),y.connect(this.ctx.destination),S.start(s),S.stop(s+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.Q.setValueAtTime(6.5,e),s.frequency.setValueAtTime(310,e),s.frequency.exponentialRampToValueAtTime(920,e+.42),s.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(s),s.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(65,t),s.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.045),l.gain.setValueAtTime(.14,e+s*.045),l.gain.exponentialRampToValueAtTime(.001,e+s*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.045),o.stop(e+s*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.085),l.gain.setValueAtTime(.17,e+s*.085),l.gain.exponentialRampToValueAtTime(.001,e+s*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.085),o.stop(e+s*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],s=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(s[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playHookRescue(){this.playGrapple()}playNearMiss(){this.playNearMissSave()}playFallScream(){this.playFall()}playFrenzyStart(){this.playVictory()}playMissAlert(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,45]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(195,e),t.frequency.exponentialRampToValueAtTime(98,e+.22),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.25)}playFootstep(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine";const l=92+Math.min(45,(e-1)*30);s.frequency.setValueAtTime(l,t),s.frequency.exponentialRampToValueAtTime(42,t+.065),o.gain.setValueAtTime(.09,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.075)}updateWind(e=0){Math.abs(e)>.85&&Math.random()<.015&&this.playWindGust()}}const Ot=new S_,y_=tu;function mo(r){return h_(r).flag}const M_="nma_live_leaderboard_cache_v2";async function Qo(r,e,t,s=1){const o=(r||"Equilibrista").trim().slice(0,15),l=(e||"AR").trim(),u=mo(l),f={id:"player_self",name:o,country:l,flag:u,score:Math.max(0,Math.floor(t||0)),lp:Math.max(0,Math.floor(t||0)),level:Math.max(1,s||1),updatedAt:Date.now(),isPlayer:!0};try{localStorage.setItem(M_,JSON.stringify(f))}catch{}return f}async function l0(r){const e=((r==null?void 0:r.name)||"Equilibrista").trim().slice(0,15),t=((r==null?void 0:r.country)||"AR").trim(),s=mo(t),o=Math.max(0,Math.floor((r==null?void 0:r.score)??320)),l=Math.max(1,(r==null?void 0:r.level)||1),u=Math.floor(Date.now()/45e3),f=g_.map((S,y)=>{const _=(u+y*7)%11*15,M=S.baseLp+_;return{id:S.id,name:S.name,country:S.country,flag:S.flag,score:M,lp:M,level:Math.max(5,Math.min(100,Math.floor(M/180))),badge:S.badge,isPlayer:!1}}),m={id:"player_self",name:e,country:t,flag:s,score:o,lp:o,level:l,badge:"⚡",isPlayer:!0};return[...f,m].sort((S,y)=>y.lp-S.lp)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="186",E_=0,c0=1,w_=2,nu=1,T_=2,ll=3,Sa=0,ki=1,Fi=2,ms=0,dl=1,Oi=2,u0=3,d0=4,b_=5,po=100,A_=101,R_=102,C_=103,P_=104,L_=200,N_=201,I_=202,D_=203,vg=204,_g=205,U_=206,O_=207,F_=208,k_=209,B_=210,z_=211,V_=212,H_=213,G_=214,Uf=0,Of=1,Ff=2,fl=3,kf=4,Bf=5,zf=6,Vf=7,xg=0,W_=1,X_=2,Wr=0,Sg=1,yg=2,Mg=3,bh=4,Eg=5,wg=6,Tg=7,bg=300,ya=301,So=302,Qd=303,ef=304,vu=306,Ma=1e3,ps=1001,Hf=1002,ci=1003,q_=1004,Tc=1005,vi=1006,tf=1007,_a=1008,Ki=1009,Ag=1010,Rg=1011,hl=1012,Ah=1013,Xr=1014,Hr=1015,qr=1016,Rh=1017,Ch=1018,pl=1020,Cg=35902,Pg=35899,Lg=1021,Ng=1022,Rr=1023,vs=1026,xa=1027,Ig=1028,Ph=1029,Ea=1030,Lh=1031,Nh=1033,iu=33776,ru=33777,su=33778,au=33779,Gf=35840,Wf=35841,Xf=35842,qf=35843,jf=36196,$f=37492,Yf=37496,Kf=37488,Zf=37489,cu=37490,Jf=37491,Qf=37808,eh=37809,th=37810,nh=37811,ih=37812,rh=37813,sh=37814,ah=37815,oh=37816,lh=37817,ch=37818,uh=37819,dh=37820,fh=37821,hh=36492,ph=36494,mh=36495,gh=36283,vh=36284,uu=36285,_h=36286,j_=3200,xh=0,$_=1,Gs="",dr="srgb",du="srgb-linear",fu="linear",dn="srgb",nf=7680,Y_=519,K_=512,Z_=513,J_=514,Ih=515,Q_=516,ex=517,Dh=518,tx=519,nx=35044,f0="300 es",Gr=2e3,ml=2001;function ix(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rx(){const r=hu("canvas");return r.style.display="block",r}const h0={};function p0(...r){const e="THREE."+r.shift();console.log(e,...r)}function Dg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function bt(...r){r=Dg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function cn(...r){r=Dg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function vo(...r){const e=r.join(" ");e in h0||(h0[e]=!0,bt(...r))}function sx(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const ax={[Uf]:Of,[Ff]:zf,[kf]:Vf,[fl]:Bf,[Of]:Uf,[zf]:Ff,[Vf]:kf,[Bf]:fl};class Ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=Math.PI/180,Sh=180/Math.PI;function vl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mi[r&255]+mi[r>>8&255]+mi[r>>16&255]+mi[r>>24&255]+"-"+mi[e&255]+mi[e>>8&255]+"-"+mi[e>>16&15|64]+mi[e>>24&255]+"-"+mi[t&63|128]+mi[t>>8&255]+"-"+mi[t>>16&255]+mi[t>>24&255]+mi[s&255]+mi[s>>8&255]+mi[s>>16&255]+mi[s>>24&255]).toLowerCase()}function Qt(r,e,t){return Math.max(e,Math.min(t,r))}function ox(r,e){return(r%e+e)%e}function rf(r,e,t){return(1-t)*r+t*e}function el(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qt(this.x,e.x,t.x),this.y=Qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qt(this.x,e,t),this.y=Qt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Qt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Qt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;let qt=Hh;class Mo{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let m=s[o+0],p=s[o+1],S=s[o+2],y=s[o+3],_=l[u+0],M=l[u+1],E=l[u+2],A=l[u+3];if(y!==A||m!==_||p!==M||S!==E){let x=m*_+p*M+S*E+y*A;x<0&&(_=-_,M=-M,E=-E,A=-A,x=-x);let v=1-f;if(x<.9995){const R=Math.acos(x),U=Math.sin(R);v=Math.sin(v*R)/U,f=Math.sin(f*R)/U,m=m*v+_*f,p=p*v+M*f,S=S*v+E*f,y=y*v+A*f}else{m=m*v+_*f,p=p*v+M*f,S=S*v+E*f,y=y*v+A*f;const R=1/Math.sqrt(m*m+p*p+S*S+y*y);m*=R,p*=R,S*=R,y*=R}}e[t]=m,e[t+1]=p,e[t+2]=S,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],m=s[o+1],p=s[o+2],S=s[o+3],y=l[u],_=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+S*y+m*M-p*_,e[t+1]=m*E+S*_+p*y-f*M,e[t+2]=p*E+S*M+f*_-m*y,e[t+3]=S*E-f*y-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(s/2),S=f(o/2),y=f(l/2),_=m(s/2),M=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=_*S*y+p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y-_*M*E;break;case"YXZ":this._x=_*S*y+p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y+_*M*E;break;case"ZXY":this._x=_*S*y-p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y-_*M*E;break;case"ZYX":this._x=_*S*y-p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y+_*M*E;break;case"YZX":this._x=_*S*y+p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y-_*M*E;break;case"XZY":this._x=_*S*y-p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y+_*M*E;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],S=t[6],y=t[10],_=s+f+y;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(S-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>f&&s>y){const M=2*Math.sqrt(1+s-f-y);this._w=(S-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>y){const M=2*Math.sqrt(1+f-s-y);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+y-s-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,S=t._w;return this._x=s*S+u*f+o*p-l*m,this._y=o*S+u*m+l*f-s*p,this._z=l*S+u*p+s*m-o*f,this._w=u*S-s*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),S=Math.sin(p);m=Math.sin(m*p)/S,t=Math.sin(t*p)/S,this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gh=class Gh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(m0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(m0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*s),S=2*(f*t-l*o),y=2*(l*s-u*t);return this.x=t+m*p+u*y-f*S,this.y=s+m*S+f*p-l*y,this.z=o+m*y+l*S-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qt(this.x,e.x,t.x),this.y=Qt(this.y,e.y,t.y),this.z=Qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qt(this.x,e,t),this.y=Qt(this.y,e,t),this.z=Qt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Qt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-s*m,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Qt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;let te=Gh;const sf=new te,m0=new Mo,Wh=class Wh{constructor(e,t,s,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p)}set(e,t,s,o,l,u,f,m,p){const S=this.elements;return S[0]=e,S[1]=o,S[2]=f,S[3]=t,S[4]=l,S[5]=m,S[6]=s,S[7]=u,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],m=s[6],p=s[1],S=s[4],y=s[7],_=s[2],M=s[5],E=s[8],A=o[0],x=o[3],v=o[6],R=o[1],U=o[4],b=o[7],I=o[2],N=o[5],k=o[8];return l[0]=u*A+f*R+m*I,l[3]=u*x+f*U+m*N,l[6]=u*v+f*b+m*k,l[1]=p*A+S*R+y*I,l[4]=p*x+S*U+y*N,l[7]=p*v+S*b+y*k,l[2]=_*A+M*R+E*I,l[5]=_*x+M*U+E*N,l[8]=_*v+M*b+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8];return t*u*S-t*f*p-s*l*S+s*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8],y=S*u-f*p,_=f*m-S*l,M=p*l-u*m,E=t*y+s*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(o*p-S*s)*A,e[2]=(f*s-o*u)*A,e[3]=_*A,e[4]=(S*t-o*m)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(s*m-p*t)*A,e[8]=(u*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return vo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(af.makeScale(e,t)),this}rotate(e){return vo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(af.makeRotation(-e)),this}translate(e,t){return vo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;let It=Wh;const af=new It,g0=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v0=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const r={enabled:!0,workingColorSpace:du,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===dn&&(o.r=gs(o.r),o.g=gs(o.g),o.b=gs(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===dn&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gs?fu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[du]:{primaries:e,whitePoint:s,transfer:fu,toXYZ:g0,fromXYZ:v0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dr},outputColorSpaceConfig:{drawingBufferColorSpace:dr}},[dr]:{primaries:e,whitePoint:s,transfer:dn,toXYZ:g0,fromXYZ:v0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dr}}}),r}const Jt=lx();function gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _o(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ja;class cx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ja===void 0&&(Ja=hu("canvas")),Ja.width=e.width,Ja.height=e.height;const o=Ja.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Ja}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gs(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(gs(t[s]/255)*255):t[s]=gs(t[s]);return{data:t,width:e.width,height:e.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Uh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(of(o[u].image)):l.push(of(o[u]))}else l=of(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function of(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}let dx=0;const lf=new te;class _i extends Ta{constructor(e=_i.DEFAULT_IMAGE,t=_i.DEFAULT_MAPPING,s=ps,o=ps,l=vi,u=_a,f=Rr,m=Ki,p=_i.DEFAULT_ANISOTROPY,S=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=vl(),this.name="",this.source=new Uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lf).x}get height(){return this.source.getSize(lf).y}get depth(){return this.source.getSize(lf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){bt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){bt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ma:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ma:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=bg;_i.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const m=e.elements,p=m[0],S=m[4],y=m[8],_=m[1],M=m[5],E=m[9],A=m[2],x=m[6],v=m[10];if(Math.abs(S-_)<.01&&Math.abs(y-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(S+_)<.1&&Math.abs(y+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,b=(M+1)/2,I=(v+1)/2,N=(S+_)/4,k=(y+A)/4,T=(E+x)/4;return U>b&&U>I?U<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(U),o=N/s,l=k/s):b>I?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=N/o,l=T/o):I<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),s=k/l,o=T/l),this.set(s,o,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(y-A)*(y-A)+(_-S)*(_-S));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(y-A)/R,this.z=(_-S)/R,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qt(this.x,e.x,t.x),this.y=Qt(this.y,e.y,t.y),this.z=Qt(this.z,e.z,t.z),this.w=Qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qt(this.x,e,t),this.y=Qt(this.y,e,t),this.z=Qt(this.z,e,t),this.w=Qt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Qt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let In=Xh;class fx extends Ta{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new In(0,0,e,t),this.scissorTest=!1,this.viewport=new In(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new _i(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Uh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends fx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Ug extends _i{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends _i{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const gu=class gu{constructor(e,t,s,o,l,u,f,m,p,S,y,_,M,E,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p,S,y,_,M,E,A,x)}set(e,t,s,o,l,u,f,m,p,S,y,_,M,E,A,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=S,v[10]=y,v[14]=_,v[3]=M,v[7]=E,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gu().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/Qa.setFromMatrixColumn(e,0).length(),l=1/Qa.setFromMatrixColumn(e,1).length(),u=1/Qa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),m=Math.cos(o),p=Math.sin(o),S=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const _=u*S,M=u*y,E=f*S,A=f*y;t[0]=m*S,t[4]=-m*y,t[8]=p,t[1]=M+E*p,t[5]=_-A*p,t[9]=-f*m,t[2]=A-_*p,t[6]=E+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*S,M=m*y,E=p*S,A=p*y;t[0]=_+A*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*y,t[5]=u*S,t[9]=-f,t[2]=M*f-E,t[6]=A+_*f,t[10]=u*m}else if(e.order==="ZXY"){const _=m*S,M=m*y,E=p*S,A=p*y;t[0]=_-A*f,t[4]=-u*y,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*S,t[9]=A-_*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const _=u*S,M=u*y,E=f*S,A=f*y;t[0]=m*S,t[4]=E*p-M,t[8]=_*p+A,t[1]=m*y,t[5]=A*p+_,t[9]=M*p-E,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,E=f*m,A=f*p;t[0]=m*S,t[4]=A-_*y,t[8]=E*y+M,t[1]=y,t[5]=u*S,t[9]=-f*S,t[2]=-p*S,t[6]=M*y+E,t[10]=_-A*y}else if(e.order==="XZY"){const _=u*m,M=u*p,E=f*m,A=f*p;t[0]=m*S,t[4]=-y,t[8]=p*S,t[1]=_*y+A,t[5]=u*S,t[9]=M*y-E,t[2]=E*y-M,t[6]=f*S,t[10]=A*y+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,s){const o=this.elements;return ji.subVectors(e,t),ji.lengthSq()===0&&(ji.z=1),ji.normalize(),Os.crossVectors(s,ji),Os.lengthSq()===0&&(Math.abs(s.z)===1?ji.x+=1e-4:ji.z+=1e-4,ji.normalize(),Os.crossVectors(s,ji)),Os.normalize(),bc.crossVectors(ji,Os),o[0]=Os.x,o[4]=bc.x,o[8]=ji.x,o[1]=Os.y,o[5]=bc.y,o[9]=ji.y,o[2]=Os.z,o[6]=bc.z,o[10]=ji.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],m=s[8],p=s[12],S=s[1],y=s[5],_=s[9],M=s[13],E=s[2],A=s[6],x=s[10],v=s[14],R=s[3],U=s[7],b=s[11],I=s[15],N=o[0],k=o[4],T=o[8],L=o[12],z=o[1],H=o[5],q=o[9],re=o[13],G=o[2],ne=o[6],fe=o[10],oe=o[14],Z=o[3],J=o[7],K=o[11],O=o[15];return l[0]=u*N+f*z+m*G+p*Z,l[4]=u*k+f*H+m*ne+p*J,l[8]=u*T+f*q+m*fe+p*K,l[12]=u*L+f*re+m*oe+p*O,l[1]=S*N+y*z+_*G+M*Z,l[5]=S*k+y*H+_*ne+M*J,l[9]=S*T+y*q+_*fe+M*K,l[13]=S*L+y*re+_*oe+M*O,l[2]=E*N+A*z+x*G+v*Z,l[6]=E*k+A*H+x*ne+v*J,l[10]=E*T+A*q+x*fe+v*K,l[14]=E*L+A*re+x*oe+v*O,l[3]=R*N+U*z+b*G+I*Z,l[7]=R*k+U*H+b*ne+I*J,l[11]=R*T+U*q+b*fe+I*K,l[15]=R*L+U*re+b*oe+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],S=e[2],y=e[6],_=e[10],M=e[14],E=e[3],A=e[7],x=e[11],v=e[15],R=m*M-p*_,U=f*M-p*y,b=f*_-m*y,I=u*M-p*S,N=u*_-m*S,k=u*y-f*S;return t*(A*R-x*U+v*b)-s*(E*R-x*I+v*N)+o*(E*U-A*I+v*k)-l*(E*b-A*N+x*k)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],S=e[10];return t*(u*S-f*p)-s*(l*S-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8],y=e[9],_=e[10],M=e[11],E=e[12],A=e[13],x=e[14],v=e[15],R=t*f-s*u,U=t*m-o*u,b=t*p-l*u,I=s*m-o*f,N=s*p-l*f,k=o*p-l*m,T=S*A-y*E,L=S*x-_*E,z=S*v-M*E,H=y*x-_*A,q=y*v-M*A,re=_*v-M*x,G=R*re-U*q+b*H+I*z-N*L+k*T;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/G;return e[0]=(f*re-m*q+p*H)*ne,e[1]=(o*q-s*re-l*H)*ne,e[2]=(A*k-x*N+v*I)*ne,e[3]=(_*N-y*k-M*I)*ne,e[4]=(m*z-u*re-p*L)*ne,e[5]=(t*re-o*z+l*L)*ne,e[6]=(x*b-E*k-v*U)*ne,e[7]=(S*k-_*b+M*U)*ne,e[8]=(u*q-f*z+p*T)*ne,e[9]=(s*z-t*q-l*T)*ne,e[10]=(E*N-A*b+v*R)*ne,e[11]=(y*b-S*N-M*R)*ne,e[12]=(f*L-u*H-m*T)*ne,e[13]=(t*H-s*L+o*T)*ne,e[14]=(A*U-E*I-x*R)*ne,e[15]=(S*I-y*U+_*R)*ne,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,m=e.z,p=l*u,S=l*f;return this.set(p*u+s,p*f-o*m,p*m+o*f,0,p*f+o*m,S*f+s,S*m-o*u,0,p*m-o*f,S*m+o*u,l*m*m+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,S=u+u,y=f+f,_=l*p,M=l*S,E=l*y,A=u*S,x=u*y,v=f*y,R=m*p,U=m*S,b=m*y,I=s.x,N=s.y,k=s.z;return o[0]=(1-(A+v))*I,o[1]=(M+b)*I,o[2]=(E-U)*I,o[3]=0,o[4]=(M-b)*N,o[5]=(1-(_+v))*N,o[6]=(x+R)*N,o[7]=0,o[8]=(E+U)*k,o[9]=(x-R)*k,o[10]=(1-(_+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=Qa.set(o[0],o[1],o[2]).length();const f=Qa.set(o[4],o[5],o[6]).length(),m=Qa.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Tr.copy(this);const p=1/u,S=1/f,y=1/m;return Tr.elements[0]*=p,Tr.elements[1]*=p,Tr.elements[2]*=p,Tr.elements[4]*=S,Tr.elements[5]*=S,Tr.elements[6]*=S,Tr.elements[8]*=y,Tr.elements[9]*=y,Tr.elements[10]*=y,t.setFromRotationMatrix(Tr),s.x=u,s.y=f,s.z=m,this}makePerspective(e,t,s,o,l,u,f=Gr,m=!1){const p=this.elements,S=2*l/(t-e),y=2*l/(s-o),_=(t+e)/(t-e),M=(s+o)/(s-o);let E,A;if(m)E=l/(u-l),A=u*l/(u-l);else if(f===Gr)E=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===ml)E=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=S,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Gr,m=!1){const p=this.elements,S=2/(t-e),y=2/(s-o),_=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,A;if(m)E=1/(u-l),A=u/(u-l);else if(f===Gr)E=-2/(u-l),A=-(u+l)/(u-l);else if(f===ml)E=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=S,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};gu.prototype.isMatrix4=!0;let Cn=gu;const Qa=new te,Tr=new Cn,px=new te(0,0,0),mx=new te(1,1,1),Os=new te,bc=new te,ji=new te,_0=new Cn,x0=new Mo;class Xs{constructor(e=0,t=0,s=0,o=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],S=o[9],y=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Qt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-S,M),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return _0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return x0.setFromEuler(this),this.setFromQuaternion(x0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const S0=new te,eo=new Mo,ls=new Cn,Ac=new te,tl=new te,vx=new te,_x=new Mo,y0=new te(1,0,0),M0=new te(0,1,0),E0=new te(0,0,1),w0={type:"added"},xx={type:"removed"},to={type:"childadded",child:null},cf={type:"childremoved",child:null};class ii extends Ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new te,t=new Xs,s=new Mo,o=new te(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Cn},normalMatrix:{value:new It}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(y0,e)}rotateY(e){return this.rotateOnAxis(M0,e)}rotateZ(e){return this.rotateOnAxis(E0,e)}translateOnAxis(e,t){return S0.copy(e).applyQuaternion(this.quaternion),this.position.add(S0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(y0,e)}translateY(e){return this.translateOnAxis(M0,e)}translateZ(e){return this.translateOnAxis(E0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ac.copy(e):Ac.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(tl,Ac,this.up):ls.lookAt(Ac,tl,this.up),this.quaternion.setFromRotationMatrix(ls),o&&(ls.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(ls),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w0),to.child=e,this.dispatchEvent(to),to.child=null):cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w0),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const y=m[p];l(e.shapes,y)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),S=u(e.images),y=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),y.length>0&&(s.shapes=y),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const m=[];for(const p in f){const S=f[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ii.DEFAULT_UP=new te(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nn extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,s),v=this._getHandJoint(p,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const S=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],_=S.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new nn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function df(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ht{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Jt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Jt.workingColorSpace){if(e=ox(e,1),t=Qt(t,0,1),s=Qt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=df(u,l,e+1/3),this.g=df(u,l,e),this.b=df(u,l,e-1/3)}return Jt.colorSpaceToWorking(this,o),this}setStyle(e,t=dr){function s(l){l!==void 0&&parseFloat(l)<1&&bt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:bt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dr){const s=Fg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dr){return Jt.workingToColorSpace(gi.copy(this),e),Math.round(Qt(gi.r*255,0,255))*65536+Math.round(Qt(gi.g*255,0,255))*256+Math.round(Qt(gi.b*255,0,255))}getHexString(e=dr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(gi.copy(this),t);const s=gi.r,o=gi.g,l=gi.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let m,p;const S=(f+u)/2;if(f===u)m=0,p=0;else{const y=u-f;switch(p=S<=.5?y/(u+f):y/(2-u-f),u){case s:m=(o-l)/y+(o<l?6:0);break;case o:m=(l-s)/y+2;break;case l:m=(s-o)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(gi.copy(this),t),e.r=gi.r,e.g=gi.g,e.b=gi.b,e}getStyle(e=dr){Jt.workingToColorSpace(gi.copy(this),e);const t=gi.r,s=gi.g,o=gi.b;return e!==dr?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(Rc);const s=rf(Fs.h,Rc.h,t),o=rf(Fs.s,Rc.s,t),l=rf(Fs.l,Rc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gi=new Ht;Ht.NAMES=Fg;class Oh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(e),this.density=t}clone(){return new Oh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yx extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xs,this.environmentIntensity=1,this.environmentRotation=new Xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const br=new te,cs=new te,ff=new te,us=new te,no=new te,io=new te,T0=new te,hf=new te,pf=new te,mf=new te,gf=new In,vf=new In,_f=new In;class fr{constructor(e=new te,t=new te,s=new te){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),br.subVectors(e,t),o.cross(br);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){br.subVectors(o,t),cs.subVectors(s,t),ff.subVectors(e,t);const u=br.dot(br),f=br.dot(cs),m=br.dot(ff),p=cs.dot(cs),S=cs.dot(ff),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const _=1/y,M=(p*m-f*S)*_,E=(u*S-f*m)*_;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(e,t,s,o,l,u,f,m){return this.getBarycoord(e,t,s,o,us)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,us.x),m.addScaledVector(u,us.y),m.addScaledVector(f,us.z),m)}static getInterpolatedAttribute(e,t,s,o,l,u){return gf.setScalar(0),vf.setScalar(0),_f.setScalar(0),gf.fromBufferAttribute(e,t),vf.fromBufferAttribute(e,s),_f.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(gf,l.x),u.addScaledVector(vf,l.y),u.addScaledVector(_f,l.z),u}static isFrontFacing(e,t,s,o){return br.subVectors(s,t),cs.subVectors(e,t),br.cross(cs).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return br.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),br.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return fr.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;no.subVectors(o,s),io.subVectors(l,s),hf.subVectors(e,s);const m=no.dot(hf),p=io.dot(hf);if(m<=0&&p<=0)return t.copy(s);pf.subVectors(e,o);const S=no.dot(pf),y=io.dot(pf);if(S>=0&&y<=S)return t.copy(o);const _=m*y-S*p;if(_<=0&&m>=0&&S<=0)return u=m/(m-S),t.copy(s).addScaledVector(no,u);mf.subVectors(e,l);const M=no.dot(mf),E=io.dot(mf);if(E>=0&&M<=E)return t.copy(l);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(io,f);const x=S*E-M*y;if(x<=0&&y-S>=0&&M-E>=0)return T0.subVectors(l,o),f=(y-S)/(y-S+(M-E)),t.copy(o).addScaledVector(T0,f);const v=1/(x+A+_);return u=A*v,f=_*v,t.copy(s).addScaledVector(no,u).addScaledVector(io,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ar):Ar.fromBufferAttribute(l,u),Ar.applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Pc.subVectors(this.max,nl),ro.subVectors(e.a,nl),so.subVectors(e.b,nl),ao.subVectors(e.c,nl),ks.subVectors(so,ro),Bs.subVectors(ao,so),fa.subVectors(ro,ao);let t=[0,-ks.z,ks.y,0,-Bs.z,Bs.y,0,-fa.z,fa.y,ks.z,0,-ks.x,Bs.z,0,-Bs.x,fa.z,0,-fa.x,-ks.y,ks.x,0,-Bs.y,Bs.x,0,-fa.y,fa.x,0];return!xf(t,ro,so,ao,Pc)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,ro,so,ao,Pc))?!1:(Lc.crossVectors(ks,Bs),t=[Lc.x,Lc.y,Lc.z],xf(t,ro,so,ao,Pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ds),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ds=[new te,new te,new te,new te,new te,new te,new te,new te],Ar=new te,Cc=new _l,ro=new te,so=new te,ao=new te,ks=new te,Bs=new te,fa=new te,nl=new te,Pc=new te,Lc=new te,ha=new te;function xf(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){ha.fromArray(r,l);const f=o.x*Math.abs(ha.x)+o.y*Math.abs(ha.y)+o.z*Math.abs(ha.z),m=e.dot(ha),p=t.dot(ha),S=s.dot(ha);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>f)return!1}return!0}const Hn=new te,Nc=new qt;let Mx=0;class Pr extends Ta{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=nx,this.updateRanges=[],this.gpuType=Hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Nc.fromBufferAttribute(this,t),Nc.applyMatrix3(e),this.setXY(t,Nc.x,Nc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=el(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Di(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=el(t,this.array)),t}setX(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=el(t,this.array)),t}setY(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=el(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=el(t,this.array)),t}setW(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),s=Di(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),s=Di(s,this.array),o=Di(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),s=Di(s,this.array),o=Di(o,this.array),l=Di(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class kg extends Pr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Bg extends Pr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class vn extends Pr{constructor(e,t,s){super(new Float32Array(e),t,s)}}const Ex=new _l,il=new te,Sf=new te;class xl{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Ex.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(il,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Sf)),this.expandByPoint(il.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wx=0;const ur=new Cn,yf=new ii,oo=new te,$i=new _l,rl=new _l,ti=new te;class $n extends Ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?Bg:kg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new It().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,s){return ur.makeTranslation(e,t,s),this.applyMatrix4(ur),this}scale(e,t,s){return ur.makeScale(e,t,s),this.applyMatrix4(ur),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new vn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];$i.setFromBufferAttribute(l),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,$i.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,$i.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint($i.min),this.boundingBox.expandByPoint($i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if($i.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];rl.setFromBufferAttribute(f),this.morphTargetsRelative?(ti.addVectors($i.min,rl.min),$i.expandByPoint(ti),ti.addVectors($i.max,rl.max),$i.expandByPoint(ti)):($i.expandByPoint(rl.min),$i.expandByPoint(rl.max))}$i.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)ti.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ti));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,S=f.count;p<S;p++)ti.fromBufferAttribute(f,p),m&&(oo.fromBufferAttribute(e,p),ti.add(oo)),o=Math.max(o,s.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new Pr(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let T=0;T<s.count;T++)f[T]=new te,m[T]=new te;const p=new te,S=new te,y=new te,_=new qt,M=new qt,E=new qt,A=new te,x=new te;function v(T,L,z){p.fromBufferAttribute(s,T),S.fromBufferAttribute(s,L),y.fromBufferAttribute(s,z),_.fromBufferAttribute(l,T),M.fromBufferAttribute(l,L),E.fromBufferAttribute(l,z),S.sub(p),y.sub(p),M.sub(_),E.sub(_);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(A.copy(S).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(H),x.copy(y).multiplyScalar(M.x).addScaledVector(S,-E.x).multiplyScalar(H),f[T].add(A),f[L].add(A),f[z].add(A),m[T].add(x),m[L].add(x),m[z].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,L=R.length;T<L;++T){const z=R[T],H=z.start,q=z.count;for(let re=H,G=H+q;re<G;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const U=new te,b=new te,I=new te,N=new te;function k(T){I.fromBufferAttribute(o,T),N.copy(I);const L=f[T];U.copy(L),U.sub(I.multiplyScalar(I.dot(L))).normalize(),b.crossVectors(N,L);const H=b.dot(m[T])<0?-1:1;u.setXYZW(T,U.x,U.y,U.z,H)}for(let T=0,L=R.length;T<L;++T){const z=R[T],H=z.start,q=z.count;for(let re=H,G=H+q;re<G;re+=3)k(e.getX(re+0)),k(e.getX(re+1)),k(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new Pr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const o=new te,l=new te,u=new te,f=new te,m=new te,p=new te,S=new te,y=new te;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),A=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,x),S.subVectors(u,l),y.subVectors(o,l),S.cross(y),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,x),f.add(S),m.add(S),p.add(S),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),S.subVectors(u,l),y.subVectors(o,l),S.cross(y),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(f,m){const p=f.array,S=f.itemSize,y=f.normalized,_=new p.constructor(m.length*S);let M=0,E=0;for(let A=0,x=m.length;A<x;A++){f.isInterleavedBufferAttribute?M=m[A]*f.data.stride+f.offset:M=m[A]*S;for(let v=0;v<S;v++)_[E++]=p[M++]}return new Pr(_,S,y)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,s=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let S=0,y=p.length;S<y;S++){const _=p[S],M=e(_,s);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let y=0,_=p.length;y<_;y++){const M=p[y];S.push(M.toJSON(e.data))}S.length>0&&(o[m]=S,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const S=o[p];this.setAttribute(p,S.clone(t))}const l=e.morphAttributes;for(const p in l){const S=[],y=l[p];for(let _=0,M=y.length;_<M;_++)S.push(y[_].clone(t));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,S=u.length;p<S;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mf=new te,Tx=new te,bx=new It;class Vs{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Mf.subVectors(s,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Mf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||bx.getNormalMatrix(e),o=this.coplanarPoint(Mf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ax=0;class ba extends Ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=vl(),this.name="",this.type="Material",this.blending=dl,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vg,this.blendDst=_g,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nf,this.stencilZFail=nf,this.stencilZPass=nf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){bt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){bt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Vs().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new qt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fs=new te,Ef=new te,Ic=new te,Dc=new te;class Fh{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Ef.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),Dc.copy(this.origin).sub(Ef);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ic),f=Dc.dot(this.direction),m=-Dc.dot(Ic),p=Dc.lengthSq(),S=Math.abs(1-u*u);let y,_,M,E;if(S>0)if(y=u*m-f,_=u*f-m,E=l*S,y>=0)if(_>=-E)if(_<=E){const A=1/S;y*=A,_*=A,M=y*(y+u*_+2*f)+_*(u*y+_+2*m)+p}else _=l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;else _=-l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;else _<=-E?(y=Math.max(0,-(-u*l+f)),_=y>0?-l:Math.min(Math.max(-l,-m),l),M=-y*y+_*(_+2*m)+p):_<=E?(y=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(y=Math.max(0,-(u*l+f)),_=y>0?l:Math.min(Math.max(-l,-m),l),M=-y*y+_*(_+2*m)+p);else _=u>0?-l:l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Ef).addScaledVector(Ic,_),M}intersectSphere(e,t){if(e.radius<0)return null;fs.subVectors(e.center,this.origin);const s=fs.dot(this.direction),o=fs.dot(fs)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,m=s+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,m;const p=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),S>=0?(l=(e.min.y-_.y)*S,u=(e.max.y-_.y)*S):(l=(e.max.y-_.y)*S,u=(e.min.y-_.y)*S),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-_.z)*y,m=(e.max.z-_.z)*y):(f=(e.max.z-_.z)*y,m=(e.min.z-_.z)*y),s>m||f>o)||((f>s||s!==s)&&(s=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,s,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,S=f.z,y=e.x-u.x,_=e.y-u.y,M=e.z-u.z,E=t.x-u.x,A=t.y-u.y,x=t.z-u.z,v=s.x-u.x,R=s.y-u.y,U=s.z-u.z,b=Math.abs(m),I=Math.abs(p),N=Math.abs(S);let k,T,L,z,H,q,re,G,ne,fe,oe,Z;if(b>=I&&b>=N?(L=m,q=y,ne=E,Z=v,m>=0?(k=p,T=S,z=_,H=M,re=A,G=x,fe=R,oe=U):(k=S,T=p,z=M,H=_,re=x,G=A,fe=U,oe=R)):I>=N?(L=p,q=_,ne=A,Z=R,p>=0?(k=S,T=m,z=M,H=y,re=x,G=E,fe=U,oe=v):(k=m,T=S,z=y,H=M,re=E,G=x,fe=v,oe=U)):(L=S,q=M,ne=x,Z=U,S>=0?(k=m,T=p,z=y,H=_,re=E,G=A,fe=v,oe=R):(k=p,T=m,z=_,H=y,re=A,G=E,fe=R,oe=v)),L===0)return null;const J=k/L,K=T/L,O=1/L,ce=z-J*q,we=H-K*q,Be=re-J*ne,Xe=G-K*ne,Ye=fe-J*Z,de=oe-K*Z,ge=Ye*Xe-de*Be,Ae=ce*de-we*Ye,it=Be*we-Xe*ce;if(o){if(ge<0||Ae<0||it<0)return null}else if((ge<0||Ae<0||it<0)&&(ge>0||Ae>0||it>0))return null;const ze=ge+Ae+it;if(ze===0)return null;const yt=O*(ge*q+Ae*ne+it*Z);return(ze>0?yt<0:yt>0)?null:this.at(yt/ze,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St extends ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const b0=new Cn,pa=new Fh,Uc=new xl,A0=new te,Oc=new te,Fc=new te,kc=new te,wf=new te,Bc=new te,R0=new te,zc=new te;class ve extends ii{constructor(e=new $n,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Bc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const S=f[m],y=l[m];S!==0&&(wf.fromBufferAttribute(y,e),u?Bc.addScaledVector(wf,S):Bc.addScaledVector(wf.sub(t),S))}t.add(Bc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),pa.copy(e.ray).recast(e.near),!(Uc.containsPoint(pa.origin)===!1&&(pa.intersectSphere(Uc,A0)===null||pa.origin.distanceToSquared(A0)>(e.far-e.near)**2))&&(b0.copy(l).invert(),pa.copy(e.ray).applyMatrix4(b0),!(s.boundingBox!==null&&pa.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,S=l.attributes.uv1,y=l.attributes.normal,_=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const x=_[E],v=u[x.materialIndex],R=Math.max(x.start,M.start),U=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let b=R,I=U;b<I;b+=3){const N=f.getX(b),k=f.getX(b+1),T=f.getX(b+2);o=Vc(this,v,e,s,p,S,y,N,k,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let x=E,v=A;x<v;x+=3){const R=f.getX(x),U=f.getX(x+1),b=f.getX(x+2);o=Vc(this,u,e,s,p,S,y,R,U,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const x=_[E],v=u[x.materialIndex],R=Math.max(x.start,M.start),U=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let b=R,I=U;b<I;b+=3){const N=b,k=b+1,T=b+2;o=Vc(this,v,e,s,p,S,y,N,k,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=E,v=A;x<v;x+=3){const R=x,U=x+1,b=x+2;o=Vc(this,u,e,s,p,S,y,R,U,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Rx(r,e,t,s,o,l,u,f){let m;if(e.side===ki?m=s.intersectTriangle(u,l,o,!0,f):m=s.intersectTriangle(o,l,u,e.side===Sa,f),m===null)return null;zc.copy(f),zc.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(zc);return p<t.near||p>t.far?null:{distance:p,point:zc.clone(),object:r}}function Vc(r,e,t,s,o,l,u,f,m,p){r.getVertexPosition(f,Oc),r.getVertexPosition(m,Fc),r.getVertexPosition(p,kc);const S=Rx(r,e,t,s,Oc,Fc,kc,R0);if(S){const y=new te;fr.getBarycoord(R0,Oc,Fc,kc,y),o&&(S.uv=fr.getInterpolatedAttribute(o,f,m,p,y,new qt)),l&&(S.uv1=fr.getInterpolatedAttribute(l,f,m,p,y,new qt)),u&&(S.normal=fr.getInterpolatedAttribute(u,f,m,p,y,new te),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new te,materialIndex:0};fr.getNormal(Oc,Fc,kc,_.normal),S.face=_,S.barycoord=y}return S}class Cx extends _i{constructor(e=null,t=1,s=1,o,l,u,f,m,p=ci,S=ci,y,_){super(null,u,f,m,p,S,o,l,y,_),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ma=new xl,Px=new qt(.5,.5),Hc=new te;class kh{constructor(e=new Vs,t=new Vs,s=new Vs,o=new Vs,l=new Vs,u=new Vs){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Gr,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],S=l[4],y=l[5],_=l[6],M=l[7],E=l[8],A=l[9],x=l[10],v=l[11],R=l[12],U=l[13],b=l[14],I=l[15];if(o[0].setComponents(p-u,M-S,v-E,I-R).normalize(),o[1].setComponents(p+u,M+S,v+E,I+R).normalize(),o[2].setComponents(p+f,M+y,v+A,I+U).normalize(),o[3].setComponents(p-f,M-y,v-A,I-U).normalize(),s)o[4].setComponents(m,_,x,b).normalize(),o[5].setComponents(p-m,M-_,v-x,I-b).normalize();else if(o[4].setComponents(p-m,M-_,v-x,I-b).normalize(),t===Gr)o[5].setComponents(p+m,M+_,v+x,I+b).normalize();else if(t===ml)o[5].setComponents(m,_,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ma.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ma.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ma)}intersectsSprite(e){ma.center.set(0,0,0);const t=Px.distanceTo(e.center);return ma.radius=.7071067811865476+t,ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(ma)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Hc.x=o.normal.x>0?e.max.x:e.min.x,Hc.y=o.normal.y>0?e.max.y:e.min.y,Hc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hs extends ba{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new te,mu=new te,C0=new Cn,sl=new Fh,Gc=new xl,Tf=new te,P0=new te;class zg extends ii{constructor(e=new $n,t=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)pu.fromBufferAttribute(t,o-1),mu.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new vn(s,1))}else bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(o),Gc.radius+=l,e.ray.intersectsSphere(Gc)===!1)return;C0.copy(o).invert(),sl.copy(e.ray).applyMatrix4(C0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,S=s.index,_=s.attributes.position;if(S!==null){const M=Math.max(0,u.start),E=Math.min(S.count,u.start+u.count);for(let A=M,x=E-1;A<x;A+=p){const v=S.getX(A),R=S.getX(A+1),U=Wc(this,e,sl,m,v,R,A);U&&t.push(U)}if(this.isLineLoop){const A=S.getX(E-1),x=S.getX(M),v=Wc(this,e,sl,m,A,x,E-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let A=M,x=E-1;A<x;A+=p){const v=Wc(this,e,sl,m,A,A+1,A);v&&t.push(v)}if(this.isLineLoop){const A=Wc(this,e,sl,m,E-1,M,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Wc(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(pu.fromBufferAttribute(f,o),mu.fromBufferAttribute(f,l),t.distanceSqToSegment(pu,mu,Tf,P0)>s)return;Tf.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Tf);if(!(p<e.near||p>e.far))return{distance:p,point:P0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const L0=new te,N0=new te;class lo extends zg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)L0.fromBufferAttribute(t,o),N0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+L0.distanceTo(N0);e.setAttribute("lineDistance",new vn(s,1))}else bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends ba{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const I0=new Cn,yh=new Fh,Xc=new xl,qc=new te;class Lx extends ii{constructor(e=new $n,t=new Vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(o),Xc.radius+=l,e.ray.intersectsSphere(Xc)===!1)return;I0.copy(o).invert(),yh.copy(e.ray).applyMatrix4(I0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=s.index,y=s.attributes.position;if(p!==null){const _=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=_,A=M;E<A;E++){const x=p.getX(E);qc.fromBufferAttribute(y,x),D0(qc,x,m,o,e,t,this)}}else{const _=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let E=_,A=M;E<A;E++)qc.fromBufferAttribute(y,E),D0(qc,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function D0(r,e,t,s,o,l,u){const f=yh.distanceSqToPoint(r);if(f<t){const m=new te;yh.closestPointToPoint(r,m),m.applyMatrix4(s);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Hg extends _i{constructor(e=[],t=ya,s,o,l,u,f,m,p,S){super(e,t,s,o,l,u,f,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _u extends _i{constructor(e,t,s,o,l,u,f,m,p){super(e,t,s,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gl extends _i{constructor(e,t,s=Xr,o,l,u,f=ci,m=ci,p,S=vs,y=1){if(S!==vs&&S!==xa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:y};super(_,o,l,u,f,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Nx extends gl{constructor(e,t=Xr,s=ya,o,l,u=ci,f=ci,m,p=vs){const S={width:e,height:e,depth:1},y=[S,S,S,S,S,S];super(e,e,t,s,o,l,u,f,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gg extends _i{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tt extends $n{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],S=[],y=[];let _=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(y,2));function E(A,x,v,R,U,b,I,N,k,T,L){const z=b/k,H=I/T,q=b/2,re=I/2,G=N/2,ne=k+1,fe=T+1;let oe=0,Z=0;const J=new te;for(let K=0;K<fe;K++){const O=K*H-re;for(let ce=0;ce<ne;ce++){const we=ce*z-q;J[A]=we*R,J[x]=O*U,J[v]=G,p.push(J.x,J.y,J.z),J[A]=0,J[x]=0,J[v]=N>0?1:-1,S.push(J.x,J.y,J.z),y.push(ce/k),y.push(1-K/T),oe+=1}}for(let K=0;K<T;K++)for(let O=0;O<k;O++){const ce=_+O+ne*K,we=_+O+ne*(K+1),Be=_+(O+1)+ne*(K+1),Xe=_+(O+1)+ne*K;m.push(ce,we,Xe),m.push(we,Be,Xe),Z+=6}f.addGroup(M,Z,L),M+=Z,_+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class va extends $n{constructor(e=1,t=1,s=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:s,radialSegments:o,heightSegments:l},t=Math.max(0,t),s=Math.max(1,Math.floor(s)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],S=t/2,y=Math.PI/2*e,_=t,M=2*y+_,E=s*2+l,A=o+1,x=new te,v=new te;for(let R=0;R<=E;R++){let U=0,b=0,I=0,N=0;if(R<=s){const L=R/s,z=L*Math.PI/2;b=-S-e*Math.cos(z),I=e*Math.sin(z),N=-e*Math.cos(z),U=L*y}else if(R<=s+l){const L=(R-s)/l;b=-S+L*t,I=e,N=0,U=y+L*_}else{const L=(R-s-l)/s,z=L*Math.PI/2;b=S+e*Math.sin(z),I=e*Math.cos(z),N=e*Math.sin(z),U=y+_+L*y}const k=Math.max(0,Math.min(1,U/M));let T=0;R===0?T=.5/o:R===E&&(T=-.5/o);for(let L=0;L<=o;L++){const z=L/o,H=z*Math.PI*2,q=Math.sin(H),re=Math.cos(H);v.x=-I*re,v.y=b,v.z=I*q,f.push(v.x,v.y,v.z),x.set(-I*re,N,I*q),x.normalize(),m.push(x.x,x.y,x.z),p.push(z+T,k)}if(R>0){const L=(R-1)*A;for(let z=0;z<o;z++){const H=L+z,q=L+z+1,re=R*A+z,G=R*A+z+1;u.push(H,q,re),u.push(q,G,re)}}}this.setIndex(u),this.setAttribute("position",new vn(f,3)),this.setAttribute("normal",new vn(m,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class on extends $n{constructor(e=1,t=1,s=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const S=[],y=[],_=[],M=[];let E=0;const A=[],x=s/2;let v=0;R(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(S),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(M,2));function R(){const b=new te,I=new te;let N=0;const k=(t-e)/s;for(let T=0;T<=l;T++){const L=[],z=T/l,H=z*(t-e)+e;for(let q=0;q<=o;q++){const re=q/o,G=re*m+f,ne=Math.sin(G),fe=Math.cos(G);I.x=H*ne,I.y=-z*s+x,I.z=H*fe,y.push(I.x,I.y,I.z),b.set(ne,k,fe).normalize(),_.push(b.x,b.y,b.z),M.push(re,1-z),L.push(E++)}A.push(L)}for(let T=0;T<o;T++)for(let L=0;L<l;L++){const z=A[L][T],H=A[L+1][T],q=A[L+1][T+1],re=A[L][T+1];(e>0||L!==0)&&(S.push(z,H,re),N+=3),(t>0||L!==l-1)&&(S.push(H,q,re),N+=3)}p.addGroup(v,N,0),v+=N}function U(b){const I=E,N=new qt,k=new te;let T=0;const L=b===!0?e:t,z=b===!0?1:-1;for(let q=1;q<=o;q++)y.push(0,x*z,0),_.push(0,z,0),M.push(.5,.5),E++;const H=E;for(let q=0;q<=o;q++){const G=q/o*m+f,ne=Math.cos(G),fe=Math.sin(G);k.x=L*fe,k.y=x*z,k.z=L*ne,y.push(k.x,k.y,k.z),_.push(0,z,0),N.x=ne*.5+.5,N.y=fe*.5*z+.5,M.push(N.x,N.y),E++}for(let q=0;q<o;q++){const re=I+q,G=H+q;b===!0?S.push(G,G+1,re):S.push(G+1,G,re),T+=3}p.addGroup(v,T,b===!0?1:2),v+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wi extends on{constructor(e=1,t=1,s=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,s,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new wi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bh extends $n{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),S(),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(l.slice(),3)),this.setAttribute("uv",new vn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const U=new te,b=new te,I=new te;for(let N=0;N<t.length;N+=3)M(t[N+0],U),M(t[N+1],b),M(t[N+2],I),m(U,b,I,R)}function m(R,U,b,I){const N=I+1,k=[];for(let T=0;T<=N;T++){k[T]=[];const L=R.clone().lerp(b,T/N),z=U.clone().lerp(b,T/N),H=N-T;for(let q=0;q<=H;q++)q===0&&T===N?k[T][q]=L:k[T][q]=L.clone().lerp(z,q/H)}for(let T=0;T<N;T++)for(let L=0;L<2*(N-T)-1;L++){const z=Math.floor(L/2);L%2===0?(_(k[T][z+1]),_(k[T+1][z]),_(k[T][z])):(_(k[T][z+1]),_(k[T+1][z+1]),_(k[T+1][z]))}}function p(R){const U=new te;for(let b=0;b<l.length;b+=3)U.x=l[b+0],U.y=l[b+1],U.z=l[b+2],U.normalize().multiplyScalar(R),l[b+0]=U.x,l[b+1]=U.y,l[b+2]=U.z}function S(){const R=new te;for(let U=0;U<l.length;U+=3){R.x=l[U+0],R.y=l[U+1],R.z=l[U+2];const b=x(R)/2/Math.PI+.5,I=v(R)/Math.PI+.5;u.push(b,1-I)}E(),y()}function y(){for(let R=0;R<u.length;R+=6){const U=u[R+0],b=u[R+2],I=u[R+4],N=Math.max(U,b,I),k=Math.min(U,b,I);N>.9&&k<.1&&(U<.2&&(u[R+0]+=1),b<.2&&(u[R+2]+=1),I<.2&&(u[R+4]+=1))}}function _(R){l.push(R.x,R.y,R.z)}function M(R,U){const b=R*3;U.x=e[b+0],U.y=e[b+1],U.z=e[b+2]}function E(){const R=new te,U=new te,b=new te,I=new te,N=new qt,k=new qt,T=new qt;for(let L=0,z=0;L<l.length;L+=9,z+=6){R.set(l[L+0],l[L+1],l[L+2]),U.set(l[L+3],l[L+4],l[L+5]),b.set(l[L+6],l[L+7],l[L+8]),N.set(u[z+0],u[z+1]),k.set(u[z+2],u[z+3]),T.set(u[z+4],u[z+5]),I.copy(R).add(U).add(b).divideScalar(3);const H=x(I);A(N,z+0,R,H),A(k,z+2,U,H),A(T,z+4,b,H)}}function A(R,U,b,I){I<0&&R.x===1&&(u[U]=R.x-1),b.x===0&&b.z===0&&(u[U]=I/2/Math.PI+.5)}function x(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.vertices,e.indices,e.radius,e.detail)}}const jc=new te,$c=new te,bf=new te,Yc=new fr;class co extends $n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(ou*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,p=[0,0,0],S=["a","b","c"],y=new Array(3),_={},M=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:A,b:x,c:v}=Yc;if(A.fromBufferAttribute(f,p[0]),x.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),Yc.getNormal(bf),y[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,y[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,y[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let R=0;R<3;R++){const U=(R+1)%3,b=y[R],I=y[U],N=Yc[S[R]],k=Yc[S[U]],T=`${b}_${I}`,L=`${I}_${b}`;L in _&&_[L]?(bf.dot(_[L].normal)<=l&&(M.push(N.x,N.y,N.z),M.push(k.x,k.y,k.z)),_[L]=null):T in _||(_[T]={index0:p[R],index1:p[U],normal:bf.clone()})}}for(const E in _)if(_[E]){const{index0:A,index1:x}=_[E];jc.fromBufferAttribute(f,A),$c.fromBufferAttribute(f,x),M.push(jc.x,jc.y,jc.z),M.push($c.x,$c.y,$c.z)}this.setAttribute("position",new vn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xu extends Bh{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xu(e.radius,e.detail)}}class wa extends $n{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),m=Math.floor(o),p=f+1,S=m+1,y=e/f,_=t/m,M=[],E=[],A=[],x=[];for(let v=0;v<S;v++){const R=v*_-u;for(let U=0;U<p;U++){const b=U*y-l;E.push(b,-R,0),A.push(0,0,1),x.push(U/f),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let R=0;R<f;R++){const U=R+p*v,b=R+p*(v+1),I=R+1+p*(v+1),N=R+1+p*v;M.push(U,b,N),M.push(b,I,N)}this.setIndex(M),this.setAttribute("position",new vn(E,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class ni extends $n{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const m=Math.min(u+f,Math.PI);let p=0;const S=[],y=new te,_=new te,M=[],E=[],A=[],x=[];for(let v=0;v<=s;v++){const R=[],U=v/s,b=u+U*f,I=e*Math.cos(b),N=Math.sqrt(e*e-I*I);let k=0;v===0&&u===0?k=.5/t:v===s&&m===Math.PI&&(k=-.5/t);for(let T=0;T<=t;T++){const L=T/t,z=o+L*l;y.x=-N*Math.cos(z),y.y=I,y.z=N*Math.sin(z),E.push(y.x,y.y,y.z),_.copy(y).normalize(),A.push(_.x,_.y,_.z),x.push(L+k,1-U),R.push(p++)}S.push(R)}for(let v=0;v<s;v++)for(let R=0;R<t;R++){const U=S[v][R+1],b=S[v][R],I=S[v+1][R],N=S[v+1][R+1];(v!==0||u>0)&&M.push(U,b,N),(v!==s-1||m<Math.PI)&&M.push(b,I,N)}this.setIndex(M),this.setAttribute("position",new vn(E,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gn extends $n{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const m=[],p=[],S=[],y=[],_=new te,M=new te,E=new te;for(let A=0;A<=s;A++){const x=u+A/s*f;for(let v=0;v<=o;v++){const R=v/o*l;M.x=(e+t*Math.cos(x))*Math.cos(R),M.y=(e+t*Math.cos(x))*Math.sin(R),M.z=t*Math.sin(x),p.push(M.x,M.y,M.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),E.subVectors(M,_).normalize(),S.push(E.x,E.y,E.z),y.push(v/o),y.push(A/s)}}for(let A=1;A<=s;A++)for(let x=1;x<=o;x++){const v=(o+1)*A+x-1,R=(o+1)*(A-1)+x-1,U=(o+1)*(A-1)+x,b=(o+1)*A+x;m.push(v,R,b),m.push(R,U,b)}this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function yo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(U0(o))o.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(U0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Ei(r){const e={};for(let t=0;t<r.length;t++){const s=yo(r[t]);for(const o in s)e[o]=s[o]}return e}function U0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ix(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}const Dx={clone:yo,merge:Ei};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new Ht().setHex(o.value);break;case"v2":this.uniforms[s].value=new qt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new te().fromArray(o.value);break;case"v4":this.uniforms[s].value=new In().fromArray(o.value);break;case"m3":this.uniforms[s].value=new It().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Cn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fx extends Lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Af extends ba{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kx extends ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zh extends ii{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Rf=new Cn,O0=new te,F0=new te;class Xg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=Ki,this.map=null,this.mapPass=null,this.matrix=new Cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new In(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;O0.setFromMatrixPosition(e.matrixWorld),t.position.copy(O0),F0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){Rf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Rf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===ml||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kc=new te,Zc=new Mo,kr=new te;class qg extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=Gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Zc,kr),kr.x===1&&kr.y===1&&kr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Zc,kr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Kc,Zc,kr),kr.x===1&&kr.y===1&&kr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Zc,kr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zs=new te,k0=new qt,B0=new qt;class Yi extends qg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,k0,B0),t.subVectors(B0,k0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ou*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*s/p,o*=u.width/m,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zx extends Xg{constructor(){super(new Yi(90,1,.5,500)),this.isPointLightShadow=!0}}class z0 extends zh{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vh extends qg{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=S*this.view.offsetY,m=f-S*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vx extends Xg{constructor(){super(new Vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hx extends zh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ii.DEFAULT_UP),this.updateMatrix(),this.target=new ii,this.shadow=new Vx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gx extends zh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const uo=-90,fo=1;class Wx extends ii{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yi(uo,fo,e,t);o.layers=this.layers,this.add(o);const l=new Yi(uo,fo,e,t);l.layers=this.layers,this.add(l);const u=new Yi(uo,fo,e,t);u.layers=this.layers,this.add(u);const f=new Yi(uo,fo,e,t);f.layers=this.layers,this.add(f);const m=new Yi(uo,fo,e,t);m.layers=this.layers,this.add(m);const p=new Yi(uo,fo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===Gr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ml)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,S]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,S),e.setRenderTarget(y,_,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Xx extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qh=class qh{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};qh.prototype.isMatrix2=!0;let V0=qh;function H0(r,e,t,s){const o=qx(s);switch(t){case Lg:return r*e;case Ig:return r*e/o.components*o.byteLength;case Ph:return r*e/o.components*o.byteLength;case Ea:return r*e*2/o.components*o.byteLength;case Lh:return r*e*2/o.components*o.byteLength;case Ng:return r*e*3/o.components*o.byteLength;case Rr:return r*e*4/o.components*o.byteLength;case Nh:return r*e*4/o.components*o.byteLength;case iu:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case su:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wf:case qf:return Math.max(r,16)*Math.max(e,8)/4;case Gf:case Xf:return Math.max(r,8)*Math.max(e,8)/2;case jf:case $f:case Kf:case Zf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yf:case cu:case Jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hh:case ph:case mh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gh:case vh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uu:case _h:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(r){switch(r){case Ki:case Ag:return{byteLength:1,components:1};case hl:case Rg:case qr:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Xr:case Ah:case Hr:return{byteLength:4,components:1};case Cg:case Pg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jg(){let r=null,e=!1,t=null,s=null;function o(l,u){s=r.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function jx(r){const e=new WeakMap;function t(f,m){const p=f.array,S=f.usage,y=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,S),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,m,p){const S=m.array,y=m.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,S);else{y.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<y.length;M++){const E=y[_],A=y[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,y[_]=A)}y.length=_+1;for(let M=0,E=y.length;M<E;M++){const A=y[M];r.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(r.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const S=e.get(f);(!S||S.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var $x=`#ifdef USE_ALPHAHASH
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
}`,bS=`#ifdef USE_ENVMAP
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
#endif`,AS=`#ifdef USE_ENVMAP
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
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
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
}`,bM=`uniform float rotation;
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
}`,AM=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:$x,alphahash_pars_fragment:Yx,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:eS,aomap_pars_fragment:tS,batching_pars_vertex:nS,batching_vertex:iS,begin_vertex:rS,beginnormal_vertex:sS,bsdfs:aS,iridescence_fragment:oS,bumpmap_pars_fragment:lS,clipping_planes_fragment:cS,clipping_planes_pars_fragment:uS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:fS,color_fragment:hS,color_pars_fragment:pS,color_pars_vertex:mS,color_vertex:gS,common:vS,cube_uv_reflection_fragment:_S,defaultnormal_vertex:xS,displacementmap_pars_vertex:SS,displacementmap_vertex:yS,emissivemap_fragment:MS,emissivemap_pars_fragment:ES,colorspace_fragment:wS,colorspace_pars_fragment:TS,envmap_fragment:bS,envmap_common_pars_fragment:AS,envmap_pars_fragment:RS,envmap_pars_vertex:CS,envmap_physical_pars_fragment:zS,envmap_vertex:PS,fog_vertex:LS,fog_pars_vertex:NS,fog_fragment:IS,fog_pars_fragment:DS,gradientmap_pars_fragment:US,lightmap_pars_fragment:OS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:kS,lights_pars_begin:BS,lights_toon_fragment:VS,lights_toon_pars_fragment:HS,lights_phong_fragment:GS,lights_phong_pars_fragment:WS,lights_physical_fragment:XS,lights_physical_pars_fragment:qS,lights_fragment_begin:jS,lights_fragment_maps:$S,lights_fragment_end:YS,lightprobes_pars_fragment:KS,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:JS,logdepthbuf_pars_vertex:QS,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:ry,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ay,morphinstance_vertex:oy,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:uy,morphtarget_vertex:dy,normal_fragment_begin:fy,normal_fragment_maps:hy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:xy,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:yy,opaque_fragment:My,packing:Ey,premultiplied_alpha_fragment:wy,project_vertex:Ty,dithering_fragment:by,dithering_pars_fragment:Ay,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Py,shadowmap_pars_vertex:Ly,shadowmap_vertex:Ny,shadowmask_pars_fragment:Iy,skinbase_vertex:Dy,skinning_pars_vertex:Uy,skinning_vertex:Oy,skinnormal_vertex:Fy,specularmap_fragment:ky,specularmap_pars_fragment:By,tonemapping_fragment:zy,tonemapping_pars_fragment:Vy,transmission_fragment:Hy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:jy,background_vert:$y,background_frag:Yy,backgroundCube_vert:Ky,backgroundCube_frag:Zy,cube_vert:Jy,cube_frag:Qy,depth_vert:eM,depth_frag:tM,distance_vert:nM,distance_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:aM,linedashed_frag:oM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:dM,meshmatcap_vert:fM,meshmatcap_frag:hM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:vM,meshphysical_vert:_M,meshphysical_frag:xM,meshtoon_vert:SM,meshtoon_frag:yM,points_vert:MM,points_frag:EM,shadow_vert:wM,shadow_frag:TM,sprite_vert:bM,sprite_frag:AM},$e={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Vr={basic:{uniforms:Ei([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ei([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ei([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ei([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ei([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Ht(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ei([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ei([$e.points,$e.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ei([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ei([$e.common,$e.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ei([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ei([$e.sprite,$e.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Ei([$e.common,$e.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Ei([$e.lights,$e.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Vr.physical={uniforms:Ei([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Jc={r:0,b:0,g:0},RM=new Cn,$g=new It;$g.set(-1,0,0,0,1,0,0,0,1);function CM(r,e,t,s,o,l){const u=new Ht(0);let f=o===!0?0:1,m,p,S=null,y=0,_=null;function M(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const b=R.backgroundBlurriness>0;U=e.get(U,b)}return U}function E(R){let U=!1;const b=M(R);b===null?x(u,f):b&&b.isColor&&(x(b,1),U=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,U){const b=M(U);b&&(b.isCubeTexture||b.mapping===vu)?(p===void 0&&(p=new ve(new Tt(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:yo(Vr.backgroundCube.uniforms),vertexShader:Vr.backgroundCube.vertexShader,fragmentShader:Vr.backgroundCube.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(U.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply($g),p.material.toneMapped=Jt.getTransfer(b.colorSpace)!==dn,(S!==b||y!==b.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,S=b,y=b.version,_=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new ve(new wa(2,2),new Lr({name:"BackgroundMaterial",uniforms:yo(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Jt.getTransfer(b.colorSpace)!==dn,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(S!==b||y!==b.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,S=b,y=b.version,_=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function x(R,U){R.getRGB(Jc,Wg(r)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,U,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,U=1){u.set(R),f=U,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(u,f)},render:E,addToRenderList:A,dispose:v}}function PM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,u=!1;function f(H,q,re,G,ne){let fe=!1;const oe=y(H,G,re,q);l!==oe&&(l=oe,p(l.object)),fe=M(H,G,re,ne),fe&&E(H,G,re,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,b(H,q,re,G),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function S(H){return r.deleteVertexArray(H)}function y(H,q,re,G){const ne=G.wireframe===!0;let fe=s[q.id];fe===void 0&&(fe={},s[q.id]=fe);const oe=H.isInstancedMesh===!0?H.id:0;let Z=fe[oe];Z===void 0&&(Z={},fe[oe]=Z);let J=Z[re.id];J===void 0&&(J={},Z[re.id]=J);let K=J[ne];return K===void 0&&(K=_(m()),J[ne]=K),K}function _(H){const q=[],re=[],G=[];for(let ne=0;ne<t;ne++)q[ne]=0,re[ne]=0,G[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:re,attributeDivisors:G,object:H,attributes:{},index:null}}function M(H,q,re,G){const ne=l.attributes,fe=q.attributes;let oe=0;const Z=re.getAttributes();for(const J in Z)if(Z[J].location>=0){const O=ne[J];let ce=fe[J];if(ce===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(ce=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(ce=H.instanceColor)),O===void 0||O.attribute!==ce||ce&&O.data!==ce.data)return!0;oe++}return l.attributesNum!==oe||l.index!==G}function E(H,q,re,G){const ne={},fe=q.attributes;let oe=0;const Z=re.getAttributes();for(const J in Z)if(Z[J].location>=0){let O=fe[J];O===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const ce={};ce.attribute=O,O&&O.data&&(ce.data=O.data),ne[J]=ce,oe++}l.attributes=ne,l.attributesNum=oe,l.index=G}function A(){const H=l.newAttributes;for(let q=0,re=H.length;q<re;q++)H[q]=0}function x(H){v(H,0)}function v(H,q){const re=l.newAttributes,G=l.enabledAttributes,ne=l.attributeDivisors;re[H]=1,G[H]===0&&(r.enableVertexAttribArray(H),G[H]=1),ne[H]!==q&&(r.vertexAttribDivisor(H,q),ne[H]=q)}function R(){const H=l.newAttributes,q=l.enabledAttributes;for(let re=0,G=q.length;re<G;re++)q[re]!==H[re]&&(r.disableVertexAttribArray(re),q[re]=0)}function U(H,q,re,G,ne,fe,oe){oe===!0?r.vertexAttribIPointer(H,q,re,ne,fe):r.vertexAttribPointer(H,q,re,G,ne,fe)}function b(H,q,re,G){A();const ne=G.attributes,fe=re.getAttributes(),oe=q.defaultAttributeValues;for(const Z in fe){const J=fe[Z];if(J.location>=0){let K=ne[Z];if(K===void 0&&(Z==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),Z==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),K!==void 0){const O=K.normalized,ce=K.itemSize,we=e.get(K);if(we===void 0)continue;const Be=we.buffer,Xe=we.type,Ye=we.bytesPerElement,de=Xe===r.INT||Xe===r.UNSIGNED_INT||K.gpuType===Ah;if(K.isInterleavedBufferAttribute){const ge=K.data,Ae=ge.stride,it=K.offset;if(ge.isInstancedInterleavedBuffer){for(let ze=0;ze<J.locationSize;ze++)v(J.location+ze,ge.meshPerAttribute);H.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ze=0;ze<J.locationSize;ze++)x(J.location+ze);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let ze=0;ze<J.locationSize;ze++)U(J.location+ze,ce/J.locationSize,Xe,O,Ae*Ye,(it+ce/J.locationSize*ze)*Ye,de)}else{if(K.isInstancedBufferAttribute){for(let ge=0;ge<J.locationSize;ge++)v(J.location+ge,K.meshPerAttribute);H.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<J.locationSize;ge++)x(J.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let ge=0;ge<J.locationSize;ge++)U(J.location+ge,ce/J.locationSize,Xe,O,ce*Ye,ce/J.locationSize*ge*Ye,de)}}else if(oe!==void 0){const O=oe[Z];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(J.location,O);break;case 3:r.vertexAttrib3fv(J.location,O);break;case 4:r.vertexAttrib4fv(J.location,O);break;default:r.vertexAttrib1fv(J.location,O)}}}}R()}function I(){L();for(const H in s){const q=s[H];for(const re in q){const G=q[re];for(const ne in G){const fe=G[ne];for(const oe in fe)S(fe[oe].object),delete fe[oe];delete G[ne]}}delete s[H]}}function N(H){if(s[H.id]===void 0)return;const q=s[H.id];for(const re in q){const G=q[re];for(const ne in G){const fe=G[ne];for(const oe in fe)S(fe[oe].object),delete fe[oe];delete G[ne]}}delete s[H.id]}function k(H){for(const q in s){const re=s[q];for(const G in re){const ne=re[G];if(ne[H.id]===void 0)continue;const fe=ne[H.id];for(const oe in fe)S(fe[oe].object),delete fe[oe];delete ne[H.id]}}}function T(H){for(const q in s){const re=s[q],G=H.isInstancedMesh===!0?H.id:0,ne=re[G];if(ne!==void 0){for(const fe in ne){const oe=ne[fe];for(const Z in oe)S(oe[Z].object),delete oe[Z];delete ne[fe]}delete re[G],Object.keys(re).length===0&&delete s[q]}}}function L(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:x,disableUnusedAttributes:R}}function LM(r,e,t){let s;function o(m){s=m}function l(m,p){r.drawArrays(s,m,p),t.update(p,s,1)}function u(m,p,S){S!==0&&(r.drawArraysInstanced(s,m,p,S),t.update(p,s,S))}function f(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let _=0;for(let M=0;M<S;M++)_+=p[M];t.update(_,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function NM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Rr&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const T=k===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ki&&k!==Hr&&!T&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const S=m(p);S!==p&&(bt("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const y=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:b,maxSamples:I,samples:N}}function IM(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new Vs,f=new It,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const M=y.length!==0||_||s!==0||o;return o=_,s=y.length,M},this.beginShadows=function(){l=!0,S(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,_){t=S(y,_,0)},this.setState=function(y,_,M){const E=y.clippingPlanes,A=y.clipIntersection,x=y.clipShadows,v=r.get(y);if(!o||E===null||E.length===0||l&&!x)l?S(null):p();else{const R=l?0:s,U=R*4;let b=v.clippingState||null;m.value=b,b=S(E,_,U,M);for(let I=0;I!==U;++I)b[I]=t[I];v.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(y,_,M,E){const A=y!==null?y.length:0;let x=null;if(A!==0){if(x=m.value,E!==!0||x===null){const v=M+A*4,R=_.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<v)&&(x=new Float32Array(v));for(let U=0,b=M;U!==A;++U,b+=4)u.copy(y[U]).applyMatrix4(R,f),u.normal.toArray(x,b),x[b+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const go=4,DM=6,UM=20,OM=256,al=new Vh,G0=new Ht;let Cf=null,Pf=0,Lf=0,Nf=!1;const FM=new te,ga=new te;class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=FM}=l;Cf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Pf,Lf),this._renderer.xr.enabled=Nf,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:qr,format:Rr,colorSpace:du,depthBuffer:!1},o=X0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X0(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kM(l)),this._blurMaterial=zM(l,e,t),this._ggxMaterial=BM(l,e,t)}return o}_compileMaterial(e){const t=new ve(new $n,e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,s,o,l){const m=new Yi(90,1,t,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],y=this._renderer,_=y.autoClear,M=y.toneMapping;y.getClearColor(G0),y.toneMapping=Wr,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Tt,new St({name:"PMREM.Background",side:ki,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let v=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,v=!0):(x.color.copy(G0),v=!0);for(let U=0;U<6;U++){const b=U%3;b===0?(m.up.set(0,p[U],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+S[U],l.y,l.z)):b===1?(m.up.set(0,0,p[U]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+S[U],l.z)):(m.up.set(0,p[U],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+S[U]));const I=this._cubeSize;ho(o,b*I,U>2?I:0,I,I),y.setRenderTarget(o),v&&y.render(A,m),y.render(e,m)}y.toneMapping=M,y.autoClear=_,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ya||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;ho(t,0,0,3*m,2*m),s.setRenderTarget(t),s.render(u,al)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),S=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-S*S),_=p*1.25,M=y*_,{_lodMax:E}=this,A=this._sizeLods[s],x=3*A*(s>E-go?s-E+go:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-t,ho(l,x,v,3*A,2*A),o.setRenderTarget(l),o.render(f,al),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-s,ho(e,x,v,3*A,2*A),o.setRenderTarget(e),o.render(f,al)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,u),this._blurPass(l,e,s,s,u)}_blurPass(e,t,s,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const S=this._sizeLods[o],y=3*S*(o>this._lodMax-go?o-this._lodMax+go:0),_=4*(this._cubeSize-S);ho(t,y,_,3*S,2*S),u.setRenderTarget(t),u.render(m,al)}}function kM(r){const e=[],t=[];let s=r;const o=r-go+1+DM;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);const f=1/(u-2),m=-f,p=1+f,S=[m,m,p,m,p,p,m,m,p,p,m,p],y=6,_=6,M=3,E=new Float32Array(M*_*y),A=new Float32Array(M*_*y);for(let v=0;v<y;v++){const R=v%3*2/3-1,U=v>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(b,M*_*v);for(let I=0;I<_;I++){const N=S[I*2]*2-1,k=S[I*2+1]*2-1;v===0?ga.set(1,k,N):v===1?ga.set(-N,1,-k):v===2?ga.set(-N,k,1):v===3?ga.set(-1,k,-N):v===4?ga.set(-N,-1,k):ga.set(N,k,-1),ga.toArray(A,(v*_+I)*M)}}const x=new $n;x.setAttribute("position",new Pr(E,M)),x.setAttribute("outputDirection",new Pr(A,M)),t.push(new ve(x,null)),s>go&&s--}return{lodMeshes:t,sizeLods:e}}function X0(r,e,t){const s=new Cr(r,e,t);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ho(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function BM(r,e,t){return new Lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function zM(r,e,t){return new Lr({name:"SphericalGaussianBlur",defines:{SAMPLES:UM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function q0(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function j0(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yg extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Tt(5,5,5),l=new Lr({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ki,blending:ms});l.uniforms.tEquirect.value=t;const u=new ve(o,l),f=t.minFilter;return t.minFilter===_a&&(t.minFilter=vi),new Wx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function VM(r){let e=new WeakMap,t=new WeakMap,s=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Qd||M===ef)if(e.has(_)){const E=e.get(_).texture;return f(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const A=new Yg(E.height);return A.fromEquirectangularTexture(r,_),e.set(_,A),_.addEventListener("dispose",p),f(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,E=M===Qd||M===ef,A=M===ya||M===So;if(E||A){let x=t.get(_);const v=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new W0(r)),x=E?s.fromEquirectangular(_,x):s.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const R=_.image;return E&&R&&R.height>0||A&&R&&m(R)?(s===null&&(s=new W0(r)),x=E?s.fromEquirectangular(_):s.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",S),x.texture):null}}}return _}function f(_,M){return M===Qd?_.mapping=ya:M===ef&&(_.mapping=So),_}function m(_){let M=0;const E=6;for(let A=0;A<E;A++)_[A]!==void 0&&M++;return M===E}function p(_){const M=_.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function S(_){const M=_.target;M.removeEventListener("dispose",S);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function HM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&vo("WebGLRenderer: "+s+" extension not supported."),o}}}function GM(r,e,t,s){const o={},l=new WeakMap;function u(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(y,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function m(y){const _=y.attributes;for(const M in _)e.update(_[M],r.ARRAY_BUFFER)}function p(y){const _=[],M=y.index,E=y.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const R=M.array;A=M.version;for(let U=0,b=R.length;U<b;U+=3){const I=R[U+0],N=R[U+1],k=R[U+2];_.push(I,N,N,k,k,I)}}else{const R=E.array;A=E.version;for(let U=0,b=R.length/3-1;U<b;U+=3){const I=U+0,N=U+1,k=U+2;_.push(I,N,N,k,k,I)}}const x=new(E.count>=65535?Bg:kg)(_,1);x.version=A;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function S(y){const _=l.get(y);if(_){const M=y.index;M!==null&&_.version<M.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:m,getWireframeAttribute:S}}function WM(r,e,t){let s;function o(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function m(y,_){r.drawElements(s,_,l,y*u),t.update(_,s,1)}function p(y,_,M){M!==0&&(r.drawElementsInstanced(s,_,l,y*u,M),t.update(_,s,M))}function S(y,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,l,y,0,M);let A=0;for(let x=0;x<M;x++)A+=_[x];t.update(A,s,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function XM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:cn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function qM(r,e,t){const s=new WeakMap,o=new In;function l(u,f,m){const p=u.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=S!==void 0?S.length:0;let _=s.get(f);if(_===void 0||_.count!==y){let z=function(){T.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var M=z;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),A===!0&&(b=2),x===!0&&(b=3);let I=f.attributes.position.count*b,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const k=new Float32Array(I*N*4*y),T=new Ug(k,I,N,y);T.type=Hr,T.needsUpdate=!0;const L=b*4;for(let H=0;H<y;H++){const q=v[H],re=R[H],G=U[H],ne=I*N*4*H;for(let fe=0;fe<q.count;fe++){const oe=fe*L;E===!0&&(o.fromBufferAttribute(q,fe),k[ne+oe+0]=o.x,k[ne+oe+1]=o.y,k[ne+oe+2]=o.z,k[ne+oe+3]=0),A===!0&&(o.fromBufferAttribute(re,fe),k[ne+oe+4]=o.x,k[ne+oe+5]=o.y,k[ne+oe+6]=o.z,k[ne+oe+7]=0),x===!0&&(o.fromBufferAttribute(G,fe),k[ne+oe+8]=o.x,k[ne+oe+9]=o.y,k[ne+oe+10]=o.z,k[ne+oe+11]=G.itemSize===4?o.w:1)}}_={count:y,texture:T,size:new qt(I,N)},s.set(f,_),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const A=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function jM(r,e,t,s,o){let l=new WeakMap;function u(p){const S=o.render.frame,y=p.geometry,_=e.get(p,y);if(l.get(_)!==S&&(e.update(_),l.set(_,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==S&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,S))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==S&&(M.update(),l.set(M,S))}return _}function f(){l=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),t.remove(S.instanceMatrix),S.instanceColor!==null&&t.remove(S.instanceColor)}return{update:u,dispose:f}}const $M={[Sg]:"LINEAR_TONE_MAPPING",[yg]:"REINHARD_TONE_MAPPING",[Mg]:"CINEON_TONE_MAPPING",[bh]:"ACES_FILMIC_TONE_MAPPING",[wg]:"AGX_TONE_MAPPING",[Tg]:"NEUTRAL_TONE_MAPPING",[Eg]:"CUSTOM_TONE_MAPPING"};function YM(r,e,t,s,o,l){const u=new Cr(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new $n;p.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new vn([0,2,0,0,2,0],2));const S=new Fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new ve(p,S),_=new Vh(-1,1,1,-1,0,1);let M=null,E=null,A=!1,x,v=null,R=[],U=!1;this.setSize=function(b,I){u.setSize(b,I),f!==null&&f.setSize(b,I),m!==null&&m.setSize(b,I);for(let N=0;N<R.length;N++){const k=R[N];k.setSize&&k.setSize(b,I)}},this.setEffects=function(b){R=b,U=R.length>0&&R[0].isRenderPass===!0;const I=u.width,N=u.height;R.length>0&&f===null&&(f=new Cr(I,N,{type:qr,depthBuffer:!1,stencilBuffer:!1}),m=new Cr(I,N,{type:qr,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<R.length;k++){const T=R[k];T.setSize&&T.setSize(I,N)}},this.begin=function(b,I){if(A||b.toneMapping===Wr&&R.length===0)return!1;if(v=I,I!==null){const N=I.width,k=I.height;(u.width!==N||u.height!==k)&&this.setSize(N,k)}return U===!1&&b.setRenderTarget(u),x=b.toneMapping,b.toneMapping=Wr,!0},this.hasRenderPass=function(){return U},this.end=function(b,I){b.toneMapping=x,A=!0;let N=u,k=f;for(let T=0;T<R.length;T++){const L=R[T];L.enabled!==!1&&(L.render(b,k,N,I),L.needsSwap!==!1&&(N=k,k=k===f?m:f))}if(M!==b.outputColorSpace||E!==b.toneMapping){M=b.outputColorSpace,E=b.toneMapping,S.defines={},Jt.getTransfer(M)===dn&&(S.defines.SRGB_TRANSFER="");const T=$M[E];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=N.texture,b.setRenderTarget(v),b.render(y,_),v=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),S.dispose()}}const Kg=new _i,Mh=new gl(1,1),Zg=new Ug,Jg=new hx,Qg=new Hg,$0=[],Y0=[],K0=new Float32Array(16),Z0=new Float32Array(9),J0=new Float32Array(4);function Eo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=$0[o];if(l===void 0&&(l=new Float32Array(o),$0[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function Yn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Kn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function yu(r,e){let t=Y0[e];t===void 0&&(t=new Int32Array(e),Y0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function KM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2fv(this.addr,e),Kn(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;r.uniform3fv(this.addr,e),Kn(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4fv(this.addr,e),Kn(t,e)}}function e1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;J0.set(s),r.uniformMatrix2fv(this.addr,!1,J0),Kn(t,s)}}function t1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;Z0.set(s),r.uniformMatrix3fv(this.addr,!1,Z0),Kn(t,s)}}function n1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Yn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,s))return;K0.set(s),r.uniformMatrix4fv(this.addr,!1,K0),Kn(t,s)}}function i1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2iv(this.addr,e),Kn(t,e)}}function s1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;r.uniform3iv(this.addr,e),Kn(t,e)}}function a1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4iv(this.addr,e),Kn(t,e)}}function o1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;r.uniform2uiv(this.addr,e),Kn(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;r.uniform3uiv(this.addr,e),Kn(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;r.uniform4uiv(this.addr,e),Kn(t,e)}}function d1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Mh.compareFunction=t.isReversedDepthBuffer()?Dh:Ih,l=Mh):l=Kg,t.setTexture2D(e||l,o)}function f1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Jg,o)}function h1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Qg,o)}function p1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Zg,o)}function m1(r){switch(r){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return a1;case 5125:return o1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(r,e){r.uniform1fv(this.addr,e)}function v1(r,e){const t=Eo(e,this.size,2);r.uniform2fv(this.addr,t)}function _1(r,e){const t=Eo(e,this.size,3);r.uniform3fv(this.addr,t)}function x1(r,e){const t=Eo(e,this.size,4);r.uniform4fv(this.addr,t)}function S1(r,e){const t=Eo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function y1(r,e){const t=Eo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function M1(r,e){const t=Eo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function E1(r,e){r.uniform1iv(this.addr,e)}function w1(r,e){r.uniform2iv(this.addr,e)}function T1(r,e){r.uniform3iv(this.addr,e)}function b1(r,e){r.uniform4iv(this.addr,e)}function A1(r,e){r.uniform1uiv(this.addr,e)}function R1(r,e){r.uniform2uiv(this.addr,e)}function C1(r,e){r.uniform3uiv(this.addr,e)}function P1(r,e){r.uniform4uiv(this.addr,e)}function L1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Mh:u=Kg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function N1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Jg,l[u])}function I1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Qg,l[u])}function D1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Yn(s,l)||(r.uniform1iv(this.addr,l),Kn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Zg,l[u])}function U1(r){switch(r){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return b1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return D1}}class O1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=m1(t.type)}}class F1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const If=/(\w+)(\])?(\[|\.)?/g;function Q0(r,e){r.seq.push(e),r.map[e.id]=e}function B1(r,e,t){const s=r.name,o=s.length;for(If.lastIndex=0;;){const l=If.exec(s),u=If.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){Q0(t,p===void 0?new O1(f,r,e):new F1(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new k1(f),Q0(t,y)),t=y}}}class lu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);B1(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=s[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function eg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const z1=37297;let V1=0;function H1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const tg=new It;function G1(r){Jt._getMatrix(tg,Jt.workingColorSpace,r);const e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(Jt.getTransfer(r)){case fu:return[e,"LinearTransferOETF"];case dn:return[e,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ng(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+H1(r.getShaderSource(e),f)}else return l}function W1(r,e){const t=G1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const X1={[Sg]:"Linear",[yg]:"Reinhard",[Mg]:"Cineon",[bh]:"ACESFilmic",[wg]:"AgX",[Tg]:"Neutral",[Eg]:"Custom"};function q1(r,e){const t=X1[e];return t===void 0?(bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qc=new te;function j1(){Jt.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function Y1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function K1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function cl(r){return r!==""}function ig(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(r){return r.replace(Z1,Q1)}const J1=new Map;function Q1(r,e){let t=zt[e];if(t===void 0){const s=J1.get(e);if(s!==void 0)t=zt[s],bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Eh(t)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(r){return r.replace(eE,tE)}function tE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ag(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const nE={[nu]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function iE(r){return nE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rE={[ya]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function sE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const aE={[So]:"ENVMAP_MODE_REFRACTION"};function oE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lE={[xg]:"ENVMAP_BLENDING_MULTIPLY",[W_]:"ENVMAP_BLENDING_MIX",[X_]:"ENVMAP_BLENDING_ADD"};function cE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lE[r.combine]||"ENVMAP_BLENDING_NONE"}function uE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function dE(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=iE(t),p=sE(t),S=oE(t),y=cE(t),_=uE(t),M=$1(t),E=Y1(l),A=o.createProgram();let x,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(cl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(cl).join(`
`),v.length>0&&(v+=`
`)):(x=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),v=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+S:"",t.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?zt.tonemapping_pars_fragment:"",t.toneMapping!==Wr?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),j1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cl).join(`
`)),u=Eh(u),u=ig(u,t),u=rg(u,t),f=Eh(f),f=ig(f,t),f=rg(f,t),u=sg(u),f=sg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=R+x+u,b=R+v+f,I=eg(o,o.VERTEX_SHADER,U),N=eg(o,o.FRAGMENT_SHADER,b);o.attachShader(A,I),o.attachShader(A,N),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function k(H){if(r.debug.checkShaderErrors){const q=o.getProgramInfoLog(A)||"",re=o.getShaderInfoLog(I)||"",G=o.getShaderInfoLog(N)||"",ne=q.trim(),fe=re.trim(),oe=G.trim();let Z=!0,J=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,I,N);else{const K=ng(o,I,"vertex"),O=ng(o,N,"fragment");cn("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ne+`
`+K+`
`+O)}else ne!==""?bt("WebGLProgram: Program Info Log:",ne):(fe===""||oe==="")&&(J=!1);J&&(H.diagnostics={runnable:Z,programLog:ne,vertexShader:{log:fe,prefix:x},fragmentShader:{log:oe,prefix:v}})}o.deleteShader(I),o.deleteShader(N),T=new lu(o,A),L=K1(o,A)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(A,z1)),z},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=N,this}let fE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new pE(e),t.set(e,s)),s}}class pE{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}}function mE(r){return r===Ea||r===cu||r===uu}function gE(r,e,t,s,o,l){const u=new Og,f=new hE,m=new Set,p=[],S=new Map,y=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,L,z,H,q,re){const G=H.fog,ne=q.geometry,fe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Z=e.get(T.envMap||fe,oe),J=Z&&Z.mapping===vu?Z.image.height:null,K=M[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&bt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const O=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ce=O!==void 0?O.length:0;let we=0;ne.morphAttributes.position!==void 0&&(we=1),ne.morphAttributes.normal!==void 0&&(we=2),ne.morphAttributes.color!==void 0&&(we=3);let Be,Xe,Ye,de;if(K){const wt=Vr[K];Be=wt.vertexShader,Xe=wt.fragmentShader}else{Be=T.vertexShader,Xe=T.fragmentShader;const wt=f.getVertexShaderStage(T),mt=f.getFragmentShaderStage(T);f.update(T,wt,mt),Ye=wt.id,de=mt.id}const ge=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),it=q.isInstancedMesh===!0,ze=q.isBatchedMesh===!0,yt=!!T.map,en=!!T.matcap,ht=!!Z,pt=!!T.aoMap,Ft=!!T.lightMap,Mt=!!T.bumpMap&&T.wireframe===!1,jt=!!T.normalMap,Lt=!!T.displacementMap,Bt=!!T.emissiveMap,Ct=!!T.metalnessMap,rn=!!T.roughnessMap,j=T.anisotropy>0,Gt=T.clearcoat>0,kt=T.dispersion>0,F=T.retroreflectivity>0,w=T.iridescence>0,ee=T.sheen>0,le=T.transmission>0,he=j&&!!T.anisotropyMap,Ee=Gt&&!!T.clearcoatMap,De=Gt&&!!T.clearcoatNormalMap,xe=Gt&&!!T.clearcoatRoughnessMap,Se=w&&!!T.iridescenceMap,Ne=w&&!!T.iridescenceThicknessMap,We=ee&&!!T.sheenColorMap,Le=ee&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Qe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,ft=le&&!!T.transmissionMap,X=le&&!!T.thicknessMap,Oe=!!T.gradientMap,W=!!T.alphaMap,Re=T.alphaTest>0,Ce=!!T.alphaHash,Me=!!T.extensions;let et=Wr;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(et=r.toneMapping);const Ze={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:Be,fragmentShader:Xe,defines:T.defines,customVertexShaderID:Ye,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ze,batchingColor:ze&&q._colorsTexture!==null,instancing:it,instancingColor:it&&q.instanceColor!==null,instancingMorph:it&&q.morphTexture!==null,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:en,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:J,aoMap:pt,lightMap:Ft,bumpMap:Mt,normalMap:jt,displacementMap:Lt,emissiveMap:Bt,normalMapObjectSpace:jt&&T.normalMapType===$_,normalMapTangentSpace:jt&&T.normalMapType===xh,packedNormalMap:jt&&T.normalMapType===xh&&mE(T.normalMap.format),metalnessMap:Ct,roughnessMap:rn,anisotropy:j,anisotropyMap:he,clearcoat:Gt,clearcoatMap:Ee,clearcoatNormalMap:De,clearcoatRoughnessMap:xe,dispersion:kt,retroreflection:F,iridescence:w,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Le,specularMap:Ie,specularColorMap:Qe,specularIntensityMap:Fe,transmission:le,transmissionMap:ft,thicknessMap:X,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===dl&&T.alphaToCoverage===!1,alphaMap:W,alphaTest:Re,alphaHash:Ce,combine:T.combine,mapUv:yt&&E(T.map.channel),aoMapUv:pt&&E(T.aoMap.channel),lightMapUv:Ft&&E(T.lightMap.channel),bumpMapUv:Mt&&E(T.bumpMap.channel),normalMapUv:jt&&E(T.normalMap.channel),displacementMapUv:Lt&&E(T.displacementMap.channel),emissiveMapUv:Bt&&E(T.emissiveMap.channel),metalnessMapUv:Ct&&E(T.metalnessMap.channel),roughnessMapUv:rn&&E(T.roughnessMap.channel),anisotropyMapUv:he&&E(T.anisotropyMap.channel),clearcoatMapUv:Ee&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&E(T.sheenRoughnessMap.channel),specularMapUv:Ie&&E(T.specularMap.channel),specularColorMapUv:Qe&&E(T.specularColorMap.channel),specularIntensityMapUv:Fe&&E(T.specularIntensityMap.channel),transmissionMapUv:ft&&E(T.transmissionMap.channel),thicknessMapUv:X&&E(T.thicknessMap.channel),alphaMapUv:W&&E(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(jt||j),vertexNormals:!!ne.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(yt||W),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ne.attributes.normal===void 0&&jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ae,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:we,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:et,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===dn,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===dn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fi,flipSided:T.side===ki,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Me&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&T.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)L.push(z),L.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(v(L,T),R(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function v(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function R(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function U(T){const L=M[T.type];let z;if(L){const H=Vr[L];z=Dx.clone(H.uniforms)}else z=T.uniforms;return z}function b(T,L){let z=S.get(L);return z!==void 0?++z.usedTimes:(z=new dE(r,L,T,o),p.push(z),S.set(L,z)),z}function I(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),S.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function k(){f.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:U,acquireProgram:b,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:k}}function vE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,m){r.get(u)[f]=m}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function _E(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function og(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function f(_,M,E,A,x,v){let R=r[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:E,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:x,group:v},r[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=E,R.materialVariant=u(_),R.groupOrder=A,R.renderOrder=_.renderOrder,R.z=x,R.group=v),e++,R}function m(_,M,E,A,x,v,R){R.reversedDepth===!0&&(x=-x);const U=f(_,M,E,A,x,v);E.transmission>0?s.push(U):E.transparent===!0?o.push(U):t.push(U)}function p(_,M,E,A,x,v){const R=f(_,M,E,A,x,v);E.transmission>0?s.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function S(_,M){t.length>1&&t.sort(_||_E),s.length>1&&s.sort(M||og),o.length>1&&o.sort(M||og)}function y(){for(let _=e,M=r.length;_<M;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:m,unshift:p,finish:y,sort:S}}function xE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new lg,r.set(s,[u])):o>=l.length?(u=new lg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function SE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new Ht};break;case"SpotLight":t={position:new te,direction:new te,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":t={color:new Ht,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function yE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ME=0;function EE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wE(r){const e=new SE,t=yE(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new te);const o=new te,l=new Cn,u=new Cn;function f(p){let S=0,y=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let M=0,E=0,A=0,x=0,v=0,R=0,U=0,b=0,I=0,N=0,k=0,T=0,L=0,z=0;p.sort(EE);for(let q=0,re=p.length;q<re;q++){const G=p[q],ne=G.color,fe=G.intensity,oe=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ea?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=ne.r*fe,y+=ne.g*fe,_+=ne.b*fe;else if(G.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(G.sh.coefficients[J],fe);z++}else if(G.isSunLight){const J=e.get(G);if(J.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,O=t.get(G);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),s.sunShadow[E]=O,s.sunShadowMap[E]=Z;const ce=K.getViewportCount();for(let we=0;we<ce;we++)s.sunShadowMatrix[A+we]=K.getMatrix(we),s.sunShadowCascade[A+we]=K._cascadeData[we];A+=ce,E++}s.sun[M]=J,M++}else if(G.isDirectionalLight){const J=e.get(G);if(J.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,O=t.get(G);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,s.directionalShadow[x]=O,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=G.shadow.matrix,I++}s.directional[x]=J,x++}else if(G.isSpotLight){const J=e.get(G);J.position.setFromMatrixPosition(G.matrixWorld),J.color.copy(ne).multiplyScalar(fe),J.distance=oe,J.coneCos=Math.cos(G.angle),J.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),J.decay=G.decay,s.spot[R]=J;const K=G.shadow;if(G.map&&(s.spotLightMap[T]=G.map,T++,K.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[R]=K.matrix,G.castShadow){const O=t.get(G);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,s.spotShadow[R]=O,s.spotShadowMap[R]=Z,k++}R++}else if(G.isRectAreaLight){const J=e.get(G);J.color.copy(ne).multiplyScalar(fe),J.halfWidth.set(G.width*.5,0,0),J.halfHeight.set(0,G.height*.5,0),s.rectArea[U]=J,U++}else if(G.isPointLight){const J=e.get(G);if(J.color.copy(G.color).multiplyScalar(G.intensity),J.distance=G.distance,J.decay=G.decay,G.castShadow){const K=G.shadow,O=t.get(G);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,s.pointShadow[v]=O,s.pointShadowMap[v]=Z,s.pointShadowMatrix[v]=G.shadow.matrix,N++}s.point[v]=J,v++}else if(G.isHemisphereLight){const J=e.get(G);J.skyColor.copy(G.color).multiplyScalar(fe),J.groundColor.copy(G.groundColor).multiplyScalar(fe),s.hemi[b]=J,b++}}U>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=$e.LTC_FLOAT_1,s.rectAreaLTC2=$e.LTC_FLOAT_2):(s.rectAreaLTC1=$e.LTC_HALF_1,s.rectAreaLTC2=$e.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=y,s.ambient[2]=_;const H=s.hash;(H.sunLength!==M||H.directionalLength!==x||H.pointLength!==v||H.spotLength!==R||H.rectAreaLength!==U||H.hemiLength!==b||H.numSunShadows!==E||H.numDirectionalShadows!==I||H.numPointShadows!==N||H.numSpotShadows!==k||H.numSpotMaps!==T||H.numLightProbes!==z)&&(s.sun.length=M,s.directional.length=x,s.spot.length=R,s.rectArea.length=U,s.point.length=v,s.hemi.length=b,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=A,s.sunShadowCascade.length=A,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=k,s.spotShadowMap.length=k,s.spotLightMatrix.length=k+T-L,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,H.sunLength=M,H.directionalLength=x,H.pointLength=v,H.spotLength=R,H.rectAreaLength=U,H.hemiLength=b,H.numSunShadows=E,H.numDirectionalShadows=I,H.numPointShadows=N,H.numSpotShadows=k,H.numSpotMaps=T,H.numLightProbes=z,s.version=ME++)}function m(p,S){let y=0,_=0,M=0,E=0,A=0,x=0;const v=S.matrixWorldInverse;for(let R=0,U=p.length;R<U;R++){const b=p[R];if(b.isSunLight){const I=s.sun[y];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(v),y++}else if(b.isDirectionalLight){const I=s.directional[_];I.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),_++}else if(b.isSpotLight){const I=s.spot[E];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),E++}else if(b.isRectAreaLight){const I=s.rectArea[A];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(v),u.identity(),l.copy(b.matrixWorld),l.premultiply(v),u.extractRotation(l),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),A++}else if(b.isPointLight){const I=s.point[M];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(v),M++}else if(b.isHemisphereLight){const I=s.hemi[x];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(v),x++}}}return{setup:f,setupView:m,state:s}}function cg(r){const e=new wE(r),t=[],s=[],o=[];function l(_){y.camera=_,t.length=0,s.length=0,o.length=0}function u(_){t.push(_)}function f(_){s.push(_)}function m(_){o.push(_)}function p(){e.setup(t)}function S(_){e.setupView(t,_)}const y={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:S,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function TE(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new cg(r),e.set(o,[f])):l>=u.length?(f=new cg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const bE=`void main() {
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
}`,RE=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],CE=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],ug=new Cn,ol=new te,Df=new te;function PE(r,e,t){let s=new kh;const o=new qt,l=new qt,u=new In,f=new kx,m=new Bx,p={},S=t.maxTextureSize,y={[Sa]:ki,[ki]:Sa,[Fi]:Fi},_=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:bE,fragmentShader:AE}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ve(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let v=this.type;this.render=function(N,k,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===T_&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nu);const L=r.getRenderTarget(),z=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(ms),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=v!==this.type;re&&k.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(ne=>ne.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,ne=N.length;G<ne;G++){const fe=N[G],oe=fe.shadow;if(oe===void 0){bt("WebGLShadowMap:",fe,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;o.copy(oe.mapSize);const Z=oe.getFrameExtents();o.multiply(Z),l.copy(oe.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(l.x=Math.floor(S/Z.x),o.x=l.x*Z.x,oe.mapSize.x=l.x),o.y>S&&(l.y=Math.floor(S/Z.y),o.y=l.y*Z.y,oe.mapSize.y=l.y));const J=r.state.buffers.depth.getReversed();if(oe.camera._reversedDepth=J,oe.map===null||re===!0){if(oe.map!==null&&(oe.map.depthTexture!==null&&(oe.map.depthTexture.dispose(),oe.map.depthTexture=null),oe.map.dispose()),this.type===ll){if(fe.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}oe.map=new Cr(o.x,o.y,{format:Ea,type:qr,minFilter:vi,magFilter:vi,generateMipmaps:!1}),oe.map.texture.name=fe.name+".shadowMap",oe.map.depthTexture=new gl(o.x,o.y,Hr),oe.map.depthTexture.name=fe.name+".shadowMapDepth",oe.map.depthTexture.format=vs,oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=ci,oe.map.depthTexture.magFilter=ci}else fe.isPointLight?(oe.map=new Yg(o.x),oe.map.depthTexture=new Nx(o.x,Xr)):(oe.map=new Cr(o.x,o.y),oe.map.depthTexture=new gl(o.x,o.y,Xr)),oe.map.depthTexture.name=fe.name+".shadowMap",oe.map.depthTexture.format=vs,this.type===nu?(oe.map.depthTexture.compareFunction=J?Dh:Ih,oe.map.depthTexture.minFilter=vi,oe.map.depthTexture.magFilter=vi):(oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=ci,oe.map.depthTexture.magFilter=ci);oe.camera.updateProjectionMatrix()}oe.map.isWebGLCubeRenderTarget!==!0&&(oe.map.width!==o.x||oe.map.height!==o.y)&&oe.map.setSize(o.x,o.y);const K=oe.map.isWebGLCubeRenderTarget?6:oe.getViewportCount();fe.isPointLight!==!0&&oe.updateMatrices(fe,T);for(let O=0;O<K;O++){const ce=oe.getCamera(O);if(fe.isPointLight){const we=oe.camera,Be=oe.matrix,Xe=fe.distance||we.far;Xe!==we.far&&(we.far=Xe,we.updateProjectionMatrix()),ol.setFromMatrixPosition(fe.matrixWorld),we.position.copy(ol),Df.copy(we.position),Df.add(RE[O]),we.up.copy(CE[O]),we.lookAt(Df),we.updateMatrixWorld(),Be.makeTranslation(-ol.x,-ol.y,-ol.z),ug.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),oe._frustum.setFromProjectionMatrix(ug,we.coordinateSystem,we.reversedDepth)}if(oe.map.isWebGLCubeRenderTarget)r.setRenderTarget(oe.map,O),r.clear();else{O===0&&(r.setRenderTarget(oe.map),r.clear());const we=oe.getViewport(O);u.set(l.x*we.x,l.y*we.y,l.x*we.z,l.y*we.w),q.viewport(u)}s=oe.getFrustum(O),b(k,T,ce,fe,this.type)}oe.isPointLightShadow!==!0&&this.type===ll&&R(oe,T),oe.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(L,z,H)};function R(N,k){const T=e.update(A);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null?N.mapPass=new Cr(o.x,o.y,{format:Ea,type:qr}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(k,null,T,_,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value.set(N.map.width,N.map.height),M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(k,null,T,M,A,null)}function U(N,k,T,L){let z=null;const H=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)z=H;else if(z=T.isPointLight===!0?m:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=z.uuid,re=k.uuid;let G=p[q];G===void 0&&(G={},p[q]=G);let ne=G[re];ne===void 0&&(ne=z.clone(),G[re]=ne,k.addEventListener("dispose",I)),z=ne}if(z.visible=k.visible,z.wireframe=k.wireframe,L===ll?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:y[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const q=r.properties.get(z);q.light=T}return z}function b(N,k,T,L,z){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&z===ll)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const re=e.update(N),G=N.material;if(Array.isArray(G)){const ne=re.groups;for(let fe=0,oe=ne.length;fe<oe;fe++){const Z=ne[fe],J=G[Z.materialIndex];if(J&&J.visible){const K=U(N,J,L,z);N.onBeforeShadow(r,N,k,T,re,K,Z),r.renderBufferDirect(T,null,re,K,N,Z),N.onAfterShadow(r,N,k,T,re,K,Z)}}}else if(G.visible){const ne=U(N,G,L,z);N.onBeforeShadow(r,N,k,T,re,ne,null),r.renderBufferDirect(T,null,re,ne,N,null),N.onAfterShadow(r,N,k,T,re,ne,null)}}const q=N.children;for(let re=0,G=q.length;re<G;re++)b(q[re],k,T,L,z)}function I(N){N.target.removeEventListener("dispose",I);for(const T in p){const L=p[T],z=N.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function LE(r,e){function t(){let X=!1;const Oe=new In;let W=null;const Re=new In(0,0,0,0);return{setMask:function(Ce){W!==Ce&&!X&&(r.colorMask(Ce,Ce,Ce,Ce),W=Ce)},setLocked:function(Ce){X=Ce},setClear:function(Ce,Me,et,Ze,wt){wt===!0&&(Ce*=Ze,Me*=Ze,et*=Ze),Oe.set(Ce,Me,et,Ze),Re.equals(Oe)===!1&&(r.clearColor(Ce,Me,et,Ze),Re.copy(Oe))},reset:function(){X=!1,W=null,Re.set(-1,0,0,0)}}}function s(){let X=!1,Oe=!1,W=null,Re=null,Ce=null;return{setReversed:function(Me){if(Oe!==Me){const et=e.get("EXT_clip_control");Me?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Oe=Me;const Ze=Ce;Ce=null,this.setClear(Ze)}},getReversed:function(){return Oe},setTest:function(Me){Me?ge(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Me){W!==Me&&!X&&(r.depthMask(Me),W=Me)},setFunc:function(Me){if(Oe&&(Me=ax[Me]),Re!==Me){switch(Me){case Uf:r.depthFunc(r.NEVER);break;case Of:r.depthFunc(r.ALWAYS);break;case Ff:r.depthFunc(r.LESS);break;case fl:r.depthFunc(r.LEQUAL);break;case kf:r.depthFunc(r.EQUAL);break;case Bf:r.depthFunc(r.GEQUAL);break;case zf:r.depthFunc(r.GREATER);break;case Vf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Ce!==Me&&(Ce=Me,Oe&&(Me=1-Me),r.clearDepth(Me))},reset:function(){X=!1,W=null,Re=null,Ce=null,Oe=!1}}}function o(){let X=!1,Oe=null,W=null,Re=null,Ce=null,Me=null,et=null,Ze=null,wt=null;return{setTest:function(mt){X||(mt?ge(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(mt){Oe!==mt&&!X&&(r.stencilMask(mt),Oe=mt)},setFunc:function(mt,ct,nt){(W!==mt||Re!==ct||Ce!==nt)&&(r.stencilFunc(mt,ct,nt),W=mt,Re=ct,Ce=nt)},setOp:function(mt,ct,nt){(Me!==mt||et!==ct||Ze!==nt)&&(r.stencilOp(mt,ct,nt),Me=mt,et=ct,Ze=nt)},setLocked:function(mt){X=mt},setClear:function(mt){wt!==mt&&(r.clearStencil(mt),wt=mt)},reset:function(){X=!1,Oe=null,W=null,Re=null,Ce=null,Me=null,et=null,Ze=null,wt=null}}}const l=new t,u=new s,f=new o,m=new WeakMap,p=new WeakMap;let S={},y={},_={},M=new WeakMap,E=[],A=null,x=!1,v=null,R=null,U=null,b=null,I=null,N=null,k=null,T=new Ht(0,0,0),L=0,z=!1,H=null,q=null,re=null,G=null,ne=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Z=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),oe=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),oe=Z>=2);let K=null,O={};const ce=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),Be=new In().fromArray(ce),Xe=new In().fromArray(we);function Ye(X,Oe,W,Re){const Ce=new Uint8Array(4),Me=r.createTexture();r.bindTexture(X,Me),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<W;et++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(Oe+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return Me}const de={};de[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(r.DEPTH_TEST),u.setFunc(fl),Mt(!1),jt(c0),ge(r.CULL_FACE),pt(ms);function ge(X){S[X]!==!0&&(r.enable(X),S[X]=!0)}function Ae(X){S[X]!==!1&&(r.disable(X),S[X]=!1)}function it(X,Oe){return _[X]!==Oe?(r.bindFramebuffer(X,Oe),_[X]=Oe,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Oe),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function ze(X,Oe){let W=E,Re=!1;if(X){W=M.get(Oe),W===void 0&&(W=[],M.set(Oe,W));const Ce=X.textures;if(W.length!==Ce.length||W[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,et=Ce.length;Me<et;Me++)W[Me]=r.COLOR_ATTACHMENT0+Me;W.length=Ce.length,Re=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,Re=!0);Re&&r.drawBuffers(W)}function yt(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const en={[po]:r.FUNC_ADD,[A_]:r.FUNC_SUBTRACT,[R_]:r.FUNC_REVERSE_SUBTRACT};en[C_]=r.MIN,en[P_]=r.MAX;const ht={[L_]:r.ZERO,[N_]:r.ONE,[I_]:r.SRC_COLOR,[vg]:r.SRC_ALPHA,[B_]:r.SRC_ALPHA_SATURATE,[F_]:r.DST_COLOR,[U_]:r.DST_ALPHA,[D_]:r.ONE_MINUS_SRC_COLOR,[_g]:r.ONE_MINUS_SRC_ALPHA,[k_]:r.ONE_MINUS_DST_COLOR,[O_]:r.ONE_MINUS_DST_ALPHA,[z_]:r.CONSTANT_COLOR,[V_]:r.ONE_MINUS_CONSTANT_COLOR,[H_]:r.CONSTANT_ALPHA,[G_]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Oe,W,Re,Ce,Me,et,Ze,wt,mt){if(X===ms){x===!0&&(Ae(r.BLEND),x=!1);return}if(x===!1&&(ge(r.BLEND),x=!0),X!==b_){if(X!==v||mt!==z){if((R!==po||I!==po)&&(r.blendEquation(r.FUNC_ADD),R=po,I=po),mt)switch(X){case dl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oi:r.blendFunc(r.ONE,r.ONE);break;case u0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case d0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:cn("WebGLState: Invalid blending: ",X);break}else switch(X){case dl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case u0:cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d0:cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:cn("WebGLState: Invalid blending: ",X);break}U=null,b=null,N=null,k=null,T.set(0,0,0),L=0,v=X,z=mt}return}Ce=Ce||Oe,Me=Me||W,et=et||Re,(Oe!==R||Ce!==I)&&(r.blendEquationSeparate(en[Oe],en[Ce]),R=Oe,I=Ce),(W!==U||Re!==b||Me!==N||et!==k)&&(r.blendFuncSeparate(ht[W],ht[Re],ht[Me],ht[et]),U=W,b=Re,N=Me,k=et),(Ze.equals(T)===!1||wt!==L)&&(r.blendColor(Ze.r,Ze.g,Ze.b,wt),T.copy(Ze),L=wt),v=X,z=!1}function Ft(X,Oe){X.side===Fi?Ae(r.CULL_FACE):ge(r.CULL_FACE);let W=X.side===ki;Oe&&(W=!W),Mt(W),X.blending===dl&&X.transparent===!1?pt(ms):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Re=X.stencilWrite;f.setTest(Re),Re&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(X){H!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),H=X)}function jt(X){X!==E_?(ge(r.CULL_FACE),X!==q&&(X===c0?r.cullFace(r.BACK):X===w_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),q=X}function Lt(X){X!==re&&(oe&&r.lineWidth(X),re=X)}function Bt(X,Oe,W){X?(ge(r.POLYGON_OFFSET_FILL),(G!==Oe||ne!==W)&&(G=Oe,ne=W,u.getReversed()&&(Oe=-Oe),r.polygonOffset(Oe,W))):Ae(r.POLYGON_OFFSET_FILL)}function Ct(X){X?ge(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function rn(X){X===void 0&&(X=r.TEXTURE0+fe-1),K!==X&&(r.activeTexture(X),K=X)}function j(X,Oe,W){W===void 0&&(K===null?W=r.TEXTURE0+fe-1:W=K);let Re=O[W];Re===void 0&&(Re={type:void 0,texture:void 0},O[W]=Re),(Re.type!==X||Re.texture!==Oe)&&(K!==W&&(r.activeTexture(W),K=W),r.bindTexture(X,Oe||de[X]),Re.type=X,Re.texture=Oe)}function Gt(){const X=O[K];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function kt(){try{r.compressedTexImage2D(...arguments)}catch(X){cn("WebGLState:",X)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(X){cn("WebGLState:",X)}}function w(){try{r.texSubImage2D(...arguments)}catch(X){cn("WebGLState:",X)}}function ee(){try{r.texSubImage3D(...arguments)}catch(X){cn("WebGLState:",X)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(X){cn("WebGLState:",X)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(X){cn("WebGLState:",X)}}function Ee(){try{r.texStorage2D(...arguments)}catch(X){cn("WebGLState:",X)}}function De(){try{r.texStorage3D(...arguments)}catch(X){cn("WebGLState:",X)}}function xe(){try{r.texImage2D(...arguments)}catch(X){cn("WebGLState:",X)}}function Se(){try{r.texImage3D(...arguments)}catch(X){cn("WebGLState:",X)}}function Ne(X){return y[X]!==void 0?y[X]:r.getParameter(X)}function We(X,Oe){y[X]!==Oe&&(r.pixelStorei(X,Oe),y[X]=Oe)}function Le(X){Be.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Be.copy(X))}function Ie(X){Xe.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Xe.copy(X))}function Qe(X,Oe){let W=p.get(Oe);W===void 0&&(W=new WeakMap,p.set(Oe,W));let Re=W.get(X);Re===void 0&&(Re=r.getUniformBlockIndex(Oe,X.name),W.set(X,Re))}function Fe(X,Oe){const Re=p.get(Oe).get(X);m.get(Oe)!==Re&&(r.uniformBlockBinding(Oe,Re,X.__bindingPointIndex),m.set(Oe,Re))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},y={},K=null,O={},_={},M=new WeakMap,E=[],A=null,x=!1,v=null,R=null,U=null,b=null,I=null,N=null,k=null,T=new Ht(0,0,0),L=0,z=!1,H=null,q=null,re=null,G=null,ne=null,Be.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:Ae,bindFramebuffer:it,drawBuffers:ze,useProgram:yt,setBlending:pt,setMaterial:Ft,setFlipSided:Mt,setCullFace:jt,setLineWidth:Lt,setPolygonOffset:Bt,setScissorTest:Ct,activeTexture:rn,bindTexture:j,unbindTexture:Gt,compressedTexImage2D:kt,compressedTexImage3D:F,texImage2D:xe,texImage3D:Se,pixelStorei:We,getParameter:Ne,updateUBOMapping:Qe,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:De,texSubImage2D:w,texSubImage3D:ee,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Le,viewport:Ie,reset:ft}}function NE(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,S=new WeakMap,y=new Set;let _;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(F,w){return E?new OffscreenCanvas(F,w):hu("canvas")}function x(F,w,ee){let le=1;const he=kt(F);if((he.width>ee||he.height>ee)&&(le=ee/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ee=Math.floor(le*he.width),De=Math.floor(le*he.height);_===void 0&&(_=A(Ee,De));const xe=w?A(Ee,De):_;return xe.width=Ee,xe.height=De,xe.getContext("2d").drawImage(F,0,0,Ee,De),bt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+De+")."),xe}else return"data"in F&&bt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function v(F){return F.generateMipmaps}function R(F){r.generateMipmap(F)}function U(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(F,w,ee,le,he,Ee=!1){if(F!==null){if(r[F]!==void 0)return r[F];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let De;le&&(De=e.get("EXT_texture_norm16"),De||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=w;if(w===r.RED&&(ee===r.FLOAT&&(xe=r.R32F),ee===r.HALF_FLOAT&&(xe=r.R16F),ee===r.UNSIGNED_BYTE&&(xe=r.R8),ee===r.UNSIGNED_SHORT&&De&&(xe=De.R16_EXT),ee===r.SHORT&&De&&(xe=De.R16_SNORM_EXT)),w===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(xe=r.R8UI),ee===r.UNSIGNED_SHORT&&(xe=r.R16UI),ee===r.UNSIGNED_INT&&(xe=r.R32UI),ee===r.BYTE&&(xe=r.R8I),ee===r.SHORT&&(xe=r.R16I),ee===r.INT&&(xe=r.R32I)),w===r.RG&&(ee===r.FLOAT&&(xe=r.RG32F),ee===r.HALF_FLOAT&&(xe=r.RG16F),ee===r.UNSIGNED_BYTE&&(xe=r.RG8),ee===r.UNSIGNED_SHORT&&De&&(xe=De.RG16_EXT),ee===r.SHORT&&De&&(xe=De.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(xe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(xe=r.RG16UI),ee===r.UNSIGNED_INT&&(xe=r.RG32UI),ee===r.BYTE&&(xe=r.RG8I),ee===r.SHORT&&(xe=r.RG16I),ee===r.INT&&(xe=r.RG32I)),w===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(xe=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(xe=r.RGB16UI),ee===r.UNSIGNED_INT&&(xe=r.RGB32UI),ee===r.BYTE&&(xe=r.RGB8I),ee===r.SHORT&&(xe=r.RGB16I),ee===r.INT&&(xe=r.RGB32I)),w===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(xe=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(xe=r.RGBA16UI),ee===r.UNSIGNED_INT&&(xe=r.RGBA32UI),ee===r.BYTE&&(xe=r.RGBA8I),ee===r.SHORT&&(xe=r.RGBA16I),ee===r.INT&&(xe=r.RGBA32I)),w===r.RGB&&(ee===r.UNSIGNED_SHORT&&De&&(xe=De.RGB16_EXT),ee===r.SHORT&&De&&(xe=De.RGB16_SNORM_EXT),ee===r.UNSIGNED_INT_5_9_9_9_REV&&(xe=r.RGB9_E5),ee===r.UNSIGNED_INT_10F_11F_11F_REV&&(xe=r.R11F_G11F_B10F)),w===r.RGBA){const Se=Ee?fu:Jt.getTransfer(he);ee===r.FLOAT&&(xe=r.RGBA32F),ee===r.HALF_FLOAT&&(xe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(xe=Se===dn?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT&&De&&(xe=De.RGBA16_EXT),ee===r.SHORT&&De&&(xe=De.RGBA16_SNORM_EXT),ee===r.UNSIGNED_SHORT_4_4_4_4&&(xe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(xe=r.RGB5_A1)}return(xe===r.R16F||xe===r.R32F||xe===r.RG16F||xe===r.RG32F||xe===r.RGBA16F||xe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function I(F,w){let ee;return F?w===null||w===Xr||w===pl?ee=r.DEPTH24_STENCIL8:w===Hr?ee=r.DEPTH32F_STENCIL8:w===hl&&(ee=r.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xr||w===pl?ee=r.DEPTH_COMPONENT24:w===Hr?ee=r.DEPTH_COMPONENT32F:w===hl&&(ee=r.DEPTH_COMPONENT16),ee}function N(F,w){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==ci&&F.minFilter!==vi?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function k(F){const w=F.target;w.removeEventListener("dispose",k),L(w),w.isVideoTexture&&S.delete(w),w.isHTMLTexture&&y.delete(w)}function T(F){const w=F.target;w.removeEventListener("dispose",T),H(w)}function L(F){const w=s.get(F);if(w.__webglInit===void 0)return;const ee=F.source,le=M.get(ee);if(le){const he=le[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&z(F),Object.keys(le).length===0&&M.delete(ee)}s.remove(F)}function z(F){const w=s.get(F);r.deleteTexture(w.__webglTexture);const ee=F.source,le=M.get(ee);delete le[w.__cacheKey],u.memory.textures--}function H(F){const w=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(w.__webglFramebuffer[le]))for(let he=0;he<w.__webglFramebuffer[le].length;he++)r.deleteFramebuffer(w.__webglFramebuffer[le][he]);else r.deleteFramebuffer(w.__webglFramebuffer[le]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[le])}else{if(Array.isArray(w.__webglFramebuffer))for(let le=0;le<w.__webglFramebuffer.length;le++)r.deleteFramebuffer(w.__webglFramebuffer[le]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let le=0;le<w.__webglColorRenderbuffer.length;le++)w.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[le]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=F.textures;for(let le=0,he=ee.length;le<he;le++){const Ee=s.get(ee[le]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),u.memory.textures--),s.remove(ee[le])}s.remove(F)}let q=0;function re(){q=0}function G(){return q}function ne(F){q=F}function fe(){const F=q;return F>=o.maxTextures&&bt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,F}function oe(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function Z(F,w){const ee=s.get(F);if(F.isVideoTexture&&j(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ee.__version!==F.version){const le=F.image;if(le===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ee,F,w);return}}else F.isExternalTexture&&(ee.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+w)}function J(F,w){const ee=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){Ae(ee,F,w);return}else F.isExternalTexture&&(ee.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+w)}function K(F,w){const ee=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){Ae(ee,F,w);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+w)}function O(F,w){const ee=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ee.__version!==F.version){it(ee,F,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+w)}const ce={[Ma]:r.REPEAT,[ps]:r.CLAMP_TO_EDGE,[Hf]:r.MIRRORED_REPEAT},we={[ci]:r.NEAREST,[q_]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[tf]:r.LINEAR_MIPMAP_NEAREST,[_a]:r.LINEAR_MIPMAP_LINEAR},Be={[K_]:r.NEVER,[tx]:r.ALWAYS,[Z_]:r.LESS,[Ih]:r.LEQUAL,[J_]:r.EQUAL,[Dh]:r.GEQUAL,[Q_]:r.GREATER,[ex]:r.NOTEQUAL};function Xe(F,w){if(w.type===Hr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===vi||w.magFilter===tf||w.magFilter===Tc||w.magFilter===_a||w.minFilter===vi||w.minFilter===tf||w.minFilter===Tc||w.minFilter===_a)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,ce[w.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,ce[w.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,ce[w.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,we[w.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,we[w.minFilter]),w.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==Tc&&w.minFilter!==_a||w.type===Hr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ye(F,w){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",k));const le=w.source;let he=M.get(le);he===void 0&&(he={},M.set(le,he));const Ee=oe(w);if(Ee!==F.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),he[Ee].usedTimes++;const De=he[F.__cacheKey];De!==void 0&&(he[F.__cacheKey].usedTimes--,De.usedTimes===0&&z(w)),F.__cacheKey=Ee,F.__webglTexture=he[Ee].texture}return ee}function de(F,w,ee){return Math.floor(Math.floor(F/ee)/w)}function ge(F,w,ee,le){const Ee=F.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,ee,le,w.data);else{Ee.sort((We,Le)=>We.start-Le.start);let De=0;for(let We=1;We<Ee.length;We++){const Le=Ee[De],Ie=Ee[We],Qe=Le.start+Le.count,Fe=de(Ie.start,w.width,4),ft=de(Le.start,w.width,4);Ie.start<=Qe+1&&Fe===ft&&de(Ie.start+Ie.count-1,w.width,4)===Fe?Le.count=Math.max(Le.count,Ie.start+Ie.count-Le.start):(++De,Ee[De]=Ie)}Ee.length=De+1;const xe=t.getParameter(r.UNPACK_ROW_LENGTH),Se=t.getParameter(r.UNPACK_SKIP_PIXELS),Ne=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let We=0,Le=Ee.length;We<Le;We++){const Ie=Ee[We],Qe=Math.floor(Ie.start/4),Fe=Math.ceil(Ie.count/4),ft=Qe%w.width,X=Math.floor(Qe/w.width),Oe=Fe,W=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(r.UNPACK_SKIP_ROWS,X),t.texSubImage2D(r.TEXTURE_2D,0,ft,X,Oe,W,ee,le,w.data)}F.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,xe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function Ae(F,w,ee){let le=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=r.TEXTURE_3D);const he=Ye(F,w),Ee=w.source;t.bindTexture(le,F.__webglTexture,r.TEXTURE0+ee);const De=s.get(Ee);if(Ee.version!==De.__version||he===!0){if(t.activeTexture(r.TEXTURE0+ee),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const W=Jt.getPrimaries(Jt.workingColorSpace),Re=w.colorSpace===Gs?null:Jt.getPrimaries(w.colorSpace),Ce=w.colorSpace===Gs||W===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let Se=x(w.image,!1,o.maxTextureSize);Se=Gt(w,Se);const Ne=l.convert(w.format,w.colorSpace),We=l.convert(w.type);let Le=b(w.internalFormat,Ne,We,w.normalized,w.colorSpace,w.isVideoTexture);Xe(le,w);let Ie;const Qe=w.mipmaps,Fe=w.isVideoTexture!==!0,ft=De.__version===void 0||he===!0,X=Ee.dataReady,Oe=N(w,Se);if(w.isDepthTexture)Le=I(w.format===xa,w.type),ft&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Le,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,Le,Se.width,Se.height,0,Ne,We,null));else if(w.isDataTexture)if(Qe.length>0){Fe&&ft&&t.texStorage2D(r.TEXTURE_2D,Oe,Le,Qe[0].width,Qe[0].height);for(let W=0,Re=Qe.length;W<Re;W++)Ie=Qe[W],Fe?X&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Ie.width,Ie.height,Ne,We,Ie.data):t.texImage2D(r.TEXTURE_2D,W,Le,Ie.width,Ie.height,0,Ne,We,Ie.data);w.generateMipmaps=!1}else Fe?(ft&&t.texStorage2D(r.TEXTURE_2D,Oe,Le,Se.width,Se.height),X&&ge(w,Se,Ne,We)):t.texImage2D(r.TEXTURE_2D,0,Le,Se.width,Se.height,0,Ne,We,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Le,Qe[0].width,Qe[0].height,Se.depth);for(let W=0,Re=Qe.length;W<Re;W++)if(Ie=Qe[W],w.format!==Rr)if(Ne!==null)if(Fe){if(X)if(w.layerUpdates.size>0){const Ce=H0(Ie.width,Ie.height,w.format,w.type);for(const Me of w.layerUpdates){const et=Ie.data.subarray(Me*Ce/Ie.data.BYTES_PER_ELEMENT,(Me+1)*Ce/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,Me,Ie.width,Ie.height,1,Ne,et)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,Ie.width,Ie.height,Se.depth,Ne,Ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Le,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,Ie.width,Ie.height,Se.depth,Ne,We,Ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Le,Ie.width,Ie.height,Se.depth,0,Ne,We,Ie.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Fe&&ft&&t.texStorage2D(r.TEXTURE_2D,Oe,Le,Qe[0].width,Qe[0].height);for(let W=0,Re=Qe.length;W<Re;W++)Ie=Qe[W],w.format!==Rr?Ne!==null?Fe?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,Ie.width,Ie.height,Ne,Ie.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Le,Ie.width,Ie.height,0,Ie.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?X&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Ie.width,Ie.height,Ne,We,Ie.data):t.texImage2D(r.TEXTURE_2D,W,Le,Ie.width,Ie.height,0,Ne,We,Ie.data)}else if(w.isDataArrayTexture)if(Fe){if(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Le,Se.width,Se.height,Se.depth),X)if(w.layerUpdates.size>0){const W=H0(Se.width,Se.height,w.format,w.type);for(const Re of w.layerUpdates){const Ce=Se.data.subarray(Re*W/Se.data.BYTES_PER_ELEMENT,(Re+1)*W/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Re,Se.width,Se.height,1,Ne,We,Ce)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ne,We,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,Se.width,Se.height,Se.depth,0,Ne,We,Se.data);else if(w.isData3DTexture)Fe?(ft&&t.texStorage3D(r.TEXTURE_3D,Oe,Le,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ne,We,Se.data)):t.texImage3D(r.TEXTURE_3D,0,Le,Se.width,Se.height,Se.depth,0,Ne,We,Se.data);else if(w.isFramebufferTexture){if(ft)if(Fe)t.texStorage2D(r.TEXTURE_2D,Oe,Le,Se.width,Se.height);else{let W=Se.width,Re=Se.height;for(let Ce=0;Ce<Oe;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Le,W,Re,0,Ne,We,null),W>>=1,Re>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){const W=r.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),Se.parentNode!==W){W.appendChild(Se),y.add(w),W.onpaint=Re=>{const Ce=Re.changedElements;for(const Me of y)Ce.includes(Me.image)&&(Me.needsUpdate=!0)},W.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Se);else{const Ce=r.RGBA,Me=r.RGBA,et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ce,Me,et,Se)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(Fe&&ft){const W=kt(Qe[0]);t.texStorage2D(r.TEXTURE_2D,Oe,Le,W.width,W.height)}for(let W=0,Re=Qe.length;W<Re;W++)Ie=Qe[W],Fe?X&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Ne,We,Ie):t.texImage2D(r.TEXTURE_2D,W,Le,Ne,We,Ie);w.generateMipmaps=!1}else if(Fe){if(ft){const W=kt(Se);t.texStorage2D(r.TEXTURE_2D,Oe,Le,W.width,W.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,We,Se)}else t.texImage2D(r.TEXTURE_2D,0,Le,Ne,We,Se);v(w)&&R(le),De.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function it(F,w,ee){if(w.image.length!==6)return;const le=Ye(F,w),he=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+ee);const Ee=s.get(he);if(he.version!==Ee.__version||le===!0){t.activeTexture(r.TEXTURE0+ee);const De=Jt.getPrimaries(Jt.workingColorSpace),xe=w.colorSpace===Gs?null:Jt.getPrimaries(w.colorSpace),Se=w.colorSpace===Gs||De===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ne=w.isCompressedTexture||w.image[0].isCompressedTexture,We=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let Me=0;Me<6;Me++)!Ne&&!We?Le[Me]=x(w.image[Me],!0,o.maxCubemapSize):Le[Me]=We?w.image[Me].image:w.image[Me],Le[Me]=Gt(w,Le[Me]);const Ie=Le[0],Qe=l.convert(w.format,w.colorSpace),Fe=l.convert(w.type),ft=b(w.internalFormat,Qe,Fe,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,Oe=Ee.__version===void 0||le===!0,W=he.dataReady;let Re=N(w,Ie);Xe(r.TEXTURE_CUBE_MAP,w);let Ce;if(Ne){X&&Oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ft,Ie.width,Ie.height);for(let Me=0;Me<6;Me++){Ce=Le[Me].mipmaps;for(let et=0;et<Ce.length;et++){const Ze=Ce[et];w.format!==Rr?Qe!==null?X?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,0,0,Ze.width,Ze.height,Qe,Ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,ft,Ze.width,Ze.height,0,Ze.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,0,0,Ze.width,Ze.height,Qe,Fe,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,ft,Ze.width,Ze.height,0,Qe,Fe,Ze.data)}}}else{if(Ce=w.mipmaps,X&&Oe){Ce.length>0&&Re++;const Me=kt(Le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ft,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(We){X?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Le[Me].width,Le[Me].height,Qe,Fe,Le[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ft,Le[Me].width,Le[Me].height,0,Qe,Fe,Le[Me].data);for(let et=0;et<Ce.length;et++){const wt=Ce[et].image[Me].image;X?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,0,0,wt.width,wt.height,Qe,Fe,wt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,ft,wt.width,wt.height,0,Qe,Fe,wt.data)}}else{X?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Qe,Fe,Le[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ft,Qe,Fe,Le[Me]);for(let et=0;et<Ce.length;et++){const Ze=Ce[et];X?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,0,0,Qe,Fe,Ze.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,ft,Qe,Fe,Ze.image[Me])}}}v(w)&&R(r.TEXTURE_CUBE_MAP),Ee.__version=he.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ze(F,w,ee,le,he,Ee){const De=l.convert(ee.format,ee.colorSpace),xe=l.convert(ee.type),Se=b(ee.internalFormat,De,xe,ee.normalized,ee.colorSpace),Ne=s.get(w),We=s.get(ee);if(We.__renderTarget=w,!Ne.__hasExternalTextures){const Le=Math.max(1,w.width>>Ee),Ie=Math.max(1,w.height>>Ee);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,Se,Le,Ie,w.depth,0,De,xe,null):t.texImage2D(he,Ee,Se,Le,Ie,0,De,xe,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),rn(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,he,We.__webglTexture,0,Ct(w)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,he,We.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(F,w,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,F),w.depthBuffer){const le=w.depthTexture,he=le&&le.isDepthTexture?le.type:null,Ee=I(w.stencilBuffer,he),De=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rn(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct(w),Ee,w.width,w.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct(w),Ee,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,F)}else{const le=w.textures;for(let he=0;he<le.length;he++){const Ee=le[he],De=l.convert(Ee.format,Ee.colorSpace),xe=l.convert(Ee.type),Se=b(Ee.internalFormat,De,xe,Ee.normalized,Ee.colorSpace);rn(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct(w),Se,w.width,w.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct(w),Se,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Se,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function en(F,w,ee){const le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,w.depthTexture);const Ne=l.convert(w.depthTexture.format),We=l.convert(w.depthTexture.type);let Le;w.depthTexture.format===vs?Le=r.DEPTH_COMPONENT24:w.depthTexture.format===xa&&(Le=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Le,w.width,w.height,0,Ne,We,null)}}else Z(w.depthTexture,0);const Ee=he.__webglTexture,De=Ct(w),xe=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+ee:r.TEXTURE_2D,Se=w.depthTexture.format===xa?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===vs)rn(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,xe,Ee,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,Se,xe,Ee,0);else if(w.depthTexture.format===xa)rn(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,xe,Ee,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,Se,xe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(F){const w=s.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const le=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=le}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(ee)for(let le=0;le<6;le++)en(w.__webglFramebuffer[le],F,le);else{const le=F.texture.mipmaps;le&&le.length>0?en(w.__webglFramebuffer[0],F,0):en(w.__webglFramebuffer,F,0)}else if(ee){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=r.createRenderbuffer(),yt(w.__webglDepthbuffer[le],F,!1);else{const he=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}else{const le=F.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),yt(w.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(F,w,ee){const le=s.get(F);w!==void 0&&ze(le.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ht(F)}function Ft(F){const w=F.texture,ee=s.get(F),le=s.get(w);F.addEventListener("dispose",T);const he=F.textures,Ee=F.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=w.version,u.memory.textures++),Ee){ee.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[xe]=[];for(let Se=0;Se<w.mipmaps.length;Se++)ee.__webglFramebuffer[xe][Se]=r.createFramebuffer()}else ee.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)ee.__webglFramebuffer[xe]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(De)for(let xe=0,Se=he.length;xe<Se;xe++){const Ne=s.get(he[xe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&rn(F)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Se=he[xe];ee.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]);const Ne=l.convert(Se.format,Se.colorSpace),We=l.convert(Se.type),Le=b(Se.internalFormat,Ne,We,Se.normalized,Se.colorSpace,F.isXRRenderTarget===!0),Ie=Ct(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Le,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ee.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),yt(ee.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ze(ee.__webglFramebuffer[xe][Se],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else ze(ee.__webglFramebuffer[xe],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(w)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Se=he.length;xe<Se;xe++){const Ne=he[xe],We=s.get(Ne);let Le=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Le=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Le,We.__webglTexture),Xe(Le,Ne),ze(ee.__webglFramebuffer,F,Ne,r.COLOR_ATTACHMENT0+xe,Le,0),v(Ne)&&R(Le)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(xe=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),Xe(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ze(ee.__webglFramebuffer[Se],F,w,r.COLOR_ATTACHMENT0,xe,Se);else ze(ee.__webglFramebuffer,F,w,r.COLOR_ATTACHMENT0,xe,0);v(w)&&R(xe),t.unbindTexture()}F.depthBuffer&&ht(F)}function Mt(F){const w=F.textures;for(let ee=0,le=w.length;ee<le;ee++){const he=w[ee];if(v(he)){const Ee=U(F),De=s.get(he).__webglTexture;t.bindTexture(Ee,De),R(Ee),t.unbindTexture()}}}const jt=[],Lt=[];function Bt(F){if(F.samples>0){if(rn(F)===!1){const w=F.textures,ee=F.width,le=F.height;let he=r.COLOR_BUFFER_BIT;const Ee=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(F),xe=w.length>1;if(xe)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Se=F.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),xe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const We=s.get(w[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,ee,le,0,0,ee,le,he,r.NEAREST),m===!0&&(jt.length=0,Lt.length=0,jt.push(r.COLOR_ATTACHMENT0+Ne),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(jt.push(Ee),Lt.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const We=s.get(w[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,We,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&m){const w=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ct(F){return Math.min(o.maxSamples,F.samples)}function rn(F){const w=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function j(F){const w=u.render.frame;S.get(F)!==w&&(S.set(F,w),F.update())}function Gt(F,w){const ee=F.colorSpace,le=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ee!==du&&ee!==Gs&&(Jt.getTransfer(ee)===dn?(le!==Rr||he!==Ki)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):cn("WebGLTextures: Unsupported texture color space:",ee)),w}function kt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=re,this.getTextureUnits=G,this.setTextureUnits=ne,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=pt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IE(r,e){function t(s,o=Gs){let l;const u=Jt.getTransfer(o);if(s===Ki)return r.UNSIGNED_BYTE;if(s===Rh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ch)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Cg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ag)return r.BYTE;if(s===Rg)return r.SHORT;if(s===hl)return r.UNSIGNED_SHORT;if(s===Ah)return r.INT;if(s===Xr)return r.UNSIGNED_INT;if(s===Hr)return r.FLOAT;if(s===qr)return r.HALF_FLOAT;if(s===Lg)return r.ALPHA;if(s===Ng)return r.RGB;if(s===Rr)return r.RGBA;if(s===vs)return r.DEPTH_COMPONENT;if(s===xa)return r.DEPTH_STENCIL;if(s===Ig)return r.RED;if(s===Ph)return r.RED_INTEGER;if(s===Ea)return r.RG;if(s===Lh)return r.RG_INTEGER;if(s===Nh)return r.RGBA_INTEGER;if(s===iu||s===ru||s===su||s===au)if(u===dn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===iu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===iu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ru)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gf||s===Wf||s===Xf||s===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Gf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jf||s===$f||s===Yf||s===Kf||s===Zf||s===cu||s===Jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===jf||s===$f)return u===dn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Yf)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Kf)return l.COMPRESSED_R11_EAC;if(s===Zf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===cu)return l.COMPRESSED_RG11_EAC;if(s===Jf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Qf||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===ah||s===oh||s===lh||s===ch||s===uh||s===dh||s===fh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Qf)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===eh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===th)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ih)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ah)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===oh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ch)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hh||s===ph||s===mh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===hh)return u===dn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ph)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gh||s===vh||s===uu||s===_h)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===gh)return l.COMPRESSED_RED_RGTC1_EXT;if(s===vh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_h)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const DE=`
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

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Gg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Lr({vertexShader:DE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new wa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends Ta{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,S=null,y=null,_=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",x=new OE,v={},R=t.getContextAttributes();let U=null,b=null;const I=[],N=[],k=new qt;let T=null,L=null;const z=new Yi;z.viewport=new In;const H=new Yi;H.viewport=new In;const q=[z,H],re=new Xx;let G=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let ge=I[de];return ge===void 0&&(ge=new uf,I[de]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(de){let ge=I[de];return ge===void 0&&(ge=new uf,I[de]=ge),ge.getGripSpace()},this.getHand=function(de){let ge=I[de];return ge===void 0&&(ge=new uf,I[de]=ge),ge.getHandSpace()};function fe(de){const ge=N.indexOf(de.inputSource);if(ge===-1)return;const Ae=I[ge];Ae!==void 0&&(Ae.update(de.inputSource,de.frame,p||u),Ae.dispatchEvent({type:de.type,data:de.inputSource}))}function oe(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",Z);for(let de=0;de<I.length;de++){const ge=N[de];ge!==null&&(N[de]=null,I[de].disconnect(ge))}G=null,ne=null,x.reset();for(const de in v)delete v[de];if(e.setRenderTarget(U),M=null,_=null,y=null,o=null,b=null,Ye.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),L!==null){const de=L.camera;de.fov=L.fov,de.zoom=L.zoom,de.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){l=de,s.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){f=de,s.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(de){p=de},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return y===null&&A&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(de){if(o=de,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",Z),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,it=null,ze=null;R.depth&&(ze=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=R.stencil?xa:vs,it=R.stencil?pl:Xr);const yt={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:l};y=this.getBinding(),_=y.createProjectionLayer(yt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new Cr(_.textureWidth,_.textureHeight,{format:Rr,type:Ki,depthTexture:new gl(_.textureWidth,_.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ae={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Ae),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Cr(M.framebufferWidth,M.framebufferHeight,{format:Rr,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Ye.setContext(o),Ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(de){for(let ge=0;ge<de.removed.length;ge++){const Ae=de.removed[ge],it=N.indexOf(Ae);it>=0&&(N[it]=null,I[it].disconnect(Ae))}for(let ge=0;ge<de.added.length;ge++){const Ae=de.added[ge];let it=N.indexOf(Ae);if(it===-1){for(let yt=0;yt<I.length;yt++)if(yt>=N.length){N.push(Ae),it=yt;break}else if(N[yt]===null){N[yt]=Ae,it=yt;break}if(it===-1)break}const ze=I[it];ze&&ze.connect(Ae)}}const J=new te,K=new te;function O(de,ge,Ae){J.setFromMatrixPosition(ge.matrixWorld),K.setFromMatrixPosition(Ae.matrixWorld);const it=J.distanceTo(K),ze=ge.projectionMatrix.elements,yt=Ae.projectionMatrix.elements,en=ze[14]/(ze[10]-1),ht=ze[14]/(ze[10]+1),pt=(ze[9]+1)/ze[5],Ft=(ze[9]-1)/ze[5],Mt=(ze[8]-1)/ze[0],jt=(yt[8]+1)/yt[0],Lt=en*Mt,Bt=en*jt,Ct=it/(-Mt+jt),rn=Ct*-Mt;if(ge.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(rn),de.translateZ(Ct),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),ze[10]===-1)de.projectionMatrix.copy(ge.projectionMatrix),de.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const j=en+Ct,Gt=ht+Ct,kt=Lt-rn,F=Bt+(it-rn),w=pt*ht/Gt*j,ee=Ft*ht/Gt*j;de.projectionMatrix.makePerspective(kt,F,w,ee,j,Gt),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function ce(de,ge){ge===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(ge.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(o===null)return;let ge=de.near,Ae=de.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),re.near=H.near=z.near=ge,re.far=H.far=z.far=Ae,(G!==re.near||ne!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),G=re.near,ne=re.far),re.layers.mask=de.layers.mask|6,z.layers.mask=re.layers.mask&-5,H.layers.mask=re.layers.mask&-3;const it=de.parent,ze=re.cameras;ce(re,it);for(let yt=0;yt<ze.length;yt++)ce(ze[yt],it);ze.length===2?O(re,z,H):re.projectionMatrix.copy(z.projectionMatrix),L===null&&de.isPerspectiveCamera&&(L={camera:de,fov:de.fov,zoom:de.zoom}),we(de,re,it)};function we(de,ge,Ae){Ae===null?de.matrix.copy(ge.matrixWorld):(de.matrix.copy(Ae.matrixWorld),de.matrix.invert(),de.matrix.multiply(ge.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(ge.projectionMatrix),de.projectionMatrixInverse.copy(ge.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=Sh*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(de){m=de,_!==null&&(_.fixedFoveation=de),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=de)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(re)},this.getCameraTexture=function(de){return v[de]};let Be=null;function Xe(de,ge){if(S=ge.getViewerPose(p||u),E=ge,S!==null){const Ae=S.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let it=!1;Ae.length!==re.cameras.length&&(re.cameras.length=0,it=!0);for(let ht=0;ht<Ae.length;ht++){const pt=Ae[ht];let Ft=null;if(M!==null)Ft=M.getViewport(pt);else{const jt=y.getViewSubImage(_,pt);Ft=jt.viewport,ht===0&&(e.setRenderTargetTextures(b,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(b))}let Mt=q[ht];Mt===void 0&&(Mt=new Yi,Mt.layers.enable(ht),Mt.viewport=new In,q[ht]=Mt),Mt.matrix.fromArray(pt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(pt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ht===0&&(re.matrix.copy(Mt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),it===!0&&re.cameras.push(Mt)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){y=s.getBinding();const ht=y.getDepthInformation(Ae[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,o.renderState)}if(ze&&ze.includes("camera-access")&&A){e.state.unbindTexture(),y=s.getBinding();for(let ht=0;ht<Ae.length;ht++){const pt=Ae[ht].camera;if(pt){let Ft=v[pt];Ft||(Ft=new Gg,v[pt]=Ft);const Mt=y.getCameraImage(pt);Ft.sourceTexture=Mt}}}}for(let Ae=0;Ae<I.length;Ae++){const it=N[Ae],ze=I[Ae];it!==null&&ze!==void 0&&ze.update(it,ge,p||u)}Be&&Be(de,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Ye=new jg;Ye.setAnimationLoop(Xe),this.setAnimationLoop=function(de){Be=de},this.dispose=function(){}}}const kE=new Cn,ev=new It;ev.set(-1,0,0,0,1,0,0,0,1);function BE(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,Wg(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,R,U,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),S(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&M(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),A(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?m(x,v,R,U):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ki&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ki&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const R=e.get(v),U=R.envMap,b=R.envMapRotation;U&&(x.envMap.value=U,x.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(b)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(ev),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,R,U){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*R,x.scale.value=U*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function S(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,R){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ki&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const R=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function zE(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(b,I){const N=I.program;s.uniformBlockBinding(b,N)}function p(b,I){let N=o[b.id];N===void 0&&(x(b),N=S(b),o[b.id]=N,b.addEventListener("dispose",R));const k=I.program;s.updateUBOMapping(b,k);const T=e.render.frame;l[b.id]!==T&&(_(b),l[b.id]=T)}function S(b){const I=y();b.__bindingPointIndex=I;const N=r.createBuffer(),k=b.__size,T=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,k,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function y(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const I=o[b.id],N=b.uniforms,k=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let T=0,L=N.length;T<L;T++){const z=N[T];if(Array.isArray(z))for(let H=0,q=z.length;H<q;H++)M(z[H],T,H,k);else M(z,T,0,k)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(b,I,N,k){if(A(b,I,N,k)===!0){const T=b.__offset,L=b.value;if(Array.isArray(L)){let z=0;for(let H=0;H<L.length;H++){const q=L[H],re=v(q);E(q,b.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,b.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,b.__data)}}function E(b,I,N){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,N)}function A(b,I,N,k){const T=b.value,L=I+"_"+N;if(k[L]===void 0)return typeof T=="number"||typeof T=="boolean"?k[L]=T:ArrayBuffer.isView(T)?k[L]=T.slice():k[L]=T.clone(),!0;{const z=k[L];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return k[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(z.equals(T)===!1)return z.copy(T),!0}}return!1}function x(b){const I=b.uniforms;let N=0;const k=16;for(let L=0,z=I.length;L<z;L++){const H=Array.isArray(I[L])?I[L]:[I[L]];for(let q=0,re=H.length;q<re;q++){const G=H[q],ne=Array.isArray(G.value)?G.value:[G.value];for(let fe=0,oe=ne.length;fe<oe;fe++){const Z=ne[fe],J=v(Z),K=N%k,O=K%J.boundary,ce=K+O;N+=O,ce!==0&&k-ce<J.storage&&(N+=k-ce),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=N,N+=J.storage}}}const T=N%k;return T>0&&(N+=k-T),b.__size=N,b.__cache={},this}function v(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",b),I}function R(b){const I=b.target;I.removeEventListener("dispose",R);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function U(){for(const b in o)r.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:m,update:p,dispose:U}}const VE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Br=null;function HE(){return Br===null&&(Br=new Cx(VE,16,16,Ea,qr),Br.name="DFG_LUT",Br.minFilter=vi,Br.magFilter=vi,Br.wrapS=ps,Br.wrapT=ps,Br.generateMipmaps=!1,Br.needsUpdate=!0),Br}class GE{constructor(e={}){const{canvas:t=rx(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Ki}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const A=M,x=new Set([Nh,Lh,Ph]),v=new Set([Ki,Xr,hl,pl,Rh,Ch]),R=new Uint32Array(4),U=new Int32Array(4),b=new te;let I=null,N=null;const k=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let H=!1,q=null,re=null,G=null,ne=null;this._outputColorSpace=dr;let fe=0,oe=0,Z=null,J=-1,K=null;const O=new In,ce=new In;let we=null;const Be=new Ht(0);let Xe=0,Ye=t.width,de=t.height,ge=1,Ae=null,it=null;const ze=new In(0,0,Ye,de),yt=new In(0,0,Ye,de);let en=!1;const ht=new kh;let pt=!1,Ft=!1;const Mt=new Cn,jt=new te,Lt=new In,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function rn(){return Z===null?ge:1}let j=s;function Gt(P,Y){return t.getContext(P,Y)}let kt,F,w,ee,le,he,Ee,De,xe,Se,Ne,We,Le,Ie,Qe,Fe,ft,X,Oe,W,Re,Ce,Me;try{const P={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",ct,!1),j===null){const Y="webgl2";if(j=Gt(Y,P),j===null)throw Gt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(P){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),cn("WebGLRenderer: "+P.message),P}function et(){kt=new HM(j),kt.init(),Re=new IE(j,kt),F=new NM(j,kt,e,Re),w=new LE(j,kt),F.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),re=j.createFramebuffer(),G=j.createFramebuffer(),ne=j.createFramebuffer(),ee=new XM(j),le=new vE,he=new NE(j,kt,w,le,F,Re,ee),Ee=new VM(z),De=new jx(j),Ce=new PM(j,De),xe=new GM(j,De,ee,Ce),Se=new jM(j,xe,De,Ce,ee),X=new qM(j,F,he),Qe=new IM(le),Ne=new gE(z,Ee,kt,F,Ce,Qe),We=new BE(z,le),Le=new xE,Ie=new TE(kt),ft=new CM(z,Ee,w,Se,E,m),Fe=new PE(z,Se,F),Me=new zE(j,ee,F,w),Oe=new LM(j,kt,ee),W=new WM(j,kt,ee),ee.programs=Ne.programs,z.capabilities=F,z.extensions=kt,z.properties=le,z.renderLists=Le,z.shadowMap=Fe,z.state=w,z.info=ee}A!==Ki&&(L=new YM(A,t.width,t.height,f,o,l));const Ze=new FE(z,j);this.xr=Ze,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(P){P!==void 0&&(ge=P,this.setSize(Ye,de,!1))},this.getSize=function(P){return P.set(Ye,de)},this.setSize=function(P,Y,me=!0){if(Ze.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=P,de=Y,t.width=Math.floor(P*ge),t.height=Math.floor(Y*ge),me===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(Ye*ge,de*ge).floor()},this.setDrawingBufferSize=function(P,Y,me){Ye=P,de=Y,ge=me,t.width=Math.floor(P*me),t.height=Math.floor(Y*me),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(A===Ki){cn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(O)},this.getViewport=function(P){return P.copy(ze)},this.setViewport=function(P,Y,me,ae){P.isVector4?ze.set(P.x,P.y,P.z,P.w):ze.set(P,Y,me,ae),w.viewport(O.copy(ze).multiplyScalar(ge).round())},this.getScissor=function(P){return P.copy(yt)},this.setScissor=function(P,Y,me,ae){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,Y,me,ae),w.scissor(ce.copy(yt).multiplyScalar(ge).round())},this.getScissorTest=function(){return en},this.setScissorTest=function(P){w.setScissorTest(en=P)},this.setOpaqueSort=function(P){Ae=P},this.setTransparentSort=function(P){it=P},this.getClearColor=function(P){return P.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,me=!0){let ae=0;if(P){let se=!1;if(Z!==null){const ke=Z.texture.format;se=x.has(ke)}if(se){const ke=Z.texture.type,Ve=v.has(ke),He=ft.getClearColor(),tt=ft.getClearAlpha(),st=He.r,Et=He.g,gt=He.b;Ve?(R[0]=st,R[1]=Et,R[2]=gt,R[3]=tt,j.clearBufferuiv(j.COLOR,0,R)):(U[0]=st,U[1]=Et,U[2]=gt,U[3]=tt,j.clearBufferiv(j.COLOR,0,U))}else ae|=j.COLOR_BUFFER_BIT}Y&&(ae|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),q=P},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Le.dispose(),Ie.dispose(),le.dispose(),Ee.dispose(),Se.dispose(),Ce.dispose(),Me.dispose(),Ne.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",xt),Ze.removeEventListener("sessionend",zi),fn.stop()};function wt(P){P.preventDefault(),p0("WebGLRenderer: Context Lost."),H=!0}function mt(){p0("WebGLRenderer: Context Restored."),H=!1;const P=ee.autoReset,Y=Fe.enabled,me=Fe.autoUpdate,ae=Fe.needsUpdate,se=Fe.type;et(),ee.autoReset=P,Fe.enabled=Y,Fe.autoUpdate=me,Fe.needsUpdate=ae,Fe.type=se}function ct(P){cn("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function nt(P){const Y=P.target;Y.removeEventListener("dispose",nt),Mn(Y)}function Mn(P){_n(P),le.remove(P)}function _n(P){const Y=le.get(P).programs;Y!==void 0&&(Y.forEach(function(me){Ne.releaseProgram(me)}),P.isShaderMaterial&&Ne.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,me,ae,se,ke){Y===null&&(Y=Bt);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,He=Kt(P,Y,me,ae,se);w.setMaterial(ae,Ve);let tt=me.index,st=1;if(ae.wireframe===!0){if(tt=xe.getWireframeAttribute(me),tt===void 0)return;st=2}const Et=me.drawRange,gt=me.attributes.position;let Ke=Et.start*st,Dt=(Et.start+Et.count)*st;ke!==null&&(Ke=Math.max(Ke,ke.start*st),Dt=Math.min(Dt,(ke.start+ke.count)*st)),tt!==null?(Ke=Math.max(Ke,0),Dt=Math.min(Dt,tt.count)):gt!=null&&(Ke=Math.max(Ke,0),Dt=Math.min(Dt,gt.count));const hn=Dt-Ke;if(hn<0||hn===1/0)return;Ce.setup(se,ae,He,me,tt);let Zt,$t=Oe;if(tt!==null&&(Zt=De.get(tt),$t=W,$t.setIndex(Zt)),se.isMesh)ae.wireframe===!0?(w.setLineWidth(ae.wireframeLinewidth*rn()),$t.setMode(j.LINES)):$t.setMode(j.TRIANGLES);else if(se.isLine){let bn=ae.linewidth;bn===void 0&&(bn=1),w.setLineWidth(bn*rn()),se.isLineSegments?$t.setMode(j.LINES):se.isLineLoop?$t.setMode(j.LINE_LOOP):$t.setMode(j.LINE_STRIP)}else se.isPoints?$t.setMode(j.POINTS):se.isSprite&&$t.setMode(j.TRIANGLES);if(se.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))$t.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const bn=se._multiDrawStarts,Ge=se._multiDrawCounts,pn=se._multiDrawCount,h=tt?De.get(tt).bytesPerElement:1,B=le.get(ae).currentProgram.getUniforms();for(let ie=0;ie<pn;ie++)B.setValue(j,"_gl_DrawID",ie),$t.render(bn[ie]/h,Ge[ie])}else if(se.isInstancedMesh)$t.renderInstances(Ke,hn,se.count);else if(me.isInstancedBufferGeometry){const bn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ge=Math.min(me.instanceCount,bn);$t.renderInstances(Ke,hn,Ge)}else $t.render(Ke,hn)};function sn(P,Y,me,ae){q!==null&&P.isNodeMaterial&&q.setObject(ae,P),pt===!0&&Qe.setState(P,me,!1),P.transparent===!0&&P.side===Fi&&P.forceSinglePass===!1?(P.side=ki,P.needsUpdate=!0,Nt(P,Y,ae),P.side=Sa,P.needsUpdate=!0,Nt(P,Y,ae),P.side=Fi):Nt(P,Y,ae)}this.compile=function(P,Y,me=null){me===null&&(me=P),q!==null&&q.renderStart(P,Y,me),N=Ie.get(me),N.init(Y),T.push(N),me.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),P!==me&&P.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights(),q!==null&&q.updateLights(N.state.lightsArray),Ft=this.localClippingEnabled,pt=Qe.init(this.clippingPlanes,Ft),pt===!0&&Qe.setGlobalState(this.clippingPlanes,Y),q!==null&&Fe.render(N.state.shadowsArray,me,Y);const ae=new Set;return P.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const ke=se.material;if(ke)if(Array.isArray(ke))for(let Ve=0;Ve<ke.length;Ve++){const He=ke[Ve];sn(He,me,Y,se),ae.add(He)}else sn(ke,me,Y,se),ae.add(ke)}),N=T.pop(),q!==null&&q.renderEnd(),ae},this.compileAsync=function(P,Y,me=null){const ae=this.compile(P,Y,me);return new Promise(se=>{function ke(){if(ae.forEach(function(Ve){const tt=le.get(Ve).currentProgram;(tt===void 0||tt.isReady())&&ae.delete(Ve)}),ae.size===0){se(P);return}setTimeout(ke,10)}kt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Pn=null;function Bi(P){Pn&&Pn(P)}function xt(){fn.stop()}function zi(){fn.start()}const fn=new jg;fn.setAnimationLoop(Bi),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(P){Pn=P,Ze.setAnimationLoop(P),P===null?fn.stop():fn.start()},Ze.addEventListener("sessionstart",xt),Ze.addEventListener("sessionend",zi),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;q!==null&&q.renderStart(P,Y);const me=Ze.enabled===!0&&Ze.isPresenting===!0,ae=L!==null&&(Z===null||me)&&L.begin(z,Z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(Y),Y=Ze.getCamera()),P.isScene===!0&&P.onBeforeRender(z,P,Y,Z),N=Ie.get(P,T.length),N.init(Y),N.state.textureUnits=he.getTextureUnits(),T.push(N),Mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ht.setFromProjectionMatrix(Mt,Gr,Y.reversedDepth),Ft=this.localClippingEnabled,pt=Qe.init(this.clippingPlanes,Ft),I=Le.get(P,k.length),I.init(),k.push(I),Ze.enabled===!0&&Ze.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&ui(Ve,Y,-1/0,z.sortObjects)}ui(P,Y,0,z.sortObjects),I.finish(),q!==null&&q.updateLights(N.state.lightsArray),z.sortObjects===!0&&I.sort(Ae,it),Ct=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Ct&&ft.addToRenderList(I,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Qe.beginShadows();const se=N.state.shadowsArray;if(Fe.render(se,P,Y),pt===!0&&Qe.endShadows(),(ae&&L.hasRenderPass())===!1){const Ve=I.opaque,He=I.transmissive;if(N.setupLights(),Y.isArrayCamera){const tt=Y.cameras;if(He.length>0)for(let st=0,Et=tt.length;st<Et;st++){const gt=tt[st];En(Ve,He,P,gt)}Ct&&ft.render(P);for(let st=0,Et=tt.length;st<Et;st++){const gt=tt[st];Ti(I,P,gt,gt.viewport)}}else He.length>0&&En(Ve,He,P,Y),Ct&&ft.render(P),Ti(I,P,Y)}Z!==null&&oe===0&&(he.updateMultisampleRenderTarget(Z),he.updateRenderTargetMipmap(Z)),ae&&L.end(z),P.isScene===!0&&P.onAfterRender(z,P,Y),Ce.resetDefaultState(),J=-1,K=null,T.pop(),T.length>0?(N=T[T.length-1],he.setTextureUnits(N.state.textureUnits),pt===!0&&Qe.setGlobalState(z.clippingPlanes,N.state.camera)):N=null,k.pop(),k.length>0?I=k[k.length-1]:I=null,q!==null&&q.renderEnd()};function ui(P,Y,me,ae){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)me=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLightProbeGrid)N.pushLightProbeGrid(P);else if(P.isLight)N.pushLight(P),P.castShadow&&N.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ht)){ae&&Lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Mt);const Ve=Se.update(P),He=P.material;He.visible&&I.push(P,Ve,He,me,Lt.z,null,Y)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ht))){const Ve=Se.update(P),He=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Lt.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Lt.copy(Ve.boundingSphere.center)),Lt.applyMatrix4(P.matrixWorld).applyMatrix4(Mt)),Array.isArray(He)){const tt=Ve.groups;for(let st=0,Et=tt.length;st<Et;st++){const gt=tt[st],Ke=He[gt.materialIndex];Ke&&Ke.visible&&I.push(P,Ve,Ke,me,Lt.z,gt,Y)}}else He.visible&&I.push(P,Ve,He,me,Lt.z,null,Y)}}const ke=P.children;for(let Ve=0,He=ke.length;Ve<He;Ve++)ui(ke[Ve],Y,me,ae)}function Ti(P,Y,me,ae){const{opaque:se,transmissive:ke,transparent:Ve}=P;N.setupLightsView(me),pt===!0&&Qe.setGlobalState(z.clippingPlanes,me),ae&&w.viewport(O.copy(ae)),se.length>0&&Fn(se,Y,me),ke.length>0&&Fn(ke,Y,me),Ve.length>0&&Fn(Ve,Y,me),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function En(P,Y,me,ae){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const Ke=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new Cr(1,1,{generateMipmaps:!0,type:Ke?qr:Ki,minFilter:_a,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const ke=N.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||O;ke.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const He=z.getRenderTarget(),tt=z.getActiveCubeFace(),st=z.getActiveMipmapLevel();z.setRenderTarget(ke),z.getClearColor(Be),Xe=z.getClearAlpha(),Xe<1&&z.setClearColor(16777215,.5),z.clear(),Ct&&ft.render(me);const Et=z.toneMapping;z.toneMapping=Wr;const gt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),pt===!0&&Qe.setGlobalState(z.clippingPlanes,ae),Fn(P,me,ae),he.updateMultisampleRenderTarget(ke),he.updateRenderTargetMipmap(ke),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Dt=0,hn=Y.length;Dt<hn;Dt++){const Zt=Y[Dt],{object:$t,geometry:bn,material:Ge,group:pn}=Zt;if(Ge.side===Fi&&$t.layers.test(ae.layers)){const h=Ge.side;Ge.side=ki,Ge.needsUpdate=!0,Zn($t,me,ae,bn,Ge,pn),Ge.side=h,Ge.needsUpdate=!0,Ke=!0}}Ke===!0&&(he.updateMultisampleRenderTarget(ke),he.updateRenderTargetMipmap(ke))}z.setRenderTarget(He,tt,st),z.setClearColor(Be,Xe),gt!==void 0&&(ae.viewport=gt),z.toneMapping=Et}function Fn(P,Y,me){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,ke=P.length;se<ke;se++){const Ve=P[se],{object:He,geometry:tt,group:st}=Ve;let Et=Ve.material;Et.allowOverride===!0&&ae!==null&&(Et=ae),He.layers.test(me.layers)&&Zn(He,Y,me,tt,Et,st)}}function Zn(P,Y,me,ae,se,ke){q!==null&&se.isNodeMaterial&&q.setObject(P,se),P.onBeforeRender(z,Y,me,ae,se,ke),P.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(z,Y,me,ae,P,ke),se.transparent===!0&&se.side===Fi&&se.forceSinglePass===!1?(se.side=ki,se.needsUpdate=!0,z.renderBufferDirect(me,Y,ae,se,P,ke),se.side=Sa,se.needsUpdate=!0,z.renderBufferDirect(me,Y,ae,se,P,ke),se.side=Fi):z.renderBufferDirect(me,Y,ae,se,P,ke),P.onAfterRender(z,Y,me,ae,se,ke)}function Nt(P,Y,me){Y.isScene!==!0&&(Y=Bt);const ae=le.get(P),se=N.state.lights,ke=N.state.shadowsArray,Ve=se.state.version,He=Ne.getParameters(P,se.state,ke,Y,me,N.state.lightProbeGridArray),tt=Ne.getProgramCacheKey(He);let st=ae.programs;ae.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const Et=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ae.envMap=Ee.get(P.envMap||ae.environment,Et),ae.envMapRotation=ae.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,st===void 0&&(P.addEventListener("dispose",nt),st=new Map,ae.programs=st);let gt=st.get(tt);if(gt!==void 0){if(ae.currentProgram===gt&&ae.lightsStateVersion===Ve)return ri(P,He),gt}else He.uniforms=Ne.getUniforms(P),q!==null&&P.isNodeMaterial&&q.build(P,me,He),P.onBeforeCompile(He,z),gt=Ne.acquireProgram(He,tt),st.set(tt,gt),ae.uniforms=He.uniforms;const Ke=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),ri(P,He),ae.needsLights=bi(P),ae.lightsStateVersion=Ve,ae.needsLights&&(Ke.ambientLightColor.value=se.state.ambient,Ke.lightProbe.value=se.state.probe,Ke.sunLights.value=se.state.sun,Ke.sunLightShadows.value=se.state.sunShadow,Ke.directionalLights.value=se.state.directional,Ke.directionalLightShadows.value=se.state.directionalShadow,Ke.spotLights.value=se.state.spot,Ke.spotLightShadows.value=se.state.spotShadow,Ke.rectAreaLights.value=se.state.rectArea,Ke.ltc_1.value=se.state.rectAreaLTC1,Ke.ltc_2.value=se.state.rectAreaLTC2,Ke.pointLights.value=se.state.point,Ke.pointLightShadows.value=se.state.pointShadow,Ke.hemisphereLights.value=se.state.hemi,Ke.sunShadowMatrix.value=se.state.sunShadowMatrix,Ke.sunShadowCascade.value=se.state.sunShadowCascade,Ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ke.spotLightMatrix.value=se.state.spotLightMatrix,Ke.spotLightMap.value=se.state.spotLightMap,Ke.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=gt,ae.uniformsList=null,gt}function Dn(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=lu.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function ri(P,Y){const me=le.get(P);me.outputColorSpace=Y.outputColorSpace,me.batching=Y.batching,me.batchingColor=Y.batchingColor,me.instancing=Y.instancing,me.instancingColor=Y.instancingColor,me.instancingMorph=Y.instancingMorph,me.skinning=Y.skinning,me.morphTargets=Y.morphTargets,me.morphNormals=Y.morphNormals,me.morphColors=Y.morphColors,me.morphTargetsCount=Y.morphTargetsCount,me.numClippingPlanes=Y.numClippingPlanes,me.numIntersection=Y.numClipIntersection,me.vertexAlphas=Y.vertexAlphas,me.vertexTangents=Y.vertexTangents,me.toneMapping=Y.toneMapping}function jr(P,Y){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(Y.matrixWorld);for(let me=0,ae=P.length;me<ae;me++){const se=P[me];if(se.texture!==null&&se.boundingBox.containsPoint(b))return se}return null}function Kt(P,Y,me,ae,se){Y.isScene!==!0&&(Y=Bt),he.resetTextureUnits();const ke=Y.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,He=Z===null?z.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Jt.workingColorSpace,tt=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,st=Ee.get(ae.envMap||Ve,tt),Et=ae.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,gt=!!me.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ke=!!me.morphAttributes.position,Dt=!!me.morphAttributes.normal,hn=!!me.morphAttributes.color;let Zt=Wr;ae.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Zt=z.toneMapping);const $t=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,bn=$t!==void 0?$t.length:0,Ge=le.get(ae),pn=N.state.lights;if(pt===!0&&(Ft===!0||P!==K)){const Pt=P===K&&ae.id===J;Qe.setState(ae,P,Pt)}let h=!1;ae.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==pn.state.version||Ge.outputColorSpace!==He||se.isBatchedMesh&&Ge.batching===!1||!se.isBatchedMesh&&Ge.batching===!0||se.isBatchedMesh&&Ge.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Ge.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Ge.instancing===!1||!se.isInstancedMesh&&Ge.instancing===!0||se.isSkinnedMesh&&Ge.skinning===!1||!se.isSkinnedMesh&&Ge.skinning===!0||se.isInstancedMesh&&Ge.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ge.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ge.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ge.instancingMorph===!1&&se.morphTexture!==null||Ge.envMap!==st||ae.fog===!0&&Ge.fog!==ke||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Qe.numPlanes||Ge.numIntersection!==Qe.numIntersection)||Ge.vertexAlphas!==Et||Ge.vertexTangents!==gt||Ge.morphTargets!==Ke||Ge.morphNormals!==Dt||Ge.morphColors!==hn||Ge.toneMapping!==Zt||Ge.morphTargetsCount!==bn||!!Ge.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(h=!0):(h=!0,Ge.__version=ae.version);let B=Ge.currentProgram;h===!0&&(B=Nt(ae,Y,se),q&&ae.isNodeMaterial&&q.onUpdateProgram(ae,B,Ge));let ie=!1,ye=!1,qe=!1;const at=B.getUniforms(),At=Ge.uniforms;if(w.useProgram(B.program)&&(ie=!0,ye=!0,qe=!0),ae.id!==J&&(J=ae.id,ye=!0),Ge.needsLights){const Pt=jr(N.state.lightProbeGridArray,se);Ge.lightProbeGrid!==Pt&&(Ge.lightProbeGrid=Pt,ye=!0)}if(ie||K!==P){w.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),at.setValue(j,"projectionMatrix",P.projectionMatrix),at.setValue(j,"viewMatrix",P.matrixWorldInverse);const An=at.map.cameraPosition;An!==void 0&&An.setValue(j,jt.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&at.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&at.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),K!==P&&(K=P,ye=!0,qe=!0)}if(Ge.needsLights&&(pn.state.sunShadowMap.length>0&&at.setValue(j,"sunShadowMap",pn.state.sunShadowMap,he),pn.state.directionalShadowMap.length>0&&at.setValue(j,"directionalShadowMap",pn.state.directionalShadowMap,he),pn.state.spotShadowMap.length>0&&at.setValue(j,"spotShadowMap",pn.state.spotShadowMap,he),pn.state.pointShadowMap.length>0&&at.setValue(j,"pointShadowMap",pn.state.pointShadowMap,he)),se.isSkinnedMesh){at.setOptional(j,se,"bindMatrix"),at.setOptional(j,se,"bindMatrixInverse");const Pt=se.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),at.setValue(j,"boneTexture",Pt.boneTexture,he))}se.isBatchedMesh&&(at.setOptional(j,se,"batchingTexture"),at.setValue(j,"batchingTexture",se._matricesTexture,he),at.setOptional(j,se,"batchingIdTexture"),at.setValue(j,"batchingIdTexture",se._indirectTexture,he),at.setOptional(j,se,"batchingColorTexture"),se._colorsTexture!==null&&at.setValue(j,"batchingColorTexture",se._colorsTexture,he));const tn=me.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&X.update(se,me,B),(ye||Ge.receiveShadow!==se.receiveShadow)&&(Ge.receiveShadow=se.receiveShadow,at.setValue(j,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(At.envMapIntensity.value=Y.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=HE()),ye){if(at.setValue(j,"toneMappingExposure",z.toneMappingExposure),Ge.needsLights&&$r(At,qe),ke&&ae.fog===!0&&We.refreshFogUniforms(At,ke),We.refreshMaterialUniforms(At,ae,ge,de,N.state.transmissionRenderTarget[P.id]),Ge.needsLights&&Ge.lightProbeGrid){const Pt=Ge.lightProbeGrid;At.probesSH.value=Pt.texture,At.probesMin.value.copy(Pt.boundingBox.min),At.probesMax.value.copy(Pt.boundingBox.max),At.probesResolution.value.copy(Pt.resolution)}lu.upload(j,Dn(Ge),At,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(lu.upload(j,Dn(Ge),At,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&at.setValue(j,"center",se.center),at.setValue(j,"modelViewMatrix",se.modelViewMatrix),at.setValue(j,"normalMatrix",se.normalMatrix),at.setValue(j,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Pt=ae.uniformsGroups;for(let An=0,Wn=Pt.length;An<Wn;An++){const kn=Pt[An];Me.update(kn,B),Me.bind(kn,B)}}return B}function $r(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.sunLights.needsUpdate=Y,P.sunLightShadows.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function bi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(P,Y,me){const ae=le.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(P.texture).__webglTexture=Y,le.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:me,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){const me=le.get(P);me.__webglFramebuffer=Y,me.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,me=0){Z=P,fe=Y,oe=me;let ae=null,se=!1,ke=!1;if(P){const He=le.get(P);if(He.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(j.FRAMEBUFFER,He.__webglFramebuffer),O.copy(P.viewport),ce.copy(P.scissor),we=P.scissorTest,w.viewport(O),w.scissor(ce),w.setScissorTest(we),J=-1;return}else if(He.__webglFramebuffer===void 0)he.setupRenderTarget(P);else if(He.__hasExternalTextures)he.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Et=P.depthTexture;if(He.__boundDepthTexture!==Et){if(Et!==null&&le.has(Et)&&(P.width!==Et.image.width||P.height!==Et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(P)}}const tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ke=!0);const st=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(st[Y])?ae=st[Y][me]:ae=st[Y],se=!0):P.samples>0&&he.useMultisampledRTT(P)===!1?ae=le.get(P).__webglMultisampledFramebuffer:Array.isArray(st)?ae=st[me]:ae=st,O.copy(P.viewport),ce.copy(P.scissor),we=P.scissorTest}else O.copy(ze).multiplyScalar(ge).floor(),ce.copy(yt).multiplyScalar(ge).floor(),we=en;if(me!==0&&(ae=re),w.bindFramebuffer(j.FRAMEBUFFER,ae)&&w.drawBuffers(P,ae),w.viewport(O),w.scissor(ce),w.setScissorTest(we),se){const He=le.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,me)}else if(ke){const He=Y;for(let tt=0;tt<P.textures.length;tt++){const st=le.get(P.textures[tt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+tt,st.__webglTexture,me,He)}}else if(P!==null&&me!==0){const He=le.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,He.__webglTexture,me)}J=-1};function Zi(P){const Y=le.get(P);return(Y.__readFormat!==P.format||Y.__readType!==P.type)&&(Y.__readFormat=P.format,Y.__readType=P.type,Y.__formatReadable=F.textureFormatReadable(P.format),Y.__typeReadable=F.textureTypeReadable(P.type)),Y}this.readRenderTargetPixels=function(P,Y,me,ae,se,ke,Ve,He=0){if(!(P&&P.isWebGLRenderTarget)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(tt=tt[Ve]),tt){w.bindFramebuffer(j.FRAMEBUFFER,tt);try{const st=P.textures[He],Et=st.format,gt=st.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+He);const Ke=Zi(st);if(Ke.__formatReadable===!1){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-ae&&me>=0&&me<=P.height-se&&j.readPixels(Y,me,ae,se,Re.convert(Et),Re.convert(gt),ke)}finally{const st=Z!==null?le.get(Z).__webglFramebuffer:null;w.bindFramebuffer(j.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,Y,me,ae,se,ke,Ve,He=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(tt=tt[Ve]),tt)if(Y>=0&&Y<=P.width-ae&&me>=0&&me<=P.height-se){w.bindFramebuffer(j.FRAMEBUFFER,tt);const st=P.textures[He],Et=st.format,gt=st.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+He);const Ke=Zi(st);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Dt),j.bufferData(j.PIXEL_PACK_BUFFER,ke.byteLength,j.STREAM_READ),j.readPixels(Y,me,ae,se,Re.convert(Et),Re.convert(gt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const hn=Z!==null?le.get(Z).__webglFramebuffer:null;w.bindFramebuffer(j.FRAMEBUFFER,hn);const Zt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await sx(j,Zt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Dt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,ke),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Dt),j.deleteSync(Zt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,me=0){const ae=Math.pow(2,-me),se=Math.floor(P.image.width*ae),ke=Math.floor(P.image.height*ae),Ve=Y!==null?Y.x:0,He=Y!==null?Y.y:0;he.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,me,0,0,Ve,He,se,ke),w.unbindTexture()},this.copyTextureToTexture=function(P,Y,me=null,ae=null,se=0,ke=0){let Ve,He,tt,st,Et,gt,Ke,Dt,hn;const Zt=P.isCompressedTexture?P.mipmaps[ke]:P.image;if(me!==null)Ve=me.max.x-me.min.x,He=me.max.y-me.min.y,tt=me.isBox3?me.max.z-me.min.z:1,st=me.min.x,Et=me.min.y,gt=me.isBox3?me.min.z:0;else{const At=Math.pow(2,-se);Ve=Math.floor(Zt.width*At),He=Math.floor(Zt.height*At),P.isDataArrayTexture?tt=Zt.depth:P.isData3DTexture?tt=Math.floor(Zt.depth*At):tt=1,st=0,Et=0,gt=0}ae!==null?(Ke=ae.x,Dt=ae.y,hn=ae.z):(Ke=0,Dt=0,hn=0);const $t=Re.convert(Y.format),bn=Re.convert(Y.type);let Ge;Y.isData3DTexture?(he.setTexture3D(Y,0),Ge=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(he.setTexture2DArray(Y,0),Ge=j.TEXTURE_2D_ARRAY):(he.setTexture2D(Y,0),Ge=j.TEXTURE_2D),w.activeTexture(j.TEXTURE0),w.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),w.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),w.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const pn=w.getParameter(j.UNPACK_ROW_LENGTH),h=w.getParameter(j.UNPACK_IMAGE_HEIGHT),B=w.getParameter(j.UNPACK_SKIP_PIXELS),ie=w.getParameter(j.UNPACK_SKIP_ROWS),ye=w.getParameter(j.UNPACK_SKIP_IMAGES);w.pixelStorei(j.UNPACK_ROW_LENGTH,Zt.width),w.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Zt.height),w.pixelStorei(j.UNPACK_SKIP_PIXELS,st),w.pixelStorei(j.UNPACK_SKIP_ROWS,Et),w.pixelStorei(j.UNPACK_SKIP_IMAGES,gt);const qe=P.isDataArrayTexture||P.isData3DTexture,at=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const At=le.get(P),tn=le.get(Y),Pt=le.get(At.__renderTarget),An=le.get(tn.__renderTarget);w.bindFramebuffer(j.READ_FRAMEBUFFER,Pt.__webglFramebuffer),w.bindFramebuffer(j.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Wn=0;Wn<tt;Wn++)qe&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(P).__webglTexture,se,gt+Wn),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(Y).__webglTexture,ke,hn+Wn)),j.blitFramebuffer(st,Et,Ve,He,Ke,Dt,Ve,He,j.DEPTH_BUFFER_BIT,j.NEAREST);w.bindFramebuffer(j.READ_FRAMEBUFFER,null),w.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(se!==0||P.isRenderTargetTexture||le.has(P)){const At=le.get(P),tn=le.get(Y);w.bindFramebuffer(j.READ_FRAMEBUFFER,G),w.bindFramebuffer(j.DRAW_FRAMEBUFFER,ne);for(let Pt=0;Pt<tt;Pt++)qe?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,At.__webglTexture,se,gt+Pt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,At.__webglTexture,se),at?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,tn.__webglTexture,ke,hn+Pt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,tn.__webglTexture,ke),se!==0?j.blitFramebuffer(st,Et,Ve,He,Ke,Dt,Ve,He,j.COLOR_BUFFER_BIT,j.NEAREST):at?j.copyTexSubImage3D(Ge,ke,Ke,Dt,hn+Pt,st,Et,Ve,He):j.copyTexSubImage2D(Ge,ke,Ke,Dt,st,Et,Ve,He);w.bindFramebuffer(j.READ_FRAMEBUFFER,null),w.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else at?P.isDataTexture||P.isData3DTexture?j.texSubImage3D(Ge,ke,Ke,Dt,hn,Ve,He,tt,$t,bn,Zt.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Ge,ke,Ke,Dt,hn,Ve,He,tt,$t,Zt.data):j.texSubImage3D(Ge,ke,Ke,Dt,hn,Ve,He,tt,$t,bn,Zt):P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ke,Ke,Dt,Ve,He,$t,bn,Zt.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ke,Ke,Dt,Zt.width,Zt.height,$t,Zt.data):j.texSubImage2D(j.TEXTURE_2D,ke,Ke,Dt,Ve,He,$t,bn,Zt);w.pixelStorei(j.UNPACK_ROW_LENGTH,pn),w.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h),w.pixelStorei(j.UNPACK_SKIP_PIXELS,B),w.pixelStorei(j.UNPACK_SKIP_ROWS,ie),w.pixelStorei(j.UNPACK_SKIP_IMAGES,ye),ke===0&&Y.generateMipmaps&&j.generateMipmap(Ge),w.unbindTexture()},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&he.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?he.setTextureCube(P,0):P.isData3DTexture?he.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?he.setTexture2DArray(P,0):he.setTexture2D(P,0),w.unbindTexture()},this.resetState=function(){fe=0,oe=0,Z=null,w.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}}function WE(r,e,t,s=62206,o=16638023){for(;r.children.length>0;)r.remove(r.children[0]);for(;e.children.length>0;)e.remove(e.children[0]);const l={londonEyeWheel:null,eiffelBeacon:null,libertyTorchHalo:null,auroraMesh:null},u=new St({color:330518,fog:!1}),f=new St({color:s,fog:!1}),m=new St({color:o,fog:!1}),p=new St({color:16777215,fog:!1}),S=new St({color:62206,fog:!1}),y=new St({color:16638023,fog:!1}),_=new St({color:15680580,fog:!1}),M=(A,x,v,R,U,b,I,N=f)=>{const k=new Tt(x,v,R),T=new ve(k,u);T.position.set(U,b,I);const L=new co(k),z=new lo(L,new Hs({color:N.color,fog:!1}));return T.add(z),A.add(T),T},E=-28;if(t==="obelisco"){const A=new St({color:3718648,fog:!1}),x=M(r,5.2,68,5.2,-10,E+34,0,A),v=new Tt(1.1,66,5.4),R=new ve(v,p);x.add(R);const U=new wi(3.7,10,4);U.rotateY(Math.PI/4);const b=new ve(U,p);b.position.set(-10,E+73,0),r.add(b);const I=new Tt(36,1.4,3.2),N=new ve(I,A);N.position.set(14,E+12,2),r.add(N);const k=new on(.45,.9,42,10),T=new ve(k,p);T.position.set(12,E+28,2),T.rotation.z=-.46,r.add(T);for(let L=0;L<6;L++){const z=new on(.08,.08,24+L*2,6),H=new ve(z,A);H.position.set(16+L*2.2,E+21,2),H.rotation.z=.55+L*.06,r.add(H)}}else if(t==="cristo"){const A=new wi(28,44,7),x=new ve(A,u);x.position.set(0,E+14,0);const v=new lo(new co(A),new Hs({color:2278750,fog:!1}));x.add(v),r.add(x),M(r,7,10,7,0,E+39,0,y);const R=M(r,6.2,26,4.2,0,E+57,0,p),U=new ve(new Tt(3.8,25,4.4),new St({color:14742270,fog:!1}));R.add(U);const b=new Tt(32,3.2,3),I=new ve(b,p);I.position.set(0,E+64,0),r.add(I);const N=new ni(2.6,14,14),k=new ve(N,p);k.position.set(0,E+72.5,.5),r.add(k);const T=new wi(12,55,16,1,!0),L=new St({color:4906624,transparent:!0,opacity:.18,blending:Oi,side:Fi,depthWrite:!1,fog:!1}),z=new ve(T,L);z.position.set(-14,E+46,2),z.rotation.z=-.35,r.add(z);const H=new ve(T,L);H.position.set(14,E+46,2),H.rotation.z=.35,r.add(H)}else if(t==="liberty_empire"){M(r,11,20,11,-16,E+10,0,S),M(r,6.5,28,5.5,-16,E+34,0,S);const A=new ve(new ni(2.8,12,12),S);A.position.set(-16,E+50,0),r.add(A);for(let b=-3;b<=3;b++){const I=new ve(new wi(.35,3.6,6),S);I.position.set(-16+b*.9,E+53,0),I.rotation.z=-b*.22,r.add(I)}const x=new ve(new on(.7,.9,14,8),S);x.position.set(-12.5,E+54,0),x.rotation.z=-.25,r.add(x);const v=new ve(new ni(2.2,16,16),y);v.position.set(-10.8,E+62,0),r.add(v);const R=new ve(new ni(5.2,16,16),new St({color:16638023,transparent:!0,opacity:.42,blending:Oi,fog:!1}));R.position.copy(v.position),r.add(R),l.libertyTorchHalo=R,M(r,14,52,12,15,E+26,-2,S),M(r,9.5,18,9,15,E+61,-2,S),M(r,5.5,12,5.5,15,E+76,-2,y);const U=new ve(new on(.25,.9,24,10),p);U.position.set(15,E+94,-2),r.add(U)}else if(t==="eiffel"){const A=new St({color:16498468,fog:!1}),x=[[-11,-6],[11,-6],[-11,6],[11,6]];for(let k=0;k<x.length;k++){const[T,L]=x[k],z=new on(1.1,2.4,30,8),H=new ve(z,A);H.position.set(T*.72,E+14,L*.72),H.rotation.z=T<0?-.24:.24,r.add(H)}M(r,20,3.2,14,0,E+28,0,y),M(r,12,24,9,0,E+42,0,A),M(r,14,2.6,10,0,E+54,0,y);const v=new ve(new on(1.2,4.8,34,4,4,!0),new St({color:16638023,wireframe:!0,fog:!1}));v.position.set(0,E+72,0),v.rotation.y=Math.PI/4,r.add(v);const R=new nn;R.position.set(0,E+90,0);const U=new wi(9,75,16,1,!0);U.translate(0,-37.5,0),U.rotateZ(Math.PI/2);const b=new St({color:16707722,transparent:!0,opacity:.32,blending:Oi,side:Fi,depthWrite:!1,fog:!1}),I=new ve(U,b),N=new ve(U,b);N.rotation.y=Math.PI,R.add(I),R.add(N),r.add(R),l.eiffelBeacon=R}else if(t==="tokyotower"){const A=[{y:14,rBot:11,rTop:7,h:28,mat:_},{y:38,rBot:7,rTop:4.5,h:20,mat:p},{y:56,rBot:4.5,rTop:2.4,h:16,mat:_},{y:71,rBot:2.4,rTop:.8,h:14,mat:p},{y:84,rBot:.8,rTop:.2,h:14,mat:_}];for(let N=0;N<A.length;N++){const k=A[N],T=new on(k.rTop,k.rBot,k.h,4,2,!0),L=new ve(T,new St({color:k.mat.color,wireframe:!0,fog:!1}));L.position.set(0,E+k.y,0),L.rotation.y=Math.PI/4,r.add(L)}const x=new on(.24,.28,6.2,12),v=new ve(x,_);v.position.set(-2.5,3.1,2.2),e.add(v);const R=new ve(x,_);R.position.set(2.5,3.1,2.2),e.add(R);const U=new ve(new Tt(7.2,.42,.55),_);U.position.set(0,6.2,2.2),e.add(U);const b=new ve(new Tt(7.5,.16,.6),y);b.position.set(0,6.48,2.2),e.add(b);const I=new ve(new Tt(5.8,.28,.38),_);I.position.set(0,4.9,2.2),e.add(I)}else if(t==="pyramids"){const A=[{x:0,z:-4,r:26,h:48},{x:-24,z:4,r:19,h:36},{x:24,z:6,r:16,h:30}];for(let x=0;x<A.length;x++){const v=A[x],R=new wi(v.r,v.h,4);R.rotateY(Math.PI/4);const U=new ve(R,u);U.position.set(v.x,E+v.h*.5,v.z);const b=new co(R),I=new lo(b,new Hs({color:16638023,fog:!1}));U.add(I);const N=new wi(v.r*.22,v.h*.22,4);N.rotateY(Math.PI/4);const k=new ve(N,y);k.position.set(0,v.h*.39,0),U.add(k),r.add(U)}}else if(t==="londoneye"){M(r,7.5,54,7.5,-18,E+27,0,y),M(r,8.6,8.6,8.6,-18,E+58,0,y);const A=new ve(new on(3.2,3.2,.5,20),y);A.rotation.x=Math.PI/2,A.position.set(-18,E+58,4.4),r.add(A);const x=new ve(new wi(5.2,16,4),y);x.rotation.y=Math.PI/4,x.position.set(-18,E+70,0),r.add(x);const v=new nn;v.position.set(14,E+42,0);const R=new ve(new Gn(21,.65,12,48),S);v.add(R);for(let U=0;U<12;U++){const b=U/12*Math.PI*2,I=new ve(new on(.12,.12,42,6),S);I.rotation.z=b,v.add(I);const N=new ve(new ni(1.15,10,10),p);N.position.set(Math.cos(b)*21,Math.sin(b)*21,0),v.add(N)}r.add(v),l.londonEyeWheel=v}else if(t==="burjkhalifa"){const A=[{w:15,h:24,y:12},{w:12,h:24,y:36},{w:9,h:22,y:59},{w:6.2,h:22,y:81},{w:3.6,h:20,y:102},{w:1.5,h:24,y:124}];for(let x=0;x<A.length;x++){const v=A[x];M(r,v.w,v.h,v.w,0,E+v.y,0,S);const R=new ve(new Gn(v.w*.68,.32,10,28),x%2===0?S:y);R.rotation.x=Math.PI/2,R.position.set(0,E+v.y+v.h*.5,0),r.add(R)}}else if(t==="opera"){M(r,44,6,14,0,E+12,0,y);const A=[-14,-6,3,12];for(let R=0;R<A.length;R++){const U=A[R],b=22+R%2*8,I=new wi(6.5,b,4),N=new ve(I,p);N.position.set(U,E+15+b*.45,2),N.rotation.z=-.28;const k=new lo(new co(I),new Hs({color:62206,fog:!1}));N.add(k),r.add(N)}const x=new Gn(30,.85,10,36,Math.PI),v=new ve(x,S);v.position.set(0,E+14,-8),r.add(v)}else if(t==="stbasil"){const A=[{x:0,h:48,r:5.2,mat:_},{x:-12,h:36,r:4.2,mat:S},{x:12,h:36,r:4.2,mat:y},{x:-22,h:28,r:3.5,mat:y},{x:22,h:28,r:3.5,mat:S}];for(let x=0;x<A.length;x++){const v=A[x];M(r,v.r*1.4,v.h,v.r*1.4,v.x,E+v.h*.5,0,v.mat);const R=new ve(new ni(v.r,16,16),v.mat);R.scale.set(1,1.25,1),R.position.set(v.x,E+v.h+v.r*.8,0),r.add(R);const U=new ve(new wi(v.r*.45,7,8),y);U.position.set(v.x,E+v.h+v.r*2.1,0),r.add(U);const b=new ve(new xu(1.6,0),y);b.position.set(v.x,E+v.h+v.r*2.1+4.5,0),r.add(b)}}else if(t==="marinabay"){const A=[-16,0,16];for(let v=0;v<A.length;v++)M(r,7.5,58,7,A[v],E+29,0,S);const x=new ve(new Tt(46,3.8,10),y);x.position.set(2,E+60,0),r.add(x)}else if(t==="swiss_alps"){const A=new ve(new wi(24,65,5),u);A.position.set(-20,E+32,-4),A.add(new lo(new co(A.geometry),new Hs({color:3718648,fog:!1}))),r.add(A);const x=new ve(new wi(26,72,5),u);x.position.set(20,E+36,-4),x.add(new lo(new co(x.geometry),new Hs({color:4906624,fog:!1}))),r.add(x);const v=new wa(76,32,16,4),R=new St({color:4906624,transparent:!0,opacity:.28,blending:Oi,side:Fi,depthWrite:!1,fog:!1}),U=new ve(v,R);U.position.set(0,E+78,-8),r.add(U),l.auroraMesh=U}else{M(r,10,62,10,-16,E+31,0,f),M(r,10,62,10,16,E+31,0,f);const A=new ve(new ni(6.2,16,16),m);A.position.set(0,E+62,0),r.add(A);const x=M(r,5.5,78,5.5,0,E+39,0,m),v=new ve(new on(.25,.8,22,8),p);v.position.set(0,48,0),x.add(v);const R=new ve(new Tt(48,1.8,4),f);R.position.set(0,E+24,2),r.add(R)}return l}const Ws=.82;function eu(r=1976635,e=3718648,t=1.05){return new Lr({uniforms:{uBaseColor:{value:new Ht(r)},uRimColor:{value:new Ht(e)},uRimPower:{value:2.05},uRimStrength:{value:t}},vertexShader:`
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
    `})}function XE(){const r=document.createElement("canvas");r.width=256,r.height=512;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#020612"),t.addColorStop(.32,"#071630"),t.addColorStop(.62,"#0f2c56"),t.addColorStop(.84,"#154e7a"),t.addColorStop(1,"#040b18"),e.fillStyle=t,e.fillRect(0,0,256,512);const s=e.createRadialGradient(128,310,12,128,310,165);return s.addColorStop(0,"rgba(0, 242, 254, 0.42)"),s.addColorStop(.55,"rgba(14, 165, 233, 0.14)"),s.addColorStop(1,"rgba(2, 6, 18, 0.0)"),e.fillStyle=s,e.fillRect(0,0,256,512),new _u(r)}function qE(){const r=document.createElement("canvas");r.width=128,r.height=128;const e=r.getContext("2d");e.fillStyle="#64748b",e.fillRect(0,0,128,128),e.strokeStyle="#cbd5e1",e.lineWidth=6;for(let s=-128;s<256;s+=20)e.beginPath(),e.moveTo(s,0),e.lineTo(s+80,128),e.stroke();const t=new _u(r);return t.wrapS=Ma,t.wrapT=Ma,t.repeat.set(2,320),t}function jE(){const r=document.createElement("canvas");r.width=256,r.height=256;const e=r.getContext("2d");return e.fillStyle="#09111f",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=8,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.fillStyle="#fde047",e.font="bold 116px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,134),new _u(r)}function dg(r=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=r?"#061121":"#040914",t.fillRect(0,0,128,256);const s=8,o=24;for(let u=1;u<o;u++)for(let f=1;f<s;f++){const m=(u*17+f*31)%100;m<(r?28:42)&&(m<7?t.fillStyle="#00f2fe":m<18?t.fillStyle="#fef08a":t.fillStyle=r?"#1e3a5f":"#38bdf8",t.fillRect(f*14,u*10,7,5))}const l=new _u(e);return l.wrapS=Ma,l.wrapT=Ma,l.repeat.set(1,2),l}function $E(r){const e=r.clientWidth||420,t=r.clientHeight||780,s=new yx;s.background=new Ht(398118),s.fog=new Oh(664121,.011);const o=new Yi(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new GE({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=bh,l.toneMappingExposure=1.25,r.innerHTML="",r.appendChild(l.domElement);const u=new Gx(3718648,.9);s.add(u);const f=new Hx(62206,1.75);f.position.set(0,28,-65),s.add(f);const m=new z0(62206,3.8,22);m.position.set(0,1.35,0),s.add(m);const p=new z0(16638023,4.2,24);p.position.set(0,2.5,-.3),s.add(p);const S=XE(),y=new wa(340,220),_=new St({map:S,fog:!1,depthWrite:!1}),M=new ve(y,_);M.position.set(0,12,-210),s.add(M);const E=1800,A=qE(),x=new on(.042,.042,E,16);x.rotateX(Math.PI/2);const v=new Af({color:13358561,map:A,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),R=new ve(x,v);R.position.set(0,0,-E*.5+12),s.add(R);const U=new on(.015,.015,E,8);U.rotateX(Math.PI/2);const b=new St({color:62206,transparent:!0,opacity:.72}),I=new ve(U,b);I.position.set(0,.022,-E*.5+12),s.add(I);const N=new Af({color:330002,roughness:.8,metalness:.2}),k=new Tt(7.2,60,7),T=new ve(k,N);T.position.set(0,-30.045,3.5),s.add(T);const L=new nn,z=new Tt(9.2,70,9.2),H=new ve(z,N);H.position.set(0,-35.045,0),L.add(H);const q=jE(),re=new wa(7,7);re.rotateX(-Math.PI/2);const G=new St({map:q}),ne=new ve(re,G);ne.position.set(0,.01,0),L.add(ne);const fe=new Gn(3.4,.075,12,36);fe.rotateX(Math.PI/2);const oe=new St({color:62206}),Z=new ve(fe,oe);Z.position.set(0,.12,0),L.add(Z);const J=new nn;L.add(J),L.position.set(0,0,-100),s.add(L);const K=new nn;K.position.set(0,0,-135),s.add(K);const O=dg(!1),ce=dg(!0),we=new Af({color:464166,map:O,emissive:959977,emissiveMap:O,emissiveIntensity:.58,roughness:.5,metalness:.4}),Be=new St({color:729657,map:ce}),Xe=new St({color:1128020}),Ye=new St({color:62206,transparent:!0,opacity:.35}),de=[];for(let je=0;je<44;je++){const Ut=je%2===0,Yt=je%3,mn=Math.floor(je/2),ai=6.5+je%4*2.1+Yt*2.2,Sn=6.5+je*3%4*1.8,Xn=72+je*13%42+Yt*16,Ai=new Tt(ai,Xn,Sn),zn=Yt===0?we:Yt===1?Be:Xe,gr=new ve(Ai,zn),tr=Yt===0?12.2+je%3*2.8:Yt===1?21.5+je%3*4.2:32+je%4*5,Js=(Ut?-1:1)*tr,vr=10-mn*13,Qs=-60+Xn*.5;if(gr.position.set(Js,Qs,vr),Yt===0){const nr=new Tt(.12,Xn,.12),ir=new ve(nr,Ye);ir.position.set(Ut?ai*.5+.04:-ai*.5-.04,0,Sn*.5),gr.add(ir)}s.add(gr),de.push(gr)}const ge=[],Ae=new wi(5.5,115,20,1,!0);for(let je=0;je<10;je++){const Ut=je%2===0,Yt=new St({color:je%3===0?62206:959977,transparent:!0,opacity:je%3===0?.11:.075,side:Fi,depthWrite:!1,blending:Oi}),mn=new ve(Ae,Yt),ai=(Ut?-1:1)*(8.5+je%3*4.5),Sn=-18-je*24;mn.position.set(ai,8,Sn),mn.rotation.z=(Ut?-1:1)*.24,s.add(mn),ge.push({mesh:mn,mat:Yt,baseAngle:(Ut?-1:1)*.24,speed:.45+je%4*.18,phaseOffset:je*1.1})}const it=[],ze=new Tt(.4,.18,2.2),yt=new St({color:62206}),en=new St({color:15680580});for(let je=0;je<20;je++){const Ut=je%2===0,Yt=new ve(ze,Ut?en:yt),mn=(je%4-1.5)*2.1;Yt.position.set(mn,-36,-je*12),s.add(Yt),it.push({mesh:Yt,speed:(Ut?-1:1)*(15+je%4*3.5)})}const ht=220,pt=new Float32Array(ht*3);for(let je=0;je<ht;je++)pt[je*3+0]=(Math.random()-.5)*28,pt[je*3+1]=-6+Math.random()*20,pt[je*3+2]=6-Math.random()*55;const Ft=new $n;Ft.setAttribute("position",new Pr(pt,3));const Mt=new Vg({color:62206,size:.14,transparent:!0,opacity:.65,blending:Oi,depthWrite:!1}),jt=new Lx(Ft,Mt);s.add(jt);const Lt=new nn;Lt.position.set(0,0,0),s.add(Lt);const Bt=eu(1976635,3718648,1.05),Ct=eu(988970,3718648,.95),rn=eu(4674921,3718648,1.15),j=eu(1976635,3718648,1.1),Gt=new St({color:9741240}),kt=new St({color:3359061}),F=new St({color:3718648}),w=new St({color:3718648}),ee=new St({color:3718648,side:Fi}),le=new St({color:3718648,transparent:!0,opacity:.85}),he=new St({color:16777215}),Ee=new St({color:62206}),De=new St({color:12616956}),xe=new St({color:15857145}),Se=new St({color:16711765}),Ne=new St({color:15680580}),We=new St({color:16498468}),Le=new St({color:527122}),Ie=je=>{const Ut=new nn;Ut.position.set(je?-.08:.08,.88,0);const Yt=new va(.064,.34,10,18),mn=new ve(Yt,Ct);mn.position.set(je?.018:-.018,-.19,0),mn.rotation.z=je?.05:-.05,Ut.add(mn);const ai=new Tt(.03,.12,.075),Sn=new ve(ai,Bt);Sn.position.set(je?-.055:.055,-.18,0),Ut.add(Sn);const Xn=new Tt(.018,.28,.032),Ai=new ve(Xn,he);Ai.position.set(je?-.062:.062,-.19,.01),Ai.visible=!1,Ut.add(Ai);const zn=new nn;zn.position.set(je?.035:-.035,-.41,0),Ut.add(zn);const gr=new Gn(.062,.014,10,20);gr.rotateX(Math.PI/2);const tr=new ve(gr,Ee);tr.position.set(je?.01:-.01,-.02,0),tr.visible=!1,zn.add(tr);const Js=new va(.05,.34,10,18),vr=new ve(Js,Ct);vr.position.set(je?.02:-.02,-.2,0),vr.rotation.z=je?.04:-.04,zn.add(vr);const Qs=new Tt(.018,.25,.028),nr=new ve(Qs,he);nr.position.set(je?-.042:.042,-.2,.015),nr.visible=!1,zn.add(nr);const ir=new nn;ir.position.set(je?.035:-.035,-.43,0),zn.add(ir);const bo=new va(.045,.14,8,14);bo.rotateX(Math.PI/2);const Ao=new ve(bo,rn);Ao.position.set(0,-.005,-.025),ir.add(Ao);const Al=new Tt(.095,.026,.22),Ro=new ve(Al,Gt);Ro.position.set(0,-.038,-.025),ir.add(Ro);const Rl=new Tt(.098,.032,.045),_r=new ve(Rl,Ee);_r.position.set(0,-.01,.068),_r.visible=!1,ir.add(_r);const Cl=new on(.024,.036,.06,12);Cl.rotateX(Math.PI/2);const Na=new ve(Cl,Ne);return Na.position.set(0,.01,.085),Na.visible=!1,ir.add(Na),{hipGroup:Ut,kneeGroup:zn,bootGroup:ir,cargoPocketMesh:Sn,thighReflectiveMesh:Ai,calfReflectiveMesh:nr,tacticalKneeNeon:tr,tacticalHeelNeon:_r,shinobiBootThruster:Na}},Qe=Ie(!0),Fe=Ie(!1);Lt.add(Qe.hipGroup),Lt.add(Fe.hipGroup);const ft=new nn;Lt.add(ft);const X=new on(.135,.12,.15,18);X.scale(1.15,1,.72);const Oe=new ve(X,Ct);Oe.position.set(0,.89,0),ft.add(Oe);const W=new nn;W.position.set(0,.95,0),ft.add(W);const Re=new on(.165,.125,.24,18);Re.scale(1.18,1,.68);const Ce=new ve(Re,Bt);Ce.position.set(0,.12,0),W.add(Ce);const Me=new on(.215,.162,.28,20);Me.scale(1.24,1,.68);const et=new ve(Me,Bt);et.position.set(0,.35,0),W.add(et);const Ze=new Tt(.042,.38,.026),wt=new ve(Ze,le);wt.position.set(0,.26,.135),W.add(wt);const mt=new nn,ct=new ni(.135,16,14);ct.scale(1.15,.68,.95);const nt=new ve(ct,Bt);nt.position.set(0,.5,.095),mt.add(nt);const Mn=new Gn(.13,.014,10,24);Mn.rotateX(Math.PI*.42);const _n=new ve(Mn,le);_n.position.set(0,.52,.09),mt.add(_n),W.add(mt);const sn=new nn;sn.visible=!1;const Pn=new ve(new Tt(.42,.032,.026),he);Pn.position.set(0,.4,.145),sn.add(Pn);const Bi=new ve(new Tt(.32,.028,.026),he);Bi.position.set(0,.16,.135),sn.add(Bi);const xt=new ve(new Tt(.032,.36,.026),he);xt.position.set(-.11,.28,.142),sn.add(xt);const zi=new ve(new Tt(.032,.36,.026),he);zi.position.set(.11,.28,.142),sn.add(zi),W.add(sn);const fn=new nn;fn.visible=!1;const ui=new Tt(.042,.48,.028),Ti=new ve(ui,Ee);Ti.position.set(0,.28,.148),Ti.rotation.z=.64,fn.add(Ti);const En=new ve(ui,Ee);En.position.set(0,.28,.148),En.rotation.z=-.64,fn.add(En);const Fn=new ve(new on(.055,.055,.032,6),Ee);Fn.rotation.x=Math.PI/2,Fn.position.set(0,.28,.155),fn.add(Fn);const Zn=new Tt(.14,.065,.18),Nt=new ve(Zn,Le);Nt.position.set(-.27,.48,0),Nt.rotation.z=.22;const Dn=new ve(new Tt(.15,.018,.19),Ee);Dn.position.set(0,.028,0),Nt.add(Dn),fn.add(Nt);const ri=new ve(Zn,Le);ri.position.set(.27,.48,0),ri.rotation.z=-.22;const jr=new ve(new Tt(.15,.018,.19),Ee);jr.position.set(0,.028,0),ri.add(jr),fn.add(ri),W.add(fn);const Kt=new nn;Kt.visible=!1;const $r=new Gn(.13,.018,8,4),bi=new ve($r,De);bi.position.set(0,.3,.148),Kt.add(bi);const Zi=new ve(new Gn(.065,.014,8,4),xe);Zi.position.set(0,.3,.152),Kt.add(Zi);const P=new ve(new Tt(.025,.42,.03),xe);P.position.set(-.16,.27,.138),P.rotation.z=-.12,Kt.add(P);const Y=new ve(new Tt(.025,.42,.03),xe);Y.position.set(.16,.27,.138),Y.rotation.z=.12,Kt.add(Y);const me=new ve(new Gn(.135,.016,10,24),xe);me.rotateX(Math.PI/2),me.position.set(0,.49,.01),Kt.add(me),W.add(Kt);const ae=new nn;ae.visible=!1;const se=new ve(new Tt(.036,.4,.028),Se);se.position.set(0,.27,.146),ae.add(se);for(let je=0;je<4;je++){const Ut=je%2===0?-1:1,Yt=je<2?.36:.21,mn=new ve(new Tt(.14,.022,.026),Se);mn.position.set(Ut*.08,Yt,.146),mn.rotation.z=Ut*.38,ae.add(mn)}const ke=new nn;ke.position.set(.02,.31,.172),ke.rotation.z=-.68;const Ve=new ve(new on(.018,.015,.66,12),Le);Ve.position.set(0,-.06,0),ke.add(Ve);const He=new ve(new Tt(.012,.64,.038),Se);He.position.set(0,-.06,0),ke.add(He);const tt=new ve(new on(.052,.052,.016,16),We);tt.position.set(0,.27,0),ke.add(tt);const st=new ve(new on(.02,.02,.22,12),Ne);st.position.set(0,.39,0),ke.add(st);const Et=new ve(new on(.025,.025,.028,12),We);Et.position.set(0,.51,0),ke.add(Et),ae.add(ke),W.add(ae);const gt=new nn;gt.visible=!1;for(let je=0;je<3;je++){const Ut=new ve(new Tt(.24-je*.03,.055,.03),We);Ut.position.set(0,.39-je*.1,.145),gt.add(Ut)}const Ke=new Tt(.16,.14,.2),Dt=new ve(Ke,Le);Dt.position.set(-.285,.45,0),Dt.rotation.z=.28;const hn=new ve(new Tt(.17,.024,.21),We);hn.position.set(0,.06,0),Dt.add(hn),gt.add(Dt);const Zt=new ve(Ke,Le);Zt.position.set(.285,.45,0),Zt.rotation.z=-.28;const $t=new ve(new Tt(.17,.024,.21),We);$t.position.set(0,.06,0),Zt.add($t),gt.add(Zt);const bn=(je,Ut)=>{const Yt=new nn;Yt.position.set(0,.3,Ut),Yt.rotation.z=je;const mn=new ve(new on(.018,.015,.68,12),Le);mn.position.set(0,-.06,0),Yt.add(mn);const ai=new ve(new Tt(.012,.65,.038),We);ai.position.set(0,-.06,0),Yt.add(ai);const Sn=new ve(new on(.054,.054,.018,16),We);Sn.position.set(0,.28,0),Yt.add(Sn);const Xn=new ve(new on(.021,.021,.23,12),We);return Xn.position.set(0,.4,0),Yt.add(Xn),Yt};gt.add(bn(-.62,.172)),gt.add(bn(.62,.192)),W.add(gt);const Ge=new nn;Ge.visible=!1;const pn=new ve(new xu(.085,1),Ee);pn.position.set(0,.3,.165),Ge.add(pn);const h=new ve(new Gn(.13,.014,10,28),he);h.position.set(0,.3,.165),Ge.add(h);const B=new ve(new Gn(.38,.014,10,36),Ee);B.position.set(0,.28,0),B.rotation.x=Math.PI*.35,Ge.add(B);const ie=new ve(new Gn(.42,.012,10,36),he);ie.position.set(0,.28,0),ie.rotation.y=Math.PI*.25,Ge.add(ie),W.add(Ge);const ye=new nn;ye.visible=!1;const qe=new ve(new Gn(.34,.02,12,36),We);qe.position.set(0,.32,.16),ye.add(qe);const at=new nn;at.position.set(0,.3,0);const At=new ni(.026,8,8);for(let je=0;je<8;je++){const Ut=je/8*Math.PI*2,Yt=new ve(At,We);Yt.position.set(Math.cos(Ut)*.42,Math.sin(Ut*2)*.18,Math.sin(Ut)*.32),at.add(Yt)}ye.add(at),W.add(ye);const tn=new ni(.078,16,16),Pt=new ve(tn,Bt);Pt.position.set(-.255,.45,0),W.add(Pt);const An=new ve(tn,Bt);An.position.set(.255,.45,0),W.add(An);const Wn=new on(.05,.06,.1,14),kn=new ve(Wn,Bt);kn.position.set(0,.54,0),W.add(kn);const Wt=new nn;Wt.position.set(0,.67,0),W.add(Wt);const un=new ni(.118,24,24);un.scale(.95,1.06,1.02);const Bn=new ve(un,j);Wt.add(Bn);const Ji=new Gn(.116,.018,12,28);Ji.rotateX(Math.PI/2);const xi=new ve(Ji,w);xi.position.set(0,.025,0),Wt.add(xi);const Nr=new on(.124,.124,.045,20,1,!0,Math.PI*.55,Math.PI*.9),Yr=new ve(Nr,Ee);Yr.position.set(0,.02,0),Yr.visible=!1,Wt.add(Yr);const Vi=new ve(new Gn(.14,.015,10,28),We);Vi.rotateX(Math.PI/2),Vi.position.set(0,.16,0),Vi.visible=!1,Wt.add(Vi);const Kr=new nn;Kr.position.set(0,.022,.118),Wt.add(Kr);const qs=new Tt(.18,.032,.01);qs.translate(.09,0,0);const Zr=new ve(qs,ee);Kr.add(Zr);const Jr=new nn;Jr.position.set(.175,0,0),Zr.add(Jr);const Aa=new Tt(.18,.028,.009);Aa.translate(.09,0,0);const hr=new ve(Aa,ee);Jr.add(hr);const Qi=new nn;Qi.position.set(.175,0,0),hr.add(Qi);const pr=new Tt(.17,.022,.008);pr.translate(.085,0,0);const _s=new ve(pr,ee);Qi.add(_s);const Ra=je=>{const Ut=new nn;Ut.position.set(je?-.255:.255,.44,0);const Yt=new va(.048,.22,10,16),mn=new ve(Yt,Bt);mn.position.set(je?-.08:.08,-.11,-.02),mn.rotation.z=je?-.56:.56,Ut.add(mn);const ai=new Tt(.02,.19,.028),Sn=new ve(ai,he);Sn.position.set(je?-.095:.095,-.11,.025),Sn.rotation.z=je?-.56:.56,Sn.visible=!1,Ut.add(Sn);const Xn=new nn;Xn.position.set(je?-.16:.16,-.21,-.04),Ut.add(Xn);const Ai=new va(.042,.21,10,16),zn=new ve(Ai,Bt);zn.position.set(je?-.07:.07,-.04,-.09),zn.rotation.x=.72,zn.rotation.z=je?-.45:.45,Xn.add(zn);const gr=new Gn(.046,.013,10,20),tr=new ve(gr,F);tr.position.set(je?-.12:.12,-.07,-.155),Xn.add(tr);const Js=new ni(.052,14,14),vr=new ve(Js,kt);return vr.position.set(je?-.14:.14,-.08,-.18),Xn.add(vr),{shoulderGroup:Ut,elbowGroup:Xn,handMesh:vr,wristMesh:tr,sleeveReflectiveMesh:Sn}},js=Ra(!0),xs=Ra(!1);W.add(js.shoulderGroup),W.add(xs.shoulderGroup);const si=new nn;si.position.set(0,.17,-.2),W.add(si);const Hi=4,$s=new on(.018,.018,Hi,16);$s.rotateZ(Math.PI/2);const Gi=new St({color:14742270}),Ys=new ve($s,Gi);si.add(Ys);const Qr=new on(.052,.052,Hi,14);Qr.rotateZ(Math.PI/2);const Vt=new St({color:62206,transparent:!0,opacity:.42,blending:Oi,depthWrite:!1}),gn=new ve(Qr,Vt);si.add(gn);const Si=new ni(.058,14,14),mr=new St({color:62206}),xn=new ve(Si,mr);xn.position.set(-Hi*.5,0,0),si.add(xn);const er=new ve(Si,mr);er.position.set(Hi*.5,0,0),si.add(er);const Ca=new Gn(.14,.015,10,24),Ir=new ve(Ca,mr);Ir.position.set(-Hi*.5,0,0),Ir.visible=!1,si.add(Ir);const Pa=new ve(Ca,mr);Pa.position.set(Hi*.5,0,0),Pa.visible=!1,si.add(Pa);const wo=new Float32Array(6),Ks=new $n;Ks.setAttribute("position",new Pr(wo,3));const Zs=new Hs({color:62206,linewidth:3}),Ss=new zg(Ks,Zs);Ss.visible=!1,s.add(Ss);const Sl=new on(.04,.04,1,10),Mu=new St({color:62206,transparent:!0,opacity:.85,blending:Oi,depthWrite:!1}),To=new ve(Sl,Mu);To.visible=!1,s.add(To);const yl=new Gn(.14,.012,10,28),La=new St({color:62206,transparent:!0,opacity:.55,blending:Oi}),Ml=new St({color:62206,transparent:!0,opacity:.55,blending:Oi}),El=new ve(yl,La),wl=new ve(yl,Ml);s.add(El),s.add(wl);const Eu=new ni(.12,24,24),wu=new ni(.24,16,16),Tl=new ni(.072,12,12),Tu=new St({color:16710083}),bu=new St({color:16638023,transparent:!0,opacity:.52,blending:Oi,depthWrite:!1}),bl=[];for(let je=0;je<4;je++){const Ut=new nn,Yt=new ve(Eu,Tu),mn=new ve(wu,bu);Ut.add(Yt),Ut.add(mn),s.add(Ut);const ai=[];for(let Sn=0;Sn<7;Sn++){const Xn=new St({color:Sn<3?16638023:16096779,transparent:!0,opacity:.68-Sn*.085,blending:Oi,depthWrite:!1}),Ai=new ve(Tl,Xn),zn=1-Sn*.12;Ai.scale.set(zn,zn,zn),s.add(Ai),ai.push(Ai)}bl.push({group:Ut,core:Yt,halo:mn,trails:ai})}return{scene:s,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:m,goldOrbLight:p,backlitBackdrop:M,cableTex:A,arrivalGroup:L,arrivalToriiGroup:J,beaconRingMesh:Z,landmarkGroup:K,landmarkAnimRefs:{},activeLandmarkKey:"",skyscrapers:de,spotlightBeams:ge,carMeshes:it,weatherPoints:jt,weatherGeo:Ft,weatherMat:Mt,weatherCount:ht,acrobatGroup:Lt,jacketMat:Bt,pantsMat:Ct,bootMat:rn,headMat:j,soleMat:Gt,gloveMat:kt,wristBandMat:F,headbandMat:w,ribbonMat:ee,dorsalStripMat:le,urbanoAccGroup:mt,nightRunnerAccGroup:sn,infiltradoAccGroup:fn,ilusionistaAccGroup:Kt,shinobiAccGroup:ae,roninGoldAccGroup:gt,quantumSpecterAccGroup:Ge,quantumCoreMesh:pn,quantumHoloRingA:B,quantumHoloRingB:ie,goldenLegendAccGroup:ye,solarAuraRing:qe,solarParticlesGroup:at,tacticalVisorMesh:Yr,goldenCrownHalo:Vi,poleCoreMat:Gi,poleLaserGlowMat:Vt,poleTipMat:mr,poleGlowMesh:gn,leftGyroRing:Ir,rightGyroRing:Pa,upperBodyGroup:ft,torsoSpineGroup:W,headGroup:Wt,leftLeg:Qe,rightLeg:Fe,leftArm:js,rightArm:xs,poleGroup:si,ribbonPivot:Kr,ribbonJoint2:Jr,ribbonJoint3:Qi,grappleLaserLine:Ss,grappleLineGeo:Ks,grappleBeamMesh:To,leftReceiverRing:El,rightReceiverRing:wl,leftReceiverMat:La,rightReceiverMat:Ml,orbMeshes:bl,worldLeftHand:new te,worldRightHand:new te,grappleAnchor:new te,lastTimeSec:0,smoothKneeFlex:0,smoothHipX:0,edgeSaveBlend:0,smoothTorsoComp:0,smoothNeckComp:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38}}function YE(r,e,t,s="menu",o="urbano",l="home"){var et,Ze,wt,mt;if(!r||!e)return;const u=Math.min(.05,Math.max(.001,t-(r.lastTimeSec||t-.016)));r.lastTimeSec=t;const f=-(e.distance||0),m=e.angle||0,p=Math.abs(m),S=Math.min(1,p/Ws),y=((et=e.cfg)==null?void 0:et.walkSpeed)||1,_=!!e.frenzyActive,M=mg(o||((Ze=e.skinObj)==null?void 0:Ze.id)),E=M.styleType,A=_?16638023:M.rimHex,x=_?1.75:M.rimStrength;r.jacketMat.uniforms.uBaseColor.value.setHex(M.jacketHex),r.jacketMat.uniforms.uRimColor.value.setHex(A),r.jacketMat.uniforms.uRimStrength.value=x,r.pantsMat.uniforms.uBaseColor.value.setHex(M.pantsHex),r.pantsMat.uniforms.uRimColor.value.setHex(A),r.pantsMat.uniforms.uRimStrength.value=x*.9,r.bootMat.uniforms.uBaseColor.value.setHex(M.bootHex),r.bootMat.uniforms.uRimColor.value.setHex(A),r.bootMat.uniforms.uRimStrength.value=x*1.1,r.headMat.uniforms.uBaseColor.value.setHex(M.headHex),r.headMat.uniforms.uRimColor.value.setHex(A),r.headMat.uniforms.uRimStrength.value=x,r.soleMat.color.setHex(M.soleHex),r.gloveMat.color.setHex(M.gloveHex),r.wristBandMat.color.setHex(M.wristHex),r.headbandMat.color.setHex(M.headbandHex),r.ribbonMat.color.setHex(_?16638023:M.ribbonHex),r.dorsalStripMat.color.setHex(_?16638023:M.dorsalHex);const v=E==="shinobi"||E==="immortal_legend"?1.48:E==="ilusionista"||E==="ronin_gold"?1.32:1;r.ribbonPivot.scale.set(v,1,1);const R=E==="urbano",U=E==="night_runner",b=E==="infiltrado",I=E==="ilusionista",N=E==="shinobi",k=E==="ronin_gold",T=E==="quantum_specter",L=E==="immortal_legend"||E==="leyenda_dorada";r.urbanoAccGroup.visible=R,r.leftLeg.cargoPocketMesh.visible=R,r.rightLeg.cargoPocketMesh.visible=R,r.nightRunnerAccGroup.visible=U,r.leftArm.sleeveReflectiveMesh.visible=U,r.rightArm.sleeveReflectiveMesh.visible=U,r.leftLeg.thighReflectiveMesh.visible=U,r.rightLeg.thighReflectiveMesh.visible=U,r.leftLeg.calfReflectiveMesh.visible=U,r.rightLeg.calfReflectiveMesh.visible=U,r.infiltradoAccGroup.visible=b,r.tacticalVisorMesh.visible=b||T,r.leftLeg.tacticalKneeNeon.visible=b||T,r.rightLeg.tacticalKneeNeon.visible=b||T,r.leftLeg.tacticalHeelNeon.visible=b||T,r.rightLeg.tacticalHeelNeon.visible=b||T,r.ilusionistaAccGroup.visible=I,r.shinobiAccGroup.visible=N,r.leftLeg.shinobiBootThruster.visible=N,r.rightLeg.shinobiBootThruster.visible=N,r.roninGoldAccGroup.visible=k,r.quantumSpecterAccGroup.visible=T,T&&(r.quantumCoreMesh&&(r.quantumCoreMesh.rotation.y=t*2.8,r.quantumCoreMesh.rotation.z=t*1.9),r.quantumHoloRingA&&(r.quantumHoloRingA.rotation.z=t*1.6,r.quantumHoloRingA.rotation.x=Math.PI*.35+Math.sin(t*2.1)*.22),r.quantumHoloRingB&&(r.quantumHoloRingB.rotation.x=-t*1.4,r.quantumHoloRingB.rotation.y=Math.PI*.25+Math.cos(t*1.8)*.25)),r.goldenLegendAccGroup.visible=L,r.goldenCrownHalo.visible=L,L&&(r.solarAuraRing&&(r.solarAuraRing.rotation.z=t*2.1),r.solarParticlesGroup&&(r.solarParticlesGroup.rotation.y=t*2.4,r.solarParticlesGroup.rotation.z=Math.sin(t*1.5)*.25));const z=((wt=e.cfg)==null?void 0:wt.city)||hs[0],H=e.targetDistance||68,q=`${z.id||z.index}_${z.monument}_${H}`;if(r.activeLandmarkKey!==q){r.activeLandmarkKey=q;const ct=z.weatherArchetype||"urban";ct==="cyber_rain"?(r.scene.background.setHex(395550),r.scene.fog.color.setHex(923714),r.weatherMat.color.setHex(62206),r.weatherMat.size=.16):ct==="golden_embers"?(r.scene.background.setHex(1181976),r.scene.fog.color.setHex(2627372),r.weatherMat.color.setHex(16638023),r.weatherMat.size=.18):ct==="blizzard"?(r.scene.background.setHex(398118),r.scene.fog.color.setHex(1059918),r.weatherMat.color.setHex(14742270),r.weatherMat.size=.2):(r.scene.background.setHex(332068),r.scene.fog.color.setHex(664121),r.weatherMat.color.setHex(3718648),r.weatherMat.size=.14);const nt=z.accentColor?parseInt(z.accentColor.replace("#",""),16):62206,Mn=z.winColor?parseInt(z.winColor.replace("#",""),16):16638023;r.landmarkAnimRefs=WE(r.landmarkGroup,r.arrivalToriiGroup,z.monument||"obelisco",nt,Mn)}if(r.landmarkGroup.position.set(0,0,-H-35),r.landmarkAnimRefs){if(r.landmarkAnimRefs.londonEyeWheel&&(r.landmarkAnimRefs.londonEyeWheel.rotation.z+=u*.22),r.landmarkAnimRefs.eiffelBeacon&&(r.landmarkAnimRefs.eiffelBeacon.rotation.y+=u*1.4),r.landmarkAnimRefs.libertyTorchHalo){const ct=1+Math.sin(t*6)*.18;r.landmarkAnimRefs.libertyTorchHalo.scale.set(ct,ct,ct)}r.landmarkAnimRefs.auroraMesh&&(r.landmarkAnimRefs.auroraMesh.position.x=Math.sin(t*.9)*4.5)}const re=r.weatherGeo.attributes.position,G=re.array,ne=z.weatherArchetype||"urban",fe=(e.windForce||0)*(ne==="blizzard"?14:9.5),oe=ne==="cyber_rain"?-24:ne==="blizzard"?-6.5:ne==="golden_embers"?2.2:-1.8;for(let ct=0;ct<r.weatherCount;ct++){const nt=ct*3;G[nt+0]+=fe*u,G[nt+1]+=oe*u,G[nt+0]>15?G[nt+0]-=30:G[nt+0]<-15&&(G[nt+0]+=30),oe<0&&G[nt+1]<-8?G[nt+1]=14:oe>0&&G[nt+1]>14&&(G[nt+1]=-8),G[nt+2]>f+8?G[nt+2]-=56:G[nt+2]<f-50&&(G[nt+2]+=56)}re.needsUpdate=!0;const Z=e.poleObj||{},J=Z.poleScaleX||1;r.poleGroup.scale.set(J,1,1),r.poleCoreMat.color.setHex(Z.coreHex||14742270),r.poleLaserGlowMat.color.setHex(_?16638023:Z.glowHex||62206),r.poleTipMat.color.setHex(Z.tipHex||62206),r.poleLaserGlowMat.opacity=_?.85:.48;const K=_?1.45:1;r.poleGlowMesh.scale.set(1,K,K);const O=!!Z.hasGyroRings;r.leftGyroRing.visible=O,r.rightGyroRing.visible=O,O&&(r.leftGyroRing.rotation.x=t*7.5,r.leftGyroRing.rotation.y=t*5.2,r.rightGyroRing.rotation.x=-t*7.5,r.rightGyroRing.rotation.y=-t*5.2);const ce=Math.min(1,u*11),we=Math.min(1,u*7.5),Be=e.fallSequence||{active:!1},Xe=S*.56+(Be.active?.22:0);r.smoothKneeFlex+=(Xe-r.smoothKneeFlex)*ce;const Ye=-Math.sin(m)*.25;r.smoothHipX+=(Ye-r.smoothHipX)*ce;const ge=p>Ws*.75||Be.active?1:0;r.edgeSaveBlend+=(ge-r.edgeSaveBlend)*ce;const Ae=-m*.38-Math.sin(m)*.16*(1+r.edgeSaveBlend*.45),it=-m*.32;r.smoothTorsoComp+=(Ae-r.smoothTorsoComp)*we,r.smoothNeckComp+=(it-r.smoothNeckComp)*we;const ze=s==="menu"&&l==="skins";Be.active?(r.acrobatGroup.position.set(Math.sin(m)*.85,Be.fallY||0,f),r.acrobatGroup.rotation.z=-(Be.fallRotZ||m),r.acrobatGroup.rotation.x=Be.fallRotX||0,r.acrobatGroup.rotation.y=0):(r.acrobatGroup.position.set(0,0,f),r.acrobatGroup.rotation.z=-m*.72,r.acrobatGroup.rotation.x=0,r.acrobatGroup.rotation.y=ze?Math.sin(t*1.15)*.65:0);const yt=s==="playing"&&!Be.active,en=e.walkCycle||0,ht=Math.sin(en),pt=Math.cos(en),Ft=yt?Math.min(.56,.34*Math.pow(y,.45)):.12,Mt=yt?Math.abs(ht)*.036*Math.min(1.5,y):Math.sin(t*2.6)*.014,jt=r.smoothKneeFlex*.22;r.upperBodyGroup.position.x=r.smoothHipX,r.upperBodyGroup.position.y=Mt-jt;const Lt=Math.sin(t*22)*r.edgeSaveBlend,Bt=r.smoothKneeFlex*.95;r.leftLeg.hipGroup.position.x=-.08+r.smoothHipX*.65,r.rightLeg.hipGroup.position.x=.08+r.smoothHipX*.65,r.leftLeg.hipGroup.position.y=.88-jt,r.rightLeg.hipGroup.position.y=.88-jt;const Ct=-r.smoothHipX*.75,rn=m>0?r.edgeSaveBlend*(.28+Math.abs(Lt)*.22):0,j=m<0?-r.edgeSaveBlend*(.28+Math.abs(Lt)*.22):0;r.leftLeg.hipGroup.rotation.z=Ct-rn,r.rightLeg.hipGroup.rotation.z=Ct-j,r.leftLeg.hipGroup.rotation.x=ht*Ft+Bt*.55+Lt*.25,r.leftLeg.kneeGroup.rotation.x=-Math.max(0,pt)*(Ft*1.22)-Bt*1.1,r.leftLeg.bootGroup.rotation.x=Bt*.52,r.rightLeg.hipGroup.rotation.x=-ht*Ft+Bt*.55-Lt*.25,r.rightLeg.kneeGroup.rotation.x=-Math.max(0,-pt)*(Ft*1.22)-Bt*1.1,r.rightLeg.bootGroup.rotation.x=Bt*.52;const Gt=yt?Math.min(.24,(y-1)*.14):.04;r.torsoSpineGroup.rotation.z=r.smoothTorsoComp+Lt*.08,r.torsoSpineGroup.rotation.x=.06+Gt+r.smoothKneeFlex*.18+r.edgeSaveBlend*.28,r.headGroup.rotation.z=r.smoothNeckComp,r.headGroup.rotation.x=-Gt*.7-r.smoothKneeFlex*.14-r.edgeSaveBlend*.2;const kt=Be.active&&Be.mode==="hook_rescue"||e.hookActive,F=ht*.12*y;r.leftArm.shoulderGroup.rotation.x=-F+Lt*.55,r.rightArm.shoulderGroup.rotation.x=kt?-1.35:F-Lt*.55,r.leftArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4-r.edgeSaveBlend*.22,r.rightArm.shoulderGroup.rotation.z=-r.smoothTorsoComp*.4+r.edgeSaveBlend*.22,r.leftArm.elbowGroup.rotation.x=r.edgeSaveBlend*.25,r.rightArm.elbowGroup.rotation.x=(kt?1.35:0)+r.edgeSaveBlend*.25,r.poleGroup.rotation.z=-m*.42+Lt*.14;const w=e.windForce||0,ee=10.5*Math.min(1.6,y);r.ribbonPivot.rotation.y=-Math.PI*.5+w*.78+Math.sin(t*ee)*.22,r.ribbonPivot.rotation.z=Math.cos(t*(ee*1.15))*.16,r.ribbonJoint2.rotation.y=Math.sin(t*(ee*1.35)-.8)*.28+w*.22,r.ribbonJoint3.rotation.y=Math.sin(t*(ee*1.6)-1.6)*.34+w*.25,r.backlitBackdrop.position.z=f-210,r.arrivalGroup.position.set(0,0,-H-3.5);const le=1+Math.sin(t*5)*.08;r.beaconRingMesh.scale.set(le,le,1);for(let ct=0;ct<r.spotlightBeams.length;ct++){const nt=r.spotlightBeams[ct];nt.mesh.rotation.z=nt.baseAngle+Math.sin(t*nt.speed+nt.phaseOffset)*.14,nt.mesh.position.z>f+15?nt.mesh.position.z-=240:nt.mesh.position.z<f-235&&(nt.mesh.position.z+=240)}for(let ct=0;ct<r.skyscrapers.length;ct++){const nt=r.skyscrapers[ct];nt.position.z>f+18?nt.position.z-=286:nt.position.z<f-268&&(nt.position.z+=286)}for(let ct=0;ct<r.carMeshes.length;ct++){const nt=r.carMeshes[ct];nt.mesh.position.z+=nt.speed*u,nt.mesh.position.z>f+25?nt.mesh.position.z=f-230:nt.mesh.position.z<f-235&&(nt.mesh.position.z=f+20)}r.acrobatGroup.updateMatrixWorld(!0),r.leftArm.handMesh.getWorldPosition(r.worldLeftHand),r.rightArm.handMesh.getWorldPosition(r.worldRightHand);const he=r.worldLeftHand,Ee=r.worldRightHand;if(kt){r.grappleLaserLine.visible=!0,r.grappleBeamMesh.visible=!0,r.grappleAnchor.set(0,Be.ropeTopY||12,f-.5);const ct=r.grappleLineGeo.attributes.position.array;ct[0]=Ee.x,ct[1]=Ee.y,ct[2]=Ee.z,ct[3]=r.grappleAnchor.x,ct[4]=r.grappleAnchor.y,ct[5]=r.grappleAnchor.z,r.grappleLineGeo.attributes.position.needsUpdate=!0;const nt=Ee.distanceTo(r.grappleAnchor);r.grappleBeamMesh.position.lerpVectors(Ee,r.grappleAnchor,.5),r.grappleBeamMesh.scale.set(1,Math.max(.1,nt),1),r.grappleBeamMesh.lookAt(r.grappleAnchor),r.grappleBeamMesh.rotateX(Math.PI/2)}else r.grappleLaserLine.visible=!1,r.grappleBeamMesh.visible=!1;const De=e.balls||[];let xe=!1,Se=!1;for(let ct=0;ct<De.length;ct++){const nt=De[ct];nt.waitingCatch&&(nt.targetHand==="left"&&(xe=!0),nt.targetHand==="right"&&(Se=!0))}const Ne=1+(Z.catchRadiusBonus||0)+(((mt=e.skinObj)==null?void 0:mt.catchWindowBonus)||0);r.leftReceiverRing.position.copy(he),r.rightReceiverRing.position.copy(Ee),r.leftReceiverMat.color.setHex(xe?16638023:M.rimHex),r.rightReceiverMat.color.setHex(Se?16638023:M.rimHex);const We=(xe?1.35:.78)*Ne,Le=(Se?1.35:.78)*Ne;r.leftReceiverRing.scale.set(We,We,We),r.rightReceiverRing.scale.set(Le,Le,Le);for(let ct=0;ct<4;ct++){const nt=De[ct],Mn=r.orbMeshes[ct];if(!nt||Be.active){Mn.group.visible=!1;for(let En=0;En<Mn.trails.length;En++)Mn.trails[En].visible=!1;continue}Mn.group.visible=!0;const _n=nt.targetHand==="right"?he:Ee,sn=nt.targetHand==="right"?Ee:he,Pn=Math.max(0,Math.min(1.05,nt.progress||0)),Bi=1.48+ct%2*.22,xt=_n.x+(sn.x-_n.x)*Pn,zi=_n.y+(sn.y-_n.y)*Pn+4*Bi*Pn*(1-Pn),fn=_n.z+(sn.z-_n.z)*Pn-.12*Math.sin(Pn*Math.PI);Mn.group.position.set(xt,zi,fn);const ui=nt.waitingCatch?1.28:_?1.15:1;Mn.group.scale.set(ui,ui,ui);const Ti=_||M.goldTrail?.028:.036;for(let En=0;En<Mn.trails.length;En++){const Fn=Mn.trails[En],Zn=Pn-(En+1)*Ti;if(Zn<=.01){Fn.visible=!1;continue}Fn.visible=!0;const Nt=_n.x+(sn.x-_n.x)*Zn,Dn=_n.y+(sn.y-_n.y)*Zn+4*Bi*Zn*(1-Zn),ri=_n.z+(sn.z-_n.z)*Zn-.12*Math.sin(Zn*Math.PI);Fn.position.set(Nt,Dn,ri)}}r.cyanPoleLight.position.set(0,1.35,f),r.cyanPoleLight.color.setHex(A),r.cyanPoleLight.intensity=_?6.8:4.2,r.goldOrbLight.position.set(0,2.45,f-.25);const Ie=Math.min(1,(e.combo||0)/14),Qe=Math.min(1,Math.max(0,(p-Ws*.28)/(Ws*.62))),Fe=Be.active?1:Qe,X=(ze?46:58+Ie*6)*(1-Fe)+48*Fe,W=(ze?3.25:6.2+Ie*.55)*(1-Fe)+4.95*Fe,Ce=(ze?2.15:3.38+Ie*.16)*(1-Fe)+2.95*Fe,Me=Math.min(1,u*5.5);r.dynamicFov+=(X-r.dynamicFov)*Me,r.dynamicCamDist+=(W-r.dynamicCamDist)*Me,r.dynamicCamY+=(Ce-r.dynamicCamY)*Me,Math.abs(r.camera.fov-r.dynamicFov)>.02&&(r.camera.fov=r.dynamicFov,r.camera.updateProjectionMatrix()),r.camera.position.set(Math.sin(m)*.32,r.dynamicCamY,f+r.dynamicCamDist),Be.active?r.camera.lookAt(r.acrobatGroup.position):ze?r.camera.lookAt(0,1.05,f):r.camera.lookAt(r.smoothHipX*.35,1.65-r.smoothKneeFlex*.2,f-15),r.renderer.render(r.scene,r.camera)}function KE(){try{const r=localStorage.getItem(pg);return r?JSON.parse(r):null}catch{return null}}function fg(){try{const r=localStorage.getItem("nma_profile_completed")==="true",e=(localStorage.getItem("nma_player_name")||"").trim(),t=(localStorage.getItem("nma_player_country")||"").trim();return!r||!e||e==="TÚ (Equilibrista)"||e.length<3||!t}catch{return!0}}function ZE(){var pn;const r=rt.useRef(KE()).current,e=rt.useRef((()=>{try{return localStorage.getItem("nma_economy_v2_migrated")==="true"}catch{return!1}})()).current,[t,s]=rt.useState((r==null?void 0:r.lang)||"es"),[o,l]=rt.useState((r==null?void 0:r.level)||1),[u,f]=rt.useState((r==null?void 0:r.maxUnlockedCity)??Math.min(19,Math.floor((((r==null?void 0:r.level)||1)-1)/5))),[m,p]=rt.useState((r==null?void 0:r.coins)??1200),[S,y]=rt.useState((r==null?void 0:r.gems)??60),[_,M]=rt.useState((r==null?void 0:r.bestScore)||0),[E,A]=rt.useState((r==null?void 0:r.leaguePoints)??320),[x,v]=rt.useState(()=>{try{const B=(localStorage.getItem("nma_player_name")||"").trim();if(B&&B!=="TÚ (Equilibrista)")return B}catch{}const h=((r==null?void 0:r.playerName)||"").trim();return h&&h!=="TÚ (Equilibrista)"?h:""}),[R,U]=rt.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return(r==null?void 0:r.playerCountry)||"AR"}),[b,I]=rt.useState(()=>fg()),[N,k]=rt.useState(()=>{try{const h=(localStorage.getItem("nma_player_name")||"").trim();if(h&&h!=="TÚ (Equilibrista)")return h}catch{}return""}),[T,L]=rt.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return"AR"}),[z,H]=rt.useState(!1),[q,re]=rt.useState((r==null?void 0:r.vipPassActive)||!1),[G,ne]=rt.useState(()=>{const B=((r==null?void 0:r.unlockedSkins)||["urbano"]).map(ie=>zr(ie));return B.includes("urbano")||B.unshift("urbano"),Array.from(new Set(B))}),[fe,oe]=rt.useState(()=>zr((r==null?void 0:r.equippedSkin)||"urbano")),[Z,J]=rt.useState(null),K=rt.useRef(fe);rt.useEffect(()=>{K.current=Z||fe},[fe,Z]);const[O,ce]=rt.useState((r==null?void 0:r.unlockedPoles)||["pole_basic"]),[we,Be]=rt.useState((r==null?void 0:r.equippedPole)||"pole_basic"),[Xe,Ye]=rt.useState((r==null?void 0:r.ownedMultipliers)||[]),[de,ge]=rt.useState((r==null?void 0:r.unlockedVipCities)||[]),[Ae,it]=rt.useState((r==null?void 0:r.activeVipCityId)||null),[ze,yt]=rt.useState((r==null?void 0:r.unlockedProps)||["balls"]),[en,ht]=rt.useState((r==null?void 0:r.equippedProp)||"balls"),[pt,Ft]=rt.useState(()=>e?(r==null?void 0:r.gearLevels)||{pole:0,boots:0,gloves:0}:{pole:0,boots:0,gloves:0}),[Mt,jt]=rt.useState((r==null?void 0:r.claimedTiers)||[]),[Lt,Bt]=rt.useState((r==null?void 0:r.soundEnabled)??!0),[Ct,rn]=rt.useState("upgrades"),[j,Gt]=rt.useState("home"),kt=rt.useRef(j);rt.useEffect(()=>{kt.current=j,j!=="skins"&&Z&&(J(null),K.current=fe)},[j,Z,fe]);const[F,w]=rt.useState("menu"),[ee,le]=rt.useState(null),[he,Ee]=rt.useState(2),[De,xe]=rt.useState(null),[Se,Ne]=rt.useState(!1),[We,Le]=rt.useState([]),[Ie,Qe]=rt.useState("live"),[Fe,ft]=rt.useState({progress:0,metersRemaining:68,totalMeters:68,score:0,combo:0,frenzyActive:!1,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:!0,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]}),[X,Oe]=rt.useState({coinsEarned:0,scoreEarned:0,lpEarned:0,gemsEarned:0,doubled:!1,revivedOnce:!1}),W=a0[t]||a0.es,Re=Zd.find(h=>h.id===Ae)||null,Ce=Jd(o,Re),Me=Us(fe),et=Us(Z||fe),Ze=mg(Z||fe),wt=Ec.find(h=>h.id===we)||Ec[0],mt=ul.find(h=>h.id===en)||ul[0],ct=Xe.reduce((h,B)=>{const ie=wc.find(ye=>ye.id===B);return ie?Math.max(h,ie.coinMult):h},1),nt=Xe.reduce((h,B)=>{const ie=wc.find(ye=>ye.id===B);return ie?Math.max(h,ie.lpMult):h},1),Mn=Re?Re.rewardMult:1,_n=Me.bonusMult||1,sn=Number((mt.mult*_n*wt.scoreMult*nt*Mn).toFixed(2)),Pn=Number((mt.mult*_n*wt.coinMult*ct*Mn).toFixed(2)),Bi=Number((_n*wt.scoreMult*nt*Mn).toFixed(2));rt.useEffect(()=>{Ot.enabled=Lt},[Lt]),rt.useEffect(()=>{const h=Math.min(19,Math.floor((o-1)/5));h>u&&f(h)},[o,u]),rt.useEffect(()=>{try{localStorage.setItem("nma_economy_v2_migrated","true"),localStorage.setItem(pg,JSON.stringify({lang:t,level:o,maxUnlockedCity:Math.max(u,Math.min(19,Math.floor((o-1)/5))),coins:m,gems:S,bestScore:_,leaguePoints:E,playerName:x||"Equilibrista",playerCountry:R,vipPassActive:q,unlockedSkins:G,equippedSkin:fe,unlockedPoles:O,equippedPole:we,ownedMultipliers:Xe,unlockedVipCities:de,activeVipCityId:Ae,unlockedProps:ze,equippedProp:en,gearLevels:pt,claimedTiers:Mt,soundEnabled:Lt}))}catch{}},[t,o,u,m,S,_,E,x,R,q,G,fe,O,we,Xe,de,Ae,ze,en,pt,Mt,Lt]);const xt=rt.useCallback(h=>{xe(h),setTimeout(()=>{xe(B=>B===h?null:B)},2600)},[]),zi=rt.useCallback(async()=>{const h=(x||"Equilibrista").trim(),B=await l0({name:h,country:R,score:E,level:o});Le(B)},[x,R,E,o]);rt.useEffect(()=>{zi();const h=setInterval(zi,12e3);return()=>clearInterval(h)},[zi]);const fn=rt.useCallback(async h=>{h&&h.preventDefault();const B=(N||"").trim().slice(0,15);if(B.length<3||B==="TÚ (Equilibrista)"){H(!0),Ot.playMissAlert();return}const ie=T||"AR";H(!1),v(B),U(ie);try{localStorage.setItem("nma_player_name",B),localStorage.setItem("nma_player_country",ie),localStorage.setItem("nma_profile_completed","true")}catch{}I(!1),Ot.init(),Ot.playVictory(),xt(t==="es"?`✅ Perfil activo: ${mo(ie)} ${B}`:`✅ Profile active: ${mo(ie)} ${B}`),Qe("syncing"),await Qo(B,ie,E,o);const ye=await l0({name:B,country:ie,score:E,level:o});Le(ye),Qe("live")},[N,T,E,o,t,xt]),ui=rt.useCallback(()=>{k(x||""),L(R||"AR"),H(!1),I(!0)},[x,R]),Ti=rt.useRef(null),En=rt.useRef(null),Fn=rt.useRef(null),Zn=rt.useRef(1),Nt=rt.useRef({running:!1,angle:0,angularVel:0,distance:0,targetDistance:68,score:0,combo:0,maxCombo:0,frenzyActive:!1,windForce:0,windTarget:0,windTimer:0,walkCycle:0,lastStepPhase:0,controlInput:0,balls:[],sparks:[],floatingPopups:[],hookAvailable:!0,hookActive:!1,hookTimer:0,freeFallShieldsRemaining:0,revivedOnce:!1,lastTimestamp:0,hudSyncTimer:0,nearMissCooldown:0,lightningFlashAlpha:0,fallSequence:{active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},cfg:null,skinObj:null,poleObj:null,propObj:null,gear:{pole:0,boots:0,gloves:0}}),Dn=rt.useCallback((h,B,ie="#00f2fe",ye="")=>{const qe=Zn.current++;h.floatingPopups.push({id:qe,text:B,subtext:ye,color:ie,ttl:1.05}),h.floatingPopups.length>4&&h.floatingPopups.shift()},[]),ri=rt.useCallback((h,B)=>{const ie=h.ballCount,ye=[B,"#00f2fe","#fde047","#f43f5e","#c084fc"],qe=[];for(let at=0;at<ie;at++){const At=at%2===0;qe.push({id:at,fromLeft:At,targetHand:At?"right":"left",progress:at/ie*.72,speed:h.juggleSpeed*(.95+at%3*.05),color:ye[at%ye.length],waitingCatch:!1})}return qe},[]),jr=rt.useCallback((h=!1)=>{Ot.init();const B=Jd(o,Re),ie=Us(K.current),ye=Nt.current;if(ye.cfg=B,ye.skinObj=ie,ye.poleObj=wt,ye.propObj=mt,ye.gear={...pt},ye.targetDistance=B.totalDistance,!h){ye.distance=0,ye.score=0,ye.combo=0,ye.maxCombo=0,ye.frenzyActive=!1,ye.hookAvailable=!0,ye.revivedOnce=!1,ye.floatingPopups=[];const qe=wt.autoSaveFall?1:0,at=ie.freeShields||0;ye.freeFallShieldsRemaining=qe+at}ye.angle=h?0:(Math.random()-.5)*.08,ye.angularVel=0,ye.windForce=0,ye.windTarget=(Math.random()-.5)*B.windBase*.5,ye.windTimer=1.6,ye.controlInput=0,ye.hookActive=!1,ye.hookTimer=0,ye.nearMissCooldown=0,ye.lightningFlashAlpha=0,ye.fallSequence={active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},ye.balls=ri(B,mt.color),ye.sparks=[],ye.lastTimestamp=performance.now(),ye.running=!0,ft({progress:Math.min(100,Math.floor(ye.distance/ye.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(ye.targetDistance-ye.distance)),totalMeters:ye.targetDistance,score:Math.floor(ye.score),combo:ye.combo,frenzyActive:ye.frenzyActive,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:ye.hookAvailable,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]})},[o,Re,wt,mt,pt,ri]),Kt=()=>{if(fg()){I(!0);return}J(null),K.current=fe,jr(!1),w("playing")},$r=()=>{F==="playing"?(Nt.current.running=!1,Ot.updateWind(0),w("paused")):F==="paused"&&(Nt.current.lastTimestamp=performance.now(),Nt.current.running=!0,w("playing"))},bi=rt.useCallback(h=>{var An,Wn,kn,Wt,un;const B=Nt.current;if(!B.running||B.fallSequence.active)return;const ie=Us(K.current),ye=(((An=B.gear)==null?void 0:An.gloves)||0)*.015,qe=((Wn=B.poleObj)==null?void 0:Wn.catchRadiusBonus)||0,at=(ie==null?void 0:ie.catchWindowBonus)||0,At=Math.max(.5,.74-(((kn=B.cfg)==null?void 0:kn.catchWindow)||.24)-ye-(qe+at)*.35);let tn=null,Pt=-1;for(const Bn of B.balls)Bn.targetHand===h&&Bn.progress>=At&&Bn.progress>Pt&&(Pt=Bn.progress,tn=Bn);if(tn){const Bn=tn.progress>=.85&&tn.progress<=.96;tn.fromLeft=h==="left",tn.targetHand=h==="left"?"right":"left",tn.progress=.02,tn.waitingCatch=!1,B.combo+=1,B.combo>B.maxCombo&&(B.maxCombo=B.combo);const Ji=B.frenzyActive;B.frenzyActive=B.combo>=10,!Ji&&B.frenzyActive?(Ot.playFrenzyStart(),Dn(B,t==="es"?"🔥 ¡MODO FRENESÍ x2!":"🔥 FRENZY MODE x2!","#fde047",t==="es"?"COMBO x10 ALCANZADO":"COMBO x10 REACHED")):(Ot.playCatch(B.combo,B.frenzyActive),Bn&&Dn(B,t==="es"?`⚡ ¡PERFECTO! x${B.combo}`:`⚡ PERFECT! x${B.combo}`,B.frenzyActive?"#fde047":"#00f2fe"));const xi=B.frenzyActive?2:1;if(B.score+=Math.round((28+B.combo*9)*sn*xi),!((Wt=B.poleObj)!=null&&Wt.noCatchRecoil)){const Nr=((un=B.cfg)==null?void 0:un.catchRecoilImpulse)??.05;B.angularVel+=(h==="left"?-1:1)*Nr}for(let Nr=0;Nr<10;Nr++)B.sparks.push({hand:h,x:(Math.random()-.5)*.25,y:(Math.random()-.5)*.25,vx:(Math.random()-.5)*3.8,vy:.9+Math.random()*2.8,vz:(Math.random()-.5)*2.8,ttl:.42,color:B.frenzyActive?"#fde047":tn.color})}else B.angularVel+=h==="left"?-.16:.16,B.combo=0,B.frenzyActive=!1,Ot.playMissAlert()},[sn,t,Dn]),Zi=rt.useCallback(()=>{const h=Nt.current;!h.running||!h.hookAvailable||h.fallSequence.active||(h.hookAvailable=!1,h.hookActive=!0,h.hookTimer=2.6,h.angle*=.15,h.angularVel=0,Ot.playHookRescue(),Dn(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80",t==="es"?"ESTABILIDAD RESTAURADA":"STABILITY RESTORED"),xt(t==="es"?"🪝 ¡Gancho Salvavidas Activado!":"🪝 Lifeline Hook Activated!"))},[t,xt,Dn]);rt.useEffect(()=>{const h=ie=>{const ye=Nt.current;F!=="playing"||!ye.running||(ie.key==="ArrowLeft"||ie.key==="a"||ie.key==="A"?ye.controlInput=-1:ie.key==="ArrowRight"||ie.key==="d"||ie.key==="D"?ye.controlInput=1:ie.key==="q"||ie.key==="Q"?bi("left"):ie.key==="e"||ie.key==="E"?bi("right"):ie.key===" "?(ie.preventDefault(),Zi()):ie.key==="Escape"&&$r())},B=ie=>{const ye=Nt.current;(ie.key==="ArrowLeft"||ie.key==="a"||ie.key==="A")&&ye.controlInput<0&&(ye.controlInput=0),(ie.key==="ArrowRight"||ie.key==="d"||ie.key==="D")&&ye.controlInput>0&&(ye.controlInput=0)};return window.addEventListener("keydown",h),window.addEventListener("keyup",B),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",B)}},[F,bi,Zi]),rt.useEffect(()=>{const h=Ti.current;if(!h)return;const B=$E(h);En.current=B;const ie=()=>{if(!h||!En.current)return;const ye=h.clientWidth||390,qe=h.clientHeight||844;En.current.camera.aspect=ye/qe,En.current.camera.updateProjectionMatrix(),En.current.renderer.setSize(ye,qe)};return window.addEventListener("resize",ie),()=>{window.removeEventListener("resize",ie),Ot.updateWind(0),B&&B.renderer&&B.renderer.domElement&&(h.contains(B.renderer.domElement)&&h.removeChild(B.renderer.domElement),B.renderer.dispose())}},[]),rt.useEffect(()=>{const h=Nt.current,B=Us(K.current);h.cfg?(h.skinObj=B,h.poleObj=wt,h.propObj=mt,h.gear={...pt},!h.running&&F==="menu"&&(h.cfg=Ce,h.targetDistance=Ce.totalDistance)):(h.cfg=Ce,h.skinObj=B,h.poleObj=wt,h.propObj=mt,h.gear={...pt},h.targetDistance=Ce.totalDistance,h.balls=ri(Ce,mt.color));const ie=ye=>{var tn,Pt,An,Wn,kn;const qe=Math.min(.05,Math.max(.001,(ye-(h.lastTimestamp||ye))/1e3));h.lastTimestamp=ye;const at=K.current,At=Us(at);if(h.skinObj=At,h.floatingPopups.length>0)for(let Wt=h.floatingPopups.length-1;Wt>=0;Wt--)h.floatingPopups[Wt].ttl-=qe,h.floatingPopups[Wt].ttl<=0&&h.floatingPopups.splice(Wt,1);if(h.lightningFlashAlpha>0&&(h.lightningFlashAlpha=Math.max(0,h.lightningFlashAlpha-qe*2.4)),h.running&&F==="playing"){const Wt=h.cfg;if(h.fallSequence.active)if(h.fallSequence.timer+=qe,Ot.updateWind(0),h.fallSequence.mode==="hook_rescue")if(h.fallSequence.timer<.58)h.fallSequence.fallVy-=24*qe,h.fallSequence.fallY+=h.fallSequence.fallVy*qe,h.fallSequence.fallRotX+=2.2*qe,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*2.5*qe,h.fallSequence.ropeTopY=Math.max(h.fallSequence.fallY+1.8,16-h.fallSequence.timer*28);else if(h.fallSequence.timer<1.38){const un=(h.fallSequence.timer-.58)/.8;h.fallSequence.fallY=P(h.fallSequence.fallY,0,un*.25),h.fallSequence.fallRotX=P(h.fallSequence.fallRotX,0,un*.3),h.fallSequence.fallRotZ=P(h.fallSequence.fallRotZ,0,un*.3),h.fallSequence.ropeTopY=h.fallSequence.fallY+2.2+un*10}else h.fallSequence.active=!1,h.fallSequence.mode=null,h.fallSequence.fallY=0,h.fallSequence.fallRotX=0,h.fallSequence.fallRotZ=0,h.angle=0,h.angularVel=0,h.hookActive=!0,h.hookTimer=2,Dn(h,t==="es"?"🪝 ¡RESCATE EN EL AIRE!":"🪝 MID-AIR HOOK RESCUE!","#4ade80",t==="es"?"DEVUELTO AL CABLE":"PULLED BACK TO CABLE");else h.fallSequence.mode==="gameover_fall"&&(h.fallSequence.fallVy-=28*qe,h.fallSequence.fallY+=h.fallSequence.fallVy*qe,h.fallSequence.fallRotX+=3.4*qe,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*4.2*qe,h.fallSequence.timer>=1.5&&(h.running=!1,Oe({coinsEarned:h.fallSequence.finalCoins,scoreEarned:h.fallSequence.finalScore,lpEarned:h.fallSequence.finalLp,gemsEarned:0,doubled:!1,revivedOnce:h.revivedOnce}),p(un=>un+h.fallSequence.finalCoins),A(un=>{const Bn=un+h.fallSequence.finalLp;return Qo(x||"Equilibrista",R,Bn,o),Bn}),M(un=>Math.max(un,h.fallSequence.finalScore)),w("gameover")));else{const un=Math.min(.45,(h.gear.pole||0)*.048),Bn=((tn=h.poleObj)==null?void 0:tn.gravityReduction)||0,Ji=At.gravityReduction||0,xi=Math.max(.18,(1-un)*(1-Bn)*(1-Ji)),Nr=Math.min(.48,(h.gear.boots||0)*.052),Yr=At.windReduction||0,Vi=Math.max(.2,(1-Nr)*(1-Yr)),Kr=Math.max(.25,1-Math.min(.75,(((Pt=h.poleObj)==null?void 0:Pt.stepDamp)||0)+(At.stepDampBonus||0))),qs=At.recoveryBonus||0;if(h.windTimer-=qe,h.windTimer<=0){const Vt=Wt.gustInterval??1.8;h.windTimer=Vt*(.75+Math.random()*.45);const gn=Math.abs(h.windTarget)>.05&&Math.random()<.72?-Math.sign(h.windTarget):Math.random()<.5?-1:1,Si=(.45+Math.random()*.65)*Wt.windBase*gn;h.windTarget=Si*Vi,((An=Wt.city)==null?void 0:An.weatherArchetype)==="cyber_rain"&&Math.abs(Si)>.7&&Math.random()<.45&&(h.lightningFlashAlpha=.85)}h.windForce+=(h.windTarget-h.windForce)*qe*2.8,Ot.updateWind(h.windForce),h.hookActive&&(h.hookTimer-=qe,h.hookTimer<=0&&(h.hookActive=!1));const Zr=h.walkCycle,Jr=3.2*Wt.walkSpeed;h.walkCycle+=qe*Jr;const Aa=Math.floor(Zr/Math.PI),hr=Math.floor(h.walkCycle/Math.PI);if(hr!==Aa){const Vt=hr%2===0?1:-1,gn=(Wt.stepSwayImpulse??.04)*Kr;h.angularVel+=Vt*gn*(h.hookActive?.25:1),Ot.playFootstep(Wt.walkSpeed)}const Qi=Math.sin(h.angle)*Wt.gravity*xi*(h.hookActive?.25:1),pr=h.windForce*.78*(h.hookActive?.2:1),_s=h.controlInput*3.15*(1+qs),Ra=Math.sin(ye*.0047)*.12*Wt.walkSpeed*Kr*(h.hookActive?.2:1);h.angularVel+=(Qi+pr+_s+Ra)*qe,h.angularVel*=Math.pow(.88,qe*60),h.angle+=h.angularVel*qe,h.hookActive&&(h.angle*=Math.pow(.86,qe*60)),h.nearMissCooldown>0&&(h.nearMissCooldown-=qe);const js=Math.abs(h.angle)/Ws;if(js>=.78&&js<.98&&h.nearMissCooldown<=0&&h.angle*h.controlInput<0&&Math.abs(h.controlInput)>.1){h.nearMissCooldown=2.4;const Vt=Math.round(150*sn*(h.frenzyActive?2:1));h.score+=Vt,Ot.playNearMiss(),Dn(h,t==="es"?`⚡ ¡SALVADA AL LÍMITE! +${Vt}`:`⚡ NEAR-MISS SAVE! +${Vt}`,"#38bdf8",t==="es"?"RECUPERACIÓN EXTREMA":"EXTREME RECOVERY")}const xs=Math.max(.35,1-Math.abs(h.angle)/(Ws*1.15)),si=4.6*Wt.walkSpeed*(.72+xs*.38);h.distance+=si*qe,h.score+=si*qe*12*sn*(h.frenzyActive?2:1);const Hi={left:!1,right:!1},$s=(((Wn=h.gear)==null?void 0:Wn.gloves)||0)*.015,Gi=((kn=h.poleObj)==null?void 0:kn.catchRadiusBonus)||0,Ys=At.catchWindowBonus||0,Qr=Math.max(.5,.74-Wt.catchWindow-$s-(Gi+Ys)*.35);for(const Vt of h.balls)if(Vt.progress+=Vt.speed*qe,Vt.progress>=Qr&&Vt.progress<=1.02?(Hi[Vt.targetHand]=!0,Vt.waitingCatch=!0):Vt.waitingCatch=!1,Vt.progress>1.03){Vt.fromLeft=Vt.targetHand==="left",Vt.targetHand=Vt.fromLeft?"right":"left",Vt.progress=0,Vt.waitingCatch=!1,h.combo=0,h.frenzyActive=!1;const gn=.24+(Wt.speedPhase||0)*.04;h.angularVel+=Vt.targetHand==="left"?-gn:gn,Ot.playMissAlert(),Dn(h,t==="es"?"⚠️ ¡ESFERA PERDIDA!":"⚠️ DROPPED ORB!","#ef4444")}for(let Vt=h.sparks.length-1;Vt>=0;Vt--){const gn=h.sparks[Vt];gn.ttl-=qe,gn.ttl<=0?h.sparks.splice(Vt,1):(gn.x+=gn.vx*qe,gn.y+=gn.vy*qe,gn.vy-=5.5*qe)}if(Math.abs(h.angle)>=Ws)if(h.freeFallShieldsRemaining>0)h.freeFallShieldsRemaining-=1,h.angle*=.12,h.angularVel=0,h.hookActive=!0,h.hookTimer=2.2,Ot.playHookRescue(),Dn(h,t==="es"?"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!":"🛡️ ANTI-FALL SHIELD ACTIVATED!","#fde047",t==="es"?"PROTECCIÓN PRO / VIP":"PRO / VIP PROTECTION");else if(h.hookAvailable)h.hookAvailable=!1,h.fallSequence.active=!0,h.fallSequence.mode="hook_rescue",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-3.8,h.fallSequence.fallRotX=.18,h.fallSequence.fallRotZ=h.angle*.8,h.fallSequence.ropeTopY=16,Ot.playFallScream(),setTimeout(()=>Ot.playHookRescue(),460),Dn(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80");else{const Vt=Math.floor(h.score),gn=Math.max(15,Math.floor((h.distance*1.4+h.maxCombo*6)*Pn)),Si=Math.max(10,Math.floor((h.distance*.8+h.maxCombo*4)*Bi));h.fallSequence.active=!0,h.fallSequence.mode="gameover_fall",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-4.5,h.fallSequence.fallRotX=.25,h.fallSequence.fallRotZ=h.angle,h.fallSequence.finalCoins=gn,h.fallSequence.finalScore=Vt,h.fallSequence.finalLp=Si,Ot.updateWind(0),Ot.playFallScream()}else if(h.distance>=h.targetDistance){h.running=!1,Ot.updateWind(0),Ot.playVictory();const Vt=Math.floor(h.score+500*sn),gn=Math.floor((125+o*26+h.maxCombo*12)*Pn),Si=Math.floor((95+o*16+h.maxCombo*9)*Bi),mr=(Re?Re.gemBonus:0)+(o%5===0?12:4);Oe({coinsEarned:gn,scoreEarned:Vt,lpEarned:Si,gemsEarned:mr,doubled:!1,revivedOnce:h.revivedOnce}),p(xn=>xn+gn),y(xn=>xn+mr),A(xn=>{const er=xn+Si;return Qo(x||"Equilibrista",R,er,o+1),er}),M(xn=>Math.max(xn,Vt)),f(xn=>Math.max(xn,Math.min(19,Math.floor(o/5)))),w("victory");return}h.hudSyncTimer+=qe,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,ft({progress:Math.min(100,Math.floor(h.distance/h.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(h.targetDistance-h.distance)),totalMeters:h.targetDistance,score:Math.floor(h.score),combo:h.combo,frenzyActive:h.frenzyActive,tiltRatio:Math.max(-1,Math.min(1,h.angle/Ws)),windForce:h.windForce,juggleAlertHands:Hi,hookAvailable:h.hookAvailable,hookActive:h.hookActive,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))}h.fallSequence.active&&(h.hudSyncTimer+=qe,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,ft(un=>({...un,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))))}else h.walkCycle+=qe*1.4;En.current&&YE(En.current,h,ye*.001,F,K.current,kt.current),Fn.current=requestAnimationFrame(ie)};return Fn.current=requestAnimationFrame(ie),()=>{Fn.current&&cancelAnimationFrame(Fn.current)}},[F,Ce,wt,mt,pt,sn,Pn,Bi,Re,o,t,x,R,ri,Dn]);function P(h,B,ie){return h+(B-h)*Math.max(0,Math.min(1,ie))}rt.useEffect(()=>{if(!ee)return;Ee(2);const h=setInterval(()=>{Ee(B=>B<=1?(clearInterval(h),0):B-1)},1e3);return()=>clearInterval(h)},[ee]);const Y=()=>{const h=ee;if(le(null),h==="revive"){const B=Nt.current;B.revivedOnce=!0,B.hookAvailable=!0,jr(!0),w("playing"),xt(t==="es"?"⚡ ¡Segunda oportunidad activada!":"⚡ Second chance activated!")}else h==="double"?X.doubled||(p(B=>B+X.coinsEarned),A(B=>{const ie=B+X.lpEarned;return Qo(x||"Equilibrista",R,ie,o),ie}),Oe(B=>({...B,coinsEarned:B.coinsEarned*2,lpEarned:B.lpEarned*2,doubled:!0})),xt(t==="es"?"🎬 ¡Recompensas Duplicadas x2!":"🎬 Rewards Doubled x2!")):h==="gems"?(y(B=>B+35),xt(t==="es"?"💎 +35 Gemas Gratis acreditadas":"💎 +35 Free Gems credited")):h==="coins"&&(p(B=>B+1500),xt(t==="es"?"🪙 +1.500 Monedas Gratis acreditadas":"🪙 +1,500 Free Coins credited"))},me=()=>{const h=o+1;l(h),f(B=>Math.max(B,Math.min(19,Math.floor((h-1)/5)))),setTimeout(()=>{const B=Nt.current,ie=Jd(h,Re),ye=Us(K.current);B.cfg=ie,B.skinObj=ye,B.targetDistance=ie.totalDistance,B.distance=0,B.score=0,B.combo=0,B.maxCombo=0,B.frenzyActive=!1,B.angle=0,B.angularVel=0,B.hookAvailable=!0,B.hookActive=!1,B.revivedOnce=!1;const qe=wt.autoSaveFall?1:0,at=ye.freeShields||0;B.freeFallShieldsRemaining=qe+at,B.fallSequence.active=!1,B.fallSequence.mode=null,B.balls=ri(ie,mt.color),B.lastTimestamp=performance.now(),B.running=!0,w("playing")},30)},ae=h=>{const B=pt[h.id]||0,ie=s0(B);if(!ie.isMax)if(ie.isProTier){if(q){Ft(ye=>({...ye,[h.id]:B+1})),Ot.playVictory(),xt(`👑 ${h.name[t]} Élite Nv.${B+1}/10 (Pase VIP)!`);return}S>=ie.gemCost?(y(ye=>ye-ie.gemCost),Ft(ye=>({...ye,[h.id]:B+1})),Ot.playVictory(),xt(`👑 ${h.name[t]} Élite Nv.${B+1}/10!`)):(Gt("store"),xt(t==="es"?`👑 Nivel Élite (6-10): Requiere ${ie.gemCost} Gemas o Pase VIP Pro`:`👑 Elite Tier (6-10): Requires ${ie.gemCost} Gems or VIP Pro Pass`))}else{if(m<ie.coinCost){xt(t==="es"?`🪙 Necesitás ${ie.coinCost.toLocaleString()} Monedas`:`🪙 Need ${ie.coinCost.toLocaleString()} Coins`);return}p(ye=>ye-ie.coinCost),Ft(ye=>({...ye,[h.id]:B+1})),Ot.playCatch(B+2,!1),xt(`${h.icon} ${h.name[t]} Nv.${B+1}/10!`)}},se=h=>{if(O.includes(h.id)||h.isVipOnly&&q){O.includes(h.id)||ce(B=>[...B,h.id]),Be(h.id),Ot.playCatch(4,!1),xt(`${h.icon} ${h.name[t]} ${W.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(B=>B-h.cost),ce(B=>[...B,h.id]),Be(h.id),Ot.playVictory(),xt(`${h.icon} ${h.name[t]}!`)):xt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(B=>B-h.gemCost),ce(B=>[...B,h.id]),Be(h.id),Ot.playVictory(),xt(`👑 ${h.name[t]} Desbloqueada!`)):(Gt("store"),xt(t==="es"?`👑 Vara Exclusiva (${h.usdPrice||`${h.gemCost} 💎`}): Visitá la Tienda VIP`:`👑 Exclusive Pole (${h.usdPrice||`${h.gemCost} 💎`}): Visit VIP Store`))},ke=h=>{const B=zr(h.id);if(Z===B){J(null),K.current=fe,Nt.current.skinObj=Us(fe);return}K.current=B,Nt.current.skinObj=h,J(B),Ot.playCatch(3,!1),xt(t==="es"?`👁️ Vista Previa 3D: ${h.icon} ${h.name.es}`:`👁️ 3D Live Preview: ${h.icon} ${h.name.en}`)},Ve=h=>{const B=zr(h.id);if(G.includes(B)||G.includes(h.legacyId)||h.isVipOnly&&q){G.includes(B)||ne(ye=>Array.from(new Set([...ye,B]))),J(null),K.current=B,Nt.current.skinObj=h,oe(B),Ot.playCatch(5,!0),xt(`${h.icon} ${h.name[t]} — ${W.equipped}!`);return}h.currency==="coins"?m>=h.cost?(p(ye=>ye-h.cost),ne(ye=>Array.from(new Set([...ye,B]))),J(null),K.current=B,Nt.current.skinObj=h,oe(B),Ot.playVictory(),xt(`${h.icon} ${h.name[t]} ${W.equipped}!`)):(K.current=B,Nt.current.skinObj=h,J(B),xt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas (Vista Previa 3D activa)`:`🪙 Need ${h.cost.toLocaleString()} Coins (3D Preview active)`)):S>=h.gemCost?(y(ye=>ye-h.gemCost),ne(ye=>Array.from(new Set([...ye,B]))),J(null),K.current=B,Nt.current.skinObj=h,oe(B),Ot.playVictory(),xt(`👑 ${h.name[t]} Desbloqueado y Equipado!`)):(K.current=B,Nt.current.skinObj=h,J(B),Gt("store"),xt(t==="es"?`👑 Aspecto Pro (${h.usdPrice||`${h.gemCost} 💎`}): Disponible en Tienda VIP`:`👑 Pro Skin (${h.usdPrice||`${h.gemCost} 💎`}): Available in VIP Store`))},He=h=>{if(Xe.includes(h.id)){xt(t==="es"?"✅ Multiplicador ya activo":"✅ Multiplier already active");return}if(h.isVipOnly&&q){Ye(B=>[...B,h.id]),Ot.playVictory(),xt(`👑 ${h.name[t]} Activado!`);return}h.currency==="coins"?m>=h.cost?(p(B=>B-h.cost),Ye(B=>[...B,h.id]),Ot.playVictory(),xt(`🚀 ${h.name[t]} Activado!`)):xt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(B=>B-h.gemCost),Ye(B=>[...B,h.id]),Ot.playVictory(),xt(`👑 ${h.name[t]} Activado!`)):(Gt("store"),xt(t==="es"?`👑 Multiplicador Pro (${h.usdPrice}): Requiere ${h.gemCost} 💎 o Pase VIP`:`👑 Pro Multiplier (${h.usdPrice}): Requires ${h.gemCost} 💎 or VIP Pass`))},tt=h=>{if(ze.includes(h.id)){ht(h.id),xt(`${h.icon} ${h.name[t]} ${W.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(B=>B-h.cost),yt(B=>[...B,h.id]),ht(h.id),Ot.playVictory(),xt(`${h.icon} ${h.name[t]}!`)):xt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.cost?(y(B=>B-h.cost),yt(B=>[...B,h.id]),ht(h.id),Ot.playVictory(),xt(`${h.icon} ${h.name[t]}!`)):(Gt("store"),xt(t==="es"?"💎 Gemas insuficientes":"💎 Not enough gems"))},st=h=>{const B=Math.max(u,Math.min(19,Math.floor((o-1)/5)));if(h>B)return;const ie=h*5+1;it(null),l(ie),Ne(!1),xt(t==="es"?`✈️ Viajaste a ${hs[h].flag} ${hs[h].name.es} (Nivel ${ie})`:`✈️ Traveled to ${hs[h].flag} ${hs[h].name.en} (Level ${ie})`)},Et=h=>{if(q||de.includes(h.id)){it(h.id),Ne(!1),Ot.playVictory(),xt(t==="es"?`👑 Ciudad VIP Activa: ${h.flag} ${h.name.es} (x${h.rewardMult} Recompensas)`:`👑 VIP City Active: ${h.flag} ${h.name.en} (x${h.rewardMult} Rewards)`);return}S>=h.gemUnlockCost?(y(ie=>ie-h.gemUnlockCost),ge(ie=>[...ie,h.id]),it(h.id),Ne(!1),Ot.playVictory(),xt(`👑 ${h.flag} ${h.name[t]} Desbloqueada!`)):(Ne(!1),Gt("store"),xt(t==="es"?`🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${h.gemUnlockCost} 💎`:`🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${h.gemUnlockCost} 💎`))},gt=h=>{y(B=>B+h.gems),p(B=>B+h.coins),h.isVipPassBundle&&(re(!0),ce(B=>Array.from(new Set([...B,"pole_imperial","pole_quantum"]))),Be("pole_imperial"),ne(B=>Array.from(new Set([...B,"shinobi","ronin_gold","quantum_specter","immortal_legend","leyenda_dorada"]))),J(null),K.current="immortal_legend",oe("immortal_legend"),Ye(B=>Array.from(new Set([...B,"mult_x3_pro"]))),ge(Zd.map(B=>B.id))),A(B=>{const ie=B+(h.leaguePts||200);return Qo(x||"Equilibrista",R,ie,o),ie}),Ot.playVictory(),xt(h.isVipPassBundle?t==="es"?"👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas":"👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked":`👑 ${h.name[t]} (+${h.gems} 💎 / +${h.coins.toLocaleString()} 🪙)`)},Ke=h=>{Mt.includes(h.id)||E<h.requiredLp||(jt(B=>[...B,h.id]),y(B=>B+h.gemsReward),p(B=>B+h.coinsReward),Ot.playVictory(),xt(`🏆 +${h.gemsReward} 💎 & +${h.coinsReward} 🪙!`))},Dt=We.length>0?We:[{id:"player_self",name:x||"Equilibrista",country:R,flag:mo(R),score:E,lp:E,level:o,isPlayer:!0}],hn=Dt.findIndex(h=>h.isPlayer),Zt=hn>=0?hn+1:1,$t=Math.abs(Fe.windForce)<.08?"•":Fe.windForce>0?">>>":"<<<",bn=Math.max(u,Math.min(19,Math.floor((o-1)/5))),Ge=mo(R);return D.jsx("div",{className:"app-root",children:D.jsxs("div",{className:"phone-frame",children:[D.jsx("div",{ref:Ti,className:"game-canvas",style:{width:"100%",height:"100%",position:"absolute",inset:0}}),De&&D.jsx("div",{className:"toast-banner",children:De}),b&&D.jsx("div",{className:"modal-backdrop onboarding-backdrop",style:{zIndex:250},children:D.jsxs("form",{className:"modal-card onboarding-modal-card",onSubmit:fn,children:[D.jsx("div",{className:"onboarding-crown-badge",children:t==="es"?"🏆 LIGA MUNDIAL EN VIVO":"🏆 LIVE WORLD LEAGUE"}),D.jsx("h2",{className:"modal-title onboarding-title",children:t==="es"?"⚡ CREÁ TU PERFIL DE EQUILIBRISTA":"⚡ CREATE YOUR TIGHTROPE PROFILE"}),D.jsx("p",{className:"modal-subtitle onboarding-subtitle",children:t==="es"?"Elegí tu nombre y país para competir en el Ranking Mundial en vivo.":"Choose your name and country to compete on the Live World Leaderboard."}),D.jsxs("div",{className:"onboarding-field-group",children:[D.jsx("label",{className:"onboarding-label",htmlFor:"onboarding-name-input",children:t==="es"?"1. TU NOMBRE O APODO (3 A 15 CARACTERES)":"1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)"}),D.jsx("input",{id:"onboarding-name-input",type:"text",maxLength:15,autoFocus:!0,className:`onboarding-input ${z?"input-error-shake":""}`,placeholder:t==="es"?"Tu Nombre o Apodo (Ej: Maury_AR)":"Your Nickname (e.g. Maury_AR)",value:N,onChange:h=>{k(h.target.value),z&&H(!1)}}),z&&D.jsx("div",{className:"onboarding-error-msg",children:t==="es"?"⚠️ Ingresá un nombre válido de al menos 3 caracteres.":"⚠️ Please enter a valid name of at least 3 characters."})]}),D.jsxs("div",{className:"onboarding-field-group",children:[D.jsx("label",{className:"onboarding-label",children:t==="es"?"2. SELECCIONÁ TU PAÍS / BANDERA":"2. SELECT YOUR COUNTRY / FLAG"}),D.jsx("div",{className:"onboarding-country-grid",children:y_.map(h=>{const B=T===h.code;return D.jsxs("button",{type:"button",className:`onboarding-country-chip ${B?"selected":""}`,onClick:()=>L(h.code),children:[D.jsx("span",{className:"country-chip-flag",children:h.flag}),D.jsx("span",{className:"country-chip-code",children:h.code}),D.jsx("span",{className:"country-chip-name",children:h.name})]},h.code)})})]}),D.jsx("button",{type:"submit",className:"onboarding-submit-btn",children:t==="es"?"🚀 GUARDAR Y ENTRAR A COMPETIR":"🚀 SAVE & START COMPETING"})]})}),Se&&D.jsx("div",{className:"modal-backdrop",style:{zIndex:120},children:D.jsxs("div",{className:"modal-card",style:{maxHeight:"86%",display:"flex",flexDirection:"column",padding:"16px 14px"},children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[D.jsx("h2",{className:"modal-title",style:{fontSize:16,margin:0},children:t==="es"?"🌍 CIUDADES Y MONUMENTOS 3D":"🌍 CITIES & 3D LANDMARKS"}),D.jsx("button",{className:"hud-pause-btn",onClick:()=>Ne(!1),style:{width:30,height:30,fontSize:13},children:"✕"})]}),D.jsxs("div",{className:"items-scroll-list",style:{flex:1,overflowY:"auto",paddingRight:4},children:[D.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#fde047",letterSpacing:.8,marginBottom:6,marginTop:2},children:W.vipCitiesTitle}),Zd.map(h=>{const B=q||de.includes(h.id),ie=Ae===h.id;return D.jsxs("div",{className:"item-card vip-city-card",style:{cursor:"pointer",borderColor:ie?"rgba(253, 224, 71, 0.95)":"rgba(250, 204, 21, 0.45)"},onClick:()=>Et(h),children:[D.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:B?h.flag:"🔒"}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",style:{color:"#fde047"},children:["👑 ",h.name[t]]}),D.jsxs("div",{className:"benefit-pill-tag pro",children:["x",h.rewardMult," 🪙/LP • +",h.gemBonus," 💎 POR CRUCE"]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${ie?"equipped":"buy-gems"}`,children:ie?t==="es"?"ACTIVA":"ACTIVE":B?t==="es"?"VIAJAR":"TRAVEL":`👑 ${h.gemUnlockCost} 💎`})]},h.id)}),D.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#38bdf8",letterSpacing:.8,margin:"12px 0 6px"},children:t==="es"?"🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)":"🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)"}),hs.map((h,B)=>{var At,tn,Pt,An;const ie=B<=bn,ye=!Ae&&Ce.cityIndex===B,qe=B*5+1,at=B*5+5;return D.jsxs("div",{className:`item-card ${ye?"selected":""}`,style:{opacity:ie?1:.52,cursor:ie?"pointer":"not-allowed"},onClick:()=>ie&&st(B),children:[D.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:ie?h.flag:"🔒"}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",children:[B+1,". ",h.name[t]]}),D.jsxs("div",{className:"benefit-pill-tag",children:["🗿 ",((At=h.monumentName)==null?void 0:At[t])||((tn=h.weatherLabel)==null?void 0:tn[t])]}),D.jsx("div",{className:"item-desc",children:t==="es"?`Niveles ${qe} al ${at} • ${(Pt=h.weatherLabel)==null?void 0:Pt.es}`:`Levels ${qe} to ${at} • ${(An=h.weatherLabel)==null?void 0:An.en}`})]}),D.jsx("button",{className:`item-action-btn ${ye?"equipped":ie?"buy-coins":"locked"}`,disabled:!ie,children:ye?t==="es"?"ACTUAL":"ACTIVE":ie?t==="es"?`NV. ${qe}`:`LVL ${qe}`:`🔒 NV.${qe}`})]},h.index)})]})]})}),F==="playing"&&D.jsxs("div",{className:"gameplay-hud-layer",children:[Fe.lightningFlashAlpha>.05&&D.jsx("div",{className:"weather-lightning-flash",style:{opacity:Fe.lightningFlashAlpha}}),D.jsxs("div",{className:"vector-hud-top",children:[D.jsxs("div",{className:"vector-top-row",children:[D.jsxs("div",{className:"vector-city-tag",children:[D.jsxs("span",{children:[Ce.city.flag," ",Ce.city.name[t].toUpperCase()," •"," ",Re?"👑 VIP":`${W.level} ${o}`," • x",sn]}),D.jsxs("span",{className:"vector-meters-left",children:[Fe.metersRemaining,"m / ",Fe.totalMeters,"m"]})]}),D.jsx("button",{className:"hud-pause-btn",onClick:$r,"aria-label":"Pause",children:"⏸"})]}),D.jsx("div",{className:"vector-progress-rail",children:D.jsx("div",{className:"vector-progress-fill",style:{width:`${Fe.progress}%`}})}),D.jsxs("div",{className:"vector-Horizon-pill-row",children:[D.jsxs("div",{className:`vector-horizon-pill ${Math.abs(Fe.tiltRatio)>.65?"danger":""}`,children:[D.jsx("div",{className:"vector-horizon-center-tick"}),D.jsx("div",{className:"vector-horizon-dot",style:{left:`${50+Math.max(-46,Math.min(46,Fe.tiltRatio*46))}%`}})]}),D.jsxs("div",{className:"vector-wind-badge",children:["🌬️ ",$t," ",Math.abs(Fe.windForce*18).toFixed(0)," km/h"]}),D.jsxs("div",{className:`vector-score-badge ${Fe.frenzyActive?"frenzy-glow":""}`,children:[Fe.score.toLocaleString()," pts",Fe.combo>1?` • x${Fe.combo}`:"",Fe.frenzyActive?" 🔥":""]})]})]}),Fe.floatingPopups&&Fe.floatingPopups.length>0&&D.jsx("div",{className:"floating-popups-layer",children:Fe.floatingPopups.map(h=>D.jsxs("div",{className:"floating-feedback-popup",style:{color:h.color,borderColor:h.color},children:[D.jsx("div",{className:"floating-popup-main",children:h.text}),h.subtext&&D.jsx("div",{className:"floating-popup-sub",children:h.subtext})]},h.id))}),D.jsxs("div",{className:"vector-controls-layer",children:[D.jsxs("div",{className:"vector-touch-zones",children:[D.jsx("button",{className:"vector-touch-half left",onPointerDown:()=>{Nt.current.controlInput=-1},onPointerUp:()=>{Nt.current.controlInput<0&&(Nt.current.controlInput=0)},onPointerLeave:()=>{Nt.current.controlInput<0&&(Nt.current.controlInput=0)},children:D.jsxs("span",{className:"vector-corner-hint",children:["◀ ",W.leanLeft]})}),D.jsx("button",{className:"vector-touch-half right",onPointerDown:()=>{Nt.current.controlInput=1},onPointerUp:()=>{Nt.current.controlInput>0&&(Nt.current.controlInput=0)},onPointerLeave:()=>{Nt.current.controlInput>0&&(Nt.current.controlInput=0)},children:D.jsxs("span",{className:"vector-corner-hint",children:[W.leanRight," ▶"]})})]}),D.jsxs("div",{className:"vector-juggle-overlay-row",children:[D.jsxs("button",{className:`vector-catch-pill ${Fe.juggleAlertHands.left?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),bi("left")},children:["✋ ",W.leftHand]}),Fe.hookAvailable&&D.jsx("button",{className:"vector-hook-pill",onPointerDown:h=>{h.stopPropagation(),Zi()},children:"🪝"}),D.jsxs("button",{className:`vector-catch-pill ${Fe.juggleAlertHands.right?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),bi("right")},children:[W.rightHand," ✋"]})]})]})]}),F==="menu"&&D.jsxs("div",{className:"menu-overlay-layer",children:[D.jsxs("div",{className:"currency-top-bar",children:[D.jsxs("div",{className:"currency-group",children:[D.jsxs("div",{className:"currency-pill coins",onClick:()=>le("coins"),title:W.freeCoinsAd,children:["🪙 ",m.toLocaleString()," ",D.jsx("span",{className:"plus-badge",children:"+"})]}),D.jsxs("div",{className:"currency-pill gems",onClick:()=>le("gems"),title:W.freeGemsAd,children:["💎 ",S.toLocaleString()," ",D.jsx("span",{className:"plus-badge",children:"+"})]}),D.jsxs("div",{className:"currency-pill lp",onClick:()=>Gt("league"),children:["🏆 #",Zt]})]}),D.jsxs("div",{className:"utility-group",children:[D.jsxs("button",{className:"profile-header-badge",onClick:ui,title:t==="es"?"Editar Perfil":"Edit Profile",children:[D.jsx("span",{children:Ge}),D.jsx("span",{className:"profile-header-name",children:x||"Equilibrista"}),D.jsx("span",{className:"profile-header-edit",children:"✏️"})]}),D.jsx("button",{className:"icon-btn",onClick:()=>Bt(h=>!h),title:"Sound",children:Lt?"🔊":"🔇"})]})]}),D.jsxs("div",{className:"tab-content-area",children:[j==="home"&&D.jsxs("div",{className:"home-card",children:[D.jsx("div",{className:"brand-header",children:D.jsxs("div",{className:"cover-hero-banner",children:[D.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO Portada Oficial",className:"cover-hero-img"}),D.jsxs("div",{className:"cover-hero-overlay",children:[D.jsx("span",{className:"official-badge",children:q?"👑 PASE VIP PRO ACTIVO":W.officialEdition}),D.jsx("h1",{className:"game-logo-title",children:W.title}),D.jsxs("p",{className:"game-logo-sub",children:["🗿 ",((pn=Ce.city.monumentName)==null?void 0:pn[t])||W.subtitle]})]})]})}),D.jsxs("div",{className:"city-campaign-card",onClick:()=>Ne(!0),style:{cursor:"pointer"},children:[D.jsx("div",{className:"city-flag-circle",children:Ce.city.flag}),D.jsxs("div",{className:"city-details",children:[D.jsxs("div",{className:"city-stage-tag",children:[Re?`👑 CIUDAD VIP (x${Re.rewardMult} PAGO)`:`${W.worldTour} • ${W.city} ${Ce.cityIndex+1}/20`," ",D.jsx("span",{style:{color:"#fde047",marginLeft:6,textDecoration:"underline",fontSize:"10px"},children:t==="es"?"(Cambiar 🌍)":"(Change 🌍)"})]}),D.jsx("div",{className:"city-title-text",children:Ce.city.name[t]}),D.jsxs("div",{className:"city-level-sub",children:[W.level," ",o," • ",Me.icon," ",Me.name[t]]})]}),D.jsxs("div",{className:"multiplier-chip",children:["x",sn]})]}),D.jsxs("div",{className:"quick-stats-grid",children:[D.jsxs("div",{className:"stat-box",children:[D.jsx("span",{className:"stat-lbl",children:W.bestScore}),D.jsx("span",{className:"stat-val",children:_.toLocaleString()})]}),D.jsxs("div",{className:"stat-box",children:[D.jsx("span",{className:"stat-lbl",children:t==="es"?"MULTI TOTAL ACTIVO":"ACTIVE TOTAL MULTI"}),D.jsxs("span",{className:"stat-val gold",children:["x",sn," PTS / x",Pn," 🪙"]})]})]}),D.jsxs("button",{className:"play-cta-button",onClick:Kt,children:[D.jsx("span",{className:"play-icon",children:"▶"})," ",W.playNow," (",W.level," ",o,")"]}),D.jsxs("div",{className:"reward-ads-row",children:[D.jsxs("button",{className:"ad-reward-btn coins",onClick:()=>le("coins"),children:["🎬 ",W.freeCoinsAd]}),D.jsxs("button",{className:"ad-reward-btn gems",onClick:()=>le("gems"),children:["🎬 ",W.freeGemsAd]})]})]}),j==="armory"&&D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{className:"panel-heading",children:["⚙️ ",W.armoryTitle]}),D.jsxs("div",{className:"section-sub-tabs",children:[D.jsx("button",{className:`sub-tab-btn ${Ct==="upgrades"?"active":""}`,onClick:()=>rn("upgrades"),children:t==="es"?"⚙️ MEJORAS (1-10)":"⚙️ UPGRADES (1-10)"}),D.jsx("button",{className:`sub-tab-btn ${Ct==="poles"?"active":""}`,onClick:()=>rn("poles"),children:t==="es"?"⚖️ VARAS 3D (5)":"⚖️ 3D POLES (5)"}),D.jsx("button",{className:`sub-tab-btn ${Ct==="multipliers"?"active":""}`,onClick:()=>rn("multipliers"),children:t==="es"?"🚀 MULTIPLICADORES":"🚀 MULTIPLIERS"})]}),D.jsxs("div",{className:"items-scroll-list",children:[Ct==="upgrades"&&D.jsxs(D.Fragment,{children:[m_.map(h=>{const B=pt[h.id]||0,ie=s0(B);return D.jsxs("div",{className:"item-card",children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",children:[h.name[t]," ",D.jsxs("span",{className:"lvl-pill",children:["Nv. ",B,"/10"]})]}),D.jsx("div",{className:`benefit-pill-tag ${ie.isProTier?"pro":""}`,children:ie.isProTier?t==="es"?"👑 TRAMO ÉLITE PRO (NV. 6 A 10)":"👑 PRO ELITE TIER (LVL 6 TO 10)":h.statLabel[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]}),D.jsx("div",{className:"armory-level-bar",children:Array.from({length:10}).map((ye,qe)=>D.jsx("span",{className:`armory-pip ${qe>=5?"pro-pip":""} ${qe<B?"filled":""}`},qe))})]}),D.jsx("button",{className:`item-action-btn ${ie.isMax?"equipped":ie.isProTier?"buy-gems":"buy-coins"}`,disabled:ie.isMax,onClick:()=>ae(h),children:ie.isMax?W.maxLevel:ie.isProTier?q?"👑 VIP GRATIS":`👑 PRO ${ie.gemCost} 💎`:`🪙 ${ie.coinCost.toLocaleString()}`})]},h.id)}),D.jsxs("h3",{className:"sub-section-title",children:["🎪 ",W.propsTitle]}),ul.map(h=>{const B=ze.includes(h.id),ie=en===h.id;return D.jsxs("div",{className:`item-card ${ie?"selected":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsxs("div",{className:"item-desc",children:["Multiplicador Base x",h.mult]})]}),D.jsx("button",{className:`item-action-btn ${ie?"equipped":B?"equip":h.currency==="gems"?"buy-gems":"buy-coins"}`,onClick:()=>tt(h),children:ie?W.equipped:B?W.equip:h.currency==="gems"?`💎 ${h.cost}`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]}),Ct==="poles"&&Ec.map(h=>{const B=O.includes(h.id)||h.isVipOnly&&q,ie=we===h.id;return D.jsxs("div",{className:`item-card ${ie?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${ie?"equipped":B?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>se(h),children:ie?W.equipped:B?W.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),Ct==="multipliers"&&wc.map(h=>{const B=Xe.includes(h.id)||h.isVipOnly&&q;return D.jsxs("div",{className:`item-card ${B?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${B?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>He(h),children:B?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),j==="skins"&&D.jsxs("div",{className:"panel-card skins-panel-card",children:[D.jsxs("h2",{className:"panel-heading",children:["🎭 ",W.skinsTitle]}),D.jsxs("div",{className:"skin-3d-live-window",children:[D.jsxs("div",{className:"skin-live-top-tag",children:[D.jsxs("span",{children:["🎥"," ",Z?t==="es"?"VISTA PREVIA 3D ACTIVA":"3D PREVIEW ACTIVE":t==="es"?"VISTA 3D EN TIEMPO REAL":"LIVE 3D PREVIEW"]}),D.jsxs("span",{className:"skin-live-mult-chip",children:[et.icon," ",Ze.multLabel," (TOTAL x",sn,")"]})]}),D.jsxs("div",{className:"skin-live-bottom-bar",children:[D.jsxs("span",{children:[et.name[t],Z?t==="es"?" (PROBANDO)":" (PREVIEW)":""]}),D.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:(Ze.paletteSwatches||[]).map((h,B)=>D.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:h}},B))})]})]}),D.jsxs("div",{className:"items-scroll-list",children:[xo.filter(h=>!h.isPro).map(h=>{var At;const B=zr(h.id),ie=G.includes(B)||G.includes(h.legacyId),ye=zr(fe)===B&&!Z,qe=Z===B,at=h.visual||Ui[B]||Ui.urbano;return D.jsxs("div",{className:`item-card ${ye||qe?"selected":""}`,children:[D.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`},children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsxs("div",{className:"skin-palette-preview-badge",children:[(at.paletteSwatches||[]).map((tn,Pt)=>D.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:tn}},Pt)),D.jsxs("span",{className:"palette-label-text",children:[((At=at.paletteLabel)==null?void 0:At[t])||at.multLabel," • ",at.multLabel]})]}),D.jsx("div",{className:"benefit-pill-tag",children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!ie&&D.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:qe?"linear-gradient(135deg, #00f2fe, #0284c7)":"rgba(15, 23, 42, 0.85)",color:qe?"#04121d":"#bae6fd",border:"1px solid rgba(56, 189, 248, 0.55)"},onClick:()=>ke(h),children:qe?t==="es"?"👁️ VIENDO":"👁️ VIEWING":t==="es"?"👁️ VISTA PREVIA":"👁️ PREVIEW"}),D.jsx("button",{className:`item-action-btn ${ye?"equipped":ie?"equip":"buy-coins"}`,onClick:()=>Ve(h),children:ye?W.equipped:ie?W.equip:`🪙 ${h.cost.toLocaleString()}`})]})]},h.id)}),D.jsxs("h3",{className:"sub-section-title",style:{color:"#fbbf24",borderColor:"rgba(251, 191, 36, 0.45)",marginTop:14},children:["👑"," ",t==="es"?"ASPECTOS ÉLITE (EXCLUSIVOS PRO)":"ELITE SKINS (PRO EXCLUSIVE)"]}),xo.filter(h=>h.isPro).map(h=>{var At;const B=zr(h.id),ie=G.includes(B)||G.includes(h.legacyId)||h.isVipOnly&&q,ye=zr(fe)===B&&!Z,qe=Z===B,at=h.visual||Ui[B]||Ui.urbano;return D.jsxs("div",{className:`item-card vip-city-card ${ye||qe?"selected":""}`,children:[D.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`,boxShadow:`0 0 12px ${h.trimColor}55`},children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[D.jsx("span",{className:"item-title",children:h.name[t]}),D.jsx("span",{style:{fontSize:"0.58rem",fontWeight:900,padding:"2px 6px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.04em"},children:h.proTag?h.proTag[t]:"👑 EXCLUSIVO PRO"})]}),D.jsxs("div",{className:"skin-palette-preview-badge",children:[(at.paletteSwatches||[]).map((tn,Pt)=>D.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:tn}},Pt)),D.jsxs("span",{className:"palette-label-text",children:[((At=at.paletteLabel)==null?void 0:At[t])||at.multLabel," • ",at.multLabel]})]}),D.jsx("div",{className:"benefit-pill-tag pro",children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!ie&&D.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:qe?"linear-gradient(135deg, #fbbf24, #f59e0b)":"rgba(15, 23, 42, 0.88)",color:qe?"#1e1b4b":"#fde68a",border:"1px solid rgba(251, 191, 36, 0.6)"},onClick:()=>ke(h),children:qe?t==="es"?"👁️ VIENDO":"👁️ VIEWING":t==="es"?"👁️ VISTA PREVIA":"👁️ PREVIEW"}),D.jsx("button",{className:`item-action-btn ${ye?"equipped":ie?"equip":"buy-gems"}`,onClick:()=>Ve(h),children:ye?W.equipped:ie?W.equip:`👑 ${h.usdPrice||`${h.gemCost} 💎`}`})]})]},h.id)}),D.jsx("h3",{className:"sub-section-title",children:W.polesTitle}),Ec.map(h=>{const B=O.includes(h.id)||h.isVipOnly&&q,ie=we===h.id;return D.jsxs("div",{className:`item-card ${ie?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${ie?"equipped":B?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>se(h),children:ie?W.equipped:B?W.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),j==="league"&&D.jsxs("div",{className:"panel-card",children:[D.jsxs("div",{className:"league-banner-top",children:[D.jsxs("div",{children:[D.jsxs("div",{className:"season-chip",children:[W.seasonTitle," ",D.jsxs("span",{style:{color:"#4ade80",marginLeft:6},children:["● ",Ie==="syncing"?"SYNC...":"ONLINE LIVE"]})]}),D.jsx("h2",{className:"panel-heading",children:W.leagueTitle})]}),D.jsxs("div",{className:"rank-badge-large",children:["#",Zt]})]}),D.jsxs("div",{className:"player-name-bar",children:[D.jsxs("div",{className:"profile-active-summary",children:[D.jsx("span",{className:"profile-flag-big",children:Ge}),D.jsxs("div",{className:"profile-text-col",children:[D.jsx("span",{className:"profile-label-mini",children:t==="es"?"COMPETIDOR OFICIAL":"OFFICIAL COMPETITOR"}),D.jsx("span",{className:"profile-name-strong",children:x||"Equilibrista"})]})]}),D.jsxs("button",{type:"button",className:"edit-profile-pill-btn",onClick:ui,children:["✏️ ",t==="es"?"Editar Perfil":"Edit Profile"]})]}),D.jsxs("div",{className:"items-scroll-list",children:[D.jsx("div",{className:"leaderboard-box",children:Dt.map((h,B)=>D.jsxs("div",{className:`leader-row ${h.isPlayer?"is-player":""}`,children:[D.jsx("span",{className:"leader-pos",children:B===0?"🥇":B===1?"🥈":B===2?"🥉":`#${B+1}`}),D.jsx("span",{className:"leader-flag",children:h.flag}),D.jsxs("span",{className:"leader-name",children:[h.name,h.isPlayer?t==="es"?" (TÚ)":" (YOU)":""]}),D.jsxs("span",{className:"leader-lp",children:[(h.lp??h.score??0).toLocaleString()," LP"]})]},h.id))}),D.jsxs("h3",{className:"sub-section-title",children:["🎁 ",W.seasonPrizes]}),v_.map(h=>{const B=Mt.includes(h.id),ie=!B&&E>=h.requiredLp;return D.jsxs("div",{className:"item-card",children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsxs("div",{className:"item-title",children:[h.rankLabel," • ",h.title[t]]}),D.jsxs("div",{className:"item-desc",children:[h.requiredLp.toLocaleString()," LP → +",h.gemsReward," ","💎 & +",h.coinsReward.toLocaleString()," 🪙"]})]}),D.jsx("button",{className:`item-action-btn ${B?"equipped":ie?"buy-coins":"locked"}`,disabled:!ie,onClick:()=>Ke(h),children:B?W.claimed:ie?W.claim:`${h.requiredLp} LP`})]},h.id)})]})]}),j==="store"&&D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{className:"panel-heading",children:["💎 ",W.storeTitle]}),D.jsx("p",{className:"panel-sub",children:W.storeSubtitle}),D.jsxs("div",{className:"items-scroll-list",children:[__.map(h=>D.jsxs("div",{className:"vip-bundle-card",children:[D.jsxs("div",{className:"vip-bundle-header",children:[D.jsx("span",{className:"vip-icon",children:h.icon}),D.jsxs("div",{children:[D.jsx("div",{className:"vip-title",children:h.name[t]}),D.jsxs("div",{className:"vip-rewards-inline",children:["+",h.gems," 💎 • +",h.coins.toLocaleString()," 🪙"]})]}),D.jsx("button",{className:"vip-buy-btn",onClick:()=>gt(h),children:h.isVipPassBundle&&q?"👑 VIP ACTIVO (+BONO)":h.tag})]}),D.jsx("ul",{className:"vip-perk-list",children:h.perks[t].map((B,ie)=>D.jsxs("li",{children:["✓ ",B]},ie))})]},h.id)),D.jsx("h3",{className:"sub-section-title",children:W.multipliersTitle}),wc.map(h=>{const B=Xe.includes(h.id)||h.isVipOnly&&q;return D.jsxs("div",{className:`item-card ${B?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[D.jsx("div",{className:"item-icon-box",children:h.icon}),D.jsxs("div",{className:"item-info",children:[D.jsx("div",{className:"item-title",children:h.name[t]}),D.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),D.jsx("div",{className:"item-desc",children:h.desc[t]})]}),D.jsx("button",{className:`item-action-btn ${B?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>He(h),children:B?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]})]}),D.jsxs("nav",{className:"bottom-tab-nav",children:[D.jsxs("button",{className:`nav-tab-btn ${j==="home"?"active":""}`,onClick:()=>Gt("home"),children:[D.jsx("span",{className:"nav-ic",children:"🏙️"}),D.jsx("span",{children:W.tabs.home})]}),D.jsxs("button",{className:`nav-tab-btn ${j==="armory"?"active":""}`,onClick:()=>Gt("armory"),children:[D.jsx("span",{className:"nav-ic",children:"⚖️"}),D.jsx("span",{children:W.tabs.armory})]}),D.jsxs("button",{className:`nav-tab-btn ${j==="skins"?"active":""}`,onClick:()=>Gt("skins"),children:[D.jsx("span",{className:"nav-ic",children:"🎭"}),D.jsx("span",{children:W.tabs.skins})]}),D.jsxs("button",{className:`nav-tab-btn ${j==="league"?"active":""}`,onClick:()=>Gt("league"),children:[D.jsx("span",{className:"nav-ic",children:"🏆"}),D.jsx("span",{children:W.tabs.league})]}),D.jsxs("button",{className:`nav-tab-btn ${j==="store"?"active":""}`,onClick:()=>Gt("store"),children:[D.jsx("span",{className:"nav-ic",children:"💎"}),D.jsx("span",{children:W.tabs.store})]})]})]}),F==="paused"&&D.jsx("div",{className:"modal-backdrop",children:D.jsxs("div",{className:"modal-card",children:[D.jsxs("h2",{className:"modal-title",children:["⏸ ",W.pause]}),D.jsxs("p",{className:"modal-subtitle",children:[Ce.city.flag," ",Ce.city.name[t]," — ",W.level," ",o]}),D.jsxs("button",{className:"pause-action-btn primary",onClick:$r,children:["▶ ",W.resume]}),D.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>{Nt.current.running=!1,Ot.updateWind(0),w("menu")},children:["🏠 ",W.backToMenu]})]})}),F==="victory"&&D.jsx("div",{className:"modal-backdrop",children:D.jsxs("div",{className:"modal-card victory",children:[D.jsx("div",{className:"modal-Cover-icon-wrap",children:D.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),D.jsx("h2",{className:"modal-title",children:W.victoryTitle}),D.jsxs("p",{className:"modal-subtitle",children:[Ce.city.flag," ",Ce.city.name[t]," • ",W.level," ",o]}),D.jsxs("div",{className:"rewards-summary-box",children:[D.jsxs("div",{className:"reward-line",children:[D.jsx("span",{children:W.score}),D.jsx("strong",{children:X.scoreEarned.toLocaleString()})]}),D.jsxs("div",{className:"reward-line gold",children:[D.jsx("span",{children:W.coinsEarned}),D.jsxs("strong",{children:["+",X.coinsEarned.toLocaleString()," 🪙"]})]}),X.gemsEarned>0&&D.jsxs("div",{className:"reward-line cyan",children:[D.jsx("span",{children:t==="es"?"Gemas Ganadas":"Gems Earned"}),D.jsxs("strong",{children:["+",X.gemsEarned," 💎"]})]}),D.jsxs("div",{className:"reward-line cyan",children:[D.jsx("span",{children:W.leaguePointsEarned}),D.jsxs("strong",{children:["+",X.lpEarned," 🏆"]})]})]}),!X.doubled&&D.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>le("double"),children:W.doubleRewardsAd}),D.jsxs("button",{className:"pause-action-btn primary",onClick:me,children:[W.nextLevel," (",W.level," ",o+1,") ➔"]}),D.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>w("menu"),children:["🏠 ",W.backToMenu]})]})}),F==="gameover"&&D.jsx("div",{className:"modal-backdrop",children:D.jsxs("div",{className:"modal-card gameover",children:[D.jsx("div",{className:"modal-Cover-icon-wrap",children:D.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),D.jsx("h2",{className:"modal-title",children:W.fallTitle}),D.jsx("p",{className:"modal-subtitle",children:W.fallSub}),D.jsxs("div",{className:"rewards-summary-box",children:[D.jsxs("div",{className:"reward-line",children:[D.jsx("span",{children:W.score}),D.jsx("strong",{children:X.scoreEarned.toLocaleString()})]}),D.jsxs("div",{className:"reward-line gold",children:[D.jsx("span",{children:W.coinsEarned}),D.jsxs("strong",{children:["+",X.coinsEarned.toLocaleString()," 🪙"]})]}),D.jsxs("div",{className:"reward-line cyan",children:[D.jsx("span",{children:W.leaguePointsEarned}),D.jsxs("strong",{children:["+",X.lpEarned," 🏆"]})]})]}),!X.revivedOnce&&D.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>le("revive"),children:W.reviveAd}),D.jsxs("button",{className:"pause-action-btn primary",onClick:Kt,children:["🔄 ",W.retry]}),D.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>w("menu"),children:["🏠 ",W.backToMenu]})]})}),ee&&D.jsx("div",{className:"modal-backdrop ad-layer",children:D.jsxs("div",{className:"modal-card",children:[D.jsx("div",{className:"modal-big-icon",children:"🎬"}),D.jsx("h2",{className:"modal-title",children:W.adWatching}),D.jsx("p",{className:"modal-subtitle",children:he>0?`${W.adSeconds} ${he}s...`:"✅ ¡Listo!"}),D.jsx("button",{className:"pause-action-btn primary",disabled:he>0,onClick:Y,children:he>0?`${he}s`:W.adCollect})]})})]})})}f_.createRoot(document.getElementById("root")).render(D.jsx(s_.StrictMode,{children:D.jsx(ZE,{})}));
