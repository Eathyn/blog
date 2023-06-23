import{_ as n,W as s,X as a,a0 as e}from"./framework-0d71bc9d.js";const o={},t=e(`<h1 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h1><h2 id="the-history-of-module" tabindex="-1"><a class="header-anchor" href="#the-history-of-module" aria-hidden="true">#</a> The History of Module</h2><ul><li><code>ESM</code> 没有成为规范之前，TypeScript 最开始使用 <code>module</code> 关键字定义模块，后来使用 <code>namespace</code> 定义模块。<code>module</code> 和 <code>namespace</code> 被称为内部模块（internal modules）。<code>ESM</code> 成为规范之后，TypeScript 使用 <code>ESM</code> 定义模块，<code>ESM</code> 被成为外部模块（external module），简称为模块（module）。</li><li><code>module</code> 和 <code>namespace</code> 已经过时，最好使用 <code>ESM</code>。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// module keyword</span>
<span class="token keyword">module</span> Calc <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// namespace keyword</span>
<span class="token keyword">namespace</span> Calc <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ESM</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[t];function p(l,i){return s(),a("div",null,c)}const u=n(o,[["render",p],["__file","module.html.vue"]]);export{u as default};
