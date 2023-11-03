import{_ as s,W as e,X as t,Y as n,Z as p,$ as o,a0 as c,C as i}from"./framework-0d71bc9d.js";const l={},r=c(`<h1 id="random-integer" tabindex="-1"><a class="header-anchor" href="#random-integer" aria-hidden="true">#</a> Random Integer</h1><h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> Intro</h2><p>生成给定范围内的随机整数，共有四种情况。</p><h2 id="min-x-max" tabindex="-1"><a class="header-anchor" href="#min-x-max" aria-hidden="true">#</a> min &lt;= x &lt; max</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateRandomInteger</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过程：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// step-1: 0 &lt;= Math.random() &lt; 1</span>
<span class="token comment">// step-2: 0 * (max - min) &lt;= Math.random() &lt; 1 * (max - min)</span>
<span class="token comment">// step-3: 0 * (max - min) + min &lt;= Math.random() &lt; 1 * (max - min) + min</span>
<span class="token comment">// example: 0 * (26 - 7) + 7 &lt;= Math.random() &lt; 1 * (26 - 7) + 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="min-x-max-1" tabindex="-1"><a class="header-anchor" href="#min-x-max-1" aria-hidden="true">#</a> min &lt;= x &lt;= max</h2><p><code>min &lt;= x &lt;= max</code> 相当于 <code>min &lt;= x &lt; max + 1</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateRandomInteger</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="min-x-max-2" tabindex="-1"><a class="header-anchor" href="#min-x-max-2" aria-hidden="true">#</a> min &lt; x &lt; max</h2><p><code>min &lt; x &lt; max</code> 相当于 <code>min + 1 &lt;= x &lt; max</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateRandomInteger</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  min <span class="token operator">=</span> min <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="min-x-max-3" tabindex="-1"><a class="header-anchor" href="#min-x-max-3" aria-hidden="true">#</a> min &lt; x &lt;= max</h2><p><code>min &lt; x &lt;= max</code> 相当于 <code>min + 1 &lt;= x &lt; max + 1</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateRandomInteger</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  min <span class="token operator">=</span> min <span class="token operator">+</span> <span class="token number">1</span>
  max <span class="token operator">=</span> max <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,17),u={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values",target:"_blank",rel:"noopener noreferrer"};function d(m,k){const a=i("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",u,[p("min <= x < max"),o(a)])])])}const x=s(l,[["render",d],["__file","index.html.vue"]]);export{x as default};