"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[126],{1126:function(n,e,i){i.r(e),i.d(e,{default:function(){return U}});var t,o,r,a,d=i(1614),s=i(4942),l=i(9434),p=i(5705),c=i(3466),m=i(6164),u=i(4667),x=i(2056),g=i(6727),h=(0,g.Ry)().shape({email:(0,g.Z_)().email("Invalid email").lowercase().matches(/(?:.*(\.com|\.net))$/,"Email must end with .com or .net").required("Email is required").trim(),password:(0,g.Z_)().required("Please enter password").trim()}),f=i(2598),b=i(203),v=i(184),w={email:"",password:""},k=function(){var n=(0,l.I0)(),e=(0,l.v9)(f.xU);return(0,v.jsx)(p.J9,{initialValues:w,validationSchema:h,onSubmit:function(e,i){(0,i.setSubmitting)(!1),n((0,x.Ib)(e))},children:function(n){var i,t=n.touched,o=n.errors,r=n.handleBlur;return(0,v.jsxs)(p.l0,{autoComplete:"off",children:[(0,v.jsx)(p.gN,{component:m.n,fullWidth:!0,onBlur:r,name:"email",type:"email",placeholder:"Email",variant:"outlined",autoComplete:"off",InputProps:{sx:{border:o.email&&t.email?"1px solid #E74A3B":null!==t&&void 0!==t&&t.email?"1px solid #3CBC81":"1px solid #FAFAFA"},startAdornment:(0,v.jsx)(c.Z,{position:"start",children:(0,v.jsx)(u.Vb,{sx:{color:o.email&&t.email?"#E74A3B":t.email?"#3CBC81":"#fafafa"}})}),endAdornment:(0,v.jsxs)(c.Z,{position:"end",style:{outline:"none"},children:[o.email&&t.email&&(0,v.jsx)(u.kM,{}),!o.email&&t.email&&(0,v.jsx)(u.zA,{})]})}}),(0,v.jsx)(p.gN,{component:m.n,fullWidth:!0,onBlur:r,variant:"outlined",name:"password",type:"password",placeholder:"Password",autoComplete:"off",InputProps:{sx:{border:o.password&&t.password?"1px solid #E74A3B":null!==t&&void 0!==t&&t.password?"1px solid #3CBC81":"1px solid #FAFAFA"},startAdornment:(0,v.jsx)(c.Z,{position:"start",children:(0,v.jsx)(u.nY,{sx:{color:o.password&&t.password?"#E74A3B":t.password?"#3CBC81":"#fafafa"}})}),endAdornment:(0,v.jsxs)(c.Z,{position:"end",style:{outline:"none"},children:[o.password&&t.password&&(0,v.jsx)(u.kM,{}),!o.password&&t.password&&(0,v.jsx)(u.zA,{})]})}}),e&&(0,v.jsx)(b.a,{}),(0,v.jsx)(m.o,{sx:(i={},(0,s.Z)(i,"&:hover",{backgroundColor:"#8BAA36",color:"#FAFAFA"}),(0,s.Z)(i,"@media (min-width: 768px)",{width:"100%",height:"59px",borderRadius:"6px",backgroundColor:" #8BAA36;",mt:"26px"}),i),variant:"contained",fullWidth:!0,type:"submit",disabled:e,children:"Sign in"})]})}})},j=i(168),A=i(6088),Z=i(1087),y=i(6707),C=i(3141),B=i(93),z=i(9158),F=i(8957),E=i(5323),I=i(2782),P=i(5453),S=i(4364),W=i(9283),_=i(3774),q=i(6562),R=A.Z.section(t||(t=(0,j.Z)(["\n  width: 100vw;\n  height: 100%;\n\n  background-color: #fafafa;\n  background-image: url(","), url(",");\n  background-repeat: no-repeat;\n  /* background-size: calc(100vw - 180px), cover; */\n  background-size: 285px, cover;\n\n  background-position: center bottom calc(50vh + 30px), center bottom -400px;\n\n  @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n    background-image: url(","), url(",");\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 409px, cover;\n    background-position: center bottom calc(50vh + 40px), center bottom -450px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 532px, cover;\n    background-position: left calc(5vw + 175px) top 115px, center top 364px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","),\n        url(",");\n    }\n  }\n"])),I,y,P,C,(function(n){return n.theme.device.tablet}),S,B,W,z,(function(n){return n.theme.device.desktop}),_,F,q,E),T=A.Z.div(o||(o=(0,j.Z)(["\n  /* position: absolute; */\n  max-width: 335px;\n  /* margin-top: 305px; */\n  margin-left: auto;\n  margin-right: auto;\n  /* margin-bottom: 70px; //proof margin */\n  /* left: 0;\n  right: 0; */\n  text-align: center;\n\n  padding: 32px 28px 40px;\n\n  background: #2a2c36;\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  @media (",") {\n    max-width: 500px;\n    /* margin-top: 444px; */\n    padding: 44px 50px;\n  }\n  @media (",") {\n    margin-right: calc(5vw + 65px);\n    /* margin-top: 122px; */\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),M=A.Z.h2(r||(r=(0,j.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.167;\n  text-align: start;\n\n  margin-bottom: 40px;\n  /* identical to box height, or 117% */\n\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 28px;\n    line-height: 30px;\n\n    margin-bottom: 50px;\n  }\n"])),(function(n){return n.theme.device.tablet})),N=(0,A.Z)(Z.rU)(a||(a=(0,j.Z)(["\n  /* position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translate(-50%, -50%); */\n\n  display: block;\n\n  margin-top: 32px;\n  /* margin-left: auto;\n  margin-right: auto; */\n\n  text-align: center;\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  /* identical to box height */\n\n  text-decoration-line: underline;\n  color: #fafafa;\n  /* color: red; */\n\n  @media (",") {\n    font-size: 16px;\n    line-height: 24px;\n    /* margin-left: auto;\n    margin-right: 180px; */\n  }\n  @media (",") {\n    display: flex;\n    margin-right: 380px;\n    justify-content: end;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),U=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(R,{children:(0,v.jsxs)(d.Z,{maxWidth:"desktop",sx:{paddingTop:"calc(50vh - 70px)","@media (min-width: 768px)":{paddingTop:"calc(50vh - 100px)"},"@media (min-width: 1440px)":{paddingTop:"15vh"}},children:[(0,v.jsxs)(T,{children:[(0,v.jsx)(M,{children:"Sign In"}),(0,v.jsx)(k,{})]}),(0,v.jsx)(N,{to:"/register",children:"Registration"})]})})})}}}]);
//# sourceMappingURL=126.fa993a41.chunk.js.map