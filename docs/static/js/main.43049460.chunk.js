(this["webpackJsonpmath-jedi"]=this["webpackJsonpmath-jedi"]||[]).push([[0],{13:function(e,t,n){e.exports={root:"Input_root__1foEE",input:"Input_input__3nhed",label:"Input_label__qEcwg"}},17:function(e,t,n){e.exports={root:"Page_root__nR9AH",content:"Page_content__3cK0B",actions:"Page_actions__1KgjX"}},18:function(e,t,n){e.exports={questionBox:"SessionScreen_questionBox__edXCE",content:"SessionScreen_content__34ABf",question:"SessionScreen_question__gr-5D",number:"SessionScreen_number__2o89z"}},20:function(e,t,n){e.exports={button:"Button_button__Z6vcF"}},27:function(e,t,n){e.exports=n.p+"static/media/jedi.c1bafbcf.svg"},31:function(e,t,n){e.exports={table:"ReportScreen_table__1kiRX"}},34:function(e,t,n){e.exports=n(48)},39:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),o=n.n(l);n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(27),c=n.n(i);n(40);function u(){return r.a.createElement("div",{style:{fontFamily:"Star Jedi",fontSize:52}},"Math Jedi")}var s=n(9),d=n(20),v=n.n(d),f=n(10);function g(e){var t=e.children,n=e.onClick,a=Object(s.a)(e,["children","onClick"]);return r.a.createElement("button",Object.assign({className:v.a.button,onClick:n},a),t)}function m(e){var t=e.children,n=e.to,a=Object(s.a)(e,["children","to"]);return r.a.createElement(f.b,Object.assign({to:n,className:v.a.button},a),t)}var h=n(11),b=n(2),E=n(5);function p(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}var O=n(3),j={student:{name:"",email:"",config:{questionsRange:{start:10,end:99},totalSums:200,totalQuestionsEachSum:6,percentageOfQuestionInNegative:30},currentSessionId:null},sessions:[]},x=Object(a.createContext)();function y(e){var t=e.children,n=Object(a.useState)((function(){return localStorage.getItem("math-jedi")?JSON.parse(localStorage.getItem("math-jedi")):j})),l=Object(E.a)(n,2),o=l[0],i=l[1];return Object(a.useEffect)((function(){o&&localStorage.setItem("math-jedi",JSON.stringify(o))}),[o]),r.a.createElement(x.Provider,{value:{state:o,setState:i}},t)}function S(e){var t=e.questionsRange,n=t.start,a=t.end,r=e.totalSums,l=e.totalQuestionsEachSum,o=e.percentageOfQuestionInNegative,i=function e(t){var n=t.start,a=t.end,r=t.percentageOfQuestionInNegative,l=t.total,o=t.prevNumber,i=Math.random()<=r/100,c=Math.round(Math.random()*(a-n)+n),u=c*(i?-1:1);return u+l<0||u%10===0||u%11===0||Math.abs(o)===c?e({start:n,end:a,percentageOfQuestionInNegative:r,total:l,prevNumber:o}):u};return Object(h.a)(Array(r).keys()).map((function(){return function(e){for(var t=e.start,n=e.end,a=e.percentageOfQuestionInNegative,r=e.totalQuestionsEachSum,l=[],o=0,c=0,u=0;u<r;u++){var s=i({start:t,end:n,percentageOfQuestionInNegative:a,total:o,prevNumber:c});c=s,o+=s,l.push(s)}return l}({totalQuestionsEachSum:l,percentageOfQuestionInNegative:o,end:a,start:n})}))}var C={left:"flex-start",center:"center",right:"flex-end"},w={top:"flex-start",center:"center",bottom:"flex-end"};function A(e){var t=e.children,n=e.heightFull,a=e.horizontalAlign,l=e.verticalAlign,o=e.gap,i=e.style,c=Object(s.a)(e,["children","heightFull","horizontalAlign","verticalAlign","gap","style"]),u={display:"flex",flexDirection:"column",height:n?"100%":"none"};return a in C&&(u.alignItems=C[a]),l in w&&(u.justifyContent=w[l]),o>0&&(t=t.map((function(e,t){if(t>0){var n,a,l=null!==(n=null===e||void 0===e||null===(a=e.props)||void 0===a?void 0:a.style)&&void 0!==n?n:{};return r.a.cloneElement(e,{key:t,style:Object(b.a)({marginTop:o},l)})}return e}))),r.a.createElement("div",Object.assign({style:Object(b.a)(Object(b.a)({},u),i)},c),t)}function N(){var e=function(){var e,t=Object(a.useContext)(x).state;return""!==(null===t||void 0===t||null===(e=t.student)||void 0===e?void 0:e.name)}(),t=function(){var e=Object(a.useContext)(x).setState,t=Object(O.f)();return function(){var n=p();e((function(e){var t=e.sessions.filter((function(t){return t.id!==e.student.currentSessionId})),a={id:n,startAt:(new Date).toISOString(),endAt:null,questions:S(e.student.config),answers:[]},r={student:Object(b.a)({},e.student),sessions:[].concat(Object(h.a)(t),[a])};return r.student.currentSessionId=a.id,r})),t.push("/session/".concat(n))}}(),n=function(){var e,t=Object(a.useContext)(x).state,n=null===t||void 0===t||null===(e=t.sessions)||void 0===e?void 0:e.filter((function(e){return e.id===t.student.currentSessionId}));return(null===n||void 0===n?void 0:n.length)>0?n[0]:null}(),l=function(){var e=Object(a.useContext)(x).state;return e.sessions&&e.sessions.length>0?e.sessions[e.sessions.length-1].id:null}(),o=Object(O.f)(),i=Object(a.useCallback)((function(){null!==n?confirm("This will delete current active session and start a new one ")&&t():t()}),[n,t]),s=null===n||void 0===n?void 0:n.id,d=Object(a.useCallback)((function(){o.push("/session/".concat(s))}),[s,o]);return r.a.createElement(A,{horizontalAlign:"center",verticalAlign:"center",heightFull:!0},r.a.createElement(A,{horizontalAlign:"center",gap:10},r.a.createElement("img",{src:c.a,alt:"",width:200,height:200}),r.a.createElement(u,null),r.a.createElement("div",{style:{fontSize:25,marginTop:0}},"May the force be with you"),r.a.createElement(A,null,!e&&r.a.createElement(m,{to:"/register"},"Register"),e&&r.a.createElement(m,{to:"/register"},"Settings"),null!==n&&r.a.createElement(g,{onClick:d},"Continue"),null!==l&&r.a.createElement(g,{onClick:function(){return o.push("/session/".concat(l))}},"Last Score"),e&&r.a.createElement(g,{onClick:i},"New"))))}var k=n(13),I=n.n(k);function _(e){var t=e.style,n=e.label,l=e.value,o=e.onChange,i=e.autoCaps,c=void 0!==i&&i,u=Object(s.a)(e,["style","label","value","onChange","autoCaps"]),d=Object(a.useState)(l),v=Object(E.a)(d,2),f=v[0],g=v[1];Object(a.useEffect)((function(){g(l)}),[l]);var m=Object(a.useCallback)((function(e){var t=e.target.value;t=c?t.toUpperCase():t,o?o({value:t,oldVal:f}):g(t)}),[c,f,o]);return r.a.createElement("label",{className:I.a.root,style:t},r.a.createElement("div",{className:I.a.label},n),r.a.createElement("input",Object.assign({className:I.a.input},u,{value:f,onChange:m})))}function R(e){var t=e.style,n=e.label,l=e.value,o=e.onChange,i=Object(s.a)(e,["style","label","value","onChange"]),c=Object(a.useState)(l),u=Object(E.a)(c,2),d=u[0],v=u[1];Object(a.useEffect)((function(){v(l)}),[l]);var f=Object(a.useCallback)((function(e){var t=parseInt(e.target.value);o?o({value:t,oldVal:d}):v(t)}),[d,o]);return r.a.createElement("label",{className:I.a.root,style:t},r.a.createElement("div",{className:I.a.label},n),r.a.createElement("input",Object.assign({className:I.a.input,type:"number",style:{textAlign:"right"}},i,{value:d,onChange:f})))}var q=n(17),Q=n.n(q);function z(e){var t=e.children,n=e.contentProps,a=t.filter((function(e){return!(e.type===F)})),l=t.filter((function(e){return e.type===F})),o=l.length>0;return r.a.createElement("div",{className:Q.a.root},r.a.createElement("div",Object.assign({className:Q.a.content},n),a),o&&l)}var M={left:"flex-start",right:"flex-end",center:"center"};function F(e){var t=e.children,n=e.align,a=void 0===n?"left":n;return r.a.createElement("div",{className:Q.a.actions,style:{justifyContent:M[a]}},t)}z.Actions=F;var T=z;function P(e){var t=e.grow,n=void 0===t?1:t;return r.a.createElement("div",{style:{flexGrow:n}})}var B={left:"flex-start",center:"center",right:"flex-end"},D={top:"flex-start",center:"center",bottom:"flex-end"};function J(e){var t=e.children,n=e.heightFull,a=e.horizontalAlign,l=e.verticalAlign,o=e.gap,i=e.style,c=Object(s.a)(e,["children","heightFull","horizontalAlign","verticalAlign","gap","style"]),u={display:"flex",height:n?"100%":"none"};return a in B&&(u.justifyContent=B[a]),l in D&&(u.alignItems=D[l]),o>0&&(t=t.map((function(e,t){if(t>0){var n,a,l=null!==(n=null===e||void 0===e||null===(a=e.props)||void 0===a?void 0:a.style)&&void 0!==n?n:{};return r.a.cloneElement(e,{key:t,style:Object(b.a)({marginLeft:o},l)})}return r.a.cloneElement(e,{key:t})}))),r.a.createElement("div",Object.assign({style:Object(b.a)(Object(b.a)({},u),i)},c),t)}var L=n(29),U=n(30),H={info:"green",warning:"yellow",error:"red"};function K(e){var t=e.style,n=e.notification,a=n.message,l=n.closeNotification,o=(n.id,n.type),i={padding:"5px 10px 10px 10px",color:"white",backgroundColor:H[o],borderRadius:5,fontSize:"1.8rem",boxShadow:"0px 5px 3px -3px rgba(0,0,0,0.3)"};return r.a.createElement(J,{style:Object(b.a)(Object(b.a)({},t),i),gap:10,verticalAlign:"center"},r.a.createElement("div",null,a),r.a.createElement(L.a,{icon:U.a,size:"1x",style:{cursor:"pointer"},onClick:l}))}var V=[],W=Object(a.createContext)();function X(e){var t=e.children,n=Object(a.useState)(V),l=Object(E.a)(n,2),o=l[0],i=l[1];return r.a.createElement(W.Provider,{value:{notifications:o,setNotifications:i}},t,r.a.createElement(A,{style:{position:"fixed",top:10,width:"100%"},gap:5,horizontalAlign:"center"},o.map((function(e){return r.a.createElement(K,{key:e.id,notification:e})}))))}function G(){var e,t,n,l,o,i,c,u,s,d,v,f,m,j,y,S=Object(a.useState)(1),C=Object(E.a)(S,2),w=C[0],N=C[1],k=Object(a.useContext)(x).state.student,I=Object(a.useState)(k),q=Object(E.a)(I,2),Q=q[0],z=q[1],M=function(){var e=Object(a.useContext)(W).setNotifications,t=Object(a.useCallback)((function(t){var n=t.message,a=t.type,r=p(),l=function(){e((function(e){return e.filter((function(e){return e.id!==r}))}))};return e((function(e){return[].concat(Object(h.a)(e),[{id:r,message:n,type:a,closeNotification:l}])})),l}),[e]);return{info:function(e){return t({message:e,type:"info"})},warning:function(e){return t({message:e,type:"warning"})},error:function(e){return t({message:e,type:"error"})}}}(),F=function(){var e=Object(a.useContext)(x).setState;return function(t){return e((function(e){return Object(b.a)(Object(b.a)({},e),{},{student:t})}))}}(),B=Object(O.f)(),D=Object(a.useCallback)((function(e){return function(t){var n=t.value;z((function(t){var a=Object(b.a)({},t),r=e.split("."),l=r.length,o=a;return r.forEach((function(e,t){t<l-1&&(o=o[e])})),o[r[r.length-1]]=n,a}))}}),[]),L=null===Q||void 0===Q||null===(e=Q.name)||void 0===e?void 0:e.length,U=null===Q||void 0===Q||null===(t=Q.email)||void 0===t?void 0:t.length,H=null===Q||void 0===Q||null===(n=Q.config)||void 0===n||null===(l=n.questionsRange)||void 0===l?void 0:l.start,K=null===Q||void 0===Q||null===(o=Q.config.questionsRange)||void 0===o?void 0:o.end,V=null===Q||void 0===Q||null===(i=Q.config)||void 0===i?void 0:i.totalSums,X=null===Q||void 0===Q||null===(c=Q.config)||void 0===c?void 0:c.totalQuestionsEachSum,G=null===Q||void 0===Q||null===(u=Q.config)||void 0===u?void 0:u.percentageOfQuestionInNegative,Y=Object(a.useCallback)((function(){switch(w){case 1:return L>0||(M.error("Name should not be empty"),!1);case 2:return U>0||(M.error("Email should not be empty"),!1);case 3:return H>0?K>0?!(K<H)||(M.error("Range `End value` should be greater than `Start value`"),!1):(M.error("Range `End value` should be greater than 0"),!1):(M.error("Range `Start value` should be greater than 0"),!1);case 4:return V>0||(M.error("`Total Sums` should be greater than 0"),!1);case 5:return X>0||(M.error("`Total Questions each Sums` should be greater than 0"),!1);case 6:return G>=0&&G<=100||(M.error("`Percentae of Negative Questions` should be between than 0 to 100"),!1);default:return!0}}),[U,L,M,w,G,K,H,X,V]),Z=Object(a.useCallback)((function(e){Y()&&N(w+(e?1:-1))}),[w,Y]),$=Object(a.useCallback)((function(){F(Q),B.push("/")}),[B,Q,F]);return r.a.createElement(T,null,r.a.createElement(A,{heightFull:!0,verticalAlign:"center",style:{padding:"1rem"}},1===w&&r.a.createElement(_,{placeholder:"Name",autoCaps:!1,label:"Enter your Name",value:Q.name,onChange:D("name")}),2===w&&r.a.createElement(_,{type:"email",autoCaps:!1,placeholder:"Email",label:"Enter your E-Mail",value:Q.email,onChange:D("email")}),3===w&&r.a.createElement(J,{gap:10,horizontalAlign:"center"},r.a.createElement(R,{label:"Start Range",value:null===Q||void 0===Q||null===(s=Q.config)||void 0===s||null===(d=s.questionsRange)||void 0===d?void 0:d.start,onChange:D("config.questionsRange.start")}),r.a.createElement(R,{label:"End Range",value:null===Q||void 0===Q||null===(v=Q.config)||void 0===v||null===(f=v.questionsRange)||void 0===f?void 0:f.end,onChange:D("config.questionsRange.end")})),4===w&&r.a.createElement(R,{label:"Total Sums",value:null===Q||void 0===Q||null===(m=Q.config)||void 0===m?void 0:m.totalSums,onChange:D("config.totalSums")}),5===w&&r.a.createElement(R,{label:"Total Questions Each Sum",value:null===Q||void 0===Q||null===(j=Q.config)||void 0===j?void 0:j.totalQuestionsEachSum,onChange:D("config.totalQuestionsEachSum")}),6===w&&r.a.createElement(R,{label:"Percentage of Negative Questions",value:null===Q||void 0===Q||null===(y=Q.config)||void 0===y?void 0:y.percentageOfQuestionInNegative,onChange:D("config.percentageOfQuestionInNegative")})),r.a.createElement(T.Actions,{align:"center"},1!==w&&r.a.createElement(g,{onClick:function(){return Z(!1)}},"Back"),r.a.createElement(P,null),w<6&&r.a.createElement(g,{onClick:function(){return Z(!0)}},"Next"),6===w&&r.a.createElement(g,{onClick:function(){return $()}},"Save")))}var Y=n(31),Z=n.n(Y),$=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function ee(e){var t=e.session,n=Object(O.f)(),a=function(e){var t=(e/6e4).toFixed(0),n=(e%6e4/1e3).toFixed(1);return"".concat(t," Minutes ").concat(n," Seconds")}(t.answers.reduce((function(e,t){return e+t.timeTakenInMs}),0));return r.a.createElement(T,null,r.a.createElement(J,{verticalAlign:"bottom"},r.a.createElement("div",{style:{fontSize:"2rem"}},a),r.a.createElement(P,null),r.a.createElement("div",{style:{fontSize:"1.5rem"}},function(e){var t=function(e){return e<=9?"0".concat(e):e.toString()};return"".concat(t(e.getDate()),"-").concat($[e.getMonth()+1],"-").concat(e.getFullYear()," ").concat(t(e.getHours()),":").concat(t(e.getMinutes()))}(new Date(t.startAt)))),r.a.createElement("div",null,r.a.createElement("table",{className:Z.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{textAlign:"center"}},"No"),r.a.createElement("td",{style:{width:"100%",textAlign:"right",padding:5}},"Question"),r.a.createElement("td",null,"Total"),r.a.createElement("td",null,"Answer"),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},"Time (Seconds)"))),r.a.createElement("tbody",null,t.questions.map((function(e,n){var a=t.answers[n],l=a.timeTakenInMs,o=a.answer,i=a.expected,c=a.isCorrect;return r.a.createElement("tr",{key:n,"data-iscorrect":c},r.a.createElement("td",{style:{textAlign:"center"}},n+1),r.a.createElement("td",{style:{textAlign:"right"}},e.join(", ")),r.a.createElement("td",{style:{textAlign:"center"}},i),r.a.createElement("td",{style:{textAlign:"center"}},o),r.a.createElement("td",{style:{textAlign:"center",whiteSpace:"nowrap"}},"".concat((l/1e3).toFixed(2))))}))))),r.a.createElement(T.Actions,null,r.a.createElement(P,null),r.a.createElement(g,{onClick:function(){return n.push("/")}},"Home")))}var te=n(32),ne=n(18),ae=n.n(ne),re=n(33);function le(e){var t=e.style,n=e.value,l=Object(a.useState)(0),o=Object(E.a)(l,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){var e=setInterval((function(){c((function(e){return++e}))}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{style:Object(b.a)({position:"absolute",width:100,height:100},t)},r.a.createElement(re.a,{strokeWidth:0,startAngle:270,data:[{value:n,color:"#404040"},{value:100-n,color:"#A6A6A6"}]}),r.a.createElement("div",{style:{position:"absolute",top:10,left:10,width:80,height:80,backgroundColor:"white",borderRadius:100}},r.a.createElement(A,{heightFull:!0,style:{fontSize:22},verticalAlign:"center",horizontalAlign:"center"},function(e){var t=(e/60).toFixed(0),n=Math.round(e%60);return"".concat(t,":").concat(n<10?"0".concat(n):n)}(i))))}function oe(e){var t=e.currentActiveSession,n=t.answers.length,l=t.questions[n]||[],o=function(e,t){var n=Object(a.useContext)(x).setState;return Object(a.useMemo)((function(){var a=new Date;return function(r){void 0!==r&&""!==r&&null!==r&&n((function(n){var l=n.sessions.filter((function(t){return t.id===e}))[0];if(l&&l.questions&&l.questions.length>t){var o=l.questions[t];r=parseInt(r);var i=o.reduce((function(e,t){return e+t}),0),c=new Date,u={answer:r,expected:i,isCorrect:r===i,timeTakenInMs:c.getTime()-a.getTime(),takenAt:a.toISOString(),answerAt:c.toISOString()},s=Object(b.a)(Object(b.a)({},l),{},{answers:[].concat(Object(h.a)(l.answers),[u])}),d=s.questions.length===s.answers.length;s.endAt=d?c.toISOString():null;var v=n.sessions.indexOf(l);return{student:Object(b.a)(Object(b.a)({},n.student),{},{currentSessionId:d?null:n.student.currentSessionId}),sessions:[].concat(Object(h.a)(n.sessions.slice(0,v)),[s],Object(h.a)(n.sessions.slice(v+1,n.sessions.length)))}}return n}))}}),[t,e,n])}(t.id,n),i=Object(a.useRef)(),c=Object(a.useState)(24),u=Object(E.a)(c,2),s=u[0],d=u[1],v={fontSize:s},f=Object(a.useRef)(),m=l.length;Object(a.useEffect)((function(){var e=new ResizeObserver((function(e){var t,n,a=Object(te.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;n=r.contentRect.height,d(.8*n/(m+1))}}catch(l){a.e(l)}finally{a.f()}}));return e.observe(i.current),function(){e.unobserve(i.current)}}),[m]);var p=Object(a.useCallback)((function(e){13===e.keyCode&&o(f.current.value)}),[f,o]);Object(a.useEffect)((function(){f.current.value=""}),[f,n]);var O=Object(a.useState)(!1),j=Object(E.a)(O,2),y=j[0],S=j[1],C=l.reduce((function(e,t){return e+t}));return r.a.createElement(T,null,r.a.createElement("label",{style:{width:"100%",height:"100%"}},r.a.createElement(J,{style:{height:"100%"}},r.a.createElement("div",{ref:i,className:ae.a.content},r.a.createElement("div",{style:{height:"100%",overflow:"auto"}},r.a.createElement("div",{className:ae.a.question,style:v},l.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement("input",{ref:f,type:"number",className:ae.a.number,style:{fontSize:s,backgroundColor:y===C?"#138584":"unset",color:y===C?"white":"unset"},autoFocus:!0,min:0,placeholder:"0",onKeyDown:p,onChange:function(e){return S(parseInt(e.target.value))},value:y})),r.a.createElement("div",{style:{width:"30vw",borderLeft:"1px dashed rgba(0,0,0,0.5)"}}),r.a.createElement(le,{style:{top:10,left:10},value:100*n/t.questions.length}))),r.a.createElement(T.Actions,null,r.a.createElement(P,null),r.a.createElement(g,{onClick:function(){return o(f.current.value)}},"Next")))}function ie(){var e=function(e){var t,n=Object(a.useContext)(x).state,r=null===n||void 0===n||null===(t=n.sessions)||void 0===t?void 0:t.filter((function(t){return t.id===e}));return(null===r||void 0===r?void 0:r.length)>0?r[0]:null}(Object(O.g)().sessionId),t=e.answers.length===e.questions.length;return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(oe,{currentActiveSession:e}),t&&r.a.createElement(ee,{session:e}))}function ce(){return r.a.createElement(f.a,null,r.a.createElement(y,null,r.a.createElement(X,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/register"},r.a.createElement(G,null)),r.a.createElement(O.a,{path:"/session/:sessionId"},r.a.createElement(ie,null)),r.a.createElement(O.a,{path:"/"},r.a.createElement(N,null))))))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.43049460.chunk.js.map