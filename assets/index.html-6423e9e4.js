import{_ as n,W as s,X as a,a0 as e}from"./framework-c8ebc670.js";const p={},t=e(`<h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><ul><li>让后端开发者配置跨域的 HTTP 头部</li><li>适合开发环境和线上环境</li></ul><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h2><ul><li>适合开发环境</li></ul><p>:::: code-group</p><p>::: code-group-item webpack</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/base_url/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;&lt;url&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: code-group-item vite</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::::</p><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><ul><li>配置 Nginx 实现代理</li><li>适合线上环境</li></ul>`,15),o=[t];function i(l,r){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","index.html.vue"]]);export{u as default};
