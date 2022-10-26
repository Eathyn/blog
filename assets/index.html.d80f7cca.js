import{_ as n,o as s,c as a,a as t}from"./app.0a43b3c6.js";const p="/blog/assets/equilateral_triangle.8675e064.png",o={},c=t(`<h1 id="shapes" tabindex="-1"><a class="header-anchor" href="#shapes" aria-hidden="true">#</a> Shapes</h1><h2 id="triangle" tabindex="-1"><a class="header-anchor" href="#triangle" aria-hidden="true">#</a> Triangle</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
	<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> 50px solid #000<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.bottom</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid #000<span class="token punctuation">;</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid #000<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid #000<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="equilateral-triangle" tabindex="-1"><a class="header-anchor" href="#equilateral-triangle" aria-hidden="true">#</a> Equilateral Triangle</h2><p><img src="`+p+`" alt="equilateral triangle"></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
	<span class="token property">--border-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
	<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> solid #000<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.bottom</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> solid #000<span class="token punctuation">;</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> solid #000<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> solid #000<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--border-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[c];function u(l,i){return s(),a("div",null,e)}const r=n(o,[["render",u],["__file","index.html.vue"]]);export{r as default};
