webpackJsonp([2],[,,,,,,,function(s,t,n){"use strict";var e=n(29),r=n(119),i=n(120),o=n(129);e.a.use(r.a),t.a=new r.a({routes:[{path:"/"},{path:"/MockTestPage",name:"MockTestPage",component:i.a,props:!0},{path:"/Table",name:"Table",component:o.a,props:!0}]})},,,,,,,,,,,,,,,,,,,,,,,function(s,t,n){"use strict";var e=n(31),r=n.n(e),i=n(32),o=n(7);t.a={name:"App",components:{DragAndDrop:i.a},data:function(){return{created:!1,csvParsed:!1,allQuestions:null,pdfParsed:!1,jsonParsed:!1,allRows:null}},mounted:function(){o.a.push({path:"/"})},methods:{createJsonFromCsv:function(){for(var s=[],t=0;t<this.allQuestions.length;t++){for(var n=[],e=0;e<this.allQuestions[t].answers.length;e++)n.push(this.allQuestions[t].answers[e].answer);s.push({question:this.allQuestions[t].question,answers:n,correctAnswer:this.allQuestions[t].correctAnswer})}if(s!=[]){var i=document.createElement("a");i.href="data:text/json;charset=utf-8,"+encodeURIComponent(r()(s));var o=(new Date).toISOString();i.download="json_"+o+".json",i.click()}this.clear()},createMockTest:function(){this.created=!0,this.csvParsed=!1,this.jsonParsed=!1,o.a.push({name:"MockTestPage",params:{allQuestions:this.allQuestions}})},createTable:function(){this.created=!0,this.pdfParsed=!1,o.a.push({name:"Table",params:{allRows:this.allRows}})},clear:function(){this.$refs.dragAndDropComp&&this.$refs.dragAndDropComp.clear(),this.created=!1,this.csvParsed=!1,this.allQuestions=null,this.pdfParsed=!1,this.jsonParsed=!1,this.allRows=null,o.a.push({path:"/"})},passFileData:function(s){this.allRows=null,this.pdfParsed=!1,this.jsonParsed=!1,this.allQuestions=s,this.csvParsed=!0},passPDFData:function(s){this.allQuestions=null,this.csvParsed=!1,this.jsonParsed=!1,this.allRows=s,this.pdfParsed=!0},passJsonData:function(s){this.allRows=null,this.csvParsed=!1,this.pdfParsed=!1,this.allQuestions=[];for(var t=0;t<s.length;t++){this.allQuestions.push({question:s[t].question,answers:[]});for(var n=0;n<s[t].answers.length;n++)this.allQuestions[t].answers.push({text:s[t].answers[n].answer,isCorrect:s[t].answers[n].pointer===s[t].correctAnswer})}this.jsonParsed=!0},hideButtonCreate:function(){this.csvParsed=!1,this.pdfParsed=!1,this.allQuestions=null,this.allRows=null,this.jsonParsed=!1}}}},,function(s,t,n){"use strict";function e(s){n(59)}var r=n(33),i=n(118),o=n(5),a=e,c=o(r.a,i.a,!1,a,null,null);t.a=c.exports},function(s,t,n){"use strict";var e=n(60),r=n(99),i=n(117);t.a={name:"DragAndDrop",data:function(){return{dragAndDropCapable:!1,files:null}},mounted:function(){this.dragAndDropCapable=this.determineDragAndDropCapable(),this.dragAndDropCapable&&(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(s){this.$refs.fileform.addEventListener(s,function(s){s.preventDefault(),s.stopPropagation()}.bind(this),!1)}.bind(this)),this.$refs.fileform.addEventListener("drop",function(s){this.$emit("changedFile"),this.files=s.dataTransfer.files[0]}.bind(this)))},methods:{handleFileUpload:function(){this.files=this.$refs.file.files[0],this.$emit("changedFile")},clear:function(){this.dragAndDropCapable=!1,this.files=null},determineDragAndDropCapable:function(){var s=document.createElement("div");return("draggable"in s||"ondragstart"in s&&"ondrop"in s)&&"FormData"in window&&"FileReader"in window},submitFiles:function(){var s=this,t=this.files.name.substring(this.files.name.lastIndexOf(".")+1,this.files.name.length)||this.name.files;"csv"==t?e.a.csvParsing(this.files).then(function(t){s.$emit("parsedCsv",t)}):"pdf"==t?r.a.pdfParsing(this.files).then(function(t){s.$emit("parsedPDF",t)}):"json"==t&&i.a.jsonParsing(this.files).then(function(t){s.$emit("parsedJson",t)})}}}},,,,,,,,,,,,,,function(s,t,n){"use strict";var e=(n(7),n(122));t.a={name:"MockTest",props:["allQuestions"],components:{Test:e.a},data:function(){return{nQuestions:null,correctAnswersPoints:null,noAnswersPoints:null,wrongAnswersPoints:null,inputCreated:!1,parameters:{nQuestions:null,correctAnswersPoints:null,noAnswersPoints:null,wrongAnswersPoints:null}}},mounted:function(){this.allQuestions||this.$emit("refreshAll")},methods:{goOn:function(){this.inputCreated=!0,this.parameters.nQuestions=this.nQuestions,this.parameters.correctAnswersPoints=this.correctAnswersPoints,this.parameters.noAnswersPoints=this.noAnswersPoints,this.parameters.wrongAnswersPoints=this.wrongAnswersPoints,this.$refs.Test&&this.$refs.Test.refresh()}}}},function(s,t,n){"use strict";var e=(n(7),n(124));t.a={name:"Test",components:{Results:e.a},props:["allQuestions","parameters"],data:function(){return{pointers:["A","B","C","D","E","F","G","H"],colorClass:[],questions:[],showCorrectAnswers:!1,nQuestions:this.parameters.nQuestions,showResults:!1,showModal:!1,test:null,showTest:!1}},mounted:function(){this.$refs.Results&&this.$refs.Results.clear(),this.prepareQuestions(),this.getQuestions(),this.showTest=!0},methods:{shuffle:function(s){for(var t=s.length;t>0;){var n=Math.floor(Math.random()*t);t--;var e=s[t];s[t]=s[n],s[n]=e}return s},shuffleQuestions:function(s){return s=this.shuffle(s)},shuffleAnswers:function(s){for(var t=0;t<s.length;t++)s[t].answers=this.shuffle(s[t].answers);return s},prepareQuestions:function(){this.allQuestions=this.shuffleQuestions(this.allQuestions),this.allQuestions=this.shuffleAnswers(this.allQuestions)},getQuestions:function(){for(var s=0;s<this.nQuestions;s++)this.questions.push({question:this.allQuestions[s].question,answers:this.allQuestions[s].answers,givenAnswer:null,correctAnswerIndex:this.allQuestions[s].answers.indexOf(this.allQuestions[s].answers.find(function(s){return s.isCorrect}))})},getResults:function(){this.showCorrectAnswers=!0;for(var s=0;s<this.questions.length;s++)!this.questions[s].givenAnswer&0!=this.questions[s].givenAnswer?this.colorClass.push("background bg-warning"):this.questions[s].answers[this.questions[s].givenAnswer].isCorrect?this.colorClass.push("background bg-success"):this.colorClass.push("background bg-danger");this.showResults=!0},refresh:function(){window.scrollTo(0,0),this.$refs.Results&&this.$refs.Results.clear(),this.clear(),this.nQuestions=this.parameters.nQuestions,this.prepareQuestions(),this.getQuestions(),this.showTest=!0},restart:function(){window.scrollTo(0,0),this.$refs.Results&&this.$refs.Results.clear(),this.showResults=!1,this.showCorrectAnswers=!1,this.colorClass=[];for(var s=0;s<this.questions.length;s++)this.questions[s].givenAnswer=null;this.showModal=!0,this.text="Restart same test - Would you like to shuffle the position of questions and answers?"},retryOnlyWrong:function(){window.scrollTo(0,0),this.$refs.Results&&this.$refs.Results.clear(),this.showResults=!1,this.showCorrectAnswers=!1,this.colorClass=[],this.questions=this.questions.filter(function(s){return s.givenAnswer?s.givenAnswer!=s.correctAnswerIndex:!s.givenAnswer});for(var s=0;s<this.questions.length;s++)this.questions[s].givenAnswer=null;this.showModal=!0,this.text="Restart same test with only wrong and no answers - Would you like to shuffle the position of questions and answers?"},retry:function(){window.scrollTo(0,0),this.$refs.Results&&this.$refs.Results.clear(),this.showResults=!1,this.showCorrectAnswers=!1,this.colorClass=[];for(var s=this.questions.filter(function(s){return s.givenAnswer?s.givenAnswer!=s.correctAnswerIndex:!s.givenAnswer}),t=s.map(function(s){return s.question}),n=this.allQuestions.filter(function(s){return!t.includes(s.question)}),e=0;e<this.questions.length;e++)if(this.questions[e].givenAnswer)if(this.questions[e].givenAnswer==this.questions[e].correctAnswerIndex){var r=n.pop();this.questions[e]={question:r.question,answers:r.answers,givenAnswer:null,correctAnswerIndex:r.answers.indexOf(r.answers.find(function(s){return s.isCorrect}))}}else this.questions[e].givenAnswer=null;else this.questions[e].givenAnswer=null;s=null,t=null,this.showModal=!0,this.text="Retry wrong o no answered questions with other random questions - Would you like to shuffle the position of questions and answers?"},shufflePosition:function(){this.questions=this.shuffle(this.questions),this.questions=this.shuffleAnswers(this.questions);for(var s=0;s<this.questions.length;s++)this.questions[s].correctAnswerIndex=this.questions[s].answers.indexOf(this.questions[s].answers.find(function(s){return s.isCorrect}));this.showModal=!1,this.text=null,this.showTest=!0},noShufflePosition:function(){this.showModal=!1,this.text=null,this.showTest=!0},clear:function(){this.showResults=!1,this.questions=[],this.showCorrectAnswers=!1,this.colorClass=[],this.nQuestions=null,this.$refs.Results&&this.$refs.Results.clear()}}}},function(s,t,n){"use strict";n(7);t.a={name:"Results",props:["questions","parameters"],data:function(){return{nQuestions:this.parameters.nQuestions,correctAnswersPoints:this.parameters.correctAnswersPoints,noAnswersPoints:this.parameters.noAnswersPoints,wrongAnswersPoints:this.parameters.wrongAnswersPoints,correctAnswers:0,wrongAnswers:0,noAnswers:0,totalPoints:0}},mounted:function(){if(this.questions){for(var s=0;s<this.questions.length;s++)this.questions[s].givenAnswer+1?this.questions[s].givenAnswer==this.questions[s].correctAnswerIndex?this.correctAnswers++:this.wrongAnswers++:this.noAnswers++;this.totalPoints=this.correctAnswers*this.correctAnswersPoints+this.wrongAnswers*this.wrongAnswersPoints+this.noAnswers*this.noAnswersPoints}},methods:{clear:function(){this.nQuestions=null,this.correctAnswersPoints=null,this.noAnswersPoints=null,this.wrongAnswersPoints=null,this.correctAnswers=0,this.wrongAnswers=0,this.noAnswers=0,this.totalPoints=0}}}},function(s,t,n){"use strict";var e=n(31),r=n.n(e);n(7);t.a={name:"Table",props:["allRows"],data:function(){return{rows:[],questions:[],pointersArray:["A","B","C","D","E","F","G","H"],showModal:!1,numberOfAnswers:0,showNumberModal:!1,currentPointersArray:null}},created:function(){this.showNumberModal=!0},mounted:function(){if(this.allRows)for(var s=0;s<this.allRows.length;s++)this.rows.push({str:this.allRows[s],numRow:s,isQuestion:!1,isAnswer:!1,pointer:null,isCorrect:!1,showModal:!1});else this.$emit("refresh")},methods:{goOn:function(){this.showNumberModal=!1,this.currentPointersArray=this.pointersArray.slice(0,this.numberOfAnswers)},joinAnswers:function(s){for(var t=this,n=[],e=0,r=0;r<this.currentPointersArray.length;r++)!function(r){var i=t.currentPointersArray[r],o=s.filter(function(s){return s.pointer==i});o=o.map(function(s){return s.str}),n.push({numAnswer:e,str:o.join(" "),pointer:i,isCorrect:!1}),e+=1}(r);return n},createQuestionsArray:function(){for(var s=this,t="",n=[],e=[],r=0,i=0;i<this.allRows.length;i++)!function(i){s.rows.find(function(s){return s.numRow===i}).isQuestion?t=s.rows.find(function(s){return s.numRow===i}).str:s.rows.find(function(s){return s.numRow===i}).isAnswer&&n.push({str:s.rows.find(function(s){return s.numRow===i}).str,numRow:i,pointer:s.rows.find(function(s){return s.numRow===i}).pointer}),i+1!=s.allRows.length&&!s.rows.find(function(s){return s.numRow===i+1}).isQuestion||""==t||(e=s.joinAnswers(n),s.questions.push({numQuestion:r,question:t,answers:e,correctAnswer:null}),n=[],e=[],r+=1)}(i)},shuffle:function(s){for(var t=s.length;t>0;){var n=Math.floor(Math.random()*t);t--;var e=s[t];s[t]=s[n],s[n]=e}return s},csvFile:function(){for(var s="",t=0;t<this.questions.length;t++){for(var n=[],e=0;e<this.questions[t].answers.length;e++)n.push(this.questions[t].answers[e].str);s+=this.questions[t].question+"$"+n.join("$")+"$"+this.questions[t].correctAnswer,t+1!=this.questions.length&&(s+="\n")}if(""!=s){var r=document.createElement("a");r.href="data:text/csv;charset=utf-8,"+encodeURI(s);var i=(new Date).toISOString();r.download="csv_"+i+".csv",r.click()}},jsonFile:function(){for(var s=[],t=0;t<this.questions.length;t++){for(var n=[],e=0;e<this.questions[t].answers.length;e++)n.push(this.questions[t].answers[e].str);s.push({question:this.questions[t].question,answers:n,correctAnswer:this.questions[t].correctAnswer})}if(s!=[]){var i=document.createElement("a");i.href="data:text/json;charset=utf-8,"+encodeURIComponent(r()(s));var o=(new Date).toISOString();i.download="json_"+o+".json",i.click()}},download:function(){for(var s=!0,t=0;t<this.questions.length;t++)this.questions[t].correctAnswer||(s=!1);s&&(this.jsonFile(),this.$emit("refresh"),this.showModal=!1,document.getElementById("body").className="")},back:function(){this.showModal=!1,this.questions=[]},nextStep:function(){this.questions=[],this.createQuestionsArray(),this.showModal=!0,document.getElementById("body").className="modal-open"},questionButton:function(s){this.rows.find(function(t){return t.numRow===s}).isQuestion?this.rows.find(function(t){return t.numRow===s}).isQuestion=!1:(this.rows.find(function(t){return t.numRow===s}).isQuestion=!0,this.rows.find(function(t){return t.numRow===s}).isAnswer=!1,this.rows.find(function(t){return t.numRow===s}).isCorrect=!1,this.rows.find(function(t){return t.numRow===s}).pointer=null)},answerButton:function(s,t){this.rows.find(function(t){return t.numRow===s}).isAnswer?this.rows.find(function(t){return t.numRow===s}).isAnswer&&this.rows.find(function(t){return t.numRow===s}).pointer!=t?this.rows.find(function(t){return t.numRow===s}).pointer=t:this.rows.find(function(t){return t.numRow===s}).isAnswer&&this.rows.find(function(t){return t.numRow===s}).pointer==t&&(this.rows.find(function(t){return t.numRow===s}).isAnswer=!1,this.rows.find(function(t){return t.numRow===s}).isCorrect=!1,this.rows.find(function(t){return t.numRow===s}).pointer=null):(this.rows.find(function(t){return t.numRow===s}).isAnswer=!0,this.rows.find(function(t){return t.numRow===s}).isQuestion=!1,this.rows.find(function(t){return t.numRow===s}).pointer=t)},correctAnswerButton:function(s,t){var n=this;console.log(this.questions,s,t),this.questions.find(function(t){return t.numQuestion===s}).answers.find(function(s){return s.numAnswer===t}).isCorrect?(this.questions.find(function(t){return t.numQuestion===s}).answers.find(function(s){return s.numAnswer===t}).isCorrect=!1,this.questions.find(function(t){return t.numQuestion===s}).correctAnswer=null):(this.questions.find(function(t){return t.numQuestion===s}).answers.find(function(t){return t.pointer===n.questions.find(function(t){return t.numQuestion===s}).correctAnswer})&&(this.questions.find(function(t){return t.numQuestion===s}).answers.find(function(t){return t.pointer===n.questions.find(function(t){return t.numQuestion===s}).correctAnswer}).isCorrect=!1),this.questions.find(function(t){return t.numQuestion===s}).answers.find(function(s){return s.numAnswer===t}).isCorrect=!0,this.questions.find(function(t){return t.numQuestion===s}).correctAnswer=this.questions.find(function(t){return t.numQuestion===s}).answers.find(function(s){return s.numAnswer===t}).pointer)}}}},,function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(29),r=n(55),i=n(7),o=n(32);e.a.config.productionTip=!1,new e.a({el:"#app",router:i.a,components:{App:r.a,DragAndDrop:o.a},template:"<App/>"})},,,function(s,t,n){"use strict";function e(s){n(56)}var r=n(30),i=n(132),o=n(5),a=e,c=o(r.a,i.a,!1,a,null,null);t.a=c.exports},function(s,t){},,,function(s,t){},function(s,t,n){"use strict";function e(s){for(var t=[],n=0;n<s.length;n++){var e=["A","B","C","D","E","F","G","H"];t.push({question:s[n][0],answers:[],correctAnswer:s[n][s[n].length-1]});for(var r=[],i=1;i<s[n].length-1;i++)r.push({pointer:e[i-1],answer:s[n][i]});t[n].answers=r}return t}var r=n(18),i=n.n(r),o=n(19),a=n.n(o),c=n(11),u=n.n(c),l=n(98);n.n(l);l.parsePromise=function(s){return new u.a(function(t,n){l.parse(s,{delimiter:"$",complete:t,error:n})})};var d=function(){var s=a()(i.a.mark(function s(t){var n;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.parsePromise(t);case 2:return n=s.sent,s.abrupt("return",e(n.data));case 4:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}();t.a={csvParsing:d}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(s,t,n){"use strict";function e(s){return new u.a(function(t,n){var e=new FileReader;e.onload=function(){t(e.result)},e.readAsArrayBuffer(s)})}var r=n(18),i=n.n(r),o=n(19),a=n.n(o),c=n(11),u=n.n(c),l=n(100),d=function(){var s=a()(i.a.mark(function s(t){var n,r,o,a,c,u,d,h;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e(t);case 2:return n=s.sent,r=new Uint8Array(n),s.next=6,l.getDocument(r);case 6:o=s.sent,a=[],c=0;case 9:if(!(c<o._pdfInfo.numPages)){s.next=21;break}return s.next=12,o.getPage(c+1);case 12:return u=s.sent,s.next=15,u.getTextContent();case 15:d=s.sent,h=d.items.map(function(s){return s.str}),a=a.concat(h);case 18:c++,s.next=9;break;case 21:return s.abrupt("return",a);case 22:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}();t.a={pdfParsing:d}},,,,,,function(s,t){},function(s,t){},function(s,t){},function(s,t){},,,,,,,,,function(s,t,n){"use strict";function e(s){return new u.a(function(t,n){var e=new FileReader;e.onload=function(){t(JSON.parse(e.result))},e.readAsText(s)})}var r=n(18),i=n.n(r),o=n(19),a=n.n(o),c=n(11),u=n.n(c),l=function(){var s=a()(i.a.mark(function s(t){var n,r,o,a,c,u;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e(t);case 2:for(n=s.sent,r=[],o=0;o<n.length;o++){for(a=["A","B","C","D","E","F","G","H"],r.push({question:n[o].question,answers:[],correctAnswer:n[o].correctAnswer}),c=[],u=0;u<n[o].answers.length;u++)c.push({pointer:a[u],answer:n[o].answers[u]});r[o].answers=c}return s.abrupt("return",r);case 6:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}();t.a={jsonParsing:l}},function(s,t,n){"use strict";var e=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"file-drag-drop"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-md-center"},[n("form",{ref:"fileform"},[n("span",{staticClass:"drop-files"},[s._v("Drop the file here!")])])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[s.files?n("div",{staticClass:"file-listing border"},[s._v("\n        "+s._s(s.files.name)+"\n      ")]):s._e()]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("input",{ref:"file",staticClass:"btn,",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:function(t){return s.handleFileUpload()}}}),s._v(" "),n("input",{staticClass:"btn",attrs:{type:"button",value:"Get File",onclick:"document.getElementById('file').click();"}})]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("button",{directives:[{name:"show",rawName:"v-show",value:s.files,expression:"files"}],staticClass:"btn",on:{click:function(t){return s.submitFiles()}}},[s._v("Submit")])])])])},r=[],i={render:e,staticRenderFns:r};t.a=i},,function(s,t,n){"use strict";function e(s){n(121)}var r=n(47),i=n(128),o=n(5),a=e,c=o(r.a,i.a,!1,a,"data-v-514fc7d2",null);t.a=c.exports},function(s,t){},function(s,t,n){"use strict";function e(s){n(123)}var r=n(48),i=n(127),o=n(5),a=e,c=o(r.a,i.a,!1,a,"data-v-49fe1dfa",null);t.a=c.exports},function(s,t){},function(s,t,n){"use strict";function e(s){n(125)}var r=n(49),i=n(126),o=n(5),a=e,c=o(r.a,i.a,!1,a,"data-v-f056ff34",null);t.a=c.exports},function(s,t){},function(s,t,n){"use strict";var e=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"mocktest"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-md-center text text-success font-weight-bold"},[s._v("Corrent Answers = "+s._s(s.correctAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text text-danger font-weight-bold"},[s._v("Wrong Answers = "+s._s(s.wrongAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text text-warning font-weight-bold"},[s._v("No Answers ="+s._s(s.noAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[s._v("Total Points = "+s._s(s.totalPoints)+"/"+s._s(s.nQuestions))]),s._v(" "),n("hr"),s._v(" "),n("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[s._v("Wrong or No answers")]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[n("table",{staticClass:"table"},[s._m(0),s._v(" "),n("tbody",s._l(s.questions,function(t,e){return n("tr",[t.givenAnswer+1&&t.givenAnswer==t.correctAnswerIndex?s._e():n("th",{attrs:{scope:"row"}},[s._v(s._s(e))]),s._v(" "),t.givenAnswer+1&&t.givenAnswer==t.correctAnswerIndex?s._e():n("td",{staticClass:"text text-right"},[s._v(s._s(t.question))]),s._v(" "),t.givenAnswer+1&&t.givenAnswer==t.correctAnswerIndex?s._e():n("td",{staticClass:"text text-center"},[s._v(s._s(t.answers[t.correctAnswerIndex].text))])])}),0)])])])])},r=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[s._v("#")]),s._v(" "),n("th",{staticClass:"text text-right",attrs:{scope:"col"}},[s._v("Question")]),s._v(" "),n("th",{staticClass:"text text-center",attrs:{scope:"col"}},[s._v("Correct Answer")])])])}],i={render:e,staticRenderFns:r};t.a=i},function(s,t,n){"use strict";var e=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"test"}},[s._l(s.questions,function(t,e){return s.showTest?n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"coloredCol col col-sm-1 border",class:[s.colorClass[e]]}),s._v(" "),n("div",{staticClass:"questionCol col col-sm-5 border"},[s._v(s._s(t.question))]),s._v(" "),n("div",{staticClass:"answersCol col col-sm-5 border"},s._l(t.answers,function(r,i){return n("div",{staticClass:"form-check"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.givenAnswer,expression:"question.givenAnswer"}],staticClass:"form-check-input",attrs:{name:e,type:"radio",disabled:s.showCorrectAnswers},domProps:{value:i,checked:s._q(t.givenAnswer,i)},on:{change:function(n){return s.$set(t,"givenAnswer",i)}}}),s._v(" "),n("span",[s._v(s._s(s.pointers[i])+"- "+s._s(r.text))])])])}),0),s._v(" "),n("div",{staticClass:"resultCol col col-sm-1 border"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.showCorrectAnswers,expression:"showCorrectAnswers"}]},[s._v(s._s(s.pointers[t.correctAnswerIndex]))])])]):s._e()}),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-sm-3"},[n("button",{staticClass:"btn",attrs:{disabled:!s.showCorrectAnswers},on:{click:s.restart}},[s._v("Restart")])]),s._v(" "),n("div",{staticClass:"col col-sm-3"},[n("button",{staticClass:"btn",attrs:{disabled:!s.showCorrectAnswers},on:{click:s.retry}},[s._v("Retry")])]),s._v(" "),n("div",{staticClass:"col col-sm-3"},[n("button",{staticClass:"btn",attrs:{disabled:!s.showCorrectAnswers},on:{click:s.retryOnlyWrong}},[s._v("Retry wrong")])]),s._v(" "),n("div",{staticClass:"col col-sm-3"},[n("button",{staticClass:"btn",on:{click:s.refresh}},[s._v("Refresh")])]),s._v(" "),n("div",{staticClass:"col col-sm-3"},[n("button",{staticClass:"btn",on:{click:s.getResults}},[s._v("Get Results")])])]),s._v(" "),s.showResults?n("Results",{ref:"Results",attrs:{parameters:s.parameters,questions:s.questions}}):s._e(),s._v(" "),s.showModal?n("div",[n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col"},[s._v("\n                        "+s._s(s.text)+"\n                      ")])])])]),s._v(" "),n("div",{staticClass:"modal-footer"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col-md"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:s.shufflePosition}},[s._v("\n                          YES\n                        ")])]),s._v(" "),n("div",{staticClass:"col-md"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:s.noShufflePosition}},[s._v("\n                          NO\n                        ")])])])])])])])])])])],1):s._e()],2)},r=[],i={render:e,staticRenderFns:r};t.a=i},function(s,t,n){"use strict";var e=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"mocktest"}},[n("div",{staticClass:"container",attrs:{id:"header-mocktest"}},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.nQuestions,expression:"nQuestions"}],attrs:{type:"text",placeholder:"N° Questions"},domProps:{value:s.nQuestions},on:{input:function(t){t.target.composing||(s.nQuestions=t.target.value)}}})])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-lg-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.correctAnswersPoints,expression:"correctAnswersPoints"}],attrs:{type:"text",placeholder:"Points correct answer"},domProps:{value:s.correctAnswersPoints},on:{input:function(t){t.target.composing||(s.correctAnswersPoints=t.target.value)}}})]),s._v(" "),n("div",{staticClass:"col col-lg-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.wrongAnswersPoints,expression:"wrongAnswersPoints"}],attrs:{type:"text",placeholder:"Points wrong answer"},domProps:{value:s.wrongAnswersPoints},on:{input:function(t){t.target.composing||(s.wrongAnswersPoints=t.target.value)}}})]),s._v(" "),n("div",{staticClass:"col col-lg-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.noAnswersPoints,expression:"noAnswersPoints"}],attrs:{type:"text",placeholder:"Points no answer"},domProps:{value:s.noAnswersPoints},on:{input:function(t){t.target.composing||(s.noAnswersPoints=t.target.value)}}})])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col",on:{click:s.goOn}},[n("button",{staticClass:"btn"},[s._v("Go On")])])])]),s._v(" "),s.inputCreated?n("div",{staticClass:"container",attrs:{id:"body-mocktest"}},[n("Test",{ref:"Test",attrs:{allQuestions:s.allQuestions,parameters:s.parameters}})],1):s._e()])},r=[],i={render:e,staticRenderFns:r};t.a=i},function(s,t,n){"use strict";function e(s){n(130)}var r=n(50),i=n(131),o=n(5),a=e,c=o(r.a,i.a,!1,a,"data-v-2d1e20d2",null);t.a=c.exports},function(s,t){},function(s,t,n){"use strict";var e=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"table"}},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[s._v("#")]),s._v(" "),n("th",{attrs:{scope:"col"}},[s._v("Question")]),s._v(" "),n("th",{attrs:{scope:"col"}},[n("div",{staticClass:"row text text-right"},[s._v(" Answers ")]),s._v(" "),n("div",{staticClass:"row"},s._l(s.currentPointersArray,function(t){return n("div",{staticClass:"col col-md-1"},[s._v(s._s(t))])}),0)]),s._v(" "),n("th",{staticClass:"text text-left",attrs:{scope:"col"}},[s._v("String")])])]),s._v(" "),n("tbody",s._l(s.rows,function(t){return n("tr",[n("th",{attrs:{scope:"row"}},[s._v(s._s(t.numRow))]),s._v(" "),n("td",[n("button",{staticClass:"btn",class:{"btn-success":t.isQuestion},on:{click:function(n){return s.questionButton(t.numRow)}}})]),s._v(" "),n("td",[n("div",{staticClass:"row"},s._l(s.currentPointersArray,function(e){return n("div",{staticClass:"col col-md-1"},[n("button",{staticClass:"btn",class:t.pointer===e?"btn-info":"",on:{click:function(n){return s.answerButton(t.numRow,e)}}})])}),0)]),s._v(" "),n("td",{staticClass:"text text-left",class:{"text-success":t.isQuestion,"text-info":t.isAnswer,"text-danger":t.isCorrect}},[s._v(s._s(t.str))])])}),0)]),s._v(" "),n("button",{staticClass:"btn",on:{click:s.nextStep}},[s._v("Next step")]),s._v(" "),s.showModal?n("div",[n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container-fluid"},s._l(s.questions,function(t){return n("div",[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-lg-2 border"}),s._v(" "),n("div",{staticClass:"col col-lg-10 border font-weight-bold"},[s._v("\n                          "+s._s(t.question)+"\n                        ")])]),s._v(" "),s._l(t.answers,function(e){return n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-lg-2 border"},[n("button",{staticClass:"btn",class:{"btn-danger":e.isCorrect},on:{click:function(n){return s.correctAnswerButton(t.numQuestion,e.numAnswer)}}})]),s._v(" "),n("div",{staticClass:"col col-lg-10 border text text-left",class:{"text-danger":e.isCorrect}},[s._v("\n                          "+s._s(e.str)+"\n                        ")])])})],2)}),0)]),s._v(" "),n("div",{staticClass:"modal-footer"},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-lg-4"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:s.back}},[s._v(" Back ")])]),s._v(" "),n("div",{staticClass:"col col-lg-4"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:s.download}},[s._v(" Download ")])]),s._v(" "),n("div",{staticClass:"col col-lg-4"})])])])])])])])],1):s._e(),s._v(" "),s.showNumberModal?n("div",[n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col"},[s._v("\n                        Number of answers per question\n                      ")])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.numberOfAnswers,expression:"numberOfAnswers"}],attrs:{type:"text",placeholder:"0"},domProps:{value:s.numberOfAnswers},on:{input:function(t){t.target.composing||(s.numberOfAnswers=t.target.value)}}})])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:s.goOn}},[s._v(" OK ")])])])])])])])])])],1):s._e()])},r=[],i={render:e,staticRenderFns:r};t.a=i},function(s,t,n){"use strict";var e=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container",attrs:{id:"header"}},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.csvParsed,expression:"csvParsed"}],staticClass:"col",on:{click:s.createMockTest}},[n("button",{staticClass:"btn"},[s._v("Create Mock Test")])])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.csvParsed,expression:"csvParsed"}],staticClass:"col",on:{click:s.createJsonFromCsv}},[n("button",{staticClass:"btn"},[s._v("Create Json")])])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.jsonParsed,expression:"jsonParsed"}],staticClass:"col",on:{click:s.createMockTest}},[n("button",{staticClass:"btn"},[s._v("Create Mock Test")])])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.pdfParsed,expression:"pdfParsed"}],staticClass:"col",on:{click:s.createTable}},[n("button",{staticClass:"btn"},[s._v("Create Json")])])])]),s._v(" "),s.created?s._e():n("DragAndDrop",{ref:"dragAndDropComp",on:{changedFile:s.hideButtonCreate,parsedCsv:s.passFileData,parsedPDF:s.passPDFData,parsedJson:s.passJsonData}}),s._v(" "),n("div",{attrs:{id:"main"}},[s.created?n("router-view",{on:{refreshAll:s.clear}}):s._e()],1),s._v(" "),n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-6",attrs:{id:"clearButton"}},[n("button",{staticClass:"btn",on:{click:s.clear}},[s._v("Clear")])])])])],1)},r=[],i={render:e,staticRenderFns:r};t.a=i}],[52]);
//# sourceMappingURL=app.cc7150a2db3e14e3946f.js.map