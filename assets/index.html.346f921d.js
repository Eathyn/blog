import{_ as a,r as t,o as p,c as o,b as n,d as e,a as c,e as l}from"./app.0a43b3c6.js";const u="/blog/assets/two_positives.9231617d.png",i="/blog/assets/two_negatives.8f745ae5.png",k="/blog/assets/one_positive_one_negative.2651f56c.png",r="/blog/assets/negative_left_top.1346a2e4.png",g="/blog/assets/negative_right_bottom.fca834ab.png",d={},m=c(`<h1 id="margin" tabindex="-1"><a class="header-anchor" href="#margin" aria-hidden="true">#</a> Margin</h1><h2 id="margin-collapsing" tabindex="-1"><a class="header-anchor" href="#margin-collapsing" aria-hidden="true">#</a> Margin Collapsing</h2><ul><li>Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.first, .second</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first</span> <span class="token punctuation">{</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.second</span> <span class="token punctuation">{</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* largest one wins */</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+u+`" alt="two positives"></p><ul><li>Two negative margins will collapse and the smallest (furthest from zero) value will be used.</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.first, .second</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first</span> <span class="token punctuation">{</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.second</span> <span class="token punctuation">{</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span> <span class="token comment">/* smallest one wins */</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+i+`" alt="two negatives"></p><ul><li>If one margin is negative, its value will be subtracted from the total.</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.first, .second</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first</span> <span class="token punctuation">{</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span> <span class="token comment">/* subtracted from the total */</span>
<span class="token punctuation">}</span>

<span class="token selector">.second</span> <span class="token punctuation">{</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+k+`" alt="one positive one negative"></p><h2 id="negative-margin" tabindex="-1"><a class="header-anchor" href="#negative-margin" aria-hidden="true">#</a> Negative Margin</h2><ul><li>an element with negative <code>margin-left</code> / <code>margin-top</code> will move to the left / top.</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 3px solid red<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first, .second</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first</span> <span class="token punctuation">{</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> -40px<span class="token punctuation">;</span>
	<span class="token property">margin-left</span><span class="token punctuation">:</span> -40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+r+`" alt="negative margin left and top"></p><ul><li>An element with negative <code>margin-right</code> / <code>margin-bottom</code> will cause elements on the right / bottom of that move left / up.</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 3px solid red<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first, .second</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.first</span> <span class="token punctuation">{</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> -40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+g+'" alt="negative margin right and bottom"></p><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',24),v={href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margin",target:"_blank",rel:"noopener noreferrer"},h=l("Margin Collapsing");function x(f,_){const s=t("ExternalLinkIcon");return p(),o("div",null,[m,n("ul",null,[n("li",null,[n("a",v,[h,e(s)])])])])}const b=a(d,[["render",x],["__file","index.html.vue"]]);export{b as default};
