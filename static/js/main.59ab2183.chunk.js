(this["webpackJsonpreact-youtube-app"]=this["webpackJsonpreact-youtube-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){e.exports={app:"youtube_app__2DNvw",items:"youtube_items__12Ccg",item:"youtube_item__1rjH6",meta:"youtube_meta__3Myju"}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(4),l=a.n(u),o=(a(11),a(1)),c=a.n(o),i=a(2),s=a(5);a(13);function m(){return(m=Object(s.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent(t),e.next=3,fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q="+t,{method:"GET",headers:{"x-rapidapi-host":"youtube-search-results.p.rapidapi.com","x-rapidapi-key":"b54663a5e6msh64cb43d3524bb21p186d22jsnb6eb1989079a"}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,console.log(n),e.abrupt("return",n.items.filter((function(e){return"video"===e.type})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){var e=r.a.useState("React tutorial"),t=Object(i.a)(e,2),a=t[0],n=t[1],u=r.a.useState(null),l=Object(i.a)(u,2),o=l[0],c=l[1];return r.a.createElement("div",{className:"app"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){return m.apply(this,arguments)}(a).then(c)}},r.a.createElement("input",{autoFocus:!0,value:a,onChange:function(e){return n(e.target.value)}}),r.a.createElement("button",null,"Search YouTube")),o&&(0===o.length?r.a.createElement("p",null,"No results"):r.a.createElement("ul",{className:"items"},o.map((function(e){return r.a.createElement("li",{className:"item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,r.a.createElement("a",{href:e.link},e.title)),r.a.createElement("p",null,e.description)),r.a.createElement("ul",{className:"meta"},r.a.createElement("li",null,"By: ",r.a.createElement("a",{href:e.author.ref},e.author.name)),r.a.createElement("li",null,"Views: ",e.views),r.a.createElement("li",null,"Duration: ",e.duration),r.a.createElement("li",null,"Uploaded: ",e.uploaded_at)),r.a.createElement("img",{alt:"",src:e.thumbnail}))})))))},h=(a(14),function(){return r.a.createElement("div",null,r.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.59ab2183.chunk.js.map