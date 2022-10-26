import{_ as p,r as o,o as e,c,b as n,d as a,a as l,e as t}from"./app.0a43b3c6.js";const u="/blog/assets/two_columns_flexbox.286e0e5b.png",i="/blog/assets/three_columns_flexbox.6d30e155.png",k={},r=l(`<h1 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h1><h2 id="two-columns-layout" tabindex="-1"><a class="header-anchor" href="#two-columns-layout" aria-hidden="true">#</a> Two Columns Layout</h2><h3 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> FlexBox</h3><ul><li><code>flex: 1</code> : \u53F3\u5217\u81EA\u9002\u5E94</li><li><code>align-items: flex-start</code> : \u907F\u514D\u5DE6\u53F3\u5217\u9AD8\u5EA6\u4E00\u81F4</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.container, .left, .right</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span> <span class="token comment">/* \u907F\u514D\u5DE6\u53F3\u5217\u9AD8\u5EA6\u4E00\u81F4 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* \u5DE6\u5217\u7B49\u5BBD */</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
	<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* \u53F3\u5217\u81EA\u9002\u5E94 */</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+u+`" alt="Two Columns FlexBox"></p><h2 id="three-columns-layout" tabindex="-1"><a class="header-anchor" href="#three-columns-layout" aria-hidden="true">#</a> Three Columns Layout</h2><h3 id="flexbox-1" tabindex="-1"><a class="header-anchor" href="#flexbox-1" aria-hidden="true">#</a> FlexBox</h3><ul><li>\u5DE6\u53F3\u4E24\u5217\u56FA\u5B9A \u4E2D\u95F4\u81EA\u9002\u5E94</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.container, .left, .right, .middle</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token property">gap</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* \u5DE6\u5217\u7B49\u5BBD */</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.middle</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span> <span class="token comment">/* \u53F3\u5217\u7B49\u5BBD */</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+i+'" alt="Three Columns FlexBox"></p><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',14),d={href:"https://vue3js.cn/interview/css/column_layout.html",target:"_blank",rel:"noopener noreferrer"},g=t("Two or Three Columns Layouts"),h={href:"https://csslayout.io/",target:"_blank",rel:"noopener noreferrer"},x=t("Popular Layouts and Patterns");function m(f,_){const s=o("ExternalLinkIcon");return e(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[g,a(s)])]),n("li",null,[n("a",h,[x,a(s)])])])])}const y=p(k,[["render",m],["__file","index.html.vue"]]);export{y as default};
