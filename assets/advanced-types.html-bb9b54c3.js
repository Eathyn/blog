import{_ as p,W as o,X as l,Y as n,Z as s,$ as e,a0 as t,C as c}from"./framework-0d71bc9d.js";const i={},r=t(`<h1 id="advanced-types" tabindex="-1"><a class="header-anchor" href="#advanced-types" aria-hidden="true">#</a> Advanced Types</h1><h2 id="mapped-type" tabindex="-1"><a class="header-anchor" href="#mapped-type" aria-hidden="true">#</a> Mapped Type</h2><blockquote><p>Reference: <em>Learning TypeScript</em>: p253-254</p></blockquote><h3 id="definition" tabindex="-1"><a class="header-anchor" href="#definition" aria-hidden="true">#</a> Definition</h3><ul><li>映射类型（mapped type）指的是对某个类型的所有属性进行操作后形成的新类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token string">&#39;panda&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;monkey&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;elephant&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">AnimalCount</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>k <span class="token keyword">in</span> Animal<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span> <span class="token comment">// {panda: number, monkey: number, elephant: number}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><ul><li>映射类型经常与 <code>keyof</code> 搭配。<code>keyof TypeA</code> 返回 <code>&quot;a&quot; | &quot;b&quot; | &quot;c&quot;</code>。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TypeA</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span>
  b<span class="token operator">:</span> <span class="token builtin">string</span>
  c<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeB</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> TypeA<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span> <span class="token comment">// {a: number, b: number, c: number}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 <code>-readonly</code> 将属性转变为可写属性；使用 <code>-?</code> 将属性转变为必需属性。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TypeA</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">readonly</span> b<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeB</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">-</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> TypeA<span class="token punctuation">]</span><span class="token operator">:</span> TypeA<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span> <span class="token comment">// {a?: number, b: string}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeC</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> TypeA<span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> TypeA<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span> <span class="token comment">// {a: number, readonly b: string}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conditional-type" tabindex="-1"><a class="header-anchor" href="#conditional-type" aria-hidden="true">#</a> Conditional Type</h2><h3 id="definition-1" tabindex="-1"><a class="header-anchor" href="#definition-1" aria-hidden="true">#</a> Definition</h3><ul><li>基于条件判断选择类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TypeA</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">TypeB</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">TypeC</span> <span class="token operator">=</span> TypeA <span class="token keyword">extends</span> <span class="token class-name">TypeB</span> <span class="token operator">?</span> TypeA <span class="token operator">:</span> TypeB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><ul><li>可以使用泛型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Type<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token constant">U</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>结合 <code>infer</code> 使用。</li></ul>`,19),d=n("p",null,"Reference",-1),u={href:"https://blog.logrocket.com/understanding-infer-typescript/",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"infer",-1),m={href:"https://stackoverflow.com/a/60067851",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Type<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token keyword">infer</span> Item<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> Item <span class="token operator">:</span> <span class="token constant">T</span>
<span class="token keyword">type</span> <span class="token class-name">TypeA</span> <span class="token operator">=</span> Type<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name">TypeB</span> <span class="token operator">=</span> Type<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token comment">// number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="literal-type" tabindex="-1"><a class="header-anchor" href="#literal-type" aria-hidden="true">#</a> Literal Type</h2><ul><li>字面量类型（literal type）指的是类型是一个具体的值，无法更改。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Type</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> Type <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// TS2322: Type &#39;2&#39; is not assignable to type &#39;1&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="template-literal-type" tabindex="-1"><a class="header-anchor" href="#template-literal-type" aria-hidden="true">#</a> Template Literal Type</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Mr. </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> a<span class="token operator">:</span> Name <span class="token operator">=</span> <span class="token string">&#39;Mr. Smith&#39;</span> <span class="token comment">// ok</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> Name <span class="token operator">=</span> <span class="token string">&#39;Mrs. Smith&#39;</span> <span class="token comment">// TS2322: Type &#39;&quot;Mrs. Smith&quot;&#39; is not assignable to type &#39;\`Mr. \${string}\`&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recursive-type" tabindex="-1"><a class="header-anchor" href="#recursive-type" aria-hidden="true">#</a> Recursive Type</h2><ul><li>递归类型用于构建复杂的数据结构，例如：链表、树等。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  next<span class="token operator">:</span> LinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(b,h){const a=c("ExternalLinkIcon");return o(),l("div",null,[r,n("blockquote",null,[d,n("ul",null,[n("li",null,[n("a",u,[s("Understanding "),k,s(" in TypeScript"),e(a)])]),n("li",null,[n("a",m,[s("Why is the infer keyword needed in Typescript?"),e(a)])])])]),y])}const T=p(i,[["render",v],["__file","advanced-types.html.vue"]]);export{T as default};
