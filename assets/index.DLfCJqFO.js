(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function F0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rd={exports:{}},oo={},sd={exports:{}},zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Zv(){if(Sm)return zt;Sm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function x(O,le,Ee){this.props=O,this.context=le,this.refs=A,this.updater=Ee||M}x.prototype.isReactComponent={},x.prototype.setState=function(O,le){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,le,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=x.prototype;function R(O,le,Ee){this.props=O,this.context=le,this.refs=A,this.updater=Ee||M}var F=R.prototype=new v;F.constructor=R,E(F,x.prototype),F.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function w(O,le,Ee){var Ze,Ke={},je=null,de=null;if(le!=null)for(Ze in le.ref!==void 0&&(de=le.ref),le.key!==void 0&&(je=""+le.key),le)I.call(le,Ze)&&!B.hasOwnProperty(Ze)&&(Ke[Ze]=le[Ze]);var pe=arguments.length-2;if(pe===1)Ke.children=Ee;else if(1<pe){for(var Ie=Array(pe),Qe=0;Qe<pe;Qe++)Ie[Qe]=arguments[Qe+2];Ke.children=Ie}if(O&&O.defaultProps)for(Ze in pe=O.defaultProps,pe)Ke[Ze]===void 0&&(Ke[Ze]=pe[Ze]);return{$$typeof:r,type:O,key:je,ref:de,props:Ke,_owner:N.current}}function L(O,le){return{$$typeof:r,type:O.type,key:le,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function H(O){var le={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ee){return le[Ee]})}var W=/\/+/g;function se(O,le){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):le.toString(36)}function $(O,le,Ee,Ze,Ke){var je=typeof O;(je==="undefined"||je==="boolean")&&(O=null);var de=!1;if(O===null)de=!0;else switch(je){case"string":case"number":de=!0;break;case"object":switch(O.$$typeof){case r:case e:de=!0}}if(de)return de=O,Ke=Ke(de),O=Ze===""?"."+se(de,0):Ze,b(Ke)?(Ee="",O!=null&&(Ee=O.replace(W,"$&/")+"/"),$(Ke,le,Ee,"",function(Qe){return Qe})):Ke!=null&&(z(Ke)&&(Ke=L(Ke,Ee+(!Ke.key||de&&de.key===Ke.key?"":(""+Ke.key).replace(W,"$&/")+"/")+O)),le.push(Ke)),1;if(de=0,Ze=Ze===""?".":Ze+":",b(O))for(var pe=0;pe<O.length;pe++){je=O[pe];var Ie=Ze+se(je,pe);de+=$(je,le,Ee,Ie,Ke)}else if(Ie=_(O),typeof Ie=="function")for(O=Ie.call(O),pe=0;!(je=O.next()).done;)je=je.value,Ie=Ze+se(je,pe++),de+=$(je,le,Ee,Ie,Ke);else if(je==="object")throw le=String(O),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return de}function ne(O,le,Ee){if(O==null)return O;var Ze=[],Ke=0;return $(O,Ze,"","",function(je){return le.call(Ee,je,Ke++)}),Ze}function ge(O){if(O._status===-1){var le=O._result;le=le(),le.then(function(Ee){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ee)},function(Ee){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ee)}),O._status===-1&&(O._status=0,O._result=le)}if(O._status===1)return O._result.default;throw O._result}var oe={current:null},Q={transition:null},ee={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:Q,ReactCurrentOwner:N};function J(){throw Error("act(...) is not supported in production builds of React.")}return zt.Children={map:ne,forEach:function(O,le,Ee){ne(O,function(){le.apply(this,arguments)},Ee)},count:function(O){var le=0;return ne(O,function(){le++}),le},toArray:function(O){return ne(O,function(le){return le})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},zt.Component=x,zt.Fragment=t,zt.Profiler=o,zt.PureComponent=R,zt.StrictMode=s,zt.Suspense=m,zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,zt.act=J,zt.cloneElement=function(O,le,Ee){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ze=E({},O.props),Ke=O.key,je=O.ref,de=O._owner;if(le!=null){if(le.ref!==void 0&&(je=le.ref,de=N.current),le.key!==void 0&&(Ke=""+le.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Ie in le)I.call(le,Ie)&&!B.hasOwnProperty(Ie)&&(Ze[Ie]=le[Ie]===void 0&&pe!==void 0?pe[Ie]:le[Ie])}var Ie=arguments.length-2;if(Ie===1)Ze.children=Ee;else if(1<Ie){pe=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)pe[Qe]=arguments[Qe+2];Ze.children=pe}return{$$typeof:r,type:O.type,key:Ke,ref:je,props:Ze,_owner:de}},zt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},zt.createElement=w,zt.createFactory=function(O){var le=w.bind(null,O);return le.type=O,le},zt.createRef=function(){return{current:null}},zt.forwardRef=function(O){return{$$typeof:f,render:O}},zt.isValidElement=z,zt.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:ge}},zt.memo=function(O,le){return{$$typeof:p,type:O,compare:le===void 0?null:le}},zt.startTransition=function(O){var le=Q.transition;Q.transition={};try{O()}finally{Q.transition=le}},zt.unstable_act=J,zt.useCallback=function(O,le){return oe.current.useCallback(O,le)},zt.useContext=function(O){return oe.current.useContext(O)},zt.useDebugValue=function(){},zt.useDeferredValue=function(O){return oe.current.useDeferredValue(O)},zt.useEffect=function(O,le){return oe.current.useEffect(O,le)},zt.useId=function(){return oe.current.useId()},zt.useImperativeHandle=function(O,le,Ee){return oe.current.useImperativeHandle(O,le,Ee)},zt.useInsertionEffect=function(O,le){return oe.current.useInsertionEffect(O,le)},zt.useLayoutEffect=function(O,le){return oe.current.useLayoutEffect(O,le)},zt.useMemo=function(O,le){return oe.current.useMemo(O,le)},zt.useReducer=function(O,le,Ee){return oe.current.useReducer(O,le,Ee)},zt.useRef=function(O){return oe.current.useRef(O)},zt.useState=function(O){return oe.current.useState(O)},zt.useSyncExternalStore=function(O,le,Ee){return oe.current.useSyncExternalStore(O,le,Ee)},zt.useTransition=function(){return oe.current.useTransition()},zt.version="18.3.1",zt}var ym;function Of(){return ym||(ym=1,sd.exports=Zv()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Jv(){if(Mm)return oo;Mm=1;var r=Of(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var S,y={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(S in m)s.call(m,S)&&!l.hasOwnProperty(S)&&(y[S]=m[S]);if(f&&f.defaultProps)for(S in m=f.defaultProps,m)y[S]===void 0&&(y[S]=m[S]);return{$$typeof:e,type:f,key:_,ref:M,props:y,_owner:o.current}}return oo.Fragment=t,oo.jsx=u,oo.jsxs=u,oo}var Em;function Qv(){return Em||(Em=1,rd.exports=Jv()),rd.exports}var U=Qv(),ct=Of();const e_=F0(ct);var Pl={},ad={exports:{}},ci={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function t_(){return wm||(wm=1,(function(r){function e(Q,ee){var J=Q.length;Q.push(ee);e:for(;0<J;){var O=J-1>>>1,le=Q[O];if(0<o(le,ee))Q[O]=ee,Q[J]=le,J=O;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ee=Q[0],J=Q.pop();if(J!==ee){Q[0]=J;e:for(var O=0,le=Q.length,Ee=le>>>1;O<Ee;){var Ze=2*(O+1)-1,Ke=Q[Ze],je=Ze+1,de=Q[je];if(0>o(Ke,J))je<le&&0>o(de,Ke)?(Q[O]=de,Q[je]=J,O=je):(Q[O]=Ke,Q[Ze]=J,O=Ze);else if(je<le&&0>o(de,J))Q[O]=de,Q[je]=J,O=je;else break e}}return ee}function o(Q,ee){var J=Q.sortIndex-ee.sortIndex;return J!==0?J:Q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var m=[],p=[],S=1,y=null,_=3,M=!1,E=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Q){for(var ee=t(p);ee!==null;){if(ee.callback===null)s(p);else if(ee.startTime<=Q)s(p),ee.sortIndex=ee.expirationTime,e(m,ee);else break;ee=t(p)}}function b(Q){if(A=!1,F(Q),!E)if(t(m)!==null)E=!0,ge(I);else{var ee=t(p);ee!==null&&oe(b,ee.startTime-Q)}}function I(Q,ee){E=!1,A&&(A=!1,v(w),w=-1),M=!0;var J=_;try{for(F(ee),y=t(m);y!==null&&(!(y.expirationTime>ee)||Q&&!H());){var O=y.callback;if(typeof O=="function"){y.callback=null,_=y.priorityLevel;var le=O(y.expirationTime<=ee);ee=r.unstable_now(),typeof le=="function"?y.callback=le:y===t(m)&&s(m),F(ee)}else s(m);y=t(m)}if(y!==null)var Ee=!0;else{var Ze=t(p);Ze!==null&&oe(b,Ze.startTime-ee),Ee=!1}return Ee}finally{y=null,_=J,M=!1}}var N=!1,B=null,w=-1,L=5,z=-1;function H(){return!(r.unstable_now()-z<L)}function W(){if(B!==null){var Q=r.unstable_now();z=Q;var ee=!0;try{ee=B(!0,Q)}finally{ee?se():(N=!1,B=null)}}else N=!1}var se;if(typeof R=="function")se=function(){R(W)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ne=$.port2;$.port1.onmessage=W,se=function(){ne.postMessage(null)}}else se=function(){x(W,0)};function ge(Q){B=Q,N||(N=!0,se())}function oe(Q,ee){w=x(function(){Q(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,ge(I))},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(Q){switch(_){case 1:case 2:case 3:var ee=3;break;default:ee=_}var J=_;_=ee;try{return Q()}finally{_=J}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Q,ee){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var J=_;_=Q;try{return ee()}finally{_=J}},r.unstable_scheduleCallback=function(Q,ee,J){var O=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?O+J:O):J=O,Q){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,Q={id:S++,callback:ee,priorityLevel:Q,startTime:J,expirationTime:le,sortIndex:-1},J>O?(Q.sortIndex=J,e(p,Q),t(m)===null&&Q===t(p)&&(A?(v(w),w=-1):A=!0,oe(b,J-O))):(Q.sortIndex=le,e(m,Q),E||M||(E=!0,ge(I))),Q},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(Q){var ee=_;return function(){var J=_;_=ee;try{return Q.apply(this,arguments)}finally{_=J}}}})(ld)),ld}var Tm;function n_(){return Tm||(Tm=1,od.exports=t_()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function i_(){if(Am)return ci;Am=1;var r=Of(),e=n_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},y={};function _(n){return m.call(y,n)?!0:m.call(S,n)?!1:p.test(n)?y[n]=!0:(S[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,R);x[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,R);x[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,R);x[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),Q=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,O;function le(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ee=!1;function Ze(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),g=c.stack.split(`
`),C=d.length-1,V=g.length-1;1<=C&&0<=V&&d[C]!==g[V];)V--;for(;1<=C&&0<=V;C--,V--)if(d[C]!==g[V]){if(C!==1||V!==1)do if(C--,V--,0>V||d[C]!==g[V]){var X=`
`+d[C].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=C&&0<=V);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Ke(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ze(n.type,!1),n;case 11:return n=Ze(n.type.render,!1),n;case 1:return n=Ze(n.type,!0),n;default:return""}}function je(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case N:return"Portal";case L:return"Profiler";case w:return"StrictMode";case se:return"Suspense";case $:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:je(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return je(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(C){c=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ge(n){n._valueTracker||(n._valueTracker=Qe(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function qt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function At(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Pt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Mt(n,i){Pt(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||qt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _t=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Et(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_t(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function Qt(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function bt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?k(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function _e(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function ie(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ie(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Le=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ce(n,i){if(i){if(Le[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Oe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Je=null,G=null;function Fe(n){if(n=qa(n)){if(typeof Se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xo(i),Se(n.stateNode,n.type,i))}}function xe(n){Je?G?G.push(n):G=[n]:Je=n}function De(){if(Je){var n=Je,i=G;if(G=Je=null,Fe(n),i)for(n=0;n<i.length;n++)Fe(i[n])}}function Be(n,i){return n(i)}function ye(){}var $e=!1;function qe(n,i,a){if($e)return n(i,a);$e=!0;try{return Be(n,i,a)}finally{$e=!1,(Je!==null||G!==null)&&(ye(),De())}}function Lt(n,i){var a=n.stateNode;if(a===null)return null;var c=Xo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Xe=!1;if(f)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){Xe=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{Xe=!1}function In(n,i,a,c,d,g,C,V,X){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(Re){this.onError(Re)}}var Ei=!1,wi=null,bn=!1,Jn=null,Qn={onError:function(n){Ei=!0,wi=n}};function $t(n,i,a,c,d,g,C,V,X){Ei=!1,wi=null,In.apply(Qn,arguments)}function yn(n,i,a,c,d,g,C,V,X){if($t.apply(this,arguments),Ei){if(Ei){var ve=wi;Ei=!1,wi=null}else throw Error(t(198));bn||(bn=!0,Jn=ve)}}function on(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ui(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Oi(n){if(on(n)!==n)throw Error(t(188))}function Fi(n){var i=n.alternate;if(!i){if(i=on(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Oi(d),n;if(g===c)return Oi(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var C=!1,V=d.child;V;){if(V===a){C=!0,a=d,c=g;break}if(V===c){C=!0,c=d,a=g;break}V=V.sibling}if(!C){for(V=g.child;V;){if(V===a){C=!0,a=g,c=d;break}if(V===c){C=!0,c=g,a=d;break}V=V.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function kn(n){return n=Fi(n),n!==null?Ti(n):null}function Ti(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ti(n);if(i!==null)return i;n=n.sibling}return null}var Dn=e.unstable_scheduleCallback,Ji=e.unstable_cancelCallback,gr=e.unstable_shouldYield,Fr=e.unstable_requestPaint,Zt=e.unstable_now,Qi=e.unstable_getCurrentPriorityLevel,er=e.unstable_ImmediatePriority,Bi=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,j=e.unstable_LowPriority,me=e.unstable_IdlePriority,ce=null,re=null;function He(n){if(re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:it,We=Math.log,nt=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(We(n)/nt|0)|0}var St=64,h=4194304;function D(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Y(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var V=C&~d;V!==0?c=D(V):(g&=C,g!==0&&(c=D(g)))}else C=a&~d,C!==0?c=D(C):g!==0&&(c=D(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),d=1<<a,c|=n[a],i&=~d;return c}function Pe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-Ve(g),V=1<<C,X=d[C];X===-1?((V&a)===0||(V&c)!==0)&&(d[C]=Pe(V,i)):X<=i&&(n.expiredLanes|=V),g&=~V}}function be(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ot(){var n=St;return St<<=1,(St&4194240)===0&&(St=64),n}function Ae(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function yt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function st(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ve(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Ht(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ut=0;function Rt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dt,mt,Jt,Un,kt,zn=!1,Vn=[],Gn=null,tr=null,nr=null,Br=new Map,ds=new Map,ir=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lo(n,i){switch(n){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(i.pointerId)}}function kr(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=qa(i),i!==null&&mt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Cc(n,i,a,c,d){switch(i){case"focusin":return Gn=kr(Gn,n,i,a,c,d),!0;case"dragenter":return tr=kr(tr,n,i,a,c,d),!0;case"mouseover":return nr=kr(nr,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Br.set(g,kr(Br.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ds.set(g,kr(ds.get(g)||null,n,i,a,c,d)),!0}return!1}function Da(n){var i=gs(n.target);if(i!==null){var a=on(i);if(a!==null){if(i=a.tag,i===13){if(i=Ui(a),i!==null){n.blockedOn=i,kt(n.priority,function(){Jt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fs(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Me=c,a.target.dispatchEvent(c),Me=null}else return i=qa(a),i!==null&&mt(i),n.blockedOn=a,!1;i.shift()}return!0}function No(n,i,a){fs(n)&&a.delete(i)}function Pc(){zn=!1,Gn!==null&&fs(Gn)&&(Gn=null),tr!==null&&fs(tr)&&(tr=null),nr!==null&&fs(nr)&&(nr=null),Br.forEach(No),ds.forEach(No)}function hs(n,i){n.blockedOn===i&&(n.blockedOn=null,zn||(zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pc)))}function ps(n){function i(d){return hs(d,n)}if(0<Vn.length){hs(Vn[0],n);for(var a=1;a<Vn.length;a++){var c=Vn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Gn!==null&&hs(Gn,n),tr!==null&&hs(tr,n),nr!==null&&hs(nr,n),Br.forEach(i),ds.forEach(i),a=0;a<ir.length;a++)c=ir[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Da(a),a.blockedOn===null&&ir.shift()}var Ut=b.ReactCurrentBatchConfig,ln=!0;function vr(n,i,a,c){var d=ut,g=Ut.transition;Ut.transition=null;try{ut=1,hi(n,i,a,c)}finally{ut=d,Ut.transition=g}}function Io(n,i,a,c){var d=ut,g=Ut.transition;Ut.transition=null;try{ut=4,hi(n,i,a,c)}finally{ut=d,Ut.transition=g}}function hi(n,i,a,c){if(ln){var d=Lc(n,i,a,c);if(d===null)jc(n,i,c,ms,a),Lo(n,c);else if(Cc(d,n,i,a,c))c.stopPropagation();else if(Lo(n,c),i&4&&-1<Rc.indexOf(n)){for(;d!==null;){var g=qa(d);if(g!==null&&Dt(g),g=Lc(n,i,a,c),g===null&&jc(n,i,c,ms,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else jc(n,i,c,null,a)}}var ms=null;function Lc(n,i,a,c){if(ms=null,n=et(c),n=gs(n),n!==null)if(i=on(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ui(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ms=n,null}function ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qi()){case er:return 1;case Bi:return 4;case P:case j:return 16;case me:return 536870912;default:return 16}default:return 16}}var zr=null,Nc=null,Do=null;function oh(){if(Do)return Do;var n,i=Nc,a=i.length,c,d="value"in zr?zr.value:zr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===d[g-c];c++);return Do=d.slice(n,1<c?1-c:void 0)}function Uo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Oo(){return!0}function lh(){return!1}function pi(n){function i(a,c,d,g,C){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Oo:lh,this.isPropagationStopped=lh,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=pi(Hs),Ua=J({},Hs,{view:0,detail:0}),wg=pi(Ua),Dc,Uc,Oa,Fo=J({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oa&&(Oa&&n.type==="mousemove"?(Dc=n.screenX-Oa.screenX,Uc=n.screenY-Oa.screenY):Uc=Dc=0,Oa=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Uc}}),ch=pi(Fo),Tg=J({},Fo,{dataTransfer:0}),Ag=pi(Tg),bg=J({},Ua,{relatedTarget:0}),Oc=pi(bg),Rg=J({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Cg=pi(Rg),Pg=J({},Hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lg=pi(Pg),Ng=J({},Hs,{data:0}),uh=pi(Ng),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ug[n])?!!i[n]:!1}function Fc(){return Og}var Fg=J({},Ua,{key:function(n){if(n.key){var i=Ig[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Uo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(n){return n.type==="keypress"?Uo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Bg=pi(Fg),kg=J({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=pi(kg),zg=J({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),Vg=pi(zg),Gg=J({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hg=pi(Gg),Wg=J({},Fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=pi(Wg),qg=[9,13,27,32],Bc=f&&"CompositionEvent"in window,Fa=null;f&&"documentMode"in document&&(Fa=document.documentMode);var $g=f&&"TextEvent"in window&&!Fa,fh=f&&(!Bc||Fa&&8<Fa&&11>=Fa),hh=" ",ph=!1;function mh(n,i){switch(n){case"keyup":return qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ws=!1;function jg(n,i){switch(n){case"compositionend":return gh(i);case"keypress":return i.which!==32?null:(ph=!0,hh);case"textInput":return n=i.data,n===hh&&ph?null:n;default:return null}}function Yg(n,i){if(Ws)return n==="compositionend"||!Bc&&mh(n,i)?(n=oh(),Do=Nc=zr=null,Ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fh&&i.locale!=="ko"?null:i.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Kg[n.type]:i==="textarea"}function _h(n,i,a,c){xe(c),i=Go(i,"onChange"),0<i.length&&(a=new Ic("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ba=null,ka=null;function Zg(n){Oh(n,0)}function Bo(n){var i=Ys(n);if(pt(i))return n}function Jg(n,i){if(n==="change")return i}var xh=!1;if(f){var kc;if(f){var zc="oninput"in document;if(!zc){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),zc=typeof Sh.oninput=="function"}kc=zc}else kc=!1;xh=kc&&(!document.documentMode||9<document.documentMode)}function yh(){Ba&&(Ba.detachEvent("onpropertychange",Mh),ka=Ba=null)}function Mh(n){if(n.propertyName==="value"&&Bo(ka)){var i=[];_h(i,ka,n,et(n)),qe(Zg,i)}}function Qg(n,i,a){n==="focusin"?(yh(),Ba=i,ka=a,Ba.attachEvent("onpropertychange",Mh)):n==="focusout"&&yh()}function ev(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bo(ka)}function tv(n,i){if(n==="click")return Bo(i)}function nv(n,i){if(n==="input"||n==="change")return Bo(i)}function iv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ki=typeof Object.is=="function"?Object.is:iv;function za(n,i){if(ki(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!ki(n[d],i[d]))return!1}return!0}function Eh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wh(n,i){var a=Eh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Eh(a)}}function Th(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Th(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ah(){for(var n=window,i=qt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=qt(n.document)}return i}function Vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rv(n){var i=Ah(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Th(a.ownerDocument.documentElement,a)){if(c!==null&&Vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=wh(a,g);var C=wh(a,c);d&&C&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sv=f&&"documentMode"in document&&11>=document.documentMode,Xs=null,Gc=null,Va=null,Hc=!1;function bh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||Xs==null||Xs!==qt(c)||(c=Xs,"selectionStart"in c&&Vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Va&&za(Va,c)||(Va=c,c=Go(Gc,"onSelect"),0<c.length&&(i=new Ic("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Xs)))}function ko(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Wc={},Rh={};f&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function zo(n){if(Wc[n])return Wc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Rh)return Wc[n]=i[a];return n}var Ch=zo("animationend"),Ph=zo("animationiteration"),Lh=zo("animationstart"),Nh=zo("transitionend"),Ih=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(n,i){Ih.set(n,i),l(i,[n])}for(var Xc=0;Xc<Dh.length;Xc++){var qc=Dh[Xc],av=qc.toLowerCase(),ov=qc[0].toUpperCase()+qc.slice(1);Vr(av,"on"+ov)}Vr(Ch,"onAnimationEnd"),Vr(Ph,"onAnimationIteration"),Vr(Lh,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(Nh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Uh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,yn(c,i,void 0,n),n.currentTarget=null}function Oh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var C=c.length-1;0<=C;C--){var V=c[C],X=V.instance,ve=V.currentTarget;if(V=V.listener,X!==g&&d.isPropagationStopped())break e;Uh(d,V,ve),g=X}else for(C=0;C<c.length;C++){if(V=c[C],X=V.instance,ve=V.currentTarget,V=V.listener,X!==g&&d.isPropagationStopped())break e;Uh(d,V,ve),g=X}}}if(bn)throw n=Jn,bn=!1,Jn=null,n}function sn(n,i){var a=i[eu];a===void 0&&(a=i[eu]=new Set);var c=n+"__bubble";a.has(c)||(Fh(i,n,2,!1),a.add(c))}function $c(n,i,a){var c=0;i&&(c|=4),Fh(a,n,c,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ha(n){if(!n[Vo]){n[Vo]=!0,s.forEach(function(a){a!=="selectionchange"&&(lv.has(a)||$c(a,!1,n),$c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,$c("selectionchange",!1,i))}}function Fh(n,i,a,c){switch(ah(i)){case 1:var d=vr;break;case 4:d=Io;break;default:d=hi}a=d.bind(null,i,a,n),d=void 0,!Xe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function jc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(C===4)for(C=c.return;C!==null;){var X=C.tag;if((X===3||X===4)&&(X=C.stateNode.containerInfo,X===d||X.nodeType===8&&X.parentNode===d))return;C=C.return}for(;V!==null;){if(C=gs(V),C===null)return;if(X=C.tag,X===5||X===6){c=g=C;continue e}V=V.parentNode}}c=c.return}qe(function(){var ve=g,Re=et(a),Ue=[];e:{var Te=Ih.get(n);if(Te!==void 0){var tt=Ic,at=n;switch(n){case"keypress":if(Uo(a)===0)break e;case"keydown":case"keyup":tt=Bg;break;case"focusin":at="focus",tt=Oc;break;case"focusout":at="blur",tt=Oc;break;case"beforeblur":case"afterblur":tt=Oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Vg;break;case Ch:case Ph:case Lh:tt=Cg;break;case Nh:tt=Hg;break;case"scroll":tt=wg;break;case"wheel":tt=Xg;break;case"copy":case"cut":case"paste":tt=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=dh}var lt=(i&4)!==0,_n=!lt&&n==="scroll",fe=lt?Te!==null?Te+"Capture":null:Te;lt=[];for(var Z=ve,he;Z!==null;){he=Z;var ze=he.stateNode;if(he.tag===5&&ze!==null&&(he=ze,fe!==null&&(ze=Lt(Z,fe),ze!=null&&lt.push(Wa(Z,ze,he)))),_n)break;Z=Z.return}0<lt.length&&(Te=new tt(Te,at,null,a,Re),Ue.push({event:Te,listeners:lt}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",tt=n==="mouseout"||n==="pointerout",Te&&a!==Me&&(at=a.relatedTarget||a.fromElement)&&(gs(at)||at[_r]))break e;if((tt||Te)&&(Te=Re.window===Re?Re:(Te=Re.ownerDocument)?Te.defaultView||Te.parentWindow:window,tt?(at=a.relatedTarget||a.toElement,tt=ve,at=at?gs(at):null,at!==null&&(_n=on(at),at!==_n||at.tag!==5&&at.tag!==6)&&(at=null)):(tt=null,at=ve),tt!==at)){if(lt=ch,ze="onMouseLeave",fe="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(lt=dh,ze="onPointerLeave",fe="onPointerEnter",Z="pointer"),_n=tt==null?Te:Ys(tt),he=at==null?Te:Ys(at),Te=new lt(ze,Z+"leave",tt,a,Re),Te.target=_n,Te.relatedTarget=he,ze=null,gs(Re)===ve&&(lt=new lt(fe,Z+"enter",at,a,Re),lt.target=he,lt.relatedTarget=_n,ze=lt),_n=ze,tt&&at)t:{for(lt=tt,fe=at,Z=0,he=lt;he;he=$s(he))Z++;for(he=0,ze=fe;ze;ze=$s(ze))he++;for(;0<Z-he;)lt=$s(lt),Z--;for(;0<he-Z;)fe=$s(fe),he--;for(;Z--;){if(lt===fe||fe!==null&&lt===fe.alternate)break t;lt=$s(lt),fe=$s(fe)}lt=null}else lt=null;tt!==null&&Bh(Ue,Te,tt,lt,!1),at!==null&&_n!==null&&Bh(Ue,_n,at,lt,!0)}}e:{if(Te=ve?Ys(ve):window,tt=Te.nodeName&&Te.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Te.type==="file")var dt=Jg;else if(vh(Te))if(xh)dt=nv;else{dt=ev;var gt=Qg}else(tt=Te.nodeName)&&tt.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(dt=tv);if(dt&&(dt=dt(n,ve))){_h(Ue,dt,a,Re);break e}gt&&gt(n,Te,ve),n==="focusout"&&(gt=Te._wrapperState)&&gt.controlled&&Te.type==="number"&&Gt(Te,"number",Te.value)}switch(gt=ve?Ys(ve):window,n){case"focusin":(vh(gt)||gt.contentEditable==="true")&&(Xs=gt,Gc=ve,Va=null);break;case"focusout":Va=Gc=Xs=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,bh(Ue,a,Re);break;case"selectionchange":if(sv)break;case"keydown":case"keyup":bh(Ue,a,Re)}var vt;if(Bc)e:{switch(n){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Ws?mh(n,a)&&(Tt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(fh&&a.locale!=="ko"&&(Ws||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Ws&&(vt=oh()):(zr=Re,Nc="value"in zr?zr.value:zr.textContent,Ws=!0)),gt=Go(ve,Tt),0<gt.length&&(Tt=new uh(Tt,n,null,a,Re),Ue.push({event:Tt,listeners:gt}),vt?Tt.data=vt:(vt=gh(a),vt!==null&&(Tt.data=vt)))),(vt=$g?jg(n,a):Yg(n,a))&&(ve=Go(ve,"onBeforeInput"),0<ve.length&&(Re=new uh("onBeforeInput","beforeinput",null,a,Re),Ue.push({event:Re,listeners:ve}),Re.data=vt))}Oh(Ue,i)})}function Wa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Go(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Lt(n,a),g!=null&&c.unshift(Wa(n,g,d)),g=Lt(n,i),g!=null&&c.push(Wa(n,g,d))),n=n.return}return c}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bh(n,i,a,c,d){for(var g=i._reactName,C=[];a!==null&&a!==c;){var V=a,X=V.alternate,ve=V.stateNode;if(X!==null&&X===c)break;V.tag===5&&ve!==null&&(V=ve,d?(X=Lt(a,g),X!=null&&C.unshift(Wa(a,X,V))):d||(X=Lt(a,g),X!=null&&C.push(Wa(a,X,V)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var cv=/\r\n?/g,uv=/\u0000|\uFFFD/g;function kh(n){return(typeof n=="string"?n:""+n).replace(cv,`
`).replace(uv,"")}function Ho(n,i,a){if(i=kh(i),kh(n)!==i&&a)throw Error(t(425))}function Wo(){}var Yc=null,Kc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(n){return zh.resolve(null).then(n).catch(hv)}:Jc;function hv(n){setTimeout(function(){throw n})}function Qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ps(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ps(i)}function Gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Vh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),rr="__reactFiber$"+js,Xa="__reactProps$"+js,_r="__reactContainer$"+js,eu="__reactEvents$"+js,pv="__reactListeners$"+js,mv="__reactHandles$"+js;function gs(n){var i=n[rr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[_r]||a[rr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Vh(n);n!==null;){if(a=n[rr])return a;n=Vh(n)}return i}n=a,a=n.parentNode}return null}function qa(n){return n=n[rr]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xo(n){return n[Xa]||null}var tu=[],Ks=-1;function Hr(n){return{current:n}}function an(n){0>Ks||(n.current=tu[Ks],tu[Ks]=null,Ks--)}function rn(n,i){Ks++,tu[Ks]=n.current,n.current=i}var Wr={},Hn=Hr(Wr),ri=Hr(!1),vs=Wr;function Zs(n,i){var a=n.type.contextTypes;if(!a)return Wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function si(n){return n=n.childContextTypes,n!=null}function qo(){an(ri),an(Hn)}function Gh(n,i,a){if(Hn.current!==Wr)throw Error(t(168));rn(Hn,i),rn(ri,a)}function Hh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,de(n)||"Unknown",d));return J({},a,c)}function $o(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,vs=Hn.current,rn(Hn,n),rn(ri,ri.current),!0}function Wh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Hh(n,i,vs),c.__reactInternalMemoizedMergedChildContext=n,an(ri),an(Hn),rn(Hn,n)):an(ri),rn(ri,a)}var xr=null,jo=!1,nu=!1;function Xh(n){xr===null?xr=[n]:xr.push(n)}function gv(n){jo=!0,Xh(n)}function Xr(){if(!nu&&xr!==null){nu=!0;var n=0,i=ut;try{var a=xr;for(ut=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}xr=null,jo=!1}catch(d){throw xr!==null&&(xr=xr.slice(n+1)),Dn(er,Xr),d}finally{ut=i,nu=!1}}return null}var Js=[],Qs=0,Yo=null,Ko=0,Ai=[],bi=0,_s=null,Sr=1,yr="";function xs(n,i){Js[Qs++]=Ko,Js[Qs++]=Yo,Yo=n,Ko=i}function qh(n,i,a){Ai[bi++]=Sr,Ai[bi++]=yr,Ai[bi++]=_s,_s=n;var c=Sr;n=yr;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var g=32-Ve(i)+d;if(30<g){var C=d-d%5;g=(c&(1<<C)-1).toString(32),c>>=C,d-=C,Sr=1<<32-Ve(i)+d|a<<d|c,yr=g+n}else Sr=1<<g|a<<d|c,yr=n}function iu(n){n.return!==null&&(xs(n,1),qh(n,1,0))}function ru(n){for(;n===Yo;)Yo=Js[--Qs],Js[Qs]=null,Ko=Js[--Qs],Js[Qs]=null;for(;n===_s;)_s=Ai[--bi],Ai[bi]=null,yr=Ai[--bi],Ai[bi]=null,Sr=Ai[--bi],Ai[bi]=null}var mi=null,gi=null,cn=!1,zi=null;function $h(n,i){var a=Li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function jh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=Gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=_s!==null?{id:Sr,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mi=n,gi=null,!0):!1;default:return!1}}function su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function au(n){if(cn){var i=gi;if(i){var a=i;if(!jh(n,i)){if(su(n))throw Error(t(418));i=Gr(a.nextSibling);var c=mi;i&&jh(n,i)?$h(c,a):(n.flags=n.flags&-4097|2,cn=!1,mi=n)}}else{if(su(n))throw Error(t(418));n.flags=n.flags&-4097|2,cn=!1,mi=n}}}function Yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function Zo(n){if(n!==mi)return!1;if(!cn)return Yh(n),cn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=gi)){if(su(n))throw Kh(),Error(t(418));for(;i;)$h(n,i),i=Gr(i.nextSibling)}if(Yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gi=Gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?Gr(n.stateNode.nextSibling):null;return!0}function Kh(){for(var n=gi;n;)n=Gr(n.nextSibling)}function ea(){gi=mi=null,cn=!1}function ou(n){zi===null?zi=[n]:zi.push(n)}var vv=b.ReactCurrentBatchConfig;function $a(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var V=d.refs;C===null?delete V[g]:V[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Zh(n){var i=n._init;return i(n._payload)}function Jh(n){function i(fe,Z){if(n){var he=fe.deletions;he===null?(fe.deletions=[Z],fe.flags|=16):he.push(Z)}}function a(fe,Z){if(!n)return null;for(;Z!==null;)i(fe,Z),Z=Z.sibling;return null}function c(fe,Z){for(fe=new Map;Z!==null;)Z.key!==null?fe.set(Z.key,Z):fe.set(Z.index,Z),Z=Z.sibling;return fe}function d(fe,Z){return fe=Qr(fe,Z),fe.index=0,fe.sibling=null,fe}function g(fe,Z,he){return fe.index=he,n?(he=fe.alternate,he!==null?(he=he.index,he<Z?(fe.flags|=2,Z):he):(fe.flags|=2,Z)):(fe.flags|=1048576,Z)}function C(fe){return n&&fe.alternate===null&&(fe.flags|=2),fe}function V(fe,Z,he,ze){return Z===null||Z.tag!==6?(Z=Ju(he,fe.mode,ze),Z.return=fe,Z):(Z=d(Z,he),Z.return=fe,Z)}function X(fe,Z,he,ze){var dt=he.type;return dt===B?Re(fe,Z,he.props.children,ze,he.key):Z!==null&&(Z.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ge&&Zh(dt)===Z.type)?(ze=d(Z,he.props),ze.ref=$a(fe,Z,he),ze.return=fe,ze):(ze=Ml(he.type,he.key,he.props,null,fe.mode,ze),ze.ref=$a(fe,Z,he),ze.return=fe,ze)}function ve(fe,Z,he,ze){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==he.containerInfo||Z.stateNode.implementation!==he.implementation?(Z=Qu(he,fe.mode,ze),Z.return=fe,Z):(Z=d(Z,he.children||[]),Z.return=fe,Z)}function Re(fe,Z,he,ze,dt){return Z===null||Z.tag!==7?(Z=bs(he,fe.mode,ze,dt),Z.return=fe,Z):(Z=d(Z,he),Z.return=fe,Z)}function Ue(fe,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Ju(""+Z,fe.mode,he),Z.return=fe,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case I:return he=Ml(Z.type,Z.key,Z.props,null,fe.mode,he),he.ref=$a(fe,null,Z),he.return=fe,he;case N:return Z=Qu(Z,fe.mode,he),Z.return=fe,Z;case ge:var ze=Z._init;return Ue(fe,ze(Z._payload),he)}if(_t(Z)||ee(Z))return Z=bs(Z,fe.mode,he,null),Z.return=fe,Z;Jo(fe,Z)}return null}function Te(fe,Z,he,ze){var dt=Z!==null?Z.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return dt!==null?null:V(fe,Z,""+he,ze);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case I:return he.key===dt?X(fe,Z,he,ze):null;case N:return he.key===dt?ve(fe,Z,he,ze):null;case ge:return dt=he._init,Te(fe,Z,dt(he._payload),ze)}if(_t(he)||ee(he))return dt!==null?null:Re(fe,Z,he,ze,null);Jo(fe,he)}return null}function tt(fe,Z,he,ze,dt){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return fe=fe.get(he)||null,V(Z,fe,""+ze,dt);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case I:return fe=fe.get(ze.key===null?he:ze.key)||null,X(Z,fe,ze,dt);case N:return fe=fe.get(ze.key===null?he:ze.key)||null,ve(Z,fe,ze,dt);case ge:var gt=ze._init;return tt(fe,Z,he,gt(ze._payload),dt)}if(_t(ze)||ee(ze))return fe=fe.get(he)||null,Re(Z,fe,ze,dt,null);Jo(Z,ze)}return null}function at(fe,Z,he,ze){for(var dt=null,gt=null,vt=Z,Tt=Z=0,Pn=null;vt!==null&&Tt<he.length;Tt++){vt.index>Tt?(Pn=vt,vt=null):Pn=vt.sibling;var Yt=Te(fe,vt,he[Tt],ze);if(Yt===null){vt===null&&(vt=Pn);break}n&&vt&&Yt.alternate===null&&i(fe,vt),Z=g(Yt,Z,Tt),gt===null?dt=Yt:gt.sibling=Yt,gt=Yt,vt=Pn}if(Tt===he.length)return a(fe,vt),cn&&xs(fe,Tt),dt;if(vt===null){for(;Tt<he.length;Tt++)vt=Ue(fe,he[Tt],ze),vt!==null&&(Z=g(vt,Z,Tt),gt===null?dt=vt:gt.sibling=vt,gt=vt);return cn&&xs(fe,Tt),dt}for(vt=c(fe,vt);Tt<he.length;Tt++)Pn=tt(vt,fe,Tt,he[Tt],ze),Pn!==null&&(n&&Pn.alternate!==null&&vt.delete(Pn.key===null?Tt:Pn.key),Z=g(Pn,Z,Tt),gt===null?dt=Pn:gt.sibling=Pn,gt=Pn);return n&&vt.forEach(function(es){return i(fe,es)}),cn&&xs(fe,Tt),dt}function lt(fe,Z,he,ze){var dt=ee(he);if(typeof dt!="function")throw Error(t(150));if(he=dt.call(he),he==null)throw Error(t(151));for(var gt=dt=null,vt=Z,Tt=Z=0,Pn=null,Yt=he.next();vt!==null&&!Yt.done;Tt++,Yt=he.next()){vt.index>Tt?(Pn=vt,vt=null):Pn=vt.sibling;var es=Te(fe,vt,Yt.value,ze);if(es===null){vt===null&&(vt=Pn);break}n&&vt&&es.alternate===null&&i(fe,vt),Z=g(es,Z,Tt),gt===null?dt=es:gt.sibling=es,gt=es,vt=Pn}if(Yt.done)return a(fe,vt),cn&&xs(fe,Tt),dt;if(vt===null){for(;!Yt.done;Tt++,Yt=he.next())Yt=Ue(fe,Yt.value,ze),Yt!==null&&(Z=g(Yt,Z,Tt),gt===null?dt=Yt:gt.sibling=Yt,gt=Yt);return cn&&xs(fe,Tt),dt}for(vt=c(fe,vt);!Yt.done;Tt++,Yt=he.next())Yt=tt(vt,fe,Tt,Yt.value,ze),Yt!==null&&(n&&Yt.alternate!==null&&vt.delete(Yt.key===null?Tt:Yt.key),Z=g(Yt,Z,Tt),gt===null?dt=Yt:gt.sibling=Yt,gt=Yt);return n&&vt.forEach(function(Kv){return i(fe,Kv)}),cn&&xs(fe,Tt),dt}function _n(fe,Z,he,ze){if(typeof he=="object"&&he!==null&&he.type===B&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case I:e:{for(var dt=he.key,gt=Z;gt!==null;){if(gt.key===dt){if(dt=he.type,dt===B){if(gt.tag===7){a(fe,gt.sibling),Z=d(gt,he.props.children),Z.return=fe,fe=Z;break e}}else if(gt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ge&&Zh(dt)===gt.type){a(fe,gt.sibling),Z=d(gt,he.props),Z.ref=$a(fe,gt,he),Z.return=fe,fe=Z;break e}a(fe,gt);break}else i(fe,gt);gt=gt.sibling}he.type===B?(Z=bs(he.props.children,fe.mode,ze,he.key),Z.return=fe,fe=Z):(ze=Ml(he.type,he.key,he.props,null,fe.mode,ze),ze.ref=$a(fe,Z,he),ze.return=fe,fe=ze)}return C(fe);case N:e:{for(gt=he.key;Z!==null;){if(Z.key===gt)if(Z.tag===4&&Z.stateNode.containerInfo===he.containerInfo&&Z.stateNode.implementation===he.implementation){a(fe,Z.sibling),Z=d(Z,he.children||[]),Z.return=fe,fe=Z;break e}else{a(fe,Z);break}else i(fe,Z);Z=Z.sibling}Z=Qu(he,fe.mode,ze),Z.return=fe,fe=Z}return C(fe);case ge:return gt=he._init,_n(fe,Z,gt(he._payload),ze)}if(_t(he))return at(fe,Z,he,ze);if(ee(he))return lt(fe,Z,he,ze);Jo(fe,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,Z!==null&&Z.tag===6?(a(fe,Z.sibling),Z=d(Z,he),Z.return=fe,fe=Z):(a(fe,Z),Z=Ju(he,fe.mode,ze),Z.return=fe,fe=Z),C(fe)):a(fe,Z)}return _n}var ta=Jh(!0),Qh=Jh(!1),Qo=Hr(null),el=null,na=null,lu=null;function cu(){lu=na=el=null}function uu(n){var i=Qo.current;an(Qo),n._currentValue=i}function du(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ia(n,i){el=n,lu=na=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ai=!0),n.firstContext=null)}function Ri(n){var i=n._currentValue;if(lu!==n)if(n={context:n,memoizedValue:i,next:null},na===null){if(el===null)throw Error(t(308));na=n,el.dependencies={lanes:0,firstContext:n}}else na=na.next=n;return i}var Ss=null;function fu(n){Ss===null?Ss=[n]:Ss.push(n)}function ep(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,fu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Mr(n,c)}function Mr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function $r(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(jt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Mr(n,a)}return d=c.interleaved,d===null?(i.next=i,fu(c)):(i.next=d.next,d.next=i),c.interleaved=i,Mr(n,a)}function tl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ht(n,a)}}function np(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nl(n,i,a,c){var d=n.updateQueue;qr=!1;var g=d.firstBaseUpdate,C=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var X=V,ve=X.next;X.next=null,C===null?g=ve:C.next=ve,C=X;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,V=Re.lastBaseUpdate,V!==C&&(V===null?Re.firstBaseUpdate=ve:V.next=ve,Re.lastBaseUpdate=X))}if(g!==null){var Ue=d.baseState;C=0,Re=ve=X=null,V=g;do{var Te=V.lane,tt=V.eventTime;if((c&Te)===Te){Re!==null&&(Re=Re.next={eventTime:tt,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var at=n,lt=V;switch(Te=i,tt=a,lt.tag){case 1:if(at=lt.payload,typeof at=="function"){Ue=at.call(tt,Ue,Te);break e}Ue=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=lt.payload,Te=typeof at=="function"?at.call(tt,Ue,Te):at,Te==null)break e;Ue=J({},Ue,Te);break e;case 2:qr=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Te=d.effects,Te===null?d.effects=[V]:Te.push(V))}else tt={eventTime:tt,lane:Te,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Re===null?(ve=Re=tt,X=Ue):Re=Re.next=tt,C|=Te;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;Te=V,V=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(Re===null&&(X=Ue),d.baseState=X,d.firstBaseUpdate=ve,d.lastBaseUpdate=Re,i=d.shared.interleaved,i!==null){d=i;do C|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Es|=C,n.lanes=C,n.memoizedState=Ue}}function ip(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ja={},sr=Hr(ja),Ya=Hr(ja),Ka=Hr(ja);function ys(n){if(n===ja)throw Error(t(174));return n}function pu(n,i){switch(rn(Ka,i),rn(Ya,n),rn(sr,ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:T(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=T(i,n)}an(sr),rn(sr,i)}function ra(){an(sr),an(Ya),an(Ka)}function rp(n){ys(Ka.current);var i=ys(sr.current),a=T(i,n.type);i!==a&&(rn(Ya,n),rn(sr,a))}function mu(n){Ya.current===n&&(an(sr),an(Ya))}var fn=Hr(0);function il(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gu=[];function vu(){for(var n=0;n<gu.length;n++)gu[n]._workInProgressVersionPrimary=null;gu.length=0}var rl=b.ReactCurrentDispatcher,_u=b.ReactCurrentBatchConfig,Ms=0,hn=null,Mn=null,Rn=null,sl=!1,Za=!1,Ja=0,_v=0;function Wn(){throw Error(t(321))}function xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ki(n[a],i[a]))return!1;return!0}function Su(n,i,a,c,d,g){if(Ms=g,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rl.current=n===null||n.memoizedState===null?Mv:Ev,n=a(c,d),Za){g=0;do{if(Za=!1,Ja=0,25<=g)throw Error(t(301));g+=1,Rn=Mn=null,i.updateQueue=null,rl.current=wv,n=a(c,d)}while(Za)}if(rl.current=ll,i=Mn!==null&&Mn.next!==null,Ms=0,Rn=Mn=hn=null,sl=!1,i)throw Error(t(300));return n}function yu(){var n=Ja!==0;return Ja=0,n}function ar(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?hn.memoizedState=Rn=n:Rn=Rn.next=n,Rn}function Ci(){if(Mn===null){var n=hn.alternate;n=n!==null?n.memoizedState:null}else n=Mn.next;var i=Rn===null?hn.memoizedState:Rn.next;if(i!==null)Rn=i,Mn=n;else{if(n===null)throw Error(t(310));Mn=n,n={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Rn===null?hn.memoizedState=Rn=n:Rn=Rn.next=n}return Rn}function Qa(n,i){return typeof i=="function"?i(n):i}function Mu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Mn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var C=d.next;d.next=g.next,g.next=C}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=C=null,X=null,ve=g;do{var Re=ve.lane;if((Ms&Re)===Re)X!==null&&(X=X.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var Ue={lane:Re,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};X===null?(V=X=Ue,C=c):X=X.next=Ue,hn.lanes|=Re,Es|=Re}ve=ve.next}while(ve!==null&&ve!==g);X===null?C=c:X.next=V,ki(c,i.memoizedState)||(ai=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=X,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,hn.lanes|=g,Es|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Eu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var C=d=d.next;do g=n(g,C.action),C=C.next;while(C!==d);ki(g,i.memoizedState)||(ai=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function sp(){}function ap(n,i){var a=hn,c=Ci(),d=i(),g=!ki(c.memoizedState,d);if(g&&(c.memoizedState=d,ai=!0),c=c.queue,wu(cp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Rn!==null&&Rn.memoizedState.tag&1){if(a.flags|=2048,eo(9,lp.bind(null,a,c,d,i),void 0,null),Cn===null)throw Error(t(349));(Ms&30)!==0||op(a,i,d)}return d}function op(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function lp(n,i,a,c){i.value=a,i.getSnapshot=c,up(i)&&dp(n)}function cp(n,i,a){return a(function(){up(i)&&dp(n)})}function up(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ki(n,a)}catch{return!0}}function dp(n){var i=Mr(n,1);i!==null&&Wi(i,n,1,-1)}function fp(n){var i=ar();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},i.queue=n,n=n.dispatch=yv.bind(null,hn,n),[i.memoizedState,n]}function eo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function hp(){return Ci().memoizedState}function al(n,i,a,c){var d=ar();hn.flags|=n,d.memoizedState=eo(1|i,a,void 0,c===void 0?null:c)}function ol(n,i,a,c){var d=Ci();c=c===void 0?null:c;var g=void 0;if(Mn!==null){var C=Mn.memoizedState;if(g=C.destroy,c!==null&&xu(c,C.deps)){d.memoizedState=eo(i,a,g,c);return}}hn.flags|=n,d.memoizedState=eo(1|i,a,g,c)}function pp(n,i){return al(8390656,8,n,i)}function wu(n,i){return ol(2048,8,n,i)}function mp(n,i){return ol(4,2,n,i)}function gp(n,i){return ol(4,4,n,i)}function vp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _p(n,i,a){return a=a!=null?a.concat([n]):null,ol(4,4,vp.bind(null,i,n),a)}function Tu(){}function xp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Sp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function yp(n,i,a){return(Ms&21)===0?(n.baseState&&(n.baseState=!1,ai=!0),n.memoizedState=a):(ki(a,i)||(a=ot(),hn.lanes|=a,Es|=a,n.baseState=!0),i)}function xv(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var c=_u.transition;_u.transition={};try{n(!1),i()}finally{ut=a,_u.transition=c}}function Mp(){return Ci().memoizedState}function Sv(n,i,a){var c=Zr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ep(n))wp(i,a);else if(a=ep(n,i,a,c),a!==null){var d=ti();Wi(a,n,c,d),Tp(a,i,c)}}function yv(n,i,a){var c=Zr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ep(n))wp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,V=g(C,a);if(d.hasEagerState=!0,d.eagerState=V,ki(V,C)){var X=i.interleaved;X===null?(d.next=d,fu(i)):(d.next=X.next,X.next=d),i.interleaved=d;return}}catch{}finally{}a=ep(n,i,d,c),a!==null&&(d=ti(),Wi(a,n,c,d),Tp(a,i,c))}}function Ep(n){var i=n.alternate;return n===hn||i!==null&&i===hn}function wp(n,i){Za=sl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Tp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ht(n,a)}}var ll={readContext:Ri,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},Mv={readContext:Ri,useCallback:function(n,i){return ar().memoizedState=[n,i===void 0?null:i],n},useContext:Ri,useEffect:pp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,al(4194308,4,vp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var a=ar();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ar();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Sv.bind(null,hn,n),[c.memoizedState,n]},useRef:function(n){var i=ar();return n={current:n},i.memoizedState=n},useState:fp,useDebugValue:Tu,useDeferredValue:function(n){return ar().memoizedState=n},useTransition:function(){var n=fp(!1),i=n[0];return n=xv.bind(null,n[1]),ar().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=hn,d=ar();if(cn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Cn===null)throw Error(t(349));(Ms&30)!==0||op(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,pp(cp.bind(null,c,g,n),[n]),c.flags|=2048,eo(9,lp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=ar(),i=Cn.identifierPrefix;if(cn){var a=yr,c=Sr;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ja++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_v++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ev={readContext:Ri,useCallback:xp,useContext:Ri,useEffect:wu,useImperativeHandle:_p,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:Sp,useReducer:Mu,useRef:hp,useState:function(){return Mu(Qa)},useDebugValue:Tu,useDeferredValue:function(n){var i=Ci();return yp(i,Mn.memoizedState,n)},useTransition:function(){var n=Mu(Qa)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:sp,useSyncExternalStore:ap,useId:Mp,unstable_isNewReconciler:!1},wv={readContext:Ri,useCallback:xp,useContext:Ri,useEffect:wu,useImperativeHandle:_p,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:Sp,useReducer:Eu,useRef:hp,useState:function(){return Eu(Qa)},useDebugValue:Tu,useDeferredValue:function(n){var i=Ci();return Mn===null?i.memoizedState=n:yp(i,Mn.memoizedState,n)},useTransition:function(){var n=Eu(Qa)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:sp,useSyncExternalStore:ap,useId:Mp,unstable_isNewReconciler:!1};function Vi(n,i){if(n&&n.defaultProps){i=J({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:J({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cl={isMounted:function(n){return(n=n._reactInternals)?on(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ti(),d=Zr(n),g=Er(c,d);g.payload=i,a!=null&&(g.callback=a),i=$r(n,g,d),i!==null&&(Wi(i,n,d,c),tl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ti(),d=Zr(n),g=Er(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=$r(n,g,d),i!==null&&(Wi(i,n,d,c),tl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ti(),c=Zr(n),d=Er(a,c);d.tag=2,i!=null&&(d.callback=i),i=$r(n,d,c),i!==null&&(Wi(i,n,c,a),tl(i,n,c))}};function Ap(n,i,a,c,d,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,C):i.prototype&&i.prototype.isPureReactComponent?!za(a,c)||!za(d,g):!0}function bp(n,i,a){var c=!1,d=Wr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ri(g):(d=si(i)?vs:Hn.current,c=i.contextTypes,g=(c=c!=null)?Zs(n,d):Wr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Rp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function bu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},hu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Ri(g):(g=si(i)?vs:Hn.current,d.context=Zs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Au(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&cl.enqueueReplaceState(d,d.state,null),nl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function sa(n,i){try{var a="",c=i;do a+=Ke(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Ru(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Tv=typeof WeakMap=="function"?WeakMap:Map;function Cp(n,i,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gl||(gl=!0,Wu=c),Cu(n,i)},a}function Pp(n,i,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Cu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Cu(n,i),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function Lp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Tv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=kv.bind(null,n,i,a),i.then(n,n))}function Np(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ip(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Er(-1,1),i.tag=2,$r(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Av=b.ReactCurrentOwner,ai=!1;function ei(n,i,a,c){i.child=n===null?Qh(i,null,a,c):ta(i,n.child,a,c)}function Dp(n,i,a,c,d){a=a.render;var g=i.ref;return ia(i,d),c=Su(n,i,a,c,g,d),a=yu(),n!==null&&!ai?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,wr(n,i,d)):(cn&&a&&iu(i),i.flags|=1,ei(n,i,c,d),i.child)}function Up(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Zu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Op(n,i,g,c,d)):(n=Ml(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:za,a(C,c)&&n.ref===i.ref)return wr(n,i,d)}return i.flags|=1,n=Qr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Op(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(za(g,c)&&n.ref===i.ref)if(ai=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ai=!0);else return i.lanes=n.lanes,wr(n,i,d)}return Pu(n,i,a,c,d)}function Fp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},rn(oa,vi),vi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,rn(oa,vi),vi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,rn(oa,vi),vi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,rn(oa,vi),vi|=c;return ei(n,i,d,a),i.child}function Bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Pu(n,i,a,c,d){var g=si(a)?vs:Hn.current;return g=Zs(i,g),ia(i,d),a=Su(n,i,a,c,g,d),c=yu(),n!==null&&!ai?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,wr(n,i,d)):(cn&&c&&iu(i),i.flags|=1,ei(n,i,a,d),i.child)}function kp(n,i,a,c,d){if(si(a)){var g=!0;$o(i)}else g=!1;if(ia(i,d),i.stateNode===null)dl(n,i),bp(i,a,c),bu(i,a,c,d),c=!0;else if(n===null){var C=i.stateNode,V=i.memoizedProps;C.props=V;var X=C.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=Ri(ve):(ve=si(a)?vs:Hn.current,ve=Zs(i,ve));var Re=a.getDerivedStateFromProps,Ue=typeof Re=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ue||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==c||X!==ve)&&Rp(i,C,c,ve),qr=!1;var Te=i.memoizedState;C.state=Te,nl(i,c,C,d),X=i.memoizedState,V!==c||Te!==X||ri.current||qr?(typeof Re=="function"&&(Au(i,a,Re,c),X=i.memoizedState),(V=qr||Ap(i,a,V,c,Te,X,ve))?(Ue||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),C.props=c,C.state=X,C.context=ve,c=V):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,tp(n,i),V=i.memoizedProps,ve=i.type===i.elementType?V:Vi(i.type,V),C.props=ve,Ue=i.pendingProps,Te=C.context,X=a.contextType,typeof X=="object"&&X!==null?X=Ri(X):(X=si(a)?vs:Hn.current,X=Zs(i,X));var tt=a.getDerivedStateFromProps;(Re=typeof tt=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==Ue||Te!==X)&&Rp(i,C,c,X),qr=!1,Te=i.memoizedState,C.state=Te,nl(i,c,C,d);var at=i.memoizedState;V!==Ue||Te!==at||ri.current||qr?(typeof tt=="function"&&(Au(i,a,tt,c),at=i.memoizedState),(ve=qr||Ap(i,a,ve,c,Te,at,X)||!1)?(Re||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,at,X),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,at,X)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=at),C.props=c,C.state=at,C.context=X,c=ve):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),c=!1)}return Lu(n,i,a,c,g,d)}function Lu(n,i,a,c,d,g){Bp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return d&&Wh(i,a,!1),wr(n,i,g);c=i.stateNode,Av.current=i;var V=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=ta(i,n.child,null,g),i.child=ta(i,null,V,g)):ei(n,i,V,g),i.memoizedState=c.state,d&&Wh(i,a,!0),i.child}function zp(n){var i=n.stateNode;i.pendingContext?Gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gh(n,i.context,!1),pu(n,i.containerInfo)}function Vp(n,i,a,c,d){return ea(),ou(d),i.flags|=256,ei(n,i,a,c),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,i,a){var c=i.pendingProps,d=fn.current,g=!1,C=(i.flags&128)!==0,V;if((V=C)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),rn(fn,d&1),n===null)return au(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,g?(c=i.mode,g=i.child,C={mode:"hidden",children:C},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=El(C,c,0,null),n=bs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Iu(a),i.memoizedState=Nu,n):Du(i,C));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return bv(n,i,C,c,V,d,a);if(g){g=c.fallback,C=i.mode,d=n.child,V=d.sibling;var X={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Qr(d,X),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=Qr(V,g):(g=bs(g,C,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,C=n.child.memoizedState,C=C===null?Iu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=Nu,c}return g=n.child,n=g.sibling,c=Qr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Du(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,a,c){return c!==null&&ou(c),ta(i,n.child,null,a),n=Du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function bv(n,i,a,c,d,g,C){if(a)return i.flags&256?(i.flags&=-257,c=Ru(Error(t(422))),ul(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=El({mode:"visible",children:c.children},d,0,null),g=bs(g,d,C,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&ta(i,n.child,null,C),i.child.memoizedState=Iu(C),i.memoizedState=Nu,g);if((i.mode&1)===0)return ul(n,i,C,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=Ru(g,c,void 0),ul(n,i,C,c)}if(V=(C&n.childLanes)!==0,ai||V){if(c=Cn,c!==null){switch(C&-C){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|C))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Mr(n,d),Wi(c,n,d,-1))}return Ku(),c=Ru(Error(t(421))),ul(n,i,C,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=zv.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,gi=Gr(d.nextSibling),mi=i,cn=!0,zi=null,n!==null&&(Ai[bi++]=Sr,Ai[bi++]=yr,Ai[bi++]=_s,Sr=n.id,yr=n.overflow,_s=i),i=Du(i,c.children),i.flags|=4096,i)}function Hp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),du(n.return,i,a)}function Uu(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Wp(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(ei(n,i,c.children,a),c=fn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hp(n,a,i);else if(n.tag===19)Hp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(rn(fn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&il(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Uu(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&il(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Uu(i,!0,a,null,g);break;case"together":Uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function wr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Es|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Qr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Qr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Rv(n,i,a){switch(i.tag){case 3:zp(i),ea();break;case 5:rp(i);break;case 1:si(i.type)&&$o(i);break;case 4:pu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;rn(Qo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(rn(fn,fn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Gp(n,i,a):(rn(fn,fn.current&1),n=wr(n,i,a),n!==null?n.sibling:null);rn(fn,fn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Wp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),rn(fn,fn.current),c)break;return null;case 22:case 23:return i.lanes=0,Fp(n,i,a)}return wr(n,i,a)}var Xp,Ou,qp,$p;Xp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ou=function(){},qp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ys(sr.current);var g=null;switch(a){case"input":d=ft(n,d),c=ft(n,c),g=[];break;case"select":d=J({},d,{value:void 0}),c=J({},c,{value:void 0}),g=[];break;case"textarea":d=Et(n,d),c=Et(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wo)}Ce(a,c);var C;a=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var V=d[ve];for(C in V)V.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?g||(g=[]):(g=g||[]).push(ve,null));for(ve in c){var X=c[ve];if(V=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&X!==V&&(X!=null||V!=null))if(ve==="style")if(V){for(C in V)!V.hasOwnProperty(C)||X&&X.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in X)X.hasOwnProperty(C)&&V[C]!==X[C]&&(a||(a={}),a[C]=X[C])}else a||(g||(g=[]),g.push(ve,a)),a=X;else ve==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,V=V?V.__html:void 0,X!=null&&V!==X&&(g=g||[]).push(ve,X)):ve==="children"?typeof X!="string"&&typeof X!="number"||(g=g||[]).push(ve,""+X):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(X!=null&&ve==="onScroll"&&sn("scroll",n),g||V===X||(g=[])):(g=g||[]).push(ve,X))}a&&(g=g||[]).push("style",a);var ve=g;(i.updateQueue=ve)&&(i.flags|=4)}},$p=function(n,i,a,c){a!==c&&(i.flags|=4)};function to(n,i){if(!cn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Cv(n,i,a){var c=i.pendingProps;switch(ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(i),null;case 1:return si(i.type)&&qo(),Xn(i),null;case 3:return c=i.stateNode,ra(),an(ri),an(Hn),vu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zi!==null&&($u(zi),zi=null))),Ou(n,i),Xn(i),null;case 5:mu(i);var d=ys(Ka.current);if(a=i.type,n!==null&&i.stateNode!=null)qp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Xn(i),null}if(n=ys(sr.current),Zo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[rr]=i,c[Xa]=g,n=(i.mode&1)!==0,a){case"dialog":sn("cancel",c),sn("close",c);break;case"iframe":case"object":case"embed":sn("load",c);break;case"video":case"audio":for(d=0;d<Ga.length;d++)sn(Ga[d],c);break;case"source":sn("error",c);break;case"img":case"image":case"link":sn("error",c),sn("load",c);break;case"details":sn("toggle",c);break;case"input":At(c,g),sn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},sn("invalid",c);break;case"textarea":q(c,g),sn("invalid",c)}Ce(a,g),d=null;for(var C in g)if(g.hasOwnProperty(C)){var V=g[C];C==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&Ho(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&Ho(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(C)&&V!=null&&C==="onScroll"&&sn("scroll",c)}switch(a){case"input":Ge(c),It(c,g,!0);break;case"textarea":Ge(c),bt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Wo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[rr]=i,n[Xa]=c,Xp(n,i,!1,!1),i.stateNode=n;e:{switch(C=Oe(a,c),a){case"dialog":sn("cancel",n),sn("close",n),d=c;break;case"iframe":case"object":case"embed":sn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ga.length;d++)sn(Ga[d],n);d=c;break;case"source":sn("error",n),d=c;break;case"img":case"image":case"link":sn("error",n),sn("load",n),d=c;break;case"details":sn("toggle",n),d=c;break;case"input":At(n,c),d=ft(n,c),sn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=J({},c,{value:void 0}),sn("invalid",n);break;case"textarea":q(n,c),d=Et(n,c),sn("invalid",n);break;default:d=c}Ce(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var X=V[g];g==="style"?ae(n,X):g==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ue(n,X)):g==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&_e(n,X):typeof X=="number"&&_e(n,""+X):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?X!=null&&g==="onScroll"&&sn("scroll",n):X!=null&&F(n,g,X,C))}switch(a){case"input":Ge(n),It(n,c,!1);break;case"textarea":Ge(n),bt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?xt(n,!!c.multiple,g,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Wo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Xn(i),null;case 6:if(n&&i.stateNode!=null)$p(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ys(Ka.current),ys(sr.current),Zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[rr]=i,(g=c.nodeValue!==a)&&(n=mi,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=i,i.stateNode=c}return Xn(i),null;case 13:if(an(fn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(cn&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kh(),ea(),i.flags|=98560,g=!1;else if(g=Zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[rr]=i}else ea(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xn(i),g=!1}else zi!==null&&($u(zi),zi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(fn.current&1)!==0?En===0&&(En=3):Ku())),i.updateQueue!==null&&(i.flags|=4),Xn(i),null);case 4:return ra(),Ou(n,i),n===null&&Ha(i.stateNode.containerInfo),Xn(i),null;case 10:return uu(i.type._context),Xn(i),null;case 17:return si(i.type)&&qo(),Xn(i),null;case 19:if(an(fn),g=i.memoizedState,g===null)return Xn(i),null;if(c=(i.flags&128)!==0,C=g.rendering,C===null)if(c)to(g,!1);else{if(En!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=il(n),C!==null){for(i.flags|=128,to(g,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return rn(fn,fn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>la&&(i.flags|=128,c=!0,to(g,!1),i.lanes=4194304)}else{if(!c)if(n=il(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),to(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!cn)return Xn(i),null}else 2*Zt()-g.renderingStartTime>la&&a!==1073741824&&(i.flags|=128,c=!0,to(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,a=fn.current,rn(fn,c?a&1|2:a&1),i):(Xn(i),null);case 22:case 23:return Yu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(vi&1073741824)!==0&&(Xn(i),i.subtreeFlags&6&&(i.flags|=8192)):Xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Pv(n,i){switch(ru(i),i.tag){case 1:return si(i.type)&&qo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ra(),an(ri),an(Hn),vu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mu(i),null;case 13:if(an(fn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ea()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return an(fn),null;case 4:return ra(),null;case 10:return uu(i.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var fl=!1,qn=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,rt=null;function aa(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){vn(n,i,c)}else a.current=null}function Fu(n,i,a){try{a()}catch(c){vn(n,i,c)}}var jp=!1;function Nv(n,i){if(Yc=ln,n=Ah(),Vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,V=-1,X=-1,ve=0,Re=0,Ue=n,Te=null;t:for(;;){for(var tt;Ue!==a||d!==0&&Ue.nodeType!==3||(V=C+d),Ue!==g||c!==0&&Ue.nodeType!==3||(X=C+c),Ue.nodeType===3&&(C+=Ue.nodeValue.length),(tt=Ue.firstChild)!==null;)Te=Ue,Ue=tt;for(;;){if(Ue===n)break t;if(Te===a&&++ve===d&&(V=C),Te===g&&++Re===c&&(X=C),(tt=Ue.nextSibling)!==null)break;Ue=Te,Te=Ue.parentNode}Ue=tt}a=V===-1||X===-1?null:{start:V,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:n,selectionRange:a},ln=!1,rt=i;rt!==null;)if(i=rt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,rt=n;else for(;rt!==null;){i=rt;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var lt=at.memoizedProps,_n=at.memoizedState,fe=i.stateNode,Z=fe.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Vi(i.type,lt),_n);fe.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){vn(i,i.return,ze)}if(n=i.sibling,n!==null){n.return=i.return,rt=n;break}rt=i.return}return at=jp,jp=!1,at}function no(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Fu(i,a,g)}d=d.next}while(d!==c)}}function hl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Bu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Yp(n){var i=n.alternate;i!==null&&(n.alternate=null,Yp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[rr],delete i[Xa],delete i[eu],delete i[pv],delete i[mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Kp(n){return n.tag===5||n.tag===3||n.tag===4}function Zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ku(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wo));else if(c!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}function zu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zu(n,i,a),n=n.sibling;n!==null;)zu(n,i,a),n=n.sibling}var On=null,Gi=!1;function jr(n,i,a){for(a=a.child;a!==null;)Jp(n,i,a),a=a.sibling}function Jp(n,i,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 5:qn||aa(a,i);case 6:var c=On,d=Gi;On=null,jr(n,i,a),On=c,Gi=d,On!==null&&(Gi?(n=On,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):On.removeChild(a.stateNode));break;case 18:On!==null&&(Gi?(n=On,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),ps(n)):Qc(On,a.stateNode));break;case 4:c=On,d=Gi,On=a.stateNode.containerInfo,Gi=!0,jr(n,i,a),On=c,Gi=d;break;case 0:case 11:case 14:case 15:if(!qn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Fu(a,i,C),d=d.next}while(d!==c)}jr(n,i,a);break;case 1:if(!qn&&(aa(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){vn(a,i,V)}jr(n,i,a);break;case 21:jr(n,i,a);break;case 22:a.mode&1?(qn=(c=qn)||a.memoizedState!==null,jr(n,i,a),qn=c):jr(n,i,a);break;default:jr(n,i,a)}}function Qp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Lv),i.forEach(function(c){var d=Vv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Hi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,C=i,V=C;e:for(;V!==null;){switch(V.tag){case 5:On=V.stateNode,Gi=!1;break e;case 3:On=V.stateNode.containerInfo,Gi=!0;break e;case 4:On=V.stateNode.containerInfo,Gi=!0;break e}V=V.return}if(On===null)throw Error(t(160));Jp(g,C,d),On=null,Gi=!1;var X=d.alternate;X!==null&&(X.return=null),d.return=null}catch(ve){vn(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)em(i,n),i=i.sibling}function em(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hi(i,n),or(n),c&4){try{no(3,n,n.return),hl(3,n)}catch(lt){vn(n,n.return,lt)}try{no(5,n,n.return)}catch(lt){vn(n,n.return,lt)}}break;case 1:Hi(i,n),or(n),c&512&&a!==null&&aa(a,a.return);break;case 5:if(Hi(i,n),or(n),c&512&&a!==null&&aa(a,a.return),n.flags&32){var d=n.stateNode;try{_e(d,"")}catch(lt){vn(n,n.return,lt)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,V=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&Pt(d,g),Oe(V,C);var ve=Oe(V,g);for(C=0;C<X.length;C+=2){var Re=X[C],Ue=X[C+1];Re==="style"?ae(d,Ue):Re==="dangerouslySetInnerHTML"?ue(d,Ue):Re==="children"?_e(d,Ue):F(d,Re,Ue,ve)}switch(V){case"input":Mt(d,g);break;case"textarea":Qt(d,g);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var tt=g.value;tt!=null?xt(d,!!g.multiple,tt,!1):Te!==!!g.multiple&&(g.defaultValue!=null?xt(d,!!g.multiple,g.defaultValue,!0):xt(d,!!g.multiple,g.multiple?[]:"",!1))}d[Xa]=g}catch(lt){vn(n,n.return,lt)}}break;case 6:if(Hi(i,n),or(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(lt){vn(n,n.return,lt)}}break;case 3:if(Hi(i,n),or(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(i.containerInfo)}catch(lt){vn(n,n.return,lt)}break;case 4:Hi(i,n),or(n);break;case 13:Hi(i,n),or(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Hu=Zt())),c&4&&Qp(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(qn=(ve=qn)||Re,Hi(i,n),qn=ve):Hi(i,n),or(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Re&&(n.mode&1)!==0)for(rt=n,Re=n.child;Re!==null;){for(Ue=rt=Re;rt!==null;){switch(Te=rt,tt=Te.child,Te.tag){case 0:case 11:case 14:case 15:no(4,Te,Te.return);break;case 1:aa(Te,Te.return);var at=Te.stateNode;if(typeof at.componentWillUnmount=="function"){c=Te,a=Te.return;try{i=c,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(lt){vn(c,a,lt)}}break;case 5:aa(Te,Te.return);break;case 22:if(Te.memoizedState!==null){im(Ue);continue}}tt!==null?(tt.return=Te,rt=tt):im(Ue)}Re=Re.sibling}e:for(Re=null,Ue=n;;){if(Ue.tag===5){if(Re===null){Re=Ue;try{d=Ue.stateNode,ve?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=Ue.stateNode,X=Ue.memoizedProps.style,C=X!=null&&X.hasOwnProperty("display")?X.display:null,V.style.display=ie("display",C))}catch(lt){vn(n,n.return,lt)}}}else if(Ue.tag===6){if(Re===null)try{Ue.stateNode.nodeValue=ve?"":Ue.memoizedProps}catch(lt){vn(n,n.return,lt)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===n)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===n)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===n)break e;Re===Ue&&(Re=null),Ue=Ue.return}Re===Ue&&(Re=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:Hi(i,n),or(n),c&4&&Qp(n);break;case 21:break;default:Hi(i,n),or(n)}}function or(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Kp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(_e(d,""),c.flags&=-33);var g=Zp(n);zu(n,g,d);break;case 3:case 4:var C=c.stateNode.containerInfo,V=Zp(n);ku(n,V,C);break;default:throw Error(t(161))}}catch(X){vn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Iv(n,i,a){rt=n,tm(n)}function tm(n,i,a){for(var c=(n.mode&1)!==0;rt!==null;){var d=rt,g=d.child;if(d.tag===22&&c){var C=d.memoizedState!==null||fl;if(!C){var V=d.alternate,X=V!==null&&V.memoizedState!==null||qn;V=fl;var ve=qn;if(fl=C,(qn=X)&&!ve)for(rt=d;rt!==null;)C=rt,X=C.child,C.tag===22&&C.memoizedState!==null?rm(d):X!==null?(X.return=C,rt=X):rm(d);for(;g!==null;)rt=g,tm(g),g=g.sibling;rt=d,fl=V,qn=ve}nm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,rt=g):nm(n)}}function nm(n){for(;rt!==null;){var i=rt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:qn||hl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!qn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Vi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&ip(i,g,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ip(i,C,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Re=ve.memoizedState;if(Re!==null){var Ue=Re.dehydrated;Ue!==null&&ps(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qn||i.flags&512&&Bu(i)}catch(Te){vn(i,i.return,Te)}}if(i===n){rt=null;break}if(a=i.sibling,a!==null){a.return=i.return,rt=a;break}rt=i.return}}function im(n){for(;rt!==null;){var i=rt;if(i===n){rt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,rt=a;break}rt=i.return}}function rm(n){for(;rt!==null;){var i=rt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hl(4,i)}catch(X){vn(i,a,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(X){vn(i,d,X)}}var g=i.return;try{Bu(i)}catch(X){vn(i,g,X)}break;case 5:var C=i.return;try{Bu(i)}catch(X){vn(i,C,X)}}}catch(X){vn(i,i.return,X)}if(i===n){rt=null;break}var V=i.sibling;if(V!==null){V.return=i.return,rt=V;break}rt=i.return}}var Dv=Math.ceil,pl=b.ReactCurrentDispatcher,Vu=b.ReactCurrentOwner,Pi=b.ReactCurrentBatchConfig,jt=0,Cn=null,xn=null,Fn=0,vi=0,oa=Hr(0),En=0,io=null,Es=0,ml=0,Gu=0,ro=null,oi=null,Hu=0,la=1/0,Tr=null,gl=!1,Wu=null,Yr=null,vl=!1,Kr=null,_l=0,so=0,Xu=null,xl=-1,Sl=0;function ti(){return(jt&6)!==0?Zt():xl!==-1?xl:xl=Zt()}function Zr(n){return(n.mode&1)===0?1:(jt&2)!==0&&Fn!==0?Fn&-Fn:vv.transition!==null?(Sl===0&&(Sl=ot()),Sl):(n=ut,n!==0||(n=window.event,n=n===void 0?16:ah(n.type)),n)}function Wi(n,i,a,c){if(50<so)throw so=0,Xu=null,Error(t(185));yt(n,a,c),((jt&2)===0||n!==Cn)&&(n===Cn&&((jt&2)===0&&(ml|=a),En===4&&Jr(n,Fn)),li(n,c),a===1&&jt===0&&(i.mode&1)===0&&(la=Zt()+500,jo&&Xr()))}function li(n,i){var a=n.callbackNode;ht(n,i);var c=Y(n,n===Cn?Fn:0);if(c===0)a!==null&&Ji(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ji(a),i===1)n.tag===0?gv(am.bind(null,n)):Xh(am.bind(null,n)),fv(function(){(jt&6)===0&&Xr()}),a=null;else{switch(Rt(c)){case 1:a=er;break;case 4:a=Bi;break;case 16:a=P;break;case 536870912:a=me;break;default:a=P}a=pm(a,sm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function sm(n,i){if(xl=-1,Sl=0,(jt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ca()&&n.callbackNode!==a)return null;var c=Y(n,n===Cn?Fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=yl(n,c);else{i=c;var d=jt;jt|=2;var g=lm();(Cn!==n||Fn!==i)&&(Tr=null,la=Zt()+500,Ts(n,i));do try{Fv();break}catch(V){om(n,V)}while(!0);cu(),pl.current=g,jt=d,xn!==null?i=0:(Cn=null,Fn=0,i=En)}if(i!==0){if(i===2&&(d=be(n),d!==0&&(c=d,i=qu(n,d))),i===1)throw a=io,Ts(n,0),Jr(n,c),li(n,Zt()),a;if(i===6)Jr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Uv(d)&&(i=yl(n,c),i===2&&(g=be(n),g!==0&&(c=g,i=qu(n,g))),i===1))throw a=io,Ts(n,0),Jr(n,c),li(n,Zt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:As(n,oi,Tr);break;case 3:if(Jr(n,c),(c&130023424)===c&&(i=Hu+500-Zt(),10<i)){if(Y(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){ti(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Jc(As.bind(null,n,oi,Tr),i);break}As(n,oi,Tr);break;case 4:if(Jr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var C=31-Ve(c);g=1<<C,C=i[C],C>d&&(d=C),c&=~g}if(c=d,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Dv(c/1960))-c,10<c){n.timeoutHandle=Jc(As.bind(null,n,oi,Tr),c);break}As(n,oi,Tr);break;case 5:As(n,oi,Tr);break;default:throw Error(t(329))}}}return li(n,Zt()),n.callbackNode===a?sm.bind(null,n):null}function qu(n,i){var a=ro;return n.current.memoizedState.isDehydrated&&(Ts(n,i).flags|=256),n=yl(n,i),n!==2&&(i=oi,oi=a,i!==null&&$u(i)),n}function $u(n){oi===null?oi=n:oi.push.apply(oi,n)}function Uv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!ki(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Jr(n,i){for(i&=~Gu,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function am(n){if((jt&6)!==0)throw Error(t(327));ca();var i=Y(n,0);if((i&1)===0)return li(n,Zt()),null;var a=yl(n,i);if(n.tag!==0&&a===2){var c=be(n);c!==0&&(i=c,a=qu(n,c))}if(a===1)throw a=io,Ts(n,0),Jr(n,i),li(n,Zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,As(n,oi,Tr),li(n,Zt()),null}function ju(n,i){var a=jt;jt|=1;try{return n(i)}finally{jt=a,jt===0&&(la=Zt()+500,jo&&Xr())}}function ws(n){Kr!==null&&Kr.tag===0&&(jt&6)===0&&ca();var i=jt;jt|=1;var a=Pi.transition,c=ut;try{if(Pi.transition=null,ut=1,n)return n()}finally{ut=c,Pi.transition=a,jt=i,(jt&6)===0&&Xr()}}function Yu(){vi=oa.current,an(oa)}function Ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,dv(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(ru(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&qo();break;case 3:ra(),an(ri),an(Hn),vu();break;case 5:mu(c);break;case 4:ra();break;case 13:an(fn);break;case 19:an(fn);break;case 10:uu(c.type._context);break;case 22:case 23:Yu()}a=a.return}if(Cn=n,xn=n=Qr(n.current,null),Fn=vi=i,En=0,io=null,Gu=ml=Es=0,oi=ro=null,Ss!==null){for(i=0;i<Ss.length;i++)if(a=Ss[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var C=g.next;g.next=d,c.next=C}a.pending=c}Ss=null}return n}function om(n,i){do{var a=xn;try{if(cu(),rl.current=ll,sl){for(var c=hn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}sl=!1}if(Ms=0,Rn=Mn=hn=null,Za=!1,Ja=0,Vu.current=null,a===null||a.return===null){En=1,io=i,xn=null;break}e:{var g=n,C=a.return,V=a,X=i;if(i=Fn,V.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var ve=X,Re=V,Ue=Re.tag;if((Re.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Te=Re.alternate;Te?(Re.updateQueue=Te.updateQueue,Re.memoizedState=Te.memoizedState,Re.lanes=Te.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var tt=Np(C);if(tt!==null){tt.flags&=-257,Ip(tt,C,V,g,i),tt.mode&1&&Lp(g,ve,i),i=tt,X=ve;var at=i.updateQueue;if(at===null){var lt=new Set;lt.add(X),i.updateQueue=lt}else at.add(X);break e}else{if((i&1)===0){Lp(g,ve,i),Ku();break e}X=Error(t(426))}}else if(cn&&V.mode&1){var _n=Np(C);if(_n!==null){(_n.flags&65536)===0&&(_n.flags|=256),Ip(_n,C,V,g,i),ou(sa(X,V));break e}}g=X=sa(X,V),En!==4&&(En=2),ro===null?ro=[g]:ro.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var fe=Cp(g,X,i);np(g,fe);break e;case 1:V=X;var Z=g.type,he=g.stateNode;if((g.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Yr===null||!Yr.has(he)))){g.flags|=65536,i&=-i,g.lanes|=i;var ze=Pp(g,V,i);np(g,ze);break e}}g=g.return}while(g!==null)}um(a)}catch(dt){i=dt,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function lm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function Ku(){(En===0||En===3||En===2)&&(En=4),Cn===null||(Es&268435455)===0&&(ml&268435455)===0||Jr(Cn,Fn)}function yl(n,i){var a=jt;jt|=2;var c=lm();(Cn!==n||Fn!==i)&&(Tr=null,Ts(n,i));do try{Ov();break}catch(d){om(n,d)}while(!0);if(cu(),jt=a,pl.current=c,xn!==null)throw Error(t(261));return Cn=null,Fn=0,En}function Ov(){for(;xn!==null;)cm(xn)}function Fv(){for(;xn!==null&&!gr();)cm(xn)}function cm(n){var i=hm(n.alternate,n,vi);n.memoizedProps=n.pendingProps,i===null?um(n):xn=i,Vu.current=null}function um(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Cv(a,i,vi),a!==null){xn=a;return}}else{if(a=Pv(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{En=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);En===0&&(En=5)}function As(n,i,a){var c=ut,d=Pi.transition;try{Pi.transition=null,ut=1,Bv(n,i,a,c)}finally{Pi.transition=d,ut=c}return null}function Bv(n,i,a,c){do ca();while(Kr!==null);if((jt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(st(n,g),n===Cn&&(xn=Cn=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||vl||(vl=!0,pm(P,function(){return ca(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Pi.transition,Pi.transition=null;var C=ut;ut=1;var V=jt;jt|=4,Vu.current=null,Nv(n,a),em(a,n),rv(Kc),ln=!!Yc,Kc=Yc=null,n.current=a,Iv(a),Fr(),jt=V,ut=C,Pi.transition=g}else n.current=a;if(vl&&(vl=!1,Kr=n,_l=d),g=n.pendingLanes,g===0&&(Yr=null),He(a.stateNode),li(n,Zt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gl)throw gl=!1,n=Wu,Wu=null,n;return(_l&1)!==0&&n.tag!==0&&ca(),g=n.pendingLanes,(g&1)!==0?n===Xu?so++:(so=0,Xu=n):so=0,Xr(),null}function ca(){if(Kr!==null){var n=Rt(_l),i=Pi.transition,a=ut;try{if(Pi.transition=null,ut=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,_l=0,(jt&6)!==0)throw Error(t(331));var d=jt;for(jt|=4,rt=n.current;rt!==null;){var g=rt,C=g.child;if((rt.flags&16)!==0){var V=g.deletions;if(V!==null){for(var X=0;X<V.length;X++){var ve=V[X];for(rt=ve;rt!==null;){var Re=rt;switch(Re.tag){case 0:case 11:case 15:no(8,Re,g)}var Ue=Re.child;if(Ue!==null)Ue.return=Re,rt=Ue;else for(;rt!==null;){Re=rt;var Te=Re.sibling,tt=Re.return;if(Yp(Re),Re===ve){rt=null;break}if(Te!==null){Te.return=tt,rt=Te;break}rt=tt}}}var at=g.alternate;if(at!==null){var lt=at.child;if(lt!==null){at.child=null;do{var _n=lt.sibling;lt.sibling=null,lt=_n}while(lt!==null)}}rt=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,rt=C;else e:for(;rt!==null;){if(g=rt,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:no(9,g,g.return)}var fe=g.sibling;if(fe!==null){fe.return=g.return,rt=fe;break e}rt=g.return}}var Z=n.current;for(rt=Z;rt!==null;){C=rt;var he=C.child;if((C.subtreeFlags&2064)!==0&&he!==null)he.return=C,rt=he;else e:for(C=Z;rt!==null;){if(V=rt,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:hl(9,V)}}catch(dt){vn(V,V.return,dt)}if(V===C){rt=null;break e}var ze=V.sibling;if(ze!==null){ze.return=V.return,rt=ze;break e}rt=V.return}}if(jt=d,Xr(),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(ce,n)}catch{}c=!0}return c}finally{ut=a,Pi.transition=i}}return!1}function dm(n,i,a){i=sa(a,i),i=Cp(n,i,1),n=$r(n,i,1),i=ti(),n!==null&&(yt(n,1,i),li(n,i))}function vn(n,i,a){if(n.tag===3)dm(n,n,a);else for(;i!==null;){if(i.tag===3){dm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=sa(a,n),n=Pp(i,n,1),i=$r(i,n,1),n=ti(),i!==null&&(yt(i,1,n),li(i,n));break}}i=i.return}}function kv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ti(),n.pingedLanes|=n.suspendedLanes&a,Cn===n&&(Fn&a)===a&&(En===4||En===3&&(Fn&130023424)===Fn&&500>Zt()-Hu?Ts(n,0):Gu|=a),li(n,i)}function fm(n,i){i===0&&((n.mode&1)===0?i=1:(i=h,h<<=1,(h&130023424)===0&&(h=4194304)));var a=ti();n=Mr(n,i),n!==null&&(yt(n,i,a),li(n,a))}function zv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),fm(n,a)}function Vv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),fm(n,a)}var hm;hm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ri.current)ai=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ai=!1,Rv(n,i,a);ai=(n.flags&131072)!==0}else ai=!1,cn&&(i.flags&1048576)!==0&&qh(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;dl(n,i),n=i.pendingProps;var d=Zs(i,Hn.current);ia(i,a),d=Su(null,i,c,n,d,a);var g=yu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,si(c)?(g=!0,$o(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,hu(i),d.updater=cl,i.stateNode=d,d._reactInternals=i,bu(i,c,n,a),i=Lu(null,i,c,!0,g,a)):(i.tag=0,cn&&g&&iu(i),ei(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Hv(c),n=Vi(c,n),d){case 0:i=Pu(null,i,c,n,a);break e;case 1:i=kp(null,i,c,n,a);break e;case 11:i=Dp(null,i,c,n,a);break e;case 14:i=Up(null,i,c,Vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vi(c,d),Pu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vi(c,d),kp(n,i,c,d,a);case 3:e:{if(zp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,tp(n,i),nl(i,c,null,a);var C=i.memoizedState;if(c=C.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=sa(Error(t(423)),i),i=Vp(n,i,c,a,d);break e}else if(c!==d){d=sa(Error(t(424)),i),i=Vp(n,i,c,a,d);break e}else for(gi=Gr(i.stateNode.containerInfo.firstChild),mi=i,cn=!0,zi=null,a=Qh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ea(),c===d){i=wr(n,i,a);break e}ei(n,i,c,a)}i=i.child}return i;case 5:return rp(i),n===null&&au(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,C=d.children,Zc(c,d)?C=null:g!==null&&Zc(c,g)&&(i.flags|=32),Bp(n,i),ei(n,i,C,a),i.child;case 6:return n===null&&au(i),null;case 13:return Gp(n,i,a);case 4:return pu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ta(i,null,c,a):ei(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vi(c,d),Dp(n,i,c,d,a);case 7:return ei(n,i,i.pendingProps,a),i.child;case 8:return ei(n,i,i.pendingProps.children,a),i.child;case 12:return ei(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,C=d.value,rn(Qo,c._currentValue),c._currentValue=C,g!==null)if(ki(g.value,C)){if(g.children===d.children&&!ri.current){i=wr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){C=g.child;for(var X=V.firstContext;X!==null;){if(X.context===c){if(g.tag===1){X=Er(-1,a&-a),X.tag=2;var ve=g.updateQueue;if(ve!==null){ve=ve.shared;var Re=ve.pending;Re===null?X.next=X:(X.next=Re.next,Re.next=X),ve.pending=X}}g.lanes|=a,X=g.alternate,X!==null&&(X.lanes|=a),du(g.return,a,i),V.lanes|=a;break}X=X.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,V=C.alternate,V!==null&&(V.lanes|=a),du(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}ei(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ia(i,a),d=Ri(d),c=c(d),i.flags|=1,ei(n,i,c,a),i.child;case 14:return c=i.type,d=Vi(c,i.pendingProps),d=Vi(c.type,d),Up(n,i,c,d,a);case 15:return Op(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vi(c,d),dl(n,i),i.tag=1,si(c)?(n=!0,$o(i)):n=!1,ia(i,a),bp(i,c,d),bu(i,c,d,a),Lu(null,i,c,!0,n,a);case 19:return Wp(n,i,a);case 22:return Fp(n,i,a)}throw Error(t(156,i.tag))};function pm(n,i){return Dn(n,i)}function Gv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(n,i,a,c){return new Gv(n,i,a,c)}function Zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hv(n){if(typeof n=="function")return Zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===ne)return 14}return 2}function Qr(n,i){var a=n.alternate;return a===null?(a=Li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ml(n,i,a,c,d,g){var C=2;if(c=n,typeof n=="function")Zu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case B:return bs(a.children,d,g,i);case w:C=8,d|=8;break;case L:return n=Li(12,a,i,d|2),n.elementType=L,n.lanes=g,n;case se:return n=Li(13,a,i,d),n.elementType=se,n.lanes=g,n;case $:return n=Li(19,a,i,d),n.elementType=$,n.lanes=g,n;case oe:return El(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:C=10;break e;case H:C=9;break e;case W:C=11;break e;case ne:C=14;break e;case ge:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Li(C,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function bs(n,i,a,c){return n=Li(7,n,c,i),n.lanes=a,n}function El(n,i,a,c){return n=Li(22,n,c,i),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function Ju(n,i,a){return n=Li(6,n,null,i),n.lanes=a,n}function Qu(n,i,a){return i=Li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Wv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ae(0),this.expirationTimes=Ae(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ed(n,i,a,c,d,g,C,V,X){return n=new Wv(n,i,a,V,X),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Li(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(g),n}function Xv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function mm(n){if(!n)return Wr;n=n._reactInternals;e:{if(on(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(si(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(si(a))return Hh(n,a,i)}return i}function gm(n,i,a,c,d,g,C,V,X){return n=ed(a,c,!0,n,d,g,C,V,X),n.context=mm(null),a=n.current,c=ti(),d=Zr(a),g=Er(c,d),g.callback=i??null,$r(a,g,d),n.current.lanes=d,yt(n,d,c),li(n,c),n}function wl(n,i,a,c){var d=i.current,g=ti(),C=Zr(d);return a=mm(a),i.context===null?i.context=a:i.pendingContext=a,i=Er(g,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=$r(d,i,C),n!==null&&(Wi(n,d,C,g),tl(n,d,C)),C}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function td(n,i){vm(n,i),(n=n.alternate)&&vm(n,i)}function qv(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}Al.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wl(n,i,null,null)},Al.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ws(function(){wl(null,n,null,null)}),i[_r]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var i=Un();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,n),a===0&&Da(n)}};function id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function xm(){}function $v(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ve=Tl(C);g.call(ve)}}var C=gm(i,c,n,0,null,!1,!1,"",xm);return n._reactRootContainer=C,n[_r]=C.current,Ha(n.nodeType===8?n.parentNode:n),ws(),C}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var ve=Tl(X);V.call(ve)}}var X=ed(n,0,!1,null,null,!1,!1,"",xm);return n._reactRootContainer=X,n[_r]=X.current,Ha(n.nodeType===8?n.parentNode:n),ws(function(){wl(i,X,a,c)}),X}function Rl(n,i,a,c,d){var g=a._reactRootContainer;if(g){var C=g;if(typeof d=="function"){var V=d;d=function(){var X=Tl(C);V.call(X)}}wl(i,C,n,d)}else C=$v(a,i,n,d,c);return Tl(C)}Dt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=D(i.pendingLanes);a!==0&&(Ht(i,a|1),li(i,Zt()),(jt&6)===0&&(la=Zt()+500,Xr()))}break;case 13:ws(function(){var c=Mr(n,1);if(c!==null){var d=ti();Wi(c,n,1,d)}}),td(n,1)}},mt=function(n){if(n.tag===13){var i=Mr(n,134217728);if(i!==null){var a=ti();Wi(i,n,134217728,a)}td(n,134217728)}},Jt=function(n){if(n.tag===13){var i=Zr(n),a=Mr(n,i);if(a!==null){var c=ti();Wi(a,n,i,c)}td(n,i)}},Un=function(){return ut},kt=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},Se=function(n,i,a){switch(i){case"input":if(Mt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Xo(c);if(!d)throw Error(t(90));pt(c),Mt(c,d)}}}break;case"textarea":Qt(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},Be=ju,ye=ws;var jv={usingClientEntryPoint:!1,Events:[qa,Ys,Xo,xe,De,ju]},ao={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yv={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=kn(n),n===null?null:n.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{ce=Cl.inject(Yv),re=Cl}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv,ci.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(i))throw Error(t(200));return Xv(n,i,null,a)},ci.createRoot=function(n,i){if(!id(n))throw Error(t(299));var a=!1,c="",d=_m;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ed(n,1,!1,null,null,a,!1,c,d),n[_r]=i.current,Ha(n.nodeType===8?n.parentNode:n),new nd(i)},ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=kn(i),n=n===null?null:n.stateNode,n},ci.flushSync=function(n){return ws(n)},ci.hydrate=function(n,i,a){if(!bl(i))throw Error(t(200));return Rl(null,n,i,!0,a)},ci.hydrateRoot=function(n,i,a){if(!id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",C=_m;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=gm(i,null,n,1,a??null,d,!1,g,C),n[_r]=i.current,Ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Al(i)},ci.render=function(n,i,a){if(!bl(i))throw Error(t(200));return Rl(null,n,i,!1,a)},ci.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?(ws(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},ci.unstable_batchedUpdates=ju,ci.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!bl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,i,a,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var bm;function r_(){if(bm)return ad.exports;bm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ad.exports=i_(),ad.exports}var Rm;function s_(){if(Rm)return Pl;Rm=1;var r=r_();return Pl.createRoot=r.createRoot,Pl.hydrateRoot=r.hydrateRoot,Pl}var a_=s_();const o_=F0(a_),B0="no_mires_abajo_playstore_v3",lc=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function l_(r){return r&&lc.find(t=>t.code===r||t.flag===r)||lc[0]}const Lr=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puente de la Mujer",en:"Obelisk & Puente de la Mujer"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"Río de Janeiro",en:"Rio de Janeiro"},monumentName:{es:"Cristo Redentor Iluminado",en:"Illuminated Christ the Redeemer"},weatherLabel:{es:"Brasa Nocturna Carioca",en:"Carioca Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#4ade80",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"cristo"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Estatua de la Libertad y Empire State",en:"Statue of Liberty & Empire State"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#38bdf8",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"liberty_empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"willis"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben y London Eye Giratorio",en:"Big Ben & Rotating London Eye"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel y Faro Giratorio",en:"Eiffel Tower & Rotating Beacon"},weatherLabel:{es:"Haces de Luz Ámbar/Dorado",en:"Amber/Gold Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"golden_embers",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"cuatrotorres"},{index:9,flag:"🇷🇺",name:{es:"Moscú",en:"Moscow"},monumentName:{es:"Cúpulas de San Basilio con Estrellas",en:"Saint Basil's Onion Domes"},weatherLabel:{es:"Ventisca Invernal Rusa",en:"Russian Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#f43f5e",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"stbasil"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Las Tres Grandes Pirámides de Giza",en:"Three Great Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#fde047",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"mahanakhon"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Velas de la Ópera de Sídney",en:"Sydney Opera House Sails"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Torre de Tokio y Arco Torii Luminoso",en:"Tokyo Tower & Luminous Torii Gate"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#ef4444",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],cd=[{id:"vip_dubai",index:20,flag:"🇦🇪",name:{es:"Dubái Sky-Bridge VIP",en:"Dubai Sky-Bridge VIP"},desc:{es:"Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.",en:"Crossing between the tallest towers in the world with golden storm & x3 payout."},weatherLabel:{es:"Tormenta de Oro 24K VIP",en:"24K Gold Storm VIP"},weatherArchetype:"golden_embers",accentColor:"#fde047",winColor:"#fef08a",windStrength:1.25,monument:"burjkhalifa",rewardMult:3,gemBonus:25,gemUnlockCost:350,usdPrice:"$1.99 USD"},{id:"vip_vegas",index:21,flag:"🇺🇸",name:{es:"Las Vegas Neon Strip VIP",en:"Las Vegas Neon Strip VIP"},desc:{es:"Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.",en:"Hyper-bright casino lights and triple x3 LP & Gems rewards."},weatherLabel:{es:"Lluvia de Neón y Fichas VIP",en:"Casino Neon Rain VIP"},weatherArchetype:"cyber_rain",accentColor:"#f43f5e",winColor:"#fde047",windStrength:1.32,monument:"vegas_strip",rewardMult:3,gemBonus:35,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_monaco",index:22,flag:"🇲🇨",name:{es:"Mónaco Casino Royal VIP",en:"Monaco Casino Royal VIP"},desc:{es:"Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.",en:"Gala night over Monte Carlo bay with triple coin payouts."},weatherLabel:{es:"Destellos Dorados de Gala",en:"Royal Golden Sparkles"},weatherArchetype:"golden_embers",accentColor:"#fbbf24",winColor:"#fef9c3",windStrength:1.18,monument:"monaco_casino",rewardMult:3,gemBonus:30,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_alps",index:23,flag:"🇨🇭",name:{es:"Alpes Suizos Nocturnos VIP",en:"Swiss Alps Nocturnal VIP"},desc:{es:"Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.",en:"Extreme crossing between high-mountain cable cars under the Aurora Borealis."},weatherLabel:{es:"Aurora Boreal y Ventisca Alpina",en:"Aurora Borealis & Alpine Gale"},weatherArchetype:"blizzard",accentColor:"#4ade80",winColor:"#a5f3fc",windStrength:1.45,monument:"swiss_alps",rewardMult:3.5,gemBonus:45,gemUnlockCost:450,usdPrice:"$2.99 USD"}],Ll=[{id:"pole_basic",icon:"🦯",name:{es:"Barra de Acero Urbano",en:"Urban Steel Pole"},badge:{es:"GRATIS • BASE 1.0x",en:"FREE • BASE 1.0x"},desc:{es:"Estabilidad base 1.0x con núcleo láser cian estándar.",en:"Base 1.0x stability with standard cyan laser core."},currency:"free",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:0,stepDamp:0,catchRadiusBonus:0,scoreMult:1,coinMult:1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1,coreHex:14742270,glowHex:62206,tipHex:62206,hasGyroRings:!1},{id:"pole_carbon",icon:"⚡",name:{es:"Barra de Fibra de Carbono",en:"Carbon Fiber Pole"},badge:{es:"-18% GRAVEDAD • +LARGO 3D",en:"-18% GRAVITY • +3D LENGTH"},desc:{es:"Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.",en:"Reduces tipping gravity by 18% and extends the 3D pole length."},currency:"coins",cost:14500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.18,stepDamp:.1,catchRadiusBonus:.05,scoreMult:1.1,coinMult:1.1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.22,coreHex:14482663,glowHex:2282478,tipHex:4906624,hasGyroRings:!1},{id:"pole_gyro",icon:"🌀",name:{es:"Barra Giroscópica Neón",en:"Neon Gyroscopic Pole"},badge:{es:"-32% INCLINACIÓN • -30% PISADA",en:"-32% TILT • -30% STEP SWAY"},desc:{es:"Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.",en:"Reduces tilt by 32% and dampens fast-step lateral impact by 30%."},currency:"coins",cost:48e3,gemCost:290,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.32,stepDamp:.3,catchRadiusBonus:.1,scoreMult:1.25,coinMult:1.25,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.34,coreHex:15984895,glowHex:11032055,tipHex:62206,hasGyroRings:!0},{id:"pole_quantum",icon:"👑",name:{es:"👑 Barra Láser Cuántica",en:"👑 Quantum Laser Pole"},badge:{es:"EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS",en:"PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS"},desc:{es:"Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.",en:"Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier."},currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,gravityReduction:.5,stepDamp:.4,catchRadiusBonus:.25,scoreMult:1.5,coinMult:1.5,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.45,coreHex:16770278,glowHex:16007006,tipHex:62206,hasGyroRings:!0},{id:"pole_imperial",icon:"👑",name:{es:"👑 Barra Gravitatoria Imperial",en:"👑 Imperial Graviton Pole"},badge:{es:"PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0",en:"VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0"},desc:{es:"Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.",en:"Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier."},currency:"vip_or_usd",cost:900,gemCost:900,usdPrice:"$3.99 USD",isPro:!0,isVipOnly:!0,gravityReduction:.65,stepDamp:.55,catchRadiusBonus:.3,scoreMult:2,coinMult:2,noCatchRecoil:!0,autoSaveFall:!0,poleScaleX:1.56,coreHex:16710083,glowHex:16638023,tipHex:16096779,hasGyroRings:!0}],So=[{id:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,currency:"coins",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1,catchWindowBonus:0,coinBonus:0,windReduction:0,stepDampBonus:0,freeShields:0,badge:{es:"GRATIS • SIN BONUS",en:"FREE • NO BONUS"},name:{es:"Equilibrista Urbano",en:"Urban Tightrope Walker"},desc:{es:"Silueta acrobática urbana estándar con acabado negro mate y recorte de luz cian.",en:"Standard urban acrobatic silhouette with matte black finish and cyan rim light."},hoodieColor:"#334155",pantsColor:"#0f172a",trimColor:"#00f2fe",shoeColor:"#e2e8f0",rimHex:62206,glowColor:null,goldTrail:!1},{id:"skin_2",icon:"🏃",unlockLevel:5,unlockCity:2,currency:"coins",cost:25e3,gemCost:180,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1.25,catchWindowBonus:.15,coinBonus:.25,windReduction:0,stepDampBonus:.1,freeShields:0,badge:{es:"+15% VENTANA CAPTURA • +25% MONEDAS",en:"+15% CATCH WINDOW • +25% COINS"},name:{es:"Corredor Sombra Vector",en:"Vector Shadow Runner"},desc:{es:"Otorga +15% ventana de captura de malabares y +25% monedas ganadas por nivel.",en:"Grants +15% juggle catch window and +25% coins earned per level."},hoodieColor:"#111827",pantsColor:"#090d16",trimColor:"#38bdf8",shoeColor:"#38bdf8",rimHex:3718648,glowColor:"#38bdf8",goldTrail:!1},{id:"skin_3",icon:"⚡",unlockLevel:12,unlockCity:4,currency:"coins",cost:65e3,gemCost:340,usdPrice:null,isPro:!1,isVipOnly:!1,bonusMult:1.3,catchWindowBonus:.1,coinBonus:.3,windReduction:.3,stepDampBonus:.15,freeShields:0,badge:{es:"-30% EMPUJE VIENTO • MULTIPLICADOR x1.3",en:"-30% WIND PUSH • x1.3 MULTIPLIER"},name:{es:"Fantasma Cibernético",en:"Cybernetic Phantom"},desc:{es:"Reduce un 30% el empuje lateral del viento y activa un Multiplicador x1.3.",en:"Reduces lateral wind push by 30% and activates a x1.3 Multiplier."},hoodieColor:"#0f172a",pantsColor:"#060a12",trimColor:"#a855f7",shoeColor:"#06b6d4",rimHex:11032055,glowColor:"#a855f7",goldTrail:!1},{id:"skin_4",icon:"🥷",unlockLevel:20,unlockCity:6,currency:"gems_or_usd",cost:500,gemCost:500,usdPrice:"$2.49 USD",isPro:!0,isVipOnly:!1,bonusMult:1.8,catchWindowBonus:.18,coinBonus:.8,windReduction:.5,stepDampBonus:.35,freeShields:0,badge:{es:"👑 PAGA • -50% VIENTO • PASO ESTABLE • MULTI x1.8",en:"👑 PRO • -50% WIND • ULTRA STABLE • x1.8 MULTI"},name:{es:"👑 Samurái Neón",en:"👑 Neon Samurai"},desc:{es:"-50% empuje del viento, paso ultra-estable en alta velocidad y Multiplicador x1.8 permanente.",en:"-50% wind push, ultra-stable high-speed step and permanent x1.8 Multiplier."},hoodieColor:"#14111a",pantsColor:"#09070d",trimColor:"#f43f5e",shoeColor:"#fb7185",rimHex:16007006,glowColor:"#f43f5e",goldTrail:!1},{id:"skin_5",icon:"👑",unlockLevel:35,unlockCity:10,currency:"vip_or_usd",cost:1100,gemCost:1100,usdPrice:"$4.99 USD",isPro:!0,isVipOnly:!0,bonusMult:2.5,catchWindowBonus:.25,coinBonus:1.5,windReduction:.55,stepDampBonus:.45,freeShields:1,badge:{es:"👑 PASE VIP • MULTI x2.5 LP/🪙 • 1 ESCUDO ANTI-CAÍDA • ESTELA 3D",en:"👑 VIP PASS • x2.5 LP/🪙 MULTI • 1 ANTI-FALL SHIELD • 3D GOLD TRAIL"},name:{es:"👑 Leyenda Dorada Inmortal",en:"👑 Immortal Golden Legend"},desc:{es:"Multiplicador x2.5 permanente en LP y Monedas, arranca cada nivel con 1 Escudo Anti-Caída gratuito y viste al acróbata con estela dorada 3D.",en:"Permanent x2.5 LP & Coin Multiplier, starts every level with 1 free Anti-Fall Shield and 3D golden silhouette trail."},hoodieColor:"#09090b",pantsColor:"#050507",trimColor:"#fde047",shoeColor:"#f59e0b",rimHex:16638023,glowColor:"#fde047",goldTrail:!0}],Nl=[{id:"mult_x2_coins",icon:"🪙",name:{es:"Multiplicador x2 de Monedas",en:"x2 Permanent Coin Multiplier"},badge:{es:"MONEDAS DEL JUEGO • x2 🪙",en:"IN-GAME COINS • x2 🪙"},desc:{es:"Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.",en:"Permanently doubles all coins earned from juggling and clearing rooftops."},currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,coinMult:2,lpMult:1},{id:"mult_x3_pro",icon:"👑",name:{es:"👑 Multiplicador x3 Pro de LP y Monedas",en:"👑 x3 Pro LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙",en:"PRO / VIP PASS • x3 LP & 🪙"},desc:{es:"Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.",en:"Permanently triples your League Points (LP) for the Online Leaderboard and your Coins."},currency:"vip_or_usd",cost:600,gemCost:600,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!0,coinMult:3,lpMult:3},{id:"mult_x5_ultra",icon:"🚀",name:{es:"👑 Multiplicador x5 Ultra de LP y Monedas",en:"👑 x5 Ultra LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PACK PRO • x5 LP Y 🪙",en:"PRO PACK EXCLUSIVE • x5 LP & 🪙"},desc:{es:"Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.",en:"Maximum x5 boost to Online League Points and Coins across all cities and levels."},currency:"gems_or_usd",cost:1200,gemCost:1200,usdPrice:"$5.99 USD",isPro:!0,isVipOnly:!1,coinMult:5,lpMult:5}],yo=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,currency:"coins",cost:0,gemCost:0,name:{es:"Esferas Incandescentes",en:"Incandescent Orbs"},color:"#fde047"},{id:"torches",icon:"🔥",mult:2,unlockLevel:6,currency:"coins",cost:18500,gemCost:160,name:{es:"Antorchas de Plasma (x2)",en:"Plasma Torches (x2)"},color:"#f97316"},{id:"knives",icon:"🔪",mult:3,unlockLevel:16,currency:"coins",cost:42e3,gemCost:280,name:{es:"Dagas Láser Cian (x3)",en:"Cyan Laser Daggers (x3)"},color:"#00f2fe"},{id:"chainsaws",icon:"🪚",mult:5,unlockLevel:31,currency:"gems",cost:480,gemCost:480,name:{es:"👑 Sierras Neón Pro (x5)",en:"👑 Pro Neon Saws (x5)"},color:"#ef4444"},{id:"goldbars",icon:"🪙",mult:8,unlockLevel:60,currency:"gems",cost:950,gemCost:950,name:{es:"👑 Orbes Cuánticos 24K (x8)",en:"👑 24K Quantum Orbs (x8)"},color:"#fde047"}],c_=[{id:"pole",icon:"⚖️",maxLevel:10,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Núcleo de Inercia",en:"Inertia Core"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"boots",icon:"🥾",maxLevel:10,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"gloves",icon:"🧤",maxLevel:10,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}}];function Cm(r){const e=Math.max(0,Math.min(10,r||0));if(e>=10)return{isMax:!0,isProTier:!0,coinCost:0,gemCost:0};if(e<5)return{isMax:!1,isProTier:!1,coinCost:Math.round(850*Math.pow(2.45,e)),gemCost:0};const t=e-5;return{isMax:!1,isProTier:!0,coinCost:0,gemCost:Math.round(140*Math.pow(1.45,t))}}const u_=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],d_=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],f_=[{id:"bundle_vip_pass",icon:"👑",isVipPassBundle:!0,gems:1500,coins:5e4,leaguePts:1500,popular:!0,tag:"👑 ACTIVAR VIP ($4.99)",name:{es:"👑 PASE VIP PRO TEMPORADA",en:"👑 SEASON VIP PRO PASS"},perks:{es:["🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería","👑 Desbloquea las 4 Ciudades Exclusivas VIP","🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)","🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)","+1.500 💎 Gemas y +50.000 🪙 Monedas al instante"],en:["🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10","👑 Unlocks all 4 Exclusive VIP Cities","🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)","🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)","+1,500 💎 Gems & +50,000 🪙 Coins instantly"]}},{id:"bundle_starter",icon:"⚡",gems:450,coins:18e3,leaguePts:300,popular:!1,tag:"💎 PACK PRO ($1.99)",name:{es:"Cofre Cuántico de Gemas",en:"Quantum Gem Chest"},perks:{es:["+450 💎 Gemas Premium + 18.000 🪙 Monedas","Ideal para Barra Láser Cuántica o Mejoras Nv. 6+"],en:["+450 💎 Premium Gems + 18,000 🪙 Coins","Ideal for Quantum Laser Pole or Lvl 6+ Upgrades"]}},{id:"bundle_legend",icon:"🚀",gems:1400,coins:85e3,leaguePts:2500,popular:!0,tag:"👑 PACK ULTRA ($5.99)",name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+1.400 💎 Gemas + 85.000 🪙 Monedas","Alcanza para Multiplicador x5 Ultra + Samurái Neón"],en:["+1,400 💎 Gems + 85,000 🪙 Coins","Enough for x5 Ultra Multiplier + Neon Samurai"]}}],Pm={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",leagueBanner:"LIGA DE TEMPORADA",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Tienda VIP",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",skinsBtn:"Aspectos",level:"Nivel",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",shieldSavedPopup:"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",levelCleared:"¡AZOTEA ALCANZADA!",nextLevel:"SIGUIENTE NIVEL",armoryTitle:"ARMERÍA PRO, BARRAS Y MULTIPLICADORES",armorySub:"Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",proUpgradeBtn:"👑 MEJORA PRO — GEMAS / PASE VIP",polesSectionTitle:"⚖️ VARAS DE EQUILIBRIO (BARRAS)",multipliersSectionTitle:"🚀 MULTIPLICADORES PERMANENTES",vipCitiesTitle:"👑 CIUDADES EXCLUSIVAS VIP",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.",shopTitle:"👑 TIENDA PRO & PASE VIP DE TEMPORADA",shopSub:"Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",leagueBanner:"SEASON LEAGUE",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"VIP Shop",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",skinsBtn:"Skins",level:"Level",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",shieldSavedPopup:"🛡️ ANTI-FALL SHIELD ACTIVATED!",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",levelCleared:"ROOFTOP REACHED!",nextLevel:"NEXT LEVEL",armoryTitle:"PRO ARMORY, POLES & MULTIPLIERS",armorySub:"Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",proUpgradeBtn:"👑 PRO UPGRADE — GEMS / VIP PASS",polesSectionTitle:"⚖️ BALANCE POLES (BARS)",multipliersSectionTitle:"🚀 PERMANENT MULTIPLIERS",vipCitiesTitle:"👑 EXCLUSIVE VIP CITIES",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.",shopTitle:"👑 PRO SHOP & SEASON VIP PASS",shopSub:"Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",backToLobbyBtn:"BACK TO MAIN MENU",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",youLabel:"YOU (Tightrope Walker)"}};for(let r=0;r<Lr.length;r++){const e=Lr[r];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}for(let r=0;r<So.length;r++){const e=So[r];e.coatColor=e.coatColor||e.hoodieColor}for(let r=0;r<yo.length;r++){const e=yo[r];e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function k0(r){const e=Math.max(1,Math.min(100,r||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function h_(r){const e=Math.max(1,Math.min(100,r||1)),t=k0(e),s=100+(e-1)*5;return Math.round(s*t)}function ud(r,e=null){const t=Math.max(1,Math.min(100,r||1)),s=Math.min(19,Math.max(0,Math.floor((t-1)/5))),o=e||Lr[s],l=(t-1)%5+1,u=k0(t),f=5,m=Number((f*u).toFixed(3)),p=h_(t),S=t<4?0:Number((u*(1+(t-4)*.018)).toFixed(3)),y=Number((u*1.15).toFixed(3)),_=Number((.62*y).toFixed(3)),M=Number(Math.max(.14,.28-(t-1)/99*.14).toFixed(4)),E=t<4?6:Number(Math.max(4.5,6-(t-4)/96*1.5).toFixed(2)),A=.32+o.windStrength*.45+l*.045,x=1.08+t/100*.92,v=t<=15?2:t<=55?3:4,R=t<=3?0:t<=10?1:t<=25?2:t<=50?3:4,F=Number((.028+Math.max(0,u-1)*.068).toFixed(4)),b=Number((.036+Math.max(0,u-1)*.064).toFixed(4));return{level:t,cityIndex:e?e.index:s,city:o,isVipCity:!!e,stageInCity:l,speedPhase:R,walkSpeedMultiplier:u,baseWalkSpeed:f,walkSpeed:u,walkSpeedMeters:m,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:S,juggleSpeedMultiplier:y,juggleBaseSpeed:_,juggleSpeed:_,catchWindow:M,gravityFactor:x,gravity:x*2.1,windMax:A,windBase:A,windChangeFreq:E,gustInterval:Math.max(.75,2.2-R*.32),windBaseForce:A,gravityInstability:x,defaultObjects:v,ballCount:v,stepSwayImpulse:F,catchRecoilImpulse:b}}const Lm=[523.25,587.33,659.25,783.99,880,1046.5];class p_{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),s=this.ctx.createBuffer(1,t,e),o=s.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=s}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const s=this.ctx.currentTime,o=Math.max(0,(e-1)%Lm.length),l=e>=12?1.25:1,u=Lm[o]*l,f=this.ctx.createOscillator(),m=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",m.type="sine",f.frequency.setValueAtTime(u,s),m.frequency.setValueAtTime(u,s),p.gain.setValueAtTime(.001,s),p.gain.linearRampToValueAtTime(.18,s+.015),p.gain.exponentialRampToValueAtTime(.06,s+.07),p.gain.exponentialRampToValueAtTime(.001,s+.18),f.connect(p),m.connect(p),p.connect(this.ctx.destination),f.start(s),m.start(s),f.stop(s+.19),m.stop(s+.19),t){const S=this.ctx.createOscillator(),y=this.ctx.createGain();S.type="sine",S.frequency.setValueAtTime(u*2,s),S.frequency.exponentialRampToValueAtTime(u*2.04,s+.18),y.gain.setValueAtTime(.001,s),y.gain.linearRampToValueAtTime(.14,s+.012),y.gain.exponentialRampToValueAtTime(.001,s+.18),S.connect(y),y.connect(this.ctx.destination),S.start(s),S.stop(s+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.Q.setValueAtTime(6.5,e),s.frequency.setValueAtTime(310,e),s.frequency.exponentialRampToValueAtTime(920,e+.42),s.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(s),s.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(65,t),s.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.045),l.gain.setValueAtTime(.14,e+s*.045),l.gain.exponentialRampToValueAtTime(.001,e+s*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.045),o.stop(e+s*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let s=0;s<t.length;s++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[s],e+s*.085),l.gain.setValueAtTime(.17,e+s*.085),l.gain.exponentialRampToValueAtTime(.001,e+s*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+s*.085),o.stop(e+s*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],s=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(s[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playHookRescue(){this.playGrapple()}playNearMiss(){this.playNearMissSave()}playFallScream(){this.playFall()}playFrenzyStart(){this.playVictory()}playMissAlert(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,45]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(195,e),t.frequency.exponentialRampToValueAtTime(98,e+.22),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.25)}playFootstep(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine";const l=92+Math.min(45,(e-1)*30);s.frequency.setValueAtTime(l,t),s.frequency.exponentialRampToValueAtTime(42,t+.065),o.gain.setValueAtTime(.09,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),s.connect(o),o.connect(this.ctx.destination),s.start(t),s.stop(t+.075)}updateWind(e=0){Math.abs(e)>.85&&Math.random()<.015&&this.playWindGust()}}const Nt=new p_,m_=lc;function Aa(r){return l_(r).flag}const g_="nma_live_leaderboard_cache_v2";async function lo(r,e,t,s=1){const o=(r||"Equilibrista").trim().slice(0,15),l=(e||"AR").trim(),u=Aa(l),f={id:"player_self",name:o,country:l,flag:u,score:Math.max(0,Math.floor(t||0)),lp:Math.max(0,Math.floor(t||0)),level:Math.max(1,s||1),updatedAt:Date.now(),isPlayer:!0};try{localStorage.setItem(g_,JSON.stringify(f))}catch{}return f}async function Nm(r){const e=((r==null?void 0:r.name)||"Equilibrista").trim().slice(0,15),t=((r==null?void 0:r.country)||"AR").trim(),s=Aa(t),o=Math.max(0,Math.floor((r==null?void 0:r.score)??320)),l=Math.max(1,(r==null?void 0:r.level)||1),u=Math.floor(Date.now()/45e3),f=u_.map((S,y)=>{const _=(u+y*7)%11*15,M=S.baseLp+_;return{id:S.id,name:S.name,country:S.country,flag:S.flag,score:M,lp:M,level:Math.max(5,Math.min(100,Math.floor(M/180))),badge:S.badge,isPlayer:!1}}),m={id:"player_self",name:e,country:t,flag:s,score:o,lp:o,level:l,badge:"⚡",isPlayer:!0};return[...f,m].sort((S,y)=>y.lp-S.lp)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="186",v_=0,Im=1,__=2,cc=1,x_=2,_o=3,Os=0,fi=1,yi=2,Dr=0,Mo=1,di=2,Dm=3,Um=4,S_=5,Ta=100,y_=101,M_=102,E_=103,w_=104,T_=200,A_=201,b_=202,R_=203,z0=204,V0=205,C_=206,P_=207,L_=208,N_=209,I_=210,D_=211,U_=212,O_=213,F_=214,qd=0,$d=1,jd=2,Eo=3,Yd=4,Kd=5,Zd=6,Jd=7,G0=0,B_=1,k_=2,hr=0,H0=1,W0=2,X0=3,Bf=4,q0=5,$0=6,j0=7,Y0=300,Fs=301,Pa=302,dd=303,fd=304,wc=306,Bs=1e3,Nr=1001,Qd=1002,Bn=1003,z_=1004,Il=1005,Kn=1006,hd=1007,Ds=1008,Mi=1009,K0=1010,Z0=1011,wo=1012,kf=1013,pr=1014,dr=1015,mr=1016,zf=1017,Vf=1018,To=1020,J0=35902,Q0=35899,eg=1021,tg=1022,ji=1023,Or=1026,Us=1027,ng=1028,Gf=1029,ks=1030,Hf=1031,Wf=1033,uc=33776,dc=33777,fc=33778,hc=33779,ef=35840,tf=35841,nf=35842,rf=35843,sf=36196,af=37492,of=37496,lf=37488,cf=37489,gc=37490,uf=37491,df=37808,ff=37809,hf=37810,pf=37811,mf=37812,gf=37813,vf=37814,_f=37815,xf=37816,Sf=37817,yf=37818,Mf=37819,Ef=37820,wf=37821,Tf=36492,Af=36494,bf=36495,Rf=36283,Cf=36284,vc=36285,Pf=36286,V_=3200,Lf=0,G_=1,ls="",Ii="srgb",_c="srgb-linear",xc="linear",en="srgb",pd=7680,H_=519,W_=512,X_=513,q_=514,Xf=515,$_=516,j_=517,qf=518,Y_=519,K_=35044,Om="300 es",fr=2e3,Ao=2001;function Z_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Sc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function J_(){const r=Sc("canvas");return r.style.display="block",r}const Fm={};function Bm(...r){const e="THREE."+r.shift();console.log(e,...r)}function ig(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function wt(...r){r=ig(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Kt(...r){r=ig(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ra(...r){const e=r.join(" ");e in Fm||(Fm[e]=!0,wt(...r))}function Q_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const ex={[qd]:$d,[jd]:Zd,[Yd]:Jd,[Eo]:Kd,[$d]:qd,[Zd]:jd,[Jd]:Yd,[Kd]:Eo};class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=Math.PI/180,Nf=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return($n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]).toLowerCase()}function Xt(r,e,t){return Math.max(e,Math.min(t,r))}function tx(r,e){return(r%e+e)%e}function md(r,e,t){return(1-t)*r+t*e}function co(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const th=class th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;let Vt=th;class Na{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let m=s[o+0],p=s[o+1],S=s[o+2],y=s[o+3],_=l[u+0],M=l[u+1],E=l[u+2],A=l[u+3];if(y!==A||m!==_||p!==M||S!==E){let x=m*_+p*M+S*E+y*A;x<0&&(_=-_,M=-M,E=-E,A=-A,x=-x);let v=1-f;if(x<.9995){const R=Math.acos(x),F=Math.sin(R);v=Math.sin(v*R)/F,f=Math.sin(f*R)/F,m=m*v+_*f,p=p*v+M*f,S=S*v+E*f,y=y*v+A*f}else{m=m*v+_*f,p=p*v+M*f,S=S*v+E*f,y=y*v+A*f;const R=1/Math.sqrt(m*m+p*p+S*S+y*y);m*=R,p*=R,S*=R,y*=R}}e[t]=m,e[t+1]=p,e[t+2]=S,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],m=s[o+1],p=s[o+2],S=s[o+3],y=l[u],_=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+S*y+m*M-p*_,e[t+1]=m*E+S*_+p*y-f*M,e[t+2]=p*E+S*M+f*_-m*y,e[t+3]=S*E-f*y-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(s/2),S=f(o/2),y=f(l/2),_=m(s/2),M=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=_*S*y+p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y-_*M*E;break;case"YXZ":this._x=_*S*y+p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y+_*M*E;break;case"ZXY":this._x=_*S*y-p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y-_*M*E;break;case"ZYX":this._x=_*S*y-p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y+_*M*E;break;case"YZX":this._x=_*S*y+p*M*E,this._y=p*M*y+_*S*E,this._z=p*S*E-_*M*y,this._w=p*S*y-_*M*E;break;case"XZY":this._x=_*S*y-p*M*E,this._y=p*M*y-_*S*E,this._z=p*S*E+_*M*y,this._w=p*S*y+_*M*E;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],S=t[6],y=t[10],_=s+f+y;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(S-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>f&&s>y){const M=2*Math.sqrt(1+s-f-y);this._w=(S-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>y){const M=2*Math.sqrt(1+f-s-y);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+y-s-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,S=t._w;return this._x=s*S+u*f+o*p-l*m,this._y=o*S+u*m+l*f-s*p,this._z=l*S+u*p+s*m-o*f,this._w=u*S-s*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),S=Math.sin(p);m=Math.sin(m*p)/S,t=Math.sin(t*p)/S,this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nh=class nh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*s),S=2*(f*t-l*o),y=2*(l*s-u*t);return this.x=t+m*p+u*y-f*S,this.y=s+m*S+f*p-l*y,this.z=o+m*y+l*S-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-s*m,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;let te=nh;const gd=new te,km=new Na,ih=class ih{constructor(e,t,s,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p)}set(e,t,s,o,l,u,f,m,p){const S=this.elements;return S[0]=e,S[1]=o,S[2]=f,S[3]=t,S[4]=l,S[5]=m,S[6]=s,S[7]=u,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],m=s[6],p=s[1],S=s[4],y=s[7],_=s[2],M=s[5],E=s[8],A=o[0],x=o[3],v=o[6],R=o[1],F=o[4],b=o[7],I=o[2],N=o[5],B=o[8];return l[0]=u*A+f*R+m*I,l[3]=u*x+f*F+m*N,l[6]=u*v+f*b+m*B,l[1]=p*A+S*R+y*I,l[4]=p*x+S*F+y*N,l[7]=p*v+S*b+y*B,l[2]=_*A+M*R+E*I,l[5]=_*x+M*F+E*N,l[8]=_*v+M*b+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8];return t*u*S-t*f*p-s*l*S+s*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8],y=S*u-f*p,_=f*m-S*l,M=p*l-u*m,E=t*y+s*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(o*p-S*s)*A,e[2]=(f*s-o*u)*A,e[3]=_*A,e[4]=(S*t-o*m)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(s*m-p*t)*A,e[8]=(u*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return Ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vd.makeScale(e,t)),this}rotate(e){return Ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return Ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;let Ct=ih;const vd=new Ct,zm=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){const r={enabled:!0,workingColorSpace:_c,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===en&&(o.r=Ur(o.r),o.g=Ur(o.g),o.b=Ur(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===en&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ls?xc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[_c]:{primaries:e,whitePoint:s,transfer:xc,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:e,whitePoint:s,transfer:en,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}}),r}const Wt=nx();function Ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ua;class ix{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ua===void 0&&(ua=Sc("canvas")),ua.width=e.width,ua.height=e.height;const o=ua.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ua}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ur(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ur(t[s]/255)*255):t[s]=Ur(t[s]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class $f{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(_d(o[u].image)):l.push(_d(o[u]))}else l=_d(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function _d(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ix.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let sx=0;const xd=new te;class Zn extends Vs{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,s=Nr,o=Nr,l=Kn,u=Ds,f=ji,m=Mi,p=Zn.DEFAULT_ANISOTROPY,S=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ro(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Y0;Zn.DEFAULT_ANISOTROPY=1;const rh=class rh{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const m=e.elements,p=m[0],S=m[4],y=m[8],_=m[1],M=m[5],E=m[9],A=m[2],x=m[6],v=m[10];if(Math.abs(S-_)<.01&&Math.abs(y-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(S+_)<.1&&Math.abs(y+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,b=(M+1)/2,I=(v+1)/2,N=(S+_)/4,B=(y+A)/4,w=(E+x)/4;return F>b&&F>I?F<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(F),o=N/s,l=B/s):b>I?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=N/o,l=w/o):I<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),s=B/l,o=w/l),this.set(s,o,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(y-A)*(y-A)+(_-S)*(_-S));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(y-A)/R,this.z=(_-S)/R,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this.w=Xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this.w=Xt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;let gn=rh;class ax extends Vs{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Zn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new $f(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends ax{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class rg extends Zn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ox extends Zn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ec=class Ec{constructor(e,t,s,o,l,u,f,m,p,S,y,_,M,E,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,m,p,S,y,_,M,E,A,x)}set(e,t,s,o,l,u,f,m,p,S,y,_,M,E,A,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=S,v[10]=y,v[14]=_,v[3]=M,v[7]=E,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/da.setFromMatrixColumn(e,0).length(),l=1/da.setFromMatrixColumn(e,1).length(),u=1/da.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),m=Math.cos(o),p=Math.sin(o),S=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const _=u*S,M=u*y,E=f*S,A=f*y;t[0]=m*S,t[4]=-m*y,t[8]=p,t[1]=M+E*p,t[5]=_-A*p,t[9]=-f*m,t[2]=A-_*p,t[6]=E+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*S,M=m*y,E=p*S,A=p*y;t[0]=_+A*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*y,t[5]=u*S,t[9]=-f,t[2]=M*f-E,t[6]=A+_*f,t[10]=u*m}else if(e.order==="ZXY"){const _=m*S,M=m*y,E=p*S,A=p*y;t[0]=_-A*f,t[4]=-u*y,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*S,t[9]=A-_*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const _=u*S,M=u*y,E=f*S,A=f*y;t[0]=m*S,t[4]=E*p-M,t[8]=_*p+A,t[1]=m*y,t[5]=A*p+_,t[9]=M*p-E,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,E=f*m,A=f*p;t[0]=m*S,t[4]=A-_*y,t[8]=E*y+M,t[1]=y,t[5]=u*S,t[9]=-f*S,t[2]=-p*S,t[6]=M*y+E,t[10]=_-A*y}else if(e.order==="XZY"){const _=u*m,M=u*p,E=f*m,A=f*p;t[0]=m*S,t[4]=-y,t[8]=p*S,t[1]=_*y+A,t[5]=u*S,t[9]=M*y-E,t[2]=E*y-M,t[6]=f*S,t[10]=A*y+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lx,e,cx)}lookAt(e,t,s){const o=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ts.crossVectors(s,_i),ts.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ts.crossVectors(s,_i)),ts.normalize(),Dl.crossVectors(_i,ts),o[0]=ts.x,o[4]=Dl.x,o[8]=_i.x,o[1]=ts.y,o[5]=Dl.y,o[9]=_i.y,o[2]=ts.z,o[6]=Dl.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],m=s[8],p=s[12],S=s[1],y=s[5],_=s[9],M=s[13],E=s[2],A=s[6],x=s[10],v=s[14],R=s[3],F=s[7],b=s[11],I=s[15],N=o[0],B=o[4],w=o[8],L=o[12],z=o[1],H=o[5],W=o[9],se=o[13],$=o[2],ne=o[6],ge=o[10],oe=o[14],Q=o[3],ee=o[7],J=o[11],O=o[15];return l[0]=u*N+f*z+m*$+p*Q,l[4]=u*B+f*H+m*ne+p*ee,l[8]=u*w+f*W+m*ge+p*J,l[12]=u*L+f*se+m*oe+p*O,l[1]=S*N+y*z+_*$+M*Q,l[5]=S*B+y*H+_*ne+M*ee,l[9]=S*w+y*W+_*ge+M*J,l[13]=S*L+y*se+_*oe+M*O,l[2]=E*N+A*z+x*$+v*Q,l[6]=E*B+A*H+x*ne+v*ee,l[10]=E*w+A*W+x*ge+v*J,l[14]=E*L+A*se+x*oe+v*O,l[3]=R*N+F*z+b*$+I*Q,l[7]=R*B+F*H+b*ne+I*ee,l[11]=R*w+F*W+b*ge+I*J,l[15]=R*L+F*se+b*oe+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],S=e[2],y=e[6],_=e[10],M=e[14],E=e[3],A=e[7],x=e[11],v=e[15],R=m*M-p*_,F=f*M-p*y,b=f*_-m*y,I=u*M-p*S,N=u*_-m*S,B=u*y-f*S;return t*(A*R-x*F+v*b)-s*(E*R-x*I+v*N)+o*(E*F-A*I+v*B)-l*(E*b-A*N+x*B)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],S=e[10];return t*(u*S-f*p)-s*(l*S-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],S=e[8],y=e[9],_=e[10],M=e[11],E=e[12],A=e[13],x=e[14],v=e[15],R=t*f-s*u,F=t*m-o*u,b=t*p-l*u,I=s*m-o*f,N=s*p-l*f,B=o*p-l*m,w=S*A-y*E,L=S*x-_*E,z=S*v-M*E,H=y*x-_*A,W=y*v-M*A,se=_*v-M*x,$=R*se-F*W+b*H+I*z-N*L+B*w;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/$;return e[0]=(f*se-m*W+p*H)*ne,e[1]=(o*W-s*se-l*H)*ne,e[2]=(A*B-x*N+v*I)*ne,e[3]=(_*N-y*B-M*I)*ne,e[4]=(m*z-u*se-p*L)*ne,e[5]=(t*se-o*z+l*L)*ne,e[6]=(x*b-E*B-v*F)*ne,e[7]=(S*B-_*b+M*F)*ne,e[8]=(u*W-f*z+p*w)*ne,e[9]=(s*z-t*W-l*w)*ne,e[10]=(E*N-A*b+v*R)*ne,e[11]=(y*b-S*N-M*R)*ne,e[12]=(f*L-u*H-m*w)*ne,e[13]=(t*H-s*L+o*w)*ne,e[14]=(A*F-E*I-x*R)*ne,e[15]=(S*I-y*F+_*R)*ne,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,m=e.z,p=l*u,S=l*f;return this.set(p*u+s,p*f-o*m,p*m+o*f,0,p*f+o*m,S*f+s,S*m-o*u,0,p*m-o*f,S*m+o*u,l*m*m+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,S=u+u,y=f+f,_=l*p,M=l*S,E=l*y,A=u*S,x=u*y,v=f*y,R=m*p,F=m*S,b=m*y,I=s.x,N=s.y,B=s.z;return o[0]=(1-(A+v))*I,o[1]=(M+b)*I,o[2]=(E-F)*I,o[3]=0,o[4]=(M-b)*N,o[5]=(1-(_+v))*N,o[6]=(x+R)*N,o[7]=0,o[8]=(E+F)*B,o[9]=(x-R)*B,o[10]=(1-(_+A))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=da.set(o[0],o[1],o[2]).length();const f=da.set(o[4],o[5],o[6]).length(),m=da.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Xi.copy(this);const p=1/u,S=1/f,y=1/m;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=S,Xi.elements[5]*=S,Xi.elements[6]*=S,Xi.elements[8]*=y,Xi.elements[9]*=y,Xi.elements[10]*=y,t.setFromRotationMatrix(Xi),s.x=u,s.y=f,s.z=m,this}makePerspective(e,t,s,o,l,u,f=fr,m=!1){const p=this.elements,S=2*l/(t-e),y=2*l/(s-o),_=(t+e)/(t-e),M=(s+o)/(s-o);let E,A;if(m)E=l/(u-l),A=u*l/(u-l);else if(f===fr)E=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===Ao)E=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=S,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=fr,m=!1){const p=this.elements,S=2/(t-e),y=2/(s-o),_=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,A;if(m)E=1/(u-l),A=u/(u-l);else if(f===fr)E=-2/(u-l),A=-(u+l)/(u-l);else if(f===Ao)E=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=S,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Ec.prototype.isMatrix4=!0;let dn=Ec;const da=new te,Xi=new dn,lx=new te(0,0,0),cx=new te(1,1,1),ts=new te,Dl=new te,_i=new te,Gm=new dn,Hm=new Na;class us{constructor(e=0,t=0,s=0,o=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],S=o[9],y=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Xt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-S,M),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ux=0;const Wm=new te,fa=new Na,Ar=new dn,Ul=new te,uo=new te,dx=new te,fx=new Na,Xm=new te(1,0,0),qm=new te(0,1,0),$m=new te(0,0,1),jm={type:"added"},hx={type:"removed"},ha={type:"childadded",child:null},Sd={type:"childremoved",child:null};class Nn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new te,t=new us,s=new Na,o=new te(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new Ct}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ul.copy(e):Ul.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(uo,Ul,this.up):Ar.lookAt(Ul,uo,this.up),this.quaternion.setFromRotationMatrix(Ar),o&&(Ar.extractRotation(o.matrixWorld),fa.setFromRotationMatrix(Ar),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),ha.child=e,this.dispatchEvent(ha),ha.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hx),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const y=m[p];l(e.shapes,y)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),S=u(e.images),y=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),y.length>0&&(s.shapes=y),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const m=[];for(const p in f){const S=f[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nn.DEFAULT_UP=new te(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,s),v=this._getHandJoint(p,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const S=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],_=S.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(px)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new pn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Md(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Wt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Wt.workingColorSpace){if(e=tx(e,1),t=Xt(t,0,1),s=Xt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Md(u,l,e+1/3),this.g=Md(u,l,e),this.b=Md(u,l,e-1/3)}return Wt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ii){function s(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ii){const s=ag[e.toLowerCase()];return s!==void 0?this.setHex(s,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Wt.workingToColorSpace(jn.copy(this),e),Math.round(Xt(jn.r*255,0,255))*65536+Math.round(Xt(jn.g*255,0,255))*256+Math.round(Xt(jn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(jn.copy(this),t);const s=jn.r,o=jn.g,l=jn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let m,p;const S=(f+u)/2;if(f===u)m=0,p=0;else{const y=u-f;switch(p=S<=.5?y/(u+f):y/(2-u-f),u){case s:m=(o-l)/y+(o<l?6:0);break;case o:m=(l-s)/y+2;break;case l:m=(s-o)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Ii){Wt.workingToColorSpace(jn.copy(this),e);const t=jn.r,s=jn.g,o=jn.b;return e!==Ii?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Ol);const s=md(ns.h,Ol.h,t),o=md(ns.s,Ol.s,t),l=md(ns.l,Ol.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Bt;Bt.NAMES=ag;class jf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(e),this.density=t}clone(){return new jf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mx extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new te,br=new te,Ed=new te,Rr=new te,pa=new te,ma=new te,Ym=new te,wd=new te,Td=new te,Ad=new te,bd=new gn,Rd=new gn,Cd=new gn;class Di{constructor(e=new te,t=new te,s=new te){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),qi.subVectors(e,t),o.cross(qi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){qi.subVectors(o,t),br.subVectors(s,t),Ed.subVectors(e,t);const u=qi.dot(qi),f=qi.dot(br),m=qi.dot(Ed),p=br.dot(br),S=br.dot(Ed),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const _=1/y,M=(p*m-f*S)*_,E=(u*S-f*m)*_;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,s,o,l,u,f,m){return this.getBarycoord(e,t,s,o,Rr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Rr.x),m.addScaledVector(u,Rr.y),m.addScaledVector(f,Rr.z),m)}static getInterpolatedAttribute(e,t,s,o,l,u){return bd.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),bd.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,s),Cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(bd,l.x),u.addScaledVector(Rd,l.y),u.addScaledVector(Cd,l.z),u}static isFrontFacing(e,t,s,o){return qi.subVectors(s,t),br.subVectors(e,t),qi.cross(br).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),br.subVectors(this.a,this.b),qi.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;pa.subVectors(o,s),ma.subVectors(l,s),wd.subVectors(e,s);const m=pa.dot(wd),p=ma.dot(wd);if(m<=0&&p<=0)return t.copy(s);Td.subVectors(e,o);const S=pa.dot(Td),y=ma.dot(Td);if(S>=0&&y<=S)return t.copy(o);const _=m*y-S*p;if(_<=0&&m>=0&&S<=0)return u=m/(m-S),t.copy(s).addScaledVector(pa,u);Ad.subVectors(e,l);const M=pa.dot(Ad),E=ma.dot(Ad);if(E>=0&&M<=E)return t.copy(l);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(ma,f);const x=S*E-M*y;if(x<=0&&y-S>=0&&M-E>=0)return Ym.subVectors(l,o),f=(y-S)/(y-S+(M-E)),t.copy(o).addScaledVector(Ym,f);const v=1/(x+A+_);return u=A*v,f=_*v,t.copy(s).addScaledVector(pa,u).addScaledVector(ma,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,$i):$i.fromBufferAttribute(l,u),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fl.copy(s.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Bl.subVectors(this.max,fo),ga.subVectors(e.a,fo),va.subVectors(e.b,fo),_a.subVectors(e.c,fo),is.subVectors(va,ga),rs.subVectors(_a,va),Rs.subVectors(ga,_a);let t=[0,-is.z,is.y,0,-rs.z,rs.y,0,-Rs.z,Rs.y,is.z,0,-is.x,rs.z,0,-rs.x,Rs.z,0,-Rs.x,-is.y,is.x,0,-rs.y,rs.x,0,-Rs.y,Rs.x,0];return!Pd(t,ga,va,_a,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,ga,va,_a,Bl))?!1:(kl.crossVectors(is,rs),t=[kl.x,kl.y,kl.z],Pd(t,ga,va,_a,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cr=[new te,new te,new te,new te,new te,new te,new te,new te],$i=new te,Fl=new Co,ga=new te,va=new te,_a=new te,is=new te,rs=new te,Rs=new te,fo=new te,Bl=new te,kl=new te,Cs=new te;function Pd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Cs.fromArray(r,l);const f=o.x*Math.abs(Cs.x)+o.y*Math.abs(Cs.y)+o.z*Math.abs(Cs.z),m=e.dot(Cs),p=t.dot(Cs),S=s.dot(Cs);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>f)return!1}return!0}const Sn=new te,zl=new Vt;let gx=0;class Ki extends Vs{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=K_,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=co(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=ui(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=co(t,this.array)),t}setX(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=co(t,this.array)),t}setY(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=co(t,this.array)),t}setW(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),s=ui(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),s=ui(s,this.array),o=ui(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),s=ui(s,this.array),o=ui(o,this.array),l=ui(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class og extends Ki{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class lg extends Ki{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class tn extends Ki{constructor(e,t,s){super(new Float32Array(e),t,s)}}const vx=new Co,ho=new te,Ld=new te;class Po{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):vx.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ho,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(Ld)),this.expandByPoint(ho.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _x=0;const Ni=new dn,Nd=new Nn,xa=new te,xi=new Co,po=new Co,Ln=new te;class wn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?lg:og)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,s){return Ni.makeTranslation(e,t,s),this.applyMatrix4(Ni),this}scale(e,t,s){return Ni.makeScale(e,t,s),this.applyMatrix4(Ni),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new tn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];xi.setFromBufferAttribute(l),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];po.setFromBufferAttribute(f),this.morphTargetsRelative?(Ln.addVectors(xi.min,po.min),xi.expandByPoint(Ln),Ln.addVectors(xi.max,po.max),xi.expandByPoint(Ln)):(xi.expandByPoint(po.min),xi.expandByPoint(po.max))}xi.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)Ln.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Ln));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,S=f.count;p<S;p++)Ln.fromBufferAttribute(f,p),m&&(xa.fromBufferAttribute(e,p),Ln.add(xa)),o=Math.max(o,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new Ki(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let w=0;w<s.count;w++)f[w]=new te,m[w]=new te;const p=new te,S=new te,y=new te,_=new Vt,M=new Vt,E=new Vt,A=new te,x=new te;function v(w,L,z){p.fromBufferAttribute(s,w),S.fromBufferAttribute(s,L),y.fromBufferAttribute(s,z),_.fromBufferAttribute(l,w),M.fromBufferAttribute(l,L),E.fromBufferAttribute(l,z),S.sub(p),y.sub(p),M.sub(_),E.sub(_);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(A.copy(S).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(H),x.copy(y).multiplyScalar(M.x).addScaledVector(S,-E.x).multiplyScalar(H),f[w].add(A),f[L].add(A),f[z].add(A),m[w].add(x),m[L].add(x),m[z].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,L=R.length;w<L;++w){const z=R[w],H=z.start,W=z.count;for(let se=H,$=H+W;se<$;se+=3)v(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const F=new te,b=new te,I=new te,N=new te;function B(w){I.fromBufferAttribute(o,w),N.copy(I);const L=f[w];F.copy(L),F.sub(I.multiplyScalar(I.dot(L))).normalize(),b.crossVectors(N,L);const H=b.dot(m[w])<0?-1:1;u.setXYZW(w,F.x,F.y,F.z,H)}for(let w=0,L=R.length;w<L;++w){const z=R[w],H=z.start,W=z.count;for(let se=H,$=H+W;se<$;se+=3)B(e.getX(se+0)),B(e.getX(se+1)),B(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new Ki(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const o=new te,l=new te,u=new te,f=new te,m=new te,p=new te,S=new te,y=new te;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),A=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,x),S.subVectors(u,l),y.subVectors(o,l),S.cross(y),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,x),f.add(S),m.add(S),p.add(S),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),S.subVectors(u,l),y.subVectors(o,l),S.cross(y),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(f,m){const p=f.array,S=f.itemSize,y=f.normalized,_=new p.constructor(m.length*S);let M=0,E=0;for(let A=0,x=m.length;A<x;A++){f.isInterleavedBufferAttribute?M=m[A]*f.data.stride+f.offset:M=m[A]*S;for(let v=0;v<S;v++)_[E++]=p[M++]}return new Ki(_,S,y)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,s=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let S=0,y=p.length;S<y;S++){const _=p[S],M=e(_,s);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let y=0,_=p.length;y<_;y++){const M=p[y];S.push(M.toJSON(e.data))}S.length>0&&(o[m]=S,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const S=o[p];this.setAttribute(p,S.clone(t))}const l=e.morphAttributes;for(const p in l){const S=[],y=l[p];for(let _=0,M=y.length;_<M;_++)S.push(y[_].clone(t));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,S=u.length;p<S;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Id=new te,xx=new te,Sx=new Ct;class as{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Id.subVectors(s,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Id),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Sx.getNormalMatrix(e),o=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yx=0;class Gs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Mo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=z0,this.blendDst=V0,this.blendEquation=Ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pd,this.stencilZFail=pd,this.stencilZPass=pd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new as().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Vt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pr=new te,Dd=new te,Vl=new te,Gl=new te;class Yf{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Dd.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Gl.copy(this.origin).sub(Dd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Vl),f=Gl.dot(this.direction),m=-Gl.dot(Vl),p=Gl.lengthSq(),S=Math.abs(1-u*u);let y,_,M,E;if(S>0)if(y=u*m-f,_=u*f-m,E=l*S,y>=0)if(_>=-E)if(_<=E){const A=1/S;y*=A,_*=A,M=y*(y+u*_+2*f)+_*(u*y+_+2*m)+p}else _=l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;else _=-l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;else _<=-E?(y=Math.max(0,-(-u*l+f)),_=y>0?-l:Math.min(Math.max(-l,-m),l),M=-y*y+_*(_+2*m)+p):_<=E?(y=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(y=Math.max(0,-(u*l+f)),_=y>0?l:Math.min(Math.max(-l,-m),l),M=-y*y+_*(_+2*m)+p);else _=u>0?-l:l,y=Math.max(0,-(u*_+f)),M=-y*y+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Dd).addScaledVector(Vl,_),M}intersectSphere(e,t){if(e.radius<0)return null;Pr.subVectors(e.center,this.origin);const s=Pr.dot(this.direction),o=Pr.dot(Pr)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,m=s+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,m;const p=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),S>=0?(l=(e.min.y-_.y)*S,u=(e.max.y-_.y)*S):(l=(e.max.y-_.y)*S,u=(e.min.y-_.y)*S),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-_.z)*y,m=(e.max.z-_.z)*y):(f=(e.max.z-_.z)*y,m=(e.min.z-_.z)*y),s>m||f>o)||((f>s||s!==s)&&(s=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,s,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,S=f.z,y=e.x-u.x,_=e.y-u.y,M=e.z-u.z,E=t.x-u.x,A=t.y-u.y,x=t.z-u.z,v=s.x-u.x,R=s.y-u.y,F=s.z-u.z,b=Math.abs(m),I=Math.abs(p),N=Math.abs(S);let B,w,L,z,H,W,se,$,ne,ge,oe,Q;if(b>=I&&b>=N?(L=m,W=y,ne=E,Q=v,m>=0?(B=p,w=S,z=_,H=M,se=A,$=x,ge=R,oe=F):(B=S,w=p,z=M,H=_,se=x,$=A,ge=F,oe=R)):I>=N?(L=p,W=_,ne=A,Q=R,p>=0?(B=S,w=m,z=M,H=y,se=x,$=E,ge=F,oe=v):(B=m,w=S,z=y,H=M,se=E,$=x,ge=v,oe=F)):(L=S,W=M,ne=x,Q=F,S>=0?(B=m,w=p,z=y,H=_,se=E,$=A,ge=v,oe=R):(B=p,w=m,z=_,H=y,se=A,$=E,ge=R,oe=v)),L===0)return null;const ee=B/L,J=w/L,O=1/L,le=z-ee*W,Ee=H-J*W,Ze=se-ee*ne,Ke=$-J*ne,je=ge-ee*Q,de=oe-J*Q,pe=je*Ke-de*Ze,Ie=le*de-Ee*je,Qe=Ze*Ee-Ke*le;if(o){if(pe<0||Ie<0||Qe<0)return null}else if((pe<0||Ie<0||Qe<0)&&(pe>0||Ie>0||Qe>0))return null;const Ge=pe+Ie+Qe;if(Ge===0)return null;const pt=O*(pe*W+Ie*ne+Qe*Q);return(Ge>0?pt<0:pt>0)?null:this.at(pt/Ge,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Km=new dn,Ps=new Yf,Hl=new Po,Zm=new te,Wl=new te,Xl=new te,ql=new te,Ud=new te,$l=new te,Jm=new te,jl=new te;class Ne extends Nn{constructor(e=new wn,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){$l.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const S=f[m],y=l[m];S!==0&&(Ud.fromBufferAttribute(y,e),u?$l.addScaledVector(Ud,S):$l.addScaledVector(Ud.sub(t),S))}t.add($l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Hl.copy(s.boundingSphere),Hl.applyMatrix4(l),Ps.copy(e.ray).recast(e.near),!(Hl.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Hl,Zm)===null||Ps.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(l).invert(),Ps.copy(e.ray).applyMatrix4(Km),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,S=l.attributes.uv1,y=l.attributes.normal,_=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const x=_[E],v=u[x.materialIndex],R=Math.max(x.start,M.start),F=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let b=R,I=F;b<I;b+=3){const N=f.getX(b),B=f.getX(b+1),w=f.getX(b+2);o=Yl(this,v,e,s,p,S,y,N,B,w),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let x=E,v=A;x<v;x+=3){const R=f.getX(x),F=f.getX(x+1),b=f.getX(x+2);o=Yl(this,u,e,s,p,S,y,R,F,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const x=_[E],v=u[x.materialIndex],R=Math.max(x.start,M.start),F=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let b=R,I=F;b<I;b+=3){const N=b,B=b+1,w=b+2;o=Yl(this,v,e,s,p,S,y,N,B,w),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=E,v=A;x<v;x+=3){const R=x,F=x+1,b=x+2;o=Yl(this,u,e,s,p,S,y,R,F,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Mx(r,e,t,s,o,l,u,f){let m;if(e.side===fi?m=s.intersectTriangle(u,l,o,!0,f):m=s.intersectTriangle(o,l,u,e.side===Os,f),m===null)return null;jl.copy(f),jl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(jl);return p<t.near||p>t.far?null:{distance:p,point:jl.clone(),object:r}}function Yl(r,e,t,s,o,l,u,f,m,p){r.getVertexPosition(f,Wl),r.getVertexPosition(m,Xl),r.getVertexPosition(p,ql);const S=Mx(r,e,t,s,Wl,Xl,ql,Jm);if(S){const y=new te;Di.getBarycoord(Jm,Wl,Xl,ql,y),o&&(S.uv=Di.getInterpolatedAttribute(o,f,m,p,y,new Vt)),l&&(S.uv1=Di.getInterpolatedAttribute(l,f,m,p,y,new Vt)),u&&(S.normal=Di.getInterpolatedAttribute(u,f,m,p,y,new te),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new te,materialIndex:0};Di.getNormal(Wl,Xl,ql,_.normal),S.face=_,S.barycoord=y}return S}class Ex extends Zn{constructor(e=null,t=1,s=1,o,l,u,f,m,p=Bn,S=Bn,y,_){super(null,u,f,m,p,S,o,l,y,_),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ls=new Po,wx=new Vt(.5,.5),Kl=new te;class Kf{constructor(e=new as,t=new as,s=new as,o=new as,l=new as,u=new as){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=fr,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],S=l[4],y=l[5],_=l[6],M=l[7],E=l[8],A=l[9],x=l[10],v=l[11],R=l[12],F=l[13],b=l[14],I=l[15];if(o[0].setComponents(p-u,M-S,v-E,I-R).normalize(),o[1].setComponents(p+u,M+S,v+E,I+R).normalize(),o[2].setComponents(p+f,M+y,v+A,I+F).normalize(),o[3].setComponents(p-f,M-y,v-A,I-F).normalize(),s)o[4].setComponents(m,_,x,b).normalize(),o[5].setComponents(p-m,M-_,v-x,I-b).normalize();else if(o[4].setComponents(p-m,M-_,v-x,I-b).normalize(),t===fr)o[5].setComponents(p+m,M+_,v+x,I+b).normalize();else if(t===Ao)o[5].setComponents(m,_,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=wx.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Kl.x=o.normal.x>0?e.max.x:e.min.x,Kl.y=o.normal.y>0?e.max.y:e.min.y,Kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class os extends Gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yc=new te,Mc=new te,Qm=new dn,mo=new Yf,Zl=new Po,Od=new te,e0=new te;class cg extends Nn{constructor(e=new wn,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)yc.fromBufferAttribute(t,o-1),Mc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=yc.distanceTo(Mc);e.setAttribute("lineDistance",new tn(s,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Zl.copy(s.boundingSphere),Zl.applyMatrix4(o),Zl.radius+=l,e.ray.intersectsSphere(Zl)===!1)return;Qm.copy(o).invert(),mo.copy(e.ray).applyMatrix4(Qm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,S=s.index,_=s.attributes.position;if(S!==null){const M=Math.max(0,u.start),E=Math.min(S.count,u.start+u.count);for(let A=M,x=E-1;A<x;A+=p){const v=S.getX(A),R=S.getX(A+1),F=Jl(this,e,mo,m,v,R,A);F&&t.push(F)}if(this.isLineLoop){const A=S.getX(E-1),x=S.getX(M),v=Jl(this,e,mo,m,A,x,E-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let A=M,x=E-1;A<x;A+=p){const v=Jl(this,e,mo,m,A,A+1,A);v&&t.push(v)}if(this.isLineLoop){const A=Jl(this,e,mo,m,E-1,M,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Jl(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(yc.fromBufferAttribute(f,o),Mc.fromBufferAttribute(f,l),t.distanceSqToSegment(yc,Mc,Od,e0)>s)return;Od.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Od);if(!(p<e.near||p>e.far))return{distance:p,point:e0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const t0=new te,n0=new te;class Sa extends cg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)t0.fromBufferAttribute(t,o),n0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+t0.distanceTo(n0);e.setAttribute("lineDistance",new tn(s,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ug extends Gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i0=new dn,If=new Yf,Ql=new Po,ec=new te;class Tx extends Nn{constructor(e=new wn,t=new ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ql.copy(s.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;i0.copy(o).invert(),If.copy(e.ray).applyMatrix4(i0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=s.index,y=s.attributes.position;if(p!==null){const _=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=_,A=M;E<A;E++){const x=p.getX(E);ec.fromBufferAttribute(y,x),r0(ec,x,m,o,e,t,this)}}else{const _=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let E=_,A=M;E<A;E++)ec.fromBufferAttribute(y,E),r0(ec,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function r0(r,e,t,s,o,l,u){const f=If.distanceSqToPoint(r);if(f<t){const m=new te;If.closestPointToPoint(r,m),m.applyMatrix4(s);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class dg extends Zn{constructor(e=[],t=Fs,s,o,l,u,f,m,p,S){super(e,t,s,o,l,u,f,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tc extends Zn{constructor(e,t,s,o,l,u,f,m,p){super(e,t,s,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bo extends Zn{constructor(e,t,s=pr,o,l,u,f=Bn,m=Bn,p,S=Or,y=1){if(S!==Or&&S!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:y};super(_,o,l,u,f,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ax extends bo{constructor(e,t=pr,s=Fs,o,l,u=Bn,f=Bn,m,p=Or){const S={width:e,height:e,depth:1},y=[S,S,S,S,S,S];super(e,e,t,s,o,l,u,f,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fg extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class un extends wn{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],S=[],y=[];let _=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(y,2));function E(A,x,v,R,F,b,I,N,B,w,L){const z=b/B,H=I/w,W=b/2,se=I/2,$=N/2,ne=B+1,ge=w+1;let oe=0,Q=0;const ee=new te;for(let J=0;J<ge;J++){const O=J*H-se;for(let le=0;le<ne;le++){const Ee=le*z-W;ee[A]=Ee*R,ee[x]=O*F,ee[v]=$,p.push(ee.x,ee.y,ee.z),ee[A]=0,ee[x]=0,ee[v]=N>0?1:-1,S.push(ee.x,ee.y,ee.z),y.push(le/B),y.push(1-J/w),oe+=1}}for(let J=0;J<w;J++)for(let O=0;O<B;O++){const le=_+O+ne*J,Ee=_+O+ne*(J+1),Ze=_+(O+1)+ne*(J+1),Ke=_+(O+1)+ne*J;m.push(le,Ee,Ke),m.push(Ee,Ze,Ke),Q+=6}f.addGroup(M,Q,L),M+=Q,_+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Is extends wn{constructor(e=1,t=1,s=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:s,radialSegments:o,heightSegments:l},t=Math.max(0,t),s=Math.max(1,Math.floor(s)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],S=t/2,y=Math.PI/2*e,_=t,M=2*y+_,E=s*2+l,A=o+1,x=new te,v=new te;for(let R=0;R<=E;R++){let F=0,b=0,I=0,N=0;if(R<=s){const L=R/s,z=L*Math.PI/2;b=-S-e*Math.cos(z),I=e*Math.sin(z),N=-e*Math.cos(z),F=L*y}else if(R<=s+l){const L=(R-s)/l;b=-S+L*t,I=e,N=0,F=y+L*_}else{const L=(R-s-l)/s,z=L*Math.PI/2;b=S+e*Math.sin(z),I=e*Math.cos(z),N=e*Math.sin(z),F=y+_+L*y}const B=Math.max(0,Math.min(1,F/M));let w=0;R===0?w=.5/o:R===E&&(w=-.5/o);for(let L=0;L<=o;L++){const z=L/o,H=z*Math.PI*2,W=Math.sin(H),se=Math.cos(H);v.x=-I*se,v.y=b,v.z=I*W,f.push(v.x,v.y,v.z),x.set(-I*se,N,I*W),x.normalize(),m.push(x.x,x.y,x.z),p.push(z+w,B)}if(R>0){const L=(R-1)*A;for(let z=0;z<o;z++){const H=L+z,W=L+z+1,se=R*A+z,$=R*A+z+1;u.push(H,W,se),u.push(W,$,se)}}}this.setIndex(u),this.setAttribute("position",new tn(f,3)),this.setAttribute("normal",new tn(m,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mn extends wn{constructor(e=1,t=1,s=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const S=[],y=[],_=[],M=[];let E=0;const A=[],x=s/2;let v=0;R(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(S),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(M,2));function R(){const b=new te,I=new te;let N=0;const B=(t-e)/s;for(let w=0;w<=l;w++){const L=[],z=w/l,H=z*(t-e)+e;for(let W=0;W<=o;W++){const se=W/o,$=se*m+f,ne=Math.sin($),ge=Math.cos($);I.x=H*ne,I.y=-z*s+x,I.z=H*ge,y.push(I.x,I.y,I.z),b.set(ne,B,ge).normalize(),_.push(b.x,b.y,b.z),M.push(se,1-z),L.push(E++)}A.push(L)}for(let w=0;w<o;w++)for(let L=0;L<l;L++){const z=A[L][w],H=A[L+1][w],W=A[L+1][w+1],se=A[L][w+1];(e>0||L!==0)&&(S.push(z,H,se),N+=3),(t>0||L!==l-1)&&(S.push(H,W,se),N+=3)}p.addGroup(v,N,0),v+=N}function F(b){const I=E,N=new Vt,B=new te;let w=0;const L=b===!0?e:t,z=b===!0?1:-1;for(let W=1;W<=o;W++)y.push(0,x*z,0),_.push(0,z,0),M.push(.5,.5),E++;const H=E;for(let W=0;W<=o;W++){const $=W/o*m+f,ne=Math.cos($),ge=Math.sin($);B.x=L*ge,B.y=x*z,B.z=L*ne,y.push(B.x,B.y,B.z),_.push(0,z,0),N.x=ne*.5+.5,N.y=ge*.5*z+.5,M.push(N.x,N.y),E++}for(let W=0;W<o;W++){const se=I+W,$=H+W;b===!0?S.push($,$+1,se):S.push($+1,$,se),w+=3}p.addGroup(v,w,b===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ii extends mn{constructor(e=1,t=1,s=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,s,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zf extends wn{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),S(),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(l.slice(),3)),this.setAttribute("uv",new tn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const F=new te,b=new te,I=new te;for(let N=0;N<t.length;N+=3)M(t[N+0],F),M(t[N+1],b),M(t[N+2],I),m(F,b,I,R)}function m(R,F,b,I){const N=I+1,B=[];for(let w=0;w<=N;w++){B[w]=[];const L=R.clone().lerp(b,w/N),z=F.clone().lerp(b,w/N),H=N-w;for(let W=0;W<=H;W++)W===0&&w===N?B[w][W]=L:B[w][W]=L.clone().lerp(z,W/H)}for(let w=0;w<N;w++)for(let L=0;L<2*(N-w)-1;L++){const z=Math.floor(L/2);L%2===0?(_(B[w][z+1]),_(B[w+1][z]),_(B[w][z])):(_(B[w][z+1]),_(B[w+1][z+1]),_(B[w+1][z]))}}function p(R){const F=new te;for(let b=0;b<l.length;b+=3)F.x=l[b+0],F.y=l[b+1],F.z=l[b+2],F.normalize().multiplyScalar(R),l[b+0]=F.x,l[b+1]=F.y,l[b+2]=F.z}function S(){const R=new te;for(let F=0;F<l.length;F+=3){R.x=l[F+0],R.y=l[F+1],R.z=l[F+2];const b=x(R)/2/Math.PI+.5,I=v(R)/Math.PI+.5;u.push(b,1-I)}E(),y()}function y(){for(let R=0;R<u.length;R+=6){const F=u[R+0],b=u[R+2],I=u[R+4],N=Math.max(F,b,I),B=Math.min(F,b,I);N>.9&&B<.1&&(F<.2&&(u[R+0]+=1),b<.2&&(u[R+2]+=1),I<.2&&(u[R+4]+=1))}}function _(R){l.push(R.x,R.y,R.z)}function M(R,F){const b=R*3;F.x=e[b+0],F.y=e[b+1],F.z=e[b+2]}function E(){const R=new te,F=new te,b=new te,I=new te,N=new Vt,B=new Vt,w=new Vt;for(let L=0,z=0;L<l.length;L+=9,z+=6){R.set(l[L+0],l[L+1],l[L+2]),F.set(l[L+3],l[L+4],l[L+5]),b.set(l[L+6],l[L+7],l[L+8]),N.set(u[z+0],u[z+1]),B.set(u[z+2],u[z+3]),w.set(u[z+4],u[z+5]),I.copy(R).add(F).add(b).divideScalar(3);const H=x(I);A(N,z+0,R,H),A(B,z+2,F,H),A(w,z+4,b,H)}}function A(R,F,b,I){I<0&&R.x===1&&(u[F]=R.x-1),b.x===0&&b.z===0&&(u[F]=I/2/Math.PI+.5)}function x(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.vertices,e.indices,e.radius,e.detail)}}const tc=new te,nc=new te,Fd=new te,ic=new Di;class ya extends wn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(pc*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,p=[0,0,0],S=["a","b","c"],y=new Array(3),_={},M=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:A,b:x,c:v}=ic;if(A.fromBufferAttribute(f,p[0]),x.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),ic.getNormal(Fd),y[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,y[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,y[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let R=0;R<3;R++){const F=(R+1)%3,b=y[R],I=y[F],N=ic[S[R]],B=ic[S[F]],w=`${b}_${I}`,L=`${I}_${b}`;L in _&&_[L]?(Fd.dot(_[L].normal)<=l&&(M.push(N.x,N.y,N.z),M.push(B.x,B.y,B.z)),_[L]=null):w in _||(_[w]={index0:p[R],index1:p[F],normal:Fd.clone()})}}for(const E in _)if(_[E]){const{index0:A,index1:x}=_[E];tc.fromBufferAttribute(f,A),nc.fromBufferAttribute(f,x),M.push(tc.x,tc.y,tc.z),M.push(nc.x,nc.y,nc.z)}this.setAttribute("position",new tn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Jf extends Zf{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jf(e.radius,e.detail)}}class zs extends wn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),m=Math.floor(o),p=f+1,S=m+1,y=e/f,_=t/m,M=[],E=[],A=[],x=[];for(let v=0;v<S;v++){const R=v*_-u;for(let F=0;F<p;F++){const b=F*y-l;E.push(b,-R,0),A.push(0,0,1),x.push(F/f),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let R=0;R<f;R++){const F=R+p*v,b=R+p*(v+1),I=R+1+p*(v+1),N=R+1+p*v;M.push(F,b,N),M.push(b,I,N)}this.setIndex(M),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yn extends wn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const m=Math.min(u+f,Math.PI);let p=0;const S=[],y=new te,_=new te,M=[],E=[],A=[],x=[];for(let v=0;v<=s;v++){const R=[],F=v/s,b=u+F*f,I=e*Math.cos(b),N=Math.sqrt(e*e-I*I);let B=0;v===0&&u===0?B=.5/t:v===s&&m===Math.PI&&(B=-.5/t);for(let w=0;w<=t;w++){const L=w/t,z=o+L*l;y.x=-N*Math.cos(z),y.y=I,y.z=N*Math.sin(z),E.push(y.x,y.y,y.z),_.copy(y).normalize(),A.push(_.x,_.y,_.z),x.push(L+B,1-F),R.push(p++)}S.push(R)}for(let v=0;v<s;v++)for(let R=0;R<t;R++){const F=S[v][R+1],b=S[v][R],I=S[v+1][R],N=S[v+1][R+1];(v!==0||u>0)&&M.push(F,b,N),(v!==s-1||m<Math.PI)&&M.push(b,I,N)}this.setIndex(M),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ir extends wn{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const m=[],p=[],S=[],y=[],_=new te,M=new te,E=new te;for(let A=0;A<=s;A++){const x=u+A/s*f;for(let v=0;v<=o;v++){const R=v/o*l;M.x=(e+t*Math.cos(x))*Math.cos(R),M.y=(e+t*Math.cos(x))*Math.sin(R),M.z=t*Math.sin(x),p.push(M.x,M.y,M.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),E.subVectors(M,_).normalize(),S.push(E.x,E.y,E.z),y.push(v/o),y.push(A/s)}}for(let A=1;A<=s;A++)for(let x=1;x<=o;x++){const v=(o+1)*A+x-1,R=(o+1)*(A-1)+x-1,F=(o+1)*(A-1)+x,b=(o+1)*A+x;m.push(v,R,b),m.push(R,F,b)}this.setIndex(m),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function La(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(s0(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(s0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function ni(r){const e={};for(let t=0;t<r.length;t++){const s=La(r[t]);for(const o in s)e[o]=s[o]}return e}function s0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function bx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const Rx={clone:La,merge:ni};var Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new Bt().setHex(o.value);break;case"v2":this.uniforms[s].value=new Vt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new te().fromArray(o.value);break;case"v4":this.uniforms[s].value=new gn().fromArray(o.value);break;case"m3":this.uniforms[s].value=new Ct().fromArray(o.value);break;case"m4":this.uniforms[s].value=new dn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Lx extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bd extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nx extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qf extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kd=new dn,a0=new te,o0=new te;class pg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kf,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;a0.setFromMatrixPosition(e.matrixWorld),t.position.copy(a0),o0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(o0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){kd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(kd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===Ao||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rc=new te,sc=new Na,lr=new te;class mg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=fr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rc,sc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,sc,lr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(rc,sc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,sc,lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new te,l0=new Vt,c0=new Vt;class Si extends mg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nf*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,l0,c0),t.subVectors(c0,l0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pc*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*s/p,o*=u.width/m,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Dx extends pg{constructor(){super(new Si(90,1,.5,500)),this.isPointLightShadow=!0}}class u0 extends Qf{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new Dx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eh extends mg{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=S*this.view.offsetY,m=f-S*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ux extends pg{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ox extends Qf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Ux}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Fx extends Qf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ma=-90,Ea=1;class Bx extends Nn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Si(Ma,Ea,e,t);o.layers=this.layers,this.add(o);const l=new Si(Ma,Ea,e,t);l.layers=this.layers,this.add(l);const u=new Si(Ma,Ea,e,t);u.layers=this.layers,this.add(u);const f=new Si(Ma,Ea,e,t);f.layers=this.layers,this.add(f);const m=new Si(Ma,Ea,e,t);m.layers=this.layers,this.add(m);const p=new Si(Ma,Ea,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===fr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ao)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,S]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,S),e.setRenderTarget(y,_,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class kx extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sh=class sh{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};sh.prototype.isMatrix2=!0;let d0=sh;function f0(r,e,t,s){const o=zx(s);switch(t){case eg:return r*e;case ng:return r*e/o.components*o.byteLength;case Gf:return r*e/o.components*o.byteLength;case ks:return r*e*2/o.components*o.byteLength;case Hf:return r*e*2/o.components*o.byteLength;case tg:return r*e*3/o.components*o.byteLength;case ji:return r*e*4/o.components*o.byteLength;case Wf:return r*e*4/o.components*o.byteLength;case uc:case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fc:case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tf:case rf:return Math.max(r,16)*Math.max(e,8)/4;case ef:case nf:return Math.max(r,8)*Math.max(e,8)/2;case sf:case af:case lf:case cf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case of:case gc:case uf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Tf:case Af:case bf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rf:case Cf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vc:case Pf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zx(r){switch(r){case Mi:case K0:return{byteLength:1,components:1};case wo:case Z0:case mr:return{byteLength:2,components:1};case zf:case Vf:return{byteLength:2,components:4};case pr:case kf:case dr:return{byteLength:4,components:1};case J0:case Q0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gg(){let r=null,e=!1,t=null,s=null;function o(l,u){s=r.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Vx(r){const e=new WeakMap;function t(f,m){const p=f.array,S=f.usage,y=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,S),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,m,p){const S=m.array,y=m.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,S);else{y.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<y.length;M++){const E=y[_],A=y[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,y[_]=A)}y.length=_+1;for(let M=0,E=y.length;M<E;M++){const A=y[M];r.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(r.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const S=e.get(f);(!S||S.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,Yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kx=`#ifdef USE_BATCHING
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
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tS=`#ifdef USE_IRIDESCENCE
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
#endif`,nS=`#ifdef USE_BUMPMAP
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dS=`#define PI 3.141592653589793
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
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hS=`vec3 transformedNormal = objectNormal;
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
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",xS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,TS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CS=`#ifdef USE_GRADIENTMAP
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
}`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DS=`#ifdef USE_ENVMAP
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
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kS=`PhysicalMaterial material;
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
#endif`,zS=`uniform sampler2D dfgLUT;
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
}`,VS=`
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
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
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,XS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JS=`#if defined( USE_POINTS_UV )
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
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
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
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,by=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hy=`uniform sampler2D t2D;
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,Ky=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,sM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,oM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,hM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,gM=`uniform float size;
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
}`,vM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Gx,alphahash_pars_fragment:Hx,alphamap_fragment:Wx,alphamap_pars_fragment:Xx,alphatest_fragment:qx,alphatest_pars_fragment:$x,aomap_fragment:jx,aomap_pars_fragment:Yx,batching_pars_vertex:Kx,batching_vertex:Zx,begin_vertex:Jx,beginnormal_vertex:Qx,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:aS,color_fragment:oS,color_pars_fragment:lS,color_pars_vertex:cS,color_vertex:uS,common:dS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:hS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:gS,emissivemap_pars_fragment:vS,colorspace_fragment:_S,colorspace_pars_fragment:xS,envmap_fragment:SS,envmap_common_pars_fragment:yS,envmap_pars_fragment:MS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:DS,envmap_vertex:wS,fog_vertex:TS,fog_pars_vertex:AS,fog_fragment:bS,fog_pars_fragment:RS,gradientmap_pars_fragment:CS,lightmap_pars_fragment:PS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:NS,lights_pars_begin:IS,lights_toon_fragment:US,lights_toon_pars_fragment:OS,lights_phong_fragment:FS,lights_phong_pars_fragment:BS,lights_physical_fragment:kS,lights_physical_pars_fragment:zS,lights_fragment_begin:VS,lights_fragment_maps:GS,lights_fragment_end:HS,lightprobes_pars_fragment:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:jS,map_fragment:YS,map_pars_fragment:KS,map_particle_fragment:ZS,map_particle_pars_fragment:JS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:ay,normal_fragment_maps:oy,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:vy,premultiplied_alpha_fragment:_y,project_vertex:xy,dithering_fragment:Sy,dithering_pars_fragment:yy,roughnessmap_fragment:My,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:by,skinbase_vertex:Ry,skinning_pars_vertex:Cy,skinning_vertex:Py,skinnormal_vertex:Ly,specularmap_fragment:Ny,specularmap_pars_fragment:Iy,tonemapping_fragment:Dy,tonemapping_pars_fragment:Uy,transmission_fragment:Oy,transmission_pars_fragment:Fy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:zy,worldpos_vertex:Vy,background_vert:Gy,background_frag:Hy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:qy,cube_frag:$y,depth_vert:jy,depth_frag:Yy,distance_vert:Ky,distance_frag:Zy,equirect_vert:Jy,equirect_frag:Qy,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:hM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:vM,shadow_vert:_M,shadow_frag:xM,sprite_vert:SM,sprite_frag:yM},Ye={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},ur={basic:{uniforms:ni([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ni([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ni([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ni([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ni([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ni([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ni([Ye.points,Ye.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ni([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ni([Ye.common,Ye.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ni([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ni([Ye.sprite,Ye.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:ni([Ye.common,Ye.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:ni([Ye.lights,Ye.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ur.physical={uniforms:ni([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ac={r:0,b:0,g:0},MM=new dn,vg=new Ct;vg.set(-1,0,0,0,1,0,0,0,1);function EM(r,e,t,s,o,l){const u=new Bt(0);let f=o===!0?0:1,m,p,S=null,y=0,_=null;function M(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const b=R.backgroundBlurriness>0;F=e.get(F,b)}return F}function E(R){let F=!1;const b=M(R);b===null?x(u,f):b&&b.isColor&&(x(b,1),F=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,F){const b=M(F);b&&(b.isCubeTexture||b.mapping===wc)?(p===void 0&&(p=new Ne(new un(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:La(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(MM.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(vg),p.material.toneMapped=Wt.getTransfer(b.colorSpace)!==en,(S!==b||y!==b.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,S=b,y=b.version,_=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new Ne(new zs(2,2),new Zi({name:"BackgroundMaterial",uniforms:La(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Wt.getTransfer(b.colorSpace)!==en,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(S!==b||y!==b.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,S=b,y=b.version,_=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function x(R,F){R.getRGB(ac,hg(r)),t.buffers.color.setClear(ac.r,ac.g,ac.b,F,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,F=1){u.set(R),f=F,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(u,f)},render:E,addToRenderList:A,dispose:v}}function wM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,u=!1;function f(H,W,se,$,ne){let ge=!1;const oe=y(H,$,se,W);l!==oe&&(l=oe,p(l.object)),ge=M(H,$,se,ne),ge&&E(H,$,se,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,b(H,W,se,$),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function S(H){return r.deleteVertexArray(H)}function y(H,W,se,$){const ne=$.wireframe===!0;let ge=s[W.id];ge===void 0&&(ge={},s[W.id]=ge);const oe=H.isInstancedMesh===!0?H.id:0;let Q=ge[oe];Q===void 0&&(Q={},ge[oe]=Q);let ee=Q[se.id];ee===void 0&&(ee={},Q[se.id]=ee);let J=ee[ne];return J===void 0&&(J=_(m()),ee[ne]=J),J}function _(H){const W=[],se=[],$=[];for(let ne=0;ne<t;ne++)W[ne]=0,se[ne]=0,$[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:se,attributeDivisors:$,object:H,attributes:{},index:null}}function M(H,W,se,$){const ne=l.attributes,ge=W.attributes;let oe=0;const Q=se.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const O=ne[ee];let le=ge[ee];if(le===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(le=H.instanceColor)),O===void 0||O.attribute!==le||le&&O.data!==le.data)return!0;oe++}return l.attributesNum!==oe||l.index!==$}function E(H,W,se,$){const ne={},ge=W.attributes;let oe=0;const Q=se.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let O=ge[ee];O===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const le={};le.attribute=O,O&&O.data&&(le.data=O.data),ne[ee]=le,oe++}l.attributes=ne,l.attributesNum=oe,l.index=$}function A(){const H=l.newAttributes;for(let W=0,se=H.length;W<se;W++)H[W]=0}function x(H){v(H,0)}function v(H,W){const se=l.newAttributes,$=l.enabledAttributes,ne=l.attributeDivisors;se[H]=1,$[H]===0&&(r.enableVertexAttribArray(H),$[H]=1),ne[H]!==W&&(r.vertexAttribDivisor(H,W),ne[H]=W)}function R(){const H=l.newAttributes,W=l.enabledAttributes;for(let se=0,$=W.length;se<$;se++)W[se]!==H[se]&&(r.disableVertexAttribArray(se),W[se]=0)}function F(H,W,se,$,ne,ge,oe){oe===!0?r.vertexAttribIPointer(H,W,se,ne,ge):r.vertexAttribPointer(H,W,se,$,ne,ge)}function b(H,W,se,$){A();const ne=$.attributes,ge=se.getAttributes(),oe=W.defaultAttributeValues;for(const Q in ge){const ee=ge[Q];if(ee.location>=0){let J=ne[Q];if(J===void 0&&(Q==="instanceMatrix"&&H.instanceMatrix&&(J=H.instanceMatrix),Q==="instanceColor"&&H.instanceColor&&(J=H.instanceColor)),J!==void 0){const O=J.normalized,le=J.itemSize,Ee=e.get(J);if(Ee===void 0)continue;const Ze=Ee.buffer,Ke=Ee.type,je=Ee.bytesPerElement,de=Ke===r.INT||Ke===r.UNSIGNED_INT||J.gpuType===kf;if(J.isInterleavedBufferAttribute){const pe=J.data,Ie=pe.stride,Qe=J.offset;if(pe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ee.locationSize;Ge++)v(ee.location+Ge,pe.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<ee.locationSize;Ge++)x(ee.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ge=0;Ge<ee.locationSize;Ge++)F(ee.location+Ge,le/ee.locationSize,Ke,O,Ie*je,(Qe+le/ee.locationSize*Ge)*je,de)}else{if(J.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)v(ee.location+pe,J.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<ee.locationSize;pe++)x(ee.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let pe=0;pe<ee.locationSize;pe++)F(ee.location+pe,le/ee.locationSize,Ke,O,le*je,le/ee.locationSize*pe*je,de)}}else if(oe!==void 0){const O=oe[Q];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ee.location,O);break;case 3:r.vertexAttrib3fv(ee.location,O);break;case 4:r.vertexAttrib4fv(ee.location,O);break;default:r.vertexAttrib1fv(ee.location,O)}}}}R()}function I(){L();for(const H in s){const W=s[H];for(const se in W){const $=W[se];for(const ne in $){const ge=$[ne];for(const oe in ge)S(ge[oe].object),delete ge[oe];delete $[ne]}}delete s[H]}}function N(H){if(s[H.id]===void 0)return;const W=s[H.id];for(const se in W){const $=W[se];for(const ne in $){const ge=$[ne];for(const oe in ge)S(ge[oe].object),delete ge[oe];delete $[ne]}}delete s[H.id]}function B(H){for(const W in s){const se=s[W];for(const $ in se){const ne=se[$];if(ne[H.id]===void 0)continue;const ge=ne[H.id];for(const oe in ge)S(ge[oe].object),delete ge[oe];delete ne[H.id]}}}function w(H){for(const W in s){const se=s[W],$=H.isInstancedMesh===!0?H.id:0,ne=se[$];if(ne!==void 0){for(const ge in ne){const oe=ne[ge];for(const Q in oe)S(oe[Q].object),delete oe[Q];delete ne[ge]}delete se[$],Object.keys(se).length===0&&delete s[W]}}}function L(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:x,disableUnusedAttributes:R}}function TM(r,e,t){let s;function o(m){s=m}function l(m,p){r.drawArrays(s,m,p),t.update(p,s,1)}function u(m,p,S){S!==0&&(r.drawArraysInstanced(s,m,p,S),t.update(p,s,S))}function f(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let _=0;for(let M=0;M<S;M++)_+=p[M];t.update(_,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function AM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==ji&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const w=B===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Mi&&B!==dr&&!w&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const S=m(p);S!==p&&(wt("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const y=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:b,maxSamples:I,samples:N}}function bM(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new as,f=new Ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const M=y.length!==0||_||s!==0||o;return o=_,s=y.length,M},this.beginShadows=function(){l=!0,S(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,_){t=S(y,_,0)},this.setState=function(y,_,M){const E=y.clippingPlanes,A=y.clipIntersection,x=y.clipShadows,v=r.get(y);if(!o||E===null||E.length===0||l&&!x)l?S(null):p();else{const R=l?0:s,F=R*4;let b=v.clippingState||null;m.value=b,b=S(E,_,F,M);for(let I=0;I!==F;++I)b[I]=t[I];v.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(y,_,M,E){const A=y!==null?y.length:0;let x=null;if(A!==0){if(x=m.value,E!==!0||x===null){const v=M+A*4,R=_.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<v)&&(x=new Float32Array(v));for(let F=0,b=M;F!==A;++F,b+=4)u.copy(y[F]).applyMatrix4(R,f),u.normal.toArray(x,b),x[b+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const ba=4,RM=6,CM=20,PM=256,go=new eh,h0=new Bt;let zd=null,Vd=0,Gd=0,Hd=!1;const LM=new te,Ns=new te;class p0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=LM}=l;zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Vd,Gd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:mr,format:ji,colorSpace:_c,depthBuffer:!1},o=m0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NM(l)),this._blurMaterial=DM(l,e,t),this._ggxMaterial=IM(l,e,t)}return o}_compileMaterial(e){const t=new Ne(new wn,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,s,o,l){const m=new Si(90,1,t,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],y=this._renderer,_=y.autoClear,M=y.toneMapping;y.getClearColor(h0),y.toneMapping=hr,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new un,new Ft({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let v=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,v=!0):(x.color.copy(h0),v=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+S[F],l.y,l.z)):b===1?(m.up.set(0,0,p[F]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+S[F],l.z)):(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+S[F]));const I=this._cubeSize;wa(o,b*I,F>2?I:0,I,I),y.setRenderTarget(o),v&&y.render(A,m),y.render(e,m)}y.toneMapping=M,y.autoClear=_,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Fs||e.mapping===Pa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;wa(t,0,0,3*m,2*m),s.setRenderTarget(t),s.render(u,go)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),S=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-S*S),_=p*1.25,M=y*_,{_lodMax:E}=this,A=this._sizeLods[s],x=3*A*(s>E-ba?s-E+ba:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-t,wa(l,x,v,3*A,2*A),o.setRenderTarget(l),o.render(f,go),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-s,wa(e,x,v,3*A,2*A),o.setRenderTarget(e),o.render(f,go)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,u),this._blurPass(l,e,s,s,u)}_blurPass(e,t,s,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const S=this._sizeLods[o],y=3*S*(o>this._lodMax-ba?o-this._lodMax+ba:0),_=4*(this._cubeSize-S);wa(t,y,_,3*S,2*S),u.setRenderTarget(t),u.render(m,go)}}function NM(r){const e=[],t=[];let s=r;const o=r-ba+1+RM;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);const f=1/(u-2),m=-f,p=1+f,S=[m,m,p,m,p,p,m,m,p,p,m,p],y=6,_=6,M=3,E=new Float32Array(M*_*y),A=new Float32Array(M*_*y);for(let v=0;v<y;v++){const R=v%3*2/3-1,F=v>2?0:-1,b=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];E.set(b,M*_*v);for(let I=0;I<_;I++){const N=S[I*2]*2-1,B=S[I*2+1]*2-1;v===0?Ns.set(1,B,N):v===1?Ns.set(-N,1,-B):v===2?Ns.set(-N,B,1):v===3?Ns.set(-1,B,-N):v===4?Ns.set(-N,-1,B):Ns.set(N,B,-1),Ns.toArray(A,(v*_+I)*M)}}const x=new wn;x.setAttribute("position",new Ki(E,M)),x.setAttribute("outputDirection",new Ki(A,M)),t.push(new Ne(x,null)),s>ba&&s--}return{lodMeshes:t,sizeLods:e}}function m0(r,e,t){const s=new Yi(r,e,t);return s.texture.mapping=wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wa(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function IM(r,e,t){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function DM(r,e,t){return new Zi({name:"SphericalGaussianBlur",defines:{SAMPLES:CM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function g0(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function v0(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _g extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new un(5,5,5),l=new Zi({name:"CubemapFromEquirect",uniforms:La(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Dr});l.uniforms.tEquirect.value=t;const u=new Ne(o,l),f=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Kn),new Bx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function UM(r){let e=new WeakMap,t=new WeakMap,s=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===dd||M===fd)if(e.has(_)){const E=e.get(_).texture;return f(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const A=new _g(E.height);return A.fromEquirectangularTexture(r,_),e.set(_,A),_.addEventListener("dispose",p),f(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,E=M===dd||M===fd,A=M===Fs||M===Pa;if(E||A){let x=t.get(_);const v=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new p0(r)),x=E?s.fromEquirectangular(_,x):s.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const R=_.image;return E&&R&&R.height>0||A&&R&&m(R)?(s===null&&(s=new p0(r)),x=E?s.fromEquirectangular(_):s.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",S),x.texture):null}}}return _}function f(_,M){return M===dd?_.mapping=Fs:M===fd&&(_.mapping=Pa),_}function m(_){let M=0;const E=6;for(let A=0;A<E;A++)_[A]!==void 0&&M++;return M===E}function p(_){const M=_.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function S(_){const M=_.target;M.removeEventListener("dispose",S);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function OM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Ra("WebGLRenderer: "+s+" extension not supported."),o}}}function FM(r,e,t,s){const o={},l=new WeakMap;function u(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(y,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function m(y){const _=y.attributes;for(const M in _)e.update(_[M],r.ARRAY_BUFFER)}function p(y){const _=[],M=y.index,E=y.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const R=M.array;A=M.version;for(let F=0,b=R.length;F<b;F+=3){const I=R[F+0],N=R[F+1],B=R[F+2];_.push(I,N,N,B,B,I)}}else{const R=E.array;A=E.version;for(let F=0,b=R.length/3-1;F<b;F+=3){const I=F+0,N=F+1,B=F+2;_.push(I,N,N,B,B,I)}}const x=new(E.count>=65535?lg:og)(_,1);x.version=A;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function S(y){const _=l.get(y);if(_){const M=y.index;M!==null&&_.version<M.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:m,getWireframeAttribute:S}}function BM(r,e,t){let s;function o(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function m(y,_){r.drawElements(s,_,l,y*u),t.update(_,s,1)}function p(y,_,M){M!==0&&(r.drawElementsInstanced(s,_,l,y*u,M),t.update(_,s,M))}function S(y,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,l,y,0,M);let A=0;for(let x=0;x<M;x++)A+=_[x];t.update(A,s,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function kM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Kt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function zM(r,e,t){const s=new WeakMap,o=new gn;function l(u,f,m){const p=u.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=S!==void 0?S.length:0;let _=s.get(f);if(_===void 0||_.count!==y){let z=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var M=z;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),A===!0&&(b=2),x===!0&&(b=3);let I=f.attributes.position.count*b,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*N*4*y),w=new rg(B,I,N,y);w.type=dr,w.needsUpdate=!0;const L=b*4;for(let H=0;H<y;H++){const W=v[H],se=R[H],$=F[H],ne=I*N*4*H;for(let ge=0;ge<W.count;ge++){const oe=ge*L;E===!0&&(o.fromBufferAttribute(W,ge),B[ne+oe+0]=o.x,B[ne+oe+1]=o.y,B[ne+oe+2]=o.z,B[ne+oe+3]=0),A===!0&&(o.fromBufferAttribute(se,ge),B[ne+oe+4]=o.x,B[ne+oe+5]=o.y,B[ne+oe+6]=o.z,B[ne+oe+7]=0),x===!0&&(o.fromBufferAttribute($,ge),B[ne+oe+8]=o.x,B[ne+oe+9]=o.y,B[ne+oe+10]=o.z,B[ne+oe+11]=$.itemSize===4?o.w:1)}}_={count:y,texture:w,size:new Vt(I,N)},s.set(f,_),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const A=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function VM(r,e,t,s,o){let l=new WeakMap;function u(p){const S=o.render.frame,y=p.geometry,_=e.get(p,y);if(l.get(_)!==S&&(e.update(_),l.set(_,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==S&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,S))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==S&&(M.update(),l.set(M,S))}return _}function f(){l=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),t.remove(S.instanceMatrix),S.instanceColor!==null&&t.remove(S.instanceColor)}return{update:u,dispose:f}}const GM={[H0]:"LINEAR_TONE_MAPPING",[W0]:"REINHARD_TONE_MAPPING",[X0]:"CINEON_TONE_MAPPING",[Bf]:"ACES_FILMIC_TONE_MAPPING",[$0]:"AGX_TONE_MAPPING",[j0]:"NEUTRAL_TONE_MAPPING",[q0]:"CUSTOM_TONE_MAPPING"};function HM(r,e,t,s,o,l){const u=new Yi(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new wn;p.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new tn([0,2,0,0,2,0],2));const S=new Lx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Ne(p,S),_=new eh(-1,1,1,-1,0,1);let M=null,E=null,A=!1,x,v=null,R=[],F=!1;this.setSize=function(b,I){u.setSize(b,I),f!==null&&f.setSize(b,I),m!==null&&m.setSize(b,I);for(let N=0;N<R.length;N++){const B=R[N];B.setSize&&B.setSize(b,I)}},this.setEffects=function(b){R=b,F=R.length>0&&R[0].isRenderPass===!0;const I=u.width,N=u.height;R.length>0&&f===null&&(f=new Yi(I,N,{type:mr,depthBuffer:!1,stencilBuffer:!1}),m=new Yi(I,N,{type:mr,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<R.length;B++){const w=R[B];w.setSize&&w.setSize(I,N)}},this.begin=function(b,I){if(A||b.toneMapping===hr&&R.length===0)return!1;if(v=I,I!==null){const N=I.width,B=I.height;(u.width!==N||u.height!==B)&&this.setSize(N,B)}return F===!1&&b.setRenderTarget(u),x=b.toneMapping,b.toneMapping=hr,!0},this.hasRenderPass=function(){return F},this.end=function(b,I){b.toneMapping=x,A=!0;let N=u,B=f;for(let w=0;w<R.length;w++){const L=R[w];L.enabled!==!1&&(L.render(b,B,N,I),L.needsSwap!==!1&&(N=B,B=B===f?m:f))}if(M!==b.outputColorSpace||E!==b.toneMapping){M=b.outputColorSpace,E=b.toneMapping,S.defines={},Wt.getTransfer(M)===en&&(S.defines.SRGB_TRANSFER="");const w=GM[E];w&&(S.defines[w]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=N.texture,b.setRenderTarget(v),b.render(y,_),v=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),S.dispose()}}const xg=new Zn,Df=new bo(1,1),Sg=new rg,yg=new ox,Mg=new dg,_0=[],x0=[],S0=new Float32Array(16),y0=new Float32Array(9),M0=new Float32Array(4);function Ia(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=_0[o];if(l===void 0&&(l=new Float32Array(o),_0[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function Tn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function An(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function bc(r,e){let t=x0[e];t===void 0&&(t=new Int32Array(e),x0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;r.uniform2fv(this.addr,e),An(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;r.uniform3fv(this.addr,e),An(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;r.uniform4fv(this.addr,e),An(t,e)}}function jM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,s))return;M0.set(s),r.uniformMatrix2fv(this.addr,!1,M0),An(t,s)}}function YM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,s))return;y0.set(s),r.uniformMatrix3fv(this.addr,!1,y0),An(t,s)}}function KM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,s))return;S0.set(s),r.uniformMatrix4fv(this.addr,!1,S0),An(t,s)}}function ZM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;r.uniform2iv(this.addr,e),An(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;r.uniform3iv(this.addr,e),An(t,e)}}function eE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;r.uniform4iv(this.addr,e),An(t,e)}}function tE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;r.uniform2uiv(this.addr,e),An(t,e)}}function iE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;r.uniform3uiv(this.addr,e),An(t,e)}}function rE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;r.uniform4uiv(this.addr,e),An(t,e)}}function sE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?qf:Xf,l=Df):l=xg,t.setTexture2D(e||l,o)}function aE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||yg,o)}function oE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Mg,o)}function lE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Sg,o)}function cE(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return $M;case 35674:return jM;case 35675:return YM;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return lE}}function uE(r,e){r.uniform1fv(this.addr,e)}function dE(r,e){const t=Ia(e,this.size,2);r.uniform2fv(this.addr,t)}function fE(r,e){const t=Ia(e,this.size,3);r.uniform3fv(this.addr,t)}function hE(r,e){const t=Ia(e,this.size,4);r.uniform4fv(this.addr,t)}function pE(r,e){const t=Ia(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mE(r,e){const t=Ia(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gE(r,e){const t=Ia(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vE(r,e){r.uniform1iv(this.addr,e)}function _E(r,e){r.uniform2iv(this.addr,e)}function xE(r,e){r.uniform3iv(this.addr,e)}function SE(r,e){r.uniform4iv(this.addr,e)}function yE(r,e){r.uniform1uiv(this.addr,e)}function ME(r,e){r.uniform2uiv(this.addr,e)}function EE(r,e){r.uniform3uiv(this.addr,e)}function wE(r,e){r.uniform4uiv(this.addr,e)}function TE(r,e,t){const s=this.cache,o=e.length,l=bc(t,o);Tn(s,l)||(r.uniform1iv(this.addr,l),An(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Df:u=xg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function AE(r,e,t){const s=this.cache,o=e.length,l=bc(t,o);Tn(s,l)||(r.uniform1iv(this.addr,l),An(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||yg,l[u])}function bE(r,e,t){const s=this.cache,o=e.length,l=bc(t,o);Tn(s,l)||(r.uniform1iv(this.addr,l),An(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Mg,l[u])}function RE(r,e,t){const s=this.cache,o=e.length,l=bc(t,o);Tn(s,l)||(r.uniform1iv(this.addr,l),An(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Sg,l[u])}function CE(r){switch(r){case 5126:return uE;case 35664:return dE;case 35665:return fE;case 35666:return hE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return vE;case 35667:case 35671:return _E;case 35668:case 35672:return xE;case 35669:case 35673:return SE;case 5125:return yE;case 36294:return ME;case 36295:return EE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return RE}}class PE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=cE(t.type)}}class LE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CE(t.type)}}class NE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function E0(r,e){r.seq.push(e),r.map[e.id]=e}function IE(r,e,t){const s=r.name,o=s.length;for(Wd.lastIndex=0;;){const l=Wd.exec(s),u=Wd.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){E0(t,p===void 0?new PE(f,r,e):new LE(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new NE(f),E0(t,y)),t=y}}}class mc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);IE(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=s[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function w0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const DE=37297;let UE=0;function OE(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const T0=new Ct;function FE(r){Wt._getMatrix(T0,Wt.workingColorSpace,r);const e=`mat3( ${T0.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(r)){case xc:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function A0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+OE(r.getShaderSource(e),f)}else return l}function BE(r,e){const t=FE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kE={[H0]:"Linear",[W0]:"Reinhard",[X0]:"Cineon",[Bf]:"ACESFilmic",[$0]:"AgX",[j0]:"Neutral",[q0]:"Custom"};function zE(r,e){const t=kE[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oc=new te;function VE(){Wt.getLuminanceCoefficients(oc);const r=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function HE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function WE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function xo(r){return r!==""}function b0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(r){return r.replace(XE,$E)}const qE=new Map;function $E(r,e){let t=Ot[e];if(t===void 0){const s=qE.get(e);if(s!==void 0)t=Ot[s],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uf(t)}const jE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(r){return r.replace(jE,YE)}function YE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function P0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const KE={[cc]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function ZE(r){return KE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JE={[Fs]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function QE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":JE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const e1={[Pa]:"ENVMAP_MODE_REFRACTION"};function t1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":e1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n1={[G0]:"ENVMAP_BLENDING_MULTIPLY",[B_]:"ENVMAP_BLENDING_MIX",[k_]:"ENVMAP_BLENDING_ADD"};function i1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":n1[r.combine]||"ENVMAP_BLENDING_NONE"}function r1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function s1(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=ZE(t),p=QE(t),S=t1(t),y=i1(t),_=r1(t),M=GE(t),E=HE(l),A=o.createProgram();let x,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xo).join(`
`),v.length>0&&(v+=`
`)):(x=[P0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),v=[P0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+S:"",t.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?Ot.tonemapping_pars_fragment:"",t.toneMapping!==hr?zE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,BE("linearToOutputTexel",t.outputColorSpace),VE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),u=Uf(u),u=b0(u,t),u=R0(u,t),f=Uf(f),f=b0(f,t),f=R0(f,t),u=C0(u),f=C0(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=R+x+u,b=R+v+f,I=w0(o,o.VERTEX_SHADER,F),N=w0(o,o.FRAGMENT_SHADER,b);o.attachShader(A,I),o.attachShader(A,N),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(H){if(r.debug.checkShaderErrors){const W=o.getProgramInfoLog(A)||"",se=o.getShaderInfoLog(I)||"",$=o.getShaderInfoLog(N)||"",ne=W.trim(),ge=se.trim(),oe=$.trim();let Q=!0,ee=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,I,N);else{const J=A0(o,I,"vertex"),O=A0(o,N,"fragment");Kt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ne+`
`+J+`
`+O)}else ne!==""?wt("WebGLProgram: Program Info Log:",ne):(ge===""||oe==="")&&(ee=!1);ee&&(H.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:ge,prefix:x},fragmentShader:{log:oe,prefix:v}})}o.deleteShader(I),o.deleteShader(N),w=new mc(o,A),L=WE(o,A)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(A,DE)),z},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=N,this}let a1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new l1(e),t.set(e,s)),s}}class l1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function c1(r){return r===ks||r===gc||r===vc}function u1(r,e,t,s,o,l){const u=new sg,f=new o1,m=new Set,p=[],S=new Map,y=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return m.add(w),w===0?"uv":`uv${w}`}function A(w,L,z,H,W,se){const $=H.fog,ne=W.geometry,ge=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Q=e.get(w.envMap||ge,oe),ee=Q&&Q.mapping===wc?Q.image.height:null,J=M[w.type];w.precision!==null&&(_=s.getMaxPrecision(w.precision),_!==w.precision&&wt("WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const O=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,le=O!==void 0?O.length:0;let Ee=0;ne.morphAttributes.position!==void 0&&(Ee=1),ne.morphAttributes.normal!==void 0&&(Ee=2),ne.morphAttributes.color!==void 0&&(Ee=3);let Ze,Ke,je,de;if(J){const Lt=ur[J];Ze=Lt.vertexShader,Ke=Lt.fragmentShader}else{Ze=w.vertexShader,Ke=w.fragmentShader;const Lt=f.getVertexShaderStage(w),Xe=f.getFragmentShaderStage(w);f.update(w,Lt,Xe),je=Lt.id,de=Xe.id}const pe=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Qe=W.isInstancedMesh===!0,Ge=W.isBatchedMesh===!0,pt=!!w.map,qt=!!w.matcap,ft=!!Q,At=!!w.aoMap,Pt=!!w.lightMap,Mt=!!w.bumpMap&&w.wireframe===!1,It=!!w.normalMap,Gt=!!w.displacementMap,_t=!!w.emissiveMap,xt=!!w.metalnessMap,Et=!!w.roughnessMap,q=w.anisotropy>0,Qt=w.clearcoat>0,bt=w.dispersion>0,k=w.retroreflectivity>0,T=w.iridescence>0,K=w.sheen>0,ue=w.transmission>0,_e=q&&!!w.anisotropyMap,we=Qt&&!!w.clearcoatMap,ke=Qt&&!!w.clearcoatNormalMap,ie=Qt&&!!w.clearcoatRoughnessMap,ae=T&&!!w.iridescenceMap,Le=T&&!!w.iridescenceThicknessMap,Ce=K&&!!w.sheenColorMap,Oe=K&&!!w.sheenRoughnessMap,Me=!!w.specularMap,et=!!w.specularColorMap,Se=!!w.specularIntensityMap,Je=ue&&!!w.transmissionMap,G=ue&&!!w.thicknessMap,Fe=!!w.gradientMap,xe=!!w.alphaMap,De=w.alphaTest>0,Be=!!w.alphaHash,ye=!!w.extensions;let $e=hr;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&($e=r.toneMapping);const qe={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:Ke,defines:w.defines,customVertexShaderID:je,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Ge,batchingColor:Ge&&W._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&W.instanceColor!==null,instancingMorph:Qe&&W.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:qt,envMap:ft,envMapMode:ft&&Q.mapping,envMapCubeUVHeight:ee,aoMap:At,lightMap:Pt,bumpMap:Mt,normalMap:It,displacementMap:Gt,emissiveMap:_t,normalMapObjectSpace:It&&w.normalMapType===G_,normalMapTangentSpace:It&&w.normalMapType===Lf,packedNormalMap:It&&w.normalMapType===Lf&&c1(w.normalMap.format),metalnessMap:xt,roughnessMap:Et,anisotropy:q,anisotropyMap:_e,clearcoat:Qt,clearcoatMap:we,clearcoatNormalMap:ke,clearcoatRoughnessMap:ie,dispersion:bt,retroreflection:k,iridescence:T,iridescenceMap:ae,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:Oe,specularMap:Me,specularColorMap:et,specularIntensityMap:Se,transmission:ue,transmissionMap:Je,thicknessMap:G,gradientMap:Fe,opaque:w.transparent===!1&&w.blending===Mo&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:De,alphaHash:Be,combine:w.combine,mapUv:pt&&E(w.map.channel),aoMapUv:At&&E(w.aoMap.channel),lightMapUv:Pt&&E(w.lightMap.channel),bumpMapUv:Mt&&E(w.bumpMap.channel),normalMapUv:It&&E(w.normalMap.channel),displacementMapUv:Gt&&E(w.displacementMap.channel),emissiveMapUv:_t&&E(w.emissiveMap.channel),metalnessMapUv:xt&&E(w.metalnessMap.channel),roughnessMapUv:Et&&E(w.roughnessMap.channel),anisotropyMapUv:_e&&E(w.anisotropyMap.channel),clearcoatMapUv:we&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&E(w.sheenRoughnessMap.channel),specularMapUv:Me&&E(w.specularMap.channel),specularColorMapUv:et&&E(w.specularColorMap.channel),specularIntensityMapUv:Se&&E(w.specularIntensityMap.channel),transmissionMapUv:Je&&E(w.transmissionMap.channel),thicknessMapUv:G&&E(w.thicknessMap.channel),alphaMapUv:xe&&E(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(It||q),vertexNormals:!!ne.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ne.attributes.uv&&(pt||xe),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ne.attributes.normal===void 0&&It===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ie,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ee,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===en,decodeVideoTextureEmissive:_t&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===en,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yi,flipSided:w.side===fi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ye&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&w.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function x(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)L.push(z),L.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(v(L,w),R(L,w),L.push(r.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function v(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function R(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function F(w){const L=M[w.type];let z;if(L){const H=ur[L];z=Rx.clone(H.uniforms)}else z=w.uniforms;return z}function b(w,L){let z=S.get(L);return z!==void 0?++z.usedTimes:(z=new s1(r,L,w,o),p.push(z),S.set(L,z)),z}function I(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),S.delete(w.cacheKey),w.destroy()}}function N(w){f.remove(w)}function B(){f.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:F,acquireProgram:b,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:B}}function d1(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,m){r.get(u)[f]=m}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function f1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function L0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function N0(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function f(_,M,E,A,x,v){let R=r[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:E,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:x,group:v},r[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=E,R.materialVariant=u(_),R.groupOrder=A,R.renderOrder=_.renderOrder,R.z=x,R.group=v),e++,R}function m(_,M,E,A,x,v,R){R.reversedDepth===!0&&(x=-x);const F=f(_,M,E,A,x,v);E.transmission>0?s.push(F):E.transparent===!0?o.push(F):t.push(F)}function p(_,M,E,A,x,v){const R=f(_,M,E,A,x,v);E.transmission>0?s.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function S(_,M){t.length>1&&t.sort(_||f1),s.length>1&&s.sort(M||L0),o.length>1&&o.sort(M||L0)}function y(){for(let _=e,M=r.length;_<M;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:m,unshift:p,finish:y,sort:S}}function h1(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new N0,r.set(s,[u])):o>=l.length?(u=new N0,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function p1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new Bt};break;case"SpotLight":t={position:new te,direction:new te,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function m1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let g1=0;function v1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _1(r){const e=new p1,t=m1(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new te);const o=new te,l=new dn,u=new dn;function f(p){let S=0,y=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let M=0,E=0,A=0,x=0,v=0,R=0,F=0,b=0,I=0,N=0,B=0,w=0,L=0,z=0;p.sort(v1);for(let W=0,se=p.length;W<se;W++){const $=p[W],ne=$.color,ge=$.intensity,oe=$.distance;let Q=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===ks?Q=$.shadow.map.texture:Q=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)S+=ne.r*ge,y+=ne.g*ge,_+=ne.b*ge;else if($.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector($.sh.coefficients[ee],ge);z++}else if($.isSunLight){const ee=e.get($);if(ee.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const J=$.shadow,O=t.get($);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),s.sunShadow[E]=O,s.sunShadowMap[E]=Q;const le=J.getViewportCount();for(let Ee=0;Ee<le;Ee++)s.sunShadowMatrix[A+Ee]=J.getMatrix(Ee),s.sunShadowCascade[A+Ee]=J._cascadeData[Ee];A+=le,E++}s.sun[M]=ee,M++}else if($.isDirectionalLight){const ee=e.get($);if(ee.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const J=$.shadow,O=t.get($);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,s.directionalShadow[x]=O,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=$.shadow.matrix,I++}s.directional[x]=ee,x++}else if($.isSpotLight){const ee=e.get($);ee.position.setFromMatrixPosition($.matrixWorld),ee.color.copy(ne).multiplyScalar(ge),ee.distance=oe,ee.coneCos=Math.cos($.angle),ee.penumbraCos=Math.cos($.angle*(1-$.penumbra)),ee.decay=$.decay,s.spot[R]=ee;const J=$.shadow;if($.map&&(s.spotLightMap[w]=$.map,w++,J.updateMatrices($),$.castShadow&&L++),s.spotLightMatrix[R]=J.matrix,$.castShadow){const O=t.get($);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,s.spotShadow[R]=O,s.spotShadowMap[R]=Q,B++}R++}else if($.isRectAreaLight){const ee=e.get($);ee.color.copy(ne).multiplyScalar(ge),ee.halfWidth.set($.width*.5,0,0),ee.halfHeight.set(0,$.height*.5,0),s.rectArea[F]=ee,F++}else if($.isPointLight){const ee=e.get($);if(ee.color.copy($.color).multiplyScalar($.intensity),ee.distance=$.distance,ee.decay=$.decay,$.castShadow){const J=$.shadow,O=t.get($);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,s.pointShadow[v]=O,s.pointShadowMap[v]=Q,s.pointShadowMatrix[v]=$.shadow.matrix,N++}s.point[v]=ee,v++}else if($.isHemisphereLight){const ee=e.get($);ee.skyColor.copy($.color).multiplyScalar(ge),ee.groundColor.copy($.groundColor).multiplyScalar(ge),s.hemi[b]=ee,b++}}F>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=y,s.ambient[2]=_;const H=s.hash;(H.sunLength!==M||H.directionalLength!==x||H.pointLength!==v||H.spotLength!==R||H.rectAreaLength!==F||H.hemiLength!==b||H.numSunShadows!==E||H.numDirectionalShadows!==I||H.numPointShadows!==N||H.numSpotShadows!==B||H.numSpotMaps!==w||H.numLightProbes!==z)&&(s.sun.length=M,s.directional.length=x,s.spot.length=R,s.rectArea.length=F,s.point.length=v,s.hemi.length=b,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=A,s.sunShadowCascade.length=A,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=B,s.spotShadowMap.length=B,s.spotLightMatrix.length=B+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,H.sunLength=M,H.directionalLength=x,H.pointLength=v,H.spotLength=R,H.rectAreaLength=F,H.hemiLength=b,H.numSunShadows=E,H.numDirectionalShadows=I,H.numPointShadows=N,H.numSpotShadows=B,H.numSpotMaps=w,H.numLightProbes=z,s.version=g1++)}function m(p,S){let y=0,_=0,M=0,E=0,A=0,x=0;const v=S.matrixWorldInverse;for(let R=0,F=p.length;R<F;R++){const b=p[R];if(b.isSunLight){const I=s.sun[y];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(v),y++}else if(b.isDirectionalLight){const I=s.directional[_];I.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),_++}else if(b.isSpotLight){const I=s.spot[E];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),E++}else if(b.isRectAreaLight){const I=s.rectArea[A];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(v),u.identity(),l.copy(b.matrixWorld),l.premultiply(v),u.extractRotation(l),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),A++}else if(b.isPointLight){const I=s.point[M];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(v),M++}else if(b.isHemisphereLight){const I=s.hemi[x];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(v),x++}}}return{setup:f,setupView:m,state:s}}function I0(r){const e=new _1(r),t=[],s=[],o=[];function l(_){y.camera=_,t.length=0,s.length=0,o.length=0}function u(_){t.push(_)}function f(_){s.push(_)}function m(_){o.push(_)}function p(){e.setup(t)}function S(_){e.setupView(t,_)}const y={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:S,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function x1(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new I0(r),e.set(o,[f])):l>=u.length?(f=new I0(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
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
}`,M1=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],E1=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],D0=new dn,vo=new te,Xd=new te;function w1(r,e,t){let s=new Kf;const o=new Vt,l=new Vt,u=new gn,f=new Nx,m=new Ix,p={},S=t.maxTextureSize,y={[Os]:fi,[fi]:Os,[yi]:yi},_=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:S1,fragmentShader:y1}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new wn;E.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ne(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let v=this.type;this.render=function(N,B,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===x_&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cc);const L=r.getRenderTarget(),z=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Dr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const se=v!==this.type;se&&B.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(ne=>ne.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,ne=N.length;$<ne;$++){const ge=N[$],oe=ge.shadow;if(oe===void 0){wt("WebGLShadowMap:",ge,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;o.copy(oe.mapSize);const Q=oe.getFrameExtents();o.multiply(Q),l.copy(oe.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(l.x=Math.floor(S/Q.x),o.x=l.x*Q.x,oe.mapSize.x=l.x),o.y>S&&(l.y=Math.floor(S/Q.y),o.y=l.y*Q.y,oe.mapSize.y=l.y));const ee=r.state.buffers.depth.getReversed();if(oe.camera._reversedDepth=ee,oe.map===null||se===!0){if(oe.map!==null&&(oe.map.depthTexture!==null&&(oe.map.depthTexture.dispose(),oe.map.depthTexture=null),oe.map.dispose()),this.type===_o){if(ge.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}oe.map=new Yi(o.x,o.y,{format:ks,type:mr,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),oe.map.texture.name=ge.name+".shadowMap",oe.map.depthTexture=new bo(o.x,o.y,dr),oe.map.depthTexture.name=ge.name+".shadowMapDepth",oe.map.depthTexture.format=Or,oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=Bn,oe.map.depthTexture.magFilter=Bn}else ge.isPointLight?(oe.map=new _g(o.x),oe.map.depthTexture=new Ax(o.x,pr)):(oe.map=new Yi(o.x,o.y),oe.map.depthTexture=new bo(o.x,o.y,pr)),oe.map.depthTexture.name=ge.name+".shadowMap",oe.map.depthTexture.format=Or,this.type===cc?(oe.map.depthTexture.compareFunction=ee?qf:Xf,oe.map.depthTexture.minFilter=Kn,oe.map.depthTexture.magFilter=Kn):(oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=Bn,oe.map.depthTexture.magFilter=Bn);oe.camera.updateProjectionMatrix()}oe.map.isWebGLCubeRenderTarget!==!0&&(oe.map.width!==o.x||oe.map.height!==o.y)&&oe.map.setSize(o.x,o.y);const J=oe.map.isWebGLCubeRenderTarget?6:oe.getViewportCount();ge.isPointLight!==!0&&oe.updateMatrices(ge,w);for(let O=0;O<J;O++){const le=oe.getCamera(O);if(ge.isPointLight){const Ee=oe.camera,Ze=oe.matrix,Ke=ge.distance||Ee.far;Ke!==Ee.far&&(Ee.far=Ke,Ee.updateProjectionMatrix()),vo.setFromMatrixPosition(ge.matrixWorld),Ee.position.copy(vo),Xd.copy(Ee.position),Xd.add(M1[O]),Ee.up.copy(E1[O]),Ee.lookAt(Xd),Ee.updateMatrixWorld(),Ze.makeTranslation(-vo.x,-vo.y,-vo.z),D0.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),oe._frustum.setFromProjectionMatrix(D0,Ee.coordinateSystem,Ee.reversedDepth)}if(oe.map.isWebGLCubeRenderTarget)r.setRenderTarget(oe.map,O),r.clear();else{O===0&&(r.setRenderTarget(oe.map),r.clear());const Ee=oe.getViewport(O);u.set(l.x*Ee.x,l.y*Ee.y,l.x*Ee.z,l.y*Ee.w),W.viewport(u)}s=oe.getFrustum(O),b(B,w,le,ge,this.type)}oe.isPointLightShadow!==!0&&this.type===_o&&R(oe,w),oe.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(L,z,H)};function R(N,B){const w=e.update(A);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null?N.mapPass=new Yi(o.x,o.y,{format:ks,type:mr}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(B,null,w,_,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value.set(N.map.width,N.map.height),M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(B,null,w,M,A,null)}function F(N,B,w,L){let z=null;const H=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)z=H;else if(z=w.isPointLight===!0?m:f,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=z.uuid,se=B.uuid;let $=p[W];$===void 0&&($={},p[W]=$);let ne=$[se];ne===void 0&&(ne=z.clone(),$[se]=ne,B.addEventListener("dispose",I)),z=ne}if(z.visible=B.visible,z.wireframe=B.wireframe,L===_o?z.side=B.shadowSide!==null?B.shadowSide:B.side:z.side=B.shadowSide!==null?B.shadowSide:y[B.side],z.alphaMap=B.alphaMap,z.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,z.map=B.map,z.clipShadows=B.clipShadows,z.clippingPlanes=B.clippingPlanes,z.clipIntersection=B.clipIntersection,z.displacementMap=B.displacementMap,z.displacementScale=B.displacementScale,z.displacementBias=B.displacementBias,z.wireframeLinewidth=B.wireframeLinewidth,z.linewidth=B.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const W=r.properties.get(z);W.light=w}return z}function b(N,B,w,L,z){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&z===_o)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const se=e.update(N),$=N.material;if(Array.isArray($)){const ne=se.groups;for(let ge=0,oe=ne.length;ge<oe;ge++){const Q=ne[ge],ee=$[Q.materialIndex];if(ee&&ee.visible){const J=F(N,ee,L,z);N.onBeforeShadow(r,N,B,w,se,J,Q),r.renderBufferDirect(w,null,se,J,N,Q),N.onAfterShadow(r,N,B,w,se,J,Q)}}}else if($.visible){const ne=F(N,$,L,z);N.onBeforeShadow(r,N,B,w,se,ne,null),r.renderBufferDirect(w,null,se,ne,N,null),N.onAfterShadow(r,N,B,w,se,ne,null)}}const W=N.children;for(let se=0,$=W.length;se<$;se++)b(W[se],B,w,L,z)}function I(N){N.target.removeEventListener("dispose",I);for(const w in p){const L=p[w],z=N.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function T1(r,e){function t(){let G=!1;const Fe=new gn;let xe=null;const De=new gn(0,0,0,0);return{setMask:function(Be){xe!==Be&&!G&&(r.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){G=Be},setClear:function(Be,ye,$e,qe,Lt){Lt===!0&&(Be*=qe,ye*=qe,$e*=qe),Fe.set(Be,ye,$e,qe),De.equals(Fe)===!1&&(r.clearColor(Be,ye,$e,qe),De.copy(Fe))},reset:function(){G=!1,xe=null,De.set(-1,0,0,0)}}}function s(){let G=!1,Fe=!1,xe=null,De=null,Be=null;return{setReversed:function(ye){if(Fe!==ye){const $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Fe=ye;const qe=Be;Be=null,this.setClear(qe)}},getReversed:function(){return Fe},setTest:function(ye){ye?pe(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(ye){xe!==ye&&!G&&(r.depthMask(ye),xe=ye)},setFunc:function(ye){if(Fe&&(ye=ex[ye]),De!==ye){switch(ye){case qd:r.depthFunc(r.NEVER);break;case $d:r.depthFunc(r.ALWAYS);break;case jd:r.depthFunc(r.LESS);break;case Eo:r.depthFunc(r.LEQUAL);break;case Yd:r.depthFunc(r.EQUAL);break;case Kd:r.depthFunc(r.GEQUAL);break;case Zd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=ye}},setLocked:function(ye){G=ye},setClear:function(ye){Be!==ye&&(Be=ye,Fe&&(ye=1-ye),r.clearDepth(ye))},reset:function(){G=!1,xe=null,De=null,Be=null,Fe=!1}}}function o(){let G=!1,Fe=null,xe=null,De=null,Be=null,ye=null,$e=null,qe=null,Lt=null;return{setTest:function(Xe){G||(Xe?pe(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(Xe){Fe!==Xe&&!G&&(r.stencilMask(Xe),Fe=Xe)},setFunc:function(Xe,nn,In){(xe!==Xe||De!==nn||Be!==In)&&(r.stencilFunc(Xe,nn,In),xe=Xe,De=nn,Be=In)},setOp:function(Xe,nn,In){(ye!==Xe||$e!==nn||qe!==In)&&(r.stencilOp(Xe,nn,In),ye=Xe,$e=nn,qe=In)},setLocked:function(Xe){G=Xe},setClear:function(Xe){Lt!==Xe&&(r.clearStencil(Xe),Lt=Xe)},reset:function(){G=!1,Fe=null,xe=null,De=null,Be=null,ye=null,$e=null,qe=null,Lt=null}}}const l=new t,u=new s,f=new o,m=new WeakMap,p=new WeakMap;let S={},y={},_={},M=new WeakMap,E=[],A=null,x=!1,v=null,R=null,F=null,b=null,I=null,N=null,B=null,w=new Bt(0,0,0),L=0,z=!1,H=null,W=null,se=null,$=null,ne=null;const ge=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Q=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),oe=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),oe=Q>=2);let J=null,O={};const le=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Ze=new gn().fromArray(le),Ke=new gn().fromArray(Ee);function je(G,Fe,xe,De){const Be=new Uint8Array(4),ye=r.createTexture();r.bindTexture(G,ye),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<xe;$e++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Fe+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return ye}const de={};de[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(r.DEPTH_TEST),u.setFunc(Eo),Mt(!1),It(Im),pe(r.CULL_FACE),At(Dr);function pe(G){S[G]!==!0&&(r.enable(G),S[G]=!0)}function Ie(G){S[G]!==!1&&(r.disable(G),S[G]=!1)}function Qe(G,Fe){return _[G]!==Fe?(r.bindFramebuffer(G,Fe),_[G]=Fe,G===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Fe),G===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ge(G,Fe){let xe=E,De=!1;if(G){xe=M.get(Fe),xe===void 0&&(xe=[],M.set(Fe,xe));const Be=G.textures;if(xe.length!==Be.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,$e=Be.length;ye<$e;ye++)xe[ye]=r.COLOR_ATTACHMENT0+ye;xe.length=Be.length,De=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,De=!0);De&&r.drawBuffers(xe)}function pt(G){return A!==G?(r.useProgram(G),A=G,!0):!1}const qt={[Ta]:r.FUNC_ADD,[y_]:r.FUNC_SUBTRACT,[M_]:r.FUNC_REVERSE_SUBTRACT};qt[E_]=r.MIN,qt[w_]=r.MAX;const ft={[T_]:r.ZERO,[A_]:r.ONE,[b_]:r.SRC_COLOR,[z0]:r.SRC_ALPHA,[I_]:r.SRC_ALPHA_SATURATE,[L_]:r.DST_COLOR,[C_]:r.DST_ALPHA,[R_]:r.ONE_MINUS_SRC_COLOR,[V0]:r.ONE_MINUS_SRC_ALPHA,[N_]:r.ONE_MINUS_DST_COLOR,[P_]:r.ONE_MINUS_DST_ALPHA,[D_]:r.CONSTANT_COLOR,[U_]:r.ONE_MINUS_CONSTANT_COLOR,[O_]:r.CONSTANT_ALPHA,[F_]:r.ONE_MINUS_CONSTANT_ALPHA};function At(G,Fe,xe,De,Be,ye,$e,qe,Lt,Xe){if(G===Dr){x===!0&&(Ie(r.BLEND),x=!1);return}if(x===!1&&(pe(r.BLEND),x=!0),G!==S_){if(G!==v||Xe!==z){if((R!==Ta||I!==Ta)&&(r.blendEquation(r.FUNC_ADD),R=Ta,I=Ta),Xe)switch(G){case Mo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case di:r.blendFunc(r.ONE,r.ONE);break;case Dm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Um:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Kt("WebGLState: Invalid blending: ",G);break}else switch(G){case Mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case di:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dm:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Um:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",G);break}F=null,b=null,N=null,B=null,w.set(0,0,0),L=0,v=G,z=Xe}return}Be=Be||Fe,ye=ye||xe,$e=$e||De,(Fe!==R||Be!==I)&&(r.blendEquationSeparate(qt[Fe],qt[Be]),R=Fe,I=Be),(xe!==F||De!==b||ye!==N||$e!==B)&&(r.blendFuncSeparate(ft[xe],ft[De],ft[ye],ft[$e]),F=xe,b=De,N=ye,B=$e),(qe.equals(w)===!1||Lt!==L)&&(r.blendColor(qe.r,qe.g,qe.b,Lt),w.copy(qe),L=Lt),v=G,z=!1}function Pt(G,Fe){G.side===yi?Ie(r.CULL_FACE):pe(r.CULL_FACE);let xe=G.side===fi;Fe&&(xe=!xe),Mt(xe),G.blending===Mo&&G.transparent===!1?At(Dr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const De=G.stencilWrite;f.setTest(De),De&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),_t(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(G){H!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),H=G)}function It(G){G!==v_?(pe(r.CULL_FACE),G!==W&&(G===Im?r.cullFace(r.BACK):G===__?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),W=G}function Gt(G){G!==se&&(oe&&r.lineWidth(G),se=G)}function _t(G,Fe,xe){G?(pe(r.POLYGON_OFFSET_FILL),($!==Fe||ne!==xe)&&($=Fe,ne=xe,u.getReversed()&&(Fe=-Fe),r.polygonOffset(Fe,xe))):Ie(r.POLYGON_OFFSET_FILL)}function xt(G){G?pe(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Et(G){G===void 0&&(G=r.TEXTURE0+ge-1),J!==G&&(r.activeTexture(G),J=G)}function q(G,Fe,xe){xe===void 0&&(J===null?xe=r.TEXTURE0+ge-1:xe=J);let De=O[xe];De===void 0&&(De={type:void 0,texture:void 0},O[xe]=De),(De.type!==G||De.texture!==Fe)&&(J!==xe&&(r.activeTexture(xe),J=xe),r.bindTexture(G,Fe||de[G]),De.type=G,De.texture=Fe)}function Qt(){const G=O[J];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function bt(){try{r.compressedTexImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function T(){try{r.texSubImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function K(){try{r.texSubImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function we(){try{r.texStorage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function ke(){try{r.texStorage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function ie(){try{r.texImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function ae(){try{r.texImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function Le(G){return y[G]!==void 0?y[G]:r.getParameter(G)}function Ce(G,Fe){y[G]!==Fe&&(r.pixelStorei(G,Fe),y[G]=Fe)}function Oe(G){Ze.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ze.copy(G))}function Me(G){Ke.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ke.copy(G))}function et(G,Fe){let xe=p.get(Fe);xe===void 0&&(xe=new WeakMap,p.set(Fe,xe));let De=xe.get(G);De===void 0&&(De=r.getUniformBlockIndex(Fe,G.name),xe.set(G,De))}function Se(G,Fe){const De=p.get(Fe).get(G);m.get(Fe)!==De&&(r.uniformBlockBinding(Fe,De,G.__bindingPointIndex),m.set(Fe,De))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},y={},J=null,O={},_={},M=new WeakMap,E=[],A=null,x=!1,v=null,R=null,F=null,b=null,I=null,N=null,B=null,w=new Bt(0,0,0),L=0,z=!1,H=null,W=null,se=null,$=null,ne=null,Ze.set(0,0,r.canvas.width,r.canvas.height),Ke.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:pe,disable:Ie,bindFramebuffer:Qe,drawBuffers:Ge,useProgram:pt,setBlending:At,setMaterial:Pt,setFlipSided:Mt,setCullFace:It,setLineWidth:Gt,setPolygonOffset:_t,setScissorTest:xt,activeTexture:Et,bindTexture:q,unbindTexture:Qt,compressedTexImage2D:bt,compressedTexImage3D:k,texImage2D:ie,texImage3D:ae,pixelStorei:Ce,getParameter:Le,updateUBOMapping:et,uniformBlockBinding:Se,texStorage2D:we,texStorage3D:ke,texSubImage2D:T,texSubImage3D:K,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Oe,viewport:Me,reset:Je}}function A1(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,S=new WeakMap,y=new Set;let _;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,T){return E?new OffscreenCanvas(k,T):Sc("canvas")}function x(k,T,K){let ue=1;const _e=bt(k);if((_e.width>K||_e.height>K)&&(ue=K/Math.max(_e.width,_e.height)),ue<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const we=Math.floor(ue*_e.width),ke=Math.floor(ue*_e.height);_===void 0&&(_=A(we,ke));const ie=T?A(we,ke):_;return ie.width=we,ie.height=ke,ie.getContext("2d").drawImage(k,0,0,we,ke),wt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+we+"x"+ke+")."),ie}else return"data"in k&&wt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),k;return k}function v(k){return k.generateMipmaps}function R(k){r.generateMipmap(k)}function F(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(k,T,K,ue,_e,we=!1){if(k!==null){if(r[k]!==void 0)return r[k];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ke;ue&&(ke=e.get("EXT_texture_norm16"),ke||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=T;if(T===r.RED&&(K===r.FLOAT&&(ie=r.R32F),K===r.HALF_FLOAT&&(ie=r.R16F),K===r.UNSIGNED_BYTE&&(ie=r.R8),K===r.UNSIGNED_SHORT&&ke&&(ie=ke.R16_EXT),K===r.SHORT&&ke&&(ie=ke.R16_SNORM_EXT)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.R8UI),K===r.UNSIGNED_SHORT&&(ie=r.R16UI),K===r.UNSIGNED_INT&&(ie=r.R32UI),K===r.BYTE&&(ie=r.R8I),K===r.SHORT&&(ie=r.R16I),K===r.INT&&(ie=r.R32I)),T===r.RG&&(K===r.FLOAT&&(ie=r.RG32F),K===r.HALF_FLOAT&&(ie=r.RG16F),K===r.UNSIGNED_BYTE&&(ie=r.RG8),K===r.UNSIGNED_SHORT&&ke&&(ie=ke.RG16_EXT),K===r.SHORT&&ke&&(ie=ke.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RG8UI),K===r.UNSIGNED_SHORT&&(ie=r.RG16UI),K===r.UNSIGNED_INT&&(ie=r.RG32UI),K===r.BYTE&&(ie=r.RG8I),K===r.SHORT&&(ie=r.RG16I),K===r.INT&&(ie=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),K===r.UNSIGNED_INT&&(ie=r.RGB32UI),K===r.BYTE&&(ie=r.RGB8I),K===r.SHORT&&(ie=r.RGB16I),K===r.INT&&(ie=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),K===r.UNSIGNED_INT&&(ie=r.RGBA32UI),K===r.BYTE&&(ie=r.RGBA8I),K===r.SHORT&&(ie=r.RGBA16I),K===r.INT&&(ie=r.RGBA32I)),T===r.RGB&&(K===r.UNSIGNED_SHORT&&ke&&(ie=ke.RGB16_EXT),K===r.SHORT&&ke&&(ie=ke.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(ie=r.R11F_G11F_B10F)),T===r.RGBA){const ae=we?xc:Wt.getTransfer(_e);K===r.FLOAT&&(ie=r.RGBA32F),K===r.HALF_FLOAT&&(ie=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ie=ae===en?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&ke&&(ie=ke.RGBA16_EXT),K===r.SHORT&&ke&&(ie=ke.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function I(k,T){let K;return k?T===null||T===pr||T===To?K=r.DEPTH24_STENCIL8:T===dr?K=r.DEPTH32F_STENCIL8:T===wo&&(K=r.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===pr||T===To?K=r.DEPTH_COMPONENT24:T===dr?K=r.DEPTH_COMPONENT32F:T===wo&&(K=r.DEPTH_COMPONENT16),K}function N(k,T){return v(k)===!0||k.isFramebufferTexture&&k.minFilter!==Bn&&k.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function B(k){const T=k.target;T.removeEventListener("dispose",B),L(T),T.isVideoTexture&&S.delete(T),T.isHTMLTexture&&y.delete(T)}function w(k){const T=k.target;T.removeEventListener("dispose",w),H(T)}function L(k){const T=s.get(k);if(T.__webglInit===void 0)return;const K=k.source,ue=M.get(K);if(ue){const _e=ue[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&z(k),Object.keys(ue).length===0&&M.delete(K)}s.remove(k)}function z(k){const T=s.get(k);r.deleteTexture(T.__webglTexture);const K=k.source,ue=M.get(K);delete ue[T.__cacheKey],u.memory.textures--}function H(k){const T=s.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),s.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let _e=0;_e<T.__webglFramebuffer[ue].length;_e++)r.deleteFramebuffer(T.__webglFramebuffer[ue][_e]);else r.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)r.deleteFramebuffer(T.__webglFramebuffer[ue]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=k.textures;for(let ue=0,_e=K.length;ue<_e;ue++){const we=s.get(K[ue]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),u.memory.textures--),s.remove(K[ue])}s.remove(k)}let W=0;function se(){W=0}function $(){return W}function ne(k){W=k}function ge(){const k=W;return k>=o.maxTextures&&wt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),W+=1,k}function oe(k){const T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function Q(k,T){const K=s.get(k);if(k.isVideoTexture&&q(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&K.__version!==k.version){const ue=k.image;if(ue===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(K,k,T);return}}else k.isExternalTexture&&(K.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function ee(k,T){const K=s.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&K.__version!==k.version){Ie(K,k,T);return}else k.isExternalTexture&&(K.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function J(k,T){const K=s.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&K.__version!==k.version){Ie(K,k,T);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function O(k,T){const K=s.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&K.__version!==k.version){Qe(K,k,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const le={[Bs]:r.REPEAT,[Nr]:r.CLAMP_TO_EDGE,[Qd]:r.MIRRORED_REPEAT},Ee={[Bn]:r.NEAREST,[z_]:r.NEAREST_MIPMAP_NEAREST,[Il]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[hd]:r.LINEAR_MIPMAP_NEAREST,[Ds]:r.LINEAR_MIPMAP_LINEAR},Ze={[W_]:r.NEVER,[Y_]:r.ALWAYS,[X_]:r.LESS,[Xf]:r.LEQUAL,[q_]:r.EQUAL,[qf]:r.GEQUAL,[$_]:r.GREATER,[j_]:r.NOTEQUAL};function Ke(k,T){if(T.type===dr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===hd||T.magFilter===Il||T.magFilter===Ds||T.minFilter===Kn||T.minFilter===hd||T.minFilter===Il||T.minFilter===Ds)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,le[T.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,le[T.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,le[T.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,Ee[T.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,Ee[T.minFilter]),T.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,Ze[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bn||T.minFilter!==Il&&T.minFilter!==Ds||T.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function je(k,T){let K=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",B));const ue=T.source;let _e=M.get(ue);_e===void 0&&(_e={},M.set(ue,_e));const we=oe(T);if(we!==k.__cacheKey){_e[we]===void 0&&(_e[we]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),_e[we].usedTimes++;const ke=_e[k.__cacheKey];ke!==void 0&&(_e[k.__cacheKey].usedTimes--,ke.usedTimes===0&&z(T)),k.__cacheKey=we,k.__webglTexture=_e[we].texture}return K}function de(k,T,K){return Math.floor(Math.floor(k/K)/T)}function pe(k,T,K,ue){const we=k.updateRanges;if(we.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,K,ue,T.data);else{we.sort((Ce,Oe)=>Ce.start-Oe.start);let ke=0;for(let Ce=1;Ce<we.length;Ce++){const Oe=we[ke],Me=we[Ce],et=Oe.start+Oe.count,Se=de(Me.start,T.width,4),Je=de(Oe.start,T.width,4);Me.start<=et+1&&Se===Je&&de(Me.start+Me.count-1,T.width,4)===Se?Oe.count=Math.max(Oe.count,Me.start+Me.count-Oe.start):(++ke,we[ke]=Me)}we.length=ke+1;const ie=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),Le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Me=we[Ce],et=Math.floor(Me.start/4),Se=Math.ceil(Me.count/4),Je=et%T.width,G=Math.floor(et/T.width),Fe=Se,xe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,Je,G,Fe,xe,K,ue,T.data)}k.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ie),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function Ie(k,T,K){let ue=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=r.TEXTURE_3D);const _e=je(k,T),we=T.source;t.bindTexture(ue,k.__webglTexture,r.TEXTURE0+K);const ke=s.get(we);if(we.version!==ke.__version||_e===!0){if(t.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const xe=Wt.getPrimaries(Wt.workingColorSpace),De=T.colorSpace===ls?null:Wt.getPrimaries(T.colorSpace),Be=T.colorSpace===ls||xe===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=x(T.image,!1,o.maxTextureSize);ae=Qt(T,ae);const Le=l.convert(T.format,T.colorSpace),Ce=l.convert(T.type);let Oe=b(T.internalFormat,Le,Ce,T.normalized,T.colorSpace,T.isVideoTexture);Ke(ue,T);let Me;const et=T.mipmaps,Se=T.isVideoTexture!==!0,Je=ke.__version===void 0||_e===!0,G=we.dataReady,Fe=N(T,ae);if(T.isDepthTexture)Oe=I(T.format===Us,T.type),Je&&(Se?t.texStorage2D(r.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Le,Ce,null));else if(T.isDataTexture)if(et.length>0){Se&&Je&&t.texStorage2D(r.TEXTURE_2D,Fe,Oe,et[0].width,et[0].height);for(let xe=0,De=et.length;xe<De;xe++)Me=et[xe],Se?G&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Me.width,Me.height,Le,Ce,Me.data):t.texImage2D(r.TEXTURE_2D,xe,Oe,Me.width,Me.height,0,Le,Ce,Me.data);T.generateMipmaps=!1}else Se?(Je&&t.texStorage2D(r.TEXTURE_2D,Fe,Oe,ae.width,ae.height),G&&pe(T,ae,Le,Ce)):t.texImage2D(r.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Le,Ce,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Se&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Oe,et[0].width,et[0].height,ae.depth);for(let xe=0,De=et.length;xe<De;xe++)if(Me=et[xe],T.format!==ji)if(Le!==null)if(Se){if(G)if(T.layerUpdates.size>0){const Be=f0(Me.width,Me.height,T.format,T.type);for(const ye of T.layerUpdates){const $e=Me.data.subarray(ye*Be/Me.data.BYTES_PER_ELEMENT,(ye+1)*Be/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,ye,Me.width,Me.height,1,Le,$e)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Me.width,Me.height,ae.depth,Le,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Oe,Me.width,Me.height,ae.depth,0,Me.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Me.width,Me.height,ae.depth,Le,Ce,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,xe,Oe,Me.width,Me.height,ae.depth,0,Le,Ce,Me.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Se&&Je&&t.texStorage2D(r.TEXTURE_2D,Fe,Oe,et[0].width,et[0].height);for(let xe=0,De=et.length;xe<De;xe++)Me=et[xe],T.format!==ji?Le!==null?Se?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,xe,Oe,Me.width,Me.height,0,Me.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?G&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Me.width,Me.height,Le,Ce,Me.data):t.texImage2D(r.TEXTURE_2D,xe,Oe,Me.width,Me.height,0,Le,Ce,Me.data)}else if(T.isDataArrayTexture)if(Se){if(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Oe,ae.width,ae.height,ae.depth),G)if(T.layerUpdates.size>0){const xe=f0(ae.width,ae.height,T.format,T.type);for(const De of T.layerUpdates){const Be=ae.data.subarray(De*xe/ae.data.BYTES_PER_ELEMENT,(De+1)*xe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,ae.width,ae.height,1,Le,Ce,Be)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Le,Ce,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,Le,Ce,ae.data);else if(T.isData3DTexture)Se?(Je&&t.texStorage3D(r.TEXTURE_3D,Fe,Oe,ae.width,ae.height,ae.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Le,Ce,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,Le,Ce,ae.data);else if(T.isFramebufferTexture){if(Je)if(Se)t.texStorage2D(r.TEXTURE_2D,Fe,Oe,ae.width,ae.height);else{let xe=ae.width,De=ae.height;for(let Be=0;Be<Fe;Be++)t.texImage2D(r.TEXTURE_2D,Be,Oe,xe,De,0,Le,Ce,null),xe>>=1,De>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const xe=r.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ae.parentNode!==xe){xe.appendChild(ae),y.add(T),xe.onpaint=De=>{const Be=De.changedElements;for(const ye of y)Be.includes(ye.image)&&(ye.needsUpdate=!0)},xe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{const Be=r.RGBA,ye=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Be,ye,$e,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(et.length>0){if(Se&&Je){const xe=bt(et[0]);t.texStorage2D(r.TEXTURE_2D,Fe,Oe,xe.width,xe.height)}for(let xe=0,De=et.length;xe<De;xe++)Me=et[xe],Se?G&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Le,Ce,Me):t.texImage2D(r.TEXTURE_2D,xe,Oe,Le,Ce,Me);T.generateMipmaps=!1}else if(Se){if(Je){const xe=bt(ae);t.texStorage2D(r.TEXTURE_2D,Fe,Oe,xe.width,xe.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Ce,ae)}else t.texImage2D(r.TEXTURE_2D,0,Oe,Le,Ce,ae);v(T)&&R(ue),ke.__version=we.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function Qe(k,T,K){if(T.image.length!==6)return;const ue=je(k,T),_e=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+K);const we=s.get(_e);if(_e.version!==we.__version||ue===!0){t.activeTexture(r.TEXTURE0+K);const ke=Wt.getPrimaries(Wt.workingColorSpace),ie=T.colorSpace===ls?null:Wt.getPrimaries(T.colorSpace),ae=T.colorSpace===ls||ke===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,Ce=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ye=0;ye<6;ye++)!Le&&!Ce?Oe[ye]=x(T.image[ye],!0,o.maxCubemapSize):Oe[ye]=Ce?T.image[ye].image:T.image[ye],Oe[ye]=Qt(T,Oe[ye]);const Me=Oe[0],et=l.convert(T.format,T.colorSpace),Se=l.convert(T.type),Je=b(T.internalFormat,et,Se,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,Fe=we.__version===void 0||ue===!0,xe=_e.dataReady;let De=N(T,Me);Ke(r.TEXTURE_CUBE_MAP,T);let Be;if(Le){G&&Fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,Je,Me.width,Me.height);for(let ye=0;ye<6;ye++){Be=Oe[ye].mipmaps;for(let $e=0;$e<Be.length;$e++){const qe=Be[$e];T.format!==ji?et!==null?G?xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,qe.width,qe.height,et,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,Je,qe.width,qe.height,0,qe.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,qe.width,qe.height,et,Se,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,Je,qe.width,qe.height,0,et,Se,qe.data)}}}else{if(Be=T.mipmaps,G&&Fe){Be.length>0&&De++;const ye=bt(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,Je,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ce){G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Oe[ye].width,Oe[ye].height,et,Se,Oe[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Je,Oe[ye].width,Oe[ye].height,0,et,Se,Oe[ye].data);for(let $e=0;$e<Be.length;$e++){const Lt=Be[$e].image[ye].image;G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,Lt.width,Lt.height,et,Se,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,Je,Lt.width,Lt.height,0,et,Se,Lt.data)}}else{G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,et,Se,Oe[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Je,et,Se,Oe[ye]);for(let $e=0;$e<Be.length;$e++){const qe=Be[$e];G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,et,Se,qe.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,Je,et,Se,qe.image[ye])}}}v(T)&&R(r.TEXTURE_CUBE_MAP),we.__version=_e.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function Ge(k,T,K,ue,_e,we){const ke=l.convert(K.format,K.colorSpace),ie=l.convert(K.type),ae=b(K.internalFormat,ke,ie,K.normalized,K.colorSpace),Le=s.get(T),Ce=s.get(K);if(Ce.__renderTarget=T,!Le.__hasExternalTextures){const Oe=Math.max(1,T.width>>we),Me=Math.max(1,T.height>>we);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,we,ae,Oe,Me,T.depth,0,ke,ie,null):t.texImage2D(_e,we,ae,Oe,Me,0,ke,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),Et(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,_e,Ce.__webglTexture,0,xt(T)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ue,_e,Ce.__webglTexture,we),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(k,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,k),T.depthBuffer){const ue=T.depthTexture,_e=ue&&ue.isDepthTexture?ue.type:null,we=I(T.stencilBuffer,_e),ke=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Et(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt(T),we,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt(T),we,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,we,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ke,r.RENDERBUFFER,k)}else{const ue=T.textures;for(let _e=0;_e<ue.length;_e++){const we=ue[_e],ke=l.convert(we.format,we.colorSpace),ie=l.convert(we.type),ae=b(we.internalFormat,ke,ie,we.normalized,we.colorSpace);Et(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt(T),ae,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt(T),ae,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ae,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qt(k,T,K){const ue=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=s.get(T.depthTexture);if(_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Ke(r.TEXTURE_CUBE_MAP,T.depthTexture);const Le=l.convert(T.depthTexture.format),Ce=l.convert(T.depthTexture.type);let Oe;T.depthTexture.format===Or?Oe=r.DEPTH_COMPONENT24:T.depthTexture.format===Us&&(Oe=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,T.width,T.height,0,Le,Ce,null)}}else Q(T.depthTexture,0);const we=_e.__webglTexture,ke=xt(T),ie=ue?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,ae=T.depthTexture.format===Us?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Or)Et(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ie,we,0,ke):r.framebufferTexture2D(r.FRAMEBUFFER,ae,ie,we,0);else if(T.depthTexture.format===Us)Et(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ie,we,0,ke):r.framebufferTexture2D(r.FRAMEBUFFER,ae,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(k){const T=s.get(k),K=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){const ue=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",_e)};ue.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=ue}if(k.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let ue=0;ue<6;ue++)qt(T.__webglFramebuffer[ue],k,ue);else{const ue=k.texture.mipmaps;ue&&ue.length>0?qt(T.__webglFramebuffer[0],k,0):qt(T.__webglFramebuffer,k,0)}else if(K){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=r.createRenderbuffer(),pt(T.__webglDepthbuffer[ue],k,!1);else{const _e=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer[ue];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,we)}}else{const ue=k.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),pt(T.__webglDepthbuffer,k,!1);else{const _e=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,we)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function At(k,T,K){const ue=s.get(k);T!==void 0&&Ge(ue.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ft(k)}function Pt(k){const T=k.texture,K=s.get(k),ue=s.get(T);k.addEventListener("dispose",w);const _e=k.textures,we=k.isWebGLCubeRenderTarget===!0,ke=_e.length>1;if(ke||(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=T.version,u.memory.textures++),we){K.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[ie]=[];for(let ae=0;ae<T.mipmaps.length;ae++)K.__webglFramebuffer[ie][ae]=r.createFramebuffer()}else K.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ie=0;ie<T.mipmaps.length;ie++)K.__webglFramebuffer[ie]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(ke)for(let ie=0,ae=_e.length;ie<ae;ie++){const Le=s.get(_e[ie]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),u.memory.textures++)}if(k.samples>0&&Et(k)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ie=0;ie<_e.length;ie++){const ae=_e[ie];K.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ie]);const Le=l.convert(ae.format,ae.colorSpace),Ce=l.convert(ae.type),Oe=b(ae.internalFormat,Le,Ce,ae.normalized,ae.colorSpace,k.isXRRenderTarget===!0),Me=xt(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Oe,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,K.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),pt(K.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),Ke(r.TEXTURE_CUBE_MAP,T);for(let ie=0;ie<6;ie++)if(T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Ge(K.__webglFramebuffer[ie][ae],k,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else Ge(K.__webglFramebuffer[ie],k,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);v(T)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ie=0,ae=_e.length;ie<ae;ie++){const Le=_e[ie],Ce=s.get(Le);let Oe=r.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Oe=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Ce.__webglTexture),Ke(Oe,Le),Ge(K.__webglFramebuffer,k,Le,r.COLOR_ATTACHMENT0+ie,Oe,0),v(Le)&&R(Oe)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ie=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,ue.__webglTexture),Ke(ie,T),T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Ge(K.__webglFramebuffer[ae],k,T,r.COLOR_ATTACHMENT0,ie,ae);else Ge(K.__webglFramebuffer,k,T,r.COLOR_ATTACHMENT0,ie,0);v(T)&&R(ie),t.unbindTexture()}k.depthBuffer&&ft(k)}function Mt(k){const T=k.textures;for(let K=0,ue=T.length;K<ue;K++){const _e=T[K];if(v(_e)){const we=F(k),ke=s.get(_e).__webglTexture;t.bindTexture(we,ke),R(we),t.unbindTexture()}}}const It=[],Gt=[];function _t(k){if(k.samples>0){if(Et(k)===!1){const T=k.textures,K=k.width,ue=k.height;let _e=r.COLOR_BUFFER_BIT;const we=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=s.get(k),ie=T.length>1;if(ie)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const ae=k.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Le]);const Ce=s.get(T[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ce,0)}r.blitFramebuffer(0,0,K,ue,0,0,K,ue,_e,r.NEAREST),m===!0&&(It.length=0,Gt.length=0,It.push(r.COLOR_ATTACHMENT0+Le),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(It.push(we),Gt.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Le]);const Ce=s.get(T[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&m){const T=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function xt(k){return Math.min(o.maxSamples,k.samples)}function Et(k){const T=s.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(k){const T=u.render.frame;S.get(k)!==T&&(S.set(k,T),k.update())}function Qt(k,T){const K=k.colorSpace,ue=k.format,_e=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||K!==_c&&K!==ls&&(Wt.getTransfer(K)===en?(ue!==ji||_e!==Mi)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",K)),T}function bt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(p.width=k.naturalWidth||k.width,p.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(p.width=k.displayWidth,p.height=k.displayHeight):(p.width=k.width,p.height=k.height),p}this.allocateTextureUnit=ge,this.resetTextureUnits=se,this.getTextureUnits=$,this.setTextureUnits=ne,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=At,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function b1(r,e){function t(s,o=ls){let l;const u=Wt.getTransfer(o);if(s===Mi)return r.UNSIGNED_BYTE;if(s===zf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===J0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Q0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===K0)return r.BYTE;if(s===Z0)return r.SHORT;if(s===wo)return r.UNSIGNED_SHORT;if(s===kf)return r.INT;if(s===pr)return r.UNSIGNED_INT;if(s===dr)return r.FLOAT;if(s===mr)return r.HALF_FLOAT;if(s===eg)return r.ALPHA;if(s===tg)return r.RGB;if(s===ji)return r.RGBA;if(s===Or)return r.DEPTH_COMPONENT;if(s===Us)return r.DEPTH_STENCIL;if(s===ng)return r.RED;if(s===Gf)return r.RED_INTEGER;if(s===ks)return r.RG;if(s===Hf)return r.RG_INTEGER;if(s===Wf)return r.RGBA_INTEGER;if(s===uc||s===dc||s===fc||s===hc)if(u===en)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===uc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===uc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ef||s===tf||s===nf||s===rf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===ef)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sf||s===af||s===of||s===lf||s===cf||s===gc||s===uf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===sf||s===af)return u===en?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===of)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===lf)return l.COMPRESSED_R11_EAC;if(s===cf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===gc)return l.COMPRESSED_RG11_EAC;if(s===uf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===df||s===ff||s===hf||s===pf||s===mf||s===gf||s===vf||s===_f||s===xf||s===Sf||s===yf||s===Mf||s===Ef||s===wf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===df)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ff)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_f)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ef)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tf||s===Af||s===bf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Tf)return u===en?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Af)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rf||s===Cf||s===vc||s===Pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Rf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===To?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const R1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C1=`
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

}`;class P1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new fg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Zi({vertexShader:R1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new zs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends Vs{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,S=null,y=null,_=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",x=new P1,v={},R=t.getContextAttributes();let F=null,b=null;const I=[],N=[],B=new Vt;let w=null,L=null;const z=new Si;z.viewport=new gn;const H=new Si;H.viewport=new gn;const W=[z,H],se=new kx;let $=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let pe=I[de];return pe===void 0&&(pe=new yd,I[de]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(de){let pe=I[de];return pe===void 0&&(pe=new yd,I[de]=pe),pe.getGripSpace()},this.getHand=function(de){let pe=I[de];return pe===void 0&&(pe=new yd,I[de]=pe),pe.getHandSpace()};function ge(de){const pe=N.indexOf(de.inputSource);if(pe===-1)return;const Ie=I[pe];Ie!==void 0&&(Ie.update(de.inputSource,de.frame,p||u),Ie.dispatchEvent({type:de.type,data:de.inputSource}))}function oe(){o.removeEventListener("select",ge),o.removeEventListener("selectstart",ge),o.removeEventListener("selectend",ge),o.removeEventListener("squeeze",ge),o.removeEventListener("squeezestart",ge),o.removeEventListener("squeezeend",ge),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",Q);for(let de=0;de<I.length;de++){const pe=N[de];pe!==null&&(N[de]=null,I[de].disconnect(pe))}$=null,ne=null,x.reset();for(const de in v)delete v[de];if(e.setRenderTarget(F),M=null,_=null,y=null,o=null,b=null,je.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),L!==null){const de=L.camera;de.fov=L.fov,de.zoom=L.zoom,de.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){l=de,s.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){f=de,s.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(de){p=de},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return y===null&&A&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(de){if(o=de,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ge),o.addEventListener("selectstart",ge),o.addEventListener("selectend",ge),o.addEventListener("squeeze",ge),o.addEventListener("squeezestart",ge),o.addEventListener("squeezeend",ge),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",Q),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Qe=null,Ge=null;R.depth&&(Ge=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=R.stencil?Us:Or,Qe=R.stencil?To:pr);const pt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};y=this.getBinding(),_=y.createProjectionLayer(pt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new Yi(_.textureWidth,_.textureHeight,{format:ji,type:Mi,depthTexture:new bo(_.textureWidth,_.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ie={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Ie),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Yi(M.framebufferWidth,M.framebufferHeight,{format:ji,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),je.setContext(o),je.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(de){for(let pe=0;pe<de.removed.length;pe++){const Ie=de.removed[pe],Qe=N.indexOf(Ie);Qe>=0&&(N[Qe]=null,I[Qe].disconnect(Ie))}for(let pe=0;pe<de.added.length;pe++){const Ie=de.added[pe];let Qe=N.indexOf(Ie);if(Qe===-1){for(let pt=0;pt<I.length;pt++)if(pt>=N.length){N.push(Ie),Qe=pt;break}else if(N[pt]===null){N[pt]=Ie,Qe=pt;break}if(Qe===-1)break}const Ge=I[Qe];Ge&&Ge.connect(Ie)}}const ee=new te,J=new te;function O(de,pe,Ie){ee.setFromMatrixPosition(pe.matrixWorld),J.setFromMatrixPosition(Ie.matrixWorld);const Qe=ee.distanceTo(J),Ge=pe.projectionMatrix.elements,pt=Ie.projectionMatrix.elements,qt=Ge[14]/(Ge[10]-1),ft=Ge[14]/(Ge[10]+1),At=(Ge[9]+1)/Ge[5],Pt=(Ge[9]-1)/Ge[5],Mt=(Ge[8]-1)/Ge[0],It=(pt[8]+1)/pt[0],Gt=qt*Mt,_t=qt*It,xt=Qe/(-Mt+It),Et=xt*-Mt;if(pe.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(Et),de.translateZ(xt),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),Ge[10]===-1)de.projectionMatrix.copy(pe.projectionMatrix),de.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const q=qt+xt,Qt=ft+xt,bt=Gt-Et,k=_t+(Qe-Et),T=At*ft/Qt*q,K=Pt*ft/Qt*q;de.projectionMatrix.makePerspective(bt,k,T,K,q,Qt),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function le(de,pe){pe===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(pe.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(o===null)return;let pe=de.near,Ie=de.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(Ie=x.depthFar)),se.near=H.near=z.near=pe,se.far=H.far=z.far=Ie,($!==se.near||ne!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),$=se.near,ne=se.far),se.layers.mask=de.layers.mask|6,z.layers.mask=se.layers.mask&-5,H.layers.mask=se.layers.mask&-3;const Qe=de.parent,Ge=se.cameras;le(se,Qe);for(let pt=0;pt<Ge.length;pt++)le(Ge[pt],Qe);Ge.length===2?O(se,z,H):se.projectionMatrix.copy(z.projectionMatrix),L===null&&de.isPerspectiveCamera&&(L={camera:de,fov:de.fov,zoom:de.zoom}),Ee(de,se,Qe)};function Ee(de,pe,Ie){Ie===null?de.matrix.copy(pe.matrixWorld):(de.matrix.copy(Ie.matrixWorld),de.matrix.invert(),de.matrix.multiply(pe.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(pe.projectionMatrix),de.projectionMatrixInverse.copy(pe.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=Nf*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(de){m=de,_!==null&&(_.fixedFoveation=de),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=de)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(se)},this.getCameraTexture=function(de){return v[de]};let Ze=null;function Ke(de,pe){if(S=pe.getViewerPose(p||u),E=pe,S!==null){const Ie=S.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Qe=!1;Ie.length!==se.cameras.length&&(se.cameras.length=0,Qe=!0);for(let ft=0;ft<Ie.length;ft++){const At=Ie[ft];let Pt=null;if(M!==null)Pt=M.getViewport(At);else{const It=y.getViewSubImage(_,At);Pt=It.viewport,ft===0&&(e.setRenderTargetTextures(b,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(b))}let Mt=W[ft];Mt===void 0&&(Mt=new Si,Mt.layers.enable(ft),Mt.viewport=new gn,W[ft]=Mt),Mt.matrix.fromArray(At.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(At.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ft===0&&(se.matrix.copy(Mt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Qe===!0&&se.cameras.push(Mt)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){y=s.getBinding();const ft=y.getDepthInformation(Ie[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,o.renderState)}if(Ge&&Ge.includes("camera-access")&&A){e.state.unbindTexture(),y=s.getBinding();for(let ft=0;ft<Ie.length;ft++){const At=Ie[ft].camera;if(At){let Pt=v[At];Pt||(Pt=new fg,v[At]=Pt);const Mt=y.getCameraImage(At);Pt.sourceTexture=Mt}}}}for(let Ie=0;Ie<I.length;Ie++){const Qe=N[Ie],Ge=I[Ie];Qe!==null&&Ge!==void 0&&Ge.update(Qe,pe,p||u)}Ze&&Ze(de,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),E=null}const je=new gg;je.setAnimationLoop(Ke),this.setAnimationLoop=function(de){Ze=de},this.dispose=function(){}}}const N1=new dn,Eg=new Ct;Eg.set(-1,0,0,0,1,0,0,0,1);function I1(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,hg(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,R,F,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),S(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&M(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),A(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?m(x,v,R,F):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===fi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===fi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const R=e.get(v),F=R.envMap,b=R.envMapRotation;F&&(x.envMap.value=F,x.envMapRotation.value.setFromMatrix4(N1.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Eg),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,R,F){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*R,x.scale.value=F*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function S(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,R){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const R=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function D1(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(b,I){const N=I.program;s.uniformBlockBinding(b,N)}function p(b,I){let N=o[b.id];N===void 0&&(x(b),N=S(b),o[b.id]=N,b.addEventListener("dispose",R));const B=I.program;s.updateUBOMapping(b,B);const w=e.render.frame;l[b.id]!==w&&(_(b),l[b.id]=w)}function S(b){const I=y();b.__bindingPointIndex=I;const N=r.createBuffer(),B=b.__size,w=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,B,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function y(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const I=o[b.id],N=b.uniforms,B=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let w=0,L=N.length;w<L;w++){const z=N[w];if(Array.isArray(z))for(let H=0,W=z.length;H<W;H++)M(z[H],w,H,B);else M(z,w,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(b,I,N,B){if(A(b,I,N,B)===!0){const w=b.__offset,L=b.value;if(Array.isArray(L)){let z=0;for(let H=0;H<L.length;H++){const W=L[H],se=v(W);E(W,b.__data,z),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,b.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,b.__data)}}function E(b,I,N){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,N)}function A(b,I,N,B){const w=b.value,L=I+"_"+N;if(B[L]===void 0)return typeof w=="number"||typeof w=="boolean"?B[L]=w:ArrayBuffer.isView(w)?B[L]=w.slice():B[L]=w.clone(),!0;{const z=B[L];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return B[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(z.equals(w)===!1)return z.copy(w),!0}}return!1}function x(b){const I=b.uniforms;let N=0;const B=16;for(let L=0,z=I.length;L<z;L++){const H=Array.isArray(I[L])?I[L]:[I[L]];for(let W=0,se=H.length;W<se;W++){const $=H[W],ne=Array.isArray($.value)?$.value:[$.value];for(let ge=0,oe=ne.length;ge<oe;ge++){const Q=ne[ge],ee=v(Q),J=N%B,O=J%ee.boundary,le=J+O;N+=O,le!==0&&B-le<ee.storage&&(N+=B-le),$.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=ee.storage}}}const w=N%B;return w>0&&(N+=B-w),b.__size=N,b.__cache={},this}function v(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",b),I}function R(b){const I=b.target;I.removeEventListener("dispose",R);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function F(){for(const b in o)r.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:m,update:p,dispose:F}}const U1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cr=null;function O1(){return cr===null&&(cr=new Ex(U1,16,16,ks,mr),cr.name="DFG_LUT",cr.minFilter=Kn,cr.magFilter=Kn,cr.wrapS=Nr,cr.wrapT=Nr,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}class F1{constructor(e={}){const{canvas:t=J_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Mi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const A=M,x=new Set([Wf,Hf,Gf]),v=new Set([Mi,pr,wo,To,zf,Vf]),R=new Uint32Array(4),F=new Int32Array(4),b=new te;let I=null,N=null;const B=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let H=!1,W=null,se=null,$=null,ne=null;this._outputColorSpace=Ii;let ge=0,oe=0,Q=null,ee=-1,J=null;const O=new gn,le=new gn;let Ee=null;const Ze=new Bt(0);let Ke=0,je=t.width,de=t.height,pe=1,Ie=null,Qe=null;const Ge=new gn(0,0,je,de),pt=new gn(0,0,je,de);let qt=!1;const ft=new Kf;let At=!1,Pt=!1;const Mt=new dn,It=new te,Gt=new gn,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Et(){return Q===null?pe:1}let q=s;function Qt(P,j){return t.getContext(P,j)}let bt,k,T,K,ue,_e,we,ke,ie,ae,Le,Ce,Oe,Me,et,Se,Je,G,Fe,xe,De,Be,ye;try{const P={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ff}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",nn,!1),q===null){const j="webgl2";if(q=Qt(j,P),q===null)throw Qt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(P){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Kt("WebGLRenderer: "+P.message),P}function $e(){bt=new OM(q),bt.init(),De=new b1(q,bt),k=new AM(q,bt,e,De),T=new T1(q,bt),k.reversedDepthBuffer&&_&&T.buffers.depth.setReversed(!0),se=q.createFramebuffer(),$=q.createFramebuffer(),ne=q.createFramebuffer(),K=new kM(q),ue=new d1,_e=new A1(q,bt,T,ue,k,De,K),we=new UM(z),ke=new Vx(q),Be=new wM(q,ke),ie=new FM(q,ke,K,Be),ae=new VM(q,ie,ke,Be,K),G=new zM(q,k,_e),et=new bM(ue),Le=new u1(z,we,bt,k,Be,et),Ce=new I1(z,ue),Oe=new h1,Me=new x1(bt),Je=new EM(z,we,T,ae,E,m),Se=new w1(z,ae,k),ye=new D1(q,K,k,T),Fe=new TM(q,bt,K),xe=new BM(q,bt,K),K.programs=Le.programs,z.capabilities=k,z.extensions=bt,z.properties=ue,z.renderLists=Oe,z.shadowMap=Se,z.state=T,z.info=K}A!==Mi&&(L=new HM(A,t.width,t.height,f,o,l));const qe=new L1(z,q);this.xr=qe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=bt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=bt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(P){P!==void 0&&(pe=P,this.setSize(je,de,!1))},this.getSize=function(P){return P.set(je,de)},this.setSize=function(P,j,me=!0){if(qe.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}je=P,de=j,t.width=Math.floor(P*pe),t.height=Math.floor(j*pe),me===!0&&(t.style.width=P+"px",t.style.height=j+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(je*pe,de*pe).floor()},this.setDrawingBufferSize=function(P,j,me){je=P,de=j,pe=me,t.width=Math.floor(P*me),t.height=Math.floor(j*me),this.setViewport(0,0,P,j)},this.setEffects=function(P){if(A===Mi){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let j=0;j<P.length;j++)if(P[j].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(O)},this.getViewport=function(P){return P.copy(Ge)},this.setViewport=function(P,j,me,ce){P.isVector4?Ge.set(P.x,P.y,P.z,P.w):Ge.set(P,j,me,ce),T.viewport(O.copy(Ge).multiplyScalar(pe).round())},this.getScissor=function(P){return P.copy(pt)},this.setScissor=function(P,j,me,ce){P.isVector4?pt.set(P.x,P.y,P.z,P.w):pt.set(P,j,me,ce),T.scissor(le.copy(pt).multiplyScalar(pe).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(P){T.setScissorTest(qt=P)},this.setOpaqueSort=function(P){Ie=P},this.setTransparentSort=function(P){Qe=P},this.getClearColor=function(P){return P.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,me=!0){let ce=0;if(P){let re=!1;if(Q!==null){const He=Q.texture.format;re=x.has(He)}if(re){const He=Q.texture.type,Ve=v.has(He),We=Je.getClearColor(),nt=Je.getClearAlpha(),it=We.r,St=We.g,h=We.b;Ve?(R[0]=it,R[1]=St,R[2]=h,R[3]=nt,q.clearBufferuiv(q.COLOR,0,R)):(F[0]=it,F[1]=St,F[2]=h,F[3]=nt,q.clearBufferiv(q.COLOR,0,F))}else ce|=q.COLOR_BUFFER_BIT}j&&(ce|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ce|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),W=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Je.dispose(),Oe.dispose(),Me.dispose(),ue.dispose(),we.dispose(),ae.dispose(),Be.dispose(),ye.dispose(),Le.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",$t),qe.removeEventListener("sessionend",yn),on.stop()};function Lt(P){P.preventDefault(),Bm("WebGLRenderer: Context Lost."),H=!0}function Xe(){Bm("WebGLRenderer: Context Restored."),H=!1;const P=K.autoReset,j=Se.enabled,me=Se.autoUpdate,ce=Se.needsUpdate,re=Se.type;$e(),K.autoReset=P,Se.enabled=j,Se.autoUpdate=me,Se.needsUpdate=ce,Se.type=re}function nn(P){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function In(P){const j=P.target;j.removeEventListener("dispose",In),Ei(j)}function Ei(P){wi(P),ue.remove(P)}function wi(P){const j=ue.get(P).programs;j!==void 0&&(j.forEach(function(me){Le.releaseProgram(me)}),P.isShaderMaterial&&Le.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,me,ce,re,He){j===null&&(j=_t);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,We=Zt(P,j,me,ce,re);T.setMaterial(ce,Ve);let nt=me.index,it=1;if(ce.wireframe===!0){if(nt=ie.getWireframeAttribute(me),nt===void 0)return;it=2}const St=me.drawRange,h=me.attributes.position;let D=St.start*it,Y=(St.start+St.count)*it;He!==null&&(D=Math.max(D,He.start*it),Y=Math.min(Y,(He.start+He.count)*it)),nt!==null?(D=Math.max(D,0),Y=Math.min(Y,nt.count)):h!=null&&(D=Math.max(D,0),Y=Math.min(Y,h.count));const Pe=Y-D;if(Pe<0||Pe===1/0)return;Be.setup(re,ce,We,me,nt);let ht,be=Fe;if(nt!==null&&(ht=ke.get(nt),be=xe,be.setIndex(ht)),re.isMesh)ce.wireframe===!0?(T.setLineWidth(ce.wireframeLinewidth*Et()),be.setMode(q.LINES)):be.setMode(q.TRIANGLES);else if(re.isLine){let ot=ce.linewidth;ot===void 0&&(ot=1),T.setLineWidth(ot*Et()),re.isLineSegments?be.setMode(q.LINES):re.isLineLoop?be.setMode(q.LINE_LOOP):be.setMode(q.LINE_STRIP)}else re.isPoints?be.setMode(q.POINTS):re.isSprite&&be.setMode(q.TRIANGLES);if(re.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))be.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const ot=re._multiDrawStarts,Ae=re._multiDrawCounts,yt=re._multiDrawCount,st=nt?ke.get(nt).bytesPerElement:1,Ht=ue.get(ce).currentProgram.getUniforms();for(let ut=0;ut<yt;ut++)Ht.setValue(q,"_gl_DrawID",ut),be.render(ot[ut]/st,Ae[ut])}else if(re.isInstancedMesh)be.renderInstances(D,Pe,re.count);else if(me.isInstancedBufferGeometry){const ot=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ae=Math.min(me.instanceCount,ot);be.renderInstances(D,Pe,Ae)}else be.render(D,Pe)};function bn(P,j,me,ce){W!==null&&P.isNodeMaterial&&W.setObject(ce,P),At===!0&&et.setState(P,me,!1),P.transparent===!0&&P.side===yi&&P.forceSinglePass===!1?(P.side=fi,P.needsUpdate=!0,Dn(P,j,ce),P.side=Os,P.needsUpdate=!0,Dn(P,j,ce),P.side=yi):Dn(P,j,ce)}this.compile=function(P,j,me=null){me===null&&(me=P),W!==null&&W.renderStart(P,j,me),N=Me.get(me),N.init(j),w.push(N),me.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),P!==me&&P.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),Pt=this.localClippingEnabled,At=et.init(this.clippingPlanes,Pt),At===!0&&et.setGlobalState(this.clippingPlanes,j),W!==null&&Se.render(N.state.shadowsArray,me,j);const ce=new Set;return P.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const He=re.material;if(He)if(Array.isArray(He))for(let Ve=0;Ve<He.length;Ve++){const We=He[Ve];bn(We,me,j,re),ce.add(We)}else bn(He,me,j,re),ce.add(He)}),N=w.pop(),W!==null&&W.renderEnd(),ce},this.compileAsync=function(P,j,me=null){const ce=this.compile(P,j,me);return new Promise(re=>{function He(){if(ce.forEach(function(Ve){const nt=ue.get(Ve).currentProgram;(nt===void 0||nt.isReady())&&ce.delete(Ve)}),ce.size===0){re(P);return}setTimeout(He,10)}bt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Jn=null;function Qn(P){Jn&&Jn(P)}function $t(){on.stop()}function yn(){on.start()}const on=new gg;on.setAnimationLoop(Qn),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(P){Jn=P,qe.setAnimationLoop(P),P===null?on.stop():on.start()},qe.addEventListener("sessionstart",$t),qe.addEventListener("sessionend",yn),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;W!==null&&W.renderStart(P,j);const me=qe.enabled===!0&&qe.isPresenting===!0,ce=L!==null&&(Q===null||me)&&L.begin(z,Q);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(j),j=qe.getCamera()),P.isScene===!0&&P.onBeforeRender(z,P,j,Q),N=Me.get(P,w.length),N.init(j),N.state.textureUnits=_e.getTextureUnits(),w.push(N),Mt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ft.setFromProjectionMatrix(Mt,fr,j.reversedDepth),Pt=this.localClippingEnabled,At=et.init(this.clippingPlanes,Pt),I=Oe.get(P,B.length),I.init(),B.push(I),qe.enabled===!0&&qe.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&Ui(Ve,j,-1/0,z.sortObjects)}Ui(P,j,0,z.sortObjects),I.finish(),W!==null&&W.updateLights(N.state.lightsArray),z.sortObjects===!0&&I.sort(Ie,Qe),xt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,xt&&Je.addToRenderList(I,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&et.beginShadows();const re=N.state.shadowsArray;if(Se.render(re,P,j),At===!0&&et.endShadows(),(ce&&L.hasRenderPass())===!1){const Ve=I.opaque,We=I.transmissive;if(N.setupLights(),j.isArrayCamera){const nt=j.cameras;if(We.length>0)for(let it=0,St=nt.length;it<St;it++){const h=nt[it];Fi(Ve,We,P,h)}xt&&Je.render(P);for(let it=0,St=nt.length;it<St;it++){const h=nt[it];Oi(I,P,h,h.viewport)}}else We.length>0&&Fi(Ve,We,P,j),xt&&Je.render(P),Oi(I,P,j)}Q!==null&&oe===0&&(_e.updateMultisampleRenderTarget(Q),_e.updateRenderTargetMipmap(Q)),ce&&L.end(z),P.isScene===!0&&P.onAfterRender(z,P,j),Be.resetDefaultState(),ee=-1,J=null,w.pop(),w.length>0?(N=w[w.length-1],_e.setTextureUnits(N.state.textureUnits),At===!0&&et.setGlobalState(z.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,W!==null&&W.renderEnd()};function Ui(P,j,me,ce){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)me=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLightProbeGrid)N.pushLightProbeGrid(P);else if(P.isLight)N.pushLight(P),P.castShadow&&N.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ft)){ce&&Gt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Mt);const Ve=ae.update(P),We=P.material;We.visible&&I.push(P,Ve,We,me,Gt.z,null,j)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ft))){const Ve=ae.update(P),We=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Gt.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Gt.copy(Ve.boundingSphere.center)),Gt.applyMatrix4(P.matrixWorld).applyMatrix4(Mt)),Array.isArray(We)){const nt=Ve.groups;for(let it=0,St=nt.length;it<St;it++){const h=nt[it],D=We[h.materialIndex];D&&D.visible&&I.push(P,Ve,D,me,Gt.z,h,j)}}else We.visible&&I.push(P,Ve,We,me,Gt.z,null,j)}}const He=P.children;for(let Ve=0,We=He.length;Ve<We;Ve++)Ui(He[Ve],j,me,ce)}function Oi(P,j,me,ce){const{opaque:re,transmissive:He,transparent:Ve}=P;N.setupLightsView(me),At===!0&&et.setGlobalState(z.clippingPlanes,me),ce&&T.viewport(O.copy(ce)),re.length>0&&kn(re,j,me),He.length>0&&kn(He,j,me),Ve.length>0&&kn(Ve,j,me),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Fi(P,j,me,ce){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ce.id]===void 0){const D=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ce.id]=new Yi(1,1,{generateMipmaps:!0,type:D?mr:Mi,minFilter:Ds,samples:Math.max(4,k.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const He=N.state.transmissionRenderTarget[ce.id],Ve=ce.viewport||O;He.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const We=z.getRenderTarget(),nt=z.getActiveCubeFace(),it=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(Ze),Ke=z.getClearAlpha(),Ke<1&&z.setClearColor(16777215,.5),z.clear(),xt&&Je.render(me);const St=z.toneMapping;z.toneMapping=hr;const h=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),N.setupLightsView(ce),At===!0&&et.setGlobalState(z.clippingPlanes,ce),kn(P,me,ce),_e.updateMultisampleRenderTarget(He),_e.updateRenderTargetMipmap(He),bt.has("WEBGL_multisampled_render_to_texture")===!1){let D=!1;for(let Y=0,Pe=j.length;Y<Pe;Y++){const ht=j[Y],{object:be,geometry:ot,material:Ae,group:yt}=ht;if(Ae.side===yi&&be.layers.test(ce.layers)){const st=Ae.side;Ae.side=fi,Ae.needsUpdate=!0,Ti(be,me,ce,ot,Ae,yt),Ae.side=st,Ae.needsUpdate=!0,D=!0}}D===!0&&(_e.updateMultisampleRenderTarget(He),_e.updateRenderTargetMipmap(He))}z.setRenderTarget(We,nt,it),z.setClearColor(Ze,Ke),h!==void 0&&(ce.viewport=h),z.toneMapping=St}function kn(P,j,me){const ce=j.isScene===!0?j.overrideMaterial:null;for(let re=0,He=P.length;re<He;re++){const Ve=P[re],{object:We,geometry:nt,group:it}=Ve;let St=Ve.material;St.allowOverride===!0&&ce!==null&&(St=ce),We.layers.test(me.layers)&&Ti(We,j,me,nt,St,it)}}function Ti(P,j,me,ce,re,He){W!==null&&re.isNodeMaterial&&W.setObject(P,re),P.onBeforeRender(z,j,me,ce,re,He),P.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),re.onBeforeRender(z,j,me,ce,P,He),re.transparent===!0&&re.side===yi&&re.forceSinglePass===!1?(re.side=fi,re.needsUpdate=!0,z.renderBufferDirect(me,j,ce,re,P,He),re.side=Os,re.needsUpdate=!0,z.renderBufferDirect(me,j,ce,re,P,He),re.side=yi):z.renderBufferDirect(me,j,ce,re,P,He),P.onAfterRender(z,j,me,ce,re,He)}function Dn(P,j,me){j.isScene!==!0&&(j=_t);const ce=ue.get(P),re=N.state.lights,He=N.state.shadowsArray,Ve=re.state.version,We=Le.getParameters(P,re.state,He,j,me,N.state.lightProbeGridArray),nt=Le.getProgramCacheKey(We);let it=ce.programs;ce.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?j.environment:null,ce.fog=j.fog;const St=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ce.envMap=we.get(P.envMap||ce.environment,St),ce.envMapRotation=ce.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",In),it=new Map,ce.programs=it);let h=it.get(nt);if(h!==void 0){if(ce.currentProgram===h&&ce.lightsStateVersion===Ve)return gr(P,We),h}else We.uniforms=Le.getUniforms(P),W!==null&&P.isNodeMaterial&&W.build(P,me,We),P.onBeforeCompile(We,z),h=Le.acquireProgram(We,nt),it.set(nt,h),ce.uniforms=We.uniforms;const D=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(D.clippingPlanes=et.uniform),gr(P,We),ce.needsLights=er(P),ce.lightsStateVersion=Ve,ce.needsLights&&(D.ambientLightColor.value=re.state.ambient,D.lightProbe.value=re.state.probe,D.sunLights.value=re.state.sun,D.sunLightShadows.value=re.state.sunShadow,D.directionalLights.value=re.state.directional,D.directionalLightShadows.value=re.state.directionalShadow,D.spotLights.value=re.state.spot,D.spotLightShadows.value=re.state.spotShadow,D.rectAreaLights.value=re.state.rectArea,D.ltc_1.value=re.state.rectAreaLTC1,D.ltc_2.value=re.state.rectAreaLTC2,D.pointLights.value=re.state.point,D.pointLightShadows.value=re.state.pointShadow,D.hemisphereLights.value=re.state.hemi,D.sunShadowMatrix.value=re.state.sunShadowMatrix,D.sunShadowCascade.value=re.state.sunShadowCascade,D.directionalShadowMatrix.value=re.state.directionalShadowMatrix,D.spotLightMatrix.value=re.state.spotLightMatrix,D.spotLightMap.value=re.state.spotLightMap,D.pointShadowMatrix.value=re.state.pointShadowMatrix),ce.lightProbeGrid=N.state.lightProbeGridArray.length>0,ce.currentProgram=h,ce.uniformsList=null,h}function Ji(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=mc.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function gr(P,j){const me=ue.get(P);me.outputColorSpace=j.outputColorSpace,me.batching=j.batching,me.batchingColor=j.batchingColor,me.instancing=j.instancing,me.instancingColor=j.instancingColor,me.instancingMorph=j.instancingMorph,me.skinning=j.skinning,me.morphTargets=j.morphTargets,me.morphNormals=j.morphNormals,me.morphColors=j.morphColors,me.morphTargetsCount=j.morphTargetsCount,me.numClippingPlanes=j.numClippingPlanes,me.numIntersection=j.numClipIntersection,me.vertexAlphas=j.vertexAlphas,me.vertexTangents=j.vertexTangents,me.toneMapping=j.toneMapping}function Fr(P,j){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(j.matrixWorld);for(let me=0,ce=P.length;me<ce;me++){const re=P[me];if(re.texture!==null&&re.boundingBox.containsPoint(b))return re}return null}function Zt(P,j,me,ce,re){j.isScene!==!0&&(j=_t),_e.resetTextureUnits();const He=j.fog,Ve=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?j.environment:null,We=Q===null?z.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wt.workingColorSpace,nt=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,it=we.get(ce.envMap||Ve,nt),St=ce.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,h=!!me.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),D=!!me.morphAttributes.position,Y=!!me.morphAttributes.normal,Pe=!!me.morphAttributes.color;let ht=hr;ce.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ht=z.toneMapping);const be=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,ot=be!==void 0?be.length:0,Ae=ue.get(ce),yt=N.state.lights;if(At===!0&&(Pt===!0||P!==J)){const kt=P===J&&ce.id===ee;et.setState(ce,P,kt)}let st=!1;ce.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==yt.state.version||Ae.outputColorSpace!==We||re.isBatchedMesh&&Ae.batching===!1||!re.isBatchedMesh&&Ae.batching===!0||re.isBatchedMesh&&Ae.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ae.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ae.instancing===!1||!re.isInstancedMesh&&Ae.instancing===!0||re.isSkinnedMesh&&Ae.skinning===!1||!re.isSkinnedMesh&&Ae.skinning===!0||re.isInstancedMesh&&Ae.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ae.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ae.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ae.instancingMorph===!1&&re.morphTexture!==null||Ae.envMap!==it||ce.fog===!0&&Ae.fog!==He||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==et.numPlanes||Ae.numIntersection!==et.numIntersection)||Ae.vertexAlphas!==St||Ae.vertexTangents!==h||Ae.morphTargets!==D||Ae.morphNormals!==Y||Ae.morphColors!==Pe||Ae.toneMapping!==ht||Ae.morphTargetsCount!==ot||!!Ae.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Ae.__version=ce.version);let Ht=Ae.currentProgram;st===!0&&(Ht=Dn(ce,j,re),W&&ce.isNodeMaterial&&W.onUpdateProgram(ce,Ht,Ae));let ut=!1,Rt=!1,Dt=!1;const mt=Ht.getUniforms(),Jt=Ae.uniforms;if(T.useProgram(Ht.program)&&(ut=!0,Rt=!0,Dt=!0),ce.id!==ee&&(ee=ce.id,Rt=!0),Ae.needsLights){const kt=Fr(N.state.lightProbeGridArray,re);Ae.lightProbeGrid!==kt&&(Ae.lightProbeGrid=kt,Rt=!0)}if(ut||J!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),mt.setValue(q,"projectionMatrix",P.projectionMatrix),mt.setValue(q,"viewMatrix",P.matrixWorldInverse);const zn=mt.map.cameraPosition;zn!==void 0&&zn.setValue(q,It.setFromMatrixPosition(P.matrixWorld)),k.logarithmicDepthBuffer&&mt.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&mt.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),J!==P&&(J=P,Rt=!0,Dt=!0)}if(Ae.needsLights&&(yt.state.sunShadowMap.length>0&&mt.setValue(q,"sunShadowMap",yt.state.sunShadowMap,_e),yt.state.directionalShadowMap.length>0&&mt.setValue(q,"directionalShadowMap",yt.state.directionalShadowMap,_e),yt.state.spotShadowMap.length>0&&mt.setValue(q,"spotShadowMap",yt.state.spotShadowMap,_e),yt.state.pointShadowMap.length>0&&mt.setValue(q,"pointShadowMap",yt.state.pointShadowMap,_e)),re.isSkinnedMesh){mt.setOptional(q,re,"bindMatrix"),mt.setOptional(q,re,"bindMatrixInverse");const kt=re.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),mt.setValue(q,"boneTexture",kt.boneTexture,_e))}re.isBatchedMesh&&(mt.setOptional(q,re,"batchingTexture"),mt.setValue(q,"batchingTexture",re._matricesTexture,_e),mt.setOptional(q,re,"batchingIdTexture"),mt.setValue(q,"batchingIdTexture",re._indirectTexture,_e),mt.setOptional(q,re,"batchingColorTexture"),re._colorsTexture!==null&&mt.setValue(q,"batchingColorTexture",re._colorsTexture,_e));const Un=me.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&G.update(re,me,Ht),(Rt||Ae.receiveShadow!==re.receiveShadow)&&(Ae.receiveShadow=re.receiveShadow,mt.setValue(q,"receiveShadow",re.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&j.environment!==null&&(Jt.envMapIntensity.value=j.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=O1()),Rt){if(mt.setValue(q,"toneMappingExposure",z.toneMappingExposure),Ae.needsLights&&Qi(Jt,Dt),He&&ce.fog===!0&&Ce.refreshFogUniforms(Jt,He),Ce.refreshMaterialUniforms(Jt,ce,pe,de,N.state.transmissionRenderTarget[P.id]),Ae.needsLights&&Ae.lightProbeGrid){const kt=Ae.lightProbeGrid;Jt.probesSH.value=kt.texture,Jt.probesMin.value.copy(kt.boundingBox.min),Jt.probesMax.value.copy(kt.boundingBox.max),Jt.probesResolution.value.copy(kt.resolution)}mc.upload(q,Ji(Ae),Jt,_e)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(mc.upload(q,Ji(Ae),Jt,_e),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&mt.setValue(q,"center",re.center),mt.setValue(q,"modelViewMatrix",re.modelViewMatrix),mt.setValue(q,"normalMatrix",re.normalMatrix),mt.setValue(q,"modelMatrix",re.matrixWorld),ce.uniformsGroups!==void 0){const kt=ce.uniformsGroups;for(let zn=0,Vn=kt.length;zn<Vn;zn++){const Gn=kt[zn];ye.update(Gn,Ht),ye.bind(Gn,Ht)}}return Ht}function Qi(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.sunLights.needsUpdate=j,P.sunLightShadows.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function er(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return ge},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(P,j,me){const ce=ue.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ue.get(P.texture).__webglTexture=j,ue.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:me,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){const me=ue.get(P);me.__webglFramebuffer=j,me.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,me=0){Q=P,ge=j,oe=me;let ce=null,re=!1,He=!1;if(P){const We=ue.get(P);if(We.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(q.FRAMEBUFFER,We.__webglFramebuffer),O.copy(P.viewport),le.copy(P.scissor),Ee=P.scissorTest,T.viewport(O),T.scissor(le),T.setScissorTest(Ee),ee=-1;return}else if(We.__webglFramebuffer===void 0)_e.setupRenderTarget(P);else if(We.__hasExternalTextures)_e.rebindTextures(P,ue.get(P.texture).__webglTexture,ue.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const St=P.depthTexture;if(We.__boundDepthTexture!==St){if(St!==null&&ue.has(St)&&(P.width!==St.image.width||P.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(P)}}const nt=P.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const it=ue.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[j])?ce=it[j][me]:ce=it[j],re=!0):P.samples>0&&_e.useMultisampledRTT(P)===!1?ce=ue.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ce=it[me]:ce=it,O.copy(P.viewport),le.copy(P.scissor),Ee=P.scissorTest}else O.copy(Ge).multiplyScalar(pe).floor(),le.copy(pt).multiplyScalar(pe).floor(),Ee=qt;if(me!==0&&(ce=se),T.bindFramebuffer(q.FRAMEBUFFER,ce)&&T.drawBuffers(P,ce),T.viewport(O),T.scissor(le),T.setScissorTest(Ee),re){const We=ue.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,me)}else if(He){const We=j;for(let nt=0;nt<P.textures.length;nt++){const it=ue.get(P.textures[nt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+nt,it.__webglTexture,me,We)}}else if(P!==null&&me!==0){const We=ue.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,We.__webglTexture,me)}ee=-1};function Bi(P){const j=ue.get(P);return(j.__readFormat!==P.format||j.__readType!==P.type)&&(j.__readFormat=P.format,j.__readType=P.type,j.__formatReadable=k.textureFormatReadable(P.format),j.__typeReadable=k.textureTypeReadable(P.type)),j}this.readRenderTargetPixels=function(P,j,me,ce,re,He,Ve,We=0){if(!(P&&P.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(nt=nt[Ve]),nt){T.bindFramebuffer(q.FRAMEBUFFER,nt);try{const it=P.textures[We],St=it.format,h=it.type;P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);const D=Bi(it);if(D.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(D.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-ce&&me>=0&&me<=P.height-re&&q.readPixels(j,me,ce,re,De.convert(St),De.convert(h),He)}finally{const it=Q!==null?ue.get(Q).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(P,j,me,ce,re,He,Ve,We=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(nt=nt[Ve]),nt)if(j>=0&&j<=P.width-ce&&me>=0&&me<=P.height-re){T.bindFramebuffer(q.FRAMEBUFFER,nt);const it=P.textures[We],St=it.format,h=it.type;P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);const D=Bi(it);if(D.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(D.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Y=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Y),q.bufferData(q.PIXEL_PACK_BUFFER,He.byteLength,q.STREAM_READ),q.readPixels(j,me,ce,re,De.convert(St),De.convert(h),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Pe=Q!==null?ue.get(Q).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Pe);const ht=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Q_(q,ht,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Y),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,He),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Y),q.deleteSync(ht),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,me=0){const ce=Math.pow(2,-me),re=Math.floor(P.image.width*ce),He=Math.floor(P.image.height*ce),Ve=j!==null?j.x:0,We=j!==null?j.y:0;_e.setTexture2D(P,0),q.copyTexSubImage2D(q.TEXTURE_2D,me,0,0,Ve,We,re,He),T.unbindTexture()},this.copyTextureToTexture=function(P,j,me=null,ce=null,re=0,He=0){let Ve,We,nt,it,St,h,D,Y,Pe;const ht=P.isCompressedTexture?P.mipmaps[He]:P.image;if(me!==null)Ve=me.max.x-me.min.x,We=me.max.y-me.min.y,nt=me.isBox3?me.max.z-me.min.z:1,it=me.min.x,St=me.min.y,h=me.isBox3?me.min.z:0;else{const Jt=Math.pow(2,-re);Ve=Math.floor(ht.width*Jt),We=Math.floor(ht.height*Jt),P.isDataArrayTexture?nt=ht.depth:P.isData3DTexture?nt=Math.floor(ht.depth*Jt):nt=1,it=0,St=0,h=0}ce!==null?(D=ce.x,Y=ce.y,Pe=ce.z):(D=0,Y=0,Pe=0);const be=De.convert(j.format),ot=De.convert(j.type);let Ae;j.isData3DTexture?(_e.setTexture3D(j,0),Ae=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(_e.setTexture2DArray(j,0),Ae=q.TEXTURE_2D_ARRAY):(_e.setTexture2D(j,0),Ae=q.TEXTURE_2D),T.activeTexture(q.TEXTURE0),T.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),T.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),T.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=T.getParameter(q.UNPACK_ROW_LENGTH),st=T.getParameter(q.UNPACK_IMAGE_HEIGHT),Ht=T.getParameter(q.UNPACK_SKIP_PIXELS),ut=T.getParameter(q.UNPACK_SKIP_ROWS),Rt=T.getParameter(q.UNPACK_SKIP_IMAGES);T.pixelStorei(q.UNPACK_ROW_LENGTH,ht.width),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ht.height),T.pixelStorei(q.UNPACK_SKIP_PIXELS,it),T.pixelStorei(q.UNPACK_SKIP_ROWS,St),T.pixelStorei(q.UNPACK_SKIP_IMAGES,h);const Dt=P.isDataArrayTexture||P.isData3DTexture,mt=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const Jt=ue.get(P),Un=ue.get(j),kt=ue.get(Jt.__renderTarget),zn=ue.get(Un.__renderTarget);T.bindFramebuffer(q.READ_FRAMEBUFFER,kt.__webglFramebuffer),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Vn=0;Vn<nt;Vn++)Dt&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ue.get(P).__webglTexture,re,h+Vn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ue.get(j).__webglTexture,He,Pe+Vn)),q.blitFramebuffer(it,St,Ve,We,D,Y,Ve,We,q.DEPTH_BUFFER_BIT,q.NEAREST);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(re!==0||P.isRenderTargetTexture||ue.has(P)){const Jt=ue.get(P),Un=ue.get(j);T.bindFramebuffer(q.READ_FRAMEBUFFER,$),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,ne);for(let kt=0;kt<nt;kt++)Dt?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Jt.__webglTexture,re,h+kt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Jt.__webglTexture,re),mt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Un.__webglTexture,He,Pe+kt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Un.__webglTexture,He),re!==0?q.blitFramebuffer(it,St,Ve,We,D,Y,Ve,We,q.COLOR_BUFFER_BIT,q.NEAREST):mt?q.copyTexSubImage3D(Ae,He,D,Y,Pe+kt,it,St,Ve,We):q.copyTexSubImage2D(Ae,He,D,Y,it,St,Ve,We);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else mt?P.isDataTexture||P.isData3DTexture?q.texSubImage3D(Ae,He,D,Y,Pe,Ve,We,nt,be,ot,ht.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Ae,He,D,Y,Pe,Ve,We,nt,be,ht.data):q.texSubImage3D(Ae,He,D,Y,Pe,Ve,We,nt,be,ot,ht):P.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,He,D,Y,Ve,We,be,ot,ht.data):P.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,He,D,Y,ht.width,ht.height,be,ht.data):q.texSubImage2D(q.TEXTURE_2D,He,D,Y,Ve,We,be,ot,ht);T.pixelStorei(q.UNPACK_ROW_LENGTH,yt),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,st),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Ht),T.pixelStorei(q.UNPACK_SKIP_ROWS,ut),T.pixelStorei(q.UNPACK_SKIP_IMAGES,Rt),He===0&&j.generateMipmaps&&q.generateMipmap(Ae),T.unbindTexture()},this.initRenderTarget=function(P){ue.get(P).__webglFramebuffer===void 0&&_e.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?_e.setTextureCube(P,0):P.isData3DTexture?_e.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?_e.setTexture2DArray(P,0):_e.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){ge=0,oe=0,Q=null,T.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}function B1(r,e,t,s=62206,o=16638023){for(;r.children.length>0;)r.remove(r.children[0]);for(;e.children.length>0;)e.remove(e.children[0]);const l={londonEyeWheel:null,eiffelBeacon:null,libertyTorchHalo:null,auroraMesh:null},u=new Ft({color:330518,fog:!1}),f=new Ft({color:s,fog:!1}),m=new Ft({color:o,fog:!1}),p=new Ft({color:16777215,fog:!1}),S=new Ft({color:62206,fog:!1}),y=new Ft({color:16638023,fog:!1}),_=new Ft({color:15680580,fog:!1}),M=(A,x,v,R,F,b,I,N=f)=>{const B=new un(x,v,R),w=new Ne(B,u);w.position.set(F,b,I);const L=new ya(B),z=new Sa(L,new os({color:N.color,fog:!1}));return w.add(z),A.add(w),w},E=-28;if(t==="obelisco"){const A=new Ft({color:3718648,fog:!1}),x=M(r,5.2,68,5.2,-10,E+34,0,A),v=new un(1.1,66,5.4),R=new Ne(v,p);x.add(R);const F=new ii(3.7,10,4);F.rotateY(Math.PI/4);const b=new Ne(F,p);b.position.set(-10,E+73,0),r.add(b);const I=new un(36,1.4,3.2),N=new Ne(I,A);N.position.set(14,E+12,2),r.add(N);const B=new mn(.45,.9,42,10),w=new Ne(B,p);w.position.set(12,E+28,2),w.rotation.z=-.46,r.add(w);for(let L=0;L<6;L++){const z=new mn(.08,.08,24+L*2,6),H=new Ne(z,A);H.position.set(16+L*2.2,E+21,2),H.rotation.z=.55+L*.06,r.add(H)}}else if(t==="cristo"){const A=new ii(28,44,7),x=new Ne(A,u);x.position.set(0,E+14,0);const v=new Sa(new ya(A),new os({color:2278750,fog:!1}));x.add(v),r.add(x),M(r,7,10,7,0,E+39,0,y);const R=M(r,6.2,26,4.2,0,E+57,0,p),F=new Ne(new un(3.8,25,4.4),new Ft({color:14742270,fog:!1}));R.add(F);const b=new un(32,3.2,3),I=new Ne(b,p);I.position.set(0,E+64,0),r.add(I);const N=new Yn(2.6,14,14),B=new Ne(N,p);B.position.set(0,E+72.5,.5),r.add(B);const w=new ii(12,55,16,1,!0),L=new Ft({color:4906624,transparent:!0,opacity:.18,blending:di,side:yi,depthWrite:!1,fog:!1}),z=new Ne(w,L);z.position.set(-14,E+46,2),z.rotation.z=-.35,r.add(z);const H=new Ne(w,L);H.position.set(14,E+46,2),H.rotation.z=.35,r.add(H)}else if(t==="liberty_empire"){M(r,11,20,11,-16,E+10,0,S),M(r,6.5,28,5.5,-16,E+34,0,S);const A=new Ne(new Yn(2.8,12,12),S);A.position.set(-16,E+50,0),r.add(A);for(let b=-3;b<=3;b++){const I=new Ne(new ii(.35,3.6,6),S);I.position.set(-16+b*.9,E+53,0),I.rotation.z=-b*.22,r.add(I)}const x=new Ne(new mn(.7,.9,14,8),S);x.position.set(-12.5,E+54,0),x.rotation.z=-.25,r.add(x);const v=new Ne(new Yn(2.2,16,16),y);v.position.set(-10.8,E+62,0),r.add(v);const R=new Ne(new Yn(5.2,16,16),new Ft({color:16638023,transparent:!0,opacity:.42,blending:di,fog:!1}));R.position.copy(v.position),r.add(R),l.libertyTorchHalo=R,M(r,14,52,12,15,E+26,-2,S),M(r,9.5,18,9,15,E+61,-2,S),M(r,5.5,12,5.5,15,E+76,-2,y);const F=new Ne(new mn(.25,.9,24,10),p);F.position.set(15,E+94,-2),r.add(F)}else if(t==="eiffel"){const A=new Ft({color:16498468,fog:!1}),x=[[-11,-6],[11,-6],[-11,6],[11,6]];for(let B=0;B<x.length;B++){const[w,L]=x[B],z=new mn(1.1,2.4,30,8),H=new Ne(z,A);H.position.set(w*.72,E+14,L*.72),H.rotation.z=w<0?-.24:.24,r.add(H)}M(r,20,3.2,14,0,E+28,0,y),M(r,12,24,9,0,E+42,0,A),M(r,14,2.6,10,0,E+54,0,y);const v=new Ne(new mn(1.2,4.8,34,4,4,!0),new Ft({color:16638023,wireframe:!0,fog:!1}));v.position.set(0,E+72,0),v.rotation.y=Math.PI/4,r.add(v);const R=new pn;R.position.set(0,E+90,0);const F=new ii(9,75,16,1,!0);F.translate(0,-37.5,0),F.rotateZ(Math.PI/2);const b=new Ft({color:16707722,transparent:!0,opacity:.32,blending:di,side:yi,depthWrite:!1,fog:!1}),I=new Ne(F,b),N=new Ne(F,b);N.rotation.y=Math.PI,R.add(I),R.add(N),r.add(R),l.eiffelBeacon=R}else if(t==="tokyotower"){const A=[{y:14,rBot:11,rTop:7,h:28,mat:_},{y:38,rBot:7,rTop:4.5,h:20,mat:p},{y:56,rBot:4.5,rTop:2.4,h:16,mat:_},{y:71,rBot:2.4,rTop:.8,h:14,mat:p},{y:84,rBot:.8,rTop:.2,h:14,mat:_}];for(let N=0;N<A.length;N++){const B=A[N],w=new mn(B.rTop,B.rBot,B.h,4,2,!0),L=new Ne(w,new Ft({color:B.mat.color,wireframe:!0,fog:!1}));L.position.set(0,E+B.y,0),L.rotation.y=Math.PI/4,r.add(L)}const x=new mn(.24,.28,6.2,12),v=new Ne(x,_);v.position.set(-2.5,3.1,2.2),e.add(v);const R=new Ne(x,_);R.position.set(2.5,3.1,2.2),e.add(R);const F=new Ne(new un(7.2,.42,.55),_);F.position.set(0,6.2,2.2),e.add(F);const b=new Ne(new un(7.5,.16,.6),y);b.position.set(0,6.48,2.2),e.add(b);const I=new Ne(new un(5.8,.28,.38),_);I.position.set(0,4.9,2.2),e.add(I)}else if(t==="pyramids"){const A=[{x:0,z:-4,r:26,h:48},{x:-24,z:4,r:19,h:36},{x:24,z:6,r:16,h:30}];for(let x=0;x<A.length;x++){const v=A[x],R=new ii(v.r,v.h,4);R.rotateY(Math.PI/4);const F=new Ne(R,u);F.position.set(v.x,E+v.h*.5,v.z);const b=new ya(R),I=new Sa(b,new os({color:16638023,fog:!1}));F.add(I);const N=new ii(v.r*.22,v.h*.22,4);N.rotateY(Math.PI/4);const B=new Ne(N,y);B.position.set(0,v.h*.39,0),F.add(B),r.add(F)}}else if(t==="londoneye"){M(r,7.5,54,7.5,-18,E+27,0,y),M(r,8.6,8.6,8.6,-18,E+58,0,y);const A=new Ne(new mn(3.2,3.2,.5,20),y);A.rotation.x=Math.PI/2,A.position.set(-18,E+58,4.4),r.add(A);const x=new Ne(new ii(5.2,16,4),y);x.rotation.y=Math.PI/4,x.position.set(-18,E+70,0),r.add(x);const v=new pn;v.position.set(14,E+42,0);const R=new Ne(new Ir(21,.65,12,48),S);v.add(R);for(let F=0;F<12;F++){const b=F/12*Math.PI*2,I=new Ne(new mn(.12,.12,42,6),S);I.rotation.z=b,v.add(I);const N=new Ne(new Yn(1.15,10,10),p);N.position.set(Math.cos(b)*21,Math.sin(b)*21,0),v.add(N)}r.add(v),l.londonEyeWheel=v}else if(t==="burjkhalifa"){const A=[{w:15,h:24,y:12},{w:12,h:24,y:36},{w:9,h:22,y:59},{w:6.2,h:22,y:81},{w:3.6,h:20,y:102},{w:1.5,h:24,y:124}];for(let x=0;x<A.length;x++){const v=A[x];M(r,v.w,v.h,v.w,0,E+v.y,0,S);const R=new Ne(new Ir(v.w*.68,.32,10,28),x%2===0?S:y);R.rotation.x=Math.PI/2,R.position.set(0,E+v.y+v.h*.5,0),r.add(R)}}else if(t==="opera"){M(r,44,6,14,0,E+12,0,y);const A=[-14,-6,3,12];for(let R=0;R<A.length;R++){const F=A[R],b=22+R%2*8,I=new ii(6.5,b,4),N=new Ne(I,p);N.position.set(F,E+15+b*.45,2),N.rotation.z=-.28;const B=new Sa(new ya(I),new os({color:62206,fog:!1}));N.add(B),r.add(N)}const x=new Ir(30,.85,10,36,Math.PI),v=new Ne(x,S);v.position.set(0,E+14,-8),r.add(v)}else if(t==="stbasil"){const A=[{x:0,h:48,r:5.2,mat:_},{x:-12,h:36,r:4.2,mat:S},{x:12,h:36,r:4.2,mat:y},{x:-22,h:28,r:3.5,mat:y},{x:22,h:28,r:3.5,mat:S}];for(let x=0;x<A.length;x++){const v=A[x];M(r,v.r*1.4,v.h,v.r*1.4,v.x,E+v.h*.5,0,v.mat);const R=new Ne(new Yn(v.r,16,16),v.mat);R.scale.set(1,1.25,1),R.position.set(v.x,E+v.h+v.r*.8,0),r.add(R);const F=new Ne(new ii(v.r*.45,7,8),y);F.position.set(v.x,E+v.h+v.r*2.1,0),r.add(F);const b=new Ne(new Jf(1.6,0),y);b.position.set(v.x,E+v.h+v.r*2.1+4.5,0),r.add(b)}}else if(t==="marinabay"){const A=[-16,0,16];for(let v=0;v<A.length;v++)M(r,7.5,58,7,A[v],E+29,0,S);const x=new Ne(new un(46,3.8,10),y);x.position.set(2,E+60,0),r.add(x)}else if(t==="swiss_alps"){const A=new Ne(new ii(24,65,5),u);A.position.set(-20,E+32,-4),A.add(new Sa(new ya(A.geometry),new os({color:3718648,fog:!1}))),r.add(A);const x=new Ne(new ii(26,72,5),u);x.position.set(20,E+36,-4),x.add(new Sa(new ya(x.geometry),new os({color:4906624,fog:!1}))),r.add(x);const v=new zs(76,32,16,4),R=new Ft({color:4906624,transparent:!0,opacity:.28,blending:di,side:yi,depthWrite:!1,fog:!1}),F=new Ne(v,R);F.position.set(0,E+78,-8),r.add(F),l.auroraMesh=F}else{M(r,10,62,10,-16,E+31,0,f),M(r,10,62,10,16,E+31,0,f);const A=new Ne(new Yn(6.2,16,16),m);A.position.set(0,E+62,0),r.add(A);const x=M(r,5.5,78,5.5,0,E+39,0,m),v=new Ne(new mn(.25,.8,22,8),p);v.position.set(0,48,0),x.add(v);const R=new Ne(new un(48,1.8,4),f);R.position.set(0,E+24,2),r.add(R)}return l}const cs=.82;function k1(){return new Zi({uniforms:{uBaseColor:{value:new Bt(395278)},uRimColor:{value:new Bt(62206)},uRimPower:{value:2.15},uRimStrength:{value:.96}},vertexShader:`
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
    `})}function z1(){const r=document.createElement("canvas");r.width=256,r.height=512;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#030712"),t.addColorStop(.22,"#07162c"),t.addColorStop(.44,"#0c2d48"),t.addColorStop(.56,"#145374"),t.addColorStop(.64,"#0ea5e9"),t.addColorStop(.72,"#0c2d48"),t.addColorStop(1,"#030712"),e.fillStyle=t,e.fillRect(0,0,256,512);const s=e.createRadialGradient(128,305,10,128,305,135);return s.addColorStop(0,"rgba(0, 242, 254, 0.52)"),s.addColorStop(.45,"rgba(14, 165, 233, 0.26)"),s.addColorStop(1,"rgba(7, 22, 44, 0.0)"),e.fillStyle=s,e.fillRect(0,0,256,512),new Tc(r)}function V1(){const r=document.createElement("canvas");r.width=64,r.height=128;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"#0f172a"),t.addColorStop(.35,"#475569"),t.addColorStop(.5,"#e2e8f0"),t.addColorStop(.65,"#334155"),t.addColorStop(1,"#090d16"),e.fillStyle=t,e.fillRect(0,0,64,128),e.strokeStyle="#06080e",e.lineWidth=5;for(let o=-32;o<160;o+=16)e.beginPath(),e.moveTo(0,o),e.lineTo(64,o+24),e.stroke(),e.strokeStyle="rgba(0, 242, 254, 0.85)",e.lineWidth=2,e.beginPath(),e.moveTo(0,o+5),e.lineTo(64,o+29),e.stroke(),e.strokeStyle="#06080e",e.lineWidth=5;const s=new Tc(r);return s.wrapS=Bs,s.wrapT=Bs,s.repeat.set(1,720),s}function U0(r=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=r?"#081c30":"#051020",t.fillRect(0,0,128,256);const s=8,o=26,l=128/s,u=256/o;for(let m=0;m<o;m++)for(let p=0;p<s;p++){const S=(m*37+p*19)%29;S<(r?18:12)||(S%5===0?t.fillStyle=r?"rgba(0, 242, 254, 0.35)":"rgba(0, 242, 254, 0.72)":S%7===0?t.fillStyle=r?"rgba(253, 224, 71, 0.28)":"rgba(253, 224, 71, 0.62)":t.fillStyle=r?"rgba(125, 211, 252, 0.25)":"rgba(186, 230, 253, 0.45)",t.fillRect(p*l+3,m*u+2,l-6,u-4))}const f=new Tc(e);return f.wrapS=Bs,f.wrapT=Bs,f}function G1(){const r=document.createElement("canvas");r.width=256,r.height=256;const e=r.getContext("2d");return e.fillStyle="#060c18",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=10,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.strokeStyle="#fde047",e.lineWidth=5,e.beginPath(),e.arc(128,128,84,0,Math.PI*2),e.stroke(),e.fillStyle="#00f2fe",e.font="900 110px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,132),new Tc(r)}function H1(r){const e=r.clientWidth||420,t=r.clientHeight||780,s=new mx;s.background=new Bt(398118),s.fog=new jf(664121,.011);const o=new Si(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new F1({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=Bf,l.toneMappingExposure=1.22,r.innerHTML="",r.appendChild(l.domElement);const u=new Fx(3718648,.85);s.add(u);const f=new Ox(62206,1.65);f.position.set(0,28,-65),s.add(f);const m=new u0(62206,3.8,22);m.position.set(0,1.35,0),s.add(m);const p=new u0(16638023,4.2,24);p.position.set(0,2.5,-.3),s.add(p);const S=z1(),y=new zs(340,220),_=new Ft({map:S,fog:!1,depthWrite:!1}),M=new Ne(y,_);M.position.set(0,12,-210),s.add(M);const E=1800,A=V1(),x=new mn(.042,.042,E,16);x.rotateX(Math.PI/2);const v=new Bd({color:13358561,map:A,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),R=new Ne(x,v);R.position.set(0,0,-E*.5+12),s.add(R);const F=new mn(.015,.015,E,8);F.rotateX(Math.PI/2);const b=new Ft({color:62206,transparent:!0,opacity:.72}),I=new Ne(F,b);I.position.set(0,.022,-E*.5+12),s.add(I);const N=new Bd({color:330002,roughness:.8,metalness:.2}),B=new un(7.2,60,7),w=new Ne(B,N);w.position.set(0,-30.045,3.5),s.add(w);const L=new pn,z=new un(9.2,70,9.2),H=new Ne(z,N);H.position.set(0,-35.045,0),L.add(H);const W=G1(),se=new zs(7,7);se.rotateX(-Math.PI/2);const $=new Ft({map:W}),ne=new Ne(se,$);ne.position.set(0,.01,0),L.add(ne);const ge=new Ir(3.4,.075,12,36);ge.rotateX(Math.PI/2);const oe=new Ft({color:62206}),Q=new Ne(ge,oe);Q.position.set(0,.12,0),L.add(Q);const ee=new pn;L.add(ee),L.position.set(0,0,-100),s.add(L);const J=new pn;J.position.set(0,0,-135),s.add(J);const O=U0(!1),le=U0(!0),Ee=new Bd({color:464166,map:O,emissive:959977,emissiveMap:O,emissiveIntensity:.58,roughness:.5,metalness:.4}),Ze=new Ft({color:729657,map:le}),Ke=new Ft({color:1128020}),je=new Ft({color:62206,transparent:!0,opacity:.35}),de=[];for(let be=0;be<44;be++){const ot=be%2===0,Ae=be%3,yt=Math.floor(be/2),st=6.5+be%4*2.1+Ae*2.2,Ht=6.5+be*3%4*1.8,ut=72+be*13%42+Ae*16,Rt=new un(st,ut,Ht),Dt=Ae===0?Ee:Ae===1?Ze:Ke,mt=new Ne(Rt,Dt),Jt=Ae===0?12.2+be%3*2.8:Ae===1?21.5+be%3*4.2:32+be%4*5,Un=(ot?-1:1)*Jt,kt=10-yt*13,zn=-60+ut*.5;if(mt.position.set(Un,zn,kt),Ae===0){const Vn=new un(.12,ut,.12),Gn=new Ne(Vn,je);Gn.position.set(ot?st*.5+.04:-st*.5-.04,0,Ht*.5),mt.add(Gn)}s.add(mt),de.push(mt)}const pe=[],Ie=new ii(5.5,115,20,1,!0);for(let be=0;be<10;be++){const ot=be%2===0,Ae=new Ft({color:be%3===0?62206:959977,transparent:!0,opacity:be%3===0?.11:.075,side:yi,depthWrite:!1,blending:di}),yt=new Ne(Ie,Ae),st=(ot?-1:1)*(8.5+be%3*4.5),Ht=-18-be*24;yt.position.set(st,8,Ht),yt.rotation.z=(ot?-1:1)*.24,s.add(yt),pe.push({mesh:yt,mat:Ae,baseAngle:(ot?-1:1)*.24,speed:.45+be%4*.18,phaseOffset:be*1.1})}const Qe=[],Ge=new un(.4,.18,2.2),pt=new Ft({color:62206}),qt=new Ft({color:15680580});for(let be=0;be<20;be++){const ot=be%2===0,Ae=new Ne(Ge,ot?qt:pt),yt=(be%4-1.5)*2.1;Ae.position.set(yt,-36,-be*12),s.add(Ae),Qe.push({mesh:Ae,speed:(ot?-1:1)*(15+be%4*3.5)})}const ft=220,At=new Float32Array(ft*3);for(let be=0;be<ft;be++)At[be*3+0]=(Math.random()-.5)*28,At[be*3+1]=-6+Math.random()*20,At[be*3+2]=6-Math.random()*55;const Pt=new wn;Pt.setAttribute("position",new Ki(At,3));const Mt=new ug({color:62206,size:.14,transparent:!0,opacity:.65,blending:di,depthWrite:!1}),It=new Tx(Pt,Mt);s.add(It);const Gt=new pn;Gt.position.set(0,0,0),s.add(Gt);const _t=k1(),xt=new Ft({color:62206}),Et=be=>{const ot=new pn;ot.position.set(be?-.08:.08,.88,0);const Ae=new Is(.064,.34,10,18),yt=new Ne(Ae,_t);yt.position.set(be?.018:-.018,-.19,0),yt.rotation.z=be?.05:-.05,ot.add(yt);const st=new pn;st.position.set(be?.035:-.035,-.41,0),ot.add(st);const Ht=new Is(.05,.34,10,18),ut=new Ne(Ht,_t);ut.position.set(be?.02:-.02,-.2,0),ut.rotation.z=be?.04:-.04,st.add(ut);const Rt=new pn;Rt.position.set(be?.035:-.035,-.43,0),st.add(Rt);const Dt=new Is(.042,.14,8,14);Dt.rotateX(Math.PI/2);const mt=new Ne(Dt,_t);return mt.position.set(0,-.01,-.025),Rt.add(mt),{hipGroup:ot,kneeGroup:st,bootGroup:Rt}},q=Et(!0),Qt=Et(!1);Gt.add(q.hipGroup),Gt.add(Qt.hipGroup);const bt=new pn;Gt.add(bt);const k=new mn(.135,.12,.15,18);k.scale(1.15,1,.72);const T=new Ne(k,_t);T.position.set(0,.89,0),bt.add(T);const K=new pn;K.position.set(0,.95,0),bt.add(K);const ue=new mn(.165,.125,.24,18);ue.scale(1.18,1,.68);const _e=new Ne(ue,_t);_e.position.set(0,.12,0),K.add(_e);const we=new mn(.215,.162,.28,20);we.scale(1.24,1,.68);const ke=new Ne(we,_t);ke.position.set(0,.35,0),K.add(ke);const ie=new un(.036,.38,.024),ae=new Ft({color:62206,transparent:!0,opacity:.45}),Le=new Ne(ie,ae);Le.position.set(0,.26,.13),K.add(Le);const Ce=new Yn(.078,16,16),Oe=new Ne(Ce,_t);Oe.position.set(-.255,.45,0),K.add(Oe);const Me=new Ne(Ce,_t);Me.position.set(.255,.45,0),K.add(Me);const et=new mn(.05,.06,.1,14),Se=new Ne(et,_t);Se.position.set(0,.54,0),K.add(Se);const Je=new pn;Je.position.set(0,.67,0),K.add(Je);const G=new Yn(.118,24,24);G.scale(.95,1.06,1.02);const Fe=new Ne(G,_t);Je.add(Fe);const xe=new Ir(.116,.016,12,28);xe.rotateX(Math.PI/2);const De=new Ne(xe,xt);De.position.set(0,.025,0),Je.add(De);const Be=new pn;Be.position.set(0,.022,.118),Je.add(Be);const ye=new un(.16,.028,.008);ye.translate(.08,0,0);const $e=new Ne(ye,xt);Be.add($e);const qe=new pn;qe.position.set(.155,0,0),$e.add(qe);const Lt=new un(.16,.024,.007);Lt.translate(.08,0,0);const Xe=new Ne(Lt,xt);qe.add(Xe);const nn=new pn;nn.position.set(.155,0,0),Xe.add(nn);const In=new un(.15,.018,.006);In.translate(.075,0,0);const Ei=new Ne(In,xt);nn.add(Ei);const wi=be=>{const ot=new pn;ot.position.set(be?-.255:.255,.44,0);const Ae=new Is(.048,.22,10,16),yt=new Ne(Ae,_t);yt.position.set(be?-.08:.08,-.11,-.02),yt.rotation.z=be?-.56:.56,ot.add(yt);const st=new pn;st.position.set(be?-.16:.16,-.21,-.04),ot.add(st);const Ht=new Is(.042,.21,10,16),ut=new Ne(Ht,_t);ut.position.set(be?-.07:.07,-.04,-.09),ut.rotation.x=.72,ut.rotation.z=be?-.45:.45,st.add(ut);const Rt=new Yn(.046,14,14),Dt=new Ne(Rt,_t);return Dt.position.set(be?-.14:.14,-.08,-.18),st.add(Dt),{shoulderGroup:ot,elbowGroup:st,handMesh:Dt}},bn=wi(!0),Jn=wi(!1);K.add(bn.shoulderGroup),K.add(Jn.shoulderGroup);const Qn=new pn;Qn.position.set(0,.17,-.2),K.add(Qn);const $t=4,yn=new mn(.018,.018,$t,16);yn.rotateZ(Math.PI/2);const on=new Ft({color:14742270}),Ui=new Ne(yn,on);Qn.add(Ui);const Oi=new mn(.052,.052,$t,14);Oi.rotateZ(Math.PI/2);const Fi=new Ft({color:62206,transparent:!0,opacity:.42,blending:di,depthWrite:!1}),kn=new Ne(Oi,Fi);Qn.add(kn);const Ti=new Yn(.058,14,14),Dn=new Ft({color:62206}),Ji=new Ne(Ti,Dn);Ji.position.set(-$t*.5,0,0),Qn.add(Ji);const gr=new Ne(Ti,Dn);gr.position.set($t*.5,0,0),Qn.add(gr);const Fr=new Ir(.14,.015,10,24),Zt=new Ne(Fr,Dn);Zt.position.set(-$t*.5,0,0),Zt.visible=!1,Qn.add(Zt);const Qi=new Ne(Fr,Dn);Qi.position.set($t*.5,0,0),Qi.visible=!1,Qn.add(Qi);const er=new Float32Array(6),Bi=new wn;Bi.setAttribute("position",new Ki(er,3));const P=new os({color:62206,linewidth:3}),j=new cg(Bi,P);j.visible=!1,s.add(j);const me=new mn(.04,.04,1,10),ce=new Ft({color:62206,transparent:!0,opacity:.85,blending:di,depthWrite:!1}),re=new Ne(me,ce);re.visible=!1,s.add(re);const He=new Ir(.14,.012,10,28),Ve=new Ft({color:62206,transparent:!0,opacity:.55,blending:di}),We=new Ft({color:62206,transparent:!0,opacity:.55,blending:di}),nt=new Ne(He,Ve),it=new Ne(He,We);s.add(nt),s.add(it);const St=new Yn(.12,24,24),h=new Yn(.24,16,16),D=new Yn(.072,12,12),Y=new Ft({color:16710083}),Pe=new Ft({color:16638023,transparent:!0,opacity:.52,blending:di,depthWrite:!1}),ht=[];for(let be=0;be<4;be++){const ot=new pn,Ae=new Ne(St,Y),yt=new Ne(h,Pe);ot.add(Ae),ot.add(yt),s.add(ot);const st=[];for(let Ht=0;Ht<7;Ht++){const ut=new Ft({color:Ht<3?16638023:16096779,transparent:!0,opacity:.68-Ht*.085,blending:di,depthWrite:!1}),Rt=new Ne(D,ut),Dt=1-Ht*.12;Rt.scale.set(Dt,Dt,Dt),s.add(Rt),st.push(Rt)}ht.push({group:ot,core:Ae,halo:yt,trails:st})}return{scene:s,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:m,goldOrbLight:p,backlitBackdrop:M,cableTex:A,arrivalGroup:L,arrivalToriiGroup:ee,beaconRingMesh:Q,landmarkGroup:J,landmarkAnimRefs:{},activeLandmarkKey:"",skyscrapers:de,spotlightBeams:pe,carMeshes:Qe,weatherPoints:It,weatherGeo:Pt,weatherMat:Mt,weatherCount:ft,acrobatGroup:Gt,vectorSilhouetteMat:_t,dorsalStripMat:ae,poleCoreMat:on,poleLaserGlowMat:Fi,poleTipMat:Dn,poleGlowMesh:kn,leftGyroRing:Zt,rightGyroRing:Qi,upperBodyGroup:bt,torsoSpineGroup:K,headGroup:Je,leftLeg:q,rightLeg:Qt,leftArm:bn,rightArm:Jn,poleGroup:Qn,ribbonPivot:Be,ribbonJoint2:qe,ribbonJoint3:nn,grappleLaserLine:j,grappleLineGeo:Bi,grappleBeamMesh:re,leftReceiverRing:nt,rightReceiverRing:it,leftReceiverMat:Ve,rightReceiverMat:We,orbMeshes:ht,worldLeftHand:new te,worldRightHand:new te,grappleAnchor:new te,activeCityIndex:-1}}function W1(r,e,t){var ke;if(!r)return;const s=-e.distance,o=e.angle,l=Math.abs(o),u=Math.min(1,l/cs),f=e.walkSpeedMultiplier||1,m=((ke=e.cfg)==null?void 0:ke.city)||Lr[0],p=`${m.id||m.index}_${m.monument}_${e.targetDistance}`;if(r.activeLandmarkKey!==p){r.activeLandmarkKey=p,r.activeCityIndex=e.cityIndex;const ie=m.weatherArchetype||"urban";ie==="cyber_rain"?(r.scene.background.setHex(395550),r.scene.fog.color.setHex(923714),r.weatherMat.color.setHex(62206),r.weatherMat.size=.16):ie==="golden_embers"?(r.scene.background.setHex(1181976),r.scene.fog.color.setHex(2627372),r.weatherMat.color.setHex(16638023),r.weatherMat.size=.18):ie==="blizzard"?(r.scene.background.setHex(398118),r.scene.fog.color.setHex(1059918),r.weatherMat.color.setHex(14742270),r.weatherMat.size=.2):(r.scene.background.setHex(332068),r.scene.fog.color.setHex(664121),r.weatherMat.color.setHex(3718648),r.weatherMat.size=.14);const ae=m.accentColor?parseInt(m.accentColor.replace("#",""),16):62206,Le=m.winColor?parseInt(m.winColor.replace("#",""),16):16638023;r.landmarkAnimRefs=B1(r.landmarkGroup,r.arrivalToriiGroup,m.monument||"obelisco",ae,Le)}if(r.landmarkGroup.position.set(0,0,-e.targetDistance-35),r.landmarkAnimRefs){if(r.landmarkAnimRefs.londonEyeWheel&&(r.landmarkAnimRefs.londonEyeWheel.rotation.z+=t*.22),r.landmarkAnimRefs.eiffelBeacon&&(r.landmarkAnimRefs.eiffelBeacon.rotation.y+=t*1.4),r.landmarkAnimRefs.libertyTorchHalo){const ie=1+Math.sin(e.time*6)*.18;r.landmarkAnimRefs.libertyTorchHalo.scale.set(ie,ie,ie)}r.landmarkAnimRefs.auroraMesh&&(r.landmarkAnimRefs.auroraMesh.position.x=Math.sin(e.time*.9)*4.5)}const S=r.weatherGeo.attributes.position,y=S.array,_=m.weatherArchetype||"urban",M=(e.windCurrent||0)*(_==="blizzard"?14:9.5),E=_==="cyber_rain"?-24:_==="blizzard"?-6.5:_==="golden_embers"?2.2:-1.8;for(let ie=0;ie<r.weatherCount;ie++){const ae=ie*3;y[ae+0]+=M*t,y[ae+1]+=E*t,y[ae+0]>15?y[ae+0]-=30:y[ae+0]<-15&&(y[ae+0]+=30),E<0&&y[ae+1]<-8?y[ae+1]=14:E>0&&y[ae+1]>14&&(y[ae+1]=-8),y[ae+2]>s+8?y[ae+2]-=56:y[ae+2]<s-50&&(y[ae+2]+=56)}S.needsUpdate=!0;const A=e.isFeverMode,x=e.poleObj||{},v=e.skinObj||{},R=v.rimHex||62206,F=!!(v.goldTrail||A);r.vectorSilhouetteMat.uniforms.uRimStrength.value=A||v.goldTrail?1.65:1.05,r.vectorSilhouetteMat.uniforms.uRimColor.value.setHex(F&&Math.sin(e.time*16)>-.2?16638023:R),r.dorsalStripMat.opacity=A||v.goldTrail?.95:.52,r.dorsalStripMat.color.setHex(F?16638023:R);const b=x.poleScaleX||1;r.poleGroup.scale.set(b,1,1),r.poleCoreMat.color.setHex(x.coreHex||14742270),r.poleLaserGlowMat.color.setHex(A?16638023:x.glowHex||62206),r.poleTipMat.color.setHex(x.tipHex||62206),r.poleLaserGlowMat.opacity=A?.85:.48;const I=A?1.45:1;r.poleGlowMesh.scale.set(1,I,I);const N=!!x.hasGyroRings;r.leftGyroRing.visible=N,r.rightGyroRing.visible=N,N&&(r.leftGyroRing.rotation.x=e.time*7.5,r.leftGyroRing.rotation.y=e.time*5.2,r.rightGyroRing.rotation.x=-e.time*7.5,r.rightGyroRing.rotation.y=-e.time*5.2);const B=Math.min(1,t*11),w=Math.min(1,t*7.5),L=u*.56+(e.fallSlowMo?.22:0);e.smoothKneeFlex+=(L-e.smoothKneeFlex)*B;const z=-Math.sin(o)*.25;e.smoothHipX+=(z-e.smoothHipX)*B;const W=l>cs*.75||e.fallSlowMo?1:0;e.edgeSaveBlend+=(W-e.edgeSaveBlend)*B;const se=-o*.38-Math.sin(o)*.16*(1+e.edgeSaveBlend*.45),$=-o*.32;if(e.smoothTorsoComp+=(se-e.smoothTorsoComp)*w,e.smoothNeckComp+=($-e.smoothNeckComp)*w,e.fallSlowMo)r.acrobatGroup.position.set(e.fallPosX,e.fallPosY,s),r.acrobatGroup.rotation.z=-o*1.35,r.acrobatGroup.rotation.x=e.fallTumbleX;else if(e.grappleRescueTimer>0){const ie=e.grappleRescueTimer/.45,ae=e.rescueStartX*ie,Le=e.rescueStartY*ie;r.acrobatGroup.position.set(ae,Le,s),r.acrobatGroup.rotation.z=-o*ie,r.acrobatGroup.rotation.x=0}else r.acrobatGroup.position.set(0,0,s),r.acrobatGroup.rotation.z=-o*.72,r.acrobatGroup.rotation.x=0;const ne=e.gameStatus==="PLAYING"&&!e.fallSlowMo,ge=ne?Math.sin(e.stepPhase):0,oe=ne?Math.cos(e.stepPhase):0,Q=Math.min(.56,.34*Math.pow(f,.45)),ee=ne?Math.abs(ge)*.036*Math.min(1.5,f):Math.sin(e.time*2.6)*.012,J=e.smoothKneeFlex*.22;r.upperBodyGroup.position.x=e.smoothHipX,r.upperBodyGroup.position.y=ee-J;const O=Math.sin(e.time*22)*e.edgeSaveBlend,le=e.smoothKneeFlex*.95;r.leftLeg.hipGroup.position.x=-.08+e.smoothHipX*.65,r.rightLeg.hipGroup.position.x=.08+e.smoothHipX*.65,r.leftLeg.hipGroup.position.y=.88-J,r.rightLeg.hipGroup.position.y=.88-J;const Ee=-e.smoothHipX*.75,Ze=o>0?e.edgeSaveBlend*(.28+Math.abs(O)*.22):0,Ke=o<0?-e.edgeSaveBlend*(.28+Math.abs(O)*.22):0;r.leftLeg.hipGroup.rotation.z=Ee-Ze,r.rightLeg.hipGroup.rotation.z=Ee-Ke,r.leftLeg.hipGroup.rotation.x=ge*Q+le*.55+O*.25,r.leftLeg.kneeGroup.rotation.x=-Math.max(0,oe)*(Q*1.22)-le*1.1,r.leftLeg.bootGroup.rotation.x=le*.52,r.rightLeg.hipGroup.rotation.x=-ge*Q+le*.55-O*.25,r.rightLeg.kneeGroup.rotation.x=-Math.max(0,-oe)*(Q*1.22)-le*1.1,r.rightLeg.bootGroup.rotation.x=le*.52;const je=ne?Math.min(.24,(f-1)*.14):0;r.torsoSpineGroup.rotation.z=e.smoothTorsoComp+O*.08,r.torsoSpineGroup.rotation.x=.06+je+e.smoothKneeFlex*.18+e.edgeSaveBlend*.28,r.headGroup.rotation.z=e.smoothNeckComp,r.headGroup.rotation.x=-je*.7-e.smoothKneeFlex*.14-e.edgeSaveBlend*.2;const de=e.leftPressed?.28:0,pe=e.grappleRescueTimer>0?1.45:e.rightPressed?.28:0,Ie=ge*.12*f;r.leftArm.shoulderGroup.rotation.x=-Ie+O*.55,r.rightArm.shoulderGroup.rotation.x=e.grappleRescueTimer>0?-1.35:Ie-O*.55,r.leftArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4-e.edgeSaveBlend*.22,r.rightArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4+e.edgeSaveBlend*.22,r.leftArm.elbowGroup.rotation.x=de+e.edgeSaveBlend*.25,r.rightArm.elbowGroup.rotation.x=pe+e.edgeSaveBlend*.25,r.poleGroup.rotation.z=(pe-de)*.38-o*.42+O*.14;const Qe=e.windCurrent||0,Ge=10.5*Math.min(1.6,f);r.ribbonPivot.rotation.y=-Math.PI*.5+Qe*.78+Math.sin(e.time*Ge)*.22,r.ribbonPivot.rotation.z=Math.cos(e.time*(Ge*1.15))*.16,r.ribbonJoint2.rotation.y=Math.sin(e.time*(Ge*1.35)-.8)*.28+Qe*.22,r.ribbonJoint3.rotation.y=Math.sin(e.time*(Ge*1.6)-1.6)*.34+Qe*.25,r.backlitBackdrop.position.z=s-210,r.arrivalGroup.position.set(0,0,-e.targetDistance-3.5);const pt=1+Math.sin(e.time*5)*.08;r.beaconRingMesh.scale.set(pt,pt,1);for(let ie=0;ie<r.spotlightBeams.length;ie++){const ae=r.spotlightBeams[ie];ae.mesh.rotation.z=ae.baseAngle+Math.sin(e.time*ae.speed+ae.phaseOffset)*.14,ae.mesh.position.z>s+15?ae.mesh.position.z-=240:ae.mesh.position.z<s-235&&(ae.mesh.position.z+=240)}for(let ie=0;ie<r.skyscrapers.length;ie++){const ae=r.skyscrapers[ie];ae.position.z>s+18?ae.position.z-=286:ae.position.z<s-268&&(ae.position.z+=286)}for(let ie=0;ie<r.carMeshes.length;ie++){const ae=r.carMeshes[ie];ae.mesh.position.z+=ae.speed*t,ae.mesh.position.z>s+25?ae.mesh.position.z=s-230:ae.mesh.position.z<s-235&&(ae.mesh.position.z=s+20)}r.acrobatGroup.updateMatrixWorld(!0),r.leftArm.handMesh.getWorldPosition(r.worldLeftHand),r.rightArm.handMesh.getWorldPosition(r.worldRightHand);const qt=r.worldLeftHand,ft=r.worldRightHand;if(e.grappleRescueTimer>0){r.grappleLaserLine.visible=!0,r.grappleBeamMesh.visible=!0,r.grappleAnchor.set(0,0,s-1.2);const ie=r.grappleLineGeo.attributes.position.array;ie[0]=ft.x,ie[1]=ft.y,ie[2]=ft.z,ie[3]=r.grappleAnchor.x,ie[4]=r.grappleAnchor.y,ie[5]=r.grappleAnchor.z,r.grappleLineGeo.attributes.position.needsUpdate=!0;const ae=ft.distanceTo(r.grappleAnchor);r.grappleBeamMesh.position.lerpVectors(ft,r.grappleAnchor,.5),r.grappleBeamMesh.scale.set(1,Math.max(.1,ae),1),r.grappleBeamMesh.lookAt(r.grappleAnchor),r.grappleBeamMesh.rotateX(Math.PI/2)}else r.grappleLaserLine.visible=!1,r.grappleBeamMesh.visible=!1;let At=!1,Pt=!1;for(let ie=0;ie<e.jugglePool.length;ie++){const ae=e.jugglePool[ie];ae.active&&ae.phase>=e.catchThreshold&&(ae.targetHand==="L"&&(At=!0),ae.targetHand==="R"&&(Pt=!0))}const Mt=1+(x.catchRadiusBonus||0);r.leftReceiverRing.position.copy(qt),r.rightReceiverRing.position.copy(ft),r.leftReceiverMat.color.setHex(At?16638023:62206),r.rightReceiverMat.color.setHex(Pt?16638023:62206);const It=(At?1.32:.78)*Mt,Gt=(Pt?1.32:.78)*Mt;r.leftReceiverRing.scale.set(It,It,It),r.rightReceiverRing.scale.set(Gt,Gt,Gt);for(let ie=0;ie<4;ie++){const ae=e.jugglePool[ie],Le=r.orbMeshes[ie];if(!ae.active||e.fallSlowMo){Le.group.visible=!1;for(let Be=0;Be<Le.trails.length;Be++)Le.trails[Be].visible=!1;continue}Le.group.visible=!0;const Ce=ae.targetHand==="R"?qt:ft,Oe=ae.targetHand==="R"?ft:qt,Me=ae.phase,et=1.48+ie%2*.22,Se=Ce.x+(Oe.x-Ce.x)*Me,Je=Ce.y+(Oe.y-Ce.y)*Me+4*et*Me*(1-Me),G=Ce.z+(Oe.z-Ce.z)*Me-.12*Math.sin(Me*Math.PI);Le.group.position.set(Se,Je,G);const xe=Me>=e.catchThreshold?1.28:A?1.15:1;Le.group.scale.set(xe,xe,xe);const De=A||v.goldTrail?.028:.036;for(let Be=0;Be<Le.trails.length;Be++){const ye=Le.trails[Be],$e=Me-(Be+1)*De;if($e<=.01){ye.visible=!1;continue}ye.visible=!0;const qe=Ce.x+(Oe.x-Ce.x)*$e,Lt=Ce.y+(Oe.y-Ce.y)*$e+4*et*$e*(1-$e),Xe=Ce.z+(Oe.z-Ce.z)*$e-.12*Math.sin($e*Math.PI);ye.position.set(qe,Lt,Xe)}}r.cyanPoleLight.position.set(0,1.35,s),r.cyanPoleLight.intensity=A?6.8:3.8,r.goldOrbLight.position.set(0,2.45,s-.25);const _t=Math.min(1,(e.combo||0)/14),xt=Math.min(1,Math.max(0,(l-cs*.28)/(cs*.62))),Et=e.fallSlowMo?1:xt,Qt=(58+_t*6)*(1-Et)+48*Et,k=(6.2+_t*.55)*(1-Et)+4.95*Et,K=(3.38+_t*.16)*(1-Et)+2.95*Et,ue=Math.min(1,t*5.5);e.dynamicFov+=(Qt-e.dynamicFov)*ue,e.dynamicCamDist+=(k-e.dynamicCamDist)*ue,e.dynamicCamY+=(K-e.dynamicCamY)*ue,Math.abs(r.camera.fov-e.dynamicFov)>.02&&(r.camera.fov=e.dynamicFov,r.camera.updateProjectionMatrix());const _e=e.shake>.05?Math.sin(e.time*42)*e.shake*.038:0,we=e.shake>.05?Math.cos(e.time*36)*e.shake*.038:0;r.camera.position.set(_e+Math.sin(o)*.32,e.dynamicCamY+we,s+e.dynamicCamDist),e.fallSlowMo?r.camera.lookAt(r.acrobatGroup.position):r.camera.lookAt(e.smoothHipX*.35,1.65-e.smoothKneeFlex*.2,s-15),r.camera.rotation.z=-e.cameraRoll*(.52+Et*.65),r.renderer.render(r.scene,r.camera)}function X1(){try{const r=localStorage.getItem(B0);return r?JSON.parse(r):null}catch{return null}}function O0(){try{const r=localStorage.getItem("nma_profile_completed")==="true",e=(localStorage.getItem("nma_player_name")||"").trim(),t=(localStorage.getItem("nma_player_country")||"").trim();return!r||!e||e==="TÚ (Equilibrista)"||e.length<3||!t}catch{return!0}}function q1(){var St;const r=ct.useRef(X1()).current,e=ct.useRef((()=>{try{return localStorage.getItem("nma_economy_v2_migrated")==="true"}catch{return!1}})()).current,[t,s]=ct.useState((r==null?void 0:r.lang)||"es"),[o,l]=ct.useState((r==null?void 0:r.level)||1),[u,f]=ct.useState((r==null?void 0:r.maxUnlockedCity)??Math.min(19,Math.floor((((r==null?void 0:r.level)||1)-1)/5))),[m,p]=ct.useState((r==null?void 0:r.coins)??1200),[S,y]=ct.useState((r==null?void 0:r.gems)??60),[_,M]=ct.useState((r==null?void 0:r.bestScore)||0),[E,A]=ct.useState((r==null?void 0:r.leaguePoints)??320),[x,v]=ct.useState(()=>{try{const D=(localStorage.getItem("nma_player_name")||"").trim();if(D&&D!=="TÚ (Equilibrista)")return D}catch{}const h=((r==null?void 0:r.playerName)||"").trim();return h&&h!=="TÚ (Equilibrista)"?h:""}),[R,F]=ct.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return(r==null?void 0:r.playerCountry)||"AR"}),[b,I]=ct.useState(()=>O0()),[N,B]=ct.useState(()=>{try{const h=(localStorage.getItem("nma_player_name")||"").trim();if(h&&h!=="TÚ (Equilibrista)")return h}catch{}return""}),[w,L]=ct.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return"AR"}),[z,H]=ct.useState(!1),[W,se]=ct.useState((r==null?void 0:r.vipPassActive)||!1),[$,ne]=ct.useState((r==null?void 0:r.unlockedSkins)||["skin_1"]),[ge,oe]=ct.useState((r==null?void 0:r.equippedSkin)||"skin_1"),[Q,ee]=ct.useState((r==null?void 0:r.unlockedPoles)||["pole_basic"]),[J,O]=ct.useState((r==null?void 0:r.equippedPole)||"pole_basic"),[le,Ee]=ct.useState((r==null?void 0:r.ownedMultipliers)||[]),[Ze,Ke]=ct.useState((r==null?void 0:r.unlockedVipCities)||[]),[je,de]=ct.useState((r==null?void 0:r.activeVipCityId)||null),[pe,Ie]=ct.useState((r==null?void 0:r.unlockedProps)||["balls"]),[Qe,Ge]=ct.useState((r==null?void 0:r.equippedProp)||"balls"),[pt,qt]=ct.useState(()=>e?(r==null?void 0:r.gearLevels)||{pole:0,boots:0,gloves:0}:{pole:0,boots:0,gloves:0}),[ft,At]=ct.useState((r==null?void 0:r.claimedTiers)||[]),[Pt,Mt]=ct.useState((r==null?void 0:r.soundEnabled)??!0),[It,Gt]=ct.useState("upgrades"),[_t,xt]=ct.useState("home"),[Et,q]=ct.useState("menu"),[Qt,bt]=ct.useState(null),[k,T]=ct.useState(2),[K,ue]=ct.useState(null),[_e,we]=ct.useState(!1),[ke,ie]=ct.useState([]),[ae,Le]=ct.useState("live"),[Ce,Oe]=ct.useState({progress:0,metersRemaining:68,totalMeters:68,score:0,combo:0,frenzyActive:!1,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:!0,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]}),[Me,et]=ct.useState({coinsEarned:0,scoreEarned:0,lpEarned:0,gemsEarned:0,doubled:!1,revivedOnce:!1}),Se=Pm[t]||Pm.es,Je=cd.find(h=>h.id===je)||null,G=ud(o,Je),Fe=So.find(h=>h.id===ge)||So[0],xe=Ll.find(h=>h.id===J)||Ll[0],De=yo.find(h=>h.id===Qe)||yo[0],Be=le.reduce((h,D)=>{const Y=Nl.find(Pe=>Pe.id===D);return Y?Math.max(h,Y.coinMult):h},1),ye=le.reduce((h,D)=>{const Y=Nl.find(Pe=>Pe.id===D);return Y?Math.max(h,Y.lpMult):h},1),$e=Je?Je.rewardMult:1,qe=Number((De.mult*Fe.bonusMult*xe.scoreMult*ye*$e).toFixed(2)),Lt=Number((De.mult*(1+(Fe.coinBonus||0))*xe.coinMult*Be*$e).toFixed(2));ct.useEffect(()=>{Nt.enabled=Pt},[Pt]),ct.useEffect(()=>{const h=Math.min(19,Math.floor((o-1)/5));h>u&&f(h)},[o,u]),ct.useEffect(()=>{try{localStorage.setItem("nma_economy_v2_migrated","true"),localStorage.setItem(B0,JSON.stringify({lang:t,level:o,maxUnlockedCity:Math.max(u,Math.min(19,Math.floor((o-1)/5))),coins:m,gems:S,bestScore:_,leaguePoints:E,playerName:x||"Equilibrista",playerCountry:R,vipPassActive:W,unlockedSkins:$,equippedSkin:ge,unlockedPoles:Q,equippedPole:J,ownedMultipliers:le,unlockedVipCities:Ze,activeVipCityId:je,unlockedProps:pe,equippedProp:Qe,gearLevels:pt,claimedTiers:ft,soundEnabled:Pt}))}catch{}},[t,o,u,m,S,_,E,x,R,W,$,ge,Q,J,le,Ze,je,pe,Qe,pt,ft,Pt]);const Xe=ct.useCallback(h=>{ue(h),setTimeout(()=>{ue(D=>D===h?null:D)},2600)},[]),nn=ct.useCallback(async()=>{const h=(x||"Equilibrista").trim(),D=await Nm({name:h,country:R,score:E,level:o});ie(D)},[x,R,E,o]);ct.useEffect(()=>{nn();const h=setInterval(nn,12e3);return()=>clearInterval(h)},[nn]);const In=ct.useCallback(async h=>{h&&h.preventDefault();const D=(N||"").trim().slice(0,15);if(D.length<3||D==="TÚ (Equilibrista)"){H(!0),Nt.playMissAlert();return}const Y=w||"AR";H(!1),v(D),F(Y);try{localStorage.setItem("nma_player_name",D),localStorage.setItem("nma_player_country",Y),localStorage.setItem("nma_profile_completed","true")}catch{}I(!1),Nt.init(),Nt.playVictory(),Xe(t==="es"?`✅ Perfil activo: ${Aa(Y)} ${D}`:`✅ Profile active: ${Aa(Y)} ${D}`),Le("syncing"),await lo(D,Y,E,o);const Pe=await Nm({name:D,country:Y,score:E,level:o});ie(Pe),Le("live")},[N,w,E,o,t,Xe]),Ei=ct.useCallback(()=>{B(x||""),L(R||"AR"),H(!1),I(!0)},[x,R]),wi=ct.useRef(null),bn=ct.useRef(null),Jn=ct.useRef(null),Qn=ct.useRef(1),$t=ct.useRef({running:!1,angle:0,angularVel:0,distance:0,targetDistance:68,score:0,combo:0,maxCombo:0,frenzyActive:!1,windForce:0,windTarget:0,windTimer:0,walkCycle:0,lastStepPhase:0,controlInput:0,balls:[],sparks:[],floatingPopups:[],hookAvailable:!0,hookActive:!1,hookTimer:0,freeFallShieldsRemaining:0,revivedOnce:!1,lastTimestamp:0,hudSyncTimer:0,nearMissCooldown:0,lightningFlashAlpha:0,fallSequence:{active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},cfg:null,skinObj:null,poleObj:null,propObj:null,gear:{pole:0,boots:0,gloves:0}}),yn=ct.useCallback((h,D,Y="#00f2fe",Pe="")=>{const ht=Qn.current++;h.floatingPopups.push({id:ht,text:D,subtext:Pe,color:Y,ttl:1.05}),h.floatingPopups.length>4&&h.floatingPopups.shift()},[]),on=ct.useCallback((h,D)=>{const Y=h.ballCount,Pe=[D,"#00f2fe","#fde047","#f43f5e","#c084fc"],ht=[];for(let be=0;be<Y;be++){const ot=be%2===0;ht.push({id:be,fromLeft:ot,targetHand:ot?"right":"left",progress:be/Y*.72,speed:h.juggleSpeed*(.95+be%3*.05),color:Pe[be%Pe.length],waitingCatch:!1})}return ht},[]),Ui=ct.useCallback((h=!1)=>{Nt.init();const D=ud(o,Je),Y=$t.current;if(Y.cfg=D,Y.skinObj=Fe,Y.poleObj=xe,Y.propObj=De,Y.gear={...pt},Y.targetDistance=D.totalDistance,!h){Y.distance=0,Y.score=0,Y.combo=0,Y.maxCombo=0,Y.frenzyActive=!1,Y.hookAvailable=!0,Y.revivedOnce=!1,Y.floatingPopups=[];const Pe=xe.autoSaveFall?1:0,ht=Fe.freeShields||0;Y.freeFallShieldsRemaining=Pe+ht}Y.angle=h?0:(Math.random()-.5)*.08,Y.angularVel=0,Y.windForce=0,Y.windTarget=(Math.random()-.5)*D.windBase*.5,Y.windTimer=1.6,Y.controlInput=0,Y.hookActive=!1,Y.hookTimer=0,Y.nearMissCooldown=0,Y.lightningFlashAlpha=0,Y.fallSequence={active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},Y.balls=on(D,De.color),Y.sparks=[],Y.lastTimestamp=performance.now(),Y.running=!0,Oe({progress:Math.min(100,Math.floor(Y.distance/Y.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(Y.targetDistance-Y.distance)),totalMeters:Y.targetDistance,score:Math.floor(Y.score),combo:Y.combo,frenzyActive:Y.frenzyActive,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:Y.hookAvailable,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]})},[o,Je,Fe,xe,De,pt,on]),Oi=()=>{if(O0()){I(!0);return}Ui(!1),q("playing")},Fi=()=>{Et==="playing"?($t.current.running=!1,Nt.updateWind(0),q("paused")):Et==="paused"&&($t.current.lastTimestamp=performance.now(),$t.current.running=!0,q("playing"))},kn=ct.useCallback(h=>{var yt,st,Ht,ut,Rt,Dt;const D=$t.current;if(!D.running||D.fallSequence.active)return;const Y=(((yt=D.gear)==null?void 0:yt.gloves)||0)*.015,Pe=((st=D.poleObj)==null?void 0:st.catchRadiusBonus)||0,ht=((Ht=D.skinObj)==null?void 0:Ht.catchWindowBonus)||0,be=Math.max(.5,.74-(((ut=D.cfg)==null?void 0:ut.catchWindow)||.24)-Y-(Pe+ht)*.35);let ot=null,Ae=-1;for(const mt of D.balls)mt.targetHand===h&&mt.progress>=be&&mt.progress>Ae&&(Ae=mt.progress,ot=mt);if(ot){const mt=ot.progress>=.85&&ot.progress<=.96;ot.fromLeft=h==="left",ot.targetHand=h==="left"?"right":"left",ot.progress=.02,ot.waitingCatch=!1,D.combo+=1,D.combo>D.maxCombo&&(D.maxCombo=D.combo);const Jt=D.frenzyActive;D.frenzyActive=D.combo>=10,!Jt&&D.frenzyActive?(Nt.playFrenzyStart(),yn(D,t==="es"?"🔥 ¡MODO FRENESÍ x2!":"🔥 FRENZY MODE x2!","#fde047",t==="es"?"COMBO x10 ALCANZADO":"COMBO x10 REACHED")):(Nt.playCatch(D.combo,D.frenzyActive),mt&&yn(D,t==="es"?`⚡ ¡PERFECTO! x${D.combo}`:`⚡ PERFECT! x${D.combo}`,D.frenzyActive?"#fde047":"#00f2fe"));const Un=D.frenzyActive?2:1;if(D.score+=Math.round((28+D.combo*9)*qe*Un),!((Rt=D.poleObj)!=null&&Rt.noCatchRecoil)){const kt=((Dt=D.cfg)==null?void 0:Dt.catchRecoilImpulse)??.05;D.angularVel+=(h==="left"?-1:1)*kt}for(let kt=0;kt<10;kt++)D.sparks.push({hand:h,x:(Math.random()-.5)*.25,y:(Math.random()-.5)*.25,vx:(Math.random()-.5)*3.8,vy:.9+Math.random()*2.8,vz:(Math.random()-.5)*2.8,ttl:.42,color:D.frenzyActive?"#fde047":ot.color})}else D.angularVel+=h==="left"?-.16:.16,D.combo=0,D.frenzyActive=!1,Nt.playMissAlert()},[qe,t,yn]),Ti=ct.useCallback(()=>{const h=$t.current;!h.running||!h.hookAvailable||h.fallSequence.active||(h.hookAvailable=!1,h.hookActive=!0,h.hookTimer=2.6,h.angle*=.15,h.angularVel=0,Nt.playHookRescue(),yn(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80",t==="es"?"ESTABILIDAD RESTAURADA":"STABILITY RESTORED"),Xe(t==="es"?"🪝 ¡Gancho Salvavidas Activado!":"🪝 Lifeline Hook Activated!"))},[t,Xe,yn]);ct.useEffect(()=>{const h=Y=>{const Pe=$t.current;Et!=="playing"||!Pe.running||(Y.key==="ArrowLeft"||Y.key==="a"||Y.key==="A"?Pe.controlInput=-1:Y.key==="ArrowRight"||Y.key==="d"||Y.key==="D"?Pe.controlInput=1:Y.key==="q"||Y.key==="Q"?kn("left"):Y.key==="e"||Y.key==="E"?kn("right"):Y.key===" "?(Y.preventDefault(),Ti()):Y.key==="Escape"&&Fi())},D=Y=>{const Pe=$t.current;(Y.key==="ArrowLeft"||Y.key==="a"||Y.key==="A")&&Pe.controlInput<0&&(Pe.controlInput=0),(Y.key==="ArrowRight"||Y.key==="d"||Y.key==="D")&&Pe.controlInput>0&&(Pe.controlInput=0)};return window.addEventListener("keydown",h),window.addEventListener("keyup",D),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",D)}},[Et,kn,Ti]),ct.useEffect(()=>{const h=wi.current;if(!h)return;const D=H1(h);bn.current=D;const Y=()=>{if(!h||!bn.current)return;const Pe=h.clientWidth||390,ht=h.clientHeight||844;bn.current.camera.aspect=Pe/ht,bn.current.camera.updateProjectionMatrix(),bn.current.renderer.setSize(Pe,ht)};return window.addEventListener("resize",Y),()=>{window.removeEventListener("resize",Y),Nt.updateWind(0),D&&D.renderer&&D.renderer.domElement&&(h.contains(D.renderer.domElement)&&h.removeChild(D.renderer.domElement),D.renderer.dispose())}},[]),ct.useEffect(()=>{const h=$t.current;h.cfg?(h.skinObj=Fe,h.poleObj=xe,h.propObj=De,h.gear={...pt},!h.running&&Et==="menu"&&(h.cfg=G,h.targetDistance=G.totalDistance)):(h.cfg=G,h.skinObj=Fe,h.poleObj=xe,h.propObj=De,h.gear={...pt},h.targetDistance=G.totalDistance,h.balls=on(G,De.color));const D=Y=>{var ht,be,ot,Ae,yt,st,Ht,ut;const Pe=Math.min(.05,Math.max(.001,(Y-(h.lastTimestamp||Y))/1e3));if(h.lastTimestamp=Y,h.floatingPopups.length>0)for(let Rt=h.floatingPopups.length-1;Rt>=0;Rt--)h.floatingPopups[Rt].ttl-=Pe,h.floatingPopups[Rt].ttl<=0&&h.floatingPopups.splice(Rt,1);if(h.lightningFlashAlpha>0&&(h.lightningFlashAlpha=Math.max(0,h.lightningFlashAlpha-Pe*2.4)),h.running&&Et==="playing"){const Rt=h.cfg;if(h.fallSequence.active)if(h.fallSequence.timer+=Pe,Nt.updateWind(0),h.fallSequence.mode==="hook_rescue")if(h.fallSequence.timer<.58)h.fallSequence.fallVy-=24*Pe,h.fallSequence.fallY+=h.fallSequence.fallVy*Pe,h.fallSequence.fallRotX+=2.2*Pe,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*2.5*Pe,h.fallSequence.ropeTopY=Math.max(h.fallSequence.fallY+1.8,16-h.fallSequence.timer*28);else if(h.fallSequence.timer<1.38){const Dt=(h.fallSequence.timer-.58)/.8;h.fallSequence.fallY=Dn(h.fallSequence.fallY,0,Dt*.25),h.fallSequence.fallRotX=Dn(h.fallSequence.fallRotX,0,Dt*.3),h.fallSequence.fallRotZ=Dn(h.fallSequence.fallRotZ,0,Dt*.3),h.fallSequence.ropeTopY=h.fallSequence.fallY+2.2+Dt*10}else h.fallSequence.active=!1,h.fallSequence.mode=null,h.fallSequence.fallY=0,h.fallSequence.fallRotX=0,h.fallSequence.fallRotZ=0,h.angle=0,h.angularVel=0,h.hookActive=!0,h.hookTimer=2,yn(h,t==="es"?"🪝 ¡RESCATE EN EL AIRE!":"🪝 MID-AIR HOOK RESCUE!","#4ade80",t==="es"?"DEVUELTO AL CABLE":"PULLED BACK TO CABLE");else h.fallSequence.mode==="gameover_fall"&&(h.fallSequence.fallVy-=28*Pe,h.fallSequence.fallY+=h.fallSequence.fallVy*Pe,h.fallSequence.fallRotX+=3.4*Pe,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*4.2*Pe,h.fallSequence.timer>=1.5&&(h.running=!1,et({coinsEarned:h.fallSequence.finalCoins,scoreEarned:h.fallSequence.finalScore,lpEarned:h.fallSequence.finalLp,gemsEarned:0,doubled:!1,revivedOnce:h.revivedOnce}),p(Dt=>Dt+h.fallSequence.finalCoins),A(Dt=>{const mt=Dt+h.fallSequence.finalLp;return lo(x||"Equilibrista",R,mt,o),mt}),M(Dt=>Math.max(Dt,h.fallSequence.finalScore)),q("gameover")));else{const Dt=Math.min(.45,(h.gear.pole||0)*.048),mt=((ht=h.poleObj)==null?void 0:ht.gravityReduction)||0,Jt=Math.max(.22,(1-Dt)*(1-mt)),Un=Math.min(.48,(h.gear.boots||0)*.052),kt=((be=h.skinObj)==null?void 0:be.windReduction)||0,zn=Math.max(.2,(1-Un)*(1-kt)),Vn=Math.max(.25,1-Math.min(.75,(((ot=h.poleObj)==null?void 0:ot.stepDamp)||0)+(((Ae=h.skinObj)==null?void 0:Ae.stepDampBonus)||0)));if(h.windTimer-=Pe,h.windTimer<=0){const Ut=Rt.gustInterval??1.8;h.windTimer=Ut*(.75+Math.random()*.45);const ln=Math.abs(h.windTarget)>.05&&Math.random()<.72?-Math.sign(h.windTarget):Math.random()<.5?-1:1,vr=(.45+Math.random()*.65)*Rt.windBase*ln;h.windTarget=vr*zn,((yt=Rt.city)==null?void 0:yt.weatherArchetype)==="cyber_rain"&&Math.abs(vr)>.7&&Math.random()<.45&&(h.lightningFlashAlpha=.85)}h.windForce+=(h.windTarget-h.windForce)*Pe*2.8,Nt.updateWind(h.windForce),h.hookActive&&(h.hookTimer-=Pe,h.hookTimer<=0&&(h.hookActive=!1));const Gn=h.walkCycle,tr=3.2*Rt.walkSpeed;h.walkCycle+=Pe*tr;const nr=Math.floor(Gn/Math.PI),Br=Math.floor(h.walkCycle/Math.PI);if(Br!==nr){const Ut=Br%2===0?1:-1,ln=(Rt.stepSwayImpulse??.04)*Vn;h.angularVel+=Ut*ln*(h.hookActive?.25:1),Nt.playFootstep(Rt.walkSpeed)}const ds=Math.sin(h.angle)*Rt.gravity*Jt*(h.hookActive?.25:1),ir=h.windForce*.78*(h.hookActive?.2:1),Rc=h.controlInput*3.15,Lo=Math.sin(Y*.0047)*.12*Rt.walkSpeed*Vn*(h.hookActive?.2:1);h.angularVel+=(ds+ir+Rc+Lo)*Pe,h.angularVel*=Math.pow(.88,Pe*60),h.angle+=h.angularVel*Pe,h.hookActive&&(h.angle*=Math.pow(.86,Pe*60)),h.nearMissCooldown>0&&(h.nearMissCooldown-=Pe);const kr=Math.abs(h.angle)/cs;if(kr>=.78&&kr<.98&&h.nearMissCooldown<=0&&h.angle*h.controlInput<0&&Math.abs(h.controlInput)>.1){h.nearMissCooldown=2.4;const Ut=Math.round(150*qe*(h.frenzyActive?2:1));h.score+=Ut,Nt.playNearMiss(),yn(h,t==="es"?`⚡ ¡SALVADA AL LÍMITE! +${Ut}`:`⚡ NEAR-MISS SAVE! +${Ut}`,"#38bdf8",t==="es"?"RECUPERACIÓN EXTREMA":"EXTREME RECOVERY")}const Cc=Math.max(.35,1-Math.abs(h.angle)/(cs*1.15)),Da=4.6*Rt.walkSpeed*(.72+Cc*.38);h.distance+=Da*Pe,h.score+=Da*Pe*12*qe*(h.frenzyActive?2:1);const fs={left:!1,right:!1},No=(((st=h.gear)==null?void 0:st.gloves)||0)*.015,Pc=((Ht=h.poleObj)==null?void 0:Ht.catchRadiusBonus)||0,hs=((ut=h.skinObj)==null?void 0:ut.catchWindowBonus)||0,ps=Math.max(.5,.74-Rt.catchWindow-No-(Pc+hs)*.35);for(const Ut of h.balls)if(Ut.progress+=Ut.speed*Pe,Ut.progress>=ps&&Ut.progress<=1.02?(fs[Ut.targetHand]=!0,Ut.waitingCatch=!0):Ut.waitingCatch=!1,Ut.progress>1.03){Ut.fromLeft=Ut.targetHand==="left",Ut.targetHand=Ut.fromLeft?"right":"left",Ut.progress=0,Ut.waitingCatch=!1,h.combo=0,h.frenzyActive=!1;const ln=.24+(Rt.speedPhase||0)*.04;h.angularVel+=Ut.targetHand==="left"?-ln:ln,Nt.playMissAlert(),yn(h,t==="es"?"⚠️ ¡ESFERA PERDIDA!":"⚠️ DROPPED ORB!","#ef4444")}for(let Ut=h.sparks.length-1;Ut>=0;Ut--){const ln=h.sparks[Ut];ln.ttl-=Pe,ln.ttl<=0?h.sparks.splice(Ut,1):(ln.x+=ln.vx*Pe,ln.y+=ln.vy*Pe,ln.vy-=5.5*Pe)}if(Math.abs(h.angle)>=cs)if(h.freeFallShieldsRemaining>0)h.freeFallShieldsRemaining-=1,h.angle*=.12,h.angularVel=0,h.hookActive=!0,h.hookTimer=2.2,Nt.playHookRescue(),yn(h,t==="es"?"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!":"🛡️ ANTI-FALL SHIELD ACTIVATED!","#fde047",t==="es"?"PROTECCIÓN PRO / VIP":"PRO / VIP PROTECTION");else if(h.hookAvailable)h.hookAvailable=!1,h.fallSequence.active=!0,h.fallSequence.mode="hook_rescue",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-3.8,h.fallSequence.fallRotX=.18,h.fallSequence.fallRotZ=h.angle*.8,h.fallSequence.ropeTopY=16,Nt.playFallScream(),setTimeout(()=>Nt.playHookRescue(),460),yn(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80");else{const Ut=Math.floor(h.score),ln=Math.max(15,Math.floor((h.distance*1.4+h.maxCombo*6)*Lt)),vr=Math.max(10,Math.floor((h.distance*.8+h.maxCombo*4)*ye*$e));h.fallSequence.active=!0,h.fallSequence.mode="gameover_fall",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-4.5,h.fallSequence.fallRotX=.25,h.fallSequence.fallRotZ=h.angle,h.fallSequence.finalCoins=ln,h.fallSequence.finalScore=Ut,h.fallSequence.finalLp=vr,Nt.updateWind(0),Nt.playFallScream()}else if(h.distance>=h.targetDistance){h.running=!1,Nt.updateWind(0),Nt.playVictory();const Ut=Math.floor(h.score+500*qe),ln=Math.floor((125+o*26+h.maxCombo*12)*Lt),vr=Math.floor((95+o*16+h.maxCombo*9)*ye*$e),Io=(Je?Je.gemBonus:0)+(o%5===0?12:4);et({coinsEarned:ln,scoreEarned:Ut,lpEarned:vr,gemsEarned:Io,doubled:!1,revivedOnce:h.revivedOnce}),p(hi=>hi+ln),y(hi=>hi+Io),A(hi=>{const ms=hi+vr;return lo(x||"Equilibrista",R,ms,o+1),ms}),M(hi=>Math.max(hi,Ut)),f(hi=>Math.max(hi,Math.min(19,Math.floor(o/5)))),q("victory");return}h.hudSyncTimer+=Pe,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Oe({progress:Math.min(100,Math.floor(h.distance/h.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(h.targetDistance-h.distance)),totalMeters:h.targetDistance,score:Math.floor(h.score),combo:h.combo,frenzyActive:h.frenzyActive,tiltRatio:Math.max(-1,Math.min(1,h.angle/cs)),windForce:h.windForce,juggleAlertHands:fs,hookAvailable:h.hookAvailable,hookActive:h.hookActive,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))}h.fallSequence.active&&(h.hudSyncTimer+=Pe,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Oe(Dt=>({...Dt,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))))}else h.walkCycle+=Pe*1.4;bn.current&&W1(bn.current,h,Y*.001),Jn.current=requestAnimationFrame(D)};return Jn.current=requestAnimationFrame(D),()=>{Jn.current&&cancelAnimationFrame(Jn.current)}},[Et,G,Fe,xe,De,pt,qe,Lt,ye,$e,Je,o,t,x,R,on,yn]);function Dn(h,D,Y){return h+(D-h)*Math.max(0,Math.min(1,Y))}ct.useEffect(()=>{if(!Qt)return;T(2);const h=setInterval(()=>{T(D=>D<=1?(clearInterval(h),0):D-1)},1e3);return()=>clearInterval(h)},[Qt]);const Ji=()=>{const h=Qt;if(bt(null),h==="revive"){const D=$t.current;D.revivedOnce=!0,D.hookAvailable=!0,Ui(!0),q("playing"),Xe(t==="es"?"⚡ ¡Segunda oportunidad activada!":"⚡ Second chance activated!")}else h==="double"?Me.doubled||(p(D=>D+Me.coinsEarned),A(D=>{const Y=D+Me.lpEarned;return lo(x||"Equilibrista",R,Y,o),Y}),et(D=>({...D,coinsEarned:D.coinsEarned*2,lpEarned:D.lpEarned*2,doubled:!0})),Xe(t==="es"?"🎬 ¡Recompensas Duplicadas x2!":"🎬 Rewards Doubled x2!")):h==="gems"?(y(D=>D+35),Xe(t==="es"?"💎 +35 Gemas Gratis acreditadas":"💎 +35 Free Gems credited")):h==="coins"&&(p(D=>D+1500),Xe(t==="es"?"🪙 +1.500 Monedas Gratis acreditadas":"🪙 +1,500 Free Coins credited"))},gr=()=>{const h=o+1;l(h),f(D=>Math.max(D,Math.min(19,Math.floor((h-1)/5)))),setTimeout(()=>{const D=$t.current,Y=ud(h,Je);D.cfg=Y,D.targetDistance=Y.totalDistance,D.distance=0,D.score=0,D.combo=0,D.maxCombo=0,D.frenzyActive=!1,D.angle=0,D.angularVel=0,D.hookAvailable=!0,D.hookActive=!1,D.revivedOnce=!1;const Pe=xe.autoSaveFall?1:0,ht=Fe.freeShields||0;D.freeFallShieldsRemaining=Pe+ht,D.fallSequence.active=!1,D.fallSequence.mode=null,D.balls=on(Y,De.color),D.lastTimestamp=performance.now(),D.running=!0,q("playing")},30)},Fr=h=>{const D=pt[h.id]||0,Y=Cm(D);if(!Y.isMax)if(Y.isProTier){if(W){qt(Pe=>({...Pe,[h.id]:D+1})),Nt.playVictory(),Xe(`👑 ${h.name[t]} Élite Nv.${D+1}/10 (Pase VIP)!`);return}S>=Y.gemCost?(y(Pe=>Pe-Y.gemCost),qt(Pe=>({...Pe,[h.id]:D+1})),Nt.playVictory(),Xe(`👑 ${h.name[t]} Élite Nv.${D+1}/10!`)):(xt("store"),Xe(t==="es"?`👑 Nivel Élite (6-10): Requiere ${Y.gemCost} Gemas o Pase VIP Pro`:`👑 Elite Tier (6-10): Requires ${Y.gemCost} Gems or VIP Pro Pass`))}else{if(m<Y.coinCost){Xe(t==="es"?`🪙 Necesitás ${Y.coinCost.toLocaleString()} Monedas`:`🪙 Need ${Y.coinCost.toLocaleString()} Coins`);return}p(Pe=>Pe-Y.coinCost),qt(Pe=>({...Pe,[h.id]:D+1})),Nt.playCatch(D+2,!1),Xe(`${h.icon} ${h.name[t]} Nv.${D+1}/10!`)}},Zt=h=>{if(Q.includes(h.id)||h.isVipOnly&&W){Q.includes(h.id)||ee(D=>[...D,h.id]),O(h.id),Nt.playCatch(4,!1),Xe(`${h.icon} ${h.name[t]} ${Se.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(D=>D-h.cost),ee(D=>[...D,h.id]),O(h.id),Nt.playVictory(),Xe(`${h.icon} ${h.name[t]}!`)):Xe(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(D=>D-h.gemCost),ee(D=>[...D,h.id]),O(h.id),Nt.playVictory(),Xe(`👑 ${h.name[t]} Desbloqueada!`)):(xt("store"),Xe(t==="es"?`👑 Vara Exclusiva (${h.usdPrice||`${h.gemCost} 💎`}): Visitá la Tienda VIP`:`👑 Exclusive Pole (${h.usdPrice||`${h.gemCost} 💎`}): Visit VIP Store`))},Qi=h=>{if($.includes(h.id)||h.isVipOnly&&W){$.includes(h.id)||ne(D=>[...D,h.id]),oe(h.id),Nt.playCatch(3,!1),Xe(`${h.icon} ${h.name[t]} ${Se.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(D=>D-h.cost),ne(D=>[...D,h.id]),oe(h.id),Nt.playVictory(),Xe(`${h.icon} ${h.name[t]}!`)):Xe(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(D=>D-h.gemCost),ne(D=>[...D,h.id]),oe(h.id),Nt.playVictory(),Xe(`👑 ${h.name[t]} Desbloqueado!`)):(xt("store"),Xe(t==="es"?`👑 Aspecto Pro (${h.usdPrice||`${h.gemCost} 💎`}): Disponible en Tienda VIP`:`👑 Pro Skin (${h.usdPrice||`${h.gemCost} 💎`}): Available in VIP Store`))},er=h=>{if(le.includes(h.id)){Xe(t==="es"?"✅ Multiplicador ya activo":"✅ Multiplier already active");return}if(h.isVipOnly&&W){Ee(D=>[...D,h.id]),Nt.playVictory(),Xe(`👑 ${h.name[t]} Activado!`);return}h.currency==="coins"?m>=h.cost?(p(D=>D-h.cost),Ee(D=>[...D,h.id]),Nt.playVictory(),Xe(`🚀 ${h.name[t]} Activado!`)):Xe(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.gemCost?(y(D=>D-h.gemCost),Ee(D=>[...D,h.id]),Nt.playVictory(),Xe(`👑 ${h.name[t]} Activado!`)):(xt("store"),Xe(t==="es"?`👑 Multiplicador Pro (${h.usdPrice}): Requiere ${h.gemCost} 💎 o Pase VIP`:`👑 Pro Multiplier (${h.usdPrice}): Requires ${h.gemCost} 💎 or VIP Pass`))},Bi=h=>{if(pe.includes(h.id)){Ge(h.id),Xe(`${h.icon} ${h.name[t]} ${Se.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(D=>D-h.cost),Ie(D=>[...D,h.id]),Ge(h.id),Nt.playVictory(),Xe(`${h.icon} ${h.name[t]}!`)):Xe(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):S>=h.cost?(y(D=>D-h.cost),Ie(D=>[...D,h.id]),Ge(h.id),Nt.playVictory(),Xe(`${h.icon} ${h.name[t]}!`)):(xt("store"),Xe(t==="es"?"💎 Gemas insuficientes":"💎 Not enough gems"))},P=h=>{const D=Math.max(u,Math.min(19,Math.floor((o-1)/5)));if(h>D)return;const Y=h*5+1;de(null),l(Y),we(!1),Xe(t==="es"?`✈️ Viajaste a ${Lr[h].flag} ${Lr[h].name.es} (Nivel ${Y})`:`✈️ Traveled to ${Lr[h].flag} ${Lr[h].name.en} (Level ${Y})`)},j=h=>{if(W||Ze.includes(h.id)){de(h.id),we(!1),Nt.playVictory(),Xe(t==="es"?`👑 Ciudad VIP Activa: ${h.flag} ${h.name.es} (x${h.rewardMult} Recompensas)`:`👑 VIP City Active: ${h.flag} ${h.name.en} (x${h.rewardMult} Rewards)`);return}S>=h.gemUnlockCost?(y(Y=>Y-h.gemUnlockCost),Ke(Y=>[...Y,h.id]),de(h.id),we(!1),Nt.playVictory(),Xe(`👑 ${h.flag} ${h.name[t]} Desbloqueada!`)):(we(!1),xt("store"),Xe(t==="es"?`🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${h.gemUnlockCost} 💎`:`🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${h.gemUnlockCost} 💎`))},me=h=>{y(D=>D+h.gems),p(D=>D+h.coins),h.isVipPassBundle&&(se(!0),ee(D=>Array.from(new Set([...D,"pole_imperial","pole_quantum"]))),O("pole_imperial"),ne(D=>Array.from(new Set([...D,"skin_5","skin_4"]))),oe("skin_5"),Ee(D=>Array.from(new Set([...D,"mult_x3_pro"]))),Ke(cd.map(D=>D.id))),A(D=>{const Y=D+(h.leaguePts||200);return lo(x||"Equilibrista",R,Y,o),Y}),Nt.playVictory(),Xe(h.isVipPassBundle?t==="es"?"👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas":"👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked":`👑 ${h.name[t]} (+${h.gems} 💎 / +${h.coins.toLocaleString()} 🪙)`)},ce=h=>{ft.includes(h.id)||E<h.requiredLp||(At(D=>[...D,h.id]),y(D=>D+h.gemsReward),p(D=>D+h.coinsReward),Nt.playVictory(),Xe(`🏆 +${h.gemsReward} 💎 & +${h.coinsReward} 🪙!`))},re=ke.length>0?ke:[{id:"player_self",name:x||"Equilibrista",country:R,flag:Aa(R),score:E,lp:E,level:o,isPlayer:!0}],He=re.findIndex(h=>h.isPlayer),Ve=He>=0?He+1:1,We=Math.abs(Ce.windForce)<.08?"•":Ce.windForce>0?">>>":"<<<",nt=Math.max(u,Math.min(19,Math.floor((o-1)/5))),it=Aa(R);return U.jsx("div",{className:"app-root",children:U.jsxs("div",{className:"phone-frame",children:[U.jsx("div",{ref:wi,className:"game-canvas",style:{width:"100%",height:"100%",position:"absolute",inset:0}}),K&&U.jsx("div",{className:"toast-banner",children:K}),b&&U.jsx("div",{className:"modal-backdrop onboarding-backdrop",style:{zIndex:250},children:U.jsxs("form",{className:"modal-card onboarding-modal-card",onSubmit:In,children:[U.jsx("div",{className:"onboarding-crown-badge",children:t==="es"?"🏆 LIGA MUNDIAL EN VIVO":"🏆 LIVE WORLD LEAGUE"}),U.jsx("h2",{className:"modal-title onboarding-title",children:t==="es"?"⚡ CREÁ TU PERFIL DE EQUILIBRISTA":"⚡ CREATE YOUR TIGHTROPE PROFILE"}),U.jsx("p",{className:"modal-subtitle onboarding-subtitle",children:t==="es"?"Elegí tu nombre y país para competir en el Ranking Mundial en vivo.":"Choose your name and country to compete on the Live World Leaderboard."}),U.jsxs("div",{className:"onboarding-field-group",children:[U.jsx("label",{className:"onboarding-label",htmlFor:"onboarding-name-input",children:t==="es"?"1. TU NOMBRE O APODO (3 A 15 CARACTERES)":"1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)"}),U.jsx("input",{id:"onboarding-name-input",type:"text",maxLength:15,autoFocus:!0,className:`onboarding-input ${z?"input-error-shake":""}`,placeholder:t==="es"?"Tu Nombre o Apodo (Ej: Maury_AR)":"Your Nickname (e.g. Maury_AR)",value:N,onChange:h=>{B(h.target.value),z&&H(!1)}}),z&&U.jsx("div",{className:"onboarding-error-msg",children:t==="es"?"⚠️ Ingresá un nombre válido de al menos 3 caracteres.":"⚠️ Please enter a valid name of at least 3 characters."})]}),U.jsxs("div",{className:"onboarding-field-group",children:[U.jsx("label",{className:"onboarding-label",children:t==="es"?"2. SELECCIONÁ TU PAÍS / BANDERA":"2. SELECT YOUR COUNTRY / FLAG"}),U.jsx("div",{className:"onboarding-country-grid",children:m_.map(h=>{const D=w===h.code;return U.jsxs("button",{type:"button",className:`onboarding-country-chip ${D?"selected":""}`,onClick:()=>L(h.code),children:[U.jsx("span",{className:"country-chip-flag",children:h.flag}),U.jsx("span",{className:"country-chip-code",children:h.code}),U.jsx("span",{className:"country-chip-name",children:h.name})]},h.code)})})]}),U.jsx("button",{type:"submit",className:"onboarding-submit-btn",children:t==="es"?"🚀 GUARDAR Y ENTRAR A COMPETIR":"🚀 SAVE & START COMPETING"})]})}),_e&&U.jsx("div",{className:"modal-backdrop",style:{zIndex:120},children:U.jsxs("div",{className:"modal-card",style:{maxHeight:"86%",display:"flex",flexDirection:"column",padding:"16px 14px"},children:[U.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[U.jsx("h2",{className:"modal-title",style:{fontSize:16,margin:0},children:t==="es"?"🌍 CIUDADES Y MONUMENTOS 3D":"🌍 CITIES & 3D LANDMARKS"}),U.jsx("button",{className:"hud-pause-btn",onClick:()=>we(!1),style:{width:30,height:30,fontSize:13},children:"✕"})]}),U.jsxs("div",{className:"items-scroll-list",style:{flex:1,overflowY:"auto",paddingRight:4},children:[U.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#fde047",letterSpacing:.8,marginBottom:6,marginTop:2},children:Se.vipCitiesTitle}),cd.map(h=>{const D=W||Ze.includes(h.id),Y=je===h.id;return U.jsxs("div",{className:"item-card vip-city-card",style:{cursor:"pointer",borderColor:Y?"rgba(253, 224, 71, 0.95)":"rgba(250, 204, 21, 0.45)"},onClick:()=>j(h),children:[U.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:D?h.flag:"🔒"}),U.jsxs("div",{className:"item-info",children:[U.jsxs("div",{className:"item-title",style:{color:"#fde047"},children:["👑 ",h.name[t]]}),U.jsxs("div",{className:"benefit-pill-tag pro",children:["x",h.rewardMult," 🪙/LP • +",h.gemBonus," 💎 POR CRUCE"]}),U.jsx("div",{className:"item-desc",children:h.desc[t]})]}),U.jsx("button",{className:`item-action-btn ${Y?"equipped":"buy-gems"}`,children:Y?t==="es"?"ACTIVA":"ACTIVE":D?t==="es"?"VIAJAR":"TRAVEL":`👑 ${h.gemUnlockCost} 💎`})]},h.id)}),U.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#38bdf8",letterSpacing:.8,margin:"12px 0 6px"},children:t==="es"?"🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)":"🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)"}),Lr.map((h,D)=>{var ot,Ae,yt,st;const Y=D<=nt,Pe=!je&&G.cityIndex===D,ht=D*5+1,be=D*5+5;return U.jsxs("div",{className:`item-card ${Pe?"selected":""}`,style:{opacity:Y?1:.52,cursor:Y?"pointer":"not-allowed"},onClick:()=>Y&&P(D),children:[U.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:Y?h.flag:"🔒"}),U.jsxs("div",{className:"item-info",children:[U.jsxs("div",{className:"item-title",children:[D+1,". ",h.name[t]]}),U.jsxs("div",{className:"benefit-pill-tag",children:["🗿 ",((ot=h.monumentName)==null?void 0:ot[t])||((Ae=h.weatherLabel)==null?void 0:Ae[t])]}),U.jsx("div",{className:"item-desc",children:t==="es"?`Niveles ${ht} al ${be} • ${(yt=h.weatherLabel)==null?void 0:yt.es}`:`Levels ${ht} to ${be} • ${(st=h.weatherLabel)==null?void 0:st.en}`})]}),U.jsx("button",{className:`item-action-btn ${Pe?"equipped":Y?"buy-coins":"locked"}`,disabled:!Y,children:Pe?t==="es"?"ACTUAL":"ACTIVE":Y?t==="es"?`NV. ${ht}`:`LVL ${ht}`:`🔒 NV.${ht}`})]},h.index)})]})]})}),Et==="playing"&&U.jsxs("div",{className:"gameplay-hud-layer",children:[Ce.lightningFlashAlpha>.05&&U.jsx("div",{className:"weather-lightning-flash",style:{opacity:Ce.lightningFlashAlpha}}),U.jsxs("div",{className:"vector-hud-top",children:[U.jsxs("div",{className:"vector-top-row",children:[U.jsxs("div",{className:"vector-city-tag",children:[U.jsxs("span",{children:[G.city.flag," ",G.city.name[t].toUpperCase()," •"," ",Je?"👑 VIP":`${Se.level} ${o}`]}),U.jsxs("span",{className:"vector-meters-left",children:[Ce.metersRemaining,"m / ",Ce.totalMeters,"m"]})]}),U.jsx("button",{className:"hud-pause-btn",onClick:Fi,"aria-label":"Pause",children:"⏸"})]}),U.jsx("div",{className:"vector-progress-rail",children:U.jsx("div",{className:"vector-progress-fill",style:{width:`${Ce.progress}%`}})}),U.jsxs("div",{className:"vector-Horizon-pill-row",children:[U.jsxs("div",{className:`vector-horizon-pill ${Math.abs(Ce.tiltRatio)>.65?"danger":""}`,children:[U.jsx("div",{className:"vector-horizon-center-tick"}),U.jsx("div",{className:"vector-horizon-dot",style:{left:`${50+Math.max(-46,Math.min(46,Ce.tiltRatio*46))}%`}})]}),U.jsxs("div",{className:"vector-wind-badge",children:["🌬️ ",We," ",Math.abs(Ce.windForce*18).toFixed(0)," km/h"]}),U.jsxs("div",{className:`vector-score-badge ${Ce.frenzyActive?"frenzy-glow":""}`,children:[Ce.score.toLocaleString()," pts",Ce.combo>1?` • x${Ce.combo}`:"",Ce.frenzyActive?" 🔥":""]})]})]}),Ce.floatingPopups&&Ce.floatingPopups.length>0&&U.jsx("div",{className:"floating-popups-layer",children:Ce.floatingPopups.map(h=>U.jsxs("div",{className:"floating-feedback-popup",style:{color:h.color,borderColor:h.color},children:[U.jsx("div",{className:"floating-popup-main",children:h.text}),h.subtext&&U.jsx("div",{className:"floating-popup-sub",children:h.subtext})]},h.id))}),U.jsxs("div",{className:"vector-controls-layer",children:[U.jsxs("div",{className:"vector-touch-zones",children:[U.jsx("button",{className:"vector-touch-half left",onPointerDown:()=>{$t.current.controlInput=-1},onPointerUp:()=>{$t.current.controlInput<0&&($t.current.controlInput=0)},onPointerLeave:()=>{$t.current.controlInput<0&&($t.current.controlInput=0)},children:U.jsxs("span",{className:"vector-corner-hint",children:["◀ ",Se.leanLeft]})}),U.jsx("button",{className:"vector-touch-half right",onPointerDown:()=>{$t.current.controlInput=1},onPointerUp:()=>{$t.current.controlInput>0&&($t.current.controlInput=0)},onPointerLeave:()=>{$t.current.controlInput>0&&($t.current.controlInput=0)},children:U.jsxs("span",{className:"vector-corner-hint",children:[Se.leanRight," ▶"]})})]}),U.jsxs("div",{className:"vector-juggle-overlay-row",children:[U.jsxs("button",{className:`vector-catch-pill ${Ce.juggleAlertHands.left?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),kn("left")},children:["✋ ",Se.leftHand]}),Ce.hookAvailable&&U.jsx("button",{className:"vector-hook-pill",onPointerDown:h=>{h.stopPropagation(),Ti()},children:"🪝"}),U.jsxs("button",{className:`vector-catch-pill ${Ce.juggleAlertHands.right?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),kn("right")},children:[Se.rightHand," ✋"]})]})]})]}),Et==="menu"&&U.jsxs("div",{className:"menu-overlay-layer",children:[U.jsxs("div",{className:"currency-top-bar",children:[U.jsxs("div",{className:"currency-group",children:[U.jsxs("div",{className:"currency-pill coins",onClick:()=>bt("coins"),title:Se.freeCoinsAd,children:["🪙 ",m.toLocaleString()," ",U.jsx("span",{className:"plus-badge",children:"+"})]}),U.jsxs("div",{className:"currency-pill gems",onClick:()=>bt("gems"),title:Se.freeGemsAd,children:["💎 ",S.toLocaleString()," ",U.jsx("span",{className:"plus-badge",children:"+"})]}),U.jsxs("div",{className:"currency-pill lp",onClick:()=>xt("league"),children:["🏆 #",Ve]})]}),U.jsxs("div",{className:"utility-group",children:[U.jsxs("button",{className:"profile-header-badge",onClick:Ei,title:t==="es"?"Editar Perfil":"Edit Profile",children:[U.jsx("span",{children:it}),U.jsx("span",{className:"profile-header-name",children:x||"Equilibrista"}),U.jsx("span",{className:"profile-header-edit",children:"✏️"})]}),U.jsx("button",{className:"icon-btn",onClick:()=>Mt(h=>!h),title:"Sound",children:Pt?"🔊":"🔇"})]})]}),U.jsxs("div",{className:"tab-content-area",children:[_t==="home"&&U.jsxs("div",{className:"home-card",children:[U.jsx("div",{className:"brand-header",children:U.jsxs("div",{className:"cover-hero-banner",children:[U.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO Portada Oficial",className:"cover-hero-img"}),U.jsxs("div",{className:"cover-hero-overlay",children:[U.jsx("span",{className:"official-badge",children:W?"👑 PASE VIP PRO ACTIVO":Se.officialEdition}),U.jsx("h1",{className:"game-logo-title",children:Se.title}),U.jsxs("p",{className:"game-logo-sub",children:["🗿 ",((St=G.city.monumentName)==null?void 0:St[t])||Se.subtitle]})]})]})}),U.jsxs("div",{className:"city-campaign-card",onClick:()=>we(!0),style:{cursor:"pointer"},children:[U.jsx("div",{className:"city-flag-circle",children:G.city.flag}),U.jsxs("div",{className:"city-details",children:[U.jsxs("div",{className:"city-stage-tag",children:[Je?`👑 CIUDAD VIP (x${Je.rewardMult} PAGO)`:`${Se.worldTour} • ${Se.city} ${G.cityIndex+1}/20`," ",U.jsx("span",{style:{color:"#fde047",marginLeft:6,textDecoration:"underline",fontSize:"10px"},children:t==="es"?"(Cambiar 🌍)":"(Change 🌍)"})]}),U.jsx("div",{className:"city-title-text",children:G.city.name[t]}),U.jsxs("div",{className:"city-level-sub",children:[Se.level," ",o," • ",xe.icon," ",xe.name[t]]})]}),U.jsxs("div",{className:"multiplier-chip",children:["x",qe]})]}),U.jsxs("div",{className:"quick-stats-grid",children:[U.jsxs("div",{className:"stat-box",children:[U.jsx("span",{className:"stat-lbl",children:Se.bestScore}),U.jsx("span",{className:"stat-val",children:_.toLocaleString()})]}),U.jsxs("div",{className:"stat-box",children:[U.jsx("span",{className:"stat-lbl",children:t==="es"?"MULTI MONEDAS":"COIN MULTI"}),U.jsxs("span",{className:"stat-val gold",children:["x",Lt," 🪙"]})]})]}),U.jsxs("button",{className:"play-cta-button",onClick:Oi,children:[U.jsx("span",{className:"play-icon",children:"▶"})," ",Se.playNow," (",Se.level," ",o,")"]}),U.jsxs("div",{className:"reward-ads-row",children:[U.jsxs("button",{className:"ad-reward-btn coins",onClick:()=>bt("coins"),children:["🎬 ",Se.freeCoinsAd]}),U.jsxs("button",{className:"ad-reward-btn gems",onClick:()=>bt("gems"),children:["🎬 ",Se.freeGemsAd]})]})]}),_t==="armory"&&U.jsxs("div",{className:"panel-card",children:[U.jsxs("h2",{className:"panel-heading",children:["⚙️ ",Se.armoryTitle]}),U.jsxs("div",{className:"section-sub-tabs",children:[U.jsx("button",{className:`sub-tab-btn ${It==="upgrades"?"active":""}`,onClick:()=>Gt("upgrades"),children:t==="es"?"⚙️ MEJORAS (1-10)":"⚙️ UPGRADES (1-10)"}),U.jsx("button",{className:`sub-tab-btn ${It==="poles"?"active":""}`,onClick:()=>Gt("poles"),children:t==="es"?"⚖️ VARAS 3D (5)":"⚖️ 3D POLES (5)"}),U.jsx("button",{className:`sub-tab-btn ${It==="multipliers"?"active":""}`,onClick:()=>Gt("multipliers"),children:t==="es"?"🚀 MULTIPLICADORES":"🚀 MULTIPLIERS"})]}),U.jsxs("div",{className:"items-scroll-list",children:[It==="upgrades"&&U.jsxs(U.Fragment,{children:[c_.map(h=>{const D=pt[h.id]||0,Y=Cm(D);return U.jsxs("div",{className:"item-card",children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsxs("div",{className:"item-title",children:[h.name[t]," ",U.jsxs("span",{className:"lvl-pill",children:["Nv. ",D,"/10"]})]}),U.jsx("div",{className:`benefit-pill-tag ${Y.isProTier?"pro":""}`,children:Y.isProTier?t==="es"?"👑 TRAMO ÉLITE PRO (NV. 6 A 10)":"👑 PRO ELITE TIER (LVL 6 TO 10)":h.statLabel[t]}),U.jsx("div",{className:"item-desc",children:h.desc[t]}),U.jsx("div",{className:"armory-level-bar",children:Array.from({length:10}).map((Pe,ht)=>U.jsx("span",{className:`armory-pip ${ht>=5?"pro-pip":""} ${ht<D?"filled":""}`},ht))})]}),U.jsx("button",{className:`item-action-btn ${Y.isMax?"equipped":Y.isProTier?"buy-gems":"buy-coins"}`,disabled:Y.isMax,onClick:()=>Fr(h),children:Y.isMax?Se.maxLevel:Y.isProTier?W?"👑 VIP GRATIS":`👑 PRO ${Y.gemCost} 💎`:`🪙 ${Y.coinCost.toLocaleString()}`})]},h.id)}),U.jsxs("h3",{className:"sub-section-title",children:["🎪 ",Se.propsTitle]}),yo.map(h=>{const D=pe.includes(h.id),Y=Qe===h.id;return U.jsxs("div",{className:`item-card ${Y?"selected":""}`,children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsx("div",{className:"item-title",children:h.name[t]}),U.jsxs("div",{className:"item-desc",children:["Multiplicador Base x",h.mult]})]}),U.jsx("button",{className:`item-action-btn ${Y?"equipped":D?"equip":h.currency==="gems"?"buy-gems":"buy-coins"}`,onClick:()=>Bi(h),children:Y?Se.equipped:D?Se.equip:h.currency==="gems"?`💎 ${h.cost}`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]}),It==="poles"&&Ll.map(h=>{const D=Q.includes(h.id)||h.isVipOnly&&W,Y=J===h.id;return U.jsxs("div",{className:`item-card ${Y?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsx("div",{className:"item-title",children:h.name[t]}),U.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),U.jsx("div",{className:"item-desc",children:h.desc[t]})]}),U.jsx("button",{className:`item-action-btn ${Y?"equipped":D?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Zt(h),children:Y?Se.equipped:D?Se.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),It==="multipliers"&&Nl.map(h=>{const D=le.includes(h.id)||h.isVipOnly&&W;return U.jsxs("div",{className:`item-card ${D?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsx("div",{className:"item-title",children:h.name[t]}),U.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),U.jsx("div",{className:"item-desc",children:h.desc[t]})]}),U.jsx("button",{className:`item-action-btn ${D?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>er(h),children:D?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),_t==="skins"&&U.jsxs("div",{className:"panel-card",children:[U.jsxs("h2",{className:"panel-heading",children:["🎭 ",Se.skinsTitle]}),U.jsx("p",{className:"panel-sub",children:Se.skinsSubtitle}),U.jsxs("div",{className:"items-scroll-list",children:[So.map(h=>{const D=$.includes(h.id)||h.isVipOnly&&W,Y=ge===h.id;return U.jsxs("div",{className:`item-card ${Y?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[U.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`},children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsx("div",{className:"item-title",children:h.name[t]}),U.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),U.jsx("div",{className:"item-desc",children:h.desc[t]})]}),U.jsx("button",{className:`item-action-btn ${Y?"equipped":D?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Qi(h),children:Y?Se.equipped:D?Se.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),U.jsx("h3",{className:"sub-section-title",children:Se.polesTitle}),Ll.map(h=>{const D=Q.includes(h.id)||h.isVipOnly&&W,Y=J===h.id;return U.jsxs("div",{className:`item-card ${Y?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsx("div",{className:"item-title",children:h.name[t]}),U.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),U.jsx("div",{className:"item-desc",children:h.desc[t]})]}),U.jsx("button",{className:`item-action-btn ${Y?"equipped":D?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Zt(h),children:Y?Se.equipped:D?Se.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),_t==="league"&&U.jsxs("div",{className:"panel-card",children:[U.jsxs("div",{className:"league-banner-top",children:[U.jsxs("div",{children:[U.jsxs("div",{className:"season-chip",children:[Se.seasonTitle," ",U.jsxs("span",{style:{color:"#4ade80",marginLeft:6},children:["● ",ae==="syncing"?"SYNC...":"ONLINE LIVE"]})]}),U.jsx("h2",{className:"panel-heading",children:Se.leagueTitle})]}),U.jsxs("div",{className:"rank-badge-large",children:["#",Ve]})]}),U.jsxs("div",{className:"player-name-bar",children:[U.jsxs("div",{className:"profile-active-summary",children:[U.jsx("span",{className:"profile-flag-big",children:it}),U.jsxs("div",{className:"profile-text-col",children:[U.jsx("span",{className:"profile-label-mini",children:t==="es"?"COMPETIDOR OFICIAL":"OFFICIAL COMPETITOR"}),U.jsx("span",{className:"profile-name-strong",children:x||"Equilibrista"})]})]}),U.jsxs("button",{type:"button",className:"edit-profile-pill-btn",onClick:Ei,children:["✏️ ",t==="es"?"Editar Perfil":"Edit Profile"]})]}),U.jsxs("div",{className:"items-scroll-list",children:[U.jsx("div",{className:"leaderboard-box",children:re.map((h,D)=>U.jsxs("div",{className:`leader-row ${h.isPlayer?"is-player":""}`,children:[U.jsx("span",{className:"leader-pos",children:D===0?"🥇":D===1?"🥈":D===2?"🥉":`#${D+1}`}),U.jsx("span",{className:"leader-flag",children:h.flag}),U.jsxs("span",{className:"leader-name",children:[h.name,h.isPlayer?t==="es"?" (TÚ)":" (YOU)":""]}),U.jsxs("span",{className:"leader-lp",children:[(h.lp??h.score??0).toLocaleString()," LP"]})]},h.id))}),U.jsxs("h3",{className:"sub-section-title",children:["🎁 ",Se.seasonPrizes]}),d_.map(h=>{const D=ft.includes(h.id),Y=!D&&E>=h.requiredLp;return U.jsxs("div",{className:"item-card",children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsxs("div",{className:"item-title",children:[h.rankLabel," • ",h.title[t]]}),U.jsxs("div",{className:"item-desc",children:[h.requiredLp.toLocaleString()," LP → +",h.gemsReward," ","💎 & +",h.coinsReward.toLocaleString()," 🪙"]})]}),U.jsx("button",{className:`item-action-btn ${D?"equipped":Y?"buy-coins":"locked"}`,disabled:!Y,onClick:()=>ce(h),children:D?Se.claimed:Y?Se.claim:`${h.requiredLp} LP`})]},h.id)})]})]}),_t==="store"&&U.jsxs("div",{className:"panel-card",children:[U.jsxs("h2",{className:"panel-heading",children:["💎 ",Se.storeTitle]}),U.jsx("p",{className:"panel-sub",children:Se.storeSubtitle}),U.jsxs("div",{className:"items-scroll-list",children:[f_.map(h=>U.jsxs("div",{className:"vip-bundle-card",children:[U.jsxs("div",{className:"vip-bundle-header",children:[U.jsx("span",{className:"vip-icon",children:h.icon}),U.jsxs("div",{children:[U.jsx("div",{className:"vip-title",children:h.name[t]}),U.jsxs("div",{className:"vip-rewards-inline",children:["+",h.gems," 💎 • +",h.coins.toLocaleString()," 🪙"]})]}),U.jsx("button",{className:"vip-buy-btn",onClick:()=>me(h),children:h.isVipPassBundle&&W?"👑 VIP ACTIVO (+BONO)":h.tag})]}),U.jsx("ul",{className:"vip-perk-list",children:h.perks[t].map((D,Y)=>U.jsxs("li",{children:["✓ ",D]},Y))})]},h.id)),U.jsx("h3",{className:"sub-section-title",children:Se.multipliersTitle}),Nl.map(h=>{const D=le.includes(h.id)||h.isVipOnly&&W;return U.jsxs("div",{className:`item-card ${D?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[U.jsx("div",{className:"item-icon-box",children:h.icon}),U.jsxs("div",{className:"item-info",children:[U.jsx("div",{className:"item-title",children:h.name[t]}),U.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),U.jsx("div",{className:"item-desc",children:h.desc[t]})]}),U.jsx("button",{className:`item-action-btn ${D?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>er(h),children:D?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]})]}),U.jsxs("nav",{className:"bottom-tab-nav",children:[U.jsxs("button",{className:`nav-tab-btn ${_t==="home"?"active":""}`,onClick:()=>xt("home"),children:[U.jsx("span",{className:"nav-ic",children:"🏙️"}),U.jsx("span",{children:Se.tabs.home})]}),U.jsxs("button",{className:`nav-tab-btn ${_t==="armory"?"active":""}`,onClick:()=>xt("armory"),children:[U.jsx("span",{className:"nav-ic",children:"⚖️"}),U.jsx("span",{children:Se.tabs.armory})]}),U.jsxs("button",{className:`nav-tab-btn ${_t==="skins"?"active":""}`,onClick:()=>xt("skins"),children:[U.jsx("span",{className:"nav-ic",children:"🎭"}),U.jsx("span",{children:Se.tabs.skins})]}),U.jsxs("button",{className:`nav-tab-btn ${_t==="league"?"active":""}`,onClick:()=>xt("league"),children:[U.jsx("span",{className:"nav-ic",children:"🏆"}),U.jsx("span",{children:Se.tabs.league})]}),U.jsxs("button",{className:`nav-tab-btn ${_t==="store"?"active":""}`,onClick:()=>xt("store"),children:[U.jsx("span",{className:"nav-ic",children:"💎"}),U.jsx("span",{children:Se.tabs.store})]})]})]}),Et==="paused"&&U.jsx("div",{className:"modal-backdrop",children:U.jsxs("div",{className:"modal-card",children:[U.jsxs("h2",{className:"modal-title",children:["⏸ ",Se.pause]}),U.jsxs("p",{className:"modal-subtitle",children:[G.city.flag," ",G.city.name[t]," — ",Se.level," ",o]}),U.jsxs("button",{className:"pause-action-btn primary",onClick:Fi,children:["▶ ",Se.resume]}),U.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>{$t.current.running=!1,Nt.updateWind(0),q("menu")},children:["🏠 ",Se.backToMenu]})]})}),Et==="victory"&&U.jsx("div",{className:"modal-backdrop",children:U.jsxs("div",{className:"modal-card victory",children:[U.jsx("div",{className:"modal-Cover-icon-wrap",children:U.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),U.jsx("h2",{className:"modal-title",children:Se.victoryTitle}),U.jsxs("p",{className:"modal-subtitle",children:[G.city.flag," ",G.city.name[t]," • ",Se.level," ",o]}),U.jsxs("div",{className:"rewards-summary-box",children:[U.jsxs("div",{className:"reward-line",children:[U.jsx("span",{children:Se.score}),U.jsx("strong",{children:Me.scoreEarned.toLocaleString()})]}),U.jsxs("div",{className:"reward-line gold",children:[U.jsx("span",{children:Se.coinsEarned}),U.jsxs("strong",{children:["+",Me.coinsEarned.toLocaleString()," 🪙"]})]}),Me.gemsEarned>0&&U.jsxs("div",{className:"reward-line cyan",children:[U.jsx("span",{children:t==="es"?"Gemas Ganadas":"Gems Earned"}),U.jsxs("strong",{children:["+",Me.gemsEarned," 💎"]})]}),U.jsxs("div",{className:"reward-line cyan",children:[U.jsx("span",{children:Se.leaguePointsEarned}),U.jsxs("strong",{children:["+",Me.lpEarned," 🏆"]})]})]}),!Me.doubled&&U.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>bt("double"),children:Se.doubleRewardsAd}),U.jsxs("button",{className:"pause-action-btn primary",onClick:gr,children:[Se.nextLevel," (",Se.level," ",o+1,") ➔"]}),U.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>q("menu"),children:["🏠 ",Se.backToMenu]})]})}),Et==="gameover"&&U.jsx("div",{className:"modal-backdrop",children:U.jsxs("div",{className:"modal-card gameover",children:[U.jsx("div",{className:"modal-Cover-icon-wrap",children:U.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),U.jsx("h2",{className:"modal-title",children:Se.fallTitle}),U.jsx("p",{className:"modal-subtitle",children:Se.fallSub}),U.jsxs("div",{className:"rewards-summary-box",children:[U.jsxs("div",{className:"reward-line",children:[U.jsx("span",{children:Se.score}),U.jsx("strong",{children:Me.scoreEarned.toLocaleString()})]}),U.jsxs("div",{className:"reward-line gold",children:[U.jsx("span",{children:Se.coinsEarned}),U.jsxs("strong",{children:["+",Me.coinsEarned.toLocaleString()," 🪙"]})]}),U.jsxs("div",{className:"reward-line cyan",children:[U.jsx("span",{children:Se.leaguePointsEarned}),U.jsxs("strong",{children:["+",Me.lpEarned," 🏆"]})]})]}),!Me.revivedOnce&&U.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>bt("revive"),children:Se.reviveAd}),U.jsxs("button",{className:"pause-action-btn primary",onClick:Oi,children:["🔄 ",Se.retry]}),U.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>q("menu"),children:["🏠 ",Se.backToMenu]})]})}),Qt&&U.jsx("div",{className:"modal-backdrop ad-layer",children:U.jsxs("div",{className:"modal-card",children:[U.jsx("div",{className:"modal-big-icon",children:"🎬"}),U.jsx("h2",{className:"modal-title",children:Se.adWatching}),U.jsx("p",{className:"modal-subtitle",children:k>0?`${Se.adSeconds} ${k}s...`:"✅ ¡Listo!"}),U.jsx("button",{className:"pause-action-btn primary",disabled:k>0,onClick:Ji,children:k>0?`${k}s`:Se.adCollect})]})})]})})}o_.createRoot(document.getElementById("root")).render(U.jsx(e_.StrictMode,{children:U.jsx(q1,{})}));
