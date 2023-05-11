"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[233],{6233:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var i,o,t,a,s=r(1614),d=r(4942),l=r(9434),p=r(5705),m=r(3466),u=r(890),c=r(2056),x=r(2598),h=r(6727),f=(0,h.Ry)().shape({username:(0,h.Z_)().min(1).max(16,"Must be less than 16 characters").required("Please enter name").trim(),email:(0,h.Z_)().email("Invalid email").lowercase().matches(/(?:.*(\.com|\.net))$/,"Email must end with .com or .net").required("Email is required").trim(),password:(0,h.Z_)().min(6,"Password should be min 6 characters").max(16,"Password should be max 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Password must exist (A-a, 1-9)").required("Please enter password").trim()}),g=r(203),b=r(4667),w=r(6164),A=r(184),v={username:"",email:"",password:""},j=function(){var n=(0,l.I0)(),e=(0,l.v9)(x.xU),r=function(n){return!(n.trim().length>=6&&n.trim().length<=10)};return(0,A.jsx)(p.J9,{initialValues:v,validationSchema:f,onSubmit:function(e,r){(0,r.setSubmitting)(!1),n((0,c.z2)(e))},children:function(n){var i,o=n.touched,t=n.errors,a=n.values,s=n.handleBlur;return(0,A.jsxs)(p.l0,{autoComplete:"off",children:[(0,A.jsx)(p.gN,{component:w.n,fullWidth:!0,onBlur:s,name:"username",type:"text",placeholder:"Name",autoComplete:"off",InputProps:{sx:{border:t.username&&o.username?"1px solid #E74A3B":null!==o&&void 0!==o&&o.username?"1px solid #3CBC81":"1px solid #FAFAFA"},startAdornment:(0,A.jsx)(m.Z,{position:"start",children:(0,A.jsx)(b._G,{sx:{color:t.username&&o.username?"#E74A3B":o.username?"#3CBC81":"#fafafa"}})}),endAdornment:(0,A.jsxs)(m.Z,{position:"end",style:{outline:"none"},children:[t.username&&o.username&&(0,A.jsx)(b.kM,{}),!t.username&&o.username&&(0,A.jsx)(b.zA,{})]})}}),(0,A.jsx)(p.gN,{component:w.n,fullWidth:!0,onBlur:s,name:"email",type:"email",placeholder:"Email",variant:"outlined",autoComplete:"off",InputProps:{sx:{border:t.email&&o.email?"1px solid #E74A3B":null!==o&&void 0!==o&&o.email?"1px solid #3CBC81":"1px solid #FAFAFA"},startAdornment:(0,A.jsx)(m.Z,{position:"start",children:(0,A.jsx)(b.Vb,{sx:{color:t.email&&o.email?"#E74A3B":o.email?"#3CBC81":"#fafafa"}})}),endAdornment:(0,A.jsxs)(m.Z,{position:"end",style:{outline:"none"},children:[t.email&&o.email&&(0,A.jsx)(b.kM,{}),!t.email&&o.email&&(0,A.jsx)(b.zA,{})]})}}),r(a.password)||t.password?" ":(0,A.jsx)(u.Z,{variant:"p",sx:{display:"flex",fontSize:"12px",marginLeft:"14px",marginBottom:"3px",marginTop:"6px",color:"#F6C23E"},children:"Your password is little secure"}),(0,A.jsx)(p.gN,{component:w.n,fullWidth:!0,onBlur:s,variant:"outlined",name:"password",type:"password",placeholder:"Password",autoComplete:"off",InputProps:{sx:{border:t.password&&o.password?"1px solid #E74A3B":null!==o&&void 0!==o&&o.password?"1px solid #3CBC81":"1px solid #FAFAFA"},startAdornment:(0,A.jsx)(m.Z,{position:"start",children:(0,A.jsx)(b.nY,{sx:{color:t.password&&o.password?"#E74A3B":o.password?"#3CBC81":"#fafafa"}})}),endAdornment:(0,A.jsxs)(m.Z,{position:"end",style:{outline:"none"},children:[t.password&&o.password&&(0,A.jsx)(b.kM,{}),r(a.password)&&!t.password&&o.password&&(0,A.jsx)(b.zA,{}),!r(a.password)&&!t.password&&(0,A.jsx)(b.ry,{})]})}}),e&&(0,A.jsx)(g.a,{}),(0,A.jsx)(w.o,{sx:(i={},(0,d.Z)(i,"&:hover",{backgroundColor:"#8BAA36",color:"#FAFAFA"}),(0,d.Z)(i,"@media (min-width: 768px)",{width:"100%",height:"59px",borderRadius:"6px",backgroundColor:" #8BAA36;",marginTop:"26px"}),i),variant:"contained",fullWidth:!0,type:"submit",disabled:e,children:"Sign up"})]})}})},k=r(168),Z=r(6088),C=r(1087),B=r(6707),y=r(3141),F=r(93),z=r(9158),E=r(8957),P=r(5323),I=r(2782),S=r(5453),_=r(4364),W=r(9283),q=r(3774),M=r(6562),N=Z.Z.section(i||(i=(0,k.Z)(["\n  min-width: 100vw;\n  min-height: 100vh;\n\n  background-color: #fafafa;\n  background-image: url(","), url(",");\n  background-repeat: no-repeat;\n  background-size: 285px, cover;\n  /* background-size: calc(100vw - 180px), cover; */\n  background-position: center top 86px, center top 322px;\n\n  @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n    background-image: url(","), url(",");\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 409px, cover;\n    background-position: center top 96px, center top 322px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 532px, cover;\n    background-position: left 113px top 115px, center top 364px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","),\n        url(",");\n    }\n  }\n"])),I,B,S,y,(function(n){return n.theme.device.tablet}),_,F,W,z,(function(n){return n.theme.device.desktop}),q,E,M,P),R=Z.Z.div(o||(o=(0,k.Z)(["\n  position: absolute;\n  max-width: 335px;\n  margin-top: 305px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  padding: 32px 28px 40px;\n\n  background: #2a2c36;\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  @media (",") {\n    max-width: 500px;\n    margin-top: 444px;\n    padding: 44px 50px;\n  }\n  @media (",") {\n    margin-right: 180px;\n    margin-top: 122px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),T=Z.Z.h2(t||(t=(0,k.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.167;\n  text-align: start;\n\n  margin-bottom: 18px;\n\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 28px;\n    line-height: 30px;\n\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.device.tablet})),U=(0,Z.Z)(C.rU)(a||(a=(0,k.Z)(["\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-decoration-line: underline;\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])),(function(n){return n.theme.device.tablet})),V=function(){return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(N,{children:(0,A.jsx)(s.Z,{fixed:!0,maxWidth:"desktop",style:{background:"#FAFAFA",padding:0},children:(0,A.jsxs)(R,{children:[(0,A.jsx)(T,{children:"Registration"}),(0,A.jsx)(j,{}),(0,A.jsx)(U,{to:"/signin",children:"Sign In"})]})})})})}}}]);
//# sourceMappingURL=233.8d173333.chunk.js.map