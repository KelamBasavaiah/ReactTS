(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{11:function(e,t,c){},17:function(e,t,c){e.exports={card:"Gallery_card___Ps2X"}},30:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(22),r=c.n(s),j=(c(30),c(11),c(8)),i=c(1),l=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)(j.b,{to:"/",children:"Hi !"})}),Object(i.jsx)("div",{className:"navbar",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:"/",exact:!0,activeStyle:{color:"#2a6496"},children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:"/Table",exact:!0,activeStyle:{color:"#2a6496"},children:"Table"})}),Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:"/Gallery",exact:!0,activeStyle:{color:"#2a6496"},children:"Gallery"})}),Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:"/FAQ",exact:!0,activeStyle:{color:"#2a6496"},children:"FAQ"})})]})})]})})},o=c(2),b=c(24),u={count:0};function d(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}var O=a.a.memo((function(e){Object(b.a)(e);var t=Object(n.useReducer)(d,u),c=Object(o.a)(t,2),s=c[0],r=c[1],j=a.a.useState("intial"),l=Object(o.a)(j,2),O=l[0],h=(l[1],Object(n.useMemo)((function(){return O+" lol"}),[s,O]));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:["Call bcak text ",O," and use memo ",h]})}),"Reducer Count: ",s.count,Object(i.jsx)("button",{onClick:function(){return r({type:"decrement"})},children:"-"}),Object(i.jsx)("button",{onClick:function(){return r({type:"increment"})},children:"+"})]})})),h=a.a.createContext(3);var x=function(){var e=a.a.useState(""),t=Object(o.a)(e,2),c=t[0],s=t[1],r=a.a.useState(""),j=Object(o.a)(r,2),l=j[0],b=j[1];return a.a.useCallback((function(){return c+" KB"}),[c]),Object(n.useRef)(),Object(i.jsxs)(h.Provider,{value:6,children:[Object(i.jsx)("p",{children:"Home Page"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},placeholder:"memo ex"}),Object(i.jsx)("input",{type:"text",value:l,onChange:function(e){b(e.target.value)},placeholder:"call back support"})]}),Object(i.jsx)(O,{})]})};var p=function(){return Object(i.jsx)("p",{children:"Faq Page"})},m=c(12),f=c.n(m),v=c(17),g=c.n(v),y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),l=j[0],b=j[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),O=d[0],h=d[1],x=Object(n.useState)(0),p=Object(o.a)(x,2),m=p[0],v=p[1],y=Object(n.useState)(10),C=Object(o.a)(y,1)[0],S=Object(n.useState)(0),k=Object(o.a)(S,2),N=k[0],P=k[1],F=Object(n.useState)(0),L=Object(o.a)(F,2),R=L[0],D=L[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){D(e.length),s(e),b(!0),s(e.slice(m,m+C)),P(Math.ceil(e.length/C)),console.log(c,l,m,N)}))}),[O,m]);var T=null;c&&(T=Object(i.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(i.jsxs)("div",{className:g.a.card,children:[Object(i.jsx)("img",{src:e.url,className:g.a.img}),Object(i.jsxs)("p",{children:["Title:- ",e.title]})]})}))}));return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Records count ",R," . By custom hook."]})," ",Object(i.jsxs)("p",{children:["Refreshed ",O]}),Object(i.jsx)("button",{onClick:function(){return h(O+1)},children:"refresh"}),Object(i.jsx)("br",{}),T,Object(i.jsx)("div",{className:"paginationPostion",children:Object(i.jsx)(f.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:N,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;v(t*C)},containerClassName:"pagination",activeClassName:"active"})})]})},C=c(3);var S=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){a(e.length)}))}),[]),c},k=c(25);var N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),l=j[0],b=j[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),O=d[0],h=d[1],x=Object(n.useState)(0),p=Object(o.a)(x,2),m=p[0],v=p[1],g=Object(n.useState)(5),y=Object(o.a)(g,1)[0],C=Object(n.useState)(0),N=Object(o.a)(C,2),P=N[0],F=N[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){s(e),b(!0),s(e.slice(m,m+y)),F(Math.ceil(e.length/y)),console.log(c,l,m,P)}))}),[O,m]);var L=null;c&&(L=Object(i.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.id}),Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{children:e.body})]},e.id)}))}));var R=S();return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Records count ",R," . By custom hook."]})," ",Object(i.jsxs)("p",{children:["Refreshed ",O]}),Object(i.jsx)("button",{onClick:function(){return h(O+1)},children:"refresh"}),Object(i.jsx)("button",{className:"paginationPostion",children:Object(i.jsx)(k.CSVLink,{data:c,filename:"my-file.csv",children:"Download me"})}),Object(i.jsxs)("table",{id:"holidayTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Title "}),Object(i.jsx)("th",{children:"body"})]})}),Object(i.jsx)("tbody",{children:l?L:Object(i.jsx)("tr",{style:{color:"blue",textalign:"center"},children:Object(i.jsx)("td",{children:"Data is loading ......"})})})]}),Object(i.jsx)("div",{className:"paginationPostion",children:Object(i.jsx)(f.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:P,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;v(t*y)},containerClassName:"pagination",activeClassName:"active"})})]})};var P=function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)(C.c,{children:[Object(i.jsx)(C.a,{path:"/",exact:!0,component:x}),Object(i.jsx)(C.a,{path:"/Table",exact:!0,component:N}),Object(i.jsx)(C.a,{path:"/Gallery",exact:!0,component:y}),Object(i.jsx)(C.a,{path:"/FAQ",exact:!0,component:p})]})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),F()}},[[39,1,2]]]);
//# sourceMappingURL=main.3c81bc10.chunk.js.map