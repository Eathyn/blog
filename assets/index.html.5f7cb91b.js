import{_ as n,o as a,c as s,a as t}from"./app.0a43b3c6.js";const e={},o=t(`<h1 id="how-to-config-404-page" tabindex="-1"><a class="header-anchor" href="#how-to-config-404-page" aria-hidden="true">#</a> How to Config 404 Page</h1><ul><li>Using <code>path: *</code> to match all undefined routes.</li><li>Placing this route at the end of the route definitions.</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// other routes</span>
  <span class="token comment">// ...</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,3),p=[o];function c(r,i){return a(),s("div",null,p)}const u=n(e,[["render",c],["__file","index.html.vue"]]);export{u as default};
