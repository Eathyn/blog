import{_ as a,r as t,o as e,c as o,b as n,d as p,a as c,e as l}from"./app.0a43b3c6.js";const r="/blog/assets/empty_handler.78ad9952.png",u="/blog/assets/internal_methods.964f9b53.png",i={},k=c('<h1 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h1><h2 id="what-is-proxy" tabindex="-1"><a class="header-anchor" href="#what-is-proxy" aria-hidden="true">#</a> What is Proxy</h2><ul><li>A Proxy object wraps another object and intercepts operations.</li></ul><h2 id="why-do-we-need-proxy" tabindex="-1"><a class="header-anchor" href="#why-do-we-need-proxy" aria-hidden="true">#</a> Why do we need Proxy</h2><ul><li>Proxies are used in many libraries and some browser frameworks.</li></ul><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><blockquote><p>new Proxy(target, handler)</p></blockquote><ul><li>target: an object to wrap</li><li>handler: an object with \u201Ctraps\u201D, methods that intercept operations</li></ul><h2 id="empty-handler" tabindex="-1"><a class="header-anchor" href="#empty-handler" aria-hidden="true">#</a> Empty Handler</h2><ul><li>With an empty handler all operations on proxy are forwarded to target.</li></ul><p><img src="'+r+`" alt="empty handler"></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// A writing operation proxy.test = sets the value on target</span>
proxy<span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment">// A reading operation proxy.test returns the value from target</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>test<span class="token punctuation">)</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>test<span class="token punctuation">)</span> <span class="token comment">// 5</span>

<span class="token comment">// Iteration over proxy returns values from target</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> proxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// test</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="non-empty-handler" tabindex="-1"><a class="header-anchor" href="#non-empty-handler" aria-hidden="true">#</a> Non-empty Handler</h2><ul><li><p>For most operations on objects, there\u2019s a so-called \u201Cinternal method\u201D in the JavaScript specification that describes how it works at the lowest level.</p></li><li><p>Internal methods are only used in the specification, we can\u2019t call them directly by name.</p></li><li><p>Proxy traps intercept invocations of these internal methods.</p></li></ul><p><img src="`+u+`" alt="internal methods"></p><ul><li>JavaScript enforces some invariants \u2013 conditions that must be fulfilled by internal methods and traps. For example, [[Set]] must return <code>true</code> if the value was written successfully, otherwise <code>false</code>.</li></ul><h2 id="get-trap" tabindex="-1"><a class="header-anchor" href="#get-trap" aria-hidden="true">#</a> &quot;get&quot; trap</h2><ul><li>The proxy should totally replace the target object everywhere. No one should ever reference the target object after it got proxied. Otherwise, it\u2019s easy to mess up.</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// target object</span>
<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// the proxy replaces the target object</span>
numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre></div><h2 id="set-trap" tabindex="-1"><a class="header-anchor" href="#set-trap" aria-hidden="true">#</a> &quot;set&quot; trap</h2><ul><li>The set trap should return <code>true</code> if setting is successful, and <code>false</code> otherwise (triggers TypeError).</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> val
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span> <span class="token comment">// Proxy {}</span>

<span class="token comment">// the built-in functionality of arrays is still working</span>
numbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span> <span class="token comment">// Proxy {0: 1}</span>

<span class="token comment">// Uncaught TypeError: &#39;set&#39; on proxy: trap returned falsish for property &#39;1&#39;</span>
numbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,23),d={href:"https://javascript.info/proxy",target:"_blank",rel:"noopener noreferrer"},h=l("Proxy");function m(y,f){const s=t("ExternalLinkIcon");return e(),o("div",null,[k,n("ul",null,[n("li",null,[n("a",d,[h,p(s)])])])])}const x=a(i,[["render",m],["__file","index.html.vue"]]);export{x as default};
