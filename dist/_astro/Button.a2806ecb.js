import{r as _}from"./index.45a47ed6.js";var p={},l={get exports(){return p},set exports(r){p=r}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=_,x=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,f){var t,o={},s=null,i=null;f!==void 0&&(s=""+f),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)y.call(e,t)&&!d.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:x,type:r,key:s,ref:i,props:o,_owner:a.current}}n.Fragment=m;n.jsx=u;n.jsxs=u;(function(r){r.exports=n})(l);const E=r=>p.jsx("button",{onClick:()=>alert("clicked"),children:r.text});export{E as Button};
