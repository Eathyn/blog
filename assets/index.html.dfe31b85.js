import{_ as o,r as a,o as r,c,b as n,d as s,w as l,a as i,e as t}from"./app.0a43b3c6.js";const u={},k=i(`<h1 id="how-to-redirect" tabindex="-1"><a class="header-anchor" href="#how-to-redirect" aria-hidden="true">#</a> How To Redirect</h1><h2 id="method-1-with-route-path" tabindex="-1"><a class="header-anchor" href="#method-1-with-route-path" aria-hidden="true">#</a> Method 1: with Route Path</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/main/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="method-2-with-route-name" tabindex="-1"><a class="header-anchor" href="#method-2-with-route-name" aria-hidden="true">#</a> Method 2: with Route Name</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/main/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="method-3-with-a-function" tabindex="-1"><a class="header-anchor" href="#method-3-with-a-function" aria-hidden="true">#</a> Method 3: with a Function</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/main/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">q</span><span class="token operator">:</span> to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; user?q=1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,8),d={href:"https://router.vuejs.org/guide/essentials/redirect-and-alias.html",target:"_blank",rel:"noopener noreferrer"},h=t("Document"),y=t("Note");function m(g,_){const p=a("ExternalLinkIcon"),e=a("RouterLink");return r(),c("div",null,[k,n("ul",null,[n("li",null,[n("a",d,[h,s(p)])]),n("li",null,[s(e,{to:"/front_end/vue_router/guide/redirect_and_alias/"},{default:l(()=>[y]),_:1})])])])}const v=o(u,[["render",m],["__file","index.html.vue"]]);export{v as default};
