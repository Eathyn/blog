import{_ as n,W as s,X as a,a0 as e}from"./framework-0d71bc9d.js";const t={},p=e(`<h1 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h1><h2 id="object-types" tabindex="-1"><a class="header-anchor" href="#object-types" aria-hidden="true">#</a> Object Types</h2><ul><li>TypeScript will throw error if accessing a non-exist property in object.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>a <span class="token comment">// Property &#39;a&#39; does not exist on type &#39;{}&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="declaring-object-types" tabindex="-1"><a class="header-anchor" href="#declaring-object-types" aria-hidden="true">#</a> Declaring Object Types</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aliased-object-types" tabindex="-1"><a class="header-anchor" href="#aliased-object-types" aria-hidden="true">#</a> Aliased Object Types</h3><ul><li>Using type alias to reuse object shape.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="structural-typing" tabindex="-1"><a class="header-anchor" href="#structural-typing" aria-hidden="true">#</a> Structural Typing</h2><h3 id="usage-checking" tabindex="-1"><a class="header-anchor" href="#usage-checking" aria-hidden="true">#</a> Usage Checking</h3><ul><li>TypeScript will throw an error if a required property is missing.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39; but required in type &#39;Person&#39;. </span>
<span class="token keyword">let</span> p1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="excess-property-checking" tabindex="-1"><a class="header-anchor" href="#excess-property-checking" aria-hidden="true">#</a> Excess Property Checking</h3><ul><li>TypeScript will throw an error if a property is not defined in an object type but used.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// Error</span>
<span class="token keyword">let</span> p1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  grade<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nested-object-types" tabindex="-1"><a class="header-anchor" href="#nested-object-types" aria-hidden="true">#</a> Nested Object Types</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Book</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> book1<span class="token operator">:</span> Book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Error: lack &#39;lastName&#39;</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Learning TypeScript&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>nested type alias</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Book</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  author<span class="token operator">:</span> Author<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> book1<span class="token operator">:</span> Book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Error: lack &#39;lastName&#39;</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Learning TypeScript&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="optional-properties" tabindex="-1"><a class="header-anchor" href="#optional-properties" aria-hidden="true">#</a> Optional Properties</h3><ul><li>Adding <code>?</code> before <code>:</code> to indicate that property is optional.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token comment">// &#39;age&#39; is optional</span>
<span class="token punctuation">}</span>

<span class="token comment">// works</span>
<span class="token keyword">const</span> p1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// also works</span>
<span class="token keyword">const</span> p2<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eaven&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unions-of-object-types" tabindex="-1"><a class="header-anchor" href="#unions-of-object-types" aria-hidden="true">#</a> Unions of Object Types</h2><h3 id="inferred-object-type-unions" tabindex="-1"><a class="header-anchor" href="#inferred-object-type-unions" aria-hidden="true">#</a> Inferred Object-Type Unions</h3><ul><li>generate optional properties.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span>
  <span class="token operator">?</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span>
  <span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;eaven&#39;</span><span class="token punctuation">,</span> grade<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>

<span class="token comment">// is equal to:</span>
<span class="token keyword">type</span> <span class="token class-name">PersonWithAge</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  grade<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PersonWithGrade</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  grade<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> PersonWithAge <span class="token operator">|</span> PersonWithGrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explicit-object-type-unions" tabindex="-1"><a class="header-anchor" href="#explicit-object-type-unions" aria-hidden="true">#</a> Explicit Object-Type Unions</h3><ul><li>Restricting access to potentially nonexistent members of objects.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PersonWithAge</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PersonWithGrade</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  grade<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> PersonWithAge <span class="token operator">|</span> PersonWithGrade

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span>
  <span class="token operator">?</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span>
  <span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;eaven&#39;</span><span class="token punctuation">,</span> grade<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>

<span class="token comment">// Error: &#39;age&#39; and &#39;grade&#39; may not exist in an object</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>grade<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="narrowing-object-types" tabindex="-1"><a class="header-anchor" href="#narrowing-object-types" aria-hidden="true">#</a> Narrowing Object Types</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span> <span class="token keyword">in</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>person<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>person<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>person<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="discriminated-unions" tabindex="-1"><a class="header-anchor" href="#discriminated-unions" aria-hidden="true">#</a> Discriminated Unions</h3><ul><li>Another popular form of union typed objects in JavaScript and TypeScript is to have a property on the object indicate what shape the object is.</li><li>This kind of type shape is called a <em>discriminated</em> union, and the property whose value indicates the object’s type is a <em>discriminant</em>.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StudentWithAge</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">StudentWithGrade</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  grade<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;grade&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Student</span> <span class="token operator">=</span> StudentWithAge <span class="token operator">|</span> StudentWithGrade

<span class="token keyword">const</span> student<span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  grade<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;grade&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>student<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;grade&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;student with grade&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;student with age&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intersection-types" tabindex="-1"><a class="header-anchor" href="#intersection-types" aria-hidden="true">#</a> Intersection Types</h2><ul><li>Intersection type is used to create a new type that combines multiple existing object types.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TypeA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeB</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeC</span> <span class="token operator">=</span> TypeA <span class="token operator">&amp;</span> TypeB

<span class="token comment">// Equivalent to:</span>
<span class="token comment">// type TypeC = {</span>
<span class="token comment">//   a: number,</span>
<span class="token comment">//   b: number,</span>
<span class="token comment">//   c: number,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Intersection types can be combined with union types.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TypeA</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span> c<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">&#39;c&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token class-name">Result1</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// or</span>

<span class="token keyword">type</span> <span class="token class-name">Result2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  c<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dangers-of-intersection-types" tabindex="-1"><a class="header-anchor" href="#dangers-of-intersection-types" aria-hidden="true">#</a> Dangers of Intersection Types</h3><ul><li>Trying to <code>&amp;</code> two primitives will result in the <code>never</code> type.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// TypeA is &#39;never&#39; type</span>
<span class="token keyword">type</span> <span class="token class-name">TypeA</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">&amp;</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The <code>never</code> keyword and type is what programming languages refer to as a bottom type, or empty type.</li><li>A bottom type is one that can have no possible values and can’t be reached.</li><li>No types can be provided to a location whose type is a bottom type.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Type &#39;number&#39; is not assignable to type &#39;never&#39;.</span>
<span class="token keyword">const</span> a<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;never&#39;.</span>
<span class="token keyword">const</span> b<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","chapter_04.html.vue"]]);export{u as default};
