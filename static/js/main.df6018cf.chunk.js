(window["webpackJsonpnicholas-cerisano-portfolio"]=window["webpackJsonpnicholas-cerisano-portfolio"]||[]).push([[0],{108:function(e,t,n){},113:function(e,t,n){e.exports=n.p+"static/media/glitch garden demo gif.aebb97e8.gif"},114:function(e,t,n){e.exports=n.p+"static/media/infinite-runner clip.f6adb8ce.gif"},115:function(e,t,n){e.exports=n.p+"static/media/react-logo.4ade5cac.png"},116:function(e,t,n){e.exports=n.p+"static/media/typescript-logo.26cc95f2.png"},117:function(e,t,n){e.exports=n.p+"static/media/MyPhoto.9668dd11.jpg"},121:function(e,t,n){e.exports=n(219)},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){e.exports=n.p+"static/media/sample coding clip.b0fb19f0.mp4"},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);n(122),n(146),n(147),n(148);var a=n(1),r=n.n(a),c=n(118),o=n.n(c),l=(n(203),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),p=(n(204),n(9)),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=window.location.href.split("/"),n=this.props.id.includes(t[t.length-1])?"ActiveNavBtn":"NavButton";return r.a.createElement("div",{className:n,onClick:function(){e.props.navBar.setActiveStateId(e.props.id[0]),e.props.navBar.setState({activeBtn:e})}},this.props.text)}}]),t}(a.Component),b=(n(205),null),d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={activeBtn:null,navBtns:[]},n.setActiveStateId=function(e){return b=e},n.getActiveStateId=function(){return b},null===b&&(b="home"),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){null===this.state.activeBtn&&this.setState({activeBtn:this.state.navBtns[0],navBtns:this.state.navBtns})}},{key:"render",value:function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},r.a.createElement(h,{text:"Home",id:["","home"],navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},r.a.createElement(h,{text:"About",id:["about"],navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/resume"},r.a.createElement(h,{text:"Resume",id:["resume"],navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects"},r.a.createElement(h,{text:"Projects",id:["projects"],navBar:this})))))}}]),t}(a.Component),f=n(20),E=n(221),v=n(222),j=(n(210),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BottomBar"},r.a.createElement("div",{className:"BottomBarTitle"},"Contact Me"),r.a.createElement("div",{className:"BottomBarIcons"},r.a.createElement("div",{className:"IconBundle"},r.a.createElement(E.a,{className:"Email",size:50}),"epicnicks2.0@gmail.com"),r.a.createElement("div",{className:"IconBundle"},r.a.createElement(E.b,{className:"Phone",size:50}),"416-556-4060"),r.a.createElement("a",{href:"https://www.linkedin.com/in/nicholas-cerisano-53a389173/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.b,{className:"LinkedIn",size:50})),r.a.createElement("a",{href:"https://github.com/epicnicks",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{className:"Github",size:50}))))}}]),t}(a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("video");null!==e&&(e.playbackRate=10)}},{key:"render",value:function(){var e=n(211);return r.a.createElement("div",{className:"VideoContainer"},r.a.createElement("div",{className:"VideoPlayer"},r.a.createElement("video",{className:"video-container video-container-overlay",loop:!0,muted:!0,"data-reactid":".0.1.0.0",autoPlay:!0},r.a.createElement("source",{type:"video/mp4","data-reactid":".0.1.0.0.0",src:e}))),r.a.createElement("h1",null,"About Nicholas Cerisano"),r.a.createElement("h2",null,"Aspiring Software Developer"))}}]),t}(a.Component),g=(n(212),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(y,null))}}]),t}(a.Component)),O=(n(213),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Resume"},r.a.createElement("h1",null,"Resume page"),r.a.createElement("h2",null,"Link to a PDF copy of my resume: "),r.a.createElement("p",null,"Check out some of the projects listed in my resume in the projects tab of this page."))}}]),t}(a.Component)),k=n(10),B=(n(214),n(108),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=window.location.href.split("/"),n=t[t.length-1]===this.props.id?"ActiveSideButton":"SideButton";return r.a.createElement("div",{className:n+" "+t[t.length-1],onClick:function(){e.props.navBar.setActiveStateId(e.props.id),e.props.navBar.setState({activeBtn:e})}},this.props.text)}}]),t}(a.Component)),w=null,N=function(e){function t(e){var n;if(Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={activeBtn:null,navBtns:[]},n.setActiveStateId=function(e){return w=e},n.getActiveStateId=function(){return w},null===w)w="home";else{var a=window.location.href.split("/");w=a[a.length-1]}return n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SideBar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects"},r.a.createElement(B,{text:"Projects Home",id:"projects",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/space-shooter"},r.a.createElement(B,{text:"Space Shooter",id:"space-shooter",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/glitch-garden"},r.a.createElement(B,{text:"Glitch Garden",id:"glitch-garden",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/game-day"},r.a.createElement(B,{text:"Game Day",id:"game-day",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/infinite-runner"},r.a.createElement(B,{text:"Infinite Runner",id:"infinite-runner",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/portfolio"},r.a.createElement(B,{text:"Portfolio",navBar:this,id:"portfolio"})))))}}]),t}(a.Component),C=n(24),x=n.n(C),S="/nicholas-cerisano-resume/unity/space-shooter/Build/",I=S+"SpaceInvadersClone_HTML5.json",A=S+"UnityLoader.js",P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).unityContent=new C.UnityContent(I,A),n.game=null,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return window.navigator.userAgent.indexOf("MSIE ")>-1&&alert("This game will not be able to run in Internet Explorer as it does not support WebAssembly"),r.a.createElement("div",{className:"SpaceShooter"},r.a.createElement("h1",null,"Space Shooter"),r.a.createElement("p",null,"This is a project I worked on following the Udemy course: Complete Unity C# Developer: Learn to code by making games I later designed it around being played on a phone. Feel free to give it a try below by clicking <Start>.",r.a.createElement("br",null),r.a.createElement("br",null),"Controls: Move the mouse; your ship (bottom) will move toward it along the horizontal axis."),r.a.createElement(x.a,{className:"Unity_SpaceShooter",unityContent:this.unityContent,ref:function(t){return e.game=t}}))}}]),t}(a.Component),G="/nicholas-cerisano-resume/unity/glitch-garden/Build/GlitchGarden_HTML5.json",M="/nicholas-cerisano-resume/unity/glitch-garden/Build/UnityLoader.js",L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).unityContent=new C.UnityContent(G,M),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GlitchGarden"},r.a.createElement("h1",null,"Glitch Garden"),r.a.createElement("p",null),r.a.createElement("img",{src:n(113),alt:n(113)}))}}]),t}(a.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GameDay"},r.a.createElement("h1",null,"Game Day"),r.a.createElement("img",null))}}]),t}(a.Component),R="/nicholas-cerisano-resume/unity/infinite-skater/Build/InfiniteSkater_HTML5.json",T="/nicholas-cerisano-resume/unity/infinite-skater/Build/UnityLoader.js",D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).unityContent=new C.UnityContent(R,T),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"InfiniteRunner"},r.a.createElement("h1",null,"Infinite Runner"),r.a.createElement("img",{src:n(114),alt:n(114)}))}}]),t}(a.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"PortfolioProject"},r.a.createElement("h1",null,"This Portfolio"),r.a.createElement("p",null,"I built this website myself in React using TypeScript.",r.a.createElement("br",null),"You can check out the code on my GitHub using the GitHub icon in the 'Contact Me' bar below, or by clicking ",r.a.createElement("a",{href:"https://github.com/epicnicks",target:"_blank",rel:"noopener noreferrer"},"here"),".",r.a.createElement("br",null)),r.a.createElement("div",{className:"PortfolioProjectLogos"},r.a.createElement("img",{className:"ReactLogo",src:n(115),alt:n(115)}),r.a.createElement("img",{className:"TSLogo",src:n(116),alt:n(116)})),r.a.createElement("img",null))}}]),t}(a.Component);Object(k.a)();function _(){return r.a.createElement("div",{className:"ProjectDefault"},r.a.createElement("h1",null,"Welcome to the Project Page."),r.a.createElement("h3",null,"Feel free to click on the sidebar buttons to get a look at some of my personal projects."))}var z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Projects"},r.a.createElement(N,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/projects/space-shooter",component:P}),r.a.createElement(f.b,{exact:!0,path:"/projects/glitch-garden",component:L}),r.a.createElement(f.b,{exact:!0,path:"/projects/game-day",component:U}),r.a.createElement(f.b,{exact:!0,path:"/projects/infinite-runner",component:D}),r.a.createElement(f.b,{exact:!0,path:"/projects/portfolio",component:H}),r.a.createElement(f.b,{exact:!0,path:"/projects",component:_}),r.a.createElement(f.b,{component:_})))}}]),t}(a.Component),W=(n(218),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"About"},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:"About-Main"},r.a.createElement("div",{className:"About-Image"},r.a.createElement("img",{src:n(117),alt:n(117)})),r.a.createElement("div",{className:"About-Body"},r.a.createElement("h2",null,"Bio"),r.a.createElement("p",null,"I am a second-year Computer Science student attending York University.",r.a.createElement("br",null),"I am a proactive pragmatic logical thinker.",r.a.createElement("br",null),"I spend most of my spare time programming for fun."),r.a.createElement("h2",null,"Hobbies"),r.a.createElement("h3",null,"My hobbies include:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Trying new frameworks and programming languages to see different ways of reasoning problems"),r.a.createElement("li",null,"Writing utility programs to perform basic tasks such as read my todo-list to me"),r.a.createElement("li",null,"Playing chess"),r.a.createElement("li",null,"Making games in Unity Engine"),r.a.createElement("li",null,"Reading fantasy novels and programming textbooks")))))}}]),t}(a.Component)),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{basename:""},r.a.createElement(d,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/home",component:g}),r.a.createElement(f.b,{exact:!0,path:"/about",component:W}),r.a.createElement(f.b,{exact:!0,path:"/resume",component:O}),r.a.createElement(f.b,{path:"/projects",component:z}),r.a.createElement(f.a,{from:"/",to:"/home"})),r.a.createElement(j,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.df6018cf.chunk.js.map