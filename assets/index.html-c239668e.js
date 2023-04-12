import{_ as t,W as p,X as o,Y as n,Z as a,$ as e,a0 as c,C as i}from"./framework-c8ebc670.js";const l={},u=c(`<h1 id="losing-this-keyword" tabindex="-1"><a class="header-anchor" href="#losing-this-keyword" aria-hidden="true">#</a> Losing <code>this</code> Keyword</h1><p><code>this</code> 由<strong>调用</strong>函数的上下文决定，不是由<strong>定义</strong>函数的上下文决定</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Window</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  fn<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// obj</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// instance</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>this</code> 由<strong>调用</strong>函数的上下文决定，所以存在 <code>this</code> 丢失的情况</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Eathyn&#39;</span><span class="token punctuation">,</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// this 丢失</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>getName<span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// this 丢失</span>
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> user<span class="token punctuation">.</span>getName
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>this</code> 丢失的解决方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Eathyn&#39;</span><span class="token punctuation">,</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// solution-1: a wrapping function</span>
<span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Eathyn</span>

<span class="token comment">// solution-2: bind</span>
<span class="token keyword">const</span> boundGetName <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn4</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn4</span><span class="token punctuation">(</span>boundGetName<span class="token punctuation">)</span> <span class="token comment">// Eathyn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,8),d={href:"https://stackoverflow.com/a/20279485/9863318",target:"_blank",rel:"noopener noreferrer"},r={href:"https://javascript.info/bind",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=i("ExternalLinkIcon");return p(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("Losing this Keyword"),e(s)])]),n("li",null,[n("a",r,[a("Losing this Keyword Solutions"),e(s)])])])])}const f=t(l,[["render",k],["__file","index.html.vue"]]);export{f as default};
