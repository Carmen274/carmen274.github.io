(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1125:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return ie}));var c=n(15),r=n(0),a=n(7),i=n(2),s=n(18),o=n(182),b=n(3),u=n.n(b),l=n(205);function j(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(l.a)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var c=0,r=function(){};return{s:r,n:function(){return c>=t.length?{done:!0}:{done:!1,value:t[c++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}var d,p,h,O,x,f,g,m,v,w,S,k,y,z,E,H,C,A,F,V,N,L,T,Q,D,P,U,B,I=n(12),R=n(16),W=n(63),Z=n(31),G=n(9),K=n(11),M=n.n(K),Y=n(56),$=n(19),X=n(108),q=n(159),J=n(137),_=function(){var t=Object(r.useState)([]),e=Object(R.a)(t,2),n=e[0],c=e[1],a=Object(Z.c)().account,i=Object(J.a)().fastRefresh;return Object(r.useEffect)((function(){a&&function(){var t=Object(I.a)(u.a.mark((function t(){var e,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=q.a.map((function(t){return{address:Object($.m)(),name:"pendingCake",params:[t.pid,a]}})),t.next=3,Object(Y.a)(X,e);case 3:n=t.sent,r=q.a.map((function(t,e){return Object(G.a)(Object(G.a)({},t),{},{balance:new M.a(n[e])})})),c(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[a,i]),n},tt=n(44),et=n(111),nt=function(){var t=Object(r.useState)([]),e=Object(R.a)(t,2),n=e[0],c=e[1],a=Object(Z.c)().account,i=Object(J.a)().fastRefresh;return Object(r.useEffect)((function(){a&&function(){var t=Object(I.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=q.a.map((function(t){return{address:Object($.m)(),name:"pendingCake",params:[t.pid,a]}})),t.next=3,Object(Y.a)(X,e);case 3:n=t.sent,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[a,i]),n},ct=n(27),rt=n(29),at=n(867),it=n(289),st=n(1),ot=function(t){var e=t.value,n=t.decimals,c=t.fontSize,a=void 0===c?"40px":c,s=t.lineHeight,o=void 0===s?"1":s,b=t.prefix,u=void 0===b?"":b,l=t.bold,j=void 0===l||l,d=t.color,p=void 0===d?"text":d,h=Object(it.useCountUp)({start:0,end:e,duration:1,separator:",",decimals:void 0!==n?n:e<0?4:e>1e5?0:3}),O=h.countUp,x=h.update,f=Object(r.useRef)(x);return Object(r.useEffect)((function(){f.current(e)}),[e,f]),Object(st.jsxs)(i.Nb,{bold:j,fontSize:a,style:{lineHeight:o},color:p,children:[O,u]})},bt=function(t){return Object(st.jsx)(ot,Object(G.a)({fontSize:"14px",lineHeight:"1.1",color:"textDisabled",prefix:"HUF",bold:!1,decimals:0},t))},ut=n(874),lt=a.e.div(d||(d=Object(c.a)(["\n  margin-bottom: 24px;\n"]))),jt=function(){var t=Object(s.b)().t,e=Object(Z.c)().account,n=nt().reduce((function(t,e){var n=new M.a(e);return n.eq(0)?t:t+n.div(rt.j).toNumber()}),0),c=Object(ct.G)(),r=new M.a(n).multipliedBy(c).toNumber();return e?Object(st.jsxs)(lt,{children:[Object(st.jsx)(at.a,{value:n,lineHeight:"1.5"}),c.gt(0)&&Object(st.jsx)(ut.a,{value:r}),c.gt(0)&&Object(st.jsx)(bt,{value:344.611*r})]}):Object(st.jsx)(i.Nb,{color:"textDisabled",style:{lineHeight:"76px"},children:t("Locked")})},dt=n(864),pt=n(21),ht=function(){var t=Object(s.b)().t,e=Object(dt.a)(Object($.d)()).balance,n=Object(ct.G)(),c=new K.BigNumber(Object(pt.c)(e)).multipliedBy(n).toNumber();return Object(Z.c)().account?Object(st.jsxs)(st.Fragment,{children:[Object(st.jsx)(at.a,{value:Object(pt.c)(e),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.gt(0)?Object(st.jsx)(ut.a,{value:c}):Object(st.jsx)("br",{}),Object(st.jsx)(bt,{value:357.95*c})]}):Object(st.jsx)(i.Nb,{color:"textDisabled",style:{lineHeight:"54px"},children:t("Locked")})},Ot=Object(a.e)(i.s)(p||(p=Object(c.a)(["\n background-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n  min-height: 376px;\n   opacity: 0.92;\n\n    ) ;\n\n "]))),xt=a.e.div(h||(h=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),ft=a.e.img(O||(O=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),gt=a.e.div(x||(x=Object(c.a)(["\n  color: ",";\n  font-size: 17px;\n"])),(function(t){return t.theme.colors.textSubtle})),mt=a.e.div(f||(f=Object(c.a)(["\n  margin-top: 24px;\n"]))),vt=function(){var t=Object(r.useState)(!1),e=Object(R.a)(t,2),n=e[0],c=e[1],a=Object(Z.c)().account,o=Object(s.b)().t,b=_(),l=Object(tt.n)(),d=b.filter((function(t){return t.balance.toNumber()>0})),p=Object(r.useCallback)(Object(I.a)(u.a.mark((function t(){var e,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(!0),e=j(d),t.prev=2,e.s();case 4:if((n=e.n()).done){t.next=15;break}return r=n.value,t.prev=6,t.next=9,Object(W.b)(l,r.pid,a);case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(6);case 13:t.next=4;break;case 15:t.next=20;break;case 17:t.prev=17,t.t1=t.catch(2),e.e(t.t1);case 20:return t.prev=20,e.f(),t.finish(20);case 23:c(!1);case 24:case"end":return t.stop()}}),t,null,[[2,17,20,23],[6,11]])}))),[a,d,l]);return Object(st.jsx)(Ot,{children:Object(st.jsxs)(i.t,{children:[Object(st.jsx)(i.Q,{scale:"xl",mb:"15px",color:"secondary",children:o("Mining & Staking")}),Object(st.jsx)(ft,{src:"/images/tokens/VIZSLASWAP.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(st.jsxs)(xt,{children:[Object(st.jsxs)(gt,{children:[o("Vizslaswap to Harvest"),":"]}),Object(st.jsx)(jt,{})]}),Object(st.jsxs)(xt,{children:[Object(st.jsxs)(gt,{children:[o("Vizslaswap in Wallet"),":"]}),Object(st.jsx)(ht,{})]}),Object(st.jsx)(mt,{children:a?Object(st.jsx)(i.o,{id:"harvest-all",disabled:d.length<=0||n,onClick:p,width:"100%",children:n?o("Collecting VizslaSwap"):o("Harvest all (%count%)",{count:d.length})}):Object(st.jsx)(et.a,{width:"100%"})})]})})},wt=n(193),St=Object(a.e)(i.s)(g||(g=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.92;\n  max-height: 100%;\n"]))),kt=a.e.img(m||(m=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),yt=a.e.div(v||(v=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),zt=a.e.div(w||(w=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(t){return t.theme.colors.textSubtle})),Et=function(){var t=Object(s.b)().t,e=Object(dt.d)(),n=Object(dt.b)(Object($.d)()),c=Object(ct.G)(),r=e?e.minus(n):new wt.a(0),a=(Object(pt.c)(r),c.times(r),e?e.minus(0):new wt.a(0)),o=c.times(a),b=c.times(o);c.times(344.61).times(a);return Object(st.jsx)(St,{children:Object(st.jsxs)(i.t,{children:[Object(st.jsx)(zt,{children:t("VIZSLASWAP Stats")}),Object(st.jsx)(kt,{src:"/images/tokens/VIZSLASWAP.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(st.jsxs)(yt,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Price")}),Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(b),decimals:8,prefix:"$"})]}),Object(st.jsxs)(yt,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Market Cap")}),Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(o),decimals:0,prefix:"$"})]}),Object(st.jsxs)(yt,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Total Supply")}),e&&Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(e),decimals:0})]}),Object(st.jsxs)(yt,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Total Burned")}),Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(n),decimals:0})]}),Object(st.jsxs)(yt,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("VIZSLASWAP/block")}),Object(st.jsx)(at.a,{fontSize:"17px",decimals:0,value:0})]}),Object(st.jsxs)(yt,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Active Pools")}),Object(st.jsx)(at.a,{fontSize:"17px",decimals:0,value:0})]})]})})},Ht=Object(a.e)(i.s)(S||(S=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.92;\n  max-height: 100%;\n"]))),Ct=a.e.img(k||(k=Object(c.a)(["\nmargin-bottom: 10px;\n\n"]))),At=a.e.div(y||(y=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Ft=a.e.div(z||(z=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(t){return t.theme.colors.textSubtle})),Vt=function(){var t=Object(s.b)().t,e=Object(dt.d)(),n=Object(dt.b)(Object($.i)()).times(1e9),c=Object(ct.G)(),r=e?e.minus(n):new wt.a(0),a=(Object(pt.c)(r),e?e.minus(0):new wt.a(0)),o=c.times(a),b=(c.times(o),Object(ct.H)().times(1e18)),u=b.times(1e19);b.times(344.61).times(1e19);return Object(st.jsx)(Ht,{children:Object(st.jsxs)(i.t,{children:[Object(st.jsx)(Ft,{children:t("HVI Stats")}),Object(st.jsx)(Ct,{src:"/images/tokens/hvi.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(st.jsxs)(At,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("HVI price")}),Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(b),decimals:17,prefix:"$"})]}),Object(st.jsxs)(At,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Market Cap")}),Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(u),decimals:0,prefix:"$"})]}),Object(st.jsxs)(At,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Total Supply")}),e&&Object(st.jsx)(at.a,{fontSize:"17px",value:1e19,decimals:0})]}),Object(st.jsxs)(At,{children:[Object(st.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:t("Total Burned")}),Object(st.jsx)(at.a,{fontSize:"17px",value:Object(pt.c)(n),decimals:0})]})]})})},Nt=Object(a.e)(i.s)(E||(E=Object(c.a)(["\n  opacity: 0.92;\n  font-size: 40px;\n  max-width: 100%;\n height: 100%;\n color: ",";\n font-weight: 900;\n background-color: rgb(0,0,0);\n  margin-bottom: 8px;\n"])),(function(t){return t.theme.colors.textSubtle})),Lt=a.e.div(H||(H=Object(c.a)(["\n  align-items: center;\n  font-size: 38px;\n  overflow: scroll;\n  max-width: 100%;\n height: 330px;\n color: ",";\n font-weight: 900;\n bottom: 10px;\n margin-top: 10px;\n"])),(function(t){return t.theme.colors.textSubtle})),Tt=(a.e.div(C||(C=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(t){return t.theme.colors.contrast})),a.e.div(A||(A=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n max-width: 100%;\n height: 100%;\n overflow: scroll;\n color: ",";\n font-weight: 900;\n  "])),(function(t){return t.theme.colors.textSubtle})),function(){var t=Object(s.b)().t,e=Object(dt.d)(),n=Object(dt.b)(Object($.d)()),c=Object(ct.G)(),r=e?e.minus(n):new wt.a(0);Object(pt.c)(r),c.times(r);return Object(st.jsx)(Nt,{children:Object(st.jsxs)(i.t,{children:[t("Announcements"),Object(st.jsxs)(Lt,{children:[Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1516008844824133633",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner11.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515953309076574211",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner10.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1513986221386747904",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner5.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515637080684220422",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner4.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515570905195421696",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner3.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515012436968976387",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner-2.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514800749712056324",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner-3.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514574778639990785",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner-4.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514438388593606658",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner-5.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514302826922528768",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner-6.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(st.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514075985993515009",target:"blank",children:[" ",Object(st.jsx)("img",{src:"/images/banner-7.png",alt:"hvi",height:"auto",width:"100%"})]})]})]})})}),Qt=Object(a.e)(i.s)(F||(F=Object(c.a)(["\n  align-items: center;\n  flex: 1; \n  opacity: 0.85;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 170px;\n      "]))),Dt=function(){var t=Object(s.b)().t,e=function(){var t=Object(r.useState)(null),e=Object(R.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){!function(){var t=Object(I.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x86B2A344f55727066703D5290d90fE06a72Be2F5&address=0x451dEEdFFd8aB6c163C26F39853C8014C6a7845b&tag=latest&apikey=7K36W5M328YT6KSTY4EGMJBHYGH51R7ZUQ");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Unable to fetch data:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()()}),[c]),n}(),n=function(){var t=Object(r.useState)(null),e=Object(R.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){!function(){var t=Object(I.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x451dEEdFFd8aB6c163C26F39853C8014C6a7845b&apikey=5XY3FPZB96KUQZHKPE5B1FTWPYV95JURIB");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Unable to fetch data:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()()}),[c]),n}(),c=function(){var t=Object(r.useState)(null),e=Object(R.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){!function(){var t=Object(I.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x451dEEdFFd8aB6c163C26F39853C8014C6a7845b&address=0x2193442608fEDb1571Cf0B8C43A76AE299b16035&tag=latest&apikey=Z6XDXK78A5RHSDYXFAR34RFWBBDNKRIDFH");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Unable to fetch data:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()()}),[c]),n}(),a=c?c.result.toLocaleString("en-US",{maximumFractionDigits:0}):null,o=n?n.result.toLocaleString("en-US",{maximumFractionDigits:0}):null,b=Object(ct.G)(),l=e?e.result.toLocaleString("en-US",{maximumFractionDigits:0}):null,j=b.times(l).div(o).times(a).times(2).div(1e18);return Object(st.jsx)(Qt,{children:Object(st.jsxs)(i.t,{children:[Object(st.jsx)(i.Q,{scale:"lg",mb:"0px",color:"secondary",children:t("Total Value Locked (TVL)")}),e?Object(st.jsxs)(st.Fragment,{children:[Object(st.jsxs)(i.Q,{scale:"xl",children:["$".concat(j)," "]}),Object(st.jsx)(i.Nb,{color:"textSubtle",children:t("Across all LPs and VizslaSwap Pool")})]}):Object(st.jsx)(i.Db,{height:66})]})})},Pt=n(943),Ut=n.n(Pt),Bt=n(104),It=n(49),Rt=n(112),Wt=n(303),Zt=Object(a.f)(V||(V=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),Gt=Object(a.e)(i.s)(N||(N=Object(c.a)(["\nbackground: linear-gradient(\n  240deg,\n  rgb(0,0,0) 0%,\n    rgb(0,0,0) 10%,\n    rgb(0, 0, 0)20%,\n    rgb(13, 36, 34) 30%,\n    rgb(18, 48, 46) 40%,\n    rgb(34,89,84) 50%,\n    rgb(18, 48, 46)60%,\n    rgb(13, 36, 34) 70%,\n    rgb(0, 0, 0) 80%,\n    rgb(0,0,0) 90%,\n    rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  opacity: 0.88;\n  \n  "," {\n    margin: 0;\n    max-width: none;\n    \n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),Zt,(function(t){return t.theme.mediaQueries.lg})),Kt=Object(a.e)(i.Q).attrs({scale:"xl"})(L||(L=Object(c.a)(["\n  line-height: 44px;\n"]))),Mt=function(){var t=Object(r.useState)(!0),e=Object(R.a)(t,2),n=e[0],c=e[1],a=Object(s.b)().t,o=Object(ct.f)().data,b=Object(ct.G)(),l=Object(It.b)();Object(r.useEffect)((function(){(function(){var t=Object(I.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(Object(Rt.c)(Rt.d.map((function(t){return t.pid}))));case 3:return t.prev=3,c(!1),t.finish(3);case 6:case"end":return t.stop()}}),t,null,[[0,,3,6]])})));return function(){return t.apply(this,arguments)}})()()}),[l,c]);var j=Object(r.useMemo)((function(){if(b.gt(0)){var t=o.map((function(t){if(0!==t.pid&&"0X"!==t.multiplier&&t.lpTotalInQuoteToken&&t.quoteToken.busdPrice){var e=new M.a(t.lpTotalInQuoteToken).times(t.quoteToken.busdPrice);return Object(Wt.a)(new M.a(t.poolWeight),b,e)}return null})),e=Ut()(t);return null===e||void 0===e?void 0:e.toLocaleString("en-US",{maximumFractionDigits:2})}return null}),[b,o]),d=j||"-",p=a("Earn up to %highestApr% APR in Mining",{highestApr:d}).split(d),h=Object(R.a)(p,2),O=h[0],x=h[1];return Object(st.jsx)(Gt,{children:Object(st.jsx)(Bt.b,{exact:!0,activeClassName:"active",to:"/liquiditymining",id:"farm-apr-cta",children:Object(st.jsxs)(i.t,{children:[Object(st.jsx)(i.Q,{color:"secondary",scale:"lg",children:O}),Object(st.jsx)(Kt,{color:"text",children:j&&!n?"".concat(j,"%"):Object(st.jsx)(i.Db,{animation:"pulse",variant:"rect",height:"44px"})}),Object(st.jsxs)(i.P,{justifyContent:"space-between",children:[Object(st.jsx)(i.Q,{color:"secondary",scale:"lg",children:x}),Object(st.jsx)(i.e,{mt:30,color:"secondary"})]})]})})})},Yt=n(203),$t=n.n(Yt),Xt=n(69),qt=Object(a.f)(T||(T=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),Jt=Object(a.e)(i.s)(Q||(Q=Object(c.a)(["\nbackground: linear-gradient(\n  240deg,\n  rgb(0,0,0) 0%,\n    rgb(0,0,0) 10%,\n    rgb(0, 0, 0)20%,\n    rgb(13, 36, 34) 30%,\n    rgb(18, 48, 46) 40%,\n    rgb(34,89,84) 50%,\n    rgb(18, 48, 46)60%,\n    rgb(13, 36, 34) 70%,\n    rgb(0, 0, 0) 80%,\n    rgb(0,0,0) 90%,\n    rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),qt,(function(t){return t.theme.mediaQueries.lg})),_t=Object(a.e)(i.Q).attrs({scale:"xl"})(D||(D=Object(c.a)(["\n  line-height: 44px;\n"]))),te=Xt.a.filter((function(t){return!t.isFinished&&!t.earningToken.symbol.includes("CAKE")})),ee=[$t()(te,["sortOrder","pid"],["desc","desc"]).slice(0,2).map((function(t){return t.earningToken.symbol}))].join(", "),ne=function(){var t=(0,Object(s.b)().t)("Earn %assets% in Pools",{assets:ee}).split(ee),e=Object(R.a)(t,2),n=e[0],c=e[1];return Object(st.jsx)(Jt,{children:Object(st.jsx)(Bt.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(st.jsxs)(i.t,{children:[Object(st.jsx)(i.Q,{color:"secondary",scale:"lg",children:n}),Object(st.jsx)(_t,{color:"text",children:ee}),Object(st.jsxs)(i.P,{justifyContent:"space-between",children:[Object(st.jsx)(i.Q,{color:"secondary",scale:"lg",children:c}),Object(st.jsx)(i.e,{mt:30,color:"primary"})]})]})})})},ce=a.e.div(P||(P=Object(c.a)(["\nalign-items: center;\nbackground-repeat: no-repeat;\nbackground-position: top center;\nbackground-image: url('images/banner1.jpg');\nbackground-size: 100% 100%;\nopacity: 0.92;\nborder-radius: 25px;\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nmargin: auto;\nmargin-bottom: 24px;\nmargin-top: 0px;\npadding-top: 115px;\ntext-align: center;\n  "," {\n    height: 360px;\n    padding-top: 0;\n        background-position: left center, right center;\n }\n"])),(function(t){return t.theme.mediaQueries.lg})),re=Object(a.e)(i.i)(U||(U=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.lg})),ae=Object(a.e)(i.i)(B||(B=Object(c.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.lg})),ie=function(){var t=Object(s.b)().t;return Object(st.jsxs)(o.a,{children:[Object(st.jsxs)(ce,{children:[Object(st.jsx)(i.Q,{as:"h1",scale:"xl",mb:"24px",color:"secondary",children:t("")}),Object(st.jsx)(i.Nb,{children:t("")})]}),Object(st.jsxs)("div",{children:[Object(st.jsxs)(re,{children:[Object(st.jsx)(vt,{}),Object(st.jsx)(Tt,{}),Object(st.jsx)(Et,{}),Object(st.jsx)(Vt,{})]}),Object(st.jsxs)(ae,{children:[Object(st.jsx)(Dt,{}),Object(st.jsx)(Mt,{}),Object(st.jsx)(ne,{})]})]})]})}},864:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return m}));var c,r=n(3),a=n.n(r),i=n(9),s=n(12),o=n(16),b=n(0),u=n(11),l=n.n(u),j=n(31),d=n(32),p=n(23),h=n(55),O=n(137),x=n(290);!function(t){t.NOT_FETCHED="not-fetched",t.SUCCESS="success",t.FAILED="failed"}(c||(c={}));var f=function(){var t=Object(O.a)().slowRefresh,e=Object(b.useState)(),n=Object(o.a)(e,2),c=n[0],r=n[1];return Object(b.useEffect)((function(){function t(){return(t=Object(s.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(d.d)(),t.next=3,e.methods.totalSupply().call();case 3:n=t.sent,r(new l.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),c},g=function(t){var e=Object(b.useState)(p.d),n=Object(o.a)(e,2),c=n[0],r=n[1],i=Object(O.a)().slowRefresh,u=Object(h.a)();return Object(b.useEffect)((function(){(function(){var e=Object(s.a)(a.a.mark((function e(){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.a)(t,u),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=e.sent,r(new l.a(c));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u,t,i]),c},m=function(){var t=Object(b.useState)(p.d),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(j.c)().account,i=Object(x.a)(),u=i.lastUpdated,d=i.setLastUpdated,O=Object(h.a)();return Object(b.useEffect)((function(){r&&function(){var t=Object(s.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.eth.getBalance(r);case 2:e=t.sent,c(new l.a(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[r,O,u,c]),{balance:n,refresh:d}};e.a=function(t){var e=c.NOT_FETCHED,n=c.SUCCESS,r=c.FAILED,u=Object(b.useState)({balance:p.d,fetchStatus:e}),x=Object(o.a)(u,2),f=x[0],g=x[1],m=Object(h.a)(),v=Object(j.c)().account,w=Object(O.a)().fastRefresh;return Object(b.useEffect)((function(){v&&function(){var e=Object(s.a)(a.a.mark((function e(){var c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(d.a)(t,m),e.prev=1,e.next=4,c.methods.balanceOf(v).call();case 4:s=e.sent,g({balance:new l.a(s),fetchStatus:n}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),g((function(t){return Object(i.a)(Object(i.a)({},t),{},{fetchStatus:r})}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()()}),[v,t,m,w,n,r]),f}},867:function(t,e,n){"use strict";var c=n(0),r=n(289),a=n(2),i=n(1);e.a=function(t){var e=t.value,n=t.decimals,s=t.fontSize,o=void 0===s?"40px":s,b=t.lineHeight,u=void 0===b?"1":b,l=t.prefix,j=void 0===l?"":l,d=t.bold,p=void 0===d||d,h=t.color,O=void 0===h?"text":h,x=Object(r.useCountUp)({start:0,end:e,duration:1,separator:",",decimals:void 0!==n?n:e<0?4:e>1e5?0:3}),f=x.countUp,g=x.update,m=Object(c.useRef)(g);return Object(c.useEffect)((function(){m.current(e)}),[e,m]),Object(i.jsxs)(a.Nb,{bold:p,fontSize:o,style:{lineHeight:u},color:O,children:[j,f]})}},874:function(t,e,n){"use strict";var c=n(9),r=(n(0),n(867)),a=n(1);e.a=function(t){return Object(a.jsx)(r.a,Object(c.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},t))}},943:function(t,e,n){var c=n(468),r=n(469),a=n(131);t.exports=function(t){return t&&t.length?c(t,a,r):void 0}}}]);
//# sourceMappingURL=9.a1b704e9.chunk.js.map