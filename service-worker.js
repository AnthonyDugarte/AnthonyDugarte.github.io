!function(){"use strict";const e=["client/client.24ff6c2f.js","client/404.552d27ac.js","client/about.51c1de2b.js","client/[slug].524081c0.js","client/index.b7b6404b.js","client/index.9aed062f.js","client/client.ba61abde.js","client/materialize.e671a05a.js"].concat(["service-worker-index.html","avatar.svg","code.jpg","commodore.jpg","favicon.png","global.css","great-success.png","icpc.png","logo-192.png","logo-512.png","manifest.json","server.jpeg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1581472492826").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1581472492826"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1581472492826").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
