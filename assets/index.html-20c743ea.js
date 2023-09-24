import{_ as r,W as n,X as i,Y as e,Z as t,$ as l,a0 as d,C as o}from"./framework-0d71bc9d.js";const s={},c=d('<h1 id="render-mechanism" tabindex="-1"><a class="header-anchor" href="#render-mechanism" aria-hidden="true">#</a> Render Mechanism</h1><h2 id="virtual-dom" tabindex="-1"><a class="header-anchor" href="#virtual-dom" aria-hidden="true">#</a> Virtual DOM</h2><ul><li>挂载(mount) : 渲染器将虚拟 DOM 转化为真实 DOM 的过程</li><li>修补(patch) / 比较差异(diffing) / 协调(reconciliation) : 比较两个虚拟 DOM 的不同并在真实 DOM 上做出改变</li></ul><h2 id="render-pipeline" tabindex="-1"><a class="header-anchor" href="#render-pipeline" aria-hidden="true">#</a> Render Pipeline</h2><ol><li>编译器把模板编译成渲染函数</li><li>渲染函数返回虚拟 DOM 树</li><li>渲染器把虚拟 DOM 树渲染成真实 DOM 树</li><li>当响应式数据改变的时候更新虚拟 DOM 树，重新执行第三步</li></ol><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',6),h={href:"https://vuejs.org/guide/extras/rendering-mechanism.html",target:"_blank",rel:"noopener noreferrer"};function m(u,_){const a=o("ExternalLinkIcon");return n(),i("div",null,[c,e("ul",null,[e("li",null,[e("a",h,[t("Render Mechanism"),l(a)])])])])}const p=r(s,[["render",m],["__file","index.html.vue"]]);export{p as default};