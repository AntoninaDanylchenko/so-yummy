"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[646],{4646:function(n,e,t){t.r(e),t.d(e,{default:function(){return ft}});var i,r=t(9590),o=t(3433),c=t(4942),u=t(1413),a=t(9439),d=t(2791),p=t(7689),s=t(9434),h=t(2788),m=function(n){return n.ownRecipe.isLoading},l=function(n){return n.ownRecipe.error},x={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},f=new Uint8Array(16);function g(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(f)}for(var w=[],A=0;A<256;++A)w.push((A+256).toString(16).slice(1));function Z(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(w[n[e+0]]+w[n[e+1]]+w[n[e+2]]+w[n[e+3]]+"-"+w[n[e+4]]+w[n[e+5]]+"-"+w[n[e+6]]+w[n[e+7]]+"-"+w[n[e+8]]+w[n[e+9]]+"-"+w[n[e+10]]+w[n[e+11]]+w[n[e+12]]+w[n[e+13]]+w[n[e+14]]+w[n[e+15]]).toLowerCase()}var b,y,v,I,z,E,j,S,C,B,Q,k,L,F,J,X,U,R,N,W,q,M,P,H,T,V,K,Y,D,O,G,_,$,nn,en,tn,rn,on,cn,un,an,dn,pn,sn,hn,mn,ln,xn,fn,gn,wn,An,Zn,bn,yn,vn,In,zn,En,jn,Sn=function(n,e,t){if(x.randomUUID&&!e&&!n)return x.randomUUID();var i=(n=n||{}).random||(n.rng||g)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){t=t||0;for(var r=0;r<16;++r)e[t+r]=i[r];return e}return Z(i)},Cn=t(6727),Bn=Cn.Ry().shape({image:Cn.Z_().required("Add picture"),title:Cn.Z_().typeError("Write a string").required("Enter title"),description:Cn.Z_().typeError("Write a string").required("Enter about recipe"),cookingTime:Cn.Z_(),category:Cn.Z_(),ingredients:Cn.IX().of(Cn.Ry({unitNumber:Cn.Z_().required("Enter number"),name:Cn.Z_().required("Enter ingredients"),unitValue:Cn.Z_(),id:Cn.Z_()})).required("Ingredients is required"),preparation:Cn.Z_().required("Enter recipe")}),Qn=t(5218),kn=t(2530),Ln=t(4666),Fn=JSON.parse('["5","10","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","105","110","115","120"]'),Jn="data:image/png;base64,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",Xn=t(5172),Un=t(168),Rn=t(6088),Nn=Rn.Z.div(b||(b=(0,Un.Z)(["\n  margin-bottom: 67px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 100px;\n  }\n"]))),Wn=Rn.Z.div(y||(y=(0,Un.Z)(["\n  position: relative;\n  width: 279px;\n  height: 268px;\n  margin: 0 auto 32px;\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 357px;\n    margin-right: 50px;\n  }\n"]))),qn=Rn.Z.input(v||(v=(0,Un.Z)(["\n  width: 279px;\n  height: 260px;\n  margin-top: 8px;\n  @media screen and (min-width: 1440px) {\n    width: 357px;\n    height: 335px;\n    margin-top: 9px;\n  }\n"]))),Mn=Rn.Z.img(I||(I=(0,Un.Z)(["\n  width: 279px;\n  height: 268px;\n  object-fit: cover;\n  border-radius: ",";\n  position: absolute;\n  top: 0;\n  @media screen and (min-width: 1440px) {\n    width: 357px;\n    height: 344px;\n  }\n"])),(function(n){return n.theme.radii[2]})),Pn=Rn.Z.picture(z||(z=(0,Un.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]))),Hn=Rn.Z.div(E||(E=(0,Un.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 393px;\n  }\n"]))),Tn=Rn.Z.input(j||(j=(0,Un.Z)(["\n  width: 343px;\n  height: 40px;\n  background-color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  padding-bottom: 18px;\n  outline: none;\n  font-size: ",";\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  ::placeholder {\n    font-size: ",";\n    line-height: 1.43;\n    letter-spacing: -0.02em;\n    color: ",";\n    opacity: 1;\n    @media screen and (min-width: 768px) {\n      font-size: ",";\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 393px;\n    height: 43px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.mainBg}),(function(n){return n.theme.borderLine}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.fontSizes[4]})),Vn=Rn.Z.div(S||(S=(0,Un.Z)(["\n  width: 343px;\n  height: 40px;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding-bottom: 18px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  @media screen and (min-width: 768px) {\n    width: 393px;\n    height: 43px;\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.borderLine})),Kn=Rn.Z.div(C||(C=(0,Un.Z)(["\n  font-size: ",";\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[3]})),Yn=Rn.Z.div(B||(B=(0,Un.Z)(["\n  width: 120px;\n  height: 43px;\n  padding-bottom: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  cursor: pointer;\n  svg {\n    color: ",";\n    @media screen and (min-width: 768px) {\n      width: 20px;\n      height: 20px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 140px;\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.mainBg}),(function(n){return n.theme.borderLine}),(function(n){return n.theme.accent.iconFollow}),(function(n){return n.theme.fontSizes[3]})),Dn=Rn.Z.span(Q||(Q=(0,Un.Z)(["\n  font-size: ","px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[4]})),On=Rn.Z.ul(k||(k=(0,Un.Z)(["\n  width: 123px;\n  height: 144px;\n  background-color: ",";\n  position: absolute;\n  right: 0;\n  top: 70%;\n  padding: 8px 14px;\n  box-shadow: ",";\n  border-radius: ",";\n  overflow-y: scroll;\n  z-index: 3;\n  @media screen and (min-width: 768px) {\n    width: 132px;\n    height: 162px;\n  }\n"])),(function(n){return n.theme.primary.selectBg}),(function(n){return n.theme.shadows[1]}),(function(n){return n.theme.radii[1]})),Gn=Rn.Z.li(L||(L=(0,Un.Z)(["\n  font-size: 12px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  cursor: pointer;\n  :not(:last-child) {\n    margin-bottom: 4px;\n  }\n  :hover {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.input.input}),(function(n){return n.theme.accent.iconFollow}),(function(n){return n.theme.fontSizes[3]})),_n=Rn.Z.ul(F||(F=(0,Un.Z)(["\n  width: 98px;\n  height: 144px;\n  background-color: ",";\n  position: absolute;\n  right: 0;\n  top: 70%;\n  padding: 8px 14px;\n  box-shadow: ",";\n  border-radius: ",";\n  overflow-y: scroll;\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    width: 110px;\n    height: 162px;\n  }\n"])),(function(n){return n.theme.primary.selectBg}),(function(n){return n.theme.shadows[1]}),(function(n){return n.theme.radii[1]})),$n=Rn.Z.li(J||(J=(0,Un.Z)(["\n  font-size: 12px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  :not(:last-child) {\n    margin-bottom: 4px;\n  }\n  :hover {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.input.input}),(function(n){return n.theme.accent.iconFollow}),(function(n){return n.theme.fontSizes[3]})),ne=Rn.Z.div(X||(X=(0,Un.Z)(["\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 40px;\n  }\n"]))),ee=Rn.Z.p(U||(U=(0,Un.Z)(["\n  margin-top: 8px;\n  color: ",";\n  font-size: ","px;\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.inputError}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontSizes[4]})),te=t(184),ie=function(n){var e=n.title,t=n.description,i=n.time,r=n.category,o=n.onInputImageSet,c=n.onTitleChange,u=n.onDescriptionChange,p=n.onTimeSet,h=n.onCategorySet,m=n.errors,l=(0,s.I0)(),x=(0,s.v9)(kn.T);(0,d.useEffect)((function(){l((0,Ln.b)())}),[l]);var f=(0,d.useState)(""),g=(0,a.Z)(f,2),w=g[0],A=g[1],Z=(0,d.useState)(!1),b=(0,a.Z)(Z,2),y=b[0],v=b[1],I=(0,d.useState)(!1),z=(0,a.Z)(I,2),E=z[0],j=z[1];return(0,te.jsxs)(Nn,{children:[(0,te.jsxs)(Wn,{onChange:function(n){return function(n){var e=n.target.files[0],t=new FileReader;t.addEventListener("load",(function(n){var t=n.target.result,i=new Blob([t],{type:e.type}),r=URL.createObjectURL(i);A(r)})),t.readAsArrayBuffer(e),o(n)}(n)},children:[(0,te.jsx)("label",{htmlFor:"photo",children:(0,te.jsxs)(Pn,{children:[(0,te.jsx)("source",{srcSet:Jn,media:"(max-width: 1439px)"}),(0,te.jsx)("source",{srcSet:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAAFYCAMAAAC8vx36AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAACfUExURUdwTIyqNo+fMH+fMIyqNYqqNY+fQIupNYuqNourNY+nOI+vMIuqNoenMIupNoqpNourOIunOImpNYenNIupN4qqNYqpNYqqNoupNourNouqNvr6+uzw4Zm0T5i0T97myae+Z8LSmPP17rzNjKa+Z+zw4pm0TsnXpMPSmLXIgLTIgMnXpZKvQvP17a7Dc63Dc7vNjNDcsdDcsLvNi5KvQ3JXiQsAAAAadFJOUwCfEBCQnxCPz48gEN8gz89AQI9Ajz/P39/PnFJssQAAAzNJREFUeNrt3NlyEkEAQNGOGoMxcV9hyCzAsCaa6P9/mwEjicCDPdIYzLlv0P1AneqapWboEK579e6krRS1Do7Dz54+oZGwo0cL5BaJpL2YM1vJyVdzCMcUkvc2HEDYwWL+DCF5HwODHUSZMmVRpkxZlCmLMmXKokxZlClTFmXKlEWZsihTpizKlEWZMmVRpizKlCmLMmXKokxZlClTFmXKokyZsihTpizKlEWZMmVRpizKlCmLMmVRpkxZlClTFmXKokyZsihTFmXKlEWZsihTpizKlCmLMmVRpkxZlCmLMmXKokyZsihTFmXKlEWZsihTpizKlEWZMmVRpkxZlCmLMmXKokxZlClTFmXKokyZsihTpizKlEWZMuV/2/dRni0rVkcvbsfyaZdyw3pZ2T9btj5+O9a/qnqUGyLXfz65znqUG9St6pjp9WBGOb7yKm7+sKQcX96Pm1/klOPLziKPMBllypQpU6ZMmTJlypQpU9435S+bvhx1Fo02jfUpb6de56beXv3s/VEeV52VBhPK227QWauivO06G6KcSjkfljnltMrniwuJoqKcUvnmaq2gnFB5+dApp5xOefkAdUg5nfLw16eSsiPGnp/9Cme/HShXhSu5ndyVlFN3Je6w91q5WkfOKP91K2+Fj7NV5PPJ7zMuKMfniRRlypQpU6ZMmTJlypQp///KeRF5R+6faA0qh3HzL79Sjm82iNonoJvVlBs0jmHuDu7vUr7vOzdcFt1lG2SXFdNs0qbcrPrbnV1I1t4aL+7sQlLO2pQfeJQpUxZlypRFmbIoU6YsypRFmTJlUaZMWZQpizJlyqJMWZQpUxZlyqJMmbIoU6YsypRFmTJlUaYsypQpizJlyqJMWZQpUxZlyqJMmbIoUxZlypRFmTJlUaYsypQpizJlUaZMWZQpizJlyqJMmbIoUxZlypRFmbIoU6YsypQpizJlUaZMWZQpizJlyqJMWZQpUxZlypRFmbIoU6YsypRFmTJlUaYsypQpizJlyqJMWZQpPwDlEwbJ+xCeQUjeYXgNIXmnwWJO3lEI4XmLQ9JePg5zZqs56UpeIF93emg9p+nTm/dz4B9QYLzxUOhiRwAAAABJRU5ErkJggg==",media:"(min-width: 1440px)"}),(0,te.jsx)("img",{src:Jn,alt:"addphoto"})]})}),(0,te.jsx)(qn,{type:"file",accept:".jpg, .jpeg, .png",id:"photo"}),w&&(0,te.jsx)(Mn,{src:w,alt:"recipeImage"}),m.image&&(0,te.jsx)(ee,{children:m.image})]}),(0,te.jsxs)(Hn,{children:[(0,te.jsxs)(ne,{children:[(0,te.jsx)(Tn,{type:"text",id:"title",name:"title",placeholder:"Enter item title",onChange:function(n){return c(n.target.value)},value:e}),m.title&&(0,te.jsx)(ee,{children:m.title})]}),(0,te.jsxs)(ne,{children:[(0,te.jsx)(Tn,{type:"text",id:"about",name:"about",placeholder:"Enter about recipe",onChange:function(n){return u(n.target.value)},value:t}),m.description&&(0,te.jsx)(ee,{children:m.description})]}),(0,te.jsxs)(Vn,{onClick:function(){j(!E)},children:[(0,te.jsx)(Kn,{children:"Category"}),(0,te.jsxs)(Yn,{children:[(0,te.jsx)(Dn,{children:r}),(0,te.jsx)(Xn.Z,{size:"18"})]}),E&&(0,te.jsx)(On,{children:x.map((function(n,e){return(0,te.jsx)(Gn,{onClick:function(){return h(n),void j(!1)},children:n},e)}))})]}),(0,te.jsxs)(Vn,{onClick:function(){v(!y)},children:[(0,te.jsx)(Kn,{children:"Cooking time"}),(0,te.jsxs)(Yn,{children:[(0,te.jsx)(Dn,{children:i}),(0,te.jsx)(Xn.Z,{size:"18"})]}),y&&(0,te.jsx)(_n,{children:Fn.map((function(n,e){return(0,te.jsx)($n,{onClick:function(){return p(n),void v(!1)},children:n},e)}))})]})]})]})},re=t(7260),oe=function(n){return n.ingredients.ingredients},ce=t(2419),ue=t(5585),ae=t(9823),de=Rn.Z.div(R||(R=(0,Un.Z)(["\n  margin-bottom: 44px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n"]))),pe=Rn.Z.p(N||(N=(0,Un.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1;\n  letter-spacing: -0.02em;\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fontSizes[7]}),(function(n){return n.theme.subtitle})),se=Rn.Z.div(W||(W=(0,Un.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 609px;\n  }\n"]))),he=Rn.Z.div(q||(q=(0,Un.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 92px;\n  height: 28px;\n  border: 1px solid ",";\n  border-radius: 18px;\n  @media screen and (min-width: 768px) {\n    width: 110px;\n    height: 32px;\n  }\n"])),(function(n){return n.theme.borderIncrement})),me=Rn.Z.button(M||(M=(0,Un.Z)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    height: 14px;\n    width: 14px;\n    color: ",";\n    @media screen and (min-width: 768px) {\n      width: 18px;\n      height: 18px;\n    }\n  }\n"])),(function(n){return n.theme.accent.iconFollow})),le=Rn.Z.button(P||(P=(0,Un.Z)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    width: 14px;\n    height: 14px;\n    color: ",";\n    @media screen and (min-width: 768px) {\n      width: 18px;\n      height: 18px;\n    }\n  }\n"])),(function(n){return n.theme.accent.iconFollow})),xe=Rn.Z.p(H||(H=(0,Un.Z)(["\n  font-size: ","px;\n  line-height: 1.29;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: 1.43;\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.incrementNumber}),(function(n){return n.theme.fontSizes[4]})),fe=Rn.Z.li(T||(T=(0,Un.Z)(["\n  width: 343px;\n  display: flex;\n  align-items: center;\n  :not(:last-child) {\n    margin-bottom: 18px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    :not(:last-child) {\n      margin-bottom: 24px;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    width: 609px;\n  }\n"]))),ge=Rn.Z.div(V||(V=(0,Un.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),we=Rn.Z.input(K||(K=(0,Un.Z)(["\n  width: 194px;\n  height: 53px;\n  margin-right: 14px;\n  padding: 16px;\n  background-color: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  outline: none;\n  font-size: ","px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  @media screen and (min-width: 768px) {\n    width: 398px;\n    height: 59px;\n    margin-right: 32px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.background.placeholder}),(function(n){return n.theme.radii[1]}),(function(n){return n.theme.borderInput}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.primaryText.text}),(function(n){return n.theme.fontSizes[5]})),Ae=Rn.Z.ul(Y||(Y=(0,Un.Z)(["\n  width: 194px;\n  height: 154px;\n  position: absolute;\n  z-index: 3;\n  background: ",";\n  box-shadow: ",";\n  border-radius: ",";\n  overflow-y: scroll;\n  padding: 8px 18px;\n  @media screen and (min-width: 768px) {\n    width: 398px;\n    height: 172px;\n  }\n"])),(function(n){return n.theme.primary.selectBg}),(function(n){return n.theme.shadows[1]}),(function(n){return n.theme.radii[1]})),Ze=Rn.Z.li(D||(D=(0,Un.Z)(["\n  font-size: 12px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  cursor: pointer;\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n  :hover,\n  :focus {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.input.input}),(function(n){return n.theme.accent.iconFollow}),(function(n){return n.theme.fontSizes[3]})),be=Rn.Z.div(O||(O=(0,Un.Z)(["\n  position: relative;\n  width: 84px;\n  height: 53px;\n  margin-right: 22px;\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    width: 97px;\n    height: 59px;\n    margin-right: 157px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-right: 60px;\n  }\n"]))),ye=Rn.Z.input(G||(G=(0,Un.Z)(["\n  width: 84px;\n  height: 53px;\n  padding: 16px 0 16px 10px;\n  background-color: ",";\n  outline: none;\n  border: 1px solid ",";\n  border-radius: ",";\n  font-size: ","px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    width: 97px;\n    height: 59px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.background.placeholder}),(function(n){return n.theme.borderInput}),(function(n){return n.theme.radii[1]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[5]})),ve=Rn.Z.div(_||(_=(0,Un.Z)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 16px 8px 16px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 50px;\n  height: 53px;\n  background-color: ",";\n  outline: none;\n  /* border: 1px solid ","; */\n  border-top: 1px solid ",";\n  border-right: 1px solid ",";\n  border-bottom: 1px solid ",";\n  border-radius: ",";\n  @media screen and (min-width: 768px) {\n    width: 55px;\n    height: 59px;\n    background-position: 28px 22px;\n  }\n  svg {\n    color: ",";\n    @media screen and (min-width: 768px) {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"])),(function(n){return n.theme.background.placeholder}),(function(n){return n.theme.borderInput}),(function(n){return n.theme.borderInput}),(function(n){return n.theme.borderInput}),(function(n){return n.theme.borderInput}),(function(n){return n.theme.radii[1]}),(function(n){return n.theme.accent.iconFollow})),Ie=Rn.Z.span($||($=(0,Un.Z)(["\n  font-size: ","px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.primaryText.text}),(function(n){return n.theme.fontSizes[5]})),ze=Rn.Z.ul(nn||(nn=(0,Un.Z)(["\n  width: 84px;\n  height: 112px;\n  padding: 12px 28px;\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: ",";\n  z-index: 5;\n  position: absolute;\n  @media screen and (min-width: 768px) {\n    width: 97px;\n    height: 128px;\n  }\n"])),(function(n){return n.theme.primary.selectBg}),(function(n){return n.theme.shadows[1]}),(function(n){return n.theme.radii[1]})),Ee=Rn.Z.li(en||(en=(0,Un.Z)(["\n  font-size: 12px;\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  :not(:last-child) {\n    margin-bottom: 4px;\n  }\n  :hover,\n  :focus {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.input.input}),(function(n){return n.theme.accent.iconFollow}),(function(n){return n.theme.fontSizes[3]})),je=Rn.Z.button(tn||(tn=(0,Un.Z)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  border: none;\n  cursor: pointer;\n  svg {\n    color: ",";\n  }\n"])),(function(n){return n.theme.mainBg}),(function(n){return n.theme.incrementNumber})),Se=Rn.Z.p(rn||(rn=(0,Un.Z)(["\n  margin-top: 4px;\n  color: ",";\n  font-size: ","px;\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    margin-top: 8px;\n  }\n"])),(function(n){return n.theme.inputError}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontSizes[4]})),Ce=Rn.Z.p(on||(on=(0,Un.Z)(["\n  margin-top: 4px;\n  color: ",";\n  font-size: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    margin-top: 8px;\n  }\n"])),(function(n){return n.theme.inputError}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontSizes[3]})),Be=function(n){var e=n.ingredients,t=n.incrementIngrList,i=n.decrementIngrList,r=n.deleteIngr,c=n.updateIngr,u=n.updateIngredient,p=n.errors,h=n.updateErrors,m=["tbs","tsp","kg","g","ml"],l=(0,d.useState)(1),x=(0,a.Z)(l,2),f=x[0],g=x[1],w=(0,d.useState)(new Array(e.length).fill(!1)),A=(0,a.Z)(w,2),Z=A[0],b=A[1],y=(0,d.useState)(new Array(e.length).fill(!1)),v=(0,a.Z)(y,2),I=v[0],z=v[1],E=(0,s.I0)(),j=(0,s.v9)(oe);(0,d.useEffect)((function(){E((0,re.a)())}),[E]);var S=(0,d.useState)(j),C=(0,a.Z)(S,2),B=C[0],Q=C[1];return(0,te.jsxs)(de,{children:[(0,te.jsxs)(se,{children:[(0,te.jsx)(pe,{children:"Ingredients"}),(0,te.jsxs)(he,{children:[(0,te.jsx)(le,{type:"button",onClick:function(){0!==f&&(i(),g((function(n){return n-1})))},children:(0,te.jsx)(ue.Z,{})}),(0,te.jsx)(xe,{children:f}),(0,te.jsx)(me,{type:"button",onClick:function(){t(),g((function(n){return n+1}))},children:(0,te.jsx)(ce.Z,{})})]})]}),(0,te.jsx)("ul",{children:e.map((function(n,t){return(0,te.jsxs)(fe,{children:[(0,te.jsxs)(ge,{children:[(0,te.jsxs)("div",{children:[(0,te.jsx)(we,{autoFocus:!0,value:e[t].name,onChange:function(n){return function(n,e,t){z((function(e){var t=(0,o.Z)(e);return t[n]=!0,t})),Q(j.filter((function(n){return n.ttl.toLowerCase().includes(e.toLowerCase())}))),u(n,e,t),h(["ingredients[".concat(n,"].name")])}(t,n.target.value)}}),p["ingredients[".concat(t,"].name")]&&(0,te.jsx)(Se,{children:p["ingredients[".concat(t,"].name")]}),I[t]&&(0,te.jsx)(Ae,{children:B.map((function(n){return(0,te.jsx)(Ze,{onClick:function(){return function(n,e,t){u(n,e,t),z((function(e){var t=(0,o.Z)(e);return t[n]=!1,t}))}(t,n.ttl,n._id)},children:n.ttl},n._id)}))})]}),(0,te.jsxs)(be,{children:[(0,te.jsx)(ye,{type:"number",value:n.unitNumber,onChange:function(n){return function(n,e){c(n,"unitNumber",e),h(["ingredients[".concat(n,"].unitNumber")])}(t,n.target.value)}}),(0,te.jsxs)(ve,{onClick:function(){return function(n){b((function(e){var t=(0,o.Z)(e);return t[n]=!t[n],t}))}(t)},children:[(0,te.jsx)(Ie,{children:e[t].unitValue}),(0,te.jsx)(Xn.Z,{size:"18"})]}),Z[t]&&(0,te.jsx)(ze,{children:m.map((function(n){return(0,te.jsx)(Ee,{onClick:function(){return function(n,e){b((function(e){var t=(0,o.Z)(e);return t[n]=!t[n],t})),c(n,"unitValue",e)}(t,n)},children:n},n)}))}),p["ingredients[".concat(t,"].unitNumber")]&&(0,te.jsx)(Ce,{children:p["ingredients[".concat(t,"].unitNumber")]})]})]}),(0,te.jsx)(je,{type:"button",onClick:function(){return function(n,e){r(n),g((function(n){return n-1})),z((function(n){var t=(0,o.Z)(n);return t[e]=!1,t}))}(n.id,t)},children:(0,te.jsx)(ae.Z,{size:"20px"})})]},t)}))})]})},Qe=Rn.Z.p(cn||(cn=(0,Un.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 24px;\n  letter-spacing: -0.02em;\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fontSizes[7]}),(function(n){return n.theme.subtitle})),ke=Rn.Z.textarea(un||(un=(0,Un.Z)(["\n  width: 343px;\n  min-height: 154px;\n  padding: 10px 16px;\n  margin: 24px 0 18px;\n  background-color: ",";\n  outline: none;\n  border: 1px solid ",";\n  border-radius: ",";\n  resize: none;\n  font-size: ",";\n  line-height: 1.43;\n  letter-spacing: -0.02em;\n  color: ",";\n  opacity: 0.5;\n  ::placeholder {\n    font-size: ",";\n    line-height: 1.43;\n    letter-spacing: -0.02em;\n    color: ",";\n    opacity: 1;\n  }\n  @media screen and (min-width: 768px) {\n    width: 505px;\n    min-height: 224px;\n    padding: 16px 22px;\n    margin: 32px 0;\n    ::placeholder {\n      font-size: ",";\n    }\n  }\n"])),(function(n){return n.theme.background.placeholder}),(function(n){return n.theme.secondary.recipePreparation}),(function(n){return n.theme.radii[1]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.input.input}),(function(n){return n.theme.fontSizes[5]})),Le=Rn.Z.p(an||(an=(0,Un.Z)(["\n  margin-bottom: 18px;\n  color: ",";\n  font-size: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.inputError}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontSizes[4]})),Fe=function(n){var e=n.onPreparationSet,t=(n.preparation,n.errors),i=(0,d.useState)(""),r=(0,a.Z)(i,2),o=r[0],c=r[1];return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(Qe,{children:"Recipe Preparation"}),(0,te.jsx)(ke,{name:"recipe",id:"recipe",placeholder:"Enter recipe",onKeyDown:function(n){var t=o;"Enter"===n.key&&(t=o.split("\n").join(", ")),e(t)},onChange:function(n){c(n.target.value)},value:o}),t.preparation&&(0,te.jsx)(Le,{children:t.preparation})]})},Je=Rn.Z.section(dn||(dn=(0,Un.Z)(["\n  padding-bottom: 72px;\n  @media screen and (min-width: 768px) {\n    padding-bottom: 100px;\n  }\n  @media screen and (min-width: 1440px) {\n    padding-bottom: 0;\n  }\n"]))),Xe=(Rn.Z.h2(pn||(pn=(0,Un.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1;\n  letter-spacing: -0.02em;\n  color: ",";\n  margin-top: 30px;\n  margin-bottom: 72px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fontSizes[8]}),(function(n){return n.theme.title.subtittle}),(function(n){return n.theme.fontSizes[9]})),Rn.Z.form(sn||(sn=(0,Un.Z)(["\n  display: flex;\n  flex-direction: column;\n"])))),Ue=Rn.Z.button(hn||(hn=(0,Un.Z)(["\n  width: 129px;\n  height: 46px;\n  border-radius: 24px 44px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  line-height: 1.43;\n  cursor: pointer;\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    width: 161px;\n    height: 52px;\n  }\n"])),(function(n){return n.theme.title.addBtnBg}),(function(n){return n.theme.primary.background}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.transition}),(function(n){return n.theme.accent.mainBtnBg})),Re=t(203),Ne=function(){var n=(0,d.useState)(""),e=(0,a.Z)(n,2),t=e[0],i=e[1],r=(0,d.useState)(""),x=(0,a.Z)(r,2),f=x[0],g=x[1],w=(0,d.useState)(""),A=(0,a.Z)(w,2),Z=A[0],b=A[1],y=(0,d.useState)("Breakfast"),v=(0,a.Z)(y,2),I=v[0],z=v[1],E=(0,d.useState)("30 min"),j=(0,a.Z)(E,2),S=j[0],C=j[1],B=(0,d.useState)([{id:Sn(),unitValue:"tbs",unitNumber:"",name:""}]),Q=(0,a.Z)(B,2),k=Q[0],L=Q[1],F=(0,d.useState)(""),J=(0,a.Z)(F,2),X=J[0],U=J[1],R=(0,d.useState)({}),N=(0,a.Z)(R,2),W=N[0],q=N[1],M=function(n){q((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,c.Z)({},n,""))}))},P=(0,d.useMemo)((function(){return k.map((function(n){var e=n.id,t=n.unitValue,i=n.unitNumber;return{measure:"".concat(i," ").concat(t),id:e}}))}),[k]),H={image:t,title:f,description:Z,cookingTime:S,category:I,ingredients:k,preparation:X},T=(0,p.s0)(),V=new FormData;V.append("thumb",t),V.append("title",f),V.append("description",Z),V.append("category",I),V.append("time",S),V.append("ingredients",JSON.stringify(P)),V.append("instructions",X);var K=(0,s.I0)(),Y=(0,s.v9)(l),D=(0,s.v9)(m);return(0,te.jsxs)(Je,{children:[(0,te.jsxs)(Xe,{onSubmit:function(n){n.preventDefault(),Bn.validate(H,{abortEarly:!1}).then((function(){K((0,h.XD)(V)).unwrap().then((function(){T("/my",{replace:!0}),Qn.Am.success("Your recipe has been successfully added")})).catch((function(n){Qn.Am.error("Something went wrong... Please, try again")}))})).catch((function(n){var e=n.inner.reduce((function(n,e){return(0,u.Z)((0,u.Z)({},n),{},(0,c.Z)({},e.path,e.message))}),{});q(e)}))},children:[(0,te.jsx)(ie,{title:f,description:Z,time:S,category:I,onInputImageSet:function(n){i(n.target.files[0]),M("image")},onTitleChange:function(n){g(n),M("title")},onDescriptionChange:function(n){b(n),M("description")},onTimeSet:function(n){C(n)},onCategorySet:function(n){z(n)},errors:W}),(0,te.jsx)(Be,{ingredients:k,incrementIngrList:function(){L((function(n){return[].concat((0,o.Z)(n),[{id:Sn(),unitValue:"tbs",unitNumber:"",name:""}])}))},decrementIngrList:function(){var n=k[k.length-1];L((function(e){return e.filter((function(e){return e.id!==n.id}))}))},deleteIngr:function(n){L(k.filter((function(e){return e.id!==n})))},updateIngr:function(n,e,t){L((function(i){var r=(0,o.Z)(i);return r[n][e]=t,r}))},updateIngredient:function(n,e,t){L((function(i){var r=(0,o.Z)(i);return r[n].name=e,r[n].id=t,r}))},errors:W,updateErrors:M}),(0,te.jsx)(Fe,{onPreparationSet:function(n){U(n),M("preparation")},preparation:X,errors:W}),(0,te.jsx)(Ue,{type:"submit",children:"Add"})]}),D&&!Y&&(0,te.jsx)(Re.a,{})]})},We=t(5861),qe=t(4687),Me=t.n(qe),Pe=t(4805),He=t(3967),Te=t(3397),Ve=function(n){return n.recipesPopular.recipes},Ke=function(n){return n.recipesPopular.isLoading},Ye=function(n){return n.recipesPopular.error},De=t(1087),Oe=Rn.Z.h3(mn||(mn=(0,Un.Z)(["\n  font-weight: ",";\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  color: ",";\n  margin-bottom: 32px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.subtitle})),Ge=Rn.Z.ul(ln||(ln=(0,Un.Z)(["\n  width: 343px;\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 319px;\n    display: block;\n  }\n"]))),_e=(0,Rn.Z)(De.rU)(xn||(xn=(0,Un.Z)(["\n  width: 343px;\n  height: 98px;\n  display: flex;\n  padding-bottom: 13px;\n  border-bottom: 1px solid rgba(112, 112, 112, 0.17);\n  :not(:last-child) {\n    margin-bottom: 24px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 319px;\n  }\n  &:hover {\n    transition: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.transition})),$e=Rn.Z.img(fn||(fn=(0,Un.Z)(["\n  width: 104px;\n  height: 85px;\n  margin-right: 12px;\n  border-radius: ",";\n  object-fit: cover;\n  @media screen and (min-width: 768px) {\n    width: 102px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 97px;\n    margin-right: 11px;\n  }\n"])),(function(n){return n.theme.radii[3]})),nt=Rn.Z.p(gn||(gn=(0,Un.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.29;\n  letter-spacing: -0.24px;\n  color: ",";\n  width: 212px;\n  margin-bottom: 3px;\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.subtitle})),et=Rn.Z.p(wn||(wn=(0,Un.Z)(["\n  font-size: 12px;\n  line-height: 1.33;\n  letter-spacing: -0.24px;\n  color: ",";\n  width: 212px;\n  height: 50px;\n  overflow: hidden;\n  @media screen and (min-width: 768px) {\n    width: 208px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 196px;\n  }\n"])),(function(n){return n.theme.recipeText})),tt=function(){var n=(0,He.Z)(),e=(0,s.I0)(),t=(0,s.v9)(Ke),i=(0,s.v9)(Ye),r=(0,Pe.useMediaQuery)({query:"(".concat(n.device.tablet," and (max-width: 1439px))")}),o=(0,d.useCallback)((0,We.Z)(Me().mark((function n(){return Me().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(r?(0,Te.z)(2):(0,Te.z)(4));case 1:case"end":return n.stop()}}),n)}))),[e,r]);(0,d.useEffect)((function(){o()}),[o]);var c=(0,s.v9)(Ve);return(0,te.jsxs)("div",{children:[(0,te.jsx)(Oe,{children:"Popular recipe"}),(0,te.jsxs)(Ge,{children:[null===c||void 0===c?void 0:c.map((function(n){var e=n.id,t=n.title,i=n.preview,r=n.desc;return(0,te.jsxs)(_e,{to:"/recipe/".concat(e),children:[(0,te.jsx)($e,{src:i,alt:t}),(0,te.jsxs)("div",{children:[(0,te.jsx)(nt,{children:t}),(0,te.jsx)(et,{children:r})]})]},e)})),t&&!i&&(0,te.jsx)(Re.a,{})]})]})},it=t(4248),rt=t(8669),ot=t(9575),ct=t(1440),ut=(0,Rn.Z)(it.r)(An||(An=(0,Un.Z)(["\n  fill: ",";\n  transition: all 300ms linear;\n"])),(function(n){return n.theme.accent.iconFollow})),at=(0,Rn.Z)(rt.r)(Zn||(Zn=(0,Un.Z)(["\n  fill: ",";\n  transition: all 300ms linear;\n"])),(function(n){return n.theme.accent.iconFollow})),dt=(0,Rn.Z)(ot.r)(bn||(bn=(0,Un.Z)(["\n  fill: ",";\n  transition: all 300ms linear;\n"])),(function(n){return n.theme.accent.iconFollow})),pt=(0,Rn.Z)(ct.r)(yn||(yn=(0,Un.Z)(["\n  fill: ",";\n  transition: all 300ms linear;\n"])),(function(n){return n.theme.accent.iconFollow})),st=Rn.Z.div(vn||(vn=(0,Un.Z)(["\n  display: none;\n  margin-bottom: 100px;\n  @media screen and (min-width: 1440px) {\n    display: block;\n  }\n"]))),ht=Rn.Z.h3(In||(In=(0,Un.Z)(["\n  font-weight: ",";\n  font-size: 24px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n  color: ",";\n  margin-bottom: 40px;\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.subtitle})),mt=Rn.Z.ul(zn||(zn=(0,Un.Z)(["\n  width: 163px;\n  height: 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),lt=(Rn.Z.li(En||(En=(0,Un.Z)(["\n  svg {\n    color: ",";\n    transition: color ",";\n    :hover {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.accent.iconFollow}),(function(n){return n.theme.transition}),(function(n){return n.theme.subtitle})),Rn.Z.a(jn||(jn=(0,Un.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 18px;\n  margin: 0;\n  padding: 0;\n\n  &:hover svg {\n    fill: ",";\n    transform: scale(1.2);\n  }\n"])),(function(n){return n.theme.title.addBtnBg}))),xt=function(){return(0,te.jsx)(te.Fragment,{children:(0,te.jsxs)(st,{children:[(0,te.jsx)(ht,{children:"Follow us"}),(0,te.jsxs)(mt,{children:[(0,te.jsx)(lt,{href:"https://uk-ua.facebook.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"facebook",children:(0,te.jsx)(ut,{})}),(0,te.jsx)(lt,{href:"https://www.youtube.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"youtube",children:(0,te.jsx)(at,{})}),(0,te.jsx)(lt,{href:"https://twitter.com/?lang=uk",target:"_blank",rel:"noopener noreferrer","aria-label":"twitter",children:(0,te.jsx)(dt,{})}),(0,te.jsx)(lt,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"instagram",children:(0,te.jsx)(pt,{})})]})]})})},ft=function(){return(0,te.jsx)(r.W2,{children:(0,te.jsxs)(r.$0,{children:[(0,te.jsx)(r.Dx,{children:"Add recipe"}),(0,te.jsxs)(r.Eq,{children:[(0,te.jsx)(Ne,{}),(0,te.jsxs)(r.ap,{children:[(0,te.jsx)(xt,{}),(0,te.jsx)(tt,{})]})]})]})})}},9590:function(n,e,t){t.d(e,{$0:function(){return p},Dx:function(){return s},Eq:function(){return h},W2:function(){return l},ap:function(){return m}});var i,r,o,c,u,a=t(168),d=t(6088),p=d.Z.section(i||(i=(0,a.Z)(["\n  padding-top: 114px;\n  padding-bottom: 100px;\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 136px;\n    padding-bottom: 200px;\n  }\n  @media screen and (min-width: 1440px) {\n    padding-top: 164px;\n  }\n"]))),s=d.Z.h2(r||(r=(0,a.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1;\n  letter-spacing: -0.02em;\n  color: ",";\n  margin-bottom: 72px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n    font-size: ",";\n  }\n  @media screen and (min-width: 1440px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fontSizes[8]}),(function(n){return n.theme.subtitle}),(function(n){return n.theme.fontSizes[9]}),(function(n){return n.theme.fontSizes[10]})),h=d.Z.div(o||(o=(0,a.Z)(["\n  @media screen and (min-width: 1440px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),m=d.Z.div(c||(c=(0,a.Z)(["\n  @media screen and (min-width: 1440px) {\n    display: block;\n    width: 319px;\n  }\n"]))),l=d.Z.div(u||(u=(0,a.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n  @media (min-width: 375px) {\n    width: 375px;\n  }\n  @media (min-width: 768px) {\n    padding: 0 32px;\n    width: 768px;\n  }\n  @media (min-width: 1440px) {\n    padding: 0 100px;\n    width: 1440px;\n  }\n"])))},2530:function(n,e,t){t.d(e,{T:function(){return i},d:function(){return r}});var i=function(n){return n.categoriesList.items},r=function(n){return n.categoriesList.recipes}},2419:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),o=t(184),c=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=c},5172:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),o=t(184),c=(0,r.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");e.Z=c},5585:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),o=t(184),c=(0,r.default)((0,o.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");e.Z=c}}]);
//# sourceMappingURL=646.598dafdb.chunk.js.map