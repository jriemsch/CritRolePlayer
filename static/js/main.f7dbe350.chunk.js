(this.webpackJsonpCritRolePlayer=this.webpackJsonpCritRolePlayer||[]).push([[0],{235:function(t,e,n){},26:function(t,e,n){},268:function(t,e,n){"use strict";n.r(e);var i=n(2),a=(n(139),n(0)),r=n(45),c=n.n(r),s=(n(235),n(26),n(10)),o=n(134),u=n(46),l=n(37),d=n(135),p=n(63),h=n(87),j=n(39),f=n(43),b=n(28),O=n(36);var v=function(t){var e=t.data,n=t.onSelect;return Object(i.jsxs)(O.a,{className:"mb-2 h-100",bg:"dark",text:"white",border:"dark",onClick:function(){return n()},children:[Object(i.jsx)(O.a.Img,{variant:"top",src:e.snippet.thumbnails.medium.url}),Object(i.jsx)(O.a.Footer,{children:e.snippet.title})]})},m=n(17),g=n.n(m),x=n(32),w=n(66),y=n.n(w),k="http://192.168.0.124:8080",S={handleSignIn:function(){var t=Object(x.a)(g.a.mark((function t(){var e,n,i,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(k+"/auth/token/cached");case 2:if(e=t.sent,!(n=e.data.token)){t.next=13;break}return t.next=7,new Promise((function(t){return window.gapi.load("client",t)}));case 7:return window.gapi.client.setToken(n),t.next=10,window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");case 10:return t.abrupt("return",t.sent);case 13:return t.next=15,y.a.get(k+"/auth/authUrl");case 15:i=t.sent,a=i.data.authUrl,window.location.href=a;case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),handleAuth2Callback:function(){var t=Object(x.a)(g.a.mark((function t(e){var n,i,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.substr(1).split("&").map((function(t){return t.split("=")})),i=n.find((function(t){return"code"===t[0]}))[1],t.next=4,new Promise((function(t){return window.gapi.load("client",t)}));case 4:return t.next=6,y.a.get(k+"/auth/token?code="+i);case 6:return a=t.sent,window.gapi.client.setToken(a.data.token),window.localStorage.setItem("youtube_token",JSON.stringify(a.data.token)),t.next=11,window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),signOut:function(){window.localStorage.removeItem("youtube_token")},listChannel:function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.youtube.channels.list({part:["snippet,contentDetails,statistics"],mine:!0});case 2:return e=t.sent,t.abrupt("return",e.result);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),listPlaylists:function(){var t=Object(x.a)(g.a.mark((function t(e){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.youtube.playlists.list({part:["snippet,contentDetails"],maxResults:25,channelId:e});case 2:return n=t.sent,t.abrupt("return",n.result);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),listPlaylistItems:function(){var t=Object(x.a)(g.a.mark((function t(e,n,i){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.youtube.playlistItems.list({part:["snippet,contentDetails"],maxResults:n,playlistId:e,pageToken:i});case 2:return a=t.sent,t.abrupt("return",a.result);case 4:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),listSubscriptions:function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.youtube.subscriptions.list({part:["snippet,contentDetails"],maxResults:25,mine:!0});case 2:return e=t.sent,t.abrupt("return",e.result);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),listActivities:function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.youtube.activities.list({part:["snippet,contentDetails"],maxResults:25,mine:!0});case 2:return e=t.sent,t.abrupt("return",e.result);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),search:function(){var t=Object(x.a)(g.a.mark((function t(e){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.youtube.search.list({part:["snippet"],maxResults:25,type:"playlist",q:e});case 2:return n=t.sent,t.abrupt("return",n.result);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var I=function(t){var e=t.channelId,n=t.filter.toLowerCase(),r=t.onSelectPlaylist,c=Object(a.useState)({items:[]}),o=Object(s.a)(c,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){S.listPlaylists(e).then(l).catch((function(){return l({items:[]})}))}),[e]),Object(i.jsx)(f.a,{md:3,children:u.items.filter((function(t){return(e=t).snippet.title.toLowerCase().indexOf(n)>=0||e.snippet.description.toLowerCase().indexOf(n)>=0;var e})).map((function(t){return Object(i.jsx)(b.a,{children:Object(i.jsx)(v,{data:t,onSelect:function(){return r(t.id)}})},t.id)}))})},C=n(88),M=n(89);var T=function(t){var e=t.data,n=t.onSelect,a=t.selected;return Object(i.jsxs)(O.a,{className:"mb-2 h-100",bg:"dark",text:"white",border:a?"light":"dark",onClick:function(){return n()},children:[Object(i.jsx)(O.a.Img,{variant:"top",src:e.snippet.thumbnails.medium.url}),Object(i.jsx)(O.a.Footer,{children:e.snippet.title})]})},P=3*Math.floor(50/3);var E=function(t){var e=t.onSelectPlaylistItem,n=t.playlistId,r=t.playlistItems,c=t.onPlaylistItemsLoaded,o=t.selected,u=t.filter.toLowerCase(),l=Object(a.useState)(!1),d=Object(s.a)(l,2),p=d[0],h=d[1],j=Object(a.useRef)();return Object(a.useEffect)((function(){h(!0),S.listPlaylistItems(n,P).then((function(t){return c(t)})).catch((function(){})).then((function(){return h(!1)}))}),[n]),Object(a.useEffect)((function(){j.current&&j.current.scrollIntoView({behavior:"smooth",block:"nearest"})}),[o]),Object(a.useLayoutEffect)((function(){function t(){var t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),e=window.pageYOffset>t-window.innerHeight-100;!p&&r.nextPageToken&&e&&(h(!0),S.listPlaylistItems(n,P,r.nextPageToken).then((function(t){return c(Object(M.a)(Object(M.a)({},t),{},{items:[].concat(Object(C.a)(r.items),Object(C.a)(t.items))}))})).catch((function(){})).then((function(){return h(!1)})))}return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[n,r,p,u]),Object(i.jsx)("div",{children:Object(i.jsx)(f.a,{md:3,children:r.items.filter((function(t){return function(t){return t.snippet.title.toLowerCase().indexOf(u)>=0||t.snippet.description.toLowerCase().indexOf(u)>=0}(t)})).map((function(t){return Object(i.jsx)(b.a,{children:o&&o.id===t.id?Object(i.jsx)("div",{ref:j,children:Object(i.jsx)(T,{selected:!0,data:t,onSelect:function(){return e(t)}})}):Object(i.jsx)(T,{selected:!1,data:t,onSelect:function(){return e(t)}})},t.id)}))})})};var L=function(t){var e=t.onSignedIn;return Object(a.useEffect)((function(){S.handleSignIn().then(e)}),[]),Object(i.jsx)("div",{})};var D=function(t){var e=t.width,n=t.height,r=t.opacity,c=t.selWidth,o=t.selMove,u=t.selOpacity,l=t.top,d=t.children,p=Object(a.useState)(!1),h=Object(s.a)(p,2),j=h[0],f=h[1],b=Object(a.useState)(!1),O=Object(s.a)(b,2),v=O[0],m=O[1],g=j||v,x=g?c:e,w=g?o+15:0,y=g?u:r,k=g?"opacity 0.5s, width 0.25s, margin-left 0.25s":"opacity 0.5s linear 0.25s, width 0.25s linear 0.25s, margin-left 0.25s linear 0.25s",S=g?"opacity 0.25s linear 0.25s, width 0.25s":"opacity 0.25s, width 0.25s linear 0.25s";return Object(i.jsx)("div",{tabIndex:"0",className:"position-absolute bg-secondary rounded-pill",style:{outline:0,zIndex:10,width:x,height:n,marginLeft:w,opacity:y,top:l,transition:k},variant:"secondary",onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:Object(i.jsx)("div",{style:{display:"table-cell",padding:"0 20px 0 20px",opacity:g?1:0,overflow:"hidden",width:x,height:n,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",transition:S},children:d})})};var N=function(t){var e=t.getCurrentTime,n=t.value,r=t.onTimeChanged,c=Object(a.useState)(n),o=Object(s.a)(c,2),u=o[0],l=o[1],d=""!==u?function(t){var e=Math.floor(t/60),n="0"+Math.floor(t%60),i=Math.floor(t%1*10);return e+":"+n.substr(n.length-2)+"."+i}(u):u;return Object(i.jsx)(j.a,{variant:"light",onClick:function(t){var n;n=e(),l(n),r(n)},children:d})},R=n(136);var V=function(t){var e=t.curTime,n=t.maxTime,r=t.active,c=t.onTimeChanged,o=Object(a.useState)(null),u=Object(s.a)(o,2),l=u[0],d=u[1];return Object(i.jsx)("div",{style:{paddingLeft:15,paddingRight:15,paddingTop:r?0:2,transition:"padding-top 0.5s"},children:Object(i.jsx)(R.a,{variant:"light",className:"bg-secondary",now:e,max:n,onMouseDown:function(t){d(t.clientX);var e=t.clientX,i=t.target.clientWidth,a=Math.max(0,Math.min(n,e/i*n));console.log(e),c(a,!1)},onMouseMove:function(t){if(l){var e=t.clientX,i=t.target.clientWidth,a=Math.max(0,Math.min(n,e/i*n));c(a,!1)}},onMouseUp:function(t){if(l){var e=t.clientX,i=t.target.clientWidth,a=Math.max(0,Math.min(n,e/i*n));c(a,!0),d(null)}},style:{height:r?6:3,opacity:r?.5:0,transition:"opacity 0.5s, height 0.5s"}})})},H=n(131),W=1070;var A=function(t){var e=t.videoId,n=t.onVideoEnded,r=Object(a.useState)(null),c=Object(s.a)(r,2),o=c[0],u=c[1],l=Object(a.useState)("from"),d=Object(s.a)(l,2),p=d[0],h=d[1],O=Object(a.useState)("to"),v=Object(s.a)(O,2),m=v[0],g=v[1],x=Object(a.useState)(0),w=Object(s.a)(x,2),y=w[0],k=w[1],S=Object(a.useState)(0),I=Object(s.a)(S,2),C=I[0],M=I[1],T=Object(a.useState)(!1),P=Object(s.a)(T,2),E=P[0],L=P[1];function R(){return o.getCurrentTime()}return Object(a.useEffect)((function(){if(o){var t=window.localStorage.getItem("timerange_"+e);if(t){var n=JSON.parse(t);h(n.f),g(n.t),o.cueVideoById({videoId:e,startSeconds:n.f,endSeconds:n.t}),o.playVideo()}else h("from"),g("to"),o.playVideo()}}),[o,e]),Object(a.useEffect)((function(){var t=setInterval((function(){o&&(k(o.getCurrentTime()),M(o.getDuration()))}),100);return function(){return clearInterval(t)}}),[o]),Object(i.jsxs)(f.a,{className:"no-gutters",children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)("div",{style:{width:20}}),Object(i.jsxs)(D,{top:20,width:20,height:50,opacity:.2,selWidth:200,selMove:-100,selOpacity:.9,children:[Object(i.jsx)(N,{value:p,onTimeChanged:h,getCurrentTime:R})," - ",Object(i.jsx)(N,{value:m,onTimeChanged:g,getCurrentTime:R})]}),Object(i.jsx)(D,{top:90,width:20,height:50,opacity:.2,selWidth:200,selMove:-100,selOpacity:.9})]}),Object(i.jsxs)(b.a,{style:{padding:"0 0 0 0"},children:[Object(i.jsx)(H.a,{containerClassName:"position-absolute",videoId:e,opts:{width:W,height:601.875},onReady:function(t){return(e=t).target.playVideo(),void u(e.target);var e},onEnd:function(t){return n(t)}}),Object(i.jsxs)("div",{style:{position:"absolute",zIndex:10,width:W,height:601.875},onMouseEnter:function(){return L(!0)},onMouseLeave:function(){return L(!1)},children:[Object(i.jsx)("br",{}),Object(i.jsx)(V,{curTime:y,maxTime:C,active:E,onTimeChanged:function(t,e){o.seekTo(t,e)}})]}),Object(i.jsx)("div",{style:{width:W,height:601.875}}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{onClick:function(){return o.cueVideoById({videoId:e,startSeconds:p,endSeconds:m}),void o.playVideo()},children:"Play Timerange"}),Object(i.jsx)(j.a,{onClick:function(){window.localStorage.setItem("timerange_"+e,JSON.stringify({f:p,t:m}))},children:"Record Timerange"})]}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)("div",{style:{width:20}}),Object(i.jsx)(D,{top:20,width:20,height:50,opacity:.2,selWidth:200,selMove:-100,selOpacity:.9})]})]})};var B=function(){var t=Object(a.useState)("instances"),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),f=Object(s.a)(c,2),b=f[0],O=f[1],v=Object(a.useState)(""),m=Object(s.a)(v,2),g=m[0],x=m[1],w=Object(a.useState)(null),y=Object(s.a)(w,2),k=y[0],C=y[1],M=Object(a.useState)({items:[]}),T=Object(s.a)(M,2),P=T[0],D=T[1],N=Object(a.useState)(""),R=Object(s.a)(N,2),V=R[0],H=R[1],W=Object(a.useState)(""),B=Object(s.a)(W,2),J=B[0],X=B[1];function F(t){t.preventDefault()}function _(){O(null),C(null),S.signOut(),r("playlists")}function U(t){"videos"===n?X(t):H(t)}return Object(a.useEffect)((function(){"/oauth2callback"===window.location.pathname?S.handleAuth2Callback(window.location.search).then((function(){return S.listChannel()})).then((function(t){O(t.items[0].id),window.history.pushState({},"","/#playlists"),r("playlists")})):r(window.location.hash.substr(1))}),[]),Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"bg-light page-background"}),Object(i.jsxs)("div",{className:"page-content",children:[Object(i.jsxs)(u.a,{bg:"secondary",collapseOnSelect:!0,expand:"lg",variant:"dark",sticky:"top",children:[Object(i.jsx)(u.a.Brand,{children:"CritRolePlayer"}),Object(i.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(i.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(i.jsx)(l.a,{className:"mr-auto"}),Object(i.jsxs)(l.a,{children:[Object(i.jsx)(l.a.Link,{active:"playlists"===n,href:"#playlists",onMouseDown:F,onClick:function(){return r("playlists")},children:"Playlists"}),Object(i.jsx)(l.a.Link,{active:"videos"===n,href:"#videos",onMouseDown:F,onClick:function(){return r("videos")},children:"Videos"}),b?Object(i.jsx)(l.a.Link,{active:"signout"===n,href:"#signout",onMouseDown:F,onClick:function(){return _()},children:"Sign Out"}):Object(i.jsx)(l.a.Link,{active:"signin"===n,href:"#signin",onMouseDown:F,onClick:function(){return r("signin")},children:"Sign In"})]}),Object(i.jsx)(l.a,{className:"mr-auto"}),Object(i.jsx)(d.a,{inline:!0,children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(p.a,{value:"videos"===n?J:V,type:"text",placeholder:"Filter",onChange:function(t){return U(t.target.value)}}),Object(i.jsx)(h.a.Append,{children:Object(i.jsx)(j.a,{variant:"outline-light",onMouseDown:F,onClick:function(){return U("")},children:"X"})})]})})]})]}),Object(i.jsx)(u.a,{bg:"dark",expand:"lg",variant:"dark",sticky:"top",style:{padding:"0 0 0 0"},children:k?Object(i.jsx)(A,{videoId:k.contentDetails.videoId,onVideoEnded:function(){return function(){var t=P.items.findIndex((function(t){return t.id===k.id}));t&&t<P.items.length-1&&C(P.items[t+1])}()}}):""}),Object(i.jsxs)("div",{children:["playlists"===n?Object(i.jsx)(I,{filter:V,channelId:b,onSelectPlaylist:function(t){return function(t){r("videos"),x(t)}(t)}}):"","videos"===n?Object(i.jsx)(E,{filter:J,selected:k,playlistItems:P,playlistId:g,onSelectPlaylistItem:function(t){return function(t){C(t)}(t)},onPlaylistItemsLoaded:function(t){return D(t)}}):"","signin"===n?Object(i.jsx)(L,{onSignedIn:function(){S.listChannel().then((function(t){O(t.items[0].id),window.history.pushState({},"","/#playlists"),r("playlists")})).catch((function(){return _()}))}}):""]})]})]})})};var J=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(B,{})})};n(267);c.a.render(Object(i.jsx)(J,{}),document.getElementById("root"))}},[[268,1,2]]]);
//# sourceMappingURL=main.f7dbe350.chunk.js.map