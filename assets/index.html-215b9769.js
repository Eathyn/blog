import{_ as n,W as s,X as a,a0 as t}from"./framework-c8ebc670.js";const e={},p=t(`<h1 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h1><h2 id="reason" tabindex="-1"><a class="header-anchor" href="#reason" aria-hidden="true">#</a> Reason</h2><ul><li>Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.</li></ul><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><ul><li><code>transition-property</code>: which properties to animate</li><li><code>transition-duration</code>: how long the transition will last</li><li><code>transition-timing-function</code>: how the transition will run</li><li><code>transition-delay</code>: when the animation will start</li></ul><h2 id="single-property" tabindex="-1"><a class="header-anchor" href="#single-property" aria-hidden="true">#</a> Single Property</h2><p><em>index.html</em></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>main.css</em></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> background-color 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item:hover</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> lightpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiple-properties" tabindex="-1"><a class="header-anchor" href="#multiple-properties" aria-hidden="true">#</a> Multiple Properties</h2><p><em>index.html</em></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>main.css</em></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> background-color 1s<span class="token punctuation">,</span> width 1s<span class="token punctuation">,</span> height 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item:hover</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> lightpink<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><ul><li><code>transitionrun</code>: the beginning of a transition before any delay</li><li><code>transitionstart</code>: the beginning of a transition after any delay</li><li><code>transitionend</code>: the end of a transition</li></ul><p><em>index.html</em></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>main.css</em></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> width 1s 1s<span class="token punctuation">,</span> height 1s 1s<span class="token punctuation">,</span> background-color 1s 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item:hover</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.item&#39;</span><span class="token punctuation">)</span>

item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionrun&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;run&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionstart&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","index.html.vue"]]);export{r as default};