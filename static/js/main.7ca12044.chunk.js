(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{11:function(e,t,c){},17:function(e,t,c){e.exports={card:"Gallery_card___Ps2X"}},31:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(22),l=c.n(i),s=(c(31),c(11),c(8)),r=c(0),j=function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(s.b,{to:"/",children:"Hi !"})}),Object(r.jsx)("div",{className:"navbar",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/",exact:!0,activeStyle:{color:"#2a6496"},children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/Table",exact:!0,activeStyle:{color:"#2a6496"},children:"Table"})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/Gallery",exact:!0,activeStyle:{color:"#2a6496"},children:"Gallery"})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/userForm",exact:!0,activeStyle:{color:"#2a6496"},children:"User Form"})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/FAQ",exact:!0,activeStyle:{color:"#2a6496"},children:"FAQ"})})]})})]})})},o=c(2),b=c(24),u={count:0};function d(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}var h=a.a.memo((function(e){Object(b.a)(e);var t=Object(n.useReducer)(d,u),c=Object(o.a)(t,2),i=c[0],l=c[1],s=a.a.useState("intial"),j=Object(o.a)(s,2),h=j[0],O=(j[1],Object(n.useMemo)((function(){return h+" lol"}),[i,h]));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Call bcak text ",h," and use memo ",O]})}),"Reducer Count: ",i.count,Object(r.jsx)("button",{onClick:function(){return l({type:"decrement"})},children:"-"}),Object(r.jsx)("button",{onClick:function(){return l({type:"increment"})},children:"+"})]})})),O=a.a.createContext("");function x(){var e=Object(n.useContext)(O);return Object(r.jsxs)(r.Fragment,{children:[console.log(e),Object(r.jsx)(O.Consumer,{children:function(e){return Object(r.jsxs)("p",{children:["Passed down Context value :- ",e]})}})]})}var m=function(){var e=a.a.useState(""),t=Object(o.a)(e,2),c=t[0],i=t[1],l=a.a.useState(""),s=Object(o.a)(l,2),j=s[0],b=s[1];return a.a.useCallback((function(){return c+" KB"}),[c]),Object(n.useRef)(),Object(r.jsxs)(O.Provider,{value:c,children:[Object(r.jsx)("p",{children:"Home Page"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){i(e.target.value)},placeholder:"memo ex"}),Object(r.jsx)("input",{type:"text",value:j,onChange:function(e){b(e.target.value)},placeholder:"call back support"})]}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{})]})};var p=function(){return Object(r.jsx)("p",{children:"Faq Page"})},v=c(12),g=c.n(v),f=c(17),y=c.n(f),C=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),j=s[0],b=s[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),h=d[0],O=d[1],x=Object(n.useState)(0),m=Object(o.a)(x,2),p=m[0],v=m[1],f=Object(n.useState)(10),C=Object(o.a)(f,1)[0],S=Object(n.useState)(0),k=Object(o.a)(S,2),F=k[0],N=k[1],P=Object(n.useState)(0),D=Object(o.a)(P,2),w=D[0],L=D[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){L(e.length),i(e),b(!0),i(e.slice(p,p+C)),N(Math.ceil(e.length/C)),console.log(c,j,p,F)}))}),[h,p]);var R=null;c&&(R=Object(r.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(r.jsxs)("div",{className:y.a.card,children:[Object(r.jsx)("img",{src:e.url,className:y.a.img}),Object(r.jsxs)("p",{children:["Title:- ",e.title]})]})}))}));return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Records count ",w," . By custom hook."]})," ",Object(r.jsxs)("p",{children:["Refreshed ",h]}),Object(r.jsx)("button",{onClick:function(){return O(h+1)},children:"refresh"}),Object(r.jsx)("br",{}),R,Object(r.jsx)("div",{className:"paginationPostion",children:Object(r.jsx)(g.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:F,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;v(t*C)},containerClassName:"pagination",activeClassName:"active"})})]})},S=c(3);var k=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){a(e.length)}))}),[]),c},F=c(25);var N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),j=s[0],b=s[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),h=d[0],O=d[1],x=Object(n.useState)(0),m=Object(o.a)(x,2),p=m[0],v=m[1],f=Object(n.useState)(5),y=Object(o.a)(f,1)[0],C=Object(n.useState)(0),S=Object(o.a)(C,2),N=S[0],P=S[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){i(e),b(!0),i(e.slice(p,p+y)),P(Math.ceil(e.length/y)),console.log(c,j,p,N)}))}),[h,p]);var D=null;c&&(D=Object(r.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.id}),Object(r.jsx)("td",{children:e.title}),Object(r.jsx)("td",{children:e.body})]},e.id)}))}));var w=k();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Records count ",w," . By custom hook."]})," ",Object(r.jsxs)("p",{children:["Refreshed ",h]}),Object(r.jsx)("button",{onClick:function(){return O(h+1)},children:"refresh"}),Object(r.jsx)("button",{className:"paginationPostion",children:Object(r.jsx)(F.CSVLink,{data:c,filename:"my-file.csv",children:"Download me"})}),Object(r.jsxs)("table",{id:"holidayTable",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Title "}),Object(r.jsx)("th",{children:"body"})]})}),Object(r.jsx)("tbody",{children:j?D:Object(r.jsx)("tr",{style:{color:"blue",textalign:"center"},children:Object(r.jsx)("td",{children:"Data is loading ......"})})})]}),Object(r.jsx)("div",{className:"paginationPostion",children:Object(r.jsx)(g.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:N,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;v(t*y)},containerClassName:"pagination",activeClassName:"active"})})]})},P=(c(40),c(26)),D=function e(t,c,n,a,i,l){Object(P.a)(this,e),this.name=void 0,this.mobile=void 0,this.mail=void 0,this.language=void 0,this.city=void 0,this.gender=void 0,this.name=t,this.mobile=c,this.mail=n,this.language=a,this.city=i,this.gender=l},w=[{value:"english",label:"English"},{value:"hindi",label:"Hindi"},{value:"spanish",label:"Spanish"},{value:"arabic",label:"Arabic"}],L=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=(t[0],t[1]),a=new D;function i(e){var t=e.target,c=t.name,n=t.value,i=t.checked;switch(c){case"name":a.name=n;break;case"mobile":a.mobile=+n;break;case"mail":a.mail=n;break;case"language":var l,s;if(i)null===(l=a.language)||void 0===l||l.push(n);else null===(s=a.language)||void 0===s||s.filter((function(e){return e!==n}));break;case"gender":i&&(a.gender=n)}}return Object(r.jsxs)("div",{id:"deatilsForm",children:[Object(r.jsx)("p",{children:"Deatils Form"}),Object(r.jsxs)("form",{id:"iform",onSubmit:function(e){e.preventDefault(),console.log(a),alert(JSON.stringify(a)),c(a)},children:[Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"Name : "}),Object(r.jsx)("input",{type:"text",name:"name",value:a.name,onChange:i})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"mobile: "}),Object(r.jsx)("input",{type:"number",name:"mobile",value:a.mobile,onChange:i})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"mail: "}),Object(r.jsx)("input",{type:"text",name:"mail",value:a.mail,onChange:i})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"Language : "}),w.map((function(e,t){var c;return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",name:"language",value:e.value,checked:null===(c=a.language)||void 0===c?void 0:c.includes(e.value),onChange:i})," ",e.label]},t)}))]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"city : "}),Object(r.jsxs)("select",{name:"city",id:"city",onChange:function(e){return a.city=e.target.value},children:[Object(r.jsx)("option",{children:"None"}),Object(r.jsx)("option",{value:"HYD",children:"HYD"}),Object(r.jsx)("option",{value:"Chennai",children:"Chennai"}),Object(r.jsx)("option",{value:"Pune",children:"Pune"}),Object(r.jsx)("option",{value:"Delhi",children:"Delhi"})]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"Gender : "}),Object(r.jsx)("input",{type:"radio",id:"male",value:"male",name:"gender",onChange:i}),Object(r.jsx)("label",{htmlFor:"male",children:"Male"}),Object(r.jsx)("input",{type:"radio",id:"female",value:"female",name:"gender",onChange:i}),Object(r.jsx)("label",{htmlFor:"female",children:"Female"})]})]}),Object(r.jsx)("button",{value:"Submit",children:"Submit"})]})]})};var R=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsxs)(S.c,{children:[Object(r.jsx)(S.a,{path:"/",exact:!0,component:m}),Object(r.jsx)(S.a,{path:"/Table",exact:!0,component:N}),Object(r.jsx)(S.a,{path:"/Gallery",exact:!0,component:C}),Object(r.jsx)(S.a,{path:"/userForm",exact:!0,component:L}),Object(r.jsx)(S.a,{path:"/FAQ",exact:!0,component:p})]})})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),i(e),l(e)}))};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.7ca12044.chunk.js.map