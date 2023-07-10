import{_ as c,W as r,X as i,$ as a,a1 as e,a0 as p,Y as n,Z as s,C as o}from"./framework-0d71bc9d.js";const u={},d=p('<h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><ul><li>让后端开发者配置跨域的 HTTP 头部</li><li>适合开发环境和线上环境</li></ul><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h2><ul><li>适合开发环境</li></ul>',5),k=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"proxy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},"'/base_url/'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'<url>'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ws"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"//..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  server`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    proxy`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},"'/base_url/'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        target`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'<url>'"),n("span",{class:"token punctuation"},","),s(`
        ws`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        changeOrigin`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h2",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),s(" Nginx")],-1),v=n("ul",null,[n("li",null,"配置 Nginx 实现代理"),n("li",null,"适合线上环境")],-1);function h(_,g){const t=o("CodeGroupItem"),l=o("CodeGroup");return r(),i("div",null,[d,a(l,null,{default:e(()=>[a(t,{title:" code-group-item webpack"},{default:e(()=>[k]),_:1}),a(t,{title:" code-group-item vite"},{default:e(()=>[m]),_:1})]),_:1}),b,v])}const y=c(u,[["render",h],["__file","index.html.vue"]]);export{y as default};
