import{_ as t,W as o,X as p,$ as l,a1 as i,a0 as a,C as c,Y as n,Z as s}from"./framework-0d71bc9d.js";const r={},u=a('<h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><ul><li>让后端开发者配置跨域的 HTTP 头部</li><li>适合开发环境和线上环境</li></ul><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h2><ul><li>适合开发环境</li></ul>',5),d=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=a(`<p>@tab vite</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/base_url/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> <span class="token string">&#39;&lt;url&gt;&#39;</span><span class="token punctuation">,</span>
        ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><ul><li>配置 Nginx 实现代理</li><li>适合线上环境</li></ul>`,5);function v(m,b){const e=c("CodeTabs");return o(),p("div",null,[u,l(e,{id:"28",data:[{title:"webpack"}]},{tab0:i(({title:h,value:g,isActive:x})=>[d]),_:1}),k])}const _=t(r,[["render",v],["__file","index.html.vue"]]);export{_ as default};
