(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[30],{1481:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return A}));var n,i,r=c(5),o=c(6),a=c(2),j=c(51),s=c(16),l=c(1),d=c(4),b=c(7),x=c(64),O=c(19),u=c(60),p=c(505),h=c(11),g=c(574),f=c(223),m=c(14),v=c(71),y=c(166),T=c(898),k=c(285),I=c(141),S=c(120),w=c(385),E=c(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}));var N=Object(d.e)(l.r)(n||(n=Object(o.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(m.a)().account,c=Object(b.b)().t,n=Object(a.useState)(i.TOKEN1),o=Object(r.a)(n,2),d=o[0],A=o[1],C=Object(a.useState)(s.d),K=Object(r.a)(C,2),q=K[0],B=K[1],G=Object(a.useState)(null),L=Object(r.a)(G,2),X=L[0],D=L[1],P=Object(f.b)(null!==q&&void 0!==q?q:void 0,null!==X&&void 0!==X?X:void 0),J=Object(r.a)(P,2),M=J[0],Y=J[1],F=Object(v.f)();Object(a.useEffect)((function(){Y&&F(Y)}),[Y,F]);var R=M===f.a.NOT_EXISTS||Boolean(M===f.a.EXISTS&&Y&&s.e.equal(Y.reserve0.raw,s.e.BigInt(0))&&s.e.equal(Y.reserve1.raw,s.e.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===Y||void 0===Y?void 0:Y.liquidityToken),W=Boolean(V&&s.e.greaterThan(V.raw,s.e.BigInt(0))),_=Object(a.useCallback)((function(e){d===i.TOKEN0?B(e):D(e)}),[d]),z=Object(E.jsx)(x.b,{padding:"45px 10px",children:Object(E.jsx)(l.fc,{textAlign:"center",children:c(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),H=Object(l.Dc)(Object(E.jsx)(g.a,{onCurrencySelect:_,selectedCurrency:null!==(e=d===i.TOKEN0?X:q)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),Q=Object(r.a)(H,1)[0];return Object(E.jsxs)(w.a,{children:[Object(E.jsx)(l.Xb,{component:Object(E.jsxs)(l.r,{mb:"15px",variant:"tertiary",endIcon:Object(E.jsx)(l.G,{}),children:[Object(E.jsx)("img",{src:"/images/routers/1.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),"SwissChange"]}),children:Object(E.jsxs)(l.Yb,{to:"/pancakefind",as:j.a,color:"text",children:[Object(E.jsx)("img",{src:"/images/routers/2.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),c("PancakeSwap")]})}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(S.b,{title:c("Import Pool"),subtitle:c("Import an existing pool"),backTo:"/pool"}),Object(E.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(E.jsx)(N,{endIcon:Object(E.jsx)(l.G,{}),onClick:function(){Q(),A(i.TOKEN0)},children:q?Object(E.jsxs)(h.d,{children:[Object(E.jsx)(u.a,{currency:q}),Object(E.jsx)(l.fc,{ml:"8px",children:q.symbol})]}):Object(E.jsx)(l.fc,{ml:"8px",children:c("Select a Token")})}),Object(E.jsx)(O.b,{children:Object(E.jsx)(l.a,{})}),Object(E.jsx)(N,{endIcon:Object(E.jsx)(l.G,{}),onClick:function(){Q(),A(i.TOKEN1)},children:X?Object(E.jsxs)(h.d,{children:[Object(E.jsx)(u.a,{currency:X}),Object(E.jsx)(l.fc,{ml:"8px",children:X.symbol})]}):Object(E.jsx)(l.fc,{as:h.d,children:c("Select a Token")})}),W&&Object(E.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(E.jsx)(l.fc,{textAlign:"center",children:c("Pool Found!")}),Object(E.jsx)(T.a,{to:"/pool",children:Object(E.jsx)(l.fc,{textAlign:"center",children:c("Manage this pool.")})})]}),q&&X?M===f.a.EXISTS?W&&Y?Object(E.jsx)(p.a,{pair:Y}):Object(E.jsx)(x.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(l.fc,{textAlign:"center",children:c("You don\u2019t have liquidity in this pool yet.")}),Object(E.jsx)(T.a,{to:"/add/".concat(Object(k.a)(q),"/").concat(Object(k.a)(X)),children:Object(E.jsx)(l.fc,{textAlign:"center",children:c("Add Liquidity")})})]})}):R?Object(E.jsx)(x.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(l.fc,{textAlign:"center",children:c("No pool found.")}),Object(E.jsx)(T.a,{to:"/add/".concat(Object(k.a)(q),"/").concat(Object(k.a)(X)),children:c("Create pool.")})]})}):M===f.a.INVALID?Object(E.jsx)(x.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsx)(l.fc,{textAlign:"center",fontWeight:500,children:c("Invalid pair.")})})}):M===f.a.LOADING?Object(E.jsx)(x.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsxs)(l.fc,{textAlign:"center",children:[c("Loading"),Object(E.jsx)(I.a,{})]})})}):null:z]})]})]})}},898:function(e,t,c){"use strict";var n,i=c(6),r=c(51),o=c(4),a=Object(o.e)(r.a)(n||(n=Object(i.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=a}}]);
//# sourceMappingURL=30.572563a3.chunk.js.map