(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))h(x);new MutationObserver(x=>{for(const j of x)if(j.type==="childList")for(const L of j.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&h(L)}).observe(document,{childList:!0,subtree:!0});function u(x){const j={};return x.integrity&&(j.integrity=x.integrity),x.referrerPolicy&&(j.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?j.credentials="include":x.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function h(x){if(x.ep)return;x.ep=!0;const j=u(x);fetch(x.href,j)}})();function mm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ja={exports:{}},ji={},ka={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function gm(){if(pf)return te;pf=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),L=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),O=Symbol.iterator;function D(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,V={};function Y(g,k,J){this.props=g,this.context=k,this.refs=V,this.updater=J||G}Y.prototype.isReactComponent={},Y.prototype.setState=function(g,k){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,k,"setState")},Y.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function fe(){}fe.prototype=Y.prototype;function le(g,k,J){this.props=g,this.context=k,this.refs=V,this.updater=J||G}var ie=le.prototype=new fe;ie.constructor=le,re(ie,Y.prototype),ie.isPureReactComponent=!0;var q=Array.isArray,ce=Object.prototype.hasOwnProperty,K={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Ee(g,k,J){var Z,ne={},ee=null,de=null;if(k!=null)for(Z in k.ref!==void 0&&(de=k.ref),k.key!==void 0&&(ee=""+k.key),k)ce.call(k,Z)&&!H.hasOwnProperty(Z)&&(ne[Z]=k[Z]);var oe=arguments.length-2;if(oe===1)ne.children=J;else if(1<oe){for(var ae=Array(oe),Re=0;Re<oe;Re++)ae[Re]=arguments[Re+2];ne.children=ae}if(g&&g.defaultProps)for(Z in oe=g.defaultProps,oe)ne[Z]===void 0&&(ne[Z]=oe[Z]);return{$$typeof:s,type:g,key:ee,ref:de,props:ne,_owner:K.current}}function et(g,k){return{$$typeof:s,type:g.type,key:k,ref:g.ref,props:g.props,_owner:g._owner}}function xt(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Ft(g){var k={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(J){return k[J]})}var st=/\/+/g;function Qe(g,k){return typeof g=="object"&&g!==null&&g.key!=null?Ft(""+g.key):k.toString(36)}function tt(g,k,J,Z,ne){var ee=typeof g;(ee==="undefined"||ee==="boolean")&&(g=null);var de=!1;if(g===null)de=!0;else switch(ee){case"string":case"number":de=!0;break;case"object":switch(g.$$typeof){case s:case c:de=!0}}if(de)return de=g,ne=ne(de),g=Z===""?"."+Qe(de,0):Z,q(ne)?(J="",g!=null&&(J=g.replace(st,"$&/")+"/"),tt(ne,k,J,"",function(Re){return Re})):ne!=null&&(xt(ne)&&(ne=et(ne,J+(!ne.key||de&&de.key===ne.key?"":(""+ne.key).replace(st,"$&/")+"/")+g)),k.push(ne)),1;if(de=0,Z=Z===""?".":Z+":",q(g))for(var oe=0;oe<g.length;oe++){ee=g[oe];var ae=Z+Qe(ee,oe);de+=tt(ee,k,J,ae,ne)}else if(ae=D(g),typeof ae=="function")for(g=ae.call(g),oe=0;!(ee=g.next()).done;)ee=ee.value,ae=Z+Qe(ee,oe++),de+=tt(ee,k,J,ae,ne);else if(ee==="object")throw k=String(g),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return de}function at(g,k,J){if(g==null)return g;var Z=[],ne=0;return tt(g,Z,"","",function(ee){return k.call(J,ee,ne++)}),Z}function De(g){if(g._status===-1){var k=g._result;k=k(),k.then(function(J){(g._status===0||g._status===-1)&&(g._status=1,g._result=J)},function(J){(g._status===0||g._status===-1)&&(g._status=2,g._result=J)}),g._status===-1&&(g._status=0,g._result=k)}if(g._status===1)return g._result.default;throw g._result}var me={current:null},E={transition:null},$={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:E,ReactCurrentOwner:K};function _(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:at,forEach:function(g,k,J){at(g,function(){k.apply(this,arguments)},J)},count:function(g){var k=0;return at(g,function(){k++}),k},toArray:function(g){return at(g,function(k){return k})||[]},only:function(g){if(!xt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=Y,te.Fragment=u,te.Profiler=x,te.PureComponent=le,te.StrictMode=h,te.Suspense=z,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,te.act=_,te.cloneElement=function(g,k,J){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var Z=re({},g.props),ne=g.key,ee=g.ref,de=g._owner;if(k!=null){if(k.ref!==void 0&&(ee=k.ref,de=K.current),k.key!==void 0&&(ne=""+k.key),g.type&&g.type.defaultProps)var oe=g.type.defaultProps;for(ae in k)ce.call(k,ae)&&!H.hasOwnProperty(ae)&&(Z[ae]=k[ae]===void 0&&oe!==void 0?oe[ae]:k[ae])}var ae=arguments.length-2;if(ae===1)Z.children=J;else if(1<ae){oe=Array(ae);for(var Re=0;Re<ae;Re++)oe[Re]=arguments[Re+2];Z.children=oe}return{$$typeof:s,type:g.type,key:ne,ref:ee,props:Z,_owner:de}},te.createContext=function(g){return g={$$typeof:L,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:j,_context:g},g.Consumer=g},te.createElement=Ee,te.createFactory=function(g){var k=Ee.bind(null,g);return k.type=g,k},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:R,render:g}},te.isValidElement=xt,te.lazy=function(g){return{$$typeof:Q,_payload:{_status:-1,_result:g},_init:De}},te.memo=function(g,k){return{$$typeof:W,type:g,compare:k===void 0?null:k}},te.startTransition=function(g){var k=E.transition;E.transition={};try{g()}finally{E.transition=k}},te.unstable_act=_,te.useCallback=function(g,k){return me.current.useCallback(g,k)},te.useContext=function(g){return me.current.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g){return me.current.useDeferredValue(g)},te.useEffect=function(g,k){return me.current.useEffect(g,k)},te.useId=function(){return me.current.useId()},te.useImperativeHandle=function(g,k,J){return me.current.useImperativeHandle(g,k,J)},te.useInsertionEffect=function(g,k){return me.current.useInsertionEffect(g,k)},te.useLayoutEffect=function(g,k){return me.current.useLayoutEffect(g,k)},te.useMemo=function(g,k){return me.current.useMemo(g,k)},te.useReducer=function(g,k,J){return me.current.useReducer(g,k,J)},te.useRef=function(g){return me.current.useRef(g)},te.useState=function(g){return me.current.useState(g)},te.useSyncExternalStore=function(g,k,J){return me.current.useSyncExternalStore(g,k,J)},te.useTransition=function(){return me.current.useTransition()},te.version="18.3.1",te}var hf;function eu(){return hf||(hf=1,ka.exports=gm()),ka.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function vm(){if(mf)return ji;mf=1;var s=eu(),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,x=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function L(R,z,W){var Q,O={},D=null,G=null;W!==void 0&&(D=""+W),z.key!==void 0&&(D=""+z.key),z.ref!==void 0&&(G=z.ref);for(Q in z)h.call(z,Q)&&!j.hasOwnProperty(Q)&&(O[Q]=z[Q]);if(R&&R.defaultProps)for(Q in z=R.defaultProps,z)O[Q]===void 0&&(O[Q]=z[Q]);return{$$typeof:c,type:R,key:D,ref:G,props:O,_owner:x.current}}return ji.Fragment=u,ji.jsx=L,ji.jsxs=L,ji}var gf;function xm(){return gf||(gf=1,ja.exports=vm()),ja.exports}var o=xm(),Oe=eu();const Ki=mm(Oe);var sl={},Sa={exports:{}},Xe={},Ca={exports:{}},Ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function ym(){return vf||(vf=1,function(s){function c(E,$){var _=E.length;E.push($);e:for(;0<_;){var g=_-1>>>1,k=E[g];if(0<x(k,$))E[g]=$,E[_]=k,_=g;else break e}}function u(E){return E.length===0?null:E[0]}function h(E){if(E.length===0)return null;var $=E[0],_=E.pop();if(_!==$){E[0]=_;e:for(var g=0,k=E.length,J=k>>>1;g<J;){var Z=2*(g+1)-1,ne=E[Z],ee=Z+1,de=E[ee];if(0>x(ne,_))ee<k&&0>x(de,ne)?(E[g]=de,E[ee]=_,g=ee):(E[g]=ne,E[Z]=_,g=Z);else if(ee<k&&0>x(de,_))E[g]=de,E[ee]=_,g=ee;else break e}}return $}function x(E,$){var _=E.sortIndex-$.sortIndex;return _!==0?_:E.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var L=Date,R=L.now();s.unstable_now=function(){return L.now()-R}}var z=[],W=[],Q=1,O=null,D=3,G=!1,re=!1,V=!1,Y=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(E){for(var $=u(W);$!==null;){if($.callback===null)h(W);else if($.startTime<=E)h(W),$.sortIndex=$.expirationTime,c(z,$);else break;$=u(W)}}function q(E){if(V=!1,ie(E),!re)if(u(z)!==null)re=!0,De(ce);else{var $=u(W);$!==null&&me(q,$.startTime-E)}}function ce(E,$){re=!1,V&&(V=!1,fe(Ee),Ee=-1),G=!0;var _=D;try{for(ie($),O=u(z);O!==null&&(!(O.expirationTime>$)||E&&!Ft());){var g=O.callback;if(typeof g=="function"){O.callback=null,D=O.priorityLevel;var k=g(O.expirationTime<=$);$=s.unstable_now(),typeof k=="function"?O.callback=k:O===u(z)&&h(z),ie($)}else h(z);O=u(z)}if(O!==null)var J=!0;else{var Z=u(W);Z!==null&&me(q,Z.startTime-$),J=!1}return J}finally{O=null,D=_,G=!1}}var K=!1,H=null,Ee=-1,et=5,xt=-1;function Ft(){return!(s.unstable_now()-xt<et)}function st(){if(H!==null){var E=s.unstable_now();xt=E;var $=!0;try{$=H(!0,E)}finally{$?Qe():(K=!1,H=null)}}else K=!1}var Qe;if(typeof le=="function")Qe=function(){le(st)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,at=tt.port2;tt.port1.onmessage=st,Qe=function(){at.postMessage(null)}}else Qe=function(){Y(st,0)};function De(E){H=E,K||(K=!0,Qe())}function me(E,$){Ee=Y(function(){E(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_continueExecution=function(){re||G||(re=!0,De(ce))},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return D},s.unstable_getFirstCallbackNode=function(){return u(z)},s.unstable_next=function(E){switch(D){case 1:case 2:case 3:var $=3;break;default:$=D}var _=D;D=$;try{return E()}finally{D=_}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(E,$){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=D;D=E;try{return $()}finally{D=_}},s.unstable_scheduleCallback=function(E,$,_){var g=s.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?g+_:g):_=g,E){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=_+k,E={id:Q++,callback:$,priorityLevel:E,startTime:_,expirationTime:k,sortIndex:-1},_>g?(E.sortIndex=_,c(W,E),u(z)===null&&E===u(W)&&(V?(fe(Ee),Ee=-1):V=!0,me(q,_-g))):(E.sortIndex=k,c(z,E),re||G||(re=!0,De(ce))),E},s.unstable_shouldYield=Ft,s.unstable_wrapCallback=function(E){var $=D;return function(){var _=D;D=$;try{return E.apply(this,arguments)}finally{D=_}}}}(Ia)),Ia}var xf;function wm(){return xf||(xf=1,Ca.exports=ym()),Ca.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function jm(){if(yf)return Xe;yf=1;var s=eu(),c=wm();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,x={};function j(e,t){L(e,t),L(e+"Capture",t)}function L(e,t){for(x[e]=t,e=0;e<t.length;e++)h.add(t[e])}var R=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),z=Object.prototype.hasOwnProperty,W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},O={};function D(e){return z.call(O,e)?!0:z.call(Q,e)?!1:W.test(e)?O[e]=!0:(Q[e]=!0,!1)}function G(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function re(e,t,n,r){if(t===null||typeof t>"u"||G(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fe,le);Y[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fe,le);Y[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fe,le);Y[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,n,r){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(re(t,n,i,r)&&(n=null),r||i===null?D(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var q=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),K=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Ft=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),E=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,g;function k(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,d=l.length-1;1<=a&&0<=d&&i[a]!==l[d];)d--;for(;1<=a&&0<=d;a--,d--)if(i[a]!==l[d]){if(a!==1||d!==1)do if(a--,d--,0>d||i[a]!==l[d]){var f=`
`+i[a].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=a&&0<=d);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?k(e):""}function ne(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case K:return"Portal";case et:return"Profiler";case Ee:return"StrictMode";case Qe:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ft:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case at:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Re(e){var t=ae(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=Re(e))}function yt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function El(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function zl(e,t){wu(e,t);var n=oe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_l(e,t.type,n):t.hasOwnProperty("defaultValue")&&_l(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _l(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Ar(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oe(n)}}function Su(e,t){var n=oe(t.value),r=oe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Lu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jp=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Zn=null,Xn=null;function zu(e){if(e=li(e)){if(typeof $l!="function")throw Error(u(280));var t=e.stateNode;t&&(t=ko(t),$l(e.stateNode,e.type,t))}}function _u(e){Zn?Xn?Xn.push(e):Xn=[e]:Zn=e}function Nu(){if(Zn){var e=Zn,t=Xn;if(Xn=Zn=null,zu(e),t)for(e=0;e<t.length;e++)zu(t[e])}}function Tu(e,t){return e(t)}function Mu(){}var Ol=!1;function Bu(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Tu(e,t,n)}finally{Ol=!1,(Zn!==null||Xn!==null)&&(Mu(),Nu())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Dl=!1;if(R)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Dl=!1}function kp(e,t,n,r,i,l,a,d,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(C){this.onError(C)}}var br=!1,qi=null,eo=!1,Fl=null,Sp={onError:function(e){br=!0,qi=e}};function Cp(e,t,n,r,i,l,a,d,f){br=!1,qi=null,kp.apply(Sp,arguments)}function Ip(e,t,n,r,i,l,a,d,f){if(Cp.apply(this,arguments),br){if(br){var w=qi;br=!1,qi=null}else throw Error(u(198));eo||(eo=!0,Fl=w)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(In(e)!==e)throw Error(u(188))}function Pp(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Au(i),e;if(l===r)return Au(i),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,d=i.child;d;){if(d===n){a=!0,n=i,r=l;break}if(d===r){a=!0,r=i,n=l;break}d=d.sibling}if(!a){for(d=l.child;d;){if(d===n){a=!0,n=l,r=i;break}if(d===r){a=!0,r=l,n=i;break}d=d.sibling}if(!a)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function $u(e){return e=Pp(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Du=c.unstable_scheduleCallback,Fu=c.unstable_cancelCallback,Lp=c.unstable_shouldYield,Ep=c.unstable_requestPaint,Ce=c.unstable_now,zp=c.unstable_getCurrentPriorityLevel,bl=c.unstable_ImmediatePriority,bu=c.unstable_UserBlockingPriority,to=c.unstable_NormalPriority,_p=c.unstable_LowPriority,Hu=c.unstable_IdlePriority,no=null,Et=null;function Np(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(no,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Bp,Tp=Math.log,Mp=Math.LN2;function Bp(e){return e>>>=0,e===0?32:31-(Tp(e)/Mp|0)|0}var ro=64,io=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var d=a&~i;d!==0?r=Hr(d):(l&=a,l!==0&&(r=Hr(l)))}else a=n&~i,a!==0?r=Hr(a):l!==0&&(r=Hr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function Rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-wt(l),d=1<<a,f=i[a];f===-1?(!(d&n)||d&r)&&(i[a]=Rp(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function $p(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vu,Vl,Wu,Gu,Ku,Wl=!1,lo=[],on=null,ln=null,sn=null,Qr=new Map,Vr=new Map,an=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function Wr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=li(t),t!==null&&Vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case"focusin":return on=Wr(on,e,t,n,r,i),!0;case"dragenter":return ln=Wr(ln,e,t,n,r,i),!0;case"mouseover":return sn=Wr(sn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Qr.set(l,Wr(Qr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Vr.set(l,Wr(Vr.get(l)||null,e,t,n,r,i)),!0}return!1}function Yu(e){var t=Pn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Ru(n),t!==null){e.blockedOn=t,Ku(e.priority,function(){Wu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rl=r,n.target.dispatchEvent(r),Rl=null}else return t=li(n),t!==null&&Vl(t),e.blockedOn=n,!1;t.shift()}return!0}function Zu(e,t,n){so(e)&&n.delete(t)}function Fp(){Wl=!1,on!==null&&so(on)&&(on=null),ln!==null&&so(ln)&&(ln=null),sn!==null&&so(sn)&&(sn=null),Qr.forEach(Zu),Vr.forEach(Zu)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Fp)))}function Kr(e){function t(i){return Gr(i,e)}if(0<lo.length){Gr(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Gr(on,e),ln!==null&&Gr(ln,e),sn!==null&&Gr(sn,e),Qr.forEach(t),Vr.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Yu(n),n.blockedOn===null&&an.shift()}var qn=q.ReactCurrentBatchConfig,ao=!0;function bp(e,t,n,r){var i=he,l=qn.transition;qn.transition=null;try{he=1,Gl(e,t,n,r)}finally{he=i,qn.transition=l}}function Hp(e,t,n,r){var i=he,l=qn.transition;qn.transition=null;try{he=4,Gl(e,t,n,r)}finally{he=i,qn.transition=l}}function Gl(e,t,n,r){if(ao){var i=Kl(e,t,n,r);if(i===null)ds(e,t,r,uo,n),Ju(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Ju(e,r),t&4&&-1<Op.indexOf(e)){for(;i!==null;){var l=li(i);if(l!==null&&Vu(l),l=Kl(e,t,n,r),l===null&&ds(e,t,r,uo,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ds(e,t,r,null,n)}}var uo=null;function Kl(e,t,n,r){if(uo=null,e=Al(r),e=Pn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function Xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zp()){case bl:return 1;case bu:return 4;case to:case _p:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var un=null,Jl=null,co=null;function qu(){if(co)return co;var e,t=Jl,n=t.length,r,i="value"in un?un.value:un.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return co=i.slice(e,1<r?1-r:void 0)}function fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function ec(){return!1}function nt(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?po:ec,this.isPropagationStopped=ec,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=nt(er),Jr=_({},er,{view:0,detail:0}),Up=nt(Jr),Zl,Xl,Yr,ho=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Zl=e.screenX-Yr.screenX,Xl=e.screenY-Yr.screenY):Xl=Zl=0,Yr=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),tc=nt(ho),Qp=_({},ho,{dataTransfer:0}),Vp=nt(Qp),Wp=_({},Jr,{relatedTarget:0}),ql=nt(Wp),Gp=_({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=nt(Gp),Jp=_({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=nt(Jp),Zp=_({},er,{data:0}),nc=nt(Zp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function es(){return th}var nh=_({},Jr,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rh=nt(nh),ih=_({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=nt(ih),oh=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),lh=nt(oh),sh=_({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=nt(sh),uh=_({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ch=nt(uh),dh=[9,13,27,32],ts=R&&"CompositionEvent"in window,Zr=null;R&&"documentMode"in document&&(Zr=document.documentMode);var fh=R&&"TextEvent"in window&&!Zr,ic=R&&(!ts||Zr&&8<Zr&&11>=Zr),oc=" ",lc=!1;function sc(e,t){switch(e){case"keyup":return dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function ph(e,t){switch(e){case"compositionend":return ac(t);case"keypress":return t.which!==32?null:(lc=!0,oc);case"textInput":return e=t.data,e===oc&&lc?null:e;default:return null}}function hh(e,t){if(tr)return e==="compositionend"||!ts&&sc(e,t)?(e=qu(),co=Jl=un=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ic&&t.locale!=="ko"?null:t.data;default:return null}}var mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mh[e.type]:t==="textarea"}function cc(e,t,n,r){_u(r),t=yo(t,"onChange"),0<t.length&&(n=new Yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,qr=null;function gh(e){Ec(e,0)}function mo(e){var t=lr(e);if(yt(t))return e}function vh(e,t){if(e==="change")return t}var dc=!1;if(R){var ns;if(R){var rs="oninput"in document;if(!rs){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),rs=typeof fc.oninput=="function"}ns=rs}else ns=!1;dc=ns&&(!document.documentMode||9<document.documentMode)}function pc(){Xr&&(Xr.detachEvent("onpropertychange",hc),qr=Xr=null)}function hc(e){if(e.propertyName==="value"&&mo(qr)){var t=[];cc(t,qr,e,Al(e)),Bu(gh,t)}}function xh(e,t,n){e==="focusin"?(pc(),Xr=t,qr=n,Xr.attachEvent("onpropertychange",hc)):e==="focusout"&&pc()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(qr)}function wh(e,t){if(e==="click")return mo(t)}function jh(e,t){if(e==="input"||e==="change")return mo(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:kh;function ei(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!z.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,t){var n=mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xc(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vc(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=gc(n,l);var a=gc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=R&&"documentMode"in document&&11>=document.documentMode,nr=null,os=null,ti=null,ls=!1;function yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ls||nr==null||nr!==Zi(r)||(r=nr,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&ei(ti,r)||(ti=r,r=yo(os,"onSelect"),0<r.length&&(t=new Yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},ss={},wc={};R&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function vo(e){if(ss[e])return ss[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return ss[e]=t[n];return e}var jc=vo("animationend"),kc=vo("animationiteration"),Sc=vo("animationstart"),Cc=vo("transitionend"),Ic=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Ic.set(e,t),j(t,[e])}for(var as=0;as<Pc.length;as++){var us=Pc[as],Ih=us.toLowerCase(),Ph=us[0].toUpperCase()+us.slice(1);cn(Ih,"on"+Ph)}cn(jc,"onAnimationEnd"),cn(kc,"onAnimationIteration"),cn(Sc,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(Cc,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Lc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ip(r,t,void 0,e),e.currentTarget=null}function Ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var d=r[a],f=d.instance,w=d.currentTarget;if(d=d.listener,f!==l&&i.isPropagationStopped())break e;Lc(i,d,w),l=f}else for(a=0;a<r.length;a++){if(d=r[a],f=d.instance,w=d.currentTarget,d=d.listener,f!==l&&i.isPropagationStopped())break e;Lc(i,d,w),l=f}}}if(eo)throw e=Fl,eo=!1,Fl=null,e}function ve(e,t){var n=t[vs];n===void 0&&(n=t[vs]=new Set);var r=e+"__bubble";n.has(r)||(zc(t,e,2,!1),n.add(r))}function cs(e,t,n){var r=0;t&&(r|=4),zc(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[xo]){e[xo]=!0,h.forEach(function(n){n!=="selectionchange"&&(Lh.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,cs("selectionchange",!1,t))}}function zc(e,t,n,r){switch(Xu(t)){case 1:var i=bp;break;case 4:i=Hp;break;default:i=Gl}n=i.bind(null,t,n,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ds(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;a=a.return}for(;d!==null;){if(a=Pn(d),a===null)return;if(f=a.tag,f===5||f===6){r=l=a;continue e}d=d.parentNode}}r=r.return}Bu(function(){var w=l,C=Al(n),I=[];e:{var S=Ic.get(e);if(S!==void 0){var N=Yl,M=e;switch(e){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":N=rh;break;case"focusin":M="focus",N=ql;break;case"focusout":M="blur",N=ql;break;case"beforeblur":case"afterblur":N=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=lh;break;case jc:case kc:case Sc:N=Kp;break;case Cc:N=ah;break;case"scroll":N=Up;break;case"wheel":N=ch;break;case"copy":case"cut":case"paste":N=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=rc}var B=(t&4)!==0,Ie=!B&&e==="scroll",v=B?S!==null?S+"Capture":null:S;B=[];for(var p=w,y;p!==null;){y=p;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,v!==null&&(P=Dr(p,v),P!=null&&B.push(ii(p,P,y)))),Ie)break;p=p.return}0<B.length&&(S=new N(S,M,null,n,C),I.push({event:S,listeners:B}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",S&&n!==Rl&&(M=n.relatedTarget||n.fromElement)&&(Pn(M)||M[Ht]))break e;if((N||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,N?(M=n.relatedTarget||n.toElement,N=w,M=M?Pn(M):null,M!==null&&(Ie=In(M),M!==Ie||M.tag!==5&&M.tag!==6)&&(M=null)):(N=null,M=w),N!==M)){if(B=tc,P="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(B=rc,P="onPointerLeave",v="onPointerEnter",p="pointer"),Ie=N==null?S:lr(N),y=M==null?S:lr(M),S=new B(P,p+"leave",N,n,C),S.target=Ie,S.relatedTarget=y,P=null,Pn(C)===w&&(B=new B(v,p+"enter",M,n,C),B.target=y,B.relatedTarget=Ie,P=B),Ie=P,N&&M)t:{for(B=N,v=M,p=0,y=B;y;y=ir(y))p++;for(y=0,P=v;P;P=ir(P))y++;for(;0<p-y;)B=ir(B),p--;for(;0<y-p;)v=ir(v),y--;for(;p--;){if(B===v||v!==null&&B===v.alternate)break t;B=ir(B),v=ir(v)}B=null}else B=null;N!==null&&_c(I,S,N,B,!1),M!==null&&Ie!==null&&_c(I,Ie,M,B,!0)}}e:{if(S=w?lr(w):window,N=S.nodeName&&S.nodeName.toLowerCase(),N==="select"||N==="input"&&S.type==="file")var A=vh;else if(uc(S))if(dc)A=jh;else{A=yh;var F=xh}else(N=S.nodeName)&&N.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(A=wh);if(A&&(A=A(e,w))){cc(I,A,n,C);break e}F&&F(e,S,w),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&_l(S,"number",S.value)}switch(F=w?lr(w):window,e){case"focusin":(uc(F)||F.contentEditable==="true")&&(nr=F,os=w,ti=null);break;case"focusout":ti=os=nr=null;break;case"mousedown":ls=!0;break;case"contextmenu":case"mouseup":case"dragend":ls=!1,yc(I,n,C);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":yc(I,n,C)}var b;if(ts)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else tr?sc(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(ic&&n.locale!=="ko"&&(tr||U!=="onCompositionStart"?U==="onCompositionEnd"&&tr&&(b=qu()):(un=C,Jl="value"in un?un.value:un.textContent,tr=!0)),F=yo(w,U),0<F.length&&(U=new nc(U,e,null,n,C),I.push({event:U,listeners:F}),b?U.data=b:(b=ac(n),b!==null&&(U.data=b)))),(b=fh?ph(e,n):hh(e,n))&&(w=yo(w,"onBeforeInput"),0<w.length&&(C=new nc("onBeforeInput","beforeinput",null,n,C),I.push({event:C,listeners:w}),C.data=b))}Ec(I,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Dr(e,n),l!=null&&r.unshift(ii(e,l,i)),l=Dr(e,t),l!=null&&r.push(ii(e,l,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var d=n,f=d.alternate,w=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&w!==null&&(d=w,i?(f=Dr(n,l),f!=null&&a.unshift(ii(n,f,d))):i||(f=Dr(n,l),f!=null&&a.push(ii(n,f,d)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Eh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(zh,"")}function wo(e,t,n){if(t=Nc(t),Nc(e)!==t&&n)throw Error(u(425))}function jo(){}var fs=null,ps=null;function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Nh=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Th)}:ms;function Th(e){setTimeout(function(){throw e})}function gs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kr(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),zt="__reactFiber$"+or,oi="__reactProps$"+or,Ht="__reactContainer$"+or,vs="__reactEvents$"+or,Mh="__reactListeners$"+or,Bh="__reactHandles$"+or;function Pn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mc(e);e!==null;){if(n=e[zt])return n;e=Mc(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[zt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function ko(e){return e[oi]||null}var xs=[],sr=-1;function fn(e){return{current:e}}function xe(e){0>sr||(e.current=xs[sr],xs[sr]=null,sr--)}function ge(e,t){sr++,xs[sr]=e.current,e.current=t}var pn={},Fe=fn(pn),Ge=fn(!1),Ln=pn;function ar(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function So(){xe(Ge),xe(Fe)}function Bc(e,t,n){if(Fe.current!==pn)throw Error(u(168));ge(Fe,t),ge(Ge,n)}function Rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(u(108,de(e)||"Unknown",i));return _({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Ln=Fe.current,ge(Fe,e),ge(Ge,Ge.current),!0}function Ac(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Rc(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,xe(Ge),xe(Fe),ge(Fe,e)):xe(Ge),ge(Ge,n)}var Ut=null,Io=!1,ys=!1;function $c(e){Ut===null?Ut=[e]:Ut.push(e)}function Rh(e){Io=!0,$c(e)}function hn(){if(!ys&&Ut!==null){ys=!0;var e=0,t=he;try{var n=Ut;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Io=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Du(bl,hn),i}finally{he=t,ys=!1}}return null}var ur=[],cr=0,Po=null,Lo=0,ut=[],ct=0,En=null,Qt=1,Vt="";function zn(e,t){ur[cr++]=Lo,ur[cr++]=Po,Po=e,Lo=t}function Oc(e,t,n){ut[ct++]=Qt,ut[ct++]=Vt,ut[ct++]=En,En=e;var r=Qt;e=Vt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var l=32-wt(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qt=1<<32-wt(t)+i|n<<i|r,Vt=l+e}else Qt=1<<l|n<<i|r,Vt=e}function ws(e){e.return!==null&&(zn(e,1),Oc(e,1,0))}function js(e){for(;e===Po;)Po=ur[--cr],ur[cr]=null,Lo=ur[--cr],ur[cr]=null;for(;e===En;)En=ut[--ct],ut[ct]=null,Vt=ut[--ct],ut[ct]=null,Qt=ut[--ct],ut[ct]=null}var rt=null,it=null,we=!1,kt=null;function Dc(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,it=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Qt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,it=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ss(e){if(we){var t=it;if(t){var n=t;if(!Fc(e,t)){if(ks(e))throw Error(u(418));t=dn(n.nextSibling);var r=rt;t&&Fc(e,t)?Dc(r,n):(e.flags=e.flags&-4097|2,we=!1,rt=e)}}else{if(ks(e))throw Error(u(418));e.flags=e.flags&-4097|2,we=!1,rt=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function Eo(e){if(e!==rt)return!1;if(!we)return bc(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hs(e.type,e.memoizedProps)),t&&(t=it)){if(ks(e))throw Hc(),Error(u(418));for(;t;)Dc(e,t),t=dn(t.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=rt?dn(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=it;e;)e=dn(e.nextSibling)}function dr(){it=rt=null,we=!1}function Cs(e){kt===null?kt=[e]:kt.push(e)}var Ah=q.ReactCurrentBatchConfig;function si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var d=i.refs;a===null?delete d[l]:d[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uc(e){var t=e._init;return t(e._payload)}function Qc(e){function t(v,p){if(e){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=kn(v,p),v.index=0,v.sibling=null,v}function l(v,p,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,p,y,P){return p===null||p.tag!==6?(p=ma(y,v.mode,P),p.return=v,p):(p=i(p,y),p.return=v,p)}function f(v,p,y,P){var A=y.type;return A===H?C(v,p,y.props.children,P,y.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===De&&Uc(A)===p.type)?(P=i(p,y.props),P.ref=si(v,p,y),P.return=v,P):(P=qo(y.type,y.key,y.props,null,v.mode,P),P.ref=si(v,p,y),P.return=v,P)}function w(v,p,y,P){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ga(y,v.mode,P),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function C(v,p,y,P,A){return p===null||p.tag!==7?(p=$n(y,v.mode,P,A),p.return=v,p):(p=i(p,y),p.return=v,p)}function I(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ma(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ce:return y=qo(p.type,p.key,p.props,null,v.mode,y),y.ref=si(v,null,p),y.return=v,y;case K:return p=ga(p,v.mode,y),p.return=v,p;case De:var P=p._init;return I(v,P(p._payload),y)}if(Ar(p)||$(p))return p=$n(p,v.mode,y,null),p.return=v,p;zo(v,p)}return null}function S(v,p,y,P){var A=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:d(v,p,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ce:return y.key===A?f(v,p,y,P):null;case K:return y.key===A?w(v,p,y,P):null;case De:return A=y._init,S(v,p,A(y._payload),P)}if(Ar(y)||$(y))return A!==null?null:C(v,p,y,P,null);zo(v,y)}return null}function N(v,p,y,P,A){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(y)||null,d(p,v,""+P,A);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ce:return v=v.get(P.key===null?y:P.key)||null,f(p,v,P,A);case K:return v=v.get(P.key===null?y:P.key)||null,w(p,v,P,A);case De:var F=P._init;return N(v,p,y,F(P._payload),A)}if(Ar(P)||$(P))return v=v.get(y)||null,C(p,v,P,A,null);zo(p,P)}return null}function M(v,p,y,P){for(var A=null,F=null,b=p,U=p=0,Me=null;b!==null&&U<y.length;U++){b.index>U?(Me=b,b=null):Me=b.sibling;var ue=S(v,b,y[U],P);if(ue===null){b===null&&(b=Me);break}e&&b&&ue.alternate===null&&t(v,b),p=l(ue,p,U),F===null?A=ue:F.sibling=ue,F=ue,b=Me}if(U===y.length)return n(v,b),we&&zn(v,U),A;if(b===null){for(;U<y.length;U++)b=I(v,y[U],P),b!==null&&(p=l(b,p,U),F===null?A=b:F.sibling=b,F=b);return we&&zn(v,U),A}for(b=r(v,b);U<y.length;U++)Me=N(b,v,U,y[U],P),Me!==null&&(e&&Me.alternate!==null&&b.delete(Me.key===null?U:Me.key),p=l(Me,p,U),F===null?A=Me:F.sibling=Me,F=Me);return e&&b.forEach(function(Sn){return t(v,Sn)}),we&&zn(v,U),A}function B(v,p,y,P){var A=$(y);if(typeof A!="function")throw Error(u(150));if(y=A.call(y),y==null)throw Error(u(151));for(var F=A=null,b=p,U=p=0,Me=null,ue=y.next();b!==null&&!ue.done;U++,ue=y.next()){b.index>U?(Me=b,b=null):Me=b.sibling;var Sn=S(v,b,ue.value,P);if(Sn===null){b===null&&(b=Me);break}e&&b&&Sn.alternate===null&&t(v,b),p=l(Sn,p,U),F===null?A=Sn:F.sibling=Sn,F=Sn,b=Me}if(ue.done)return n(v,b),we&&zn(v,U),A;if(b===null){for(;!ue.done;U++,ue=y.next())ue=I(v,ue.value,P),ue!==null&&(p=l(ue,p,U),F===null?A=ue:F.sibling=ue,F=ue);return we&&zn(v,U),A}for(b=r(v,b);!ue.done;U++,ue=y.next())ue=N(b,v,U,ue.value,P),ue!==null&&(e&&ue.alternate!==null&&b.delete(ue.key===null?U:ue.key),p=l(ue,p,U),F===null?A=ue:F.sibling=ue,F=ue);return e&&b.forEach(function(hm){return t(v,hm)}),we&&zn(v,U),A}function Ie(v,p,y,P){if(typeof y=="object"&&y!==null&&y.type===H&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ce:e:{for(var A=y.key,F=p;F!==null;){if(F.key===A){if(A=y.type,A===H){if(F.tag===7){n(v,F.sibling),p=i(F,y.props.children),p.return=v,v=p;break e}}else if(F.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===De&&Uc(A)===F.type){n(v,F.sibling),p=i(F,y.props),p.ref=si(v,F,y),p.return=v,v=p;break e}n(v,F);break}else t(v,F);F=F.sibling}y.type===H?(p=$n(y.props.children,v.mode,P,y.key),p.return=v,v=p):(P=qo(y.type,y.key,y.props,null,v.mode,P),P.ref=si(v,p,y),P.return=v,v=P)}return a(v);case K:e:{for(F=y.key;p!==null;){if(p.key===F)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=ga(y,v.mode,P),p.return=v,v=p}return a(v);case De:return F=y._init,Ie(v,p,F(y._payload),P)}if(Ar(y))return M(v,p,y,P);if($(y))return B(v,p,y,P);zo(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=ma(y,v.mode,P),p.return=v,v=p),a(v)):n(v,p)}return Ie}var fr=Qc(!0),Vc=Qc(!1),_o=fn(null),No=null,pr=null,Is=null;function Ps(){Is=pr=No=null}function Ls(e){var t=_o.current;xe(_o),e._currentValue=t}function Es(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){No=e,Is=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Is!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(No===null)throw Error(u(308));pr=e,No.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var _n=null;function zs(e){_n===null?_n=[e]:_n.push(e)}function Wc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,zs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function To(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ql(e,n)}}function Kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var i=e.updateQueue;mn=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var f=d,w=f.next;f.next=null,a===null?l=w:a.next=w,a=f;var C=e.alternate;C!==null&&(C=C.updateQueue,d=C.lastBaseUpdate,d!==a&&(d===null?C.firstBaseUpdate=w:d.next=w,C.lastBaseUpdate=f))}if(l!==null){var I=i.baseState;a=0,C=w=f=null,d=l;do{var S=d.lane,N=d.eventTime;if((r&S)===S){C!==null&&(C=C.next={eventTime:N,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var M=e,B=d;switch(S=t,N=n,B.tag){case 1:if(M=B.payload,typeof M=="function"){I=M.call(N,I,S);break e}I=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=B.payload,S=typeof M=="function"?M.call(N,I,S):M,S==null)break e;I=_({},I,S);break e;case 2:mn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[d]:S.push(d))}else N={eventTime:N,lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},C===null?(w=C=N,f=I):C=C.next=N,a|=S;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;S=d,d=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(C===null&&(f=I),i.baseState=f,i.firstBaseUpdate=w,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mn|=a,e.lanes=a,e.memoizedState=I}}function Jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(u(191,i));i.call(r)}}}var ai={},_t=fn(ai),ui=fn(ai),ci=fn(ai);function Nn(e){if(e===ai)throw Error(u(174));return e}function Ns(e,t){switch(ge(ci,t),ge(ui,e),ge(_t,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tl(t,e)}xe(_t),ge(_t,t)}function mr(){xe(_t),xe(ui),xe(ci)}function Yc(e){Nn(ci.current);var t=Nn(_t.current),n=Tl(t,e.type);t!==n&&(ge(ui,e),ge(_t,n))}function Ts(e){ui.current===e&&(xe(_t),xe(ui))}var je=fn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=[];function Bs(){for(var e=0;e<Ms.length;e++)Ms[e]._workInProgressVersionPrimary=null;Ms.length=0}var Ro=q.ReactCurrentDispatcher,Rs=q.ReactCurrentBatchConfig,Tn=0,ke=null,ze=null,Ne=null,Ao=!1,di=!1,fi=0,$h=0;function be(){throw Error(u(321))}function As(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function $s(e,t,n,r,i,l){if(Tn=l,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?bh:Hh,e=n(r,i),di){l=0;do{if(di=!1,fi=0,25<=l)throw Error(u(301));l+=1,Ne=ze=null,t.updateQueue=null,Ro.current=Uh,e=n(r,i)}while(di)}if(Ro.current=Do,t=ze!==null&&ze.next!==null,Tn=0,Ne=ze=ke=null,Ao=!1,t)throw Error(u(300));return e}function Os(){var e=fi!==0;return fi=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ke.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ft(){if(ze===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ne===null?ke.memoizedState:Ne.next;if(t!==null)Ne=t,ze=e;else{if(e===null)throw Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ne===null?ke.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function pi(e,t){return typeof t=="function"?t(e):t}function Ds(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=a=null,f=null,w=l;do{var C=w.lane;if((Tn&C)===C)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var I={lane:C,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(d=f=I,a=r):f=f.next=I,ke.lanes|=C,Mn|=C}w=w.next}while(w!==null&&w!==l);f===null?a=r:f.next=d,jt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ke.lanes|=l,Mn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fs(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);jt(l,t.memoizedState)||(Je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Zc(){}function Xc(e,t){var n=ke,r=ft(),i=t(),l=!jt(r.memoizedState,i);if(l&&(r.memoizedState=i,Je=!0),r=r.queue,bs(td.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,hi(9,ed.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(u(349));Tn&30||qc(n,t,i)}return i}function qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ed(e,t,n,r){t.value=n,t.getSnapshot=r,nd(t)&&rd(e)}function td(e,t,n){return n(function(){nd(t)&&rd(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function rd(e){var t=Wt(e,1);t!==null&&Pt(t,e,1,-1)}function id(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t.queue=e,e=e.dispatch=Fh.bind(null,ke,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function od(){return ft().memoizedState}function $o(e,t,n,r){var i=Nt();ke.flags|=e,i.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var i=ft();r=r===void 0?null:r;var l=void 0;if(ze!==null){var a=ze.memoizedState;if(l=a.destroy,r!==null&&As(r,a.deps)){i.memoizedState=hi(t,n,l,r);return}}ke.flags|=e,i.memoizedState=hi(1|t,n,l,r)}function ld(e,t){return $o(8390656,8,e,t)}function bs(e,t){return Oo(2048,8,e,t)}function sd(e,t){return Oo(4,2,e,t)}function ad(e,t){return Oo(4,4,e,t)}function ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,ud.bind(null,t,e),n)}function Hs(){}function dd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&As(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&As(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pd(e,t,n){return Tn&21?(jt(n,t)||(n=Uu(),ke.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function Oh(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{he=n,Rs.transition=r}}function hd(){return ft().memoizedState}function Dh(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},md(e))gd(t,n);else if(n=Wc(e,t,n,r),n!==null){var i=We();Pt(n,e,r,i),vd(n,t,r)}}function Fh(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(md(e))gd(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,d=l(a,n);if(i.hasEagerState=!0,i.eagerState=d,jt(d,a)){var f=t.interleaved;f===null?(i.next=i,zs(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=Wc(e,t,i,r),n!==null&&(i=We(),Pt(n,e,r,i),vd(n,t,r))}}function md(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function gd(e,t){di=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ql(e,n)}}var Do={readContext:dt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},bh={readContext:dt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:ld,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$o(4194308,4,ud.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dh.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:Hs,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=Oh.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Nt();if(we){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Te===null)throw Error(u(349));Tn&30||qc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ld(td.bind(null,r,l,e),[e]),r.flags|=2048,hi(9,ed.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Te.identifierPrefix;if(we){var n=Vt,r=Qt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$h++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hh={readContext:dt,useCallback:dd,useContext:dt,useEffect:bs,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:ad,useMemo:fd,useReducer:Ds,useRef:od,useState:function(){return Ds(pi)},useDebugValue:Hs,useDeferredValue:function(e){var t=ft();return pd(t,ze.memoizedState,e)},useTransition:function(){var e=Ds(pi)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:Xc,useId:hd,unstable_isNewReconciler:!1},Uh={readContext:dt,useCallback:dd,useContext:dt,useEffect:bs,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:ad,useMemo:fd,useReducer:Fs,useRef:od,useState:function(){return Fs(pi)},useDebugValue:Hs,useDeferredValue:function(e){var t=ft();return ze===null?t.memoizedState=e:pd(t,ze.memoizedState,e)},useTransition:function(){var e=Fs(pi)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:Xc,useId:hd,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=_({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=wn(e),l=Gt(r,i);l.payload=t,n!=null&&(l.callback=n),t=gn(e,l,i),t!==null&&(Pt(t,e,i,r),To(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=wn(e),l=Gt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=gn(e,l,i),t!==null&&(Pt(t,e,i,r),To(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=wn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(Pt(t,e,r,n),To(t,e,r))}};function xd(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,l):!0}function yd(e,t,n){var r=!1,i=pn,l=t.contextType;return typeof l=="object"&&l!==null?l=dt(l):(i=Ke(t)?Ln:Fe.current,r=t.contextTypes,l=(r=r!=null)?ar(e,i):pn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function Qs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_s(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=dt(l):(l=Ke(t)?Ln:Fe.current,i.context=ar(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Us(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fo.enqueueReplaceState(i,i.state,null),Mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=ne(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ws(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qh=typeof WeakMap=="function"?WeakMap:Map;function jd(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,sa=r),Ws(e,t)},n}function kd(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ws(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ws(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=im.bind(null,e,t,n),t.then(e,e))}function Cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Id(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var Vh=q.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?Vc(t,null,n,r):fr(t,e.child,n,r)}function Pd(e,t,n,r,i){n=n.render;var l=t.ref;return hr(t,i),r=$s(e,t,n,r,l,i),n=Os(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(we&&n&&ws(t),t.flags|=1,Ve(e,t,r,i),t.child)}function Ld(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ha(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ed(e,t,l,r,i)):(e=qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(a,r)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=kn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ei(l,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return Gs(e,t,n,r,i)}function zd(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(xr,ot),ot|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(xr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ge(xr,ot),ot|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ge(xr,ot),ot|=r;return Ve(e,t,i,n),t.child}function _d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var l=Ke(n)?Ln:Fe.current;return l=ar(t,l),hr(t,i),n=$s(e,t,n,r,l,i),r=Os(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(we&&r&&ws(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Nd(e,t,n,r,i){if(Ke(n)){var l=!0;Co(t)}else l=!1;if(hr(t,i),t.stateNode===null)Ho(e,t),yd(t,n,r),Qs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,d=t.memoizedProps;a.props=d;var f=a.context,w=n.contextType;typeof w=="object"&&w!==null?w=dt(w):(w=Ke(n)?Ln:Fe.current,w=ar(t,w));var C=n.getDerivedStateFromProps,I=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function";I||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==r||f!==w)&&wd(t,a,r,w),mn=!1;var S=t.memoizedState;a.state=S,Mo(t,r,a,i),f=t.memoizedState,d!==r||S!==f||Ge.current||mn?(typeof C=="function"&&(Us(t,n,C,r),f=t.memoizedState),(d=mn||xd(t,n,d,r,S,f,w))?(I||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=w,r=d):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Gc(e,t),d=t.memoizedProps,w=t.type===t.elementType?d:St(t.type,d),a.props=w,I=t.pendingProps,S=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=dt(f):(f=Ke(n)?Ln:Fe.current,f=ar(t,f));var N=n.getDerivedStateFromProps;(C=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==I||S!==f)&&wd(t,a,r,f),mn=!1,S=t.memoizedState,a.state=S,Mo(t,r,a,i);var M=t.memoizedState;d!==I||S!==M||Ge.current||mn?(typeof N=="function"&&(Us(t,n,N,r),M=t.memoizedState),(w=mn||xd(t,n,w,r,S,M,f)||!1)?(C||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,M,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,M,f)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=M),a.props=r,a.state=M,a.context=f,r=w):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,l,i)}function Ks(e,t,n,r,i,l){_d(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ac(t,n,!1),Kt(e,t,l);r=t.stateNode,Vh.current=t;var d=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fr(t,e.child,null,l),t.child=fr(t,null,d,l)):Ve(e,t,d,l),t.memoizedState=r.state,i&&Ac(t,n,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?Bc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bc(e,t.context,!1),Ns(e,t.containerInfo)}function Md(e,t,n,r,i){return dr(),Cs(i),t.flags|=256,Ve(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bd(e,t,n){var r=t.pendingProps,i=je.current,l=!1,a=(t.flags&128)!==0,d;if((d=a)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(je,i&1),e===null)return Ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=el(a,r,0,null),e=$n(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ys(n),t.memoizedState=Js,e):Zs(t,a));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Wh(e,t,a,r,d,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,d=i.sibling;var f={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=kn(i,f),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=kn(d,l):(l=$n(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Ys(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return l=e.child,e=l.sibling,r=kn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zs(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,n,r){return r!==null&&Cs(r),fr(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wh(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Vs(Error(u(422))),bo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=el({mode:"visible",children:r.children},i,0,null),l=$n(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&fr(t,e.child,null,a),t.child.memoizedState=Ys(a),t.memoizedState=Js,l);if(!(t.mode&1))return bo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(u(419)),r=Vs(l,r,void 0),bo(e,t,a,r)}if(d=(a&e.childLanes)!==0,Je||d){if(r=Te,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Wt(e,i),Pt(r,e,i,-1))}return pa(),r=Vs(Error(u(421))),bo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=om.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,it=dn(i.nextSibling),rt=t,we=!0,kt=null,e!==null&&(ut[ct++]=Qt,ut[ct++]=Vt,ut[ct++]=En,Qt=e.id,Vt=e.overflow,En=t),t=Zs(t,r.children),t.flags|=4096,t)}function Rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Es(e.return,t,n)}function Xs(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Ad(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ve(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rd(e,n,t);else if(e.tag===19)Rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xs(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xs(t,!0,n,null,l);break;case"together":Xs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gh(e,t,n){switch(t.tag){case 3:Td(t),dr();break;case 5:Yc(t);break;case 1:Ke(t.type)&&Co(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(_o,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?Bd(e,t,n):(ge(je,je.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);ge(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ad(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,n)}return Kt(e,t,n)}var $d,qs,Od,Dd;$d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},qs=function(){},Od=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nn(_t.current);var l=null;switch(n){case"input":i=El(e,i),r=El(e,r),l=[];break;case"select":i=_({},i,{value:void 0}),r=_({},r,{value:void 0}),l=[];break;case"textarea":i=Nl(e,i),r=Nl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jo)}Ml(n,r);var a;n=null;for(w in i)if(!r.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var d=i[w];for(a in d)d.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(x.hasOwnProperty(w)?l||(l=[]):(l=l||[]).push(w,null));for(w in r){var f=r[w];if(d=i!=null?i[w]:void 0,r.hasOwnProperty(w)&&f!==d&&(f!=null||d!=null))if(w==="style")if(d){for(a in d)!d.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&d[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(l||(l=[]),l.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(l=l||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(x.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&ve("scroll",e),l||d===f||(l=[])):(l=l||[]).push(w,f))}n&&(l=l||[]).push("style",n);var w=l;(t.updateQueue=w)&&(t.flags|=4)}},Dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function mi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kh(e,t,n){var r=t.pendingProps;switch(js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ke(t.type)&&So(),He(t),null;case 3:return r=t.stateNode,mr(),xe(Ge),xe(Fe),Bs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(ca(kt),kt=null))),qs(e,t),He(t),null;case 5:Ts(t);var i=Nn(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=Nn(_t.current),Eo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[zt]=t,r[oi]=l,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)ve(ni[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":yu(r,l),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ve("invalid",r);break;case"textarea":ku(r,l),ve("invalid",r)}Ml(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&wo(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&wo(r.textContent,d,e),i=["children",""+d]):x.hasOwnProperty(a)&&d!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":bt(r),ju(r,l,!0);break;case"textarea":bt(r),Cu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=jo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[oi]=r,$d(e,t,!1,!1),t.stateNode=e;e:{switch(a=Bl(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)ve(ni[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":yu(e,r),i=El(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_({},r,{value:void 0}),ve("invalid",e);break;case"textarea":ku(e,r),i=Nl(e,r),ve("invalid",e);break;default:i=r}Ml(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var f=d[l];l==="style"?Eu(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Pu(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&$r(e,f):typeof f=="number"&&$r(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(x.hasOwnProperty(l)?f!=null&&l==="onScroll"&&ve("scroll",e):f!=null&&ie(e,l,f,a))}switch(n){case"input":bt(e),ju(e,r,!1);break;case"textarea":bt(e),Cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oe(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Yn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=Nn(ci.current),Nn(_t.current),Eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(l=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return He(t),null;case 13:if(xe(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&it!==null&&t.mode&1&&!(t.flags&128))Hc(),dr(),t.flags|=98560,l=!1;else if(l=Eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[zt]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else kt!==null&&(ca(kt),kt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?_e===0&&(_e=3):pa())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return mr(),qs(e,t),e===null&&ri(t.stateNode.containerInfo),He(t),null;case 10:return Ls(t.type._context),He(t),null;case 17:return Ke(t.type)&&So(),He(t),null;case 19:if(xe(je),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)mi(l,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bo(e),a!==null){for(t.flags|=128,mi(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(je,je.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ce()>yr&&(t.flags|=128,r=!0,mi(l,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!we)return He(t),null}else 2*Ce()-l.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,mi(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ce(),t.sibling=null,n=je.current,ge(je,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return fa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Jh(e,t){switch(js(t),t.tag){case 1:return Ke(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),xe(Ge),xe(Fe),Bs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ts(t),null;case 13:if(xe(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(je),null;case 4:return mr(),null;case 10:return Ls(t.type._context),null;case 22:case 23:return fa(),null;case 24:return null;default:return null}}var Uo=!1,Ue=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,T=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function ea(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Fd=!1;function Zh(e,t){if(fs=ao,e=xc(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,d=-1,f=-1,w=0,C=0,I=e,S=null;t:for(;;){for(var N;I!==n||i!==0&&I.nodeType!==3||(d=a+i),I!==l||r!==0&&I.nodeType!==3||(f=a+r),I.nodeType===3&&(a+=I.nodeValue.length),(N=I.firstChild)!==null;)S=I,I=N;for(;;){if(I===e)break t;if(S===n&&++w===i&&(d=a),S===l&&++C===r&&(f=a),(N=I.nextSibling)!==null)break;I=S,S=I.parentNode}I=N}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:e,selectionRange:n},ao=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var M=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var B=M.memoizedProps,Ie=M.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?B:St(t.type,B),Ie);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(P){Se(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return M=Fd,Fd=!1,M}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ea(t,n,l)}i=i.next}while(i!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bd(e){var t=e.alternate;t!==null&&(e.alternate=null,bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[oi],delete t[vs],delete t[Mh],delete t[Bh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jo));else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}var Ae=null,Ct=!1;function vn(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(no,n)}catch{}switch(n.tag){case 5:Ue||vr(n,t);case 6:var r=Ae,i=Ct;Ae=null,vn(e,t,n),Ae=r,Ct=i,Ae!==null&&(Ct?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Ct?(e=Ae,n=n.stateNode,e.nodeType===8?gs(e.parentNode,n):e.nodeType===1&&gs(e,n),Kr(e)):gs(Ae,n.stateNode));break;case 4:r=Ae,i=Ct,Ae=n.stateNode.containerInfo,Ct=!0,vn(e,t,n),Ae=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&ea(n,t,a),i=i.next}while(i!==r)}vn(e,t,n);break;case 1:if(!Ue&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Se(n,t,d)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,vn(e,t,n),Ue=r):vn(e,t,n);break;default:vn(e,t,n)}}function Vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yh),t.forEach(function(r){var i=lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,d=a;e:for(;d!==null;){switch(d.tag){case 5:Ae=d.stateNode,Ct=!1;break e;case 3:Ae=d.stateNode.containerInfo,Ct=!0;break e;case 4:Ae=d.stateNode.containerInfo,Ct=!0;break e}d=d.return}if(Ae===null)throw Error(u(160));Qd(l,a,i),Ae=null,Ct=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(w){Se(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wd(t,e),t=t.sibling}function Wd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Tt(e),r&4){try{gi(3,e,e.return),Qo(3,e)}catch(B){Se(e,e.return,B)}try{gi(5,e,e.return)}catch(B){Se(e,e.return,B)}}break;case 1:It(t,e),Tt(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(It(t,e),Tt(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(B){Se(e,e.return,B)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&wu(i,l),Bl(d,a);var w=Bl(d,l);for(a=0;a<f.length;a+=2){var C=f[a],I=f[a+1];C==="style"?Eu(i,I):C==="dangerouslySetInnerHTML"?Pu(i,I):C==="children"?$r(i,I):ie(i,C,I,w)}switch(d){case"input":zl(i,l);break;case"textarea":Su(i,l);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var N=l.value;N!=null?Yn(i,!!l.multiple,N,!1):S!==!!l.multiple&&(l.defaultValue!=null?Yn(i,!!l.multiple,l.defaultValue,!0):Yn(i,!!l.multiple,l.multiple?[]:"",!1))}i[oi]=l}catch(B){Se(e,e.return,B)}}break;case 6:if(It(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(B){Se(e,e.return,B)}}break;case 3:if(It(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(B){Se(e,e.return,B)}break;case 4:It(t,e),Tt(e);break;case 13:It(t,e),Tt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(la=Ce())),r&4&&Vd(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(w=Ue)||C,It(t,e),Ue=w):It(t,e),Tt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!C&&e.mode&1)for(T=e,C=e.child;C!==null;){for(I=T=C;T!==null;){switch(S=T,N=S.child,S.tag){case 0:case 11:case 14:case 15:gi(4,S,S.return);break;case 1:vr(S,S.return);var M=S.stateNode;if(typeof M.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(B){Se(r,n,B)}}break;case 5:vr(S,S.return);break;case 22:if(S.memoizedState!==null){Jd(I);continue}}N!==null?(N.return=S,T=N):Jd(I)}C=C.sibling}e:for(C=null,I=e;;){if(I.tag===5){if(C===null){C=I;try{i=I.stateNode,w?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=I.stateNode,f=I.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=Lu("display",a))}catch(B){Se(e,e.return,B)}}}else if(I.tag===6){if(C===null)try{I.stateNode.nodeValue=w?"":I.memoizedProps}catch(B){Se(e,e.return,B)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;C===I&&(C=null),I=I.return}C===I&&(C=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:It(t,e),Tt(e),r&4&&Vd(e);break;case 21:break;default:It(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hd(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var l=Ud(e);ra(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,d=Ud(e);na(e,d,a);break;default:throw Error(u(161))}}catch(f){Se(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e,t,n){T=e,Gd(e)}function Gd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Uo;if(!a){var d=i.alternate,f=d!==null&&d.memoizedState!==null||Ue;d=Uo;var w=Ue;if(Uo=a,(Ue=f)&&!w)for(T=i;T!==null;)a=T,f=a.child,a.tag===22&&a.memoizedState!==null?Yd(i):f!==null?(f.return=a,T=f):Yd(i);for(;l!==null;)T=l,Gd(l),l=l.sibling;T=i,Uo=d,Ue=w}Kd(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):Kd(e)}}function Kd(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Jc(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jc(t,a,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var C=w.memoizedState;if(C!==null){var I=C.dehydrated;I!==null&&Kr(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ue||t.flags&512&&ta(t)}catch(S){Se(t,t.return,S)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Jd(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Yd(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(f){Se(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){Se(t,i,f)}}var l=t.return;try{ta(t)}catch(f){Se(t,l,f)}break;case 5:var a=t.return;try{ta(t)}catch(f){Se(t,a,f)}}}catch(f){Se(t,t.return,f)}if(t===e){T=null;break}var d=t.sibling;if(d!==null){d.return=t.return,T=d;break}T=t.return}}var qh=Math.ceil,Vo=q.ReactCurrentDispatcher,ia=q.ReactCurrentOwner,pt=q.ReactCurrentBatchConfig,se=0,Te=null,Pe=null,$e=0,ot=0,xr=fn(0),_e=0,vi=null,Mn=0,Wo=0,oa=0,xi=null,Ye=null,la=0,yr=1/0,Jt=null,Go=!1,sa=null,xn=null,Ko=!1,yn=null,Jo=0,yi=0,aa=null,Yo=-1,Zo=0;function We(){return se&6?Ce():Yo!==-1?Yo:Yo=Ce()}function wn(e){return e.mode&1?se&2&&$e!==0?$e&-$e:Ah.transition!==null?(Zo===0&&(Zo=Uu()),Zo):(e=he,e!==0||(e=window.event,e=e===void 0?16:Xu(e.type)),e):1}function Pt(e,t,n,r){if(50<yi)throw yi=0,aa=null,Error(u(185));Ur(e,n,r),(!(se&2)||e!==Te)&&(e===Te&&(!(se&2)&&(Wo|=n),_e===4&&jn(e,$e)),Ze(e,r),n===1&&se===0&&!(t.mode&1)&&(yr=Ce()+500,Io&&hn()))}function Ze(e,t){var n=e.callbackNode;Ap(e,t);var r=oo(e,e===Te?$e:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?Rh(Xd.bind(null,e)):$c(Xd.bind(null,e)),Nh(function(){!(se&6)&&hn()}),n=null;else{switch(Qu(r)){case 1:n=bl;break;case 4:n=bu;break;case 16:n=to;break;case 536870912:n=Hu;break;default:n=to}n=sf(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(Yo=-1,Zo=0,se&6)throw Error(u(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=oo(e,e===Te?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xo(e,r);else{t=r;var i=se;se|=2;var l=ef();(Te!==e||$e!==t)&&(Jt=null,yr=Ce()+500,Rn(e,t));do try{nm();break}catch(d){qd(e,d)}while(!0);Ps(),Vo.current=l,se=i,Pe!==null?t=0:(Te=null,$e=0,t=_e)}if(t!==0){if(t===2&&(i=Hl(e),i!==0&&(r=i,t=ua(e,i))),t===1)throw n=vi,Rn(e,0),jn(e,r),Ze(e,Ce()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!em(i)&&(t=Xo(e,r),t===2&&(l=Hl(e),l!==0&&(r=l,t=ua(e,l))),t===1))throw n=vi,Rn(e,0),jn(e,r),Ze(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:An(e,Ye,Jt);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=la+500-Ce(),10<t)){if(oo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ms(An.bind(null,e,Ye,Jt),t);break}An(e,Ye,Jt);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-wt(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qh(r/1960))-r,10<r){e.timeoutHandle=ms(An.bind(null,e,Ye,Jt),r);break}An(e,Ye,Jt);break;case 5:An(e,Ye,Jt);break;default:throw Error(u(329))}}}return Ze(e,Ce()),e.callbackNode===n?Zd.bind(null,e):null}function ua(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&ca(t)),e}function ca(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function em(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!jt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~oa,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function Xd(e){if(se&6)throw Error(u(327));wr();var t=oo(e,0);if(!(t&1))return Ze(e,Ce()),null;var n=Xo(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=ua(e,r))}if(n===1)throw n=vi,Rn(e,0),jn(e,t),Ze(e,Ce()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,Ye,Jt),Ze(e,Ce()),null}function da(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(yr=Ce()+500,Io&&hn())}}function Bn(e){yn!==null&&yn.tag===0&&!(se&6)&&wr();var t=se;se|=1;var n=pt.transition,r=he;try{if(pt.transition=null,he=1,e)return e()}finally{he=r,pt.transition=n,se=t,!(se&6)&&hn()}}function fa(){ot=xr.current,xe(xr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_h(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:mr(),xe(Ge),xe(Fe),Bs();break;case 5:Ts(r);break;case 4:mr();break;case 13:xe(je);break;case 19:xe(je);break;case 10:Ls(r.type._context);break;case 22:case 23:fa()}n=n.return}if(Te=e,Pe=e=kn(e.current,null),$e=ot=t,_e=0,vi=null,oa=Wo=Mn=0,Ye=xi=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}_n=null}return e}function qd(e,t){do{var n=Pe;try{if(Ps(),Ro.current=Do,Ao){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ao=!1}if(Tn=0,Ne=ze=ke=null,di=!1,fi=0,ia.current=null,n===null||n.return===null){_e=1,vi=t,Pe=null;break}e:{var l=e,a=n.return,d=n,f=t;if(t=$e,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,C=d,I=C.tag;if(!(C.mode&1)&&(I===0||I===11||I===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var N=Cd(a);if(N!==null){N.flags&=-257,Id(N,a,d,l,t),N.mode&1&&Sd(l,w,t),t=N,f=w;var M=t.updateQueue;if(M===null){var B=new Set;B.add(f),t.updateQueue=B}else M.add(f);break e}else{if(!(t&1)){Sd(l,w,t),pa();break e}f=Error(u(426))}}else if(we&&d.mode&1){var Ie=Cd(a);if(Ie!==null){!(Ie.flags&65536)&&(Ie.flags|=256),Id(Ie,a,d,l,t),Cs(gr(f,d));break e}}l=f=gr(f,d),_e!==4&&(_e=2),xi===null?xi=[l]:xi.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var v=jd(l,f,t);Kc(l,v);break e;case 1:d=f;var p=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(xn===null||!xn.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var P=kd(l,d,t);Kc(l,P);break e}}l=l.return}while(l!==null)}nf(n)}catch(A){t=A,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function ef(){var e=Vo.current;return Vo.current=Do,e===null?Do:e}function pa(){(_e===0||_e===3||_e===2)&&(_e=4),Te===null||!(Mn&268435455)&&!(Wo&268435455)||jn(Te,$e)}function Xo(e,t){var n=se;se|=2;var r=ef();(Te!==e||$e!==t)&&(Jt=null,Rn(e,t));do try{tm();break}catch(i){qd(e,i)}while(!0);if(Ps(),se=n,Vo.current=r,Pe!==null)throw Error(u(261));return Te=null,$e=0,_e}function tm(){for(;Pe!==null;)tf(Pe)}function nm(){for(;Pe!==null&&!Lp();)tf(Pe)}function tf(e){var t=lf(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?nf(e):Pe=t,ia.current=null}function nf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jh(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Pe=null;return}}else if(n=Kh(n,t,ot),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);_e===0&&(_e=5)}function An(e,t,n){var r=he,i=pt.transition;try{pt.transition=null,he=1,rm(e,t,n,r)}finally{pt.transition=i,he=r}return null}function rm(e,t,n,r){do wr();while(yn!==null);if(se&6)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if($p(e,l),e===Te&&(Pe=Te=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,sf(to,function(){return wr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=pt.transition,pt.transition=null;var a=he;he=1;var d=se;se|=4,ia.current=null,Zh(e,n),Wd(n,e),Sh(ps),ao=!!fs,ps=fs=null,e.current=n,Xh(n),Ep(),se=d,he=a,pt.transition=l}else e.current=n;if(Ko&&(Ko=!1,yn=e,Jo=i),l=e.pendingLanes,l===0&&(xn=null),Np(n.stateNode),Ze(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=sa,sa=null,e;return Jo&1&&e.tag!==0&&wr(),l=e.pendingLanes,l&1?e===aa?yi++:(yi=0,aa=e):yi=0,hn(),null}function wr(){if(yn!==null){var e=Qu(Jo),t=pt.transition,n=he;try{if(pt.transition=null,he=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Jo=0,se&6)throw Error(u(331));var i=se;for(se|=4,T=e.current;T!==null;){var l=T,a=l.child;if(T.flags&16){var d=l.deletions;if(d!==null){for(var f=0;f<d.length;f++){var w=d[f];for(T=w;T!==null;){var C=T;switch(C.tag){case 0:case 11:case 15:gi(8,C,l)}var I=C.child;if(I!==null)I.return=C,T=I;else for(;T!==null;){C=T;var S=C.sibling,N=C.return;if(bd(C),C===w){T=null;break}if(S!==null){S.return=N,T=S;break}T=N}}}var M=l.alternate;if(M!==null){var B=M.child;if(B!==null){M.child=null;do{var Ie=B.sibling;B.sibling=null,B=Ie}while(B!==null)}}T=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,T=a;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:gi(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,T=v;break e}T=l.return}}var p=e.current;for(T=p;T!==null;){a=T;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,T=y;else e:for(a=p;T!==null;){if(d=T,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Qo(9,d)}}catch(A){Se(d,d.return,A)}if(d===a){T=null;break e}var P=d.sibling;if(P!==null){P.return=d.return,T=P;break e}T=d.return}}if(se=i,hn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(no,e)}catch{}r=!0}return r}finally{he=n,pt.transition=t}}return!1}function rf(e,t,n){t=gr(n,t),t=jd(e,t,1),e=gn(e,t,1),t=We(),e!==null&&(Ur(e,1,t),Ze(e,t))}function Se(e,t,n){if(e.tag===3)rf(e,e,n);else for(;t!==null;){if(t.tag===3){rf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=gr(n,e),e=kd(t,e,1),t=gn(t,e,1),e=We(),t!==null&&(Ur(t,1,e),Ze(t,e));break}}t=t.return}}function im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&($e&n)===n&&(_e===4||_e===3&&($e&130023424)===$e&&500>Ce()-la?Rn(e,0):oa|=n),Ze(e,t)}function of(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=We();e=Wt(e,t),e!==null&&(Ur(e,t,n),Ze(e,n))}function om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),of(e,n)}function lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),of(e,n)}var lf;lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,Gh(e,t,n);Je=!!(e.flags&131072)}else Je=!1,we&&t.flags&1048576&&Oc(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var i=ar(t,Fe.current);hr(t,n),i=$s(null,t,r,e,i,n);var l=Os();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(l=!0,Co(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_s(t),i.updater=Fo,t.stateNode=i,i._reactInternals=t,Qs(t,r,e,n),t=Ks(null,t,r,!0,l,n)):(t.tag=0,we&&l&&ws(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=am(r),e=St(r,e),i){case 0:t=Gs(null,t,r,e,n);break e;case 1:t=Nd(null,t,r,e,n);break e;case 11:t=Pd(null,t,r,e,n);break e;case 14:t=Ld(null,t,r,St(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Nd(e,t,r,i,n);case 3:e:{if(Td(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Gc(e,t),Mo(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=gr(Error(u(423)),t),t=Md(e,t,r,n,i);break e}else if(r!==i){i=gr(Error(u(424)),t),t=Md(e,t,r,n,i);break e}else for(it=dn(t.stateNode.containerInfo.firstChild),rt=t,we=!0,kt=null,n=Vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){t=Kt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Yc(t),e===null&&Ss(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,hs(r,i)?a=null:l!==null&&hs(r,l)&&(t.flags|=32),_d(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&Ss(t),null;case 13:return Bd(e,t,n);case 4:return Ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Pd(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,ge(_o,r._currentValue),r._currentValue=a,l!==null)if(jt(l.value,a)){if(l.children===i.children&&!Ge.current){t=Kt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){a=l.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=Gt(-1,n&-n),f.tag=2;var w=l.updateQueue;if(w!==null){w=w.shared;var C=w.pending;C===null?f.next=f:(f.next=C.next,C.next=f),w.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),Es(l.return,n,t),d.lanes|=n;break}f=f.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(u(341));a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Es(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=dt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),Ld(e,t,r,i,n);case 15:return Ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ho(e,t),t.tag=1,Ke(r)?(e=!0,Co(t)):e=!1,hr(t,n),yd(t,r,i),Qs(t,r,i,n),Ks(null,t,r,!0,e,n);case 19:return Ad(e,t,n);case 22:return zd(e,t,n)}throw Error(u(156,t.tag))};function sf(e,t){return Du(e,t)}function sm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new sm(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function am(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===st)return 11;if(e===at)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")ha(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case H:return $n(n.children,i,l,t);case Ee:a=8,i|=8;break;case et:return e=ht(12,n,t,i|2),e.elementType=et,e.lanes=l,e;case Qe:return e=ht(13,n,t,i),e.elementType=Qe,e.lanes=l,e;case tt:return e=ht(19,n,t,i),e.elementType=tt,e.lanes=l,e;case me:return el(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:a=10;break e;case Ft:a=9;break e;case st:a=11;break e;case at:a=14;break e;case De:a=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ht(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function $n(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function el(e,t,n,r){return e=ht(22,e,r,t),e.elementType=me,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function ga(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function um(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,i,l,a,d,f){return e=new um(e,t,n,d,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ht(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_s(l),e}function cm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function af(e){if(!e)return pn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Rc(e,n,t)}return t}function uf(e,t,n,r,i,l,a,d,f){return e=va(n,r,!0,e,i,l,a,d,f),e.context=af(null),n=e.current,r=We(),i=wn(n),l=Gt(r,i),l.callback=t??null,gn(n,l,i),e.current.lanes=i,Ur(e,i,r),Ze(e,r),e}function tl(e,t,n,r){var i=t.current,l=We(),a=wn(i);return n=af(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,a),e!==null&&(Pt(e,i,a,l),To(e,i,a)),a}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xa(e,t){cf(e,t),(e=e.alternate)&&cf(e,t)}var df=typeof reportError=="function"?reportError:function(e){console.error(e)};function ya(e){this._internalRoot=e}rl.prototype.render=ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));tl(e,t,null,null)},rl.prototype.unmount=ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){tl(null,e,null,null)}),t[Ht]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Yu(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ff(){}function dm(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var w=nl(a);l.call(w)}}var a=uf(t,r,e,0,null,!1,!1,"",ff);return e._reactRootContainer=a,e[Ht]=a.current,ri(e.nodeType===8?e.parentNode:e),Bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var w=nl(f);d.call(w)}}var f=va(e,0,!1,null,null,!1,!1,"",ff);return e._reactRootContainer=f,e[Ht]=f.current,ri(e.nodeType===8?e.parentNode:e),Bn(function(){tl(t,f,n,r)}),f}function ol(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var d=i;i=function(){var f=nl(a);d.call(f)}}tl(t,a,e,i)}else a=dm(n,t,e,i,r);return nl(a)}Vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(Ql(t,n|1),Ze(t,Ce()),!(se&6)&&(yr=Ce()+500,hn()))}break;case 13:Bn(function(){var r=Wt(e,1);if(r!==null){var i=We();Pt(r,e,1,i)}}),xa(e,1)}},Vl=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=We();Pt(t,e,134217728,n)}xa(e,134217728)}},Wu=function(e){if(e.tag===13){var t=wn(e),n=Wt(e,t);if(n!==null){var r=We();Pt(n,e,t,r)}xa(e,t)}},Gu=function(){return he},Ku=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},$l=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(u(90));yt(r),zl(r,i)}}}break;case"textarea":Su(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}},Tu=da,Mu=Bn;var fm={usingClientEntryPoint:!1,Events:[li,lr,ko,_u,Nu,da]},wi={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pm={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{no=ll.inject(pm),Et=ll}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm,Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(u(200));return cm(e,t,null,n)},Xe.createRoot=function(e,t){if(!wa(e))throw Error(u(299));var n=!1,r="",i=df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,ri(e.nodeType===8?e.parentNode:e),new ya(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return Bn(e)},Xe.hydrate=function(e,t,n){if(!il(t))throw Error(u(200));return ol(null,e,t,!0,n)},Xe.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=df;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=uf(t,null,e,1,n??null,i,!1,l,a),e[Ht]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new rl(t)},Xe.render=function(e,t,n){if(!il(t))throw Error(u(200));return ol(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!il(e))throw Error(u(40));return e._reactRootContainer?(Bn(function(){ol(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1},Xe.unstable_batchedUpdates=da,Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ol(e,t,n,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var wf;function km(){if(wf)return Sa.exports;wf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Sa.exports=jm(),Sa.exports}var jf;function Sm(){if(jf)return sl;jf=1;var s=km();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var Cm=Sm();const Jf="/MyPortfolio2/CV-M.Bugajska1.pdf",tu="/MyPortfolio2/dots.png";var qe=function(){return qe=Object.assign||function(c){for(var u,h=1,x=arguments.length;h<x;h++){u=arguments[h];for(var j in u)Object.prototype.hasOwnProperty.call(u,j)&&(c[j]=u[j])}return c},qe.apply(this,arguments)};function xl(s,c,u){if(u||arguments.length===2)for(var h=0,x=c.length,j;h<x;h++)(j||!(h in c))&&(j||(j=Array.prototype.slice.call(c,0,h)),j[h]=c[h]);return s.concat(j||Array.prototype.slice.call(c))}var ye="-ms-",Gi="-moz-",pe="-webkit-",Yf="comm",kl="rule",nu="decl",Im="@import",Zf="@keyframes",Pm="@layer",Xf=Math.abs,ru=String.fromCharCode,Ga=Object.assign;function Lm(s,c){return Be(s,0)^45?(((c<<2^Be(s,0))<<2^Be(s,1))<<2^Be(s,2))<<2^Be(s,3):0}function qf(s){return s.trim()}function nn(s,c){return(s=c.exec(s))?s[0]:s}function X(s,c,u){return s.replace(c,u)}function pl(s,c,u){return s.indexOf(c,u)}function Be(s,c){return s.charCodeAt(c)|0}function Pr(s,c,u){return s.slice(c,u)}function Dt(s){return s.length}function ep(s){return s.length}function Wi(s,c){return c.push(s),s}function Em(s,c){return s.map(c).join("")}function kf(s,c){return s.filter(function(u){return!nn(u,c)})}var Sl=1,Lr=1,tp=0,vt=0,Le=0,Tr="";function Cl(s,c,u,h,x,j,L,R){return{value:s,root:c,parent:u,type:h,props:x,children:j,line:Sl,column:Lr,length:L,return:"",siblings:R}}function Cn(s,c){return Ga(Cl("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function jr(s){for(;s.root;)s=Cn(s.root,{children:[s]});Wi(s,s.siblings)}function zm(){return Le}function _m(){return Le=vt>0?Be(Tr,--vt):0,Lr--,Le===10&&(Lr=1,Sl--),Le}function Lt(){return Le=vt<tp?Be(Tr,vt++):0,Lr++,Le===10&&(Lr=1,Sl++),Le}function Kn(){return Be(Tr,vt)}function hl(){return vt}function Il(s,c){return Pr(Tr,s,c)}function Ka(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nm(s){return Sl=Lr=1,tp=Dt(Tr=s),vt=0,[]}function Tm(s){return Tr="",s}function Pa(s){return qf(Il(vt-1,Ja(s===91?s+2:s===40?s+1:s)))}function Mm(s){for(;(Le=Kn())&&Le<33;)Lt();return Ka(s)>2||Ka(Le)>3?"":" "}function Bm(s,c){for(;--c&&Lt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Il(s,hl()+(c<6&&Kn()==32&&Lt()==32))}function Ja(s){for(;Lt();)switch(Le){case s:return vt;case 34:case 39:s!==34&&s!==39&&Ja(Le);break;case 40:s===41&&Ja(s);break;case 92:Lt();break}return vt}function Rm(s,c){for(;Lt()&&s+Le!==57;)if(s+Le===84&&Kn()===47)break;return"/*"+Il(c,vt-1)+"*"+ru(s===47?s:Lt())}function Am(s){for(;!Ka(Kn());)Lt();return Il(s,vt)}function $m(s){return Tm(ml("",null,null,null,[""],s=Nm(s),0,[0],s))}function ml(s,c,u,h,x,j,L,R,z){for(var W=0,Q=0,O=L,D=0,G=0,re=0,V=1,Y=1,fe=1,le=0,ie="",q=x,ce=j,K=h,H=ie;Y;)switch(re=le,le=Lt()){case 40:if(re!=108&&Be(H,O-1)==58){pl(H+=X(Pa(le),"&","&\f"),"&\f",Xf(W?R[W-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:H+=Pa(le);break;case 9:case 10:case 13:case 32:H+=Mm(re);break;case 92:H+=Bm(hl()-1,7);continue;case 47:switch(Kn()){case 42:case 47:Wi(Om(Rm(Lt(),hl()),c,u,z),z);break;default:H+="/"}break;case 123*V:R[W++]=Dt(H)*fe;case 125*V:case 59:case 0:switch(le){case 0:case 125:Y=0;case 59+Q:fe==-1&&(H=X(H,/\f/g,"")),G>0&&Dt(H)-O&&Wi(G>32?Cf(H+";",h,u,O-1,z):Cf(X(H," ","")+";",h,u,O-2,z),z);break;case 59:H+=";";default:if(Wi(K=Sf(H,c,u,W,Q,x,R,ie,q=[],ce=[],O,j),j),le===123)if(Q===0)ml(H,c,K,K,q,j,O,R,ce);else switch(D===99&&Be(H,3)===110?100:D){case 100:case 108:case 109:case 115:ml(s,K,K,h&&Wi(Sf(s,K,K,0,0,x,R,ie,x,q=[],O,ce),ce),x,ce,O,R,h?q:ce);break;default:ml(H,K,K,K,[""],ce,0,R,ce)}}W=Q=G=0,V=fe=1,ie=H="",O=L;break;case 58:O=1+Dt(H),G=re;default:if(V<1){if(le==123)--V;else if(le==125&&V++==0&&_m()==125)continue}switch(H+=ru(le),le*V){case 38:fe=Q>0?1:(H+="\f",-1);break;case 44:R[W++]=(Dt(H)-1)*fe,fe=1;break;case 64:Kn()===45&&(H+=Pa(Lt())),D=Kn(),Q=O=Dt(ie=H+=Am(hl())),le++;break;case 45:re===45&&Dt(H)==2&&(V=0)}}return j}function Sf(s,c,u,h,x,j,L,R,z,W,Q,O){for(var D=x-1,G=x===0?j:[""],re=ep(G),V=0,Y=0,fe=0;V<h;++V)for(var le=0,ie=Pr(s,D+1,D=Xf(Y=L[V])),q=s;le<re;++le)(q=qf(Y>0?G[le]+" "+ie:X(ie,/&\f/g,G[le])))&&(z[fe++]=q);return Cl(s,c,u,x===0?kl:R,z,W,Q,O)}function Om(s,c,u,h){return Cl(s,c,u,Yf,ru(zm()),Pr(s,2,-2),0,h)}function Cf(s,c,u,h,x){return Cl(s,c,u,nu,Pr(s,0,h),Pr(s,h+1,-1),h,x)}function np(s,c,u){switch(Lm(s,c)){case 5103:return pe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+s+s;case 4789:return Gi+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+s+Gi+s+ye+s+s;case 5936:switch(Be(s,c+11)){case 114:return pe+s+ye+X(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return pe+s+ye+X(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return pe+s+ye+X(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return pe+s+ye+s+s;case 6165:return pe+s+ye+"flex-"+s+s;case 5187:return pe+s+X(s,/(\w+).+(:[^]+)/,pe+"box-$1$2"+ye+"flex-$1$2")+s;case 5443:return pe+s+ye+"flex-item-"+X(s,/flex-|-self/g,"")+(nn(s,/flex-|baseline/)?"":ye+"grid-row-"+X(s,/flex-|-self/g,""))+s;case 4675:return pe+s+ye+"flex-line-pack"+X(s,/align-content|flex-|-self/g,"")+s;case 5548:return pe+s+ye+X(s,"shrink","negative")+s;case 5292:return pe+s+ye+X(s,"basis","preferred-size")+s;case 6060:return pe+"box-"+X(s,"-grow","")+pe+s+ye+X(s,"grow","positive")+s;case 4554:return pe+X(s,/([^-])(transform)/g,"$1"+pe+"$2")+s;case 6187:return X(X(X(s,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),s,"")+s;case 5495:case 3959:return X(s,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return X(X(s,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+s+s;case 4200:if(!nn(s,/flex-|baseline/))return ye+"grid-column-align"+Pr(s,c)+s;break;case 2592:case 3360:return ye+X(s,"template-","")+s;case 4384:case 3616:return u&&u.some(function(h,x){return c=x,nn(h.props,/grid-\w+-end/)})?~pl(s+(u=u[c].value),"span",0)?s:ye+X(s,"-start","")+s+ye+"grid-row-span:"+(~pl(u,"span",0)?nn(u,/\d+/):+nn(u,/\d+/)-+nn(s,/\d+/))+";":ye+X(s,"-start","")+s;case 4896:case 4128:return u&&u.some(function(h){return nn(h.props,/grid-\w+-start/)})?s:ye+X(X(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return X(s,/(.+)-inline(.+)/,pe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(s)-1-c>6)switch(Be(s,c+1)){case 109:if(Be(s,c+4)!==45)break;case 102:return X(s,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Gi+(Be(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~pl(s,"stretch",0)?np(X(s,"stretch","fill-available"),c,u)+s:s}break;case 5152:case 5920:return X(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(h,x,j,L,R,z,W){return ye+x+":"+j+W+(L?ye+x+"-span:"+(R?z:+z-+j)+W:"")+s});case 4949:if(Be(s,c+6)===121)return X(s,":",":"+pe)+s;break;case 6444:switch(Be(s,Be(s,14)===45?18:11)){case 120:return X(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Be(s,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+ye+"$2box$3")+s;case 100:return X(s,":",":"+ye)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(s,"scroll-","scroll-snap-")+s}return s}function yl(s,c){for(var u="",h=0;h<s.length;h++)u+=c(s[h],h,s,c)||"";return u}function Dm(s,c,u,h){switch(s.type){case Pm:if(s.children.length)break;case Im:case nu:return s.return=s.return||s.value;case Yf:return"";case Zf:return s.return=s.value+"{"+yl(s.children,h)+"}";case kl:if(!Dt(s.value=s.props.join(",")))return""}return Dt(u=yl(s.children,h))?s.return=s.value+"{"+u+"}":""}function Fm(s){var c=ep(s);return function(u,h,x,j){for(var L="",R=0;R<c;R++)L+=s[R](u,h,x,j)||"";return L}}function bm(s){return function(c){c.root||(c=c.return)&&s(c)}}function Hm(s,c,u,h){if(s.length>-1&&!s.return)switch(s.type){case nu:s.return=np(s.value,s.length,u);return;case Zf:return yl([Cn(s,{value:X(s.value,"@","@"+pe)})],h);case kl:if(s.length)return Em(u=s.props,function(x){switch(nn(x,h=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(Cn(s,{props:[X(x,/:(read-\w+)/,":"+Gi+"$1")]})),jr(Cn(s,{props:[x]})),Ga(s,{props:kf(u,h)});break;case"::placeholder":jr(Cn(s,{props:[X(x,/:(plac\w+)/,":"+pe+"input-$1")]})),jr(Cn(s,{props:[X(x,/:(plac\w+)/,":"+Gi+"$1")]})),jr(Cn(s,{props:[X(x,/:(plac\w+)/,ye+"input-$1")]})),jr(Cn(s,{props:[x]})),Ga(s,{props:kf(u,h)});break}return""})}}var Um={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lt={},Er=typeof process<"u"&&lt!==void 0&&(lt.REACT_APP_SC_ATTR||lt.SC_ATTR)||"data-styled",rp="active",ip="data-styled-version",Pl="6.1.14",iu=`/*!sc*/
`,wl=typeof window<"u"&&"HTMLElement"in window,Qm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==""?lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.SC_DISABLE_SPEEDY!==void 0&&lt.SC_DISABLE_SPEEDY!==""&&lt.SC_DISABLE_SPEEDY!=="false"&&lt.SC_DISABLE_SPEEDY),Ll=Object.freeze([]),zr=Object.freeze({});function Vm(s,c,u){return u===void 0&&(u=zr),s.theme!==u.theme&&s.theme||c||u.theme}var op=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gm=/(^-|-$)/g;function If(s){return s.replace(Wm,"-").replace(Gm,"")}var Km=/(a)(d)/gi,al=52,Pf=function(s){return String.fromCharCode(s+(s>25?39:97))};function Ya(s){var c,u="";for(c=Math.abs(s);c>al;c=c/al|0)u=Pf(c%al)+u;return(Pf(c%al)+u).replace(Km,"$1-$2")}var La,lp=5381,Ir=function(s,c){for(var u=c.length;u;)s=33*s^c.charCodeAt(--u);return s},sp=function(s){return Ir(lp,s)};function Jm(s){return Ya(sp(s)>>>0)}function Ym(s){return s.displayName||s.name||"Component"}function Ea(s){return typeof s=="string"&&!0}var ap=typeof Symbol=="function"&&Symbol.for,up=ap?Symbol.for("react.memo"):60115,Zm=ap?Symbol.for("react.forward_ref"):60112,Xm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eg=((La={})[Zm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},La[up]=cp,La);function Lf(s){return("type"in(c=s)&&c.type.$$typeof)===up?cp:"$$typeof"in s?eg[s.$$typeof]:Xm;var c}var tg=Object.defineProperty,ng=Object.getOwnPropertyNames,Ef=Object.getOwnPropertySymbols,rg=Object.getOwnPropertyDescriptor,ig=Object.getPrototypeOf,zf=Object.prototype;function dp(s,c,u){if(typeof c!="string"){if(zf){var h=ig(c);h&&h!==zf&&dp(s,h,u)}var x=ng(c);Ef&&(x=x.concat(Ef(c)));for(var j=Lf(s),L=Lf(c),R=0;R<x.length;++R){var z=x[R];if(!(z in qm||u&&u[z]||L&&z in L||j&&z in j)){var W=rg(c,z);try{tg(s,z,W)}catch{}}}}return s}function _r(s){return typeof s=="function"}function ou(s){return typeof s=="object"&&"styledComponentId"in s}function Gn(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function _f(s,c){if(s.length===0)return"";for(var u=s[0],h=1;h<s.length;h++)u+=s[h];return u}function Ji(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Za(s,c,u){if(u===void 0&&(u=!1),!u&&!Ji(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var h=0;h<c.length;h++)s[h]=Za(s[h],c[h]);else if(Ji(c))for(var h in c)s[h]=Za(s[h],c[h]);return s}function lu(s,c){Object.defineProperty(s,"toString",{value:c})}function Yi(s){for(var c=[],u=1;u<arguments.length;u++)c[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var og=function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return s.prototype.indexOfGroup=function(c){for(var u=0,h=0;h<c;h++)u+=this.groupSizes[h];return u},s.prototype.insertRules=function(c,u){if(c>=this.groupSizes.length){for(var h=this.groupSizes,x=h.length,j=x;c>=j;)if((j<<=1)<0)throw Yi(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(h),this.length=j;for(var L=x;L<j;L++)this.groupSizes[L]=0}for(var R=this.indexOfGroup(c+1),z=(L=0,u.length);L<z;L++)this.tag.insertRule(R,u[L])&&(this.groupSizes[c]++,R++)},s.prototype.clearGroup=function(c){if(c<this.length){var u=this.groupSizes[c],h=this.indexOfGroup(c),x=h+u;this.groupSizes[c]=0;for(var j=h;j<x;j++)this.tag.deleteRule(h)}},s.prototype.getGroup=function(c){var u="";if(c>=this.length||this.groupSizes[c]===0)return u;for(var h=this.groupSizes[c],x=this.indexOfGroup(c),j=x+h,L=x;L<j;L++)u+="".concat(this.tag.getRule(L)).concat(iu);return u},s}(),gl=new Map,jl=new Map,vl=1,ul=function(s){if(gl.has(s))return gl.get(s);for(;jl.has(vl);)vl++;var c=vl++;return gl.set(s,c),jl.set(c,s),c},lg=function(s,c){vl=c+1,gl.set(s,c),jl.set(c,s)},sg="style[".concat(Er,"][").concat(ip,'="').concat(Pl,'"]'),ag=new RegExp("^".concat(Er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ug=function(s,c,u){for(var h,x=u.split(","),j=0,L=x.length;j<L;j++)(h=x[j])&&s.registerName(c,h)},cg=function(s,c){for(var u,h=((u=c.textContent)!==null&&u!==void 0?u:"").split(iu),x=[],j=0,L=h.length;j<L;j++){var R=h[j].trim();if(R){var z=R.match(ag);if(z){var W=0|parseInt(z[1],10),Q=z[2];W!==0&&(lg(Q,W),ug(s,Q,z[3]),s.getTag().insertRules(W,x)),x.length=0}else x.push(R)}}},Nf=function(s){for(var c=document.querySelectorAll(sg),u=0,h=c.length;u<h;u++){var x=c[u];x&&x.getAttribute(Er)!==rp&&(cg(s,x),x.parentNode&&x.parentNode.removeChild(x))}};function dg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fp=function(s){var c=document.head,u=s||c,h=document.createElement("style"),x=function(R){var z=Array.from(R.querySelectorAll("style[".concat(Er,"]")));return z[z.length-1]}(u),j=x!==void 0?x.nextSibling:null;h.setAttribute(Er,rp),h.setAttribute(ip,Pl);var L=dg();return L&&h.setAttribute("nonce",L),u.insertBefore(h,j),h},fg=function(){function s(c){this.element=fp(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var h=document.styleSheets,x=0,j=h.length;x<j;x++){var L=h[x];if(L.ownerNode===u)return L}throw Yi(17)}(this.element),this.length=0}return s.prototype.insertRule=function(c,u){try{return this.sheet.insertRule(u,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var u=this.sheet.cssRules[c];return u&&u.cssText?u.cssText:""},s}(),pg=function(){function s(c){this.element=fp(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,u){if(c<=this.length&&c>=0){var h=document.createTextNode(u);return this.element.insertBefore(h,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s}(),hg=function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,u){return c<=this.length&&(this.rules.splice(c,0,u),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s}(),Tf=wl,mg={isServer:!wl,useCSSOMInjection:!Qm},pp=function(){function s(c,u,h){c===void 0&&(c=zr),u===void 0&&(u={});var x=this;this.options=qe(qe({},mg),c),this.gs=u,this.names=new Map(h),this.server=!!c.isServer,!this.server&&wl&&Tf&&(Tf=!1,Nf(this)),lu(this,function(){return function(j){for(var L=j.getTag(),R=L.length,z="",W=function(O){var D=function(fe){return jl.get(fe)}(O);if(D===void 0)return"continue";var G=j.names.get(D),re=L.getGroup(O);if(G===void 0||!G.size||re.length===0)return"continue";var V="".concat(Er,".g").concat(O,'[id="').concat(D,'"]'),Y="";G!==void 0&&G.forEach(function(fe){fe.length>0&&(Y+="".concat(fe,","))}),z+="".concat(re).concat(V,'{content:"').concat(Y,'"}').concat(iu)},Q=0;Q<R;Q++)W(Q);return z}(x)})}return s.registerId=function(c){return ul(c)},s.prototype.rehydrate=function(){!this.server&&wl&&Nf(this)},s.prototype.reconstructWithOptions=function(c,u){return u===void 0&&(u=!0),new s(qe(qe({},this.options),c),this.gs,u&&this.names||void 0)},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=function(u){var h=u.useCSSOMInjection,x=u.target;return u.isServer?new hg(x):h?new fg(x):new pg(x)}(this.options),new og(c)));var c},s.prototype.hasNameForId=function(c,u){return this.names.has(c)&&this.names.get(c).has(u)},s.prototype.registerName=function(c,u){if(ul(c),this.names.has(c))this.names.get(c).add(u);else{var h=new Set;h.add(u),this.names.set(c,h)}},s.prototype.insertRules=function(c,u,h){this.registerName(c,u),this.getTag().insertRules(ul(c),h)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(ul(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s}(),gg=/&/g,vg=/^\s*\/\/.*$/gm;function hp(s,c){return s.map(function(u){return u.type==="rule"&&(u.value="".concat(c," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(c," ")),u.props=u.props.map(function(h){return"".concat(c," ").concat(h)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=hp(u.children,c)),u})}function xg(s){var c,u,h,x=zr,j=x.options,L=j===void 0?zr:j,R=x.plugins,z=R===void 0?Ll:R,W=function(D,G,re){return re.startsWith(u)&&re.endsWith(u)&&re.replaceAll(u,"").length>0?".".concat(c):D},Q=z.slice();Q.push(function(D){D.type===kl&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(gg,u).replace(h,W))}),L.prefix&&Q.push(Hm),Q.push(Dm);var O=function(D,G,re,V){G===void 0&&(G=""),re===void 0&&(re=""),V===void 0&&(V="&"),c=V,u=G,h=new RegExp("\\".concat(u,"\\b"),"g");var Y=D.replace(vg,""),fe=$m(re||G?"".concat(re," ").concat(G," { ").concat(Y," }"):Y);L.namespace&&(fe=hp(fe,L.namespace));var le=[];return yl(fe,Fm(Q.concat(bm(function(ie){return le.push(ie)})))),le};return O.hash=z.length?z.reduce(function(D,G){return G.name||Yi(15),Ir(D,G.name)},lp).toString():"",O}var yg=new pp,Xa=xg(),mp=Ki.createContext({shouldForwardProp:void 0,styleSheet:yg,stylis:Xa});mp.Consumer;Ki.createContext(void 0);function Mf(){return Oe.useContext(mp)}var wg=function(){function s(c,u){var h=this;this.inject=function(x,j){j===void 0&&(j=Xa);var L=h.name+j.hash;x.hasNameForId(h.id,L)||x.insertRules(h.id,L,j(h.rules,L,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=u,lu(this,function(){throw Yi(12,String(h.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Xa),this.name+c.hash},s}(),jg=function(s){return s>="A"&&s<="Z"};function Bf(s){for(var c="",u=0;u<s.length;u++){var h=s[u];if(u===1&&h==="-"&&s[0]==="-")return s;jg(h)?c+="-"+h.toLowerCase():c+=h}return c.startsWith("ms-")?"-"+c:c}var gp=function(s){return s==null||s===!1||s===""},vp=function(s){var c,u,h=[];for(var x in s){var j=s[x];s.hasOwnProperty(x)&&!gp(j)&&(Array.isArray(j)&&j.isCss||_r(j)?h.push("".concat(Bf(x),":"),j,";"):Ji(j)?h.push.apply(h,xl(xl(["".concat(x," {")],vp(j),!1),["}"],!1)):h.push("".concat(Bf(x),": ").concat((c=x,(u=j)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||c in Um||c.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return h};function Jn(s,c,u,h){if(gp(s))return[];if(ou(s))return[".".concat(s.styledComponentId)];if(_r(s)){if(!_r(j=s)||j.prototype&&j.prototype.isReactComponent||!c)return[s];var x=s(c);return Jn(x,c,u,h)}var j;return s instanceof wg?u?(s.inject(u,h),[s.getName(h)]):[s]:Ji(s)?vp(s):Array.isArray(s)?Array.prototype.concat.apply(Ll,s.map(function(L){return Jn(L,c,u,h)})):[s.toString()]}function kg(s){for(var c=0;c<s.length;c+=1){var u=s[c];if(_r(u)&&!ou(u))return!1}return!0}var Sg=sp(Pl),Cg=function(){function s(c,u,h){this.rules=c,this.staticRulesId="",this.isStatic=(h===void 0||h.isStatic)&&kg(c),this.componentId=u,this.baseHash=Ir(Sg,u),this.baseStyle=h,pp.registerId(u)}return s.prototype.generateAndInjectStyles=function(c,u,h){var x=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,u,h):"";if(this.isStatic&&!h.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))x=Gn(x,this.staticRulesId);else{var j=_f(Jn(this.rules,c,u,h)),L=Ya(Ir(this.baseHash,j)>>>0);if(!u.hasNameForId(this.componentId,L)){var R=h(j,".".concat(L),void 0,this.componentId);u.insertRules(this.componentId,L,R)}x=Gn(x,L),this.staticRulesId=L}else{for(var z=Ir(this.baseHash,h.hash),W="",Q=0;Q<this.rules.length;Q++){var O=this.rules[Q];if(typeof O=="string")W+=O;else if(O){var D=_f(Jn(O,c,u,h));z=Ir(z,D+Q),W+=D}}if(W){var G=Ya(z>>>0);u.hasNameForId(this.componentId,G)||u.insertRules(this.componentId,G,h(W,".".concat(G),void 0,this.componentId)),x=Gn(x,G)}}return x},s}(),xp=Ki.createContext(void 0);xp.Consumer;var za={};function Ig(s,c,u){var h=ou(s),x=s,j=!Ea(s),L=c.attrs,R=L===void 0?Ll:L,z=c.componentId,W=z===void 0?function(q,ce){var K=typeof q!="string"?"sc":If(q);za[K]=(za[K]||0)+1;var H="".concat(K,"-").concat(Jm(Pl+K+za[K]));return ce?"".concat(ce,"-").concat(H):H}(c.displayName,c.parentComponentId):z,Q=c.displayName,O=Q===void 0?function(q){return Ea(q)?"styled.".concat(q):"Styled(".concat(Ym(q),")")}(s):Q,D=c.displayName&&c.componentId?"".concat(If(c.displayName),"-").concat(c.componentId):c.componentId||W,G=h&&x.attrs?x.attrs.concat(R).filter(Boolean):R,re=c.shouldForwardProp;if(h&&x.shouldForwardProp){var V=x.shouldForwardProp;if(c.shouldForwardProp){var Y=c.shouldForwardProp;re=function(q,ce){return V(q,ce)&&Y(q,ce)}}else re=V}var fe=new Cg(u,D,h?x.componentStyle:void 0);function le(q,ce){return function(K,H,Ee){var et=K.attrs,xt=K.componentStyle,Ft=K.defaultProps,st=K.foldedComponentIds,Qe=K.styledComponentId,tt=K.target,at=Ki.useContext(xp),De=Mf(),me=K.shouldForwardProp||De.shouldForwardProp,E=Vm(H,at,Ft)||zr,$=function(ne,ee,de){for(var oe,ae=qe(qe({},ee),{className:void 0,theme:de}),Re=0;Re<ne.length;Re+=1){var bt=_r(oe=ne[Re])?oe(ae):oe;for(var yt in bt)ae[yt]=yt==="className"?Gn(ae[yt],bt[yt]):yt==="style"?qe(qe({},ae[yt]),bt[yt]):bt[yt]}return ee.className&&(ae.className=Gn(ae.className,ee.className)),ae}(et,H,E),_=$.as||tt,g={};for(var k in $)$[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&$.theme===E||(k==="forwardedAs"?g.as=$.forwardedAs:me&&!me(k,_)||(g[k]=$[k]));var J=function(ne,ee){var de=Mf(),oe=ne.generateAndInjectStyles(ee,de.styleSheet,de.stylis);return oe}(xt,$),Z=Gn(st,Qe);return J&&(Z+=" "+J),$.className&&(Z+=" "+$.className),g[Ea(_)&&!op.has(_)?"class":"className"]=Z,Ee&&(g.ref=Ee),Oe.createElement(_,g)}(ie,q,ce)}le.displayName=O;var ie=Ki.forwardRef(le);return ie.attrs=G,ie.componentStyle=fe,ie.displayName=O,ie.shouldForwardProp=re,ie.foldedComponentIds=h?Gn(x.foldedComponentIds,x.styledComponentId):"",ie.styledComponentId=D,ie.target=h?x.target:s,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=h?function(ce){for(var K=[],H=1;H<arguments.length;H++)K[H-1]=arguments[H];for(var Ee=0,et=K;Ee<et.length;Ee++)Za(ce,et[Ee],!0);return ce}({},x.defaultProps,q):q}}),lu(ie,function(){return".".concat(ie.styledComponentId)}),j&&dp(ie,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function Rf(s,c){for(var u=[s[0]],h=0,x=c.length;h<x;h+=1)u.push(c[h],s[h+1]);return u}var Af=function(s){return Object.assign(s,{isCss:!0})};function Pg(s){for(var c=[],u=1;u<arguments.length;u++)c[u-1]=arguments[u];if(_r(s)||Ji(s))return Af(Jn(Rf(Ll,xl([s],c,!0))));var h=s;return c.length===0&&h.length===1&&typeof h[0]=="string"?Jn(h):Af(Jn(Rf(h,c)))}function qa(s,c,u){if(u===void 0&&(u=zr),!c)throw Yi(1,c);var h=function(x){for(var j=[],L=1;L<arguments.length;L++)j[L-1]=arguments[L];return s(c,u,Pg.apply(void 0,xl([x],j,!1)))};return h.attrs=function(x){return qa(s,c,qe(qe({},u),{attrs:Array.prototype.concat(u.attrs,x).filter(Boolean)}))},h.withConfig=function(x){return qa(s,c,qe(qe({},u),x))},h}var yp=function(s){return qa(Ig,s)},m=yp;op.forEach(function(s){m[s]=yp(s)});const Lg=m.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding: 4vh 10vw;
`,$f=m.button`
  background-color: transparent;
  width: 8rem;
  height: 4rem;
  border-radius: 5rem;
  cursor: pointer;
  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Of=m.a`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: var(--dark);
    cursor: pointer;
  }
`,Eg=m.img`
  position: relative;
  height: 40rem;
  left: -12vw;
  top: 20%;
  animation: rotate 19s infinite linear;
`,zg=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  gap: 2rem;
  margin: 0 14.8vw;
  backdrop-filter: blur(2px);
  position: relative;
  top: -20%;
`,_g=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
`,Ng=m.h1`
  font-size: 6rem;
`,Df=m.p``;function Tg(){return o.jsxs(o.Fragment,{children:[o.jsxs(Lg,{className:"Button-container",children:[o.jsx($f,{id:"Button-header",children:o.jsx(Of,{id:"Links-header",href:"https://github.com/Malgorzata-b",target:"_blank",children:"GitHub"})}),o.jsx($f,{id:"Button-header",children:o.jsx(Of,{id:"Links-header",href:Jf,target:"_blank",children:"CV"})})]}),o.jsx(Eg,{id:"img-dots",src:tu,alt:"Dots"}),o.jsxs(zg,{id:"Welcome-container",children:[o.jsx(Ng,{id:"Title",children:"Welcome"}),o.jsxs(_g,{children:[o.jsx(Df,{id:"Name",children:"Malgorzata Bugajska"}),o.jsx(Df,{id:"Name",children:"Frontend Developer"})]})]})]})}const su="/MyPortfolio2/Image1.jpg",au="/MyPortfolio2/Image2.jpg",uu="/MyPortfolio2/Image3.jpg",cu="/MyPortfolio2/Image4.jpg",mt="/MyPortfolio2/iconHTML.png",gt="/MyPortfolio2/iconCSS.png",Mr="/MyPortfolio2/iconFigma.png",rn="/MyPortfolio2/iconJS.png",Br="/MyPortfolio2/iconReact.png",du="/MyPortfolio2/iconPython.png",Rr="/MyPortfolio2/iconMySQL.png",Mg=m.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`,Bg=m.div``,Rg=m.img`
  width: 18rem;
  height: 28rem;
  border: 3px solid var(--black);
  border-radius: 5%;
  box-shadow: 0px 4px 4px 2px var(--black);
`,Ag=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  padding: 1.5vh 1.5vw;
  max-width: 50rem;
  // border: 2px solid red;
`,$g=m.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 30rem;
  // height: 10.5rem;
  // border: 4px solid yellow;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  border-radius: 20px;
  overflow: hidden;
`,_a=m.img`
  width: 33rem;
  height: 25rem;
  border-radius: 5%;
  // border: solid 5px green;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
`,Og=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  // background-color: white;
  max-width: 8rem;
  // border: 7px solid rgb(18, 26, 20);
`,Na=m.button`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 1px 5px var(--CaruselColorShadowDark),
    inset 1px 1px 2px var(--CaruselColorShadowLightSecond);
  background-color: var(--CaruselColorBackground);
  background-image: linear-gradient(
    var(--CaruselColorBackgroundImageLight),
    var(--CaruselColorBackgroundImageDark)
  );
`,Dg=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 3.5rem;
`,Fg=m.p`
  font-weight: 700;
  font-size: 2.5rem;
`,On=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,kr=m.img`
  width: 4rem;
  height: 4rem;
`,bg=m.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`,Dn=m.p`
  font-weight: 300;
  font-size: 1.7rem;
`,Hg=m.div`
  display: flex;
  max-width: 90rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  padding: 5vh 5vw;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 6px var(--black);
`,Ug=m.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  max-width: 95%;
  text-indent: 4rem;
  padding-left: 2vw;
  font-size: 2rem;
`;function Qg(){return o.jsxs(o.Fragment,{children:[o.jsxs(Mg,{id:"Images-Container",children:[o.jsx(Bg,{id:"Image",children:o.jsx(Rg,{id:"Profil",src:cu,alt:"Aurora"})}),o.jsxs(Ag,{id:"carousel-container",children:[o.jsxs($g,{id:"Image-Gallery",children:[o.jsx(_a,{className:"Photo",id:"photo-1",src:uu,alt:"Image3"}),o.jsx(_a,{className:"Photo",id:"photo-2",src:au,alt:"Image2"}),o.jsx(_a,{className:"Photo",id:"photo-3",src:su,alt:"Image1"})]}),o.jsxs(Og,{id:"button-container",children:[o.jsx(Na,{id:"buttonImage",onClick:()=>document.getElementById("photo-1").scrollIntoView({behavior:"smooth",block:"nearest"})}),o.jsx(Na,{id:"buttonImage",onClick:()=>document.getElementById("photo-2").scrollIntoView({behavior:"smooth",block:"nearest"})}),o.jsx(Na,{id:"buttonImage",onClick:()=>document.getElementById("photo-3").scrollIntoView({behavior:"smooth",block:"nearest"})})]})]}),o.jsxs(Dg,{id:"Competences",children:[o.jsx(Fg,{id:"CompetancesTitle",children:"I can:"}),o.jsxs(On,{id:"CompetencesIconContainer",className:"HTML",children:[o.jsx(kr,{id:"Icon",src:mt,alt:"HTML"}),o.jsx(Dn,{id:"Title-competences",children:"HTML"})]}),o.jsxs(On,{id:"CompetencesIconContainer",className:"CSS",children:[o.jsx(kr,{id:"Icon",src:gt,alt:"CSS"}),o.jsx(Dn,{id:"Title-competences",children:"CSS"})]}),o.jsxs(On,{id:"CompetencesIconContainer",className:"FIGMA",children:[o.jsx(kr,{id:"Icon",src:Mr,alt:"FIGMA"}),o.jsx(Dn,{id:"Title-competences",children:"Figma"})]}),o.jsxs(On,{id:"CompetencesIconContainer",className:"JS",children:[o.jsx(bg,{id:"Icon",src:rn,alt:"JS"}),o.jsx(Dn,{id:"Title-competences",children:"JavaScript"})]}),o.jsxs(On,{id:"CompetencesIconContainer",className:"REACT",children:[o.jsx(kr,{id:"Icon",src:Br,alt:"REACT"}),o.jsx(Dn,{id:"Title-competences",children:"React"})]}),o.jsxs(On,{id:"CompetencesIconContainer",className:"Python ",children:[o.jsx(kr,{id:"Icon",src:du,alt:"Python"}),o.jsx(Dn,{id:"Title-competences",children:"Python"})]}),o.jsxs(On,{id:"CompetencesIconContainer",className:"MySQL",children:[o.jsx(kr,{id:"Icon",src:Rr,alt:"MySQL"}),o.jsx(Dn,{id:"Title-competences",children:"MySQL"})]})]})]}),o.jsx(Hg,{id:"AboutMe",children:o.jsxs(Ug,{id:"Description",children:["Hi!",o.jsx("br",{}),"My name is Malgorzata, and I am very excited to start my journey as a frontend developer. With a positive attitude and a willingness to learn, I enjoy taking on new challenges and finding analytical solutions to problems. For the past six months, I have been studying frontend development through a course at IT-Utvikler AMO/Kodehode, where I gained practical experience with HTML, CSS, JavaScript, React, and Figma.",o.jsx("br",{}),o.jsx("br",{})," I am now actively looking for an internship where I can apply these skills in a real work environment. Currently, I work as an assistant teacher at Johannes Learning Center, where I support lessons in Norwegian, English, programming,mathematics and music. This role has strengthened my ability to collaborate and adapt to different learning environments.",o.jsx("br",{}),o.jsx("br",{})," In my free time, I enjoy playing chess, spending time with family and friends, and following my passion for music and traveling. I am ready for new challenges as a data analyst or programmer. I am eager to contribute my analytical and programming skills to a dynamic team and make a meaningful impact."]})})]})}const fu="/MyPortfolio2/Lavenda.png",pu="/MyPortfolio2/MapApi.png",hu="/MyPortfolio2/ReactJule.png",mu="/MyPortfolio2/SQL.png",Nr="/MyPortfolio2/MySQL.pdf",gu="/MyPortfolio2/Chess.png",ki=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 0;
  border: 4px solid var(--black);
  // border: 4px solid red;
  border-radius: 40px;
  max-width: 70rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  box-shadow: 0px 0px 15px 6px var(--black);
`,Ta=m.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`,Si=m.img`
  max-width: 20rem;
  height: 23rem;
  border-radius: 20px;
  border: 2px solid var(--black);
  margin: 2vh 2vw;
  box-shadow: 0px 0px 15px 6px var(--black);
`,Ci=m.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 3vw;
  max-width: 50rem;
`,Ii=m.h1`
  text-align: center;
  font-size: 2.5rem;
  padding-top: 0.9vh;
  text-shadow: 0px 3px 3px var(--ShadowButton);
`,Pi=m.p`
  font-size: 2rem;
  text-align: center;
  padding-right: 1.2vw;
  max-width: 45rem;
`,Li=m.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 7rem;
  max-width: 45rem;
  border-radius: 20px;
  padding: 1vh 1vw;
  // border: 2px solid red;
`,Mt=m.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
`,Fn=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
  cursor: pointer;
`,Ma=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
`,Vg=m.img`
  height: 4rem;
  width: 4rem;
  box-shadow: 0px 0px 15px 3px var(--black);
`,Ei=m.a``,zi=m.p`
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  font-family: "Playfair Display", serif;
  text-shadow: 0px 3px 3px var(--ShadowButton);
  width: 9.06rem;
`,Bt=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 25rem;
`,Yt=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 16rem;
  height: 4rem;
  border: 8px solid black;
  border-radius: 5rem;
  cursor: pointer;
  margin-top: 5vh;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Zt=m.a`
 color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
 
  }
`;function Wg(){return o.jsxs(o.Fragment,{children:[o.jsxs(Ta,{id:"Container-Projects",children:[o.jsxs(ki,{id:"Project-con",className:"Lavenda",children:[o.jsxs(Ei,{href:"https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",target:"_blank",children:[" ",o.jsx(Si,{id:"ImgProject",src:fu,alt:"Lavenda"})]}),o.jsxs(Ci,{id:"Information-project",children:[o.jsxs(Ii,{id:"title-project",children:["Project 1 ",o.jsx("br",{}),"Lavenda-Art"]}),o.jsx(Pi,{id:"paragraph-project",children:"The project is an online concept store designed in Figma. The website is created for selling lavender products. The design features harmonious colors, user-friendly navigation, and a modern structure that highlights the natural character of the products."}),o.jsxs(Li,{id:"Icons-container",children:[o.jsxs(Fn,{id:"Links-containerIcons",children:[o.jsx(zi,{id:"LagetMeds",children:"Made with:"}),o.jsx(Bt,{children:o.jsx(Mt,{id:"Icons",src:Mr,alt:"Figma"})})]}),o.jsx(Fn,{id:"Links-containerIcons",children:o.jsxs(Bt,{id:"ButtonContainer",children:[o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Figma"})})}),o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]}),o.jsxs(ki,{id:"Project-con",className:"Countries",children:[o.jsx(Ei,{href:"https://malgorzata-b.github.io/Oppgave-API-/",target:"_blank",children:o.jsx(Si,{id:"ImgProject",src:pu,alt:"Countries"})}),o.jsxs(Ci,{id:"Information-project",children:[o.jsxs(Ii,{id:"title-project",children:["Project 2 ",o.jsx("br",{}),"Countries - API"]}),o.jsx(Pi,{id:"paragraph-project",children:"The project is an app built with JavaScript that uses data from an API. It allows users to view information about countries, such as flags, population, and regions, with a responsive design in HTML and CSS."}),o.jsxs(Li,{id:"Icons-container",children:[o.jsxs(Ma,{id:"Icons-container-tools",children:[o.jsx(zi,{id:"LagetMed",children:"Made with:"}),o.jsxs(Bt,{id:"containerIconsTools",children:[o.jsx(Mt,{id:"Icons",src:rn,alt:"JS"}),o.jsx(Mt,{id:"Icons",src:mt,alt:"HTML"}),o.jsx(Mt,{id:"Icons",src:gt,alt:"CSS"})," "]})]}),o.jsx(Fn,{id:"Links-containerIcons",children:o.jsxs(Bt,{id:"ButtonContainer",children:[o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://github.com/Malgorzata-b/Oppgave-API-",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://malgorzata-b.github.io/Oppgave-API-/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})]}),o.jsx(Ta,{id:"ØnskelisterProject-Container",children:o.jsxs(ki,{id:"Project-con",className:"Ønskelister",children:[o.jsx(Ei,{href:"https://malgorzata-b.github.io/Jule-React/",target:"_blank",children:o.jsx(Si,{id:"ImgProject",src:hu,alt:"Ønskelister"})}),o.jsxs(Ci,{id:"Information-project",children:[o.jsxs(Ii,{id:"title-project",children:["Project 3 ",o.jsx("br",{})," Ønskelister"]}),o.jsx(Pi,{id:"paragraph-project",children:"This project is an app built with React. It allows users to create and organize wish lists. HTML and CSS are used to create a responsive design."}),o.jsxs(Li,{id:"Icons-container",children:[o.jsxs(Ma,{id:"Icons-container-tools",children:[o.jsx(zi,{id:"LagetMed",children:"Made with:"}),o.jsxs(Bt,{id:"containerIconsTools",children:[o.jsx(Mt,{id:"Icons",src:Br,alt:"React"}),o.jsx(Mt,{id:"Icons",src:mt,alt:"HTML"}),o.jsx(Mt,{id:"Icons",src:gt,alt:"CSS"})]})]}),o.jsx(Fn,{id:"Links-containerIcons",children:o.jsxs(Bt,{id:"ButtonContainer",children:[o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://github.com/Malgorzata-b/Jule-React",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://malgorzata-b.github.io/Jule-React/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})}),o.jsxs(Ta,{id:"Container-Projects",children:[o.jsxs(ki,{id:"Project-con",className:"MySQL-Project",children:[o.jsx(Ei,{href:Nr,target:"_blank",children:o.jsx(Si,{id:"ImgProject",src:mu,alt:"MySQL-Project"})}),o.jsxs(Ci,{id:"Information-project",children:[o.jsxs(Ii,{id:"title-project",children:["Project 4 ",o.jsx("br",{}),"MySQL"]}),o.jsx(Pi,{id:"paragraph-project",children:"This project uses MySQL to analyze Airbnb data from New York. It involves creating multiple tables and using various functions for data processing."}),o.jsxs(Li,{id:"Icons-container",className:" MySQLContainer",children:[o.jsxs(Fn,{id:"Links-containerIcons",children:[o.jsx(zi,{id:"LagetMed",children:"Made with:"}),o.jsx(Bt,{children:o.jsx(Vg,{id:"Icons",className:" MySQLIcon",src:Rr,alt:"MySQL"})})]}),o.jsx(Fn,{id:"Links-containerIcons",children:o.jsx(Bt,{children:o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:Nr,target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})})})]})]})]}),o.jsxs(ki,{id:"Project-con",className:"Chess",children:[o.jsx(Ei,{href:"https://malgorzata-b.github.io/DOM-Manipulation-Chess/",target:"_blank",children:o.jsx(Si,{id:"ImgProject",src:gu,alt:"Chess"})}),o.jsxs(Ci,{id:"Information-project",children:[o.jsxs(Ii,{id:"title-project",children:["Project 5 ",o.jsx("br",{})," Chess"]}),o.jsx(Pi,{id:"paragraph-project",children:"The project involves creating a chessboard using JavaScript, HTML, and CSS. DOM manipulation was used, and the goal was to present the basic rules of chess."}),o.jsxs(Li,{id:"Icons-container",children:[o.jsxs(Ma,{id:"Icons-container-tools",children:[o.jsx(zi,{id:"LagetMed",children:"Made with:"}),o.jsxs(Bt,{id:"containerIconsTools",children:[o.jsx(Mt,{id:"Icons",src:rn,alt:"JS"}),o.jsx(Mt,{id:"Icons",src:mt,alt:"HTML"}),o.jsx(Mt,{id:"Icons",src:gt,alt:"CSS"})," "]})]}),o.jsx(Fn,{id:"Links-containerIcons",children:o.jsxs(Bt,{id:"ButtonContainer",children:[o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://github.com/Malgorzata-b/DOM-Manipulation-Chess",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(Yt,{id:"Button",children:o.jsx(Zt,{href:"https://malgorzata-b.github.io/DOM-Manipulation-Chess/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})]})]})}const vu="/MyPortfolio2/iconGitHub.png",xu="/MyPortfolio2/iconLinkedin.png",Gg=m.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8vw;
`,Kg=m.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,Jg=m.div`
  border-radius: 100%;
  border: 4px solid var(--black);
  background: linear-gradient(to right top, var(--dark), var(--bb));
  box-shadow: 0px 0px 15px 6px var(--black);
  width: 5rem;
  height: 5rem;
  animation: rotate 5s infinite;
  animation: shadow 9s infinite;
`,Ba=m.p`
  font-size: 2rem;
`,Yg=m.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1vh 20vw;
  padding: 0.5vh 0.5vw;
`,Zg=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
  // border: 2px solid red;
`,Xg=m.img`
  width: 4rem;
  height: 4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--white);
  background-color: var(--CaruselColorShadowLight);
  &:hover {
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,qg=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,ev=m.img`
  height: 4rem;
  width: 4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 1px var(--white);
  background-color: var(--CaruselColorShadowLight);
  &:hover {
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Ff=m.a``;function tv(){return o.jsxs(Gg,{id:"Contact-container",children:[o.jsxs(Kg,{id:"Logo-name",children:[o.jsx(Jg,{id:"Circle"}),o.jsx(Ba,{id:"TitleContact",children:"Malgorzata Bugajska"})]}),o.jsxs(Yg,{id:"Info-Contact",children:[o.jsxs(Ba,{id:"TitleContact",children:["e - mail: ",o.jsx("strong",{children:"bugajska.malgorzat5@gmail.com"})]}),o.jsxs(Ba,{id:"TitleContact",children:["mobile phone: ",o.jsx("strong",{children:"(+47) 486 53 587"})]})]}),o.jsx(Zg,{children:o.jsxs(qg,{id:"Links-Contact",children:[o.jsx(Ff,{href:"https://github.com/Malgorzata-b",children:o.jsx(ev,{id:"Icons",className:"Icons GitHubIcon",src:vu,alt:"GitHub"})}),o.jsx(Ff,{href:"https://www.linkedin.com/in/malgorzata-bugajska/",children:o.jsx(Xg,{id:"Icons",src:xu,alt:"Linkedin"})})]})})]})}const nv=m.header`
  height: 84vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1.5vw;
  justify-content: space-between;
`,rv=m.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  z-index: 100;
  background: linear-gradient(to right top, var(--dark), var(--green));
`,iv=m.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  background-color: transparent;
`,cl=m.button`
  color: var(--white);
  background-color: var(--NavBarButtonBackgroundColor);
  font-size: 1.5rem;
  width: 8rem;
  height: 3rem;
  border-radius: 5rem;
  border: 4px solid var(--NavBarButtonBorderColor);
  box-shadow: 1px 4px 4px 0px var(--NavBarButtonShadowColor);
  cursor: pointer;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,ov=m.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  // height: 210rem;
  max-width: 100%;
`,lv=m.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  border-radius: 20px;
  // border: 2px solid red;
  max-width: 95%;
  backdrop-filter: blur(5px);
`,sv=m.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 95%;
  padding: 4vh 3vw;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  // border: 2px solid red;
`,av=m.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  max-width: 100%;
  background: linear-gradient(to right top, var(--dark), var(--green));
  backdrop-filter: blur(10px);
  // border: 2px solid red;
`;function uv(){const s=Oe.useRef(null),c=Oe.useRef(null),u=Oe.useRef(null),h=Oe.useRef(null),x=j=>{j.current.scrollIntoView({behavior:"smooth",block:"center"})};return o.jsxs(o.Fragment,{children:[o.jsx(nv,{id:"HomePage",ref:s,children:o.jsx(Tg,{})}),o.jsx(rv,{id:"Navbar-Section",children:o.jsxs(iv,{id:"Navbar-container",children:[o.jsx(cl,{id:"ButtonNavBar",onClick:()=>x(s),children:"Home"}),o.jsx(cl,{id:"ButtonNavBar",onClick:()=>x(c),children:"About"}),o.jsx(cl,{id:"ButtonNavBar",onClick:()=>x(u),children:"Project"}),o.jsx(cl,{id:"ButtonNavBar",onClick:()=>x(h),children:"Contact"})]})}),o.jsxs(ov,{id:"Information-container",children:[o.jsx(lv,{ref:c,id:"About-container",children:o.jsx(Qg,{})}),o.jsx(sv,{ref:u,id:"Projects-container",children:o.jsx(Wg,{})})]}),o.jsx(av,{id:"Contact",ref:h,children:o.jsx(tv,{})})]})}const cv=m.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding: 4vh 10vw;
`,bf=m.button`
  background-color: transparent;
  width: 8rem;
  height: 4rem;
  border-radius: 5rem;
  cursor: pointer;
  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Hf=m.a`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: var(--dark);
    cursor: pointer;
  }
`,dv=m.img`
  position: relative;
  height: 40rem;
  left: -12vw;
  top: 20%;
  animation: rotate 19s infinite linear;
`,fv=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  gap: 2rem;
  margin: 0 14.8vw;
  backdrop-filter: blur(2px);
  position: relative;
  top: -20%;
`,pv=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
`,hv=m.h1`
  font-size: 6rem;
`,Uf=m.p``;function mv(){return o.jsxs(o.Fragment,{children:[o.jsxs(cv,{className:"Button-container",children:[o.jsx(bf,{id:"Button-header",children:o.jsx(Hf,{id:"Links-header",href:"https://github.com/Malgorzata-b",target:"_blank",children:"GitHub"})}),o.jsx(bf,{id:"Button-header",children:o.jsx(Hf,{id:"Links-header",href:Jf,target:"_blank",children:"CV"})})]}),o.jsx(dv,{id:"img-dots",src:tu,alt:"Dots"}),o.jsxs(fv,{id:"Welcome-container",children:[o.jsx(hv,{id:"Title",children:"Witam"}),o.jsxs(pv,{children:[o.jsx(Uf,{id:"Name",children:"Malgorzata Bugajska"}),o.jsx(Uf,{id:"Name",children:"Frontend Developer"})]})]})]})}const gv=m.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`,vv=m.div``,xv=m.img`
  width: 18rem;
  height: 28rem;
  border: 3px solid var(--black);
  border-radius: 5%;
  box-shadow: 0px 4px 4px 2px var(--black);
`,yv=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  padding: 1.5vh 1.5vw;
  max-width: 50rem;
  // border: 2px solid red;
`,wv=m.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 30rem;
  // height: 10.5rem;
  // border: 4px solid yellow;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  border-radius: 20px;
  overflow: hidden;
`,Ra=m.img`
  width: 33rem;
  height: 25rem;
  border-radius: 5%;
  // border: solid 5px green;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
`,jv=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  // background-color: white;
  max-width: 8rem;
  // border: 7px solid rgb(18, 26, 20);
`,Aa=m.button`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 1px 5px var(--CaruselColorShadowDark),
    inset 1px 1px 2px var(--CaruselColorShadowLightSecond);
  background-color: var(--CaruselColorBackground);
  background-image: linear-gradient(
    var(--CaruselColorBackgroundImageLight),
    var(--CaruselColorBackgroundImageDark)
  );
`,kv=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 3.5rem;
`,Sv=m.p`
  font-weight: 700;
  font-size: 2.5rem;
`,bn=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Sr=m.img`
  width: 4rem;
  height: 4rem;
`,Cv=m.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`,Hn=m.p`
  font-weight: 300;
  font-size: 1.7rem;
`,Iv=m.div`
  display: flex;
  max-width: 90rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  padding: 5vh 5vw;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 6px var(--black);
`,Pv=m.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  max-width: 95%;
  text-indent: 4rem;
  padding-left: 2vw;
  font-size: 2rem;
`;function Lv(){return o.jsxs(o.Fragment,{children:[o.jsxs(gv,{id:"Images-Container",children:[o.jsx(vv,{id:"Image",children:o.jsx(xv,{id:"Profil",src:cu,alt:"Aurora"})}),o.jsxs(yv,{id:"carousel-container",children:[o.jsxs(wv,{id:"Image-Gallery",children:[o.jsx(Ra,{className:"Photo",id:"photo-1",src:uu,alt:"Image3"}),o.jsx(Ra,{className:"Photo",id:"photo-2",src:au,alt:"Image2"}),o.jsx(Ra,{className:"Photo",id:"photo-3",src:su,alt:"Image1"})]}),o.jsxs(jv,{id:"button-container",children:[o.jsx(Aa,{id:"buttonImage",onClick:()=>document.getElementById("photo-1").scrollIntoView({behavior:"smooth",block:"nearest"})}),o.jsx(Aa,{id:"buttonImage",onClick:()=>document.getElementById("photo-2").scrollIntoView({behavior:"smooth",block:"nearest"})}),o.jsx(Aa,{id:"buttonImage",onClick:()=>document.getElementById("photo-3").scrollIntoView({behavior:"smooth",block:"nearest"})})]})]}),o.jsxs(kv,{id:"Competences",children:[o.jsx(Sv,{id:"CompetancesTitle",children:"Znam: "}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"HTML",children:[o.jsx(Sr,{id:"Icon",src:mt,alt:"HTML"}),o.jsx(Hn,{id:"Title-competences",children:"HTML"})]}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"CSS",children:[o.jsx(Sr,{id:"Icon",src:gt,alt:"CSS"}),o.jsx(Hn,{id:"Title-competences",children:"CSS"})]}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"FIGMA",children:[o.jsx(Sr,{id:"Icon",src:Mr,alt:"FIGMA"}),o.jsx(Hn,{id:"Title-competences",children:"Figma"})]}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"JS",children:[o.jsx(Cv,{id:"Icon",src:rn,alt:"JS"}),o.jsx(Hn,{id:"Title-competences",children:"JavaScript"})]}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"REACT",children:[o.jsx(Sr,{id:"Icon",src:Br,alt:"REACT"}),o.jsx(Hn,{id:"Title-competences",children:"React"})]}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"Python ",children:[o.jsx(Sr,{id:"Icon",src:du,alt:"Python"}),o.jsx(Hn,{id:"Title-competences",children:"Python"})]}),o.jsxs(bn,{id:"CompetencesIconContainer",className:"MySQL",children:[o.jsx(Sr,{id:"Icon",src:Rr,alt:"MySQL"}),o.jsx(Hn,{id:"Title-competences",children:"MySQL"})]})]})]}),o.jsx(Iv,{id:"AboutMe",children:o.jsxs(Pv,{id:"Description",children:["Hi!",o.jsx("br",{}),"Nazywam się Małgorzata i z wielkim entuzjazmem rozpoczynam swoją drogę jako frontend developer. Z pozytywnym nastawieniem i chęcią do nauki podejmuję się nowych wyzwań, zawsze dążąc do znalezienia analitycznych rozwiązań problemów. Przez ostatnie sześć miesięcy kształciłam się w zakresie frontend developmentu na kursie IT-Utvikler AMO/Kodehode, gdzie zdobyłam praktyczne umiejętności w pracy z HTML, CSS, JavaScript, React oraz Figma.",o.jsx("br",{}),o.jsx("br",{})," Aktualnie aktywnie poszukuję stażu, w którym mogłabym wykorzystać swoje umiejętności w środowisku pracy. Obecnie pracuję jako asystent nauczyciela w Johannes Learning Center, gdzie wspieram lekcje z języka norweskiego, angielskiego, programowania, matematyki oraz muzyki. Ta rola pozwoliła mi rozwinąć zdolność współpracy i adaptacji do różnych środowisk edukacyjnych.",o.jsx("br",{}),o.jsx("br",{})," W wolnym czasie lubię grać w szachy, spędzać czas z rodziną i przyjaciółmi oraz realizować swoją pasję do muzyki i podróży. Jestem gotowa na nowe wyzwania jako analityk danych lub programistka.Chciałabym wykorzystać swoje umiejętności analityczne i programistyczne w dynamicznym zespole, aby wnieść wartość i przyczynić się do jego sukcesu."]})})]})}const _i=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 0;
  border: 4px solid var(--black);
  // border: 4px solid red;
  border-radius: 40px;
  max-width: 70rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  box-shadow: 0px 0px 15px 6px var(--black);
`,$a=m.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`,Ni=m.img`
  max-width: 20rem;
  height: 23rem;
  border-radius: 20px;
  border: 2px solid var(--black);
  margin: 2vh 2vw;
  box-shadow: 0px 0px 15px 6px var(--black);
`,Ti=m.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 3vw;
  max-width: 50rem;
`,Mi=m.h1`
  text-align: center;
  font-size: 2.5rem;
  padding-top: 0.9vh;
  text-shadow: 0px 3px 3px var(--ShadowButton);
`,Bi=m.p`
  font-size: 2rem;
  text-align: center;
  padding-right: 1.2vw;
  max-width: 45rem;
`,Ri=m.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 7rem;
  max-width: 45rem;
  border-radius: 20px;
  padding: 1vh 1vw;
  // border: 2px solid red;
`,Rt=m.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
`,Un=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
  cursor: pointer;
`,Oa=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
`,Ev=m.img`
  height: 4rem;
  width: 4rem;
  box-shadow: 0px 0px 15px 3px var(--black);
`,Ai=m.a``,$i=m.p`
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  font-family: "Playfair Display", serif;
  text-shadow: 0px 3px 3px var(--ShadowButton);
  width: 9.06rem;
`,At=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 25rem;
`,Xt=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 16rem;
  height: 4rem;
  border: 8px solid black;
  border-radius: 5rem;
  cursor: pointer;
  margin-top: 5vh;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,qt=m.a`
 color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
 
  }
`;function zv(){return o.jsxs(o.Fragment,{children:[o.jsxs($a,{id:"Container-Projects",children:[o.jsxs(_i,{id:"Project-con",className:"Lavenda",children:[o.jsxs(Ai,{href:"https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",target:"_blank",children:[" ",o.jsx(Ni,{id:"ImgProject",src:fu,alt:"Lavenda"})]}),o.jsxs(Ti,{id:"Information-project",children:[o.jsxs(Mi,{id:"title-project",children:["Projekt 1 ",o.jsx("br",{}),"Lavenda-Art"]}),o.jsx(Bi,{id:"paragraph-project",children:"Projekt to internetowy sklep koncepcyjny zaprojektowany w Figma. Strona została stworzona z myślą o sprzedaży produktów lawendowych. W projekcie zastosowano harmonijne kolory, intuicyjną nawigację oraz nowoczesną strukturę, która podkreśla naturalny charakter produktów."}),o.jsxs(Ri,{id:"Icons-container",children:[o.jsxs(Un,{id:"Links-containerIcons",children:[o.jsx($i,{id:"LagetMeds",children:"Zrobione:"}),o.jsx(At,{children:o.jsx(Rt,{id:"Icons",src:Mr,alt:"Figma"})})]}),o.jsx(Un,{id:"Links-containerIcons",children:o.jsxs(At,{id:"ButtonContainer",children:[o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Figma"})})}),o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]}),o.jsxs(_i,{id:"Project-con",className:"Countries",children:[o.jsx(Ai,{href:"https://malgorzata-b.github.io/Oppgave-API-/",target:"_blank",children:o.jsx(Ni,{id:"ImgProject",src:pu,alt:"Countries"})}),o.jsxs(Ti,{id:"Information-project",children:[o.jsxs(Mi,{id:"title-project",children:["Projekt 2 ",o.jsx("br",{}),"Countries - API"]}),o.jsx(Bi,{id:"paragraph-project",children:"Projekt to aplikacja stworzona w JavaScript, która wykorzystuje dane z API. Umożliwia użytkownikom przeglądanie informacji o krajach z responsywnym designem w HTML i CSS."}),o.jsxs(Ri,{id:"Icons-container",children:[o.jsxs(Oa,{id:"Icons-container-tools",children:[o.jsx($i,{id:"LagetMed",children:"Zrobione:"}),o.jsxs(At,{id:"containerIconsTools",children:[o.jsx(Rt,{id:"Icons",src:rn,alt:"JS"}),o.jsx(Rt,{id:"Icons",src:mt,alt:"HTML"}),o.jsx(Rt,{id:"Icons",src:gt,alt:"CSS"})," "]})]}),o.jsx(Un,{id:"Links-containerIcons",children:o.jsxs(At,{id:"ButtonContainer",children:[o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://github.com/Malgorzata-b/Oppgave-API-",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://malgorzata-b.github.io/Oppgave-API-/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})]}),o.jsx($a,{id:"ØnskelisterProject-Container",children:o.jsxs(_i,{id:"Project-con",className:"Ønskelister",children:[o.jsx(Ai,{href:"https://malgorzata-b.github.io/Jule-React/",target:"_blank",children:o.jsx(Ni,{id:"ImgProject",src:hu,alt:"Ønskelister"})}),o.jsxs(Ti,{id:"Information-project",children:[o.jsxs(Mi,{id:"title-project",children:["Projekt 3 ",o.jsx("br",{})," Ønskelister"]}),o.jsx(Bi,{id:"paragraph-project",children:"Ten projekt to aplikacja stworzona w React. Umożliwia użytkownikom przeglądanie listy życzeń. HTML i CSS zostały użyte do stworzenia responsywnego designu."}),o.jsxs(Ri,{id:"Icons-container",children:[o.jsxs(Oa,{id:"Icons-container-tools",children:[o.jsx($i,{id:"LagetMed",children:"Zrobione:"}),o.jsxs(At,{id:"containerIconsTools",children:[o.jsx(Rt,{id:"Icons",src:Br,alt:"React"}),o.jsx(Rt,{id:"Icons",src:mt,alt:"HTML"}),o.jsx(Rt,{id:"Icons",src:gt,alt:"CSS"})]})]}),o.jsx(Un,{id:"Links-containerIcons",children:o.jsxs(At,{id:"ButtonContainer",children:[o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://github.com/Malgorzata-b/Jule-React",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://malgorzata-b.github.io/Jule-React/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})}),o.jsxs($a,{id:"Container-Projects",children:[o.jsxs(_i,{id:"Project-con",className:"MySQL-Project",children:[o.jsx(Ai,{href:Nr,target:"_blank",children:o.jsx(Ni,{id:"ImgProject",src:mu,alt:"MySQL-Project"})}),o.jsxs(Ti,{id:"Information-project",children:[o.jsxs(Mi,{id:"title-project",children:["Projekt 4 ",o.jsx("br",{}),"MySQL"]}),o.jsx(Bi,{id:"paragraph-project",children:"Ten projekt wykorzystuje MySQL do analizy danych z Airbnb z Nowego Jorku. Polega na tworzeniu wielu tabel oraz używaniu różnych funkcji do przetwarzania danych."}),o.jsxs(Ri,{id:"Icons-container",className:" MySQLContainer",children:[o.jsxs(Un,{id:"Links-containerIcons",children:[o.jsx($i,{id:"LagetMed",children:"Zrobione:"}),o.jsx(At,{children:o.jsx(Ev,{id:"Icons",className:" MySQLIcon",src:Rr,alt:"MySQL"})})]}),o.jsx(Un,{id:"Links-containerIcons",children:o.jsx(At,{children:o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:Nr,target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})})})]})]})]}),o.jsxs(_i,{id:"Project-con",className:"Chess",children:[o.jsx(Ai,{href:"https://malgorzata-b.github.io/DOM-Manipulation-Chess/",target:"_blank",children:o.jsx(Ni,{id:"ImgProject",src:gu,alt:"Chess"})}),o.jsxs(Ti,{id:"Information-project",children:[o.jsxs(Mi,{id:"title-project",children:["Projekt 5 ",o.jsx("br",{})," Chess"]}),o.jsx(Bi,{id:"paragraph-project",children:"Projekt polega na stworzeniu szachownicy za pomocą JavaScript, HTML i CSS. Zastosowano manipulację DOM, a celem było przedstawienie podstawowych zasad gry w szachy."}),o.jsxs(Ri,{id:"Icons-container",children:[o.jsxs(Oa,{id:"Icons-container-tools",children:[o.jsx($i,{id:"LagetMed",children:"Zrobione:"}),o.jsxs(At,{id:"containerIconsTools",children:[o.jsx(Rt,{id:"Icons",src:rn,alt:"JS"}),o.jsx(Rt,{id:"Icons",src:mt,alt:"HTML"}),o.jsx(Rt,{id:"Icons",src:gt,alt:"CSS"})," "]})]}),o.jsx(Un,{id:"Links-containerIcons",children:o.jsxs(At,{id:"ButtonContainer",children:[o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://github.com/Malgorzata-b/DOM-Manipulation-Chess",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(Xt,{id:"Button",children:o.jsx(qt,{href:"https://malgorzata-b.github.io/DOM-Manipulation-Chess/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})]})]})}const _v=m.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8vw;
`,Nv=m.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,Tv=m.div`
  border-radius: 100%;
  border: 4px solid var(--black);
  background: linear-gradient(to right top, var(--dark), var(--bb));
  box-shadow: 0px 0px 15px 6px var(--black);
  width: 5rem;
  height: 5rem;
  animation: rotate 5s infinite;
  animation: shadow 9s infinite;
`,Da=m.p`
  font-size: 2rem;
`,Mv=m.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1vh 20vw;
  padding: 0.5vh 0.5vw;
`,Bv=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
  // border: 2px solid red;
`,Rv=m.img`
  width: 4rem;
  height: 4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--white);
  background-color: var(--CaruselColorShadowLight);
  &:hover {
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Av=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,$v=m.img`
  height: 4rem;
  width: 4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 1px var(--white);
  background-color: var(--CaruselColorShadowLight);
  &:hover {
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Qf=m.a``;function Ov(){return o.jsxs(_v,{id:"Contact-container",children:[o.jsxs(Nv,{id:"Logo-name",children:[o.jsx(Tv,{id:"Circle"}),o.jsx(Da,{id:"TitleContact",children:"Malgorzata Bugajska"})]}),o.jsxs(Mv,{id:"Info-Contact",children:[o.jsxs(Da,{id:"TitleContact",children:["e - mail: ",o.jsx("strong",{children:"bugajska.malgorzat5@gmail.com"})]}),o.jsxs(Da,{id:"TitleContact",children:["numer telefonu: ",o.jsx("strong",{children:"(+47) 486 53 587"})]})]}),o.jsx(Bv,{children:o.jsxs(Av,{id:"Links-Contact",children:[o.jsx(Qf,{href:"https://github.com/Malgorzata-b",children:o.jsx($v,{id:"Icons",className:"Icons GitHubIcon",src:vu,alt:"GitHub"})}),o.jsx(Qf,{href:"https://www.linkedin.com/in/malgorzata-bugajska/",children:o.jsx(Rv,{id:"Icons",src:xu,alt:"Linkedin"})})]})})]})}const Dv=m.header`
  height: 84vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1.5vw;
  justify-content: space-between;
`,Fv=m.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  z-index: 100;
  background: linear-gradient(to right top, var(--dark), var(--green));
`,bv=m.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  background-color: transparent;
`,dl=m.button`
  color: var(--white);
  background-color: var(--NavBarButtonBackgroundColor);
  font-size: 1.5rem;
  width: 12rem;
  height: 3.5rem;
  border-radius: 5rem;
  border: 4px solid var(--NavBarButtonBorderColor);
  box-shadow: 1px 4px 4px 0px var(--NavBarButtonShadowColor);
  cursor: pointer;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Hv=m.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  // height: 210rem;
  max-width: 100%;
`,Uv=m.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  border-radius: 20px;
  // border: 2px solid red;
  max-width: 95%;
  backdrop-filter: blur(5px);
`,Qv=m.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 95%;
  padding: 4vh 3vw;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  // border: 2px solid red;
`,Vv=m.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  max-width: 100%;
  background: linear-gradient(to right top, var(--dark), var(--green));
  backdrop-filter: blur(10px);
  // border: 2px solid red;
`;function Wv(){const s=Oe.useRef(null),c=Oe.useRef(null),u=Oe.useRef(null),h=Oe.useRef(null),x=j=>{j.current.scrollIntoView({behavior:"smooth",block:"center"})};return o.jsxs(o.Fragment,{children:[o.jsx(Dv,{id:"HomePage",ref:s,children:o.jsx(mv,{})}),o.jsx(Fv,{id:"Navbar-Section",children:o.jsxs(bv,{id:"Navbar-container",children:[o.jsx(dl,{id:"ButtonNavBar",onClick:()=>x(s),children:"Strona Główna"}),o.jsx(dl,{id:"ButtonNavBar",onClick:()=>x(c),children:"O mnie"}),o.jsx(dl,{id:"ButtonNavBar",onClick:()=>x(u),children:"Projekty"}),o.jsx(dl,{id:"ButtonNavBar",onClick:()=>x(h),children:"Kontakt"})]})}),o.jsxs(Hv,{id:"Information-container",children:[o.jsx(Uv,{ref:c,id:"About-container",children:o.jsx(Lv,{})}),o.jsx(Qv,{ref:u,id:"Projects-container",children:o.jsx(zv,{})})]}),o.jsx(Vv,{id:"Contact",ref:h,children:o.jsx(Ov,{})})]})}const Gv="/MyPortfolio2/CV-M.Bugajska.pdf",Kv=m.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding: 4vh 10vw;
`,Vf=m.button`
  background-color: transparent;
  width: 8rem;
  height: 4rem;
  border-radius: 5rem;
  cursor: pointer;
  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Wf=m.a`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: var(--dark);
    cursor: pointer;
  }
`,Jv=m.img`
  position: relative;
  height: 40rem;
  left: -12vw;
  top: 20%;
  animation: rotate 19s infinite linear;
`,Yv=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  gap: 2rem;
  margin: 0 14.8vw;
  backdrop-filter: blur(2px);
  position: relative;
  top: -20%;
`,Zv=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
`,Xv=m.h1`
  font-size: 6rem;
`,Gf=m.p``;function qv(){return o.jsxs(o.Fragment,{children:[o.jsxs(Kv,{className:"Button-container",children:[o.jsx(Vf,{id:"Button-header",children:o.jsx(Wf,{id:"Links-header",href:"https://github.com/Malgorzata-b",target:"_blank",children:"GitHub"})}),o.jsx(Vf,{id:"Button-header",children:o.jsx(Wf,{id:"Links-header",href:Gv,target:"_blank",children:"CV"})})]}),o.jsx(Jv,{id:"img-dots",src:tu,alt:"Dots"}),o.jsxs(Yv,{id:"Welcome-container",children:[o.jsx(Xv,{id:"Title",children:"Velkommen"}),o.jsxs(Zv,{children:[o.jsx(Gf,{id:"Name",children:"Malgorzata Bugajska"}),o.jsx(Gf,{id:"Name",children:"Frontend Utvikler"})]})]})]})}const ex=m.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`,tx=m.div``,nx=m.img`
  width: 18rem;
  height: 28rem;
  border: 3px solid var(--black);
  border-radius: 5%;
  box-shadow: 0px 4px 4px 2px var(--black);
`,rx=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  padding: 1.5vh 1.5vw;
  max-width: 50rem;
  // border: 2px solid red;
`,ix=m.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 30rem;
  // height: 10.5rem;
  // border: 4px solid yellow;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  border-radius: 20px;
  overflow: hidden;
`,Fa=m.img`
  width: 33rem;
  height: 25rem;
  border-radius: 5%;
  // border: solid 5px green;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
`,ox=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  // background-color: white;
  max-width: 8rem;
  // border: 7px solid rgb(18, 26, 20);
`,ba=m.button`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 1px 5px var(--CaruselColorShadowDark),
    inset 1px 1px 2px var(--CaruselColorShadowLightSecond);
  background-color: var(--CaruselColorBackground);
  background-image: linear-gradient(
    var(--CaruselColorBackgroundImageLight),
    var(--CaruselColorBackgroundImageDark)
  );
`,lx=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 3.5rem;
`,sx=m.p`
  font-weight: 700;
  font-size: 2.5rem;
`,Qn=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Cr=m.img`
  width: 4rem;
  height: 4rem;
`,ax=m.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`,Vn=m.p`
  font-weight: 300;
  font-size: 1.7rem;
`,ux=m.div`
  display: flex;
  max-width: 90rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  padding: 5vh 5vw;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 6px var(--black);
`,cx=m.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  max-width: 95%;
  text-indent: 4rem;
  padding-left: 2vw;
  font-size: 2rem;
`;function dx(){return o.jsxs(o.Fragment,{children:[o.jsxs(ex,{id:"Images-Container",children:[o.jsx(tx,{id:"Image",children:o.jsx(nx,{id:"Profil",src:cu,alt:"Aurora"})}),o.jsxs(rx,{id:"carousel-container",children:[o.jsxs(ix,{id:"Image-Gallery",children:[o.jsx(Fa,{className:"Photo",id:"photo-1",src:uu,alt:"Image3"}),o.jsx(Fa,{className:"Photo",id:"photo-2",src:au,alt:"Image2"}),o.jsx(Fa,{className:"Photo",id:"photo-3",src:su,alt:"Image1"})]}),o.jsxs(ox,{id:"button-container",children:[o.jsx(ba,{id:"buttonImage",onClick:()=>document.getElementById("photo-1").scrollIntoView({behavior:"smooth",block:"nearest"})}),o.jsx(ba,{id:"buttonImage",onClick:()=>document.getElementById("photo-2").scrollIntoView({behavior:"smooth",block:"nearest"})}),o.jsx(ba,{id:"buttonImage",onClick:()=>document.getElementById("photo-3").scrollIntoView({behavior:"smooth",block:"nearest"})})]})]}),o.jsxs(lx,{id:"Competences",children:[o.jsx(sx,{id:"CompetancesTitle",children:"Jeg Kan: "}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"HTML",children:[o.jsx(Cr,{id:"Icon",src:mt,alt:"HTML"}),o.jsx(Vn,{id:"Title-competences",children:"HTML"})]}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"CSS",children:[o.jsx(Cr,{id:"Icon",src:gt,alt:"CSS"}),o.jsx(Vn,{id:"Title-competences",children:"CSS"})]}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"FIGMA",children:[o.jsx(Cr,{id:"Icon",src:Mr,alt:"FIGMA"}),o.jsx(Vn,{id:"Title-competences",children:"Figma"})]}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"JS",children:[o.jsx(ax,{id:"Icon",src:rn,alt:"JS"}),o.jsx(Vn,{id:"Title-competences",children:"JavaScript"})]}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"REACT",children:[o.jsx(Cr,{id:"Icon",src:Br,alt:"REACT"}),o.jsx(Vn,{id:"Title-competences",children:"React"})]}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"Python ",children:[o.jsx(Cr,{id:"Icon",src:du,alt:"Python"}),o.jsx(Vn,{id:"Title-competences",children:"Python"})]}),o.jsxs(Qn,{id:"CompetencesIconContainer",className:"MySQL",children:[o.jsx(Cr,{id:"Icon",src:Rr,alt:"MySQL"}),o.jsx(Vn,{id:"Title-competences",children:"MySQL"})]})]})]}),o.jsx(ux,{id:"AboutMe",children:o.jsxs(cx,{id:"Description",children:["Hei!",o.jsx("br",{}),"Jeg er Malgorzata og jeg er veldig spent på å starte min reise som frontend-utvikler. Med en positiv holdning og lærevillighet trives jeg med å takle nye utfordringer og finne analytiske løsninger på oppgaver. De siste seks månedene har jeg studert frontend-utvikling gjennom et kurs på IT-Utvikler AMO/Kodehode, hvor jeg har fått praktisk erfaring med HTML, CSS, JavaScript, React og Figma.",o.jsx("br",{}),o.jsx("br",{})," Nå ser jeg aktivt etter en praksisplass hvor jeg kan anvende disse ferdighetene i en reell arbeidssituasjon. For tiden jobber jeg som assistentlærer ved Johannes Learning Center, hvor jeg støtter undervisningen i norsk, engelsk, programmering, matematikk og musikk. Denne rollen har styrket min evne til samarbeid og tilpasning i ulike læringsmiljøer.",o.jsx("br",{}),o.jsx("br",{})," På fritiden liker jeg å spille sjakk, tilbringe tid med familie og venner, og forfølge min lidenskap for musikk og reising. Jeg er klar for nye utfordringer som dataanalytiker eller programmerer. Jeg er ivrig etter å bidra med mine analytiske og programmeringsferdigheter til et dynamisk team og skape en meningsfull påvirkning."]})})]})}const Oi=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 0;
  border: 4px solid var(--black);
  // border: 4px solid red;
  border-radius: 40px;
  max-width: 70rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  box-shadow: 0px 0px 15px 6px var(--black);
`,Ha=m.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`,Di=m.img`
  max-width: 20rem;
  height: 23rem;
  border-radius: 20px;
  border: 2px solid var(--black);
  margin: 2vh 2vw;
  box-shadow: 0px 0px 15px 6px var(--black);
`,Fi=m.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 3vw;
  max-width: 50rem;
`,bi=m.h1`
  text-align: center;
  font-size: 2.5rem;
  padding-top: 0.9vh;
  text-shadow: 0px 3px 3px var(--ShadowButton);
`,Hi=m.p`
  font-size: 2rem;
  text-align: center;
  padding-right: 1.2vw;
  max-width: 45rem;
`,Ui=m.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 7rem;
  max-width: 45rem;
  border-radius: 20px;
  padding: 1vh 1vw;
  // border: 2px solid red;
`,$t=m.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
`,Wn=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
  cursor: pointer;
`,Ua=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
`,fx=m.img`
  height: 4rem;
  width: 4rem;
  box-shadow: 0px 0px 15px 3px var(--black);
`,Qi=m.a``,Vi=m.p`
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  font-family: "Playfair Display", serif;
  text-shadow: 0px 3px 3px var(--ShadowButton);
  width: 9.06rem;
`,Ot=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 25rem;
`,en=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 16rem;
  height: 4rem;
  border: 8px solid black;
  border-radius: 5rem;
  cursor: pointer;
  margin-top: 5vh;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,tn=m.a`
 color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
 
  }
`;function px(){return o.jsxs(o.Fragment,{children:[o.jsxs(Ha,{id:"Container-Projects",children:[o.jsxs(Oi,{id:"Project-con",className:"Lavenda",children:[o.jsxs(Qi,{href:"https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",target:"_blank",children:[" ",o.jsx(Di,{id:"ImgProject",src:fu,alt:"Lavenda"})]}),o.jsxs(Fi,{id:"Information-project",children:[o.jsxs(bi,{id:"title-project",children:["Project 1 ",o.jsx("br",{}),"Lavenda-Art"]}),o.jsx(Hi,{id:"paragraph-project",children:"Prosjekte er en konseptbutikk på nett designet i Figma. Siden er laget med tanke på salg av lavendelprodukter. Designet har harmoniske farger, brukervennlig navigasjon og en moderne struktur som fremhever den naturlige karakteren til produktene."}),o.jsxs(Ui,{id:"Icons-container",children:[o.jsxs(Wn,{id:"Links-containerIcons",children:[o.jsx(Vi,{id:"LagetMeds",children:"Laget med:"}),o.jsx(Ot,{children:o.jsx($t,{id:"Icons",src:Mr,alt:"Figma"})})]}),o.jsx(Wn,{id:"Links-containerIcons",children:o.jsxs(Ot,{id:"ButtonContainer",children:[o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Figma"})})}),o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]}),o.jsxs(Oi,{id:"Project-con",className:"Countries",children:[o.jsx(Qi,{href:"https://malgorzata-b.github.io/Oppgave-API-/",target:"_blank",children:o.jsx(Di,{id:"ImgProject",src:pu,alt:"Countries"})}),o.jsxs(Fi,{id:"Information-project",children:[o.jsxs(bi,{id:"title-project",children:["Project 2 ",o.jsx("br",{}),"Countries - API"]}),o.jsx(Hi,{id:"paragraph-project",children:"Prosjektet er en app laget med JavaScript som bruker data fra et API. Den lar brukere se informasjon om land, som flagg, befolkning og regioner, med responsivt design i HTML og CSS."}),o.jsxs(Ui,{id:"Icons-container",children:[o.jsxs(Ua,{id:"Icons-container-tools",children:[o.jsx(Vi,{id:"LagetMed",children:"Laget med:"}),o.jsxs(Ot,{id:"containerIconsTools",children:[o.jsx($t,{id:"Icons",src:rn,alt:"JS"}),o.jsx($t,{id:"Icons",src:mt,alt:"HTML"}),o.jsx($t,{id:"Icons",src:gt,alt:"CSS"})," "]})]}),o.jsx(Wn,{id:"Links-containerIcons",children:o.jsxs(Ot,{id:"ButtonContainer",children:[o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://github.com/Malgorzata-b/Oppgave-API-",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://malgorzata-b.github.io/Oppgave-API-/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})]}),o.jsx(Ha,{id:"ØnskelisterProject-Container",children:o.jsxs(Oi,{id:"Project-con",className:"Ønskelister",children:[o.jsx(Qi,{href:"https://malgorzata-b.github.io/Jule-React/",target:"_blank",children:o.jsx(Di,{id:"ImgProject",src:hu,alt:"Ønskelister"})}),o.jsxs(Fi,{id:"Information-project",children:[o.jsxs(bi,{id:"title-project",children:["Project 3 ",o.jsx("br",{})," Ønskelister"]}),o.jsx(Hi,{id:"paragraph-project",children:"Dette prosjektet er en app laget med React. Den lar brukere lage og organisere ønskelister. HTML og CSS er brukt for å lage et responsivt design."}),o.jsxs(Ui,{id:"Icons-container",children:[o.jsxs(Ua,{id:"Icons-container-tools",children:[o.jsx(Vi,{id:"LagetMed",children:"Laget med:"}),o.jsxs(Ot,{id:"containerIconsTools",children:[o.jsx($t,{id:"Icons",src:Br,alt:"React"}),o.jsx($t,{id:"Icons",src:mt,alt:"HTML"}),o.jsx($t,{id:"Icons",src:gt,alt:"CSS"})]})]}),o.jsx(Wn,{id:"Links-containerIcons",children:o.jsxs(Ot,{id:"ButtonContainer",children:[o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://github.com/Malgorzata-b/Jule-React",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://malgorzata-b.github.io/Jule-React/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})}),o.jsxs(Ha,{id:"Container-Projects",children:[o.jsxs(Oi,{id:"Project-con",className:"MySQL-Project",children:[o.jsx(Qi,{href:Nr,target:"_blank",children:o.jsx(Di,{id:"ImgProject",src:mu,alt:"MySQL-Project"})}),o.jsxs(Fi,{id:"Information-project",children:[o.jsxs(bi,{id:"title-project",children:["Project 4 ",o.jsx("br",{}),"MySQL"]}),o.jsx(Hi,{id:"paragraph-project",children:"Dette prosjektet bruker MySQL for å analysere Airbnb-data fra New York. Det involverer oppretting av flere tabeller og bruk av ulike funksjoner for databehandling."}),o.jsxs(Ui,{id:"Icons-container",className:" MySQLContainer",children:[o.jsxs(Wn,{id:"Links-containerIcons",children:[o.jsx(Vi,{id:"LagetMed",children:"Laget med:"}),o.jsx(Ot,{children:o.jsx(fx,{id:"Icons",className:" MySQLIcon",src:Rr,alt:"MySQL"})})]}),o.jsx(Wn,{id:"Links-containerIcons",children:o.jsx(Ot,{children:o.jsx(en,{id:"Button",children:o.jsx(tn,{href:Nr,target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})})})]})]})]}),o.jsxs(Oi,{id:"Project-con",className:"Chess",children:[o.jsx(Qi,{href:"https://malgorzata-b.github.io/DOM-Manipulation-Chess/",target:"_blank",children:o.jsx(Di,{id:"ImgProject",src:gu,alt:"Chess"})}),o.jsxs(Fi,{id:"Information-project",children:[o.jsxs(bi,{id:"title-project",children:["Project 5 ",o.jsx("br",{})," Chess"]}),o.jsx(Hi,{id:"paragraph-project",children:"Prosjektet går ut på å lage et sjakkbrett ved hjelp av JavaScript, HTML og CSS. DOM-manipulasjon ble brukt. Målet var å presentere de grunnleggende reglene i sjakk."}),o.jsxs(Ui,{id:"Icons-container",children:[o.jsxs(Ua,{id:"Icons-container-tools",children:[o.jsx(Vi,{id:"LagetMed",children:"Laget med:"}),o.jsxs(Ot,{id:"containerIconsTools",children:[o.jsx($t,{id:"Icons",src:rn,alt:"JS"}),o.jsx($t,{id:"Icons",src:mt,alt:"HTML"}),o.jsx($t,{id:"Icons",src:gt,alt:"CSS"})," "]})]}),o.jsx(Wn,{id:"Links-containerIcons",children:o.jsxs(Ot,{id:"ButtonContainer",children:[o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://github.com/Malgorzata-b/DOM-Manipulation-Chess",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"GitHub"})})}),o.jsx(en,{id:"Button",children:o.jsx(tn,{href:"https://malgorzata-b.github.io/DOM-Manipulation-Chess/",target:"_blank",children:o.jsx("p",{id:"TitleButtonLinks",children:"Live"})})})]})})]})]})]})]})]})}const hx=m.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8vw;
`,mx=m.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,gx=m.div`
  border-radius: 100%;
  border: 4px solid var(--black);
  background: linear-gradient(to right top, var(--dark), var(--bb));
  box-shadow: 0px 0px 15px 6px var(--black);
  width: 5rem;
  height: 5rem;
  animation: rotate 5s infinite;
  animation: shadow 9s infinite;
`,Qa=m.p`
  font-size: 2rem;
`,vx=m.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1vh 20vw;
  padding: 0.5vh 0.5vw;
`,xx=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
  // border: 2px solid red;
`,yx=m.img`
  width: 4rem;
  height: 4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--white);
  background-color: var(--CaruselColorShadowLight);
  &:hover {
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,wx=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,jx=m.img`
  height: 4rem;
  width: 4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 1px var(--white);
  background-color: var(--CaruselColorShadowLight);
  &:hover {
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Kf=m.a``;function kx(){return o.jsxs(hx,{id:"Contact-container",children:[o.jsxs(mx,{id:"Logo-name",children:[o.jsx(gx,{id:"Circle"}),o.jsx(Qa,{id:"TitleContact",children:"Malgorzata Bugajska"})]}),o.jsxs(vx,{id:"Info-Contact",children:[o.jsxs(Qa,{id:"TitleContact",children:["e - post: ",o.jsx("strong",{children:"bugajska.malgorzat5@gmail.com"})]}),o.jsxs(Qa,{id:"TitleContact",children:["mobiltelefon: ",o.jsx("strong",{children:"(+47) 486 53 587"})]})]}),o.jsx(xx,{children:o.jsxs(wx,{id:"Links-Contact",children:[o.jsx(Kf,{href:"https://github.com/Malgorzata-b",children:o.jsx(jx,{id:"Icons",className:"Icons GitHubIcon",src:vu,alt:"GitHub"})}),o.jsx(Kf,{href:"https://www.linkedin.com/in/malgorzata-bugajska/",children:o.jsx(yx,{id:"Icons",src:xu,alt:"Linkedin"})})]})})]})}const Sx=m.header`
  height: 84vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1.5vw;
  justify-content: space-between;
`,Cx=m.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  z-index: 100;
  background: linear-gradient(to right top, var(--dark), var(--green));
`,Ix=m.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  background-color: transparent;
`,fl=m.button`
  color: var(--white);
  background-color: var(--NavBarButtonBackgroundColor);
  font-size: 1.5rem;
  width: 8rem;
  height: 3rem;
  border-radius: 5rem;
  border: 4px solid var(--NavBarButtonBorderColor);
  box-shadow: 1px 4px 4px 0px var(--NavBarButtonShadowColor);
  cursor: pointer;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`,Px=m.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  // height: 210rem;
  max-width: 100%;
`,Lx=m.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  border-radius: 20px;
  // border: 2px solid red;
  max-width: 95%;
  backdrop-filter: blur(5px);
`,Ex=m.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 95%;
  padding: 4vh 3vw;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  // border: 2px solid red;
`,zx=m.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  max-width: 100%;
  background: linear-gradient(to right top, var(--dark), var(--green));
  backdrop-filter: blur(10px);
  // border: 2px solid red;
`;function _x(){const s=Oe.useRef(null),c=Oe.useRef(null),u=Oe.useRef(null),h=Oe.useRef(null),x=j=>{j.current.scrollIntoView({behavior:"smooth",block:"center"})};return o.jsxs(o.Fragment,{children:[o.jsx(Sx,{id:"HomePage",ref:s,children:o.jsx(qv,{})}),o.jsx(Cx,{id:"Navbar-Section",children:o.jsxs(Ix,{id:"Navbar-container",children:[o.jsx(fl,{id:"ButtonNavBar",onClick:()=>x(s),children:"Hjem"}),o.jsx(fl,{id:"ButtonNavBar",onClick:()=>x(c),children:"Om meg"}),o.jsx(fl,{id:"ButtonNavBar",onClick:()=>x(u),children:"Prosjekter"}),o.jsx(fl,{id:"ButtonNavBar",onClick:()=>x(h),children:"Kontakt"})]})}),o.jsxs(Px,{id:"Information-container",children:[o.jsx(Lx,{ref:c,id:"About-container",children:o.jsx(dx,{})}),o.jsx(Ex,{ref:u,id:"Projects-container",children:o.jsx(px,{})})]}),o.jsx(zx,{id:"Contact",ref:h,children:o.jsx(kx,{})})]})}const Nx="/MyPortfolio2/no.png",Tx="/MyPortfolio2/en.png",Mx="/MyPortfolio2/pl.png",Bx=m.section`
  //   border: 2px solid red;
  background: linear-gradient(
    to right top,
    var(--dark),
    var(--NavBarButtonBackgroundColor)
  );
`,Rx=m.div`
  //   border: 9px solid yellow;
  max-width: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5vh;
 
  background-color: transparent;
`,Va=m.button`
  background-color: transparent;
  border: 2px solid var(--black);
  box-shadow: 0px 0px 15px 3px var(--black);
  border-radius: 50%;
  cursor: pointer;
   width: 2rem;
  height: 2rem;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
`,Wa=m.img`
  width: 1.8rem;
  height: 1.8rem;
`;function Ax(){const[s,c]=Oe.useState("no");function u(){switch(s){case"en":return o.jsx(uv,{});case"pl":return o.jsx(Wv,{});default:return o.jsx(_x,{})}}return o.jsxs(Bx,{id:"LanguageSection",children:[o.jsxs(Rx,{id:"LanguageNav",children:[o.jsxs(Va,{id:"LanguageButton",onClick:()=>c("no"),children:[" ",o.jsx(Wa,{id:"ImgLanguage",src:Nx,alt:"Nor"})]}),o.jsxs(Va,{id:"LanguageButton",onClick:()=>c("en"),children:[" ",o.jsx(Wa,{id:"ImgLanguage",src:Tx,alt:"Eng"})]}),o.jsxs(Va,{id:"LanguageButton",onClick:()=>c("pl"),children:[" ",o.jsx(Wa,{id:"ImgLanguage",src:Mx,alt:"Pol"})]})]}),u()]})}Cm.createRoot(document.getElementById("MyPortfolio")).render(o.jsx(Oe.StrictMode,{children:o.jsx(Ax,{})}));
