import{n as b,s as g}from"./scheduler.5e1763d8.js";const e=[];function d(i,l=b){let n;const o=new Set;function r(t){if(g(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(n=l(r,u)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1w61urc)==null?void 0:f.base)??"/sveltekit-github-pages";var a;const w=((a=globalThis.__sveltekit_1w61urc)==null?void 0:a.assets)??h;export{w as a,h as b,d as w};