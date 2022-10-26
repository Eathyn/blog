import{_ as s,r as t,o as p,c as e,b as n,d as o,a as c,e as l}from"./app.0a43b3c6.js";const u={},i=c(`<h1 id="event-delegation" tabindex="-1"><a class="header-anchor" href="#event-delegation" aria-hidden="true">#</a> Event Delegation</h1><h2 id="reason" tabindex="-1"><a class="header-anchor" href="#reason" aria-hidden="true">#</a> Reason</h2><ul><li>\u5982\u679C\u591A\u4E2A\u5B50\u5143\u7D20\u9700\u8981\u76F8\u540C\u7684\u4E8B\u4EF6\u64CD\u4F5C\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5BF9\u6BCF\u4E2A\u5B50\u5143\u7D20\u90FD\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\uFF0C\u800C\u662F\u5229\u7528\u4E8B\u4EF6\u5192\u6CE1\u673A\u5236\uFF0C\u5BF9\u5B50\u5143\u7D20\u7684\u7236\u5143\u7D20\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\u3002</li><li>\u4E8B\u4EF6\u6355\u83B7\u53EF\u4EE5\u51CF\u5C11\u91CD\u590D\u7F16\u5199\u4EE3\u7801</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p><em>index.html</em></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><em>main.css</em></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">td</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.highlight</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #9bb3d9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>index.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> table <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> selectedTd <span class="token operator">=</span> <span class="token keyword">null</span>

table<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> target <span class="token operator">=</span> evt<span class="token punctuation">.</span>target
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>tagName <span class="token operator">!==</span> <span class="token string">&#39;TD&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token function">highlight</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">highlight</span><span class="token punctuation">(</span><span class="token parameter">td</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>selectedTd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    selectedTd<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;highlight&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  selectedTd <span class="token operator">=</span> td
  selectedTd<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;highlight&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,11),k={href:"https://javascript.info/event-delegation",target:"_blank",rel:"noopener noreferrer"},r=l("Event Delegation");function d(g,h){const a=t("ExternalLinkIcon");return p(),e("div",null,[i,n("ul",null,[n("li",null,[n("a",k,[r,o(a)])])])])}const f=s(u,[["render",d],["__file","index.html.vue"]]);export{f as default};
