import{_ as e,W as p,X as o,Y as n,Z as a,$ as t,a0 as c,C as l}from"./framework-c8ebc670.js";const i={},u=c(`<h1 id="conditional-rendering" tabindex="-1"><a class="header-anchor" href="#conditional-rendering" aria-hidden="true">#</a> Conditional Rendering</h1><h2 id="v-if-on-template" tabindex="-1"><a class="header-anchor" href="#v-if-on-template" aria-hidden="true">#</a> <code>v-if</code> on <code>template</code></h2><ul><li>Using <code>v-if</code> on <code>template</code> to show/hide multiple elements.</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> condition <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-if-vs-v-show" tabindex="-1"><a class="header-anchor" href="#v-if-vs-v-show" aria-hidden="true">#</a> <code>v-if</code> vs <code>v-show</code></h2><ul><li><p>初始值</p><ul><li><code>v-if</code> 的初始值为 <code>false</code> 时不会被渲染为 DOM</li><li><code>v-show</code> 的初始值为 <code>false</code> 时会被渲染为 DOM，同时 display 属性被设置为 <code>none</code></li></ul></li><li><p>原理</p><ul><li>切换 <code>v-if</code> 的值相当于销毁或重新渲染 DOM 结构</li><li>切换 <code>v-show</code> 的值相当于设置 <code>display</code> 的值为 <code>none</code> 或移除 <code>display</code></li></ul></li><li><p>使用场景</p><ul><li><code>v-if</code> 切换开销比较大，初始化开销比较小，适用于不会进行频繁切换的场景</li><li><code>v-show</code> 切换开销比较小，初始化开销比较大（因为初始值为 <code>false</code> 时也会渲染成 DOM 结构），适用于会进行频繁切换的场景</li></ul></li><li><p>是否触发生命周期函数</p><ul><li><code>v-if</code> 为 <code>true</code> 时触发 <code>beforeCreate</code> / <code>created</code> / <code>beforeMount</code> / <code>mounted</code> 生命周期函数</li><li><code>v-if</code> 为 <code>false</code> 时触发 <code>beforeUnmount</code> / <code>unmounted</code> 生命周期函数</li><li><code>v-show</code> 第一次为 <code>true</code> 时触发 <code>beforeCreate</code> / <code>created</code> / <code>beforeMount</code> / <code>mounted</code> 生命周期函数，后续切换不会触发生命周期函数</li></ul></li></ul><h2 id="v-if-with-v-for" tabindex="-1"><a class="header-anchor" href="#v-if-with-v-for" aria-hidden="true">#</a> <code>v-if</code> with <code>v-for</code></h2><h3 id="why-not-use-v-if-and-v-for-on-the-same-element" tabindex="-1"><a class="header-anchor" href="#why-not-use-v-if-and-v-for-on-the-same-element" aria-hidden="true">#</a> Why not use <code>v-if</code> and <code>v-for</code> on the same element</h3><ul><li><code>v-if</code> has higher priority than <code>v-for</code>.</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Error: can not access &#39;number&#39; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(number, index) in [1, 2, 3]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number % 2 === 0<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ number }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solutions" tabindex="-1"><a class="header-anchor" href="#solutions" aria-hidden="true">#</a> Solutions</h3><h4 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> Computed</h4><ul><li>Using <code>computed</code> to filter the data.</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(number, index) in evenNumbers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ number }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> evenNumbers <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> numbers<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-v-for-on-template" tabindex="-1"><a class="header-anchor" href="#use-v-for-on-template" aria-hidden="true">#</a> Use <code>v-for</code> on <code>template</code></h4><ul><li>Using <code>v-for</code> on <code>template</code> element.</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(number, index) in numbers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number % 2 === 0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ number }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,18),d={href:"https://vuejs.org/guide/essentials/conditional.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=l("ExternalLinkIcon");return p(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("Conditional Rendering"),t(s)])]),n("li",null,[n("a",r,[a("Solutions"),t(s)])])])])}const b=e(i,[["render",k],["__file","index.html.vue"]]);export{b as default};
