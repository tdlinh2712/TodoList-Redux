(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{142:function(e,t,a){e.exports=a(245)},154:function(e,t){},156:function(e,t){},190:function(e,t){},191:function(e,t){},242:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),l=a(26),i=a(33),d=a(126),m=a(30),u=a(19),p=a(77),s=Object(i.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notCompleted:[],completed:[],userId:Object(p.v4)()},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};case"ADD_TODO":var a=Object(p.v4)(),n={id:a,content:t.payload},o=[].concat(Object(u.a)(e.notCompleted),[n]);return Object(m.a)({},e,{notCompleted:o});case"DELETE_TODO":var c,r=t.payload.completed?e.completed:e.notCompleted,l=r.map((function(e,a){return e.id===t.payload.todoID&&(c=a),e}));return l.splice(c,1),t.payload.completed?Object(m.a)({},e,{completed:l}):Object(m.a)({},e,{notCompleted:l});case"SET_COMPLETE":var i,d,s;t.payload.newCompleteStatus?(i=e.notCompleted,d=e.completed):(i=e.completed,d=e.notCompleted);var E=(i=i.map((function(e,a){return e.id===t.payload.todoID&&(s=a),e}))).splice(s,1);return d=[].concat(Object(u.a)(d),[E[0]]),t.payload.newCompleteStatus?Object(m.a)({},e,{completed:d,notCompleted:i}):Object(m.a)({},e,{completed:i,notCompleted:d});case"EDIT_TODO":var b,f=t.payload,O=f.todoID,C=f.completeStatus,v=f.newContent,h=e.notCompleted;return C&&(h=e.completed),(h=h.map((function(e,t){return e.id===O&&(b=t),e})))[b].content=v,C?Object(m.a)({},e,{completed:h}):Object(m.a)({},e,{notCompleted:h});default:return e}}}),E=a(127),b=a.n(E),f=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),O=Object(i.d)(s,f,Object(i.a)(d.a));O.subscribe(b()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(O.getState())}),1e3));a(242);var C=a(56),v=a(27),h=a(128),g=a(129),y=a(135),j=a(49),I=a(278),D=a(282),w=a(284),N=a(283),S=a(275),T=a(130),x=a.n(T),k=a(131),_=a.n(k),A=a(133),B=a.n(A),F=a(132),L=a.n(F),M=a(280),W=a(281),J=Object(S.a)({cardContainer:{margin:"0 0 8px 0",position:"relative",maxWidth:"100%",wordWrap:"break-word"},EditIcon:{position:"absolute",right:"50px",bottom:"5px",opacity:"0.5"},DeleteIcon:{position:"absolute",right:"5px",bottom:"5px",opacity:"0.5"},CompleteIcon:{position:"absolute",right:"95px",bottom:"5px",color:"red"},Content:{marginTop:"auto",marginBottom:"auto"},CompletedContent:{marginTop:"auto",marginBottom:"auto",textDecoration:"line-through"},EditForm:{resize:"none",maxWidth:"100%",overflow:"hidden",outline:"none",border:"none"},EditFormContainer:{width:"100%",marginBottom:"5px"},EditFormCard:{minHeight:"50px",padding:"6px 8px 2px"},SaveButton:{margin:"10px 0 10px"}}),P=Object(l.b)()((function(e){var t=e.todoID,a=e.content,c=e.completed,r=e.dispatch,l=J(),i=Object(n.useState)(!1),d=Object(j.a)(i,2),m=d[0],u=d[1],p=Object(n.useState)(a),s=Object(j.a)(p,2),E=s[0],b=s[1],f=function(){r(function(e,t){return function(a){a({type:"DELETE_TODO",payload:{todoID:e,completed:t}})}}(t,c))},O=function(){r(function(e,t){return function(a){a({type:"SET_COMPLETE",payload:{todoID:e,newCompleteStatus:t}})}}(t,!c))},C=function(e){b(e.target.value)},v=function(){u(!1),r(function(e,t,a){return function(n){n({type:"EDIT_TODO",payload:{todoID:e,completeStatus:t,newContent:a}})}}(t,c,E))};return m?o.a.createElement("div",{className:l.EditFormContainer},o.a.createElement(I.a,{className:l.EditFormCard},o.a.createElement(M.a,{"aria-label":"minimum height",className:l.EditForm,rowsMin:1,value:E,autoFocus:!0,onChange:C,onBlur:function(){return u(!1)}})),o.a.createElement(W.a,{variant:"outlined",color:"secondary",onMouseDown:v,className:l.SaveButton},"Save")):o.a.createElement("div",{className:l.cardContainer},o.a.createElement(I.a,null,o.a.createElement(D.a,null,o.a.createElement(N.a,{"aria-label":"delete",className:l.EditIcon,onClick:function(){return u(!0)}},o.a.createElement(x.a,null)),o.a.createElement(N.a,{"aria-label":"delete",onClick:f,className:l.DeleteIcon},o.a.createElement(_.a,null)),c?o.a.createElement(N.a,{"aria-label":"delete",onClick:O,className:l.CompleteIcon},o.a.createElement(L.a,null)):o.a.createElement(N.a,{"aria-label":"delete",onClick:O,className:l.CompleteIcon},o.a.createElement(B.a,null)),o.a.createElement(w.a,{gutterBottom:!0,className:c?l.CompletedContent:l.Content},a))))})),z=a(286),H=a(134),$=a.n(H),q=a(285),G=Object(S.a)((function(e){return{margin:{margin:e.spacing(1)}}})),K=Object(l.b)()((function(e){var t=e.dispatch,a=G(),c=Object(n.useState)(""),r=Object(j.a)(c,2),l=r[0],i=r[1];return o.a.createElement("div",null,o.a.createElement(z.a,{id:"filled-basic",placeholder:"Write a new note...",value:l,onChange:function(e){i(e.target.value)}}),o.a.createElement(q.a,{size:"medium",color:"secondary","aria-label":"add",className:a.margin,onClick:function(){l&&(t({type:"ADD_TODO",payload:l}),i(""))}},o.a.createElement($.a,null)))})),Q=(a(244),function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).action=function(e){a.props.simpleAction()},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.notCompleted,a=e.completed,n=e.userId;return console.log(n),o.a.createElement("div",null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"App-title"},"Todo list")),o.a.createElement(K,null),o.a.createElement("div",{className:"todos-body"},o.a.createElement("div",{className:"todos-container"},t.map((function(e,t){return o.a.createElement(P,{todoID:e.id,key:e.id,content:e.content,completed:!1})}))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"todos-container"},a.map((function(e,t){return o.a.createElement(P,{todoID:e.id,key:e.id,content:e.content,completed:!0})}))))))}}]),t}(n.Component)),R=Object(l.b)((function(e){return{notCompleted:e.reducer.notCompleted,completed:e.reducer.completed,userId:e.userId}}),(function(e){return{simpleAction:function(){return e((function(e){e({type:"SIMPLE_ACTION",payload:"result_of_simple_action"})}))}}}))(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(l.a,{store:O},o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.004cce8b.chunk.js.map