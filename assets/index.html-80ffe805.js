import{_ as t,W as c,X as p,Y as n,Z as a,$ as e,a0 as o,C as l}from"./framework-c8ebc670.js";const i={},u=o(`<h1 id="closure" tabindex="-1"><a class="header-anchor" href="#closure" aria-hidden="true">#</a> Closure</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><ul><li><p>闭包是将函数和函数外部的词法环境绑定在一起。因此函数可以访问到外层词法环境的变量。</p></li><li><p>例子：函数 <code>fn</code> 可以访问到外部词法环境（即全局作用域）的变量 <code>a</code>。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例子：函数 <code>fn</code> 可以访问到外部词法环境（即 <code>outer</code> 函数作用域）的变量 <code>a</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例子：函数 <code>fn</code> 可以访问到外部词法环境（即块作用域）的变量 <code>a</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><ul><li>引入闭包的特性是为了代码复用。如果 JavaScript 不存在闭包这个特性（即函数无法直接访问外层词法环境的变量），那么可能会导致开发者需要额外传递很多参数。</li></ul><p><em>利用闭包，开发者不需要传递参数</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>假设 JavaScript 不存在闭包，开发者需要手动地把外部词法环境的变量当作参数传递给函数</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> second<span class="token punctuation">,</span> third</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>third<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// 1 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JavaScript 中作用域的叫做词法作用域（lexical scope）</li></ul><p>Q: 嵌套的块作用域是闭包吗</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,18),d={href:"https://javascript.info/closure",target:"_blank",rel:"noopener noreferrer"},r={href:"https://stackoverflow.com/a/111111/9863318",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=l("ExternalLinkIcon");return c(),p("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("lexical environment and closure"),e(s)])]),n("li",null,[n("a",r,[a("how do javascript closures work"),e(s)])]),n("li",null,[n("a",k,[a("MDN: closure"),e(s)])])])])}const h=t(i,[["render",v],["__file","index.html.vue"]]);export{h as default};
