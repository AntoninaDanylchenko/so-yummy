"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[701],{9179:function(n,e,i){i.r(e),i.d(e,{default:function(){return un}});var o=i(1614),t=i(4942),r=i(2791),a=i(9434),s=i(5705),d=function(){return d=Object.assign||function(n){for(var e,i=1,o=arguments.length;i<o;i++)for(var t in e=arguments[i])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},d.apply(this,arguments)};function l(n,e){var i={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(i[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(n);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(n,o[t])&&(i[o[t]]=n[o[t]])}return i}var p=i(8163);function c(n){var e=n.children,i=l(n,["children"]);return r.createElement(p.Z,d({},function(n){var e=n.disabled,i=n.field,o=i.onBlur,t=l(i,["onBlur"]),r=n.form,a=r.isSubmitting,p=r.touched,c=r.errors,m=n.onBlur,u=n.helperText,x=l(n,["disabled","field","form","onBlur","helperText"]),f=(0,s.u9)(c,t.name),h=(0,s.u9)(p,t.name)&&!!f;return d(d({error:h,helperText:h?f:u,disabled:null!==e&&void 0!==e?e:a,onBlur:null!==m&&void 0!==m?m:function(n){o(null!==n&&void 0!==n?n:t.name)}},t),x)}(i)),e)}c.displayName="FormikMaterialUITextField";var m=i(6727),u=i(3366),x=i(7462),f=i(8182),h=i(4419),v=i(4036),g=i(890),b=i(3840),A=i(2930),w=i(6934),Z=i(5878),z=i(1217);function j(n){return(0,z.Z)("MuiInputAdornment",n)}var y,S,F,C,P,k=(0,Z.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),B=i(1402),E=i(184),M=["children","className","component","disablePointerEvents","disableTypography","position","variant"],I=(0,w.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var i=n.ownerState;return[e.root,e["position".concat((0,v.Z)(i.position))],!0===i.disablePointerEvents&&e.disablePointerEvents,e[i.variant]]}})((function(n){var e=n.theme,i=n.ownerState;return(0,x.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===i.variant&&(0,t.Z)({},"&.".concat(k.positionStart,"&:not(.").concat(k.hiddenLabel,")"),{marginTop:16}),"start"===i.position&&{marginRight:8},"end"===i.position&&{marginLeft:8},!0===i.disablePointerEvents&&{pointerEvents:"none"})})),O=r.forwardRef((function(n,e){var i=(0,B.Z)({props:n,name:"MuiInputAdornment"}),o=i.children,t=i.className,a=i.component,s=void 0===a?"div":a,d=i.disablePointerEvents,l=void 0!==d&&d,p=i.disableTypography,c=void 0!==p&&p,m=i.position,w=i.variant,Z=(0,u.Z)(i,M),z=(0,A.Z)()||{},S=w;w&&z.variant,z&&!S&&(S=z.variant);var F=(0,x.Z)({},i,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:l,position:m,variant:S}),C=function(n){var e=n.classes,i=n.disablePointerEvents,o=n.hiddenLabel,t=n.position,r=n.size,a=n.variant,s={root:["root",i&&"disablePointerEvents",t&&"position".concat((0,v.Z)(t)),a,o&&"hiddenLabel",r&&"size".concat((0,v.Z)(r))]};return(0,h.Z)(s,j,e)}(F);return(0,E.jsx)(b.Z.Provider,{value:null,children:(0,E.jsx)(I,(0,x.Z)({as:s,ownerState:F,className:(0,f.Z)(C.root,t),ref:e},Z,{children:"string"!==typeof o||c?(0,E.jsxs)(r.Fragment,{children:["start"===m?y||(y=(0,E.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,E.jsx)(g.Z,{color:"text.secondary",children:o})}))})})),L=i(6151),N=i(5232),R=i(2129),T=i(1248),V=i(9077),H=i(9096),G=i(2056),W=(0,m.Ry)().shape({username:(0,m.Z_)().min(1).max(16,"Must be less than 16 characters").required("Pease enter name").trim(),email:(0,m.Z_)().email("Invalid email address").required("Pease enter email").trim(),password:(0,m.Z_)().min(6,"Password should be min 6 characters").max(16,"Password should be max 16 characters").matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,"Password too light (A-a, 1-9)").required("Pease enter password").trim()}),_=(0,w.ZP)(c)((function(n){n.theme,n.errors,n.touched,n.values;return{"& .MuiInputBase-root":{fontFamily:"Poppins",fontSize:"14px",height:"45px",marginBottom:"12px",py:"12px",opacity:.8,flex:"none",order:2,color:"#fafafa",flexGrow:0,borderRadius:"6px","& fieldset":{border:"none"},"@media (min-width: 768px)":{height:"59px",marginBottom:"24px",fontSize:"18px"}}}})),q={username:"",email:"",password:""},U=function(){var n=(0,a.I0)();return(0,E.jsx)(s.J9,{initialValues:q,validationSchema:W,onSubmit:function(e,i){(0,i.setSubmitting)(!1),n((0,G.z2)(e))},children:function(n){var e,i=n.touched,o=n.errors;return(0,E.jsxs)(s.l0,{autoComplete:"off",children:[(0,E.jsx)(s.gN,{component:_,fullWidth:!0,id:"outlined",name:"username",type:"text",placeholder:"Name",InputProps:{sx:{border:o.username&&i.username?"1px solid #E74A3B":null!==i&&void 0!==i&&i.username?"1px solid #3CBC81":"1px solid #FAFAFA","&:hover":{border:"2px solid #FAFAFA"},"&.Mui-focused":{border:"2px solid #FAFAFA"}},startAdornment:(0,E.jsx)(O,{position:"start",children:(0,E.jsx)(N.Z,{sx:{fontSize:20,color:o.username&&i.username?"#E74A3B":i.username?"#3CBC81":"#fafafa",opacity:.8,flex:"none",order:1,flexGrow:0,"@media (min-width: 768px)":{fontSize:28}}})}),endAdornment:(0,E.jsxs)(O,{position:"end",style:{outline:"none"},children:[o.username&&i.username&&(0,E.jsx)(H.Z,{sx:{color:"#E74A3B",fontSize:18,"@media (min-width: 768px)":{fontSize:24}}}),!o.username&&i.username&&(0,E.jsx)(V.Z,{sx:{color:"#3CBC81",fontSize:18,"@media (min-width: 768px)":{fontSize:24}}})]})}}),(0,E.jsx)(s.gN,{component:_,fullWidth:!0,id:"outlined",name:"email",type:"email",placeholder:"Email",InputProps:{sx:{border:o.email&&i.email?"1px solid #E74A3B":null!==i&&void 0!==i&&i.email?"1px solid #3CBC81":"1px solid #FAFAFA","&:hover":{border:"2px solid #FAFAFA"},"&.Mui-focused":{border:"2px solid #FAFAFA"}},startAdornment:(0,E.jsx)(O,{position:"start",children:(0,E.jsx)(R.Z,{sx:{fontSize:20,color:o.email&&i.email?"#E74A3B":i.email?"#3CBC81":"#fafafa",opacity:.8,flex:"none",order:1,flexGrow:0,"@media (min-width: 768px)":{fontSize:28}}})}),endAdornment:(0,E.jsxs)(O,{position:"end",style:{outline:"none"},children:[o.email&&i.email&&(0,E.jsx)(H.Z,{sx:{color:"#E74A3B",fontSize:18,"@media (min-width: 768px)":{fontSize:24}},fontSize:"default"}),!o.email&&i.email&&(0,E.jsx)(V.Z,{sx:{color:"#3CBC81",fontSize:18,"@media (min-width: 768px)":{fontSize:24}},fontSize:"default"})]})}}),(0,E.jsx)(s.gN,{component:_,fullWidth:!0,id:"outlined",name:"password",placeholder:"Password",type:"password",InputProps:{sx:{border:o.password&&i.password?"1px solid #E74A3B":null!==i&&void 0!==i&&i.password?"1px solid #3CBC81":"1px solid #FAFAFA","&:hover":{border:"2px solid #FAFAFA"},"&.Mui-focused":{border:"2px solid #FAFAFA"}},startAdornment:(0,E.jsx)(O,{position:"start",children:(0,E.jsx)(T.Z,{sx:{fontSize:20,color:o.password&&i.password?"#E74A3B":i.password?"#3CBC81":"#fafafa",opacity:.8,flex:"none",order:1,flexGrow:0,"@media (min-width: 768px)":{fontSize:28}}})}),endAdornment:(0,E.jsxs)(O,{position:"end",style:{outline:"none"},children:[o.password&&i.password&&(0,E.jsx)(H.Z,{sx:{color:"#E74A3B",fontSize:18,"@media (min-width: 768px)":{fontSize:24}}}),!o.password&&i.password&&(0,E.jsx)(V.Z,{sx:{color:"#3CBC81",fontSize:18,"@media (min-width: 768px)":{fontSize:24}}})]})}}),(0,E.jsx)(L.Z,{sx:(e={fontFamily:"Poppins",width:"100%",height:"45px",mt:"16px",textTransform:"none",fontSize:16,backgroundColor:"#8BAA36",color:"#FAFAFA",borderRadius:"6px",flex:"none",order:0,flexGrow:0},(0,t.Z)(e,"&:hover",{backgroundColor:"#8BAA36",color:"#FAFAFA"}),(0,t.Z)(e,"@media (min-width: 768px)",{width:"100%",height:"59px",borderRadius:"6px",backgroundColor:" #8BAA36;",mt:"26px"}),e),variant:"contained",fullWidth:!0,type:"submit",children:"Sign up"})]})}})},J=i(168),D=i(6088),K=i(1087),Q=i(6707),X=i(3141),Y=i(93),$=i(9158),nn=i(8957),en=i(5323),on=i(2782),tn=i(5453),rn=i(4364),an=i(9283),sn=i(3774),dn=i(6562),ln=D.Z.section(S||(S=(0,J.Z)(["\n  min-width: 100vw;\n  min-height: 100vh;\n\n  background-image: url(","), url(",");\n  background-repeat: no-repeat;\n  background-size: 285px, cover;\n  /* background-size: calc(100vw - 180px), cover; */\n  background-position: center top 86px, center top 322px;\n\n  @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n    background-image: url(","), url(",");\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 409px, cover;\n    background-position: center top 96px, center top 322px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 532px, cover;\n    background-position: left 113px top 115px, center top 364px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","),\n        url(",");\n    }\n  }\n"])),on,Q,tn,X,(function(n){return n.theme.device.tablet}),rn,Y,an,$,(function(n){return n.theme.device.desktop}),sn,nn,dn,en),pn=D.Z.div(F||(F=(0,J.Z)(["\n  position: absolute;\n  max-width: 335px;\n  margin-top: 305px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  padding: 32px 28px 40px;\n\n  background: #2a2c36;\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  @media (",") {\n    max-width: 500px;\n    margin-top: 444px;\n    padding: 44px 50px;\n  }\n  @media (",") {\n    margin-right: 180px;\n    margin-top: 122px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),cn=D.Z.h2(C||(C=(0,J.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.167;\n  text-align: start;\n\n  margin-bottom: 18px;\n  /* identical to box height, or 117% */\n\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 28px;\n    line-height: 30px;\n\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.device.tablet})),mn=(0,D.Z)(K.rU)(P||(P=(0,J.Z)(["\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  /* identical to box height */\n\n  text-decoration-line: underline;\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])),(function(n){return n.theme.device.tablet})),un=function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(ln,{children:(0,E.jsx)(o.Z,{fixed:!0,maxWidth:"desktop",style:{background:"#FAFAFA",padding:0},children:(0,E.jsxs)(pn,{children:[(0,E.jsx)(cn,{children:"Registration"}),(0,E.jsx)(U,{}),(0,E.jsx)(mn,{to:"/signin",children:"Sign In"})]})})})})}},9096:function(n,e,i){var o=i(4836);e.Z=void 0;var t=o(i(5649)),r=i(184),a=(0,t.default)((0,r.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"CancelSharp");e.Z=a},9077:function(n,e,i){var o=i(4836);e.Z=void 0;var t=o(i(5649)),r=i(184),a=(0,t.default)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircleSharp");e.Z=a},1248:function(n,e,i){var o=i(4836);e.Z=void 0;var t=o(i(5649)),r=i(184),a=(0,t.default)((0,r.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");e.Z=a},2129:function(n,e,i){var o=i(4836);e.Z=void 0;var t=o(i(5649)),r=i(184),a=(0,t.default)((0,r.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");e.Z=a},5232:function(n,e,i){var o=i(4836);e.Z=void 0;var t=o(i(5649)),r=i(184),a=(0,t.default)((0,r.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PermIdentity");e.Z=a}}]);
//# sourceMappingURL=701.cb409e71.chunk.js.map