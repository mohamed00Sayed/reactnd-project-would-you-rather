(this["webpackJsonpreactnd-project-would-you-rather"]=this["webpackJsonpreactnd-project-would-you-rather"]||[]).push([[0],{37:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(22),r=n.n(s),o=(n(37),n(5)),c=n(6),i=n(8),d=n(7),l=n(14),u=n(9),j=n(4),h=n(32),b=n(10),O=n(2),p={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://raw.githubusercontent.com/mohamed00Sayed/reactnd-project-would-you-rather/master/public/avatars/avatar2.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://raw.githubusercontent.com/mohamed00Sayed/reactnd-project-would-you-rather/master/public/avatars/avatar3.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://raw.githubusercontent.com/mohamed00Sayed/reactnd-project-would-you-rather/master/public/avatars/avatar1.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},v={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function m(e){return new Promise((function(t,n){var a=e.author,s=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){v=Object(O.a)(Object(O.a)({},v),{},Object(b.a)({},s.id,s)),p=Object(O.a)(Object(O.a)({},p),{},Object(b.a)({},a,Object(O.a)(Object(O.a)({},p[a]),{},{questions:p[a].questions.concat([s.id])}))),t(s)}),1e3)}))}function x(e,t,n){return function(e,t,n){return new Promise((function(a,s){setTimeout((function(){p=Object(O.a)(Object(O.a)({},p),{},Object(b.a)({},e,Object(O.a)(Object(O.a)({},p[e]),{},{answers:Object(O.a)(Object(O.a)({},p[e].answers),{},Object(b.a)({},t,n))}))),v=Object(O.a)(Object(O.a)({},v),{},Object(b.a)({},t,Object(O.a)(Object(O.a)({},v[t]),{},Object(b.a)({},n,Object(O.a)(Object(O.a)({},v[t][n]),{},{votes:v[t][n].votes.concat([e])}))))),a()}),500)}))}(e,t,n)}var f="RECEIVE_USERS";var g="RECEIVE_QUESTIONS",w="ANSWER_QUESTION",y="ADD_QUESTION";function q(e,t,n){return function(a){return x(t,e,n).then((function(){a(function(e,t,n){return{type:w,questionId:e,authedUser:t,answer:n}}(e,t,n))}))}}function N(e){return function(t){return function(e){return m(e)}(e).then((function(e){return t(function(e){return{type:y,question:e}}(e))}))}}var T="SET_AUTHED_USER";function L(e){return{type:T,id:e}}var U=n(16),k=n.n(U);function C(e){return function(t){return t(Object(U.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(O.a)({},p))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(O.a)({},v))}),1e3)}))]).then((function(e){var t=Object(h.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(n){var a=n.users,s=n.questions;t(function(e){return{type:f,users:e}}(a)),t(function(e){return{type:g,questions:e}}(s)),t(L(e)),t(Object(U.hideLoading)())}))}}var S=n(0),Q=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.avatarURL,a=e.showingText,s=e.id;return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"question",children:[Object(S.jsx)("div",{className:"question-author-name",children:Object(S.jsx)("h3",{children:t})}),Object(S.jsxs)("div",{className:"question-data",children:[Object(S.jsx)("div",{className:"question-author-avatar",children:Object(S.jsx)("img",{src:n,alt:"question author avatar"})}),Object(S.jsxs)("div",{className:"question-text-data",children:[Object(S.jsx)("h4",{children:"Would you rather"}),Object(S.jsx)("p",{children:a}),Object(S.jsx)(l.b,{to:{pathname:"questions/".concat(s)},children:Object(S.jsx)("div",{className:"btn",children:"View Poll"})})]})]})]})})}}]),n}(a.Component);var R=Object(j.connect)((function(e,t){var n=t.id,a=e.questions[n],s=a.author,r=a.optionOne,o=e.users[s];return{id:n,name:o.name,avatarURL:o.avatarURL,showingText:"...".concat(r.text.slice(0,16),"...")}}))(Q);var z=function(e){var t=e.questions,n=e.type;return Object(S.jsx)("div",{children:Object(S.jsx)("ul",{className:"question-list-ul",children:t.map((function(e){return Object(S.jsxs)("li",{children:[" ",Object(S.jsx)(R,{id:e,type:n})," "]},e)}))})})},E="unansweredQs",A="answeredQs",P=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedQuestions:E},e.handleToggleQuestions=function(t){t.target.id===A?(e.setState({selectedQuestions:A}),t.target.classList.add("active-option"),t.target.nextSibling.classList.remove("active-option")):(e.setState({selectedQuestions:E}),t.target.classList.add("active-option"),t.target.previousSibling.classList.remove("active-option"))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.answeredQs,n=e.unansweredQs;return Object(S.jsx)("div",{className:"board-container",children:Object(S.jsxs)("div",{className:"question-board",children:[Object(S.jsxs)("div",{className:"question-board-header",children:[Object(S.jsx)("div",{id:"answeredQs",className:"question-board-header-option",onClick:this.handleToggleQuestions,children:"Answered Questions"}),Object(S.jsx)("div",{id:"unansweredQs",className:"question-board-header-option active-option",onClick:this.handleToggleQuestions,children:"Unanswered Questions"})]}),Object(S.jsx)("div",{className:"selected-questions",children:"unansweredQs"===this.state.selectedQuestions?Object(S.jsx)(z,{questions:n,type:"unanswered"}):Object(S.jsx)(z,{questions:t,type:"answered"})})]})})}}]),n}(a.Component);var V=Object(j.connect)((function(e){var t=e.questions,n=e.authedUser,a=[],s=[];return Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp})).forEach((function(e){t[e].optionOne.votes.includes(n)||t[e].optionTwo.votes.includes(n)?a.push(e):s.push(e)})),{answeredQs:a,unansweredQs:s}}))(P),I=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.avatarURL,a=e.text1,s=e.text2,r=e.vote,o=e.optOnePercent,c=e.optTwoPercent,i=e.optOneVotes,d=e.optTwoVotes;return Object(S.jsxs)("div",{className:"answered-poll",children:[Object(S.jsxs)("div",{className:"asked-by",children:["Asked by ",t]}),Object(S.jsxs)("div",{className:"answered-poll-content",children:[Object(S.jsx)("div",{className:"poll-author-avatar",children:Object(S.jsx)("img",{src:n,alt:"question author avatar"})}),Object(S.jsxs)("div",{className:"poll-option-results",children:[Object(S.jsx)("h3",{children:"Results:"}),Object(S.jsxs)("div",{className:"poll-first-option",children:[Object(S.jsxs)("h4",{children:["Would you rather ",a,"?"]}),Object(S.jsxs)("div",{className:"option-percent",style:{width:"".concat(o,"%")},children:[o,"% "]}),Object(S.jsxs)("p",{children:[i," of ",i+d," votes"]}),"first"===r?Object(S.jsx)("div",{className:"user-choice",children:Object(S.jsx)("svg",{viewBox:"0 0 33 32",children:Object(S.jsx)("path",{d:"M17 7a1 1 0 01.117 1.993L17 9h-7v14h14v-7l.007-.117a1 1 0 01.876-.876L25 15a1 1 0 01.993.883L26 16v7a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h7zm8.555.168a1 1 0 01.277 1.387l-8 10a1 1 0 01-1.54.152l-3-3a1 1 0 011.415-1.414l2.138 2.137 7.323-8.985a1 1 0 011.387-.277z"})})}):Object(S.jsx)("p",{})]}),Object(S.jsxs)("div",{className:"poll-second-option",children:[Object(S.jsxs)("h4",{children:["Would you rather ",s,"?"]}),Object(S.jsxs)("div",{className:"option-percent",style:{width:"".concat(c,"%")},children:[c,"% "]}),Object(S.jsxs)("p",{children:[d," of ",i+d," votes"]}),"second"===r?Object(S.jsx)("div",{className:"user-choice",children:Object(S.jsx)("svg",{viewBox:"0 0 33 32",children:Object(S.jsx)("path",{d:"M17 7a1 1 0 01.117 1.993L17 9h-7v14h14v-7l.007-.117a1 1 0 01.876-.876L25 15a1 1 0 01.993.883L26 16v7a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h7zm8.555.168a1 1 0 01.277 1.387l-8 10a1 1 0 01-1.54.152l-3-3a1 1 0 011.415-1.414l2.138 2.137 7.323-8.985a1 1 0 011.387-.277z"})})}):Object(S.jsx)("p",{})]})]})]})]})}}]),n}(a.Component);var M=Object(j.connect)((function(e,t){var n=t.id,a=e.authedUser,s=e.users,r=e.questions[n],o=r.author,c=r.optionOne,i=r.optionTwo,d=s[o],l=d.name,u=d.avatarURL,j=c.text,h=i.text,b=c.votes.length,O=i.votes.length,p=function(e,t){var n,a=e+t;n=0===t?1:e/a;return Math.round(100*n)}(b,O),v=100-p,m="second";return c.votes.includes(a)&&(m="first"),{name:l,avatarURL:u,text1:j,text2:h,vote:m,optOneVotes:b,optTwoVotes:O,optOnePercent:p,optTwoPercent:v}}))(I),D=n(30),B=Object(D.a)(),H=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selected:"optionOne"},e.handleChange=function(t){e.setState({selected:t.target.value})},e.handleVoting=function(t){var n=e.props.id,a=e.props.authedUser;e.props.dispatch(q(n,a,e.state.selected)),B.replace("")},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,a=e.avatarURL,s=e.optionOneText,r=e.optionTwoText;return Object(S.jsxs)("div",{className:"unanswered-poll",children:[Object(S.jsxs)("div",{className:"user-asks",children:[n," asks:"]}),Object(S.jsxs)("div",{className:"unanswered-poll-content",children:[Object(S.jsx)("div",{className:"unanswered-poll-author-avatar",children:Object(S.jsx)("img",{src:a,alt:"question author avatar"})}),Object(S.jsxs)("div",{className:"poll-form-div",children:[Object(S.jsx)("h2",{children:"Would you rather..."}),Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"radio",id:"first-radio",name:"pollQ",value:"optionOne",checked:!0,onChange:this.handleChange}),Object(S.jsx)("label",{htmlFor:"first",children:s})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"radio",id:"second-radio",name:"pollQ",value:"optionTwo",onChange:this.handleChange}),Object(S.jsx)("label",{htmlFor:"second",children:r})]}),Object(S.jsx)("div",{className:"link-div",children:Object(S.jsx)(l.b,{onClick:this.handleVoting,to:"".concat(t),children:Object(S.jsx)("div",{className:"btn-unanswered",children:"Submit"})})})]})]})]})}}]),n}(a.Component);var W=Object(j.connect)((function(e,t){var n=t.id,a=e.authedUser,s=e.users,r=e.questions[n],o=r.author,c=r.optionOne,i=r.optionTwo,d=s[o];return{id:n,name:d.name,avatarURL:d.avatarURL,optionOneText:c.text,optionTwoText:i.text,authedUser:a}}))(H),_=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.avatarURL,a=e.questionsNum,s=e.answersNum,r=e.total;return Object(S.jsxs)("div",{className:"user-stat",children:[Object(S.jsx)("div",{className:"stat-avatar",children:Object(S.jsx)("img",{src:n,alt:"user avatar"})}),Object(S.jsxs)("div",{className:"stat-details",children:[Object(S.jsx)("h3",{children:t}),Object(S.jsxs)("p",{children:["Answered questions :  "," "," ",s]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("p",{children:["Created questions  :  "," "," ",a]})]}),Object(S.jsxs)("div",{className:"stat-score",children:[Object(S.jsx)("div",{className:"stat-header",children:"Score"}),Object(S.jsx)("div",{className:"stat-value",children:Object(S.jsx)("p",{className:"total-score-value",children:r})})]})]})}}]),n}(a.Component);var J=Object(j.connect)((function(e,t){var n=t.id,a=t.stat,s=e.users[n],r=s.name,o=s.avatarURL,c=a.total;return{id:n,name:r,avatarURL:o,questionsNum:a.questionsNum,answersNum:a.answersNum,total:c}}))(_);var F=function(e){var t=e.leadersList;return Object(S.jsx)("div",{children:Object(S.jsx)("ul",{className:"leaders-list",children:t.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(J,{id:e.id,stat:e.stat})},e.id)}))})})},$=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.sortedUsers;return Object(S.jsx)("div",{className:"leader-board-container",children:Object(S.jsx)("div",{className:"leader-board",children:Object(S.jsx)(F,{leadersList:e})})})}}]),n}(a.Component);var G=Object(j.connect)((function(e){var t=e.users,n=[];return Object.keys(t).forEach((function(e){var a=t[e],s=a.questions.length,r=Object.keys(a.answers).length,o=s+r;n.push({id:a.id,stat:{total:o,questionsNum:s,answersNum:r}})})),{sortedUsers:n.sort((function(e,t){return t.stat.total-e.stat.total}))}}))($),K=n(18),X=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){"opt-one-input"===e.target.id?a.setState({optOne:e.target.value}):a.setState({optTwo:e.target.value})},a.handleAddQuestion=function(e){if(""===a.state.optOne||""===a.state.optTwo)alert("Please fill empty fields !");else{var t={optionOneText:a.state.optOne,optionTwoText:a.state.optTwo,author:a.props.authedUser};a.props.dispatch(N(t)),B.replace("/")}},a.state={optOne:"",optTwo:""},a.handleChange=a.handleChange.bind(Object(K.a)(a)),a.handleAddQuestion=a.handleAddQuestion.bind(Object(K.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"new-question",children:[Object(S.jsx)("div",{className:"new-question-header",children:Object(S.jsx)("h1",{children:"Create New Question"})}),Object(S.jsxs)("div",{className:"new-question-content",children:[Object(S.jsx)("p",{children:"Complete the question:"}),Object(S.jsx)("h3",{children:"Would you rather..."}),Object(S.jsx)("div",{children:Object(S.jsx)("input",{className:"new-question-option-one",id:"opt-one-input",placeholder:"Enter Option One Text Here",onChange:this.handleChange})}),Object(S.jsx)("hr",{}),Object(S.jsx)("div",{children:Object(S.jsx)("input",{className:"new-question-option-two",id:"opt-two-input",placeholder:"Enter Option Two Text Here",onChange:this.handleChange})}),Object(S.jsx)("div",{children:Object(S.jsx)(l.b,{to:"/",onClick:this.handleAddQuestion,children:Object(S.jsx)("div",{className:"new-question-submit",children:"SUBMIT"})})})]})]})}}]),n}(a.Component);var Y=Object(j.connect)((function(e){return{authedUser:e.authedUser}}))(X),Z=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(t){t.preventDefault(),e.props.handleLogout(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.avatarURL;return Object(S.jsx)("nav",{className:"nav",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:n,alt:"user avatar",style:{height:"46px",float:"right"}})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"/",className:"disabled-link",children:t})}),Object(S.jsx)("li",{children:Object(S.jsx)(l.c,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(S.jsx)("li",{children:Object(S.jsx)(l.c,{to:"/add",activeClassName:"active",children:"New Question"})}),Object(S.jsx)("li",{children:Object(S.jsx)(l.c,{to:"/leaderboard",activeClassName:"active",children:"Leaderboard"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{className:"logout-btn",onClick:this.handleLogout,href:"/",children:"Logout"})})]})})}}]),n}(a.Component);var ee=Object(j.connect)((function(e){var t=e.authedUser,n=e.users[t];return{name:n.name,avatarURL:n.avatarURL}}))(Z),te=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selected:""},e.handleLogin=function(t){var n=e.state.selected;""===n?alert("Please select a user !"):e.props.handleLogin(n)},e.handleSelectedUser=function(t){e.setState({selected:t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.users;return Object(S.jsx)("div",{className:"login-wraper",children:Object(S.jsxs)("div",{className:"login",children:[Object(S.jsx)("h3",{children:"Sign in"}),Object(S.jsxs)("select",{id:"select-user",className:"select-user-login",onChange:this.handleSelectedUser,defaultValue:"default",children:[Object(S.jsx)("option",{disabled:!0,value:"default",children:"Select a user..."}),Object.keys(e).map((function(t){var n=e[t],a=n.id,s=n.name;return Object(S.jsx)("option",{value:a,children:s},a)}))]}),Object(S.jsx)("button",{className:"login-btn",onClick:this.handleLogin,children:"Login"})]})})}}]),n}(a.Component);var ne=Object(j.connect)((function(e){return{users:e.users}}))(te),ae=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"error-page",children:Object(S.jsx)("img",{src:"https://raw.githubusercontent.com/mohamed00Sayed/reactnd-project-would-you-rather/master/public/pagenotfound.png",alt:"error page not found"})})}}]),n}(a.Component),se=ae,re=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(t){e.props.dispatch(L(null)),B.replace("/")},e.handleLogin=function(t){e.props.dispatch(L(t))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(C(null))}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.answers,a=e.questions;return Object(S.jsx)(l.a,{history:B,basename:"reactnd-project-would-you-rather",children:Object(S.jsxs)("div",{children:[Object(S.jsx)(k.a,{}),!0===t?Object(S.jsx)(ne,{handleLogin:this.handleLogin}):Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)(ee,{handleLogout:this.handleLogout})}),Object(S.jsxs)("div",{className:"app-div",children:[Object(S.jsx)(u.a,{exact:!0,path:"/",component:V}),Object(S.jsx)(u.a,{path:"/leaderboard",component:G}),Object(S.jsx)(u.a,{path:"/add",component:Y}),Object(S.jsx)(u.a,{exact:!0,path:"/questions/:id",render:function(e){var t=e.match.params.id;return Object.keys(n).includes(t)?Object(S.jsx)(M,{id:t}):Object.keys(a).includes(t)?Object(S.jsx)(W,{id:t}):Object(S.jsx)(se,{})}})]})]})]})})}}]),n}(a.Component);var oe=Object(j.connect)((function(e){var t,n=e.authedUser,a=e.users,s=e.questions,r=null===n;return null!==n&&(t=a[n].answers),{loading:r,answers:t,questions:s}}))(re),ce=n(17);var ie=Object(ce.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T?t.id:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),t.users);case w:var n=t.questionId,a=t.authedUser,s=t.answer;return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},a,Object(O.a)(Object(O.a)({},e[a]),{},{answers:Object(O.a)(Object(O.a)({},e[a].answers),{},Object(b.a)({},n,s))})));case y:var r=t.question,o=r.id,c=r.author;return console.log("id:",o,"author:",c,"action.question:",t.question),Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},c,Object(O.a)(Object(O.a)({},e[c]),{},{questions:e[c].questions.concat([o])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(Object(O.a)({},e),t.questions);case y:var n=t.question;return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n.id,n));case w:var a=t.questionId,s=t.authedUser,r=t.answer,o="optionOne"===r?"optionOne":"optionTwo";return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},a,Object(O.a)(Object(O.a)({},e[a]),{},Object(b.a)({},o,Object(O.a)(Object(O.a)({},e[a][o]),{},{votes:e[a][o].votes.concat([s])})))));default:return e}},loadingBar:U.loadingBarReducer}),de=n(31),le=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),a}}},ue=Object(ce.a)(de.a,le),je=Object(ce.c)(ie,ue);r.a.render(Object(S.jsx)(j.Provider,{store:je,children:Object(S.jsx)(oe,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8fbe5ae1.chunk.js.map