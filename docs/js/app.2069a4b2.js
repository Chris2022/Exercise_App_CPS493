(function(e){function s(s){for(var t,i,l=s[0],r=s[1],o=s[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);b&&b(s);while(f.length)f.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,s=0;s<n.length;s++){for(var a=n[s],t=!0,i=1;i<a.length;i++){var l=a[i];0!==c[l]&&(t=!1)}t&&(n.splice(s--,1),e=r(r.s=a[0]))}return e}var t={},i={app:0},c={app:0},n=[];function l(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4265dde2"}[e]+".js"}function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var s=[],a={about:1};i[e]?s.push(i[e]):0!==i[e]&&a[e]&&s.push(i[e]=new Promise((function(s,a){for(var t="css/"+({about:"about"}[e]||e)+"."+{about:"e9c0f5da"}[e]+".css",c=r.p+t,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var o=n[l],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===t||u===c))return s()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){o=f[l],u=o.getAttribute("data-href");if(u===t||u===c)return s()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=s,b.onerror=function(s){var t=s&&s.target&&s.target.src||c,n=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=t,delete i[e],b.parentNode.removeChild(b),a(n)},b.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){i[e]=0})));var t=c[e];if(0!==t)if(t)s.push(t[2]);else{var n=new Promise((function(s,a){t=c[e]=[s,a]}));s.push(t[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(e);var f=new Error;o=function(s){u.onerror=u.onload=null,clearTimeout(b);var a=c[e];if(0!==a){if(a){var t=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",f.name="ChunkLoadError",f.type=t,f.request=i,a[1](f)}c[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(s)},r.m=e,r.c=t,r.d=function(e,s,a){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)r.d(a,t,function(s){return e[s]}.bind(null,t));return a},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/docs/",r.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=s,o=o.slice();for(var f=0;f<o.length;f++)s(o[f]);var b=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,s,a){e.exports=a("56d7")},"1b59":function(e,s,a){},"1cf4":function(e,s,a){},"1e2b":function(e,s,a){"use strict";a("52db")},"3b42":function(e,s,a){"use strict";var t=a("a18c"),i=a("5b34"),c={user:null,messages:[],toRoute:"/activity",Login:function(e,s){var a=Object(i["b"])(e,s);this.user=a.user,t["a"].push(this.toRoute)}};s["a"]=c},4663:function(e,s,a){"use strict";a("1cf4")},"52db":function(e,s,a){},"56d7":function(e,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("7a23"),i=(a("5ed1"),a("6597"),a("becf"),a("7646"),{class:"container"}),c=Object(t["f"])("div",{class:"columns"},[Object(t["f"])("div",{class:"column"})],-1);function n(e,s,a,n,l,r){var o=Object(t["x"])("Nav"),u=Object(t["x"])("router-view"),f=Object(t["x"])("Foot");return Object(t["s"])(),Object(t["e"])("div",i,[c,Object(t["i"])(o),Object(t["i"])(u),Object(t["i"])(f)])}var l=a("7ac7"),r=a.n(l),o={class:"container"},u={class:"navbar",role:"navigation","aria-label":"main navigation"},f={class:"navbar-brand"},b=Object(t["f"])("img",{src:r.a,width:"175",height:"10"},null,-1),d=Object(t["f"])("span",{"aria-hidden":"true"},null,-1),p=Object(t["f"])("span",{"aria-hidden":"true"},null,-1),m=Object(t["f"])("span",{"aria-hidden":"true"},null,-1),v=[d,p,m],A={class:"navbar-start"},h=Object(t["h"])(" About "),g={class:"navbar-item has-dropdown is-hoverable"},j=Object(t["f"])("a",{class:"navbar-link is-arrowless is-tab"}," Nutrition ",-1),O={class:"navbar-dropdown",id:"hidden-mobile"},y=Object(t["h"])(" Recipes for Weight Loss "),w=Object(t["h"])(" Recipes to Gain Muscle "),x=Object(t["h"])("Progress"),k={class:"navbar-item has-dropdown is-hoverable"},D=Object(t["f"])("a",{class:"navbar-link is-arrowless is-tab"}," Workouts ",-1),P={class:"navbar-dropdown",id:"hidden-mobile-workout"},z=Object(t["h"])(" Push Workouts "),X=Object(t["h"])(" Pull Workouts "),N=Object(t["h"])(" Leg Workouts "),M=Object(t["h"])(" HIIT Workouts "),Z={class:"navbar-item has-dropdown is-hoverable"},L=Object(t["f"])("a",{class:"navbar-link is-arrowless is-tab"}," Journal ",-1),H={class:"navbar-dropdown",id:"hidden-mobile-journal"},V=Object(t["h"])(" Log Daily workout "),B=Object(t["h"])(" Log Calorie Intake "),q={class:"navbar-item is-tab"},T=Object(t["h"])(" Friends "),G={class:"navbar-item is-tab"},R=Object(t["h"])(" Feed "),W={class:"navbar-end"},S={class:"navbar-item"};function C(e,s,a,i,c,n){var l=Object(t["x"])("router-link"),r=Object(t["x"])("login-badge");return Object(t["s"])(),Object(t["e"])("div",o,[Object(t["f"])("nav",u,[Object(t["f"])("div",f,[Object(t["i"])(l,{class:"navbar-item; is-size-3",to:"/"},{default:Object(t["D"])((function(){return[b]})),_:1}),Object(t["f"])("a",{role:"button",class:Object(t["o"])(["navbar-burger",{"is-active":c.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:s[0]||(s[0]=function(e){return c.isActive=!c.isActive})},v,2)]),Object(t["f"])("div",{class:Object(t["o"])(["navbar-menu",{"is-active":c.isActive}])},[Object(t["f"])("div",A,[Object(t["i"])(l,{class:"navbar-item is-tab",to:"/about","active-class":"is-active"},{default:Object(t["D"])((function(){return[h]})),_:1}),Object(t["f"])("div",g,[j,Object(t["f"])("div",O,[Object(t["i"])(l,{class:"navbar-item is-tab",to:"/weightloss","active-class":"is-active"},{default:Object(t["D"])((function(){return[y]})),_:1}),Object(t["i"])(l,{class:"navbar-item is-tab",to:"/Protein","active-class":"is-active"},{default:Object(t["D"])((function(){return[w]})),_:1})])]),Object(t["i"])(l,{class:"navbar-item is-tab",to:"/progress","active-class":"is-active"},{default:Object(t["D"])((function(){return[x]})),_:1}),Object(t["f"])("div",k,[D,Object(t["f"])("div",P,[Object(t["i"])(l,{class:"navbar-item is-tab",to:"/Push","active-class":"is-active"},{default:Object(t["D"])((function(){return[z]})),_:1}),Object(t["i"])(l,{class:"navbar-item is-tab",to:"/Pull","active-class":"is-active"},{default:Object(t["D"])((function(){return[X]})),_:1}),Object(t["i"])(l,{class:"navbar-item is-tab",to:"/Leg","active-class":"is-active"},{default:Object(t["D"])((function(){return[N]})),_:1}),Object(t["i"])(l,{class:"navbar-item is-tab",to:"/cardio","active-class":"is-active"},{default:Object(t["D"])((function(){return[M]})),_:1})])]),Object(t["f"])("div",Z,[L,Object(t["f"])("div",H,[Object(t["i"])(l,{class:"navbar-item is-tab",to:"/DailyWorkout","active-class":"is-active"},{default:Object(t["D"])((function(){return[V]})),_:1}),Object(t["i"])(l,{class:"navbar-item is-tab",to:"/calories","active-class":"is-active"},{default:Object(t["D"])((function(){return[B]})),_:1})])]),Object(t["f"])("div",q,[Object(t["i"])(l,{class:"navbar-link is-arrowless",to:"/Friends","active-class":"is-active"},{default:Object(t["D"])((function(){return[T]})),_:1})]),Object(t["f"])("div",G,[Object(t["i"])(l,{class:"navbar-link is-arrowless",to:"/activity","active-class":"is-active"},{default:Object(t["D"])((function(){return[R]})),_:1})])]),Object(t["f"])("div",W,[Object(t["f"])("div",S,[Object(t["i"])(r)])])],2)])])}a("b0c0");var F={key:0,class:"buttons"},Y=Object(t["f"])("strong",null,"Sign up",-1),J={key:1};function I(e,s,a,i,c,n){var l=Object(t["x"])("router-link");return c.Session.user?(Object(t["s"])(),Object(t["e"])("div",J," Hello "+Object(t["z"])(n.name),1)):(Object(t["s"])(),Object(t["e"])("div",F,[Object(t["i"])(l,{class:"button is-link",to:"/signup"},{default:Object(t["D"])((function(){return[Y]})),_:1}),Object(t["f"])("a",{class:"button is-light",onClick:s[0]||(s[0]=function(){return n.login&&n.login.apply(n,arguments)})}," Log in ")]))}var U=a("3b42"),E={data:function(){return{Session:U["a"]}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}},K=a("6b0d"),_=a.n(K);const Q=_()(E,[["render",I]]);var $=Q,ee={data:function(){return{isActive:!1}},components:{LoginBadge:$}};const se=_()(ee,[["render",C]]);var ae=se,te={class:"footer"},ie=Object(t["f"])("div",{class:"content has-text-centered"},[Object(t["f"])("p",null,[Object(t["f"])("section",{class:"center grey-text"},[Object(t["f"])("strong",null,"Fit Bud"),Object(t["h"])(" ©2021. All Rights Reserved.")])])],-1),ce=[ie];function ne(e,s,a,i,c,n){return Object(t["s"])(),Object(t["e"])("footer",te,ce)}var le={};a("1e2b");const re=_()(le,[["render",ne]]);var oe=re,ue={components:{Nav:ae,Foot:oe}};const fe=_()(ue,[["render",n]]);var be=fe,de=a("a18c");Object(t["c"])(be).use(de["a"]).mount("#app")},5985:function(e,s,a){"use strict";a("1b59")},"5b34":function(e,s,a){"use strict";a.d(s,"a",(function(){return c})),a.d(s,"b",(function(){return n}));var t=a("5530"),i=(a("7db0"),a("a434"),[{firstName:"Chris",lastName:"Tejada",handle:"@ctejada710",pic:"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",password:"tejada",isAdmin:!0,emails:["tejadac3@newpaltz.edu"],following:[{handle:"@vp",isApproved:!0},{handle:"@johnsmith",isApproved:!0}],get name(){return this.firstName+" "+this.lastName}}]);function c(e){return Object(t["a"])(Object(t["a"])({},i.find((function(s){return s.handle==e}))),{},{password:void 0})}function n(e,s){console.log({handle:e,password:s});var a=i.find((function(s){return s.handle==e}));if(!a)throw{code:401,msg:"Sorry there is no user with that handle"};if(s!=a.password)throw{code:401,msg:"Wrong Password"};var c=Object(t["a"])(Object(t["a"])({},a),{},{password:void 0});return{user:c}}},"7ac7":function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAH0BAMAAADVq/IfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURf///wAAAGRuy729vevr8E1NTbS55jAwMIaGhoSM1hr+JocAAAuwSURBVHja7N3PaxtnHsBhJRor1q0iDc7RCGPwLaItzVHRss7mFlNKejQiBHyr2F3aY0KyNEcjgiH/7ba1LcvWvKMZzTuWZvQ8pyUZd+3h4zffGc2PVgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjr+2u9/fWs/sAWSs/7fDof2BY037V85tC9ounG/r3e2RKc/59T+YDtGmb8c2R80Wbd/y7k9wnZM7qZ36u74bPr14m2+yd30Tr1j/3o1k4eCf3g39307jZrGPncYepHjQNU0Q31jHy/vOOkvGNpz1E7nLM+63VnM3fBO3SRnix33Dxa36y5udW7vUa/Y3/VTLZY8yvVLAZvr3TS99v7Rwlw+XtzIsSp1OkINxZ6Wcsq2riOgEbGnjDNyp746Z/1sd8eZtG3sRmpxhLos9sVxRu7UdWnv53EqdxqxuOfK/fY4I3fqKlfut8cZh6rU1TRf7+dypwHG/cLjjI+ZqKtRv/A44yIC6qqbM/e5szMPXSJG03O/GWdcAExdpZ94P3x7PA6OM27voK7STrxf3qR6FpxYxo5UqamF04pH7wJVz8aZkSNVGpL7xWwwSaaBRbxjlqGmxoHY/3QcOiId+5CJepqfTC5Os34VbsYZD82jprrB2DPGGY9EpZ46/Yxnhh0Hzs544DV1zj30gLzQOON1BtTT/LnHVt5xJhkbZaijaTj2VspFBlejy/VNf7dO5cCme5cdbPDDJi+apHmCZ2eggY5d7csWGS99jB4YZ6B+um5eYntMPXiArfGq795UtmZyT71x1X4h3YtewDdZX3Vyuc37tX/745zv9Mg2uPOz//bzx2GF3/Tu5f/LM/XJvZBOznccFMz9T3s/yV3uVeae9yEbw2WLe+H79QZpO+DJUO5yX3vuX26+IvgYmv0IuVfXu9zlvsLjfpNp7jc2rZJ777Hc5b7m3E9vviDjCZJRcq/q2ETucs+Z+5elx6kr3LIXyv2p3OW+ztznp5Ssp2HvR8m9ouVd7nLPl/swx3Fq8eE9mPtjuct9fbmf5zlOLf7BajD3J3KX+9pyn1+zl7zpIE7u1SQp93Xn/t2CZ5uX+3ztnfwncPLmvjf72Z+/uc79tdybmHvBryqQ+87lpsPI3/e4gtzn/uSHq9y/lbvc15/7cZGX8a2Qe+tDhaci5V6z3AuoJvelb6DcL5n7boXHqnKXeyHL38h3UDL363/A5C73defeKXYSZ6XcB9Ucc8hd7rGPU2Pk/qC6JuUu97iLe7HPmdJy36nuMgK5yz3mcWrRz5nSct+Vu9w3IfdX4cYvVruhKSP313KX+zpzT7IG9tU+Z0rLvS13uVeZe86PjcZZH6VO5U4Dcj/NcZz6ZX6sP5c7tc09x+J+dOtv9+Pk/qvc5X7vuR/lmNz/+gdgtNKJd6u73Dcq99k1AaPsD5ZGK514t7rLfaNyn03i0+z7+rornZqxust9o3I/XTrLXP5CdFe6SMzqLveNyv36y7tLrpHprPTkPKu73Bc8WHhsaLHNr5XJfbRk+U9Wukqs0OqepP0enCy596n9+c3kXu6DpQm5LxvdD9I2OHxbPvfXMXJP/ri3276pS+55hM5TzgaX8SoXjlWce3vSk7vci0uWXmIw2rzcA7XLXe5LLH99QSdW7ruxck9OenKXe8Tch8vX/1Vzf18695c9uct9Jd1lTwVeNrznz30nUu7JRO5yj5j77csFRpFyfxRqsmDuj3pyl3vE3E/zzDuFcx+EvtmCuX+Qu9wj5n5xZ5tpnNwnoccqFcu93ZO73OPlfjTMNd8XzX03+NC8YrnvyL2mubdvHg88yJH71eY/LjxiOO6ZmfOFHKPkPgg+ErVY7rNnaf/ycbYDfpB7DXJfWLn38mwa5RKxg2DuKRfGjCLkvht+4HWx3K9Ouu99WvyPy13u2Z8jJXkebJ2Uz332QeiwbO5pvzZyl3uu3BeOQ1Mvah+tmPts2vg8yXj1XqHc22n/HbnLPd8VkeM8z7XOeG1TVu4pXpfNfTftMmK5rzv3u6+q+X5Dc3+Y68mnnUi57w3L5r6TVrbc1517wTcs3nvup4GzjIEbsF/FyT39kq8iuafuKLnLPV/urZzvYDqLkXvq4l4s9xdpH1bJXe7Zue+HhvfzVqHeC+X+n1ak3J/KXe5Fcp/N6N28ry04npbO/Un51X0gd7kXz/0otFXG05PefS07uz+OlPtjuct9NaPwrR0rC56IfF829w9yl3sZnTIvUC2a++M4uRtm5L6qaYk3ShbNPS1Jq7vc7zH3UYlX7BXO/Ve5y32tuXfiD+93LxFLnp/04lzvbpiRe9xp5jR+7nNPyxha3RuYe8GvWmvu3RxXiZXNfXbT3Xu5y32tuSfRh/eMW7O/MczIfa25372QoJrcd0NTndVd7veaezf28J6WexI6VpW73O8191bsD5pS7zT/EHjyhmFG7veb+zjy8J6ae+hpC1Z3ud9v7p28V4mVyf1B4BuXu9zvN/c7p96Hm567YUbuZYziDu+puYeeiWp1l/s9596Je5WY3OW+ybnfnmYONz13w4zcS+lGHd6t7nLf6NyTqB80yV3uG5377VPv+4YZGp17N+bwbnWX+2bnnsS8Skzuct/s3G+feh9udu6GGbmX1In4QZPVXe4bnvutp1rvy51G535rmjnY7NwNM3KPOc0cbnbuVne5lzaVO9uTe7c2uRtm5F7+YDXaHR6Fcm9Z3eUeP/d+ARubuwdeyz1+7oebnbthRu6bnnvo5j2ru9zXnPvBfeY+SXk2sNVd7vXOfRDaMycpT9ObFHnz3o7c5V4m9/MKcv8Q+hlTzrYkvSLvVX0kd7mXyf20gtwngaeIpT1ebLdX5K3ZA7k3NveVB9Uiubfi594Ovs9gsPgL/DKU+24vOOjLvcG5v68y9yruZnoRfK/Dg8WET0K5p/3S7Pbk3tjc21lvoI6U+0H83JNJqODrAWXuJcPXAads3Fs8bTmQe3NzvzqK2xtWmPtp9NyTD7200+vzv8C9f8/+4CSc+9Vf7X2a/ck/e3KvZ+7f3Qhve7VMPvm4fNMVcy/9TNTB3R/n8ySryeu/++/HOxt/Gxz0e71fLjd+/kdP7vXMfV5425P8m66Ye6SH5qVK2/xDaOOU3B/1iryzldrnPqg892F1uT/N2Ge5cm/Lfbtyf1R17rFeZ5DzNcI3R6Z5cl/8x03ujc69XXXuwwpzf5ZvPsvI/aXctyr3hTgi5/6lVV3uT9O3f1kg97bctyv3F5XmftGqMPf36dsnk/y5t36U+1bl3q4y9xi1B3N/HPqCnQK5Jydy36bc79YUMfeLt60Kc38yzP0Vk3DuwXFG7s3MvT1ZJfd7NChae6v1x+0Z/0FG7q1/3Zl9Pp3IvcG5t3Yn9ct976fsMz4/zP1Mvw8zc2+153859j5dfdAs94bm3mr/b1Kr3H/7+eNw2Rclz9/8/UPt/f799Q75NrjxPz5fbtz77Zdn1+eq5E59JLP/NbQzAAAAAKBBOpGvc4cNNo756DCwuIPFHSzuYHGHqIv7kR1Ck40s7myNxOKOxR0s7mBxB4s7WNzB4g6VemhxZ3tMIz/hGjbXq7jvpgGLO1jcweIOFnewuEM+XYs722NsccfiDhZ3aMri7mkbbNHifmqHsDW5W9xptmRqcWd7dCzubOXBqsWd5ntlcWeLxvexxZ1tO1y1uLNFh6sWd7ZnfLe4szXGFne2yIVdAAAAAAAAAAAAAAAAAP9vDw4EAAAAAAT5W68wQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsAVHscb36swnFAAAAAElFTkSuQmCC"},a18c:function(e,s,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0");var t=a("6c02"),i=a("3b42"),c=a("7a23"),n={class:"section",style:{"text-align":"center"}},l=Object(c["g"])('<section class="hero is-link"><h1 class="title">BE THE BEST YOU</h1></section><h2 class="subtitle"><strong>Take</strong> control of your goals.<br><strong>Track</strong> calories. <br><strong>Break down</strong> ingredients.<br><strong>Log activities</strong><br> All with <strong>Fit Bud</strong>. </h2><br><figure><img src="https://media.istockphoto.com/photos/calories-counting-diet-food-control-and-weight-loss-concept-calorie-picture-id1259984250?b=1&amp;k=20&amp;m=1259984250&amp;s=170667a&amp;w=0&amp;h=vGSS9ZnaRPgR90BCxVz_mgWePp9cfwH6U1KAu1_as-c=" width="500" height="600" class="center" alt="picture of food"></figure>',4),r=[l];function o(e,s,a,t,i,l){return Object(c["s"])(),Object(c["e"])("section",n,r)}var u={name:"Home",components:{}},f=a("6b0d"),b=a.n(f);const d=b()(u,[["render",o]]);var p=d,m={class:"section"},v=Object(c["f"])("h1",{class:"title",id:"feed"},"Feed",-1),A={class:"columns"},h={class:"column is-one-third is-offset-one-third"};function g(e,s,a,t,i,n){var l=Object(c["x"])("post");return Object(c["s"])(),Object(c["e"])("div",m,[v,Object(c["f"])("div",A,[Object(c["f"])("div",h,[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.posts,(function(e){return Object(c["s"])(),Object(c["e"])("div",{class:"post",key:e.src},[Object(c["i"])(l,{post:e},null,8,["post"])])})),128))])])])}var j={class:"card"},O={class:"card-image"},y={class:"image is-4by3"},w=["src","alt"],x={class:"card-content"},k={class:"media"},D={class:"media-left"},P={class:"image is-48x48"},z=["src"],X={class:"media-content"},N={class:"title is-4"},M={class:"subtitle is-6"},Z=Object(c["f"])("div",{class:"content"},[Object(c["h"])(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),Object(c["f"])("a",null,"@bulmaio"),Object(c["h"])(". "),Object(c["f"])("a",{href:"#"},"#css"),Object(c["h"])(),Object(c["f"])("a",{href:"#"},"#responsive"),Object(c["f"])("br"),Object(c["f"])("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016")],-1),L=Object(c["f"])("footer",{class:"card-footer"},[Object(c["f"])("a",{href:"#",class:"card-footer-item"},"Save"),Object(c["f"])("a",{href:"#",class:"card-footer-item"},"Edit"),Object(c["f"])("a",{href:"#",class:"card-footer-item"},"Delete")],-1);function H(e,s,a,t,i,n){return Object(c["s"])(),Object(c["e"])("div",j,[Object(c["f"])("div",O,[Object(c["f"])("figure",y,[Object(c["f"])("img",{src:a.post.src,alt:a.post.alt},null,8,w)])]),Object(c["f"])("div",x,[Object(c["f"])("div",k,[Object(c["f"])("div",D,[Object(c["f"])("figure",P,[Object(c["f"])("img",{src:a.post.user.pic,alt:"Placeholder image"},null,8,z)])]),Object(c["f"])("div",X,[Object(c["f"])("p",N,Object(c["z"])(a.post.user.firstName)+" "+Object(c["z"])(a.post.user.lastName),1),Object(c["f"])("p",M,Object(c["z"])(a.post.user.handle),1)])]),Z]),L])}var V={props:{post:Object}};const B=b()(V,[["render",H]]);var q=B,T=a("5530"),G=(a("d81d"),a("4de4"),a("a434"),a("5b34")),R=[{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image",caption:"Lorem Ipsom",time:Date(),user_handle:"@johnsmith",isPublic:!0},{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image",caption:"We want Moshiach Now",time:Date(),user_handle:"@vp",isPublic:!0},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjon4vl9_2NjORI-dmGugrvQGPXT85MX9ZA&usqp=CAU",alt:"Beach time !",caption:"At the Beach!!",time:Date(),user_handle:"@ctejada710",isPublic:!0},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQq7VQ1oVcDA_O7SAiX3UNBNXCLs2WF6i_Q&usqp=CAU",alt:"Graduation",caption:"Onto the Next Chapter!",time:Date(),user_handle:"@ctejada710",isPublic:!0},{src:"https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2015/11/19/christmas-in-nye-ss-update/rockefeller-center-christmas-tree-new-york-city.jpg.rend.hgtvcom.966.725.suffix/1491592861661.jpeg",alt:"Christmas!!",caption:"Christmas in NYC!!",time:Date(),user_handle:"@ctejada710",isPublic:!0}],W=function(){return R.map((function(e){return Object(T["a"])(Object(T["a"])({},e),{},{user:Object(G["a"])(e.user_handle)})}))};function S(e){return W().filter((function(s){return s.user_handle==e}))}var C={components:{Post:q},data:function(){return{posts:S(i["a"].user.handle)}}};a("4663");const F=b()(C,[["render",g]]);var Y=F,J={class:"section"},I=Object(c["f"])("h1",{class:"title"},"Friends",-1),U=Object(c["f"])("h2",{class:"subtitle"}," View your friends or make some new ones! ",-1),E={id:"tabs-with-content"},K={class:"hero-foot"},_={class:"tabs is-centered is-toggled is-fullwidth"},Q={key:0,class:"content-tab"},$=Object(c["g"])('<ul class="friendsList"><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1599058917727-824293170100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Omar Ruiz</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1445384763658-0400939829cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Amanda Scott</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1579722819442-cc3aa1b7e901?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Ana Strong</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1605300287659-9ca1a156d7c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Andrew Hill</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1591089627083-d9d049d833f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Trevor Pizaro</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1616271049250-02a7697e99ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQwfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Connor Ruter</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1540582093410-c06370c89515?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Alexi Romano</strong><br></p><div class="buttons"><button class="button is-link">View Profile</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article><br><br><br></li></ul>',1),ee=[$],se={key:1,class:"content-tab"},ae=Object(c["g"])('<ul class="friendsList"><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://media.istockphoto.com/photos/beautiful-young-woman-training-with-kettlebell-in-gym-picture-id1265038811?b=1&amp;k=20&amp;m=1265038811&amp;s=170667a&amp;w=0&amp;h=2Tqf5D2X3yeeoBOxtbv7Vxo28r0L64JhVGfICsmmLpM="></p></figure><div class="media-content"><div class="content"><p><strong>Jessica Ross</strong><br></p><div class="buttons"><button class="button is-link">Accept</button><button class="button is-light">Decline</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?b=1&amp;k=20&amp;m=1277242852&amp;s=170667a&amp;w=0&amp;h=JRJsVDFKO_i9omBAMNySqCfwvRTB-yeVrjJY2jd7JZw="></p></figure><div class="media-content"><div class="content"><p><strong>Andrew Harris</strong><br></p><div class="buttons"><button class="button is-link">Accept</button><button class="button is-light">Decline</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li></ul>',1),te=[ae],ie={key:2,class:"content-tab"},ce=Object(c["g"])('<ul class="friendsList"><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://media.istockphoto.com/photos/mature-woman-walking-at-sunset-carrying-a-mobile-phone-picture-id1278449921?b=1&amp;k=20&amp;m=1278449921&amp;s=170667a&amp;w=0&amp;h=pru_eZz8u5mCUAnNYIoBiM6rPaMkYyda5jEoP19Hyho="></p></figure><div class="media-content"><div class="content"><p><strong>Stacy Lewis</strong><br></p><div class="buttons"><button class="button is-link">Add</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1518605360659-2aa9659ef66d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGZpdG5lc3N8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Trinity Sinclair</strong><br></p><div class="buttons"><button class="button is-link">Add</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Luis Alvarez</strong><br></p><div class="buttons"><button class="button is-link">Add</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li><li><article class="media"><figure class="media-left"><p class="image is-128x128"><img src="https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></p></figure><div class="media-content"><div class="content"><p><strong>Anastase Margos</strong><br></p><div class="buttons"><button class="button is-link">Add</button></div></div><nav class="level is-mobile"><div class="level-left"><a class="level-item"><span class="icon is-small"><i class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a></div></nav></div></article></li></ul>',1),ne=[ce];function le(e,s,a,t,i,n){return Object(c["s"])(),Object(c["e"])("section",J,[I,U,Object(c["f"])("div",E,[Object(c["f"])("div",K,[Object(c["f"])("div",_,[Object(c["f"])("a",{onClick:s[0]||(s[0]=function(s){return e.activetab=1}),class:Object(c["o"])([1===e.activetab?"active":""])},"Friends",2),Object(c["f"])("a",{onClick:s[1]||(s[1]=function(s){return e.activetab=2}),class:Object(c["o"])([2===e.activetab?"active":""])},"Requests",2),Object(c["f"])("a",{onClick:s[2]||(s[2]=function(s){return e.activetab=3}),class:Object(c["o"])([3===e.activetab?"active":""])},"Discover",2)])])]),1===e.activetab?(Object(c["s"])(),Object(c["e"])("div",Q,ee)):Object(c["d"])("",!0),2===e.activetab?(Object(c["s"])(),Object(c["e"])("div",se,te)):Object(c["d"])("",!0),3===e.activetab?(Object(c["s"])(),Object(c["e"])("div",ie,ne)):Object(c["d"])("",!0)])}var re={el:"#tabs",data:function(){return{email:null,password:null,Session:i["a"],activetab:1}},methods:{login:function(){this.Session.Login(this.email,this.password)}}};a("5985");const oe=b()(re,[["render",le]]);var ue=oe,fe={class:"section"},be=Object(c["f"])("h1",{class:"title"},"Progress",-1),de=Object(c["f"])("h2",{class:"subtitle"}," View all your progress here. ",-1),pe=Object(c["f"])("div",null,[Object(c["f"])("p",null,[Object(c["f"])("strong",null,"Calories")]),Object(c["f"])("progress",{class:"progress is-info",value:"78",max:"100"},"45%"),Object(c["f"])("p",null,[Object(c["f"])("strong",null,"Exercise")]),Object(c["f"])("progress",{class:"progress is-info",value:"78",max:"100"},"45%")],-1),me=[be,de,pe];function ve(e,s,a,t,i,n){return Object(c["s"])(),Object(c["e"])("section",fe,me)}var Ae={};const he=b()(Ae,[["render",ve]]);var ge=he,je={class:"section"},Oe=Object(c["g"])('<h1 class="title">Calorie Intake</h1><h2 class="subtitle"> Keeping track of your calorie intake is important, so keep a track of them here. </h2><div class="control" id="calorie"><label class="label">Enter Calorie Intake</label><div class="control"><input class="input" type="text" placeholder="Calorie Intake"></div></div>',3),ye=[Oe];function we(e,s,a,t,i,n){return Object(c["s"])(),Object(c["e"])("section",je,ye)}var xe={};const ke=b()(xe,[["render",we]]);var De=ke,Pe={class:"section"},ze=Object(c["g"])('<h1 class="title">Daily Workout</h1><h2 class="subtitle"> Log your daily workouts here. </h2><div class="control" id="workout"><label class="label">Enter Workout:</label><div class="control"><input class="input" type="text" placeholder="Workout"></div></div>',3),Xe=[ze];function Ne(e,s,a,t,i,n){return Object(c["s"])(),Object(c["e"])("section",Pe,Xe)}var Me={};const Ze=b()(Me,[["render",Ne]]);var Le=Ze,He=[{path:"/",name:"Home",component:p},{path:"/Progress",name:"Progress",component:ge,meta:{requiresLogin:!0}},{path:"/DailyWorkout",name:"DailyWorkout",component:Le,meta:{requiresLogin:!0}},{path:"/calories",name:"calories",component:De,meta:{requiresLogin:!0}},{path:"/activity",name:"activity",component:Y,meta:{requiresLogin:!0}},{path:"/Friends",name:"Friends",component:ue,meta:{requiresLogin:!0}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/cardio",name:"cardio",component:function(){return a.e("about").then(a.bind(null,"8ce1"))}},{path:"/Leg",name:"Leg",component:function(){return a.e("about").then(a.bind(null,"d04f"))}},{path:"/Protein",name:"Protein",component:function(){return a.e("about").then(a.bind(null,"b16e"))}},{path:"/Pull",name:"Pull",component:function(){return a.e("about").then(a.bind(null,"be5a"))}},{path:"/Push",name:"Push",component:function(){return a.e("about").then(a.bind(null,"37ad"))}},{path:"/weightloss",name:"weightloss",component:function(){return a.e("about").then(a.bind(null,"4010"))}},{path:"/signup",name:"signup",component:function(){return a.e("about").then(a.bind(null,"62c4"))}},{path:"/login",name:"login",component:function(){return a.e("about").then(a.bind(null,"dd7b"))}}],Ve=Object(t["a"])({history:Object(t["b"])("/docs/"),routes:He});Ve.beforeEach((function(e,s,a){e.meta.requiresLogin&&!i["a"].user?a("/login"):a()}));s["a"]=Ve}});
//# sourceMappingURL=app.2069a4b2.js.map