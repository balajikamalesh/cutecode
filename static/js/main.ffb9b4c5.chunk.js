(this.webpackJsonpcutecode=this.webpackJsonpcutecode||[]).push([[0],{11:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(11),a(1)),i=(a(12),a(13),a(14),a(15),a(16),a(5));function s(e){var t=e.language,a=e.displayName,r=e.value,l=e.onChange,s=Object(n.useState)(!0),u=Object(o.a)(s,2),m=u[0],p=u[1];return c.a.createElement("div",{className:"editor-container ".concat(m?"":"collapsed")},c.a.createElement("div",{className:"editor-title"},a,c.a.createElement("button",{onClick:function(){return p((function(e){return!e}))}},"X")),c.a.createElement(i.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:r,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}}))}function u(e,t){var a="codepen-clone-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!==e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(o.a)(c,2),l=r[0],i=r[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,i]}var m=function(){var e=u("html",""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=u("css",""),i=Object(o.a)(l,2),m=i[0],p=i[1],d=u("js",""),f=Object(o.a)(d,2),g=f[0],b=f[1],v=Object(n.useState)(""),E=Object(o.a)(v,2),h=E[0],j=E[1];return Object(n.useEffect)((function(){setTimeout((function(){j("\n      <html>\n        <body>".concat(a,"</body>\n        <style>").concat(m,"</style>\n        <script>").concat(g,"<\/script>\n      </html>\n    "))}),250)}),[a,m,g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pane top-pane"},c.a.createElement(s,{language:"xml",displayName:"HTML",value:a,onChange:r}),c.a.createElement(s,{language:"css",displayName:"CSS",value:m,onChange:p}),c.a.createElement(s,{language:"javascript",displayName:"JS",value:g,onChange:b})),c.a.createElement("div",{className:"pane"},c.a.createElement("iframe",{srcDoc:h,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(18)}},[[6,1,2]]]);
//# sourceMappingURL=main.ffb9b4c5.chunk.js.map