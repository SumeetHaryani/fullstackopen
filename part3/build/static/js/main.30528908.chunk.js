(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(20),t(14)),l=t(2),i=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"Filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){return console.log("Person -> props",e),e.persons.map((function(n){return r.a.createElement("p",{key:n.name},n.name,"\xa0",n.number,r.a.createElement("button",{onClick:function(){return e.handleDelete(n.id,n.name)}},"delete"))}))},f=function(e){var n=e.onSubmit,t=e.name,a=e.number;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t.value,onChange:t.onChange})),r.a.createElement("div",null,"number:",r.a.createElement("input",{type:"number",value:a.value,onChange:a.onChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=t(3),d=t.n(s),h="/api/persons",b=function(){return d.a.get(h).then((function(e){return e.data}))},v=function(e){return d.a.post(h,e).then((function(e){return e.data}))},p=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e}))},g=function(e){var n=e.message,t="error";return n.startsWith("Added")&&(t="add"),""===n?(t="",null):r.a.createElement("div",{className:t},n)};var j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),d=s[0],h=s[1],j=Object(a.useState)(""),w=Object(l.a)(j,2),C=w[0],O=w[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],D=k[1],A=Object(a.useState)(""),q=Object(l.a)(A,2),I=q[0],J=q[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var L=""===y?t:t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:I}),r.a.createElement(i,{value:y,onChange:function(e){D(e.target.value)}}),r.a.createElement("h1",null,"Add a new "),r.a.createElement(f,{onSubmit:function(e){e.preventDefault();var n=function(){var e=t.filter((function(e){return e.name===d}));return{unique:!(e.length>0),obj:e[0]}}();if(n.unique&&0!==d.length)v({name:d,number:C}).then((function(e){u(t.concat(e)),h(""),O(""),J("Added ".concat(e.name)),setTimeout((function(){J("")}),5e3)}));else if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var a=Object(c.a)({},n.obj,{number:C}),r=a.id;p(r,a).then((function(e){u(t.map((function(n){return n.id!==r?n:e})))}))}},name:{value:d,onChange:function(e){h(e.target.value)}},number:{value:C,onChange:function(e){O(e.target.value)}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:L,handleDelete:function(e,n){window.confirm("Delete ".concat(n," ?"))&&E(e).then((function(){return u(t.filter((function(n){return n.id!==e})))})).catch((function(e){J("Information of ".concat(n," has been already removed from server")),setTimeout((function(){J("")}),5e3)}))}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.30528908.chunk.js.map