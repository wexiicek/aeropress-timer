(this["webpackJsonpaeropress-timer"]=this["webpackJsonpaeropress-timer"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(5),i=n.n(u),l=(n(13),n(1)),o=n(3),c=n(2),m=function(e){var t=e.data,n=e.setData,u={pourTime:"",stirTime:"",brewTime:""},i=Object(a.useState)({pourTime:"10",stirTime:"10",brewTime:"45"}),m=Object(l.a)(i,2),s=m[0],p=m[1],f=Object(a.useState)(!1),b=Object(l.a)(f,2),d=b[0],T=b[1],E=function(e){e.target.validity.valid?(console.log(e.target),p(Object(c.a)(Object(c.a)({},s),{},Object(o.a)({},e.target.name,e.target.value)))):(T((function(e){return"Please use only numbers."})),setTimeout((function(){T((function(e){return!1}))}),3e3))};return r.a.createElement(a.Fragment,null,d&&r.a.createElement("p",{id:"error"},d),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"pourTime"},"Pour Time (seconds)"),r.a.createElement("input",{type:"text",name:"pourTime",id:"pourTime",value:s.pourTime,onChange:E,disabled:0!==t.input.length,maxLength:"3",pattern:"[0-9]*",autoComplete:"off",autoCorrect:"off"}),r.a.createElement("label",{htmlFor:"stirTime"},"Stir Time (seconds)"),r.a.createElement("input",{type:"text",name:"stirTime",id:"stirTime",value:s.stirTime,onChange:E,disabled:0!==t.input.length,maxLength:"3",pattern:"[0-9]*",autoComplete:"off",autoCorrect:"off"}),r.a.createElement("label",{htmlFor:"brewTime"},"Brew Time (seconds)"),r.a.createElement("input",{type:"text",name:"brewTime",id:"brewTime",value:s.brewTime,onChange:E,disabled:0!==t.input.length,maxLength:"3",pattern:"[0-9]*",autoComplete:"off",autoCorrect:"off"}),r.a.createElement("label",{htmlFor:"useSound"},"Use Sound",r.a.createElement("input",{type:"checkbox",name:"useSound",id:"useSound",checked:t.useSound,disabled:0!==t.input.length,onChange:function(e){0===t.input.length&&n(Object(c.a)(Object(c.a)({},t),{},{useSound:!t.useSound}))}})),r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),""===s.brewTime||""===s.pourTime||""===s.stirTime?(T((function(e){return"Please fill in all the fields."})),setTimeout((function(){T((function(e){return!1}))}),3e3)):(n(Object(c.a)(Object(c.a)({},t),{},{input:s})),p(u))},disabled:""===s.brewTime||""===s.pourTime||""===s.stirTime},"Start Timer"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),p(u)},disabled:0!==t.input.length},"Clear")))},s=n(6),p=n(7),f=n.n(p),b=function(e){var t=e.data,n=e.setData,u=Object(s.a)(f.a),i=Object(l.a)(u,1)[0],o=Object(a.useState)(""),m=Object(l.a)(o,2),p=m[0],b=m[1],d=Object(a.useState)(0),T=Object(l.a)(d,2),E=T[0],h=T[1],g=Object(a.useState)(!1),j=Object(l.a)(g,2),v=j[0],O=j[1];return Object(a.useEffect)((function(){var e=[1e3*parseInt(t.input.pourTime),1e3*parseInt(t.input.stirTime),1e3*parseInt(t.input.brewTime)];if(0!==t.input.length){b((function(e){return"pour"})),h(e[0]/1e3);var a=setInterval((function(){h((function(e){return e-1}))}),1e3);setTimeout((function(){t.useSound&&i(),b((function(e){return"stir"})),h(e[1]/1e3),clearInterval(a),a=setInterval((function(){h((function(e){return e-1}))}),1e3),setTimeout((function(){t.useSound&&i(),b((function(e){return"brew"})),h(e[2]/1e3),clearInterval(a),a=setInterval((function(){h((function(e){return e-1}))}),1e3),setTimeout((function(){t.useSound&&i(),b((function(e){return""})),clearInterval(a),O((function(e){return!0})),n(Object(c.a)(Object(c.a)({},t),{},{input:[]})),setTimeout((function(){O(!1)}),3e3)}),e[2]+1e3)}),e[1]+1e3)}),e[0]+1e3)}}),[t,n,i]),r.a.createElement("div",{className:"progress"},""!==p&&r.a.createElement("h2",null,"Active Timer Progress"),"pour"===p&&r.a.createElement("h3",null,"Pouring"),"stir"===p&&r.a.createElement("h3",null,"Stirring"),"brew"===p&&r.a.createElement("h3",null,"Brewing"),""!==p&&r.a.createElement("p",null,E),v&&r.a.createElement("h3",null,"Enjoy Your Coffee!"," ",r.a.createElement("span",{role:"img","aria-label":"Coffee emoji"},"\u2615")," "))},d=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"AeroPress Timer"),r.a.createElement("p",null,"Aeropress Timer is a utility that helps you brew the perfect Aeropress cup of coffee. Every time."))},T=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://dominikjuriga.me"},"Dominik Juriga")))};var E=function(){var e=Object(a.useState)({input:[],useSound:!0}),t=Object(l.a)(e,2),n=t[0],u=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(m,{data:n,setData:u}),r.a.createElement(b,{data:n,setData:u}),r.a.createElement(T,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n.p+"static/media/bell.53f632f2.mp3"},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.605ddcf1.chunk.js.map