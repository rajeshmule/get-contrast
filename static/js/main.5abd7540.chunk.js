(this["webpackJsonpget-contrast"]=this["webpackJsonpget-contrast"]||[]).push([[0],{11:function(t,e,o){t.exports=o(30)},18:function(t,e,o){},30:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(5),c=o.n(r),s=o(1),i=o.n(s),u=o(2),l=o(6),d=o(7),p=o(9),f=o(8),h=o(10);o(17),o(18);var b=function(t){var e={backgroundColor:t.data.buttoncolor,color:t.data.bodycolor};return n.a.createElement("div",{className:"btn",style:e,onClick:function(){return t.setData()}},t.data.buttoncolor)};var m=function(t){var e={color:t.data.buttoncolor,backgroundColor:t.data.bodycolor};return console.log("home",t.data.post),n.a.createElement("div",{className:"body",style:e},n.a.createElement("h1",{className:"bodyfont"},t.data.post.en),n.a.createElement(b,{data:t.data,setData:t.setData}))},v=o(3),y=o.n(v),g=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},w=function(){for(var t=g(),e=g(),o=y.a.isAccessible(t,e);!o;)e=g(),o=y.a.isAccessible(t,e);return{ratio:y.a.ratio(t,e).toFixed(2),score:y.a.score(t,e),pair:[t,e]}},k=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://programming-quotes-api.herokuapp.com/quotes/random",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(i.a.mark((function t(){var e,o,a,n,r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("get data"),t.next=3,k();case 3:return e=t.sent,t.next=6,w();case 6:return o=t.sent,a=[o.pair[0],o.pair[1]],n=a[0],r=a[1],c=o.ratio,s=o.score,console.log({data:{post:e,bodycolor:n,buttoncolor:r,ratio:c,score:s}}),t.abrupt("return",{post:e,bodycolor:n,buttoncolor:r,ratio:c,score:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(t){function e(t){var o;return Object(l.a)(this,e),(o=Object(p.a)(this,Object(f.a)(e).call(this,t))).setData=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,o.setState(e);case 4:case"end":return t.stop()}}),t)}))),o.state={bodycolor:"black",buttoncolor:"white",ratio:"",score:"",post:{}},o}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){console.log("cdm");try{this.setData()}catch(t){}}},{key:"render",value:function(){return n.a.createElement(m,{data:this.state,setData:this.setData})}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.5abd7540.chunk.js.map