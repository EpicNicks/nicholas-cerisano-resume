(window["webpackJsonpnicholas-cerisano-portfolio"]=window["webpackJsonpnicholas-cerisano-portfolio"]||[]).push([[0],{108:function(e,t,a){},113:function(e,t,a){e.exports=a.p+"static/media/glitch garden demo gif.aebb97e8.gif"},114:function(e,t,a){e.exports=a.p+"static/media/Team2Capture.7c56d87b.png"},115:function(e,t,a){e.exports=a.p+"static/media/DevConsole.b2d0fb40.png"},116:function(e,t,a){e.exports=a.p+"static/media/infinite-runner clip.f6adb8ce.gif"},117:function(e,t,a){e.exports=a.p+"static/media/react-logo.4ade5cac.png"},118:function(e,t,a){e.exports=a.p+"static/media/typescript-logo.26cc95f2.png"},119:function(e,t,a){e.exports=a.p+"static/media/MyPhoto.9668dd11.jpg"},123:function(e,t,a){e.exports=a(222)},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){e.exports=a.p+"static/media/sample coding clip.b0fb19f0.mp4"},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){e.exports=a.p+"static/media/Nicholas Cerisano_Resume (February 2020).a97afc96.pdf"},217:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);a(124),a(148),a(149),a(150);var n=a(1),r=a.n(n),c=a(120),l=a.n(c),o=(a(205),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),p=(a(206),a(9)),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=window.location.href.split("/"),a=this.props.id.includes(t[t.length-1])?"ActiveNavBtn":"NavButton";return r.a.createElement("div",{className:a,onClick:function(){e.props.navBar.setActiveStateId(e.props.id[0]),e.props.navBar.setState({activeBtn:e})}},this.props.text)}}]),t}(n.Component),d=(a(207),null),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeBtn:null,navBtns:[]},a.setActiveStateId=function(e){return d=e},a.getActiveStateId=function(){return d},null===d&&(d="home"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){null===this.state.activeBtn&&this.setState({activeBtn:this.state.navBtns[0],navBtns:this.state.navBtns})}},{key:"render",value:function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},r.a.createElement(h,{text:"Home",id:["","home"],navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},r.a.createElement(h,{text:"About",id:["about"],navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/resume"},r.a.createElement(h,{text:"Resume",id:["resume"],navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects"},r.a.createElement(h,{text:"Projects",id:["projects"],navBar:this})))))}}]),t}(n.Component),f=a(20),E=a(224),v=a(225),g=(a(212),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BottomBar"},r.a.createElement("div",{className:"BottomBarTitle"},"Contact Me"),r.a.createElement("div",{className:"BottomBarIcons"},r.a.createElement("div",{className:"IconBundle"},r.a.createElement(E.a,{className:"Email",size:50}),"cerisano.nicholas@gmail.com"),r.a.createElement("div",{className:"IconBundle"},r.a.createElement(E.b,{className:"Phone",size:50}),"416-556-4060"),r.a.createElement("div",{className:"BottomBarLink"},r.a.createElement("div",{className:"LinkedInOuter"},r.a.createElement("a",{href:"https://www.linkedin.com/in/nicholas-cerisano-53a389173/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.b,{className:"LinkedIn",size:50}))),"click me!"),r.a.createElement("div",{className:"BottomBarLink"},r.a.createElement("div",{className:"GithubOuter"},r.a.createElement("a",{href:"https://github.com/epicnicks",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{className:"Github",size:50}))),"click me!")))}}]),t}(n.Component)),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("video");null!==e&&(e.playbackRate=10)}},{key:"render",value:function(){var e=a(213);return r.a.createElement("div",{className:"VideoContainer"},r.a.createElement("div",{className:"VideoPlayer"},r.a.createElement("video",{className:"video-container video-container-overlay",loop:!0,muted:!0,"data-reactid":".0.1.0.0",autoPlay:!0},r.a.createElement("source",{type:"video/mp4","data-reactid":".0.1.0.0.0",src:e}))),r.a.createElement("h1",null,"About Nicholas Cerisano"),r.a.createElement("h2",null,"Aspiring Software Developer"))}}]),t}(n.Component),y=(a(214),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(j,null))}}]),t}(n.Component)),O=(a(215),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=a(216);return r.a.createElement("div",{className:"Resume"},r.a.createElement("h1",null,"Link to a PDF copy of my resume: ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e},"here")),r.a.createElement("h3",null,"Check out some of the projects listed in my resume in the projects tab of this page."))}}]),t}(n.Component)),k=a(10),B=(a(217),a(108),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=window.location.href.split("/"),a=t[t.length-1]===this.props.id?"ActiveSideButton":"SideButton";return r.a.createElement("div",{className:a+" "+t[t.length-1],onClick:function(){e.props.navBar.setActiveStateId(e.props.id),e.props.navBar.setState({activeBtn:e})}},this.props.text)}}]),t}(n.Component)),w=null,N=function(e){function t(e){var a;if(Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeBtn:null,navBtns:[]},a.setActiveStateId=function(e){return w=e},a.getActiveStateId=function(){return w},null===w)w="home";else{var n=window.location.href.split("/");w=n[n.length-1]}return a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SideBar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects"},r.a.createElement(B,{text:"Projects Home",id:"projects",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/space-shooter"},r.a.createElement(B,{text:"Space Shooter",id:"space-shooter",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/glitch-garden"},r.a.createElement(B,{text:"Glitch Garden",id:"glitch-garden",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/game-day"},r.a.createElement(B,{text:"Game Day",id:"game-day",navBar:this}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects/portfolio"},r.a.createElement(B,{text:"Portfolio",id:"portfolio",navBar:this})))))}}]),t}(n.Component),C=a(24),x=a.n(C),I="/nicholas-cerisano-resume/unity/space-shooter/Build/",S=I+"SpaceInvadersClone_HTML5.json",A=I+"UnityLoader.js",G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).unityContent=new C.UnityContent(S,A),a.game=null,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return window.navigator.userAgent.indexOf("MSIE ")>-1&&alert("This game will not be able to run in Internet Explorer as it does not support WebAssembly"),r.a.createElement("div",{className:"SpaceShooter"},r.a.createElement("h1",null,"Space Shooter"),r.a.createElement("p",null,"This is a project I worked on following the Udemy course: Complete Unity C# Developer: Learn to code by making games I later designed it around being played on a phone. Feel free to give it a try below by clicking <Start>.",r.a.createElement("br",null),r.a.createElement("br",null),"Controls: Move the mouse; your ship (bottom) will move toward it along the horizontal axis.",r.a.createElement("br",null),"(May take a few seconds to load)"),r.a.createElement(x.a,{className:"Unity_SpaceShooter",unityContent:this.unityContent,ref:function(t){return e.game=t}}))}}]),t}(n.Component),P="/nicholas-cerisano-resume/unity/glitch-garden/Build/GlitchGarden_HTML5.json",L="/nicholas-cerisano-resume/unity/glitch-garden/Build/UnityLoader.js",M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).unityContent=new C.UnityContent(P,L),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GlitchGarden"},r.a.createElement("div",{className:"GlitchGardenBGImage"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Glitch Garden"),r.a.createElement("p",null,"Another game created in the Udemy course: Complete Unity C# Developer: Learn to code by making games.",r.a.createElement("br",null),"Glitch Garden is a 'Tower' Defence game based on Plants vs Zombies.",r.a.createElement("br",null),"The goal is to keep the enemies from making it to the left side of the screen.",r.a.createElement("br",null),"Below is a gif of some gameplay of the first level."),r.a.createElement("img",{src:a(113),alt:a(113)})))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GameDay"},r.a.createElement("h1",null,"Game Day"),r.a.createElement("p",null,"A game I worked on in grade 12 for my religion class's 'Game Day'.",r.a.createElement("br",null),"It is an implementation of 3 team hangman, made in Unity Engine.",r.a.createElement("br",null),"It reads in words to be used from a JSON file.",r.a.createElement("br",null),"Below are screenshots of the game being played.",r.a.createElement("br",null),"[Left] The letter 'E' is guessed",r.a.createElement("br",null),"[Right] The dev console, for forcing outcomes"),r.a.createElement("div",{className:"GameDayImages"},r.a.createElement("img",{src:a(114),alt:a(114)}),r.a.createElement("img",{src:a(115),alt:a(115)})))}}]),t}(n.Component),D="/nicholas-cerisano-resume/unity/infinite-skater/Build/InfiniteSkater_HTML5.json",U="/nicholas-cerisano-resume/unity/infinite-skater/Build/UnityLoader.js",R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).unityContent=new C.UnityContent(D,U),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"InfiniteRunner"},r.a.createElement("h1",null,"Infinite Runner"),r.a.createElement("img",{src:a(116),alt:a(116)}))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"PortfolioProject"},r.a.createElement("h1",null,"This Portfolio"),r.a.createElement("h3",null,"I built this website myself in React using TypeScript.",r.a.createElement("br",null),"You can check out the code on my GitHub using the GitHub icon in the 'Contact Me' bar below, or by clicking ",r.a.createElement("a",{href:"https://github.com/epicnicks",target:"_blank",rel:"noopener noreferrer"},"here"),".",r.a.createElement("br",null)),r.a.createElement("div",{className:"PortfolioProjectLogos"},r.a.createElement("img",{className:"ReactLogo",src:a(117),alt:a(117)}),r.a.createElement("img",{className:"TSLogo",src:a(118),alt:a(118)})),r.a.createElement("img",null))}}]),t}(n.Component);Object(k.a)();function _(){return r.a.createElement("div",{className:"ProjectDefault"},r.a.createElement("h1",null,"Welcome to the Project Page"),r.a.createElement("h3",null,"Feel free to click on the sidebar buttons to get a look at some of my personal projects."))}var z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Projects"},r.a.createElement(N,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/projects/space-shooter",component:G}),r.a.createElement(f.b,{exact:!0,path:"/projects/glitch-garden",component:M}),r.a.createElement(f.b,{exact:!0,path:"/projects/game-day",component:T}),r.a.createElement(f.b,{exact:!0,path:"/projects/infinite-runner",component:R}),r.a.createElement(f.b,{exact:!0,path:"/projects/portfolio",component:H}),r.a.createElement(f.b,{exact:!0,path:"/projects",component:_}),r.a.createElement(f.b,{component:_})))}}]),t}(n.Component),W=(a(221),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"About"},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:"About-Main"},r.a.createElement("div",{className:"About-Image"},r.a.createElement("img",{src:a(119),alt:a(119)})),r.a.createElement("div",{className:"About-Body"},r.a.createElement("h2",null,"Bio"),r.a.createElement("p",null,"I am a second-year Computer Science student attending York University.",r.a.createElement("br",null),"I am a proactive pragmatic logical thinker.",r.a.createElement("br",null),"I spend most of my spare time programming for fun."),r.a.createElement("h2",null,"Hobbies"),r.a.createElement("h3",null,"My hobbies include:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Trying new frameworks and programming languages to see different ways of reasoning problems"),r.a.createElement("li",null,"Writing utility programs to perform tasks such as read my todo-list to me"),r.a.createElement("li",null,"Making games in Unity Engine"),r.a.createElement("li",null,"Playing chess"),r.a.createElement("li",null,"Reading fantasy novels and programming textbooks")))))}}]),t}(n.Component)),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{basename:""},r.a.createElement(b,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/home",component:y}),r.a.createElement(f.b,{exact:!0,path:"/about",component:W}),r.a.createElement(f.b,{exact:!0,path:"/resume",component:O}),r.a.createElement(f.b,{path:"/projects",component:z}),r.a.createElement(f.a,{from:"/",to:"/home"})),r.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,1,2]]]);
//# sourceMappingURL=main.637f4bd0.chunk.js.map