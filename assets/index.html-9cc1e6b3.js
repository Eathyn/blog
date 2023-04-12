import{_ as a,W as e,X as t,Y as n,Z as o,$ as p,a0 as c,C as i}from"./framework-c8ebc670.js";const l="/blog/assets/set-interval-5af81375.png",u="/blog/assets/nested_set-timeout-f9c70821.png",r={},d=c(`<h1 id="the-problem-of-setinterval" tabindex="-1"><a class="header-anchor" href="#the-problem-of-setinterval" aria-hidden="true">#</a> The Problem of <code>setInterval</code></h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><ul><li><code>setInterval</code> 会把执行回调函数所花费的时间也算在间隔时间里，导致实际的间隔时间为间隔时间减执行回调函数的时间，甚至执行回调函数的时间比间隔还要长</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">func</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="setInterval" tabindex="0" loading="lazy"><figcaption>setInterval</figcaption></figure><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><ul><li>嵌套 <code>setTimeout</code> 不会把回调函数所花费的时间算在间隔时间里，所以间隔时间是准确的</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">func</span><span class="token punctuation">(</span>n<span class="token operator">++</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="Nested SetTimeout" tabindex="0" loading="lazy"><figcaption>Nested SetTimeout</figcaption></figure><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',10),k={href:"https://javascript.info/settimeout-setinterval#nested-settimeout",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"setInterval",-1);function m(f,b){const s=i("ExternalLinkIcon");return e(),t("div",null,[d,n("ul",null,[n("li",null,[n("a",k,[o("The Problem of "),v,p(s)])])])])}const g=a(r,[["render",m],["__file","index.html.vue"]]);export{g as default};
