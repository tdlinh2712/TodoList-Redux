(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{149:function(e,t,o){e.exports=o(263)},161:function(e,t){},163:function(e,t){},197:function(e,t){},198:function(e,t){},250:function(e,t,o){},262:function(e,t,o){},263:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(11),r=o.n(c),l=o(30),d=o(38),i=o(83),m=o(35),p=o(24),u=o(84),s=Object(d.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notCompleted:[],completed:[],userId:Object(u.v4)()},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var o={id:t.payload.todoID,content:t.payload.todoContent},a=[].concat(Object(p.a)(e.notCompleted),[o]);return Object(m.a)({},e,{notCompleted:a});case"DELETE_TODO":var n,c=t.payload.completed?e.completed:e.notCompleted,r=c.map((function(e,o){return e.id===t.payload.todoID&&(n=o),e}));return r.splice(n,1),t.payload.completed?Object(m.a)({},e,{completed:r}):Object(m.a)({},e,{notCompleted:r});case"SET_COMPLETE":var l,d,i;t.payload.newCompleteStatus?(l=e.notCompleted,d=e.completed):(l=e.completed,d=e.notCompleted);var s=(l=l.map((function(e,o){return e.id===t.payload.todoID&&(i=o),e}))).splice(i,1);return d=[].concat(Object(p.a)(d),[s[0]]),t.payload.newCompleteStatus?Object(m.a)({},e,{completed:d,notCompleted:l}):Object(m.a)({},e,{completed:l,notCompleted:d});case"EDIT_TODO":var f,E=t.payload,b=E.todoID,v=E.completeStatus,C=E.newContent,O=e.notCompleted;return v&&(O=e.completed),(O=O.map((function(e,t){return e.id===b&&(f=t),e})))[f].content=C,v?Object(m.a)({},e,{completed:O}):Object(m.a)({},e,{notCompleted:O});case"FETCH_STATE":return console.log(t.payload),t.payload;default:return e}}}),f=(o(240),Object(d.d)(s,Object(d.a)(i.a))),E=(o(250),o(63)),b=o(31),v=o(135),C=o(136),O=o(142),h=o(86),y=o.n(h);y.a.initializeApp({apiKey:"AIzaSyBXcODWkpEcUDrysnHHBFUEcFN27UkvUYE",authDomain:"todo-app-react-d63f8.firebaseapp.com",databaseURL:"https://todo-app-react-d63f8.firebaseio.com",projectId:"todo-app-react-d63f8",storageBucket:"todo-app-react-d63f8.appspot.com",messagingSenderId:"694457276641",appId:"1:694457276641:web:a5fccf38ecfd2649f7bfa0",measurementId:"G-TXD87QFSWV"});var g=y.a.database(),j=g;var D=o(55),I=o(296),x=o(300),T=o(302),w=o(301),N=o(293),S=o(137),k=o.n(S),F=o(138),B=o.n(F),A=o(140),_=o.n(A),W=o(139),H=o.n(W),L=o(298),U=o(299),z=Object(N.a)({cardContainer:{margin:"0 0 8px 0",position:"relative",maxWidth:"100%",wordWrap:"break-word"},EditIcon:{position:"absolute",right:"50px",bottom:"5px",opacity:"0.5"},DeleteIcon:{position:"absolute",right:"5px",bottom:"5px",opacity:"0.5"},CompleteIcon:{position:"absolute",right:"95px",bottom:"5px",color:"red"},Content:{marginTop:"auto",marginBottom:"auto"},CompletedContent:{marginTop:"auto",marginBottom:"auto",textDecoration:"line-through"},EditForm:{resize:"none",maxWidth:"100%",overflow:"hidden",outline:"none",border:"none"},EditFormContainer:{width:"100%",marginBottom:"5px"},EditFormCard:{minHeight:"50px",padding:"6px 8px 2px"},SaveButton:{margin:"10px 0 10px"}}),M=Object(l.b)()((function(e){var t=e.todoID,o=e.content,c=e.completed,r=e.dispatch,l=z(),d=Object(a.useState)(!1),i=Object(D.a)(d,2),m=i[0],p=i[1],u=Object(a.useState)(o),s=Object(D.a)(u,2),f=s[0],E=s[1],b=function(){!function(e,t){t?g.ref("/completed/".concat(e)).remove():g.ref("/notCompleted/".concat(e)).remove()}(t,c),r(function(e,t){return function(o){o({type:"DELETE_TODO",payload:{todoID:e,completed:t}})}}(t,c))},v=function(){!function(e,t){var o=t?"notCompleted":"completed",a=t?"completed":"notCompleted",n=g.ref("/".concat(o,"/").concat(e)),c=g.ref("/".concat(a,"/").concat(e));n.once("value",(function(e){c.set(e.val(),(function(e){e?"undefined"!==typeof console&&console.error&&console.error(e):n.remove()}))}))}(t,!c),r(function(e,t){return function(o){o({type:"SET_COMPLETE",payload:{todoID:e,newCompleteStatus:t}})}}(t,!c))},C=function(e){E(e.target.value)},O=function(){p(!1),function(e,t,o){var a=t?"completed":"notCompleted";g.ref("/".concat(a,"/").concat(e)).update({content:o})}(t,c,f),r(function(e,t,o){return function(a){a({type:"EDIT_TODO",payload:{todoID:e,completeStatus:t,newContent:o}})}}(t,c,f))};return m?n.a.createElement("div",{className:l.EditFormContainer},n.a.createElement(I.a,{className:l.EditFormCard},n.a.createElement(L.a,{"aria-label":"minimum height",className:l.EditForm,rowsMin:1,value:f,autoFocus:!0,onChange:C,onBlur:function(){return p(!1)}})),n.a.createElement(U.a,{variant:"outlined",color:"secondary",onMouseDown:O,className:l.SaveButton},"Save")):n.a.createElement("div",{className:l.cardContainer},n.a.createElement(I.a,null,n.a.createElement(x.a,null,n.a.createElement(w.a,{"aria-label":"delete",className:l.EditIcon,onClick:function(){return p(!0)}},n.a.createElement(k.a,null)),n.a.createElement(w.a,{"aria-label":"delete",onClick:b,className:l.DeleteIcon},n.a.createElement(B.a,null)),c?n.a.createElement(w.a,{"aria-label":"delete",onClick:v,className:l.CompleteIcon},n.a.createElement(H.a,null)):n.a.createElement(w.a,{"aria-label":"delete",onClick:v,className:l.CompleteIcon},n.a.createElement(_.a,null)),n.a.createElement(T.a,{gutterBottom:!0,className:c?l.CompletedContent:l.Content},o))))})),J=o(23),P=o(304),X=o(141),G=o.n(X),K=o(303),Q=Object(N.a)((function(e){return{margin:{margin:e.spacing(1)},FormContainer:{width:"100%",marginBottom:"20px"},TextField:{margin:"10px 10px 20px 100px",width:"470px"},AddButton:{}}})),R=Object(l.b)()((function(e){var t,o=e.dispatch,c=Q(),r=Object(a.useState)(""),l=Object(D.a)(r,2),d=l[0],i=l[1];return n.a.createElement("div",{className:c.FormContainer},n.a.createElement(P.a,{id:"filled-basic",className:c.TextField,placeholder:"Write a new note...",value:d,onChange:function(e){i(e.target.value)}}),n.a.createElement(K.a,(t={size:"medium",color:"secondary","aria-label":"add",className:c.margin},Object(J.a)(t,"className",c.AddButton),Object(J.a)(t,"onClick",(function(){if(d){var e=function(e){var t=Date.now();return g.ref("/notCompleted/".concat(t)).set({content:e,id:t}),t}(d);o(function(e,t){return{type:"ADD_TODO",payload:{todoContent:e,todoID:t}}}(d,e)),i("")}})),t),n.a.createElement(G.a,null)))})),V=(o(262),function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.notCompleted,o=e.completed;e.userId;return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"App-title"},"Todo list")),n.a.createElement(R,null),n.a.createElement("div",{className:"todos-body"},n.a.createElement("div",{className:"todos-container"},t.map((function(e,t){return n.a.createElement(M,{todoID:e.id,key:e.id,content:e.content,completed:!1})}))),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"todos-container"},o.map((function(e,t){return n.a.createElement(M,{todoID:e.id,key:e.id,content:e.content,completed:!0})}))))))}}]),t}(a.Component)),Y=Object(l.b)((function(e){return{notCompleted:e.reducer.notCompleted,completed:e.reducer.completed,userId:e.userId}}),(function(e){return e((function(e){var t={completed:[],notCompleted:[]};j.ref("/"),j.ref("/").once("value",(function(e){var o=e.val();if(o){if(o.completed){var a=Object.values(o.completed);t.completed=a}if(o.notCompleted){var n=Object.values(o.notCompleted);t.notCompleted=n}}})).then((function(){return e(function(e){return{type:"FETCH_STATE",payload:e}}(t))}))})),{dispatch:e}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(l.a,{store:f},n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[149,1,2]]]);
//# sourceMappingURL=main.8aee63f5.chunk.js.map