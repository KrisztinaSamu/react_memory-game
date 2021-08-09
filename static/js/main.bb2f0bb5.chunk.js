(this["webpackJsonpreact_memory-game"]=this["webpackJsonpreact_memory-game"]||[]).push([[0],{39:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,i,r,c,o=n(0),s=n.n(o),d=n(7),l=n.n(d),j=(n(56),n(18)),u=n(8),b=(n(57),n(92)),m=n(87),f=n(88),h=n(93),O=n(84),g=n(2),p=Object(O.a)({root:{backgroundColor:"#FFF1C1",fontFamily:'"Mulish", sans-serif'}}),x=function(e){var t=e.startModal,n=e.handleGameStart,a=p();return Object(g.jsx)("div",{children:Object(g.jsxs)(b.a,{id:"alert-dialog",open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(m.a,{id:"alert-dialog-title",classes:{root:a.root},children:"Hello! Let the game begin!"}),Object(g.jsx)(f.a,{classes:{root:a.root},children:Object(g.jsx)(h.a,{onClick:n,variant:"contained",color:"primary",children:"Start"})})]})})},v=n(9),S=n(10),w=S.a.div(a||(a=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 20vh;\n"]))),C=S.a.div(i||(i=Object(v.a)(["\n  width: 30%;\n\n  @media (max-width: 768px) {\n    font-size: 0.8rem;\n    margin: 0.2rem;\n  }\n\n  @media (max-width: 576px) {\n    font-size: 0.6rem;\n  }\n"]))),y=S.a.div(r||(r=Object(v.a)(["\n  width: 30%;\n  display: inline-block;\n  font-size: 1.5rem;\n\n  @media (max-width: 768px) {\n    font-size: 1.2rem;\n    margin: 0.2rem;\n  }\n\n  @media (max-width: 576px) {\n    font-size: 1rem;\n  }\n"]))),k=S.a.div(c||(c=Object(v.a)(["\n  border-right: 3px solid #3f51b5;\n  border-left: 3px solid #3f51b5;\n  padding: 0 4rem;\n  font-size: 1.5rem;\n\n  @media (max-width: 768px) {\n    font-size: 1.2rem;\n    margin: 0.2rem;\n    padding: 0 1.5rem;\n  }\n\n  @media (max-width: 576px) {\n    font-size: 1rem;\n    padding: 0 0.25rem;\n  }\n"])));function M(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(w,{children:[Object(g.jsx)(C,{children:Object(g.jsx)("h1",{children:e.title})}),Object(g.jsx)(k,{children:e.time}),Object(g.jsx)(y,{children:e.date})]})})}var F,z,N,E,I,T=n(89),A=n(90),B=Object(O.a)({root:{backgroundColor:"#FFF1C1",fontFamily:'"Mulish", sans-serif'}}),R=function(e){var t=e.handleReStart,n=e.showModal,a=e.currentTime,i=B();return Object(g.jsx)("div",{children:Object(g.jsxs)(b.a,{id:"alert-dialog",open:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(m.a,{id:"alert-dialog-title",classes:{root:i.root},children:"Congratulations, You Won!"}),Object(g.jsxs)(T.a,{classes:{root:i.root},children:["Your playing time: ","".concat(a)," .",Object(g.jsx)(A.a,{id:"alert-dialog-description"})]}),Object(g.jsx)(f.a,{classes:{root:i.root},children:Object(g.jsx)(h.a,{onClick:t,variant:"contained",color:"primary",children:"Restart"})})]})})},D=[{name:"Beach",img:n.p+"static/media/beach.d2781dd9.jpg",id:1},{name:"Cupcakes",img:n.p+"static/media/cupcakes.f3d3c105.jpg",id:2},{name:"Tree",img:n.p+"static/media/tree.a06de9a5.jpg",id:3},{name:"Coffee",img:n.p+"static/media/coffee.2f1e6194.jpg",id:4},{name:"Roses",img:n.p+"static/media/roses.cd480d45.jpg",id:5},{name:"Waterfall",img:n.p+"static/media/waterfall.19b7aef7.jpg",id:6}],G=(n(39),Object(O.a)((function(){return{root:{fontFamily:'"Mulish", sans-serif',width:"8rem",height:"4rem"}}}))),H=S.a.div(F||(F=Object(v.a)(["\n  padding: 0.5rem 0.5rem 0 0.5rem;\n\n  @media (max-width: 576px) {\n    .button {\n      padding: 0.25rem 0.25rem 0 0.25rem;\n    }\n\n    .MuiButton-root {\n      width: 4.5rem;\n      height: 3rem;\n      font-size: 0.7rem;\n    }\n  }\n"])));function L(e){var t=e.reStart,n=e.name,a=G();return Object(g.jsx)(H,{children:Object(g.jsx)(h.a,{classes:{root:a.root},variant:"contained",color:"primary",onClick:t,children:n})})}var P,Y,J=S.a.div(z||(z=Object(v.a)([""]))),W=S.a.div(N||(N=Object(v.a)([""]))),_=S.a.div(E||(E=Object(v.a)([""]))),q=S.a.p(I||(I=Object(v.a)(["\n  margin: 0 0.25rem;\n  font-weight: 900;\n"])));function K(e){var t=e.timer,n=e.reStart,a=e.showModal,i=e.parentCallback,r=function(){var e="0".concat(t%60,"s").slice(-3),n="".concat(Math.floor(t/60)),a="0".concat(n%60,"m").slice(-3);return"".concat(a," : ").concat(e)};return Object(o.useEffect)((function(){return function(){!0===Boolean(a)&&i(r())}}),[t,a]),Object(g.jsxs)(J,{className:"timer-wrapper",children:[Object(g.jsxs)(W,{children:[Object(g.jsx)(q,{children:"Time:"}),Object(g.jsx)(q,{children:r()})]}),Object(g.jsx)(_,{children:Object(g.jsx)(L,{name:"Restart",reStart:n})})]})}function Q(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(""),r=Object(u.a)(i,2),c=r[0],s=r[1],d=new Date,l=d.getFullYear()+"."+String(d.getMonth()+1).padStart(2,"0")+"."+String(d.getDate()).padStart(2,"0"),j=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")+":"+String(d.getSeconds()).padStart(2,"0");Object(o.useEffect)((function(){var e=setInterval((function(){a(j),s(l)}),1e3);return function(){return clearInterval(e)}}));var b=(new Date).getHours(),m="Good ".concat((b<12?"Morning":b<17&&"Afternoon")||"Evening","!");return Object(g.jsxs)("div",{className:"clock-design",children:[Object(g.jsx)("p",{children:c}),Object(g.jsx)("p",{children:n}),Object(g.jsx)("p",{children:m})]})}var U=S.a.div(P||(P=Object(v.a)([""]))),V=S.a.p(Y||(Y=Object(v.a)(["\n  font-size: 1.3rem;\n  @media (max-width: 576px) {\n    font-size: 1rem;\n  }\n"])));function X(){return Object(g.jsx)(U,{children:Object(g.jsx)(V,{children:"\xa9 Copyright 2021"})})}var Z,$=n(91),ee=Object(O.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:"50vh",right:0,left:"25vw",zIndex:1,border:"1px solid",padding:e.spacing(2),backgroundColor:e.palette.background.paper,width:"50vw"}}}));function te(e){var t=e.key,n=e.className,a=e.onClick,i=e.img,r=e.isActive,c=ee(),o=s.a.useState(!1),d=Object(u.a)(o,2),l=d[0],j=d[1];return Object(g.jsx)($.a,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:function(){j(!0)},children:Object(g.jsxs)("div",{className:n,onClick:a,children:[l&&!r?Object(g.jsx)("div",{className:c.dropdown,children:"Press the Restart button!"}):null,Object(g.jsxs)("div",{className:"inner",children:[Object(g.jsx)("div",{className:"front",children:Object(g.jsx)("img",{src:i,alt:"frontimg",className:"img"})}),Object(g.jsx)("div",{className:"back",onClick:function(){j((function(e){return!e}))}})]})]},t)})}var ne=S.a.div(Z||(Z=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  height: 70vh;\n"])));function ae(e){var t=e.cards,n=e.openCard,a=e.matched,i=e.handleFlip,r=e.isActive;return Object(g.jsx)(ne,{children:t.map((function(e,t){var c,o=e.img,s=e.id;return c=!1,r&&(n.includes(t)||a.includes(s))&&(c=!0),Object(g.jsx)(te,{id:s,img:o,className:"memo-card ".concat(c?"flipped":""),isActive:r,onClick:function(){return i(t)}},t)}))})}function ie(){function e(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}function t(t){for(var n=t.length;n>0;n--){e(t,n-1,Math.floor(Math.random()*n))}return t}var n=Object(o.useState)(!0),a=Object(u.a)(n,2),i=a[0],r=a[1],c=Object(o.useState)(0),s=Object(u.a)(c,2),d=s[0],l=s[1],b=Object(o.useState)(!1),m=Object(u.a)(b,2),f=m[0],h=m[1],O=Object(o.useState)(t(D.concat(D))),p=Object(u.a)(O,2),v=p[0],S=p[1],w=Object(o.useState)([]),C=Object(u.a)(w,2),y=C[0],k=C[1],F=Object(o.useState)([]),z=Object(u.a)(F,2),N=z[0],E=z[1],I=Object(o.useState)(!1),T=Object(u.a)(I,2),A=T[0],B=T[1],G=Object(o.useState)(null),H=Object(u.a)(G,2),L=H[0],P=H[1],Y=function(){B(!1),l(0),k([]),E([]),S(t(D.concat(D))),h(!0)};Object(o.useEffect)((function(){var e=null;return f?e=setInterval((function(){l((function(e){return e+1}))}),1e3):f||0===d||clearInterval(e),function(){return clearInterval(e)}}),[f,d]);Object(o.useEffect)((function(){var e=v[y[0]],t=v[y[1]];y<2||(t&&e.id===t.id&&E((function(t){return[].concat(Object(j.a)(t),[e.id])})),2===y.length&&setTimeout((function(){k((function(){return[]}))}),1e3))}),[y,v]);var J=function(e){P(e)};Object(o.useEffect)((function(){N.length===D.length&&(B(!0),J())}),[N]),Object(o.useEffect)((function(){return function(){!0===Boolean(A)&&h(!1)}}),[d,A]);return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(x,{startModal:i,handleGameStart:function(){r(!1),Y()}}),Object(g.jsx)(M,{className:"header",title:"Memory Game",time:Object(g.jsx)(K,{timer:d,showModal:A,parentCallback:J,reStart:Y}),date:Object(g.jsx)(Q,{})}),Object(g.jsx)(ae,{cards:v,openCard:y,handleFlip:function(e){k((function(t){return 0===t.length?[e]:1===t.length&&t[0]!==e?[t[0],e]:t}))},matched:N,isActive:f}),Object(g.jsx)(R,{showModal:A,currentTime:L,handleReStart:function(){B(!1),Y()}}),Object(g.jsx)(X,{})]})}var re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};l.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(ie,{})}),document.getElementById("root")),re()}},[[65,1,2]]]);
//# sourceMappingURL=main.bb2f0bb5.chunk.js.map