"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[272],{7272:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=n(9434),r=function(t){return t.contacts.items},s=function(t){return t.filter.value},c=function(t){return t.contacts.isLoading},o=function(t){return t.contacts.error},l=n(3634),i="ContactForm_form__dhl+T",u="ContactForm_formInput__GszVU",m="ContactForm_formBtn__qZGY3",d=n(184),h=function(){var t=(0,a.v9)(r),e=(0,a.I0)();return(0,d.jsxs)("form",{className:i,onSubmit:function(n){n.preventDefault();var a=!1,r=n.target,s=r.name.value,c=r.number.value,o=s.toLowerCase(),i={name:s,number:c};t.forEach((function(t){var e=t.name;e.toLowerCase()===o&&(alert("".concat(e," is already in contacts")),a=!0)})),a||(e((0,l.uK)(i)),r.reset())},children:[(0,d.jsxs)("label",{htmlFor:"name",children:["Name",(0,d.jsx)("input",{className:u,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"e.g. John Doe",required:!0})]}),(0,d.jsxs)("label",{htmlFor:"number",children:["Number",(0,d.jsx)("input",{className:u,autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"e.g. 123-456-789",required:!0})]}),(0,d.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})},f=n(4808),p="Filter_filterInput__1Cysk",_=function(){var t=(0,a.I0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("label",{htmlFor:"filter",children:"Find contacts by name or number"}),(0,d.jsx)("input",{className:p,type:"text",name:"filter",onChange:function(e){var n=e.target.value.toLowerCase();t((0,f.T)(n))}})]})},x={contactsList:"Contacts_contactsList__CfysI",contactsItem:"Contacts_contactsItem__1aoky",contactBtn:"Contacts_contactBtn__W8cXP"},v=function(){var t=(0,a.I0)(),e=(0,a.v9)(r),n=(0,a.v9)(s),c=(0,a.v9)(o),i=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())||t.number.replace(/-|\s/g,"").includes(n.replace(/-|\s/g,""))}));return i.length>0?(0,d.jsx)("ul",{className:x.ContactList,children:i.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,d.jsxs)("li",{className:x.contactsItem,children:[a,": ",r,(0,d.jsx)("button",{className:x.contactBtn,type:"submit",onClick:function(){return t((0,l.GK)(n))},children:"Delete"})]},n)}))}):c&&(0,d.jsxs)("p",{children:["Error: ",c]})||(0,d.jsx)("p",{children:"No contacts."})},C=n(1326),b=function(){var t=(0,a.v9)(c),e=(0,a.v9)(o);return(0,d.jsxs)("div",{className:C.Z.container,children:[(0,d.jsx)("div",{className:C.Z.contactform,children:(0,d.jsx)(h,{})}),(0,d.jsxs)("div",{className:C.Z.filter,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(_,{}),t&&!e?(0,d.jsx)("p",{children:"Loading..."}):(0,d.jsx)(v,{})]})]})}},1326:function(t,e){e.Z={container:"Home_container__AHomM",title:"Home_title__qAdt+"}}}]);
//# sourceMappingURL=272.041de649.chunk.js.map