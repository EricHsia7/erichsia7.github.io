if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const c=e=>i(e,n),l={module:{uri:n},exports:r,require:c};s[n]=Promise.all(o.map((e=>l[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"erichsia7-github-io-9eac91e"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./1250cc0d1c229aee1fd0.js",revision:null},{url:"./d6186ae3e7ff8f5e606e.css",revision:null},{url:"./index.html",revision:"4357a21ebd76f9c9f590b983070a12a2"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
