import{S as t,i as s,s as a,b as e,e as n,t as o,r as i,h as r,j as c,d as l,f as h,g as u,k as p,m as d,n as f,o as m,p as v}from"./client.ba61abde.js";function g(t){let s,a,g,b,j,w,x=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),b=o(x),j=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);b=u(s,x),s.forEach(r),j=c(t),w=l(t,"DIV",{class:!0}),h(w).forEach(r),this.h()},h(){p(w,"class","content svelte-1ycksgq")},m(t,s){d(t,a,s),d(t,g,s),f(g,b),d(t,j,s),d(t,w,s),w.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&x!==(x=t[0].title+"")&&m(b,x),1&a&&y!==(y=t[0].html+"")&&(w.innerHTML=y)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(j),t&&r(w)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,j,g,a,{post:0})}}export{b as preload};
