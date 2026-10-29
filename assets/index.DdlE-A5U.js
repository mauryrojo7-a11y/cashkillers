(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function hg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},Za={},ku={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Nv(){if(tm)return Pt;tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function x(I,ue,we){this.props=I,this.context=ue,this.refs=b,this.updater=we||M}x.prototype.isReactComponent={},x.prototype.setState=function(I,ue){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ue,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=x.prototype;function U(I,ue,we){this.props=I,this.context=ue,this.refs=b,this.updater=we||M}var V=U.prototype=new v;V.constructor=U,w(V,x.prototype),V.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,D={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function E(I,ue,we){var Ke,Xe={},$e=null,J=null;if(ue!=null)for(Ke in ue.ref!==void 0&&(J=ue.ref),ue.key!==void 0&&($e=""+ue.key),ue)N.call(ue,Ke)&&!B.hasOwnProperty(Ke)&&(Xe[Ke]=ue[Ke]);var fe=arguments.length-2;if(fe===1)Xe.children=we;else if(1<fe){for(var Ae=Array(fe),je=0;je<fe;je++)Ae[je]=arguments[je+2];Xe.children=Ae}if(I&&I.defaultProps)for(Ke in fe=I.defaultProps,fe)Xe[Ke]===void 0&&(Xe[Ke]=fe[Ke]);return{$$typeof:s,type:I,key:$e,ref:J,props:Xe,_owner:D.current}}function L(I,ue){return{$$typeof:s,type:I.type,key:ue,ref:I.ref,props:I.props,_owner:I._owner}}function z(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function Y(I){var ue={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(we){return ue[we]})}var Z=/\/+/g;function ne(I,ue){return typeof I=="object"&&I!==null&&I.key!=null?Y(""+I.key):ue.toString(36)}function H(I,ue,we,Ke,Xe){var $e=typeof I;($e==="undefined"||$e==="boolean")&&(I=null);var J=!1;if(I===null)J=!0;else switch($e){case"string":case"number":J=!0;break;case"object":switch(I.$$typeof){case s:case e:J=!0}}if(J)return J=I,Xe=Xe(J),I=Ke===""?"."+ne(J,0):Ke,C(Xe)?(we="",I!=null&&(we=I.replace(Z,"$&/")+"/"),H(Xe,ue,we,"",function(je){return je})):Xe!=null&&(z(Xe)&&(Xe=L(Xe,we+(!Xe.key||J&&J.key===Xe.key?"":(""+Xe.key).replace(Z,"$&/")+"/")+I)),ue.push(Xe)),1;if(J=0,Ke=Ke===""?".":Ke+":",C(I))for(var fe=0;fe<I.length;fe++){$e=I[fe];var Ae=Ke+ne($e,fe);J+=H($e,ue,we,Ae,Xe)}else if(Ae=g(I),typeof Ae=="function")for(I=Ae.call(I),fe=0;!($e=I.next()).done;)$e=$e.value,Ae=Ke+ne($e,fe++),J+=H($e,ue,we,Ae,Xe);else if($e==="object")throw ue=String(I),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.");return J}function ee(I,ue,we){if(I==null)return I;var Ke=[],Xe=0;return H(I,Ke,"","",function($e){return ue.call(we,$e,Xe++)}),Ke}function ge(I){if(I._status===-1){var ue=I._result;ue=ue(),ue.then(function(we){(I._status===0||I._status===-1)&&(I._status=1,I._result=we)},function(we){(I._status===0||I._status===-1)&&(I._status=2,I._result=we)}),I._status===-1&&(I._status=0,I._result=ue)}if(I._status===1)return I._result.default;throw I._result}var re={current:null},q={transition:null},Q={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:q,ReactCurrentOwner:D};function te(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:ee,forEach:function(I,ue,we){ee(I,function(){ue.apply(this,arguments)},we)},count:function(I){var ue=0;return ee(I,function(){ue++}),ue},toArray:function(I){return ee(I,function(ue){return ue})||[]},only:function(I){if(!z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Pt.Component=x,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=U,Pt.StrictMode=r,Pt.Suspense=p,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Pt.act=te,Pt.cloneElement=function(I,ue,we){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ke=w({},I.props),Xe=I.key,$e=I.ref,J=I._owner;if(ue!=null){if(ue.ref!==void 0&&($e=ue.ref,J=D.current),ue.key!==void 0&&(Xe=""+ue.key),I.type&&I.type.defaultProps)var fe=I.type.defaultProps;for(Ae in ue)N.call(ue,Ae)&&!B.hasOwnProperty(Ae)&&(Ke[Ae]=ue[Ae]===void 0&&fe!==void 0?fe[Ae]:ue[Ae])}var Ae=arguments.length-2;if(Ae===1)Ke.children=we;else if(1<Ae){fe=Array(Ae);for(var je=0;je<Ae;je++)fe[je]=arguments[je+2];Ke.children=fe}return{$$typeof:s,type:I.type,key:Xe,ref:$e,props:Ke,_owner:J}},Pt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Pt.createElement=E,Pt.createFactory=function(I){var ue=E.bind(null,I);return ue.type=I,ue},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(I){return{$$typeof:f,render:I}},Pt.isValidElement=z,Pt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ge}},Pt.memo=function(I,ue){return{$$typeof:h,type:I,compare:ue===void 0?null:ue}},Pt.startTransition=function(I){var ue=q.transition;q.transition={};try{I()}finally{q.transition=ue}},Pt.unstable_act=te,Pt.useCallback=function(I,ue){return re.current.useCallback(I,ue)},Pt.useContext=function(I){return re.current.useContext(I)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(I){return re.current.useDeferredValue(I)},Pt.useEffect=function(I,ue){return re.current.useEffect(I,ue)},Pt.useId=function(){return re.current.useId()},Pt.useImperativeHandle=function(I,ue,we){return re.current.useImperativeHandle(I,ue,we)},Pt.useInsertionEffect=function(I,ue){return re.current.useInsertionEffect(I,ue)},Pt.useLayoutEffect=function(I,ue){return re.current.useLayoutEffect(I,ue)},Pt.useMemo=function(I,ue){return re.current.useMemo(I,ue)},Pt.useReducer=function(I,ue,we){return re.current.useReducer(I,ue,we)},Pt.useRef=function(I){return re.current.useRef(I)},Pt.useState=function(I){return re.current.useState(I)},Pt.useSyncExternalStore=function(I,ue,we){return re.current.useSyncExternalStore(I,ue,we)},Pt.useTransition=function(){return re.current.useTransition()},Pt.version="18.3.1",Pt}var nm;function mf(){return nm||(nm=1,ku.exports=Nv()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Dv(){if(im)return Za;im=1;var s=mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var _,S={},g=null,M=null;h!==void 0&&(g=""+h),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(S[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:f,key:g,ref:M,props:S,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var rm;function Iv(){return rm||(rm=1,Bu.exports=Dv()),Bu.exports}var G=Iv(),Et=mf();const Uv=hg(Et);var xl={},zu={exports:{}},Kn={},Gu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Fv(){return sm||(sm=1,(function(s){function e(q,Q){var te=q.length;q.push(Q);e:for(;0<te;){var I=te-1>>>1,ue=q[I];if(0<o(ue,Q))q[I]=Q,q[te]=ue,te=I;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Q=q[0],te=q.pop();if(te!==Q){q[0]=te;e:for(var I=0,ue=q.length,we=ue>>>1;I<we;){var Ke=2*(I+1)-1,Xe=q[Ke],$e=Ke+1,J=q[$e];if(0>o(Xe,te))$e<ue&&0>o(J,Xe)?(q[I]=J,q[$e]=te,I=$e):(q[I]=Xe,q[Ke]=te,I=Ke);else if($e<ue&&0>o(J,te))q[I]=J,q[$e]=te,I=$e;else break e}}return Q}function o(q,Q){var te=q.sortIndex-Q.sortIndex;return te!==0?te:q.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],h=[],_=1,S=null,g=3,M=!1,w=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(q){for(var Q=t(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=q)r(h),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=t(h)}}function C(q){if(b=!1,V(q),!w)if(t(p)!==null)w=!0,ge(N);else{var Q=t(h);Q!==null&&re(C,Q.startTime-q)}}function N(q,Q){w=!1,b&&(b=!1,v(E),E=-1),M=!0;var te=g;try{for(V(Q),S=t(p);S!==null&&(!(S.expirationTime>Q)||q&&!Y());){var I=S.callback;if(typeof I=="function"){S.callback=null,g=S.priorityLevel;var ue=I(S.expirationTime<=Q);Q=s.unstable_now(),typeof ue=="function"?S.callback=ue:S===t(p)&&r(p),V(Q)}else r(p);S=t(p)}if(S!==null)var we=!0;else{var Ke=t(h);Ke!==null&&re(C,Ke.startTime-Q),we=!1}return we}finally{S=null,g=te,M=!1}}var D=!1,B=null,E=-1,L=5,z=-1;function Y(){return!(s.unstable_now()-z<L)}function Z(){if(B!==null){var q=s.unstable_now();z=q;var Q=!0;try{Q=B(!0,q)}finally{Q?ne():(D=!1,B=null)}}else D=!1}var ne;if(typeof U=="function")ne=function(){U(Z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ee=H.port2;H.port1.onmessage=Z,ne=function(){ee.postMessage(null)}}else ne=function(){x(Z,0)};function ge(q){B=q,D||(D=!0,ne())}function re(q,Q){E=x(function(){q(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ge(N))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var te=g;g=Q;try{return q()}finally{g=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,Q){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=g;g=q;try{return Q()}finally{g=te}},s.unstable_scheduleCallback=function(q,Q,te){var I=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?I+te:I):te=I,q){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=te+ue,q={id:_++,callback:Q,priorityLevel:q,startTime:te,expirationTime:ue,sortIndex:-1},te>I?(q.sortIndex=te,e(h,q),t(p)===null&&q===t(h)&&(b?(v(E),E=-1):b=!0,re(C,te-I))):(q.sortIndex=ue,e(p,q),w||M||(w=!0,ge(N))),q},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(q){var Q=g;return function(){var te=g;g=Q;try{return q.apply(this,arguments)}finally{g=te}}}})(Vu)),Vu}var am;function Ov(){return am||(am=1,Gu.exports=Fv()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Bv(){if(om)return Kn;om=1;var s=mf(),e=Ov();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function g(n){return p.call(S,n)?!0:p.call(_,n)?!1:h.test(n)?S[n]=!0:(_[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,U);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,U);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,U);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function V(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),D=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),Y=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),q=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,I;function ue(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var we=!1;function Ke(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,O=m.length-1;1<=T&&0<=O&&d[T]!==m[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==m[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==m[O]){var W=`
`+d[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=O);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ue(n):""}function Xe(n){switch(n.tag){case 5:return ue(n.type);case 16:return ue("Lazy");case 13:return ue("Suspense");case 19:return ue("SuspenseList");case 0:case 2:case 15:return n=Ke(n.type,!1),n;case 11:return n=Ke(n.type.render,!1),n;case 1:return n=Ke(n.type,!0),n;default:return""}}function $e(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case D:return"Portal";case L:return"Profiler";case E:return"StrictMode";case ne:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Y:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:$e(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return $e(n(i))}catch{}}return null}function J(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $e(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ge(n){n._valueTracker||(n._valueTracker=je(n))}function Ce(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ae(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function it(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _t(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&V(n,"checked",i,!1)}function dt(n,i){bt(n,i);var a=fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Tt(n,i,a){(i!=="number"||Dt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Vt=Array.isArray;function wt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ct(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:fe(a)}}function Yt(n,i){var a=fe(i.value),c=fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ke(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function R(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?R(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Ie.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function Se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ue=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,i){if(i){if(Ue[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P=null;function ie(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ye=null,me=null,k=null;function F(n){if(n=Fa(n)){if(typeof ye!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),ye(n.stateNode,n.type,i))}}function _e(n){me?k?k.push(n):k=[n]:me=n}function Ee(){if(me){var n=me,i=k;if(k=me=null,F(n),i)for(n=0;n<i.length;n++)F(i[n])}}function Oe(n,i){return n(i)}function Me(){}var Ye=!1;function ze(n,i,a){if(Ye)return n(i,a);Ye=!0;try{return Oe(n,i,a)}finally{Ye=!1,(me!==null||k!==null)&&(Me(),Ee())}}function vt(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ft=!1;if(f)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){ft=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch{ft=!1}function on(n,i,a,c,d,m,T,O,W){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(be){this.onError(be)}}var li=!1,Bi=null,An=!1,Hn=null,yr={onError:function(n){li=!0,Bi=n}};function ci(n,i,a,c,d,m,T,O,W){li=!1,Bi=null,on.apply(yr,arguments)}function nn(n,i,a,c,d,m,T,O,W){if(ci.apply(this,arguments),li){if(li){var ve=Bi;li=!1,Bi=null}else throw Error(t(198));An||(An=!0,Hn=ve)}}function Lt(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function xn(n){if(Lt(n)!==n)throw Error(t(188))}function Zr(n){var i=n.alternate;if(!i){if(i=Lt(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return xn(d),n;if(m===c)return xn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,O=d.child;O;){if(O===a){T=!0,a=d,c=m;break}if(O===c){T=!0,c=d,a=m;break}O=O.sibling}if(!T){for(O=m.child;O;){if(O===a){T=!0,a=m,c=d;break}if(O===c){T=!0,c=m,a=d;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ki(n){return n=Zr(n),n!==null?Mr(n):null}function Mr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Mr(n);if(i!==null)return i;n=n.sibling}return null}var er=e.unstable_scheduleCallback,tr=e.unstable_cancelCallback,bs=e.unstable_shouldYield,Jr=e.unstable_requestPaint,$t=e.unstable_now,xa=e.unstable_getCurrentPriorityLevel,nr=e.unstable_ImmediatePriority,Er=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,j=e.unstable_LowPriority,pe=e.unstable_IdlePriority,ae=null,se=null;function We(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:rt,He=Math.log,tt=Math.LN2;function rt(n){return n>>>=0,n===0?32:31-(He(n)/tt|0)|0}var Pe=64,et=4194304;function Ne(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function lt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~d;O!==0?c=Ne(O):(m&=T,m!==0&&(c=Ne(m)))}else T=a&~d,T!==0?c=Ne(T):m!==0&&(c=Ne(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),d=1<<a,c|=n[a],i&=~d;return c}function St(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Ve(m),O=1<<T,W=d[T];W===-1?((O&a)===0||(O&c)!==0)&&(d[T]=St(O,i)):W<=i&&(n.expiredLanes|=O),m&=~O}}function gt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function kt(){var n=Pe;return Pe<<=1,(Pe&4194240)===0&&(Pe=64),n}function Be(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ht(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function Nt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ve(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Mt=0;function Qn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Si,It,Qt,yi,Wt,ui=!1,Mi=[],Ei=null,wr=null,Tr=null,Sa=new Map,ya=new Map,Ar=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(n,i){switch(n){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(i.pointerId)}}function Ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&It(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function t0(n,i,a,c,d){switch(i){case"focusin":return Ei=Ma(Ei,n,i,a,c,d),!0;case"dragenter":return wr=Ma(wr,n,i,a,c,d),!0;case"mouseover":return Tr=Ma(Tr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Sa.set(m,Ma(Sa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ya.set(m,Ma(ya.get(m)||null,n,i,a,c,d)),!0}return!1}function kf(n){var i=Qr(n.target);if(i!==null){var a=Lt(i);if(a!==null){if(i=a.tag,i===13){if(i=kn(a),i!==null){n.blockedOn=i,Wt(n.priority,function(){Qt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);P=c,a.target.dispatchEvent(c),P=null}else return i=Fa(a),i!==null&&It(i),n.blockedOn=a,!1;i.shift()}return!0}function zf(n,i,a){So(n)&&a.delete(i)}function n0(){ui=!1,Ei!==null&&So(Ei)&&(Ei=null),wr!==null&&So(wr)&&(wr=null),Tr!==null&&So(Tr)&&(Tr=null),Sa.forEach(zf),ya.forEach(zf)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,ui||(ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,n0)))}function wa(n){function i(d){return Ea(d,n)}if(0<Mi.length){Ea(Mi[0],n);for(var a=1;a<Mi.length;a++){var c=Mi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ei!==null&&Ea(Ei,n),wr!==null&&Ea(wr,n),Tr!==null&&Ea(Tr,n),Sa.forEach(i),ya.forEach(i),a=0;a<Ar.length;a++)c=Ar[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)kf(a),a.blockedOn===null&&Ar.shift()}var Rs=C.ReactCurrentBatchConfig,yo=!0;function i0(n,i,a,c){var d=Mt,m=Rs.transition;Rs.transition=null;try{Mt=1,uc(n,i,a,c)}finally{Mt=d,Rs.transition=m}}function r0(n,i,a,c){var d=Mt,m=Rs.transition;Rs.transition=null;try{Mt=4,uc(n,i,a,c)}finally{Mt=d,Rs.transition=m}}function uc(n,i,a,c){if(yo){var d=dc(n,i,a,c);if(d===null)Rc(n,i,c,Mo,a),Bf(n,c);else if(t0(d,n,i,a,c))c.stopPropagation();else if(Bf(n,c),i&4&&-1<e0.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&Si(m),m=dc(n,i,a,c),m===null&&Rc(n,i,c,Mo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var Mo=null;function dc(n,i,a,c){if(Mo=null,n=ie(c),n=Qr(n),n!==null)if(i=Lt(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Mo=n,null}function Gf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xa()){case nr:return 1;case Er:return 4;case A:case j:return 16;case pe:return 536870912;default:return 16}default:return 16}}var br=null,fc=null,Eo=null;function Vf(){if(Eo)return Eo;var n,i=fc,a=i.length,c,d="value"in br?br.value:br.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return Eo=d.slice(n,1<c?1-c:void 0)}function wo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function Hf(){return!1}function ei(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?To:Hf,this.isPropagationStopped=Hf,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=ei(Cs),Ta=te({},Cs,{view:0,detail:0}),s0=ei(Ta),pc,mc,Aa,Ao=te({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(pc=n.screenX-Aa.screenX,mc=n.screenY-Aa.screenY):mc=pc=0,Aa=n),pc)},movementY:function(n){return"movementY"in n?n.movementY:mc}}),Wf=ei(Ao),a0=te({},Ao,{dataTransfer:0}),o0=ei(a0),l0=te({},Ta,{relatedTarget:0}),gc=ei(l0),c0=te({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=ei(c0),d0=te({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),f0=ei(d0),h0=te({},Cs,{data:0}),Xf=ei(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=g0[n])?!!i[n]:!1}function vc(){return v0}var _0=te({},Ta,{key:function(n){if(n.key){var i=p0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?wo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x0=ei(_0),S0=te({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=ei(S0),y0=te({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),M0=ei(y0),E0=te({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=ei(E0),T0=te({},Ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=ei(T0),b0=[9,13,27,32],_c=f&&"CompositionEvent"in window,ba=null;f&&"documentMode"in document&&(ba=document.documentMode);var R0=f&&"TextEvent"in window&&!ba,qf=f&&(!_c||ba&&8<ba&&11>=ba),jf=" ",Kf=!1;function $f(n,i){switch(n){case"keyup":return b0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function C0(n,i){switch(n){case"compositionend":return Zf(i);case"keypress":return i.which!==32?null:(Kf=!0,jf);case"textInput":return n=i.data,n===jf&&Kf?null:n;default:return null}}function P0(n,i){if(Ps)return n==="compositionend"||!_c&&$f(n,i)?(n=Vf(),Eo=fc=br=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qf&&i.locale!=="ko"?null:i.data;default:return null}}var L0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!L0[n.type]:i==="textarea"}function Qf(n,i,a,c){_e(c),i=Lo(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ra=null,Ca=null;function N0(n){vh(n,0)}function bo(n){var i=Us(n);if(Ce(i))return n}function D0(n,i){if(n==="change")return i}var eh=!1;if(f){var xc;if(f){var Sc="oninput"in document;if(!Sc){var th=document.createElement("div");th.setAttribute("oninput","return;"),Sc=typeof th.oninput=="function"}xc=Sc}else xc=!1;eh=xc&&(!document.documentMode||9<document.documentMode)}function nh(){Ra&&(Ra.detachEvent("onpropertychange",ih),Ca=Ra=null)}function ih(n){if(n.propertyName==="value"&&bo(Ca)){var i=[];Qf(i,Ca,n,ie(n)),ze(N0,i)}}function I0(n,i,a){n==="focusin"?(nh(),Ra=i,Ca=a,Ra.attachEvent("onpropertychange",ih)):n==="focusout"&&nh()}function U0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bo(Ca)}function F0(n,i){if(n==="click")return bo(i)}function O0(n,i){if(n==="input"||n==="change")return bo(i)}function B0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var wi=typeof Object.is=="function"?Object.is:B0;function Pa(n,i){if(wi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!wi(n[d],i[d]))return!1}return!0}function rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var a=rh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rh(a)}}function ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Dt(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function k0(n){var i=oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ah(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=sh(a,m);var T=sh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z0=f&&"documentMode"in document&&11>=document.documentMode,Ls=null,Mc=null,La=null,Ec=!1;function lh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ls==null||Ls!==Dt(c)||(c=Ls,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),La&&Pa(La,c)||(La=c,c=Lo(Mc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ls)))}function Ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ns={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},wc={},ch={};f&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Co(n){if(wc[n])return wc[n];if(!Ns[n])return n;var i=Ns[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ch)return wc[n]=i[a];return n}var uh=Co("animationend"),dh=Co("animationiteration"),fh=Co("animationstart"),hh=Co("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,i){ph.set(n,i),l(i,[n])}for(var Tc=0;Tc<mh.length;Tc++){var Ac=mh[Tc],G0=Ac.toLowerCase(),V0=Ac[0].toUpperCase()+Ac.slice(1);Rr(G0,"on"+V0)}Rr(uh,"onAnimationEnd"),Rr(dh,"onAnimationIteration"),Rr(fh,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(hh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function gh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,nn(c,i,void 0,n),n.currentTarget=null}function vh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],W=O.instance,ve=O.currentTarget;if(O=O.listener,W!==m&&d.isPropagationStopped())break e;gh(d,O,ve),m=W}else for(T=0;T<c.length;T++){if(O=c[T],W=O.instance,ve=O.currentTarget,O=O.listener,W!==m&&d.isPropagationStopped())break e;gh(d,O,ve),m=W}}}if(An)throw n=Hn,An=!1,Hn=null,n}function Zt(n,i){var a=i[Ic];a===void 0&&(a=i[Ic]=new Set);var c=n+"__bubble";a.has(c)||(_h(i,n,2,!1),a.add(c))}function bc(n,i,a){var c=0;i&&(c|=4),_h(a,n,c,i)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Po]){n[Po]=!0,r.forEach(function(a){a!=="selectionchange"&&(H0.has(a)||bc(a,!1,n),bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Po]||(i[Po]=!0,bc("selectionchange",!1,i))}}function _h(n,i,a,c){switch(Gf(i)){case 1:var d=i0;break;case 4:d=r0;break;default:d=uc}a=d.bind(null,i,a,n),d=void 0,!ft||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;O!==null;){if(T=Qr(O),T===null)return;if(W=T.tag,W===5||W===6){c=m=T;continue e}O=O.parentNode}}c=c.return}ze(function(){var ve=m,be=ie(a),Le=[];e:{var Te=ph.get(n);if(Te!==void 0){var Qe=hc,st=n;switch(n){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":Qe=x0;break;case"focusin":st="focus",Qe=gc;break;case"focusout":st="blur",Qe=gc;break;case"beforeblur":case"afterblur":Qe=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=M0;break;case uh:case dh:case fh:Qe=u0;break;case hh:Qe=w0;break;case"scroll":Qe=s0;break;case"wheel":Qe=A0;break;case"copy":case"cut":case"paste":Qe=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Yf}var at=(i&4)!==0,dn=!at&&n==="scroll",ce=at?Te!==null?Te+"Capture":null:Te;at=[];for(var $=ve,de;$!==null;){de=$;var De=de.stateNode;if(de.tag===5&&De!==null&&(de=De,ce!==null&&(De=vt($,ce),De!=null&&at.push(Ia($,De,de)))),dn)break;$=$.return}0<at.length&&(Te=new Qe(Te,st,null,a,be),Le.push({event:Te,listeners:at}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Te&&a!==P&&(st=a.relatedTarget||a.fromElement)&&(Qr(st)||st[ir]))break e;if((Qe||Te)&&(Te=be.window===be?be:(Te=be.ownerDocument)?Te.defaultView||Te.parentWindow:window,Qe?(st=a.relatedTarget||a.toElement,Qe=ve,st=st?Qr(st):null,st!==null&&(dn=Lt(st),st!==dn||st.tag!==5&&st.tag!==6)&&(st=null)):(Qe=null,st=ve),Qe!==st)){if(at=Wf,De="onMouseLeave",ce="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(at=Yf,De="onPointerLeave",ce="onPointerEnter",$="pointer"),dn=Qe==null?Te:Us(Qe),de=st==null?Te:Us(st),Te=new at(De,$+"leave",Qe,a,be),Te.target=dn,Te.relatedTarget=de,De=null,Qr(be)===ve&&(at=new at(ce,$+"enter",st,a,be),at.target=de,at.relatedTarget=dn,De=at),dn=De,Qe&&st)t:{for(at=Qe,ce=st,$=0,de=at;de;de=Ds(de))$++;for(de=0,De=ce;De;De=Ds(De))de++;for(;0<$-de;)at=Ds(at),$--;for(;0<de-$;)ce=Ds(ce),de--;for(;$--;){if(at===ce||ce!==null&&at===ce.alternate)break t;at=Ds(at),ce=Ds(ce)}at=null}else at=null;Qe!==null&&xh(Le,Te,Qe,at,!1),st!==null&&dn!==null&&xh(Le,dn,st,at,!0)}}e:{if(Te=ve?Us(ve):window,Qe=Te.nodeName&&Te.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Te.type==="file")var ot=D0;else if(Jf(Te))if(eh)ot=O0;else{ot=U0;var ct=I0}else(Qe=Te.nodeName)&&Qe.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(ot=F0);if(ot&&(ot=ot(n,ve))){Qf(Le,ot,a,be);break e}ct&&ct(n,Te,ve),n==="focusout"&&(ct=Te._wrapperState)&&ct.controlled&&Te.type==="number"&&Tt(Te,"number",Te.value)}switch(ct=ve?Us(ve):window,n){case"focusin":(Jf(ct)||ct.contentEditable==="true")&&(Ls=ct,Mc=ve,La=null);break;case"focusout":La=Mc=Ls=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,lh(Le,a,be);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":lh(Le,a,be)}var ut;if(_c)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Ps?$f(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(qf&&a.locale!=="ko"&&(Ps||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ps&&(ut=Vf()):(br=be,fc="value"in br?br.value:br.textContent,Ps=!0)),ct=Lo(ve,pt),0<ct.length&&(pt=new Xf(pt,n,null,a,be),Le.push({event:pt,listeners:ct}),ut?pt.data=ut:(ut=Zf(a),ut!==null&&(pt.data=ut)))),(ut=R0?C0(n,a):P0(n,a))&&(ve=Lo(ve,"onBeforeInput"),0<ve.length&&(be=new Xf("onBeforeInput","beforeinput",null,a,be),Le.push({event:be,listeners:ve}),be.data=ut))}vh(Le,i)})}function Ia(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Lo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=vt(n,a),m!=null&&c.unshift(Ia(n,m,d)),m=vt(n,i),m!=null&&c.push(Ia(n,m,d))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var O=a,W=O.alternate,ve=O.stateNode;if(W!==null&&W===c)break;O.tag===5&&ve!==null&&(O=ve,d?(W=vt(a,m),W!=null&&T.unshift(Ia(a,W,O))):d||(W=vt(a,m),W!=null&&T.push(Ia(a,W,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var W0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function Sh(n){return(typeof n=="string"?n:""+n).replace(W0,`
`).replace(X0,"")}function No(n,i,a){if(i=Sh(i),Sh(n)!==i&&a)throw Error(t(425))}function Do(){}var Cc=null,Pc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(j0)}:Nc;function j0(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),zi="__reactFiber$"+Is,Ua="__reactProps$"+Is,ir="__reactContainer$"+Is,Ic="__reactEvents$"+Is,K0="__reactListeners$"+Is,$0="__reactHandles$"+Is;function Qr(n){var i=n[zi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ir]||a[zi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mh(n);n!==null;){if(a=n[zi])return a;n=Mh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[zi]||n[ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[Ua]||null}var Uc=[],Fs=-1;function Pr(n){return{current:n}}function Jt(n){0>Fs||(n.current=Uc[Fs],Uc[Fs]=null,Fs--)}function Kt(n,i){Fs++,Uc[Fs]=n.current,n.current=i}var Lr={},Ln=Pr(Lr),Wn=Pr(!1),es=Lr;function Os(n,i){var a=n.type.contextTypes;if(!a)return Lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xn(n){return n=n.childContextTypes,n!=null}function Uo(){Jt(Wn),Jt(Ln)}function Eh(n,i,a){if(Ln.current!==Lr)throw Error(t(168));Kt(Ln,i),Kt(Wn,a)}function wh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,J(n)||"Unknown",d));return te({},a,c)}function Fo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,es=Ln.current,Kt(Ln,n),Kt(Wn,Wn.current),!0}function Th(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wh(n,i,es),c.__reactInternalMemoizedMergedChildContext=n,Jt(Wn),Jt(Ln),Kt(Ln,n)):Jt(Wn),Kt(Wn,a)}var rr=null,Oo=!1,Fc=!1;function Ah(n){rr===null?rr=[n]:rr.push(n)}function Z0(n){Oo=!0,Ah(n)}function Nr(){if(!Fc&&rr!==null){Fc=!0;var n=0,i=Mt;try{var a=rr;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}rr=null,Oo=!1}catch(d){throw rr!==null&&(rr=rr.slice(n+1)),er(nr,Nr),d}finally{Mt=i,Fc=!1}}return null}var Bs=[],ks=0,Bo=null,ko=0,di=[],fi=0,ts=null,sr=1,ar="";function ns(n,i){Bs[ks++]=ko,Bs[ks++]=Bo,Bo=n,ko=i}function bh(n,i,a){di[fi++]=sr,di[fi++]=ar,di[fi++]=ts,ts=n;var c=sr;n=ar;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var m=32-Ve(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,sr=1<<32-Ve(i)+d|a<<d|c,ar=m+n}else sr=1<<m|a<<d|c,ar=n}function Oc(n){n.return!==null&&(ns(n,1),bh(n,1,0))}function Bc(n){for(;n===Bo;)Bo=Bs[--ks],Bs[ks]=null,ko=Bs[--ks],Bs[ks]=null;for(;n===ts;)ts=di[--fi],di[fi]=null,ar=di[--fi],di[fi]=null,sr=di[--fi],di[fi]=null}var ti=null,ni=null,en=!1,Ti=null;function Rh(n,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ch(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ti=n,ni=Cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ti=n,ni=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:sr,overflow:ar}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ti=n,ni=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(en){var i=ni;if(i){var a=i;if(!Ch(n,i)){if(kc(n))throw Error(t(418));i=Cr(a.nextSibling);var c=ti;i&&Ch(n,i)?Rh(c,a):(n.flags=n.flags&-4097|2,en=!1,ti=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ti=n}}}function Ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ti=n}function zo(n){if(n!==ti)return!1;if(!en)return Ph(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=ni)){if(kc(n))throw Lh(),Error(t(418));for(;i;)Rh(n,i),i=Cr(i.nextSibling)}if(Ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ni=Cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ni=null}}else ni=ti?Cr(n.stateNode.nextSibling):null;return!0}function Lh(){for(var n=ni;n;)n=Cr(n.nextSibling)}function zs(){ni=ti=null,en=!1}function Gc(n){Ti===null?Ti=[n]:Ti.push(n)}var J0=C.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var O=d.refs;T===null?delete O[m]:O[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Go(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Nh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(ce,$){if(n){var de=ce.deletions;de===null?(ce.deletions=[$],ce.flags|=16):de.push($)}}function a(ce,$){if(!n)return null;for(;$!==null;)i(ce,$),$=$.sibling;return null}function c(ce,$){for(ce=new Map;$!==null;)$.key!==null?ce.set($.key,$):ce.set($.index,$),$=$.sibling;return ce}function d(ce,$){return ce=zr(ce,$),ce.index=0,ce.sibling=null,ce}function m(ce,$,de){return ce.index=de,n?(de=ce.alternate,de!==null?(de=de.index,de<$?(ce.flags|=2,$):de):(ce.flags|=2,$)):(ce.flags|=1048576,$)}function T(ce){return n&&ce.alternate===null&&(ce.flags|=2),ce}function O(ce,$,de,De){return $===null||$.tag!==6?($=Nu(de,ce.mode,De),$.return=ce,$):($=d($,de),$.return=ce,$)}function W(ce,$,de,De){var ot=de.type;return ot===B?be(ce,$,de.props.children,De,de.key):$!==null&&($.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ge&&Nh(ot)===$.type)?(De=d($,de.props),De.ref=Oa(ce,$,de),De.return=ce,De):(De=dl(de.type,de.key,de.props,null,ce.mode,De),De.ref=Oa(ce,$,de),De.return=ce,De)}function ve(ce,$,de,De){return $===null||$.tag!==4||$.stateNode.containerInfo!==de.containerInfo||$.stateNode.implementation!==de.implementation?($=Du(de,ce.mode,De),$.return=ce,$):($=d($,de.children||[]),$.return=ce,$)}function be(ce,$,de,De,ot){return $===null||$.tag!==7?($=us(de,ce.mode,De,ot),$.return=ce,$):($=d($,de),$.return=ce,$)}function Le(ce,$,de){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Nu(""+$,ce.mode,de),$.return=ce,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return de=dl($.type,$.key,$.props,null,ce.mode,de),de.ref=Oa(ce,null,$),de.return=ce,de;case D:return $=Du($,ce.mode,de),$.return=ce,$;case ge:var De=$._init;return Le(ce,De($._payload),de)}if(Vt($)||Q($))return $=us($,ce.mode,de,null),$.return=ce,$;Go(ce,$)}return null}function Te(ce,$,de,De){var ot=$!==null?$.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ot!==null?null:O(ce,$,""+de,De);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case N:return de.key===ot?W(ce,$,de,De):null;case D:return de.key===ot?ve(ce,$,de,De):null;case ge:return ot=de._init,Te(ce,$,ot(de._payload),De)}if(Vt(de)||Q(de))return ot!==null?null:be(ce,$,de,De,null);Go(ce,de)}return null}function Qe(ce,$,de,De,ot){if(typeof De=="string"&&De!==""||typeof De=="number")return ce=ce.get(de)||null,O($,ce,""+De,ot);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case N:return ce=ce.get(De.key===null?de:De.key)||null,W($,ce,De,ot);case D:return ce=ce.get(De.key===null?de:De.key)||null,ve($,ce,De,ot);case ge:var ct=De._init;return Qe(ce,$,de,ct(De._payload),ot)}if(Vt(De)||Q(De))return ce=ce.get(de)||null,be($,ce,De,ot,null);Go($,De)}return null}function st(ce,$,de,De){for(var ot=null,ct=null,ut=$,pt=$=0,En=null;ut!==null&&pt<de.length;pt++){ut.index>pt?(En=ut,ut=null):En=ut.sibling;var zt=Te(ce,ut,de[pt],De);if(zt===null){ut===null&&(ut=En);break}n&&ut&&zt.alternate===null&&i(ce,ut),$=m(zt,$,pt),ct===null?ot=zt:ct.sibling=zt,ct=zt,ut=En}if(pt===de.length)return a(ce,ut),en&&ns(ce,pt),ot;if(ut===null){for(;pt<de.length;pt++)ut=Le(ce,de[pt],De),ut!==null&&($=m(ut,$,pt),ct===null?ot=ut:ct.sibling=ut,ct=ut);return en&&ns(ce,pt),ot}for(ut=c(ce,ut);pt<de.length;pt++)En=Qe(ut,ce,pt,de[pt],De),En!==null&&(n&&En.alternate!==null&&ut.delete(En.key===null?pt:En.key),$=m(En,$,pt),ct===null?ot=En:ct.sibling=En,ct=En);return n&&ut.forEach(function(Gr){return i(ce,Gr)}),en&&ns(ce,pt),ot}function at(ce,$,de,De){var ot=Q(de);if(typeof ot!="function")throw Error(t(150));if(de=ot.call(de),de==null)throw Error(t(151));for(var ct=ot=null,ut=$,pt=$=0,En=null,zt=de.next();ut!==null&&!zt.done;pt++,zt=de.next()){ut.index>pt?(En=ut,ut=null):En=ut.sibling;var Gr=Te(ce,ut,zt.value,De);if(Gr===null){ut===null&&(ut=En);break}n&&ut&&Gr.alternate===null&&i(ce,ut),$=m(Gr,$,pt),ct===null?ot=Gr:ct.sibling=Gr,ct=Gr,ut=En}if(zt.done)return a(ce,ut),en&&ns(ce,pt),ot;if(ut===null){for(;!zt.done;pt++,zt=de.next())zt=Le(ce,zt.value,De),zt!==null&&($=m(zt,$,pt),ct===null?ot=zt:ct.sibling=zt,ct=zt);return en&&ns(ce,pt),ot}for(ut=c(ce,ut);!zt.done;pt++,zt=de.next())zt=Qe(ut,ce,pt,zt.value,De),zt!==null&&(n&&zt.alternate!==null&&ut.delete(zt.key===null?pt:zt.key),$=m(zt,$,pt),ct===null?ot=zt:ct.sibling=zt,ct=zt);return n&&ut.forEach(function(Lv){return i(ce,Lv)}),en&&ns(ce,pt),ot}function dn(ce,$,de,De){if(typeof de=="object"&&de!==null&&de.type===B&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case N:e:{for(var ot=de.key,ct=$;ct!==null;){if(ct.key===ot){if(ot=de.type,ot===B){if(ct.tag===7){a(ce,ct.sibling),$=d(ct,de.props.children),$.return=ce,ce=$;break e}}else if(ct.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ge&&Nh(ot)===ct.type){a(ce,ct.sibling),$=d(ct,de.props),$.ref=Oa(ce,ct,de),$.return=ce,ce=$;break e}a(ce,ct);break}else i(ce,ct);ct=ct.sibling}de.type===B?($=us(de.props.children,ce.mode,De,de.key),$.return=ce,ce=$):(De=dl(de.type,de.key,de.props,null,ce.mode,De),De.ref=Oa(ce,$,de),De.return=ce,ce=De)}return T(ce);case D:e:{for(ct=de.key;$!==null;){if($.key===ct)if($.tag===4&&$.stateNode.containerInfo===de.containerInfo&&$.stateNode.implementation===de.implementation){a(ce,$.sibling),$=d($,de.children||[]),$.return=ce,ce=$;break e}else{a(ce,$);break}else i(ce,$);$=$.sibling}$=Du(de,ce.mode,De),$.return=ce,ce=$}return T(ce);case ge:return ct=de._init,dn(ce,$,ct(de._payload),De)}if(Vt(de))return st(ce,$,de,De);if(Q(de))return at(ce,$,de,De);Go(ce,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,$!==null&&$.tag===6?(a(ce,$.sibling),$=d($,de),$.return=ce,ce=$):(a(ce,$),$=Nu(de,ce.mode,De),$.return=ce,ce=$),T(ce)):a(ce,$)}return dn}var Gs=Dh(!0),Ih=Dh(!1),Vo=Pr(null),Ho=null,Vs=null,Vc=null;function Hc(){Vc=Vs=Ho=null}function Wc(n){var i=Vo.current;Jt(Vo),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Hs(n,i){Ho=n,Vc=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function hi(n){var i=n._currentValue;if(Vc!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(Ho===null)throw Error(t(308));Vs=n,Ho.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var is=null;function Yc(n){is===null?is=[n]:is.push(n)}function Uh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Yc(i)):(a.next=d.next,d.next=a),i.interleaved=a,or(n,c)}function or(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Dr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function lr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ir(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,or(n,a)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,or(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Sn(n,a)}}function Oh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xo(n,i,a,c){var d=n.updateQueue;Dr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var W=O,ve=W.next;W.next=null,T===null?m=ve:T.next=ve,T=W;var be=n.alternate;be!==null&&(be=be.updateQueue,O=be.lastBaseUpdate,O!==T&&(O===null?be.firstBaseUpdate=ve:O.next=ve,be.lastBaseUpdate=W))}if(m!==null){var Le=d.baseState;T=0,be=ve=W=null,O=m;do{var Te=O.lane,Qe=O.eventTime;if((c&Te)===Te){be!==null&&(be=be.next={eventTime:Qe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var st=n,at=O;switch(Te=i,Qe=a,at.tag){case 1:if(st=at.payload,typeof st=="function"){Le=st.call(Qe,Le,Te);break e}Le=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=at.payload,Te=typeof st=="function"?st.call(Qe,Le,Te):st,Te==null)break e;Le=te({},Le,Te);break e;case 2:Dr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Te=d.effects,Te===null?d.effects=[O]:Te.push(O))}else Qe={eventTime:Qe,lane:Te,tag:O.tag,payload:O.payload,callback:O.callback,next:null},be===null?(ve=be=Qe,W=Le):be=be.next=Qe,T|=Te;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;Te=O,O=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(be===null&&(W=Le),d.baseState=W,d.firstBaseUpdate=ve,d.lastBaseUpdate=be,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);as|=T,n.lanes=T,n.memoizedState=Le}}function Bh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ba={},Gi=Pr(Ba),ka=Pr(Ba),za=Pr(Ba);function rs(n){if(n===Ba)throw Error(t(174));return n}function jc(n,i){switch(Kt(za,i),Kt(ka,n),Kt(Gi,Ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=y(i,n)}Jt(Gi),Kt(Gi,i)}function Ws(){Jt(Gi),Jt(ka),Jt(za)}function kh(n){rs(za.current);var i=rs(Gi.current),a=y(i,n.type);i!==a&&(Kt(ka,n),Kt(Gi,a))}function Kc(n){ka.current===n&&(Jt(Gi),Jt(ka))}var rn=Pr(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function Zc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var qo=C.ReactCurrentDispatcher,Jc=C.ReactCurrentBatchConfig,ss=0,sn=null,pn=null,yn=null,jo=!1,Ga=!1,Va=0,Q0=0;function Nn(){throw Error(t(321))}function Qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!wi(n[a],i[a]))return!1;return!0}function eu(n,i,a,c,d,m){if(ss=m,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qo.current=n===null||n.memoizedState===null?iv:rv,n=a(c,d),Ga){m=0;do{if(Ga=!1,Va=0,25<=m)throw Error(t(301));m+=1,yn=pn=null,i.updateQueue=null,qo.current=sv,n=a(c,d)}while(Ga)}if(qo.current=Zo,i=pn!==null&&pn.next!==null,ss=0,yn=pn=sn=null,jo=!1,i)throw Error(t(300));return n}function tu(){var n=Va!==0;return Va=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?sn.memoizedState=yn=n:yn=yn.next=n,yn}function pi(){if(pn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=yn===null?sn.memoizedState:yn.next;if(i!==null)yn=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},yn===null?sn.memoizedState=yn=n:yn=yn.next=n}return yn}function Ha(n,i){return typeof i=="function"?i(n):i}function nu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var O=T=null,W=null,ve=m;do{var be=ve.lane;if((ss&be)===be)W!==null&&(W=W.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var Le={lane:be,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};W===null?(O=W=Le,T=c):W=W.next=Le,sn.lanes|=be,as|=be}ve=ve.next}while(ve!==null&&ve!==m);W===null?T=c:W.next=O,wi(c,i.memoizedState)||(Yn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,sn.lanes|=m,as|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);wi(m,i.memoizedState)||(Yn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function zh(){}function Gh(n,i){var a=sn,c=pi(),d=i(),m=!wi(c.memoizedState,d);if(m&&(c.memoizedState=d,Yn=!0),c=c.queue,ru(Wh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||yn!==null&&yn.memoizedState.tag&1){if(a.flags|=2048,Wa(9,Hh.bind(null,a,c,d,i),void 0,null),Mn===null)throw Error(t(349));(ss&30)!==0||Vh(a,i,d)}return d}function Vh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Hh(n,i,a,c){i.value=a,i.getSnapshot=c,Xh(i)&&Yh(n)}function Wh(n,i,a){return a(function(){Xh(i)&&Yh(n)})}function Xh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!wi(n,a)}catch{return!0}}function Yh(n){var i=or(n,1);i!==null&&Ci(i,n,1,-1)}function qh(n){var i=Vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},i.queue=n,n=n.dispatch=nv.bind(null,sn,n),[i.memoizedState,n]}function Wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jh(){return pi().memoizedState}function Ko(n,i,a,c){var d=Vi();sn.flags|=n,d.memoizedState=Wa(1|i,a,void 0,c===void 0?null:c)}function $o(n,i,a,c){var d=pi();c=c===void 0?null:c;var m=void 0;if(pn!==null){var T=pn.memoizedState;if(m=T.destroy,c!==null&&Qc(c,T.deps)){d.memoizedState=Wa(i,a,m,c);return}}sn.flags|=n,d.memoizedState=Wa(1|i,a,m,c)}function Kh(n,i){return Ko(8390656,8,n,i)}function ru(n,i){return $o(2048,8,n,i)}function $h(n,i){return $o(4,2,n,i)}function Zh(n,i){return $o(4,4,n,i)}function Jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qh(n,i,a){return a=a!=null?a.concat([n]):null,$o(4,4,Jh.bind(null,i,n),a)}function su(){}function ep(n,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tp(n,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function np(n,i,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(wi(a,i)||(a=kt(),sn.lanes|=a,as|=a,n.baseState=!0),i)}function ev(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=Jc.transition;Jc.transition={};try{n(!1),i()}finally{Mt=a,Jc.transition=c}}function ip(){return pi().memoizedState}function tv(n,i,a){var c=Br(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rp(n))sp(i,a);else if(a=Uh(n,i,a,c),a!==null){var d=Gn();Ci(a,n,c,d),ap(a,i,c)}}function nv(n,i,a){var c=Br(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rp(n))sp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,O=m(T,a);if(d.hasEagerState=!0,d.eagerState=O,wi(O,T)){var W=i.interleaved;W===null?(d.next=d,Yc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=Uh(n,i,d,c),a!==null&&(d=Gn(),Ci(a,n,c,d),ap(a,i,c))}}function rp(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function sp(n,i){Ga=jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Sn(n,a)}}var Zo={readContext:hi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},iv={readContext:hi,useCallback:function(n,i){return Vi().memoizedState=[n,i===void 0?null:i],n},useContext:hi,useEffect:Kh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4194308,4,Jh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ko(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ko(4,2,n,i)},useMemo:function(n,i){var a=Vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=tv.bind(null,sn,n),[c.memoizedState,n]},useRef:function(n){var i=Vi();return n={current:n},i.memoizedState=n},useState:qh,useDebugValue:su,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=qh(!1),i=n[0];return n=ev.bind(null,n[1]),Vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=sn,d=Vi();if(en){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Mn===null)throw Error(t(349));(ss&30)!==0||Vh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Kh(Wh.bind(null,c,m,n),[n]),c.flags|=2048,Wa(9,Hh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Vi(),i=Mn.identifierPrefix;if(en){var a=ar,c=sr;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Q0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},rv={readContext:hi,useCallback:ep,useContext:hi,useEffect:ru,useImperativeHandle:Qh,useInsertionEffect:$h,useLayoutEffect:Zh,useMemo:tp,useReducer:nu,useRef:jh,useState:function(){return nu(Ha)},useDebugValue:su,useDeferredValue:function(n){var i=pi();return np(i,pn.memoizedState,n)},useTransition:function(){var n=nu(Ha)[0],i=pi().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Gh,useId:ip,unstable_isNewReconciler:!1},sv={readContext:hi,useCallback:ep,useContext:hi,useEffect:ru,useImperativeHandle:Qh,useInsertionEffect:$h,useLayoutEffect:Zh,useMemo:tp,useReducer:iu,useRef:jh,useState:function(){return iu(Ha)},useDebugValue:su,useDeferredValue:function(n){var i=pi();return pn===null?i.memoizedState=n:np(i,pn.memoizedState,n)},useTransition:function(){var n=iu(Ha)[0],i=pi().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Gh,useId:ip,unstable_isNewReconciler:!1};function Ai(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jo={isMounted:function(n){return(n=n._reactInternals)?Lt(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Gn(),d=Br(n),m=lr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Ir(n,m,d),i!==null&&(Ci(i,n,d,c),Wo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Gn(),d=Br(n),m=lr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Ir(n,m,d),i!==null&&(Ci(i,n,d,c),Wo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),c=Br(n),d=lr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Ir(n,d,c),i!==null&&(Ci(i,n,c,a),Wo(i,n,c))}};function op(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Pa(a,c)||!Pa(d,m):!0}function lp(n,i,a){var c=!1,d=Lr,m=i.contextType;return typeof m=="object"&&m!==null?m=hi(m):(d=Xn(i)?es:Ln.current,c=i.contextTypes,m=(c=c!=null)?Os(n,d):Lr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function cp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Jo.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},qc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=hi(m):(m=Xn(i)?es:Ln.current,d.context=Os(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(au(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Jo.enqueueReplaceState(d,d.state,null),Xo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",c=i;do a+=Xe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var av=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,a){a=lr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){sl||(sl=!0,wu=c),cu(n,i)},a}function dp(n,i,a){a=lr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){cu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){cu(n,i),typeof c!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new av;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Sv.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=lr(-1,1),i.tag=2,Ir(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var ov=C.ReactCurrentOwner,Yn=!1;function zn(n,i,a,c){i.child=n===null?Ih(i,null,a,c):Gs(i,n.child,a,c)}function mp(n,i,a,c,d){a=a.render;var m=i.ref;return Hs(i,d),c=eu(n,i,a,c,m,d),a=tu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,cr(n,i,d)):(en&&a&&Oc(i),i.flags|=1,zn(n,i,c,d),i.child)}function gp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Lu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,vp(n,i,m,c,d)):(n=dl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(T,c)&&n.ref===i.ref)return cr(n,i,d)}return i.flags|=1,n=zr(m,c),n.ref=i.ref,n.return=i,i.child=n}function vp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Pa(m,c)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,cr(n,i,d)}return uu(n,i,a,c,d)}function _p(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(qs,ii),ii|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(qs,ii),ii|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Kt(qs,ii),ii|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Kt(qs,ii),ii|=c;return zn(n,i,d,a),i.child}function xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(n,i,a,c,d){var m=Xn(a)?es:Ln.current;return m=Os(i,m),Hs(i,d),a=eu(n,i,a,c,m,d),c=tu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,cr(n,i,d)):(en&&c&&Oc(i),i.flags|=1,zn(n,i,a,d),i.child)}function Sp(n,i,a,c,d){if(Xn(a)){var m=!0;Fo(i)}else m=!1;if(Hs(i,d),i.stateNode===null)el(n,i),lp(i,a,c),ou(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var W=T.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=hi(ve):(ve=Xn(a)?es:Ln.current,ve=Os(i,ve));var be=a.getDerivedStateFromProps,Le=typeof be=="function"||typeof T.getSnapshotBeforeUpdate=="function";Le||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||W!==ve)&&cp(i,T,c,ve),Dr=!1;var Te=i.memoizedState;T.state=Te,Xo(i,c,T,d),W=i.memoizedState,O!==c||Te!==W||Wn.current||Dr?(typeof be=="function"&&(au(i,a,be,c),W=i.memoizedState),(O=Dr||op(i,a,O,c,Te,W,ve))?(Le||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=ve,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Fh(n,i),O=i.memoizedProps,ve=i.type===i.elementType?O:Ai(i.type,O),T.props=ve,Le=i.pendingProps,Te=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=hi(W):(W=Xn(a)?es:Ln.current,W=Os(i,W));var Qe=a.getDerivedStateFromProps;(be=typeof Qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Le||Te!==W)&&cp(i,T,c,W),Dr=!1,Te=i.memoizedState,T.state=Te,Xo(i,c,T,d);var st=i.memoizedState;O!==Le||Te!==st||Wn.current||Dr?(typeof Qe=="function"&&(au(i,a,Qe,c),st=i.memoizedState),(ve=Dr||op(i,a,ve,c,Te,st,W)||!1)?(be||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,st,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,st,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=st),T.props=c,T.state=st,T.context=W,c=ve):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),c=!1)}return du(n,i,a,c,m,d)}function du(n,i,a,c,d,m){xp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Th(i,a,!1),cr(n,i,m);c=i.stateNode,ov.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,O,m)):zn(n,i,O,m),i.memoizedState=c.state,d&&Th(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?Eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Eh(n,i.context,!1),jc(n,i.containerInfo)}function Mp(n,i,a,c,d){return zs(),Gc(d),i.flags|=256,zn(n,i,a,c),i.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ep(n,i,a){var c=i.pendingProps,d=rn.current,m=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Kt(rn,d&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=fl(T,c,0,null),n=us(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=hu(a),i.memoizedState=fu,n):pu(i,T));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return lv(n,i,T,c,O,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,O=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=zr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?m=zr(O,m):(m=us(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?hu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=fu,c}return m=n.child,n=m.sibling,c=zr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function pu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,c){return c!==null&&Gc(c),Gs(i,n.child,null,a),n=pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function lv(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(t(422))),Qo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=fl({mode:"visible",children:c.children},d,0,null),m=us(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,T),i.child.memoizedState=hu(T),i.memoizedState=fu,m);if((i.mode&1)===0)return Qo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(t(419)),c=lu(m,c,void 0),Qo(n,i,T,c)}if(O=(T&n.childLanes)!==0,Yn||O){if(c=Mn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,or(n,d),Ci(c,n,d,-1))}return Pu(),c=lu(Error(t(421))),Qo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=yv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ni=Cr(d.nextSibling),ti=i,en=!0,Ti=null,n!==null&&(di[fi++]=sr,di[fi++]=ar,di[fi++]=ts,sr=n.id,ar=n.overflow,ts=i),i=pu(i,c.children),i.flags|=4096,i)}function wp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function mu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Tp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(zn(n,i,c.children,a),c=rn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,a,i);else if(n.tag===19)wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(rn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Yo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}mu(i,!0,a,null,m);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=zr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=zr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function cv(n,i,a){switch(i.tag){case 3:yp(i),zs();break;case 5:kh(i);break;case 1:Xn(i.type)&&Fo(i);break;case 4:jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Kt(Vo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(rn,rn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ep(n,i,a):(Kt(rn,rn.current&1),n=cr(n,i,a),n!==null?n.sibling:null);Kt(rn,rn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Tp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Kt(rn,rn.current),c)break;return null;case 22:case 23:return i.lanes=0,_p(n,i,a)}return cr(n,i,a)}var Ap,gu,bp,Rp;Ap=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},bp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,rs(Gi.current);var m=null;switch(a){case"input":d=it(n,d),c=it(n,c),m=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),m=[];break;case"textarea":d=Ct(n,d),c=Ct(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Do)}Ze(a,c);var T;a=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var O=d[ve];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?m||(m=[]):(m=m||[]).push(ve,null));for(ve in c){var W=c[ve];if(O=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&W!==O&&(W!=null||O!=null))if(ve==="style")if(O){for(T in O)!O.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&O[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(m||(m=[]),m.push(ve,a)),a=W;else ve==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,O=O?O.__html:void 0,W!=null&&O!==W&&(m=m||[]).push(ve,W)):ve==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(ve,""+W):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(W!=null&&ve==="onScroll"&&Zt("scroll",n),m||O===W||(m=[])):(m=m||[]).push(ve,W))}a&&(m=m||[]).push("style",a);var ve=m;(i.updateQueue=ve)&&(i.flags|=4)}},Rp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Xa(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function uv(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Xn(i.type)&&Uo(),Dn(i),null;case 3:return c=i.stateNode,Ws(),Jt(Wn),Jt(Ln),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ti!==null&&(bu(Ti),Ti=null))),gu(n,i),Dn(i),null;case 5:Kc(i);var d=rs(za.current);if(a=i.type,n!==null&&i.stateNode!=null)bp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=rs(Gi.current),zo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[zi]=i,c[Ua]=m,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",c),Zt("close",c);break;case"iframe":case"object":case"embed":Zt("load",c);break;case"video":case"audio":for(d=0;d<Na.length;d++)Zt(Na[d],c);break;case"source":Zt("error",c);break;case"img":case"image":case"link":Zt("error",c),Zt("load",c);break;case"details":Zt("toggle",c);break;case"input":_t(c,m),Zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Zt("invalid",c);break;case"textarea":X(c,m),Zt("invalid",c)}Ze(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var O=m[T];T==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&No(c.textContent,O,n),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&No(c.textContent,O,n),d=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Zt("scroll",c)}switch(a){case"input":Ge(c),Je(c,m,!0);break;case"textarea":Ge(c),ke(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Do)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=R(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[zi]=i,n[Ua]=c,Ap(n,i,!1,!1),i.stateNode=n;e:{switch(T=Fe(a,c),a){case"dialog":Zt("cancel",n),Zt("close",n),d=c;break;case"iframe":case"object":case"embed":Zt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Na.length;d++)Zt(Na[d],n);d=c;break;case"source":Zt("error",n),d=c;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),d=c;break;case"details":Zt("toggle",n),d=c;break;case"input":_t(n,c),d=it(n,c),Zt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),Zt("invalid",n);break;case"textarea":X(n,c),d=Ct(n,c),Zt("invalid",n);break;default:d=c}Ze(a,d),O=d;for(m in O)if(O.hasOwnProperty(m)){var W=O[m];m==="style"?Se(n,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&le(n,W)):m==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&he(n,W):typeof W=="number"&&he(n,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?W!=null&&m==="onScroll"&&Zt("scroll",n):W!=null&&V(n,m,W,T))}switch(a){case"input":Ge(n),Je(n,c,!1);break;case"textarea":Ge(n),ke(n);break;case"option":c.value!=null&&n.setAttribute("value",""+fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?wt(n,!!c.multiple,m,!1):c.defaultValue!=null&&wt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Do)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)Rp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(za.current),rs(Gi.current),zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[zi]=i,(m=c.nodeValue!==a)&&(n=ti,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[zi]=i,i.stateNode=c}return Dn(i),null;case 13:if(Jt(rn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ni!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lh(),zs(),i.flags|=98560,m=!1;else if(m=zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[zi]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),m=!1}else Ti!==null&&(bu(Ti),Ti=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?mn===0&&(mn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return Ws(),gu(n,i),n===null&&Da(i.stateNode.containerInfo),Dn(i),null;case 10:return Wc(i.type._context),Dn(i),null;case 17:return Xn(i.type)&&Uo(),Dn(i),null;case 19:if(Jt(rn),m=i.memoizedState,m===null)return Dn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Xa(m,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Yo(n),T!==null){for(i.flags|=128,Xa(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Kt(rn,rn.current&1|2),i.child}n=n.sibling}m.tail!==null&&$t()>js&&(i.flags|=128,c=!0,Xa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Xa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!en)return Dn(i),null}else 2*$t()-m.renderingStartTime>js&&a!==1073741824&&(i.flags|=128,c=!0,Xa(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$t(),i.sibling=null,a=rn.current,Kt(rn,c?a&1|2:a&1),i):(Dn(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ii&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function dv(n,i){switch(Bc(i),i.tag){case 1:return Xn(i.type)&&Uo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ws(),Jt(Wn),Jt(Ln),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(Jt(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(rn),null;case 4:return Ws(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var tl=!1,In=!1,fv=typeof WeakSet=="function"?WeakSet:Set,nt=null;function Ys(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ln(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){ln(n,i,c)}}var Cp=!1;function hv(n,i){if(Cc=yo,n=oh(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,O=-1,W=-1,ve=0,be=0,Le=n,Te=null;t:for(;;){for(var Qe;Le!==a||d!==0&&Le.nodeType!==3||(O=T+d),Le!==m||c!==0&&Le.nodeType!==3||(W=T+c),Le.nodeType===3&&(T+=Le.nodeValue.length),(Qe=Le.firstChild)!==null;)Te=Le,Le=Qe;for(;;){if(Le===n)break t;if(Te===a&&++ve===d&&(O=T),Te===m&&++be===c&&(W=T),(Qe=Le.nextSibling)!==null)break;Le=Te,Te=Le.parentNode}Le=Qe}a=O===-1||W===-1?null:{start:O,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},yo=!1,nt=i;nt!==null;)if(i=nt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,nt=n;else for(;nt!==null;){i=nt;try{var st=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var at=st.memoizedProps,dn=st.memoizedState,ce=i.stateNode,$=ce.getSnapshotBeforeUpdate(i.elementType===i.type?at:Ai(i.type,at),dn);ce.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){ln(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,nt=n;break}nt=i.return}return st=Cp,Cp=!1,st}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&vu(i,a,m)}d=d.next}while(d!==c)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Pp(n){var i=n.alternate;i!==null&&(n.alternate=null,Pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[zi],delete i[Ua],delete i[Ic],delete i[K0],delete i[$0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lp(n){return n.tag===5||n.tag===3||n.tag===4}function Np(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Do));else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}var bn=null,bi=!1;function Ur(n,i,a){for(a=a.child;a!==null;)Dp(n,i,a),a=a.sibling}function Dp(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:In||Ys(a,i);case 6:var c=bn,d=bi;bn=null,Ur(n,i,a),bn=c,bi=d,bn!==null&&(bi?(n=bn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):bn.removeChild(a.stateNode));break;case 18:bn!==null&&(bi?(n=bn,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),wa(n)):Dc(bn,a.stateNode));break;case 4:c=bn,d=bi,bn=a.stateNode.containerInfo,bi=!0,Ur(n,i,a),bn=c,bi=d;break;case 0:case 11:case 14:case 15:if(!In&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&vu(a,i,T),d=d.next}while(d!==c)}Ur(n,i,a);break;case 1:if(!In&&(Ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){ln(a,i,O)}Ur(n,i,a);break;case 21:Ur(n,i,a);break;case 22:a.mode&1?(In=(c=In)||a.memoizedState!==null,Ur(n,i,a),In=c):Ur(n,i,a);break;default:Ur(n,i,a)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new fv),i.forEach(function(c){var d=Mv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ri(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:bn=O.stateNode,bi=!1;break e;case 3:bn=O.stateNode.containerInfo,bi=!0;break e;case 4:bn=O.stateNode.containerInfo,bi=!0;break e}O=O.return}if(bn===null)throw Error(t(160));Dp(m,T,d),bn=null,bi=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(ve){ln(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Up(i,n),i=i.sibling}function Up(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(i,n),Hi(n),c&4){try{Ya(3,n,n.return),nl(3,n)}catch(at){ln(n,n.return,at)}try{Ya(5,n,n.return)}catch(at){ln(n,n.return,at)}}break;case 1:Ri(i,n),Hi(n),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(Ri(i,n),Hi(n),c&512&&a!==null&&Ys(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch(at){ln(n,n.return,at)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,O=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&bt(d,m),Fe(O,T);var ve=Fe(O,m);for(T=0;T<W.length;T+=2){var be=W[T],Le=W[T+1];be==="style"?Se(d,Le):be==="dangerouslySetInnerHTML"?le(d,Le):be==="children"?he(d,Le):V(d,be,Le,ve)}switch(O){case"input":dt(d,m);break;case"textarea":Yt(d,m);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Qe=m.value;Qe!=null?wt(d,!!m.multiple,Qe,!1):Te!==!!m.multiple&&(m.defaultValue!=null?wt(d,!!m.multiple,m.defaultValue,!0):wt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ua]=m}catch(at){ln(n,n.return,at)}}break;case 6:if(Ri(i,n),Hi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(at){ln(n,n.return,at)}}break;case 3:if(Ri(i,n),Hi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(at){ln(n,n.return,at)}break;case 4:Ri(i,n),Hi(n);break;case 13:Ri(i,n),Hi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Eu=$t())),c&4&&Ip(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(In=(ve=In)||be,Ri(i,n),In=ve):Ri(i,n),Hi(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!be&&(n.mode&1)!==0)for(nt=n,be=n.child;be!==null;){for(Le=nt=be;nt!==null;){switch(Te=nt,Qe=Te.child,Te.tag){case 0:case 11:case 14:case 15:Ya(4,Te,Te.return);break;case 1:Ys(Te,Te.return);var st=Te.stateNode;if(typeof st.componentWillUnmount=="function"){c=Te,a=Te.return;try{i=c,st.props=i.memoizedProps,st.state=i.memoizedState,st.componentWillUnmount()}catch(at){ln(c,a,at)}}break;case 5:Ys(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Bp(Le);continue}}Qe!==null?(Qe.return=Te,nt=Qe):Bp(Le)}be=be.sibling}e:for(be=null,Le=n;;){if(Le.tag===5){if(be===null){be=Le;try{d=Le.stateNode,ve?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Le.stateNode,W=Le.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,O.style.display=xe("display",T))}catch(at){ln(n,n.return,at)}}}else if(Le.tag===6){if(be===null)try{Le.stateNode.nodeValue=ve?"":Le.memoizedProps}catch(at){ln(n,n.return,at)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;be===Le&&(be=null),Le=Le.return}be===Le&&(be=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Ri(i,n),Hi(n),c&4&&Ip(n);break;case 21:break;default:Ri(i,n),Hi(n)}}function Hi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var m=Np(n);Su(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,O=Np(n);xu(n,O,T);break;default:throw Error(t(161))}}catch(W){ln(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function pv(n,i,a){nt=n,Fp(n)}function Fp(n,i,a){for(var c=(n.mode&1)!==0;nt!==null;){var d=nt,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||tl;if(!T){var O=d.alternate,W=O!==null&&O.memoizedState!==null||In;O=tl;var ve=In;if(tl=T,(In=W)&&!ve)for(nt=d;nt!==null;)T=nt,W=T.child,T.tag===22&&T.memoizedState!==null?kp(d):W!==null?(W.return=T,nt=W):kp(d);for(;m!==null;)nt=m,Fp(m),m=m.sibling;nt=d,tl=O,In=ve}Op(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,nt=m):Op(n)}}function Op(n){for(;nt!==null;){var i=nt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||nl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!In)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ai(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Bh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Bh(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var be=ve.memoizedState;if(be!==null){var Le=be.dehydrated;Le!==null&&wa(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&_u(i)}catch(Te){ln(i,i.return,Te)}}if(i===n){nt=null;break}if(a=i.sibling,a!==null){a.return=i.return,nt=a;break}nt=i.return}}function Bp(n){for(;nt!==null;){var i=nt;if(i===n){nt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,nt=a;break}nt=i.return}}function kp(n){for(;nt!==null;){var i=nt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nl(4,i)}catch(W){ln(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){ln(i,d,W)}}var m=i.return;try{_u(i)}catch(W){ln(i,m,W)}break;case 5:var T=i.return;try{_u(i)}catch(W){ln(i,T,W)}}}catch(W){ln(i,i.return,W)}if(i===n){nt=null;break}var O=i.sibling;if(O!==null){O.return=i.return,nt=O;break}nt=i.return}}var mv=Math.ceil,il=C.ReactCurrentDispatcher,yu=C.ReactCurrentOwner,mi=C.ReactCurrentBatchConfig,Bt=0,Mn=null,fn=null,Rn=0,ii=0,qs=Pr(0),mn=0,qa=null,as=0,rl=0,Mu=0,ja=null,qn=null,Eu=0,js=1/0,ur=null,sl=!1,wu=null,Fr=null,al=!1,Or=null,ol=0,Ka=0,Tu=null,ll=-1,cl=0;function Gn(){return(Bt&6)!==0?$t():ll!==-1?ll:ll=$t()}function Br(n){return(n.mode&1)===0?1:(Bt&2)!==0&&Rn!==0?Rn&-Rn:J0.transition!==null?(cl===0&&(cl=kt()),cl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Gf(n.type)),n)}function Ci(n,i,a,c){if(50<Ka)throw Ka=0,Tu=null,Error(t(185));Ht(n,a,c),((Bt&2)===0||n!==Mn)&&(n===Mn&&((Bt&2)===0&&(rl|=a),mn===4&&kr(n,Rn)),jn(n,c),a===1&&Bt===0&&(i.mode&1)===0&&(js=$t()+500,Oo&&Nr()))}function jn(n,i){var a=n.callbackNode;yt(n,i);var c=lt(n,n===Mn?Rn:0);if(c===0)a!==null&&tr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&tr(a),i===1)n.tag===0?Z0(Gp.bind(null,n)):Ah(Gp.bind(null,n)),q0(function(){(Bt&6)===0&&Nr()}),a=null;else{switch(Qn(c)){case 1:a=nr;break;case 4:a=Er;break;case 16:a=A;break;case 536870912:a=pe;break;default:a=A}a=Kp(a,zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zp(n,i){if(ll=-1,cl=0,(Bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var c=lt(n,n===Mn?Rn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ul(n,c);else{i=c;var d=Bt;Bt|=2;var m=Hp();(Mn!==n||Rn!==i)&&(ur=null,js=$t()+500,ls(n,i));do try{_v();break}catch(O){Vp(n,O)}while(!0);Hc(),il.current=m,Bt=d,fn!==null?i=0:(Mn=null,Rn=0,i=mn)}if(i!==0){if(i===2&&(d=gt(n),d!==0&&(c=d,i=Au(n,d))),i===1)throw a=qa,ls(n,0),kr(n,c),jn(n,$t()),a;if(i===6)kr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!gv(d)&&(i=ul(n,c),i===2&&(m=gt(n),m!==0&&(c=m,i=Au(n,m))),i===1))throw a=qa,ls(n,0),kr(n,c),jn(n,$t()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(n,qn,ur);break;case 3:if(kr(n,c),(c&130023424)===c&&(i=Eu+500-$t(),10<i)){if(lt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Nc(cs.bind(null,n,qn,ur),i);break}cs(n,qn,ur);break;case 4:if(kr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ve(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mv(c/1960))-c,10<c){n.timeoutHandle=Nc(cs.bind(null,n,qn,ur),c);break}cs(n,qn,ur);break;case 5:cs(n,qn,ur);break;default:throw Error(t(329))}}}return jn(n,$t()),n.callbackNode===a?zp.bind(null,n):null}function Au(n,i){var a=ja;return n.current.memoizedState.isDehydrated&&(ls(n,i).flags|=256),n=ul(n,i),n!==2&&(i=qn,qn=a,i!==null&&bu(i)),n}function bu(n){qn===null?qn=n:qn.push.apply(qn,n)}function gv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!wi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function kr(n,i){for(i&=~Mu,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function Gp(n){if((Bt&6)!==0)throw Error(t(327));Ks();var i=lt(n,0);if((i&1)===0)return jn(n,$t()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var c=gt(n);c!==0&&(i=c,a=Au(n,c))}if(a===1)throw a=qa,ls(n,0),kr(n,i),jn(n,$t()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,cs(n,qn,ur),jn(n,$t()),null}function Ru(n,i){var a=Bt;Bt|=1;try{return n(i)}finally{Bt=a,Bt===0&&(js=$t()+500,Oo&&Nr())}}function os(n){Or!==null&&Or.tag===0&&(Bt&6)===0&&Ks();var i=Bt;Bt|=1;var a=mi.transition,c=Mt;try{if(mi.transition=null,Mt=1,n)return n()}finally{Mt=c,mi.transition=a,Bt=i,(Bt&6)===0&&Nr()}}function Cu(){ii=qs.current,Jt(qs)}function ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Y0(a)),fn!==null)for(a=fn.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Uo();break;case 3:Ws(),Jt(Wn),Jt(Ln),Zc();break;case 5:Kc(c);break;case 4:Ws();break;case 13:Jt(rn);break;case 19:Jt(rn);break;case 10:Wc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(Mn=n,fn=n=zr(n.current,null),Rn=ii=i,mn=0,qa=null,Mu=rl=as=0,qn=ja=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}is=null}return n}function Vp(n,i){do{var a=fn;try{if(Hc(),qo.current=Zo,jo){for(var c=sn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}jo=!1}if(ss=0,yn=pn=sn=null,Ga=!1,Va=0,yu.current=null,a===null||a.return===null){mn=1,qa=i,fn=null;break}e:{var m=n,T=a.return,O=a,W=i;if(i=Rn,O.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ve=W,be=O,Le=be.tag;if((be.mode&1)===0&&(Le===0||Le===11||Le===15)){var Te=be.alternate;Te?(be.updateQueue=Te.updateQueue,be.memoizedState=Te.memoizedState,be.lanes=Te.lanes):(be.updateQueue=null,be.memoizedState=null)}var Qe=hp(T);if(Qe!==null){Qe.flags&=-257,pp(Qe,T,O,m,i),Qe.mode&1&&fp(m,ve,i),i=Qe,W=ve;var st=i.updateQueue;if(st===null){var at=new Set;at.add(W),i.updateQueue=at}else st.add(W);break e}else{if((i&1)===0){fp(m,ve,i),Pu();break e}W=Error(t(426))}}else if(en&&O.mode&1){var dn=hp(T);if(dn!==null){(dn.flags&65536)===0&&(dn.flags|=256),pp(dn,T,O,m,i),Gc(Xs(W,O));break e}}m=W=Xs(W,O),mn!==4&&(mn=2),ja===null?ja=[m]:ja.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ce=up(m,W,i);Oh(m,ce);break e;case 1:O=W;var $=m.type,de=m.stateNode;if((m.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Fr===null||!Fr.has(de)))){m.flags|=65536,i&=-i,m.lanes|=i;var De=dp(m,O,i);Oh(m,De);break e}}m=m.return}while(m!==null)}Xp(a)}catch(ot){i=ot,fn===a&&a!==null&&(fn=a=a.return);continue}break}while(!0)}function Hp(){var n=il.current;return il.current=Zo,n===null?Zo:n}function Pu(){(mn===0||mn===3||mn===2)&&(mn=4),Mn===null||(as&268435455)===0&&(rl&268435455)===0||kr(Mn,Rn)}function ul(n,i){var a=Bt;Bt|=2;var c=Hp();(Mn!==n||Rn!==i)&&(ur=null,ls(n,i));do try{vv();break}catch(d){Vp(n,d)}while(!0);if(Hc(),Bt=a,il.current=c,fn!==null)throw Error(t(261));return Mn=null,Rn=0,mn}function vv(){for(;fn!==null;)Wp(fn)}function _v(){for(;fn!==null&&!bs();)Wp(fn)}function Wp(n){var i=jp(n.alternate,n,ii);n.memoizedProps=n.pendingProps,i===null?Xp(n):fn=i,yu.current=null}function Xp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=uv(a,i,ii),a!==null){fn=a;return}}else{if(a=dv(a,i),a!==null){a.flags&=32767,fn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=n}while(i!==null);mn===0&&(mn=5)}function cs(n,i,a){var c=Mt,d=mi.transition;try{mi.transition=null,Mt=1,xv(n,i,a,c)}finally{mi.transition=d,Mt=c}return null}function xv(n,i,a,c){do Ks();while(Or!==null);if((Bt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Nt(n,m),n===Mn&&(fn=Mn=null,Rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,Kp(A,function(){return Ks(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=mi.transition,mi.transition=null;var T=Mt;Mt=1;var O=Bt;Bt|=4,yu.current=null,hv(n,a),Up(a,n),k0(Pc),yo=!!Cc,Pc=Cc=null,n.current=a,pv(a),Jr(),Bt=O,Mt=T,mi.transition=m}else n.current=a;if(al&&(al=!1,Or=n,ol=d),m=n.pendingLanes,m===0&&(Fr=null),We(a.stateNode),jn(n,$t()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(sl)throw sl=!1,n=wu,wu=null,n;return(ol&1)!==0&&n.tag!==0&&Ks(),m=n.pendingLanes,(m&1)!==0?n===Tu?Ka++:(Ka=0,Tu=n):Ka=0,Nr(),null}function Ks(){if(Or!==null){var n=Qn(ol),i=mi.transition,a=Mt;try{if(mi.transition=null,Mt=16>n?16:n,Or===null)var c=!1;else{if(n=Or,Or=null,ol=0,(Bt&6)!==0)throw Error(t(331));var d=Bt;for(Bt|=4,nt=n.current;nt!==null;){var m=nt,T=m.child;if((nt.flags&16)!==0){var O=m.deletions;if(O!==null){for(var W=0;W<O.length;W++){var ve=O[W];for(nt=ve;nt!==null;){var be=nt;switch(be.tag){case 0:case 11:case 15:Ya(8,be,m)}var Le=be.child;if(Le!==null)Le.return=be,nt=Le;else for(;nt!==null;){be=nt;var Te=be.sibling,Qe=be.return;if(Pp(be),be===ve){nt=null;break}if(Te!==null){Te.return=Qe,nt=Te;break}nt=Qe}}}var st=m.alternate;if(st!==null){var at=st.child;if(at!==null){st.child=null;do{var dn=at.sibling;at.sibling=null,at=dn}while(at!==null)}}nt=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,nt=T;else e:for(;nt!==null;){if(m=nt,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ya(9,m,m.return)}var ce=m.sibling;if(ce!==null){ce.return=m.return,nt=ce;break e}nt=m.return}}var $=n.current;for(nt=$;nt!==null;){T=nt;var de=T.child;if((T.subtreeFlags&2064)!==0&&de!==null)de.return=T,nt=de;else e:for(T=$;nt!==null;){if(O=nt,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:nl(9,O)}}catch(ot){ln(O,O.return,ot)}if(O===T){nt=null;break e}var De=O.sibling;if(De!==null){De.return=O.return,nt=De;break e}nt=O.return}}if(Bt=d,Nr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{Mt=a,mi.transition=i}}return!1}function Yp(n,i,a){i=Xs(a,i),i=up(n,i,1),n=Ir(n,i,1),i=Gn(),n!==null&&(Ht(n,1,i),jn(n,i))}function ln(n,i,a){if(n.tag===3)Yp(n,n,a);else for(;i!==null;){if(i.tag===3){Yp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Fr===null||!Fr.has(c))){n=Xs(a,n),n=dp(i,n,1),i=Ir(i,n,1),n=Gn(),i!==null&&(Ht(i,1,n),jn(i,n));break}}i=i.return}}function Sv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,Mn===n&&(Rn&a)===a&&(mn===4||mn===3&&(Rn&130023424)===Rn&&500>$t()-Eu?ls(n,0):Mu|=a),jn(n,i)}function qp(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=Gn();n=or(n,i),n!==null&&(Ht(n,i,a),jn(n,a))}function yv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),qp(n,a)}function Mv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),qp(n,a)}var jp;jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wn.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,cv(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,en&&(i.flags&1048576)!==0&&bh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;el(n,i),n=i.pendingProps;var d=Os(i,Ln.current);Hs(i,a),d=eu(null,i,c,n,d,a);var m=tu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xn(c)?(m=!0,Fo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,qc(i),d.updater=Jo,i.stateNode=d,d._reactInternals=i,ou(i,c,n,a),i=du(null,i,c,!0,m,a)):(i.tag=0,en&&m&&Oc(i),zn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(el(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=wv(c),n=Ai(c,n),d){case 0:i=uu(null,i,c,n,a);break e;case 1:i=Sp(null,i,c,n,a);break e;case 11:i=mp(null,i,c,n,a);break e;case 14:i=gp(null,i,c,Ai(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),uu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Sp(n,i,c,d,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Fh(n,i),Xo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Xs(Error(t(423)),i),i=Mp(n,i,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),i),i=Mp(n,i,c,a,d);break e}else for(ni=Cr(i.stateNode.containerInfo.firstChild),ti=i,en=!0,Ti=null,a=Ih(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===d){i=cr(n,i,a);break e}zn(n,i,c,a)}i=i.child}return i;case 5:return kh(i),n===null&&zc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Lc(c,d)?T=null:m!==null&&Lc(c,m)&&(i.flags|=32),xp(n,i),zn(n,i,T,a),i.child;case 6:return n===null&&zc(i),null;case 13:return Ep(n,i,a);case 4:return jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):zn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),mp(n,i,c,d,a);case 7:return zn(n,i,i.pendingProps,a),i.child;case 8:return zn(n,i,i.pendingProps.children,a),i.child;case 12:return zn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Kt(Vo,c._currentValue),c._currentValue=T,m!==null)if(wi(m.value,T)){if(m.children===d.children&&!Wn.current){i=cr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){T=m.child;for(var W=O.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=lr(-1,a&-a),W.tag=2;var ve=m.updateQueue;if(ve!==null){ve=ve.shared;var be=ve.pending;be===null?W.next=W:(W.next=be.next,be.next=W),ve.pending=W}}m.lanes|=a,W=m.alternate,W!==null&&(W.lanes|=a),Xc(m.return,a,i),O.lanes|=a;break}W=W.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),Xc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}zn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Hs(i,a),d=hi(d),c=c(d),i.flags|=1,zn(n,i,c,a),i.child;case 14:return c=i.type,d=Ai(c,i.pendingProps),d=Ai(c.type,d),gp(n,i,c,d,a);case 15:return vp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),el(n,i),i.tag=1,Xn(c)?(n=!0,Fo(i)):n=!1,Hs(i,a),lp(i,c,d),ou(i,c,d,a),du(null,i,c,!0,n,a);case 19:return Tp(n,i,a);case 22:return _p(n,i,a)}throw Error(t(156,i.tag))};function Kp(n,i){return er(n,i)}function Ev(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,a,c){return new Ev(n,i,a,c)}function Lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wv(n){if(typeof n=="function")return Lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===ee)return 14}return 2}function zr(n,i){var a=n.alternate;return a===null?(a=gi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Lu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case B:return us(a.children,d,m,i);case E:T=8,d|=8;break;case L:return n=gi(12,a,i,d|2),n.elementType=L,n.lanes=m,n;case ne:return n=gi(13,a,i,d),n.elementType=ne,n.lanes=m,n;case H:return n=gi(19,a,i,d),n.elementType=H,n.lanes=m,n;case re:return fl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:T=10;break e;case Y:T=9;break e;case Z:T=11;break e;case ee:T=14;break e;case ge:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function us(n,i,a,c){return n=gi(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=gi(22,n,c,i),n.elementType=re,n.lanes=a,n.stateNode={isHidden:!1},n}function Nu(n,i,a){return n=gi(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Be(0),this.expirationTimes=Be(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Iu(n,i,a,c,d,m,T,O,W){return n=new Tv(n,i,a,O,W),i===1?(i=1,m===!0&&(i|=8)):i=0,m=gi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(m),n}function Av(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function $p(n){if(!n)return Lr;n=n._reactInternals;e:{if(Lt(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xn(a))return wh(n,a,i)}return i}function Zp(n,i,a,c,d,m,T,O,W){return n=Iu(a,c,!0,n,d,m,T,O,W),n.context=$p(null),a=n.current,c=Gn(),d=Br(a),m=lr(c,d),m.callback=i??null,Ir(a,m,d),n.current.lanes=d,Ht(n,d,c),jn(n,c),n}function hl(n,i,a,c){var d=i.current,m=Gn(),T=Br(d);return a=$p(a),i.context===null?i.context=a:i.pendingContext=a,i=lr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ir(d,i,T),n!==null&&(Ci(n,d,T,m),Wo(n,d,T)),T}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uu(n,i){Jp(n,i),(n=n.alternate)&&Jp(n,i)}function bv(){return null}var Qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fu(n){this._internalRoot=n}ml.prototype.render=Fu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=Fu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){hl(null,n,null,null)}),i[ir]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=yi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ar.length&&i!==0&&i<Ar[a].priority;a++);Ar.splice(a,0,n),a===0&&kf(n)}};function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function Rv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ve=pl(T);m.call(ve)}}var T=Zp(i,c,n,0,null,!1,!1,"",em);return n._reactRootContainer=T,n[ir]=T.current,Da(n.nodeType===8?n.parentNode:n),os(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var ve=pl(W);O.call(ve)}}var W=Iu(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=W,n[ir]=W.current,Da(n.nodeType===8?n.parentNode:n),os(function(){hl(i,W,a,c)}),W}function vl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var O=d;d=function(){var W=pl(T);O.call(W)}}hl(i,T,n,d)}else T=Rv(a,i,n,d,c);return pl(T)}Si=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ne(i.pendingLanes);a!==0&&(Sn(i,a|1),jn(i,$t()),(Bt&6)===0&&(js=$t()+500,Nr()))}break;case 13:os(function(){var c=or(n,1);if(c!==null){var d=Gn();Ci(c,n,1,d)}}),Uu(n,1)}},It=function(n){if(n.tag===13){var i=or(n,134217728);if(i!==null){var a=Gn();Ci(i,n,134217728,a)}Uu(n,134217728)}},Qt=function(n){if(n.tag===13){var i=Br(n),a=or(n,i);if(a!==null){var c=Gn();Ci(a,n,i,c)}Uu(n,i)}},yi=function(){return Mt},Wt=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},ye=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Io(c);if(!d)throw Error(t(90));Ce(c),dt(c,d)}}}break;case"textarea":Yt(n,a);break;case"select":i=a.value,i!=null&&wt(n,!!a.multiple,i,!1)}},Oe=Ru,Me=os;var Cv={usingClientEntryPoint:!1,Events:[Fa,Us,Io,_e,Ee,Ru]},$a={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pv={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ki(n),n===null?null:n.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{ae=_l.inject(Pv),se=_l}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv,Kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(t(200));return Av(n,i,null,a)},Kn.createRoot=function(n,i){if(!Ou(n))throw Error(t(299));var a=!1,c="",d=Qp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Iu(n,1,!1,null,null,a,!1,c,d),n[ir]=i.current,Da(n.nodeType===8?n.parentNode:n),new Fu(i)},Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ki(i),n=n===null?null:n.stateNode,n},Kn.flushSync=function(n){return os(n)},Kn.hydrate=function(n,i,a){if(!gl(i))throw Error(t(200));return vl(null,n,i,!0,a)},Kn.hydrateRoot=function(n,i,a){if(!Ou(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=Qp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Zp(i,null,n,1,a??null,d,!1,m,T),n[ir]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ml(i)},Kn.render=function(n,i,a){if(!gl(i))throw Error(t(200));return vl(null,n,i,!1,a)},Kn.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(os(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[ir]=null})}),!0):!1},Kn.unstable_batchedUpdates=Ru,Kn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,a,!1,c)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var lm;function kv(){if(lm)return zu.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=Bv(),zu.exports}var cm;function zv(){if(cm)return xl;cm=1;var s=kv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var Gv=zv();const Vv=hg(Gv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="186",Hv=0,um=1,Wv=2,Yl=1,Xv=2,ao=3,ys=0,Jn=1,ji=2,_r=0,lo=1,Yi=2,dm=3,fm=4,Yv=5,ua=100,qv=101,jv=102,Kv=103,$v=104,Zv=200,Jv=201,Qv=202,e_=203,pg=204,mg=205,t_=206,n_=207,i_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,Td=0,Ad=1,bd=2,uo=3,Rd=4,Cd=5,Pd=6,Ld=7,gg=0,u_=1,d_=2,Zi=0,vg=1,_g=2,xg=3,vf=4,Sg=5,yg=6,Mg=7,Eg=300,Ms=301,pa=302,Hu=303,Wu=304,ac=306,Es=1e3,vr=1001,Nd=1002,Cn=1003,f_=1004,Sl=1005,On=1006,Xu=1007,xs=1008,oi=1009,wg=1010,Tg=1011,fo=1012,_f=1013,Ji=1014,Ki=1015,Qi=1016,xf=1017,Sf=1018,ho=1020,Ag=35902,bg=35899,Rg=1021,Cg=1022,Ii=1023,Sr=1026,Ss=1027,Pg=1028,yf=1029,ws=1030,Mf=1031,Ef=1033,ql=33776,jl=33777,Kl=33778,$l=33779,Dd=35840,Id=35841,Ud=35842,Fd=35843,Od=36196,Bd=37492,kd=37496,zd=37488,Gd=37489,Jl=37490,Vd=37491,Hd=37808,Wd=37809,Xd=37810,Yd=37811,qd=37812,jd=37813,Kd=37814,$d=37815,Zd=37816,Jd=37817,Qd=37818,ef=37819,tf=37820,nf=37821,rf=36492,sf=36494,af=36495,of=36283,lf=36284,Ql=36285,cf=36286,h_=3200,uf=0,p_=1,jr="",xi="srgb",ec="srgb-linear",tc="linear",Xt="srgb",Yu=7680,m_=519,g_=512,v_=513,__=514,wf=515,x_=516,S_=517,Tf=518,y_=519,M_=35044,hm="300 es",$i=2e3,po=2001;function E_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function w_(){const s=nc("canvas");return s.style.display="block",s}const pm={};function mm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function mt(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Gt(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fa(...s){const e=s.join(" ");e in pm||(pm[e]=!0,mt(...s))}function T_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const A_={[Td]:Ad,[bd]:Pd,[Rd]:Ld,[uo]:Cd,[Ad]:Td,[Pd]:bd,[Ld]:Rd,[Cd]:uo};class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=Math.PI/180,df=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function b_(s,e){return(s%e+e)%e}function ju(s,e,t){return(1-t)*s+t*e}function Ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Df=class Df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Df.prototype.isVector2=!0;let Ot=Df;class va{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let p=r[o+0],h=r[o+1],_=r[o+2],S=r[o+3],g=l[u+0],M=l[u+1],w=l[u+2],b=l[u+3];if(S!==b||p!==g||h!==M||_!==w){let x=p*g+h*M+_*w+S*b;x<0&&(g=-g,M=-M,w=-w,b=-b,x=-x);let v=1-f;if(x<.9995){const U=Math.acos(x),V=Math.sin(U);v=Math.sin(v*U)/V,f=Math.sin(f*U)/V,p=p*v+g*f,h=h*v+M*f,_=_*v+w*f,S=S*v+b*f}else{p=p*v+g*f,h=h*v+M*f,_=_*v+w*f,S=S*v+b*f;const U=1/Math.sqrt(p*p+h*h+_*_+S*S);p*=U,h*=U,_*=U,S*=U}}e[t]=p,e[t+1]=h,e[t+2]=_,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],p=r[o+1],h=r[o+2],_=r[o+3],S=l[u],g=l[u+1],M=l[u+2],w=l[u+3];return e[t]=f*w+_*S+p*M-h*g,e[t+1]=p*w+_*g+h*S-f*M,e[t+2]=h*w+_*M+f*g-p*S,e[t+3]=_*w-f*S-p*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(r/2),_=f(o/2),S=f(l/2),g=p(r/2),M=p(o/2),w=p(l/2);switch(u){case"XYZ":this._x=g*_*S+h*M*w,this._y=h*M*S-g*_*w,this._z=h*_*w+g*M*S,this._w=h*_*S-g*M*w;break;case"YXZ":this._x=g*_*S+h*M*w,this._y=h*M*S-g*_*w,this._z=h*_*w-g*M*S,this._w=h*_*S+g*M*w;break;case"ZXY":this._x=g*_*S-h*M*w,this._y=h*M*S+g*_*w,this._z=h*_*w+g*M*S,this._w=h*_*S-g*M*w;break;case"ZYX":this._x=g*_*S-h*M*w,this._y=h*M*S+g*_*w,this._z=h*_*w-g*M*S,this._w=h*_*S+g*M*w;break;case"YZX":this._x=g*_*S+h*M*w,this._y=h*M*S+g*_*w,this._z=h*_*w-g*M*S,this._w=h*_*S-g*M*w;break;case"XZY":this._x=g*_*S-h*M*w,this._y=h*M*S-g*_*w,this._z=h*_*w+g*M*S,this._w=h*_*S+g*M*w;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],_=t[6],S=t[10],g=r+f+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-p)*M,this._y=(l-h)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(_-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+h)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-h)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+h)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,_=t._w;return this._x=r*_+u*f+o*h-l*p,this._y=o*_+u*p+l*f-r*h,this._z=l*_+u*h+r*p-o*f,this._w=u*_-r*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),_=Math.sin(h);p=Math.sin(p*h)/_,t=Math.sin(t*h)/_,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const If=class If{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*r),_=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+p*h+u*S-f*_,this.y=r+p*_+f*h-l*S,this.z=o+p*S+l*_-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};If.prototype.isVector3=!0;let oe=If;const Ku=new oe,gm=new va,Uf=class Uf{constructor(e,t,r,o,l,u,f,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h)}set(e,t,r,o,l,u,f,p,h){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=p,_[6]=r,_[7]=u,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],p=r[6],h=r[1],_=r[4],S=r[7],g=r[2],M=r[5],w=r[8],b=o[0],x=o[3],v=o[6],U=o[1],V=o[4],C=o[7],N=o[2],D=o[5],B=o[8];return l[0]=u*b+f*U+p*N,l[3]=u*x+f*V+p*D,l[6]=u*v+f*C+p*B,l[1]=h*b+_*U+S*N,l[4]=h*x+_*V+S*D,l[7]=h*v+_*C+S*B,l[2]=g*b+M*U+w*N,l[5]=g*x+M*V+w*D,l[8]=g*v+M*C+w*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],_=e[8];return t*u*_-t*f*h-r*l*_+r*f*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],_=e[8],S=_*u-f*h,g=f*p-_*l,M=h*l-u*p,w=t*S+r*g+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(o*h-_*r)*b,e[2]=(f*r-o*u)*b,e[3]=g*b,e[4]=(_*t-o*p)*b,e[5]=(o*l-f*t)*b,e[6]=M*b,e[7]=(r*p-h*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return fa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(e,t)),this}rotate(e){return fa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-e)),this}translate(e,t){return fa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uf.prototype.isMatrix3=!0;let xt=Uf;const $u=new xt,vm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R_(){const s={enabled:!0,workingColorSpace:ec,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Xt&&(o.r=xr(o.r),o.g=xr(o.g),o.b=xr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(o.r=ha(o.r),o.g=ha(o.g),o.b=ha(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?tc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ec]:{primaries:e,whitePoint:r,transfer:tc,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Ut=R_();function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $s;class C_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$s===void 0&&($s=nc("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=$s}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=xr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(xr(t[r]/255)*255):t[r]=xr(t[r]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P_=0;class Af{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Zu(o[u].image)):l.push(Zu(o[u]))}else l=Zu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let L_=0;const Ju=new oe;class Bn extends Ts{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=vr,o=vr,l=On,u=xs,f=Ii,p=oi,h=Bn.DEFAULT_ANISOTROPY,_=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=vo(),this.name="",this.source=new Af(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Eg;Bn.DEFAULT_ANISOTROPY=1;const Ff=class Ff{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],_=p[4],S=p[8],g=p[1],M=p[5],w=p[9],b=p[2],x=p[6],v=p[10];if(Math.abs(_-g)<.01&&Math.abs(S-b)<.01&&Math.abs(w-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+b)<.1&&Math.abs(w+x)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const V=(h+1)/2,C=(M+1)/2,N=(v+1)/2,D=(_+g)/4,B=(S+b)/4,E=(w+x)/4;return V>C&&V>N?V<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(V),o=D/r,l=B/r):C>N?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=D/o,l=E/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=B/l,o=E/l),this.set(r,o,l,t),this}let U=Math.sqrt((x-w)*(x-w)+(S-b)*(S-b)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(x-w)/U,this.y=(S-b)/U,this.z=(g-_)/U,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ff.prototype.isVector4=!0;let an=Ff;class N_ extends Ts{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Bn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Af(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends N_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ng extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,t,r,o,l,u,f,p,h,_,S,g,M,w,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h,_,S,g,M,w,b,x)}set(e,t,r,o,l,u,f,p,h,_,S,g,M,w,b,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=p,v[2]=h,v[6]=_,v[10]=S,v[14]=g,v[3]=M,v[7]=w,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Zs.setFromMatrixColumn(e,0).length(),l=1/Zs.setFromMatrixColumn(e,1).length(),u=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*_,M=u*S,w=f*_,b=f*S;t[0]=p*_,t[4]=-p*S,t[8]=h,t[1]=M+w*h,t[5]=g-b*h,t[9]=-f*p,t[2]=b-g*h,t[6]=w+M*h,t[10]=u*p}else if(e.order==="YXZ"){const g=p*_,M=p*S,w=h*_,b=h*S;t[0]=g+b*f,t[4]=w*f-M,t[8]=u*h,t[1]=u*S,t[5]=u*_,t[9]=-f,t[2]=M*f-w,t[6]=b+g*f,t[10]=u*p}else if(e.order==="ZXY"){const g=p*_,M=p*S,w=h*_,b=h*S;t[0]=g-b*f,t[4]=-u*S,t[8]=w+M*f,t[1]=M+w*f,t[5]=u*_,t[9]=b-g*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const g=u*_,M=u*S,w=f*_,b=f*S;t[0]=p*_,t[4]=w*h-M,t[8]=g*h+b,t[1]=p*S,t[5]=b*h+g,t[9]=M*h-w,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*h,w=f*p,b=f*h;t[0]=p*_,t[4]=b-g*S,t[8]=w*S+M,t[1]=S,t[5]=u*_,t[9]=-f*_,t[2]=-h*_,t[6]=M*S+w,t[10]=g-b*S}else if(e.order==="XZY"){const g=u*p,M=u*h,w=f*p,b=f*h;t[0]=p*_,t[4]=-S,t[8]=h*_,t[1]=g*S+b,t[5]=u*_,t[9]=M*S-w,t[2]=w*S-M,t[6]=f*_,t[10]=b*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,r){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Vr.crossVectors(r,ri),Vr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Vr.crossVectors(r,ri)),Vr.normalize(),yl.crossVectors(ri,Vr),o[0]=Vr.x,o[4]=yl.x,o[8]=ri.x,o[1]=Vr.y,o[5]=yl.y,o[9]=ri.y,o[2]=Vr.z,o[6]=yl.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],p=r[8],h=r[12],_=r[1],S=r[5],g=r[9],M=r[13],w=r[2],b=r[6],x=r[10],v=r[14],U=r[3],V=r[7],C=r[11],N=r[15],D=o[0],B=o[4],E=o[8],L=o[12],z=o[1],Y=o[5],Z=o[9],ne=o[13],H=o[2],ee=o[6],ge=o[10],re=o[14],q=o[3],Q=o[7],te=o[11],I=o[15];return l[0]=u*D+f*z+p*H+h*q,l[4]=u*B+f*Y+p*ee+h*Q,l[8]=u*E+f*Z+p*ge+h*te,l[12]=u*L+f*ne+p*re+h*I,l[1]=_*D+S*z+g*H+M*q,l[5]=_*B+S*Y+g*ee+M*Q,l[9]=_*E+S*Z+g*ge+M*te,l[13]=_*L+S*ne+g*re+M*I,l[2]=w*D+b*z+x*H+v*q,l[6]=w*B+b*Y+x*ee+v*Q,l[10]=w*E+b*Z+x*ge+v*te,l[14]=w*L+b*ne+x*re+v*I,l[3]=U*D+V*z+C*H+N*q,l[7]=U*B+V*Y+C*ee+N*Q,l[11]=U*E+V*Z+C*ge+N*te,l[15]=U*L+V*ne+C*re+N*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],_=e[2],S=e[6],g=e[10],M=e[14],w=e[3],b=e[7],x=e[11],v=e[15],U=p*M-h*g,V=f*M-h*S,C=f*g-p*S,N=u*M-h*_,D=u*g-p*_,B=u*S-f*_;return t*(b*U-x*V+v*C)-r*(w*U-x*N+v*D)+o*(w*V-b*N+v*B)-l*(w*C-b*D+x*B)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],p=e[2],h=e[6],_=e[10];return t*(u*_-f*h)-r*(l*_-f*p)+o*(l*h-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],_=e[8],S=e[9],g=e[10],M=e[11],w=e[12],b=e[13],x=e[14],v=e[15],U=t*f-r*u,V=t*p-o*u,C=t*h-l*u,N=r*p-o*f,D=r*h-l*f,B=o*h-l*p,E=_*b-S*w,L=_*x-g*w,z=_*v-M*w,Y=S*x-g*b,Z=S*v-M*b,ne=g*v-M*x,H=U*ne-V*Z+C*Y+N*z-D*L+B*E;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/H;return e[0]=(f*ne-p*Z+h*Y)*ee,e[1]=(o*Z-r*ne-l*Y)*ee,e[2]=(b*B-x*D+v*N)*ee,e[3]=(g*D-S*B-M*N)*ee,e[4]=(p*z-u*ne-h*L)*ee,e[5]=(t*ne-o*z+l*L)*ee,e[6]=(x*C-w*B-v*V)*ee,e[7]=(_*B-g*C+M*V)*ee,e[8]=(u*Z-f*z+h*E)*ee,e[9]=(r*z-t*Z-l*E)*ee,e[10]=(w*D-b*C+v*U)*ee,e[11]=(S*C-_*D-M*U)*ee,e[12]=(f*L-u*Y-p*E)*ee,e[13]=(t*Y-r*L+o*E)*ee,e[14]=(b*V-w*N-x*U)*ee,e[15]=(_*N-S*V+g*U)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,p=e.z,h=l*u,_=l*f;return this.set(h*u+r,h*f-o*p,h*p+o*f,0,h*f+o*p,_*f+r,_*p-o*u,0,h*p-o*f,_*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,_=u+u,S=f+f,g=l*h,M=l*_,w=l*S,b=u*_,x=u*S,v=f*S,U=p*h,V=p*_,C=p*S,N=r.x,D=r.y,B=r.z;return o[0]=(1-(b+v))*N,o[1]=(M+C)*N,o[2]=(w-V)*N,o[3]=0,o[4]=(M-C)*D,o[5]=(1-(g+v))*D,o[6]=(x+U)*D,o[7]=0,o[8]=(w+V)*B,o[9]=(x-U)*B,o[10]=(1-(g+b))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Zs.set(o[0],o[1],o[2]).length();const f=Zs.set(o[4],o[5],o[6]).length(),p=Zs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Pi.copy(this);const h=1/u,_=1/f,S=1/p;return Pi.elements[0]*=h,Pi.elements[1]*=h,Pi.elements[2]*=h,Pi.elements[4]*=_,Pi.elements[5]*=_,Pi.elements[6]*=_,Pi.elements[8]*=S,Pi.elements[9]*=S,Pi.elements[10]*=S,t.setFromRotationMatrix(Pi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,u,f=$i,p=!1){const h=this.elements,_=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let w,b;if(p)w=l/(u-l),b=u*l/(u-l);else if(f===$i)w=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===po)w=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=$i,p=!1){const h=this.elements,_=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let w,b;if(p)w=1/(u-l),b=u/(u-l);else if(f===$i)w=-2/(u-l),b=-(u+l)/(u-l);else if(f===po)w=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=w,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let tn=sc;const Zs=new oe,Pi=new tn,I_=new oe(0,0,0),U_=new oe(1,1,1),Vr=new oe,yl=new oe,ri=new oe,xm=new tn,Sm=new va;class $r{constructor(e=0,t=0,r=0,o=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],h=o[5],_=o[9],S=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ft(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class Dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const ym=new oe,Js=new va,dr=new tn,Ml=new oe,Qa=new oe,O_=new oe,B_=new va,Mm=new oe(1,0,0),Em=new oe(0,1,0),wm=new oe(0,0,1),Tm={type:"added"},k_={type:"removed"},Qs={type:"childadded",child:null},Qu={type:"childremoved",child:null};class Tn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new oe,t=new $r,r=new va,o=new oe(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new xt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Qa,Ml,this.up):dr.lookAt(Ml,Qa,this.up),this.quaternion.setFromRotationMatrix(dr),o&&(dr.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(dr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k_),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,O_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,_=p.length;h<_;h++){const S=p[h];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),_=u(e.images),S=u(e.shapes),g=u(e.skeletons),M=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const p=[];for(const h in f){const _=f[h];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tn.DEFAULT_UP=new oe(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,r),v=this._getHandJoint(h,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,w=.005;h.inputState.pinching&&g>M+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new gn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},El={h:0,s:0,l:0};function td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=b_(e,1),t=Ft(t,0,1),r=Ft(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=td(u,l,e+1/3),this.g=td(u,l,e),this.b=td(u,l,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ut.workingToColorSpace(Fn.copy(this),e),Math.round(Ft(Fn.r*255,0,255))*65536+Math.round(Ft(Fn.g*255,0,255))*256+Math.round(Ft(Fn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,o=Fn.g,l=Fn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,h;const _=(f+u)/2;if(f===u)p=0,h=0;else{const S=u-f;switch(h=_<=.5?S/(u+f):S/(2-u-f),u){case r:p=(o-l)/S+(o<l?6:0);break;case o:p=(l-r)/S+2;break;case l:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=h,e.l=_,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=xi){Ut.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,o=Fn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(El);const r=ju(Hr.h,El.h,t),o=ju(Hr.s,El.s,t),l=ju(Hr.l,El.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Rt;Rt.NAMES=Ig;class bf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(e),this.density=t}clone(){return new bf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class G_ extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new oe,fr=new oe,nd=new oe,hr=new oe,ea=new oe,ta=new oe,Am=new oe,id=new oe,rd=new oe,sd=new oe,ad=new an,od=new an,ld=new an;class Di{constructor(e=new oe,t=new oe,r=new oe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Li.subVectors(e,t),o.cross(Li);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Li.subVectors(o,t),fr.subVectors(r,t),nd.subVectors(e,t);const u=Li.dot(Li),f=Li.dot(fr),p=Li.dot(nd),h=fr.dot(fr),_=fr.dot(nd),S=u*h-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,M=(h*p-f*_)*g,w=(u*_-f*p)*g;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,r,o,l,u,f,p){return this.getBarycoord(e,t,r,o,hr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,hr.x),p.addScaledVector(u,hr.y),p.addScaledVector(f,hr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ad,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,t,r,o){return Li.subVectors(r,t),fr.subVectors(e,t),Li.cross(fr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Li.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ea.subVectors(o,r),ta.subVectors(l,r),id.subVectors(e,r);const p=ea.dot(id),h=ta.dot(id);if(p<=0&&h<=0)return t.copy(r);rd.subVectors(e,o);const _=ea.dot(rd),S=ta.dot(rd);if(_>=0&&S<=_)return t.copy(o);const g=p*S-_*h;if(g<=0&&p>=0&&_<=0)return u=p/(p-_),t.copy(r).addScaledVector(ea,u);sd.subVectors(e,l);const M=ea.dot(sd),w=ta.dot(sd);if(w>=0&&M<=w)return t.copy(l);const b=M*h-p*w;if(b<=0&&h>=0&&w<=0)return f=h/(h-w),t.copy(r).addScaledVector(ta,f);const x=_*w-M*S;if(x<=0&&S-_>=0&&M-w>=0)return Am.subVectors(l,o),f=(S-_)/(S-_+(M-w)),t.copy(o).addScaledVector(Am,f);const v=1/(x+b+g);return u=b*v,f=g*v,t.copy(r).addScaledVector(ea,u).addScaledVector(ta,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _o{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ni):Ni.fromBufferAttribute(l,u),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wl.copy(r.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Tl.subVectors(this.max,eo),na.subVectors(e.a,eo),ia.subVectors(e.b,eo),ra.subVectors(e.c,eo),Wr.subVectors(ia,na),Xr.subVectors(ra,ia),ds.subVectors(na,ra);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-ds.z,ds.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,ds.z,0,-ds.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-ds.y,ds.x,0];return!cd(t,na,ia,ra,Tl)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,na,ia,ra,Tl))?!1:(Al.crossVectors(Wr,Xr),t=[Al.x,Al.y,Al.z],cd(t,na,ia,ra,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ni=new oe,wl=new _o,na=new oe,ia=new oe,ra=new oe,Wr=new oe,Xr=new oe,ds=new oe,eo=new oe,Tl=new oe,Al=new oe,fs=new oe;function cd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){fs.fromArray(s,l);const f=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),p=e.dot(fs),h=t.dot(fs),_=r.dot(fs);if(Math.max(-Math.max(p,h,_),Math.min(p,h,_))>f)return!1}return!0}const hn=new oe,bl=new Ot;let V_=0;class Fi extends Ts{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=M_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),o=$n(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),o=$n(o,this.array),l=$n(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ug extends Fi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Fg extends Fi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class un extends Fi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const H_=new _o,to=new oe,ud=new oe;class xo{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):H_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(ud)),this.expandByPoint(to.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let W_=0;const vi=new tn,dd=new Tn,sa=new oe,si=new _o,no=new _o,wn=new oe;class Pn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?Fg:Ug)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];si.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(si.min,no.min),si.expandByPoint(wn),wn.addVectors(si.max,no.max),si.expandByPoint(wn)):(si.expandByPoint(no.min),si.expandByPoint(no.max))}si.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)wn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(wn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,_=f.count;h<_;h++)wn.fromBufferAttribute(f,h),p&&(sa.fromBufferAttribute(e,h),wn.add(sa)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Fi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],p=[];for(let E=0;E<r.count;E++)f[E]=new oe,p[E]=new oe;const h=new oe,_=new oe,S=new oe,g=new Ot,M=new Ot,w=new Ot,b=new oe,x=new oe;function v(E,L,z){h.fromBufferAttribute(r,E),_.fromBufferAttribute(r,L),S.fromBufferAttribute(r,z),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,L),w.fromBufferAttribute(l,z),_.sub(h),S.sub(h),M.sub(g),w.sub(g);const Y=1/(M.x*w.y-w.x*M.y);isFinite(Y)&&(b.copy(_).multiplyScalar(w.y).addScaledVector(S,-M.y).multiplyScalar(Y),x.copy(S).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(Y),f[E].add(b),f[L].add(b),f[z].add(b),p[E].add(x),p[L].add(x),p[z].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,L=U.length;E<L;++E){const z=U[E],Y=z.start,Z=z.count;for(let ne=Y,H=Y+Z;ne<H;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const V=new oe,C=new oe,N=new oe,D=new oe;function B(E){N.fromBufferAttribute(o,E),D.copy(N);const L=f[E];V.copy(L),V.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(D,L);const Y=C.dot(p[E])<0?-1:1;u.setXYZW(E,V.x,V.y,V.z,Y)}for(let E=0,L=U.length;E<L;++E){const z=U[E],Y=z.start,Z=z.count;for(let ne=Y,H=Y+Z;ne<H;ne+=3)B(e.getX(ne+0)),B(e.getX(ne+1)),B(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new oe,l=new oe,u=new oe,f=new oe,p=new oe,h=new oe,_=new oe,S=new oe;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),b=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,x),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.fromBufferAttribute(r,x),f.add(_),p.add(_),h.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(f,p){const h=f.array,_=f.itemSize,S=f.normalized,g=new h.constructor(p.length*_);let M=0,w=0;for(let b=0,x=p.length;b<x;b++){f.isInterleavedBufferAttribute?M=p[b]*f.data.stride+f.offset:M=p[b]*_;for(let v=0;v<_;v++)g[w++]=h[M++]}return new Fi(g,_,S)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let _=0,S=h.length;_<S;_++){const g=h[_],M=e(g,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],_=[];for(let S=0,g=h.length;S<g;S++){const M=h[S];_.push(M.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const _=o[h];this.setAttribute(h,_.clone(t))}const l=e.morphAttributes;for(const h in l){const _=[],S=l[h];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,_=u.length;h<_;h++){const S=u[h];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fd=new oe,X_=new oe,Y_=new xt;class qr{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=fd.subVectors(r,t).cross(X_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(fd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Y_.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let q_=0;class As extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=lo,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pg,this.blendDst=mg,this.blendEquation=ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yu,this.stencilZFail=Yu,this.stencilZPass=Yu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ot().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new oe,hd=new oe,Rl=new oe,Cl=new oe;class Rf{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){hd.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Cl.copy(this.origin).sub(hd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),f=Cl.dot(this.direction),p=-Cl.dot(Rl),h=Cl.lengthSq(),_=Math.abs(1-u*u);let S,g,M,w;if(_>0)if(S=u*p-f,g=u*f-p,w=l*_,S>=0)if(g>=-w)if(g<=w){const b=1/_;S*=b,g*=b,M=S*(S+u*g+2*f)+g*(u*S+g+2*p)+h}else g=l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*p)+h;else g=-l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*p)+h;else g<=-w?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-p),l),M=-S*S+g*(g+2*p)+h):g<=w?(S=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+h):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-p),l),M=-S*S+g*(g+2*p)+h);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(hd).addScaledVector(Rl,g),M}intersectSphere(e,t){if(e.radius<0)return null;mr.subVectors(e.center,this.origin);const r=mr.dot(this.direction),o=mr.dot(mr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,p;const h=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,p=f.x,h=f.y,_=f.z,S=e.x-u.x,g=e.y-u.y,M=e.z-u.z,w=t.x-u.x,b=t.y-u.y,x=t.z-u.z,v=r.x-u.x,U=r.y-u.y,V=r.z-u.z,C=Math.abs(p),N=Math.abs(h),D=Math.abs(_);let B,E,L,z,Y,Z,ne,H,ee,ge,re,q;if(C>=N&&C>=D?(L=p,Z=S,ee=w,q=v,p>=0?(B=h,E=_,z=g,Y=M,ne=b,H=x,ge=U,re=V):(B=_,E=h,z=M,Y=g,ne=x,H=b,ge=V,re=U)):N>=D?(L=h,Z=g,ee=b,q=U,h>=0?(B=_,E=p,z=M,Y=S,ne=x,H=w,ge=V,re=v):(B=p,E=_,z=S,Y=M,ne=w,H=x,ge=v,re=V)):(L=_,Z=M,ee=x,q=V,_>=0?(B=p,E=h,z=S,Y=g,ne=w,H=b,ge=v,re=U):(B=h,E=p,z=g,Y=S,ne=b,H=w,ge=U,re=v)),L===0)return null;const Q=B/L,te=E/L,I=1/L,ue=z-Q*Z,we=Y-te*Z,Ke=ne-Q*ee,Xe=H-te*ee,$e=ge-Q*q,J=re-te*q,fe=$e*Xe-J*Ke,Ae=ue*J-we*$e,je=Ke*we-Xe*ue;if(o){if(fe<0||Ae<0||je<0)return null}else if((fe<0||Ae<0||je<0)&&(fe>0||Ae>0||je>0))return null;const Ge=fe+Ae+je;if(Ge===0)return null;const Ce=I*(fe*Z+Ae*ee+je*q);return(Ge>0?Ce<0:Ce>0)?null:this.at(Ce/Ge,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bm=new tn,hs=new Rf,Pl=new xo,Rm=new oe,Ll=new oe,Nl=new oe,Dl=new oe,pd=new oe,Il=new oe,Cm=new oe,Ul=new oe;class ht extends Tn{constructor(e=new Pn,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Il.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const _=f[p],S=l[p];_!==0&&(pd.fromBufferAttribute(S,e),u?Il.addScaledVector(pd,_):Il.addScaledVector(pd.sub(t),_))}t.add(Il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(Pl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Pl,Rm)===null||hs.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(bm.copy(l).invert(),hs.copy(e.ray).applyMatrix4(bm),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,b=g.length;w<b;w++){const x=g[w],v=u[x.materialIndex],U=Math.max(x.start,M.start),V=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let C=U,N=V;C<N;C+=3){const D=f.getX(C),B=f.getX(C+1),E=f.getX(C+2);o=Fl(this,v,e,r,h,_,S,D,B,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let x=w,v=b;x<v;x+=3){const U=f.getX(x),V=f.getX(x+1),C=f.getX(x+2);o=Fl(this,u,e,r,h,_,S,U,V,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,b=g.length;w<b;w++){const x=g[w],v=u[x.materialIndex],U=Math.max(x.start,M.start),V=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let C=U,N=V;C<N;C+=3){const D=C,B=C+1,E=C+2;o=Fl(this,v,e,r,h,_,S,D,B,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let x=w,v=b;x<v;x+=3){const U=x,V=x+1,C=x+2;o=Fl(this,u,e,r,h,_,S,U,V,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function j_(s,e,t,r,o,l,u,f){let p;if(e.side===Jn?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===ys,f),p===null)return null;Ul.copy(f),Ul.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Ul);return h<t.near||h>t.far?null:{distance:h,point:Ul.clone(),object:s}}function Fl(s,e,t,r,o,l,u,f,p,h){s.getVertexPosition(f,Ll),s.getVertexPosition(p,Nl),s.getVertexPosition(h,Dl);const _=j_(s,e,t,r,Ll,Nl,Dl,Cm);if(_){const S=new oe;Di.getBarycoord(Cm,Ll,Nl,Dl,S),o&&(_.uv=Di.getInterpolatedAttribute(o,f,p,h,S,new Ot)),l&&(_.uv1=Di.getInterpolatedAttribute(l,f,p,h,S,new Ot)),u&&(_.normal=Di.getInterpolatedAttribute(u,f,p,h,S,new oe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:h,normal:new oe,materialIndex:0};Di.getNormal(Ll,Nl,Dl,g.normal),_.face=g,_.barycoord=S}return _}class K_ extends Bn{constructor(e=null,t=1,r=1,o,l,u,f,p,h=Cn,_=Cn,S,g){super(null,u,f,p,h,_,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ps=new xo,$_=new Ot(.5,.5),Ol=new oe;class Cf{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,u=new qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],_=l[4],S=l[5],g=l[6],M=l[7],w=l[8],b=l[9],x=l[10],v=l[11],U=l[12],V=l[13],C=l[14],N=l[15];if(o[0].setComponents(h-u,M-_,v-w,N-U).normalize(),o[1].setComponents(h+u,M+_,v+w,N+U).normalize(),o[2].setComponents(h+f,M+S,v+b,N+V).normalize(),o[3].setComponents(h-f,M-S,v-b,N-V).normalize(),r)o[4].setComponents(p,g,x,C).normalize(),o[5].setComponents(h-p,M-g,v-x,N-C).normalize();else if(o[4].setComponents(h-p,M-g,v-x,N-C).normalize(),t===$i)o[5].setComponents(h+p,M+g,v+x,N+C).normalize();else if(t===po)o[5].setComponents(p,g,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=$_.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Og extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new oe,rc=new oe,Pm=new tn,io=new Rf,Bl=new xo,md=new oe,Lm=new oe;class Z_ extends Tn{constructor(e=new Pn,t=new Og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)ic.fromBufferAttribute(t,o-1),rc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new un(r,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(o),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;Pm.copy(o).invert(),io.copy(e.ray).applyMatrix4(Pm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let b=M,x=w-1;b<x;b+=h){const v=_.getX(b),U=_.getX(b+1),V=kl(this,e,io,p,v,U,b);V&&t.push(V)}if(this.isLineLoop){const b=_.getX(w-1),x=_.getX(M),v=kl(this,e,io,p,b,x,w-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let b=M,x=w-1;b<x;b+=h){const v=kl(this,e,io,p,b,b+1,b);v&&t.push(v)}if(this.isLineLoop){const b=kl(this,e,io,p,w-1,M,w-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function kl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(ic.fromBufferAttribute(f,o),rc.fromBufferAttribute(f,l),t.distanceSqToSegment(ic,rc,md,Lm)>r)return;md.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(md);if(!(h<e.near||h>e.far))return{distance:h,point:Lm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Bg extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nm=new tn,ff=new Rf,zl=new xo,Gl=new oe;class J_ extends Tn{constructor(e=new Pn,t=new Bg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;Nm.copy(o).invert(),ff.copy(e.ray).applyMatrix4(Nm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=r.index,S=r.attributes.position;if(h!==null){const g=Math.max(0,u.start),M=Math.min(h.count,u.start+u.count);for(let w=g,b=M;w<b;w++){const x=h.getX(w);Gl.fromBufferAttribute(S,x),Dm(Gl,x,p,o,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let w=g,b=M;w<b;w++)Gl.fromBufferAttribute(S,w),Dm(Gl,w,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Dm(s,e,t,r,o,l,u){const f=ff.distanceSqToPoint(s);if(f<t){const p=new oe;ff.closestPointToPoint(s,p),p.applyMatrix4(r);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class kg extends Bn{constructor(e=[],t=Ms,r,o,l,u,f,p,h,_){super(e,t,r,o,l,u,f,p,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oc extends Bn{constructor(e,t,r,o,l,u,f,p,h){super(e,t,r,o,l,u,f,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Bn{constructor(e,t,r=Ji,o,l,u,f=Cn,p=Cn,h,_=Sr,S=1){if(_!==Sr&&_!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,p,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Q_ extends mo{constructor(e,t=Ji,r=Ms,o,l,u=Cn,f=Cn,p,h=Sr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,p,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zg extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zn extends Pn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],_=[],S=[];let g=0,M=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(S,2));function w(b,x,v,U,V,C,N,D,B,E,L){const z=C/B,Y=N/E,Z=C/2,ne=N/2,H=D/2,ee=B+1,ge=E+1;let re=0,q=0;const Q=new oe;for(let te=0;te<ge;te++){const I=te*Y-ne;for(let ue=0;ue<ee;ue++){const we=ue*z-Z;Q[b]=we*U,Q[x]=I*V,Q[v]=H,h.push(Q.x,Q.y,Q.z),Q[b]=0,Q[x]=0,Q[v]=D>0?1:-1,_.push(Q.x,Q.y,Q.z),S.push(ue/B),S.push(1-te/E),re+=1}}for(let te=0;te<E;te++)for(let I=0;I<B;I++){const ue=g+I+ee*te,we=g+I+ee*(te+1),Ke=g+(I+1)+ee*(te+1),Xe=g+(I+1)+ee*te;p.push(ue,we,Xe),p.push(we,Ke,Xe),q+=6}f.addGroup(M,q,L),M+=q,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gs extends Pn{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],p=[],h=[],_=t/2,S=Math.PI/2*e,g=t,M=2*S+g,w=r*2+l,b=o+1,x=new oe,v=new oe;for(let U=0;U<=w;U++){let V=0,C=0,N=0,D=0;if(U<=r){const L=U/r,z=L*Math.PI/2;C=-_-e*Math.cos(z),N=e*Math.sin(z),D=-e*Math.cos(z),V=L*S}else if(U<=r+l){const L=(U-r)/l;C=-_+L*t,N=e,D=0,V=S+L*g}else{const L=(U-r-l)/r,z=L*Math.PI/2;C=_+e*Math.sin(z),N=e*Math.cos(z),D=e*Math.sin(z),V=S+g+L*S}const B=Math.max(0,Math.min(1,V/M));let E=0;U===0?E=.5/o:U===w&&(E=-.5/o);for(let L=0;L<=o;L++){const z=L/o,Y=z*Math.PI*2,Z=Math.sin(Y),ne=Math.cos(Y);v.x=-N*ne,v.y=C,v.z=N*Z,f.push(v.x,v.y,v.z),x.set(-N*ne,D,N*Z),x.normalize(),p.push(x.x,x.y,x.z),h.push(z+E,B)}if(U>0){const L=(U-1)*b;for(let z=0;z<o;z++){const Y=L+z,Z=L+z+1,ne=U*b+z,H=U*b+z+1;u.push(Y,Z,ne),u.push(Z,H,ne)}}}this.setIndex(u),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class _i extends Pn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const h=this;o=Math.floor(o),l=Math.floor(l);const _=[],S=[],g=[],M=[];let w=0;const b=[],x=r/2;let v=0;U(),u===!1&&(e>0&&V(!0),t>0&&V(!1)),this.setIndex(_),this.setAttribute("position",new un(S,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(M,2));function U(){const C=new oe,N=new oe;let D=0;const B=(t-e)/r;for(let E=0;E<=l;E++){const L=[],z=E/l,Y=z*(t-e)+e;for(let Z=0;Z<=o;Z++){const ne=Z/o,H=ne*p+f,ee=Math.sin(H),ge=Math.cos(H);N.x=Y*ee,N.y=-z*r+x,N.z=Y*ge,S.push(N.x,N.y,N.z),C.set(ee,B,ge).normalize(),g.push(C.x,C.y,C.z),M.push(ne,1-z),L.push(w++)}b.push(L)}for(let E=0;E<o;E++)for(let L=0;L<l;L++){const z=b[L][E],Y=b[L+1][E],Z=b[L+1][E+1],ne=b[L][E+1];(e>0||L!==0)&&(_.push(z,Y,ne),D+=3),(t>0||L!==l-1)&&(_.push(Y,Z,ne),D+=3)}h.addGroup(v,D,0),v+=D}function V(C){const N=w,D=new Ot,B=new oe;let E=0;const L=C===!0?e:t,z=C===!0?1:-1;for(let Z=1;Z<=o;Z++)S.push(0,x*z,0),g.push(0,z,0),M.push(.5,.5),w++;const Y=w;for(let Z=0;Z<=o;Z++){const H=Z/o*p+f,ee=Math.cos(H),ge=Math.sin(H);B.x=L*ge,B.y=x*z,B.z=L*ee,S.push(B.x,B.y,B.z),g.push(0,z,0),D.x=ee*.5+.5,D.y=ge*.5*z+.5,M.push(D.x,D.y),w++}for(let Z=0;Z<o;Z++){const ne=N+Z,H=Y+Z;C===!0?_.push(H,H+1,ne):_.push(H+1,H,ne),E+=3}h.addGroup(v,E,C===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pf extends _i{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Pf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends Pn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),p=Math.floor(o),h=f+1,_=p+1,S=e/f,g=t/p,M=[],w=[],b=[],x=[];for(let v=0;v<_;v++){const U=v*g-u;for(let V=0;V<h;V++){const C=V*S-l;w.push(C,-U,0),b.push(0,0,1),x.push(V/f),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let U=0;U<f;U++){const V=U+h*v,C=U+h*(v+1),N=U+1+h*(v+1),D=U+1+h*v;M.push(V,C,D),M.push(C,N,D)}this.setIndex(M),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class gr extends Pn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let h=0;const _=[],S=new oe,g=new oe,M=[],w=[],b=[],x=[];for(let v=0;v<=r;v++){const U=[],V=v/r,C=u+V*f,N=e*Math.cos(C),D=Math.sqrt(e*e-N*N);let B=0;v===0&&u===0?B=.5/t:v===r&&p===Math.PI&&(B=-.5/t);for(let E=0;E<=t;E++){const L=E/t,z=o+L*l;S.x=-D*Math.cos(z),S.y=N,S.z=D*Math.sin(z),w.push(S.x,S.y,S.z),g.copy(S).normalize(),b.push(g.x,g.y,g.z),x.push(L+B,1-V),U.push(h++)}_.push(U)}for(let v=0;v<r;v++)for(let U=0;U<t;U++){const V=_[v][U+1],C=_[v][U],N=_[v+1][U],D=_[v+1][U+1];(v!==0||u>0)&&M.push(V,C,D),(v!==r-1||p<Math.PI)&&M.push(C,N,D)}this.setIndex(M),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class co extends Pn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const p=[],h=[],_=[],S=[],g=new oe,M=new oe,w=new oe;for(let b=0;b<=r;b++){const x=u+b/r*f;for(let v=0;v<=o;v++){const U=v/o*l;M.x=(e+t*Math.cos(x))*Math.cos(U),M.y=(e+t*Math.cos(x))*Math.sin(U),M.z=t*Math.sin(x),h.push(M.x,M.y,M.z),g.x=e*Math.cos(U),g.y=e*Math.sin(U),w.subVectors(M,g).normalize(),_.push(w.x,w.y,w.z),S.push(v/o),S.push(b/r)}}for(let b=1;b<=r;b++)for(let x=1;x<=o;x++){const v=(o+1)*b+x-1,U=(o+1)*(b-1)+x-1,V=(o+1)*(b-1)+x,C=(o+1)*b+x;p.push(v,U,C),p.push(U,V,C)}this.setIndex(p),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ga(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Im(o))o.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Im(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=ga(s[t]);for(const o in r)e[o]=r[o]}return e}function Im(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ex(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const tx={clone:ga,merge:Vn};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ot().fromArray(o.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new an().fromArray(o.value);break;case"m3":this.uniforms[r].value=new xt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rx extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gd extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sx extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lf extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const vd=new tn,Um=new oe,Fm=new oe;class Vg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Um.setFromMatrixPosition(e.matrixWorld),t.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(vd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,p=o?o.x/l.x:0,h=o?o.y/l.y:0;e.coordinateSystem===po||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*f,0,.5*f+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*f,0,.5*f+h,0,0,.5,.5,0,0,0,1),t.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new oe,Hl=new va,Wi=new oe;class Hg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Vl,Hl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new oe,Om=new Ot,Bm=new Ot;class ai extends Hg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=df*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return df*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Om,Bm),t.subVectors(Bm,Om)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ox extends Vg{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}}class km extends Lf{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Nf extends Hg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lx extends Vg{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cx extends Lf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new lx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ux extends Lf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const aa=-90,oa=1;class dx extends Tn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(aa,oa,e,t);o.layers=this.layers,this.add(o);const l=new ai(aa,oa,e,t);l.layers=this.layers,this.add(l);const u=new ai(aa,oa,e,t);u.layers=this.layers,this.add(u);const f=new ai(aa,oa,e,t);f.layers=this.layers,this.add(f);const p=new ai(aa,oa,e,t);p.layers=this.layers,this.add(p);const h=new ai(aa,oa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===po)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,_]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(S,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class fx extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Of=class Of{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Of.prototype.isMatrix2=!0;let zm=Of;function Gm(s,e,t,r){const o=hx(r);switch(t){case Rg:return s*e;case Pg:return s*e/o.components*o.byteLength;case yf:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case Mf:return s*e*2/o.components*o.byteLength;case Cg:return s*e*3/o.components*o.byteLength;case Ii:return s*e*4/o.components*o.byteLength;case Ef:return s*e*4/o.components*o.byteLength;case ql:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:case Fd:return Math.max(s,16)*Math.max(e,8)/4;case Dd:case Ud:return Math.max(s,8)*Math.max(e,8)/2;case Od:case Bd:case zd:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kd:case Jl:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rf:case sf:case af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case of:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ql:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(s){switch(s){case oi:case wg:return{byteLength:1,components:1};case fo:case Tg:case Qi:return{byteLength:2,components:1};case xf:case Sf:return{byteLength:2,components:4};case Ji:case _f:case Ki:return{byteLength:4,components:1};case Ag:case bg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function px(s){const e=new WeakMap;function t(f,p){const h=f.array,_=f.usage,S=h.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,h,_),f.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,h){const _=p.array,S=p.updateRanges;if(s.bindBuffer(h,f),S.length===0)s.bufferSubData(h,0,_);else{S.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<S.length;M++){const w=S[g],b=S[M];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++g,S[g]=b)}S.length=g+1;for(let M=0,w=S.length;M<w;M++){const b=S[M];s.bufferSubData(h,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:u}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nS=`#ifdef USE_GRADIENTMAP
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
}`,iS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oS=`#ifdef USE_ENVMAP
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
#endif`,lS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fS=`PhysicalMaterial material;
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
#endif`,hS=`uniform sampler2D dfgLUT;
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
}`,pS=`
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ES=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TS=`#if defined( USE_POINTS_UV )
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
#endif`,AS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`#ifdef USE_MORPHTARGETS
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
#endif`,NS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BS=`#ifdef USE_NORMALMAP
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
#endif`,kS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,Ey=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#define LAMBERT
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
}`,Ny=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,Oy=`#define PHONG
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
}`,By=`#define PHONG
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
}`,ky=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,Gy=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,Yy=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
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
}`,jy=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:vx,alphamap_pars_fragment:_x,alphatest_fragment:xx,alphatest_pars_fragment:Sx,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:Ex,batching_vertex:wx,begin_vertex:Tx,beginnormal_vertex:Ax,bsdfs:bx,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Nx,clipping_planes_vertex:Dx,color_fragment:Ix,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Vx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:Yx,envmap_fragment:qx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Kx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:oS,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:eS,fog_pars_fragment:tS,gradientmap_pars_fragment:nS,lightmap_pars_fragment:iS,lights_lambert_fragment:rS,lights_lambert_pars_fragment:sS,lights_pars_begin:aS,lights_toon_fragment:lS,lights_toon_pars_fragment:cS,lights_phong_fragment:uS,lights_phong_pars_fragment:dS,lights_physical_fragment:fS,lights_physical_pars_fragment:hS,lights_fragment_begin:pS,lights_fragment_maps:mS,lights_fragment_end:gS,lightprobes_pars_fragment:vS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:xS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:yS,map_fragment:MS,map_pars_fragment:ES,map_particle_fragment:wS,map_particle_pars_fragment:TS,metalnessmap_fragment:AS,metalnessmap_pars_fragment:bS,morphinstance_vertex:RS,morphcolor_vertex:CS,morphnormal_vertex:PS,morphtarget_pars_vertex:LS,morphtarget_vertex:NS,normal_fragment_begin:DS,normal_fragment_maps:IS,normal_pars_fragment:US,normal_pars_vertex:FS,normal_vertex:OS,normalmap_pars_fragment:BS,clearcoat_normal_fragment_begin:kS,clearcoat_normal_fragment_maps:zS,clearcoat_pars_fragment:GS,iridescence_pars_fragment:VS,opaque_fragment:HS,packing:WS,premultiplied_alpha_fragment:XS,project_vertex:YS,dithering_fragment:qS,dithering_pars_fragment:jS,roughnessmap_fragment:KS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:JS,shadowmap_vertex:QS,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:ry,specularmap_fragment:sy,specularmap_pars_fragment:ay,tonemapping_fragment:oy,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:uy,uv_pars_fragment:dy,uv_pars_vertex:fy,uv_vertex:hy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:vy,backgroundCube_frag:_y,cube_vert:xy,cube_frag:Sy,depth_vert:yy,depth_frag:My,distance_vert:Ey,distance_frag:wy,equirect_vert:Ty,equirect_frag:Ay,linedashed_vert:by,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Py,meshlambert_vert:Ly,meshlambert_frag:Ny,meshmatcap_vert:Dy,meshmatcap_frag:Iy,meshnormal_vert:Uy,meshnormal_frag:Fy,meshphong_vert:Oy,meshphong_frag:By,meshphysical_vert:ky,meshphysical_frag:zy,meshtoon_vert:Gy,meshtoon_frag:Vy,points_vert:Hy,points_frag:Wy,shadow_vert:Xy,shadow_frag:Yy,sprite_vert:qy,sprite_frag:jy},qe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},qi={basic:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Vn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Vn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Vn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Vn([qe.points,qe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Vn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Vn([qe.common,qe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Vn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Vn([qe.sprite,qe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Vn([qe.common,qe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Vn([qe.lights,qe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};qi.physical={uniforms:Vn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Wl={r:0,b:0,g:0},Ky=new tn,Xg=new xt;Xg.set(-1,0,0,0,1,0,0,0,1);function $y(s,e,t,r,o,l){const u=new Rt(0);let f=o===!0?0:1,p,h,_=null,S=0,g=null;function M(U){let V=U.isScene===!0?U.background:null;if(V&&V.isTexture){const C=U.backgroundBlurriness>0;V=e.get(V,C)}return V}function w(U){let V=!1;const C=M(U);C===null?x(u,f):C&&C.isColor&&(x(C,1),V=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||V)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(U,V){const C=M(V);C&&(C.isCubeTexture||C.mapping===ac)?(h===void 0&&(h=new ht(new Zn(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ga(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(V.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Xg),h.material.toneMapped=Ut.getTransfer(C.colorSpace)!==Xt,(_!==C||S!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=C,S=C.version,g=s.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ht(new ma(2,2),new Oi({name:"BackgroundMaterial",uniforms:ga(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(C.colorSpace)!==Xt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||S!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,S=C.version,g=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,V){U.getRGB(Wl,Gg(s)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,V,l)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,V=1){u.set(U),f=V,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,x(u,f)},render:w,addToRenderList:b,dispose:v}}function Zy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(Y,Z,ne,H,ee){let ge=!1;const re=S(Y,H,ne,Z);l!==re&&(l=re,h(l.object)),ge=M(Y,H,ne,ee),ge&&w(Y,H,ne,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,C(Y,Z,ne,H),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return s.createVertexArray()}function h(Y){return s.bindVertexArray(Y)}function _(Y){return s.deleteVertexArray(Y)}function S(Y,Z,ne,H){const ee=H.wireframe===!0;let ge=r[Z.id];ge===void 0&&(ge={},r[Z.id]=ge);const re=Y.isInstancedMesh===!0?Y.id:0;let q=ge[re];q===void 0&&(q={},ge[re]=q);let Q=q[ne.id];Q===void 0&&(Q={},q[ne.id]=Q);let te=Q[ee];return te===void 0&&(te=g(p()),Q[ee]=te),te}function g(Y){const Z=[],ne=[],H=[];for(let ee=0;ee<t;ee++)Z[ee]=0,ne[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ne,attributeDivisors:H,object:Y,attributes:{},index:null}}function M(Y,Z,ne,H){const ee=l.attributes,ge=Z.attributes;let re=0;const q=ne.getAttributes();for(const Q in q)if(q[Q].location>=0){const I=ee[Q];let ue=ge[Q];if(ue===void 0&&(Q==="instanceMatrix"&&Y.instanceMatrix&&(ue=Y.instanceMatrix),Q==="instanceColor"&&Y.instanceColor&&(ue=Y.instanceColor)),I===void 0||I.attribute!==ue||ue&&I.data!==ue.data)return!0;re++}return l.attributesNum!==re||l.index!==H}function w(Y,Z,ne,H){const ee={},ge=Z.attributes;let re=0;const q=ne.getAttributes();for(const Q in q)if(q[Q].location>=0){let I=ge[Q];I===void 0&&(Q==="instanceMatrix"&&Y.instanceMatrix&&(I=Y.instanceMatrix),Q==="instanceColor"&&Y.instanceColor&&(I=Y.instanceColor));const ue={};ue.attribute=I,I&&I.data&&(ue.data=I.data),ee[Q]=ue,re++}l.attributes=ee,l.attributesNum=re,l.index=H}function b(){const Y=l.newAttributes;for(let Z=0,ne=Y.length;Z<ne;Z++)Y[Z]=0}function x(Y){v(Y,0)}function v(Y,Z){const ne=l.newAttributes,H=l.enabledAttributes,ee=l.attributeDivisors;ne[Y]=1,H[Y]===0&&(s.enableVertexAttribArray(Y),H[Y]=1),ee[Y]!==Z&&(s.vertexAttribDivisor(Y,Z),ee[Y]=Z)}function U(){const Y=l.newAttributes,Z=l.enabledAttributes;for(let ne=0,H=Z.length;ne<H;ne++)Z[ne]!==Y[ne]&&(s.disableVertexAttribArray(ne),Z[ne]=0)}function V(Y,Z,ne,H,ee,ge,re){re===!0?s.vertexAttribIPointer(Y,Z,ne,ee,ge):s.vertexAttribPointer(Y,Z,ne,H,ee,ge)}function C(Y,Z,ne,H){b();const ee=H.attributes,ge=ne.getAttributes(),re=Z.defaultAttributeValues;for(const q in ge){const Q=ge[q];if(Q.location>=0){let te=ee[q];if(te===void 0&&(q==="instanceMatrix"&&Y.instanceMatrix&&(te=Y.instanceMatrix),q==="instanceColor"&&Y.instanceColor&&(te=Y.instanceColor)),te!==void 0){const I=te.normalized,ue=te.itemSize,we=e.get(te);if(we===void 0)continue;const Ke=we.buffer,Xe=we.type,$e=we.bytesPerElement,J=Xe===s.INT||Xe===s.UNSIGNED_INT||te.gpuType===_f;if(te.isInterleavedBufferAttribute){const fe=te.data,Ae=fe.stride,je=te.offset;if(fe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Q.locationSize;Ge++)v(Q.location+Ge,fe.meshPerAttribute);Y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ge=0;Ge<Q.locationSize;Ge++)x(Q.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let Ge=0;Ge<Q.locationSize;Ge++)V(Q.location+Ge,ue/Q.locationSize,Xe,I,Ae*$e,(je+ue/Q.locationSize*Ge)*$e,J)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<Q.locationSize;fe++)v(Q.location+fe,te.meshPerAttribute);Y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<Q.locationSize;fe++)x(Q.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let fe=0;fe<Q.locationSize;fe++)V(Q.location+fe,ue/Q.locationSize,Xe,I,ue*$e,ue/Q.locationSize*fe*$e,J)}}else if(re!==void 0){const I=re[q];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(Q.location,I);break;case 3:s.vertexAttrib3fv(Q.location,I);break;case 4:s.vertexAttrib4fv(Q.location,I);break;default:s.vertexAttrib1fv(Q.location,I)}}}}U()}function N(){L();for(const Y in r){const Z=r[Y];for(const ne in Z){const H=Z[ne];for(const ee in H){const ge=H[ee];for(const re in ge)_(ge[re].object),delete ge[re];delete H[ee]}}delete r[Y]}}function D(Y){if(r[Y.id]===void 0)return;const Z=r[Y.id];for(const ne in Z){const H=Z[ne];for(const ee in H){const ge=H[ee];for(const re in ge)_(ge[re].object),delete ge[re];delete H[ee]}}delete r[Y.id]}function B(Y){for(const Z in r){const ne=r[Z];for(const H in ne){const ee=ne[H];if(ee[Y.id]===void 0)continue;const ge=ee[Y.id];for(const re in ge)_(ge[re].object),delete ge[re];delete ee[Y.id]}}}function E(Y){for(const Z in r){const ne=r[Z],H=Y.isInstancedMesh===!0?Y.id:0,ee=ne[H];if(ee!==void 0){for(const ge in ee){const re=ee[ge];for(const q in re)_(re[q].object),delete re[q];delete ee[ge]}delete ne[H],Object.keys(ne).length===0&&delete r[Z]}}}function L(){z(),u=!0,l!==o&&(l=o,h(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:z,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:x,disableUnusedAttributes:U}}function Jy(s,e,t){let r;function o(p){r=p}function l(p,h){s.drawArrays(r,p,h),t.update(h,r,1)}function u(p,h,_){_!==0&&(s.drawArraysInstanced(r,p,h,_),t.update(h,r,_))}function f(p,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,_);let g=0;for(let M=0;M<_;M++)g+=h[M];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Qy(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Ii&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const E=B===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==oi&&B!==Ki&&!E&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=p(h);_!==h&&(mt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),V=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:U,maxVaryings:V,maxFragmentUniforms:C,maxSamples:N,samples:D}}function eM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new qr,f=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=_(S,g,0)},this.setState=function(S,g,M){const w=S.clippingPlanes,b=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||w===null||w.length===0||l&&!x)l?_(null):h();else{const U=l?0:r,V=U*4;let C=v.clippingState||null;p.value=C,C=_(w,g,V,M);for(let N=0;N!==V;++N)C[N]=t[N];v.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,g,M,w){const b=S!==null?S.length:0;let x=null;if(b!==0){if(x=p.value,w!==!0||x===null){const v=M+b*4,U=g.matrixWorldInverse;f.getNormalMatrix(U),(x===null||x.length<v)&&(x=new Float32Array(v));for(let V=0,C=M;V!==b;++V,C+=4)u.copy(S[V]).applyMatrix4(U,f),u.normal.toArray(x,C),x[C+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const da=4,tM=6,nM=20,iM=256,ro=new Nf,Vm=new Rt;let _d=null,xd=0,Sd=0,yd=!1;const rM=new oe,ms=new oe;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=rM}=l;_d=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,xd,Sd),this._renderer.xr.enabled=yd,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:Qi,format:Ii,colorSpace:ec,depthBuffer:!1},o=Wm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sM(l)),this._blurMaterial=oM(l,e,t),this._ggxMaterial=aM(l,e,t)}return o}_compileMaterial(e){const t=new ht(new Pn,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,r,o,l){const p=new ai(90,1,t,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(Vm),S.toneMapping=Zi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Zn,new cn({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let v=!1;const U=e.background;U?U.isColor&&(x.color.copy(U),e.background=null,v=!0):(x.color.copy(Vm),v=!0);for(let V=0;V<6;V++){const C=V%3;C===0?(p.up.set(0,h[V],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[V],l.y,l.z)):C===1?(p.up.set(0,0,h[V]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[V],l.z)):(p.up.set(0,h[V],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[V]));const N=this._cubeSize;la(o,C*N,V>2?N:0,N,N),S.setRenderTarget(o),v&&S.render(b,p),S.render(e,p)}S.toneMapping=M,S.autoClear=g,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ms||e.mapping===pa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;la(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,ro)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,h=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),S=Math.sqrt(h*h-_*_),g=h*1.25,M=S*g,{_lodMax:w}=this,b=this._sizeLods[r],x=3*b*(r>w-da?r-w+da:0),v=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=w-t,la(l,x,v,3*b,2*b),o.setRenderTarget(l),o.render(f,ro),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=w-r,la(e,x,v,3*b,2*b),o.setRenderTarget(e),o.render(f,ro)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,p=this._lodMeshes[o];p.material=f;const h=f.uniforms;h.envMap.value=e.texture,h.sigma.value=l,h.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],S=3*_*(o>this._lodMax-da?o-this._lodMax+da:0),g=4*(this._cubeSize-_);la(t,S,g,3*_,2*_),u.setRenderTarget(t),u.render(p,ro)}}function sM(s){const e=[],t=[];let r=s;const o=s-da+1+tM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),p=-f,h=1+f,_=[p,p,h,p,h,h,p,p,h,h,p,h],S=6,g=6,M=3,w=new Float32Array(M*g*S),b=new Float32Array(M*g*S);for(let v=0;v<S;v++){const U=v%3*2/3-1,V=v>2?0:-1,C=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];w.set(C,M*g*v);for(let N=0;N<g;N++){const D=_[N*2]*2-1,B=_[N*2+1]*2-1;v===0?ms.set(1,B,D):v===1?ms.set(-D,1,-B):v===2?ms.set(-D,B,1):v===3?ms.set(-1,B,-D):v===4?ms.set(-D,-1,B):ms.set(D,B,-1),ms.toArray(b,(v*g+N)*M)}}const x=new Pn;x.setAttribute("position",new Fi(w,M)),x.setAttribute("outputDirection",new Fi(b,M)),t.push(new ht(x,null)),r>da&&r--}return{lodMeshes:t,sizeLods:e}}function Wm(s,e,t){const r=new Ui(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function la(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function aM(s,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function oM(s,e,t){return new Oi({name:"SphericalGaussianBlur",defines:{SAMPLES:nM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Xm(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Ym(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yg extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new kg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Zn(5,5,5),l=new Oi({name:"CubemapFromEquirect",uniforms:ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:_r});l.uniforms.tEquirect.value=t;const u=new ht(o,l),f=t.minFilter;return t.minFilter===xs&&(t.minFilter=On),new dx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function lM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Hu||M===Wu)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const b=new Yg(w.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",h),f(b.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,w=M===Hu||M===Wu,b=M===Ms||M===pa;if(w||b){let x=t.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Hm(s)),x=w?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const U=g.image;return w&&U&&U.height>0||b&&U&&p(U)?(r===null&&(r=new Hm(s)),x=w?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,M){return M===Hu?g.mapping=Ms:M===Wu&&(g.mapping=pa),g}function p(g){let M=0;const w=6;for(let b=0;b<w;b++)g[b]!==void 0&&M++;return M===w}function h(g){const M=g.target;M.removeEventListener("dispose",h);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function cM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&fa("WebGLRenderer: "+r+" extension not supported."),o}}}function uM(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function p(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(S){const g=[],M=S.index,w=S.attributes.position;let b=0;if(w===void 0)return;if(M!==null){const U=M.array;b=M.version;for(let V=0,C=U.length;V<C;V+=3){const N=U[V+0],D=U[V+1],B=U[V+2];g.push(N,D,D,B,B,N)}}else{const U=w.array;b=w.version;for(let V=0,C=U.length/3-1;V<C;V+=3){const N=V+0,D=V+1,B=V+2;g.push(N,D,D,B,B,N)}}const x=new(w.count>=65535?Fg:Ug)(g,1);x.version=b;const v=l.get(S);v&&e.remove(v),l.set(S,x)}function _(S){const g=l.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&h(S)}else h(S);return l.get(S)}return{get:f,update:p,getWireframeAttribute:_}}function dM(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function p(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function h(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,S*u,M),t.update(g,r,M))}function _(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,M);let b=0;for(let x=0;x<M;x++)b+=g[x];t.update(b,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=_}function fM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Gt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function hM(s,e,t){const r=new WeakMap,o=new an;function l(u,f,p){const h=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let z=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var M=z;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],V=f.morphAttributes.color||[];let C=0;w===!0&&(C=1),b===!0&&(C=2),x===!0&&(C=3);let N=f.attributes.position.count*C,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const B=new Float32Array(N*D*4*S),E=new Ng(B,N,D,S);E.type=Ki,E.needsUpdate=!0;const L=C*4;for(let Y=0;Y<S;Y++){const Z=v[Y],ne=U[Y],H=V[Y],ee=N*D*4*Y;for(let ge=0;ge<Z.count;ge++){const re=ge*L;w===!0&&(o.fromBufferAttribute(Z,ge),B[ee+re+0]=o.x,B[ee+re+1]=o.y,B[ee+re+2]=o.z,B[ee+re+3]=0),b===!0&&(o.fromBufferAttribute(ne,ge),B[ee+re+4]=o.x,B[ee+re+5]=o.y,B[ee+re+6]=o.z,B[ee+re+7]=0),x===!0&&(o.fromBufferAttribute(H,ge),B[ee+re+8]=o.x,B[ee+re+9]=o.y,B[ee+re+10]=o.z,B[ee+re+11]=H.itemSize===4?o.w:1)}}g={count:S,texture:E,size:new Ot(N,D)},r.set(f,g),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let x=0;x<h.length;x++)w+=h[x];const b=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function pM(s,e,t,r,o){let l=new WeakMap;function u(h){const _=o.render.frame,S=h.geometry,g=e.get(h,S);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==_&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return g}function f(){l=new WeakMap}function p(h){const _=h.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const mM={[vg]:"LINEAR_TONE_MAPPING",[_g]:"REINHARD_TONE_MAPPING",[xg]:"CINEON_TONE_MAPPING",[vf]:"ACES_FILMIC_TONE_MAPPING",[yg]:"AGX_TONE_MAPPING",[Mg]:"NEUTRAL_TONE_MAPPING",[Sg]:"CUSTOM_TONE_MAPPING"};function gM(s,e,t,r,o,l){const u=new Ui(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null;const h=new Pn;h.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new un([0,2,0,0,2,0],2));const _=new rx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new ht(h,_),g=new Nf(-1,1,1,-1,0,1);let M=null,w=null,b=!1,x,v=null,U=[],V=!1;this.setSize=function(C,N){u.setSize(C,N),f!==null&&f.setSize(C,N),p!==null&&p.setSize(C,N);for(let D=0;D<U.length;D++){const B=U[D];B.setSize&&B.setSize(C,N)}},this.setEffects=function(C){U=C,V=U.length>0&&U[0].isRenderPass===!0;const N=u.width,D=u.height;U.length>0&&f===null&&(f=new Ui(N,D,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),p=new Ui(N,D,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<U.length;B++){const E=U[B];E.setSize&&E.setSize(N,D)}},this.begin=function(C,N){if(b||C.toneMapping===Zi&&U.length===0)return!1;if(v=N,N!==null){const D=N.width,B=N.height;(u.width!==D||u.height!==B)&&this.setSize(D,B)}return V===!1&&C.setRenderTarget(u),x=C.toneMapping,C.toneMapping=Zi,!0},this.hasRenderPass=function(){return V},this.end=function(C,N){C.toneMapping=x,b=!0;let D=u,B=f;for(let E=0;E<U.length;E++){const L=U[E];L.enabled!==!1&&(L.render(C,B,D,N),L.needsSwap!==!1&&(D=B,B=B===f?p:f))}if(M!==C.outputColorSpace||w!==C.toneMapping){M=C.outputColorSpace,w=C.toneMapping,_.defines={},Ut.getTransfer(M)===Xt&&(_.defines.SRGB_TRANSFER="");const E=mM[w];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(v),C.render(S,g),v=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),h.dispose(),_.dispose()}}const qg=new Bn,hf=new mo(1,1),jg=new Ng,Kg=new D_,$g=new kg,qm=[],jm=[],Km=new Float32Array(16),$m=new Float32Array(9),Zm=new Float32Array(4);function _a(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=qm[o];if(l===void 0&&(l=new Float32Array(o),qm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cc(s,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function vM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function yM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;Zm.set(r),s.uniformMatrix2fv(this.addr,!1,Zm),_n(t,r)}}function MM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;$m.set(r),s.uniformMatrix3fv(this.addr,!1,$m),_n(t,r)}}function EM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;Km.set(r),s.uniformMatrix4fv(this.addr,!1,Km),_n(t,r)}}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function RM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(hf.compareFunction=t.isReversedDepthBuffer()?Tf:wf,l=hf):l=qg,t.setTexture2D(e||l,o)}function DM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Kg,o)}function IM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||$g,o)}function UM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||jg,o)}function FM(s){switch(s){case 5126:return vM;case 35664:return _M;case 35665:return xM;case 35666:return SM;case 35674:return yM;case 35675:return MM;case 35676:return EM;case 5124:case 35670:return wM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return bM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return UM}}function OM(s,e){s.uniform1fv(this.addr,e)}function BM(s,e){const t=_a(e,this.size,2);s.uniform2fv(this.addr,t)}function kM(s,e){const t=_a(e,this.size,3);s.uniform3fv(this.addr,t)}function zM(s,e){const t=_a(e,this.size,4);s.uniform4fv(this.addr,t)}function GM(s,e){const t=_a(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function VM(s,e){const t=_a(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HM(s,e){const t=_a(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function WM(s,e){s.uniform1iv(this.addr,e)}function XM(s,e){s.uniform2iv(this.addr,e)}function YM(s,e){s.uniform3iv(this.addr,e)}function qM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function KM(s,e){s.uniform2uiv(this.addr,e)}function $M(s,e){s.uniform3uiv(this.addr,e)}function ZM(s,e){s.uniform4uiv(this.addr,e)}function JM(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=hf:u=qg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function QM(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Kg,l[u])}function eE(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||$g,l[u])}function tE(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||jg,l[u])}function nE(s){switch(s){case 5126:return OM;case 35664:return BM;case 35665:return kM;case 35666:return zM;case 35674:return GM;case 35675:return VM;case 35676:return HM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return qM;case 5125:return jM;case 36294:return KM;case 36295:return $M;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}class iE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}}class rE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nE(t.type)}}class sE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function Jm(s,e){s.seq.push(e),s.map[e.id]=e}function aE(s,e,t){const r=s.name,o=r.length;for(Md.lastIndex=0;;){const l=Md.exec(r),u=Md.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){Jm(t,h===void 0?new iE(f,s,e):new rE(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new sE(f),Jm(t,S)),t=S}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);aE(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Qm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const oE=37297;let lE=0;function cE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const eg=new xt;function uE(s){Ut._getMatrix(eg,Ut.workingColorSpace,s);const e=`mat3( ${eg.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case tc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function tg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+cE(s.getShaderSource(e),f)}else return l}function dE(s,e){const t=uE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const fE={[vg]:"Linear",[_g]:"Reinhard",[xg]:"Cineon",[vf]:"ACESFilmic",[yg]:"AgX",[Mg]:"Neutral",[Sg]:"Custom"};function hE(s,e){const t=fE[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xl=new oe;function pE(){Ut.getLuminanceCoefficients(Xl);const s=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function gE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function oo(s){return s!==""}function ng(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _E=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(s){return s.replace(_E,SE)}const xE=new Map;function SE(s,e){let t=At[e];if(t===void 0){const r=xE.get(e);if(r!==void 0)t=At[r],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pf(t)}const yE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(s){return s.replace(yE,ME)}function ME(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function sg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const EE={[Yl]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};function wE(s){return EE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TE={[Ms]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function AE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":TE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const bE={[pa]:"ENVMAP_MODE_REFRACTION"};function RE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CE={[gg]:"ENVMAP_BLENDING_MULTIPLY",[u_]:"ENVMAP_BLENDING_MIX",[d_]:"ENVMAP_BLENDING_ADD"};function PE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":CE[s.combine]||"ENVMAP_BLENDING_NONE"}function LE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function NE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=wE(t),h=AE(t),_=RE(t),S=PE(t),g=LE(t),M=mE(t),w=gE(l),b=o.createProgram();let x,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oo).join(`
`),v.length>0&&(v+=`
`)):(x=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),v=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?At.tonemapping_pars_fragment:"",t.toneMapping!==Zi?hE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,dE("linearToOutputTexel",t.outputColorSpace),pE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),u=pf(u),u=ng(u,t),u=ig(u,t),f=pf(f),f=ng(f,t),f=ig(f,t),u=rg(u),f=rg(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const V=U+x+u,C=U+v+f,N=Qm(o,o.VERTEX_SHADER,V),D=Qm(o,o.FRAGMENT_SHADER,C);o.attachShader(b,N),o.attachShader(b,D),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function B(Y){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(b)||"",ne=o.getShaderInfoLog(N)||"",H=o.getShaderInfoLog(D)||"",ee=Z.trim(),ge=ne.trim(),re=H.trim();let q=!0,Q=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,N,D);else{const te=tg(o,N,"vertex"),I=tg(o,D,"fragment");Gt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+ee+`
`+te+`
`+I)}else ee!==""?mt("WebGLProgram: Program Info Log:",ee):(ge===""||re==="")&&(Q=!1);Q&&(Y.diagnostics={runnable:q,programLog:ee,vertexShader:{log:ge,prefix:x},fragmentShader:{log:re,prefix:v}})}o.deleteShader(N),o.deleteShader(D),E=new Zl(o,b),L=vE(o,b)}let E;this.getUniforms=function(){return E===void 0&&B(this),E};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(b,oE)),z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=D,this}let DE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new UE(e),t.set(e,r)),r}}class UE{constructor(e){this.id=DE++,this.code=e,this.usedTimes=0}}function FE(s){return s===ws||s===Jl||s===Ql}function OE(s,e,t,r,o,l){const u=new Dg,f=new IE,p=new Set,h=[],_=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return p.add(E),E===0?"uv":`uv${E}`}function b(E,L,z,Y,Z,ne){const H=Y.fog,ee=Z.geometry,ge=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?Y.environment:null,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||ge,re),Q=q&&q.mapping===ac?q.image.height:null,te=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&mt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ue=I!==void 0?I.length:0;let we=0;ee.morphAttributes.position!==void 0&&(we=1),ee.morphAttributes.normal!==void 0&&(we=2),ee.morphAttributes.color!==void 0&&(we=3);let Ke,Xe,$e,J;if(te){const vt=qi[te];Ke=vt.vertexShader,Xe=vt.fragmentShader}else{Ke=E.vertexShader,Xe=E.fragmentShader;const vt=f.getVertexShaderStage(E),ft=f.getFragmentShaderStage(E);f.update(E,vt,ft),$e=vt.id,J=ft.id}const fe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),je=Z.isInstancedMesh===!0,Ge=Z.isBatchedMesh===!0,Ce=!!E.map,Dt=!!E.matcap,it=!!q,_t=!!E.aoMap,bt=!!E.lightMap,dt=!!E.bumpMap&&E.wireframe===!1,Je=!!E.normalMap,Tt=!!E.displacementMap,Vt=!!E.emissiveMap,wt=!!E.metalnessMap,Ct=!!E.roughnessMap,X=E.anisotropy>0,Yt=E.clearcoat>0,ke=E.dispersion>0,R=E.retroreflectivity>0,y=E.iridescence>0,K=E.sheen>0,le=E.transmission>0,he=X&&!!E.anisotropyMap,Re=Yt&&!!E.clearcoatMap,Ie=Yt&&!!E.clearcoatNormalMap,xe=Yt&&!!E.clearcoatRoughnessMap,Se=y&&!!E.iridescenceMap,Ue=y&&!!E.iridescenceThicknessMap,Ze=K&&!!E.sheenColorMap,Fe=K&&!!E.sheenRoughnessMap,P=!!E.specularMap,ie=!!E.specularColorMap,ye=!!E.specularIntensityMap,me=le&&!!E.transmissionMap,k=le&&!!E.thicknessMap,F=!!E.gradientMap,_e=!!E.alphaMap,Ee=E.alphaTest>0,Oe=!!E.alphaHash,Me=!!E.extensions;let Ye=Zi;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const ze={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:Xe,defines:E.defines,customVertexShaderID:$e,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&Z._colorsTexture!==null,instancing:je,instancingColor:je&&Z.instanceColor!==null,instancingMorph:je&&Z.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ce,matcap:Dt,envMap:it,envMapMode:it&&q.mapping,envMapCubeUVHeight:Q,aoMap:_t,lightMap:bt,bumpMap:dt,normalMap:Je,displacementMap:Tt,emissiveMap:Vt,normalMapObjectSpace:Je&&E.normalMapType===p_,normalMapTangentSpace:Je&&E.normalMapType===uf,packedNormalMap:Je&&E.normalMapType===uf&&FE(E.normalMap.format),metalnessMap:wt,roughnessMap:Ct,anisotropy:X,anisotropyMap:he,clearcoat:Yt,clearcoatMap:Re,clearcoatNormalMap:Ie,clearcoatRoughnessMap:xe,dispersion:ke,retroreflection:R,iridescence:y,iridescenceMap:Se,iridescenceThicknessMap:Ue,sheen:K,sheenColorMap:Ze,sheenRoughnessMap:Fe,specularMap:P,specularColorMap:ie,specularIntensityMap:ye,transmission:le,transmissionMap:me,thicknessMap:k,gradientMap:F,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ee,alphaHash:Oe,combine:E.combine,mapUv:Ce&&w(E.map.channel),aoMapUv:_t&&w(E.aoMap.channel),lightMapUv:bt&&w(E.lightMap.channel),bumpMapUv:dt&&w(E.bumpMap.channel),normalMapUv:Je&&w(E.normalMap.channel),displacementMapUv:Tt&&w(E.displacementMap.channel),emissiveMapUv:Vt&&w(E.emissiveMap.channel),metalnessMapUv:wt&&w(E.metalnessMap.channel),roughnessMapUv:Ct&&w(E.roughnessMap.channel),anisotropyMapUv:he&&w(E.anisotropyMap.channel),clearcoatMapUv:Re&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&w(E.sheenRoughnessMap.channel),specularMapUv:P&&w(E.specularMap.channel),specularColorMapUv:ie&&w(E.specularColorMap.channel),specularIntensityMapUv:ye&&w(E.specularIntensityMap.channel),transmissionMapUv:me&&w(E.transmissionMap.channel),thicknessMapUv:k&&w(E.thicknessMap.channel),alphaMapUv:_e&&w(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Je||X),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(Ce||_e),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&Je===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:we,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&Ut.getTransfer(E.map.colorSpace)===Xt,decodeVideoTextureEmissive:Vt&&E.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(E.emissiveMap.colorSpace)===Xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Me&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&E.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function x(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)L.push(z),L.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(v(L,E),U(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function v(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function U(E,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function V(E){const L=M[E.type];let z;if(L){const Y=qi[L];z=tx.clone(Y.uniforms)}else z=E.uniforms;return z}function C(E,L){let z=_.get(L);return z!==void 0?++z.usedTimes:(z=new NE(s,L,E,o),h.push(z),_.set(L,z)),z}function N(E){if(--E.usedTimes===0){const L=h.indexOf(E);h[L]=h[h.length-1],h.pop(),_.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function B(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:V,acquireProgram:C,releaseProgram:N,releaseShaderCache:D,programs:h,dispose:B}}function BE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function kE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function og(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,w,b,x,v){let U=s[e];return U===void 0?(U={id:g.id,object:g,geometry:M,material:w,materialVariant:u(g),groupOrder:b,renderOrder:g.renderOrder,z:x,group:v},s[e]=U):(U.id=g.id,U.object=g,U.geometry=M,U.material=w,U.materialVariant=u(g),U.groupOrder=b,U.renderOrder=g.renderOrder,U.z=x,U.group=v),e++,U}function p(g,M,w,b,x,v,U){U.reversedDepth===!0&&(x=-x);const V=f(g,M,w,b,x,v);w.transmission>0?r.push(V):w.transparent===!0?o.push(V):t.push(V)}function h(g,M,w,b,x,v){const U=f(g,M,w,b,x,v);w.transmission>0?r.unshift(U):w.transparent===!0?o.unshift(U):t.unshift(U)}function _(g,M){t.length>1&&t.sort(g||kE),r.length>1&&r.sort(M||ag),o.length>1&&o.sort(M||ag)}function S(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:h,finish:S,sort:_}}function zE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new og,s.set(r,[u])):o>=l.length?(u=new og,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function GE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new oe,color:new Rt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=t,t}}}function VE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HE=0;function WE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function XE(s){const e=new GE,t=VE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const o=new oe,l=new tn,u=new tn;function f(h){let _=0,S=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let M=0,w=0,b=0,x=0,v=0,U=0,V=0,C=0,N=0,D=0,B=0,E=0,L=0,z=0;h.sort(WE);for(let Z=0,ne=h.length;Z<ne;Z++){const H=h[Z],ee=H.color,ge=H.intensity,re=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ws?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=ee.r*ge,S+=ee.g*ge,g+=ee.b*ge;else if(H.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(H.sh.coefficients[Q],ge);z++}else if(H.isSunLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const te=H.shadow,I=t.get(H);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),r.sunShadow[w]=I,r.sunShadowMap[w]=q;const ue=te.getViewportCount();for(let we=0;we<ue;we++)r.sunShadowMatrix[b+we]=te.getMatrix(we),r.sunShadowCascade[b+we]=te._cascadeData[we];b+=ue,w++}r.sun[M]=Q,M++}else if(H.isDirectionalLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const te=H.shadow,I=t.get(H);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,r.directionalShadow[x]=I,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=H.shadow.matrix,N++}r.directional[x]=Q,x++}else if(H.isSpotLight){const Q=e.get(H);Q.position.setFromMatrixPosition(H.matrixWorld),Q.color.copy(ee).multiplyScalar(ge),Q.distance=re,Q.coneCos=Math.cos(H.angle),Q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Q.decay=H.decay,r.spot[U]=Q;const te=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,te.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[U]=te.matrix,H.castShadow){const I=t.get(H);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,r.spotShadow[U]=I,r.spotShadowMap[U]=q,B++}U++}else if(H.isRectAreaLight){const Q=e.get(H);Q.color.copy(ee).multiplyScalar(ge),Q.halfWidth.set(H.width*.5,0,0),Q.halfHeight.set(0,H.height*.5,0),r.rectArea[V]=Q,V++}else if(H.isPointLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),Q.distance=H.distance,Q.decay=H.decay,H.castShadow){const te=H.shadow,I=t.get(H);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,r.pointShadow[v]=I,r.pointShadowMap[v]=q,r.pointShadowMatrix[v]=H.shadow.matrix,D++}r.point[v]=Q,v++}else if(H.isHemisphereLight){const Q=e.get(H);Q.skyColor.copy(H.color).multiplyScalar(ge),Q.groundColor.copy(H.groundColor).multiplyScalar(ge),r.hemi[C]=Q,C++}}V>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=g;const Y=r.hash;(Y.sunLength!==M||Y.directionalLength!==x||Y.pointLength!==v||Y.spotLength!==U||Y.rectAreaLength!==V||Y.hemiLength!==C||Y.numSunShadows!==w||Y.numDirectionalShadows!==N||Y.numPointShadows!==D||Y.numSpotShadows!==B||Y.numSpotMaps!==E||Y.numLightProbes!==z)&&(r.sun.length=M,r.directional.length=x,r.spot.length=U,r.rectArea.length=V,r.point.length=v,r.hemi.length=C,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=B,r.spotShadowMap.length=B,r.spotLightMatrix.length=B+E-L,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=z,Y.sunLength=M,Y.directionalLength=x,Y.pointLength=v,Y.spotLength=U,Y.rectAreaLength=V,Y.hemiLength=C,Y.numSunShadows=w,Y.numDirectionalShadows=N,Y.numPointShadows=D,Y.numSpotShadows=B,Y.numSpotMaps=E,Y.numLightProbes=z,r.version=HE++)}function p(h,_){let S=0,g=0,M=0,w=0,b=0,x=0;const v=_.matrixWorldInverse;for(let U=0,V=h.length;U<V;U++){const C=h[U];if(C.isSunLight){const N=r.sun[S];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(v),S++}else if(C.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),g++}else if(C.isSpotLight){const N=r.spot[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),w++}else if(C.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(v),u.identity(),l.copy(C.matrixWorld),l.premultiply(v),u.extractRotation(l),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),b++}else if(C.isPointLight){const N=r.point[M];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(v),M++}else if(C.isHemisphereLight){const N=r.hemi[x];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(v),x++}}}return{setup:f,setupView:p,state:r}}function lg(s){const e=new XE(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function p(g){o.push(g)}function h(){e.setup(t)}function _(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:h,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function YE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new lg(s),e.set(o,[f])):l>=u.length?(f=new lg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const qE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
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
}`,KE=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],$E=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],cg=new tn,so=new oe,Ed=new oe;function ZE(s,e,t){let r=new Cf;const o=new Ot,l=new Ot,u=new an,f=new sx,p=new ax,h={},_=t.maxTextureSize,S={[ys]:Jn,[Jn]:ys,[ji]:ji},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:qE,fragmentShader:jE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new Pn;w.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ht(w,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let v=this.type;this.render=function(D,B,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===Xv&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yl);const L=s.getRenderTarget(),z=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(_r),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ne=v!==this.type;ne&&B.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ee=>ee.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ee=D.length;H<ee;H++){const ge=D[H],re=ge.shadow;if(re===void 0){mt("WebGLShadowMap:",ge,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;o.copy(re.mapSize);const q=re.getFrameExtents();o.multiply(q),l.copy(re.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/q.x),o.x=l.x*q.x,re.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/q.y),o.y=l.y*q.y,re.mapSize.y=l.y));const Q=s.state.buffers.depth.getReversed();if(re.camera._reversedDepth=Q,re.map===null||ne===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===ao){if(ge.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new Ui(o.x,o.y,{format:ws,type:Qi,minFilter:On,magFilter:On,generateMipmaps:!1}),re.map.texture.name=ge.name+".shadowMap",re.map.depthTexture=new mo(o.x,o.y,Ki),re.map.depthTexture.name=ge.name+".shadowMapDepth",re.map.depthTexture.format=Sr,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=Cn,re.map.depthTexture.magFilter=Cn}else ge.isPointLight?(re.map=new Yg(o.x),re.map.depthTexture=new Q_(o.x,Ji)):(re.map=new Ui(o.x,o.y),re.map.depthTexture=new mo(o.x,o.y,Ji)),re.map.depthTexture.name=ge.name+".shadowMap",re.map.depthTexture.format=Sr,this.type===Yl?(re.map.depthTexture.compareFunction=Q?Tf:wf,re.map.depthTexture.minFilter=On,re.map.depthTexture.magFilter=On):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=Cn,re.map.depthTexture.magFilter=Cn);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==o.x||re.map.height!==o.y)&&re.map.setSize(o.x,o.y);const te=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();ge.isPointLight!==!0&&re.updateMatrices(ge,E);for(let I=0;I<te;I++){const ue=re.getCamera(I);if(ge.isPointLight){const we=re.camera,Ke=re.matrix,Xe=ge.distance||we.far;Xe!==we.far&&(we.far=Xe,we.updateProjectionMatrix()),so.setFromMatrixPosition(ge.matrixWorld),we.position.copy(so),Ed.copy(we.position),Ed.add(KE[I]),we.up.copy($E[I]),we.lookAt(Ed),we.updateMatrixWorld(),Ke.makeTranslation(-so.x,-so.y,-so.z),cg.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),re._frustum.setFromProjectionMatrix(cg,we.coordinateSystem,we.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)s.setRenderTarget(re.map,I),s.clear();else{I===0&&(s.setRenderTarget(re.map),s.clear());const we=re.getViewport(I);u.set(l.x*we.x,l.y*we.y,l.x*we.z,l.y*we.w),Z.viewport(u)}r=re.getFrustum(I),C(B,E,ue,ge,this.type)}re.isPointLightShadow!==!0&&this.type===ao&&U(re,E),re.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(L,z,Y)};function U(D,B){const E=e.update(b);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ui(o.x,o.y,{format:ws,type:Qi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(B,null,E,g,b,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(B,null,E,M,b,null)}function V(D,B,E,L){let z=null;const Y=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)z=Y;else if(z=E.isPointLight===!0?p:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=z.uuid,ne=B.uuid;let H=h[Z];H===void 0&&(H={},h[Z]=H);let ee=H[ne];ee===void 0&&(ee=z.clone(),H[ne]=ee,B.addEventListener("dispose",N)),z=ee}if(z.visible=B.visible,z.wireframe=B.wireframe,L===ao?z.side=B.shadowSide!==null?B.shadowSide:B.side:z.side=B.shadowSide!==null?B.shadowSide:S[B.side],z.alphaMap=B.alphaMap,z.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,z.map=B.map,z.clipShadows=B.clipShadows,z.clippingPlanes=B.clippingPlanes,z.clipIntersection=B.clipIntersection,z.displacementMap=B.displacementMap,z.displacementScale=B.displacementScale,z.displacementBias=B.displacementBias,z.wireframeLinewidth=B.wireframeLinewidth,z.linewidth=B.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Z=s.properties.get(z);Z.light=E}return z}function C(D,B,E,L,z){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&z===ao)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const ne=e.update(D),H=D.material;if(Array.isArray(H)){const ee=ne.groups;for(let ge=0,re=ee.length;ge<re;ge++){const q=ee[ge],Q=H[q.materialIndex];if(Q&&Q.visible){const te=V(D,Q,L,z);D.onBeforeShadow(s,D,B,E,ne,te,q),s.renderBufferDirect(E,null,ne,te,D,q),D.onAfterShadow(s,D,B,E,ne,te,q)}}}else if(H.visible){const ee=V(D,H,L,z);D.onBeforeShadow(s,D,B,E,ne,ee,null),s.renderBufferDirect(E,null,ne,ee,D,null),D.onAfterShadow(s,D,B,E,ne,ee,null)}}const Z=D.children;for(let ne=0,H=Z.length;ne<H;ne++)C(Z[ne],B,E,L,z)}function N(D){D.target.removeEventListener("dispose",N);for(const E in h){const L=h[E],z=D.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function JE(s,e){function t(){let k=!1;const F=new an;let _e=null;const Ee=new an(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!k&&(s.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){k=Oe},setClear:function(Oe,Me,Ye,ze,vt){vt===!0&&(Oe*=ze,Me*=ze,Ye*=ze),F.set(Oe,Me,Ye,ze),Ee.equals(F)===!1&&(s.clearColor(Oe,Me,Ye,ze),Ee.copy(F))},reset:function(){k=!1,_e=null,Ee.set(-1,0,0,0)}}}function r(){let k=!1,F=!1,_e=null,Ee=null,Oe=null;return{setReversed:function(Me){if(F!==Me){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),F=Me;const ze=Oe;Oe=null,this.setClear(ze)}},getReversed:function(){return F},setTest:function(Me){Me?fe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Me){_e!==Me&&!k&&(s.depthMask(Me),_e=Me)},setFunc:function(Me){if(F&&(Me=A_[Me]),Ee!==Me){switch(Me){case Td:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case uo:s.depthFunc(s.LEQUAL);break;case Rd:s.depthFunc(s.EQUAL);break;case Cd:s.depthFunc(s.GEQUAL);break;case Pd:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Oe!==Me&&(Oe=Me,F&&(Me=1-Me),s.clearDepth(Me))},reset:function(){k=!1,_e=null,Ee=null,Oe=null,F=!1}}}function o(){let k=!1,F=null,_e=null,Ee=null,Oe=null,Me=null,Ye=null,ze=null,vt=null;return{setTest:function(ft){k||(ft?fe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(ft){F!==ft&&!k&&(s.stencilMask(ft),F=ft)},setFunc:function(ft,qt,on){(_e!==ft||Ee!==qt||Oe!==on)&&(s.stencilFunc(ft,qt,on),_e=ft,Ee=qt,Oe=on)},setOp:function(ft,qt,on){(Me!==ft||Ye!==qt||ze!==on)&&(s.stencilOp(ft,qt,on),Me=ft,Ye=qt,ze=on)},setLocked:function(ft){k=ft},setClear:function(ft){vt!==ft&&(s.clearStencil(ft),vt=ft)},reset:function(){k=!1,F=null,_e=null,Ee=null,Oe=null,Me=null,Ye=null,ze=null,vt=null}}}const l=new t,u=new r,f=new o,p=new WeakMap,h=new WeakMap;let _={},S={},g={},M=new WeakMap,w=[],b=null,x=!1,v=null,U=null,V=null,C=null,N=null,D=null,B=null,E=new Rt(0,0,0),L=0,z=!1,Y=null,Z=null,ne=null,H=null,ee=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,q=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),re=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),re=q>=2);let te=null,I={};const ue=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Ke=new an().fromArray(ue),Xe=new an().fromArray(we);function $e(k,F,_e,Ee){const Oe=new Uint8Array(4),Me=s.createTexture();s.bindTexture(k,Me),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<_e;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(F,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(F+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return Me}const J={};J[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),u.setFunc(uo),dt(!1),Je(um),fe(s.CULL_FACE),_t(_r);function fe(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function Ae(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function je(k,F){return g[k]!==F?(s.bindFramebuffer(k,F),g[k]=F,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=F),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=F),!0):!1}function Ge(k,F){let _e=w,Ee=!1;if(k){_e=M.get(F),_e===void 0&&(_e=[],M.set(F,_e));const Oe=k.textures;if(_e.length!==Oe.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ye=Oe.length;Me<Ye;Me++)_e[Me]=s.COLOR_ATTACHMENT0+Me;_e.length=Oe.length,Ee=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(_e)}function Ce(k){return b!==k?(s.useProgram(k),b=k,!0):!1}const Dt={[ua]:s.FUNC_ADD,[qv]:s.FUNC_SUBTRACT,[jv]:s.FUNC_REVERSE_SUBTRACT};Dt[Kv]=s.MIN,Dt[$v]=s.MAX;const it={[Zv]:s.ZERO,[Jv]:s.ONE,[Qv]:s.SRC_COLOR,[pg]:s.SRC_ALPHA,[s_]:s.SRC_ALPHA_SATURATE,[i_]:s.DST_COLOR,[t_]:s.DST_ALPHA,[e_]:s.ONE_MINUS_SRC_COLOR,[mg]:s.ONE_MINUS_SRC_ALPHA,[r_]:s.ONE_MINUS_DST_COLOR,[n_]:s.ONE_MINUS_DST_ALPHA,[a_]:s.CONSTANT_COLOR,[o_]:s.ONE_MINUS_CONSTANT_COLOR,[l_]:s.CONSTANT_ALPHA,[c_]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(k,F,_e,Ee,Oe,Me,Ye,ze,vt,ft){if(k===_r){x===!0&&(Ae(s.BLEND),x=!1);return}if(x===!1&&(fe(s.BLEND),x=!0),k!==Yv){if(k!==v||ft!==z){if((U!==ua||N!==ua)&&(s.blendEquation(s.FUNC_ADD),U=ua,N=ua),ft)switch(k){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yi:s.blendFunc(s.ONE,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",k);break}else switch(k){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dm:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",k);break}V=null,C=null,D=null,B=null,E.set(0,0,0),L=0,v=k,z=ft}return}Oe=Oe||F,Me=Me||_e,Ye=Ye||Ee,(F!==U||Oe!==N)&&(s.blendEquationSeparate(Dt[F],Dt[Oe]),U=F,N=Oe),(_e!==V||Ee!==C||Me!==D||Ye!==B)&&(s.blendFuncSeparate(it[_e],it[Ee],it[Me],it[Ye]),V=_e,C=Ee,D=Me,B=Ye),(ze.equals(E)===!1||vt!==L)&&(s.blendColor(ze.r,ze.g,ze.b,vt),E.copy(ze),L=vt),v=k,z=!1}function bt(k,F){k.side===ji?Ae(s.CULL_FACE):fe(s.CULL_FACE);let _e=k.side===Jn;F&&(_e=!_e),dt(_e),k.blending===lo&&k.transparent===!1?_t(_r):_t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ee=k.stencilWrite;f.setTest(Ee),Ee&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){Y!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),Y=k)}function Je(k){k!==Hv?(fe(s.CULL_FACE),k!==Z&&(k===um?s.cullFace(s.BACK):k===Wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),Z=k}function Tt(k){k!==ne&&(re&&s.lineWidth(k),ne=k)}function Vt(k,F,_e){k?(fe(s.POLYGON_OFFSET_FILL),(H!==F||ee!==_e)&&(H=F,ee=_e,u.getReversed()&&(F=-F),s.polygonOffset(F,_e))):Ae(s.POLYGON_OFFSET_FILL)}function wt(k){k?fe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function Ct(k){k===void 0&&(k=s.TEXTURE0+ge-1),te!==k&&(s.activeTexture(k),te=k)}function X(k,F,_e){_e===void 0&&(te===null?_e=s.TEXTURE0+ge-1:_e=te);let Ee=I[_e];Ee===void 0&&(Ee={type:void 0,texture:void 0},I[_e]=Ee),(Ee.type!==k||Ee.texture!==F)&&(te!==_e&&(s.activeTexture(_e),te=_e),s.bindTexture(k,F||J[k]),Ee.type=k,Ee.texture=F)}function Yt(){const k=I[te];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ke(){try{s.compressedTexImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function K(){try{s.texSubImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Re(){try{s.texStorage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Ie(){try{s.texStorage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function xe(){try{s.texImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Se(){try{s.texImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Ue(k){return S[k]!==void 0?S[k]:s.getParameter(k)}function Ze(k,F){S[k]!==F&&(s.pixelStorei(k,F),S[k]=F)}function Fe(k){Ke.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function P(k){Xe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function ie(k,F){let _e=h.get(F);_e===void 0&&(_e=new WeakMap,h.set(F,_e));let Ee=_e.get(k);Ee===void 0&&(Ee=s.getUniformBlockIndex(F,k.name),_e.set(k,Ee))}function ye(k,F){const Ee=h.get(F).get(k);p.get(F)!==Ee&&(s.uniformBlockBinding(F,Ee,k.__bindingPointIndex),p.set(F,Ee))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},te=null,I={},g={},M=new WeakMap,w=[],b=null,x=!1,v=null,U=null,V=null,C=null,N=null,D=null,B=null,E=new Rt(0,0,0),L=0,z=!1,Y=null,Z=null,ne=null,H=null,ee=null,Ke.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:fe,disable:Ae,bindFramebuffer:je,drawBuffers:Ge,useProgram:Ce,setBlending:_t,setMaterial:bt,setFlipSided:dt,setCullFace:Je,setLineWidth:Tt,setPolygonOffset:Vt,setScissorTest:wt,activeTexture:Ct,bindTexture:X,unbindTexture:Yt,compressedTexImage2D:ke,compressedTexImage3D:R,texImage2D:xe,texImage3D:Se,pixelStorei:Ze,getParameter:Ue,updateUBOMapping:ie,uniformBlockBinding:ye,texStorage2D:Re,texStorage3D:Ie,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Fe,viewport:P,reset:me}}function QE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,_=new WeakMap,S=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,y){return w?new OffscreenCanvas(R,y):nc("canvas")}function x(R,y,K){let le=1;const he=ke(R);if((he.width>K||he.height>K)&&(le=K/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Re=Math.floor(le*he.width),Ie=Math.floor(le*he.height);g===void 0&&(g=b(Re,Ie));const xe=y?b(Re,Ie):g;return xe.width=Re,xe.height=Ie,xe.getContext("2d").drawImage(R,0,0,Re,Ie),mt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Re+"x"+Ie+")."),xe}else return"data"in R&&mt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),R;return R}function v(R){return R.generateMipmaps}function U(R){s.generateMipmap(R)}function V(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(R,y,K,le,he,Re=!1){if(R!==null){if(s[R]!==void 0)return s[R];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ie;le&&(Ie=e.get("EXT_texture_norm16"),Ie||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=y;if(y===s.RED&&(K===s.FLOAT&&(xe=s.R32F),K===s.HALF_FLOAT&&(xe=s.R16F),K===s.UNSIGNED_BYTE&&(xe=s.R8),K===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.R16_EXT),K===s.SHORT&&Ie&&(xe=Ie.R16_SNORM_EXT)),y===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(xe=s.R8UI),K===s.UNSIGNED_SHORT&&(xe=s.R16UI),K===s.UNSIGNED_INT&&(xe=s.R32UI),K===s.BYTE&&(xe=s.R8I),K===s.SHORT&&(xe=s.R16I),K===s.INT&&(xe=s.R32I)),y===s.RG&&(K===s.FLOAT&&(xe=s.RG32F),K===s.HALF_FLOAT&&(xe=s.RG16F),K===s.UNSIGNED_BYTE&&(xe=s.RG8),K===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.RG16_EXT),K===s.SHORT&&Ie&&(xe=Ie.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(xe=s.RG8UI),K===s.UNSIGNED_SHORT&&(xe=s.RG16UI),K===s.UNSIGNED_INT&&(xe=s.RG32UI),K===s.BYTE&&(xe=s.RG8I),K===s.SHORT&&(xe=s.RG16I),K===s.INT&&(xe=s.RG32I)),y===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),K===s.UNSIGNED_INT&&(xe=s.RGB32UI),K===s.BYTE&&(xe=s.RGB8I),K===s.SHORT&&(xe=s.RGB16I),K===s.INT&&(xe=s.RGB32I)),y===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),K===s.UNSIGNED_INT&&(xe=s.RGBA32UI),K===s.BYTE&&(xe=s.RGBA8I),K===s.SHORT&&(xe=s.RGBA16I),K===s.INT&&(xe=s.RGBA32I)),y===s.RGB&&(K===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.RGB16_EXT),K===s.SHORT&&Ie&&(xe=Ie.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),y===s.RGBA){const Se=Re?tc:Ut.getTransfer(he);K===s.FLOAT&&(xe=s.RGBA32F),K===s.HALF_FLOAT&&(xe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(xe=Se===Xt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.RGBA16_EXT),K===s.SHORT&&Ie&&(xe=Ie.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function N(R,y){let K;return R?y===null||y===Ji||y===ho?K=s.DEPTH24_STENCIL8:y===Ki?K=s.DEPTH32F_STENCIL8:y===fo&&(K=s.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ji||y===ho?K=s.DEPTH_COMPONENT24:y===Ki?K=s.DEPTH_COMPONENT32F:y===fo&&(K=s.DEPTH_COMPONENT16),K}function D(R,y){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Cn&&R.minFilter!==On?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function B(R){const y=R.target;y.removeEventListener("dispose",B),L(y),y.isVideoTexture&&_.delete(y),y.isHTMLTexture&&S.delete(y)}function E(R){const y=R.target;y.removeEventListener("dispose",E),Y(y)}function L(R){const y=r.get(R);if(y.__webglInit===void 0)return;const K=R.source,le=M.get(K);if(le){const he=le[y.__cacheKey];he.usedTimes--,he.usedTimes===0&&z(R),Object.keys(le).length===0&&M.delete(K)}r.remove(R)}function z(R){const y=r.get(R);s.deleteTexture(y.__webglTexture);const K=R.source,le=M.get(K);delete le[y.__cacheKey],u.memory.textures--}function Y(R){const y=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(y.__webglFramebuffer[le]))for(let he=0;he<y.__webglFramebuffer[le].length;he++)s.deleteFramebuffer(y.__webglFramebuffer[le][he]);else s.deleteFramebuffer(y.__webglFramebuffer[le]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[le])}else{if(Array.isArray(y.__webglFramebuffer))for(let le=0;le<y.__webglFramebuffer.length;le++)s.deleteFramebuffer(y.__webglFramebuffer[le]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let le=0;le<y.__webglColorRenderbuffer.length;le++)y.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[le]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=R.textures;for(let le=0,he=K.length;le<he;le++){const Re=r.get(K[le]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(K[le])}r.remove(R)}let Z=0;function ne(){Z=0}function H(){return Z}function ee(R){Z=R}function ge(){const R=Z;return R>=o.maxTextures&&mt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,R}function re(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function q(R,y){const K=r.get(R);if(R.isVideoTexture&&X(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const le=R.image;if(le===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(K,R,y);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+y)}function Q(R,y){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Ae(K,R,y);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+y)}function te(R,y){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Ae(K,R,y);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+y)}function I(R,y){const K=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){je(K,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+y)}const ue={[Es]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[Nd]:s.MIRRORED_REPEAT},we={[Cn]:s.NEAREST,[f_]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},Ke={[g_]:s.NEVER,[y_]:s.ALWAYS,[v_]:s.LESS,[wf]:s.LEQUAL,[__]:s.EQUAL,[Tf]:s.GEQUAL,[x_]:s.GREATER,[S_]:s.NOTEQUAL};function Xe(R,y){if(y.type===Ki&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===On||y.magFilter===Xu||y.magFilter===Sl||y.magFilter===xs||y.minFilter===On||y.minFilter===Xu||y.minFilter===Sl||y.minFilter===xs)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ue[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ue[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ue[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,we[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,we[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==Sl&&y.minFilter!==xs||y.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function $e(R,y){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",B));const le=y.source;let he=M.get(le);he===void 0&&(he={},M.set(le,he));const Re=re(y);if(Re!==R.__cacheKey){he[Re]===void 0&&(he[Re]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),he[Re].usedTimes++;const Ie=he[R.__cacheKey];Ie!==void 0&&(he[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&z(y)),R.__cacheKey=Re,R.__webglTexture=he[Re].texture}return K}function J(R,y,K){return Math.floor(Math.floor(R/K)/y)}function fe(R,y,K,le){const Re=R.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,K,le,y.data);else{Re.sort((Ze,Fe)=>Ze.start-Fe.start);let Ie=0;for(let Ze=1;Ze<Re.length;Ze++){const Fe=Re[Ie],P=Re[Ze],ie=Fe.start+Fe.count,ye=J(P.start,y.width,4),me=J(Fe.start,y.width,4);P.start<=ie+1&&ye===me&&J(P.start+P.count-1,y.width,4)===ye?Fe.count=Math.max(Fe.count,P.start+P.count-Fe.start):(++Ie,Re[Ie]=P)}Re.length=Ie+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ze=0,Fe=Re.length;Ze<Fe;Ze++){const P=Re[Ze],ie=Math.floor(P.start/4),ye=Math.ceil(P.count/4),me=ie%y.width,k=Math.floor(ie/y.width),F=ye,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,me,k,F,_e,K,le,y.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function Ae(R,y,K){let le=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(le=s.TEXTURE_3D);const he=$e(R,y),Re=y.source;t.bindTexture(le,R.__webglTexture,s.TEXTURE0+K);const Ie=r.get(Re);if(Re.version!==Ie.__version||he===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const _e=Ut.getPrimaries(Ut.workingColorSpace),Ee=y.colorSpace===jr?null:Ut.getPrimaries(y.colorSpace),Oe=y.colorSpace===jr||_e===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let Se=x(y.image,!1,o.maxTextureSize);Se=Yt(y,Se);const Ue=l.convert(y.format,y.colorSpace),Ze=l.convert(y.type);let Fe=C(y.internalFormat,Ue,Ze,y.normalized,y.colorSpace,y.isVideoTexture);Xe(le,y);let P;const ie=y.mipmaps,ye=y.isVideoTexture!==!0,me=Ie.__version===void 0||he===!0,k=Re.dataReady,F=D(y,Se);if(y.isDepthTexture)Fe=N(y.format===Ss,y.type),me&&(ye?t.texStorage2D(s.TEXTURE_2D,1,Fe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Fe,Se.width,Se.height,0,Ue,Ze,null));else if(y.isDataTexture)if(ie.length>0){ye&&me&&t.texStorage2D(s.TEXTURE_2D,F,Fe,ie[0].width,ie[0].height);for(let _e=0,Ee=ie.length;_e<Ee;_e++)P=ie[_e],ye?k&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,P.width,P.height,Ue,Ze,P.data):t.texImage2D(s.TEXTURE_2D,_e,Fe,P.width,P.height,0,Ue,Ze,P.data);y.generateMipmaps=!1}else ye?(me&&t.texStorage2D(s.TEXTURE_2D,F,Fe,Se.width,Se.height),k&&fe(y,Se,Ue,Ze)):t.texImage2D(s.TEXTURE_2D,0,Fe,Se.width,Se.height,0,Ue,Ze,Se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ye&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,F,Fe,ie[0].width,ie[0].height,Se.depth);for(let _e=0,Ee=ie.length;_e<Ee;_e++)if(P=ie[_e],y.format!==Ii)if(Ue!==null)if(ye){if(k)if(y.layerUpdates.size>0){const Oe=Gm(P.width,P.height,y.format,y.type);for(const Me of y.layerUpdates){const Ye=P.data.subarray(Me*Oe/P.data.BYTES_PER_ELEMENT,(Me+1)*Oe/P.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Me,P.width,P.height,1,Ue,Ye)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,P.width,P.height,Se.depth,Ue,P.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Fe,P.width,P.height,Se.depth,0,P.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,P.width,P.height,Se.depth,Ue,Ze,P.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Fe,P.width,P.height,Se.depth,0,Ue,Ze,P.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ye&&me&&t.texStorage2D(s.TEXTURE_2D,F,Fe,ie[0].width,ie[0].height);for(let _e=0,Ee=ie.length;_e<Ee;_e++)P=ie[_e],y.format!==Ii?Ue!==null?ye?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,P.width,P.height,Ue,P.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Fe,P.width,P.height,0,P.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?k&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,P.width,P.height,Ue,Ze,P.data):t.texImage2D(s.TEXTURE_2D,_e,Fe,P.width,P.height,0,Ue,Ze,P.data)}else if(y.isDataArrayTexture)if(ye){if(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,F,Fe,Se.width,Se.height,Se.depth),k)if(y.layerUpdates.size>0){const _e=Gm(Se.width,Se.height,y.format,y.type);for(const Ee of y.layerUpdates){const Oe=Se.data.subarray(Ee*_e/Se.data.BYTES_PER_ELEMENT,(Ee+1)*_e/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ee,Se.width,Se.height,1,Ue,Ze,Oe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ue,Ze,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,Se.width,Se.height,Se.depth,0,Ue,Ze,Se.data);else if(y.isData3DTexture)ye?(me&&t.texStorage3D(s.TEXTURE_3D,F,Fe,Se.width,Se.height,Se.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ue,Ze,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,Se.width,Se.height,Se.depth,0,Ue,Ze,Se.data);else if(y.isFramebufferTexture){if(me)if(ye)t.texStorage2D(s.TEXTURE_2D,F,Fe,Se.width,Se.height);else{let _e=Se.width,Ee=Se.height;for(let Oe=0;Oe<F;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Fe,_e,Ee,0,Ue,Ze,null),_e>>=1,Ee>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Se.parentNode!==_e){_e.appendChild(Se),S.add(y),_e.onpaint=Ee=>{const Oe=Ee.changedElements;for(const Me of S)Oe.includes(Me.image)&&(Me.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Se);else{const Oe=s.RGBA,Me=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Oe,Me,Ye,Se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ie.length>0){if(ye&&me){const _e=ke(ie[0]);t.texStorage2D(s.TEXTURE_2D,F,Fe,_e.width,_e.height)}for(let _e=0,Ee=ie.length;_e<Ee;_e++)P=ie[_e],ye?k&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ue,Ze,P):t.texImage2D(s.TEXTURE_2D,_e,Fe,Ue,Ze,P);y.generateMipmaps=!1}else if(ye){if(me){const _e=ke(Se);t.texStorage2D(s.TEXTURE_2D,F,Fe,_e.width,_e.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Ze,Se)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Ue,Ze,Se);v(y)&&U(le),Ie.__version=Re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function je(R,y,K){if(y.image.length!==6)return;const le=$e(R,y),he=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+K);const Re=r.get(he);if(he.version!==Re.__version||le===!0){t.activeTexture(s.TEXTURE0+K);const Ie=Ut.getPrimaries(Ut.workingColorSpace),xe=y.colorSpace===jr?null:Ut.getPrimaries(y.colorSpace),Se=y.colorSpace===jr||Ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Ze=y.image[0]&&y.image[0].isDataTexture,Fe=[];for(let Me=0;Me<6;Me++)!Ue&&!Ze?Fe[Me]=x(y.image[Me],!0,o.maxCubemapSize):Fe[Me]=Ze?y.image[Me].image:y.image[Me],Fe[Me]=Yt(y,Fe[Me]);const P=Fe[0],ie=l.convert(y.format,y.colorSpace),ye=l.convert(y.type),me=C(y.internalFormat,ie,ye,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,F=Re.__version===void 0||le===!0,_e=he.dataReady;let Ee=D(y,P);Xe(s.TEXTURE_CUBE_MAP,y);let Oe;if(Ue){k&&F&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,me,P.width,P.height);for(let Me=0;Me<6;Me++){Oe=Fe[Me].mipmaps;for(let Ye=0;Ye<Oe.length;Ye++){const ze=Oe[Ye];y.format!==Ii?ie!==null?k?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,ze.width,ze.height,ie,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,me,ze.width,ze.height,0,ze.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,ze.width,ze.height,ie,ye,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,me,ze.width,ze.height,0,ie,ye,ze.data)}}}else{if(Oe=y.mipmaps,k&&F){Oe.length>0&&Ee++;const Me=ke(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,me,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ze){k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Fe[Me].width,Fe[Me].height,ie,ye,Fe[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,me,Fe[Me].width,Fe[Me].height,0,ie,ye,Fe[Me].data);for(let Ye=0;Ye<Oe.length;Ye++){const vt=Oe[Ye].image[Me].image;k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,vt.width,vt.height,ie,ye,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,me,vt.width,vt.height,0,ie,ye,vt.data)}}else{k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ie,ye,Fe[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,me,ie,ye,Fe[Me]);for(let Ye=0;Ye<Oe.length;Ye++){const ze=Oe[Ye];k?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,ie,ye,ze.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,me,ie,ye,ze.image[Me])}}}v(y)&&U(s.TEXTURE_CUBE_MAP),Re.__version=he.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ge(R,y,K,le,he,Re){const Ie=l.convert(K.format,K.colorSpace),xe=l.convert(K.type),Se=C(K.internalFormat,Ie,xe,K.normalized,K.colorSpace),Ue=r.get(y),Ze=r.get(K);if(Ze.__renderTarget=y,!Ue.__hasExternalTextures){const Fe=Math.max(1,y.width>>Re),P=Math.max(1,y.height>>Re);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Re,Se,Fe,P,y.depth,0,Ie,xe,null):t.texImage2D(he,Re,Se,Fe,P,0,Ie,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ct(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,he,Ze.__webglTexture,0,wt(y)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,he,Ze.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(R,y,K){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const le=y.depthTexture,he=le&&le.isDepthTexture?le.type:null,Re=N(y.stencilBuffer,he),Ie=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ct(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(y),Re,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(y),Re,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Re,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,R)}else{const le=y.textures;for(let he=0;he<le.length;he++){const Re=le[he],Ie=l.convert(Re.format,Re.colorSpace),xe=l.convert(Re.type),Se=C(Re.internalFormat,Ie,xe,Re.normalized,Re.colorSpace);Ct(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(y),Se,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(y),Se,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Se,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(R,y,K){const le=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(y.depthTexture);if(he.__renderTarget=y,(!he.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,y.depthTexture);const Ue=l.convert(y.depthTexture.format),Ze=l.convert(y.depthTexture.type);let Fe;y.depthTexture.format===Sr?Fe=s.DEPTH_COMPONENT24:y.depthTexture.format===Ss&&(Fe=s.DEPTH24_STENCIL8);for(let P=0;P<6;P++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Fe,y.width,y.height,0,Ue,Ze,null)}}else q(y.depthTexture,0);const Re=he.__webglTexture,Ie=wt(y),xe=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Se=y.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Sr)Ct(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Re,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Re,0);else if(y.depthTexture.format===Ss)Ct(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Re,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){const y=r.get(R),K=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const le=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),le){const he=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),y.__depthDisposeCallback=he}y.__boundDepthTexture=le}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let le=0;le<6;le++)Dt(y.__webglFramebuffer[le],R,le);else{const le=R.texture.mipmaps;le&&le.length>0?Dt(y.__webglFramebuffer[0],R,0):Dt(y.__webglFramebuffer,R,0)}else if(K){y.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[le]),y.__webglDepthbuffer[le]===void 0)y.__webglDepthbuffer[le]=s.createRenderbuffer(),Ce(y.__webglDepthbuffer[le],R,!1);else{const he=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=y.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Re)}}else{const le=R.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ce(y.__webglDepthbuffer,R,!1);else{const he=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(R,y,K){const le=r.get(R);y!==void 0&&Ge(le.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&it(R)}function bt(R){const y=R.texture,K=r.get(R),le=r.get(y);R.addEventListener("dispose",E);const he=R.textures,Re=R.isWebGLCubeRenderTarget===!0,Ie=he.length>1;if(Ie||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=y.version,u.memory.textures++),Re){K.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[xe]=[];for(let Se=0;Se<y.mipmaps.length;Se++)K.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else K.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)K.__webglFramebuffer[xe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let xe=0,Se=he.length;xe<Se;xe++){const Ue=r.get(he[xe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&Ct(R)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Se=he[xe];K.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[xe]);const Ue=l.convert(Se.format,Se.colorSpace),Ze=l.convert(Se.type),Fe=C(Se.internalFormat,Ue,Ze,Se.normalized,Se.colorSpace,R.isXRRenderTarget===!0),P=wt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,P,Fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,K.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Ge(K.__webglFramebuffer[xe][Se],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else Ge(K.__webglFramebuffer[xe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(y)&&U(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,Se=he.length;xe<Se;xe++){const Ue=he[xe],Ze=r.get(Ue);let Fe=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ze.__webglTexture),Xe(Fe,Ue),Ge(K.__webglFramebuffer,R,Ue,s.COLOR_ATTACHMENT0+xe,Fe,0),v(Ue)&&U(Fe)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),Xe(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Ge(K.__webglFramebuffer[Se],R,y,s.COLOR_ATTACHMENT0,xe,Se);else Ge(K.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,xe,0);v(y)&&U(xe),t.unbindTexture()}R.depthBuffer&&it(R)}function dt(R){const y=R.textures;for(let K=0,le=y.length;K<le;K++){const he=y[K];if(v(he)){const Re=V(R),Ie=r.get(he).__webglTexture;t.bindTexture(Re,Ie),U(Re),t.unbindTexture()}}}const Je=[],Tt=[];function Vt(R){if(R.samples>0){if(Ct(R)===!1){const y=R.textures,K=R.width,le=R.height;let he=s.COLOR_BUFFER_BIT;const Re=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(R),xe=y.length>1;if(xe)for(let Ue=0;Ue<y.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Se=R.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const Ze=r.get(y[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,K,le,0,0,K,le,he,s.NEAREST),p===!0&&(Je.length=0,Tt.length=0,Je.push(s.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Je.push(Re),Tt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ue=0;Ue<y.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const Ze=r.get(y[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&p){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function wt(R){return Math.min(o.maxSamples,R.samples)}function Ct(R){const y=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function X(R){const y=u.render.frame;_.get(R)!==y&&(_.set(R,y),R.update())}function Yt(R,y){const K=R.colorSpace,le=R.format,he=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==ec&&K!==jr&&(Ut.getTransfer(K)===Xt?(le!==Ii||he!==oi)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",K)),y}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=ge,this.resetTextureUnits=ne,this.getTextureUnits=H,this.setTextureUnits=ee,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=I,this.rebindTextures=_t,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function e1(s,e){function t(r,o=jr){let l;const u=Ut.getTransfer(o);if(r===oi)return s.UNSIGNED_BYTE;if(r===xf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ag)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===wg)return s.BYTE;if(r===Tg)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===_f)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===Ki)return s.FLOAT;if(r===Qi)return s.HALF_FLOAT;if(r===Rg)return s.ALPHA;if(r===Cg)return s.RGB;if(r===Ii)return s.RGBA;if(r===Sr)return s.DEPTH_COMPONENT;if(r===Ss)return s.DEPTH_STENCIL;if(r===Pg)return s.RED;if(r===yf)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===Mf)return s.RG_INTEGER;if(r===Ef)return s.RGBA_INTEGER;if(r===ql||r===jl||r===Kl||r===$l)if(u===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dd||r===Id||r===Ud||r===Fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Dd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===Bd||r===kd||r===zd||r===Gd||r===Jl||r===Vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Od||r===Bd)return u===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===zd)return l.COMPRESSED_R11_EAC;if(r===Gd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Jl)return l.COMPRESSED_RG11_EAC;if(r===Vd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Hd||r===Wd||r===Xd||r===Yd||r===qd||r===jd||r===Kd||r===$d||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Hd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ef)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rf||r===sf||r===af)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===rf)return u===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===af)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===of||r===lf||r===Ql||r===cf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===of)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ql)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ho?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new zg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new ma(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends Ts{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,h=null,_=null,S=null,g=null,M=null,w=null;const b=typeof XRWebGLBinding<"u",x=new i1,v={},U=t.getContextAttributes();let V=null,C=null;const N=[],D=[],B=new Ot;let E=null,L=null;const z=new ai;z.viewport=new an;const Y=new ai;Y.viewport=new an;const Z=[z,Y],ne=new fx;let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=N[J];return fe===void 0&&(fe=new ed,N[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=N[J];return fe===void 0&&(fe=new ed,N[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=N[J];return fe===void 0&&(fe=new ed,N[J]=fe),fe.getHandSpace()};function ge(J){const fe=D.indexOf(J.inputSource);if(fe===-1)return;const Ae=N[fe];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,h||u),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function re(){o.removeEventListener("select",ge),o.removeEventListener("selectstart",ge),o.removeEventListener("selectend",ge),o.removeEventListener("squeeze",ge),o.removeEventListener("squeezestart",ge),o.removeEventListener("squeezeend",ge),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",q);for(let J=0;J<N.length;J++){const fe=D[J];fe!==null&&(D[J]=null,N[J].disconnect(fe))}H=null,ee=null,x.reset();for(const J in v)delete v[J];if(e.setRenderTarget(V),M=null,g=null,S=null,o=null,C=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(B.width,B.height,!1),L!==null){const J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&b&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(V=e.getRenderTarget(),o.addEventListener("select",ge),o.addEventListener("selectstart",ge),o.addEventListener("selectend",ge),o.addEventListener("squeeze",ge),o.addEventListener("squeezestart",ge),o.addEventListener("squeezeend",ge),o.addEventListener("end",re),o.addEventListener("inputsourceschange",q),U.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,je=null,Ge=null;U.depth&&(Ge=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=U.stencil?Ss:Sr,je=U.stencil?ho:Ji);const Ce={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(Ce),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ui(g.textureWidth,g.textureHeight,{format:Ii,type:oi,depthTexture:new mo(g.textureWidth,g.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Ae={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Ae),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Ui(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),$e.setContext(o),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(J){for(let fe=0;fe<J.removed.length;fe++){const Ae=J.removed[fe],je=D.indexOf(Ae);je>=0&&(D[je]=null,N[je].disconnect(Ae))}for(let fe=0;fe<J.added.length;fe++){const Ae=J.added[fe];let je=D.indexOf(Ae);if(je===-1){for(let Ce=0;Ce<N.length;Ce++)if(Ce>=D.length){D.push(Ae),je=Ce;break}else if(D[Ce]===null){D[Ce]=Ae,je=Ce;break}if(je===-1)break}const Ge=N[je];Ge&&Ge.connect(Ae)}}const Q=new oe,te=new oe;function I(J,fe,Ae){Q.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(Ae.matrixWorld);const je=Q.distanceTo(te),Ge=fe.projectionMatrix.elements,Ce=Ae.projectionMatrix.elements,Dt=Ge[14]/(Ge[10]-1),it=Ge[14]/(Ge[10]+1),_t=(Ge[9]+1)/Ge[5],bt=(Ge[9]-1)/Ge[5],dt=(Ge[8]-1)/Ge[0],Je=(Ce[8]+1)/Ce[0],Tt=Dt*dt,Vt=Dt*Je,wt=je/(-dt+Je),Ct=wt*-dt;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ge[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const X=Dt+wt,Yt=it+wt,ke=Tt-Ct,R=Vt+(je-Ct),y=_t*it/Yt*X,K=bt*it/Yt*X;J.projectionMatrix.makePerspective(ke,R,y,K,X,Yt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let fe=J.near,Ae=J.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),ne.near=Y.near=z.near=fe,ne.far=Y.far=z.far=Ae,(H!==ne.near||ee!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),H=ne.near,ee=ne.far),ne.layers.mask=J.layers.mask|6,z.layers.mask=ne.layers.mask&-5,Y.layers.mask=ne.layers.mask&-3;const je=J.parent,Ge=ne.cameras;ue(ne,je);for(let Ce=0;Ce<Ge.length;Ce++)ue(Ge[Ce],je);Ge.length===2?I(ne,z,Y):ne.projectionMatrix.copy(z.projectionMatrix),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),we(J,ne,je)};function we(J,fe,Ae){Ae===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=df*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(J){p=J,g!==null&&(g.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ne)},this.getCameraTexture=function(J){return v[J]};let Ke=null;function Xe(J,fe){if(_=fe.getViewerPose(h||u),w=fe,_!==null){const Ae=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let je=!1;Ae.length!==ne.cameras.length&&(ne.cameras.length=0,je=!0);for(let it=0;it<Ae.length;it++){const _t=Ae[it];let bt=null;if(M!==null)bt=M.getViewport(_t);else{const Je=S.getViewSubImage(g,_t);bt=Je.viewport,it===0&&(e.setRenderTargetTextures(C,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(C))}let dt=Z[it];dt===void 0&&(dt=new ai,dt.layers.enable(it),dt.viewport=new an,Z[it]=dt),dt.matrix.fromArray(_t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(_t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(bt.x,bt.y,bt.width,bt.height),it===0&&(ne.matrix.copy(dt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),je===!0&&ne.cameras.push(dt)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){S=r.getBinding();const it=S.getDepthInformation(Ae[0]);it&&it.isValid&&it.texture&&x.init(it,o.renderState)}if(Ge&&Ge.includes("camera-access")&&b){e.state.unbindTexture(),S=r.getBinding();for(let it=0;it<Ae.length;it++){const _t=Ae[it].camera;if(_t){let bt=v[_t];bt||(bt=new zg,v[_t]=bt);const dt=S.getCameraImage(_t);bt.sourceTexture=dt}}}}for(let Ae=0;Ae<N.length;Ae++){const je=D[Ae],Ge=N[Ae];je!==null&&Ge!==void 0&&Ge.update(je,fe,h||u)}Ke&&Ke(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const $e=new Wg;$e.setAnimationLoop(Xe),this.setAnimationLoop=function(J){Ke=J},this.dispose=function(){}}}const s1=new tn,Zg=new xt;Zg.set(-1,0,0,0,1,0,0,0,1);function a1(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Gg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,U,V,C){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),S(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&M(x,v,C)):v.isMeshMatcapMaterial?(l(x,v),w(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),b(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?p(x,v,U,V):v.isSpriteMaterial?h(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const U=e.get(v),V=U.envMap,C=U.envMapRotation;V&&(x.envMap.value=V,x.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(C)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zg),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,U,V){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*U,x.scale.value=V*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,U){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const U=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function o1(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const D=N.program;r.uniformBlockBinding(C,D)}function h(C,N){let D=o[C.id];D===void 0&&(x(C),D=_(C),o[C.id]=D,C.addEventListener("dispose",U));const B=N.program;r.updateUBOMapping(C,B);const E=e.render.frame;l[C.id]!==E&&(g(C),l[C.id]=E)}function _(C){const N=S();C.__bindingPointIndex=N;const D=s.createBuffer(),B=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,B,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,D),D}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=o[C.id],D=C.uniforms,B=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let E=0,L=D.length;E<L;E++){const z=D[E];if(Array.isArray(z))for(let Y=0,Z=z.length;Y<Z;Y++)M(z[Y],E,Y,B);else M(z,E,0,B)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,N,D,B){if(b(C,N,D,B)===!0){const E=C.__offset,L=C.value;if(Array.isArray(L)){let z=0;for(let Y=0;Y<L.length;Y++){const Z=L[Y],ne=v(Z);w(Z,C.__data,z),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(z+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(L,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function w(C,N,D){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,D)}function b(C,N,D,B){const E=C.value,L=N+"_"+D;if(B[L]===void 0)return typeof E=="number"||typeof E=="boolean"?B[L]=E:ArrayBuffer.isView(E)?B[L]=E.slice():B[L]=E.clone(),!0;{const z=B[L];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return B[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function x(C){const N=C.uniforms;let D=0;const B=16;for(let L=0,z=N.length;L<z;L++){const Y=Array.isArray(N[L])?N[L]:[N[L]];for(let Z=0,ne=Y.length;Z<ne;Z++){const H=Y[Z],ee=Array.isArray(H.value)?H.value:[H.value];for(let ge=0,re=ee.length;ge<re;ge++){const q=ee[ge],Q=v(q),te=D%B,I=te%Q.boundary,ue=te+I;D+=I,ue!==0&&B-ue<Q.storage&&(D+=B-ue),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=D,D+=Q.storage}}}const E=D%B;return E>0&&(D+=B-E),C.__size=D,C.__cache={},this}function v(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",C),N}function U(C){const N=C.target;N.removeEventListener("dispose",U);const D=u.indexOf(N.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function V(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:h,dispose:V}}const l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function c1(){return Xi===null&&(Xi=new K_(l1,16,16,ws,Qi),Xi.name="DFG_LUT",Xi.minFilter=On,Xi.magFilter=On,Xi.wrapS=vr,Xi.wrapT=vr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class u1{constructor(e={}){const{canvas:t=w_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=oi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const b=M,x=new Set([Ef,Mf,yf]),v=new Set([oi,Ji,fo,ho,xf,Sf]),U=new Uint32Array(4),V=new Int32Array(4),C=new oe;let N=null,D=null;const B=[],E=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let Y=!1,Z=null,ne=null,H=null,ee=null;this._outputColorSpace=xi;let ge=0,re=0,q=null,Q=-1,te=null;const I=new an,ue=new an;let we=null;const Ke=new Rt(0);let Xe=0,$e=t.width,J=t.height,fe=1,Ae=null,je=null;const Ge=new an(0,0,$e,J),Ce=new an(0,0,$e,J);let Dt=!1;const it=new Cf;let _t=!1,bt=!1;const dt=new tn,Je=new oe,Tt=new an,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Ct(){return q===null?fe:1}let X=r;function Yt(A,j){return t.getContext(A,j)}let ke,R,y,K,le,he,Re,Ie,xe,Se,Ue,Ze,Fe,P,ie,ye,me,k,F,_e,Ee,Oe,Me;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gf}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",qt,!1),X===null){const j="webgl2";if(X=Yt(j,A),X===null)throw Yt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(A){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),Gt("WebGLRenderer: "+A.message),A}function Ye(){ke=new cM(X),ke.init(),Ee=new e1(X,ke),R=new Qy(X,ke,e,Ee),y=new JE(X,ke),R.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ne=X.createFramebuffer(),H=X.createFramebuffer(),ee=X.createFramebuffer(),K=new fM(X),le=new BE,he=new QE(X,ke,y,le,R,Ee,K),Re=new lM(z),Ie=new px(X),Oe=new Zy(X,Ie),xe=new uM(X,Ie,K,Oe),Se=new pM(X,xe,Ie,Oe,K),k=new hM(X,R,he),ie=new eM(le),Ue=new OE(z,Re,ke,R,Oe,ie),Ze=new a1(z,le),Fe=new zE,P=new YE(ke),me=new $y(z,Re,y,Se,w,p),ye=new ZE(z,Se,R),Me=new o1(X,K,R,y),F=new Jy(X,ke,K),_e=new dM(X,ke,K),K.programs=Ue.programs,z.capabilities=R,z.extensions=ke,z.properties=le,z.renderLists=Fe,z.shadowMap=ye,z.state=y,z.info=K}b!==oi&&(L=new gM(b,t.width,t.height,f,o,l));const ze=new r1(z,X);this.xr=ze,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize($e,J,!1))},this.getSize=function(A){return A.set($e,J)},this.setSize=function(A,j,pe=!0){if(ze.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=A,J=j,t.width=Math.floor(A*fe),t.height=Math.floor(j*fe),pe===!0&&(t.style.width=A+"px",t.style.height=j+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set($e*fe,J*fe).floor()},this.setDrawingBufferSize=function(A,j,pe){$e=A,J=j,fe=pe,t.width=Math.floor(A*pe),t.height=Math.floor(j*pe),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(b===oi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Ge)},this.setViewport=function(A,j,pe,ae){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,j,pe,ae),y.viewport(I.copy(Ge).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,j,pe,ae){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,j,pe,ae),y.scissor(ue.copy(Ce).multiplyScalar(fe).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){y.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,pe=!0){let ae=0;if(A){let se=!1;if(q!==null){const We=q.texture.format;se=x.has(We)}if(se){const We=q.texture.type,Ve=v.has(We),He=me.getClearColor(),tt=me.getClearAlpha(),rt=He.r,Pe=He.g,et=He.b;Ve?(U[0]=rt,U[1]=Pe,U[2]=et,U[3]=tt,X.clearBufferuiv(X.COLOR,0,U)):(V[0]=rt,V[1]=Pe,V[2]=et,V[3]=tt,X.clearBufferiv(X.COLOR,0,V))}else ae|=X.COLOR_BUFFER_BIT}j&&(ae|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),me.dispose(),Fe.dispose(),P.dispose(),le.dispose(),Re.dispose(),Se.dispose(),Oe.dispose(),Me.dispose(),Ue.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",ci),ze.removeEventListener("sessionend",nn),Lt.stop()};function vt(A){A.preventDefault(),mm("WebGLRenderer: Context Lost."),Y=!0}function ft(){mm("WebGLRenderer: Context Restored."),Y=!1;const A=K.autoReset,j=ye.enabled,pe=ye.autoUpdate,ae=ye.needsUpdate,se=ye.type;Ye(),K.autoReset=A,ye.enabled=j,ye.autoUpdate=pe,ye.needsUpdate=ae,ye.type=se}function qt(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function on(A){const j=A.target;j.removeEventListener("dispose",on),li(j)}function li(A){Bi(A),le.remove(A)}function Bi(A){const j=le.get(A).programs;j!==void 0&&(j.forEach(function(pe){Ue.releaseProgram(pe)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,pe,ae,se,We){j===null&&(j=Vt);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,He=$t(A,j,pe,ae,se);y.setMaterial(ae,Ve);let tt=pe.index,rt=1;if(ae.wireframe===!0){if(tt=xe.getWireframeAttribute(pe),tt===void 0)return;rt=2}const Pe=pe.drawRange,et=pe.attributes.position;let Ne=Pe.start*rt,lt=(Pe.start+Pe.count)*rt;We!==null&&(Ne=Math.max(Ne,We.start*rt),lt=Math.min(lt,(We.start+We.count)*rt)),tt!==null?(Ne=Math.max(Ne,0),lt=Math.min(lt,tt.count)):et!=null&&(Ne=Math.max(Ne,0),lt=Math.min(lt,et.count));const St=lt-Ne;if(St<0||St===1/0)return;Oe.setup(se,ae,He,pe,tt);let yt,gt=F;if(tt!==null&&(yt=Ie.get(tt),gt=_e,gt.setIndex(yt)),se.isMesh)ae.wireframe===!0?(y.setLineWidth(ae.wireframeLinewidth*Ct()),gt.setMode(X.LINES)):gt.setMode(X.TRIANGLES);else if(se.isLine){let kt=ae.linewidth;kt===void 0&&(kt=1),y.setLineWidth(kt*Ct()),se.isLineSegments?gt.setMode(X.LINES):se.isLineLoop?gt.setMode(X.LINE_LOOP):gt.setMode(X.LINE_STRIP)}else se.isPoints?gt.setMode(X.POINTS):se.isSprite&&gt.setMode(X.TRIANGLES);if(se.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))gt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const kt=se._multiDrawStarts,Be=se._multiDrawCounts,Ht=se._multiDrawCount,Nt=tt?Ie.get(tt).bytesPerElement:1,Sn=le.get(ae).currentProgram.getUniforms();for(let Mt=0;Mt<Ht;Mt++)Sn.setValue(X,"_gl_DrawID",Mt),gt.render(kt[Mt]/Nt,Be[Mt])}else if(se.isInstancedMesh)gt.renderInstances(Ne,St,se.count);else if(pe.isInstancedBufferGeometry){const kt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Be=Math.min(pe.instanceCount,kt);gt.renderInstances(Ne,St,Be)}else gt.render(Ne,St)};function An(A,j,pe,ae){Z!==null&&A.isNodeMaterial&&Z.setObject(ae,A),_t===!0&&ie.setState(A,pe,!1),A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,er(A,j,ae),A.side=ys,A.needsUpdate=!0,er(A,j,ae),A.side=ji):er(A,j,ae)}this.compile=function(A,j,pe=null){pe===null&&(pe=A),Z!==null&&Z.renderStart(A,j,pe),D=P.get(pe),D.init(j),E.push(D),pe.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),A!==pe&&A.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),bt=this.localClippingEnabled,_t=ie.init(this.clippingPlanes,bt),_t===!0&&ie.setGlobalState(this.clippingPlanes,j),Z!==null&&ye.render(D.state.shadowsArray,pe,j);const ae=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const We=se.material;if(We)if(Array.isArray(We))for(let Ve=0;Ve<We.length;Ve++){const He=We[Ve];An(He,pe,j,se),ae.add(He)}else An(We,pe,j,se),ae.add(We)}),D=E.pop(),Z!==null&&Z.renderEnd(),ae},this.compileAsync=function(A,j,pe=null){const ae=this.compile(A,j,pe);return new Promise(se=>{function We(){if(ae.forEach(function(Ve){const tt=le.get(Ve).currentProgram;(tt===void 0||tt.isReady())&&ae.delete(Ve)}),ae.size===0){se(A);return}setTimeout(We,10)}ke.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Hn=null;function yr(A){Hn&&Hn(A)}function ci(){Lt.stop()}function nn(){Lt.start()}const Lt=new Wg;Lt.setAnimationLoop(yr),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(A){Hn=A,ze.setAnimationLoop(A),A===null?Lt.stop():Lt.start()},ze.addEventListener("sessionstart",ci),ze.addEventListener("sessionend",nn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;Z!==null&&Z.renderStart(A,j);const pe=ze.enabled===!0&&ze.isPresenting===!0,ae=L!==null&&(q===null||pe)&&L.begin(z,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(j),j=ze.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,j,q),D=P.get(A,E.length),D.init(j),D.state.textureUnits=he.getTextureUnits(),E.push(D),dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),it.setFromProjectionMatrix(dt,$i,j.reversedDepth),bt=this.localClippingEnabled,_t=ie.init(this.clippingPlanes,bt),N=Fe.get(A,B.length),N.init(),B.push(N),ze.enabled===!0&&ze.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&kn(Ve,j,-1/0,z.sortObjects)}kn(A,j,0,z.sortObjects),N.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),z.sortObjects===!0&&N.sort(Ae,je),wt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,wt&&me.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&ie.beginShadows();const se=D.state.shadowsArray;if(ye.render(se,A,j),_t===!0&&ie.endShadows(),(ae&&L.hasRenderPass())===!1){const Ve=N.opaque,He=N.transmissive;if(D.setupLights(),j.isArrayCamera){const tt=j.cameras;if(He.length>0)for(let rt=0,Pe=tt.length;rt<Pe;rt++){const et=tt[rt];Zr(Ve,He,A,et)}wt&&me.render(A);for(let rt=0,Pe=tt.length;rt<Pe;rt++){const et=tt[rt];xn(N,A,et,et.viewport)}}else He.length>0&&Zr(Ve,He,A,j),wt&&me.render(A),xn(N,A,j)}q!==null&&re===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),ae&&L.end(z),A.isScene===!0&&A.onAfterRender(z,A,j),Oe.resetDefaultState(),Q=-1,te=null,E.pop(),E.length>0?(D=E[E.length-1],he.setTextureUnits(D.state.textureUnits),_t===!0&&ie.setGlobalState(z.clippingPlanes,D.state.camera)):D=null,B.pop(),B.length>0?N=B[B.length-1]:N=null,Z!==null&&Z.renderEnd()};function kn(A,j,pe,ae){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)pe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(it)){ae&&Tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const Ve=Se.update(A),He=A.material;He.visible&&N.push(A,Ve,He,pe,Tt.z,null,j)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(it))){const Ve=Se.update(A),He=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Tt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Tt.copy(Ve.boundingSphere.center)),Tt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(He)){const tt=Ve.groups;for(let rt=0,Pe=tt.length;rt<Pe;rt++){const et=tt[rt],Ne=He[et.materialIndex];Ne&&Ne.visible&&N.push(A,Ve,Ne,pe,Tt.z,et,j)}}else He.visible&&N.push(A,Ve,He,pe,Tt.z,null,j)}}const We=A.children;for(let Ve=0,He=We.length;Ve<He;Ve++)kn(We[Ve],j,pe,ae)}function xn(A,j,pe,ae){const{opaque:se,transmissive:We,transparent:Ve}=A;D.setupLightsView(pe),_t===!0&&ie.setGlobalState(z.clippingPlanes,pe),ae&&y.viewport(I.copy(ae)),se.length>0&&ki(se,j,pe),We.length>0&&ki(We,j,pe),Ve.length>0&&ki(Ve,j,pe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Zr(A,j,pe,ae){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ae.id]===void 0){const Ne=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ae.id]=new Ui(1,1,{generateMipmaps:!0,type:Ne?Qi:oi,minFilter:xs,samples:Math.max(4,R.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const We=D.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||I;We.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const He=z.getRenderTarget(),tt=z.getActiveCubeFace(),rt=z.getActiveMipmapLevel();z.setRenderTarget(We),z.getClearColor(Ke),Xe=z.getClearAlpha(),Xe<1&&z.setClearColor(16777215,.5),z.clear(),wt&&me.render(pe);const Pe=z.toneMapping;z.toneMapping=Zi;const et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),D.setupLightsView(ae),_t===!0&&ie.setGlobalState(z.clippingPlanes,ae),ki(A,pe,ae),he.updateMultisampleRenderTarget(We),he.updateRenderTargetMipmap(We),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let lt=0,St=j.length;lt<St;lt++){const yt=j[lt],{object:gt,geometry:kt,material:Be,group:Ht}=yt;if(Be.side===ji&&gt.layers.test(ae.layers)){const Nt=Be.side;Be.side=Jn,Be.needsUpdate=!0,Mr(gt,pe,ae,kt,Be,Ht),Be.side=Nt,Be.needsUpdate=!0,Ne=!0}}Ne===!0&&(he.updateMultisampleRenderTarget(We),he.updateRenderTargetMipmap(We))}z.setRenderTarget(He,tt,rt),z.setClearColor(Ke,Xe),et!==void 0&&(ae.viewport=et),z.toneMapping=Pe}function ki(A,j,pe){const ae=j.isScene===!0?j.overrideMaterial:null;for(let se=0,We=A.length;se<We;se++){const Ve=A[se],{object:He,geometry:tt,group:rt}=Ve;let Pe=Ve.material;Pe.allowOverride===!0&&ae!==null&&(Pe=ae),He.layers.test(pe.layers)&&Mr(He,j,pe,tt,Pe,rt)}}function Mr(A,j,pe,ae,se,We){Z!==null&&se.isNodeMaterial&&Z.setObject(A,se),A.onBeforeRender(z,j,pe,ae,se,We),A.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(z,j,pe,ae,A,We),se.transparent===!0&&se.side===ji&&se.forceSinglePass===!1?(se.side=Jn,se.needsUpdate=!0,z.renderBufferDirect(pe,j,ae,se,A,We),se.side=ys,se.needsUpdate=!0,z.renderBufferDirect(pe,j,ae,se,A,We),se.side=ji):z.renderBufferDirect(pe,j,ae,se,A,We),A.onAfterRender(z,j,pe,ae,se,We)}function er(A,j,pe){j.isScene!==!0&&(j=Vt);const ae=le.get(A),se=D.state.lights,We=D.state.shadowsArray,Ve=se.state.version,He=Ue.getParameters(A,se.state,We,j,pe,D.state.lightProbeGridArray),tt=Ue.getProgramCacheKey(He);let rt=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;const Pe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Re.get(A.envMap||ae.environment,Pe),ae.envMapRotation=ae.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",on),rt=new Map,ae.programs=rt);let et=rt.get(tt);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===Ve)return bs(A,He),et}else He.uniforms=Ue.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,pe,He),A.onBeforeCompile(He,z),et=Ue.acquireProgram(He,tt),rt.set(tt,et),ae.uniforms=He.uniforms;const Ne=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),bs(A,He),ae.needsLights=nr(A),ae.lightsStateVersion=Ve,ae.needsLights&&(Ne.ambientLightColor.value=se.state.ambient,Ne.lightProbe.value=se.state.probe,Ne.sunLights.value=se.state.sun,Ne.sunLightShadows.value=se.state.sunShadow,Ne.directionalLights.value=se.state.directional,Ne.directionalLightShadows.value=se.state.directionalShadow,Ne.spotLights.value=se.state.spot,Ne.spotLightShadows.value=se.state.spotShadow,Ne.rectAreaLights.value=se.state.rectArea,Ne.ltc_1.value=se.state.rectAreaLTC1,Ne.ltc_2.value=se.state.rectAreaLTC2,Ne.pointLights.value=se.state.point,Ne.pointLightShadows.value=se.state.pointShadow,Ne.hemisphereLights.value=se.state.hemi,Ne.sunShadowMatrix.value=se.state.sunShadowMatrix,Ne.sunShadowCascade.value=se.state.sunShadowCascade,Ne.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ne.spotLightMatrix.value=se.state.spotLightMatrix,Ne.spotLightMap.value=se.state.spotLightMap,Ne.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=D.state.lightProbeGridArray.length>0,ae.currentProgram=et,ae.uniformsList=null,et}function tr(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function bs(A,j){const pe=le.get(A);pe.outputColorSpace=j.outputColorSpace,pe.batching=j.batching,pe.batchingColor=j.batchingColor,pe.instancing=j.instancing,pe.instancingColor=j.instancingColor,pe.instancingMorph=j.instancingMorph,pe.skinning=j.skinning,pe.morphTargets=j.morphTargets,pe.morphNormals=j.morphNormals,pe.morphColors=j.morphColors,pe.morphTargetsCount=j.morphTargetsCount,pe.numClippingPlanes=j.numClippingPlanes,pe.numIntersection=j.numClipIntersection,pe.vertexAlphas=j.vertexAlphas,pe.vertexTangents=j.vertexTangents,pe.toneMapping=j.toneMapping}function Jr(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(j.matrixWorld);for(let pe=0,ae=A.length;pe<ae;pe++){const se=A[pe];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function $t(A,j,pe,ae,se){j.isScene!==!0&&(j=Vt),he.resetTextureUnits();const We=j.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,He=q===null?z.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ut.workingColorSpace,tt=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,rt=Re.get(ae.envMap||Ve,tt),Pe=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,et=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ne=!!pe.morphAttributes.position,lt=!!pe.morphAttributes.normal,St=!!pe.morphAttributes.color;let yt=Zi;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(yt=z.toneMapping);const gt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,kt=gt!==void 0?gt.length:0,Be=le.get(ae),Ht=D.state.lights;if(_t===!0&&(bt===!0||A!==te)){const Wt=A===te&&ae.id===Q;ie.setState(ae,A,Wt)}let Nt=!1;ae.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ht.state.version||Be.outputColorSpace!==He||se.isBatchedMesh&&Be.batching===!1||!se.isBatchedMesh&&Be.batching===!0||se.isBatchedMesh&&Be.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Be.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Be.instancing===!1||!se.isInstancedMesh&&Be.instancing===!0||se.isSkinnedMesh&&Be.skinning===!1||!se.isSkinnedMesh&&Be.skinning===!0||se.isInstancedMesh&&Be.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Be.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Be.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Be.instancingMorph===!1&&se.morphTexture!==null||Be.envMap!==rt||ae.fog===!0&&Be.fog!==We||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ie.numPlanes||Be.numIntersection!==ie.numIntersection)||Be.vertexAlphas!==Pe||Be.vertexTangents!==et||Be.morphTargets!==Ne||Be.morphNormals!==lt||Be.morphColors!==St||Be.toneMapping!==yt||Be.morphTargetsCount!==kt||!!Be.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,Be.__version=ae.version);let Sn=Be.currentProgram;Nt===!0&&(Sn=er(ae,j,se),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Sn,Be));let Mt=!1,Qn=!1,Si=!1;const It=Sn.getUniforms(),Qt=Be.uniforms;if(y.useProgram(Sn.program)&&(Mt=!0,Qn=!0,Si=!0),ae.id!==Q&&(Q=ae.id,Qn=!0),Be.needsLights){const Wt=Jr(D.state.lightProbeGridArray,se);Be.lightProbeGrid!==Wt&&(Be.lightProbeGrid=Wt,Qn=!0)}if(Mt||te!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(X,"projectionMatrix",A.projectionMatrix),It.setValue(X,"viewMatrix",A.matrixWorldInverse);const ui=It.map.cameraPosition;ui!==void 0&&ui.setValue(X,Je.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&It.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,Qn=!0,Si=!0)}if(Be.needsLights&&(Ht.state.sunShadowMap.length>0&&It.setValue(X,"sunShadowMap",Ht.state.sunShadowMap,he),Ht.state.directionalShadowMap.length>0&&It.setValue(X,"directionalShadowMap",Ht.state.directionalShadowMap,he),Ht.state.spotShadowMap.length>0&&It.setValue(X,"spotShadowMap",Ht.state.spotShadowMap,he),Ht.state.pointShadowMap.length>0&&It.setValue(X,"pointShadowMap",Ht.state.pointShadowMap,he)),se.isSkinnedMesh){It.setOptional(X,se,"bindMatrix"),It.setOptional(X,se,"bindMatrixInverse");const Wt=se.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),It.setValue(X,"boneTexture",Wt.boneTexture,he))}se.isBatchedMesh&&(It.setOptional(X,se,"batchingTexture"),It.setValue(X,"batchingTexture",se._matricesTexture,he),It.setOptional(X,se,"batchingIdTexture"),It.setValue(X,"batchingIdTexture",se._indirectTexture,he),It.setOptional(X,se,"batchingColorTexture"),se._colorsTexture!==null&&It.setValue(X,"batchingColorTexture",se._colorsTexture,he));const yi=pe.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&k.update(se,pe,Sn),(Qn||Be.receiveShadow!==se.receiveShadow)&&(Be.receiveShadow=se.receiveShadow,It.setValue(X,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(Qt.envMapIntensity.value=j.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=c1()),Qn){if(It.setValue(X,"toneMappingExposure",z.toneMappingExposure),Be.needsLights&&xa(Qt,Si),We&&ae.fog===!0&&Ze.refreshFogUniforms(Qt,We),Ze.refreshMaterialUniforms(Qt,ae,fe,J,D.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const Wt=Be.lightProbeGrid;Qt.probesSH.value=Wt.texture,Qt.probesMin.value.copy(Wt.boundingBox.min),Qt.probesMax.value.copy(Wt.boundingBox.max),Qt.probesResolution.value.copy(Wt.resolution)}Zl.upload(X,tr(Be),Qt,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Zl.upload(X,tr(Be),Qt,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(X,"center",se.center),It.setValue(X,"modelViewMatrix",se.modelViewMatrix),It.setValue(X,"normalMatrix",se.normalMatrix),It.setValue(X,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Wt=ae.uniformsGroups;for(let ui=0,Mi=Wt.length;ui<Mi;ui++){const Ei=Wt[ui];Me.update(Ei,Sn),Me.bind(Ei,Sn)}}return Sn}function xa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.sunLights.needsUpdate=j,A.sunLightShadows.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function nr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ge},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,j,pe){const ae=le.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=j,le.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:pe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const pe=le.get(A);pe.__webglFramebuffer=j,pe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,pe=0){q=A,ge=j,re=pe;let ae=null,se=!1,We=!1;if(A){const He=le.get(A);if(He.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(X.FRAMEBUFFER,He.__webglFramebuffer),I.copy(A.viewport),ue.copy(A.scissor),we=A.scissorTest,y.viewport(I),y.scissor(ue),y.setScissorTest(we),Q=-1;return}else if(He.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(He.__hasExternalTextures)he.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(He.__boundDepthTexture!==Pe){if(Pe!==null&&le.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(We=!0);const rt=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?ae=rt[j][pe]:ae=rt[j],se=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ae=le.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?ae=rt[pe]:ae=rt,I.copy(A.viewport),ue.copy(A.scissor),we=A.scissorTest}else I.copy(Ge).multiplyScalar(fe).floor(),ue.copy(Ce).multiplyScalar(fe).floor(),we=Dt;if(pe!==0&&(ae=ne),y.bindFramebuffer(X.FRAMEBUFFER,ae)&&y.drawBuffers(A,ae),y.viewport(I),y.scissor(ue),y.setScissorTest(we),se){const He=le.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,He.__webglTexture,pe)}else if(We){const He=j;for(let tt=0;tt<A.textures.length;tt++){const rt=le.get(A.textures[tt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+tt,rt.__webglTexture,pe,He)}}else if(A!==null&&pe!==0){const He=le.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,He.__webglTexture,pe)}Q=-1};function Er(A){const j=le.get(A);return(j.__readFormat!==A.format||j.__readType!==A.type)&&(j.__readFormat=A.format,j.__readType=A.type,j.__formatReadable=R.textureFormatReadable(A.format),j.__typeReadable=R.textureTypeReadable(A.type)),j}this.readRenderTargetPixels=function(A,j,pe,ae,se,We,Ve,He=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(tt=tt[Ve]),tt){y.bindFramebuffer(X.FRAMEBUFFER,tt);try{const rt=A.textures[He],Pe=rt.format,et=rt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+He);const Ne=Er(rt);if(Ne.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ae&&pe>=0&&pe<=A.height-se&&X.readPixels(j,pe,ae,se,Ee.convert(Pe),Ee.convert(et),We)}finally{const rt=q!==null?le.get(q).__webglFramebuffer:null;y.bindFramebuffer(X.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,j,pe,ae,se,We,Ve,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(tt=tt[Ve]),tt)if(j>=0&&j<=A.width-ae&&pe>=0&&pe<=A.height-se){y.bindFramebuffer(X.FRAMEBUFFER,tt);const rt=A.textures[He],Pe=rt.format,et=rt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+He);const Ne=Er(rt);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,lt),X.bufferData(X.PIXEL_PACK_BUFFER,We.byteLength,X.STREAM_READ),X.readPixels(j,pe,ae,se,Ee.convert(Pe),Ee.convert(et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const St=q!==null?le.get(q).__webglFramebuffer:null;y.bindFramebuffer(X.FRAMEBUFFER,St);const yt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await T_(X,yt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,lt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,We),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(lt),X.deleteSync(yt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,pe=0){const ae=Math.pow(2,-pe),se=Math.floor(A.image.width*ae),We=Math.floor(A.image.height*ae),Ve=j!==null?j.x:0,He=j!==null?j.y:0;he.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,pe,0,0,Ve,He,se,We),y.unbindTexture()},this.copyTextureToTexture=function(A,j,pe=null,ae=null,se=0,We=0){let Ve,He,tt,rt,Pe,et,Ne,lt,St;const yt=A.isCompressedTexture?A.mipmaps[We]:A.image;if(pe!==null)Ve=pe.max.x-pe.min.x,He=pe.max.y-pe.min.y,tt=pe.isBox3?pe.max.z-pe.min.z:1,rt=pe.min.x,Pe=pe.min.y,et=pe.isBox3?pe.min.z:0;else{const Qt=Math.pow(2,-se);Ve=Math.floor(yt.width*Qt),He=Math.floor(yt.height*Qt),A.isDataArrayTexture?tt=yt.depth:A.isData3DTexture?tt=Math.floor(yt.depth*Qt):tt=1,rt=0,Pe=0,et=0}ae!==null?(Ne=ae.x,lt=ae.y,St=ae.z):(Ne=0,lt=0,St=0);const gt=Ee.convert(j.format),kt=Ee.convert(j.type);let Be;j.isData3DTexture?(he.setTexture3D(j,0),Be=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(he.setTexture2DArray(j,0),Be=X.TEXTURE_2D_ARRAY):(he.setTexture2D(j,0),Be=X.TEXTURE_2D),y.activeTexture(X.TEXTURE0),y.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),y.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),y.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const Ht=y.getParameter(X.UNPACK_ROW_LENGTH),Nt=y.getParameter(X.UNPACK_IMAGE_HEIGHT),Sn=y.getParameter(X.UNPACK_SKIP_PIXELS),Mt=y.getParameter(X.UNPACK_SKIP_ROWS),Qn=y.getParameter(X.UNPACK_SKIP_IMAGES);y.pixelStorei(X.UNPACK_ROW_LENGTH,yt.width),y.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt.height),y.pixelStorei(X.UNPACK_SKIP_PIXELS,rt),y.pixelStorei(X.UNPACK_SKIP_ROWS,Pe),y.pixelStorei(X.UNPACK_SKIP_IMAGES,et);const Si=A.isDataArrayTexture||A.isData3DTexture,It=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Qt=le.get(A),yi=le.get(j),Wt=le.get(Qt.__renderTarget),ui=le.get(yi.__renderTarget);y.bindFramebuffer(X.READ_FRAMEBUFFER,Wt.__webglFramebuffer),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Mi=0;Mi<tt;Mi++)Si&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(A).__webglTexture,se,et+Mi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(j).__webglTexture,We,St+Mi)),X.blitFramebuffer(rt,Pe,Ve,He,Ne,lt,Ve,He,X.DEPTH_BUFFER_BIT,X.NEAREST);y.bindFramebuffer(X.READ_FRAMEBUFFER,null),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||le.has(A)){const Qt=le.get(A),yi=le.get(j);y.bindFramebuffer(X.READ_FRAMEBUFFER,H),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,ee);for(let Wt=0;Wt<tt;Wt++)Si?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qt.__webglTexture,se,et+Wt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qt.__webglTexture,se),It?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,yi.__webglTexture,We,St+Wt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,yi.__webglTexture,We),se!==0?X.blitFramebuffer(rt,Pe,Ve,He,Ne,lt,Ve,He,X.COLOR_BUFFER_BIT,X.NEAREST):It?X.copyTexSubImage3D(Be,We,Ne,lt,St+Wt,rt,Pe,Ve,He):X.copyTexSubImage2D(Be,We,Ne,lt,rt,Pe,Ve,He);y.bindFramebuffer(X.READ_FRAMEBUFFER,null),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Be,We,Ne,lt,St,Ve,He,tt,gt,kt,yt.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Be,We,Ne,lt,St,Ve,He,tt,gt,yt.data):X.texSubImage3D(Be,We,Ne,lt,St,Ve,He,tt,gt,kt,yt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,We,Ne,lt,Ve,He,gt,kt,yt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,We,Ne,lt,yt.width,yt.height,gt,yt.data):X.texSubImage2D(X.TEXTURE_2D,We,Ne,lt,Ve,He,gt,kt,yt);y.pixelStorei(X.UNPACK_ROW_LENGTH,Ht),y.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt),y.pixelStorei(X.UNPACK_SKIP_PIXELS,Sn),y.pixelStorei(X.UNPACK_SKIP_ROWS,Mt),y.pixelStorei(X.UNPACK_SKIP_IMAGES,Qn),We===0&&j.generateMipmaps&&X.generateMipmap(Be),y.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){ge=0,re=0,q=null,y.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}const go=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puerto Madero",en:"Obelisk & Puerto Madero"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"São Paulo",en:"São Paulo"},monumentName:{es:"Ponte Octávio Frias de Oliveira",en:"Octávio Frias Cable Bridge"},weatherLabel:{es:"Brasa Nocturna Paulista",en:"Paulista Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"sealink"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Aguja del Empire State",en:"Empire State Spire"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#60a5fa",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"empire"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben, London Eye y The Shard",en:"Big Ben, London Eye & The Shard"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel Iluminada",en:"Illuminated Eiffel Tower"},weatherLabel:{es:"Haces de Luz Nocturnos",en:"Eiffel Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"urban",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"obelisco"},{index:9,flag:"🇩🇪",name:{es:"Berlín",en:"Berlin"},monumentName:{es:"Torre de TV en Alexanderplatz",en:"Fernsehturm Alexanderplatz"},weatherLabel:{es:"Ventisca invernal Europea",en:"European Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#22d3ee",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"cntower"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Pirámides de Giza",en:"Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#f97316",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#f59e0b",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"empire"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Ópera de Sídney y Harbour Bridge",en:"Sydney Opera House & Harbour Bridge"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Shinjuku Neón y Torre de Tokio",en:"Shinjuku Neon & Tokyo Tower"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#00f2fe",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],vs=[{id:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,gemCost:0,name:{es:"Urbano Callejero",en:"Street Urban"},desc:{es:"Buzo con capucha gris grafito oscuro que flamea con el viento, pantalón cargo negro y botas urbanas.",en:"Dark graphite hoodie fluttering in the wind, black cargo pants and urban boots."},hoodieColor:"#334155",pantsColor:"#0f172a",trimColor:"#94a3b8",shoeColor:"#e2e8f0",glowColor:null,goldTrail:!1},{id:"skin_2",icon:"🏃",unlockLevel:11,unlockCity:3,gemCost:150,name:{es:"Night Runner",en:"Night Runner"},desc:{es:"Rompevientos negro con tiras reflectivas blancas y calzado aerodinámico de alta visibilidad.",en:"Black windbreaker with white reflective strips and high-visibility aerodynamic footwear."},hoodieColor:"#111827",pantsColor:"#090d16",trimColor:"#f8fafc",shoeColor:"#38bdf8",glowColor:"#e2e8f0",goldTrail:!1},{id:"skin_3",icon:"⚡",unlockLevel:21,unlockCity:5,gemCost:300,name:{es:"Infiltrado Táctico",en:"Tactical Infiltrator"},desc:{es:"Campera técnica entallada negro mate con arnés y líneas de neón cian en talones y muñecas.",en:"Matte black fitted tactical jacket with harness and cyan neon lines on heels and wrists."},hoodieColor:"#0f172a",pantsColor:"#060a12",trimColor:"#22d3ee",shoeColor:"#06b6d4",glowColor:"#22d3ee",goldTrail:!1},{id:"skin_4",icon:"🎩",unlockLevel:36,unlockCity:8,gemCost:500,name:{es:"Ilusionista de Altura",en:"High-Wire Illusionist"},desc:{es:"Chaleco sastrero oscuro con detalles púrpura/plata, cinta reactiva al viento y guantes de precisión.",en:"Dark tailored vest with purple/silver accents, wind-reactive headband and precision gloves."},hoodieColor:"#1e1b2e",pantsColor:"#0d0b14",trimColor:"#c084fc",shoeColor:"#e2e8f0",glowColor:"#a855f7",goldTrail:!1},{id:"skin_5",icon:"🥷",unlockLevel:61,unlockCity:13,gemCost:800,name:{es:"Cyber-Shinobi Tokio",en:"Tokyo Cyber-Shinobi"},desc:{es:"Traje técnico oscuro con circuito carmesí luminoso en espalda y botas magnéticas.",en:"Dark technical shinobi suit with glowing crimson spine circuit and magnetic boots."},hoodieColor:"#14111a",pantsColor:"#09070d",trimColor:"#f43f5e",shoeColor:"#fb7185",glowColor:"#f43f5e",goldTrail:!1},{id:"skin_6",icon:"👑",unlockLevel:81,unlockCity:17,gemCost:1200,name:{es:"Leyenda Black & Gold",en:"Black & Gold Legend"},desc:{es:"Traje aerodinámico de fibra de carbono negro profundo con bordes dorados y estela luminosa.",en:"Deep black carbon-fiber aerodynamic suit with bright golden edges and luminous arm trail."},hoodieColor:"#09090b",pantsColor:"#050507",trimColor:"#fde047",shoeColor:"#f59e0b",glowColor:"#fde047",goldTrail:!0}],_s=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,gemCost:0,name:{es:"Esferas Cromadas",en:"Chrome Spheres"},color:"#a3e635"},{id:"torches",icon:"🔥",mult:3,unlockLevel:6,gemCost:120,name:{es:"Antorchas de Fuego",en:"Fire Torches"},color:"#f97316"},{id:"knives",icon:"🔪",mult:6,unlockLevel:16,gemCost:260,name:{es:"Cuchillos Tácticos",en:"Tactical Knives"},color:"#cbd5e1"},{id:"chainsaws",icon:"🪚",mult:12,unlockLevel:31,gemCost:480,name:{es:"Motosierras",en:"Chainsaws"},color:"#ef4444"},{id:"dynamite",icon:"🧨",mult:25,unlockLevel:56,gemCost:750,name:{es:"Dinamita Activa",en:"Active Dynamite"},color:"#dc2626"},{id:"goldbars",icon:"🪙",mult:50,unlockLevel:81,gemCost:1100,name:{es:"Lingotes 24K",en:"24K Gold Bars"},color:"#fde047"}],d1=[{id:"pole",icon:"⚖️",maxLevel:10,baseCost:140,costScale:1.42,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Vara de Inercia",en:"Inertia Balance Pole"},desc:{es:"Aumenta el momento de inercia rotacional, desacelerando la caída gravitatoria lateral.",en:"Increases rotational moment of inertia, slowing down lateral gravitational tipping."}},{id:"boots",icon:"🥾",maxLevel:10,baseCost:160,costScale:1.45,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Incrementa la adherencia al cable de acero, reduce el empuje del viento y acelera el paso.",en:"Increases grip on the steel cable, dampens wind gusts and speeds up walking pace."}},{id:"gloves",icon:"🧤",maxLevel:10,baseCost:150,costScale:1.42,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Amplía la ventana dorada de captura (catchThreshold) y amortigua el sacudón por fallo.",en:"Widens the golden capture window (catchThreshold) and dampens balance jolts on a miss."}}],f1=d1,h1=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],p1=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],m1=[{id:"bundle_starter",icon:"⚡",coinCost:1500,gems:80,coins:1200,leaguePts:150,popular:!1,tag:"🎁 RECLAMAR",name:{es:"Cofre de Equilibrista",en:"Tightrope Chest"},perks:{es:["+80 💎 Gemas al instante","+150 🏆 Puntos de Liga","Recarga para Gancho Salvavidas"],en:["+80 💎 Instant Gems","+150 🏆 League Points","Grapple Hook Save refill"]}},{id:"bundle_pro",icon:"🔥",coinCost:4500,gems:260,coins:4e3,leaguePts:500,popular:!0,tag:"⭐ POPULAR",unlockProp:"torches",unlockSkin:"skin_2",badge:{es:"RECOMENDADO",en:"RECOMMENDED"},name:{es:"Cofre Maestro del Abismo",en:"Abyss Master Chest"},perks:{es:["+260 💎 Gemas","🔥 Desbloquea Antorchas de Fuego (x3)",'🏃 Desbloquea Aspecto "Night Runner"',"+500 🏆 Puntos de Liga"],en:["+260 💎 Gems","🔥 Unlocks Fire Torches (x3)",'🏃 Unlocks "Night Runner" Skin',"+500 🏆 League Points"]}},{id:"bundle_legend",icon:"👑",coinCost:12e3,gems:800,coins:12e3,leaguePts:1500,popular:!0,tag:"👑 ÉLITE",bootsBonus:5,unlockProp:"chainsaws",unlockSkin:"skin_6",badge:{es:"ÉLITE DE TEMPORADA",en:"SEASON ELITE"},name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+800 💎 Gemas","🥾 Calzado Magnético +5 Niveles","🪚 Desbloquea Motosierras (x12)",'👑 Desbloquea Aspecto "Leyenda Black & Gold"',"+1,500 🏆 Puntos de Liga"],en:["+800 💎 Gems","🥾 Magnetic Footwear +5 Levels","🪚 Unlocks Chainsaws (x12)",'👑 Unlocks "Black & Gold Legend" Skin',"+1,500 🏆 League Points"]}}],ca={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",iosInstallHint:'Para instalar en tu dispositivo: tocá el menú del navegador y seleccioná "Agregar a pantalla de inicio".',leagueBanner:"LIGA DE TEMPORADA",leagueBannerLabel:"🏆 LIGA DE TEMPORADA:",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",leftBtn:"IZQ",rightBtn:"DER",holdBalanceTapJuggle:"EQUILIBRIO / CAPTURA",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",grappleHookTitle:"GANCHO SALVAVIDAS",grappleHookCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Cofres",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",mapBtn:"🗺️ Mapa",skinsBtn:"Aspectos",gearBtn:"🎒 Armería",storeBtn:"🛒 Cofres",leagueBtn:"🏆 Liga",level:"Nivel",levelWord:"Nivel",cityWord:"Ciudad",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",lossModalHeader:"🚨 ¡PERDISTE EL EJE DE GRAVEDAD EN EL METRO {meter}m DE {city} (NIVEL {level})!",lossModalSub:"Cámara lenta activada ({seconds}s antes de caer al abismo)...",grappleCta:"🪝 DISPARAR GANCHO SALVAVIDAS Y VOLVER AL CABLE (20 💎)",rooftopCleared:"🏁 ¡AZOTEA ALCANZADA!",levelCleared:"¡AZOTEA ALCANZADA!",bossChestTitle:"🎁 ¡COFRE DE JEFE DE CIUDAD DESBLOQUEADO!",nextLevel:"SIGUIENTE NIVEL",nextLevelBtn:"▶️ SIGUIENTE NIVEL",worldMapTitle:"🗺️ CAMPAÑA MUNDIAL — 20 CIUDADES (100 NIVELES)",skinsModalTitle:"🧥 TIENDA DE ASPECTOS URBANOS",skinsModalNote:"Equipá cualquier aspecto desbloqueado conservando el 100% de tus mejoras de Armería RPG.",equipBtn:"EQUIPAR",equippedBadge:"✓ EQUIPADO",unlockWithGems:"Desbloquear ({cost} 💎)",lockedAtLevel:"Nivel {level} o {cost} 💎",armoryTitle:"ARMERÍA RPG DE PRECISIÓN",armorySub:"Mejorá tu equipamiento técnico para dominar las ráfagas y la gravedad",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",gearModalTitle:"🎒 ARMERÍA RPG DE PRECISIÓN (NVL 1–10)",upgradeCoins:"Mejorar ({cost} 🪙)",upgradeGems:"Instantáneo (15 💎)",maxLevelReached:"NIVEL MÁXIMO (10/10)",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos de Gemas y Monedas.",leagueModalDesc:"Sumá Puntos de Liga (LP) superando niveles, encadenando capturas rítmicas perfectas y abriendo Cofres de Jefe de Ciudad.",yourLeaguePoints:"🏆 Tus Puntos de Liga:",claimRewardBtn:"🎁 Reclamar Cofre",claimedBadge:"✓ Reclamado",shopTitle:"TIENDA DE COFRES DE TEMPORADA",shopSub:"Obtené Cofres de Gemas y Monedas para desbloquear Aspectos, Objetos y Ganchos Salvavidas.",storeModalTitle:"🛒 TIENDA DE COFRES Y EQUIPAMIENTO",storeModalSubtitle:"Canjeá tus Monedas ganadas en el cable por Cofres de Temporada, Gemas y Objetos Especiales.",exchangeCoinsBtn:"Canjear por {cost} 🪙",freeDailyGemsBtn:"🎁 Reclamar +25 💎 de Bonificación Diaria",dailyClaimedMsg:"✅ ¡Bonificación acreditada!",lobbySubtitle:"📍 Nivel {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Ciudades (1-100)",lobbyGearSkinsBtn:"🎒 Armería y Skins",lobbyLeagueBtn:"🏆 Liga de Temporada",lobbyPlayCta:"▶️ JUGAR / SALTAR AL CABLE",pauseBtnLabel:"⏸️ PAUSA",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",pauseModalTitle:"⏸️ PARTIDA EN PAUSA",pauseProgressInfo:"📍 {flag} {city} • Nivel {level} ({meter}m / {target}m)",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",resumeGameBtn:"▶️ REANUDAR PARTIDA",restartLevelBtn:"🔄 REINICIAR NIVEL",openGearSkinsFromPauseBtn:"🎒 ABRIR ARMERÍA / CAMBIAR ASPECTO",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",mainMenuShortBtn:"🏠 Menú Principal",retryFromZeroBtn:"🔄 Reintentar desde 0m",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",tabEquipment:"🎒 Armería RPG (1-10)",tabSkins:"🧥 Aspectos (6 Skins)",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",iosInstallHint:'To install on your device: tap the browser menu and select "Add to Home Screen".',leagueBanner:"SEASON LEAGUE",leagueBannerLabel:"🏆 SEASON LEAGUE:",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",leftBtn:"LEFT",rightBtn:"RIGHT",holdBalanceTapJuggle:"BALANCE / CATCH",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",grappleHookTitle:"GRAPPLE HOOK",grappleHookCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"Chests",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",mapBtn:"🗺️ Map",skinsBtn:"Skins",gearBtn:"🎒 Armory",storeBtn:"🛒 Chests",leagueBtn:"🏆 League",level:"Level",levelWord:"Level",cityWord:"City",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",lossModalHeader:"🚨 YOU LOST YOUR CENTER OF GRAVITY AT METER {meter}m OF {city} (LEVEL {level})!",lossModalSub:"Slow-motion activated ({seconds}s before falling into the abyss)...",grappleCta:"🪝 FIRE GRAPPLE HOOK SAVE & RETURN TO WIRE (20 💎)",rooftopCleared:"🏁 ROOFTOP REACHED!",levelCleared:"ROOFTOP REACHED!",bossChestTitle:"🎁 CITY BOSS CHEST UNLOCKED!",nextLevel:"NEXT LEVEL",nextLevelBtn:"▶️ NEXT LEVEL",worldMapTitle:"🗺️ WORLD CAMPAIGN — 20 CITIES (100 LEVELS)",skinsModalTitle:"🧥 URBAN SKIN SHOP",skinsModalNote:"Equip any unlocked skin while keeping 100% of your RPG Armory upgrades.",equipBtn:"EQUIP",equippedBadge:"✓ EQUIPPED",unlockWithGems:"Unlock ({cost} 💎)",lockedAtLevel:"Level {level} or {cost} 💎",armoryTitle:"PRECISION RPG ARMORY",armorySub:"Upgrade your technical gear to master wind gusts and gravity",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",gearModalTitle:"🎒 PRECISION RPG ARMORY (LVL 1–10)",upgradeCoins:"Upgrade ({cost} 🪙)",upgradeGems:"Instant (15 💎)",maxLevelReached:"MAX LEVEL (10/10)",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Gem & Coin Chests.",leagueModalDesc:"Earn League Points (LP) by clearing levels, chaining rhythmic catches and unlocking City Boss Chests.",yourLeaguePoints:"🏆 Your League Points:",claimRewardBtn:"🎁 Claim Chest",claimedBadge:"✓ Claimed",shopTitle:"SEASON CHEST SHOP",shopSub:"Claim Gem & Coin Chests to unlock Skins, Juggling Props and Grapple Hook Saves.",storeModalTitle:"🛒 CHEST & GEAR SHOP",storeModalSubtitle:"Exchange Coins earned on the wire for Season Chests, Gems and Special Props.",exchangeCoinsBtn:"Exchange for {cost} 🪙",freeDailyGemsBtn:"🎁 Claim +25 💎 Daily Bonus",dailyClaimedMsg:"✅ Bonus credited!",lobbySubtitle:"📍 Level {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Cities (1-100)",lobbyGearSkinsBtn:"🎒 Armory & Skins",lobbyLeagueBtn:"🏆 Season League",lobbyPlayCta:"▶️ PLAY / STEP ON THE WIRE",pauseBtnLabel:"⏸️ PAUSE",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",pauseModalTitle:"⏸️ GAME PAUSED",pauseProgressInfo:"📍 {flag} {city} • Level {level} ({meter}m / {target}m)",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",resumeGameBtn:"▶️ RESUME GAME",restartLevelBtn:"🔄 RESTART LEVEL",openGearSkinsFromPauseBtn:"🎒 OPEN ARMORY / CHANGE SKIN",backToLobbyBtn:"BACK TO MAIN MENU",mainMenuShortBtn:"🏠 Main Menu",retryFromZeroBtn:"🔄 Retry from 0m",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",tabEquipment:"🎒 RPG Armory (1-10)",tabSkins:"🧥 Skins (6 Outfits)",youLabel:"YOU (Tightrope Walker)"}};for(let s=0;s<go.length;s++){const e=go[s];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}const g1=[1,1.2,1.5,2,3,5];for(let s=0;s<vs.length;s++){const e=vs[s];e.bonusMult=e.bonusMult||g1[s]||1,e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.coatColor=e.coatColor||e.hoodieColor}for(let s=0;s<_s.length;s++){const e=_s[s];e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function ug(){const s=new Date,e=new Date(s.getFullYear(),s.getMonth()+1,0,23,59,59),t=Math.max(0,e.getTime()-s.getTime()),r=Math.floor(t/(1e3*60*60*24)),o=Math.floor(t/(1e3*60*60)%24),l=Math.floor(t/1e3/60%60),u=Math.floor(t/1e3%60);return{days:r,hours:o,mins:l,secs:u}}function Jg(s){const e=Math.max(1,Math.min(100,s||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function v1(s){const e=Math.max(1,Math.min(100,s||1)),t=Jg(e),r=100+(e-1)*5;return Math.round(r*t)}function wd(s){const e=Math.max(1,Math.min(100,s||1)),t=Math.min(19,Math.max(0,Math.floor((e-1)/5))),r=go[t],o=(e-1)%5+1,l=Jg(e),u=5,f=Number((u*l).toFixed(3)),p=v1(e),h=e<4?0:Number((l*(1+(e-4)*.018)).toFixed(3)),_=Number((l*1.15).toFixed(3)),S=Number((.62*_).toFixed(3)),g=Number(Math.max(.14,.28-(e-1)/99*.14).toFixed(4)),M=e<4?6:Number(Math.max(4.5,6-(e-4)/96*1.5).toFixed(2)),w=.32+r.windStrength*.45+o*.045,b=1.08+e/100*.92,x=e<=15?2:e<=55?3:4;return{level:e,cityIndex:t,city:r,stageInCity:o,walkSpeedMultiplier:l,baseWalkSpeed:u,walkSpeed:f,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:h,juggleSpeedMultiplier:_,juggleBaseSpeed:S,catchWindow:g,gravityFactor:b,windMax:w,windChangeFreq:M,windBaseForce:w,gravityInstability:b,defaultObjects:x}}const dg=[523.25,587.33,659.25,783.99,880,1046.5];class _1{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),r=this.ctx.createBuffer(1,t,e),o=r.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=r}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const r=this.ctx.currentTime,o=Math.max(0,(e-1)%dg.length),l=e>=12?1.25:1,u=dg[o]*l,f=this.ctx.createOscillator(),p=this.ctx.createOscillator(),h=this.ctx.createGain();if(f.type="triangle",p.type="sine",f.frequency.setValueAtTime(u,r),p.frequency.setValueAtTime(u,r),h.gain.setValueAtTime(.001,r),h.gain.linearRampToValueAtTime(.18,r+.015),h.gain.exponentialRampToValueAtTime(.06,r+.07),h.gain.exponentialRampToValueAtTime(.001,r+.18),f.connect(h),p.connect(h),h.connect(this.ctx.destination),f.start(r),p.start(r),f.stop(r+.19),p.stop(r+.19),t){const _=this.ctx.createOscillator(),S=this.ctx.createGain();_.type="sine",_.frequency.setValueAtTime(u*2,r),_.frequency.exponentialRampToValueAtTime(u*2.04,r+.18),S.gain.setValueAtTime(.001,r),S.gain.linearRampToValueAtTime(.14,r+.012),S.gain.exponentialRampToValueAtTime(.001,r+.18),_.connect(S),S.connect(this.ctx.destination),_.start(r),_.stop(r+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.Q.setValueAtTime(6.5,e),r.frequency.setValueAtTime(310,e),r.frequency.exponentialRampToValueAtTime(920,e+.42),r.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(r),r.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(65,t),r.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.045),l.gain.setValueAtTime(.14,e+r*.045),l.gain.exponentialRampToValueAtTime(.001,e+r*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.045),o.stop(e+r*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.085),l.gain.setValueAtTime(.17,e+r*.085),l.gain.exponentialRampToValueAtTime(.001,e+r*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.085),o.stop(e+r*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],r=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(r[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}}const jt=new _1,Qg="NO_MIRES_ABAJO_PLAYSTORE_V3",Kr=.82;function x1(){return new Oi({uniforms:{uBaseColor:{value:new Rt(395278)},uRimColor:{value:new Rt(62206)},uRimPower:{value:2.15},uRimStrength:{value:.96}},vertexShader:`
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
    `})}function S1(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#030712"),t.addColorStop(.22,"#07162c"),t.addColorStop(.44,"#0c2d48"),t.addColorStop(.56,"#145374"),t.addColorStop(.64,"#0ea5e9"),t.addColorStop(.72,"#0c2d48"),t.addColorStop(1,"#030712"),e.fillStyle=t,e.fillRect(0,0,256,512);const r=e.createRadialGradient(128,305,10,128,305,135);return r.addColorStop(0,"rgba(0, 242, 254, 0.52)"),r.addColorStop(.45,"rgba(14, 165, 233, 0.26)"),r.addColorStop(1,"rgba(7, 22, 44, 0.0)"),e.fillStyle=r,e.fillRect(0,0,256,512),new oc(s)}function y1(){const s=document.createElement("canvas");s.width=64,s.height=128;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"#0f172a"),t.addColorStop(.35,"#475569"),t.addColorStop(.5,"#e2e8f0"),t.addColorStop(.65,"#334155"),t.addColorStop(1,"#090d16"),e.fillStyle=t,e.fillRect(0,0,64,128),e.strokeStyle="#06080e",e.lineWidth=5;for(let o=-32;o<160;o+=16)e.beginPath(),e.moveTo(0,o),e.lineTo(64,o+24),e.stroke(),e.strokeStyle="rgba(0, 242, 254, 0.85)",e.lineWidth=2,e.beginPath(),e.moveTo(0,o+5),e.lineTo(64,o+29),e.stroke(),e.strokeStyle="#06080e",e.lineWidth=5;const r=new oc(s);return r.wrapS=Es,r.wrapT=Es,r.repeat.set(1,720),r}function fg(s=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=s?"#081c30":"#051020",t.fillRect(0,0,128,256);const r=8,o=26,l=128/r,u=256/o;for(let p=0;p<o;p++)for(let h=0;h<r;h++){const _=(p*37+h*19)%29;_<(s?18:12)||(_%5===0?t.fillStyle=s?"rgba(0, 242, 254, 0.35)":"rgba(0, 242, 254, 0.72)":_%7===0?t.fillStyle=s?"rgba(253, 224, 71, 0.28)":"rgba(253, 224, 71, 0.62)":t.fillStyle=s?"rgba(125, 211, 252, 0.25)":"rgba(186, 230, 253, 0.45)",t.fillRect(h*l+3,p*u+2,l-6,u-4))}const f=new oc(e);return f.wrapS=Es,f.wrapT=Es,f}function M1(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");return e.fillStyle="#060c18",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=10,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.strokeStyle="#fde047",e.lineWidth=5,e.beginPath(),e.arc(128,128,84,0,Math.PI*2),e.stroke(),e.fillStyle="#00f2fe",e.font="900 110px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,132),new oc(s)}function E1(s){const e=s.clientWidth||420,t=s.clientHeight||780,r=new G_;r.background=new Rt(398118),r.fog=new bf(664121,.011);const o=new ai(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new u1({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=vf,l.toneMappingExposure=1.22,s.innerHTML="",s.appendChild(l.domElement);const u=new ux(3718648,.85);r.add(u);const f=new cx(62206,1.65);f.position.set(0,28,-65),r.add(f);const p=new km(62206,3.8,22);p.position.set(0,1.35,0),r.add(p);const h=new km(16638023,4.2,24);h.position.set(0,2.5,-.3),r.add(h);const _=S1(),S=new ma(340,220),g=new cn({map:_,fog:!1,depthWrite:!1}),M=new ht(S,g);M.position.set(0,12,-210),r.add(M);const w=1800,b=y1(),x=new _i(.042,.042,w,16);x.rotateX(Math.PI/2);const v=new gd({color:13358561,map:b,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),U=new ht(x,v);U.position.set(0,0,-w*.5+12),r.add(U);const V=new _i(.015,.015,w,8);V.rotateX(Math.PI/2);const C=new cn({color:62206,transparent:!0,opacity:.72}),N=new ht(V,C);N.position.set(0,.022,-w*.5+12),r.add(N);const D=new gd({color:330002,roughness:.8,metalness:.2}),B=new Zn(7.2,60,7),E=new ht(B,D);E.position.set(0,-30.045,3.5),r.add(E);const L=new gn,z=new Zn(9.2,70,9.2),Y=new ht(z,D);Y.position.set(0,-35.045,0),L.add(Y);const Z=M1(),ne=new ma(7,7);ne.rotateX(-Math.PI/2);const H=new cn({map:Z}),ee=new ht(ne,H);ee.position.set(0,.01,0),L.add(ee);const ge=new co(3.4,.075,12,36);ge.rotateX(Math.PI/2);const re=new cn({color:62206}),q=new ht(ge,re);q.position.set(0,.12,0),L.add(q),L.position.set(0,0,-100),r.add(L);const Q=fg(!1),te=fg(!0),I=new gd({color:464166,map:Q,emissive:959977,emissiveMap:Q,emissiveIntensity:.58,roughness:.5,metalness:.4}),ue=new cn({color:729657,map:te}),we=new cn({color:1128020}),Ke=new cn({color:62206,transparent:!0,opacity:.35}),Xe=[];for(let Pe=0;Pe<44;Pe++){const et=Pe%2===0,Ne=Pe%3,lt=Math.floor(Pe/2),St=6.5+Pe%4*2.1+Ne*2.2,yt=6.5+Pe*3%4*1.8,gt=72+Pe*13%42+Ne*16,kt=new Zn(St,gt,yt),Be=Ne===0?I:Ne===1?ue:we,Ht=new ht(kt,Be),Nt=Ne===0?12.2+Pe%3*2.8:Ne===1?21.5+Pe%3*4.2:32+Pe%4*5,Sn=(et?-1:1)*Nt,Mt=10-lt*13,Qn=-60+gt*.5;if(Ht.position.set(Sn,Qn,Mt),Ne===0){const Si=new Zn(.12,gt,.12),It=new ht(Si,Ke);It.position.set(et?St*.5+.04:-St*.5-.04,0,yt*.5),Ht.add(It)}r.add(Ht),Xe.push(Ht)}const $e=[],J=new Pf(5.5,115,20,1,!0);for(let Pe=0;Pe<10;Pe++){const et=Pe%2===0,Ne=new cn({color:Pe%3===0?62206:959977,transparent:!0,opacity:Pe%3===0?.11:.075,side:ji,depthWrite:!1,blending:Yi}),lt=new ht(J,Ne),St=(et?-1:1)*(8.5+Pe%3*4.5),yt=-18-Pe*24;lt.position.set(St,8,yt),lt.rotation.z=(et?-1:1)*.24,r.add(lt),$e.push({mesh:lt,mat:Ne,baseAngle:(et?-1:1)*.24,speed:.45+Pe%4*.18,phaseOffset:Pe*1.1})}const fe=[],Ae=new Zn(.4,.18,2.2),je=new cn({color:62206}),Ge=new cn({color:15680580});for(let Pe=0;Pe<20;Pe++){const et=Pe%2===0,Ne=new ht(Ae,et?Ge:je),lt=(Pe%4-1.5)*2.1;Ne.position.set(lt,-36,-Pe*12),r.add(Ne),fe.push({mesh:Ne,speed:(et?-1:1)*(15+Pe%4*3.5)})}const Ce=220,Dt=new Float32Array(Ce*3);for(let Pe=0;Pe<Ce;Pe++)Dt[Pe*3+0]=(Math.random()-.5)*28,Dt[Pe*3+1]=-6+Math.random()*20,Dt[Pe*3+2]=6-Math.random()*55;const it=new Pn;it.setAttribute("position",new Fi(Dt,3));const _t=new Bg({color:62206,size:.14,transparent:!0,opacity:.65,blending:Yi,depthWrite:!1}),bt=new J_(it,_t);r.add(bt);const dt=new gn;dt.position.set(0,0,0),r.add(dt);const Je=x1(),Tt=new cn({color:62206}),Vt=Pe=>{const et=new gn;et.position.set(Pe?-.08:.08,.88,0);const Ne=new gs(.064,.34,10,18),lt=new ht(Ne,Je);lt.position.set(Pe?.018:-.018,-.19,0),lt.rotation.z=Pe?.05:-.05,et.add(lt);const St=new gn;St.position.set(Pe?.035:-.035,-.41,0),et.add(St);const yt=new gs(.05,.34,10,18),gt=new ht(yt,Je);gt.position.set(Pe?.02:-.02,-.2,0),gt.rotation.z=Pe?.04:-.04,St.add(gt);const kt=new gn;kt.position.set(Pe?.035:-.035,-.43,0),St.add(kt);const Be=new gs(.042,.14,8,14);Be.rotateX(Math.PI/2);const Ht=new ht(Be,Je);return Ht.position.set(0,-.01,-.025),kt.add(Ht),{hipGroup:et,kneeGroup:St,bootGroup:kt}},wt=Vt(!0),Ct=Vt(!1);dt.add(wt.hipGroup),dt.add(Ct.hipGroup);const X=new gn;dt.add(X);const Yt=new _i(.135,.12,.15,18);Yt.scale(1.15,1,.72);const ke=new ht(Yt,Je);ke.position.set(0,.89,0),X.add(ke);const R=new gn;R.position.set(0,.95,0),X.add(R);const y=new _i(.165,.125,.24,18);y.scale(1.18,1,.68);const K=new ht(y,Je);K.position.set(0,.12,0),R.add(K);const le=new _i(.215,.162,.28,20);le.scale(1.24,1,.68);const he=new ht(le,Je);he.position.set(0,.35,0),R.add(he);const Re=new Zn(.036,.38,.024),Ie=new cn({color:62206,transparent:!0,opacity:.45}),xe=new ht(Re,Ie);xe.position.set(0,.26,.13),R.add(xe);const Se=new gr(.078,16,16),Ue=new ht(Se,Je);Ue.position.set(-.255,.45,0),R.add(Ue);const Ze=new ht(Se,Je);Ze.position.set(.255,.45,0),R.add(Ze);const Fe=new _i(.05,.06,.1,14),P=new ht(Fe,Je);P.position.set(0,.54,0),R.add(P);const ie=new gn;ie.position.set(0,.67,0),R.add(ie);const ye=new gr(.118,24,24);ye.scale(.95,1.06,1.02);const me=new ht(ye,Je);ie.add(me);const k=new co(.116,.016,12,28);k.rotateX(Math.PI/2);const F=new ht(k,Tt);F.position.set(0,.025,0),ie.add(F);const _e=new gn;_e.position.set(0,.022,.118),ie.add(_e);const Ee=new Zn(.16,.028,.008);Ee.translate(.08,0,0);const Oe=new ht(Ee,Tt);_e.add(Oe);const Me=new gn;Me.position.set(.155,0,0),Oe.add(Me);const Ye=new Zn(.16,.024,.007);Ye.translate(.08,0,0);const ze=new ht(Ye,Tt);Me.add(ze);const vt=new gn;vt.position.set(.155,0,0),ze.add(vt);const ft=new Zn(.15,.018,.006);ft.translate(.075,0,0);const qt=new ht(ft,Tt);vt.add(qt);const on=Pe=>{const et=new gn;et.position.set(Pe?-.255:.255,.44,0);const Ne=new gs(.048,.22,10,16),lt=new ht(Ne,Je);lt.position.set(Pe?-.08:.08,-.11,-.02),lt.rotation.z=Pe?-.56:.56,et.add(lt);const St=new gn;St.position.set(Pe?-.16:.16,-.21,-.04),et.add(St);const yt=new gs(.042,.21,10,16),gt=new ht(yt,Je);gt.position.set(Pe?-.07:.07,-.04,-.09),gt.rotation.x=.72,gt.rotation.z=Pe?-.45:.45,St.add(gt);const kt=new gr(.046,14,14),Be=new ht(kt,Je);return Be.position.set(Pe?-.14:.14,-.08,-.18),St.add(Be),{shoulderGroup:et,elbowGroup:St,handMesh:Be}},li=on(!0),Bi=on(!1);R.add(li.shoulderGroup),R.add(Bi.shoulderGroup);const An=new gn;An.position.set(0,.17,-.2),R.add(An);const Hn=4,yr=new _i(.018,.018,Hn,16);yr.rotateZ(Math.PI/2);const ci=new cn({color:14742270}),nn=new ht(yr,ci);An.add(nn);const Lt=new _i(.052,.052,Hn,14);Lt.rotateZ(Math.PI/2);const kn=new cn({color:62206,transparent:!0,opacity:.42,blending:Yi,depthWrite:!1}),xn=new ht(Lt,kn);An.add(xn);const Zr=new gr(.055,14,14),ki=new ht(Zr,Tt);ki.position.set(-Hn*.5,0,0),An.add(ki);const Mr=new ht(Zr,Tt);Mr.position.set(Hn*.5,0,0),An.add(Mr);const er=new Float32Array(6),tr=new Pn;tr.setAttribute("position",new Fi(er,3));const bs=new Og({color:62206,linewidth:3}),Jr=new Z_(tr,bs);Jr.visible=!1,r.add(Jr);const $t=new _i(.04,.04,1,10),xa=new cn({color:62206,transparent:!0,opacity:.85,blending:Yi,depthWrite:!1}),nr=new ht($t,xa);nr.visible=!1,r.add(nr);const Er=new co(.14,.012,10,28),A=new cn({color:62206,transparent:!0,opacity:.55,blending:Yi}),j=new cn({color:62206,transparent:!0,opacity:.55,blending:Yi}),pe=new ht(Er,A),ae=new ht(Er,j);r.add(pe),r.add(ae);const se=new gr(.12,24,24),We=new gr(.24,16,16),Ve=new gr(.072,12,12),He=new cn({color:16710083}),tt=new cn({color:16638023,transparent:!0,opacity:.52,blending:Yi,depthWrite:!1}),rt=[];for(let Pe=0;Pe<4;Pe++){const et=new gn,Ne=new ht(se,He),lt=new ht(We,tt);et.add(Ne),et.add(lt),r.add(et);const St=[];for(let yt=0;yt<7;yt++){const gt=new cn({color:yt<3?16638023:16096779,transparent:!0,opacity:.68-yt*.085,blending:Yi,depthWrite:!1}),kt=new ht(Ve,gt),Be=1-yt*.12;kt.scale.set(Be,Be,Be),r.add(kt),St.push(kt)}rt.push({group:et,core:Ne,halo:lt,trails:St})}return{scene:r,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:p,goldOrbLight:h,backlitBackdrop:M,cableTex:b,arrivalGroup:L,beaconRingMesh:q,skyscrapers:Xe,spotlightBeams:$e,carMeshes:fe,weatherPoints:bt,weatherGeo:it,weatherMat:_t,weatherCount:Ce,acrobatGroup:dt,vectorSilhouetteMat:Je,dorsalStripMat:Ie,poleCoreMat:ci,poleLaserGlowMat:kn,poleGlowMesh:xn,upperBodyGroup:X,torsoSpineGroup:R,headGroup:ie,leftLeg:wt,rightLeg:Ct,leftArm:li,rightArm:Bi,poleGroup:An,ribbonPivot:_e,ribbonJoint2:Me,ribbonJoint3:vt,grappleLaserLine:Jr,grappleLineGeo:tr,grappleBeamMesh:nr,leftReceiverRing:pe,rightReceiverRing:ae,leftReceiverMat:A,rightReceiverMat:j,orbMeshes:rt,worldLeftHand:new oe,worldRightHand:new oe,grappleAnchor:new oe,activeCityIndex:-1}}function w1(s,e,t){var Yt;if(!s)return;const r=-e.distance,o=e.angle,l=Math.abs(o),u=Math.min(1,l/Kr),f=e.walkSpeedMultiplier||1,p=((Yt=e.cfg)==null?void 0:Yt.city)||go[0];if(s.activeCityIndex!==e.cityIndex){s.activeCityIndex=e.cityIndex;const ke=p.weatherArchetype||"urban";ke==="cyber_rain"?(s.scene.background.setHex(395550),s.scene.fog.color.setHex(923714),s.weatherMat.color.setHex(62206),s.weatherMat.size=.16):ke==="golden_embers"?(s.scene.background.setHex(1181976),s.scene.fog.color.setHex(2627372),s.weatherMat.color.setHex(16638023),s.weatherMat.size=.18):ke==="blizzard"?(s.scene.background.setHex(398118),s.scene.fog.color.setHex(1059918),s.weatherMat.color.setHex(14742270),s.weatherMat.size=.2):(s.scene.background.setHex(332068),s.scene.fog.color.setHex(664121),s.weatherMat.color.setHex(3718648),s.weatherMat.size=.14)}const h=s.weatherGeo.attributes.position,_=h.array,S=p.weatherArchetype||"urban",g=(e.windCurrent||0)*(S==="blizzard"?14:9.5),M=S==="cyber_rain"?-24:S==="blizzard"?-6.5:S==="golden_embers"?2.2:-1.8;for(let ke=0;ke<s.weatherCount;ke++){const R=ke*3;_[R+0]+=g*t,_[R+1]+=M*t,_[R+0]>15?_[R+0]-=30:_[R+0]<-15&&(_[R+0]+=30),M<0&&_[R+1]<-8?_[R+1]=14:M>0&&_[R+1]>14&&(_[R+1]=-8),_[R+2]>r+8?_[R+2]-=56:_[R+2]<r-50&&(_[R+2]+=56)}h.needsUpdate=!0;const w=e.isFeverMode;s.vectorSilhouetteMat.uniforms.uRimStrength.value=w?1.65:.96,s.vectorSilhouetteMat.uniforms.uRimColor.value.setHex(w&&Math.sin(e.time*18)>0?16638023:62206),s.dorsalStripMat.opacity=w?.95:.45,s.dorsalStripMat.color.setHex(w?16638023:62206),s.poleLaserGlowMat.opacity=w?.82:.42;const b=w?1.45:1;s.poleGlowMesh.scale.set(b,1,b);const x=Math.min(1,t*11),v=Math.min(1,t*7.5),U=u*.56+(e.fallSlowMo?.22:0);e.smoothKneeFlex+=(U-e.smoothKneeFlex)*x;const V=-Math.sin(o)*.25;e.smoothHipX+=(V-e.smoothHipX)*x;const N=l>Kr*.75||e.fallSlowMo?1:0;e.edgeSaveBlend+=(N-e.edgeSaveBlend)*x;const D=-o*.38-Math.sin(o)*.16*(1+e.edgeSaveBlend*.45),B=-o*.32;if(e.smoothTorsoComp+=(D-e.smoothTorsoComp)*v,e.smoothNeckComp+=(B-e.smoothNeckComp)*v,e.fallSlowMo)s.acrobatGroup.position.set(e.fallPosX,e.fallPosY,r),s.acrobatGroup.rotation.z=-o*1.35,s.acrobatGroup.rotation.x=e.fallTumbleX;else if(e.grappleRescueTimer>0){const ke=e.grappleRescueTimer/.45,R=e.rescueStartX*ke,y=e.rescueStartY*ke;s.acrobatGroup.position.set(R,y,r),s.acrobatGroup.rotation.z=-o*ke,s.acrobatGroup.rotation.x=0}else s.acrobatGroup.position.set(0,0,r),s.acrobatGroup.rotation.z=-o*.72,s.acrobatGroup.rotation.x=0;const E=e.gameStatus==="PLAYING"&&!e.fallSlowMo,L=E?Math.sin(e.stepPhase):0,z=E?Math.cos(e.stepPhase):0,Y=Math.min(.56,.34*Math.pow(f,.45)),Z=E?Math.abs(L)*.036*Math.min(1.5,f):Math.sin(e.time*2.6)*.012,ne=e.smoothKneeFlex*.22;s.upperBodyGroup.position.x=e.smoothHipX,s.upperBodyGroup.position.y=Z-ne;const H=Math.sin(e.time*22)*e.edgeSaveBlend,ee=e.smoothKneeFlex*.95;s.leftLeg.hipGroup.position.x=-.08+e.smoothHipX*.65,s.rightLeg.hipGroup.position.x=.08+e.smoothHipX*.65,s.leftLeg.hipGroup.position.y=.88-ne,s.rightLeg.hipGroup.position.y=.88-ne;const ge=-e.smoothHipX*.75,re=o>0?e.edgeSaveBlend*(.28+Math.abs(H)*.22):0,q=o<0?-e.edgeSaveBlend*(.28+Math.abs(H)*.22):0;s.leftLeg.hipGroup.rotation.z=ge-re,s.rightLeg.hipGroup.rotation.z=ge-q,s.leftLeg.hipGroup.rotation.x=L*Y+ee*.55+H*.25,s.leftLeg.kneeGroup.rotation.x=-Math.max(0,z)*(Y*1.22)-ee*1.1,s.leftLeg.bootGroup.rotation.x=ee*.52,s.rightLeg.hipGroup.rotation.x=-L*Y+ee*.55-H*.25,s.rightLeg.kneeGroup.rotation.x=-Math.max(0,-z)*(Y*1.22)-ee*1.1,s.rightLeg.bootGroup.rotation.x=ee*.52;const Q=E?Math.min(.24,(f-1)*.14):0;s.torsoSpineGroup.rotation.z=e.smoothTorsoComp+H*.08,s.torsoSpineGroup.rotation.x=.06+Q+e.smoothKneeFlex*.18+e.edgeSaveBlend*.28,s.headGroup.rotation.z=e.smoothNeckComp,s.headGroup.rotation.x=-Q*.7-e.smoothKneeFlex*.14-e.edgeSaveBlend*.2;const te=e.leftPressed?.28:0,I=e.grappleRescueTimer>0?1.45:e.rightPressed?.28:0,ue=L*.12*f;s.leftArm.shoulderGroup.rotation.x=-ue+H*.55,s.rightArm.shoulderGroup.rotation.x=e.grappleRescueTimer>0?-1.35:ue-H*.55,s.leftArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4-e.edgeSaveBlend*.22,s.rightArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4+e.edgeSaveBlend*.22,s.leftArm.elbowGroup.rotation.x=te+e.edgeSaveBlend*.25,s.rightArm.elbowGroup.rotation.x=I+e.edgeSaveBlend*.25,s.poleGroup.rotation.z=(I-te)*.38-o*.42+H*.14;const we=e.windCurrent||0,Ke=10.5*Math.min(1.6,f);s.ribbonPivot.rotation.y=-Math.PI*.5+we*.78+Math.sin(e.time*Ke)*.22,s.ribbonPivot.rotation.z=Math.cos(e.time*(Ke*1.15))*.16,s.ribbonJoint2.rotation.y=Math.sin(e.time*(Ke*1.35)-.8)*.28+we*.22,s.ribbonJoint3.rotation.y=Math.sin(e.time*(Ke*1.6)-1.6)*.34+we*.25,s.backlitBackdrop.position.z=r-210,s.arrivalGroup.position.set(0,0,-e.targetDistance-3.5);const Xe=1+Math.sin(e.time*5)*.08;s.beaconRingMesh.scale.set(Xe,Xe,1);for(let ke=0;ke<s.spotlightBeams.length;ke++){const R=s.spotlightBeams[ke];R.mesh.rotation.z=R.baseAngle+Math.sin(e.time*R.speed+R.phaseOffset)*.14,R.mesh.position.z>r+15?R.mesh.position.z-=240:R.mesh.position.z<r-235&&(R.mesh.position.z+=240)}for(let ke=0;ke<s.skyscrapers.length;ke++){const R=s.skyscrapers[ke];R.position.z>r+18?R.position.z-=286:R.position.z<r-268&&(R.position.z+=286)}for(let ke=0;ke<s.carMeshes.length;ke++){const R=s.carMeshes[ke];R.mesh.position.z+=R.speed*t,R.mesh.position.z>r+25?R.mesh.position.z=r-230:R.mesh.position.z<r-235&&(R.mesh.position.z=r+20)}s.acrobatGroup.updateMatrixWorld(!0),s.leftArm.handMesh.getWorldPosition(s.worldLeftHand),s.rightArm.handMesh.getWorldPosition(s.worldRightHand);const $e=s.worldLeftHand,J=s.worldRightHand;if(e.grappleRescueTimer>0){s.grappleLaserLine.visible=!0,s.grappleBeamMesh.visible=!0,s.grappleAnchor.set(0,0,r-1.2);const ke=s.grappleLineGeo.attributes.position.array;ke[0]=J.x,ke[1]=J.y,ke[2]=J.z,ke[3]=s.grappleAnchor.x,ke[4]=s.grappleAnchor.y,ke[5]=s.grappleAnchor.z,s.grappleLineGeo.attributes.position.needsUpdate=!0;const R=J.distanceTo(s.grappleAnchor);s.grappleBeamMesh.position.lerpVectors(J,s.grappleAnchor,.5),s.grappleBeamMesh.scale.set(1,Math.max(.1,R),1),s.grappleBeamMesh.lookAt(s.grappleAnchor),s.grappleBeamMesh.rotateX(Math.PI/2)}else s.grappleLaserLine.visible=!1,s.grappleBeamMesh.visible=!1;let fe=!1,Ae=!1;for(let ke=0;ke<e.jugglePool.length;ke++){const R=e.jugglePool[ke];R.active&&R.phase>=e.catchThreshold&&(R.targetHand==="L"&&(fe=!0),R.targetHand==="R"&&(Ae=!0))}s.leftReceiverRing.position.copy($e),s.rightReceiverRing.position.copy(J),s.leftReceiverMat.color.setHex(fe?16638023:62206),s.rightReceiverMat.color.setHex(Ae?16638023:62206);const je=fe?1.32:.78,Ge=Ae?1.32:.78;s.leftReceiverRing.scale.set(je,je,je),s.rightReceiverRing.scale.set(Ge,Ge,Ge);for(let ke=0;ke<4;ke++){const R=e.jugglePool[ke],y=s.orbMeshes[ke];if(!R.active||e.fallSlowMo){y.group.visible=!1;for(let P=0;P<y.trails.length;P++)y.trails[P].visible=!1;continue}y.group.visible=!0;const K=R.targetHand==="R"?$e:J,le=R.targetHand==="R"?J:$e,he=R.phase,Re=1.48+ke%2*.22,Ie=K.x+(le.x-K.x)*he,xe=K.y+(le.y-K.y)*he+4*Re*he*(1-he),Se=K.z+(le.z-K.z)*he-.12*Math.sin(he*Math.PI);y.group.position.set(Ie,xe,Se);const Ze=he>=e.catchThreshold?1.28:w?1.15:1;y.group.scale.set(Ze,Ze,Ze);const Fe=w?.028:.036;for(let P=0;P<y.trails.length;P++){const ie=y.trails[P],ye=he-(P+1)*Fe;if(ye<=.01){ie.visible=!1;continue}ie.visible=!0;const me=K.x+(le.x-K.x)*ye,k=K.y+(le.y-K.y)*ye+4*Re*ye*(1-ye),F=K.z+(le.z-K.z)*ye-.12*Math.sin(ye*Math.PI);ie.position.set(me,k,F)}}s.cyanPoleLight.position.set(0,1.35,r),s.cyanPoleLight.intensity=w?6.8:3.8,s.goldOrbLight.position.set(0,2.45,r-.25);const Ce=Math.min(1,(e.combo||0)/14),Dt=Math.min(1,Math.max(0,(l-Kr*.28)/(Kr*.62))),it=e.fallSlowMo?1:Dt,bt=(58+Ce*6)*(1-it)+48*it,Je=(6.2+Ce*.55)*(1-it)+4.95*it,Vt=(3.38+Ce*.16)*(1-it)+2.95*it,wt=Math.min(1,t*5.5);e.dynamicFov+=(bt-e.dynamicFov)*wt,e.dynamicCamDist+=(Je-e.dynamicCamDist)*wt,e.dynamicCamY+=(Vt-e.dynamicCamY)*wt,Math.abs(s.camera.fov-e.dynamicFov)>.02&&(s.camera.fov=e.dynamicFov,s.camera.updateProjectionMatrix());const Ct=e.shake>.05?Math.sin(e.time*42)*e.shake*.038:0,X=e.shake>.05?Math.cos(e.time*36)*e.shake*.038:0;s.camera.position.set(Ct+Math.sin(o)*.32,e.dynamicCamY+X,r+e.dynamicCamDist),e.fallSlowMo?s.camera.lookAt(s.acrobatGroup.position):s.camera.lookAt(e.smoothHipX*.35,1.65-e.smoothKneeFlex*.2,r-15),s.camera.rotation.z=-e.cameraRoll*(.52+it*.65),s.renderer.render(s.scene,s.camera)}function T1(){try{const s=localStorage.getItem(Qg);return s?JSON.parse(s):null}catch{return null}}function A1(s=.72){const e=[];for(let t=0;t<4;t++)e.push({id:t,active:t===0,phase:t*.25,speed:s,targetHand:t%2===0?"R":"L",arcHeight:132,spinAngle:0});return{jugglePool:e}}function b1(){var Ue,Ze,Fe;const s=T1(),[e,t]=Et.useState((s==null?void 0:s.lang)||"es"),[r,o]=Et.useState((s==null?void 0:s.soundOn)??!0),[l,u]=Et.useState((s==null?void 0:s.currentLevel)||1),[f,p]=Et.useState((s==null?void 0:s.maxUnlockedLevel)||1),[h,_]=Et.useState((s==null?void 0:s.coins)??450),[S,g]=Et.useState((s==null?void 0:s.gems)??80),[M,w]=Et.useState((s==null?void 0:s.leaguePoints)??1250),[b,x]=Et.useState((s==null?void 0:s.gearLevels)||{pole:1,boots:1,gloves:1}),[v,U]=Et.useState((s==null?void 0:s.unlockedSkins)||["skin_1"]),[V,C]=Et.useState((s==null?void 0:s.equippedSkin)||"skin_1"),[N,D]=Et.useState((s==null?void 0:s.unlockedProps)||["balls"]),[B,E]=Et.useState((s==null?void 0:s.equippedProp)||"balls"),[L,z]=Et.useState("home"),[Y,Z]=Et.useState(!0),[ne,H]=Et.useState("./icon.jpg"),[ee,ge]=Et.useState("LOBBY"),[re,q]=Et.useState(null),[Q,te]=Et.useState(""),[I,ue]=Et.useState(()=>ug()),[we,Ke]=Et.useState(null),[Xe,$e]=Et.useState(0),[J,fe]=Et.useState({angleDeg:0,distance:0,targetDistance:100,walkSpeedMultiplier:1,juggleCount:1,multiplier:1,combo:0,isFeverMode:!1,windCurrent:0,windWarningActive:!1,fallSlowMo:!1,slowMoTimer:1.25,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1}),Ae=Et.useRef(null),je=Et.useRef(null),Ge=Et.useRef(null),Ce=ca[e]||ca.es,Dt=wd(l),it=Dt.city,_t=vs.find(P=>P.id===V)||vs[0],bt=_s.find(P=>P.id===B)||_s[0];Et.useEffect(()=>{const P=setTimeout(()=>{Z(!1)},550);return()=>clearTimeout(P)},[]);const dt=Et.useCallback(()=>{H(P=>P==="./icon.jpg"?"/icon.jpg":P==="/icon.jpg"?"./icon.png":P==="./icon.png"?"/icon.png":P)},[]),Je=Et.useRef(null);if(!Je.current){const P=wd((s==null?void 0:s.currentLevel)||1),ie=A1(P.juggleBaseSpeed),ye=vs.find(F=>F.id===((s==null?void 0:s.equippedSkin)||"skin_1"))||vs[0],me=_s.find(F=>F.id===((s==null?void 0:s.equippedProp)||"balls"))||_s[0],k=((Ue=s==null?void 0:s.gearLevels)==null?void 0:Ue.gloves)||1;Je.current={lastTimestamp:0,time:0,hudSyncTimer:0,gameStatus:"LOBBY",paused:!1,cfg:P,level:P.level,cityIndex:P.cityIndex,targetDistance:P.totalDistance,distance:0,walkSpeedMultiplier:P.walkSpeedMultiplier,walkSpeed:P.walkSpeed,difficultyFactor:P.difficultyFactor,catchWindow:P.catchWindow,gravityFactor:P.gravityFactor,windMax:P.windMax,windChangeFreq:P.windChangeFreq,windCurrent:.15,windTarget:.25,windTimer:0,windWarningActive:!1,nextWindSign:-1,angle:.03,angleRad:.03,angleDeg:.03*180/Math.PI,cameraRoll:0,angularVelocity:0,stepPhase:0,smoothKneeFlex:0,smoothHipX:0,smoothTorsoComp:0,smoothNeckComp:0,edgeSaveBlend:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38,fallSlowMo:!1,slowMoTimer:1.25,fallPosX:0,fallPosY:0,fallVelocityY:0,fallTumbleX:0,grappleRescueTimer:0,rescueStartX:0,rescueStartY:0,immunityTimer:0,criticalTiltDuration:0,nearMissArmed:!1,isFeverMode:!1,juggleCount:1,combo:0,maxCombo:0,catchesRun:0,coinsEarnedRun:0,lpEarnedRun:0,leftPressed:!1,rightPressed:!1,shake:0,grappleFlash:0,poleLevel:((Ze=s==null?void 0:s.gearLevels)==null?void 0:Ze.pole)||1,bootsLevel:((Fe=s==null?void 0:s.gearLevels)==null?void 0:Fe.boots)||1,glovesLevel:k,catchThreshold:Math.max(.62,1-P.catchWindow-(k-1)*.008),skinObj:ye,propObj:me,...ie}}Et.useEffect(()=>{try{localStorage.setItem(Qg,JSON.stringify({lang:e,soundOn:r,currentLevel:l,maxUnlockedLevel:f,coins:h,gems:S,leaguePoints:M,gearLevels:b,unlockedSkins:v,equippedSkin:V,unlockedProps:N,equippedProp:B}))}catch{}},[e,r,l,f,h,S,M,b,v,V,N,B]),Et.useEffect(()=>{jt.enabled=r},[r]),Et.useEffect(()=>{var ye;const P=Je.current;P.poleLevel=b.pole||1,P.bootsLevel=b.boots||1,P.glovesLevel=b.gloves||1;const ie=((ye=P.cfg)==null?void 0:ye.catchWindow)||.28;P.catchThreshold=Math.max(.62,1-ie-(P.glovesLevel-1)*.008),P.skinObj=_t,P.propObj=bt},[b,it,_t,bt]),Et.useEffect(()=>{const P=setInterval(()=>{ue(ug())},1e3);return()=>clearInterval(P)},[]);const Tt=Et.useCallback((P,ie="LOBBY")=>{const ye=wd(P),me=Je.current;me.cfg=ye,me.level=ye.level,me.cityIndex=ye.cityIndex,me.targetDistance=ye.totalDistance,me.distance=0,me.walkSpeedMultiplier=ye.walkSpeedMultiplier,me.walkSpeed=ye.walkSpeed,me.difficultyFactor=ye.difficultyFactor,me.catchWindow=ye.catchWindow,me.catchThreshold=Math.max(.62,1-ye.catchWindow-(me.glovesLevel-1)*.008),me.gravityFactor=ye.gravityFactor,me.windMax=ye.windMax,me.windChangeFreq=ye.windChangeFreq,me.windCurrent=.15,me.windTarget=.32,me.windTimer=0,me.windWarningActive=!1,me.nextWindSign=-1,me.angle=.03,me.angleRad=.03,me.angleDeg=.03*180/Math.PI,me.cameraRoll=0,me.angularVelocity=0,me.stepPhase=0,me.smoothKneeFlex=0,me.smoothHipX=0,me.smoothTorsoComp=0,me.smoothNeckComp=0,me.edgeSaveBlend=0,me.dynamicFov=58,me.dynamicCamDist=6.2,me.dynamicCamY=3.38,me.fallSlowMo=!1,me.slowMoTimer=1.25,me.fallPosX=0,me.fallPosY=0,me.fallVelocityY=0,me.fallTumbleX=0,me.grappleRescueTimer=0,me.rescueStartX=0,me.rescueStartY=0,me.immunityTimer=0,me.criticalTiltDuration=0,me.nearMissArmed=!1,me.isFeverMode=!1,me.juggleCount=1,me.combo=0,me.maxCombo=0,me.catchesRun=0,me.coinsEarnedRun=0,me.lpEarnedRun=0,me.leftPressed=!1,me.rightPressed=!1,me.shake=0,me.grappleFlash=0,me.gameStatus=ie,me.paused=!1;for(let k=0;k<me.jugglePool.length;k++){const F=me.jugglePool[k];F.active=k===0,F.phase=k*.26,F.speed=ye.juggleBaseSpeed,F.targetHand=k%2===0?"R":"L"}ge(ie),q(null),fe({angleDeg:me.angleDeg,distance:0,targetDistance:ye.totalDistance,walkSpeedMultiplier:ye.walkSpeedMultiplier,juggleCount:1,multiplier:bt.mult*_t.bonusMult,combo:0,isFeverMode:!1,windCurrent:me.windCurrent,windWarningActive:!1,fallSlowMo:!1,slowMoTimer:1.25,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1})},[bt.mult,_t.bonusMult]),Vt=Et.useCallback(()=>{jt.init(),jt.playCatchSound(2,!1),Tt(l,"PLAYING")},[l,Tt]),wt=Et.useCallback(()=>{jt.init();const P=Je.current;if(P.gameStatus!=="PLAYING"||P.juggleCount>=4)return;const ie=P.juggleCount,ye=P.jugglePool[ie];ye.active=!0,ye.phase=.08,ye.speed=P.cfg.juggleBaseSpeed,ye.targetHand=ie%2===0?"R":"L",P.juggleCount+=1,jt.playCatchSound(P.juggleCount+2,!0)},[]),Ct=Et.useCallback(P=>{var k,F;const ie=Je.current;if(ie.gameStatus!=="PLAYING"||ie.paused||ie.fallSlowMo)return!1;let ye=!1;const me=ie.catchThreshold;for(let _e=0;_e<ie.jugglePool.length;_e++){const Ee=ie.jugglePool[_e];if(Ee.active&&Ee.targetHand===P&&Ee.phase>=me){const Oe=Ee.phase>=.88;if(Ee.phase=0,Ee.speed=ie.cfg.juggleBaseSpeed,Ee.targetHand=P==="L"?"R":"L",ie.combo+=1,ie.combo>ie.maxCombo&&(ie.maxCombo=ie.combo),ie.catchesRun+=1,ie.isFeverMode=ie.combo>=10,ie.level>=4){const qt=(P==="L"?-1:1)*.06*(ie.difficultyFactor||ie.walkSpeedMultiplier);ie.angularVelocity+=qt}else ie.angularVelocity*=.82,ie.angle*=.92;ie.angleRad=ie.angle,ie.angleDeg=ie.angle*180/Math.PI;const Me=ie.isFeverMode?2:1,Ye=ie.juggleCount*(((k=ie.propObj)==null?void 0:k.mult)||1)*(((F=ie.skinObj)==null?void 0:F.bonusMult)||1)*Me,ze=Math.max(1,Math.round((Oe?6:3)*Ye)),vt=Math.max(1,Math.round((Oe?4:2)*ie.juggleCount));ie.coinsEarnedRun+=ze,ie.lpEarnedRun+=vt,_(ft=>ft+ze),w(ft=>ft+vt),ie.catchesRun%8===0&&g(ft=>ft+1),jt.playCatchSound(ie.combo,Oe),Ke({id:Date.now()+Math.random(),side:P==="L"?"left":"right",isPerfect:Oe,text:`${Oe?(ca[e]||ca.es).perfectCatchLabel:(ca[e]||ca.es).goodCatchLabel} x${ie.combo}`}),ye=!0;break}}return ye},[e]),X=Et.useCallback(()=>{jt.init();const P=Je.current;if(!(P.gameStatus!=="PLAYING"&&P.gameStatus!=="GAMEOVER")){if(S<20){q("SHOP"),P.paused=!0;return}g(ie=>ie-20),P.rescueStartX=P.fallSlowMo?P.fallPosX:Math.sin(P.angle)*.5,P.rescueStartY=P.fallSlowMo?Math.min(-.8,P.fallPosY):-.6,P.grappleRescueTimer=.45,P.immunityTimer=1.5,P.angle=0,P.angleRad=0,P.angleDeg=0,P.angularVelocity=0,P.fallSlowMo=!1,P.slowMoTimer=1.25,P.fallPosX=0,P.fallPosY=0,P.fallVelocityY=0,P.fallTumbleX=0,P.grappleFlash=1,P.shake=0,P.gameStatus="PLAYING",ge("PLAYING"),jt.playGrapple()}},[S]),Yt=Et.useCallback((P,ie)=>{ie&&ie.cancelable&&ie.preventDefault(),jt.init();const ye=Je.current;P==="L"?(ye.leftPressed=!0,Ct("L")):(ye.rightPressed=!0,Ct("R"))},[Ct]),ke=Et.useCallback((P,ie)=>{ie&&ie.cancelable&&ie.preventDefault();const ye=Je.current;P==="L"?ye.leftPressed=!1:ye.rightPressed=!1},[]);Et.useEffect(()=>{const P=ye=>{if(ye.repeat)return;const me=ye.key.toLowerCase(),k=Je.current;me==="arrowleft"||me==="a"?(k.leftPressed=!0,Ct("L")):me==="arrowright"||me==="d"?(k.rightPressed=!0,Ct("R")):me==="w"||me==="arrowup"?wt():me===" "?(ye.preventDefault(),k.gameStatus==="LOBBY"?Vt():k.gameStatus==="PLAYING"&&X()):(me==="escape"||me==="p")&&k.gameStatus==="PLAYING"&&(k.paused=!k.paused,q(k.paused?"PAUSE":null))},ie=ye=>{const me=ye.key.toLowerCase(),k=Je.current;me==="arrowleft"||me==="a"?k.leftPressed=!1:(me==="arrowright"||me==="d")&&(k.rightPressed=!1)};return window.addEventListener("keydown",P),window.addEventListener("keyup",ie),()=>{window.removeEventListener("keydown",P),window.removeEventListener("keyup",ie)}},[Ct,wt,X,Vt]),Et.useEffect(()=>{if(!Ae.current)return;const P=E1(Ae.current);je.current=P;let ie=null;const ye=()=>{if(!Ae.current||!je.current)return;const k=Ae.current.clientWidth||420,F=Ae.current.clientHeight||780;je.current.camera.aspect=k/F,je.current.camera.updateProjectionMatrix(),je.current.renderer.setSize(k,F)};window.addEventListener("resize",ye);const me=k=>{var Oe,Me;const F=Je.current,_e=(k-F.lastTimestamp)/1e3,Ee=_e>0&&_e<.2?Math.min(_e,.05):.0166;if(F.lastTimestamp=k,!F.paused){if(F.time+=Ee,F.cameraRoll+=(F.angle*.24-F.cameraRoll)*Math.min(1,Ee*8),F.grappleFlash>0&&(F.grappleFlash=Math.max(0,F.grappleFlash-Ee*2.4)),F.grappleRescueTimer>0&&(F.grappleRescueTimer=Math.max(0,F.grappleRescueTimer-Ee)),F.immunityTimer>0&&(F.immunityTimer=Math.max(0,F.immunityTimer-Ee)),F.shake>0&&(F.shake=Math.max(0,F.shake-Ee*4.5)),F.gameStatus==="PLAYING")if(F.fallSlowMo)F.slowMoTimer-=Ee,F.fallVelocityY-=16.8*Ee,F.fallPosY+=F.fallVelocityY*Ee,F.fallPosX+=(F.angle>=0?1:-1)*2.4*Ee,F.fallTumbleX+=Ee*2.8,F.angle+=(F.angle>=0?1:-1)*.35*Ee,F.angleRad=F.angle,F.angleDeg=F.angle*180/Math.PI,F.slowMoTimer<=0&&(F.fallSlowMo=!1,F.gameStatus="GAMEOVER",ge("GAMEOVER"));else{if(F.windTimer+=Ee,F.level>=4&&F.windTimer>=F.windChangeFreq-1&&(F.windWarningActive||(F.windWarningActive=!0,F.nextWindSign=F.windTarget>=0?-1:1)),F.windTimer>=F.windChangeFreq)if(F.windTimer=0,F.windWarningActive=!1,F.level>=4){const nn=F.nextWindSign||(F.windTarget>=0?-1:1),Lt=(.36+Math.abs(Math.cos(F.time*2.3))*F.windMax*.58)*Math.pow(F.walkSpeedMultiplier,.45);F.windTarget=nn*Lt,F.shake=1.9,jt.playWindGust()}else{const nn=Math.sin(F.time*3.7)>=0?1:-1;F.windTarget=nn*(.16+Math.abs(Math.cos(F.time*2.3))*F.windMax*.36)}F.windCurrent+=(F.windTarget-F.windCurrent)*Math.min(1,Ee*2.2);const Ye=F.cfg,ze=1-(F.poleLevel-1)*.048,vt=1-(F.bootsLevel-1)*.052,ft=4.55+(F.poleLevel-1)*.15,qt=1+(F.bootsLevel-1)*.025,on=F.walkSpeed*qt*Ee;F.distance=Math.min(F.targetDistance,F.distance+on),F.stepPhase+=Ee*7.2*F.walkSpeedMultiplier*qt;const li=Math.sin(F.stepPhase)*.45*Math.pow(F.walkSpeedMultiplier,1.35)*vt,An=((F.rightPressed?1:0)-(F.leftPressed?1:0))*ft,Hn=Math.sin(F.angle)*Ye.gravityInstability*2.55*ze,yr=F.windCurrent*vt*1.65;if(F.immunityTimer>0)F.angularVelocity=0,F.angle*=Math.pow(.82,Ee*60);else{F.angularVelocity+=(Hn+yr+li+An)*Ee;const nn=F.isFeverMode?.905:.92;F.angularVelocity*=Math.pow(nn,Ee*60),F.angle+=F.angularVelocity*Ee}F.angleRad=F.angle,F.angleDeg=F.angle*180/Math.PI;const ci=Math.abs(F.angle);ci>Kr*.75&&jt.playHeartbeatIfDanger(k),ci>Kr*.78?(F.criticalTiltDuration+=Ee,F.criticalTiltDuration>=.35&&(F.nearMissArmed=!0)):ci<Kr*.3&&(F.nearMissArmed?(F.nearMissArmed=!1,F.criticalTiltDuration=0,F.coinsEarnedRun+=5,F.lpEarnedRun+=100,_(nn=>nn+5),w(nn=>nn+100),jt.playNearMissSave(),$e(Date.now())):F.criticalTiltDuration=0);for(let nn=0;nn<F.jugglePool.length;nn++){const Lt=F.jugglePool[nn];if(Lt.active){if(Lt.phase+=Lt.speed*Ee,Lt.spinAngle=Lt.phase*Math.PI*4,Lt.phase>=F.catchThreshold&&(Lt.targetHand==="L"&&F.leftPressed||Lt.targetHand==="R"&&F.rightPressed)){Ct(Lt.targetHand);continue}if(Lt.phase>=1){Lt.phase=0;const kn=Lt.targetHand==="L"?-1:1;Lt.targetHand=Lt.targetHand==="L"?"R":"L",F.combo=0,F.isFeverMode=!1;const xn=F.level>=4?kn*(.68+.06*(F.difficultyFactor||1))*ze:kn*.65*ze;F.immunityTimer<=0&&(F.angularVelocity+=xn),F.shake=2.8}}}if(ci>=Kr&&F.immunityTimer<=0&&(F.fallSlowMo=!0,F.slowMoTimer=1.25,F.fallPosX=Math.sin(F.angle)*.35,F.fallPosY=-.08,F.fallVelocityY=-2.4,F.fallTumbleX=.15,F.isFeverMode=!1,F.shake=4,jt.playFall()),F.distance>=F.targetDistance){F.gameStatus="VICTORY";const nn=120+F.level*25,Lt=F.level%5===0?18:6,kn=45+F.level*8;F.coinsEarnedRun+=nn,F.lpEarnedRun+=kn,_(xn=>xn+nn),g(xn=>xn+Lt),w(xn=>xn+kn),p(xn=>Math.max(xn,Math.min(100,F.level+1))),jt.playVictory(),ge("VICTORY")}}else if(F.gameStatus==="LOBBY"){F.angle=Math.sin(F.time*1.5)*.04,F.angleRad=F.angle,F.angleDeg=F.angle*180/Math.PI,F.windCurrent=Math.sin(F.time*.8)*.35;for(let Ye=0;Ye<F.jugglePool.length;Ye++){const ze=F.jugglePool[Ye];ze.active&&(ze.phase=(ze.phase+Ee*.65)%1)}}}if(Ge.current){const ze=Math.max(-47,Math.min(47,F.angleDeg||0))/47*90;Ge.current.style.transform=`translateX(${ze.toFixed(1)}px)`}if(w1(je.current,F,Ee),F.hudSyncTimer+=Ee,F.hudSyncTimer>=.08){F.hudSyncTimer=0;let Ye=!1,ze=!1;for(let qt=0;qt<F.jugglePool.length;qt++){const on=F.jugglePool[qt];on.active&&on.phase>=F.catchThreshold&&(on.targetHand==="L"&&(Ye=!0),on.targetHand==="R"&&(ze=!0))}const vt=F.isFeverMode?2:1,ft=F.juggleCount*(((Oe=F.propObj)==null?void 0:Oe.mult)||1)*(((Me=F.skinObj)==null?void 0:Me.bonusMult)||1)*vt;fe({angleDeg:F.angleDeg||0,distance:Math.floor(F.distance),targetDistance:F.targetDistance,walkSpeedMultiplier:F.walkSpeedMultiplier||1,juggleCount:F.juggleCount,multiplier:ft,combo:F.combo,isFeverMode:F.isFeverMode,windCurrent:F.windCurrent,windWarningActive:F.windWarningActive,fallSlowMo:F.fallSlowMo,slowMoTimer:F.slowMoTimer,leftPressed:F.leftPressed,rightPressed:F.rightPressed,leftTimingReady:Ye,rightTimingReady:ze})}ie=requestAnimationFrame(me)};return ie=requestAnimationFrame(me),()=>{window.removeEventListener("resize",ye),ie&&cancelAnimationFrame(ie),je.current&&je.current.renderer&&je.current.renderer.dispose()}},[Ct]);const R=P=>{jt.init();const ie=b[P.id]||1;if(ie>=P.maxLevel)return;const ye=Math.round(P.baseCost*Math.pow(P.costScale,ie-1));h<ye||(_(me=>me-ye),x(me=>({...me,[P.id]:ie+1})),jt.playCatchSound(ie+3,!0))},y=P=>{if(jt.init(),v.includes(P.id)){C(P.id),jt.playCatchSound(2,!1);return}P.currency==="coins"&&h>=P.cost?(_(ie=>ie-P.cost),U(ie=>[...ie,P.id]),C(P.id),jt.playVictory()):P.currency==="gems"&&S>=P.cost&&(g(ie=>ie-P.cost),U(ie=>[...ie,P.id]),C(P.id),jt.playVictory())},K=P=>{if(jt.init(),N.includes(P.id)){E(P.id),jt.playCatchSound(3,!1);return}P.currency==="coins"&&h>=P.cost?(_(ie=>ie-P.cost),D(ie=>[...ie,P.id]),E(P.id),jt.playVictory()):P.currency==="gems"&&S>=P.cost&&(g(ie=>ie-P.cost),D(ie=>[...ie,P.id]),E(P.id),jt.playVictory())},le=P=>{jt.init(),g(ie=>ie+P.gems),_(ie=>ie+P.coins),jt.playVictory(),te(`+${P.gems} 💎  +${P.coins} 🪙`),setTimeout(()=>te(""),2500)},he=[...h1,{id:"player",name:e==="es"?"TÚ (Equilibrista)":"YOU (Tightrope Pro)",country:it.flag,lp:M,badge:"⭐",isPlayer:!0}].sort((P,ie)=>ie.lp-P.lp),Re=he.findIndex(P=>P.isPlayer)+1,Ie=Math.abs(J.windCurrent).toFixed(1),xe=J.windCurrent<-.8?"◄◄":J.windCurrent<-.15?"◄":J.windCurrent>.8?"►►":J.windCurrent>.15?"►":"•",Se=J.fallSlowMo||Math.abs(J.angleDeg)>30;return G.jsxs("div",{className:"game-shell",children:[G.jsx("div",{ref:Ae,className:"webgl-mount"}),Y&&G.jsxs("div",{className:"modal-backdrop",style:{zIndex:90,flexDirection:"column",gap:"14px",background:"radial-gradient(circle at 50% 35%, #09152b 0%, #02040a 85%)"},children:[G.jsxs("div",{style:{position:"relative",width:"82%",maxWidth:"320px",borderRadius:"18px",overflow:"hidden",border:"2px solid rgba(0, 242, 254, 0.75)",boxShadow:"0 0 32px rgba(0, 242, 254, 0.45), 0 18px 40px rgba(0, 0, 0, 0.9)"},children:[G.jsx("img",{src:ne,onError:dt,alt:"NO MIRES ABAJO",style:{width:"100%",height:"auto",display:"block"}}),G.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5,8,17,0) 55%, rgba(5,8,17,0.95) 100%)"}})]}),G.jsx("div",{style:{fontFamily:"Bebas Neue, Orbitron, sans-serif",fontSize:"2rem",letterSpacing:"0.08em",color:"#fde047",textShadow:"0 0 16px rgba(0, 242, 254, 0.6)"},children:Ce.title})]}),ee!=="PLAYING"&&G.jsxs("header",{className:"top-utility-bar",children:[G.jsxs("div",{className:"league-strip",onClick:()=>{Je.current.paused=!0,q("LEAGUE")},children:[G.jsxs("div",{className:"league-strip-left",children:[G.jsxs("span",{children:["🏆 ",Ce.leagueBanner,":"]}),G.jsxs("span",{className:"league-points-badge",children:["#",Re," (",M," ",Ce.leaguePointsShort,")"]})]}),G.jsxs("span",{className:"league-timer",children:["⏳ ",I.days,"d ",I.hours,"h"]})]}),G.jsxs("div",{className:"nav-pills-row",children:[G.jsxs("div",{className:"nav-pills-group",children:[G.jsxs("button",{type:"button",className:"mini-pill gold",onClick:()=>{Je.current.paused=!0,q("CITIES")},children:[it.flag," ",Ce.level," ",l,"/100"]}),G.jsxs("button",{type:"button",className:"mini-pill cyan",onClick:()=>{Je.current.paused=!0,q("ARMORY")},children:["⚙️ ",Ce.armoryBtn]}),G.jsxs("button",{type:"button",className:"mini-pill",onClick:()=>{Je.current.paused=!0,q("SKINS")},children:["🧥 ",Ce.skinsBtn]})]}),G.jsxs("div",{className:"nav-pills-group",children:[G.jsx("button",{type:"button",className:"mini-pill",onClick:()=>{jt.init(),o(P=>!P)},children:r?"🔊":"🔇"}),G.jsx("button",{type:"button",className:"mini-pill",onClick:()=>t(P=>P==="es"?"en":"es"),children:e.toUpperCase()})]})]})]}),ee==="PLAYING"&&G.jsxs(G.Fragment,{children:[G.jsxs("section",{className:`compact-play-hud ${J.isFeverMode?"fever-active":""}`,children:[G.jsxs("div",{className:"compact-hud-top-row",children:[G.jsxs("div",{className:"compact-hud-city",children:[G.jsx("span",{children:it.flag}),G.jsxs("span",{className:"compact-hud-lvl-badge",children:["Nv.",l]}),G.jsxs("span",{className:"compact-hud-speed-badge",children:[J.walkSpeedMultiplier.toFixed(2),"x"]}),G.jsx("span",{children:it.name[e]})]}),G.jsxs("div",{className:"compact-hud-metrics",children:[G.jsxs("div",{className:"compact-metric-pill distance",children:[G.jsxs("span",{className:"compact-dist-cur",children:[J.distance,"m"]}),G.jsxs("span",{className:"compact-dist-target",children:["/ ",J.targetDistance,"m"]})]}),G.jsx("div",{className:"compact-metric-pill wind",children:G.jsxs("span",{children:["💨 ",xe," ",Ie]})}),G.jsx("div",{className:"compact-metric-pill mult",children:G.jsxs("span",{children:["x",J.multiplier]})}),G.jsx("button",{type:"button",className:"compact-pause-btn",title:"Mute / Audio",onClick:()=>{jt.init(),o(P=>!P)},children:r?"🔊":"🔇"}),G.jsx("button",{type:"button",className:"compact-pause-btn",title:Ce.pauseBtn,onClick:()=>{Je.current.paused=!0,q("PAUSE")},children:"⏸"})]})]}),G.jsxs("div",{className:"balance-axis-row",children:[G.jsx("span",{className:"balance-axis-label",children:e==="es"?"EJE":"AXIS"}),G.jsxs("div",{className:"balance-axis-track",children:[G.jsx("div",{className:"balance-axis-center-notch"}),G.jsx("div",{ref:Ge,className:"balance-axis-needle"})]}),J.isFeverMode?G.jsx("span",{className:"fever-mode-pill",children:Ce.feverModeBadge}):G.jsxs("span",{className:"balance-axis-label",style:{color:"#fde047"},children:["🔥",J.combo]})]})]}),J.windWarningActive&&G.jsx("div",{className:"wind-gust-alert-pill",children:G.jsx("span",{children:Ce.windGustAlert})}),Xe>0&&G.jsx("div",{className:"near-miss-floater",children:Ce.nearMissPopup},Xe),we&&G.jsx("div",{className:`hand-catch-floater ${we.side} ${we.isPerfect?"perfect":"good"}`,children:we.text},we.id)]}),ee==="LOBBY"&&L==="home"&&G.jsxs("div",{className:"lobby-overlay",children:[G.jsxs("div",{className:"lobby-top-section",children:[G.jsxs("div",{className:"rounded-2xl",style:{position:"relative",width:"100%",height:"132px",borderRadius:"16px",overflow:"hidden",border:"1.5px solid rgba(0, 242, 254, 0.72)",boxShadow:"0 0 24px rgba(0, 242, 254, 0.38), 0 10px 26px rgba(0, 0, 0, 0.85)"},children:[G.jsx("img",{src:ne,onError:dt,alt:"NO MIRES ABAJO",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 28%",display:"block"}}),G.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5, 8, 17, 0.1) 0%, rgba(5, 8, 17, 0.45) 52%, rgba(9, 15, 32, 0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",padding:"8px 12px"},children:[G.jsx("h1",{className:"lobby-main-title",style:{fontSize:"2.1rem",marginBottom:"2px"},children:Ce.title}),G.jsx("div",{className:"lobby-level-subtitle",onClick:()=>q("CITIES"),style:{cursor:"pointer",marginTop:0},children:G.jsxs("span",{children:["📍 ",Ce.level," ",l,"/100 — ",it.flag," ",it.name[e]," (",Dt.totalDistance,"m •"," ",Dt.walkSpeedMultiplier.toFixed(2),"x)"]})})]})]}),G.jsxs("div",{className:"lobby-league-banner",onClick:()=>q("LEAGUE"),children:[G.jsxs("div",{className:"lobby-league-row",children:[G.jsxs("span",{style:{fontWeight:900,fontSize:"0.84rem",color:"#fde047"},children:["🏆 ",Ce.leagueBanner," — #",Re," (",M," LP)"]}),G.jsx("span",{style:{fontSize:"0.74rem",color:"#67e8f9",fontWeight:800},children:"🎁 Cofres Épicos →"})]}),G.jsxs("div",{style:{fontSize:"0.74rem",color:"#cbd5e1",display:"flex",justifyContent:"space-between"},children:[G.jsx("span",{children:it.weatherLabel[e]}),G.jsxs("span",{children:["🪙 ",h," | 💎 ",S]})]})]})]}),G.jsxs("div",{className:"lobby-bottom-section",children:[G.jsxs("div",{className:"lobby-prep-grid",children:[G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{z("home"),q("CITIES")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"🌍"}),G.jsx("span",{children:Ce.citiesBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>{z("home"),q("ARMORY")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"⚙️"}),G.jsx("span",{children:Ce.armoryBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>{z("home"),q("SKINS")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"🧥"}),G.jsx("span",{children:Ce.skinsBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{z("home"),q("SHOP")},children:[G.jsx("span",{style:{fontSize:"1.15rem"},children:"💎"}),G.jsx("span",{children:Ce.shopBtn})]})]}),G.jsx("button",{type:"button",className:"lobby-play-btn",onClick:Vt,children:Ce.playNowBtn})]})]}),ee==="PLAYING"&&G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:"multitouch-split-overlay",children:[G.jsx("div",{className:"multitouch-half-panel",onPointerDown:P=>Yt("L",P),onPointerUp:P=>ke("L",P),onPointerCancel:P=>ke("L",P),onPointerLeave:P=>ke("L",P)}),G.jsx("div",{className:"multitouch-half-panel",onPointerDown:P=>Yt("R",P),onPointerUp:P=>ke("R",P),onPointerCancel:P=>ke("R",P),onPointerLeave:P=>ke("R",P)})]}),G.jsxs("div",{className:"vector-minimal-hud",children:[G.jsxs("div",{className:`vector-corner-indicator left ${J.leftPressed?"pressed":""} ${J.leftTimingReady?"timing-ready":""}`,children:[G.jsxs("span",{className:"vector-corner-label",children:["◄ ",Ce.left]}),G.jsx("div",{className:"vector-corner-line"})]}),G.jsxs("div",{className:"vector-center-micro-bar",children:[J.juggleCount<4&&G.jsxs("button",{type:"button",className:"vector-micro-pill gold",onClick:wt,children:[G.jsx("span",{children:"+1 🟡"}),G.jsxs("span",{children:["(",J.juggleCount,"/4)"]})]}),G.jsxs("button",{type:"button",className:`vector-micro-pill ${Se?"danger":""}`,onClick:X,children:[G.jsx("span",{children:"🪝"}),G.jsx("span",{children:J.fallSlowMo?`${J.slowMoTimer.toFixed(1)}s`:"20💎"})]})]}),G.jsxs("div",{className:`vector-corner-indicator right ${J.rightPressed?"pressed":""} ${J.rightTimingReady?"timing-ready":""}`,children:[G.jsxs("span",{className:"vector-corner-label",children:[Ce.right," ►"]}),G.jsx("div",{className:"vector-corner-line"})]})]})]}),re==="LEAGUE"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["🏆 ",Ce.leagueModalTitle]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Je.current.paused=!1,q(null)},children:"✕"})]}),G.jsx("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"12px"},children:Ce.leagueModalSub}),G.jsxs("div",{className:"item-card highlight",style:{marginBottom:"12px",textAlign:"center"},children:[G.jsxs("div",{style:{fontSize:"0.78rem",color:"#fde047",fontWeight:800},children:["⏳ ",Ce.seasonEndsIn,": ",I.days,"d ",I.hours,"h"," ",I.mins,"m ",I.secs,"s"]}),G.jsxs("div",{style:{fontSize:"1.45rem",fontWeight:900,color:"#ffffff",marginTop:"2px"},children:["#",Re," — ",M," ",Ce.leaguePointsShort]})]}),G.jsx("div",{className:"grid-list",style:{marginBottom:"14px"},children:p1.map(P=>G.jsxs("div",{className:"item-card",style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[G.jsx("div",{children:G.jsxs("div",{style:{fontWeight:900,color:"#fde047"},children:[P.icon," ",P.rankLabel," — ",P.title[e]]})}),G.jsxs("div",{style:{fontWeight:800,fontSize:"0.82rem",color:"#67e8f9"},children:["+",P.gemsReward," 💎 | +",P.coinsReward," 🪙"]})]},P.rankLabel))}),G.jsx("div",{className:"grid-list",children:he.map((P,ie)=>G.jsxs("div",{className:`league-rank-row ${P.isPlayer?"is-player":""}`,children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[G.jsxs("span",{style:{fontWeight:900,color:"#fde047",width:"24px"},children:["#",ie+1]}),G.jsx("span",{children:P.country}),G.jsx("span",{style:{fontWeight:800},children:P.name})]}),G.jsxs("div",{style:{fontWeight:900,color:"#38bdf8"},children:[P.lp," LP ",P.badge]})]},P.id))})]})}),re==="ARMORY"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["⚙️ ",Ce.armoryTitle]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Je.current.paused=!1,q(null)},children:"✕"})]}),G.jsxs("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"10px"},children:[Ce.armorySub," (🪙 ",h,")"]}),G.jsx("div",{className:"grid-list",children:f1.map(P=>{const ie=b[P.id]||1,ye=ie>=P.maxLevel,me=Math.round(P.baseCost*Math.pow(P.costScale,ie-1));return G.jsxs("div",{className:"item-card highlight",children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{style:{fontWeight:900,fontSize:"1.02rem"},children:[P.icon," ",P.name[e]," (Nv. ",ie,"/",P.maxLevel,")"]}),G.jsx("span",{style:{fontSize:"0.76rem",color:"#4ade80",fontWeight:800},children:P.statLabel[e]})]}),G.jsx("p",{style:{fontSize:"0.78rem",color:"#cbd5e1"},children:P.desc[e]}),G.jsx("div",{className:"armory-progress-bar",children:Array.from({length:10}).map((k,F)=>G.jsx("div",{className:`armory-pip ${F<ie?"filled":""}`},F))}),G.jsx("button",{type:"button",className:"pause-action-btn gold",style:{marginTop:"6px",padding:"8px 12px"},disabled:ye||h<me,onClick:()=>R(P),children:ye?`✅ ${Ce.maxLevelLabel}`:`⬆️ ${Ce.upgradeBtn} — ${me} 🪙`})]},P.id)})})]})}),re==="CITIES"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["🌍 ",Ce.citiesBtn," (100 Niveles)"]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Je.current.paused=!1,q(null)},children:"✕"})]}),G.jsx("div",{className:"grid-list",children:go.map((P,ie)=>{const ye=ie*5+1;return G.jsxs("div",{className:"item-card",children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("span",{style:{fontWeight:900,color:"#fde047"},children:[P.flag," ",ie+1,". ",P.name[e]]}),G.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:P.weatherLabel[e]})]}),G.jsx("div",{className:"city-levels-row",children:[0,1,2,3,4].map(me=>{const k=ye+me,F=k<=f,_e=k===l;return G.jsxs("button",{type:"button",className:`lvl-chip ${_e?"current":""} ${F&&!_e?"completed":""} ${F?"":"locked"}`,disabled:!F,onClick:()=>{u(k),Tt(k,"LOBBY")},children:["Nv.",k]},k)})})]},P.id)})})]})}),re==="SKINS"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["🧥 ",Ce.skinsBtn]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Je.current.paused=!1,q(null)},children:"✕"})]}),G.jsxs("h3",{style:{fontSize:"0.95rem",color:"#67e8f9",marginBottom:"8px"},children:["🧥 Aspectos Urbanos (🪙 ",h," | 💎 ",S,")"]}),G.jsx("div",{className:"grid-list",style:{marginBottom:"16px"},children:vs.map(P=>{const ie=v.includes(P.id),ye=V===P.id;return G.jsxs("div",{className:`item-card ${ye?"highlight":""}`,children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("span",{style:{fontWeight:900},children:[P.name[e]," (x",P.bonusMult,")"]}),G.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>y(P),children:ye?"✅ EQUIPADO":ie?"EQUIPAR":`${P.cost} ${P.currency==="gems"?"💎":"🪙"}`})]}),G.jsx("span",{style:{fontSize:"0.76rem",color:"#94a3b8"},children:P.desc[e]})]},P.id)})}),G.jsx("h3",{style:{fontSize:"0.95rem",color:"#fde047",marginBottom:"8px"},children:"🎪 Objetos de Malabar 3D Especulares"}),G.jsx("div",{className:"grid-list",children:_s.map(P=>{const ie=N.includes(P.id),ye=B===P.id;return G.jsx("div",{className:`item-card ${ye?"highlight":""}`,children:G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("span",{style:{fontWeight:900},children:[P.icon," ",P.name[e]," (x",P.mult,")"]}),G.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>K(P),children:ye?"✅ EQUIPADO":ie?"EQUIPAR":`${P.cost} ${P.currency==="gems"?"💎":"🪙"}`})]})},P.id)})})]})}),re==="SHOP"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsxs("div",{className:"modal-header",children:[G.jsxs("h2",{className:"modal-title",children:["💎 ",Ce.shopTitle]}),G.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Je.current.paused=!1,q(null)},children:"✕"})]}),G.jsx("p",{style:{fontSize:"0.82rem",color:"#cbd5e1",marginBottom:"12px"},children:Ce.shopSub}),Q&&G.jsxs("div",{className:"item-card highlight",style:{marginBottom:"10px",textAlign:"center",color:"#4ade80",fontWeight:900},children:["🎁 ",Q]}),G.jsx("div",{className:"grid-list",children:m1.map(P=>G.jsx("div",{className:`item-card ${P.popular?"highlight":""}`,children:G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{children:[G.jsxs("div",{style:{fontWeight:900,fontSize:"1rem"},children:[P.icon," ",P.name[e]]}),G.jsxs("div",{style:{fontSize:"0.8rem",color:"#67e8f9"},children:["+",P.gems," 💎 Gemas | +",P.coins," 🪙 Monedas"]})]}),G.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>le(P),children:P.tag})]})},P.id))})]})}),re==="PAUSE"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsx("div",{className:"modal-header",children:G.jsxs("h2",{className:"modal-title",children:["⏸ ",Ce.pauseTitle]})}),G.jsx("p",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"12px"},children:Ce.pauseSub}),G.jsxs("div",{className:"lobby-prep-grid",style:{marginBottom:"12px"},children:[G.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>q("ARMORY"),children:[G.jsx("span",{children:"⚙️"}),G.jsx("span",{children:Ce.armoryBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>q("SKINS"),children:[G.jsx("span",{children:"🧥"}),G.jsx("span",{children:Ce.skinsBtn})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>q("LEAGUE"),children:[G.jsx("span",{children:"🏆"}),G.jsx("span",{children:"Liga"})]}),G.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>q("CITIES"),children:[G.jsx("span",{children:"🌍"}),G.jsx("span",{children:Ce.citiesBtn})]})]}),G.jsxs("div",{className:"pause-menu-stack",children:[G.jsxs("button",{type:"button",className:"pause-action-btn resume",onClick:()=>{Je.current.paused=!1,q(null)},children:["▶ ",Ce.resumeBtn]}),G.jsxs("button",{type:"button",className:"pause-action-btn gold",onClick:()=>Tt(l,"PLAYING"),children:["🔄 ",Ce.restartBtn]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>Tt(l,"LOBBY"),children:["🏠 ",Ce.backToLobbyBtn]})]})]})}),ee==="VICTORY"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card",children:[G.jsx("div",{className:"modal-header",children:G.jsxs("h2",{className:"modal-title",children:["🏆 ",Ce.levelCleared]})}),G.jsxs("div",{className:"item-card highlight",style:{textAlign:"center",marginBottom:"14px"},children:[G.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:900},children:[it.flag," ",it.name[e]," — ",Ce.level," ",l]}),G.jsxs("div",{style:{fontSize:"0.95rem",color:"#4ade80",fontWeight:800,marginTop:"6px"},children:["+",Je.current.coinsEarnedRun," 🪙 | +",Je.current.lpEarnedRun," 🏆 LP"]})]}),G.jsxs("div",{className:"pause-menu-stack",children:[G.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:()=>{const P=Math.min(100,l+1);u(P),Tt(P,"PLAYING")},children:["▶ ",Ce.nextLevel," (",Math.min(100,l+1),"/100)"]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>{const P=Math.min(100,l+1);u(P),Tt(P,"LOBBY")},children:["🏠 ",Ce.backToLobbyBtn]})]})]})}),ee==="GAMEOVER"&&G.jsx("div",{className:"modal-backdrop",children:G.jsxs("div",{className:"modal-card loss-aversion",children:[G.jsx("div",{className:"modal-header",children:G.jsxs("h2",{className:"modal-title",style:{color:"#fca5a5"},children:["⚠️ ",Ce.fellTitle]})}),G.jsxs("p",{style:{fontSize:"0.92rem",color:"#fef2f2",marginBottom:"14px"},children:[Ce.fellSub," ",G.jsxs("strong",{children:["(",J.distance,"m / ",J.targetDistance,"m)"]})]}),G.jsxs("div",{className:"pause-menu-stack",children:[G.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:X,children:["🪝 ",Ce.continueHook]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>Tt(l,"PLAYING"),children:["🔄 ",Ce.retryFree]}),G.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>Tt(l,"LOBBY"),children:["🏠 ",Ce.backToLobbyBtn]})]})]})})]})}Vv.createRoot(document.getElementById("root")).render(G.jsx(Uv.StrictMode,{children:G.jsx(b1,{})}));
