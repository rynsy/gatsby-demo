"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{4491:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(7294);var l=()=>{const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const t=e.current;if(!t)return;const r=t.getContext("2d");if(!r)return;let a;const l={x:Math.random()*t.width,y:Math.random()*t.height,radius:20,dx:5*(Math.random()-.5),dy:5*(Math.random()-.5)},n=()=>{t&&r&&(r.clearRect(0,0,t.width,t.height),r.beginPath(),r.arc(l.x,l.y,l.radius,0,2*Math.PI),r.fillStyle="rgba(66, 135, 245, 0.5)",r.fill(),r.closePath(),(l.x+l.radius>t.width||l.x-l.radius<0)&&(l.dx=-l.dx),(l.y+l.radius>t.height||l.y-l.radius<0)&&(l.dy=-l.dy),l.x+=l.dx,l.y+=l.dy,a=requestAnimationFrame(n))},s=()=>{t.width=window.innerWidth,t.height=window.innerHeight};return s(),window.addEventListener("resize",s),n(),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",s)}}),[]),a.createElement("canvas",{ref:e,className:"fixed top-0 left-0 w-full h-full pointer-events-none"})};const n="font-serif",s="font-sans",i=["hover:bg-pink-200 hover:text-pink-800","hover:bg-purple-200 hover:text-purple-800","hover:bg-blue-200 hover:text-blue-800","hover:bg-green-200 hover:text-green-800"];function c(e){let{name:t="Ryan Lindsey",imageUrl:r="/placeholder.svg"}=e;return a.createElement("div",{className:`min-h-screen bg-gray-50 flex flex-col ${s} relative overflow-hidden`},a.createElement(l,null),a.createElement("main",{className:"flex-grow flex items-center justify-center p-4 relative z-10"},a.createElement("div",{className:"w-full h-full bg-white/80 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden flex flex-col"},a.createElement("div",{className:"p-8 flex-grow flex flex-col"},a.createElement("div",{className:"mb-6"},a.createElement("div",{className:"flex items-start mb-6"},a.createElement("img",{className:"h-24 w-24 rounded-full object-cover mr-6",src:r,alt:t,width:96,height:96}),a.createElement("div",null,a.createElement("h1",{className:`text-4xl font-bold text-gray-900 mb-4 ${n}`},t),a.createElement("p",{className:"text-gray-600"},"Welcome to my placeholder website. This is very much a work-in-progress, excuse the mess.")))),a.createElement("div",{className:"flex-grow"}),a.createElement("nav",{className:"flex flex-col items-end space-y-2"},[{href:"/about",label:"About Me"},{href:"/blog",label:"Blog"},{href:"/projects",label:"Projects"},{href:"/contact",label:"Contact"}].map(((e,t)=>a.createElement("a",{key:e.href,href:e.href,className:`text-gray-600 hover:text-gray-900 font-medium py-2 px-4 rounded-full transition-all duration-300 ${i[t]} text-right`},e.label))))))),a.createElement("footer",{className:"h-12 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm relative z-10"},a.createElement("p",{className:"text-center text-gray-500 text-xs"},"© ",(new Date).getFullYear()," ",t,". All rights reserved.")))}var o=()=>a.createElement(c,null)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1d01c5759d8ddc9a20f3.js.map