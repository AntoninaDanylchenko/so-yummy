"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[948],{4948:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var i,o,r,a,s=t(1614),l=t(4942),d=t(1413),p=(t(2791),t(9434)),u=t(5705),c=t(971),m=t(6727),x=t(3466),f=t(7482),h=t(6151),g=t(5232),b=t(2129),Z=t(1248),w=t(9077),y=t(9096),k=t(2056),v=t(184),j=(0,m.Ry)().shape({username:(0,m.Z_)().min(1).max(16,"Must be less than 16 characters").required("Pease enter name"),email:(0,m.Z_)().email("Invalid email address").required("Pease enter email"),password:(0,m.Z_)().min(6,"Password should be min 6 characters").max(16,"Password should be max 16 characters").matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,"Password too light (A-a, 1-9)").required("Pease enter password")}),A={username:"",email:"",password:""},z=function(){var n=(0,p.I0)();return(0,v.jsx)(u.J9,{initialValues:A,validationSchema:j,onSubmit:function(e,t){var i=t.setSubmitting;setTimeout((function(){i(!1),n((0,k.z2)(e))}),500)},children:function(n){n.values;var e,t=n.submitForm,i=n.isSubmitting,o=n.touched,r=n.errors;return(0,v.jsxs)(u.l0,{autoComplete:"off",children:[(0,v.jsx)(u.gN,{component:c.n,fullWidth:!0,id:"outlined",name:"username",type:"text",placeholder:"Name",multiline:!0,style:(0,d.Z)((0,d.Z)({},StyleSheet),{},{fontFamily:"Poppins",fontSize:14,lineHeight:1.39,mb:"12px",opacity:.8,color:"#fff",flex:"none",order:2,flexGrow:0,borderRadius:"6px"}),InputProps:{startAdornment:(0,v.jsx)(x.Z,{position:"start",children:(0,v.jsx)(g.Z,{style:{color:"#fafafa",opacity:.8,flex:"none",order:1,flexGrow:0}})}),endAdornment:(0,v.jsxs)(x.Z,{position:"end",style:{outline:"none"},children:[r.username&&o.username&&(0,v.jsx)(y.Z,{style:{color:"#E74A3B"},fontSize:"default"}),!r.username&&o.username&&(0,v.jsx)(w.Z,{style:{color:"#3CBC81"},fontSize:"default"})]})},error:o.username&&!!r.username,helperText:o.username&&r.username}),(0,v.jsx)(u.gN,{component:c.n,fullWidth:!0,id:"outlined",name:"email",type:"email",placeholder:"Email",multiline:!0,style:{color:"white"},InputProps:{startAdornment:(0,v.jsx)(x.Z,{position:"start",children:(0,v.jsx)(b.Z,{style:{color:"#fafafa",opacity:.8,flex:"none",order:1,flexGrow:0}})})}}),(0,v.jsx)(u.gN,{component:c.n,fullWidth:!0,id:"outlined",name:"password",placeholder:"Password",type:"password",multiline:!0,sx:{},InputProps:{startAdornment:(0,v.jsx)(x.Z,{position:"start",children:(0,v.jsx)(Z.Z,{style:{color:"#FAFAFA",opacity:.8,flex:"none",order:1,flexGrow:0}})})}}),i&&(0,v.jsx)(f.Z,{}),(0,v.jsx)("br",{}),(0,v.jsx)(h.Z,{sx:(e={fontFamily:"Poppins",width:"100%",height:"45px",mt:"28px",textTransform:"none",fontSize:16,lineHeight:18,backgroundColor:"#8BAA36",color:"#FAFAFA",borderRadius:"6px",flex:"none",order:0,flexGrow:0},(0,l.Z)(e,"&:hover",{backgroundColor:"#8BAA36",color:"#fff"}),(0,l.Z)(e,"@media (min-width: 768px)",{width:"100%",height:"59px",borderRadius:"6px",backgroundColor:" #8BAA36;",mt:"50px"}),e),variant:"contained",fullWidth:!0,type:"submit",onClick:t,children:"Sign up"})]})}})},F=t(168),P=t(225),S=t(1087),C=t(6707),I=t(3141),B=t(93),G=t(9158),R=t(8957),W=t(5323),_=t(2782),N=t(5453),q=t(4364),T=t(9283),E=t(3774),H=t(6562),J=P.Z.section(i||(i=(0,F.Z)(["\n  min-width: 100vw;\n  min-height: 100vh;\n\n  background-image: url(","), url(",");\n  background-repeat: no-repeat;\n  background-size: 285px, cover;\n  /* background-size: calc(100vw - 180px), cover; */\n  background-position: center top 86px, center top 322px;\n\n  @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n    background-image: url(","), url(",");\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 409px, cover;\n    background-position: center top 96px, center top 322px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n\n  @media (",") {\n    background-image: url(","), url(",");\n    background-size: 532px, cover;\n    background-position: left 113px top 115px, center top 364px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","),\n        url(",");\n    }\n  }\n"])),_,C,N,I,(function(n){return n.theme.device.tablet}),q,B,T,G,(function(n){return n.theme.device.desktop}),E,R,H,W),M=P.Z.div(o||(o=(0,F.Z)(["\n  position: absolute;\n  max-width: 335px;\n  margin-top: 305px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  padding: 32px 28px 40px;\n\n  background: #2a2c36;\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  @media (",") {\n    max-width: 500px;\n    margin-top: 444px;\n    padding: 44px 50px;\n  }\n  @media (",") {\n    margin-right: 180px;\n    margin-top: 122px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),U=P.Z.h2(r||(r=(0,F.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.167;\n  text-align: start;\n\n  margin-bottom: 18px;\n  /* identical to box height, or 117% */\n\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 28px;\n    line-height: 30px;\n\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.device.tablet})),V=(0,P.Z)(S.rU)(a||(a=(0,F.Z)(["\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  /* identical to box height */\n\n  text-decoration-line: underline;\n  color: #fafafa;\n\n  @media (",") {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])),(function(n){return n.theme.device.tablet})),D=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(J,{children:(0,v.jsx)(s.Z,{fixed:!0,maxWidth:"desktop",style:{background:"#FAFAFA",padding:0},children:(0,v.jsxs)(M,{children:[(0,v.jsx)(U,{children:"Registration"}),(0,v.jsx)(z,{}),(0,v.jsx)(V,{to:"/signin",children:"Sign In"})]})})})})}}}]);
//# sourceMappingURL=948.6071d17d.chunk.js.map