import{_ as i,W as o,X as c,Y as n,$ as a,a1 as l,Z as s,a0 as u,C as t}from"./framework-c8ebc670.js";const r={},d=u(`<h1 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h1><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li><code>mixin</code> is an object for storing and reusing options of a vue instance.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mixinObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">showA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mixinObj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>MainView.vue</em></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>a: {{ a }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> mixinObj <span class="token keyword">from</span> <span class="token string">&#39;@/mixins/main&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MainView&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixinObj<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>mixin&#39;s lifecycle hooks are called before component&#39;s.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mixinObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mixin mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mixin created&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mixinObj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> mixinObj <span class="token keyword">from</span> <span class="token string">&#39;@/mixins/main&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MainView&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixinObj<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;main created&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;main mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>// result:
<span class="token list punctuation">1.</span> mixin created
<span class="token list punctuation">2.</span> main created
<span class="token list punctuation">3.</span> mixin mounted
<span class="token list punctuation">4.</span> main mounted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Expect for lifecycle hooks, mixin&#39;s options will be ignored when that conflict with options in component.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mixinObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mixinObj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> mixinObj <span class="token keyword">from</span> <span class="token string">&#39;@/mixins/main&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MainView&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixinObj<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 100</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compare-to-composables" tabindex="-1"><a class="header-anchor" href="#compare-to-composables" aria-hidden="true">#</a> Compare to Composables</h2>`,14),k=n("h2",{id:"refs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#refs","aria-hidden":"true"},"#"),s(" Refs")],-1),v={href:"https://v2.vuejs.org/v2/guide/mixins.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vuejs.org/api/options-composition.html#mixins",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vuejs.org/guide/reusability/composables.html#vs-mixins",target:"_blank",rel:"noopener noreferrer"};function g(h,x){const p=t("RouterLink"),e=t("ExternalLinkIcon");return o(),c("div",null,[d,n("ul",null,[n("li",null,[a(p,{to:"/front_end/vue/basic/composables/#why-do-we-need-composable"},{default:l(()=>[s("Details")]),_:1})])]),k,n("ul",null,[n("li",null,[n("a",v,[s("Mixins in Vue.js 2"),a(e)])]),n("li",null,[n("a",m,[s("Mixins api"),a(e)])]),n("li",null,[n("a",b,[s("Compare to Composables"),a(e)])])])])}const y=i(r,[["render",g],["__file","index.html.vue"]]);export{y as default};
