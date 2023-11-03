import{_ as s,W as e,X as t,Y as n,Z as i,$ as o,a0 as l,C as c}from"./framework-0d71bc9d.js";const p="/blog/assets/primitives-e9827f4f.png",r="/blog/assets/object-f16fbecc.png",d={},u=l('<h1 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> Variable</h1><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h2><ul><li>基本数据类型存储在栈中，复制后不会相互影响</li></ul><figure><img src="'+p+'" alt="primitives" height="250" tabindex="0" loading="lazy"><figcaption>primitives</figcaption></figure><ul><li>对象类型存储在堆中，栈中保存的是指向堆内存的地址，复制后会相互影响</li></ul><figure><img src="'+r+`" alt="object" height="250" tabindex="0" loading="lazy"><figcaption>object</figcaption></figure><h2 id="var-let-and-const" tabindex="-1"><a class="header-anchor" href="#var-let-and-const" aria-hidden="true">#</a> <code>var</code>, <code>let</code> and <code>const</code></h2><h3 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> var</h3><ul><li>variables declared in global environment will be properties of global object (eg: window in browser, global in Node).</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>variables will be hoisting.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>

<span class="token comment">// equal to:</span>
<span class="token keyword">var</span> a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
a <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>can&#39;t form the block scope</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>we can declare a variable multiple times.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h3><ul><li>variable will create code block.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// error: a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h3><ul><li>The variable must be assigned a value.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// no</span>
<span class="token keyword">const</span> a <span class="token comment">// Missing initializer in const declaration</span>

<span class="token comment">// yes</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The value of variable can not be changed after initialized.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// Assignment to constant variable.</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Assignment to constant variable.</span>

b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// work</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h3><table><thead><tr><th></th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>variable hoisting</td><td>yes</td><td>no</td><td>no</td></tr><tr><td>temporary dead zone</td><td>no</td><td>yes</td><td>yes</td></tr><tr><td>block scope</td><td>no</td><td>yes</td><td>yes</td></tr><tr><td>declare repeatedly</td><td>yes</td><td>no</td><td>no</td></tr><tr><td>change value</td><td>yes</td><td>yes</td><td>no</td></tr></tbody></table><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,27),v={href:"https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/",target:"_blank",rel:"noopener noreferrer"};function m(k,b){const a=c("ExternalLinkIcon");return e(),t("div",null,[u,n("ul",null,[n("li",null,[n("a",v,[i("Variable Store"),o(a)])])])])}const g=s(d,[["render",m],["__file","index.html.vue"]]);export{g as default};