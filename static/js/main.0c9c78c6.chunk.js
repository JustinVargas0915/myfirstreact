(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),l=(n(29),n(10)),o=n(2),i=n(20),j=n.n(i).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),d=function(){return j.get("/employees")},b=function(e){return j.post("/employees",e)},u=n(0),h=function(){var e=Object(c.useState)(""),t=e.name,n=e.setName,a=Object(c.useState)(""),s=a.location,r=a.setLocation,l=Object(c.useState)(""),i=l.department,j=l.setDepartment,d=Object(o.f)();return b({name:t,location:s,department:i}).then((function(e){console.log("Added new Employee!",e.data),d("/employees")})).catch((function(e){console.log("Something wnet Wrong! SADGE!")})),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Add Employee:"}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Add employee name",onChange:function(e){n(e.target.value)}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Add employee location",onChange:function(e){r(e.target.value)}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"department",placeholder:"Add employee department",onChange:function(e){j(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault()}(e)},children:"Submit!"})]})]})},O=n(5),m=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){d().then((function(e){a(e.data)})).catch((function(){return console.log("Sorry!")}))})),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{children:"List of Employees"}),Object(u.jsx)("div",{children:Object(u.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"table-danger",children:[Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("td",{children:"Location"}),Object(u.jsx)("td",{children:"Department"})]})}),Object(u.jsx)("tbody",{children:n.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.location}),Object(u.jsx)("td",{children:e.department})]})}))})]})})]})},x=(n.p,n(49),n(21)),p=n(22),f=n(24),v=n(23),g=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(x.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(p.a)(n,[{key:"decreaseCounter",value:function(){this.setState({count:this.state.count-1})}},{key:"reset",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"inc",onClick:function(t){return e.addCounter(t)},children:"Add Counter"}),Object(u.jsx)("button",{className:"dec",onClick:function(t){return e.decreaseCounter(t)},children:"Decrease Counter"}),Object(u.jsx)("button",{className:"reset",onClick:function(t){return e.reset(t)},children:"Reset Counter"}),Object(u.jsxs)("h1",{children:["Current Counter ng utak ko: ",this.state.count]})]})}}]),n}(a.a.Component),y=function(){return j.get("/hello")},N=function(){var e=Object(c.useState)("API is Down!"),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){y().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong JK!")}))})),n},C=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{class:"navbar-expand-lg navbar-light bg-light",children:[Object(u.jsx)("div",{class:"container-fluid"}),Object(u.jsx)("a",{class:"navbar-brand",href:"/",children:"ICS2608"}),Object(u.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(u.jsxs)("div",{class:"navbar-nav",children:[Object(u.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"Home"}),Object(u.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"}),Object(u.jsx)("a",{class:"nav-link",href:"/add",children:"Add Employee"}),Object(u.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":!0,children:"Disabled"})]})})]})})};var k=function(){return Object(u.jsx)("div",{className:"Home",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:"https://i.kym-cdn.com/photos/images/facebook/002/139/744/c27.png",className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{children:"POGGERS!"}),Object(u.jsx)("p",{children:N()}),Object(u.jsx)(g,{}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},S=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Page Not Found!"}),Object(u.jsx)("h2",{children:"*Ragemode: ON*"})]})},A=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",element:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/employees",element:Object(u.jsx)(m,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/add",element:Object(u.jsx)(h,{})}),Object(u.jsx)(o.a,{exact:!0,path:"*",element:Object(u.jsx)(S,{})})]})})})};var E=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(C,{}),Object(u.jsx)(A,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(50);r.a.render(Object(u.jsxs)(a.a.StrictMode,{children:[Object(u.jsx)(E,{}),Object(u.jsx)(E,{})]}),document.getElementById("root")),D()}},[[51,1,2]]]);
//# sourceMappingURL=main.0c9c78c6.chunk.js.map