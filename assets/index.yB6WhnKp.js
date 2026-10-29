(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bu={exports:{}},ja={},Pu={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function mv(){if(Wp)return Tt;Wp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(D,ce,Se){this.props=D,this.context=ce,this.refs=b,this.updater=Se||M}x.prototype.isReactComponent={},x.prototype.setState=function(D,ce){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ce,"setState")},x.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=x.prototype;function I(D,ce,Se){this.props=D,this.context=ce,this.refs=b,this.updater=Se||M}var V=I.prototype=new v;V.constructor=I,A(V,x.prototype),V.isPureReactComponent=!0;var R=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(D,ce,Se){var Xe,Fe={},Ie=null,de=null;if(ce!=null)for(Xe in ce.ref!==void 0&&(de=ce.ref),ce.key!==void 0&&(Ie=""+ce.key),ce)N.call(ce,Xe)&&!F.hasOwnProperty(Xe)&&(Fe[Xe]=ce[Xe]);var K=arguments.length-2;if(K===1)Fe.children=Se;else if(1<K){for(var Re=Array(K),Ye=0;Ye<K;Ye++)Re[Ye]=arguments[Ye+2];Fe.children=Re}if(D&&D.defaultProps)for(Xe in K=D.defaultProps,K)Fe[Xe]===void 0&&(Fe[Xe]=K[Xe]);return{$$typeof:s,type:D,key:Ie,ref:de,props:Fe,_owner:L.current}}function P(D,ce){return{$$typeof:s,type:D.type,key:ce,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function q(D){var ce={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return ce[Se]})}var $=/\/+/g;function ie(D,ce){return typeof D=="object"&&D!==null&&D.key!=null?q(""+D.key):ce.toString(36)}function Y(D,ce,Se,Xe,Fe){var Ie=typeof D;(Ie==="undefined"||Ie==="boolean")&&(D=null);var de=!1;if(D===null)de=!0;else switch(Ie){case"string":case"number":de=!0;break;case"object":switch(D.$$typeof){case s:case e:de=!0}}if(de)return de=D,Fe=Fe(de),D=Xe===""?"."+ie(de,0):Xe,R(Fe)?(Se="",D!=null&&(Se=D.replace($,"$&/")+"/"),Y(Fe,ce,Se,"",function(Ye){return Ye})):Fe!=null&&(k(Fe)&&(Fe=P(Fe,Se+(!Fe.key||de&&de.key===Fe.key?"":(""+Fe.key).replace($,"$&/")+"/")+D)),ce.push(Fe)),1;if(de=0,Xe=Xe===""?".":Xe+":",R(D))for(var K=0;K<D.length;K++){Ie=D[K];var Re=Xe+ie(Ie,K);de+=Y(Ie,ce,Se,Re,Fe)}else if(Re=g(D),typeof Re=="function")for(D=Re.call(D),K=0;!(Ie=D.next()).done;)Ie=Ie.value,Re=Xe+ie(Ie,K++),de+=Y(Ie,ce,Se,Re,Fe);else if(Ie==="object")throw ce=String(D),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return de}function ne(D,ce,Se){if(D==null)return D;var Xe=[],Fe=0;return Y(D,Xe,"","",function(Ie){return ce.call(Se,Ie,Fe++)}),Xe}function ge(D){if(D._status===-1){var ce=D._result;ce=ce(),ce.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=ce)}if(D._status===1)return D._result.default;throw D._result}var ae={current:null},X={transition:null},Q={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:ne,forEach:function(D,ce,Se){ne(D,function(){ce.apply(this,arguments)},Se)},count:function(D){var ce=0;return ne(D,function(){ce++}),ce},toArray:function(D){return ne(D,function(ce){return ce})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Tt.Component=x,Tt.Fragment=t,Tt.Profiler=o,Tt.PureComponent=I,Tt.StrictMode=r,Tt.Suspense=m,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Tt.act=ee,Tt.cloneElement=function(D,ce,Se){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Xe=A({},D.props),Fe=D.key,Ie=D.ref,de=D._owner;if(ce!=null){if(ce.ref!==void 0&&(Ie=ce.ref,de=L.current),ce.key!==void 0&&(Fe=""+ce.key),D.type&&D.type.defaultProps)var K=D.type.defaultProps;for(Re in ce)N.call(ce,Re)&&!F.hasOwnProperty(Re)&&(Xe[Re]=ce[Re]===void 0&&K!==void 0?K[Re]:ce[Re])}var Re=arguments.length-2;if(Re===1)Xe.children=Se;else if(1<Re){K=Array(Re);for(var Ye=0;Ye<Re;Ye++)K[Ye]=arguments[Ye+2];Xe.children=K}return{$$typeof:s,type:D.type,key:Fe,ref:Ie,props:Xe,_owner:de}},Tt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Tt.createElement=E,Tt.createFactory=function(D){var ce=E.bind(null,D);return ce.type=D,ce},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(D){return{$$typeof:f,render:D}},Tt.isValidElement=k,Tt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ge}},Tt.memo=function(D,ce){return{$$typeof:p,type:D,compare:ce===void 0?null:ce}},Tt.startTransition=function(D){var ce=X.transition;X.transition={};try{D()}finally{X.transition=ce}},Tt.unstable_act=ee,Tt.useCallback=function(D,ce){return ae.current.useCallback(D,ce)},Tt.useContext=function(D){return ae.current.useContext(D)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(D){return ae.current.useDeferredValue(D)},Tt.useEffect=function(D,ce){return ae.current.useEffect(D,ce)},Tt.useId=function(){return ae.current.useId()},Tt.useImperativeHandle=function(D,ce,Se){return ae.current.useImperativeHandle(D,ce,Se)},Tt.useInsertionEffect=function(D,ce){return ae.current.useInsertionEffect(D,ce)},Tt.useLayoutEffect=function(D,ce){return ae.current.useLayoutEffect(D,ce)},Tt.useMemo=function(D,ce){return ae.current.useMemo(D,ce)},Tt.useReducer=function(D,ce,Se){return ae.current.useReducer(D,ce,Se)},Tt.useRef=function(D){return ae.current.useRef(D)},Tt.useState=function(D){return ae.current.useState(D)},Tt.useSyncExternalStore=function(D,ce,Se){return ae.current.useSyncExternalStore(D,ce,Se)},Tt.useTransition=function(){return ae.current.useTransition()},Tt.version="18.3.1",Tt}var Xp;function rf(){return Xp||(Xp=1,Pu.exports=mv()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function gv(){if(Yp)return ja;Yp=1;var s=rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var _,S={},g=null,M=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(M=m.ref);for(_ in m)r.call(m,_)&&!l.hasOwnProperty(_)&&(S[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)S[_]===void 0&&(S[_]=m[_]);return{$$typeof:e,type:f,key:g,ref:M,props:S,_owner:o.current}}return ja.Fragment=t,ja.jsx=u,ja.jsxs=u,ja}var qp;function vv(){return qp||(qp=1,bu.exports=gv()),bu.exports}var z=vv(),Mt=rf();const _v=Jm(Mt);var ml={},Lu={exports:{}},Zn={},Nu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function xv(){return jp||(jp=1,(function(s){function e(X,Q){var ee=X.length;X.push(Q);e:for(;0<ee;){var D=ee-1>>>1,ce=X[D];if(0<o(ce,Q))X[D]=Q,X[ee]=ce,ee=D;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var Q=X[0],ee=X.pop();if(ee!==Q){X[0]=ee;e:for(var D=0,ce=X.length,Se=ce>>>1;D<Se;){var Xe=2*(D+1)-1,Fe=X[Xe],Ie=Xe+1,de=X[Ie];if(0>o(Fe,ee))Ie<ce&&0>o(de,Fe)?(X[D]=de,X[Ie]=ee,D=Ie):(X[D]=Fe,X[Xe]=ee,D=Xe);else if(Ie<ce&&0>o(de,ee))X[D]=de,X[Ie]=ee,D=Ie;else break e}}return Q}function o(X,Q){var ee=X.sortIndex-Q.sortIndex;return ee!==0?ee:X.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],p=[],_=1,S=null,g=3,M=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(X){for(var Q=t(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=X)r(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=t(p)}}function R(X){if(b=!1,V(X),!A)if(t(m)!==null)A=!0,ge(N);else{var Q=t(p);Q!==null&&ae(R,Q.startTime-X)}}function N(X,Q){A=!1,b&&(b=!1,v(E),E=-1),M=!0;var ee=g;try{for(V(Q),S=t(m);S!==null&&(!(S.expirationTime>Q)||X&&!q());){var D=S.callback;if(typeof D=="function"){S.callback=null,g=S.priorityLevel;var ce=D(S.expirationTime<=Q);Q=s.unstable_now(),typeof ce=="function"?S.callback=ce:S===t(m)&&r(m),V(Q)}else r(m);S=t(m)}if(S!==null)var Se=!0;else{var Xe=t(p);Xe!==null&&ae(R,Xe.startTime-Q),Se=!1}return Se}finally{S=null,g=ee,M=!1}}var L=!1,F=null,E=-1,P=5,k=-1;function q(){return!(s.unstable_now()-k<P)}function $(){if(F!==null){var X=s.unstable_now();k=X;var Q=!0;try{Q=F(!0,X)}finally{Q?ie():(L=!1,F=null)}}else L=!1}var ie;if(typeof I=="function")ie=function(){I($)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ne=Y.port2;Y.port1.onmessage=$,ie=function(){ne.postMessage(null)}}else ie=function(){x($,0)};function ge(X){F=X,L||(L=!0,ie())}function ae(X,Q){E=x(function(){X(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,ge(N))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(X){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var ee=g;g=Q;try{return X()}finally{g=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,Q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=g;g=X;try{return Q()}finally{g=ee}},s.unstable_scheduleCallback=function(X,Q,ee){var D=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?D+ee:D):ee=D,X){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ee+ce,X={id:_++,callback:Q,priorityLevel:X,startTime:ee,expirationTime:ce,sortIndex:-1},ee>D?(X.sortIndex=ee,e(p,X),t(m)===null&&X===t(p)&&(b?(v(E),E=-1):b=!0,ae(R,ee-D))):(X.sortIndex=ce,e(m,X),A||M||(A=!0,ge(N))),X},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(X){var Q=g;return function(){var ee=g;g=Q;try{return X.apply(this,arguments)}finally{g=ee}}}})(Du)),Du}var Kp;function Sv(){return Kp||(Kp=1,Nu.exports=xv()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function yv(){if($p)return Zn;$p=1;var s=rf(),e=Sv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function g(n){return m.call(S,n)?!0:m.call(_,n)?!1:p.test(n)?S[n]=!0:(_[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,d,h,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,I);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,I);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,I);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function V(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),X=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,D;function ce(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Se=!1;function Xe(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),h=c.stack.split(`
`),T=d.length-1,O=h.length-1;1<=T&&0<=O&&d[T]!==h[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==h[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==h[O]){var W=`
`+d[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=O);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ce(n):""}function Fe(n){switch(n.tag){case 5:return ce(n.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function Ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case L:return"Portal";case P:return"Profiler";case E:return"StrictMode";case ie:return"Suspense";case Y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:Ie(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return Ie(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ie(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function K(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Re(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,h.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=Ye(n))}function at(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ge(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ut(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=K(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&V(n,"checked",i,!1)}function ke(n,i){st(n,i);var a=K(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xt(n,i.type,a):i.hasOwnProperty("defaultValue")&&xt(n,i.type,K(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function dt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function xt(n,i,a){(i!=="number"||vt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var It=Array.isArray;function rt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+K(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ft(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(It(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:K(a)}}function Xt(n,i){var a=K(i.value),c=K(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function wt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function C(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var te=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(n,i){if(i){if(te[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function oe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function B(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $e=null,Be=null,H=null;function De(n){if(n=Da(n)){if(typeof $e!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Po(i),$e(n.stateNode,n.type,i))}}function _e(n){Be?H?H.push(n):H=[n]:Be=n}function Ce(){if(Be){var n=Be,i=H;if(H=Be=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Pe(n,i){return n(i)}function Ee(){}var He=!1;function je(n,i,a){if(He)return n(i,a);He=!0;try{return Pe(n,i,a)}finally{He=!1,(Be!==null||H!==null)&&(Ee(),Ce())}}function At(n,i){var a=n.stateNode;if(a===null)return null;var c=Po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ct=!1;if(f)try{var on={};Object.defineProperty(on,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Ct=!1}function Cn(n,i,a,c,d,h,T,O,W){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(Ae){this.onError(Ae)}}var xi=!1,mn=null,Gt=!1,Ln=null,Nn={onError:function(n){xi=!0,mn=n}};function jr(n,i,a,c,d,h,T,O,W){xi=!1,mn=null,Cn.apply(Nn,arguments)}function Kr(n,i,a,c,d,h,T,O,W){if(jr.apply(this,arguments),xi){if(xi){var ve=mn;xi=!1,mn=null}else throw Error(t(198));Gt||(Gt=!0,Ln=ve)}}function Mn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Zi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Sr(n){if(Mn(n)!==n)throw Error(t(188))}function As(n){var i=n.alternate;if(!i){if(i=Mn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return Sr(d),n;if(h===c)return Sr(d),i;h=h.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=h;else{for(var T=!1,O=d.child;O;){if(O===a){T=!0,a=d,c=h;break}if(O===c){T=!0,c=d,a=h;break}O=O.sibling}if(!T){for(O=h.child;O;){if(O===a){T=!0,a=h,c=d;break}if(O===c){T=!0,c=h,a=d;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ji(n){return n=As(n),n!==null?$r(n):null}function $r(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=$r(n);if(i!==null)return i;n=n.sibling}return null}var Qi=e.unstable_scheduleCallback,Zr=e.unstable_cancelCallback,Jr=e.unstable_shouldYield,ct=e.unstable_requestPaint,ft=e.unstable_now,Zt=e.unstable_getCurrentPriorityLevel,jt=e.unstable_ImmediatePriority,Yt=e.unstable_UserBlockingPriority,w=e.unstable_NormalPriority,G=e.unstable_LowPriority,fe=e.unstable_IdlePriority,se=null,re=null;function Ve(n){if(re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:tt,ze=Math.log,Je=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(ze(n)/Je|0)|0}var ht=64,St=4194304;function Ze(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,h=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~d;O!==0?c=Ze(O):(h&=T,h!==0&&(c=Ze(h)))}else T=a&~d,T!==0?c=Ze(T):h!==0&&(c=Ze(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ue(i),d=1<<a,c|=n[a],i&=~d;return c}function rn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,h=n.pendingLanes;0<h;){var T=31-Ue(h),O=1<<T,W=d[T];W===-1?((O&a)===0||(O&c)!==0)&&(d[T]=rn(O,i)):W<=i&&(n.expiredLanes|=O),h&=~O}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function gn(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function qe(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ln(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ue(i),n[i]=a}function Pt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ue(a),h=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~h}}function Dn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ue(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var yt=0;function Si(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var er,Ot,Jt,yi,Vt,ui=!1,Mi=[],Ei=null,yr=null,Mr=null,va=new Map,_a=new Map,Er=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(n,i){switch(n){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":va.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(i.pointerId)}}function xa(n,i,a,c,d,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Da(i),i!==null&&Ot(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function kg(n,i,a,c,d){switch(i){case"focusin":return Ei=xa(Ei,n,i,a,c,d),!0;case"dragenter":return yr=xa(yr,n,i,a,c,d),!0;case"mouseover":return Mr=xa(Mr,n,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return va.set(h,xa(va.get(h)||null,n,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,_a.set(h,xa(_a.get(h)||null,n,i,a,c,d)),!0}return!1}function Rf(n){var i=Qr(n.target);if(i!==null){var a=Mn(i);if(a!==null){if(i=a.tag,i===13){if(i=Zi(a),i!==null){n.blockedOn=i,Vt(n.priority,function(){Jt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function go(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=nc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Me=c,a.target.dispatchEvent(c),Me=null}else return i=Da(a),i!==null&&Ot(i),n.blockedOn=a,!1;i.shift()}return!0}function bf(n,i,a){go(n)&&a.delete(i)}function Bg(){ui=!1,Ei!==null&&go(Ei)&&(Ei=null),yr!==null&&go(yr)&&(yr=null),Mr!==null&&go(Mr)&&(Mr=null),va.forEach(bf),_a.forEach(bf)}function Sa(n,i){n.blockedOn===i&&(n.blockedOn=null,ui||(ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bg)))}function ya(n){function i(d){return Sa(d,n)}if(0<Mi.length){Sa(Mi[0],n);for(var a=1;a<Mi.length;a++){var c=Mi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ei!==null&&Sa(Ei,n),yr!==null&&Sa(yr,n),Mr!==null&&Sa(Mr,n),va.forEach(i),_a.forEach(i),a=0;a<Er.length;a++)c=Er[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Er.length&&(a=Er[0],a.blockedOn===null);)Rf(a),a.blockedOn===null&&Er.shift()}var Cs=R.ReactCurrentBatchConfig,vo=!0;function zg(n,i,a,c){var d=yt,h=Cs.transition;Cs.transition=null;try{yt=1,tc(n,i,a,c)}finally{yt=d,Cs.transition=h}}function Gg(n,i,a,c){var d=yt,h=Cs.transition;Cs.transition=null;try{yt=4,tc(n,i,a,c)}finally{yt=d,Cs.transition=h}}function tc(n,i,a,c){if(vo){var d=nc(n,i,a,c);if(d===null)xc(n,i,c,_o,a),Cf(n,c);else if(kg(d,n,i,a,c))c.stopPropagation();else if(Cf(n,c),i&4&&-1<Og.indexOf(n)){for(;d!==null;){var h=Da(d);if(h!==null&&er(h),h=nc(n,i,a,c),h===null&&xc(n,i,c,_o,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else xc(n,i,c,null,a)}}var _o=null;function nc(n,i,a,c){if(_o=null,n=B(c),n=Qr(n),n!==null)if(i=Mn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Zi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _o=n,null}function Pf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zt()){case jt:return 1;case Yt:return 4;case w:case G:return 16;case fe:return 536870912;default:return 16}default:return 16}}var wr=null,ic=null,xo=null;function Lf(){if(xo)return xo;var n,i=ic,a=i.length,c,d="value"in wr?wr.value:wr.textContent,h=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[h-c];c++);return xo=d.slice(n,1<c?1-c:void 0)}function So(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function yo(){return!0}function Nf(){return!1}function ei(n){function i(a,c,d,h,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(h):h[O]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?yo:Nf,this.isPropagationStopped=Nf,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=ei(Rs),Ma=ee({},Rs,{view:0,detail:0}),Vg=ei(Ma),sc,ac,Ea,Mo=ee({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(sc=n.screenX-Ea.screenX,ac=n.screenY-Ea.screenY):ac=sc=0,Ea=n),sc)},movementY:function(n){return"movementY"in n?n.movementY:ac}}),Df=ei(Mo),Hg=ee({},Mo,{dataTransfer:0}),Wg=ei(Hg),Xg=ee({},Ma,{relatedTarget:0}),oc=ei(Xg),Yg=ee({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),qg=ei(Yg),jg=ee({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Kg=ei(jg),$g=ee({},Rs,{data:0}),If=ei($g),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Qg[n])?!!i[n]:!1}function lc(){return e0}var t0=ee({},Ma,{key:function(n){if(n.key){var i=Zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),n0=ei(t0),i0=ee({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=ei(i0),r0=ee({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),s0=ei(r0),a0=ee({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=ei(a0),l0=ee({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=ei(l0),u0=[9,13,27,32],cc=f&&"CompositionEvent"in window,wa=null;f&&"documentMode"in document&&(wa=document.documentMode);var d0=f&&"TextEvent"in window&&!wa,Ff=f&&(!cc||wa&&8<wa&&11>=wa),Of=" ",kf=!1;function Bf(n,i){switch(n){case"keyup":return u0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function f0(n,i){switch(n){case"compositionend":return zf(i);case"keypress":return i.which!==32?null:(kf=!0,Of);case"textInput":return n=i.data,n===Of&&kf?null:n;default:return null}}function h0(n,i){if(bs)return n==="compositionend"||!cc&&Bf(n,i)?(n=Lf(),xo=ic=wr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ff&&i.locale!=="ko"?null:i.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!p0[n.type]:i==="textarea"}function Vf(n,i,a,c){_e(c),i=Co(i,"onChange"),0<i.length&&(a=new rc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ta=null,Aa=null;function m0(n){ah(n,0)}function Eo(n){var i=Is(n);if(at(i))return n}function g0(n,i){if(n==="change")return i}var Hf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),dc=typeof Wf.oninput=="function"}uc=dc}else uc=!1;Hf=uc&&(!document.documentMode||9<document.documentMode)}function Xf(){Ta&&(Ta.detachEvent("onpropertychange",Yf),Aa=Ta=null)}function Yf(n){if(n.propertyName==="value"&&Eo(Aa)){var i=[];Vf(i,Aa,n,B(n)),je(m0,i)}}function v0(n,i,a){n==="focusin"?(Xf(),Ta=i,Aa=a,Ta.attachEvent("onpropertychange",Yf)):n==="focusout"&&Xf()}function _0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(Aa)}function x0(n,i){if(n==="click")return Eo(i)}function S0(n,i){if(n==="input"||n==="change")return Eo(i)}function y0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var wi=typeof Object.is=="function"?Object.is:y0;function Ca(n,i){if(wi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!wi(n[d],i[d]))return!1}return!0}function qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,i){var a=qf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Kf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var n=window,i=vt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=vt(n.document)}return i}function fc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function M0(n){var i=$f(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Kf(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!n.extend&&h>c&&(d=c,c=h,h=d),d=jf(a,h);var T=jf(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),h>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E0=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,hc=null,Ra=null,pc=!1;function Zf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||Ps==null||Ps!==vt(c)||(c=Ps,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ra&&Ca(Ra,c)||(Ra=c,c=Co(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},mc={},Jf={};f&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function To(n){if(mc[n])return mc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jf)return mc[n]=i[a];return n}var Qf=To("animationend"),eh=To("animationiteration"),th=To("animationstart"),nh=To("transitionend"),ih=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,i){ih.set(n,i),l(i,[n])}for(var gc=0;gc<rh.length;gc++){var vc=rh[gc],w0=vc.toLowerCase(),T0=vc[0].toUpperCase()+vc.slice(1);Tr(w0,"on"+T0)}Tr(Qf,"onAnimationEnd"),Tr(eh,"onAnimationIteration"),Tr(th,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(nh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function sh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Kr(c,i,void 0,n),n.currentTarget=null}function ah(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],W=O.instance,ve=O.currentTarget;if(O=O.listener,W!==h&&d.isPropagationStopped())break e;sh(d,O,ve),h=W}else for(T=0;T<c.length;T++){if(O=c[T],W=O.instance,ve=O.currentTarget,O=O.listener,W!==h&&d.isPropagationStopped())break e;sh(d,O,ve),h=W}}}if(Gt)throw n=Ln,Gt=!1,Ln=null,n}function Kt(n,i){var a=i[Tc];a===void 0&&(a=i[Tc]=new Set);var c=n+"__bubble";a.has(c)||(oh(i,n,2,!1),a.add(c))}function _c(n,i,a){var c=0;i&&(c|=4),oh(a,n,c,i)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Pa(n){if(!n[Ao]){n[Ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(A0.has(a)||_c(a,!1,n),_c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ao]||(i[Ao]=!0,_c("selectionchange",!1,i))}}function oh(n,i,a,c){switch(Pf(i)){case 1:var d=zg;break;case 4:d=Gg;break;default:d=tc}a=d.bind(null,i,a,n),d=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function xc(n,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;O!==null;){if(T=Qr(O),T===null)return;if(W=T.tag,W===5||W===6){c=h=T;continue e}O=O.parentNode}}c=c.return}je(function(){var ve=h,Ae=B(a),be=[];e:{var Te=ih.get(n);if(Te!==void 0){var Ke=rc,et=n;switch(n){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":Ke=n0;break;case"focusin":et="focus",Ke=oc;break;case"focusout":et="blur",Ke=oc;break;case"beforeblur":case"afterblur":Ke=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=s0;break;case Qf:case eh:case th:Ke=qg;break;case nh:Ke=o0;break;case"scroll":Ke=Vg;break;case"wheel":Ke=c0;break;case"copy":case"cut":case"paste":Ke=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=Uf}var nt=(i&4)!==0,cn=!nt&&n==="scroll",le=nt?Te!==null?Te+"Capture":null:Te;nt=[];for(var Z=ve,pe;Z!==null;){pe=Z;var Le=pe.stateNode;if(pe.tag===5&&Le!==null&&(pe=Le,le!==null&&(Le=At(Z,le),Le!=null&&nt.push(La(Z,Le,pe)))),cn)break;Z=Z.return}0<nt.length&&(Te=new Ke(Te,et,null,a,Ae),be.push({event:Te,listeners:nt}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Te&&a!==Me&&(et=a.relatedTarget||a.fromElement)&&(Qr(et)||et[tr]))break e;if((Ke||Te)&&(Te=Ae.window===Ae?Ae:(Te=Ae.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ke?(et=a.relatedTarget||a.toElement,Ke=ve,et=et?Qr(et):null,et!==null&&(cn=Mn(et),et!==cn||et.tag!==5&&et.tag!==6)&&(et=null)):(Ke=null,et=ve),Ke!==et)){if(nt=Df,Le="onMouseLeave",le="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Uf,Le="onPointerLeave",le="onPointerEnter",Z="pointer"),cn=Ke==null?Te:Is(Ke),pe=et==null?Te:Is(et),Te=new nt(Le,Z+"leave",Ke,a,Ae),Te.target=cn,Te.relatedTarget=pe,Le=null,Qr(Ae)===ve&&(nt=new nt(le,Z+"enter",et,a,Ae),nt.target=pe,nt.relatedTarget=cn,Le=nt),cn=Le,Ke&&et)t:{for(nt=Ke,le=et,Z=0,pe=nt;pe;pe=Ns(pe))Z++;for(pe=0,Le=le;Le;Le=Ns(Le))pe++;for(;0<Z-pe;)nt=Ns(nt),Z--;for(;0<pe-Z;)le=Ns(le),pe--;for(;Z--;){if(nt===le||le!==null&&nt===le.alternate)break t;nt=Ns(nt),le=Ns(le)}nt=null}else nt=null;Ke!==null&&lh(be,Te,Ke,nt,!1),et!==null&&cn!==null&&lh(be,cn,et,nt,!0)}}e:{if(Te=ve?Is(ve):window,Ke=Te.nodeName&&Te.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Te.type==="file")var it=g0;else if(Gf(Te))if(Hf)it=S0;else{it=_0;var ot=v0}else(Ke=Te.nodeName)&&Ke.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(it=x0);if(it&&(it=it(n,ve))){Vf(be,it,a,Ae);break e}ot&&ot(n,Te,ve),n==="focusout"&&(ot=Te._wrapperState)&&ot.controlled&&Te.type==="number"&&xt(Te,"number",Te.value)}switch(ot=ve?Is(ve):window,n){case"focusin":(Gf(ot)||ot.contentEditable==="true")&&(Ps=ot,hc=ve,Ra=null);break;case"focusout":Ra=hc=Ps=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Zf(be,a,Ae);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Zf(be,a,Ae)}var lt;if(cc)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else bs?Bf(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(Ff&&a.locale!=="ko"&&(bs||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&bs&&(lt=Lf()):(wr=Ae,ic="value"in wr?wr.value:wr.textContent,bs=!0)),ot=Co(ve,pt),0<ot.length&&(pt=new If(pt,n,null,a,Ae),be.push({event:pt,listeners:ot}),lt?pt.data=lt:(lt=zf(a),lt!==null&&(pt.data=lt)))),(lt=d0?f0(n,a):h0(n,a))&&(ve=Co(ve,"onBeforeInput"),0<ve.length&&(Ae=new If("onBeforeInput","beforeinput",null,a,Ae),be.push({event:Ae,listeners:ve}),Ae.data=lt))}ah(be,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Co(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=At(n,a),h!=null&&c.unshift(La(n,h,d)),h=At(n,i),h!=null&&c.push(La(n,h,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lh(n,i,a,c,d){for(var h=i._reactName,T=[];a!==null&&a!==c;){var O=a,W=O.alternate,ve=O.stateNode;if(W!==null&&W===c)break;O.tag===5&&ve!==null&&(O=ve,d?(W=At(a,h),W!=null&&T.unshift(La(a,W,O))):d||(W=At(a,h),W!=null&&T.push(La(a,W,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var C0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function ch(n){return(typeof n=="string"?n:""+n).replace(C0,`
`).replace(R0,"")}function Ro(n,i,a){if(i=ch(i),ch(n)!==i&&a)throw Error(t(425))}function bo(){}var Sc=null,yc=null;function Mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(n){return uh.resolve(null).then(n).catch(L0)}:Ec;function L0(n){setTimeout(function(){throw n})}function wc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ya(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ya(i)}function Ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function dh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ds,Na="__reactProps$"+Ds,tr="__reactContainer$"+Ds,Tc="__reactEvents$"+Ds,N0="__reactListeners$"+Ds,D0="__reactHandles$"+Ds;function Qr(n){var i=n[ki];if(i)return i;for(var a=n.parentNode;a;){if(i=a[tr]||a[ki]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=dh(n);n!==null;){if(a=n[ki])return a;n=dh(n)}return i}n=a,a=n.parentNode}return null}function Da(n){return n=n[ki]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Po(n){return n[Na]||null}var Ac=[],Us=-1;function Cr(n){return{current:n}}function $t(n){0>Us||(n.current=Ac[Us],Ac[Us]=null,Us--)}function qt(n,i){Us++,Ac[Us]=n.current,n.current=i}var Rr={},In=Cr(Rr),Yn=Cr(!1),es=Rr;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qn(n){return n=n.childContextTypes,n!=null}function Lo(){$t(Yn),$t(In)}function fh(n,i,a){if(In.current!==Rr)throw Error(t(168));qt(In,i),qt(Yn,a)}function hh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,de(n)||"Unknown",d));return ee({},a,c)}function No(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,es=In.current,qt(In,n),qt(Yn,Yn.current),!0}function ph(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=hh(n,i,es),c.__reactInternalMemoizedMergedChildContext=n,$t(Yn),$t(In),qt(In,n)):$t(Yn),qt(Yn,a)}var nr=null,Do=!1,Cc=!1;function mh(n){nr===null?nr=[n]:nr.push(n)}function I0(n){Do=!0,mh(n)}function br(){if(!Cc&&nr!==null){Cc=!0;var n=0,i=yt;try{var a=nr;for(yt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}nr=null,Do=!1}catch(d){throw nr!==null&&(nr=nr.slice(n+1)),Qi(jt,br),d}finally{yt=i,Cc=!1}}return null}var Os=[],ks=0,Io=null,Uo=0,di=[],fi=0,ts=null,ir=1,rr="";function ns(n,i){Os[ks++]=Uo,Os[ks++]=Io,Io=n,Uo=i}function gh(n,i,a){di[fi++]=ir,di[fi++]=rr,di[fi++]=ts,ts=n;var c=ir;n=rr;var d=32-Ue(c)-1;c&=~(1<<d),a+=1;var h=32-Ue(i)+d;if(30<h){var T=d-d%5;h=(c&(1<<T)-1).toString(32),c>>=T,d-=T,ir=1<<32-Ue(i)+d|a<<d|c,rr=h+n}else ir=1<<h|a<<d|c,rr=n}function Rc(n){n.return!==null&&(ns(n,1),gh(n,1,0))}function bc(n){for(;n===Io;)Io=Os[--ks],Os[ks]=null,Uo=Os[--ks],Os[ks]=null;for(;n===ts;)ts=di[--fi],di[fi]=null,rr=di[--fi],di[fi]=null,ir=di[--fi],di[fi]=null}var ti=null,ni=null,Qt=!1,Ti=null;function vh(n,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function _h(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ti=n,ni=Ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ti=n,ni=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ti=n,ni=null,!0):!1;default:return!1}}function Pc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(Qt){var i=ni;if(i){var a=i;if(!_h(n,i)){if(Pc(n))throw Error(t(418));i=Ar(a.nextSibling);var c=ti;i&&_h(n,i)?vh(c,a):(n.flags=n.flags&-4097|2,Qt=!1,ti=n)}}else{if(Pc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ti=n}}}function xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ti=n}function Fo(n){if(n!==ti)return!1;if(!Qt)return xh(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mc(n.type,n.memoizedProps)),i&&(i=ni)){if(Pc(n))throw Sh(),Error(t(418));for(;i;)vh(n,i),i=Ar(i.nextSibling)}if(xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ni=Ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ni=null}}else ni=ti?Ar(n.stateNode.nextSibling):null;return!0}function Sh(){for(var n=ni;n;)n=Ar(n.nextSibling)}function Bs(){ni=ti=null,Qt=!1}function Nc(n){Ti===null?Ti=[n]:Ti.push(n)}var U0=R.ReactCurrentBatchConfig;function Ia(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(T){var O=d.refs;T===null?delete O[h]:O[h]=T},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Oo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function yh(n){var i=n._init;return i(n._payload)}function Mh(n){function i(le,Z){if(n){var pe=le.deletions;pe===null?(le.deletions=[Z],le.flags|=16):pe.push(Z)}}function a(le,Z){if(!n)return null;for(;Z!==null;)i(le,Z),Z=Z.sibling;return null}function c(le,Z){for(le=new Map;Z!==null;)Z.key!==null?le.set(Z.key,Z):le.set(Z.index,Z),Z=Z.sibling;return le}function d(le,Z){return le=Or(le,Z),le.index=0,le.sibling=null,le}function h(le,Z,pe){return le.index=pe,n?(pe=le.alternate,pe!==null?(pe=pe.index,pe<Z?(le.flags|=2,Z):pe):(le.flags|=2,Z)):(le.flags|=1048576,Z)}function T(le){return n&&le.alternate===null&&(le.flags|=2),le}function O(le,Z,pe,Le){return Z===null||Z.tag!==6?(Z=Eu(pe,le.mode,Le),Z.return=le,Z):(Z=d(Z,pe),Z.return=le,Z)}function W(le,Z,pe,Le){var it=pe.type;return it===F?Ae(le,Z,pe.props.children,Le,pe.key):Z!==null&&(Z.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ge&&yh(it)===Z.type)?(Le=d(Z,pe.props),Le.ref=Ia(le,Z,pe),Le.return=le,Le):(Le=ol(pe.type,pe.key,pe.props,null,le.mode,Le),Le.ref=Ia(le,Z,pe),Le.return=le,Le)}function ve(le,Z,pe,Le){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==pe.containerInfo||Z.stateNode.implementation!==pe.implementation?(Z=wu(pe,le.mode,Le),Z.return=le,Z):(Z=d(Z,pe.children||[]),Z.return=le,Z)}function Ae(le,Z,pe,Le,it){return Z===null||Z.tag!==7?(Z=us(pe,le.mode,Le,it),Z.return=le,Z):(Z=d(Z,pe),Z.return=le,Z)}function be(le,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Eu(""+Z,le.mode,pe),Z.return=le,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:return pe=ol(Z.type,Z.key,Z.props,null,le.mode,pe),pe.ref=Ia(le,null,Z),pe.return=le,pe;case L:return Z=wu(Z,le.mode,pe),Z.return=le,Z;case ge:var Le=Z._init;return be(le,Le(Z._payload),pe)}if(It(Z)||Q(Z))return Z=us(Z,le.mode,pe,null),Z.return=le,Z;Oo(le,Z)}return null}function Te(le,Z,pe,Le){var it=Z!==null?Z.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return it!==null?null:O(le,Z,""+pe,Le);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case N:return pe.key===it?W(le,Z,pe,Le):null;case L:return pe.key===it?ve(le,Z,pe,Le):null;case ge:return it=pe._init,Te(le,Z,it(pe._payload),Le)}if(It(pe)||Q(pe))return it!==null?null:Ae(le,Z,pe,Le,null);Oo(le,pe)}return null}function Ke(le,Z,pe,Le,it){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return le=le.get(pe)||null,O(Z,le,""+Le,it);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case N:return le=le.get(Le.key===null?pe:Le.key)||null,W(Z,le,Le,it);case L:return le=le.get(Le.key===null?pe:Le.key)||null,ve(Z,le,Le,it);case ge:var ot=Le._init;return Ke(le,Z,pe,ot(Le._payload),it)}if(It(Le)||Q(Le))return le=le.get(pe)||null,Ae(Z,le,Le,it,null);Oo(Z,Le)}return null}function et(le,Z,pe,Le){for(var it=null,ot=null,lt=Z,pt=Z=0,Tn=null;lt!==null&&pt<pe.length;pt++){lt.index>pt?(Tn=lt,lt=null):Tn=lt.sibling;var kt=Te(le,lt,pe[pt],Le);if(kt===null){lt===null&&(lt=Tn);break}n&&lt&&kt.alternate===null&&i(le,lt),Z=h(kt,Z,pt),ot===null?it=kt:ot.sibling=kt,ot=kt,lt=Tn}if(pt===pe.length)return a(le,lt),Qt&&ns(le,pt),it;if(lt===null){for(;pt<pe.length;pt++)lt=be(le,pe[pt],Le),lt!==null&&(Z=h(lt,Z,pt),ot===null?it=lt:ot.sibling=lt,ot=lt);return Qt&&ns(le,pt),it}for(lt=c(le,lt);pt<pe.length;pt++)Tn=Ke(lt,le,pt,pe[pt],Le),Tn!==null&&(n&&Tn.alternate!==null&&lt.delete(Tn.key===null?pt:Tn.key),Z=h(Tn,Z,pt),ot===null?it=Tn:ot.sibling=Tn,ot=Tn);return n&&lt.forEach(function(kr){return i(le,kr)}),Qt&&ns(le,pt),it}function nt(le,Z,pe,Le){var it=Q(pe);if(typeof it!="function")throw Error(t(150));if(pe=it.call(pe),pe==null)throw Error(t(151));for(var ot=it=null,lt=Z,pt=Z=0,Tn=null,kt=pe.next();lt!==null&&!kt.done;pt++,kt=pe.next()){lt.index>pt?(Tn=lt,lt=null):Tn=lt.sibling;var kr=Te(le,lt,kt.value,Le);if(kr===null){lt===null&&(lt=Tn);break}n&&lt&&kr.alternate===null&&i(le,lt),Z=h(kr,Z,pt),ot===null?it=kr:ot.sibling=kr,ot=kr,lt=Tn}if(kt.done)return a(le,lt),Qt&&ns(le,pt),it;if(lt===null){for(;!kt.done;pt++,kt=pe.next())kt=be(le,kt.value,Le),kt!==null&&(Z=h(kt,Z,pt),ot===null?it=kt:ot.sibling=kt,ot=kt);return Qt&&ns(le,pt),it}for(lt=c(le,lt);!kt.done;pt++,kt=pe.next())kt=Ke(lt,le,pt,kt.value,Le),kt!==null&&(n&&kt.alternate!==null&&lt.delete(kt.key===null?pt:kt.key),Z=h(kt,Z,pt),ot===null?it=kt:ot.sibling=kt,ot=kt);return n&&lt.forEach(function(pv){return i(le,pv)}),Qt&&ns(le,pt),it}function cn(le,Z,pe,Le){if(typeof pe=="object"&&pe!==null&&pe.type===F&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case N:e:{for(var it=pe.key,ot=Z;ot!==null;){if(ot.key===it){if(it=pe.type,it===F){if(ot.tag===7){a(le,ot.sibling),Z=d(ot,pe.props.children),Z.return=le,le=Z;break e}}else if(ot.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ge&&yh(it)===ot.type){a(le,ot.sibling),Z=d(ot,pe.props),Z.ref=Ia(le,ot,pe),Z.return=le,le=Z;break e}a(le,ot);break}else i(le,ot);ot=ot.sibling}pe.type===F?(Z=us(pe.props.children,le.mode,Le,pe.key),Z.return=le,le=Z):(Le=ol(pe.type,pe.key,pe.props,null,le.mode,Le),Le.ref=Ia(le,Z,pe),Le.return=le,le=Le)}return T(le);case L:e:{for(ot=pe.key;Z!==null;){if(Z.key===ot)if(Z.tag===4&&Z.stateNode.containerInfo===pe.containerInfo&&Z.stateNode.implementation===pe.implementation){a(le,Z.sibling),Z=d(Z,pe.children||[]),Z.return=le,le=Z;break e}else{a(le,Z);break}else i(le,Z);Z=Z.sibling}Z=wu(pe,le.mode,Le),Z.return=le,le=Z}return T(le);case ge:return ot=pe._init,cn(le,Z,ot(pe._payload),Le)}if(It(pe))return et(le,Z,pe,Le);if(Q(pe))return nt(le,Z,pe,Le);Oo(le,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,Z!==null&&Z.tag===6?(a(le,Z.sibling),Z=d(Z,pe),Z.return=le,le=Z):(a(le,Z),Z=Eu(pe,le.mode,Le),Z.return=le,le=Z),T(le)):a(le,Z)}return cn}var zs=Mh(!0),Eh=Mh(!1),ko=Cr(null),Bo=null,Gs=null,Dc=null;function Ic(){Dc=Gs=Bo=null}function Uc(n){var i=ko.current;$t(ko),n._currentValue=i}function Fc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Vs(n,i){Bo=n,Dc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function hi(n){var i=n._currentValue;if(Dc!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(Bo===null)throw Error(t(308));Gs=n,Bo.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var is=null;function Oc(n){is===null?is=[n]:is.push(n)}function wh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Oc(i)):(a.next=d.next,d.next=a),i.interleaved=a,sr(n,c)}function sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Pr=!1;function kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ut&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,sr(n,a)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,sr(n,a)}function zo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dn(n,a)}}function Ah(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Go(n,i,a,c){var d=n.updateQueue;Pr=!1;var h=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var W=O,ve=W.next;W.next=null,T===null?h=ve:T.next=ve,T=W;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,O=Ae.lastBaseUpdate,O!==T&&(O===null?Ae.firstBaseUpdate=ve:O.next=ve,Ae.lastBaseUpdate=W))}if(h!==null){var be=d.baseState;T=0,Ae=ve=W=null,O=h;do{var Te=O.lane,Ke=O.eventTime;if((c&Te)===Te){Ae!==null&&(Ae=Ae.next={eventTime:Ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var et=n,nt=O;switch(Te=i,Ke=a,nt.tag){case 1:if(et=nt.payload,typeof et=="function"){be=et.call(Ke,be,Te);break e}be=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=nt.payload,Te=typeof et=="function"?et.call(Ke,be,Te):et,Te==null)break e;be=ee({},be,Te);break e;case 2:Pr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Te=d.effects,Te===null?d.effects=[O]:Te.push(O))}else Ke={eventTime:Ke,lane:Te,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Ae===null?(ve=Ae=Ke,W=be):Ae=Ae.next=Ke,T|=Te;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;Te=O,O=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(Ae===null&&(W=be),d.baseState=W,d.firstBaseUpdate=ve,d.lastBaseUpdate=Ae,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);as|=T,n.lanes=T,n.memoizedState=be}}function Ch(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ua={},Bi=Cr(Ua),Fa=Cr(Ua),Oa=Cr(Ua);function rs(n){if(n===Ua)throw Error(t(174));return n}function Bc(n,i){switch(qt(Oa,i),qt(Fa,n),qt(Bi,Ua),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=y(i,n)}$t(Bi),qt(Bi,i)}function Hs(){$t(Bi),$t(Fa),$t(Oa)}function Rh(n){rs(Oa.current);var i=rs(Bi.current),a=y(i,n.type);i!==a&&(qt(Fa,n),qt(Bi,a))}function zc(n){Fa.current===n&&($t(Bi),$t(Fa))}var en=Cr(0);function Vo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gc=[];function Vc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var Ho=R.ReactCurrentDispatcher,Hc=R.ReactCurrentBatchConfig,ss=0,tn=null,vn=null,En=null,Wo=!1,ka=!1,Ba=0,F0=0;function Un(){throw Error(t(321))}function Wc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!wi(n[a],i[a]))return!1;return!0}function Xc(n,i,a,c,d,h){if(ss=h,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?z0:G0,n=a(c,d),ka){h=0;do{if(ka=!1,Ba=0,25<=h)throw Error(t(301));h+=1,En=vn=null,i.updateQueue=null,Ho.current=V0,n=a(c,d)}while(ka)}if(Ho.current=qo,i=vn!==null&&vn.next!==null,ss=0,En=vn=tn=null,Wo=!1,i)throw Error(t(300));return n}function Yc(){var n=Ba!==0;return Ba=0,n}function zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?tn.memoizedState=En=n:En=En.next=n,En}function pi(){if(vn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=En===null?tn.memoizedState:En.next;if(i!==null)En=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},En===null?tn.memoizedState=En=n:En=En.next=n}return En}function za(n,i){return typeof i=="function"?i(n):i}function qc(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vn,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var T=d.next;d.next=h.next,h.next=T}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var O=T=null,W=null,ve=h;do{var Ae=ve.lane;if((ss&Ae)===Ae)W!==null&&(W=W.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var be={lane:Ae,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};W===null?(O=W=be,T=c):W=W.next=be,tn.lanes|=Ae,as|=Ae}ve=ve.next}while(ve!==null&&ve!==h);W===null?T=c:W.next=O,wi(c,i.memoizedState)||(jn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do h=d.lane,tn.lanes|=h,as|=h,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function jc(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do h=n(h,T.action),T=T.next;while(T!==d);wi(h,i.memoizedState)||(jn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function bh(){}function Ph(n,i){var a=tn,c=pi(),d=i(),h=!wi(c.memoizedState,d);if(h&&(c.memoizedState=d,jn=!0),c=c.queue,Kc(Dh.bind(null,a,c,n),[n]),c.getSnapshot!==i||h||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,Ga(9,Nh.bind(null,a,c,d,i),void 0,null),wn===null)throw Error(t(349));(ss&30)!==0||Lh(a,i,d)}return d}function Lh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Nh(n,i,a,c){i.value=a,i.getSnapshot=c,Ih(i)&&Uh(n)}function Dh(n,i,a){return a(function(){Ih(i)&&Uh(n)})}function Ih(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!wi(n,a)}catch{return!0}}function Uh(n){var i=sr(n,1);i!==null&&bi(i,n,1,-1)}function Fh(n){var i=zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:n},i.queue=n,n=n.dispatch=B0.bind(null,tn,n),[i.memoizedState,n]}function Ga(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Oh(){return pi().memoizedState}function Xo(n,i,a,c){var d=zi();tn.flags|=n,d.memoizedState=Ga(1|i,a,void 0,c===void 0?null:c)}function Yo(n,i,a,c){var d=pi();c=c===void 0?null:c;var h=void 0;if(vn!==null){var T=vn.memoizedState;if(h=T.destroy,c!==null&&Wc(c,T.deps)){d.memoizedState=Ga(i,a,h,c);return}}tn.flags|=n,d.memoizedState=Ga(1|i,a,h,c)}function kh(n,i){return Xo(8390656,8,n,i)}function Kc(n,i){return Yo(2048,8,n,i)}function Bh(n,i){return Yo(4,2,n,i)}function zh(n,i){return Yo(4,4,n,i)}function Gh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Vh(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,Gh.bind(null,i,n),a)}function $c(){}function Hh(n,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Wh(n,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Xh(n,i,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=a):(wi(a,i)||(a=gn(),tn.lanes|=a,as|=a,n.baseState=!0),i)}function O0(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var c=Hc.transition;Hc.transition={};try{n(!1),i()}finally{yt=a,Hc.transition=c}}function Yh(){return pi().memoizedState}function k0(n,i,a){var c=Ur(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qh(n))jh(i,a);else if(a=wh(n,i,a,c),a!==null){var d=Wn();bi(a,n,c,d),Kh(a,i,c)}}function B0(n,i,a){var c=Ur(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qh(n))jh(i,d);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var T=i.lastRenderedState,O=h(T,a);if(d.hasEagerState=!0,d.eagerState=O,wi(O,T)){var W=i.interleaved;W===null?(d.next=d,Oc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=wh(n,i,d,c),a!==null&&(d=Wn(),bi(a,n,c,d),Kh(a,i,c))}}function qh(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function jh(n,i){ka=Wo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Kh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dn(n,a)}}var qo={readContext:hi,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},z0={readContext:hi,useCallback:function(n,i){return zi().memoizedState=[n,i===void 0?null:i],n},useContext:hi,useEffect:kh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Xo(4194308,4,Gh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Xo(4,2,n,i)},useMemo:function(n,i){var a=zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=zi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=k0.bind(null,tn,n),[c.memoizedState,n]},useRef:function(n){var i=zi();return n={current:n},i.memoizedState=n},useState:Fh,useDebugValue:$c,useDeferredValue:function(n){return zi().memoizedState=n},useTransition:function(){var n=Fh(!1),i=n[0];return n=O0.bind(null,n[1]),zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tn,d=zi();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wn===null)throw Error(t(349));(ss&30)!==0||Lh(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,kh(Dh.bind(null,c,h,n),[n]),c.flags|=2048,Ga(9,Nh.bind(null,c,h,a,i),void 0,null),a},useId:function(){var n=zi(),i=wn.identifierPrefix;if(Qt){var a=rr,c=ir;a=(c&~(1<<32-Ue(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=F0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},G0={readContext:hi,useCallback:Hh,useContext:hi,useEffect:Kc,useImperativeHandle:Vh,useInsertionEffect:Bh,useLayoutEffect:zh,useMemo:Wh,useReducer:qc,useRef:Oh,useState:function(){return qc(za)},useDebugValue:$c,useDeferredValue:function(n){var i=pi();return Xh(i,vn.memoizedState,n)},useTransition:function(){var n=qc(za)[0],i=pi().memoizedState;return[n,i]},useMutableSource:bh,useSyncExternalStore:Ph,useId:Yh,unstable_isNewReconciler:!1},V0={readContext:hi,useCallback:Hh,useContext:hi,useEffect:Kc,useImperativeHandle:Vh,useInsertionEffect:Bh,useLayoutEffect:zh,useMemo:Wh,useReducer:jc,useRef:Oh,useState:function(){return jc(za)},useDebugValue:$c,useDeferredValue:function(n){var i=pi();return vn===null?i.memoizedState=n:Xh(i,vn.memoizedState,n)},useTransition:function(){var n=jc(za)[0],i=pi().memoizedState;return[n,i]},useMutableSource:bh,useSyncExternalStore:Ph,useId:Yh,unstable_isNewReconciler:!1};function Ai(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Zc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var jo={isMounted:function(n){return(n=n._reactInternals)?Mn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wn(),d=Ur(n),h=ar(c,d);h.payload=i,a!=null&&(h.callback=a),i=Lr(n,h,d),i!==null&&(bi(i,n,d,c),zo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wn(),d=Ur(n),h=ar(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Lr(n,h,d),i!==null&&(bi(i,n,d,c),zo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wn(),c=Ur(n),d=ar(a,c);d.tag=2,i!=null&&(d.callback=i),i=Lr(n,d,c),i!==null&&(bi(i,n,c,a),zo(i,n,c))}};function $h(n,i,a,c,d,h,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,h,T):i.prototype&&i.prototype.isPureReactComponent?!Ca(a,c)||!Ca(d,h):!0}function Zh(n,i,a){var c=!1,d=Rr,h=i.contextType;return typeof h=="object"&&h!==null?h=hi(h):(d=qn(i)?es:In.current,c=i.contextTypes,h=(c=c!=null)?Fs(n,d):Rr),i=new i(a,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=h),i}function Jh(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&jo.enqueueReplaceState(i,i.state,null)}function Jc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},kc(n);var h=i.contextType;typeof h=="object"&&h!==null?d.context=hi(h):(h=qn(i)?es:In.current,d.context=Fs(n,h)),d.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(n,i,h,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&jo.enqueueReplaceState(d,d.state,null),Go(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:d,digest:null}}function Qc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function eu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function Qh(n,i,a){a=ar(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){tl||(tl=!0,mu=c),eu(n,i)},a}function ep(n,i,a){a=ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){eu(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){eu(n,i),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function tp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new H0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=iv.bind(null,n,i,a),i.then(n,n))}function np(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ip(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ar(-1,1),i.tag=2,Lr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var W0=R.ReactCurrentOwner,jn=!1;function Hn(n,i,a,c){i.child=n===null?Eh(i,null,a,c):zs(i,n.child,a,c)}function rp(n,i,a,c,d){a=a.render;var h=i.ref;return Vs(i,d),c=Xc(n,i,a,c,h,d),a=Yc(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,or(n,i,d)):(Qt&&a&&Rc(i),i.flags|=1,Hn(n,i,c,d),i.child)}function sp(n,i,a,c,d){if(n===null){var h=a.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,ap(n,i,h,c,d)):(n=ol(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&d)===0){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(T,c)&&n.ref===i.ref)return or(n,i,d)}return i.flags|=1,n=Or(h,c),n.ref=i.ref,n.return=i,i.child=n}function ap(n,i,a,c,d){if(n!==null){var h=n.memoizedProps;if(Ca(h,c)&&n.ref===i.ref)if(jn=!1,i.pendingProps=c=h,(n.lanes&d)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,or(n,i,d)}return tu(n,i,a,c,d)}function op(n,i,a){var c=i.pendingProps,d=c.children,h=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(Ys,ii),ii|=a;else{if((a&1073741824)===0)return n=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(Ys,ii),ii|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,qt(Ys,ii),ii|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,qt(Ys,ii),ii|=c;return Hn(n,i,d,a),i.child}function lp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tu(n,i,a,c,d){var h=qn(a)?es:In.current;return h=Fs(i,h),Vs(i,d),a=Xc(n,i,a,c,h,d),c=Yc(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,or(n,i,d)):(Qt&&c&&Rc(i),i.flags|=1,Hn(n,i,a,d),i.child)}function cp(n,i,a,c,d){if(qn(a)){var h=!0;No(i)}else h=!1;if(Vs(i,d),i.stateNode===null)$o(n,i),Zh(i,a,c),Jc(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var W=T.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=hi(ve):(ve=qn(a)?es:In.current,ve=Fs(i,ve));var Ae=a.getDerivedStateFromProps,be=typeof Ae=="function"||typeof T.getSnapshotBeforeUpdate=="function";be||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||W!==ve)&&Jh(i,T,c,ve),Pr=!1;var Te=i.memoizedState;T.state=Te,Go(i,c,T,d),W=i.memoizedState,O!==c||Te!==W||Yn.current||Pr?(typeof Ae=="function"&&(Zc(i,a,Ae,c),W=i.memoizedState),(O=Pr||$h(i,a,O,c,Te,W,ve))?(be||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=ve,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Th(n,i),O=i.memoizedProps,ve=i.type===i.elementType?O:Ai(i.type,O),T.props=ve,be=i.pendingProps,Te=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=hi(W):(W=qn(a)?es:In.current,W=Fs(i,W));var Ke=a.getDerivedStateFromProps;(Ae=typeof Ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==be||Te!==W)&&Jh(i,T,c,W),Pr=!1,Te=i.memoizedState,T.state=Te,Go(i,c,T,d);var et=i.memoizedState;O!==be||Te!==et||Yn.current||Pr?(typeof Ke=="function"&&(Zc(i,a,Ke,c),et=i.memoizedState),(ve=Pr||$h(i,a,ve,c,Te,et,W)||!1)?(Ae||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,et,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,et,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=et),T.props=c,T.state=et,T.context=W,c=ve):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),c=!1)}return nu(n,i,a,c,h,d)}function nu(n,i,a,c,d,h){lp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&ph(i,a,!1),or(n,i,h);c=i.stateNode,W0.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=zs(i,n.child,null,h),i.child=zs(i,null,O,h)):Hn(n,i,O,h),i.memoizedState=c.state,d&&ph(i,a,!0),i.child}function up(n){var i=n.stateNode;i.pendingContext?fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&fh(n,i.context,!1),Bc(n,i.containerInfo)}function dp(n,i,a,c,d){return Bs(),Nc(d),i.flags|=256,Hn(n,i,a,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(n){return{baseLanes:n,cachePool:null,transitions:null}}function fp(n,i,a){var c=i.pendingProps,d=en.current,h=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qt(en,d&1),n===null)return Lc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,h?(c=i.mode,h=i.child,T={mode:"hidden",children:T},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=T):h=ll(T,c,0,null),n=us(n,c,a,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=ru(a),i.memoizedState=iu,n):su(i,T));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return X0(n,i,T,c,O,d,a);if(h){h=c.fallback,T=i.mode,d=n.child,O=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Or(d,W),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?h=Or(O,h):(h=us(h,T,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,T=n.child.memoizedState,T=T===null?ru(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},h.memoizedState=T,h.childLanes=n.childLanes&~a,i.memoizedState=iu,c}return h=n.child,n=h.sibling,c=Or(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function su(n,i){return i=ll({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ko(n,i,a,c){return c!==null&&Nc(c),zs(i,n.child,null,a),n=su(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function X0(n,i,a,c,d,h,T){if(a)return i.flags&256?(i.flags&=-257,c=Qc(Error(t(422))),Ko(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=ll({mode:"visible",children:c.children},d,0,null),h=us(h,d,T,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&zs(i,n.child,null,T),i.child.memoizedState=ru(T),i.memoizedState=iu,h);if((i.mode&1)===0)return Ko(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,h=Error(t(419)),c=Qc(h,c,void 0),Ko(n,i,T,c)}if(O=(T&n.childLanes)!==0,jn||O){if(c=wn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,sr(n,d),bi(c,n,d,-1))}return yu(),c=Qc(Error(t(421))),Ko(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=rv.bind(null,n),d._reactRetry=i,null):(n=h.treeContext,ni=Ar(d.nextSibling),ti=i,Qt=!0,Ti=null,n!==null&&(di[fi++]=ir,di[fi++]=rr,di[fi++]=ts,ir=n.id,rr=n.overflow,ts=i),i=su(i,c.children),i.flags|=4096,i)}function hp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Fc(n.return,i,a)}function au(n,i,a,c,d){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function pp(n,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Hn(n,i,c.children,a),c=en.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hp(n,a,i);else if(n.tag===19)hp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qt(en,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Vo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),au(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Vo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}au(i,!0,a,null,h);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $o(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function or(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Or(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Or(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Y0(n,i,a){switch(i.tag){case 3:up(i),Bs();break;case 5:Rh(i);break;case 1:qn(i.type)&&No(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qt(ko,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?fp(n,i,a):(qt(en,en.current&1),n=or(n,i,a),n!==null?n.sibling:null);qt(en,en.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return pp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qt(en,en.current),c)break;return null;case 22:case 23:return i.lanes=0,op(n,i,a)}return or(n,i,a)}var mp,ou,gp,vp;mp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ou=function(){},gp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,rs(Bi.current);var h=null;switch(a){case"input":d=Ge(n,d),c=Ge(n,c),h=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),h=[];break;case"textarea":d=Ft(n,d),c=Ft(n,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bo)}ye(a,c);var T;a=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var O=d[ve];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?h||(h=[]):(h=h||[]).push(ve,null));for(ve in c){var W=c[ve];if(O=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&W!==O&&(W!=null||O!=null))if(ve==="style")if(O){for(T in O)!O.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&O[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(h||(h=[]),h.push(ve,a)),a=W;else ve==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,O=O?O.__html:void 0,W!=null&&O!==W&&(h=h||[]).push(ve,W)):ve==="children"?typeof W!="string"&&typeof W!="number"||(h=h||[]).push(ve,""+W):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(W!=null&&ve==="onScroll"&&Kt("scroll",n),h||O===W||(h=[])):(h=h||[]).push(ve,W))}a&&(h=h||[]).push("style",a);var ve=h;(i.updateQueue=ve)&&(i.flags|=4)}},vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Va(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function q0(n,i,a){var c=i.pendingProps;switch(bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(i),null;case 1:return qn(i.type)&&Lo(),Fn(i),null;case 3:return c=i.stateNode,Hs(),$t(Yn),$t(In),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ti!==null&&(_u(Ti),Ti=null))),ou(n,i),Fn(i),null;case 5:zc(i);var d=rs(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)gp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Fn(i),null}if(n=rs(Bi.current),Fo(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[ki]=i,c[Na]=h,n=(i.mode&1)!==0,a){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(d=0;d<ba.length;d++)Kt(ba[d],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":ut(c,h),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Kt("invalid",c);break;case"textarea":j(c,h),Kt("invalid",c)}ye(a,h),d=null;for(var T in h)if(h.hasOwnProperty(T)){var O=h[T];T==="children"?typeof O=="string"?c.textContent!==O&&(h.suppressHydrationWarning!==!0&&Ro(c.textContent,O,n),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(h.suppressHydrationWarning!==!0&&Ro(c.textContent,O,n),d=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Kt("scroll",c)}switch(a){case"input":Oe(c),dt(c,h,!0);break;case"textarea":Oe(c),wt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=bo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[ki]=i,n[Na]=c,mp(n,i,!1,!1),i.stateNode=n;e:{switch(T=oe(a,c),a){case"dialog":Kt("cancel",n),Kt("close",n),d=c;break;case"iframe":case"object":case"embed":Kt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ba.length;d++)Kt(ba[d],n);d=c;break;case"source":Kt("error",n),d=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),d=c;break;case"details":Kt("toggle",n),d=c;break;case"input":ut(n,c),d=Ge(n,c),Kt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":j(n,c),d=Ft(n,c),Kt("invalid",n);break;default:d=c}ye(a,d),O=d;for(h in O)if(O.hasOwnProperty(h)){var W=O[h];h==="style"?C(n,W):h==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ue(n,W)):h==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&me(n,W):typeof W=="number"&&me(n,""+W):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?W!=null&&h==="onScroll"&&Kt("scroll",n):W!=null&&V(n,h,W,T))}switch(a){case"input":Oe(n),dt(n,c,!1);break;case"textarea":Oe(n),wt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+K(c.value));break;case"select":n.multiple=!!c.multiple,h=c.value,h!=null?rt(n,!!c.multiple,h,!1):c.defaultValue!=null&&rt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Fn(i),null;case 6:if(n&&i.stateNode!=null)vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(Oa.current),rs(Bi.current),Fo(i)){if(c=i.stateNode,a=i.memoizedProps,c[ki]=i,(h=c.nodeValue!==a)&&(n=ti,n!==null))switch(n.tag){case 3:Ro(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ro(c.nodeValue,a,(n.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ki]=i,i.stateNode=c}return Fn(i),null;case 13:if($t(en),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ni!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Sh(),Bs(),i.flags|=98560,h=!1;else if(h=Fo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[ki]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Fn(i),h=!1}else Ti!==null&&(_u(Ti),Ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?_n===0&&(_n=3):yu())),i.updateQueue!==null&&(i.flags|=4),Fn(i),null);case 4:return Hs(),ou(n,i),n===null&&Pa(i.stateNode.containerInfo),Fn(i),null;case 10:return Uc(i.type._context),Fn(i),null;case 17:return qn(i.type)&&Lo(),Fn(i),null;case 19:if($t(en),h=i.memoizedState,h===null)return Fn(i),null;if(c=(i.flags&128)!==0,T=h.rendering,T===null)if(c)Va(h,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Vo(n),T!==null){for(i.flags|=128,Va(h,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,n=c,h.flags&=14680066,T=h.alternate,T===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=T.childLanes,h.lanes=T.lanes,h.child=T.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=T.memoizedProps,h.memoizedState=T.memoizedState,h.updateQueue=T.updateQueue,h.type=T.type,n=T.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qt(en,en.current&1|2),i.child}n=n.sibling}h.tail!==null&&ft()>qs&&(i.flags|=128,c=!0,Va(h,!1),i.lanes=4194304)}else{if(!c)if(n=Vo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Va(h,!0),h.tail===null&&h.tailMode==="hidden"&&!T.alternate&&!Qt)return Fn(i),null}else 2*ft()-h.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,Va(h,!1),i.lanes=4194304);h.isBackwards?(T.sibling=i.child,i.child=T):(a=h.last,a!==null?a.sibling=T:i.child=T,h.last=T)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ft(),i.sibling=null,a=en.current,qt(en,c?a&1|2:a&1),i):(Fn(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ii&1073741824)!==0&&(Fn(i),i.subtreeFlags&6&&(i.flags|=8192)):Fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function j0(n,i){switch(bc(i),i.tag){case 1:return qn(i.type)&&Lo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Hs(),$t(Yn),$t(In),Vc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return zc(i),null;case 13:if($t(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(en),null;case 4:return Hs(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var Zo=!1,On=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){sn(n,i,c)}else a.current=null}function lu(n,i,a){try{a()}catch(c){sn(n,i,c)}}var _p=!1;function $0(n,i){if(Sc=vo,n=$f(),fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var T=0,O=-1,W=-1,ve=0,Ae=0,be=n,Te=null;t:for(;;){for(var Ke;be!==a||d!==0&&be.nodeType!==3||(O=T+d),be!==h||c!==0&&be.nodeType!==3||(W=T+c),be.nodeType===3&&(T+=be.nodeValue.length),(Ke=be.firstChild)!==null;)Te=be,be=Ke;for(;;){if(be===n)break t;if(Te===a&&++ve===d&&(O=T),Te===h&&++Ae===c&&(W=T),(Ke=be.nextSibling)!==null)break;be=Te,Te=be.parentNode}be=Ke}a=O===-1||W===-1?null:{start:O,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(yc={focusedElem:n,selectionRange:a},vo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var et=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var nt=et.memoizedProps,cn=et.memoizedState,le=i.stateNode,Z=le.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Ai(i.type,nt),cn);le.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){sn(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return et=_p,_p=!1,et}function Ha(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,a,h)}d=d.next}while(d!==c)}}function Jo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function cu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function xp(n){var i=n.alternate;i!==null&&(n.alternate=null,xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ki],delete i[Na],delete i[Tc],delete i[N0],delete i[D0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sp(n){return n.tag===5||n.tag===3||n.tag===4}function yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(n=n.child,n!==null))for(uu(n,i,a),n=n.sibling;n!==null;)uu(n,i,a),n=n.sibling}function du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(du(n,i,a),n=n.sibling;n!==null;)du(n,i,a),n=n.sibling}var Rn=null,Ci=!1;function Nr(n,i,a){for(a=a.child;a!==null;)Mp(n,i,a),a=a.sibling}function Mp(n,i,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 5:On||Xs(a,i);case 6:var c=Rn,d=Ci;Rn=null,Nr(n,i,a),Rn=c,Ci=d,Rn!==null&&(Ci?(n=Rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rn.removeChild(a.stateNode));break;case 18:Rn!==null&&(Ci?(n=Rn,a=a.stateNode,n.nodeType===8?wc(n.parentNode,a):n.nodeType===1&&wc(n,a),ya(n)):wc(Rn,a.stateNode));break;case 4:c=Rn,d=Ci,Rn=a.stateNode.containerInfo,Ci=!0,Nr(n,i,a),Rn=c,Ci=d;break;case 0:case 11:case 14:case 15:if(!On&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,T=h.destroy;h=h.tag,T!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(a,i,T),d=d.next}while(d!==c)}Nr(n,i,a);break;case 1:if(!On&&(Xs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){sn(a,i,O)}Nr(n,i,a);break;case 21:Nr(n,i,a);break;case 22:a.mode&1?(On=(c=On)||a.memoizedState!==null,Nr(n,i,a),On=c):Nr(n,i,a);break;default:Nr(n,i,a)}}function Ep(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new K0),i.forEach(function(c){var d=sv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ri(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:Rn=O.stateNode,Ci=!1;break e;case 3:Rn=O.stateNode.containerInfo,Ci=!0;break e;case 4:Rn=O.stateNode.containerInfo,Ci=!0;break e}O=O.return}if(Rn===null)throw Error(t(160));Mp(h,T,d),Rn=null,Ci=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(ve){sn(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wp(i,n),i=i.sibling}function wp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(i,n),Gi(n),c&4){try{Ha(3,n,n.return),Jo(3,n)}catch(nt){sn(n,n.return,nt)}try{Ha(5,n,n.return)}catch(nt){sn(n,n.return,nt)}}break;case 1:Ri(i,n),Gi(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Ri(i,n),Gi(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{me(d,"")}catch(nt){sn(n,n.return,nt)}}if(c&4&&(d=n.stateNode,d!=null)){var h=n.memoizedProps,T=a!==null?a.memoizedProps:h,O=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{O==="input"&&h.type==="radio"&&h.name!=null&&st(d,h),oe(O,T);var ve=oe(O,h);for(T=0;T<W.length;T+=2){var Ae=W[T],be=W[T+1];Ae==="style"?C(d,be):Ae==="dangerouslySetInnerHTML"?ue(d,be):Ae==="children"?me(d,be):V(d,Ae,be,ve)}switch(O){case"input":ke(d,h);break;case"textarea":Xt(d,h);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ke=h.value;Ke!=null?rt(d,!!h.multiple,Ke,!1):Te!==!!h.multiple&&(h.defaultValue!=null?rt(d,!!h.multiple,h.defaultValue,!0):rt(d,!!h.multiple,h.multiple?[]:"",!1))}d[Na]=h}catch(nt){sn(n,n.return,nt)}}break;case 6:if(Ri(i,n),Gi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,h=n.memoizedProps;try{d.nodeValue=h}catch(nt){sn(n,n.return,nt)}}break;case 3:if(Ri(i,n),Gi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ya(i.containerInfo)}catch(nt){sn(n,n.return,nt)}break;case 4:Ri(i,n),Gi(n);break;case 13:Ri(i,n),Gi(n),d=n.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=ft())),c&4&&Ep(n);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,n.mode&1?(On=(ve=On)||Ae,Ri(i,n),On=ve):Ri(i,n),Gi(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Ae&&(n.mode&1)!==0)for(Qe=n,Ae=n.child;Ae!==null;){for(be=Qe=Ae;Qe!==null;){switch(Te=Qe,Ke=Te.child,Te.tag){case 0:case 11:case 14:case 15:Ha(4,Te,Te.return);break;case 1:Xs(Te,Te.return);var et=Te.stateNode;if(typeof et.componentWillUnmount=="function"){c=Te,a=Te.return;try{i=c,et.props=i.memoizedProps,et.state=i.memoizedState,et.componentWillUnmount()}catch(nt){sn(c,a,nt)}}break;case 5:Xs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Cp(be);continue}}Ke!==null?(Ke.return=Te,Qe=Ke):Cp(be)}Ae=Ae.sibling}e:for(Ae=null,be=n;;){if(be.tag===5){if(Ae===null){Ae=be;try{d=be.stateNode,ve?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(O=be.stateNode,W=be.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,O.style.display=xe("display",T))}catch(nt){sn(n,n.return,nt)}}}else if(be.tag===6){if(Ae===null)try{be.stateNode.nodeValue=ve?"":be.memoizedProps}catch(nt){sn(n,n.return,nt)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;Ae===be&&(Ae=null),be=be.return}Ae===be&&(Ae=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Ri(i,n),Gi(n),c&4&&Ep(n);break;case 21:break;default:Ri(i,n),Gi(n)}}function Gi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Sp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(me(d,""),c.flags&=-33);var h=yp(n);du(n,h,d);break;case 3:case 4:var T=c.stateNode.containerInfo,O=yp(n);uu(n,O,T);break;default:throw Error(t(161))}}catch(W){sn(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Z0(n,i,a){Qe=n,Tp(n)}function Tp(n,i,a){for(var c=(n.mode&1)!==0;Qe!==null;){var d=Qe,h=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Zo;if(!T){var O=d.alternate,W=O!==null&&O.memoizedState!==null||On;O=Zo;var ve=On;if(Zo=T,(On=W)&&!ve)for(Qe=d;Qe!==null;)T=Qe,W=T.child,T.tag===22&&T.memoizedState!==null?Rp(d):W!==null?(W.return=T,Qe=W):Rp(d);for(;h!==null;)Qe=h,Tp(h),h=h.sibling;Qe=d,Zo=O,On=ve}Ap(n)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Qe=h):Ap(n)}}function Ap(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:On||Jo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!On)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ai(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Ch(i,h,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ch(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Ae=ve.memoizedState;if(Ae!==null){var be=Ae.dehydrated;be!==null&&ya(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||i.flags&512&&cu(i)}catch(Te){sn(i,i.return,Te)}}if(i===n){Qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Cp(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Rp(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jo(4,i)}catch(W){sn(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){sn(i,d,W)}}var h=i.return;try{cu(i)}catch(W){sn(i,h,W)}break;case 5:var T=i.return;try{cu(i)}catch(W){sn(i,T,W)}}}catch(W){sn(i,i.return,W)}if(i===n){Qe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Qe=O;break}Qe=i.return}}var J0=Math.ceil,Qo=R.ReactCurrentDispatcher,fu=R.ReactCurrentOwner,mi=R.ReactCurrentBatchConfig,Ut=0,wn=null,dn=null,bn=0,ii=0,Ys=Cr(0),_n=0,Wa=null,as=0,el=0,hu=0,Xa=null,Kn=null,pu=0,qs=1/0,lr=null,tl=!1,mu=null,Dr=null,nl=!1,Ir=null,il=0,Ya=0,gu=null,rl=-1,sl=0;function Wn(){return(Ut&6)!==0?ft():rl!==-1?rl:rl=ft()}function Ur(n){return(n.mode&1)===0?1:(Ut&2)!==0&&bn!==0?bn&-bn:U0.transition!==null?(sl===0&&(sl=gn()),sl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Pf(n.type)),n)}function bi(n,i,a,c){if(50<Ya)throw Ya=0,gu=null,Error(t(185));ln(n,a,c),((Ut&2)===0||n!==wn)&&(n===wn&&((Ut&2)===0&&(el|=a),_n===4&&Fr(n,bn)),$n(n,c),a===1&&Ut===0&&(i.mode&1)===0&&(qs=ft()+500,Do&&br()))}function $n(n,i){var a=n.callbackNode;Wt(n,i);var c=bt(n,n===wn?bn:0);if(c===0)a!==null&&Zr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Zr(a),i===1)n.tag===0?I0(Pp.bind(null,n)):mh(Pp.bind(null,n)),P0(function(){(Ut&6)===0&&br()}),a=null;else{switch(Si(c)){case 1:a=jt;break;case 4:a=Yt;break;case 16:a=w;break;case 536870912:a=fe;break;default:a=w}a=kp(a,bp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function bp(n,i){if(rl=-1,sl=0,(Ut&6)!==0)throw Error(t(327));var a=n.callbackNode;if(js()&&n.callbackNode!==a)return null;var c=bt(n,n===wn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=al(n,c);else{i=c;var d=Ut;Ut|=2;var h=Np();(wn!==n||bn!==i)&&(lr=null,qs=ft()+500,ls(n,i));do try{tv();break}catch(O){Lp(n,O)}while(!0);Ic(),Qo.current=h,Ut=d,dn!==null?i=0:(wn=null,bn=0,i=_n)}if(i!==0){if(i===2&&(d=zt(n),d!==0&&(c=d,i=vu(n,d))),i===1)throw a=Wa,ls(n,0),Fr(n,c),$n(n,ft()),a;if(i===6)Fr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Q0(d)&&(i=al(n,c),i===2&&(h=zt(n),h!==0&&(c=h,i=vu(n,h))),i===1))throw a=Wa,ls(n,0),Fr(n,c),$n(n,ft()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(n,Kn,lr);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=pu+500-ft(),10<i)){if(bt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ec(cs.bind(null,n,Kn,lr),i);break}cs(n,Kn,lr);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ue(c);h=1<<T,T=i[T],T>d&&(d=T),c&=~h}if(c=d,c=ft()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*J0(c/1960))-c,10<c){n.timeoutHandle=Ec(cs.bind(null,n,Kn,lr),c);break}cs(n,Kn,lr);break;case 5:cs(n,Kn,lr);break;default:throw Error(t(329))}}}return $n(n,ft()),n.callbackNode===a?bp.bind(null,n):null}function vu(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(ls(n,i).flags|=256),n=al(n,i),n!==2&&(i=Kn,Kn=a,i!==null&&_u(i)),n}function _u(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Q0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!wi(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~hu,i&=~el,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ue(i),c=1<<a;n[a]=-1,i&=~c}}function Pp(n){if((Ut&6)!==0)throw Error(t(327));js();var i=bt(n,0);if((i&1)===0)return $n(n,ft()),null;var a=al(n,i);if(n.tag!==0&&a===2){var c=zt(n);c!==0&&(i=c,a=vu(n,c))}if(a===1)throw a=Wa,ls(n,0),Fr(n,i),$n(n,ft()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,cs(n,Kn,lr),$n(n,ft()),null}function xu(n,i){var a=Ut;Ut|=1;try{return n(i)}finally{Ut=a,Ut===0&&(qs=ft()+500,Do&&br())}}function os(n){Ir!==null&&Ir.tag===0&&(Ut&6)===0&&js();var i=Ut;Ut|=1;var a=mi.transition,c=yt;try{if(mi.transition=null,yt=1,n)return n()}finally{yt=c,mi.transition=a,Ut=i,(Ut&6)===0&&br()}}function Su(){ii=Ys.current,$t(Ys)}function ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,b0(a)),dn!==null)for(a=dn.return;a!==null;){var c=a;switch(bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Lo();break;case 3:Hs(),$t(Yn),$t(In),Vc();break;case 5:zc(c);break;case 4:Hs();break;case 13:$t(en);break;case 19:$t(en);break;case 10:Uc(c.type._context);break;case 22:case 23:Su()}a=a.return}if(wn=n,dn=n=Or(n.current,null),bn=ii=i,_n=0,Wa=null,hu=el=as=0,Kn=Xa=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var T=h.next;h.next=d,c.next=T}a.pending=c}is=null}return n}function Lp(n,i){do{var a=dn;try{if(Ic(),Ho.current=qo,Wo){for(var c=tn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Wo=!1}if(ss=0,En=vn=tn=null,ka=!1,Ba=0,fu.current=null,a===null||a.return===null){_n=1,Wa=i,dn=null;break}e:{var h=n,T=a.return,O=a,W=i;if(i=bn,O.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ve=W,Ae=O,be=Ae.tag;if((Ae.mode&1)===0&&(be===0||be===11||be===15)){var Te=Ae.alternate;Te?(Ae.updateQueue=Te.updateQueue,Ae.memoizedState=Te.memoizedState,Ae.lanes=Te.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var Ke=np(T);if(Ke!==null){Ke.flags&=-257,ip(Ke,T,O,h,i),Ke.mode&1&&tp(h,ve,i),i=Ke,W=ve;var et=i.updateQueue;if(et===null){var nt=new Set;nt.add(W),i.updateQueue=nt}else et.add(W);break e}else{if((i&1)===0){tp(h,ve,i),yu();break e}W=Error(t(426))}}else if(Qt&&O.mode&1){var cn=np(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),ip(cn,T,O,h,i),Nc(Ws(W,O));break e}}h=W=Ws(W,O),_n!==4&&(_n=2),Xa===null?Xa=[h]:Xa.push(h),h=T;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var le=Qh(h,W,i);Ah(h,le);break e;case 1:O=W;var Z=h.type,pe=h.stateNode;if((h.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Dr===null||!Dr.has(pe)))){h.flags|=65536,i&=-i,h.lanes|=i;var Le=ep(h,O,i);Ah(h,Le);break e}}h=h.return}while(h!==null)}Ip(a)}catch(it){i=it,dn===a&&a!==null&&(dn=a=a.return);continue}break}while(!0)}function Np(){var n=Qo.current;return Qo.current=qo,n===null?qo:n}function yu(){(_n===0||_n===3||_n===2)&&(_n=4),wn===null||(as&268435455)===0&&(el&268435455)===0||Fr(wn,bn)}function al(n,i){var a=Ut;Ut|=2;var c=Np();(wn!==n||bn!==i)&&(lr=null,ls(n,i));do try{ev();break}catch(d){Lp(n,d)}while(!0);if(Ic(),Ut=a,Qo.current=c,dn!==null)throw Error(t(261));return wn=null,bn=0,_n}function ev(){for(;dn!==null;)Dp(dn)}function tv(){for(;dn!==null&&!Jr();)Dp(dn)}function Dp(n){var i=Op(n.alternate,n,ii);n.memoizedProps=n.pendingProps,i===null?Ip(n):dn=i,fu.current=null}function Ip(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=q0(a,i,ii),a!==null){dn=a;return}}else{if(a=j0(a,i),a!==null){a.flags&=32767,dn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);_n===0&&(_n=5)}function cs(n,i,a){var c=yt,d=mi.transition;try{mi.transition=null,yt=1,nv(n,i,a,c)}finally{mi.transition=d,yt=c}return null}function nv(n,i,a,c){do js();while(Ir!==null);if((Ut&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=a.lanes|a.childLanes;if(Pt(n,h),n===wn&&(dn=wn=null,bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nl||(nl=!0,kp(w,function(){return js(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=mi.transition,mi.transition=null;var T=yt;yt=1;var O=Ut;Ut|=4,fu.current=null,$0(n,a),wp(a,n),M0(yc),vo=!!Sc,yc=Sc=null,n.current=a,Z0(a),ct(),Ut=O,yt=T,mi.transition=h}else n.current=a;if(nl&&(nl=!1,Ir=n,il=d),h=n.pendingLanes,h===0&&(Dr=null),Ve(a.stateNode),$n(n,ft()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,n=mu,mu=null,n;return(il&1)!==0&&n.tag!==0&&js(),h=n.pendingLanes,(h&1)!==0?n===gu?Ya++:(Ya=0,gu=n):Ya=0,br(),null}function js(){if(Ir!==null){var n=Si(il),i=mi.transition,a=yt;try{if(mi.transition=null,yt=16>n?16:n,Ir===null)var c=!1;else{if(n=Ir,Ir=null,il=0,(Ut&6)!==0)throw Error(t(331));var d=Ut;for(Ut|=4,Qe=n.current;Qe!==null;){var h=Qe,T=h.child;if((Qe.flags&16)!==0){var O=h.deletions;if(O!==null){for(var W=0;W<O.length;W++){var ve=O[W];for(Qe=ve;Qe!==null;){var Ae=Qe;switch(Ae.tag){case 0:case 11:case 15:Ha(8,Ae,h)}var be=Ae.child;if(be!==null)be.return=Ae,Qe=be;else for(;Qe!==null;){Ae=Qe;var Te=Ae.sibling,Ke=Ae.return;if(xp(Ae),Ae===ve){Qe=null;break}if(Te!==null){Te.return=Ke,Qe=Te;break}Qe=Ke}}}var et=h.alternate;if(et!==null){var nt=et.child;if(nt!==null){et.child=null;do{var cn=nt.sibling;nt.sibling=null,nt=cn}while(nt!==null)}}Qe=h}}if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,Qe=T;else e:for(;Qe!==null;){if(h=Qe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ha(9,h,h.return)}var le=h.sibling;if(le!==null){le.return=h.return,Qe=le;break e}Qe=h.return}}var Z=n.current;for(Qe=Z;Qe!==null;){T=Qe;var pe=T.child;if((T.subtreeFlags&2064)!==0&&pe!==null)pe.return=T,Qe=pe;else e:for(T=Z;Qe!==null;){if(O=Qe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Jo(9,O)}}catch(it){sn(O,O.return,it)}if(O===T){Qe=null;break e}var Le=O.sibling;if(Le!==null){Le.return=O.return,Qe=Le;break e}Qe=O.return}}if(Ut=d,br(),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(se,n)}catch{}c=!0}return c}finally{yt=a,mi.transition=i}}return!1}function Up(n,i,a){i=Ws(a,i),i=Qh(n,i,1),n=Lr(n,i,1),i=Wn(),n!==null&&(ln(n,1,i),$n(n,i))}function sn(n,i,a){if(n.tag===3)Up(n,n,a);else for(;i!==null;){if(i.tag===3){Up(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dr===null||!Dr.has(c))){n=Ws(a,n),n=ep(i,n,1),i=Lr(i,n,1),n=Wn(),i!==null&&(ln(i,1,n),$n(i,n));break}}i=i.return}}function iv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wn(),n.pingedLanes|=n.suspendedLanes&a,wn===n&&(bn&a)===a&&(_n===4||_n===3&&(bn&130023424)===bn&&500>ft()-pu?ls(n,0):hu|=a),$n(n,i)}function Fp(n,i){i===0&&((n.mode&1)===0?i=1:(i=St,St<<=1,(St&130023424)===0&&(St=4194304)));var a=Wn();n=sr(n,i),n!==null&&(ln(n,i,a),$n(n,a))}function rv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Fp(n,a)}function sv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Fp(n,a)}var Op;Op=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Yn.current)jn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return jn=!1,Y0(n,i,a);jn=(n.flags&131072)!==0}else jn=!1,Qt&&(i.flags&1048576)!==0&&gh(i,Uo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$o(n,i),n=i.pendingProps;var d=Fs(i,In.current);Vs(i,a),d=Xc(null,i,c,n,d,a);var h=Yc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(c)?(h=!0,No(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=jo,i.stateNode=d,d._reactInternals=i,Jc(i,c,n,a),i=nu(null,i,c,!0,h,a)):(i.tag=0,Qt&&h&&Rc(i),Hn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch($o(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=ov(c),n=Ai(c,n),d){case 0:i=tu(null,i,c,n,a);break e;case 1:i=cp(null,i,c,n,a);break e;case 11:i=rp(null,i,c,n,a);break e;case 14:i=sp(null,i,c,Ai(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),tu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),cp(n,i,c,d,a);case 3:e:{if(up(i),n===null)throw Error(t(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Th(n,i),Go(i,c,null,a);var T=i.memoizedState;if(c=T.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ws(Error(t(423)),i),i=dp(n,i,c,a,d);break e}else if(c!==d){d=Ws(Error(t(424)),i),i=dp(n,i,c,a,d);break e}else for(ni=Ar(i.stateNode.containerInfo.firstChild),ti=i,Qt=!0,Ti=null,a=Eh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===d){i=or(n,i,a);break e}Hn(n,i,c,a)}i=i.child}return i;case 5:return Rh(i),n===null&&Lc(i),c=i.type,d=i.pendingProps,h=n!==null?n.memoizedProps:null,T=d.children,Mc(c,d)?T=null:h!==null&&Mc(c,h)&&(i.flags|=32),lp(n,i),Hn(n,i,T,a),i.child;case 6:return n===null&&Lc(i),null;case 13:return fp(n,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=zs(i,null,c,a):Hn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),rp(n,i,c,d,a);case 7:return Hn(n,i,i.pendingProps,a),i.child;case 8:return Hn(n,i,i.pendingProps.children,a),i.child;case 12:return Hn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,T=d.value,qt(ko,c._currentValue),c._currentValue=T,h!==null)if(wi(h.value,T)){if(h.children===d.children&&!Yn.current){i=or(n,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var O=h.dependencies;if(O!==null){T=h.child;for(var W=O.firstContext;W!==null;){if(W.context===c){if(h.tag===1){W=ar(-1,a&-a),W.tag=2;var ve=h.updateQueue;if(ve!==null){ve=ve.shared;var Ae=ve.pending;Ae===null?W.next=W:(W.next=Ae.next,Ae.next=W),ve.pending=W}}h.lanes|=a,W=h.alternate,W!==null&&(W.lanes|=a),Fc(h.return,a,i),O.lanes|=a;break}W=W.next}}else if(h.tag===10)T=h.type===i.type?null:h.child;else if(h.tag===18){if(T=h.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),Fc(T,a,i),T=h.sibling}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===i){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}Hn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Vs(i,a),d=hi(d),c=c(d),i.flags|=1,Hn(n,i,c,a),i.child;case 14:return c=i.type,d=Ai(c,i.pendingProps),d=Ai(c.type,d),sp(n,i,c,d,a);case 15:return ap(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),$o(n,i),i.tag=1,qn(c)?(n=!0,No(i)):n=!1,Vs(i,a),Zh(i,c,d),Jc(i,c,d,a),nu(null,i,c,!0,n,a);case 19:return pp(n,i,a);case 22:return op(n,i,a)}throw Error(t(156,i.tag))};function kp(n,i){return Qi(n,i)}function av(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,a,c){return new av(n,i,a,c)}function Mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ov(n){if(typeof n=="function")return Mu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ne)return 14}return 2}function Or(n,i){var a=n.alternate;return a===null?(a=gi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ol(n,i,a,c,d,h){var T=2;if(c=n,typeof n=="function")Mu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return us(a.children,d,h,i);case E:T=8,d|=8;break;case P:return n=gi(12,a,i,d|2),n.elementType=P,n.lanes=h,n;case ie:return n=gi(13,a,i,d),n.elementType=ie,n.lanes=h,n;case Y:return n=gi(19,a,i,d),n.elementType=Y,n.lanes=h,n;case ae:return ll(a,d,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:T=10;break e;case q:T=9;break e;case $:T=11;break e;case ne:T=14;break e;case ge:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(T,a,i,d),i.elementType=n,i.type=c,i.lanes=h,i}function us(n,i,a,c){return n=gi(7,n,c,i),n.lanes=a,n}function ll(n,i,a,c){return n=gi(22,n,c,i),n.elementType=ae,n.lanes=a,n.stateNode={isHidden:!1},n}function Eu(n,i,a){return n=gi(6,n,null,i),n.lanes=a,n}function wu(n,i,a){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function lv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qe(0),this.expirationTimes=qe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(n,i,a,c,d,h,T,O,W){return n=new lv(n,i,a,O,W),i===1?(i=1,h===!0&&(i|=8)):i=0,h=gi(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(h),n}function cv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Bp(n){if(!n)return Rr;n=n._reactInternals;e:{if(Mn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return hh(n,a,i)}return i}function zp(n,i,a,c,d,h,T,O,W){return n=Tu(a,c,!0,n,d,h,T,O,W),n.context=Bp(null),a=n.current,c=Wn(),d=Ur(a),h=ar(c,d),h.callback=i??null,Lr(a,h,d),n.current.lanes=d,ln(n,d,c),$n(n,c),n}function cl(n,i,a,c){var d=i.current,h=Wn(),T=Ur(d);return a=Bp(a),i.context===null?i.context=a:i.pendingContext=a,i=ar(h,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Lr(d,i,T),n!==null&&(bi(n,d,T,h),zo(n,d,T)),T}function ul(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Au(n,i){Gp(n,i),(n=n.alternate)&&Gp(n,i)}function uv(){return null}var Vp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cu(n){this._internalRoot=n}dl.prototype.render=Cu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=Cu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){cl(null,n,null,null)}),i[tr]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=yi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Er.length&&i!==0&&i<Er[a].priority;a++);Er.splice(a,0,n),a===0&&Rf(n)}};function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function dv(n,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var ve=ul(T);h.call(ve)}}var T=zp(i,c,n,0,null,!1,!1,"",Hp);return n._reactRootContainer=T,n[tr]=T.current,Pa(n.nodeType===8?n.parentNode:n),os(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var ve=ul(W);O.call(ve)}}var W=Tu(n,0,!1,null,null,!1,!1,"",Hp);return n._reactRootContainer=W,n[tr]=W.current,Pa(n.nodeType===8?n.parentNode:n),os(function(){cl(i,W,a,c)}),W}function hl(n,i,a,c,d){var h=a._reactRootContainer;if(h){var T=h;if(typeof d=="function"){var O=d;d=function(){var W=ul(T);O.call(W)}}cl(i,T,n,d)}else T=dv(a,i,n,d,c);return ul(T)}er=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ze(i.pendingLanes);a!==0&&(Dn(i,a|1),$n(i,ft()),(Ut&6)===0&&(qs=ft()+500,br()))}break;case 13:os(function(){var c=sr(n,1);if(c!==null){var d=Wn();bi(c,n,1,d)}}),Au(n,1)}},Ot=function(n){if(n.tag===13){var i=sr(n,134217728);if(i!==null){var a=Wn();bi(i,n,134217728,a)}Au(n,134217728)}},Jt=function(n){if(n.tag===13){var i=Ur(n),a=sr(n,i);if(a!==null){var c=Wn();bi(a,n,i,c)}Au(n,i)}},yi=function(){return yt},Vt=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},$e=function(n,i,a){switch(i){case"input":if(ke(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Po(c);if(!d)throw Error(t(90));at(c),ke(c,d)}}}break;case"textarea":Xt(n,a);break;case"select":i=a.value,i!=null&&rt(n,!!a.multiple,i,!1)}},Pe=xu,Ee=os;var fv={usingClientEntryPoint:!1,Events:[Da,Is,Po,_e,Ce,xu]},qa={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ji(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{se=pl.inject(hv),re=pl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(t(200));return cv(n,i,null,a)},Zn.createRoot=function(n,i){if(!Ru(n))throw Error(t(299));var a=!1,c="",d=Vp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(n,1,!1,null,null,a,!1,c,d),n[tr]=i.current,Pa(n.nodeType===8?n.parentNode:n),new Cu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ji(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return os(n)},Zn.hydrate=function(n,i,a){if(!fl(i))throw Error(t(200));return hl(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Ru(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",T=Vp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=zp(i,null,n,1,a??null,d,!1,h,T),n[tr]=i.current,Pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new dl(i)},Zn.render=function(n,i,a){if(!fl(i))throw Error(t(200));return hl(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!fl(n))throw Error(t(40));return n._reactRootContainer?(os(function(){hl(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Zn.unstable_batchedUpdates=xu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hl(n,i,a,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Zp;function Mv(){if(Zp)return Lu.exports;Zp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lu.exports=yv(),Lu.exports}var Jp;function Ev(){if(Jp)return ml;Jp=1;var s=Mv();return ml.createRoot=s.createRoot,ml.hydrateRoot=s.hydrateRoot,ml}var wv=Ev();const Tv=Jm(wv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="186",Av=0,Qp=1,Cv=2,kl=1,Rv=2,no=3,ys=0,Qn=1,Xi=2,gr=0,so=1,Wr=2,em=3,tm=4,bv=5,la=100,Pv=101,Lv=102,Nv=103,Dv=104,Iv=200,Uv=201,Fv=202,Ov=203,Qm=204,eg=205,kv=206,Bv=207,zv=208,Gv=209,Vv=210,Hv=211,Wv=212,Xv=213,Yv=214,md=0,gd=1,vd=2,oo=3,_d=4,xd=5,Sd=6,yd=7,tg=0,qv=1,jv=2,ji=0,ng=1,ig=2,rg=3,af=4,sg=5,ag=6,og=7,lg=300,Ms=301,fa=302,Iu=303,Uu=304,Zl=306,Es=1e3,mr=1001,Md=1002,Pn=1003,Kv=1004,gl=1005,zn=1006,Fu=1007,xs=1008,li=1009,cg=1010,ug=1011,lo=1012,of=1013,Ki=1014,Yi=1015,$i=1016,lf=1017,cf=1018,co=1020,dg=35902,fg=35899,hg=1021,pg=1022,Ui=1023,xr=1026,Ss=1027,mg=1028,uf=1029,ws=1030,df=1031,ff=1033,Bl=33776,zl=33777,Gl=33778,Vl=33779,Ed=35840,wd=35841,Td=35842,Ad=35843,Cd=36196,Rd=37492,bd=37496,Pd=37488,Ld=37489,Wl=37490,Nd=37491,Dd=37808,Id=37809,Ud=37810,Fd=37811,Od=37812,kd=37813,Bd=37814,zd=37815,Gd=37816,Vd=37817,Hd=37818,Wd=37819,Xd=37820,Yd=37821,qd=36492,jd=36494,Kd=36495,$d=36283,Zd=36284,Xl=36285,Jd=36286,$v=3200,Qd=0,Zv=1,Yr="",_i="srgb",Yl="srgb-linear",ql="linear",Ht="srgb",Ou=7680,Jv=519,Qv=512,e_=513,t_=514,hf=515,n_=516,i_=517,pf=518,r_=519,s_=35044,nm="300 es",qi=2e3,uo=2001;function a_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function o_(){const s=jl("canvas");return s.style.display="block",s}const im={};function rm(...s){const e="THREE."+s.shift();console.log(e,...s)}function gg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=gg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Bt(...s){s=gg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ua(...s){const e=s.join(" ");e in im||(im[e]=!0,gt(...s))}function l_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const c_={[md]:gd,[vd]:Sd,[_d]:yd,[oo]:xd,[gd]:md,[Sd]:vd,[yd]:_d,[xd]:oo};class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,ef=180/Math.PI;function ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function Nt(s,e,t){return Math.max(e,Math.min(t,s))}function u_(s,e){return(s%e+e)%e}function Bu(s,e,t){return(1-t)*s+t*e}function Ka(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Mf=class Mf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mf.prototype.isVector2=!0;let Dt=Mf;class ma{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let m=r[o+0],p=r[o+1],_=r[o+2],S=r[o+3],g=l[u+0],M=l[u+1],A=l[u+2],b=l[u+3];if(S!==b||m!==g||p!==M||_!==A){let x=m*g+p*M+_*A+S*b;x<0&&(g=-g,M=-M,A=-A,b=-b,x=-x);let v=1-f;if(x<.9995){const I=Math.acos(x),V=Math.sin(I);v=Math.sin(v*I)/V,f=Math.sin(f*I)/V,m=m*v+g*f,p=p*v+M*f,_=_*v+A*f,S=S*v+b*f}else{m=m*v+g*f,p=p*v+M*f,_=_*v+A*f,S=S*v+b*f;const I=1/Math.sqrt(m*m+p*p+_*_+S*S);m*=I,p*=I,_*=I,S*=I}}e[t]=m,e[t+1]=p,e[t+2]=_,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],m=r[o+1],p=r[o+2],_=r[o+3],S=l[u],g=l[u+1],M=l[u+2],A=l[u+3];return e[t]=f*A+_*S+m*M-p*g,e[t+1]=m*A+_*g+p*S-f*M,e[t+2]=p*A+_*M+f*g-m*S,e[t+3]=_*A-f*S-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(r/2),_=f(o/2),S=f(l/2),g=m(r/2),M=m(o/2),A=m(l/2);switch(u){case"XYZ":this._x=g*_*S+p*M*A,this._y=p*M*S-g*_*A,this._z=p*_*A+g*M*S,this._w=p*_*S-g*M*A;break;case"YXZ":this._x=g*_*S+p*M*A,this._y=p*M*S-g*_*A,this._z=p*_*A-g*M*S,this._w=p*_*S+g*M*A;break;case"ZXY":this._x=g*_*S-p*M*A,this._y=p*M*S+g*_*A,this._z=p*_*A+g*M*S,this._w=p*_*S-g*M*A;break;case"ZYX":this._x=g*_*S-p*M*A,this._y=p*M*S+g*_*A,this._z=p*_*A-g*M*S,this._w=p*_*S+g*M*A;break;case"YZX":this._x=g*_*S+p*M*A,this._y=p*M*S+g*_*A,this._z=p*_*A-g*M*S,this._w=p*_*S-g*M*A;break;case"XZY":this._x=g*_*S-p*M*A,this._y=p*M*S-g*_*A,this._z=p*_*A+g*M*S,this._w=p*_*S+g*M*A;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],_=t[6],S=t[10],g=r+f+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(_-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+o*p-l*m,this._y=o*_+u*m+l*f-r*p,this._z=l*_+u*p+r*m-o*f,this._w=u*_-r*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);m=Math.sin(m*p)/_,t=Math.sin(t*p)/_,this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ef=class Ef{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*r),_=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+m*p+u*S-f*_,this.y=r+m*_+f*p-l*S,this.z=o+m*S+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-r*m,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;let he=Ef;const zu=new he,sm=new ma,wf=class wf{constructor(e,t,r,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,m,p)}set(e,t,r,o,l,u,f,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],m=r[6],p=r[1],_=r[4],S=r[7],g=r[2],M=r[5],A=r[8],b=o[0],x=o[3],v=o[6],I=o[1],V=o[4],R=o[7],N=o[2],L=o[5],F=o[8];return l[0]=u*b+f*I+m*N,l[3]=u*x+f*V+m*L,l[6]=u*v+f*R+m*F,l[1]=p*b+_*I+S*N,l[4]=p*x+_*V+S*L,l[7]=p*v+_*R+S*F,l[2]=g*b+M*I+A*N,l[5]=g*x+M*V+A*L,l[8]=g*v+M*R+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],_=e[8],S=_*u-f*p,g=f*m-_*l,M=p*l-u*m,A=t*S+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(o*p-_*r)*b,e[2]=(f*r-o*u)*b,e[3]=g*b,e[4]=(_*t-o*m)*b,e[5]=(o*l-f*t)*b,e[6]=M*b,e[7]=(r*m-p*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wf.prototype.isMatrix3=!0;let _t=wf;const Gu=new _t,am=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),om=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d_(){const s={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(o.r=vr(o.r),o.g=vr(o.g),o.b=vr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=da(o.r),o.g=da(o.g),o.b=da(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Yl]:{primaries:e,whitePoint:r,transfer:ql,toXYZ:am,fromXYZ:om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:am,fromXYZ:om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Lt=d_();function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ks;class f_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=jl("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=vr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(vr(t[r]/255)*255):t[r]=vr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class mf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Vu(o[u].image)):l.push(Vu(o[u]))}else l=Vu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let p_=0;const Hu=new he;class Gn extends Ts{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=mr,o=mr,l=zn,u=xs,f=Ui,m=li,p=Gn.DEFAULT_ANISOTROPY,_=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ho(),this.name="",this.source=new mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=lg;Gn.DEFAULT_ANISOTROPY=1;const Tf=class Tf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const m=e.elements,p=m[0],_=m[4],S=m[8],g=m[1],M=m[5],A=m[9],b=m[2],x=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-b)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+b)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const V=(p+1)/2,R=(M+1)/2,N=(v+1)/2,L=(_+g)/4,F=(S+b)/4,E=(A+x)/4;return V>R&&V>N?V<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(V),o=L/r,l=F/r):R>N?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=L/o,l=E/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=F/l,o=E/l),this.set(r,o,l,t),this}let I=Math.sqrt((x-A)*(x-A)+(S-b)*(S-b)+(g-_)*(g-_));return Math.abs(I)<.001&&(I=1),this.x=(x-A)/I,this.y=(S-b)/I,this.z=(g-_)/I,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tf.prototype.isVector4=!0;let nn=Tf;class m_ extends Ts{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Gn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new mf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends m_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class vg extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,t,r,o,l,u,f,m,p,_,S,g,M,A,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,m,p,_,S,g,M,A,b,x)}set(e,t,r,o,l,u,f,m,p,_,S,g,M,A,b,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=_,v[10]=S,v[14]=g,v[3]=M,v[7]=A,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*_,M=u*S,A=f*_,b=f*S;t[0]=m*_,t[4]=-m*S,t[8]=p,t[1]=M+A*p,t[5]=g-b*p,t[9]=-f*m,t[2]=b-g*p,t[6]=A+M*p,t[10]=u*m}else if(e.order==="YXZ"){const g=m*_,M=m*S,A=p*_,b=p*S;t[0]=g+b*f,t[4]=A*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*_,t[9]=-f,t[2]=M*f-A,t[6]=b+g*f,t[10]=u*m}else if(e.order==="ZXY"){const g=m*_,M=m*S,A=p*_,b=p*S;t[0]=g-b*f,t[4]=-u*S,t[8]=A+M*f,t[1]=M+A*f,t[5]=u*_,t[9]=b-g*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const g=u*_,M=u*S,A=f*_,b=f*S;t[0]=m*_,t[4]=A*p-M,t[8]=g*p+b,t[1]=m*S,t[5]=b*p+g,t[9]=M*p-A,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const g=u*m,M=u*p,A=f*m,b=f*p;t[0]=m*_,t[4]=b-g*S,t[8]=A*S+M,t[1]=S,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=M*S+A,t[10]=g-b*S}else if(e.order==="XZY"){const g=u*m,M=u*p,A=f*m,b=f*p;t[0]=m*_,t[4]=-S,t[8]=p*_,t[1]=g*S+b,t[5]=u*_,t[9]=M*S-A,t[2]=A*S-M,t[6]=f*_,t[10]=b*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,__)}lookAt(e,t,r){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Br.crossVectors(r,ri),Br.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Br.crossVectors(r,ri)),Br.normalize(),vl.crossVectors(ri,Br),o[0]=Br.x,o[4]=vl.x,o[8]=ri.x,o[1]=Br.y,o[5]=vl.y,o[9]=ri.y,o[2]=Br.z,o[6]=vl.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],m=r[8],p=r[12],_=r[1],S=r[5],g=r[9],M=r[13],A=r[2],b=r[6],x=r[10],v=r[14],I=r[3],V=r[7],R=r[11],N=r[15],L=o[0],F=o[4],E=o[8],P=o[12],k=o[1],q=o[5],$=o[9],ie=o[13],Y=o[2],ne=o[6],ge=o[10],ae=o[14],X=o[3],Q=o[7],ee=o[11],D=o[15];return l[0]=u*L+f*k+m*Y+p*X,l[4]=u*F+f*q+m*ne+p*Q,l[8]=u*E+f*$+m*ge+p*ee,l[12]=u*P+f*ie+m*ae+p*D,l[1]=_*L+S*k+g*Y+M*X,l[5]=_*F+S*q+g*ne+M*Q,l[9]=_*E+S*$+g*ge+M*ee,l[13]=_*P+S*ie+g*ae+M*D,l[2]=A*L+b*k+x*Y+v*X,l[6]=A*F+b*q+x*ne+v*Q,l[10]=A*E+b*$+x*ge+v*ee,l[14]=A*P+b*ie+x*ae+v*D,l[3]=I*L+V*k+R*Y+N*X,l[7]=I*F+V*q+R*ne+N*Q,l[11]=I*E+V*$+R*ge+N*ee,l[15]=I*P+V*ie+R*ae+N*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],_=e[2],S=e[6],g=e[10],M=e[14],A=e[3],b=e[7],x=e[11],v=e[15],I=m*M-p*g,V=f*M-p*S,R=f*g-m*S,N=u*M-p*_,L=u*g-m*_,F=u*S-f*_;return t*(b*I-x*V+v*R)-r*(A*I-x*N+v*L)+o*(A*V-b*N+v*F)-l*(A*R-b*L+x*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],_=e[10];return t*(u*_-f*p)-r*(l*_-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],_=e[8],S=e[9],g=e[10],M=e[11],A=e[12],b=e[13],x=e[14],v=e[15],I=t*f-r*u,V=t*m-o*u,R=t*p-l*u,N=r*m-o*f,L=r*p-l*f,F=o*p-l*m,E=_*b-S*A,P=_*x-g*A,k=_*v-M*A,q=S*x-g*b,$=S*v-M*b,ie=g*v-M*x,Y=I*ie-V*$+R*q+N*k-L*P+F*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/Y;return e[0]=(f*ie-m*$+p*q)*ne,e[1]=(o*$-r*ie-l*q)*ne,e[2]=(b*F-x*L+v*N)*ne,e[3]=(g*L-S*F-M*N)*ne,e[4]=(m*k-u*ie-p*P)*ne,e[5]=(t*ie-o*k+l*P)*ne,e[6]=(x*R-A*F-v*V)*ne,e[7]=(_*F-g*R+M*V)*ne,e[8]=(u*$-f*k+p*E)*ne,e[9]=(r*k-t*$-l*E)*ne,e[10]=(A*L-b*R+v*I)*ne,e[11]=(S*R-_*L-M*I)*ne,e[12]=(f*P-u*q-m*E)*ne,e[13]=(t*q-r*P+o*E)*ne,e[14]=(b*V-A*N-x*I)*ne,e[15]=(_*N-S*V+g*I)*ne,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,m=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-o*m,p*m+o*f,0,p*f+o*m,_*f+r,_*m-o*u,0,p*m-o*f,_*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,_=u+u,S=f+f,g=l*p,M=l*_,A=l*S,b=u*_,x=u*S,v=f*S,I=m*p,V=m*_,R=m*S,N=r.x,L=r.y,F=r.z;return o[0]=(1-(b+v))*N,o[1]=(M+R)*N,o[2]=(A-V)*N,o[3]=0,o[4]=(M-R)*L,o[5]=(1-(g+v))*L,o[6]=(x+I)*L,o[7]=0,o[8]=(A+V)*F,o[9]=(x-I)*F,o[10]=(1-(g+b))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=$s.set(o[0],o[1],o[2]).length();const f=$s.set(o[4],o[5],o[6]).length(),m=$s.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Pi.copy(this);const p=1/u,_=1/f,S=1/m;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=_,Pi.elements[5]*=_,Pi.elements[6]*=_,Pi.elements[8]*=S,Pi.elements[9]*=S,Pi.elements[10]*=S,t.setFromRotationMatrix(Pi),r.x=u,r.y=f,r.z=m,this}makePerspective(e,t,r,o,l,u,f=qi,m=!1){const p=this.elements,_=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let A,b;if(m)A=l/(u-l),b=u*l/(u-l);else if(f===qi)A=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===uo)A=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=qi,m=!1){const p=this.elements,_=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let A,b;if(m)A=1/(u-l),b=u/(u-l);else if(f===qi)A=-2/(u-l),b=-(u+l)/(u-l);else if(f===uo)A=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};$l.prototype.isMatrix4=!0;let an=$l;const $s=new he,Pi=new an,v_=new he(0,0,0),__=new he(1,1,1),Br=new he,vl=new he,ri=new he,lm=new an,cm=new ma;class qr{constructor(e=0,t=0,r=0,o=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],_=o[9],S=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Nt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x_=0;const um=new he,Zs=new ma,cr=new an,_l=new he,$a=new he,S_=new he,y_=new ma,dm=new he(1,0,0),fm=new he(0,1,0),hm=new he(0,0,1),pm={type:"added"},M_={type:"removed"},Js={type:"childadded",child:null},Wu={type:"childremoved",child:null};class Vn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new he,t=new qr,r=new ma,o=new he(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new _t}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,t){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_l.copy(e):_l.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt($a,_l,this.up):cr.lookAt(_l,$a,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(cr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),Js.child=e,this.dispatchEvent(Js),Js.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M_),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const S=m[p];l(e.shapes,S)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),S=u(e.shapes),g=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const m=[];for(const p in f){const _=f[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vn.DEFAULT_UP=new he(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,r),v=this._getHandJoint(p,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&g>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new xn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function Yu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Lt.workingColorSpace){if(e=u_(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Yu(u,l,e+1/3),this.g=Yu(u,l,e),this.b=Yu(u,l,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=xg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Lt.workingToColorSpace(Bn.copy(this),e),Math.round(Nt(Bn.r*255,0,255))*65536+Math.round(Nt(Bn.g*255,0,255))*256+Math.round(Nt(Bn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Bn.copy(this),t);const r=Bn.r,o=Bn.g,l=Bn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let m,p;const _=(f+u)/2;if(f===u)m=0,p=0;else{const S=u-f;switch(p=_<=.5?S/(u+f):S/(2-u-f),u){case r:m=(o-l)/S+(o<l?6:0);break;case o:m=(l-r)/S+2;break;case l:m=(r-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=_i){Lt.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,r=Bn.g,o=Bn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(xl);const r=Bu(zr.h,xl.h,t),o=Bu(zr.s,xl.s,t),l=Bu(zr.l,xl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Rt;Rt.NAMES=xg;class gf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(e),this.density=t}clone(){return new gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class w_ extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new he,ur=new he,qu=new he,dr=new he,Qs=new he,ea=new he,mm=new he,ju=new he,Ku=new he,$u=new he,Zu=new nn,Ju=new nn,Qu=new nn;class Ii{constructor(e=new he,t=new he,r=new he){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Li.subVectors(e,t),o.cross(Li);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Li.subVectors(o,t),ur.subVectors(r,t),qu.subVectors(e,t);const u=Li.dot(Li),f=Li.dot(ur),m=Li.dot(qu),p=ur.dot(ur),_=ur.dot(qu),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,M=(p*m-f*_)*g,A=(u*_-f*m)*g;return l.set(1-M-A,A,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,r,o,l,u,f,m){return this.getBarycoord(e,t,r,o,dr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,dr.x),m.addScaledVector(u,dr.y),m.addScaledVector(f,dr.z),m)}static getInterpolatedAttribute(e,t,r,o,l,u){return Zu.setScalar(0),Ju.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Ju,l.y),u.addScaledVector(Qu,l.z),u}static isFrontFacing(e,t,r,o){return Li.subVectors(r,t),ur.subVectors(e,t),Li.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Li.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ii.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Qs.subVectors(o,r),ea.subVectors(l,r),ju.subVectors(e,r);const m=Qs.dot(ju),p=ea.dot(ju);if(m<=0&&p<=0)return t.copy(r);Ku.subVectors(e,o);const _=Qs.dot(Ku),S=ea.dot(Ku);if(_>=0&&S<=_)return t.copy(o);const g=m*S-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),t.copy(r).addScaledVector(Qs,u);$u.subVectors(e,l);const M=Qs.dot($u),A=ea.dot($u);if(A>=0&&M<=A)return t.copy(l);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return f=p/(p-A),t.copy(r).addScaledVector(ea,f);const x=_*A-M*S;if(x<=0&&S-_>=0&&M-A>=0)return mm.subVectors(l,o),f=(S-_)/(S-_+(M-A)),t.copy(o).addScaledVector(mm,f);const v=1/(x+b+g);return u=b*v,f=g*v,t.copy(r).addScaledVector(Qs,u).addScaledVector(ea,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class po{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ni):Ni.fromBufferAttribute(l,u),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),yl.subVectors(this.max,Za),ta.subVectors(e.a,Za),na.subVectors(e.b,Za),ia.subVectors(e.c,Za),Gr.subVectors(na,ta),Vr.subVectors(ia,na),ds.subVectors(ta,ia);let t=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-ds.z,ds.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,ds.z,0,-ds.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-ds.y,ds.x,0];return!ed(t,ta,na,ia,yl)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,ta,na,ia,yl))?!1:(Ml.crossVectors(Gr,Vr),t=[Ml.x,Ml.y,Ml.z],ed(t,ta,na,ia,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new he,new he,new he,new he,new he,new he,new he,new he],Ni=new he,Sl=new po,ta=new he,na=new he,ia=new he,Gr=new he,Vr=new he,ds=new he,Za=new he,yl=new he,Ml=new he,fs=new he;function ed(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){fs.fromArray(s,l);const f=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),m=e.dot(fs),p=t.dot(fs),_=r.dot(fs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>f)return!1}return!0}const fn=new he,El=new Dt;let T_=0;class _r extends Ts{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=s_,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ka(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array),l=Jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sg extends _r{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class yg extends _r{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class un extends _r{constructor(e,t,r){super(new Float32Array(e),t,r)}}const A_=new po,Ja=new he,td=new he;class vf{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):A_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ja,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(td)),this.expandByPoint(Ja.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let C_=0;const vi=new an,nd=new Vn,ra=new he,si=new po,Qa=new po,An=new he;class ci extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a_(e)?yg:Sg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];si.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Qa.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(si.min,Qa.min),si.expandByPoint(An),An.addVectors(si.max,Qa.max),si.expandByPoint(An)):(si.expandByPoint(Qa.min),si.expandByPoint(Qa.max))}si.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)An.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(An));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)An.fromBufferAttribute(f,p),m&&(ra.fromBufferAttribute(e,p),An.add(ra)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new _r(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let E=0;E<r.count;E++)f[E]=new he,m[E]=new he;const p=new he,_=new he,S=new he,g=new Dt,M=new Dt,A=new Dt,b=new he,x=new he;function v(E,P,k){p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,P),S.fromBufferAttribute(r,k),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,P),A.fromBufferAttribute(l,k),_.sub(p),S.sub(p),M.sub(g),A.sub(g);const q=1/(M.x*A.y-A.x*M.y);isFinite(q)&&(b.copy(_).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(q),x.copy(S).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(q),f[E].add(b),f[P].add(b),f[k].add(b),m[E].add(x),m[P].add(x),m[k].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,P=I.length;E<P;++E){const k=I[E],q=k.start,$=k.count;for(let ie=q,Y=q+$;ie<Y;ie+=3)v(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const V=new he,R=new he,N=new he,L=new he;function F(E){N.fromBufferAttribute(o,E),L.copy(N);const P=f[E];V.copy(P),V.sub(N.multiplyScalar(N.dot(P))).normalize(),R.crossVectors(L,P);const q=R.dot(m[E])<0?-1:1;u.setXYZW(E,V.x,V.y,V.z,q)}for(let E=0,P=I.length;E<P;++E){const k=I[E],q=k.start,$=k.count;for(let ie=q,Y=q+$;ie<Y;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new _r(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new he,l=new he,u=new he,f=new he,m=new he,p=new he,_=new he,S=new he;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),b=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,x),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),f.add(_),m.add(_),p.add(_),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(f,m){const p=f.array,_=f.itemSize,S=f.normalized,g=new p.constructor(m.length*_);let M=0,A=0;for(let b=0,x=m.length;b<x;b++){f.isInterleavedBufferAttribute?M=m[b]*f.data.stride+f.offset:M=m[b]*_;for(let v=0;v<_;v++)g[A++]=p[M++]}return new _r(g,_,S)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let _=0,S=p.length;_<S;_++){const g=p[_],M=e(g,r);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let S=0,g=p.length;S<g;S++){const M=p[S];_.push(M.toJSON(e.data))}_.length>0&&(o[m]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],S=l[p];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new he,R_=new he,b_=new _t;class Xr{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=id.subVectors(r,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(id),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||b_.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let P_=0;class mo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=so,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qm,this.blendDst=eg,this.blendEquation=la,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ou,this.stencilZFail=Ou,this.stencilZPass=Ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Xr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hr=new he,rd=new he,wl=new he,Tl=new he;class L_{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rd.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Tl.copy(this.origin).sub(rd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(wl),f=Tl.dot(this.direction),m=-Tl.dot(wl),p=Tl.lengthSq(),_=Math.abs(1-u*u);let S,g,M,A;if(_>0)if(S=u*m-f,g=u*f-m,A=l*_,S>=0)if(g>=-A)if(g<=A){const b=1/_;S*=b,g*=b,M=S*(S+u*g+2*f)+g*(u*S+g+2*m)+p}else g=l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*m)+p;else g=-l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*m)+p;else g<=-A?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-m),l),M=-S*S+g*(g+2*m)+p):g<=A?(S=0,g=Math.min(Math.max(-l,-m),l),M=g*(g+2*m)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-m),l),M=-S*S+g*(g+2*m)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(rd).addScaledVector(wl,g),M}intersectSphere(e,t){if(e.radius<0)return null;hr.subVectors(e.center,this.origin);const r=hr.dot(this.direction),o=hr.dot(hr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,m;const p=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,_=f.z,S=e.x-u.x,g=e.y-u.y,M=e.z-u.z,A=t.x-u.x,b=t.y-u.y,x=t.z-u.z,v=r.x-u.x,I=r.y-u.y,V=r.z-u.z,R=Math.abs(m),N=Math.abs(p),L=Math.abs(_);let F,E,P,k,q,$,ie,Y,ne,ge,ae,X;if(R>=N&&R>=L?(P=m,$=S,ne=A,X=v,m>=0?(F=p,E=_,k=g,q=M,ie=b,Y=x,ge=I,ae=V):(F=_,E=p,k=M,q=g,ie=x,Y=b,ge=V,ae=I)):N>=L?(P=p,$=g,ne=b,X=I,p>=0?(F=_,E=m,k=M,q=S,ie=x,Y=A,ge=V,ae=v):(F=m,E=_,k=S,q=M,ie=A,Y=x,ge=v,ae=V)):(P=_,$=M,ne=x,X=V,_>=0?(F=m,E=p,k=S,q=g,ie=A,Y=b,ge=v,ae=I):(F=p,E=m,k=g,q=S,ie=b,Y=A,ge=I,ae=v)),P===0)return null;const Q=F/P,ee=E/P,D=1/P,ce=k-Q*$,Se=q-ee*$,Xe=ie-Q*ne,Fe=Y-ee*ne,Ie=ge-Q*X,de=ae-ee*X,K=Ie*Fe-de*Xe,Re=ce*de-Se*Ie,Ye=Xe*Se-Fe*ce;if(o){if(K<0||Re<0||Ye<0)return null}else if((K<0||Re<0||Ye<0)&&(K>0||Re>0||Ye>0))return null;const Oe=K+Re+Ye;if(Oe===0)return null;const at=D*(K*$+Re*ne+Ye*X);return(Oe>0?at<0:at>0)?null:this.at(at/Oe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gm=new an,hs=new L_,Al=new vf,vm=new he,Cl=new he,Rl=new he,bl=new he,sd=new he,Pl=new he,_m=new he,Ll=new he;class mt extends Vn{constructor(e=new ci,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Pl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const _=f[m],S=l[m];_!==0&&(sd.fromBufferAttribute(S,e),u?Pl.addScaledVector(sd,_):Pl.addScaledVector(sd.sub(t),_))}t.add(Pl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(Al.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Al,vm)===null||hs.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(gm.copy(l).invert(),hs.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,b=g.length;A<b;A++){const x=g[A],v=u[x.materialIndex],I=Math.max(x.start,M.start),V=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let R=I,N=V;R<N;R+=3){const L=f.getX(R),F=f.getX(R+1),E=f.getX(R+2);o=Nl(this,v,e,r,p,_,S,L,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let x=A,v=b;x<v;x+=3){const I=f.getX(x),V=f.getX(x+1),R=f.getX(x+2);o=Nl(this,u,e,r,p,_,S,I,V,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let A=0,b=g.length;A<b;A++){const x=g[A],v=u[x.materialIndex],I=Math.max(x.start,M.start),V=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let R=I,N=V;R<N;R+=3){const L=R,F=R+1,E=R+2;o=Nl(this,v,e,r,p,_,S,L,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let x=A,v=b;x<v;x+=3){const I=x,V=x+1,R=x+2;o=Nl(this,u,e,r,p,_,S,I,V,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function N_(s,e,t,r,o,l,u,f){let m;if(e.side===Qn?m=r.intersectTriangle(u,l,o,!0,f):m=r.intersectTriangle(o,l,u,e.side===ys,f),m===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Nl(s,e,t,r,o,l,u,f,m,p){s.getVertexPosition(f,Cl),s.getVertexPosition(m,Rl),s.getVertexPosition(p,bl);const _=N_(s,e,t,r,Cl,Rl,bl,_m);if(_){const S=new he;Ii.getBarycoord(_m,Cl,Rl,bl,S),o&&(_.uv=Ii.getInterpolatedAttribute(o,f,m,p,S,new Dt)),l&&(_.uv1=Ii.getInterpolatedAttribute(l,f,m,p,S,new Dt)),u&&(_.normal=Ii.getInterpolatedAttribute(u,f,m,p,S,new he),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:m,c:p,normal:new he,materialIndex:0};Ii.getNormal(Cl,Rl,bl,g.normal),_.face=g,_.barycoord=S}return _}class D_ extends Gn{constructor(e=null,t=1,r=1,o,l,u,f,m,p=Pn,_=Pn,S,g){super(null,u,f,m,p,_,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ps=new vf,I_=new Dt(.5,.5),Dl=new he;class _f{constructor(e=new Xr,t=new Xr,r=new Xr,o=new Xr,l=new Xr,u=new Xr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],_=l[4],S=l[5],g=l[6],M=l[7],A=l[8],b=l[9],x=l[10],v=l[11],I=l[12],V=l[13],R=l[14],N=l[15];if(o[0].setComponents(p-u,M-_,v-A,N-I).normalize(),o[1].setComponents(p+u,M+_,v+A,N+I).normalize(),o[2].setComponents(p+f,M+S,v+b,N+V).normalize(),o[3].setComponents(p-f,M-S,v-b,N-V).normalize(),r)o[4].setComponents(m,g,x,R).normalize(),o[5].setComponents(p-m,M-g,v-x,N-R).normalize();else if(o[4].setComponents(p-m,M-g,v-x,N-R).normalize(),t===qi)o[5].setComponents(p+m,M+g,v+x,N+R).normalize();else if(t===uo)o[5].setComponents(m,g,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=I_.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mg extends Gn{constructor(e=[],t=Ms,r,o,l,u,f,m,p,_){super(e,t,r,o,l,u,f,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends Gn{constructor(e,t,r,o,l,u,f,m,p){super(e,t,r,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Gn{constructor(e,t,r=Ki,o,l,u,f=Pn,m=Pn,p,_=xr,S=1){if(_!==xr&&_!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class U_ extends fo{constructor(e,t=Ki,r=Ms,o,l,u=Pn,f=Pn,m,p=xr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eg extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends ci{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],_=[],S=[];let g=0,M=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(S,2));function A(b,x,v,I,V,R,N,L,F,E,P){const k=R/F,q=N/E,$=R/2,ie=N/2,Y=L/2,ne=F+1,ge=E+1;let ae=0,X=0;const Q=new he;for(let ee=0;ee<ge;ee++){const D=ee*q-ie;for(let ce=0;ce<ne;ce++){const Se=ce*k-$;Q[b]=Se*I,Q[x]=D*V,Q[v]=Y,p.push(Q.x,Q.y,Q.z),Q[b]=0,Q[x]=0,Q[v]=L>0?1:-1,_.push(Q.x,Q.y,Q.z),S.push(ce/F),S.push(1-ee/E),ae+=1}}for(let ee=0;ee<E;ee++)for(let D=0;D<F;D++){const ce=g+D+ne*ee,Se=g+D+ne*(ee+1),Xe=g+(D+1)+ne*(ee+1),Fe=g+(D+1)+ne*ee;m.push(ce,Se,Fe),m.push(Se,Xe,Fe),X+=6}f.addGroup(M,X,P),M+=X,g+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gs extends ci{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],_=t/2,S=Math.PI/2*e,g=t,M=2*S+g,A=r*2+l,b=o+1,x=new he,v=new he;for(let I=0;I<=A;I++){let V=0,R=0,N=0,L=0;if(I<=r){const P=I/r,k=P*Math.PI/2;R=-_-e*Math.cos(k),N=e*Math.sin(k),L=-e*Math.cos(k),V=P*S}else if(I<=r+l){const P=(I-r)/l;R=-_+P*t,N=e,L=0,V=S+P*g}else{const P=(I-r-l)/r,k=P*Math.PI/2;R=_+e*Math.sin(k),N=e*Math.cos(k),L=e*Math.sin(k),V=S+g+P*S}const F=Math.max(0,Math.min(1,V/M));let E=0;I===0?E=.5/o:I===A&&(E=-.5/o);for(let P=0;P<=o;P++){const k=P/o,q=k*Math.PI*2,$=Math.sin(q),ie=Math.cos(q);v.x=-N*ie,v.y=R,v.z=N*$,f.push(v.x,v.y,v.z),x.set(-N*ie,L,N*$),x.normalize(),m.push(x.x,x.y,x.z),p.push(k+E,F)}if(I>0){const P=(I-1)*b;for(let k=0;k<o;k++){const q=P+k,$=P+k+1,ie=I*b+k,Y=I*b+k+1;u.push(q,$,ie),u.push($,Y,ie)}}}this.setIndex(u),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Di extends ci{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],S=[],g=[],M=[];let A=0;const b=[],x=r/2;let v=0;I(),u===!1&&(e>0&&V(!0),t>0&&V(!1)),this.setIndex(_),this.setAttribute("position",new un(S,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(M,2));function I(){const R=new he,N=new he;let L=0;const F=(t-e)/r;for(let E=0;E<=l;E++){const P=[],k=E/l,q=k*(t-e)+e;for(let $=0;$<=o;$++){const ie=$/o,Y=ie*m+f,ne=Math.sin(Y),ge=Math.cos(Y);N.x=q*ne,N.y=-k*r+x,N.z=q*ge,S.push(N.x,N.y,N.z),R.set(ne,F,ge).normalize(),g.push(R.x,R.y,R.z),M.push(ie,1-k),P.push(A++)}b.push(P)}for(let E=0;E<o;E++)for(let P=0;P<l;P++){const k=b[P][E],q=b[P+1][E],$=b[P+1][E+1],ie=b[P][E+1];(e>0||P!==0)&&(_.push(k,q,ie),L+=3),(t>0||P!==l-1)&&(_.push(q,$,ie),L+=3)}p.addGroup(v,L,0),v+=L}function V(R){const N=A,L=new Dt,F=new he;let E=0;const P=R===!0?e:t,k=R===!0?1:-1;for(let $=1;$<=o;$++)S.push(0,x*k,0),g.push(0,k,0),M.push(.5,.5),A++;const q=A;for(let $=0;$<=o;$++){const Y=$/o*m+f,ne=Math.cos(Y),ge=Math.sin(Y);F.x=P*ge,F.y=x*k,F.z=P*ne,S.push(F.x,F.y,F.z),g.push(0,k,0),L.x=ne*.5+.5,L.y=ge*.5*k+.5,M.push(L.x,L.y),A++}for(let $=0;$<o;$++){const ie=N+$,Y=q+$;R===!0?_.push(Y,Y+1,ie):_.push(Y+1,Y,ie),E+=3}p.addGroup(v,E,R===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xf extends Di{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new xf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends ci{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),m=Math.floor(o),p=f+1,_=m+1,S=e/f,g=t/m,M=[],A=[],b=[],x=[];for(let v=0;v<_;v++){const I=v*g-u;for(let V=0;V<p;V++){const R=V*S-l;A.push(R,-I,0),b.push(0,0,1),x.push(V/f),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<f;I++){const V=I+p*v,R=I+p*(v+1),N=I+1+p*(v+1),L=I+1+p*v;M.push(V,R,L),M.push(R,N,L)}this.setIndex(M),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class pr extends ci{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let p=0;const _=[],S=new he,g=new he,M=[],A=[],b=[],x=[];for(let v=0;v<=r;v++){const I=[],V=v/r,R=u+V*f,N=e*Math.cos(R),L=Math.sqrt(e*e-N*N);let F=0;v===0&&u===0?F=.5/t:v===r&&m===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){const P=E/t,k=o+P*l;S.x=-L*Math.cos(k),S.y=N,S.z=L*Math.sin(k),A.push(S.x,S.y,S.z),g.copy(S).normalize(),b.push(g.x,g.y,g.z),x.push(P+F,1-V),I.push(p++)}_.push(I)}for(let v=0;v<r;v++)for(let I=0;I<t;I++){const V=_[v][I+1],R=_[v][I],N=_[v+1][I],L=_[v+1][I+1];(v!==0||u>0)&&M.push(V,R,L),(v!==r-1||m<Math.PI)&&M.push(R,N,L)}this.setIndex(M),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends ci{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const m=[],p=[],_=[],S=[],g=new he,M=new he,A=new he;for(let b=0;b<=r;b++){const x=u+b/r*f;for(let v=0;v<=o;v++){const I=v/o*l;M.x=(e+t*Math.cos(x))*Math.cos(I),M.y=(e+t*Math.cos(x))*Math.sin(I),M.z=t*Math.sin(x),p.push(M.x,M.y,M.z),g.x=e*Math.cos(I),g.y=e*Math.sin(I),A.subVectors(M,g).normalize(),_.push(A.x,A.y,A.z),S.push(v/o),S.push(b/r)}}for(let b=1;b<=r;b++)for(let x=1;x<=o;x++){const v=(o+1)*b+x-1,I=(o+1)*(b-1)+x-1,V=(o+1)*(b-1)+x,R=(o+1)*b+x;m.push(v,I,R),m.push(I,V,R)}this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function pa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(xm(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(xm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Xn(s){const e={};for(let t=0;t<s.length;t++){const r=pa(s[t]);for(const o in r)e[o]=r[o]}return e}function xm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function F_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const O_={clone:pa,merge:Xn};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Dt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new he().fromArray(o.value);break;case"v4":this.uniforms[r].value=new nn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(o.value);break;case"m4":this.uniforms[r].value=new an().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class z_ extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ad extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G_ extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V_ extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sf extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const od=new an,Sm=new he,ym=new he;class Tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _f,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Sm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sm),ym.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ym),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){od.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(od,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===uo||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new he,Ul=new ma,Vi=new he;class Ag extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ul,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Il,Ul,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new he,Mm=new Dt,Em=new Dt;class oi extends Ag{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,Mm,Em),t.subVectors(Em,Mm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class H_ extends Tg{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class wm extends Sf{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new H_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class yf extends Ag{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,m=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W_ extends Tg{constructor(){super(new yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends Sf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new W_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Y_ extends Sf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const sa=-90,aa=1;class q_ extends Vn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(sa,aa,e,t);o.layers=this.layers,this.add(o);const l=new oi(sa,aa,e,t);l.layers=this.layers,this.add(l);const u=new oi(sa,aa,e,t);u.layers=this.layers,this.add(u);const f=new oi(sa,aa,e,t);f.layers=this.layers,this.add(f);const m=new oi(sa,aa,e,t);m.layers=this.layers,this.add(m);const p=new oi(sa,aa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,_]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(S,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class j_ extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Af=class Af{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Af.prototype.isMatrix2=!0;let Tm=Af;function Am(s,e,t,r){const o=K_(r);switch(t){case hg:return s*e;case mg:return s*e/o.components*o.byteLength;case uf:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case df:return s*e*2/o.components*o.byteLength;case pg:return s*e*3/o.components*o.byteLength;case Ui:return s*e*4/o.components*o.byteLength;case ff:return s*e*4/o.components*o.byteLength;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:case Ad:return Math.max(s,16)*Math.max(e,8)/4;case Ed:case Td:return Math.max(s,8)*Math.max(e,8)/2;case Cd:case Rd:case Pd:case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bd:case Wl:case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qd:case jd:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $d:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xl:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K_(s){switch(s){case li:case cg:return{byteLength:1,components:1};case lo:case ug:case $i:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case Ki:case of:case Yi:return{byteLength:4,components:1};case dg:case fg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function $_(s){const e=new WeakMap;function t(f,m){const p=f.array,_=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,_),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,m,p){const _=m.array,S=m.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,_);else{S.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<S.length;M++){const A=S[g],b=S[M];b.start<=A.start+A.count+1?A.count=Math.max(A.count,b.start+b.count-A.start):(++g,S[g]=b)}S.length=g+1;for(let M=0,A=S.length;M<A;M++){const b=S[M];s.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
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
#endif`,Kx=`uniform sampler2D dfgLUT;
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
}`,$x=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oS=`#if defined( USE_POINTS_UV )
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
#endif`,lS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`#ifdef USE_MORPHTARGETS
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
#endif`,pS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SS=`#ifdef USE_NORMALMAP
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
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FS=`float getShadowMask() {
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
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,BS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zS=`#ifdef USE_SKINNING
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
#endif`,GS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JS=`uniform sampler2D t2D;
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,uy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
}`,hy=`#define LAMBERT
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
}`,py=`#define LAMBERT
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
}`,my=`#define MATCAP
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
}`,gy=`#define MATCAP
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
}`,vy=`#define NORMAL
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
}`,_y=`#define NORMAL
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
}`,xy=`#define PHONG
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
}`,Sy=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,My=`#define STANDARD
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
}`,Ey=`#define TOON
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
}`,wy=`#define TOON
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
}`,Ty=`uniform float size;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 color;
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
}`,by=`uniform float rotation;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ax,begin_vertex:ox,beginnormal_vertex:lx,bsdfs:cx,iridescence_fragment:ux,bumpmap_pars_fragment:dx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:vx,color_pars_vertex:_x,color_vertex:xx,common:Sx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:Ex,displacementmap_vertex:wx,emissivemap_fragment:Tx,emissivemap_pars_fragment:Ax,colorspace_fragment:Cx,colorspace_pars_fragment:Rx,envmap_fragment:bx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Lx,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Hx,envmap_vertex:Dx,fog_vertex:Ix,fog_pars_vertex:Ux,fog_fragment:Fx,fog_pars_fragment:Ox,gradientmap_pars_fragment:kx,lightmap_pars_fragment:Bx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Vx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:Yx,lights_phong_pars_fragment:qx,lights_physical_fragment:jx,lights_physical_pars_fragment:Kx,lights_fragment_begin:$x,lights_fragment_maps:Zx,lights_fragment_end:Jx,lightprobes_pars_fragment:Qx,logdepthbuf_fragment:eS,logdepthbuf_pars_fragment:tS,logdepthbuf_pars_vertex:nS,logdepthbuf_vertex:iS,map_fragment:rS,map_pars_fragment:sS,map_particle_fragment:aS,map_particle_pars_fragment:oS,metalnessmap_fragment:lS,metalnessmap_pars_fragment:cS,morphinstance_vertex:uS,morphcolor_vertex:dS,morphnormal_vertex:fS,morphtarget_pars_vertex:hS,morphtarget_vertex:pS,normal_fragment_begin:mS,normal_fragment_maps:gS,normal_pars_fragment:vS,normal_pars_vertex:_S,normal_vertex:xS,normalmap_pars_fragment:SS,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:wS,opaque_fragment:TS,packing:AS,premultiplied_alpha_fragment:CS,project_vertex:RS,dithering_fragment:bS,dithering_pars_fragment:PS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:DS,shadowmap_pars_vertex:IS,shadowmap_vertex:US,shadowmask_pars_fragment:FS,skinbase_vertex:OS,skinning_pars_vertex:kS,skinning_vertex:BS,skinnormal_vertex:zS,specularmap_fragment:GS,specularmap_pars_fragment:VS,tonemapping_fragment:HS,tonemapping_pars_fragment:WS,transmission_fragment:XS,transmission_pars_fragment:YS,uv_pars_fragment:qS,uv_pars_vertex:jS,uv_vertex:KS,worldpos_vertex:$S,background_vert:ZS,background_frag:JS,backgroundCube_vert:QS,backgroundCube_frag:ey,cube_vert:ty,cube_frag:ny,depth_vert:iy,depth_frag:ry,distance_vert:sy,distance_frag:ay,equirect_vert:oy,equirect_frag:ly,linedashed_vert:cy,linedashed_frag:uy,meshbasic_vert:dy,meshbasic_frag:fy,meshlambert_vert:hy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:vy,meshnormal_frag:_y,meshphong_vert:xy,meshphong_frag:Sy,meshphysical_vert:yy,meshphysical_frag:My,meshtoon_vert:Ey,meshtoon_frag:wy,points_vert:Ty,points_frag:Ay,shadow_vert:Cy,shadow_frag:Ry,sprite_vert:by,sprite_frag:Py},We={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new he},probesMax:{value:new he},probesResolution:{value:new he}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Wi={basic:{uniforms:Xn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Xn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Xn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Xn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Xn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Xn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Xn([We.points,We.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Xn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Xn([We.common,We.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Xn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Xn([We.sprite,We.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Xn([We.common,We.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Xn([We.lights,We.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Wi.physical={uniforms:Xn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Fl={r:0,b:0,g:0},Ly=new an,Rg=new _t;Rg.set(-1,0,0,0,1,0,0,0,1);function Ny(s,e,t,r,o,l){const u=new Rt(0);let f=o===!0?0:1,m,p,_=null,S=0,g=null;function M(I){let V=I.isScene===!0?I.background:null;if(V&&V.isTexture){const R=I.backgroundBlurriness>0;V=e.get(V,R)}return V}function A(I){let V=!1;const R=M(I);R===null?x(u,f):R&&R.isColor&&(x(R,1),V=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||V)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(I,V){const R=M(V);R&&(R.isCubeTexture||R.mapping===Zl)?(p===void 0&&(p=new mt(new ai(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:pa(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(V.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Rg),p.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Ht,(_!==R||S!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,S=R.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new mt(new ha(2,2),new Oi({name:"BackgroundMaterial",uniforms:pa(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||S!==R.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=R,S=R.version,g=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function x(I,V){I.getRGB(Fl,wg(s)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,V,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,V=1){u.set(I),f=V,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(I){f=I,x(u,f)},render:A,addToRenderList:b,dispose:v}}function Dy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(q,$,ie,Y,ne){let ge=!1;const ae=S(q,Y,ie,$);l!==ae&&(l=ae,p(l.object)),ge=M(q,Y,ie,ne),ge&&A(q,Y,ie,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,R(q,$,ie,Y),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return s.createVertexArray()}function p(q){return s.bindVertexArray(q)}function _(q){return s.deleteVertexArray(q)}function S(q,$,ie,Y){const ne=Y.wireframe===!0;let ge=r[$.id];ge===void 0&&(ge={},r[$.id]=ge);const ae=q.isInstancedMesh===!0?q.id:0;let X=ge[ae];X===void 0&&(X={},ge[ae]=X);let Q=X[ie.id];Q===void 0&&(Q={},X[ie.id]=Q);let ee=Q[ne];return ee===void 0&&(ee=g(m()),Q[ne]=ee),ee}function g(q){const $=[],ie=[],Y=[];for(let ne=0;ne<t;ne++)$[ne]=0,ie[ne]=0,Y[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ie,attributeDivisors:Y,object:q,attributes:{},index:null}}function M(q,$,ie,Y){const ne=l.attributes,ge=$.attributes;let ae=0;const X=ie.getAttributes();for(const Q in X)if(X[Q].location>=0){const D=ne[Q];let ce=ge[Q];if(ce===void 0&&(Q==="instanceMatrix"&&q.instanceMatrix&&(ce=q.instanceMatrix),Q==="instanceColor"&&q.instanceColor&&(ce=q.instanceColor)),D===void 0||D.attribute!==ce||ce&&D.data!==ce.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Y}function A(q,$,ie,Y){const ne={},ge=$.attributes;let ae=0;const X=ie.getAttributes();for(const Q in X)if(X[Q].location>=0){let D=ge[Q];D===void 0&&(Q==="instanceMatrix"&&q.instanceMatrix&&(D=q.instanceMatrix),Q==="instanceColor"&&q.instanceColor&&(D=q.instanceColor));const ce={};ce.attribute=D,D&&D.data&&(ce.data=D.data),ne[Q]=ce,ae++}l.attributes=ne,l.attributesNum=ae,l.index=Y}function b(){const q=l.newAttributes;for(let $=0,ie=q.length;$<ie;$++)q[$]=0}function x(q){v(q,0)}function v(q,$){const ie=l.newAttributes,Y=l.enabledAttributes,ne=l.attributeDivisors;ie[q]=1,Y[q]===0&&(s.enableVertexAttribArray(q),Y[q]=1),ne[q]!==$&&(s.vertexAttribDivisor(q,$),ne[q]=$)}function I(){const q=l.newAttributes,$=l.enabledAttributes;for(let ie=0,Y=$.length;ie<Y;ie++)$[ie]!==q[ie]&&(s.disableVertexAttribArray(ie),$[ie]=0)}function V(q,$,ie,Y,ne,ge,ae){ae===!0?s.vertexAttribIPointer(q,$,ie,ne,ge):s.vertexAttribPointer(q,$,ie,Y,ne,ge)}function R(q,$,ie,Y){b();const ne=Y.attributes,ge=ie.getAttributes(),ae=$.defaultAttributeValues;for(const X in ge){const Q=ge[X];if(Q.location>=0){let ee=ne[X];if(ee===void 0&&(X==="instanceMatrix"&&q.instanceMatrix&&(ee=q.instanceMatrix),X==="instanceColor"&&q.instanceColor&&(ee=q.instanceColor)),ee!==void 0){const D=ee.normalized,ce=ee.itemSize,Se=e.get(ee);if(Se===void 0)continue;const Xe=Se.buffer,Fe=Se.type,Ie=Se.bytesPerElement,de=Fe===s.INT||Fe===s.UNSIGNED_INT||ee.gpuType===of;if(ee.isInterleavedBufferAttribute){const K=ee.data,Re=K.stride,Ye=ee.offset;if(K.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Q.locationSize;Oe++)v(Q.location+Oe,K.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Oe=0;Oe<Q.locationSize;Oe++)x(Q.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let Oe=0;Oe<Q.locationSize;Oe++)V(Q.location+Oe,ce/Q.locationSize,Fe,D,Re*Ie,(Ye+ce/Q.locationSize*Oe)*Ie,de)}else{if(ee.isInstancedBufferAttribute){for(let K=0;K<Q.locationSize;K++)v(Q.location+K,ee.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let K=0;K<Q.locationSize;K++)x(Q.location+K);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let K=0;K<Q.locationSize;K++)V(Q.location+K,ce/Q.locationSize,Fe,D,ce*Ie,ce/Q.locationSize*K*Ie,de)}}else if(ae!==void 0){const D=ae[X];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(Q.location,D);break;case 3:s.vertexAttrib3fv(Q.location,D);break;case 4:s.vertexAttrib4fv(Q.location,D);break;default:s.vertexAttrib1fv(Q.location,D)}}}}I()}function N(){P();for(const q in r){const $=r[q];for(const ie in $){const Y=$[ie];for(const ne in Y){const ge=Y[ne];for(const ae in ge)_(ge[ae].object),delete ge[ae];delete Y[ne]}}delete r[q]}}function L(q){if(r[q.id]===void 0)return;const $=r[q.id];for(const ie in $){const Y=$[ie];for(const ne in Y){const ge=Y[ne];for(const ae in ge)_(ge[ae].object),delete ge[ae];delete Y[ne]}}delete r[q.id]}function F(q){for(const $ in r){const ie=r[$];for(const Y in ie){const ne=ie[Y];if(ne[q.id]===void 0)continue;const ge=ne[q.id];for(const ae in ge)_(ge[ae].object),delete ge[ae];delete ne[q.id]}}}function E(q){for(const $ in r){const ie=r[$],Y=q.isInstancedMesh===!0?q.id:0,ne=ie[Y];if(ne!==void 0){for(const ge in ne){const ae=ne[ge];for(const X in ae)_(ae[X].object),delete ae[X];delete ne[ge]}delete ie[Y],Object.keys(ie).length===0&&delete r[$]}}}function P(){k(),u=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:P,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:x,disableUnusedAttributes:I}}function Iy(s,e,t){let r;function o(m){r=m}function l(m,p){s.drawArrays(r,m,p),t.update(p,r,1)}function u(m,p,_){_!==0&&(s.drawArraysInstanced(r,m,p,_),t.update(p,r,_))}function f(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Uy(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ui&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const E=F===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==li&&F!==Yi&&!E&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=m(p);_!==p&&(gt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),V=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:I,maxVaryings:V,maxFragmentUniforms:R,maxSamples:N,samples:L}}function Fy(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Xr,f=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=_(S,g,0)},this.setState=function(S,g,M){const A=S.clippingPlanes,b=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||A===null||A.length===0||l&&!x)l?_(null):p();else{const I=l?0:r,V=I*4;let R=v.clippingState||null;m.value=R,R=_(A,g,V,M);for(let N=0;N!==V;++N)R[N]=t[N];v.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,g,M,A){const b=S!==null?S.length:0;let x=null;if(b!==0){if(x=m.value,A!==!0||x===null){const v=M+b*4,I=g.matrixWorldInverse;f.getNormalMatrix(I),(x===null||x.length<v)&&(x=new Float32Array(v));for(let V=0,R=M;V!==b;++V,R+=4)u.copy(S[V]).applyMatrix4(I,f),u.normal.toArray(x,R),x[R+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const ca=4,Oy=6,ky=20,By=256,eo=new yf,Cm=new Rt;let ld=null,cd=0,ud=0,dd=!1;const zy=new he,ms=new he;class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=zy}=l;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:$i,format:Ui,colorSpace:Yl,depthBuffer:!1},o=bm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gy(l)),this._blurMaterial=Hy(l,e,t),this._ggxMaterial=Vy(l,e,t)}return o}_compileMaterial(e){const t=new mt(new ci,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,r,o,l){const m=new oi(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(Cm),S.toneMapping=ji,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new ai,new pn({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let v=!1;const I=e.background;I?I.isColor&&(x.color.copy(I),e.background=null,v=!0):(x.color.copy(Cm),v=!0);for(let V=0;V<6;V++){const R=V%3;R===0?(m.up.set(0,p[V],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+_[V],l.y,l.z)):R===1?(m.up.set(0,0,p[V]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+_[V],l.z)):(m.up.set(0,p[V],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+_[V]));const N=this._cubeSize;oa(o,R*N,V>2?N:0,N,N),S.setRenderTarget(o),v&&S.render(b,m),S.render(e,m)}S.toneMapping=M,S.autoClear=g,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ms||e.mapping===fa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;oa(t,0,0,3*m,2*m),r.setRenderTarget(t),r.render(u,eo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-_*_),g=p*1.25,M=S*g,{_lodMax:A}=this,b=this._sizeLods[r],x=3*b*(r>A-ca?r-A+ca:0),v=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-t,oa(l,x,v,3*b,2*b),o.setRenderTarget(l),o.render(f,eo),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=A-r,oa(e,x,v,3*b,2*b),o.setRenderTarget(e),o.render(f,eo)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],S=3*_*(o>this._lodMax-ca?o-this._lodMax+ca:0),g=4*(this._cubeSize-_);oa(t,S,g,3*_,2*_),u.setRenderTarget(t),u.render(m,eo)}}function Gy(s){const e=[],t=[];let r=s;const o=s-ca+1+Oy;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),m=-f,p=1+f,_=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,g=6,M=3,A=new Float32Array(M*g*S),b=new Float32Array(M*g*S);for(let v=0;v<S;v++){const I=v%3*2/3-1,V=v>2?0:-1,R=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];A.set(R,M*g*v);for(let N=0;N<g;N++){const L=_[N*2]*2-1,F=_[N*2+1]*2-1;v===0?ms.set(1,F,L):v===1?ms.set(-L,1,-F):v===2?ms.set(-L,F,1):v===3?ms.set(-1,F,-L):v===4?ms.set(-L,-1,F):ms.set(L,F,-1),ms.toArray(b,(v*g+N)*M)}}const x=new ci;x.setAttribute("position",new _r(A,M)),x.setAttribute("outputDirection",new _r(b,M)),t.push(new mt(x,null)),r>ca&&r--}return{lodMeshes:t,sizeLods:e}}function bm(s,e,t){const r=new Fi(s,e,t);return r.texture.mapping=Zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function oa(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function Vy(s,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Hy(s,e,t){return new Oi({name:"SphericalGaussianBlur",defines:{SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Pm(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Lm(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bg extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ai(5,5,5),l=new Oi({name:"CubemapFromEquirect",uniforms:pa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:gr});l.uniforms.tEquirect.value=t;const u=new mt(o,l),f=t.minFilter;return t.minFilter===xs&&(t.minFilter=zn),new q_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function Wy(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Iu||M===Uu)if(e.has(g)){const A=e.get(g).texture;return f(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const b=new bg(A.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",p),f(b.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,A=M===Iu||M===Uu,b=M===Ms||M===fa;if(A||b){let x=t.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Rm(s)),x=A?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const I=g.image;return A&&I&&I.height>0||b&&I&&m(I)?(r===null&&(r=new Rm(s)),x=A?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,M){return M===Iu?g.mapping=Ms:M===Uu&&(g.mapping=fa),g}function m(g){let M=0;const A=6;for(let b=0;b<A;b++)g[b]!==void 0&&M++;return M===A}function p(g){const M=g.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function Xy(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ua("WebGLRenderer: "+r+" extension not supported."),o}}}function Yy(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(S){const g=[],M=S.index,A=S.attributes.position;let b=0;if(A===void 0)return;if(M!==null){const I=M.array;b=M.version;for(let V=0,R=I.length;V<R;V+=3){const N=I[V+0],L=I[V+1],F=I[V+2];g.push(N,L,L,F,F,N)}}else{const I=A.array;b=A.version;for(let V=0,R=I.length/3-1;V<R;V+=3){const N=V+0,L=V+1,F=V+2;g.push(N,L,L,F,F,N)}}const x=new(A.count>=65535?yg:Sg)(g,1);x.version=b;const v=l.get(S);v&&e.remove(v),l.set(S,x)}function _(S){const g=l.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:m,getWireframeAttribute:_}}function qy(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function m(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function p(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,S*u,M),t.update(g,r,M))}function _(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,M);let b=0;for(let x=0;x<M;x++)b+=g[x];t.update(b,r,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function jy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Bt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Ky(s,e,t){const r=new WeakMap,o=new nn;function l(u,f,m){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let k=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var M=k;g!==void 0&&g.texture.dispose();const A=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],V=f.morphAttributes.color||[];let R=0;A===!0&&(R=1),b===!0&&(R=2),x===!0&&(R=3);let N=f.attributes.position.count*R,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*L*4*S),E=new vg(F,N,L,S);E.type=Yi,E.needsUpdate=!0;const P=R*4;for(let q=0;q<S;q++){const $=v[q],ie=I[q],Y=V[q],ne=N*L*4*q;for(let ge=0;ge<$.count;ge++){const ae=ge*P;A===!0&&(o.fromBufferAttribute($,ge),F[ne+ae+0]=o.x,F[ne+ae+1]=o.y,F[ne+ae+2]=o.z,F[ne+ae+3]=0),b===!0&&(o.fromBufferAttribute(ie,ge),F[ne+ae+4]=o.x,F[ne+ae+5]=o.y,F[ne+ae+6]=o.z,F[ne+ae+7]=0),x===!0&&(o.fromBufferAttribute(Y,ge),F[ne+ae+8]=o.x,F[ne+ae+9]=o.y,F[ne+ae+10]=o.z,F[ne+ae+11]=Y.itemSize===4?o.w:1)}}g={count:S,texture:E,size:new Dt(N,L)},r.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let x=0;x<p.length;x++)A+=p[x];const b=f.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function $y(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return g}function f(){l=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const Zy={[ng]:"LINEAR_TONE_MAPPING",[ig]:"REINHARD_TONE_MAPPING",[rg]:"CINEON_TONE_MAPPING",[af]:"ACES_FILMIC_TONE_MAPPING",[ag]:"AGX_TONE_MAPPING",[og]:"NEUTRAL_TONE_MAPPING",[sg]:"CUSTOM_TONE_MAPPING"};function Jy(s,e,t,r,o,l){const u=new Fi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new ci;p.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new un([0,2,0,0,2,0],2));const _=new z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new mt(p,_),g=new yf(-1,1,1,-1,0,1);let M=null,A=null,b=!1,x,v=null,I=[],V=!1;this.setSize=function(R,N){u.setSize(R,N),f!==null&&f.setSize(R,N),m!==null&&m.setSize(R,N);for(let L=0;L<I.length;L++){const F=I[L];F.setSize&&F.setSize(R,N)}},this.setEffects=function(R){I=R,V=I.length>0&&I[0].isRenderPass===!0;const N=u.width,L=u.height;I.length>0&&f===null&&(f=new Fi(N,L,{type:$i,depthBuffer:!1,stencilBuffer:!1}),m=new Fi(N,L,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<I.length;F++){const E=I[F];E.setSize&&E.setSize(N,L)}},this.begin=function(R,N){if(b||R.toneMapping===ji&&I.length===0)return!1;if(v=N,N!==null){const L=N.width,F=N.height;(u.width!==L||u.height!==F)&&this.setSize(L,F)}return V===!1&&R.setRenderTarget(u),x=R.toneMapping,R.toneMapping=ji,!0},this.hasRenderPass=function(){return V},this.end=function(R,N){R.toneMapping=x,b=!0;let L=u,F=f;for(let E=0;E<I.length;E++){const P=I[E];P.enabled!==!1&&(P.render(R,F,L,N),P.needsSwap!==!1&&(L=F,F=F===f?m:f))}if(M!==R.outputColorSpace||A!==R.toneMapping){M=R.outputColorSpace,A=R.toneMapping,_.defines={},Lt.getTransfer(M)===Ht&&(_.defines.SRGB_TRANSFER="");const E=Zy[A];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(v),R.render(S,g),v=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),_.dispose()}}const Pg=new Gn,tf=new fo(1,1),Lg=new vg,Ng=new g_,Dg=new Mg,Nm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function ga(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Nm[o];if(l===void 0&&(l=new Float32Array(o),Nm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ec(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Qy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function iM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,r))return;Fm.set(r),s.uniformMatrix2fv(this.addr,!1,Fm),yn(t,r)}}function rM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),yn(t,r)}}function sM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,r))return;Im.set(r),s.uniformMatrix4fv(this.addr,!1,Im),yn(t,r)}}function aM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function uM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function pM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(tf.compareFunction=t.isReversedDepthBuffer()?pf:hf,l=tf):l=Pg,t.setTexture2D(e||l,o)}function mM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Ng,o)}function gM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Dg,o)}function vM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Lg,o)}function _M(s){switch(s){case 5126:return Qy;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return aM;case 35667:case 35671:return oM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return dM;case 36295:return fM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return vM}}function xM(s,e){s.uniform1fv(this.addr,e)}function SM(s,e){const t=ga(e,this.size,2);s.uniform2fv(this.addr,t)}function yM(s,e){const t=ga(e,this.size,3);s.uniform3fv(this.addr,t)}function MM(s,e){const t=ga(e,this.size,4);s.uniform4fv(this.addr,t)}function EM(s,e){const t=ga(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wM(s,e){const t=ga(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TM(s,e){const t=ga(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function RM(s,e){s.uniform3iv(this.addr,e)}function bM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function LM(s,e){s.uniform2uiv(this.addr,e)}function NM(s,e){s.uniform3uiv(this.addr,e)}function DM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=tf:u=Pg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function UM(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Ng,l[u])}function FM(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Dg,l[u])}function OM(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Lg,l[u])}function kM(s){switch(s){case 5126:return xM;case 35664:return SM;case 35665:return yM;case 35666:return MM;case 35674:return EM;case 35675:return wM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return bM;case 5125:return PM;case 36294:return LM;case 36295:return NM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}}class zM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Om(s,e){s.seq.push(e),s.map[e.id]=e}function VM(s,e,t){const r=s.name,o=r.length;for(fd.lastIndex=0;;){const l=fd.exec(r),u=fd.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){Om(t,p===void 0?new BM(f,s,e):new zM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new GM(f),Om(t,S)),t=S}}}class Hl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);VM(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function km(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const HM=37297;let WM=0;function XM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Bm=new _t;function YM(s){Lt._getMatrix(Bm,Lt.workingColorSpace,s);const e=`mat3( ${Bm.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+XM(s.getShaderSource(e),f)}else return l}function qM(s,e){const t=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jM={[ng]:"Linear",[ig]:"Reinhard",[rg]:"Cineon",[af]:"ACESFilmic",[ag]:"AgX",[og]:"Neutral",[sg]:"Custom"};function KM(s,e){const t=jM[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ol=new he;function $M(){Lt.getLuminanceCoefficients(Ol);const s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function JM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function QM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function io(s){return s!==""}function Gm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(s){return s.replace(eE,nE)}const tE=new Map;function nE(s,e){let t=Et[e];if(t===void 0){const r=tE.get(e);if(r!==void 0)t=Et[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nf(t)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(iE,rE)}function rE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Wm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const sE={[kl]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function aE(s){return sE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oE={[Ms]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function lE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":oE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const cE={[fa]:"ENVMAP_MODE_REFRACTION"};function uE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dE={[tg]:"ENVMAP_BLENDING_MULTIPLY",[qv]:"ENVMAP_BLENDING_MIX",[jv]:"ENVMAP_BLENDING_ADD"};function fE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":dE[s.combine]||"ENVMAP_BLENDING_NONE"}function hE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function pE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=aE(t),p=lE(t),_=uE(t),S=fE(t),g=hE(t),M=ZM(t),A=JM(l),b=o.createProgram();let x,v,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(io).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(io).join(`
`),v.length>0&&(v+=`
`)):(x=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),v=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?Et.tonemapping_pars_fragment:"",t.toneMapping!==ji?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),$M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),u=nf(u),u=Gm(u,t),u=Vm(u,t),f=nf(f),f=Gm(f,t),f=Vm(f,t),u=Hm(u),f=Hm(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const V=I+x+u,R=I+v+f,N=km(o,o.VERTEX_SHADER,V),L=km(o,o.FRAGMENT_SHADER,R);o.attachShader(b,N),o.attachShader(b,L),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function F(q){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(b)||"",ie=o.getShaderInfoLog(N)||"",Y=o.getShaderInfoLog(L)||"",ne=$.trim(),ge=ie.trim(),ae=Y.trim();let X=!0,Q=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,N,L);else{const ee=zm(o,N,"vertex"),D=zm(o,L,"fragment");Bt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+ne+`
`+ee+`
`+D)}else ne!==""?gt("WebGLProgram: Program Info Log:",ne):(ge===""||ae==="")&&(Q=!1);Q&&(q.diagnostics={runnable:X,programLog:ne,vertexShader:{log:ge,prefix:x},fragmentShader:{log:ae,prefix:v}})}o.deleteShader(N),o.deleteShader(L),E=new Hl(o,b),P=QM(o,b)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(b,HM)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=L,this}let mE=0;class gE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vE(e),t.set(e,r)),r}}class vE{constructor(e){this.id=mE++,this.code=e,this.usedTimes=0}}function _E(s){return s===ws||s===Wl||s===Xl}function xE(s,e,t,r,o,l){const u=new _g,f=new gE,m=new Set,p=[],_=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function b(E,P,k,q,$,ie){const Y=q.fog,ne=$.geometry,ge=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=e.get(E.envMap||ge,ae),Q=X&&X.mapping===Zl?X.image.height:null,ee=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&gt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const D=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ce=D!==void 0?D.length:0;let Se=0;ne.morphAttributes.position!==void 0&&(Se=1),ne.morphAttributes.normal!==void 0&&(Se=2),ne.morphAttributes.color!==void 0&&(Se=3);let Xe,Fe,Ie,de;if(ee){const At=Wi[ee];Xe=At.vertexShader,Fe=At.fragmentShader}else{Xe=E.vertexShader,Fe=E.fragmentShader;const At=f.getVertexShaderStage(E),Ct=f.getFragmentShaderStage(E);f.update(E,At,Ct),Ie=At.id,de=Ct.id}const K=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ye=$.isInstancedMesh===!0,Oe=$.isBatchedMesh===!0,at=!!E.map,vt=!!E.matcap,Ge=!!X,ut=!!E.aoMap,st=!!E.lightMap,ke=!!E.bumpMap&&E.wireframe===!1,dt=!!E.normalMap,xt=!!E.displacementMap,It=!!E.emissiveMap,rt=!!E.metalnessMap,Ft=!!E.roughnessMap,j=E.anisotropy>0,Xt=E.clearcoat>0,wt=E.dispersion>0,U=E.retroreflectivity>0,y=E.iridescence>0,J=E.sheen>0,ue=E.transmission>0,me=j&&!!E.anisotropyMap,we=Xt&&!!E.clearcoatMap,Ne=Xt&&!!E.clearcoatNormalMap,xe=Xt&&!!E.clearcoatRoughnessMap,C=y&&!!E.iridescenceMap,te=y&&!!E.iridescenceThicknessMap,ye=J&&!!E.sheenColorMap,oe=J&&!!E.sheenRoughnessMap,Me=!!E.specularMap,B=!!E.specularColorMap,$e=!!E.specularIntensityMap,Be=ue&&!!E.transmissionMap,H=ue&&!!E.thicknessMap,De=!!E.gradientMap,_e=!!E.alphaMap,Ce=E.alphaTest>0,Pe=!!E.alphaHash,Ee=!!E.extensions;let He=ji;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=s.toneMapping);const je={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:Fe,defines:E.defines,customVertexShaderID:Ie,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Oe,batchingColor:Oe&&$._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&$.instanceColor!==null,instancingMorph:Ye&&$.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:vt,envMap:Ge,envMapMode:Ge&&X.mapping,envMapCubeUVHeight:Q,aoMap:ut,lightMap:st,bumpMap:ke,normalMap:dt,displacementMap:xt,emissiveMap:It,normalMapObjectSpace:dt&&E.normalMapType===Zv,normalMapTangentSpace:dt&&E.normalMapType===Qd,packedNormalMap:dt&&E.normalMapType===Qd&&_E(E.normalMap.format),metalnessMap:rt,roughnessMap:Ft,anisotropy:j,anisotropyMap:me,clearcoat:Xt,clearcoatMap:we,clearcoatNormalMap:Ne,clearcoatRoughnessMap:xe,dispersion:wt,retroreflection:U,iridescence:y,iridescenceMap:C,iridescenceThicknessMap:te,sheen:J,sheenColorMap:ye,sheenRoughnessMap:oe,specularMap:Me,specularColorMap:B,specularIntensityMap:$e,transmission:ue,transmissionMap:Be,thicknessMap:H,gradientMap:De,opaque:E.transparent===!1&&E.blending===so&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ce,alphaHash:Pe,combine:E.combine,mapUv:at&&A(E.map.channel),aoMapUv:ut&&A(E.aoMap.channel),lightMapUv:st&&A(E.lightMap.channel),bumpMapUv:ke&&A(E.bumpMap.channel),normalMapUv:dt&&A(E.normalMap.channel),displacementMapUv:xt&&A(E.displacementMap.channel),emissiveMapUv:It&&A(E.emissiveMap.channel),metalnessMapUv:rt&&A(E.metalnessMap.channel),roughnessMapUv:Ft&&A(E.roughnessMap.channel),anisotropyMapUv:me&&A(E.anisotropyMap.channel),clearcoatMapUv:we&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:C&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:oe&&A(E.sheenRoughnessMap.channel),specularMapUv:Me&&A(E.specularMap.channel),specularColorMapUv:B&&A(E.specularColorMap.channel),specularIntensityMapUv:$e&&A(E.specularIntensityMap.channel),transmissionMapUv:Be&&A(E.transmissionMap.channel),thicknessMapUv:H&&A(E.thicknessMap.channel),alphaMapUv:_e&&A(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(dt||j),vertexNormals:!!ne.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ne.attributes.uv&&(at||_e),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ne.attributes.normal===void 0&&dt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Re,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Se,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&Lt.getTransfer(E.map.colorSpace)===Ht,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(E.emissiveMap.colorSpace)===Ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xi,flipSided:E.side===Qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&E.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function x(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)P.push(k),P.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(v(P,E),I(P,E),P.push(s.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function v(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numSunLights),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numSunLightShadows),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function I(E,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function V(E){const P=M[E.type];let k;if(P){const q=Wi[P];k=O_.clone(q.uniforms)}else k=E.uniforms;return k}function R(E,P){let k=_.get(P);return k!==void 0?++k.usedTimes:(k=new pE(s,P,E,o),p.push(k),_.set(P,k)),k}function N(E){if(--E.usedTimes===0){const P=p.indexOf(E);p[P]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function L(E){f.remove(E)}function F(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:V,acquireProgram:R,releaseProgram:N,releaseShaderCache:L,programs:p,dispose:F}}function SE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function yE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ym(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,A,b,x,v){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:A,materialVariant:u(g),groupOrder:b,renderOrder:g.renderOrder,z:x,group:v},s[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=A,I.materialVariant=u(g),I.groupOrder=b,I.renderOrder=g.renderOrder,I.z=x,I.group=v),e++,I}function m(g,M,A,b,x,v,I){I.reversedDepth===!0&&(x=-x);const V=f(g,M,A,b,x,v);A.transmission>0?r.push(V):A.transparent===!0?o.push(V):t.push(V)}function p(g,M,A,b,x,v){const I=f(g,M,A,b,x,v);A.transmission>0?r.unshift(I):A.transparent===!0?o.unshift(I):t.unshift(I)}function _(g,M){t.length>1&&t.sort(g||yE),r.length>1&&r.sort(M||Xm),o.length>1&&o.sort(M||Xm)}function S(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:S,sort:_}}function ME(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Ym,s.set(r,[u])):o>=l.length?(u=new Ym,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new he,color:new Rt};break;case"SpotLight":t={position:new he,direction:new he,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TE=0;function AE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s){const e=new EE,t=wE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new he);const o=new he,l=new an,u=new an;function f(p){let _=0,S=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let M=0,A=0,b=0,x=0,v=0,I=0,V=0,R=0,N=0,L=0,F=0,E=0,P=0,k=0;p.sort(AE);for(let $=0,ie=p.length;$<ie;$++){const Y=p[$],ne=Y.color,ge=Y.intensity,ae=Y.distance;let X=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===ws?X=Y.shadow.map.texture:X=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)_+=ne.r*ge,S+=ne.g*ge,g+=ne.b*ge;else if(Y.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(Y.sh.coefficients[Q],ge);k++}else if(Y.isSunLight){const Q=e.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ee=Y.shadow,D=t.get(Y);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[A]=D,r.sunShadowMap[A]=X;const ce=ee.getViewportCount();for(let Se=0;Se<ce;Se++)r.sunShadowMatrix[b+Se]=ee.getMatrix(Se),r.sunShadowCascade[b+Se]=ee._cascadeData[Se];b+=ce,A++}r.sun[M]=Q,M++}else if(Y.isDirectionalLight){const Q=e.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ee=Y.shadow,D=t.get(Y);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=Y.shadow.matrix,N++}r.directional[x]=Q,x++}else if(Y.isSpotLight){const Q=e.get(Y);Q.position.setFromMatrixPosition(Y.matrixWorld),Q.color.copy(ne).multiplyScalar(ge),Q.distance=ae,Q.coneCos=Math.cos(Y.angle),Q.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),Q.decay=Y.decay,r.spot[I]=Q;const ee=Y.shadow;if(Y.map&&(r.spotLightMap[E]=Y.map,E++,ee.updateMatrices(Y),Y.castShadow&&P++),r.spotLightMatrix[I]=ee.matrix,Y.castShadow){const D=t.get(Y);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,r.spotShadow[I]=D,r.spotShadowMap[I]=X,F++}I++}else if(Y.isRectAreaLight){const Q=e.get(Y);Q.color.copy(ne).multiplyScalar(ge),Q.halfWidth.set(Y.width*.5,0,0),Q.halfHeight.set(0,Y.height*.5,0),r.rectArea[V]=Q,V++}else if(Y.isPointLight){const Q=e.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity),Q.distance=Y.distance,Q.decay=Y.decay,Y.castShadow){const ee=Y.shadow,D=t.get(Y);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,D.shadowCameraNear=ee.camera.near,D.shadowCameraFar=ee.camera.far,r.pointShadow[v]=D,r.pointShadowMap[v]=X,r.pointShadowMatrix[v]=Y.shadow.matrix,L++}r.point[v]=Q,v++}else if(Y.isHemisphereLight){const Q=e.get(Y);Q.skyColor.copy(Y.color).multiplyScalar(ge),Q.groundColor.copy(Y.groundColor).multiplyScalar(ge),r.hemi[R]=Q,R++}}V>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=g;const q=r.hash;(q.sunLength!==M||q.directionalLength!==x||q.pointLength!==v||q.spotLength!==I||q.rectAreaLength!==V||q.hemiLength!==R||q.numSunShadows!==A||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==F||q.numSpotMaps!==E||q.numLightProbes!==k)&&(r.sun.length=M,r.directional.length=x,r.spot.length=I,r.rectArea.length=V,r.point.length=v,r.hemi.length=R,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,q.sunLength=M,q.directionalLength=x,q.pointLength=v,q.spotLength=I,q.rectAreaLength=V,q.hemiLength=R,q.numSunShadows=A,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=F,q.numSpotMaps=E,q.numLightProbes=k,r.version=TE++)}function m(p,_){let S=0,g=0,M=0,A=0,b=0,x=0;const v=_.matrixWorldInverse;for(let I=0,V=p.length;I<V;I++){const R=p[I];if(R.isSunLight){const N=r.sun[S];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(v),S++}else if(R.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),g++}else if(R.isSpotLight){const N=r.spot[A];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),A++}else if(R.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(v),u.identity(),l.copy(R.matrixWorld),l.premultiply(v),u.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),b++}else if(R.isPointLight){const N=r.point[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(v),M++}else if(R.isHemisphereLight){const N=r.hemi[x];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(v),x++}}}return{setup:f,setupView:m,state:r}}function qm(s){const e=new CE(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function RE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new qm(s),e.set(o,[f])):l>=u.length?(f=new qm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const bE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
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
}`,LE=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],NE=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],jm=new an,to=new he,hd=new he;function DE(s,e,t){let r=new _f;const o=new Dt,l=new Dt,u=new nn,f=new G_,m=new V_,p={},_=t.maxTextureSize,S={[ys]:Qn,[Qn]:ys,[Xi]:Xi},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:bE,fragmentShader:PE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new ci;A.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mt(A,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let v=this.type;this.render=function(L,F,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===Rv&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kl);const P=s.getRenderTarget(),k=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),$=s.state;$.setBlending(gr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=v!==this.type;ie&&F.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ne=>ne.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ne=L.length;Y<ne;Y++){const ge=L[Y],ae=ge.shadow;if(ae===void 0){gt("WebGLShadowMap:",ge,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;o.copy(ae.mapSize);const X=ae.getFrameExtents();o.multiply(X),l.copy(ae.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/X.x),o.x=l.x*X.x,ae.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/X.y),o.y=l.y*X.y,ae.mapSize.y=l.y));const Q=s.state.buffers.depth.getReversed();if(ae.camera._reversedDepth=Q,ae.map===null||ie===!0){if(ae.map!==null&&(ae.map.depthTexture!==null&&(ae.map.depthTexture.dispose(),ae.map.depthTexture=null),ae.map.dispose()),this.type===no){if(ge.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ae.map=new Fi(o.x,o.y,{format:ws,type:$i,minFilter:zn,magFilter:zn,generateMipmaps:!1}),ae.map.texture.name=ge.name+".shadowMap",ae.map.depthTexture=new fo(o.x,o.y,Yi),ae.map.depthTexture.name=ge.name+".shadowMapDepth",ae.map.depthTexture.format=xr,ae.map.depthTexture.compareFunction=null,ae.map.depthTexture.minFilter=Pn,ae.map.depthTexture.magFilter=Pn}else ge.isPointLight?(ae.map=new bg(o.x),ae.map.depthTexture=new U_(o.x,Ki)):(ae.map=new Fi(o.x,o.y),ae.map.depthTexture=new fo(o.x,o.y,Ki)),ae.map.depthTexture.name=ge.name+".shadowMap",ae.map.depthTexture.format=xr,this.type===kl?(ae.map.depthTexture.compareFunction=Q?pf:hf,ae.map.depthTexture.minFilter=zn,ae.map.depthTexture.magFilter=zn):(ae.map.depthTexture.compareFunction=null,ae.map.depthTexture.minFilter=Pn,ae.map.depthTexture.magFilter=Pn);ae.camera.updateProjectionMatrix()}ae.map.isWebGLCubeRenderTarget!==!0&&(ae.map.width!==o.x||ae.map.height!==o.y)&&ae.map.setSize(o.x,o.y);const ee=ae.map.isWebGLCubeRenderTarget?6:ae.getViewportCount();ge.isPointLight!==!0&&ae.updateMatrices(ge,E);for(let D=0;D<ee;D++){const ce=ae.getCamera(D);if(ge.isPointLight){const Se=ae.camera,Xe=ae.matrix,Fe=ge.distance||Se.far;Fe!==Se.far&&(Se.far=Fe,Se.updateProjectionMatrix()),to.setFromMatrixPosition(ge.matrixWorld),Se.position.copy(to),hd.copy(Se.position),hd.add(LE[D]),Se.up.copy(NE[D]),Se.lookAt(hd),Se.updateMatrixWorld(),Xe.makeTranslation(-to.x,-to.y,-to.z),jm.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ae._frustum.setFromProjectionMatrix(jm,Se.coordinateSystem,Se.reversedDepth)}if(ae.map.isWebGLCubeRenderTarget)s.setRenderTarget(ae.map,D),s.clear();else{D===0&&(s.setRenderTarget(ae.map),s.clear());const Se=ae.getViewport(D);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),$.viewport(u)}r=ae.getFrustum(D),R(F,E,ce,ge,this.type)}ae.isPointLightShadow!==!0&&this.type===no&&I(ae,E),ae.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(P,k,q)};function I(L,F){const E=e.update(b);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null?L.mapPass=new Fi(o.x,o.y,{format:ws,type:$i}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(F,null,E,g,b,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(F,null,E,M,b,null)}function V(L,F,E,P){let k=null;const q=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(q!==void 0)k=q;else if(k=E.isPointLight===!0?m:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=k.uuid,ie=F.uuid;let Y=p[$];Y===void 0&&(Y={},p[$]=Y);let ne=Y[ie];ne===void 0&&(ne=k.clone(),Y[ie]=ne,F.addEventListener("dispose",N)),k=ne}if(k.visible=F.visible,k.wireframe=F.wireframe,P===no?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:S[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const $=s.properties.get(k);$.light=E}return k}function R(L,F,E,P,k){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===no)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ie=e.update(L),Y=L.material;if(Array.isArray(Y)){const ne=ie.groups;for(let ge=0,ae=ne.length;ge<ae;ge++){const X=ne[ge],Q=Y[X.materialIndex];if(Q&&Q.visible){const ee=V(L,Q,P,k);L.onBeforeShadow(s,L,F,E,ie,ee,X),s.renderBufferDirect(E,null,ie,ee,L,X),L.onAfterShadow(s,L,F,E,ie,ee,X)}}}else if(Y.visible){const ne=V(L,Y,P,k);L.onBeforeShadow(s,L,F,E,ie,ne,null),s.renderBufferDirect(E,null,ie,ne,L,null),L.onAfterShadow(s,L,F,E,ie,ne,null)}}const $=L.children;for(let ie=0,Y=$.length;ie<Y;ie++)R($[ie],F,E,P,k)}function N(L){L.target.removeEventListener("dispose",N);for(const E in p){const P=p[E],k=L.target.uuid;k in P&&(P[k].dispose(),delete P[k])}}}function IE(s,e){function t(){let H=!1;const De=new nn;let _e=null;const Ce=new nn(0,0,0,0);return{setMask:function(Pe){_e!==Pe&&!H&&(s.colorMask(Pe,Pe,Pe,Pe),_e=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,Ee,He,je,At){At===!0&&(Pe*=je,Ee*=je,He*=je),De.set(Pe,Ee,He,je),Ce.equals(De)===!1&&(s.clearColor(Pe,Ee,He,je),Ce.copy(De))},reset:function(){H=!1,_e=null,Ce.set(-1,0,0,0)}}}function r(){let H=!1,De=!1,_e=null,Ce=null,Pe=null;return{setReversed:function(Ee){if(De!==Ee){const He=e.get("EXT_clip_control");Ee?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),De=Ee;const je=Pe;Pe=null,this.setClear(je)}},getReversed:function(){return De},setTest:function(Ee){Ee?K(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!H&&(s.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(De&&(Ee=c_[Ee]),Ce!==Ee){switch(Ee){case md:s.depthFunc(s.NEVER);break;case gd:s.depthFunc(s.ALWAYS);break;case vd:s.depthFunc(s.LESS);break;case oo:s.depthFunc(s.LEQUAL);break;case _d:s.depthFunc(s.EQUAL);break;case xd:s.depthFunc(s.GEQUAL);break;case Sd:s.depthFunc(s.GREATER);break;case yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=Ee}},setLocked:function(Ee){H=Ee},setClear:function(Ee){Pe!==Ee&&(Pe=Ee,De&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){H=!1,_e=null,Ce=null,Pe=null,De=!1}}}function o(){let H=!1,De=null,_e=null,Ce=null,Pe=null,Ee=null,He=null,je=null,At=null;return{setTest:function(Ct){H||(Ct?K(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Ct){De!==Ct&&!H&&(s.stencilMask(Ct),De=Ct)},setFunc:function(Ct,on,Cn){(_e!==Ct||Ce!==on||Pe!==Cn)&&(s.stencilFunc(Ct,on,Cn),_e=Ct,Ce=on,Pe=Cn)},setOp:function(Ct,on,Cn){(Ee!==Ct||He!==on||je!==Cn)&&(s.stencilOp(Ct,on,Cn),Ee=Ct,He=on,je=Cn)},setLocked:function(Ct){H=Ct},setClear:function(Ct){At!==Ct&&(s.clearStencil(Ct),At=Ct)},reset:function(){H=!1,De=null,_e=null,Ce=null,Pe=null,Ee=null,He=null,je=null,At=null}}}const l=new t,u=new r,f=new o,m=new WeakMap,p=new WeakMap;let _={},S={},g={},M=new WeakMap,A=[],b=null,x=!1,v=null,I=null,V=null,R=null,N=null,L=null,F=null,E=new Rt(0,0,0),P=0,k=!1,q=null,$=null,ie=null,Y=null,ne=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,X=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ae=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ae=X>=2);let ee=null,D={};const ce=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Xe=new nn().fromArray(ce),Fe=new nn().fromArray(Se);function Ie(H,De,_e,Ce){const Pe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(H,Ee),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<_e;He++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(De+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ee}const de={};de[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),K(s.DEPTH_TEST),u.setFunc(oo),ke(!1),dt(Qp),K(s.CULL_FACE),ut(gr);function K(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Re(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ye(H,De){return g[H]!==De?(s.bindFramebuffer(H,De),g[H]=De,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Oe(H,De){let _e=A,Ce=!1;if(H){_e=M.get(De),_e===void 0&&(_e=[],M.set(De,_e));const Pe=H.textures;if(_e.length!==Pe.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,He=Pe.length;Ee<He;Ee++)_e[Ee]=s.COLOR_ATTACHMENT0+Ee;_e.length=Pe.length,Ce=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(_e)}function at(H){return b!==H?(s.useProgram(H),b=H,!0):!1}const vt={[la]:s.FUNC_ADD,[Pv]:s.FUNC_SUBTRACT,[Lv]:s.FUNC_REVERSE_SUBTRACT};vt[Nv]=s.MIN,vt[Dv]=s.MAX;const Ge={[Iv]:s.ZERO,[Uv]:s.ONE,[Fv]:s.SRC_COLOR,[Qm]:s.SRC_ALPHA,[Vv]:s.SRC_ALPHA_SATURATE,[zv]:s.DST_COLOR,[kv]:s.DST_ALPHA,[Ov]:s.ONE_MINUS_SRC_COLOR,[eg]:s.ONE_MINUS_SRC_ALPHA,[Gv]:s.ONE_MINUS_DST_COLOR,[Bv]:s.ONE_MINUS_DST_ALPHA,[Hv]:s.CONSTANT_COLOR,[Wv]:s.ONE_MINUS_CONSTANT_COLOR,[Xv]:s.CONSTANT_ALPHA,[Yv]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(H,De,_e,Ce,Pe,Ee,He,je,At,Ct){if(H===gr){x===!0&&(Re(s.BLEND),x=!1);return}if(x===!1&&(K(s.BLEND),x=!0),H!==bv){if(H!==v||Ct!==k){if((I!==la||N!==la)&&(s.blendEquation(s.FUNC_ADD),I=la,N=la),Ct)switch(H){case so:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wr:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",H);break}else switch(H){case so:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case em:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tm:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",H);break}V=null,R=null,L=null,F=null,E.set(0,0,0),P=0,v=H,k=Ct}return}Pe=Pe||De,Ee=Ee||_e,He=He||Ce,(De!==I||Pe!==N)&&(s.blendEquationSeparate(vt[De],vt[Pe]),I=De,N=Pe),(_e!==V||Ce!==R||Ee!==L||He!==F)&&(s.blendFuncSeparate(Ge[_e],Ge[Ce],Ge[Ee],Ge[He]),V=_e,R=Ce,L=Ee,F=He),(je.equals(E)===!1||At!==P)&&(s.blendColor(je.r,je.g,je.b,At),E.copy(je),P=At),v=H,k=!1}function st(H,De){H.side===Xi?Re(s.CULL_FACE):K(s.CULL_FACE);let _e=H.side===Qn;De&&(_e=!_e),ke(_e),H.blending===so&&H.transparent===!1?ut(gr):ut(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ce=H.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),It(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(H){q!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),q=H)}function dt(H){H!==Av?(K(s.CULL_FACE),H!==$&&(H===Qp?s.cullFace(s.BACK):H===Cv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),$=H}function xt(H){H!==ie&&(ae&&s.lineWidth(H),ie=H)}function It(H,De,_e){H?(K(s.POLYGON_OFFSET_FILL),(Y!==De||ne!==_e)&&(Y=De,ne=_e,u.getReversed()&&(De=-De),s.polygonOffset(De,_e))):Re(s.POLYGON_OFFSET_FILL)}function rt(H){H?K(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function Ft(H){H===void 0&&(H=s.TEXTURE0+ge-1),ee!==H&&(s.activeTexture(H),ee=H)}function j(H,De,_e){_e===void 0&&(ee===null?_e=s.TEXTURE0+ge-1:_e=ee);let Ce=D[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},D[_e]=Ce),(Ce.type!==H||Ce.texture!==De)&&(ee!==_e&&(s.activeTexture(_e),ee=_e),s.bindTexture(H,De||de[H]),Ce.type=H,Ce.texture=De)}function Xt(){const H=D[ee];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function y(){try{s.texSubImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function J(){try{s.texSubImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Ne(){try{s.texStorage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function xe(){try{s.texImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function C(){try{s.texImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function te(H){return S[H]!==void 0?S[H]:s.getParameter(H)}function ye(H,De){S[H]!==De&&(s.pixelStorei(H,De),S[H]=De)}function oe(H){Xe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Xe.copy(H))}function Me(H){Fe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Fe.copy(H))}function B(H,De){let _e=p.get(De);_e===void 0&&(_e=new WeakMap,p.set(De,_e));let Ce=_e.get(H);Ce===void 0&&(Ce=s.getUniformBlockIndex(De,H.name),_e.set(H,Ce))}function $e(H,De){const Ce=p.get(De).get(H);m.get(De)!==Ce&&(s.uniformBlockBinding(De,Ce,H.__bindingPointIndex),m.set(De,Ce))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},ee=null,D={},g={},M=new WeakMap,A=[],b=null,x=!1,v=null,I=null,V=null,R=null,N=null,L=null,F=null,E=new Rt(0,0,0),P=0,k=!1,q=null,$=null,ie=null,Y=null,ne=null,Xe.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:K,disable:Re,bindFramebuffer:Ye,drawBuffers:Oe,useProgram:at,setBlending:ut,setMaterial:st,setFlipSided:ke,setCullFace:dt,setLineWidth:xt,setPolygonOffset:It,setScissorTest:rt,activeTexture:Ft,bindTexture:j,unbindTexture:Xt,compressedTexImage2D:wt,compressedTexImage3D:U,texImage2D:xe,texImage3D:C,pixelStorei:ye,getParameter:te,updateUBOMapping:B,uniformBlockBinding:$e,texStorage2D:we,texStorage3D:Ne,texSubImage2D:y,texSubImage3D:J,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:oe,viewport:Me,reset:Be}}function UE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,_=new WeakMap,S=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,y){return A?new OffscreenCanvas(U,y):jl("canvas")}function x(U,y,J){let ue=1;const me=wt(U);if((me.width>J||me.height>J)&&(ue=J/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const we=Math.floor(ue*me.width),Ne=Math.floor(ue*me.height);g===void 0&&(g=b(we,Ne));const xe=y?b(we,Ne):g;return xe.width=we,xe.height=Ne,xe.getContext("2d").drawImage(U,0,0,we,Ne),gt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+we+"x"+Ne+")."),xe}else return"data"in U&&gt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function v(U){return U.generateMipmaps}function I(U){s.generateMipmap(U)}function V(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(U,y,J,ue,me,we=!1){if(U!==null){if(s[U]!==void 0)return s[U];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ne;ue&&(Ne=e.get("EXT_texture_norm16"),Ne||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=y;if(y===s.RED&&(J===s.FLOAT&&(xe=s.R32F),J===s.HALF_FLOAT&&(xe=s.R16F),J===s.UNSIGNED_BYTE&&(xe=s.R8),J===s.UNSIGNED_SHORT&&Ne&&(xe=Ne.R16_EXT),J===s.SHORT&&Ne&&(xe=Ne.R16_SNORM_EXT)),y===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.R8UI),J===s.UNSIGNED_SHORT&&(xe=s.R16UI),J===s.UNSIGNED_INT&&(xe=s.R32UI),J===s.BYTE&&(xe=s.R8I),J===s.SHORT&&(xe=s.R16I),J===s.INT&&(xe=s.R32I)),y===s.RG&&(J===s.FLOAT&&(xe=s.RG32F),J===s.HALF_FLOAT&&(xe=s.RG16F),J===s.UNSIGNED_BYTE&&(xe=s.RG8),J===s.UNSIGNED_SHORT&&Ne&&(xe=Ne.RG16_EXT),J===s.SHORT&&Ne&&(xe=Ne.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RG8UI),J===s.UNSIGNED_SHORT&&(xe=s.RG16UI),J===s.UNSIGNED_INT&&(xe=s.RG32UI),J===s.BYTE&&(xe=s.RG8I),J===s.SHORT&&(xe=s.RG16I),J===s.INT&&(xe=s.RG32I)),y===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),J===s.UNSIGNED_INT&&(xe=s.RGB32UI),J===s.BYTE&&(xe=s.RGB8I),J===s.SHORT&&(xe=s.RGB16I),J===s.INT&&(xe=s.RGB32I)),y===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),J===s.UNSIGNED_INT&&(xe=s.RGBA32UI),J===s.BYTE&&(xe=s.RGBA8I),J===s.SHORT&&(xe=s.RGBA16I),J===s.INT&&(xe=s.RGBA32I)),y===s.RGB&&(J===s.UNSIGNED_SHORT&&Ne&&(xe=Ne.RGB16_EXT),J===s.SHORT&&Ne&&(xe=Ne.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),y===s.RGBA){const C=we?ql:Lt.getTransfer(me);J===s.FLOAT&&(xe=s.RGBA32F),J===s.HALF_FLOAT&&(xe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(xe=C===Ht?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ne&&(xe=Ne.RGBA16_EXT),J===s.SHORT&&Ne&&(xe=Ne.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function N(U,y){let J;return U?y===null||y===Ki||y===co?J=s.DEPTH24_STENCIL8:y===Yi?J=s.DEPTH32F_STENCIL8:y===lo&&(J=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===co?J=s.DEPTH_COMPONENT24:y===Yi?J=s.DEPTH_COMPONENT32F:y===lo&&(J=s.DEPTH_COMPONENT16),J}function L(U,y){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==Pn&&U.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function F(U){const y=U.target;y.removeEventListener("dispose",F),P(y),y.isVideoTexture&&_.delete(y),y.isHTMLTexture&&S.delete(y)}function E(U){const y=U.target;y.removeEventListener("dispose",E),q(y)}function P(U){const y=r.get(U);if(y.__webglInit===void 0)return;const J=U.source,ue=M.get(J);if(ue){const me=ue[y.__cacheKey];me.usedTimes--,me.usedTimes===0&&k(U),Object.keys(ue).length===0&&M.delete(J)}r.remove(U)}function k(U){const y=r.get(U);s.deleteTexture(y.__webglTexture);const J=U.source,ue=M.get(J);delete ue[y.__cacheKey],u.memory.textures--}function q(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(y.__webglFramebuffer[ue]))for(let me=0;me<y.__webglFramebuffer[ue].length;me++)s.deleteFramebuffer(y.__webglFramebuffer[ue][me]);else s.deleteFramebuffer(y.__webglFramebuffer[ue]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ue])}else{if(Array.isArray(y.__webglFramebuffer))for(let ue=0;ue<y.__webglFramebuffer.length;ue++)s.deleteFramebuffer(y.__webglFramebuffer[ue]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ue=0;ue<y.__webglColorRenderbuffer.length;ue++)y.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ue]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const J=U.textures;for(let ue=0,me=J.length;ue<me;ue++){const we=r.get(J[ue]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(J[ue])}r.remove(U)}let $=0;function ie(){$=0}function Y(){return $}function ne(U){$=U}function ge(){const U=$;return U>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,U}function ae(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function X(U,y){const J=r.get(U);if(U.isVideoTexture&&j(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const ue=U.image;if(ue===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,U,y);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+y)}function Q(U,y){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Re(J,U,y);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+y)}function ee(U,y){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Re(J,U,y);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+y)}function D(U,y){const J=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){Ye(J,U,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+y)}const ce={[Es]:s.REPEAT,[mr]:s.CLAMP_TO_EDGE,[Md]:s.MIRRORED_REPEAT},Se={[Pn]:s.NEAREST,[Kv]:s.NEAREST_MIPMAP_NEAREST,[gl]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[Fu]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},Xe={[Qv]:s.NEVER,[r_]:s.ALWAYS,[e_]:s.LESS,[hf]:s.LEQUAL,[t_]:s.EQUAL,[pf]:s.GEQUAL,[n_]:s.GREATER,[i_]:s.NOTEQUAL};function Fe(U,y){if(y.type===Yi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===Fu||y.magFilter===gl||y.magFilter===xs||y.minFilter===zn||y.minFilter===Fu||y.minFilter===gl||y.minFilter===xs)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ce[y.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ce[y.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ce[y.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Se[y.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pn||y.minFilter!==gl&&y.minFilter!==xs||y.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Ie(U,y){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",F));const ue=y.source;let me=M.get(ue);me===void 0&&(me={},M.set(ue,me));const we=ae(y);if(we!==U.__cacheKey){me[we]===void 0&&(me[we]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),me[we].usedTimes++;const Ne=me[U.__cacheKey];Ne!==void 0&&(me[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(y)),U.__cacheKey=we,U.__webglTexture=me[we].texture}return J}function de(U,y,J){return Math.floor(Math.floor(U/J)/y)}function K(U,y,J,ue){const we=U.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,J,ue,y.data);else{we.sort((ye,oe)=>ye.start-oe.start);let Ne=0;for(let ye=1;ye<we.length;ye++){const oe=we[Ne],Me=we[ye],B=oe.start+oe.count,$e=de(Me.start,y.width,4),Be=de(oe.start,y.width,4);Me.start<=B+1&&$e===Be&&de(Me.start+Me.count-1,y.width,4)===$e?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++Ne,we[Ne]=Me)}we.length=Ne+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),C=t.getParameter(s.UNPACK_SKIP_PIXELS),te=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ye=0,oe=we.length;ye<oe;ye++){const Me=we[ye],B=Math.floor(Me.start/4),$e=Math.ceil(Me.count/4),Be=B%y.width,H=Math.floor(B/y.width),De=$e,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,Be,H,De,_e,J,ue,y.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,C),t.pixelStorei(s.UNPACK_SKIP_ROWS,te)}}function Re(U,y,J){let ue=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ue=s.TEXTURE_3D);const me=Ie(U,y),we=y.source;t.bindTexture(ue,U.__webglTexture,s.TEXTURE0+J);const Ne=r.get(we);if(we.version!==Ne.__version||me===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const _e=Lt.getPrimaries(Lt.workingColorSpace),Ce=y.colorSpace===Yr?null:Lt.getPrimaries(y.colorSpace),Pe=y.colorSpace===Yr||_e===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let C=x(y.image,!1,o.maxTextureSize);C=Xt(y,C);const te=l.convert(y.format,y.colorSpace),ye=l.convert(y.type);let oe=R(y.internalFormat,te,ye,y.normalized,y.colorSpace,y.isVideoTexture);Fe(ue,y);let Me;const B=y.mipmaps,$e=y.isVideoTexture!==!0,Be=Ne.__version===void 0||me===!0,H=we.dataReady,De=L(y,C);if(y.isDepthTexture)oe=N(y.format===Ss,y.type),Be&&($e?t.texStorage2D(s.TEXTURE_2D,1,oe,C.width,C.height):t.texImage2D(s.TEXTURE_2D,0,oe,C.width,C.height,0,te,ye,null));else if(y.isDataTexture)if(B.length>0){$e&&Be&&t.texStorage2D(s.TEXTURE_2D,De,oe,B[0].width,B[0].height);for(let _e=0,Ce=B.length;_e<Ce;_e++)Me=B[_e],$e?H&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Me.width,Me.height,te,ye,Me.data):t.texImage2D(s.TEXTURE_2D,_e,oe,Me.width,Me.height,0,te,ye,Me.data);y.generateMipmaps=!1}else $e?(Be&&t.texStorage2D(s.TEXTURE_2D,De,oe,C.width,C.height),H&&K(y,C,te,ye)):t.texImage2D(s.TEXTURE_2D,0,oe,C.width,C.height,0,te,ye,C.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$e&&Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,oe,B[0].width,B[0].height,C.depth);for(let _e=0,Ce=B.length;_e<Ce;_e++)if(Me=B[_e],y.format!==Ui)if(te!==null)if($e){if(H)if(y.layerUpdates.size>0){const Pe=Am(Me.width,Me.height,y.format,y.type);for(const Ee of y.layerUpdates){const He=Me.data.subarray(Ee*Pe/Me.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ee,Me.width,Me.height,1,te,He)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Me.width,Me.height,C.depth,te,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,oe,Me.width,Me.height,C.depth,0,Me.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Me.width,Me.height,C.depth,te,ye,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,oe,Me.width,Me.height,C.depth,0,te,ye,Me.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{$e&&Be&&t.texStorage2D(s.TEXTURE_2D,De,oe,B[0].width,B[0].height);for(let _e=0,Ce=B.length;_e<Ce;_e++)Me=B[_e],y.format!==Ui?te!==null?$e?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Me.width,Me.height,te,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,oe,Me.width,Me.height,0,Me.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?H&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Me.width,Me.height,te,ye,Me.data):t.texImage2D(s.TEXTURE_2D,_e,oe,Me.width,Me.height,0,te,ye,Me.data)}else if(y.isDataArrayTexture)if($e){if(Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,oe,C.width,C.height,C.depth),H)if(y.layerUpdates.size>0){const _e=Am(C.width,C.height,y.format,y.type);for(const Ce of y.layerUpdates){const Pe=C.data.subarray(Ce*_e/C.data.BYTES_PER_ELEMENT,(Ce+1)*_e/C.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,C.width,C.height,1,te,ye,Pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,te,ye,C.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,oe,C.width,C.height,C.depth,0,te,ye,C.data);else if(y.isData3DTexture)$e?(Be&&t.texStorage3D(s.TEXTURE_3D,De,oe,C.width,C.height,C.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,te,ye,C.data)):t.texImage3D(s.TEXTURE_3D,0,oe,C.width,C.height,C.depth,0,te,ye,C.data);else if(y.isFramebufferTexture){if(Be)if($e)t.texStorage2D(s.TEXTURE_2D,De,oe,C.width,C.height);else{let _e=C.width,Ce=C.height;for(let Pe=0;Pe<De;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,oe,_e,Ce,0,te,ye,null),_e>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),C.parentNode!==_e){_e.appendChild(C),S.add(y),_e.onpaint=Ce=>{const Pe=Ce.changedElements;for(const Ee of S)Pe.includes(Ee.image)&&(Ee.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,C);else{const Pe=s.RGBA,Ee=s.RGBA,He=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pe,Ee,He,C)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(B.length>0){if($e&&Be){const _e=wt(B[0]);t.texStorage2D(s.TEXTURE_2D,De,oe,_e.width,_e.height)}for(let _e=0,Ce=B.length;_e<Ce;_e++)Me=B[_e],$e?H&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,te,ye,Me):t.texImage2D(s.TEXTURE_2D,_e,oe,te,ye,Me);y.generateMipmaps=!1}else if($e){if(Be){const _e=wt(C);t.texStorage2D(s.TEXTURE_2D,De,oe,_e.width,_e.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te,ye,C)}else t.texImage2D(s.TEXTURE_2D,0,oe,te,ye,C);v(y)&&I(ue),Ne.__version=we.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Ye(U,y,J){if(y.image.length!==6)return;const ue=Ie(U,y),me=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+J);const we=r.get(me);if(me.version!==we.__version||ue===!0){t.activeTexture(s.TEXTURE0+J);const Ne=Lt.getPrimaries(Lt.workingColorSpace),xe=y.colorSpace===Yr?null:Lt.getPrimaries(y.colorSpace),C=y.colorSpace===Yr||Ne===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let Ee=0;Ee<6;Ee++)!te&&!ye?oe[Ee]=x(y.image[Ee],!0,o.maxCubemapSize):oe[Ee]=ye?y.image[Ee].image:y.image[Ee],oe[Ee]=Xt(y,oe[Ee]);const Me=oe[0],B=l.convert(y.format,y.colorSpace),$e=l.convert(y.type),Be=R(y.internalFormat,B,$e,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,De=we.__version===void 0||ue===!0,_e=me.dataReady;let Ce=L(y,Me);Fe(s.TEXTURE_CUBE_MAP,y);let Pe;if(te){H&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,Be,Me.width,Me.height);for(let Ee=0;Ee<6;Ee++){Pe=oe[Ee].mipmaps;for(let He=0;He<Pe.length;He++){const je=Pe[He];y.format!==Ui?B!==null?H?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,0,0,je.width,je.height,B,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,Be,je.width,je.height,0,je.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,0,0,je.width,je.height,B,$e,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,Be,je.width,je.height,0,B,$e,je.data)}}}else{if(Pe=y.mipmaps,H&&De){Pe.length>0&&Ce++;const Ee=wt(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,Be,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ye){H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,oe[Ee].width,oe[Ee].height,B,$e,oe[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Be,oe[Ee].width,oe[Ee].height,0,B,$e,oe[Ee].data);for(let He=0;He<Pe.length;He++){const At=Pe[He].image[Ee].image;H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,0,0,At.width,At.height,B,$e,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,Be,At.width,At.height,0,B,$e,At.data)}}else{H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,B,$e,oe[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Be,B,$e,oe[Ee]);for(let He=0;He<Pe.length;He++){const je=Pe[He];H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,0,0,B,$e,je.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,Be,B,$e,je.image[Ee])}}}v(y)&&I(s.TEXTURE_CUBE_MAP),we.__version=me.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Oe(U,y,J,ue,me,we){const Ne=l.convert(J.format,J.colorSpace),xe=l.convert(J.type),C=R(J.internalFormat,Ne,xe,J.normalized,J.colorSpace),te=r.get(y),ye=r.get(J);if(ye.__renderTarget=y,!te.__hasExternalTextures){const oe=Math.max(1,y.width>>we),Me=Math.max(1,y.height>>we);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,we,C,oe,Me,y.depth,0,Ne,xe,null):t.texImage2D(me,we,C,oe,Me,0,Ne,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ft(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,me,ye.__webglTexture,0,rt(y)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,me,ye.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(U,y,J){if(s.bindRenderbuffer(s.RENDERBUFFER,U),y.depthBuffer){const ue=y.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,we=N(y.stencilBuffer,me),Ne=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ft(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(y),we,y.width,y.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(y),we,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,we,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,U)}else{const ue=y.textures;for(let me=0;me<ue.length;me++){const we=ue[me],Ne=l.convert(we.format,we.colorSpace),xe=l.convert(we.type),C=R(we.internalFormat,Ne,xe,we.normalized,we.colorSpace);Ft(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(y),C,y.width,y.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(y),C,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,C,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(U,y,J){const ue=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(y.depthTexture);if(me.__renderTarget=y,(!me.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ue){if(me.__webglInit===void 0&&(me.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y.depthTexture);const te=l.convert(y.depthTexture.format),ye=l.convert(y.depthTexture.type);let oe;y.depthTexture.format===xr?oe=s.DEPTH_COMPONENT24:y.depthTexture.format===Ss&&(oe=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,y.width,y.height,0,te,ye,null)}}else X(y.depthTexture,0);const we=me.__webglTexture,Ne=rt(y),xe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,C=y.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===xr)Ft(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,C,xe,we,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,C,xe,we,0);else if(y.depthTexture.format===Ss)Ft(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,C,xe,we,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,C,xe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(U){const y=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const ue=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ue){const me=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),y.__depthDisposeCallback=me}y.__boundDepthTexture=ue}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(J)for(let ue=0;ue<6;ue++)vt(y.__webglFramebuffer[ue],U,ue);else{const ue=U.texture.mipmaps;ue&&ue.length>0?vt(y.__webglFramebuffer[0],U,0):vt(y.__webglFramebuffer,U,0)}else if(J){y.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ue]),y.__webglDepthbuffer[ue]===void 0)y.__webglDepthbuffer[ue]=s.createRenderbuffer(),at(y.__webglDepthbuffer[ue],U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,we)}}else{const ue=U.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),at(y.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,we)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(U,y,J){const ue=r.get(U);y!==void 0&&Oe(ue.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ge(U)}function st(U){const y=U.texture,J=r.get(U),ue=r.get(y);U.addEventListener("dispose",E);const me=U.textures,we=U.isWebGLCubeRenderTarget===!0,Ne=me.length>1;if(Ne||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=y.version,u.memory.textures++),we){J.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[xe]=[];for(let C=0;C<y.mipmaps.length;C++)J.__webglFramebuffer[xe][C]=s.createFramebuffer()}else J.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)J.__webglFramebuffer[xe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let xe=0,C=me.length;xe<C;xe++){const te=r.get(me[xe]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Ft(U)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xe=0;xe<me.length;xe++){const C=me[xe];J.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[xe]);const te=l.convert(C.format,C.colorSpace),ye=l.convert(C.type),oe=R(C.internalFormat,te,ye,C.normalized,C.colorSpace,U.isXRRenderTarget===!0),Me=rt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,oe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,J.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),at(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let C=0;C<y.mipmaps.length;C++)Oe(J.__webglFramebuffer[xe][C],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,C);else Oe(J.__webglFramebuffer[xe],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(y)&&I(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let xe=0,C=me.length;xe<C;xe++){const te=me[xe],ye=r.get(te);let oe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,ye.__webglTexture),Fe(oe,te),Oe(J.__webglFramebuffer,U,te,s.COLOR_ATTACHMENT0+xe,oe,0),v(te)&&I(oe)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ue.__webglTexture),Fe(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let C=0;C<y.mipmaps.length;C++)Oe(J.__webglFramebuffer[C],U,y,s.COLOR_ATTACHMENT0,xe,C);else Oe(J.__webglFramebuffer,U,y,s.COLOR_ATTACHMENT0,xe,0);v(y)&&I(xe),t.unbindTexture()}U.depthBuffer&&Ge(U)}function ke(U){const y=U.textures;for(let J=0,ue=y.length;J<ue;J++){const me=y[J];if(v(me)){const we=V(U),Ne=r.get(me).__webglTexture;t.bindTexture(we,Ne),I(we),t.unbindTexture()}}}const dt=[],xt=[];function It(U){if(U.samples>0){if(Ft(U)===!1){const y=U.textures,J=U.width,ue=U.height;let me=s.COLOR_BUFFER_BIT;const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(U),xe=y.length>1;if(xe)for(let te=0;te<y.length;te++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const C=U.texture.mipmaps;C&&C.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let te=0;te<y.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[te]);const ye=r.get(y[te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,J,ue,0,0,J,ue,me,s.NEAREST),m===!0&&(dt.length=0,xt.length=0,dt.push(s.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(dt.push(we),xt.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let te=0;te<y.length;te++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[te]);const ye=r.get(y[te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&m){const y=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function rt(U){return Math.min(o.maxSamples,U.samples)}function Ft(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function j(U){const y=u.render.frame;_.get(U)!==y&&(_.set(U,y),U.update())}function Xt(U,y){const J=U.colorSpace,ue=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Yl&&J!==Yr&&(Lt.getTransfer(J)===Ht?(ue!==Ui||me!==li)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",J)),y}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ge,this.resetTextureUnits=ie,this.getTextureUnits=Y,this.setTextureUnits=ne,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=ee,this.setTextureCube=D,this.rebindTextures=ut,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FE(s,e){function t(r,o=Yr){let l;const u=Lt.getTransfer(o);if(r===li)return s.UNSIGNED_BYTE;if(r===lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===cg)return s.BYTE;if(r===ug)return s.SHORT;if(r===lo)return s.UNSIGNED_SHORT;if(r===of)return s.INT;if(r===Ki)return s.UNSIGNED_INT;if(r===Yi)return s.FLOAT;if(r===$i)return s.HALF_FLOAT;if(r===hg)return s.ALPHA;if(r===pg)return s.RGB;if(r===Ui)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===Ss)return s.DEPTH_STENCIL;if(r===mg)return s.RED;if(r===uf)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===df)return s.RG_INTEGER;if(r===ff)return s.RGBA_INTEGER;if(r===Bl||r===zl||r===Gl||r===Vl)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ed||r===wd||r===Td||r===Ad)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ed)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd||r===Rd||r===bd||r===Pd||r===Ld||r===Wl||r===Nd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Cd||r===Rd)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===bd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Pd)return l.COMPRESSED_R11_EAC;if(r===Ld)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wl)return l.COMPRESSED_RG11_EAC;if(r===Nd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Dd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Gd||r===Vd||r===Hd||r===Wd||r===Xd||r===Yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Dd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ud)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Od)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qd||r===jd||r===Kd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===qd)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$d||r===Zd||r===Xl||r===Jd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===$d)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===co?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const OE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kE=`
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

}`;class BE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Eg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:OE,fragmentShader:kE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new ha(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zE extends Ts{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,_=null,S=null,g=null,M=null,A=null;const b=typeof XRWebGLBinding<"u",x=new BE,v={},I=t.getContextAttributes();let V=null,R=null;const N=[],L=[],F=new Dt;let E=null,P=null;const k=new oi;k.viewport=new nn;const q=new oi;q.viewport=new nn;const $=[k,q],ie=new j_;let Y=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let K=N[de];return K===void 0&&(K=new Xu,N[de]=K),K.getTargetRaySpace()},this.getControllerGrip=function(de){let K=N[de];return K===void 0&&(K=new Xu,N[de]=K),K.getGripSpace()},this.getHand=function(de){let K=N[de];return K===void 0&&(K=new Xu,N[de]=K),K.getHandSpace()};function ge(de){const K=L.indexOf(de.inputSource);if(K===-1)return;const Re=N[K];Re!==void 0&&(Re.update(de.inputSource,de.frame,p||u),Re.dispatchEvent({type:de.type,data:de.inputSource}))}function ae(){o.removeEventListener("select",ge),o.removeEventListener("selectstart",ge),o.removeEventListener("selectend",ge),o.removeEventListener("squeeze",ge),o.removeEventListener("squeezestart",ge),o.removeEventListener("squeezeend",ge),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",X);for(let de=0;de<N.length;de++){const K=L[de];K!==null&&(L[de]=null,N[de].disconnect(K))}Y=null,ne=null,x.reset();for(const de in v)delete v[de];if(e.setRenderTarget(V),M=null,g=null,S=null,o=null,R=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),P!==null){const de=P.camera;de.fov=P.fov,de.zoom=P.zoom,de.updateProjectionMatrix(),P=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){l=de,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){f=de,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(de){p=de},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&b&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(de){if(o=de,o!==null){if(V=e.getRenderTarget(),o.addEventListener("select",ge),o.addEventListener("selectstart",ge),o.addEventListener("selectend",ge),o.addEventListener("squeeze",ge),o.addEventListener("squeezestart",ge),o.addEventListener("squeezeend",ge),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",X),I.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ye=null,Oe=null;I.depth&&(Oe=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=I.stencil?Ss:xr,Ye=I.stencil?co:Ki);const at={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(at),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Fi(g.textureWidth,g.textureHeight,{format:Ui,type:li,depthTexture:new fo(g.textureWidth,g.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Fi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:li,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(de){for(let K=0;K<de.removed.length;K++){const Re=de.removed[K],Ye=L.indexOf(Re);Ye>=0&&(L[Ye]=null,N[Ye].disconnect(Re))}for(let K=0;K<de.added.length;K++){const Re=de.added[K];let Ye=L.indexOf(Re);if(Ye===-1){for(let at=0;at<N.length;at++)if(at>=L.length){L.push(Re),Ye=at;break}else if(L[at]===null){L[at]=Re,Ye=at;break}if(Ye===-1)break}const Oe=N[Ye];Oe&&Oe.connect(Re)}}const Q=new he,ee=new he;function D(de,K,Re){Q.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(Re.matrixWorld);const Ye=Q.distanceTo(ee),Oe=K.projectionMatrix.elements,at=Re.projectionMatrix.elements,vt=Oe[14]/(Oe[10]-1),Ge=Oe[14]/(Oe[10]+1),ut=(Oe[9]+1)/Oe[5],st=(Oe[9]-1)/Oe[5],ke=(Oe[8]-1)/Oe[0],dt=(at[8]+1)/at[0],xt=vt*ke,It=vt*dt,rt=Ye/(-ke+dt),Ft=rt*-ke;if(K.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(Ft),de.translateZ(rt),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),Oe[10]===-1)de.projectionMatrix.copy(K.projectionMatrix),de.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const j=vt+rt,Xt=Ge+rt,wt=xt-Ft,U=It+(Ye-Ft),y=ut*Ge/Xt*j,J=st*Ge/Xt*j;de.projectionMatrix.makePerspective(wt,U,y,J,j,Xt),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function ce(de,K){K===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(K.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(o===null)return;let K=de.near,Re=de.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),ie.near=q.near=k.near=K,ie.far=q.far=k.far=Re,(Y!==ie.near||ne!==ie.far)&&(o.updateRenderState({depthNear:ie.near,depthFar:ie.far}),Y=ie.near,ne=ie.far),ie.layers.mask=de.layers.mask|6,k.layers.mask=ie.layers.mask&-5,q.layers.mask=ie.layers.mask&-3;const Ye=de.parent,Oe=ie.cameras;ce(ie,Ye);for(let at=0;at<Oe.length;at++)ce(Oe[at],Ye);Oe.length===2?D(ie,k,q):ie.projectionMatrix.copy(k.projectionMatrix),P===null&&de.isPerspectiveCamera&&(P={camera:de,fov:de.fov,zoom:de.zoom}),Se(de,ie,Ye)};function Se(de,K,Re){Re===null?de.matrix.copy(K.matrixWorld):(de.matrix.copy(Re.matrixWorld),de.matrix.invert(),de.matrix.multiply(K.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(K.projectionMatrix),de.projectionMatrixInverse.copy(K.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=ef*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(de){m=de,g!==null&&(g.fixedFoveation=de),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=de)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ie)},this.getCameraTexture=function(de){return v[de]};let Xe=null;function Fe(de,K){if(_=K.getViewerPose(p||u),A=K,_!==null){const Re=_.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Ye=!1;Re.length!==ie.cameras.length&&(ie.cameras.length=0,Ye=!0);for(let Ge=0;Ge<Re.length;Ge++){const ut=Re[Ge];let st=null;if(M!==null)st=M.getViewport(ut);else{const dt=S.getViewSubImage(g,ut);st=dt.viewport,Ge===0&&(e.setRenderTargetTextures(R,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(R))}let ke=$[Ge];ke===void 0&&(ke=new oi,ke.layers.enable(Ge),ke.viewport=new nn,$[Ge]=ke),ke.matrix.fromArray(ut.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ut.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(st.x,st.y,st.width,st.height),Ge===0&&(ie.matrix.copy(ke.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Ye===!0&&ie.cameras.push(ke)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){S=r.getBinding();const Ge=S.getDepthInformation(Re[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(Ge,o.renderState)}if(Oe&&Oe.includes("camera-access")&&b){e.state.unbindTexture(),S=r.getBinding();for(let Ge=0;Ge<Re.length;Ge++){const ut=Re[Ge].camera;if(ut){let st=v[ut];st||(st=new Eg,v[ut]=st);const ke=S.getCameraImage(ut);st.sourceTexture=ke}}}}for(let Re=0;Re<N.length;Re++){const Ye=L[Re],Oe=N[Re];Ye!==null&&Oe!==void 0&&Oe.update(Ye,K,p||u)}Xe&&Xe(de,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),A=null}const Ie=new Cg;Ie.setAnimationLoop(Fe),this.setAnimationLoop=function(de){Xe=de},this.dispose=function(){}}}const GE=new an,Ig=new _t;Ig.set(-1,0,0,0,1,0,0,0,1);function VE(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,wg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,I,V,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),S(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&M(x,v,R)):v.isMeshMatcapMaterial?(l(x,v),A(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),b(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?m(x,v,I,V):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Qn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Qn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const I=e.get(v),V=I.envMap,R=I.envMapRotation;V&&(x.envMap.value=V,x.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(R)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ig),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,I,V){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*I,x.scale.value=V*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,I){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const I=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function HE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,N){const L=N.program;r.uniformBlockBinding(R,L)}function p(R,N){let L=o[R.id];L===void 0&&(x(R),L=_(R),o[R.id]=L,R.addEventListener("dispose",I));const F=N.program;r.updateUBOMapping(R,F);const E=e.render.frame;l[R.id]!==E&&(g(R),l[R.id]=E)}function _(R){const N=S();R.__bindingPointIndex=N;const L=s.createBuffer(),F=R.__size,E=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,F,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function S(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=o[R.id],L=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let E=0,P=L.length;E<P;E++){const k=L[E];if(Array.isArray(k))for(let q=0,$=k.length;q<$;q++)M(k[q],E,q,F);else M(k,E,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,N,L,F){if(b(R,N,L,F)===!0){const E=R.__offset,P=R.value;if(Array.isArray(P)){let k=0;for(let q=0;q<P.length;q++){const $=P[q],ie=v($);A($,R.__data,k),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(P,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,R.__data)}}function A(R,N,L){typeof R=="number"||typeof R=="boolean"?N[0]=R:R.isMatrix3?(N[0]=R.elements[0],N[1]=R.elements[1],N[2]=R.elements[2],N[3]=0,N[4]=R.elements[3],N[5]=R.elements[4],N[6]=R.elements[5],N[7]=0,N[8]=R.elements[6],N[9]=R.elements[7],N[10]=R.elements[8],N[11]=0):ArrayBuffer.isView(R)?N.set(new R.constructor(R.buffer,R.byteOffset,N.length)):R.toArray(N,L)}function b(R,N,L,F){const E=R.value,P=N+"_"+L;if(F[P]===void 0)return typeof E=="number"||typeof E=="boolean"?F[P]=E:ArrayBuffer.isView(E)?F[P]=E.slice():F[P]=E.clone(),!0;{const k=F[P];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return F[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function x(R){const N=R.uniforms;let L=0;const F=16;for(let P=0,k=N.length;P<k;P++){const q=Array.isArray(N[P])?N[P]:[N[P]];for(let $=0,ie=q.length;$<ie;$++){const Y=q[$],ne=Array.isArray(Y.value)?Y.value:[Y.value];for(let ge=0,ae=ne.length;ge<ae;ge++){const X=ne[ge],Q=v(X),ee=L%F,D=ee%Q.boundary,ce=ee+D;L+=D,ce!==0&&F-ce<Q.storage&&(L+=F-ce),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=Q.storage}}}const E=L%F;return E>0&&(L+=F-E),R.__size=L,R.__cache={},this}function v(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",R),N}function I(R){const N=R.target;N.removeEventListener("dispose",I);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function V(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:m,update:p,dispose:V}}const WE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function XE(){return Hi===null&&(Hi=new D_(WE,16,16,ws,$i),Hi.name="DFG_LUT",Hi.minFilter=zn,Hi.magFilter=zn,Hi.wrapS=mr,Hi.wrapT=mr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class YE{constructor(e={}){const{canvas:t=o_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=li}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const b=M,x=new Set([ff,df,uf]),v=new Set([li,Ki,lo,co,lf,cf]),I=new Uint32Array(4),V=new Int32Array(4),R=new he;let N=null,L=null;const F=[],E=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let q=!1,$=null,ie=null,Y=null,ne=null;this._outputColorSpace=_i;let ge=0,ae=0,X=null,Q=-1,ee=null;const D=new nn,ce=new nn;let Se=null;const Xe=new Rt(0);let Fe=0,Ie=t.width,de=t.height,K=1,Re=null,Ye=null;const Oe=new nn(0,0,Ie,de),at=new nn(0,0,Ie,de);let vt=!1;const Ge=new _f;let ut=!1,st=!1;const ke=new an,dt=new he,xt=new nn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Ft(){return X===null?K:1}let j=r;function Xt(w,G){return t.getContext(w,G)}let wt,U,y,J,ue,me,we,Ne,xe,C,te,ye,oe,Me,B,$e,Be,H,De,_e,Ce,Pe,Ee;try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sf}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",on,!1),j===null){const G="webgl2";if(j=Xt(G,w),j===null)throw Xt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(w){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Bt("WebGLRenderer: "+w.message),w}function He(){wt=new Xy(j),wt.init(),Ce=new FE(j,wt),U=new Uy(j,wt,e,Ce),y=new IE(j,wt),U.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ie=j.createFramebuffer(),Y=j.createFramebuffer(),ne=j.createFramebuffer(),J=new jy(j),ue=new SE,me=new UE(j,wt,y,ue,U,Ce,J),we=new Wy(k),Ne=new $_(j),Pe=new Dy(j,Ne),xe=new Yy(j,Ne,J,Pe),C=new $y(j,xe,Ne,Pe,J),H=new Ky(j,U,me),B=new Fy(ue),te=new xE(k,we,wt,U,Pe,B),ye=new VE(k,ue),oe=new ME,Me=new RE(wt),Be=new Ny(k,we,y,C,A,m),$e=new DE(k,C,U),Ee=new HE(j,J,U,y),De=new Iy(j,wt,J),_e=new qy(j,wt,J),J.programs=te.programs,k.capabilities=U,k.extensions=wt,k.properties=ue,k.renderLists=oe,k.shadowMap=$e,k.state=y,k.info=J}b!==li&&(P=new Jy(b,t.width,t.height,f,o,l));const je=new zE(k,j);this.xr=je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(Ie,de,!1))},this.getSize=function(w){return w.set(Ie,de)},this.setSize=function(w,G,fe=!0){if(je.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=w,de=G,t.width=Math.floor(w*K),t.height=Math.floor(G*K),fe===!0&&(t.style.width=w+"px",t.style.height=G+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Ie*K,de*K).floor()},this.setDrawingBufferSize=function(w,G,fe){Ie=w,de=G,K=fe,t.width=Math.floor(w*fe),t.height=Math.floor(G*fe),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(b===li){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Oe)},this.setViewport=function(w,G,fe,se){w.isVector4?Oe.set(w.x,w.y,w.z,w.w):Oe.set(w,G,fe,se),y.viewport(D.copy(Oe).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,G,fe,se){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,G,fe,se),y.scissor(ce.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(w){y.setScissorTest(vt=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){Ye=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,fe=!0){let se=0;if(w){let re=!1;if(X!==null){const Ve=X.texture.format;re=x.has(Ve)}if(re){const Ve=X.texture.type,Ue=v.has(Ve),ze=Be.getClearColor(),Je=Be.getClearAlpha(),tt=ze.r,ht=ze.g,St=ze.b;Ue?(I[0]=tt,I[1]=ht,I[2]=St,I[3]=Je,j.clearBufferuiv(j.COLOR,0,I)):(V[0]=tt,V[1]=ht,V[2]=St,V[3]=Je,j.clearBufferiv(j.COLOR,0,V))}else se|=j.COLOR_BUFFER_BIT}G&&(se|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&j.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Be.dispose(),oe.dispose(),Me.dispose(),ue.dispose(),we.dispose(),C.dispose(),Pe.dispose(),Ee.dispose(),te.dispose(),je.dispose(),je.removeEventListener("sessionstart",jr),je.removeEventListener("sessionend",Kr),Mn.stop()};function At(w){w.preventDefault(),rm("WebGLRenderer: Context Lost."),q=!0}function Ct(){rm("WebGLRenderer: Context Restored."),q=!1;const w=J.autoReset,G=$e.enabled,fe=$e.autoUpdate,se=$e.needsUpdate,re=$e.type;He(),J.autoReset=w,$e.enabled=G,$e.autoUpdate=fe,$e.needsUpdate=se,$e.type=re}function on(w){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Cn(w){const G=w.target;G.removeEventListener("dispose",Cn),xi(G)}function xi(w){mn(w),ue.remove(w)}function mn(w){const G=ue.get(w).programs;G!==void 0&&(G.forEach(function(fe){te.releaseProgram(fe)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,fe,se,re,Ve){G===null&&(G=It);const Ue=re.isMesh&&re.matrixWorld.determinantAffine()<0,ze=ft(w,G,fe,se,re);y.setMaterial(se,Ue);let Je=fe.index,tt=1;if(se.wireframe===!0){if(Je=xe.getWireframeAttribute(fe),Je===void 0)return;tt=2}const ht=fe.drawRange,St=fe.attributes.position;let Ze=ht.start*tt,bt=(ht.start+ht.count)*tt;Ve!==null&&(Ze=Math.max(Ze,Ve.start*tt),bt=Math.min(bt,(Ve.start+Ve.count)*tt)),Je!==null?(Ze=Math.max(Ze,0),bt=Math.min(bt,Je.count)):St!=null&&(Ze=Math.max(Ze,0),bt=Math.min(bt,St.count));const rn=bt-Ze;if(rn<0||rn===1/0)return;Pe.setup(re,se,ze,fe,Je);let Wt,zt=De;if(Je!==null&&(Wt=Ne.get(Je),zt=_e,zt.setIndex(Wt)),re.isMesh)se.wireframe===!0?(y.setLineWidth(se.wireframeLinewidth*Ft()),zt.setMode(j.LINES)):zt.setMode(j.TRIANGLES);else if(re.isLine){let gn=se.linewidth;gn===void 0&&(gn=1),y.setLineWidth(gn*Ft()),re.isLineSegments?zt.setMode(j.LINES):re.isLineLoop?zt.setMode(j.LINE_LOOP):zt.setMode(j.LINE_STRIP)}else re.isPoints?zt.setMode(j.POINTS):re.isSprite&&zt.setMode(j.TRIANGLES);if(re.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const gn=re._multiDrawStarts,qe=re._multiDrawCounts,ln=re._multiDrawCount,Pt=Je?Ne.get(Je).bytesPerElement:1,Dn=ue.get(se).currentProgram.getUniforms();for(let yt=0;yt<ln;yt++)Dn.setValue(j,"_gl_DrawID",yt),zt.render(gn[yt]/Pt,qe[yt])}else if(re.isInstancedMesh)zt.renderInstances(Ze,rn,re.count);else if(fe.isInstancedBufferGeometry){const gn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,gn);zt.renderInstances(Ze,rn,qe)}else zt.render(Ze,rn)};function Gt(w,G,fe,se){$!==null&&w.isNodeMaterial&&$.setObject(se,w),ut===!0&&B.setState(w,fe,!1),w.transparent===!0&&w.side===Xi&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Qi(w,G,se),w.side=ys,w.needsUpdate=!0,Qi(w,G,se),w.side=Xi):Qi(w,G,se)}this.compile=function(w,G,fe=null){fe===null&&(fe=w),$!==null&&$.renderStart(w,G,fe),L=Me.get(fe),L.init(G),E.push(L),fe.traverseVisible(function(re){re.isLight&&re.layers.test(G.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),w!==fe&&w.traverseVisible(function(re){re.isLight&&re.layers.test(G.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights(),$!==null&&$.updateLights(L.state.lightsArray),st=this.localClippingEnabled,ut=B.init(this.clippingPlanes,st),ut===!0&&B.setGlobalState(this.clippingPlanes,G),$!==null&&$e.render(L.state.shadowsArray,fe,G);const se=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ve=re.material;if(Ve)if(Array.isArray(Ve))for(let Ue=0;Ue<Ve.length;Ue++){const ze=Ve[Ue];Gt(ze,fe,G,re),se.add(ze)}else Gt(Ve,fe,G,re),se.add(Ve)}),L=E.pop(),$!==null&&$.renderEnd(),se},this.compileAsync=function(w,G,fe=null){const se=this.compile(w,G,fe);return new Promise(re=>{function Ve(){if(se.forEach(function(Ue){const Je=ue.get(Ue).currentProgram;(Je===void 0||Je.isReady())&&se.delete(Ue)}),se.size===0){re(w);return}setTimeout(Ve,10)}wt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Ln=null;function Nn(w){Ln&&Ln(w)}function jr(){Mn.stop()}function Kr(){Mn.start()}const Mn=new Cg;Mn.setAnimationLoop(Nn),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(w){Ln=w,je.setAnimationLoop(w),w===null?Mn.stop():Mn.start()},je.addEventListener("sessionstart",jr),je.addEventListener("sessionend",Kr),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;$!==null&&$.renderStart(w,G);const fe=je.enabled===!0&&je.isPresenting===!0,se=P!==null&&(X===null||fe)&&P.begin(k,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(G),G=je.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,G,X),L=Me.get(w,E.length),L.init(G),L.state.textureUnits=me.getTextureUnits(),E.push(L),ke.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ge.setFromProjectionMatrix(ke,qi,G.reversedDepth),st=this.localClippingEnabled,ut=B.init(this.clippingPlanes,st),N=oe.get(w,F.length),N.init(),F.push(N),je.enabled===!0&&je.isPresenting===!0){const Ue=k.xr.getDepthSensingMesh();Ue!==null&&Zi(Ue,G,-1/0,k.sortObjects)}Zi(w,G,0,k.sortObjects),N.finish(),$!==null&&$.updateLights(L.state.lightsArray),k.sortObjects===!0&&N.sort(Re,Ye),rt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,rt&&Be.addToRenderList(N,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&B.beginShadows();const re=L.state.shadowsArray;if($e.render(re,w,G),ut===!0&&B.endShadows(),(se&&P.hasRenderPass())===!1){const Ue=N.opaque,ze=N.transmissive;if(L.setupLights(),G.isArrayCamera){const Je=G.cameras;if(ze.length>0)for(let tt=0,ht=Je.length;tt<ht;tt++){const St=Je[tt];As(Ue,ze,w,St)}rt&&Be.render(w);for(let tt=0,ht=Je.length;tt<ht;tt++){const St=Je[tt];Sr(N,w,St,St.viewport)}}else ze.length>0&&As(Ue,ze,w,G),rt&&Be.render(w),Sr(N,w,G)}X!==null&&ae===0&&(me.updateMultisampleRenderTarget(X),me.updateRenderTargetMipmap(X)),se&&P.end(k),w.isScene===!0&&w.onAfterRender(k,w,G),Pe.resetDefaultState(),Q=-1,ee=null,E.pop(),E.length>0?(L=E[E.length-1],me.setTextureUnits(L.state.textureUnits),ut===!0&&B.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,$!==null&&$.renderEnd()};function Zi(w,G,fe,se){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Ge)){se&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ke);const Ue=C.update(w),ze=w.material;ze.visible&&N.push(w,Ue,ze,fe,xt.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Ge))){const Ue=C.update(w),ze=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),xt.copy(Ue.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(ke)),Array.isArray(ze)){const Je=Ue.groups;for(let tt=0,ht=Je.length;tt<ht;tt++){const St=Je[tt],Ze=ze[St.materialIndex];Ze&&Ze.visible&&N.push(w,Ue,Ze,fe,xt.z,St,G)}}else ze.visible&&N.push(w,Ue,ze,fe,xt.z,null,G)}}const Ve=w.children;for(let Ue=0,ze=Ve.length;Ue<ze;Ue++)Zi(Ve[Ue],G,fe,se)}function Sr(w,G,fe,se){const{opaque:re,transmissive:Ve,transparent:Ue}=w;L.setupLightsView(fe),ut===!0&&B.setGlobalState(k.clippingPlanes,fe),se&&y.viewport(D.copy(se)),re.length>0&&Ji(re,G,fe),Ve.length>0&&Ji(Ve,G,fe),Ue.length>0&&Ji(Ue,G,fe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function As(w,G,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const Ze=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new Fi(1,1,{generateMipmaps:!0,type:Ze?$i:li,minFilter:xs,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[se.id],Ue=se.viewport||D;Ve.setSize(Ue.z*k.transmissionResolutionScale,Ue.w*k.transmissionResolutionScale);const ze=k.getRenderTarget(),Je=k.getActiveCubeFace(),tt=k.getActiveMipmapLevel();k.setRenderTarget(Ve),k.getClearColor(Xe),Fe=k.getClearAlpha(),Fe<1&&k.setClearColor(16777215,.5),k.clear(),rt&&Be.render(fe);const ht=k.toneMapping;k.toneMapping=ji;const St=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),ut===!0&&B.setGlobalState(k.clippingPlanes,se),Ji(w,fe,se),me.updateMultisampleRenderTarget(Ve),me.updateRenderTargetMipmap(Ve),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let bt=0,rn=G.length;bt<rn;bt++){const Wt=G[bt],{object:zt,geometry:gn,material:qe,group:ln}=Wt;if(qe.side===Xi&&zt.layers.test(se.layers)){const Pt=qe.side;qe.side=Qn,qe.needsUpdate=!0,$r(zt,fe,se,gn,qe,ln),qe.side=Pt,qe.needsUpdate=!0,Ze=!0}}Ze===!0&&(me.updateMultisampleRenderTarget(Ve),me.updateRenderTargetMipmap(Ve))}k.setRenderTarget(ze,Je,tt),k.setClearColor(Xe,Fe),St!==void 0&&(se.viewport=St),k.toneMapping=ht}function Ji(w,G,fe){const se=G.isScene===!0?G.overrideMaterial:null;for(let re=0,Ve=w.length;re<Ve;re++){const Ue=w[re],{object:ze,geometry:Je,group:tt}=Ue;let ht=Ue.material;ht.allowOverride===!0&&se!==null&&(ht=se),ze.layers.test(fe.layers)&&$r(ze,G,fe,Je,ht,tt)}}function $r(w,G,fe,se,re,Ve){$!==null&&re.isNodeMaterial&&$.setObject(w,re),w.onBeforeRender(k,G,fe,se,re,Ve),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(k,G,fe,se,w,Ve),re.transparent===!0&&re.side===Xi&&re.forceSinglePass===!1?(re.side=Qn,re.needsUpdate=!0,k.renderBufferDirect(fe,G,se,re,w,Ve),re.side=ys,re.needsUpdate=!0,k.renderBufferDirect(fe,G,se,re,w,Ve),re.side=Xi):k.renderBufferDirect(fe,G,se,re,w,Ve),w.onAfterRender(k,G,fe,se,re,Ve)}function Qi(w,G,fe){G.isScene!==!0&&(G=It);const se=ue.get(w),re=L.state.lights,Ve=L.state.shadowsArray,Ue=re.state.version,ze=te.getParameters(w,re.state,Ve,G,fe,L.state.lightProbeGridArray),Je=te.getProgramCacheKey(ze);let tt=se.programs;se.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,se.fog=G.fog;const ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;se.envMap=we.get(w.envMap||se.environment,ht),se.envMapRotation=se.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",Cn),tt=new Map,se.programs=tt);let St=tt.get(Je);if(St!==void 0){if(se.currentProgram===St&&se.lightsStateVersion===Ue)return Jr(w,ze),St}else ze.uniforms=te.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,fe,ze),w.onBeforeCompile(ze,k),St=te.acquireProgram(ze,Je),tt.set(Je,St),se.uniforms=ze.uniforms;const Ze=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=B.uniform),Jr(w,ze),se.needsLights=jt(w),se.lightsStateVersion=Ue,se.needsLights&&(Ze.ambientLightColor.value=re.state.ambient,Ze.lightProbe.value=re.state.probe,Ze.sunLights.value=re.state.sun,Ze.sunLightShadows.value=re.state.sunShadow,Ze.directionalLights.value=re.state.directional,Ze.directionalLightShadows.value=re.state.directionalShadow,Ze.spotLights.value=re.state.spot,Ze.spotLightShadows.value=re.state.spotShadow,Ze.rectAreaLights.value=re.state.rectArea,Ze.ltc_1.value=re.state.rectAreaLTC1,Ze.ltc_2.value=re.state.rectAreaLTC2,Ze.pointLights.value=re.state.point,Ze.pointLightShadows.value=re.state.pointShadow,Ze.hemisphereLights.value=re.state.hemi,Ze.sunShadowMatrix.value=re.state.sunShadowMatrix,Ze.sunShadowCascade.value=re.state.sunShadowCascade,Ze.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ze.spotLightMatrix.value=re.state.spotLightMatrix,Ze.spotLightMap.value=re.state.spotLightMap,Ze.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=L.state.lightProbeGridArray.length>0,se.currentProgram=St,se.uniformsList=null,St}function Zr(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Hl.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Jr(w,G){const fe=ue.get(w);fe.outputColorSpace=G.outputColorSpace,fe.batching=G.batching,fe.batchingColor=G.batchingColor,fe.instancing=G.instancing,fe.instancingColor=G.instancingColor,fe.instancingMorph=G.instancingMorph,fe.skinning=G.skinning,fe.morphTargets=G.morphTargets,fe.morphNormals=G.morphNormals,fe.morphColors=G.morphColors,fe.morphTargetsCount=G.morphTargetsCount,fe.numClippingPlanes=G.numClippingPlanes,fe.numIntersection=G.numClipIntersection,fe.vertexAlphas=G.vertexAlphas,fe.vertexTangents=G.vertexTangents,fe.toneMapping=G.toneMapping}function ct(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;R.setFromMatrixPosition(G.matrixWorld);for(let fe=0,se=w.length;fe<se;fe++){const re=w[fe];if(re.texture!==null&&re.boundingBox.containsPoint(R))return re}return null}function ft(w,G,fe,se,re){G.isScene!==!0&&(G=It),me.resetTextureUnits();const Ve=G.fog,Ue=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?G.environment:null,ze=X===null?k.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Lt.workingColorSpace,Je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,tt=we.get(se.envMap||Ue,Je),ht=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,St=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!fe.morphAttributes.position,bt=!!fe.morphAttributes.normal,rn=!!fe.morphAttributes.color;let Wt=ji;se.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=k.toneMapping);const zt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,gn=zt!==void 0?zt.length:0,qe=ue.get(se),ln=L.state.lights;if(ut===!0&&(st===!0||w!==ee)){const Vt=w===ee&&se.id===Q;B.setState(se,w,Vt)}let Pt=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ln.state.version||qe.outputColorSpace!==ze||re.isBatchedMesh&&qe.batching===!1||!re.isBatchedMesh&&qe.batching===!0||re.isBatchedMesh&&qe.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&qe.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||re.isInstancedMesh&&qe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&qe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&qe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&qe.instancingMorph===!1&&re.morphTexture!==null||qe.envMap!==tt||se.fog===!0&&qe.fog!==Ve||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==B.numPlanes||qe.numIntersection!==B.numIntersection)||qe.vertexAlphas!==ht||qe.vertexTangents!==St||qe.morphTargets!==Ze||qe.morphNormals!==bt||qe.morphColors!==rn||qe.toneMapping!==Wt||qe.morphTargetsCount!==gn||!!qe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,qe.__version=se.version);let Dn=qe.currentProgram;Pt===!0&&(Dn=Qi(se,G,re),$&&se.isNodeMaterial&&$.onUpdateProgram(se,Dn,qe));let yt=!1,Si=!1,er=!1;const Ot=Dn.getUniforms(),Jt=qe.uniforms;if(y.useProgram(Dn.program)&&(yt=!0,Si=!0,er=!0),se.id!==Q&&(Q=se.id,Si=!0),qe.needsLights){const Vt=ct(L.state.lightProbeGridArray,re);qe.lightProbeGrid!==Vt&&(qe.lightProbeGrid=Vt,Si=!0)}if(yt||ee!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(j,"projectionMatrix",w.projectionMatrix),Ot.setValue(j,"viewMatrix",w.matrixWorldInverse);const ui=Ot.map.cameraPosition;ui!==void 0&&ui.setValue(j,dt.setFromMatrixPosition(w.matrixWorld)),U.logarithmicDepthBuffer&&Ot.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,Si=!0,er=!0)}if(qe.needsLights&&(ln.state.sunShadowMap.length>0&&Ot.setValue(j,"sunShadowMap",ln.state.sunShadowMap,me),ln.state.directionalShadowMap.length>0&&Ot.setValue(j,"directionalShadowMap",ln.state.directionalShadowMap,me),ln.state.spotShadowMap.length>0&&Ot.setValue(j,"spotShadowMap",ln.state.spotShadowMap,me),ln.state.pointShadowMap.length>0&&Ot.setValue(j,"pointShadowMap",ln.state.pointShadowMap,me)),re.isSkinnedMesh){Ot.setOptional(j,re,"bindMatrix"),Ot.setOptional(j,re,"bindMatrixInverse");const Vt=re.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ot.setValue(j,"boneTexture",Vt.boneTexture,me))}re.isBatchedMesh&&(Ot.setOptional(j,re,"batchingTexture"),Ot.setValue(j,"batchingTexture",re._matricesTexture,me),Ot.setOptional(j,re,"batchingIdTexture"),Ot.setValue(j,"batchingIdTexture",re._indirectTexture,me),Ot.setOptional(j,re,"batchingColorTexture"),re._colorsTexture!==null&&Ot.setValue(j,"batchingColorTexture",re._colorsTexture,me));const yi=fe.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&H.update(re,fe,Dn),(Si||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,Ot.setValue(j,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&G.environment!==null&&(Jt.envMapIntensity.value=G.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=XE()),Si){if(Ot.setValue(j,"toneMappingExposure",k.toneMappingExposure),qe.needsLights&&Zt(Jt,er),Ve&&se.fog===!0&&ye.refreshFogUniforms(Jt,Ve),ye.refreshMaterialUniforms(Jt,se,K,de,L.state.transmissionRenderTarget[w.id]),qe.needsLights&&qe.lightProbeGrid){const Vt=qe.lightProbeGrid;Jt.probesSH.value=Vt.texture,Jt.probesMin.value.copy(Vt.boundingBox.min),Jt.probesMax.value.copy(Vt.boundingBox.max),Jt.probesResolution.value.copy(Vt.resolution)}Hl.upload(j,Zr(qe),Jt,me)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Hl.upload(j,Zr(qe),Jt,me),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(j,"center",re.center),Ot.setValue(j,"modelViewMatrix",re.modelViewMatrix),Ot.setValue(j,"normalMatrix",re.normalMatrix),Ot.setValue(j,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Vt=se.uniformsGroups;for(let ui=0,Mi=Vt.length;ui<Mi;ui++){const Ei=Vt[ui];Ee.update(Ei,Dn),Ee.bind(Ei,Dn)}}return Dn}function Zt(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function jt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ge},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,G,fe){const se=ue.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ue.get(w.texture).__webglTexture=G,ue.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const fe=ue.get(w);fe.__webglFramebuffer=G,fe.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,fe=0){X=w,ge=G,ae=fe;let se=null,re=!1,Ve=!1;if(w){const ze=ue.get(w);if(ze.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(j.FRAMEBUFFER,ze.__webglFramebuffer),D.copy(w.viewport),ce.copy(w.scissor),Se=w.scissorTest,y.viewport(D),y.scissor(ce),y.setScissorTest(Se),Q=-1;return}else if(ze.__webglFramebuffer===void 0)me.setupRenderTarget(w);else if(ze.__hasExternalTextures)me.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ht=w.depthTexture;if(ze.__boundDepthTexture!==ht){if(ht!==null&&ue.has(ht)&&(w.width!==ht.image.width||w.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ve=!0);const tt=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[G])?se=tt[G][fe]:se=tt[G],re=!0):w.samples>0&&me.useMultisampledRTT(w)===!1?se=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?se=tt[fe]:se=tt,D.copy(w.viewport),ce.copy(w.scissor),Se=w.scissorTest}else D.copy(Oe).multiplyScalar(K).floor(),ce.copy(at).multiplyScalar(K).floor(),Se=vt;if(fe!==0&&(se=ie),y.bindFramebuffer(j.FRAMEBUFFER,se)&&y.drawBuffers(w,se),y.viewport(D),y.scissor(ce),y.setScissorTest(Se),re){const ze=ue.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,fe)}else if(Ve){const ze=G;for(let Je=0;Je<w.textures.length;Je++){const tt=ue.get(w.textures[Je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Je,tt.__webglTexture,fe,ze)}}else if(w!==null&&fe!==0){const ze=ue.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ze.__webglTexture,fe)}Q=-1};function Yt(w){const G=ue.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=U.textureFormatReadable(w.format),G.__typeReadable=U.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,fe,se,re,Ve,Ue,ze=0){if(!(w&&w.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Je=Je[Ue]),Je){y.bindFramebuffer(j.FRAMEBUFFER,Je);try{const tt=w.textures[ze],ht=tt.format,St=tt.type;w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ze);const Ze=Yt(tt);if(Ze.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-se&&fe>=0&&fe<=w.height-re&&j.readPixels(G,fe,se,re,Ce.convert(ht),Ce.convert(St),Ve)}finally{const tt=X!==null?ue.get(X).__webglFramebuffer:null;y.bindFramebuffer(j.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(w,G,fe,se,re,Ve,Ue,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Je=Je[Ue]),Je)if(G>=0&&G<=w.width-se&&fe>=0&&fe<=w.height-re){y.bindFramebuffer(j.FRAMEBUFFER,Je);const tt=w.textures[ze],ht=tt.format,St=tt.type;w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ze);const Ze=Yt(tt);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,bt),j.bufferData(j.PIXEL_PACK_BUFFER,Ve.byteLength,j.STREAM_READ),j.readPixels(G,fe,se,re,Ce.convert(ht),Ce.convert(St),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const rn=X!==null?ue.get(X).__webglFramebuffer:null;y.bindFramebuffer(j.FRAMEBUFFER,rn);const Wt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await l_(j,Wt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,bt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ve),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(bt),j.deleteSync(Wt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,fe=0){const se=Math.pow(2,-fe),re=Math.floor(w.image.width*se),Ve=Math.floor(w.image.height*se),Ue=G!==null?G.x:0,ze=G!==null?G.y:0;me.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Ue,ze,re,Ve),y.unbindTexture()},this.copyTextureToTexture=function(w,G,fe=null,se=null,re=0,Ve=0){let Ue,ze,Je,tt,ht,St,Ze,bt,rn;const Wt=w.isCompressedTexture?w.mipmaps[Ve]:w.image;if(fe!==null)Ue=fe.max.x-fe.min.x,ze=fe.max.y-fe.min.y,Je=fe.isBox3?fe.max.z-fe.min.z:1,tt=fe.min.x,ht=fe.min.y,St=fe.isBox3?fe.min.z:0;else{const Jt=Math.pow(2,-re);Ue=Math.floor(Wt.width*Jt),ze=Math.floor(Wt.height*Jt),w.isDataArrayTexture?Je=Wt.depth:w.isData3DTexture?Je=Math.floor(Wt.depth*Jt):Je=1,tt=0,ht=0,St=0}se!==null?(Ze=se.x,bt=se.y,rn=se.z):(Ze=0,bt=0,rn=0);const zt=Ce.convert(G.format),gn=Ce.convert(G.type);let qe;G.isData3DTexture?(me.setTexture3D(G,0),qe=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(me.setTexture2DArray(G,0),qe=j.TEXTURE_2D_ARRAY):(me.setTexture2D(G,0),qe=j.TEXTURE_2D),y.activeTexture(j.TEXTURE0),y.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const ln=y.getParameter(j.UNPACK_ROW_LENGTH),Pt=y.getParameter(j.UNPACK_IMAGE_HEIGHT),Dn=y.getParameter(j.UNPACK_SKIP_PIXELS),yt=y.getParameter(j.UNPACK_SKIP_ROWS),Si=y.getParameter(j.UNPACK_SKIP_IMAGES);y.pixelStorei(j.UNPACK_ROW_LENGTH,Wt.width),y.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Wt.height),y.pixelStorei(j.UNPACK_SKIP_PIXELS,tt),y.pixelStorei(j.UNPACK_SKIP_ROWS,ht),y.pixelStorei(j.UNPACK_SKIP_IMAGES,St);const er=w.isDataArrayTexture||w.isData3DTexture,Ot=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const Jt=ue.get(w),yi=ue.get(G),Vt=ue.get(Jt.__renderTarget),ui=ue.get(yi.__renderTarget);y.bindFramebuffer(j.READ_FRAMEBUFFER,Vt.__webglFramebuffer),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Mi=0;Mi<Je;Mi++)er&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,re,St+Mi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ue.get(G).__webglTexture,Ve,rn+Mi)),j.blitFramebuffer(tt,ht,Ue,ze,Ze,bt,Ue,ze,j.DEPTH_BUFFER_BIT,j.NEAREST);y.bindFramebuffer(j.READ_FRAMEBUFFER,null),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||ue.has(w)){const Jt=ue.get(w),yi=ue.get(G);y.bindFramebuffer(j.READ_FRAMEBUFFER,Y),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,ne);for(let Vt=0;Vt<Je;Vt++)er?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Jt.__webglTexture,re,St+Vt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Jt.__webglTexture,re),Ot?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yi.__webglTexture,Ve,rn+Vt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yi.__webglTexture,Ve),re!==0?j.blitFramebuffer(tt,ht,Ue,ze,Ze,bt,Ue,ze,j.COLOR_BUFFER_BIT,j.NEAREST):Ot?j.copyTexSubImage3D(qe,Ve,Ze,bt,rn+Vt,tt,ht,Ue,ze):j.copyTexSubImage2D(qe,Ve,Ze,bt,tt,ht,Ue,ze);y.bindFramebuffer(j.READ_FRAMEBUFFER,null),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ot?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(qe,Ve,Ze,bt,rn,Ue,ze,Je,zt,gn,Wt.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,Ve,Ze,bt,rn,Ue,ze,Je,zt,Wt.data):j.texSubImage3D(qe,Ve,Ze,bt,rn,Ue,ze,Je,zt,gn,Wt):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ve,Ze,bt,Ue,ze,zt,gn,Wt.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ve,Ze,bt,Wt.width,Wt.height,zt,Wt.data):j.texSubImage2D(j.TEXTURE_2D,Ve,Ze,bt,Ue,ze,zt,gn,Wt);y.pixelStorei(j.UNPACK_ROW_LENGTH,ln),y.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Pt),y.pixelStorei(j.UNPACK_SKIP_PIXELS,Dn),y.pixelStorei(j.UNPACK_SKIP_ROWS,yt),y.pixelStorei(j.UNPACK_SKIP_IMAGES,Si),Ve===0&&G.generateMipmaps&&j.generateMipmap(qe),y.unbindTexture()},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){ge=0,ae=0,X=null,y.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const Kl=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puerto Madero",en:"Obelisk & Puerto Madero"},weatherLabel:{es:"Brisa del Plata",en:"River Plate Breeze"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"São Paulo",en:"São Paulo"},monumentName:{es:"Ponte Octávio Frias de Oliveira",en:"Octávio Frias Cable Bridge"},weatherLabel:{es:"Viento Paulista",en:"Paulista Crosswind"},skyTop:"#041221",skyMid:"#0c2b45",skyBot:"#154c68",winColor:"#fde047",accentColor:"#34d399",weather:"breeze",windStrength:.49,monument:"sealink"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Bruma Dorada de Altura",en:"High-Altitude Golden Haze"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Aguja del Empire State",en:"Empire State Spire"},weatherLabel:{es:"Corriente de Manhattan",en:"Manhattan Canyon Draft"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#60a5fa",weather:"steam",windStrength:.63,monument:"empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",windStrength:.71,monument:"empire"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Nieve Ligera Nocturna",en:"Light Night Snow"},skyTop:"#0b061f",skyMid:"#1d1242",skyBot:"#312168",winColor:"#ddd6fe",accentColor:"#a78bfa",weather:"snow",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben, London Eye y The Shard",en:"Big Ben, London Eye & The Shard"},weatherLabel:{es:"Niebla del Támesis",en:"Thames Dense Fog"},skyTop:"#070b12",skyMid:"#151e2e",skyBot:"#263449",winColor:"#fecaca",accentColor:"#ef4444",weather:"fog",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel Iluminada",en:"Illuminated Eiffel Tower"},weatherLabel:{es:"Ráfagas de Altura",en:"High-Altitude Gusts"},skyTop:"#08091c",skyMid:"#1e1938",skyBot:"#3b2b54",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Viento de la Sierra",en:"Sierra Night Wind"},skyTop:"#160b06",skyMid:"#33180c",skyBot:"#522612",winColor:"#fdba74",accentColor:"#fb923c",weather:"breeze",windStrength:.99,monument:"obelisco"},{index:9,flag:"🇩🇪",name:{es:"Berlín",en:"Berlin"},monumentName:{es:"Torre de TV en Alexanderplatz",en:"Fernsehturm Alexanderplatz"},weatherLabel:{es:"Frente Frío Europeo",en:"Cold European Front"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#22d3ee",weather:"gusts",windStrength:1.06,monument:"cntower"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Corriente del Estrecho",en:"Strait Crosswind"},skyTop:"#060c1f",skyMid:"#182247",skyBot:"#2e386b",winColor:"#fde047",accentColor:"#f43f5e",weather:"gusts",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Pirámides de Giza",en:"Pyramids of Giza"},weatherLabel:{es:"Viento de Arena Nocturno",en:"Desert Sand Wind"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#f97316",weather:"sand",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Corriente Térmica del Golfo",en:"Gulf Thermal Updraft"},skyTop:"#040406",skyMid:"#1c1405",skyBot:"#3b2908",winColor:"#fde047",accentColor:"#f59e0b",weather:"lasers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Rain"},skyTop:"#120621",skyMid:"#2a1045",skyBot:"#461b6e",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Tormenta Tropical",en:"Tropical Storm Gusts"},skyTop:"#110620",skyMid:"#271148",skyBot:"#3f1c6e",winColor:"#fde047",accentColor:"#fb7185",weather:"lightning",windStrength:1.42,monument:"empire"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Reflectores de la Bahía",en:"Bay Laser Searchlights"},skyTop:"#031021",skyMid:"#0a2b4c",skyBot:"#114a75",winColor:"#a5f3fc",accentColor:"#22d3ee",weather:"lasers",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Ráfagas de Tifón",en:"Typhoon Gusts"},skyTop:"#031119",skyMid:"#0a2c3d",skyBot:"#124963",winColor:"#6ee7b7",accentColor:"#10b981",weather:"typhoon",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Viento Eléctrico Neón",en:"Cyberpunk Electric Wind"},skyTop:"#040724",skyMid:"#0f1c59",skyBot:"#1d3587",winColor:"#7dd3fc",accentColor:"#00f5d4",weather:"cyber",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Ópera de Sídney y Harbour Bridge",en:"Sydney Opera House & Harbour Bridge"},weatherLabel:{es:"Vendaval Oceánico",en:"Oceanic Harbor Gale"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Shinjuku Neón y Torre de Tokio",en:"Shinjuku Neon & Tokyo Tower"},weatherLabel:{es:"Tormenta Final en las Alturas",en:"Ultimate High-Altitude Storm"},skyTop:"#10041f",skyMid:"#260b45",skyBot:"#42146e",winColor:"#fda4af",accentColor:"#fb7185",weather:"lightning",windStrength:1.85,monument:"tokyotower"}],vs=[{id:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,gemCost:0,name:{es:"Urbano Callejero",en:"Street Urban"},desc:{es:"Buzo con capucha gris grafito oscuro que flamea con el viento, pantalón cargo negro y botas urbanas.",en:"Dark graphite hoodie fluttering in the wind, black cargo pants and urban boots."},hoodieColor:"#334155",pantsColor:"#0f172a",trimColor:"#94a3b8",shoeColor:"#e2e8f0",glowColor:null,goldTrail:!1},{id:"skin_2",icon:"🏃",unlockLevel:11,unlockCity:3,gemCost:150,name:{es:"Night Runner",en:"Night Runner"},desc:{es:"Rompevientos negro con tiras reflectivas blancas y calzado aerodinámico de alta visibilidad.",en:"Black windbreaker with white reflective strips and high-visibility aerodynamic footwear."},hoodieColor:"#111827",pantsColor:"#090d16",trimColor:"#f8fafc",shoeColor:"#38bdf8",glowColor:"#e2e8f0",goldTrail:!1},{id:"skin_3",icon:"⚡",unlockLevel:21,unlockCity:5,gemCost:300,name:{es:"Infiltrado Táctico",en:"Tactical Infiltrator"},desc:{es:"Campera técnica entallada negro mate con arnés y líneas de neón cian en talones y muñecas.",en:"Matte black fitted tactical jacket with harness and cyan neon lines on heels and wrists."},hoodieColor:"#0f172a",pantsColor:"#060a12",trimColor:"#22d3ee",shoeColor:"#06b6d4",glowColor:"#22d3ee",goldTrail:!1},{id:"skin_4",icon:"🎩",unlockLevel:36,unlockCity:8,gemCost:500,name:{es:"Ilusionista de Altura",en:"High-Wire Illusionist"},desc:{es:"Chaleco sastrero oscuro con detalles púrpura/plata, cinta reactiva al viento y guantes de precisión.",en:"Dark tailored vest with purple/silver accents, wind-reactive headband and precision gloves."},hoodieColor:"#1e1b2e",pantsColor:"#0d0b14",trimColor:"#c084fc",shoeColor:"#e2e8f0",glowColor:"#a855f7",goldTrail:!1},{id:"skin_5",icon:"🥷",unlockLevel:61,unlockCity:13,gemCost:800,name:{es:"Cyber-Shinobi Tokio",en:"Tokyo Cyber-Shinobi"},desc:{es:"Traje técnico oscuro con circuito carmesí luminoso en espalda y botas magnéticas.",en:"Dark technical shinobi suit with glowing crimson spine circuit and magnetic boots."},hoodieColor:"#14111a",pantsColor:"#09070d",trimColor:"#f43f5e",shoeColor:"#fb7185",glowColor:"#f43f5e",goldTrail:!1},{id:"skin_6",icon:"👑",unlockLevel:81,unlockCity:17,gemCost:1200,name:{es:"Leyenda Black & Gold",en:"Black & Gold Legend"},desc:{es:"Traje aerodinámico de fibra de carbono negro profundo con bordes dorados y estela luminosa.",en:"Deep black carbon-fiber aerodynamic suit with bright golden edges and luminous arm trail."},hoodieColor:"#09090b",pantsColor:"#050507",trimColor:"#fde047",shoeColor:"#f59e0b",glowColor:"#fde047",goldTrail:!0}],_s=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,gemCost:0,name:{es:"Esferas Cromadas",en:"Chrome Spheres"},color:"#a3e635"},{id:"torches",icon:"🔥",mult:3,unlockLevel:6,gemCost:120,name:{es:"Antorchas de Fuego",en:"Fire Torches"},color:"#f97316"},{id:"knives",icon:"🔪",mult:6,unlockLevel:16,gemCost:260,name:{es:"Cuchillos Tácticos",en:"Tactical Knives"},color:"#cbd5e1"},{id:"chainsaws",icon:"🪚",mult:12,unlockLevel:31,gemCost:480,name:{es:"Motosierras",en:"Chainsaws"},color:"#ef4444"},{id:"dynamite",icon:"🧨",mult:25,unlockLevel:56,gemCost:750,name:{es:"Dinamita Activa",en:"Active Dynamite"},color:"#dc2626"},{id:"goldbars",icon:"🪙",mult:50,unlockLevel:81,gemCost:1100,name:{es:"Lingotes 24K",en:"24K Gold Bars"},color:"#fde047"}],qE=[{id:"pole",icon:"⚖️",maxLevel:10,baseCost:140,costScale:1.42,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Vara de Inercia",en:"Inertia Balance Pole"},desc:{es:"Aumenta el momento de inercia rotacional, desacelerando la caída gravitatoria lateral.",en:"Increases rotational moment of inertia, slowing down lateral gravitational tipping."}},{id:"boots",icon:"🥾",maxLevel:10,baseCost:160,costScale:1.45,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Incrementa la adherencia al cable de acero, reduce el empuje del viento y acelera el paso.",en:"Increases grip on the steel cable, dampens wind gusts and speeds up walking pace."}},{id:"gloves",icon:"🧤",maxLevel:10,baseCost:150,costScale:1.42,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Amplía la ventana dorada de captura (catchThreshold) y amortigua el sacudón por fallo.",en:"Widens the golden capture window (catchThreshold) and dampens balance jolts on a miss."}}],jE=qE,KE=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],$E=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],ZE=[{id:"bundle_starter",icon:"⚡",coinCost:1500,gems:80,coins:1200,leaguePts:150,popular:!1,tag:"🎁 RECLAMAR",name:{es:"Cofre de Equilibrista",en:"Tightrope Chest"},perks:{es:["+80 💎 Gemas al instante","+150 🏆 Puntos de Liga","Recarga para Gancho Salvavidas"],en:["+80 💎 Instant Gems","+150 🏆 League Points","Grapple Hook Save refill"]}},{id:"bundle_pro",icon:"🔥",coinCost:4500,gems:260,coins:4e3,leaguePts:500,popular:!0,tag:"⭐ POPULAR",unlockProp:"torches",unlockSkin:"skin_2",badge:{es:"RECOMENDADO",en:"RECOMMENDED"},name:{es:"Cofre Maestro del Abismo",en:"Abyss Master Chest"},perks:{es:["+260 💎 Gemas","🔥 Desbloquea Antorchas de Fuego (x3)",'🏃 Desbloquea Aspecto "Night Runner"',"+500 🏆 Puntos de Liga"],en:["+260 💎 Gems","🔥 Unlocks Fire Torches (x3)",'🏃 Unlocks "Night Runner" Skin',"+500 🏆 League Points"]}},{id:"bundle_legend",icon:"👑",coinCost:12e3,gems:800,coins:12e3,leaguePts:1500,popular:!0,tag:"👑 ÉLITE",bootsBonus:5,unlockProp:"chainsaws",unlockSkin:"skin_6",badge:{es:"ÉLITE DE TEMPORADA",en:"SEASON ELITE"},name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+800 💎 Gemas","🥾 Calzado Magnético +5 Niveles","🪚 Desbloquea Motosierras (x12)",'👑 Desbloquea Aspecto "Leyenda Black & Gold"',"+1,500 🏆 Puntos de Liga"],en:["+800 💎 Gems","🥾 Magnetic Footwear +5 Levels","🪚 Unlocks Chainsaws (x12)",'👑 Unlocks "Black & Gold Legend" Skin',"+1,500 🏆 League Points"]}}],Km={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",iosInstallHint:'Para instalar en tu dispositivo: tocá el menú del navegador y seleccioná "Agregar a pantalla de inicio".',leagueBanner:"LIGA DE TEMPORADA",leagueBannerLabel:"🏆 LIGA DE TEMPORADA:",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",leftBtn:"IZQ",rightBtn:"DER",holdBalanceTapJuggle:"EQUILIBRIO / CAPTURA",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",grappleHookTitle:"GANCHO SALVAVIDAS",grappleHookCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Cofres",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",mapBtn:"🗺️ Mapa",skinsBtn:"Aspectos",gearBtn:"🎒 Armería",storeBtn:"🛒 Cofres",leagueBtn:"🏆 Liga",level:"Nivel",levelWord:"Nivel",cityWord:"Ciudad",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",lossModalHeader:"🚨 ¡PERDISTE EL EJE DE GRAVEDAD EN EL METRO {meter}m DE {city} (NIVEL {level})!",lossModalSub:"Cámara lenta activada ({seconds}s antes de caer al abismo)...",grappleCta:"🪝 DISPARAR GANCHO SALVAVIDAS Y VOLVER AL CABLE (20 💎)",rooftopCleared:"🏁 ¡AZOTEA ALCANZADA!",levelCleared:"¡AZOTEA ALCANZADA!",bossChestTitle:"🎁 ¡COFRE DE JEFE DE CIUDAD DESBLOQUEADO!",nextLevel:"SIGUIENTE NIVEL",nextLevelBtn:"▶️ SIGUIENTE NIVEL",worldMapTitle:"🗺️ CAMPAÑA MUNDIAL — 20 CIUDADES (100 NIVELES)",skinsModalTitle:"🧥 TIENDA DE ASPECTOS URBANOS",skinsModalNote:"Equipá cualquier aspecto desbloqueado conservando el 100% de tus mejoras de Armería RPG.",equipBtn:"EQUIPAR",equippedBadge:"✓ EQUIPADO",unlockWithGems:"Desbloquear ({cost} 💎)",lockedAtLevel:"Nivel {level} o {cost} 💎",armoryTitle:"ARMERÍA RPG DE PRECISIÓN",armorySub:"Mejorá tu equipamiento técnico para dominar las ráfagas y la gravedad",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",gearModalTitle:"🎒 ARMERÍA RPG DE PRECISIÓN (NVL 1–10)",upgradeCoins:"Mejorar ({cost} 🪙)",upgradeGems:"Instantáneo (15 💎)",maxLevelReached:"NIVEL MÁXIMO (10/10)",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos de Gemas y Monedas.",leagueModalDesc:"Sumá Puntos de Liga (LP) superando niveles, encadenando capturas rítmicas perfectas y abriendo Cofres de Jefe de Ciudad.",yourLeaguePoints:"🏆 Tus Puntos de Liga:",claimRewardBtn:"🎁 Reclamar Cofre",claimedBadge:"✓ Reclamado",shopTitle:"TIENDA DE COFRES DE TEMPORADA",shopSub:"Obtené Cofres de Gemas y Monedas para desbloquear Aspectos, Objetos y Ganchos Salvavidas.",storeModalTitle:"🛒 TIENDA DE COFRES Y EQUIPAMIENTO",storeModalSubtitle:"Canjeá tus Monedas ganadas en el cable por Cofres de Temporada, Gemas y Objetos Especiales.",exchangeCoinsBtn:"Canjear por {cost} 🪙",freeDailyGemsBtn:"🎁 Reclamar +25 💎 de Bonificación Diaria",dailyClaimedMsg:"✅ ¡Bonificación acreditada!",lobbySubtitle:"📍 Nivel {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Ciudades (1-100)",lobbyGearSkinsBtn:"🎒 Armería y Skins",lobbyLeagueBtn:"🏆 Liga de Temporada",lobbyPlayCta:"▶️ JUGAR / SALTAR AL CABLE",pauseBtnLabel:"⏸️ PAUSA",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",pauseModalTitle:"⏸️ PARTIDA EN PAUSA",pauseProgressInfo:"📍 {flag} {city} • Nivel {level} ({meter}m / {target}m)",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",resumeGameBtn:"▶️ REANUDAR PARTIDA",restartLevelBtn:"🔄 REINICIAR NIVEL",openGearSkinsFromPauseBtn:"🎒 ABRIR ARMERÍA / CAMBIAR ASPECTO",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",mainMenuShortBtn:"🏠 Menú Principal",retryFromZeroBtn:"🔄 Reintentar desde 0m",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",tabEquipment:"🎒 Armería RPG (1-10)",tabSkins:"🧥 Aspectos (6 Skins)",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",iosInstallHint:'To install on your device: tap the browser menu and select "Add to Home Screen".',leagueBanner:"SEASON LEAGUE",leagueBannerLabel:"🏆 SEASON LEAGUE:",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",leftBtn:"LEFT",rightBtn:"RIGHT",holdBalanceTapJuggle:"BALANCE / CATCH",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",grappleHookTitle:"GRAPPLE HOOK",grappleHookCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"Chests",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",mapBtn:"🗺️ Map",skinsBtn:"Skins",gearBtn:"🎒 Armory",storeBtn:"🛒 Chests",leagueBtn:"🏆 League",level:"Level",levelWord:"Level",cityWord:"City",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",lossModalHeader:"🚨 YOU LOST YOUR CENTER OF GRAVITY AT METER {meter}m OF {city} (LEVEL {level})!",lossModalSub:"Slow-motion activated ({seconds}s before falling into the abyss)...",grappleCta:"🪝 FIRE GRAPPLE HOOK SAVE & RETURN TO WIRE (20 💎)",rooftopCleared:"🏁 ROOFTOP REACHED!",levelCleared:"ROOFTOP REACHED!",bossChestTitle:"🎁 CITY BOSS CHEST UNLOCKED!",nextLevel:"NEXT LEVEL",nextLevelBtn:"▶️ NEXT LEVEL",worldMapTitle:"🗺️ WORLD CAMPAIGN — 20 CITIES (100 LEVELS)",skinsModalTitle:"🧥 URBAN SKIN SHOP",skinsModalNote:"Equip any unlocked skin while keeping 100% of your RPG Armory upgrades.",equipBtn:"EQUIP",equippedBadge:"✓ EQUIPPED",unlockWithGems:"Unlock ({cost} 💎)",lockedAtLevel:"Level {level} or {cost} 💎",armoryTitle:"PRECISION RPG ARMORY",armorySub:"Upgrade your technical gear to master wind gusts and gravity",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",gearModalTitle:"🎒 PRECISION RPG ARMORY (LVL 1–10)",upgradeCoins:"Upgrade ({cost} 🪙)",upgradeGems:"Instant (15 💎)",maxLevelReached:"MAX LEVEL (10/10)",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Gem & Coin Chests.",leagueModalDesc:"Earn League Points (LP) by clearing levels, chaining rhythmic catches and unlocking City Boss Chests.",yourLeaguePoints:"🏆 Your League Points:",claimRewardBtn:"🎁 Claim Chest",claimedBadge:"✓ Claimed",shopTitle:"SEASON CHEST SHOP",shopSub:"Claim Gem & Coin Chests to unlock Skins, Juggling Props and Grapple Hook Saves.",storeModalTitle:"🛒 CHEST & GEAR SHOP",storeModalSubtitle:"Exchange Coins earned on the wire for Season Chests, Gems and Special Props.",exchangeCoinsBtn:"Exchange for {cost} 🪙",freeDailyGemsBtn:"🎁 Claim +25 💎 Daily Bonus",dailyClaimedMsg:"✅ Bonus credited!",lobbySubtitle:"📍 Level {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Cities (1-100)",lobbyGearSkinsBtn:"🎒 Armory & Skins",lobbyLeagueBtn:"🏆 Season League",lobbyPlayCta:"▶️ PLAY / STEP ON THE WIRE",pauseBtnLabel:"⏸️ PAUSE",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",pauseModalTitle:"⏸️ GAME PAUSED",pauseProgressInfo:"📍 {flag} {city} • Level {level} ({meter}m / {target}m)",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",resumeGameBtn:"▶️ RESUME GAME",restartLevelBtn:"🔄 RESTART LEVEL",openGearSkinsFromPauseBtn:"🎒 OPEN ARMORY / CHANGE SKIN",backToLobbyBtn:"BACK TO MAIN MENU",mainMenuShortBtn:"🏠 Main Menu",retryFromZeroBtn:"🔄 Retry from 0m",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",tabEquipment:"🎒 RPG Armory (1-10)",tabSkins:"🧥 Skins (6 Outfits)",youLabel:"YOU (Tightrope Walker)"}};for(let s=0;s<Kl.length;s++){const e=Kl[s];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}const JE=[1,1.2,1.5,2,3,5];for(let s=0;s<vs.length;s++){const e=vs[s];e.bonusMult=e.bonusMult||JE[s]||1,e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.coatColor=e.coatColor||e.hoodieColor}for(let s=0;s<_s.length;s++){const e=_s[s];e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function $m(){const s=new Date,e=new Date(s.getFullYear(),s.getMonth()+1,0,23,59,59),t=Math.max(0,e.getTime()-s.getTime()),r=Math.floor(t/(1e3*60*60*24)),o=Math.floor(t/(1e3*60*60)%24),l=Math.floor(t/1e3/60%60),u=Math.floor(t/1e3%60);return{days:r,hours:o,mins:l,secs:u}}function Ug(s){const e=Math.max(1,Math.min(100,s||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function QE(s){const e=Math.max(1,Math.min(100,s||1)),t=Ug(e),r=100+(e-1)*5;return Math.round(r*t)}function pd(s){const e=Math.max(1,Math.min(100,s||1)),t=Math.min(19,Math.max(0,Math.floor((e-1)/5))),r=Kl[t],o=(e-1)%5+1,l=Ug(e),u=5,f=Number((u*l).toFixed(3)),m=QE(e),p=e<4?0:Number((l*(1+(e-4)*.018)).toFixed(3)),_=Number((l*1.15).toFixed(3)),S=Number((.62*_).toFixed(3)),g=Number(Math.max(.14,.28-(e-1)/99*.14).toFixed(4)),M=e<4?6:Number(Math.max(4.5,6-(e-4)/96*1.5).toFixed(2)),A=.32+r.windStrength*.45+o*.045,b=1.08+e/100*.92,x=e<=15?2:e<=55?3:4;return{level:e,cityIndex:t,city:r,stageInCity:o,walkSpeedMultiplier:l,baseWalkSpeed:u,walkSpeed:f,totalDistance:m,targetMeters:m,targetDistance:m,difficultyFactor:p,juggleSpeedMultiplier:_,juggleBaseSpeed:S,catchWindow:g,gravityFactor:b,windMax:A,windChangeFreq:M,windBaseForce:A,gravityInstability:b,defaultObjects:x}}class e1{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0}get enabled(){return!this.muted}set enabled(e){this.muted=!e}playCatch(e=1){this.playPerfect(e)}playLevelWin(){this.playVictory()}playWindGust(){this.playThunder()}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}playPerfect(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=520+Math.min(e*35,480);r.type="triangle",r.frequency.setValueAtTime(l,t),r.frequency.exponentialRampToValueAtTime(l*1.5,t+.16),o.gain.setValueAtTime(.15,t),o.gain.exponentialRampToValueAtTime(.001,t+.21),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.22)}playMiss(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(165,e),t.frequency.linearRampToValueAtTime(82,e+.22),r.gain.setValueAtTime(.16,e),r.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.26),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(60)}playRingPass(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[660,880,1175];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(t[r],e+r*.05),l.gain.setValueAtTime(.12,e+r*.05),l.gain.exponentialRampToValueAtTime(.001,e+r*.05+.18),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.05),o.stop(e+r*.05+.19)}}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<480||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,50,25]),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(68,t),r.frequency.exponentialRampToValueAtTime(38,t+.14),o.gain.setValueAtTime(.22,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.17)}playThunder(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(92,e),t.frequency.exponentialRampToValueAtTime(28,e+.55),r.gain.setValueAtTime(.13,e),r.gain.exponentialRampToValueAtTime(.001,e+.6),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.62)}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([100,50,150]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(420,e),t.frequency.exponentialRampToValueAtTime(75,e+.85),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.9),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.92)}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,70]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(880,e+.28),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.32),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.34)}playStartWire(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(30),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[330,440,660];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.055),l.gain.setValueAtTime(.14,e+r*.055),l.gain.exponentialRampToValueAtTime(.001,e+r*.055+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.055),o.stop(e+r*.055+.24)}}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.08),l.gain.setValueAtTime(.15,e+r*.08),l.gain.exponentialRampToValueAtTime(.001,e+r*.08+.34),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.08),o.stop(e+r*.08+.36)}}}const hn=new e1,Fg="NO_MIRES_ABAJO_PLAYSTORE_V3",ro=.82;function t1(){return new Oi({uniforms:{uBaseColor:{value:new Rt(395278)},uRimColor:{value:new Rt(62206)},uRimPower:{value:2.15},uRimStrength:{value:.96}},vertexShader:`
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
        float rim = smoothstep(0.24, 0.86, fresnel) * uRimStrength;
        vec3 finalCol = mix(uBaseColor, uRimColor, rim);
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `})}function n1(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#030712"),t.addColorStop(.22,"#07162c"),t.addColorStop(.44,"#0c2d48"),t.addColorStop(.56,"#145374"),t.addColorStop(.64,"#0ea5e9"),t.addColorStop(.72,"#0c2d48"),t.addColorStop(1,"#030712"),e.fillStyle=t,e.fillRect(0,0,256,512);const r=e.createRadialGradient(128,305,10,128,305,135);return r.addColorStop(0,"rgba(0, 242, 254, 0.52)"),r.addColorStop(.45,"rgba(14, 165, 233, 0.26)"),r.addColorStop(1,"rgba(7, 22, 44, 0.0)"),e.fillStyle=r,e.fillRect(0,0,256,512),new Jl(s)}function i1(){const s=document.createElement("canvas");s.width=64,s.height=128;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"#0f172a"),t.addColorStop(.35,"#475569"),t.addColorStop(.5,"#e2e8f0"),t.addColorStop(.65,"#334155"),t.addColorStop(1,"#090d16"),e.fillStyle=t,e.fillRect(0,0,64,128),e.strokeStyle="#06080e",e.lineWidth=5;for(let o=-32;o<160;o+=16)e.beginPath(),e.moveTo(0,o),e.lineTo(64,o+24),e.stroke(),e.strokeStyle="rgba(0, 242, 254, 0.85)",e.lineWidth=2,e.beginPath(),e.moveTo(0,o+5),e.lineTo(64,o+29),e.stroke(),e.strokeStyle="#06080e",e.lineWidth=5;const r=new Jl(s);return r.wrapS=Es,r.wrapT=Es,r.repeat.set(1,720),r}function Zm(s=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=s?"#081c30":"#051020",t.fillRect(0,0,128,256);const r=8,o=26,l=128/r,u=256/o;for(let m=0;m<o;m++)for(let p=0;p<r;p++){const _=(m*37+p*19)%29;_<(s?18:12)||(_%5===0?t.fillStyle=s?"rgba(0, 242, 254, 0.35)":"rgba(0, 242, 254, 0.72)":_%7===0?t.fillStyle=s?"rgba(253, 224, 71, 0.28)":"rgba(253, 224, 71, 0.62)":t.fillStyle=s?"rgba(125, 211, 252, 0.25)":"rgba(186, 230, 253, 0.45)",t.fillRect(p*l+3,m*u+2,l-6,u-4))}const f=new Jl(e);return f.wrapS=Es,f.wrapT=Es,f}function r1(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");return e.fillStyle="#060c18",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=10,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.strokeStyle="#fde047",e.lineWidth=5,e.beginPath(),e.arc(128,128,84,0,Math.PI*2),e.stroke(),e.fillStyle="#00f2fe",e.font="900 110px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,132),new Jl(s)}function s1(s){const e=s.clientWidth||420,t=s.clientHeight||780,r=new w_;r.background=new Rt(398118),r.fog=new gf(664121,.011);const o=new oi(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new YE({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=af,l.toneMappingExposure=1.22,s.innerHTML="",s.appendChild(l.domElement);const u=new Y_(3718648,.85);r.add(u);const f=new X_(62206,1.65);f.position.set(0,28,-65),r.add(f);const m=new wm(62206,3.8,22);m.position.set(0,1.35,0),r.add(m);const p=new wm(16638023,4.2,24);p.position.set(0,2.5,-.3),r.add(p);const _=n1(),S=new ha(340,220),g=new pn({map:_,fog:!1,depthWrite:!1}),M=new mt(S,g);M.position.set(0,12,-210),r.add(M);const A=1800,b=i1(),x=new Di(.042,.042,A,16);x.rotateX(Math.PI/2);const v=new ad({color:13358561,map:b,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),I=new mt(x,v);I.position.set(0,0,-A*.5+12),r.add(I);const V=new Di(.015,.015,A,8);V.rotateX(Math.PI/2);const R=new pn({color:62206,transparent:!0,opacity:.72}),N=new mt(V,R);N.position.set(0,.022,-A*.5+12),r.add(N);const L=new ad({color:330002,roughness:.8,metalness:.2}),F=new ai(7.2,60,7),E=new mt(F,L);E.position.set(0,-30.045,3.5),r.add(E);const P=new xn,k=new ai(9.2,70,9.2),q=new mt(k,L);q.position.set(0,-35.045,0),P.add(q);const $=r1(),ie=new ha(7,7);ie.rotateX(-Math.PI/2);const Y=new pn({map:$}),ne=new mt(ie,Y);ne.position.set(0,.01,0),P.add(ne);const ge=new ao(3.4,.075,12,36);ge.rotateX(Math.PI/2);const ae=new pn({color:62206}),X=new mt(ge,ae);X.position.set(0,.12,0),P.add(X),P.position.set(0,0,-100),r.add(P);const Q=Zm(!1),ee=Zm(!0),D=new ad({color:464166,map:Q,emissive:959977,emissiveMap:Q,emissiveIntensity:.58,roughness:.5,metalness:.4}),ce=new pn({color:729657,map:ee}),Se=new pn({color:1128020}),Xe=new pn({color:62206,transparent:!0,opacity:.35}),Fe=[];for(let ct=0;ct<44;ct++){const ft=ct%2===0,Zt=ct%3,jt=Math.floor(ct/2),Yt=6.5+ct%4*2.1+Zt*2.2,w=6.5+ct*3%4*1.8,G=72+ct*13%42+Zt*16,fe=new ai(Yt,G,w),se=Zt===0?D:Zt===1?ce:Se,re=new mt(fe,se),Ve=Zt===0?12.2+ct%3*2.8:Zt===1?21.5+ct%3*4.2:32+ct%4*5,Ue=(ft?-1:1)*Ve,ze=10-jt*13,Je=-60+G*.5;if(re.position.set(Ue,Je,ze),Zt===0){const tt=new ai(.12,G,.12),ht=new mt(tt,Xe);ht.position.set(ft?Yt*.5+.04:-Yt*.5-.04,0,w*.5),re.add(ht)}r.add(re),Fe.push(re)}const Ie=[],de=new xf(5.5,115,20,1,!0);for(let ct=0;ct<10;ct++){const ft=ct%2===0,Zt=new pn({color:ct%3===0?62206:959977,transparent:!0,opacity:ct%3===0?.11:.075,side:Xi,depthWrite:!1,blending:Wr}),jt=new mt(de,Zt),Yt=(ft?-1:1)*(8.5+ct%3*4.5),w=-18-ct*24;jt.position.set(Yt,8,w),jt.rotation.z=(ft?-1:1)*.24,r.add(jt),Ie.push({mesh:jt,baseAngle:(ft?-1:1)*.24,speed:.45+ct%4*.18,phaseOffset:ct*1.1})}const K=[],Re=new ai(.4,.18,2.2),Ye=new pn({color:62206}),Oe=new pn({color:15680580});for(let ct=0;ct<20;ct++){const ft=ct%2===0,Zt=new mt(Re,ft?Oe:Ye),jt=(ct%4-1.5)*2.1;Zt.position.set(jt,-36,-ct*12),r.add(Zt),K.push({mesh:Zt,speed:(ft?-1:1)*(15+ct%4*3.5)})}const at=new xn;at.position.set(0,0,0),r.add(at);const vt=t1(),Ge=new pn({color:62206}),ut=ct=>{const ft=new xn;ft.position.set(ct?-.08:.08,.88,0);const Zt=new gs(.064,.34,10,18),jt=new mt(Zt,vt);jt.position.set(ct?.018:-.018,-.19,0),jt.rotation.z=ct?.05:-.05,ft.add(jt);const Yt=new xn;Yt.position.set(ct?.035:-.035,-.41,0),ft.add(Yt);const w=new gs(.05,.34,10,18),G=new mt(w,vt);G.position.set(ct?.02:-.02,-.2,0),G.rotation.z=ct?.04:-.04,Yt.add(G);const fe=new xn;fe.position.set(ct?.035:-.035,-.43,0),Yt.add(fe);const se=new gs(.042,.14,8,14);se.rotateX(Math.PI/2);const re=new mt(se,vt);return re.position.set(0,-.01,-.025),fe.add(re),{hipGroup:ft,kneeGroup:Yt,bootGroup:fe}},st=ut(!0),ke=ut(!1);at.add(st.hipGroup),at.add(ke.hipGroup);const dt=new xn;at.add(dt);const xt=new Di(.135,.12,.15,18);xt.scale(1.15,1,.72);const It=new mt(xt,vt);It.position.set(0,.89,0),dt.add(It);const rt=new xn;rt.position.set(0,.95,0),dt.add(rt);const Ft=new Di(.165,.125,.24,18);Ft.scale(1.18,1,.68);const j=new mt(Ft,vt);j.position.set(0,.12,0),rt.add(j);const Xt=new Di(.215,.162,.28,20);Xt.scale(1.24,1,.68);const wt=new mt(Xt,vt);wt.position.set(0,.35,0),rt.add(wt);const U=new pr(.078,16,16),y=new mt(U,vt);y.position.set(-.255,.45,0),rt.add(y);const J=new mt(U,vt);J.position.set(.255,.45,0),rt.add(J);const ue=new Di(.05,.06,.1,14),me=new mt(ue,vt);me.position.set(0,.54,0),rt.add(me);const we=new xn;we.position.set(0,.67,0),rt.add(we);const Ne=new pr(.118,24,24);Ne.scale(.95,1.06,1.02);const xe=new mt(Ne,vt);we.add(xe);const C=new ao(.116,.016,12,28);C.rotateX(Math.PI/2);const te=new mt(C,Ge);te.position.set(0,.025,0),we.add(te);const ye=new xn;ye.position.set(0,.022,.118),we.add(ye);const oe=new ai(.16,.028,.008);oe.translate(.08,0,0);const Me=new mt(oe,Ge);ye.add(Me);const B=new xn;B.position.set(.155,0,0),Me.add(B);const $e=new ai(.16,.024,.007);$e.translate(.08,0,0);const Be=new mt($e,Ge);B.add(Be);const H=new xn;H.position.set(.155,0,0),Be.add(H);const De=new ai(.15,.018,.006);De.translate(.075,0,0);const _e=new mt(De,Ge);H.add(_e);const Ce=ct=>{const ft=new xn;ft.position.set(ct?-.255:.255,.44,0);const Zt=new gs(.048,.22,10,16),jt=new mt(Zt,vt);jt.position.set(ct?-.08:.08,-.11,-.02),jt.rotation.z=ct?-.56:.56,ft.add(jt);const Yt=new xn;Yt.position.set(ct?-.16:.16,-.21,-.04),ft.add(Yt);const w=new gs(.042,.21,10,16),G=new mt(w,vt);G.position.set(ct?-.07:.07,-.04,-.09),G.rotation.x=.72,G.rotation.z=ct?-.45:.45,Yt.add(G);const fe=new pr(.046,14,14),se=new mt(fe,vt);return se.position.set(ct?-.14:.14,-.08,-.18),Yt.add(se),{shoulderGroup:ft,elbowGroup:Yt,handMesh:se}},Pe=Ce(!0),Ee=Ce(!1);rt.add(Pe.shoulderGroup),rt.add(Ee.shoulderGroup);const He=new xn;He.position.set(0,.17,-.2),rt.add(He);const je=4,At=new Di(.018,.018,je,16);At.rotateZ(Math.PI/2);const Ct=new pn({color:14742270}),on=new mt(At,Ct);He.add(on);const Cn=new Di(.052,.052,je,14);Cn.rotateZ(Math.PI/2);const xi=new pn({color:62206,transparent:!0,opacity:.42,blending:Wr,depthWrite:!1}),mn=new mt(Cn,xi);He.add(mn);const Gt=new pr(.055,14,14),Ln=new mt(Gt,Ge);Ln.position.set(-je*.5,0,0),He.add(Ln);const Nn=new mt(Gt,Ge);Nn.position.set(je*.5,0,0),He.add(Nn);const jr=new ao(.14,.012,10,28),Kr=new pn({color:62206,transparent:!0,opacity:.55,blending:Wr}),Mn=new pn({color:62206,transparent:!0,opacity:.55,blending:Wr}),Zi=new mt(jr,Kr),Sr=new mt(jr,Mn);r.add(Zi),r.add(Sr);const As=new pr(.12,24,24),Ji=new pr(.24,16,16),$r=new pr(.072,12,12),Qi=new pn({color:16710083}),Zr=new pn({color:16638023,transparent:!0,opacity:.52,blending:Wr,depthWrite:!1}),Jr=[];for(let ct=0;ct<4;ct++){const ft=new xn,Zt=new mt(As,Qi),jt=new mt(Ji,Zr);ft.add(Zt),ft.add(jt),r.add(ft);const Yt=[];for(let w=0;w<7;w++){const G=new pn({color:w<3?16638023:16096779,transparent:!0,opacity:.68-w*.085,blending:Wr,depthWrite:!1}),fe=new mt($r,G),se=1-w*.12;fe.scale.set(se,se,se),r.add(fe),Yt.push(fe)}Jr.push({group:ft,core:Zt,halo:jt,trails:Yt})}return{scene:r,camera:o,renderer:l,cyanPoleLight:m,goldOrbLight:p,backlitBackdrop:M,cableTex:b,arrivalGroup:P,beaconRingMesh:X,skyscrapers:Fe,spotlightBeams:Ie,carMeshes:K,acrobatGroup:at,upperBodyGroup:dt,torsoSpineGroup:rt,headGroup:we,leftLeg:st,rightLeg:ke,leftArm:Pe,rightArm:Ee,poleGroup:He,ribbonPivot:ye,ribbonJoint2:B,ribbonJoint3:H,leftReceiverRing:Zi,rightReceiverRing:Sr,leftReceiverMat:Kr,rightReceiverMat:Mn,orbMeshes:Jr,worldLeftHand:new he,worldRightHand:new he}}function a1(s,e,t){if(!s)return;const r=-e.distance,o=e.angle,l=Math.abs(o),u=Math.min(1,l/ro),f=e.walkSpeedMultiplier||1,m=Math.min(1,t*11),p=Math.min(1,t*7.5),_=u*.56+(e.fallSlowMo?.22:0);e.smoothKneeFlex+=(_-e.smoothKneeFlex)*m;const S=-Math.sin(o)*.25;e.smoothHipX+=(S-e.smoothHipX)*m;const M=l>ro*.75||e.fallSlowMo?1:0;e.edgeSaveBlend+=(M-e.edgeSaveBlend)*m;const A=-o*.38-Math.sin(o)*.16*(1+e.edgeSaveBlend*.45),b=-o*.32;e.smoothTorsoComp+=(A-e.smoothTorsoComp)*p,e.smoothNeckComp+=(b-e.smoothNeckComp)*p,s.acrobatGroup.position.set(0,0,r),s.acrobatGroup.rotation.z=-o*.72;const x=e.gameStatus==="PLAYING",v=x?Math.sin(e.stepPhase):0,I=x?Math.cos(e.stepPhase):0,V=Math.min(.56,.34*Math.pow(f,.45)),R=x?Math.abs(v)*.036*Math.min(1.5,f):Math.sin(e.time*2.6)*.012,N=e.smoothKneeFlex*.22;s.upperBodyGroup.position.x=e.smoothHipX,s.upperBodyGroup.position.y=R-N;const L=Math.sin(e.time*22)*e.edgeSaveBlend,F=e.smoothKneeFlex*.95;s.leftLeg.hipGroup.position.x=-.08+e.smoothHipX*.65,s.rightLeg.hipGroup.position.x=.08+e.smoothHipX*.65,s.leftLeg.hipGroup.position.y=.88-N,s.rightLeg.hipGroup.position.y=.88-N;const E=-e.smoothHipX*.75,P=o>0?e.edgeSaveBlend*(.28+Math.abs(L)*.22):0,k=o<0?-e.edgeSaveBlend*(.28+Math.abs(L)*.22):0;s.leftLeg.hipGroup.rotation.z=E-P,s.rightLeg.hipGroup.rotation.z=E-k,s.leftLeg.hipGroup.rotation.x=v*V+F*.55+L*.25,s.leftLeg.kneeGroup.rotation.x=-Math.max(0,I)*(V*1.22)-F*1.1,s.leftLeg.bootGroup.rotation.x=F*.52,s.rightLeg.hipGroup.rotation.x=-v*V+F*.55-L*.25,s.rightLeg.kneeGroup.rotation.x=-Math.max(0,-I)*(V*1.22)-F*1.1,s.rightLeg.bootGroup.rotation.x=F*.52;const q=x?Math.min(.24,(f-1)*.14):0;s.torsoSpineGroup.rotation.z=e.smoothTorsoComp+L*.08,s.torsoSpineGroup.rotation.x=.06+q+e.smoothKneeFlex*.18+e.edgeSaveBlend*.28,s.headGroup.rotation.z=e.smoothNeckComp,s.headGroup.rotation.x=-q*.7-e.smoothKneeFlex*.14-e.edgeSaveBlend*.2;const $=e.leftPressed?.28:0,ie=e.rightPressed?.28:0,Y=v*.12*f;s.leftArm.shoulderGroup.rotation.x=-Y+L*.55,s.rightArm.shoulderGroup.rotation.x=Y-L*.55,s.leftArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4-e.edgeSaveBlend*.22,s.rightArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4+e.edgeSaveBlend*.22,s.leftArm.elbowGroup.rotation.x=$+e.edgeSaveBlend*.25,s.rightArm.elbowGroup.rotation.x=ie+e.edgeSaveBlend*.25,s.poleGroup.rotation.z=(ie-$)*.38-o*.42+L*.14;const ne=e.windCurrent||0,ge=10.5*Math.min(1.6,f);s.ribbonPivot.rotation.y=-Math.PI*.5+ne*.78+Math.sin(e.time*ge)*.22,s.ribbonPivot.rotation.z=Math.cos(e.time*(ge*1.15))*.16,s.ribbonJoint2.rotation.y=Math.sin(e.time*(ge*1.35)-.8)*.28+ne*.22,s.ribbonJoint3.rotation.y=Math.sin(e.time*(ge*1.6)-1.6)*.34+ne*.25,s.backlitBackdrop.position.z=r-210,s.arrivalGroup.position.set(0,0,-e.targetDistance-3.5);const ae=1+Math.sin(e.time*5)*.08;s.beaconRingMesh.scale.set(ae,ae,1);for(let st=0;st<s.spotlightBeams.length;st++){const ke=s.spotlightBeams[st];ke.mesh.rotation.z=ke.baseAngle+Math.sin(e.time*ke.speed+ke.phaseOffset)*.14,ke.mesh.position.z>r+15?ke.mesh.position.z-=240:ke.mesh.position.z<r-235&&(ke.mesh.position.z+=240)}for(let st=0;st<s.skyscrapers.length;st++){const ke=s.skyscrapers[st];ke.position.z>r+18?ke.position.z-=286:ke.position.z<r-268&&(ke.position.z+=286)}for(let st=0;st<s.carMeshes.length;st++){const ke=s.carMeshes[st];ke.mesh.position.z+=ke.speed*t,ke.mesh.position.z>r+25?ke.mesh.position.z=r-230:ke.mesh.position.z<r-235&&(ke.mesh.position.z=r+20)}s.acrobatGroup.updateMatrixWorld(!0),s.leftArm.handMesh.getWorldPosition(s.worldLeftHand),s.rightArm.handMesh.getWorldPosition(s.worldRightHand);const X=s.worldLeftHand,Q=s.worldRightHand;let ee=!1,D=!1;for(let st=0;st<e.jugglePool.length;st++){const ke=e.jugglePool[st];ke.active&&ke.phase>=e.catchThreshold&&(ke.targetHand==="L"&&(ee=!0),ke.targetHand==="R"&&(D=!0))}s.leftReceiverRing.position.copy(X),s.rightReceiverRing.position.copy(Q),s.leftReceiverMat.color.setHex(ee?16638023:62206),s.rightReceiverMat.color.setHex(D?16638023:62206);const ce=ee?1.32:.78,Se=D?1.32:.78;s.leftReceiverRing.scale.set(ce,ce,ce),s.rightReceiverRing.scale.set(Se,Se,Se);for(let st=0;st<4;st++){const ke=e.jugglePool[st],dt=s.orbMeshes[st];if(!ke.active){dt.group.visible=!1;for(let J=0;J<dt.trails.length;J++)dt.trails[J].visible=!1;continue}dt.group.visible=!0;const xt=ke.targetHand==="R"?X:Q,It=ke.targetHand==="R"?Q:X,rt=ke.phase,Ft=1.48+st%2*.22,j=xt.x+(It.x-xt.x)*rt,Xt=xt.y+(It.y-xt.y)*rt+4*Ft*rt*(1-rt),wt=xt.z+(It.z-xt.z)*rt-.12*Math.sin(rt*Math.PI);dt.group.position.set(j,Xt,wt);const y=rt>=e.catchThreshold?1.28:1;dt.group.scale.set(y,y,y);for(let J=0;J<dt.trails.length;J++){const ue=dt.trails[J],me=rt-(J+1)*.036;if(me<=.01){ue.visible=!1;continue}ue.visible=!0;const we=xt.x+(It.x-xt.x)*me,Ne=xt.y+(It.y-xt.y)*me+4*Ft*me*(1-me),xe=xt.z+(It.z-xt.z)*me-.12*Math.sin(me*Math.PI);ue.position.set(we,Ne,xe)}}s.cyanPoleLight.position.set(0,1.35,r),s.goldOrbLight.position.set(0,2.45,r-.25);const Xe=Math.min(1,(e.combo||0)/14),Fe=Math.min(1,Math.max(0,(l-ro*.28)/(ro*.62))),Ie=e.fallSlowMo?1:Fe,K=(58+Xe*6)*(1-Ie)+48*Ie,Ye=(6.2+Xe*.55)*(1-Ie)+4.95*Ie,at=(3.38+Xe*.16)*(1-Ie)+2.95*Ie,vt=Math.min(1,t*5.5);e.dynamicFov+=(K-e.dynamicFov)*vt,e.dynamicCamDist+=(Ye-e.dynamicCamDist)*vt,e.dynamicCamY+=(at-e.dynamicCamY)*vt,Math.abs(s.camera.fov-e.dynamicFov)>.02&&(s.camera.fov=e.dynamicFov,s.camera.updateProjectionMatrix());const Ge=e.shake>.05?Math.sin(e.time*42)*e.shake*.038:0,ut=e.shake>.05?Math.cos(e.time*36)*e.shake*.038:0;s.camera.position.set(Ge+Math.sin(o)*.32,e.dynamicCamY+ut,r+e.dynamicCamDist),s.camera.lookAt(e.smoothHipX*.35,1.65-e.smoothKneeFlex*.2,r-15),s.camera.rotation.z=-e.cameraRoll*(.52+Ie*.65),s.renderer.render(s.scene,s.camera)}function o1(){try{const s=localStorage.getItem(Fg);return s?JSON.parse(s):null}catch{return null}}function l1(s=.72){const e=[];for(let t=0;t<4;t++)e.push({id:t,active:t===0,phase:t*.25,speed:s,targetHand:t%2===0?"R":"L",arcHeight:132,spinAngle:0});return{jugglePool:e}}function c1(){var we,Ne,xe;const s=o1(),[e,t]=Mt.useState((s==null?void 0:s.lang)||"es"),[r,o]=Mt.useState((s==null?void 0:s.soundOn)??!0),[l,u]=Mt.useState((s==null?void 0:s.currentLevel)||1),[f,m]=Mt.useState((s==null?void 0:s.maxUnlockedLevel)||1),[p,_]=Mt.useState((s==null?void 0:s.coins)??450),[S,g]=Mt.useState((s==null?void 0:s.gems)??80),[M,A]=Mt.useState((s==null?void 0:s.leaguePoints)??1250),[b,x]=Mt.useState((s==null?void 0:s.gearLevels)||{pole:1,boots:1,gloves:1}),[v,I]=Mt.useState((s==null?void 0:s.unlockedSkins)||["skin_1"]),[V,R]=Mt.useState((s==null?void 0:s.equippedSkin)||"skin_1"),[N,L]=Mt.useState((s==null?void 0:s.unlockedProps)||["balls"]),[F,E]=Mt.useState((s==null?void 0:s.equippedProp)||"balls"),[P,k]=Mt.useState("home"),[q,$]=Mt.useState(!0),[ie,Y]=Mt.useState("./icon.jpg"),[ne,ge]=Mt.useState("LOBBY"),[ae,X]=Mt.useState(null),[Q,ee]=Mt.useState(""),[D,ce]=Mt.useState(()=>$m()),[Se,Xe]=Mt.useState({angleDeg:0,distance:0,targetDistance:100,walkSpeedMultiplier:1,juggleCount:1,multiplier:1,combo:0,windCurrent:0,windWarningActive:!1,fallSlowMo:!1,slowMoTimer:3.2,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1}),Fe=Mt.useRef(null),Ie=Mt.useRef(null),de=Mt.useRef(null),K=Km[e]||Km.es,Re=pd(l),Ye=Re.city,Oe=vs.find(C=>C.id===V)||vs[0],at=_s.find(C=>C.id===F)||_s[0];Mt.useEffect(()=>{const C=setTimeout(()=>{$(!1)},550);return()=>clearTimeout(C)},[]);const vt=Mt.useCallback(()=>{Y(C=>C==="./icon.jpg"?"/icon.jpg":C==="/icon.jpg"?"./icon.png":C==="./icon.png"?"/icon.png":C)},[]),Ge=Mt.useRef(null);if(!Ge.current){const C=pd((s==null?void 0:s.currentLevel)||1),te=l1(C.juggleBaseSpeed),ye=vs.find(B=>B.id===((s==null?void 0:s.equippedSkin)||"skin_1"))||vs[0],oe=_s.find(B=>B.id===((s==null?void 0:s.equippedProp)||"balls"))||_s[0],Me=((we=s==null?void 0:s.gearLevels)==null?void 0:we.gloves)||1;Ge.current={lastTimestamp:0,time:0,hudSyncTimer:0,gameStatus:"LOBBY",paused:!1,cfg:C,level:C.level,cityIndex:C.cityIndex,targetDistance:C.totalDistance,distance:0,walkSpeedMultiplier:C.walkSpeedMultiplier,walkSpeed:C.walkSpeed,difficultyFactor:C.difficultyFactor,catchWindow:C.catchWindow,gravityFactor:C.gravityFactor,windMax:C.windMax,windChangeFreq:C.windChangeFreq,windCurrent:.15,windTarget:.25,windTimer:0,windWarningActive:!1,nextWindSign:-1,angle:.03,angleRad:.03,angleDeg:.03*180/Math.PI,cameraRoll:0,angularVelocity:0,stepPhase:0,smoothKneeFlex:0,smoothHipX:0,smoothTorsoComp:0,smoothNeckComp:0,edgeSaveBlend:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38,juggleCount:1,combo:0,maxCombo:0,catchesRun:0,coinsEarnedRun:0,lpEarnedRun:0,leftPressed:!1,rightPressed:!1,fallSlowMo:!1,slowMoTimer:3.2,shake:0,grappleFlash:0,poleLevel:((Ne=s==null?void 0:s.gearLevels)==null?void 0:Ne.pole)||1,bootsLevel:((xe=s==null?void 0:s.gearLevels)==null?void 0:xe.boots)||1,glovesLevel:Me,catchThreshold:Math.max(.62,1-C.catchWindow-(Me-1)*.008),skinObj:ye,propObj:oe,...te}}Mt.useEffect(()=>{try{localStorage.setItem(Fg,JSON.stringify({lang:e,soundOn:r,currentLevel:l,maxUnlockedLevel:f,coins:p,gems:S,leaguePoints:M,gearLevels:b,unlockedSkins:v,equippedSkin:V,unlockedProps:N,equippedProp:F}))}catch{}},[e,r,l,f,p,S,M,b,v,V,N,F]),Mt.useEffect(()=>{hn.enabled=r},[r]),Mt.useEffect(()=>{var ye;const C=Ge.current;C.poleLevel=b.pole||1,C.bootsLevel=b.boots||1,C.glovesLevel=b.gloves||1;const te=((ye=C.cfg)==null?void 0:ye.catchWindow)||.28;C.catchThreshold=Math.max(.62,1-te-(C.glovesLevel-1)*.008),C.skinObj=Oe,C.propObj=at},[b,Ye,Oe,at]),Mt.useEffect(()=>{const C=setInterval(()=>{ce($m())},1e3);return()=>clearInterval(C)},[]);const ut=Mt.useCallback((C,te="LOBBY")=>{const ye=pd(C),oe=Ge.current;oe.cfg=ye,oe.level=ye.level,oe.cityIndex=ye.cityIndex,oe.targetDistance=ye.totalDistance,oe.distance=0,oe.walkSpeedMultiplier=ye.walkSpeedMultiplier,oe.walkSpeed=ye.walkSpeed,oe.difficultyFactor=ye.difficultyFactor,oe.catchWindow=ye.catchWindow,oe.catchThreshold=Math.max(.62,1-ye.catchWindow-(oe.glovesLevel-1)*.008),oe.gravityFactor=ye.gravityFactor,oe.windMax=ye.windMax,oe.windChangeFreq=ye.windChangeFreq,oe.windCurrent=.15,oe.windTarget=.32,oe.windTimer=0,oe.windWarningActive=!1,oe.nextWindSign=-1,oe.angle=.03,oe.angleRad=.03,oe.angleDeg=.03*180/Math.PI,oe.cameraRoll=0,oe.angularVelocity=0,oe.stepPhase=0,oe.smoothKneeFlex=0,oe.smoothHipX=0,oe.smoothTorsoComp=0,oe.smoothNeckComp=0,oe.edgeSaveBlend=0,oe.dynamicFov=58,oe.dynamicCamDist=6.2,oe.dynamicCamY=3.38,oe.juggleCount=1,oe.combo=0,oe.maxCombo=0,oe.catchesRun=0,oe.coinsEarnedRun=0,oe.lpEarnedRun=0,oe.leftPressed=!1,oe.rightPressed=!1,oe.fallSlowMo=!1,oe.slowMoTimer=3.2,oe.shake=0,oe.grappleFlash=0,oe.gameStatus=te,oe.paused=!1;for(let Me=0;Me<oe.jugglePool.length;Me++){const B=oe.jugglePool[Me];B.active=Me===0,B.phase=Me*.26,B.speed=ye.juggleBaseSpeed,B.targetHand=Me%2===0?"R":"L"}ge(te),X(null),Xe({angleDeg:oe.angleDeg,distance:0,targetDistance:ye.totalDistance,walkSpeedMultiplier:ye.walkSpeedMultiplier,juggleCount:1,multiplier:at.mult*Oe.bonusMult,combo:0,windCurrent:oe.windCurrent,windWarningActive:!1,fallSlowMo:!1,slowMoTimer:3.2,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1})},[at.mult,Oe.bonusMult]),st=Mt.useCallback(()=>{hn.init(),hn.playCatch(2),ut(l,"PLAYING")},[l,ut]),ke=Mt.useCallback(()=>{const C=Ge.current;if(C.gameStatus!=="PLAYING"||C.juggleCount>=4)return;const te=C.juggleCount,ye=C.jugglePool[te];ye.active=!0,ye.phase=.08,ye.speed=C.cfg.juggleBaseSpeed,ye.targetHand=te%2===0?"R":"L",C.juggleCount+=1,hn.playCatch(C.juggleCount+2)},[]),dt=Mt.useCallback(C=>{var Me,B;const te=Ge.current;if(te.gameStatus!=="PLAYING"||te.paused||te.fallSlowMo)return!1;let ye=!1;const oe=te.catchThreshold;for(let $e=0;$e<te.jugglePool.length;$e++){const Be=te.jugglePool[$e];if(Be.active&&Be.targetHand===C&&Be.phase>=oe){const H=Be.phase>=.88;if(Be.phase=0,Be.speed=te.cfg.juggleBaseSpeed,Be.targetHand=C==="L"?"R":"L",te.combo+=1,te.combo>te.maxCombo&&(te.maxCombo=te.combo),te.catchesRun+=1,te.level>=4){const Ee=(C==="L"?-1:1)*.06*(te.difficultyFactor||te.walkSpeedMultiplier);te.angularVelocity+=Ee}else te.angularVelocity*=.82,te.angle*=.92;te.angleRad=te.angle,te.angleDeg=te.angle*180/Math.PI;const De=te.juggleCount*(((Me=te.propObj)==null?void 0:Me.mult)||1)*(((B=te.skinObj)==null?void 0:B.bonusMult)||1),_e=Math.max(1,Math.round((H?6:3)*De)),Ce=Math.max(1,Math.round((H?4:2)*te.juggleCount));te.coinsEarnedRun+=_e,te.lpEarnedRun+=Ce,_(Pe=>Pe+_e),A(Pe=>Pe+Ce),te.catchesRun%8===0&&g(Pe=>Pe+1),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(H?18:10),hn.playCatch(te.combo),ye=!0;break}}return ye},[]),xt=Mt.useCallback(()=>{const C=Ge.current;if(C.gameStatus==="PLAYING"){if(S<20){X("SHOP"),C.paused=!0;return}g(te=>te-20),C.angle=0,C.angleRad=0,C.angleDeg=0,C.angularVelocity=0,C.fallSlowMo=!1,C.slowMoTimer=3.2,C.grappleFlash=1,C.shake=0,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([25,40,25]),hn.playGrapple()}},[S]),It=Mt.useCallback((C,te)=>{te&&te.cancelable&&te.preventDefault(),hn.init();const ye=Ge.current;C==="L"?(ye.leftPressed=!0,dt("L")):(ye.rightPressed=!0,dt("R"))},[dt]),rt=Mt.useCallback((C,te)=>{te&&te.cancelable&&te.preventDefault();const ye=Ge.current;C==="L"?ye.leftPressed=!1:ye.rightPressed=!1},[]);Mt.useEffect(()=>{const C=ye=>{if(ye.repeat)return;const oe=ye.key.toLowerCase(),Me=Ge.current;oe==="arrowleft"||oe==="a"?(Me.leftPressed=!0,dt("L")):oe==="arrowright"||oe==="d"?(Me.rightPressed=!0,dt("R")):oe==="w"||oe==="arrowup"?ke():oe===" "?(ye.preventDefault(),Me.gameStatus==="LOBBY"?st():Me.gameStatus==="PLAYING"&&xt()):(oe==="escape"||oe==="p")&&Me.gameStatus==="PLAYING"&&(Me.paused=!Me.paused,X(Me.paused?"PAUSE":null))},te=ye=>{const oe=ye.key.toLowerCase(),Me=Ge.current;oe==="arrowleft"||oe==="a"?Me.leftPressed=!1:(oe==="arrowright"||oe==="d")&&(Me.rightPressed=!1)};return window.addEventListener("keydown",C),window.addEventListener("keyup",te),()=>{window.removeEventListener("keydown",C),window.removeEventListener("keyup",te)}},[dt,ke,xt,st]),Mt.useEffect(()=>{if(!Fe.current)return;const C=s1(Fe.current);Ie.current=C;let te=null;const ye=()=>{if(!Fe.current||!Ie.current)return;const Me=Fe.current.clientWidth||420,B=Fe.current.clientHeight||780;Ie.current.camera.aspect=Me/B,Ie.current.camera.updateProjectionMatrix(),Ie.current.renderer.setSize(Me,B)};window.addEventListener("resize",ye);const oe=Me=>{var H,De;const B=Ge.current,$e=(Me-B.lastTimestamp)/1e3,Be=$e>0&&$e<.2?Math.min($e,.05):.0166;if(B.lastTimestamp=Me,!B.paused){if(B.time+=Be,B.cameraRoll+=(B.angle*.24-B.cameraRoll)*Math.min(1,Be*8),B.grappleFlash>0&&(B.grappleFlash=Math.max(0,B.grappleFlash-Be*2.4)),B.shake>0&&(B.shake=Math.max(0,B.shake-Be*4.5)),B.gameStatus==="PLAYING")if(B.fallSlowMo)B.slowMoTimer-=Be,B.angle+=(B.angle>=0?1:-1)*.08*Be,B.angleRad=B.angle,B.angleDeg=B.angle*180/Math.PI,B.slowMoTimer<=0&&(B.fallSlowMo=!1,B.gameStatus="GAMEOVER",hn.playFall(),ge("GAMEOVER"));else{if(B.windTimer+=Be,B.level>=4&&B.windTimer>=B.windChangeFreq-1&&(B.windWarningActive||(B.windWarningActive=!0,B.nextWindSign=B.windTarget>=0?-1:1)),B.windTimer>=B.windChangeFreq)if(B.windTimer=0,B.windWarningActive=!1,B.level>=4){const mn=B.nextWindSign||(B.windTarget>=0?-1:1),Gt=(.36+Math.abs(Math.cos(B.time*2.3))*B.windMax*.58)*Math.pow(B.walkSpeedMultiplier,.45);B.windTarget=mn*Gt,B.shake=1.9,hn.playWindGust()}else{const mn=Math.sin(B.time*3.7)>=0?1:-1;B.windTarget=mn*(.16+Math.abs(Math.cos(B.time*2.3))*B.windMax*.36)}B.windCurrent+=(B.windTarget-B.windCurrent)*Math.min(1,Be*2.2);const _e=B.cfg,Ce=1-(B.poleLevel-1)*.048,Pe=1-(B.bootsLevel-1)*.052,Ee=4.55+(B.poleLevel-1)*.15,He=1+(B.bootsLevel-1)*.025,je=B.walkSpeed*He*Be;B.distance=Math.min(B.targetDistance,B.distance+je),B.stepPhase+=Be*7.2*B.walkSpeedMultiplier*He;const At=Math.sin(B.stepPhase)*.45*Math.pow(B.walkSpeedMultiplier,1.35)*Pe,on=((B.rightPressed?1:0)-(B.leftPressed?1:0))*Ee,Cn=Math.sin(B.angle)*_e.gravityInstability*2.55*Ce,xi=B.windCurrent*Pe*1.65;B.angularVelocity+=(Cn+xi+At+on)*Be,B.angularVelocity*=Math.pow(.92,Be*60),B.angle+=B.angularVelocity*Be,B.angleRad=B.angle,B.angleDeg=B.angle*180/Math.PI;for(let mn=0;mn<B.jugglePool.length;mn++){const Gt=B.jugglePool[mn];if(Gt.active){if(Gt.phase+=Gt.speed*Be,Gt.spinAngle=Gt.phase*Math.PI*4,Gt.phase>=B.catchThreshold&&(Gt.targetHand==="L"&&B.leftPressed||Gt.targetHand==="R"&&B.rightPressed)){dt(Gt.targetHand);continue}if(Gt.phase>=1){Gt.phase=0;const Ln=Gt.targetHand==="L"?-1:1;Gt.targetHand=Gt.targetHand==="L"?"R":"L",B.combo=0;const Nn=B.level>=4?Ln*(.68+.06*(B.difficultyFactor||1))*Ce:Ln*.65*Ce;B.angularVelocity+=Nn,B.shake=2.8}}}if(Math.abs(B.angle)>=ro&&(B.fallSlowMo=!0,B.slowMoTimer=3.2,B.shake=4,hn.playFall()),B.distance>=B.targetDistance){B.gameStatus="VICTORY";const mn=120+B.level*25,Gt=B.level%5===0?18:6,Ln=45+B.level*8;B.coinsEarnedRun+=mn,B.lpEarnedRun+=Ln,_(Nn=>Nn+mn),g(Nn=>Nn+Gt),A(Nn=>Nn+Ln),m(Nn=>Math.max(Nn,Math.min(100,B.level+1))),hn.playLevelWin(),ge("VICTORY")}}else if(B.gameStatus==="LOBBY"){B.angle=Math.sin(B.time*1.5)*.04,B.angleRad=B.angle,B.angleDeg=B.angle*180/Math.PI,B.windCurrent=Math.sin(B.time*.8)*.35;for(let _e=0;_e<B.jugglePool.length;_e++){const Ce=B.jugglePool[_e];Ce.active&&(Ce.phase=(Ce.phase+Be*.65)%1)}}}if(de.current){const Ce=Math.max(-47,Math.min(47,B.angleDeg||0))/47*90;de.current.style.transform=`translateX(${Ce.toFixed(1)}px)`}if(a1(Ie.current,B,Be),B.hudSyncTimer+=Be,B.hudSyncTimer>=.08){B.hudSyncTimer=0;let _e=!1,Ce=!1;for(let Ee=0;Ee<B.jugglePool.length;Ee++){const He=B.jugglePool[Ee];He.active&&He.phase>=B.catchThreshold&&(He.targetHand==="L"&&(_e=!0),He.targetHand==="R"&&(Ce=!0))}const Pe=B.juggleCount*(((H=B.propObj)==null?void 0:H.mult)||1)*(((De=B.skinObj)==null?void 0:De.bonusMult)||1);Xe({angleDeg:B.angleDeg||0,distance:Math.floor(B.distance),targetDistance:B.targetDistance,walkSpeedMultiplier:B.walkSpeedMultiplier||1,juggleCount:B.juggleCount,multiplier:Pe,combo:B.combo,windCurrent:B.windCurrent,windWarningActive:B.windWarningActive,fallSlowMo:B.fallSlowMo,slowMoTimer:B.slowMoTimer,leftPressed:B.leftPressed,rightPressed:B.rightPressed,leftTimingReady:_e,rightTimingReady:Ce})}te=requestAnimationFrame(oe)};return te=requestAnimationFrame(oe),()=>{window.removeEventListener("resize",ye),te&&cancelAnimationFrame(te),Ie.current&&Ie.current.renderer&&Ie.current.renderer.dispose()}},[dt]);const Ft=C=>{const te=b[C.id]||1;if(te>=C.maxLevel)return;const ye=Math.round(C.baseCost*Math.pow(C.costScale,te-1));p<ye||(_(oe=>oe-ye),x(oe=>({...oe,[C.id]:te+1})),hn.playCatch(te+3))},j=C=>{if(v.includes(C.id)){R(C.id),hn.playCatch(2);return}C.currency==="coins"&&p>=C.cost?(_(te=>te-C.cost),I(te=>[...te,C.id]),R(C.id),hn.playLevelWin()):C.currency==="gems"&&S>=C.cost&&(g(te=>te-C.cost),I(te=>[...te,C.id]),R(C.id),hn.playLevelWin())},Xt=C=>{if(N.includes(C.id)){E(C.id),hn.playCatch(3);return}C.currency==="coins"&&p>=C.cost?(_(te=>te-C.cost),L(te=>[...te,C.id]),E(C.id),hn.playLevelWin()):C.currency==="gems"&&S>=C.cost&&(g(te=>te-C.cost),L(te=>[...te,C.id]),E(C.id),hn.playLevelWin())},wt=C=>{g(te=>te+C.gems),_(te=>te+C.coins),hn.playLevelWin(),ee(`+${C.gems} 💎  +${C.coins} 🪙`),setTimeout(()=>ee(""),2500)},U=[...KE,{id:"player",name:e==="es"?"TÚ (Equilibrista)":"YOU (Tightrope Pro)",country:Ye.flag,lp:M,badge:"⭐",isPlayer:!0}].sort((C,te)=>te.lp-C.lp),y=U.findIndex(C=>C.isPlayer)+1,J=Math.abs(Se.windCurrent).toFixed(1),ue=Se.windCurrent<-.8?"◄◄":Se.windCurrent<-.15?"◄":Se.windCurrent>.8?"►►":Se.windCurrent>.15?"►":"•",me=Se.fallSlowMo||Math.abs(Se.angleDeg)>30;return z.jsxs("div",{className:"game-shell",children:[z.jsx("div",{ref:Fe,className:"webgl-mount"}),q&&z.jsxs("div",{className:"modal-backdrop",style:{zIndex:90,flexDirection:"column",gap:"14px",background:"radial-gradient(circle at 50% 35%, #09152b 0%, #02040a 85%)"},children:[z.jsxs("div",{style:{position:"relative",width:"82%",maxWidth:"320px",borderRadius:"18px",overflow:"hidden",border:"2px solid rgba(0, 242, 254, 0.75)",boxShadow:"0 0 32px rgba(0, 242, 254, 0.45), 0 18px 40px rgba(0, 0, 0, 0.9)"},children:[z.jsx("img",{src:ie,onError:vt,alt:"NO MIRES ABAJO",style:{width:"100%",height:"auto",display:"block"}}),z.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5,8,17,0) 55%, rgba(5,8,17,0.95) 100%)"}})]}),z.jsx("div",{style:{fontFamily:"Bebas Neue, Orbitron, sans-serif",fontSize:"2rem",letterSpacing:"0.08em",color:"#fde047",textShadow:"0 0 16px rgba(0, 242, 254, 0.6)"},children:K.title})]}),ne!=="PLAYING"&&z.jsxs("header",{className:"top-utility-bar",children:[z.jsxs("div",{className:"league-strip",onClick:()=>{Ge.current.paused=!0,X("LEAGUE")},children:[z.jsxs("div",{className:"league-strip-left",children:[z.jsxs("span",{children:["🏆 ",K.leagueBanner,":"]}),z.jsxs("span",{className:"league-points-badge",children:["#",y," (",M," ",K.leaguePointsShort,")"]})]}),z.jsxs("span",{className:"league-timer",children:["⏳ ",D.days,"d ",D.hours,"h"]})]}),z.jsxs("div",{className:"nav-pills-row",children:[z.jsxs("div",{className:"nav-pills-group",children:[z.jsxs("button",{type:"button",className:"mini-pill gold",onClick:()=>{Ge.current.paused=!0,X("CITIES")},children:[Ye.flag," ",K.level," ",l,"/100"]}),z.jsxs("button",{type:"button",className:"mini-pill cyan",onClick:()=>{Ge.current.paused=!0,X("ARMORY")},children:["⚙️ ",K.armoryBtn]}),z.jsxs("button",{type:"button",className:"mini-pill",onClick:()=>{Ge.current.paused=!0,X("SKINS")},children:["🧥 ",K.skinsBtn]})]}),z.jsxs("div",{className:"nav-pills-group",children:[z.jsx("button",{type:"button",className:"mini-pill",onClick:()=>o(C=>!C),children:r?"🔊":"🔇"}),z.jsx("button",{type:"button",className:"mini-pill",onClick:()=>t(C=>C==="es"?"en":"es"),children:e.toUpperCase()})]})]})]}),ne==="PLAYING"&&z.jsxs(z.Fragment,{children:[z.jsxs("section",{className:"compact-play-hud",children:[z.jsxs("div",{className:"compact-hud-top-row",children:[z.jsxs("div",{className:"compact-hud-city",children:[z.jsx("span",{children:Ye.flag}),z.jsxs("span",{className:"compact-hud-lvl-badge",children:["Nv.",l]}),z.jsxs("span",{className:"compact-hud-speed-badge",children:[Se.walkSpeedMultiplier.toFixed(2),"x"]}),z.jsx("span",{children:Ye.name[e]})]}),z.jsxs("div",{className:"compact-hud-metrics",children:[z.jsxs("div",{className:"compact-metric-pill distance",children:[z.jsxs("span",{className:"compact-dist-cur",children:[Se.distance,"m"]}),z.jsxs("span",{className:"compact-dist-target",children:["/ ",Se.targetDistance,"m"]})]}),z.jsx("div",{className:"compact-metric-pill wind",children:z.jsxs("span",{children:["💨 ",ue," ",J]})}),z.jsx("div",{className:"compact-metric-pill mult",children:z.jsxs("span",{children:["x",Se.multiplier]})}),z.jsx("button",{type:"button",className:"compact-pause-btn",title:K.pauseBtn,onClick:()=>{Ge.current.paused=!0,X("PAUSE")},children:"⏸"})]})]}),z.jsxs("div",{className:"balance-axis-row",children:[z.jsx("span",{className:"balance-axis-label",children:e==="es"?"EJE":"AXIS"}),z.jsxs("div",{className:"balance-axis-track",children:[z.jsx("div",{className:"balance-axis-center-notch"}),z.jsx("div",{ref:de,className:"balance-axis-needle"})]}),z.jsxs("span",{className:"balance-axis-label",style:{color:"#fde047"},children:["🔥",Se.combo]})]})]}),Se.windWarningActive&&z.jsx("div",{className:"wind-gust-alert-pill",children:z.jsx("span",{children:K.windGustAlert})})]}),ne==="LOBBY"&&P==="home"&&z.jsxs("div",{className:"lobby-overlay",children:[z.jsxs("div",{className:"lobby-top-section",children:[z.jsxs("div",{className:"rounded-2xl",style:{position:"relative",width:"100%",height:"132px",borderRadius:"16px",overflow:"hidden",border:"1.5px solid rgba(0, 242, 254, 0.72)",boxShadow:"0 0 24px rgba(0, 242, 254, 0.38), 0 10px 26px rgba(0, 0, 0, 0.85)"},children:[z.jsx("img",{src:ie,onError:vt,alt:"NO MIRES ABAJO",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 28%",display:"block"}}),z.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5, 8, 17, 0.1) 0%, rgba(5, 8, 17, 0.45) 52%, rgba(9, 15, 32, 0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",padding:"8px 12px"},children:[z.jsx("h1",{className:"lobby-main-title",style:{fontSize:"2.1rem",marginBottom:"2px"},children:K.title}),z.jsx("div",{className:"lobby-level-subtitle",onClick:()=>X("CITIES"),style:{cursor:"pointer",marginTop:0},children:z.jsxs("span",{children:["📍 ",K.level," ",l,"/100 — ",Ye.flag," ",Ye.name[e]," (",Re.totalDistance,"m •"," ",Re.walkSpeedMultiplier.toFixed(2),"x)"]})})]})]}),z.jsxs("div",{className:"lobby-league-banner",onClick:()=>X("LEAGUE"),children:[z.jsxs("div",{className:"lobby-league-row",children:[z.jsxs("span",{style:{fontWeight:900,fontSize:"0.84rem",color:"#fde047"},children:["🏆 ",K.leagueBanner," — #",y," (",M," LP)"]}),z.jsx("span",{style:{fontSize:"0.74rem",color:"#67e8f9",fontWeight:800},children:"🎁 Cofres Épicos →"})]}),z.jsxs("div",{style:{fontSize:"0.74rem",color:"#cbd5e1",display:"flex",justifyContent:"space-between"},children:[z.jsx("span",{children:Ye.landmark[e]}),z.jsxs("span",{children:["🪙 ",p," | 💎 ",S]})]})]})]}),z.jsxs("div",{className:"lobby-bottom-section",children:[z.jsxs("div",{className:"lobby-prep-grid",children:[z.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{k("home"),X("CITIES")},children:[z.jsx("span",{style:{fontSize:"1.15rem"},children:"🌍"}),z.jsx("span",{children:K.citiesBtn})]}),z.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>{k("home"),X("ARMORY")},children:[z.jsx("span",{style:{fontSize:"1.15rem"},children:"⚙️"}),z.jsx("span",{children:K.armoryBtn})]}),z.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>{k("home"),X("SKINS")},children:[z.jsx("span",{style:{fontSize:"1.15rem"},children:"🧥"}),z.jsx("span",{children:K.skinsBtn})]}),z.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{k("home"),X("SHOP")},children:[z.jsx("span",{style:{fontSize:"1.15rem"},children:"💎"}),z.jsx("span",{children:K.shopBtn})]})]}),z.jsx("button",{type:"button",className:"lobby-play-btn",onClick:st,children:K.playNowBtn})]})]}),ne==="PLAYING"&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{className:"multitouch-split-overlay",children:[z.jsx("div",{className:"multitouch-half-panel",onPointerDown:C=>It("L",C),onPointerUp:C=>rt("L",C),onPointerCancel:C=>rt("L",C),onPointerLeave:C=>rt("L",C)}),z.jsx("div",{className:"multitouch-half-panel",onPointerDown:C=>It("R",C),onPointerUp:C=>rt("R",C),onPointerCancel:C=>rt("R",C),onPointerLeave:C=>rt("R",C)})]}),z.jsxs("div",{className:"vector-minimal-hud",children:[z.jsxs("div",{className:`vector-corner-indicator left ${Se.leftPressed?"pressed":""} ${Se.leftTimingReady?"timing-ready":""}`,children:[z.jsxs("span",{className:"vector-corner-label",children:["◄ ",K.left]}),z.jsx("div",{className:"vector-corner-line"})]}),z.jsxs("div",{className:"vector-center-micro-bar",children:[Se.juggleCount<4&&z.jsxs("button",{type:"button",className:"vector-micro-pill gold",onClick:ke,children:[z.jsx("span",{children:"+1 🟡"}),z.jsxs("span",{children:["(",Se.juggleCount,"/4)"]})]}),z.jsxs("button",{type:"button",className:`vector-micro-pill ${me?"danger":""}`,onClick:xt,children:[z.jsx("span",{children:"🪝"}),z.jsx("span",{children:Se.fallSlowMo?`${Se.slowMoTimer.toFixed(1)}s`:"20💎"})]})]}),z.jsxs("div",{className:`vector-corner-indicator right ${Se.rightPressed?"pressed":""} ${Se.rightTimingReady?"timing-ready":""}`,children:[z.jsxs("span",{className:"vector-corner-label",children:[K.right," ►"]}),z.jsx("div",{className:"vector-corner-line"})]})]})]}),ae==="LEAGUE"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsxs("div",{className:"modal-header",children:[z.jsxs("h2",{className:"modal-title",children:["🏆 ",K.leagueModalTitle]}),z.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Ge.current.paused=!1,X(null)},children:"✕"})]}),z.jsx("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"12px"},children:K.leagueModalSub}),z.jsxs("div",{className:"item-card highlight",style:{marginBottom:"12px",textAlign:"center"},children:[z.jsxs("div",{style:{fontSize:"0.78rem",color:"#fde047",fontWeight:800},children:["⏳ ",K.seasonEndsIn,": ",D.days,"d ",D.hours,"h"," ",D.mins,"m ",D.secs,"s"]}),z.jsxs("div",{style:{fontSize:"1.45rem",fontWeight:900,color:"#ffffff",marginTop:"2px"},children:["#",y," — ",M," ",K.leaguePointsShort]})]}),z.jsx("div",{className:"grid-list",style:{marginBottom:"14px"},children:$E.map(C=>z.jsxs("div",{className:"item-card",style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[z.jsx("div",{children:z.jsxs("div",{style:{fontWeight:900,color:"#fde047"},children:[C.icon," ",C.rankLabel," — ",C.title[e]]})}),z.jsxs("div",{style:{fontWeight:800,fontSize:"0.82rem",color:"#67e8f9"},children:["+",C.gemsReward," 💎 | +",C.coinsReward," 🪙"]})]},C.rankLabel))}),z.jsx("div",{className:"grid-list",children:U.map((C,te)=>z.jsxs("div",{className:`league-rank-row ${C.isPlayer?"is-player":""}`,children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[z.jsxs("span",{style:{fontWeight:900,color:"#fde047",width:"24px"},children:["#",te+1]}),z.jsx("span",{children:C.country}),z.jsx("span",{style:{fontWeight:800},children:C.name})]}),z.jsxs("div",{style:{fontWeight:900,color:"#38bdf8"},children:[C.lp," LP ",C.badge]})]},C.id))})]})}),ae==="ARMORY"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsxs("div",{className:"modal-header",children:[z.jsxs("h2",{className:"modal-title",children:["⚙️ ",K.armoryTitle]}),z.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Ge.current.paused=!1,X(null)},children:"✕"})]}),z.jsxs("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"10px"},children:[K.armorySub," (🪙 ",p,")"]}),z.jsx("div",{className:"grid-list",children:jE.map(C=>{const te=b[C.id]||1,ye=te>=C.maxLevel,oe=Math.round(C.baseCost*Math.pow(C.costScale,te-1));return z.jsxs("div",{className:"item-card highlight",children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("div",{style:{fontWeight:900,fontSize:"1.02rem"},children:[C.icon," ",C.name[e]," (Nv. ",te,"/",C.maxLevel,")"]}),z.jsx("span",{style:{fontSize:"0.76rem",color:"#4ade80",fontWeight:800},children:C.statLabel[e]})]}),z.jsx("p",{style:{fontSize:"0.78rem",color:"#cbd5e1"},children:C.desc[e]}),z.jsx("div",{className:"armory-progress-bar",children:Array.from({length:10}).map((Me,B)=>z.jsx("div",{className:`armory-pip ${B<te?"filled":""}`},B))}),z.jsx("button",{type:"button",className:"pause-action-btn gold",style:{marginTop:"6px",padding:"8px 12px"},disabled:ye||p<oe,onClick:()=>Ft(C),children:ye?`✅ ${K.maxLevelLabel}`:`⬆️ ${K.upgradeBtn} — ${oe} 🪙`})]},C.id)})})]})}),ae==="CITIES"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsxs("div",{className:"modal-header",children:[z.jsxs("h2",{className:"modal-title",children:["🌍 ",K.citiesBtn," (100 Niveles)"]}),z.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Ge.current.paused=!1,X(null)},children:"✕"})]}),z.jsx("div",{className:"grid-list",children:Kl.map((C,te)=>{const ye=te*5+1;return z.jsxs("div",{className:"item-card",children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("span",{style:{fontWeight:900,color:"#fde047"},children:[C.flag," ",te+1,". ",C.name[e]]}),z.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:C.landmark[e]})]}),z.jsx("div",{className:"city-levels-row",children:[0,1,2,3,4].map(oe=>{const Me=ye+oe,B=Me<=f,$e=Me===l;return z.jsxs("button",{type:"button",className:`lvl-chip ${$e?"current":""} ${B&&!$e?"completed":""} ${B?"":"locked"}`,disabled:!B,onClick:()=>{u(Me),ut(Me,"LOBBY")},children:["Nv.",Me]},Me)})})]},C.id)})})]})}),ae==="SKINS"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsxs("div",{className:"modal-header",children:[z.jsxs("h2",{className:"modal-title",children:["🧥 ",K.skinsBtn]}),z.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Ge.current.paused=!1,X(null)},children:"✕"})]}),z.jsxs("h3",{style:{fontSize:"0.95rem",color:"#67e8f9",marginBottom:"8px"},children:["🧥 Aspectos Urbanos (🪙 ",p," | 💎 ",S,")"]}),z.jsx("div",{className:"grid-list",style:{marginBottom:"16px"},children:vs.map(C=>{const te=v.includes(C.id),ye=V===C.id;return z.jsxs("div",{className:`item-card ${ye?"highlight":""}`,children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("span",{style:{fontWeight:900},children:[C.name[e]," (x",C.bonusMult,")"]}),z.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>j(C),children:ye?"✅ EQUIPADO":te?"EQUIPAR":`${C.cost} ${C.currency==="gems"?"💎":"🪙"}`})]}),z.jsx("span",{style:{fontSize:"0.76rem",color:"#94a3b8"},children:C.desc[e]})]},C.id)})}),z.jsx("h3",{style:{fontSize:"0.95rem",color:"#fde047",marginBottom:"8px"},children:"🎪 Objetos de Malabar 3D Especulares"}),z.jsx("div",{className:"grid-list",children:_s.map(C=>{const te=N.includes(C.id),ye=F===C.id;return z.jsx("div",{className:`item-card ${ye?"highlight":""}`,children:z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("span",{style:{fontWeight:900},children:[C.icon," ",C.name[e]," (x",C.mult,")"]}),z.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>Xt(C),children:ye?"✅ EQUIPADO":te?"EQUIPAR":`${C.cost} ${C.currency==="gems"?"💎":"🪙"}`})]})},C.id)})})]})}),ae==="SHOP"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsxs("div",{className:"modal-header",children:[z.jsxs("h2",{className:"modal-title",children:["💎 ",K.shopTitle]}),z.jsx("button",{type:"button",className:"close-btn",onClick:()=>{Ge.current.paused=!1,X(null)},children:"✕"})]}),z.jsx("p",{style:{fontSize:"0.82rem",color:"#cbd5e1",marginBottom:"12px"},children:K.shopSub}),Q&&z.jsxs("div",{className:"item-card highlight",style:{marginBottom:"10px",textAlign:"center",color:"#4ade80",fontWeight:900},children:["🎁 ",Q]}),z.jsx("div",{className:"grid-list",children:ZE.map(C=>z.jsx("div",{className:`item-card ${C.popular?"highlight":""}`,children:z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("div",{children:[z.jsxs("div",{style:{fontWeight:900,fontSize:"1rem"},children:[C.icon," ",C.name[e]]}),z.jsxs("div",{style:{fontSize:"0.8rem",color:"#67e8f9"},children:["+",C.gems," 💎 Gemas | +",C.coins," 🪙 Monedas"]})]}),z.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>wt(C),children:C.tag})]})},C.id))})]})}),ae==="PAUSE"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsx("div",{className:"modal-header",children:z.jsxs("h2",{className:"modal-title",children:["⏸ ",K.pauseTitle]})}),z.jsx("p",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"12px"},children:K.pauseSub}),z.jsxs("div",{className:"lobby-prep-grid",style:{marginBottom:"12px"},children:[z.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>X("ARMORY"),children:[z.jsx("span",{children:"⚙️"}),z.jsx("span",{children:K.armoryBtn})]}),z.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>X("SKINS"),children:[z.jsx("span",{children:"🧥"}),z.jsx("span",{children:K.skinsBtn})]}),z.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>X("LEAGUE"),children:[z.jsx("span",{children:"🏆"}),z.jsx("span",{children:"Liga"})]}),z.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>X("CITIES"),children:[z.jsx("span",{children:"🌍"}),z.jsx("span",{children:K.citiesBtn})]})]}),z.jsxs("div",{className:"pause-menu-stack",children:[z.jsxs("button",{type:"button",className:"pause-action-btn resume",onClick:()=>{Ge.current.paused=!1,X(null)},children:["▶ ",K.resumeBtn]}),z.jsxs("button",{type:"button",className:"pause-action-btn gold",onClick:()=>ut(l,"PLAYING"),children:["🔄 ",K.restartBtn]}),z.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>ut(l,"LOBBY"),children:["🏠 ",K.backToLobbyBtn]})]})]})}),ne==="VICTORY"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card",children:[z.jsx("div",{className:"modal-header",children:z.jsxs("h2",{className:"modal-title",children:["🏆 ",K.levelCleared]})}),z.jsxs("div",{className:"item-card highlight",style:{textAlign:"center",marginBottom:"14px"},children:[z.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:900},children:[Ye.flag," ",Ye.name[e]," — ",K.level," ",l]}),z.jsxs("div",{style:{fontSize:"0.95rem",color:"#4ade80",fontWeight:800,marginTop:"6px"},children:["+",Ge.current.coinsEarnedRun," 🪙 | +",Ge.current.lpEarnedRun," 🏆 LP"]})]}),z.jsxs("div",{className:"pause-menu-stack",children:[z.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:()=>{const C=Math.min(100,l+1);u(C),ut(C,"PLAYING")},children:["▶ ",K.nextLevel," (",Math.min(100,l+1),"/100)"]}),z.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>{const C=Math.min(100,l+1);u(C),ut(C,"LOBBY")},children:["🏠 ",K.backToLobbyBtn]})]})]})}),ne==="GAMEOVER"&&z.jsx("div",{className:"modal-backdrop",children:z.jsxs("div",{className:"modal-card loss-aversion",children:[z.jsx("div",{className:"modal-header",children:z.jsxs("h2",{className:"modal-title",style:{color:"#fca5a5"},children:["⚠️ ",K.fellTitle]})}),z.jsxs("p",{style:{fontSize:"0.92rem",color:"#fef2f2",marginBottom:"14px"},children:[K.fellSub," ",z.jsxs("strong",{children:["(",Se.distance,"m / ",Se.targetDistance,"m)"]})]}),z.jsxs("div",{className:"pause-menu-stack",children:[z.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:()=>{if(S>=20){g(te=>te-20);const C=Ge.current;C.angle=0,C.angleRad=0,C.angleDeg=0,C.angularVelocity=0,C.fallSlowMo=!1,C.gameStatus="PLAYING",hn.playGrapple(),ge("PLAYING")}else X("SHOP")},children:["🪝 ",K.continueHook]}),z.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>ut(l,"PLAYING"),children:["🔄 ",K.retryFree]}),z.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>ut(l,"LOBBY"),children:["🏠 ",K.backToLobbyBtn]})]})]})})]})}Tv.createRoot(document.getElementById("root")).render(z.jsx(_v.StrictMode,{children:z.jsx(c1,{})}));
